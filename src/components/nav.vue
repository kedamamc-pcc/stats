<template>
  <nav :class="$style.root">
    <div :class="$style.wrap">
      <h1>
        <a href="https://www.craft.moe/" :class="$style.link_kedama">毛玉線圈物語</a>
        <router-link to="/" :class="$style.link_home">玩家数据统计</router-link>
        <sup :class="$style.link_kpcc"><a href="https://kpcc.moe/">｢非官方｣</a></sup>
      </h1>
      <dl>
        <router-link tag="div" to="/players">
          <dt>有效玩家</dt>
          <dd>{{validPlayerCount}}</dd>
        </router-link>
        <router-link tag="div" to="/Birthday">
          <dt>今日生日</dt>
          <dd>{{Birthday}}</dd>
        </router-link>
        <router-link tag="div" to="/Yesterday">
          <dt>昨日入服</dt>
          <dd>{{Yesterday}}</dd>
        </router-link>
        <router-link tag="div" to="/Last">
          <dt>昨日上线</dt>
          <dd>{{Time_Last}}</dd>
        </router-link>
      </dl>
    </div>
  </nav>
</template>

<script>
  export default {
    computed: {
      validPlayerCount() {
        return this.$store.state.players.filter(p => !p.banned).length
      },
      /**
       * @return {number}
       */
      Birthday() {
        return this.$store.state.players.filter(x => {
          let birthday = new Date(x.time_start)
          let M = (birthday.getMonth() + 1) + "-" + birthday.getDate()
          let D = new Date()
          let T = (D.getMonth() + 1) + "-" + D.getDate()
          return M === T
        }).length
      },
      /**
       * @return {number}
       */
      Yesterday() {
        return this.$store.state.players.filter(x => {
          let birthday = new Date(x.time_start)
          let M = birthday.getFullYear() + "-" + (birthday.getMonth() + 1) + "-" + birthday.getDate()
          let D = new Date()
          let T = new Date(D.getTime() - (24 * 60 * 60 * 1000))
          let S = new Date(T)
          let P = S.getFullYear() + "-" + (S.getMonth() + 1) + "-" + S.getDate()
          return M === P
        }).length
      },
      /**
       * @return {number}
       */
      Time_Last() {
        return this.$store.state.players.filter(x => {
          let birthday = new Date(x.time_last)
          let M = birthday.getFullYear() + "-" + (birthday.getMonth() + 1) + "-" + birthday.getDate()
          let D = new Date()
          let T = new Date(D.getTime() - (24 * 60 * 60 * 1000))
          let S = new Date(T)
          let P = S.getFullYear() + "-" + (S.getMonth() + 1) + "-" + S.getDate()
          return M === P
        }).length
      }
    },
  }
</script>

<style module>
  .root {
    background: #222 linear-gradient(to bottom, #111, #333);
  }

  .wrap {
    composes: app-section from '../global.css';

    display: flex;
    color: #DDD;

    & h1 {
      flex: 1;
      font-size: 16px;

      & a {
        color: inherit;
        text-decoration: none;
      }
    }

    & dl {
      flex: 0;
      display: flex;
      margin: 0;
      padding: 0;
      & div {
        flex: 1 1 4em;
        text-align: center;
        white-space: nowrap;
        padding: 0 10px;
      }

      & dt {
        font-size: 14px;
        cursor: pointer;

      }

      & dd {
        font-size: 18px;
        margin: 0;
        text-align: center;
        cursor: pointer;

      }
    }
  }

  .link_kedama {
    font-weight: 600;
  }

  .link_home {
    font-weight: 300;
  }

  .link_kpcc {
    font-weight: 300;
  }
</style>
