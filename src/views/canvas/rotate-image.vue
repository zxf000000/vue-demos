<template>
  <v-container class="d-flex flex-column align-start">
    Origin Image
    <img ref="originImage" :src="testImg" @load="tapRotate" />
    <v-btn @click="tapRotate" :disabled="!canTap">
      Rotate
    </v-btn>
    Result image
    <v-img :src="resImage">
    </v-img>
  </v-container>
</template>

<script>
import testImg from '@/assets/test.jpeg';

export default {
  name: "rotate-image",
  data() {
    return {
      testImg,
      resImage: null,
      canTap: false,
    }
  },
  methods: {
    tapRotate() {
      const origin = this.$refs.originImage;
      const canvas = document.createElement('canvas');
      const context = canvas.getContext('2d');
      context.fillStyle = '#000';
      canvas.width= origin.height;
      canvas.height = origin.width;
      const angle = Math.PI / 4
      context.translate(canvas.width / 2, canvas.height / 2);
      context.rotate(angle);
      context.translate(-canvas.height/2, -canvas.width/2)
      context.drawImage(origin, 0, 0);
      this.resImage = canvas.toDataURL('image/png');
      console.log(this.resImage);
    },
  }
}
</script>

<style scoped>

</style>
