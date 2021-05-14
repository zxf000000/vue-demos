<template>
  <div class="box-container">
    <div class="box-inner">
      <img class="rect rect0" src="@/assets/unnamed.jpg">
      <img class="rect rect1" src="@/assets/unnamed.jpg">
      <img class="rect rect2" src="@/assets/unnamed.jpg">
      <img class="rect rect3" src="@/assets/unnamed.jpg">
      <img class="rect rect4" src="@/assets/unnamed.jpg">
      <img class="rect rect5" src="@/assets/unnamed.jpg">
    </div>
  </div>
</template>

<script>
export default {
name: "DotaBox"
}
</script>

<style scoped lang="scss">
.box-container {
  margin-left: 200px;
  background: #dddddd;
  perspective: 2000px;
  //transform-style: preserve-3d;
  width: 1000px;
  height: 1000px;
  .box-inner {
    width: 100%;
    height: 100%;
    perspective: 2000px;
    //animation: rotateAnim 3s infinite;
    backface-visibility: visible;
    transform: rotateY(-70deg);
    .rect {
      position: absolute;
      left: 300px;
      top: 300px;
      background: #42b9834d;
      width: 200px;
      height: 200px;
      border: 1px solid red;
      backface-visibility: visible;
    }
    .rect0 {
      transform: rotateX(0);
      backface-visibility: visible;
    }
    .rect1 {
      transform-origin: top center;
      transform: rotateX(-90deg);
      background: red;
    }
    .rect2 {
      transform-origin: bottom center;
      transform: rotateX(90deg);
      background: blue;
    }
    .rect3 {
      transform-origin: right center;
      transform: rotateY(-90deg);
      background: blue;
    }
    .rect4 {
      transform-origin: left center;
      transform: rotateY(90deg);
      background: blue;
    }
    .rect5 {
      transform: translateZ(-200px);
      background: blue;
    }
  }
}
@keyframes rotateAnim {
  0% {
    transform: rotateX(0) rotateY(0);
  }
  50% {
    transform: rotateZ(50deg);
  }
  100% {
    transform: rotateX(0) rotateY(0);
  }
}

</style>