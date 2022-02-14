!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("vue")):"function"==typeof define&&define.amd?define(["vue"],t):"object"==typeof exports?exports["input-ui"]=t(require("vue")):e["input-ui"]=t(e.vue)}(self,(function(e){return(()=>{var t={865:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>s});var n=a(81),i=a.n(n),r=a(645),o=a.n(r)()(i());o.push([e.id,":root{--van-list-text-color: var(--van-text-color-2);--van-list-text-font-size: var(--van-font-size-md);--van-list-text-line-height: 50px;--van-list-loading-icon-size: 16px}.van-list__loading,.van-list__finished-text,.van-list__error-text{color:var(--van-list-text-color);font-size:var(--van-list-text-font-size);line-height:var(--van-list-text-line-height);text-align:center}.van-list__placeholder{height:0;pointer-events:none}.van-list__loading-icon .van-loading__spinner{width:var(--van-list-loading-icon-size);height:var(--van-list-loading-icon-size)}\n",""]);const s=o},35:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>s});var n=a(81),i=a.n(n),r=a(645),o=a.n(r)()(i());o.push([e.id,':root{--van-loading-text-color: var(--van-text-color-2);--van-loading-text-font-size: var(--van-font-size-md);--van-loading-spinner-color: var(--van-gray-5);--van-loading-spinner-size: 30px;--van-loading-spinner-animation-duration: .8s}.van-loading{position:relative;color:var(--van-loading-spinner-color);font-size:0;vertical-align:middle}.van-loading__spinner{position:relative;display:inline-block;width:var(--van-loading-spinner-size);max-width:100%;height:var(--van-loading-spinner-size);max-height:100%;vertical-align:middle;animation:van-rotate var(--van-loading-spinner-animation-duration) linear infinite}.van-loading__spinner--spinner{animation-timing-function:steps(12)}.van-loading__spinner--circular{animation-duration:2s}.van-loading__line{position:absolute;top:0;left:0;width:100%;height:100%}.van-loading__line:before{display:block;width:2px;height:25%;margin:0 auto;background-color:currentColor;border-radius:40%;content:" "}.van-loading__circular{display:block;width:100%;height:100%}.van-loading__circular circle{animation:van-circular 1.5s ease-in-out infinite;stroke:currentColor;stroke-width:3;stroke-linecap:round}.van-loading__text{display:inline-block;margin-left:var(--van-padding-xs);color:var(--van-loading-text-color);font-size:var(--van-loading-text-font-size);vertical-align:middle}.van-loading--vertical{display:flex;flex-direction:column;align-items:center}.van-loading--vertical .van-loading__text{margin:var(--van-padding-xs) 0 0}@keyframes van-circular{0%{stroke-dasharray:1,200;stroke-dashoffset:0}50%{stroke-dasharray:90,150;stroke-dashoffset:-40}to{stroke-dasharray:90,150;stroke-dashoffset:-120}}.van-loading__line--1{transform:rotate(30deg);opacity:1}.van-loading__line--2{transform:rotate(60deg);opacity:.9375}.van-loading__line--3{transform:rotate(90deg);opacity:.875}.van-loading__line--4{transform:rotate(120deg);opacity:.8125}.van-loading__line--5{transform:rotate(150deg);opacity:.75}.van-loading__line--6{transform:rotate(180deg);opacity:.6875}.van-loading__line--7{transform:rotate(210deg);opacity:.625}.van-loading__line--8{transform:rotate(240deg);opacity:.5625}.van-loading__line--9{transform:rotate(270deg);opacity:.5}.van-loading__line--10{transform:rotate(300deg);opacity:.4375}.van-loading__line--11{transform:rotate(330deg);opacity:.375}.van-loading__line--12{transform:rotate(360deg);opacity:.3125}\n',""]);const s=o},727:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>s});var n=a(81),i=a.n(n),r=a(645),o=a.n(r)()(i());o.push([e.id,":root{--van-pull-refresh-head-height: 50px;--van-pull-refresh-head-font-size: var(--van-font-size-md);--van-pull-refresh-head-text-color: var(--van-text-color-2);--van-pull-refresh-loading-icon-size: 16px}.van-pull-refresh{overflow:hidden}.van-pull-refresh__track{position:relative;height:100%;transition-property:transform}.van-pull-refresh__head{position:absolute;left:0;width:100%;height:var(--van-pull-refresh-head-height);overflow:hidden;color:var(--van-pull-refresh-head-text-color);font-size:var(--van-pull-refresh-head-font-size);line-height:var(--van-pull-refresh-head-height);text-align:center;transform:translateY(-100%)}.van-pull-refresh__loading .van-loading__spinner{width:var(--van-pull-refresh-loading-icon-size);height:var(--van-pull-refresh-loading-icon-size)}\n",""]);const s=o},495:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>s});var n=a(81),i=a.n(n),r=a(645),o=a.n(r)()(i());o.push([e.id,':root{--van-black: #000;--van-white: #fff;--van-gray-1: #f7f8fa;--van-gray-2: #f2f3f5;--van-gray-3: #ebedf0;--van-gray-4: #dcdee0;--van-gray-5: #c8c9cc;--van-gray-6: #969799;--van-gray-7: #646566;--van-gray-8: #323233;--van-red: #ee0a24;--van-blue: #1989fa;--van-orange: #ff976a;--van-orange-dark: #ed6a0c;--van-orange-light: #fffbe8;--van-green: #07c160;--van-gradient-red: linear-gradient(to right, #ff6034, #ee0a24);--van-gradient-orange: linear-gradient(to right, #ffd01e, #ff8917);--van-primary-color: var(--van-blue);--van-success-color: var(--van-green);--van-danger-color: var(--van-red);--van-warning-color: var(--van-orange);--van-text-color: var(--van-gray-8);--van-text-color-2: var(--van-gray-6);--van-text-color-3: var(--van-gray-5);--van-text-link-color: #576b95;--van-active-color: var(--van-gray-2);--van-active-opacity: .6;--van-disabled-opacity: .5;--van-background-color: var(--van-gray-1);--van-background-color-light: var(--van-white);--van-padding-base: 4px;--van-padding-xs: 8px;--van-padding-sm: 12px;--van-padding-md: 16px;--van-padding-lg: 24px;--van-padding-xl: 32px;--van-font-size-xs: 10px;--van-font-size-sm: 12px;--van-font-size-md: 14px;--van-font-size-lg: 16px;--van-font-weight-bold: 500;--van-line-height-xs: 14px;--van-line-height-sm: 18px;--van-line-height-md: 20px;--van-line-height-lg: 22px;--van-base-font-family: -apple-system, BlinkMacSystemFont, "Helvetica Neue", Helvetica, Segoe UI, Arial, Roboto, "PingFang SC", "miui", "Hiragino Sans GB", "Microsoft Yahei", sans-serif;--van-price-integer-font-family: Avenir-Heavy, PingFang SC, Helvetica Neue, Arial, sans-serif;--van-animation-duration-base: .3s;--van-animation-duration-fast: .2s;--van-animation-timing-function-enter: ease-out;--van-animation-timing-function-leave: ease-in;--van-border-color: var(--van-gray-3);--van-border-width-base: 1px;--van-border-radius-sm: 2px;--van-border-radius-md: 4px;--van-border-radius-lg: 8px;--van-border-radius-max: 999px}html{-webkit-tap-highlight-color:transparent}body{margin:0;font-family:-apple-system,BlinkMacSystemFont,Helvetica Neue,Helvetica,Segoe UI,Arial,Roboto,PingFang SC,miui,Hiragino Sans GB,Microsoft Yahei,sans-serif}a{text-decoration:none}input,button,textarea{color:inherit;font:inherit}a:focus,input:focus,button:focus,textarea:focus,[class*=van-]:focus{outline:none}ol,ul{margin:0;padding:0;list-style:none}@keyframes van-slide-up-enter{0%{transform:translateY(100%)}}@keyframes van-slide-up-leave{to{transform:translateY(100%)}}@keyframes van-slide-down-enter{0%{transform:translateY(-100%)}}@keyframes van-slide-down-leave{to{transform:translateY(-100%)}}@keyframes van-slide-left-enter{0%{transform:translate(-100%)}}@keyframes van-slide-left-leave{to{transform:translate(-100%)}}@keyframes van-slide-right-enter{0%{transform:translate(100%)}}@keyframes van-slide-right-leave{to{transform:translate(100%)}}@keyframes van-fade-in{0%{opacity:0}to{opacity:1}}@keyframes van-fade-out{0%{opacity:1}to{opacity:0}}@keyframes van-rotate{0%{transform:rotate(0)}to{transform:rotate(360deg)}}.van-fade-enter-active{animation:var(--van-animation-duration-base) van-fade-in both var(--van-animation-timing-function-enter)}.van-fade-leave-active{animation:var(--van-animation-duration-base) van-fade-out both var(--van-animation-timing-function-leave)}.van-slide-up-enter-active{animation:van-slide-up-enter var(--van-animation-duration-base) both var(--van-animation-timing-function-enter)}.van-slide-up-leave-active{animation:van-slide-up-leave var(--van-animation-duration-base) both var(--van-animation-timing-function-leave)}.van-slide-down-enter-active{animation:van-slide-down-enter var(--van-animation-duration-base) both var(--van-animation-timing-function-enter)}.van-slide-down-leave-active{animation:van-slide-down-leave var(--van-animation-duration-base) both var(--van-animation-timing-function-leave)}.van-slide-left-enter-active{animation:van-slide-left-enter var(--van-animation-duration-base) both var(--van-animation-timing-function-enter)}.van-slide-left-leave-active{animation:van-slide-left-leave var(--van-animation-duration-base) both var(--van-animation-timing-function-leave)}.van-slide-right-enter-active{animation:van-slide-right-enter var(--van-animation-duration-base) both var(--van-animation-timing-function-enter)}.van-slide-right-leave-active{animation:van-slide-right-leave var(--van-animation-duration-base) both var(--van-animation-timing-function-leave)}.van-clearfix:after{display:table;clear:both;content:""}.van-ellipsis{overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.van-multi-ellipsis--l2{display:-webkit-box;overflow:hidden;text-overflow:ellipsis;-webkit-line-clamp:2;-webkit-box-orient:vertical}.van-multi-ellipsis--l3{display:-webkit-box;overflow:hidden;text-overflow:ellipsis;-webkit-line-clamp:3;-webkit-box-orient:vertical}.van-safe-area-bottom{padding-bottom:constant(safe-area-inset-bottom);padding-bottom:env(safe-area-inset-bottom)}.van-haptics-feedback{cursor:pointer}.van-haptics-feedback:active{opacity:var(--van-active-opacity)}[class*=van-hairline]:after{position:absolute;box-sizing:border-box;content:" ";pointer-events:none;top:-50%;right:-50%;bottom:-50%;left:-50%;border:0 solid var(--van-border-color);transform:scale(.5)}.van-hairline,.van-hairline--top,.van-hairline--left,.van-hairline--right,.van-hairline--bottom,.van-hairline--surround,.van-hairline--top-bottom{position:relative}.van-hairline--top:after{border-top-width:1px}.van-hairline--left:after{border-left-width:1px}.van-hairline--right:after{border-right-width:1px}.van-hairline--bottom:after{border-bottom-width:1px}.van-hairline--top-bottom:after,.van-hairline-unset--top-bottom:after{border-width:1px 0}.van-hairline--surround:after{border-width:1px}\n',""]);const s=o},494:(e,t,a)=>{"use strict";var n=a(81),i=a.n(n),r=a(645);a.n(r)()(i()).push([e.id,"\n.z_barrage-container[data-v-27f3b45a] {\n  position: relative;\n}\n.z_container[data-v-27f3b45a] {\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n}\n.z_barrage[data-v-27f3b45a] {\n  position: absolute;\n  top: 0;\n  left: 0;\n}\n",""])},75:(e,t,a)=>{"use strict";var n=a(81),i=a.n(n),r=a(645);a.n(r)()(i()).push([e.id,"\n.lazyList_wrap {\r\n  height: 100%;\n}\n.lazyList_list {\r\n  background: #fafafa;\n}\ndiv.van-pull-refresh {\r\n  flex: 1;\r\n  background: #fafafa;\r\n  overflow-y: scroll;\n}\n.van-pull-refresh__head {\r\n  pointer-events: none;\n}\n.lazyList_empty {\r\n  text-align: center;\r\n  margin-top: 50%;\r\n  transform: translateY(-50%);\n}\n.lazyList_empty img {\r\n  width: 60%;\n}\n.lazyList_empty .emptyText {\r\n  font-size: 0.14rem;\r\n  margin-top: 0.16rem;\r\n  color: #697184;\n}\n.noFinishedText .van-list__finished-text {\r\n  display: none;\n}\r\n",""])},645:e=>{"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var a="",n=void 0!==t[5];return t[4]&&(a+="@supports (".concat(t[4],") {")),t[2]&&(a+="@media ".concat(t[2]," {")),n&&(a+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),a+=e(t),n&&(a+="}"),t[2]&&(a+="}"),t[4]&&(a+="}"),a})).join("")},t.i=function(e,a,n,i,r){"string"==typeof e&&(e=[[null,e,void 0]]);var o={};if(n)for(var s=0;s<this.length;s++){var l=this[s][0];null!=l&&(o[l]=!0)}for(var c=0;c<e.length;c++){var d=[].concat(e[c]);n&&o[d[0]]||(void 0!==r&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=r),a&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=a):d[2]=a),i&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=i):d[4]="".concat(i)),t.push(d))}},t}},81:e=>{"use strict";e.exports=function(e){return e[1]}},849:(e,t,a)=>{a(495),a(35),a(865)},272:(e,t,a)=>{a(495),a(35),a(727)},744:(e,t)=>{"use strict";t.Z=(e,t)=>{const a=e.__vccOpts||e;for(const[e,n]of t)a[e]=n;return a}},748:t=>{"use strict";t.exports=e}},a={};function n(e){var i=a[e];if(void 0!==i)return i.exports;var r=a[e]={id:e,exports:{}};return t[e](r,r.exports,n),r.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var a in t)n.o(t,a)&&!n.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var a=t.getElementsByTagName("script");a.length&&(e=a[a.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})();var i={};return(()=>{"use strict";n.d(i,{default:()=>me});var e=n(748),t=n.n(e);const a={class:"z_barrage-container",ref:"container"},r=["width","height"],o={class:"z_container"},s=["width","height"],l={name:"Barrage",props:{scale:{type:Number,default:2},canvasDisplayWidth:{type:Number,default:0},canvasDisplayHeight:{type:Number,default:0},speed:{type:Number,default:4},loop:{type:Boolean,default:!0},channels:{type:Number,default:0},channelsDelay:{type:Array,default:()=>[]},circleLoop:{type:Boolean,defalut:!1},barrageHeight:{type:Number,default:34},borderColor:{type:String,default:""},background:{type:String,default:""},linearGradient:{type:Object,default:()=>({startColor:"",endColor:""})},fontSize:{type:[Number],default:18},channelGap:{type:[Number],default:20},paddingTop:{type:[Number],default:10},borderWidth:{type:[Number],default:1},iconTextDistance:{type:[Number],default:2},barrageGap:{type:Number,default:10},iconR:{type:[Number],default:10}},data:()=>({ctx:null,ctx1:null,barrageList:[],newBarrageArray:[],barrageArray:[],barrageQueue:[],containerWidth:0,containerHeight:0,channelsArray:[],barrageChannels:1,running:!1}),computed:{canvasRealWidth(){return(this.canvasDisplayWidth||this.containerWidth)*this.scale},canvasRealHeight(){return(this.canvasDisplayHeight||this.containerHeight)*this.scale},realChannelGap(){return this.channelGap*this.scale},realPaddingTop(){return this.paddingTop*this.scale},realBorderWidth(){return this.borderWidth*this.scale},halfBorderWidth(){return this.realBorderWidth/2},realIconTextDistance(){return this.iconTextDistance*this.scale},realBarrageHeight(){return this.barrageHeight*this.scale},realBarrageGap(){return this.barrageGap*this.scale},minChannelDelayIndex(){return this.channelsDelay.reduce(((e,t,a)=>t<=this.channelsDelay[e]?a:e),0)},barrageInitX(){return this.canvasRealWidth+this.radius+this.realBarrageGap},realFontSize(){return this.fontSize*this.scale},font(){return`${this.realFontSize}px PingFangSC-Regular`},diameter(){return this.realBarrageHeight},radius(){return this.diameter/2},realSpeed(){return this.speed*this.scale}},mounted(){this.init()},methods:{init(){this.containerWidth=this.$refs.container.clientWidth,this.containerHeight=this.$refs.container.clientHeight;const e=Math.floor((this.canvasRealHeight-this.realPaddingTop)/(this.realBarrageHeight+this.realChannelGap));this.barrageChannels=this.channels?e<this.channels?e:this.channels:e,this.ctx=this.$refs.canvas.getContext("2d"),this.ctx1=this.$refs.canvasMeasure.getContext("2d"),this.barrageClickEvent()},setBarrageList(e){this.barrageList=e,this.barrageQueue=JSON.parse(JSON.stringify(e)),this.newBarrageArray=JSON.parse(JSON.stringify(e)),this.initData()},measureText(e=""){return this.ctx1.font=this.font,this.ctx1.measureText(e)},modifyBarrageCountById(e){const{id:t}=e;let a,n;for(let e=0;e<this.newBarrageArray.length;e++)if(this.newBarrageArray[e].id===t){this.newBarrageArray[e].count++;const t=this.calcBarrageWidth(this.newBarrageArray[e]);a=t.width,n=t.contentWidth,this.newBarrageArray[e].width=a,this.newBarrageArray[e].contentWidth=n;break}for(let e=0;e<this.barrageArray.length;e++)if(this.barrageArray[e].id===t){this.barrageArray[e].width=a,this.barrageArray[e].contentWidth=n,this.barrageArray[e].count++;break}for(let e=0;e<this.channelsArray.length;e++){let i=!1;for(let r=0;r<this.channelsArray[e].length;r++)if(this.channelsArray[e][r].id===t){this.channelsArray[e][r].width=a,this.channelsArray[e][r].contentWidth=n,this.channelsArray[e][r].count++,i=!0;break}if(i)break}},calcBarrageWidth(e){const t=this.measureText(e.content).width;let a=0;return e.count&&(a=this.measureText(` ×${e.count}`).width),{width:t+(e.icon?2*e.iconR+this.realIconTextDistance:0)+a,contentWidth:t}},calcBarrageInfo(e){let t=this.dealStr(e.content),a=null;return e.icon&&(a=new Image,a.src=e.icon,e.iconR=(e.iconR||this.iconR)*this.scale),{...e,id:e.id,content:t,x:this.barrageInitX,icon:e.icon?a:"",iconR:e.iconR,...this.calcBarrageWidth(e),color:e.color||"#FFFFFF",bgColor:e.bgColor||"rgba(0,0,0,0.4)",borderColor:e.borderColor,count:e.count,countColor:e.countColor}},initData(){for(let e=0;e<this.barrageQueue.length;e++)this.barrageArray.push(this.calcBarrageInfo(this.barrageQueue[e]));this.initChannel()},initChannel(){for(let e=0;e<this.barrageChannels;e++){let t=this.barrageArray.shift();this.channelsArray[e]=t?[t]:[]}},start(){this.running||(this.running=!0,window.requestAnimationFrame(this.render))},stop(){this.running=!1},render(){this.running&&(this.ctx.clearRect(0,0,this.canvasRealWidth,this.canvasRealHeight),this.ctx.font=this.font,this.draw(),window.requestAnimationFrame(this.render))},getChannelDelay(e){return this.channelsDelay[e]||0},canStart(e){const t=this.getChannelDelay(e),a=this.minChannelDelayIndex;if(a===e)return!0;if(this.channelsArray[a][0]){const n=this.channelsArray[a][0].x,i=this.channelsArray[e][0].x;return i<this.barrageInitX||i-n>=t}return!0},draw(){for(let e=0;e<this.channelsArray.length;e++){const t=this.channelsArray[e];let a=t[0];for(;a&&this.isBarrageOutOfScreen(a);){if(t.shift(),this.loop)if(this.circleLoop)a.x=this.barrageInitX,this.barrageArray.push(a);else if(0===this.barrageArray.length&&this.isChannelsArrayEmpty())return this.barrageQueue=[],this.barrageQueue=JSON.parse(JSON.stringify(this.newBarrageArray)),void this.initData();a=t[0]}const n=t[t.length-1];if(n){if(0!==this.barrageArray.length&&n.x-this.realSpeed<=this.canvasRealWidth-n.width-this.radius){let e=this.barrageArray.shift();e.x=n.x+n.width+this.diameter+this.realBarrageGap,this.barrageInitX>e.x&&(e.x=this.barrageInitX),t.push(e)}}else{let e=this.barrageArray.shift();e&&t.push(e)}for(let a=0;a<t.length;a++)try{if(0===a&&!this.canStart(e))break;const n=t[a];this.drawRoundRect(this.ctx,n.bgColor,n.x-this.radius,e*(this.realBarrageHeight+this.realChannelGap)+this.realPaddingTop,n.width+this.diameter,this.realBarrageHeight,this.radius),(n.borderColor||this.borderColor)&&this.drawRoundRectBorder(this.ctx,n.x-this.radius+this.halfBorderWidth,this.realPaddingTop+e*(this.realBarrageHeight+this.realChannelGap)+this.halfBorderWidth,n.width+this.diameter-2*this.halfBorderWidth,this.realBarrageHeight-2*this.halfBorderWidth,this.radius-this.halfBorderWidth,n.borderColor||this.borderColor),this.ctx.fillStyle=`${n.color}`,this.ctx.fillText(n.content,n.x+(n.icon?2*n.iconR+this.realIconTextDistance:0),e*(this.realBarrageHeight+this.realChannelGap)+this.realPaddingTop+(this.realBarrageHeight-this.realFontSize)/2+this.realFontSize/6*5),this.ctx.fillStyle=`${n.countColor||n.color}`,n.count&&this.ctx.fillText(` ×${n.count}`,n.x+(n.icon?2*n.iconR+this.realIconTextDistance:0)+n.contentWidth,e*(this.realBarrageHeight+this.realChannelGap)+this.realPaddingTop+(this.realBarrageHeight-this.realFontSize)/2+this.realFontSize/6*5),n.icon&&this.circleImg(this.ctx,n.icon,n.x-n.iconR,e*(this.realBarrageHeight+this.realChannelGap)+this.realPaddingTop+this.realBarrageHeight/2,n.iconR),n.x-=this.realSpeed}catch(e){console.log(e)}}},add(e){const t=this.calcBarrageInfo(e);let a={...t};if(0===this.barrageArray.length)this.newBarrageArray.unshift(a);else{this.barrageArray.unshift(t);let e=this.barrageList.length-this.barrageArray.length;this.newBarrageArray.splice(e,0,a)}},barrageClickEvent(){document.getElementById("canvas").addEventListener("click",(e=>{console.log(e);const t=this.getEventPosition(e),a=Math.ceil((t.y-this.realPaddingTop)/(this.realBarrageHeight+this.realChannelGap))-1;if(this.channelsArray.length>a&&t.y-(this.realBarrageHeight+this.realChannelGap)*a-this.realPaddingTop<=this.realBarrageHeight){const e=JSON.parse(JSON.stringify(this.channelsArray[a]));for(let n=0;n<e.length;n++){let i=e[n];if(this.isPointInBarrage(t,i,a)){i.id&&this.$emit("doLike",i);break}}}}),!1)},isPointInBarrage({x:e,y:t},a,n){const i=a.x+a.width,r=this.realPaddingTop+n*(this.realBarrageHeight+this.realChannelGap)+this.realBarrageHeight/2;return e>=a.x&&e<=i||this.isPointInCircle({x:e,y:t},{cX:a.x,cY:r},this.radius)||this.isPointInCircle({x:e,y:t},{cX:i,cY:r},this.radius)},isPointInCircle:({x:e,y:t},{cX:a,cY:n},i)=>i>=Math.sqrt((e-a)*(e-a)+(t-n)*(t-n)),getEventPosition(e){let t,a;return e.layerX||0===e.layerX?(t=e.layerX,a=e.layerY):(e.offsetX||0===e.offsetX)&&(t=e.offsetX,a=e.offsetY),{x:this.scale*t,y:this.scale*a}},isBarrageOutOfScreen(e){return e.x<=-(e.width+this.diameter)},isChannelsArrayEmpty(){return 0===this.channelsArray.reduce(((e,t)=>e.concat(t))).length},checkBarrageStatus(e){for(let t=0;t<e.length;t++)if(e[t].x>-e[t].width)return!1;return!0},dealStr:e=>e.length>50?`${e.substring(0,50)}...`:e,getColor:()=>`#${Math.floor(16777215*Math.random()).toString(16)}`,circleImg(e,t,a,n,i){e.save();const r=2*i,o=r;e.beginPath(),e.drawImage(t,a+i,n-i,r,o),e.restore(),e.closePath()},originImg(e,t,a,n,i,r){try{e.beginPath(),e.drawImage(t,a,n,i,r),e.closePath()}catch(e){console.log(e)}},drawRoundRect(e,t,a,n,i,r,o){if(this.linearGradient.startColor&&this.linearGradient.endColor){let i=e.createLinearGradient(a,n,a,n+r);i.addColorStop(0,this.linearGradient.startColor),i.addColorStop(1,this.linearGradient.endColor),e.fillStyle=i||t}else e.fillStyle=this.background||t;e.beginPath(),e.arc(a+o,n+o,o,Math.PI,3*Math.PI/2),e.lineTo(i-o+a,n),e.arc(i-o+a,o+n,o,3*Math.PI/2,2*Math.PI),e.lineTo(i+a,r+n-o),e.arc(i-o+a,r-o+n,o,0,Math.PI/2),e.lineTo(o+a,r+n),e.arc(o+a,r-o+n,o,Math.PI/2,Math.PI),e.fill(),e.closePath()},drawRoundRectBorder(e,t,a,n,i,r,o){e.beginPath(),e.lineWidth=this.realBorderWidth,e.strokeStyle=o,e.arc(t+r,a+r,r,Math.PI,3*Math.PI/2),e.lineTo(n-r+t,a),e.arc(n-r+t,r+a,r,3*Math.PI/2,2*Math.PI),e.lineTo(n+t,i+a-r),e.arc(n-r+t,i-r+a,r,0,Math.PI/2),e.lineTo(r+t,i+a),e.arc(r+t,i-r+a,r,Math.PI/2,Math.PI),e.stroke(),e.closePath()}}};n(494);var c=n(744);const d=(0,c.Z)(l,[["render",function(t,n,i,l,c,d){return(0,e.openBlock)(),(0,e.createElementBlock)("div",a,[(0,e.createElementVNode)("canvas",{ref:"canvasMeasure",width:d.canvasRealWidth,height:d.canvasRealHeight,style:{display:"none"}},null,8,r),(0,e.createElementVNode)("div",o,[(0,e.createElementVNode)("canvas",{id:"canvas",ref:"canvas",class:"z_barrage",width:d.canvasRealWidth,height:d.canvasRealHeight,style:(0,e.normalizeStyle)({width:i.canvasDisplayWidth||c.containerWidth+"px",height:i.canvasDisplayHeight||c.containerHeight+"px"})},null,12,s)])],512)}],["__scopeId","data-v-27f3b45a"]]);d.install=e=>{e.component(d.name,d)};const h=d,u=n.p+"f336e2584cadaed534b8b8b3072e5d44.png",v=["data-index"],g={key:0,class:"lazyList_empty"},f=(0,e.createElementVNode)("img",{src:u},null,-1),p={class:"emptyText"};n(849),n(272);const m=Object.assign,y="undefined"!=typeof window;function b(e,t){const a=t.split(".");let n=e;return a.forEach((e=>{var t;n=null!=(t=n[e])?t:""})),n}const x=e=>null!=e;function w(e){if(x(e))return"number"==typeof(t=e)||/^\d+(\.\d+)?$/.test(t)?`${e}px`:String(e);var t}const _=/-(\w)/g,C=e=>e.replace(_,((e,t)=>t.toUpperCase()));function S(e){return e.install=t=>{const{name:a}=e;t.component(a,e),t.component(C(`-${a}`),e)},e}const{hasOwnProperty:k}=Object.prototype;function B(e,t){return Object.keys(t).forEach((a=>{!function(e,t,a){const n=t[a];x(n)&&(k.call(e,a)&&(e=>null!==e&&"object"==typeof e)(n)?e[a]=B(Object(e[a]),n):e[a]=n)}(e,t,a)})),e}const z=(0,e.ref)("zh-CN"),T=(0,e.reactive)({"zh-CN":{name:"姓名",tel:"电话",save:"保存",confirm:"确认",cancel:"取消",delete:"删除",loading:"加载中...",noCoupon:"暂无优惠券",nameEmpty:"请填写姓名",addContact:"添加联系人",telInvalid:"请填写正确的电话",vanCalendar:{end:"结束",start:"开始",title:"日期选择",weekdays:["日","一","二","三","四","五","六"],monthTitle:(e,t)=>`${e}年${t}月`,rangePrompt:e=>`最多选择 ${e} 天`},vanCascader:{select:"请选择"},vanPagination:{prev:"上一页",next:"下一页"},vanPullRefresh:{pulling:"下拉即可刷新...",loosing:"释放即可刷新..."},vanSubmitBar:{label:"合计:"},vanCoupon:{unlimited:"无门槛",discount:e=>`${e}折`,condition:e=>`满${e}元可用`},vanCouponCell:{title:"优惠券",count:e=>`${e}张可用`},vanCouponList:{exchange:"兑换",close:"不使用",enable:"可用",disabled:"不可用",placeholder:"输入优惠码"},vanAddressEdit:{area:"地区",postal:"邮政编码",areaEmpty:"请选择地区",addressEmpty:"请填写详细地址",postalEmpty:"邮政编码不正确",addressDetail:"详细地址",defaultAddress:"设为默认收货地址"},vanAddressList:{add:"新增地址"}}});var N={messages:()=>T[z.value],use(e,t){z.value=e,this.add({[e]:t})},add(e={}){B(T,e)}};function A(e){const t=C(e)+".";return(e,...a)=>{const n=N.messages(),i=b(n,t+e)||b(n,e);return"function"==typeof i?i(...a):i}}function P(e,t){return t?"string"==typeof t?` ${e}--${t}`:Array.isArray(t)?t.reduce(((t,a)=>t+P(e,a)),""):Object.keys(t).reduce(((a,n)=>a+(t[n]?P(e,n):"")),""):""}function I(e){return(t,a)=>(t&&"string"!=typeof t&&(a=t,t=""),`${t=t?`${e}__${t}`:e}${P(t,a)}`)}function H(e){const t=`van-${e}`;return[t,I(t),A(t)]}const R=[Number,String],$={type:Boolean,default:!0},D=e=>({type:R,default:e}),W=e=>({type:String,default:e});var M,V,L="undefined"!=typeof window,E=(e,t)=>({top:0,left:0,right:e,bottom:t,width:e,height:t}),O=t=>{const a=(0,e.unref)(t);if(a===window){const e=a.innerWidth,t=a.innerHeight;return E(e,t)}return(null==a?void 0:a.getBoundingClientRect)?a.getBoundingClientRect():E(0,0)};var F=/scroll|auto/i,G=L?window:void 0;function Y(e){return"HTML"!==e.tagName&&"BODY"!==e.tagName&&1===e.nodeType}function X(t,a=G){const n=(0,e.ref)();return(0,e.onMounted)((()=>{t.value&&(n.value=function(e,t=G){let a=e;for(;a&&a!==t&&Y(a);){const{overflowY:e}=window.getComputedStyle(a);if(F.test(e))return a;a=a.parentNode}return t}(t.value,a))})),n}Symbol("van-field"),y&&/ios|iphone|ipad|ipod/.test(navigator.userAgent.toLowerCase());const{width:j,height:J}=function(){if(!M&&(M=(0,e.ref)(0),V=(0,e.ref)(0),L)){const e=()=>{M.value=window.innerWidth,V.value=window.innerHeight};e(),window.addEventListener("resize",e,{passive:!0}),window.addEventListener("orientationchange",e,{passive:!0})}return{width:M,height:V}}(),q=Symbol(),[Q,U]=H("loading"),Z=Array(12).fill(null).map(((t,a)=>(0,e.createVNode)("i",{class:U("line",String(a+1))},null))),K=(0,e.createVNode)("svg",{class:U("circular"),viewBox:"25 25 50 50"},[(0,e.createVNode)("circle",{cx:"50",cy:"50",r:"20",fill:"none"},null)]),ee={size:R,type:W("circular"),color:String,vertical:Boolean,textSize:R,textColor:String},te=S((0,e.defineComponent)({name:Q,props:ee,setup(t,{slots:a}){const n=(0,e.computed)((()=>m({color:t.color},function(e){if(x(e)){const t=w(e);return{width:t,height:t}}}(t.size)))),i=()=>{var n;if(a.default)return(0,e.createVNode)("span",{class:U("text"),style:{fontSize:w(t.textSize),color:null!=(n=t.textColor)?n:t.color}},[a.default()])};return()=>{const{type:a,vertical:r}=t;return(0,e.createVNode)("div",{class:U([a,{vertical:r}])},[(0,e.createVNode)("span",{class:U("spinner",a),style:n.value},["spinner"===a?Z:K]),i()])}}})),[ae,ne,ie]=H("list"),re={error:Boolean,offset:D(300),loading:Boolean,finished:Boolean,errorText:String,direction:W("down"),loadingText:String,finishedText:String,immediateCheck:$};const oe=S((0,e.defineComponent)({name:ae,props:re,emits:["load","update:error","update:loading"],setup(t,{emit:a,slots:n}){const i=(0,e.ref)(!1),r=(0,e.ref)(),o=(0,e.ref)(),s=(0,e.inject)(q,null),l=X(r),c=()=>{(0,e.nextTick)((()=>{if(i.value||t.finished||t.error||!1===(null==s?void 0:s.value))return;const{offset:n,direction:c}=t,d=O(l);if(!d.height||function(t){const a=(0,e.unref)(t);if(!a)return!1;const n=window.getComputedStyle(a),i="none"===n.display,r=null===a.offsetParent&&"fixed"!==n.position;return i||r}(r))return;let h=!1;const u=O(o);h="up"===c?d.top-u.top<=n:u.bottom-d.bottom<=n,h&&(i.value=!0,a("update:loading",!0),a("load"))}))},d=()=>{if(t.finished){const a=n.finished?n.finished():t.finishedText;if(a)return(0,e.createVNode)("div",{class:ne("finished-text")},[a])}},h=()=>{a("update:error",!1),c()},u=()=>{if(t.error){const a=n.error?n.error():t.errorText;if(a)return(0,e.createVNode)("div",{role:"button",class:ne("error-text"),tabindex:0,onClick:h},[a])}},v=()=>{if(i.value&&!t.finished)return(0,e.createVNode)("div",{class:ne("loading")},[n.loading?n.loading():(0,e.createVNode)(te,{class:ne("loading-icon")},{default:()=>[t.loadingText||ie("loading")]})])};return(0,e.watch)((()=>[t.loading,t.finished,t.error]),c),s&&(0,e.watch)(s,(e=>{e&&c()})),(0,e.onUpdated)((()=>{i.value=t.loading})),(0,e.onMounted)((()=>{t.immediateCheck&&c()})),function(t){const a=(0,e.getCurrentInstance)();a&&m(a.proxy,t)}({check:c}),function(t,a,n={}){if(!L)return;const{target:i=window,passive:r=!1,capture:o=!1}=n;let s;const l=n=>{const i=(0,e.unref)(n);i&&!s&&(i.addEventListener(t,a,{capture:o,passive:r}),s=!0)},c=n=>{const i=(0,e.unref)(n);i&&s&&(i.removeEventListener(t,a,o),s=!1)};(0,e.onUnmounted)((()=>c(i))),(0,e.onDeactivated)((()=>c(i))),function(t){let a;(0,e.onMounted)((()=>{t(),(0,e.nextTick)((()=>{a=!0}))})),(0,e.onActivated)((()=>{a&&t()}))}((()=>l(i))),(0,e.isRef)(i)&&(0,e.watch)(i,((e,t)=>{c(t),l(e)}))}("scroll",c,{target:l}),()=>{var a;const s=null==(a=n.default)?void 0:a.call(n),l=(0,e.createVNode)("div",{ref:o,class:ne("placeholder")},null);return(0,e.createVNode)("div",{ref:r,role:"feed",class:ne(),"aria-busy":i.value},["down"===t.direction?s:l,v(),d(),u(),"up"===t.direction?s:l])}}})),[se,le,ce]=H("pull-refresh"),de=["pulling","loosing","success"],he={disabled:Boolean,modelValue:Boolean,headHeight:D(50),successText:String,pullingText:String,loosingText:String,loadingText:String,pullDistance:R,successDuration:D(500),animationDuration:D(300)},ue=S((0,e.defineComponent)({name:se,props:he,emits:["refresh","update:modelValue"],setup(t,{emit:a,slots:n}){let i;const r=(0,e.ref)(),o=X(r),s=(0,e.reactive)({status:"normal",distance:0,duration:0}),l=function(){const t=(0,e.ref)(0),a=(0,e.ref)(0),n=(0,e.ref)(0),i=(0,e.ref)(0),r=(0,e.ref)(0),o=(0,e.ref)(0),s=(0,e.ref)(""),l=()=>{n.value=0,i.value=0,r.value=0,o.value=0,s.value=""};return{move:e=>{const l=e.touches[0];var c,d;n.value=l.clientX<0?0:l.clientX-t.value,i.value=l.clientY-a.value,r.value=Math.abs(n.value),o.value=Math.abs(i.value),(!s.value||r.value<10&&o.value<10)&&(s.value=(c=r.value)>(d=o.value)?"horizontal":d>c?"vertical":"")},start:e=>{l(),t.value=e.touches[0].clientX,a.value=e.touches[0].clientY},reset:l,startX:t,startY:a,deltaX:n,deltaY:i,offsetX:r,offsetY:o,direction:s,isVertical:()=>"vertical"===s.value,isHorizontal:()=>"horizontal"===s.value}}(),c=()=>{if(50!==t.headHeight)return{height:`${t.headHeight}px`}},d=()=>"loading"!==s.status&&"success"!==s.status&&!t.disabled,h=(e,a)=>{const n=+(t.pullDistance||t.headHeight);s.distance=e,s.status=a?"loading":0===e?"normal":e<n?"pulling":"loosing"},u=()=>{const{status:e}=s;return"normal"===e?"":t[`${e}Text`]||ce(e)},v=()=>{const{status:t,distance:a}=s;if(n[t])return n[t]({distance:a});const i=[];return de.includes(t)&&i.push((0,e.createVNode)("div",{class:le("text")},[u()])),"loading"===t&&i.push((0,e.createVNode)(te,{class:le("loading")},{default:u})),i},g=e=>{i=0===function(e){const t="scrollTop"in e?e.scrollTop:e.pageYOffset;return Math.max(t,0)}(o.value),i&&(s.duration=0,l.start(e))},f=e=>{d()&&g(e)},p=e=>{if(d()){i||g(e);const{deltaY:a}=l;l.move(e),i&&a.value>=0&&l.isVertical()&&(function(e,t){("boolean"!=typeof e.cancelable||e.cancelable)&&e.preventDefault()}(e),h((e=>{const a=+(t.pullDistance||t.headHeight);return e>a&&(e=e<2*a?a+(e-a)/2:1.5*a+(e-2*a)/4),Math.round(e)})(a.value)))}},m=()=>{i&&l.deltaY.value&&d()&&(s.duration=+t.animationDuration,"loosing"===s.status?(h(+t.headHeight,!0),a("update:modelValue",!0),(0,e.nextTick)((()=>a("refresh")))):h(0))};return(0,e.watch)((()=>t.modelValue),(e=>{s.duration=+t.animationDuration,e?h(+t.headHeight,!0):n.success||t.successText?(s.status="success",setTimeout((()=>{h(0)}),+t.successDuration)):h(0,!1)})),()=>{var t;const a={transitionDuration:`${s.duration}ms`,transform:s.distance?`translate3d(0,${s.distance}px, 0)`:""};return(0,e.createVNode)("div",{ref:r,class:le()},[(0,e.createVNode)("div",{class:le("track"),style:a,onTouchstart:f,onTouchmove:p,onTouchend:m,onTouchcancel:m},[(0,e.createVNode)("div",{class:le("head"),style:c()},[v()]),null==(t=n.default)?void 0:t.call(n)])])}}}));t().use(oe),t().use(ue);const ve={name:"lazyList",props:{pageSize:{type:[Number,String],default:"4"},search:{type:Function,required:!0,default:({pageNum:e,pageSize:t})=>({list:[],total:10})},emptyText:{type:String,default:"暂时没有内容哦"},finishedText:{type:String,default:"没有更多了"}},data:()=>({pageNum:1,list:[],loading:!1,refreshing:!1,finished:!1,searchId:0}),methods:{async doSearch(){this.loading=!0;const e=++this.searchId,t={pageNum:`${this.pageNum}`,pageSize:`${this.pageSize}`};try{const a=await this.search(t);if(!Array.isArray(a.list))throw new Error("list should be an array");if(`${Number.parseInt(a.total)}`!=`${a.total}`)throw new Error("total should be a number");if(e!==this.searchId)return;this.refreshing&&(this.list=[],this.finished=!1);const{list:n,total:i}=a;this.list.push(...n),this.pageNum++,this.list.length>=i&&(this.finished=!0)}catch(e){this.finished=!0}this.loading=!1,this.refreshing=!1},onRefresh(){this.loading=!0,this.pageNum=1,this.doSearch()},onLoad(){this.doSearch()},handleItemClick(e){const t=function(e,t){"string"==typeof t&&(t=[t]);const a=e.currentTarget,n=e.path||e.composedPath&&e.composedPath(),i=[];return t.forEach((e=>{const t=e.split(".");for(let e in n){const r=n[e];if(r===a)return;{const{tagName:e,classList:a}=r;t.every((t=>e.toLowerCase()===t||a.contains(t)))&&i.push(r)}}})),i}(e,"div.lazy_list_item")[0];t&&this.$emit("itemClick",this.list[t.dataset.index])}}};n(75);const ge=(0,c.Z)(ve,[["render",function(t,a,n,i,r,o){const s=(0,e.resolveComponent)("van-list"),l=(0,e.resolveComponent)("van-pull-refresh");return(0,e.openBlock)(),(0,e.createBlock)(l,{modelValue:r.refreshing,"onUpdate:modelValue":a[0]||(a[0]=e=>r.refreshing=e),onRefresh:o.onRefresh,class:"lazyList_wrap"},{default:(0,e.withCtx)((()=>[(0,e.createVNode)(s,{class:(0,e.normalizeClass)(["lazyList_list",{noFinishedText:r.list&&0===r.list.length}]),loading:r.loading,finished:r.finished,"finished-text":n.finishedText,onLoad:o.onLoad,onClick:o.handleItemClick},{default:(0,e.withCtx)((()=>[((0,e.openBlock)(!0),(0,e.createElementBlock)(e.Fragment,null,(0,e.renderList)(r.list,((a,n)=>((0,e.openBlock)(),(0,e.createElementBlock)("div",{key:n,"data-index":n,class:"lazy_list_item"},[(0,e.renderSlot)(t.$slots,"default",{item:a,dataIndex:n})],8,v)))),128))])),_:3},8,["loading","finished","finished-text","onLoad","onClick","class"]),!r.loading&&r.list&&0===r.list.length?((0,e.openBlock)(),(0,e.createElementBlock)("div",g,[(0,e.renderSlot)(t.$slots,"empty",{},(()=>[f,(0,e.createElementVNode)("div",p,(0,e.toDisplayString)(n.emptyText),1)]))])):(0,e.createCommentVNode)("v-if",!0)])),_:3},8,["modelValue","onRefresh"])}]]);ge.install=e=>{e.component(ge.name,ge)};const fe={barrage:h,lazyList:ge},pe=e=>{Object.entries(fe).map((([t,a])=>{e.component(a.name,a)}))};window&&window.Vue&&pe(window.Vue);const me={install:pe,...fe}})(),i.default})()}));