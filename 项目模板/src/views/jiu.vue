<template>
  <div class="box">
    <div class="hd">
      <ul>
        <li>
          <span>筛选</span>
          <i class="iconfont icon-down"></i>
        </li>
        <li>
          <span>风格</span>
          <i class="iconfont icon-down"></i>
        </li>
        <li>
          <span>排序</span>
          <i class="iconfont icon-down"></i>
        </li>
        <li>
          <i class="iconfont icon-search hd-ic1"></i>
        </li>
      </ul>
    </div> 

  <div class="drop-down">
      <div class="down-1">
        <p>级别</p>
        <ul>
          <li>不限</li>
          <li>总监</li>
          <li>主任</li>
          <li>优秀</li>
        </ul>
      </div>
      <div class="down-2">
        <p>收费</p>
        <ul>
          <li>不限</li>
          <li>0-50元/m</li>
          <li>50-100元/m²</li>
          <li>100-150元/m²</li>
          <li>200元/m²以上</li>
        </ul>
      </div>

      <button class="nine-btn">确认</button>
    </div>

    <div class="mengban"></div>

    <div class="nine-list">
      <ul>
        <li class="nine-u1" v-for="(item, index) in list" :key="index">
          <img :src="item.img" alt="" />
          <div class="nine-ban">
            <div class="ban-1">
              <p>
                <span class="nine-title">{{ item.title }}</span>
                <span class="nine-zr">主任</span>
              </p>
              <p class="nine-rq">
                <a>{{ item.ren }}</a
                >人气
              </p>
            </div>

            <ul id="uu">
              <li>
                <span
                  >作品：<a>{{ item.pin }}</a></span
                >
              </li>
              <li>
                <span
                  >经验：<a>{{ item.yan }}</a></span
                >
              </li>
              <li>
                <span
                  >评价：<a>{{ item.ping }}</a></span
                >
              </li>
            </ul>
            <p class="nine-sc">
              <span
                >擅长风格：<a>{{ item.feng }}</a></span
              >
            </p>
          </div>
        </li>
      </ul>
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
    this.$axios.get("/list.json").then((res) => {
      console.log(res);
      this.list = res.data.data;
    });
  },
  methods: {},
};
</script>

<style lang='scss' scoped>
.nine-list {
  width: 100%;
  position: absolute;
  top: 0;
  background: #fff;
  z-index: 0;
  .nine-u1 {
    width: 100%;
    display: flex;
    align-items: center;
    border-bottom: 1px solid #eee;
    box-sizing: border-box;
    padding: 11px 5px;
    > img {
      // width: 82px;
      // height: 82px;
      width: 50px;
      height: 50px;
      border-radius: 50%;
      object-fit: cover;
      margin-right: 10px;
    }
    .nine-ban {
      width: 73%;
      .ban-1 {
        display: flex;
        align-items: center;
        justify-content: space-between;
        > p {
          display: flex;
          align-items: center;
        }
      }
    }
    .nine-title {
      font-size: 16px;
      color: #333;
      margin-right: 10px;
    }
    .nine-zr {
      padding: 3px 7px;
      margin-left: 7.5;
      display: inline-block;
      font-size: 12px;
      border-radius: 4px;
      background: #2bb281;
      color: #fff;
      vertical-align: middle;
    }
    .nine-rq {
      font-size: 14px;
      a {
        color: #feb505;
        margin-right: 10px;
      }
    }
    .nine-sc {
      width: 100%;
      font-size: 14px;
      span {
        a {
          color: #999;
        }
      }
    }
  }
  #uu {
    width: 100%;
    // float: right;
    font-size: 14px;
    display: flex;
    margin: 5px 0;
    li {
      flex: 1;
      width: 100%;
      text-align: left;
      margin-right: 2px;
      a {
        color: #999999;
      }
    }
  }
}
.hd {
  width: 100%;
  height: 70px;
  border-top: 1px solid #eee;
  border-bottom: 1px solid #eee;
  background: #ffff;
  position: absolute;
  z-index: 5;
  ul {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    li {
      width: 25%;
      height: 40px;
      border-right: 1px solid #eee;
      font-size: 16px;
      text-align: center;
      line-height: 40px;
      > span {
        margin-right: 10px;
      }
      i {
        color: #797979;
      }
      .hd-ic1 {
        font-size: 24px;
        color: #39c894;
      }
    }
  }
}
.mengban {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.75);
  z-index: 2;
}
.drop-down {
  background: #f4f4f4;
  width: 100%;
  position: absolute;
  top: 60px;
  z-index: 6;
  .down-1,
  .down-2 {
    width: 100%;
    margin: 6px 0;
    box-sizing: border-box;
    padding: 20px 10px 0;
    p {
      font-size: 18px;
    }
    ul {
      width: 100%;
      font-size: 14px;
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      li {
        width: 31.8%;
        background: #ffff;
        height: 30px;
        text-align: center;
        line-height: 30px;
        margin: 10px 5px 5px 0;
        color: #949494cc;
        border: 1px solid #eee;
      }
      li:nth-of-type(3) {
        margin-right: 0;
      }
    }
  }
}
.nine-btn {
  width: 100%;
  height: 45px;
  color: #fff;
  background: #2bb281;
  border: 0;
  font-size: 20px;
}
</style>
