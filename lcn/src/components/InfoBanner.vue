<template>
  <div class="info">
    <div class="tib">
      <div class="i">
        <img src="../images/baleine.jpg"/>
      </div>
      <div class="tb">
        <h3>Titre du programme en cours</h3>
        <div class="progress">
          <progress id="progress-bar" value="0">{{ refreshTime() }}</progress>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { EventBus } from "../main"
import { videoStates } from '../states/videoState'

export default {
  name: 'InfoBanner',
  data () {
    return {
      videoStates
    }
  },
  methods: {
    upTime () {
      const progress = document.querySelector('#progress-bar')
      progress.value = this.videoStates.dataVideo
    },

    refreshTime () {
      setInterval(this.upTime, 1000)
    }
  },
  mounted(){
    EventBus.$on('dataChange', (data) => {
      this.videoStates.dataVideo = data
    console.log(data)
    })
  }
}
</script>

<style lang="less" scoped>
.info {
  position: absolute;
  top: 680px;
  height: 20vh;
  width: 99vw;
  font-family: Verdana, sans-serif;
  background:linear-gradient(260deg, rgba(255,0,0,0.5) 0%, rgba(255,255,255,0.5) 25%, rgba(255,255,255,0.5) 26%, rgba(128,128,128,0.5) 100%);
  .tib {
    display: flex;
    flex-direction: row;
    width: 800px;
    height: 170px;
    margin-left: 20%;
  }
  .i {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 170px;
    width: 300px;
  }
  .tb {
    flex-direction: column;
    width: 500px;
    height: 170px;
  }
  .progress {
    width: 350px;
    border-color: black;
    #progress-bar {
      width: 350px;
    }
  }
  img {
    width: 250;
    height: 150px;
  }
}
</style>
