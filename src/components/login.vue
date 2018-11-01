<template>
    <body class = "base" >
        <div class= "login">
            <h1>1StudyBuddy</h1>
            <input type="text" name="username" v-model="input.username" placeholder="Username" />
            <input type="password" name="password" v-model="input.password" placeholder="Password" />
            <button type="button" v-on:click="login()">Login</button>
        </div>







    </body>
</template>

<script>
    export default {
        name: 'Login',
        data() {
            return {
                input: {
                    username: "",
                    password: ""
                }
            }
        },
        methods: {
            login() {
                if(this.input.username != "" && this.input.password != "") {
                    if(this.input.username == "test" && this.input.password == "test") {
                        alert("correct");   
                        this.$router.push({name: 'profile'});
                        
                    } else {
                        alert("The username and / or password is incorrect");
                    }
                } else {
                    alert("A username and password must be present");
                }
            }
        }
    }
</script>

<style scoped>
    .wrapper {
        
        background-color: #0012E6;
        height: 100%;
        width: 100%;

    }
    .login {
        width: 500px;
        border: 1px solid #CCCCCC;
        background-color: #008AE6;
        margin: auto;
        margin-top: 200px;
        padding: 20px;
    }

    
</style>
