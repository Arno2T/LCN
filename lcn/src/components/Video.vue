<template>
  <div class="player">
    <video id="media-video" src="http://vjs.zencdn.net/v/oceans.mp4" controls loop muted>{{ refreshTime() }}</video>
  </div>
</template>

<script>
import { videoStates } from '../states/videoState'

export default {
  name: 'Video',
  data () {
    return {
   
    }
  },
  methods: {
    SelectVideo () {
      const video = document.querySelector('#media-video')
      videoStates.curTime = video.currentTime / video.duration
    },
    refreshTime () {
      setInterval(this.SelectVideo, 1000)
    }
  }
}
</script>

<style lang="less" scoped>
video {
  width: 99vw;
  height: 97vh;
}
</style>
