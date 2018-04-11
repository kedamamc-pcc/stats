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
      Yesterday() {
        let re=_.groupBy(this.$store.state.players,function(item){
          let D = item.time_start
          return (new Date(D).getFullYear()+"-"+(new Date(D).getMonth()+1)+"-"+new Date(D).getDate());
        })
        let T = new Date().getTime()-(24 * 60 * 60 * 1000)
        return re[new Date(T).getFullYear()+"-"+(new Date(T).getMonth()+1)+"-"+new Date(T).getDate()]
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
