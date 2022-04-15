<template>
  <div class="test-directive">
    <p>Test directive</p>
    <div v-test1:foo.bar.arc="testDirective">
    </div>
  </div>
</template>

<script>
export default {
  name: "index",
  data: () => ({
    //
    testDirective: 'test directive',
  }),
}
</script>

<style scoped lang="scss">
.test-directive {
  width: 100%;
  height: 100%;
  background-color: yellow;
  color: black;
  font-size: 20px;
}
</style>
