<template>
  <div>
    <h1>CHATTEST Account</h1>
    <p>Please use name "test" and type in "this is a test" in Globle chat</p>
    <button @click="nametest()">NameTest</button>
    <p>{{pass_or_notJ}}</p>
     <button @click="messagetest()">MessageTest</button>
    <p>{{pass_or_notC}}</p>
  </div>
</template>

<script>
// set dafalut data
export default {
  name: 'chattest',
   data () {
    return {
      pass_or_notJ: '',
      pass_or_notC: '',
    }
  },
  methods: {
    
    nametest: function() {
      var name = JSON.parse(localStorage.getItem('chatname'));
      var message = JSON.parse(localStorage.getItem('message'));
      if(name=="test"){
        this.pass_or_notJ="PASS"
      }else{
        this.pass_or_notJ="fail"
      }
    },
    messagetest: function() {
      var name = JSON.parse(localStorage.getItem('chatname'));
      var message = JSON.parse(localStorage.getItem('message'));
      if(message=="this is a test"){
        this.pass_or_notC="PASS"
      }else{
        this.pass_or_notC="fail"
      }
    },
  }
}
</script>
