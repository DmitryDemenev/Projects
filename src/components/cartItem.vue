<template>
<div class="card-good">
    <div class="card-flex">
        <img class="card_img" :src="data.image" :alt="id">
        <div class="cart-width">          
            <p class="card_text">{{data.name}}</p>
            <p class="card_price"><span class="price-text">Price:</span> {{data.price}} $</p>
            <p class="card_price"><span class="price-text">Size: S</span></p>
            <p class="card_price"><span class="price-text">Color: Red</span></p>
            <p class="quantity">Quantity:<input
               class="quantity-number"
               type="number"
               min="1"
               v-model="quantity"
                  />
                </p>
        </div>
        <img class="cross" src="../assets/close.png" alt="close" v-on:click="removeFromCart(data)">
    </div>
</div>
</template>


<script>
export default {
  props: [
    'data'  
  ],
  methods: {
    removeFromCart(product) {
      this.$store.dispatch('removeFromCart', product.id)
    }
  },
  computed: {
    quantity: {
      get() {
        return this.data.quantity
      },
      set(value) {
        this.$store.dispatch('setQuantity', {id: this.data.id, quantity: value})
      }
    }
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
.cart-width{
    width: 260px;
}
.card-good{
  width: 650px;
  box-shadow: 12px 7px 26px 0px rgba(34, 60, 80, 0.48);

  }
.card-flex{
    display: flex;
    background-color: #F8F8F8;
    margin-bottom: 40px;
    justify-content: space-between;
}  
.card_img{
  width: 262px;
  height: 306px;
  }
.card_text{
  @include ff(normal,normal,24px,29px);
  padding-top: 25px;
  color: #000000;
  margin-bottom: 40px;
  }

.card_price{
  @include ff(normal,normal,22px,26px);
  margin-bottom: 10px;
  color: $color_pink;
  }
.price-text{
      color: #575757;
}
.quantity{
  @include ff(normal,normal,22px,26px);
  margin-bottom: 10px;
  color: #575757;
}
.cross{
    margin-right: 15px;
    width: 15px;
    height: 15px;
    margin-top: 20px;
}
.quantity-number{
    width: 30px;
    margin-left: 20px;
    height: 25px;
    text-align: center;
}


</style>