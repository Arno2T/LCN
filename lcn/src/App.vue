<template>
  <div id="app">
    <Date/>
    <InfoBanner/>
    <Rail/>
    <Video/>
  </div>
</template>

<script>
import {channelState} from './states/channel-state'
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
  },
  data () {
      return {
        channelState,
      }
    },
}
</script>

<style lang="less">
#app {
  background-color: black;
  width: 99vw;
  height: 98vh;
  .swipe{
    overflow: hidden;
    flex-grow: 1;
  }
}
</style>