(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{"0jh0":function(e,t){e.exports=function(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}},"2klF":function(e,t){e.exports=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}},"2mvg":function(e,t,r){"use strict";var n=r("k1TG"),o=r("8o2o"),a=r("TSYQ"),c=r.n(a),u=r("q1tI"),i=r.n(u),l=r("17x9"),f=r.n(l),s=r("vUet"),p=(f.a.string,f.a.bool,f.a.bool,f.a.bool,f.a.bool,i.a.forwardRef((function(e,t){var r=e.bsPrefix,a=e.className,u=e.fluid,l=e.rounded,f=e.roundedCircle,p=e.thumbnail,m=Object(o.a)(e,["bsPrefix","className","fluid","rounded","roundedCircle","thumbnail"]);r=Object(s.a)(r,"img");var d=c()(u&&r+"-fluid",l&&"rounded",f&&"rounded-circle",p&&r+"-thumbnail");return i.a.createElement("img",Object(n.a)({ref:t},m,{className:c()(a,d)}))})));p.displayName="Image",p.defaultProps={fluid:!1,rounded:!1,roundedCircle:!1,thumbnail:!1},t.a=p},"A2+M":function(e,t,r){var n=r("X8hv");e.exports={MDXRenderer:n}},Ck4i:function(e,t,r){var n=r("Q83E"),o=r("2klF");function a(t,r,c){return o()?e.exports=a=Reflect.construct:e.exports=a=function(e,t,r){var o=[null];o.push.apply(o,t);var a=new(Function.bind.apply(e,o));return r&&n(a,r.prototype),a},a.apply(null,arguments)}e.exports=a},Q83E:function(e,t){function r(t,n){return e.exports=r=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},r(t,n)}e.exports=r},R7tm:function(e,t,r){var n=r("qHws"),o=r("gC2u"),a=r("dQcQ"),c=r("m7BV");e.exports=function(e){return n(e)||o(e)||a(e)||c()}},X8hv:function(e,t,r){var n=r("Ck4i"),o=r("R7tm"),a=r("0jh0"),c=r("uDP2");function u(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?u(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var l=r("q1tI"),f=r("7ljp").mdx,s=r("BfwJ").useMDXScope;e.exports=function(e){var t=e.scope,r=e.children,a=c(e,["scope","children"]),u=s(t),p=l.useMemo((function(){if(!r)return null;var e=i({React:l,mdx:f},u),t=Object.keys(e),a=t.map((function(t){return e[t]}));return n(Function,["_fn"].concat(o(t),[""+r])).apply(void 0,[{}].concat(o(a)))}),[r,t]);return l.createElement(p,i({},a))}},dQcQ:function(e,t,r){var n=r("hMe3");e.exports=function(e,t){if(e){if("string"==typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}}},gC2u:function(e,t){e.exports=function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},hMe3:function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}},m7BV:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},qHws:function(e,t,r){var n=r("hMe3");e.exports=function(e){if(Array.isArray(e))return n(e)}},yZlL:function(e,t,r){"use strict";r.r(t);var n=r("q1tI"),o=r.n(n),a=r("7vrA"),c=r("2mvg"),u=r("Kvkj"),i=r("A2+M"),l=r("7ljp"),f=r("ElpU"),s=function(e){var t=e.title,r=e.excerpt,n=e.html,s=e.subTitle,p=e.featuredImage;return o.a.createElement(u.b,null,o.a.createElement(f.a,{title:t,description:r}),o.a.createElement(a.a,{className:"text-center",fluid:!0},o.a.createElement(u.c,{title:t}),s,o.a.createElement(c.a,{fluid:!0,src:p,alt:t}),o.a.createElement(a.a,{style:{marginTop:"20px"},className:"text-justify"},o.a.createElement(l.MDXProvider,null,o.a.createElement(i.MDXRenderer,null,n)))))},p=function(e){e.ttr;var t=e.date,r=e.author;return o.a.createElement("h5",{className:"text-muted mb-5"},t," | ",r)};t.default=function(e){var t=e.data,r=t.mdx,n=t.file.childImageSharp;return o.a.createElement(s,{title:r.frontmatter.title,subTitle:o.a.createElement(p,{ttr:r.timeToRead,date:r.frontmatter.date,author:r.frontmatter.author}),featuredImage:n.fluid.src,excerpt:r.excerpt,html:r.body})}}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-fc7cd4e476e1e5312fa5.js.map