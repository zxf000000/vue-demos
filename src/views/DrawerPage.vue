<template>
    <div class="drawer-container">
      open drawer
<!--      <transition name="up">-->
<!--        <div v-if="show" class="inner" ref="inner">-->
<!--        </div>-->
<!--      </transition>-->
    </div>
</template>

<script>
export default {
  name: "DrawerPage",
  data() {
    return {
      show: false,
    }
  },
  mounted() {
    // this.$nextTick(() => {
    //   this.show = true;
    // })
  },
  // beforeRouteLeave(from, to, next) {
  //   this.show = false;
  //   this.$nextTick(next);
  // },
}
</script>

<style scoped lang="scss">
.drawer-container {
  background: blueviolet;
  width: 500px;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
}
.inner {
  background-color: green;
  width: 100%;
  height: 1000px;
  margin-top: 100px;
  transition: all 1s;
}


.up-enter-active, .up-leave-active {
  transition: margin-top 0.3s linear;
}

.up-enter, .up-leave-to {
  margin-top: 1000px !important;
}

.up-enter-to, .up-leave {
  margin-top: 100px !important;
}


</style>
