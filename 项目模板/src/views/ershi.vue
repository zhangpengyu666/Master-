<template>

  <div id="box-twenty">
    <img src="@/assets/image/images/切图/20.png" class="imm" />
    <div class="meng"></div>

    <main>
      <div class="top">
        <div class="li">
          <p>请先登录 <span>登录</span> 或 <span>注册成为房先森用户</span></p>
          <p>登录后才可以评论</p>
        </div>
      </div>
      <img src="@/assets/image/images/切图/20-2.png" />
    </main>

  </div>
</template>

<script>
export default {
<<<<<<< HEAD
  data() {
    return {
      msg: "",
    };
  },
  mounted() {},
  methods: {},
};
</script>

<style lang="scss" scoped>
#box-twenty {
  .imm {
    width: 100%;
    height: 100%;
  }
  .meng {
    width: 100%;
    height: 100%;
    background-color: rgba($color: #000000, $alpha: 0.7);
    position: fixed;
    top: 0;
    left: 0;
  }
  main {
    background-color: #eaeaea;
    position: fixed;
    bottom: 0;
    width: 100%;
    font-size: 0.32rem;
    .top {
      width: 100%;
      height: 2.908rem;
      padding: 0.2rem;
      box-sizing: border-box;
      position: relative;
      .li {
        width: 100%;
        position: absolute;
        top: 50%;
        left: 50%;
        text-align: center;
        transform: translate(-50%, -50%);
        p {
          line-height: 0.6rem;
          span {
            color: #39c894;
          }
        }
      }
    }
    img {
      width: 100%;
    }
  }
}

</style>

