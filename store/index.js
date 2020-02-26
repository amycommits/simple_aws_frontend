import BaseService from '../api/BaseService'
export const state = () => ({
  things: []
})

export const getters = {
  things: (state) => state.things
}
export const actions = {
  getThings({ commit }) {
    BaseService.getThings().then((result) => {
      commit('SET_THINGS', result.data)
      return result.data
    })
  }
}

export const mutations = {
  SET_THINGS(state, things) {
    state.things = things
  }
}
