<template>
    <div id="content">
        <div class="logo">
            <img src="../assets/tf1.png"/>
            <img src="../assets/cn.jpg"/>
            <img src="../assets/M6.jpg"/>
            <img src="../assets/canal.png"/>
            <img src="../assets/ufc.jpg"/>
        </div>
    </div>
</template>

<script>
import LogoChaine from "./LogoChaine.vue"
export default {
    name: 'Rail',
    components:{
        LogoChaine
    }
}
</script>

<style lang="less" scoped>
    #content{
        position: absolute;
        height: 100vh;
        width: 20vh;
        background:linear-gradient(180deg, rgba(255,0,0,0.5) 0%, rgba(255,255,255,0.5) 25%, rgba(255,255,255,0.5) 26%, rgba(128,128,128,0.5) 100%);
        .logo{
            display: flex;
            flex-direction: column-reverse;
            justify-content: space-between;
            padding: 10px;
            padding-top: 50px;
            height: 90vh;
            width: 17vh;
        }
        img{
            margin-bottom: 10px;
            border: 3px solid red;
            height: 300px;
            opacity: 0.8;
        }
    }
</style>
