import Vue from 'vue'
import Vuex from 'vuex'
import Count from './modules/count';
// 引入插件
import {myPlugin, logger} from './plugins/index'
Vue.use(Vuex);

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production', // 严格模式
  modules: {
    Count,
  },
  plugins: [logger],
});


// // 热重载
// if (module.hot) {
//   // 使 action 和 mutation 成为可热重载模块
//   module.hot.accept(['./mutations', './modules/a'], () => {
//     // 获取更新后的模块
//     // 因为 babel 6 的模块编译格式问题，这里需要加上 `.default`
//     const newMutations = require('./mutations').default
//     const newModuleA = require('./modules/a').default
//     // 加载新模块
//     store.hotUpdate({
//       mutations: newMutations,
//       modules: {
//         a: newModuleA
//       }
//     })
//   })
// }


