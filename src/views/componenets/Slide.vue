<template>
  <div class="slide-container">
    <div class="scroll" data-scroll>

      <nav class="filter">
        <ul class="filter__list">
          <li class="filter__item">
            <a href="#" class="filter__link is-active js-trigger">
              <div class="filter__link-mask" area-hidden><span>Interiors</span></div>
              Interiors
            </a>
          </li>
          <li class="filter__item">
            <a href="#" class="filter__link js-trigger">
              <div class="filter__link-mask" area-hidden><span>Residential</span></div>
              Residential
            </a>
          </li>
          <li class="filter__item">
            <a href="#" class="filter__link js-trigger">
              <div class="filter__link-mask" area-hidden><span>Commercial</span></div>
              Commercial
            </a>
          </li>
          <li class="filter__item">
            <a href="#" class="filter__link js-trigger">
              <div class="filter__link-mask" area-hidden><span>Installation</span></div>
              Installation
            </a>
          </li>
        </ul>
      </nav>

      <div class="scroll-content" data-scroll-content>

        <article class="slide slide--1 js-slide">
          <div class="slide__inner">
            <div class="slide__img js-transition-img">
              <figure class="js-transition-img__inner">
                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/58281/project-one.png" draggable="false">
              </figure>
            </div>
          </div>
        </article>

        <article class="slide slide--2 js-slide">
          <div class="slide__inner">
            <div class="slide__img js-transition-img">
              <figure class="js-transition-img__inner">
                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/58281/project-two.png" draggable="false">
              </figure>
            </div>
          </div>
        </article>

        <article class="slide slide--3 js-slide">
          <div class="slide__inner">
            <div class="slide__img">
              <figure>
                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/58281/project-three.png" draggable="false">
              </figure>
            </div>
          </div>
        </article>

        <article class="slide slide--1 js-slide">
          <div class="slide__inner">
            <div class="slide__img">
              <figure>
                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/58281/project-one.png" draggable="false">
              </figure>
            </div>
          </div>
        </article>

        <article class="slide slide--2 js-slide">
          <div class="slide__inner">
            <div class="slide__img">
              <figure>
                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/58281/project-two.png" draggable="false">
              </figure>
            </div>
          </div>
        </article>

        <article class="slide slide--3 js-slide">
          <div class="slide__inner">
            <div class="slide__img">
              <figure>
                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/58281/project-three.png" draggable="false">
              </figure>
            </div>
          </div>
        </article>

      </div>

      <div class="scroll-content scroll-content--last" data-scroll-content>

        <article class="slide slide--1 js-slide">
          <div class="slide__inner">
            <div class="slide__sub-title"><span>Project</span></div>
            <h1 class="slide__title"><div class="js-transition-title">Oak Refuge</div></h1>
            <div class="slide__img slide__img--proxy"></div>
            <div class="slide__project">Corpus Studio</div>
          </div>
        </article>

        <article class="slide slide--2 js-slide">
          <div class="slide__inner">
            <div class="slide__sub-title"><span>Project</span></div>
            <h1 class="slide__title"><div class="js-transition-title">Teton Residence</div></h1>
            <div class="slide__img slide__img--proxy"></div>
            <div class="slide__project">Ro Rocket Design</div>
          </div>
        </article>

        <article class="slide slide--3 js-slide">
          <div class="slide__inner">
            <div class="slide__sub-title"><span>Project</span></div>
            <h1 class="slide__title">Oak Refuge</h1>
            <div class="slide__img slide__img--proxy"></div>
            <div class="slide__project">Corpus Studio</div>
          </div>
        </article>

        <article class="slide slide--1 js-slide">
          <div class="slide__inner">
            <div class="slide__sub-title"><span>Project</span></div>
            <h1 class="slide__title">Teton Residence</h1>
            <div class="slide__img slide__img--proxy"></div>
            <div class="slide__project">Ro Rocket Design</div>
          </div>
        </article>

        <article class="slide slide--2 js-slide">
          <div class="slide__inner">
            <div class="slide__sub-title"><span>Project</span></div>
            <h1 class="slide__title">Oak Refuge</h1>
            <div class="slide__img slide__img--proxy"></div>
            <div class="slide__project">Corpus Studio</div>
          </div>
        </article>

        <article class="slide slide--3 js-slide">
          <div class="slide__inner">
            <div class="slide__sub-title"><span>Project</span></div>
            <h1 class="slide__title">Teton Residence</h1>
            <div class="slide__img slide__img--proxy"></div>
            <div class="slide__project">Ro Rocket Design</div>
          </div>
        </article>

      </div>

      <div class="scrollbar" data-scrollbar>
        <div class="scrollbar__handle js-scrollbar__handle"></div>
      </div>

    </div>

    <div class="mask js-mask">
      <div class="mask__slice js-mask__slice"></div>
      <div class="mask__slice js-mask__slice"></div>
      <div class="mask__slice js-mask__slice"></div>
      <div class="mask__inner">
        <figure class="logo logo--mask">
          <img class="js-logo" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/58281/logo.svg">
        </figure>
        <div class="mask-line js-mask-line">
          <div class="mask-line__inner js-mask-line"></div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>

import {Smooth, Transition} from './shaders/program';

export default {
  name: "Slide",
  data() {
    return {
      tl: null,
      lastX: 0,
      lastTime: 0,
      down: false,
    }
  },
  methods: {

  },
  mounted() {
    // Init classes
    const smooth = new Smooth()
    const transition = new Transition()
    console.log(smooth, transition);
  }
}
</script>

<style scoped lang="scss">
.slide-container {
  width: 100vw;
  height: 1000px;
  background: indianred;
  margin-top: 0;
  .box {
    margin-left: 30px;
    width: 100px;
    height: 100px;
    background: black;
  }
}

