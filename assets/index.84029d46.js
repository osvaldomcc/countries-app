import{u as y,r as p,o as c,c as l,a as i,b as u,w as _,d as k,p as b,e as E,f as L,T as P,g as D,h as T,F as I,i as O,j as w,k as x}from"./vendor.956533d3.js";const C=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&t(n)}).observe(document,{childList:!0,subtree:!0});function a(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerpolicy&&(o.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?o.credentials="include":e.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function t(e){if(e.ep)return;e.ep=!0;const o=a(e);fetch(e.href,o)}};C();var N="/countries-app/assets/moon-dark.5b2c6b8f.svg",A="/countries-app/assets/moon-light.8ba214e1.svg";var S=(s,r)=>{for(const[a,t]of r)s[a]=t;return s};const m=s=>(b("data-v-42bdd83a"),s=s(),E(),s),j={class:"container"},F={class:"header"},R=m(()=>i("h1",null,"Where in the World?",-1)),V={key:0,src:N,alt:"moon icon"},$={key:1,src:A,alt:"moon icon"},B=m(()=>i("figcaption",null,[i("h2",null,"Dark Mode")],-1)),H={setup(s){const r=y({selector:"body",attribute:"color-scheme",valueDark:"dark",valueLight:"light"});function a(){r.value=!r.value,L(r)}return(t,e)=>{const o=p("router-link");return c(),l("header",null,[i("div",j,[i("div",F,[u(o,{to:{name:"home"}},{default:_(()=>[R]),_:1}),i("button",{class:"header__button",onClick:a},[i("figure",null,[k(r)?(c(),l("img",V)):(c(),l("img",$)),B])])])])])}}};var W=S(H,[["__scopeId","data-v-42bdd83a"]]);const q={setup(s){return(r,a)=>{const t=p("router-view");return c(),l(I,null,[u(W),i("main",null,[u(t,null,{default:_(({Component:e})=>[u(P,{name:"fade"},{default:_(()=>[(c(),D(T(e)))]),_:2},1024)]),_:1})])],64)}}},M="modulepreload",h={},K="/countries-app/",d=function(r,a){return!a||a.length===0?r():Promise.all(a.map(t=>{if(t=`${K}${t}`,t in h)return;h[t]=!0;const e=t.endsWith(".css"),o=e?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${t}"]${o}`))return;const n=document.createElement("link");if(n.rel=e?"stylesheet":M,e||(n.as="script",n.crossOrigin=""),n.href=t,document.head.appendChild(n),e)return new Promise((v,g)=>{n.addEventListener("load",v),n.addEventListener("error",g)})})).then(()=>r())},z=O({history:w("/countries-app"),routes:[{name:"home",path:"/",component:()=>d(()=>import("./HomePage.d5fa8680.js"),["assets/HomePage.d5fa8680.js","assets/HomePage.a750f9ed.css","assets/vendor.956533d3.js","assets/Spinner.8e0069b4.js","assets/Spinner.3062d67f.css"])},{name:"country-detail",path:"/country/:id",component:()=>d(()=>import("./CountryDetailPage.01709010.js"),["assets/CountryDetailPage.01709010.js","assets/CountryDetailPage.3fbebcc4.css","assets/vendor.956533d3.js","assets/Spinner.8e0069b4.js","assets/Spinner.3062d67f.css"]),props:!0},{path:"/:pathMatch(.*)*",name:"NotFound",component:()=>d(()=>import("./NotFoundPage.b6585449.js"),["assets/NotFoundPage.b6585449.js","assets/vendor.956533d3.js"])}]}),f=x(q);f.use(z);f.mount("#app");export{S as _};