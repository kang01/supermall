import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'
// 安装插件
Vue.use(Vuex)
const state = {
  cartList: []
}
const store = new Vuex.Store({
  state,
  actions,
  mutations,
  getters
})
// 挂载Vue实例上
export default store