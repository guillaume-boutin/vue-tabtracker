import Api from '../../services/Api';

export default {
    getSongs ({ commit }) {
        return new Promise((resolve, reject) => {
            Api.get('songs')
                .then((res) => {
                    commit('setSongs', res.data.songs);
                    resolve(res.data.songs);
                })
                .catch(err => {reject(err)});
        });
    },

    createSong ({ commit }, song) {
        return new Promise((resolve, reject) => {
            Api.post('songs', song)
                .then((res) => {
                    commit('addSong', res.data.song);
                    resolve(res.data.song);
                })
                .catch(err => {reject(err);});
        });
    }
}