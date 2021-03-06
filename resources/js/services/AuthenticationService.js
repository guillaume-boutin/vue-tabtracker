import Api from './Api'

export default {
    register (credentials) {
        return Api.post('register', credentials);
    },

    login (credentials) {
        return Api.post('login', credentials);
    },

    logout () {
        return Api.post('logout');
    },

    ping () {
        return Api.get('me');
    }
}