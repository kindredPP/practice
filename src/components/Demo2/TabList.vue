<template>
    <div>
        <ul>
            <li v-for="item in lists" :key="item.text">{{item.text}}</li>
        </ul>
        <tab-bottom v-bind:clickFlag="flag"></tab-bottom>
    </div>
</template>
<script>
    import tabBottom from './TabBottom'
    import { getDefaultList } from './../../utils/api'
    import eventVue from './../../utils/event.js'

    export default {
        components: {
            tabBottom
        },
        
        created () {
            this.getDefList();
            eventVue.$on('getData', (res) => {
                this.lists = res.data;
                this.flag = res.flag;
            })
        },

        data () {
            return {
                'lists': [],
                'flag': 0
            }
        },

        methods: {
            getDefList () {
                getDefaultList().then((res) => {
                    this.lists = res.data;
                })
            }
        },
        
        beforeDestroy () {
            eventVue.$off('getData')
        }
        
    }
</script>
<style>
</style>