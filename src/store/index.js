import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    my_orgs: [
      {
        id: 'BR',
        admin: true,
        dispatcher: true,
        responder: true,
        coordinator: false,
        dispatcher_id: '21',
        responder_id: 'F64'
      },
    ]
  },
  getters: {},
  mutations: {},
  actions: {},
  strict: process.env.NODE_ENV !== 'production',
  plugins: [createPersistedState()]
})
