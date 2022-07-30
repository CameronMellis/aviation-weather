import{c as C,j as t,T as u,a as R,P as y,b as F,d as n,e as G,f as k,g as m,h,i as A,r as l,B as g,k as M,l as c,m as d,n as U,o as S,F as Z,p as x,u as I,q as H,G as P,O as D,R as Q,s as W,t as z,v as E,w as v}from"./vendor.954c9281.js";const O=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))p(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&p(o)}).observe(document,{childList:!0,subtree:!0});function i(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerpolicy&&(r.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?r.credentials="include":s.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function p(s){if(s.ep)return;s.ep=!0;const r=i(s);fetch(s.href,r)}};O();const V=C({palette:{type:"dark"}});function K({flightRules:a}){let e="#616161";return a==="VFR"?e="green":a==="MVFR"?e="#039be5":a==="IFR"?e="red":a==="LIFR"&&(e="magenta"),n(h,{sx:{fontSize:18,fontWeight:"bold",backgroundColor:e,borderBottom:"4px solid black"},align:"center",children:[" ",a]})}function $(a){return t(u,{theme:V,children:t(R,{sx:{fontSize:"20px",backgroundColor:"#696969"},component:y,className:"Table",children:t(F,{variant:"body1",component:"div",gutterBottom:!0,children:n(G,{size:"small","aria-label":"a dense table",children:[t(k,{sx:{borderBottom:"4px solid black"},children:n(m,{sx:{backgroundColor:"#696969"},children:[t(h,{sx:{fontSize:18,fontWeight:"bold",backgroundColor:"#696969"},align:"left",children:"Flight Rules"}),t(h,{sx:{fontSize:20,fontWeight:"bold"},align:"left",children:"METAR/TAF"})]})}),t(A,{children:a.data.map(e=>n(m,{sx:{"&:last-child td, &:last-child th":{border:0},borderBottom:"3px solid black"},children:[t(K,{flightRules:e.flight_rules}),t(h,{sx:{fontSize:17,fontWeight:"bold",backgroundColor:"#BEBEBE",padding:"14px 14px"},align:"left",children:e.raw.replace(/BECMG|FM[0-9]*/g,i=>`
${i}`)})]},e.raw))})]})})})})}function X({onSelect:a}){const[e,i]=l.exports.useState(0),p=s=>{const r=window.open(s,"_blank","noopener,noreferrer");r&&(r.opener=null)};return t(g,{elevation:2,children:n(M,{sx:{position:"fixed",bottom:0,left:0,right:0},showLabels:!0,value:e,onChange:s=>{i(s)},children:[t(c,{label:"YYT",onClick:()=>{a("/YYT")},icon:t(d,{})}),t(c,{label:"YUL",onClick:()=>{a("/YUL")},icon:t(d,{})}),t(c,{label:"YHZ",onClick:()=>{a("/YHZ")},icon:t(d,{})}),t(c,{label:"Read Me",onClick:()=>p("https://github.com/CameronMellis/aviation-weather#readme"),icon:t(U,{})})]})})}const f=a=>{switch(a){case"YYT":case"YHZ":return"gfacn34";case"YUL":return"gfacn33";default:throw new Error("Invalid airport code")}},Y=(a,e,i)=>`https://flightplanning.navcanada.ca/Latest/gfa/anglais/produits/uprair/gfa/${a}/Latest-${a}_${e}_${i}.png`;function b({location:a}){const[e,i]=l.exports.useState("006");return n(Z,{children:[t("div",{className:"GFAcontainer",children:t("img",{className:"GFA",id:"GfaClouds",src:Y(f(a),"cldwx",e),alt:"GFA"})}),n(g,{sx:{alignItems:"center",display:"flex"},children:[t(x,{sx:{m:1,ml:15,mr:3,width:160},className:"Buttons",variant:"contained",size:"small",onClick:()=>{i("000")},children:"Previous 6HR"}),t(x,{sx:{m:1,mr:3,width:160},className:"Buttons",variant:"contained",size:"small",onClick:()=>{i("006")},children:"CURRENT"}),t(x,{sx:{m:1,width:160},className:"Buttons",variant:"contained",size:"small",onClick:()=>{i("012")},children:"Next 6HR"})]}),t("div",{className:"GFAcontainer",children:t("img",{className:"GFA",id:"GfaIcing",src:Y(f(a),"turbc",e),alt:"GFA Icing and Turbulence"})})]})}b.propTypes={location:S.string.isRequired};const _=a=>{switch(a){case"YYT":return["https://avwx.rest/api/metar/CYYT","https://avwx.rest/api/taf/CYYT","https://avwx.rest/api/metar/CYQX","https://avwx.rest/api/taf/CYQX","https://avwx.rest/api/metar/CYDF","https://avwx.rest/api/taf/CYDF","https://avwx.rest/api/metar/CYJT","https://avwx.rest/api/taf/CYJT","https://avwx.rest/api/metar/CYAY","https://avwx.rest/api/taf/CYAY","https://avwx.rest/api/metar/CYBX","https://avwx.rest/api/taf/CYBX","https://avwx.rest/api/metar/CYYR","https://avwx.rest/api/taf/CYYR","https://avwx.rest/api/metar/CZUM","https://avwx.rest/api/taf/CZUM","https://avwx.rest/api/metar/CYWK","https://avwx.rest/api/taf/CYWK","https://avwx.rest/api/metar/CYDP","https://avwx.rest/api/taf/CYDP","https://avwx.rest/api/metar/CYNA","https://avwx.rest/api/taf/CYNA","https://avwx.rest/api/metar/CYKL","https://avwx.rest/api/taf/CYKL"];case"YUL":return["https://avwx.rest/api/metar/CYUL","https://avwx.rest/api/taf/CYUL","https://avwx.rest/api/metar/CYQB","https://avwx.rest/api/taf/CYQB","https://avwx.rest/api/metar/CYHU","https://avwx.rest/api/taf/CYHU","https://avwx.rest/api/metar/CYMX","https://avwx.rest/api/taf/CYMX","https://avwx.rest/api/metar/CYRQ","https://avwx.rest/api/taf/CYRQ","https://avwx.rest/api/metar/CYOW","https://avwx.rest/api/taf/CYOW","https://avwx.rest/api/metar/CYND","https://avwx.rest/api/taf/CYND","https://avwx.rest/api/metar/CYYZ","https://avwx.rest/api/taf/CYYZ","https://avwx.rest/api/metar/CYVO","https://avwx.rest/api/taf/CYVO","https://avwx.rest/api/metar/CYUY","https://avwx.rest/api/taf/CYUY","https://avwx.rest/api/metar/CYBG","https://avwx.rest/api/taf/CYBG","https://avwx.rest/api/metar/CYBC","https://avwx.rest/api/taf/CYBC","https://avwx.rest/api/metar/CYYY","https://avwx.rest/api/taf/CYYY","https://avwx.rest/api/metar/CYGR","https://avwx.rest/api/taf/CYGR","https://avwx.rest/api/metar/CYGP","https://avwx.rest/api/taf/CYGP","https://avwx.rest/api/metar/CYGV","https://avwx.rest/api/taf/CYGV","https://avwx.rest/api/metar/CYWK","https://avwx.rest/api/taf/CYWK","https://avwx.rest/api/metar/CZUM","https://avwx.rest/api/taf/CZUM","https://avwx.rest/api/metar/CYZV","https://avwx.rest/api/taf/CYZV","https://avwx.rest/api/metar/CYKL","https://avwx.rest/api/taf/CYKL"];case"YHZ":return["https://avwx.rest/api/metar/CYHZ","https://avwx.rest/api/taf/CYHZ","https://avwx.rest/api/metar/CYQM","https://avwx.rest/api/taf/CYQM","https://avwx.rest/api/metar/CYYG","https://avwx.rest/api/taf/CYYG","https://avwx.rest/api/metar/CYFC","https://avwx.rest/api/taf/CYFC","https://avwx.rest/api/metar/CZBF","https://avwx.rest/api/taf/CZBF","https://avwx.rest/api/metar/CYQY","https://avwx.rest/api/taf/CYQY","https://avwx.rest/api/metar/CYSJ","https://avwx.rest/api/taf/CYSJ","https://avwx.rest/api/metar/CYQI","https://avwx.rest/api/taf/CYQI"];default:throw new Error("Invalid Location")}},j=a=>{const[e,i]=l.exports.useState([]),[p,s]=l.exports.useState(!1);return l.exports.useEffect(()=>{(async()=>{s(!0);const o={headers:{Authorization:"dB2w9VHe5mzuqKLgd9Slf5RyIg5jUv3mNV5DyWJpY4s"}},B=_(a),T=await Promise.all(B.map(L=>fetch(L,o).then(N=>N.json())));s(!1),i(T)})()},[a]),{avwx:e,isLoading:p}};function J(){return t("div",{className:"spinner-container",children:t("div",{className:"loading-spinner"})})}const q=C({palette:{mode:"dark"}});function w(){var r;const e=(r=I().location)!=null?r:"YYT",{avwx:i,isLoading:p}=j(e),s=H();return t(u,{theme:q,children:n(P,{sx:{display:"flex",flexDirection:"column",height:"100vh"},children:[n("div",{className:"App",children:[p?t(J,{}):t($,{className:"Table",data:i}),t(b,{location:e})]}),t(X,{onSelect:o=>s(o)}),t(D,{})]})})}Q.render(n(W.StrictMode,{children:[t(z,{basename:"/aviation-weather",children:n(E,{children:[t(v,{path:"/",element:t(w,{})}),t(v,{path:"/:location",element:t(w,{})})]})}),","]}),document.getElementById("root"));
