<template>
      
  <div class="body">
    <!--       轮播图 -->
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item>
        <img src="@/assets/image/images/切图/house_info.jpg" alt="" />
      </van-swipe-item>
      <van-swipe-item>
        <img src="@/assets/image/images/切图/house_info.jpg" alt="" />
      </van-swipe-item>
      <van-swipe-item>
        <img src="@/assets/image/images/切图/house_info.jpg" alt="" />
      </van-swipe-item>
      <van-swipe-item>
        <img src="@/assets/image/images/切图/house_info.jpg" alt="" />
      </van-swipe-item>
    </van-swipe>

    <!-- 房先森 -->
    <div class="fxs">
      <p>房先森&emsp;/&emsp;装修攻略&emsp;/&emsp;装修预算&emsp;/&emsp;正文</p>
    </div>

    <h2>装修预算注意事项</h2>
    <img class="tu1" src="@/assets/image/images/切图/7-1.png" alt="" />
    <div class="qian"></div>
    <ul class="keting">
      <li>客厅装修隔断</li>
      <li>客厅装修图</li>
      <li>客厅装修效果</li>
      <li>客厅装修隔断</li>
    </ul>
    <ul class="kt2">
      <li>客厅装修图</li>
      <li>客厅装修效果</li>
    </ul>
    <p class="zi1">
      导语:在装修时如果没有提前做好预算，很容易造成最后开
    </p>
    <p class="zi2">
        支过大，添置很多没必要的增项。那么在做预算的时候又有什么需要注意的地方呢？
    </p>
    <img class="tu3" src="@/assets/image/images/切图/tu3.png" alt="">

    <div class="lv">
        进入装修预算
    </div>


    <div class="like">
       <b>|</b>&emsp;
       <b>猜你喜欢</b>
    </div>

   <img class="tu4" src="@/assets/image/images/切图/tu4.png" alt="">
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  mounted() {},
  methods: {},
};
</script>

<style lang='scss' scoped>
// 轮播图
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
  background-color: #39a9ed;
  width: 100%;
  height: 200px;
}
.my-swipe .van-swipe-item img {
  width: 100%;
  height: 100%;
}

.fxs p {
  width: 90%;
  height: 1.2rem;
  margin: 0.5rem auto;
  line-height: 1.2rem;
  background: #f5f5f5;
  font-weight: 300;
  font-size: 1rem;
  padding: 0.2rem 0.5rem;
}

h2 {
  font-weight: 300;
  text-align: center;
  margin-top: 0.6rem;
}
.tu1 {
  width: 12rem;
  height: 1.8rem;
  margin-left: 4.4rem;
  margin-top: 1rem;
}
.qian {
  width: 95%;
  margin-top: 0.8rem;
  margin-left: 0.5rem;
  border-bottom: 2px solid #eaeaea;
}
.keting {
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.keting li {
  font-size: 0.06rem;
  width: 25rem;
  height: 1rem;
  line-height: 1rem;
  border: 1px solid #eaeaea;
  border-radius: 0.4rem;
  text-align: center;
  margin: 0.8rem 0.5rem;
  padding: 0.1rem;
}
.kt2 {
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
}
.kt2 li {
  font-size: 0.06rem;
  width:6rem;
  height: 1rem;
  line-height: 1rem;
  border: 1px solid #eaeaea;
  border-radius: 0.4rem;
  text-align: center;
  margin: 0.8rem 0.5rem;
  padding: 0.1rem;
}
.zi1{
    font-size:0.8rem;
    color: gray;
    margin-left: 1.5rem;
    padding: 0 0.8rem;
}
.zi2{
    font-size:0.8rem;
    color: gray;
    margin-left: 0.02rem;
    padding: 0 0.8rem;
}
.tu3{
    width: 100%;
}
.lv{
    width: 95%;
    height: 1rem;
    line-height: 1rem;
    border: 0.04rem solid #39c894;
    border-radius:0.4rem ;
    text-align: center;
    font-size:0.4rem ;
    color: #39c894;
    padding: 0.04rem;
    margin-left: 0.6rem;
}
.body{
    height: 1000px;
}
.like{
    width: 95%;
    margin-left: 0.6rem;
    height: 1rem;
    line-height: 1rem;
    margin-top: 1.5rem;
}
.like b:nth-child(1){
    color: #2bb281;
    width: 0.2rem;
}
.like b:nth-child(2){
    font-weight: 500;
}
.tu4{
    width: 100%;
}
</style>
