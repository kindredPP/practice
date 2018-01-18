<template>
    <div>
        <h3>分组显示</h3>
        <div id="myChart" :style="{width: '400px', height: '300px'}"></div>
    </div>
</template>

<script>
    import Vue from 'vue'
    import echarts from 'echarts'
    Vue.prototype.$echarts = echarts
    export default {
        props: {
            todos: {
                type: Array
            }
        },
        mounted () {
            this.drawLine(this.group());
        },
        watch: {
            todos: function (val) {
                this.drawLine(this.group())
            }
        },
        methods: {
            drawLine (data) {
                // 基于准备好的dom，初始化echarts实例
                let myChart = this.$echarts.init(document.getElementById('myChart'))
                // 绘制图表
                myChart.setOption({
                    title: { text: '统计图' },
                    tooltip: {},
                    label: {
                        normal:{
                            show: true,
                            position: 'inside'
                        }
                    },
                    xAxis: {
                        axisLabel:{
                            interval: 0
                        },
                        data: ["紧急重要", "重要不紧急", "不重要紧急", "不紧急不重要"],
                    },
                    yAxis: {},
                    series: [{
                        name: '任务数',
                        type: 'bar',
                        data: data,
                        itemStyle: {
                            normal: {
                                color: function (params) {
                                    //首先定义一个数组
                                    var colorList = [
                                        '#C33531', '#FF6666', '#EE9201', '#64BD3D'
                                    ];
                                    return colorList[params.dataIndex]
                                }
                            }
                        }
                    }]
                });
            },
            group () {
                var data = this.todos;
                var chartData = {zj: 0, znj: 0, nzj: 0, nznj: 0};
                for(var i in data){
                    if(data[i]['impt'] == '重要'){
                        if(data[i]['urgency'] == '紧急'){
                            chartData['zj'] += 1;
                        }else{
                            chartData['znj'] += 1;
                        }
                    }else{
                        if(data[i]['urgency'] == '紧急'){
                            chartData['nzj'] += 1;
                        }else{
                            chartData['nznj'] += 1;
                        }
                    }
                }

                return [chartData.zj, chartData.znj, chartData.nzj, chartData.nznj];
            }
        }
    }
</script>
<style>
    .echarts {
        height: 300px;
    }
</style>