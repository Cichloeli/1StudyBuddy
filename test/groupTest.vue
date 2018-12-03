<template>
  <div>
    <h1>Xuya's Account</h1>
    <p>Please choose cmps101 as class, haha as group name for create, hi for join, and both for remove </p>
    <button @click="createCheck()">CreateGroupTest</button>
    <p>{{pass_or_notC}}</p>
    <button @click="joinCheck()">JoinGroupTest</button>
    <p>{{pass_or_notJ}}</p>
    <button @click="removeCheck()">RemoveGroupTestDelGroup</button>
    <p>{{pass_or_notR}}</p>
    <button @click="removeCheckJ()">RemoveGroupTestKeepGroup</button>
    <p>{{pass_or_notRJ}}</p>
  </div>
</template>

<script>
// set dafalut data
export default {
  name: 'test',
  data () {
    return {
      pass_or_notC: '',
      pass_or_notJ: '',
      pass_or_notR: '',
      pass_or_notRJ: '',
      defaultGroup: 'haha',
      defaultGroupJ: 'hi'
    }
  },
  methods: {
    //unit test for create group, get result after do the operation and compare with the data
    //expected. Printing Pass if pass, printing specific exception if not pass.
    createCheck: function() {
      var groupReal = JSON.parse(localStorage.getItem('real'))
      var groupCloud = JSON.parse(localStorage.getItem('cloud'))
      var counterR = 0
      var counterC = 0
      if(groupReal == ''){
        this.pass_or_notC = 'Exception! Realtime Group List is empty'
      }else if(groupCloud == ''){
        this.pass_or_notC = 'Exception! Cloud Group List is empty'
      }else{
        for(var loop = 0; loop < groupReal.length; loop++){
          if(this.defaultGroup == groupReal[loop]){
            counterR = counterR + 1
          }
        }
        for(var loopC = 0; loopC < groupCloud.length; loopC++){
          if(this.defaultGroup == groupCloud[loopC]){
            counterC = counterC + 1
          }
        }
        if(counterR < 1){
          this.pass_or_notC = 'Exception! Group has not been add to realtime group yet'
        }else if(counterR > 1){
          this.pass_or_notC = 'Exception! Group has been add to realtime group more than one time'
        }else if(counterC < 1){
          this.pass_or_notC = 'Exception! Group has not been add to cloud group yet'
        }else if(counterC > 1){
          this.pass_or_notC = 'Exception! Group has been add to cloud group more than one time'
        }else{
          this.pass_or_notC = 'PASS!'
        }
      }
      //reset the data
      localStorage.setItem('real' , JSON.stringify([]))
      localStorage.setItem('cloud' , JSON.stringify([]))
    },
    joinCheck: function() {
    //unit test for join group, get result after do the operation and compare with the data
    //expected. Printing Pass if pass, printing specific exception if not pass.
    var groupCloud = JSON.parse(localStorage.getItem('cloud'))
    var counterC = 0;
    if(groupCloud == ''){
      this.pass_or_notJ = 'Exception! Cloud Group List is empty'
    }else{
      for(var loopC = 0; loopC < groupCloud.length; loopC++){
          if(this.defaultGroupJ == groupCloud[loopC]){
            counterC = counterC + 1
          }
        }
      if(counterC < 1){
        this.pass_or_notJ = 'Exception! User did not join the group'
      }else if(counterC > 1){
        this.pass_or_notJ = 'Exception! User join the group more than one time'
      }else{
        this.pass_or_notJ = 'PASS!'
      }
    }
    localStorage.setItem('real' , JSON.stringify([]))
    localStorage.setItem('cloud' , JSON.stringify([]))
    },
    removeCheck: function() {
    //unit test for remove group which only contain user itself, get result after do the operation and compare with the data
    //expected. Printing Pass if pass, printing specific exception if not pass.
    // test this one, click remove first and choose cmps101 class, then come here to test
    var groupReal = JSON.parse(localStorage.getItem('real'))
    var groupCloud = JSON.parse(localStorage.getItem('cloud'))
    var counterR = 0
    var counterC = 0
    if(groupReal == ''){
      this.pass_or_notR = 'Exception! Realtime Group List is empty'
    }else if(groupCloud == ''){
      this.pass_or_notR = 'Exception! Cloud Group List is empty'
    }else{
      for(var loop = 0; loop < groupReal.length; loop++){
        if(this.defaultGroup == groupReal[loop]){
          counterR = counterR + 1
        }
      }
      for(var loopC = 0; loopC < groupCloud.length; loopC++){
        if(this.defaultGroup == groupCloud[loopC]){
          counterC = counterC + 1
        }
      }
      if(counterC > 0){
        this.pass_or_notR = 'Exception! Group has not been remove from cloud group yet'
      }else if(counterR > 0){
        this.pass_or_notR = 'Exception! Group has not been remove from realtime group yet'
      }
      else{
        this.pass_or_notR = 'PASS!'
      }
    }
    localStorage.setItem('real' , JSON.stringify([]))
    localStorage.setItem('cloud' , JSON.stringify([]))
    },
    removeCheckJ: function(){
      //unit test for remove group which only contain user itself, get result after do the operation and compare with the data
    //expected. Printing Pass if pass, printing specific exception if not pass.
    // test this one, click remove first and choose cmps101 class, then come here to test
    var groupReal = JSON.parse(localStorage.getItem('real'))
    var groupCloud = JSON.parse(localStorage.getItem('cloud'))
    var counterR = 0
    var counterC = 0
    if(groupReal == ''){
      this.pass_or_notRJ = 'Exception! Realtime Group List is empty'
    }else if(groupCloud == ''){
      this.pass_or_notRJ = 'Exception! Cloud Group List is empty'
    }else{
      for(var loop = 0; loop < groupReal.length; loop++){
        if(this.defaultGroupJ == groupReal[loop]){
          counterR = counterR + 1
        }
      }
      for(var loopC = 0; loopC < groupCloud.length; loopC++){
        if(this.defaultGroupJ == groupCloud[loopC]){
          counterC = counterC + 1
        }
      }
      if(counterC > 0){
        this.pass_or_notRJ = 'Exception! Group has not been remove from cloud group yet'
      }else if(counterR < 1){
        this.pass_or_notRJ = 'Exception! Group has been remove from realtime group yet'
      }else if(counterR > 1){
        this.pass_or_notRJ = 'Exception! Group has been add into realtime group yet'
      }
      else{
        this.pass_or_notRJ = 'PASS!'
      }
    }
    localStorage.setItem('real' , JSON.stringify([]))
    localStorage.setItem('cloud' , JSON.stringify([]))
    } 
  }
}
</script>
