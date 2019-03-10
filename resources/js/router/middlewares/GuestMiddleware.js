import Auth from '../../services/AuthenticationService';

export default (to, from, next, store) => {
    const user = store.getters.user;

    if (user !== null) return next({name: 'home'});

    Auth.ping()
        .then(response => {
            store.dispatch('setUser', response.data.user)
                .then(() => next({name: 'home'}));
        })
        .catch(error => {
            if (error.response.status === 401) return next();
        });
};