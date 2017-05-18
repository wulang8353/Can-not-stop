import Vue from 'vue';
import VueRouter from 'vue-router';
import axios from 'axios';
import App from './App';

import 'common/style/index.scss';

// 1.引入路由组件
import index from 'components/index/index';
import project from 'components/project/project';

// 2.全局注册且调用模块
Vue.use(VueRouter);

// 3.定义路由映射
const routes = [{
    path: '/',
    redirect: '/index'
}, {
    path: '/index',
    component: index
}, {
    path: '/project',
    component: project
}];

// 4.创建router实例，并传入映射配置
const router = new VueRouter({
    routes // （缩写）相当于 routes: routes
});


/* eslint-disable no-new */
new Vue({
    el: '#app',
    template: '<App/>',
    router, // 5.创建Vue实例，并传入路由
    components: { App }
});
