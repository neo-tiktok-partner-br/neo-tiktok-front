/* Launch cleanup: retire the previous navigation cache and unregister this worker. */
const CACHE_PREFIX = 'neoflow-';

self.addEventListener('install', () => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(
        keys.filter((key) => key.startsWith(CACHE_PREFIX)).map((key) => caches.delete(key)),
      ))
      .then(() => self.registration.unregister()),
  );
});
