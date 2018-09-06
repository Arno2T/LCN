import Vue from 'vue'
import { EventBus } from '../main'

export let videoStates = new Vue({
  data: {
    curTime: 0,
    vidDuration: null,
    dataVideo: null,
    vidStart: null
  },
  // Watcher sur notre balise video pour emit :
  // Le currentTime, la videoDuration et l'heure de début du prog. pour les récupérer dans l'infoBanner
  watch: {
    curTime: function () {
      if (this.curTime) {
        EventBus.$emit('dataChange', this.curTime)
      } else {
        EventBus.$emit('En pause', this.curTime)
      }
    },
    vidDuration: function () {
      if (this.vidDuration) {
        EventBus.$emit('dataChange', this.vidDuration)
      } else {
        EventBus.$emit('pas de durée', this.vidDuration)
      }
    },
    vidStart: function () {
      if (this.vidStart) {
        EventBus.$emit('dataChange', this.vidStart)
      } else {
        EventBus.$emit('no start', this.vidStart)
      }
    }
  }
})
