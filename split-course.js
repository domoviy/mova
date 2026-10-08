#!/usr/bin/env node
/*
  split-course.js — розбиває монолітний файл курсу (Deutsch-B2-Beruf.js) на:

    <out>/all.json, all.<l>.json   весь курс одним пакетом (основна мова / переклад однією мовою)
    <out>/core.json           PRIMARY_LANG, AUDIO_CONFIG, CATS, LC/F/LN, QUIZ, SB_CATS, LESSONS
                              + order (порядок id у кожній колекції) + needs (які пакети потрібні уроку)
    <out>/b/<bucket>.json     контент одного модуля: основна мова + уся структура
    <out>/b/<bucket>.<l>.json переклади цього модуля однією мовою (en | uk | ru), вирівняні за індексом
    <out>/b/shared*.json      те, що не прив'язане до уроку (GRAMMAR, STORY, STORY_TASK, сироти)

  Використання:
    node split-course.js Deutsch-B2-Beruf.js data/Deutsch-B2-Beruf [--group=lesson|chapter] [--parts=all|buckets|both]

  --parts=all      core.json + all.json + all.<l>.json (весь курс одним пакетом на мову) — те, що
                   потрібно клієнту зараз (завантаження одним запитом на мову).
  --parts=buckets  core.json + b/…  (пакети по модулях) — для майбутнього покрокового доступу.
  --parts=both     обидва набори (за замовчуванням).

  Наприкінці скрипт сам збирає все назад із файлів і порівнює з оригіналом:
    1) усі мови разом == оригінал (без втрат);
    2) для кожної мови L: основна + L == оригінал із вирізаними іншими мовами
       (тобто учень з мовою L фізично не отримує чужих перекладів).
  Код виходу 1, якщо перевірка не пройшла.
*/
const fs = require('fs'), vm = require('vm'), path = require('path'), zlib = require('zlib');

const args = process.argv.slice(2).filter(a => !a.startsWith('--'));
const opt = Object.fromEntries(process.argv.slice(2).filter(a => a.startsWith('--')).map(a => a.slice(2).split('=')));
const [SRC, OUT = 'split-out'] = args;
if (!SRC) { console.error('Usage: node split-course.js <Course.js> [outDir] [--group=lesson|chapter]'); process.exit(2); }
const GROUP = opt.group || 'lesson';
const PARTS = opt.parts || 'both';
const WANT_ALL = PARTS !== 'buckets', WANT_BUCKETS = PARTS !== 'all';

// ── Налаштування під формат курсу ────────────────────────────────
const LANGS = ['de', 'en', 'uk', 'ru'];
const MODULE_BOUND = ['VOCAB', 'DIALOGE', 'SPRACHBAUSTEINE', 'SCHREIBEN', 'EMAILS']; // посилання з LESSONS
const SHARED = ['GRAMMAR', 'STORY', 'STORY_TASK'];                                    // не прив'язані до уроку
const REF_FIELDS = ['cardIds', 'sbCards', 'dlgCards', 'frmCards', 'emlCards'];        // поля LESSONS з id

// ── Завантаження курсу ───────────────────────────────────────────
const sb = {}; sb.window = sb; vm.createContext(sb);
vm.runInContext(fs.readFileSync(SRC, 'utf8'), sb);
const PRIMARY = sb.PRIMARY_LANG || 'de';
const OTHERS = LANGS.filter(l => l !== PRIMARY);
const COLLS = [...MODULE_BOUND, ...SHARED].filter(n => Array.isArray(sb[n]));
const CORE_KEYS = Object.keys(sb).filter(k => k !== 'window' && !COLLS.includes(k));

// ── Розбиття дерева: base (основна мова + структура) і sidecar на кожну іншу мову ──
// У sidecar[l] лежить те саме дерево, але ТІЛЬКИ з рядками-значеннями ключа l; масиви
// вирівняні за індексом (null там, де нічого нема), порожні гілки відсутні.
function split(o) {
  if (Array.isArray(o)) {
    const base = [], side = {}, has = {};
    OTHERS.forEach(l => side[l] = []);
    o.forEach(x => {
      const r = split(x); base.push(r.base);
      OTHERS.forEach(l => { side[l].push(r.side[l] === undefined ? null : r.side[l]); if (r.side[l] !== undefined) has[l] = 1; });
    });
    OTHERS.forEach(l => { if (!has[l]) side[l] = undefined; });
    return { base, side };
  }
  if (o && typeof o === 'object') {
    const base = {}, side = {}, has = {};
    OTHERS.forEach(l => side[l] = {});
    for (const k of Object.keys(o)) {
      const v = o[k];
      if (OTHERS.includes(k) && typeof v === 'string') { side[k][k] = v; has[k] = 1; continue; }
      const r = split(v); base[k] = r.base;
      OTHERS.forEach(l => { if (r.side[l] !== undefined) { side[l][k] = r.side[l]; has[l] = 1; } });
    }
    OTHERS.forEach(l => { if (!has[l]) side[l] = undefined; });
    return { base, side };
  }
  return { base: o, side: {} };
}
// Зворотна операція: накласти sidecar на base.
function merge(base, side) {
  if (side === undefined || side === null) return base;
  if (Array.isArray(base)) return base.map((b, i) => merge(b, side[i]));
  if (base && typeof base === 'object') {
    const r = { ...base };
    for (const k of Object.keys(side)) r[k] = (k in base) ? merge(base[k], side[k]) : side[k];
    return r;
  }
  return side;
}
// Оригінал, з якого вирізано всі мови, крім keep (для перевірки «учень не отримує чужого»).
function strip(o, keep) {
  if (Array.isArray(o)) return o.map(x => strip(x, keep));
  if (o && typeof o === 'object') {
    const r = {};
    for (const k of Object.keys(o)) {
      if (LANGS.includes(k) && typeof o[k] === 'string' && !keep.includes(k)) continue;
      r[k] = strip(o[k], keep);
    }
    return r;
  }
  return o;
}
const canon = o => JSON.stringify(o, (k, v) => (v && typeof v === 'object' && !Array.isArray(v))
  ? Object.fromEntries(Object.keys(v).sort().map(x => [x, v[x]])) : v);

