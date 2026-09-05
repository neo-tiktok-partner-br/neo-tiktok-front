/* ==========================================================================
   neøflow // Official TikTok Partners — Service Worker (sw.js)
   PWA & Offline Cache Strategy: Network-First (Pages) / Stale-While-Revalidate (Assets)
   ========================================================================== */

const CACHE_NAME = 'neoflow-v3';
const PRECACHE_ASSETS = [
  '/',
  '/favicon.ico',
  '/assets/logo_partners.svg',
  '/shop',
  '/creators',
  '/marketing',
  '/tech',
  '/legal/privacidade',
  '/legal/termos'
];

// Instalação do Service Worker & Precache de assets vitais
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(PRECACHE_ASSETS))
      .catch((err) => {
        console.warn('[neøflow sw] Precache parcial:', err);
      })
      .finally(() => self.skipWaiting())
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
  const url = new URL(request.url);

  // Ignorar localhost, esquemas não-http, requisições não-GET e internals do Vite/HMR
  if (
    request.method !== 'GET' ||
    !request.url.startsWith('http') ||
    url.hostname === 'localhost' ||
    url.hostname === '127.0.0.1' ||
    url.pathname.startsWith('/@') ||
    url.pathname.includes('vite')
  ) {
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
      const fetchPromise = fetch(request)
        .then((networkResponse) => {
          if (networkResponse.ok) {
            const responseClone = networkResponse.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(request, responseClone));
          }
          return networkResponse;
        })
        .catch(() => {
          // FIXADO: retornava undefined quando offline e sem cache
          // respondWith(undefined) é erro não-tratado — agora retorna Response vazio
          return cachedResponse || new Response('', { status: 503, statusText: 'Offline' });
        });

      // Retorna cache instantâneo ou aguarda rede
      return cachedResponse || fetchPromise;
    })
  );
});
