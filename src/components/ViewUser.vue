<template>
    <div id="view-users">
        <ul class="col">
            <li class="collection-header"><h4>Users</h4></li>
            <li v-for="user in users" v-bind:key="user.user_id" 
            class="collection-item">
            {{user.name}}:{{user.major}}

            {{email}}
         
        </li>
        </ul>
    </div>    
</template>


<script>
import db from './firebaseinit'

export default {
    name: 'view-users',
    data () {
        return {
            users: [],
            
        }
    },
    created () {
        db.collection('users').get().then(querySnapshot => {
            querySnapshot.forEach(doc => {
                const data = {
                    'id': doc.id,
                    'user_id': doc.data().user_id,
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
