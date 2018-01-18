<template>
    <div>
        <el-row>
            <el-col :span="6">
                <el-input type="text" placeholder="添加待办任务" v-model="content"></el-input>
            </el-col>
            <el-col :span="6">
                <el-button v-on:click="addItem">Add</el-button>
            </el-col>
        </el-row>
        <br>
        <br>

        <el-select v-model="imptContent">
            <el-option value="重要">重要</el-option>
            <el-option value="不重要">不重要</el-option>
        </el-select>

        <el-select v-model="urgencyContent">
            <el-option value="紧急">紧急</el-option>
            <el-option value="不紧急">不紧急</el-option>
        </el-select>
    </div>
</template>
<script>
    export default {
        props: {
            todos: {
                type: Array
            }
        },
        data () {
            return {
                content: '',
                imptContent: '不重要',
                urgencyContent: '不紧急'
            }
        },
        methods: {
            addItem () {
                this.$emit('add', {
                    text: this.content,
                    impt: this.imptContent,
                    urgency: this.urgencyContent
                })
                this.initData();
            },
            initData () {
                this.content = '';
                this.imptContent = '不重要';
                this.urgencyContent = '不紧急';
            }
        }

    }
</script>