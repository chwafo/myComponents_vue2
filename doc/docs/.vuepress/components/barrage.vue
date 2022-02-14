<template>
  <div>
    <barrage
      :circleLoop="true"
      :speed="2"
      :barrageGap="20"
      :channelsDelay="[100, 0, 200, 300]"
      :borderWidth="2"
      ref="barrage"
      @doLike="handleDoLike"
      class="barrageExample"
    />
    <button @click="handleStart">开始</button>
    <button @click="handleStop">停止</button>
  </div>
</template>

<script>
import barrage from "../../../../components/barrage/index.js";

export default {
  name: "Barrage",
  components: {
    barrage,
  },
  data() {
    return {
      barrageList: [],
    };
  },
  methods: {
    getBarrageList() {
      let arr = [];
      for (let i = 0; i < 4; i++) {
        arr.push({
          id: i,
          count: 10,
          content: "啦啦啦啦" + i,
          color: "#fff",
          bgColor: "#000",
          borderColor: "yellow",
          icon: require('../../../../assets/img/icon_hot.png'),
          iconR: 10,
        });
      }

      return arr;
    },
    handleStart() {
      this.$refs.barrage && this.$refs.barrage.start();
      console.log(this.barrageList);
    },
    handleStop() {
      this.$refs.barrage && this.$refs.barrage.stop();
    },
    handleDoLike(barrage) {
      this.handleStop();
      console.log(barrage, barrage.id);
    },
  },
  mounted() {
    this.$refs.barrage && (this.$refs.barrage.setBarrageList(this.getBarrageList()));
  }
};
</script>

<style lang="css" scoped>
.barrageExample {
  border: 1px solid;
  height: 400px;
  width: 300px;
}
</style>
