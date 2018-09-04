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
            this.channelState.chanFocus = this.channel.id
            // calcule de la position du logo sru le rail
            const offsetPosition = this.$el.offsetTop + this.$el.clientHeight
            // calcule de la distance entre le bas du logo et le bas du rail
            const distance = this.$el.parentElement.parentElement.clientHeight - offsetPosition
            this.$emit('translate', distance)
            
        }
    }
}
</script>

<style lang="less" scoped>
    img{
        height: 100%;
        width: 100%;
    }
</style>

