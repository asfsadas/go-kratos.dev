"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5178],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return d}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},g={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=s(r),d=o,m=u["".concat(p,".").concat(d)]||u[d]||g[d]||a;return r?n.createElement(m,l(l({ref:t},c),{},{components:r})):n.createElement(m,l({ref:t},c))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=u;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var s=2;s<a;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},6071:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return i},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return c},default:function(){return u}});var n=r(3117),o=r(102),a=(r(7294),r(3905)),l=["components"],i={id:"api",title:"API"},p=void 0,s={unversionedId:"component/api",id:"component/api",isDocsHomePage:!1,title:"API",description:"Kratos implements REST and gRPC as the transport protocols. We mainly follow the API Design Guide from Google.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/component/01-api.md",sourceDirName:"component",slug:"/component/api",permalink:"/en/docs/component/api",editUrl:"https://github.com/go-kratos/go-kratos.dev/edit/main/i18n/en/docusaurus-plugin-content-docs/current/component/01-api.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"api",title:"API"},sidebar:"docs",previous:{title:"Examples",permalink:"/en/docs/getting-started/examples"},next:{title:"Config",permalink:"/en/docs/component/config"}},c=[{value:"Definition",id:"definition",children:[],level:2},{value:"Generation",id:"generation",children:[],level:2},{value:"Register API",id:"register-api",children:[],level:2},{value:"References",id:"references",children:[],level:2}],g={toc:c};function u(e){var t=e.components,r=(0,o.Z)(e,l);return(0,a.kt)("wrapper",(0,n.Z)({},g,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Kratos implements REST and gRPC as the transport protocols. We mainly follow the ",(0,a.kt)("a",{parentName:"p",href:"https://cloud.google.com/apis/design/"},"API Design Guide")," from Google."),(0,a.kt)("p",null,"You could define REST API and gRPC API in proto files and generate Go codes from these files. "),(0,a.kt)("h2",{id:"definition"},"Definition"),(0,a.kt)("p",null,"You could define REST API and gRPC API with Protobuf IDL."),(0,a.kt)("p",null,"api/helloworld/v1/greeter.proto"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-protobuf"},'syntax = "proto3";\n\npackage helloworld.v1;\n\nimport "google/api/annotations.proto";\n\noption go_package = "github.com/go-kratos/service-layout/api/helloworld/v1;v1";\noption java_multiple_files = true;\noption java_package = "dev.kratos.api.helloworld.v1";\noption java_outer_classname = "HelloWorldProtoV1";\n\n// The greeting service definition.\nservice Greeter {\n  // Sends a greeting\n  rpc SayHello (HelloRequest) returns (HelloReply)  {\n    option (google.api.http) = {\n        // To define GET API, map name to HelloRequest\n        get: "/helloworld/{name}",\n        // You could also add some additional APIs\n        additional_bindings {\n            // To define POST API, map body to HelloRequest\n            post: "/v1/greeter/say_hello",\n            body: "*",\n        }\n    };\n  }\n}\n\n// The request message contains the user\'s name.\nmessage HelloRequest {\n  string name = 1;\n}\n\n// The response message contains the greetings\nmessage HelloReply {\n  string message = 1;\n}\n')),(0,a.kt)("h2",{id:"generation"},"Generation"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"# To generate proto template\nkratos proto add api/helloworld/v1/greeter.proto\n# To generate client codes\nkratos proto client api/helloworld/v1/greeter.proto\n# To generate server codes\nkratos proto server api/helloworld/v1/greeter.proto -t internal/service\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-apl"},"client:\n|____api\n| |____helloworld\n| | |____v1\n| | | |____greeter.pb.go\n| | | |____greeter.proto\n| | | |____greeter_http.pb.go\n| | | |____greeter_grpc.pb.go\n\nserver:\n| |____service\n| | |____greeter.go\n")),(0,a.kt)("h2",{id:"register-api"},"Register API"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"HTTP API")," is ",(0,a.kt)("inlineCode",{parentName:"p"},"http.Handler")," which generated by ",(0,a.kt)("inlineCode",{parentName:"p"},"protoc-gen-go-http")," plugin, can be registered into HTTPServer."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'import "github.com/go-kratos/kratos/v2/transport/http"\n\ngreeter := &GreeterService{}\nsrv := http.NewServer(http.Address(":8000"))\nsrv.HandlePrefix("/", v1.NewGreeterHandler(greeter))\n')),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"gRPC API")," is gRPC Registrar which generated by ",(0,a.kt)("inlineCode",{parentName:"p"},"protoc-gen-go-grpc")," plugin, can be registered into GRPCServer."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'import "github.com/go-kratos/kratos/v2/transport/grpc"\n\ngreeter := &GreeterService{}\nsrv := grpc.NewServer(grpc.Address(":9000"))\nv1.RegisterGreeterServer(srv, greeter)\n')),(0,a.kt)("h2",{id:"references"},"References"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://cloud.google.com/apis/design"},"https://cloud.google.com/apis/design")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://cloud.google.com/endpoints/docs/grpc/transcoding"},"https://cloud.google.com/endpoints/docs/grpc/transcoding")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/googleapis/googleapis"},"https://github.com/googleapis/googleapis")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://go-kratos.dev/docs/guide/api-protobuf/"},"https://go-kratos.dev/docs/guide/api-protobuf/")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://developers.google.com/protocol-buffers/docs/style"},"https://developers.google.com/protocol-buffers/docs/style")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://developers.google.com/protocol-buffers/docs/proto3"},"https://developers.google.com/protocol-buffers/docs/proto3")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://colobu.com/2017/03/16/Protobuf3-language-guide/"},"https://colobu.com/2017/03/16/Protobuf3-language-guide/"))))}u.isMDXComponent=!0}}]);