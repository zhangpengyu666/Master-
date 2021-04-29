<template>
  <div
    class="banner"
    @touchstart="touchStart"
    @touchmove="touchMove"
    @touchend="touchEnd"
  >
    <ul
      :style="{
        width: 100 * list.length + '%',
        left: left,
        transition: transition,
      }"
    >
      <li v-for="item in list" :key="item.id">
        <img :src="item.picUrl" alt="" />
      </li>
    </ul>
  </div>
</template>

<script>
var timer1, timer2;
export default {
  props: {
    list: {
      type: Array,
    },
    autoplay: {
      default: false,
    },
  },
  data() {
    return {
      left: "-100%",
      dir: "left",
      startX: 0,
      //滑动开始的位置
      transition: "none",
    };
  },
  mounted() {
    if (this.autoplay !== false) {
      setInterval(() => {
        this.touchEnd();
      }, 3000);
    }
  },
  methods: {
    touchStart(e) {
      this.startX = e.touches[0].pageX;
      //   console.log(e.touches[0].pageX);
    },
    //手指放在屏幕上的时候获取按下的x轴位置
    touchMove(e) {
      console.log(e);
      if (e.touches[0].pageX - this.startX < 0) {
        this.dir = "left";
      } else {
        this.dir = "right";
      }
    },
    touchEnd(e) {
      if (this.dir == "left") {
        clearTimeout(timer1);
        this.left = "-200%";
        this.transition = "left 1s linear";
        timer1 = setTimeout(() => {
          this.transition = "none";
          this.left = "-100%";
          let pic = this.list.shift();
          this.list.push(pic);
        }, 1000);
      } else {
        clearTimeout(timer2);
        this.left = "0px";
        this.transition = "left 1s linear";
        timer2 = setTimeout(() => {
          this.transition = "none";
          this.left = "-100%";
          let pic2 = this.list.pop();
          this.list.unshift(pic2);
        }, 1000);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.banner {
  width: 100%;
  height: 5rem;
  overflow: hidden;
  position: relative;
  ul {
    display: flex;
    height: 100%;
    position: absolute;
    top: 0;
    li {
      flex: 1;
      height: 100%;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
}
</style>
