<template>
  <div ref="container" class="test-page">
    <div class="handler-container">
      <h5>position</h5>
      <b-form-spinbutton class="sb-button" v-model="cameraPosition.x" min="-1000" max="1000" step="10"></b-form-spinbutton>
      <b-form-spinbutton class="sb-button" v-model="cameraPosition.y" min="-1000" max="1000" step="10"></b-form-spinbutton>
      <b-form-spinbutton class="sb-button" v-model="cameraPosition.z" min="-1000" max="1000" step="10"></b-form-spinbutton>
      <h5>lookAt</h5>
      <b-form-spinbutton class="sb-button" v-model="cameraLookAt.x" min="-1000" max="1000"></b-form-spinbutton>
      <b-form-spinbutton class="sb-button" v-model="cameraLookAt.y" min="-1000" max="1000"></b-form-spinbutton>
      <b-form-spinbutton class="sb-button" v-model="cameraLookAt.z" min="-1000" max="1000"></b-form-spinbutton>
    </div>
  </div>
</template>

<script>
// import * as THREE from 'three';
// import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

export default {
  name: "TestPage",
  // mounted() {
  //   this.scene = new THREE.Scene();
  //   this.camera = new THREE.PerspectiveCamera( 20, 1200/700, 0.1, 1000 );
  //   this.camera.position.set( this.cameraPosition.x, this.cameraPosition.y, this.cameraPosition.z );
  //   this.camera.lookAt( this.cameraLookAt.x, this.cameraLookAt.y, this.cameraLookAt.z );
  //
  //   const hemiLight = new THREE.HemisphereLight( 0xffffff, 0xdddddd );
  //   hemiLight.position.set( -10, 20, 10 );
  //   this.scene.add( hemiLight );
  //
  //   const dirLight = new THREE.DirectionalLight( 0xffffff );
  //   dirLight.position.set( - 3, 10, - 10 );
  //   dirLight.castShadow = true;
  //   dirLight.shadow.camera.top = 2;
  //   dirLight.shadow.camera.bottom = - 2;
  //   dirLight.shadow.camera.left = - 2;
  //   dirLight.shadow.camera.right = 2;
  //   dirLight.shadow.camera.near = 0.1;
  //   dirLight.shadow.camera.far = 40;
  //   this.scene.add( dirLight );
  //
  //   this.renderer = new THREE.WebGLRenderer({antialias: true});
  //   this.$refs.container.appendChild( this.renderer.domElement );
  //   console.log( this.renderer);
  //   const loader = new GLTFLoader();
  //   loader.load('girl.glb', (gltf) => {
  //     const modal = gltf.scene;
  //     console.log(modal);
  //     this.scene.add( gltf.scene);
  //     modal.traverse((obj) => {
  //       if (obj.isMesh) {
  //         obj.castShadow = true;
  //       }
  //     });
  //
  //     modal.rotation.set(0, 180, 0);
  //
  //     const skeleton = new THREE.SkeletonHelper(modal);
  //     this.scene.add( skeleton);
  //
  //   }, undefined, (error) => {
  //     console.log("error ===> " + error.toString());
  //   })
  //
  //   this.renderer.setPixelRatio(window.devicePixelRatio);
  //   this.renderer.setSize( 1200, 700 );
  //   this.renderer.shadowMap.enabled = true;
  //
  //   this.animate();
  //
  // },
  data() {
    return {
      scene: null,
      camera: null,
      renderer: null,
      canRecord: false,
      cameraPosition: {
        x: -500,
        y: 100,
        z: -400
      },
      cameraLookAt: {
        x: 0,
        y: 50,
        z: 0
      }
    }
  },
  methods: {
    updateCamera() {
      this.camera.position.set( this.cameraPosition.x, this.cameraPosition.y, this.cameraPosition.z );
      this.camera.lookAt( this.cameraLookAt.x, this.cameraLookAt.y, this.cameraLookAt.z );

    },
    animate() {
      requestAnimationFrame(this.animate);
      this.updateCamera();
      this.renderer.render( this.scene, this.camera );
    }
  }
}
</script>

<style scoped lang="scss">
.test-page {
  background: red;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: start;
  align-items: start;
  .handler-container {
    margin-left: 50px;
    margin-right: 10px;
    //height: 100px;
    .sb-button {
      width: 200px;
      margin: 0 !important;
      padding: 10px !important;
    }
  }
}


</style>
