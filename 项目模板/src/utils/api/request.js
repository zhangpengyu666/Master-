import Axios from "axios";
import router from "@/router";
import store from "@/store";
import qs from "qs";
import Vue from "vue";
import $loading from "@/components/Tools/Loading/index.js";
Vue.use($loading);

let baseURL = "https://api.it120.cc";

const instance = Axios.create({
  baseURL,
  timeout: 5000, //超时时间
});

instance.interceptors.request.use(
  function(config) {
    Vue.$loading.show();
    if (store.state.token) {
      config.header.Authorization = store.state.token;
    }
    return config;
  },
  function(err) {
    return Promise.reject(err);
    //这是promise的一个方法，执行的结果是一个promise，而且会立刻执行catch方法，并把参数传到catch里
  }
);
//请求拦截

instance.interceptors.response.use(
  function(response) {
    if (response.data.msg == "无效token") {
      router.push("/login");
    }
    Vue.$loading.hide();

    return response;
  },
  function(err) {
    return Promise.reject(err);
  }
);
//响应拦截

export default function http(url, method, data = {}, params = {}) {
  return instance({
    url: url,
    method: method,
    data: qs.stringify(data),
    params: params,
  })
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return Promise.reject(err);
    });
}
