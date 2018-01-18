import Vue from 'vue'
import VueRouter from 'vue-router'
import PracticeList from './../components/PracticeList'
import ItemDetail from './../components/Demo1/ItemDetail'
import TaskList from './../components/Demo1/TaskList'
import TabDemo from './../components/Demo2/TabDemo'
import VuexDemo from './../components/Demo3/VuexDemo'

Vue.use(VueRouter);

export const routers = [
    { path: '/', component: PracticeList },
    { path: '/taskList', component: TaskList },
    { name:'detail', path: '/detail/:item', component: ItemDetail },
    { path: '/tabDemo', component: TabDemo },
    { path: '/vuexDemo', component: VuexDemo },
    { path: '*', redirect: '/'}
]

export default new VueRouter({
    routes: routers
})



