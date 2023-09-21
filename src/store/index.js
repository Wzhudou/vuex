import { createStore } from 'vuex'
// import Vue from 'vue';
// import Vuex from 'vuex';
export default createStore({
// Vue.use(Vuex); // 注册vuex的功能 Vue.use的方法实际上是调用了Vuex中的install的方法
// export default new Vuex.Store({ // 实例化一个Vuex
  // 公共数据源---里面存放全局共享的数据
  state: {
    count: 0,
  },
  getters: {
    showNum(state) {
      return '当前最新的数量【' + state.count + '】';
    },
    token: state => state.user.token,
    name: state => state.setting.name,
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
  // 放置子模块
  modules: {
    user: {
      namespaced: true,
      state: {
        token: '12345',
      },
      mutations: {
        updateToken(state) {
          state.token = '678910';
        }
      }
    },
    setting: {
      state: {
        name: 'Vuex实例',
      }
    },
  },
})
