<template>
  <div
    v-show="show"
    class="mask"
    :style="{ height: height + 'px' }"
    @click="hide"
  >
    <transition name="lt">
      <div v-if="show" class="mask_inner">
        <span class="close center">x</span>
        <slot></slot>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  props: ["show"],
  data() {
    return {
      height: window.screen.height,
    };
  },
  mounted() {},
  computed: {},
  methods: {
    hide() {
      this.$emit("hide", false);
    },
  },
};
</script>

<style lang="scss">
.mask {
  width: 100%;
  height: 100px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba($color: #000000, $alpha: 0.3);
  z-index: 100;
  .mask_inner {
    height: 290px;
    width: 100%;
    background: #fff;
    position: absolute;
    left: 0;
    bottom: 0;
    z-index: 105;

    transition: transform 1s;
    .close {
      position: absolute;
      right: 0;
      top: 0;
      font-size: 20px;
      background: #fff;
      display: flex;
      width: 30px;
      height: 30px;
      z-index: 200;
    }
  }
}

.lt-enter-active {
  animation: show-in 1s;
}

@keyframes show-in {
  0% {
    transform: translate(0, 290px);
  }
  100% {
    transform: translate(0, 0);
  }
}
</style>