@font-face {
  font-family: 'font';
  src: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/58281/https://s3-us-west-2.amazonaws.com/s.cdpn.io/58281/OakesGrotesk-Semi-Bold.woff.woff2') format('woff2');
  src: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/58281/https://s3-us-west-2.amazonaws.com/s.cdpn.io/58281/OakesGrotesk-Semi-Bold.woff.woff2') format('woff');
  font-weight: normal;
  font-style: normal;
}

body{
  height: 100%;
  overflow-y: scroll;
  padding: 0;
  margin: 0;
  background-color: #111;
  user-select: none;
}

h1, h2{
  font-weight: normal;
}

* {
  box-sizing: border-box;
}

figure{
  padding: 0;
  margin: 0;
}

.scroll{
  cursor: grab;
}

.scroll-content{
  display: flex;
  white-space: nowrap;
  position: relative;
  height: 100vh;

  &--last{
    position: absolute;
    top: 0;
    left: 0;
  }
}

.hi{
  position: fixed;
  bottom: 2vw;
  left: 2vw;
  color: #fff;
  font-size: 1vw;
  z-index: 999;
  text-decoration: none;
}

.logo{
  position: relative;

  &--top{
    position: fixed;
    top: 2vw;
    left: 2vw;
    z-index: 10;

    img{
      height: 1vw;
      width: auto;
    }
  }

  &--resize{
    margin-bottom: 1rem;

    img{
      width: 10rem;
      margin: 0 auto;
    }
  }

  &--mask{
    overflow: hidden;
    margin-bottom: 2rem;

    img{
      width: 15rem;
      height: auto;
      margin: 0 auto;
      visibility: hidden;
      opacity: 0;
    }
  }
}

.menu-btn{
  position: fixed;
  top: 2vw;
  right: 2vw;
  display: flex;
  align-items: center;
  text-decoration: none;
  z-index: 999;

  &__circles{
    position: relative;
    height: 0.45vw;
    width: 0.45vw;
    margin-right: 0.75vw;
  }

  &__circle{
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #fff;
    border-radius: 50%;

    &--top{
      visiblity: hidden;
      opacity: 0;
    }
  }

  &__text{
    color: #fff;
    font-size: 1vw;
  }
}

.filter{
  position: absolute;
  top: 7.5%;
  left: 50%;
  transform: translateX(-50%);
  z-index: 10;

  &__list{
    display: flex;
  }

  &__item{
    display: block;
  }

  &__link{
    position: relative;
    display: block;
    color: rgba(#fff, 0.5);
    text-decoration: none;
    padding: 0 1.5vw;
    font-size: 1.15vw;
    overflow: hidden;

    &-mask{
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      overflow: hidden;
      background-color: #111;
      transform: translate3d(-100%, 0, 0);
      transition: transform .75s ease;
      z-index: 2;

      span{
        display: block;
        padding: 0 1.5vw;
        font-size: 1.15vw;
        transform: translate3d(100%, 0, 0);
        transition: transform .75s ease;
        color: #fff;

        .filter__link:hover &,
        .filter__link.is-active & {
          transform: translate3d(0, 0, 0);
        }
      }

      .filter__link:hover &,
      .filter__link.is-active & {
        transform: translate3d(0, 0, 0);
      }
    }
  }
}

.slide{
  display: flex;
  width: 50vw;
  height: 100%;
  padding: 20vh 0;

  &--1{
    align-items: flex-start;
  }

  &--2{
    align-items: flex-end;
  }

  &--3{
    align-items: center;
  }


  &:last-child{
    width: 65vw;
    padding-right: 15vw;
  }

  &__inner{
    position: relative;
    padding-left: 15vw;
    width: 100%;
  }

  &__sub-title{
    position: absolute;
    top: 15%;
    left: 5vw;
    color: rgba(#fff, 0.5);
    font-size: 1vw;
  }

  &__title{
    position: absolute;
    top: 7.5%;
    left: 7.5vw;
    color: #fff;
    font-size: 4vw;
    z-index: 2;
    overflow: hidden;
  }

  &__project{
    color: #fff;
    position: absolute;
    top: 100%;
    right: 5%;
    font-size: 1.15vw;
    padding-top: 1.5vw;
  }

  &__img{
    position: relative;
    overflow: hidden;
    padding-top: 65%;
    width: 100%;

    figure{
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;

      img{
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        object-fit: cover;
      }
    }
  }
}

img{
  display: block;
  width: 100%;
  height: auto;
}

.scrollbar{
  position: absolute;
  bottom: 7.5%;
  left: 20%;
  right: 20%;
  height: 1px;
  background-color: rgba(#fff, 0.25);

  &__handle{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transform: scaleX(0);
    transform-origin: left;
    background-color: #fff;
  }
}

.mask{
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1000;
  visibility: hidden;
  opacity: 0;

  &__slice{
    flex: 1;
    background-color: #000;
  }

  &__inner{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
  }

  &-line{
    position: relative;
    transform-origin: left;
    width: 20rem;
    height: 2px;
    overflow: hidden;
    background-color: rgba(#fff, 0.25);
    visibility: hidden;
    opacity: 0;

    &__inner{
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: #fff;
      transform-origin: left;
    }
  }
}

.resize{
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  z-index: 9999;

  &__inner{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
    color: #fff;
    text-align: center;
    text-decoration: none;
  }

  span{
    color: rgba(#fff, 0.5);
  }

  @media (max-width: 800px) {
    display: block;
  }

  @media (max-height: 600px) {
    display: block;
  }
}

</style>
