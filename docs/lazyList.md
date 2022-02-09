---
title: 下拉刷新列表
---

# 简介
在vant组件的基础上封装的手机端列表组件，可以下拉刷新和滚动加载。

# 示例

<lazyList />

::: warning
  如要演示下拉刷新，请将浏览器的模式调整为移动端
:::

# 用法
``` html
   <lasyList
      :search="search"
      :pageSize="pageSize"
      @itemClick="handleItemClick"
    >
      <div slot-scope="scope" class="content">
        {{ scope.item.text }}
      </div>
    </lasyList>
```

``` js
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
```




# 参数
| 参数         |                              说明                               |     类型 | 可选值 |         默认值 |
| ------------ | :-------------------------------------------------------------: | -------: | -----: | -------------: |
| pageSize     |                            分页大小                             |   number |        |              4 |
| search       | 查询方法，返回一个promise对象，值的结构为{total: 100, list: []} | Function |        |                |
| emptyText    |                      没有数据时的文字提示                       |   string |        | 暂时没有内容哦 |
| finishedText |                   分页数据加载完时的文字提示                    |   string |        |     没有更多了 |

# 插槽
|     名称 |                   说明 |
| -------: | ---------------------: |
| 默认插槽 |     一条数据的数据结构 |
|    empty | 没有数据时要显示的内容 |

# 事件
|  事件名称 |                 说明 |     回调参数 |
| --------: | -------------------: | -----------: |
| itemClick | 点击一条数据时的事件 | 被点击的数据 |