<template>
    <div id="digit" :digit="digit" :channel="channel">
        {{ channel }}
    </div>
</template>

<script>
import { channelStates } from "../states/channelStates.js";
import { channelState } from "../states/channel-state";
import { EventBus } from "../main";

export default {
  data() {
    return {
      digit: "",
      channel: "",
      elapsed: null, // boolean
      timer: null,
      channelStates,
      channelState
    };
  },
  created() {
    document.addEventListener("keydown", this.showChannel); // listen digit controls
  },
  methods: {
    // get channel request and transmit response
    async tune() {
      const response = await fetch("./data/channel.json");
      const results = await response.json();

      // return an object with all channel request informations
      const channelSearch = results.find(element => {
        return element.id == this.channelStates.channelRequest;
      });
      if (channelSearch) {
        this.channelStates.channelResponse = {
          id: channelSearch.id,
          chaine: channelSearch.chaine,
          src: channelSearch.src,
          videoId: channelSearch.videoId,
          miniature: channelSearch.miniature,
          programme: channelSearch.programme,
          duree: channelSearch.duree
        };
        this.channelState.digitSwitch.value = true;
        EventBus.$emit("chanChanged", channelSearch.id);
        EventBus.$emit("digitSwitch", channelSearch.id);
        this.channelStates.currentChannel = this.channelStates.channelResponse; // keep in memory current channel when wrong channel is requested
        return (
          this.channelStates.channelResponse, this.channelStates.currentChannel
        );
      } else {
        return (this.channelStates.channelResponse = false);
      }
    },
    // listen digit buttons and show channel request on screen during 2 seconds
    showChannel(event) {
      if (event.keyCode >= 96 && event.keyCode <= 105) {
        // numpad buttons
        if (!this.elapsed) {
          clearTimeout(this.timer);
        }
        this.digit += event.key; // string that appends digits
        this.elapsed = false; // clear timer
        if (this.digit.length >= 2) {
          this.channel =
            this.digit[this.digit.length - 2] +
            this.digit[this.digit.length - 1]; // the last two numbers of digits string
          // return channel request and clear digit and channel
          this.timer = setTimeout(() => {
            this.channelStates.channelRequest = this.channel;
            this.elapsed = true;
            this.digit = "";
            this.channel = "";
            this.tune();
            return this.channelStates.channelRequest;
          }, 2000);
        } else {
          this.channel = this.digit;
          this.timer = setTimeout(() => {
            this.elapsed = true;
            this.channelStates.channelRequest = this.channel;
            this.digit = "";
            this.channel = "";
            this.tune();
            return this.channelStates.channelRequest;
          }, 2000);
        }
      }
    }
  }
};
</script>

<style lang="less" scoped>
div {
  font-family: Arial, Helvetica, sans-serif;
  position: absolute;
  top: 500px;
  left: 300px;
  color: white;
  height: 200px;
  width: 200px;
}
#digit {
  font-size: 50px;
  font-weight: bolder;
  text-align: center;
  line-height: 4em;
  text-shadow: black 1px 1px 1px;
}
</style>
