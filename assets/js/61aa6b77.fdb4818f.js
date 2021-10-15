(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[480],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return p},kt:function(){return s}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),d=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=d(r),s=a,f=u["".concat(l,".").concat(s)]||u[s]||m[s]||o;return r?n.createElement(f,c(c({ref:t},p),{},{components:r})):n.createElement(f,c({ref:t},p))}));function s(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,c=new Array(o);c[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var d=2;d<o;d++)c[d]=r[d];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},4789:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return c},contentTitle:function(){return i},metadata:function(){return l},toc:function(){return d},default:function(){return m}});var n=r(2122),a=r(9756),o=(r(7294),r(3905)),c={id:"metadata",title:"\u5143\u4fe1\u606f\u4f20\u9012",keywords:["Go","Kratos","Toolkit","Framework","Microservices","Protobuf","gRPC","HTTP"]},i=void 0,l={unversionedId:"component/metadata",id:"component/metadata",isDocsHomePage:!1,title:"\u5143\u4fe1\u606f\u4f20\u9012",description:"\u5fae\u670d\u52a1\u4e4b\u95f4\u5c06\u4f1a\u901a\u8fc7 HTTP \u548c gRPC \u8fdb\u884c\u63a5\u53e3\u4ea4\u4e92\uff0c\u6240\u4ee5\u670d\u52a1\u67b6\u6784\u9700\u8981\u7edf\u4e00 Metadata \u4f20\u9012\u4f7f\u7528\u3002",source:"@site/docs/component/metadata.md",sourceDirName:"component",slug:"/component/metadata",permalink:"/docs/component/metadata",editUrl:"https://github.com/go-kratos/go-kratos.dev/edit/main/docs/component/metadata.md",tags:[],version:"current",frontMatter:{id:"metadata",title:"\u5143\u4fe1\u606f\u4f20\u9012",keywords:["Go","Kratos","Toolkit","Framework","Microservices","Protobuf","gRPC","HTTP"]},sidebar:"docs",previous:{title:"\u5e8f\u5217\u5316",permalink:"/docs/component/encoding"},next:{title:"\u8def\u7531\u4e0e\u8d1f\u8f7d\u5747\u8861",permalink:"/docs/component/selector"}},d=[{value:"\u9ed8\u8ba4\u683c\u5f0f\u89c4\u8303",id:"\u9ed8\u8ba4\u683c\u5f0f\u89c4\u8303",children:[]},{value:"\u4f7f\u7528\u65b9\u5f0f",id:"\u4f7f\u7528\u65b9\u5f0f",children:[]}],p={toc:d};function m(e){var t=e.components,r=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u5fae\u670d\u52a1\u4e4b\u95f4\u5c06\u4f1a\u901a\u8fc7 HTTP \u548c gRPC \u8fdb\u884c\u63a5\u53e3\u4ea4\u4e92\uff0c\u6240\u4ee5\u670d\u52a1\u67b6\u6784\u9700\u8981\u7edf\u4e00 Metadata \u4f20\u9012\u4f7f\u7528\u3002\n\u76ee\u524d gRPC \u4e2d\u4e5f\u53ef\u4ee5\u643a\u5e26 Metadata \u4f20\u9012\uff0c\u539f\u7406\u662f\u653e\u5230 HTTP Header \u4e2d\uff0c\u7136\u540e\u4e0a\u6e38\u5c06\u4f1a\u6536\u5230\u5bf9\u5e94\u7684 Metadata \u4fe1\u606f\u3002\n\u6240\u4ee5\u8bbe\u8ba1\u4e0a\uff0c\u4e5f\u662f\u901a\u8fc7 HTTP Header \u8fdb\u884c\u4f20\u9012\uff0c\u5728\u6846\u67b6\u4e2d\u5148\u901a\u8fc7 metadata \u5305\u5c01\u88c5\u6210key/value\u7ed3\u6784\uff0c\u7136\u540e\u643a\u5e26\u5230 Transport Header \u4e2d\u3002"),(0,o.kt)("h3",{id:"\u9ed8\u8ba4\u683c\u5f0f\u89c4\u8303"},"\u9ed8\u8ba4\u683c\u5f0f\u89c4\u8303"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"x-md-global-xxx\uff0c\u5168\u5c40\u4f20\u9012\uff0c\u4f8b\u5982 mirror/color/criticality"),(0,o.kt)("li",{parentName:"ul"},"x-md-local-xxx\uff0c\u5c40\u90e8\u4f20\u9012\uff0c\u4f8b\u5982 caller")),(0,o.kt)("p",null,"\u4e5f\u53ef\u4ee5\u5728 middleware/metadata \u5b9a\u5236\u81ea\u5df1\u7684 key prefix\uff0c\u914d\u7f6e\u56fa\u5b9a\u7684\u5143\u4fe1\u606f\u4f20\u9012"),(0,o.kt)("h3",{id:"\u4f7f\u7528\u65b9\u5f0f"},"\u4f7f\u7528\u65b9\u5f0f"),(0,o.kt)("p",null,"\u9996\u5148\u914d\u7f6e client/server \u5bf9\u5e94\u7684 middleware/metadata \u63d2\u4ef6\uff0c\u7136\u540e\u53ef\u4ee5\u81ea\u5b9a\u4e49\u4f20\u9012 key prefix\uff0c\u6216\u8005 metadata \u5e38\u91cf\uff0c\u4f8b\u5982 caller\u3002\n\u6700\u540e\u53ef\u4ee5\u901a\u8fc7 metadata \u5305\u4e2d\u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"NewClientContext")," \u6216\u8005 ",(0,o.kt)("inlineCode",{parentName:"p"},"FromServerContext")," \u8fdb\u884c\u914d\u7f6e\u6216\u8005\u83b7\u53d6\u3002"),(0,o.kt)("h4",{id:"\u6ce8\u518c-metadata-\u4e2d\u95f4\u4ef6"},"\u6ce8\u518c metadata \u4e2d\u95f4\u4ef6"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'// https://github.com/go-kratos/kratos/tree/main/examples/metadata\n\n// \u6ce8\u518c metadata \u4e2d\u95f4\u4ef6\u5230 gRPC \u6216 HTTP \u7684 server \u6216 client \u4e2d\n\n// server\ngrpcSrv := grpc.NewServer(\n    grpc.Address(":9000"),\n    grpc.Middleware(\n        metadata.Server(),\n    ),\n)\nhttpSrv := http.NewServer(\n    http.Address(":8000"),\n    http.Middleware(\n        metadata.Server(),\n    ),\n)\n\n// client\nconn, err := grpc.DialInsecure(\n    context.Background(),\n    grpc.WithEndpoint("127.0.0.1:9000"),\n    grpc.WithMiddleware(\n        metadata.Client(),\n    ),\n)\n')),(0,o.kt)("h4",{id:"\u83b7\u53d6-metadata-\u5b57\u6bb5\u7684\u503c"},"\u83b7\u53d6 metadata \u5b57\u6bb5\u7684\u503c"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'if md, ok := metadata.FromServerContext(ctx); ok {\n    extra = md.Get("x-md-global-extra")\n}\n')),(0,o.kt)("h4",{id:"\u4f20\u9012-metadata"},"\u4f20\u9012 metadata"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'ctx = metadata.AppendToClientContext(ctx, "x-md-global-extra", "2233")\n')))}m.isMDXComponent=!0}}]);