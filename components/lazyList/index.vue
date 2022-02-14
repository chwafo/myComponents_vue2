<template>
  <van-pull-refresh
    v-model="refreshing"
    @refresh="onRefresh"
    class="lazyList_wrap"
  >
    <van-list
      class="lazyList_list"
      :loading="loading"
      :finished="finished"
      :finished-text="finishedText"
      @load="onLoad"
      @click.native="handleItemClick"
      :class="{ noFinishedText: list && list.length === 0 }"
    >
      <div
        v-for="(item, index) in list"
        :key="index"
        :data-index="index"
        class="lazy_list_item"
      >
        <slot :item="item" :data-index="index"></slot>
      </div>
    </van-list>
    <div class="lazyList_empty" v-if="!loading && list && list.length === 0">
      <slot name="empty">
        <img src="../../assets/img/nothing.png" />
        <div class="emptyText">{{ emptyText }}</div>
      </slot>
    </div>
  </van-pull-refresh>
</template>

<script>
import Vue from "vue";
import "vant/lib/list/style";
import "vant/lib/pull-refresh/style";
import { List, PullRefresh } from "vant";
Vue.use(List);
Vue.use(PullRefresh);

import * as common from "../../assets/utils/common.js";

export default {
  name: "lazyList",
  props: {
    pageSize: {
      type: [Number, String],
      default: "4",
    },
    search: {
      type: Function,
      required: true,
      default({ pageNum, pageSize }) {
        return {
          list: [],
          total: 10,
        };
      },
    },
    emptyText: {
      type: String,
      default: "暂时没有内容哦",
    },
    finishedText: {
      type: String,
      default: "没有更多了",
    },
  },
  data() {
    return {
      pageNum: 1,
      list: [],
      loading: false,
      refreshing: false,
      finished: false,
      searchId: 0,
    };
  },
  methods: {
    async doSearch() {
      this.loading = true;
      const searchId = ++this.searchId;
      const data = {
        pageNum: `${this.pageNum}`,
        pageSize: `${this.pageSize}`,
      };
      try {
        const result = await this.search(data);
        if (!Array.isArray(result.list))
          throw new Error("list should be an array");
        if (`${Number.parseInt(result.total)}` !== `${result.total}`)
          throw new Error("total should be a number");

        if (searchId !== this.searchId) {
          return;
        }

        if (this.refreshing) {
          this.list = [];
          this.finished = false;
        }

        const { list, total } = result;
        this.list.push(...list);
        this.pageNum++;
        if (this.list.length >= total) {
          this.finished = true;
        }
      } catch (e) {
        // alert(e);
        this.finished = true;
      }
      this.loading = false;
      this.refreshing = false;
    },
    onRefresh() {
      this.loading = true;
      this.pageNum = 1;
      this.doSearch();
    },
    onLoad() {
      this.doSearch();
    },
    handleItemClick(e) {
      const ele = common.getDelegateEle(e, "div.lazy_list_item")[0];
      if (ele) {
        this.$emit("itemClick", this.list[ele.dataset.index]);
      }
    },
  },
};
</script>

<style>
.lazyList_wrap {
  height: 100%;
}

.lazyList_list {
  background: #fafafa;
}

div.van-pull-refresh {
  flex: 1;
  background: #fafafa;
  overflow-y: scroll;
}

.van-pull-refresh__head {
  pointer-events: none;
}

.lazyList_empty {
  text-align: center;
  margin-top: 50%;
  transform: translateY(-50%);
}

.lazyList_empty img {
  width: 60%;
}

.lazyList_empty .emptyText {
  font-size: 0.14rem;
  margin-top: 0.16rem;
  color: #697184;
}

.noFinishedText .van-list__finished-text {
  display: none;
}
</style>