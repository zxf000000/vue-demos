<template>
  <div class="about">
    <router-view class="routerView">
    </router-view>
<!--    <div class="left-side">-->
<!--      <b-nav tabs justified vertical>-->
<!--        <b-nav-item to="/about/first/index">First</b-nav-item>-->
<!--        <b-nav-item to="/about/second">Second</b-nav-item>-->
<!--      </b-nav>-->
<!--    </div>-->
<!--    <div class="right-side">-->
<!--      <router-view class="routerView">-->
<!--      </router-view>-->
<!--    </div>-->
  </div>
</template>

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