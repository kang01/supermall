import {ADD_COUNTER,ADD_TO_CART} from './mutation-types'
export default {
  addCart(context, payLoad) {
    // let oldProduct = null;
    // for(let item of state.cartList) {
    //   if(item.iid === payLoad.iid) {
    //     oldProduct = item;
    //   }
    // }
    // if(oldProduct) {
    //   oldProduct.count += 1;
    // } else {
    //   payLoad.count = 1;
    //   state.cartList.push(payLoad)
    // }
    return new Promise((resolve, reject) => {
      let oldProduct = context.state.cartList.find(function(item) {
        return item.iid === payLoad.iid
      })
      if(oldProduct) {
        // oldProduct.count += 1;
        context.commit(ADD_COUNTER, oldProduct)
        resolve("商品数量加1!");
      } else {
        payLoad.count = 1;
        // context.state.cartList.push(payLoad)
        context.commit(ADD_TO_CART, payLoad)
        resolve("商品已添加到购物车!");
      }
    })
    
  }
}