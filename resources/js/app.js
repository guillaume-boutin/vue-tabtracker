import './bootstrap';
import Vue from 'vue';
import router from './router/index';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';

window.Vue = Vue;

Vue.use(Vuetify);

new Vue({
    el: '#app',
    router
});
