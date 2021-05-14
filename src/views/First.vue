<template>
  <div class="first-container">
    This is first page
    <router-link to="/about/first/detail">
      <b-button>
        To First1
      </b-button>

    </router-link>
  </div>
</template>

<script>
export default {
name: "First",
}
</script>

<style scoped>
.first-container {
  width: 100%;
  height:100%;
  background: red;
}
</style>