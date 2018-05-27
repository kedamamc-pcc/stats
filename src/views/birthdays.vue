<template>
  <div>
    <header :class="$style.header">
      <h1 v-if="birthdays.length">N 年前的 {{$store.state.today | formatDate('M 月 D 日')}}，{{pronoun}}来到了毛线</h1>
      <h1 v-else>今天没有人过生日</h1>
    </header>

    <section :class="$style.cardlist">
      <Card v-for="p of birthdays" :key="p.uuid" :data="p" :class="$style.card"></Card>
      <div v-for="n of 5 - (birthdays.length % 5 || 5)" :class="$style.empty"></div>
    </section>

    <footer v-if="birthdays.length" :class="$style.footer">感谢有{{pronoun}}，生日快乐！</footer>
  </div>
</template>

<script>
  import Card from '@/components/card'
  import {formatDate, firstNameInKedama} from '@/common/filters'

  export default {
    name: "BirthdaysView",
    components: {
      Card,
    },
    computed: {
      birthdays() {
        return this.$store.getters.birthdays
      },
      pronoun() {
        return this.birthdays.length === 1 ? '你' : '你们'
      },
    },
    filters: {
      formatDate,
      firstNameInKedama,
    },
  }
</script>

<style module>
  .header, .footer {
    text-align: center;
  }

  .header {
    composes: page-header from '../global.css';
  }

  .cardlist {
    composes: page-section from '../global.css';

    display: flex;
    flex-wrap: wrap;
    margin-top: 10px;
  }

  .card, .empty {
    flex: 1 1 20%;
  }

  .firstName {
    position: absolute;
    margin-top: 10px;
    width: 100%;
  }

  .first {
    font-family: monospace;
    font-size: 12px;
    color: #777;
    margin: 0;
  }

  .first_desc {
    color: #AAA;
    font-size: 12px;
    opacity: 0;
    transition: opacity .2s linear;
    margin: .5rem 0 0;
  }

  .card:hover .first_desc {
    opacity: 1;
  }

  .card_name {
    font-size: 16px;
  }

  .card_year {
    margin-top: 1em;
    font-size: 14px;
    color: #777;
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
    color: #ccc;
  }
</style>
