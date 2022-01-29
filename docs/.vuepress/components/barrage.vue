<template>
  <div>
    <barrage :barrageList="barrageList" />
    <button @click="handleStart">开始</button>
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
      for (let i = 0; i < 10; i++) {
        arr.push({
          id: i,
          count: 10,
          content: "啦啦啦啦" + i,
          color: "#fff",
          bgColor: "#000",
        });
      }

      return arr;
    },
    handleStart() {
      this.barrageList = this.getBarrageList();
      console.log(this.barrageList)
    },
  },
};
</script>

<style lang="css" scoped>
</style>
