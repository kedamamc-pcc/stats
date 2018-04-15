<template>
  <div>
    <h3>当前时间:{{time}}</h3>
    <div class="B">
      <p v-for="(list,k) in Time_Last" :key="k">{{list.name}}</p>
    </div>
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
  div{
    text-align: center;
  }
  .B{
    width: 50%;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
  }
  .B p{
    width: 150px;
    height: 30px;
    line-height: 30px;
    background: #F6F6F6;
    margin: 5px;
    box-sizing: border-box;
    border-radius: 5px;
    border: 1px solid #BBB;
    box-shadow: 0 1px 3px #BBB;
    font-size: 10px;
  }
</style>
