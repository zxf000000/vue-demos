<template>
  <div class="gl-demo">
      <b-nav vertical tabs class="nav-bar-inner">
        <b-nav-item :to="item.path" v-for="item in paths" :key="item.name" :active="$route.path === item.path">
          {{item.name}}
        </b-nav-item>
      </b-nav>
    <div class="right-container">
      <router-view class="right-view"></router-view>
    </div>

  </div>
</template>

<script>
export default {
  name: "index",
  data() {
    return {
      paths: [
        {name: 'Normal', path: '/gl_demo/normal'},
        {name: 'Texture', path: '/gl_demo/texture'},
        {name: 'ThreeJS', path: '/gl_demo/threejs'},
        {name: 'Points', path: '/gl_demo/three-points'},
        {name: 'Texture1', path: '/gl_demo/texture1'},
        {name: 'Shader', path: '/gl_demo/shader'},
      ]
    };
  },
}
</script>

<style scoped lang="scss">
.gl-demo {
  margin-top: 0;
  width: 100%;
  height: 100%;
  background-color: #cdcdcd;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  .nav-bar-inner {
    background: greenyellow;
    height: 100%;
    box-shadow: 0 0 5px #2c3e50;
    width: 150px;
  }
  .right-container {
    flex-grow: 1;
  }
}
</style>
