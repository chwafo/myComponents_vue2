<template>
  <div>
    <barrage
      :canvasDisplayWidth="400"
      :canvasDisplayHeight="300"
      :circleLoop="true"
      :channels="4"
      :speed="5"
      :barrageGap="20"
      ref="barrage"
    />
    <button @click="handleStart">开始</button>
    <button @click="handleStop">停止</button>
  </div>
</template>

<script>
import barrage from "../../../components/barrage.vue";

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
      for (let i = 0; i < 6; i++) {
        arr.push({
          id: i,
          count: 10,
          content: "啦啦啦啦" + i,
          color: "#fff",
          bgColor: "#000",
          borderColor: "yellow",
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
    }
  },
  mounted() {
    this.$refs.barrage && (this.$refs.barrage.setBarrageList(this.getBarrageList()));
  }
};
</script>

<style lang="css" scoped>
</style>
