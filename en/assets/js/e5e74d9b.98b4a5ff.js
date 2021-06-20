(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3751],{3905:function(e,r,n){"use strict";n.d(r,{Zo:function(){return p},kt:function(){return s}});var t=n(7294);function o(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function i(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function a(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?i(Object(n),!0).forEach((function(r){o(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function l(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},i=Object.keys(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=t.createContext({}),d=function(e){var r=t.useContext(c),n=r;return e&&(n="function"==typeof e?e(r):a(a({},r),e)),n},p=function(e){var r=d(e.components);return t.createElement(c.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},m=t.forwardRef((function(e,r){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=d(n),s=o,v=m["".concat(c,".").concat(s)]||m[s]||u[s]||i;return n?t.createElement(v,a(a({ref:r},p),{},{components:n})):t.createElement(v,a({ref:r},p))}));function s(e,r){var n=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=m;var l={};for(var c in r)hasOwnProperty.call(r,c)&&(l[c]=r[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var d=2;d<i;d++)a[d]=n[d];return t.createElement.apply(null,a)}return t.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2998:function(e,r,n){"use strict";n.r(r),n.d(r,{frontMatter:function(){return a},metadata:function(){return l},toc:function(){return c},default:function(){return p}});var t=n(2122),o=n(9756),i=(n(7294),n(3905)),a={id:"overview",title:"Overview",description:"Kratos \u5185\u7f6e\u4e86\u4e00\u7cfb\u5217\u7684 middleware\uff08\u4e2d\u95f4\u4ef6\uff09\u7528\u4e8e\u5904\u7406 logging, metrics \u7b49\u901a\u7528\u573a\u666f\u3002\u60a8\u4e5f\u53ef\u4ee5\u901a\u8fc7\u5b9e\u73b0 Middleware \u63a5\u53e3\uff0c\u5f00\u53d1\u81ea\u5b9a\u4e49 middleware\uff0c\u8fdb\u884c\u901a\u7528\u7684\u4e1a\u52a1\u5904\u7406\uff0c\u6bd4\u5982\u7528\u6237\u767b\u5f55\u9274\u6743\u7b49\u3002",keywords:["Go","Kratos","Toolkit","Framework","Microservices","Protobuf","gRPC","HTTP"]},l={unversionedId:"component/middleware/overview",id:"component/middleware/overview",isDocsHomePage:!1,title:"Overview",description:"Kratos \u5185\u7f6e\u4e86\u4e00\u7cfb\u5217\u7684 middleware\uff08\u4e2d\u95f4\u4ef6\uff09\u7528\u4e8e\u5904\u7406 logging, metrics \u7b49\u901a\u7528\u573a\u666f\u3002\u60a8\u4e5f\u53ef\u4ee5\u901a\u8fc7\u5b9e\u73b0 Middleware \u63a5\u53e3\uff0c\u5f00\u53d1\u81ea\u5b9a\u4e49 middleware\uff0c\u8fdb\u884c\u901a\u7528\u7684\u4e1a\u52a1\u5904\u7406\uff0c\u6bd4\u5982\u7528\u6237\u767b\u5f55\u9274\u6743\u7b49\u3002",source:"@site/docs/component/middleware/overview.md",sourceDirName:"component/middleware",slug:"/component/middleware/overview",permalink:"/en/docs/component/middleware/overview",editUrl:"https://github.com/go-kratos/go-kratos.dev/edit/main/docs/component/middleware/overview.md",version:"current",frontMatter:{id:"overview",title:"Overview",description:"Kratos \u5185\u7f6e\u4e86\u4e00\u7cfb\u5217\u7684 middleware\uff08\u4e2d\u95f4\u4ef6\uff09\u7528\u4e8e\u5904\u7406 logging, metrics \u7b49\u901a\u7528\u573a\u666f\u3002\u60a8\u4e5f\u53ef\u4ee5\u901a\u8fc7\u5b9e\u73b0 Middleware \u63a5\u53e3\uff0c\u5f00\u53d1\u81ea\u5b9a\u4e49 middleware\uff0c\u8fdb\u884c\u901a\u7528\u7684\u4e1a\u52a1\u5904\u7406\uff0c\u6bd4\u5982\u7528\u6237\u767b\u5f55\u9274\u6743\u7b49\u3002",keywords:["Go","Kratos","Toolkit","Framework","Microservices","Protobuf","gRPC","HTTP"]},sidebar:"docs",previous:{title:"Registry",permalink:"/en/docs/component/registry"},next:{title:"logging",permalink:"/en/docs/component/middleware/logging"}},c=[{value:"\u5185\u7f6e\u4e2d\u95f4\u4ef6",id:"\u5185\u7f6e\u4e2d\u95f4\u4ef6",children:[]},{value:"\u751f\u6548\u987a\u5e8f",id:"\u751f\u6548\u987a\u5e8f",children:[]},{value:"\u4f7f\u7528\u4e2d\u95f4\u4ef6",id:"\u4f7f\u7528\u4e2d\u95f4\u4ef6",children:[]},{value:"\u81ea\u5b9a\u4e49\u4e2d\u95f4\u4ef6",id:"\u81ea\u5b9a\u4e49\u4e2d\u95f4\u4ef6",children:[]}],d={toc:c};function p(e){var r=e.components,n=(0,o.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,t.Z)({},d,n,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Kratos \u5185\u7f6e\u4e86\u4e00\u7cfb\u5217\u7684 middleware\uff08\u4e2d\u95f4\u4ef6\uff09\u7528\u4e8e\u5904\u7406 logging\u3001 metrics \u7b49\u901a\u7528\u573a\u666f\u3002\u60a8\u4e5f\u53ef\u4ee5\u901a\u8fc7\u5b9e\u73b0 Middleware \u63a5\u53e3\uff0c\u5f00\u53d1\u81ea\u5b9a\u4e49 middleware\uff0c\u8fdb\u884c\u901a\u7528\u7684\u4e1a\u52a1\u5904\u7406\uff0c\u6bd4\u5982\u7528\u6237\u767b\u5f55\u9274\u6743\u7b49\u3002"),(0,i.kt)("h2",{id:"\u5185\u7f6e\u4e2d\u95f4\u4ef6"},"\u5185\u7f6e\u4e2d\u95f4\u4ef6"),(0,i.kt)("p",null,"\u76f8\u5173\u4ee3\u7801\u5747\u53ef\u4ee5\u5728",(0,i.kt)("inlineCode",{parentName:"p"},"middleware"),"\u76ee\u5f55\u4e0b\u627e\u5230\u3002"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"logging: \u7528\u4e8e\u8bf7\u6c42\u65e5\u5fd7\u7684\u8bb0\u5f55\u3002"),(0,i.kt)("li",{parentName:"ul"},"metrics: \u7528\u4e8e\u542f\u7528metric\u3002"),(0,i.kt)("li",{parentName:"ul"},"recovery: \u7528\u4e8erecovery panic\u3002"),(0,i.kt)("li",{parentName:"ul"},"tracing: \u7528\u4e8e\u542f\u7528trace\u3002"),(0,i.kt)("li",{parentName:"ul"},"validate: \u7528\u4e8e\u5904\u7406\u53c2\u6570\u6821\u9a8c\u3002")),(0,i.kt)("h2",{id:"\u751f\u6548\u987a\u5e8f"},"\u751f\u6548\u987a\u5e8f"),(0,i.kt)("p",null,"\u4e00\u4e2a\u8bf7\u6c42\u8fdb\u5165\u65f6\u7684\u5904\u7406\u987a\u5e8f\u4e3aMiddleware\u6ce8\u518c\u7684\u987a\u5e8f\uff0c\u800c\u54cd\u5e94\u8fd4\u56de\u7684\u5904\u7406\u987a\u5e8f\u4e3a\u6ce8\u518c\u987a\u5e8f\u7684\u5012\u5e8f\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"         \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n         \u2502MIDDLEWARE 1       \u2502\n         \u2502 \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\u2502\n         \u2502 \u2502MIDDLEWARE 2    \u2502\u2502\n         \u2502 \u2502 \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\u2502\u2502\n         \u2502 \u2502 \u2502MIDDLEWARE 3 \u2502\u2502\u2502\n         \u2502 \u2502 \u2502 \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510 \u2502\u2502\u2502\nREQUEST  \u2502 \u2502 \u2502 \u2502  YOUR   \u2502 \u2502\u2502\u2502  RESPONSE\n   \u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u253c\u2500\u253c\u2500\u25b7 HANDLER \u25cb\u2500\u253c\u253c\u253c\u2500\u2500\u2500\u25b7\n         \u2502 \u2502 \u2502 \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518 \u2502\u2502\u2502\n         \u2502 \u2502 \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\u2502\u2502\n         \u2502 \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\u2502\n         \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,i.kt)("h2",{id:"\u4f7f\u7528\u4e2d\u95f4\u4ef6"},"\u4f7f\u7528\u4e2d\u95f4\u4ef6"),(0,i.kt)("p",null,"\u5728",(0,i.kt)("inlineCode",{parentName:"p"},"NewGRPCServer"),"\u548c",(0,i.kt)("inlineCode",{parentName:"p"},"NewHTTPServer"),"\u4e2d\u901a\u8fc7",(0,i.kt)("inlineCode",{parentName:"p"},"ServerOption"),"\u8fdb\u884c\u6ce8\u518c\u3002\n\u5982"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},"// http\n// \u5b9a\u4e49opts\nvar opts = []http.ServerOption{\n    http.Middleware(\n        recovery.Recovery(), // \u628amiddleware\u6309\u7167\u9700\u8981\u7684\u987a\u5e8f\u52a0\u5165\n        tracing.Server(),\n        logging.Server(),\n    ),\n}\n// \u521b\u5efaserver\nhttp.NewServer(opts...)\n\n\n\n//grpc\nvar opts = []grpc.ServerOption{\n    grpc.Middleware(\n        recovery.Recovery(),  // \u628amiddleware\u6309\u7167\u9700\u8981\u7684\u987a\u5e8f\u52a0\u5165\n        status.Server(),\n        tracing.Server(),\n        logging.Server(),\n    ),\n}\n// \u521b\u5efaserver\ngrpc.NewServer(opts...)\n\n")),(0,i.kt)("h2",{id:"\u81ea\u5b9a\u4e49\u4e2d\u95f4\u4ef6"},"\u81ea\u5b9a\u4e49\u4e2d\u95f4\u4ef6"),(0,i.kt)("p",null,"\u9700\u8981\u5b9e\u73b0",(0,i.kt)("inlineCode",{parentName:"p"},"Middleware"),"\u63a5\u53e3\u3002\n\u4e2d\u95f4\u4ef6\u4e2d\u60a8\u53ef\u4ee5\u4f7f\u7528",(0,i.kt)("inlineCode",{parentName:"p"},"tr, ok := transport.FromServerContext(ctx)"),"\u83b7\u5f97Transporter\u5b9e\u4f8b\u4ee5\u4fbf\u8bbf\u95ee\u63a5\u53e3\u76f8\u5173\u7684\u5143\u4fe1\u606f"),(0,i.kt)("p",null,"\u57fa\u672c\u7684\u4ee3\u7801\u6a21\u677f"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'import (\n    "context"\n\n    "github.com/go-kratos/kratos/v2/middleware"\n    "github.com/go-kratos/kratos/v2/transport"\n)\n\nfunc Middleware1() middleware.Middleware {\n    return func(handler middleware.Handler) middleware.Handler {\n        return func(ctx context.Context, req interface{}) (reply interface{}, err error) {\n            if tr, ok := transport.FromServerContext(ctx); ok {\n                // Do something on entering \n                defer func() { \n                // Do something on exiting\n                 }()\n            }\n            return handler(ctx, req)\n        }\n    }\n}\n')))}p.isMDXComponent=!0}}]);