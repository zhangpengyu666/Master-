<template>
      
  <div class="">
    <div class="box">
      <ul class="bx">
        <li class="bx1">
          <span>筛选</span>
          <i class="iconfont icon-down"></i>
        </li>
        <li class="bx1">
          <span>风格</span> <i class="iconfont icon-down"></i>
        </li>
        <li class="bx1">
          <span>排序</span> <i class="iconfont icon-down"></i>
        </li>
        <li class="bx1"><i class="iconfont icon-search ss"></i></li>
      </ul>
    </div>

    <div class="center">
      <ul class="cen">
        <li v-for="(item, index) in list" :key="index" class="ii">
          <img :src="item.img" alt="" class="imm" />

          <div class="right">
            <div class="right-1">
              <a class="aa">{{ item.title }}</a>
              <a class="cl">主任</a>
              <div class="right-2">
                <a class="aa1">{{ item.ren }}</a>
              </div>
            </div>
            <div class="right-3">
              <span>作品:{{ item.pin }}</span>
              <span>经验:{{ item.yan }}</span>
              <span>评价:{{ item.ping }}</span>
            </div>

            <span class="p">擅长风格:{{ item.feng }}</span>
          </div>
        </li>
      </ul>
    </div>

    <div class="dvv">
      <a href="" class="bg-white">1/3</a>
      <a href="" class="bg-green">下一页</a>
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
    return {
      list: [],
    };
  },
  mounted() {
    this.getlist();
  },
  methods: {
    getlist() {
      this.$axios.get("/list.json").then((res) => {
        // console.log(res);
        this.list = res.data.data;
      });
    },
  },
};
</script>

<style lang='scss' scoped>
.bott {
  padding-top: 20px;
  margin-top: 500px;
  margin-bottom: 50px;
  text-indent: 1rem;
  position: relative;
  top: 680px;
  margin-bottom: 120px;
}
.bg-white {
  flex: 1;
  text-align: center;
  background: #fff;
}
.bg-green {
  flex: 1;
  text-align: center;
  background: #39c894;
  color: #fff;
}
.dvv {
  width: 100%;
  height: 1rem;
  line-height: 1rem;
  font-size: 16px;
  display: flex;
  position: relative;
  top: 1178px;
  justify-content: space-around;
}
.p {
  margin-left: 25px;
}
.aa1 {
  margin-left: 100px;
}
.right-3 {
  display: flex;
  justify-content: space-around;
  padding-top: 10px;
  margin-bottom: 10px;
}
.right-1 {
  width: 100%;
  display: flex;
  margin-left: 10px;
}
.aa {
  margin-left: 19px;
}

.ii {
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 130px;
  width: 100%;
  border-bottom: 1px solid #f4f4f4;
}
.imm {
  width: 70px;
  height: 70px;
  border-radius: 50px;
}
.cl {
  padding: 3px 7px;
  margin-left: 7.5;
  display: inline-block;
  font-size: 12px;
  border-radius: 4px;
  background: #2bb281;
  color: #fff;
  vertical-align: middle;
  margin-left: 10px;
}
.right {
  width: 80%;
}

.center ul {
  width: 100%;
  height: 120px;
}
.center {
  width: 100%;
}
* {
  margin: 0;
  padding: 0;
  list-style: none;
  font-size: 16px;
  box-sizing: border-box;
}
.box {
  width: 100%;
  height: 60px;
}
.bx1 {
  width: 20%;
  height: 30px;
  flex: 1;
  border-right: 1px solid #ccc;
  margin-top: 8px;
  text-align: center;
  line-height: 30px;
  padding-left: 10px;
  display: flex;
  justify-content: space-evenly;
}
.bx1:last-child {
  font-weight: 700;
  color: green;
}
.ss {
  font-size: 25px;
}
.bx {
  width: 100%;
  height: 40px;
  display: flex;
}
</style>
