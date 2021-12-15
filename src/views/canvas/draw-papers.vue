<template>
  <v-container class="canvas-container" ref="container">
    <canvas id="drawContext" ref="canvas"></canvas>
    <v-btn @click="tapClear">
      CLEAR
    </v-btn>
  </v-container>
</template>

<script>
export default {
  name: "draw-papers",
  data() {
    return {
      context: null,
      isDown: false,
      pathPoints: [],
    };
  },
  methods: {
    initContext() {
      const canvas = this.$refs.canvas;
      if (canvas.getContext) {
        this.context = canvas.getContext('2d');
        const width = canvas.clientWidth;
        const height = canvas.clientHeight;
        canvas.width = width;
        canvas.height = height;
        // 处理高分辨率问题
        const dpr = window.devicePixelRatio
            || window.webkitDevicePixelRatio
            || window.mozDevicePixelRatio
            || 1;
        const oldWidth = canvas.width;
        const oldHeight = canvas.height;
        canvas.width = Math.round(oldWidth * dpr);
        canvas.height = Math.round(oldHeight * dpr);
        this.context.scale(dpr, dpr);
        console.log(canvas.width, canvas.height);
        // 设置背景颜色
        this.context.fillStyle = '#000000';
        this.context.fillRect(0, 0, width, height);
      }
    },
    bindEvent() {
      this.$refs.canvas.addEventListener('mousedown', this.mouseDown);
      this.$refs.canvas.addEventListener('mousemove', this.mouseMove);
      this.$refs.canvas.addEventListener('mouseup', this.mouseUp);
    },
    mouseDown(event) {
      this.isDown = true;
      this.pathPoints.push([]);
      console.log(event);
    },
    mouseMove(event) {
      if (this.isDown) {
        console.log(event);
        this.pathPoints[this.pathPoints.length - 1].push({
          x: event.layerX,
          y: event.layerY,
        });
      }
    },
    mouseUp(event) {
      this.isDown = false;
      console.log(event);
    },
    rAF() {
      // 计算
      this.context.strokeStyle = '#FFFFFF';
      this.context.beginPath();
      console.log(this.pathPoints);
      for (let i = 0; i < this.pathPoints.length; i += 1) {
        const arr = this.pathPoints[i];
        for (let j = 0; j < arr.length; j += 1) {
          const point = arr[j];
          if (j === 0) {
            this.context.moveTo(point.x, point.y);
          } else {
            this.context.lineTo(point.x, point.y);
          }
        }
      }
      this.context.stroke();
      requestAnimationFrame(this.rAF);
    },
    tapClear() {
      this.context.clearRect(0,0, this.$refs.canvas.width, this.$refs.canvas.height);
      // 设置背景颜色
      this.context.fillStyle = '#000000';
      this.context.fillRect(0, 0, this.$refs.canvas.width, this.$refs.canvas.height);
      this.pathPoints = [];
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.initContext();
      this.bindEvent();
      this.rAF();
    });
  }
}
</script>

<style scoped lang="scss">
.canvas-container {
  width: 100%;
  height: 800px;
  background: yellow;
  #drawContext {
    width: 100%;
    height: 100%;
    cursor: crosshair;
  }
}

</style>
