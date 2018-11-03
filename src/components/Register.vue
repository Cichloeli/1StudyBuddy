<template>
 <div class ="register">
     <p>Let's create a new account!</p>
     /<input type="text" v-model="email" placeholder="Email"><br>
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

<style scoped>
    .register {
        margin-top: 70px;
    }
    input {
        margin: 10px 0;
        width: 20%;
        padding: 15px;
    }
    button {
        margin-top: 10px;
        width: 10%;
        cursor: pointer;
    }
    span {
        display: block;
        margin-top: 20px;
        font-size: 15px;
    }
    p {
        margin-top: 20px;
        font-size: 30px;
    }
</style>
