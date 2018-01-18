<template>
    <div>
       <!-- {{ item.itemId }} {{ item.text }} {{ item.impt }} {{ item.urgency }}-->
        {{$route.params.item.itemId}}
        {{$route.params.item.text}}
        {{$route.params.item.impt}}
        {{$route.params.item.urgency}}
    </div>
</template>
<script>
    export default {
        props: {
            'item': {
                type: Object
            }
        },
        /*data () {

        }*/
    }
</script>
<style>
</style>