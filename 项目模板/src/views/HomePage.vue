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
      </div>

      <!-- 装修预约 -->
      <div class="gray"></div>
      <p class="yuyue">
        <b>|</b>
        <span>全屋预约</span>
        <small>包设计、包主材、包水电、包施工</small>
      </p>
      <div class="xiaoqu">
        <p><input type="text" placeholder="小区名" /></p>
        <p><input type="text" placeholder="手机号" /></p>
        <p>
          <input type="text" placeholder="建筑面积                      m²" />
        </p>
        <button>立即申请</button>
      </div>

      <!-- 设计师 -->
      <div class="hui"></div>
      <div class="huan-quan">
        <p class="stylist">
        <b>|</b>
        <span>设计师</span>
      </p>

      <ul class="sheji">
        <li v-for="item in tupian" :key="item.id">
          <img :src="item.image" alt="" />
          <small class="name">{{ item.name }}</small><br>
          <small class="zi">{{ item.status }}</small>
        </li>
      </ul>
      <ul class="huan">
         <li>换一换 <i class="iconfont icon-change"></i></li>
         <li>更多设计师 <i class="iconfont icon-more"></i></li>
      </ul>


     <!-- 效果图 -->
     <div class="ge"></div>
     <img class="xiaoguo" src="../../src/assets/image/images/切图/1.png" alt="">
     <img class="zhibo" src="../../src/assets/image/images/切图/3.png" alt="">
     <img class="zhuangxiu" src="../../src/assets/image/images/切图/4.png" alt="">
    

      </div>      
    </div>


    
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: [], //轮播图1
      tupian: [], //设计师
    };
  },
  mounted() {
    this.getdata(); //轮播图1
    this.gettupian(); //设计师
  },
  methods: {
    getdata() {
      this.$axios("./one-1.json").then((res) => {
        this.data = res.data.data;
        console.log(this.data[0].image);
      });
    }, //轮播图1

    //设计师
    gettupian() {
      this.$axios("./tupian.json").then((res) => {
        console.log(res);
        this.tupian = res.data.data;
      });
    },
  },
};
</script>

<style lang='scss' scoped>
*{
  margin: 0;
  padding: 0;
}
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
  margin-left: -0.88rem;
  height: 0.23rem;
  color: #39c894;
}
.bothhouse .one span {
  font-size: 0.5rem;
  margin-left: 0.1rem;
  margin-right: 0.2rem;
}
.bothhouse .one small {
  font-size: 0.26rem;
  color: #ccc;
}

// lbt2
.bothhouse .three99 {
  margin-top: 0.64rem;
  width: 95%;
  height: 5.4rem;
}

.zero {
  margin-top: 1.12rem;
  display: flex;
  flex-direction: row;
  align-content: center;
  justify-content: center;
}
.zero li {
  font-size: 0.24rem;
  margin-left: 0.24rem;
  margin-right: 0.25rem;
}
.zero li .icon-zero,
.zero li .icon-protection-fill,
.zero li .icon-price {
  color: #39c894;
}

// 装修预约
.gray {
  width: 100%;
  height: 0.4rem;
  background: #f4f4f4;
}
.yuyue {
  margin-top: 0.6rem;
  margin-left: -0.005rem;
  padding: 0 0.02rem;
  width: 100%;
  height: 0.9rem;
  line-height: 0.9rem;
}
.yuyue b {
  display: inline-block;
  margin-top: 0.3rem;
  margin-left: -1.33rem;
  height: 0.23rem;
  line-height: 0.23rem;
  color: #39c894;
}
.yuyue span {
  font-size: 0.45rem;
  margin-right: 0.2rem;
}
.yuyue small {
  color: #ccc;
  font-size: 0.25rem;
}
.xiaoqu {
  width: 100%;
  height: 6rem;
  margin-top: 0.6rem;
}
.xiaoqu p {
  width: 90%;
  height: 0.4rem;
  line-height: 0.4rem;
  margin-top: 0.1rem;
  padding: 0.2rem 0.12rem;
}
.xiaoqu button {
  width: 60%;
  border: none;
  height: 0.9rem;
  background: #feb505;
  color: white;
  border-radius: 0.2rem;
}

.hui {
  width: 100%;
  height: 0.4rem;
  background: #f4f4f4;
}
// 设计师
.stylist {
  width: 100%;
  margin-left: -1.35rem;
  height: 1rem;
  line-height: 1rem;
  margin-bottom: 0.6rem;
}
.stylist b {
  display: inline-block;
  margin-top: 0.3rem;
  margin-left: -2.8rem;
  height: 0.23rem;
  line-height: 0.23rem;
  color: #39c894;
}
.stylist span {
  font-size: 0.45rem;
  margin-right: 0.2rem;
}

.sheji {
  width: 100%;
  height: 2rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
.sheji li {
  margin:0 0.06rem;
  flex: 1;
  height: 100%;
}
.sheji li img {
  border-radius: 1rem;
}
.sheji li small {
  font-size: 0.45rem;
}
.sheji li .name{
  font-size: 0.36rem;
}
.sheji li .zi{
  font-size: 0.2rem;
  color: white;
  width:2.4rem;
  height:0.64rem ;
  line-height: 0.64rem;
  text-align: center;
  background: #39c894;
  border-radius:0.2rem;
  padding: 0.1rem 0.4rem;
}
.huan-quan{
  width: 100%;
  position: relative;
}
.huan{
  display:flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 1.4rem;
  position: absolute;
  top:320px;
}
.huan li{
  border: 1px solid #ccc;
  flex: 1;
  color: #39c894;
  font-size: 0.25rem;
}
// 效果图
.ge{
  width: 100%;
  height: 0.5rem;
  background: #f4f4f4;
  position: absolute;
  top: 377px;
}
.xiaoguo{
  width: 100%;
  position: absolute;
  top: 390px;
  left: 0;
}
.zhibo{
  width: 100%;
  position: absolute;
  top: 1001px;
  left: 0;
}
.zhuangxiu{
   width: 100%;
  position: absolute;
  top: 1427px;
  left: 0;
}
</style>
