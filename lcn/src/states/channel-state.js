import Vue from 'vue'

export let channelState = new Vue({
  data:{
    channel: null,
    selectedChannel: null,
    chanFocus: 1,
    railDisplay: {
      value: false
    }
  }
})
