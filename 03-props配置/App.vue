<template>
    <div>
        <h1 v-text="msg"></h1>
        <img src="./assets/logo.png" alt="" class="logo">
        <!-- 使用子组件注册标签 -->
        <School></School>
        <Student name="张三" :age="18" sex="男"></Student>
    </div>
</template>

<script>
    // 引入组件模块
    import School from './components/School.vue';
    import Student from './components/Student.vue'

    export default {
        name: 'App',
        data() {
            return {
                msg: '欢迎学习Vue！',
            }
        },
        components: {
            // 注册子组件
            School,
            Student
        }
    }
</script>

<style>
    .logo {
        width: 50px;
        height: 50px;
    }
</style>