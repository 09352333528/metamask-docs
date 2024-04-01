"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[9048],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>k});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},s=Object.keys(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=r.createContext({}),i=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},m=function(e){var t=i(e.components);return r.createElement(p.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,s=e.originalType,p=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),c=i(a),d=n,k=c["".concat(p,".").concat(d)]||c[d]||u[d]||s;return a?r.createElement(k,o(o({ref:t},m),{},{components:a})):r.createElement(k,o({ref:t},m))}));function k(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=a.length,o=new Array(s);o[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[c]="string"==typeof e?e:n,o[1]=l;for(var i=2;i<s;i++)o[i]=a[i];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},64846:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>s,metadata:()=>l,toc:()=>i});var r=a(87462),n=(a(67294),a(3905));const s={sidebar_label:"Other web frameworks",sidebar_position:3,description:"Set up the SDK in other web frameworks.",tags:["JavaScript SDK"]},o="Use MetaMask SDK with other web frameworks",l={unversionedId:"how-to/use-sdk/javascript/other-web-frameworks",id:"how-to/use-sdk/javascript/other-web-frameworks",title:"Use MetaMask SDK with other web frameworks",description:"Set up the SDK in other web frameworks.",source:"@site/wallet/how-to/use-sdk/javascript/other-web-frameworks.md",sourceDirName:"how-to/use-sdk/javascript",slug:"/how-to/use-sdk/javascript/other-web-frameworks",permalink:"/PR-template/wallet/how-to/use-sdk/javascript/other-web-frameworks",draft:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/wallet/how-to/use-sdk/javascript/other-web-frameworks.md",tags:[{label:"JavaScript SDK",permalink:"/PR-template/wallet/tags/java-script-sdk"}],version:"current",sidebarPosition:3,frontMatter:{sidebar_label:"Other web frameworks",sidebar_position:3,description:"Set up the SDK in other web frameworks.",tags:["JavaScript SDK"]},sidebar:"walletSidebar",previous:{title:"Pure JavaScript",permalink:"/PR-template/wallet/how-to/use-sdk/javascript/pure-js"},next:{title:"React Native and Expo",permalink:"/PR-template/wallet/how-to/use-sdk/javascript/react-native"}},p={},i=[{value:"Steps",id:"steps",level:2},{value:"1. Install the SDK",id:"1-install-the-sdk",level:3},{value:"2. Import the SDK",id:"2-import-the-sdk",level:3},{value:"3. Instantiate the SDK",id:"3-instantiate-the-sdk",level:3},{value:"4. Use the SDK",id:"4-use-the-sdk",level:3},{value:"Example",id:"example",level:2}],m={toc:i},c="wrapper";function u(e){let{components:t,...a}=e;return(0,n.kt)(c,(0,r.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"use-metamask-sdk-with-other-web-frameworks"},"Use MetaMask SDK with other web frameworks"),(0,n.kt)("p",null,"Import ",(0,n.kt)("a",{parentName:"p",href:"/PR-template/wallet/concepts/sdk/"},"MetaMask SDK")," into your web dapp to enable your users to\neasily connect to the MetaMask browser extension and MetaMask Mobile.\nThe SDK for other web frameworks has the ",(0,n.kt)("a",{parentName:"p",href:"/PR-template/wallet/how-to/use-sdk/javascript/#prerequisites"},"same prerequisites")," as for\nstandard JavaScript."),(0,n.kt)("h2",{id:"steps"},"Steps"),(0,n.kt)("h3",{id:"1-install-the-sdk"},"1. Install the SDK"),(0,n.kt)("p",null,"In your project directory, install the SDK using Yarn or npm:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @metamask/sdk\n")),(0,n.kt)("p",null,"or"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"npm i @metamask/sdk\n")),(0,n.kt)("h3",{id:"2-import-the-sdk"},"2. Import the SDK"),(0,n.kt)("p",null,"In your project script, add the following to import the SDK:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-javascript"},'import { MetaMaskSDK } from "@metamask/sdk";\n')),(0,n.kt)("h3",{id:"3-instantiate-the-sdk"},"3. Instantiate the SDK"),(0,n.kt)("p",null,"Instantiate the SDK using any ",(0,n.kt)("a",{parentName:"p",href:"/PR-template/wallet/reference/sdk-js-options"},"options"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-javascript"},'const MMSDK = new MetaMaskSDK(\n    dappMetadata: {\n        name: "Example JavaScript Dapp",\n        url: window.location.href,\n    },\n    infuraAPIKey: process.env.INFURA_API_KEY,\n    // Other options\n);\n\n// You can also access via window.ethereum\nconst ethereum = MMSDK.getProvider();\n')),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Use ",(0,n.kt)("a",{parentName:"li",href:"/PR-template/wallet/reference/sdk-js-options#dappmetadata"},(0,n.kt)("inlineCode",{parentName:"a"},"dappMetadata"))," to display information\nabout your dapp in the MetaMask connection modal."),(0,n.kt)("li",{parentName:"ul"},"Use ",(0,n.kt)("a",{parentName:"li",href:"/PR-template/wallet/reference/sdk-js-options#infuraapikey"},(0,n.kt)("inlineCode",{parentName:"a"},"infuraAPIKey"))," to\n",(0,n.kt)("a",{parentName:"li",href:"/PR-template/wallet/how-to/use-sdk/javascript/make-read-only-requests"},"make read-only RPC requests")," from your dapp."),(0,n.kt)("li",{parentName:"ul"},"Use ",(0,n.kt)("a",{parentName:"li",href:"/PR-template/wallet/reference/sdk-js-options#modals"},(0,n.kt)("inlineCode",{parentName:"a"},"modals"))," to ",(0,n.kt)("a",{parentName:"li",href:"/PR-template/wallet/how-to/use-sdk/javascript/display-custom-modals"},"customize the logic and UI of\nthe displayed modals"),".")),(0,n.kt)("h3",{id:"4-use-the-sdk"},"4. Use the SDK"),(0,n.kt)("p",null,"Use the SDK by calling any ",(0,n.kt)("a",{parentName:"p",href:"/PR-template/wallet/reference/provider-api"},"provider API methods"),".\nAlways call ",(0,n.kt)("a",{parentName:"p",href:"/wallet/reference/eth_requestaccounts"},(0,n.kt)("inlineCode",{parentName:"a"},"eth_requestAccounts"))," using\n",(0,n.kt)("a",{parentName:"p",href:"/PR-template/wallet/reference/provider-api#request"},(0,n.kt)("inlineCode",{parentName:"a"},"request()"))," first, since it\nprompts the installation or connection popup to appear."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-javascript"},'ethereum.request({ method: "eth_requestAccounts", params: [] });\n')),(0,n.kt)("p",null,"You can also call the SDK's ",(0,n.kt)("a",{parentName:"p",href:"/PR-template/wallet/how-to/use-sdk/javascript/connect-and-sign"},(0,n.kt)("inlineCode",{parentName:"a"},"connectAndSign"))," method, and\n",(0,n.kt)("a",{parentName:"p",href:"/PR-template/wallet/how-to/use-sdk/javascript/batch-json-rpc-requests"},"batch multiple JSON-RPC requests")," using the ",(0,n.kt)("inlineCode",{parentName:"p"},"metamask_batch")," method."),(0,n.kt)("h2",{id:"example"},"Example"),(0,n.kt)("p",null,"You can copy the full JavaScript example to get started:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="index.js"',title:'"index.js"'},'import { MetaMaskSDK } from "@metamask/sdk";\n\nconst MMSDK = new MetaMaskSDK(\n    dappMetadata: {\n        name: "Example JavaScript Dapp",\n        url: window.location.href,\n    },\n    infuraAPIKey: process.env.INFURA_API_KEY,\n    // Other options\n);\n\n// You can also access via window.ethereum\nconst ethereum = MMSDK.getProvider();\n\nethereum.request({ method: "eth_requestAccounts", params: [] });\n')),(0,n.kt)("p",null,"See the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/MetaMask/metamask-sdk/tree/main/packages/examples"},"example JavaScript dapps"),"\nin the JavaScript SDK GitHub repository for more information."))}u.isMDXComponent=!0}}]);