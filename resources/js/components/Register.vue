<template>
    <v-layout>
        <v-flex xs6 offset-xs3>
            <div class="white elevation-2">

                <v-toolbar flat dense dark class="light-blue">
                    <v-toolbar-title>
                        Register
                    </v-toolbar-title>
                </v-toolbar>

                <div class="pt-2 pr-4 pb-2 pl-4">

                    <v-text-field
                        type="email"
                        name="email"
                        label="Email"
                        v-model="email" />
                    <!-- <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        v-model="email" /> -->
                    <div v-if="errors.email.length" class="error" v-html="errors.email" />


                    <v-text-field
                        type="password"
                        name="password"
                        label="Password"
                        v-model="password" />

                    <div v-if="errors.password.length" class="error" v-html="errors.password" />


                    <v-text-field
                        type="password"
                        name="password_confirmation"
                        label="Confirm password"
                        v-model="password_confirmation" />


                    <v-btn
                        dark
                        class="light-blue"
                        @click="register">
                        Register
                    </v-btn>
                </div>

            </div>
        </v-flex>
    </v-layout>
</template>

<script>
    import AuthenticationService from '../services/AuthenticationService'
    export default {

        data () {
            return {
                email: '',
                password: '',
                password_confirmation: '',
                errors: {
                    email: '',
                    password: ''
                }
            };
        },

        methods: {
            async register () {
                try {
                    let { email, password, password_confirmation } = this;
                    const response = await AuthenticationService.register({email, password, password_confirmation});
                } catch (error) {
                    this.registerErrors(error.response.data.errors);
                }
            },

            registerErrors (errors) {
                for (let key in errors) {
                    this.errors[key] = errors[key].join('; ');
                }
            }
        }
    }
</script>

<style scoped>

</style>

