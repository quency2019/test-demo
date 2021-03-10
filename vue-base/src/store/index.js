import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    data1: 6,
    data2: 66
  },
  // 计算属性，
  getters: {
    sum(state) {
      return state.data1 + state.data2
    }

  },
  // mutation 方法
  mutations: {
    add(state, value = 1) {

      console.log(value)
      state.data1 = state.data1 + value

    }
  },
  // actions 副作用方法
  actions: {
    fetch(context, value) {
      //调用 mutation 方法
      console.log(value)
      setTimeout(() => {
        context.commit('add', value);
      }, 1000)

    }


  }
  // modules 模块
});

export default store

