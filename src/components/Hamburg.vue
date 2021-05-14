<template>
  <svg viewBox="0 0 100 100" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" @click="tap">
    <path ref="path1" d="M 20 25 L 90 25 C 100 35, 100 70, 80 80 L 10 10" stroke-width="5" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" fill="none"></path>
    <path ref="path2" d="M 20 75 L 90 75 C 100 65, 100 20, 90 10 L 10 90" stroke-width="5" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" fill="none"></path>
  </svg>
</template>

<script>
import {TweenMax} from 'gsap';
export default {
  name: "Hamburg",
  data() {
    return {
      duration1: 2,
      duration2: 0.5,
    };
  },
  methods: {
    tap() {
      const path1 = this.$refs.path1;
      TweenMax.to(path1, {
        strokeDasharray: '350, 200',
        duration: this.duration1,
        ease: "easeInOut"
      });
      TweenMax.to(path1, {
        strokeDashoffset: "-148",
        duration: this.duration2
      })
      const path2 = this.$refs.path2;
      TweenMax.to(path2, {
        strokeDasharray: '350, 200',
        duration: this.duration1,
        ease: "easeInOut"
      });
      TweenMax.to(path2, {
        strokeDashoffset: "-148",
        duration: this.duration2
      })
    }
  },
  mounted() {
    const path1 = this.$refs.path1;
    TweenMax.set(path1, {
      strokeDasharray: "80, 300",
    });
    TweenMax.set(path1, {
      strokeDashoffset: "0"
    });
    const path2 = this.$refs.path2;
    TweenMax.set(path2, {
      strokeDasharray: "80, 300",
    });
    TweenMax.set(path2, {
      strokeDashoffset: "0"
    })
  }
}
</script>

<style scoped>

</style>
