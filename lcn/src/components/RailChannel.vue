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
import { channelState } from '../states/channel-state'
import { channelStates } from '../states/channelStates.js'
import { keyboardNavigation } from '../mixins/keyboard'
import { EventBus } from '../main'

export default {
  name: 'RailChannel',
  mixins: [keyboardNavigation],
  components: {
    LogoChaine
  },
  data () {
    return {
      channelState,
      channelStates
    }
  },
  async created () {
    try {
      let response = await fetch('data/channel.json')
      const chan = await response.json()
      this.channelState.channel = chan
    } catch (error) {
      console.error(error)
    }
  },
  mounted () {
    EventBus.$on('chanChanged', chanId => {
      this.$movePositionInGrid(0, chanId - this.navigationCoordinates[1])
    })
  },
  updated () {
    this.$movePositionInGrid(1, 1)
  },
  beforeDestroy () {
    document.removeEventListener('keydown', this.validation)
  },
  methods: {
    move (y) {
      console.log('translate: ' + y)
      const trans = document.getElementById('rail')
      trans.style.transform = 'translate(0,' + y + 'px)'
      this.tune()
    },
    async tune () {
      console.log('tune' + this.channelState.chanFocus)
      const response = await fetch('data/channel.json')
      const results = await response.json()
      const channelSearch = results.find((element) => {
        return element.id == this.channelState.chanFocus
      })
      console.log('id1: ' + this.channelStates.channelResponse.id + ' id2: ' + channelSearch.id)
      if (channelSearch) {
        if (this.channelStates.channelResponse.id != channelSearch.id) {
          console.log('channel search: ' + channelSearch)
          this.channelStates.channelResponse = {
            id: channelSearch.id,
            chaine: channelSearch.chaine,
            src: channelSearch.src,
            miniature: channelSearch.miniature,
            programme: channelSearch.programme,
            duree: channelSearch.duree
          }
          document.addEventListener('keydown', this.validation)
          this.channelStates.currentChannel = this.channelStates.channelResponse // keep in memory current channel when wrong channel is requested
          return this.channelStates.channelResponse, this.channelStates.currentChannel
        }
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
     mounted () {
        // deplace le rail en fonction de la chaine selectionné via la digit zone
        EventBus.$on('chanChanged', chanId => {
            this.$movePositionInGrid(0, chanId - this.navigationCoordinates[1])
        })
    },
    updated () {
        this.$movePositionInGrid(1, 1)
    },
    beforeDestroy(){
        document.removeEventListener('keydown', this.validation)
    },
    methods:{
        move(y){
            //methode pour deplacer les logos de chaine dans le rail
            const trans = document.getElementById('rail')
            trans.style.transform = "translate(0," + y + "px)"
            this.tune()
        },
        async tune(){
            //methode pour recuperer la video associé a la chaine en cours
            const response =  await fetch('data/channel.json')
            const results = await response.json()
            const channelSearch = results.find((element) => {
                return element.id == this.channelState.chanFocus
            })
            if (channelSearch){
                    this.channelStates.channelResponse = {
                        id: channelSearch.id,
                        chaine: channelSearch.chaine,
                        src: channelSearch.src,
                        miniature: channelSearch.miniature,
                        programme: channelSearch.programme,
                        duree: channelSearch.duree
                    }
                document.addEventListener('keydown', this.validation)
                this.channelStates.currentChannel= this.channelStates.channelResponse // keep in memory current channel when wrong channel is requested
                 return this.channelStates.channelResponse, this.channelStates.currentChannel              
               
            }
        },
        async validation ({keyCode}){
            //methode pour valider le changement de chaine et lancer la diffusion de la video
            if (keyCode == 13){
                if (this.channelState.channelView.value != this.channelStates.channelResponse.id) {
                    const response = await fetch('data/channel.json')
                const results = await response.json()
                const channelSearch = results.find((element) => {
                    return element.id == this.channelStates.channelResponse.id
                })
                this.channelStates.channelResponse = {
                    id: channelSearch.id,
                    chaine: channelSearch.chaine,
                    src: channelSearch.src,
                    videoId: channelSearch.videoId,
                    miniature: channelSearch.miniature,
                    programme: channelSearch.programme,
                    duree: channelSearch.duree
                }
                this.channelState.channelView.value = this.channelStates.channelResponse.id
                return this.channelStates.channelResponse
                }
                
            }
        }
        return this.channelStates.channelResponse
      }
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
