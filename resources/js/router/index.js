import Vue from 'vue';
import Router from 'vue-router';
import ClientLayout from '../components/layouts/ClientLayout';
import Home from '../components/pages/Home';
import Login from '../components/pages/Login';
import Register from '../components/pages/Register';

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [{
        path: '/', component: ClientLayout, children: [{
            path: '/', name: 'home', component: Home
        }, {
            path: 'login', name: 'login', component: Login
        }, {
            path: 'register', name: 'register', component: Register
        }]
    }]
})