<template>
  <div class="vertical-card">
    <div class="pic-container">
      <img :src="src" alt="pic">
    </div>
  </div>
</template>

<script>
export default {
  name: "VerticalCard",
  props: {
    src: {
      type: String,
      default: '',
    }
  }
}
</script>

<style scoped lang="scss">

.vertical-card {
  margin: 20px;
  .pic-container {
    img {
      max-width: 400px;
      object-fit: contain;
    }
  }
}

</style>
