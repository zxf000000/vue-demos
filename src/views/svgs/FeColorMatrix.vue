<template>
  <svg viewBox="0 0 150 360"
       preserveAspectRatio="xMidYMid meet"
       xmlns="http://www.w3.org/2000/svg"
       xmlns:xlink="http://www.w3.org/1999/xlink">

    <text x="70" y="50">Reference</text>
    <g>
      <circle cx="30" cy="30" r="20" fill="blue" fill-opacity="0.5" />
      <circle cx="20" cy="50" r="20" fill="green" fill-opacity="0.5" />
      <circle cx="40" cy="50" r="20" fill="red" fill-opacity="0.5" />
    </g>


    <text x="70" y="120">matrix</text>

    <filter id="colorMeMatrix">
      <feColorMatrix in="SourceGraphic"
                     type="matrix"
                     values="0 0 0 0 0
              1 1 1 1 0
              0 0 0 0 0
              0 0 0 1 0" />
    </filter>

    <g filter="url(#colorMeMatrix)">
      <circle cx="30" cy="100" r="20" fill="blue"  fill-opacity="0.5" />
      <circle cx="20" cy="120" r="20" fill="green" fill-opacity="0.5" />
      <circle cx="40" cy="120" r="20" fill="red"   fill-opacity="0.5" />
    </g>


    <text x="70" y="190">saturate</text>

    <filter id="colorMeSaturate">
      <feColorMatrix in="SourceGraphic"
                     type="saturate"
                     values="0.2" />
    </filter>

    <g filter="url(#colorMeSaturate)">
      <circle cx="30" cy="170" r="20" fill="blue" fill-opacity="0.5" />
      <circle cx="20" cy="190" r="20" fill="green" fill-opacity="0.5" />
      <circle cx="40" cy="190" r="20" fill="red" fill-opacity="0.5" />
    </g>


    <text x="70" y="260">hueRotate</text>

    <filter id="colorMeHueRotate">
      <feColorMatrix in="SourceGraphic"
                     type="hueRotate"
                     values="180" />
    </filter>

    <g filter="url(#colorMeHueRotate)">
      <circle cx="30" cy="240" r="20" fill="blue"  fill-opacity="0.5" />
      <circle cx="20" cy="260" r="20" fill="green" fill-opacity="0.5" />
      <circle cx="40" cy="260" r="20" fill="red"   fill-opacity="0.5" />
    </g>


    <text x="70" y="320">luminanceToAlpha</text>

    <filter id="colorMeLTA">
      <feColorMatrix in="SourceGraphic"
                     type="luminanceToAlpha" />
    </filter>

    <g filter="url(#colorMeLTA)">
      <circle cx="30" cy="310" r="20" fill="blue"  fill-opacity="0.5" />
      <circle cx="20" cy="330" r="20" fill="green" fill-opacity="0.5" />
      <circle cx="40" cy="330" r="20" fill="red"   fill-opacity="0.5" />
    </g>
  </svg>
</template>

<script>
export default {
  name: "FeColorMatrix"
}
</script>

<style scoped>

</style>
