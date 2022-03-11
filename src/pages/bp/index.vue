<template>
  <div class="flex justify-center">
    <home-index />
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
