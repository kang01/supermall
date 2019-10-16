<template>
  <div class="detail">
    <detail-nav-bar class="detail-nav"  
    @titleClick="titleClick" 
    ref="nav" />
    <scroll class="content" ref="scroll" 
    :probe-type="3"
    :is-pull-up-load="true"
    @scroll="contentScroll" >
      <detail-swiper :top-images="topImages" />
      <detail-base-info :goods="goods" />
      <detail-shop-info :shop="shop" />
      <detail-goods-info :detailInfo="detailInfo" @imageLoad="imageLoad" />
      <detail-param-info :paramInfo="paramInfo" ref="param"/>
     
    </scroll>
    <detail-bottom-bar @addCart="addToCart"></detail-bottom-bar>
    <toast/>
  </div>
</template>

<script>
  import Scroll from 'components/common/scroll/Scroll'
  import Toast from 'components/common/toast/Toast'

  import DetailNavBar from './childComps/DetailNavBar'
  import DetailSwiper from './childComps/DetailSwiper'
  import DetailBaseInfo from './childComps/DetailBaseInfo'
  import DetailShopInfo from './childComps/DetailShopInfo'
  import DetailGoodsInfo from './childComps/DetailGoodsInfo'
  import DetailParamInfo from './childComps/DetailParamInfo'
  import DetailBottomBar from './childComps/DetailBottomBar'
  import {getDetail, Goods, Shop, GoodsParam} from 'network/detail'
  import {debounce} from 'common/utils'
  export default {
    name:'Detail',
    components: {
      Scroll,
      Toast,
      DetailNavBar,
      DetailSwiper,
      DetailBaseInfo,
      DetailShopInfo,
      DetailGoodsInfo,
      DetailParamInfo,
      DetailBottomBar
      
    },
    data() {
      return {
        iid: null,
        topImages: [],
        goods: {},
        shop: {},
        detailInfo: {},
        paramInfo: {},
        themeTopYs: [],
        getThemeTopY: null,
        currentIndex: 0,
        message: '',
        show: false
      }
    },
    created() {
      this.iid = this.$route.params.id;
      getDetail(this.iid).then(res =>{
        const data = res.data.result
        // 获取顶部的轮播图中的图片
        this.topImages = data.itemInfo.topImages
        //获取商品信息
        this.goods = new Goods(data.itemInfo,data.columns,data.shopInfo.services)
        //创建商铺信息对象
        this.shop = new Shop(data.shopInfo)
        // 保存商品的详情数据
        this.detailInfo = data.detailInfo
        //获取参数信息
        this.paramInfo = new GoodsParam(data.itemParams.info, data.itemParams.rule)

        this.$nextTick(() => {
          // this.themeTopYs = []
          // this.themeTopYs.push(0)
          // this.themeTopYs.push(this.$refs.param.$el.offsetTop)
          // console.log(this.themeTopYs);
        })
        
      })
      // 防抖操作
      this.getThemeTopY = debounce(() => {
        this.themeTopYs = []
        this.themeTopYs.push(0)
        this.themeTopYs.push(this.$refs.param.$el.offsetTop)
        // console.log(this.themeTopYs);
      },500)
      
    },
    mounted() {
      
      
    },
    updated() {
      
    },
    methods: {
      imageLoad() {
        this.$refs.scroll.refresh()
        this.getThemeTopY()
      },
      titleClick(index) {
        this.$refs.scroll.scrollTo(0,-this.themeTopYs[index],200)
      },
      contentScroll(position) {
        // 获取Y值
        const positionY = -position.y
        // positionY和主题中值进行对比
        // [0, 12490]
        // positionY 在 0 和 12490 之间，index=0
        // positionY 超过 12490值时，index=1
        let length = this.themeTopYs.length
        for(let i = 0; i < length; i++){
          if(this.currentIndex !== i 
          && (i < length && positionY > this.themeTopYs[i] 
          && positionY < this.themeTopYs[i+1]) 
          || (i === length-1 && positionY >= this.themeTopYs[i])){
            this.currentIndex = i
            this.$refs.nav.currentIndex = this.currentIndex
          }
          
        }
        
      },
      addToCart() {
        // 1.获取购物车需要展示的信息
        const product = {}
        product.image = this.topImages[0];
        product.title = this.goods.title;
        product.desc = this.goods.desc;
        product.price = this.goods.realPrice;
        product.iid = this.iid;
        // mutations
        // this.$store.commit('addCart', product)
        // actions
        // 2.将商品添加到购物车
        this.$store.dispatch('addCart', product).then(res => {
          console.log(res);
          this.$toast.show(res, 2000);
          // this.show = true;
          // this.message = res;
          // setTimeout(() =>{
          //   this.show = false;
          //   this.message = '';
          // },1500)
        })
        
      }
    }
  }
</script>

<style  scoped>
  .detail{
    position: relative;
    z-index: 9;
    background-color: #fff;
    height: 100vh;
  }
  .content{
    height: calc(100% - 44px - 49px);
    overflow: hidden;

    /* position:absolute;
    top:44px;
    bottom: 49px;
    left: 0;
    right: 0; */
  }
</style>