<template>
  <div class="z_barrage-container">
    <canvas
      ref="canvasContainer"
      :width="containerWidth"
      :height="containerHeight"
      style="display: none"
    />
    <div class="z_container" :style="{ height: containerHeight / 2 + 'px' }">
      <canvas
        id="canvas"
        ref="canvas"
        class="z_barrage"
        :width="containerWidth"
        :height="containerHeight"
        :style="{
          width: containerWidth / 2 + 'px',
          height: containerHeight / 2 + 'px',
        }"
      />
    </div>
  </div>
</template>

<script>
const timesIconUTF8 = "\u00D7";

export default {
  name: "Barrage",
  props: {
    barrageList: {
      type: Array,
      default: () => [],
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
      default: 2,
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
      default: 68,
    },
    screenPercent: {
      type: Number,
      default: 0.3,
    },
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
    },
    channelGap: {
      type: [Number],
      default: 40,
    },
    paddingTop: {
      type: [Number],
      default: 20,
    },
    borderWidth: {
      type: [Number],
      default: 2,
    },
    iconTextDistance: {
      type: [Number],
      default: 5,
    },
  },
  data() {
    return {
      newBarrageArray: [], // 新增弹幕之后的总弹幕
      barrageArray: [],
      barrageQueue: [],
      containerWidth: 0,
      containerHeight: 0,
      channelsArray: [],
      barrageChannels: 1,
    };
  },
  computed: {
    minChannelDelayIndex() {
      return this.channelsDelay.reduce((minIndex, nextValue, nextIndex) => {
        if (nextValue <= this.channelsDelay[minIndex]) {
          return nextIndex;
        }
        return minIndex;
      }, 0);
    },
    barrageInitX() {
      return this.containerWidth + this.barrageHeight;
    },
    innerFontSize() {
      return this.fontSize * 2;
    },
    font() {
      return `${this.innerFontSize}px PingFangSC-Regular`;
    },
    diameter() {
      return this.barrageHeight;
    },
    radius() {
      return this.diameter / 2;
    },
    halfBorderWidth() {
      return this.borderWidth / 2;
    },
  },
  watch: {
    barrageList: {
      handler(val) {
        if (val.length !== 0) {
          this.barrageQueue = JSON.parse(JSON.stringify(val));
          this.newBarrageArray = JSON.parse(JSON.stringify(val));
          this.initData();
          window.requestAnimationFrame(this.render);
        }
      },
      immediate: true,
    },
  },
  mounted() {
    this.containerWidth = document.body.clientWidth * 2;
    this.containerHeight =
      window.screen.height * this.screenPercent > 2 * this.barrageHeight
        ? window.screen.height * this.screenPercent
        : this.barrageHeight + this.innerFontSize; // 设定总高度
    const maxChannels = Math.floor(
      this.containerHeight / (this.barrageHeight + this.innerFontSize)
    ); // 总高度对应的轨道数
    this.barrageChannels = maxChannels < this.channels ? maxChannels : this.channels; 
    this.ctx = this.$refs.canvas.getContext("2d");
    this.ctx1 = this.$refs.canvasContainer.getContext("2d");
    this.barrageClickEvent();
  },
  methods: {
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
        contentWidth + (barrage.icon ? barrage.iconR * 2 + this.iconTextDistance : 0) + countWidth;
      return {
        width,
        contentWidth,
      };
    },
    calcBarrageInfo(obj) {
      let content = this.dealStr(obj.content);
      let img = null;
      let tagImg = null;
      if (obj.icon) {
        img = new Image();
        img.src = obj.icon;
      }
      if (obj.tagImage) {
        tagImg = new Image();
        tagImg.src = obj.tagImage;
      }

      return {
        ...obj,
        id: obj.id,
        content: content,
        x: this.barrageInitX,
        icon: obj.icon ? img : "",
        iconR: obj.iconR,
        tagImage: obj.tagImage ? tagImg : "",
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
    /**
     * 渲染
     */
    render() {
      this.ctx.clearRect(0, 0, this.containerWidth, this.containerHeight);
      this.ctx.font = this.font;
      this.draw();
      window.requestAnimationFrame(this.render);
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
    // 弹幕循环数据处理
    removeUnavailableBarragefromChannels() {
      for (let i = 0; i < this.channelsArray.length; i++) {
        const nowChannels = this.channelsArray[i];
        while (
          nowChannels[0] &&
          this.checkSingleBarrageStatus(nowChannels[0])
        ) {
          const nowBarrage = nowChannels.shift();
          if (this.circleLoop) {
            nowBarrage.x = this.barrageInitX;
            this.barrageArray.push(nowBarrage);
          }
        }
      }
    },
    draw() {
      for (let i = 0; i < this.channelsArray.length; i++) {
        if (this.channelsArray[i].length === 0) {
          let item = this.barrageArray.shift();
          if (item) {
            this.channelsArray[i].push(item);
          }
        }
        for (let j = 0; j < this.channelsArray[i].length; j++) {
          try {
            let barrage = this.channelsArray[i][j];
            if (j === 0 && !this.canStart(i)) {
              break;
            }

            barrage.x -= this.speed;

            if (barrage.x <= this.containerWidth + this.speed * 20) {
              // 弹幕显示
              this.drawRoundRect(
                this.ctx,
                barrage.bgColor,
                barrage.x - this.radius - this.halfBorderWidth, // x
                i * (this.barrageHeight + this.channelGap) - this.halfBorderWidth + this.paddingTop, // y
                barrage.width + this.diameter + this.halfBorderWidth * 2, // width
                this.barrageHeight + this.halfBorderWidth * 2, // height
                this.radius + this.halfBorderWidth, // radius
              );

              if (barrage.borderColor || this.borderColor) {
                this.drawRoundRectBorder(
                  this.ctx,
                  barrage.x - this.radius, // x
                  this.paddingTop + i * (this.barrageHeight + this.channelGap), // y
                  barrage.width + this.diameter, // width
                  this.barrageHeight, // height
                  this.radius, // radius
                  barrage.borderColor || this.borderColor
                );
              }

              this.ctx.fillStyle = `${barrage.color}`;
              this.ctx.fillText(
                barrage.content,
                barrage.x + (barrage.icon ? (barrage.iconR * 2 + this.iconTextDistance): 0),
                i * (this.barrageHeight + this.channelGap) + this.paddingTop + (this.barrageHeight - this.innerFontSize) / 2 + this.innerFontSize / 6 * 5,
              );
              this.ctx.fillStyle = `${barrage.countColor || barrage.color}`;
              if (barrage.count) {
                this.ctx.fillText(
                  ` ${timesIconUTF8}${barrage.count}`,
                  barrage.x +
                    (barrage.icon ? (barrage.iconR * 2 + this.iconTextDistance) : 0) +
                    barrage.contentWidth,
                    i * (this.barrageHeight + this.channelGap) + this.paddingTop + (this.barrageHeight - this.innerFontSize) / 2 + this.innerFontSize / 6 * 5,
                );
              }
              if (barrage.icon) {
                this.circleImg(
                  this.ctx,
                  barrage.icon,
                  barrage.x - barrage.iconR, // x
                  i * (this.barrageHeight + this.channelGap) + this.paddingTop + this.barrageHeight / 2, // y
                  barrage.iconR // iconR
                );
              }
              if (barrage.tagImage) {
                this.originImg(
                  this.ctx,
                  barrage.tagImage,
                  barrage.x - this.barrageHeight - 10,
                  i * (this.barrageHeight + this.channelGap) + this.channelGap,
                  this.barrageHeight,
                  this.barrageHeight
                );
              }
            }
            if (barrage.x < -(barrage.width + this.barrageHeight)) {
              // 弹幕删除
              let arr = this.channelsArray.reduce((a, b) => a.concat(b));
              if (this.loop) {
                if (this.checkBarrageStatus(arr)) {
                  this.barrageQueue = [];
                  this.barrageQueue = JSON.parse(
                    JSON.stringify(this.newBarrageArray)
                  );
                  this.initData();
                }
              }
            }
            // 弹幕插入时机判断
            if (
              barrage.x <=
                Math.floor(this.containerWidth - barrage.width - this.channelGap) &&
              barrage.x >=
                Math.floor(
                  this.containerWidth - barrage.width - this.channelGap - this.speed
                ) &&
              j === this.channelsArray[i].length - 1 &&
              this.barrageArray.length !== 0
            ) {
              let item = this.barrageArray.shift();
              this.channelsArray[i].push(item);
            }
          } catch (e) {
            console.log(e);
          }
        }
      }
      this.removeUnavailableBarragefromChannels();
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
            p.y / (this.barrageHeight + this.innerFontSize)
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
    checkSingleBarrageStatus(barrage) {
      return barrage.x < -(barrage.width + this.barrageHeight);
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
      context.lineWidth = this.borderWidth;
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
