<template>
  <div class="z_barrage-container" ref="container">
    <canvas
      ref="canvasMeasure"
      :width="canvasRealWidth"
      :height="canvasRealHeight"
      style="display: none"
    />
    <div class="z_container" :style="{ height: canvasDisplayHeight + 'px' }">
      <canvas
        id="canvas"
        ref="canvas"
        class="z_barrage"
        :width="canvasRealWidth"
        :height="canvasRealHeight"
        :style="{
          width: canvasDisplayWidth + 'px',
          height: canvasDisplayHeight + 'px',
        }"
      />
    </div>
  </div>
</template>

<script>
const timesIconUTF8 = "\u00D7"; // 乘号

export default {
  name: "Barrage",
  props: {
    scale: {
      type: Number,
      default: 2,
    }, // 画布实际尺寸 ： 画布显示尺寸
    canvasDisplayWidth: {
      type: Number,
      default: 0,
    },
    canvasDisplayHeight: {
      type: Number,
      default: 0,
    },
    speed: {
      type: Number,
      default: 4,
    },
    loop: {
      type: Boolean,
      default: true,
    },
    channels: {
      type: Number,
      default: 0,
    },
    channelsDelay: {
      type: Array,
      default() {
        return [];
      },
    },
    circleLoop: {
      type: Boolean,
      defalut: false,
    },
    barrageHeight: {
      type: Number,
      default: 34,
    }, // 弹幕高度
    borderColor: {
      type: String,
      default: "",
    },
    background: {
      type: String,
      default: "",
    },
    linearGradient: {
      type: Object,
      default: () => {
        return {
          startColor: "",
          endColor: "",
        };
      },
    },
    fontSize: {
      type: [Number],
      default: 18,
    }, // 弹幕字号
    channelGap: {
      type: [Number],
      default: 20,
    }, // 轨道之间的间距
    paddingTop: {
      type: [Number],
      default: 10,
    }, // 画布的上内边距
    borderWidth: {
      type: [Number],
      default: 1,
    }, // 弹幕的边框宽度
    iconTextDistance: {
      type: [Number],
      default: 2,
    }, // icon与文本的距离
    barrageGap: {
      type: Number,
      default: 10,
    },
  },
  data() {
    return {
      ctx: null,
      ctx1: null,
      barrageList: [],
      newBarrageArray: [], // 新增弹幕之后的总弹幕
      barrageArray: [],
      barrageQueue: [],
      containerWidth: 0,
      containerHeight: 0,
      channelsArray: [],
      barrageChannels: 1,
      running: false,
    };
  },
  computed: {
    canvasRealWidth() {
      return (this.canvasDisplayWidth || this.containerWidth) * this.scale;
    },
    canvasRealHeight() {
      return (this.canvasDisplayHeight || this.containerHeight) * this.scale;
    },
    realChannelGap() {
      return this.channelGap * this.scale;
    },
    realPaddingTop() {
      return this.paddingTop * this.scale;
    },
    realBorderWidth() {
      return this.borderWidth * this.scale;
    },
    halfBorderWidth() {
      return this.realBorderWidth / 2;
    },
    realIconTextDistance() {
      return this.iconTextDistance * this.scale;
    },
    realBarrageHeight() {
      return this.barrageHeight * this.scale;
    },
    realBarrageGap() {
      return this.barrageGap * this.scale;
    },
    minChannelDelayIndex() {
      return this.channelsDelay.reduce((minIndex, nextValue, nextIndex) => {
        if (nextValue <= this.channelsDelay[minIndex]) {
          return nextIndex;
        }
        return minIndex;
      }, 0);
    },
    barrageInitX() {
      return this.canvasRealWidth + this.radius + this.realBarrageGap;
    },
    realFontSize() {
      return this.fontSize * this.scale;
    },
    font() {
      return `${this.realFontSize}px PingFangSC-Regular`;
    },
    diameter() {
      return this.realBarrageHeight;
    },
    radius() {
      return this.diameter / 2;
    },
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      this.containerWidth = this.$refs.container.innerWidth;
      this.containerHeight = this.$refs.container.innerHeight;
      const maxChannels = Math.floor(
        (this.canvasRealHeight - this.realPaddingTop) /
          (this.realBarrageHeight + this.realChannelGap)
      ); // 总高度对应的轨道
      this.barrageChannels = this.channels
        ? maxChannels < this.channels
          ? maxChannels
          : this.channels
        : maxChannels;
      this.ctx = this.$refs.canvas.getContext("2d");
      this.ctx1 = this.$refs.canvasMeasure.getContext("2d");
      this.barrageClickEvent();
    },
    setBarrageList(barrageList) {
      this.barrageList = barrageList;
      this.barrageQueue = JSON.parse(JSON.stringify(barrageList));
      this.newBarrageArray = JSON.parse(JSON.stringify(barrageList));
      this.initData();
    },
    measureText(text = "") {
      this.ctx1.font = this.font;
      return this.ctx1.measureText(text);
    },
    modifyBarrageCountById(barrage) {
      const { id } = barrage;
      let width, contentWidth;
      for (let index = 0; index < this.newBarrageArray.length; index++) {
        if (this.newBarrageArray[index].id === id) {
          this.newBarrageArray[index].count++;
          const barrageWidthInfo = this.calcBarrageWidth(
            this.newBarrageArray[index]
          );
          width = barrageWidthInfo.width;
          contentWidth = barrageWidthInfo.contentWidth;
          this.newBarrageArray[index].width = width;
          this.newBarrageArray[index].contentWidth = contentWidth;
          break;
        }
      }

      for (let index = 0; index < this.barrageArray.length; index++) {
        if (this.barrageArray[index].id === id) {
          this.barrageArray[index].width = width;
          this.barrageArray[index].contentWidth = contentWidth;
          this.barrageArray[index].count++;
          break;
        }
      }
      for (let i = 0; i < this.channelsArray.length; i++) {
        let innerBreaked = false;
        for (let j = 0; j < this.channelsArray[i].length; j++) {
          if (this.channelsArray[i][j].id === id) {
            this.channelsArray[i][j].width = width;
            this.channelsArray[i][j].contentWidth = contentWidth;
            this.channelsArray[i][j].count++;
            innerBreaked = true;
            break;
          }
        }
        if (innerBreaked) {
          break;
        }
      }
    },
    calcBarrageWidth(barrage) {
      const contentWidth = this.measureText(barrage.content).width;

      let countWidth = 0;
      if (barrage.count) {
        countWidth = this.measureText(
          ` ${timesIconUTF8}${barrage.count}`
        ).width;
      }

      const width =
        contentWidth +
        (barrage.icon ? barrage.iconR * 2 + this.realIconTextDistance : 0) +
        countWidth;
      console.log("contentWidth", contentWidth);
      return {
        width,
        contentWidth,
      };
    },
    calcBarrageInfo(obj) {
      let content = this.dealStr(obj.content);
      let img = null;
      if (obj.icon) {
        img = new Image();
        img.src = obj.icon;
      }

      return {
        ...obj,
        id: obj.id,
        content: content,
        x: this.barrageInitX,
        icon: obj.icon ? img : "",
        iconR: obj.iconR,
        ...this.calcBarrageWidth(obj),
        color: obj.color || "#FFFFFF",
        bgColor: obj.bgColor || "rgba(0,0,0,0.4)",
        borderColor: obj.borderColor,
        count: obj.count,
        countColor: obj.countColor,
      };
    },
    /**
     * 数据初始化
     */
    initData() {
      for (let i = 0; i < this.barrageQueue.length; i++) {
        this.barrageArray.push(this.calcBarrageInfo(this.barrageQueue[i]));
      }
      this.initChannel();
    },
    /**
     * 初始化轨道数据
     */
    initChannel() {
      for (let i = 0; i < this.barrageChannels; i++) {
        let item = this.barrageArray.shift();
        if (item) {
          this.channelsArray[i] = [item];
        } else {
          this.channelsArray[i] = [];
        }
      }
    },
    start() {
      if (!this.running) {
        this.running = true;
        window.requestAnimationFrame(this.render);
      }
    },
    stop() {
      this.running = false;
    },
    /**
     * 渲染
     */
    render() {
      if (this.running) {
        this.ctx.clearRect(0, 0, this.canvasRealWidth, this.canvasRealHeight);
        this.ctx.font = this.font;
        this.draw();
        window.requestAnimationFrame(this.render);
      }
    },
    getChannelDelay(channelIndex) {
      return this.channelsDelay[channelIndex] || 0;
    },
    canStart(channelIndex) {
      const channelDelay = this.getChannelDelay(channelIndex);
      const minChannelDelayIndex = this.minChannelDelayIndex;
      if (minChannelDelayIndex === channelIndex) {
        return true;
      } else {
        if (this.channelsArray[minChannelDelayIndex][0]) {
          const minChannelX = this.channelsArray[minChannelDelayIndex][0].x;
          const nowChannelX = this.channelsArray[channelIndex][0].x;
          if (nowChannelX < this.barrageInitX) {
            // 已经启动，则不作该计算
            return true;
          } else if (nowChannelX - minChannelX >= channelDelay) {
            return true;
          } else {
            return false;
          }
        } else {
          return true;
        }
      }
    },
    draw() {
      for (let i = 0; i < this.channelsArray.length; i++) {
        const nowChannel = this.channelsArray[i];

        // 处理超出可视区域的弹幕
        let firstBarrage = nowChannel[0];
        while (firstBarrage && this.isBarrageOutOfScreen(firstBarrage)) {
          nowChannel.shift(); // 移除弹幕
          if (this.loop) {
            if (this.circleLoop) {
              firstBarrage.x = this.barrageInitX;
              this.barrageArray.push(firstBarrage);
            } else {
              if (
                this.barrageArray.length === 0 &&
                this.isChannelsArrayEmpty()
              ) {
                this.barrageQueue = [];
                this.barrageQueue = JSON.parse(
                  JSON.stringify(this.newBarrageArray)
                );
                this.initData();
                return;
              }
            }
          }

          firstBarrage = nowChannel[0];
        }

        // 弹幕插入时机判断
        const lastBarrage = nowChannel[nowChannel.length - 1]; // 该频道的最后一个弹幕
        if (lastBarrage) {
          if (
            this.barrageArray.length !== 0 &&
            lastBarrage.x - this.speed <=
              this.canvasRealWidth - lastBarrage.width - this.radius
          ) {
            let newBarrage = this.barrageArray.shift();
            newBarrage.x =
              lastBarrage.x +
              lastBarrage.width +
              this.diameter +
              this.realBarrageGap;
            if(this.barrageInitX > newBarrage.x) {
              newBarrage.x = this.barrageInitX;
            }
            nowChannel.push(newBarrage);
          }
        } else {
          let newBarrage = this.barrageArray.shift();
          if (newBarrage) {
            nowChannel.push(newBarrage);
          }
        }

        // 绘制弹幕
        for (let j = 0; j < nowChannel.length; j++) {
          try {
            if (j === 0 && !this.canStart(i)) {
              break;
            }

            const barrage = nowChannel[j];
            // 弹幕显示
            this.drawRoundRect(
              this.ctx,
              barrage.bgColor,
              barrage.x - this.radius - this.halfBorderWidth, // x
              i * (this.realBarrageHeight + this.realChannelGap) -
                this.halfBorderWidth +
                this.realPaddingTop, // y
              barrage.width + this.diameter + this.halfBorderWidth * 2, // width
              this.realBarrageHeight + this.halfBorderWidth * 2, // height
              this.radius + this.halfBorderWidth // radius
            );

            if (barrage.borderColor || this.borderColor) {
              this.drawRoundRectBorder(
                this.ctx,
                barrage.x - this.radius, // x
                this.realPaddingTop +
                  i * (this.realBarrageHeight + this.realChannelGap), // y
                barrage.width + this.diameter, // width
                this.realBarrageHeight, // height
                this.radius, // radius
                barrage.borderColor || this.borderColor
              );
            }

            this.ctx.fillStyle = `${barrage.color}`;
            this.ctx.fillText(
              barrage.content,
              barrage.x +
                (barrage.icon
                  ? barrage.iconR * 2 + this.realIconTextDistance
                  : 0),
              i * (this.realBarrageHeight + this.realChannelGap) +
                this.realPaddingTop +
                (this.realBarrageHeight - this.realFontSize) / 2 +
                (this.realFontSize / 6) * 5
            );
            this.ctx.fillStyle = `${barrage.countColor || barrage.color}`;
            if (barrage.count) {
              this.ctx.fillText(
                ` ${timesIconUTF8}${barrage.count}`,
                barrage.x +
                  (barrage.icon
                    ? barrage.iconR * 2 + this.realIconTextDistance
                    : 0) +
                  barrage.contentWidth,
                i * (this.realBarrageHeight + this.realChannelGap) +
                  this.realPaddingTop +
                  (this.realBarrageHeight - this.realFontSize) / 2 +
                  (this.realFontSize / 6) * 5
              );
            }
            if (barrage.icon) {
              this.circleImg(
                this.ctx,
                barrage.icon,
                barrage.x - barrage.iconR, // x
                i * (this.realBarrageHeight + this.realChannelGap) +
                  this.realPaddingTop +
                  this.realBarrageHeight / 2, // y
                barrage.iconR // iconR
              );
            }

            barrage.x -= this.speed;
            // }
          } catch (e) {
            console.log(e);
          }
        }
      }
    },
    /**
     * 重置数据
     */
    add(obj) {
      const item = this.calcBarrageInfo(obj);
      let originItem = { ...item };
      if (this.barrageArray.length === 0) {
        // 剩余弹幕数为0
        this.newBarrageArray.unshift(originItem);
      } else {
        this.barrageArray.unshift(item);
        let insertIndex = this.barrageList.length - this.barrageArray.length;
        this.newBarrageArray.splice(insertIndex, 0, originItem);
      }
    },
    /**
     * 弹幕点击事件
     */
    barrageClickEvent() {
      document.getElementById("canvas").addEventListener(
        "click",
        (e) => {
          const p = this.getEventPosition(e);
          let channelIndex = Math.floor(
            p.y / (this.realBarrageHeight + this.realFontSize)
          );
          const tempArray = JSON.parse(
            JSON.stringify(this.channelsArray[channelIndex])
          );
          for (let i = 0; i < tempArray.length; i++) {
            let channelItemArray = tempArray[i];
            if (
              p.x > channelItemArray.x &&
              p.x < channelItemArray.x + channelItemArray.width
            ) {
              if (channelItemArray.id) {
                this.$emit("doLike", channelItemArray.id);
              }
            }
          }
        },
        false
      );
    },
    /**
     * 获取点击位置
     */
    getEventPosition(ev) {
      let x, y;
      if (ev.layerX || ev.layerX === 0) {
        x = ev.layerX;
        y = ev.layerY;
      } else if (ev.offsetX || ev.offsetX === 0) {
        x = ev.offsetX;
        y = ev.offsetY;
      }
      return { x: 2 * x, y: 2 * y };
    },
    // 判断某个弹幕是否已经滚出了屏幕
    isBarrageOutOfScreen(barrage) {
      return barrage.x <= -(barrage.width + this.diameter);
    },
    isChannelsArrayEmpty() {
      let arr = this.channelsArray.reduce((a, b) => a.concat(b));
      return arr.length === 0;
    },
    /**
     * 判断所有的弹幕是否滚动完成
     * @params arr
     */
    checkBarrageStatus(arr) {
      for (let i = 0; i < arr.length; i++) {
        if (arr[i].x > -arr[i].width) return false;
      }
      return true;
    },
    /**
     * 处理字符
     */
    dealStr(str) {
      return str.length > 50 ? `${str.substring(0, 50)}...` : str;
    },
    /**
     * 获取随机颜色
     */
    getColor() {
      return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    },
    /**
     * 裁剪图片
     * @param ctx
     * @param img
     * @param x
     * @param y
     * @param r
     */
    circleImg(ctx, img, x, y, iconR) {
      ctx.save();
      const w = 2 * iconR;
      const h = w;
      ctx.beginPath();
      ctx.drawImage(img, x + iconR, y - iconR, w, h);
      ctx.restore();
      ctx.closePath();
    },
    /**
     * 绘制原始图片
     * @param ctx
     * @param img
     * @param x
     * @param y
     * @param width
     * @param height
     */
    originImg(ctx, img, x, y, width, height) {
      try {
        ctx.beginPath();
        ctx.drawImage(img, x, y, width, height);
        ctx.closePath();
      } catch (e) {
        console.log(e);
      }
    },
    /**
     * 绘画圆角矩形
     * @param context
     * @param bgColor
     * @param x
     * @param y
     * @param width
     * @param height
     * @param radius
     */
    drawRoundRect(context, bgColor, x, y, width, height, radius) {
      if (this.linearGradient.startColor && this.linearGradient.endColor) {
        let linearGrad = context.createLinearGradient(x, y, x, y + height);
        linearGrad.addColorStop(0, this.linearGradient.startColor);
        linearGrad.addColorStop(1, this.linearGradient.endColor);
        context.fillStyle = linearGrad || bgColor;
      } else {
        context.fillStyle = this.background || bgColor;
      }
      context.beginPath();
      context.arc(x + radius, y + radius, radius, Math.PI, (Math.PI * 3) / 2);
      context.lineTo(width - radius + x, y);
      context.arc(
        width - radius + x,
        radius + y,
        radius,
        (Math.PI * 3) / 2,
        Math.PI * 2
      );
      context.lineTo(width + x, height + y - radius);
      context.arc(
        width - radius + x,
        height - radius + y,
        radius,
        0,
        Math.PI / 2
      );
      context.lineTo(radius + x, height + y);
      context.arc(
        radius + x,
        height - radius + y,
        radius,
        Math.PI / 2,
        Math.PI
      );
      context.fill();
      context.closePath();
    },
    /**
     * 绘画圆角矩形
     * @param context
     * @param x
     * @param y
     * @param width
     * @param height
     * @param radius 半径
     */
    drawRoundRectBorder(context, x, y, width, height, radius, borderColor) {
      context.beginPath();
      context.lineWidth = this.realBorderWidth;
      context.strokeStyle = borderColor;
      context.arc(x + radius, y + radius, radius, Math.PI, (Math.PI * 3) / 2);
      context.lineTo(width - radius + x, y);
      context.arc(
        width - radius + x,
        radius + y,
        radius,
        (Math.PI * 3) / 2,
        Math.PI * 2
      );
      context.lineTo(width + x, height + y - radius);
      context.arc(
        width - radius + x,
        height - radius + y,
        radius,
        0,
        Math.PI / 2
      );
      context.lineTo(radius + x, height + y);
      context.arc(
        radius + x,
        height - radius + y,
        radius,
        Math.PI / 2,
        Math.PI
      );
      context.stroke();
      context.closePath();
    },
  },
};
</script>

<style lang="css" scoped>
.z_barrage-container {
  pointer-events: none;
  position: relative;
}
.z_container {
  width: 100%;
  overflow: hidden;
}
.z_barrage {
  position: absolute;
  top: 0;
  left: 0;
}
</style>
