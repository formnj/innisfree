// https://nuxt.com/docs/api/configuration/nuxt-config

import { fileURLToPath, URL } from 'url'
console.log(`HOSTNAME : ${process.env.HOSTNAME}`)

export default defineNuxtConfig({
  css: ['~/assets/css/global.css', '~/assets/scss/global.scss', '~/assets/scss/common.scss', '~/assets/scss/_mo_mixin.scss'],
  plugins: ['~/plugins/checkout.ts'],
  image: {
    cloudinary: {
      baseURL: 'https://res.cloudinary.com/nuxt/image/upload/'
    }
  },
  devtools: { enabled: true },
  modules: ['@nuxt/image'],
  runtimeConfig: {
    innerDomain: process.env.NODE_ENV === 'development' ? 'https://dev-inm-gateway.apddev.com' : 'http://inm-gateway.inm:8080',
    public: {
      HOST_NAME: process.env.HOSTNAME || 'localhost',
      NODE_VERSION: process.env.NODE_VERSION
    },
    app: {
      cdnURL: process.env.CDN_URL || '/'
    }
  },
  nitro: {
    storage: {
      redis: {
        driver: 'redis',
        cluster: [
          {
            port: 6379,
            host: 'devops-dev-redis-inm.z29geh.clustercfg.apn2.cache.amazonaws.com'
          }
        ]
      }
    }
  },
  routeRules: {
    '/sample/no-ssr': { ssr: false },
    '/sample/lazy-fetch': { ssr: false },
    '/sample/no-lazy-fetch': { ssr: false },
    '/sample/only-csr': { ssr: false }
  },

  alias: {
    '@assets': fileURLToPath(new URL('./assets', import.meta.url)),
    '@consts': fileURLToPath(new URL('./constants', import.meta.url)),
    '@utils': fileURLToPath(new URL('./utils', import.meta.url))
  },
  components: [
    {
      path: '~/components/common',
      pathPrefix: false,
      prefix: 'Inm'
    },
    '~/components'
  ]

  // vite: {
  //   css: {
  //     transformer: 'lightningcss'
  //   },
  //   build: {
  //     cssMinify: 'lightningcss'
  //   }
  // }
})
