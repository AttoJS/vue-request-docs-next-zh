"use strict";(self.webpackChunkzh=self.webpackChunkzh||[]).push([[43],{78043:(e,l,t)=>{t.d(l,{Z:()=>De});var a=t(27875),n=t(50349),i=t(40641),u=t(14825),o=t(95565),s=t(42049),r=t(39931);const c=["href","rel","target","aria-label"],v=(0,a.aZ)({inheritAttrs:!1}),d=(0,a.aZ)({...v,__name:"NavLink",props:{item:{type:Object,required:!0}},setup(e){const l=e,t=(0,s.yj)(),u=(0,o.WF)(),{item:v}=(0,i.BK)(l),d=(0,a.Fl)((()=>(0,r.ak)(v.value.link))),p=(0,a.Fl)((()=>(0,r.B2)(v.value.link)||(0,r.R5)(v.value.link))),g=(0,a.Fl)((()=>{if(!p.value)return v.value.target?v.value.target:d.value?"_blank":void 0})),h=(0,a.Fl)((()=>"_blank"===g.value)),m=(0,a.Fl)((()=>!d.value&&!p.value&&!h.value)),k=(0,a.Fl)((()=>{if(!p.value)return v.value.rel?v.value.rel:h.value?"noopener noreferrer":void 0})),w=(0,a.Fl)((()=>v.value.ariaLabel||v.value.text)),b=(0,a.Fl)((()=>{const e=Object.keys(u.value.locales);return e.length?!e.some((e=>e===v.value.link)):"/"!==v.value.link})),U=(0,a.Fl)((()=>!!b.value&&t.path.startsWith(v.value.link))),f=(0,a.Fl)((()=>!!m.value&&(v.value.activeMatch?new RegExp(v.value.activeMatch).test(t.path):U.value)));return(e,l)=>{const t=(0,a.up)("RouterLink"),u=(0,a.up)("OutboundLink");return(0,i.SU)(m)?((0,a.wg)(),(0,a.j4)(t,(0,a.dG)({key:0,class:["nav-link",{"router-link-active":(0,i.SU)(f)}],to:(0,i.SU)(v).link,"aria-label":(0,i.SU)(w)},e.$attrs),{default:(0,a.w5)((()=>[(0,a.WI)(e.$slots,"before"),(0,a.Uk)(" "+(0,n.zw)((0,i.SU)(v).text)+" ",1),(0,a.WI)(e.$slots,"after")])),_:3},16,["class","to","aria-label"])):((0,a.wg)(),(0,a.iD)("a",(0,a.dG)({key:1,class:"nav-link external",href:(0,i.SU)(v).link,rel:(0,i.SU)(k),target:(0,i.SU)(g),"aria-label":(0,i.SU)(w)},e.$attrs),[(0,a.WI)(e.$slots,"before"),(0,a.Uk)(" "+(0,n.zw)((0,i.SU)(v).text)+" ",1),(0,i.SU)(h)?((0,a.wg)(),(0,a.j4)(u,{key:0})):(0,a.kq)("",!0),(0,a.WI)(e.$slots,"after")],16,c))}}}),p=["aria-labelledby"],g={class:"hero"},h=["src","alt"],m={key:1,id:"main-title"},k={key:2,class:"description"},w={key:3,class:"actions"},b={key:0,class:"features"},U={class:"theme-default-content custom"},f=["innerHTML"],S=["textContent"],y=(0,a.aZ)({__name:"Home",setup(e){const l=(0,o.I2)(),t=(0,o.I5)(),u=(0,a.Fl)((()=>l.value.heroImage?(0,o.pJ)(l.value.heroImage):null)),s=(0,a.Fl)((()=>null===l.value.heroText?null:l.value.heroText||t.value.title||"Hello")),c=(0,a.Fl)((()=>l.value.heroAlt||s.value||"hero")),v=(0,a.Fl)((()=>null===l.value.tagline?null:l.value.tagline||t.value.description||"Welcome to your VuePress site")),y=(0,a.Fl)((()=>(0,r.kJ)(l.value.actions)?l.value.actions.map((({text:e,link:l,type:t="primary"})=>({text:e,link:l,type:t}))):[])),_=(0,a.Fl)((()=>(0,r.kJ)(l.value.features)?l.value.features:[])),D=(0,a.Fl)((()=>l.value.footer)),F=(0,a.Fl)((()=>l.value.footerHtml));return(e,l)=>{const t=(0,a.up)("Content");return(0,a.wg)(),(0,a.iD)("main",{class:"home","aria-labelledby":(0,i.SU)(s)?"main-title":void 0},[(0,a._)("header",g,[(0,i.SU)(u)?((0,a.wg)(),(0,a.iD)("img",{key:0,src:(0,i.SU)(u),alt:(0,i.SU)(c)},null,8,h)):(0,a.kq)("",!0),(0,i.SU)(s)?((0,a.wg)(),(0,a.iD)("h1",m,(0,n.zw)((0,i.SU)(s)),1)):(0,a.kq)("",!0),(0,i.SU)(v)?((0,a.wg)(),(0,a.iD)("p",k,(0,n.zw)((0,i.SU)(v)),1)):(0,a.kq)("",!0),(0,i.SU)(y).length?((0,a.wg)(),(0,a.iD)("p",w,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)((0,i.SU)(y),(e=>((0,a.wg)(),(0,a.j4)(d,{key:e.text,class:(0,n.C_)(["action-button",[e.type]]),item:e},null,8,["class","item"])))),128))])):(0,a.kq)("",!0)]),(0,i.SU)(_).length?((0,a.wg)(),(0,a.iD)("div",b,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)((0,i.SU)(_),(e=>((0,a.wg)(),(0,a.iD)("div",{key:e.title,class:"feature"},[(0,a._)("h2",null,(0,n.zw)(e.title),1),(0,a._)("p",null,(0,n.zw)(e.details),1)])))),128))])):(0,a.kq)("",!0),(0,a._)("div",U,[(0,a.Wm)(t)]),(0,i.SU)(D)?((0,a.wg)(),(0,a.iD)(a.HY,{key:1},[(0,i.SU)(F)?((0,a.wg)(),(0,a.iD)("div",{key:0,class:"footer",innerHTML:(0,i.SU)(D)},null,8,f)):((0,a.wg)(),(0,a.iD)("div",{key:1,class:"footer",textContent:(0,n.zw)((0,i.SU)(D))},null,8,S))],64)):(0,a.kq)("",!0)],8,p)}}});var _=t(72816),D=t(50354);const F=(0,a.aZ)({__name:"DropdownTransition",setup(e){const l=e=>{e.style.height=e.scrollHeight+"px"},t=e=>{e.style.height=""};return(e,n)=>((0,a.wg)(),(0,a.j4)(u.uT,{name:"dropdown",onEnter:l,onAfterEnter:t,onBeforeLeave:l},{default:(0,a.w5)((()=>[(0,a.WI)(e.$slots,"default")])),_:3}))}}),x=["aria-label"],W={class:"title"},I=(0,a._)("span",{class:"arrow down"},null,-1),L=["aria-label"],C={class:"title"},z={class:"nav-dropdown"},$={class:"dropdown-subtitle"},H={key:1},j={class:"dropdown-subitem-wrapper"},q=(0,a.aZ)({__name:"DropdownLink",props:{item:{type:Object,required:!0}},setup(e){const l=e,{item:t}=(0,i.BK)(l),o=(0,a.Fl)((()=>t.value.ariaLabel||t.value.text)),r=(0,i.iH)(!1),c=(0,s.yj)();(0,a.YP)((()=>c.path),(()=>{r.value=!1}));const v=e=>{const l=0===e.detail;r.value=!!l&&!r.value},p=(e,l)=>l[l.length-1]===e;return(e,l)=>((0,a.wg)(),(0,a.iD)("div",{class:(0,n.C_)(["dropdown-wrapper",{open:r.value}])},[(0,a._)("button",{class:"dropdown-title",type:"button","aria-label":(0,i.SU)(o),onClick:v},[(0,a._)("span",W,(0,n.zw)((0,i.SU)(t).text),1),I],8,x),(0,a._)("button",{class:"mobile-dropdown-title",type:"button","aria-label":(0,i.SU)(o),onClick:l[0]||(l[0]=e=>r.value=!r.value)},[(0,a._)("span",C,(0,n.zw)((0,i.SU)(t).text),1),(0,a._)("span",{class:(0,n.C_)(["arrow",r.value?"down":"right"])},null,2)],8,L),(0,a.Wm)(F,null,{default:(0,a.w5)((()=>[(0,a.wy)((0,a._)("ul",z,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)((0,i.SU)(t).children,((e,l)=>((0,a.wg)(),(0,a.iD)("li",{key:e.link||l,class:"dropdown-item"},[e.children?((0,a.wg)(),(0,a.iD)(a.HY,{key:0},[(0,a._)("h4",$,[e.link?((0,a.wg)(),(0,a.j4)(d,{key:0,item:e,onFocusout:l=>p(e,(0,i.SU)(t).children)&&0===e.children.length&&(r.value=!1)},null,8,["item","onFocusout"])):((0,a.wg)(),(0,a.iD)("span",H,(0,n.zw)(e.text),1))]),(0,a._)("ul",j,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(e.children,(l=>((0,a.wg)(),(0,a.iD)("li",{key:l.link,class:"dropdown-subitem"},[(0,a.Wm)(d,{item:l,onFocusout:a=>p(l,e.children)&&p(e,(0,i.SU)(t).children)&&(r.value=!1)},null,8,["item","onFocusout"])])))),128))])],64)):((0,a.wg)(),(0,a.j4)(d,{key:1,item:e,onFocusout:l=>p(e,(0,i.SU)(t).children)&&(r.value=!1)},null,8,["item","onFocusout"]))])))),128))],512),[[u.F8,r.value]])])),_:1})],2))}}),T={key:0,class:"navbar-links"},M=(0,a.aZ)({__name:"NavbarLinks",setup(e){const l=e=>(0,r.HD)(e)?(0,_.sC)(e):e.children?{...e,children:e.children.map(l)}:e,t=(()=>{const e=(0,_.X6)();return(0,a.Fl)((()=>(e.value.navbar||[]).map(l)))})(),n=(()=>{const e=(0,s.tv)(),l=(0,o.I)(),t=(0,o.I5)(),n=(0,_.X6)();return(0,a.Fl)((()=>{var a,i;const u=Object.keys(t.value.locales);if(u.length<2)return[];const o=e.currentRoute.value.path,s=e.currentRoute.value.fullPath;return[{text:null!=(a=n.value.selectLanguageText)?a:"unkown language",ariaLabel:null!=(i=n.value.selectLanguageAriaLabel)?i:"unkown language",children:u.map((a=>{var i,u,r,c,v,d;const p=null!=(u=null==(i=t.value.locales)?void 0:i[a])?u:{},g=null!=(c=null==(r=n.value.locales)?void 0:r[a])?c:{},h=`${p.lang}`,m=null!=(v=g.selectLanguageName)?v:h;let k;if(h===t.value.lang)k=s;else{const t=o.replace(l.value,a);k=e.getRoutes().some((e=>e.path===t))?t:null!=(d=g.home)?d:a}return{text:m,link:k}}))}]}))})(),u=(()=>{const e=(0,_.X6)(),l=(0,a.Fl)((()=>e.value.repo)),t=(0,a.Fl)((()=>l.value?(0,D.c9)(l.value):null)),n=(0,a.Fl)((()=>l.value&&!(0,r.ak)(l.value)?`https://github.com/${l.value}`:l.value)),i=(0,a.Fl)((()=>n.value?e.value.repoLabel?e.value.repoLabel:null===t.value?"Source":t.value:null));return(0,a.Fl)((()=>n.value&&i.value?[{text:i.value,link:n.value}]:[]))})(),c=(0,a.Fl)((()=>[...t.value,...n.value,...u.value]));return(e,l)=>(0,i.SU)(c).length?((0,a.wg)(),(0,a.iD)("nav",T,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)((0,i.SU)(c),(e=>((0,a.wg)(),(0,a.iD)("div",{key:e.text,class:"navbar-links-item"},[e.children?((0,a.wg)(),(0,a.j4)(q,{key:0,item:e},null,8,["item"])):((0,a.wg)(),(0,a.j4)(d,{key:1,item:e},null,8,["item"]))])))),128))])):(0,a.kq)("",!0)}}),B=["title"],Z={class:"icon",focusable:"false",viewBox:"0 0 32 32"},Y=[(0,a.uE)('<path d="M16 12.005a4 4 0 1 1-4 4a4.005 4.005 0 0 1 4-4m0-2a6 6 0 1 0 6 6a6 6 0 0 0-6-6z" fill="currentColor"></path><path d="M5.394 6.813l1.414-1.415l3.506 3.506L8.9 10.318z" fill="currentColor"></path><path d="M2 15.005h5v2H2z" fill="currentColor"></path><path d="M5.394 25.197L8.9 21.691l1.414 1.415l-3.506 3.505z" fill="currentColor"></path><path d="M15 25.005h2v5h-2z" fill="currentColor"></path><path d="M21.687 23.106l1.414-1.415l3.506 3.506l-1.414 1.414z" fill="currentColor"></path><path d="M25 15.005h5v2h-5z" fill="currentColor"></path><path d="M21.687 8.904l3.506-3.506l1.414 1.415l-3.506 3.505z" fill="currentColor"></path><path d="M15 2.005h2v5h-2z" fill="currentColor"></path>',9)],R={class:"icon",focusable:"false",viewBox:"0 0 32 32"},X=[(0,a._)("path",{d:"M13.502 5.414a15.075 15.075 0 0 0 11.594 18.194a11.113 11.113 0 0 1-7.975 3.39c-.138 0-.278.005-.418 0a11.094 11.094 0 0 1-3.2-21.584M14.98 3a1.002 1.002 0 0 0-.175.016a13.096 13.096 0 0 0 1.825 25.981c.164.006.328 0 .49 0a13.072 13.072 0 0 0 10.703-5.555a1.01 1.01 0 0 0-.783-1.565A13.08 13.08 0 0 1 15.89 4.38A1.015 1.015 0 0 0 14.98 3z",fill:"currentColor"},null,-1)],N=(0,a.aZ)({__name:"ToggleDarkModeButton",setup(e){const l=(0,_.X6)(),t=(0,_.vs)(),n=()=>{t.value=!t.value};return(e,o)=>((0,a.wg)(),(0,a.iD)("button",{class:"toggle-dark-button",title:(0,i.SU)(l).toggleDarkMode,onClick:n},[(0,a.wy)(((0,a.wg)(),(0,a.iD)("svg",Z,Y,512)),[[u.F8,!(0,i.SU)(t)]]),(0,a.wy)(((0,a.wg)(),(0,a.iD)("svg",R,X,512)),[[u.F8,(0,i.SU)(t)]])],8,B))}}),P=["title"],E=[(0,a._)("div",{class:"icon","aria-hidden":"true"},[(0,a._)("span"),(0,a._)("span"),(0,a._)("span")],-1)],K=(0,a.aZ)({__name:"ToggleSidebarButton",emits:["toggle"],setup(e){const l=(0,_.X6)();return(e,t)=>((0,a.wg)(),(0,a.iD)("div",{class:"toggle-sidebar-button",title:(0,i.SU)(l).toggleSidebar,"aria-expanded":"false",role:"button",tabindex:"0",onClick:t[0]||(t[0]=l=>e.$emit("toggle"))},E,8,P))}}),V=["src","alt"],A=(0,a.aZ)({__name:"Navbar",emits:["toggle-sidebar"],setup(e){const l=(0,o.I)(),t=(0,o.I5)(),u=(0,_.X6)(),s=(0,_.vs)(),r=(0,i.iH)(null),c=(0,i.iH)(null),v=(0,a.Fl)((()=>u.value.home||l.value)),d=(0,a.Fl)((()=>s.value&&void 0!==u.value.logoDark?u.value.logoDark:u.value.logo)),p=(0,a.Fl)((()=>t.value.title)),g=(0,i.iH)(0),h=(0,a.Fl)((()=>g.value?{maxWidth:g.value+"px"}:{})),m=(0,a.Fl)((()=>u.value.darkMode));function k(e,l){var t,a,n;const i=null==(n=null==(a=null==(t=null==e?void 0:e.ownerDocument)?void 0:t.defaultView)?void 0:a.getComputedStyle(e,null))?void 0:n[l],u=Number.parseInt(i,10);return Number.isNaN(u)?0:u}return(0,a.bv)((()=>{const e=k(r.value,"paddingLeft")+k(r.value,"paddingRight"),l=()=>{var l;window.innerWidth<=719?g.value=0:g.value=r.value.offsetWidth-e-((null==(l=c.value)?void 0:l.offsetWidth)||0)};l(),window.addEventListener("resize",l,!1),window.addEventListener("orientationchange",l,!1)})),(e,l)=>{const t=(0,a.up)("RouterLink"),u=(0,a.up)("NavbarSearch");return(0,a.wg)(),(0,a.iD)("header",{ref_key:"navbar",ref:r,class:"navbar"},[(0,a.Wm)(K,{onToggle:l[0]||(l[0]=l=>e.$emit("toggle-sidebar"))}),(0,a._)("span",{ref_key:"siteBrand",ref:c},[(0,a.Wm)(t,{to:(0,i.SU)(v)},{default:(0,a.w5)((()=>[(0,i.SU)(d)?((0,a.wg)(),(0,a.iD)("img",{key:0,class:"logo",src:(0,i.SU)(o.pJ)((0,i.SU)(d)),alt:(0,i.SU)(p)},null,8,V)):(0,a.kq)("",!0),(0,i.SU)(p)?((0,a.wg)(),(0,a.iD)("span",{key:1,class:(0,n.C_)(["site-name",{"can-hide":(0,i.SU)(d)}])},(0,n.zw)((0,i.SU)(p)),3)):(0,a.kq)("",!0)])),_:1},8,["to"])],512),(0,a._)("div",{class:"navbar-links-wrapper",style:(0,n.j5)((0,i.SU)(h))},[(0,a.WI)(e.$slots,"before"),(0,a.Wm)(M,{class:"can-hide"}),(0,a.WI)(e.$slots,"after"),(0,i.SU)(m)?((0,a.wg)(),(0,a.j4)(N,{key:0})):(0,a.kq)("",!0),(0,a.Wm)(u)],4)],512)}}}),O={class:"page-meta"},J={key:0,class:"meta-item edit-link"},G={key:1,class:"meta-item last-updated"},Q={class:"meta-item-label"},ee={class:"meta-item-info"},le={key:2,class:"meta-item contributors"},te={class:"meta-item-label"},ae={class:"meta-item-info"},ne=["title"],ie=(0,a.Uk)(", "),ue=(0,a.aZ)({__name:"PageMeta",setup(e){const l=(0,_.X6)(),t=(()=>{const e=(0,_.X6)(),l=(0,o.Vi)(),t=(0,o.I2)();return(0,a.Fl)((()=>{var a,n;if(null!=(n=null!=(a=t.value.editLink)?a:e.value.editLink)&&!n)return null;const{repo:i,docsRepo:u=i,docsBranch:o="main",docsDir:s="",editLinkText:r}=e.value;if(!u)return null;const c=(0,D.Fg)({docsRepo:u,docsBranch:o,docsDir:s,filePathRelative:l.value.filePathRelative,editLinkPattern:e.value.editLinkPattern});return c?{text:null!=r?r:"Edit this page",link:c}:null}))})(),u=(()=>{const e=(0,o.I5)(),l=(0,_.X6)(),t=(0,o.Vi)(),n=(0,o.I2)();return(0,a.Fl)((()=>{var a,i,u,o;return(null==(i=null!=(a=n.value.lastUpdated)?a:l.value.lastUpdated)||i)&&(null==(u=t.value.git)?void 0:u.updatedTime)?new Date(null==(o=t.value.git)?void 0:o.updatedTime).toLocaleString(e.value.lang):null}))})(),s=(()=>{const e=(0,_.X6)(),l=(0,o.Vi)(),t=(0,o.I2)();return(0,a.Fl)((()=>{var a,n,i,u;return null!=(n=null!=(a=t.value.contributors)?a:e.value.contributors)&&!n||null==(u=null==(i=l.value.git)?void 0:i.contributors)?null:u}))})();return(e,o)=>((0,a.wg)(),(0,a.iD)("footer",O,[(0,i.SU)(t)?((0,a.wg)(),(0,a.iD)("div",J,[(0,a.Wm)(d,{class:"meta-item-label",item:(0,i.SU)(t)},null,8,["item"])])):(0,a.kq)("",!0),(0,i.SU)(u)?((0,a.wg)(),(0,a.iD)("div",G,[(0,a._)("span",Q,(0,n.zw)((0,i.SU)(l).lastUpdatedText)+": ",1),(0,a._)("span",ee,(0,n.zw)((0,i.SU)(u)),1)])):(0,a.kq)("",!0),(0,i.SU)(s)&&(0,i.SU)(s).length?((0,a.wg)(),(0,a.iD)("div",le,[(0,a._)("span",te,(0,n.zw)((0,i.SU)(l).contributorsText)+": ",1),(0,a._)("span",ae,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)((0,i.SU)(s),((e,l)=>((0,a.wg)(),(0,a.iD)(a.HY,{key:l},[(0,a._)("span",{class:"contributor",title:`email: ${e.email}`},(0,n.zw)(e.name),9,ne),l!==(0,i.SU)(s).length-1?((0,a.wg)(),(0,a.iD)(a.HY,{key:0},[ie],64)):(0,a.kq)("",!0)],64)))),128))])])):(0,a.kq)("",!0)]))}}),oe={key:0,class:"page-nav"},se={class:"inner"},re={key:0,class:"prev"},ce=(0,a.Uk)(" ← "),ve={key:1,class:"next"},de=(0,a.Uk)(" → "),pe=(0,a.aZ)({__name:"PageNav",setup(e){const l=e=>!1===e?null:(0,r.HD)(e)?(0,_.sC)(e):!!(0,r.PO)(e)&&e,t=(e,l,a)=>{const n=e.findIndex((e=>e.link===l));if(-1!==n){const l=e[n+a];return(null==l?void 0:l.link)?l:null}for(const n of e)if(n.children){const e=t(n.children,l,a);if(e)return e}return null},n=(0,o.I2)(),u=(0,_.VU)(),c=(0,s.yj)(),v=(0,a.Fl)((()=>{const e=l(n.value.prev);return!1!==e?e:t(u.value,c.path,-1)})),p=(0,a.Fl)((()=>{const e=l(n.value.next);return!1!==e?e:t(u.value,c.path,1)}));return(e,l)=>(0,i.SU)(v)||(0,i.SU)(p)?((0,a.wg)(),(0,a.iD)("nav",oe,[(0,a._)("p",se,[(0,i.SU)(v)?((0,a.wg)(),(0,a.iD)("span",re,[ce,(0,a.Wm)(d,{item:(0,i.SU)(v)},null,8,["item"])])):(0,a.kq)("",!0),(0,i.SU)(p)?((0,a.wg)(),(0,a.iD)("span",ve,[(0,a.Wm)(d,{item:(0,i.SU)(p)},null,8,["item"]),de])):(0,a.kq)("",!0)])])):(0,a.kq)("",!0)}}),ge={class:"page"},he={class:"theme-default-content"},me=(0,a.aZ)({__name:"Page",setup:e=>(e,l)=>{const t=(0,a.up)("Content");return(0,a.wg)(),(0,a.iD)("main",ge,[(0,a.WI)(e.$slots,"top"),(0,a._)("div",he,[(0,a.Wm)(t)]),(0,a.Wm)(ue),(0,a.Wm)(pe),(0,a.WI)(e.$slots,"bottom")])}}),ke=e=>decodeURI(e).replace(/#.*$/,"").replace(/(index)?\.(md|html)$/,""),we=(e,l)=>!!((e,l)=>void 0!==l&&(e.hash===l||ke(e.path)===ke(l)))(e,l.link)||!!l.children&&l.children.some((l=>we(e,l))),be=(e,l)=>e.link?(0,a.h)(d,{...l,item:e}):(0,a.h)("p",l,e.text),Ue=(e,l)=>{var t;return(null===(t=e.children)||void 0===t?void 0:t.length)?(0,a.h)("ul",{class:{"sidebar-sub-items":l>0}},e.children.map((e=>(0,a.h)("li",(0,a.h)(fe,{item:e,depth:l+1}))))):null},fe=({item:e,depth:l=0})=>{const t=(0,s.yj)(),a=we(t,e);return[be(e,{class:{"sidebar-heading":0===l,"sidebar-item":!0,active:a}}),Ue(e,l)]};fe.displayName="SidebarChild",fe.props={item:{type:Object,required:!0},depth:{type:Number,required:!1}};const Se={class:"sidebar"},ye={class:"sidebar-links"},_e=(0,a.aZ)({__name:"Sidebar",setup(e){const l=(0,_.VU)();return(e,t)=>((0,a.wg)(),(0,a.iD)("aside",Se,[(0,a.Wm)(M),(0,a.WI)(e.$slots,"top"),(0,a._)("ul",ye,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)((0,i.SU)(l),(e=>((0,a.wg)(),(0,a.j4)((0,i.SU)(fe),{key:e.link||e.text,item:e},null,8,["item"])))),128))]),(0,a.WI)(e.$slots,"bottom")]))}}),De=(0,a.aZ)({__name:"Layout",setup(e){const l=(0,o.Vi)(),t=(0,o.I2)(),r=(0,_.X6)(),c=(0,a.Fl)((()=>!1!==t.value.navbar&&!1!==r.value.navbar)),v=(0,_.VU)(),d=(0,i.iH)(!1),p=e=>{d.value="boolean"==typeof e?e:!d.value},g={x:0,y:0},h=e=>{g.x=e.changedTouches[0].clientX,g.y=e.changedTouches[0].clientY},m=e=>{const l=e.changedTouches[0].clientX-g.x,t=e.changedTouches[0].clientY-g.y;Math.abs(l)>Math.abs(t)&&Math.abs(l)>40&&(l>0&&g.x<=80?p(!0):p(!1))},k=(0,a.Fl)((()=>[{"no-navbar":!c.value,"no-sidebar":!v.value.length,"sidebar-open":d.value},t.value.pageClass]));let w;(0,a.bv)((()=>{const e=(0,s.tv)();w=e.afterEach((()=>{p(!1)}))})),(0,a.Ah)((()=>{w()}));const b=(0,_.P$)(),U=b.resolve,f=b.pending;return(e,o)=>((0,a.wg)(),(0,a.iD)("div",{class:(0,n.C_)(["theme-container",(0,i.SU)(k)]),onTouchstart:h,onTouchend:m},[(0,i.SU)(c)?((0,a.wg)(),(0,a.j4)(A,{key:0,onToggleSidebar:p},{before:(0,a.w5)((()=>[(0,a.WI)(e.$slots,"navbar-before")])),after:(0,a.w5)((()=>[(0,a.WI)(e.$slots,"navbar-after")])),_:3})):(0,a.kq)("",!0),(0,a._)("div",{class:"sidebar-mask",onClick:o[0]||(o[0]=e=>p(!1))}),(0,a.Wm)(_e,null,{top:(0,a.w5)((()=>[(0,a.WI)(e.$slots,"sidebar-top")])),bottom:(0,a.w5)((()=>[(0,a.WI)(e.$slots,"sidebar-bottom")])),_:3}),(0,a.WI)(e.$slots,"page",{},(()=>[(0,i.SU)(t).home?((0,a.wg)(),(0,a.j4)(y,{key:0})):((0,a.wg)(),(0,a.j4)(u.uT,{key:1,name:"fade-slide-y",mode:"out-in",onBeforeEnter:(0,i.SU)(U),onBeforeLeave:(0,i.SU)(f)},{default:(0,a.w5)((()=>[((0,a.wg)(),(0,a.j4)(me,{key:(0,i.SU)(l).path},{top:(0,a.w5)((()=>[(0,a.WI)(e.$slots,"page-top")])),bottom:(0,a.w5)((()=>[(0,a.WI)(e.$slots,"page-bottom")])),_:3}))])),_:3},8,["onBeforeEnter","onBeforeLeave"]))]))],34))}})}}]);