<template>
    <div class="pic-card" ref="card" :style="picStyle" >
      <div class="content" ref="picContainer">
        <span class="pic-container">
          <img :src="src" alt="pic"  ref="pic">
        </span>
      </div>
      <span class="left-text text" ref="leftText" >United States copyright law.[1]</span>
      <span class="right-text text" ref="rightText"> the coast of Bombay, killing 213.[2]</span>
      <span class="title-text" ref="title">1888</span>
    </div>
</template>

<script>

// eslint-disable-next-line no-unused-vars
import {TimelineLite, TweenLite, Power2} from 'gsap';

export default {
  name: "PicCard",
  props: {
    src: {
      type: String,
      default: '',
    },
    isBig: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    picStyle() {
      return {
        height: this.isBig ? '400px': '300px',
        width: this.isBig ? '400px' : '300px',
      };
    },
    cardStyle() {
      return {
        background: this.getRandomColor()
      };
    },
  },
  data() {
    return {
      initialWidth: 0,
      initialHeight: 0,
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.initialWidth = this.isBig ? 400 : 300;
      this.initialHeight = this.isBig ? 400 : 300;
    })

  },
  methods: {
    // 收缩
    shrink({ratio, offset}) {
      TweenLite.to(this.$refs.card, {
        scale: ratio,
        x: offset,
        duration: 0.3,
      });
    },
    tapFocus() {
      TweenLite.to(this.$refs.leftText, {
        opacity: 1,
        duration: 0.3,
        delay: 0.3,
      });
      TweenLite.to(this.$refs.rightText, {
        opacity: 1,
        duration: 0.3,
        delay: 0.3,
      });
      TweenLite.to(this.$refs.title, {
        opacity: 1,
        top: 'calc(50% - 25px)',
        duration: 0.3,
        delay: 0.3,
      });
      TweenLite.to(this.$refs.picContainer, {
        width: '70%',
        height: '70%',
        marginRight: '20%',
        duration: 0.3,
      });
    },
    hoverFocus() {
      TweenLite.to(this.$refs.pic, {
        scale: 1.1,
        duration: 0.3,
      });
    },
    loseFocus({delay, duration}) {
      TweenLite.to(this.$refs.card, {
        // scale: 0.8,
        width: this.initialWidth * 0.8,
        height: this.initialHeight * 0.8,
        delay: delay,
        duration: duration,
      });
    },
    noFocus() {
      TweenLite.to(this.$refs.pic, {
        scale: 1,
        duration: 0.3,
      });
    },
    hideText() {
      TweenLite.to(this.$refs.leftText, {
        opacity: 0,
        duration: 0.1,
      });
      TweenLite.to(this.$refs.rightText, {
        opacity: 0,
        duration: 0.1,
      });
      TweenLite.to(this.$refs.title, {
        opacity: 0,
        top: '70%',
        duration: 0.1,
      });
      TweenLite.to(this.$refs.picContainer, {
        width: '100%',
        height: '100%',
        marginRight: 0,
        duration: 0.1,
      });
    },
    removeMargin() {
      TweenLite.to(this.$refs.card, {
        marginLeft: 0,
      });
    },
    resetSize() {
      TweenLite.to(this.$refs.card, {
        // scale: 1,
        width: this.initialWidth,
        height: this.initialHeight,
        margin: 0,
        x: 0,
        scale: 1,
      });

    },
    getRandomColor(){
      return '#'+Math.floor(Math.random()*16777215).toString(16);
    }
  }
}
</script>

<style scoped lang="scss">
.pic-card {
  //background: indianred;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  padding: 10px;
  flex-shrink: 0;
  position: relative;
  .content {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    overflow: hidden;
    .pic-container {
      width: 100%;
      height: 100%;
      overflow: hidden;
      position: relative;
      img {
        object-fit: cover;
        width: 100%;
        height: 100%;
        -webkit-user-drag: none;
      }
    }
  }
  .text {
    writing-mode: vertical-rl;
    color: white;
    opacity: 0;
    font-size: 10px;
    white-space: nowrap;
    text-overflow: clip;
    text-align: end;
    position: absolute;
    pointer-events:none;
  }
  .left-text {
    left: 0;
    bottom: 15%;
  }
  .right-text {
    bottom: 15%;
    right: calc(20%);
  }

  .title-text {
    color: #FFD700;
    font-size: 40px;
    line-height: 50px;
    position: absolute;
    right: 10%;
    top: calc(70%);
    opacity: 0;
    pointer-events:none;
    font-family: "Tiro Tamil";
  }
}

</style>
