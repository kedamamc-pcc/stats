<script>
  import axios from 'axios'

  import Rank from './components/rank.vue'
  import './style.css'

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
        const {data: json} = await axios.get('/stats-data/ranks/latest.json')
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
    <!-- Title & mini dashboard -->
    <header>
      <div class="wrapper">
        <div class="title">
          <strong><a href="https://craft.moe/">毛玉線圈物語</a>玩家数据榜单<sup>「非官方」</sup></strong>
          <span>数据新鲜度：{{update}}</span>
        </div>
        <div class="dashboard">
          <dl>
            <div>
              <dt>玩家总数</dt>
              <dd>{{totalPlayers}}</dd>
            </div>
            <div>
              <dt>昨日登录</dt>
              <dd>{{recentlyVisited || 0}}</dd>
            </div>
            <div>
              <dt>昨日入服</dt>
              <dd>{{newbies.length || 0}}</dd>
            </div>
            <div>
              <dt>黑名单</dt>
              <dd>123</dd>
            </div>
            <div v-if="missingPlayers">
              <dt>&gt;w&lt;</dt>
              <dd>{{missingPlayers}}</dd>
            </div>
          </dl>
        </div>
      </div>
    </header>

    <!-- HAPPY BIRTHDAY -->
    <section v-if="birthdays.length" class="birthdays">
      <div class="wrapper">
        <h2>生日快乐</h2>
        <p>N 年前的今天，你们来到了毛线</p>
        <ul>
          <li v-for="playername of birthdays"><code>{{playername}}</code></li>
        </ul>
      </div>
    </section>

    <section class="ranks">
      <pre style="width: 1000px;background: #F0F;margin: auto;text-align: center;font-size: 10px;">1000px</pre>
      <div class="wrapper">
        <Rank v-for="(rank, idx) of ranks" :key="idx" :title="rank.title" :items="rank.players" :unit="rank.unit" :description="rank.description"/>
      </div>
    </section>

    <footer>
      <div class="wrapper">
        <p>Made with ❤ by SilentDepth</p>
      </div>
    </footer>
  </div>
</template>

<style>
  @import './styles/global.css';

  html, body, #app {
    margin: 0;
    height: 100%;
    font-family: sans-serif;
    background: #eee;
  }

  code {
    font-family: Consolas, Menlo, monospace;
  }

  header, section, footer {
    & > .wrapper {
      width: var(--pageWidth);
      margin: 0 auto;
    }
  }

  header {
    background: linear-gradient(to top, #222, #333 50%) #333;
    color: #ddd;
    font-size: large;

    @media (--phone) {
      text-align: center;
    }

    &::after {
      content: '';
      display: block;
      clear: both;
    }

    & .title {
      float: left;
      line-height: 1;
      padding: 1em 0;

      & strong {
        display: block;
        margin-bottom: .5em;
      }

      & a {
        color: #FFF;
        text-decoration: none;
        margin-right: .5em;
      }

      & sup {
        line-height: 1;
        vertical-align: baseline;
        position: relative;
        top: -.5em;
      }

      & span {
        display: block;
        color: #CCC;
        font-size: small;

        @media (--phone) {
          display: block;
          float: none;
          margin-top: 1em;
        }
      }
    }

    & .dashboard {
      float: right;
      padding: 1em 0;

      & dl {
        margin: 0;

        & > * {
          float: left;
          padding: 0 1em;
          border-right: 1px solid #666;
          text-align: center;

          &:first-child {
            border-left: 1px solid #666;
          }
        }

        & dt {
          font-size: small;
          line-height: 1;
        }

        & dd {
          font-size: large;
          line-height: 1;
          margin: .5em 0 0;
        }
      }
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
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      margin: auto;
      padding-bottom: 15px;

      & > * {
        flex: 0 0 300px;
        margin-top: 15px;
      }
    }
  }

  footer {
    color: #AAA;
    text-align: center;
  }
</style>
