// 封装echarts
import * as echarts from 'echarts';
const install = function(Vue) {
    // 双向数据绑定，挂载$charts
    Object.defineProperties(Vue.prototype, {
        $charts: {
            get() {
                return {
                    line: function(id, data) {
                        var dom = document.getElementById(id);
                        var myChart = echarts.init(dom);

                        var arr1= data.name;
                        var arr2= data.data;

                        var option = {
                            backgroundColor: '#404a59',  //整体背景
                            title: {
                                text: '高新企业领域分布图',
                                top: '10',
                                left: 'center',
                                textStyle: {
                                    color: '#fff',
                                    fontWeight: 100,
                                    fontSize: 20
                                }
                            },
                            legend: {
                                data: [{            //必须与series一一对应
                                    name: '高新企业'
                                }],
                                orient: 'vertical',
                                bottom: 0,
                                right: 0,
                                textStyle: {
                                    color: '#fff'
                                }
                            },
                            color: ['#c23531', '#ffc917', '#61a0a8', '#00ffec', '#91c7ae'],
                            tooltip: {
                                trigger: 'axis',

                                axisPointer: {
                                    show:true,
                                    type: 'cross',
                                    crossStyle: {     //'cross'时候的样式
                                        color: 'blue'
                                    },
                                    label: {
                                        backgroundColor: '#ffc917',     //坐标轴指示器的文本标签样式
                                        textStyle: {
                                            color: '#fff'
                                        }
                                    }
                                }
                            },
                            //直角坐标系
                            grid: {
                                left: '3%',     //坐标系到左边的距离
                                right: '10%',
                                top:70,
                                bottom: '5%',
                                containLabel: true //是否包含坐标轴的刻度标签。
                            },
                            yAxis: {
                                type: 'value',
                                splitLine: {                  //坐标轴在 grid 区域中的分隔线设置。
                                    show: true,
                                    lineStyle:{
                                        color:'#fff'
                                    }
                                },
                                axisLine:{                        //坐标轴轴线相关设置。
                                    lineStyle:{
                                        color:'#9fdabf'           //坐标轴颜色
                                    }
                                },
                                axisTick: { show: false },     //坐标轴刻度相关设置。
                                axisLabel: {                    //坐标轴标签的相关设置。轴下面的字
                                    show: true,
                                    color: 'cyan'
                                }
                            },
                            xAxis: {
                                type: 'category',
                                boundaryGap: false,   //坐标轴两边留白策略，类目轴和非类目轴的设置和表现不一样。
                                data: arr1.reverse(),
                                nameGap:0,
                                splitLine: {                  //坐标轴在 grid 区域中的分隔线设置。
                                    show: true,
                                    lineStyle:{
                                        color:'#fff'
                                    }
                                },
                                axisLine:{                        //坐标轴轴线相关设置。
                                    lineStyle:{
                                        color:'#9fdabf'           //坐标轴颜色
                                    }
                                },
                                axisTick: { show: false },     //坐标轴刻度相关设置。
                                axisLabel: {                    //坐标轴标签的相关设置。轴下面的字
                                    show: true,
                                    color: 'cyan'
                                }
                            },

                            series: [
                                {
                                    name: '高新企业',
                                    type: 'line',
                                    data: arr2.reverse(),
                                    // step:true,      //是否是阶梯线图
                                    // smooth: true,   //是否平滑曲线显示。   
                                    label:{         //图形上的文本标签
                                        normal:{
                                            show:false
                                        }
                                    },
                                    itemStyle:{     //折线拐点标志的样式。
                                        normal:{
                                            shadowBlur: 10
                                        }
                                    },
                                    lineStyle:{     //线条样式。
                                        normal:{
                                            width: 10
                                        }
                                    },
                                    areaStyle:{     //区域填充样式。
                                        normal:{
                                            color: 'green'
                                        }
                                    },
                                    markPoint: {
                                        data: [
                                            {type: 'max', name: '最大值'},
                                            {type: 'min', name: '最小值'}
                                        ]
                                    }

                                }
                            ],
                            animation: true
                        };

                        if (option && typeof option === "object") {
                            myChart.setOption(option, true);
                        }
                    },

                    pie: function(id) {
                        var chartDom = document.getElementById(id);
                        var myChart = echarts.init(chartDom);
                        var option;

                        option = {
                        title: {
                            text: 'Referer of a Website',
                            subtext: 'Fake Data',
                            left: 'center'
                        },
                        tooltip: {
                            trigger: 'item'
                        },
                        legend: {
                            orient: 'vertical',
                            left: 'left'
                        },
                        series: [
                            {
                            name: 'Access From',
                            type: 'pie',
                            radius: '50%',
                            data: [
                                { value: 1048, name: 'Search Engine' },
                                { value: 735, name: 'Direct' },
                                { value: 580, name: 'Email' },
                                { value: 484, name: 'Union Ads' },
                                { value: 300, name: 'Video Ads' }
                            ],
                            emphasis: {
                                itemStyle: {
                                shadowBlur: 10,
                                shadowOffsetX: 0,
                                shadowColor: 'rgba(0, 0, 0, 0.5)'
                                }
                            }
                            }
                        ]
                        };

                        option && myChart.setOption(option);
                    }

                }
            }
        }
    })
}

export default {
    install
}