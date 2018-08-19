<template>
    <div id="digit" :digit="digit" :channel="channel">
        {{ channel }}
    </div>
</template>

<script>
export default {
  data () {
    return {
      digit: '',
      channel: '',
      elapsed: null,
      timer: null,
      channelRequest: ''
    }
  },
  created () {
    document.addEventListener('keydown', this.showChannel)
  },
  methods: {
    showChannel (event) {
      if ((event.keyCode >= 48 && event.keyCode <= 57) || (event.keyCode >= 96 && event.keyCode <= 105)) {
          if (!this.elapsed) { clearTimeout(this.timer) }
          this.digit +=event.key
          this.elapsed = false
          if (this.digit.length >= 2) {
              this.channel = this.digit[this.digit.length - 2] + this.digit[this.digit.length - 1]
            this.timer = setTimeout(() => {
              this.channelRequest = this.channel
              this.elapsed = true
              this.digit = ''
              this.channel = ''
              return this.channelRequest
            }, 2000)
          } else {
            this.channel=this.digit
            this.timer = setTimeout(() => {
              this.elapsed = true
              this.channelRequest = this.channel
              this.digit = ''
              this.channel = ''
              return this.channelRequest
            }, 2000)
          }
      }
    },
  }
}
</script>

<style lang="less" scoped>
    div {
        position: absolute;
        top:500px;
        left: 300px;
        color: white;
        height: 200px;
        width: 200px;
        border: 3px solid white;
    }

    #digit{
        font-size: 50px;
        font-weight: bolder;
        text-align: center;
        line-height: 4em;
    }

</style>
