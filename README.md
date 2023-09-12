# vuex_demo1

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


### 1、使用Vuex统一管理状态的好处
```
(1) 能够在vue想中集中管理共享的数据，易于开发和后期维护
(2) 能够高效地实现组件之间的数据共享，提高开发效率
(3) 存储在vuex中国的数据都是响应式的，能够实时保持数据与页面的同步
```
### 2、什么样的数据适合存储到vue中
```
大范围的数据共享使用vuex
```
### 3、组件中访问State中数据的方式
```
state: {
    count: 0,
},
第一种方式：
    this.$store.state.全局数据名称
第二种方式：
    import { mapState } from 'vuex';
    在计算computed计算属性中
    computed: {
        ...mapState(['count'])
    }

```
### 4、mutation用于变更Store中的数据
```
1、只能通过mutation变更Store的数据
2、定义mutation(不能写异步的代码)
    mutations: {
        add(state) {
            state.count++
        }
    }
3、触发mutation的方式
    方式一：this.$store.commit('add');
    方式二：
        在Vue组件中按需引入mapMutations函数
            import { mapMutations } from 'vuex';
        将指定的mutations函数，映射为当前组件的methods函数
        methods: {
            ...mapMutations(['add', 'addN']);
        }
```
### 5、Action 处理异步任务
```
1、定义Action
    actions: {
        addAsync(context) {
            setTimeout(() => {
                context.commit('add');
            })
        }
    }
2、触发Action
    方式一：
        this.$store.dispatch('addAsync');
    方式二：
        import { mapActions } from 'vuex';
        methods: {
            ...mapActions(['addAsync', 'addNAsync'])
        }

```

### 6、Getter
```
用于对store中的数据加工处理形成新的数据
store中的数据发生变化，Getter的数据也会跟着变化
（1）定义Getter
    getters: {
        showNum: state => {
            return '当前最新的数据是' + state.count;
        }
    }
（2）使用
    方式一：this.$store.getters.showNum
    方式二：
        import { mapGetters } from 'vuex';
        computed: {
            ...mapGetters(['showNum']),
        }
```