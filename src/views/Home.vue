<template>
  <div>
    Home
  </div>
</template>

<script>
  export default {
    name: 'Home',
    components: {
    },
  }
</script>

<style scoped lang="scss">

.router-drawer-enter-active, .router-drawer-leave-active {
  transition: margin-top 0.3s linear;
}

.router-drawer-enter, .router-drawer-leave-to {
  margin-top: 1000px !important;
}

.router-drawer-enter-to, .router-drawer-leave {
  margin-top: 100px !important;
}

</style>
