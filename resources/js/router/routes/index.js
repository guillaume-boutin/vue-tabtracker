import ClientLayout from '../../components/layouts/ClientLayout';
import Home from '../../components/pages/Home';
import Login from '../../components/pages/Login';
import Register from '../../components/pages/Register';
import Songs from '../../components/pages/Songs';

export default [{
    path: '/', component: ClientLayout, children: [{
        path: '/', name: 'home', component: Home, meta: { auth: true }
    }, {
        path: 'login', name: 'login', component: Login
    }, {
        path: 'register', name: 'register', component: Register
    }, {
        path: 'songs', name: 'songs', component: Songs, meta: { auth: true }
    }]
}];