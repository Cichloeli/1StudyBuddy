<template>
  <div class="container">
    <div class="card login">
      <div class="card-body">
        <h2 class="card-title text-center">Pick Your Display Name</h2>
        <form @submit.prevent="login" class="text-center">
          <div class="form-group">
            <input type="text" class="form-control" placeholder="Please enter your name ..." name="name" v-model="name">
            <p v-if="errorText" class="text-danger">{{ errorText }}</p>
          </div>
          <button class="btn btn-primary">Enter Chat</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase';

var curUser = firebase.auth().currentUser;

export default {
  name: 'setup',
  data () {
    return {
      name: "",
      errorText: null,
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
    login() {
      if (this.name) {
        this.$router.push({name: 'chat', params: {name: this.name}})
      } else {
        this.errorText = "Please enter a name!"
      }
    },

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

<style>
.login{
  max-width: 450px;
  margin-top: 50px;
  display: block;
  margin-left: auto;
  margin-right: auto;
}

.or_word {
  padding: 10%;
}
</style>