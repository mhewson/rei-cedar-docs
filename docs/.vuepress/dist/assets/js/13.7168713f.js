(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{60:function(t,e,i){},67:function(t,e,i){"use strict";var n=i(60);i.n(n).a},68:function(t,e,i){"undefined"!=typeof self&&self,t.exports=function(t){var e={};function i(n){if(e[n])return e[n].exports;var s=e[n]={i:n,l:!1,exports:{}};return t[n].call(s.exports,s,s.exports,i),s.l=!0,s.exports}return i.m=t,i.c=e,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:n})},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/",i(i.s=1)}([function(t,e,i){"use strict";var n=i(4);e.a={name:"CdrList",mixins:[n.a],props:{listType:{type:String,default:"ul",validator:function(t){return["ul","ol"].indexOf(t)>=0||!1}}},computed:{baseClass:function(){return"cdr-list"}}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i(2);i.d(e,"CdrList",function(){return n.a})},function(t,e,i){"use strict";var n=i(0),s=i(5),r=i(6),o=Object(r.a)(n.a,s.a,s.b,!1,function(t){i(3)},null,null);e.a=o.exports},function(t,e){},function(t,e,i){"use strict";e.a={props:{modifier:String},computed:{modifierClass:function(){var t=this.baseClass,e=this.modifier?this.modifier.split(" "):[],i=[];return this.theme||(i.push(""+t),i=i.concat(e.map(function(e){return t+"--"+e}))),i.join(" ")}}}},function(t,e,i){"use strict";i.d(e,"a",function(){return n}),i.d(e,"b",function(){return s});var n=function(){var t=this.$createElement,e=this._self._c||t;return"ul"===this.listType?e("ul",{class:this.modifierClass},[this._t("default")],2):"ol"===this.listType?e("ol",{class:this.modifierClass},[this._t("default")],2):this._e()},s=[]},function(t,e,i){"use strict";e.a=function(t,e,i,n,s,r,o,u){var a=typeof(t=t||{}).default;"object"!==a&&"function"!==a||(t=t.default);var l,c="function"==typeof t?t.options:t;if(e&&(c.render=e,c.staticRenderFns=i,c._compiled=!0),n&&(c.functional=!0),r&&(c._scopeId=r),o?(l=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),s&&s.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(o)},c._ssrRegister=l):s&&(l=u?function(){s.call(this,this.$root.$options.shadowRoot)}:s),l)if(c.functional){c._injectStyles=l;var d=c.render;c.render=function(t,e){return l.call(e),d(t,e)}}else{var f=c.beforeCreate;c.beforeCreate=f?[].concat(f,l):[l]}return{exports:t,options:c}}}])},88:function(t,e,i){"use strict";i.r(e);var n=i(68),s={name:"list",components:Object.assign({},n)},r=(i(67),i(0)),o=Object(r.a)(s,function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("h3",[t._v("Default List")]),i("cdr-list",[i("li",[t._v("List default")]),i("li",[t._v("List default")]),i("li",[t._v("List default")])]),i("cdr-list",{attrs:{modifier:"compact"}},[i("li",[t._v("List default - compact")]),i("li",[t._v("List default - compact")]),i("li",[t._v("List default - compact")])]),i("cdr-list",{attrs:{modifier:"spread"}},[i("li",[t._v("List default - spread")]),i("li",[t._v("List default - spread")]),i("li",[t._v("List default - spread")])]),i("cdr-list",[i("li",[t._v("List Nested\n      "),i("cdr-list",[i("li",[t._v("List default - nested")]),i("li",[t._v("List default - nested\n          "),i("cdr-list",{attrs:{modifier:"numbered"}},[i("li",[t._v("List default - nested - numbered")]),i("li",[t._v("List default - nested - numbered")])])],1)])],1)])],1)},[],!1,null,null,null);e.default=o.exports}}]);