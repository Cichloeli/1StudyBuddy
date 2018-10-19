<template>
    <div class="login">
        <h1>1StudyBuddy</h1>
        <input type="text" name="username" v-model="input.username" placeholder="Username" />
        <input type="password" name="password" v-model="input.password" placeholder="Password" />
        <button type="button" v-on:click="login()">Login</button>
    </div>
</template>

<script>
    export default {
        name: "login",
        data() {
            return {
                input: {
                    username: "",
                    password: ""
                }
            }
        }
    }
</script>

<style scoped>
    
    .login {
        width: 500px;
        border: 1px solid #CCCCCC;
        background-color: #66CCFF;
        margin: auto;
        margin-top: 200px;
        padding: 20px;
    }
</style>