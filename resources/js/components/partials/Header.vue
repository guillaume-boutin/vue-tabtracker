<template>
    <v-toolbar fixed dark class="light-blue">
        <v-toolbar-title class="mr-4">
            <a to="/"></a>
            Tab Tracker
        </v-toolbar-title>

        <!-- TODO: Implement Me! -->
        <!-- <v-toolbar-items>
            <v-btn flat dark>
                Browse
            </v-btn>
        </v-toolbar-items> -->

        <v-spacer></v-spacer>

        <v-toolbar-items>
            <v-btn
                flat
                dark
                tag="button"
                to="login"
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
        </v-toolbar-items>
    </v-toolbar>
</template>

<script>
    export default {}
</script>

<style scoped>

</style>

