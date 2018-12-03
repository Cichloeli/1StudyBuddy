<template>
    <div>
        This is the Group page
        <button v-on:click="getClasses">display group</button>
        <router-link class="nav-link" to="/dashboard">Dashboard</router-link>

        <div class="container">
            <div class="group1">
                <h1 id="group1"></h1>
                <ul id ="groupList"></ul>
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
            getClasses: function() {
                let cloud = firebase.firestore();

                var The_user = firebase.auth().currentUser;
                var User_ID = The_user.uid;
                cloud.collection("users").where('uid', '==', User_ID).get().then(querySnapshot => {
                        querySnapshot.forEach(doc => {
                        var groups = doc.data().group
                        console.log(groups);
                        
                        var str = "<li>";
                        groups.forEach(function(group) {
                            str += "<li>" + group + "</li>"
                        });
                        str += "</li>";

                        document.getElementById("groupList").innerHTML = str;
                    })
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
    grid-template-rows: repeat(4, 300px);
    margin-top: 20px;
    grid-gap: 50px;
    justify-items: center;
}
.group1 {
    width: 250px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    background: #DCDCDC;
    color: #0059b3;
    text-transform: uppercase;
}
ul {
    list-style-type: none;
    font-size: 24px;
    display: grid;
    justify-items: left;
    grid-gap: 25px;
    
}

</style>