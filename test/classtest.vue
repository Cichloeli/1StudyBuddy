<template>
  <div>
    <h1>CLASSTEST Account</h1>
    <p>Please join the first to the third class on the list, then try to join a fourth class</p>
    <button @click="joinclass()">JoinClassTest</button>
    <p>{{pass_or_notJ}}</p>
    <button @click="classfull()">ClassFullTest</button>
    <p>{{pass_or_notR}}</p>
  </div>
</template>

<script>
// set dafalut data
export default {
  name: 'classtest',
   data () {
    return {
      pass_or_notJ: '',
      pass_or_notR: '',
    }
  },
  methods: {
    joinclass: function() {
    //check to see if class1(added) is cs101, if class 2(added) is cs102 .....
      var class1 = JSON.parse(localStorage.getItem('class1'));
      var class2 = JSON.parse(localStorage.getItem('class2'));
      var class3 = JSON.parse(localStorage.getItem('class3'));
      if(class1=="cmps101"&&class2=="cmps102"&&class3=="cmps104a"){
        this.pass_or_notJ="PASS"
      }else{
        this.pass_or_notJ="fail"
      }
    },
    classfull: function() {
    //check to see if extra classes are added/replaced current classed
      var class1 = JSON.parse(localStorage.getItem('class1'))
      var class2 = JSON.parse(localStorage.getItem('class2'))
      var class3 = JSON.parse(localStorage.getItem('class3'))
      if(class1=="cmps101"&&class2=="cmps102"&&class3=="cmps104a"){
        this.pass_or_notR="PASS"
      }else{
        this.pass_or_notR="fail"
      }
    },
  }
}
</script>
