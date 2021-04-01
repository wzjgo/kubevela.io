(window.webpackJsonp=window.webpackJsonp||[]).push([[83],{155:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return s})),a.d(t,"metadata",(function(){return o})),a.d(t,"toc",(function(){return l})),a.d(t,"default",(function(){return p}));var n=a(3),i=a(7),r=(a(0),a(201)),s={title:"Introduction",slug:"/"},o={unversionedId:"introduction",id:"introduction",isDocsHomePage:!1,title:"Introduction",description:"alt",source:"@site/docs/introduction.md",slug:"/",permalink:"/docs/",editUrl:"https://github.com/oam-dev/kubevela/edit/master/docs/en/introduction.md",version:"current",lastUpdatedBy:"kubevela-bot",lastUpdatedAt:1617204822,formattedLastUpdatedAt:"3/31/2021",sidebar:"docs",next:{title:"How it Works",permalink:"/docs/concepts"}},l=[{value:"Motivation",id:"motivation",children:[]},{value:"What is KubeVela?",id:"what-is-kubevela",children:[]},{value:"Comparisons",id:"comparisons",children:[{value:"KubeVela vs. Platform-as-a-Service (PaaS)",id:"kubevela-vs-platform-as-a-service-paas",children:[]},{value:"KubeVela vs. Serverless",id:"kubevela-vs-serverless",children:[]},{value:"KubeVela vs. Platform agnostic developer tools",id:"kubevela-vs-platform-agnostic-developer-tools",children:[]},{value:"KubeVela vs. Helm",id:"kubevela-vs-helm",children:[]},{value:"KubeVela vs. Kubernetes",id:"kubevela-vs-kubernetes",children:[]}]},{value:"Getting Started",id:"getting-started",children:[]}],c={toc:l};function p(e){var t=e.components,s=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},c,s,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,Object(r.b)("img",{alt:"alt",src:a(290).default})),Object(r.b)("h2",{id:"motivation"},"Motivation"),Object(r.b)("p",null,'The trend of cloud-native technology is moving towards pursuing consistent application delivery across clouds and on-premises infrastructures using Kubernetes as the common abstraction layer. Kubernetes, although excellent in abstracting low-level infrastructure details, does introduce extra complexity to application developers, namely understanding the concepts of pods, port exposing, privilege escalation, resource claims, CRD, and so on. We\u2019ve seen the nontrivial learning curve and the lack of developer-facing abstraction have impacted user experiences, slowed down productivity, led to unexpected errors or misconfigurations in production. People start to question the value of this revolution: "why am I bothered with all these details?".'),Object(r.b)("p",null,"On the other hand, abstracting Kubernetes to serve developers' requirements is a highly opinionated process, and the resultant abstractions would only make sense had the decision makers been the platform builders. Unfortunately, the platform builders today face the following dilemma:"),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"There is no tool or framework for them to easily build user friendly yet highly extensible abstractions"),". "),Object(r.b)("p",null,"Thus, many platforms today are essentially restricted abstractions with in-house add-on mechanisms despite the extensibility of Kubernetes. This makes extending such platforms for developers' requirements or to wider scenarios almost impossible, not to mention taking the full advantage of the rich Kubernetes ecosystems."),Object(r.b)("p",null,"In the end, developers complain those platforms are too rigid and slow in response to feature requests or improvements. The platform builders do want to help but the engineering effort is daunting: any simple API change in the platform could easily become a marathon negotiation around the opinionated abstraction design."),Object(r.b)("h2",{id:"what-is-kubevela"},"What is KubeVela?"),Object(r.b)("p",null,"For platform builders, KubeVela serves as a framework that relieves the pains of building developer focused platforms by doing the following:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Developer Centric. KubeVela abstracts away the infrastructure level primitives by introducing the ",Object(r.b)("em",{parentName:"p"},"Application")," concept as main API, and then building operational features around the applications' needs only.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Extending Natively. The ",Object(r.b)("em",{parentName:"p"},"Application")," is composed of modularized building blocks that support ",Object(r.b)("a",{parentName:"p",href:"https://github.com/cuelang/cue"},"CUELang")," and ",Object(r.b)("a",{parentName:"p",href:"https://helm.sh"},"Helm")," as template engines. This enable you to abstract Kubernetes capabilities in LEGO-style and ship them to end users via plain ",Object(r.b)("inlineCode",{parentName:"p"},"kubectl apply -f"),". Changes made to the abstraction templates take effect at runtime, neither recompilation nor redeployment of KubeVela is required.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Simple yet Reliable Abstraction Mechanism. Unlike most IaC (Infrastructure-as-Code) solutions, the abstractions in KubeVela is built with ",Object(r.b)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/architecture/controller/"},"Kubernetes Control Loop")," so they will never leave ",Object(r.b)("em",{parentName:"p"},"Configuration Drift")," in your cluster. As a ",Object(r.b)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/extend-kubernetes/api-extension/custom-resources/"},"Kubernetes Custom Resource"),", KubeVela works with any CI/CD or GitOps tools seamlessly, no integration effort needed."))),Object(r.b)("p",null,"With KubeVela, the platform builders finally have the tooling supports to design easy-to-use abstractions and ship them to end-users with high confidence and low turn around time. "),Object(r.b)("p",null,"For end-users (e.g. app developers), such abstractions built with KubeVela will enable them to design and ship applications to Kubernetes with minimal effort - instead of managing a handful infrastructure details, a simple application definition that can be easily integrated with any CI/CD pipeline is all they need."),Object(r.b)("h2",{id:"comparisons"},"Comparisons"),Object(r.b)("h3",{id:"kubevela-vs-platform-as-a-service-paas"},"KubeVela vs. Platform-as-a-Service (PaaS)"),Object(r.b)("p",null,"The typical examples are Heroku and Cloud Foundry. They provide full application management capabilities and aim to improve developer experience and efficiency. In this context, KubeVela can provide similar experience."),Object(r.b)("p",null,"Though the biggest difference lies in ",Object(r.b)("strong",{parentName:"p"},"flexibility"),"."),Object(r.b)("p",null,"KubeVela is a Kubernetes plug-in that enabling you to serve end users with simplicity by defining your own abstractions, and this is achieved by templating Kubernetes API resources as application-centric abstractions in your cluster. Comparing to this mechanism, most existing PaaS systems are highly restricted and inflexible, i.e. they have to enforce constraints in the type of supported applications and capabilities, and as application needs grows, they always outgrow the capabilities of a PaaS system - this will never happen in KubeVela. "),Object(r.b)("h3",{id:"kubevela-vs-serverless"},"KubeVela vs. Serverless"),Object(r.b)("p",null,'Serverless platform such as AWS Lambda provides extraordinary user experience and agility to deploy serverless applications. However, those platforms impose even more constraints in extensibility. They are arguably "hard-coded" PaaS.'),Object(r.b)("p",null,"Kubernetes based serverless platforms such as Knative, OpenFaaS can be easily integrated with KubeVela by registering themselves as new workload types and traits. Even for AWS Lambda, there is a success story to integrate it with KubeVela by the tools developed by Crossplane."),Object(r.b)("h3",{id:"kubevela-vs-platform-agnostic-developer-tools"},"KubeVela vs. Platform agnostic developer tools"),Object(r.b)("p",null,"The typical example is Hashicorp's Waypoint. Waypoint is a developer facing tool which introduces a consistent workflow (i.e., build, deploy, release) to ship applications on top of different platforms."),Object(r.b)("p",null,"KubeVela can be integrated into Waypoint as a supported platform. In this case, developers could use the Waypoint workflow to manage applications with leverage of abstractions (e.g. application, rollout, ingress, autoscaling etc) you built via KubeVela."),Object(r.b)("h3",{id:"kubevela-vs-helm"},"KubeVela vs. Helm"),Object(r.b)("p",null,"Helm is a package manager for Kubernetes that provides package, install, and upgrade a set of YAML files for Kubernetes as a unit. KubeVela leverages Helm heavily to package the capability dependencies and Helm is also one of the core templating engines behind ",Object(r.b)("em",{parentName:"p"},"Application")," abstraction."),Object(r.b)("p",null,"Though KubeVela itself is not a package manager, it's a core engine for platform builders to create upper layer platforms in easy and repeatable approach."),Object(r.b)("h3",{id:"kubevela-vs-kubernetes"},"KubeVela vs. Kubernetes"),Object(r.b)("p",null,"KubeVela is a Kubernetes plugin for building higher level abstractions. It leverages ",Object(r.b)("a",{parentName:"p",href:"https://github.com/oam-dev/spec"},"Open Application Model")," and the native Kubernetes extensibility to resolve a hard problem - making shipping applications enjoyable on Kubernetes."),Object(r.b)("h2",{id:"getting-started"},"Getting Started"),Object(r.b)("p",null,"Now let's ",Object(r.b)("a",{parentName:"p",href:"/docs/quick-start"},"get started")," with KubeVela!"))}p.isMDXComponent=!0},201:function(e,t,a){"use strict";a.d(t,"a",(function(){return u})),a.d(t,"b",(function(){return h}));var n=a(0),i=a.n(n);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var c=i.a.createContext({}),p=function(e){var t=i.a.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=p(e.components);return i.a.createElement(c.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},d=i.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(a),d=n,h=u["".concat(s,".").concat(d)]||u[d]||b[d]||r;return a?i.a.createElement(h,o(o({ref:t},c),{},{components:a})):i.a.createElement(h,o({ref:t},c))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,s=new Array(r);s[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:n,s[1]=o;for(var c=2;c<r;c++)s[c]=a[c];return i.a.createElement.apply(null,s)}return i.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"},290:function(e,t,a){"use strict";a.r(t),t.default="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPYAAAD2CAYAAADlEnrIAAAACXBIWXMAABYlAAAWJQFJUiTwAAALSklEQVR4nO3d7XEbuxWHcSBzv0sdiDcNWKlASgG5ZiqQUoGZCqxUEKYCyxVEtwO6gkgVRK4gUgXIrHk2w8vskvsG4ODg+c1wPCPLY3DJ/wKLVx9CcABs+R2fJ2APwQYMItiAQQQbMIhgAwYRbMAggg0YRLABgwg2YBDBBgwi2IBBBBswiGADBhFswCCCDRhEsAGDCDZgEMEGDCLYgEEEGzCIYAMGEWzAIIINGESwAYMINmAQwQYMItiAQQQbMIhgAwYRbJzkN+6SK1Qego1zHgl3eQg2zmlCvSPcZSHYGOJDU3NzpcpBsDHUR79xW65WGQg2xvjkN+6eK6YfwcZYW79x11w13Qg2xrpwzj3RmaYbwcYUV024uXJ6EWxMdeM37oGrpxPBxhyf/cbdcgX1IdiYi+dthQg25rrgeVsfgo0l8LytDMHGUj4zvq0HwcaSeN5WgmBjSc34Nk1yBQg2lvaJIbD8CDZiYHOGzAg2YqBJnhnBRiw0yTMi2IiJJnkmBBsx0STPhGAjtk9MXEmPYCMFNkJMjGAjhQ9+4zZc6XQINprTPlLUqA90pKVDsCsnob5LcBWa5Z1sX5wIwa5YwlC37hjbToNgVypDqFsMfyVAsCuUMdRONmXg0IHICHZlMoe6RUdaZAS7IlJT5g61kxlpDH9FRLArIaH+oujdbqi14yHYFZApnZpC7WT4i460SAi2cRLqndJ32cwjXykohzkE2zBp6j5K7agVtXYEBNu2pqb+oPwd3lFrL49gGyXDWtpD3aLWXhjBNkjRsNZQ1NoLI9jGKO0BH4Jae0EE2xDpLNPaA34OtfaCCLYtT8p7wM+h1l4IwTZCTru8KfzdUGsvhGAbIGucPxt5O8whXwDBLpw8V1s6eP6eOeTzEezyaZ9ZNtYFtfZ8BLtgsvPnR4NvjY0YZiLYhZJOJqu9yFfssjIPwS5X6UNb5xDsGQh2gWRoq5R54FPdcDTQdAS7MNIEtzK0dQ6daBMR7PLUdA7WHUNf0xDsgkgveOmzy8biWXsCgl0I473gp9Acn4Bgl2NrvBe8zxXHAo1HsAsgX2yLE1GGojk+EsEuQ+0Hx6/pRBuHYCsnY9ZXlV+G5hFkraAcxSDYikmHGZ1HezTHRyDYuj1U2mHW5YZNGIYj2ErJdMqSdhpNgeb4QARbr23tF6ADjyUDEWyFZHirthlmQ1yxMGQYgq0TtXU/OtEGINjKyAYD1pdkzsFz9gAEWx/21j6N5vgABFsRqa1rn4wyBM3xMwi2LtTWw7Ao5AyCrQS19SgfmKxyGsHWg9p6HDrRTiDYCsi4NbX1OAT7BIKtA7X1eDcs5exHsDNjltksdKL1INj5MXQzHc3xHgQ7I+nZZQXXdNTYPQh2XtTW8zALrQfBzotliPNRa3cg2JnIhBR2R5mPYHcg2PnQDF8Gwe5AsDOQTjOGuJZxwXP2/yPYefBsvSxq7SMEOw+a4csi2EcIdmJ+82NSBZ1myyLYRwh2etTWy+M5+wjBTkgWLdR8uF5MBPsAwU6Luc3x0Bw/QLDTItjxUGMfINiJ0AyPji2bDxDsdKitI5O17dVzBDspgh0fzXFBsBOgGZ4MwRYEOw1q6zQItiDYafDslwYdaIJgp0GNnQgdaHsEOzL5ojE3PJ3qTwhxBDsJapC0qg+2I9hJ0AxPq/obqSPYcckwFx06aVVfYzuCHR21R3rVn4HmCHZ0BDsD1mYT7NgIdh7VN8cJdiQ8X2dFja2gDFZV/+XKqPrjdQl2PDTD86n+pkqw4yHY+fCMraAMVlVfa2RU/ZAXwY5AjvBhfnhG0nlZLYIdB7V1flV/BgQ7DoKNrAh2HHSc5Vf1Z0Cw46i+VxZ5Eew4qu+VVaDqmyvBXhhb86hBsLEomuHIjmAvj2DrUPU49k8KynCS937Vcab0s3Pu7ehnbyGEZwVFZqhLh6pX1qkPdgjh1Xt/P6RDynvf9eOXrpuA3ByO7Tp+9tqUYUSRq19ZhPzUB1tsnXN/n/hv++7cXUfufO76xZ4bxreOn726P/166X7/y/HfXTPFFCn5EIL6C+69b2rB/ygoyhDfQwhnn7NlLnNXs/26o9Y/9buL3DDC1nXevfzmRyvmZon/I4M/hG1ny8y8ImrsEMKb9/6rc+5OQXHOufLe34YQupr1/xO2Px4Hun7n5L87Z+QNY2W8s6/ax6Iiamy3r7WbL+a/FBRliK8hhOMOv6LJirWum0DXuH3f76au+f8YtvNulKUqJthuH+6SmoU/j+x0q1LPDWPsY0pfPwrBLoH0jn8ppLh/CyE8KChHlWQL4ld55KlOUcF2+3C/FdLD/B5CYOgLWZQ482yroAxDXEgLA0iuxGA/KijDUAQbWRQXbOmQ+qqgKEPcNENf+osJa0pdBFJSrb2VCTZAMkUGWyZ/vCgoyhDNUMxz87xNwJFKcb3ircKGvo699yxC6Vy11vW752a2oW4lB/vyx6ILFlcc+i7X5FjnqrWu3+WGYUOxwXb7cDdDX58UFMW6MTcMzWvlq1F6sJupiP9WUBRMM2atPDeMEYoOttuH+6lnbTXqNWVzDVM3CQvBXjvn/qmgKCibqbn9xQfb7cP9yl7emKEZpVg16/6tXEQru5SWMn8cOm0thdoZqrEZ+sJU5mprZ6XGlg/lSUFRUB5ztbWzUmM7hr4wjcna2lk6CURWfXVtCQz0MVlbO4NH/JS06gt5vVvudDUV7BDCo0x/BM4xW1s7o4fyUWvjHNO1tTMa7K18cECfB8u1tbMYbPnA2GsMfb6FEMxPaDJ5PnYIoRnT/oeCokCXpiW3ruEzMXvwfQhhU9Cmh4ivCfWt9SZ4y2yw3T7c94QbB6GuZu22mZlnp2TYaeV4osyp86VSlmOVYRVc1/5uKcvRDH+uq9uQoQl2DS95tmqaYSHC601646/7rqWEey3DcTHKEGQhzJBy3Mvc+pjl2Awsxy5iOZr3eFnLd/w317eqN7v/Mm0X/OI0gd5MKMdq4YA3QbovuBy3Cwf8VZreVX2/f3NNq3zT+y/0dkYN3tZIs2qDBcrxPCVIPeV4nFGO3ULluJ15o3mSZneV3+vDVxXP2KfIETzt67pnTfd3CVHzBd7FeF6TLZ6uz5TjRW4qTTmeYpy/LeVoy3CqHIfXY9FyyPr6w8+k70z0b0fXo8ojc7tUH2zAItPDXUCtCDZgEMEGDCLYgEEEGzCIYAMG/VT7h+q9v5YZadDvmbHqYaoPtsxX5ihe/d5lhhwGqH6CisxyeubsL/X+LBtoYIDqn7HZSqkIXwn1ONXX2C3vfRPuLzpKgwMvIYRrLsg41dfYLdmTnN1WdHmRhSAYiWAfkK2U2ARRh5ea9ihbGsE+Ipsg/kVVoerzK6Geh2fsHjK+/ZSot/x7u7ZZ1he3VtIUXSc++/tFNl1wGfZJ+2sN+35HV/tOE+dezakREfdKG7yVkPTcv0YqR7tnW+d2Qon2J9vJkbbVf+cW+d7WfgEGXaT5WxhNDnRHWZYM+JvcuAZv8SQtiCU3QtzVvj9ZjBdN8RFkMstaXh9H/vO2ub1dYmsl2cJoPaGZ/n6wldDkAwy99yv5v+8nbK38InubRdneCTxjzyL7pa2OXq1nqRGfZY5ztC+w9AesZH+wS/mz9Xrweo60X9vlwX5t7qAcrd3Bn8z3ToBgAwYx3AUYRLABgwg2YBDBBgwi2IBBBBswiGADBhFswCCCDRhEsAGDCDZgEMEGDCLYgEEEGzCIYAMGEWzAIIINGESwAYMINmAQwQYMItiAQQQbMIhgAwYRbMAggg0YRLABgwg2YBDBBgwi2IBBBBswiGADBhFswCCCDRhEsAGDCDZgEMEGDCLYgEEEGzCIYAMGEWzAGufcfwH8cVECuWCIBwAAAABJRU5ErkJggg=="}}]);