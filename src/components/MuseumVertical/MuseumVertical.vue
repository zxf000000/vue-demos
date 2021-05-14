<template>
  <div class="museum-vertical-container" ref="container">
    <div class="slide-container" ref="slideContainer">
      <div class="slide" v-for="(item, index) in pics" :key="index" ref="card">
        <VerticalCard :src="item"></VerticalCard>
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

export default {
  name: "MuseumVertical",
  components: {VerticalCard},
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
    }
  },
  methods: {
    addObserver() {
      const threshold = [];
      for (let i = 0; i < 100; i++) {
        threshold.push((i / 100).toFixed(2));
      }

      const options = {
        root: this.$refs.container,
        rootMargin: '0px',
        thresholds: threshold
      };
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          //   entry.boundingClientRect
          //   entry.intersectionRatio
          //   entry.intersectionRect
          //   entry.isIntersecting
          //   entry.rootBounds
          //   entry.target
          //   entry.time
          const index = this.$refs.card.indexOf(entry.target);
          console.log(entry.intersectionRatio, index);
        })
      }, options);
      this.$refs.card.forEach((item) => {
        observer.observe(item);
      });
    }
  },
  mounted() {
    this.addObserver();
  }
}
</script>

<style scoped lang="scss">
.museum-vertical-container {
  width: 100%;
  height: 800px;
  background: yellowgreen;
  overflow: scroll;
  .slide-container {
    width: 100%;
    height: 100%;
  }
}
</style>
