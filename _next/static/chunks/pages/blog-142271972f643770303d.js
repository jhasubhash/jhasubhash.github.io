(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[195],{4045:function(e,n,t){e.exports=t(6071)},6071:function(e,n,t){"use strict";var r=t(3038),a=t(862);n.default=void 0;var o=a(t(7294)),c=t(1689),s=t(2441),i=t(5749),l={};function u(e,n,t,r){if(e&&(0,c.isLocalURL)(n)){e.prefetch(n,t,r).catch((function(e){0}));var a=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;l[n+"%"+t+(a?"%"+a:"")]=!0}}var f=function(e){var n=!1!==e.prefetch,t=(0,s.useRouter)(),a=t&&t.asPath||"/",f=o.default.useMemo((function(){var n=(0,c.resolveHref)(a,e.href,!0),t=r(n,2),o=t[0],s=t[1];return{href:o,as:e.as?(0,c.resolveHref)(a,e.as):s||o}}),[a,e.href,e.as]),d=f.href,p=f.as,v=e.children,h=e.replace,b=e.shallow,g=e.scroll,m=e.locale;"string"===typeof v&&(v=o.default.createElement("a",null,v));var y=o.Children.only(v),_=y&&"object"===typeof y&&y.ref,x=(0,i.useIntersection)({rootMargin:"200px"}),j=r(x,2),M=j[0],k=j[1],E=o.default.useCallback((function(e){M(e),_&&("function"===typeof _?_(e):"object"===typeof _&&(_.current=e))}),[_,M]);(0,o.useEffect)((function(){var e=k&&n&&(0,c.isLocalURL)(d),r="undefined"!==typeof m?m:t&&t.locale,a=l[d+"%"+p+(r?"%"+r:"")];e&&!a&&u(t,d,p,{locale:r})}),[p,d,k,m,n,t]);var N={ref:E,onClick:function(e){y.props&&"function"===typeof y.props.onClick&&y.props.onClick(e),e.defaultPrevented||function(e,n,t,r,a,o,s,i){("A"!==e.currentTarget.nodeName||!function(e){var n=e.currentTarget.target;return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,c.isLocalURL)(t))&&(e.preventDefault(),null==s&&(s=r.indexOf("#")<0),n[a?"replace":"push"](t,r,{shallow:o,locale:i,scroll:s}))}(e,t,d,p,h,b,g,m)},onMouseEnter:function(e){(0,c.isLocalURL)(d)&&(y.props&&"function"===typeof y.props.onMouseEnter&&y.props.onMouseEnter(e),u(t,d,p,{priority:!0}))}};if(e.passHref||"a"===y.type&&!("href"in y.props)){var L="undefined"!==typeof m?m:t&&t.locale,w=t&&t.isLocaleDomain&&(0,c.getDomainLocale)(p,L,t&&t.locales,t&&t.domainLocales);N.href=w||(0,c.addBasePath)((0,c.addLocale)(p,L,t&&t.defaultLocale))}return o.default.cloneElement(y,N)};n.default=f},5749:function(e,n,t){"use strict";var r=t(3038);n.__esModule=!0,n.useIntersection=function(e){var n=e.rootMargin,t=e.disabled||!c,i=(0,a.useRef)(),l=(0,a.useState)(!1),u=r(l,2),f=u[0],d=u[1],p=(0,a.useCallback)((function(e){i.current&&(i.current(),i.current=void 0),t||f||e&&e.tagName&&(i.current=function(e,n,t){var r=function(e){var n=e.rootMargin||"",t=s.get(n);if(t)return t;var r=new Map,a=new IntersectionObserver((function(e){e.forEach((function(e){var n=r.get(e.target),t=e.isIntersecting||e.intersectionRatio>0;n&&t&&n(t)}))}),e);return s.set(n,t={id:n,observer:a,elements:r}),t}(t),a=r.id,o=r.observer,c=r.elements;return c.set(e,n),o.observe(e),function(){c.delete(e),o.unobserve(e),0===c.size&&(o.disconnect(),s.delete(a))}}(e,(function(e){return e&&d(e)}),{rootMargin:n}))}),[t,n,f]);return(0,a.useEffect)((function(){if(!c&&!f){var e=(0,o.requestIdleCallback)((function(){return d(!0)}));return function(){return(0,o.cancelIdleCallback)(e)}}}),[f]),[p,f]};var a=t(7294),o=t(8391),c="undefined"!==typeof IntersectionObserver;var s=new Map},3704:function(e,n,t){"use strict";t.r(n),t.d(n,{__N_SSG:function(){return c},default:function(){return s}});var r=t(5893),a=t(4045);var o=function(e){var n=e.post;return(0,r.jsxs)("div",{className:"card",children:[(0,r.jsx)("img",{src:n.frontMatter.cover_image,alt:" "}),(0,r.jsxs)("div",{className:"post-date",children:["Posted on ",n.frontMatter.date]}),(0,r.jsx)("h3",{children:n.frontMatter.title}),(0,r.jsx)("p",{style:{color:"grey"},children:n.frontMatter.excerpt}),(0,r.jsx)(a.default,{href:"/blog/".concat(n.slug),children:(0,r.jsx)("a",{className:"btn",children:"Read More"})})]})};var c=!0,s=function(e){var n=e.posts;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a.default,{href:"/",children:(0,r.jsx)("div",{className:"btn btn-back",children:"Back"})}),(0,r.jsx)("div",{className:"posts",children:n.map((function(e,n){return(0,r.jsx)(o,{post:e},n)}))}),(0,r.jsx)(a.default,{href:"/",children:(0,r.jsx)("div",{className:"btn btn-back",children:"Back"})})]})}},2912:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog",function(){return t(3704)}])}},function(e){e.O(0,[774,888,179],(function(){return n=2912,e(e.s=n);var n}));var n=e.O();_N_E=n}]);