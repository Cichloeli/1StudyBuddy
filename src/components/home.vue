<template>
  <div class="home">
    <h1>{{title}}</h1>
    <div class="row">
      <div class="col-md-4 col-lg4" v-for="(data,index) in products" :key="index">
        <img :src="data.image" class="img-fluid">
         <a :href="goTodetail(index)" @click="doSomething" style="color: #0066cc">{{data.productTitle}}</a>
      </div>
    </div>
    <p>
      1StudyBuddy allows classmates to meet and form study groups. 
    </p>
    <div class="showing detail" v-for="(data,index) in details" :key="index">
      <div class = "showing details 0" id = "0" v-if = "index == 0">
        <p><b>{{data.detailSpace}}</b></p>
        <p><b>{{data.detailSpace}}</b></p>
        <p><b>{{data.detailTitle}}</b></p>
        <p><b>{{data.detailStuff1}}</b></p>
        <p><b>{{data.detailStuff2}}</b></p>
        <p><b>{{data.detailStuff3}}</b></p>
        <p><b>{{data.detailStuff4}}</b></p>
      </div>
      <div class = "showing details 1" id = "1" v-if = "index == 1">
        <p><b>{{data.detailSpace}}</b></p>
        <p><b>{{data.detailSpace}}</b></p>
        <p><b>{{data.detailTitle}}</b></p>
        <p><b>{{data.detailStuff1}}</b></p>
        <p><b>{{data.detailStuff2}}</b></p>
        <p><b>{{data.detailStuff3}}</b></p>
        <p><b>{{data.detailStuff4}}</b></p>
      </div>
      <div class = "showing details 2" id = "2" v-if = "index == 2">
        <p><b>{{data.detailSpace}}</b></p>
        <p><b>{{data.detailSpace}}</b></p>
        <p><b>{{data.detailTitle}}</b></p>
        <p><b>{{data.detailStuff1}}</b></p>
        <p><b>{{data.detailStuff2}}</b></p>
        <p><b>{{data.detailStuff3}}</b></p>
        <p><b>{{data.detailStuff4}}</b></p>
      </div>
    </div>
  </div>
  
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      title: '1StudyBuddy',
      products:[
      {
        productTitle:"Connect",
        image       : require('../assets/images/product1.jpg'),
        productId:1
      },
      {
        productTitle:"Learn",
        image       : require('../assets/images/product2.jpg'),
        productId:2
      },
      {
        productTitle:"Excel",
        image       : require('../assets/images/product3.jpg'),
        productId:3
      }/* ,
      {
        productTitle:"EFG",
        image       : require('../assets/images/product4.png'),
        productId:4
      },
      {
        productTitle:"MLI",
        image       : require('../assets/images/product5.png'),
        productId:5
      },
      {
        productTitle:"Banans",
        image       : require('../assets/images/product6.png'),
        productId:6
      } */
      ],
      details:[
        {
          detailSpace: "",
          detailTitle: "connect",
          detailStuff1: "C sentence1",
          detailStuff2: "C sentence2",
          detailStuff3: "C sentence3",
          detailStuff4: "C sentence4"
        },
        {
          detailSpace: "",
          detailTitle: "learn",
          detailStuff1: "L sentence1",
          detailStuff2: "L sentence2",
          detailStuff3: "L sentence3",
          detailStuff4: "L sentence4"
        },
        {
          detailSpace: "",
          detailTitle: "excel",
          detailStuff1: "E sentence1",
          detailStuff2: "E sentence2",
          detailStuff3: "E sentence3",
          detailStuff4: "E sentence4"
        }
      ]
    }
  },
  methods:{
  goTodetail(prodId) {
    return "#"+prodId
  }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.row img{
  max-height: 15em;
  width: 100%;

}
.row h3{
  cursor:pointer;
}
p b{
		color:#e68a00;
		display:inline-block;
		padding:5px 10px;
		/*background-color:#c4d7e0;*/
		border-radius:2px;
		text-transform:uppercase;
		font-size:18px;
    margin: 0 auto;
    position:relative;
    top: 50%;
	}

</style>

