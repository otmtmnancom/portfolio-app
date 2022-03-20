<template>
  <div class="fixed top-0 bottom-0 left-0 right-0 justify-center flex items-center">
    <video autoplay muted loop playsinline id="myVideo">
      <source src="/video.mp4" type="video/mp4" />
    </video>
    <img src="/background-index.png" id="myVideo" />
    <img src="/not.png" class="cursor-pointer absolute object-cover right-0 -bottom-10" />
    <div
      class="fixed flex justify-center items-center 2xl:(w-[100%]) w-[1680px] h-[100%] max-h-[1050px]"
    >
      <div class="w-full h-full flex justify-center 2xl:(justify-start) items-center flex-wrap">
        <div
          class="flex flex-col 2xl:(w-[70%] text-dark-900 py-10 px-20 bg-opacity-0) @md:(gap-6) bg-white p-5 bg-opacity-95 gap-3 flex-shrink-0"
        >
          <div
            class="2xl:(text-[80px]) @sm:() @md:(text-[110px] bg-white) @:lg() @xl:() text-[40px]"
          >{{ $t(`home.1`) }}</div>
          <div
            class="2xl:(text-[60px]) @sm:() @md:(text-[55px]) @:lg() @xl:() text-[25px] flex flex-row"
          >
            <span>{{ $t(`home.2`) }}</span>
            &nbsp;
            <span class="text-green-400 2xl:(text-blue-600)">{{ $t(`home.3`) }}</span>
          </div>
          <div class="2xl:(text-[60px]) @sm:() @md:(text-[40px]) @:lg() @xl:() text-[25px]">
            <span>{{ $t(`home.4`) }} &nbsp;</span>
            <span class="text-green-400 2xl:(text-blue-600)">{{ $t(`home.5`) }}</span>
          </div>
          <div class="2xl:(text-[60px]) @sm:() @md:(text-[40px]) @:lg() @xl:() text-[25px]">
            <span>{{ $t(`home.6`) }} &nbsp;</span>
            <span class="text-green-400 2xl:(text-blue-600)">{{ $t(`home.7`) }}</span>
          </div>
          <div>
            <button
              @click="() => {
                $router.replace('/bp/about')
              }"
              class="button rounded-md text-white flex flex-row justify-center gap-2 bg-green-400 px-3 py-2"
            >
              <span class="self-center">{{ $t(`home.8`) }}</span>
            </button>
          </div>
          <div class="flex flex-row gap-2">
            <a
              href="https://www.facebook.com/notbabia/"
              target="_blank"
              class="text-light-50 self-center flex gap-2 gap-2 2xl:(w-8 h-8) @md:(w-10 h-10) w-5 h-5 bg-light-blue-700 justify-center rounded"
            >
              <img src="/fcebook.png" class="2xl:(w-4) @md:(w-4) w-2 self-end" />
            </a>
            <a
              href="https://line.me/ti/p/YuJARGubsx/"
              target="_blank"
              class="text-light-50 self-center flex gap-2 2xl:(w-8 h-8) @md:(w-10 h-10) w-5 h-5 bg-[#06C755] justify-center rounded"
            >
              <img src="/line.png" class="2xl:(w-6) @md:(w-8) w-4 self-center" />
            </a>
            <div class="self-center flex gap-2">
              <span class="material-icons 2xl:(text-3xl) @md:(text-2xl) text-lg self-center">phone</span>
              <p class="self-center text-sm 2xl:(text-2xl) @md:(text-xl)">+66 3 168 3755</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      windowWidth: window.innerWidth,
    }
  },
  computed: {
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

<style lang="scss">
#myVideo {
  position: fixed;
  right: 0;
  bottom: 0;
  object-fit: cover;
  min-width: 100%;
  min-height: 100%;
}
.button {
  transition: all 0.5s;
  span {
    transition: 0.5s;
    &:after {
      content: "\279C";
      position: absolute;
      opacity: 0;
      top: 0;
      right: -20px;
      transition: 0.5s;
    }
  }

  &:hover span {
    position: relative;
    padding-right: 20px;
    &:after {
      opacity: 1;
      right: 0;
    }
  }
}
</style>
