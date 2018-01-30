<template>
  <header>
    <div class="wrapper">
      <div class="title">
        <strong><a href="https://craft.moe/">毛玉線圈物語</a>玩家数据榜单<sup>「非官方」</sup></strong>
        <span>数据新鲜度：{{update}}</span>
      </div>
      <div class="dashboard">
        <dl>
          <div>
            <dt>玩家总数</dt>
            <dd>{{total}}</dd>
          </div>
          <div>
            <dt>昨日登录</dt>
            <dd>{{recentVisit || 0}}</dd>
          </div>
          <div>
            <dt>昨日入服</dt>
            <dd>{{newbies.length || 0}}</dd>
          </div>
          <div>
            <dt>黑名单</dt>
            <dd>{{blacklist.length}}</dd>
          </div>
          <div v-if="missing">
            <dt>&gt;w&lt;</dt>
            <dd>{{missing.length}}</dd>
          </div>
        </dl>
      </div>
    </div>
  </header>
</template>

<script>
  export default {
    props: ['update', 'total', 'recentVisit', 'newbies', 'blacklist', 'missing'],
  }
</script>

<style>
  @import '@/styles/global.css';

  header {
    background: linear-gradient(to top, #222, #333 50%) #333;
    color: #ddd;
    font-size: large;

    @media (--phone) {
      text-align: center;
    }

    &::after {
      content: '';
      display: block;
      clear: both;
    }

    & > .wrapper {
      width: var(--pageWidth);
      margin: 0 auto;
    }

    & .title {
      float: left;
      line-height: 1;
      padding: 1em 0;

      & strong {
        display: block;
        margin-bottom: .5em;
      }

      & a {
        color: #FFF;
        text-decoration: none;
        margin-right: .5em;
      }

      & sup {
        line-height: 1;
        vertical-align: baseline;
        position: relative;
        top: -.5em;
      }

      & span {
        display: block;
        color: #CCC;
        font-size: small;

        @media (--phone) {
          display: block;
          float: none;
          margin-top: 1em;
        }
      }
    }

    & .dashboard {
      float: right;
      padding: 1em 0;

      & dl {
        margin: 0;

        & > * {
          float: left;
          padding: 0 1em;
          border-right: 1px solid #666;
          text-align: center;

          &:first-child {
            border-left: 1px solid #666;
          }
        }

        & dt {
          font-size: small;
          line-height: 1;
        }

        & dd {
          font-size: large;
          line-height: 1;
          margin: .5em 0 0;
        }
      }
    }
  }
</style>
