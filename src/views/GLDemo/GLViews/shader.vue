<template>
  <div class="shader" ref="texture">
    <script ref="vertexShader" type="x-shader/x-vertex">
      void main() {
        gl_Position = vec4(position, 1.0);
      }
    </script>
<!--    <script ref="fragmentShader" type="x-shader/x-fragment">-->
<!--        uniform vec2 u_resolution;-->
<!--        uniform float u_time;-->
<!--        uniform vec2 u_mouse;-->

<!--        float plot(vec2 st, float pct) {-->
<!--          return smoothstep(pct - 0.02, pct, st.y) - smoothstep(pct, pct + 0.02, st.y);-->
<!--        }-->
<!--        void main() {-->
<!--            vec2 st = gl_FragCoord.xy/u_resolution.xy;-->
<!--            float y = cos(st.x * u_time);-->
<!--            vec3 color = vec3(y);-->
<!--            float pct = plot(st, y);-->
<!--            color = (1.0 - pct)*color + pct*vec3(0.0, 1.0, 0.0);-->

<!--            gl_FragColor = vec4(color, 1.0);-->
<!--        }-->
<!--    </script>-->
  </div>
</template>

<script>
import * as THREE from 'three';
// import color_1 from "@/views/GLDemo/GLViews/shaders/color_1";
// import color from "@/views/GLDemo/GLViews/shaders/shader";
import color from "@/views/GLDemo/GLViews/shaders/shader_1";
export default {
  name: "shader",
  data() {
    return {
      scene: null,
      camera: null,
      renderer: null,
      uniforms: null,
    }
  },
  methods: {
    initial() {
      const container = this.$refs.texture;
      this.scene = new THREE.Scene();
      this.camera = new THREE.PerspectiveCamera( 75, container.clientWidth / container.clientHeight, 0.1, 1000 );
      this.camera.position.z = 1;
      this.renderer = new THREE.WebGLRenderer();
      this.renderer.setSize( container.clientWidth, container.clientHeight );
      // this.renderer.shadowMap.enabled = true;
      container.appendChild( this.renderer.domElement );
    },
    createBox() {
      const geometry = new THREE.PlaneBufferGeometry(2, 2);
      this.uniforms = {
        u_time: {type: 'f', value: 1.0},
        u_resolution: {type: 'v2', value: new THREE.Vector2()}
      };
      const material = new THREE.ShaderMaterial({
        uniforms: this.uniforms,
        vertexShader: this.$refs.vertexShader.textContent,
        fragmentShader: color,
      });
      const mesh = new THREE.Mesh(geometry, material);
      this.scene.add(mesh);
    },
    animate() {
      requestAnimationFrame( this.animate );
      this.uniforms.u_time.value += 0.01;
      this.renderer.render( this.scene, this.camera );
    },
    resize() {
      this.uniforms.u_resolution.value.x = this.$refs.texture.clientWidth.toFixed(2);
      this.uniforms.u_resolution.value.y = this.$refs.texture.clientHeight.toFixed(2);
    }
  },
  mounted() {
    this.initial();
    this.createBox();
    this.resize();
    this.animate();
  }
}
</script>

<style scoped lang="scss">
.shader {
  width: 600px;
  height: 600px;
}
</style>
