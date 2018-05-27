<template>
  <div>
    <header :class="$style.header">
      <h1>昨天（{{$store.state.yesterday | formatDate('YYYY 年 M 月 D 日')}}）{{pronoun}}来到了毛线</h1>
    </header>

    <CardList :players="players" :class="$style.cardlist"/>

    <footer v-if="players.length" :class="$style.footer">欢迎萌新！</footer>
  </div>
</template>

<script>
  import CardList from '../components/card-list'
  import Card from '../components/card'
  import {formatDate} from '@/common/filters'

  export default {
    name: "NewbiesView",
    components: {
      CardList,
      Card,
    },
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

<style module>
  .cardlist {
    composes: page-section from '../global.css';

    margin-top: 10px;
  }

  .header, .footer {
    text-align: center;
  }

  .header {
    composes: page-header from '../global.css';
  }

  .header h1 {
    margin: 0;
    font-size: 1.5rem;
    line-height: 58px;
    font-weight: normal;
  }

  .footer {
    margin: 30px 0;
    font-size: 1.5rem;
    color: #CCC;
  }
</style>
