<template>
    <div>
      <span>当前时间:{{time}}</span>
      <p v-for="(list,k) in Yesterday" :key="k">
        {{list.name}}
      </p>
    </div>
</template>

<script>
	export default {
		name: "yesterday",
    computed:{
      /**
       * @return {number}
       */
      Yesterday() {
        return this.$store.state.players.filter(x => {
          let birthday = new Date(x.time_start)
          let M = birthday.getFullYear() + "-" + (birthday.getMonth() + 1) + "-" + birthday.getDate()
          let D = new Date()
          let T = new Date(D.getTime() - (24 * 60 * 60 * 1000))
          let S = new Date(T)
          let P = S.getFullYear() + "-" + (S.getMonth() + 1) + "-" + S.getDate()
          return M === P
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
