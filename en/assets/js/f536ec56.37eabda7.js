(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1367],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return m},kt:function(){return d}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var a=n.createContext({}),u=function(e){var t=n.useContext(a),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},m=function(e){var t=u(e.components);return n.createElement(a.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},l=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,a=e.parentName,m=c(e,["components","mdxType","originalType","parentName"]),l=u(r),d=o,g=l["".concat(a,".").concat(d)]||l[d]||p[d]||i;return r?n.createElement(g,s(s({ref:t},m),{},{components:r})):n.createElement(g,s({ref:t},m))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,s=new Array(i);s[0]=l;var c={};for(var a in t)hasOwnProperty.call(t,a)&&(c[a]=t[a]);c.originalType=e,c.mdxType="string"==typeof e?e:o,s[1]=c;for(var u=2;u<i;u++)s[u]=r[u];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}l.displayName="MDXCreateElement"},4084:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return a},toc:function(){return u},default:function(){return p}});var n=r(2122),o=r(9756),i=(r(7294),r(3905)),s={id:"metrics",title:"Metrics",keywords:["Go","Kratos","Toolkit","Framework","Microservices","Protobuf","gRPC","HTTP"]},c=void 0,a={unversionedId:"component/middleware/metrics",id:"component/middleware/metrics",isDocsHomePage:!1,title:"Metrics",description:"Metrics middleware is used to monitor performance metrics for services, counting request time and request counts.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/component/middleware/metrics.md",sourceDirName:"component/middleware",slug:"/component/middleware/metrics",permalink:"/en/docs/component/middleware/metrics",editUrl:"https://github.com/go-kratos/go-kratos.dev/edit/main/i18n/en/docusaurus-plugin-content-docs/current/component/middleware/metrics.md",version:"current",frontMatter:{id:"metrics",title:"Metrics",keywords:["Go","Kratos","Toolkit","Framework","Microservices","Protobuf","gRPC","HTTP"]},sidebar:"docs",previous:{title:"Logging",permalink:"/en/docs/component/middleware/logging"},next:{title:"Recovery",permalink:"/en/docs/component/middleware/recovery"}},u=[{value:"Configuration",id:"configuration",children:[]},{value:"Usage",id:"usage",children:[]},{value:"References",id:"references",children:[]}],m={toc:u};function p(e){var t=e.components,r=(0,o.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Metrics middleware is used to monitor performance metrics for services, counting request time and request counts."),(0,i.kt)("h3",{id:"configuration"},"Configuration"),(0,i.kt)("p",null,"Two configuration methods are available in metrics middleware ",(0,i.kt)("inlineCode",{parentName:"p"},"WithSeconds()")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"WithRequests()"),"\u3002"),(0,i.kt)("h4",{id:"withseconds"},(0,i.kt)("inlineCode",{parentName:"h4"},"WithSeconds()")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},"func WithSeconds(c metrics.Observer) Option {\n    return func(o *options) {\n        o.seconds = c\n    }\n}\n")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"Observer")," histogram used to set up the metrics middleware statistics request."),(0,i.kt)("h4",{id:"withrequests"},(0,i.kt)("inlineCode",{parentName:"h4"},"WithRequests()")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},"func WithRequests(c metrics.Counter) Option {\n    return func(o *options) {\n        o.requests = c\n    }\n}\n")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"Counter")," counter used to set the metrics middleware statistics request count."),(0,i.kt)("h3",{id:"usage"},"Usage"),(0,i.kt)("h4",{id:"prometheus"},"Prometheus"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'// https://github.com/go-kratos/kratos/tree/main/examples/metrics\n_metricSeconds = prometheus.NewHistogramVec(prometheus.HistogramOpts{\n    Namespace: "server",\n    Subsystem: "requests",\n    Name:      "duration_ms",\n    Help:      "server requests duration(ms).",\n    Buckets:   []float64{5, 10, 25, 50, 100, 250, 500, 1000},\n}, []string{"kind", "operation"})\n\n_metricRequests = prometheus.NewCounterVec(prometheus.CounterOpts{\n    Namespace: "client",\n    Subsystem: "requests",\n    Name:      "code_total",\n    Help:      "The total number of processed requests",\n}, []string{"kind", "operation", "code", "reason"})\n    \nprometheus.MustRegister(_metricSeconds, _metricRequests)\n\nhttpSrv.Handle("/metrics", promhttp.Handler())\n')),(0,i.kt)("h4",{id:"to-configure-metrics-in-servers"},"To configure metrics in servers"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'// grpc sever\ngrpcSrv := grpc.NewServer(\n    grpc.Address(":9000"),\n    grpc.Middleware(\n        metrics.Server(\n            metrics.WithSeconds(prom.NewHistogram(_metricSeconds)),\n            metrics.WithRequests(prom.NewCounter(_metricRequests)),\n        ),\n    ),\n)\n\n// http server\nhttpSrv := http.NewServer(\n    http.Address(":8000"),\n    http.Middleware(\n        metrics.Server(\n            metrics.WithSeconds(prom.NewHistogram(_metricSeconds)),\n            metrics.WithRequests(prom.NewCounter(_metricRequests)),\n        ),\n    ),\n)\n')),(0,i.kt)("h4",{id:"to-configure-metrics-in-clients"},"To configure metrics in clients"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'// grpc client\nconn, err := grpc.DialInsecure(\n    context.Background(),\n    grpc.WithEndpoint("127.0.0.1:9000"),\n    grpc.WithMiddleware(\n        metrics.Client(\n            metrics.WithSeconds(prom.NewHistogram(_metricSeconds)),\n            metrics.WithRequests(prom.NewCounter(_metricRequests)),\n        ),\n    ),\n)\n\n// http client\nconn, err := http.NewClient(\n    context.Background(),\n    http.WithEndpoint("127.0.0.1:8000"),\n    http.WithMiddleware(\n        metrics.Client(\n            metrics.WithSeconds(prom.NewHistogram(_metricSeconds)),\n            metrics.WithRequests(prom.NewCounter(_metricRequests)),\n        ),\n    ),\n)\n')),(0,i.kt)("h3",{id:"references"},"References"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://prometheus.io/docs/concepts/metric_types/"},"https://prometheus.io/docs/concepts/metric_types/")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/go-kratos/kratos/tree/main/examples/metrics"},"https://github.com/go-kratos/kratos/tree/main/examples/metrics"))))}p.isMDXComponent=!0}}]);