<template>
  <div id="svg-container">
    <test-card></test-card>
    <test-filters></test-filters>
    <img :src="testImg"/>
    <canvas ref="canvas" id="canvas-content"></canvas>
    <AchimedeanSpiral class="item"></AchimedeanSpiral>
  </div>
</template>

<script>
import AchimedeanSpiral from "@/views/svgs/AchimedeanSpiral";
import brush from '@/assets/img/brush.png';
import testImg from '@/assets/img/test.svg';
import TestFilters from "@/views/svgs/test-filters";
import TestCard from "@/views/svgs/test-card";

export default {
  name: "Svgs",
  components: {TestFilters, AchimedeanSpiral, TestCard},
  data() {
    return {
      context: null,
      brush: null,
      isDown: false,
      lastPoint: {x: 0, y: 0},
      testImg,
    }
  },
  methods: {
    initContext() {
      const canvas = this.$refs.canvas;
      this.context = canvas.getContext('2d');
      canvas.width = 1000;
      canvas.height = 800;
      this.context.fillStyle = '#ffffff';
      this.context.fillRect(0,0, canvas.width, canvas.height);
      const img = new Image();
      img.src = brush;
      const that = this;
      img.onload =  function () {
        that.brush = this;
        canvas.addEventListener('mousedown', that.mouseDown);
        canvas.addEventListener('mouseup', that.mouseUp);
        canvas.addEventListener('mousemove', that.mouseMove);
      }
    },
    mouseDown(e) {
      this.isDown = true;
      this.lastPoint = {
        x: e.layerX,
        y: e.layerY,
      }
    },
    mouseUp() {
      this.isDown = false;
    },
    mouseMove(e) {
      if (!this.isDown) {
        return;
      }
      const point = {
        x: e.layerX,
        y: e.layerY,
      };
      // 计算角度
      // const deltaX = point.x - this.lastPoint.x;
      // const deltaY = point.y - this.lastPoint.y;
      // const dist = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
      // const angle = (Math.atan2(deltaY, deltaX) / Math.PI) * 180;
      // this.brush.style.transform = 'rotate(' + angle + 'deg)';
      // this.context.drawImage(this.brush, 0, 0, this.brush.width, this.brush.height, point.x - 20, point.y - 20, 40, 40);
      this.context.save();
      this.context.translate(point.x, point.y);
      this.context.fillStyle = '#000000';
      this.context.beginPath();
      const points = [];
      for (let i = 0; i < 15; i++) {
        let d=Math.pow(Math.random(),2);
        let a=Math.random()*Math.PI*2;
        let r=0.1+(Math.pow(1-d,2)*4);
        d*=20;
        points.push({
          d:d,
          a:a,
          r:r
        });
      }

      this.context.fillStyle = "rgba(0,0,0,0.8)";
      points.forEach((point) => {
        const r = point.r;
        let x = point.a;
        let y = point.d;
        const a = x;
        const d = y;
        x = Math.cos(a) * d;
        y = Math.sin(a) * d;
        this.context.beginPath();
        this.context.arc(x, y, r, 0, Math.PI * 2);
        this.context.fill();
        this.context.closePath()
        // drawCircle(
        //     point.r*pressure,
        //     point.a,
        //     point.d,
        //     true
        // );
      })

      this.context.fill();
      this.context.restore();
      this.lastPoint = {...point};
    }
  },
  mounted() {
    this.initContext();
  }
}
</script>

<style scoped lang="scss">

#svg-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(800px, 1fr));
  background: #EEEEEE;
  padding: 24px;
  .item {
    width: 100%;
    height: 400px;
  }
}

#canvas-content {
  width: 1000px;
  height: 800px;
}

</style>
