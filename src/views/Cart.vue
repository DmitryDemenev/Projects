<template>
<div class="cart">
  <Header />
  <div class="cart_flex container">
  <div class="cart_item">
    <cartItem v-for="item of cart" v-bind:key="item.id" v-bind:data="item"></cartItem>
  </div>
  <order-form></order-form>
  </div>
  
  <footerDown />
</div> 
</template>

<script>
import OrderForm from '../components/OrderForm.vue';
import Header from '../components/Header.vue';
import cartItem from '../components/cartItem.vue';
import footerDown from '../components/footerDown.vue';
export default {
  components: {
    cartItem,
    Header,
    footerDown,
    OrderForm

  },
  computed: {
    cart() {
      return this.$store.getters.getCart
    }
  }



}
</script>

<style lang="scss">
*{
  margin: 0;
  padding: 0;
}

.container{
  max-width: 1140px;
  margin: 0 auto;
}
.cart_flex {
  display: flex;
  justify-content: space-between;
}

.cart_item{
  margin-top: 96px;
}
</style>

