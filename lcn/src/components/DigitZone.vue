<template>
    <div id="digit" :digit="digit" :channel="channel">
        {{ channel }}
    </div>
</template>

<script>
import { channelStates } from '../states/channelStates.js'
export default {
  data () {
    return {
      digit: '',
      channel: '',
      elapsed: null, //boolean
      timer: null,
      channelStates
    }
  },
  created () {
    document.addEventListener('keydown', this.showChannel)
  },
  methods: {
    showChannel (event) {
      if ((event.keyCode >= 48 && event.keyCode <= 57) || (event.keyCode >= 96 && event.keyCode <= 105)) { // numpad & keybord buttons
        if (!this.elapsed) { clearTimeout(this.timer) }
        this.digit += event.key
        this.elapsed = false
        if (this.digit.length >= 2) {
          this.channel = this.digit[this.digit.length - 2] + this.digit[this.digit.length - 1]
          this.timer = setTimeout(() => {
            this.channelStates.channelRequest = this.channel
            console.log(this.channelStates.channelRequest)
            this.elapsed = true
            this.digit = ''
            this.channel = ''
            return this.channelStates.channelRequest
          }, 2000)
        } else {
          this.channel = this.digit
          this.timer = setTimeout(() => {
            this.elapsed = true
            this.channelStates.channelRequest = this.channel
            this.digit = ''
            this.channel = ''
            console.log(this.channelStates.channelRequest)
            return this.channelStates.channelRequest
          }, 2000)
        }
      }
    },
  }

}
</script>

<style lang="less" scoped>
    div {
        font-family: Arial, Helvetica, sans-serif;
        position: absolute;
        top:500px;
        left: 300px;
        color: white;
        height: 200px;
        width: 200px;
    }

    #digit{
        font-size: 50px;
        font-weight: bolder;
        text-align: center;
        line-height: 4em;
    }

</style>
