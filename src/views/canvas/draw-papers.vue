<template>
  <v-container class="canvas-container" ref="container">
    <canvas id="drawContext" ref="canvas"></canvas>
    <v-btn @click="tapClear">
      CLEAR
    </v-btn>
  </v-container>
</template>

<script>
import Brush from "@/views/canvas/brush/brush";

let mouseX = 0;
let mouseY = 0;

export default {
  name: "draw-papers",
  data() {
    return {
      context: null,
      brush: null,
      touched: false,
    };
  },
  methods: {
    initContext() {
      const canvas = this.$refs.canvas;
      this.brush = new Brush(canvas.clientWidth / 2, canvas.clientHeight/2, '#000000');
      this.context = canvas.getContext('2d');
      canvas.width = canvas.clientWidth;
      canvas.height = canvas.clientHeight;
      window.addEventListener('resize', this.resize, false);
    },
    bindEvent() {
      this.$refs.canvas.addEventListener('mousedown', this.mouseDown);
      this.$refs.canvas.addEventListener('mousemove', this.mouseMove);
      this.$refs.canvas.addEventListener('mouseup', this.mouseUp);
      this.$refs.canvas.addEventListener('mouseout', this.mouseUp);

      this.$refs.canvas.addEventListener('touchmove', this.touchMove, false);
      this.$refs.canvas.addEventListener('touchstart', this.touchStart, false);
      this.$refs.canvas.addEventListener('touchcancel', this.touchEnd, false);
      this.$refs.canvas.addEventListener('touchend', this.touchEnd, false);

    },
    mouseDown(e) {
      mouseX = e.layerX;
      mouseY = e.layerY;
      this.brush.startStroke(mouseX, mouseY);
    },
    mouseMove(e) {
      console.log(e.layerX, e.layerY);
      mouseX = e.layerX;
      mouseY = e.layerY;
    },
    mouseUp() {
      this.brush.endStroke();
    },
    touchMove(e) {
      const t = e.touches[0];
      mouseX = t.clientX;
      mouseY = t.clientY;
    },
    touchStart(e) {
      if (this.touched) return;
      this.touched = true;

      const t = e.touches[0];
      mouseX = t.clientX;
      mouseY = t.clientY;
      this.brush.startStroke(mouseX, mouseY);
    },
    touchEnd() {
      this.touched = false;
      this.brush.endStroke();
    },
    resize() {
      // centerX = this.$refs.canvas.width * 0.5;
      // centerY = this.$refs.canvas.height * 0.5;
      this.context = this.$refs.canvas.getContext('2d');
    },
    rAF() {
      // 计算
      this.brush.render(this.context, mouseX, mouseY);
      requestAnimationFrame(this.rAF);
    },
    tapClear() {
      this.context.clearRect(0,0, this.$refs.canvas.width, this.$refs.canvas.height);
      // 设置背景颜色
    },
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
