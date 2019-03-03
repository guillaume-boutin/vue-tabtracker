<template>
    <div>
        <h1>Register</h1>

        <input
            type="email"
            name="email"
            placeholder="Email"
            v-model="email" />
        <div v-if="errors.email.length" class="error" v-html="errors.email" />
        <br>
        <input
            type="password"
            name="password"
            placeholder="Password"
            v-model="password" />
        <div v-if="errors.password.length" class="error" v-html="errors.password" />
        <br>
        <input
            type="password"
            name="password_confirmation"
            placeholder="Confirm password"
            v-model="password_confirmation" />
        <br>
        <button
            @click="register">
            Register
        </button>

    </div>
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
    .error {
        color: red;
    }
</style>

