import{R as u,T as m,C as a}from"./vendor-c7b711f3.js";const y=["\uC77C","\uC6D4","\uD654","\uC218","\uBAA9","\uAE08","\uD1A0","\uC77C"],T=s=>{const t=u(s).day();return y[t]},r="`\uC6D4`/`\uC77C` (`\uC694\uC77C`) `QT\uCC45`\n\n`\uBCF8\uBB38`\n`\uCC45` `\uC7A5`:`\uC808`",f=()=>{const{subscribe:s,set:t}=a(typeof window!="undefined"&&localStorage.getItem("copyTemplete")||r),o=e=>{localStorage.setItem("copyTemplete",e),t(e)};return{subscribe:s,keyup:e=>o(e),reset:()=>o(r),transferTemplete:({book:e,capter:c,contentType:n,verse:C,text:l},p)=>(p||m(i)).replace("`\uC6D4`",u().format("MM")).replace("`\uC77C`",u().format("DD")).replace("`\uC694\uC77C`",T()).replace("`QT\uCC45`",n).replace("`\uCC45`",e).replace("`\uBCF8\uBB38`",l).replace("`\uC7A5`",c+"").replace("`\uC808`",C+"")}},i=f(),D=()=>{const{subscribe:s,set:t}=a({show:!1,text:""});return{subscribe:s,onToast:(o,e=3e3)=>{t({show:!0,text:o}),setTimeout(()=>t({show:!1,text:o}),e)}}},A=D(),d=()=>{const{subscribe:s,set:t}=a(!1);return{subscribe:s,handle:o=>async e=>{try{t(!0),await o(e)}finally{t(!1)}}}},B=d();export{i as c,T as g,B as l,A as t};
