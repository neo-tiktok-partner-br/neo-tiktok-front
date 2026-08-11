/* ==========================================================================
   neøflow // Official TikTok Partners — Service Worker (sw.js)
   PWA & Offline Cache Strategy: Network-First (Pages) / Stale-While-Revalidate (Assets)
   ========================================================================== */

const CACHE_NAME = 'neoflow-v1';
const PRECACHE_ASSETS = [
  '/',
  '/favicon.ico',
  '/assets/logo_partners.svg',
  '/legal/privacidade',
  '/legal/termos',
  '/legal/direitos-titular',
  '/legal/decreto-ecommerce'
];

// Instalação do Service Worker & Precache de assets vitais
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(PRECACHE_ASSETS).catch((err) => {
        console.warn('[neøflow sw] Precache aviso:', err);
      });
    }).then(() => self.skipWaiting())
  );
});

// Ativação e limpeza de caches antigos
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cache) => {
          if (cache !== CACHE_NAME) {
            return caches.delete(cache);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

// Interceptação de requisições
self.addEventListener('fetch', (event) => {
  const request = event.request;

  // Ignorar requisições não-GET e esquemas não-http(s) (ex: chrome-extension)
  if (request.method !== 'GET' || !request.url.startsWith('http')) {
    return;
  }

  // Estratégia 1: Navegação/Páginas HTML -> Network First com Fallback em Cache
  if (request.mode === 'navigate' || request.headers.get('accept')?.includes('text/html')) {
    event.respondWith(
      fetch(request)
        .then((networkResponse) => {
          if (networkResponse.ok) {
            const responseClone = networkResponse.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(request, responseClone));
          }
          return networkResponse;
        })
        .catch(() => {
          return caches.match(request).then((cachedResponse) => {
            return cachedResponse || caches.match('/');
          });
        })
    );
    return;
  }

  // Estratégia 2: Imagens, CSS, JS, Fontes -> Stale-While-Revalidate
  event.respondWith(
    caches.match(request).then((cachedResponse) => {
      const fetchPromise = fetch(request).then((networkResponse) => {
        if (networkResponse.ok) {
          const responseClone = networkResponse.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(request, responseClone));
        }
        return networkResponse;
      }).catch((err) => {
        console.debug('[neøflow sw] Rede offline para asset:', request.url);
      });

      return cachedResponse || fetchPromise;
    })
  );
});
