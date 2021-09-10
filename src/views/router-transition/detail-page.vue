<template>
  <div class="detail-container d-flex flex-column align-items-center justify-content-center">
    <b-button @click="tapBack" style="margin-bottom: 200px">Back</b-button>
    <div class="img-card" v-shared-element:[`element-${index}`]>
      <img :src="images[(index - 1)%5]" alt="img">
    </div>
  </div>
</template>

<script>
import img1 from '@/assets/img/1.jpg';
import img2 from '@/assets/img/2.jpg';
import img3 from '@/assets/img/3.jpg';
import img4 from '@/assets/img/4.jpg';
import img5 from '@/assets/img/5.jpg';

export default {
  name: "detail-page",
  props: {
    index: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      images: [
        img1,
        img2,
        img3,
        img4,
        img5,
      ],
      src: '',
    }
  },
  methods: {
    tapBack() {
      this.$router.back();
    }
  },
  mounted() {
    this.src = this.images[(this.index - 1)%5];
  }
}
</script>

<style scoped lang="scss">

.detail-container {
  height: 100vh;
  background: blue;
}

.img-card {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  border-radius: 20px;
  width: 400px;
  img {
    width: 100%;
    height: 100%;
  }
}

.card {
  width: 300px;
}

</style>
