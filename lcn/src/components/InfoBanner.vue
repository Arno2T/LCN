<template>
  <div class="info" :chaine="this.channel()">
    Info Banner
    {{this.chaine}}
    
  </div>
</template>

<script>
import {channelStates} from '../states/channelStates.js'
export default {
  name: 'InfoBanner',
  data(){
    return{
      channelStates,
      chaine:null,
    }   
  },
  methods:{
    channel(){
      this.chaine=this.channelStates.channelRequest
    }
  }
}
</script>

<style lang="less" scoped>
.info {
  position: absolute;
  top: 700px;
  height: 20vh;
  width: 99vw;
  background-color: red;
}
</style>
