
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
        <div>
          <h3>Enter a group name</h3>
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
        <label for = "classtitle_choose">Choose a Class:</label>
        <input type = "text" id = "classtitle_choose" class = "form-control-choose" v-model="choose_a_class" placeholder="eg: cmps115">
       </div>
       <input type = "submit" class = "button-to-submit-choose" value = "Search Group">
      </form>
      <!-- The code above is finding a group, the code below is joining a group --> 
        <select v-model="selected">
          <option v-for="groupname in currGroup" :key="groupname.id">
            {{groupname}}
          </option>
        </select>
      <div>
        <button v-on:click="joiningGroup(selected)">Join</button>
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
        var masterID = '122';
        var group_name = this.newgroup.groupname;
        var checker = 1;
        for(var NAME= 0; NAME<this.currGroup.length; NAME++){
          if (group_name == this.currGroup[NAME]){
            checker = 0;
          }
        }
        if(checker == 1){
          database.ref('classes/'+this.newgroup.classname+'/groups/'+group_name+"/"+masterID).set({
            Identity: "master",
          });
          location.reload();
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
        database.ref('classes/'+this.choose_a_class+'/groups/'+groupID+"/"+group_member_ID).set({
          Identity: 'member',
        });
        location.reload();
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
