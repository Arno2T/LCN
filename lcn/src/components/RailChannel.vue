<template>
    <div id="rail">
        <LogoChaine class="logo"
            v-for="(channel, index) in channelState.channel"
            :key="index"
            :channel="channel"
        />
    </div>
</template>

<script>
import LogoChaine from './LogoChaine.vue'
import { channelState } from "../states/channel-state";

export default {
    name: 'RailChannel',
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
    }
}
</script>

<style lang="less" scoped>
    #rail {
        position: absolute;
        height: 200vh;
        width: 20vh;
    }
    .logo {
        display: flex;
        flex-direction: column-reverse;
        justify-content: space-between;
        padding: 10px;
        padding-top: 50px;
        height: 12vh;
        width: 17vh;
  }
</style>
