---
  title: 弹幕
---
# 示例
<barrage />

# 用法
``` html
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
```

``` js
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
      for (let i = 0; i < 4; i++) {
        arr.push({
          id: i,
          count: 10,
          content: "啦啦啦啦" + i,
          color: "#fff",
          bgColor: "#000",
          borderColor: "yellow",
          icon: require('../../../assets/img/icon_hot.png'),
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
```

# 参数
| 参数                |                                说明                                |     类型 | 可选值 |                         默认值 |
| ------------------- | :----------------------------------------------------------------: | -------: | -----: | -----------------------------: |
| speed               |                      弹幕单位事件内移动的距离                      |   number |        |                              4 |
| scale               |                            画布缩放比例                            |   number |        |                              2 |
| paddingTop          |                           画布的上内边距                           |   number |        |                             10 |
| loop                |                              是否循环                              |  boolean |        |                           true |
| linearGradient      |                 弹幕的渐变背景色，优先于background                 |   object |        | {startColor: '', endColor: ''} |
| iconTextDistance    |            弹幕图标和文本之间的间距，弹幕有图标时才生效            |   number |        |                              2 |
| iconR               |                        弹幕的图标的显示半径                        |   number |        |                             10 |
| fontSize            |                             弹幕的字号                             |   number |        |                             18 |
| circleLoop          |         弹幕循环时，是否首位相接（loop的值为true时才生效）         |  boolean |        |                          false |
| channelsDelay       |                          弹道启动延迟距离                          | [number] |        |                             [] |
| channels            | 弹道个数(弹道个数超过屏幕高度可显示的最大弹道数时，会取最大弹道数) |   number |        |                              1 |
| channelGap          |                           弹道之间的距离                           |   number |        |                             20 |
| canvasDisplayWidth  |             画布的宽（为0时，画布宽取父级盒子的宽度）              |   number |        |                              0 |
| canvasDisplayHeight |             画布的高（为0时，画布高取父级盒子的高度）              |   number |        |                              0 |
| borderWidth         |                           弹幕边框的宽度                           |   number |        |                              1 |
| borderColor         |              弹幕边框的颜色,(如果有值，则会显示边框)               |   string |        |                             "" |
| barrageHeight       |                              弹幕高度                              |   number |        |                             34 |
| barrageGap          |                  同一弹道中，弹幕和弹幕之间的距离                  |   number |        |                             10 |
| background          |                            弹幕的背景色                            |   string |        |                             "" |
|                     |                                                                    |          |        |                                |

# 方法
|                 方法名 |                                                                    说明 |                参数 |
| ---------------------: | ----------------------------------------------------------------------: | ------------------: |
|         setBarrageList | 设置弹幕列表，[单个弹幕对象的属性](./barrage.html#单个弹幕对象的属性)见下表 | [{id: 1, count: 9}] |
|                  start |                                                            弹幕开始滚动 |                     |
|                   stop |                                                            弹幕暂停滚动 |                     |
| modifyBarrageCountById |                                                      根据弹幕id修改弹幕 |   {id: 1,count: 10} |

# 单个弹幕对象的属性
|      属性名 |                                                         说明 |   type |           示例 |
| ----------: | -----------------------------------------------------------: | -----: | -------------: |
|          id |                                       唯一标识，请保证唯一性 | number |                |
|        icon |                                                     弹幕图标 |  image |                |
|     content |                                                     弹幕内容 | string | “我是一条弹幕” |
|       iconR | 弹幕的图标的显示半径，优先于[参数](./barrage.html#参数)中的iconR | number |                |
|       color |                                                 弹幕字体颜色 |  color |         '#fff' |
|     bgColor |                                                   弹幕背景色 |  color |         '#000' |
| borderColor |                                                 弹幕边框颜色 |  color |       'yellow' |
|       count |                                                     弹幕计数 | number |              0 |
|  countColor |                                               弹幕计数的颜色 |  color |         '#fff' |
