<template>
  <div class="">
    <div class="fifteen-top">
      <div class="top-one">
        <div class="one-1">
          <img src="@/assets/image/images/切图/15-1.png" alt="" />
          <div class="one-2">
            <p>699全包精装套餐</p>
            <p>价格：<a>￥699元/m²</a></p>
            <p>已预约：<i>221套</i></p>
            <p>正式发售：<a>全包套餐火爆预约中</a></p>
          </div>
        </div>
        <p>
          精装全包套餐，包设计/包主材/包施工/包监工。采用知名辅材、一线主材，工厂直供F2C模式
        </p>
      </div>
    </div>

    <div class="fifteen-ban">
      <ul id="ban-uu">
        <li>套餐详情</li>
        <li>配置清单</li>
        <li>施工工艺</li>
        <li>服务流程</li>
      </ul>
      <ol>
        <li>厨房</li>
        <li>卫生间</li>
        <li>阳台</li>
        <li>施工工艺</li>
        <li>服务流程</li>
      </ol>
    </div>
    <table>
      <thead>
        <tr>
          <th>项目</th>
          <th>备注</th>
          <th>详细说明</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>地柜</td>
          <td>定制橱柜</td>
          <td>3延米以内</td>
        </tr>
        <tr>
          <td>吊柜</td>
          <td>定制橱柜</td>
          <td>1.2延米内、阻尼抽屉2个（单色石英石台面）</td>
        </tr>
        <tr>
          <td>台面</td>
          <td>石英石</td>
          <td>3延米以内</td>
        </tr>
        <tr>
          <td>套装门/移门及五金</td>
          <td>樱花</td>
          <td>
            含门以及门安装、三维可调式合页、门锁、门吸、厨房
            空间提供一堂门、平面和插框造型，仅限原始户型空间配们。若为移门，只跟3平方米
          </td>
        </tr>
        <tr>
          <td>门套</td>
          <td>双诺</td>
          <td>定制</td>
        </tr>
        <tr>
          <td>小地砖</td>
          <td>马可波罗瓷砖</td>
          <td>地砖满铺</td>
        </tr>
      </tbody>
    </table>

    <div class="det">
      房先森互联网家装有别于传统装修公司与其他装修中介平台，以自营模式
      整合设计师与项目经理，杜绝项目转包外包，利用互联网将工地进行在线
      全景直播，通过去中间环节，提供装修套餐+个性化定制服务。
    </div>

    <a href="javascript:;" class="btn btn-reverse">
      <i class="iconfont icon-pencle"></i>
      立即预约
    </a>
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
.fifteen-top {
  width: 100%;
  border-top: 10px solid #eee;
  border-bottom: 10px solid #eee;
  box-sizing: border-box;
  padding: 20px 10px;
  .top-one {
    > p {
      font-size: 14px;
      margin-top: 15px;
      line-height: 28px;
    }
  }
  .one-1 {
    display: flex;
    align-items: center;
    justify-content: space-between;
    > img {
      width: 140px;
      height: 100px;
    }
  }
  .one-2 {
    font-size: 14px;
    p {
      color: #a8a7a7;
      a {
        color: #ff4351;
        font-size: 15px;
      }
    }
    p:first-child {
      font-size: 17px;
      color: #000;
    }
    p:nth-child(2) {
      margin: 5px 0;
    }
    p:nth-child(3) {
      margin: 7px 0;
    }
    i {
      font-style: normal;
      color: #000;
    }
  }
}
.fifteen-ban {
  width: 100%;
  #ban-uu {
    width: 100%;
    height: 70px;
    border-bottom: 1px solid #eee;
    font-size: 18px;
    display: flex;
    align-items: center;
    li {
      width: 100px;
      height: 40px;
      line-height: 40px;
      text-align: center;
      border-right: 1px solid #eee;
      li:last-child {
        border-right: 0;
      }
    }
  }
  ol {
    width: 100%;
    display: flex;
    align-items: center;
    margin: 20px 0;
    li {
      border-radius: 25px;
      border: 1px solid #39c894;
      color: #39c894;
      font-size: 17px;
      height: 35px;
      padding: 5px 10px;
      line-height: 25px;
      box-sizing: border-box;
      margin-right: 2px;
    }
  }
}
.fifteen-det {
  box-sizing: border-box;
  padding: 10px 6px;
  background: #9e9e98;
  .det-1 {
    font-size: 14px;
    display: flex;
    align-items: center;
    li {
      width: 120px;
      border: 1px solid #000;
      padding: 15px 0;
      box-sizing: border-box;
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
  border-top: 12px solid #eee;
  border-bottom: 12px solid #eee;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
thead {
  margin: 0;
  padding: 0;
  border: none;
  outline: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
  box-sizing: border-box;
}
tr {
  display: table-row;
}
th:last-child,
td:last-child {
  border-right: 0;
}
th {
  color: #2bb281;
  font-size: 14px;
  border-top: 1px solid #eaeaea;
  text-align: left;
  line-height: 1.8;
  border-bottom: 1px solid #eaeaea;
  padding: 2px 5px;
  border-right: 1px solid #eaeaea;
}
td {
  line-height: 1.8;
  border-bottom: 1px solid #eaeaea;
  padding: 2px 5px;
  border-right: 1px solid #eaeaea;
  font-size: 14px;
}

.btn-reverse {
  width: 100%;
  height: 1rem;
  line-height: 1rem;
  position: fixed;
  bottom: 0;
  background: #ff4351;
  color: #fff;
  text-align: center;
  border-radius: 0;
  font-size: 16px;
  opacity: 0.8;
  z-index: 99;
  border: none;
}
</style>
