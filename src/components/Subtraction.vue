<template>
    <div>
        <!-- <h3>当前最新的count值为：{{ count }}</h3> -->
        <h3>{{ showNum }}</h3>
        <button @click="btnHandleSub">-1</button>
        <button @click="btnHandleSubN">-N</button>
        <button @click="btnHandleSubAsync">-1 Async</button>
        <button @click="subNAsync(10)">-N Async</button>
    </div>
</template>

<script>
    import { mapState, mapMutations, mapActions, mapGetters } from 'vuex';

    export default {
        name: 'Subtraction',
        computed: {
            ...mapState(['count']),
            ...mapGetters(['showNum'])
        },
        methods: {
            ...mapMutations(['sub', 'subN']),
            ...mapActions(['subAsync', 'subNAsync']),
            btnHandleSub() {
                // this.$store.commit('addN', 3);
                this.sub();
            },
            btnHandleSubN() {
                this.subN(3);
            },
            btnHandleSubAsync() {
                this.subAsync(1);
            },
            // btnHandleSubNAsync() {
            //     this.subNAsync(10);
            // },
        },
    };
</script>

<style scoped>

</style>