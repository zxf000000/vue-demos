<template>
  <div class="router-transition__container">
    <span class="title">Router Transition</span>
        <router-view/>
  </div>
</template>

<script>
export default {
  name: "RouterTransition",
  computed: {
    key() {
      return this.$route.path;
    }
  },
  data() {
    return {

    }
  }
}
</script>

<style scoped lang="scss">
.router-transition__container {
  width: 100%;
  height: 100%;
  background: #dddddd;
  .title {
    color: white;
    font-size: 18px;
  }
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
