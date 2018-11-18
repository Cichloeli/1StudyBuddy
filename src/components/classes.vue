<template>
    <div id="classes">
        Classes
        <div class="container">
            <div id><ul><li>cmps101</li> <button class="btn btn-lg btn-primary btn-block" type="button" v-on:click="test('cmps101')">Add</button>
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
 function error2(err){
    console.log("error");
    }
import db from './firebaseinit';
import firebase from 'firebase';
var count=0;
//myCar = Object();
export default {
    name: 'view-courses',//doesn't matter
    mounted: function() {
            this.getClasses()
        },
    data () {
        return {
            courses: [],
            //info : [],
            classNames: '',
        }
    },
    methods: {
        test(classnum) {
                    console.log("here");
                    firebase.auth().onAuthStateChanged((user) => {
                        if (user) {
                            var userID = user.uid;
                            //console.log((firebase.database().ref('/classes/' + classnum +'/' +userID)).user)
                            
                            // firebase.database().ref('/users/' + userID +'/class' + count).update({
                            //     class: classnum
                            // });
                            // firebase.database().ref('/classes/' + classnum +'/' +userID).update({
                            //     user: userID
                            // });

                            user = firebase.auth().currentUser;
                    
                            var ref = firebase.database().ref("classes/"+classnum);
                            ref.once("value")
                            .then(function(snapshot) {
                            var a = snapshot.exists();  // true
                            var b = snapshot.child(user.uid).exists(); // true
                            if (a == true) 
                                console.log("class exist");
                            if (b == true) 
                                console.log("user exist");
                                else{
                                    firebase.database().ref('/users/' + userID +'/class' + count).update({
                                    class: classnum
                                    });
                                    firebase.database().ref('/classes/' + classnum +'/' +userID).update({
                                    user: userID
                                     });
                                    console.log("user added");
                                }
                             });
                //             return firebase.database().ref('/classes/' + classnum).once('value').then(function(snapshot) {
                //                 // var class1 = (snapshot.val() && snapshot.val().class1) || 'No Class';
                //                 // document.getElementById("class1").innerHTML = class1.class;
                //                 //napshot.userID.user.val()
                //                 var check = (snapshot.val() && snapshot.val().userID)
                //                 check.user
                //                 console.log(snapshot.val())
                // });
                            
                            // var test = {};
                            // test[classnum]='';
                            // firebase.database().ref('/classes/' + classnum).update({
                            //     test
                            // });
                        }
                    });
                    count = count+1
                },
        add1() {    
            console.log("here");
            
            
        },
        // add() {
        //     console.log("here");
        //     firebase.auth().onAuthStateChanged((user) => {
        //         if (user) {
        //             var userID = user.uid;
        //             firebase.database().ref('/users/' + userID).update({
        //                 class1: classnum
        //             })
        //         }
        //     });
        // },

        getClasses: function() {
                let courseref = firebase.database().ref('classes');
                var Keys = null;
                courseref.once('value',getdata);

                function test() {
                    console.log("here");
                    firebase.auth().onAuthStateChanged((user) => {
                        if (user) {
                            var userID = user.uid;
                            firebase.database().ref('/users/' + userID).update({
                                class1: classnum
                            })
                        }
                    });
                }

                function getdata(data){
                    var classes = data.val();
                    Keys = Object.keys(classes)
                    console.log(Keys);

                    var str = ' <ul>';
                    //var funct1 = '"'+'add1()'+'"';
                    
                    Keys.forEach(function(key){
                        var err = 'abc';
                        str += '<li>' + key + '</li>' + '<button class="btn btn-lg btn-primary btn-block" type="button" v-on:click="test(' + key +')">Add</button>';
                    });

                    str += '</ul>'

                    console.log(str)
                    //document.getElementById("classest").innerHTML = str;

                };
                function error(err){
                    console.log("error");
                }

                

                

                // listItems=Keys.reduce((result,item) => {
                //     result += `<li>${item}</li>`;
                //     return result
                // },'');
                // console.log(listItems);
                // resultElement = document.getElementById('classes');
                // resultElement.innerHTML = listItems;

                
            },
        myFunction(){
            firebase.database().ref().on("value", function(snapshot) {
            //this.classNames= snapshot.child("classes").val();
            //console.log(classNames);
            //console.log(snapshot.val());
            }, function (error) {
            console.log("Error: " + error.code);
            });
                
                
                
        },
        info(){
            firebase.database().ref().on("value", function(snapshot) {
            }, function (error) {
            console.log("Error: " + error.code);
            });
                
                
                
        }
    },
    created () {
        firebase.database().ref().on("value", function(snapshot) {
            var classNames= snapshot.child("classes").val();
            //console.log(classNames);
            //console.log(snapshot.val());
            }, function (error) {
            //console.log("Error: " + error.code);
            //console.log(snapshot.val());
            //myCar = snapshot.val();
            //comment=snapshot.val().get('classes').val();
            //const timestamp = snapshot.get('classes');
            //comment = timestamp.toDate();
            //info = snapshot.val();
           // console.log(myCar);
           
            

             });




        //var classes= new Firebase('https://studybuddy-memo.firebaseio.com/classes');
            /* var returnArr = [];

    
         firebase.database().ref().on("value", function(snapshot) {
            snapshot.forEach(function(childSnapshot) {
            var item = childSnapshot.val();
            item.key = childSnapshot.key;

            returnArr.push(item);
    });
        },  */
        //firebase.firestore().collection('courses').get().
        /* then(querySnapshot => {
            querySnapshot.forEach(doc => {
                const data = {
                    'name': doc.key,
                    //'course_id': doc.data().course_id,
                    'About': doc.data().information,
                    'email': doc.data().email,
                }
                this.courses.push(data)
            })
        }) */
    }
}
</script>

<style scoped>
    #li {
        list-style-type: none;
    }

    #classes {
        background-color: #FFFFFF;
        border: 1px solid #CCCCCC;
        padding: 20px;
        margin-top: 10px;
    }
</style>
