<template>
    <div>
        <li>
            {{ todo.text }} {{ todo.impt }} {{ todo.urgency }}
            <el-button type="info" round v-on:click="removeSelf">删除</el-button>
            <router-link :to="{name:'detail', params:{item: todo}}"><el-button type="success">跳转详情</el-button></router-link>
        </li>
    </div>
</template>

<script>
    export default {
        props: {
            todo: {
                type: Object
            }
        },
        methods: {
            removeSelf () {
                this.$emit('remove', this.todo.itemId);
            }
        }
    }
</script>