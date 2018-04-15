<template>
  <div>
    <h3>N年前的{{time}}你们来到了毛线！感谢有你！</h3>
    <div class="B">
      <p v-for="(list,k) in Birthday" :key="k">{{list.name}}</p>
    </div>
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
        let re=_.groupBy(this.$store.state.players.filter(x => !x.banned),function(item){
          return ((new Date(item.time_start).getMonth()+1)+"-"+new Date(item.time_start).getDate());
        })
        let D = new Date()
        return re[(D.getMonth()+1)+"-"+D.getDate()]
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
