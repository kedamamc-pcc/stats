<template>
  <div>
    <code>N年前的{{time}}你们来到了毛线！感谢有你！</code>
    <p v-for="(list,k) in Birthday" :key="k">{{list.name}}</p>
  </div>
</template>

<script>

  export default {
    name: "birthday",
    computed: {
      /**
       * @return {number}
       */
      Birthday() {
        return this.$store.state.players.filter(x => {
          let birthday = new Date(x.time_start)
          let M = (birthday.getMonth() + 1) + "-" + birthday.getDate()
          let D = new Date()
          let T = (D.getMonth() + 1) + "-" + D.getDate()
          return M === T
        })
      },
      time(){
        let D = new Date()
        let T = (D.getMonth() + 1) + "月" + D.getDate()+"日"
        return T
      }
    }
  }
</script>

<style scoped>

</style>
