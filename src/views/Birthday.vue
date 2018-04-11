<template>
  <div>
    <code>N年前的{{time}}你们来到了毛线！感谢有你！</code>
    <p v-for="(list,k) in Birthday" :key="k">{{list.name}}</p>
  </div>
</template>

<script>
  import _ from 'lodash'
  export default {
    name: "birthday",
    computed: {
      time(){
        let D = new Date()
        let T = (D.getMonth() + 1) + "月" + D.getDate()+"日"
        return T
      },
      Birthday(){
        let re=_.groupBy(this.$store.state.players,function(item){
          return ((new Date(item.time_start).getMonth()+1)+"-"+new Date(item.time_start).getDate());
        })
        let D = new Date()
        return re[(D.getMonth()+1)+"-"+D.getDate()]
      }
    }
  }
</script>

<style scoped>

</style>
