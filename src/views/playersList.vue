<template>
  <div>
    <h3>按入服时间排序</h3>
    <div id="box">
      <div v-for="(list,k) in players" :key="k" id="list">
        <div class="item">
          <div class="name">
            <h3>{{list.name}}</h3>
            Banned:<code>{{list.banned}}</code>
          </div>
          <div class="names">
            <h3>Names</h3>
            <p v-for="(v,key) in list.names" :key="key">{{v.name}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

  export default {
    name: "players-list",
    data() {
      return {
        data: false
      }
    },
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
  div{
    text-align: center;
  }
  #box{
    display: flex;
    flex-wrap: wrap;
  }
  #list {
    margin: 5.5px;
    width: 200px;
    height: 200px;
  }

  .item {
    width: 200px;
    height: 200px;
    border: 1px solid #BBB;
    border-radius: 5px;
    transition: transform 1s;
    display: flex;
    background: #F6F6F6;
    box-shadow: 0 1px 3px #BBB;
    box-sizing: border-box;

  }

  .name{
    margin: auto;
  }
  .names {
    width: 100%;
    display: none;
    text-align: center;
  }
  .names >p {
    font-size: 10px;
    margin: 1px;
    padding: 0;
  }

  #list:hover .item {
    transform: rotateY(360deg);
  }

  #list:hover .item > .names {
    display: block;
    animation: 5s change
  }

  #list:hover .item > .name {
    display: none;

  }

  @keyframes change {
    0% {
      opacity: 0
    }
    100% {
      opacity: 1
    }
  }

</style>
