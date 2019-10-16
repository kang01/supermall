<template>
  <div class="bottom-bar">
    <div class="checked-all">
      <check-button 
      :is-checked="isCheckedAll" 
      class="checked-button"
      @click.native="checkAllClick"/>
      <span>全选</span>
    </div>

    <div class="total-price">
      合计：{{totalPrice}}
    </div>
    
    <div class="calc">
      去计算({{checkedLength}})
    </div>
  </div>
</template>

<script>
  import CheckButton from 'components/content/checkButton/CheckButton'
  import { mapGetters } from 'vuex';
  export default {
    name:'CartBottomBar',
    components: {
      CheckButton
    },
    computed: {
      ...mapGetters(['cartList']),
      totalPrice() {
        return "￥" + this.cartList.filter(item => {
          return item.checked
        }).reduce((preValue, item) => {
          return preValue + item.price * item.count;
        }, 0).toFixed(2)
      },
      checkedLength() {
        return this.cartList.filter(item => item.checked)
        .reduce((preValue, item) => {
          return preValue + item.count
        }, 0);
      },
      isCheckedAll() {
        // return !(this.cartList.filter(item => {
        //   return !item.checked
        // }).length)
        if(this.cartList.length === 0) return false;
        // return !this.cartList.find(item => !item.checked)
        for(let item of this.cartList) {
          if(!item.checked) {
            return false;
          }
        }
        return true
      }
    },
    methods: {
      checkAllClick() {
        if(this.isCheckedAll) {
          this.cartList.map(item => {
            item.checked = false;
          });
        } else {
          this.cartList.map(item => {
            item.checked = true;
          });
        }
      }
    }
  }
</script>

<style  scoped>
  .bottom-bar{
    height: 40px;
    background-color: #eee;
    position: relative;
    line-height: 40px;
    display: flex;
    font-size: 14px;
  }
  .checked-all{
    display: flex;
    align-items: center;
    margin-left: 5px;
    width: 60px;
  }
  .checked-button{
    width: 20px;
    height: 20px;
    line-height: 20px;
    margin-right: 5px;
  }
  .total-price {
    margin-left: 30px;
    flex: 1;
  }
  .calc {
    width: 100px;
    background-color: red;
    color: #fff;
    text-align: center
  }
</style>