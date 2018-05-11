<template>
  <div>
    <header :class="$style.header">
      <h1 v-if="birthdays.length">N 年前的 {{$store.state.today | formatDate('M 月 D 日')}}，{{pronoun}}来到了毛线</h1>
      <h1 v-else>今天没有人过生日</h1>
    </header>

    <section :class="$style.card_con">
      <ul>
        <li v-for="p of birthdays">
          <a :href="`https://stats.craft.moe/player/${p.uuid}`" target="_blank" :class="$style.card">
            <p :class="$style.card_name"><code>{{p.name}}</code></p>
            <!--<p :class="$style.card_year"><span>{{new Date(p.time_start).getFullYear()}}</span></p>-->
          </a>
        </li>
        <li v-for="n of 5 - (birthdays.length % 5 || 5)"></li>
      </ul>
    </section>

    <footer v-if="birthdays.length" :class="$style.footer">感谢有{{pronoun}}，生日快乐！</footer>
  </div>
</template>

<script>
  import {formatDate} from '@/common/filters'

  export default {
    name: "BirthdaysView",
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
    },
  }
</script>

<style module>
  .card_con {
    composes: middle-section from '../global.css';
  }

  .card_con ul {
    margin: 10px 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
  }

  .card_con li {
    flex: 1 1 20%;
  }

  .card {
    display: block;
    padding: 20px;
    border-radius: 6px;
    color: inherit;
    text-decoration: none;
    transition: background .1s linear;
  }

  .card:hover {
    background: #f3f3f3;
  }

  .card p {
    margin: 0;
    line-height: 1;
  }

  .card_name {
    font-size: 16px;
  }

  .card_year {
    margin-top: 1em;
    font-size: 14px;
    color: #777;
  }

  .header, .footer {
    text-align: center;
  }

  .header {
    border-bottom: 1px solid #CCC;
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
