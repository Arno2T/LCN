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
/*       console.log(this.result) */
    }
  }
}
</script>

<style lang="less" scoped>
.Date {
  position: absolute;
  color: white;
  background-color: black;
  font-size: 45px;
  margin-left: 75%;
  padding-top: 30px;
}
</style>
