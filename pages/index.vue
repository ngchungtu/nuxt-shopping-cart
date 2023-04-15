<template>
  <div>
    <Nav/>
    <HomeCarousel :sale_items="sale_items"/>
    <br/>
    <v-container>
      <h1 class="text-md-h4 text-h6">Check these out</h1>
      <br/>
      <ProductSlider :products="products"/>
      <br/>
      <Newsletter/>
    </v-container>
    <Footer/>
    <ScrollTop/>
  </div>
</template>

<script>
  export default {
    async created(){
      //fetching data
      //trigger data from content json
      this.sale_items = await this.$content("products").where({onSale:true}).fetch();
      this.products = await this.$content("products").fetch();
    },
    data(){
      return{
        products:null, //Promise
        sale_items:null, //Promise
      }
    },
  }
</script>

<style lang="css" scoped>

</style>