<template>
  <div ref="container" class="threejs-container">

  </div>
</template>

<script>
import * as THREE from 'three';
const MAX_POINTS = 500;

export default {
  name: "threejs",
  mounted() {
    this.initScene();
    this.animate();
  },
  data() {
    return {
      renderer: null,
      scene: null,
      camera: null,
      cube: null,
      line: null,
      count: 0,
    }
  },
  methods: {
    initScene() {
      this.scene = new THREE.Scene();
      this.camera = new THREE.PerspectiveCamera(45, 1, 1, 1000);
      this.camera.position.set(0, 0, 800);
      this.camera.lookAt(0, 0, 0);
      this.renderer = new THREE.WebGLRenderer();
      const container = this.$refs.container;
      this.renderer.setSize(container.clientWidth, container.clientHeight);
      container.appendChild(this.renderer.domElement);

      /** 更新 **/
      const geometry = new THREE.BufferGeometry();
      // attributes
      const positions = new Float32Array(MAX_POINTS * 3);
      geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

      // drawRange
      const drawCount = 2;
      geometry.setDrawRange(0, drawCount);
      // material
      const material = new THREE.LineBasicMaterial({color: 0xff0000});
      // line
      this.line = new THREE.Line(geometry, material);
      this.scene.add(this.line);
      this.updatePoints();

      /** line **/
      // const material = new THREE.LineBasicMaterial({color: 0x0000ff});

      // const points = [];
      // points.push(new THREE.Vector3(-10, 0, 0));
      // points.push(new THREE.Vector3(0, 10, 0));
      // points.push(new THREE.Vector3(10, 0, 0));
      //
      // const geometry = new THREE.BufferGeometry().setFromPoints(points);
      // const line = new THREE.Line(geometry, material);
      // this.scene.add(line);



      // cube
      // const geometry = new BoxGeometry();
      // const material = new MeshBasicMaterial({color: 0x00ff00});
      // this.cube = new Mesh(geometry, material);
      // this.scene.add(this.cube);
      //
      // this.camera.position.z = 5;
    },
    updatePoints() {
      const positions = this.line.geometry.attributes.position.array;
      let x, y, z, index;
      x = y = z = index = 0;
      for (let i = 0, l = MAX_POINTS; i < l; i ++) {
        positions[index ++] = x;
        positions[index ++] = y;
        positions[index ++] = z;
        x += (Math.random() - 0.5) * 30;
        y += (Math.random() - 0.5) * 30;
        z += (Math.random() - 0.5) * 30;
      }
    },
    animate() {
      this.count += 1;
      this.line.geometry.setDrawRange(0, this.count + 2);
      this.line.geometry.attributes.position.needsUpdate = true;
      this.renderer.render(this.scene, this.camera);

      // this.cube.rotation.x += 0.01;
      // this.cube.rotation.y += 0.01;
      requestAnimationFrame(this.animate);
    }
  }
}
</script>

<style scoped lang="scss">
.threejs-container {
  width: 1000px;
  height: 1000px;
  background-color: #42b983;
}
</style>
