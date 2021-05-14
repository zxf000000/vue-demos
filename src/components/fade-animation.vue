<template>
<div class="fade-container">
  <div class="text-container">
    <span :class="{display: status0 === 1, disappear: status0 === 2}">套学的便是“韦陀掌”。般若掌却是最精奥的掌法，自韦陀掌学到般若掌，循序而进，通常要花三四十年功夫。般若掌既是少林七十二绝技之一，练将下去，永无穷尽，掌力越练越强，招数愈练愈纯，那是学无止境。自少林创派以来，以韦陀掌和般若掌过招，实是从所未有。两者深浅精粗，正是少林武功的两个极端，会般若掌的前辈僧人，决不致和只会韦陀掌的本门弟子动手，就算师徒之间喂招学艺，师父既然使到般若掌，做弟子的至少也要以达摩掌、伏虎掌、如来千手法等等掌法应接。</span>
    <span :class="{display: status1 === 1, disappear: status1 === 2}">虚竹眼见对方掌到，斜身略避，双掌推出，仍是韦陀掌中一招，叫做“山门护法”，招式平平，所含力道却甚是雄浑。鸠摩智身形流转，袖里乾坤，无相劫指点向对方。虚竹斜身闪避，鸠摩智早料到他闪避的方位，大金刚拳一拳早出，砰的一声，正中他肩头。虚竹踉踉跄跄的退了两步。鸠摩智哈哈一笑，说道：“小师父服了么？”料想这一掌开碑裂石，已将他肩骨击成碎片。哪知虚竹有“北冥真气”护体，只感到肩头一阵疼痛，便即猱身复上，双掌自左向右划下，这一招叫做“恒河入海”，双掌带着浩浩真气，当真便如洪水滔滔、东流赴海一般。鸠摩智见他吃了自己一拳恍若不觉，两掌击到，力道又如此沉厚，不由得暗自惊异，出掌</span>
    <span :class="{display: status2 === 1, disappear: status2 === 2}">二腿如影随形，紧跟而至，第二腿随即自影而变为形，而第三腿复如影子，跟随踢到，直踢到第六腿，虚竹才来得及仰身飘开。鸠摩智不容他喘息，连出两指，嗤嗤有声，却是“多罗指法”。虚竹坐马拉弓，还击一拳，已是“罗汉拳”中的一招“黑虎偷心”。这一招拳法粗浅之极，但附以小无相功后，竟将两下穿金破石的多罗指指力消于中途。</span>
  </div>
  <b-button-group>
    <b-button @click="tap(0)">111111</b-button>
    <b-button @click="tap(1)">222222</b-button>
    <b-button @click="tap(2)">333333</b-button>
  </b-button-group>
</div>
</template>

<script>
export default {
  name: "fade-animation",
  data() {
    return {
      // 0 代表未显示, 1 代表显示在中间 2 代表向上消失
      status0: 0,
      status1: 0,
      status2: 0,
      lastIndex: -1,
    }
  },
  methods: {
    tap(index) {
      if (this.lastIndex === index) {
        return;
      }
      switch(this.lastIndex) {
        case 0:
          this.status0 = 2;
          break;
        case 1:
          this.status1 = 2;
          break;
        case 2:
          this.status2 = 2;
          break;
      }
      setTimeout(() => {
        switch(this.lastIndex) {
          case 0:
            this.status0 = 0;
            break;
          case 1:
            this.status1 = 0;
            break;
          case 2:
            this.status2 = 0;
            break;
        }
      }, 500);
      setTimeout(() => {
        switch (index) {
          case 0:
            this.status0 = 1;
            break;
          case 1:
            this.status1 = 1;
            break;
          case 2:
            this.status2 = 1;
            break;
        }
        this.lastIndex = index;
      }, 500);
    }
  }
}
</script>

<style scoped lang="scss">
.fade-container {
  margin: 100px;
  width: 800px;
  height: 800px;
  background: red;
  .text-container {
    width: 100%;
    height: 500px;
    background: blueviolet;
    position: relative;
    span {
      position: absolute;
      left: 0;
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      top: 100px;
      opacity: 0;
      transition: all 0.5s ease-in-out;
      &.display {
        opacity: 1;
        top: 0;
      }
      &.disappear {
        opacity: 0;
        top: -100px;
      }
    }
  }
}
</style>
