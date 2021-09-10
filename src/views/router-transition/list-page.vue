<template>
  <div class="list-container">
    <div v-for="i in 10" :key="i" @click="tapItem(i)">
      <div class="img-card" v-shared-element:[`element-${i}`]>
        <img :src="images[(i - 1)%5]" alt="img">
      </div>
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
  name: "ListPage",
  data() {
    return {
      images: [
        img1,
        img2,
        img3,
        img4,
        img5,
      ]
    }
  },
  methods: {
    tapItem(index) {
      this.$router.push('/router-transition/detail/' + index)
    }
  }
}
</script>

<style scoped lang="scss">

.list-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
}

.img-card {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  border-radius: 20px;
  img {
    width: 100%;
    height: 100%;
  }
}

.card {
  width: 300px;
}

</style>
