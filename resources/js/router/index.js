import Vue from 'vue';
import Router from 'vue-router';
import ClientLayout from '../components/layouts/ClientLayout';
import Register from '../components/pages/Register';

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        { path: '/', component: ClientLayout, children: [{
            path: 'register', component: Register
        }] }
    ]
})