<template>
    <div id="client-layout">
        <page-header />

        <v-container fluid>
            <router-view></router-view>
        </v-container>
    </div>
</template>

<script>
    import PageHeader from '../partials/Header';
    import Auth from '../../services/AuthenticationService';

    export default {
        components: {
            PageHeader
        },
    }
</script>

<style scoped>
   .container {
        margin-top: 75px;
    }
</style>

