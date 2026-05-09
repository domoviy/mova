// ══ MOVA Service Worker ══════════════════════════════════════
// ⚠️  Змінюйте CACHE_VERSION при кожному оновленні файлів на GitHub.
//     Браузер виявить зміну і автоматично завантажить нову версію.
//     Формат: 'mova-v<major>.<minor>' — напр. mova-v1.1, mova-v1.2
const CACHE_VERSION = 'mova-v1.1';

const ASSETS = [
  '/mova/',
  '/mova/index.html',
  '/mova/vocab-data.js',
  '/mova/manifest.json',
  '/mova/icon-192.png',
  '/mova/icon-512.png',
  'https://fonts.googleapis.com/css2?family=Syne:wght@800&family=Figtree:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap'
];

// ── Встановлення ──────────────────────────────────────────────
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE_VERSION)
      .then(cache => cache.addAll(ASSETS))
      .then(() => self.skipWaiting())
  );
});

// ── Активація: видаляємо старі кеші ──────────────────────────
self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(
        keys.filter(k => k !== CACHE_VERSION).map(k => caches.delete(k))
      ))
      .then(() => self.clients.claim())
  );
});

// ── Fetch ─────────────────────────────────────────────────────
self.addEventListener('fetch', e => {
  const url = new URL(e.request.url);

  // vocab-data.js: Network First — нові картки одразу без зміни версії SW
  if(url.pathname.endsWith('vocab-data.js')){
    e.respondWith(
      fetch(e.request)
        .then(res => {
          caches.open(CACHE_VERSION).then(c => c.put(e.request, res.clone()));
          return res;
        })
        .catch(() => caches.match(e.request))
    );
    return;
  }

  // Все інше: Cache First (офлайн-підтримка)
  e.respondWith(
    caches.match(e.request).then(cached => cached ||
      fetch(e.request).then(res => {
        caches.open(CACHE_VERSION).then(c => c.put(e.request, res.clone()));
        return res;
      })
    )
  );
});


const ASSETS = [
  '/mova/',
  '/mova/index.html',
  '/mova/vocab-data.js',
  '/mova/manifest.json',
  'https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=Figtree:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap'
];

// ── Встановлення: кешуємо всі файли ──────────────────────────
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE_VERSION)
      .then(cache => cache.addAll(ASSETS))
      .then(() => self.skipWaiting())
  );
});

// ── Активація: видаляємо старі кеші ──────────────────────────
self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys
          .filter(k => k !== CACHE_VERSION)
          .map(k => caches.delete(k))
      )
    ).then(() => self.clients.claim())
  );
});

// ── Fetch: Cache First для assets, Network First для даних ───
self.addEventListener('fetch', e => {
  const url = new URL(e.request.url);

  // vocab-data.js — Network First (щоб нові картки підтягувались одразу)
  if (url.pathname.endsWith('vocab-data.js')) {
    e.respondWith(
      fetch(e.request)
        .then(res => {
          const clone = res.clone();
          caches.open(CACHE_VERSION).then(c => c.put(e.request, clone));
          return res;
        })
        .catch(() => caches.match(e.request))
    );
    return;
  }

  // Все інше — Cache First (офлайн-робота)
  e.respondWith(
    caches.match(e.request)
      .then(cached => cached || fetch(e.request)
        .then(res => {
          const clone = res.clone();
          caches.open(CACHE_VERSION).then(c => c.put(e.request, clone));
          return res;
        })
      )
  );
});

// ── Оновлення: повідомляємо клієнта ──────────────────────────
self.addEventListener('message', e => {
  if (e.data === 'SKIP_WAITING') self.skipWaiting();
});
