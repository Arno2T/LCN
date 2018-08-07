<template>
    <div id="digit" :digit="digit">
        {{ digit[0] }} {{digit[1]}}
    </div>
</template>

<script>
export default {
    data(){
        return{
            digit:[],
        }
    },
    created(){
        document.addEventListener('keydown', this.digitListener1)
        document.addEventListener('keydown', this.digitListener2)

    },
    methods:{
        digitListener1(event){
            console.log(event)
            if((event.keyCode >= 48 && event.keyCode <= 57)||(event.keyCode>=96 && event.keyCode<=105)){
                this.digit.push(event.key)
            }
        },
    }
}
</script>


<style lang="less" scoped>
    div {
        position: absolute;
        top:500px;
        left: 300px;
        color: white;
        height: 200px;
        width: 200px;
        border: 3px solid white;
    }

    #digit{
        font-size: 50px;
        font-weight: bolder;
        text-align: center;
        line-height: 4em;
    }

</style>
