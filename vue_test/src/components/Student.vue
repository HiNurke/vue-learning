<template>
    <div>
        <h2>学生名称：{{ name }}</h2>
        <h2>学生年龄：{{ age }}</h2>
    </div>
</template>

<script>
    // 默认暴露
    export default {
        // 组件交互文件（Vue.extends()中的配置项）
        name: 'Student',
        data() {
            return {
                name: 'Tom',
                age: '18'
            }
        }
    }
</script>

<style>
    /* 组件样式 */
</style>