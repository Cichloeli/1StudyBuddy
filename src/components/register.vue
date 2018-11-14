<template>
    <div class= "login-container">
        <label for="1studdybuddy">1StudyBuddy</label>
        <div class="form-content">
            <label for="firstname">First Name</label>
            <input type="text"  class="form-control"  style="border-radius:10px;"/>
        </div>
        <div class="form-content">
            <label for="lastname">Last Name</label>
            <input type="text"  class="form-control"  style="border-radius:10px;"/>
        </div>
        <div class="form-content">
            <label for="email">Email</label>
            <input type="text"  v-model="email" class="form-control"  style="border-radius:10px;"/>
        </div>
        <div class="form-content">
            <label for="password">Password</label>
            <input type="password" v-model="password" class="form-control"  style="border-radius:10px;"/>
        </div>
        <div class="form-content">
            <button class="btn-login" type="button" v-on:click="register">Register</button>
            <router-link to="/login" class="btn btn-link" style="color: #e68a00">Cancel</router-link>
        </div>
    </div>
</template>

<script>
    import firebase from 'firebase'
    export default {
        name: 'Register',
        data() {
            return {
                email: '',
                password: ''
            }
        },
        methods: {
            register() {
                firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then(
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