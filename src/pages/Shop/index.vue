<template>
    <div>
        Shop
        <div id="mockLine"></div>
    </div>
</template>

<script>
    export default {
        name: 'Shop',
        mounted () {
            this.$api.line().then(res => {
                console.log('res1', res);
                this.$charts.line('mockLine', res.data);
            })
        },
    }
</script>

<style scoped>
#mockLine {
        width: 600px;
        height: 400px;
    }
</style>