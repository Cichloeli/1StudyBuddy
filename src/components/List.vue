<template>
  <div>
    <h1>Xuya's Account</h1>
    <p>Please choose cmps101 as class, test565 as group name for create and remove, hi for join for default test </p>
    <button @click="createCheck()">CreateGroupTest</button>
    <p>{{pass_or_notC}}</p>
    <button @click="joinCheck()">JoinGroupTest</button>
    <p>{{pass_or_notJ}}</p>
    <button @click="removeCheck()">RemoveGroupMasterTest</button>
    <p>{{pass_or_notR}}</p>
    <button @click="removeCheckJ()">RemoveGroupMemberTest</button>
    <p>{{pass_or_notRJ}}</p>
  </div>
</template>

<script>
import { mapState, mapMutations, mapGetters } from 'vuex';
// this is a demo.
// getting result from our website by doing the actual operation and get the data we want to
// test from database and print in the console log in our website. Copy the data from the console log,
// and put the data into this page. Copare data to we have from website and default data we left
//  here to see whether the data is the one we want or not. If the data is correct, print pass.
export default {
  name: 'test',
  computed: {
    ...mapState([
    "groupReal",
    "groupCloud"
  ]),
    ...mapGetters([
      'getgroupReal',
      'getgroupCloud'
    ])
  },
  data () {
    return {
      pass_or_notC: '',
      pass_or_notJ: '',
      pass_or_notR: '',
      pass_or_notRJ: '',
      defaultGroup: 'haha'
    }
  },
  methods: {
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
          pass_or_notC = 'Exception! Group has been add to cloud group more than one time'
        }else{
          this.pass_or_notC = 'PASS!'
        }
      }
      // get data from <input>, use the input data to compre with the dafault data.
      // default data is the data that we think it will be after we do the actual operation in our website.
      // For example, I create a group named haha in cmps101, the default data for "groupReal" maybe
      // ['group1', 'group2', 'haha'] in this method. We use groupReal as input to compare with the 
      // default data, which is ['group1', 'group2', 'haha']. If they are same, groupReal pass in
      // this method and I will go to check ID_in_group next.  IF all inputs are same with all of my
      // default data, I will set pass_or_notC as "PASS", otherwise it will be "False"
    },
    joinCheck: function() {

    },
    removeCheck: function() {

    },
    removeCheckJ: function() {

    }
  }
}
</script>
