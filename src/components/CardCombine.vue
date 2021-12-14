<template>
  <div class="card-container" >
    <b-button @click="tapCombine" >Composite</b-button>

    <div class="card-content" :class="{show: showImg}">
      <img class="img img1" :class="{show: showImg}" :src="bg" alt="bg">
      <img class="img img2" :class="{show: showImg}" :src="frame" alt="frame">
      <img class="img img3" :class="{show: showImg}" :src="charm" alt="charm">
      <img class="img img4" :class="{show: showImg}" :src="role" alt="role">
      <img class="img img5" :class="{show: showImg}" :src="soul" alt="soul">
    </div>
<!--    <b-aspect aspect="156/216" class="card-bg">-->
<!--      <div></div>-->
<!--    </b-aspect>-->

<!--    <img :src="mask" width="200">-->
  </div>
</template>

<script>
import bg from '@/assets/img/card/1.png';
import frame from '@/assets/img/card/2.png';
import charm from '@/assets/img/card/3.png';
import role from '@/assets/img/card/4.png';
import soul from '@/assets/img/card/5.png';
import mask from '@/assets/img/card/mask.svg';

export default {
  name: "CardCombine",
  data() {
    return {
      bg,
      frame,
      charm,
      role,
      soul,
      mask,
      showImg: false,
    }
  },
  methods: {
    tapCombine() {
      this.showImg = !this.showImg;
    }
  }
}
</script>

<style scoped lang="scss">
.card-container {
  width: 1000px;
  height: 1000px;
  perspective: 2000px;
  perspective-origin: center;
  background: yellow;
  //transform-origin: center;
  //position: relative;
  .card-content {
    top: 200px;
    left: 200px;
    width: 300px;
    height: 415px;
    position: relative;
    perspective: 2000px;
    perspective-origin: center center;
    transform-origin: center center;
    background: blue;
    cursor: url("../assets/img/cursor.svg"), pointer;
    &.show {
      animation-name: shake;
      animation-duration: 2s;
    }
  }
  .img {
    width: 100%;
    left: 0;
    top: 0;
    position: absolute;
    transition: all .5s cubic-bezier(.65,0,1,1);
  }
  .img1 {
    transform: translate3d(-400px, -400px, 3000px);
    &.show {
      transform: translate3d(0, 0, 0);
    }
  }
  .img2 {
    transform: translate3d(-400px, 0, 3000px);
    transition-delay: 0.25s;
    &.show {
      transform: translate3d(0, 0, 0);
    }
  }
  .img3 {
    transform: translate3d(-400px, 400px, 3000px);
    transition-delay: 0.5s;
    &.show {
      transform: translate3d(0, 0, 0);
    }
  }
  .img4 {
    transform: translate3d( 400px, 400px, 3000px);
    transition-delay: 0.75s;
    &.show {
      transform: translate3d(0, 0, 0);
    }
  }
  .img5 {
    transform: translate3d(400px, -400px, 3000px);
    transition-delay: 1.0s;
    &.show {
      transform: translate3d(0, 0, 0);
    }
  }
}

.card-bg {
  mask: url("../assets/img/card/mask.svg");
  width: 200px;
  position: absolute;
  margin: auto;
  top: 300px;
  background: blue;
  left: 450px;
}

@keyframes shake {
  0% {
    transform: rotate3d(0,0,0,0) scale(1);
  }
  25% {
    transform: rotate3d(0,0,0,0) scale(1);
  }
  29% {
    transform: rotate3d(0,0,0,0) scale(0.9);
  }
  34% {
    transform: rotate3d(0,0,0,0) scale(1);
  }
  37.5% {
    transform: rotate3d(0,0,0,0) scale(1);
  }
  42% {
    transform: rotate3d(0,0,0,0) scale(0.9);
  }
  46% {
    transform: rotate3d(0,0,0,0) scale(1);
  }
  50% {
    transform: rotate3d(0,0,0,0) scale(1);
  }
  54% {
    transform: rotate3d(1,-1,0,15deg) scale(1);
  }
  58% {
    transform: rotate3d(0,0,0,0) scale(1);
  }
  62.5% {
    transform: rotate3d(0,0,0,0) scale(1);
  }
  65% {
    transform: rotate3d(0,0,0,0) scale(0.9);
  }
  69% {
    transform: rotate3d(0,0,0,0) scale(1);
  }
  75% {
    transform: rotate3d(0,0,0,0) scale(1);
  }
  79% {
    transform: rotate3d(-1,1,0,15deg) scale(1);
  }
  83% {
    transform: rotate3d(0,0,0,0) scale(1);
  }
}



</style>
