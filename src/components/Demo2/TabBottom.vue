<template>
    <div>
        <h3 v-if="clickFlag == 1">底部：点击了按钮一</h3>
        <h3 v-else-if="clickFlag == 2">底部：点击了按钮二</h3>
        <h3 v-else>底部：默认</h3>
    </div>
</template>
<script>
    export default {
        props: {
            'clickFlag': {
                type: Number
            }
        }
    }
</script>
<style>
</style>