<template>
  <div class="lasyList_example_container">
    <lasyList
      :search="search"
      :pageSize="pageSize"
      @itemClick="handleItemClick"
    >
      <div slot-scope="scope" class="content">
        {{ scope.item.text }}
      </div>
    </lasyList>
  </div>
</template>

<script>
import lasyList from "../../../components/lazyList.vue";
export default {
  components: {
    lasyList,
  },
  data() {
    return {
      pageSize: 15,
      total: 200,
    };
  },
  methods: {
    async search({ pageSize, pageNum }) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          const list = [];
          for (let i = 1; i <= pageSize; i++) {
            if (this.total < (pageNum - 1) * pageSize + i) {
              break;
            }
            list.push({
              text: (pageNum - 1) * pageSize + i,
              id: (pageNum - 1) * pageSize + i,
            });
          }
          resolve({
            list: list,
            total: this.total,
          });
        }, 2000);
      });
    },
    handleItemClick(item) {
      console.log(item);
    },
  },
};
</script>

<style>
.lasyList_example_container {
  width: 300px;
  height: 400px;
  border: 1px solid;
}

.content {
  height: 30px;
  border-bottom: 1px solid gray;
  text-align: center;
}
</style>