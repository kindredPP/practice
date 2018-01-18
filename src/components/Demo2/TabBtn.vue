<template>
    <div>
        <el-button plain v-on:click="select1">
            Tab1
        </el-button>
        <el-button plain v-on:click="select2">
            Tab2
        </el-button>
        <el-button plain v-on:click="selectDefault">
            TabDefault
        </el-button>
    </div>
</template>
<script>
    import eventVue from './../../utils/event.js'
    import { getBtn1List, getBtn2List, getDefaultList } from './../../utils/api'

    export default {
        methods: {
            select1 () {
                this.getEvent(getBtn1List, 1);
            },
            select2 () {
                this.getEvent(getBtn2List, 2);
            },
            selectDefault () {
                this.getEvent(getDefaultList, 0);
            },
            //获取数据
            getEvent (name, flag) {
                (name)().then((res) => {
                    eventVue.$emit('getData', {data: res.data, flag: flag})
                })
            },
            
        }
    }
</script>
<style>
</style>