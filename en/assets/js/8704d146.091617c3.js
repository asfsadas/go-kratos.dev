"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7759],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return m}});var o=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=o.createContext({}),l=function(e){var n=o.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=l(e.components);return o.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},p=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=l(t),m=r,g=p["".concat(s,".").concat(m)]||p[m]||d[m]||a;return t?o.createElement(g,i(i({ref:n},u),{},{components:t})):o.createElement(g,i({ref:n},u))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,i=new Array(a);i[0]=p;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<a;l++)i[l]=t[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}p.displayName="MDXCreateElement"},3511:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return u},default:function(){return p}});var o=t(3117),r=t(102),a=(t(7294),t(3905)),i=["components"],c={id:"encoding",title:"Encoding",keywords:["Go","Kratos","Toolkit","Framework","Microservices","Protobuf","gRPC","HTTP"]},s=void 0,l={unversionedId:"component/encoding",id:"component/encoding",isDocsHomePage:!1,title:"Encoding",description:"We've abstracted the Codec interface to unify the serialization/deserialization logic for processing requests, and you can implement your own Codec to support more formats. The specific source code is inencoding\u3002",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/component/03-encoding.md",sourceDirName:"component",slug:"/component/encoding",permalink:"/en/docs/component/encoding",editUrl:"https://github.com/go-kratos/go-kratos.dev/edit/main/i18n/en/docusaurus-plugin-content-docs/current/component/03-encoding.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{id:"encoding",title:"Encoding",keywords:["Go","Kratos","Toolkit","Framework","Microservices","Protobuf","gRPC","HTTP"]},sidebar:"docs",previous:{title:"Config",permalink:"/en/docs/component/config"},next:{title:"Errors",permalink:"/en/docs/component/errors"}},u=[{value:"Interface",id:"interface",children:[],level:3},{value:"Example of Codec Implementation",id:"example-of-codec-implementation",children:[],level:3},{value:"Usage",id:"usage",children:[{value:"Register Custom Codec",id:"register-custom-codec",children:[],level:4},{value:"Get the Codec",id:"get-the-codec",children:[],level:4},{value:"Serialization",id:"serialization",children:[],level:4},{value:"Deserialization",id:"deserialization",children:[],level:4}],level:3}],d={toc:u};function p(e){var n=e.components,t=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"We've abstracted the ",(0,a.kt)("inlineCode",{parentName:"p"},"Codec")," interface to unify the serialization/deserialization logic for processing requests, and you can implement your own Codec to support more formats. The specific source code is in",(0,a.kt)("a",{parentName:"p",href:"https://github.com/go-kratos/kratos/tree/main/encoding"},"encoding"),"\u3002"),(0,a.kt)("p",null,"These formats are battery-included."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"json"),(0,a.kt)("li",{parentName:"ul"},"protobuf"),(0,a.kt)("li",{parentName:"ul"},"xml"),(0,a.kt)("li",{parentName:"ul"},"yaml")),(0,a.kt)("h3",{id:"interface"},"Interface"),(0,a.kt)("p",null,"You should implement the following Codec interface for your custom codec."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"// Codec interface is for serialization and deserialization, notice that these methods must be thread-safe.\ntype Codec interface {\n    Marshal(v interface{}) ([]byte, error)\n    Unmarshal(data []byte, v interface{}) error\n    Name() string\n}\n")),(0,a.kt)("h3",{id:"example-of-codec-implementation"},"Example of Codec Implementation"),(0,a.kt)("p",null,"You may refer to the included implementations in kratos, such as ",(0,a.kt)("inlineCode",{parentName:"p"},"json")," when you implementing custom ",(0,a.kt)("inlineCode",{parentName:"p"},"Codec"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'// https://github.com/go-kratos/kratos/blob/main/encoding/json/json.go\npackage json\n\nimport (\n    "encoding/json"\n    "reflect"\n\n    "github.com/go-kratos/kratos/v2/encoding"\n    "google.golang.org/protobuf/encoding/protojson"\n    "google.golang.org/protobuf/proto"\n)\n\n// Name is the name registered for the json codec.\nconst Name = "json"\n\nvar (\n    // MarshalOptions is a configurable JSON format marshaller.\n    MarshalOptions = protojson.MarshalOptions{\n        EmitUnpopulated: true,\n    }\n    // UnmarshalOptions is a configurable JSON format parser.\n    UnmarshalOptions = protojson.UnmarshalOptions{\n        DiscardUnknown: true,\n    }\n)\n\nfunc init() {\n    encoding.RegisterCodec(codec{})\n}\n\n// codec is a Codec implementation with json.\ntype codec struct{}\n\nfunc (codec) Marshal(v interface{}) ([]byte, error) {\n    if m, ok := v.(proto.Message); ok {\n        return MarshalOptions.Marshal(m)\n    }\n    return json.Marshal(v)\n}\n\nfunc (codec) Unmarshal(data []byte, v interface{}) error {\n    rv := reflect.ValueOf(v)\n    for rv.Kind() == reflect.Ptr {\n        if rv.IsNil() {\n            rv.Set(reflect.New(rv.Type().Elem()))\n        }\n        rv = rv.Elem()\n    }\n    if m, ok := v.(proto.Message); ok {\n        return UnmarshalOptions.Unmarshal(data, m)\n    } else if m, ok := reflect.Indirect(reflect.ValueOf(v)).Interface().(proto.Message); ok {\n        return UnmarshalOptions.Unmarshal(data, m)\n    }\n    return json.Unmarshal(data, v)\n}\n\nfunc (codec) Name() string {\n    return Name\n}\n')),(0,a.kt)("h3",{id:"usage"},"Usage"),(0,a.kt)("h4",{id:"register-custom-codec"},"Register Custom Codec"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"encoding.RegisterCodec(codec{})\n")),(0,a.kt)("h4",{id:"get-the-codec"},"Get the Codec"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'jsonCodec := encoding.GetCodec("json")\n')),(0,a.kt)("h4",{id:"serialization"},"Serialization"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'// You should manually import this package if you use it directly: import _ "github.com/go-kratos/kratos/v2/encoding/json"\njsonCode := encoding.GetCodec("json")\ntype user struct {\n    Name string\n    Age string\n    state bool\n}\nu := &user{\n    Name:  "kratos",\n    Age:   "2",\n    state: false,\n}\nbytes, _ := jsonCode.Marshal(u)\n// output {"Name":"kratos","Age":"2"}\n')),(0,a.kt)("h4",{id:"deserialization"},"Deserialization"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'// You should manually import this package if you use it directly:import _ "github.com/go-kratos/kratos/v2/encoding/json"\njsonCode := encoding.GetCodec("json")\ntype user struct {\n    Name string\n    Age string\n    state bool\n}\nu := &user{}\njsonCode.Unmarshal([]byte(`{"Name":"kratos","Age":"2"}`), &u)\n//output &{kratos 2 false}\n')))}p.isMDXComponent=!0}}]);