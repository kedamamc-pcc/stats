<template>
  <div :class="$style.boards_wrap">
    <div v-for="(d, idx) of rankData" :class="$style.cell">
      <Board :key="idx" v-bind="d"/>
    </div>
    <div v-for="n of 3 - (rankData.length % 3 || 3)" :class="$style.cell"></div>
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
    name: 'board',
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
  .boards_wrap {
    composes: app-section from '../global.css';

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
