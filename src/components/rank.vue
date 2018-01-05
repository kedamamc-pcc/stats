<script>
  export default {
    name: 'Rank',
    functional: true,
  }
</script>

<template functional>
  <div class="ranking">
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

<style lang="postcss">
  @import '../styles/global.css';

  .ranking {
    background: #fff;
    border-radius: 5px;
    box-sizing: border-box;
    margin-top: 10px;
    text-align: center;
    box-shadow: 0 2px 6px #bbb;

    @media (--phone) {
      flex-basis: 100%;
      border-radius: 0;
    }

    @media (--tablet) {
      flex-basis: 48%;
    }

    & strong {
      display: block;
      font-weight: normal;
      padding: 10px;
      border-bottom: 1px solid #D9D9D9;
    }

    & ol {
      padding: 10px 0;
      margin: 0;
      text-align: left;
      list-style-position: inside;
    }

    & li {
      position: relative;
      padding: 0 1em;
      line-height: 1.4rem;
      color: #AAA;
      font-size: small;
      transition: .1s linear;
      transition-property: background, box-shadow;

      &:hover {
        background: #FFF;
        box-shadow: 0 0 3px #CCC;
      }
    }

    & code {
      position: absolute;
      left: 2.5em;
      font-size: medium;
      color: #000;
    }

    & span {
      margin-left: 1em;
      float: right;
    }

    & p {
      margin: 0 10px 10px;
      color: #999;
      font-size: small;
    }
  }
</style>
