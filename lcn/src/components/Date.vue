<template>
  <div class="Date" :clock="boucleDate()" :result="result">
    {{ result }}
  </div>
</template>

<script>
const moment = require('moment')
export default {
  name: 'Date',
  data () {
    return {
      moment: moment,
      result: null
    }
  },
  methods: {
    boucleDate () {
      setInterval(this.defineDate, 1000)
    },

    defineDate () {
      moment.locale('fr')
      this.result = moment().format('LLLL')
    }
  }
}
</script>

<style lang="less" scoped>
.Date {
  font-family: 'Segoe UI', Tahoma, Verdana, sans-serif;
  position: absolute;
  color: white;
  text-shadow: 2px 2px black;
  font-size: 45px;
  margin-left: 75%;
  padding-top: 30px;
}
</style>
