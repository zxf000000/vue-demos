<template>
  <div class="points-container" ref="container">

  </div>
</template>

<script>
import * as THREE from 'three';
export default {
  name: "points",
  data() {
    return {
      scene: null,
      renderer: null,
      camera: null,
      points: null,
    }
  },
  methods: {
    initRender() {
      const container = this.$refs.container;
      this.camera = new THREE.PerspectiveCamera(27, container.clientWidth / container.clientHeight, 5, 3500);
      this.camera.position.z = 2750;
      this.scene = new THREE.Scene();
      this.scene.background = new THREE.Color(0x050505);
      // this.scene.fog = new THREE.Fog(0x050505, 2000, 3500);

      const particles = 50000;
      const geometry = new THREE.BufferGeometry();
      const positions = [];
      const colors = [];
      const color = new THREE.Color();
      const n = 500, n2 = n / 2;
      for (let i = 0; i < particles; i++) {
        const x = Math.random() * n - n2;
        const y = Math.random() * n - n2;
        const z = Math.random() * n - n2;
        positions.push(x, y, z);

        const vx = (x / n) + 0.5;
        const vy = (y / n) + 0.5;
        const vz = (z / n) + 0.5;
        color.setRGB(vx, vy, vz);

        colors.push(color.r, color.g, color.b);
      }
      geometry.setAttribute('position',new THREE.Float32BufferAttribute(positions, 3));
      geometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));
      geometry.computeBoundingSphere();

      const material = new THREE.PointsMaterial({size: 15, vertexColors: true});
      this.points = new THREE.Points(geometry, material);
      this.scene.add(this.points);

      this.renderer = new THREE.WebGLRenderer();
      this.renderer.setPixelRatio(window.devicePixelRatio);
      this.renderer.setSize(container.clientWidth, container.clientHeight);

      container.appendChild(this.renderer.domElement);

      this.animated();
    },
    animated() {
      requestAnimationFrame(this.animated);
      this.render();
    },
    render() {
      const time = Date.now() * 0.001;
      this.points.rotation.x = time * 0.25;
      this.points.rotation.y = time * 0.25;
      this.renderer.render(this.scene, this.camera);
    }
  },
  mounted() {
    this.initRender();
  }
}
</script>

<style scoped lang="scss">
.points-container {
  width: 1000px;
  height: 1000px;
  background: #2c3e50;
}
</style>
