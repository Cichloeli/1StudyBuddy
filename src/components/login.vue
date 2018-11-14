<template>
    <div class= "login-container">
        <label for="1studdybuddy">1StudyBuddy</label>
        <div class="form-content">
            <label for="username">Email</label>
            <input type="text" v-model="email" name="username" class="form-control"  style="border-radius:10px;"/>
        </div>
        <div class="form-content">
            <label for="password">Password</label>
            <input type="password" v-model="password" name="password" class="form-control"  style="border-radius:10px;"/>
        </div>
        <div class="form-content">
            <button class="btn-login" type="button" v-on:click="login">Login</button>
            <router-link to="/register" class="btn btn-link" style="color: #e68a00">Register</router-link>
        </div>

        <!-- <h1>1StudyBuddy</h1>
        <input id="username" type="text" name="username" v-model="input.username" placeholder="Email" />
        <input id="password" type="password" name="password" v-model="input.password" placeholder="Password" />
        <button id="login-button" type="button" v-on:click="login()">Login</button> -->

    </div>
</template>

<script>
    import firebase from 'firebase'
    export default {
        name: 'Login',
        data() {
            return {
                email: '',
                password: ''
            }
        },
        methods: {
            login() {
                firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(
                    (user) => {
                        this.$router.replace('home')
                    },
                    (err) => {
                        alert('Oops. Something went Wrong. ' + err.message)
                    }
                )
            }
        }
    }
</script>

<style scoped>
    .login-container {
        display: grid;
        justify-content: center;
        align-content: center;
        font-size: 18px;
        margin-top: 100px;
    }
    .form-content {
        margin: 10px;
    }
    .btn-login {
        background-color: #e68a00;
        color: white;
        border-radius: 4px;
        cursor: pointer;
    }
    .btn-login:hover {
        background-color: #0059b3;
        transition-duration: .4s;
    }
   
    
</style>
