<template>
  <div>
    <header>
      <h1>昨天（{{$store.state.yesterday | formatDate('YYYY 年 M 月 D 日')}}）{{pronoun}}来到了毛线</h1>
    </header>

    <div class="B">
      <p v-for="p of players">{{p.name}}</p>
    </div>

    <footer v-if="players.length">欢迎萌新！</footer>
  </div>
</template>

<script>
  import {formatDate} from '@/common/filters'

  export default {
    name: "NewbiesView",
    computed: {
      players() {
        return this.$store.getters.yesterdayLogUp
      },
      pronoun() {
        return this.players.length === 1 ? '你' : '你们'
      },
    },
    filters: {
      formatDate,
    },
  }
</script>

<style scoped>
  div{
    text-align: center;
  }
  .B{
    width: 50%;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
  }
  .B p{
    width: 150px;
    height: 30px;
    line-height: 30px;
    background: #F6F6F6;
    margin: 5px;
    box-sizing: border-box;
    border-radius: 5px;
    border: 1px solid #BBB;
    box-shadow: 0 1px 3px #BBB;
    font-size: 10px;
  }
</style>
