import { INCREMENT, DECREMENT } from '../mutation-types';
export default {
    namespaced: true,
    state: {
        count: 10,
        text: 'Hello vuex',
        test: 'rootState',
      },
      mutations: {
        [INCREMENT](state, n) {
          state.count += n;
        },
        [DECREMENT](state, n) {
          state.count -= n;
        },
        commitType(state, obj) {
          // console.log(obj, process.env.NODE_ENV);
          if (obj.type === 'increment') {
            state.count += obj.num;
          }
        }
      },
      actions: {
        incrementByUser({commit}, n) {
          commit(INCREMENT, n);
        },
        
        // rooterGetters 可以读取全局的getters
        // dispatch, commit, getters, rootGetters
        decrementByUser({commit, rootGetters}, n) {
            // console.log('123', rootGetters);
            commit(DECREMENT, n);
          }
      },
    
      getters: {
        getCount(state) {
          if (state.count <= 0) {
            return '数据不合理';
          } else {
            return state.count;
          }
        },
        // 读取全局Vuex中属性
        // state, getters, rootState, rootGetters
        getText(state, getters, rootState, rootGetters) {
            // console.log(getters, rootGetters);
            // console.log('rootState', rootState);
            return state.text
        }
    },
  
}