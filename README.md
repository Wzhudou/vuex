# test

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


### Vue的全局对象
    1、设置
        Vue.prototype.test = 'test'; 
    2、使用
        this.test; 


### Vuex
    1、核心概念
        （1）state
            state: {
                count: 10,
                text: 'Hello vuex'
            },
             读取方式一： this.$store.state.count
             读取方式二：
                import {mapState} from 'vuex';
                computed: {
                    ...mapState(['count', 'text'])
                },
            读取方式三：
                import {mapState} from 'vuex';
                computed: {
                    ...mapState({
                        count: state => state.count,
                        text: state =>state.text,
                        totalCount(state) {
                            return state.count + this.v1Value;
                        }
                    })
                },
        （2）mutations
            更改Vuex的store中的状态的唯一方法是提交mutation
                mutations: {
                    increment(state) {
                        state.count++
                    }
                },
                // 修改值操作
                this.$store.commit('increment');
            提交载荷（payload） --- 增加参数
                mutations: {
                    increment(state, n) {
                        state.count += n
                    }
                },
                // 修改值操作
                this.$store.commit('increment', 10);

            对象风格的提交方式
                commitType(state, obj) {
                    console.log(obj);
                    if (obj.type === 'increment') {
                        state.count += obj.num;
                    }
                }
                // 修改值操作
                this.$store.commit('commitType', {
                    type: 'increment',
                    num: 10,
                });

            响应式数据 --- 向响应式对象中添加一个属性，并确保这个新属性同样是响应式的，且触发视图更新
                // Vue.set(item, 'price', this.price);
                this.$set(item, 'price', this.price);

            使用常量代替mutations事件类型
                import { INCREMENT, DECREMENT } from './mutation-types';
                [INCREMENT](state, n) {
                    state.count += n;
                },
                [DECREMENT](state, n) {
                    state.count -= n;
                },
                this.$store.commit(INCREMENT, 5);
            
            Mutation必须是同步函数 网络请求是异步所以不允许

            在组件中提交mutation
                import { mapMutations} from 'vuex';
                methods: {
                    ...mapMutations([INCREMENT, DECREMENT]),
                    addHandler() {
                        // 增加操作
                        // this.$store.commit(INCREMENT, 5);
                        this.INCREMENT(5);
                    },

                    minHandler() {
                        // 减少操作
                        // this.$store.commit(DECREMENT, 4);
                        this.DECREMENT(4);
                    },
                }
        
        (3) Action
            Action提交的是mutation，而不是直接变更状态
            Action可以包含任意异步操作
            
            注册action
            actions: {
                incrementByUser({commit}, n) {
                    commit('increment', n);
                }
            },
            methods: {
                actionHandler() {
                    this.$store.dispatch('incrementByUser', 30)
                }
            }

        （4）Getter
            getters: {
                getCount(state) {
                if (state.count <= 0) {
                    return '数据不合理';
                } else {
                    return state.count;
                }
                }
            },
            // 读取值
           (1) this.$store.getters.getCount
           (2) import {mapGetters} from 'vuex';
                computed: {
                    ...mapGetters(['getCount'])
                }
                {{getCount}}
        
        (5) Module
            分割成不同的模块

            命名空间 --- namespaced: true,
        
       （6）插件

       （7）严格模式
            在开发模式下不加严格模式
            在发布模式下设置严格模式

Vuex和全局对象的区别
    1、Vuex的状态存储是响应式的
    2、改变store中的状态的唯一路径就是显式的提交（commit）mutation