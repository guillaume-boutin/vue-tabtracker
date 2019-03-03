require('./bootstrap');
import Vue from 'vue';
import router from './router/index';

window.Vue = Vue;

const app = new Vue({
    el: '#app',
    router
});
