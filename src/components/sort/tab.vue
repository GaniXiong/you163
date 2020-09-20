<template>
  <div class="root">
        <div class="tab">
            <ul class="nav">
                <li v-for="(item,index) in navs"
                    :key="index"
                    v-bind:class="index===activeIndex?'active':''"
                    v-on:click="changeIndex(index)"
                >{{item.name}}</li>
            </ul>
        </div>
        <div class="con">
            <div class="banner">
                <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
                    <van-swipe-item v-for="(item,index) in banners" :key="index">
                        <img :src="item.picUrl" alt="">
                    </van-swipe-item>
                </van-swipe>
            </div>
            <div class="con_items">
                <section v-for="(item,index) in cons" :key="index">
                    <img :src="item.bannerUrl" alt="">
                    <h5>{{item.name}}</h5>
                </section>
            </div>
        </div>
  </div>
</template>

<script>
import Vue from 'vue';
import axios from 'axios'
import { Swipe, SwipeItem } from 'vant';
Vue.use(Swipe);
Vue.use(SwipeItem);
export default {
    data(){
        return{
            activeIndex:0,   //默认当前显示的li的索引
            navs:[],
            cons:[],
            banners:[],
        }
    },
    methods:{
        changeIndex(index){
            this.activeIndex = index;
        }  
    },
    created(){
        let url = 'hehe/item/cateList.json?__timestamp=1600154402646&categoryId=11'
        //请求列表导航数据
        axios.get(url)
        .then((res)=>{
            this.navs = res.data.data.categoryL1List
        })
        .catch((err)=>{
            console.log(err)
        })

        // 请求列表对应的内容数据
        axios.get(url)
        .then((res)=>{
            // console.log(res.data.data.currentCategory.bannerList)
            this.cons = res.data.data.categoryL2List
            this.banners = res.data.data.currentCategory.bannerList
        })
        .catch((err)=>{
            console.log(err)
        })
    },
    watch:{
        activeIndex(){   //监听activeIndex是否发生变化
            if(this.activeIndex == 0){
                let url = 'hehe/item/cateList.json?__timestamp=1600154402646&categoryId=11'
                axios.get(url)
                .then((res)=>{
                    this.cons = res.data.data.categoryL2List
                    this.banners = res.data.data.currentCategory.bannerList
                })
            }   
            else if(this.activeIndex == 1){
                let url = 'hehe/item/cateList.json?__timestamp=1600261939753&categoryId=109217021'
                axios.get(url)
                .then((res)=>{
                    this.cons = res.data.data.categoryL2List
                    this.banners = res.data.data.currentCategory.bannerList
                })
            }   
        }
    }
}
</script>

<style lang="less" scoped>
    .root{
        height:90%;
        width:100%;
        display:flex;
        .tab{
            width:1.62rem;
            height:100%;
            border-right:1px solid #ccc;
            ul{
                padding-top:.5rem;
                li{
                    height:.5rem;
                    line-height:.5rem;
                    text-align:center;
                    margin-bottom:.3rem;
                    font-size:.26rem;
                }
                .active{
                    color:#9d3631;
                    border-left:.06rem solid #9d3631;
                }
            }
        }
        .con{
            width:5.88rem;
            height:100%;
            padding:.4rem .4rem .2rem;
            .banner{
                margin-bottom:.3rem;
                img{
                    height:1.9rem;
                }
            }
            .con_items{
                display:flex;
                flex-wrap:wrap;
                section{
                    margin-bottom:.2rem;
                    margin-right:.25rem;
                    img{
                        height:1.43rem;
                    }
                    h5{
                        // width:1.43rem;
                        text-align:center;
                        height:.4rem;
                        line-height:.4rem;
                        font-size:.12rem;
                        color:#474747;
                    }
                }
                
            }
        }
    }
</style>