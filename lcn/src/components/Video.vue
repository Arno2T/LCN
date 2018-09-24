<template>
  <div class="player">
    <video id="media-video" :src="this.channelStates.channelResponse.videoId" autoplay loop>{{ refreshTime() }} {{ timeVideoStart() }}</video>
  </div>
</template>

<script>
import { videoStates } from '../states/videoState'
import { channelStates } from '../states/channelStates'

export default {
  name: 'Video',
  data () {
    return {
      videoStates,
      channelStates
    }
  },
  methods: {
    // On récupère l'élément media-video
    // On passe au states le temps d'avancement de la video
    SelectVideo () {
      const video = document.querySelector('#media-video')
      videoStates.vidDuration = video.duration
      videoStates.curTime = video.currentTime / video.duration
    },
    // Refresh chaque seconde de l'avancement de la video
    refreshTime () {
      setInterval(this.SelectVideo, 1000)
    },
    // Va envoyer l'heure à laquelle le programme a démarré
    timeVideoStart () {
      const moment = require('moment')
      videoStates.vidStart = moment().format('HH:mm');
    }
  }
}
</script>

<style lang="less" scoped>
video {
  width: 99.5vw;
  height: 98vh;
}
</style>
