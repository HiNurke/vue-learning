<template>
    <!-- 组件的结构 -->
    <div class="demo">
        <h2>学校名称：{{ name }}</h2>
        <h2>学校地址：{{ address }}</h2>
        <button @click="showName"></button>
    </div>
</template>

<script>
    // 组件交互的相关代码
    // 暴露方式
    // 1. 分别暴露：export
    // 2. 统一暴露：export {school}
    // 3. 默认暴露：export default
    export default {
        name: 'School', // 与文件名保持一致
        data() {
            return {
                name: '尚硅谷',
                address: '北京昌平'
            }
        },
        methods: {
            showName() {
                alert(this.name)
            }
        },
    }

</script>

<style>
    /* 组件样式 */
    .demo{
        background: orange;
    }
</style>