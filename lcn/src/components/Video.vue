<template>
  <div class="player">
    <video src="http://vjs.zencdn.net/v/oceans.mp4" controls autoplay loop></video>
  </div>
</template>

<script>
export default {
  name: 'Video'
}
</script>

<style lang="less" scoped>
video {
  width: 99vw;
  height: 97vh;
}
</style>
