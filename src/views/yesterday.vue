<template>
  <div>
    <header :class="$style.header">
      <h1>昨天（{{$store.state.yesterday | formatDate('YYYY 年 M 月 D 日')}}）{{pronoun}}来过毛线</h1>
    </header>

    <CardList :players="players" :class="$style.cardlist"/>
  </div>
</template>

<script>
  import CardList from '../components/card-list'
  import Card from '../components/card'
  import {formatDate} from '@/common/filters'

  export default {
    name: 'YesterdayView',
    components: {
      CardList,
      Card,
    },
    computed: {
      players() {
        return this.$store.getters.yesterdayLogIn
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

<style module>
  .header {
    composes: page-header from '../global.css';

    text-align: center;
  }

  .cardlist {
    composes: page-section from '../global.css';

    margin-top: 10px;
  }
</style>
