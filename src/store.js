import Vue from 'vue'
import Vuex from 'vuex'

import {formatDate} from '@/common/filters'

Vue.use(Vuex)

export const MUTATIONS = {
  showSpinner: 'show-spinner',
  hideSpinner: 'hide-spinner',
  players: 'players',
}

const today = new Date('2018-04-01 11:11:11')
today.setHours(0, 0, 0, 0)
const yesterday = new Date(new Date(today).setDate(today.getDate() - 1))

export default new Vuex.Store({
  state: {
    spinner: false,
    update: null,
    players: [],
    today,
    yesterday,
  },
  getters: {
    birthdays({players, today}) {
      const tStr = formatDate(today, 'YYMMDD')
      return players.filter(p => {
        const pStr = formatDate(p.time_start, 'YYMMDD')
        return !p.banned
          && tStr.slice(2) === pStr.slice(2)
          && tStr.slice(0, 2) !== pStr.slice(0, 2) // 排除今天刚入服的
      }).sort((a, b) => a.time_start - b.time_start)
    },
    yesterdayLogIn({players, today, yesterday}) {
      return players.filter(p => yesterday <= p.time_last && p.time_last < today)
    },
    yesterdayLogUp({players, today, yesterday}) {
      return players.filter(p => yesterday <= p.time_start && p.time_start < today)
    },
  },
  mutations: {
    update(state, update) {
      state.update = update
    },
    players(state, players) {
      state.players = players
    },
    [MUTATIONS.showSpinner](state) {
      state.spinner = true
    },
    [MUTATIONS.hideSpinner](state) {
      state.spinner = false
    },
  },
  actions: {

  },
})
