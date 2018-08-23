<template>
<div>
   <ul class="header">
     <li @click='routerLink("/youji")'>精选游记</li>
     <li @click='routerLink("/gonglue")'>攻略</li>
   </ul>
    <ul class="content">
      <li v-for="(val)  in dataList" >
        <div class="youji">
          <img :src="val.src">
          <div class="title">香港七日游的旅行攻略</div>
          <div class="time">
            <img src="@/assets/image/time.png"/>
            <span>出行日期:20180702</span>&nbsp;&nbsp;
            <span>[7天]</span>&nbsp;&nbsp;
            <span>作者&nbsp;王五 </span>
          </div>
        </div>
      </li>
    </ul>




</div>
</template>
<script>
  import store from '@/vuex/store'
  import axios from 'axios'
  export default ({
    data(){
      return{
        dataList:[]
      }
    },
    store,
    methods: {
      routerLink(path) {
        this.$router.push(path);
      },
      getData() {
        axios.get('./static/data/photodata.json').then((res) => {
          this.dataList = res.data.photoData
        }).catch(() => {

        })
      },
    },
    created(){
      this.getData()
    },

  })

</script>
<style scoped>

.header{
  height: 1rem;
}
  .header li{
    width: 49.5%;
    height: 0.8rem;
    font-size: 0.4rem;
    text-align: center;
    line-height: 0.8rem;
    float: left;
    border-bottom: 1px solid #333;
  }

.youji img{
  height: 3.5rem;
  width: 90%;
  border-radius: 6%;
  display: block;
  margin: 0 auto;
  padding-top: 0.2rem;

}
.youji{
  position: relative;
}
.title{
  position: absolute;
  bottom: 0.7rem;
  left: 0.6rem;
  font-size: 16px;
  color: azure;
}
.time img{
  width: 0.3rem;
  height: 0.3rem;
  display: block;
  position: absolute;
  left: -0.6rem;
 bottom: 0;

}
.time{
  position: absolute;
  bottom: 0.2rem;
  left: 1.2rem;
  font-size: 16px;
  color: azure;
}

</style>
