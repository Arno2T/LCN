<template>
    <div id="digit" :digit="digit" :digitId="digitId" :channel="channel">
        {{ channel}}
    </div>
</template>

<script>
export default {
  data () {
    return {
      channel: null,
      digit: new String(),
      digitId: 0
    }
  },
  created () {
    document.addEventListener('keydown', this.digitListener1)
    document.addEventListener('keydown', this.digitListener2)
  },
  methods: {
    digitListener1 (event) {
      console.log(event)
      if ((event.keyCode >= 48 && event.keyCode <= 57) || (event.keyCode >= 96 && event.keyCode <= 105)) {
        this.digit += event.key
        let long = this.digit.length
        if (this.digit.length < 2) {
          this.channel = this.digit
        } else {
          this.digitId = long
          this.channel = this.digit[this.digitId - 2] + this.digit[this.digitId - 1]
        }
        console.log(this.channel)

        //    this.digit+= event.key
        //    let truc=this.digit.length
        //    this.digitId=truc
      }
    }
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
