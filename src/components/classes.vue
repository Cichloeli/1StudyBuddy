<template>
    <div id="classes">
        <ul class="col">
        <li class="collection-header"><h4>Classes</h4></li>
        <li v-for="course in courses" v-bind:key="course.course_id" 
        class="collection-item">
            {{course.name}}:{{course.About}}
        </li>
        </ul>
    </div>    
</template>

<script>
import realDB from 'firebase';

//import db from './firebaseinit';
export default {
    name: 'view-courses',//doesn't matter
    data () {
        return {
            courses: []
        }
    },
    created () {
        realDB.firestore().collection('courses').get().
        then(querySnapshot => {
            querySnapshot.forEach(doc => {
                const data = {
                    'name': doc.id,
                    'course_id': doc.data().course_id,
                    'About': doc.data().About,
                    //'email': doc.data().email,
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

