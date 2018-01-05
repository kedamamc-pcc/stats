<script>
  import axios from 'axios'

  import Rank from './components/rank.vue'
  import './style.css'

  const RANKS_URL = '/stats-data/ranks/latest.json'

  export default {
    name: 'App',
    components: {
      Rank,
    },
    data() {
      return {
        update: null,
        totalPlayers: null,
        recentlyVisited: null,
        missingPlayers: null,
        newbies: [],
        birthdays: [],
        ranks: [],
      }
    },
    methods: {
      async getRanksJson() {
        const {data: json} = await axios.get(RANKS_URL)
        console.log(json)
        this.update = json.update
        this.totalPlayers = json.playerCount
        this.recentlyVisited = json.yesterdayCount
        this.missingPlayers = json.missingCount
        this.newbies = json.newbies
        this.birthdays = json.birthdays
        this.ranks = json.ranks
      },
    },
    created() {
      this.getRanksJson()
    },
  }
</script>

<template>
  <div id="app">
    <header>
      <div class="block">
        <strong><a href="https://craft.moe/">毛玉線圈物語</a>玩家数据榜单<sup>「非官方」</sup></strong>
        <span>数据新鲜度：{{update}}</span>
      </div>
    </header>
    <div class="newbies">
      <div v-if="newbies.length" class="block">
        <strong>欢迎萌新</strong><span>昨日入服的玩家（0点之后入服的于次日显示）</span>
        <ul>
          <li v-for="playername of newbies"><code>{{playername}}</code></li>
        </ul>
        <p>共 {{totalPlayers}} 名有效玩家中，有 {{recentlyVisited}} 名在过去 24 小时内登录过</p>
      </div>
      <div v-if="birthdays.length" class="block">
        <strong>生日快乐</strong><span>N 年前的今天，你们来到了毛线</span>
        <ul>
          <li v-for="playername of birthdays"><code>{{playername}}</code></li>
        </ul>
      </div>
    </div>
    <section class="ranks">
      <div style="width: 930px; height: 4px; margin: auto; background: #f0f;"></div>
      <div class="wrapper">
        <Rank v-for="(rank, idx) of ranks" :key="idx" :title="rank.title" :items="rank.players" :unit="rank.unit" :description="rank.description"/>
      </div>
    </section>
    <footer>
      <div class="block">
        <p v-if="missingPlayers">本次有 {{missingPlayers}} 名玩家的数据被吃掉了 &gt;w&lt;</p>
        <p>Made with ❤ by SilentDepth</p>
      </div>
    </footer>
  </div>
</template>

<style lang="postcss">
  @import './styles/global.css';

  section > .wrapper {
    width: 930px;
  }

  .ranks {
    @media (--tablet) {
      padding: 0 10px 10px;
    }

    & > .wrapper {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      margin: auto;

      & > * {
        flex: 0 0 300px;
        margin-top: 15px;
      }
    }
  }
</style>
