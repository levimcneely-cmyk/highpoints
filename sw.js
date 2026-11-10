// Service worker: lets the site open offline and install to the home screen.
// Network-first, so you always get the newest files when you're online.
const CACHE = 'summit-log-v2';
const SHELL = ['./', 'index.html', 'peak.html', 'data.js', 'util.js', 'sync.js',
  'vendor/d3.min.js', 'vendor/topojson-client.min.js', 'vendor/states-10m.json',
  'manifest.webmanifest', 'favicon.svg', 'icon-192.png'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(SHELL)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', e => {
  const req = e.request, url = new URL(req.url);
  if (req.method !== 'GET' || url.origin !== location.origin) return;   // sheet + fonts go straight to the network
  e.respondWith(
    fetch(req).then(res => {
      if (res.ok) { const copy = res.clone(); caches.open(CACHE).then(c => c.put(req, copy)); }
      return res;
    }).catch(() => caches.match(req, { ignoreSearch: true }).then(r => r || caches.match('index.html')))
  );
});
