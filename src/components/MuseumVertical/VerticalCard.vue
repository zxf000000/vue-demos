<template>
  <div class="vertical-card" ref="verticalCard" :style="cardStyle">
    <div class="pic-container">
      <img :src="src" alt="pic" ref="img">
    </div>
  </div>
</template>

<script>
import { TweenLite } from 'gsap';
// const math = {
//   // 线性插值,根据时间缓慢移动
//   lerp: (a, b, n) => {
//     return (1 - n) * a + n * b
//   },
//   norm: (value, min, max) => {
//     return (value - min) / (max - min)
//   }
// }


export default {
  name: "VerticalCard",
  props: {
    src: {
      type: String,
      default: '',
    },
    ratio: {
      type: Number,
      default: 0
    },
    isBig: {
      type: Boolean,
      default: false,
    }
  },
  data() {
    return {
      maxOffset: 30,
      lastRatio: 0,
      cardStyle: this.isBig ? {
        width: 400 + 'px',
        height: 400 + 'px',
      } : {
        width: 300 + 'px',
        height: '300px',
      }
    };
  },
  methods: {
    updateOffset(offset) {
      TweenLite.set(this.$refs.img, {
        y: offset,
      });
    }
  },
  watch: {
    ratio() {
      this.lastRatio = this.ratio;
    }
  },
  mounted() {
  }
}
</script>

<style scoped lang="scss">

.vertical-card {
  margin: 20px;
  position: relative;
  overflow: hidden;
  .pic-container {
    width: 100%;
    height: 100%;
    img {
      width: 100%;
      height: calc(100% + 100px);
      object-fit: cover;
      margin-top: -100px;
    }
    .ratio {
      position: absolute;
      left: 0;
      top: 0;
      font-size: 30px;
      color: mediumvioletred;
    }
  }
}

</style>
