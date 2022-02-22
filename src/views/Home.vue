<template>
  <div class="home">
  <Header />
  <div class="top">
    <div class="back container">
      <div class="man_photo"><img class="man_img" src="../assets/top_man2.png" alt="man"></div>
      <div class="top_logo">
        <div class="top_box"></div>
        <div>
        <span class="brand">THE BRAND<br></span>
        <span class="luxery">OF LUXERIOUS<span class="fashion"> FASHION</span></span>
        </div>
      </div>
    </div>
  </div>
  <div class="content container">
    <div class="content_up">
        <div class="woman">
            <div class="content_text">
                <p class="content_style">30% OFF<br><span class="pink_text">FOR WOMEN</span></p></div>
            <img class="position_picture" src="../assets/woman.jpg" alt="woman">
        </div>
        <div class="man">
            <div class="content_text"><p class="content_style">HOT DEAL<br><span class="pink_text">FOR MEN</span></p></div>
            <img class="position_picture" src="../assets/man.jpg" alt="man">
        </div>
        <div class="boy">
            <div class="content_text"><p class="content_style">NEW ARRIVALS<br><span class="pink_text">FOR KIDS</span></p></div>
            <img class="position_picture" src="../assets/boy.jpg" alt="boy">
        </div>
    </div>
    <div class="content_down">
        <div class="shoes">
            <div class="content_text"><p class="content_style">LUXIROUS & TRENDY<br><span class="pink_text">ACCESORIES</span></p></div>
            <img class="position_picture" src="../assets/shoes.jpg" alt="shoes">
        </div>
    </div>
  </div>
  <h3 class= "h3_cards">Fetured Items</h3>
  <p class="p_cards">Shop for items based on what we featured in this week</p>
  <section class="catalog container">
    <card v-for="item of catalog" v-bind:key="item.id" v-bind:data="item">
    </card>
  </section>
  
<div class="buttog container">Browse All Product</div>
  <Footer />
  </div>
</template>

<script>
import Header from '../components/Header.vue';
import Card from '../components/Card.vue';
import Footer from '../components/Footer.vue';

export default {
  components: {
    Card,
    Header,
    Footer,
    
  },
  computed: {
    catalog() {
      return this.$store.getters.getCatalog
    }
  },
  
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
@mixin ff($fs,$fw,$fsz,$fh){
  font-family: Lato, sans-serif;
  font-style: $fs;
  font-weight: $fw;
  font-size: $fsz;
  line-height: $fh;
}

.catalog{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 18px;
  margin-bottom: 48px;
}
.p_catalog{
  @include ff(normal,normal,14px,17px);
  color: #9f9f9f;
  text-align: center;
  }
.top {
  background-color: #f1e4e6;
}

.back{
  display: flex;
  justify-content: space-between;

}

.header {
  background-color: #f3d4d9; }

.top_logo {
  display: flex;
  width: 50%;
  margin-top: 290px;
  height: 93px; }

.brand {
  font-family: Lato, sans-serif;
  font-style: normal;
  font-weight: 900;
  font-size: 48px;
  line-height: 58px;
  color: #222222;
  text-align: left; }

.luxery {
  font-family: Lato, sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 38px;
  letter-spacing: 0;
  text-align: left; }

.fashion {
  color: #f16d7f; }

.top_box {
  background-color: #f16d7f;
  border: 1px solid #f16d7f;
  width: 12px;
  margin-right: 16px; }

.man_photo {
  width: 50%; }

.content {
  margin-top: 65px; }

.content_up {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
      -ms-flex-pack: justify;
          justify-content: space-between; }

.content_down {
  margin-top: 30px; }

.woman {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center; }

.man {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center; }

.boy {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center; }

.shoes {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center; }

.content_text {
  position: absolute; }

.content_style {
  font-family: Lato, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  color: #ffffff; }

.pink_text {
  font-family: Lato, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 28px;
  text-align: center;
  color: #f16d7f; }
.h3_cards {
  font-family: Lato, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 30px;
  line-height: 36px;
  color: #222222;
  text-align: center;
  margin-top: 96px; }

.p_cards {
  font-family: Lato, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 17px;
  color: #9f9f9f;
  text-align: center; }
.buttog {
  padding: 14px 38px;
  border: 1px solid #f16d7f;
  justify-self: center;
  margin-top: 48px;
  font-family: Lato, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  line-height: 19px;
  color: #f16d7f;
  width: 134px; }

.buttog:hover {
  background-color: #f16d7f;
  color: #ffffff; }
</style>
