(function(t){function e(e){for(var n,i,s=e[0],c=e[1],l=e[2],u=0,v=[];u<s.length;u++)i=s[u],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&v.push(a[i][0]),a[i]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);p&&p(e);while(v.length)v.shift()();return o.push.apply(o,l||[]),r()}function r(){for(var t,e=0;e<o.length;e++){for(var r=o[e],n=!0,i=1;i<r.length;i++){var c=r[i];0!==a[c]&&(n=!1)}n&&(o.splice(e--,1),t=s(s.s=r[0]))}return t}var n={},a={app:0},o=[];function i(t){return s.p+"js/"+({about:"about"}[t]||t)+"."+{about:"bcf447b0"}[t]+".js"}function s(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,s),r.l=!0,r.exports}s.e=function(t){var e=[],r=a[t];if(0!==r)if(r)e.push(r[2]);else{var n=new Promise((function(e,n){r=a[t]=[e,n]}));e.push(r[2]=n);var o,c=document.createElement("script");c.charset="utf-8",c.timeout=120,s.nc&&c.setAttribute("nonce",s.nc),c.src=i(t);var l=new Error;o=function(e){c.onerror=c.onload=null,clearTimeout(u);var r=a[t];if(0!==r){if(r){var n=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src;l.message="Loading chunk "+t+" failed.\n("+n+": "+o+")",l.name="ChunkLoadError",l.type=n,l.request=o,r[1](l)}a[t]=void 0}};var u=setTimeout((function(){o({type:"timeout",target:c})}),12e4);c.onerror=c.onload=o,document.head.appendChild(c)}return Promise.all(e)},s.m=t,s.c=n,s.d=function(t,e,r){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(s.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)s.d(r,n,function(e){return t[e]}.bind(null,n));return r},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/",s.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=e,c=c.slice();for(var u=0;u<c.length;u++)e(c[u]);var p=l;o.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"034f":function(t,e,r){"use strict";r("85ec")},"56d7":function(t,e,r){"use strict";r.r(e);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-app",[r("v-app-bar",{attrs:{app:"",dark:""}},[r("h2",[t._v("NTPUSU Survey")]),r("v-spacer")],1),r("v-main",[r("div",{attrs:{id:"router"}},[r("router-view")],1)]),r("v-footer",{staticClass:"font-weight-medium",attrs:{padless:""}},[r("v-col",{staticClass:"text-center",staticStyle:{"font-size":"14px"},attrs:{cols:"12"}},[t._v(" © 2019 - "+t._s((new Date).getFullYear())+" Copyright "),r("a",{attrs:{href:"https://littlechin.tw"}},[t._v("littlechin.tw")]),t._v(". All rights reserved. ")])],1)],1)},o=[],i={name:"App",components:{},data:function(){return{}}},s=i,c=(r("034f"),r("2877")),l=r("6544"),u=r.n(l),p=r("7496"),v=r("40dc"),d=r("62ad"),f=r("553a"),m=r("f6c4"),h=r("2fa4"),b=Object(c["a"])(s,a,o,!1,null,null,null),y=b.exports;u()(b,{VApp:p["a"],VAppBar:v["a"],VCol:d["a"],VFooter:f["a"],VMain:m["a"],VSpacer:h["a"]});r("d3b7"),r("3ca3"),r("ddb0");var g=r("8c4f"),_=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"home"},[r("v-card"),r("Description")],1)},w=[],S=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("h1",[t._v("操作說明")]),r("v-divider"),r("br"),r("v-stepper",{model:{value:t.e1,callback:function(e){t.e1=e},expression:"e1"}},[r("v-stepper-header",[r("v-stepper-step",{attrs:{complete:t.e1>1,step:"1"}},[t._v(" 輸入學號 ")]),r("v-divider"),r("v-stepper-step",{attrs:{complete:t.e1>2,step:"2"}},[t._v(" 複製專屬代碼 ")]),r("v-divider"),r("v-stepper-step",{attrs:{step:"3"}},[t._v(" 做出選擇 ")])],1),r("v-stepper-items",[r("v-stepper-content",{attrs:{step:"1"}},[r("v-card",{staticClass:"mb-12 mx-auto",attrs:{color:"grey lighten-2"}},[r("v-list-item",{attrs:{"three-line":""}},[r("v-list-item-content",[r("v-list-item-title",{staticClass:"headline mb-1"},[t._v(" 輸入學號 ")])],1)],1),r("v-container",{staticStyle:{"text-align":"center"},attrs:{fluid:""}},[r("p",[t._v(" 在輸入框輸入學號，將會於您的 "),r("strong",[t._v("s{StudentID} [at] webmail.ntpu.edu.tw")]),t._v(" 信箱內收到專屬代碼信件，如無收到，請在垃圾信件找尋。 ")])])],1),r("v-btn",{attrs:{color:"primary"},on:{click:function(e){t.e1=2}}},[t._v(" 下一步 ")]),r("v-btn",{attrs:{color:"grey lighten-2",href:"https://webmail.ntpu.edu.tw/indexi.html",target:"_blank"}},[r("v-icon",{attrs:{left:""}},[t._v(" mdi-mail ")]),t._v("北大信件系統 ")],1)],1),r("v-stepper-content",{attrs:{step:"2"}},[r("v-card",{staticClass:"mb-12 mx-auto",attrs:{color:"grey lighten-2"}},[r("v-list-item",{attrs:{"three-line":""}},[r("v-list-item-content",[r("v-list-item-title",{staticClass:"headline mb-1"},[t._v(" 複製專屬代碼 ")])],1)],1),r("v-container",{staticStyle:{"text-align":"center"},attrs:{fluid:""}},[r("p",[t._v("複製信箱內的專屬代碼，並將代碼於代碼輸入欄內貼上。")])])],1),r("v-btn",{attrs:{color:"primary"},on:{click:function(e){t.e1=3}}},[t._v(" 下一步 ")])],1),r("v-stepper-content",{attrs:{step:"3"}},[r("v-card",{staticClass:"mb-12 mx-auto",attrs:{color:"grey lighten-2"}},[r("v-list-item",{attrs:{"three-line":""}},[r("v-list-item-content",[r("v-list-item-title",{staticClass:"headline mb-1"},[t._v(" 做出選擇 ")])],1)],1),r("v-container",{staticStyle:{"text-align":"center"},attrs:{fluid:""}},[r("p",[t._v("選擇心中理想的答案吧！")])])],1),r("v-btn",{attrs:{color:"primary"},on:{click:function(e){t.e1=1}}},[t._v(" 下一步 ")])],1)],1)],1)],1)},V=[],x={name:"Description",data:function(){return{e1:1}}},C=x,j=r("8336"),O=r("b0af"),k=r("a523"),P=r("ce7e"),T=r("132d"),A=r("da13"),D=r("5d23"),E=r("7e85"),I=r("e516"),L=r("9c54"),M=r("56a4"),$=Object(c["a"])(C,S,V,!1,null,null,null),H=$.exports;u()($,{VBtn:j["a"],VCard:O["a"],VContainer:k["a"],VDivider:P["a"],VIcon:T["a"],VListItem:A["a"],VListItemContent:D["a"],VListItemTitle:D["b"],VStepper:E["a"],VStepperContent:I["a"],VStepperHeader:L["a"],VStepperItems:L["b"],VStepperStep:M["a"]});var B={name:"Home",components:{Description:H},data:function(){return{}}},F=B,J=Object(c["a"])(F,_,w,!1,null,null,null),U=J.exports;u()(J,{VCard:O["a"]}),n["a"].use(g["a"]);var q=[{path:"/",name:"Home",component:U},{path:"/about",name:"About",component:function(){return r.e("about").then(r.bind(null,"f820"))}}],z=new g["a"]({mode:"history",base:"/",routes:q}),N=z,Y=r("2f62");n["a"].use(Y["a"]);var G=new Y["a"].Store({state:{},mutations:{},actions:{},modules:{}}),K=r("f309");n["a"].use(K["a"]);var Q=new K["a"]({});n["a"].config.productionTip=!1,new n["a"]({router:N,store:G,vuetify:Q,render:function(t){return t(y)}}).$mount("#app")},"85ec":function(t,e,r){}});
//# sourceMappingURL=app.0aba721b.js.map