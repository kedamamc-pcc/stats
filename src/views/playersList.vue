<template>
  <div>
    <div id="head">
      {{players}}
      <h3>{{flag?'由早到晚。':'由晚到早。'}}</h3>
      <a @click="flag = !flag">切换排序</a> |
      <a @click="flag1 = !flag1">切换黑名单</a>
    </div>
    <div v-for="(v,k) in data" :key="k">
      <h3>{{k}}</h3>
      <div id="list">
        <div v-for="(val,key) in data[k]" :key="key" id="names">
          <div id="item">
            <span id="name">{{val.name}}</span>
          </div>
        </div>
      </div>
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
#list{
  display: flex;
  flex-wrap: wrap;
}
  #names{
    width: 100px;
    height: 25px;
    margin: 8px;
    font-size: 10px;
    border: 1px solid #BBB;
    border-radius: 5px;
    box-shadow: 0 1px 3px #BBB;
    box-sizing: border-box;
    background: #F6F6F6;
    text-align: center;
    line-height: 25px;
  }
  a{
    cursor: pointer;
  }
</style>
