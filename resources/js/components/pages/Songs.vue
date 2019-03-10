<template>
    <v-layout>
        <v-flex xs6 offset-xs3>
            <panel title="Songs">
                <div v-for="song in songs" :key="song.id">
                    {{ song.artist }} - {{ song.album }} - {{ song.title }}
                </div>
            </panel>
        </v-flex>
    </v-layout>
</template>

<script>
import Panel from '../partials/Panel';

export default {
    components: {
        Panel
    },

    data () {
        return {
            songs: []
        }
    },

    beforeMount () {
        this.$store.dispatch('getSongs')
            .then(songs => {this.songs = songs;});
    }
}
</script>