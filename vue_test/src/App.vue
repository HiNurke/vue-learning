<template>
    <div>
        <img src="./assets/logo.png" alt="">
        <!-- 使用子组件注册标签 -->
        <School></School>
        <Student></Student>
    </div>
</template>

<script>
    // 引入组件模块
    import School from './components/School.vue';
    import Student from './components/Student.vue'

    export default {
        name: 'App',
        components: {
            // 注册子组件
            School,
            Student
        }
    }
</script>

<style>

</style>