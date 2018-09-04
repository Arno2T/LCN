<template>
    <div id="rail">
        <LogoChaine class="logo"
            v-for="(channel, index) in channelState.channel"
            :key="index"
            :channel="channel"
            :ref="$registerInGrid(1, index + 1)"
            @translate="move"
        />
        <div v-on:$keyListener="focus($event)"></div>
    </div>
</template>

<script>
import LogoChaine from './LogoChaine.vue'
import { channelState } from "../states/channel-state";
import { keyboardNavigation } from '../mixins/keyboard'

export default {
    name: 'RailChannel',
    mixins: [keyboardNavigation],
    components: {
        LogoChaine
    },
    data() {
        return {
            channelState
        }
    },
    async created (){
        try{
            let response = await fetch("data/channel.json")
            const chan = await response.json()
            this.channelState.channel = chan
        } catch (error){
            console.error(error);
        }
    },
    updated () {
        this.$movePositionInGrid(1, 1)
    },
    methods:{
        move(y){
            const trans = document.getElementById('rail')
            trans.style.transform = "translate(0," + y + "px)"
        }
    }
}
</script>

<style lang="less" scoped>
    #rail {
        position: absolute;
        height: 200vh;
        width: 20vh;
        display: flex;
        flex-direction: column-reverse;
        justify-content: space-around;
    }
    .logo {
        padding: 10px;
        padding-top: 40px;
        height: 12vh;
        width: 17vh;
    }
</style>
