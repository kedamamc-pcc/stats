<template functional>
  <article :class="[data.class, $style.board_wrap]">
    <h1>{{props.title}}</h1>
    <p :class="$style.description">{{props.description}}</p>
    <ol>
      <li v-for="(r, idx) of props.ranks" :key="idx">
        <code>{{r.name}}</code>
        <span>
          <strong>{{r.score}}</strong>
          <em>{{props.unit}}</em>
        </span>
      </li>
    </ol>
    <p :class="$style.lore">{{props.lore}}</p>
  </article>
</template>

<style module>
  .board_wrap {
    & h1 {
      text-align: center;
      font-size: 1.5em;
      margin: 20px 0 15px;
    }

    & ol {
      margin: 15px 0;
      padding: 0 30px;
      list-style-position: inside;
      position: relative;

      & code {
        position: absolute;
        left: 60px;
      }

      & span {
        float: right;
      }

      & strong {
        font-weight: normal;
        font-family: monospace;
      }

      & em {
        font-style: normal;
        margin-left: .3em;
      }
    }

  }

  .description {
    margin: 15px 20px;
  }

  .lore {
    margin: 15px 20px 20px;
  }
</style>
