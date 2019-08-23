import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    list:[]
  },
  // mutations用来处理同步函数,相当于是redux里的reducer，用来处理传过来的参数
  mutations: {
    addTodo(state, payload) {
      state.list.push(payload);
    }
  },
  // actions用来处理异步函数
  actions: {

  },
  // 用来过滤state中符合条件的值
  getters: {
    doneList: state => {
      return state.list.filter(item => item.isChecked)
    },
    willDoneList: state => {
      return state.list.filter(item => !item.isChecked)
    },
    listLength: state => {
      return state.list.filter(item => !item.isChecked).length
    }
  }
})
