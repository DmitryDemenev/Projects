<template>
  <div class="showcase">
  <Header />
  <section class="catalog container">
    <card v-for="item of catalog" v-bind:key="item.id" v-bind:data="item">
    </card>
  </section>
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
    Footer
  },
  computed: {
    catalog() {
      return this.$store.getters.getCatalog
    }
  },



}
</script>

<style>

</style>