<template>
  <svg width="400" height="400" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
    <filter id="testFilter">
      <feImage href="https://zhouxiaofei-image.oss-cn-hangzhou.aliyuncs.com/fengmian_2.jpg" result="result"/>
      <feDisplacementMap
          in="result"
          in2="result" scale="3" xChannelSelector="R" yChannelSelector="G"></feDisplacementMap>
    </filter>
    <g id="images">
      <rect x="0" y="0" height="100%" width="100%" style="filter: url(#testFilter)"></rect>
    </g>
  </svg>

</template>

<script>

export default {
  name: "test-filters",
  data() {
    return {
    };
  }
}
</script>

<style scoped lang="scss">
svg {
  background-color: yellow;
  animation: infinite;
}
</style>
