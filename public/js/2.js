(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{171:function(e,t,n){"use strict";var a,r,c=n(183),l=n(184),o=RegExp.prototype.exec,i=String.prototype.replace,u=o,s=(a=/a/,r=/b*/g,o.call(a,"a"),o.call(r,"a"),0!==a.lastIndex||0!==r.lastIndex),p=l.UNSUPPORTED_Y||l.BROKEN_CARET,d=void 0!==/()??/.exec("")[1];(s||d||p)&&(u=function(e){var t,n,a,r,l=this,u=p&&l.sticky,m=c.call(l),f=l.source,E=0,x=e;return u&&(-1===(m=m.replace("y","")).indexOf("g")&&(m+="g"),x=String(e).slice(l.lastIndex),l.lastIndex>0&&(!l.multiline||l.multiline&&"\n"!==e[l.lastIndex-1])&&(f="(?: "+f+")",x=" "+x,E++),n=new RegExp("^(?:"+f+")",m)),d&&(n=new RegExp("^"+f+"$(?!\\s)",m)),s&&(t=l.lastIndex),a=o.call(u?n:l,x),u?a?(a.input=a.input.slice(E),a[0]=a[0].slice(E),a.index=l.lastIndex,l.lastIndex+=a[0].length):l.lastIndex=0:s&&a&&(l.lastIndex=l.global?a.index+a[0].length:t),d&&a&&a.length>1&&i.call(a[0],n,(function(){for(r=1;r<arguments.length-2;r++)void 0===arguments[r]&&(a[r]=void 0)})),a}),e.exports=u},173:function(e,t,n){"use strict";var a=n(0),r=n.n(a),c=n(204),l=n(203),o=n(58),i=n.n(o),u=n(206),s=n(15),p=Object(s.f)((function(e){var t=e.history,n=Object(a.useState)(""),c=i()(n,2),o=c[0],s=c[1],p=Object(a.useCallback)((function(e){s(e.target.value)}));return r.a.createElement(l.a,null,r.a.createElement("input",{type:"text",placeholder:"Nunca deixe de buscar",className:"search-input",onChange:p,value:o}),r.a.createElement(u.a,{variant:"contained",className:"search-button",onClick:function(){t.push("/items?search=".concat(o))}},r.a.createElement("i",{className:"fa fa-search"})))})),d=function(e){return r.a.createElement(c.a,{item:!0,xs:12,className:"header-wrapper"},r.a.createElement(l.a,{maxWidth:"lg"},r.a.createElement(c.a,{container:!0,justify:"center"},r.a.createElement(c.a,{item:!0,xs:1,className:"logo-wrapper"},r.a.createElement(c.a,{container:!0,justify:"center"},r.a.createElement("img",{src:"../images/Logo_ML.png"}))),r.a.createElement(c.a,{item:!0,xs:9,className:"search-wrapper"},r.a.createElement(p,null)))))};t.a=function(e){return r.a.createElement(a.Fragment,null,r.a.createElement(d,null),r.a.createElement(c.a,{item:!0,xs:12,className:"content-wrapper"},r.a.createElement(l.a,{maxWidth:"lg"},r.a.createElement(c.a,{container:!0,justify:"center",alignItems:"center",className:"article-wrapper"},r.a.createElement(c.a,{item:!0,xs:10},e.children)))))}},174:function(e,t,n){"use strict";var a=n(13),r=n(171);a({target:"RegExp",proto:!0,forced:/./.exec!==r},{exec:r})},179:function(e,t,n){"use strict";var a=n(13),r=n(32).map,c=n(56),l=n(57),o=c("map"),i=l("map");a({target:"Array",proto:!0,forced:!o||!i},{map:function(e){return r(this,e,arguments.length>1?arguments[1]:void 0)}})},183:function(e,t,n){"use strict";var a=n(11);e.exports=function(){var e=a(this),t="";return e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.dotAll&&(t+="s"),e.unicode&&(t+="u"),e.sticky&&(t+="y"),t}},184:function(e,t,n){"use strict";var a=n(4);function r(e,t){return RegExp(e,t)}t.UNSUPPORTED_Y=a((function(){var e=r("a","y");return e.lastIndex=2,null!=e.exec("abcd")})),t.BROKEN_CARET=a((function(){var e=r("^r","gy");return e.lastIndex=2,null!=e.exec("str")}))},185:function(e,t,n){"use strict";var a=n(186),r=n(11),c=n(55),l=n(187),o=n(188);a("search",1,(function(e,t,n){return[function(t){var n=c(this),a=null==t?void 0:t[e];return void 0!==a?a.call(t,n):new RegExp(t)[e](String(n))},function(e){var a=n(t,e,this);if(a.done)return a.value;var c=r(e),i=String(this),u=c.lastIndex;l(u,0)||(c.lastIndex=0);var s=o(c,i);return l(c.lastIndex,u)||(c.lastIndex=u),null===s?-1:s.index}]}))},186:function(e,t,n){"use strict";n(174);var a=n(23),r=n(4),c=n(3),l=n(171),o=n(18),i=c("species"),u=!r((function(){var e=/./;return e.exec=function(){var e=[];return e.groups={a:"7"},e},"7"!=="".replace(e,"$<a>")})),s="$0"==="a".replace(/./,"$0"),p=c("replace"),d=!!/./[p]&&""===/./[p]("a","$0"),m=!r((function(){var e=/(?:)/,t=e.exec;e.exec=function(){return t.apply(this,arguments)};var n="ab".split(e);return 2!==n.length||"a"!==n[0]||"b"!==n[1]}));e.exports=function(e,t,n,p){var f=c(e),E=!r((function(){var t={};return t[f]=function(){return 7},7!=""[e](t)})),x=E&&!r((function(){var t=!1,n=/a/;return"split"===e&&((n={}).constructor={},n.constructor[i]=function(){return n},n.flags="",n[f]=/./[f]),n.exec=function(){return t=!0,null},n[f](""),!t}));if(!E||!x||"replace"===e&&(!u||!s||d)||"split"===e&&!m){var v=/./[f],g=n(f,""[e],(function(e,t,n,a,r){return t.exec===l?E&&!r?{done:!0,value:v.call(t,n,a)}:{done:!0,value:e.call(n,t,a)}:{done:!1}}),{REPLACE_KEEPS_$0:s,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:d}),b=g[0],h=g[1];a(String.prototype,e,b),a(RegExp.prototype,f,2==t?function(e,t){return h.call(e,this,t)}:function(e){return h.call(e,this)})}p&&o(RegExp.prototype[f],"sham",!0)}},187:function(e,t){e.exports=Object.is||function(e,t){return e===t?0!==e||1/e==1/t:e!=e&&t!=t}},188:function(e,t,n){var a=n(19),r=n(171);e.exports=function(e,t){var n=e.exec;if("function"==typeof n){var c=n.call(e,t);if("object"!=typeof c)throw TypeError("RegExp exec method returned something other than an Object or null");return c}if("RegExp"!==a(e))throw TypeError("RegExp#exec called on incompatible receiver");return r.call(e,t)}},207:function(e,t,n){"use strict";n.r(t);n(174),n(185);var a=n(0),r=n.n(a),c=n(173),l=(n(179),n(204)),o=n(203),i=function(e){var t=e.categories,n=Object(a.useCallback)((function(e){return e.map((function(e,t){return 0===t?r.a.createElement("span",{key:"cat-".concat(t)},e):r.a.createElement(a.Fragment,{key:"cat-".concat(t)},r.a.createElement("span",null,">"),r.a.createElement("span",null,e))}))}));return r.a.createElement(o.a,{className:"breadcrumb"},r.a.createElement(l.a,{container:!0,justify:"flex-start",alignItems:"center",className:"breadcrumb"},n(t)))},u=n(165),s=n(1),p=(n(22),n(168)),d=n(170),m=r.a.forwardRef((function(e,t){var n=e.classes,a=e.className,c=e.component,l=void 0===c?"div":c,o=e.square,i=void 0!==o&&o,d=e.elevation,m=void 0===d?1:d,f=e.variant,E=void 0===f?"elevation":f,x=Object(u.a)(e,["classes","className","component","square","elevation","variant"]);return r.a.createElement(l,Object(s.a)({className:Object(p.a)(n.root,a,"outlined"===E?n.outlined:n["elevation".concat(m)],!i&&n.rounded),ref:t},x))})),f=Object(d.a)((function(e){var t={};return e.shadows.forEach((function(e,n){t["elevation".concat(n)]={boxShadow:e}})),Object(s.a)({root:{backgroundColor:e.palette.background.paper,color:e.palette.text.primary,transition:e.transitions.create("box-shadow")},rounded:{borderRadius:e.shape.borderRadius},outlined:{border:"1px solid ".concat(e.palette.divider)}},t)}),{name:"MuiPaper"})(m),E=n(97),x=Object(a.memo)((function(e){var t=e.id,n=Object(E.a)(),c=n.singleProduct,i=n.getProduct;return Object(a.useEffect)((function(){c?console.log(c):i(t)}),[c,i,t]),r.a.createElement(o.a,null,r.a.createElement(l.a,{container:!0,justify:"center",alignItems:"center"},r.a.createElement(l.a,{item:!0,xs:2},t)))})),v=function(e){var t=e.products,n=Object(a.useCallback)((function(e){return e.map((function(e){return r.a.createElement(x,{key:e.id,id:e.id})}))}));return r.a.createElement(o.a,null,r.a.createElement(f,{elevation:1},r.a.createElement(l.a,{container:!0,justify:"center",alignItems:"center"},n(t))))};t.default=function(e){var t=e.location;console.log(t.search);var n=Object(E.a)(),l=n.getProducts,o=n.products,u=n.categories;Object(a.useEffect)((function(){o||u||l()}),[l,o]);var s=r.a.createElement(c.a,null,r.a.createElement(i,{categories:u}),r.a.createElement(v,{products:o}));return o||u||(s=null),s}}}]);
//# sourceMappingURL=2.js.map