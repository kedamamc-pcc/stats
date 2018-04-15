<template>
  <div>
    <div id="head">
      {{players}}
      <h4>{{flag?'由早到晚！':'由晚到早！'}}  |  {{flag1?'无效玩家！':'有效玩家！'}}</h4>
      <a @click="flag = !flag">切换排序</a> | <a @click="flag1 = !flag1">切换黑名单</a>
    </div>
    <hr/>
    <div v-for="(v,k) in data" :key="k">
      <h3>{{k}}</h3>
      <div class="list">
        <div v-for="(val,key) in data[k]" :key="key" class="names" :style="{background:val.banned?'#222':'#F6F6F6',color:val.banned?'#DDD':'#000'}">
          <div class="item">
            <span class="name">{{val.name}}</span>
            <div class="dsj"></div>
            <span class="info">
              <p v-for="(vv,kk) in val.names" :key="kk" class="pp">{{vv.name}}</p>
            </span>
          </div>
        </div>
      </div>
      <hr/>
    </div>
  </div>
</template>

<script>
  export default {
    name: "players-list",
    data() {
      return {
        flag: true,
        flag1: false,
        data: []
      }
    },
    computed: {
      players() {
        let flag = this.flag;
        let flag1 = this.flag1

        function sort(property) { //排序
          return function (obj1, obj2) {
            let a = obj1[property];
            let b = obj2[property];
            if (flag) {
              return a - b;     // 升序
            } else {
              return b - a; //降序
            }
          }
        }
        this.$store.state.players.sort(sort('time_start'))
        let re = _.groupBy(this.$store.state.players.filter(x => x.banned === flag1), function (item) {
          let D = item.time_start
          return (new Date(D).getFullYear() + "-" + (new Date(D).getMonth() + 1));
        })
        this.data = re
      }
    },
    methods: {}
  }
</script>

<style scoped>
  #head{
    text-align: right;
    margin-right: 10%;
  }
  h3{
    padding-left: 10px;
  }
.list{
  display: flex;
  flex-wrap: wrap;
}
  .names{
    width: 130px;
    height: 30px;
    margin: 10px;
    font-size: 10px;
    border: 1px solid #BBB;
    border-radius: 5px;
    box-shadow: 0 1px 3px #BBB;
    box-sizing: border-box;
    background: #F6F6F6;
    text-align: center;
    line-height: 30px;
  }
  .item{
    position: relative;
  }
  .dsj{
    position: absolute;
    left: 120px;
    top: 5px;
    border: 10px solid transparent;
    border-right: 10px solid #222;
    display: none;
    color: #222;
  }
  .info{
    display: inline-block;
    position: absolute;
    left: 140px;
    top: -1px;
    box-sizing: border-box;
    border-radius: 5px;
    /*box-shadow: 0 1px 3px #BBB;*/
    z-index: 1;
    color: #DDD;
    background: #222;
  }
  .pp{
    margin: 0 auto;
    padding: 1px 5px;
    display: none;
    z-index: 1;
  }
  .names:hover .dsj{
    display: block;
  }
  .names:hover .pp{
    display: block;
  }
  a{
    cursor: pointer;
  }
</style>
