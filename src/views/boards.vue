<template>
  <div :class="$style.wrap">
    <Board v-for="n of 12" :key="n"/>
  </div>
</template>

<script>
  import Board from '@/components/board'

  export default {
    name: 'board',
    components: {
      Board,
    }
  }
</script>

<style module>
  .wrap {
    composes: app-section from '../global.css';

    background: #9ff;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
</style>
