<script>
  export default {
    name: 'Rank',
    functional: true,
  }
</script>

<template functional>
  <div class="rank">
    <strong>{{props.title}}</strong>
    <ol>
      <li v-for="it of props.items">
        <code>{{it[0]}}</code>
        <span>{{it[1]}} {{props.unit}}</span>
      </li>
    </ol>
    <p>{{props.description}}</p>
  </div>
</template>
