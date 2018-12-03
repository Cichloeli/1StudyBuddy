// View Users creates a list of all of the users registered in the website and 
// clicking the icon allows the user to see that individual's profile page
<template>
    <div id="ViewUsers">
        <ul class="col">
            <li class="collection-header">
                <h4>Users</h4>
            </li>
            <!-- get each user name and display it -->
            <li v-for="user in users" v-bind:key="user.uid" 
                class="collection-item">
                {{user.name}}

                <router-link class="secondary-content"
                <!-- link to the user profile page and send uid as a parameter to profile_other page -->
                v-bind:to="{name: 'profile_other', params: {uid: user.uid}}">
                <i class="fa fa-eye"></i>
                </router-link>
            </li>
        </ul>
    </div>    
</template>

<script>
import db from './firebaseinit'
export default {
    name: 'ViewUsers',
    data () {
        return {
            users: []
        }
    },
    // get a snapshot of each user information from the database, some fields are grabbed in case we need to use it
    created () {
        db.collection('users').get().
        then(querySnapshot => {
            querySnapshot.forEach(doc => {
                const data = {
                    'id': doc.id,
                    'uid': doc.data().uid,
                    'name': doc.data().name,
                    'major': doc.data().major,
                    'email': doc.data().email,
                    'classes': doc.data().classes
                }
                this.users.push(data)
            })
        })
    }
}
</script>

<style scoped>
ul {
  list-style-type: none;
}

</style>
