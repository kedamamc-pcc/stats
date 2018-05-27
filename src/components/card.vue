<template>
  <div :class="$style.wrap">
    <p :class="$style.name">{{data.name}}</p>
    <slot :class="$style.slot"/>
  </div>
</template>

<script>
  export default {
    name: 'Card',
    props: ['data'],
  }
</script>

<style module>
  .wrap {
    padding: 20px;
    border-radius: 6px;
    transition: background .1s linear;
    box-sizing: border-box;
    position: relative;
  }

  .wrap:hover {
    background: #f3f3f3;
  }

  .name {
    margin: 0;
    line-height: 1;
    font-size: 16px;
    font-family: monospace;
  }

  .slot {
    margin-top: 1rem;
  }
</style>
