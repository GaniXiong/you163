<template>
  <div class="index">
      <Header></Header>
      <Banner></Banner>
      <Grow></Grow>
      <NavItems></NavItems>
      <NewPeople></NewPeople>
      <Product></Product>
      <Footer></Footer>
  </div>
</template>

<script>
import Header from '../components/index/Header'
import Banner from '../components/index/Banner'
import Grow from '../components/index/Grow'
import NavItems from '../components/index/Nav-items'
import NewPeople from '../components/index/New-people'
import Product from '../components/index/Product'
import Footer from '../components/Footer'


export default {
  components:{
    Header,
    Banner,
    Grow,
    NavItems,
    NewPeople,
    Product,
    Footer,
  }
}
</script>

<style scoped>
.index{
  padding:1.48rem 0 .98rem;
}
</style>