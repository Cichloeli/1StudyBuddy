<template>
  <div>
    <button @click="changeToReal()">Change To Test Account</button>
    <button @click="changeToFake()">Change To Fake Account</button>
    <p>----------------------------------------------------------------------</p>
    <h1>Register Unit Test</h1>
    <button @click="register()">Register Test Account</button>
    <p>email: {{email}}</p>
    <p>password: {{password}}</p>
    <p>first name: {{firstName}}</p>
    <p>last name: {{lastName}}</p>
    <p>Result: {{pass_or_notR}}</p>
    <p>----------------------------------------------------------------------</p>

    <h1>Login Unit Test</h1>
    <button @click="login()">Login Test Account</button>
    <p>email: {{email}}</p>
    <p>password: {{password}}</p>
    <p>Result: {{pass_or_notL}}</p>

    <p>----------------------------------------------------------------------</p>
    
  </div>
  
</template>

<script>
import firebase from 'firebase'
export default {
  name: 'AccountTest',
  data () {
    return {
      email: 'blank',
      password: 'blank',
      firstName: 'rTfirst',
      lastName: 'rTlast',
      pass_or_notR: '',

      pass_or_notL: '',
     


    }
  },
  methods: {
      register() {
                firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then(
                    (user) => {
                        user = firebase.auth().currentUser;
                        firebase.firestore().collection('users').doc(user.uid).set({
                            name: this.firstName + " " + this.lastName,
                            email: this.email,
                            uid: user.uid,

                            classes: '',
                            major: '',
                            about: '',

                            sunday: '',
                            monday: '',
                            tuesday: '',
                            wednesday: '',
                            thursday: '',
                            friday: '',
                            saturday: '',

                            group: [],

                            checkedName: true,
                            checkedClasses: true,
                            checkedMajor: true,
                            checkedEmail: true,
                            checkedAbout: true,
                        }),
                        this.pass_or_notR = 'PASS, account is registered';
                    },
                    (err) => {
                        this.pass_or_notR = 'FAIL, account is not registered'
                    }
                )
            },
        login() {
                firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(
                    (user) => {
                        this.pass_or_notL= 'PASS, logged in';
                    },
                    (err) => {
                        this.pass_or_notL= 'FAIL, not logged in';
                    }
                )
            },

        changeToReal() {
            this.email = 'registertest@gmail.com';
            this.password = 'registertest';
            
        },

        changeToFake() {
            this.email = 'fake@gmail.com';
            this.password = 'registertest1';
            
            
        },
        
    
  }
}
</script>
