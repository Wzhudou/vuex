<template>
    <div class="user">
        User组件 --- 子模块modules
        <div>用户token: {{ $store.state.user.token}}</div>
        <div>用户名称: {{ $store.state.setting.name}}</div>
        mapGetters方式
        <div>用户token: {{ token }}</div>
        <div>用户名称: {{ name }}</div>
        <button @click="update">更新子模块token</button>
        <!-- <button @click="test">使用辅助函数调用子模块</button> -->
        <button @click="updateToken">使用createNamespacedHelpers调用子模块</button>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

// 方案二
// import { mapMutations } from 'vuex';

// 方案三：
import { createNamespacedHelpers } from 'vuex';

const { mapMutations } = createNamespacedHelpers('user');
    export default {
        name: 'User',
        computed: {
            ...mapGetters(['token', 'name']),
        },
        methods: {
            // 辅助函数形式
            
            
            // 方案一：
            update() {
                this.$store.commit('user/updateToken');
            },

            // 方案二：直接使用辅助函数
            // ...mapMutations(['user/updateToken']),
            test() {
                this['user/updateToken']();
            },

            // 方案三：使用createNamespacedHelpers创建的mapMutations
            ...mapMutations(['updateToken']),
        },
    }
</script>

<style scoped>
.user {
    margin-top: 20px;
}
</style>