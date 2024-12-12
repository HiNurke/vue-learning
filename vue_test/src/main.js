/* 
  该文件是真个项目的入口文件
*/
// 引入Vue
import Vue from 'vue'
// 引入App组件，它是所有组件的父组件
// import App from './App.vue'
// 关闭vue的生产提示
Vue.config.productionTip = false

// 创建Vue实例对象——vm
new Vue({
  // 完成了：将App组件放入容器中
  // render: h => h(App),
  // render 函数
  render: createElement => {
    return createElement('h1', '你好啊')
  }
}).$mount('#app') // el的第二种写法