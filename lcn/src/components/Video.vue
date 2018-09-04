<template>
  <div class="player">
    <video id="media-video" :src="this.channelStates.channelResponse.videoId"  autoplay controls loop>{{ refreshTime() }} </video>
    {{this.message}}
  </div>
</template>

<script>
import { videoStates } from '../states/videoState'
import { channelStates } from '../states/channelStates.js'

export default {
  name: 'Video',
  data () {
    return {
      channelStates,
    }
  },
  methods: {
    SelectVideo () {
      const video = document.querySelector('#media-video')
      videoStates.curTime = video.currentTime / video.duration
    },
    refreshTime () {
      setInterval(this.SelectVideo, 1000)
    },

  },
}
</script>

<style lang="less" scoped>
video {
  width: 99vw;
  height: 97vh;
}
</style>
