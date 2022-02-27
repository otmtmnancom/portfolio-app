import path from 'path'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Pages from 'vite-plugin-pages'
import Layouts from 'vite-plugin-vue-layouts'
import VueI18n from '@intlify/vite-plugin-vue-i18n'
import ViteComponents from 'unplugin-vue-components/vite'
import WindiCSS from 'vite-plugin-windicss'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '~/': `${path.resolve(__dirname, 'src')}/`,
    },
  },
  plugins: [
    vue(),
    Pages({
      extensions: ['vue', 'md'],
    }),
    Layouts(),
    VueI18n({
      compositionOnly: false,
      include: [path.resolve(__dirname, 'locales/**')],
    }),
    ViteComponents({}),
    WindiCSS({}),
  ]
})
