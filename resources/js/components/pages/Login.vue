<template>
    <v-layout>
        <v-flex xs6 offset-xs3>
            <panel title="Login">
                <v-text-field
                    type="email"
                    name="email"
                    label="Email"
                    v-model="email" />

                <div v-if="errors.email.length" class="error" v-html="errors.email" />

                <v-text-field
                    type="password"
                    name="password"
                    label="Password"
                    v-model="password" />

                <div v-if="errors.password.length" class="error" v-html="errors.password" />

                <v-btn
                    dark
                    class="light-blue"
                    @click="login">
                    Login
                </v-btn>
            </panel>
        </v-flex>
    </v-layout>
</template>

<script>
    import Panel from '../partials/Panel';
    import AuthenticationService from '../../services/AuthenticationService';

    export default {
        components: {
            Panel
        },

        data () {
            return {
                email: '',
                password: '',
                errors: {
                    email: '',
                    password: ''
                }
            };
        },

        methods: {
            login () {
                let { email, password } = this;
                this.$store.dispatch('login', {email, password})
                    .then(() => {
                        this.$router.push({name: 'home'})
                    })
                    .catch(error => {
                        this.registerErrors(error.response.data.errors);
                    });
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

