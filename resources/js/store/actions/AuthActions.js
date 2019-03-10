import AuthService from  '../../services/AuthenticationService';

export default {
    register ({ commit }, credentials) {
        return new Promise((resolve, reject) => {
            AuthService.register(credentials)
                .then(res => {
                    commit('setUser', res.data.user);
                    resolve();
                })
                .catch(error => { reject(error) });
        });
    },

    login ({ commit }, credentials) {
        return new Promise((resolve, reject) => {
            AuthService.login(credentials)
                .then(res => {
                    commit('setUser', res.data.user);
                    resolve();
                })
                .catch(error => { reject(error) });
        });
    },

    logout({ commit }) {
        return new Promise((resolve, reject) => {
            AuthService.logout()
                .then(() => {
                    commit('setUser', null);
                    resolve();
                })
                .catch(error => { reject(error) });
        });
    },

    setUser ({ commit }, user) {
        commit('setUser', user);
    }
}