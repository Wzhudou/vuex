import { createStore } from 'vuex'
// import Vue from 'vue';
// import Vuex from 'vuex';
export default createStore({
// Vue.use(Vuex);
// export default new Vuex.Store({
  // 公共数据源---里面存放全局共享的数据
  state: {
    count: 0,
  },
  getters: {
    showNum(state) {
      return '当前最新的数量【' + state.count + '】';
    },
  },
  mutations: { // 不要在mutations中执行异步操作
    add(state) {
      state.count++;
    },
    addN(state, step) {
      state.count += step;
    },
    sub(state) {
      state.count--;
    },
    subN(state, step) {
      state.count -= step;
    }
  },
  actions: {
    addAsync(context) {
      setTimeout(() => {
          context.commit('add');
      }, 1000);
    },
    addNAsync(context, step) {
      setTimeout(() => {
          context.commit('addN', step);
      }, 1000);
    },
    subAsync(context) {
      setTimeout(() => {
          context.commit('sub');
      }, 1000);
    },
    subNAsync(context, step) {
      setTimeout(() => {
          context.commit('subN', step);
      }, 1000);
    },
  },
  modules: {
  },
})
