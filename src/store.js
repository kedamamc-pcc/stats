import Vue from 'vue'
import Vuex from 'vuex'

import {formatDate} from '@/common/filters'

Vue.use(Vuex)

const MUTATIONS = {
  players: 'players',
}

export default new Vuex.Store({
  state: {
    update: null,
    players: [],
  },
  getters: {
    birthdays({players}) {
      const tStr = formatDate(new Date(), 'YYMMDD')
      return players.filter(p => {
        const pStr = formatDate(p.time_start, 'YYMMDD')
        return !p.banned
          && tStr.slice(2) === pStr.slice(2)
          && tStr.slice(0, 2) !== pStr.slice(0, 2) // 排除今天刚入服的
      }).sort((a, b) => a.time_start - b.time_start)
    },
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
