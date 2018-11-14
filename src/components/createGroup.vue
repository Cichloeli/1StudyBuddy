
<template>
<div id="create_a_Group">
  <p>{{message}}</p>
  <div class = "createGroup">
    <!-- the 'heading' is in the class 'createGroup' but not in the 'body' -->
    <div class = "heading">
      <h3 style="color : #0066cc">Create Your Group</h3>
    </div>
    <div class = "body">
      <form id = "form" class = "init form" v-on:submit.prevent="addingGroup">
        <div class = "form-group">
          <label for = "classtitle">Choose a Class:</label>
          <input type = "text" id = "classtitle" class = "form-control" v-model="newgroup.classname" placeholder="eg: cmps115">
        </div>
        <input type = "submit" class = "button-to-submit" value = "Create Group">
      </form>
    </div>
  </div>
  <div class = "chooseGroup">
    <div class = "heading_for_choose">
       <h3 style="color : #0066cc">Join Your Group</h3>
     </div>
     <div class = "body_for_choose">
      <form id = "form_for_choose" class = "init form_for_choose" v-on:submit.prevent="choosingGroup">
       <div class = "form-group-choose">
        <label for = "classtitle_choose">Choose a Class:</label>
        <input type = "text" id = "classtitle_choose" class = "form-control-choose" v-model="choose_a_class" placeholder="eg: cmps115">
       </div>
       <input type = "submit" class = "button-to-submit-choose" value = "Search Group">
      </form>
    </div>
  </div>
</div>
</template>

<script src="https://www.gstatic.com/firebasejs/5.5.8/firebase.js"></script>
<script>
import firebase from "firebase";
  // Initialize Firebase
let config ={
  apiKey: "AIzaSyAtTNO9fCUwweAnOXWbbAaOR39t7X1hdCQ",
  authDomain: "studybuddy-memo.firebaseapp.com",
  databaseURL: "https://studybuddy-memo.firebaseio.com",
  projectId: "studybuddy-memo",
  storageBucket: "studybuddy-memo.appspot.com",
  messagingSenderId: "986425946679"
}
let firebaseApp = firebase.initializeApp(config, "realtime");
let database = firebaseApp.database();
let courseref = database.ref('classes');
var Keys = null
var GroupKeys = null
courseref.once('value', getdata, error)

function getdata(data){
  console.log(data.val());
  var classes = data.val();
  Keys = Object.keys(classes)
  console.log(Keys);
}

function error(err){
  console.log('error!');
  console.log(err)
}

var The_user = firebase.auth().currentUser;
console.log(The_user+'!');

export default {
  name: 'create_a_Group',
  data () {
    return {
      newgroup:{
        classname: ''
      },
      choose_a_class:'',
      user:{
        userID: '',
        userInfo1: '',
        userInfo2: '',
      },
      message: 'Hello',
      test: Keys
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
        var group_master = this.user; 
        database.ref('classes/'+this.newgroup.classname+'/groups').push({
          classname: this.newgroup.classname,
          group_master
        });
        this.newgroup.classname = '';
      }else{
        alert('The class '+this.newgroup.classname+' does not exist');
      }
    },
    choosingGroup: function(){
      var joinRef = database.ref('classes/'+this.choose_a_class+'/groups');
      console.log(this.choose_a_class)
      joinRef.once("value", getGroup, errGroup)
      function getGroup(group_ID){
      console.log(group_ID.val());
      var group_array = group_ID.val();
      GroupKeys = Object.keys(group_array)
        console.log(GroupKeys);
      }
      function errGroup(err_ID){
        console.log('error!test');
        console.log(err_ID)
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
