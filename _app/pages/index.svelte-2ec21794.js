import{S as ne,i as oe,s as ie,l as G,f as g,d as n,k as x,e as u,t as T,R as he,n as D,c as d,a as v,g as I,b,H as i,J as z,T as te,A as _e,I as fe}from"../chunks/vendor-15021308.js";import{c as j}from"../chunks/mockup-ddfdb9a3.js";import{o as le}from"../chunks/Toast-f8b2175b.js";function se(o,e,r){const s=o.slice();return s[2]=e[r],s}function ce(o,e,r){const s=o.slice();return s[5]=e[r].verse,s[2]=e[r].text,s}function ue(o){let e,r,s=o[5]+"",l,t,h,N=o[2]+"",q,P,R,V;function S(){return o[1](o[2])}return{c(){e=u("div"),r=u("span"),l=T(s),t=x(),h=u("p"),q=T(N),P=x(),this.h()},l(k){e=d(k,"DIV",{class:!0});var p=v(e);r=d(p,"SPAN",{class:!0});var w=v(r);l=I(w,s),w.forEach(n),t=D(p),h=d(p,"P",{});var E=v(h);q=I(E,N),E.forEach(n),P=D(p),p.forEach(n),this.h()},h(){b(r,"class","svelte-2c0lsq"),b(e,"class","svelte-2c0lsq")},m(k,p){g(k,e,p),i(e,r),i(r,l),i(e,t),i(e,h),i(h,q),i(e,P),R||(V=fe(e,"click",S),R=!0)},p(k,p){o=k},d(k){k&&n(e),R=!1,V()}}}function de(o){let e,r=o[2]+"",s;return{c(){e=u("h5"),s=T(r),this.h()},l(l){e=d(l,"H5",{class:!0});var t=v(e);s=I(t,r),t.forEach(n),this.h()},h(){b(e,"class","svelte-2c0lsq")},m(l,t){g(l,e,t),i(e,s)},p:z,d(l){l&&n(e)}}}function ae(o){let e;function r(t,h){return t[5]?ue:de}let l=r(o)(o);return{c(){l.c(),e=G()},l(t){l.l(t),e=G()},m(t,h){l.m(t,h),g(t,e,h)},p(t,h){l.p(t,h)},d(t){l.d(t),t&&n(e)}}}function ve(o){let e,r=o[2]+"",s;return{c(){e=u("h5"),s=T(r),this.h()},l(l){e=d(l,"H5",{class:!0});var t=v(e);s=I(t,r),t.forEach(n),this.h()},h(){b(e,"class","svelte-2c0lsq")},m(l,t){g(l,e,t),i(e,s)},p:z,d(l){l&&n(e)}}}function pe(o){let e,r=o[2]+"",s;return{c(){e=u("pre"),s=T(r),this.h()},l(l){e=d(l,"PRE",{class:!0});var t=v(e);s=I(t,r),t.forEach(n),this.h()},h(){b(e,"class","svelte-2c0lsq")},m(l,t){g(l,e,t),i(e,s)},p:z,d(l){l&&n(e)}}}function re(o){let e;function r(t,h){return t[2].length>30?pe:ve}let l=r(o)(o);return{c(){l.c(),e=G()},l(t){l.l(t),e=G()},m(t,h){l.m(t,h),g(t,e,h)},p(t,h){l.p(t,h)},d(t){l.d(t),t&&n(e)}}}function me(o){let e,r,s,l,t=j.date+"",h,N,q,P=j.title+"",R,V,S,k=j.range+"",p,w,E,B,H,O,M,K,L,A,$=j.verses,_=[];for(let a=0;a<$.length;a+=1)_[a]=ae(ce(o,$,a));let J=j.commentaries,f=[];for(let a=0;a<J.length;a+=1)f[a]=re(se(o,J,a));return{c(){e=x(),r=u("section"),s=u("header"),l=u("h2"),h=T(t),N=x(),q=u("h1"),R=T(P),V=x(),S=u("h2"),p=T(k),w=x(),E=u("div");for(let a=0;a<_.length;a+=1)_[a].c();B=x(),H=u("section"),O=u("header"),M=u("h1"),K=T("\uBCF8\uBB38\uD574\uC124"),L=x(),A=u("div");for(let a=0;a<f.length;a+=1)f[a].c();this.h()},l(a){he('[data-svelte="svelte-1ihar54"]',document.head).forEach(n),e=D(a),r=d(a,"SECTION",{class:!0});var c=v(r);s=d(c,"HEADER",{class:!0});var m=v(s);l=d(m,"H2",{});var Q=v(l);h=I(Q,t),Q.forEach(n),N=D(m),q=d(m,"H1",{});var U=v(q);R=I(U,P),U.forEach(n),V=D(m),S=d(m,"H2",{});var W=v(S);p=I(W,k),W.forEach(n),m.forEach(n),w=D(c),E=d(c,"DIV",{class:!0});var X=v(E);for(let C=0;C<_.length;C+=1)_[C].l(X);X.forEach(n),c.forEach(n),B=D(a),H=d(a,"SECTION",{class:!0});var F=v(H);O=d(F,"HEADER",{class:!0});var Y=v(O);M=d(Y,"H1",{});var Z=v(M);K=I(Z,"\uBCF8\uBB38\uD574\uC124"),Z.forEach(n),Y.forEach(n),L=D(F),A=d(F,"DIV",{class:!0});var ee=v(A);for(let C=0;C<f.length;C+=1)f[C].l(ee);ee.forEach(n),F.forEach(n),this.h()},h(){document.title="\uC131\uACBD\uBB35\uC0C1",b(s,"class","svelte-2c0lsq"),b(E,"class","bible svelte-2c0lsq"),b(r,"class","svelte-2c0lsq"),b(O,"class","svelte-2c0lsq"),b(A,"class","bible svelte-2c0lsq"),b(H,"class","svelte-2c0lsq")},m(a,y){g(a,e,y),g(a,r,y),i(r,s),i(s,l),i(l,h),i(s,N),i(s,q),i(q,R),i(s,V),i(s,S),i(S,p),i(r,w),i(r,E);for(let c=0;c<_.length;c+=1)_[c].m(E,null);g(a,B,y),g(a,H,y),i(H,O),i(O,M),i(M,K),i(H,L),i(H,A);for(let c=0;c<f.length;c+=1)f[c].m(A,null)},p(a,[y]){if(y&1){$=j.verses;let c;for(c=0;c<$.length;c+=1){const m=ce(a,$,c);_[c]?_[c].p(m,y):(_[c]=ae(m),_[c].c(),_[c].m(E,null))}for(;c<_.length;c+=1)_[c].d(1);_.length=$.length}if(y&0){J=j.commentaries;let c;for(c=0;c<J.length;c+=1){const m=se(a,J,c);f[c]?f[c].p(m,y):(f[c]=re(m),f[c].c(),f[c].m(A,null))}for(;c<f.length;c+=1)f[c].d(1);f.length=J.length}},i:z,o:z,d(a){a&&n(e),a&&n(r),te(_,a),a&&n(B),a&&n(H),te(f,a)}}}const ge=!0;function be(o){_e(async()=>{});const e=async s=>{try{await navigator.clipboard.writeText(s),le("\uD074\uB9BD\uBCF4\uB4DC\uC5D0 \uBCF5\uC0AC \uC644\uB8CC",1e3)}catch(l){le("[\uC624\uB958] \uBCF5\uC0AC \uC2E4\uD328"),console.log(l)}};return[e,s=>e(s)]}class qe extends ne{constructor(e){super();oe(this,e,be,me,ie,{})}}export{qe as default,ge as prerender};
