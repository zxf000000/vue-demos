<template>
  <div class="gl-demo">
    <canvas ref="canvas" id="canvas" width="1000" height="1000"></canvas>
  </div>
</template>

<script>
const vsSource = `
  attribute vec3 aVertexPosition;
  attribute vec4 aVertexColor;

  uniform mat4 uModelViewMatrix;
  uniform mat4 uProjectionMatrix;

  varying lowp vec4 vColor;

  void main() {
    gl_Position = uProjectionMatrix * uModelViewMatrix * vec4(aVertexPosition, 1.0);
    vColor = aVertexColor;
  }
`

const fsSource = `
  varying lowp vec4 vColor;
  void main() {
    gl_FragColor = vColor;
  }
 `
import {mat4} from 'gl-matrix';

export default {
  name: "normal",
  data() {
    return {
      then: 0,
      gl: null,
      programInfo: null,
      buffers: null,
      squareRotation: 0,
    }
  },
  methods: {
    drawCanvas() {
      const canvas = this.$refs.canvas;
      const gl = canvas.getContext("webgl");
      gl.clearColor(0, 0, 0, 1);
      gl.clear(gl.COLOR_BUFFER_BIT);
      this.gl = gl;
      const shaderProgram = this.initialShaderProgram(gl, vsSource, fsSource);
      this.programInfo = {
        program: shaderProgram,
        attribLocations: {
          vertexPosition: gl.getAttribLocation(shaderProgram, 'aVertexPosition'),
          vertexColors: gl.getAttribLocation(shaderProgram, 'aVertexColor'),
        },
        uniformLocations: {
          projectionMatrix: gl.getUniformLocation(shaderProgram, 'uProjectionMatrix'),
          modelViewMatrix: gl.getUniformLocation(shaderProgram, 'uModelViewMatrix'),
        },
      }
      this.buffers = this.initBuffers(gl);
      requestAnimationFrame(this.render);
    },

    render(now) {
      now *= 0.001;
      const deltaTime = now - this.then;
      this.then = now;
      this.drawScene(this.gl, this.programInfo, this.buffers, deltaTime);
      requestAnimationFrame(this.render);
    },

    drawScene(gl, programInfo, buffers, deltaTime) {
      gl.clearColor(0.0, 0.0, 0.0, 1.0);  // Clear to black, fully opaque
      gl.clearDepth(1.0);                 // Clear everything
      gl.enable(gl.DEPTH_TEST);           // Enable depth testing
      gl.depthFunc(gl.LEQUAL);            // Near things obscure far things

      // Clear the canvas before we start drawing on it.

      gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

      // Create a perspective matrix, a special matrix that is
      // used to simulate the distortion of perspective in a camera.
      // Our field of view is 45 degrees, with a width/height
      // ratio that matches the display size of the canvas
      // and we only want to see objects between 0.1 units
      // and 100 units away from the camera.

      const fieldOfView = 45 * Math.PI / 180;   // in radians
      const aspect = gl.canvas.clientWidth / gl.canvas.clientHeight;
      const zNear = 0.1;
      const zFar = 100.0;
      const projectionMatrix = mat4.create();

      // note: glmatrix.js always has the first argument
      // as the destination to receive the result.
      mat4.perspective(projectionMatrix,
        fieldOfView,
        aspect,
        zNear,
        zFar);

      // Set the drawing position to the "identity" point, which is
      // the center of the scene.
      const modelViewMatrix = mat4.create();

      // Now move the drawing position a bit to where we want to
      // start drawing the square.

      mat4.translate(modelViewMatrix,     // destination matrix
        modelViewMatrix,     // matrix to translate
        [-0.0, 0.0, -6.0]);  // amount to translate
      this.squareRotation += deltaTime;
      mat4.rotate(
        modelViewMatrix,
        modelViewMatrix,
        this.squareRotation,
        [0, 0, 1]
      );
      mat4.rotate(
        modelViewMatrix,
        modelViewMatrix,
        this.squareRotation * 0.7,
        [0, 1, 0]
      );

      // Tell WebGL how to pull out the positions from the position
      // buffer into the vertexPosition attribute
      {
        const numComponents = 3;
        const type = gl.FLOAT;
        const normalize = false;
        const stride = 0;
        const offset = 0;
        gl.bindBuffer(gl.ARRAY_BUFFER, buffers.position);
        gl.vertexAttribPointer(
          programInfo.attribLocations.vertexPosition,
          numComponents,
          type,
          normalize,
          stride,
          offset);
        gl.enableVertexAttribArray(
          programInfo.attribLocations.vertexPosition);
      }

      // Tell WebGL how to pull out the colors from the color buffer
      // into the vertexColor attribute.
      {
        const numComponents = 4;
        const type = gl.FLOAT;
        const normalize = false;
        const stride = 0;
        const offset = 0;
        gl.bindBuffer(gl.ARRAY_BUFFER, buffers.color);
        gl.vertexAttribPointer(
          programInfo.attribLocations.vertexColors,
          numComponents,
          type,
          normalize,
          stride,
          offset);
        gl.enableVertexAttribArray(
          programInfo.attribLocations.vertexColors);
      }

      gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, buffers.indices);

      // Tell WebGL to use our program when drawing

      gl.useProgram(programInfo.program);

      // Set the shader uniforms

      gl.uniformMatrix4fv(
        programInfo.uniformLocations.projectionMatrix,
        false,
        projectionMatrix);
      gl.uniformMatrix4fv(
        programInfo.uniformLocations.modelViewMatrix,
        false,
        modelViewMatrix);

      {
        const vertexCount = 36;
        const type = gl.UNSIGNED_SHORT;
        const offset = 0;
        gl.drawElements(gl.TRIANGLES, vertexCount, type, offset);
      }

    },

    initTextures() {
      const gl = this.gl;
      const cubeTexture = gl.createTexture();
      const cubeImage = new Image();
      cubeImage.onload = () => {
        this.handleCubeTextureLoaded(cubeImage, cubeTexture);
      }
      cubeImage.src = '@/assets/img/cubeImage.png';
    },

    handleCubeTextureLoaded(image, texture) {
      const gl = this.gl;
      gl.bindTexture(gl.TEXTURE_2D, texture);
      gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.UNSIGNED_SHORT, image);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR_MIPMAP_NEAREST);
      gl.generateMipmap(gl.TEXTURE_2D);
      gl.bindTexture(gl.TEXTURE_2D, null);
    },

    initBuffers(gl) {
      const positionBuffer = gl.createBuffer();
      const positions = [
        // Front face
        -1.0, -1.0,  1.0,
        1.0, -1.0,  1.0,
        1.0,  1.0,  1.0,
        -1.0,  1.0,  1.0,

        // Back face
        -1.0, -1.0, -1.0,
        -1.0,  1.0, -1.0,
        1.0,  1.0, -1.0,
        1.0, -1.0, -1.0,

        // Top face
        -1.0,  1.0, -1.0,
        -1.0,  1.0,  1.0,
        1.0,  1.0,  1.0,
        1.0,  1.0, -1.0,

        // Bottom face
        -1.0, -1.0, -1.0,
        1.0, -1.0, -1.0,
        1.0, -1.0,  1.0,
        -1.0, -1.0,  1.0,

        // Right face
        1.0, -1.0, -1.0,
        1.0,  1.0, -1.0,
        1.0,  1.0,  1.0,
        1.0, -1.0,  1.0,

        // Left face
        -1.0, -1.0, -1.0,
        -1.0, -1.0,  1.0,
        -1.0,  1.0,  1.0,
        -1.0,  1.0, -1.0
      ]
      gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
      gl.bufferData(
        gl.ARRAY_BUFFER,
        new Float32Array(positions),
        gl.STATIC_DRAW
      )
      const colorBuffer = gl.createBuffer();
      const colors = [
        [1.0,  1.0,  1.0,  1.0],    // Front face: white
        [1.0,  0.0,  0.0,  1.0],    // Back face: red
        [0.0,  1.0,  0.0,  1.0],    // Top face: green
        [0.0,  0.0,  1.0,  1.0],    // Bottom face: blue
        [1.0,  1.0,  0.0,  1.0],    // Right face: yellow
        [1.0,  0.0,  1.0,  1.0]     // Left face: purple
      ]
      let generatedColors = [];
      for (let j = 0; j < 6; j ++) {
        const c = colors[j];
        for (let i = 0; i < 4; i++) {
          generatedColors = generatedColors.concat(c);
        }
      }
      gl.bindBuffer(gl.ARRAY_BUFFER, colorBuffer);
      gl.bufferData(
        gl.ARRAY_BUFFER,
        new Float32Array(generatedColors),
        gl.STATIC_DRAW,
      )

      const cubeVerticesIndexBuffer = gl.createBuffer();
      gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, cubeVerticesIndexBuffer);
      const cubeVertexIndices = [
        0,  1,  2,      0,  2,  3,    // front
        4,  5,  6,      4,  6,  7,    // back
        8,  9,  10,     8,  10, 11,   // top
        12, 13, 14,     12, 14, 15,   // bottom
        16, 17, 18,     16, 18, 19,   // right
        20, 21, 22,     20, 22, 23    // left
      ]
      gl.bufferData(
        gl.ELEMENT_ARRAY_BUFFER,
        new Uint16Array(cubeVertexIndices),
        gl.STATIC_DRAW
      );

      return {
        position: positionBuffer,
        color: colorBuffer,
        indices: cubeVerticesIndexBuffer
      };

      // const vertices = [
      //   1.0, 1.0, 0.0,
      //   -1.0, 1.0, 0.0,
      //   1.0, -1.0, 0.0,
      //   -1.0, -1.0, 0.0
      // ];
      // gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
      // return {
      //   position: positionBuffer
      // };
    },

    initialShaderProgram(gl, vsSource, fsSource) {
      // 初始化着色器
      const vertexShader = this.loadShader(gl, gl.VERTEX_SHADER, vsSource);
      const fragmentShader = this.loadShader(gl, gl.FRAGMENT_SHADER, fsSource);

      // 创建着色器程序
      const shaderProgram = gl.createProgram();
      gl.attachShader(shaderProgram, vertexShader);
      gl.attachShader(shaderProgram, fragmentShader);
      gl.linkProgram(shaderProgram);
      if (!gl.getProgramParameter(shaderProgram, gl.LINK_STATUS)) {
        alert('Unable to initialize the shader program: ' + gl.getProgramInfoLog(shaderProgram));
        return null;
      }
      return shaderProgram;
    },

    loadShader(gl, type, source) {
      const shader = gl.createShader(type);
      gl.shaderSource(shader, source);
      gl.compileShader(shader);
      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        alert('An error occurred compiling the shaders: ' + gl.getShaderInfoLog(shader));
        gl.deleteShader(shader);
        return null;
      }
      return shader;
    }
  },
  mounted() {
    this.drawCanvas();
  }
}
</script>

<style scoped>
.gl-demo {
}
</style>
