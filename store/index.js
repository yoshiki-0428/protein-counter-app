export const strict = false

// TODO 認証情報の有効化
export const state = () => ({
  user: null
})

export const mutations = {
  setUser(state, payload) {
    state.user = payload
  }
}

export const actions = {
  setUser({ commit }, payload) {
    commit('setUser', payload)
  }
}

export const getters = {
  isAuthenticated(state) {
    return !!state.user
  }
}
