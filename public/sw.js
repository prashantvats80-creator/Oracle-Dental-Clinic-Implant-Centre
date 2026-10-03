// Oracle Dental Clinic Service Worker - 2G Performance & Offline Strategy
const CACHE_STATIC = 'oracle-dental-static-v2';
const CACHE_IMAGES = 'oracle-dental-images-v2';

const CORE_ASSETS = [
  './',
  './index.html',
  './404.html',
  './robots.txt',
  './sitemap.xml',
  'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Outfit:wght@400;500;600;700;800&display=swap'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_STATIC).then(async (cache) => {
      await Promise.allSettled(
        CORE_ASSETS.map((asset) =>
          cache.add(asset).catch((err) => {
            console.warn(`[SW] Pre-caching asset skipped: ${asset}`, err);
          })
        )
      );
    }).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames
          .filter((name) => name !== CACHE_STATIC && name !== CACHE_IMAGES)
          .map((name) => caches.delete(name))
      );
    }).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;

  const url = new URL(event.request.url);

  // 1. Navigation requests (HTML) -> Network-First with cached fallback
  if (event.request.mode === 'navigate') {
    event.respondWith(
      fetch(event.request)
        .then((response) => {
          if (response.status === 200) {
            const copy = response.clone();
            caches.open(CACHE_STATIC).then((cache) => cache.put('./index.html', copy));
          }
          return response;
        })
        .catch(() => {
          return caches.match('./index.html')
            .then(res => res || caches.match('/index.html'))
            .then(res => res || caches.match('./'))
            .then(res => res || caches.match('/'));
        })
    );
    return;
  }

  // 2. Fonts, CSS, JS static assets -> Cache-First
  if (
    url.hostname.includes('fonts.gstatic.com') ||
    url.hostname.includes('fonts.googleapis.com') ||
    url.pathname.endsWith('.css') ||
    url.pathname.endsWith('.js') ||
    url.pathname.endsWith('.woff2')
  ) {
    event.respondWith(
      caches.match(event.request).then((cached) => {
        if (cached) return cached;
        return fetch(event.request).then((response) => {
          if (response && response.status === 200) {
            const copy = response.clone();
            caches.open(CACHE_STATIC).then((cache) => cache.put(event.request, copy));
          }
          return response;
        });
      })
    );
    return;
  }

  // 3. Medical Images -> Stale-While-Revalidate
  if (
    url.hostname.includes('images.unsplash.com') ||
    url.hostname.includes('i.postimg.cc') ||
    url.pathname.match(/\.(png|jpg|jpeg|svg|webp|gif)$/i)
  ) {
    event.respondWith(
      caches.open(CACHE_IMAGES).then((cache) => {
        return cache.match(event.request).then((cached) => {
          const fetchPromise = fetch(event.request).then((networkResponse) => {
            if (networkResponse && networkResponse.status === 200) {
              cache.put(event.request, networkResponse.clone());
            }
            return networkResponse;
          }).catch(() => cached);

          return cached || fetchPromise;
        });
      })
    );
    return;
  }

  // 4. Default Stale-While-Revalidate
  event.respondWith(
    caches.match(event.request).then((cached) => {
      return cached || fetch(event.request);
    })
  );
});
