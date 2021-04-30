<template>
  <div class="box" id="box-ten">
    <!-- 头部导航 -->
    <ul class="nav">
      <li>户型 <i class="iconfont icon-down"></i></li>
      <li>区域 <i class="iconfont icon-down"></i></li>
      <li>风格 <i class="iconfont icon-down"></i></li>
      <li><i class="iconfont icon-search"></i></li>
    </ul>
    <!-- 内容列表 -->
    <ul class="main">
      <li v-for="item in list" :key="item.id">
        <img :src="item.img" alt="" />
        <div>
          <p>{{ item.title }}</p>
          <p>{{ item.style }}</p>
          <p>
            <span>{{ item.number }}</span>
            <span>{{ item.square }}</span>
            <span>
              <i class="iconfont icon-location"></i>
              {{ item.location }}
            </span>
          </p>
        </div>
      </li>
    </ul>
    <!-- 按钮步进器 -->
    <div class="page">
      <button>上一页</button>
      <button>2/30</button>
      <button>下一页</button>
    </div>
    <!-- 描述文字 -->
    <section>
      房先森互联网家装有别于传统装修公司与其他装修中介平台，
      以自营模式整合设计师与项目经理，利用互联网将工地进行在线全景直播，
      通过去中间环节，提供装修套餐 + 个性化定制服务。
    </section>
    <!-- 底部 -->
    <footer>
      <p><i class="iconfont icon-hot-line"></i> 服务热线:17757169861</p>
      <ul>
        <li>触屏版</li>
        <li>电脑版</li>
        <li>关于我们</li>
        <li>联系我们</li>
      </ul>
      <div>
        <span>© 2016 </span>
        浙ICP备15033817号-1
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [],
    };
  },
  mounted() {
    this.$axios.get("/ten.json").then((res) => {
      console.log(res);
      this.list = res.data.list;
    });
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
#box-ten {
  // 头部导航
  .nav {
    display: flex;
    font-size: 0.32rem;
    width: 100%;
    height: 0.92rem;
    align-items: center;
    background-color: #fff;
    border-top: 0.01rem solid #eaeaea;
    border-bottom: 0.01rem solid #eaeaea;
    li {
      flex: 1;
      border-right: 0.01rem solid #eaeaea;
      text-align: center;
      i {
        color: #999;
      }
      &:last-child {
        border: 0;
        i {
          font-size: 0.5rem;
          color: #2bb281;
        }
      }
    }
  }
  // 内容列表
  .main {
    box-sizing: border-box;
    padding: 0 0.2rem;
    font-size: 0.32rem;
    li {
      border-bottom: 0.01rem solid #eaeaea;
      padding: 0.2rem 0;
      height: 2.251rem;
      box-sizing: border-box;
      display: flex;
      img {
        height: 100%;
        width: 2.4688rem;
      }
      > div {
        width: 100%;
        margin-left: 0.2rem;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        p:nth-child(2) {
          font-size: 0.28rem;
          background-color: #2bb281;
          color: #fff;
          text-align: center;
          width: 1.32rem;
          height: 0.4rem;
          border-radius: 0.1rem;
        }
        p:nth-child(3) {
          font-size: 0.28rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          color: #999;
        }
      }
    }
  }
  //   按钮步进器
  > .page {
    width: 100%;
    padding: 0.25rem 0.2rem;
    box-sizing: border-box;
    display: flex;
    margin-bottom: 0.1rem;
    button {
      flex: 1;
      height: 0.7502rem;
      border: 0;
      font-size: 0.32rem;
      vertical-align: middle;
      &:nth-child(2) {
        border: 1px solid #eaeaea;
        border-left: 0;
        border-right: 0;
        background-color: #fff;
      }
      &:first-child,
      &:last-child {
        background-color: #39c894;
        color: #fff;
      }
    }
  }
  // 描述文字
  section {
    background-color: #fff;
    width: 100%;
    padding: 0.2rem;
    box-sizing: border-box;
    color: #666;
    text-indent: 3em;
    line-height: 0.4rem;
    margin-bottom: 0.25rem;
    font-size: 0.28rem;
  }
  // 底部
  footer {
    font-size: 0.28rem;
    background-color: #fff;
    width: 100%;
    padding: 0.2rem;
    box-sizing: border-box;
    text-align: center;
    p {
      i {
        color: #2bb281;
        vertical-align: middle;
      }
    }
    ul {
      display: flex;
      justify-content: space-evenly;
      border-bottom: 0.01rem solid #eaeaea;
      padding: 0.2rem 0;
      li:first-child {
        color: #2bb281;
      }
    }
    div {
      margin: 0.3rem 0;
      span {
        color: #999;
      }
    }
  }
}
</style>
