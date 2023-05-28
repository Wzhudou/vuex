<template>
    <div>
        v1
        <div>
            读取Vuex方式一： {{$store.state.Count.count}}<br >
            读取Vuex方式二： {{count}} --- {{text}} --- {{totalCount}} <br >
            读取Vuex方式三： {{$store.getters['Count/getCount']}} <br>
            读取Vuex方式四： {{getCount}} <br>
            读取Vuex中的text: {{$store.getters['Count/getText']}}
    
        </div>
        <hr>
        <div>
            <button @click="addHandler">增加</button>
            <button @click="minHandler">减少</button>
            <button @click="commitTypeHandler">对象风格的提交方式</button>
            <button @click="actionHandler">action操作</button>
            <button @click="rooterGetters">rooterGetters操作</button>
        </div>
    </div>
</template>

<script>
    import {mapState, mapMutations, mapGetters} from 'vuex';
    import {INCREMENT, DECREMENT} from '@/store/mutation-types'
    export default {
        name: 'V1',
        data() {
            return {
                v1Value: 20,
            }
        },
        // computed: {
        //     ...mapState(['count', 'text'])
        // },
        computed: {
            ...mapState({
                count: state => state.Count.count,
                text: state =>state.Count.text,
                totalCount(state) {
                    return state.Count.count + this.v1Value;
                }
            }),
            ...mapGetters('Count', ['getCount'])
        },
        methods: {
            // addHandler
            ...mapMutations('Count', [INCREMENT, DECREMENT]),

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
            
            commitTypeHandler() {
                this.$store.commit('Count/commitType', {
                    type: 'increment',
                    num: 10,
                });
            },
            actionHandler() {
                // 子模块不加namespaced: true，可以用这种方式
                // this.$store.dispatch('incrementByUser', 17)
                // 子模块加了
                this.$store.dispatch('Count/incrementByUser', 17)

            },

            rooterGetters() {
                this.$store.dispatch('Count/decrementByUser', 1)
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>