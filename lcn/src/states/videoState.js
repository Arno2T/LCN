import Vue from 'vue'
import { EventBus } from '../main'

export let videoStates = new Vue({
  data: {
    curTime: 0,
    dataVideo: null
  },
  watch: {
    curTime: function () {
      if (this.curTime) {
        EventBus.$emit('dataChange', this.curTime)
      } else {
        EventBus.$emit('En pause', this.curTime)
      }
    }
  }
})
