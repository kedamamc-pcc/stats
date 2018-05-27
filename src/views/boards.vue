<template>
  <div :class="$style.view_wrap">
    <section :class="$style.group">
      <header :class="$style.group_header">
        <h1 :class="$style.group_title">玩家统计榜单</h1>
      </header>
      <div :class="$style.boards">
        <div v-for="(d, idx) of rankData" :class="$style.cell">
          <Board :key="idx" v-bind="d"/>
        </div>
        <div v-for="n of 3 - (rankData.length % 3 || 3)" :class="$style.cell"></div>
      </div>
    </section>
  </div>
</template>

<script>
  import Board from '@/components/board'

  // TODO: Example rank data
  const rankData = new Array(11).fill([
    {
      title: 'Something',
      description: 'There is something somewhere',
      unit: 'WTH',
      ranks: [
        {name: 'Somebody', score: 23333},
        {name: 'Somebody', score: 23333},
        {name: 'Somebody', score: 23333},
        {name: 'Somebody', score: 23333},
        {name: 'Somebody', score: 23333},
        {name: 'Somebody_Somewhere', score: 23333},
        {name: 'Somebody_Somewhere', score: 23333},
        {name: 'Somebody_Somewhere', score: 23333},
        {name: 'Somebody_Somewhere', score: 23333},
        {name: 'Somebody_Somewhere', score: 23333},
      ],
      lore: 'WTH????',
    },
  ])

  export default {
    name: 'BoardsView',
    components: {
      Board,
    },
    data() {
      return {
        rankData,
      }
    },
  }
</script>

<style module>
  .group_header {
    border: solid #f0f;
    border-width: 1px 0;
    padding: 20px 0;
    margin-bottom: -1px;
    position: relative;
  }

  .group_title {
    composes: page-section from '../global.css';

    font-size: 1.5em;
    font-weight: normal;
  }

  .boards {
    composes: page-section from '../global.css';

    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  .cell {
    flex: 1 1 30%;
    border: 1px solid #ddd;
    margin-bottom: -1px;

    &:nth-child(3n + 2) {
      margin-left: -1px;
      margin-right: -1px;
    }
  }
</style>
