<template>
  <div class="home">
    <h1>{{title}}</h1>
    <div class="row">
      <div class="col-md-4 col-lg4" v-for="(data,index) in products" :key="index">
        <img :src="data.image" class="img-fluid">
         <h3 @click="goTodetail(data.productId)" >{{data.productTitle}}</h3>
      </div>
    </div>
    <p>
      1StudyBuddy allows classmates to meet and form study groups. 
    </p>
    <div class="showing detail" v-for="(data,index) in details" :key="index">
      <p><b>{{data.detailTitle}}</b></p>
      <p><b>{{data.detailStuff}}</b></p>
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
          detailTitle: "connect",
          detailStuff: "default connect"
        },
        {
          detailTitle: "learn",
          detailStuff: "default learn"
        },
        {
          detailTitle: "excel",
          detailStuff: "default excel"
        }
      ]
    }
  },
  methods:{
  goTodetail(prodId) {
    let proId=prodId
    this.$router.push({name:'details',params:{Pid:proId}})
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
		color:#ffffff;
		display:inline-block;
		padding:5px 10px;
		background-color:#c4d7e0;
		border-radius:2px;
		text-transform:uppercase;
		font-size:18px;
	}

</style>

