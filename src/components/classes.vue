<template>
    <div id="classes">
        <ul class="col">
        <li class="collection-header"><h4>Classes</h4></li>
        <li v-for="course in courses" v-bind:key="course.course_id" 
        class="collection-item">
            {{course.name}}:{{course.About}}
        </li>
        </ul>

        <div class="updateButton">
            <button class="btn btn-lg btn-primary btn-block" type="button" v-on:click="info()">Info</button>
        </div>
    </div>    
</template>

<script>
import db from './firebaseinit';
import firebase from 'firebase'
export default {
    name: 'view-courses',//doesn't matter
    data () {
        return {
            courses: []
        }
    },
    methods: {
        info(){
            firebase.database().ref().on("value", function(snapshot) {
            console.log(snapshot.val());
            }, function (error) {
            console.log("Error: " + error.code);
            });
                
                
                
        }
    },
    created () {
        firebase.firestore().collection('courses').get().
        then(querySnapshot => {
            querySnapshot.forEach(doc => {
                const data = {
                    'name': doc.id,
                    'course_id': doc.data().course_id,
                    'About': doc.data().About,
                    'email': doc.data().email,
                }
                this.courses.push(data)
            })
        })
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