// ── Призначення елементів пакетам ────────────────────────────────
// Елемент потрапляє в пакет ПЕРШОГО уроку, що на нього посилається.
// needs[урок] — усі пакети, потрібні уроку (елемент міг лежати в пакеті раннішого уроку).
const known = new Set(); COLLS.forEach(n => sb[n].forEach(x => known.add(x.id)));
const bucketOf = {}, needs = {}, warnings = [];
const bucketKey = l => GROUP === 'chapter' ? 'c' + l.chapter : l.id;
for (const l of sb.LESSONS) {
  const b = bucketKey(l), need = new Set();
  for (const f of REF_FIELDS) for (const id of (l[f] || [])) {
    if (!known.has(id)) { warnings.push(`урок ${l.id}: посилання на неіснуючий id «${id}» (${f})`); continue; }
    if (!(id in bucketOf)) bucketOf[id] = b;
    need.add(bucketOf[id]);
  }
  needs[l.id] = [...need];
}

const buckets = {};   // bucket -> { COLL: [items] }
const order = {};     // COLL -> [id у початковому порядку]
for (const n of COLLS) {
  order[n] = sb[n].map(x => x.id);
  for (const item of sb[n]) {
    const b = SHARED.includes(n) ? 'shared' : (bucketOf[item.id] || 'shared');
    if (b === 'shared' && !SHARED.includes(n)) warnings.push(`${n}/${item.id}: не прив'язаний до жодного уроку → shared`);
    ((buckets[b] = buckets[b] || {})[n] = buckets[b][n] || []).push(item);
  }
}

// ── Запис файлів ─────────────────────────────────────────────────
fs.rmSync(OUT, { recursive: true, force: true });
fs.mkdirSync(path.join(OUT, WANT_BUCKETS ? 'b' : '.'), { recursive: true });
const sizes = {};   // файл -> {raw, gz}
function put(rel, obj) {
  const s = JSON.stringify(obj);
  fs.writeFileSync(path.join(OUT, rel), s);
  sizes[rel] = { raw: Buffer.byteLength(s), gz: zlib.gzipSync(s, { level: 6 }).length };
}
const core = {};
CORE_KEYS.forEach(k => core[k] = sb[k]);
put('core.json', {
  format: 1, hasAll: WANT_ALL, hasBuckets: WANT_BUCKETS,
  globals: core, order, needs,
  langs: { primary: PRIMARY, others: OTHERS },
  buckets: Object.fromEntries(Object.entries(buckets).map(([b, c]) =>
    [b, Object.fromEntries(Object.entries(c).map(([n, a]) => [n, a.length]))])),
});
function writePart(rel, colls) {            // colls: { COLL: [items] }
  const base = {}, side = Object.fromEntries(OTHERS.map(l => [l, {}]));
  for (const [n, items] of Object.entries(colls)) {
    const r = split(items); base[n] = r.base;
    OTHERS.forEach(l => { if (r.side[l] !== undefined) side[l][n] = r.side[l]; });
  }
  put(`${rel}.json`, base);
  OTHERS.forEach(l => { if (Object.keys(side[l]).length) put(`${rel}.${l}.json`, side[l]); });
}
if (WANT_BUCKETS) for (const [b, colls] of Object.entries(buckets)) writePart(`b/${b}`, colls);
if (WANT_ALL) writePart('all', Object.fromEntries(COLLS.map(n => [n, sb[n]])));

