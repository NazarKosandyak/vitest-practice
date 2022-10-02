<template>
    <div>
        <h1>{{ msg }}</h1>
        <p>
            <input type="text" v-model="inputMsg" placeholder="Enter a message">
            <button @click="msg = inputMsg">Submit</button>
        </p>
    </div>
</template>
<script>
import { ref } from '@vue/reactivity'
export default {
    setup() {
        const msg = ref('')
        const inputMsg = ref('')
        
        return {
            msg,
            inputMsg
        }
    },
}
</script>