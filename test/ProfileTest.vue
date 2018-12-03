<template>
  <div>
    <button @click="changeToOne()">Change Profile One</button>
    <button @click="changeToTwo()">Change Profile Two</button>
    <p>----------------------------------------------------------------------</p>
    <h1>Edit Profile Unit Test</h1>
    <button @click="updateAll()">Update Profile</button>
    
    <h6>Name: {{ nameIn }}</h6>
    <h6>Classes: {{ classesIn }}</h6>            
    <h6>Major: {{ majorIn }}</h6>   
    <h6>Email: {{ emailIn }}</h6>
    <h6>About: {{ aboutIn }}</h6>   

    <p>----------------------------------------------------------------------</p>
    <h1>Display Profile Data</h1>
    <button @click="displayData()">Display Profile Data</button>

    <h6>Name: {{ nameOut }}</h6>
    <h6>Classes: {{ classesOut }}</h6>            
    <h6>Major: {{ majorOut }}</h6>   
    <h6>Email: {{ emailOut }}</h6>
    <h6>About: {{ aboutOut }}</h6>   

    <p>----------------------------------------------------------------------</p>
    <button @click="result()">Result</button>
    <p>Result: {{pass_or_not}}</p>

    <button @click="reset()">Reset</button>


  </div>
  
</template>

<script>
import firebase from 'firebase';
var uid = 'DyTMf8jnFmeVHTjk2rQCnriBhlc2';

export default {
  name: 'ProfileTest',
  data () {
    return {
      uid: uid, 
      pass_or_not: '',
      
      nameIn: null,
      classesIn: null,
      majorIn: null,
      aboutIn: null,
      emailIn: null,

      nameOut: '',
      classesOut: '',
      majorOut: '',
      aboutOut: '',
      emailOut: '',
    }
  },
  methods: {
      result(){
        if(this.nameIn == this.nameOut) {
            this.pass_or_not = 'PASS, Update Data & Retrieve Data'
        }
        else if (this.nameIn == null)
            this.pass_or_not = 'FAIL, Update Data'
        else if (this.nameOut == '')
            this.pass_or_not = 'FAIL, Retrieve Data'
        else
            this.pass_or_not = 'FAIL, Update Data or Retrieve Data'

        
      },
      displayData() {
        firebase.firestore().collection('users').where
        ('uid', '==', this.uid).get()
        .then(querySnapshot => {
            querySnapshot.forEach(doc => {
                
                this.nameOut = doc.data().name
                this.emailOut = doc.data().email
                this.majorOut = doc.data().major
                this.classesOut = doc.data().classes
                this.aboutOut = doc.data().about

            })
        })

      },
      updateAll() {
            this.update(),
            
            this.$router.replace('ProfileTest')
        },
        update() {
            console.log("update");

            if (this.nameIn!=null ) {
                firebase.firestore().collection('users').doc(uid).update({
                name: this.nameIn,
                })
            }

            if (this.classesIn!=null) {
                firebase.firestore().collection('users').doc(uid).update({
                classes: this.classesIn,
                })
            }

            if (this.emailIn!=null) {
                firebase.firestore().collection('users').doc(uid).update({
                email: this.emailIn,
                })
            }

            if (this.majorIn!=null) {
                firebase.firestore().collection('users').doc(uid).update({
                major: this.majorIn,
                })
            }

            if (this.aboutIn!=null) {
                firebase.firestore().collection('users').doc(uid).update({
                about: this.aboutIn,
                })
            }
        
        },
       
        changeToOne(){
            this.nameIn = 'name1';
            this.classesIn = 'class1';
            this.majorIn = 'major1';
            this.aboutIn= 'about1';
            this.emailIn= 'email1';

        },
        changeToTwo(){
            this.nameIn = 'name2';
            this.classesIn = 'class2';
            this.majorIn = 'major2';
            this.aboutIn= 'about2';
            this.emailIn= 'email2';

        },
        reset(){
            this.nameIn = 'ProfileTest Profile Test';
            this.classesIn = ' ';
            this.majorIn = ' ';
            this.aboutIn= ' ';
            this.emailIn= 'profiletest@gmail.com';

        }
      
        
    
  }
}
</script>
