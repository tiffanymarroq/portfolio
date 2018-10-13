const pkg = require('./package')
const bodyParser = require('body-parser')
const axios = require('axios')
const key = require('./keys')

module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: 'Tiffany Marroquin',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Portfolio' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href:'https://fonts.googleapis.com/css?family=Nunito'},
      { rel: 'stylesheet', href: 'https://use.fontawesome.com/releases/v5.3.1/css/all.css'}
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#1762a1', height: '4px', duration: 5000 },
  loadingIndicator: {
    name: 'circle',
    color: '#1762a1'
  },

  /*
  ** Global CSS
  */
  css: [
    '~assets/styles/main.css'
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~plugins/core-components.js',
    '~plugins/date-filter.js',
    '~plugins/vue-lazyload.js'
    
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/axios',
  ],
  axios :{
    baseURL:  process.env.BASE_URL || key.firebase.databaseURL,
    creditials: false
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      
    }
  },
  env: {
    baseUrl: process.env.BASE_URL || key.firebase.databaseURL,
    fbAPIKey: key.firebase.apiKey,
    dbAPIKey: key.dropbox.accessToken,
    databaseURL: key.firebase.databaseURL,
  },
  transition: {
    name: 'fade',
    mode: 'out-in'
  },
  serverMiddleware: [
    bodyParser.json(),
    '~/api'
  ],
  generate: {
    routes: function() {
     return axios.get(databaseURL+'/posts.json')
      .then(res => {
        const routes = []
        for(const key in res.data){
          routes.push({
            routes: '/posts/' + key,
            payload: {postData: res.data[key]}
          })
        }
        return routes
      })
    }
  }  
}
