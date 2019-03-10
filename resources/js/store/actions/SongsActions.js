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
    }
}