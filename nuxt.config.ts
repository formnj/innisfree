// https://nuxt.com/docs/api/configuration/nuxt-config

// console.log(`HOSTNAME : ${process.env.HOSTNAME}`)

export default defineNuxtConfig({
  css: ['~/assets/css/global.css', '~/assets/scss/global.scss', '~/assets/scss/common.scss'],
  plugins: ['~/plugins/checkout.ts'],
  image: {
    cloudinary: {
      baseURL: 'https://res.cloudinary.com/nuxt/image/upload/'
    }
  },
  devtools: { enabled: true },
  modules: ['@nuxt/image'],
  runtimeConfig: {
    innerDomain:
      process.env.NODE_ENV === 'development'
        ? 'https://dev-inm-gateway.apddev.com'
        : 'http://inm-gateway.inm:8080',
    public: {
      HOST_NAME: process.env.HOSTNAME || 'localhost',
      NODE_VERSION: process.env.NODE_VERSION
    },
    app: {
      cdnURL: process.env.CDN_URL
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
  }
})
