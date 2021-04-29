<template>
  <div class="box">
    <!-- <img src="@/assets/image/images/0颜色.jpg" alt=""> -->
    <!-- 头部导航 -->
    <ul class="nav">
      <li>户型 <i class="iconfont icon-down"></i></li>
      <li>区域 <i class="iconfont icon-down"></i></li>
      <li>风格 <i class="iconfont icon-down"></i></li>
      <li><i class="iconfont icon-search"></i></li>
    </ul>
    <!-- 内容 -->
    <ul class="main">
      <li v-for="item in list" :key="item.id">
        <!-- 图 -->
        <figure>
          <img :src="item.img" alt="" />
          <div>
            <span><i class="iconfont icon-picture"></i>{{ item.picture }}</span>
            <span><i class="iconfont icon-star"></i>{{ item.star }}</span>
          </div>
        </figure>
        <div>
          <p>{{ item.title }}</p>
          <p>
            <span> {{ item.style }} </span>
            <span> {{ item.number }} </span>
            <span> {{ item.price }} </span>
          </p>
        </div>
      </li>
    </ul>
    <!-- 分页按钮 -->
    <div class="page">
      <button>1/86</button>
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
    this.$axios.get("/four.json").then((res) => {
      console.log(res);
      this.list = res.data.list;
    });
  },
  methods: {},
};
</script>

<style lang="scss">
body {
  background-color: #eaeaea;
}
.box {
  border-top: 1px solid #eaeaea;
  font-size: 0.28rem;
  // 头部导航
  .nav {
    display: flex;
    font-size: 0.32rem;
    width: 100%;
    height: 0.92rem;
    align-items: center;
    background-color: #fff;
    li {
      flex: 1;
      border-right: 0.01rem solid #f4f4f4;
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
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    li {
      width: 46%;
      margin-top: 0.24rem;
      background-color: #fff;
      // 图
      figure {
        width: 100%;
        height: 2.251rem;
        position: relative;
        div {
          position: absolute;
          right: 0;
          bottom: 0.12rem;
          span {
            background-color: rgba(0, 0, 0, 0.5);
            color: rgba($color: #fff, $alpha: 0.7);
            margin-right: 0.12rem;
            border-radius: 0.07rem;
            padding: 0.05rem;
            i {
              margin-right: 0.05rem;
            }
          }
        }
      }
      img {
        width: 100%;
        height: 100%;
      }
      > div {
        text-align: center;
        padding: 0.2rem;
        box-sizing: border-box;
        p {
          overflow: hidden; //超出的文本隐藏
          text-overflow: ellipsis; //溢出用省略号显示
          white-space: nowrap; //溢出不换行
          &:first-child {
            font-size: 0.32rem;
          }
          &:last-child {
            font-size: 0.24rem;
            margin-top: 0.1rem;
            margin: 0.1rem auto 0;
          }
          span {
            color: #999;
            margin-right: 0.1rem;
          }
        }
      }
    }
  }
  // 分页按钮
  .page {
    width: 100%;
    padding: 0.25rem 0.2rem;
    box-sizing: border-box;
    button {
      width: 50%;
      height: 0.7502rem;
      border: 0;
      font-size: 0.32rem;
      vertical-align: middle;
      &:first-child {
        background-color: #fff;
      }
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
  }
  // 底部
  footer {
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
