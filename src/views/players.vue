<template>
  <div>
    <div :class="$style.control">
      <ul>
        <li>
          <span>排列顺序</span>
          <a :class="{[$style.active]: ascending}" @click="ascending = true">萌新在后</a>
          <a :class="{[$style.active]: !ascending}" @click="ascending = false">萌新在前</a>
        </li>
        <li>
          <span>玩家类型</span>
          <a :class="{[$style.active]: !showBanned}" @click="showBanned = false">有效玩家</a>
          <a :class="{[$style.active]: showBanned}" @click="showBanned = true">封禁玩家</a>
        </li>
      </ul>
    </div>

    <div v-for="group of data" :class="$style.group">
      <h2>{{group[0] | monthName}}</h2>
      <div :class="$style.namelist">
        <Card v-for="p of group[1]" :key="p.uuid" :data="p" :compact="true" :class="$style.namecard"/>
        <div v-for="n of 5 - (group[1].length % 5 || 5)" :class="$style.empty"></div>
        <!--
        <div v-for="p in group[1]" :key="p.uuid" class="names"
             :style="{background:p.banned?'#222':'#F6F6F6',color:p.banned?'#DDD':'#000'}">
          <div class="item">
            <span class="name">{{p.name}}</span>
            <span class="info">
              <p v-for="(vv,kk) in p.names" :key="kk" class="pp">{{vv.name}}</p>
            </span>
          </div>
        </div>
        -->
      </div>
    </div>
  </div>
</template>

<script>
  import Card from '../components/card'

  export default {
    name: 'PlayersView',
    components: {
      Card,
    },
    data() {
      return {
        ascending: true,
        showBanned: false,
      }
    },
    computed: {
      data() {
        const _players = this.showBanned
          ? this.$store.getters.bannedPlayers
          : this.$store.getters.validPlayers
        const _data = _players.reduce((result, p) => {
          const d = new Date(p.time_start)
          const key = d.getFullYear() + (d.getMonth() + 101 + '').slice(1)
          if (!result[key]) result[key] = []
          result[key].push(p)
          return result
        }, {})
        const _entries = Object.entries(_data).sort((a, b) => a[0] - b[0])
        return this.ascending
          ? _entries
          : _entries.reverse().map(([k, v]) => [k, v.reverse()])
      },
    },
    filters: {
      monthName(val) {
        return val.slice(0, 4) + ' 年 ' + Number(val.slice(4)) + ' 月'
      },
    },
  }
</script>

<style module>
  .control {
    composes: page-section from '../global.css';

    margin-top: 40px;
  }

  .control ul {
    margin: 0;
    padding: 0;
    list-style: none;
    float: right;
    border-right: 1px solid #555;
  }

  .control li {
    display: inline-block;
    border-left: 1px solid #555;
    padding: 5px 10px;
    line-height: 1;
  }

  .control span::before {
    content: '【';
  }

  .control span::after {
    content: '】';
  }

  .control a {
    cursor: pointer;
    color: #555;
  }

  .control a:last-child {
    margin-left: .5em;
  }

  .control .active {
    cursor: default;
    color: red;
  }

  .group {
    composes: page-section from '../global.css';

    margin-bottom: 80px;
  }

  .group h2 {
    font-size: 24px;
    font-weight: 300;
    margin: 0 10px 10px;
    color: #777;
  }

  .namelist {
    display: flex;
    flex-wrap: wrap;
  }

  .namecard, .empty {
    flex: 1 1 20%;
  }
</style>
