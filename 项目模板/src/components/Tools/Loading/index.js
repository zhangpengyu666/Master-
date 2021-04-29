// 用来把loading组件注册成一个方法

import Vue from "vue";

import loading from "./Loading.vue";

// 我们的思路是 把loading组件在请求数据的时候添加进页面里，
// 但是这个loading组件不是普通的标签不能直接append

// vue 中的extend方法 叫做实例构造器

let createLoading = Vue.extend(loading);
//构造了一个vue loading实例
// 变成实例之后 需要注册组件最常用的是用Vue.component注册组件
// 还有一种是 new一个实例作为组件使用

let newLoading = new createLoading({
  el: document.createElement("div"),
});
// new 方法创建组件 可以直接指定把组件挂载在哪个节点上

newLoading.show = false;
//给这个loading的show为false 默认隐藏

let $loading = {
  show() {
    newLoading.show = true;
    document.body.appendChild(newLoading.$el);
  },
  //$loading的 show方法 就是要显示loading组件 往页面添加节点 把show变成true
  hide() {
    newLoading.show = false;
    //隐藏的方法是吧show变成false
  },
};

export default {
  install() {
    Vue.$loading = $loading;
    Vue.mixin({
      created() {
        this.$loading = $loading;
      },
    });

    //mixin混入 放的的公共的代码 其实就是把这段mixin放在哪里 就会调用mixin里的created方法
  },
};
// install是为了使用use注册为全局方法，参考index2。js是不用install的代码，index2中只能用prototype挂载全局方法
