<template>
  <transition name="spinner">
    <div v-show="show" :class="$style.wrap">
      <i :class="$style.i1"></i>
      <i :class="$style.i2"></i>
      <i :class="$style.i3"></i>
      <i :class="$style.i4"></i>
    </div>
  </transition>
</template>

<script>
  export default {
    name: 'Spinner',
    computed: {
      show() {
        return this.$store.state.spinner
      },
    },
  }
</script>

<style module>
  .wrap {
    text-align: center;
    height: 40px;
  }

  .wrap::before {
    content: '';
    display: inline-block;
    height: 100%;
    vertical-align: middle;
  }

  .wrap i {
    display: inline-block;
    width: 16px;
    height: 16px;
    margin: 0 4px;
    background: #999;
    animation-name: spin;
    animation-duration: 2s;
    animation-iteration-count: infinite;
    vertical-align: middle;
  }

  .i2 {
    animation-delay: calc(.2s * 1);
  }

  .i3 {
    animation-delay: calc(.2s * 2);
  }

  .i4 {
    animation-delay: calc(.2s * 3);
  }

  @keyframes spin {
    0% {
      transform: rotate(0);
      background: #999;
    }

    33% {
      transform: rotate(90deg);
      background: #F39F0D;
    }

    66% {
      background: #999;
    }

    100% {
      transform: rotate(90deg);
      background: #999;
    }
  }
</style>

<style>
  .spinner-enter, .spinner-leave-to {
    opacity: 0;
  }

  .spinner-leave, .spinner-enter-to {
    opacity: 1;
  }

  .spinner-enter-active, .spinner-leave-active {
    transition: opacity .2s linear;
  }
</style>
