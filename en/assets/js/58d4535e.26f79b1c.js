(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5808],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return u},kt:function(){return d}});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=n.createContext({}),m=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=m(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=m(r),d=i,f=s["".concat(c,".").concat(d)]||s[d]||p[d]||o;return r?n.createElement(f,a(a({ref:t},u),{},{components:r})):n.createElement(f,a({ref:t},u))}));function d(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=s;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var m=2;m<o;m++)a[m]=r[m];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},7082:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return a},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return m},default:function(){return p}});var n=r(2122),i=r(9756),o=(r(7294),r(3905)),a={id:"ratelimit",title:"Rate Limiter",keywords:["Go","Kratos","Toolkit","Framework","Microservices","Protobuf","gRPC","HTTP"]},l=void 0,c={unversionedId:"component/middleware/ratelimit",id:"component/middleware/ratelimit",isDocsHomePage:!1,title:"Rate Limiter",description:"Rate limiter middleware for server-side traffic control, with bbr limiter algorithm implemented by default.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/component/middleware/ratelimit.md",sourceDirName:"component/middleware",slug:"/component/middleware/ratelimit",permalink:"/en/docs/component/middleware/ratelimit",editUrl:"https://github.com/go-kratos/go-kratos.dev/edit/main/i18n/en/docusaurus-plugin-content-docs/current/component/middleware/ratelimit.md",tags:[],version:"current",frontMatter:{id:"ratelimit",title:"Rate Limiter",keywords:["Go","Kratos","Toolkit","Framework","Microservices","Protobuf","gRPC","HTTP"]}},m=[{value:"Configuration",id:"configuration",children:[]},{value:"Usage",id:"usage",children:[]}],u={toc:m};function p(e){var t=e.components,r=(0,i.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Rate limiter middleware for server-side traffic control, with ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/go-kratos/aegis/tree/main/ratelimit/bbr"},"bbr limiter")," algorithm implemented by default."),(0,o.kt)("h3",{id:"configuration"},"Configuration"),(0,o.kt)("h4",{id:"withlimiter"},(0,o.kt)("inlineCode",{parentName:"h4"},"WithLimiter")),(0,o.kt)("p",null,"Used to replace the default limiter algorithm"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"// WithLimiter set Limiter implementation,\n// default is bbr limiter\nfunc WithLimiter(limiter ratelimit.Limiter) Option {\n    return func(o *options) {\n        o.limiter = limiter\n    }\n}\n")),(0,o.kt)("p",null,"The costom limiter nneds to implement the ",(0,o.kt)("inlineCode",{parentName:"p"},"Limiter")," interface of ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/go-kratos/aegis/blob/main/ratelimit/ratelimit.go"},"aegis/ratelimit"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"// Limiter is a rate limiter.\ntype Limiter interface {\n    Allow() (DoneFunc, error)\n}\n")),(0,o.kt)("h3",{id:"usage"},"Usage"),(0,o.kt)("h4",{id:"use-rate-limiter-in-server"},"Use rate limiter in Server"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"var opts = []http.ServerOption{\n    http.Middleware(\n        ratelimit.Server(),\n    ),\n}\n\nsrv := http.NewServer(opts...)\n")),(0,o.kt)("h4",{id:"trigger-rate-limiter"},"Trigger rate limiter"),(0,o.kt)("p",null,"When the rate limiter is triggered, the current request is rejected directly and and error ",(0,o.kt)("inlineCode",{parentName:"p"},"ErrLimitExceed")," will be returned\uff0cas defined below\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'// ErrLimitExceed is service unavailable due to rate limit exceeded.\nvar ErrLimitExceed = errors.New(429, "RATELIMIT", "service unavailable due to rate limit exceeded")\n')))}p.isMDXComponent=!0}}]);