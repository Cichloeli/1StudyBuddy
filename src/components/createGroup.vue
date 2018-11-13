
<template>
<div id="create_a_Group">
  <p>{{message}}</p>
  <div class = "createGroup">
    <!-- the heading is in the class 'createGroup' but not in the body -->
    <div class = "heading">
      <h3 style="color : #0066cc">create group</h3>
    </div>
    <div class = "body">
      <form id = "form" class = "init form" v-on:submit.prevent="addingGroup">
        <div class = "form-group">
          <label for = "classtitle">class:</label>
          <input type = "text" id = "classtitle" class = "form-control" v-model="newgroup.classname" placeholder="eg: cs115">
        </div>
        <input type = "submit" class = "button-to-submit" value = "add group">
      </form>
    </div>
  </div>
</div>
</template>

<script src="https://www.gstatic.com/firebasejs/5.5.8/firebase.js"></script>
<script>
import firebase from "firebase"
  // Initialize Firebase
let config ={
    apiKey: "AIzaSyAtTNO9fCUwweAnOXWbbAaOR39t7X1hdCQ",
    authDomain: "studybuddy-memo.firebaseapp.com",
    databaseURL: "https://studybuddy-memo.firebaseio.com",
    projectId: "studybuddy-memo",
    storageBucket: "studybuddy-memo.appspot.com",
    messagingSenderId: "986425946679"
}
let app = firebase.initializeApp(config);
let database = app.database();
var db = firebase.firestore()
let courseref = database.ref('classes')
var Keys = null
courseref.once('value', getdata, error)

function getdata(data){
  console.log(data.val());
  var classes = data.val();
  Keys = Object.keys(classes)
  console.log(Keys);
}

function error(err){
  console.log('error');
  console.log(err)
}

export default {
  name: 'create_a_Group',
  data () {
    return {
      newgroup:{
        classname: ''
      },
      user:{
        userID: '',
        userInfo1: '',
        userInfo2: '',
      },
      message: 'Hello',
    }
  },
  methods: {
    addingGroup: function (){
      var ID = 0;
      console.log(Keys)
      console.log(this.newgroup.classname)
      for(var i = 0; i< Keys.length; i++){
        if(this.newgroup.classname == Keys[i]){
          ID = 1;
        }
      }
      if(ID == 1){
        console.log(ID)
        this.user.userID = 'userID is';
        this.user.userInfo1 = 'info1';
        this.user.userInfo2 = 'info2';
        var group_master = this.user
        database.ref('classes/'+this.newgroup.classname+'/groups').push({
          classname: this.newgroup.classname,
          group_master
        });
        this.newgroup.classname = '';
      }else{
        alert('The class '+this.newgroup.classname+' does not exist');
      }
    }
  }
}
</script>

<style>
#create_a_group{
  margin-top: 60px;
  text-align: center;
}
</style>
