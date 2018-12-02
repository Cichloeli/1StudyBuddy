<template>
    <div id="classes">
      <h1>
          Add your class
        </h1>
        <div class="container">
            <div class = "classSet"><ul>
                <li>cmps101</li> <button class="btn btn-lg btn-primary btn-block" type="button" v-on:click="test('cmps101')">Add</button>
                <li>cmps102</li> <button class="btn btn-lg btn-primary btn-block" type="button" v-on:click="test('cmps102')">Add</button>
                <li>cmps104a</li> <button class="btn btn-lg btn-primary btn-block" type="button" v-on:click="test('cmps104a')">Add</button>
                <li>cmps109</li> <button class="btn btn-lg btn-primary btn-block" type="button" v-on:click="test('cmps109')">Add</button>
                <li>cmps111</li> <button class="btn btn-lg btn-primary btn-block" type="button" v-on:click="test('cmps111')">Add</button>
                <li>cmps112</li> <button class="btn btn-lg btn-primary btn-block" type="button" v-on:click="test('cmps112')">Add</button>
                <li>cmps115</li> <button class="btn btn-lg btn-primary btn-block" type="button" v-on:click="test('cmps115')">Add</button>
                <li>cmps121</li> <button class="btn btn-lg btn-primary btn-block" type="button" v-on:click="test('cmps121')">Add</button>
                <li>cmps128</li> <button class="btn btn-lg btn-primary btn-block" type="button" v-on:click="test('cmps128')">Add</button>
                <li>cmps12a</li> <button class="btn btn-lg btn-primary btn-block" type="button" v-on:click="test('cmps12a')">Add</button>
                <li>cmps12b</li> <button class="btn btn-lg btn-primary btn-block" type="button" v-on:click="test('cmps12b')">Add</button>
                <li>cmps12l</li> <button class="btn btn-lg btn-primary btn-block" type="button" v-on:click="test('cmps12l')">Add</button>
                <li>cmps12m</li> <button class="btn btn-lg btn-primary btn-block" type="button" v-on:click="test('cmps12m')">Add</button>
                <li>cmps130</li> <button class="btn btn-lg btn-primary btn-block" type="button" v-on:click="test('cmps130')">Add</button>
                <li>cmps142</li> <button class="btn btn-lg btn-primary btn-block" type="button" v-on:click="test('cmps142')">Add</button>
                <li>cmps160</li> <button class="btn btn-lg btn-primary btn-block" type="button" v-on:click="test('cmps160')">Add</button>
                <li>cmps160l</li> <button class="btn btn-lg btn-primary btn-block" type="button" v-on:click="test('cmps160l')">Add</button>
                <li>cmps166a</li> <button class="btn btn-lg btn-primary btn-block" type="button" v-on:click="test('cmps166a')">Add</button>
                <li>cmps180</li> <button class="btn btn-lg btn-primary btn-block" type="button" v-on:click="test('cmps180')">Add</button>
                <li>cmps183</li> <button class="btn btn-lg btn-primary btn-block" type="button" v-on:click="test('cmps183')">Add</button>
                <li>cmps185</li> <button class="btn btn-lg btn-primary btn-block" type="button" v-on:click="test('cmps185')">Add</button>
                <li>cmps200</li> <button class="btn btn-lg btn-primary btn-block" type="button" v-on:click="test('cmps200')">Add</button>
                <li>cmps201</li> <button class="btn btn-lg btn-primary btn-block" type="button" v-on:click="test('cmps201')">Add</button>
                <li>cmps217</li> <button class="btn btn-lg btn-primary btn-block" type="button" v-on:click="test('cmps217')">Add</button>
                <li>cmps223</li> <button class="btn btn-lg btn-primary btn-block" type="button" v-on:click="test('cmps223')">Add</button>
                <li>cmps242</li> <button class="btn btn-lg btn-primary btn-block" type="button" v-on:click="test('cmps242')">Add</button>
                <li>cmps260</li> <button class="btn btn-lg btn-primary btn-block" type="button" v-on:click="test('cmps260')">Add</button>
                <li>cmps266a</li> <button class="btn btn-lg btn-primary btn-block" type="button" v-on:click="test('cmps266a')">Add</button>
                <li>cmps278</li> <button class="btn btn-lg btn-primary btn-block" type="button" v-on:click="test('cmps278')">Add</button>
                <li>cmps280d</li> <button class="btn btn-lg btn-primary btn-block" type="button" v-on:click="test('cmps280d')">Add</button>
                <li>cmps280l</li> <button class="btn btn-lg btn-primary btn-block" type="button" v-on:click="test('cmps280l')">Add</button>
                <li>cmps280s</li> <button class="btn btn-lg btn-primary btn-block" type="button" v-on:click="test('cmps280s')">Add</button>
                <li>cmps290s</li> <button class="btn btn-lg btn-primary btn-block" type="button" v-on:click="test('cmps290s')">Add</button>
                <li>cmps5j</li> <button class="btn btn-lg btn-primary btn-block" type="button" v-on:click="test('cmps5j')">Add</button>
            </ul>
        </div>
        </div>
    </div>    
    
