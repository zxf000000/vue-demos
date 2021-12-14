<template>
  <div style="width: 800px; height: 800px; background: yellow" id="container" ref="container">
  </div>
</template>

<script>
import * as THREE from "three";

export default {
  name: "Three_1",
  data() {
    return {
      renderer: null,
      scene: null,
      camera: null,
      stats: null,
      pointclouds: null,
      raycaster: null,
      spheresIndex: 0,
      intersection: null,
      clock: null,
      toggle: 0,

      pointer: new THREE.Vector2(),
      spheres: [],

      threshold: 0.1,
      pointSize: 0.05,
      width: 80,
      length: 160,
      rotateY: new THREE.Matrix4().makeRotationY(0.005),
    }
  },
  methods: {
    init() {
      const container = this.$refs.container;
      this.scene = new THREE.Scene();
      this.clock = new THREE.Clock();

      this.camera = new THREE.PerspectiveCamera(45, window.innerWidth, window.innerHeight, 1, 10000);
      this.camera.position.set(10, 10, 10);
      this.camera.lookAt(this.scene.position);
      this.camera.updateMatrix();

      const pcBuffer = this.generatePointcloud(new THREE.Color(1, 0, 0), this.width, this.length);
      pcBuffer.scale.set(5, 10, 10);
      pcBuffer.position.set(-5, 0, 0);
      this.scene.add(pcBuffer);


      const pcIndexed = this.generateIndexedPointcloud(new THREE.Color(0, 1, 0), this.width, this.length);
      pcIndexed.scale.set(5, 10, 10);
      pcIndexed.position.set(0, 0, 0);
      this.scene.add(pcIndexed)

      const pcIndexedOffset = this.generateIndexedWidthOffsetPointcloud(new THREE.Color(0, 1, 1,), this.width, this.length);
      pcIndexedOffset.scale.set(5, 10, 10)
      pcIndexedOffset.position.set(5, 0, 0)
      this.scene.add(pcIndexedOffset);

      this.pointclouds = [ pcBuffer, pcIndexed, pcIndexedOffset ];

      const sphereGeometry = new THREE.SphereGeometry(0.1, 32, 32);
      const sphereMaterial = new THREE.MeshBasicMaterial({color: 0xFF0000});

      for (let i = 0; i < 40; i++) {
        const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
        this.scene.add(sphere);
        this.spheres.push(sphere);
      }

      this.renderer = new THREE.WebGLRenderer({antialias: true});
      this.renderer.setPixelRatio(window.devicePixelRatio);
      this.renderer.setSize(container.clientWidth, container.clientHeight);

      container.appendChild(this.renderer.domElement);

      this.raycaster = new THREE.Raycaster();
      this.raycaster.params.Points.threshold = this.threshold;

      // stats

    },
    animate() {
      requestAnimationFrame(this.animate);
      this.render();
    },
    render() {
      this.camera.applyMatrix4(this.rotateY);
      this.camera.updateMatrixWorld();

      this.raycaster.setFromCamera(this.pointer, this.camera);

      const intersections = this.raycaster.intersectObjects(this.pointclouds);
      this.intersection = (intersections.length) > 0 ? intersections[0] : null;

      if (this.toggle > 0.02 && this.intersection !== null) {
        this.spheres[this.spheresIndex].position.copy(this.intersection.point);
        this.spheres[this.spheresIndex].scale.set(1, 1, 1);
        this.spheresIndex = (this.spheresIndex + 1) % this.spheres.length;

        this.toggle = 0;
      }

      for (let i = 0; i < this.spheres.length; i ++) {
        const sphere = this.spheres[i];
        sphere.scale.multiplyScalar(0.98);
        sphere.scale.clampScalar(0.01, 1);
      }

      this.toggle += this.clock.getDelta();
      console.log(this.scene);
      this.renderer.render(this.scene, this.camera);
    },
    generateIndexedPointcloud(color, width, length) {
      const geometry = this.generatePointcloudGeometry(color, width, length);
      const numPoints = width * length;
      const indices = new Uint16Array(numPoints);

      let k = 0;
      for (let i = 0; i < width; i ++) {
        for (let j = 0; j < length; j ++) {
          indices[k] = k;
          k ++;
        }
      }
      geometry.setIndex(new THREE.BufferAttribute(indices, 1));
      const material = new THREE.PointsMaterial({size: this.pointSize, vertexColors: true});
      return new THREE.Points(geometry, material);
    },
    generateIndexedWidthOffsetPointcloud(color, width, length) {
      const geometry = this.generatePointcloudGeometry(color, width, length);
      const numPoints = width * length;
      const indices = new Uint16Array(numPoints);

      let k = 0;
      for (let i = 0; i < width; i ++) {
        for (let j = 0; j < length; j ++) {
          indices[k] = k;
          k++;
        }
      }
      geometry.setIndex(new THREE.BufferAttribute(indices, 1));
      geometry.addGroup(0, indices.length);

      const material = new THREE.PointsMaterial({size: this.pointSize, vertexColors: true});
      return new THREE.Points(geometry, material);
    },
    generatePointcloud(color, width, length) {
      const geometry = this.generatePointcloudGeometry(color, width, length);
      const material = new THREE.PointsMaterial({size: this.pointSize, vertexColors: true});
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
    this.animate();
  }
}
</script>

<style scoped lang="scss">

</style>
