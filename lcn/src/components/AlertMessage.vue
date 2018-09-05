<template>
    <div class="alert" >
        <p :alert="alert()" :show="show()">{{ this.message }}</p>
    </div>
</template>
<script>
import { channelStates } from "../states/channelStates"
export default {
  data() {
    return {
      channelStates,
      message: null
    }
  },
  created() {
    document.addEventListener("keydown", this.close)
  },
  mounted() {
    setTimeout(this.hide, 5000)
  },
  methods: {
    alert() {
      if (this.channelStates.channelResponse === false)
        this.message = "Cette chaîne n'est pas définie"
    },
    close(event) {
      const box = document.querySelector(".alert")
      if (box && event.keyCode === 27) {
        this.hide()
      }
    },
    show() {
      if (this.channelStates.channelResponse === false) {
        const box = document.querySelector(".alert")
        box.style.display = "block"
      }
    },
    hide() {
      const box = document.querySelector(".alert")
      box.style.display = "none"
    }
  },
  watch: {
    'channelStates': function(response) {
      console.log(response)

      if (response) {
        console.log("hide")
      } else {
        console.log("show")
      }
    }
  }
}
</script>

<style>
.alert {
  height: 10%;
  width: 30%;
  border: 19x solid black;
  border-radius: 5px;
  box-shadow: 0, 0, 5px, 5px, black;
  background-color: #ffefef;
  text-align: center;
  line-height: 3em;
  position: absolute;
  display: block;
  margin: auto;
  top: 100px;
  left: 100px;
}
</style>
