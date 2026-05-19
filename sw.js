// ── MOVA Service Worker ───────────────────────────────────────
// Щоб примусово оновити кеш — змінюй тільки CACHE_VERSION нижче.
// index.html більше не передає ?v= — версія контролюється тут.
const CACHE_VERSION = '1.1.4';
const CACHE_NAME    = `mova-v${CACHE_VERSION}`;

// Файли що кешуються при першій установці (app shell)
const PRECACHE = [
  './',
  './index.html',
  // Курси завантажуються динамічно — не в precache
  './manifest.json',
  './icon-192.png',
  './icon-512.png',
];

// ── INSTALL: кешуємо app shell і одразу активуємось ──────────
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(PRECACHE))
      .then(() => self.skipWaiting()) // одразу витісняємо старий SW — не чекаємо
  );
});

// ── ACTIVATE: видаляємо старі кеші ───────────────────────────
self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys
          .filter(k => k.startsWith('mova-') && k !== CACHE_NAME)
          .map(k => {
            console.log('[SW] Видаляю старий кеш:', k);
            return caches.delete(k);
          })
      )
    ).then(() => self.clients.claim()) // одразу беремо контроль над всіма вкладками
  );
});

// ── MESSAGE: SKIP_WAITING від index.html ─────────────────────
self.addEventListener('message', e => {
  if (e.data?.type === 'SKIP_WAITING') {
    console.log('[SW] SKIP_WAITING отримано → активуємось');
    self.skipWaiting();
  }
});

// ── FETCH: стратегія Network-first для HTML/JS, Cache-first для аудіо ──
self.addEventListener('fetch', e => {
  const url = new URL(e.request.url);

  // Аудіо файли: cache-first (великі, рідко змінюються)
  if (url.pathname.startsWith('/audio/') || url.pathname.includes('.mp3')) {
    e.respondWith(
      caches.match(e.request).then(cached => {
        if (cached) return cached;
        return fetch(e.request).then(resp => {
          if (resp.ok) {
            const clone = resp.clone();
            caches.open(CACHE_NAME).then(c => c.put(e.request, clone));
          }
          return resp;
        }).catch(() => cached); // офлайн — повертаємо кешоване якщо є
      })
    );
    return;
  }

  // App shell (HTML, JS, іконки): network-first → fallback до кешу
  // Це гарантує що оновлений index.html завжди завантажується при наявності мережі
  e.respondWith(
    fetch(e.request)
      .then(resp => {
        if (resp.ok && (
          url.pathname.endsWith('.html') ||
          url.pathname.endsWith('.js')   ||
          url.pathname === '/' ||
          url.pathname === ''
        )) {
          const clone = resp.clone();
          caches.open(CACHE_NAME).then(c => c.put(e.request, clone));
        }
        return resp;
      })
      .catch(() => caches.match(e.request))
  );
});
