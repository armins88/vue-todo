import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'

Vue.use(Vuex)
Vue.config.productionTip = false

//Define store

const store = new Vuex.Store({
  state: {
    count: 0,
    tasks: [
      "test"
    ], //expecting array of String
  },
  mutations: {
    deleteTask: (state, payload) => {
      console.log(payload, state.tasks)
      return state.tasks = state.tasks.filter(t => t != payload.name)
    },
    create: (state, payload) => state.tasks.push(payload.name)
  }
})

new Vue({
  render: h => h(App),
  store
}).$mount('#app')
