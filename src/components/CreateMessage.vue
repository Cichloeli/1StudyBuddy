<template>
    <div class="container" style="margin-bottom: 30px">
        <form @submit.prevent="createMessage">
            <div class="form-group">
                <input type="text" name="message" class="form-control" placeholder="Enter message ..." v-model="newMessage">
                <p class="text-danger" v-if="errorText">{{ errorText }}</p>
            </div>

            <button class="btn btn-primary" type="submit" name="action">Submit</button>
        </form>
    </div>
</template>

<script>
    import firebase from 'firebase';
    const fb = firebase.firestore();

    export default {
        name: 'CreateMessage',
        props: ['name'],
        data(){
            return {
                newMessage: null,
                errorText: null
            }
        },
        //takes in input, adds name of the user, the time into database
        methods: {
            createMessage () {
                if (this.newMessage) {
                    localStorage.setItem('chatname' , JSON.stringify(this.name));
                    localStorage.setItem('message' , JSON.stringify(this.newMessage));
                    fb.collection('messages').add({
                        message: this.newMessage,
                        name: this.name,
                        timestamp: Date.now()
                    }).catch(err => {
                        console.log(err);
                    });
                    this.newMessage = null;
                    this.errorText = null;
                } else {
                    this.errorText = "A message must be entered!"
                }
            }
        }
    }
</script>
