import defaultAxios from '../lib/axios'

export const install = ({ app, store }) => {
  app.config.globalProperties.$axios = defaultAxios
  app.config.globalProperties.$http = defaultAxios

  defaultAxios.interceptors.response.use(response => {
    if (response.data?.session === null) {
      store.commit('setSession', null)
      store.commit('setSessionTimeout', 1)
    }
    return response
  }, error => {
    console.log('response', error)
    return Promise.reject(error)
  })
}
