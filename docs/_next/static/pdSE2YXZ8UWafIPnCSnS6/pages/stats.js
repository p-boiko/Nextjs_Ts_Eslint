(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"+6XX":function(t,n,r){var e=r("y1pI");t.exports=function(t){return e(this.__data__,t)>-1}},"+aWK":function(t,n,r){"use strict";r.r(n);var e=r("qKvR"),o=(r("q1tI"),r("/MKj")),i=r("mwIZ"),u=r.n(i),c=r("ntF4"),a=r("8Rtz"),s=r("jOE4"),f=r("zrwo"),p=r("sLDa"),l={stats:-3},v=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case p.a.ADD:return Object(f.a)({},t,{stats:t.stats+n.payload});case p.a.MINUS:return Object(f.a)({},t,{stats:t.stats-n.payload});default:return t}},h=r("7zJJ");r.d(n,"Page",function(){return d});var d=function(t){var n=t.numstats,r=t.minus5,o=t.add8;return Object(e.b)("main",null,Object(e.b)(c.a,{title:"Nextjs Typescript Eslint testing",themeColor:"red",hrefPage:"/stats",favIconPath:"/static/icons/favicon.ico",appleIconPath:"/static/icons/icon192x192.png",hrefManifest:"/static/manifest/manifest.json"}),Object(e.b)("span",null,"This is stats"),Object(e.b)("div",null,"Number is ".concat(n)),Object(e.b)("button",{type:"button",onClick:o},"add 8"),Object(e.b)("button",{type:"button",onClick:r},"minus 5"),Object(e.b)(a.a,{href:"/",prefetch:!1},Object(e.b)("a",null,"index")))},y=Object(o.c)(function(t){return{numstats:u()(t,"stats.stats",0)}},function(t){return{add8:function(){return t(Object(h.a)(8))},minus5:function(){return t(Object(h.b)(5))}}})(d);n.default=Object(s.a)({reducers:{stats:v},Child:y})},"/9aa":function(t,n,r){var e=r("NykK"),o=r("ExA7"),i="[object Symbol]";t.exports=function(t){return"symbol"==typeof t||o(t)&&e(t)==i}},"2gN3":function(t,n,r){var e=r("Kz5y")["__core-js_shared__"];t.exports=e},"3Fdi":function(t,n){var r=Function.prototype.toString;t.exports=function(t){if(null!=t){try{return r.call(t)}catch(n){}try{return t+""}catch(n){}}return""}},"44Ds":function(t,n,r){var e=r("e4Nc"),o="Expected a function";function i(t,n){if("function"!=typeof t||null!=n&&"function"!=typeof n)throw new TypeError(o);var r=function(){var e=arguments,o=n?n.apply(this,e):e[0],i=r.cache;if(i.has(o))return i.get(o);var u=t.apply(this,e);return r.cache=i.set(o,u)||i,u};return r.cache=new(i.Cache||e),r}i.Cache=e,t.exports=i},"4kuk":function(t,n,r){var e=r("SfRM"),o=r("Hvzi"),i=r("u8Dt"),u=r("ekgI"),c=r("JSQU");function a(t){var n=-1,r=null==t?0:t.length;for(this.clear();++n<r;){var e=t[n];this.set(e[0],e[1])}}a.prototype.clear=e,a.prototype.delete=o,a.prototype.get=i,a.prototype.has=u,a.prototype.set=c,t.exports=a},"4uTw":function(t,n,r){var e=r("Z0cm"),o=r("9ggG"),i=r("GNiM"),u=r("dt0z");t.exports=function(t,n){return e(t)?t:o(t,n)?[t]:i(u(t))}},"7zJJ":function(t,n,r){"use strict";r.d(n,"a",function(){return o}),r.d(n,"b",function(){return i});var e=r("sLDa"),o=function(t){return{type:e.a.ADD,payload:t}},i=function(t){return{type:e.a.MINUS,payload:t}}},"9Nap":function(t,n,r){var e=r("/9aa"),o=1/0;t.exports=function(t){if("string"==typeof t||e(t))return t;var n=t+"";return"0"==n&&1/t==-o?"-0":n}},"9ggG":function(t,n,r){var e=r("Z0cm"),o=r("/9aa"),i=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,u=/^\w*$/;t.exports=function(t,n){if(e(t))return!1;var r=typeof t;return!("number"!=r&&"symbol"!=r&&"boolean"!=r&&null!=t&&!o(t))||u.test(t)||!i.test(t)||null!=n&&t in Object(n)}},AP2z:function(t,n,r){var e=r("nmnc"),o=Object.prototype,i=o.hasOwnProperty,u=o.toString,c=e?e.toStringTag:void 0;t.exports=function(t){var n=i.call(t,c),r=t[c];try{t[c]=void 0;var e=!0}catch(a){}var o=u.call(t);return e&&(n?t[c]=r:delete t[c]),o}},BnGh:function(t,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/stats",function(){var t=r("+aWK");return{page:t.default||t}}])},Cwc5:function(t,n,r){var e=r("NKxu"),o=r("Npjl");t.exports=function(t,n){var r=o(t,n);return e(r)?r:void 0}},E2jh:function(t,n,r){var e=r("2gN3"),o=function(){var t=/[^.]+$/.exec(e&&e.keys&&e.keys.IE_PROTO||"");return t?"Symbol(src)_1."+t:""}();t.exports=function(t){return!!o&&o in t}},EpBk:function(t,n){t.exports=function(t){var n=typeof t;return"string"==n||"number"==n||"symbol"==n||"boolean"==n?"__proto__"!==t:null===t}},ExA7:function(t,n){t.exports=function(t){return null!=t&&"object"==typeof t}},GNiM:function(t,n,r){var e=r("I01J"),o=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,i=/\\(\\)?/g,u=e(function(t){var n=[];return 46===t.charCodeAt(0)&&n.push(""),t.replace(o,function(t,r,e,o){n.push(e?o.replace(i,"$1"):r||t)}),n});t.exports=u},GoyQ:function(t,n){t.exports=function(t){var n=typeof t;return null!=t&&("object"==n||"function"==n)}},H8j4:function(t,n,r){var e=r("QkVE");t.exports=function(t,n){var r=e(this,t),o=r.size;return r.set(t,n),this.size+=r.size==o?0:1,this}},Hvzi:function(t,n){t.exports=function(t){var n=this.has(t)&&delete this.__data__[t];return this.size-=n?1:0,n}},I01J:function(t,n,r){var e=r("44Ds"),o=500;t.exports=function(t){var n=e(t,function(t){return r.size===o&&r.clear(),t}),r=n.cache;return n}},JHgL:function(t,n,r){var e=r("QkVE");t.exports=function(t){return e(this,t).get(t)}},JSQU:function(t,n,r){var e=r("YESw"),o="__lodash_hash_undefined__";t.exports=function(t,n){var r=this.__data__;return this.size+=this.has(t)?0:1,r[t]=e&&void 0===n?o:n,this}},KMkd:function(t,n){t.exports=function(){this.__data__=[],this.size=0}},KfNM:function(t,n){var r=Object.prototype.toString;t.exports=function(t){return r.call(t)}},Kz5y:function(t,n,r){var e=r("WFqU"),o="object"==typeof self&&self&&self.Object===Object&&self,i=e||o||Function("return this")();t.exports=i},NKxu:function(t,n,r){var e=r("lSCD"),o=r("E2jh"),i=r("GoyQ"),u=r("3Fdi"),c=/^\[object .+?Constructor\]$/,a=Function.prototype,s=Object.prototype,f=a.toString,p=s.hasOwnProperty,l=RegExp("^"+f.call(p).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");t.exports=function(t){return!(!i(t)||o(t))&&(e(t)?l:c).test(u(t))}},Npjl:function(t,n){t.exports=function(t,n){return null==t?void 0:t[n]}},NykK:function(t,n,r){var e=r("nmnc"),o=r("AP2z"),i=r("KfNM"),u="[object Null]",c="[object Undefined]",a=e?e.toStringTag:void 0;t.exports=function(t){return null==t?void 0===t?c:u:a&&a in Object(t)?o(t):i(t)}},QkVE:function(t,n,r){var e=r("EpBk");t.exports=function(t,n){var r=t.__data__;return e(n)?r["string"==typeof n?"string":"hash"]:r.map}},SfRM:function(t,n,r){var e=r("YESw");t.exports=function(){this.__data__=e?e(null):{},this.size=0}},WFqU:function(t,n,r){(function(n){var r="object"==typeof n&&n&&n.Object===Object&&n;t.exports=r}).call(this,r("yLpj"))},Xi7e:function(t,n,r){var e=r("KMkd"),o=r("adU4"),i=r("tMB7"),u=r("+6XX"),c=r("Z8oC");function a(t){var n=-1,r=null==t?0:t.length;for(this.clear();++n<r;){var e=t[n];this.set(e[0],e[1])}}a.prototype.clear=e,a.prototype.delete=o,a.prototype.get=i,a.prototype.has=u,a.prototype.set=c,t.exports=a},YESw:function(t,n,r){var e=r("Cwc5")(Object,"create");t.exports=e},Z0cm:function(t,n){var r=Array.isArray;t.exports=r},Z8oC:function(t,n,r){var e=r("y1pI");t.exports=function(t,n){var r=this.__data__,o=e(r,t);return o<0?(++this.size,r.push([t,n])):r[o][1]=n,this}},ZWtO:function(t,n,r){var e=r("4uTw"),o=r("9Nap");t.exports=function(t,n){for(var r=0,i=(n=e(n,t)).length;null!=t&&r<i;)t=t[o(n[r++])];return r&&r==i?t:void 0}},adU4:function(t,n,r){var e=r("y1pI"),o=Array.prototype.splice;t.exports=function(t){var n=this.__data__,r=e(n,t);return!(r<0)&&(r==n.length-1?n.pop():o.call(n,r,1),--this.size,!0)}},dt0z:function(t,n,r){var e=r("zoYe");t.exports=function(t){return null==t?"":e(t)}},e4Nc:function(t,n,r){var e=r("fGT3"),o=r("k+1r"),i=r("JHgL"),u=r("pSRY"),c=r("H8j4");function a(t){var n=-1,r=null==t?0:t.length;for(this.clear();++n<r;){var e=t[n];this.set(e[0],e[1])}}a.prototype.clear=e,a.prototype.delete=o,a.prototype.get=i,a.prototype.has=u,a.prototype.set=c,t.exports=a},eUgh:function(t,n){t.exports=function(t,n){for(var r=-1,e=null==t?0:t.length,o=Array(e);++r<e;)o[r]=n(t[r],r,t);return o}},ebwN:function(t,n,r){var e=r("Cwc5")(r("Kz5y"),"Map");t.exports=e},ekgI:function(t,n,r){var e=r("YESw"),o=Object.prototype.hasOwnProperty;t.exports=function(t){var n=this.__data__;return e?void 0!==n[t]:o.call(n,t)}},fGT3:function(t,n,r){var e=r("4kuk"),o=r("Xi7e"),i=r("ebwN");t.exports=function(){this.size=0,this.__data__={hash:new e,map:new(i||o),string:new e}}},jOE4:function(t,n,r){"use strict";var e=r("qKvR"),o=r("q1tI"),i=r.n(o),u=r("/MKj"),c=function(t){var n=t.store,r=t.reducers,i=t.Child;return Object(o.useEffect)(function(){n.substitueReducers(r)},[]),Object(e.b)(i,null)};n.a=function(t){var n=t.reducers,r=t.Child;return function(){return Object(e.b)(u.b.Consumer,null,function(t){var o=t.store;return Object(e.b)(i.a.Fragment,null,Object(e.b)(c,{store:o,reducers:n,Child:r}))})}}},"k+1r":function(t,n,r){var e=r("QkVE");t.exports=function(t){var n=e(this,t).delete(t);return this.size-=n?1:0,n}},lSCD:function(t,n,r){var e=r("NykK"),o=r("GoyQ"),i="[object AsyncFunction]",u="[object Function]",c="[object GeneratorFunction]",a="[object Proxy]";t.exports=function(t){if(!o(t))return!1;var n=e(t);return n==u||n==c||n==i||n==a}},ljhN:function(t,n){t.exports=function(t,n){return t===n||t!==t&&n!==n}},mwIZ:function(t,n,r){var e=r("ZWtO");t.exports=function(t,n,r){var o=null==t?void 0:e(t,n);return void 0===o?r:o}},nmnc:function(t,n,r){var e=r("Kz5y").Symbol;t.exports=e},pSRY:function(t,n,r){var e=r("QkVE");t.exports=function(t){return e(this,t).has(t)}},sLDa:function(t,n,r){"use strict";n.a={ADD:"ADD",MINUS:"MINUS"}},tMB7:function(t,n,r){var e=r("y1pI");t.exports=function(t){var n=this.__data__,r=e(n,t);return r<0?void 0:n[r][1]}},u8Dt:function(t,n,r){var e=r("YESw"),o="__lodash_hash_undefined__",i=Object.prototype.hasOwnProperty;t.exports=function(t){var n=this.__data__;if(e){var r=n[t];return r===o?void 0:r}return i.call(n,t)?n[t]:void 0}},y1pI:function(t,n,r){var e=r("ljhN");t.exports=function(t,n){for(var r=t.length;r--;)if(e(t[r][0],n))return r;return-1}},zoYe:function(t,n,r){var e=r("nmnc"),o=r("eUgh"),i=r("Z0cm"),u=r("/9aa"),c=1/0,a=e?e.prototype:void 0,s=a?a.toString:void 0;t.exports=function t(n){if("string"==typeof n)return n;if(i(n))return o(n,t)+"";if(u(n))return s?s.call(n):"";var r=n+"";return"0"==r&&1/n==-c?"-0":r}}},[["BnGh",1,0]]]);