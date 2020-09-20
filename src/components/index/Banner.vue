<template>
  <div class="banner">
      <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
        <!-- <van-swipe-item>1</van-swipe-item>
        <van-swipe-item>2</van-swipe-item>
        <van-swipe-item>3</van-swipe-item>
        <van-swipe-item>4</van-swipe-item> -->

        <van-swipe-item v-for="(item,index) in bannerList" :key="index">
            <img :src="item.picUrl" alt="">
        </van-swipe-item>
      </van-swipe>
  </div>
</template>

<script>
import Vue from 'vue';
import { Swipe, SwipeItem } from 'vant';
import axios from 'axios'
Vue.use(Swipe);
Vue.use(SwipeItem);

export default {
    data(){
        return{
            bannerList:[],
        }
    },
    mounted(){
        //请求轮播图数据
        let url = '/hehe/xhr/index.json?__timestamp=1599464168069'
        axios.get(url)
        .then((res)=>{
            this.bannerList = res.data.data.data.focusList
        })
    },
}
</script>

<style scoped>
.van-swipe-item img{
    width:7.5rem;
}
</style>
<style>
.van-swipe__indicator {
    width: 20px!important;
    height: 3px!important;
    background-color: #ebedf0;
    opacity: .3;
    -webkit-transition: opacity .2s;
    transition: opacity .2s;
    border-radius:0!important;
}
</style>




