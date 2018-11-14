<template>
  <div class="home">
    <div class="containerOne">
      <div class="header">
        1StudyBuddy
      </div>
      <div class="icon-container">
        <div class="icons">
          <a href="#containerTwo">
            <img src="../assets/icons/connect.svg" alt="Connect" class="connect-icon">
          </a>
          <div class="description">
            Connect
          </div>
        </div>
        <div class="icons">
          <a href="#containerThree">
            <img src="../assets/icons/growth.svg" alt="Study" class="study-icon">
          </a>
          <div class="description">
            Study
          </div>
        </div>
        <div class="icons">
          <a href="#containerFour">
            <img src="../assets/icons/idea.svg" alt="Excel" class="excel-icon"> 
          </a>
          <div class="description">
            Excel
          </div>
        </div>
      </div>
    </div>
    <div class="containerTwo" id="containerTwo">
      <div class="icon-header">
        Connect
        <div class="icon-description">
          1StudyBuddy lets you connect with other students in your class. Letting you enroll in your current classes
          1StuddyBuddy matches you together with real people in your current class allowing you to connect with them and form study groups.
        </div>
      </div>
    </div>
    <div class="containerThree" id="containerThree">
      <div class="icon-header">
        Study
        <div class="icon-description">
          1StudyBuddy gives you the proper tools to study. Never again will you not have another classmate there for questions. Instead of 
          being in a class where you know no one, you will be in a class where you can easily ask questions and get them answered by your
          new study mates.
        </div>
      </div>
    </div>
    <div class="containerFour" id="containerFour">
      <div class="icon-header">
        Excel
        <div class="icon-description">
          Now that you have unlimited help at your finger tips nothing is holding you back from being the best student you can be.
          You will start to excel in all your classes becoming a master Study Buddy.
        </div>
      </div>
    </div>
  </div>
  
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.home {
  display: grid;
  grid-template-areas: "icons"
                       "connect"
                       "study"
                       "excel"
                       "footer";
  grid-template-rows: repeat(4, 500px);
          
}
.containerOne {
  grid-area: icons;
}
.containerTwo {
  grid-area: connect;
}
.containerThree {
  grid-area: study;
}
.containerFour {
  grid-area: excel;
}
.header {
  font-size: 64px;
}
.description {
  margin-top: 15px;
  font-size: 24px;
  font-weight: bold;
}
.icon-container {
  display: grid;
  grid-gap: 50px;
  grid-template-columns: repeat(3, 1fr);
  margin-top: 100px;
}
.connect-icon {
  width: 100px;
  height: 100px;
}
.study-icon {
  width: 100px;
  height: 100px;
}
.excel-icon {
  width: 100px;
  height: 100px;
}
.connect-icon:hover {
  width: 150px;
  height: 150px;
  cursor: pointer;
}
.study-icon:hover {
  width: 150px;
  height: 150px;
  cursor: pointer;
}
.excel-icon:hover {
  width: 150px;
  height: 150px;
  cursor: pointer;
}
.icon-header {
  color: #e68a00;
  font-size: 64px;
  font-weight: bold;
}
.icon-description {
  color: black;
  font-size: 24px;
  font-weight: normal;
  margin-top: 35px;
}

</style>

