<template>
  <div class="hello">
    <DotaBox></DotaBox>


    <div class="box">
<!--      <img  id="img1" :style="transformStyle" src="@/assets/1.jpeg"/>-->
      <img  id="img2" :style="transformStyle1" src="@/assets/2.jpg"/>
    </div>
    <input class="input" type="range" min="0" max="360" :value="inputValue" v-on:change="inputChange"/>
    <div>{{inputValue}}</div>
    <button v-on:click="isTransform = !isTransform">transform</button>
    <table>
      <tr>
        <th><code>backface-visibility: visible;</code></th>
        <th><code>backface-visibility: hidden;</code></th>
      </tr>
      <tr>
        <td>
          <div class="container">
            <div class="cube showbf">
              <div class="face front">1</div>
              <div class="face back">2</div>
              <div class="face right">3</div>
              <div class="face left">4</div>
              <div class="face top">5</div>
              <div class="face bottom">6</div>
            </div>
          </div>
          <p>
            Since all faces are partially transparent,
            the back faces (2, 4, 5) are visible
            through the front faces (1, 3, 6).
          </p>
        </td>
        <td>
          <div class="container">
            <div class="cube hidebf">
              <div class="face front">1</div>
              <div class="face back">2</div>
              <div class="face right">3</div>
              <div class="face left">4</div>
              <div class="face top">5</div>
              <div class="face bottom">6</div>
            </div>
          </div>
          <p>
            The three back faces (2, 4, 5) are
            hidden.
          </p>
        </td>
      </tr>
    </table>

  </div>
</template>

<script>
import DotaBox from "./DotaBox";
export default {
  name: 'HelloWorld',
  components: {DotaBox},
  props: {
    msg: String
  },
  data: function () {
    return {
      inputValue: 0,
      transformStyle: {
        transform: 'rotateY(0deg)'
      },
      transformStyle1: {
        transform: 'rotateY(0deg)'
      },
      isTransform: false
    }
  },
  methods: {
    inputChange(event) {
      this.inputValue = event.target.value
      this.transformStyle = {
        transform: 'rotateY(' + event.target.value + 'deg)' + ' ' + 'translateZ(-20px)'
      }
      this.transformStyle1 = {
        transform: 'rotateY(' + event.target.value + 'deg)' + ' ' + 'translateZ(20px)'
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

@function pow($number, $exp) {
  $value: 1;
  @if $exp > 0 {
    @for $i from 1 through $exp {
      $value: $value * $number;
    }
  }
  @else if $exp < 0 {
    @for $i from 1 through -$exp {
      $value: $value / $number;
    }
  }
  @return $value;
}
@function fact($number) {
  $value: 1;
  @if $number > 0 {
    @for $i from 1 through $number {
      $value: $value * $i;
    }
  }
  @return $value;
}
@function pi() {
  @return 3.14159265359;
}
@function rad($angle) {
  $unit: unit($angle);
  $unitless: $angle / ($angle * 0 + 1);
  // If the angle has 'deg' as unit, convert to radians.
  @if $unit == deg {
    $unitless: $unitless / 180 * pi();
  }
  @return $unitless;
}

@function sin($angle) {
  $sin: 0;
  $angle: rad($angle);
  // Iterate a bunch of times.
  @for $i from 0 through 10 {
    $sin: $sin + pow(-1, $i) * pow($angle, (2 * $i + 1)) / fact(2 * $i + 1);
  }
  @return $sin;
}

@function cos($angle) {
  $cos: 0;
  $angle: rad($angle);
  // Iterate a bunch of times.
  @for $i from 0 through 10 {
    $cos: $cos + pow(-1, $i) * pow($angle, 2 * $i) / fact(2 * $i);
  }
  @return $cos;
}

@function tan($angle) {
  @return sin($angle) / cos($angle);
}

  .box {
    width: 1000px;
    height: 1000px;
    perspective: 1000px;
    background: red;
    transition: 1s;
  }

  .box-1 {
    width: 1000px;
    height: 1000px;
    margin-left: 300px;
    margin-bottom: 100px;
    background: #f1f1f1;
    display: flex;
    align-items: center;
    justify-content: center;
    perspective: 1000px;
    .circle {
      width: 1000px;
      height: 1000px;
      background: #cdcdcd;
      //display: flex;
      //flex-direction: column;
      //align-items: center;
      //justify-content: flex-start;
      //transform: rotateX(10deg);
      box-shadow: 0 0 10px black;
      position: relative;
      .card {
        width: 300px;
        height: 300px;
        background: grey;
        border: 1px solid white;
        flex-shrink: 0;
        color: white;
        display: flex;
        align-items: center;
        justify-content: center;
        perspective: 1000px;
        transform-style: preserve-3d;
        position: absolute;
        top: 0;
        left: 350px;
        &.card0 {
          transform: rotateX(108deg);
        }
        &.card1 {
          transform: rotateX(144deg);
        }
        &.card2 {
          transform: rotateX(180deg);
        }
        &.card3 {
          transform: rotateX(216deg);
        }
        &.card4 {
          transform: rotateX(252deg);
        }
        &.card5 {
          transform: rotateX(108deg);
        }
        &.card6 {
          transform: rotateX(108deg);
        }
        &.card7 {
          transform: rotateX(108deg);
        }
        &.card8 {
          transform: rotateX(108deg);
        }
        &.card9 {
          transform: rotateX(108deg);
        }
      }
    }
  }

  #img1 {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: all 1s linear;
    box-shadow: 2px 2px 3px black;
    transform-style: preserve-3d;
  }

  #img2 {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
    top: 0;
    left: 0;
    transition: all 1s linear;
    transform-style: preserve-3d;
    box-shadow:  4px 0 10px white;
  }


  .input {
    width: 300px;
    height: 30px;
  }


  .transformDiv {
    transform: rotateY(280deg);
  }

  /* Classes that will show or hide the
   three back faces of the "cube" */
  .showbf div {
    backface-visibility: visible;
  }

  .hidebf div {
    backface-visibility: hidden;
  }

  /* Define the container div, the cube div, and a generic face */
  .container {
    width: 150px;
    height: 150px;
    margin: 75px 0 0 75px;
    border: none;
  }

  .cube {
    width: 100%;
    height: 100%;
    perspective: 550px;
    perspective-origin: 150% 150%;
    transform-style: preserve-3d;
  }

  .face {
    display: block;
    position: absolute;
    width: 100px;
    height: 100px;
    border: none;
    line-height: 100px;
    font-family: sans-serif;
    font-size: 60px;
    color: white;
    text-align: center;
  }

  /* Define each face based on direction */
  .front {
    background: rgba(0, 0, 0, 0.3);
    transform: translateZ(50px);
  }

  .back {
    background: rgba(0, 255, 0, 1);
    color: black;
    transform: rotateY(180deg) translateZ(50px);
  }

  .right {
    background: rgba(196, 0, 0, 0.7);
    transform: rotateY(90deg) translateZ(50px);
  }

  .left {
    background: rgba(0, 0, 196, 0.7);
    transform: rotateY(-90deg) translateZ(50px);
  }

  .top {
    background: rgba(196, 196, 0, 0.7);
    transform: rotateX(90deg) translateZ(50px);
  }

  .bottom {
    background: rgba(196, 0, 196, 0.7);
    transform: rotateX(-90deg) translateZ(50px);
  }

  /* Make the table a little nicer */
  th, p, td {
    background-color: #EEEEEE;
    margin: 0px;
    padding: 6px;
    font-family: sans-serif;
    text-align: left;
  }

</style>
