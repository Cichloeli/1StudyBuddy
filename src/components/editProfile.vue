<template>
    <div id="editProfile">
        <div class="banner">
            <img :src="header" />
        </div>
        <div class="title">
            <h1>Edit Your Profile</h1>
        </div>
        <ul class="col">
            <li class="collection-header"><h4>Users</h4></li>
            <li v-for="user in users" v-bind:key="user.user_id" 
            class="collection-item">
            {{user.name}}:{{user.classes}}:{{user.major}}:{{user.email}}:{{user.about}}:{{user.id}}

            
         
        </li>
        </ul>
        
        <div class="info">
            <h6>Name:</h6>
            <input type="checkbox" id="checkName" v-model="checkedName" >
            <div class="infoName">
                {{ name }}
                <input type="text" name="nameIn" v-model="input.nameIn" placeholder="Name" class="form-control" style="border-radius:10px;"/>
                
                
            </div>

            

            <h6>Classes:</h6>
            <input type="checkbox" id="checkClasses" v-model="checkedClasses">
            <div class="infoClasses">
                {{ classes }}
                <input type="text" name="classesIn" v-model="input.classesIn" placeholder="Classes" class="form-control" style="border-radius:10px;"/>
                
            </div>
                
            <h6>Major:</h6>   
             <input type="checkbox" id="checkMajor" v-model="checkedMajor">
            <div class="infoMajor">
                {{ major }}
                <input type="text" name="majorIn" v-model="input.majorIn" placeholder="Major" class="form-control" style="border-radius:10px;"/>
               
            </div>           
                      
            <h6>Email:</h6>
            <input type="checkbox" id="checkEmail" v-model="checkedEmail">
            <div class="infoEmail">
                {{ email }}
                <input type="text" name="emailIn" v-model="input.emailIn" placeholder="Email" class="form-control" style="border-radius:10px;"/>
                
            </div>
                     
            <h6>About:</h6>
            <input type="checkbox" id="checkAbout" v-model="checkedAbout">
            <div class="infoAbout">
                {{ about }}
                <input type="text" name="aboutIn" v-model="input.aboutIn" placeholder="About" class="form-control" style="border-radius:10px;" />
                
            </div>               
                    
    
        
        </div>
        
        <div class="updateButton">
            <button class="btn btn-lg btn-primary btn-block" type="button" v-on:click="update()">Update</button>
        </div>
        <div class="updateButton">
            <button class="btn btn-lg btn-primary btn-block" type="button" v-on:click="info()">Info</button>
        </div>
        
    </div>
    
</template>

<script>
import db from './firebaseinit';
import firebase from 'firebase';

var currentUser = firebase.auth().currentUser;

export default {

  name: "editProfile",
  
  data() {
    return {
      input: {
        nameIn: null,
        classesIn: null,
        majorIn: null,
        aboutIn: null,
        emailIn: null,

        
      },
      checkedName: true,
      checkedMajor: true,
      checkedClasses: true,
      checkedEmail: true,
      checkedAbout: true,

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
        test() {
            console.log("test")
        },
        update() {
            console.log("update");

            if (this.input.nameIn!=null ) {
                firebase.firestore().collection('users').doc(currentUser.uid).update({
                name: this.input.nameIn,
                checkedName: this.checkedName,
                })
            }

            if (this.input.classesIn!=null) {
                firebase.firestore().collection('users').doc(currentUser.uid).update({
                classes: this.input.classesIn,
                checkedClasses: this.checkedClasses,
                })
            }

            if (this.input.emailIn!=null) {
                firebase.firestore().collection('users').doc(currentUser.uid).update({
                email: this.input.emailIn,
                checkedEmail: this.checkedEmail,
                })
            }

            if (this.input.majorIn!=null) {
                firebase.firestore().collection('users').doc(currentUser.uid).update({
                major: this.input.majorIn,
                checkedMajor: this.checkedMajor,
                })
            }

            if (this.input.aboutIn!=null) {
                firebase.firestore().collection('users').doc(currentUser.uid).update({
                about: this.input.aboutIn,
                checkedAbout: this.checkedAbout,
                })
            }
            
            
            this.$router.replace('profile')
        
        },
        info(){
                test();
                console.log("info");
                firebase.firestore().collection("users").doc(currentUser.uid)
                .get().then(function(doc) {
                    if (doc.exists) {
                        console.log("Document data:", doc.data());
                        //this.name = doc.data().name;
                        //console.log("name:", doc.data().name);
                        //this.name.push(doc.data().name);

                    } else {
                    // doc.data() will be undefined in this case
                    console.log("No such document!");
                    }
                }).catch(function(error) {
                    console.log("Error getting document:", error);
                });  
                
            }
    },

    

    created () {
        currentUser = firebase.auth().currentUser,
        db.collection('users').get().then(querySnapshot => {
            querySnapshot.forEach(doc => {
                const data = {
                    'id': doc.id,
                    'user_id': doc.data().user_id,
                    'name': doc.data().name,
                    'major': doc.data().major,
                    'email': doc.data().email,
                    'classes': doc.data().classes,
                    'about': doc.data().about,
                }
                this.users.push(data)
            })
        })
    }

  
};


</script>

<style scoped>
#editProfile {

  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  
  background-color: #ffffff;
  border: 1px solid #cccccc;
  padding: 20px;
  margin-top: 10px;
  
}
.title {
  text-align: left;
}

.info {
  text-align: left;
  padding-right: 300px;
  margin: 10px;
}

.info h6 {
    margin: 10px;
    font-weight: bold;
    
}

.info input{
    margin-left: 1000px;
   
}
.infoName input {
    margin-left: 0%
}
.infoClasses input {
    padding-right: 200px;
    margin-left: 0%
}
.infoMajor input {
    margin-left: 0%
}
.infoEmail input {
    margin-left: 0%
}

.infoAbout input {
    padding-top: 20px;
    padding-bottom: 200px;
    padding-right: 200px;
    margin-left: 0%
}
.updateButton{
    max-width: 150px;
    
}


</style>