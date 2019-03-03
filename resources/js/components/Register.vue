<template>
    <div>
        <h1>Register</h1>

        <input
            type="email"
            name="email"
            placeholder="Email"
            v-model="email" />
        <br>
        <input
            type="password"
            name="password"
            placeholder="Password"
            v-model="password" />
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
                password_confirmation: ''
            };
        },

        methods: {
            async register (e) {
                let { email, password, password_confirmation } = this;
                const response = await AuthenticationService.register({email, password, password_confirmation});

                console.log(response.data)
            }
        }
    }
</script>
