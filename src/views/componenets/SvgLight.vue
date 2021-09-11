<template>
  <svg width="440" height="140" xmlns="http://www.w3.org/2000/svg">

    <!-- No light is applied -->
    <text text-anchor="middle" x="60" y="22">No Light</text>
    <circle cx="60" cy="80" r="50" fill="green" />

    <!-- the light source is a fePointLight element -->
    <text text-anchor="middle" x="170" y="22">fePointLight</text>
    <filter id="lightMe1">
      <feSpecularLighting in="SourceGraphic" result="light"
                          specularConstant="1.5"
                          specularExponent="80"
                          lighting-color="white">
        <fePointLight x="150" y="60" z="20" />
      </feSpecularLighting>

      <feComposite in="SourceGraphic" in2="light"
                   operator="arithmetic" k1="1" k2="1" k3="1" k4="0"/>
    </filter>

    <circle cx="170" cy="80" r="50" fill="green"
            filter="url(#lightMe1)" />

    <!-- the light source is a feDistantLight element -->
    <text text-anchor="middle" x="280" y="22">feDistantLight</text>
    <filter id="lightMe2">
      <feDiffuseLighting in="SourceGraphic" result="light"
                         lighting-color="white">
        <feDistantLight azimuth="240" elevation="20"/>
      </feDiffuseLighting>

      <feComposite in="SourceGraphic" in2="light"
                   operator="arithmetic" k1="1" k2="0" k3="0" k4="0"/>
    </filter>

    <circle cx="280" cy="80" r="50" fill="green"
            filter="url(#lightMe2)" />

    <!-- the light source is a feSpotLight source -->
    <text text-anchor="middle" x="390" y="22">feSpotLight</text>
    <filter id="lightMe3">

      <feSpecularLighting in="SourceGraphic" result="light"
                          specularConstant="1.5"
                          specularExponent="4" lighting-color="#FFF">
        <feSpotLight x="360" y="5" z="30" limitingConeAngle="20"
                     pointsAtX="400" pointsAtY="100" pointsAtZ="0"/>
      </feSpecularLighting>

      <feComposite in="SourceGraphic" in2="light"
                   operator="arithmetic" k1="1" k2="0" k3="0" k4="0"/>
    </filter>
    <circle cx="390" cy="80" r="50" fill="green"
            filter="url(#lightMe3)" />

    <filter id="dropShadow">
      <feGaussianBlur stdDeviation="5"></feGaussianBlur>
    </filter>
    <g style="filter: url(#dropShadow)" id="group">
      <line x1="10" x2="100" y1="10" y2="100" stroke="yellow" stroke-linecap="round"></line>
    </g>
  </svg>
</template>

<script>
export default {
  name: "SvgLight"
}
</script>

<style scoped>

</style>
