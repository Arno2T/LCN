<template>
  <div class="player">
    <video id="media-video" :src="this.channelStates.channelResponse.videoId" controls autoplay loop muted>{{ refreshTime() }} {{ timeVideoStart() }}</video>
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
  // created(){
  //   this.channelStates.channelResponse= {
  //   id: 1,
  //   chaine: 'TF1',
  //   src: './assets/logoChaines/tf1.png',
  //   videoId: 'http://mazwai.com/system/posts/videos/000/000/192/original/le-temps-dun-paris.mp4?1445792574',
  //   miniature: './assets/miniatures/paris.jpg',
  //   programme: "Ici c'est Paris",
  //   duree: 180
  //   }
  // },
  methods: {
    //On récupère l'élément media-video
    //On passe au states le temps d'avancement de la video
    SelectVideo () {
      const video = document.querySelector('#media-video')
      videoStates.vidDuration = video.duration
      videoStates.curTime = video.currentTime / video.duration
    },
    // Refresh chaque seconde de l'avancement de la video
    refreshTime () {
      setInterval(this.SelectVideo, 1000)
    },
    //Va envoyer l'heure à laquelle le programme a démarré
    timeVideoStart () {
      const moment = require('moment')
      videoStates.vidStart = moment().format('HH:mm');
    },
    //Va envoyer la durée du programme dans le states
    videoDuration () {
      const video = document.querySelector('#media-video')
      videoStates.vidDuration = video.duration
    }
  },
}
</script>

<style lang="less" scoped>
video {
  width: 99.5vw;
  height: 98vh;
}
</style>
