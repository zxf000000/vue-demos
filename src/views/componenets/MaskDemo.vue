<template>
  <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="100" height="100" viewBox="0 0 300 300" version="1.1">
    <defs>
      <linearGradient id="gradient" x1="0" x2="0" y1="0" y2="1">
        <stop class="stop1" offset="0%"></stop>
        <stop class="stop2" offset="50%"></stop>
        <stop class="stop3" offset="100%"></stop>
      </linearGradient>
      <mask id="myMask" maskUnits="userSpaceOnUse" x="0" y="0" width="100" height="100">
        <rect x="0" y="0" width="100" height="100" fill="url(#gradient)"/>
      </mask>
    </defs>
    <image :xlink:href="image" x="0" y="0" height="100" width="100" mask="url(#myMask)" />
  </svg>
</template>

<script>
export default {
  name: "MaskDemo",
  props: {
    image: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped>
#myMask {fill: url(#gradient);}
.stop1 {
  stop-color: white;
}
.stop2 {
  stop-color: black;
}
.stop3 {
  stop-color: black;
}
</style>
