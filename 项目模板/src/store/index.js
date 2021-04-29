import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import vuexPersist from "vuex-persist";
export default new Vuex.Store({
  state: {
    token: "",
  },
  mutations: {},
  actions: {},
  modules: {},
  plugins: [
    new vuexPersist({
      storage: window.localStorage,
    }).plugin,
  ],
});
