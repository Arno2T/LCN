<template>
  <div id="app">
    <Date />
    <InfoBanner />
    <Video />
    <digit-zone />
  </div>
</template>

<script>
import Video from './components/Video.vue'
import Date from './components/Date.vue'
import InfoBanner from './components/InfoBanner.vue'
import DigitZone from './components/DigitZone.vue'

export default {
  name: 'app',
  components: {
    Video,
    Date,
    InfoBanner,
    'digit-zone': DigitZone
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
