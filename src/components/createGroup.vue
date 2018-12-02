<template>
<div id="create_a_Group">
  <div class = "createGroup">
    <!-- the 'heading' is in the class 'createGroup' but not in the 'body' -->
    <div class = "heading">
      <h3 style="color : #0066cc">Create A Group</h3>
    </div>
    <template v-if="this.removeTrigger!=0">
      <div v-on="updateGroup()"></div>
    </template>
    <div class = "body">
      <p>1. Choose one of your classes in the drop down menu below</p>
        <div class = "Begin-group">
          <select style="margin-left: 20px; margin-bottom:10px; padding: 5px" v-model="newgroup.classname">
          <template v-if="this.currClass == ''" >
            <div v-on="getClassupdate()"></div>
          </template>
          <option v-for="classname in currClass" :key="classname.id">
            {{classname}}
          </option>
        </select>
        </div>
        <div>
          <h4 style="font-size: 20px">2. Enter a group name</h4>
            <input style="margin-left: 20px" v-model="newgroup.groupname">
          </div>
        <button id = "submit" style="margin-left: 20px" v-on:click="addingGroup()">Create Group</button>
    </div>
  </div>
  <!-- The code above is creating a group, the code below is joining a group --> 
  <div class = "chooseGroup">
    <div class = "heading_for_choose">
       <h3 style="color : #0066cc">Join A Group</h3>
     </div>
      <p>Choose a group from the drop down menu. Then click Join</p>
     <div class = "body_for_choose">
       <template v-if="newgroup.classname">
         <div v-on="choosingGroup()"></div>
       </template>
      <!--<button id = "form_for_choose" style="margin-left: 20px" class = "init form_for_choose" v-on:click="choosingGroup()">Select a Group</button>-->
      <!-- The code above is finding a group, the code below is joining a group --> 
        <select style="margin-left: 22px; padding: 5px" v-model="selected">
          <option v-for="groupname in currGroup" :key="groupname.id">
            {{groupname}}
          </option>
        </select>
      <div>
        <button style="margin-top: 10px;margin-bottom: 30px;margin-left: 20px" v-on:click="joiningGroup(selected)">Join</button>
      </div>
    </div>
  </div>
  <!-- The code above is joing a group, the code below is remove a group-->
  
  <div class = "removeGroup">
    <div class = "heading_for_remove">
      <h3 style="color : #0066cc;margin-top: 30px">Leave A Group</h3>
    </div>
    <p>Choose a group from the drop down menu that you want to leave.</p>
    <div class = "body_for_remove">
      <template v-if="this.updateTrigger == 1">
        <div v-on="choosingGroupRemove()"></div>
      </template>
      <!--<button id = "form_for_remove" class = "init form_for_remove" v-on:click="choosingGroupRemove()">Select a Group</button>-->
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
var classList_user = []
var updateList = []
var updateClass = []
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
      updateTrigger: 0,
      removeTrigger: 0,
      currClass: '',
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
              group_Already_In = doc.data().group;
              //show user's current group
              this.currGroupR = group_Already_In;
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
          console.log(errclass);
        }
      }
    }
    function error(err){
      console.log('error!');
      console.log(err);
    }
    //method for search a class: in this method, it will add class to the empty array currClass based on
    //current user's enroll class. If there is no class for current user, it will not change currClass array     
    var userClassRef = database.ref('users/'+User_ID);
    userClassRef.once('value', userClass, erruserClass);
    function userClass(classname){
      if(classname!=null){
        var test = Object.keys(classname.val());
        for(var t = 0; t<test.length;t++){
          var currclassref = database.ref('users/'+User_ID+'/'+test[t]+'/class')
          currclassref.once('value').then(function(snapshot){
            var id = snapshot.val()
            classList_user.push(id)
          })
          
        }
      }
    }
    function erruserClass(errclssname){
      console.log('errClassname!');
      console.log(errclassname)
    }
  },

  methods: {
    //update class list
    getClassupdate: function(){
      this.currClass = classList_user;
    },
    // method for create a group: At the beginning, double check if the class user choose is exist or not.
    // If the class does not exist, it will show the warning. If the class exist, it will check whether the 
    // the group name user enter exist. If the group name exist, it will show the warning, too. If the group
    // name does not exist, create the group in the realtime database and update user information on cloud.
    // At last, refresh the page
    updateGroup: function(){
      var classname = this.removeTrigger;
      updateList = [];
      updateClass = [];
      for(var index =0; index < Keys.length; index++){
          if(classname == Keys[index]){
            var ref = database.ref('classes/'+classname+'/groups');
            ref.once('value').then(function(snapshot) {
              updateList = Object.keys(snapshot.val());
            });
          }
        }
      updateClass = this.removeTrigger;
      this.removeTrigger = 0;
    },
    addingGroup: function (){
      if(updateClass!=''){
         for(var u =0; u < Keys.length; u++){
          if(updateClass == Keys[u]){
            Grouplist[u] = updateList;
          }
        }
      }
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
           //update current status and send data for unit test
          for(var index =0; index < Keys.length; index++){
            if(this.newgroup.classname == Keys[index]){
              Grouplist[index].push(group_name);
              //for unit test, it can be comment if we don't need to test
              localStorage.setItem('real' , JSON.stringify(Grouplist[index]))
            }
          }
          //for unit test, it can be comment if we don't need to test
          localStorage.setItem('cloud' , JSON.stringify(group_Already_In))
          this.currGroup = [];
        }else{
          alert("Group Already Exist!")
        }
        this.updateTrigger = 1;
        this.newgroup.classname = '';
        this.newgroup.groupname = '';
        
      }else{
        alert('The class '+this.newgroup.classname+' does not exist');
      }
    },
    // method for choose a group: In this method, it will check whether user choose a class first, after that,
    // it will put the groups under that class to the array currGroup. 
    choosingGroup: function(){
      if(updateClass!=''){
         for(var u =0; u < Keys.length; u++){
          if(updateClass == Keys[u]){
            Grouplist[u] = updateList;
          }
        }
      }
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
        this.updateTrigger = 1;
        this.newgroup.classname = '';
        this.currGroup = '';
        localStorage.setItem('cloud' , JSON.stringify(group_Already_In))
      }
    },
    //method to show user's current group
    choosingGroupRemove: function(){
      this.currGroupR = group_Already_In;
      this.updateTriggerr = 0;
    },
    //method to remove group, it is almost same with join group except it tries to remove rather than add
    joiningGroupRemove: function(groupID){
      var The_user = firebase.auth().currentUser;
      var group_member_ID = The_user.uid;
      if(groupID == ''){
        alert('Please choose a group first')
      }else if(group_Already_In == ""){
        alert('You do not have any groups')
      }else{
        var removeGroupRef = cloud.collection("users").doc(group_member_ID);
        var leng = group_Already_In.length;
        for(var l = 0; l<leng; l++){
          if(group_Already_In[l] == groupID){
            group_Already_In.splice(l, 1);
          }
        }
        removeGroupRef.update({
          group: group_Already_In
        });
        var className = '';
        var groupList_R = '';
        for(var n = 0; n< Grouplist.length; n++){
          groupList_R = Grouplist[n];
          if(groupList_R != ''){
            for(var r =0; r<groupList_R.length; r++){
              if (groupList_R[r] == groupID){
                className = Keys[n];
              }
            }
          }
        }
        database.ref('classes/'+className+'/groups/'+groupID+"/"+group_member_ID).remove()
        this.removeTrigger = className;
        this.currClass = ''
        localStorage.setItem('cloud' , JSON.stringify(group_Already_In))
      }
    }
  },
}
</script>


<style>
#create_a_Group{
  margin-top: 70px;
  margin-bottom: 80px;
}
p{
  text-align: left;
  font-size: 10px;
}
.body{
  text-align: left;
  margin-top: 10px;
}
#submit{
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
  border-style: solid;
  border-color: white;
  border-bottom-width: 5px;
  border-bottom-color: lightgrey;
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