<template>
  <div>
    <h2></h2>
    <p class="p1">房先森简介</p>

    <p class="p3">
      杭州瑞壹网络科技有限公司旗下"房先森"，专注于家庭装修服务，装饰立足刚需房利用互联网将装修、供应链、进行融合，多维度实现用户对设计师、工长、工地、材料等的线上选择体验，房先森以自营的模式真正意义上过滤掉传统家装公司利润，将利润让给业主。杭州瑞壹网络科技有限公司
      "房先森装修学院"并以装修套餐+个性化定制的模式，提供创新型装修服务。
    </p>
    <div class="center">
      <p class="p2">我们是谁,我们如何与众不同</p>
      <img src="@/assets/image/images/切图/2.png" alt="" />
    </div>
  </div>
</template>

<script>
// import * as echarts from 'echarts'; //绘制图表
export default {
  //数据 属性
  data() {
    return {};
  },
  //组件挂载完成 而且渲染完成
  mounted() {},
  // 方法 属性
  methods: {},
  // 标签化 子组件
  components: {},
  // 计算 属性
  computed: {},
  // 过滤 属性
  filter: {},
  // 监听 属性
  watch: {},
  //自定义标签
  directives: {},
  //组件内导航守卫
  // beforeRouteEnter(to, from, next) {},
};
</script>

<style lang="scss" scoped>
.p3 {
  width: 100%;
  height: 150px;
  line-height: 30px;
  text-indent: 2em;
}
.p2 {
  font-size: 18px;
  margin-top: 10px;
  text-align: center;
}

.center {
  width: 100%;
  margin-top: 70px;
}
img {
  width: 100%;
}
.p1 {
  font-size: 16px;
  text-align: center;
  margin-top: 10px;
}
// scoped 开启独立样式
</style>
