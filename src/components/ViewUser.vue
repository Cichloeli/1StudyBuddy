<template>
    <div id="view-users">
        <ul class="collection with-header"
        <li class="collection"><h4>Users</h4></li>
        <li v-for="user in users" v-bind:key="user.id" 
        class="collection-item">
            {{users.name}}
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
            employees: []
        }
    },
    created () {
        db.collection('users').get().
        then(querySnapshot => {
            querySnapshot.forEach(doc => {
                const data = {
                    'id': doc.id,
                    'user_id': doc.data().user_id,
                    'name': doc.data().name,
                    'major': doc.data().major,
                    'email': doc.data().email,
                    'classes': doc.data().classes
                }
                this.employees.push(data)
            })
        })
    }
}
</script>
