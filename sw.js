self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open('mrwain-cache-v1').then((cache) => {
            return cache.addAll([
                '/',
                '/index.html',
                '/vision.html',
                '/mission.html',
                '/dapps.html',
                '/ledger.html',
                '/donation.html',
                '/hall-of-fame.html',
                '/future-plans.html',
                '/announcement.html',
                '/about.html',
                '/community.html',
                '/chain.html',
                '/bounties.html',
                '/privacy.html',
                '/terms.html',
                '/cookies.html',
                '/docs/quantumpay.html',
                '/docs/truthweb.html',
                '/docs/cloudy.html',
                '/docs/droplink.html',
                '/docs/taskhub.html',
                '/docs/salenus.html',
                '/docs/trendforge.html',
                '/docs/smartsolve.html',
                '/docs/sundaysoul.html',
                '/css/styles.css',
                '/js/scripts.js'
            ]);
        })
    );
});

self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => {
            return response || fetch(event.request);
        })
    );
});
