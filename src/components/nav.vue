<template>
  <nav :class="$style.wrap">
    <div :class="$style.inner_wrap">
      <h1>
        <a href="https://www.craft.moe/" :class="$style.link_kedama">毛玉線圈物語</a>
        <router-link to="/" :class="$style.link_home">玩家数据统计</router-link>
        <sup :class="$style.link_kpcc"><a href="https://kpcc.moe/">｢非官方｣</a></sup>
      </h1>
      <dl :class="$style.link_list">
        <router-link tag="div" to="/players">
          <dt>有效玩家</dt>
          <dd>{{validPlayerCount}}</dd>
        </router-link>
        <router-link tag="div" to="/birthdays">
          <dt>今日生日</dt>
          <dd>{{birthdayCount}}</dd>
        </router-link>
        <router-link tag="div" to="/Yesterday">
          <dt>昨日入服</dt>
          <dd>{{yesterdayLogUpCount}}</dd>
        </router-link>
        <router-link tag="div" to="/Last">
          <dt>昨日上线</dt>
          <dd>{{yesterdayLogInCount}}</dd>
        </router-link>
      </dl>
    </div>
  </nav>
</template>

<script>
  export default {
    data() {
      return {
        today: new Date(),
      }
    },
    computed: {
      validPlayerCount() {
        return this.$store.state.players.filter(p => !p.banned).length
      },
      birthdayCount() {
        return this.$store.getters.birthdays.length
      },
      yesterdayLogInCount() {
        return this.$store.getters.yesterdayLogIn.length
      },
      yesterdayLogUpCount() {
        return this.$store.getters.yesterdayLogUp.length
      },
    },
  }
</script>

<style module>
  .wrap {
    background: #222 linear-gradient(to bottom, #111, #333);
  }

  .inner_wrap {
    composes: middle-section from '../global.css';

    display: flex;
    align-items: center;
    color: #DDD;

    & h1 {
      flex: 1;
      font-size: 17px;

      & a {
        color: inherit;
        text-decoration: none;

        &:hover {
          color: #FFF;
        }
      }
    }
  }

  .link_kedama {
    font-weight: 600;
  }

  .link_home {
    font-weight: 300;
    margin: 0 .3em;
    padding-bottom: .2em;
    border-bottom: 1px solid #444;
  }

  .link_kpcc {
    font-weight: 300;
  }

  .link_list {
    flex: 0;
    display: flex;
    margin: 0;
    padding: 0;
    position: relative;

    & div {
      flex: 1 1 4em;
      text-align: center;
      white-space: nowrap;
      padding: 10px 20px;
      cursor: pointer;
      position: relative;

      &::before {
        content: '';
        display: block;
        position: absolute;
        left: 0;
        top: 50%;
        height: 30px;
        width: 1px;
        margin-top: -15px;
        background: color(#fff alpha(30%));
      }

      &:global(.router-link-active)::after {
        content: '';
        display: block;
        border-width: 8px 8px 0;
        border-style: solid;
        border-color: #333 transparent;
        position: absolute;
        top: 100%;
        left: 50%;
        margin-left: -8px;
      }
    }

    &::after {
      content: '';
      display: block;
      position: absolute;
      right: 0;
      top: 50%;
      height: 30px;
      width: 1px;
      margin-top: -15px;
      background: color(#fff alpha(30%));
    }

    & dt {
      font-size: 13px;
    }

    & dd {
      font-size: 18px;
      margin: 4px 0 0;
      text-align: center;
    }
  }
</style>
