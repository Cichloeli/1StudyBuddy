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
            <h6>Name:</h6>
            <div class="infoName">
                {{ name }}
            </div>

            <h6>Classes:</h6>
            <div class="infoClasses">
                {{ classes }}
            </div>
                
            <h6>Major:</h6>   
            <div class="infoMajor">
                {{ major }}
            </div>           
                      
            <h6>Email:</h6>
            <div class="infoEmail">
                {{ email }}
            </div>
                     
            <h6>About:</h6>
            <div class="infoAbout">
                {{ about }}
            </div>               

              <button v-on:click="logout()">Logout</button>      
        
        </div>
        
        
    </div>
    
</template>

<script>

import db from './firebaseinit';
import firebase from 'firebase'

var usersDB = db.collection('users').doc("3aL2IlN8NbPjQVZhZJe3");

export default {

  name: "profile",
  
  data() {
    return {
      
      users: [],

      name: null,
      classes: null,
      major: null,
      about: null,
      email: null,

      header: require("../assets/images/p2.jpg"),
    };
  },
  methods: {
    logout() {
        firebase.auth().signOut().then(() => {
            this.$router.replace('login')
        })
    }
  },

    created () {
        
        db.collection('users').where('id','==', "3aL2IlN8NbPjQVZhZJe3").get().then(querySnapshot => {
            querySnapshot.forEach(doc => {
                
                    id = doc.id,
                    userID = doc.data().user_id
                    this.name = doc.data().name
                    this.major = doc.data().major
                    this.email = doc.data().email
                    this.classes = doc.data().classes
                    this.about = doc.data().about
                
            })
        })

        
        

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