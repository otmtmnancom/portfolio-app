<template>
  <div class="ui-button-select">
    <div class="dropdown">
      <button class="dropbtn text-amber-300 flex flex-row justify-center p-[9px]" :value="selected">
        <div class="flex justify-center font-medium gap-1">
          <span class="material-icons text-lg self-center">{{ icon || '' }}</span>
          <p class="text-center py-1">{{ items.find(e => e.value === selected).text }}</p>
        </div>
      </button>

      <div class="dropdown-content text-amber-300 font-medium">
        <a
          class="block text-canter h-full text-center py-2"
          v-for="item of items.filter(e => e.value !== selected) "
          :key="item.value"
          :value="item.value"
          @click="$emit('update:selected', item.value)"
        >{{ item.text }}</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    icon: String,
    items: {
      type: Array,
      default() {
        return []
      },
    },
    selected: [String, Number, Object],
  },
  emits: [
    'update:selected',
  ],
}
</script>

<style lang="scss">
.dropbtn {
  position: relative;
  border: 0px;
  min-width: 120px;
  width: 100%;
  outline: none;
  box-sizing: border-box;
  transform-style: preserve-3d;
  transform-origin: 50% 0%;
  transition: transform 0.3s;
  z-index: 99;
}

.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-content {
  overflow: hidden;
  position: absolute;
  width: 100%;
  top: 0%;
  height: 0px;
  border-radius: 0px;
  // background-color: #ffff;
  transition: all 0.3s ease;
  opacity: 0;
  cursor: pointer;
}

.dropdown:hover {
  .dropdown-content {
    display: block;
    height: 65px;
    opacity: 1;
  }

  .dropbtn {
    background-color: white;
    box-shadow: 0px 10px 10px -6px black;
    transform: rotate3d(1, 0, 0, 80deg);
  }
}
</style>
