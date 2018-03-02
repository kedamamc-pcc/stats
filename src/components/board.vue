<template>
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

<style>
  .board {
    background: #9f9;
  }

  .board li {
    text-align: left;
  }

  .board .lore {
    font-style: italic;
  }
</style>