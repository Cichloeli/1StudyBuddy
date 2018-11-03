<template>
    <div id="profile">
        <div class="banner">
            <img :src="header" />
        </div>
        <div class="title">
            <h1>Profile</h1>
        </div>
        
        <div class="info">
            <h6>Name:</h6>
            <div class="infoName">
                {{ name }}
                <input type="text" name="nameIn" v-model="input.nameIn" placeholder="Name" />
            </div>

            <h6>Classes:</h6>
            <div class="infoClasses">
                {{ classes }}
                <input type="text" name="classesIn" v-model="input.classesIn" placeholder="Classes" />
            </div>
                
            <h6>Major:</h6>   
            <div class="infoMajor">
                {{ major }}
                <input type="text" name="majorIn" v-model="input.majorIn" placeholder="Major" />
            </div>           
                      
            <h6>Email:</h6>
            <div class="infoEmail">
                {{ email }}
                <input type="text" name="emailIn" v-model="input.emailIn" placeholder="Email" />
            </div>
                     
            <h6>About:</h6>
            <div class="infoAbout">
                {{ about }}
                <input type="text" name="aboutIn" v-model="input.aboutIn" placeholder="About" />
            </div>               
                    
    
        
        </div>
        
        <div class="updateButton">
            <button class="btn btn-lg btn-primary btn-block" type="button" v-on:click="update()">Update</button>
        </div>
        
    </div>
    
</template>

<script>
export default {
  name: "profile",

  data() {
    return {
      input: {
        nameIn: "",
        classesIn: "",
        majorIn: "",
        aboutIn: "",
        emailIn: ""
      },
      name: "John",
      classes: "cmps115",
      major: "cs",
      about: "student at ucsc",
      email: "@ucsc.edu",
      header: require("../assets/images/p2.jpg"),
    };
  },

  methods: {
    update() {
      this.name = this.input.nameIn;
    }
  }
};
</script>

<style scoped>
#profile {

  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  
  background-color: #ffffff;
  border: 1px solid #cccccc;
  padding: 20px;
  margin-top: 10px;
  
}
.title {
  text-align: left;
}

.info {
  text-align: left;
  padding-right: 300px;
}
.infoName input {
    text-align: center;
    margin-left: 200px;

}
.infoAbout input {
    padding-bottom: 200px;
    padding-right: 200px;
}
.updateButton{
    max-width: 150px;

}
</style>