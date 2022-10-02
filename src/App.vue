<template>
  <div>
    <div class="nav">
      <router-link :to="'/'">Home</router-link>
      <router-link :to="'/game'">Game</router-link>
    </div>
    <div>
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  setup() {},
};
</script>
<style scoped>
.nav {
  display: flex;
  justify-content: space-between;
}
</style>



