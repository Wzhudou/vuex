<template>
    <div class="cp">
        <div class="my-svg">
            <svg width="110" height="110" class="svg">
                <circle cx="55" cy="55" r="50" stroke="#dcdcdc" stroke-width="10" fill="none"></circle>
                <circle
                    cx="55"
                    cy="55"
                    r="50"
                    stroke="#419620"
                    stroke-width="10"
                    fill="none"
                    stroke-linecap="round"
                    :stroke-dasharray="dashArrayWidth.end"
                ></circle>
            </svg>
        </div>
        <p class="cp-text">{{ num }}%</p>
    </div>
</template>
<script>
export default {
    name: "CircularProgress",
    data() {
        return {
        };
    },
    props:{
        num:{
            type:Number,
            default:79
        }
    },
    /**
     * 百分比
     * 具体数字
     * 
     * 60%
     * 
     */
    computed: {
        dashArrayWidth() {
            //计算周长
            var line = 2 * Math.PI * 50;
            return{
                //stork-dasharray有两个参数，第一个代表虚线的宽度，第二个代表虚线两两的间隔
                start: "0," + line, //开始状态
                end: line * (this.num / 100) + "," + line * ((100 - this.num) / 100) //结束状态
            }
        }
    }
};
</script>
<style scoped>
.cp {
    position: relative;
    width: 110px;
    height: 110px;
    margin: 0 auto;
    display: inline-block;
}

.my-svg {
    transform: rotate(-90deg);
}

.cp-text {
    width: 100px;
    font-size: 22px;
    position: absolute;
    text-align: center;
    top: 38%;
    color: #419620;
}
</style>

