import Vue from 'vue'
import router from './router/router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App.vue'
//import store from './vuexConfig/store'

Vue.use(ElementUI)

new Vue({
    el: '#app',
    router,
    //store,
    render: h => h(App)
})
