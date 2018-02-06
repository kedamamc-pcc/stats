<template>
  <div>
    <span>当前时间:{{time}}</span>
    <p v-for="(list,k) in Time_Last" :key="k">{{list.name}}</p>
  </div>
</template>

<script>
  export default {
    name: "last",
    data(){
      return {}
    },
    computed: {
      time(){
        let D = new Date()
        let T = (D.getMonth() + 1) + "月" + D.getDate()+"日"
        return T
      },
      Time_Last(){
        let re=_.groupBy(this.$store.state.players,function(item){
          let D = item.time_last
          return (new Date(D).getFullYear()+"-"+(new Date(D).getMonth()+1)+"-"+new Date(D).getDate());
        })
        let T = new Date().getTime()-(24 * 60 * 60 * 1000)
        return re[new Date(T).getFullYear()+"-"+(new Date(T).getMonth()+1)+"-"+new Date(T).getDate()]
      }
    }
  }
</script>

<style scoped>

</style>
