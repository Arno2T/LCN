import Vue from 'vue'
import { EventBus } from '../main'

export let channelState = new Vue({
  data: {
    channel: null,
    selectedChannel: null,
    chanFocus: 1
  }
})
