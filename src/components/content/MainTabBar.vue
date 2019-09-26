<template>
  <div>
    <tab-bar>
      <tab-bar-item path="/home" activeColor="red">
        <img slot="item-icon" src="~assets/img/tabbar/home.svg" alt srcset />
        <img slot="item-icon-active" src="~assets/img/tabbar/home-active.svg" alt srcset />
        <div slot="item-text" >首页</div>
      </tab-bar-item>
      <tab-bar-item path="/category" activeColor="blue">
        <img slot="item-icon" src="~assets/img/tabbar/category.svg" alt srcset />
        <img slot="item-icon-active" src="~assets/img/tabbar/category-active.svg" alt srcset />
        <div slot="item-text">分类</div>
      </tab-bar-item>
      <tab-bar-item path="/cart" activeColor="blue">
        <img slot="item-icon" src="~assets/img/tabbar/cart.svg" alt srcset />
        <img slot="item-icon-active" src="~assets/img/tabbar/cart-active.svg" alt srcset />
        <div slot="item-text">购物车</div>
      </tab-bar-item>
      <tab-bar-item path="/profile" >
        <img slot="item-icon" src="~assets/img/tabbar/me.svg" alt srcset />
        <img slot="item-icon-active" src="~assets/img/tabbar/me-active.svg" alt srcset />
        <div slot="item-text">我的</div>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>
  import TabBar from 'components/common/tabbar/Tabbar';
  import TabBarItem from 'components/common/tabbar/TabBarItem';
  export default {
    name:'MainTabBar',
    components: {
      TabBar,
      TabBarItem
    }
  }
</script>

<style  scoped>

</style>