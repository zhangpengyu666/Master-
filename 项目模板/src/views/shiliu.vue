<template>
  <div id="box-sixteen">
    <img src="@/assets/image/images/切图/10quoted.jpg" class="banner" />
    <figure>
      <h3>房先森10s报价</h3>
      <ul>
        <li><hr /></li>
        <li>
          <img src="@/assets/image/images/切图/common/icon_title.png" alt="" />
        </li>
        <li><hr /></li>
      </ul>
    </figure>

    <!-- 表单模块 -->
    <article>
      <input type="text" value="80" />
      <input type="text" value="现代" />
      <ul>
        <li>
          <button>-</button>
          <span> <i>2</i> <i>室</i> </span>
          <button>+</button>
        </li>
        <li>
          <button>-</button>
          <span> <i>2</i> <i>室</i> </span>
          <button>+</button>
        </li>
      </ul>
      <ul class="uu">
        <li>
          <button>-</button>
          <span> <i>1</i> <i>厨房</i> </span>
          <button>+</button>
        </li>
        <li>
          <button>-</button>
          <span> <i>1</i> <i>卫</i> </span>
          <button>+</button>
        </li>
        <li>
          <button>-</button>
          <span> <i>1</i> <i>阳台</i> </span>
          <button>+</button>
        </li>
      </ul>
      <p>立即报价</p>
    </article>

    <figure>
      <h3>我们可以为您提供</h3>
      <ul>
        <li><hr /></li>
        <li>
          <img src="@/assets/image/images/切图/common/icon_title.png" alt="" />
        </li>
        <li><hr /></li>
      </ul>
    </figure>

    <!-- 宫格 -->
    <ul class="sudoku">
      <li>
        <span> <i class="iconfont icon-app"></i> </span>
        <p>产品系列</p>
        <p>半包、全包套餐、全屋定制及个性化升级</p>
      </li>
      <li>
        <span> <i class="iconfont icon-price"></i> </span>
        <p>0 元装修</p>
        <p>与建行合作装修贷款,实现 0 元开启装修</p>
      </li>
      <li>
        <span> <i class="iconfont icon-live"></i> </span>
        <p>工地直播</p>
        <p>工地巡检照片、360 度全景节点验收</p>
      </li>
      <li>
        <span> <i class="iconfont icon-preferential"></i> </span>
        <p>合作优惠</p>
        <p>正品材料工厂直供,F2C 让利用户</p>
      </li>
      <li>
        <span> <i class="iconfont icon-construction-site"></i> </span>
        <p>参观工地</p>
        <p>随时预约参观工地,零距离感受施工工艺</p>
      </li>
      <li>
        <span> <i class="iconfont icon-protection"></i> </span>
        <p>售后保障</p>
        <p>整装 2 年质保,隐蔽水电工程 10 年质保</p>
      </li>
    </ul>
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
      msg: "",
      list: [],
    };
  },
  mounted() {},
  methods: {},
};
</script>

<style lang="scss" scoped>
#box-sixteen {
  font-size: 0.28rem;
  .banner {
    width: 100%;
  }
  figure {
    text-align: center;
    box-sizing: border-box;
    padding: 0.2rem 0.25rem;
    width: 100%;
    h3 {
      font-weight: 400;
    }
    ul {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-top: 0.2rem;
      li:first-child,
      li:last-child {
        width: 40%;
        hr {
          border: 0.01rem solid #dcdcdc;
        }
      }
      img {
        width: 0.8rem;
      }
    }
  }
  //   表单模块
  article {
    box-sizing: border-box;
    padding: 0 0.25rem;
    border-bottom: 0.25rem solid #eaeaea;
    > input {
      width: 100%;
      margin-bottom: 0.25rem;
      border: 0.01rem solid #dcdcdc;
      height: 0.76rem;
      padding-left: 0.2rem;
      box-sizing: border-box;
    }
    > ul {
      display: flex;
      justify-content: space-between;
      li {
        width: 48%;
        display: flex;
        justify-content: space-between;
        height: 0.72rem;
        line-height: 0.72rem;
        border: 0.01rem solid #eaeaea;
        span {
          display: flex;
          width: 60%;
          justify-content: space-between;
          i {
            font-style: normal;
            font-size: 0.24rem;
          }
        }

        button {
          width: 0.36rem;
          color: #999;
          background-color: #eaeaea;
          border: 0;
          font-size: 0.4rem;
        }
      }
    }
    > .uu {
      li {
        width: 31%;
        margin: 0.25rem 0;
      }
    }
    p {
      width: 100%;
      height: 0.72rem;
      background-color: #00bd9c;
      text-align: center;
      color: #fff;
      line-height: 0.72rem;
      margin: 0.2rem 0 0.5rem 0;
    }
  }

  // 宫格
  .sudoku {
    width: 100%;
    padding: 0 0.25rem;
    box-sizing: border-box;
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 0.25rem;
    > li {
      width: 33.33%;
      border: 0.01rem solid #eaeaea;
      box-sizing: border-box;
      text-align: center;
      padding: 0.2rem 0.05rem;
      border-bottom: 0;
      border-left: 0;
      > span {
        // border: 0.03rem solid #2bb281;
        background-color: #2bb281;
        display: inline-block;
        width: 1.2rem;
        height: 1.2rem;
        border-radius: 50%;
        i {
          font-size: 0.6rem;
          text-align: center;
          line-height: 1.2rem;
          color: #fff;
        }
      }
      > p {
        margin-top: 0.1rem;
        &:nth-of-type(2) {
          color: #666;
          font-size: 0.24rem;
        }
      }
      &:nth-child(1),
      &:nth-child(2),
      &:nth-child(3) {
        border-top: 0;
      }
      &:nth-child(3),
      &:nth-child(6) {
        border-right: 0;
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
    border: 0.25rem solid #eaeaea;
    border-left: 0;
    border-right: 0;
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
