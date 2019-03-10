export default {
    setSongs (state, songs) {
        state.songs = songs;
    },

    addSong (state, song) {
        state.songs.push(song);
    }
};