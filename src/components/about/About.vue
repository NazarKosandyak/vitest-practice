<template>
    <div>
        <h1>About Init</h1>
        <h2>{{ hello }}</h2>
    </div>
</template>
<script>
import { ref } from "@vue/reactivity"
export default {
    setup() {
        const hello = ref('')
        
        return {
            hello
        }
    }
}
</script>