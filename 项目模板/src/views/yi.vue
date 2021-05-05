<template>
  <div class="body">
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item
        ><img src="@/assets/image/images/切图/banner.jpg" alt=""
      /></van-swipe-item>
      <van-swipe-item
        ><img src="@/assets/image/images/切图/banner1.jpg" alt=""
      /></van-swipe-item>
      <van-swipe-item
        ><img src="@/assets/image/images/切图/banner2.jpg" alt=""
      /></van-swipe-item>
      <van-swipe-item
        ><img src="@/assets/image/images/切图/banner3.jpg" alt=""
      /></van-swipe-item>
    </van-swipe>
    <!-- 轮播图 -->
    <div class="iconnav">
      <ul>
        <li>
          <p style="background: #39c894"><i class="iconfont">&#xe602;</i></p>
          <p>装修方案</p>
        </li>
        <li>
          <p style="background: #feb505"><i class="iconfont">&#xe606;</i></p>
          <p>效果图</p>
        </li>
        <li>
          <p style="background: #eed215"><i class="iconfont">&#xe609;</i></p>
          <p>设计师</p>
        </li>
        <li>
          <p style="background: #00b2b2"><i class="iconfont">&#xe603;</i></p>
          <p>装修工地</p>
        </li>
        <li>
          <p style="background: #1b9af7"><i class="iconfont">&#xe60b;</i></p>
          <p>装修攻略</p>
        </li>
        <li>
          <p style="background: #7b72e9"><i class="iconfont">&#xe604;</i></p>
          <p>装修贷款</p>
        </li>
        <li>
          <p style="background: #ff4351"><i class="iconfont">&#xe62c;</i></p>
          <p>免费预约</p>
        </li>
        <li>
          <p style="background: #fe8864"><i class="iconfont">&#xe608;</i></p>
          <p>十秒报价</p>
        </li>
      </ul>
    </div>
    <!-- 九宫格 -->
    <div class="con">
      <div class="con-top">
        <ul>
          <li>全屋装修</li>
          <li>包设计、包主材、包水电、包施工</li>
        </ul>
      </div>
      <van-swipe
        class="my-swipe crice"
        :autoplay="3000"
        indicator-color="#39c894"
      >
        <van-swipe-item
          ><img src="@/assets/image/images/切图/img1.jpg" alt=""
        /></van-swipe-item>
        <van-swipe-item
          ><img src="@/assets/image/images/切图/banner1.jpg" alt=""
        /></van-swipe-item>
      </van-swipe>
      <div class="con-botton">
        <ul>
          <li><i class="iconfont">&#xe627;</i>0增项，标准施工</li>
          <li><i class="iconfont">&#xe628;</i>杜绝项目外包</li>
          <li><i class="iconfont">&#xe60c;</i>装修贷款</li>
        </ul>
      </div>
    </div>
    <!-- 全屋装修 -->
    <div class="order">
      <div class="order-top">
        <ul>
          <li>装修预约</li>
          <li>免费上门量房，设计方案满意为止</li>
        </ul>
      </div>
      <div class="input">
        <input type="text" placeholder="小区名" />
        <input type="text" placeholder="手机号" />
        <input type="text" placeholder="建筑面积" />
        <button>立即申请</button>
      </div>
    </div>
    <!-- 装修预约 -->
    <div class="designer">
      <div class="designer-top">
        <ul>
          <li>设计师</li>
        </ul>
      </div>
      <div class="con-van">
        <ul>
          <li>
            <img src="@/assets/image/images/切图/001.png" alt="" />
            <p>吴飞柯</p>
            <p>优秀</p>
          </li>
          <li>
            <img src="@/assets/image/images/切图/002.png" alt="" />
            <p>陆炎龙</p>
            <p>主任</p>
          </li>
          <li>
            <img src="@/assets/image/images/切图/003.png" alt="" />
            <p>张海建</p>
            <p>总监</p>
          </li>
          <li>
            <img src="@/assets/image/images/切图/004.png" alt="" />
            <p>陈冲</p>
            <p>优秀</p>
          </li>
        </ul>
      </div>
      <div class="con-btn">
        <ul>
          <li>
            换一换
            <i class="iconfont">&#xe62f;</i>
          </li>
          <li>
            更多设计师
            <i class="iconfont">&#xe605;</i>
          </li>
        </ul>
      </div>
    </div>
    <!-- 设计师 -->
    <div class="order xiao">
      <div class="order-top">
        <ul>
          <li>效果图</li>
        </ul>
      </div>
      <div class="xiao-img">
        <img src="@/assets/image/images/切图/005.png" alt="" />
        <ul>
          <li><img src="@/assets/image/images/切图/006.png" alt="" /></li>
          <li><img src="@/assets/image/images/切图/007.png" alt="" /></li>
          <li><img src="@/assets/image/images/切图/008.png" alt="" /></li>
          <li><img src="@/assets/image/images/切图/009.png" alt="" /></li>
        </ul>
      </div>
      <div class="con-btn">
        <ul>
          <li>
            换一换
            <i class="iconfont">&#xe62f;</i>
          </li>
          <li>
            更多设计师
            <i class="iconfont">&#xe605;</i>
          </li>
        </ul>
      </div>
    </div>
    <!-- 效果图 -->
    <div class="order sinatv">
      <div class="order-top">
        <ul>
          <li>工地直播</li>
        </ul>
      </div>
      <div class="xiao-img">
        <img src="@/assets/image/images/切图/010.png" alt="" />
      </div>
      <div class="con-btn">
        <ul>
          <li>
            换一换
            <i class="iconfont">&#xe62f;</i>
          </li>
          <li>
            更多设计师
            <i class="iconfont">&#xe605;</i>
          </li>
        </ul>
      </div>
    </div>
    <!-- 工地直播 -->
    <div class="order gong">
      <div class="order-top">
        <ul>
          <li>装修攻略</li>
        </ul>
      </div>
      <div class="xiao-img">
        <img src="@/assets/image/images/切图/011.png" alt="" />
      </div>
      <div class="con-btn">
        <ul>
          <li>
            换一换
            <i class="iconfont">&#xe62f;</i>
          </li>
          <li>
            更多设计师
            <i class="iconfont">&#xe605;</i>
          </li>
        </ul>
      </div>
    </div>
    <div class="foot">
      <img src="@/assets/image/images/切图/012.png" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {},
  mounted() {},
};
</script>

