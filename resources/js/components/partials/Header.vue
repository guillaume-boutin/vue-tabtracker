<template>
    <v-toolbar fixed dark class="light-blue">
        <v-toolbar-title class="mr-4">
            <a to="/"></a>
            Tab Tracker
        </v-toolbar-title>

        <v-toolbar-items>
            <v-btn
                flat
                dark
                tag="button"
                :to="{name: 'songs'}">
                Browse
            </v-btn>
        </v-toolbar-items>

        <v-spacer></v-spacer>

        <v-toolbar-items>
            <v-btn
                flat
                dark
                tag="button"
                :to="{name: 'login'}"
                v-if="!$store.state.user">
                Login
            </v-btn>

            <v-btn
                flat
                dark
                tag="button"
                to="register"
                v-if="!$store.state.user">
                Sign Up
            </v-btn>

            <v-btn
                flat
                dark
                v-else
                @click="logout">
                Logout
            </v-btn>
        </v-toolbar-items>
    </v-toolbar>
</template>

<script>
    export default {
        methods: {
            logout () {
                this.$store.dispatch('logout')
                    .then(() => {
                        this.$router.push({name: 'login'})
                    });
            }
        }
    }
</script>

<style scoped>

</style>

