<template>
      
  <div>
    <!-- 轮播图1 -->
          <img src="../../src/assets/image/images/切图/banner.jpg" />
    <div class="lbt_1">
      <ul>
        <li v-for="item in data" :key="item.id">
          <img :src="item.image" />
          <!-- {{item.image}} -->
        </li>
      </ul>

      <!-- 装修方案 -->
      <ul class="zxfa">
        <li class="gre">
          <i class="iconfont icon-case"></i>
        </li>
        <li class="org">
          <i class="iconfont icon-pics"></i>
        </li>
        <li class="yel">
          <i class="iconfont icon-designer"></i>
        </li>
        <li class="lu">
          <i class="iconfont icon-construction-site"></i>
        </li>
      </ul>

      <ul class="font">
        <li>装修方案</li>
        <li>效果图</li>
        <li>设计师</li>
        <li>装修工地</li>
      </ul>

      <ul class="zxfa1">
        <li class="blue">
          <i class="iconfont icon-decorate"></i>
        </li>
        <li class="plum">
          <i class="iconfont icon-loans"></i>
        </li>
        <li class="pink">
          <i class="iconfont icon-pencle"></i>
        </li>
        <li class="pin">
          <i class="iconfont icon-ten"></i>
        </li>
      </ul>

      <ul class="font">
        <li>装修攻略</li>
        <li>装修贷款</li>
        <li>免费预约</li>
        <li>十秒报价</li>
      </ul>

      <!-- 全屋装修 -->
      <div class="bothhouse">
        <p class="one">
          <b>|</b>
          <span>全屋装修</span>
          <small>包设计、包主材、包水电、包施工</small>
        </p>
        <!-- lbt2 -->
        <img
          src="../../src/assets/image/images/切图/img1.jpg"
          class="three99"
        />

        <!-- 0增项 -->
        <ul class="zero">
          <li><i class="iconfont icon-zero"></i>0增项，标准施工</li>
          <li><i class="iconfont icon-protection-fill"></i>杜绝项目外包</li>
          <li><i class="iconfont icon-price"></i>装修贷款</li>
        </ul>

        <img
          src="@/assets/image/images/切图/1.png"
        />
          <img
          src="@/assets/image/images/切图/5.png"
        />
          <img
          src="@/assets/image/images/切图/3.png"
        />
         <img
          src="@/assets/image/images/切图/4.png"
        />
        
      </div>

    </div>
        
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: [], //轮播图1
    };
  },
  mounted() {
    this.getdata(); //轮播图1
  },
  methods: {
    getdata() {
      this.$axios("./data.json").then((res) => {
        this.data = res.data.data;
        console.log(this.data[0].image);
      });
    }, //轮播图1
  },
};
</script>

<style lang='scss' scoped>
.lbt_1 {
  width: 100%;
  height: 4.8rem;
}
.lbt_1 ul {
  display: flex;
}
.lbt_1 ul li {
  flex: 1;
}
.lbt_1 ul li img {
  width: 100%;
  height: 100%;
}
// -----------------------------------

// 装修方案
.zxfa {
  margin-top: 0.35rem;
  width: 100%;
  height: 2rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}
.zxfa .gre {
  margin-right: 0.2rem;
  margin-left: 0.2rem;
  flex: 1;
  width: 1rem;
  height: 1.6rem;
  line-height: 1.6rem;
  padding: 0.04rem;
  border-radius: 50%;
  background: #39c894;
}
.icon-case {
  font-size: 1rem;
  color: white;
}
.zxfa .org {
  margin-right: 0.2rem;
  flex: 1;
  width: 1rem;
  height: 1.6rem;
  line-height: 1.6rem;
  padding: 0.04rem;
  border-radius: 50%;
  background: #feb505;
}
.icon-pics {
  font-size: 1rem;
  color: white;
}
.zxfa .yel {
  margin-right: 0.2rem;
  flex: 1;
  width: 1rem;
  height: 1.6rem;
  line-height: 1.6rem;
  padding: 0.04rem;
  border-radius: 50%;
  background: #eed215;
}
.icon-designer {
  font-size: 1rem;
  color: white;
}
.zxfa .lu {
  margin-right: 0.2rem;
  flex: 1;
  width: 1rem;
  height: 1.6rem;
  line-height: 1.6rem;
  padding: 0.04rem;
  border-radius: 50%;
  background: #00b2b2;
}
.icon-construction-site {
  font-size: 1rem;
  color: white;
}
.font {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-content: center;
  margin-top: 0.2rem;
}
.font li {
  flex: 1;
  font-size: 0.3rem;
  margin-left: 0.02rem;
}

.zxfa1 {
  margin-top: 0.35rem;
  width: 100%;
  height: 2rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}
.zxfa1 .blue {
  margin-right: 0.2rem;
  margin-left: 0.2rem;
  flex: 1;
  width: 1rem;
  height: 1.6rem;
  line-height: 1.6rem;
  padding: 0.04rem;
  border-radius: 50%;
  background: #1b9af7;
}
.icon-decorate {
  font-size: 1rem;
  color: white;
}
.zxfa1 .plum {
  margin-right: 0.2rem;
  flex: 1;
  width: 1rem;
  height: 1.6rem;
  line-height: 1.6rem;
  padding: 0.04rem;
  border-radius: 50%;
  background: #7b72e9;
}
.icon-loans {
  font-size: 1rem;
  color: white;
}
.zxfa1 .pink {
  margin-right: 0.2rem;
  flex: 1;
  width: 1rem;
  height: 1.6rem;
  line-height: 1.6rem;
  padding: 0.04rem;
  border-radius: 50%;
  background: #ff4351;
}
.icon-pencle {
  font-size: 1rem;
  color: white;
}
.zxfa1 .pin {
  margin-right: 0.2rem;
  flex: 1;
  width: 1rem;
  height: 1.6rem;
  line-height: 1.6rem;
  padding: 0.04rem;
  border-radius: 50%;
  background: #fe8864;
}
.icon-ten {
  font-size: 1rem;
  color: white;
}
.font {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-content: center;
  margin-top: 0.2rem;
}
.font li {
  flex: 1;
  font-size: 0.3rem;
  margin-left: 0.02rem;
}

// 全屋装修
.bothhouse {
  width: 100%;
  height: 500px;
  margin-top: 0.4rem;
}
.bothhouse .one {
  margin-top: 0.64rem;
  width: 100%;
  height: 0.85rem;
  line-height: 0.85rem;
}
.bothhouse .one b {
  height: 0.6rem;
  color: #39c894;
}
.bothhouse .one span {
  font-size: 0.7rem;
  margin-left: 0.1rem;
}
.bothhouse .one small {
  font-size: 0.26rem;
  color: #ccc;
}

// lbt2
.bothhouse .three99 {
  margin-top: 0.34rem;
  width: 100%;
  height: 5.4rem;
}

.zero {
  display: flex;
  flex-direction: row;
  align-content: center;
  justify-content: center;
}
.zero li {
  font-size: 0.28rem;
}
.zero li .icon-zero,
.zero li .icon-protection-fill,
.zero li .icon-price {
  color: #39c894;
}
</style>
