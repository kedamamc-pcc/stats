<template>
    <div>
      <p v-for="(list,k) in Time_Last">{{list.name}}</p>
    </div>
</template>

<script>
	export default {
		name: "last",
    computed:{
      /**
       * @return {number}
       */
      Time_Last() {
        return this.$store.state.players.filter(x => {
          let birthday = new Date(x.time_last)
          let M = birthday.getFullYear() + "-" + (birthday.getMonth() + 1) + "-" + birthday.getDate()
          let D = new Date()
          let T = new Date(D.getTime() - (24 * 60 * 60 * 1000))
          let S = new Date(T)
          let P = S.getFullYear() + "-" + (S.getMonth() + 1) + "-" + S.getDate()
          return M === P
        })
    }}
	}
</script>

<style scoped>

</style>
