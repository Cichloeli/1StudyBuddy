<template>
    <div id="profile">
        <div class="banner">
            <img :src="header" />
        </div>
        <div class="title">
            <h1>Profile</h1>
        </div>

        <router-link class="editLink" to="/editProfile">Edit Profile</router-link>

        <div class="info">
            <h6>Name: {{ name }}</h6>
            <!-- <div class="infoName">
                {{ name }}
            </div> -->

            <h6>Classes: {{ classes }}</h6>
            <!-- <div class="infoClasses">
                {{ classes }}
            </div> -->
                
            <h6>Major: {{ major }}</h6>   
            <!-- <div class="infoMajor">
                {{ major }}
            </div>            -->
                      
            <h6>Email: {{ email }}</h6>
            <!-- <div class="infoEmail">
                {{ email }}
            </div> -->
                     
            <h6>About: {{ about }}</h6>
            <!-- <div class="infoAbout">
                {{ about }}
            </div>                -->

              <button v-on:click="logout()">Logout</button>      
        
        </div>
        
        
    </div>
    
</template>

<script>

import db from './firebaseinit';
import firebase from 'firebase';

var curUser = firebase.auth().currentUser;


export default {

  name: "profile",
  
  data() {
    return {
      name: null,
      classes: null,
      major: null,
      about: null,
      email: null,

      header: require("../assets/images/p2.jpg"),
    };
  },
    beforeRouteEnter (to, from, next) {
        curUser = firebase.auth().currentUser,
        firebase.firestore().collection('users').where('uid', '==', curUser.uid).get()
        .then(querySnapshot => {
            querySnapshot.forEach(doc => {
                next(vm => {
                  vm.id = doc.id
                  vm.uid = doc.data().uid
                  vm.name = doc.data().name
                  vm.email = doc.data().email
                  vm.major = doc.data().major
                  vm.classes = doc.data().classes
                  vm.about = doc.data().about
                })
            })
        })
    }, 
    created () {
        curUser = firebase.auth().currentUser
        
    },
  methods: {
    logout() {
        firebase.auth().signOut().then(() => {
            this.$router.replace('login')
        })
    },
    fetchData () {
        firebase.firestore().collection('users').where
        ('uid', '==', this.$route.curUser.uid).get()
        .then(querySnapshot => {
            querySnapshot.forEach(doc => {
                this.id = doc.id
                this.uid = doc.data().uid
                this.name = doc.data().name
                this.email = doc.data().email
                this.major = doc.data().major
                this.classes = doc.data().classes
                this.about = doc.data().about
            })
        })
    }
  },
  watch: {
      '$route': 'fetchData'
  } 
};


</script>

<style scoped>
#profile {

  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  
  background-color: #ffffff;
  border: 1px solid #cccccc;
  padding: 30px;
  margin-top: 10px;
  
}
.title {
  text-align: left;
}

.info {
  text-align: left;
  padding-right: 300px;
}
.editLink {
    max-width: 50px;
    padding-left: 90%;
  
   

}
.infoAbout input {
    padding-bottom: 200px;
    padding-right: 200px;
}
.updateButton{
    max-width: 150px;
    
}
</style>