<template>
  <div class="fixed top-0 bottom-0 left-0 right-0 justify-center flex items-center">
    <div class="content flex justify-center w-full h-full" :class="fontChange">
      <div class="w-full h-full">
        <router-view />
      </div>
    </div>
    <div class="bp-page overflow-hidden flex justify-center top-0 w-full" :class="fontChange">
      <bp-nav-bar class="self-center w-[1680px]" />
    </div>
  </div>
</template>

<script>
export default {
  beforeRouteEnter(to, from, next) {
    // this.$router.replace('/bp/home')
    next()
  },
  computed: {
    fontChange() {
      return this.$store.state.lang === 'en' ? 'font-extralight' : 'font-thin'
    },
  },
}
</script>

<style lang="scss">
.bp-page {
  overflow: hidden;
  position: fixed;
  top: 0;
  // display: fixed;
  // top: 0;
  // left: 0;
  // right: 0;
  // bottom: 0;
  > .content {
    position: fixed;
    top: 40px;
    left: 0;
    right: 0;
    bottom: 0;
    overflow: hidden;
  }
}
</style>
