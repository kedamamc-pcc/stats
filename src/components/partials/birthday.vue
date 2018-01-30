<template>
  <div id="birthday" @mouseenter="msgId = 0" @mouseleave="msgId = 1">
    <div class="wrap">
      <div class="title">
        <i>🎂</i>
        <transition name="msg" mode="out-in">
          <h2 :key="msgId">{{msgs[msgId]}}</h2>
        </transition>
      </div>
      <ul>
        <li v-for="p of players"><code>{{p}}</code></li>
        <li v-for="x of 5 - (players.length % 5 || 5)"></li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['players'],
    data() {
      return {
        msgs: [
          'N 年前的今天，你们来到了毛线',
          '生日快乐',
        ],
        msgId: 0,
      }
    },
    mounted() {
      setTimeout(_ => this.msgId = 1, 2000)
    },
  }
</script>

<style>
  @import '@/styles/global.css';

  #birthday {
    border-top: 1px solid #fff9;
    border-bottom: 1px solid #0003;

    & > .wrap {
      width: var(--pageWidth);
      margin: 0 auto;
      padding: 10px 0;

      &::after {
        content: '';
        display: block;
        clear: both;
      }
    }

    & .title {
      text-align: center;

      & i {
        font-style: normal;
        font-size: 64px;
      }

      & h2 {
        font-size: 20px;
        font-weight: normal;
        margin: 0 0 10px;
      }
    }

    & ul {
      display: flex;
      flex-wrap: wrap;
      margin: 0;
      padding: 0;
      list-style: none;
    }

    & li {
      flex: 1 1 20%;
      text-align: center;
    }

    & code {
      font-size: 1.1rem;
      line-height: 1.5;
    }

    /* Animation */

    & .msg-enter, & .msg-leave-to {
      opacity: 0;
    }

    & .msg-enter-to, & .msg-leave {
      opacity: 1;
    }

    & .msg-enter-active, & .msg-leave-active {
      transition: opacity .3s linear;
    }
  }
</style>
