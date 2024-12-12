export default {
    install(Vue, x, y, z) {
        // 添加全局过滤器
        Vue.filter('filterName', function(value) {
            // 需求：只保留当前value值的前四位
            return value.slice(0,4)
        })

        // 添加全局指令
        Vue.directive('drtName', {
            // 指令与元素成功绑定时
            bind(element, binding) {
                // 给元素赋予指令的绑定值
                element.value = binding.value
            },
            // 指令所在元素被插入页面时
            inserted(element, binding) {
                element.focus()
            },
            // 指令所在的模板被重新解析时
            update(element, binding) {
                // 重新赋予指令的当前绑定值
                element.value = binding.value
            }
        })
        // 添加全局混入
        Vue.mixin({
            data() {
                return {
                    x: 100,
                    y: 200
                }
            },
            methods: {
                
            },
        })
        // 给Vue原型上加一个方法（vm和vc就都能用了）
        Vue.prototype.hello = () => {alert('你好啊')}
    }
}