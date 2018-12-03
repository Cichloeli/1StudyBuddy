<template>
  <div id="app">
      <!-- navbar -->
      <div class="navbar navbar-expand-lg fixed-top navbar-dark bg-primary">
        <div class="container">
        <router-link to="/" class="navbar-brand">Home</router-link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarResponsive">
          <ul class="navbar-nav">
      
           <!--  

            <li class="nav-item">
              <router-link class="nav-link" to="/dashboard">Dashboard</router-link>
            </li> -->
            <li class="nav-item">
              <router-link class="nav-link" to="/profile">Profile</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/classes">Classes</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/ViewUser">View Users</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/createGroup">Groups</router-link>
            </li>

            <li class="nav-item">
              <router-link class="nav-link" to="/groups">My Groups</router-link>
            </li>
            
            <li class="nav-item">
              <router-link class="nav-link" to="/setup">Global Chat</router-link>
            </li>

            <li class="nav-item">
              <router-link id="login" to="/login">Login</router-link>
            </li>

            <li class="nav-item">
              <button id="logout" v-on:click="logout()">Logout</button>   
            </li>
          </ul>
        </div>
        </div>
      </div>
      <div class="container">
       <transition name="moveInUp">
         <router-view/>
       </transition>
        
      </div>
    
  </div>
</template>

<script>
import firebase from "firebase";
export default {

  name: 'App',

  methods: {
    logout() {
        firebase.auth().signOut().then(() => {
            this.$router.replace('login')
        })
    }

  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.moveInUp-enter-active{
  animation: fadeIn 2s ease-in;
}
@keyframes fadeIn{
  0%{
    opacity: 0;
  }
  50%{
    opacity: 0.5;
  }
  100%{
    opacity: 1;
  }
}

.moveInUp-leave-active{
  animation: moveInUp .3s ease-in;
}
@keyframes moveInUp{
 0%{
  transform: translateY(0);
 }
  100%{
  transform: translateY(-400px);
 }
}

#logout {
  background-color: Transparent;
  border: none;
  overflow: hidden;
  outline:none;
  cursor:pointer;
  margin-top: 7px;
  display: grid;
  justify-items: right;
  color: #2c3e50;
  margin-left: 4px;
}

#logout:hover {
  color: black;
}

#login {
  background-color: Transparent;
  border: none;
  overflow: hidden;
  outline:none;
  cursor:pointer;
  margin-top: 7px;
  display: grid;
  justify-items: right;
  color: #2c3e50;
  margin-left: 4px;
}

#login:hover {
  color: black;
}
</style>
