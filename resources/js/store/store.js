import AuthService from  '../services/AuthenticationService';
import { Promise } from 'q';

export default {
    strict: true,
    state: {
        user: null
    },
    getters: {
        user (state) {
            return state.user
        }
    },
    mutations: {
        setUser (state, user) {
            state.user = user;
        }
    },
    actions: {
        login ({ commit }, credentials) {
            return new Promise((resolve, reject) => {
                AuthService.login(credentials)
                    .then(res => {
                        commit('setUser', res.data.user);
                        resolve();
                    })
                    .catch(error => {reject(error)});
            })
        },
        setUser ({ commit }, user) {
            commit('setUser', user);
        }
    }
};