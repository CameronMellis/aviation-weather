import{c as C,j as t,T as u,a as G,P as R,b as B,d as n,e as A,f as Z,g as x,h,i as U,r as l,B as g,k as M,l as c,m as k,n as d,o as P,F as S,p as v,u as I,q as D,G as H,O as Q,R as O,s as W,t as z,v as K,w as m}from"./vendor.53ebb1dd.js";const V=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))p(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&p(o)}).observe(document,{childList:!0,subtree:!0});function i(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerpolicy&&(r.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?r.credentials="include":s.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function p(s){if(s.ep)return;s.ep=!0;const r=i(s);fetch(s.href,r)}};V();const E=C({palette:{type:"dark"}});function $({flightRules:a}){let e="#616161";return a==="VFR"?e="green":a==="MVFR"?e="#8bc34a":a==="IFR"?e="yellow":a==="LIFR"&&(e="red"),n(h,{sx:{fontSize:15,fontWeight:"bold",backgroundColor:e},align:"center",children:[" ",a]})}function j(a){return t(u,{theme:E,children:t(G,{sx:{fontSize:"15px",backgroundColor:"#616161"},component:R,className:"Table",children:t(B,{variant:"body1",component:"div",gutterBottom:!0,children:n(A,{size:"small","aria-label":"a dense table",children:[t(Z,{children:n(x,{sx:{backgroundColor:"#616161"},children:[t(h,{sx:{fontSize:15,fontWeight:"bold",backgroundColor:"#616161"},align:"center",children:"Flight Rules"}),t(h,{sx:{fontSize:15,fontWeight:"bold"},align:"left",children:"METAR/TAF"})]})}),t(U,{children:a.data.map(e=>n(x,{sx:{"&:last-child td, &:last-child th":{border:0}},children:[t($,{flightRules:e.flight_rules}),t(h,{sx:{fontSize:16,fontWeight:"medium",backgroundColor:"#8e8e8e"},align:"left",children:e.raw.replace(/BECMG|FM[0-9]*/g,i=>`
${i}`)})]},e.raw))})]})})})})}const J=a=>{switch(a){case"YYT":return["https://avwx.rest/api/metar/CYYT","https://avwx.rest/api/taf/CYYT","https://avwx.rest/api/metar/CYQX","https://avwx.rest/api/taf/CYQX","https://avwx.rest/api/metar/CYDF","https://avwx.rest/api/taf/CYDF","https://avwx.rest/api/metar/CYJT","https://avwx.rest/api/taf/CYJT","https://avwx.rest/api/metar/CYAY","https://avwx.rest/api/taf/CYAY","https://avwx.rest/api/metar/CYYR","https://avwx.rest/api/taf/CYYR","https://avwx.rest/api/metar/CZUM","https://avwx.rest/api/taf/CZUM","https://avwx.rest/api/metar/CYWK","https://avwx.rest/api/taf/CYWK","https://avwx.rest/api/metar/CYDP","https://avwx.rest/api/taf/CYDP","https://avwx.rest/api/metar/CYNA","https://avwx.rest/api/taf/CYNA","https://avwx.rest/api/metar/CYKL","https://avwx.rest/api/taf/CYKL"];case"YUL":return["https://avwx.rest/api/metar/CYUL","https://avwx.rest/api/taf/CYUL","https://avwx.rest/api/metar/CYQB","https://avwx.rest/api/taf/CYQB","https://avwx.rest/api/metar/CYHU","https://avwx.rest/api/taf/CYHU","https://avwx.rest/api/metar/CYMX","https://avwx.rest/api/taf/CYMX","https://avwx.rest/api/metar/CYRQ","https://avwx.rest/api/taf/CYRQ","https://avwx.rest/api/metar/CYOW","https://avwx.rest/api/taf/CYOW","https://avwx.rest/api/metar/CYND","https://avwx.rest/api/taf/CYND","https://avwx.rest/api/metar/CYYZ","https://avwx.rest/api/taf/CYYZ","https://avwx.rest/api/metar/CYVO","https://avwx.rest/api/taf/CYVO","https://avwx.rest/api/metar/CYUY","https://avwx.rest/api/taf/CYUY","https://avwx.rest/api/metar/CYBG","https://avwx.rest/api/taf/CYBG","https://avwx.rest/api/metar/CYBC","https://avwx.rest/api/taf/CYBC","https://avwx.rest/api/metar/CYGR","https://avwx.rest/api/taf/CYGR","https://avwx.rest/api/metar/CYGP","https://avwx.rest/api/taf/CYGP","https://avwx.rest/api/metar/CYGV","https://avwx.rest/api/taf/CYGV","https://avwx.rest/api/metar/CYWK","https://avwx.rest/api/taf/CYWK","https://avwx.rest/api/metar/CZUM","https://avwx.rest/api/taf/CZUM","https://avwx.rest/api/metar/CYZV","https://avwx.rest/api/taf/CYZV","https://avwx.rest/api/metar/CYKL","https://avwx.rest/api/taf/CYKL"];case"YHZ":return["https://avwx.rest/api/metar/CYHZ","https://avwx.rest/api/taf/CYHZ","https://avwx.rest/api/metar/CYQM","https://avwx.rest/api/taf/CYQM","https://avwx.rest/api/metar/CYYG","https://avwx.rest/api/taf/CYYG","https://avwx.rest/api/metar/CYFC","https://avwx.rest/api/taf/CYFC","https://avwx.rest/api/metar/CZBF","https://avwx.rest/api/taf/CZBF","https://avwx.rest/api/metar/CYQY","https://avwx.rest/api/taf/CYQY","https://avwx.rest/api/metar/CYSJ","https://avwx.rest/api/taf/CYSJ","https://avwx.rest/api/metar/CYQI","https://avwx.rest/api/taf/CYQI"];default:throw new Error("Invalid Location")}},b=a=>{const[e,i]=l.exports.useState(!1),[p,s]=l.exports.useState([]);return l.exports.useEffect(()=>{i(!0),(async()=>{const o={headers:{Authorization:"UoCyZ0DYZP9cMI2IxUJNoLWTrsxvorXAuAwrvGjjZYg"}},L=J(a),N=await Promise.all(L.map(y=>fetch(y,o).then(F=>F.json())));i(!1),s(N)})()},[a]),{avwx:p,isLoading:e}};function X({onSelect:a}){const[e,i]=l.exports.useState(0),s=l.exports.useParams().location;return t(g,{elevation:3,children:n(M,{sx:{height:45},showLabels:!0,value:e,onChange:r=>{i(r)},children:[t(c,{label:"Refresh",onClick:b(s),icon:t(k,{})}),t(c,{label:"YYT",onClick:()=>{a("/YYT")},icon:t(d,{})}),t(c,{label:"YUL",onClick:()=>{a("/YUL")},icon:t(d,{})}),t(c,{label:"YHZ",onClick:()=>{a("/YHZ")},icon:t(d,{})})]})})}const f=a=>{switch(a){case"YYT":case"YHZ":return"gfacn34";case"YUL":return"gfacn33";default:throw new Error("Invalid airport code")}},Y=(a,e,i)=>`https://flightplanning.navcanada.ca/Latest/gfa/anglais/produits/uprair/gfa/${a}/Latest-${a}_${e}_${i}.png`;function T({location:a}){const[e,i]=l.exports.useState("006");return n(S,{children:[t("div",{className:"GFAcontainer",children:t("img",{className:"GFA",id:"GfaClouds",src:Y(f(a),"cldwx",e),alt:"GFA"})}),n(g,{sx:{alignItems:"center",display:"flex"},children:[t(v,{sx:{m:1,ml:15,mr:3,width:150},className:"Buttons",variant:"contained",size:"small",onClick:()=>{i("000")},children:"Previous 6HR"}),t(v,{sx:{m:1,mr:3,width:150},className:"Buttons",variant:"contained",size:"small",onClick:()=>{i("006")},children:"CURRENT"}),t(v,{sx:{m:1,width:150},className:"Buttons",variant:"contained",size:"small",onClick:()=>{i("012")},children:"Next 6HR"})]}),t("div",{className:"GFAcontainer",children:t("img",{className:"GFA",id:"GfaIcing",src:Y(f(a),"turbc",e),alt:"GFA Icing and Turbulence"})})]})}T.propTypes={location:P.string.isRequired};function _(){return t("div",{className:"spinner-container",children:t("div",{className:"loading-spinner"})})}const q=C({palette:{mode:"dark"}});function w(){var r;const e=(r=I().location)!=null?r:"YYT",{avwx:i,isLoading:p}=b(e),s=D();return t(u,{theme:q,children:n(H,{sx:{display:"flex",flexDirection:"column",height:"100vh"},children:[n("div",{className:"App",children:[p?t(_,{}):t(j,{className:"Table",data:i}),t(T,{location:e})]}),t(X,{onSelect:o=>s(o)}),t(Q,{})]})})}O.render(n(W.StrictMode,{children:[t(z,{basename:"/aviation-weather",children:n(K,{children:[t(m,{path:"/",element:t(w,{})}),t(m,{path:"/:location",element:t(w,{})})]})}),","]}),document.getElementById("root"));
