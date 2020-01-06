import Api from '~/services/Api.js'

const $api = new Api()

const module = {
  namespaced: true,
  state () {
    return {
      user: {
        loggedIn: false,
        token: '',
        data: {}
      }
    }
  }
}

const mutations = {
  setLoggedIn (state) {
    state.user.loggedIn = true
  },
  unsetLoggedIn (state) {
    state.user.loggedIn = false
  },
  setToken (state, token) {
    state.user.token = token
  },
  setUserData (state, data) {
    state.user.data = data
  }
}

const actions = {
  login ({ commit }, token) {
    commit('setLoggedIn')
    commit('setToken', token)
  },
  fillUserData ({ commit }, data) {
    commit('setUserData', data)
  },
  checkToken ({ commit, dispatch }) {
    $api.get('me', {}, (error) => {
      // console.log(error)
      dispatch('logout')
    })
  },
  logout ({ commit }) {
    commit('unsetLoggedIn')
    commit('setToken', '')
    commit('setUserData', {})
    commit('folders/setFolders', [], { root: true })
  }
}

export default { ...module, mutations, actions }
