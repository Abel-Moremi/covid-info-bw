// Add these
var path = require('path')
const PrerenderSPAPlugin = require('prerender-spa-plugin')
// Renders headlessly in a downloaded version of Chromium through puppeteer
const JSDOMRenderer = require('@prerenderer/renderer-jsdom')

module.exports = {
  "transpileDependencies": [
    "vuetify"
  ],

  pwa: {
    workboxPluginMode: 'GenerateSW',
    workboxOptions: {
      navigateFallback: '/index.html',
      runtimeCaching: [
        {
          urlPattern: new RegExp('^https://yourbotswana.com/wp-json/wp/v2/posts'),
          handler: 'networkFirst',
          options: {
            networkTimeoutSeconds: 20,
            cacheName: 'api-cache',
            cacheableResponse: {
              statuses: [0, 200]
            }
          }
        },
        {
          urlPattern: new RegExp('^https://www.sabcnews.com/sabcnews/wp-json/wp/v2/posts'),
          handler: 'networkFirst',
          options: {
            networkTimeoutSeconds: 20,
            cacheName: 'api-cache',
            cacheableResponse: {
              statuses: [0, 200]
            }
          }
        },
        {
          urlPattern: new RegExp('^https://economist.com.na/wp-json/wp/v2/posts'),
          handler: 'networkFirst',
          options: {
            networkTimeoutSeconds: 20,
            cacheName: 'api-cache',
            cacheableResponse: {
              statuses: [0, 200]
            }
          }
        },
        {
          urlPattern: new RegExp('^https://covid19.mathdro.id/api/countries/namibia'),
          handler: 'networkFirst',
          options: {
            networkTimeoutSeconds: 20,
            cacheName: 'api-cache',
            cacheableResponse: {
              statuses: [0, 200]
            }
          }
        },
        {
          urlPattern: new RegExp('^https://covid19.mathdro.id/api/countries/south%20africa'),
          handler: 'networkFirst',
          options: {
            networkTimeoutSeconds: 20,
            cacheName: 'api-cache',
            cacheableResponse: {
              statuses: [0, 200]
            }
          }
        },
        {
          urlPattern: new RegExp('^https://corona.lmao.ninja/all'),
          handler: 'networkFirst',
          options: {
            networkTimeoutSeconds: 20,
            cacheName: 'api-cache',
            cacheableResponse: {
              statuses: [0, 200]
            }
          }
        }
      ]
    }
  },

  configureWebpack: {
    plugins: [
      new PrerenderSPAPlugin({
        staticDir: path.join(__dirname, 'dist'), // The path to the folder where index.html is.
        indexPath: path.join(__dirname, 'dist', 'index.html'),
        registry: undefined,
        routes: [
          '/',
          '/news',
          '/sadc-news',
          '/community',
          '/map',
          '/info'
        ], // List of routes to prerender.
        renderer: new JSDOMRenderer(),
        useRenderEvent: true,
        headless: true,
        onlyProduction: true,
      })
    ]
  }
}
