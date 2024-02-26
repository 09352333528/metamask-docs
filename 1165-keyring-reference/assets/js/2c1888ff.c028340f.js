"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[6556],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>h});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),l=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=l(e.components);return a.createElement(s.Provider,{value:n},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=l(t),d=r,h=u["".concat(s,".").concat(d)]||u[d]||m[d]||o;return t?a.createElement(h,i(i({ref:n},c),{},{components:t})):a.createElement(h,i({ref:n},c))}));function h(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=d;var p={};for(var s in n)hasOwnProperty.call(n,s)&&(p[s]=n[s]);p.originalType=e,p[u]="string"==typeof e?e:r,i[1]=p;for(var l=2;l<o;l++)i[l]=t[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},44291:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>p,toc:()=>l});var a=t(87462),r=(t(67294),t(3905));const o={description:"Develop, test, and publish a Snap.",sidebar_position:8},i="Publish a Snap",p={unversionedId:"how-to/publish-a-snap",id:"how-to/publish-a-snap",title:"Publish a Snap",description:"Develop, test, and publish a Snap.",source:"@site/snaps/how-to/publish-a-snap.md",sourceDirName:"how-to",slug:"/how-to/publish-a-snap",permalink:"/1165-keyring-reference/snaps/how-to/publish-a-snap",draft:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/snaps/how-to/publish-a-snap.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{description:"Develop, test, and publish a Snap.",sidebar_position:8},sidebar:"snapsSidebar",previous:{title:"Troubleshoot common issues",permalink:"/1165-keyring-reference/snaps/how-to/debug-a-snap/common-issues"},next:{title:"Connect to a Snap",permalink:"/1165-keyring-reference/snaps/how-to/connect-to-a-snap"}},s={},l=[{value:"Distribute your Snap",id:"distribute-your-snap",level:2}],c={toc:l},u="wrapper";function m(e){let{components:n,...t}=e;return(0,r.kt)(u,(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"publish-a-snap"},"Publish a Snap"),(0,r.kt)("p",null,"Snaps are npm packages, so publishing a Snap is as simple as publishing an npm package.\nRefer to the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.npmjs.com/cli/v8/commands/npm-publish"},"npm CLI documentation")," for details\non publishing to the public registry.\nThe following details are specific to Snaps:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The version in ",(0,r.kt)("inlineCode",{parentName:"li"},"package.json")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"snap.manifest.json")," should match."),(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("inlineCode",{parentName:"li"},"repository.url")," field in ",(0,r.kt)("inlineCode",{parentName:"li"},"package.json")," should match the correct repository for your Snap."),(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("inlineCode",{parentName:"li"},"source.location.npm.packageName")," in ",(0,r.kt)("inlineCode",{parentName:"li"},"snap.manifest.json")," should match the name in ",(0,r.kt)("inlineCode",{parentName:"li"},"package.json"),"."),(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("inlineCode",{parentName:"li"},"proposedName")," in ",(0,r.kt)("inlineCode",{parentName:"li"},"snap.manifest.json"),' should be a human-readable name and should not include\nthe words "MetaMask" or "Snap." '),(0,r.kt)("li",{parentName:"ul"},"The image specified in ",(0,r.kt)("inlineCode",{parentName:"li"},"iconPath")," in the manifest file is used as the icon displayed when\ninstalling the Snap, in custom dialogs, and in the settings menu.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"This icon should be a valid SVG."),(0,r.kt)("li",{parentName:"ul"},"The icon will be cropped in a circle when displayed in MetaMask; you do not need to make the icon circular.")))),(0,r.kt)("p",null,"After publishing the Snap, any dapp can connect to the Snap by using the Snap ID ",(0,r.kt)("inlineCode",{parentName:"p"},"npm:[packageName]"),"."),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"If you are using the Snap monorepo project generated in the ",(0,r.kt)("a",{parentName:"p",href:"/1165-keyring-reference/snaps/get-started/quickstart"},"quickstart"),",\nmake sure to only publish the Snap package in ",(0,r.kt)("inlineCode",{parentName:"p"},"/packages/snap"),".\nYou can use the ",(0,r.kt)("a",{parentName:"p",href:"https://metamask.github.io/snaps/snaps-simulator/staging/#/manifest"},"Snaps Simulator")," to verify\nthat your Snap was published correctly ","\u2014"," just select ",(0,r.kt)("strong",{parentName:"p"},"localhost")," in the top right corner and change the\nSnap location to ",(0,r.kt)("strong",{parentName:"p"},"npm")," and the ID of your Snap. "),(0,r.kt)("p",{parentName:"admonition"},"Also, make sure to update the manifest file, icon file, and README to differentiate your Snap from the template.")),(0,r.kt)("h2",{id:"distribute-your-snap"},"Distribute your Snap"),(0,r.kt)("p",null,"You should deploy a companion dapp where users can learn about your Snap and install it, or\nintegrate with your existing dapp."),(0,r.kt)("p",null,"If your Snap is designed to communicate with dapps, you can encourage other dapp developers to\n",(0,r.kt)("a",{parentName:"p",href:"/1165-keyring-reference/snaps/how-to/connect-to-a-snap"},"connect to your Snap"),"."))}m.isMDXComponent=!0}}]);