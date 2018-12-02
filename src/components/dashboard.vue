<template>
    <div id="dashboard">
        <h1>Dashboard</h1>
        
        <router-link class="nav-link" to="/profile">Profile</router-link>
        <router-link class="nav-link" to="/classes">Classes</router-link>
        <router-link class="nav-link" to="/viewUser">View Users</router-link>
        <router-link class="nav-link" to="/createGroup">Create Group</router-link>
        <router-link class="nav-link" to="/setup">Chat</router-link>

            {{name}}
        <button class="btn btn-primary" v-on:click="setup()" >Enter Chat</button>
    </div>
</template>

<script>
import firebase from 'firebase';

var curUser = firebase.auth().currentUser;

    export default {
        name: 'Dashboard',
        data() {
            return {
                name:null
            }
        },

        beforeRouteEnter (to, from, next) {
        curUser = firebase.auth().currentUser,
        firebase.firestore().collection('users').where('uid', '==', curUser.uid).get()
        .then(querySnapshot => {
            querySnapshot.forEach(doc => {
                next(vm => {
                  vm.name = doc.data().name
                 
                })
            })
        })
        }, 

        created () {
        curUser = firebase.auth().currentUser
        },

        methods: {
        setup() {
            if (this.name) {
                this.$router.push({name: 'chat', params: {name: this.name}})
            } 
        },

        fetchData () {
        firebase.firestore().collection('users').where
        ('uid', '==', this.$route.curUser.uid).get()
        .then(querySnapshot => {
            querySnapshot.forEach(doc => {
               
                this.name = doc.data().name
                
            })
        })
        }
        },
        
        watch: {
        '$route': 'fetchData'
        } 
    }
</script>

<style scoped>
    #classes {
        background-color: #FFFFFF;
        border: 1px solid #CCCCCC;
        padding: 20px;
        margin-top: 10px;
    }
</style>