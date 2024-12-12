<template>
    <div>
        <h1>{{ msg }}</h1>
        <h2>学生名称：{{ name }}</h2>
        <h2>学生年龄：{{ myAge }}</h2>
        <h2>学生性别：{{ sex }}</h2>
        <button @click="addAge">点我年龄+1</button>
    </div>
</template>

<script>
    // 默认暴露d
    export default {
        // 组件交互文件（Vue.extends()中的配置项）
        name: 'Student',
        data() {
            return {
                msg: '我是一个尚硅谷的学生',
                myAge: this.age + 1
            }
        },
        methods: {
            addAge() {
                this.myAge
            }
        },
        props: {
            name: {
                type: String,
                required: true
            },
            age: {
                type: Number,
                default: 99
            },
            sex: {
                type: String,
                required: true
            },
        }
    }
</script>

<style>
    /* 组件样式 */
</style>