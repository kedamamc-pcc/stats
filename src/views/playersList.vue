<template>
  <div>
    <code>按入服时间排序</code><br/>
    <div v-for="(player,k) in players" :key="k" class="playersList">
      <h3>
        {{player.name}}
      </h3>
      <code>Banned:{{player.banned}}</code>
      <div v-for="(names,key) in player.names" :key="key">
        <code>曾用名:{{names.name}}
        </code>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapState} from 'vuex'

  export default {
    name: "players-list",
    computed: {
      //   ...mapState({
      //   players:state => state.players
      // })
      players() {
        function sort(property) { //排序
          return function (obj1, obj2) {
            let a = obj1[property];
            let b = obj2[property];
            return a - b;     // 升序
          }
        }

        return this.$store.state.players.sort(sort('time_start'))
      }
    }
  }
</script>

<style scoped>
  .playersList {
    width: 300px;
    display: inline-block;
    height: 100px;
    overflow: hidden;
  }

  .playersList:hover {
    height: auto;
  }

</style>
