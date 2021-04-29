<template>
  <div class="">
    <div class="loading center" v-if="show">
      <div class="inner">
        <img src="@/assets/image/Loading.png" alt="" />
      </div>
    </div>
  </div>

  <!-- 因为每个axios都需要使用loading,我们想要把这个loading放在拦截器里使用， 所以我们要把这个loading组件变成一个方法使用-->
</template>

<script>
export default {
  props: ["show"],
  data() {
    return {};
  },
  mounted() {},
  methods: {},
};
</script>

<style lang="scss" scoped>
.loading {
  width: 3.5rem;
  height: 3.5rem;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 0.1rem;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  .inner {
    width: 1rem;
    height: 1rem;
    img {
      width: 100%;
      height: 100%;
      animation: iconrotate 1s linear infinite;
    }
  }
}
@keyframes iconrotate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
