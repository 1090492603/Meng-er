(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/person/person"],{"319d":function(t,e,i){"use strict";(function(t,i){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={data:function(){return{modalName:"",sCur:"works",current:0,worksCur:"video",height:0,isShow:!1,videoList:[{img:"url(../../static/img/tou1.jpg)",id:"123"},{img:"url(../../static/img/tou8.jpg)",id:"234"},{img:"url(https://gss0.bdstatic.com/94o3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike92%2C5%2C5%2C92%2C30/sign=36482708336d55fbd1cb7e740c4b242f/9825bc315c6034a84e00f357c513495408237601.jpg)",id:"543"},{img:"url(../../static/img/tou3.jpg)",id:"435"},{img:"url(../../static/img/tou4.jpg)",id:"532"},{img:"url(../../static/img/tou8.jpg)",id:"aawer"},{img:"url(../../static/img/tou6.jpg)",id:"rewd1"},{img:"url(../../static/img/tou4.jpg)",id:"43gas"},{img:"url(../../static/img/tou7.jpg)",id:"312arf"}]}},created:function(){this.getHeight()},methods:{change:function(t){this.sCur=t.target.dataset.cur,"works"==this.sCur?this.current=0:"trends"==this.sCur?this.current=1:"collect"==this.sCur&&(this.current=2)},getHeight:function(){var e=this;t.getSystemInfo({success:function(t){e.height=t.windowHeight}})},currentChange:function(t){0==t.target.current?this.sCur="works":1==t.target.current?this.sCur="trends":2==t.target.current&&(this.sCur="collect")},worksChange:function(t){this.worksCur=t.target.dataset.cur},goBack:function(e){t.navigateBack({delta:1})},goTo:function(t){plus.runtime.openWeb("https://mp.weixin.qq.com/s?__biz=MzU2ODczNjM5OA==&mid=2247484098&idx=1&sn=d8956f674b5500949e555ac3c5c47f38&chksm=fc882d23cbffa4354dbd35532ef025104d4b92ab4398b1de2e50840400bd30823c42cc7907d7&scene=0&xtrack=1&key=54e46c2d26bbf657666da8f476998d386a29f74669379da6486d632a78369e543fe58438101151468a90f18ef57c916e97a43e0f2de8ee3dbc7d980de6cbd55da5326e981b7c026d504de4e5bf0c9f2c&ascene=1&uin=MTE0NjU5MDA3MQ%3D%3D&devicetype=Windows+10&version=62060833&lang=zh_CN&pass_ticket=MKJYDBpvtvKopAKB3BA24PaCsQ5GeTth0nDPGTOwl2jH5jCNKmtMZstHsTN1B7wu")},showModal:function(t){this.modalName="DrawerModalR"},hideModal:function(t){this.modalName=null},IsShowDra:function(t){this.isShow=!this.isShow,console.log(i("123"," at pages\\person\\person.vue:326"))},play:function(e){var i=getCurrentPages();i[0].$vm.id=e,t.navigateBack({delta:1})}}};e.default=n}).call(this,i("6e42")["default"],i("0de9")["default"])},"38a0":function(t,e,i){"use strict";i.r(e);var n=i("319d"),a=i.n(n);for(var c in n)"default"!==c&&function(t){i.d(e,t,function(){return n[t]})}(c);e["default"]=a.a},"4ca6":function(t,e,i){"use strict";i.r(e);var n=i("f2fc"),a=i("38a0");for(var c in a)"default"!==c&&function(t){i.d(e,t,function(){return a[t]})}(c);i("802b");var r=i("2877"),u=Object(r["a"])(a["default"],n["a"],n["b"],!1,null,null,null);e["default"]=u.exports},"534a":function(t,e,i){"use strict";(function(t){i("8b92"),i("921b");n(i("66fd"));var e=n(i("4ca6"));function n(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,i("6e42")["createPage"])},"802b":function(t,e,i){"use strict";var n=i("e0d1"),a=i.n(n);a.a},e0d1:function(t,e,i){},f2fc:function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement;t._self._c},a=[];i.d(e,"a",function(){return n}),i.d(e,"b",function(){return a})}},[["534a","common/runtime","common/vendor"]]]);