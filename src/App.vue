<template>
  <div>
    <!-- <h2>Deployment</h2>   -->
    <h1>Main App</h1>
    <div>
      <About />
      <!-- <Messaging /> -->
    </div>
  </div>
</template>

<script>
import About from './components/about/About.vue';
import Messaging from './components/messaging/Messaging.vue'
export default {
  components: {
    About,
    Messaging
  },
  setup() {

  }
}
</script>



