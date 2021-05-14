<template>
  <div class="container">
    <div class="carousel">
      <div class="carousel-inner" :style="translateStyle" >
        <div class="card"
             v-for="(item,index) in images"
             :key="item"
             :class="{'card-tilt': ((currentIndex + 1) === index || (currentIndex - 1) === index)}">
          <img :src="item"/>
        </div>
      </div>
    </div>
    <button v-on:click="clickPre">pre</button>
    <button v-on:click="clickNext">next</button>
  </div>
</template>

<script>

import img from '@/assets/unnamed.jpg';

export default {
  name: "Card",
  data: function () {
    return {
      currentIndex: 0,
      images: [
        img,
        img,
        img,
        img,
        img,
        img,
        img
      ],
      translateStyle: {
        transform: 'translateX(0)'
      }
    }
  },
  methods: {
    clickPre() {
      const index = this.currentIndex + 1;
      const offset = index * 220 + 20
      console.log(offset)
      this.translateStyle = {
        transform: 'translateX(-' + offset + 'px)'
      }
      this.currentIndex = index
    },
    clickNext() {
      const index = this.currentIndex - 1;
      const offset = index * 220 + 20
      this.translateStyle = {
        transform: 'translateX(-' + offset + 'px)'
      }
      this.currentIndex = index
    }
  }
}
</script>

<style scoped>
  .container {
    width: 100%;
    height: 100%;
  }
  .carousel {
    margin-left: 300px;
    margin-top: 100px;
    width: 300px;
    background: cyan;
    perspective: 400px;
    /*overflow: hidden;*/
  }

  .carousel-inner {
    display: flex;
    align-items: center;
    justify-content: start;
    overflow: hidden;
    width: 700%;
    transition: transform .5s linear;
    padding-left: 20px;
  }

  .card {
    width: 200px;
    height: 300px;
    flex-shrink: 0;
    flex-basis: 200px;
    background: red;
    margin-right: 20px;
    box-shadow: 3px 3px 20px black;
    border: 1px solid yellow;
    border-radius: 10px;
    overflow: hidden;
    transition: transform 0.5s linear;
    perspective: 500px;
    margin-top: 20px;
    margin-bottom: 20px;
    transform-style:preserve-3d;
  }

  .card-tilt {
    transform: translateZ(100px) perspective(500px) rotateY(30deg);
  }

  img {
    width: 100%;
    height: 100%;
  }

</style>