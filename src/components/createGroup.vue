
<template>
<div id="create_a_Group">
  <div class = "createGroup">
    <!-- the 'heading' is in the class 'createGroup' but not in the 'body' -->
    <div class = "heading">
      <h3 style="color : #0066cc">Create A Group</h3>
    </div>
    <div class = "body">
      <button id = "Begin" class = "init" v-on:click="searchingClass()">Select a Class</button>
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
  <!-- The code above is joing a group, the code below is remove a group-->
  <div class = "removeGroup">
    <div class = "heading_for_remove">
      <h3>Remove Group</h3>
    </div>
    <div class = "body_for_remove">
      <button id = "form_for_remove" class = "init form_for_remove" v-on:click="choosingGroupRemove()">Choose group</button>
        <select style="margin-left: 22px; padding: 5px" v-model="selectedR">
          <option v-for="groupnameR in currGroupR" :key="groupnameR.id">
            {{groupnameR}}
          </option>
        </select>
      <div>
        <button style="margin-top: 10px;margin-bottome: 40px;margin-left: 22px" v-on:click="joiningGroupRemove(selectedR)">Remove</button>
      </div>
    </div>
  </div>
</div>
</template>


<script src="https://www.gstatic.com/firebasejs/5.5.8/firebase.js"></script>
<script>
import firebase from "firebase";
import db from './firebaseinit';
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
let cloud = firebase.firestore();
let database = firebaseApp.database();
let courseref = database.ref('classes');
//set global var for methods
var Keys = null
var GroupKeys = null
var Grouplist = []
var groupName = []
var userKey = []
var userList = []
var counter = 0
var counter_again = 0
var group_Already_In = []

//initial some var which will be used for upcoming methods
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
      currGroupR: '',
      selected: '',
      selectedR: '',
      currClass: [],
    }
  },
  mounted(){
    //get group, classes information and store them in array
    //Keys: class list
    //GroupList: an array to store groups from current class list, the index is corresponding
    //with the index of class list
    //userList: an array to store userID from current class list, the index is corresponding
    //with the index of class list 
    var The_user = firebase.auth().currentUser;
    var User_ID = The_user.uid;
    cloud.collection("users").where('uid', '==', User_ID).get().then(querySnapshot => {
            querySnapshot.forEach(doc => {
              group_Already_In = doc.data().group
            })
        });
    courseref.once('value', getdata, error)
    function getdata(data){
      var classes = data.val();
      Keys = Object.keys(classes)
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
  },
  methods: {
    //method for search a class: in this method, it will add class to the empty array currClass based on
    //current user's enroll class. If there is no class for current user, it will not change currClass array 
    searchingClass:function(){
      var The_user = firebase.auth().currentUser;
      var User_ID = The_user.uid;
      var curr_class_list = [];
      var printList = [];
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
    },
    // method for create a group: At the beginning, double check if the class user choose is exist or not.
    // If the class does not exist, it will show the warning. If the class exist, it will check whether the 
    // the group name user enter exist. If the group name exist, it will show the warning, too. If the group
    // name does not exist, create the group in the realtime database and update user information on cloud.
    // At last, refresh the page
    addingGroup: function (){
      var ID = 0;
      for(var i = 0; i< Keys.length; i++){
        if(this.newgroup.classname == Keys[i]){
          ID = 1;
        }
      }
      if(ID == 1){
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
          var curr_length = group_Already_In.length;
          group_Already_In[curr_length] = group_name;
          var addGroupRef = cloud.collection("users").doc(masterID);
          addGroupRef.update({
            group: group_Already_In
          });
          this.currGroup = [];
        }else{
          alert("Group Already Exist!")
        }
        this.newgroup.classname = '';
      }else{
        alert('The class '+this.newgroup.classname+' does not exist');
      }
      location.reload();
    },
    // method for choose a group: In this method, it will check whether user choose a class first, after that,
    // it will put the groups under that class to the array currGroup. 
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
    // method for join a group: check whether user choose a group first. If not, give user alert. If user
    // choose a group and click the button, put user into the group and update user information on the cloud.
    // At last, refresh the page
    joiningGroup: function(groupID){ 
      var The_user = firebase.auth().currentUser;
      var group_member_ID = The_user.uid;
      var group_checker = 1;
      if(group_Already_In!=''){
        for(var c =0; c<group_Already_In.length; c++){
          if(groupID == group_Already_In[c]){
            group_checker = 0;
          }
        }
      }
      if(groupID == ''){
        alert('Please choose a group first')
      }else if(group_checker == 0){
        alert('You already in this group')
      }
      else{
        database.ref('classes/'+this.newgroup.classname+'/groups/'+groupID+"/"+group_member_ID).set({
          Identity: 'member',
        });
        var curr_length = group_Already_In.length;
        group_Already_In[curr_length] = groupID;
        var addGroupRef = cloud.collection("users").doc(group_member_ID);
          addGroupRef.update({
          group: group_Already_In
        });
      }
      location.reload();
    },
    choosingGroupRemove: function(){
      this.currGroupR = group_Already_In;
    },
    joiningGroupRemove: function(groupID){

    }
  }
}
</script>

<style>
#create_a_Group{
  margin-top: 90px;
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