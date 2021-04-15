(window.webpackJsonp=window.webpackJsonp||[]).push([[209],{280:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return l})),t.d(n,"toc",(function(){return p})),t.d(n,"default",(function(){return s}));var a=t(3),r=t(7),o=(t(0),t(317)),c={title:"Scale"},l={unversionedId:"end-user/scale",id:"end-user/scale",isDocsHomePage:!1,title:"Scale",description:"In the Deploy Application section, we use cpuscaler trait as an auto-scaler for the sample application.",source:"@site/docs/end-user/scale.md",slug:"/end-user/scale",permalink:"/zh/docs/next/end-user/scale",editUrl:"https://github.com/oam-dev/kubevela/edit/master/docs/zh/end-user/scale.md",version:"current",lastUpdatedBy:"kubevela-bot",lastUpdatedAt:1618482335,formattedLastUpdatedAt:"4/15/2021",sidebar:"docs",previous:{title:"Expose Application",permalink:"/zh/docs/next/end-user/expose"},next:{title:"Labels and Annotations",permalink:"/zh/docs/next/end-user/labels"}},p=[{value:"Manuel Scale",id:"manuel-scale",children:[]}],i={toc:p};function s(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},i,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("p",null,"In the ",Object(o.b)("a",{parentName:"p",href:"../application"},"Deploy Application")," section, we use ",Object(o.b)("inlineCode",{parentName:"p"},"cpuscaler")," trait as an auto-scaler for the sample application. "),Object(o.b)("h2",{id:"manuel-scale"},"Manuel Scale"),Object(o.b)("p",null,"You can use scale your application manually by using ",Object(o.b)("inlineCode",{parentName:"p"},"scaler")," trait."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-yaml"},'# sample-manual.yaml\napiVersion: core.oam.dev/v1beta1\nkind: Application\nmetadata:\n  name: website\nspec:\n  components:\n    - name: frontend\n      type: webservice\n      properties:\n        image: nginx\n      traits:\n        - type: scaler\n          properties:\n            replicas: 2\n        - type: sidecar\n          properties:\n            name: "sidecar-test"\n            image: "fluentd"\n    - name: backend\n      type: worker\n      properties:\n        image: busybox\n        cmd:\n          - sleep\n          - \'1000\'\n')),Object(o.b)("p",null,"Change and Apply the sample application:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-shell"},"$ kubectl apply -f https://raw.githubusercontent.com/oam-dev/kubevela/master/docs/examples/enduser/sample-manual.yaml\napplication.core.oam.dev/website configured\n")),Object(o.b)("p",null,"After a while, you can see the underlying deployment of ",Object(o.b)("inlineCode",{parentName:"p"},"frontend")," component has two replicas now."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-shell"},"$ kubectl get deploy -l app.oam.dev/name=website\nNAME       READY   UP-TO-DATE   AVAILABLE   AGE\nbackend    1/1     1            1           19h\nfrontend   2/2     2            2           19h\n")),Object(o.b)("p",null,"To scale up or scale down, you can just modify the ",Object(o.b)("inlineCode",{parentName:"p"},"replicas")," field of ",Object(o.b)("inlineCode",{parentName:"p"},"scaler")," trait and apply the application again."))}s.isMDXComponent=!0},317:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return m}));var a=t(0),r=t.n(a);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var i=r.a.createContext({}),s=function(e){var n=r.a.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=s(e.components);return r.a.createElement(i.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},b=r.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,i=p(e,["components","mdxType","originalType","parentName"]),u=s(t),b=a,m=u["".concat(c,".").concat(b)]||u[b]||d[b]||o;return t?r.a.createElement(m,l(l({ref:n},i),{},{components:t})):r.a.createElement(m,l({ref:n},i))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,c=new Array(o);c[0]=b;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,c[1]=l;for(var i=2;i<o;i++)c[i]=t[i];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"}}]);