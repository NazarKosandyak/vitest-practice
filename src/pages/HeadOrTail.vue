<template>
    <div id="game" />
</template>
<script>
import { onMounted } from '@vue/runtime-core'
import { controller } from '../components/head-or-tail/mvc'
export default {
    setup() {
        onMounted(() => {
            controller.init()
        })
    }
}
</script>

<style>
.play {
    margin: 10rem 0 0 0 ;
    background: rgb(145, 1, 255);
    color: white
}
.coin-box {
    width: 10rem;
    height: 10rem;
    background: rgb(145, 1, 255);
    border-radius: 50%;
    border: 6px solid rgb(191, 108, 255);
    margin: 20px auto;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
}
.animate {
    animation: coin 1.5s ease-out infinite;
}

@keyframes coin {
    0% {
        transform: rotateY(0);
    } 100% {
        transform: rotateY(360deg);
    }
}
</style>