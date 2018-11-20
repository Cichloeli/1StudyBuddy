
<template>
<div id="create_a_Group">
  <div class = "createGroup">
    <!-- the 'heading' is in the class 'createGroup' but not in the 'body' -->
    <div class = "heading">
      <h3 style="color : #0066cc">Create Your Group</h3>
    </div>
    <div class = "body">
      <form id = "form" class = "init form" v-on:submit.prevent="addingGroup">
        <div class = "form-group">
          <label style="font-size: 20px" for = "classtitle">Choose a Class:</label>
          <input type = "text" id = "classtitle" class = "form-control" v-model="newgroup.classname" placeholder="eg: cmps115">
        </div>
        <div>
          <h4 style="font-size: 20px">Enter a group name</h4>
            <input v-model="newgroup.groupname">
          </div>
        <input type = "submit" class = "button-to-submit" value = "Create Group">
      </form>  
    </div>
  </div>

  <!-- The code above is creating a group, the code below is joining a group --> 
  <div class = "chooseGroup">
    <div class = "heading_for_choose">
       <h3 style="color : #0066cc">Join Your Group</h3>
     </div>
     <div class = "body_for_choose">
      <form id = "form_for_choose" class = "init form_for_choose" v-on:submit.prevent="choosingGroup">
       <div class = "form-group-choose">
         <p>1. Enter the name of the class you want to find groups in, then select search group</p>
        <label style="font-size: 18px;margin-left: 22px" for = "classtitle_choose">Choose a Class:</label>
        <input type = "text" style="padding: 5px; margin-left: 5px"id = "classtitle_choose" class = "form-control-choose" v-model="choose_a_class" placeholder="eg: cmps115">
       </div>
       <input type = "submit" style="margin-top: 10px; margin-bottom: 10px; margin-left: 22px"class = "button-to-submit-choose" value = "Search Group">
      </form>
      <p>2. Select the group you would like to join, then click the join button</p>
      <!-- The code above is finding a group, the code below is joining a group --> 
        <select style="margin-left: 22px; padding: 5px"v-model="selected">
          <option v-for="groupname in currGroup" :key="groupname.id">
            {{groupname}}
          </option>
        </select>
      <div>
        <button style="margin-top: 10px;margin-bottome: 40px;margin-left: 22px"v-on:click="joiningGroup(selected)">Join</button>
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
var counter = 0
var counter_again = 0
var size = 0
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
  }
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
        classname: '',
        groupname: ''
      },
      choose_a_class:'',
      user:{
        userID: '',
        userInfo1: '',
        userInfo2: '',
      },
      message: 'Hello',
      currGroup: '',
      selected: '',
    }
  },
  methods: {
    addingGroup: function (){
      var ID = 0;
      console.log(Keys)
      console.log(this.newgroup.classname)
      for(var i = 0; i< Keys.length; i++){
        if(this.newgroup.classname == Keys[i]){
            this.currGroup = Grouplist[i]
          }
        if(this.newgroup.classname == Keys[i]){
          ID = 1;
        }
      }
      if(ID == 1){
        console.log(ID)
        this.user.userID = 'userID is    hahaha';
        this.user.userInfo1 = 'info1';
        this.user.userInfo2 = 'info2';
        var group_master = this.user;
        var group_name = this.newgroup.groupname;
        var checker = 1;
        for(var NAME= 0; NAME<this.currGroup.length; NAME++){
          if (group_name == this.currGroup[NAME]){
            checker = 0;
          }
        }
        if(checker == 1){
          database.ref('classes/'+this.newgroup.classname+'/groups/'+group_name).set({
            classname: this.newgroup.classname,
            group_master,
          });
        }else{
          alert("Group Already Exist!")
        }
        this.newgroup.classname = '';
      }else{
        alert('The class '+this.newgroup.classname+' does not exist');
      }
    },
    choosingGroup: function(){
      console.log(this.choose_a_class)
      if(this.choose_a_class == ''){
        alert('Please choose a class first')
      }else{
        for(var index =0; index < Keys.length; index++){
          if(this.choose_a_class == Keys[index]){
            this.currGroup = Grouplist[index]
          }
        }
      }
    },
    joiningGroup: function(groupID){ 
      var group_member_ID = '125';
      console.log(this.choose_a_class);
      console.log(groupID);
      if(groupID == ''){
        alert('Please choose a group first')
      }else{
        console.log(groupID.length+"size")
        database.ref('classes/'+this.choose_a_class+'/groups/'+groupID+'/group_member'+group_member_ID).set({
          group_member_ID
        });
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
