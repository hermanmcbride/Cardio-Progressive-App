const CACHE_NAME = "cardio-app-cache-v1";
const urlsToCache = [
  "/Cardio-Progressive-App/",
  "/Cardio-Progressive-App/index.html",
  "/Cardio-Progressive-App/style.css",
  "/Cardio-Progressive-App/script.js"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});
