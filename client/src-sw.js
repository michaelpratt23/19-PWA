const { precacheAndRoute } = require("workbox-precaching");
const { registerRoute } = require("workbox-routing");
const { CacheFirst } = require("workbox-strategies");
const { CacheableResponsePlugin } = require("workbox-cacheable-response");
const { ExpirationPlugin } = require("workbox-expiration");

precacheAndRoute(self.__WB_MANIFEST);

registerRoute(
  ({ request }) => request.mode === "navigate",
  new CacheFirst({
    cacheName: "page-cache",
    plugins: [
      new CacheableResponsePlugin({ statuses: [0, 200] }),
      new ExpirationPlugin({ maxAgeSeconds: 30 * 24 * 60 * 60 }),
    ],
  })
);

registerRoute(
  ({ request }) => ["style", "script", "worker"].includes(request.destination),
  new CacheFirst({
    cacheName: "asset-cache",
    plugins: [new CacheableResponsePlugin({ statuses: [0, 200] })],
  })
);
