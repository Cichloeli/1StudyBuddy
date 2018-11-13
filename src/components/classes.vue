<template>
    <div id="classes">
        <ul class="col">
        <li class="collection-header"><h4>Classes</h4></li>
        <li v-for="course in courses" v-bind:key="course.course_id" 
        class="collection-item">
            {{classNames}}
        </li>
        </ul>

        <div class="updateButton">
            <!-- <button class="btn btn-lg btn-primary btn-block" type="button" v-on:click="info()">Info</button> -->
        </div>
    </div>    
</template>

<script>
import db from './firebaseinit';
import firebase from 'firebase';
//myCar = Object();
export default {
    name: 'view-courses',//doesn't matter
    data () {
        return {
            courses: [],
            classNames,
            info : [],
        }
    },
    methods: {
        info(){
            firebase.database().ref().on("value", function(snapshot) {
            classNames= snapshot.child("classes").val();
            console.log(classNames);
            //console.log(snapshot.val());
            }, function (error) {
            console.log("Error: " + error.code);
            });
                
                
                
        }
    },
    created () {
        firebase.database().ref().on("value", function(snapshot) {
            var classNames= snapshot.child("classes").val();
            console.log(classNames);
            //console.log(snapshot.val());
            }, function (error) {
            console.log("Error: " + error.code);
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
    #classes {
        background-color: #FFFFFF;
        border: 1px solid #CCCCCC;
        padding: 20px;
        margin-top: 10px;
    }
</style>
