<template>
  <div class="contact">
    <img src="@/assets/image/images/切图/22-1.png" alt="" />

    <ul class="cont-ul">
      <li>
        <p class="ul-p"><i class="iconfont icon-location p-ic1"></i></p>
        <p>杭州市滨江区长河街道越达巷79号连连大厦A幢301</p>
      </li>
      <li>
        <p class="ul-p"><i class="iconfont icon-tel p-ic2"></i></p>
        <p class="p-tel">400-9977-658</p>
      </li>
    </ul>

    <div class="cont-ewm">
      <img src="@/assets/image/images/切图/22-2.png" alt="" />
      <p>长按识别二维码关注微信咨询</p>
    </div>

    <div class="det">
      房先森互联网家装有别于传统装修公司与其他装修中介平台，以自营模式
      整合设计师与项目经理，杜绝项目转包外包，利用互联网将工地进行在线
      全景直播，通过去中间环节，提供装修套餐+个性化定制服务。
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
.contact {
  width: 100%;
  > img {
    width: 100%;
    height: 200px;
  }
  .cont-ul {
    width: 100%;
    display: flex;
    padding: 10px 0;
    li {
      width: 50%;
      box-sizing: border-box;
      padding: 10px 12px;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;

      .ul-p {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background: #39c894;
        text-align: center;
        line-height: 50px;
        margin-bottom: 10px;
        .p-ic1 {
          font-size: 22px;
          color: #fff;
        }
        .p-ic2 {
          font-size: 30px;
          color: #fff;
        }
      }
    }
    p {
      font-size: 12px;
      width: 100%;
    }
    .p-tel {
      width: 100%;
      text-align: center;
    }
  }
}
.cont-ewm {
  background: #f4f4f4;
  text-align: center;
  padding: 14px 0 10px;
  p {
    font-size: 16px;
    color: #5a5a5a;
    margin: 10px 0;
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
</style>

