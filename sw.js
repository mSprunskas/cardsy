self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open('cardsy-store').then((cache) => cache.addAll([
      '/',
      '/index.html',
      '/index.js',
      '/style.css',
      '/images/pet24.png',
    ])),
  );
});

self.addEventListener('fetch', (e) => {
  console.log(e.request.url);
  e.respondWith(
    caches.match(e.request).then((response) => response || fetch(e.request)),
  );
});
