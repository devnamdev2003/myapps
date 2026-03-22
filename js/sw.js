// Basic Service Worker required by Chrome for PWA installation
self.addEventListener('install', (event) => {
    // Skip waiting so the service worker becomes active immediately
    self.skipWaiting();
});

self.addEventListener('activate', (event) => {
    // Claim clients to immediately control the open pages
    event.waitUntil(clients.claim());
});

self.addEventListener('fetch', (event) => {
    // This basic fetch handler is required to pass the PWA installability test.
    // It simply lets the browser handle requests normally as it usually would.
    event.respondWith(
        fetch(event.request).catch(() => {
            // If the user goes completely offline, you can add code here later 
            // to serve an offline fallback page.
            console.log("Device is offline.");
        })
    );
});