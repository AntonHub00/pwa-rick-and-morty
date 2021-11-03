const staticCacheName = "static-assets-v1";

const staticAssets = [
  "/",
  "/index.html",
  "/manifest.json",
  "/js/index.js",
  "/js/CardComponent.js",
  "/js/CharacterDisplayer.js",
  "/js/CharacterFetcher.js",
  "/images/notFound.jpg",
  "https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css",
];

self.addEventListener("install", (event) => {
  const preCache = async () => {
    const staticCache = await caches.open(staticCacheName);
    await staticCache.addAll(staticAssets);
  };

  event.waitUntil(preCache());
});

self.addEventListener("activate", (event) => {
  const deleteOldStaticCaches = async () => {
    const currentCacheNames = await caches.keys();

    const toDeleteCacheNames = currentCacheNames.filter(
      (cache) => ![staticCacheName].includes(cache)
    );

    await Promise.all(toDeleteCacheNames.map((cache) => caches.delete(cache)));
  };

  event.waitUntil(deleteOldStaticCaches());
});


self.addEventListener("fetch", async () => {});
