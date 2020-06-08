import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({


  state: {
    /*定义全局变量*/
    lists:[]
  },
  mutations: {
    /**
     * 操作上面定义的全局变量;这里把value值存到全局数组中
     */
    addItem(statee,value){
     // console.log(value)
      statee.lists.push(value)
      console.log(statee.lists.length)
    }
  },
  actions: {
  },
  modules: {
  }
})
