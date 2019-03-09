import ClientLayout from '../../components/layouts/ClientLayout';
import Home from '../../components/pages/Home';
import Login from '../../components/pages/Login';
import Register from '../../components/pages/Register';

export default [{
    path: '/', component: ClientLayout, children: [{
        path: '/', name: 'home', component: Home, meta: { requiresAuth: true }
    }, {
        path: 'login', name: 'login', component: Login
    }, {
        path: 'register', name: 'register', component: Register, meta: { requiresAuth: true }
    }]
}];