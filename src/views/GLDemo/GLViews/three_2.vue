<template>
  <div ref="container" style="width: 800px; height: 800px">

  </div>
</template>

<script>
import * as THREE from 'three';

export default {
  name: "three_2",
  data() {
    return {
      renderer: null,
      scene: null,
      camera: null,
    }
  },
  methods: {
    init() {
      const container = this.$refs.container;
      this.renderer = new THREE.WebGLRenderer();
      this.renderer.setSize( container.clientWidth, container.clientHeight );
      container.appendChild(this.renderer.domElement);

      this.camera = new THREE.PerspectiveCamera( 20, 1, 1, 10000 );
      this.camera.position.set( 20, 30, 60 );
      this.camera.lookAt( 0, 0, 0 );

      this.scene = new THREE.Scene();

      const pcBuffer = this.generatePointcloud(new THREE.Color(1, 0, 0), 80, 160);
      pcBuffer.scale.set(5, 10, 10);
      pcBuffer.position.set(-5, 0, 0);
      this.scene.add(pcBuffer);
      this.renderer.render(this.scene, this.camera);
    },
    generatePointcloud(color, width, length) {
      const geometry = this.generatePointcloudGeometry(color, width, length);
      const material = new THREE.PointsMaterial({size: 0.35, vertexColors: true});
      return new THREE.Points(geometry, material);
    },
    generatePointcloudGeometry(color, width, length) {
      const geometry = new THREE.BufferGeometry();
      const numPoints = width * length;

      const positions = new Float32Array(numPoints * 3);
      const colors = new Float32Array(numPoints * 3);

      let k = 0;
      for (let i = 0; i < width; i++ ) {
        for (let j = 0; j < length; j++ ) {
          const u = i / width;
          const v = j / length;
          const x = u - 0.5;
          const y = (Math.cos(u * Math.PI * 4) + Math.sin(v * Math.PI * 8)) / 20;
          const z = v - 0.5;
          positions[3 * k] = x;
          positions[3 * k + 1] = y;
          positions[3 * k + 2] = z;

          const intensity = (y + 0.1) * 5;
          colors[3 * k] = color.r * intensity;
          colors[3 * k + 1] = color.g * intensity;
          colors[3 * k + 3] = color.b * intensity;

          k++;
        }
      }
      geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
      geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
      geometry.computeBoundingBox();
      return geometry;
    }
  },
  mounted() {
    this.init();
  }
}
</script>

<style scoped>

</style>
