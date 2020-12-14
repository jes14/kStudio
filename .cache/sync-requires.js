const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/yj/kookkiStudio/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Users/yj/kookkiStudio/src/pages/404.js"))),
  "component---src-pages-about-js": hot(preferDefault(require("/Users/yj/kookkiStudio/src/pages/about.js"))),
  "component---src-pages-archive-js": hot(preferDefault(require("/Users/yj/kookkiStudio/src/pages/archive.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/yj/kookkiStudio/src/pages/index.js"))),
  "component---src-pages-information-js": hot(preferDefault(require("/Users/yj/kookkiStudio/src/pages/information.js"))),
  "component---src-pages-reservation-js": hot(preferDefault(require("/Users/yj/kookkiStudio/src/pages/reservation.js"))),
  "component---src-pages-rooms-js": hot(preferDefault(require("/Users/yj/kookkiStudio/src/pages/rooms.js")))
}

