<template>
    <img :src= "channel.src"/>
</template>

<script>
import {channelState} from '../states/channel-state'

export default {
    name:'Logo-chaine',
    props:{
        channel : Object
    },
    data () {
      return {
        channelState,
      }
    },
}
</script>

<style lang="less" scoped>

</style>

