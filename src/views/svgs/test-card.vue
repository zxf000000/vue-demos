<template>
  <svg version="1.1"
       xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
       width="489"
       height="681"
       viewBox="0 0 489 681">
    <defs>
      <path id="tPath1"
            d="M 48 45 L 448 45 A 15 15, 0, 0, 1, 463, 58 L 463 199 A 15 15, 0, 0, 1, 448, 214 L 48 214
          A 15 15, 0, 0, 1, 33, 199 L 33 58 A 15 15, 0, 0, 1, 48 45"
            stroke-width="2"
            stroke="red"
      >
      </path>
      <path id="tPath2"
            d="M 128 272 A 93 93, 0, 1, 1, 128 458 A 93 93, 0, 1, 1, 128 272"
            stroke="#FFF"
      >
      </path>
      <linearGradient id="bgG">
        <stop offset="0" stop-color="red">
          <animate attributeName="offset"
                   values="-0.5; 0; 0.5; 1"
                   dur="5s"
                   repeatCount="indefinite"
          >
          </animate>
        </stop>
        <stop offset="0.5" stop-color="yellow">
          <animate attributeName="offset"
                   values="0; 0.5; 1; 1.5"
                   dur="5s"
                   repeatCount="indefinite"
          >
          </animate>
        </stop>
        <stop offset="1" stop-color="red">
          <animate attributeName="offset"
                   values="0.5; 1; 1.5; 2"
                   dur="5s"
                   repeatCount="indefinite"
          >
          </animate>
        </stop>
      </linearGradient>
      <linearGradient id="barGradient">
        <stop offset="0" stop-color="rgba(255,255,255,0.1)">
          <animate attributeName="offset" values="0;0.37;0.58;0.81;1" dur="3s" repeatCount="indefinite"  />
        </stop>
        <stop offset="0.5" stop-color="rgba(255,255,255,0.5)">
          <animate attributeName="offset" values="0.37;0.58;0.81;1; 1.37" dur="3s" repeatCount="indefinite"  />
        </stop>
        <stop offset="1" stop-color="rgba(255,255,255,0.1)">
          <animate attributeName="offset" values="0.58;0.81;1; 1.37; 1.74" dur="3s" repeatCount="indefinite"  />
        </stop>
      </linearGradient>
    </defs>
    <rect x="0" y="0" width="100%" height="100%" rx="50" fill="url(#bgG)" />
    <rect x="13" y="16" width="463" height="650" rx="50" fill="transparent" stroke="#FFF" stroke-width="2" />
    <g class="top-content">
      <rect x="48" y="59" width="403.6" height="141" rx="15" stroke-width="2" stroke="#FFFFFF"
            fill="transparent"/>
      <text x="70" y="135" class="title-text">
        Colab NFT
      </text>
      <text x="70" dy="180" class="from">
        From 123#123123
      </text>
      <text fill="white">
        <textPath startOffset="-100%" href="#tPath1">test pathtest pathtest pathtest pathtest path
          <animate xmlns="http://www.w3.org/2000/svg" additive="sum" attributeName="startOffset" from="0%" to="100%" begin="0s" dur="15s" repeatCount="indefinite"/>
        </textPath>
        <textPath startOffset="0" href="#tPath1">test pathtest pathtest pathtest pathtest path
          <animate xmlns="http://www.w3.org/2000/svg" additive="sum" attributeName="startOffset" from="0%" to="100%" begin="0s" dur="15s" repeatCount="indefinite"/>
        </textPath>
      </text>
    </g>
    <g class="center-content">
      <circle cx="128" cy="365" r="83" stroke-width="2" stroke="#fff" fill="transparent">
      </circle>
      <svg id="item1" x="65" y="301" width="125" height="97" viewBox="0 0 125 97" xmlns="http://www.w3.org/2000/svg">
        <g fill="#FFF" fill-rule="evenodd" id="item1">
          <path d="M100.003 48.952a5.74 5.74 0 0 1-5.738-5.738 5.739 5.739 0 1 1 5.738 5.738zM88.526 60.429a5.74 5.74 0 0 1-5.738-5.74 5.739 5.739 0 1 1 5.738 5.739zM77.05 48.952a5.74 5.74 0 0 1 0-11.477 5.739 5.739 0 0 1 0 11.477zm-31.561 0h-2.87v2.869a5.738 5.738 0 0 1-11.475 0v-2.87h-2.87a5.74 5.74 0 0 1-5.738-5.737 5.74 5.74 0 0 1 5.738-5.74h2.87v-2.868a5.739 5.739 0 0 1 11.476 0v2.869h2.869a5.74 5.74 0 0 1 0 11.477zm43.037-22.953a5.739 5.739 0 1 1 0 11.477 5.739 5.739 0 0 1 0-11.477zm35.928 51.215s-4.752-32.775-5.49-36.797c-2.745-14.992-10.942-25.111-24.7-25.826v-.07h-63.12v.07C17.389 15.306 9.189 22.7 6.446 40.417c-.63 4.042-5.49 36.797-5.49 36.797l.067.022c-.031.445-.066.887-.066 1.34 0 9.784 7.985 17.717 17.838 17.717 6.32 0 11.86-3.274 15.028-8.197l.066.02 10.019-16.45a5.491 5.491 0 0 1 4.683-2.63h28.226c1.914 0 3.69.999 4.683 2.63l10.022 16.45.063-.02a17.846 17.846 0 0 0 15.03 8.197c9.85 0 17.839-7.933 17.839-17.717 0-.453-.034-.895-.07-1.34l.07-.022zM92.83.437H78.484a3.587 3.587 0 0 0 0 7.173H92.83a3.588 3.588 0 0 0 3.586-3.587A3.588 3.588 0 0 0 92.83.437m-45.906 0H32.578a3.587 3.587 0 0 0 0 7.173h14.346a3.588 3.588 0 0 0 3.586-3.587A3.588 3.588 0 0 0 46.924.437"/>
        </g>
      </svg>
      <text x="102" y="425" class="type-text">GAME</text>
      <text class="attr-title" x="273.8" y="298">
        NFTs:
      </text>
      <rect x="273.8" y="307" width="185" height="25"  fill="rgba(255,255,255, 0.1)" rx="5">
      </rect>
      <text x="281" y="325" class="attr-title">
        6
      </text>
      <text class="attr-title" x="273.8" y="363">
        Colab NFT ID:
      </text>
      <rect x="273.8" y="370" width="185" height="25"  fill="rgba(255,255,255, 0.1)" rx="5">
      </rect>
      <text x="281" y="388" class="attr-title">
        #100000001
      </text>
      <text class="attr-title" x="273.8" y="426">
        Duration:
      </text>
      <rect x="273.8" y="435" width="185" height="25"  fill="rgba(255,255,255, 0.1)" rx="5">
      </rect>
      <text x="281" y="453" class="attr-title">
        12 months
      </text>
      <text fill="white">
        <textPath startOffset="-100%" href="#tPath2"> pathtest pathtest path
          <animate xmlns="http://www.w3.org/2000/svg" additive="sum" attributeName="startOffset" from="0%" to="100%" begin="0s" dur="15s" repeatCount="indefinite"/>
        </textPath>
        <textPath startOffset="0" href="#tPath2"> pathtest pathtest path
          <animate xmlns="http://www.w3.org/2000/svg" additive="sum" attributeName="startOffset" from="0%" to="100%" begin="0s" dur="15s" repeatCount="indefinite"/>
        </textPath>
      </text>
    </g>
    <g class="bottom">
      <text class="attr-title" x="42" y="564">Remaining Time</text>
      <rect x="353" y="543" width="106" height="25" fill="rgba(255,255,255,0.1)" rx="5">
      </rect>
      <text x="373" y="562" class="attr-title">22 Days</text>
      <rect fill="url(#barGradient)"
            x="22" y="580"
            width="450"
            height="56"
            id="parh"
            rx="28" stroke="#FFF"
            stroke-width="2">
      </rect>
      <path d="M 50 581 A 26 26, 1, 1, 0, 50 635 L 200 635 L 200 581" stroke="#FFF" fill="#FFF" stroke-width="1">
      </path>
    </g>
  </svg>

</template>

<script>
export default {
  name: "test-card"
}
</script>

<style scoped>
.title-text { font: bold 72px sans-serif; fill: white; }
.from { font: normal 30px sans-serif; fill: white; }
.type-text { font: normal 18.3px sans-serif; fill: white; }
.attr-title { font: normal 16.9px sans-serif; fill: white; }
svg {
  perspective: 1000px;
  transform-style: preserve-3d;
  backface-visibility: visible;
}
#item1 {
  animation: item1 3s infinite linear;
  transform-origin: 50%;
  transform-style: preserve-3d;
  backface-visibility: visible;
}
@keyframes item1 {
  0% {
    transform: rotateY(0);
  }
  50% {
    transform: rotateY(180deg);
  }
  0% {
    transform: rotateY(360deg);
  }
}
</style>
