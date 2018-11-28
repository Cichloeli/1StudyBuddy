<template>
    <div>
        
        
        <!-- <router-link class="nav-link" to="/dashboard">Dashboard</router-link> -->
        <button class="btn btn-primary" v-on:click="delClass1()" >Remove class 1</button>
        <button class="btn btn-primary" v-on:click="delClass2()" >Remove class 2</button>
        <button class="btn btn-primary" v-on:click="delClass3()" >Remove class 3</button>
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
        data() {

            return {
                classOne:null,
                classTwo:null,
                classThree:null,

            };

            firstName: 'eric';
            lastName: 'dunbar';
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
            
            getClasses: function() {
                var userId = firebase.auth().currentUser.uid;
                return firebase.database().ref('/users/' + userId).once('value').then(function(snapshot) {
                    
                    if(snapshot.child("class1").exists() == true){
                        console.log("class1 is true");
                        var class1 = (snapshot.val() && snapshot.val().class1.class);
                        document.getElementById("class1").innerHTML = class1;
                    }
                    else {
                        console.log("no class1");
                        var class1 = 'No Class';
                        document.getElementById("class1").innerHTML = class1;
                    }

                    if(snapshot.child("class2").exists() == true){
                        console.log("class2 is true");
                        var class2 = (snapshot.val() && snapshot.val().class2.class);
                        document.getElementById("class2").innerHTML = class2;
                    }
                    else {
                         console.log("no class2");
                        var class2 = 'No Class';
                        document.getElementById("class2").innerHTML = class2;
                    }
                    if(snapshot.child("class3").exists() == true){
                        console.log("class3 is true");
                        var class3 = (snapshot.val() && snapshot.val().class3.class);
                        document.getElementById("class3").innerHTML = class3;
                    }
                    else {
                        console.log("no class3");
                        var class3 = 'No Class';
                        document.getElementById("class3").innerHTML = class3;
                    }

                });
            },
            delClass1() {
                var userId = firebase.auth().currentUser.uid;
                var ref = firebase.database().ref('/users/' + userId + '/class1');
            

                firebase.database().ref('/users/' + userId + '/class1').once('value').then(function(snapshot) {
                var name1 = snapshot.val().class;
                console.log(name1);

                    var classRef = firebase.database().ref("/classes/" + name1 + "/" + userId);
                    classRef.once('value').then(function(snapshot) {
                    snapshot.forEach(function(childSnapshot) {
                    //remove each child

                    classRef.child(childSnapshot.key).remove();
                    console.log("remove user from classes");
                    });
                    });
                
                })

                ref.once('value').then(function(snapshot) {
                snapshot.forEach(function(childSnapshot) {
                //remove each child

                ref.child(childSnapshot.key).remove();
                console.log("remove class from user");
                });
                });

                alert("class removed")
                this.$router.go(0);

            },

            delClass2() {
                var userId = firebase.auth().currentUser.uid;
                var ref = firebase.database().ref('/users/' + userId + '/class2');
            

                firebase.database().ref('/users/' + userId + '/class2').once('value').then(function(snapshot) {
                var name2 = snapshot.val().class;
                console.log(name2);

                    var classRef = firebase.database().ref("/classes/" + name2 + "/" + userId);
                    classRef.once('value').then(function(snapshot) {
                    snapshot.forEach(function(childSnapshot) {
                    //remove each child

                    classRef.child(childSnapshot.key).remove();
                    console.log("remove user from classes");
                    });
                    });
                
                })

                ref.once('value').then(function(snapshot) {
                snapshot.forEach(function(childSnapshot) {
                //remove each child

                ref.child(childSnapshot.key).remove();
                console.log("remove class from user");
                });
                });

                alert("class removed")
                this.$router.go(0);

            },

            delClass3() {
                var userId = firebase.auth().currentUser.uid;
                var ref = firebase.database().ref('/users/' + userId + '/class3');
            

                firebase.database().ref('/users/' + userId + '/class3').once('value').then(function(snapshot) {
                var name3 = snapshot.val().class;
                console.log(name3);

                    var classRef = firebase.database().ref("/classes/" + name3 + "/" + userId);
                    classRef.once('value').then(function(snapshot) {
                    snapshot.forEach(function(childSnapshot) {
                    //remove each child

                    classRef.child(childSnapshot.key).remove();
                    console.log("remove user from classes");
                    });
                    });
                
                })

                ref.once('value').then(function(snapshot) {
                snapshot.forEach(function(childSnapshot) {
                //remove each child

                ref.child(childSnapshot.key).remove();
                console.log("remove class from user");
                });
                });

                alert("class removed")
                this.$router.go(0);
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