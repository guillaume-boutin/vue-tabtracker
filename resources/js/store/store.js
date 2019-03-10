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
    mutations: Object.assign(
        require('./mutations/UsersMutations').default,
        require('./mutations/SongsMutations').default
    ),

    actions: Object.assign({},
        require('./actions/AuthActions').default,
        require('./actions/SongsActions').default
    )
};