import store from '@/store'

const fakeLogin = function() {
  store.commit('fakeLogin')
}

const logout = function() {
  store.commit('logout')
}

export {fakeLogin, logout}
