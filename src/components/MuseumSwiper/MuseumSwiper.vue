<template>
  <div class="museum-swiper-container">
    <div>
      <BButton class="arrowButton" @click="tapRight">
        <BIconArrowLeftCircleFill></BIconArrowLeftCircleFill>
      </BButton>
      <BButton class="arrowButton" @click="tapLeft">
        <BIconArrowRightCircleFill></BIconArrowRightCircleFill>
      </BButton>
    </div>
    <div class="swiper-container museum-container" ref="container">
      <div class="swiper-wrapper pics" ref="pics">
        <PicCard class="swiper-slide" v-for="(item, index) in pics" :key="index" ref="picCard" :src="item" :is-big="index % 2 === 0" @hoverItem="hoverItem(index)" @tapItem="tapItem(index)" @leave="leave(index)"></PicCard>
      </div>
    </div>
  </div>

</template>

<script>

import gsap, {Power2, TweenLite} from 'gsap';
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

export default {
  name: "MuseumSwiper",
  components: {PicCard},
  mixins: [CalculateSizeMixin],
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
      lastOffset: 0,
      swiper: false,
    }
  },
  methods: {
    tapLeft() {
      if (this.isMoving) {
        return;
      }
      this.resetAll(() => {
        // 开始动画
      });
      this.startSlide(false);
    },
    tapRight() {
      if (this.isMoving) {
        return;
      }
      this.resetAll(() => {
        // 开始动画
      });
      this.startSlide(true);
    },
    startSlide(toRight) {
      this.isMoving = true;
      const that = this;
      const containerWidth = this.$refs.container.clientWidth;
      const firstWidth = this.$refs.picCard[0].initialWidth;
      const currentX = gsap.getProperty(this.$refs.pics, 'x');
      if (toRight) {
        let toX = currentX + containerWidth / 2;
        if (toX > containerWidth / 2 - firstWidth / 2) {
          toX = containerWidth / 2 - firstWidth / 2;
        }
        gsap.to(this.$refs.pics, {
          x: toX,
          ease: Power2.easeInOut,
          duration: 1,
          onComplete() {
            that.isMoving = false;
          }
        });
      } else {
        let toX = currentX - containerWidth / 2;
        const lastWidth = this.$refs.picCard[this.$refs.picCard.length - 1].initialWidth;
        const scrollWidth = this.$refs.pics.scrollWidth;
        if (toX < -scrollWidth + containerWidth / 2 + lastWidth / 2) {
          toX = -scrollWidth + containerWidth / 2 + lastWidth / 2
        }
        gsap.to(this.$refs.pics, {
          x: toX,
          ease: Power2.easeInOut,
          duration: 1,
          onComplete() {
            that.isMoving = false;
          },
        });
      }
      this.$refs.picCard.forEach(item => {
        item.startMoveAnimation();
      })
    },

    slideTo(index) {
      this.swiper.slideTo(index);
      // const container = this.$refs.picCard[index].$el;
      // const offsetX = container.offsetLeft;
      // const totalWidth = this.$refs.container.clientWidth;
      // const shouldOffset = offsetX - totalWidth / 2 + container.clientWidth / 2;
      // gsap.to(this.$refs.pics, {
      //   x: -shouldOffset
      // })
    },

    mouseDown(ev) {
      this.startMove = true;
      this.startEv = ev;
    },
    mouseUp(ev) {
      if (this.isMoving) {
        return;
      }
      if (!this.startMove) {
        return;
      }
      this.startMove = false;
      // 计算距离
      const offsetX = ev.clientX - this.startEv.clientX;
      // const time = ev.timeStamp - this.startEv.timeStamp;
      // const speed = offsetX / time * 1000;
      // 小鱼200 暂时不考虑
      if (Math.abs(offsetX) < 200) {
        return;
      }
      this.resetAll(() => {
        // 开始动画
      });
      this.startSlide(offsetX > 0);

    },
    mouseLeave() {
      if (!this.startMove) {
        return;
      }
      // 中断手势
      this.startMove = false;
    },
    tapItem(currentIndex) {
      // 滑动
      this.isTapping = true;
      const width = this.$refs.picCard[currentIndex].initialWidth;
      const item = this.$refs.picCard[currentIndex];
      item.tapFocus();
      const ratio = 1000 / width;
      gsap.to(item.$el, {
        scale: ratio,
        transform: 0,
        duration: 0.3,
      });
      this.scaleDownItems(currentIndex, width * (ratio - 1) / 2);
      this.slideTo(currentIndex);
    },
    hoverItem(currentIndex) {
      console.log('hover item');
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
      this.$refs.picCard.forEach((item, index) => {
        if (currentIndex !== index) {
            TweenLite.to(item.$el, {
              scale: 0.8,
              duration: 0.3,
              x: offsets[index][1] > 0 ? offsets[index][1] - extra : offsets[index][1] + extra,
            });
            item.hideText();
        }
      });
    },
    leave() {
      this.$refs.picCard.forEach(item => {
        item.noFocus();
        if (!this.isTapping) {
          TweenLite.to(item.$el, {
            x: 0,
            scale: 1,
            duration: 0.3,
          });
          gsap.to(item.$el, {
            x: 0,
            duration: 0.3,
          });
        }
      });
    },
    // 全部复位
    resetAll(complete) {
      this.$refs.picCard.forEach((item) => {
        gsap.to(item.$el, {
          x: 0,
          scale: 1,
          duration: 0.2,
          onComplete: complete,
        });
        item.hideText();
      })
    }
  },
  mounted() {
    this.swiper = new window.Swiper('.swiper-container.museum-container', {
      freeMode: true,
      centeredSlides: true,
      slidesPerView: 'auto',
    })
  },
}
</script>

<style scoped lang="scss">

.museum-swiper-container {
  width: 100vw;
  height: 900px;
  .arrowButton {
    width: 100px;
    margin: 20px;
  }
  .museum-container {
    user-select:none;
    width: 100%;
    height: 100%;
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
  }
}



</style>
