<template>
  <div class="container1">
    <h1>About1</h1>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
name: "about1"
}
</script>

<style scoped>

h1 {
  color: black;
  font-size: 20px;
}

.container1 {
  width: 400px;
  height: 400px;
  background: blue;
}

</style>
