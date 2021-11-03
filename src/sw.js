const staticCacheName = "static-assets-v1";
const dynamicCacheName = "dynamic-assets-v1";

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
      (cache) => ![staticCacheName, dynamicCacheName].includes(cache)
    );

    await Promise.all(toDeleteCacheNames.map((cache) => caches.delete(cache)));
  };

  event.waitUntil(deleteOldStaticCaches());
});

self.addEventListener("fetch", (event) => {
  const returnCachedOrStoreResponse = async () => {
    const request = event.request;
    let response = await caches.match(request);

    if (response != undefined) return response;

    response = await fetch(request);

    const currentDynamicCache = await caches.open(dynamicCacheName);
    currentDynamicCache.put(request.url, response.clone());
    return response;
  };

  event.respondWith(returnCachedOrStoreResponse());
});
