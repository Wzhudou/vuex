<template>
    <div>
        <!-- <h3>当前最新的count值为：{{ $store.state.count }}</h3> -->
        <h3>{{ $store.getters.showNum }}</h3>
        <button @click="btnHandleAdd">+1</button>
        <button @click="btnHandleAddN">+N</button>
        <button @click="btnHandleAddAsync">+1 Async</button>
        <button @click="btnHandleAddNAsync">+N Async</button>
    </div>
</template>

<script>
    export default {
        name: 'Addtion',
        methods: {
            btnHandleAdd() {
                this.$store.commit('add');
            },
            btnHandleAddN() {
                this.$store.commit('addN', 3);
            },
            // 异步count自增加1
            btnHandleAddAsync() {
                this.$store.dispatch('addAsync');
            },
            btnHandleAddNAsync() {
                this.$store.dispatch('addNAsync', 10);
            },
        },
    };
</script>

<style lang="scss" scoped>

</style>