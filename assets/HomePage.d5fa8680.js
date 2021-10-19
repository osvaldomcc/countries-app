import{l as g,o as r,c as d,a as e,m as x,v as E,n as N,p as k,e as y,q as R,s as B,t as F,x as f,y as b,F as D,z as M,A as O,r as P,d as T,b as $,g as I,w as S,S as U,B as V}from"./vendor.956533d3.js";import{_ as m}from"./index.84029d46.js";import{S as L}from"./Spinner.8e0069b4.js";const q=t=>(k("data-v-db93b0ba"),t=t(),y(),t),z=["onSubmit"],G={class:"form__group"},H=q(()=>e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"ionicon",viewBox:"0 0 512 512"},[e("title",null,"Search"),e("path",{d:"M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z",fill:"none",stroke:"currentColor","stroke-miterlimit":"10","stroke-width":"32"}),e("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-miterlimit":"10","stroke-width":"32",d:"M338.29 338.29L448 448"})],-1)),J=[H],K={emits:["getCountry","getAll"],setup(t,{emit:a}){const o=g("");function s(){o.value.length>0?a("getCountry",o.value):a("getAll")}return(l,n)=>(r(),d("form",{role:"form",onSubmit:N(s,["prevent"])},[e("div",G,[e("figure",{onClick:s},J),x(e("input",{type:"text",name:"search",id:"form__search",placeholder:"Search for a country...","onUpdate:modelValue":n[0]||(n[0]=_=>o.value=_)},null,512),[[E,o.value,void 0,{trim:!0}]])])],40,z))}};var Q=m(K,[["__scopeId","data-v-db93b0ba"]]);const v=t=>(k("data-v-87816e76"),t=t(),y(),t),W={class:"dropdown"},X=v(()=>e("h1",null,"Filter by Region",-1)),Y=v(()=>e("figure",null,[e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"ionicon",viewBox:"0 0 512 512"},[e("title",null,"Chevron Down"),e("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"48",d:"M112 184l144 144 144-144"})])],-1)),Z=[X,Y],ee={class:"dropdown__content"},te=v(()=>e("li",null,"Africa",-1)),oe=[te],ne=v(()=>e("li",null,"America",-1)),se=[ne],ae=v(()=>e("li",null,"Asia",-1)),ie=[ae],re=v(()=>e("li",null,"Europe",-1)),le=[re],ce=v(()=>e("li",null,"Oceania",-1)),_e=[ce],de={emits:["region"],setup(t,{emit:a}){const o=g(!1),s=g(null),l=()=>o.value=!o.value,n=function(_){a("region",_)};return R(s,_=>{setTimeout(()=>{o.value=!1},200)}),(_,i)=>(r(),d("div",W,[e("div",{class:"dropdown__header",tabindex:"0",onClick:l,ref:(c,w)=>{w.dropDown=c,s.value=c}},Z,512),x(e("div",ee,[e("ul",null,[e("a",{onClick:i[0]||(i[0]=c=>n("africa"))},oe),e("a",{onClick:i[1]||(i[1]=c=>n("americas"))},se),e("a",{onClick:i[2]||(i[2]=c=>n("asia"))},ie),e("a",{onClick:i[3]||(i[3]=c=>n("europe"))},le),e("a",{onClick:i[4]||(i[4]=c=>n("oceania"))},_e)])],512),[[B,o.value]])]))}};var ue=m(de,[["__scopeId","data-v-87816e76"]]);const pe={},ve={class:"card"};function he(t,a){return r(),d("div",ve,[F(t.$slots,"default",{},void 0,!0)])}var ge=m(pe,[["render",he],["__scopeId","data-v-62e696b3"]]);const A=t=>(k("data-v-3f2e162c"),t=t(),y(),t),me=["src","alt"],fe={class:"card__content"},$e={class:"card__content--description"},we=A(()=>e("strong",null,"Population",-1)),Ce={class:"card__content--description"},ke=A(()=>e("strong",null,"Region",-1)),ye={class:"card__content--description"},Se=A(()=>e("strong",null,"Capital",-1)),xe={props:{name:{type:String},img:{type:String},population:{type:Number},region:{type:String},capital:{type:String}},setup(t){return(a,o)=>{var s,l,n;return r(),d(D,null,[e("figure",null,[e("img",{src:t.img,alt:t.name},null,8,me)]),e("div",fe,[e("h1",null,f(t.name),1),e("div",$e,[we,b(" : "+f((s=t.population)!=null?s:0),1)]),e("div",Ce,[ke,b(" : "+f((l=t.region)!=null?l:"Unknown"),1)]),e("div",ye,[Se,b(" : "+f((n=t.capital)!=null?n:"Unknown"),1)])])],64)}}};var be=m(xe,[["__scopeId","data-v-3f2e162c"]]);const Te={class:"alert-error"},Ie={props:{msg:{type:String,required:!0}},setup(t){return(a,o)=>(r(),d("div",Te,f(t.msg),1))}};var Ae=m(Ie,[["__scopeId","data-v-4ef3aea0"]]);const Be=t=>(k("data-v-1e885010"),t=t(),y(),t),De={class:"container"},Me={class:"actions"},je={class:"cards__container"},Ee={class:"cards"},Ne=Be(()=>e("h1",null,"Not Found Content",-1)),Re={key:2,class:"container"},Fe={setup(t){const a=g([]),o=g(!0),s=g(""),l="https://restcountries.com/v2";async function n(h){s.value="",o.value=!0;const C=await fetch(`${h}`),u=await C.json();if(C.ok){if(u instanceof Object&&u.hasOwnProperty("status")&&u.status!==200){s.value=u.message;return}a.value=[],a.value=u,o.value=!1}else s.value=C.statusText}function _(){n(`${l}/all?fields=name,capital,population,region,alpha2Code,flag`)}function i(h){n(`${l}/continent/${h}`)}function c(h){n(`${l}/name/${h}?fields=name,capital,population,region,alpha2Code,flag`)}const w=M(()=>s.value.length===0),j=M(()=>a.value.length>0);return O(()=>{_()}),(h,C)=>{const u=P("router-link");return r(),d("section",null,[e("div",De,[x(e("div",Me,[$(Q,{onGetCountry:c,onGetAll:_}),$(ue,{onRegion:i})],512),[[B,T(j)]])]),e("div",je,[o.value&&T(w)?(r(),I(L,{key:0})):T(w)?(r(),I(U,{key:1},{default:S(()=>[e("div",Ee,[(r(!0),d(D,null,V(a.value,p=>(r(),I(ge,{key:p.alpha2Code},{default:S(()=>[$(u,{to:{name:"country-detail",params:{id:p.alpha2Code}}},{default:S(()=>[$(be,{img:p.flag,name:p.name,population:p.population,region:p.region,capital:p.capital},null,8,["img","name","population","region","capital"])]),_:2},1032,["to"])]),_:2},1024))),128))])]),fallback:S(()=>[Ne]),_:1})):(r(),d("div",Re,[$(Ae,{msg:s.value},null,8,["msg"])]))])])}}};var Ve=m(Fe,[["__scopeId","data-v-1e885010"]]);export{Ve as default};
