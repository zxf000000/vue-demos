<template>
  <svg width="600" height="600" xmlns="http://www.w3.org/2000/svg"
       xmlns:xlink="http://www.w3.org/1999/xlink">
    <defs>
      <filter id="spotlight">
        <feDiffuseLighting diffuseConstant="2">
          <feSpotLight x="0" y="0" z="40" pointsAtX="50" pointsAtY="50" limitingConeAngle="40" specularExponent="50" />
        </feDiffuseLighting>
      </filter>
      <filter id="dropshadow">
        <feDropShadow dx="10" dy="10" stdDeviation="20">
        </feDropShadow>
      </filter>
    </defs>
    <rect x="0" y="0" height="200" width="200" filter="url(#spotlight)"></rect>
<!--    <path d="M 200, 200 L 300 300" stroke="black"></path>-->
    <ellipse cx="400" cy="400" rx="20" ry="50" filter="url(#dropshadow)"></ellipse>
  </svg>
</template>

<script>
export default {
  name: "SpotLight"
}
</script>

<style scoped>

</style>
