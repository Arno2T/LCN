<template>
    <div :class="{ 'focus': $hasFocus() }">
        <img :src= "channel.src"/>
    </div>    
</template>

<script>
import {channelState} from '../states/channel-state'
import { keyboardNavigation } from '../mixins/keyboard'

export default {
    name:'Logo-chaine',
    mixins: [keyboardNavigation],
    props:{
        channel : Object
    },
    data () {
      return {
        channelState,
      }
    },
    methods: {
        onFocus () {
            console.log('channel focused', this.channel);
            
        }
    }
}
</script>

<style lang="less" scoped>
    img{
        height: 100%;
        width: 100%;

    }
    .focus {
        border: 1px solid red;
    }
</style>

