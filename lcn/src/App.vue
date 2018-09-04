<template>
  <div id="app">
    <Date v-if="railDisplay.value"/>
    <InfoBanner v-if="railDisplay.value" />
    <Video />
    <Rail v-if="railDisplay.value"/>
    <digit-zone/>
  </div>
</template>

<script>
import {channelState} from './states/channel-state'
import Video from './components/Video.vue'
import Date from './components/Date.vue'
import InfoBanner from './components/InfoBanner.vue'
import DigitZone from './components/DigitZone.vue'
import Rail from './components/Rail.vue'

export default {
  name: 'app',
  components: {
    Video,
    Date,
    InfoBanner,
    Rail,
    'digit-zone': DigitZone
  },
  data () {
      return {
        channelState,
        movies: null,
        railDisplay: {
          value: false
        }
      }
    },
    async created() {
      try {
        let reponse = await fetch('channel.json')
        this.movies = await response.json();
      } catch (error) {
        console.log(error)
      }
    },
    created() {
      document.addEventListener('keydown', this.menuDisplay)
    },
    beforeDestroy(){
      document.removeEventListener('keydown', this.menuDisplay)
    },
    methods: {
      menuDisplay(event){
        if (event.keyCode == "77"){
          if (this.railDisplay.value === false){
            this.railDisplay.value = true
          } else {
            this.railDisplay.value = false
          }
        }
      }
    }
}
</script>

<style lang="less">
@import '~normalize.css';

body {
  height: 100vh;
  width: 100vw;
}

#app {
  background-color: black;
  width: 99.5vw;
  height: 98vh;
  .swipe{
    overflow: hidden;
    flex-grow: 1;
  }
}
</style>
