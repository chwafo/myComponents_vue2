(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{351:function(t,r){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},353:function(t,r,e){var a=e(3),n=e(32),i=e(18),s=e(351),o=a("".replace),h="["+s+"]",c=RegExp("^"+h+h+"*"),l=RegExp(h+h+"*$"),u=function(t){return function(r){var e=i(n(r));return 1&t&&(e=o(e,c,"")),2&t&&(e=o(e,l,"")),e}};t.exports={start:u(1),end:u(2),trim:u(3)}},355:function(t,r,e){"use strict";var a=e(3),n=e(89).PROPER,i=e(16),s=e(10),o=e(34),h=e(18),c=e(4),l=e(197),u=RegExp.prototype,g=u.toString,f=a(l),d=c((function(){return"/a/b"!=g.call({source:"a",flags:"b"})})),p=n&&"toString"!=g.name;(d||p)&&i(RegExp.prototype,"toString",(function(){var t=s(this),r=h(t.source),e=t.flags;return"/"+r+"/"+h(void 0===e&&o(u,t)&&!("flags"in u)?f(t):e)}),{unsafe:!0})},358:function(t,r,e){"use strict";var a=e(9),n=e(0),i=e(3),s=e(119),o=e(16),h=e(11),c=e(198),l=e(34),u=e(90),g=e(201),f=e(4),d=e(59).f,p=e(35).f,b=e(13).f,y=e(359),v=e(353).trim,A=n.Number,m=A.prototype,x=n.TypeError,B=i("".slice),C=i("".charCodeAt),I=function(t){var r=g(t,"number");return"bigint"==typeof r?r:w(r)},w=function(t){var r,e,a,n,i,s,o,h,c=g(t,"number");if(u(c))throw x("Cannot convert a Symbol value to a number");if("string"==typeof c&&c.length>2)if(c=v(c),43===(r=C(c,0))||45===r){if(88===(e=C(c,2))||120===e)return NaN}else if(48===r){switch(C(c,1)){case 66:case 98:a=2,n=49;break;case 79:case 111:a=8,n=55;break;default:return+c}for(s=(i=B(c,2)).length,o=0;o<s;o++)if((h=C(i,o))<48||h>n)return NaN;return parseInt(i,a)}return+c};if(s("Number",!A(" 0o1")||!A("0b1")||A("+0x1"))){for(var P,S=function(t){var r=arguments.length<1?0:A(I(t)),e=this;return l(m,e)&&f((function(){y(e)}))?c(Object(r),e,S):r},O=a?d(A):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","),R=0;O.length>R;R++)h(A,P=O[R])&&!h(S,P)&&b(S,P,p(A,P));S.prototype=m,m.constructor=S,o(n,"Number",S)}},359:function(t,r,e){var a=e(3);t.exports=a(1..valueOf)},379:function(t,r,e){},380:function(t,r,e){},415:function(t,r,e){var a=e(2),n=e(4),i=e(17),s=e(35).f,o=e(9),h=n((function(){s(1)}));a({target:"Object",stat:!0,forced:!o||h,sham:!o},{getOwnPropertyDescriptor:function(t,r){return s(i(t),r)}})},416:function(t,r,e){var a=e(2),n=e(9),i=e(126).f;a({target:"Object",stat:!0,forced:Object.defineProperties!==i,sham:!n},{defineProperties:i})},417:function(t,r,e){"use strict";var a=e(2),n=e(0),i=e(91),s=e(61),o=e(25),h=e(15),c=e(127),l=e(42),u=e(63)("splice"),g=n.TypeError,f=Math.max,d=Math.min;a({target:"Array",proto:!0,forced:!u},{splice:function(t,r){var e,a,n,u,p,b,y=h(this),v=o(y),A=i(t,v),m=arguments.length;if(0===m?e=a=0:1===m?(e=0,a=v-A):(e=m-2,a=d(f(s(r),0),v-A)),v+e-a>9007199254740991)throw g("Maximum allowed length exceeded");for(n=c(y,a),u=0;u<a;u++)(p=A+u)in y&&l(n,u,y[p]);if(n.length=a,e<a){for(u=A;u<v-a;u++)b=u+e,(p=u+a)in y?y[b]=y[p]:delete y[b];for(u=v;u>v-a+e;u--)delete y[u-1]}else if(e>a)for(u=v-a;u>A;u--)b=u+e-1,(p=u+a-1)in y?y[b]=y[p]:delete y[b];for(u=0;u<e;u++)y[u+A]=arguments[u+2];return y.length=v-a+e,n}})},418:function(t,r,e){var a=e(3),n=e(16),i=Date.prototype,s=a(i.toString),o=a(i.getTime);"Invalid Date"!=String(new Date(NaN))&&n(i,"toString",(function(){var t=o(this);return t==t?s(this):"Invalid Date"}))},419:function(t,r,e){var a=e(2),n=e(420),i=e(122);a({target:"Array",proto:!0},{fill:n}),i("fill")},420:function(t,r,e){"use strict";var a=e(15),n=e(91),i=e(25);t.exports=function(t){for(var r=a(this),e=i(r),s=arguments.length,o=n(s>1?arguments[1]:void 0,e),h=s>2?arguments[2]:void 0,c=void 0===h?e:n(h,e);c>o;)r[o++]=t;return r}},421:function(t,r,e){"use strict";e(379)},422:function(t,r){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAf5JREFUOE99001IFHEYx/HvbzbfwEMSEeUlUCiK3pR2esGiCIKu1SWoPHiIMErStaSDEFGzbXgRwvCQXT10bLsoiCE7WhF0EcNDB09RRpn4MvPErrvrjrb9j/N/ns9/nt/MX5RZ1nGonqpYjZ58+FKuJvtcZYGueAuO0oTWqqf+cLm68kAifgPpObAC4Tl5k2P/Qv4DuCOIM/mmGWpq9rH029XjqXelUASwy8Q0TGDdR09gGkda3w/tCo4ugb2Q578tIFEgEW9nPhigLpYBHdnwyqMYe3Kp2fxeJad/RUK0e02NWMUbzF4jda012zKoctPsZg+U9B9Fge74IOg6mANyck0KOzHnOHAxitisPL+hCFiPu4PAvq6fZj9BC8AAXuYhCbcfcTOC2HK9kh/nchlYd/waaKhYYIxi4QBStZL+kPXi8McdQ5ws1gTBAaWmPheAHlBuprWlC6yuTBJWLqhvYjF/yHlQOp9NyHJsu/omvq8BCfcq4lW+e1xepmVjcHbn8Faqqn7kgTF5/un1DHr317JYOw3swqxfSf/WJqCjqZHKihlglcBOKeVPRL/C/WMuQZhGmmM2czD7Q5UilnBTiNuYtWVzKQ4bKepqbkBbXiI+ycu0F/asM34WR4OE1qaUP1Las+kuWPaG3m3epmfvvxWB1t3V1O1UIdBS4C+x5rwRIqvxAAAAAABJRU5ErkJggg=="},423:function(t,r,e){"use strict";e(380)},442:function(t,r,e){"use strict";e.r(r);e(92),e(120),e(64),e(40),e(8),e(415),e(117),e(118),e(207),e(416),e(125);function a(t,r,e){return r in t?Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[r]=e,t}function n(t,r){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable}))),e.push.apply(e,a)}return e}function i(t){for(var r=1;r<arguments.length;r++){var e=null!=arguments[r]?arguments[r]:{};r%2?n(Object(e),!0).forEach((function(r){a(t,r,e[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):n(Object(e)).forEach((function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(e,r))}))}return t}e(358),e(208),e(212),e(417),e(205),e(28),e(418),e(355),e(419);var s={name:"Barrage",props:{scale:{type:Number,default:2},canvasDisplayWidth:{type:Number,default:0},canvasDisplayHeight:{type:Number,default:0},speed:{type:Number,default:4},loop:{type:Boolean,default:!0},channels:{type:Number,default:0},channelsDelay:{type:Array,default:function(){return[]}},circleLoop:{type:Boolean,defalut:!1},barrageHeight:{type:Number,default:34},borderColor:{type:String,default:""},background:{type:String,default:""},linearGradient:{type:Object,default:function(){return{startColor:"",endColor:""}}},fontSize:{type:[Number],default:18},channelGap:{type:[Number],default:20},paddingTop:{type:[Number],default:10},borderWidth:{type:[Number],default:1},iconTextDistance:{type:[Number],default:2},barrageGap:{type:Number,default:10},iconR:{type:[Number],default:10}},data:function(){return{ctx:null,ctx1:null,barrageList:[],newBarrageArray:[],barrageArray:[],barrageQueue:[],containerWidth:0,containerHeight:0,channelsArray:[],barrageChannels:1,running:!1}},computed:{canvasRealWidth:function(){return(this.canvasDisplayWidth||this.containerWidth)*this.scale},canvasRealHeight:function(){return(this.canvasDisplayHeight||this.containerHeight)*this.scale},realChannelGap:function(){return this.channelGap*this.scale},realPaddingTop:function(){return this.paddingTop*this.scale},realBorderWidth:function(){return this.borderWidth*this.scale},halfBorderWidth:function(){return this.realBorderWidth/2},realIconTextDistance:function(){return this.iconTextDistance*this.scale},realBarrageHeight:function(){return this.barrageHeight*this.scale},realBarrageGap:function(){return this.barrageGap*this.scale},minChannelDelayIndex:function(){var t=this;return this.channelsDelay.reduce((function(r,e,a){return e<=t.channelsDelay[r]?a:r}),0)},barrageInitX:function(){return this.canvasRealWidth+this.radius+this.realBarrageGap},realFontSize:function(){return this.fontSize*this.scale},font:function(){return"".concat(this.realFontSize,"px PingFangSC-Regular")},diameter:function(){return this.realBarrageHeight},radius:function(){return this.diameter/2},realSpeed:function(){return this.speed*this.scale}},mounted:function(){this.init()},methods:{init:function(){this.containerWidth=this.$refs.container.clientWidth,this.containerHeight=this.$refs.container.clientHeight;var t=Math.floor((this.canvasRealHeight-this.realPaddingTop)/(this.realBarrageHeight+this.realChannelGap));this.barrageChannels=this.channels?t<this.channels?t:this.channels:t,this.ctx=this.$refs.canvas.getContext("2d"),this.ctx1=this.$refs.canvasMeasure.getContext("2d"),this.barrageClickEvent()},setBarrageList:function(t){this.barrageList=t,this.barrageQueue=JSON.parse(JSON.stringify(t)),this.newBarrageArray=JSON.parse(JSON.stringify(t)),this.initData()},measureText:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return this.ctx1.font=this.font,this.ctx1.measureText(t)},modifyBarrageCountById:function(t){for(var r,e,a=t.id,n=0;n<this.newBarrageArray.length;n++)if(this.newBarrageArray[n].id===a){this.newBarrageArray[n].count++;var i=this.calcBarrageWidth(this.newBarrageArray[n]);r=i.width,e=i.contentWidth,this.newBarrageArray[n].width=r,this.newBarrageArray[n].contentWidth=e;break}for(var s=0;s<this.barrageArray.length;s++)if(this.barrageArray[s].id===a){this.barrageArray[s].width=r,this.barrageArray[s].contentWidth=e,this.barrageArray[s].count++;break}for(var o=0;o<this.channelsArray.length;o++){for(var h=!1,c=0;c<this.channelsArray[o].length;c++)if(this.channelsArray[o][c].id===a){this.channelsArray[o][c].width=r,this.channelsArray[o][c].contentWidth=e,this.channelsArray[o][c].count++,h=!0;break}if(h)break}},calcBarrageWidth:function(t){var r=this.measureText(t.content).width,e=0;return t.count&&(e=this.measureText(" ".concat("×").concat(t.count)).width),{width:r+(t.icon?2*t.iconR+this.realIconTextDistance:0)+e,contentWidth:r}},calcBarrageInfo:function(t){var r=this.dealStr(t.content),e=null;return t.icon&&((e=new Image).src=t.icon,t.iconR=(t.iconR||this.iconR)*this.scale),i(i(i({},t),{},{id:t.id,content:r,x:this.barrageInitX,icon:t.icon?e:"",iconR:t.iconR},this.calcBarrageWidth(t)),{},{color:t.color||"#FFFFFF",bgColor:t.bgColor||"rgba(0,0,0,0.4)",borderColor:t.borderColor,count:t.count,countColor:t.countColor})},initData:function(){for(var t=0;t<this.barrageQueue.length;t++)this.barrageArray.push(this.calcBarrageInfo(this.barrageQueue[t]));this.initChannel()},initChannel:function(){for(var t=0;t<this.barrageChannels;t++){var r=this.barrageArray.shift();this.channelsArray[t]=r?[r]:[]}},start:function(){this.running||(this.running=!0,window.requestAnimationFrame(this.render))},stop:function(){this.running=!1},render:function(){this.running&&(this.ctx.clearRect(0,0,this.canvasRealWidth,this.canvasRealHeight),this.ctx.font=this.font,this.draw(),window.requestAnimationFrame(this.render))},getChannelDelay:function(t){return this.channelsDelay[t]||0},canStart:function(t){var r=this.getChannelDelay(t),e=this.minChannelDelayIndex;if(e===t)return!0;if(this.channelsArray[e][0]){var a=this.channelsArray[e][0].x,n=this.channelsArray[t][0].x;return n<this.barrageInitX||n-a>=r}return!0},draw:function(){for(var t=0;t<this.channelsArray.length;t++){for(var r=this.channelsArray[t],e=r[0];e&&this.isBarrageOutOfScreen(e);){if(r.shift(),this.loop)if(this.circleLoop)e.x=this.barrageInitX,this.barrageArray.push(e);else if(0===this.barrageArray.length&&this.isChannelsArrayEmpty())return this.barrageQueue=[],this.barrageQueue=JSON.parse(JSON.stringify(this.newBarrageArray)),void this.initData();e=r[0]}var a=r[r.length-1];if(a){if(0!==this.barrageArray.length&&a.x-this.realSpeed<=this.canvasRealWidth-a.width-this.radius){var n=this.barrageArray.shift();n.x=a.x+a.width+this.diameter+this.realBarrageGap,this.barrageInitX>n.x&&(n.x=this.barrageInitX),r.push(n)}}else{var i=this.barrageArray.shift();i&&r.push(i)}for(var s=0;s<r.length;s++)try{if(0===s&&!this.canStart(t))break;var o=r[s];this.drawRoundRect(this.ctx,o.bgColor,o.x-this.radius,t*(this.realBarrageHeight+this.realChannelGap)+this.realPaddingTop,o.width+this.diameter,this.realBarrageHeight,this.radius),(o.borderColor||this.borderColor)&&this.drawRoundRectBorder(this.ctx,o.x-this.radius+this.halfBorderWidth,this.realPaddingTop+t*(this.realBarrageHeight+this.realChannelGap)+this.halfBorderWidth,o.width+this.diameter-2*this.halfBorderWidth,this.realBarrageHeight-2*this.halfBorderWidth,this.radius-this.halfBorderWidth,o.borderColor||this.borderColor),this.ctx.fillStyle="".concat(o.color),this.ctx.fillText(o.content,o.x+(o.icon?2*o.iconR+this.realIconTextDistance:0),t*(this.realBarrageHeight+this.realChannelGap)+this.realPaddingTop+(this.realBarrageHeight-this.realFontSize)/2+this.realFontSize/6*5),this.ctx.fillStyle="".concat(o.countColor||o.color),o.count&&this.ctx.fillText(" ".concat("×").concat(o.count),o.x+(o.icon?2*o.iconR+this.realIconTextDistance:0)+o.contentWidth,t*(this.realBarrageHeight+this.realChannelGap)+this.realPaddingTop+(this.realBarrageHeight-this.realFontSize)/2+this.realFontSize/6*5),o.icon&&this.circleImg(this.ctx,o.icon,o.x-o.iconR,t*(this.realBarrageHeight+this.realChannelGap)+this.realPaddingTop+this.realBarrageHeight/2,o.iconR),o.x-=this.realSpeed}catch(t){console.log(t)}}},add:function(t){var r=this.calcBarrageInfo(t),e=i({},r);if(0===this.barrageArray.length)this.newBarrageArray.unshift(e);else{this.barrageArray.unshift(r);var a=this.barrageList.length-this.barrageArray.length;this.newBarrageArray.splice(a,0,e)}},barrageClickEvent:function(){var t=this;document.getElementById("canvas").addEventListener("click",(function(r){console.log(r);var e=t.getEventPosition(r),a=Math.ceil((e.y-t.realPaddingTop)/(t.realBarrageHeight+t.realChannelGap))-1;if(t.channelsArray.length>a&&e.y-(t.realBarrageHeight+t.realChannelGap)*a-t.realPaddingTop<=t.realBarrageHeight)for(var n=JSON.parse(JSON.stringify(t.channelsArray[a])),i=0;i<n.length;i++){var s=n[i];if(t.isPointInBarrage(e,s,a)){s.id&&t.$emit("doLike",s);break}}}),!1)},isPointInBarrage:function(t,r,e){var a=t.x,n=t.y,i=r.x+r.width,s=this.realPaddingTop+e*(this.realBarrageHeight+this.realChannelGap)+this.realBarrageHeight/2;return a>=r.x&&a<=i||this.isPointInCircle({x:a,y:n},{cX:r.x,cY:s},this.radius)||this.isPointInCircle({x:a,y:n},{cX:i,cY:s},this.radius)},isPointInCircle:function(t,r,e){var a=t.x,n=t.y,i=r.cX,s=r.cY;return e>=Math.sqrt((a-i)*(a-i)+(n-s)*(n-s))},getEventPosition:function(t){var r,e;return t.layerX||0===t.layerX?(r=t.layerX,e=t.layerY):(t.offsetX||0===t.offsetX)&&(r=t.offsetX,e=t.offsetY),{x:this.scale*r,y:this.scale*e}},isBarrageOutOfScreen:function(t){return t.x<=-(t.width+this.diameter)},isChannelsArrayEmpty:function(){return 0===this.channelsArray.reduce((function(t,r){return t.concat(r)})).length},checkBarrageStatus:function(t){for(var r=0;r<t.length;r++)if(t[r].x>-t[r].width)return!1;return!0},dealStr:function(t){return t.length>50?"".concat(t.substring(0,50),"..."):t},getColor:function(){return"#".concat(Math.floor(16777215*Math.random()).toString(16))},circleImg:function(t,r,e,a,n){t.save();var i=2*n,s=i;t.beginPath(),t.drawImage(r,e+n,a-n,i,s),t.restore(),t.closePath()},originImg:function(t,r,e,a,n,i){try{t.beginPath(),t.drawImage(r,e,a,n,i),t.closePath()}catch(t){console.log(t)}},drawRoundRect:function(t,r,e,a,n,i,s){if(this.linearGradient.startColor&&this.linearGradient.endColor){var o=t.createLinearGradient(e,a,e,a+i);o.addColorStop(0,this.linearGradient.startColor),o.addColorStop(1,this.linearGradient.endColor),t.fillStyle=o||r}else t.fillStyle=this.background||r;t.beginPath(),t.arc(e+s,a+s,s,Math.PI,3*Math.PI/2),t.lineTo(n-s+e,a),t.arc(n-s+e,s+a,s,3*Math.PI/2,2*Math.PI),t.lineTo(n+e,i+a-s),t.arc(n-s+e,i-s+a,s,0,Math.PI/2),t.lineTo(s+e,i+a),t.arc(s+e,i-s+a,s,Math.PI/2,Math.PI),t.fill(),t.closePath()},drawRoundRectBorder:function(t,r,e,a,n,i,s){t.beginPath(),t.lineWidth=this.realBorderWidth,t.strokeStyle=s,t.arc(r+i,e+i,i,Math.PI,3*Math.PI/2),t.lineTo(a-i+r,e),t.arc(a-i+r,i+e,i,3*Math.PI/2,2*Math.PI),t.lineTo(a+r,n+e-i),t.arc(a-i+r,n-i+e,i,0,Math.PI/2),t.lineTo(i+r,n+e),t.arc(i+r,n-i+e,i,Math.PI/2,Math.PI),t.stroke(),t.closePath()}}},o=(e(421),e(57)),h=Object(o.a)(s,(function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("div",{ref:"container",staticClass:"z_barrage-container"},[e("canvas",{ref:"canvasMeasure",staticStyle:{display:"none"},attrs:{width:t.canvasRealWidth,height:t.canvasRealHeight}}),t._v(" "),e("div",{staticClass:"z_container"},[e("canvas",{ref:"canvas",staticClass:"z_barrage",style:{width:t.canvasDisplayWidth||t.containerWidth+"px",height:t.canvasDisplayHeight||t.containerHeight+"px"},attrs:{id:"canvas",width:t.canvasRealWidth,height:t.canvasRealHeight}})])])}),[],!1,null,"27f3b45a",null).exports;h.install=function(t){t.component(h.name,h)};var c={name:"Barrage",components:{barrage:h},data:function(){return{barrageList:[]}},methods:{getBarrageList:function(){for(var t=[],r=0;r<4;r++)t.push({id:r,count:10,content:"啦啦啦啦"+r,color:"#fff",bgColor:"#000",borderColor:"yellow",icon:e(422),iconR:10});return t},handleStart:function(){this.$refs.barrage&&this.$refs.barrage.start(),console.log(this.barrageList)},handleStop:function(){this.$refs.barrage&&this.$refs.barrage.stop()},handleDoLike:function(t){this.handleStop(),console.log(t,t.id)}},mounted:function(){this.$refs.barrage&&this.$refs.barrage.setBarrageList(this.getBarrageList())}},l=(e(423),Object(o.a)(c,(function(){var t=this.$createElement,r=this._self._c||t;return r("div",[r("barrage",{ref:"barrage",staticClass:"barrageExample",attrs:{circleLoop:!0,speed:2,barrageGap:20,channelsDelay:[100,0,200,300],borderWidth:2},on:{doLike:this.handleDoLike}}),this._v(" "),r("button",{on:{click:this.handleStart}},[this._v("开始")]),this._v(" "),r("button",{on:{click:this.handleStop}},[this._v("停止")])],1)}),[],!1,null,"1c68bef9",null));r.default=l.exports}}]);