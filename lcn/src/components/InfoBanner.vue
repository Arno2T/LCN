<template>
  <div class="info">
    <div class="tib">
      <div class="i">
        <img :src="this.channelStates.channelResponse.miniature"/>
      </div>
      <div class="tb">
        <h3>{{ this.channelStates.channelResponse.programme }}</h3>
        <div class="progress">
          <progress id="progress-bar" value="0">{{ refreshTime() }}</progress>
        </div>
        <div class="timer">
          <div class="timeStart">{{ progTimeStart() }}</div>
          <div class="timeEnd">{{ progTimeEnd() }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { EventBus } from '../main'
import { videoStates } from '../states/videoState'
import { channelStates } from '../states/channelStates'

export default {
  name: 'InfoBanner',
  // Récupération de nos states
  data () {
    return {
      videoStates,
      channelStates
    }
  },
  props: {
    img: String,
    title: String
  },
  methods: {
    // On récupère l'élément progress-bar
    // On lui passe les data de la video via le state
    upTime () {
      const progress = document.querySelector('#progress-bar')
      progress.value = this.videoStates.dataVideo
     // console.log(progress.value)
    },
    //Refresh chaque seconde la progress-bar
    refreshTime () {
      setInterval(this.upTime, 1000)
    },
    //On return l'heure de début du programme à notre div timeStart
    progTimeStart () {
      return this.videoStates.vidStart
    },
    //On return l'heure de fin de notre programme à notre div timeEnd
    progTimeEnd () {
      const moment = require('moment')
      const time = this.videoStates.vidDuration
      const minutes = String(Math.floor(time / 60))
      const endTime = moment(this.videoStates.vidStart, 'HH:mm:ss').add(minutes, 'minutes').format('HH:mm');
      return endTime
    }
  },
  //Récupération du changement de la data de notre video
  mounted(){
    EventBus.$on('dataChange', (data) => {
      this.videoStates.dataVideo = data
    })
  }
}
</script>

<style lang="less" scoped>
.info {
  visibility: hidden;
  position: absolute;
  height: 140px;
  width: 100vw;
  bottom: 0;
  font-family: Verdana, sans-serif;
  background:linear-gradient(260deg, rgba(255,0,0,0.5) 0%, rgba(255,255,255,0.5) 25%, rgba(255,255,255,0.5) 26%, rgba(128,128,128,0.5) 100%);
  .tib {
    display: flex;
    flex-direction: row;
    height: 100%;
    margin-left: 20%;
  }
  .i {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
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
  .timer {
    width: 350px;
    font-weight: bold;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  img {
    height: 120px;
  }
}
</style>
