<template>
  <div id="svg-container">
    <AchimedeanSpiral class="item"></AchimedeanSpiral>
  </div>
</template>

<script>
import AchimedeanSpiral from "@/views/svgs/AchimedeanSpiral";

export default {
  name: "Svgs",
  components: { AchimedeanSpiral}
}
</script>

<style scoped lang="scss">

#svg-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  background: #EEEEEE;
  padding: 24px;
  .item {
    width: 100%;
    height: 400px;
  }
}

</style>
