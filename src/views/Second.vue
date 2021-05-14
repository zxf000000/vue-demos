<template>
  <div class="first-container">
    This is second page
    <router-link to="/about/second1"></router-link>
  </div>
</template>

<script>
export default {
  name: "Second",
}
</script>

<style scoped>
.first-container {
  width: 100%;
  height:100%;
  background: yellow;
}
</style>