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
            <input type="text"  class="form-control"  style="border-radius:10px;"/>
        </div>
        <div class="form-content">
            <label for="password">Password</label>
            <input type="password"  class="form-control"  style="border-radius:10px;"/>
        </div>
        <div class="form-content">
            <button class="btn-login" type="button" v-on:click="login()">Register</button>
            <router-link to="/login" class="btn btn-link" style="color: #0066cc">Cancel</router-link>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Register',
        data() {
            return {
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
        background-color: #0066cc;
        color: white;
        border-radius: 4px;
    }
    .btn-login:hover {
        background-color: #0059b3;
        transition-duration: .4s;
    }
   
    
</style>