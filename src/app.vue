<template>
  <div id="app">
    <Nav/>
    <main id="main">
      <div class="wrap">
        <section id="top-panel">{{this.update}}</section>
        <section id="boards">
          <Board v-for="n of 12" :key="n"/>
        </section>
      </div>
    </main>
    <footer id="footer">#footer</footer>
  </div>
</template>

<script>
  import Nav from './components/nav'
  import Board from './components/board'

  export default {
    components: {
      Nav,
      Board,
    },
    computed: {
      update() {
        return new Date(this.$store.state.update)
      },
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
    color: #2c3e50;
    position: relative;
    display: flex;
    flex-flow: column nowrap;
  }

  #nav {
    background: #f99;
    flex: 0;
  }

  #nav a {
    font-weight: bold;
    color: #2c3e50;
  }

  #nav a.router-link-exact-active {
    color: #42b983;
  }

  #main {
    flex: 1 1 auto;
  }

  #main > .wrap {
    margin: 0 auto;
    width: 1000px;
  }

  #top-panel {
    background: #ff9;
  }

  #boards {
    background: #9ff;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  .board {
    flex: 0 0 300px;
    margin-bottom: 30px;
  }

  #footer {
    position: absolute;
    bottom: 0;
    width: 100%;
    background: #99f;
    flex: 0;
  }
</style>
