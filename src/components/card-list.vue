<template functional>
  <div :class="[data.class, $style.wrap]">
    <Card v-for="p of props.players"
          :key="p.uuid"
          :data="p"
          :class="$style.card"
          :style="{flexBasis: 100 / props.rowSize + '%'}"/>
    <div v-for="n of props.rowSize - (props.players.length % props.rowSize || props.rowSize)"
         :class="$style.empty"
         :style="{flexBasis: 100 / props.rowSize + '%'}"></div>
  </div>
</template>

<script>
  export default {
    functional: true,
    props: {
      players: Array,
      rowSize: {
        type: Number,
        default: 5,
      },
    },
  }
</script>

<style module>
  .wrap {
    display: flex;
    flex-wrap: wrap;
  }

  .card, .empty {
    flex: 1 1;
  }
</style>
