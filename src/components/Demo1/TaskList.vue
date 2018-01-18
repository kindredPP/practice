<template>
    <div>
        <h2>待办事务管理</h2>
        <InputGroup @add="addItem">
        </InputGroup>

        <ul v-if="todos.length > 0">
            <TaskItem
                v-for="todo in todos"
                v-bind:key="todo.itemId"
                :todo="todo"
                v-on:remove="removeItem"
            ></TaskItem>
        </ul>
        <p v-else class="msg">请发布待办任务</p>

        <SortChart :todos="todos" class="right"></SortChart>
    </div>
</template>
<script>
    import InputGroup from './InputGroup.vue'
    import TaskItem from './TaskItem.vue'
    import SortChart from './SortChart.vue'
    import {getTaskList} from './../../utils/api' //用@/utils/api 不行 找不到

    export default {
        components: {
            InputGroup, SortChart, TaskItem
        },
        data () {
            return {
                itemId: 0,
                todos: []
            }
        },
        mounted () {
            this.getTodosList();
        },
        methods: {
            addItem (obj) {
                this.todos.push({
                    itemId: this.itemId++,
                    text: obj.text.trim(),
                    impt: obj.impt,
                    urgency: obj.urgency
                })
            },
            removeItem (id) {
                for(var i in this.todos){
                    if(this.todos[i].itemId == id){
                        this.todos.splice(i, 1);
                    }
                }
            },
            getTodosList () {
                getTaskList().then((res) => {
                    var result = res.data;
                    this.todos = this.todos.concat(result);
                    this.itemId = this.todos.length + 1;
                })
               /* axios.get('http://localhost:3000/todos').then((res) => {
                    var result = res.data
                    this.todos = this.todos.concat(result)
                    this.itemId = this.todos.length + 1;
                })*/
            }
        }
    }
</script>

<style>
    .msg {
        color: red;
    }
    .right {
        position: fixed;
        right: 300px;
        top:0;
    }
</style>