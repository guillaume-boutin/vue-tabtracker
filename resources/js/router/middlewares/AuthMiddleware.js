import Auth from '../../services/AuthenticationService';

export default (to, from, next, store) => {
    const user = store.getters.user;

    if (user === null) {
        Auth.ping()
            .then(response => {
                store.dispatch('setUser', response.data.user)
                    .then(() => {
                        if (to.name === 'login') {
                            return next({name: 'home'});
                        }
                        
                        return next();
                    })
            })
            .catch(error => {
                if (error.response.status === 401) return next({name: 'login'})
            });
    } else {
        return next();
    }
};