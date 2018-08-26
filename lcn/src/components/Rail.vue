<template>
    <div id="content">
        <RailChannel/>
    </div>
</template>

<script>
import { channelState } from "../states/channel-state";
import RailChannel from "./RailChannel.vue"

export default {
  name: "Rail",
  components: {
    RailChannel
  },
  data() {
    return {
      channelState
    }
  }
}
</script>

<style lang="less" scoped>
#content {
  position: absolute;
  overflow: hidden;
  flex-grow: 1;
  height: 100vh;
  width: 20vh;
  background: linear-gradient(
    180deg,
    rgba(255, 0, 0, 0.5) 0%,
    rgba(255, 255, 255, 0.5) 25%,
    rgba(255, 255, 255, 0.5) 26%,
    rgba(128, 128, 128, 0.5) 100%
  );
}
</style>
