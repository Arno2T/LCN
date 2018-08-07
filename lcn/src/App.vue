<template>
  <div id="app">
    <Date />
    <InfoBanner />
    <Video />
  </div>
</template>

<script>
import Video from './components/Video.vue'
import Date from './components/Date.vue'
import InfoBanner from './components/InfoBanner.vue'

export default {
  name: 'app',
  components: {
    Video,
    Date,
    InfoBanner
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