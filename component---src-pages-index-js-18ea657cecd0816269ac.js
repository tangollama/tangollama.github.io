"use strict";(self.webpackChunktangollama_github_io=self.webpackChunktangollama_github_io||[]).push([[678],{7606:function(e,t,r){r.d(t,{G:function(){return h}});var n=r(4694),a=r(5697),o=r.n(a),l=r(7294);function i(e){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i(e)}function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function f(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}function m(e){return function(e){if(Array.isArray(e)){for(var t=0,r=new Array(e.length);t<e.length;t++)r[t]=e[t];return r}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function p(e){return t=e,(t-=0)==t?e:(e=e.replace(/[\-_\s]+(.)?/g,(function(e,t){return t?t.toUpperCase():""}))).substr(0,1).toLowerCase()+e.substr(1);var t}function b(e){return e.split(";").map((function(e){return e.trim()})).filter((function(e){return e})).reduce((function(e,t){var r,n=t.indexOf(":"),a=p(t.slice(0,n)),o=t.slice(n+1).trim();return a.startsWith("webkit")?e[(r=a,r.charAt(0).toUpperCase()+r.slice(1))]=o:e[a]=o,e}),{})}var d=!1;try{d=!0}catch(w){}function y(e){return e&&"object"===i(e)&&e.prefix&&e.iconName&&e.icon?e:n.Qc.icon?n.Qc.icon(e):null===e?null:e&&"object"===i(e)&&e.prefix&&e.iconName?e:Array.isArray(e)&&2===e.length?{prefix:e[0],iconName:e[1]}:"string"==typeof e?{prefix:"fas",iconName:e}:void 0}function g(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?c({},e,t):{}}function h(e){var t=e.forwardedRef,r=u(e,["forwardedRef"]),a=r.icon,o=r.mask,l=r.symbol,i=r.className,s=r.title,p=r.titleId,b=y(a),w=g("classes",[].concat(m(function(e){var t,r=e.spin,n=e.pulse,a=e.fixedWidth,o=e.inverse,l=e.border,i=e.listItem,s=e.flip,f=e.size,u=e.rotation,m=e.pull,p=(c(t={"fa-spin":r,"fa-pulse":n,"fa-fw":a,"fa-inverse":o,"fa-border":l,"fa-li":i,"fa-flip-horizontal":"horizontal"===s||"both"===s,"fa-flip-vertical":"vertical"===s||"both"===s},"fa-".concat(f),null!=f),c(t,"fa-rotate-".concat(u),null!=u&&0!==u),c(t,"fa-pull-".concat(m),null!=m),c(t,"fa-swap-opacity",e.swapOpacity),t);return Object.keys(p).map((function(e){return p[e]?e:null})).filter((function(e){return e}))}(r)),m(i.split(" ")))),O=g("transform","string"==typeof r.transform?n.Qc.transform(r.transform):r.transform),x=g("mask",y(o)),E=(0,n.qv)(b,f({},w,{},O,{},x,{symbol:l,title:s,titleId:p}));if(!E)return function(){var e;!d&&console&&"function"==typeof console.error&&(e=console).error.apply(e,arguments)}("Could not find icon",b),null;var j=E.abstract,N={ref:t};return Object.keys(r).forEach((function(e){h.defaultProps.hasOwnProperty(e)||(N[e]=r[e])})),v(j[0],N)}h.displayName="FontAwesomeIcon",h.propTypes={border:o().bool,className:o().string,mask:o().oneOfType([o().object,o().array,o().string]),fixedWidth:o().bool,inverse:o().bool,flip:o().oneOf(["horizontal","vertical","both"]),icon:o().oneOfType([o().object,o().array,o().string]),listItem:o().bool,pull:o().oneOf(["right","left"]),pulse:o().bool,rotation:o().oneOf([0,90,180,270]),size:o().oneOf(["lg","xs","sm","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:o().bool,symbol:o().oneOfType([o().bool,o().string]),title:o().string,transform:o().oneOfType([o().string,o().object]),swapOpacity:o().bool},h.defaultProps={border:!1,className:"",mask:null,fixedWidth:!1,inverse:!1,flip:null,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,symbol:!1,title:"",transform:null,swapOpacity:!1};var v=function e(t,r){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if("string"==typeof r)return r;var a=(r.children||[]).map((function(r){return e(t,r)})),o=Object.keys(r.attributes||{}).reduce((function(e,t){var n=r.attributes[t];switch(t){case"class":e.attrs.className=n,delete r.attributes.class;break;case"style":e.attrs.style=b(n);break;default:0===t.indexOf("aria-")||0===t.indexOf("data-")?e.attrs[t.toLowerCase()]=n:e.attrs[p(t)]=n}return e}),{attrs:{}}),l=n.style,i=void 0===l?{}:l,c=u(n,["style"]);return o.attrs.style=f({},o.attrs.style,{},i),t.apply(void 0,[r.tag,f({},o.attrs,{},c)].concat(m(a)))}.bind(null,l.createElement)},9643:function(e,t,r){var n=r(7462),a=r(3366),o=r(5900),l=r.n(o),i=r(7294),c=r(5697),s=r.n(c),f=r(9541),u=["bsPrefix","className","fluid","rounded","roundedCircle","thumbnail"],m=(s().string,s().bool,s().bool,s().bool,s().bool,i.forwardRef((function(e,t){var r=e.bsPrefix,o=e.className,c=e.fluid,s=e.rounded,m=e.roundedCircle,p=e.thumbnail,b=(0,a.Z)(e,u);r=(0,f.vE)(r,"img");var d=l()(c&&r+"-fluid",s&&"rounded",m&&"rounded-circle",p&&r+"-thumbnail");return i.createElement("img",(0,n.Z)({ref:t},b,{className:l()(o,d)}))})));m.displayName="Image",m.defaultProps={fluid:!1,rounded:!1,roundedCircle:!1,thumbnail:!1},t.Z=m},7704:function(e,t,r){r.r(t);var n=r(7294),a=r(2151),o=r(647),l=r(6187),i=r(9643),c=r(7606);t.default=function(e){var t=e.data,r=t.site.siteMetadata,s=r.unemployed,f=r.firstName,u=r.lastName,m=r.occupation,p=t.allFile.edges||[],b=t.allMdx.edges||[],d=o.cQ.getImageMap(p,/\/[blog].*\/|$/);return n.createElement(a.Xg,null,n.createElement(o.HJ,{title:"Home"}),n.createElement(l.Z,{className:"text-center pt-5 mt-5",fluid:!0},n.createElement(i.Z,{width:"600",fluid:!0,src:"../../imgs/bg03.jpg",alt:"Joel Worrall"}),s&&n.createElement("p",{className:"mt-2"},n.createElement("b",null," Hey! I am looking for new opportunities :)")),n.createElement(l.Z,{className:"py-0 my-0"},n.createElement("h1",{style:{marginTop:"10px"}},n.createElement("span",{className:"first-name"},f)," ",n.createElement("span",{className:"last-name"},u)),n.createElement("p",{className:"subHeading"},m," ")),n.createElement("hr",{className:"my-3 w-25"}),n.createElement("div",{className:"d-md-inline-flex icons-container"},n.createElement("a",{href:"https://www.github.com/tangollama",target:"_blank",rel:"noopener noreferrer"},n.createElement(c.G,{icon:["fab","github"],className:"icons github",title:"GitHub"})),n.createElement("a",{href:"https://linkedin.com/in/jworrall",target:"_blank",rel:"noopener noreferrer"},n.createElement(c.G,{icon:["fab","linkedin"],className:"icons linkedin",title:"LinkedIn"})),n.createElement("a",{href:"https://www.twitter.com/tangollama",target:"_blank",rel:"noopener noreferrer"},n.createElement(c.G,{icon:["fab","twitter"],className:"icons twitter",title:"Twitter"})),n.createElement("a",{href:"mailto:joel@joelworrall.com",target:"_blank",rel:"noopener noreferrer"},n.createElement(c.G,{icon:["fas","envelope"],className:"icons mail",title:"e-mail"})),n.createElement("a",{href:"../../joelworrallresume.pdf",target:"_blank",download:!0},n.createElement(c.G,{icon:["fas","file-alt"],className:"icons file",title:"Resume"})))),n.createElement("h2",{style:{marginTop:"50px"}},"The Latest"),n.createElement(l.Z,{fluid:!0,className:"p-3 w-auto text-left d-flex flex-wrap justify-content-center"},b.map((function(e){var t=e.node;return n.createElement("div",{key:t.id,className:"p-3"},n.createElement(a.N7,{to:t.fields.slug,featuredImage:d[t.fields.slug],title:t.frontmatter.title,subtitle:t.frontmatter.date,excerpt:t.frontmatter.excerpt}))}))))}},647:function(e,t,r){r.d(t,{HJ:function(){return n.Z},cQ:function(){return a}});var n=r(2567),a=(r(6556),{getImageMap:function(e,t,r,n){return void 0===r&&(r=!1),void 0===n&&(n=3),e.reduce((function(e,a){var o=a.node.relativePath.match(t)[0],l=a.node;if(r)if(e.hasOwnProperty(o))e[o].length<=n&&e[o].push(l);else{var i=[];i.push(l),e[o]=i}else e[o]=l;return e}),{})}})}}]);
//# sourceMappingURL=component---src-pages-index-js-18ea657cecd0816269ac.js.map