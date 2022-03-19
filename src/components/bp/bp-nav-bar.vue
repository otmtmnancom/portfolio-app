<template>
  <div :class="`bp-nav-bar w-full`">
    <div
      class="flex justify-between align-bottom font-extralight"
      :class="showHumbucker && !isHumbucker ? 'bg-[white]' : ''"
    >
      <div
        @click="() => {
          $router.replace('/bp')
          showHumbucker = false
          selcetManu = 'home'
        }"
        class="logo flex flex-shrink-0 px-2 cursor-pointer"
      >
        <!-- <img src="/icon-bp.png" class="w-3 self-center" /> -->
        <span class="px-3 text-lg self-center font-dancing">Bodinwiwat {{ paramUrl }}</span>
      </div>
      <div v-if="isHumbucker" class="flex justify-center">
        <div class="flex-shrink-0 self-center">
          <template v-for=" manu of menuList" :key="manu.key">
            <button
              :class="`p-3 ${paramUrl === manu.key ? 'border-[#1de9b6] text-[#1de9b6] border-b-3' : 'text-amber-300 font-medium hover:( text-[#1de9b6] )'}`"
              @click="() => {
                $router.replace(manu.to)
                selcetManu = manu.key
              }"
            >
              <label class="flex gap-1 justify-center">{{ $t(`nav.manu.${manu.key}`) }}</label>
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
      <div v-else class="flex px-2">
        <button
          class="self-center py-3 px-4 bg-[#1de9b6]"
          :class="showHumbucker && !isHumbucker ? 'bg-white' : 'bg-transparent'"
          @click="() => {
            showHumbucker = !showHumbucker
          }"
        >
          <span
            class="material-icons text-lg text-amber-300"
            :class="showHumbucker && !isHumbucker ? 'text-[#1de9b6] ' : ''"
          >apps</span>
        </button>
        <button
          class="flex flex-row items-center gap-2"
          @click="() => {
            lang = lang === 'th' ? 'en' : 'th'
          }"
        >
          <span class="material-icons text-sm font-mono text-amber-300 uppercase">{{ lang }}</span>
        </button>
      </div>
    </div>
    <div v-if="showHumbucker && !isHumbucker" class="text-white shadow-md">
      <template v-for=" manu of menuList" :key="manu.key">
        <label
          :class="!isHumbucker ? 'froward' : ''"
          class="w-full h-[50px] bg-black flex justify-center gap-2 cursor-pointer border-b-1 hover:(bg-[#1de9b6])"
          @click="() => {
            $router.replace(manu.to)
            showHumbucker = false
            selcetManu = manu.key
          }"
        >
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
            key: 'bp',
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
    paramUrl() {
      let path = this.$route.fullPath.split('/')
      return path[path.length - 1]
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
  watch: {
    windowWidth(val) {
      if (val > 1000 && this.showHumbucker) {
        this.showHumbucker = false
      }
    }
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

<style>
@font-face {
  font-family: DancingScrip;
  src: url("../../../public/fonts/DancingScript-SemiBold.ttf");
}

.font-dancing {
  font-family: DancingScrip;
}

.froward {
  -webkit-animation-name: humbucker;
  -webkit-animation-duration: 0.5s;
  -webkit-animation-iteration-count: 1;
  -webkit-animation-timing-function: ease;
  -webkit-animation-fill-mode: forwards;
}

@-webkit-keyframes humbucker {
  from {
    -webkit-transform: translateY(-100%);
  }
  to {
    -webkit-transform: translateY(0%);
  }
}
</style>
