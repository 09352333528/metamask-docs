"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[8930],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(r),m=a,f=u["".concat(c,".").concat(m)]||u[m]||d[m]||o;return r?n.createElement(f,i(i({ref:t},p),{},{components:r})):n.createElement(f,i({ref:t},p))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[u]="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},59178:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var n=r(87462),a=(r(67294),r(3905));const o={sidebar_label:"Electron",sidebar_position:6,description:"Set up the SDK in your Electron dapp.",tags:["JavaScript SDK"]},i="Use MetaMask SDK with Electron",s={unversionedId:"how-to/use-sdk/javascript/electron",id:"how-to/use-sdk/javascript/electron",title:"Use MetaMask SDK with Electron",description:"Set up the SDK in your Electron dapp.",source:"@site/wallet/how-to/use-sdk/javascript/electron.md",sourceDirName:"how-to/use-sdk/javascript",slug:"/how-to/use-sdk/javascript/electron",permalink:"/zs/interactive-ui/wallet/how-to/use-sdk/javascript/electron",draft:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/wallet/how-to/use-sdk/javascript/electron.md",tags:[{label:"JavaScript SDK",permalink:"/zs/interactive-ui/wallet/tags/java-script-sdk"}],version:"current",sidebarPosition:6,frontMatter:{sidebar_label:"Electron",sidebar_position:6,description:"Set up the SDK in your Electron dapp.",tags:["JavaScript SDK"]},sidebar:"walletSidebar",previous:{title:"Node.js",permalink:"/zs/interactive-ui/wallet/how-to/use-sdk/javascript/nodejs"},next:{title:"Connect and sign",permalink:"/zs/interactive-ui/wallet/how-to/use-sdk/javascript/connect-and-sign"}},c={},l=[{value:"Example",id:"example",level:2}],p={toc:l},u="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"use-metamask-sdk-with-electron"},"Use MetaMask SDK with Electron"),(0,a.kt)("p",null,"Import ",(0,a.kt)("a",{parentName:"p",href:"/zs/interactive-ui/wallet/concepts/sdk/"},"MetaMask SDK")," into your Electron dapp to enable your users\nto easily connect to the MetaMask browser extension and MetaMask Mobile."),(0,a.kt)("p",null,"On the frontend, see the instructions to ",(0,a.kt)("a",{parentName:"p",href:"/zs/interactive-ui/wallet/how-to/use-sdk/javascript/react/"},"use the SDK with React"),".\nOn the backend, see the instructions to ",(0,a.kt)("a",{parentName:"p",href:"/zs/interactive-ui/wallet/how-to/use-sdk/javascript/nodejs"},"use the SDK with Node.js"),"."),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("p",null,"See the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/MetaMask/metamask-sdk/tree/main/packages/examples/electronjs"},"example Electron dapp"),"\nin the JavaScript SDK GitHub repository for more information."))}d.isMDXComponent=!0}}]);