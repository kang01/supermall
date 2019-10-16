<template>
  <div class="detail-swiper">
    <swiper class="swiper" v-if="topImages.length > 0" :options="swiperOption">
      <swiper-slide  v-for="(slide, index) in topImages" :key="index">
        <img :src="slide" alt style="width:100%"/>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
  import "swiper/dist/css/swiper.css";
  import { swiper, swiperSlide } from "vue-awesome-swiper";
  export default {
    name:'',
    components: {
      swiper, 
      swiperSlide
    },
    props: {
      topImages: {
        type: Array,
        default() {
          return []
        }
      }
    },
    data() {
      return {
        swiperOption: {
          observer:true,//修改swiper自己或子元素时，自动初始化swiper 
  　　    observeParents:true,//修改swiper的父元素时，自动初始化swiper 
          loop:true,
  　　    autoplay: {
    　　　  delay: 2000,
    　　    disableOnInteraction: false,
          },
          pagination: {
            el: ".swiper-pagination"
          },
        }
      }
    }
  }
</script>

<style  scoped>
  .swiper{
    height: 300px;
    overflow: hidden;
  }
</style>