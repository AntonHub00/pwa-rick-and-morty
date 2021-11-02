const staticCacheName = "static-assets-v1";

const staticAssets = [
  "/",
  "/index.html",
  "/js/index.js",
  "/js/CardComponent.js",
  "/js/CharacterDisplayer.js",
  "/js/CharacterFetcher.js",
  "/css/index.css",
  "/images/notFound.jpg",
];

self.addEventListener("install", (event) => {
  const preCache = async () => {
    const staticCache = await caches.open(staticCacheName);
    await staticCache.addAll(staticAssets);
  };

  event.waitUntil(preCache());
});

self.addEventListener("activate", async () => {});

self.addEventListener("fetch", async () => {});
