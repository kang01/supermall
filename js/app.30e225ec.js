(function(t){function e(e){for(var r,i,c=e[0],s=e[1],u=e[2],l=0,f=[];l<c.length;l++)i=c[l],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&f.push(o[i][0]),o[i]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(t[r]=s[r]);p&&p(e);while(f.length)f.shift()();return a.push.apply(a,u||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],r=!0,i=1;i<n.length;i++){var c=n[i];0!==o[c]&&(r=!1)}r&&(a.splice(e--,1),t=s(s.s=n[0]))}return t}var r={},i={app:0},o={app:0},a=[];function c(t){return s.p+"js/"+({}[t]||t)+"."+{"chunk-2d0c4643":"33560b53","chunk-2d2163ab":"0bf347d7","chunk-61a21686":"fef59b1b","chunk-380f4264":"e2a15b5f","chunk-4bef68b5":"d69c2eed"}[t]+".js"}function s(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(t){var e=[],n={"chunk-380f4264":1,"chunk-4bef68b5":1};i[t]?e.push(i[t]):0!==i[t]&&n[t]&&e.push(i[t]=new Promise((function(e,n){for(var r="css/"+({}[t]||t)+"."+{"chunk-2d0c4643":"31d6cfe0","chunk-2d2163ab":"31d6cfe0","chunk-61a21686":"31d6cfe0","chunk-380f4264":"1834d51d","chunk-4bef68b5":"462f02ad"}[t]+".css",o=s.p+r,a=document.getElementsByTagName("link"),c=0;c<a.length;c++){var u=a[c],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===r||l===o))return e()}var f=document.getElementsByTagName("style");for(c=0;c<f.length;c++){u=f[c],l=u.getAttribute("data-href");if(l===r||l===o)return e()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=e,p.onerror=function(e){var r=e&&e.target&&e.target.src||o,a=new Error("Loading CSS chunk "+t+" failed.\n("+r+")");a.code="CSS_CHUNK_LOAD_FAILED",a.request=r,delete i[t],p.parentNode.removeChild(p),n(a)},p.href=o;var d=document.getElementsByTagName("head")[0];d.appendChild(p)})).then((function(){i[t]=0})));var r=o[t];if(0!==r)if(r)e.push(r[2]);else{var a=new Promise((function(e,n){r=o[t]=[e,n]}));e.push(r[2]=a);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=c(t);var f=new Error;u=function(e){l.onerror=l.onload=null,clearTimeout(p);var n=o[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),i=e&&e.target&&e.target.src;f.message="Loading chunk "+t+" failed.\n("+r+": "+i+")",f.name="ChunkLoadError",f.type=r,f.request=i,n[1](f)}o[t]=void 0}};var p=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(e)},s.m=t,s.c=r,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)s.d(n,r,function(e){return t[e]}.bind(null,r));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/",s.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=e,u=u.slice();for(var f=0;f<u.length;f++)e(u[f]);var p=l;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var r=n("64a9"),i=n.n(r);i.a},1420:function(t,e,n){"use strict";var r=n("2d87"),i=n.n(r);i.a},"2d87":function(t,e,n){},"4dea":function(t,e,n){t.exports=n.p+"img/me-active.005826c6.svg"},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var r=n("2b0e"),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view"),n("main-tab-bar")],1)},o=[],a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("tab-bar",[r("tab-bar-item",{attrs:{path:"/home",activeColor:"red"}},[r("img",{attrs:{slot:"item-icon",src:n("9443"),alt:"",srcset:""},slot:"item-icon"}),r("img",{attrs:{slot:"item-icon-active",src:n("62de"),alt:"",srcset:""},slot:"item-icon-active"}),r("div",{attrs:{slot:"item-text"},slot:"item-text"},[t._v("首页")])]),r("tab-bar-item",{attrs:{path:"/category",activeColor:"blue"}},[r("img",{attrs:{slot:"item-icon",src:n("57cd"),alt:"",srcset:""},slot:"item-icon"}),r("img",{attrs:{slot:"item-icon-active",src:n("672b"),alt:"",srcset:""},slot:"item-icon-active"}),r("div",{attrs:{slot:"item-text"},slot:"item-text"},[t._v("分类")])]),r("tab-bar-item",{attrs:{path:"/cart",activeColor:"blue"}},[r("img",{attrs:{slot:"item-icon",src:n("d1c9"),alt:"",srcset:""},slot:"item-icon"}),r("img",{attrs:{slot:"item-icon-active",src:n("972e"),alt:"",srcset:""},slot:"item-icon-active"}),r("div",{attrs:{slot:"item-text"},slot:"item-text"},[t._v("购物车")])]),r("tab-bar-item",{attrs:{path:"/profile"}},[r("img",{attrs:{slot:"item-icon",src:n("fb1e"),alt:"",srcset:""},slot:"item-icon"}),r("img",{attrs:{slot:"item-icon-active",src:n("4dea"),alt:"",srcset:""},slot:"item-icon-active"}),r("div",{attrs:{slot:"item-text"},slot:"item-text"},[t._v("我的")])])],1)],1)},c=[],s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"tab-bar"}},[t._t("default")],2)},u=[],l={name:""},f=l,p=(n("1420"),n("2877")),d=Object(p["a"])(f,s,u,!1,null,"4b3ebf29",null),m=d.exports,h=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"tab-bar-item",on:{click:t.itemClick}},[t.isActive?n("div",[t._t("item-icon-active")],2):n("div",[t._t("item-icon")],2),n("div",{style:t.activeStyle},[t._t("item-text")],2)])},b=[],v=(n("a481"),{name:"",props:{path:String,activeColor:{type:String,default:"#d4237a"}},data:function(){return{}},computed:{isActive:function(){return-1!==this.$route.path.indexOf(this.path)},activeStyle:function(){return this.isActive?{color:this.activeColor}:{}}},methods:{itemClick:function(){-1===this.$route.path.indexOf(this.path)&&this.$router.replace(this.path)}}}),g=v,y=(n("911b"),Object(p["a"])(g,h,b,!1,null,"11fb6ed5",null)),x=y.exports,k={name:"MainTabBar",components:{TabBar:m,TabBarItem:x}},_=k,w=Object(p["a"])(_,a,c,!1,null,"42798d92",null),O=w.exports,j={name:"app",components:{MainTabBar:O}},C=j,E=(n("034f"),Object(p["a"])(C,i,o,!1,null,null,null)),S=E.exports,P=n("8c4f"),T=function(){return Promise.all([n.e("chunk-61a21686"),n.e("chunk-4bef68b5")]).then(n.bind(null,"b3d7"))},A=function(){return Promise.all([n.e("chunk-61a21686"),n.e("chunk-380f4264")]).then(n.bind(null,"bb51"))},$=function(){return n.e("chunk-2d2163ab").then(n.bind(null,"c228"))},B=function(){return n.e("chunk-2d0c4643").then(n.bind(null,"3b42"))};r["a"].use(P["a"]);var M=[{path:"/home",component:T},{path:"/category",component:A},{path:"/cart",component:$},{path:"/profile",component:B}],L=new P["a"]({routes:M,mode:"history"}),N=L;r["a"].config.productionTip=!1,r["a"].prototype.$bus=new r["a"],new r["a"]({render:function(t){return t(S)},router:N}).$mount("#app")},"57cd":function(t,e,n){t.exports=n.p+"img/category.fea177be.svg"},"62de":function(t,e,n){t.exports=n.p+"img/home-active.7b6e022d.svg"},"64a9":function(t,e,n){},"672b":function(t,e,n){t.exports=n.p+"img/category-active.b3403b8e.svg"},"911b":function(t,e,n){"use strict";var r=n("f7f1"),i=n.n(r);i.a},9443:function(t,e,n){t.exports=n.p+"img/home.ff9b381b.svg"},"972e":function(t,e,n){t.exports=n.p+"img/cart-active.53cc3d2e.svg"},d1c9:function(t,e,n){t.exports=n.p+"img/cart.8e49e8fe.svg"},f7f1:function(t,e,n){},fb1e:function(t,e,n){t.exports=n.p+"img/me.5b974d95.svg"}});
//# sourceMappingURL=app.30e225ec.js.map