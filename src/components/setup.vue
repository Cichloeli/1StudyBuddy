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

        <h2 class="or_word">
          OR
        </h2>

        <h2 class="card-title text-center">Use Your Account Name</h2>

        <button class="btn btn-primary" v-on:click="setup()" >Enter Chat</button>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'setup',
  data () {
    return {
      name: "",
      errorText: null
    }
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