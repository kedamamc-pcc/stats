<template>
  <div>
    <h3>当前时间:{{time}}</h3>
   <div class="B">
     <p v-for="p in players">
       {{p.name}}
     </p>
   </div>
  </div>
</template>

<script>
  export default {
    name: 'YesterdayView',
    computed: {
      players() {
        return this.$store.getters.yesterdayLogIn
      },
      time(){
        let D = new Date()
        let T = (D.getMonth() + 1) + "月" + D.getDate()+"日"
        return T
      }
    },
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
