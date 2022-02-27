import util from '../lib/util'
import config from '../config'

let lang = util.getLang(`${config.prefixKey}.lang`, 'th')
window.localStorage.setItem(`${config.prefixKey}.lang`, lang)

export default () => {
    return {
        lang,
    }
}