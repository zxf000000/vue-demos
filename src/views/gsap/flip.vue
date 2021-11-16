<template>
  <v-container>
    <v-row>
      <v-col cols="12" class="d-flex align-center container1">
        <v-card
            class="small-card"
            :id="'smallCard' + item"
            v-for="item in 3" :key="item" @click="tapCard(item)" ref="card">
        </v-card>
      </v-col>
    </v-row>
    <v-card class="big-card" ref="bigCard">

    </v-card>
  </v-container>
</template>

<script>
import gsap from "gsap";
import Flip from "gsap";

export default {
  name: "flip",
  methods: {
    initGsap() {
      gsap.registerPlugin(Flip);
    },
    tapCard(index) {
      const id = 'smallCard' + index;
      const state = Flip.getState(id + ' .big-card');
      const smallCard = this.$refs.card[index - 1].$el;
      const bigCard = this.$refs.bigCard.$el;
      smallCard.style.display = 'none';
      bigCard.style.display = 'block';
      Flip.from(state, {
        duration: 2,
        fade: true,
        absolute: true,
        ease: 'power1.inOut',
      })
    }
  },
  data() {
    return {
      states: [
        0,
      ]
    };
  },
  mounted() {
  }
}
</script>

<style scoped lang="scss">

.container1 {
  grid-gap: 20px;
}

.small-card {
  width: 100px;
  height: 200px;
  &:nth-child(1) {
    background: yellow;
  }
  &:nth-child(2) {
    background: blueviolet;
  }
  &:nth-child(3) {
    background: rebeccapurple;
  }
}
.big-card {
  margin: 20px 0 0 0;
  background: cornflowerblue;
  width: 400px;
  height: 400px;
  display: none;
}
</style>
