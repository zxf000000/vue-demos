<template>
  <div class="museum-vertical-container" ref="container"
       @mousedown="mouseDown"
       @mouseup="mouseUp"
       @mousemove="mouseMove"
       @mouseleave="mouseUp"
       @wheel.passive="wheelChange"
  >
    <div class="slide-container" ref="slideContainer">
      <div class="slide" :class="'slide' + index" v-for="(item, index) in pics" :key="index" ref="item">
        <VerticalCard :ratio="ratios[index]" :src="item" :isBig="index % 2 === 0" ref="card"></VerticalCard>
      </div>
    </div>
  </div>
</template>

<script>
import pic1 from "@/assets/img/1.jpg";
import pic2 from "@/assets/img/2.jpg";
import pic3 from "@/assets/img/3.jpg";
import pic4 from "@/assets/img/4.jpg";
import pic5 from "@/assets/img/5.jpg";
import pic6 from "@/assets/img/6.jpg";
import pic7 from "@/assets/img/7.jpg";
import pic8 from "@/assets/img/8.jpg";
import VerticalCard from "@/components/MuseumVertical/VerticalCard";
import RAFMixin from "@/mixins/RAFMixin";

export default {
  name: "MuseumVertical",
  components: {VerticalCard},
  mixins: [RAFMixin],
  data() {
    return {
      pics: [
        pic1,
        pic2,
        pic3,
        pic4,
        pic5,
        pic6,
        pic7,
        pic8,
        pic1,
        pic2,
        pic3,
        pic4,
        pic5,
        pic6,
        pic7,
        pic8,
      ],
      ratios: [],
      lastRatios: [],
      lastOffsets: [],
      currentOffsets: [],
      imgMaxOffset: 100,
      visableIndexs: [],
    }
  },
  methods: {
    // raf 计算属性
    didRun() {
      this.ratios.forEach((ratio, index) => {
        const card = this.$refs.card[index];
        // 计算 offset
        this.lastRatios[index] = this.lerp(this.lastRatios[index], this.ratios[index], 0.085);
        const offset = ((1 - this.lastRatios[index]) * this.imgMaxOffset).toFixed(2);
        card.updateOffset(offset);
      })
    },
    addObserver() {
      const threshold = [];
      for (let i = 0; i < 20; i++) {
        threshold.push((i / 20).toFixed(2));
      }
      const options = {
        root: this.$refs.container,
        threshold: threshold
      };
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((item) => {
          const index = this.$refs.item.indexOf(item.target);
          if (item.isIntersecting && item.rootBounds.top < item.intersectionRect.top) {
            this.ratios[index] = item.intersectionRatio;
          }
        });
      }, options);
      this.$refs.item.forEach((item) => {
        observer.observe(item);
      });
    },
    resetAll() {

    }
  },
  mounted() {
    this.ratios = Array(16).fill(0);
    this.lastRatios = Array(16).fill(0);
    this.addObserver();
    this.isVertical = true;
    this.el = this.$refs.container;
    this.content = this.$refs.slideContainer;
    this.dom = {
      el: this.el,
      content: this.content,
      elems: [...this.$refs.card.map(item => {
        return item.$el;
      })],
      handle: this.$refs.scrollBar,
    };
    this.$nextTick(this.on);
  }
}
</script>

<style scoped lang="scss">
.museum-vertical-container {
  width: 100%;
  height: 800px;
  background: yellowgreen;
  overflow: hidden;
  user-select: none;
  .slide-container {
    display: flex;
    align-items: center;
    flex-direction: column;
    .slide {
      background: #cdcdcd;
      border: 1px solid red;
    }
    .slide0 {
    }
  }
}
</style>
