<template>
  <div class="about">
    <div class="left-side">
      <b-nav tabs justified vertical>
        <b-nav-item :active="firstActive" to="/about/first/index">First</b-nav-item>
        <b-nav-item :active="secondActive" to="/about/second/index">Second</b-nav-item>
      </b-nav>
    </div>
    <div class="right-side">
      <router-view class="routerView">
      </router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Layout',
  computed: {
    firstActive: function () {
      return this.$route.path.indexOf('/about/first') !== -1;
    },
    secondActive: function () {
      return this.$route.path.indexOf('/about/second') !== -1;
    }
  },
  mounted() {
    console.log(this.$route)
  }


}
</script>

<style scoped lang="scss">

.about {
  display: flex;
  flex-direction: row;
  align-items: start;
  justify-content: flex-start;
  height: 800px;
  background-color: darkgray;
}

.left-side {
  background-color: yellow;
}

.right-side {
  flex: 1;
  background: greenyellow;
  height: 100%;
}

.routerView {
  width: 100%;
  height: 100%;
}

.left-side ::v-deep .router-link-active {
  background: white;
}

.sub-router-view {
  width: 100%;
  height: 100%;
}

</style>