// ── Перевірка: збираємо назад із диска ───────────────────────────
function readPart(rel, langs) {
  const base = JSON.parse(fs.readFileSync(path.join(OUT, `${rel}.json`)));
  const sides = langs.map(l => { const f = path.join(OUT, `${rel}.${l}.json`); return fs.existsSync(f) ? JSON.parse(fs.readFileSync(f)) : {}; });
  const res = {};
  for (const n of Object.keys(base)) { let items = base[n]; for (const s of sides) items = merge(items, s[n]); res[n] = items; }
  return res;
}
function rebuild(langs, from) {
  const coll = Object.fromEntries(COLLS.map(n => [n, {}]));
  const rels = from === 'all' ? ['all'] : Object.keys(buckets).map(b => `b/${b}`);
  for (const rel of rels) { const part = readPart(rel, langs); for (const n of Object.keys(part)) part[n].forEach(it => coll[n][it.id] = it); }
  return Object.fromEntries(COLLS.map(n => [n, order[n].map(id => coll[n][id])]));
}
let ok = true;
for (const from of [WANT_ALL && 'all', WANT_BUCKETS && 'buckets'].filter(Boolean)) {
  const all = rebuild(OTHERS, from);
  for (const n of COLLS) if (canon(all[n]) !== canon(sb[n])) { ok = false; console.error(`✗ [${from}] усі мови: розбіжність у`, n); }
  for (const l of OTHERS) {
    const r = rebuild([l], from);
    for (const n of COLLS) if (canon(r[n]) !== canon(strip(sb[n], [PRIMARY, l]))) { ok = false; console.error(`✗ [${from}] ${PRIMARY}+${l}: розбіжність у`, n); }
  }
}

// ── Звіт ─────────────────────────────────────────────────────────
const kb = n => (n / 1024).toFixed(0).padStart(6) + ' KB';
const rawSrc = fs.statSync(SRC).size, gzSrc = zlib.gzipSync(fs.readFileSync(SRC), { level: 6 }).length;
const sum = pred => Object.entries(sizes).filter(([f]) => pred(f)).reduce((a, [, s]) => ({ raw: a.raw + s.raw, gz: a.gz + s.gz }), { raw: 0, gz: 0 });
console.log(`\nОригінал: ${kb(rawSrc)} raw, ${kb(gzSrc)} gzip  (група: ${GROUP})`);
console.log(`Файлів: ${Object.keys(sizes).length}, пакетів: ${Object.keys(buckets).length}`);
const line = (name, s) => console.log(`${name.padEnd(34)} ${kb(s.raw)} raw  ${kb(s.gz)} gzip`);
line('core.json', sizes['core.json']);
if (WANT_ALL) { line('all.json (осн. мова, весь курс)', sizes['all.json']); OTHERS.forEach(l => line(`all.${l}.json`, sizes[`all.${l}.json`] || { raw: 0, gz: 0 })); }
if (WANT_BUCKETS) {
line('shared (основна мова)', sizes['b/shared.json'] || { raw: 0, gz: 0 });
OTHERS.forEach(l => line(`shared.${l}`, sizes[`b/shared.${l}.json`] || { raw: 0, gz: 0 }));
const own = f => /^b\/(?!shared)[^.]+\.json$/.test(f);
const bs = Object.entries(sizes).filter(([f]) => own(f)).map(([, s]) => s.raw).sort((a, b) => a - b);
console.log(`модульні пакети (осн. мова): медіана ${kb(bs[bs.length >> 1])}, макс ${kb(bs[bs.length - 1])}`);
OTHERS.forEach(l => line(`усі модулі, переклад ${l}`, sum(f => new RegExp(`^b/(?!shared)[^.]+\\.${l}\\.json$`).test(f))));
const first = sb.LESSONS[0];
if (WANT_ALL) OTHERS.forEach(l => {
  const g = ['core.json', 'all.json', `all.${l}.json`].reduce((a, f) => a + (sizes[f] ? sizes[f].gz : 0), 0);
  const r = ['core.json', 'all.json', `all.${l}.json`].reduce((a, f) => a + (sizes[f] ? sizes[f].raw : 0), 0);
  console.log(`повний курс для учня «${l}»`.padEnd(34), kb(r), 'raw ', kb(g), 'gzip');
});
OTHERS.forEach(l => {
  let raw = sizes['core.json'].raw, gz = sizes['core.json'].gz;
  const add = f => { if (sizes[f]) { raw += sizes[f].raw; gz += sizes[f].gz; } };
  ['shared', `shared.${l}`].forEach(x => add(`b/${x}.json`));
  needs[first.id].forEach(b => { add(`b/${b}.json`); add(`b/${b}.${l}.json`); });
  console.log(`старт учня «${l}» (core + shared + ${first.id})`.padEnd(34), kb(raw), 'raw ', kb(gz), 'gzip');
});
}
if (warnings.length) { console.log('\nПопередження:'); warnings.forEach(w => console.log(' •', w)); }
console.log(ok ? '\n✓ Перевірка пройдена: збірка з файлів збігається з оригіналом, мовні пакети ізольовані.' : '\n✗ ПЕРЕВІРКА НЕ ПРОЙДЕНА');
process.exit(ok ? 0 : 1);