<style scoped>
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
  background-color: #39a9ed;
  width: 100%;
  height: 50px;
}
.my-swipe .van-swipe-item img{
  width: 100%;
  height: 200px;
}
#body {
  background-color: #eaeaea;
  padding: 0;
  margin: 0;
  list-style: none;
}
img {
  width: 100%;
  height: 100%;
}
.iconnav {
  width: 100%;
  height: 4.8rem;
  background-color: #fff;
  margin-bottom: 0.36rem;
}
.iconnav ul {
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.iconnav ul li {
  width: 25%;
  height: 50%;
  text-align: center;
  line-height: 1.1rem;
}
.iconnav ul li p:nth-child(1) {
  width: 1.1rem;
  height: 1.1rem;
  border: 1px solid #ccc;
  margin: 0.2rem auto 0;
  border-radius: 50%;
}
.iconnav ul li .iconfont {
  font-size: 0.65rem;
  color: #fff;
}
.iconnav ul li p {
  font-size: 0.32rem;
  color: #333;
}

.con {
  width: 100%;
  height: 5.8rem;
  background-color: #fff;
  margin-bottom: 0.36rem;
}

.con .con-top ul {
  display: flex;
  width: 100%;
  padding: 0.4rem 0;
}

.con-top ul li:nth-child(1) {
  font-size: 0.45rem;
  border-left: 0.08rem solid #39c894;
  padding: 0 0.2rem;
  color: #666666;
}

.con-top ul li:nth-child(2) {
  font-size: 0.3rem;
  color: #999999;
  padding-top: 0.17rem;
}

.con .crice {
  width: 100%;
  margin-bottom: 0.08rem;
}

.con .crice img {
  width: 100%;
  height: 100%;
}

.con-botton ul {
  display: flex;
  width: 100%;
}

.con-botton ul li {
  font-size: 0.2rem;
  color: #666666;
  padding-left: 0.3rem;
}

.con-botton ul li i {
  font-size: 0.4rem;
  color: #39c894;
  padding: 0 0.12rem;
}
/* 全屋装修 */
.order {
  width: 100%;
  height: 6.4rem;
  background-color: #fff;
  margin-bottom: 0.36rem;
}

.order .order-top ul {
  display: flex;
  width: 100%;
  padding: 0.4rem 0;
}

.order-top ul li:nth-child(1) {
  font-size: 0.45rem;
  border-left: 0.08rem solid #39c894;
  padding: 0 0.2rem;
  color: #666666;
}

.order-top ul li:nth-child(2) {
  font-size: 0.3rem;
  color: #999999;
  padding-top: 0.17rem;
}

.order .input {
  width: 100%;
  padding-left: 1rem;
}

.order input {
  display: block;
  width: 70%;
  height: 0.8rem;
  font-size: 0.35rem;
  line-height: 0.5rem;
  margin-bottom: 0.3rem;
  color: #eaeaea;
  padding-left: 0.3rem;
}

.order button {
  width: 75%;
  height: 0.8rem;
  font-size: 0.38rem;
  color: #fff;
  background-color: #feb505;
  border: 0.1rem solid #feb505;
  border-radius: 0.05rem;
}
/* 装修预约 */
.designer {
  width: 100%;
  height: 5.8rem;
  background-color: #fff;
  margin-bottom: 0.36rem;
}

.designer .designer-top ul {
  display: flex;
  width: 100%;
  padding: 0.4rem 0;
}

.designer-top ul li:nth-child(1) {
  font-size: 0.45rem;
  border-left: 0.08rem solid #39c894;
  padding: 0 0.2rem;
  color: #666666;
}
.con-van {
  width: 100%;
}
.con-van ul {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}
.con-nav li {
  flex: 1;
}
.con-van li img {
  width: 1.4rem;
  height: 1.4rem;
}
.con-van li p {
  font-size: 0.35rem;
  text-align: center;
  color: #333333;
}
.con-van li p:nth-child(3) {
  width: 1.2rem;
  height: 0.37rem;
  border: 0.01rem solid #999999;
  font-size: 0.2rem;
  margin-left: 0.1rem;
  margin-top: 0.2rem;
  border-radius: 0.08rem;
  background-color: #2bb281;
  color: #eaeaea;
}
.con-btn ul {
  width: 100%;
  display: flex;
  height: 0.9rem;
  padding: 0.4rem 0;
  flex-direction: row;
  justify-content: space-around;
}
.con-btn ul li {
  flex: 1;
  font-size: 0.34rem;
  color: #39c894;
  line-height: 0.9rem;
  border: 0.01rem solid #eaeaea;
  text-align: center;
}
/* 设计师 */
.xiao {
  height: 14rem;
}
.xiao-img ul {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
}
.xiao-img ul li {
  width: 48%;
}
/* 效果图 */
.sinatv {
  height: 9rem;
}
.gong {
  height: 9rem;
}
</style>
