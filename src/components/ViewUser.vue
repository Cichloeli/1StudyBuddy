<template>
    <div id="view-users">
        <ul class="col">
            <li class="collection-header">
                <h4>Users</h4>
            </li>
            <li v-for="user in users" v-bind:key="user.id" 
                class="collection-item">
                {{user.name}}

                <router-link class="secondary-content"
                v-bind:to="{name: 'profile', params: {uid: user.uid}}">
                <i class="fa fa-eye"></i>
                </router-link>
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
            users: []
        }
    },
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
