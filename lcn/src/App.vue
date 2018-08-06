<template>
  <div id="app">
    <Date />
    <Video />
  </div>
</template>

<script>
import Video from './components/Video.vue'
import Date from './components/Date.vue'

export default {
  name: 'app',
  components: {
    Video,
    Date
  }
}
</script>

<style lang="less">
#app {
  background-color: black;
  width: 99vw;
  height: 98vh;
}
</style>