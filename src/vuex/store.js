import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);
const state={
  titlt:'首页',
  color:'rgb(33,150,243)'
};
const mutations={
  routerLinks(state,params){
    state.title=params.title;
    state.color=params.color
  }
}
export default new Vuex.Store({
  state,
  mutations
})
