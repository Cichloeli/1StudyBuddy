<template>
 <div class ="register">
     <p>Let's create a new account!</p>
     <input type="text" v-model="email" placeholder="Email"><br>
     <input type="password" v-model="password" placeholder="Password"><br>
     <button v-on:click="register">Register</button>
     <span>or go back to <router-link to="/login">login</router-link>.</span>
 </div>    
</template>

<script>
    import firebase from 'firebase'

    export default {
        name: 'register',
        data: function() {
            return {
                email: '',
                password: ''
            }
        },
        methods: {
            register: function() {
                firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then(
                    function (user) {
                        alert('Your account has been created!')
                    },
                    function (err) {
                        alert('Oops. ' * err.message)
                    }
                );
            }
        }
    }
</script>