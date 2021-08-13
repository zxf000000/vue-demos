<template>
  <svg viewBox="0 0 100 100"
       xmlns="http://www.w3.org/2000/svg">
    <defs>
      <clipPath id="clipPath">
        <circle cx="50" cy="50" r="50"></circle>
      </clipPath>
    </defs>
    <polyline :points="linePoints" id="line" clip-path="url(#clipPath)">
      <animate attributeName="stroke-dasharray" from="0, 800" to="800, 1000" dur="2s"></animate>
    </polyline>
  </svg>
</template>

<script>
export default {
  name: "AchimedeanSpiral",
  computed: {
    linePoints() {
      const a = 1;
      const b = 3;
      let points = [];
      for (let angle = 0; angle < Math.PI * 6; angle += 0.1) {
        const r = a + b * angle;
        const x = r * Math.cos(angle) + 50;
        const y = r * Math.sin(angle) + 50;
        points.push(x + ',' + y);
      }
      return points.reverse().join(' ');
    }
  }
}
</script>

<style scoped>
#line {
  fill: none;
  stroke: black;
  stroke-width: 20px;
  stroke-linecap: round;
}

</style>
