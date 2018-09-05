<template>
    <div class="alert">
        <p :alert="alert()">{{ this.message }}</p>
    </div>
</template>
<script>
import { channelStates } from '../states/channelStates.js'
export default {
    data(){
        return{
            channelStates,
            message: null,
        }
    },
    methods:{
        alert(){
            if(channelStates.channelResponse=== false) this.message = "Cette chaîne n'est pas définie"
        }
    }
}
</script>

<style>
.alert{
    border: 19x solid black;
    border-radius:5px;
    box-shadow: 0,0, 5px, 5px, black;
    background-color: #ffefef;
    height: 30%;
    width: 50%;
}
</style>

