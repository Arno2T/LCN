<template>
  <div class="player">
    <video id="media-video" :src="this.channelStates.channelResponse.videoId" controls autoplay loop muted>{{ refreshTime() }}</video>
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
    //On récupère récupère l'élément media-video
    //On passe au state le temps d'avancement de la video
    SelectVideo () {
      const video = document.querySelector('#media-video')
      videoStates.vidDuration = video.duration
      videoStates.curTime = video.currentTime / video.duration
    },
    //Refresh chaque seconde de l'avancement de la video
    refreshTime () {
      setInterval(this.SelectVideo, 1000)
    },

  },
}
</script>

<style lang="less" scoped>
video {
  width: 99.5vw;
  height: 98vh;
}
</style>
