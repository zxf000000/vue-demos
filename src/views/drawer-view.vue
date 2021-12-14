<template>
  <div>
    Drawer Test
    <v-btn to="/drawer-view/drawer" class="mt-10 ml-10">
      OPEN DRAWER
    </v-btn>
    <transition name="router-drawer">
      <router-view class="router-view"></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: "drawer-view"
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
