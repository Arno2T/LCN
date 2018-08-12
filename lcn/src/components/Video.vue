<template>
  <div class="player">
    <video id="media-video" src="http://vjs.zencdn.net/v/oceans.mp4" controls loop muted></video>
    <progress id="progress-bar" value="0">{{ refreshTime() }}</progress>
  </div>
</template>

<script>

export default {
  name: 'Video',
  methods: {
    upTime () {
    const video = this.$el.querySelector('#media-video')
    const progress = this.$el.querySelector('#progress-bar')
    //console.log(video)
    //console.log(progress)
    progress.value = video.currentTime / video.duration
    },

    refreshTime () {
      setInterval(this.upTime, 1000)
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
