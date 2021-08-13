<template>
  <div class="texture1" ref="texture">

  </div>
</template>

<script>
import * as THREE from 'three';
import texture1 from '@/assets/texture/plaster_plain_01_ambient_occlusion.png';
export default {
  name: "texture1",
  data() {
    return {
      scene: null,
      camera: null,
      renderer: null,
      cube: null,
    }
  },
  methods: {
    initial() {
      const container = this.$refs.texture;
      this.scene = new THREE.Scene();
      this.camera = new THREE.PerspectiveCamera( 75, container.clientWidth / container.clientHeight, 0.1, 1000 );
      this.renderer = new THREE.WebGLRenderer();
      this.renderer.setSize( container.clientWidth, container.clientHeight );
      this.renderer.shadowMap.enabled = true;
      container.appendChild( this.renderer.domElement );
    },
    createBox() {

      const texture = new THREE.TextureLoader().load( texture1 );

      const geometry = new THREE.BoxGeometry(1, 1, 1);
      const material = new THREE.MeshBasicMaterial({map: texture});
      const cube = new THREE.Mesh(geometry, material);
      cube.castShadow = true;
      cube.receiveShadow = true;
      this.cube = cube;
      this.scene.add(cube);
      this.camera.position.z = 2;

      const light = new THREE.DirectionalLight();
      light.position.set( 0, 2, 3 );
      light.castShadow = true;
      light.shadow.camera.zoom = 4; // tighter shadow map
      this.scene.add( light );


      const geometryBackground = new THREE.PlaneGeometry( 100, 100 );
      const materialBackground = new THREE.MeshPhongMaterial( { color: 0x000066 } );

      const background = new THREE.Mesh( geometryBackground, materialBackground );
      background.receiveShadow = true;
      background.position.set( 0, 0, - 1 );
      this.scene.add( background );


    },
    animate() {
      requestAnimationFrame( this.animate );
      this.cube.rotation.x += 0.01;
      this.cube.rotation.y += 0.01;
      this.renderer.render( this.scene, this.camera );
    }
  },
  mounted() {
    this.initial();
    this.createBox();
    this.animate();
  }
}
</script>

<style scoped lang="scss">
.texture1 {
  width: 1000px;
  height: 1000px;
}
</style>
