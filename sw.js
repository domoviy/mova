// sw.js — Service Worker для MOVA PWA
// CACHE_VERSION оновлюється автоматично GitHub Actions при кожному деплої
const CACHE_VERSION = '184-545312a';
const CACHE_NAME = `mova-${CACHE_VERSION}`;

const PRECACHE = [
  '/',
  '/index.html',
  '/manifest.json',
  '/icon-192.png',
  '/icon-512.png',
  // Inter — локальні woff2 файли
  '/fonts/inter-v20-latin-regular.woff2',
  '/fonts/inter-v20-latin-500.woff2',
  '/fonts/inter-v20-latin-600.woff2',
  '/fonts/inter-v20-latin-700.woff2',
  '/fonts/inter-v20-latin-800.woff2',
];

// Встановлення — кешуємо всі файли з PRECACHE
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(PRECACHE))
  );
  self.skipWaiting();
});

// Активація — видаляємо старі кеші
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

// Fetch — Cache First для шрифтів і статики, Network First для решти
self.addEventListener('fetch', event => {
  const url = new URL(event.request.url);

  // Cache First: шрифти, іконки — рідко змінюються
  if (url.pathname.startsWith('/fonts/') || url.pathname.match(/\.(png|ico|webp)$/)) {
    event.respondWith(
      caches.match(event.request).then(cached =>
        cached || fetch(event.request).then(res => {
          const clone = res.clone();
          caches.open(CACHE_NAME).then(c => c.put(event.request, clone));
          return res;
        })
      )
    );
    return;
  }

  // Network First: index.html — завжди свіжий якщо є мережа
  if (url.pathname === '/' || url.pathname.endsWith('index.html')) {
    event.respondWith(
      fetch(event.request)
        .then(res => {
          const clone = res.clone();
          caches.open(CACHE_NAME).then(c => c.put(event.request, clone));
          return res;
        })
        .catch(() => caches.match(event.request))
    );
    return;
  }

  // Network First: audio/manifest.json — джерело правди для хешів аудіо.
  // Застаріла відповідь тут означає неправильне рішення "кеш чи мережа"
  // для самих mp3-файлів, тому, на відміну від звичайних ресурсів,
  // ми НЕ показуємо стару версію поки паралельно йде оновлення —
  // чекаємо мережу і лише при її відсутності падаємо в кеш (офлайн).
  if (url.pathname.endsWith('/audio/manifest.json')) {
    event.respondWith(
      fetch(event.request)
        .then(res => {
          const clone = res.clone();
          caches.open(CACHE_NAME).then(c => c.put(event.request, clone));
          return res;
        })
        .catch(() => caches.match(event.request))
    );
    return;
  }

  // Cache First: audio/*.mp3 — самі аудіофайли не інвалідуються тут.
  // Актуальність перевіряється на клієнті через хеш з manifest.json
  // (index.html сам вирішує, коли обійти цей кеш і перезапросити файл
  // з мережі при зміні хешу). SW лише віддає те, що просять, і кешує
  // нові завантаження — це мінімізує трафік для тисяч mp3-файлів.
  if (url.pathname.includes('/audio/') && url.pathname.endsWith('.mp3')) {
    event.respondWith(
      caches.match(event.request).then(cached =>
        cached || fetch(event.request).then(res => {
          if (res.ok) {
            const clone = res.clone();
            caches.open(CACHE_NAME).then(c => c.put(event.request, clone));
          }
          return res;
        })
      )
    );
    return;
  }

  // Stale While Revalidate для решти
  event.respondWith(
    caches.match(event.request).then(cached => {
      const networkFetch = fetch(event.request).then(res => {
        const clone = res.clone();
        caches.open(CACHE_NAME).then(c => c.put(event.request, clone));
        return res;
      });
      return cached || networkFetch;
    })
  );
});
