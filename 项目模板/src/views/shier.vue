<template>
  <div class="">
    <div class="information">
      <div class="img">
        <div></div>
      </div>
      <div class="text">
        <div class="frist">
          <span>陈冲</span>
          <span class="cla">优秀</span>
        </div>
        <div class="second">
          <span
            >作品：<span class="silver">8个</span></span
          >
          <span
            >经验：<span class="silver">5年</span></span
          >
        </div>
        <div class="tried">
          <span
            >擅长风格：<span
              ></span
            ></span
          >
        </div>
        <div class="forth">
          <span class="silver">在满足使用功能的前提下达到审美功能的最大化</span>
        </div>
      </div>
    </div>
    <div class="operating">
      <div class="one1">
        <i class="iconfont icon-thumb-up one"></i
        ><span class="orange">人气()</span>
      </div>
      <div class="two1">
        <i class="iconfont icon-pencle two"></i
        ><span class="blue">评价()</span>
      </div>
      <div class="three1">
        <i class="iconfont icon-design three"
          ><span class="red">找我设计</span></i
        >
      </div>
    </div>
    <div class="Introduction">
      <p>
        个人简介：<span class="silver"
          >毕业于中国美术学院，从事家装行业3年，积累了一定的经验
          。具有良好的审美能力以及独立完成项目方案设计能力。工作期间曾完成多个是室内精装修项目，熟悉室内装修施工工艺及材料的运用，切合实际生活的设计，营造舒适的私人空间。</span
        >
      </p>
    </div>
    <div class="job">
        <p>设计作品 <span class="silver">设计收费 50-100元/㎡</span></p>
    </div>
    <div class="recommend">
        <ul>
            <li class="box">
            <img src="@/assets/1620210943(1).png" alt="">

            </li>
        </ul>
    </div>
     <div class="bottom-content">
        <p>
          房先森互联网家装有别于传统装修公司与其他装修中介平台，以自营模式整合设计师与项目经理，杜绝项目转包外包，利用互联网将工地进行在线全景直播，通过去中间环节，提供装修套餐+个性化定制服务。
        </p>
      </div>
      <foot></foot>
  </div>
</template>

<script>
// import foot from '@/components/footer.vue'
export default {
  data() {
    return {
    
    };
  },
  mounted() {
    
  },
  methods: {},
  components:{
   
  }
};
</script>

<style lang='scss' scoped>
.box{
  width: 100%;
  img{
    width: 100%;
  }
}
.information {
  width: 100%;
  display: flex;
  // flex-wrap: wrap;
  .img {
    padding: 0.2rem;
    div {
      width: 2rem;
      height: 2rem;
      background-color: rgb(12, 190, 107);
      border-radius: 50%;
    }
  }
  .text {
    width: 100%;
    padding: 0.2rem 0;
    .frist {
      width: 100%;
      font-size: 0.38rem;
      margin-bottom: 0.2rem;
      .cla {
        width: 0.7rem;
        text-align: center;
        display: inline-block;
        font-size: 0.2rem;
        margin-left: 0.28rem;
        background-color: #0cbe6b;
        border-radius: 3px;
        color: white;
      }
    }
    .second {
      width: 100%;
      margin-bottom: 0.2rem;
      font-size: 0.3rem;
    }
    .tried {
      width: 100%;
      margin-bottom: 0.2rem;
      font-size: 0.3rem;
    }
    .forth {
      width: 100%;
      font-size: 0.3rem;
    }
  }
}
.silver {
  color: #999999;
}
.operating {
  box-sizing: border-box;
  padding: 0.6rem;
  width: 100%;
  display: flex;
  justify-content: center;
  div {
    margin-bottom: 0.25rem;
    margin-right: 0.4rem;
    margin-left: 0.4rem;
    width: 1rem;
    height: 1rem;
    border: 1px solid black;
    text-align: center;
    line-height: 0.8rem;
    border-radius: 50%;
    span {
      // width: 1rem;
      text-align: center;
      font-size: 0.25rem;
      display: block;
      margin-top: 0.25rem;
      white-space: nowrap;
    }
    .orange {
      color: #fe8b64;
    }
    .blue {
      color: #1a9af4;
    }
    .red {
      color: #fd444f;
    }
  }
  .one1 {
    border: #fe8b64 solid 2px;
    .one {
      color: #fe8b64;
      font-size: 0.65rem;
    }
  }
  .two1 {
    border: #1a9af4 solid 2px;
    .two {
      color: #1a9af4;
      font-size: 0.65rem;
    }
  }
  .three1 {
    border: #fd444f solid 2px;
    .three {
      color: #fd444f;
      font-size: 0.65rem;
    }
  }
}
.Introduction{
    p{
        font-size: .32rem;
        line-height: .55rem;
    }
    border-bottom: 10px solid #F4F4F4;
}
.job{
    width: 100%;
    p{
        width: 100%;
        box-sizing: border-box;
        font-size: .38rem;
        padding: .1rem;
        border-left: 2px solid #0CBE6B;
        line-height: .4rem;
        text-align: left;
        span{
            width: 5.5rem;
            display: inline-block;
            font-size: .24rem;
            text-align: right;
            color: #999;
        }
    }

}

.bottom-content {
  text-indent: 2em;
  width: 100%;
  padding: 0 0.3rem;
  box-sizing: border-box;
  border-bottom: 10px solid #eaeaea;
  font-size: 0.28rem;
}
</style>
