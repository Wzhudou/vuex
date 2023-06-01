<template>
    <div class="home">
        展示图表
        <div class="echart">
            <div id="line"></div>
            <div id="pie"></div>
        </div>
        <CircularProgress />
    </div>
</template>

<script>
    import CircularProgress from '@/components/CircularProgress/index.vue'
    export default {
        name: 'Home',
        components: {
            CircularProgress,
        },
        mounted () {
            this.$api.list().then(res => {
                console.log('list', res);
                this.$charts.line('line', {name: ['gwu', 'hhuu', 'pppp', 'oooo', 'kkkk'], data: [1234, 2234, 123, 4567, 4312]});
                this.$charts.pie('pie');
            })
        },
    }
</script>

<style  scoped>
    .home {
        text-align: center;
    }
    .echart {
        display: flex;
        justify-content: space-between;
        margin-top: 20px;
    }
    #line {
        width: 600px;
        height: 400px;
    }
    #pie {
        width: 500px;
        height: 500px;
    }
</style>