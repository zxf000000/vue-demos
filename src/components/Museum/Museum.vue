<template>
  <div class="museum-container" ref="container"
       @mousedown="mouseDown"
       @mouseup="mouseUp"
       @mousemove="mouseMove"
       @mouseleave="mouseUp"
       @wheel.passive="wheelChange"
  >
    <div class="pics" ref="pics" >
      <div
          ref="slide"
          v-for="(item, index) in pics"
          :key="index"
          @mouseover="hoverItem(index)"
          @mouseleave="leave"
          @click="tapItem(index)"
      >
        <PicCard ref="picCard" :src="item" :is-big="index % 2 === 0"></PicCard>
      </div>
    </div>
  </div>
</template>

<script>

import gsap, { TweenLite} from 'gsap';
import PicCard from "@/components/Museum/PicCard";
import pic1 from '@/assets/img/1.jpg';
import pic2 from '@/assets/img/2.jpg';
import pic3 from '@/assets/img/3.jpg';
import pic4 from '@/assets/img/4.jpg';
import pic5 from '@/assets/img/5.jpg';
import pic6 from '@/assets/img/6.jpg';
import pic7 from '@/assets/img/7.jpg';
import pic8 from '@/assets/img/8.jpg';
import CalculateSizeMixin from "@/mixins/CalculateSizeMixin";
// import MoveMixin from "@/mixins/MoveMixin";
import RAFMixin from "@/mixins/RAFMixin";

export default {
  name: "Museum",
  components: {PicCard},
  mixins: [CalculateSizeMixin, RAFMixin],
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
      selectedIndex: -1,
      startX: 0,
      startMove: false,
      startTranslate: 0,
      startEv: null,
      isMoving: false,
      isTapping: false,
      lastTapIndex: -1,
    }
  },
  methods: {
    slideTo(index) {
      const container = this.$refs.slide[index];
      const offsetX = container.offsetLeft;
      const totalWidth = this.$refs.container.clientWidth;
      const shouldOffset = offsetX - totalWidth / 2 + container.clientWidth / 2;
      this.slideToOffset(-shouldOffset);
    },
    tapItem(currentIndex) {
      if (this.state.dragging) return;
      // 滑动
      this.isTapping = true;
      const width = this.$refs.picCard[currentIndex].initialWidth;
      const card = this.$refs.picCard[currentIndex];
      card.tapFocus();
      const ratio = 1000 / width;
      const item = this.$refs.slide[currentIndex];
      gsap.to(item, {
        scale: ratio,
        transform: 0,
        duration: 0.6,
      });
      this.scaleDownItems(currentIndex, width * (ratio - 1) / 2);
      this.slideTo(currentIndex);
    },
    hoverItem(currentIndex) {
      console.log('hover item');
      // hover 的时候不能拖动
      this.canSlide = false;
      this.$refs.picCard[currentIndex].hoverFocus();
      if (!this.isTapping) {
        this.scaleDownItems(currentIndex);
      }
    },
    /* extra 在放大 item 时用到
    * */
    scaleDownItems(currentIndex, extra = 0) {
      const offsets = this.calculateOffsetSize({elements: this.$refs.picCard,
        index: currentIndex, ratio: 0.2})
      this.$refs.slide.forEach((item, index) => {
        if (currentIndex !== index) {
            TweenLite.to(item, {
              scale: 0.8,
              duration: 0.3,
              x: offsets[index][1] > 0 ? offsets[index][1] - extra : offsets[index][1] + extra,
            });
            const card = this.$refs.picCard[index];
            card.hideText();
        }
      });
    },
    leave() {
      // 鼠标离开图片的时候可以拖动
      this.canSlide = true;
      this.$refs.slide.forEach((item, index) => {
        const card = this.$refs.picCard[index];
        card.noFocus();
        if (!this.isTapping) {
          TweenLite.to(item, {
            x: 0,
            scale: 1,
            duration: 0.3,
          });
        }
      });
    },
    // 全部复位
    // 会被 mixin 调用
    resetAll() {
      this.$refs.slide.forEach((item, index) => {
          TweenLite.to(item, {
            scale: 1,
            duration: 0.3,
            x: 0,
          });
          const card = this.$refs.picCard[index];
          card.hideText();
      });
    },
    /**
     * raf 调用之后的方法, 用于做一些自定义处理
     */
    didRun() {
      this.dom.elems.forEach(item => {
        TweenLite.set(item, {
          scale: this.data.bounce,
        })
      })
    }
  },
  mounted() {
    // 配置一下mixin 的属性
    this.el = this.$refs.container;
    this.content = this.$refs.pics;
    this.dom = {
      el: this.el,
      content: this.content,
      elems: [...this.$refs.picCard.map(item => {
        return item.$el;
      })],
      handle: this.$refs.scrollBar,
    };
    this.$nextTick(this.on);
  },

}
</script>

<style scoped lang="scss">
.museum-container {
  user-select:none;
  width: 100vw;
  height: 900px;
  background: #000000;
  overflow: hidden;
  perspective-origin: center;
  perspective: 2000px;
  .pics {
    height: 90%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }
  .arrowButton {
    width: 100px;
    margin: 20px;
  }
}

</style>
