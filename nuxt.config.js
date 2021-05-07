export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'Hutech It Alumni Association',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@200;400;600;700;900',
      },
    ],
  },

  // loading bar
  loading: { color: '#0c2461' },
  loadingIndicator: {
    name: 'circle',
    color: '#3B8070',
    background: 'white',
  },
  // server listen
  server: {
    port: 8000, // default: 3000
    // eslint-disable-next-line prettier/prettier
    host: '0.0.0.0' // default: localhost
  },
  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: ['@/assets/less/all.less'],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    '@/plugins/antd-ui',
    {
      src: '~/plugins/VueFlickity.js',
      ssr: false,
    },
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
    '@nuxtjs/auth',
  ],

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  // Content module configuration (https://go.nuxtjs.dev/config-content)
  content: {},

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    loaders: {
      less: {
        lessOptions: {
          javascriptEnabled: true,
        },
      },
    },
  },
  env: {
    // http://localhost:3000
    baseApiUrl: 'https://hutech-alumnni-social.herokuapp.com',
  },
  auth: {
    strategies: {
      local: {
        endpoints: {
          // eslint-disable-next-line prettier/prettier
          login: { url: 'https://hutech-alumnni-social.herokuapp.com/api/auth/login', method: 'post', propertyName: 'token' },
          logout: {
            url: 'https://hutech-alumnni-social.herokuapp.com/api/auth/logout',
            method: 'post',
          },
          // eslint-disable-next-line prettier/prettier
          user: { url: 'https://hutech-alumnni-social.herokuapp.com/api/auth/user', method: 'get', propertyName: 'user' },
          // eslint-disable-next-line prettier/prettier
          propertyName: "token",
        },
        logout: true,
      },
      admin: {
        endpoints: {
          // eslint-disable-next-line prettier/prettier
          login: { url: 'https://hutech-alumnni-social.herokuapp.com/admin/login', method: 'post', propertyName: 'token' },
          logout: {
            url: 'https://hutech-alumnni-social.herokuapp.com/admin/logout',
            method: 'post',
          },
          // eslint-disable-next-line prettier/prettier
          propertyName: "token",
        },
        logout: true,
      },
    },
  },
}
