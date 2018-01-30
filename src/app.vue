<template>
  <div id="app">
    <Header :update="update"
            :total="total"
            :recentVisit="recentVisit"
            :newbies="newbies"
            :blacklist="blacklist"
            :missing="missing"/>

    <Birthday v-if="birthdays.length" :players="birthdays"/>

    <section class="ranks">
      <div class="wrapper">
        <div v-for="group of ranks" class="group">
          <h3>{{group.title}}</h3>
          <Rank v-for="(rank, idx) of group.rankings" :key="idx" :title="rank.title" :items="rank.players" :unit="rank.unit" :description="rank.description"/>
          <div v-for="num of 3 - (group.rankings.length % 3 || 3)" class="empty"></div>
        </div>
      </div>
    </section>

    <footer>
      <div class="wrapper">
        <p>Made with ❤ by SilentDepth</p>
      </div>
    </footer>
  </div>
</template>

<script>
  import axios from 'axios'

  import Header from './components/partials/header'
  import Birthday from './components/partials/birthday'
  import Rank from './components/rank'
  import './style.css'

  export default {
    name: 'App',
    components: {
      Header,
      Birthday,
      Rank,
    },
    data() {
      return {
        update: null,
        total: null,
        recentVisit: null,
        missing: null,
        newbies: [],
        blacklist: new Array(123),
        birthdays: [],
        ranks: [],
      }
    },
    methods: {
      async getRanksJson() {
        const {data: json} = await axios.get('/stats-data/ranks/latest.json')
        console.log(json)
        this.update = json.update
        this.total = json.playerCount
        this.recentVisit = json.yesterdayCount
        this.missing = new Array(json.missingCount)
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

<style>
  @import './styles/global.css';

  html, body, #app {
    margin: 0;
    height: 100%;
    font-family: -apple-system, "Helvetica Neue", Helvetica, "Nimbus Sans L", Arial, "Liberation Sans", "PingFang SC", "Hiragino Sans GB", "Source Han Sans CN", "Source Han Sans SC", "Microsoft YaHei", "Wenquanyi Micro Hei", "WenQuanYi Zen Hei", "ST Heiti", SimHei, "WenQuanYi Zen Hei Sharp", sans-serif;
    background: #eee;
  }

  code {
    font-family: Consolas, Menlo, monospace;
  }

  section, footer {
    & > .wrapper {
      width: var(--pageWidth);
      margin: 0 auto;
    }
  }

  section {
    border-top: 1px solid #F9f9f9;
    border-bottom: 1px solid #CCC;
  }

  section.ranks {
    @media (--tablet) {
      padding: 0 10px 10px;
    }

    & > .wrapper {
      margin: auto;
      padding-bottom: 15px;
    }

    & .group {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;

      & > * {
        flex: 0 0 300px;
        margin-top: 15px;
      }

      & > h3 {
        flex-basis: 100%;
        line-height: 1;
        margin: 30px 0 0;
        font-size: 1.4em;
        font-weight: normal;
      }

      & .empty {
        border-radius: 5px;
        box-shadow: 0 0 0 1px #ddd;
      }
    }
  }

  footer {
    color: #AAA;
    text-align: center;
  }
</style>
