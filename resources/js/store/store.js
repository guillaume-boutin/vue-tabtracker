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
        },

        setSongs (state, songs) {
            state.songs = songs;
        }
    },

    actions: Object.assign({},
        require('./actions/AuthActions').default,
        require('./actions/SongsActions').default
    )
};