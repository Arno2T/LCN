<template>
  <div id="app">
    <Video />
  </div>
</template>

<script>
import Video from './components/Video.vue'

export default {
  name: 'app',
  components: {
    Video
  }
}
</script>

<style lang="less">
#app {
  background-color: black;
  width: 99vw;
  height: 98vh;
}
</style>