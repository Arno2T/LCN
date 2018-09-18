<template>
    <div class="alert" >
        <h2 :alert="alert()">{{ this.message }}</h2>
    </div>
</template>
<script>
import { channelStates } from "../states/channelStates";
export default {
  data() {
    return {
      channelStates,
      message: null
    };
  },
  created() {
    document.addEventListener("keydown", this.close);
  },
  mounted() {
    setTimeout(this.hide, 5000);
  },
  methods: {
    alert() {
      if (this.channelStates.channelResponse === false)
        this.message = "Cette chaîne n'est pas définie";
    },
    close(event) {
      const box = document.querySelector(".alert");
      if (box && event.keyCode === 27) {  //escape keyCOde:27
        this.hide();
      }
    },
    hide() {

      this.channelStates.channelResponse=true //in App.vue, alertMessage is displayed if channelResponse = false
    }
  },
};
</script>

<style>
.alert {
  height: 10%;
  width: 40%;
  border: 19x solid black;
  border-radius: 5px;
  box-shadow: 0 0 5px 5px white;
  background: linear-gradient(
    260deg,
    rgba(255, 0, 0, 0.8) 0%,
    rgba(255, 255, 255, 0.8) 25%,
    rgba(255, 255, 255, 0.8) 26%,
    rgba(128, 128, 128, 0.8) 100%
  );
  text-align: center;
  white-space: nowrap;
  line-height: 1em;
  font-weight: bold;
  text-shadow: 1px 1px black;
  color: white;
  font-size: 30px;
  font-family: Arial, Helvetica, sans-serif;
  position: absolute;
  display: block;
  margin: auto;
  top: 30%;
  left: 30%;
}
.show {
  display: none;
}
</style>
