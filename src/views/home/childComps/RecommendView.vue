<template>
  <div class="recommend" v-if="recommends.length">
    <div class="recommend-item" v-for="(item,index) in recommends" :key="index">
      <a :href="item.link">
        <img :src="item.image" alt="">
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
  export default {
    name:'RecommendView',
    props: {
      recommends: {
        type: Array,
        default() {
          return []
        }
      }
    },
    created() {
      console.log(this.recommends)
    }
  }
</script>

<style  scoped>
.recommend{
  display: flex;
  text-align: center;
  font-size:12px;
  padding: 15px 0;
  border-bottom: 10px solid #eee;
}
.recommend-item{
  flex: 1;
}
.recommend-item img{
  width: 70px;
  height: 70px;
}
</style>