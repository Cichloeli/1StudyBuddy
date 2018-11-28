<template>
    <div>
        This is the Group page
        <button v-on:click="getClasses">display group</button>
        <router-link class="nav-link" to="/dashboard">Dashboard</router-link>

        <div class="container">
            <div class="class1">
                <h1 id="class1"></h1>
            </div>
        </div>
    </div>
</template>

<script>
    import firebase from 'firebase'
    export default {
        name: 'groups',
        mounted: function() {
            this.getClasses()
        },
        data: {
            firstName: 'eric',
            lastName: 'dunbar'
        },
        methods: {
            create() {
                firebase.auth().onAuthStateChanged((user) => {
                    if (user) {
                        var userID = user.uid;
                        firebase.database().ref('users/' + userID).set({
                            username: "eric",
                            email: "test@gmail",
                        });
                    }
                });
            },
            add() {
                firebase.auth().onAuthStateChanged((user) => {
                    if (user) {
                        var userID = user.uid;
                        firebase.database().ref('/users/' + userID).update({
                            class1: "cmps101"
                        })
                    }
                });
            },
            getClasses: function() {
                


                // var userId = firebase.auth().currentUser.uid;
                // return firebase.database().ref('classes/cmps101/groups').once('value').then(function(snapshot) {
                //     if (snapshot.val() != null) {
                //         document.getElementById("class1").innerHTML = snapshot.val;
                //     }  
                //     else {
                //         document.getElementById("class1").innerHTML = "No Group";
                //     }
                //     // var class1 = (snapshot.val() && snapshot.val().class1) || 'No Class';
                //     // console.log(class1);
                    
                // });
            }
        }
    }
</script>

<style scoped>

.container {
    display: grid;
    grid-template-areas: "one"
                         "two"
                         "three";
    grid-template-rows: repeat(4, 300px);
    margin-top: 20px;
    grid-gap: 50px;
    justify-items: center;
}
.class1 {
    width: 250px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    background: #DCDCDC;
    color: #0059b3;
    text-transform: uppercase;
}

</style>