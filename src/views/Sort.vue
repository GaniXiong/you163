<template>
  <div class="sort">
      <Header></Header>
      <Tab></Tab>
      <Footer></Footer>
  </div>
</template>

<script>
import Header from '../components/sort/header'
import Tab from '../components/sort/tab'
import Footer from '../components/Footer'
export default {
  components:{
    Header,
    Tab,
    Footer,
  }
}
</script>

<style lang="less" scoped>
  .sort{
    height:100%;
    width:100%;
  }
</style>