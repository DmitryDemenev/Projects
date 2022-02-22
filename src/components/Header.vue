<template>
<div class="header">
    <div class="menu_color">
        <div class="menu container">
            <div class="menu_left">
            <router-link to="/"><img src="../assets/logo.svg" alt="logo"></router-link>
            </div>
            <div class="menu_right">
            <div class="m_b"><a class="menu_button" href="#"><img src="../assets/menu.svg" alt="menu"></a>
                <div class="mega-box">
                <h3 class="heading_menu">menu</h3>
                    <p class= "menu_name" href="catalog.html">Man</p>
                    <router-link to="/catalog">
                    <p class= "menu_card" v-bind:key= "id" v-for="menuCard,id of menuCards">{{menuCard.name}}</p>
                    </router-link>
                    <p class= "menu_name" href="catalog.html">Woman</p>
                    <router-link to="/catalog">
                    <p class= "menu_card" v-bind:key= "id" v-for="menuCard,id of menuCards">{{menuCard.name}}</p>
                    </router-link>
                    <p class= "menu_name" href="catalog.html">Kids</p>
                    <router-link to="/catalog">
                    <p class= "menu_card" v-bind:key= "id" v-for="menuCard,id of menuCards">{{menuCard.name}}</p>
                    </router-link>
                </div> 
            </div>
            <div class="a_b"><img src="../assets/account.svg" alt="account"></div>
            <div class="bask"><router-link to="/cart"><img src="../assets/basket.svg" alt="basket">
            <span class="header-col-right__count-product">{{ cartCount }}</span></router-link></div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    data(){
        return{
            menuCards:[
            {id:'id',name:'Accessories'},
            {id:'id',name:'Bags'},
            {id:'id',name:'Denim'},
            {id:'id',name:'T-Shirts'},
            {id:'id',name:'Polos'},
            ]
           
        }
    },
    computed: {
    cartCount() {
      return this.$store.getters.getCartCount
      }
    }

}
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0; }
.container {
  max-width: 1140px;
  margin: 0 auto; }

.menu_color {
  background-color: #222222; }

.menu {
  background-color: #222222;
  height: 75px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
      -ms-flex-pack: justify;
          justify-content: space-between; }

.menu_left {
  -ms-flex-item-align: center;
      align-self: center; }

.menu_right {
  display: flex;
  justify-content: space-between;
  width: 180px;
  padding-top: 20px;
}

.m_b {
  width: 40px;
  padding-top: 5px;
  position: relative;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
      -ms-flex-direction: column;
          flex-direction: column; }

.m_b:hover .mega-box {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex; }

.search {
  margin-left: 41px; }

.menu_button {
  margin-right: 33px; }

.account {
  margin-right: 33px; }

.mega-box {
  width: 232px;
  position: absolute;
  padding-top: 20px;
  background: #ffffff;
  margin-top: 23px;
  display: none;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
      -ms-flex-direction: column;
          flex-direction: column;
  padding-left: 33px;
  padding-bottom: 27px; }

.menu_name {
  padding-top: 10px;
  text-transform: uppercase;
  font-family: Lato, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 17px;
  color: #f16d7f;
  list-style-type: none;
  text-decoration: none; }

.menu_card {
  font-family: Lato, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 17px;
  color: #6f6e6e;
  text-decoration: none;
  padding-top: 12px;
  padding-left: 20px; }

.menu_card:hover {
  color: #f16d7f; }

.heading_menu {
  text-transform: uppercase;
  font-family: Lato, sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 17px;
  color: #000000; }

.header-col-right__count-product {
  border-radius: 50%;
  padding: 4px 8px;
  background-color: #f16d7f;
  z-index: 10;
  color: white;
  font-size: 12px;
  line-height: 14px;
}


</style>