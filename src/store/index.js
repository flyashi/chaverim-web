import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    my_orgs: [
      /*
      {
        id: 'BR',
        admin: true,
        dispatcher: true,
        responder: true,
        coordinator: false,
        dispatcher_id: '21',
        responder_id: 'F64'
      }, */
    ],
    selected_org: null,
    isLoggedIn: false,
  },
  getters: {
    isLoggedIn: function(state) {
      return state.isLoggedIn
    }
  },
  mutations: {
    fakeLogin: function(state) {
      state.isLoggedIn = true
      state.my_orgs = [{
        id: 'SG',
        admin: true,
        dispatcher: true,
        responder: true,
        coordinator: false,
        dispatcher_id: '21',
        responder_id: 'SG64'
      }]
    },
    logout: function(state) {
      state.isLoggedIn = false
    }
  },
  actions: {},
  strict: process.env.NODE_ENV !== 'production',
  plugins: [createPersistedState()]
})
