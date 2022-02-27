import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'

import generatedRoutes from 'virtual:generated-pages'
import { setupLayouts } from 'virtual:generated-layouts'

import vuexStore from './store/vuex'
import App from './app.vue'

import 'virtual:windi.css'

const routes = setupLayouts(generatedRoutes)

const router = createRouter({
    history: createWebHashHistory(),
    routes,
  })

  const app = createApp(App)
  .use(vuexStore)
  .use(router)

  Object.values(import.meta.globEager('./modules/*.js')).map(i => i.install?.({ app, store: vuexStore }))

app.mount('#app')
