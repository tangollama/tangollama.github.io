(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"7Qib":function(e,t,a){"use strict";a.d(t,"a",(function(){return n.a})),a.d(t,"b",(function(){return r}));var n=a("ElpU"),r=(a("BYIe"),a("RUBk"),{getImageMap:function(e,t,a,n){return void 0===a&&(a=!1),void 0===n&&(n=3),e.reduce((function(e,r){var l=r.node.relativePath.match(t)[0];if(a)if(e.hasOwnProperty(l))e[l].length<=n&&e[l].push(r.node.childImageSharp.fluid);else{var i=[];i.push(r.node.childImageSharp.fluid),e[l]=i}else e[l]=r.node.childImageSharp.fluid;return e}),{})}})},vx99:function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),r=a.n(n),l=a("Kvkj"),i=a("7Qib"),u=a("7vrA");t.default=function(e){var t=e.data,a=t.allFile.edges||[],n=t.allMdx.edges||[],c=i.b.getImageMap(a,/\/[blog].*\/|$/);return r.a.createElement(l.b,null,r.a.createElement(i.a,{title:"Blog"}),r.a.createElement(l.c,{title:"Blog"},"Posts"),r.a.createElement("p",null,"When I write something for public, career-focused consumption, it ends up here."),r.a.createElement(u.a,{fluid:!0,className:"p-3 w-auto text-left d-flex flex-wrap justify-content-center"},n.map((function(e){var t=e.node;return r.a.createElement("div",{key:t.id,className:"p-3"},r.a.createElement(l.a,{to:t.fields.slug,featuredImage:c[t.fields.slug],title:t.frontmatter.title,subtitle:t.frontmatter.date,excerpt:t.excerpt}))}))))}}}]);
//# sourceMappingURL=component---src-pages-blog-js-0005ae624adb8137fe61.js.map