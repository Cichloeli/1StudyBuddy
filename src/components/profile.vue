<template>
    <div id="profile">
        <h1>Profile</h1>
        <p>
            {{ name }}
            {{ year }}
        </p>
        <router-link class="nav-link" to="/classes">Classes</router-link>
        <button v-on:click="logout">Logout</button>
    </div>
    
</template>

<script>
    import firebase from 'firebase'
    export default {
        name: 'profile',
        data() {
            return {
            name: 'John Robert',
            year: 'first',
            };
        },
        methods: {
            logout() {
                firebase.auth().signOut().then(() => {
                    this.$router.replace('login')
                })
            }
        }
    }
</script>

<style scoped>
    #profile {
        background-color: #FFFFFF;
        border: 1px solid #CCCCCC;
        padding: 20px;
        margin-top: 10px;
    }
</style>