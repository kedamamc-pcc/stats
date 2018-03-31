import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const MUTATIONS = {
  players: 'players',
}

export default new Vuex.Store({
  state: {
    update: null,
    players: [],
  },
  mutations: {
    update(state, update) {
      state.update = update
    },
    players(state, players) {
      state.players = players
    },
  },
  actions: {

  },
})
