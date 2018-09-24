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
        EventBus.$emit('curTimeChange', this.curTime)
      } else {
        EventBus.$emit('En pause', this.curTime)
      }
    }
  }
})
