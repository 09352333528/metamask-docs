"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[6556],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=a.createContext({}),l=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=l(e.components);return a.createElement(p.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=l(n),d=i,h=c["".concat(p,".").concat(d)]||c[d]||m[d]||o;return n?a.createElement(h,r(r({ref:t},u),{},{components:n})):a.createElement(h,r({ref:t},u))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[c]="string"==typeof e?e:i,r[1]=s;for(var l=2;l<o;l++)r[l]=n[l];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},44291:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>r,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var a=n(87462),i=(n(67294),n(3905));const o={description:"Develop, test, and publish a Snap.",sidebar_position:6},r="Publish a Snap",s={unversionedId:"how-to/publish-a-snap",id:"how-to/publish-a-snap",title:"Publish a Snap",description:"Develop, test, and publish a Snap.",source:"@site/snaps/how-to/publish-a-snap.md",sourceDirName:"how-to",slug:"/how-to/publish-a-snap",permalink:"/snaps-allowlisting/snaps/how-to/publish-a-snap",draft:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/snaps/how-to/publish-a-snap.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{description:"Develop, test, and publish a Snap.",sidebar_position:6},sidebar:"snapsSidebar",previous:{title:"Troubleshoot common issues",permalink:"/snaps-allowlisting/snaps/how-to/debug-a-snap/common-issues"},next:{title:"Get allowlisted",permalink:"/snaps-allowlisting/snaps/how-to/get-allowlisted"}},p={},l=[{value:"Make it available to users",id:"make-it-available-to-users",level:2}],u={toc:l},c="wrapper";function m(e){let{components:t,...n}=e;return(0,i.kt)(c,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"publish-a-snap"},"Publish a Snap"),(0,i.kt)("p",null,"Snaps are npm packages, so publishing a Snap is as simple as publishing an npm package.\nRefer to the ",(0,i.kt)("a",{parentName:"p",href:"https://docs.npmjs.com/cli/v8/commands/npm-publish"},"npm CLI documentation")," for details\non publishing to the public registry.\nThe following details are specific to Snaps:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The version in ",(0,i.kt)("inlineCode",{parentName:"li"},"package.json")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"snap.manifest.json")," should match."),(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("inlineCode",{parentName:"li"},"repository.url")," field in ",(0,i.kt)("inlineCode",{parentName:"li"},"package.json")," should match the correct repository for your Snap."),(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("inlineCode",{parentName:"li"},"source.location.npm.packageName")," in ",(0,i.kt)("inlineCode",{parentName:"li"},"snap.manifest.json")," should match the name in ",(0,i.kt)("inlineCode",{parentName:"li"},"package.json"),"."),(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("inlineCode",{parentName:"li"},"proposedName")," in ",(0,i.kt)("inlineCode",{parentName:"li"},"snap.manifest.json"),' should be a human-readable name and should not include\nthe words "MetaMask" or "Snap." '),(0,i.kt)("li",{parentName:"ul"},"The image specified in ",(0,i.kt)("inlineCode",{parentName:"li"},"iconPath")," in the manifest file is used as the icon displayed when\ninstalling the Snap, in custom dialogs, and in the settings menu.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"This icon should be a valid SVG."),(0,i.kt)("li",{parentName:"ul"},"The icon will be cropped in a circle when displayed in MetaMask; you do not need to make the icon circular.")))),(0,i.kt)("p",null,"After publishing the Snap, any dapp can connect to the Snap by using the Snap ID ",(0,i.kt)("inlineCode",{parentName:"p"},"npm:[packageName]"),"."),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"If you are using the Snap monorepo project generated in the ",(0,i.kt)("a",{parentName:"p",href:"/snaps-allowlisting/snaps/get-started/quickstart"},"quickstart"),",\nmake sure to only publish the Snap package in ",(0,i.kt)("inlineCode",{parentName:"p"},"/packages/snap"),".\nYou can use the ",(0,i.kt)("a",{parentName:"p",href:"https://metamask.github.io/snaps/snaps-simulator/staging/#/manifest"},"Snaps Simulator")," to verify\nthat your Snap was published correctly ","\u2014"," just select ",(0,i.kt)("strong",{parentName:"p"},"localhost")," in the top right corner and change the\nSnap location to ",(0,i.kt)("strong",{parentName:"p"},"npm")," and the ID of your Snap. "),(0,i.kt)("p",{parentName:"admonition"},"Also, make sure to update the manifest file, icon file, and README to differentiate your Snap from the template.")),(0,i.kt)("h2",{id:"make-it-available-to-users"},"Make it available to users"),(0,i.kt)("p",null,"Now that your Snap is published, you probably want to make it available to MetaMask users.\nLearn how to ",(0,i.kt)("a",{parentName:"p",href:"/snaps-allowlisting/snaps/how-to/get-allowlisted"},"get allowlisted")," so anyone can install your Snap in the MetaMask extension."))}m.isMDXComponent=!0}}]);