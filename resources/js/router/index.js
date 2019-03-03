import Vue from 'vue';
import Router from 'vue-router';
import ExampleComponent from '../components/ExampleComponent';
import Register from '../components/Register';

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: ExampleComponent
        },
        {
            path: '/register',
            component: Register
        }
    ]
})