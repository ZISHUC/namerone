import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

//ui组件库
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

// 为了一劳永逸，省去后面频繁导入axios，此处可以进行优化
import axios from "@/api/http";
// 核心思想：将axios放到vue的原型上，起名属性：$http
Vue.prototype.$http = axios;



Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
