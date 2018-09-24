<template>
  <div id="app">
    <Date :class="{ active: channelState.railDisplay.value }"/>
    <InfoBanner :class="{ active: channelState.railDisplay.value, digitSwitch: channelState.digitSwitch.value }"/>
    <Video />
    <Rail :class="{ active: channelState.railDisplay.value }"/>
    <digit-zone/>
    <alert-message v-if="!this.channelStates.channelResponse"/>
  </div>
</template>

<script>
import { channelState } from "./states/channel-state";
import { channelStates } from "./states/channelStates.js";
import { EventBus } from "./main";
import Video from "./components/Video.vue";
import Date from "./components/Date.vue";
import InfoBanner from "./components/InfoBanner.vue";
import DigitZone from "./components/DigitZone.vue";
import Rail from "./components/Rail.vue";
import AlertMessage from "./components/AlertMessage.vue";

export default {
  name: "app",
  components: {
    Video,
    Date,
    InfoBanner,
    Rail,
    "digit-zone": DigitZone,
    "alert-message": AlertMessage
  },
  data() {
    return {
      channelState,
      channelStates,
      movies: null,
      timer: null,
      elapsed: null
    };
  },
  async created() {
    try {
      let reponse = await fetch("channel.json");
      this.movies = await response.json();
    } catch (error) {
      console.log(error);
    }
  },
  created() {
    document.addEventListener("keyup", this.menuDisplay);
    document.addEventListener("keydown", this.menuTimer);
  },
  
  beforeDestroy() {
    document.removeEventListener("keyup", this.menuDisplay);
    document.removeEventListener("keydown", this.menuTimer);

  },
  methods: {
    menuDisplay(event) {
      //si on appuie sur la touche "M"
      if (event.keyCode == "77") {
        //fait apparaitre le menu si il n'est pas affiché
        if (this.channelState.railDisplay.value === false) {
          this.channelState.railDisplay.value = true;
        } else {
          //fait disparaitre le menu si il est affiché
          this.channelState.railDisplay.value = false;
        }
      }
    },

    menuTimer(event) {
      //fonction qui gere le timeout du menu
      if (this.channelState.railDisplay.value === true) {
        if (event.keyCode == 38 || event.keyCode == "40" || event.keyCode == "13") {
          if (!this.elapsed) {
            clearTimeout(this.timer);
          }
          this.elapsed = false; //clear timer
          this.timer = setTimeout(() => {
            this.elapsed = true
            this.channelState.railDisplay.value = false;
          }, 5000)
        } else {
          this.timer = setTimeout(() => {
            this.elapsed = true
            this.channelState.railDisplay.value = false;
          }, 5000);
        }
      }
    }
  }
};
</script>

<style lang="less">
@import "~normalize.css";

body {
  height: 100vh;
  width: 100vw;
}

#app {
  background-color: black;
  width: 99.5vw;
  height: 98vh;
  .swipe {
    flex-grow: 1;
  }
  .active,
  .digitSwitch {
    visibility: visible;
  }
}
</style>
