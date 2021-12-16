<template>
  <v-container class="d-flex flex-column align-start">
    Origin Image
    <img ref="originImage" :src="testImg" @load="canTap = true" />
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
      console.log(origin);
      const canvas = document.createElement('canvas');
      canvas.width = origin.height;
      canvas.height = origin.width;
      const context = canvas.getContext('2d');
      context.fillStyle = '#000';
      context.fillRect(0, 0, canvas.width, canvas.height);
      context.translate(canvas.width/2, canvas.height/2);
      context.rotate(Math.PI / 2 * 3);
      context.translate(-canvas.height / 2, -canvas.width / 2)
      context.drawImage(origin, 0, 0);
      this.resImage = canvas.toDataURL('image/png');
      console.log(this.resImage);
    },
  }
}
</script>

<style scoped>

</style>
