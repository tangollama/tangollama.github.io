(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{"7Qib":function(e,t,r){"use strict";r.d(t,"a",(function(){return n.a})),r.d(t,"b",(function(){return a}));var n=r("ElpU"),a=(r("BYIe"),r("RUBk"),{getImageMap:function(e,t,r,n){return void 0===r&&(r=!1),void 0===n&&(n=3),e.reduce((function(e,a){var o=a.node.relativePath.match(t)[0];if(r)if(e.hasOwnProperty(o))e[o].length<=n&&e[o].push(a.node.childImageSharp.fluid);else{var i=[];i.push(a.node.childImageSharp.fluid),e[o]=i}else e[o]=a.node.childImageSharp.fluid;return e}),{})}})},F2CN:function(e,t,r){"use strict";r.r(t);var n=r("q1tI"),a=r.n(n),o=r("Kvkj"),i=r("7Qib"),l=r("IP2g"),s=r("7vrA");t.default=function(e){var t=e.data,r=t.allMdx.edges||[],n=t.allFile.edges||[],c=i.b.getImageMap(n,/\/[work].*\/|$/);return a.a.createElement(o.b,null,a.a.createElement(i.a,{title:"Resume"}),a.a.createElement(o.c,{title:"Resume"}," ",a.a.createElement("a",{href:"../../resume.pdf",target:"_blank",download:!0},a.a.createElement(l.a,{style:{fontSize:"2rem"},icon:["fas","file-download"],className:"icons file"}))),a.a.createElement(s.a,{className:"mt-5 pt-3",fluid:!0},r.map((function(e){var t=e.node;return a.a.createElement("div",{key:t.id},a.a.createElement(o.e,{frontmatter:t.frontmatter,image:c[t.fields.slug],html:t.body}),a.a.createElement("hr",{className:"w-75"}))}))))}},IP2g:function(e,t,r){"use strict";r.d(t,"a",(function(){return h}));r("RUBk");var n=r("7O5W"),a=r("17x9"),o=r.n(a),i=r("q1tI"),l=r.n(i);function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function f(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?f(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):f(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}function b(e){return function(e){if(Array.isArray(e)){for(var t=0,r=new Array(e.length);t<e.length;t++)r[t]=e[t];return r}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function y(e){return t=e,(t-=0)==t?e:(e=e.replace(/[\-_\s]+(.)?/g,(function(e,t){return t?t.toUpperCase():""}))).substr(0,1).toLowerCase()+e.substr(1);var t}function m(e){return e.split(";").map((function(e){return e.trim()})).filter((function(e){return e})).reduce((function(e,t){var r,n=t.indexOf(":"),a=y(t.slice(0,n)),o=t.slice(n+1).trim();return a.startsWith("webkit")?e[(r=a,r.charAt(0).toUpperCase()+r.slice(1))]=o:e[a]=o,e}),{})}var d=!1;try{d=!0}catch(w){}function O(e){return n.c.icon?n.c.icon(e):null===e?null:"object"===s(e)&&e.prefix&&e.iconName?e:Array.isArray(e)&&2===e.length?{prefix:e[0],iconName:e[1]}:"string"==typeof e?{prefix:"fas",iconName:e}:void 0}function g(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?c({},e,t):{}}function h(e){var t=e.forwardedRef,r=p(e,["forwardedRef"]),a=r.icon,o=r.mask,i=r.symbol,l=r.className,s=r.title,f=r.titleId,y=O(a),m=g("classes",[].concat(b(function(e){var t,r=e.spin,n=e.pulse,a=e.fixedWidth,o=e.inverse,i=e.border,l=e.listItem,s=e.flip,f=e.size,u=e.rotation,p=e.pull,b=(c(t={"fa-spin":r,"fa-pulse":n,"fa-fw":a,"fa-inverse":o,"fa-border":i,"fa-li":l,"fa-flip-horizontal":"horizontal"===s||"both"===s,"fa-flip-vertical":"vertical"===s||"both"===s},"fa-".concat(f),null!=f),c(t,"fa-rotate-".concat(u),null!=u&&0!==u),c(t,"fa-pull-".concat(p),null!=p),c(t,"fa-swap-opacity",e.swapOpacity),t);return Object.keys(b).map((function(e){return b[e]?e:null})).filter((function(e){return e}))}(r)),b(l.split(" ")))),w=g("transform","string"==typeof r.transform?n.c.transform(r.transform):r.transform),j=g("mask",O(o)),x=Object(n.a)(y,u({},m,{},w,{},j,{symbol:i,title:s,titleId:f}));if(!x)return function(){var e;!d&&console&&"function"==typeof console.error&&(e=console).error.apply(e,arguments)}("Could not find icon",y),null;var k=x.abstract,I={ref:t};return Object.keys(r).forEach((function(e){h.defaultProps.hasOwnProperty(e)||(I[e]=r[e])})),v(k[0],I)}h.displayName="FontAwesomeIcon",h.propTypes={border:o.a.bool,className:o.a.string,mask:o.a.oneOfType([o.a.object,o.a.array,o.a.string]),fixedWidth:o.a.bool,inverse:o.a.bool,flip:o.a.oneOf(["horizontal","vertical","both"]),icon:o.a.oneOfType([o.a.object,o.a.array,o.a.string]),listItem:o.a.bool,pull:o.a.oneOf(["right","left"]),pulse:o.a.bool,rotation:o.a.oneOf([0,90,180,270]),size:o.a.oneOf(["lg","xs","sm","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:o.a.bool,symbol:o.a.oneOfType([o.a.bool,o.a.string]),title:o.a.string,transform:o.a.oneOfType([o.a.string,o.a.object]),swapOpacity:o.a.bool},h.defaultProps={border:!1,className:"",mask:null,fixedWidth:!1,inverse:!1,flip:null,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,symbol:!1,title:"",transform:null,swapOpacity:!1};var v=function e(t,r){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if("string"==typeof r)return r;var a=(r.children||[]).map((function(r){return e(t,r)})),o=Object.keys(r.attributes||{}).reduce((function(e,t){var n=r.attributes[t];switch(t){case"class":e.attrs.className=n,delete r.attributes.class;break;case"style":e.attrs.style=m(n);break;default:0===t.indexOf("aria-")||0===t.indexOf("data-")?e.attrs[t.toLowerCase()]=n:e.attrs[y(t)]=n}return e}),{attrs:{}}),i=n.style,l=void 0===i?{}:i,s=p(n,["style"]);return o.attrs.style=u({},o.attrs.style,{},l),t.apply(void 0,[r.tag,u({},o.attrs,{},s)].concat(b(a)))}.bind(null,l.a.createElement)}}]);
//# sourceMappingURL=component---src-pages-resume-js-d3989802e3d7022b4350.js.map