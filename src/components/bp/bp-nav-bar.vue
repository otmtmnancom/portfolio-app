<template>
  <div :class="`bp-nav-bar w-full`">
    <!-- <div
      v-if="!isTopManu"
      class="w-full h-8 bg-dark-400 shadow-current flex justify-end px-2 gap-2"
    >
      <div class="text-light-50 self-center flex gap-2">
        <span class="material-icons text-lg self-center">phone</span>
        <p class="self-center text-sm">093-168-3755</p>
      </div>
      <a
        href="https://www.facebook.com/notbabia/"
        target="_blank"
        class="text-light-50 self-center flex gap-2 w-5 h-5 bg-light-blue-700 justify-center rounded"
      >
        <img src="/fcebook.png" class="w-2 self-end" />
      </a>
      <a
        href="https://line.me/ti/p/YuJARGubsx/"
        target="_blank"
        class="text-light-50 self-center flex gap-2 w-5 h-5 bg-[#06C755] justify-center rounded"
      >
        <img src="/line.png" class="w-4 self-center" />
      </a>
    </div>-->
    <div
      class="flex justify-between align-bottom font-extralight"
      :class="showHumbucker ? 'bg-[white]' : ''"
    >
      <div
        @click="() => {
          $router.replace('/bp')
          showHumbucker = false
          selcetManu = 'home'
        }"
        class="logo flex flex-shrink-0 px-2 cursor-pointer"
      >
        <img src="/icon-bp.png" class="w-3 self-center" />
        <!-- <span
          :class="showHumbucker ? ' mx text-lg px-2 self-center text-black' : 'mx text-lg px-2 self-center'"
        >{{ $t('nav.titelName') }}</span> -->
      </div>
      <div v-if="isHumbucker" class="flex justify-center">
        <div class="flex-shrink-0 self-center ">
          <template v-for=" manu of menuList" :key="manu.key">
            <button
              :class="`p-3 ${selcetManu === manu.key ? 'border-[#1de9b6] text-[#1de9b6] border-b-3' : 'hover:( bg-gray-200)'}`"
              @click="() => {
                $router.replace(manu.to)
                selcetManu = manu.key
              }"
            >
              <label class="flex gap-1 justify-center">
                <!-- <span class="material-icons self-center">{{ manu.icon || '' }}</span> -->
                {{ $t(`nav.manu.${manu.key}`) }}
              </label>
            </button>
          </template>
        </div>
        <div class="flex-shrink-0">
          <ui-button-select
            class="overflow-hidden flex"
            :items="langList"
            v-model:selected="lang"
            :icon="'language'"
          />
        </div>
      </div>
      <div v-else class="flex">
        <button
          class="self-center py-3 px-4 bg-[#1de9b6]"
          :class="showHumbucker && !isHumbucker ? 'bg-white' : 'bg-transparent'"
          @click="() => {
            showHumbucker = !showHumbucker
          }"
        >
          <span
            class="material-icons text-lg text-black"
            :class="showHumbucker && !isHumbucker ? 'text-[#1de9b6] ' : ''"
          >apps</span>
        </button>
      </div>
    </div>
    <div v-if="showHumbucker && !isHumbucker" class="font-extralight text-white shadow-md">
      <template v-for=" manu of menuList" :key="manu.key">
        <label
          class="w-full h-[50px] bg-black flex justify-center gap-2 cursor-pointer hover:(bg-[#1de9b6])"
          @click="() => {
            $router.replace(manu.to)
            showHumbucker = false
            selcetManu = manu.key
          }"
        >
          <!-- <span class="material-icons self-center">{{ manu.icon || '' }}</span> -->
          <div class="self-center">{{ $t(`nav.manu.${manu.key}`) }}</div>
        </label>
      </template>
    </div>
  </div>
</template>
<script>
import config from '../../config'
export default {
  props: {
    menus: {
      type: Array,
      default() {
        return [
          {
            key: 'home',
            icon: 'home',
            to: '/bp',
          },
          {
            key: 'about',
            icon: 'description',
            to: '/bp/about',
          },
          {
            key: 'education',
            icon: 'school',
            to: '/bp/education',
          },
          {
            key: 'experience',
            icon: 'work',
            to: '/bp/experience',
          },
          {
            key: 'knowledge',
            icon: 'menu_book',
            to: '/bp/knowledge',
          },
          {
            key: 'info',
            icon: 'info',
            to: '/bp/info',
          },
        ]
      },
    },
  },
  data() {
    return {
      langList: config.langList,
      menuList: this.menus,
      windowWidth: window.innerWidth,
      txt: '',
      showHumbucker: false,
      scroll: 0,
      selcetManu: 'home',
    }
  },
  computed: {
    lang: {
      get() {
        return this.$store.state.lang
      },
      set(v) {
        this.$store.commit('setLang', v)
        this.$i18n.locale = v
      },
    },
    isTopManu() {
      let lastKnownScrollPosition = 0
      let ticking = false
      const doSomething = (scrollPos) => {
        this.scroll = scrollPos
      }
      window.addEventListener('scroll', (e) => {
        lastKnownScrollPosition = window.scrollY
        if (!ticking) {
          window.requestAnimationFrame(() => {
            doSomething(lastKnownScrollPosition)
            ticking = false
          })
          ticking = true
        }
      })
      return this.scroll > 10
    },
    isHumbucker() {
      return this.windowWidth > 1000
    },
  },

  mounted() {
    this.$nextTick(() => {
      window.addEventListener('resize', this.onResize)
    })
  },

  beforeUnmount() {
    window.removeEventListener('resize', this.onResize)
  },
  methods: {
    onResize() {
      this.windowWidth = window.innerWidth
    },
  },
}
</script>
