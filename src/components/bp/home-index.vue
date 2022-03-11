<template>
  <div class="flex justify-center items-center w-[1680px] h-[100%] max-h-[1050px]">
    <div class="w-full h-full flex justify-around items-center flex-wrap px-10">
      <div class="flex flex-col gap-3 flex-shrink-0">
        <div class="text-[60px]">Hi There,</div>
        <div class="text-[40px] flex flex-row">
          <span>I'm</span>
          &nbsp;
          <span class="text-green-400">Bodinwiwat Phunsiriwon</span>
        </div>
        <div class="text-[40px]">
          <span>You can call me &nbsp;</span>
          <span class="text-green-400">Not</span>
        </div>
        <div class="text-[30px]">
          <span>I'm into &nbsp;</span>
          <span class="text-green-400">Web Developer</span>
        </div>
        <div>
          <button
            @click="$router.replace('/bp/about')"
            class="button rounded-md text-white flex flex-row justify-center gap-2 bg-orange-400 px-3 py-2"
          >
            <span class="self-center">About Me</span>
          </button>
        </div>
        <div class="flex flex-row gap-2">
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
          <div class="self-center flex gap-2">
            <span class="material-icons text-lg self-center">phone</span>
            <p class="self-center text-sm">+66 3 168 3755</p>
          </div>
        </div>
      </div>
      <div
        class="w-80 h-80 rounded-full flex justify-center items-center"
        style=" background-size: 400px ; background-image: url(/IMG_0397.JPG) ; background-position: 50% 30%;  background-repeat: no-repeat, repeat;"
      >
        <!-- <img class src="/IMG_0397.JPG" /> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.button {
  transition: all 0.5s;
  // cursor: pointer;
  // margin: 5px;

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
    // margin-left: 20px;
    &:after {
      opacity: 1;
      right: 0;
    }
  }
}
</style>
