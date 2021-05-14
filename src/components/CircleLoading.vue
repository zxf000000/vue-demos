<template>
  <svg viewBox="0 0 100 100" version="1.1" xmlns="http://www.w3.org/2000/svg" class="icon" >
      <path d="M 10 50 A 40 40 0 1 1 90 50 A 40 40 0 1 1 10 50" fill="none" stroke="#ccc" stroke-width="5"></path>
      <path ref="ellipse" d="M 10 50 A 40 40 0 1 1 90 50 A 40 40 0 1 1 10 50" fill="none" stroke="white" stroke-width="5"></path>
    <path ref="okPath" d="M 26 49 L 46.4 68.4 L 76.31 39.47" stroke-width="5" stroke="white" fill="transparent" stroke-linecap="round" opacity="1">
    </path>
  </svg>
</template>

<script>

import {TweenMax} from 'gsap';

export default {
  name: "CircleLoading",
  data() {
    return {
      pending: true,
      circleAnimation: null,
      rotateAnimation: null,
      completeAnimation: null,
      resetAnimation: null,
    }
  },
  methods: {
    startAnimation() {

      if (this.circleAnimation) {
        this.circleAnimation.restart();
        this.rotateAnimation.restart();
        return;
      }
      const path = this.$refs.ellipse;
      TweenMax.set(path, {strokeDasharray: '0, 260'});
      TweenMax.set(path, {transformOrigin: 'center'});
      this.circleAnimation = TweenMax.to(path, {
        strokeDasharray: '220, 40',
        duration: 3,
        repeat: -1,
        repeatRefresh: true,
        yoyo: true,
        yoyoEase: true,
        immediateRender: false,
      });
      this.rotateAnimation = TweenMax.to(path, {
        rotation: 360,
        duration: 1,
        repeat: -1,
        repeatRefresh: false,
        ease: 'linear',
      })
    },
    complete() {
      this.circleAnimation.pause();
      this.rotateAnimation.pause();
      const path = this.$refs.ellipse;
      this.completeAnimation = TweenMax.to(path, {
        strokeDasharray: '260, 0',
        duration: 1,
      })
      TweenMax.set(this.$refs.okPath, {opacity: 1});
      TweenMax.to(this.$refs.okPath, {
        strokeDasharray: '100, 0',
        duration: 1,
      })
    },
    reset() {
      if (this.completeAnimation) {
        this.completeAnimation.kill();
      }
      const ellipse = this.$refs.ellipse;
      const okPath = this.$refs.okPath;
      this.resetAnimation = TweenMax.to(ellipse, {
        strokeDasharray: '0, 260'});
      TweenMax.to(okPath, {
        strokeDasharray: '0, 100',
      });
      TweenMax.to(okPath, {
        opacity: 0,
      });
    }
  },
  mounted() {
    this.reset();
  },

}
</script>

<style scoped lang="scss">
.group-1 {
  animation: rotate 1s infinite linear;
  transform-origin: center;
}
//
//.circle-1 {
//  animation: pathAnimation 3s infinite linear forwards;
//  &.full {
//    animation: pathFullAnimation 5s linear forwards;
//  }
//}

@keyframes pathFullAnimation {
  100% {
    stroke-dasharray: 251, 10;
  }
}

@keyframes pathAnimation {
  0% {
    stroke-dasharray: 220, 31;
  }
  50% {
    stroke-dasharray: 31, 220;
  }
  100% {
    stroke-dasharray: 220, 31;
  }
}

@keyframes rotate {
  100% {
    transform: rotate(360deg);
  }
}
</style>
