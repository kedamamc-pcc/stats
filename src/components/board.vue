<template functional>
  <article class="board">
    <h1>.board</h1>
    <p class="description">.description</p>
    <ol>
      <li v-for="n of 10" :key="n">
        <code>code</code>
        <span>
          <strong>strong</strong>
          <em>em</em>
        </span>
      </li>
    </ol>
    <p class="lore">.lore</p>
  </article>
</template>

<script>
  export default {
    data() {
      return {}
    }
  }
</script>
<style>
  .board {
    background: #9f9;
    flex: 0 0 300px;
    margin-bottom: 30px;
  }

  .board li {
    text-align: left;
  }

  .board .lore {
    font-style: italic;
  }
</style>
