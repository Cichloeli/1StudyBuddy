
<template>
<div id="create_a_Group">
  <div class = "createGroup">
    <!-- the 'heading' is in the class 'createGroup' but not in the 'body' -->
    <div class = "heading">
      <h3 style="color : #0066cc">Create Your Group</h3>
    </div>
    <div class = "body">
      <button id = "Begin" class = "init" v-on:click="searchingClass()">choose your class</button>
        <div class = "Begin-group">
          <select v-model="newgroup.classname">
          <option v-for="classname in currClass" :key="classname.id">
            {{classname}}
          </option>
        </select>
        </div>
        <div>
          <h4 style="font-size: 20px">Enter a group name</h4>
            <input v-model="newgroup.groupname">
          </div>
        <button id = "submit" v-on:click="addingGroup()">Create Group</button>
    </div>
  </div>

  <!-- The code above is creating a group, the code below is joining a group --> 
  <div class = "chooseGroup">
    <div class = "heading_for_choose">
       <h3 style="color : #0066cc">Join Your Group</h3>
     </div>
     <div class = "body_for_choose">
      <button id = "form_for_choose" class = "init form_for_choose" v-on:click="choosingGroup()">Choose group</button>
      <!-- The code above is finding a group, the code below is joining a group --> 
        <select style="margin-left: 22px; padding: 5px" v-model="selected">
          <option v-for="groupname in currGroup" :key="groupname.id">
            {{groupname}}
          </option>
        </select>
      <div>
        <button style="margin-top: 10px;margin-bottome: 40px;margin-left: 22px" v-on:click="joiningGroup(selected)">Join</button>
      </div>
    </div>
  </div>
  <!-- The code above is joing a group -->
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
var Grouplist = []
var groupName = []
var Namelist = []
var userKey = []
var userList = []
var counter = 0
var counter_again = 0
courseref.once('value', getdata, error)

function getdata(data){
  console.log(data.val());
  var classes = data.val();
  Keys = Object.keys(classes)
  console.log(Keys);
  for(var n = 0; n< Keys.length; n++){
    var groupref = database.ref('classes/'+Keys[n]+'/groups');
    groupref.once('value', getGroupData, getGroupErr);
    function getGroupData(groupData){
      if(groupData.val()!=null){
        GroupKeys = Object.keys(groupData.val());
      }
      Grouplist[counter] = GroupKeys;
      counter = counter + 1;
    }
    function getGroupErr(errData){
      console.log('errData!');
      console.log(errData);
    }
    var classRef = database.ref('classes/'+Keys[n]);
    classRef.once('value', classData, classErr);
    function classData(class_ID){
      if(class_ID.val()!= null){
        userKey = Object.keys(class_ID.val());
      }
      userList[counter_again] = userKey;
      counter_again = counter_again+1;
    }
    function classErr(errclass){
      console.log('errClass!');
      console.log(errclass)
    }
  }
}
function error(err){
  console.log('error!');
  console.log(err)
}


export default {
  name: 'create_a_Group',
  data () {
    return {
      newgroup:{
        classname: '',
        groupname: ''
      },
      choose_a_class:'',
      message: 'Hello',
      currGroup: '',
      selected: '',
      currClass: [],
    }
  },
  methods: {
    searchingClass:function(){
      var The_user = firebase.auth().currentUser;
      var User_ID = The_user.uid;
      var curr_class_list = [];
      var printList = [];
      console.log(userList);
      for(var u =0; u<Keys.length; u++){
        curr_class_list = userList[u];
        if (curr_class_list!= ''){
          for(var u_name = 0; u_name<curr_class_list.length; u_name++){
            if(User_ID == curr_class_list[u_name]){
              this.currClass.push(Keys[u])
            }
          }
        }
      }
      console.log(this.currClass)
    },
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
        var The_user = firebase.auth().currentUser;
        var masterID = The_user.uid;
        var group_name = this.newgroup.groupname;
        var checker = 1;
        for (var G = 0; G<Keys.length; G++){
          this.currGroup = Grouplist[G]
          for(var NAME= 0; NAME<this.currGroup.length; NAME++){
            if (group_name == this.currGroup[NAME]){
              checker = 0;
            }
          }
        }
        if(checker == 1){
          database.ref('classes/'+this.newgroup.classname+'/groups/'+group_name+"/"+masterID).set({
            Identity: "master",
          });
          location.reload();
          this.currGroup = [];
        }else{
          alert("Group Already Exist!")
        }
        this.newgroup.classname = '';
      }else{
        alert('The class '+this.newgroup.classname+' does not exist');
      }
    },
    choosingGroup: function(){
      if(this.newgroup.classname == ''){
        alert('Please choose a class first')
      }else{
        for(var index =0; index < Keys.length; index++){
          if(this.newgroup.classname == Keys[index]){
            this.currGroup = Grouplist[index]
          }
        }
      }
    },
    joiningGroup: function(groupID){ 
      var The_user = firebase.auth().currentUser;
      var group_member_ID = The_user.uid;
      console.log(groupID);
      if(groupID == ''){
        alert('Please choose a group first')
      }else{
        database.ref('classes/'+this.newgroup.classname+'/groups/'+groupID+"/"+group_member_ID).set({
          Identity: 'member',
        });
        location.reload();
      }
    }
  }
}
</script>

<style>
#create_a_Group{
  margin-top: 80px;
  margin-bottom: 80px;
}

.body{
  text-align: left;
  margin-top: 10px;
}

.button-to-submit{
  margin-top: 15px;
  margin-bottom: 30px;
}

.createGroup{
  border-style: solid;
  border-color: white;
  border-bottom-width: 5px;
  border-bottom-color: lightgrey;
}

/* This is css code for the join your group section */
.chooseGroup{
  margin-top: 30px;
}
.heading_for_choose{
  margin-bottom: 20px;
}
.body_for_choose{
  text-align: left;
}
p{
  font-size: 20px;
}
</style>