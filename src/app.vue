<template>
  <div id="app">
    <Nav/>
    <main id="main">
      <router-view/>
    </main>
    <footer id="footer">Made with ❤ by KPCC</footer>
  </div>
</template>

<script>
  import Nav from './components/nav'

  export default {
    components: {
      Nav,
    },
    async beforeCreate() {
      const [info, players] = [
        await this.$http.get('/stats-data/info.json'),
        await this.$http.get('/stats-data/players.json'),
      ]
      this.$store.commit('update', info.latest_update)
      this.$store.commit('players', players.players)
    },
  }
</script>

<style>
  html, body {
    margin: 0;
    height: 100%;
  }

  #app {
    min-height: 100%;
    font-family: -apple-system, "Helvetica Neue", Helvetica, "Nimbus Sans L", Arial, "Liberation Sans", "PingFang SC", "Hiragino Sans GB", "Source Han Sans CN", "Source Han Sans SC", "Microsoft YaHei", "Wenquanyi Micro Hei", "WenQuanYi Zen Hei", "ST Heiti", SimHei, "WenQuanYi Zen Hei Sharp", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    position: relative;
    display: flex;
    flex-flow: column nowrap;
  }

  #main {
    flex: 1 1 auto;
  }

  #footer {
    text-align: center;
    color: #ccc;
    line-height: 60px;
    flex: 0;
    border-bottom: 6px solid #F39F0D;
  }
</style>
