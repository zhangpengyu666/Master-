<template>
  <div id="box-nineteen">
    <img src="@/assets/image/images/切图/20.png" class="imm" />
    <div class="meng"></div>

    <main>
      <div>
        <ul>
          <li><button>取消</button></li>
          <li>写评论</li>
          <li><button>发送</button></li>
        </ul>
        <textarea name="" id="" cols="50" rows="6"></textarea>
      </div>
      <img src="@/assets/image/images/切图/20-2.png" />
    </main>
  </div>
</template>

<script>
export default {
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
#box-nineteen {
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
    div {
      width: 100%;
      height: 2.908rem;
      padding: 0.2rem;
      box-sizing: border-box;
      ul {
        width: 100%;
        display: flex;
        justify-content: space-between;
        box-sizing: border-box;
        margin-bottom: 0.2rem;
        li {
          button {
            border: 0;
            width: 1.2rem;
            height: 0.5rem;
            border-radius: 0.1rem;
          }
          &:nth-child(1) button {
            background-color: #ccc;
          }
          &:nth-child(3) button {
            background-color: #2bb281;
            color: #fff;
          }
        }
      }
      textarea {
        border: 0;
        margin: 0 auto;
        width: 100%;
      }
    }
    img {
      width: 100%;
    }
  }
}
</style>
