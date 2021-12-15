<template>
  <div class="demo-container">
    <div class="bg-content">
      <p style="color: white;">外面那人说道：“七姊，是你到了么？五哥屋中有个怪人，居然自称安禄山。”一个女子声音道：“只大哥还没到。二哥、三哥、四哥、六哥、八弟，大家一齐现身吧！”
        她一句话甫毕，大门外突然
        大放光明，一团奇异的亮光裹着五男一女。光亮中一个黑须老者大声道：“老五，还不给我快滚出来。”他右手中拿着方方的一块木板。那女子是个中年美妇。其余四人中两个是儒生打扮，一人似是个木匠，手持短斧，背负长锯。另一个却青面獠牙，红发绿须，形状可怕之极，直是个妖怪，身穿一件亮光闪闪的锦袍。
        邓百川一凝神间，已看出这人是脸上用油彩绘了脸谱，并非真的生有异相，他扮得便如戏台上唱戏的伶人一
        般，适才既扮唐明皇又扮梅妃的，自然便是此君了，当下朗声道：“诸位尊姓大名，在下姑苏慕容氏门下邓百川。”</p>
    </div>
    <div class="demo-bg">
      <div class="path-item">

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ClipPathShadow"
}
</script>

<style scoped lang="scss">
.demo-container {
  width: 600px;
  height: 600px;
  position: relative;
  .bg-content {
    margin: 100px;
    width: 400px;
    height: 400px;
    background: #4444dd;
  }
  .demo-bg {
    position: absolute;
    top: 0;
    left: 100px;
    filter: drop-shadow(10px 10px 20px #4444dd);
    .path-item {
      width: 400px;
      height: 400px;
      clip-path: circle(10% at 50% 50%);
      background: #4444dd;
      opacity: 1;
      animation: pathAnimation 2s linear infinite;
    }
  }
}

@keyframes pathAnimation {
  0% {
    clip-path: circle(10% at 53% 47%)
  }
  100% {
    clip-path: circle(100% at 53% 47%)
  }
}

</style>
