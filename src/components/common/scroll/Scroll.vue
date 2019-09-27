<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  import BScroll from '@better-scroll/core'
  import Pullup from '@better-scroll/pull-up'
  import PullDown from '@better-scroll/pull-down'

  BScroll.use(Pullup) 
  BScroll.use(PullDown) 
  export default {
    name:'',
    props: {
      probeType: {
        type: Number,
        default: 0
      },
      isPullUpLoad: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        bs: null
      }
    },
    mounted() {
      this.initBscroll()  
    },
    methods: {
      initBscroll() {
        //默认情况下BScroll是不实时的监听滚动位置
        //probe 侦测
        //0,1都是不侦测实时的位置
        //2.在手指滚动的过程中侦测，手指离开后的惯性滚动过程中不侦测
        //3.只要是滚动，都侦测
        this.bs = new BScroll(this.$refs.wrapper,{
          probeType: this.probeType,
          click:true,
          pullUpLoad: this.isPullUpLoad,
          pullDownRefresh: true
        })
        this.bs.on('scroll',(position) => {
          this.$emit('scroll', position)
        })
        this.bs.on('pullingUp',() => {
          // console.log("上拉加载更多！")
          // 此方法可以上拉加载多次 标识一次上拉加载动作结束。
          
          this.$emit('pullingUp')
        })
        this.bs.on('pullingDown', () => {
          console.log("下拉加载更多！")
        })
      },
      scrollTo(x,y,time=300) {
        this.bs && this.bs.scrollTo && this.bs.scrollTo(x,y,time)
      },
      finishPullUp() {
        this.bs.finishPullUp()
      },
      refresh() {
        this.bs.refresh()
      }
      
      
    }
  }
</script>

<style  scoped>
  .wrapper {

  }
</style>