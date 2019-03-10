export default (to, from, next, store) => {
    const user = store.getters.user;

    if (user === null) return next();

    return next({name: 'home'});
};