</template>

<script>
function error2(err) {
  console.log("error");
}
import db from "./firebaseinit";
import firebase from "firebase";
var count = 0;

export default {
  name: "view-courses", 
  mounted: function() {
    this.getClasses();
  },
  data() {
    return {
      courses: [],
      classNames: ""
    };
  },
  methods: {
    test(classnum) {
      console.log("here");
      firebase.auth().onAuthStateChanged(user => {
        if (user) {
          var userID = user.uid;
          var checkclass = firebase.database().ref("users/" + userID);

          user = firebase.auth().currentUser;

          //check to see if the class is already added on to the list
          //if not, add the class into user's info
          //        add the user's info to under the class
          var ref = firebase.database().ref("classes/" + classnum);
          ref.once("value").then(function(snapshot) {
            var a = snapshot.exists(); // true
            var b = snapshot.child(user.uid).exists(); // true
            if (a == true) console.log("class exist");
            if (b == true) {
              console.log("user exist");//if class is already added to the user
              alert("You are already in the class");
            } else {
              checkclass.once("value").then(function(snapshot) {
                if (snapshot.child("class1").exists() != true) {
                  //check if class can be added to class1 spot
                  firebase
                    .database()
                    .ref("/users/" + userID + "/class1")
                    .update({
                      //add class to class1
                      class: classnum
                    });
                  firebase
                    .database()
                    .ref("/classes/" + classnum + "/" + userID)
                    .update({
                      user: userID
                    });
                  console.log("user added");
                  alert("Class added");
                } else if (snapshot.child("class2").exists() != true) {
                  //check if class can be added to class2 spot
                  firebase
                    .database()
                    .ref("/users/" + userID + "/class2")
                    .update({
                      //add class to class2
                      class: classnum
                    });
                  firebase
                    .database()
                    .ref("/classes/" + classnum + "/" + userID)
                    .update({
                      user: userID
                    });
                  console.log("user added");
                  alert("Class added");
                } else if (snapshot.child("class3").exists() != true) {
                  //check if class can be added to class3 spot
                  firebase
                    .database()
                    .ref("/users/" + userID + "/class3")
                    .update({
                      //add class to class3
                      class: classnum
                    });
                  firebase
                    .database()
                    .ref("/classes/" + classnum + "/" + userID)
                    .update({
                      user: userID
                    });
                  console.log("user added");
                  alert("Class added");
                }
                else{alert("cannot add more than 3 classes")};
              });
            } 
          });
        }
      });
    },

    getClasses: function() {
      //another way to add classes
      let courseref = firebase.database().ref("classes");
      var Keys = null;
      courseref.once("value", getdata);

      function getdata(data) {
        var classes = data.val();
        Keys = Object.keys(classes);
        console.log(Keys);

        var str = " <ul>";
        //for each classes(read from firebase), create its won button and information

        Keys.forEach(function(key) {
          var err = "abc";
          str +=
            "<li>" +
            key +
            "</li>" +
            '<button class="btn btn-lg btn-primary btn-block" type="button" v-on:click="test(' +
            key +
            ')">Add</button>';
        });

       // str += "</ul>";

        console.log(str);
        //document.getElementById("classest").innerHTML = str;
      }
      function error(err) {
        console.log("error");
      }
    },
    myFunction() {
      firebase
        .database()
        .ref()
        .on(
          "value",
          function(snapshot) {},
          function(error) {
            console.log("Error: " + error.code);
          }
        );
    },
    info() {
      firebase
        .database()
        .ref()
        .on(
          "value",
          function(snapshot) {},
          function(error) {
            console.log("Error: " + error.code);
          }
        );
    }
  },
  created() {
    firebase
      .database()
      .ref()
      .on(
        "value",
        function(snapshot) {
          var classNames = snapshot.child("classes").val();
        },
        function(error) {}
      );
  }
};
</script>

<style scoped>
ul {
  list-style-type: none;
}

#classes {
  background-color: #ffffff;
  border: 1px solid #cccccc;
  padding: 20px;
  margin-top: 10px;
}

.classSet {
  font-size: 30px;
}
</style>
