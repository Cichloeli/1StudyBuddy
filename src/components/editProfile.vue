<template>
    <div id="editProfile">
        <div class="banner">
            <img :src="header" />
        </div>
        <div class="title">
            <h1>Edit Your Profile</h1>
        </div>
 
        <div class="info">
            <h6>Name:</h6>
            <input type="checkbox" id="checkName" v-model="checkedName" >
            <div class="infoName">
                <input type="text" name="nameIn" v-model="input.nameIn" placeholder="Name" class="form-control" style="border-radius:10px;"/>   
            </div>

            <h6>Classes:</h6>
            <input type="checkbox" id="checkClasses" v-model="checkedClasses">
            <div class="infoClasses">
                <input type="text" name="classesIn" v-model="input.classesIn" placeholder="Classes" class="form-control" style="border-radius:10px;"/>
            </div>
                
            <h6>Major:</h6>   
             <input type="checkbox" id="checkMajor" v-model="checkedMajor">
            <div class="infoMajor">
                <input type="text" name="majorIn" v-model="input.majorIn" placeholder="Major" class="form-control" style="border-radius:10px;"/> 
            </div>           
                      
            <h6>Email:</h6>
            <input type="checkbox" id="checkEmail" v-model="checkedEmail">
            <div class="infoEmail">
                <input type="text" name="emailIn" v-model="input.emailIn" placeholder="Email" class="form-control" style="border-radius:10px;"/>
            </div>
                     
            <h6>About:</h6>
            <input type="checkbox" id="checkAbout" v-model="checkedAbout">
            <div class="infoAbout">
                <input type="text" name="aboutIn" v-model="input.aboutIn" placeholder="About" class="form-control" style="border-radius:10px;" />
            </div>               
                    
        </div>

        <div class="updateButton">
            <button class="btn btn-lg btn-primary btn-block" type="button" v-on:click="update()">Update Profile</button>
        </div>

        <div class="title">
            <h1>Schedule</h1>
        </div>

        <div class="schedule">

            
            <div class="sunday">
                <h6>Sunday:</h6>
                <input type="text" name="sundayIn" v-model="input.sundayIn" placeholder="time" class="form-control" style="border-radius:10px;" />
            </div> 
            <div class="monday">
                <h6>Monday:</h6>
                <input type="text" name="mondayIn" v-model="input.mondayIn" placeholder="time" class="form-control" style="border-radius:10px;" />
            </div> 
            
            <div class="tuesday">
                <h6>Tuesday:</h6>
                <input type="text" name="tuesdayIn" v-model="input.tuesdayIn" placeholder="time" class="form-control" style="border-radius:10px;" />
            </div> 
            <div class="wednesday">
                <h6>Wednesday:</h6>
                <input type="text" name="wednesdayIn" v-model="input.wednesdayIn" placeholder="time" class="form-control" style="border-radius:10px;" />
            </div> 
            <div class="thursday">
                 <h6>Thursday:</h6>
                <input type="text" name="thursdayIn" v-model="input.thursdayIn" placeholder="time" class="form-control" style="border-radius:10px;" />
            </div> 
            <div class="friday">
                <h6>Friday:</h6>
                <input type="text" name="fridayIn" v-model="input.fridayIn" placeholder="time" class="form-control" style="border-radius:10px;" />
            </div> 
            <div class="saturday">
                <h6>Saturday:</h6>
                <input type="text" name="saturdayIn" v-model="input.saturdayIn" placeholder="time" class="form-control" style="border-radius:10px;" />
            </div>    

        </div>
        
        <div class="updateScheduleButton">
            <button class="btn btn-lg btn-primary btn-block" type="button" v-on:click="updateSchedule()">Update Schedule</button>
        </div>

        <div class="updateAllButton">
            <button class="btn btn-lg btn-primary btn-block" type="button" v-on:click="updateAll()">Update All</button>
        </div>
        <!-- <div class="updateButton">
            <button class="btn btn-lg btn-primary btn-block" type="button" v-on:click="info()">Info</button>
        </div> -->
        
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

        sundayIn: null,
        mondayIn: null,
        tuesdayIn: null,
        wednesdayIn: null,
        thursdayIn: null,
        fridayIn: null,
        saturdayIn: null,

        
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

      sunday: null,
      monday: null,
      tuesday: null,
      wednesday: null,
      thursday: null,
      friday: null,
      saturday: null,
      header: require("../assets/images/p2.jpg"),
    };
  },
    

    methods: {
        test() {
            console.log("test")
        },
        updateAll() {
            this.updateSchedule(),
            this.update(),
            
            this.$router.replace('profile')
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
        updateSchedule() {
            console.log("update schedule");

            if (this.input.sundayIn!=null ) {
                firebase.firestore().collection('users').doc(currentUser.uid).update({
                sunday: this.input.sundayIn,
                })
            }

            if (this.input.mondayIn!=null) {
                firebase.firestore().collection('users').doc(currentUser.uid).update({
                monday: this.input.mondayIn,
               
                })
            }

            if (this.input.tuesdayIn!=null) {
                firebase.firestore().collection('users').doc(currentUser.uid).update({
                tuesday: this.input.tuesdayIn,
                })
            }

            if (this.input.wednesdayIn!=null) {
                firebase.firestore().collection('users').doc(currentUser.uid).update({
                wednesday: this.input.wednesdayIn,
                })
            }

            if (this.input.thursdayIn!=null) {
                firebase.firestore().collection('users').doc(currentUser.uid).update({
                thursday: this.input.thursdayIn,
                })
            }

            if (this.input.fridayIn!=null) {
                firebase.firestore().collection('users').doc(currentUser.uid).update({
                friday: this.input.fridayIn,
                })
            }

            if (this.input.saturdayIn!=null) {
                firebase.firestore().collection('users').doc(currentUser.uid).update({
                saturday: this.input.saturdayIn,
                })
            }
            
            
            this.$router.replace('profile')
        
        },
        info(){
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
  padding: 20px;
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
    margin-left: 85%;
    
}
.schedule {
    padding: 10px;
    max-width: 1000px;

}

.schedule h6 {
    font-weight: bold;
    padding: 10px;
}

.schedule input {
    padding: 10px;
}

.updateScheduleButton{
    max-width: 200px;
    margin-left: 80%;
}

.updateAllButton {
    max-width: 200px;
    padding: 20px;
    margin-left: 40%;
}

.sunday {
    display: inline-block;
    padding-inline-end: 20px;

}

.monday {
    display: inline-block;
    padding-inline-end: 20px;
}

.tuesday{
    display: inline-block;
    padding-inline-end: 20px;
}
.wednesday{
    display: inline-block;
    padding-inline-end: 20px;
}

.thursday {
    display: inline-block;
    padding-inline-end: 20px;
}
.friday {
    display: inline-block;
    padding-inline-end: 20px;
}
.saturday {
    display:inline-block;
    padding-inline-end: 20px;
}


</style>