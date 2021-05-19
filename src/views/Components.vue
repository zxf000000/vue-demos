<template>
  <div class="components-container">
    <div>
      <b-tabs content-class="mt-3">
        <b-tab title="MuseumVertical">
          <MuseumVertical></MuseumVertical>
        </b-tab>
        <b-tab title="Museum" lazy>
          <Museum></Museum>
        </b-tab>
        <b-tab title="CircleLoading" >
          <div>
            <CircleLoading ref="loading" class="loading"></CircleLoading>
            <b-button @click="tapStart">start</b-button>
            <b-button @click="tapFinish">finish</b-button>
            <b-button @click="tapReset">reset</b-button>
          </div>
        </b-tab>
        <b-tab title="Hamburg">
          <Hamburg class="hamburg"></Hamburg>
        </b-tab>
        <b-tab title="animation">
          <div class="animation-container">
            <span class="animation-card card1" @click="tapBack" :class="{'leaveAnimation': show}"></span>
            <span class="animation-card card2" @click="tapFront" :class="{'showAnimation': show}"></span>
          </div>
        </b-tab>
        <b-tab title="mask">
          <MaskDemo :image="imageSrc"></MaskDemo>
        </b-tab>
        <b-tab title="cardAnimation">
          <AnimationCard></AnimationCard>
        </b-tab>
        <b-tab title="Fade">
          <FadeAnimation></FadeAnimation>
        </b-tab>
      </b-tabs>
    </div>
  </div>
</template>

<script>
import CircleLoading from "@/components/CircleLoading";
import Hamburg from '@/components/Hamburg'
import MaskDemo from "@/views/componenets/MaskDemo";
import image from '@/assets/unnamed.jpg';
import AnimationCard from "@/views/componenets/AnimationCard";
import Museum from "@/components/Museum/Museum";
import FadeAnimation from "@/components/fade-animation";
import MuseumVertical from "@/components/MuseumVertical/MuseumVertical";

export default {
  name: "Components",
  components: {MuseumVertical, FadeAnimation, Museum, AnimationCard, MaskDemo, CircleLoading, Hamburg},
  methods: {
    tapStart() {
      this.$refs.loading.startAnimation();
    },
    tapFinish() {
      this.$refs.loading.complete();
    },
    tapReset() {
      this.$refs.loading.reset();
    },
    tapBack() {
      this.show = true;

    },
    tapFront() {

    }
  },
  data() {
    return {
      show: false,
      imageSrc: image
    }
  }
}
</script>

<style scoped lang="scss">
.components-container {
  width: 100%;
  height: 100%;
  background-color: #eee;
}

.loading {
  width: 200px;
  height: 200px;
}

.hamburg {
  width: 100px;
  height: 100px;
  background: red;
}

.animation-container {
  width: 800px;
  height: 800px;
  background: gray;
  position: relative;
  margin-left: 100px;
  perspective: 1000px;
  .animation-card {
    width: 500px;
    height: 500px;
    position: absolute;
    top: 0;
    left: 0;
  }
  .card1 {
    background: yellow;
    z-index: 10;
  }
  .card2 {
    background: red;
    top: 40px;
    left: 40px;
    z-index: 11;
  }
}

.leaveAnimation {
  animation: leaveAnimation1 1s ease-in-out;
  animation-fill-mode: forwards;
}

.showAnimation {
  animation: leaveAnimation 1s ease-in-out;
  animation-fill-mode: forwards;
}

@keyframes leaveAnimation1 {
  0% {
    transform: translateX(0) translateY(0) translateZ(0);
  }
  50% {
    transform: translateX(60%) translateY(0) translateZ(0);
    z-index: 10;
  }
  100% {
    transform: translateX(40px) translateY(40px) translateY(0);
    z-index: 11;
  }
}

@keyframes leaveAnimation {
  0% {
    transform: translateX(0) translateY(0) translateZ(0);
  }
  50% {
    transform: translateX(-60%) translateY(0) translateZ(0);
    z-index: 11;
  }
  100% {
    transform: translateX(-40px) translateY(-40px);
    z-index: 10;
  }
}

</style>
