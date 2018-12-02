import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state:{
      groupReal: [],
      groupCloud: [],
    },
    getters:{
      getgroupReal: state =>{
        return state.groupReal;
      },
      getgroupCloud: state =>{
        return state.groupCloud;
      }
    },
    mutations:{
      updateReal:(state, link) => {
        state.groupReal = [];
        state.groupReal = link
      },
      updateCloud:(state, link) => {
        state.groupCloud = [];
        state.groupCloud = link
      },
    },
    actions:{
      uR: (context, link) => {
        context.commit("updateReal", link)
      },
      uC: (context, link) => {
        context.commit("updateCloud", link)
      }
    }
})