<template>
<div class="card">
  <div class="add_button" v-on:click="onBuyBtnClk(data)">
    <img src="../assets/cart.png" alt="cart">
    <div class="add_text">Add to Cart</div>
  </div>
  <img class="card_img" :src="data.image" :alt="id">                
  <p class="card_text">{{data.name}}</p>
  <p class="card_description">{{data.description}}</p>
  <p class="card_price">{{data.price}} $</p>
</div>
</template>


<script>
export default {
  props: [
    'data'  
  ],
  methods: {
    onBuyBtnClk(product) {
      this.$store.dispatch('addToCart', product)
    },
  },
}
</script>


<style scoped lang="scss">
$color_pink: #ec0000;

@mixin ff($fs,$fw,$fsz,$fh){
  font-family: Lato, sans-serif;
  font-style: $fs;
  font-weight: $fw;
  font-size: $fsz;
  line-height: $fh;
}
.card{
  margin-top: 30px;
  background-color: #F8F8F8;
  }
.card_img{
  width: 100%;
  }
.card_text{
  @include ff(normal,normal,13px,16px);
  padding-top: 25px;
  color: #000000;
  margin-left: 18px;
  }
.card_description{
  @include ff(normal,300,14px,17px);
  color: #5d5d5d;
  margin-top: 12px;
  margin-left: 18px;
  width: 315px;
  }
.card_price{
  @include ff(normal,normal,16px,19px);
  margin-top: 18px;
  margin-bottom: 20px;
  margin-left: 18px;
  color: $color_pink;
  }
  .add_button{
  position: absolute;
  border: 1px solid #FFFFFF;
  display: none;
  margin-top: 188px;
  align-items: center;
  padding: 8px;
  justify-content: center;
  margin-left: 121px;
  }

.add_button:hover{
  box-shadow: 0px 4px 22px 0px white;
  text-shadow: 2px 2px 2px white;
  }
.card:hover .add_button{
  display: flex;
}
.add_text{
  @include ff(normal,400,14px,17px);
  color: #FFFFFF;
  margin-left: 8px;
}
</style>
