<template>
  <div class="big">
    <div class="imgs">
      <img
        src="@/assets/image/images/切图/process/process1.jpg"
        class="imgs-im1"
      />
      <div class="imgs-1">
        <img
          src="@/assets/image/images/切图/process/process2.jpg"
          class="imgs-im2"
        />
        <p>【装修前】</p>
        <p>NO.1收房验房</p>
        <p>NO.2装修预算</p>
        <p>NO.3装修风水</p>
        <p>NO.4装修设计</p>
      </div>
      <div class="imgs-2">
        <img
          src="@/assets/image/images/切图/process/process3.png"
          class="imgs-im3"
        />
        <p>【装修中】</p>
        <p>NO.5材料选择</p>
        <p>NO.6水电工程</p>
        <p>NO.7泥木工程</p>
        <p>NO.8油漆工程</p>
      </div>
      <div class="imgs-3">
        <img
          src="@/assets/image/images/切图/process/process4.jpg"
          class="imgs-im4"
        />
        <p>【装修后】</p>
        <p>NO.9装修验房</p>
        <p>NO.10去污保洁</p>
        <p>NO.11软装搭配</p>
        <p>NO.12家居生活</p>
      </div>
    </div>
    <div class="det">
      房先森互联网家装有别于传统装修公司与其他装修中介平台，以自营模式
      整合设计师与项目经理，杜绝项目转包外包，利用互联网将工地进行在线
      全景直播，通过去中间环节，提供装修套餐+个性化定制服务。
    </div>
    <div class="service">
      <p>
        <i class="iconfont icon-hot-line det-ic1"></i>
        <span>服务热线：400-9977-658</span>
      </p>
      <ul>
        <li>触屏版</li>
        <li>电脑版</li>
        <li>关于我们</li>
        <li>联系我们</li>
      </ul>
      <div class="service-item">
        <p>
          <i>c</i>
          <span>2016</span>
        </p>
        <span>浙ICP备 15033817号-1</span>
      </div>
    </div>

    <div class="radius">
      <i class="iconfont icon-top rad-ic2"></i>
    </div>
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

<style lang='scss' scoped>
.big {
  width: 100%;
  position: relative;
}
.imgs {
  width: 100%;
  .imgs-im1 {
    width: 100%;
    height: 3rem;
  }
  .imgs-1 {
    width: 100%;
    position: relative;
    font-size: 20px;
    .imgs-im2 {
      width: 100%;
    }
    p:nth-of-type(1) {
      color: #ff4361;
      position: absolute;
      top: 22px;
      left: 48px;
    }
    p:nth-of-type(2) {
      position: absolute;
      top: 92px;
      left: 90px;
    }
    p:nth-of-type(3) {
      position: absolute;
      top: 170px;
      right: 96px;
    }
    p:nth-of-type(4) {
      position: absolute;
      bottom: 150px;
      left: 90px;
    }
    p:nth-of-type(5) {
      position: absolute;
      bottom: 73px;
      right: 94px;
    }
  }
  .imgs-2 {
    width: 100%;
    position: relative;
    font-size: 20px;
    .imgs-im3 {
      width: 100%;
    }
    p:nth-of-type(1) {
      color: #1b9af7;
      position: absolute;
      top: 25px;
      left: 220px;
    }
    p:nth-of-type(2) {
      position: absolute;
      top: 97px;
      left: 151px;
    }
    p:nth-of-type(3) {
      position: absolute;
      top: 180px;
      right: 150px;
    }
    p:nth-of-type(4) {
      position: absolute;
      bottom: 160px;
      left: 150px;
    }
    p:nth-of-type(5) {
      position: absolute;
      bottom: 79px;
      right: 152px;
    }
  }
  .imgs-3 {
    width: 100%;
    position: relative;
    font-size: 20px;
    .imgs-im4 {
      width: 100%;
    }
    p:nth-of-type(1) {
      color: #7b72e9;
      position: absolute;
      top: 22px;
      left: 50px;
    }
    p:nth-of-type(2) {
      position: absolute;
      top: 93px;
      left: 93px;
    }
    p:nth-of-type(3) {
      position: absolute;
      top: 168px;
      right: 93px;
    }
    p:nth-of-type(4) {
      position: absolute;
      bottom: 199px;
      left: 91px;
    }
    p:nth-of-type(5) {
      position: absolute;
      bottom: 121px;
      right: 92px;
    }
  }
}
.det {
  width: 100%;
  height: 165px;
  font-size: 16px;
  color: #3f3f3f;
  font-weight: 500;
  box-sizing: border-box;
  padding: 15px 10px;
  text-indent: 2em;
  border-top: 12px solid #f4f4f4;
  border-bottom: 12px solid #f4f4f4;
}
.service {
  width: 100%;
  height: 155px;
  box-sizing: border-box;
  padding: 15px 10px;
  > p {
    display: flex;
    justify-content: center;
    .det-ic1 {
      font-size: 25px;
      color: #39c894;
    }
    span {
      font-size: 18px;
      margin-left: 6px;
      display: inline-block;
    }
  }
  ul {
    width: 100%;
    display: flex;
    font-size: 17px;
    margin-top: 15px;
    border-bottom: 1px solid #eee;
    li {
      width: 70px;
      height: 40px;
      line-height: 40px;
      padding: 0 10px;
      text-align: center;
      &:hover {
        color: #39c894;
      }
    }
  }
  .service-item {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 10px;
    i {
      font-style: normal;
      display: inline-block;
      width: 10px;
      height: 10px;
      border: 1px solid#a09e9e;
      border-radius: 50%;
      text-align: center;
      line-height: 8px;
      margin-right: 2px;
    }
    >p{
      font-size:14px;
      color: #a09e9e;
      font-weight: 500;
      display: flex;
      align-items: center;
    }
    >span{
      font-size: 14px;
      margin-left: 5px;
    }
  }
}
.radius {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 1px solid #ddd;
  text-align: center;
  line-height: 30px;
  position: absolute;
  bottom: 134px;
  right: 6px;
  background: #fff;
  .rad-ic2 {
    font-size: 20px;
    color: rgb(175, 173, 173);
  }
}
</style>
