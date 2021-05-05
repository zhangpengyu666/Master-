<template>
      
  <div class="">
    <div class="xrp_ema">
      <ul>
        <li>
          <div>
            <p><i class="iconfont icon-user"></i> <span>x*p</span></p>

            <p>2016-05-19</p>
          </div>
          <p class="con">这篇文章很有用，正在装修，刚好可以用来参考一下</p>
        </li>
        <li>
          <div>
            <p><i class="iconfont icon-user"></i> <span>x*p</span></p>

            <p>2016-05-19</p>
          </div>
          <p class="con">这篇文章很有用，正在装修，刚好可以用来参考一下</p>
        </li>
        <li>
          <div>
            <p><i class="iconfont icon-user"></i> <span>x*p</span></p>

            <p>2016-05-19</p>
          </div>
          <p class="con">这篇文章很有用，正在装修，刚好可以用来参考一下</p>
        </li>
        <li>
          <div>
            <p><i class="iconfont icon-user"></i> <span>x*p</span></p>

            <p>2016-05-19</p>
          </div>
          <p class="con">这篇文章很有用，正在装修，刚好可以用来参考一下</p>
        </li>
        <li>
          <div>
            <p><i class="iconfont icon-user"></i> <span>x*p</span></p>

            <p>2016-05-19</p>
          </div>
          <p class="con">这篇文章很有用，正在装修，刚好可以用来参考一下</p>
        </li>
        <footer class="bom">
          <div class="left">上一页</div>
          <div class="cent">2/30</div>
          <div class="right">下一页</div>
        </footer>
      </ul>
    </div>
    <div class="bott">
        房先森互联网家装有别于传统装修公司与其他装修中介平台，以自营模式
            整合设计师与项目经理，杜绝项目转包外包，利用互联网将工地进行在线
            全景直播，通过去中间环节，提供装修套餐+个性化定制服务。
    </div>
  </div>
</template>

<script>

export default {
  data() {
    
  },
  mounted() {},
  methods: {
    
  },
  components: {
   
  },
};
</script>

<style lang='scss'>

.bott {
  font-size: 16px;
  box-sizing: border-box;
  margin-top: 30px;
  margin-bottom: 50px;
  text-indent: 1rem;
}
.hie {
  margin-top: 0.5rem;
  font-size: 0.4rem;
  p {
    text-align: center;
    span {
      color: #39c894;
    }
  }
}
.xrp_ema {
  .uus {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  .bta {
    background-color: #cccccc;
    width: 1.32rem;
    height: 0.2rem;
    font-size: 0.28rem;
    text-align: center;
    line-height: 0.3rem;
    border-radius: 0.13rem;
  }
  .btb {
    background-color: #39c894;
    width: 1.32rem;
    height: 0.2rem;
    font-size: 0.28rem;
    text-align: center;
    line-height: 0.3rem;
    border-radius: 0.13rem;
  }
  .pl {
    background-color: #1b9af7;
    width: 0.94rem;
    height: 0.94rem;
    font-size: 0.46rem;
    color: #fff;
    text-align: center;
    line-height: 0.94rem;
    border-radius: 50%;
    position: fixed;
    bottom: 3.5rem;
    right: 0.3rem;
  }
  .logo {
    width: 130%;
  }
  ul {
    margin: 0.2rem 0 0.2rem 0;
    li {
      padding-bottom: 0.3rem;
      padding-top: 0.15rem;
      border-top: 1px solid #eaeaea;
      border-bottom: 1px solid #eaeaea;

      font-size: 0.4rem;
      .con {
        font-size: 0.5rem;
      }
      div {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0.15rem;
        margin: 0.35rem 0;
        span {
          color: #39c894;
        }
      }
    }

    .bom {
      margin: 0 !important;
      display: flex;
      justify-content: space-around;
      width: 7.2rem !important;
      font-size: 0.36rem;
      text-align: center;
      margin: 0.3rem auto !important;
      .left {
        color: #fff;
        margin: 0;
        flex: 1;
        background-color: #39c894;
      }
      .right {
        color: #fff;
        margin: 0;
        flex: 1;
        background-color: #39c894;
      }
      .cent {
        margin: 0;
        flex: 1;
      }
    }
  }
}
</style>
