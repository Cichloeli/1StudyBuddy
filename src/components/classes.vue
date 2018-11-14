<template>
    <div id="classes">
        Classes
        <div class="container">
            <div id = "classest"></div>
        </div>
    </div>    
    
</template>

<script>
import db from './firebaseinit';
import firebase from 'firebase';
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
                courseref.once('value',getdata,error);

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

                    var str = '<ul>'
                    
                    Keys.forEach(function(key){
                        str += '<li>' + key + '</li>' + ' <button onclick="test()">Add</button>';
                    });

                    str += '</ul>'

                    // console.log(str)
                    document.getElementById("classest").innerHTML = str;

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
            //this.classNames= snapshot.child("classes").val();
            //console.log(classNames);
            //console.log(snapshot.val());
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
