const CACHE_NAME = "chick-house-v2";

self.addEventListener("install", (event) => {
self.skipWaiting();
});

self.addEventListener("activate", (event) => {
event.waitUntil(
(async () => {
const cacheNames = await caches.keys();

  await Promise.all(
    cacheNames
      .filter((name) => name.startsWith("chick-house-") && name !== CACHE_NAME)
      .map((name) => caches.delete(name))
  );

  await self.clients.claim();
})()

);
});
