<template>
  <div id="app">
    <Date />
    <InfoBanner />
    <Rail/>
    <Video />
  </div>
</template>

<script>
import Video from './components/Video.vue'
import Date from './components/Date.vue'
import InfoBanner from './components/InfoBanner.vue'
import Rail from './components/Rail.vue'

export default {
  name: 'app',
  components: {
    Video,
    Date,
    InfoBanner,
    Rail
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