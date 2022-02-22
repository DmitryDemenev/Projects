<template>
<div>
  <router-view/>
</div>
</template>

<script>
  export default {
    data() {
      return {
      }
    },
    mounted() {
      this.$store.dispatch('loadCatalog')
      this.$store.dispatch('loadCart')
    }
  }
</script>

<style lang="scss">

</style>
