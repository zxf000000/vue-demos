<template>
  <v-container fluid id="container"
  >
    <v-list-item-group id="scroll-target"
                       v-scroll="onScroll"
                       ref="scroll"
    >
      <v-list-item v-for="item in 5" :key="item" class="list-item"
      >
        <v-list-item-title>item {{item}}</v-list-item-title>
      </v-list-item>
      <v-list-item class="big-item scroll-trigger" ref="bigItem">
        <v-card id="parallax-card">
          <v-item-group
              class="d-flex align-center justify-start inner_group"
              ref="group"
              id="group"
          >
            <v-item v-for="aItem in 20"
                    class="inner_item flex-shrink-0 d-flex align-center justify-center"
                    :key="aItem">
              <v-card class="text--lighten-3">INNER ITEM {{aItem}}</v-card>
            </v-item>
          </v-item-group>
        </v-card>
      </v-list-item>
      <v-list-item v-for="item in 15" :key="item * 10" class="list-item">
        <v-list-item-title>item {{item}}</v-list-item-title>
      </v-list-item>
    </v-list-item-group>
  </v-container>
</template>

<script>
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger.js";

export default {
  name: "scroll-trigger",
  data() {
    return {
      progress: 0,
      groupTrans: {
      },
    }
  },
  methods: {
    onIntersect(entry) {
      console.log(entry[0].intersectionRatio);
    },
    onScroll() {
      // const scrollTop = document.querySelector('html').scrollTop;
      // if (scrollTop < 2500) {
      //   this.progress = 0;
      // } else if (scrollTop > 5500) {
      //   this.progress = 1;
      // } else {
      //   this.progress = (scrollTop - 2500)/3000;
      // }
      // const offset = this.$refs.group.$el.scrollWidth * this.progress;
      // gsap.set(this.$refs.group.$el, {
      //   x: -offset,
      // })
    },
    initGsap() {
      gsap.registerPlugin(ScrollTrigger);
      gsap.to('#group', {
        scrollTrigger: {
          trigger: '.scroll-trigger',
          triggerActions: 'restart pause reverse pause',
          start: 'top top',
          end: '90% bottom',
          scrub: 1,
        },
        translateX: -this.$refs.group.$el.scrollWidth + this.$refs.bigItem.$el.clientWidth,
        duration: 3,
      })
    }
  },
  computed: {
    thresholds() {
      const arr = [];
      for (let i = 0; i < 10; i += 1) {
        arr.push(i * 0.1);
      }
      return arr;
    },
  },
  mounted() {
    this.initGsap();
  },
  created() {
  }
}
</script>

<style scoped lang="scss">

#container {
  background: yellow;
}

.list-item {
  width: 100%;
  height: 500px;
}

.big-item {
  width: 100%;
  height: 5000px;
  background: indianred;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}

#parallax-card {
  background: black;
  width: 100%;
  position: sticky;
  top: 0;
  height: 100vh;
  margin: 0;
  overflow: hidden;
}

.inner_item {
  background: cornflowerblue;
  width: 300px;
  height: 300px;
}

.inner_group {
  grid-gap: 20px;
  margin: 100px 0 0 0;
}

</style>
