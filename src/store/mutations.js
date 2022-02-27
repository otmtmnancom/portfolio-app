import config from '../config'
export default {
    setLang(state, newLang) {
        window.localStorage.setItem(`${config.prefixKey}.lang`, newLang)
        state.lang = newLang
    },
}
