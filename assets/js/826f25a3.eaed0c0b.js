(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8663],{3905:function(e,r,t){"use strict";t.d(r,{Zo:function(){return p},kt:function(){return u}});var n=t(7294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=n.createContext({}),g=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},p=function(e){var r=g(e.components);return n.createElement(c.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},s=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=g(t),u=o,m=s["".concat(c,".").concat(u)]||s[u]||d[u]||i;return t?n.createElement(m,a(a({ref:r},p),{},{components:t})):n.createElement(m,a({ref:r},p))}));function u(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=s;var l={};for(var c in r)hasOwnProperty.call(r,c)&&(l[c]=r[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var g=2;g<i;g++)a[g]=t[g];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}s.displayName="MDXCreateElement"},4611:function(e,r,t){"use strict";t.r(r),t.d(r,{frontMatter:function(){return a},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return g},default:function(){return d}});var n=t(2122),o=t(9756),i=(t(7294),t(3905)),a={id:"logging",title:"\u65e5\u5fd7",keywords:["Go","Kratos","Toolkit","Framework","Microservices","Protobuf","gRPC","HTTP"]},l=void 0,c={unversionedId:"component/middleware/logging",id:"component/middleware/logging",isDocsHomePage:!1,title:"\u65e5\u5fd7",description:"Logging \u4e2d\u95f4\u4ef6\u7528\u4e8e\u6253\u5370\u670d\u52a1\u6536\u5230\u6216\u53d1\u8d77\u7684\u8bf7\u6c42\u8be6\u60c5\u3002",source:"@site/docs/component/middleware/logging.md",sourceDirName:"component/middleware",slug:"/component/middleware/logging",permalink:"/docs/component/middleware/logging",editUrl:"https://github.com/go-kratos/go-kratos.dev/edit/main/docs/component/middleware/logging.md",version:"current",frontMatter:{id:"logging",title:"\u65e5\u5fd7",keywords:["Go","Kratos","Toolkit","Framework","Microservices","Protobuf","gRPC","HTTP"]},sidebar:"docs",previous:{title:"\u6982\u89c8",permalink:"/docs/component/middleware/overview"},next:{title:"\u76d1\u63a7",permalink:"/docs/component/middleware/metrics"}},g=[{value:"\u4f7f\u7528\u65b9\u6cd5",id:"\u4f7f\u7528\u65b9\u6cd5",children:[]},{value:"\u4f7f\u7528\u65b9\u6cd5",id:"\u4f7f\u7528\u65b9\u6cd5-1",children:[]}],p={toc:g};function d(e){var r=e.components,t=(0,o.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,n.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Logging \u4e2d\u95f4\u4ef6\u7528\u4e8e\u6253\u5370\u670d\u52a1\u6536\u5230\u6216\u53d1\u8d77\u7684\u8bf7\u6c42\u8be6\u60c5\u3002"),(0,i.kt)("h3",{id:"\u4f7f\u7528\u65b9\u6cd5"},"\u4f7f\u7528\u65b9\u6cd5"),(0,i.kt)("h4",{id:"grpc-server"},"grpc server"),(0,i.kt)("p",null,"\u5728 ",(0,i.kt)("inlineCode",{parentName:"p"},"grpc.ServerOption")," \u4e2d\u5f15\u5165 ",(0,i.kt)("inlineCode",{parentName:"p"},"logging.Server()"),", \u5219\u4f1a\u5728\u6bcf\u6b21\u6536\u5230 gRPC \u8bf7\u6c42\u7684\u65f6\u5019\u6253\u5370\u8be6\u7ec6\u8bf7\u6c42\u4fe1\u606f\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},"logger := log.DefaultLogger\nvar opts = []grpc.ServerOption{\n    grpc.Middleware(\n        logging.Server(logger),\n    ),\n}\nsrv := grpc.NewServer(opts...)\n")),(0,i.kt)("h4",{id:"grpc-client"},"grpc client"),(0,i.kt)("p",null,"\u5728 ",(0,i.kt)("inlineCode",{parentName:"p"},"grpc.WithMiddleware")," \u4e2d\u5f15\u5165 ",(0,i.kt)("inlineCode",{parentName:"p"},"logging.Client()"),", \u5219\u4f1a\u5728\u6bcf\u6b21\u53d1\u8d77 grpc \u8bf7\u6c42\u7684\u65f6\u5019\u6253\u5370\u8be6\u7ec6\u8bf7\u6c42\u4fe1\u606f\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'logger := log.DefaultLogger\nconn, err := transgrpc.DialInsecure(\n    context.Background(),\n    grpc.WithEndpoint("127.0.0.1:9000"),\n     grpc.WithMiddleware(\n        logging.Client(logger),\n    ),\n)\n')),(0,i.kt)("h4",{id:"http-server"},"http server"),(0,i.kt)("p",null,"\u5728 ",(0,i.kt)("inlineCode",{parentName:"p"},"http.ServerOption")," \u4e2d\u5f15\u5165 ",(0,i.kt)("inlineCode",{parentName:"p"},"logging.Server()"),", \u5219\u4f1a\u5728\u6bcf\u6b21\u6536\u5230 Http \u8bf7\u6c42\u7684\u65f6\u5019\u6253\u5370\u8be6\u7ec6\u8bf7\u6c42\u4fe1\u606f\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},"logger := log.DefaultLogger\nvar opts = []http.ServerOption{\n    http.Middleware(\n        logging.Server(logger),\n    ),\n}\nsrv := http.NewServer(opts...)\n")),(0,i.kt)("h4",{id:"http-client"},"http client"),(0,i.kt)("p",null,"\u5728 ",(0,i.kt)("inlineCode",{parentName:"p"},"http.WithMiddleware")," \u4e2d\u5f15\u5165 ",(0,i.kt)("inlineCode",{parentName:"p"},"logging.Client()"),", \u5219\u4f1a\u5728\u6bcf\u6b21\u53d1\u8d77 Http \u8bf7\u6c42\u7684\u65f6\u5019\u6253\u5370\u8be6\u7ec6\u8bf7\u6c42\u4fe1\u606f\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'logger := log.DefaultLogger\nconn, err := http.NewClient(\n    context.Background(),\n    http.WithMiddleware(\n        logging.Client(logger),\n    ),\n    http.WithEndpoint("127.0.0.1:8000"),\n)\n')),(0,i.kt)("p",null,"Logging \u4e2d\u95f4\u4ef6\u5728server \u4e2d\u53ea\u6253\u5370 trace_id \u4e0d\u91c7\u96c6\u6570\u636e"),(0,i.kt)("h3",{id:"\u4f7f\u7528\u65b9\u6cd5-1"},"\u4f7f\u7528\u65b9\u6cd5"),(0,i.kt)("h4",{id:"grpc-server-internalservergrpcgo"},"grpc-server internal/server/grpc.go"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'exporter, err := stdouttrace.New(stdouttrace.WithWriter(ioutil.Discard))\nif err != nil {\n    fmt.Printf("creating stdout exporter: %v", err)\n    panic(err)\n}\ntp := tracesdk.NewTracerProvider(\n    tracesdk.WithBatcher(exporter),\n    tracesdk.WithResource(resource.NewSchemaless(\n        semconv.ServiceNameKey.String(Name)),\n    ))\nvar opts = []grpc.ServerOption{\n        grpc.Middleware(\n            tracing.Server(tracing.WithTracerProvider(tp)),\n        ),\n    }\nsrv := grpc.NewServer(opts...)\n')),(0,i.kt)("h4",{id:"\u65e5\u5fd7\u589e\u52a0trace_id\u5b57\u6bb5--cmd\u9879\u76ee\u540dmaingo"},"\u65e5\u5fd7\u589e\u52a0trace_id\u5b57\u6bb5  cmd/\u9879\u76ee\u540d/main.go"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'logger := log.With(log.NewStdLogger(os.Stdout),\n        "ts", log.DefaultTimestamp,\n        "caller", log.DefaultCaller,\n        "service.id", id,\n        "service.name", Name,\n        "service.version", Version,\n        "trace_id", log.TraceID(),\n        "span_id", log.SpanID(),\n    )\n')),(0,i.kt)("h4",{id:"\u65e5\u5fd7\u6253\u5370trace_id"},"\u65e5\u5fd7\u6253\u5370trace_id"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'log.WithContext(ctx).Errorf("\u521b\u5efaxxx\u5931\u8d25: %s", err)\n')))}d.isMDXComponent=!0}}]);