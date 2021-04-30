<template>
  <div>
    <!-- 头部广告 -->
    <header class="header">
      <!-- 二维码 -->
      <div class="code">二维码</div>
      <div class="tag">
        <img src="@/assets/image/images/切图/关注.png" alt />
      </div>
      <div class="advertising">
        关注房先森官方微信号
        <span>sirfang.com</span>
      </div>
      <!-- 关闭按钮 -->
      <div class="exit">
        <i class="iconfont icon-close"></i>
      </div>
    </header>
    <!-- 头部搜索框 -->
    <div class="box-search">
      <input type="text" placeholder="请输入关键字" />
      <button>搜索</button>
    </div>
    <!-- 装修TAB切换 -->
    <div class="tab-zx">
      <ul class="uu1">
        <li
          v-for="(item, index) in list"
          :key="index"
          :class="{ green: index == greens }"
          @click="fn1(index)"
        >
          {{ item }}
        </li>
      </ul>
      <ul class="uu2">
        <li>
          <div class="top">
            <div class="content" v-for="(item, index) in rlist" :key="index">
              <div class="radio">
                <i class="iconfont green" :class="[item.icon]"></i>
              </div>
              <p>{{ item.title }}</p>
            </div>
          </div>
          <div class="bottom">了解装修流程</div>
        </li>
      </ul>
    </div>
    <!-- 为您推荐 -->
    <div class="recommend">
      <p class="top">为您推荐</p>
      <li class="conent" v-for="(item, index) in tuijian" :key="index">
        <div class="left"></div>
        <div class="right">
          <p>{{ item.title }}</p>
          <div class="bottom">
            <div><i class="iconfont icon-time"></i>2016-07-07</div>
            <div><i class="iconfont icon-view"></i>115</div>
          </div>
        </div>
      </li>
    </div>

    <div class="bott">
        房先森互联网家装有别于传统装修公司与其他装修中介平台，以自营模式
            整合设计师与项目经理，杜绝项目转包外包，利用互联网将工地进行在线
            全景直播，通过去中间环节，提供装修套餐+个性化定制服务。
    </div>
  </div>
</template>
<script>
// import  from '../components/'
export default {
  components: {
    // 注册子组件
  },
  data() {
    return {
      list: ["装修前", "装修中", "装修后"],
      greens: 0,
      rlist: [],
      tuijian: [],
    };
  },
  mounted() {
    this.$axios("/data1.json").then((res) => {
      this.rlist = res.data.data[0].cont;
    });
    this.$axios("/data.json").then((res) => {
      this.tuijian = res.data.data;
    });
  },
  methods: {
    // 方法
    fn1(i) {
      this.greens = i;
      this.$axios("/data1.json").then((res) => {
        this.rlist = res.data.data[i].cont;
      });
    },
  },
  computed: {
    // 计算
    num1() {
      let res = 0;

      return res;
    },
  },
  filters: {
    // 过滤
  },
};
</script>
<style lang='scss' scoped>
* {
  margin: 0;
  padding: 0;
  list-style: none;
  font-size: 16px;
  box-sizing: border-box;
}
.bott {
  padding-top: 20px;
  margin-top: 500px;
  margin-bottom: 50px;
  text-indent: 1rem;
}
.header {
  background-color: #39c893;
  width: 100%;
  height: 1rem;
  position: relative;
  .code {
    position: absolute;
    top: 0.05rem;
    left: 0.3rem;
    width: 1rem;
    height: 0.9rem;
    font-size: 0.35rem;
    background-color: white;
  }
  .tag {
    width: 40%;
    height: 0.35rem;
    position: absolute;
    top: 0.1rem;
    left: 1.7rem;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .advertising {
    width: 65%;
    height: 0.38rem;
    position: absolute;
    top: 0.53rem;
    left: 1.7rem;
    background-color: white;
    border-radius: 15px;
    color: white;
    background-color: #2bb280;
    span {
      color: #ecd114;
    }
  }
  .exit {
    width: 0.4rem;
    height: 0.4rem;
    position: absolute;
    top: 0;
    right: 0;
    i {
      font-size: 20px;
    }
  }
}
.box-search {
  width: 100%;
  height: 1rem;
  display: flex;
  padding-top: 0.05rem;
  justify-content: center;
  border-bottom: 0.2rem #f4f4f4 solid;
  input {
    width: 75%;
    border: 2px #39c894 solid;
    font-size: 15px;
    color: #aaa;
    height: 0.8rem;
    box-sizing: border-box;
  }
  button {
    width: 1.5rem;
    height: 0.8rem;
    border: none;
    background-color: #39c894;
    color: white;
  }
}
.tab-zx {
  width: 100%;
  height: 3.8rem;
  border-bottom: 0.2rem #f4f4f4 solid;
  .uu1 {
    height: 0.8rem;
    width: 100%;
    display: flex;

    li {
      height: 100%;
      line-height: 0.8rem;
      text-align: center;
      flex: 1;
      border-bottom: 1px #efefef solid;
      box-sizing: border-box;
    }
    .green {
      border-bottom: 2px #39c894 solid;
    }
  }
  .uu2 {
    width: 100%;
    height: 3rem;
    li {
      width: 100%;
      height: 100%;

      .top {
        width: 100%;
        height: 2rem;
        display: flex;
        .content {
          flex: 1;
          height: 100%;
          text-align: center;
          .radio {
            border: 2px solid #39c894;
            border-radius: 50%;
            width: 1rem;
            height: 1rem;
            margin: 0.2rem auto;
            .green {
              color: #39c894;
              font-size: 0.6rem;
              line-height: 1rem;
            }
          }
          p {
            width: 100%;
            text-align: center;
          }
        }
      }
      .bottom {
        width: 95%;
        height: 0.7rem;
        box-sizing: border-box;
        border: 1px solid #39c794;
        border-radius: 3px;
        margin-top: 0.1rem;
        margin-left: 2.5%;
        color: #39c894;
        text-align: center;
        line-height: 0.7rem;
      }
    }
  }
}
.recommend {
  width: 100%;
  height: 5rem;
  padding: 0.2rem 0.1rem;
  box-sizing: border-box;
  .top {
    border-left: 3px #39c894 solid;
    text-align-last: left;
    padding-left: 0.15rem;
  }
  .conent {
    width: 100%;
    height: 1.5rem;
    padding: 0.2rem 0;
    border-bottom: 1px #f4f4f4 solid;
    .left {
      float: left;
      height: 100%;
      width: 30%;
      background: pink;
    }
    .right {
      float: left;
      width: 70%;
      height: 100%;
      box-sizing: border-box;
      padding-left: 0.2rem;
      position: relative;
      p {
        text-align-last: left;
        font-size: 0.35rem;
        line-height: 0.5rem;
      }
      .bottom {
        width: 100%;
        height: 0.5rem;
        display: flex;
        position: absolute;
        bottom: 0;
        div {
          width: 50%;
          text-align-last: left;
          line-height: 0.6rem;
          font-size: 0.3rem;
          color: #8f8f8f;
        }
      }
    }
  }
}
</style>