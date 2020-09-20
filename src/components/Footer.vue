<template>
    <div class="footer">
        <van-tabbar route active-color="red">
            <van-tabbar-item to="/" icon="wap-home-o">首页</van-tabbar-item>
            <van-tabbar-item to="/sort" icon="label-o">分类</van-tabbar-item>
            <van-tabbar-item to="/buy" icon="photo-o">值得买</van-tabbar-item>
            <van-tabbar-item to="/cart" icon="shopping-cart-o">购物车</van-tabbar-item>
            <van-tabbar-item to="/personal" icon="manager-o">个人</van-tabbar-item>
        </van-tabbar>
    </div> 
</template>

<script>
import Vue from 'vue';
import { Tabbar, TabbarItem } from 'vant';

Vue.use(Tabbar);
Vue.use(TabbarItem);

export default {

}
</script>

<style lang="less" scoped>
    .footer{
        .van-hairline--top-bottom{
            height:.98rem;
        }
        position:fixed;
        bottom:0;
        z-index:9999;
    }
</style>