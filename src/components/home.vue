<template>
    <div>
        This is the home page
        <button v-on:click="create">create user</button>
        <button v-on:click="add">Add to class</button>
        <button v-on:click="getClasses">display classes</button>
        <router-link class="nav-link" to="/dashboard">Dashboard</router-link>

        <div class="container">
            <div class="class1">
                <h1 id="class1"></h1>
            </div>
            <div class="class2">
                <h1 id="class2"></h1>
            </div>
            <div class="class3">
                <h1 id="class3"></h1>
            </div>
        </div>
    </div>
</template>

<script>
    import firebase from 'firebase'
    export default {
        name: 'home',
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
                var userId = firebase.auth().currentUser.uid;
                return firebase.database().ref('/users/' + userId).once('value').then(function(snapshot) {
                    var class1 = (snapshot.val() && snapshot.val().class1) || 'No Class';
                    document.getElementById("class1").innerHTML = class1;

                    var class2 = (snapshot.val() && snapshot.val().class2) || 'No Class';
                    document.getElementById("class2").innerHTML = class2;

                    var class3 = (snapshot.val() && snapshot.val().class3) || 'No Class';
                    document.getElementById("class3").innerHTML = class3;
                });
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
    grid-template-rows: repeat(4, 150px);
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
.class2 {
    width: 250px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    background: #DCDCDC;
    color: #0059b3;
    text-transform: uppercase;
}
.class3 {
    width: 250px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    background: #DCDCDC;
    color: #0059b3;
    text-transform: uppercase;
}

</style>