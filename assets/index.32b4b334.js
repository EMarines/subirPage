(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerpolicy&&(r.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?r.credentials="include":i.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=n(i);fetch(i.href,r)}})();function ue(){}const cd=t=>t;function Wt(t,e){for(const n in e)t[n]=e[n];return t}function ud(t){return t()}function zc(){return Object.create(null)}function rt(t){t.forEach(ud)}function Tl(t){return typeof t=="function"}function nt(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let Or;function dn(t,e){return Or||(Or=document.createElement("a")),Or.href=e,t===Or.href}function Wg(t){return Object.keys(t).length===0}function kl(t,...e){if(t==null)return ue;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function ri(t){let e;return kl(t,n=>e=n)(),e}function xe(t,e,n){t.$$.on_destroy.push(kl(e,n))}function Il(t,e,n,s){if(t){const i=hd(t,e,n,s);return t[0](i)}}function hd(t,e,n,s){return t[1]&&s?Wt(n.ctx.slice(),t[1](s(e))):n.ctx}function Sl(t,e,n,s){if(t[2]&&s){const i=t[2](s(n));if(e.dirty===void 0)return i;if(typeof i=="object"){const r=[],o=Math.max(e.dirty.length,i.length);for(let a=0;a<o;a+=1)r[a]=e.dirty[a]|i[a];return r}return e.dirty|i}return e.dirty}function Cl(t,e,n,s,i,r){if(i){const o=hd(e,n,s,r);t.p(o,i)}}function Al(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let s=0;s<n;s++)e[s]=-1;return e}return-1}function xr(t){const e={};for(const n in t)n[0]!=="$"&&(e[n]=t[n]);return e}function Zr(t,e){const n={};e=new Set(e);for(const s in t)!e.has(s)&&s[0]!=="$"&&(n[s]=t[s]);return n}function wt(t,e,n){return t.set(n),e}const fd=typeof window<"u";let Qg=fd?()=>window.performance.now():()=>Date.now(),Pl=fd?t=>requestAnimationFrame(t):ue;const ei=new Set;function dd(t){ei.forEach(e=>{e.c(t)||(ei.delete(e),e.f())}),ei.size!==0&&Pl(dd)}function Yg(t){let e;return ei.size===0&&Pl(dd),{promise:new Promise(n=>{ei.add(e={c:t,f:n})}),abort(){ei.delete(e)}}}function u(t,e){t.appendChild(e)}function pd(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function Xg(t){const e=p("style");return Jg(pd(t),e),e.sheet}function Jg(t,e){u(t.head||t,e)}function w(t,e,n){t.insertBefore(e,n||null)}function b(t){t.parentNode.removeChild(t)}function Ye(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function p(t){return document.createElement(t)}function C(t){return document.createTextNode(t)}function y(){return C(" ")}function rn(){return C("")}function B(t,e,n,s){return t.addEventListener(e,n,s),()=>t.removeEventListener(e,n,s)}function Tn(t){return function(e){return e.preventDefault(),t.call(this,e)}}function m(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function Un(t,e){const n=Object.getOwnPropertyDescriptors(t.__proto__);for(const s in e)e[s]==null?t.removeAttribute(s):s==="style"?t.style.cssText=e[s]:s==="__value"?t.value=t[s]=e[s]:n[s]&&n[s].set?t[s]=e[s]:m(t,s,e[s])}function Zt(t,e,n){const s=new Set;for(let i=0;i<t.length;i+=1)t[i].checked&&s.add(t[i].__value);return n||s.delete(e),Array.from(s)}function ps(t){return t===""?null:+t}function xg(t){return Array.from(t.childNodes)}function ie(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function fe(t,e){t.value=e==null?"":e}function Ke(t,e){for(let n=0;n<t.options.length;n+=1){const s=t.options[n];if(s.__value===e){s.selected=!0;return}}t.selectedIndex=-1}function xt(t){const e=t.querySelector(":checked")||t.options[0];return e&&e.__value}function oi(t,e,n){t.classList[n?"add":"remove"](e)}function md(t,e,{bubbles:n=!1,cancelable:s=!1}={}){const i=document.createEvent("CustomEvent");return i.initCustomEvent(t,n,s,e),i}const eo=new Map;let to=0;function Zg(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function e_(t,e){const n={stylesheet:Xg(e),rules:{}};return eo.set(t,n),n}function Gc(t,e,n,s,i,r,o,a=0){const l=16.666/s;let c=`{
`;for(let I=0;I<=1;I+=l){const S=e+(n-e)*r(I);c+=I*100+`%{${o(S,1-S)}}
`}const h=c+`100% {${o(n,1-n)}}
}`,f=`__svelte_${Zg(h)}_${a}`,d=pd(t),{stylesheet:g,rules:_}=eo.get(d)||e_(d,t);_[f]||(_[f]=!0,g.insertRule(`@keyframes ${f} ${h}`,g.cssRules.length));const v=t.style.animation||"";return t.style.animation=`${v?`${v}, `:""}${f} ${s}ms linear ${i}ms 1 both`,to+=1,f}function t_(t,e){const n=(t.style.animation||"").split(", "),s=n.filter(e?r=>r.indexOf(e)<0:r=>r.indexOf("__svelte")===-1),i=n.length-s.length;i&&(t.style.animation=s.join(", "),to-=i,to||n_())}function n_(){Pl(()=>{to||(eo.forEach(t=>{const{stylesheet:e}=t;let n=e.cssRules.length;for(;n--;)e.deleteRule(n);t.rules={}}),eo.clear())})}let Hi;function Mi(t){Hi=t}function rr(){if(!Hi)throw new Error("Function called outside component initialization");return Hi}function s_(t){rr().$$.on_mount.push(t)}function i_(t){rr().$$.on_destroy.push(t)}function gd(){const t=rr();return(e,n,{cancelable:s=!1}={})=>{const i=t.$$.callbacks[e];if(i){const r=md(e,n,{cancelable:s});return i.slice().forEach(o=>{o.call(t,r)}),!r.defaultPrevented}return!0}}function $i(t,e){return rr().$$.context.set(t,e),e}function ys(t){return rr().$$.context.get(t)}function r_(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach(s=>s.call(this,e))}const Di=[],Xn=[],qr=[],Ha=[],_d=Promise.resolve();let za=!1;function vd(){za||(za=!0,_d.then(yd))}function o_(){return vd(),_d}function it(t){qr.push(t)}function Ms(t){Ha.push(t)}const ga=new Set;let Nr=0;function yd(){const t=Hi;do{for(;Nr<Di.length;){const e=Di[Nr];Nr++,Mi(e),a_(e.$$)}for(Mi(null),Di.length=0,Nr=0;Xn.length;)Xn.pop()();for(let e=0;e<qr.length;e+=1){const n=qr[e];ga.has(n)||(ga.add(n),n())}qr.length=0}while(Di.length);for(;Ha.length;)Ha.pop()();za=!1,ga.clear(),Mi(t)}function a_(t){if(t.fragment!==null){t.update(),rt(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(it)}}let Ai;function l_(){return Ai||(Ai=Promise.resolve(),Ai.then(()=>{Ai=null})),Ai}function _a(t,e,n){t.dispatchEvent(md(`${e?"intro":"outro"}${n}`))}const Hr=new Set;let Gn;function Mt(){Gn={r:0,c:[],p:Gn}}function $t(){Gn.r||rt(Gn.c),Gn=Gn.p}function U(t,e){t&&t.i&&(Hr.delete(t),t.i(e))}function H(t,e,n,s){if(t&&t.o){if(Hr.has(t))return;Hr.add(t),Gn.c.push(()=>{Hr.delete(t),s&&(n&&t.d(1),s())}),t.o(e)}else s&&s()}const c_={duration:0};function Pn(t,e,n,s){let i=e(t,n),r=s?0:1,o=null,a=null,l=null;function c(){l&&t_(t,l)}function h(d,g){const _=d.b-r;return g*=Math.abs(_),{a:r,b:d.b,d:_,duration:g,start:d.start,end:d.start+g,group:d.group}}function f(d){const{delay:g=0,duration:_=300,easing:v=cd,tick:I=ue,css:S}=i||c_,P={start:Qg()+g,b:d};d||(P.group=Gn,Gn.r+=1),o||a?a=P:(S&&(c(),l=Gc(t,r,d,_,g,v,S)),d&&I(0,1),o=h(P,_),it(()=>_a(t,d,"start")),Yg(N=>{if(a&&N>a.start&&(o=h(a,_),a=null,_a(t,o.b,"start"),S&&(c(),l=Gc(t,r,o.b,o.duration,0,v,i.css))),o){if(N>=o.end)I(r=o.b,1-r),_a(t,o.b,"end"),a||(o.b?c():--o.group.r||rt(o.group.c)),o=null;else if(N>=o.start){const $=N-o.start;r=o.a+o.d*v($/o.duration),I(r,1-r)}}return!!(o||a)}))}return{run(d){Tl(i)?l_().then(()=>{i=i(),f(d)}):f(d)},end(){c(),o=a=null}}}function kn(t,e){const n={},s={},i={$$scope:1};let r=t.length;for(;r--;){const o=t[r],a=e[r];if(a){for(const l in o)l in a||(s[l]=1);for(const l in a)i[l]||(n[l]=a[l],i[l]=1);t[r]=a}else for(const l in o)i[l]=1}for(const o in s)o in n||(n[o]=void 0);return n}function Jn(t){return typeof t=="object"&&t!==null?t:{}}function $s(t,e,n){const s=t.$$.props[e];s!==void 0&&(t.$$.bound[s]=n,n(t.$$.ctx[s]))}function ce(t){t&&t.c()}function oe(t,e,n,s){const{fragment:i,on_mount:r,on_destroy:o,after_update:a}=t.$$;i&&i.m(e,n),s||it(()=>{const l=r.map(ud).filter(Tl);o?o.push(...l):rt(l),t.$$.on_mount=[]}),a.forEach(it)}function ae(t,e){const n=t.$$;n.fragment!==null&&(rt(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function u_(t,e){t.$$.dirty[0]===-1&&(Di.push(t),vd(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function ot(t,e,n,s,i,r,o,a=[-1]){const l=Hi;Mi(t);const c=t.$$={fragment:null,ctx:null,props:r,update:ue,not_equal:i,bound:zc(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(l?l.$$.context:[])),callbacks:zc(),dirty:a,skip_bound:!1,root:e.target||l.$$.root};o&&o(c.root);let h=!1;if(c.ctx=n?n(t,e.props||{},(f,d,...g)=>{const _=g.length?g[0]:d;return c.ctx&&i(c.ctx[f],c.ctx[f]=_)&&(!c.skip_bound&&c.bound[f]&&c.bound[f](_),h&&u_(t,f)),d}):[],c.update(),h=!0,rt(c.before_update),c.fragment=s?s(c.ctx):!1,e.target){if(e.hydrate){const f=xg(e.target);c.fragment&&c.fragment.l(f),f.forEach(b)}else c.fragment&&c.fragment.c();e.intro&&U(t.$$.fragment),oe(t,e.target,e.anchor,e.customElement),yd()}Mi(l)}class at{$destroy(){ae(this,1),this.$destroy=ue}$on(e,n){const s=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return s.push(n),()=>{const i=s.indexOf(n);i!==-1&&s.splice(i,1)}}$set(e){this.$$set&&!Wg(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const Kc=t=>typeof t>"u",bd=t=>typeof t=="function",wd=t=>typeof t=="number";function h_(t){return!t.defaultPrevented&&t.button===0&&!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function Ed(){let t=0;return()=>t++}function f_(){return Math.random().toString(36).substring(2)}const bs=typeof window>"u";function Td(t,e,n){return t.addEventListener(e,n),()=>t.removeEventListener(e,n)}const Ga=(t,e)=>t?{}:{style:e},Xs=t=>({"aria-hidden":"true",...Ga(t,"display:none;")}),Qs=[];function d_(t,e){return{subscribe:cn(t,e).subscribe}}function cn(t,e=ue){let n;const s=new Set;function i(a){if(nt(t,a)&&(t=a,n)){const l=!Qs.length;for(const c of s)c[1](),Qs.push(c,t);if(l){for(let c=0;c<Qs.length;c+=2)Qs[c][0](Qs[c+1]);Qs.length=0}}}function r(a){i(a(t))}function o(a,l=ue){const c=[a,l];return s.add(c),s.size===1&&(n=e(i)||ue),a(t),()=>{s.delete(c),s.size===0&&(n(),n=null)}}return{set:i,update:r,subscribe:o}}function p_(t,e,n){const s=!Array.isArray(t),i=s?[t]:t,r=e.length<2;return d_(n,o=>{let a=!1;const l=[];let c=0,h=ue;const f=()=>{if(c)return;h();const g=e(s?l[0]:l,o);r?o(g):h=Tl(g)?g:ue},d=i.map((g,_)=>kl(g,v=>{l[_]=v,c&=~(1<<_),a&&f()},()=>{c|=1<<_}));return a=!0,f(),function(){rt(d),h()}})}const or=t=>`@@svnav-ctx__${t}`,Ka=or("LOCATION"),ai=or("ROUTER"),kd=or("ROUTE"),m_=or("ROUTE_PARAMS"),g_=or("FOCUS_ELEM"),Id=/^:(.+)/,Ri=(t,e,n)=>t.substr(e,n),Wa=(t,e)=>Ri(t,0,e.length)===e,__=t=>t==="",v_=t=>Id.test(t),Sd=t=>t[0]==="*",y_=t=>t.replace(/\*.*$/,""),Cd=t=>t.replace(/(^\/+|\/+$)/g,"");function jn(t,e=!1){const n=Cd(t).split("/");return e?n.filter(Boolean):n}const va=(t,e)=>t+(e?`?${e}`:""),Dl=t=>`/${Cd(t)}`;function ar(...t){const e=s=>jn(s,!0).join("/"),n=t.map(e).join("/");return Dl(n)}const Rl=1,Ro=2,Fs=3,b_=4,Ad=5,w_=6,Pd=7,E_=8,T_=9,Dd=10,Rd=11,k_={[Rl]:"Link",[Ro]:"Route",[Fs]:"Router",[b_]:"useFocus",[Ad]:"useLocation",[w_]:"useMatch",[Pd]:"useNavigate",[E_]:"useParams",[T_]:"useResolvable",[Dd]:"useResolve",[Rd]:"navigate"},Ol=t=>k_[t];function I_(t,e){let n;return t===Ro?n=e.path?`path="${e.path}"`:"default":t===Rl?n=`to="${e.to}"`:t===Fs&&(n=`basepath="${e.basepath||""}"`),`<${Ol(t)} ${n||""} />`}function S_(t,e,n,s){const i=n&&I_(s||t,n),r=i?`

Occurred in: ${i}`:"",o=Ol(t),a=bd(e)?e(o):e;return`<${o}> ${a}${r}`}const Od=t=>(...e)=>t(S_(...e)),Nd=Od(t=>{throw new Error(t)}),no=Od(console.warn),Wc=4,C_=3,A_=2,P_=1,D_=1;function R_(t,e){const n=t.default?0:jn(t.fullPath).reduce((s,i)=>{let r=s;return r+=Wc,__(i)?r+=D_:v_(i)?r+=A_:Sd(i)?r-=Wc+P_:r+=C_,r},0);return{route:t,score:n,index:e}}function O_(t){return t.map(R_).sort((e,n)=>e.score<n.score?1:e.score>n.score?-1:e.index-n.index)}function Ld(t,e){let n,s;const[i]=e.split("?"),r=jn(i),o=r[0]==="",a=O_(t);for(let l=0,c=a.length;l<c;l++){const{route:h}=a[l];let f=!1;const d={},g=S=>({...h,params:d,uri:S});if(h.default){s=g(e);continue}const _=jn(h.fullPath),v=Math.max(r.length,_.length);let I=0;for(;I<v;I++){const S=_[I],P=r[I];if(!Kc(S)&&Sd(S)){const $=S==="*"?"*":S.slice(1);d[$]=r.slice(I).map(decodeURIComponent).join("/");break}if(Kc(P)){f=!0;break}const N=Id.exec(S);if(N&&!o){const $=decodeURIComponent(P);d[N[1]]=$}else if(S!==P){f=!0;break}}if(!f){n=g(ar(...r.slice(0,I)));break}}return n||s||null}function Md(t,e){return Ld([t],e)}function N_(t,e){if(Wa(t,"/"))return t;const[n,s]=t.split("?"),[i]=e.split("?"),r=jn(n),o=jn(i);if(r[0]==="")return va(i,s);if(!Wa(r[0],".")){const c=o.concat(r).join("/");return va((i==="/"?"":"/")+c,s)}const a=o.concat(r),l=[];return a.forEach(c=>{c===".."?l.pop():c!=="."&&l.push(c)}),va(`/${l.join("/")}`,s)}function Qc(t,e){const{pathname:n,hash:s="",search:i="",state:r}=t,o=jn(e,!0),a=jn(n,!0);for(;o.length;)o[0]!==a[0]&&Nd(Fs,`Invalid state: All locations must begin with the basepath "${e}", found "${n}"`),o.shift(),a.shift();return{pathname:ar(...a),hash:s,search:i,state:r}}const Yc=t=>t.length===1?"":t,Nl=t=>{const e=t.indexOf("?"),n=t.indexOf("#"),s=e!==-1,i=n!==-1,r=i?Yc(Ri(t,n)):"",o=i?Ri(t,0,n):t,a=s?Yc(Ri(o,e)):"";return{pathname:(s?Ri(o,0,e):o)||"/",search:a,hash:r}},L_=t=>{const{pathname:e,search:n,hash:s}=t;return e+n+s};function M_(t,e,n){return ar(n,N_(t,e))}function $_(t,e){const n=Dl(y_(t)),s=jn(n,!0),i=jn(e,!0).slice(0,s.length),r=Md({fullPath:n},ar(...i));return r&&r.uri}const ya="POP",F_="PUSH",U_="REPLACE";function ba(t){return{...t.location,pathname:encodeURI(decodeURI(t.location.pathname)),state:t.history.state,_key:t.history.state&&t.history.state._key||"initial"}}function B_(t){let e=[],n=ba(t),s=ya;const i=(r=e)=>r.forEach(o=>o({location:n,action:s}));return{get location(){return n},listen(r){e.push(r);const o=()=>{n=ba(t),s=ya,i([r])};i([r]);const a=Td(t,"popstate",o);return()=>{a(),e=e.filter(l=>l!==r)}},navigate(r,o){const{state:a={},replace:l=!1}=o||{};if(s=l?U_:F_,wd(r))o&&no(Rd,"Navigation options (state or replace) are not supported, when passing a number as the first argument to navigate. They are ignored."),s=ya,t.history.go(r);else{const c={...a,_key:f_()};try{t.history[l?"replaceState":"pushState"](c,"",r)}catch{t.location[l?"replace":"assign"](r)}}n=ba(t),i()}}}function wa(t,e){return{...Nl(e),state:t}}function V_(t="/"){let e=0,n=[wa(null,t)];return{get entries(){return n},get location(){return n[e]},addEventListener(){},removeEventListener(){},history:{get state(){return n[e].state},pushState(s,i,r){e++,n=n.slice(0,e),n.push(wa(s,r))},replaceState(s,i,r){n[e]=wa(s,r)},go(s){const i=e+s;i<0||i>n.length-1||(e=i)}}}}const j_=!!(!bs&&window.document&&window.document.createElement),q_=!bs&&window.location.origin==="null",H_=B_(j_&&!q_?window:V_());let zn=null,$d=!0;function z_(t,e){const n=document.querySelectorAll("[data-svnav-router]");for(let s=0;s<n.length;s++){const i=n[s],r=Number(i.dataset.svnavRouter);if(r===t)return!0;if(r===e)return!1}return!1}function G_(t){(!zn||t.level>zn.level||t.level===zn.level&&z_(t.routerId,zn.routerId))&&(zn=t)}function K_(){zn=null}function W_(){$d=!1}function Xc(t){if(!t)return!1;const e="tabindex";try{if(!t.hasAttribute(e)){t.setAttribute(e,"-1");let n;n=Td(t,"blur",()=>{t.removeAttribute(e),n()})}return t.focus(),document.activeElement===t}catch{return!1}}function Q_(t,e){return Number(t.dataset.svnavRouteEnd)===e}function Y_(t){return/^H[1-6]$/i.test(t.tagName)}function Jc(t,e=document){return e.querySelector(t)}function X_(t){let n=Jc(`[data-svnav-route-start="${t}"]`).nextElementSibling;for(;!Q_(n,t);){if(Y_(n))return n;const s=Jc("h1,h2,h3,h4,h5,h6",n);if(s)return s;n=n.nextElementSibling}return null}function J_(t){Promise.resolve(ri(t.focusElement)).then(e=>{const n=e||X_(t.id);n||no(Fs,`Could not find an element to focus. You should always render a header for accessibility reasons, or set a custom focus element via the "useFocus" hook. If you don't want this Route or Router to manage focus, pass "primary={false}" to it.`,t,Ro),!Xc(n)&&Xc(document.documentElement)})}const x_=(t,e,n)=>(s,i)=>o_().then(()=>{if(!zn||$d){W_();return}if(s&&J_(zn.route),t.announcements&&i){const{path:r,fullPath:o,meta:a,params:l,uri:c}=zn.route,h=t.createAnnouncement({path:r,fullPath:o,meta:a,params:l,uri:c},ri(n));Promise.resolve(h).then(f=>{e.set(f)})}K_()}),xc="position:fixed;top:-1px;left:0;width:1px;height:1px;padding:0;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border:0;";function Z_(t){let e,n,s=[{role:"status"},{"aria-atomic":"true"},{"aria-live":"polite"},{"data-svnav-announcer":""},Ga(t[6],xc)],i={};for(let r=0;r<s.length;r+=1)i=Wt(i,s[r]);return{c(){e=p("div"),n=C(t[0]),Un(e,i)},m(r,o){w(r,e,o),u(e,n)},p(r,o){o[0]&1&&ie(n,r[0]),Un(e,i=kn(s,[{role:"status"},{"aria-atomic":"true"},{"aria-live":"polite"},{"data-svnav-announcer":""},Ga(r[6],xc)]))},d(r){r&&b(e)}}}function ev(t){let e,n,s,i,r,o=[Xs(t[6]),{"data-svnav-router":t[3]}],a={};for(let f=0;f<o.length;f+=1)a=Wt(a,o[f]);const l=t[22].default,c=Il(l,t,t[21],null);let h=t[2]&&t[4]&&t[1].announcements&&Z_(t);return{c(){e=p("div"),n=y(),c&&c.c(),s=y(),h&&h.c(),i=rn(),Un(e,a)},m(f,d){w(f,e,d),w(f,n,d),c&&c.m(f,d),w(f,s,d),h&&h.m(f,d),w(f,i,d),r=!0},p(f,d){Un(e,a=kn(o,[Xs(f[6]),{"data-svnav-router":f[3]}])),c&&c.p&&(!r||d[0]&2097152)&&Cl(c,l,f,f[21],r?Sl(l,f[21],d,null):Al(f[21]),null),f[2]&&f[4]&&f[1].announcements&&h.p(f,d)},i(f){r||(U(c,f),r=!0)},o(f){H(c,f),r=!1},d(f){f&&b(e),f&&b(n),c&&c.d(f),f&&b(s),h&&h.d(f),f&&b(i)}}}const tv=Ed(),Zc="/";function nv(t,e,n){let s,i,r,o,a,{$$slots:l={},$$scope:c}=e,{basepath:h=Zc}=e,{url:f=null}=e,{history:d=H_}=e,{primary:g=!0}=e,{a11y:_={}}=e,{disableInlineStyles:v=!1}=e;const I={createAnnouncement:A=>`Navigated to ${A.uri}`,announcements:!0,..._},S=h,P=Dl(h),N=ys(Ka),$=ys(ai),L=!N,V=tv(),O=g&&!($&&!$.manageFocus),W=cn("");xe(t,W,A=>n(0,a=A));const D=$?$.disableInlineStyles:v,R=cn([]);xe(t,R,A=>n(20,o=A));const G=cn(null);xe(t,G,A=>n(18,i=A));let F=!1;const re=L?0:$.level+1,x=L?cn((()=>Qc(bs?Nl(f):d.location,P))()):N;xe(t,x,A=>n(17,s=A));const j=cn(s);xe(t,j,A=>n(19,r=A));const te=x_(I,W,x),k=A=>se=>se.filter(we=>we.id!==A);function z(A){if(bs){if(F)return;const se=Md(A,s.pathname);if(se)return F=!0,se}else R.update(se=>{const we=k(A.id)(se);return we.push(A),we})}function Q(A){R.update(k(A))}return!L&&h!==Zc&&no(Fs,'Only top-level Routers can have a "basepath" prop. It is ignored.',{basepath:h}),L&&(s_(()=>d.listen(se=>{const we=Qc(se.location,P);j.set(s),x.set(we)})),$i(Ka,x)),$i(ai,{activeRoute:G,registerRoute:z,unregisterRoute:Q,manageFocus:O,level:re,id:V,history:L?d:$.history,basepath:L?P:$.basepath,disableInlineStyles:D}),t.$$set=A=>{"basepath"in A&&n(11,h=A.basepath),"url"in A&&n(12,f=A.url),"history"in A&&n(13,d=A.history),"primary"in A&&n(14,g=A.primary),"a11y"in A&&n(15,_=A.a11y),"disableInlineStyles"in A&&n(16,v=A.disableInlineStyles),"$$scope"in A&&n(21,c=A.$$scope)},t.$$.update=()=>{if(t.$$.dirty[0]&2048&&h!==S&&no(Fs,'You cannot change the "basepath" prop. It is ignored.'),t.$$.dirty[0]&1179648){const A=Ld(o,s.pathname);G.set(A)}if(t.$$.dirty[0]&655360&&L){const A=!!s.hash,se=!A&&O,we=!A||s.pathname!==r.pathname;te(se,we)}t.$$.dirty[0]&262144&&O&&i&&i.primary&&G_({level:re,routerId:V,route:i})},[a,I,L,V,O,W,D,R,G,x,j,h,f,d,g,_,v,s,i,r,o,c,l]}class Ll extends at{constructor(e){super(),ot(this,e,nv,ev,nt,{basepath:11,url:12,history:13,primary:14,a11y:15,disableInlineStyles:16},null,[-1,-1])}}function lr(t,e,n=ai,s=Fs){ys(n)||Nd(t,r=>`You cannot use ${r} outside of a ${Ol(s)}.`,e)}const sv=t=>{const{subscribe:e}=ys(t);return{subscribe:e}};function Fd(){return lr(Ad),sv(Ka)}function Ud(){const{history:t}=ys(ai);return t}function Bd(){const t=ys(kd);return t?p_(t,e=>e.base):cn("/")}function Vd(){lr(Dd);const t=Bd(),{basepath:e}=ys(ai);return s=>M_(s,ri(t),e)}function iv(){lr(Pd);const t=Vd(),{navigate:e}=Ud();return(s,i)=>{const r=wd(s)?s:t(s);return e(r,i)}}const rv=t=>({params:t&16,location:t&8}),eu=t=>({params:bs?ri(t[10]):t[4],location:t[3],navigate:t[11]});function tu(t){let e,n;return e=new Ll({props:{primary:t[1],$$slots:{default:[lv]},$$scope:{ctx:t}}}),{c(){ce(e.$$.fragment)},m(s,i){oe(e,s,i),n=!0},p(s,i){const r={};i&2&&(r.primary=s[1]),i&528409&&(r.$$scope={dirty:i,ctx:s}),e.$set(r)},i(s){n||(U(e.$$.fragment,s),n=!0)},o(s){H(e.$$.fragment,s),n=!1},d(s){ae(e,s)}}}function ov(t){let e;const n=t[18].default,s=Il(n,t,t[19],eu);return{c(){s&&s.c()},m(i,r){s&&s.m(i,r),e=!0},p(i,r){s&&s.p&&(!e||r&524312)&&Cl(s,n,i,i[19],e?Sl(n,i[19],r,rv):Al(i[19]),eu)},i(i){e||(U(s,i),e=!0)},o(i){H(s,i),e=!1},d(i){s&&s.d(i)}}}function av(t){let e,n,s;const i=[{location:t[3]},{navigate:t[11]},bs?ri(t[10]):t[4],t[12]];var r=t[0];function o(a){let l={};for(let c=0;c<i.length;c+=1)l=Wt(l,i[c]);return{props:l}}return r&&(e=new r(o())),{c(){e&&ce(e.$$.fragment),n=rn()},m(a,l){e&&oe(e,a,l),w(a,n,l),s=!0},p(a,l){const c=l&7192?kn(i,[l&8&&{location:a[3]},l&2048&&{navigate:a[11]},l&1040&&Jn(bs?ri(a[10]):a[4]),l&4096&&Jn(a[12])]):{};if(r!==(r=a[0])){if(e){Mt();const h=e;H(h.$$.fragment,1,0,()=>{ae(h,1)}),$t()}r?(e=new r(o()),ce(e.$$.fragment),U(e.$$.fragment,1),oe(e,n.parentNode,n)):e=null}else r&&e.$set(c)},i(a){s||(e&&U(e.$$.fragment,a),s=!0)},o(a){e&&H(e.$$.fragment,a),s=!1},d(a){a&&b(n),e&&ae(e,a)}}}function lv(t){let e,n,s,i;const r=[av,ov],o=[];function a(l,c){return l[0]!==null?0:1}return e=a(t),n=o[e]=r[e](t),{c(){n.c(),s=rn()},m(l,c){o[e].m(l,c),w(l,s,c),i=!0},p(l,c){let h=e;e=a(l),e===h?o[e].p(l,c):(Mt(),H(o[h],1,1,()=>{o[h]=null}),$t(),n=o[e],n?n.p(l,c):(n=o[e]=r[e](l),n.c()),U(n,1),n.m(s.parentNode,s))},i(l){i||(U(n),i=!0)},o(l){H(n),i=!1},d(l){o[e].d(l),l&&b(s)}}}function cv(t){let e,n,s,i,r,o=[Xs(t[7]),{"data-svnav-route-start":t[5]}],a={};for(let f=0;f<o.length;f+=1)a=Wt(a,o[f]);let l=t[2]&&tu(t),c=[Xs(t[7]),{"data-svnav-route-end":t[5]}],h={};for(let f=0;f<c.length;f+=1)h=Wt(h,c[f]);return{c(){e=p("div"),n=y(),l&&l.c(),s=y(),i=p("div"),Un(e,a),Un(i,h)},m(f,d){w(f,e,d),w(f,n,d),l&&l.m(f,d),w(f,s,d),w(f,i,d),r=!0},p(f,[d]){Un(e,a=kn(o,[Xs(f[7]),{"data-svnav-route-start":f[5]}])),f[2]?l?(l.p(f,d),d&4&&U(l,1)):(l=tu(f),l.c(),U(l,1),l.m(s.parentNode,s)):l&&(Mt(),H(l,1,1,()=>{l=null}),$t()),Un(i,h=kn(c,[Xs(f[7]),{"data-svnav-route-end":f[5]}]))},i(f){r||(U(l),r=!0)},o(f){H(l),r=!1},d(f){f&&b(e),f&&b(n),l&&l.d(f),f&&b(s),f&&b(i)}}}const uv=Ed();function hv(t,e,n){let s;const i=["path","component","meta","primary"];let r=Zr(e,i),o,a,l,c,{$$slots:h={},$$scope:f}=e,{path:d=""}=e,{component:g=null}=e,{meta:_={}}=e,{primary:v=!0}=e;lr(Ro,e);const I=uv(),{registerRoute:S,unregisterRoute:P,activeRoute:N,disableInlineStyles:$}=ys(ai);xe(t,N,F=>n(16,o=F));const L=Bd();xe(t,L,F=>n(17,l=F));const V=Fd();xe(t,V,F=>n(3,a=F));const O=cn(null);let W;const D=cn(),R=cn({});xe(t,R,F=>n(4,c=F)),$i(kd,D),$i(m_,R),$i(g_,O);const G=iv();return bs||i_(()=>P(I)),t.$$set=F=>{n(24,e=Wt(Wt({},e),xr(F))),n(12,r=Zr(e,i)),"path"in F&&n(13,d=F.path),"component"in F&&n(0,g=F.component),"meta"in F&&n(14,_=F.meta),"primary"in F&&n(1,v=F.primary),"$$scope"in F&&n(19,f=F.$$scope)},t.$$.update=()=>{if(t.$$.dirty&155658){const F=d==="",re=ar(l,d),ee={id:I,path:d,meta:_,default:F,fullPath:F?"":re,base:F?l:$_(re,a.pathname),primary:v,focusElement:O};D.set(ee),n(15,W=S(ee))}if(t.$$.dirty&98304&&n(2,s=!!(W||o&&o.id===I)),t.$$.dirty&98308&&s){const{params:F}=W||o;R.set(F)}},e=xr(e),[g,v,s,a,c,I,N,$,L,V,R,G,r,d,_,W,o,l,h,f]}class yn extends at{constructor(e){super(),ot(this,e,hv,cv,nt,{path:13,component:0,meta:14,primary:1})}}function fv(t){let e,n,s,i;const r=t[13].default,o=Il(r,t,t[12],null);let a=[{href:t[0]},t[2],t[1]],l={};for(let c=0;c<a.length;c+=1)l=Wt(l,a[c]);return{c(){e=p("a"),o&&o.c(),Un(e,l)},m(c,h){w(c,e,h),o&&o.m(e,null),n=!0,s||(i=B(e,"click",t[4]),s=!0)},p(c,[h]){o&&o.p&&(!n||h&4096)&&Cl(o,r,c,c[12],n?Sl(r,c[12],h,null):Al(c[12]),null),Un(e,l=kn(a,[(!n||h&1)&&{href:c[0]},h&4&&c[2],h&2&&c[1]]))},i(c){n||(U(o,c),n=!0)},o(c){H(o,c),n=!1},d(c){c&&b(e),o&&o.d(c),s=!1,i()}}}function dv(t,e,n){let s,i,r,o,a,l;const c=["to","replace","state","getProps"];let h=Zr(e,c),f,{$$slots:d={},$$scope:g}=e,{to:_}=e,{replace:v=!1}=e,{state:I={}}=e,{getProps:S=null}=e;lr(Rl,e);const P=Fd();xe(t,P,O=>n(11,f=O));const N=gd(),$=Vd(),{navigate:L}=Ud();function V(O){N("click",O),h_(O)&&(O.preventDefault(),L(s,{state:I,replace:o||v}))}return t.$$set=O=>{n(19,e=Wt(Wt({},e),xr(O))),n(18,h=Zr(e,c)),"to"in O&&n(5,_=O.to),"replace"in O&&n(6,v=O.replace),"state"in O&&n(7,I=O.state),"getProps"in O&&n(8,S=O.getProps),"$$scope"in O&&n(12,g=O.$$scope)},t.$$.update=()=>{t.$$.dirty&2080&&n(0,s=$(_,f)),t.$$.dirty&2049&&n(10,i=Wa(f.pathname,s)),t.$$.dirty&2049&&n(9,r=s===f.pathname),t.$$.dirty&2049&&(o=Nl(s)===L_(f)),t.$$.dirty&512&&n(2,a=r?{"aria-current":"page"}:{}),n(1,l=(()=>{if(bd(S)){const O=S({location:f,href:s,isPartiallyCurrent:i,isCurrent:r});return{...h,...O}}return h})())},e=xr(e),[s,l,a,P,V,_,v,I,S,r,i,f,g,d]}class Cn extends at{constructor(e){super(),ot(this,e,dv,fv,nt,{to:5,replace:6,state:7,getProps:8})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jd=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},pv=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const i=t[n++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=t[n++];e[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(l>>10)),e[s++]=String.fromCharCode(56320+(l&1023))}else{const r=t[n++],o=t[n++];e[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return e.join("")},qd={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<t.length;i+=3){const r=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,c=l?t[i+2]:0,h=r>>2,f=(r&3)<<4|a>>4;let d=(a&15)<<2|c>>6,g=c&63;l||(g=64,o||(d=64)),s.push(n[h],n[f],n[d],n[g])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(jd(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):pv(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<t.length;){const r=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const f=i<t.length?n[t.charAt(i)]:64;if(++i,r==null||a==null||c==null||f==null)throw Error();const d=r<<2|a>>4;if(s.push(d),c!==64){const g=a<<4&240|c>>2;if(s.push(g),f!==64){const _=c<<6&192|f;s.push(_)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},mv=function(t){const e=jd(t);return qd.encodeByteArray(e,!0)},Hd=function(t){return mv(t).replace(/\./g,"")},gv=function(t){try{return qd.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _v{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pn(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function vv(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(pn())}function yv(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function bv(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function wv(){const t=pn();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Ev(){return typeof indexedDB=="object"}function Tv(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var r;e(((r=i.error)===null||r===void 0?void 0:r.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kv="FirebaseError";class rs extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=kv,Object.setPrototypeOf(this,rs.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,cr.prototype.create)}}class cr{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},i=`${this.service}/${e}`,r=this.errors[e],o=r?Iv(r,s):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new rs(i,a,s)}}function Iv(t,e){return t.replace(Sv,(n,s)=>{const i=e[s];return i!=null?String(i):`<${s}?>`})}const Sv=/\{\$([^}]+)}/g;function Cv(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function so(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const i of n){if(!s.includes(i))return!1;const r=t[i],o=e[i];if(nu(r)&&nu(o)){if(!so(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!n.includes(i))return!1;return!0}function nu(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ur(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function Av(t,e){const n=new Pv(t,e);return n.subscribe.bind(n)}class Pv{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let i;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");Dv(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:s},i.next===void 0&&(i.next=Ea),i.error===void 0&&(i.error=Ea),i.complete===void 0&&(i.complete=Ea);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),r}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Dv(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Ea(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function On(t){return t&&t._delegate?t._delegate:t}class Us{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const As="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rv{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new _v;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(r){if(i)return null;throw r}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Nv(e))try{this.getOrInitializeService({instanceIdentifier:As})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(e=As){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=As){return this.instances.has(e)}getOptions(e=As){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);s===a&&o.resolve(i)}return i}onInit(e,n){var s;const i=this.normalizeInstanceIdentifier(n),r=(s=this.onInitCallbacks.get(i))!==null&&s!==void 0?s:new Set;r.add(e),this.onInitCallbacks.set(i,r);const o=this.instances.get(i);return o&&e(o,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(!!s)for(const i of s)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:Ov(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=As){return this.component?this.component.multipleInstances?e:As:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Ov(t){return t===As?void 0:t}function Nv(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lv{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Rv(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Je;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Je||(Je={}));const Mv={debug:Je.DEBUG,verbose:Je.VERBOSE,info:Je.INFO,warn:Je.WARN,error:Je.ERROR,silent:Je.SILENT},$v=Je.INFO,Fv={[Je.DEBUG]:"log",[Je.VERBOSE]:"log",[Je.INFO]:"info",[Je.WARN]:"warn",[Je.ERROR]:"error"},Uv=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),i=Fv[e];if(i)console[i](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Ml{constructor(e){this.name=e,this._logLevel=$v,this._logHandler=Uv,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Je))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Mv[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Je.DEBUG,...e),this._logHandler(this,Je.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Je.VERBOSE,...e),this._logHandler(this,Je.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Je.INFO,...e),this._logHandler(this,Je.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Je.WARN,...e),this._logHandler(this,Je.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Je.ERROR,...e),this._logHandler(this,Je.ERROR,...e)}}const Bv=(t,e)=>e.some(n=>t instanceof n);let su,iu;function Vv(){return su||(su=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function jv(){return iu||(iu=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const zd=new WeakMap,Qa=new WeakMap,Gd=new WeakMap,Ta=new WeakMap,$l=new WeakMap;function qv(t){const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("success",r),t.removeEventListener("error",o)},r=()=>{n(ms(t.result)),i()},o=()=>{s(t.error),i()};t.addEventListener("success",r),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&zd.set(n,t)}).catch(()=>{}),$l.set(e,t),e}function Hv(t){if(Qa.has(t))return;const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",o),t.removeEventListener("abort",o)},r=()=>{n(),i()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",r),t.addEventListener("error",o),t.addEventListener("abort",o)});Qa.set(t,e)}let Ya={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Qa.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Gd.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return ms(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function zv(t){Ya=t(Ya)}function Gv(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(ka(this),e,...n);return Gd.set(s,e.sort?e.sort():[e]),ms(s)}:jv().includes(t)?function(...e){return t.apply(ka(this),e),ms(zd.get(this))}:function(...e){return ms(t.apply(ka(this),e))}}function Kv(t){return typeof t=="function"?Gv(t):(t instanceof IDBTransaction&&Hv(t),Bv(t,Vv())?new Proxy(t,Ya):t)}function ms(t){if(t instanceof IDBRequest)return qv(t);if(Ta.has(t))return Ta.get(t);const e=Kv(t);return e!==t&&(Ta.set(t,e),$l.set(e,t)),e}const ka=t=>$l.get(t);function Wv(t,e,{blocked:n,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(t,e),a=ms(o);return s&&o.addEventListener("upgradeneeded",l=>{s(ms(o.result),l.oldVersion,l.newVersion,ms(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(l=>{r&&l.addEventListener("close",()=>r()),i&&l.addEventListener("versionchange",()=>i())}).catch(()=>{}),a}const Qv=["get","getKey","getAll","getAllKeys","count"],Yv=["put","add","delete","clear"],Ia=new Map;function ru(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Ia.get(e))return Ia.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,i=Yv.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(i||Qv.includes(n)))return;const r=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let c=l.store;return s&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),i&&l.done]))[0]};return Ia.set(e,r),r}zv(t=>({...t,get:(e,n,s)=>ru(e,n)||t.get(e,n,s),has:(e,n)=>!!ru(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xv{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Jv(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function Jv(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Xa="@firebase/app",ou="0.7.33";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bs=new Ml("@firebase/app"),xv="@firebase/app-compat",Zv="@firebase/analytics-compat",ey="@firebase/analytics",ty="@firebase/app-check-compat",ny="@firebase/app-check",sy="@firebase/auth",iy="@firebase/auth-compat",ry="@firebase/database",oy="@firebase/database-compat",ay="@firebase/functions",ly="@firebase/functions-compat",cy="@firebase/installations",uy="@firebase/installations-compat",hy="@firebase/messaging",fy="@firebase/messaging-compat",dy="@firebase/performance",py="@firebase/performance-compat",my="@firebase/remote-config",gy="@firebase/remote-config-compat",_y="@firebase/storage",vy="@firebase/storage-compat",yy="@firebase/firestore",by="@firebase/firestore-compat",wy="firebase",Ey="9.10.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kd="[DEFAULT]",Ty={[Xa]:"fire-core",[xv]:"fire-core-compat",[ey]:"fire-analytics",[Zv]:"fire-analytics-compat",[ny]:"fire-app-check",[ty]:"fire-app-check-compat",[sy]:"fire-auth",[iy]:"fire-auth-compat",[ry]:"fire-rtdb",[oy]:"fire-rtdb-compat",[ay]:"fire-fn",[ly]:"fire-fn-compat",[cy]:"fire-iid",[uy]:"fire-iid-compat",[hy]:"fire-fcm",[fy]:"fire-fcm-compat",[dy]:"fire-perf",[py]:"fire-perf-compat",[my]:"fire-rc",[gy]:"fire-rc-compat",[_y]:"fire-gcs",[vy]:"fire-gcs-compat",[yy]:"fire-fst",[by]:"fire-fst-compat","fire-js":"fire-js",[wy]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const io=new Map,Ja=new Map;function ky(t,e){try{t.container.addComponent(e)}catch(n){Bs.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function li(t){const e=t.name;if(Ja.has(e))return Bs.debug(`There were multiple attempts to register component ${e}.`),!1;Ja.set(e,t);for(const n of io.values())ky(n,t);return!0}function Fl(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Iy={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Vs=new cr("app","Firebase",Iy);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sy{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Us("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Vs.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hr=Ey;function Cy(t,e={}){typeof e!="object"&&(e={name:e});const n=Object.assign({name:Kd,automaticDataCollectionEnabled:!1},e),s=n.name;if(typeof s!="string"||!s)throw Vs.create("bad-app-name",{appName:String(s)});const i=io.get(s);if(i){if(so(t,i.options)&&so(n,i.config))return i;throw Vs.create("duplicate-app",{appName:s})}const r=new Lv(s);for(const a of Ja.values())r.addComponent(a);const o=new Sy(t,n,r);return io.set(s,o),o}function Wd(t=Kd){const e=io.get(t);if(!e)throw Vs.create("no-app",{appName:t});return e}function gs(t,e,n){var s;let i=(s=Ty[t])!==null&&s!==void 0?s:t;n&&(i+=`-${n}`);const r=i.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const a=[`Unable to register library "${i}" with version "${e}":`];r&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Bs.warn(a.join(" "));return}li(new Us(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ay="firebase-heartbeat-database",Py=1,zi="firebase-heartbeat-store";let Sa=null;function Qd(){return Sa||(Sa=Wv(Ay,Py,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(zi)}}}).catch(t=>{throw Vs.create("idb-open",{originalErrorMessage:t.message})})),Sa}async function Dy(t){var e;try{return(await Qd()).transaction(zi).objectStore(zi).get(Yd(t))}catch(n){if(n instanceof rs)Bs.warn(n.message);else{const s=Vs.create("idb-get",{originalErrorMessage:(e=n)===null||e===void 0?void 0:e.message});Bs.warn(s.message)}}}async function au(t,e){var n;try{const i=(await Qd()).transaction(zi,"readwrite");return await i.objectStore(zi).put(e,Yd(t)),i.done}catch(s){if(s instanceof rs)Bs.warn(s.message);else{const i=Vs.create("idb-set",{originalErrorMessage:(n=s)===null||n===void 0?void 0:n.message});Bs.warn(i.message)}}}function Yd(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ry=1024,Oy=30*24*60*60*1e3;class Ny{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new My(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=lu();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(i=>i.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const r=new Date(i.date).valueOf();return Date.now()-r<=Oy}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=lu(),{heartbeatsToSend:n,unsentEntries:s}=Ly(this._heartbeatsCache.heartbeats),i=Hd(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function lu(){return new Date().toISOString().substring(0,10)}function Ly(t,e=Ry){const n=[];let s=t.slice();for(const i of t){const r=n.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),cu(n)>e){r.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),cu(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class My{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Ev()?Tv().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await Dy(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return au(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return au(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function cu(t){return Hd(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $y(t){li(new Us("platform-logger",e=>new Xv(e),"PRIVATE")),li(new Us("heartbeat",e=>new Ny(e),"PRIVATE")),gs(Xa,ou,t),gs(Xa,ou,"esm2017"),gs("fire-js","")}$y("");var Fy="firebase",Uy="9.10.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */gs(Fy,Uy,"app");var By=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},de,Ul=Ul||{},Ie=By||self;function ro(){}function Oo(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function fr(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function Vy(t){return Object.prototype.hasOwnProperty.call(t,Ca)&&t[Ca]||(t[Ca]=++jy)}var Ca="closure_uid_"+(1e9*Math.random()>>>0),jy=0;function qy(t,e,n){return t.call.apply(t.bind,arguments)}function Hy(t,e,n){if(!t)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,s),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function hn(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?hn=qy:hn=Hy,hn.apply(null,arguments)}function Lr(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var s=n.slice();return s.push.apply(s,arguments),t.apply(this,s)}}function on(t,e){function n(){}n.prototype=e.prototype,t.X=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Vb=function(s,i,r){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(s,o)}}function ks(){this.s=this.s,this.o=this.o}var zy=0;ks.prototype.s=!1;ks.prototype.na=function(){!this.s&&(this.s=!0,this.M(),zy!=0)&&Vy(this)};ks.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Xd=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function Bl(t){const e=t.length;if(0<e){const n=Array(e);for(let s=0;s<e;s++)n[s]=t[s];return n}return[]}function uu(t,e){for(let n=1;n<arguments.length;n++){const s=arguments[n];if(Oo(s)){const i=t.length||0,r=s.length||0;t.length=i+r;for(let o=0;o<r;o++)t[i+o]=s[o]}else t.push(s)}}function fn(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}fn.prototype.h=function(){this.defaultPrevented=!0};var Gy=function(){if(!Ie.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{Ie.addEventListener("test",ro,e),Ie.removeEventListener("test",ro,e)}catch{}return t}();function oo(t){return/^[\s\xa0]*$/.test(t)}var hu=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function Aa(t,e){return t<e?-1:t>e?1:0}function No(){var t=Ie.navigator;return t&&(t=t.userAgent)?t:""}function Fn(t){return No().indexOf(t)!=-1}function Vl(t){return Vl[" "](t),t}Vl[" "]=ro;function Ky(t){var e=Yy;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var Wy=Fn("Opera"),ci=Fn("Trident")||Fn("MSIE"),Jd=Fn("Edge"),xa=Jd||ci,xd=Fn("Gecko")&&!(No().toLowerCase().indexOf("webkit")!=-1&&!Fn("Edge"))&&!(Fn("Trident")||Fn("MSIE"))&&!Fn("Edge"),Qy=No().toLowerCase().indexOf("webkit")!=-1&&!Fn("Edge");function Zd(){var t=Ie.document;return t?t.documentMode:void 0}var ao;e:{var Pa="",Da=function(){var t=No();if(xd)return/rv:([^\);]+)(\)|;)/.exec(t);if(Jd)return/Edge\/([\d\.]+)/.exec(t);if(ci)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(Qy)return/WebKit\/(\S+)/.exec(t);if(Wy)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(Da&&(Pa=Da?Da[1]:""),ci){var Ra=Zd();if(Ra!=null&&Ra>parseFloat(Pa)){ao=String(Ra);break e}}ao=Pa}var Yy={};function Xy(){return Ky(function(){let t=0;const e=hu(String(ao)).split("."),n=hu("9").split("."),s=Math.max(e.length,n.length);for(let o=0;t==0&&o<s;o++){var i=e[o]||"",r=n[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],i[0].length==0&&r[0].length==0)break;t=Aa(i[1].length==0?0:parseInt(i[1],10),r[1].length==0?0:parseInt(r[1],10))||Aa(i[2].length==0,r[2].length==0)||Aa(i[2],r[2]),i=i[3],r=r[3]}while(t==0)}return 0<=t})}var Za;if(Ie.document&&ci){var fu=Zd();Za=fu||parseInt(ao,10)||void 0}else Za=void 0;var Jy=Za;function Gi(t,e){if(fn.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,s=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(xd){e:{try{Vl(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,s?(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:xy[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Gi.X.h.call(this)}}on(Gi,fn);var xy={2:"touch",3:"pen",4:"mouse"};Gi.prototype.h=function(){Gi.X.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var dr="closure_listenable_"+(1e6*Math.random()|0),Zy=0;function e0(t,e,n,s,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!s,this.ha=i,this.key=++Zy,this.ba=this.ea=!1}function Lo(t){t.ba=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function jl(t,e,n){for(const s in t)e.call(n,t[s],s,t)}function ep(t){const e={};for(const n in t)e[n]=t[n];return e}const du="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function tp(t,e){let n,s;for(let i=1;i<arguments.length;i++){s=arguments[i];for(n in s)t[n]=s[n];for(let r=0;r<du.length;r++)n=du[r],Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n])}}function Mo(t){this.src=t,this.g={},this.h=0}Mo.prototype.add=function(t,e,n,s,i){var r=t.toString();t=this.g[r],t||(t=this.g[r]=[],this.h++);var o=tl(t,e,s,i);return-1<o?(e=t[o],n||(e.ea=!1)):(e=new e0(e,this.src,r,!!s,i),e.ea=n,t.push(e)),e};function el(t,e){var n=e.type;if(n in t.g){var s=t.g[n],i=Xd(s,e),r;(r=0<=i)&&Array.prototype.splice.call(s,i,1),r&&(Lo(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function tl(t,e,n,s){for(var i=0;i<t.length;++i){var r=t[i];if(!r.ba&&r.listener==e&&r.capture==!!n&&r.ha==s)return i}return-1}var ql="closure_lm_"+(1e6*Math.random()|0),Oa={};function np(t,e,n,s,i){if(s&&s.once)return ip(t,e,n,s,i);if(Array.isArray(e)){for(var r=0;r<e.length;r++)np(t,e[r],n,s,i);return null}return n=Gl(n),t&&t[dr]?t.N(e,n,fr(s)?!!s.capture:!!s,i):sp(t,e,n,!1,s,i)}function sp(t,e,n,s,i,r){if(!e)throw Error("Invalid event type");var o=fr(i)?!!i.capture:!!i,a=zl(t);if(a||(t[ql]=a=new Mo(t)),n=a.add(e,n,s,o,r),n.proxy)return n;if(s=t0(),n.proxy=s,s.src=t,s.listener=n,t.addEventListener)Gy||(i=o),i===void 0&&(i=!1),t.addEventListener(e.toString(),s,i);else if(t.attachEvent)t.attachEvent(op(e.toString()),s);else if(t.addListener&&t.removeListener)t.addListener(s);else throw Error("addEventListener and attachEvent are unavailable.");return n}function t0(){function t(n){return e.call(t.src,t.listener,n)}const e=n0;return t}function ip(t,e,n,s,i){if(Array.isArray(e)){for(var r=0;r<e.length;r++)ip(t,e[r],n,s,i);return null}return n=Gl(n),t&&t[dr]?t.O(e,n,fr(s)?!!s.capture:!!s,i):sp(t,e,n,!0,s,i)}function rp(t,e,n,s,i){if(Array.isArray(e))for(var r=0;r<e.length;r++)rp(t,e[r],n,s,i);else s=fr(s)?!!s.capture:!!s,n=Gl(n),t&&t[dr]?(t=t.i,e=String(e).toString(),e in t.g&&(r=t.g[e],n=tl(r,n,s,i),-1<n&&(Lo(r[n]),Array.prototype.splice.call(r,n,1),r.length==0&&(delete t.g[e],t.h--)))):t&&(t=zl(t))&&(e=t.g[e.toString()],t=-1,e&&(t=tl(e,n,s,i)),(n=-1<t?e[t]:null)&&Hl(n))}function Hl(t){if(typeof t!="number"&&t&&!t.ba){var e=t.src;if(e&&e[dr])el(e.i,t);else{var n=t.type,s=t.proxy;e.removeEventListener?e.removeEventListener(n,s,t.capture):e.detachEvent?e.detachEvent(op(n),s):e.addListener&&e.removeListener&&e.removeListener(s),(n=zl(e))?(el(n,t),n.h==0&&(n.src=null,e[ql]=null)):Lo(t)}}}function op(t){return t in Oa?Oa[t]:Oa[t]="on"+t}function n0(t,e){if(t.ba)t=!0;else{e=new Gi(e,this);var n=t.listener,s=t.ha||t.src;t.ea&&Hl(t),t=n.call(s,e)}return t}function zl(t){return t=t[ql],t instanceof Mo?t:null}var Na="__closure_events_fn_"+(1e9*Math.random()>>>0);function Gl(t){return typeof t=="function"?t:(t[Na]||(t[Na]=function(e){return t.handleEvent(e)}),t[Na])}function Qt(){ks.call(this),this.i=new Mo(this),this.P=this,this.I=null}on(Qt,ks);Qt.prototype[dr]=!0;Qt.prototype.removeEventListener=function(t,e,n,s){rp(this,t,e,n,s)};function nn(t,e){var n,s=t.I;if(s)for(n=[];s;s=s.I)n.push(s);if(t=t.P,s=e.type||e,typeof e=="string")e=new fn(e,t);else if(e instanceof fn)e.target=e.target||t;else{var i=e;e=new fn(s,t),tp(e,i)}if(i=!0,n)for(var r=n.length-1;0<=r;r--){var o=e.g=n[r];i=Mr(o,s,!0,e)&&i}if(o=e.g=t,i=Mr(o,s,!0,e)&&i,i=Mr(o,s,!1,e)&&i,n)for(r=0;r<n.length;r++)o=e.g=n[r],i=Mr(o,s,!1,e)&&i}Qt.prototype.M=function(){if(Qt.X.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],s=0;s<n.length;s++)Lo(n[s]);delete t.g[e],t.h--}}this.I=null};Qt.prototype.N=function(t,e,n,s){return this.i.add(String(t),e,!1,n,s)};Qt.prototype.O=function(t,e,n,s){return this.i.add(String(t),e,!0,n,s)};function Mr(t,e,n,s){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,r=0;r<e.length;++r){var o=e[r];if(o&&!o.ba&&o.capture==n){var a=o.listener,l=o.ha||o.src;o.ea&&el(t.i,o),i=a.call(l,s)!==!1&&i}}return i&&!s.defaultPrevented}var Kl=Ie.JSON.stringify;function s0(){var t=cp;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class i0{constructor(){this.h=this.g=null}add(e,n){const s=ap.get();s.set(e,n),this.h?this.h.next=s:this.g=s,this.h=s}}var ap=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new r0,t=>t.reset());class r0{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function o0(t){Ie.setTimeout(()=>{throw t},0)}function lp(t,e){nl||a0(),sl||(nl(),sl=!0),cp.add(t,e)}var nl;function a0(){var t=Ie.Promise.resolve(void 0);nl=function(){t.then(l0)}}var sl=!1,cp=new i0;function l0(){for(var t;t=s0();){try{t.h.call(t.g)}catch(n){o0(n)}var e=ap;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}sl=!1}function $o(t,e){Qt.call(this),this.h=t||1,this.g=e||Ie,this.j=hn(this.kb,this),this.l=Date.now()}on($o,Qt);de=$o.prototype;de.ca=!1;de.R=null;de.kb=function(){if(this.ca){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-t):(this.R&&(this.g.clearTimeout(this.R),this.R=null),nn(this,"tick"),this.ca&&(Wl(this),this.start()))}};de.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Wl(t){t.ca=!1,t.R&&(t.g.clearTimeout(t.R),t.R=null)}de.M=function(){$o.X.M.call(this),Wl(this),delete this.g};function Ql(t,e,n){if(typeof t=="function")n&&(t=hn(t,n));else if(t&&typeof t.handleEvent=="function")t=hn(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:Ie.setTimeout(t,e||0)}function up(t){t.g=Ql(()=>{t.g=null,t.i&&(t.i=!1,up(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class c0 extends ks{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:up(this)}M(){super.M(),this.g&&(Ie.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ki(t){ks.call(this),this.h=t,this.g={}}on(Ki,ks);var pu=[];function hp(t,e,n,s){Array.isArray(n)||(n&&(pu[0]=n.toString()),n=pu);for(var i=0;i<n.length;i++){var r=np(e,n[i],s||t.handleEvent,!1,t.h||t);if(!r)break;t.g[r.key]=r}}function fp(t){jl(t.g,function(e,n){this.g.hasOwnProperty(n)&&Hl(e)},t),t.g={}}Ki.prototype.M=function(){Ki.X.M.call(this),fp(this)};Ki.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Fo(){this.g=!0}Fo.prototype.Aa=function(){this.g=!1};function u0(t,e,n,s,i,r){t.info(function(){if(t.g)if(r)for(var o="",a=r.split("&"),l=0;l<a.length;l++){var c=a[l].split("=");if(1<c.length){var h=c[0];c=c[1];var f=h.split("_");o=2<=f.length&&f[1]=="type"?o+(h+"="+c+"&"):o+(h+"=redacted&")}}else o=null;else o=r;return"XMLHTTP REQ ("+s+") [attempt "+i+"]: "+e+`
`+n+`
`+o})}function h0(t,e,n,s,i,r,o){t.info(function(){return"XMLHTTP RESP ("+s+") [ attempt "+i+"]: "+e+`
`+n+`
`+r+" "+o})}function Js(t,e,n,s){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+d0(t,n)+(s?" "+s:"")})}function f0(t,e){t.info(function(){return"TIMEOUT: "+e})}Fo.prototype.info=function(){};function d0(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var s=n[t];if(!(2>s.length)){var i=s[1];if(Array.isArray(i)&&!(1>i.length)){var r=i[0];if(r!="noop"&&r!="stop"&&r!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return Kl(n)}catch{return e}}var zs={},mu=null;function Uo(){return mu=mu||new Qt}zs.Oa="serverreachability";function dp(t){fn.call(this,zs.Oa,t)}on(dp,fn);function Wi(t){const e=Uo();nn(e,new dp(e))}zs.STAT_EVENT="statevent";function pp(t,e){fn.call(this,zs.STAT_EVENT,t),this.stat=e}on(pp,fn);function gn(t){const e=Uo();nn(e,new pp(e,t))}zs.Pa="timingevent";function mp(t,e){fn.call(this,zs.Pa,t),this.size=e}on(mp,fn);function pr(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return Ie.setTimeout(function(){t()},e)}var Bo={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,La:7,TIMEOUT:8,Cb:9},gp={qb:"complete",Mb:"success",Ma:"error",La:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function Yl(){}Yl.prototype.h=null;function gu(t){return t.h||(t.h=t.i())}function _p(){}var mr={OPEN:"a",pb:"b",Ma:"c",Bb:"d"};function Xl(){fn.call(this,"d")}on(Xl,fn);function Jl(){fn.call(this,"c")}on(Jl,fn);var il;function Vo(){}on(Vo,Yl);Vo.prototype.g=function(){return new XMLHttpRequest};Vo.prototype.i=function(){return{}};il=new Vo;function gr(t,e,n,s){this.l=t,this.j=e,this.m=n,this.U=s||1,this.S=new Ki(this),this.O=p0,t=xa?125:void 0,this.T=new $o(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new vp}function vp(){this.i=null,this.g="",this.h=!1}var p0=45e3,rl={},lo={};de=gr.prototype;de.setTimeout=function(t){this.O=t};function ol(t,e,n){t.K=1,t.v=qo(xn(e)),t.s=n,t.P=!0,yp(t,null)}function yp(t,e){t.F=Date.now(),_r(t),t.A=xn(t.v);var n=t.A,s=t.U;Array.isArray(s)||(s=[String(s)]),Cp(n.i,"t",s),t.C=0,n=t.l.H,t.h=new vp,t.g=Qp(t.l,n?e:null,!t.s),0<t.N&&(t.L=new c0(hn(t.Ka,t,t.g),t.N)),hp(t.S,t.g,"readystatechange",t.hb),e=t.H?ep(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.da(t.A,t.u,t.s,e)):(t.u="GET",t.g.da(t.A,t.u,null,e)),Wi(),u0(t.j,t.u,t.A,t.m,t.U,t.s)}de.hb=function(t){t=t.target;const e=this.L;e&&Kn(t)==3?e.l():this.Ka(t)};de.Ka=function(t){try{if(t==this.g)e:{const h=Kn(this.g);var e=this.g.Ea();const f=this.g.aa();if(!(3>h)&&(h!=3||xa||this.g&&(this.h.h||this.g.fa()||bu(this.g)))){this.I||h!=4||e==7||(e==8||0>=f?Wi(3):Wi(2)),jo(this);var n=this.g.aa();this.Y=n;t:if(bp(this)){var s=bu(this.g);t="";var i=s.length,r=Kn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Ps(this),Fi(this);var o="";break t}this.h.i=new Ie.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(s[e],{stream:r&&e==i-1});s.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=n==200,h0(this.j,this.u,this.A,this.m,this.U,h,n),this.i){if(this.Z&&!this.J){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!oo(a)){var c=a;break t}}c=null}if(n=c)Js(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,al(this,n);else{this.i=!1,this.o=3,gn(12),Ps(this),Fi(this);break e}}this.P?(wp(this,h,o),xa&&this.i&&h==3&&(hp(this.S,this.T,"tick",this.gb),this.T.start())):(Js(this.j,this.m,o,null),al(this,o)),h==4&&Ps(this),this.i&&!this.I&&(h==4?zp(this.l,this):(this.i=!1,_r(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,gn(12)):(this.o=0,gn(13)),Ps(this),Fi(this)}}}catch{}finally{}};function bp(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Da:!1}function wp(t,e,n){let s=!0,i;for(;!t.I&&t.C<n.length;)if(i=m0(t,n),i==lo){e==4&&(t.o=4,gn(14),s=!1),Js(t.j,t.m,null,"[Incomplete Response]");break}else if(i==rl){t.o=4,gn(15),Js(t.j,t.m,n,"[Invalid Chunk]"),s=!1;break}else Js(t.j,t.m,i,null),al(t,i);bp(t)&&i!=lo&&i!=rl&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,gn(16),s=!1),t.i=t.i&&s,s?0<n.length&&!t.$&&(t.$=!0,e=t.l,e.g==t&&e.$&&!e.K&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),ic(e),e.K=!0,gn(11))):(Js(t.j,t.m,n,"[Invalid Chunked Response]"),Ps(t),Fi(t))}de.gb=function(){if(this.g){var t=Kn(this.g),e=this.g.fa();this.C<e.length&&(jo(this),wp(this,t,e),this.i&&t!=4&&_r(this))}};function m0(t,e){var n=t.C,s=e.indexOf(`
`,n);return s==-1?lo:(n=Number(e.substring(n,s)),isNaN(n)?rl:(s+=1,s+n>e.length?lo:(e=e.substr(s,n),t.C=s+n,e)))}de.cancel=function(){this.I=!0,Ps(this)};function _r(t){t.V=Date.now()+t.O,Ep(t,t.O)}function Ep(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=pr(hn(t.fb,t),e)}function jo(t){t.B&&(Ie.clearTimeout(t.B),t.B=null)}de.fb=function(){this.B=null;const t=Date.now();0<=t-this.V?(f0(this.j,this.A),this.K!=2&&(Wi(),gn(17)),Ps(this),this.o=2,Fi(this)):Ep(this,this.V-t)};function Fi(t){t.l.G==0||t.I||zp(t.l,t)}function Ps(t){jo(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,Wl(t.T),fp(t.S),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function al(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||ll(n.h,t))){if(!t.J&&ll(n.h,t)&&n.G==3){try{var s=n.Fa.g.parse(e)}catch{s=null}if(Array.isArray(s)&&s.length==3){var i=s;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)ho(n),Go(n);else break e;sc(n),gn(18)}}else n.Ba=i[1],0<n.Ba-n.T&&37500>i[2]&&n.L&&n.A==0&&!n.v&&(n.v=pr(hn(n.bb,n),6e3));if(1>=Dp(n.h)&&n.ja){try{n.ja()}catch{}n.ja=void 0}}else Ds(n,11)}else if((t.J||n.g==t)&&ho(n),!oo(e))for(i=n.Fa.g.parse(e),e=0;e<i.length;e++){let c=i[e];if(n.T=c[0],c=c[1],n.G==2)if(c[0]=="c"){n.I=c[1],n.ka=c[2];const h=c[3];h!=null&&(n.ma=h,n.j.info("VER="+n.ma));const f=c[4];f!=null&&(n.Ca=f,n.j.info("SVER="+n.Ca));const d=c[5];d!=null&&typeof d=="number"&&0<d&&(s=1.5*d,n.J=s,n.j.info("backChannelRequestTimeoutMs_="+s)),s=n;const g=t.g;if(g){const _=g.g?g.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(_){var r=s.h;r.g||_.indexOf("spdy")==-1&&_.indexOf("quic")==-1&&_.indexOf("h2")==-1||(r.j=r.l,r.g=new Set,r.h&&(xl(r,r.h),r.h=null))}if(s.D){const v=g.g?g.g.getResponseHeader("X-HTTP-Session-Id"):null;v&&(s.za=v,vt(s.F,s.D,v))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-t.F,n.j.info("Handshake RTT: "+n.P+"ms")),s=n;var o=t;if(s.sa=Wp(s,s.H?s.ka:null,s.V),o.J){Rp(s.h,o);var a=o,l=s.J;l&&a.setTimeout(l),a.B&&(jo(a),_r(a)),s.g=o}else qp(s);0<n.i.length&&Ko(n)}else c[0]!="stop"&&c[0]!="close"||Ds(n,7);else n.G==3&&(c[0]=="stop"||c[0]=="close"?c[0]=="stop"?Ds(n,7):nc(n):c[0]!="noop"&&n.l&&n.l.wa(c),n.A=0)}}Wi(4)}catch{}}function g0(t){if(t.W&&typeof t.W=="function")return t.W();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(Oo(t)){for(var e=[],n=t.length,s=0;s<n;s++)e.push(t[s]);return e}e=[],n=0;for(s in t)e[n++]=t[s];return e}function _0(t){if(t.oa&&typeof t.oa=="function")return t.oa();if(!t.W||typeof t.W!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(Oo(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const s in t)e[n++]=s;return e}}}function Tp(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(Oo(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=_0(t),s=g0(t),i=s.length,r=0;r<i;r++)e.call(void 0,s[r],n&&n[r],t)}var kp=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function v0(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var s=t[n].indexOf("="),i=null;if(0<=s){var r=t[n].substring(0,s);i=t[n].substring(s+1)}else r=t[n];e(r,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function Os(t,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof Os){this.h=e!==void 0?e:t.h,co(this,t.j),this.s=t.s,this.g=t.g,uo(this,t.m),this.l=t.l,e=t.i;var n=new Qi;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),_u(this,n),this.o=t.o}else t&&(n=String(t).match(kp))?(this.h=!!e,co(this,n[1]||"",!0),this.s=Oi(n[2]||""),this.g=Oi(n[3]||"",!0),uo(this,n[4]),this.l=Oi(n[5]||"",!0),_u(this,n[6]||"",!0),this.o=Oi(n[7]||"")):(this.h=!!e,this.i=new Qi(null,this.h))}Os.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Ni(e,vu,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(Ni(e,vu,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(Ni(n,n.charAt(0)=="/"?w0:b0,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Ni(n,T0)),t.join("")};function xn(t){return new Os(t)}function co(t,e,n){t.j=n?Oi(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function uo(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function _u(t,e,n){e instanceof Qi?(t.i=e,k0(t.i,t.h)):(n||(e=Ni(e,E0)),t.i=new Qi(e,t.h))}function vt(t,e,n){t.i.set(e,n)}function qo(t){return vt(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Oi(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Ni(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,y0),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function y0(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var vu=/[#\/\?@]/g,b0=/[#\?:]/g,w0=/[#\?]/g,E0=/[#\?@]/g,T0=/#/g;function Qi(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Is(t){t.g||(t.g=new Map,t.h=0,t.i&&v0(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}de=Qi.prototype;de.add=function(t,e){Is(this),this.i=null,t=bi(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function Ip(t,e){Is(t),e=bi(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function Sp(t,e){return Is(t),e=bi(t,e),t.g.has(e)}de.forEach=function(t,e){Is(this),this.g.forEach(function(n,s){n.forEach(function(i){t.call(e,i,s,this)},this)},this)};de.oa=function(){Is(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let s=0;s<e.length;s++){const i=t[s];for(let r=0;r<i.length;r++)n.push(e[s])}return n};de.W=function(t){Is(this);let e=[];if(typeof t=="string")Sp(this,t)&&(e=e.concat(this.g.get(bi(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};de.set=function(t,e){return Is(this),this.i=null,t=bi(this,t),Sp(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};de.get=function(t,e){return t?(t=this.W(t),0<t.length?String(t[0]):e):e};function Cp(t,e,n){Ip(t,e),0<n.length&&(t.i=null,t.g.set(bi(t,e),Bl(n)),t.h+=n.length)}de.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var s=e[n];const r=encodeURIComponent(String(s)),o=this.W(s);for(s=0;s<o.length;s++){var i=r;o[s]!==""&&(i+="="+encodeURIComponent(String(o[s]))),t.push(i)}}return this.i=t.join("&")};function bi(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function k0(t,e){e&&!t.j&&(Is(t),t.i=null,t.g.forEach(function(n,s){var i=s.toLowerCase();s!=i&&(Ip(this,s),Cp(this,i,n))},t)),t.j=e}var I0=class{constructor(t,e){this.h=t,this.g=e}};function Ap(t){this.l=t||S0,Ie.PerformanceNavigationTiming?(t=Ie.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(Ie.g&&Ie.g.Ga&&Ie.g.Ga()&&Ie.g.Ga().Zb),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var S0=10;function Pp(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function Dp(t){return t.h?1:t.g?t.g.size:0}function ll(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function xl(t,e){t.g?t.g.add(e):t.h=e}function Rp(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}Ap.prototype.cancel=function(){if(this.i=Op(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function Op(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return Bl(t.i)}function Zl(){}Zl.prototype.stringify=function(t){return Ie.JSON.stringify(t,void 0)};Zl.prototype.parse=function(t){return Ie.JSON.parse(t,void 0)};function C0(){this.g=new Zl}function A0(t,e,n){const s=n||"";try{Tp(t,function(i,r){let o=i;fr(i)&&(o=Kl(i)),e.push(s+r+"="+encodeURIComponent(o))})}catch(i){throw e.push(s+"type="+encodeURIComponent("_badmap")),i}}function P0(t,e){const n=new Fo;if(Ie.Image){const s=new Image;s.onload=Lr($r,n,s,"TestLoadImage: loaded",!0,e),s.onerror=Lr($r,n,s,"TestLoadImage: error",!1,e),s.onabort=Lr($r,n,s,"TestLoadImage: abort",!1,e),s.ontimeout=Lr($r,n,s,"TestLoadImage: timeout",!1,e),Ie.setTimeout(function(){s.ontimeout&&s.ontimeout()},1e4),s.src=t}else e(!1)}function $r(t,e,n,s,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(s)}catch{}}function vr(t){this.l=t.$b||null,this.j=t.ib||!1}on(vr,Yl);vr.prototype.g=function(){return new Ho(this.l,this.j)};vr.prototype.i=function(t){return function(){return t}}({});function Ho(t,e){Qt.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=ec,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}on(Ho,Qt);var ec=0;de=Ho.prototype;de.open=function(t,e){if(this.readyState!=ec)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Yi(this)};de.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||Ie).fetch(new Request(this.B,e)).then(this.Va.bind(this),this.ga.bind(this))};de.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,yr(this)),this.readyState=ec};de.Va=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Yi(this)),this.g&&(this.readyState=3,Yi(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ta.bind(this),this.ga.bind(this));else if(typeof Ie.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Np(this)}else t.text().then(this.Ua.bind(this),this.ga.bind(this))};function Np(t){t.j.read().then(t.Sa.bind(t)).catch(t.ga.bind(t))}de.Sa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?yr(this):Yi(this),this.readyState==3&&Np(this)}};de.Ua=function(t){this.g&&(this.response=this.responseText=t,yr(this))};de.Ta=function(t){this.g&&(this.response=t,yr(this))};de.ga=function(){this.g&&yr(this)};function yr(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Yi(t)}de.setRequestHeader=function(t,e){this.v.append(t,e)};de.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};de.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function Yi(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Ho.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var D0=Ie.JSON.parse;function Rt(t){Qt.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=Lp,this.K=this.L=!1}on(Rt,Qt);var Lp="",R0=/^https?$/i,O0=["POST","PUT"];de=Rt.prototype;de.da=function(t,e,n,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():il.g(),this.C=this.u?gu(this.u):gu(il),this.g.onreadystatechange=hn(this.Ha,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(r){yu(this,r);return}if(t=n||"",n=new Map(this.headers),s)if(Object.getPrototypeOf(s)===Object.prototype)for(var i in s)n.set(i,s[i]);else if(typeof s.keys=="function"&&typeof s.get=="function")for(const r of s.keys())n.set(r,s.get(r));else throw Error("Unknown input type for opt_headers: "+String(s));s=Array.from(n.keys()).find(r=>r.toLowerCase()=="content-type"),i=Ie.FormData&&t instanceof Ie.FormData,!(0<=Xd(O0,e))||s||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[r,o]of n)this.g.setRequestHeader(r,o);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{Fp(this),0<this.B&&((this.K=N0(this.g))?(this.g.timeout=this.B,this.g.ontimeout=hn(this.qa,this)):this.A=Ql(this.qa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(r){yu(this,r)}};function N0(t){return ci&&Xy()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}de.qa=function(){typeof Ul<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,nn(this,"timeout"),this.abort(8))};function yu(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,Mp(t),zo(t)}function Mp(t){t.D||(t.D=!0,nn(t,"complete"),nn(t,"error"))}de.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,nn(this,"complete"),nn(this,"abort"),zo(this))};de.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),zo(this,!0)),Rt.X.M.call(this)};de.Ha=function(){this.s||(this.F||this.v||this.l?$p(this):this.eb())};de.eb=function(){$p(this)};function $p(t){if(t.h&&typeof Ul<"u"&&(!t.C[1]||Kn(t)!=4||t.aa()!=2)){if(t.v&&Kn(t)==4)Ql(t.Ha,0,t);else if(nn(t,"readystatechange"),Kn(t)==4){t.h=!1;try{const a=t.aa();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var s;if(s=a===0){var i=String(t.H).match(kp)[1]||null;if(!i&&Ie.self&&Ie.self.location){var r=Ie.self.location.protocol;i=r.substr(0,r.length-1)}s=!R0.test(i?i.toLowerCase():"")}n=s}if(n)nn(t,"complete"),nn(t,"success");else{t.m=6;try{var o=2<Kn(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.aa()+"]",Mp(t)}}finally{zo(t)}}}}function zo(t,e){if(t.g){Fp(t);const n=t.g,s=t.C[0]?ro:null;t.g=null,t.C=null,e||nn(t,"ready");try{n.onreadystatechange=s}catch{}}}function Fp(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(Ie.clearTimeout(t.A),t.A=null)}function Kn(t){return t.g?t.g.readyState:0}de.aa=function(){try{return 2<Kn(this)?this.g.status:-1}catch{return-1}};de.fa=function(){try{return this.g?this.g.responseText:""}catch{return""}};de.Ra=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),D0(e)}};function bu(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case Lp:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}de.Ea=function(){return this.m};de.Na=function(){return typeof this.j=="string"?this.j:String(this.j)};function Up(t){let e="";return jl(t,function(n,s){e+=s,e+=":",e+=n,e+=`\r
`}),e}function tc(t,e,n){e:{for(s in n){var s=!1;break e}s=!0}s||(n=Up(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):vt(t,e,n))}function Pi(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function Bp(t){this.Ca=0,this.i=[],this.j=new Fo,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.$a=this.U=0,this.Ya=Pi("failFast",!1,t),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Wa=Pi("baseRetryDelayMs",5e3,t),this.ab=Pi("retryDelaySeedMs",1e4,t),this.Za=Pi("forwardChannelMaxRetries",2,t),this.ta=Pi("forwardChannelRequestTimeoutMs",2e4,t),this.ra=t&&t.xmlHttpFactory||void 0,this.Da=t&&t.Yb||!1,this.J=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.I="",this.h=new Ap(t&&t.concurrentRequestLimit),this.Fa=new C0,this.O=t&&t.fastHandshake||!1,this.N=t&&t.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Xa=t&&t.Wb||!1,t&&t.Aa&&this.j.Aa(),t&&t.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&t&&t.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}de=Bp.prototype;de.ma=8;de.G=1;function nc(t){if(Vp(t),t.G==3){var e=t.U++,n=xn(t.F);vt(n,"SID",t.I),vt(n,"RID",e),vt(n,"TYPE","terminate"),br(t,n),e=new gr(t,t.j,e,void 0),e.K=2,e.v=qo(xn(n)),n=!1,Ie.navigator&&Ie.navigator.sendBeacon&&(n=Ie.navigator.sendBeacon(e.v.toString(),"")),!n&&Ie.Image&&(new Image().src=e.v,n=!0),n||(e.g=Qp(e.l,null),e.g.da(e.v)),e.F=Date.now(),_r(e)}Kp(t)}function Go(t){t.g&&(ic(t),t.g.cancel(),t.g=null)}function Vp(t){Go(t),t.u&&(Ie.clearTimeout(t.u),t.u=null),ho(t),t.h.cancel(),t.m&&(typeof t.m=="number"&&Ie.clearTimeout(t.m),t.m=null)}function Ko(t){Pp(t.h)||t.m||(t.m=!0,lp(t.Ja,t),t.C=0)}function L0(t,e){return Dp(t.h)>=t.h.j-(t.m?1:0)?!1:t.m?(t.i=e.D.concat(t.i),!0):t.G==1||t.G==2||t.C>=(t.Ya?0:t.Za)?!1:(t.m=pr(hn(t.Ja,t,e),Gp(t,t.C)),t.C++,!0)}de.Ja=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.U=Math.floor(1e5*Math.random()),t=this.U++;const i=new gr(this,this.j,t,void 0);let r=this.s;if(this.S&&(r?(r=ep(r),tp(r,this.S)):r=this.S),this.o!==null||this.N||(i.H=r,r=null),this.O)e:{for(var e=0,n=0;n<this.i.length;n++){t:{var s=this.i[n];if("__data__"in s.g&&(s=s.g.__data__,typeof s=="string")){s=s.length;break t}s=void 0}if(s===void 0)break;if(e+=s,4096<e){e=n;break e}if(e===4096||n===this.i.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=jp(this,i,e),n=xn(this.F),vt(n,"RID",t),vt(n,"CVER",22),this.D&&vt(n,"X-HTTP-Session-Id",this.D),br(this,n),r&&(this.N?e="headers="+encodeURIComponent(String(Up(r)))+"&"+e:this.o&&tc(n,this.o,r)),xl(this.h,i),this.Xa&&vt(n,"TYPE","init"),this.O?(vt(n,"$req",e),vt(n,"SID","null"),i.Z=!0,ol(i,n,null)):ol(i,n,e),this.G=2}}else this.G==3&&(t?wu(this,t):this.i.length==0||Pp(this.h)||wu(this))};function wu(t,e){var n;e?n=e.m:n=t.U++;const s=xn(t.F);vt(s,"SID",t.I),vt(s,"RID",n),vt(s,"AID",t.T),br(t,s),t.o&&t.s&&tc(s,t.o,t.s),n=new gr(t,t.j,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.i=e.D.concat(t.i)),e=jp(t,n,1e3),n.setTimeout(Math.round(.5*t.ta)+Math.round(.5*t.ta*Math.random())),xl(t.h,n),ol(n,s,e)}function br(t,e){t.ia&&jl(t.ia,function(n,s){vt(e,s,n)}),t.l&&Tp({},function(n,s){vt(e,s,n)})}function jp(t,e,n){n=Math.min(t.i.length,n);var s=t.l?hn(t.l.Qa,t.l,t):null;e:{var i=t.i;let r=-1;for(;;){const o=["count="+n];r==-1?0<n?(r=i[0].h,o.push("ofs="+r)):r=0:o.push("ofs="+r);let a=!0;for(let l=0;l<n;l++){let c=i[l].h;const h=i[l].g;if(c-=r,0>c)r=Math.max(0,i[l].h-100),a=!1;else try{A0(h,o,"req"+c+"_")}catch{s&&s(h)}}if(a){s=o.join("&");break e}}}return t=t.i.splice(0,n),e.D=t,s}function qp(t){t.g||t.u||(t.Z=1,lp(t.Ia,t),t.A=0)}function sc(t){return t.g||t.u||3<=t.A?!1:(t.Z++,t.u=pr(hn(t.Ia,t),Gp(t,t.A)),t.A++,!0)}de.Ia=function(){if(this.u=null,Hp(this),this.$&&!(this.K||this.g==null||0>=this.P)){var t=2*this.P;this.j.info("BP detection timer enabled: "+t),this.B=pr(hn(this.cb,this),t)}};de.cb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,gn(10),Go(this),Hp(this))};function ic(t){t.B!=null&&(Ie.clearTimeout(t.B),t.B=null)}function Hp(t){t.g=new gr(t,t.j,"rpc",t.Z),t.o===null&&(t.g.H=t.s),t.g.N=0;var e=xn(t.sa);vt(e,"RID","rpc"),vt(e,"SID",t.I),vt(e,"CI",t.L?"0":"1"),vt(e,"AID",t.T),vt(e,"TYPE","xmlhttp"),br(t,e),t.o&&t.s&&tc(e,t.o,t.s),t.J&&t.g.setTimeout(t.J);var n=t.g;t=t.ka,n.K=1,n.v=qo(xn(e)),n.s=null,n.P=!0,yp(n,t)}de.bb=function(){this.v!=null&&(this.v=null,Go(this),sc(this),gn(19))};function ho(t){t.v!=null&&(Ie.clearTimeout(t.v),t.v=null)}function zp(t,e){var n=null;if(t.g==e){ho(t),ic(t),t.g=null;var s=2}else if(ll(t.h,e))n=e.D,Rp(t.h,e),s=1;else return;if(t.G!=0){if(t.pa=e.Y,e.i)if(s==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var i=t.C;s=Uo(),nn(s,new mp(s,n)),Ko(t)}else qp(t);else if(i=e.o,i==3||i==0&&0<t.pa||!(s==1&&L0(t,e)||s==2&&sc(t)))switch(n&&0<n.length&&(e=t.h,e.i=e.i.concat(n)),i){case 1:Ds(t,5);break;case 4:Ds(t,10);break;case 3:Ds(t,6);break;default:Ds(t,2)}}}function Gp(t,e){let n=t.Wa+Math.floor(Math.random()*t.ab);return t.l||(n*=2),n*e}function Ds(t,e){if(t.j.info("Error code "+e),e==2){var n=null;t.l&&(n=null);var s=hn(t.jb,t);n||(n=new Os("//www.google.com/images/cleardot.gif"),Ie.location&&Ie.location.protocol=="http"||co(n,"https"),qo(n)),P0(n.toString(),s)}else gn(2);t.G=0,t.l&&t.l.va(e),Kp(t),Vp(t)}de.jb=function(t){t?(this.j.info("Successfully pinged google.com"),gn(2)):(this.j.info("Failed to ping google.com"),gn(1))};function Kp(t){if(t.G=0,t.la=[],t.l){const e=Op(t.h);(e.length!=0||t.i.length!=0)&&(uu(t.la,e),uu(t.la,t.i),t.h.i.length=0,Bl(t.i),t.i.length=0),t.l.ua()}}function Wp(t,e,n){var s=n instanceof Os?xn(n):new Os(n,void 0);if(s.g!="")e&&(s.g=e+"."+s.g),uo(s,s.m);else{var i=Ie.location;s=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var r=new Os(null,void 0);s&&co(r,s),e&&(r.g=e),i&&uo(r,i),n&&(r.l=n),s=r}return n=t.D,e=t.za,n&&e&&vt(s,n,e),vt(s,"VER",t.ma),br(t,s),s}function Qp(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Da&&!t.ra?new Rt(new vr({ib:!0})):new Rt(t.ra),e.L=t.H,e}function Yp(){}de=Yp.prototype;de.xa=function(){};de.wa=function(){};de.va=function(){};de.ua=function(){};de.Qa=function(){};function fo(){if(ci&&!(10<=Number(Jy)))throw Error("Environmental error: no available transport.")}fo.prototype.g=function(t,e){return new In(t,e)};function In(t,e){Qt.call(this),this.g=new Bp(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.S=t,(t=e&&e.Xb)&&!oo(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!oo(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new wi(this)}on(In,Qt);In.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;gn(0),t.V=e,t.ia=n||{},t.L=t.Y,t.F=Wp(t,null,t.V),Ko(t)};In.prototype.close=function(){nc(this.g)};In.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=Kl(t),t=n);e.i.push(new I0(e.$a++,t)),e.G==3&&Ko(e)};In.prototype.M=function(){this.g.l=null,delete this.j,nc(this.g),delete this.g,In.X.M.call(this)};function Xp(t){Xl.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}on(Xp,Xl);function Jp(){Jl.call(this),this.status=1}on(Jp,Jl);function wi(t){this.g=t}on(wi,Yp);wi.prototype.xa=function(){nn(this.g,"a")};wi.prototype.wa=function(t){nn(this.g,new Xp(t))};wi.prototype.va=function(t){nn(this.g,new Jp)};wi.prototype.ua=function(){nn(this.g,"b")};fo.prototype.createWebChannel=fo.prototype.g;In.prototype.send=In.prototype.u;In.prototype.open=In.prototype.m;In.prototype.close=In.prototype.close;Bo.NO_ERROR=0;Bo.TIMEOUT=8;Bo.HTTP_ERROR=6;gp.COMPLETE="complete";_p.EventType=mr;mr.OPEN="a";mr.CLOSE="b";mr.ERROR="c";mr.MESSAGE="d";Qt.prototype.listen=Qt.prototype.N;Rt.prototype.listenOnce=Rt.prototype.O;Rt.prototype.getLastError=Rt.prototype.Na;Rt.prototype.getLastErrorCode=Rt.prototype.Ea;Rt.prototype.getStatus=Rt.prototype.aa;Rt.prototype.getResponseJson=Rt.prototype.Ra;Rt.prototype.getResponseText=Rt.prototype.fa;Rt.prototype.send=Rt.prototype.da;var M0=function(){return new fo},$0=function(){return Uo()},La=Bo,F0=gp,U0=zs,Eu={rb:0,ub:1,vb:2,Ob:3,Tb:4,Qb:5,Rb:6,Pb:7,Nb:8,Sb:9,PROXY:10,NOPROXY:11,Lb:12,Hb:13,Ib:14,Gb:15,Jb:16,Kb:17,nb:18,mb:19,ob:20},B0=vr,Fr=_p,V0=Rt;const Tu="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bn{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}bn.UNAUTHENTICATED=new bn(null),bn.GOOGLE_CREDENTIALS=new bn("google-credentials-uid"),bn.FIRST_PARTY=new bn("first-party-uid"),bn.MOCK_USER=new bn("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ei="9.10.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const js=new Ml("@firebase/firestore");function ku(){return js.logLevel}function ge(t,...e){if(js.logLevel<=Je.DEBUG){const n=e.map(rc);js.debug(`Firestore (${Ei}): ${t}`,...n)}}function Zn(t,...e){if(js.logLevel<=Je.ERROR){const n=e.map(rc);js.error(`Firestore (${Ei}): ${t}`,...n)}}function Iu(t,...e){if(js.logLevel<=Je.WARN){const n=e.map(rc);js.warn(`Firestore (${Ei}): ${t}`,...n)}}function rc(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function De(t="Unexpected state"){const e=`FIRESTORE (${Ei}) INTERNAL ASSERTION FAILED: `+t;throw Zn(e),new Error(e)}function ft(t,e){t||De()}function Oe(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const X={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class Ee extends rs{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _s{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j0{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class q0{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(bn.UNAUTHENTICATED))}shutdown(){}}class H0{constructor(e){this.t=e,this.currentUser=bn.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let s=this.i;const i=l=>this.i!==s?(s=this.i,n(l)):Promise.resolve();let r=new _s;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new _s,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const l=r;e.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},a=l=>{ge("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(ge("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new _s)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==e?(ge("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(ft(typeof s.accessToken=="string"),new j0(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return ft(e===null||typeof e=="string"),new bn(e)}}class z0{constructor(e,n,s,i){this.h=e,this.l=n,this.m=s,this.g=i,this.type="FirstParty",this.user=bn.FIRST_PARTY,this.p=new Map}I(){return this.g?this.g():(ft(!(typeof this.h!="object"||this.h===null||!this.h.auth||!this.h.auth.getAuthHeaderValueForFirstParty)),this.h.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.p.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.p.set("Authorization",e),this.m&&this.p.set("X-Goog-Iam-Authorization-Token",this.m),this.p}}class G0{constructor(e,n,s,i){this.h=e,this.l=n,this.m=s,this.g=i}getToken(){return Promise.resolve(new z0(this.h,this.l,this.m,this.g))}start(e,n){e.enqueueRetryable(()=>n(bn.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class K0{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class W0{constructor(e){this.T=e,this.forceRefresh=!1,this.appCheck=null,this.A=null}start(e,n){const s=r=>{r.error!=null&&ge("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${r.error.message}`);const o=r.token!==this.A;return this.A=r.token,ge("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(r.token):Promise.resolve()};this.o=r=>{e.enqueueRetryable(()=>s(r))};const i=r=>{ge("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=r,this.appCheck.addTokenListener(this.o)};this.T.onInit(r=>i(r)),setTimeout(()=>{if(!this.appCheck){const r=this.T.getImmediate({optional:!0});r?i(r):ge("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(ft(typeof n.token=="string"),this.A=n.token,new K0(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Q0(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let s=0;s<t;s++)n[s]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xp{static R(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let s="";for(;s.length<20;){const i=Q0(40);for(let r=0;r<i.length;++r)s.length<20&&i[r]<n&&(s+=e.charAt(i[r]%e.length))}return s}}function et(t,e){return t<e?-1:t>e?1:0}function ui(t,e,n){return t.length===e.length&&t.every((s,i)=>n(s,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ft{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new Ee(X.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new Ee(X.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new Ee(X.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new Ee(X.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Ft.fromMillis(Date.now())}static fromDate(e){return Ft.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),s=Math.floor(1e6*(e-1e3*n));return new Ft(n,s)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?et(this.nanoseconds,e.nanoseconds):et(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ne{constructor(e){this.timestamp=e}static fromTimestamp(e){return new Ne(e)}static min(){return new Ne(new Ft(0,0))}static max(){return new Ne(new Ft(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xi{constructor(e,n,s){n===void 0?n=0:n>e.length&&De(),s===void 0?s=e.length-n:s>e.length-n&&De(),this.segments=e,this.offset=n,this.len=s}get length(){return this.len}isEqual(e){return Xi.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Xi?e.forEach(s=>{n.push(s)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,s=this.limit();n<s;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const s=Math.min(e.length,n.length);for(let i=0;i<s;i++){const r=e.get(i),o=n.get(i);if(r<o)return-1;if(r>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class yt extends Xi{construct(e,n,s){return new yt(e,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const s of e){if(s.indexOf("//")>=0)throw new Ee(X.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter(i=>i.length>0))}return new yt(n)}static emptyPath(){return new yt([])}}const Y0=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class un extends Xi{construct(e,n,s){return new un(e,n,s)}static isValidIdentifier(e){return Y0.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),un.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new un(["__name__"])}static fromServerFormat(e){const n=[];let s="",i=0;const r=()=>{if(s.length===0)throw new Ee(X.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new Ee(X.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new Ee(X.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=l,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(s+=a,i++):(r(),i++)}if(r(),o)throw new Ee(X.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new un(n)}static emptyPath(){return new un([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ye{constructor(e){this.path=e}static fromPath(e){return new ye(yt.fromString(e))}static fromName(e){return new ye(yt.fromString(e).popFirst(5))}static empty(){return new ye(yt.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&yt.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return yt.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new ye(new yt(e.slice()))}}function X0(t,e){const n=t.toTimestamp().seconds,s=t.toTimestamp().nanoseconds+1,i=Ne.fromTimestamp(s===1e9?new Ft(n+1,0):new Ft(n,s));return new ws(i,ye.empty(),e)}function J0(t){return new ws(t.readTime,t.key,-1)}class ws{constructor(e,n,s){this.readTime=e,this.documentKey=n,this.largestBatchId=s}static min(){return new ws(Ne.min(),ye.empty(),-1)}static max(){return new ws(Ne.max(),ye.empty(),-1)}}function x0(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=ye.comparator(t.documentKey,e.documentKey),n!==0?n:et(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Z0="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class e1{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wr(t){if(t.code!==X.FAILED_PRECONDITION||t.message!==Z0)throw t;ge("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&De(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new Y((s,i)=>{this.nextCallback=r=>{this.wrapSuccess(e,r).next(s,i)},this.catchCallback=r=>{this.wrapFailure(n,r).next(s,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof Y?n:Y.resolve(n)}catch(n){return Y.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):Y.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):Y.reject(n)}static resolve(e){return new Y((n,s)=>{n(e)})}static reject(e){return new Y((n,s)=>{s(e)})}static waitFor(e){return new Y((n,s)=>{let i=0,r=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++r,o&&r===i&&n()},l=>s(l))}),o=!0,r===i&&n()})}static or(e){let n=Y.resolve(!1);for(const s of e)n=n.next(i=>i?Y.resolve(i):s());return n}static forEach(e,n){const s=[];return e.forEach((i,r)=>{s.push(n.call(this,i,r))}),this.waitFor(s)}static mapArray(e,n){return new Y((s,i)=>{const r=e.length,o=new Array(r);let a=0;for(let l=0;l<r;l++){const c=l;n(e[c]).next(h=>{o[c]=h,++a,a===r&&s(o)},h=>i(h))}})}static doWhile(e,n){return new Y((s,i)=>{const r=()=>{e()===!0?n().next(()=>{r()},i):s()};r()})}}function Er(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oc{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=s=>this.ut(s),this.ct=s=>n.writeSequenceNumber(s))}ut(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ct&&this.ct(e),e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Su(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Gs(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Zp(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */oc.at=-1;class Bt{constructor(e,n){this.comparator=e,this.root=n||en.EMPTY}insert(e,n){return new Bt(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,en.BLACK,null,null))}remove(e){return new Bt(this.comparator,this.root.remove(e,this.comparator).copy(null,null,en.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(e,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(e){let n=0,s=this.root;for(;!s.isEmpty();){const i=this.comparator(e,s.key);if(i===0)return n+s.left.size;i<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,s)=>(e(n,s),!1))}toString(){const e=[];return this.inorderTraversal((n,s)=>(e.push(`${n}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Ur(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Ur(this.root,e,this.comparator,!1)}getReverseIterator(){return new Ur(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Ur(this.root,e,this.comparator,!0)}}class Ur{constructor(e,n,s,i){this.isReverse=i,this.nodeStack=[];let r=1;for(;!e.isEmpty();)if(r=n?s(e.key,n):1,n&&i&&(r*=-1),r<0)e=this.isReverse?e.left:e.right;else{if(r===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class en{constructor(e,n,s,i,r){this.key=e,this.value=n,this.color=s!=null?s:en.RED,this.left=i!=null?i:en.EMPTY,this.right=r!=null?r:en.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,s,i,r){return new en(e!=null?e:this.key,n!=null?n:this.value,s!=null?s:this.color,i!=null?i:this.left,r!=null?r:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let i=this;const r=s(e,i.key);return i=r<0?i.copy(null,null,null,i.left.insert(e,n,s),null):r===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,s)),i.fixUp()}removeMin(){if(this.left.isEmpty())return en.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let s,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return en.EMPTY;s=i.right.min(),i=i.copy(s.key,s.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,en.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,en.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw De();const e=this.left.check();if(e!==this.right.check())throw De();return e+(this.isRed()?0:1)}}en.EMPTY=null,en.RED=!0,en.BLACK=!1;en.EMPTY=new class{constructor(){this.size=0}get key(){throw De()}get value(){throw De()}get color(){throw De()}get left(){throw De()}get right(){throw De()}copy(t,e,n,s,i){return this}insert(t,e,n){return new en(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ut{constructor(e){this.comparator=e,this.data=new Bt(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,s)=>(e(n),!1))}forEachInRange(e,n){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const i=s.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Cu(this.data.getIterator())}getIteratorFrom(e){return new Cu(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(s=>{n=n.add(s)}),n}isEqual(e){if(!(e instanceof Ut)||this.size!==e.size)return!1;const n=this.data.getIterator(),s=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,r=s.getNext().key;if(this.comparator(i,r)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Ut(this.comparator);return n.data=e,n}}class Cu{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dn{constructor(e){this.fields=e,e.sort(un.comparator)}static empty(){return new Dn([])}unionWith(e){let n=new Ut(un.comparator);for(const s of this.fields)n=n.add(s);for(const s of e)n=n.add(s);return new Dn(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return ui(this.fields,e.fields,(n,s)=>n.isEqual(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sn{constructor(e){this.binaryString=e}static fromBase64String(e){const n=atob(e);return new sn(n)}static fromUint8Array(e){const n=function(s){let i="";for(let r=0;r<s.length;++r)i+=String.fromCharCode(s[r]);return i}(e);return new sn(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let s=0;s<e.length;s++)n[s]=e.charCodeAt(s);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return et(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}sn.EMPTY_BYTE_STRING=new sn("");const t1=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Es(t){if(ft(!!t),typeof t=="string"){let e=0;const n=t1.exec(t);if(ft(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const s=new Date(t);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:Dt(t.seconds),nanos:Dt(t.nanos)}}function Dt(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function hi(t){return typeof t=="string"?sn.fromBase64String(t):sn.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function em(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function tm(t){const e=t.mapValue.fields.__previous_value__;return em(e)?tm(e):e}function Ji(t){const e=Es(t.mapValue.fields.__local_write_time__.timestampValue);return new Ft(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n1{constructor(e,n,s,i,r,o,a,l){this.databaseId=e,this.appId=n,this.persistenceKey=s,this.host=i,this.ssl=r,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=l}}class xi{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new xi("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof xi&&e.projectId===this.projectId&&e.database===this.database}}function Wo(t){return t==null}function po(t){return t===0&&1/t==-1/0}function s1(t){return typeof t=="number"&&Number.isInteger(t)&&!po(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Br={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function qs(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?em(t)?4:i1(t)?9007199254740991:10:De()}function qn(t,e){if(t===e)return!0;const n=qs(t);if(n!==qs(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Ji(t).isEqual(Ji(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const r=Es(s.timestampValue),o=Es(i.timestampValue);return r.seconds===o.seconds&&r.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return hi(s.bytesValue).isEqual(hi(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return Dt(s.geoPointValue.latitude)===Dt(i.geoPointValue.latitude)&&Dt(s.geoPointValue.longitude)===Dt(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return Dt(s.integerValue)===Dt(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const r=Dt(s.doubleValue),o=Dt(i.doubleValue);return r===o?po(r)===po(o):isNaN(r)&&isNaN(o)}return!1}(t,e);case 9:return ui(t.arrayValue.values||[],e.arrayValue.values||[],qn);case 10:return function(s,i){const r=s.mapValue.fields||{},o=i.mapValue.fields||{};if(Su(r)!==Su(o))return!1;for(const a in r)if(r.hasOwnProperty(a)&&(o[a]===void 0||!qn(r[a],o[a])))return!1;return!0}(t,e);default:return De()}}function Zi(t,e){return(t.values||[]).find(n=>qn(n,e))!==void 0}function fi(t,e){if(t===e)return 0;const n=qs(t),s=qs(e);if(n!==s)return et(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return et(t.booleanValue,e.booleanValue);case 2:return function(i,r){const o=Dt(i.integerValue||i.doubleValue),a=Dt(r.integerValue||r.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return Au(t.timestampValue,e.timestampValue);case 4:return Au(Ji(t),Ji(e));case 5:return et(t.stringValue,e.stringValue);case 6:return function(i,r){const o=hi(i),a=hi(r);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(i,r){const o=i.split("/"),a=r.split("/");for(let l=0;l<o.length&&l<a.length;l++){const c=et(o[l],a[l]);if(c!==0)return c}return et(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,r){const o=et(Dt(i.latitude),Dt(r.latitude));return o!==0?o:et(Dt(i.longitude),Dt(r.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(i,r){const o=i.values||[],a=r.values||[];for(let l=0;l<o.length&&l<a.length;++l){const c=fi(o[l],a[l]);if(c)return c}return et(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(i,r){if(i===Br.mapValue&&r===Br.mapValue)return 0;if(i===Br.mapValue)return 1;if(r===Br.mapValue)return-1;const o=i.fields||{},a=Object.keys(o),l=r.fields||{},c=Object.keys(l);a.sort(),c.sort();for(let h=0;h<a.length&&h<c.length;++h){const f=et(a[h],c[h]);if(f!==0)return f;const d=fi(o[a[h]],l[c[h]]);if(d!==0)return d}return et(a.length,c.length)}(t.mapValue,e.mapValue);default:throw De()}}function Au(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return et(t,e);const n=Es(t),s=Es(e),i=et(n.seconds,s.seconds);return i!==0?i:et(n.nanos,s.nanos)}function ti(t){return cl(t)}function cl(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(s){const i=Es(s);return`time(${i.seconds},${i.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?hi(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,ye.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(s){let i="[",r=!0;for(const o of s.values||[])r?r=!1:i+=",",i+=cl(o);return i+"]"}(t.arrayValue):"mapValue"in t?function(s){const i=Object.keys(s.fields||{}).sort();let r="{",o=!0;for(const a of i)o?o=!1:r+=",",r+=`${a}:${cl(s.fields[a])}`;return r+"}"}(t.mapValue):De();var e,n}function ul(t){return!!t&&"integerValue"in t}function ac(t){return!!t&&"arrayValue"in t}function Pu(t){return!!t&&"nullValue"in t}function Du(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function zr(t){return!!t&&"mapValue"in t}function Ui(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Gs(t.mapValue.fields,(n,s)=>e.mapValue.fields[n]=Ui(s)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Ui(t.arrayValue.values[n]);return e}return Object.assign({},t)}function i1(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wn{constructor(e){this.value=e}static empty(){return new wn({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let s=0;s<e.length-1;++s)if(n=(n.mapValue.fields||{})[e.get(s)],!zr(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ui(n)}setAll(e){let n=un.emptyPath(),s={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,s,i),s={},i=[],n=a.popLast()}o?s[a.lastSegment()]=Ui(o):i.push(a.lastSegment())});const r=this.getFieldsMap(n);this.applyChanges(r,s,i)}delete(e){const n=this.field(e.popLast());zr(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return qn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<e.length;++s){let i=n.mapValue.fields[e.get(s)];zr(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(s)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,s){Gs(n,(i,r)=>e[i]=r);for(const i of s)delete e[i]}clone(){return new wn(Ui(this.value))}}function nm(t){const e=[];return Gs(t.fields,(n,s)=>{const i=new un([n]);if(zr(s)){const r=nm(s.mapValue).fields;if(r.length===0)e.push(i);else for(const o of r)e.push(i.child(o))}else e.push(i)}),new Dn(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tn{constructor(e,n,s,i,r,o){this.key=e,this.documentType=n,this.version=s,this.readTime=i,this.data=r,this.documentState=o}static newInvalidDocument(e){return new tn(e,0,Ne.min(),Ne.min(),wn.empty(),0)}static newFoundDocument(e,n,s){return new tn(e,1,n,Ne.min(),s,0)}static newNoDocument(e,n){return new tn(e,2,n,Ne.min(),wn.empty(),0)}static newUnknownDocument(e,n){return new tn(e,3,n,Ne.min(),wn.empty(),2)}convertToFoundDocument(e,n){return this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=wn.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=wn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Ne.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof tn&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new tn(this.key,this.documentType,this.version,this.readTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r1{constructor(e,n=null,s=[],i=[],r=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=s,this.filters=i,this.limit=r,this.startAt=o,this.endAt=a,this.ht=null}}function Ru(t,e=null,n=[],s=[],i=null,r=null,o=null){return new r1(t,e,n,s,i,r,o)}function lc(t){const e=Oe(t);if(e.ht===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(s=>{return(i=s).field.canonicalString()+i.op.toString()+ti(i.value);var i}).join(","),n+="|ob:",n+=e.orderBy.map(s=>function(i){return i.field.canonicalString()+i.dir}(s)).join(","),Wo(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>ti(s)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>ti(s)).join(",")),e.ht=n}return e.ht}function o1(t){let e=t.path.canonicalString();return t.collectionGroup!==null&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map(n=>{return`${(s=n).field.canonicalString()} ${s.op} ${ti(s.value)}`;var s}).join(", ")}]`),Wo(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map(n=>function(s){return`${s.field.canonicalString()} (${s.dir})`}(n)).join(", ")}]`),t.startAt&&(e+=", startAt: ",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(n=>ti(n)).join(",")),t.endAt&&(e+=", endAt: ",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(n=>ti(n)).join(",")),`Target(${e})`}function cc(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let i=0;i<t.orderBy.length;i++)if(!p1(t.orderBy[i],e.orderBy[i]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let i=0;i<t.filters.length;i++)if(n=t.filters[i],s=e.filters[i],n.op!==s.op||!n.field.isEqual(s.field)||!qn(n.value,s.value))return!1;var n,s;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Nu(t.startAt,e.startAt)&&Nu(t.endAt,e.endAt)}function hl(t){return ye.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}class En extends class{}{constructor(e,n,s){super(),this.field=e,this.op=n,this.value=s}static create(e,n,s){return e.isKeyField()?n==="in"||n==="not-in"?this.lt(e,n,s):new a1(e,n,s):n==="array-contains"?new u1(e,s):n==="in"?new h1(e,s):n==="not-in"?new f1(e,s):n==="array-contains-any"?new d1(e,s):new En(e,n,s)}static lt(e,n,s){return n==="in"?new l1(e,s):new c1(e,s)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.ft(fi(n,this.value)):n!==null&&qs(this.value)===qs(n)&&this.ft(fi(n,this.value))}ft(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return De()}}dt(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class a1 extends En{constructor(e,n,s){super(e,n,s),this.key=ye.fromName(s.referenceValue)}matches(e){const n=ye.comparator(e.key,this.key);return this.ft(n)}}class l1 extends En{constructor(e,n){super(e,"in",n),this.keys=sm("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class c1 extends En{constructor(e,n){super(e,"not-in",n),this.keys=sm("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function sm(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(s=>ye.fromName(s.referenceValue))}class u1 extends En{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return ac(n)&&Zi(n.arrayValue,this.value)}}class h1 extends En{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Zi(this.value.arrayValue,n)}}class f1 extends En{constructor(e,n){super(e,"not-in",n)}matches(e){if(Zi(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Zi(this.value.arrayValue,n)}}class d1 extends En{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!ac(n)||!n.arrayValue.values)&&n.arrayValue.values.some(s=>Zi(this.value.arrayValue,s))}}class mo{constructor(e,n){this.position=e,this.inclusive=n}}class Bi{constructor(e,n="asc"){this.field=e,this.dir=n}}function p1(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}function Ou(t,e,n){let s=0;for(let i=0;i<t.position.length;i++){const r=e[i],o=t.position[i];if(r.field.isKeyField()?s=ye.comparator(ye.fromName(o.referenceValue),n.key):s=fi(o,n.data.field(r.field)),r.dir==="desc"&&(s*=-1),s!==0)break}return s}function Nu(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!qn(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qo{constructor(e,n=null,s=[],i=[],r=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=i,this.limit=r,this.limitType=o,this.startAt=a,this.endAt=l,this._t=null,this.wt=null,this.startAt,this.endAt}}function m1(t,e,n,s,i,r,o,a){return new Qo(t,e,n,s,i,r,o,a)}function im(t){return new Qo(t)}function Lu(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function g1(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function _1(t){for(const e of t.filters)if(e.dt())return e.field;return null}function v1(t){return t.collectionGroup!==null}function er(t){const e=Oe(t);if(e._t===null){e._t=[];const n=_1(e),s=g1(e);if(n!==null&&s===null)n.isKeyField()||e._t.push(new Bi(n)),e._t.push(new Bi(un.keyField(),"asc"));else{let i=!1;for(const r of e.explicitOrderBy)e._t.push(r),r.field.isKeyField()&&(i=!0);if(!i){const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e._t.push(new Bi(un.keyField(),r))}}}return e._t}function es(t){const e=Oe(t);if(!e.wt)if(e.limitType==="F")e.wt=Ru(e.path,e.collectionGroup,er(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const r of er(e)){const o=r.dir==="desc"?"asc":"desc";n.push(new Bi(r.field,o))}const s=e.endAt?new mo(e.endAt.position,e.endAt.inclusive):null,i=e.startAt?new mo(e.startAt.position,e.startAt.inclusive):null;e.wt=Ru(e.path,e.collectionGroup,n,e.filters,e.limit,s,i)}return e.wt}function fl(t,e,n){return new Qo(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Yo(t,e){return cc(es(t),es(e))&&t.limitType===e.limitType}function rm(t){return`${lc(es(t))}|lt:${t.limitType}`}function dl(t){return`Query(target=${o1(es(t))}; limitType=${t.limitType})`}function uc(t,e){return e.isFoundDocument()&&function(n,s){const i=s.key.path;return n.collectionGroup!==null?s.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(i):ye.isDocumentKey(n.path)?n.path.isEqual(i):n.path.isImmediateParentOf(i)}(t,e)&&function(n,s){for(const i of n.explicitOrderBy)if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(n,s){for(const i of n.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(n,s){return!(n.startAt&&!function(i,r,o){const a=Ou(i,r,o);return i.inclusive?a<=0:a<0}(n.startAt,er(n),s)||n.endAt&&!function(i,r,o){const a=Ou(i,r,o);return i.inclusive?a>=0:a>0}(n.endAt,er(n),s))}(t,e)}function y1(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function om(t){return(e,n)=>{let s=!1;for(const i of er(t)){const r=b1(i,e,n);if(r!==0)return r;s=s||i.field.isKeyField()}return 0}}function b1(t,e,n){const s=t.field.isKeyField()?ye.comparator(e.key,n.key):function(i,r,o){const a=r.data.field(i),l=o.data.field(i);return a!==null&&l!==null?fi(a,l):De()}(t.field,e,n);switch(t.dir){case"asc":return s;case"desc":return-1*s;default:return De()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function am(t,e){if(t.gt){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:po(e)?"-0":e}}function lm(t){return{integerValue:""+t}}function w1(t,e){return s1(e)?lm(e):am(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xo{constructor(){this._=void 0}}function E1(t,e,n){return t instanceof go?function(s,i){const r={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&(r.fields.__previous_value__=i),{mapValue:r}}(n,e):t instanceof tr?um(t,e):t instanceof nr?hm(t,e):function(s,i){const r=cm(s,i),o=Mu(r)+Mu(s.yt);return ul(r)&&ul(s.yt)?lm(o):am(s.It,o)}(t,e)}function T1(t,e,n){return t instanceof tr?um(t,e):t instanceof nr?hm(t,e):n}function cm(t,e){return t instanceof _o?ul(n=e)||function(s){return!!s&&"doubleValue"in s}(n)?e:{integerValue:0}:null;var n}class go extends Xo{}class tr extends Xo{constructor(e){super(),this.elements=e}}function um(t,e){const n=fm(e);for(const s of t.elements)n.some(i=>qn(i,s))||n.push(s);return{arrayValue:{values:n}}}class nr extends Xo{constructor(e){super(),this.elements=e}}function hm(t,e){let n=fm(e);for(const s of t.elements)n=n.filter(i=>!qn(i,s));return{arrayValue:{values:n}}}class _o extends Xo{constructor(e,n){super(),this.It=e,this.yt=n}}function Mu(t){return Dt(t.integerValue||t.doubleValue)}function fm(t){return ac(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function k1(t,e){return t.field.isEqual(e.field)&&function(n,s){return n instanceof tr&&s instanceof tr||n instanceof nr&&s instanceof nr?ui(n.elements,s.elements,qn):n instanceof _o&&s instanceof _o?qn(n.yt,s.yt):n instanceof go&&s instanceof go}(t.transform,e.transform)}class I1{constructor(e,n){this.version=e,this.transformResults=n}}class $n{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new $n}static exists(e){return new $n(void 0,e)}static updateTime(e){return new $n(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Gr(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Jo{}function dm(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new hc(t.key,$n.none()):new Tr(t.key,t.data,$n.none());{const n=t.data,s=wn.empty();let i=new Ut(un.comparator);for(let r of e.fields)if(!i.has(r)){let o=n.field(r);o===null&&r.length>1&&(r=r.popLast(),o=n.field(r)),o===null?s.delete(r):s.set(r,o),i=i.add(r)}return new Ss(t.key,s,new Dn(i.toArray()),$n.none())}}function S1(t,e,n){t instanceof Tr?function(s,i,r){const o=s.value.clone(),a=Fu(s.fieldTransforms,i,r.transformResults);o.setAll(a),i.convertToFoundDocument(r.version,o).setHasCommittedMutations()}(t,e,n):t instanceof Ss?function(s,i,r){if(!Gr(s.precondition,i))return void i.convertToUnknownDocument(r.version);const o=Fu(s.fieldTransforms,i,r.transformResults),a=i.data;a.setAll(pm(s)),a.setAll(o),i.convertToFoundDocument(r.version,a).setHasCommittedMutations()}(t,e,n):function(s,i,r){i.convertToNoDocument(r.version).setHasCommittedMutations()}(0,e,n)}function Vi(t,e,n,s){return t instanceof Tr?function(i,r,o,a){if(!Gr(i.precondition,r))return o;const l=i.value.clone(),c=Uu(i.fieldTransforms,a,r);return l.setAll(c),r.convertToFoundDocument(r.version,l).setHasLocalMutations(),null}(t,e,n,s):t instanceof Ss?function(i,r,o,a){if(!Gr(i.precondition,r))return o;const l=Uu(i.fieldTransforms,a,r),c=r.data;return c.setAll(pm(i)),c.setAll(l),r.convertToFoundDocument(r.version,c).setHasLocalMutations(),o===null?null:o.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(h=>h.field))}(t,e,n,s):function(i,r,o){return Gr(i.precondition,r)?(r.convertToNoDocument(r.version).setHasLocalMutations(),null):o}(t,e,n)}function C1(t,e){let n=null;for(const s of t.fieldTransforms){const i=e.data.field(s.field),r=cm(s.transform,i||null);r!=null&&(n===null&&(n=wn.empty()),n.set(s.field,r))}return n||null}function $u(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,s){return n===void 0&&s===void 0||!(!n||!s)&&ui(n,s,(i,r)=>k1(i,r))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Tr extends Jo{constructor(e,n,s,i=[]){super(),this.key=e,this.value=n,this.precondition=s,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Ss extends Jo{constructor(e,n,s,i,r=[]){super(),this.key=e,this.data=n,this.fieldMask=s,this.precondition=i,this.fieldTransforms=r,this.type=1}getFieldMask(){return this.fieldMask}}function pm(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const s=t.data.field(n);e.set(n,s)}}),e}function Fu(t,e,n){const s=new Map;ft(t.length===n.length);for(let i=0;i<n.length;i++){const r=t[i],o=r.transform,a=e.data.field(r.field);s.set(r.field,T1(o,a,n[i]))}return s}function Uu(t,e,n){const s=new Map;for(const i of t){const r=i.transform,o=n.data.field(i.field);s.set(i.field,E1(r,o,e))}return s}class hc extends Jo{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class A1 extends Jo{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P1{constructor(e){this.count=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Pt,Ge;function D1(t){switch(t){default:return De();case X.CANCELLED:case X.UNKNOWN:case X.DEADLINE_EXCEEDED:case X.RESOURCE_EXHAUSTED:case X.INTERNAL:case X.UNAVAILABLE:case X.UNAUTHENTICATED:return!1;case X.INVALID_ARGUMENT:case X.NOT_FOUND:case X.ALREADY_EXISTS:case X.PERMISSION_DENIED:case X.FAILED_PRECONDITION:case X.ABORTED:case X.OUT_OF_RANGE:case X.UNIMPLEMENTED:case X.DATA_LOSS:return!0}}function mm(t){if(t===void 0)return Zn("GRPC error has no .code"),X.UNKNOWN;switch(t){case Pt.OK:return X.OK;case Pt.CANCELLED:return X.CANCELLED;case Pt.UNKNOWN:return X.UNKNOWN;case Pt.DEADLINE_EXCEEDED:return X.DEADLINE_EXCEEDED;case Pt.RESOURCE_EXHAUSTED:return X.RESOURCE_EXHAUSTED;case Pt.INTERNAL:return X.INTERNAL;case Pt.UNAVAILABLE:return X.UNAVAILABLE;case Pt.UNAUTHENTICATED:return X.UNAUTHENTICATED;case Pt.INVALID_ARGUMENT:return X.INVALID_ARGUMENT;case Pt.NOT_FOUND:return X.NOT_FOUND;case Pt.ALREADY_EXISTS:return X.ALREADY_EXISTS;case Pt.PERMISSION_DENIED:return X.PERMISSION_DENIED;case Pt.FAILED_PRECONDITION:return X.FAILED_PRECONDITION;case Pt.ABORTED:return X.ABORTED;case Pt.OUT_OF_RANGE:return X.OUT_OF_RANGE;case Pt.UNIMPLEMENTED:return X.UNIMPLEMENTED;case Pt.DATA_LOSS:return X.DATA_LOSS;default:return De()}}(Ge=Pt||(Pt={}))[Ge.OK=0]="OK",Ge[Ge.CANCELLED=1]="CANCELLED",Ge[Ge.UNKNOWN=2]="UNKNOWN",Ge[Ge.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Ge[Ge.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Ge[Ge.NOT_FOUND=5]="NOT_FOUND",Ge[Ge.ALREADY_EXISTS=6]="ALREADY_EXISTS",Ge[Ge.PERMISSION_DENIED=7]="PERMISSION_DENIED",Ge[Ge.UNAUTHENTICATED=16]="UNAUTHENTICATED",Ge[Ge.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Ge[Ge.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Ge[Ge.ABORTED=10]="ABORTED",Ge[Ge.OUT_OF_RANGE=11]="OUT_OF_RANGE",Ge[Ge.UNIMPLEMENTED=12]="UNIMPLEMENTED",Ge[Ge.INTERNAL=13]="INTERNAL",Ge[Ge.UNAVAILABLE=14]="UNAVAILABLE",Ge[Ge.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ti{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s!==void 0){for(const[i,r]of s)if(this.equalsFn(i,e))return r}}has(e){return this.get(e)!==void 0}set(e,n){const s=this.mapKeyFn(e),i=this.inner[s];if(i===void 0)return this.inner[s]=[[e,n]],void this.innerSize++;for(let r=0;r<i.length;r++)if(this.equalsFn(i[r][0],e))return void(i[r]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s===void 0)return!1;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return s.length===1?delete this.inner[n]:s.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Gs(this.inner,(n,s)=>{for(const[i,r]of s)e(i,r)})}isEmpty(){return Zp(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const R1=new Bt(ye.comparator);function ts(){return R1}const gm=new Bt(ye.comparator);function Li(...t){let e=gm;for(const n of t)e=e.insert(n.key,n);return e}function _m(t){let e=gm;return t.forEach((n,s)=>e=e.insert(n,s.overlayedDocument)),e}function Rs(){return ji()}function vm(){return ji()}function ji(){return new Ti(t=>t.toString(),(t,e)=>t.isEqual(e))}const O1=new Bt(ye.comparator),N1=new Ut(ye.comparator);function Fe(...t){let e=N1;for(const n of t)e=e.add(n);return e}const L1=new Ut(et);function ym(){return L1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xo{constructor(e,n,s,i,r){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=s,this.documentUpdates=i,this.resolvedLimboDocuments=r}static createSynthesizedRemoteEventForCurrentChange(e,n){const s=new Map;return s.set(e,kr.createSynthesizedTargetChangeForCurrentChange(e,n)),new xo(Ne.min(),s,ym(),ts(),Fe())}}class kr{constructor(e,n,s,i,r){this.resumeToken=e,this.current=n,this.addedDocuments=s,this.modifiedDocuments=i,this.removedDocuments=r}static createSynthesizedTargetChangeForCurrentChange(e,n){return new kr(sn.EMPTY_BYTE_STRING,n,Fe(),Fe(),Fe())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kr{constructor(e,n,s,i){this.Tt=e,this.removedTargetIds=n,this.key=s,this.Et=i}}class bm{constructor(e,n){this.targetId=e,this.At=n}}class wm{constructor(e,n,s=sn.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=s,this.cause=i}}class Bu{constructor(){this.Rt=0,this.bt=ju(),this.Pt=sn.EMPTY_BYTE_STRING,this.vt=!1,this.Vt=!0}get current(){return this.vt}get resumeToken(){return this.Pt}get St(){return this.Rt!==0}get Dt(){return this.Vt}Ct(e){e.approximateByteSize()>0&&(this.Vt=!0,this.Pt=e)}xt(){let e=Fe(),n=Fe(),s=Fe();return this.bt.forEach((i,r)=>{switch(r){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:s=s.add(i);break;default:De()}}),new kr(this.Pt,this.vt,e,n,s)}Nt(){this.Vt=!1,this.bt=ju()}kt(e,n){this.Vt=!0,this.bt=this.bt.insert(e,n)}Mt(e){this.Vt=!0,this.bt=this.bt.remove(e)}Ot(){this.Rt+=1}Ft(){this.Rt-=1}$t(){this.Vt=!0,this.vt=!0}}class M1{constructor(e){this.Bt=e,this.Lt=new Map,this.Ut=ts(),this.qt=Vu(),this.Kt=new Ut(et)}Gt(e){for(const n of e.Tt)e.Et&&e.Et.isFoundDocument()?this.Qt(n,e.Et):this.jt(n,e.key,e.Et);for(const n of e.removedTargetIds)this.jt(n,e.key,e.Et)}Wt(e){this.forEachTarget(e,n=>{const s=this.zt(n);switch(e.state){case 0:this.Ht(n)&&s.Ct(e.resumeToken);break;case 1:s.Ft(),s.St||s.Nt(),s.Ct(e.resumeToken);break;case 2:s.Ft(),s.St||this.removeTarget(n);break;case 3:this.Ht(n)&&(s.$t(),s.Ct(e.resumeToken));break;case 4:this.Ht(n)&&(this.Jt(n),s.Ct(e.resumeToken));break;default:De()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Lt.forEach((s,i)=>{this.Ht(i)&&n(i)})}Yt(e){const n=e.targetId,s=e.At.count,i=this.Xt(n);if(i){const r=i.target;if(hl(r))if(s===0){const o=new ye(r.path);this.jt(n,o,tn.newNoDocument(o,Ne.min()))}else ft(s===1);else this.Zt(n)!==s&&(this.Jt(n),this.Kt=this.Kt.add(n))}}te(e){const n=new Map;this.Lt.forEach((r,o)=>{const a=this.Xt(o);if(a){if(r.current&&hl(a.target)){const l=new ye(a.target.path);this.Ut.get(l)!==null||this.ee(o,l)||this.jt(o,l,tn.newNoDocument(l,e))}r.Dt&&(n.set(o,r.xt()),r.Nt())}});let s=Fe();this.qt.forEach((r,o)=>{let a=!0;o.forEachWhile(l=>{const c=this.Xt(l);return!c||c.purpose===2||(a=!1,!1)}),a&&(s=s.add(r))}),this.Ut.forEach((r,o)=>o.setReadTime(e));const i=new xo(e,n,this.Kt,this.Ut,s);return this.Ut=ts(),this.qt=Vu(),this.Kt=new Ut(et),i}Qt(e,n){if(!this.Ht(e))return;const s=this.ee(e,n.key)?2:0;this.zt(e).kt(n.key,s),this.Ut=this.Ut.insert(n.key,n),this.qt=this.qt.insert(n.key,this.ne(n.key).add(e))}jt(e,n,s){if(!this.Ht(e))return;const i=this.zt(e);this.ee(e,n)?i.kt(n,1):i.Mt(n),this.qt=this.qt.insert(n,this.ne(n).delete(e)),s&&(this.Ut=this.Ut.insert(n,s))}removeTarget(e){this.Lt.delete(e)}Zt(e){const n=this.zt(e).xt();return this.Bt.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ot(e){this.zt(e).Ot()}zt(e){let n=this.Lt.get(e);return n||(n=new Bu,this.Lt.set(e,n)),n}ne(e){let n=this.qt.get(e);return n||(n=new Ut(et),this.qt=this.qt.insert(e,n)),n}Ht(e){const n=this.Xt(e)!==null;return n||ge("WatchChangeAggregator","Detected inactive target",e),n}Xt(e){const n=this.Lt.get(e);return n&&n.St?null:this.Bt.se(e)}Jt(e){this.Lt.set(e,new Bu),this.Bt.getRemoteKeysForTarget(e).forEach(n=>{this.jt(e,n,null)})}ee(e,n){return this.Bt.getRemoteKeysForTarget(e).has(n)}}function Vu(){return new Bt(ye.comparator)}function ju(){return new Bt(ye.comparator)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $1=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),F1=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))();class U1{constructor(e,n){this.databaseId=e,this.gt=n}}function vo(t,e){return t.gt?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Em(t,e){return t.gt?e.toBase64():e.toUint8Array()}function B1(t,e){return vo(t,e.toTimestamp())}function Yn(t){return ft(!!t),Ne.fromTimestamp(function(e){const n=Es(e);return new Ft(n.seconds,n.nanos)}(t))}function fc(t,e){return function(n){return new yt(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function Tm(t){const e=yt.fromString(t);return ft(Sm(e)),e}function pl(t,e){return fc(t.databaseId,e.path)}function Ma(t,e){const n=Tm(e);if(n.get(1)!==t.databaseId.projectId)throw new Ee(X.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new Ee(X.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new ye(km(n))}function ml(t,e){return fc(t.databaseId,e)}function V1(t){const e=Tm(t);return e.length===4?yt.emptyPath():km(e)}function gl(t){return new yt(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function km(t){return ft(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function qu(t,e,n){return{name:pl(t,e),fields:n.value.mapValue.fields}}function j1(t,e){let n;if("targetChange"in e){e.targetChange;const s=function(l){return l==="NO_CHANGE"?0:l==="ADD"?1:l==="REMOVE"?2:l==="CURRENT"?3:l==="RESET"?4:De()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],r=function(l,c){return l.gt?(ft(c===void 0||typeof c=="string"),sn.fromBase64String(c||"")):(ft(c===void 0||c instanceof Uint8Array),sn.fromUint8Array(c||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(l){const c=l.code===void 0?X.UNKNOWN:mm(l.code);return new Ee(c,l.message||"")}(o);n=new wm(s,i,r,a||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const i=Ma(t,s.document.name),r=Yn(s.document.updateTime),o=new wn({mapValue:{fields:s.document.fields}}),a=tn.newFoundDocument(i,r,o),l=s.targetIds||[],c=s.removedTargetIds||[];n=new Kr(l,c,a.key,a)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const i=Ma(t,s.document),r=s.readTime?Yn(s.readTime):Ne.min(),o=tn.newNoDocument(i,r),a=s.removedTargetIds||[];n=new Kr([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const i=Ma(t,s.document),r=s.removedTargetIds||[];n=new Kr([],r,i,null)}else{if(!("filter"in e))return De();{e.filter;const s=e.filter;s.targetId;const i=s.count||0,r=new P1(i),o=s.targetId;n=new bm(o,r)}}return n}function q1(t,e){let n;if(e instanceof Tr)n={update:qu(t,e.key,e.value)};else if(e instanceof hc)n={delete:pl(t,e.key)};else if(e instanceof Ss)n={update:qu(t,e.key,e.data),updateMask:x1(e.fieldMask)};else{if(!(e instanceof A1))return De();n={verify:pl(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(s=>function(i,r){const o=r.transform;if(o instanceof go)return{fieldPath:r.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof tr)return{fieldPath:r.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof nr)return{fieldPath:r.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof _o)return{fieldPath:r.field.canonicalString(),increment:o.yt};throw De()}(0,s))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:B1(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:De()}(t,e.precondition)),n}function H1(t,e){return t&&t.length>0?(ft(e!==void 0),t.map(n=>function(s,i){let r=s.updateTime?Yn(s.updateTime):Yn(i);return r.isEqual(Ne.min())&&(r=Yn(i)),new I1(r,s.transformResults||[])}(n,e))):[]}function z1(t,e){return{documents:[ml(t,e.path)]}}function G1(t,e){const n={structuredQuery:{}},s=e.path;e.collectionGroup!==null?(n.parent=ml(t,s),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=ml(t,s.popLast()),n.structuredQuery.from=[{collectionId:s.lastSegment()}]);const i=function(l){if(l.length===0)return;const c=l.map(h=>function(f){if(f.op==="=="){if(Du(f.value))return{unaryFilter:{field:Ys(f.field),op:"IS_NAN"}};if(Pu(f.value))return{unaryFilter:{field:Ys(f.field),op:"IS_NULL"}}}else if(f.op==="!="){if(Du(f.value))return{unaryFilter:{field:Ys(f.field),op:"IS_NOT_NAN"}};if(Pu(f.value))return{unaryFilter:{field:Ys(f.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ys(f.field),op:Y1(f.op),value:f.value}}}(h));return c.length===1?c[0]:{compositeFilter:{op:"AND",filters:c}}}(e.filters);i&&(n.structuredQuery.where=i);const r=function(l){if(l.length!==0)return l.map(c=>function(h){return{field:Ys(h.field),direction:Q1(h.dir)}}(c))}(e.orderBy);r&&(n.structuredQuery.orderBy=r);const o=function(l,c){return l.gt||Wo(c)?c:{value:c}}(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(e.endAt)),n}function K1(t){let e=V1(t.parent);const n=t.structuredQuery,s=n.from?n.from.length:0;let i=null;if(s>0){ft(s===1);const h=n.from[0];h.allDescendants?i=h.collectionId:e=e.child(h.collectionId)}let r=[];n.where&&(r=Im(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(h=>function(f){return new Bi(xs(f.field),function(d){switch(d){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(f.direction))}(h)));let a=null;n.limit&&(a=function(h){let f;return f=typeof h=="object"?h.value:h,Wo(f)?null:f}(n.limit));let l=null;n.startAt&&(l=function(h){const f=!!h.before,d=h.values||[];return new mo(d,f)}(n.startAt));let c=null;return n.endAt&&(c=function(h){const f=!h.before,d=h.values||[];return new mo(d,f)}(n.endAt)),m1(e,i,o,r,a,"F",l,c)}function W1(t,e){const n=function(s,i){switch(i){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return De()}}(0,e.purpose);return n==null?null:{"goog-listen-tags":n}}function Im(t){return t?t.unaryFilter!==void 0?[J1(t)]:t.fieldFilter!==void 0?[X1(t)]:t.compositeFilter!==void 0?t.compositeFilter.filters.map(e=>Im(e)).reduce((e,n)=>e.concat(n)):De():[]}function Q1(t){return $1[t]}function Y1(t){return F1[t]}function Ys(t){return{fieldPath:t.canonicalString()}}function xs(t){return un.fromServerFormat(t.fieldPath)}function X1(t){return En.create(xs(t.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return De()}}(t.fieldFilter.op),t.fieldFilter.value)}function J1(t){switch(t.unaryFilter.op){case"IS_NAN":const e=xs(t.unaryFilter.field);return En.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=xs(t.unaryFilter.field);return En.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=xs(t.unaryFilter.field);return En.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=xs(t.unaryFilter.field);return En.create(i,"!=",{nullValue:"NULL_VALUE"});default:return De()}}function x1(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function Sm(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z1{constructor(e,n,s,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=s,this.mutations=i}applyToRemoteDocument(e,n){const s=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const r=this.mutations[i];r.key.isEqual(e.key)&&S1(r,e,s[i])}}applyToLocalView(e,n){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(n=Vi(s,e,n,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(n=Vi(s,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const s=vm();return this.mutations.forEach(i=>{const r=e.get(i.key),o=r.overlayedDocument;let a=this.applyToLocalView(o,r.mutatedFields);a=n.has(i.key)?null:a;const l=dm(o,a);l!==null&&s.set(i.key,l),o.isValidDocument()||o.convertToNoDocument(Ne.min())}),s}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),Fe())}isEqual(e){return this.batchId===e.batchId&&ui(this.mutations,e.mutations,(n,s)=>$u(n,s))&&ui(this.baseMutations,e.baseMutations,(n,s)=>$u(n,s))}}class dc{constructor(e,n,s,i){this.batch=e,this.commitVersion=n,this.mutationResults=s,this.docVersions=i}static from(e,n,s){ft(e.mutations.length===s.length);let i=O1;const r=e.mutations;for(let o=0;o<r.length;o++)i=i.insert(r[o].key,s[o].version);return new dc(e,n,s,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eb{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ns{constructor(e,n,s,i,r=Ne.min(),o=Ne.min(),a=sn.EMPTY_BYTE_STRING){this.target=e,this.targetId=n,this.purpose=s,this.sequenceNumber=i,this.snapshotVersion=r,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(e){return new Ns(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,n){return new Ns(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new Ns(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tb{constructor(e){this.re=e}}function nb(t){const e=K1({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?fl(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sb{constructor(){this.Ye=new ib}addToCollectionParentIndex(e,n){return this.Ye.add(n),Y.resolve()}getCollectionParents(e,n){return Y.resolve(this.Ye.getEntries(n))}addFieldIndex(e,n){return Y.resolve()}deleteFieldIndex(e,n){return Y.resolve()}getDocumentsMatchingTarget(e,n){return Y.resolve(null)}getIndexType(e,n){return Y.resolve(0)}getFieldIndexes(e,n){return Y.resolve([])}getNextCollectionGroupToUpdate(e){return Y.resolve(null)}getMinOffset(e,n){return Y.resolve(ws.min())}getMinOffsetFromCollectionGroup(e,n){return Y.resolve(ws.min())}updateCollectionGroup(e,n,s){return Y.resolve()}updateIndexEntries(e,n){return Y.resolve()}}class ib{constructor(){this.index={}}add(e){const n=e.lastSegment(),s=e.popLast(),i=this.index[n]||new Ut(yt.comparator),r=!i.has(s);return this.index[n]=i.add(s),r}has(e){const n=e.lastSegment(),s=e.popLast(),i=this.index[n];return i&&i.has(s)}getEntries(e){return(this.index[e]||new Ut(yt.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class di{constructor(e){this.bn=e}next(){return this.bn+=2,this.bn}static Pn(){return new di(0)}static vn(){return new di(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rb{constructor(){this.changes=new Ti(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,tn.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?Y.resolve(s):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ob{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ab{constructor(e,n,s,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=s,this.indexManager=i}getDocument(e,n){let s=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(s=i,this.getBaseDocument(e,n,s))).next(i=>(s!==null&&Vi(s.mutation,i,Dn.empty(),Ft.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.getLocalViewOfDocuments(e,s,Fe()).next(()=>s))}getLocalViewOfDocuments(e,n,s=Fe()){const i=Rs();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,s).next(r=>{let o=Li();return r.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const s=Rs();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,Fe()))}populateOverlays(e,n,s){const i=[];return s.forEach(r=>{n.has(r)||i.push(r)}),this.documentOverlayCache.getOverlays(e,i).next(r=>{r.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,s,i){let r=ts();const o=ji(),a=ji();return n.forEach((l,c)=>{const h=s.get(c.key);i.has(c.key)&&(h===void 0||h.mutation instanceof Ss)?r=r.insert(c.key,c):h!==void 0&&(o.set(c.key,h.mutation.getFieldMask()),Vi(h.mutation,c,h.mutation.getFieldMask(),Ft.now()))}),this.recalculateAndSaveOverlays(e,r).next(l=>(l.forEach((c,h)=>o.set(c,h)),n.forEach((c,h)=>{var f;return a.set(c,new ob(h,(f=o.get(c))!==null&&f!==void 0?f:null))}),a))}recalculateAndSaveOverlays(e,n){const s=ji();let i=new Bt((o,a)=>o-a),r=Fe();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const c=n.get(l);if(c===null)return;let h=s.get(l)||Dn.empty();h=a.applyToLocalView(c,h),s.set(l,h);const f=(i.get(a.batchId)||Fe()).add(l);i=i.insert(a.batchId,f)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),c=l.key,h=l.value,f=vm();h.forEach(d=>{if(!r.has(d)){const g=dm(n.get(d),s.get(d));g!==null&&f.set(d,g),r=r.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,f))}return Y.waitFor(o)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.recalculateAndSaveOverlays(e,s))}getDocumentsMatchingQuery(e,n,s){return function(i){return ye.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):v1(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,s):this.getDocumentsMatchingCollectionQuery(e,n,s)}getNextDocuments(e,n,s,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,s,i).next(r=>{const o=i-r.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,s.largestBatchId,i-r.size):Y.resolve(Rs());let a=-1,l=r;return o.next(c=>Y.forEach(c,(h,f)=>(a<f.largestBatchId&&(a=f.largestBatchId),r.get(h)?Y.resolve():this.getBaseDocument(e,h,f).next(d=>{l=l.insert(h,d)}))).next(()=>this.populateOverlays(e,c,r)).next(()=>this.computeViews(e,l,c,Fe())).next(h=>({batchId:a,changes:_m(h)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new ye(n)).next(s=>{let i=Li();return s.isFoundDocument()&&(i=i.insert(s.key,s)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,s){const i=n.collectionGroup;let r=Li();return this.indexManager.getCollectionParents(e,i).next(o=>Y.forEach(o,a=>{const l=function(c,h){return new Qo(h,null,c.explicitOrderBy.slice(),c.filters.slice(),c.limit,c.limitType,c.startAt,c.endAt)}(n,a.child(i));return this.getDocumentsMatchingCollectionQuery(e,l,s).next(c=>{c.forEach((h,f)=>{r=r.insert(h,f)})})}).next(()=>r))}getDocumentsMatchingCollectionQuery(e,n,s){let i;return this.remoteDocumentCache.getAllFromCollection(e,n.path,s).next(r=>(i=r,this.documentOverlayCache.getOverlaysForCollection(e,n.path,s.largestBatchId))).next(r=>{r.forEach((a,l)=>{const c=l.getKey();i.get(c)===null&&(i=i.insert(c,tn.newInvalidDocument(c)))});let o=Li();return i.forEach((a,l)=>{const c=r.get(a);c!==void 0&&Vi(c.mutation,l,Dn.empty(),Ft.now()),uc(n,l)&&(o=o.insert(a,l))}),o})}getBaseDocument(e,n,s){return s===null||s.mutation.type===1?this.remoteDocumentCache.getEntry(e,n):Y.resolve(tn.newInvalidDocument(n))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lb{constructor(e){this.It=e,this.Zn=new Map,this.ts=new Map}getBundleMetadata(e,n){return Y.resolve(this.Zn.get(n))}saveBundleMetadata(e,n){var s;return this.Zn.set(n.id,{id:(s=n).id,version:s.version,createTime:Yn(s.createTime)}),Y.resolve()}getNamedQuery(e,n){return Y.resolve(this.ts.get(n))}saveNamedQuery(e,n){return this.ts.set(n.name,function(s){return{name:s.name,query:nb(s.bundledQuery),readTime:Yn(s.readTime)}}(n)),Y.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cb{constructor(){this.overlays=new Bt(ye.comparator),this.es=new Map}getOverlay(e,n){return Y.resolve(this.overlays.get(n))}getOverlays(e,n){const s=Rs();return Y.forEach(n,i=>this.getOverlay(e,i).next(r=>{r!==null&&s.set(i,r)})).next(()=>s)}saveOverlays(e,n,s){return s.forEach((i,r)=>{this.ue(e,n,r)}),Y.resolve()}removeOverlaysForBatchId(e,n,s){const i=this.es.get(s);return i!==void 0&&(i.forEach(r=>this.overlays=this.overlays.remove(r)),this.es.delete(s)),Y.resolve()}getOverlaysForCollection(e,n,s){const i=Rs(),r=n.length+1,o=new ye(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,c=l.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===r&&l.largestBatchId>s&&i.set(l.getKey(),l)}return Y.resolve(i)}getOverlaysForCollectionGroup(e,n,s,i){let r=new Bt((c,h)=>c-h);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>s){let h=r.get(c.largestBatchId);h===null&&(h=Rs(),r=r.insert(c.largestBatchId,h)),h.set(c.getKey(),c)}}const a=Rs(),l=r.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((c,h)=>a.set(c,h)),!(a.size()>=i)););return Y.resolve(a)}ue(e,n,s){const i=this.overlays.get(s.key);if(i!==null){const o=this.es.get(i.largestBatchId).delete(s.key);this.es.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(s.key,new eb(n,s));let r=this.es.get(n);r===void 0&&(r=Fe(),this.es.set(n,r)),this.es.set(n,r.add(s.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pc{constructor(){this.ns=new Ut(Gt.ss),this.rs=new Ut(Gt.os)}isEmpty(){return this.ns.isEmpty()}addReference(e,n){const s=new Gt(e,n);this.ns=this.ns.add(s),this.rs=this.rs.add(s)}us(e,n){e.forEach(s=>this.addReference(s,n))}removeReference(e,n){this.cs(new Gt(e,n))}hs(e,n){e.forEach(s=>this.removeReference(s,n))}ls(e){const n=new ye(new yt([])),s=new Gt(n,e),i=new Gt(n,e+1),r=[];return this.rs.forEachInRange([s,i],o=>{this.cs(o),r.push(o.key)}),r}fs(){this.ns.forEach(e=>this.cs(e))}cs(e){this.ns=this.ns.delete(e),this.rs=this.rs.delete(e)}ds(e){const n=new ye(new yt([])),s=new Gt(n,e),i=new Gt(n,e+1);let r=Fe();return this.rs.forEachInRange([s,i],o=>{r=r.add(o.key)}),r}containsKey(e){const n=new Gt(e,0),s=this.ns.firstAfterOrEqual(n);return s!==null&&e.isEqual(s.key)}}class Gt{constructor(e,n){this.key=e,this._s=n}static ss(e,n){return ye.comparator(e.key,n.key)||et(e._s,n._s)}static os(e,n){return et(e._s,n._s)||ye.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ub{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.ws=1,this.gs=new Ut(Gt.ss)}checkEmpty(e){return Y.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,s,i){const r=this.ws;this.ws++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new Z1(r,n,s,i);this.mutationQueue.push(o);for(const a of i)this.gs=this.gs.add(new Gt(a.key,r)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return Y.resolve(o)}lookupMutationBatch(e,n){return Y.resolve(this.ys(n))}getNextMutationBatchAfterBatchId(e,n){const s=n+1,i=this.ps(s),r=i<0?0:i;return Y.resolve(this.mutationQueue.length>r?this.mutationQueue[r]:null)}getHighestUnacknowledgedBatchId(){return Y.resolve(this.mutationQueue.length===0?-1:this.ws-1)}getAllMutationBatches(e){return Y.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const s=new Gt(n,0),i=new Gt(n,Number.POSITIVE_INFINITY),r=[];return this.gs.forEachInRange([s,i],o=>{const a=this.ys(o._s);r.push(a)}),Y.resolve(r)}getAllMutationBatchesAffectingDocumentKeys(e,n){let s=new Ut(et);return n.forEach(i=>{const r=new Gt(i,0),o=new Gt(i,Number.POSITIVE_INFINITY);this.gs.forEachInRange([r,o],a=>{s=s.add(a._s)})}),Y.resolve(this.Is(s))}getAllMutationBatchesAffectingQuery(e,n){const s=n.path,i=s.length+1;let r=s;ye.isDocumentKey(r)||(r=r.child(""));const o=new Gt(new ye(r),0);let a=new Ut(et);return this.gs.forEachWhile(l=>{const c=l.key.path;return!!s.isPrefixOf(c)&&(c.length===i&&(a=a.add(l._s)),!0)},o),Y.resolve(this.Is(a))}Is(e){const n=[];return e.forEach(s=>{const i=this.ys(s);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){ft(this.Ts(n.batchId,"removed")===0),this.mutationQueue.shift();let s=this.gs;return Y.forEach(n.mutations,i=>{const r=new Gt(i.key,n.batchId);return s=s.delete(r),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.gs=s})}An(e){}containsKey(e,n){const s=new Gt(n,0),i=this.gs.firstAfterOrEqual(s);return Y.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,Y.resolve()}Ts(e,n){return this.ps(e)}ps(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}ys(e){const n=this.ps(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hb{constructor(e){this.Es=e,this.docs=new Bt(ye.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const s=n.key,i=this.docs.get(s),r=i?i.size:0,o=this.Es(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:o}),this.size+=o-r,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const s=this.docs.get(n);return Y.resolve(s?s.document.mutableCopy():tn.newInvalidDocument(n))}getEntries(e,n){let s=ts();return n.forEach(i=>{const r=this.docs.get(i);s=s.insert(i,r?r.document.mutableCopy():tn.newInvalidDocument(i))}),Y.resolve(s)}getAllFromCollection(e,n,s){let i=ts();const r=new ye(n.child("")),o=this.docs.getIteratorFrom(r);for(;o.hasNext();){const{key:a,value:{document:l}}=o.getNext();if(!n.isPrefixOf(a.path))break;a.path.length>n.length+1||x0(J0(l),s)<=0||(i=i.insert(l.key,l.mutableCopy()))}return Y.resolve(i)}getAllFromCollectionGroup(e,n,s,i){De()}As(e,n){return Y.forEach(this.docs,s=>n(s))}newChangeBuffer(e){return new fb(this)}getSize(e){return Y.resolve(this.size)}}class fb extends rb{constructor(e){super(),this.Yn=e}applyChanges(e){const n=[];return this.changes.forEach((s,i)=>{i.isValidDocument()?n.push(this.Yn.addEntry(e,i)):this.Yn.removeEntry(s)}),Y.waitFor(n)}getFromCache(e,n){return this.Yn.getEntry(e,n)}getAllFromCache(e,n){return this.Yn.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class db{constructor(e){this.persistence=e,this.Rs=new Ti(n=>lc(n),cc),this.lastRemoteSnapshotVersion=Ne.min(),this.highestTargetId=0,this.bs=0,this.Ps=new pc,this.targetCount=0,this.vs=di.Pn()}forEachTarget(e,n){return this.Rs.forEach((s,i)=>n(i)),Y.resolve()}getLastRemoteSnapshotVersion(e){return Y.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return Y.resolve(this.bs)}allocateTargetId(e){return this.highestTargetId=this.vs.next(),Y.resolve(this.highestTargetId)}setTargetsMetadata(e,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.bs&&(this.bs=n),Y.resolve()}Dn(e){this.Rs.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.vs=new di(n),this.highestTargetId=n),e.sequenceNumber>this.bs&&(this.bs=e.sequenceNumber)}addTargetData(e,n){return this.Dn(n),this.targetCount+=1,Y.resolve()}updateTargetData(e,n){return this.Dn(n),Y.resolve()}removeTargetData(e,n){return this.Rs.delete(n.target),this.Ps.ls(n.targetId),this.targetCount-=1,Y.resolve()}removeTargets(e,n,s){let i=0;const r=[];return this.Rs.forEach((o,a)=>{a.sequenceNumber<=n&&s.get(a.targetId)===null&&(this.Rs.delete(o),r.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),Y.waitFor(r).next(()=>i)}getTargetCount(e){return Y.resolve(this.targetCount)}getTargetData(e,n){const s=this.Rs.get(n)||null;return Y.resolve(s)}addMatchingKeys(e,n,s){return this.Ps.us(n,s),Y.resolve()}removeMatchingKeys(e,n,s){this.Ps.hs(n,s);const i=this.persistence.referenceDelegate,r=[];return i&&n.forEach(o=>{r.push(i.markPotentiallyOrphaned(e,o))}),Y.waitFor(r)}removeMatchingKeysForTargetId(e,n){return this.Ps.ls(n),Y.resolve()}getMatchingKeysForTargetId(e,n){const s=this.Ps.ds(n);return Y.resolve(s)}containsKey(e,n){return Y.resolve(this.Ps.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pb{constructor(e,n){this.Vs={},this.overlays={},this.Ss=new oc(0),this.Ds=!1,this.Ds=!0,this.referenceDelegate=e(this),this.Cs=new db(this),this.indexManager=new sb,this.remoteDocumentCache=function(s){return new hb(s)}(s=>this.referenceDelegate.xs(s)),this.It=new tb(n),this.Ns=new lb(this.It)}start(){return Promise.resolve()}shutdown(){return this.Ds=!1,Promise.resolve()}get started(){return this.Ds}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new cb,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let s=this.Vs[e.toKey()];return s||(s=new ub(n,this.referenceDelegate),this.Vs[e.toKey()]=s),s}getTargetCache(){return this.Cs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ns}runTransaction(e,n,s){ge("MemoryPersistence","Starting transaction:",e);const i=new mb(this.Ss.next());return this.referenceDelegate.ks(),s(i).next(r=>this.referenceDelegate.Ms(i).next(()=>r)).toPromise().then(r=>(i.raiseOnCommittedEvent(),r))}Os(e,n){return Y.or(Object.values(this.Vs).map(s=>()=>s.containsKey(e,n)))}}class mb extends e1{constructor(e){super(),this.currentSequenceNumber=e}}class mc{constructor(e){this.persistence=e,this.Fs=new pc,this.$s=null}static Bs(e){return new mc(e)}get Ls(){if(this.$s)return this.$s;throw De()}addReference(e,n,s){return this.Fs.addReference(s,n),this.Ls.delete(s.toString()),Y.resolve()}removeReference(e,n,s){return this.Fs.removeReference(s,n),this.Ls.add(s.toString()),Y.resolve()}markPotentiallyOrphaned(e,n){return this.Ls.add(n.toString()),Y.resolve()}removeTarget(e,n){this.Fs.ls(n.targetId).forEach(i=>this.Ls.add(i.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(r=>this.Ls.add(r.toString()))}).next(()=>s.removeTargetData(e,n))}ks(){this.$s=new Set}Ms(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return Y.forEach(this.Ls,s=>{const i=ye.fromPath(s);return this.Us(e,i).next(r=>{r||n.removeEntry(i,Ne.min())})}).next(()=>(this.$s=null,n.apply(e)))}updateLimboDocument(e,n){return this.Us(e,n).next(s=>{s?this.Ls.delete(n.toString()):this.Ls.add(n.toString())})}xs(e){return 0}Us(e,n){return Y.or([()=>Y.resolve(this.Fs.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Os(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gc{constructor(e,n,s,i){this.targetId=e,this.fromCache=n,this.Si=s,this.Di=i}static Ci(e,n){let s=Fe(),i=Fe();for(const r of n.docChanges)switch(r.type){case 0:s=s.add(r.doc.key);break;case 1:i=i.add(r.doc.key)}return new gc(e,n.fromCache,s,i)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gb{constructor(){this.xi=!1}initialize(e,n){this.Ni=e,this.indexManager=n,this.xi=!0}getDocumentsMatchingQuery(e,n,s,i){return this.ki(e,n).next(r=>r||this.Mi(e,n,i,s)).next(r=>r||this.Oi(e,n))}ki(e,n){if(Lu(n))return Y.resolve(null);let s=es(n);return this.indexManager.getIndexType(e,s).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=fl(n,null,"F"),s=es(n)),this.indexManager.getDocumentsMatchingTarget(e,s).next(r=>{const o=Fe(...r);return this.Ni.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,s).next(l=>{const c=this.Fi(n,a);return this.$i(n,c,o,l.readTime)?this.ki(e,fl(n,null,"F")):this.Bi(e,c,n,l)}))})))}Mi(e,n,s,i){return Lu(n)||i.isEqual(Ne.min())?this.Oi(e,n):this.Ni.getDocuments(e,s).next(r=>{const o=this.Fi(n,r);return this.$i(n,o,s,i)?this.Oi(e,n):(ku()<=Je.DEBUG&&ge("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),dl(n)),this.Bi(e,o,n,X0(i,-1)))})}Fi(e,n){let s=new Ut(om(e));return n.forEach((i,r)=>{uc(e,r)&&(s=s.add(r))}),s}$i(e,n,s,i){if(e.limit===null)return!1;if(s.size!==n.size)return!0;const r=e.limitType==="F"?n.last():n.first();return!!r&&(r.hasPendingWrites||r.version.compareTo(i)>0)}Oi(e,n){return ku()<=Je.DEBUG&&ge("QueryEngine","Using full collection scan to execute query:",dl(n)),this.Ni.getDocumentsMatchingQuery(e,n,ws.min())}Bi(e,n,s,i){return this.Ni.getDocumentsMatchingQuery(e,s,i).next(r=>(n.forEach(o=>{r=r.insert(o.key,o)}),r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _b{constructor(e,n,s,i){this.persistence=e,this.Li=n,this.It=i,this.Ui=new Bt(et),this.qi=new Ti(r=>lc(r),cc),this.Ki=new Map,this.Gi=e.getRemoteDocumentCache(),this.Cs=e.getTargetCache(),this.Ns=e.getBundleCache(),this.Qi(s)}Qi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new ab(this.Gi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Gi.setIndexManager(this.indexManager),this.Li.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ui))}}function vb(t,e,n,s){return new _b(t,e,n,s)}async function Cm(t,e){const n=Oe(t);return await n.persistence.runTransaction("Handle user change","readonly",s=>{let i;return n.mutationQueue.getAllMutationBatches(s).next(r=>(i=r,n.Qi(e),n.mutationQueue.getAllMutationBatches(s))).next(r=>{const o=[],a=[];let l=Fe();for(const c of i){o.push(c.batchId);for(const h of c.mutations)l=l.add(h.key)}for(const c of r){a.push(c.batchId);for(const h of c.mutations)l=l.add(h.key)}return n.localDocuments.getDocuments(s,l).next(c=>({ji:c,removedBatchIds:o,addedBatchIds:a}))})})}function yb(t,e){const n=Oe(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const i=e.batch.keys(),r=n.Gi.newChangeBuffer({trackRemovals:!0});return function(o,a,l,c){const h=l.batch,f=h.keys();let d=Y.resolve();return f.forEach(g=>{d=d.next(()=>c.getEntry(a,g)).next(_=>{const v=l.docVersions.get(g);ft(v!==null),_.version.compareTo(v)<0&&(h.applyToRemoteDocument(_,l),_.isValidDocument()&&(_.setReadTime(l.commitVersion),c.addEntry(_)))})}),d.next(()=>o.mutationQueue.removeMutationBatch(a,h))}(n,s,e,r).next(()=>r.apply(s)).next(()=>n.mutationQueue.performConsistencyCheck(s)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(s,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(o){let a=Fe();for(let l=0;l<o.mutationResults.length;++l)o.mutationResults[l].transformResults.length>0&&(a=a.add(o.batch.mutations[l].key));return a}(e))).next(()=>n.localDocuments.getDocuments(s,i))})}function Am(t){const e=Oe(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Cs.getLastRemoteSnapshotVersion(n))}function bb(t,e){const n=Oe(t),s=e.snapshotVersion;let i=n.Ui;return n.persistence.runTransaction("Apply remote event","readwrite-primary",r=>{const o=n.Gi.newChangeBuffer({trackRemovals:!0});i=n.Ui;const a=[];e.targetChanges.forEach((h,f)=>{const d=i.get(f);if(!d)return;a.push(n.Cs.removeMatchingKeys(r,h.removedDocuments,f).next(()=>n.Cs.addMatchingKeys(r,h.addedDocuments,f)));let g=d.withSequenceNumber(r.currentSequenceNumber);e.targetMismatches.has(f)?g=g.withResumeToken(sn.EMPTY_BYTE_STRING,Ne.min()).withLastLimboFreeSnapshotVersion(Ne.min()):h.resumeToken.approximateByteSize()>0&&(g=g.withResumeToken(h.resumeToken,s)),i=i.insert(f,g),function(_,v,I){return _.resumeToken.approximateByteSize()===0||v.snapshotVersion.toMicroseconds()-_.snapshotVersion.toMicroseconds()>=3e8?!0:I.addedDocuments.size+I.modifiedDocuments.size+I.removedDocuments.size>0}(d,g,h)&&a.push(n.Cs.updateTargetData(r,g))});let l=ts(),c=Fe();if(e.documentUpdates.forEach(h=>{e.resolvedLimboDocuments.has(h)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(r,h))}),a.push(wb(r,o,e.documentUpdates).next(h=>{l=h.Wi,c=h.zi})),!s.isEqual(Ne.min())){const h=n.Cs.getLastRemoteSnapshotVersion(r).next(f=>n.Cs.setTargetsMetadata(r,r.currentSequenceNumber,s));a.push(h)}return Y.waitFor(a).next(()=>o.apply(r)).next(()=>n.localDocuments.getLocalViewOfDocuments(r,l,c)).next(()=>l)}).then(r=>(n.Ui=i,r))}function wb(t,e,n){let s=Fe(),i=Fe();return n.forEach(r=>s=s.add(r)),e.getEntries(t,s).next(r=>{let o=ts();return n.forEach((a,l)=>{const c=r.get(a);l.isFoundDocument()!==c.isFoundDocument()&&(i=i.add(a)),l.isNoDocument()&&l.version.isEqual(Ne.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!c.isValidDocument()||l.version.compareTo(c.version)>0||l.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):ge("LocalStore","Ignoring outdated watch update for ",a,". Current version:",c.version," Watch version:",l.version)}),{Wi:o,zi:i}})}function Eb(t,e){const n=Oe(t);return n.persistence.runTransaction("Get next mutation batch","readonly",s=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(s,e)))}function Tb(t,e){const n=Oe(t);return n.persistence.runTransaction("Allocate target","readwrite",s=>{let i;return n.Cs.getTargetData(s,e).next(r=>r?(i=r,Y.resolve(i)):n.Cs.allocateTargetId(s).next(o=>(i=new Ns(e,o,0,s.currentSequenceNumber),n.Cs.addTargetData(s,i).next(()=>i))))}).then(s=>{const i=n.Ui.get(s.targetId);return(i===null||s.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.Ui=n.Ui.insert(s.targetId,s),n.qi.set(e,s.targetId)),s})}async function _l(t,e,n){const s=Oe(t),i=s.Ui.get(e),r=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",r,o=>s.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Er(o))throw o;ge("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}s.Ui=s.Ui.remove(e),s.qi.delete(i.target)}function Hu(t,e,n){const s=Oe(t);let i=Ne.min(),r=Fe();return s.persistence.runTransaction("Execute query","readonly",o=>function(a,l,c){const h=Oe(a),f=h.qi.get(c);return f!==void 0?Y.resolve(h.Ui.get(f)):h.Cs.getTargetData(l,c)}(s,o,es(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,s.Cs.getMatchingKeysForTargetId(o,a.targetId).next(l=>{r=l})}).next(()=>s.Li.getDocumentsMatchingQuery(o,e,n?i:Ne.min(),n?r:Fe())).next(a=>(kb(s,y1(e),a),{documents:a,Hi:r})))}function kb(t,e,n){let s=Ne.min();n.forEach((i,r)=>{r.readTime.compareTo(s)>0&&(s=r.readTime)}),t.Ki.set(e,s)}class zu{constructor(){this.activeTargetIds=ym()}er(e){this.activeTargetIds=this.activeTargetIds.add(e)}nr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}tr(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Ib{constructor(){this.Lr=new zu,this.Ur={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,s){}addLocalQueryTarget(e){return this.Lr.er(e),this.Ur[e]||"not-current"}updateQueryState(e,n,s){this.Ur[e]=n}removeLocalQueryTarget(e){this.Lr.nr(e)}isLocalQueryTarget(e){return this.Lr.activeTargetIds.has(e)}clearQueryState(e){delete this.Ur[e]}getAllActiveQueryTargets(){return this.Lr.activeTargetIds}isActiveQueryTarget(e){return this.Lr.activeTargetIds.has(e)}start(){return this.Lr=new zu,Promise.resolve()}handleUserChange(e,n,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sb{qr(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gu{constructor(){this.Kr=()=>this.Gr(),this.Qr=()=>this.jr(),this.Wr=[],this.zr()}qr(e){this.Wr.push(e)}shutdown(){window.removeEventListener("online",this.Kr),window.removeEventListener("offline",this.Qr)}zr(){window.addEventListener("online",this.Kr),window.addEventListener("offline",this.Qr)}Gr(){ge("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.Wr)e(0)}jr(){ge("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.Wr)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cb={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ab{constructor(e){this.Hr=e.Hr,this.Jr=e.Jr}Yr(e){this.Xr=e}Zr(e){this.eo=e}onMessage(e){this.no=e}close(){this.Jr()}send(e){this.Hr(e)}so(){this.Xr()}io(e){this.eo(e)}ro(e){this.no(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pb extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.oo=n+"://"+e.host,this.uo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}co(e,n,s,i,r){const o=this.ao(e,n);ge("RestConnection","Sending: ",o,s);const a={};return this.ho(a,i,r),this.lo(e,o,a,s).then(l=>(ge("RestConnection","Received: ",l),l),l=>{throw Iu("RestConnection",`${e} failed with error: `,l,"url: ",o,"request:",s),l})}fo(e,n,s,i,r,o){return this.co(e,n,s,i,r)}ho(e,n,s){e["X-Goog-Api-Client"]="gl-js/ fire/"+Ei,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,r)=>e[r]=i),s&&s.headers.forEach((i,r)=>e[r]=i)}ao(e,n){const s=Cb[e];return`${this.oo}/v1/${n}:${s}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}lo(e,n,s,i){return new Promise((r,o)=>{const a=new V0;a.listenOnce(F0.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case La.NO_ERROR:const c=a.getResponseJson();ge("Connection","XHR received:",JSON.stringify(c)),r(c);break;case La.TIMEOUT:ge("Connection",'RPC "'+e+'" timed out'),o(new Ee(X.DEADLINE_EXCEEDED,"Request time out"));break;case La.HTTP_ERROR:const h=a.getStatus();if(ge("Connection",'RPC "'+e+'" failed with status:',h,"response text:",a.getResponseText()),h>0){const f=a.getResponseJson().error;if(f&&f.status&&f.message){const d=function(g){const _=g.toLowerCase().replace(/_/g,"-");return Object.values(X).indexOf(_)>=0?_:X.UNKNOWN}(f.status);o(new Ee(d,f.message))}else o(new Ee(X.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new Ee(X.UNAVAILABLE,"Connection failed."));break;default:De()}}finally{ge("Connection",'RPC "'+e+'" completed.')}});const l=JSON.stringify(i);a.send(n,"POST",l,s,15)})}_o(e,n,s){const i=[this.oo,"/","google.firestore.v1.Firestore","/",e,"/channel"],r=M0(),o=$0(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new B0({})),this.ho(a.initMessageHeaders,n,s),a.encodeInitMessageHeaders=!0;const l=i.join("");ge("Connection","Creating WebChannel: "+l,a);const c=r.createWebChannel(l,a);let h=!1,f=!1;const d=new Ab({Hr:_=>{f?ge("Connection","Not sending because WebChannel is closed:",_):(h||(ge("Connection","Opening WebChannel transport."),c.open(),h=!0),ge("Connection","WebChannel sending:",_),c.send(_))},Jr:()=>c.close()}),g=(_,v,I)=>{_.listen(v,S=>{try{I(S)}catch(P){setTimeout(()=>{throw P},0)}})};return g(c,Fr.EventType.OPEN,()=>{f||ge("Connection","WebChannel transport opened.")}),g(c,Fr.EventType.CLOSE,()=>{f||(f=!0,ge("Connection","WebChannel transport closed"),d.io())}),g(c,Fr.EventType.ERROR,_=>{f||(f=!0,Iu("Connection","WebChannel transport errored:",_),d.io(new Ee(X.UNAVAILABLE,"The operation could not be completed")))}),g(c,Fr.EventType.MESSAGE,_=>{var v;if(!f){const I=_.data[0];ft(!!I);const S=I,P=S.error||((v=S[0])===null||v===void 0?void 0:v.error);if(P){ge("Connection","WebChannel received error:",P);const N=P.status;let $=function(V){const O=Pt[V];if(O!==void 0)return mm(O)}(N),L=P.message;$===void 0&&($=X.INTERNAL,L="Unknown error status: "+N+" with message "+P.message),f=!0,d.io(new Ee($,L)),c.close()}else ge("Connection","WebChannel received:",I),d.ro(I)}}),g(o,U0.STAT_EVENT,_=>{_.stat===Eu.PROXY?ge("Connection","Detected buffering proxy"):_.stat===Eu.NOPROXY&&ge("Connection","Detected no buffering proxy")}),setTimeout(()=>{d.so()},0),d}}function $a(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zo(t){return new U1(t,!0)}class Pm{constructor(e,n,s=1e3,i=1.5,r=6e4){this.Hs=e,this.timerId=n,this.wo=s,this.mo=i,this.yo=r,this.po=0,this.Io=null,this.To=Date.now(),this.reset()}reset(){this.po=0}Eo(){this.po=this.yo}Ao(e){this.cancel();const n=Math.floor(this.po+this.Ro()),s=Math.max(0,Date.now()-this.To),i=Math.max(0,n-s);i>0&&ge("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.po} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.Io=this.Hs.enqueueAfterDelay(this.timerId,i,()=>(this.To=Date.now(),e())),this.po*=this.mo,this.po<this.wo&&(this.po=this.wo),this.po>this.yo&&(this.po=this.yo)}bo(){this.Io!==null&&(this.Io.skipDelay(),this.Io=null)}cancel(){this.Io!==null&&(this.Io.cancel(),this.Io=null)}Ro(){return(Math.random()-.5)*this.po}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dm{constructor(e,n,s,i,r,o,a,l){this.Hs=e,this.Po=s,this.vo=i,this.Vo=r,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.So=0,this.Do=null,this.Co=null,this.stream=null,this.xo=new Pm(e,n)}No(){return this.state===1||this.state===5||this.ko()}ko(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Mo()}async stop(){this.No()&&await this.close(0)}Oo(){this.state=0,this.xo.reset()}Fo(){this.ko()&&this.Do===null&&(this.Do=this.Hs.enqueueAfterDelay(this.Po,6e4,()=>this.$o()))}Bo(e){this.Lo(),this.stream.send(e)}async $o(){if(this.ko())return this.close(0)}Lo(){this.Do&&(this.Do.cancel(),this.Do=null)}Uo(){this.Co&&(this.Co.cancel(),this.Co=null)}async close(e,n){this.Lo(),this.Uo(),this.xo.cancel(),this.So++,e!==4?this.xo.reset():n&&n.code===X.RESOURCE_EXHAUSTED?(Zn(n.toString()),Zn("Using maximum backoff delay to prevent overloading the backend."),this.xo.Eo()):n&&n.code===X.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.qo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Zr(n)}qo(){}auth(){this.state=1;const e=this.Ko(this.So),n=this.So;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,i])=>{this.So===n&&this.Go(s,i)},s=>{e(()=>{const i=new Ee(X.UNKNOWN,"Fetching auth token failed: "+s.message);return this.Qo(i)})})}Go(e,n){const s=this.Ko(this.So);this.stream=this.jo(e,n),this.stream.Yr(()=>{s(()=>(this.state=2,this.Co=this.Hs.enqueueAfterDelay(this.vo,1e4,()=>(this.ko()&&(this.state=3),Promise.resolve())),this.listener.Yr()))}),this.stream.Zr(i=>{s(()=>this.Qo(i))}),this.stream.onMessage(i=>{s(()=>this.onMessage(i))})}Mo(){this.state=5,this.xo.Ao(async()=>{this.state=0,this.start()})}Qo(e){return ge("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Ko(e){return n=>{this.Hs.enqueueAndForget(()=>this.So===e?n():(ge("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Db extends Dm{constructor(e,n,s,i,r,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,s,i,o),this.It=r}jo(e,n){return this.Vo._o("Listen",e,n)}onMessage(e){this.xo.reset();const n=j1(this.It,e),s=function(i){if(!("targetChange"in i))return Ne.min();const r=i.targetChange;return r.targetIds&&r.targetIds.length?Ne.min():r.readTime?Yn(r.readTime):Ne.min()}(e);return this.listener.Wo(n,s)}zo(e){const n={};n.database=gl(this.It),n.addTarget=function(i,r){let o;const a=r.target;return o=hl(a)?{documents:z1(i,a)}:{query:G1(i,a)},o.targetId=r.targetId,r.resumeToken.approximateByteSize()>0?o.resumeToken=Em(i,r.resumeToken):r.snapshotVersion.compareTo(Ne.min())>0&&(o.readTime=vo(i,r.snapshotVersion.toTimestamp())),o}(this.It,e);const s=W1(this.It,e);s&&(n.labels=s),this.Bo(n)}Ho(e){const n={};n.database=gl(this.It),n.removeTarget=e,this.Bo(n)}}class Rb extends Dm{constructor(e,n,s,i,r,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,s,i,o),this.It=r,this.Jo=!1}get Yo(){return this.Jo}start(){this.Jo=!1,this.lastStreamToken=void 0,super.start()}qo(){this.Jo&&this.Xo([])}jo(e,n){return this.Vo._o("Write",e,n)}onMessage(e){if(ft(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Jo){this.xo.reset();const n=H1(e.writeResults,e.commitTime),s=Yn(e.commitTime);return this.listener.Zo(s,n)}return ft(!e.writeResults||e.writeResults.length===0),this.Jo=!0,this.listener.tu()}eu(){const e={};e.database=gl(this.It),this.Bo(e)}Xo(e){const n={streamToken:this.lastStreamToken,writes:e.map(s=>q1(this.It,s))};this.Bo(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ob extends class{}{constructor(e,n,s,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.Vo=s,this.It=i,this.nu=!1}su(){if(this.nu)throw new Ee(X.FAILED_PRECONDITION,"The client has already been terminated.")}co(e,n,s){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,r])=>this.Vo.co(e,n,s,i,r)).catch(i=>{throw i.name==="FirebaseError"?(i.code===X.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new Ee(X.UNKNOWN,i.toString())})}fo(e,n,s,i){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,o])=>this.Vo.fo(e,n,s,r,o,i)).catch(r=>{throw r.name==="FirebaseError"?(r.code===X.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new Ee(X.UNKNOWN,r.toString())})}terminate(){this.nu=!0}}class Nb{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.iu=0,this.ru=null,this.ou=!0}uu(){this.iu===0&&(this.cu("Unknown"),this.ru=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.ru=null,this.au("Backend didn't respond within 10 seconds."),this.cu("Offline"),Promise.resolve())))}hu(e){this.state==="Online"?this.cu("Unknown"):(this.iu++,this.iu>=1&&(this.lu(),this.au(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.cu("Offline")))}set(e){this.lu(),this.iu=0,e==="Online"&&(this.ou=!1),this.cu(e)}cu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}au(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ou?(Zn(n),this.ou=!1):ge("OnlineStateTracker",n)}lu(){this.ru!==null&&(this.ru.cancel(),this.ru=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lb{constructor(e,n,s,i,r){this.localStore=e,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this.fu=[],this.du=new Map,this._u=new Set,this.wu=[],this.mu=r,this.mu.qr(o=>{s.enqueueAndForget(async()=>{Ks(this)&&(ge("RemoteStore","Restarting streams for network reachability change."),await async function(a){const l=Oe(a);l._u.add(4),await Ir(l),l.gu.set("Unknown"),l._u.delete(4),await ea(l)}(this))})}),this.gu=new Nb(s,i)}}async function ea(t){if(Ks(t))for(const e of t.wu)await e(!0)}async function Ir(t){for(const e of t.wu)await e(!1)}function Rm(t,e){const n=Oe(t);n.du.has(e.targetId)||(n.du.set(e.targetId,e),yc(n)?vc(n):ki(n).ko()&&_c(n,e))}function Om(t,e){const n=Oe(t),s=ki(n);n.du.delete(e),s.ko()&&Nm(n,e),n.du.size===0&&(s.ko()?s.Fo():Ks(n)&&n.gu.set("Unknown"))}function _c(t,e){t.yu.Ot(e.targetId),ki(t).zo(e)}function Nm(t,e){t.yu.Ot(e),ki(t).Ho(e)}function vc(t){t.yu=new M1({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),se:e=>t.du.get(e)||null}),ki(t).start(),t.gu.uu()}function yc(t){return Ks(t)&&!ki(t).No()&&t.du.size>0}function Ks(t){return Oe(t)._u.size===0}function Lm(t){t.yu=void 0}async function Mb(t){t.du.forEach((e,n)=>{_c(t,e)})}async function $b(t,e){Lm(t),yc(t)?(t.gu.hu(e),vc(t)):t.gu.set("Unknown")}async function Fb(t,e,n){if(t.gu.set("Online"),e instanceof wm&&e.state===2&&e.cause)try{await async function(s,i){const r=i.cause;for(const o of i.targetIds)s.du.has(o)&&(await s.remoteSyncer.rejectListen(o,r),s.du.delete(o),s.yu.removeTarget(o))}(t,e)}catch(s){ge("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),s),await yo(t,s)}else if(e instanceof Kr?t.yu.Gt(e):e instanceof bm?t.yu.Yt(e):t.yu.Wt(e),!n.isEqual(Ne.min()))try{const s=await Am(t.localStore);n.compareTo(s)>=0&&await function(i,r){const o=i.yu.te(r);return o.targetChanges.forEach((a,l)=>{if(a.resumeToken.approximateByteSize()>0){const c=i.du.get(l);c&&i.du.set(l,c.withResumeToken(a.resumeToken,r))}}),o.targetMismatches.forEach(a=>{const l=i.du.get(a);if(!l)return;i.du.set(a,l.withResumeToken(sn.EMPTY_BYTE_STRING,l.snapshotVersion)),Nm(i,a);const c=new Ns(l.target,a,1,l.sequenceNumber);_c(i,c)}),i.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(s){ge("RemoteStore","Failed to raise snapshot:",s),await yo(t,s)}}async function yo(t,e,n){if(!Er(e))throw e;t._u.add(1),await Ir(t),t.gu.set("Offline"),n||(n=()=>Am(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{ge("RemoteStore","Retrying IndexedDB access"),await n(),t._u.delete(1),await ea(t)})}function Mm(t,e){return e().catch(n=>yo(t,n,e))}async function ta(t){const e=Oe(t),n=Ts(e);let s=e.fu.length>0?e.fu[e.fu.length-1].batchId:-1;for(;Ub(e);)try{const i=await Eb(e.localStore,s);if(i===null){e.fu.length===0&&n.Fo();break}s=i.batchId,Bb(e,i)}catch(i){await yo(e,i)}$m(e)&&Fm(e)}function Ub(t){return Ks(t)&&t.fu.length<10}function Bb(t,e){t.fu.push(e);const n=Ts(t);n.ko()&&n.Yo&&n.Xo(e.mutations)}function $m(t){return Ks(t)&&!Ts(t).No()&&t.fu.length>0}function Fm(t){Ts(t).start()}async function Vb(t){Ts(t).eu()}async function jb(t){const e=Ts(t);for(const n of t.fu)e.Xo(n.mutations)}async function qb(t,e,n){const s=t.fu.shift(),i=dc.from(s,e,n);await Mm(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await ta(t)}async function Hb(t,e){e&&Ts(t).Yo&&await async function(n,s){if(i=s.code,D1(i)&&i!==X.ABORTED){const r=n.fu.shift();Ts(n).Oo(),await Mm(n,()=>n.remoteSyncer.rejectFailedWrite(r.batchId,s)),await ta(n)}var i}(t,e),$m(t)&&Fm(t)}async function Ku(t,e){const n=Oe(t);n.asyncQueue.verifyOperationInProgress(),ge("RemoteStore","RemoteStore received new credentials");const s=Ks(n);n._u.add(3),await Ir(n),s&&n.gu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n._u.delete(3),await ea(n)}async function zb(t,e){const n=Oe(t);e?(n._u.delete(2),await ea(n)):e||(n._u.add(2),await Ir(n),n.gu.set("Unknown"))}function ki(t){return t.pu||(t.pu=function(e,n,s){const i=Oe(e);return i.su(),new Db(n,i.Vo,i.authCredentials,i.appCheckCredentials,i.It,s)}(t.datastore,t.asyncQueue,{Yr:Mb.bind(null,t),Zr:$b.bind(null,t),Wo:Fb.bind(null,t)}),t.wu.push(async e=>{e?(t.pu.Oo(),yc(t)?vc(t):t.gu.set("Unknown")):(await t.pu.stop(),Lm(t))})),t.pu}function Ts(t){return t.Iu||(t.Iu=function(e,n,s){const i=Oe(e);return i.su(),new Rb(n,i.Vo,i.authCredentials,i.appCheckCredentials,i.It,s)}(t.datastore,t.asyncQueue,{Yr:Vb.bind(null,t),Zr:Hb.bind(null,t),tu:jb.bind(null,t),Zo:qb.bind(null,t)}),t.wu.push(async e=>{e?(t.Iu.Oo(),await ta(t)):(await t.Iu.stop(),t.fu.length>0&&(ge("RemoteStore",`Stopping write stream with ${t.fu.length} pending writes`),t.fu=[]))})),t.Iu}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bc{constructor(e,n,s,i,r){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=s,this.op=i,this.removalCallback=r,this.deferred=new _s,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,s,i,r){const o=Date.now()+s,a=new bc(e,n,o,i,r);return a.start(s),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new Ee(X.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function wc(t,e){if(Zn("AsyncQueue",`${e}: ${t}`),Er(t))return new Ee(X.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ni{constructor(e){this.comparator=e?(n,s)=>e(n,s)||ye.comparator(n.key,s.key):(n,s)=>ye.comparator(n.key,s.key),this.keyedMap=Li(),this.sortedSet=new Bt(this.comparator)}static emptySet(e){return new ni(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,s)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof ni)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,r=s.getNext().key;if(!i.isEqual(r))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const s=new ni;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=n,s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wu{constructor(){this.Tu=new Bt(ye.comparator)}track(e){const n=e.doc.key,s=this.Tu.get(n);s?e.type!==0&&s.type===3?this.Tu=this.Tu.insert(n,e):e.type===3&&s.type!==1?this.Tu=this.Tu.insert(n,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.Tu=this.Tu.insert(n,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.Tu=this.Tu.insert(n,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.Tu=this.Tu.remove(n):e.type===1&&s.type===2?this.Tu=this.Tu.insert(n,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.Tu=this.Tu.insert(n,{type:2,doc:e.doc}):De():this.Tu=this.Tu.insert(n,e)}Eu(){const e=[];return this.Tu.inorderTraversal((n,s)=>{e.push(s)}),e}}class pi{constructor(e,n,s,i,r,o,a,l){this.query=e,this.docs=n,this.oldDocs=s,this.docChanges=i,this.mutatedKeys=r,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l}static fromInitialDocuments(e,n,s,i){const r=[];return n.forEach(o=>{r.push({type:0,doc:o})}),new pi(e,n,ni.emptySet(n),r,s,i,!0,!1)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Yo(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,s=e.docChanges;if(n.length!==s.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==s[i].type||!n[i].doc.isEqual(s[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gb{constructor(){this.Au=void 0,this.listeners=[]}}class Kb{constructor(){this.queries=new Ti(e=>rm(e),Yo),this.onlineState="Unknown",this.Ru=new Set}}async function Wb(t,e){const n=Oe(t),s=e.query;let i=!1,r=n.queries.get(s);if(r||(i=!0,r=new Gb),i)try{r.Au=await n.onListen(s)}catch(o){const a=wc(o,`Initialization of query '${dl(e.query)}' failed`);return void e.onError(a)}n.queries.set(s,r),r.listeners.push(e),e.bu(n.onlineState),r.Au&&e.Pu(r.Au)&&Ec(n)}async function Qb(t,e){const n=Oe(t),s=e.query;let i=!1;const r=n.queries.get(s);if(r){const o=r.listeners.indexOf(e);o>=0&&(r.listeners.splice(o,1),i=r.listeners.length===0)}if(i)return n.queries.delete(s),n.onUnlisten(s)}function Yb(t,e){const n=Oe(t);let s=!1;for(const i of e){const r=i.query,o=n.queries.get(r);if(o){for(const a of o.listeners)a.Pu(i)&&(s=!0);o.Au=i}}s&&Ec(n)}function Xb(t,e,n){const s=Oe(t),i=s.queries.get(e);if(i)for(const r of i.listeners)r.onError(n);s.queries.delete(e)}function Ec(t){t.Ru.forEach(e=>{e.next()})}class Jb{constructor(e,n,s){this.query=e,this.vu=n,this.Vu=!1,this.Su=null,this.onlineState="Unknown",this.options=s||{}}Pu(e){if(!this.options.includeMetadataChanges){const s=[];for(const i of e.docChanges)i.type!==3&&s.push(i);e=new pi(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0)}let n=!1;return this.Vu?this.Du(e)&&(this.vu.next(e),n=!0):this.Cu(e,this.onlineState)&&(this.xu(e),n=!0),this.Su=e,n}onError(e){this.vu.error(e)}bu(e){this.onlineState=e;let n=!1;return this.Su&&!this.Vu&&this.Cu(this.Su,e)&&(this.xu(this.Su),n=!0),n}Cu(e,n){if(!e.fromCache)return!0;const s=n!=="Offline";return(!this.options.Nu||!s)&&(!e.docs.isEmpty()||n==="Offline")}Du(e){if(e.docChanges.length>0)return!0;const n=this.Su&&this.Su.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}xu(e){e=pi.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache),this.Vu=!0,this.vu.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Um{constructor(e){this.key=e}}class Bm{constructor(e){this.key=e}}class xb{constructor(e,n){this.query=e,this.Lu=n,this.Uu=null,this.current=!1,this.qu=Fe(),this.mutatedKeys=Fe(),this.Ku=om(e),this.Gu=new ni(this.Ku)}get Qu(){return this.Lu}ju(e,n){const s=n?n.Wu:new Wu,i=n?n.Gu:this.Gu;let r=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const l=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,c=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((h,f)=>{const d=i.get(h),g=uc(this.query,f)?f:null,_=!!d&&this.mutatedKeys.has(d.key),v=!!g&&(g.hasLocalMutations||this.mutatedKeys.has(g.key)&&g.hasCommittedMutations);let I=!1;d&&g?d.data.isEqual(g.data)?_!==v&&(s.track({type:3,doc:g}),I=!0):this.zu(d,g)||(s.track({type:2,doc:g}),I=!0,(l&&this.Ku(g,l)>0||c&&this.Ku(g,c)<0)&&(a=!0)):!d&&g?(s.track({type:0,doc:g}),I=!0):d&&!g&&(s.track({type:1,doc:d}),I=!0,(l||c)&&(a=!0)),I&&(g?(o=o.add(g),r=v?r.add(h):r.delete(h)):(o=o.delete(h),r=r.delete(h)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const h=this.query.limitType==="F"?o.last():o.first();o=o.delete(h.key),r=r.delete(h.key),s.track({type:1,doc:h})}return{Gu:o,Wu:s,$i:a,mutatedKeys:r}}zu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,s){const i=this.Gu;this.Gu=e.Gu,this.mutatedKeys=e.mutatedKeys;const r=e.Wu.Eu();r.sort((c,h)=>function(f,d){const g=_=>{switch(_){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return De()}};return g(f)-g(d)}(c.type,h.type)||this.Ku(c.doc,h.doc)),this.Hu(s);const o=n?this.Ju():[],a=this.qu.size===0&&this.current?1:0,l=a!==this.Uu;return this.Uu=a,r.length!==0||l?{snapshot:new pi(this.query,e.Gu,i,r,e.mutatedKeys,a===0,l,!1),Yu:o}:{Yu:o}}bu(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Gu:this.Gu,Wu:new Wu,mutatedKeys:this.mutatedKeys,$i:!1},!1)):{Yu:[]}}Xu(e){return!this.Lu.has(e)&&!!this.Gu.has(e)&&!this.Gu.get(e).hasLocalMutations}Hu(e){e&&(e.addedDocuments.forEach(n=>this.Lu=this.Lu.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Lu=this.Lu.delete(n)),this.current=e.current)}Ju(){if(!this.current)return[];const e=this.qu;this.qu=Fe(),this.Gu.forEach(s=>{this.Xu(s.key)&&(this.qu=this.qu.add(s.key))});const n=[];return e.forEach(s=>{this.qu.has(s)||n.push(new Bm(s))}),this.qu.forEach(s=>{e.has(s)||n.push(new Um(s))}),n}Zu(e){this.Lu=e.Hi,this.qu=Fe();const n=this.ju(e.documents);return this.applyChanges(n,!0)}tc(){return pi.fromInitialDocuments(this.query,this.Gu,this.mutatedKeys,this.Uu===0)}}class Zb{constructor(e,n,s){this.query=e,this.targetId=n,this.view=s}}class ew{constructor(e){this.key=e,this.ec=!1}}class tw{constructor(e,n,s,i,r,o){this.localStore=e,this.remoteStore=n,this.eventManager=s,this.sharedClientState=i,this.currentUser=r,this.maxConcurrentLimboResolutions=o,this.nc={},this.sc=new Ti(a=>rm(a),Yo),this.ic=new Map,this.rc=new Set,this.oc=new Bt(ye.comparator),this.uc=new Map,this.cc=new pc,this.ac={},this.hc=new Map,this.lc=di.vn(),this.onlineState="Unknown",this.fc=void 0}get isPrimaryClient(){return this.fc===!0}}async function nw(t,e){const n=fw(t);let s,i;const r=n.sc.get(e);if(r)s=r.targetId,n.sharedClientState.addLocalQueryTarget(s),i=r.view.tc();else{const o=await Tb(n.localStore,es(e));n.isPrimaryClient&&Rm(n.remoteStore,o);const a=n.sharedClientState.addLocalQueryTarget(o.targetId);s=o.targetId,i=await sw(n,e,s,a==="current")}return i}async function sw(t,e,n,s){t.dc=(h,f,d)=>async function(g,_,v,I){let S=_.view.ju(v);S.$i&&(S=await Hu(g.localStore,_.query,!1).then(({documents:$})=>_.view.ju($,S)));const P=I&&I.targetChanges.get(_.targetId),N=_.view.applyChanges(S,g.isPrimaryClient,P);return Yu(g,_.targetId,N.Yu),N.snapshot}(t,h,f,d);const i=await Hu(t.localStore,e,!0),r=new xb(e,i.Hi),o=r.ju(i.documents),a=kr.createSynthesizedTargetChangeForCurrentChange(n,s&&t.onlineState!=="Offline"),l=r.applyChanges(o,t.isPrimaryClient,a);Yu(t,n,l.Yu);const c=new Zb(e,n,r);return t.sc.set(e,c),t.ic.has(n)?t.ic.get(n).push(e):t.ic.set(n,[e]),l.snapshot}async function iw(t,e){const n=Oe(t),s=n.sc.get(e),i=n.ic.get(s.targetId);if(i.length>1)return n.ic.set(s.targetId,i.filter(r=>!Yo(r,e))),void n.sc.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await _l(n.localStore,s.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(s.targetId),Om(n.remoteStore,s.targetId),vl(n,s.targetId)}).catch(wr)):(vl(n,s.targetId),await _l(n.localStore,s.targetId,!0))}async function rw(t,e,n){const s=dw(t);try{const i=await function(r,o){const a=Oe(r),l=Ft.now(),c=o.reduce((d,g)=>d.add(g.key),Fe());let h,f;return a.persistence.runTransaction("Locally write mutations","readwrite",d=>{let g=ts(),_=Fe();return a.Gi.getEntries(d,c).next(v=>{g=v,g.forEach((I,S)=>{S.isValidDocument()||(_=_.add(I))})}).next(()=>a.localDocuments.getOverlayedDocuments(d,g)).next(v=>{h=v;const I=[];for(const S of o){const P=C1(S,h.get(S.key).overlayedDocument);P!=null&&I.push(new Ss(S.key,P,nm(P.value.mapValue),$n.exists(!0)))}return a.mutationQueue.addMutationBatch(d,l,I,o)}).next(v=>{f=v;const I=v.applyToLocalDocumentSet(h,_);return a.documentOverlayCache.saveOverlays(d,v.batchId,I)})}).then(()=>({batchId:f.batchId,changes:_m(h)}))}(s.localStore,e);s.sharedClientState.addPendingMutation(i.batchId),function(r,o,a){let l=r.ac[r.currentUser.toKey()];l||(l=new Bt(et)),l=l.insert(o,a),r.ac[r.currentUser.toKey()]=l}(s,i.batchId,n),await Sr(s,i.changes),await ta(s.remoteStore)}catch(i){const r=wc(i,"Failed to persist write");n.reject(r)}}async function Vm(t,e){const n=Oe(t);try{const s=await bb(n.localStore,e);e.targetChanges.forEach((i,r)=>{const o=n.uc.get(r);o&&(ft(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.ec=!0:i.modifiedDocuments.size>0?ft(o.ec):i.removedDocuments.size>0&&(ft(o.ec),o.ec=!1))}),await Sr(n,s,e)}catch(s){await wr(s)}}function Qu(t,e,n){const s=Oe(t);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const i=[];s.sc.forEach((r,o)=>{const a=o.view.bu(e);a.snapshot&&i.push(a.snapshot)}),function(r,o){const a=Oe(r);a.onlineState=o;let l=!1;a.queries.forEach((c,h)=>{for(const f of h.listeners)f.bu(o)&&(l=!0)}),l&&Ec(a)}(s.eventManager,e),i.length&&s.nc.Wo(i),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function ow(t,e,n){const s=Oe(t);s.sharedClientState.updateQueryState(e,"rejected",n);const i=s.uc.get(e),r=i&&i.key;if(r){let o=new Bt(ye.comparator);o=o.insert(r,tn.newNoDocument(r,Ne.min()));const a=Fe().add(r),l=new xo(Ne.min(),new Map,new Ut(et),o,a);await Vm(s,l),s.oc=s.oc.remove(r),s.uc.delete(e),Tc(s)}else await _l(s.localStore,e,!1).then(()=>vl(s,e,n)).catch(wr)}async function aw(t,e){const n=Oe(t),s=e.batch.batchId;try{const i=await yb(n.localStore,e);qm(n,s,null),jm(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await Sr(n,i)}catch(i){await wr(i)}}async function lw(t,e,n){const s=Oe(t);try{const i=await function(r,o){const a=Oe(r);return a.persistence.runTransaction("Reject batch","readwrite-primary",l=>{let c;return a.mutationQueue.lookupMutationBatch(l,o).next(h=>(ft(h!==null),c=h.keys(),a.mutationQueue.removeMutationBatch(l,h))).next(()=>a.mutationQueue.performConsistencyCheck(l)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(l,c,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(l,c)).next(()=>a.localDocuments.getDocuments(l,c))})}(s.localStore,e);qm(s,e,n),jm(s,e),s.sharedClientState.updateMutationState(e,"rejected",n),await Sr(s,i)}catch(i){await wr(i)}}function jm(t,e){(t.hc.get(e)||[]).forEach(n=>{n.resolve()}),t.hc.delete(e)}function qm(t,e,n){const s=Oe(t);let i=s.ac[s.currentUser.toKey()];if(i){const r=i.get(e);r&&(n?r.reject(n):r.resolve(),i=i.remove(e)),s.ac[s.currentUser.toKey()]=i}}function vl(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const s of t.ic.get(e))t.sc.delete(s),n&&t.nc._c(s,n);t.ic.delete(e),t.isPrimaryClient&&t.cc.ls(e).forEach(s=>{t.cc.containsKey(s)||Hm(t,s)})}function Hm(t,e){t.rc.delete(e.path.canonicalString());const n=t.oc.get(e);n!==null&&(Om(t.remoteStore,n),t.oc=t.oc.remove(e),t.uc.delete(n),Tc(t))}function Yu(t,e,n){for(const s of n)s instanceof Um?(t.cc.addReference(s.key,e),cw(t,s)):s instanceof Bm?(ge("SyncEngine","Document no longer in limbo: "+s.key),t.cc.removeReference(s.key,e),t.cc.containsKey(s.key)||Hm(t,s.key)):De()}function cw(t,e){const n=e.key,s=n.path.canonicalString();t.oc.get(n)||t.rc.has(s)||(ge("SyncEngine","New document in limbo: "+n),t.rc.add(s),Tc(t))}function Tc(t){for(;t.rc.size>0&&t.oc.size<t.maxConcurrentLimboResolutions;){const e=t.rc.values().next().value;t.rc.delete(e);const n=new ye(yt.fromString(e)),s=t.lc.next();t.uc.set(s,new ew(n)),t.oc=t.oc.insert(n,s),Rm(t.remoteStore,new Ns(es(im(n.path)),s,2,oc.at))}}async function Sr(t,e,n){const s=Oe(t),i=[],r=[],o=[];s.sc.isEmpty()||(s.sc.forEach((a,l)=>{o.push(s.dc(l,e,n).then(c=>{if(c){s.isPrimaryClient&&s.sharedClientState.updateQueryState(l.targetId,c.fromCache?"not-current":"current"),i.push(c);const h=gc.Ci(l.targetId,c);r.push(h)}}))}),await Promise.all(o),s.nc.Wo(i),await async function(a,l){const c=Oe(a);try{await c.persistence.runTransaction("notifyLocalViewChanges","readwrite",h=>Y.forEach(l,f=>Y.forEach(f.Si,d=>c.persistence.referenceDelegate.addReference(h,f.targetId,d)).next(()=>Y.forEach(f.Di,d=>c.persistence.referenceDelegate.removeReference(h,f.targetId,d)))))}catch(h){if(!Er(h))throw h;ge("LocalStore","Failed to update sequence numbers: "+h)}for(const h of l){const f=h.targetId;if(!h.fromCache){const d=c.Ui.get(f),g=d.snapshotVersion,_=d.withLastLimboFreeSnapshotVersion(g);c.Ui=c.Ui.insert(f,_)}}}(s.localStore,r))}async function uw(t,e){const n=Oe(t);if(!n.currentUser.isEqual(e)){ge("SyncEngine","User change. New user:",e.toKey());const s=await Cm(n.localStore,e);n.currentUser=e,function(i,r){i.hc.forEach(o=>{o.forEach(a=>{a.reject(new Ee(X.CANCELLED,r))})}),i.hc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await Sr(n,s.ji)}}function hw(t,e){const n=Oe(t),s=n.uc.get(e);if(s&&s.ec)return Fe().add(s.key);{let i=Fe();const r=n.ic.get(e);if(!r)return i;for(const o of r){const a=n.sc.get(o);i=i.unionWith(a.view.Qu)}return i}}function fw(t){const e=Oe(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Vm.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=hw.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=ow.bind(null,e),e.nc.Wo=Yb.bind(null,e.eventManager),e.nc._c=Xb.bind(null,e.eventManager),e}function dw(t){const e=Oe(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=aw.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=lw.bind(null,e),e}class pw{constructor(){this.synchronizeTabs=!1}async initialize(e){this.It=Zo(e.databaseInfo.databaseId),this.sharedClientState=this.mc(e),this.persistence=this.gc(e),await this.persistence.start(),this.localStore=this.yc(e),this.gcScheduler=this.Ic(e,this.localStore),this.indexBackfillerScheduler=this.Tc(e,this.localStore)}Ic(e,n){return null}Tc(e,n){return null}yc(e){return vb(this.persistence,new gb,e.initialUser,this.It)}gc(e){return new pb(mc.Bs,this.It)}mc(e){return new Ib}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class mw{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>Qu(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=uw.bind(null,this.syncEngine),await zb(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new Kb}createDatastore(e){const n=Zo(e.databaseInfo.databaseId),s=(i=e.databaseInfo,new Pb(i));var i;return function(r,o,a,l){return new Ob(r,o,a,l)}(e.authCredentials,e.appCheckCredentials,s,n)}createRemoteStore(e){return n=this.localStore,s=this.datastore,i=e.asyncQueue,r=a=>Qu(this.syncEngine,a,0),o=Gu.C()?new Gu:new Sb,new Lb(n,s,i,r,o);var n,s,i,r,o}createSyncEngine(e,n){return function(s,i,r,o,a,l,c){const h=new tw(s,i,r,o,a,l);return c&&(h.fc=!0),h}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=Oe(e);ge("RemoteStore","RemoteStore shutting down."),n._u.add(5),await Ir(n),n.mu.shutdown(),n.gu.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gw{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Ac(this.observer.next,e)}error(e){this.observer.error?this.Ac(this.observer.error,e):Zn("Uncaught Error in snapshot listener:",e)}Rc(){this.muted=!0}Ac(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _w{constructor(e,n,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=i,this.user=bn.UNAUTHENTICATED,this.clientId=xp.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(s,async r=>{ge("FirestoreClient","Received user=",r.uid),await this.authCredentialListener(r),this.user=r}),this.appCheckCredentials.start(s,r=>(ge("FirestoreClient","Received new app check token=",r),this.appCheckCredentialListener(r,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new Ee(X.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new _s;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const s=wc(n,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function vw(t,e){t.asyncQueue.verifyOperationInProgress(),ge("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let s=n.initialUser;t.setCredentialChangeListener(async i=>{s.isEqual(i)||(await Cm(e.localStore,i),s=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t.offlineComponents=e}async function yw(t,e){t.asyncQueue.verifyOperationInProgress();const n=await bw(t);ge("FirestoreClient","Initializing OnlineComponentProvider");const s=await t.getConfiguration();await e.initialize(n,s),t.setCredentialChangeListener(i=>Ku(e.remoteStore,i)),t.setAppCheckTokenChangeListener((i,r)=>Ku(e.remoteStore,r)),t.onlineComponents=e}async function bw(t){return t.offlineComponents||(ge("FirestoreClient","Using default OfflineComponentProvider"),await vw(t,new pw)),t.offlineComponents}async function zm(t){return t.onlineComponents||(ge("FirestoreClient","Using default OnlineComponentProvider"),await yw(t,new mw)),t.onlineComponents}function ww(t){return zm(t).then(e=>e.syncEngine)}async function Ew(t){const e=await zm(t),n=e.eventManager;return n.onListen=nw.bind(null,e.syncEngine),n.onUnlisten=iw.bind(null,e.syncEngine),n}function Tw(t,e,n={}){const s=new _s;return t.asyncQueue.enqueueAndForget(async()=>function(i,r,o,a,l){const c=new gw({next:f=>{r.enqueueAndForget(()=>Qb(i,h)),f.fromCache&&a.source==="server"?l.reject(new Ee(X.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):l.resolve(f)},error:f=>l.reject(f)}),h=new Jb(o,c,{includeMetadataChanges:!0,Nu:!0});return Wb(i,h)}(await Ew(t),t.asyncQueue,e,n,s)),s.promise}const Xu=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gm(t,e,n){if(!n)throw new Ee(X.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function kw(t,e,n,s){if(e===!0&&s===!0)throw new Ee(X.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Ju(t){if(!ye.isDocumentKey(t))throw new Ee(X.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function xu(t){if(ye.isDocumentKey(t))throw new Ee(X.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function kc(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":De()}function mi(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new Ee(X.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=kc(t);throw new Ee(X.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zu{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new Ee(X.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new Ee(X.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,kw("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ic{constructor(e,n,s,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=s,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Zu({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new Ee(X.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new Ee(X.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Zu(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new q0;switch(n.type){case"gapi":const s=n.client;return new G0(s,n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new Ee(X.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=Xu.get(e);n&&(ge("ComponentProvider","Removing Datastore"),Xu.delete(e),n.terminate())}(this),Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rn{constructor(e,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new vs(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Rn(this.firestore,e,this._key)}}class na{constructor(e,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new na(this.firestore,e,this._query)}}class vs extends na{constructor(e,n,s){super(e,n,im(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Rn(this.firestore,null,new ye(e))}withConverter(e){return new vs(this.firestore,e,this._path)}}function Hn(t,e,...n){if(t=On(t),Gm("collection","path",e),t instanceof Ic){const s=yt.fromString(e,...n);return xu(s),new vs(t,null,s)}{if(!(t instanceof Rn||t instanceof vs))throw new Ee(X.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(yt.fromString(e,...n));return xu(s),new vs(t.firestore,null,s)}}function ns(t,e,...n){if(t=On(t),arguments.length===1&&(e=xp.R()),Gm("doc","path",e),t instanceof Ic){const s=yt.fromString(e,...n);return Ju(s),new Rn(t,null,new ye(s))}{if(!(t instanceof Rn||t instanceof vs))throw new Ee(X.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(yt.fromString(e,...n));return Ju(s),new Rn(t.firestore,t instanceof vs?t.converter:null,new ye(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Iw{constructor(){this.$c=Promise.resolve(),this.Bc=[],this.Lc=!1,this.Uc=[],this.qc=null,this.Kc=!1,this.Gc=!1,this.Qc=[],this.xo=new Pm(this,"async_queue_retry"),this.jc=()=>{const n=$a();n&&ge("AsyncQueue","Visibility state changed to "+n.visibilityState),this.xo.bo()};const e=$a();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.jc)}get isShuttingDown(){return this.Lc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Wc(),this.zc(e)}enterRestrictedMode(e){if(!this.Lc){this.Lc=!0,this.Gc=e||!1;const n=$a();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.jc)}}enqueue(e){if(this.Wc(),this.Lc)return new Promise(()=>{});const n=new _s;return this.zc(()=>this.Lc&&this.Gc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Bc.push(e),this.Hc()))}async Hc(){if(this.Bc.length!==0){try{await this.Bc[0](),this.Bc.shift(),this.xo.reset()}catch(e){if(!Er(e))throw e;ge("AsyncQueue","Operation failed with retryable error: "+e)}this.Bc.length>0&&this.xo.Ao(()=>this.Hc())}}zc(e){const n=this.$c.then(()=>(this.Kc=!0,e().catch(s=>{this.qc=s,this.Kc=!1;const i=function(r){let o=r.message||"";return r.stack&&(o=r.stack.includes(r.message)?r.stack:r.message+`
`+r.stack),o}(s);throw Zn("INTERNAL UNHANDLED ERROR: ",i),s}).then(s=>(this.Kc=!1,s))));return this.$c=n,n}enqueueAfterDelay(e,n,s){this.Wc(),this.Qc.indexOf(e)>-1&&(n=0);const i=bc.createAndSchedule(this,e,n,s,r=>this.Jc(r));return this.Uc.push(i),i}Wc(){this.qc&&De()}verifyOperationInProgress(){}async Yc(){let e;do e=this.$c,await e;while(e!==this.$c)}Xc(e){for(const n of this.Uc)if(n.timerId===e)return!0;return!1}Zc(e){return this.Yc().then(()=>{this.Uc.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.Uc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Yc()})}ta(e){this.Qc.push(e)}Jc(e){const n=this.Uc.indexOf(e);this.Uc.splice(n,1)}}class Cr extends Ic{constructor(e,n,s,i){super(e,n,s,i),this.type="firestore",this._queue=new Iw,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Wm(this),this._firestoreClient.terminate()}}function Sw(t,e){const n=typeof t=="object"?t:Wd(),s=typeof t=="string"?t:e||"(default)";return Fl(n,"firestore").getImmediate({identifier:s})}function Km(t){return t._firestoreClient||Wm(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function Wm(t){var e;const n=t._freezeSettings(),s=function(i,r,o,a){return new n1(i,r,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new _w(t._authCredentials,t._appCheckCredentials,t._queue,s)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sa{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new Ee(X.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new un(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gi{constructor(e){this._byteString=e}static fromBase64String(e){try{return new gi(sn.fromBase64String(e))}catch(n){throw new Ee(X.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new gi(sn.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sc{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cc{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new Ee(X.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new Ee(X.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return et(this._lat,e._lat)||et(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cw=/^__.*__$/;class Aw{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return this.fieldMask!==null?new Ss(e,this.data,this.fieldMask,n,this.fieldTransforms):new Tr(e,this.data,n,this.fieldTransforms)}}class Qm{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return new Ss(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function Ym(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw De()}}class Ac{constructor(e,n,s,i,r,o){this.settings=e,this.databaseId=n,this.It=s,this.ignoreUndefinedProperties=i,r===void 0&&this.ea(),this.fieldTransforms=r||[],this.fieldMask=o||[]}get path(){return this.settings.path}get na(){return this.settings.na}sa(e){return new Ac(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.It,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ia(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.sa({path:s,ra:!1});return i.oa(e),i}ua(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.sa({path:s,ra:!1});return i.ea(),i}ca(e){return this.sa({path:void 0,ra:!0})}aa(e){return bo(e,this.settings.methodName,this.settings.ha||!1,this.path,this.settings.la)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}ea(){if(this.path)for(let e=0;e<this.path.length;e++)this.oa(this.path.get(e))}oa(e){if(e.length===0)throw this.aa("Document fields must not be empty");if(Ym(this.na)&&Cw.test(e))throw this.aa('Document fields cannot begin and end with "__"')}}class Pw{constructor(e,n,s){this.databaseId=e,this.ignoreUndefinedProperties=n,this.It=s||Zo(e)}fa(e,n,s,i=!1){return new Ac({na:e,methodName:n,la:s,path:un.emptyPath(),ra:!1,ha:i},this.databaseId,this.It,this.ignoreUndefinedProperties)}}function Xm(t){const e=t._freezeSettings(),n=Zo(t._databaseId);return new Pw(t._databaseId,!!e.ignoreUndefinedProperties,n)}function Dw(t,e,n,s,i,r={}){const o=t.fa(r.merge||r.mergeFields?2:0,e,n,i);Pc("Data must be an object, but it was:",o,s);const a=Jm(s,o);let l,c;if(r.merge)l=new Dn(o.fieldMask),c=o.fieldTransforms;else if(r.mergeFields){const h=[];for(const f of r.mergeFields){const d=yl(e,f,n);if(!o.contains(d))throw new Ee(X.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);Zm(h,d)||h.push(d)}l=new Dn(h),c=o.fieldTransforms.filter(f=>l.covers(f.field))}else l=null,c=o.fieldTransforms;return new Aw(new wn(a),l,c)}class ia extends Sc{_toFieldTransform(e){if(e.na!==2)throw e.na===1?e.aa(`${this._methodName}() can only appear at the top level of your update data`):e.aa(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof ia}}function Rw(t,e,n,s){const i=t.fa(1,e,n);Pc("Data must be an object, but it was:",i,s);const r=[],o=wn.empty();Gs(s,(l,c)=>{const h=Dc(e,l,n);c=On(c);const f=i.ua(h);if(c instanceof ia)r.push(h);else{const d=ra(c,f);d!=null&&(r.push(h),o.set(h,d))}});const a=new Dn(r);return new Qm(o,a,i.fieldTransforms)}function Ow(t,e,n,s,i,r){const o=t.fa(1,e,n),a=[yl(e,s,n)],l=[i];if(r.length%2!=0)throw new Ee(X.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<r.length;d+=2)a.push(yl(e,r[d])),l.push(r[d+1]);const c=[],h=wn.empty();for(let d=a.length-1;d>=0;--d)if(!Zm(c,a[d])){const g=a[d];let _=l[d];_=On(_);const v=o.ua(g);if(_ instanceof ia)c.push(g);else{const I=ra(_,v);I!=null&&(c.push(g),h.set(g,I))}}const f=new Dn(c);return new Qm(h,f,o.fieldTransforms)}function ra(t,e){if(xm(t=On(t)))return Pc("Unsupported field value:",e,t),Jm(t,e);if(t instanceof Sc)return function(n,s){if(!Ym(s.na))throw s.aa(`${n._methodName}() can only be used with update() and set()`);if(!s.path)throw s.aa(`${n._methodName}() is not currently supported inside arrays`);const i=n._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.ra&&e.na!==4)throw e.aa("Nested arrays are not supported");return function(n,s){const i=[];let r=0;for(const o of n){let a=ra(o,s.ca(r));a==null&&(a={nullValue:"NULL_VALUE"}),i.push(a),r++}return{arrayValue:{values:i}}}(t,e)}return function(n,s){if((n=On(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return w1(s.It,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const i=Ft.fromDate(n);return{timestampValue:vo(s.It,i)}}if(n instanceof Ft){const i=new Ft(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:vo(s.It,i)}}if(n instanceof Cc)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof gi)return{bytesValue:Em(s.It,n._byteString)};if(n instanceof Rn){const i=s.databaseId,r=n.firestore._databaseId;if(!r.isEqual(i))throw s.aa(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:fc(n.firestore._databaseId||s.databaseId,n._key.path)}}throw s.aa(`Unsupported field value: ${kc(n)}`)}(t,e)}function Jm(t,e){const n={};return Zp(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Gs(t,(s,i)=>{const r=ra(i,e.ia(s));r!=null&&(n[s]=r)}),{mapValue:{fields:n}}}function xm(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Ft||t instanceof Cc||t instanceof gi||t instanceof Rn||t instanceof Sc)}function Pc(t,e,n){if(!xm(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const s=kc(n);throw s==="an object"?e.aa(t+" a custom object"):e.aa(t+" "+s)}}function yl(t,e,n){if((e=On(e))instanceof sa)return e._internalPath;if(typeof e=="string")return Dc(t,e);throw bo("Field path arguments must be of type string or ",t,!1,void 0,n)}const Nw=new RegExp("[~\\*/\\[\\]]");function Dc(t,e,n){if(e.search(Nw)>=0)throw bo(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new sa(...e.split("."))._internalPath}catch{throw bo(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function bo(t,e,n,s,i){const r=s&&!s.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(r||o)&&(l+=" (found",r&&(l+=` in field ${s}`),o&&(l+=` in document ${i}`),l+=")"),new Ee(X.INVALID_ARGUMENT,a+t+l)}function Zm(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eg{constructor(e,n,s,i,r){this._firestore=e,this._userDataWriter=n,this._key=s,this._document=i,this._converter=r}get id(){return this._key.path.lastSegment()}get ref(){return new Rn(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new Lw(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(tg("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class Lw extends eg{data(){return super.data()}}function tg(t,e){return typeof e=="string"?Dc(t,e):e instanceof sa?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vr{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Mw extends eg{constructor(e,n,s,i,r,o){super(e,n,s,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=r}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Wr(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const s=this._document.data.field(tg("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}}class Wr extends Mw{data(e={}){return super.data(e)}}class $w{constructor(e,n,s,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new Vr(i.hasPendingWrites,i.fromCache),this.query=s}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(s=>{e.call(n,new Wr(this._firestore,this._userDataWriter,s.key,s,new Vr(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new Ee(X.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let r=0;return s._snapshot.docChanges.map(o=>({type:"added",doc:new Wr(s._firestore,s._userDataWriter,o.doc.key,o.doc,new Vr(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter),oldIndex:-1,newIndex:r++}))}{let r=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(o=>i||o.type!==3).map(o=>{const a=new Wr(s._firestore,s._userDataWriter,o.doc.key,o.doc,new Vr(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);let l=-1,c=-1;return o.type!==0&&(l=r.indexOf(o.doc.key),r=r.delete(o.doc.key)),o.type!==1&&(r=r.add(o.doc),c=r.indexOf(o.doc.key)),{type:Fw(o.type),doc:a,oldIndex:l,newIndex:c}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function Fw(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return De()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uw(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new Ee(X.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bw{convertValue(e,n="none"){switch(qs(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Dt(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(hi(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw De()}}convertObject(e,n){const s={};return Gs(e.fields,(i,r)=>{s[i]=this.convertValue(r,n)}),s}convertGeoPoint(e){return new Cc(Dt(e.latitude),Dt(e.longitude))}convertArray(e,n){return(e.values||[]).map(s=>this.convertValue(s,n))}convertServerTimestamp(e,n){switch(n){case"previous":const s=tm(e);return s==null?null:this.convertValue(s,n);case"estimate":return this.convertTimestamp(Ji(e));default:return null}}convertTimestamp(e){const n=Es(e);return new Ft(n.seconds,n.nanos)}convertDocumentKey(e,n){const s=yt.fromString(e);ft(Sm(s));const i=new xi(s.get(1),s.get(3)),r=new ye(s.popFirst(5));return i.isEqual(n)||Zn(`Document ${r} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vw(t,e,n){let s;return s=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,s}class jw extends Bw{constructor(e){super(),this.firestore=e}convertBytes(e){return new gi(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Rn(this.firestore,null,n)}}function oa(t){t=mi(t,na);const e=mi(t.firestore,Cr),n=Km(e),s=new jw(e);return Uw(t._query),Tw(n,t._query).then(i=>new $w(e,s,t,i))}function aa(t,e,n,...s){t=mi(t,Rn);const i=mi(t.firestore,Cr),r=Xm(i);let o;return o=typeof(e=On(e))=="string"||e instanceof sa?Ow(r,"updateDoc",t._key,e,n,s):Rw(r,"updateDoc",t._key,e),Rc(i,[o.toMutation(t._key,$n.exists(!0))])}function la(t){return Rc(mi(t.firestore,Cr),[new hc(t._key,$n.none())])}function _i(t,e){const n=mi(t.firestore,Cr),s=ns(t),i=Vw(t.converter,e);return Rc(n,[Dw(Xm(t.firestore),"addDoc",s._key,i,t.converter!==null,{}).toMutation(s._key,$n.exists(!1))]).then(()=>s)}function Rc(t,e){return function(n,s){const i=new _s;return n.asyncQueue.enqueueAndForget(async()=>rw(await ww(n),s,i)),i.promise}(Km(t),e)}(function(t,e=!0){(function(n){Ei=n})(hr),li(new Us("firestore",(n,{instanceIdentifier:s,options:i})=>{const r=n.getProvider("app").getImmediate(),o=new Cr(new H0(n.getProvider("auth-internal")),new W0(n.getProvider("app-check-internal")),function(a,l){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new Ee(X.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new xi(a.options.projectId,l)}(r,s),r);return i=Object.assign({useFetchStreams:e},i),o._setSettings(i),o},"PUBLIC").setMultipleInstances(!0)),gs(Tu,"3.5.0",t),gs(Tu,"3.5.0","esm2017")})();function Oc(t,e){var n={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&e.indexOf(s)<0&&(n[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,s=Object.getOwnPropertySymbols(t);i<s.length;i++)e.indexOf(s[i])<0&&Object.prototype.propertyIsEnumerable.call(t,s[i])&&(n[s[i]]=t[s[i]]);return n}function ng(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const qw=ng,sg=new cr("auth","Firebase",ng());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eh=new Ml("@firebase/auth");function Qr(t,...e){eh.logLevel<=Je.ERROR&&eh.error(`Auth (${hr}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ss(t,...e){throw Nc(t,...e)}function Bn(t,...e){return Nc(t,...e)}function Hw(t,e,n){const s=Object.assign(Object.assign({},qw()),{[e]:n});return new cr("auth","Firebase",s).create(e,{appName:t.name})}function Nc(t,...e){if(typeof t!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=t.name),t._errorFactory.create(n,...s)}return sg.create(t,...e)}function Pe(t,e,...n){if(!t)throw Nc(e,...n)}function Wn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Qr(e),new Error(e)}function is(t,e){t||Wn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const th=new Map;function Qn(t){is(t instanceof Function,"Expected a class definition");let e=th.get(t);return e?(is(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,th.set(t,e),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zw(t,e){const n=Fl(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),r=n.getOptions();if(so(r,e!=null?e:{}))return i;ss(i,"already-initialized")}return n.initialize({options:e})}function Gw(t,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(Qn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bl(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function Kw(){return nh()==="http:"||nh()==="https:"}function nh(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ww(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Kw()||yv()||"connection"in navigator)?navigator.onLine:!0}function Qw(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ar{constructor(e,n){this.shortDelay=e,this.longDelay=n,is(n>e,"Short delay should be less than long delay!"),this.isMobile=vv()||bv()}get(){return Ww()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lc(t,e){is(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ig{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;Wn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;Wn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;Wn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yw={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xw=new Ar(3e4,6e4);function Jw(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function ca(t,e,n,s,i={}){return rg(t,i,async()=>{let r={},o={};s&&(e==="GET"?o=s:r={body:JSON.stringify(s)});const a=ur(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),ig.fetch()(og(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},r))})}async function rg(t,e,n){t._canInitEmulator=!1;const s=Object.assign(Object.assign({},Yw),e);try{const i=new Zw(t),r=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw jr(t,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const a=r.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw jr(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw jr(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw jr(t,"user-disabled",o);const h=s[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw Hw(t,h,c);ss(t,h)}}catch(i){if(i instanceof rs)throw i;ss(t,"network-request-failed")}}async function xw(t,e,n,s,i={}){const r=await ca(t,e,n,s,i);return"mfaPendingCredential"in r&&ss(t,"multi-factor-auth-required",{_serverResponse:r}),r}function og(t,e,n,s){const i=`${e}${n}?${s}`;return t.config.emulator?Lc(t.config,i):`${t.config.apiScheme}://${i}`}class Zw{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(Bn(this.auth,"network-request-failed")),Xw.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function jr(t,e,n){const s={appName:t.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const i=Bn(t,e,s);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function eE(t,e){return ca(t,"POST","/v1/accounts:delete",e)}async function tE(t,e){return ca(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qi(t){if(!!t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function nE(t,e=!1){const n=On(t),s=await n.getIdToken(e),i=Mc(s);Pe(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const r=typeof i.firebase=="object"?i.firebase:void 0,o=r==null?void 0:r.sign_in_provider;return{claims:i,token:s,authTime:qi(Fa(i.auth_time)),issuedAtTime:qi(Fa(i.iat)),expirationTime:qi(Fa(i.exp)),signInProvider:o||null,signInSecondFactor:(r==null?void 0:r.sign_in_second_factor)||null}}function Fa(t){return Number(t)*1e3}function Mc(t){var e;const[n,s,i]=t.split(".");if(n===void 0||s===void 0||i===void 0)return Qr("JWT malformed, contained fewer than 3 sections"),null;try{const r=gv(s);return r?JSON.parse(r):(Qr("Failed to decode base64 JWT payload"),null)}catch(r){return Qr("Caught error parsing JWT payload as JSON",(e=r)===null||e===void 0?void 0:e.toString()),null}}function sE(t){const e=Mc(t);return Pe(e,"internal-error"),Pe(typeof e.exp<"u","internal-error"),Pe(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sr(t,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof rs&&iE(s)&&t.auth.currentUser===t&&await t.auth.signOut(),s}}function iE({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rE{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){var e;try{await this.user.getIdToken(!0)}catch(n){((e=n)===null||e===void 0?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ag{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=qi(this.lastLoginAt),this.creationTime=qi(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wo(t){var e;const n=t.auth,s=await t.getIdToken(),i=await sr(t,tE(n,{idToken:s}));Pe(i==null?void 0:i.users.length,n,"internal-error");const r=i.users[0];t._notifyReloadListener(r);const o=!((e=r.providerUserInfo)===null||e===void 0)&&e.length?lE(r.providerUserInfo):[],a=aE(t.providerData,o),l=t.isAnonymous,c=!(t.email&&r.passwordHash)&&!(a!=null&&a.length),h=l?c:!1,f={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:a,metadata:new ag(r.createdAt,r.lastLoginAt),isAnonymous:h};Object.assign(t,f)}async function oE(t){const e=On(t);await wo(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function aE(t,e){return[...t.filter(s=>!e.some(i=>i.providerId===s.providerId)),...e]}function lE(t){return t.map(e=>{var{providerId:n}=e,s=Oc(e,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cE(t,e){const n=await rg(t,{},async()=>{const s=ur({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:r}=t.config,o=og(t,i,"/v1/token",`key=${r}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",ig.fetch()(o,{method:"POST",headers:a,body:s})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ir{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Pe(e.idToken,"internal-error"),Pe(typeof e.idToken<"u","internal-error"),Pe(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):sE(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return Pe(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:i,expiresIn:r}=await cE(e,n);this.updateTokensAndExpiration(s,i,Number(r))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:i,expirationTime:r}=n,o=new ir;return s&&(Pe(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),i&&(Pe(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),r&&(Pe(typeof r=="number","internal-error",{appName:e}),o.expirationTime=r),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ir,this.toJSON())}_performRefresh(){return Wn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function as(t,e){Pe(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Ls{constructor(e){var{uid:n,auth:s,stsTokenManager:i}=e,r=Oc(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new rE(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new ag(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const n=await sr(this,this.stsTokenManager.getToken(this.auth,e));return Pe(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return nE(this,e)}reload(){return oE(this)}_assign(e){this!==e&&(Pe(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new Ls(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){Pe(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await wo(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await sr(this,eE(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var s,i,r,o,a,l,c,h;const f=(s=n.displayName)!==null&&s!==void 0?s:void 0,d=(i=n.email)!==null&&i!==void 0?i:void 0,g=(r=n.phoneNumber)!==null&&r!==void 0?r:void 0,_=(o=n.photoURL)!==null&&o!==void 0?o:void 0,v=(a=n.tenantId)!==null&&a!==void 0?a:void 0,I=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,S=(c=n.createdAt)!==null&&c!==void 0?c:void 0,P=(h=n.lastLoginAt)!==null&&h!==void 0?h:void 0,{uid:N,emailVerified:$,isAnonymous:L,providerData:V,stsTokenManager:O}=n;Pe(N&&O,e,"internal-error");const W=ir.fromJSON(this.name,O);Pe(typeof N=="string",e,"internal-error"),as(f,e.name),as(d,e.name),Pe(typeof $=="boolean",e,"internal-error"),Pe(typeof L=="boolean",e,"internal-error"),as(g,e.name),as(_,e.name),as(v,e.name),as(I,e.name),as(S,e.name),as(P,e.name);const D=new Ls({uid:N,auth:e,email:d,emailVerified:$,displayName:f,isAnonymous:L,photoURL:_,phoneNumber:g,tenantId:v,stsTokenManager:W,createdAt:S,lastLoginAt:P});return V&&Array.isArray(V)&&(D.providerData=V.map(R=>Object.assign({},R))),I&&(D._redirectEventId=I),D}static async _fromIdTokenResponse(e,n,s=!1){const i=new ir;i.updateFromServerResponse(n);const r=new Ls({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:s});return await wo(r),r}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lg{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}lg.type="NONE";const sh=lg;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yr(t,e,n){return`firebase:${t}:${e}:${n}`}class si{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:i,name:r}=this.auth;this.fullUserKey=Yr(this.userKey,i.apiKey,r),this.fullPersistenceKey=Yr("persistence",i.apiKey,r),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Ls._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new si(Qn(sh),e,s);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let r=i[0]||Qn(sh);const o=Yr(s,e.config.apiKey,e.name);let a=null;for(const c of n)try{const h=await c._get(o);if(h){const f=Ls._fromJSON(e,h);c!==r&&(a=f),r=c;break}}catch{}const l=i.filter(c=>c._shouldAllowMigration);return!r._shouldAllowMigration||!l.length?new si(r,e,s):(r=l[0],a&&await r._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==r)try{await c._remove(o)}catch{}})),new si(r,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ih(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(hg(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(cg(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(dg(e))return"Blackberry";if(pg(e))return"Webos";if($c(e))return"Safari";if((e.includes("chrome/")||ug(e))&&!e.includes("edge/"))return"Chrome";if(fg(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=t.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function cg(t=pn()){return/firefox\//i.test(t)}function $c(t=pn()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function ug(t=pn()){return/crios\//i.test(t)}function hg(t=pn()){return/iemobile/i.test(t)}function fg(t=pn()){return/android/i.test(t)}function dg(t=pn()){return/blackberry/i.test(t)}function pg(t=pn()){return/webos/i.test(t)}function ua(t=pn()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function uE(t=pn()){var e;return ua(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function hE(){return wv()&&document.documentMode===10}function mg(t=pn()){return ua(t)||fg(t)||pg(t)||dg(t)||/windows phone/i.test(t)||hg(t)}function fE(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gg(t,e=[]){let n;switch(t){case"Browser":n=ih(pn());break;case"Worker":n=`${ih(pn())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${hr}/${s}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dE{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=r=>new Promise((o,a)=>{try{const l=e(r);o(l)}catch(l){a(l)}});s.onAbort=n,this.queue.push(s);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){var n;if(this.auth.currentUser===e)return;const s=[];try{for(const i of this.queue)await i(e),i.onAbort&&s.push(i.onAbort)}catch(i){s.reverse();for(const r of s)try{r()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:(n=i)===null||n===void 0?void 0:n.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pE{constructor(e,n,s){this.app=e,this.heartbeatServiceProvider=n,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new rh(this),this.idTokenSubscription=new rh(this),this.beforeStateQueue=new dE(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=sg,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Qn(n)),this._initializationPromise=this.queue(async()=>{var s,i;if(!this._deleted&&(this.persistenceManager=await si.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const s=await this.assertedPersistence.getCurrentUser();let i=s,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l==null?void 0:l.user)&&(i=l.user,r=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return Pe(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){var n;try{await wo(e)}catch(s){if(((n=s)===null||n===void 0?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Qw()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?On(e):null;return n&&Pe(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&Pe(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Qn(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new cr("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Qn(e)||this._popupRedirectResolver;Pe(n,this,"argument-error"),this.redirectPersistenceManager=await si.create(this,[Qn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,i){if(this._deleted)return()=>{};const r=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return Pe(o,this,"internal-error"),o.then(()=>r(this.currentUser)),typeof n=="function"?e.addObserver(n,s,i):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Pe(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=gg(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return s&&(n["X-Firebase-Client"]=s),n}}function _g(t){return On(t)}class rh{constructor(e){this.auth=e,this.observer=null,this.addObserver=Av(n=>this.observer=n)}get next(){return Pe(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vg{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Wn("not implemented")}_getIdTokenResponse(e){return Wn("not implemented")}_linkToIdToken(e,n){return Wn("not implemented")}_getReauthenticationResolver(e){return Wn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ii(t,e){return xw(t,"POST","/v1/accounts:signInWithIdp",Jw(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mE="http://localhost";class Hs extends vg{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Hs(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):ss("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:i}=n,r=Oc(n,["providerId","signInMethod"]);if(!s||!i)return null;const o=new Hs(s,i);return o.idToken=r.idToken||void 0,o.accessToken=r.accessToken||void 0,o.secret=r.secret,o.nonce=r.nonce,o.pendingToken=r.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return ii(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,ii(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,ii(e,n)}buildRequest(){const e={requestUri:mE,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=ur(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yg{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pr extends yg{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class us extends Pr{constructor(){super("facebook.com")}static credential(e){return Hs._fromParams({providerId:us.PROVIDER_ID,signInMethod:us.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return us.credentialFromTaggedObject(e)}static credentialFromError(e){return us.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return us.credential(e.oauthAccessToken)}catch{return null}}}us.FACEBOOK_SIGN_IN_METHOD="facebook.com";us.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hs extends Pr{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Hs._fromParams({providerId:hs.PROVIDER_ID,signInMethod:hs.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return hs.credentialFromTaggedObject(e)}static credentialFromError(e){return hs.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return hs.credential(n,s)}catch{return null}}}hs.GOOGLE_SIGN_IN_METHOD="google.com";hs.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fs extends Pr{constructor(){super("github.com")}static credential(e){return Hs._fromParams({providerId:fs.PROVIDER_ID,signInMethod:fs.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return fs.credentialFromTaggedObject(e)}static credentialFromError(e){return fs.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return fs.credential(e.oauthAccessToken)}catch{return null}}}fs.GITHUB_SIGN_IN_METHOD="github.com";fs.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ds extends Pr{constructor(){super("twitter.com")}static credential(e,n){return Hs._fromParams({providerId:ds.PROVIDER_ID,signInMethod:ds.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return ds.credentialFromTaggedObject(e)}static credentialFromError(e){return ds.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return ds.credential(n,s)}catch{return null}}}ds.TWITTER_SIGN_IN_METHOD="twitter.com";ds.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vi{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,i=!1){const r=await Ls._fromIdTokenResponse(e,s,i),o=oh(s);return new vi({user:r,providerId:o,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const i=oh(s);return new vi({user:e,providerId:i,_tokenResponse:s,operationType:n})}}function oh(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eo extends rs{constructor(e,n,s,i){var r;super(n.code,n.message),this.operationType=s,this.user=i,Object.setPrototypeOf(this,Eo.prototype),this.customData={appName:e.name,tenantId:(r=e.tenantId)!==null&&r!==void 0?r:void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,i){return new Eo(e,n,s,i)}}function bg(t,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(r=>{throw r.code==="auth/multi-factor-auth-required"?Eo._fromErrorAndOperation(t,r,e,s):r})}async function gE(t,e,n=!1){const s=await sr(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return vi._forOperation(t,"link",s)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _E(t,e,n=!1){var s;const{auth:i}=t,r="reauthenticate";try{const o=await sr(t,bg(i,r,e,t),n);Pe(o.idToken,i,"internal-error");const a=Mc(o.idToken);Pe(a,i,"internal-error");const{sub:l}=a;return Pe(t.uid===l,i,"user-mismatch"),vi._forOperation(t,r,o)}catch(o){throw((s=o)===null||s===void 0?void 0:s.code)==="auth/user-not-found"&&ss(i,"user-mismatch"),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vE(t,e,n=!1){const s="signIn",i=await bg(t,s,e),r=await vi._fromIdTokenResponse(t,s,i);return n||await t._updateCurrentUser(r.user),r}const To="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wg{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(To,"1"),this.storage.removeItem(To),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yE(){const t=pn();return $c(t)||ua(t)}const bE=1e3,wE=10;class Eg extends wg{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=yE()&&fE(),this.fallbackToPolling=mg(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),i=this.localCache[n];s!==i&&e(n,i,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const s=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(s);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(s,e.newValue):this.storage.removeItem(s);else if(this.localCache[s]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(s);!n&&this.localCache[s]===o||this.notifyListeners(s,o)},r=this.storage.getItem(s);hE()&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,wE):i()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},bE)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Eg.type="LOCAL";const EE=Eg;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tg extends wg{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Tg.type="SESSION";const kg=Tg;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function TE(t){return Promise.all(t.map(async e=>{try{const n=await e;return{fulfilled:!0,value:n}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ha{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const s=new ha(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:i,data:r}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:i});const a=Array.from(o).map(async c=>c(n.origin,r)),l=await TE(a);n.ports[0].postMessage({status:"done",eventId:s,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ha.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fc(t="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kE{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let r,o;return new Promise((a,l)=>{const c=Fc("",20);i.port1.start();const h=setTimeout(()=>{l(new Error("unsupported_event"))},s);o={messageChannel:i,onMessage(f){const d=f;if(d.data.eventId===c)switch(d.data.status){case"ack":clearTimeout(h),r=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(r),a(d.data.response);break;default:clearTimeout(h),clearTimeout(r),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vn(){return window}function IE(t){Vn().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ig(){return typeof Vn().WorkerGlobalScope<"u"&&typeof Vn().importScripts=="function"}async function SE(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function CE(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function AE(){return Ig()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sg="firebaseLocalStorageDb",PE=1,ko="firebaseLocalStorage",Cg="fbase_key";class Dr{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function fa(t,e){return t.transaction([ko],e?"readwrite":"readonly").objectStore(ko)}function DE(){const t=indexedDB.deleteDatabase(Sg);return new Dr(t).toPromise()}function wl(){const t=indexedDB.open(Sg,PE);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const s=t.result;try{s.createObjectStore(ko,{keyPath:Cg})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const s=t.result;s.objectStoreNames.contains(ko)?e(s):(s.close(),await DE(),e(await wl()))})})}async function ah(t,e,n){const s=fa(t,!0).put({[Cg]:e,value:n});return new Dr(s).toPromise()}async function RE(t,e){const n=fa(t,!1).get(e),s=await new Dr(n).toPromise();return s===void 0?null:s.value}function lh(t,e){const n=fa(t,!0).delete(e);return new Dr(n).toPromise()}const OE=800,NE=3;class Ag{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await wl(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>NE)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Ig()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ha._getInstance(AE()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await SE(),!this.activeServiceWorker)return;this.sender=new kE(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);!s||((e=s[0])===null||e===void 0?void 0:e.fulfilled)&&((n=s[0])===null||n===void 0?void 0:n.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||CE()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await wl();return await ah(e,To,"1"),await lh(e,To),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>ah(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>RE(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>lh(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const r=fa(i,!1).getAll();return new Dr(r).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;for(const{fbase_key:i,value:r}of e)s.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(r)&&(this.notifyListeners(i,r),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!s.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),OE)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Ag.type="LOCAL";const LE=Ag;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ME(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function $E(t){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",t),s.onload=e,s.onerror=i=>{const r=Bn("internal-error");r.customData=i,n(r)},s.type="text/javascript",s.charset="UTF-8",ME().appendChild(s)})}function FE(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new Ar(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function UE(t,e){return e?Qn(e):(Pe(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uc extends vg{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ii(e,this._buildIdpRequest())}_linkToIdToken(e,n){return ii(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return ii(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function BE(t){return vE(t.auth,new Uc(t),t.bypassAuthState)}function VE(t){const{auth:e,user:n}=t;return Pe(n,e,"internal-error"),_E(n,new Uc(t),t.bypassAuthState)}async function jE(t){const{auth:e,user:n}=t;return Pe(n,e,"internal-error"),gE(n,new Uc(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pg{constructor(e,n,s,i,r=!1){this.auth=e,this.resolver=s,this.user=i,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:i,tenantId:r,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:s,tenantId:r||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return BE;case"linkViaPopup":case"linkViaRedirect":return jE;case"reauthViaPopup":case"reauthViaRedirect":return VE;default:ss(this.auth,"internal-error")}}resolve(e){is(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){is(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qE=new Ar(2e3,1e4);class Zs extends Pg{constructor(e,n,s,i,r){super(e,n,i,r),this.provider=s,this.authWindow=null,this.pollId=null,Zs.currentPopupAction&&Zs.currentPopupAction.cancel(),Zs.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Pe(e,this.auth,"internal-error"),e}async onExecution(){is(this.filter.length===1,"Popup operations only handle one event");const e=Fc();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Bn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Bn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Zs.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if(!((s=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Bn(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,qE.get())};e()}}Zs.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HE="pendingRedirect",Xr=new Map;class zE extends Pg{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=Xr.get(this.auth._key());if(!e){try{const s=await GE(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}Xr.set(this.auth._key(),e)}return this.bypassAuthState||Xr.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function GE(t,e){const n=QE(e),s=WE(t);if(!await s._isAvailable())return!1;const i=await s._get(n)==="true";return await s._remove(n),i}function KE(t,e){Xr.set(t._key(),e)}function WE(t){return Qn(t._redirectPersistence)}function QE(t){return Yr(HE,t.config.apiKey,t.name)}async function YE(t,e,n=!1){const s=_g(t),i=UE(s,e),o=await new zE(s,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XE=10*60*1e3;class JE{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!xE(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!Dg(e)){const i=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";n.onError(Bn(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=XE&&this.cachedEventUids.clear(),this.cachedEventUids.has(ch(e))}saveEventToCache(e){this.cachedEventUids.add(ch(e)),this.lastProcessedEventTime=Date.now()}}function ch(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Dg({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function xE(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Dg(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ZE(t,e={}){return ca(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eT=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,tT=/^https?/;async function nT(t){if(t.config.emulator)return;const{authorizedDomains:e}=await ZE(t);for(const n of e)try{if(sT(n))return}catch{}ss(t,"unauthorized-domain")}function sT(t){const e=bl(),{protocol:n,hostname:s}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&s===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===s}if(!tT.test(n))return!1;if(eT.test(t))return s===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(s)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iT=new Ar(3e4,6e4);function uh(){const t=Vn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function rT(t){return new Promise((e,n)=>{var s,i,r;function o(){uh(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{uh(),n(Bn(t,"network-request-failed"))},timeout:iT.get()})}if(!((i=(s=Vn().gapi)===null||s===void 0?void 0:s.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((r=Vn().gapi)===null||r===void 0)&&r.load)o();else{const a=FE("iframefcb");return Vn()[a]=()=>{gapi.load?o():n(Bn(t,"network-request-failed"))},$E(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw Jr=null,e})}let Jr=null;function oT(t){return Jr=Jr||rT(t),Jr}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aT=new Ar(5e3,15e3),lT="__/auth/iframe",cT="emulator/auth/iframe",uT={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},hT=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function fT(t){const e=t.config;Pe(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Lc(e,cT):`https://${t.config.authDomain}/${lT}`,s={apiKey:e.apiKey,appName:t.name,v:hr},i=hT.get(t.config.apiHost);i&&(s.eid=i);const r=t._getFrameworks();return r.length&&(s.fw=r.join(",")),`${n}?${ur(s).slice(1)}`}async function dT(t){const e=await oT(t),n=Vn().gapi;return Pe(n,t,"internal-error"),e.open({where:document.body,url:fT(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:uT,dontclear:!0},s=>new Promise(async(i,r)=>{await s.restyle({setHideOnLeave:!1});const o=Bn(t,"network-request-failed"),a=Vn().setTimeout(()=>{r(o)},aT.get());function l(){Vn().clearTimeout(a),i(s)}s.ping(l).then(l,()=>{r(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pT={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},mT=500,gT=600,_T="_blank",vT="http://localhost";class hh{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function yT(t,e,n,s=mT,i=gT){const r=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let a="";const l=Object.assign(Object.assign({},pT),{width:s.toString(),height:i.toString(),top:r,left:o}),c=pn().toLowerCase();n&&(a=ug(c)?_T:n),cg(c)&&(e=e||vT,l.scrollbars="yes");const h=Object.entries(l).reduce((d,[g,_])=>`${d}${g}=${_},`,"");if(uE(c)&&a!=="_self")return bT(e||"",a),new hh(null);const f=window.open(e||"",a,h);Pe(f,t,"popup-blocked");try{f.focus()}catch{}return new hh(f)}function bT(t,e){const n=document.createElement("a");n.href=t,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wT="__/auth/handler",ET="emulator/auth/handler";function fh(t,e,n,s,i,r){Pe(t.config.authDomain,t,"auth-domain-config-required"),Pe(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:s,v:hr,eventId:i};if(e instanceof yg){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Cv(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[l,c]of Object.entries(r||{}))o[l]=c}if(e instanceof Pr){const l=e.getScopes().filter(c=>c!=="");l.length>0&&(o.scopes=l.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const l of Object.keys(a))a[l]===void 0&&delete a[l];return`${TT(t)}?${ur(a).slice(1)}`}function TT({config:t}){return t.emulator?Lc(t,ET):`https://${t.authDomain}/${wT}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ua="webStorageSupport";class kT{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=kg,this._completeRedirectFn=YE,this._overrideRedirectResult=KE}async _openPopup(e,n,s,i){var r;is((r=this.eventManagers[e._key()])===null||r===void 0?void 0:r.manager,"_initialize() not called before _openPopup()");const o=fh(e,n,s,bl(),i);return yT(e,o,Fc())}async _openRedirect(e,n,s,i){return await this._originValidation(e),IE(fh(e,n,s,bl(),i)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:r}=this.eventManagers[n];return i?Promise.resolve(i):(is(r,"If manager is not set, promise should be"),r)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await dT(e),s=new JE(e);return n.register("authEvent",i=>(Pe(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:s.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Ua,{type:Ua},i=>{var r;const o=(r=i==null?void 0:i[0])===null||r===void 0?void 0:r[Ua];o!==void 0&&n(!!o),ss(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=nT(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return mg()||$c()||ua()}}const IT=kT;var dh="@firebase/auth",ph="0.20.7";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ST{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{var i;e(((i=s)===null||i===void 0?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);!n||(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){Pe(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function CT(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function AT(t){li(new Us("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),{apiKey:r,authDomain:o}=s.options;return((a,l)=>{Pe(r&&!r.includes(":"),"invalid-api-key",{appName:a.name}),Pe(!(o!=null&&o.includes(":")),"argument-error",{appName:a.name});const c={apiKey:r,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:gg(t)},h=new pE(a,l,c);return Gw(h,n),h})(s,i)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),li(new Us("auth-internal",e=>{const n=_g(e.getProvider("auth").getImmediate());return(s=>new ST(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),gs(dh,ph,CT(t)),gs(dh,ph,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function PT(t=Wd()){const e=Fl(t,"auth");return e.isInitialized()?e.getImmediate():zw(t,{popupRedirectResolver:IT,persistence:[LE,EE,kg]})}AT("Browser");let yi=[],Mn=[],da=[];const DT={apiKey:"AIzaSyDGi3ndUC1b4SFNstliSSVryu7_ymXEkZc",authDomain:"match-home-7d1f9.firebaseapp.com",projectId:"match-home-7d1f9",storageBucket:"match-home-7d1f9.appspot.com",messagingSenderId:"747751099607",appId:"1:747751099607:web:29d1e5beda87c847dfb492"},Rg=Cy(DT),Kt=Sw(Rg);PT(Rg);const RT=Hn(Kt,"binnacles"),OT=Hn(Kt,"contacts"),NT=Hn(Kt,"properties"),LT=Hn(Kt,"todos");oa(RT).then(t=>t.docs.map(e=>({...e.data(),id:e.id})));oa(OT).then(t=>yi=t.docs.map(e=>({...e.data(),id:e.id})));oa(NT).then(t=>Mn=t.docs.map(e=>({...e.data(),id:e.id})));oa(LT).then(t=>da=t.docs.map(e=>({...e.data(),id:e.id})));const MT={contacts:[{typeContact:"Comprador",name:"Enrique",lastname:"Marines",telephon:"6145404003",email:"emarines@live.com.mx",selecMC:"Lona en Propiedad",propCont:"Lomas del Santuario Jma",comContact:"Busca casa de 4 recamaras",rangeProp:"qnt",contMode:"WA",budget:"",numBeds:3,numBaths:3,halfBathroom:0,numParks:2,modePay:"Contado",selecTP:"Departamento",contactType:"Lona en Propiedad",createdAt:"1634402554000",contactStage:"Etapa 4",locaProperty:["Oeste","Sur","Centro Norte"],tagsProperty:[],sendedProperties:["EB-GY0449"]},{name:"Sebasti\xE1n",lastname:"Marines",telephon:"6145404003",email:"emarines@live.com.mx",selecMC:"Lona en Propiedad",propCont:"Lomas del Santuario Jma",comContact:"Busca casa de 4 recamaras",rangeProp:"qnt",contMode:"WA",budget:"10000000",numBeds:"3",numBaths:"2",halfBathroom:"1",numParks:"2",modePay:"",selecTP:"Casa",contactType:"",createdAt:"1634402554000",contactStage:"Etapa3",locaProperty:[],tagsProperty:["Frente a Parque"],sendedProperties:["EB-GY0449"]},{name:"Ricardo",lastname:"Marines",telephon:"6145404003",email:"emarines@live.com.mx",selecMC:"Lona en Propiedad",propCont:"Lomas del Santuario Jma",comContact:"Busca casa de 4 recamaras",rangeProp:"crt",contMode:"WA",budget:"10000000",numBeds:"3",numBaths:"2",halfBathroom:"1",numParks:"2",modePay:"",selecTP:"Casa",contactType:"",createdAt:"1634402554000",contactStage:"Etapa2",locaProperty:[],tagsProperty:[],sendedProperties:["EB-GY0449"]},{name:"Fernando",lastname:"Marines",telephon:"6145404003",email:"emarines@live.com.mx",selecMC:"Lona en Propiedad",propCont:"Lomas del Santuario Jma",comContact:"Busca casa de 4 recamaras",rangeProp:"crt",contMode:"WA",budget:"8500000",numBeds:"3",numBaths:"2",halfBathroom:"1",numParks:"2",modePay:"",selecTP:"Casa",contactType:"",createdAt:"1634402554000",contactStage:"Etapa1",locaProperty:["Oeste","Centro Norte"],tagsProperty:["Frente a Parque"],sendedProperties:[]}],properties:[{typeProperty:"Departamento",rangeProp:"qnt",claveEB:"EB-LD0738",claveMH:"EB-LD0738",nameProperty:"San Felipe Ema",price:"10000000",beds:"3",bathroom:"3",halfBathroom:"1",park:"2",areaBuilding:"300",areaTotal:"306",description:"Descripci\xF3n En fracc. privado , de mucha plusval\xEDa , con v\xEDas de acceso r\xE1pidas . La casa consta de :  PLANTA BAJA : recibidor , 1/2 ba\xF1o con granito y espejo , sala ,comedor,cocina con granito y desayunador , lavander\xEDa ,cochera para 2 autos ,escalera de cristal templado, preparaci\xF3n para cuarto de servicio, jard\xEDn, terraza con cantera.  PLANTA ALTA: Estancia, closet de blancos , rec\xE1mara principal con duela , ba\xF1o y vestidor , cubierta de granito,cancel y espejo. 2 rec\xE1maras individuales con ba\xF1o completo y cubiertas de granito.  EQUIPAMIENTO: ladrillo t\xE9rmico, acabado de fachada en recinto, escalones de acceso de cantera , piso de porcelanto importado ,ventaner\xEDa de doble vidrio , llaves y muebles de ba\xF1os importados, 2 equipos de aire acondicionado y calefacci\xF3n , tanque estacionario de 500 lts. ,aljibe con hidroneum\xE1tico , boiler, riego automatizado , carpinter\xEDa de encino , cocina integral con granito ,cochera el\xE9ctrica de herrer\xEDa, impermeabilizada . Caracter\xEDsticas Exterior Balc\xF3n Cisterna Estacionamiento techado Facilidad para estacionarse Jard\xEDn General Aire acondicionado Cocina equipada Cocina integral Cuarto de servicio Fraccionamiento privado Seguridad 24 horas Restricciones Mascotas permitidas Permitido fumar",urlImage:"https://assets.easybroker.com/property_images/3160738/50581765/medium_EB-LD0738.jpg?version=1659487541",urlProp:"https://assets.easybroker.com/property_images/3160738/50581765/medium_EB-LD0738.jpg?version=1659487541",urlSinergy:"",colonia:"San Felipe",selectTP:"Departamento",selecTO:"Venta",tagsProperty:[],locaProperty:["Centro Norte"]},{typeProperty:"Departamento",rangeProp:"qnt",claveEB:"EB-KS7661",claveMH:"EB-KS7661",nameProperty:"Lomas del Santuario Jma",price:"9500000",beds:"4",bathroom:"3",halfBathroom:"1",park:"2",areaBuilding:"300",areaTotal:"306",description:"Descripci\xF3n En fracc. privado , de mucha plusval\xEDa , con v\xEDas de acceso r\xE1pidas . La casa consta de :  PLANTA BAJA : recibidor , 1/2 ba\xF1o con granito y espejo , sala ,comedor,cocina con granito y desayunador , lavander\xEDa ,cochera para 2 autos ,escalera de cristal templado, preparaci\xF3n para cuarto de servicio, jard\xEDn, terraza con cantera.  PLANTA ALTA: Estancia, closet de blancos , rec\xE1mara principal con duela , ba\xF1o y vestidor , cubierta de granito,cancel y espejo. 2 rec\xE1maras individuales con ba\xF1o completo y cubiertas de granito.  EQUIPAMIENTO: ladrillo t\xE9rmico, acabado de fachada en recinto, escalones de acceso de cantera , piso de porcelanto importado ,ventaner\xEDa de doble vidrio , llaves y muebles de ba\xF1os importados, 2 equipos de aire acondicionado y calefacci\xF3n , tanque estacionario de 500 lts. ,aljibe con hidroneum\xE1tico , boiler, riego automatizado , carpinter\xEDa de encino , cocina integral con granito ,cochera el\xE9ctrica de herrer\xEDa, impermeabilizada . Caracter\xEDsticas Exterior Balc\xF3n Cisterna Estacionamiento techado Facilidad para estacionarse Jard\xEDn General Aire acondicionado Cocina equipada Cocina integral Cuarto de servicio Fraccionamiento privado Seguridad 24 horas Restricciones Mascotas permitidas Permitido fumar",urlImage:"https://assets.easybroker.com/property_images/3057661/48771301/medium_EB-KS7661.jpg?version=1655838715",urlProp:"https://assets.easybroker.com/property_images/3057661/48771301/medium_EB-KS7661.jpg?version=1655838715",urlSinergy:"",colonia:"Lomas del Santuario",selectTP:"Departamento",selecTO:"Venta",tagsProperty:[],locaProperty:["Centro Sur"]},{typeProperty:"Casa",claveEB:"EB-GY0449",claveMH:"EB-GY0449",nameProperty:"Pedregal de San Angel Ema",price:"8000000",beds:"3",bathroom:"3",halfBathroom:"1",park:"2",areaBuilding:"300",areaTotal:"306",description:"Descripci\xF3n En fracc. privado , de mucha plusval\xEDa , con v\xEDas de acceso r\xE1pidas . La casa consta de :  PLANTA BAJA : recibidor , 1/2 ba\xF1o con granito y espejo , sala ,comedor,cocina con granito y desayunador , lavander\xEDa ,cochera para 2 autos ,escalera de cristal templado, preparaci\xF3n para cuarto de servicio, jard\xEDn, terraza con cantera.  PLANTA ALTA: Estancia, closet de blancos , rec\xE1mara principal con duela , ba\xF1o y vestidor , cubierta de granito,cancel y espejo. 2 rec\xE1maras individuales con ba\xF1o completo y cubiertas de granito.  EQUIPAMIENTO: ladrillo t\xE9rmico, acabado de fachada en recinto, escalones de acceso de cantera , piso de porcelanto importado ,ventaner\xEDa de doble vidrio , llaves y muebles de ba\xF1os importados, 2 equipos de aire acondicionado y calefacci\xF3n , tanque estacionario de 500 lts. ,aljibe con hidroneum\xE1tico , boiler, riego automatizado , carpinter\xEDa de encino , cocina integral con granito ,cochera el\xE9ctrica de herrer\xEDa, impermeabilizada . Caracter\xEDsticas Exterior Balc\xF3n Cisterna Estacionamiento techado Facilidad para estacionarse Jard\xEDn General Aire acondicionado Cocina equipada Cocina integral Cuarto de servicio Fraccionamiento privado Seguridad 24 horas Restricciones Mascotas permitidas Permitido fumar",urlImage:"https://assets.easybroker.com/property_images/2070449/31775297/EB-GY0449.jpg?version=1614886308",urlProp:"https://assets.easybroker.com/property_images/2070449/31775297/EB-GY0449.jpg?version=1614886308",urlSinergy:"",colonia:"Pedregal de San Angel",selectTP:"Casa",selecTO:"Venta",tagsProperty:["Fracc. Privado","Frente a Parque"],locaProperty:["Centro Norte"]},{typeProperty:"Casa",claveEB:"EB-GY0449",claveMH:"EB-GY0449",nameProperty:"Pedregal de San Angel Jsa",price:"8000000",beds:"4",bathroom:"4",halfBathroom:"1",park:"2",areaBuilding:"300",areaTotal:"306",description:"Descripci\xF3n En fracc. privado , de mucha plusval\xEDa , con v\xEDas de acceso r\xE1pidas . La casa consta de :  PLANTA BAJA : recibidor , 1/2 ba\xF1o con granito y espejo , sala ,comedor,cocina con granito y desayunador , lavander\xEDa ,cochera para 2 autos ,escalera de cristal templado, preparaci\xF3n para cuarto de servicio, jard\xEDn, terraza con cantera.  PLANTA ALTA: Estancia, closet de blancos , rec\xE1mara principal con duela , ba\xF1o y vestidor , cubierta de granito,cancel y espejo. 2 rec\xE1maras individuales con ba\xF1o completo y cubiertas de granito.  EQUIPAMIENTO: ladrillo t\xE9rmico, acabado de fachada en recinto, escalones de acceso de cantera , piso de porcelanto importado ,ventaner\xEDa de doble vidrio , llaves y muebles de ba\xF1os importados, 2 equipos de aire acondicionado y calefacci\xF3n , tanque estacionario de 500 lts. ,aljibe con hidroneum\xE1tico , boiler, riego automatizado , carpinter\xEDa de encino , cocina integral con granito ,cochera el\xE9ctrica de herrer\xEDa, impermeabilizada . Caracter\xEDsticas Exterior Balc\xF3n Cisterna Estacionamiento techado Facilidad para estacionarse Jard\xEDn General Aire acondicionado Cocina equipada Cocina integral Cuarto de servicio Fraccionamiento privado Seguridad 24 horas Restricciones Mascotas permitidas Permitido fumar",urlImage:"https://assets.easybroker.com/property_images/2070449/31775297/EB-GY0449.jpg?version=1614886308",urlProp:"https://assets.easybroker.com/property_images/2070449/31775297/EB-GY0449.jpg?version=1614886308",urlSinergy:"",colonia:"Pedregal de San Angel",selectTP:"Casa",selecTO:"Venta",tagsProperty:["Fracc. Privado","Frente a Parque"],locaProperty:["Oeste"]},{typeProperty:"Casa",claveEB:"EB-GY0449",claveMH:"EB-GY0449",nameProperty:"Quintas del Sol Ema",price:"8000000",beds:"3",bathroom:"3",halfBathroom:"1",park:"2",areaBuilding:"300",areaTotal:"306",description:"Descripci\xF3n En fracc. privado , de mucha plusval\xEDa , con v\xEDas de acceso r\xE1pidas . La casa consta de :  PLANTA BAJA : recibidor , 1/2 ba\xF1o con granito y espejo , sala ,comedor,cocina con granito y desayunador , lavander\xEDa ,cochera para 2 autos ,escalera de cristal templado, preparaci\xF3n para cuarto de servicio, jard\xEDn, terraza con cantera.  PLANTA ALTA: Estancia, closet de blancos , rec\xE1mara principal con duela , ba\xF1o y vestidor , cubierta de granito,cancel y espejo. 2 rec\xE1maras individuales con ba\xF1o completo y cubiertas de granito.  EQUIPAMIENTO: ladrillo t\xE9rmico, acabado de fachada en recinto, escalones de acceso de cantera , piso de porcelanto importado ,ventaner\xEDa de doble vidrio , llaves y muebles de ba\xF1os importados, 2 equipos de aire acondicionado y calefacci\xF3n , tanque estacionario de 500 lts. ,aljibe con hidroneum\xE1tico , boiler, riego automatizado , carpinter\xEDa de encino , cocina integral con granito ,cochera el\xE9ctrica de herrer\xEDa, impermeabilizada . Caracter\xEDsticas Exterior Balc\xF3n Cisterna Estacionamiento techado Facilidad para estacionarse Jard\xEDn General Aire acondicionado Cocina equipada Cocina integral Cuarto de servicio Fraccionamiento privado Seguridad 24 horas Restricciones Mascotas permitidas Permitido fumar",urlImage:"https://assets.easybroker.com/property_images/2070449/31775297/EB-GY0449.jpg?version=1614886308",urlProp:"https://assets.easybroker.com/property_images/2070449/31775297/EB-GY0449.jpg?version=1614886308",urlSinergy:"",colonia:"Quintas del Sol",selectTP:"Casa",selecTO:"Venta",tagsProperty:["Fracc. Privado","Frente a Parque","Recamara en P.B."],locaProperty:["Centro Norte"]},{typeProperty:"Casa",claveEB:"EB-GY0449",claveMH:"EB-GY0449",nameProperty:"San Charbel Ema",price:"18000000",beds:"3",bathroom:"3",halfBathroom:"1",park:"2",areaBuilding:"300",areaTotal:"306",description:"Descripci\xF3n En fracc. privado , de mucha plusval\xEDa , con v\xEDas de acceso r\xE1pidas . La casa consta de :  PLANTA BAJA : recibidor , 1/2 ba\xF1o con granito y espejo , sala ,comedor,cocina con granito y desayunador , lavander\xEDa ,cochera para 2 autos ,escalera de cristal templado, preparaci\xF3n para cuarto de servicio, jard\xEDn, terraza con cantera.  PLANTA ALTA: Estancia, closet de blancos , rec\xE1mara principal con duela , ba\xF1o y vestidor , cubierta de granito,cancel y espejo. 2 rec\xE1maras individuales con ba\xF1o completo y cubiertas de granito.  EQUIPAMIENTO: ladrillo t\xE9rmico, acabado de fachada en recinto, escalones de acceso de cantera , piso de porcelanto importado ,ventaner\xEDa de doble vidrio , llaves y muebles de ba\xF1os importados, 2 equipos de aire acondicionado y calefacci\xF3n , tanque estacionario de 500 lts. ,aljibe con hidroneum\xE1tico , boiler, riego automatizado , carpinter\xEDa de encino , cocina integral con granito ,cochera el\xE9ctrica de herrer\xEDa, impermeabilizada . Caracter\xEDsticas Exterior Balc\xF3n Cisterna Estacionamiento techado Facilidad para estacionarse Jard\xEDn General Aire acondicionado Cocina equipada Cocina integral Cuarto de servicio Fraccionamiento privado Seguridad 24 horas Restricciones Mascotas permitidas Permitido fumar",urlImage:"https://assets.easybroker.com/property_images/2070449/31775297/EB-GY0449.jpg?version=1614886308",urlProp:"https://assets.easybroker.com/property_images/2070449/31775297/EB-GY0449.jpg?version=1614886308",urlSinergy:"",colonia:"San Charbel",selectTP:"Casa",selecTO:"Venta",tagsProperty:["Fracc. Privado","Frente a Parque"],locaProperty:["Oeste"]}],binnacle:[{comment:"comentario de binnacle",date:"1646958688728"},{comment:"segundo comentario de binnacle",date:"1610296954000"}],todos:[{task:"Vender muchas casas",isComplete:"false",createdAt:"1646958688728",endTask:"1646958688728",timeTask:"1646958688728",notes:"muchas notas"},{task:"Vender",isComplete:"false",createdAt:"1634402554000",endTask:"1634402554000",timeTask:"1634402554000",notes:"notas"},{task:"Llamar",isComplete:"false",createdAt:"1610296954000",endTask:"1610296954000",timeTask:"",notes:"Ofrecer xyz"}]},Og="/MH/assets/add-user.1bd66bde.png",kt=cn(""),El=cn([]),Ng=cn([]),mt=cn({typeContact:"",name:"",lastname:"",lastContact:"",telephon:"",email:"",selecMC:"",propCont:"",comContact:"",rangeProp:"",contMode:"",budget:"",numBeds:"",numBaths:"",halfBathroom:"",numParks:"",modePay:"",selecTP:"",contactType:"",contactStage:"",createdAt:"",locaProperty:[],tagsProperty:[],sendedProperties:[]}),ht=cn({typeProperty:"",typeSaller:"",claveEB:"",claveMH:"",createdAt:"",nameProperty:"",price:"",beds:"",bathroom:"",halfBathroom:"",park:"",areaBuilding:"",areaTotal:"",description:"",urlImage:"",urlProp:"",urlSinergy:"",colonia:"",selecTP:"",selecTO:"",typeOperation:"",tagsProperty:[],locaProperty:[],binnacle:[]}),Ln=cn({task:"",isComplete:"",createdAt:"",endTask:"",timeTask:"",notes:"",user:""}),$T=["Domingo","Lunes","Martes","Miercoles","Jueves","Viernes","S\xE1bado"],FT=["Ene","Feb","Mar","Abr","May","Jun","Jul","Ago","Sep","Oct","Nov","Dic"];function mn(t){typeof t=="string"?t=new Date(t):t=new Date(t);let e=t.getDate()+1;e<10&&(e="0"+e);let n=FT[t.getMonth()],s=t.getFullYear();return`${e}/${n}/${s}`}function UT(t){t=new Date(t);let e=t.getMinutes();e.length<2&&(e="0"+e);let n=t.getHours();return n>12&&(n=n-12),n<10&&(n="0"+n),t.getDate(),`${n}:${e}`}function BT(t){return t=new Date(+t),`${$T[t.getDay()]}-`}function VT(t){let e,n,s,i,r,o,a,l,c,h,f=mn(t[2])+"",d,g,_,v,I,S,P,N,$,L,V,O,W,D,R,G,F,re,ee;return{c(){e=p("div"),n=p("div"),s=p("div"),i=p("h5"),r=C(t[0]),o=y(),a=C(t[1]),l=y(),c=p("h5"),h=C("Alta "),d=C(f),g=y(),_=p("div"),v=p("p"),I=C(t[3]),S=y(),P=p("p"),N=C("tel: "),$=C(t[4]),L=C(" email: "),V=C(t[5]),O=y(),W=p("p"),D=C("Presupuesto "),R=C(t[6]),G=y(),F=p("p"),re=C("Rango "),ee=C(t[7]),m(s,"class","namePerson svelte-1uuhgxf"),m(_,"class","nameDate svelte-1uuhgxf"),m(n,"class","contactCard"),m(e,"class","container contact svelte-1uuhgxf")},m(x,j){w(x,e,j),u(e,n),u(n,s),u(s,i),u(i,r),u(i,o),u(i,a),u(s,l),u(s,c),u(c,h),u(c,d),u(n,g),u(n,_),u(_,v),u(v,I),u(_,S),u(_,P),u(P,N),u(P,$),u(P,L),u(P,V),u(_,O),u(_,W),u(W,D),u(W,R),u(_,G),u(_,F),u(F,re),u(F,ee)},p(x,[j]){j&1&&ie(r,x[0]),j&2&&ie(a,x[1]),j&4&&f!==(f=mn(x[2])+"")&&ie(d,f),j&8&&ie(I,x[3]),j&16&&ie($,x[4]),j&32&&ie(V,x[5]),j&64&&ie(R,x[6]),j&128&&ie(ee,x[7])},i:ue,o:ue,d(x){x&&b(e)}}}function jT(t,e,n){let{name:s,lastname:i,createdAt:r,contactStage:o,telephon:a,email:l,budget:c,rangeProp:h}=e;return t.$$set=f=>{"name"in f&&n(0,s=f.name),"lastname"in f&&n(1,i=f.lastname),"createdAt"in f&&n(2,r=f.createdAt),"contactStage"in f&&n(3,o=f.contactStage),"telephon"in f&&n(4,a=f.telephon),"email"in f&&n(5,l=f.email),"budget"in f&&n(6,c=f.budget),"rangeProp"in f&&n(7,h=f.rangeProp)},[s,i,r,o,a,l,c,h]}class qT extends at{constructor(e){super(),ot(this,e,jT,VT,nt,{name:0,lastname:1,createdAt:2,contactStage:3,telephon:4,email:5,budget:6,rangeProp:7})}}function HT(t){let e,n,s,i;return{c(){e=p("div"),n=p("input"),m(n,"class","searchInput svelte-6bonih"),m(n,"type","text"),m(n,"id","search-field"),m(n,"placeholder","Enter Search Term"),m(n,"autocomplete","off"),m(e,"id","search-input-cont")},m(r,o){w(r,e,o),u(e,n),fe(n,t[0]),s||(i=[B(n,"input",t[2]),B(n,"input",t[1])],s=!0)},p(r,[o]){o&1&&n.value!==r[0]&&fe(n,r[0])},i:ue,o:ue,d(r){r&&b(e),s=!1,rt(i)}}}function zT(t,e,n){let{searchTerm:s}=e;function i(o){r_.call(this,t,o)}function r(){s=this.value,n(0,s)}return t.$$set=o=>{"searchTerm"in o&&n(0,s=o.searchTerm)},[s,i,r]}class Bc extends at{constructor(e){super(),ot(this,e,zT,HT,nt,{searchTerm:0})}}function Lg(t){const e=t-1;return e*e*e+1}function Io(t){return t===0||t===1?t:t<.5?.5*Math.pow(2,20*t-10):-.5*Math.pow(2,10-t*20)+1}function So(t,{delay:e=0,duration:n=400,easing:s=cd}={}){const i=+getComputedStyle(t).opacity;return{delay:e,duration:n,easing:s,css:r=>`opacity: ${r*i}`}}function Co(t,{delay:e=0,duration:n=400,easing:s=Lg,x:i=0,y:r=0,opacity:o=0}={}){const a=getComputedStyle(t),l=+a.opacity,c=a.transform==="none"?"":a.transform,h=l*(1-o);return{delay:e,duration:n,easing:s,css:(f,d)=>`
			transform: ${c} translate(${(1-f)*i}px, ${(1-f)*r}px);
			opacity: ${l-h*d}`}}function Ao(t,{delay:e=0,duration:n=400,easing:s=Lg,start:i=0,opacity:r=0}={}){const o=getComputedStyle(t),a=+o.opacity,l=o.transform==="none"?"":o.transform,c=1-i,h=a*(1-r);return{delay:e,duration:n,easing:s,css:(f,d)=>`
			transform: ${l} scale(${1-c*d});
			opacity: ${a-h*d}
		`}}async function Mg(t,e){if(console.log("estas en la funcion"),t==="todoAdding"){const n=Hn(Kt,"todos");await _i(n,e)}else t==="todoUpdate"?await aa(ns(Kt,"todos",e.id),e):t==="todoDelete"&&await la(ns(Kt,"todos",e.id));e=""}function GT(t){let e,n,s,i,r,o,a,l,c,h,f,d,g,_,v,I,S,P,N,$,L,V,O,W;return{c(){e=p("body"),n=p("div"),i=y(),r=p("div"),o=p("div"),a=p("input"),l=y(),c=p("div"),h=p("input"),f=y(),d=p("input"),g=y(),_=p("div"),v=p("textarea"),I=y(),S=p("div"),P=p("button"),P.textContent="Guardar",N=y(),$=p("button"),$.textContent="Cancelar",m(n,"class","background svelte-5uk41o"),m(a,"type","text"),m(a,"class","inputTask svelte-5uk41o"),m(a,"placeholder","Agrega una Tarea o Cita"),m(h,"type","time"),m(h,"class","inputDate svelte-5uk41o"),m(d,"type","date"),m(d,"class","inputDate svelte-5uk41o"),m(c,"class","contDate"),m(v,"name","notes"),m(v,"cols","56"),m(v,"rows","5"),m(v,"placeholder","descripci\xF3n"),m(P,"class","btnShedule svelte-5uk41o"),m($,"class","btnShedule svelte-5uk41o"),m(r,"class","pop-up svelte-5uk41o")},m(D,R){w(D,e,R),u(e,n),u(e,i),u(e,r),u(r,o),u(o,a),fe(a,t[0]),u(r,l),u(r,c),u(c,h),fe(h,t[1].timeTask),u(c,f),u(c,d),fe(d,t[1].endTask),u(r,g),u(r,_),u(_,v),fe(v,t[1].notes),u(r,I),u(r,S),u(S,P),u(S,N),u(S,$),V=!0,O||(W=[B(window,"keydown",t[4]),B(n,"click",t[2]),B(a,"input",t[5]),B(h,"input",t[6]),B(d,"input",t[7]),B(v,"input",t[8]),B(P,"click",t[3]),B($,"click",t[2])],O=!0)},p(D,[R]){R&1&&a.value!==D[0]&&fe(a,D[0]),R&2&&fe(h,D[1].timeTask),R&2&&fe(d,D[1].endTask),R&2&&fe(v,D[1].notes)},i(D){V||(it(()=>{s||(s=Pn(n,So,{},!0)),s.run(1)}),it(()=>{L||(L=Pn(r,Co,{},!0)),L.run(1)}),V=!0)},o(D){s||(s=Pn(n,So,{},!1)),s.run(0),L||(L=Pn(r,Co,{},!1)),L.run(0),V=!1},d(D){D&&b(e),D&&s&&s.end(),D&&L&&L.end(),O=!1,rt(W)}}}function KT(t,e,n){let s,i,r;xe(t,Ln,N=>n(10,s=N)),xe(t,kt,N=>n(11,i=N)),xe(t,mt,N=>n(12,r=N));const o=gd();let a=`${r.name} ${r.lastname}`,l=[],c=[],h=new Date,f=h.getTime();console.log(f),l={task:"",isComplete:"",createdAt:"",timeTask:"",notes:"",user:""};function d(){o("closeIt"),wt(kt,i="contSelect",i),wt(Ln,s="",s)}const g=async()=>{wt(kt,i="todoAdding",i),c=a,n(1,l={...l,endTask:f}),wt(Ln,s={...l,task:c},s),Mg(i,s),console.log(s),d()},_=N=>{N.key==="Enter"&&g()};function v(){a=this.value,n(0,a)}function I(){l.timeTask=this.value,n(1,l)}function S(){l.endTask=this.value,n(1,l)}function P(){l.notes=this.value,n(1,l)}return[a,l,d,g,_,v,I,S,P]}class WT extends at{constructor(e){super(),ot(this,e,KT,GT,nt,{})}}function QT(t){let e,n,s,i,r,o,a,l,c,h,f,d,g,_,v,I,S,P,N,$,L,V,O,W,D,R,G,F,re,ee,x,j,te,k,z,Q,A,se,we,he;return{c(){e=p("main"),n=p("section"),s=p("figure"),i=p("img"),o=y(),a=p("div"),l=C(t[1]),c=y(),h=p("figcaption"),f=C(t[2]),d=y(),g=p("section"),_=p("section"),v=p("div"),I=p("div"),S=C(t[3]),P=C(" Rec\xE1maras"),N=y(),$=p("div"),L=C(t[4]),V=C(" Ba\xF1os"),O=y(),W=p("div"),D=C(t[5]),R=C(" Estacionamientos"),G=y(),F=p("div"),re=C(t[6]),ee=C(" m2 de Contruccion"),x=y(),j=p("div"),te=C(t[7]),k=C(" m2 de Terreno"),z=y(),Q=p("br"),A=y(),se=p("div"),we=C("Precio $: "),he=C(t[8]),dn(i.src,r=t[0])||m(i,"src",r),m(i,"alt",t[1]),m(i,"class","bkcover svelte-1w1p4eb"),m(a,"class","language svelte-1w1p4eb"),m(h,"class","svelte-1w1p4eb"),m(s,"class","bkcont svelte-1w1p4eb"),m(n,"class","book-top-info svelte-1w1p4eb"),m(v,"class","buy-options-cont svelte-1w1p4eb"),m(_,"class","from-pariyatti available-at svelte-1w1p4eb"),m(g,"class","book-bottom-links svelte-1w1p4eb")},m(Se,Te){w(Se,e,Te),u(e,n),u(n,s),u(s,i),u(s,o),u(s,a),u(a,l),u(s,c),u(s,h),u(h,f),u(e,d),u(e,g),u(g,_),u(_,v),u(v,I),u(I,S),u(I,P),u(v,N),u(v,$),u($,L),u($,V),u(v,O),u(v,W),u(W,D),u(W,R),u(v,G),u(v,F),u(F,re),u(F,ee),u(v,x),u(v,j),u(j,te),u(j,k),u(v,z),u(v,Q),u(v,A),u(v,se),u(se,we),u(se,he)},p(Se,[Te]){Te&1&&!dn(i.src,r=Se[0])&&m(i,"src",r),Te&2&&m(i,"alt",Se[1]),Te&2&&ie(l,Se[1]),Te&4&&ie(f,Se[2]),Te&8&&ie(S,Se[3]),Te&16&&ie(L,Se[4]),Te&32&&ie(D,Se[5]),Te&64&&ie(re,Se[6]),Te&128&&ie(te,Se[7]),Te&256&&ie(he,Se[8])},i:ue,o:ue,d(Se){Se&&b(e)}}}function YT(t,e,n){let{urlImage:s,claveEB:i,nameProperty:r,beds:o,bathroom:a,park:l,areaBuilding:c,areaTotal:h,price:f}=e;return t.$$set=d=>{"urlImage"in d&&n(0,s=d.urlImage),"claveEB"in d&&n(1,i=d.claveEB),"nameProperty"in d&&n(2,r=d.nameProperty),"beds"in d&&n(3,o=d.beds),"bathroom"in d&&n(4,a=d.bathroom),"park"in d&&n(5,l=d.park),"areaBuilding"in d&&n(6,c=d.areaBuilding),"areaTotal"in d&&n(7,h=d.areaTotal),"price"in d&&n(8,f=d.price)},[s,i,r,o,a,l,c,h,f]}class $g extends at{constructor(e){super(),ot(this,e,YT,QT,nt,{urlImage:0,claveEB:1,nameProperty:2,beds:3,bathroom:4,park:5,areaBuilding:6,areaTotal:7,price:8})}}let Cs;function Fg(t){return t<=1e6?Cs="PRM":t<=25e5?Cs="SGN":t<=5e6?Cs="TRC":t<=8e6?Cs="CRT":t<=12e6?Cs="QNT":t>12e6&&(Cs="SXT"),Cs}let Ba,Va;function XT(t){let e=Mn;return e=e.filter(n=>n.selectTP===t.selecTP),console.log("filtraste por tipo de propiedad",e),t.numBeds>0&&(e=e.filter(n=>n.beds>=t.numBeds)),t.numBaths>0&&(e=e.filter(n=>n.bathroom>=t.numBaths)),t.numParks>0&&(e=e.filter(n=>n.park>=t.numParks)),console.log("Por caracteristicas",e),t.budget?(console.log("filtraste por budget"),Ba=t.budget*.7,Va=t.budget*1.1,console.log(Ba,Va),e=e.filter(n=>n.price>=Ba&&n.price<=Va)):(console.log("filtraste por rango"),e=e.filter(n=>Fg(n.price)===t.rangeProp)),console.log("filtraste presupuesto",e),t.locaProperty.length>0&&(e=e.filter(n=>t.locaProperty.some(s=>n.locaProperty.includes(s)))),console.log("Filtraste por Ubicacion",e),t.tagsProperty.length>0&&(e=e.filter(n=>t.tagsProperty.every(s=>n.tagsProperty.includes(s)))),console.log("Filtraste por localizacion",e),e.length===0||""+e.length,El.set(e)}const Po=["Casa","Terreno","Departamento","Casa o Departamento","Local Comercial","Casa de Campo"],mh=["Lona en Propiedad","Propiedades.com","NocNok","Mercado Libre","Vivanuncios","Lamudi","Inmuebles24","Referido","Otro"],gh=["Comprador","Arrendador","Propietario","Agente Asociado","Agente Inmobiliario","Constructor","Inversionista","Otro"],_h=["Contado","Credito Hipotecario","INFONAVIT","COFINAVIT","FOVISSSTE","ALIADOS","Conyugal"],vh=["Venta","Renta"],yh=["Rango","PRM","SGN","TRC","CRT","QNT","SXT","SPT"],Do=[0,1,2,3,4,5],An=[0,1,2,3,4],bh=["Due\xF1o","Familiar","Inmobiliaria","Conocido"];function JT(t){let e,n,s,i,r,o,a,l,c,h,f,d,g,_,v,I,S,P,N,$,L,V,O,W,D,R,G,F,re,ee,x,j,te,k,z,Q,A,se,we,he,Se,Te,Ue;return{c(){e=p("div"),n=p("div"),s=p("label"),i=C(`/Norte\\\r
			`),r=p("input"),o=y(),a=p("div"),l=p("label"),c=C(`/Noroeste\r
			`),h=p("input"),f=y(),d=p("label"),g=p("input"),_=C("NorEste\\"),v=y(),I=p("div"),S=p("label"),P=C(`/Oeste\r
			`),N=p("input"),$=y(),L=p("label"),V=C(`Centro Norte\r
			`),O=p("input"),W=y(),D=p("label"),R=p("input"),G=C("Este\\"),F=y(),re=p("div"),ee=p("label"),x=C(`Centro Sur\r
			`),j=p("input"),te=y(),k=p("div"),z=p("label"),Q=C(`/SurOeste\r
			`),A=p("input"),se=y(),we=p("label"),he=p("input"),Se=C("SurEste\\"),r.__value="Norte",r.value=r.__value,m(r,"id","north"),m(r,"type","checkbox"),t[2][0].push(r),m(s,"for","north"),m(n,"class","filterLocationOne svelte-1lvjb5r"),h.__value="Noroeste",h.value=h.__value,m(h,"id","northwest"),m(h,"type","checkbox"),t[2][0].push(h),m(l,"for","northwest"),g.__value="Noreste",g.value=g.__value,m(g,"id","northeast"),m(g,"type","checkbox"),t[2][0].push(g),m(d,"for","northeast"),m(a,"class","filterLocationOne svelte-1lvjb5r"),N.__value="Oeste",N.value=N.__value,m(N,"id","west"),m(N,"type","checkbox"),t[2][0].push(N),m(S,"for","west"),O.__value="Centronorte",O.value=O.__value,m(O,"id","townNorth"),m(O,"type","checkbox"),t[2][0].push(O),m(L,"for","townNorth"),R.__value="Este",R.value=R.__value,m(R,"id","east"),m(R,"type","checkbox"),t[2][0].push(R),m(D,"for","east"),m(I,"class","filterLocationOne svelte-1lvjb5r"),j.__value="CentroSur",j.value=j.__value,m(j,"id","townsouth"),m(j,"type","checkbox"),t[2][0].push(j),m(ee,"for","townsouth"),m(re,"class","filterLocationOne svelte-1lvjb5r"),A.__value="SurOeste",A.value=A.__value,m(A,"id","southwest"),m(A,"type","checkbox"),t[2][0].push(A),m(z,"for","southwest"),he.__value="SurEste",he.value=he.__value,m(he,"id","southeast"),m(he,"type","checkbox"),t[2][0].push(he),m(we,"for","southeast"),m(k,"class","filterLocationOne svelte-1lvjb5r"),m(e,"class","containerUbication svelte-1lvjb5r")},m(q,ne){w(q,e,ne),u(e,n),u(n,s),u(s,i),u(s,r),r.checked=~t[0].indexOf(r.__value),u(e,o),u(e,a),u(a,l),u(l,c),u(l,h),h.checked=~t[0].indexOf(h.__value),u(a,f),u(a,d),u(d,g),g.checked=~t[0].indexOf(g.__value),u(d,_),u(e,v),u(e,I),u(I,S),u(S,P),u(S,N),N.checked=~t[0].indexOf(N.__value),u(I,$),u(I,L),u(L,V),u(L,O),O.checked=~t[0].indexOf(O.__value),u(I,W),u(I,D),u(D,R),R.checked=~t[0].indexOf(R.__value),u(D,G),u(e,F),u(e,re),u(re,ee),u(ee,x),u(ee,j),j.checked=~t[0].indexOf(j.__value),u(e,te),u(e,k),u(k,z),u(z,Q),u(z,A),A.checked=~t[0].indexOf(A.__value),u(k,se),u(k,we),u(we,he),he.checked=~t[0].indexOf(he.__value),u(we,Se),Te||(Ue=[B(r,"change",t[1]),B(h,"change",t[3]),B(g,"change",t[4]),B(N,"change",t[5]),B(O,"change",t[6]),B(R,"change",t[7]),B(j,"change",t[8]),B(A,"change",t[9]),B(he,"change",t[10])],Te=!0)},p(q,[ne]){ne&1&&(r.checked=~q[0].indexOf(r.__value)),ne&1&&(h.checked=~q[0].indexOf(h.__value)),ne&1&&(g.checked=~q[0].indexOf(g.__value)),ne&1&&(N.checked=~q[0].indexOf(N.__value)),ne&1&&(O.checked=~q[0].indexOf(O.__value)),ne&1&&(R.checked=~q[0].indexOf(R.__value)),ne&1&&(j.checked=~q[0].indexOf(j.__value)),ne&1&&(A.checked=~q[0].indexOf(A.__value)),ne&1&&(he.checked=~q[0].indexOf(he.__value))},i:ue,o:ue,d(q){q&&b(e),t[2][0].splice(t[2][0].indexOf(r),1),t[2][0].splice(t[2][0].indexOf(h),1),t[2][0].splice(t[2][0].indexOf(g),1),t[2][0].splice(t[2][0].indexOf(N),1),t[2][0].splice(t[2][0].indexOf(O),1),t[2][0].splice(t[2][0].indexOf(R),1),t[2][0].splice(t[2][0].indexOf(j),1),t[2][0].splice(t[2][0].indexOf(A),1),t[2][0].splice(t[2][0].indexOf(he),1),Te=!1,rt(Ue)}}}function xT(t,e,n){let{ubication:s}=e;const i=[[]];function r(){s=Zt(i[0],this.__value,this.checked),n(0,s)}function o(){s=Zt(i[0],this.__value,this.checked),n(0,s)}function a(){s=Zt(i[0],this.__value,this.checked),n(0,s)}function l(){s=Zt(i[0],this.__value,this.checked),n(0,s)}function c(){s=Zt(i[0],this.__value,this.checked),n(0,s)}function h(){s=Zt(i[0],this.__value,this.checked),n(0,s)}function f(){s=Zt(i[0],this.__value,this.checked),n(0,s)}function d(){s=Zt(i[0],this.__value,this.checked),n(0,s)}function g(){s=Zt(i[0],this.__value,this.checked),n(0,s)}return t.$$set=_=>{"ubication"in _&&n(0,s=_.ubication)},[s,r,i,o,a,l,c,h,f,d,g]}class Ug extends at{constructor(e){super(),ot(this,e,xT,JT,nt,{ubication:0})}}function ZT(t){let e,n,s,i,r,o,a,l,c,h,f,d,g,_,v,I,S,P,N,$,L,V,O,W,D,R,G,F,re,ee,x,j,te;return{c(){e=p("section"),n=p("div"),s=p("label"),i=C(`Fracc. Privado\r
		   `),r=p("input"),o=y(),a=p("label"),l=C(`Frente a Parque\r
         `),c=p("input"),h=y(),f=p("label"),d=C(`Una Planta\r
         `),g=p("input"),_=y(),v=p("div"),I=p("label"),S=C(`Recamara en P.B.\r
		`),P=p("input"),N=y(),$=p("label"),L=C(`Patio Amplio\r
   `),V=p("input"),O=y(),W=p("label"),D=C(`Lista para Habitarse\r
   `),R=p("input"),G=y(),F=p("div"),re=p("label"),ee=C(`Nueva\r
		`),x=p("input"),m(r,"type","checkbox"),r.__value="Fracc. Privado",r.value=r.__value,t[2][0].push(r),m(c,"type","checkbox"),c.__value="Frente a Parque",c.value=c.__value,t[2][0].push(c),m(g,"type","checkbox"),g.__value="Una Planta",g.value=g.__value,t[2][0].push(g),m(n,"class","svelte-1b9bvt0"),m(P,"type","checkbox"),P.__value="Recamara en PB",P.value=P.__value,t[2][0].push(P),m(V,"type","checkbox"),V.__value="Patio Amplio",V.value=V.__value,t[2][0].push(V),m(R,"type","checkbox"),R.__value="Lista Habitarse",R.value=R.__value,t[2][0].push(R),m(v,"class","svelte-1b9bvt0"),m(x,"type","checkbox"),x.__value="Nueva",x.value=x.__value,t[2][0].push(x),m(F,"class","svelte-1b9bvt0"),m(e,"class","svelte-1b9bvt0")},m(k,z){w(k,e,z),u(e,n),u(n,s),u(s,i),u(s,r),r.checked=~t[0].indexOf(r.__value),u(n,o),u(n,a),u(a,l),u(a,c),c.checked=~t[0].indexOf(c.__value),u(n,h),u(n,f),u(f,d),u(f,g),g.checked=~t[0].indexOf(g.__value),u(e,_),u(e,v),u(v,I),u(I,S),u(I,P),P.checked=~t[0].indexOf(P.__value),u(v,N),u(v,$),u($,L),u($,V),V.checked=~t[0].indexOf(V.__value),u(v,O),u(v,W),u(W,D),u(W,R),R.checked=~t[0].indexOf(R.__value),u(e,G),u(e,F),u(F,re),u(re,ee),u(re,x),x.checked=~t[0].indexOf(x.__value),j||(te=[B(r,"change",t[1]),B(c,"change",t[3]),B(g,"change",t[4]),B(P,"change",t[5]),B(V,"change",t[6]),B(R,"change",t[7]),B(x,"change",t[8])],j=!0)},p(k,[z]){z&1&&(r.checked=~k[0].indexOf(r.__value)),z&1&&(c.checked=~k[0].indexOf(c.__value)),z&1&&(g.checked=~k[0].indexOf(g.__value)),z&1&&(P.checked=~k[0].indexOf(P.__value)),z&1&&(V.checked=~k[0].indexOf(V.__value)),z&1&&(R.checked=~k[0].indexOf(R.__value)),z&1&&(x.checked=~k[0].indexOf(x.__value))},i:ue,o:ue,d(k){k&&b(e),t[2][0].splice(t[2][0].indexOf(r),1),t[2][0].splice(t[2][0].indexOf(c),1),t[2][0].splice(t[2][0].indexOf(g),1),t[2][0].splice(t[2][0].indexOf(P),1),t[2][0].splice(t[2][0].indexOf(V),1),t[2][0].splice(t[2][0].indexOf(R),1),t[2][0].splice(t[2][0].indexOf(x),1),j=!1,rt(te)}}}function ek(t,e,n){let{tag:s}=e;const i=[[]];function r(){s=Zt(i[0],this.__value,this.checked),n(0,s)}function o(){s=Zt(i[0],this.__value,this.checked),n(0,s)}function a(){s=Zt(i[0],this.__value,this.checked),n(0,s)}function l(){s=Zt(i[0],this.__value,this.checked),n(0,s)}function c(){s=Zt(i[0],this.__value,this.checked),n(0,s)}function h(){s=Zt(i[0],this.__value,this.checked),n(0,s)}function f(){s=Zt(i[0],this.__value,this.checked),n(0,s)}return t.$$set=d=>{"tag"in d&&n(0,s=d.tag)},[s,r,i,o,a,l,c,h,f]}class Bg extends at{constructor(e){super(),ot(this,e,ek,ZT,nt,{tag:0})}}function wh(t,e,n){const s=t.slice();return s[24]=e[n],s}function Eh(t,e,n){const s=t.slice();return s[27]=e[n],s}function Th(t,e,n){const s=t.slice();return s[30]=e[n],s}function kh(t,e,n){const s=t.slice();return s[33]=e[n],s}function Ih(t,e,n){const s=t.slice();return s[36]=e[n],s}function Sh(t,e,n){const s=t.slice();return s[39]=e[n],s}function Ch(t,e,n){const s=t.slice();return s[42]=e[n],s}function Ah(t,e,n){const s=t.slice();return s[45]=e[n],s}function Ph(t,e,n){const s=t.slice();return s[48]=e[n],s}function Dh(t,e,n){const s=t.slice();return s[51]=e[n],s}function tk(t){let e,n=mn(t[2].createdAt)+"",s,i,r;return{c(){e=p("h3"),s=C(n),m(e,"class","dataInput svelte-1myljlf")},m(o,a){w(o,e,a),u(e,s),i||(r=B(e,"dblclick",t[3]),i=!0)},p(o,a){a[0]&4&&n!==(n=mn(o[2].createdAt)+"")&&ie(s,n)},d(o){o&&b(e),i=!1,r()}}}function nk(t){let e,n,s;return{c(){e=p("input"),m(e,"class","dataInput svelte-1myljlf"),m(e,"type","date")},m(i,r){w(i,e,r),fe(e,t[2].createdAt),n||(s=B(e,"input",t[4]),n=!0)},p(i,r){r[0]&5&&fe(e,i[2].createdAt)},d(i){i&&b(e),n=!1,s()}}}function Rh(t){let e,n=t[51]+"",s,i;return{c(){e=p("option"),s=C(n),m(e,"class","dataInput svelte-1myljlf"),m(e,"type","checkbox"),e.__value=i=t[51],e.value=e.__value},m(r,o){w(r,e,o),u(e,s)},p(r,o){o[0]&1&&n!==(n=r[51]+"")&&ie(s,n),o[0]&1&&i!==(i=r[51])&&(e.__value=i,e.value=e.__value)},d(r){r&&b(e)}}}function Oh(t){let e,n=t[48]+"",s;return{c(){e=p("option"),s=C(n),m(e,"type","checkbox"),e.__value=t[48],e.value=e.__value},m(i,r){w(i,e,r),u(e,s)},p:ue,d(i){i&&b(e)}}}function Nh(t){let e,n=t[45]+"",s;return{c(){e=p("option"),s=C(n),m(e,"type","checkbox"),e.__value=t[45],e.value=e.__value},m(i,r){w(i,e,r),u(e,s)},p:ue,d(i){i&&b(e)}}}function Lh(t){let e,n=t[42]+"",s;return{c(){e=p("option"),s=C(n),m(e,"type","checkbox"),e.__value=t[42],e.value=e.__value},m(i,r){w(i,e,r),u(e,s)},p:ue,d(i){i&&b(e)}}}function Mh(t){let e,n=t[39]+"",s;return{c(){e=p("option"),s=C(n),m(e,"type","checkbox"),e.__value=t[39],e.value=e.__value},m(i,r){w(i,e,r),u(e,s)},p:ue,d(i){i&&b(e)}}}function $h(t){let e,n=t[36]+"",s;return{c(){e=p("option"),s=C(n),m(e,"type","checkbox"),e.__value=t[36],e.value=e.__value},m(i,r){w(i,e,r),u(e,s)},p:ue,d(i){i&&b(e)}}}function Fh(t){let e,n=t[33]+"",s,i;return{c(){e=p("option"),s=C(n),i=C(" Rec\xE1maras"),m(e,"type","checkbox"),e.__value=t[33],e.value=e.__value},m(r,o){w(r,e,o),u(e,s),u(e,i)},p:ue,d(r){r&&b(e)}}}function Uh(t){let e,n=t[30]+"",s,i;return{c(){e=p("option"),s=C(n),i=C(" ba\xF1os"),m(e,"type","checkbox"),e.__value=t[30],e.value=e.__value},m(r,o){w(r,e,o),u(e,s),u(e,i)},p:ue,d(r){r&&b(e)}}}function Bh(t){let e,n=t[27]+"",s,i;return{c(){e=p("option"),s=C(n),i=C(" Medios ba\xF1os"),m(e,"type","checkbox"),e.__value=t[27],e.value=e.__value},m(r,o){w(r,e,o),u(e,s),u(e,i)},p:ue,d(r){r&&b(e)}}}function Vh(t){let e,n=t[24]+"",s,i;return{c(){e=p("option"),s=C(n),i=C(" Estacionamientos"),m(e,"type","checkbox"),e.__value=t[24],e.value=e.__value},m(r,o){w(r,e,o),u(e,s),u(e,i)},p:ue,d(r){r&&b(e)}}}function sk(t){let e,n,s,i,r,o,a,l,c,h,f,d,g,_,v,I,S,P,N,$,L,V,O,W,D,R,G,F,re,ee,x,j,te,k,z,Q,A,se,we,he,Se,Te,Ue,q,ne,Me,We,Le,Re,qe,Qe,Ce,le,He,be,Be,Vt,It,Yt,gt;function jt(T,J){return T[1]?nk:tk}let Et=jt(t),st=Et(t),_t=t[0],ze=[];for(let T=0;T<_t.length;T+=1)ze[T]=Rh(Dh(t,_t,T));let Ot=gh,Xe=[];for(let T=0;T<Ot.length;T+=1)Xe[T]=Oh(Ph(t,Ot,T));let Xt=mh,tt=[];for(let T=0;T<Xt.length;T+=1)tt[T]=Nh(Ah(t,Xt,T));let lt=_h,dt=[];for(let T=0;T<lt.length;T+=1)dt[T]=Lh(Ch(t,lt,T));let St=Po,ct=[];for(let T=0;T<St.length;T+=1)ct[T]=Mh(Sh(t,St,T));let Ct=yh,pt=[];for(let T=0;T<Ct.length;T+=1)pt[T]=$h(Ih(t,Ct,T));let Nt=Do,pe=[];for(let T=0;T<Nt.length;T+=1)pe[T]=Fh(kh(t,Nt,T));let ke=An,_e=[];for(let T=0;T<ke.length;T+=1)_e[T]=Uh(Th(t,ke,T));let Jt=An,Ve=[];for(let T=0;T<Jt.length;T+=1)Ve[T]=Bh(Eh(t,Jt,T));let an=An,je=[];for(let T=0;T<an.length;T+=1)je[T]=Vh(wh(t,an,T));function Nn(T){t[21](T)}let At={};t[2].locaProperty!==void 0&&(At.ubication=t[2].locaProperty),le=new Ug({props:At}),Xn.push(()=>$s(le,"ubication",Nn));function Sn(T){t[22](T)}let bt={};return t[2].tagsProperty!==void 0&&(bt.tag=t[2].tagsProperty),Be=new Bg({props:bt}),Xn.push(()=>$s(Be,"tag",Sn)),{c(){e=p("h1"),e.textContent="Alta Contactos",n=y(),s=p("div"),i=p("div"),st.c(),r=y(),o=p("div"),a=p("input"),l=y(),c=p("input"),h=y(),f=p("div"),d=p("input"),g=y(),_=p("input"),v=y(),I=p("div"),S=p("select"),P=p("option"),P.textContent="Propiedad de Contacto";for(let T=0;T<ze.length;T+=1)ze[T].c();N=y(),$=p("input"),L=y(),V=p("div"),O=p("input"),W=y(),D=p("select"),R=p("option"),R.textContent="Tipo de Contacto";for(let T=0;T<Xe.length;T+=1)Xe[T].c();G=y(),F=p("select"),re=p("option"),re.textContent="Modo de Contacto";for(let T=0;T<tt.length;T+=1)tt[T].c();ee=y(),x=p("select"),j=p("option"),j.textContent="Modo de Pago";for(let T=0;T<dt.length;T+=1)dt[T].c();te=y(),k=p("select"),z=p("option"),z.textContent="Tipo de Propiedad";for(let T=0;T<ct.length;T+=1)ct[T].c();Q=y(),A=p("select"),se=p("option"),se.textContent="Rango de Busqueda";for(let T=0;T<pt.length;T+=1)pt[T].c();we=y(),he=p("select"),Se=p("option"),Se.textContent="# Rec\xE1maras";for(let T=0;T<pe.length;T+=1)pe[T].c();Te=y(),Ue=p("select"),q=p("option"),q.textContent="# Ba\xF1os";for(let T=0;T<_e.length;T+=1)_e[T].c();ne=y(),Me=p("select"),We=p("option"),We.textContent="# Medios Ba\xF1os";for(let T=0;T<Ve.length;T+=1)Ve[T].c();Le=y(),Re=p("select"),qe=p("option"),qe.textContent="# Estacionamientos";for(let T=0;T<je.length;T+=1)je[T].c();Qe=y(),Ce=p("div"),ce(le.$$.fragment),be=y(),ce(Be.$$.fragment),m(e,"class","sectionTitle"),m(a,"class","dataInput svelte-1myljlf"),m(a,"type","text"),m(a,"placeholder","Nombre"),m(c,"class","dataInput svelte-1myljlf"),m(c,"type","text"),m(c,"placeholder","Apellido"),m(o,"class","contactInput"),m(d,"class","dataInput svelte-1myljlf"),m(d,"type","tel"),m(d,"placeholder","tel\xE9fono"),m(_,"class","dataInput svelte-1myljlf"),m(_,"type","email"),m(_,"placeholder","email"),m(f,"class","contactInput"),m(s,"class",""),P.disabled=!0,P.selected=!0,P.__value="",P.value=P.__value,m(S,"class","dataInput svelte-1myljlf"),m(S,"id","selTP"),m(S,"name","selTP"),t[2].propCont===void 0&&it(()=>t[9].call(S)),m($,"class","dataInput svelte-1myljlf"),m($,"type","number"),m($,"placeholder","Presupuesto"),m(I,"class","col"),m(O,"class","textareaInput svelte-1myljlf"),m(O,"type","textarea"),m(O,"placeholder","Comentarios"),m(V,"class","col"),R.disabled=!0,R.selected=!0,R.__value="",R.value=R.__value,m(D,"class","othersInput svelte-1myljlf"),t[2].typeContact===void 0&&it(()=>t[12].call(D)),re.disabled=!0,re.selected=!0,re.__value="",re.value=re.__value,m(F,"class","othersInput svelte-1myljlf"),t[2].selecMC===void 0&&it(()=>t[13].call(F)),j.disabled=!0,j.selected=!0,j.__value="",j.value=j.__value,m(x,"class","othersInput svelte-1myljlf"),t[2].modePay===void 0&&it(()=>t[14].call(x)),z.disabled=!0,z.selected=!0,z.__value="",z.value=z.__value,m(k,"class","othersInput svelte-1myljlf"),m(k,"id","selTP"),m(k,"name","selTP"),t[2].selecTP===void 0&&it(()=>t[15].call(k)),se.disabled=!0,se.selected=!0,se.__value="",se.value=se.__value,m(A,"class","othersInput svelte-1myljlf"),m(A,"id","ranges"),m(A,"name","ranges"),t[2].rangeProp===void 0&&it(()=>t[16].call(A)),Se.disabled=!0,Se.selected=!0,Se.__value="",Se.value=Se.__value,m(he,"class","othersInput svelte-1myljlf"),t[2].numBeds===void 0&&it(()=>t[17].call(he)),q.disabled=!0,q.selected=!0,q.__value="",q.value=q.__value,m(Ue,"class","othersInput svelte-1myljlf"),t[2].numBaths===void 0&&it(()=>t[18].call(Ue)),We.disabled=!0,We.selected=!0,We.__value="",We.value=We.__value,m(Me,"class","othersInput svelte-1myljlf"),t[2].halfBathroom===void 0&&it(()=>t[19].call(Me)),qe.disabled=!0,qe.selected=!0,qe.__value="",qe.value=qe.__value,m(Re,"class","othersInput svelte-1myljlf"),t[2].numParks===void 0&&it(()=>t[20].call(Re)),m(Ce,"class","ubiTags svelte-1myljlf")},m(T,J){w(T,e,J),w(T,n,J),w(T,s,J),u(s,i),st.m(i,null),u(s,r),u(s,o),u(o,a),fe(a,t[2].name),u(o,l),u(o,c),fe(c,t[2].lastname),u(s,h),u(s,f),u(f,d),fe(d,t[2].telephon),u(f,g),u(f,_),fe(_,t[2].email),w(T,v,J),w(T,I,J),u(I,S),u(S,P);for(let me=0;me<ze.length;me+=1)ze[me].m(S,null);Ke(S,t[2].propCont),u(I,N),u(I,$),fe($,t[2].budget),w(T,L,J),w(T,V,J),u(V,O),fe(O,t[2].comContact),w(T,W,J),w(T,D,J),u(D,R);for(let me=0;me<Xe.length;me+=1)Xe[me].m(D,null);Ke(D,t[2].typeContact),w(T,G,J),w(T,F,J),u(F,re);for(let me=0;me<tt.length;me+=1)tt[me].m(F,null);Ke(F,t[2].selecMC),w(T,ee,J),w(T,x,J),u(x,j);for(let me=0;me<dt.length;me+=1)dt[me].m(x,null);Ke(x,t[2].modePay),w(T,te,J),w(T,k,J),u(k,z);for(let me=0;me<ct.length;me+=1)ct[me].m(k,null);Ke(k,t[2].selecTP),w(T,Q,J),w(T,A,J),u(A,se);for(let me=0;me<pt.length;me+=1)pt[me].m(A,null);Ke(A,t[2].rangeProp),w(T,we,J),w(T,he,J),u(he,Se);for(let me=0;me<pe.length;me+=1)pe[me].m(he,null);Ke(he,t[2].numBeds),w(T,Te,J),w(T,Ue,J),u(Ue,q);for(let me=0;me<_e.length;me+=1)_e[me].m(Ue,null);Ke(Ue,t[2].numBaths),w(T,ne,J),w(T,Me,J),u(Me,We);for(let me=0;me<Ve.length;me+=1)Ve[me].m(Me,null);Ke(Me,t[2].halfBathroom),w(T,Le,J),w(T,Re,J),u(Re,qe);for(let me=0;me<je.length;me+=1)je[me].m(Re,null);Ke(Re,t[2].numParks),w(T,Qe,J),w(T,Ce,J),oe(le,Ce,null),u(Ce,be),oe(Be,Ce,null),It=!0,Yt||(gt=[B(a,"input",t[5]),B(c,"input",t[6]),B(d,"input",t[7]),B(_,"input",t[8]),B(S,"change",t[9]),B($,"input",t[10]),B(O,"input",t[11]),B(D,"change",t[12]),B(F,"change",t[13]),B(x,"change",t[14]),B(k,"change",t[15]),B(A,"change",t[16]),B(he,"change",t[17]),B(Ue,"change",t[18]),B(Me,"change",t[19]),B(Re,"change",t[20])],Yt=!0)},p(T,J){if(Et===(Et=jt(T))&&st?st.p(T,J):(st.d(1),st=Et(T),st&&(st.c(),st.m(i,null))),J[0]&5&&a.value!==T[2].name&&fe(a,T[2].name),J[0]&5&&c.value!==T[2].lastname&&fe(c,T[2].lastname),J[0]&5&&fe(d,T[2].telephon),J[0]&5&&_.value!==T[2].email&&fe(_,T[2].email),J[0]&1){_t=T[0];let M;for(M=0;M<_t.length;M+=1){const Ae=Dh(T,_t,M);ze[M]?ze[M].p(Ae,J):(ze[M]=Rh(Ae),ze[M].c(),ze[M].m(S,null))}for(;M<ze.length;M+=1)ze[M].d(1);ze.length=_t.length}if(J[0]&5&&Ke(S,T[2].propCont),J[0]&5&&ps($.value)!==T[2].budget&&fe($,T[2].budget),J[0]&5&&fe(O,T[2].comContact),J&0){Ot=gh;let M;for(M=0;M<Ot.length;M+=1){const Ae=Ph(T,Ot,M);Xe[M]?Xe[M].p(Ae,J):(Xe[M]=Oh(Ae),Xe[M].c(),Xe[M].m(D,null))}for(;M<Xe.length;M+=1)Xe[M].d(1);Xe.length=Ot.length}if(J[0]&5&&Ke(D,T[2].typeContact),J&0){Xt=mh;let M;for(M=0;M<Xt.length;M+=1){const Ae=Ah(T,Xt,M);tt[M]?tt[M].p(Ae,J):(tt[M]=Nh(Ae),tt[M].c(),tt[M].m(F,null))}for(;M<tt.length;M+=1)tt[M].d(1);tt.length=Xt.length}if(J[0]&5&&Ke(F,T[2].selecMC),J&0){lt=_h;let M;for(M=0;M<lt.length;M+=1){const Ae=Ch(T,lt,M);dt[M]?dt[M].p(Ae,J):(dt[M]=Lh(Ae),dt[M].c(),dt[M].m(x,null))}for(;M<dt.length;M+=1)dt[M].d(1);dt.length=lt.length}if(J[0]&5&&Ke(x,T[2].modePay),J&0){St=Po;let M;for(M=0;M<St.length;M+=1){const Ae=Sh(T,St,M);ct[M]?ct[M].p(Ae,J):(ct[M]=Mh(Ae),ct[M].c(),ct[M].m(k,null))}for(;M<ct.length;M+=1)ct[M].d(1);ct.length=St.length}if(J[0]&5&&Ke(k,T[2].selecTP),J&0){Ct=yh;let M;for(M=0;M<Ct.length;M+=1){const Ae=Ih(T,Ct,M);pt[M]?pt[M].p(Ae,J):(pt[M]=$h(Ae),pt[M].c(),pt[M].m(A,null))}for(;M<pt.length;M+=1)pt[M].d(1);pt.length=Ct.length}if(J[0]&5&&Ke(A,T[2].rangeProp),J&0){Nt=Do;let M;for(M=0;M<Nt.length;M+=1){const Ae=kh(T,Nt,M);pe[M]?pe[M].p(Ae,J):(pe[M]=Fh(Ae),pe[M].c(),pe[M].m(he,null))}for(;M<pe.length;M+=1)pe[M].d(1);pe.length=Nt.length}if(J[0]&5&&Ke(he,T[2].numBeds),J&0){ke=An;let M;for(M=0;M<ke.length;M+=1){const Ae=Th(T,ke,M);_e[M]?_e[M].p(Ae,J):(_e[M]=Uh(Ae),_e[M].c(),_e[M].m(Ue,null))}for(;M<_e.length;M+=1)_e[M].d(1);_e.length=ke.length}if(J[0]&5&&Ke(Ue,T[2].numBaths),J&0){Jt=An;let M;for(M=0;M<Jt.length;M+=1){const Ae=Eh(T,Jt,M);Ve[M]?Ve[M].p(Ae,J):(Ve[M]=Bh(Ae),Ve[M].c(),Ve[M].m(Me,null))}for(;M<Ve.length;M+=1)Ve[M].d(1);Ve.length=Jt.length}if(J[0]&5&&Ke(Me,T[2].halfBathroom),J&0){an=An;let M;for(M=0;M<an.length;M+=1){const Ae=wh(T,an,M);je[M]?je[M].p(Ae,J):(je[M]=Vh(Ae),je[M].c(),je[M].m(Re,null))}for(;M<je.length;M+=1)je[M].d(1);je.length=an.length}J[0]&5&&Ke(Re,T[2].numParks);const me={};!He&&J[0]&4&&(He=!0,me.ubication=T[2].locaProperty,Ms(()=>He=!1)),le.$set(me);const Tt={};!Vt&&J[0]&4&&(Vt=!0,Tt.tag=T[2].tagsProperty,Ms(()=>Vt=!1)),Be.$set(Tt)},i(T){It||(U(le.$$.fragment,T),U(Be.$$.fragment,T),It=!0)},o(T){H(le.$$.fragment,T),H(Be.$$.fragment,T),It=!1},d(T){T&&b(e),T&&b(n),T&&b(s),st.d(),T&&b(v),T&&b(I),Ye(ze,T),T&&b(L),T&&b(V),T&&b(W),T&&b(D),Ye(Xe,T),T&&b(G),T&&b(F),Ye(tt,T),T&&b(ee),T&&b(x),Ye(dt,T),T&&b(te),T&&b(k),Ye(ct,T),T&&b(Q),T&&b(A),Ye(pt,T),T&&b(we),T&&b(he),Ye(pe,T),T&&b(Te),T&&b(Ue),Ye(_e,T),T&&b(ne),T&&b(Me),Ye(Ve,T),T&&b(Le),T&&b(Re),Ye(je,T),T&&b(Qe),T&&b(Ce),ae(le),ae(Be),Yt=!1,rt(gt)}}}function ik(t,e,n){let s;xe(t,mt,G=>n(2,s=G));var i=[];let r=Mn,o=!1;(()=>{for(let G of r){let F=`${G.nameProperty} ${G.claveEB} - ${(G.price/1e6).toFixed(2)}`;n(0,i=[...i,F])}return n(0,i=i.sort())})();function a(){n(1,o=!0)}function l(){s.createdAt=this.value,mt.set(s),n(0,i)}function c(){s.name=this.value,mt.set(s),n(0,i)}function h(){s.lastname=this.value,mt.set(s),n(0,i)}function f(){s.telephon=this.value,mt.set(s),n(0,i)}function d(){s.email=this.value,mt.set(s),n(0,i)}function g(){s.propCont=xt(this),mt.set(s),n(0,i)}function _(){s.budget=ps(this.value),mt.set(s),n(0,i)}function v(){s.comContact=this.value,mt.set(s),n(0,i)}function I(){s.typeContact=xt(this),mt.set(s),n(0,i)}function S(){s.selecMC=xt(this),mt.set(s),n(0,i)}function P(){s.modePay=xt(this),mt.set(s),n(0,i)}function N(){s.selecTP=xt(this),mt.set(s),n(0,i)}function $(){s.rangeProp=xt(this),mt.set(s),n(0,i)}function L(){s.numBeds=xt(this),mt.set(s),n(0,i)}function V(){s.numBaths=xt(this),mt.set(s),n(0,i)}function O(){s.halfBathroom=xt(this),mt.set(s),n(0,i)}function W(){s.numParks=xt(this),mt.set(s),n(0,i)}function D(G){t.$$.not_equal(s.locaProperty,G)&&(s.locaProperty=G,mt.set(s))}function R(G){t.$$.not_equal(s.tagsProperty,G)&&(s.tagsProperty=G,mt.set(s))}return[i,o,s,a,l,c,h,f,d,g,_,v,I,S,P,N,$,L,V,O,W,D,R]}class rk extends at{constructor(e){super(),ot(this,e,ik,sk,nt,{},null,[-1,-1])}}function jh(t,e,n){const s=t.slice();return s[24]=e[n],s}function qh(t,e,n){const s=t.slice();return s[27]=e[n],s}function Hh(t,e,n){const s=t.slice();return s[30]=e[n],s}function zh(t,e,n){const s=t.slice();return s[33]=e[n],s}function Gh(t,e,n){const s=t.slice();return s[36]=e[n],s}function Kh(t,e,n){const s=t.slice();return s[39]=e[n],s}function Wh(t,e,n){const s=t.slice();return s[42]=e[n],s}function ok(t){let e,n=mn(t[1].createdAt)+"",s,i,r;return{c(){e=p("h3"),s=C(n),m(e,"class","dataInput")},m(o,a){w(o,e,a),u(e,s),i||(r=B(e,"dblclick",t[3]),i=!0)},p(o,a){a[0]&2&&n!==(n=mn(o[1].createdAt)+"")&&ie(s,n)},d(o){o&&b(e),i=!1,r()}}}function ak(t){let e,n,s;return{c(){e=p("input"),m(e,"class","dataInput"),m(e,"type","date")},m(i,r){w(i,e,r),fe(e,t[1].createdAt),n||(s=B(e,"input",t[4]),n=!0)},p(i,r){r[0]&2&&fe(e,i[1].createdAt)},d(i){i&&b(e),n=!1,s()}}}function Qh(t){let e,n=t[42]+"",s;return{c(){e=p("option"),s=C(n),m(e,"type","checkbox"),e.__value=t[42],e.value=e.__value},m(i,r){w(i,e,r),u(e,s)},p:ue,d(i){i&&b(e)}}}function Yh(t){let e,n=t[39]+"",s,i;return{c(){e=p("option"),s=C(n),i=y(),m(e,"type","checkbox"),e.__value=t[39],e.value=e.__value},m(r,o){w(r,e,o),u(e,s),u(e,i)},p:ue,d(r){r&&b(e)}}}function Xh(t){let e,n=t[36]+"",s,i;return{c(){e=p("option"),s=C(n),i=C(" Rec\xE1maras"),m(e,"type","checkbox"),e.__value=t[36],e.value=e.__value},m(r,o){w(r,e,o),u(e,s),u(e,i)},p:ue,d(r){r&&b(e)}}}function Jh(t){let e,n=t[33]+"",s,i;return{c(){e=p("option"),s=C(n),i=C(" ba\xF1os"),m(e,"type","checkbox"),e.__value=t[33],e.value=e.__value},m(r,o){w(r,e,o),u(e,s),u(e,i)},p:ue,d(r){r&&b(e)}}}function xh(t){let e,n=t[30]+"",s,i;return{c(){e=p("option"),s=C(n),i=C(" Medios ba\xF1os"),m(e,"type","checkbox"),e.__value=t[30],e.value=e.__value},m(r,o){w(r,e,o),u(e,s),u(e,i)},p:ue,d(r){r&&b(e)}}}function Zh(t){let e,n=t[27]+"",s,i;return{c(){e=p("option"),s=C(n),i=C(" Estacionamientos"),m(e,"type","checkbox"),e.__value=t[27],e.value=e.__value},m(r,o){w(r,e,o),u(e,s),u(e,i)},p:ue,d(r){r&&b(e)}}}function ef(t){let e,n=t[24]+"",s;return{c(){e=p("option"),s=C(n),m(e,"type","checkbox"),e.__value=t[24],e.value=e.__value},m(i,r){w(i,e,r),u(e,s)},p:ue,d(i){i&&b(e)}}}function lk(t){let e,n,s,i,r,o,a,l,c,h,f,d,g,_,v,I,S,P,N,$,L,V,O,W,D,R,G,F,re,ee,x,j,te,k,z,Q,A,se,we,he,Se,Te,Ue,q,ne,Me,We,Le,Re,qe,Qe,Ce,le,He,be,Be,Vt,It,Yt,gt,jt,Et,st,_t,ze,Ot,Xe,Xt,tt,lt,dt,St,ct,Ct;function pt(E,Z){if(E[0])return ak;if(E[2]==="propEditing")return ok}let Nt=pt(t),pe=Nt&&Nt(t),ke=Po,_e=[];for(let E=0;E<ke.length;E+=1)_e[E]=Qh(Wh(t,ke,E));let Jt=vh,Ve=[];for(let E=0;E<Jt.length;E+=1)Ve[E]=Yh(Kh(t,Jt,E));let an=Do,je=[];for(let E=0;E<an.length;E+=1)je[E]=Xh(Gh(t,an,E));let Nn=An,At=[];for(let E=0;E<Nn.length;E+=1)At[E]=Jh(zh(t,Nn,E));let Sn=An,bt=[];for(let E=0;E<Sn.length;E+=1)bt[E]=xh(Hh(t,Sn,E));let T=An,J=[];for(let E=0;E<T.length;E+=1)J[E]=Zh(qh(t,T,E));let me=bh,Tt=[];for(let E=0;E<me.length;E+=1)Tt[E]=ef(jh(t,me,E));function M(E){t[22](E)}let Ae={};t[1].locaProperty!==void 0&&(Ae.ubication=t[1].locaProperty),Xe=new Ug({props:Ae}),Xn.push(()=>$s(Xe,"ubication",M));function Rr(E){t[23](E)}let os={};return t[1].tagsProperty!==void 0&&(os.tag=t[1].tagsProperty),lt=new Bg({props:os}),Xn.push(()=>$s(lt,"tag",Rr)),{c(){e=p("div"),pe&&pe.c(),n=y(),s=p("select"),i=p("option"),i.textContent="Tipo de Propiedad";for(let E=0;E<_e.length;E+=1)_e[E].c();r=y(),o=p("label"),o.innerHTML=`Titulo
       <input type="text"/>`,a=y(),l=p("label"),c=C(`Colonia\r
        `),h=p("input"),f=y(),d=p("label"),g=C(`Nombre de la Propiead\r
        `),_=p("input"),v=y(),I=p("label"),S=C(`Clave EB\r
        `),P=p("input"),N=y(),$=p("label"),L=C(`Clave MH\r
        `),V=p("input"),O=y(),W=p("div"),D=p("textarea"),R=y(),G=p("select"),F=p("option"),F.textContent="Tipo de Operaci\xF3n";for(let E=0;E<Ve.length;E+=1)Ve[E].c();re=y(),ee=p("select"),x=p("option"),x.textContent="# Rec\xE1maras";for(let E=0;E<je.length;E+=1)je[E].c();j=y(),te=p("select"),k=p("option"),k.textContent="# Ba\xF1os";for(let E=0;E<At.length;E+=1)At[E].c();z=y(),Q=p("select"),A=p("option"),A.textContent="# Medios Ba\xF1os";for(let E=0;E<bt.length;E+=1)bt[E].c();se=y(),we=p("select"),he=p("option"),he.textContent="# Estacionamientos";for(let E=0;E<J.length;E+=1)J[E].c();Se=y(),Te=p("label"),Ue=C(`Area de Construcci\xF3n\r
            `),q=p("input"),ne=y(),Me=p("label"),We=C(`Area de Terreno\r
            `),Le=p("input"),Re=y(),qe=p("label"),Qe=C(`Precio\r
            `),Ce=p("input"),le=y(),He=p("label"),be=C(`Link Imgen\r
        `),Be=p("input"),Vt=y(),It=p("label"),Yt=C(`Link de la Propiedad\r
        `),gt=p("input"),jt=y(),Et=p("label"),Et.innerHTML=`Propietario
            <input type="text"/>`,st=y(),_t=p("select"),ze=p("option"),ze.textContent="Tipo de Encargado";for(let E=0;E<Tt.length;E+=1)Tt[E].c();Ot=y(),ce(Xe.$$.fragment),tt=y(),ce(lt.$$.fragment),i.disabled=!0,i.selected=!0,i.__value="",i.value=i.__value,m(s,"class","selTP"),m(s,"id","selTP"),m(s,"name","selTP"),t[1].selecTP===void 0&&it(()=>t[5].call(s)),m(h,"type","text"),m(_,"type","text"),m(P,"type","text"),m(V,"type","text"),m(D,"placeholder","Comentarios"),m(D,"cols","65"),m(D,"rows","5"),m(D,"class","form-control"),m(W,"class","col"),F.disabled=!0,F.selected=!0,F.__value="",F.value=F.__value,t[1].typeOperation===void 0&&it(()=>t[11].call(G)),x.disabled=!0,x.selected=!0,x.__value="",x.value=x.__value,t[1].beds===void 0&&it(()=>t[12].call(ee)),k.disabled=!0,k.selected=!0,k.__value="",k.value=k.__value,t[1].bathroom===void 0&&it(()=>t[13].call(te)),A.disabled=!0,A.selected=!0,A.__value="",A.value=A.__value,t[1].halfBathroom===void 0&&it(()=>t[14].call(Q)),he.disabled=!0,he.selected=!0,he.__value="",he.value=he.__value,t[1].park===void 0&&it(()=>t[15].call(we)),m(q,"type","number"),m(Le,"type","number"),m(Ce,"type","number"),m(Be,"type","text"),m(gt,"type","text"),ze.disabled=!0,ze.selected=!0,ze.__value="",ze.value=ze.__value,m(_t,"name","typeSaller"),t[1].typeSaller===void 0&&it(()=>t[21].call(_t))},m(E,Z){w(E,e,Z),pe&&pe.m(e,null),w(E,n,Z),w(E,s,Z),u(s,i);for(let $e=0;$e<_e.length;$e+=1)_e[$e].m(s,null);Ke(s,t[1].selecTP),w(E,r,Z),w(E,o,Z),w(E,a,Z),w(E,l,Z),u(l,c),u(l,h),fe(h,t[1].colonia),w(E,f,Z),w(E,d,Z),u(d,g),u(d,_),fe(_,t[1].nameProperty),w(E,v,Z),w(E,I,Z),u(I,S),u(I,P),fe(P,t[1].claveEB),w(E,N,Z),w(E,$,Z),u($,L),u($,V),fe(V,t[1].claveMH),w(E,O,Z),w(E,W,Z),u(W,D),fe(D,t[1].description),w(E,R,Z),w(E,G,Z),u(G,F);for(let $e=0;$e<Ve.length;$e+=1)Ve[$e].m(G,null);Ke(G,t[1].typeOperation),w(E,re,Z),w(E,ee,Z),u(ee,x);for(let $e=0;$e<je.length;$e+=1)je[$e].m(ee,null);Ke(ee,t[1].beds),w(E,j,Z),w(E,te,Z),u(te,k);for(let $e=0;$e<At.length;$e+=1)At[$e].m(te,null);Ke(te,t[1].bathroom),w(E,z,Z),w(E,Q,Z),u(Q,A);for(let $e=0;$e<bt.length;$e+=1)bt[$e].m(Q,null);Ke(Q,t[1].halfBathroom),w(E,se,Z),w(E,we,Z),u(we,he);for(let $e=0;$e<J.length;$e+=1)J[$e].m(we,null);Ke(we,t[1].park),w(E,Se,Z),w(E,Te,Z),u(Te,Ue),u(Te,q),fe(q,t[1].areaBuilding),w(E,ne,Z),w(E,Me,Z),u(Me,We),u(Me,Le),fe(Le,t[1].areaTotal),w(E,Re,Z),w(E,qe,Z),u(qe,Qe),u(qe,Ce),fe(Ce,t[1].price),w(E,le,Z),w(E,He,Z),u(He,be),u(He,Be),fe(Be,t[1].urlImage),w(E,Vt,Z),w(E,It,Z),u(It,Yt),u(It,gt),fe(gt,t[1].urlProp),w(E,jt,Z),w(E,Et,Z),w(E,st,Z),w(E,_t,Z),u(_t,ze);for(let $e=0;$e<Tt.length;$e+=1)Tt[$e].m(_t,null);Ke(_t,t[1].typeSaller),w(E,Ot,Z),oe(Xe,E,Z),w(E,tt,Z),oe(lt,E,Z),St=!0,ct||(Ct=[B(s,"change",t[5]),B(h,"input",t[6]),B(_,"input",t[7]),B(P,"input",t[8]),B(V,"input",t[9]),B(D,"input",t[10]),B(G,"change",t[11]),B(ee,"change",t[12]),B(te,"change",t[13]),B(Q,"change",t[14]),B(we,"change",t[15]),B(q,"input",t[16]),B(Le,"input",t[17]),B(Ce,"input",t[18]),B(Be,"input",t[19]),B(gt,"input",t[20]),B(_t,"change",t[21])],ct=!0)},p(E,Z){if(Nt===(Nt=pt(E))&&pe?pe.p(E,Z):(pe&&pe.d(1),pe=Nt&&Nt(E),pe&&(pe.c(),pe.m(e,null))),Z&0){ke=Po;let K;for(K=0;K<ke.length;K+=1){const ut=Wh(E,ke,K);_e[K]?_e[K].p(ut,Z):(_e[K]=Qh(ut),_e[K].c(),_e[K].m(s,null))}for(;K<_e.length;K+=1)_e[K].d(1);_e.length=ke.length}if(Z[0]&2&&Ke(s,E[1].selecTP),Z[0]&2&&h.value!==E[1].colonia&&fe(h,E[1].colonia),Z[0]&2&&_.value!==E[1].nameProperty&&fe(_,E[1].nameProperty),Z[0]&2&&P.value!==E[1].claveEB&&fe(P,E[1].claveEB),Z[0]&2&&V.value!==E[1].claveMH&&fe(V,E[1].claveMH),Z[0]&2&&fe(D,E[1].description),Z&0){Jt=vh;let K;for(K=0;K<Jt.length;K+=1){const ut=Kh(E,Jt,K);Ve[K]?Ve[K].p(ut,Z):(Ve[K]=Yh(ut),Ve[K].c(),Ve[K].m(G,null))}for(;K<Ve.length;K+=1)Ve[K].d(1);Ve.length=Jt.length}if(Z[0]&2&&Ke(G,E[1].typeOperation),Z&0){an=Do;let K;for(K=0;K<an.length;K+=1){const ut=Gh(E,an,K);je[K]?je[K].p(ut,Z):(je[K]=Xh(ut),je[K].c(),je[K].m(ee,null))}for(;K<je.length;K+=1)je[K].d(1);je.length=an.length}if(Z[0]&2&&Ke(ee,E[1].beds),Z&0){Nn=An;let K;for(K=0;K<Nn.length;K+=1){const ut=zh(E,Nn,K);At[K]?At[K].p(ut,Z):(At[K]=Jh(ut),At[K].c(),At[K].m(te,null))}for(;K<At.length;K+=1)At[K].d(1);At.length=Nn.length}if(Z[0]&2&&Ke(te,E[1].bathroom),Z&0){Sn=An;let K;for(K=0;K<Sn.length;K+=1){const ut=Hh(E,Sn,K);bt[K]?bt[K].p(ut,Z):(bt[K]=xh(ut),bt[K].c(),bt[K].m(Q,null))}for(;K<bt.length;K+=1)bt[K].d(1);bt.length=Sn.length}if(Z[0]&2&&Ke(Q,E[1].halfBathroom),Z&0){T=An;let K;for(K=0;K<T.length;K+=1){const ut=qh(E,T,K);J[K]?J[K].p(ut,Z):(J[K]=Zh(ut),J[K].c(),J[K].m(we,null))}for(;K<J.length;K+=1)J[K].d(1);J.length=T.length}if(Z[0]&2&&Ke(we,E[1].park),Z[0]&2&&ps(q.value)!==E[1].areaBuilding&&fe(q,E[1].areaBuilding),Z[0]&2&&ps(Le.value)!==E[1].areaTotal&&fe(Le,E[1].areaTotal),Z[0]&2&&ps(Ce.value)!==E[1].price&&fe(Ce,E[1].price),Z[0]&2&&Be.value!==E[1].urlImage&&fe(Be,E[1].urlImage),Z[0]&2&&gt.value!==E[1].urlProp&&fe(gt,E[1].urlProp),Z&0){me=bh;let K;for(K=0;K<me.length;K+=1){const ut=jh(E,me,K);Tt[K]?Tt[K].p(ut,Z):(Tt[K]=ef(ut),Tt[K].c(),Tt[K].m(_t,null))}for(;K<Tt.length;K+=1)Tt[K].d(1);Tt.length=me.length}Z[0]&2&&Ke(_t,E[1].typeSaller);const $e={};!Xt&&Z[0]&2&&(Xt=!0,$e.ubication=E[1].locaProperty,Ms(()=>Xt=!1)),Xe.$set($e);const Ii={};!dt&&Z[0]&2&&(dt=!0,Ii.tag=E[1].tagsProperty,Ms(()=>dt=!1)),lt.$set(Ii)},i(E){St||(U(Xe.$$.fragment,E),U(lt.$$.fragment,E),St=!0)},o(E){H(Xe.$$.fragment,E),H(lt.$$.fragment,E),St=!1},d(E){E&&b(e),pe&&pe.d(),E&&b(n),E&&b(s),Ye(_e,E),E&&b(r),E&&b(o),E&&b(a),E&&b(l),E&&b(f),E&&b(d),E&&b(v),E&&b(I),E&&b(N),E&&b($),E&&b(O),E&&b(W),E&&b(R),E&&b(G),Ye(Ve,E),E&&b(re),E&&b(ee),Ye(je,E),E&&b(j),E&&b(te),Ye(At,E),E&&b(z),E&&b(Q),Ye(bt,E),E&&b(se),E&&b(we),Ye(J,E),E&&b(Se),E&&b(Te),E&&b(ne),E&&b(Me),E&&b(Re),E&&b(qe),E&&b(le),E&&b(He),E&&b(Vt),E&&b(It),E&&b(jt),E&&b(Et),E&&b(st),E&&b(_t),Ye(Tt,E),E&&b(Ot),ae(Xe,E),E&&b(tt),ae(lt,E),ct=!1,rt(Ct)}}}function ck(t,e,n){let s,i;xe(t,ht,G=>n(1,s=G)),xe(t,kt,G=>n(2,i=G));let r=!1;function o(){n(0,r=!0)}function a(){s.createdAt=this.value,ht.set(s)}function l(){s.selecTP=xt(this),ht.set(s)}function c(){s.colonia=this.value,ht.set(s)}function h(){s.nameProperty=this.value,ht.set(s)}function f(){s.claveEB=this.value,ht.set(s)}function d(){s.claveMH=this.value,ht.set(s)}function g(){s.description=this.value,ht.set(s)}function _(){s.typeOperation=xt(this),ht.set(s)}function v(){s.beds=xt(this),ht.set(s)}function I(){s.bathroom=xt(this),ht.set(s)}function S(){s.halfBathroom=xt(this),ht.set(s)}function P(){s.park=xt(this),ht.set(s)}function N(){s.areaBuilding=ps(this.value),ht.set(s)}function $(){s.areaTotal=ps(this.value),ht.set(s)}function L(){s.price=ps(this.value),ht.set(s)}function V(){s.urlImage=this.value,ht.set(s)}function O(){s.urlProp=this.value,ht.set(s)}function W(){s.typeSaller=xt(this),ht.set(s)}function D(G){t.$$.not_equal(s.locaProperty,G)&&(s.locaProperty=G,ht.set(s))}function R(G){t.$$.not_equal(s.tagsProperty,G)&&(s.tagsProperty=G,ht.set(s))}return[r,s,i,o,a,l,c,h,f,d,g,_,v,I,S,P,N,$,L,V,O,W,D,R]}class uk extends at{constructor(e){super(),ot(this,e,ck,lk,nt,{},null,[-1,-1])}}function hk(t){let e;return{c(){e=C("Editar")},m(n,s){w(n,e,s)},d(n){n&&b(e)}}}function fk(t){let e;return{c(){e=C("Guardar")},m(n,s){w(n,e,s)},d(n){n&&b(e)}}}function dk(t){let e,n,s,i,r,o,a,l,c,h;n=new rk({});function f(_,v){return _[0]?hk:fk}let d=f(t),g=d(t);return{c(){e=p("div"),ce(n.$$.fragment),s=y(),i=p("div"),r=p("button"),g.c(),o=y(),a=p("button"),a.textContent="Cancel",m(r,"class","btn-save"),m(a,"class","btn-cancel"),m(i,"class","contSavCan svelte-1at07r"),m(e,"class","altaContactos")},m(_,v){w(_,e,v),oe(n,e,null),u(e,s),u(e,i),u(i,r),g.m(r,null),u(i,o),u(i,a),l=!0,c||(h=[B(r,"click",t[5]),B(a,"click",t[3])],c=!0)},p(_,[v]){d!==(d=f(_))&&(g.d(1),g=d(_),g&&(g.c(),g.m(r,null)))},i(_){l||(U(n.$$.fragment,_),l=!0)},o(_){H(n.$$.fragment,_),l=!1},d(_){_&&b(e),ae(n),g.d(),c=!1,rt(h)}}}function pk(t,e,n){let s,i;xe(t,kt,f=>n(7,s=f)),xe(t,mt,f=>n(1,i=f));let r=!1,o;async function a(f){if(o=Date.now(),f={...f,createdAt:o},s!="contEditing"){const d=Hn(Kt,"contacts");await _i(d,f)}else await aa(ns(Kt,"contacts",f.id),f),n(0,r=!1);f=[],wt(kt,s="contSelect",s)}function l(f){try{console.log("se dio de alta a: ");const d=Hn(Kt,"todos");_i(d,f)}catch(d){console.log("error",d)}}function c(){n(0,r=!0),location.href="/"}return[r,i,a,c,l,()=>a(i)]}class Vg extends at{constructor(e){super(),ot(this,e,pk,dk,nt,{addContact:4})}get addContact(){return this.$$.ctx[4]}}function tf(t,e,n){const s=t.slice();return s[40]=e[n],s}function nf(t,e,n){const s=t.slice();return s[43]=e[n],s}function sf(t){let e,n,s,i,r,o=t[8].name+"",a,l,c=t[8].lastname+"",h,f,d,g,_=mn(t[8].createdAt)+"",v,I,S,P,N=t[8].selecTP+"",$,L,V=t[8].numBeds+"",O,W,D=t[8].numBaths+"",R,G,F=t[8].numParks+"",re,ee,x,j,te,k,z=t[8].budget+"",Q,A,se,we=t[8].selecTP+"",he,Se,Te,Ue,q,ne=t[8].telephon+"",Me,We,Le,Re=t[8].email+"",qe,Qe,Ce,le,He=t[8].tagsProperty.join(",  ")+"",be,Be,Vt,It,Yt=t[8].locaProperty.join(",  ")+"",gt,jt,Et,st,_t,ze,Ot,Xe,Xt,tt,lt=t[8].contactStage+"",dt,St,ct,Ct=t[8].comContact+"",pt,Nt,pe,ke,_e,Jt,Ve,an,je,Nn,At,Sn,bt,T,J,me,Tt,M,Ae,Rr,os,E,Z,$e,Ii,K,ut,jc,Si,pa,Ci,Lt,ma,qc,Ws=t[8].sendedProperties,_n=[];for(let ve=0;ve<Ws.length;ve+=1)_n[ve]=rf(nf(t,Ws,ve));let vn=t[0]&&of(t),qt=t[2]&&af(t),Ht=t[7]&&lf(t),zt=t[6]&&cf(t);return{c(){e=p("div"),n=p("div"),s=p("h4"),s.textContent="Contacto",i=y(),r=p("h2"),a=C(o),l=y(),h=C(c),f=y(),d=p("p"),g=C("Fecha Alta: "),v=C(_),I=y(),S=p("p"),P=C("Busca  "),$=C(N),L=C(", de "),O=C(V),W=C(" rec\xE1maras,  "),R=C(D),G=C(" ba\xF1os y "),re=C(F),ee=C(" estacionamientos"),x=y(),j=p("p"),te=C("Presupuesto tope: "),k=p("strong"),Q=C(z),A=C(" : Tipo de propiedad buscada: "),se=p("strong"),he=C(we),Se=y(),Te=p("p"),Ue=C("Tel\xE9fono: "),q=p("strong"),Me=C(ne),We=C(" ---- Email: "),Le=p("strong"),qe=C(Re),Qe=y(),Ce=p("p"),le=C("Preferencias: "),be=C(He),Be=y(),Vt=p("p"),It=C("Ubicaciones: "),gt=C(Yt),jt=y(),Et=p("div"),st=p("p"),st.textContent="Propiedades enviadas:",_t=y(),ze=p("div");for(let ve=0;ve<_n.length;ve+=1)_n[ve].c();Ot=y(),Xe=p("div"),vn&&vn.c(),Xt=y(),tt=p("p"),dt=C(lt),St=y(),ct=p("p"),pt=C(Ct),Nt=y(),pe=p("div"),ke=p("button"),ke.textContent="Programar Evento",_e=y(),qt&&qt.c(),Jt=y(),Ve=p("button"),Ve.textContent="Ver Propiedades de Interes",an=y(),je=p("button"),je.textContent="Buscar Propiedad",Nn=y(),Ht&&Ht.c(),At=y(),Sn=p("div"),bt=p("button"),bt.textContent="Cancelar",T=y(),J=p("div"),me=p("div"),Tt=p("link"),M=y(),Ae=p("textarea"),Rr=y(),os=p("div"),E=p("button"),E.textContent="Enviar WhatsApp",Z=y(),$e=p("button"),$e.textContent="Guardar Info",Ii=y(),K=p("div"),ut=p("i"),ut.textContent="edit",jc=y(),Si=p("i"),Si.textContent="delete_forever",pa=y(),zt&&zt.c(),Ci=rn(),m(ze,"class","mostImage svelte-ce274g"),m(Et,"class","propMost"),m(ke,"class","btnCommon"),m(Ve,"class","btnCommon"),m(je,"class","btnCommon"),m(bt,"class","btnCommon btnCancel"),m(Tt,"href","https://fonts.googleapis.com/icon?family=Material+Icons"),m(Tt,"rel","stylesheet"),m(Ae,"class","texArea"),m(Ae,"cols","65"),m(Ae,"rows","5"),m(Ae,"placeholder","Ingresa un comentario"),m(E,"class","btnCommon btnWhatsApp"),m($e,"class","btnCommon"),m(ut,"class","material-icons edit"),m(Si,"class","material-icons delete"),m(K,"class","iconContent"),m(e,"class","container")},m(ve,Ze){w(ve,e,Ze),u(e,n),u(n,s),u(n,i),u(n,r),u(r,a),u(r,l),u(r,h),u(n,f),u(n,d),u(d,g),u(d,v),u(n,I),u(n,S),u(S,P),u(S,$),u(S,L),u(S,O),u(S,W),u(S,R),u(S,G),u(S,re),u(S,ee),u(n,x),u(n,j),u(j,te),u(j,k),u(k,Q),u(j,A),u(j,se),u(se,he),u(n,Se),u(n,Te),u(Te,Ue),u(Te,q),u(q,Me),u(Te,We),u(Te,Le),u(Le,qe),u(n,Qe),u(n,Ce),u(Ce,le),u(Ce,be),u(n,Be),u(n,Vt),u(Vt,It),u(Vt,gt),u(n,jt),u(n,Et),u(Et,st),u(Et,_t),u(Et,ze);for(let ln=0;ln<_n.length;ln+=1)_n[ln].m(ze,null);u(e,Ot),u(e,Xe),vn&&vn.m(Xe,null),u(e,Xt),u(e,tt),u(tt,dt),u(e,St),u(e,ct),u(ct,pt),u(e,Nt),u(e,pe),u(pe,ke),u(pe,_e),qt&&qt.m(pe,null),u(pe,Jt),u(pe,Ve),u(pe,an),u(pe,je),u(pe,Nn),Ht&&Ht.m(pe,null),u(e,At),u(e,Sn),u(Sn,bt),u(e,T),u(e,J),u(J,me),u(me,Tt),u(me,M),u(me,Ae),fe(Ae,t[4]),u(me,Rr),u(me,os),u(os,E),u(os,Z),u(os,$e),u(J,Ii),u(J,K),u(K,ut),u(K,jc),u(K,Si),w(ve,pa,Ze),zt&&zt.m(ve,Ze),w(ve,Ci,Ze),Lt=!0,ma||(qc=[B(ke,"click",t[27]),B(Ve,"click",t[28]),B(je,"click",t[14]),B(bt,"click",t[17]),B(Ae,"keypress",t[18]),B(Ae,"input",t[30]),B(E,"click",t[23]),B($e,"click",t[24]),B(ut,"click",t[19]),B(Si,"click",t[20])],ma=!0)},p(ve,Ze){if((!Lt||Ze[0]&256)&&o!==(o=ve[8].name+"")&&ie(a,o),(!Lt||Ze[0]&256)&&c!==(c=ve[8].lastname+"")&&ie(h,c),(!Lt||Ze[0]&256)&&_!==(_=mn(ve[8].createdAt)+"")&&ie(v,_),(!Lt||Ze[0]&256)&&N!==(N=ve[8].selecTP+"")&&ie($,N),(!Lt||Ze[0]&256)&&V!==(V=ve[8].numBeds+"")&&ie(O,V),(!Lt||Ze[0]&256)&&D!==(D=ve[8].numBaths+"")&&ie(R,D),(!Lt||Ze[0]&256)&&F!==(F=ve[8].numParks+"")&&ie(re,F),(!Lt||Ze[0]&256)&&z!==(z=ve[8].budget+"")&&ie(Q,z),(!Lt||Ze[0]&256)&&we!==(we=ve[8].selecTP+"")&&ie(he,we),(!Lt||Ze[0]&256)&&ne!==(ne=ve[8].telephon+"")&&ie(Me,ne),(!Lt||Ze[0]&256)&&Re!==(Re=ve[8].email+"")&&ie(qe,Re),(!Lt||Ze[0]&256)&&He!==(He=ve[8].tagsProperty.join(",  ")+"")&&ie(be,He),(!Lt||Ze[0]&256)&&Yt!==(Yt=ve[8].locaProperty.join(",  ")+"")&&ie(gt,Yt),Ze[0]&6402){Ws=ve[8].sendedProperties;let ln;for(ln=0;ln<Ws.length;ln+=1){const Hc=nf(ve,Ws,ln);_n[ln]?_n[ln].p(Hc,Ze):(_n[ln]=rf(Hc),_n[ln].c(),_n[ln].m(ze,null))}for(;ln<_n.length;ln+=1)_n[ln].d(1);_n.length=Ws.length}ve[0]?vn?vn.p(ve,Ze):(vn=of(ve),vn.c(),vn.m(Xe,null)):vn&&(vn.d(1),vn=null),(!Lt||Ze[0]&256)&&lt!==(lt=ve[8].contactStage+"")&&ie(dt,lt),(!Lt||Ze[0]&256)&&Ct!==(Ct=ve[8].comContact+"")&&ie(pt,Ct),ve[2]?qt?(qt.p(ve,Ze),Ze[0]&4&&U(qt,1)):(qt=af(ve),qt.c(),U(qt,1),qt.m(pe,Jt)):qt&&(Mt(),H(qt,1,1,()=>{qt=null}),$t()),ve[7]?Ht?(Ht.p(ve,Ze),Ze[0]&128&&U(Ht,1)):(Ht=lf(ve),Ht.c(),U(Ht,1),Ht.m(pe,null)):Ht&&(Mt(),H(Ht,1,1,()=>{Ht=null}),$t()),Ze[0]&16&&fe(Ae,ve[4]),ve[6]?zt?(zt.p(ve,Ze),Ze[0]&64&&U(zt,1)):(zt=cf(ve),zt.c(),U(zt,1),zt.m(Ci.parentNode,Ci)):zt&&(Mt(),H(zt,1,1,()=>{zt=null}),$t())},i(ve){Lt||(U(qt),U(Ht),U(zt),Lt=!0)},o(ve){H(qt),H(Ht),H(zt),Lt=!1},d(ve){ve&&b(e),Ye(_n,ve),vn&&vn.d(),qt&&qt.d(),Ht&&Ht.d(),ve&&b(pa),zt&&zt.d(ve),ve&&b(Ci),ma=!1,rt(qc)}}}function rf(t){let e,n=t[43]+"",s,i,r,o;function a(){return t[25](t[43])}return{c(){e=p("p"),s=C(n),m(e,"value",i=t[43])},m(l,c){w(l,e,c),u(e,s),r||(o=[B(e,"mouseenter",a),B(e,"mouseout",t[12]),B(e,"dblclick",t[26])],r=!0)},p(l,c){t=l,c[0]&256&&n!==(n=t[43]+"")&&ie(s,n),c[0]&256&&i!==(i=t[43])&&m(e,"value",i)},d(l){l&&b(e),r=!1,rt(o)}}}function of(t){let e,n=t[1][0].nameProperty+"",s,i,r,o,a;return{c(){e=p("h3"),s=C(n),i=y(),r=p("img"),m(e,"class","svelte-ce274g"),m(r,"class","imgPropContSelect"),m(r,"height","200"),dn(r.src,o=t[1][0].urlImage)||m(r,"src",o),m(r,"alt",a=t[1][0].claveEB)},m(l,c){w(l,e,c),u(e,s),w(l,i,c),w(l,r,c)},p(l,c){c[0]&2&&n!==(n=l[1][0].nameProperty+"")&&ie(s,n),c[0]&2&&!dn(r.src,o=l[1][0].urlImage)&&m(r,"src",o),c[0]&2&&a!==(a=l[1][0].claveEB)&&m(r,"alt",a)},d(l){l&&b(e),l&&b(i),l&&b(r)}}}function af(t){let e,n;const s=[t[8]];let i={};for(let r=0;r<s.length;r+=1)i=Wt(i,s[r]);return e=new WT({props:i}),e.$on("closeIt",t[21]),{c(){ce(e.$$.fragment)},m(r,o){oe(e,r,o),n=!0},p(r,o){const a=o[0]&256?kn(s,[Jn(r[8])]):{};e.$set(a)},i(r){n||(U(e.$$.fragment,r),n=!0)},o(r){H(e.$$.fragment,r),n=!1},d(r){ae(e,r)}}}function lf(t){let e,n,s;function i(o){t[29](o)}let r={};return t[3]!==void 0&&(r.searchTerm=t[3]),e=new Bc({props:r}),Xn.push(()=>$s(e,"searchTerm",i)),e.$on("input",t[15]),{c(){ce(e.$$.fragment)},m(o,a){oe(e,o,a),s=!0},p(o,a){const l={};!n&&a[0]&8&&(n=!0,l.searchTerm=o[3],Ms(()=>n=!1)),e.$set(l)},i(o){s||(U(e.$$.fragment,o),s=!0)},o(o){H(e.$$.fragment,o),s=!1},d(o){ae(e,o)}}}function cf(t){let e,n,s,i=t[10].length+"",r,o,a,l,c=t[10],h=[];for(let g=0;g<c.length;g+=1)h[g]=uf(tf(t,c,g));const f=g=>H(h[g],1,1,()=>{h[g]=null});let d=t[10].length===0&&hf();return{c(){e=p("main"),n=p("h3"),s=C("Propiedades encontradas: "),r=C(i),o=y();for(let g=0;g<h.length;g+=1)h[g].c();a=y(),d&&d.c(),m(n,"class","svelte-ce274g"),m(e,"id","bookshelf"),m(e,"class","svelte-ce274g")},m(g,_){w(g,e,_),u(e,n),u(n,s),u(n,r),u(e,o);for(let v=0;v<h.length;v+=1)h[v].m(e,null);u(e,a),d&&d.m(e,null),l=!0},p(g,_){if((!l||_[0]&1024)&&i!==(i=g[10].length+"")&&ie(r,i),_[0]&4195360){c=g[10];let v;for(v=0;v<c.length;v+=1){const I=tf(g,c,v);h[v]?(h[v].p(I,_),U(h[v],1)):(h[v]=uf(I),h[v].c(),U(h[v],1),h[v].m(e,a))}for(Mt(),v=c.length;v<h.length;v+=1)f(v);$t()}g[10].length===0?d||(d=hf(),d.c(),d.m(e,null)):d&&(d.d(1),d=null)},i(g){if(!l){for(let _=0;_<c.length;_+=1)U(h[_]);l=!0}},o(g){h=h.filter(Boolean);for(let _=0;_<h.length;_+=1)H(h[_]);l=!1},d(g){g&&b(e),Ye(h,g),d&&d.d()}}}function uf(t){let e,n,s,i,r,o,a,l,c;const h=[t[40]];let f={};for(let d=0;d<h.length;d+=1)f=Wt(f,h[d]);return r=new $g({props:f}),{c(){e=p("section"),n=p("input"),i=y(),ce(r.$$.fragment),m(n,"type","checkbox"),n.__value=s=t[40].urlProp,n.value=n.__value,m(n,"class","form-check"),t[32][0].push(n),m(e,"class","property svelte-ce274g")},m(d,g){w(d,e,g),u(e,n),n.checked=~t[5].indexOf(n.__value),u(e,i),oe(r,e,null),a=!0,l||(c=[B(n,"change",t[31]),B(e,"click",t[22])],l=!0)},p(d,g){t=d,(!a||g[0]&1024&&s!==(s=t[40].urlProp))&&(n.__value=s,n.value=n.__value),g[0]&32&&(n.checked=~t[5].indexOf(n.__value));const _=g[0]&1024?kn(h,[Jn(t[40])]):{};r.$set(_)},i(d){a||(U(r.$$.fragment,d),it(()=>{o||(o=Pn(e,Ao,{duration:500,easing:Io},!0)),o.run(1)}),a=!0)},o(d){H(r.$$.fragment,d),o||(o=Pn(e,Ao,{duration:500,easing:Io},!1)),o.run(0),a=!1},d(d){d&&b(e),t[32][0].splice(t[32][0].indexOf(n),1),ae(r),d&&o&&o.end(),l=!1,rt(c)}}}function hf(t){let e;return{c(){e=p("h3"),e.textContent='"No hay Propiedades para este contacto"',m(e,"class","svelte-ce274g")},m(n,s){w(n,e,s)},d(n){n&&b(e)}}}function mk(t){let e,n,s=t[9]==="contSelect"&&sf(t);return{c(){e=p("main"),s&&s.c()},m(i,r){w(i,e,r),s&&s.m(e,null),n=!0},p(i,r){i[9]==="contSelect"?s?(s.p(i,r),r[0]&512&&U(s,1)):(s=sf(i),s.c(),U(s,1),s.m(e,null)):s&&(Mt(),H(s,1,1,()=>{s=null}),$t())},i(i){n||(U(s),n=!0)},o(i){H(s),n=!1},d(i){i&&b(e),s&&s.d()}}}function gk(t){window.open(t)}function _k(t,e,n){let s,i,r;xe(t,mt,Q=>n(8,s=Q)),xe(t,kt,Q=>n(9,i=Q)),xe(t,El,Q=>n(10,r=Q));let o=!1,a,l=!1,c,h,f=[],d=!1,g=!1;console.log(i);function _(Q){n(0,o=!0),n(1,a=Mn.filter(A=>A.claveEB===Q))}function v(){n(0,o=!1)}function I(){console.log("estas en addSchedule"),n(2,l=!0)}function S(){n(7,g=!0)}const P=()=>(n(6,d=!0),wt(El,r=Mn.filter(Q=>(Q.nameProperty+" "+Q.colonia+" "+Q.claveEB).toLowerCase().includes(c.toLowerCase())),r));function N(Q){XT(Q),n(6,d=!0)}const $=()=>{wt(kt,i="start",i)};function L(){}function V(){wt(kt,i="contEditing",i)}async function O(){confirm("Deseas eleiminar definitivamente al contacto?")&&(await la(ns(Kt,"contacts",s.id)),window.location.href="/")}function W(){n(2,l=!1)}function D(){console.log(f)}function R(){console.log(f);let Q=`https://api.whatsapp.com/send?phone=52${s.telephon}&text=${f}`;window.open(Q),Mg()}function G(){console.log(f)}const F=[[]],re=Q=>_(Q),ee=()=>gk(a[0].urlProp),x=()=>I(),j=()=>N(s);function te(Q){c=Q,n(3,c)}function k(){h=this.value,n(4,h)}function z(){f=Zt(F[0],this.__value,this.checked),n(5,f)}return[o,a,l,c,h,f,d,g,s,i,r,_,v,I,S,P,N,$,L,V,O,W,D,R,G,re,ee,x,j,te,k,z,F]}class vk extends at{constructor(e){super(),ot(this,e,_k,mk,nt,{},null,[-1,-1])}}function ff(t,e,n){const s=t.slice();return s[22]=e[n],s[24]=n,s}function df(t,e,n){const s=t.slice();return s[24]=e[n],s}function pf(t,e,n){const s=t.slice();return s[12]=e[n],s[24]=n,s}function mf(t){let e,n,s,i,r,o,a,l,c,h,f,d,g,_,v,I,S,P,N,$,L,V;function O(k){t[14](k)}let W={};t[3]!==void 0&&(W.searchTerm=t[3]),r=new Bc({props:W}),Xn.push(()=>$s(r,"searchTerm",O)),r.$on("input",t[11]);let D=t[1],R=[];for(let k=0;k<D.length;k+=1)R[k]=_f(pf(t,D,k));const G=k=>H(R[k],1,1,()=>{R[k]=null});let F=t[0]>1&&vf(t),re=[3,2,1],ee=[];for(let k=0;k<3;k+=1)ee[k]=bf(df(t,re,k));let x=Array(3),j=[];for(let k=0;k<x.length;k+=1)j[k]=Ef(ff(t,x,k));let te=t[0]<t[5]&&Tf(t);return{c(){e=p("h2"),e.textContent=`${yi.length} Contactos a Mostrar`,n=y(),s=p("button"),s.textContent="Alta de Contacto",i=y(),ce(r.$$.fragment),a=y(),l=p("div"),c=p("div");for(let k=0;k<R.length;k+=1)R[k].c();h=y(),f=p("div"),d=p("ul"),F&&F.c(),g=y();for(let k=0;k<3;k+=1)ee[k].c();_=y(),v=p("li"),I=p("span"),S=C(t[0]),P=y();for(let k=0;k<j.length;k+=1)j[k].c();N=y(),te&&te.c(),m(s,"class","altaContacto svelte-4ycvq1"),m(f,"class","container pagination"),m(l,"class","mosPag svelte-4ycvq1")},m(k,z){w(k,e,z),w(k,n,z),w(k,s,z),w(k,i,z),oe(r,k,z),w(k,a,z),w(k,l,z),u(l,c);for(let Q=0;Q<R.length;Q+=1)R[Q].m(c,null);u(l,h),u(l,f),u(f,d),F&&F.m(d,null),u(d,g);for(let Q=0;Q<3;Q+=1)ee[Q].m(d,null);u(d,_),u(d,v),u(v,I),u(I,S),u(d,P);for(let Q=0;Q<j.length;Q+=1)j[Q].m(d,null);u(d,N),te&&te.m(d,null),$=!0,L||(V=B(s,"click",t[9]),L=!0)},p(k,z){const Q={};if(!o&&z&8&&(o=!0,Q.searchTerm=k[3],Ms(()=>o=!1)),r.$set(Q),z&1046){D=k[1];let A;for(A=0;A<D.length;A+=1){const se=pf(k,D,A);R[A]?(R[A].p(se,z),U(R[A],1)):(R[A]=_f(se),R[A].c(),U(R[A],1),R[A].m(c,null))}for(Mt(),A=D.length;A<R.length;A+=1)G(A);$t()}if(k[0]>1?F?F.p(k,z):(F=vf(k),F.c(),F.m(d,g)):F&&(F.d(1),F=null),z&257){re=[3,2,1];let A;for(A=0;A<3;A+=1){const se=df(k,re,A);ee[A]?ee[A].p(se,z):(ee[A]=bf(se),ee[A].c(),ee[A].m(d,_))}for(;A<3;A+=1)ee[A].d(1)}if((!$||z&1)&&ie(S,k[0]),z&289){x=Array(3);let A;for(A=0;A<x.length;A+=1){const se=ff(k,x,A);j[A]?j[A].p(se,z):(j[A]=Ef(se),j[A].c(),j[A].m(d,N))}for(;A<j.length;A+=1)j[A].d(1);j.length=x.length}k[0]<k[5]?te?te.p(k,z):(te=Tf(k),te.c(),te.m(d,null)):te&&(te.d(1),te=null)},i(k){if(!$){U(r.$$.fragment,k);for(let z=0;z<D.length;z+=1)U(R[z]);$=!0}},o(k){H(r.$$.fragment,k),R=R.filter(Boolean);for(let z=0;z<R.length;z+=1)H(R[z]);$=!1},d(k){k&&b(e),k&&b(n),k&&b(s),k&&b(i),ae(r,k),k&&b(a),k&&b(l),Ye(R,k),F&&F.d(),Ye(ee,k),Ye(j,k),te&&te.d(),L=!1,V()}}}function gf(t){let e,n,s,i,r,o;const a=[t[12]];let l={};for(let h=0;h<a.length;h+=1)l=Wt(l,a[h]);n=new qT({props:l});function c(){return t[15](t[12])}return{c(){e=p("div"),ce(n.$$.fragment),s=y(),m(e,"class","selecContact")},m(h,f){w(h,e,f),oe(n,e,null),u(e,s),i=!0,r||(o=B(e,"click",c),r=!0)},p(h,f){t=h;const d=f&2?kn(a,[Jn(t[12])]):{};n.$set(d)},i(h){i||(U(n.$$.fragment,h),i=!0)},o(h){H(n.$$.fragment,h),i=!1},d(h){h&&b(e),ae(n),r=!1,o()}}}function _f(t){let e,n,s=t[24]>=t[4]&&t[24]<t[2]&&gf(t);return{c(){s&&s.c(),e=rn()},m(i,r){s&&s.m(i,r),w(i,e,r),n=!0},p(i,r){i[24]>=i[4]&&i[24]<i[2]?s?(s.p(i,r),r&20&&U(s,1)):(s=gf(i),s.c(),U(s,1),s.m(e.parentNode,e)):s&&(Mt(),H(s,1,1,()=>{s=null}),$t())},i(i){n||(U(s),n=!0)},o(i){H(s),n=!1},d(i){s&&s.d(i),i&&b(e)}}}function vf(t){let e,n,s,i,r,o,a,l,c;return{c(){e=p("li"),n=p("a"),n.textContent="first",s=y(),i=p("li"),r=p("a"),o=C("previous"),m(n,"href","/blog"),m(r,"href",a="/blog/"+(t[0]-1))},m(h,f){w(h,e,f),u(e,n),w(h,s,f),w(h,i,f),u(i,r),u(r,o),l||(c=[B(n,"click",Tn(t[16])),B(r,"click",Tn(t[17]))],l=!0)},p(h,f){f&1&&a!==(a="/blog/"+(h[0]-1))&&m(r,"href",a)},d(h){h&&b(e),h&&b(s),h&&b(i),l=!1,rt(c)}}}function yf(t){let e,n,s=t[0]-t[24]+"",i,r,o,a;function l(){return t[18](t[24])}return{c(){e=p("li"),n=p("a"),i=C(s),m(n,"href",r="/blog/"+(t[0]-t[24]))},m(c,h){w(c,e,h),u(e,n),u(n,i),o||(a=B(n,"click",Tn(l)),o=!0)},p(c,h){t=c,h&1&&s!==(s=t[0]-t[24]+"")&&ie(i,s),h&1&&r!==(r="/blog/"+(t[0]-t[24]))&&m(n,"href",r)},d(c){c&&b(e),o=!1,a()}}}function bf(t){let e,n=t[0]-t[24]>0&&yf(t);return{c(){n&&n.c(),e=rn()},m(s,i){n&&n.m(s,i),w(s,e,i)},p(s,i){s[0]-s[24]>0?n?n.p(s,i):(n=yf(s),n.c(),n.m(e.parentNode,e)):n&&(n.d(1),n=null)},d(s){n&&n.d(s),s&&b(e)}}}function wf(t){let e,n,s=t[0]+(t[24]+1)+"",i,r,o,a;function l(){return t[19](t[24])}return{c(){e=p("li"),n=p("a"),i=C(s),m(n,"href",r="/blog/"+(t[0]+(t[24]+1)))},m(c,h){w(c,e,h),u(e,n),u(n,i),o||(a=B(n,"click",Tn(l)),o=!0)},p(c,h){t=c,h&1&&s!==(s=t[0]+(t[24]+1)+"")&&ie(i,s),h&1&&r!==(r="/blog/"+(t[0]+(t[24]+1)))&&m(n,"href",r)},d(c){c&&b(e),o=!1,a()}}}function Ef(t){let e,n=t[0]+(t[24]+1)<=t[5]&&wf(t);return{c(){n&&n.c(),e=rn()},m(s,i){n&&n.m(s,i),w(s,e,i)},p(s,i){s[0]+(s[24]+1)<=s[5]?n?n.p(s,i):(n=wf(s),n.c(),n.m(e.parentNode,e)):n&&(n.d(1),n=null)},d(s){n&&n.d(s),s&&b(e)}}}function Tf(t){let e,n,s,i,r,o,a,l,c,h,f;return{c(){e=p("li"),n=p("a"),s=C("next"),r=y(),o=p("li"),a=p("a"),l=C("last"),m(n,"href",i="/blog/"+(t[0]+1)),m(a,"href",c="/blog/"+t[5])},m(d,g){w(d,e,g),u(e,n),u(n,s),w(d,r,g),w(d,o,g),u(o,a),u(a,l),h||(f=[B(n,"click",Tn(t[20])),B(a,"click",Tn(t[21]))],h=!0)},p(d,g){g&1&&i!==(i="/blog/"+(d[0]+1))&&m(n,"href",i),g&32&&c!==(c="/blog/"+d[5])&&m(a,"href",c)},d(d){d&&b(e),d&&b(r),d&&b(o),h=!1,rt(f)}}}function kf(t){let e,n,s;return n=new vk({props:{$contact:t[7]}}),{c(){e=p("div"),ce(n.$$.fragment)},m(i,r){w(i,e,r),oe(n,e,null),s=!0},p(i,r){const o={};r&128&&(o.$contact=i[7]),n.$set(o)},i(i){s||(U(n.$$.fragment,i),s=!0)},o(i){H(n.$$.fragment,i),s=!1},d(i){i&&b(e),ae(n)}}}function If(t){let e,n,s,i;const r=[t[7]];let o={};for(let a=0;a<r.length;a+=1)o=Wt(o,r[a]);return s=new Vg({props:o}),{c(){e=p("div"),n=p("div"),ce(s.$$.fragment),m(n,"class","container")},m(a,l){w(a,e,l),u(e,n),oe(s,n,null),i=!0},p(a,l){const c=l&128?kn(r,[Jn(a[7])]):{};s.$set(c)},i(a){i||(U(s.$$.fragment,a),i=!0)},o(a){H(s.$$.fragment,a),i=!1},d(a){a&&b(e),ae(s)}}}function yk(t){let e,n,s,i,r,o,a,l,c,h,f=t[6]==="start"&&mf(t),d=t[6]==="contSelect"&&kf(t),g=(t[6]==="contEditing"||t[6]==="contAdding")&&If(t);return{c(){e=p("main"),n=p("div"),s=p("h1"),s.textContent="Contactos",i=y(),r=p("img"),a=y(),f&&f.c(),l=y(),d&&d.c(),c=y(),g&&g.c(),dn(r.src,o=Og)||m(r,"src",o),m(r,"alt","contactos"),m(r,"class","svelte-4ycvq1"),m(e,"class","container")},m(_,v){w(_,e,v),u(e,n),u(n,s),u(n,i),u(n,r),u(e,a),f&&f.m(e,null),u(e,l),d&&d.m(e,null),u(e,c),g&&g.m(e,null),h=!0},p(_,[v]){_[6]==="start"?f?(f.p(_,v),v&64&&U(f,1)):(f=mf(_),f.c(),U(f,1),f.m(e,l)):f&&(Mt(),H(f,1,1,()=>{f=null}),$t()),_[6]==="contSelect"?d?(d.p(_,v),v&64&&U(d,1)):(d=kf(_),d.c(),U(d,1),d.m(e,c)):d&&(Mt(),H(d,1,1,()=>{d=null}),$t()),_[6]==="contEditing"||_[6]==="contAdding"?g?(g.p(_,v),v&64&&U(g,1)):(g=If(_),g.c(),U(g,1),g.m(e,null)):g&&(Mt(),H(g,1,1,()=>{g=null}),$t())},i(_){h||(U(f),U(d),U(g),h=!0)},o(_){H(f),H(d),H(g),h=!1},d(_){_&&b(e),f&&f.d(),d&&d.d(),g&&g.d()}}}let ja=15;function bk(t,e,n){let s,i,r,o,a,l;xe(t,kt,D=>n(6,a=D)),xe(t,mt,D=>n(7,l=D));let c;wt(kt,a="start",a);let h,f=1,d=[];const g=D=>{n(0,f=D)},_=()=>{wt(kt,a="contAdding",a)},v=D=>{n(3,c=""),wt(mt,l=D,l),wt(kt,a="contSelect",a)};function I(){return n(1,d=yi.filter(D=>(D.name+" "+D.lastname).toLowerCase().includes(c.toLowerCase())))}n(1,d=yi.sort((D,R)=>D.createdAt<R.createdAt?1:D.createdAt>R.createdAt?-1:0));function S(D){c=D,n(3,c)}const P=D=>v(D),N=()=>g(1),$=()=>g(f-1),L=D=>g(f-D),V=D=>g(f+(D+1)),O=()=>g(f+1),W=()=>g(i);return t.$$.update=()=>{t.$$.dirty&2&&n(13,s=d.length),t.$$.dirty&8192&&n(5,i=Math.ceil(s/ja)),t.$$.dirty&1&&n(2,r=f*ja),t.$$.dirty&4&&n(4,o=r-ja)},[f,d,r,c,o,i,a,l,g,_,v,I,h,s,S,P,N,$,L,V,O,W]}class jg extends at{constructor(e){super(),ot(this,e,bk,yk,nt,{})}}const qg="/MH/assets/house.99302696.png";let ls=[],cs=[];function wk(t,e){e=e.filter(n=>n.selecTP===t.selectTP),t.numBeds>0&&(e=e.filter(n=>n.numBeds>=t.beds)),t.numBaths>0&&(e=e.filter(n=>n.numBaths>=t.bathroom)),t.numParks>0&&(e=e.filter(n=>n.numPark>=t.parks));try{e=e.filter(n=>{n.budget?ls=e.filter(s=>s.budget>=t.price*.7&&s.budget<=t.price*1.1):cs=e.filter(s=>s.rangeProp===Fg(t.price))})}catch(n){console.log(n)}e=cs.concat(ls),ls=[],cs=[];try{e.filter(n=>{n.locaProperty.length>0?(ls=e.filter(s=>t.locaProperty.some(i=>s.locaProperty.includes(i))),console.log(t.locaProperty)):(cs=e.filter(s=>s.locaProperty.length===0),console.log(t.locaProperty))})}catch(n){console.log(n)}e=cs.concat(ls),ls=[],cs=[];try{e=e.filter(n=>{n.tagsProperty.length>0?ls=e.filter(s=>t.tagsProperty.some(i=>s.tagsProperty.includes(i))):cs=e.filter(s=>s.tagsProperty.length===0)})}catch(n){console.log(n)}return e=cs.concat(ls),console.log(e),Ng.set(e)}function Sf(t,e,n){const s=t.slice();return s[14]=e[n],s}function Cf(t){let e,n=t[2],s=[];for(let i=0;i<n.length;i+=1)s[i]=Af(Sf(t,n,i));return{c(){for(let i=0;i<s.length;i+=1)s[i].c();e=rn()},m(i,r){for(let o=0;o<s.length;o+=1)s[o].m(i,r);w(i,e,r)},p(i,r){if(r&4){n=i[2];let o;for(o=0;o<n.length;o+=1){const a=Sf(i,n,o);s[o]?s[o].p(a,r):(s[o]=Af(a),s[o].c(),s[o].m(e.parentNode,e))}for(;o<s.length;o+=1)s[o].d(1);s.length=n.length}},d(i){Ye(s,i),i&&b(e)}}}function Af(t){let e,n,s,i,r=t[14].name+"",o,a,l=t[14].lastname+"",c,h,f,d=t[14].locaProperty+"",g,_,v,I=t[14].tagsProperty+"",S,P,N,$=t[14].budget+"",L,V,O,W=t[14].rangeProp+"",D,R;return{c(){e=p("div"),n=p("input"),s=y(),i=p("div"),o=C(r),a=y(),c=C(l),h=y(),f=p("div"),g=C(d),_=y(),v=p("div"),S=C(I),P=y(),N=p("div"),L=C($),V=y(),O=p("div"),D=C(W),R=y(),m(n,"type","checkbox"),m(e,"class","conInt svelte-1fnfsyu")},m(G,F){w(G,e,F),u(e,n),u(e,s),u(e,i),u(i,o),u(i,a),u(i,c),u(e,h),u(e,f),u(f,g),u(e,_),u(e,v),u(v,S),u(e,P),u(e,N),u(N,L),u(e,V),u(e,O),u(O,D),u(e,R)},p(G,F){F&4&&r!==(r=G[14].name+"")&&ie(o,r),F&4&&l!==(l=G[14].lastname+"")&&ie(c,l),F&4&&d!==(d=G[14].locaProperty+"")&&ie(g,d),F&4&&I!==(I=G[14].tagsProperty+"")&&ie(S,I),F&4&&$!==($=G[14].budget+"")&&ie(L,$),F&4&&W!==(W=G[14].rangeProp+"")&&ie(D,W)},d(G){G&&b(e)}}}function Ek(t){let e,n,s,i,r,o,a,l,c=t[1].claveEB+"",h,f,d=t[1].nameProperty+"",g,_,v,I=t[1].selecTP+"",S,P,N=t[1].colonia+"",$,L,V=t[1].locaProperty+"",O,W,D,R,G,F=t[1].price+"",re,ee,x,j,te=t[1].beds+"",k,z,Q=t[1].bathroom+"",A,se,we=t[1].halfBathroom+"",he,Se,Te,Ue,q=t[1].areaBuilding+"",ne,Me,We=t[1].areaTotal+"",Le,Re,qe,Qe,Ce=t[1].description+"",le,He,be,Be,Vt,It,Yt,gt,jt,Et,st,_t,ze,Ot,Xe,Xt,tt,lt,dt,St,ct,Ct,pt,Nt,pe=t[0]&&Cf(t);return{c(){e=p("div"),n=p("div"),s=p("img"),o=y(),a=p("div"),l=p("h4"),h=C(c),f=y(),g=C(d),_=y(),v=p("h5"),S=C(I),P=C(" en Col. "),$=C(N),L=C(" al "),O=C(V),W=C(" de la ciudad."),D=y(),R=p("h6"),G=C("Precio: "),re=C(F),ee=y(),x=p("div"),j=p("h6"),k=C(te),z=C(" Recamaras, "),A=C(Q),se=C(" Ba\xF1os y "),he=C(we),Se=C(" Medio Ba\xF1o"),Te=y(),Ue=p("h6"),ne=C(q),Me=C(" m2 de construcci\xF3n y "),Le=C(We),Re=C(" m2 de terreno"),qe=y(),Qe=p("p"),le=C(Ce),He=y(),be=p("div"),Be=p("a"),Vt=C("Seguir Link en Otra Ventana"),Yt=y(),gt=p("div"),jt=p("button"),jt.textContent="Enviar por WhatsApp",Et=y(),st=p("button"),st.textContent="Buscar Interesados",_t=y(),ze=p("div"),Ot=p("button"),Ot.textContent="Regresar",Xe=y(),Xt=p("div"),tt=p("div"),lt=p("i"),lt.textContent="edit",dt=y(),St=p("i"),St.textContent="delete_forever",ct=y(),pe&&pe.c(),Ct=rn(),dn(s.src,i=t[1].urlImage)||m(s,"src",i),m(s,"alt",r=t[1].nameProperty),m(n,"class","selectImage svelte-1fnfsyu"),m(Qe,"class","descSelec"),m(a,"class","descSelect"),m(Be,"href",It=t[1].urlProp),m(Be,"target","_blank"),m(be,"class","folowLink"),m(jt,"class","btnCommon btnWhatsApp"),m(st,"class","btnCommon"),m(gt,"class","optionsSend"),m(Ot,"class","btnCommon btnCancel"),m(ze,"class","backAnt"),m(lt,"class","material-icons edit"),m(St,"class","material-icons delete"),m(tt,"class","iconContent"),m(e,"class","container selectProduct svelte-1fnfsyu")},m(ke,_e){w(ke,e,_e),u(e,n),u(n,s),u(e,o),u(e,a),u(a,l),u(l,h),u(l,f),u(l,g),u(a,_),u(a,v),u(v,S),u(v,P),u(v,$),u(v,L),u(v,O),u(v,W),u(a,D),u(a,R),u(R,G),u(R,re),u(a,ee),u(a,x),u(x,j),u(j,k),u(j,z),u(j,A),u(j,se),u(j,he),u(j,Se),u(a,Te),u(a,Ue),u(Ue,ne),u(Ue,Me),u(Ue,Le),u(Ue,Re),u(a,qe),u(a,Qe),u(Qe,le),u(e,He),u(e,be),u(be,Be),u(Be,Vt),u(e,Yt),u(e,gt),u(gt,jt),u(gt,Et),u(gt,st),u(e,_t),u(e,ze),u(ze,Ot),u(e,Xe),u(e,Xt),u(Xt,tt),u(tt,lt),u(tt,dt),u(tt,St),w(ke,ct,_e),pe&&pe.m(ke,_e),w(ke,Ct,_e),pt||(Nt=[B(jt,"click",t[7]),B(st,"click",t[6]),B(Ot,"click",Tk),B(lt,"click",t[4]),B(St,"click",t[5])],pt=!0)},p(ke,[_e]){_e&2&&!dn(s.src,i=ke[1].urlImage)&&m(s,"src",i),_e&2&&r!==(r=ke[1].nameProperty)&&m(s,"alt",r),_e&2&&c!==(c=ke[1].claveEB+"")&&ie(h,c),_e&2&&d!==(d=ke[1].nameProperty+"")&&ie(g,d),_e&2&&I!==(I=ke[1].selecTP+"")&&ie(S,I),_e&2&&N!==(N=ke[1].colonia+"")&&ie($,N),_e&2&&V!==(V=ke[1].locaProperty+"")&&ie(O,V),_e&2&&F!==(F=ke[1].price+"")&&ie(re,F),_e&2&&te!==(te=ke[1].beds+"")&&ie(k,te),_e&2&&Q!==(Q=ke[1].bathroom+"")&&ie(A,Q),_e&2&&we!==(we=ke[1].halfBathroom+"")&&ie(he,we),_e&2&&q!==(q=ke[1].areaBuilding+"")&&ie(ne,q),_e&2&&We!==(We=ke[1].areaTotal+"")&&ie(Le,We),_e&2&&Ce!==(Ce=ke[1].description+"")&&ie(le,Ce),_e&2&&It!==(It=ke[1].urlProp)&&m(Be,"href",It),ke[0]?pe?pe.p(ke,_e):(pe=Cf(ke),pe.c(),pe.m(Ct.parentNode,Ct)):pe&&(pe.d(1),pe=null)},i:ue,o:ue,d(ke){ke&&b(e),ke&&b(ct),pe&&pe.d(ke),ke&&b(Ct),pt=!1,rt(Nt)}}}function Tk(){location.href="/propiedades"}function kk(t,e,n){let s,i,r;xe(t,ht,d=>n(1,s=d)),xe(t,kt,d=>n(9,i=d)),xe(t,Ng,d=>n(2,r=d));let o=[],a=!1;function l(){wt(kt,i="propEditing",i)}async function c(){confirm("Deseas eleiminar definitivamente la propiedad?")&&(console.log("Borraste al propiedad"),await la(ns(Kt,"properties",s.id)),wt(kt,i="start",i))}function h(){wk(s,yi),n(0,a=!0)}return[a,s,r,o,l,c,h,()=>void 0]}class Ik extends at{constructor(e){super(),ot(this,e,kk,Ek,nt,{})}}function Sk(t){let e;return{c(){e=C("Editar")},m(n,s){w(n,e,s)},d(n){n&&b(e)}}}function Ck(t){let e;return{c(){e=C("Guardar")},m(n,s){w(n,e,s)},d(n){n&&b(e)}}}function Ak(t){let e,n,s,i,r,o,a,l,c,h,f,d,g,_,v,I;l=new uk({});function S($,L){return $[0]==="propAdding"?Ck:Sk}let P=S(t),N=P(t);return{c(){e=p("form"),n=p("div"),s=p("div"),i=p("img"),a=y(),ce(l.$$.fragment),c=y(),h=p("div"),f=p("button"),N.c(),d=y(),g=p("button"),g.textContent="Cancel",dn(i.src,r=t[1].urlImage)||m(i,"src",r),m(i,"alt",o=t[1].nameProperty),m(i,"class","svelte-166hnhc"),m(f,"class","btn-save"),m(g,"class","btn-cancel"),m(h,"class","contSavCan svelte-166hnhc"),m(n,"class","altaContactos"),m(e,"class","propiedad")},m($,L){w($,e,L),u(e,n),u(n,s),u(s,i),u(s,a),oe(l,s,null),u(n,c),u(n,h),u(h,f),N.m(f,null),u(h,d),u(h,g),_=!0,v||(I=[B(g,"click",t[3]),B(e,"submit",Tn(t[2]))],v=!0)},p($,[L]){(!_||L&2&&!dn(i.src,r=$[1].urlImage))&&m(i,"src",r),(!_||L&2&&o!==(o=$[1].nameProperty))&&m(i,"alt",o),P!==(P=S($))&&(N.d(1),N=P($),N&&(N.c(),N.m(f,null)))},i($){_||(U(l.$$.fragment,$),_=!0)},o($){H(l.$$.fragment,$),_=!1},d($){$&&b(e),ae(l),N.d(),v=!1,rt(I)}}}function Pk(t,e,n){let s,i;xe(t,kt,l=>n(0,s=l)),xe(t,ht,l=>n(1,i=l));let r=0;async function o(){if(console.log("Estas en add property",s,i),s==="propEditing")console.log("estas dentro de edit property",i.id),await aa(ns(Kt,"properties",i.id),i);else{r=Date.now(),wt(ht,i={...i,createdAt:r},i),console.log(i);const l=Hn(Kt,"properties");await _i(l,i)}wt(kt,s="start",s)}return[s,i,o,()=>{window.location.href="./"}]}class Vc extends at{constructor(e){super(),ot(this,e,Pk,Ak,nt,{})}}function Pf(t,e,n){const s=t.slice();return s[23]=e[n],s[25]=n,s}function Df(t,e,n){const s=t.slice();return s[25]=e[n],s}function Rf(t,e,n){const s=t.slice();return s[12]=e[n],s[25]=n,s}function Of(t){let e,n,s,i,r,o,a,l,c,h,f,d,g,_,v,I,S,P,N,$,L,V;function O(k){t[14](k)}let W={};t[3]!==void 0&&(W.searchTerm=t[3]),r=new Bc({props:W}),Xn.push(()=>$s(r,"searchTerm",O)),r.$on("input",t[11]);let D=t[1],R=[];for(let k=0;k<D.length;k+=1)R[k]=Lf(Rf(t,D,k));const G=k=>H(R[k],1,1,()=>{R[k]=null});let F=t[0]>1&&Mf(t),re=[3,2,1],ee=[];for(let k=0;k<3;k+=1)ee[k]=Ff(Df(t,re,k));let x=Array(3),j=[];for(let k=0;k<x.length;k+=1)j[k]=Bf(Pf(t,x,k));let te=t[0]<t[5]&&Vf(t);return{c(){e=p("h2"),e.textContent=`${Mn.length} Propiedades a Mostrar`,n=y(),s=p("button"),s.textContent="Alta de Propiedad",i=y(),ce(r.$$.fragment),a=y(),l=p("div"),c=p("main");for(let k=0;k<R.length;k+=1)R[k].c();h=y(),f=p("div"),d=p("ul"),F&&F.c(),g=y();for(let k=0;k<3;k+=1)ee[k].c();_=y(),v=p("li"),I=p("span"),S=C(t[0]),P=y();for(let k=0;k<j.length;k+=1)j[k].c();N=y(),te&&te.c(),m(c,"id","bookshelf"),m(c,"class","svelte-qdxcib"),m(f,"class","container pagination"),m(l,"class","mosPag svelte-qdxcib")},m(k,z){w(k,e,z),w(k,n,z),w(k,s,z),w(k,i,z),oe(r,k,z),w(k,a,z),w(k,l,z),u(l,c);for(let Q=0;Q<R.length;Q+=1)R[Q].m(c,null);u(l,h),u(l,f),u(f,d),F&&F.m(d,null),u(d,g);for(let Q=0;Q<3;Q+=1)ee[Q].m(d,null);u(d,_),u(d,v),u(v,I),u(I,S),u(d,P);for(let Q=0;Q<j.length;Q+=1)j[Q].m(d,null);u(d,N),te&&te.m(d,null),$=!0,L||(V=B(s,"click",t[10]),L=!0)},p(k,z){const Q={};if(!o&&z&8&&(o=!0,Q.searchTerm=k[3],Ms(()=>o=!1)),r.$set(Q),z&534){D=k[1];let A;for(A=0;A<D.length;A+=1){const se=Rf(k,D,A);R[A]?(R[A].p(se,z),U(R[A],1)):(R[A]=Lf(se),R[A].c(),U(R[A],1),R[A].m(c,null))}for(Mt(),A=D.length;A<R.length;A+=1)G(A);$t()}if(k[0]>1?F?F.p(k,z):(F=Mf(k),F.c(),F.m(d,g)):F&&(F.d(1),F=null),z&257){re=[3,2,1];let A;for(A=0;A<3;A+=1){const se=Df(k,re,A);ee[A]?ee[A].p(se,z):(ee[A]=Ff(se),ee[A].c(),ee[A].m(d,_))}for(;A<3;A+=1)ee[A].d(1)}if((!$||z&1)&&ie(S,k[0]),z&289){x=Array(3);let A;for(A=0;A<x.length;A+=1){const se=Pf(k,x,A);j[A]?j[A].p(se,z):(j[A]=Bf(se),j[A].c(),j[A].m(d,N))}for(;A<j.length;A+=1)j[A].d(1);j.length=x.length}k[0]<k[5]?te?te.p(k,z):(te=Vf(k),te.c(),te.m(d,null)):te&&(te.d(1),te=null)},i(k){if(!$){U(r.$$.fragment,k);for(let z=0;z<D.length;z+=1)U(R[z]);$=!0}},o(k){H(r.$$.fragment,k),R=R.filter(Boolean);for(let z=0;z<R.length;z+=1)H(R[z]);$=!1},d(k){k&&b(e),k&&b(n),k&&b(s),k&&b(i),ae(r,k),k&&b(a),k&&b(l),Ye(R,k),F&&F.d(),Ye(ee,k),Ye(j,k),te&&te.d(),L=!1,V()}}}function Nf(t){let e,n,s,i,r,o,a;const l=[t[12]];let c={};for(let f=0;f<l.length;f+=1)c=Wt(c,l[f]);n=new $g({props:c});function h(){return t[15](t[12])}return{c(){e=p("section"),ce(n.$$.fragment),s=y(),m(e,"class","property svelte-qdxcib")},m(f,d){w(f,e,d),oe(n,e,null),u(e,s),r=!0,o||(a=B(e,"click",h),o=!0)},p(f,d){t=f;const g=d&2?kn(l,[Jn(t[12])]):{};n.$set(g)},i(f){r||(U(n.$$.fragment,f),it(()=>{i||(i=Pn(e,Ao,{duration:500,easing:Io},!0)),i.run(1)}),r=!0)},o(f){H(n.$$.fragment,f),i||(i=Pn(e,Ao,{duration:500,easing:Io},!1)),i.run(0),r=!1},d(f){f&&b(e),ae(n),f&&i&&i.end(),o=!1,a()}}}function Lf(t){let e,n,s=t[25]>=t[4]&&t[25]<t[2]&&Nf(t);return{c(){s&&s.c(),e=rn()},m(i,r){s&&s.m(i,r),w(i,e,r),n=!0},p(i,r){i[25]>=i[4]&&i[25]<i[2]?s?(s.p(i,r),r&20&&U(s,1)):(s=Nf(i),s.c(),U(s,1),s.m(e.parentNode,e)):s&&(Mt(),H(s,1,1,()=>{s=null}),$t())},i(i){n||(U(s),n=!0)},o(i){H(s),n=!1},d(i){s&&s.d(i),i&&b(e)}}}function Mf(t){let e,n,s,i,r,o,a,l,c;return{c(){e=p("li"),n=p("a"),n.textContent="first",s=y(),i=p("li"),r=p("a"),o=C("previous"),m(n,"href","/blog"),m(r,"href",a="/blog/"+(t[0]-1))},m(h,f){w(h,e,f),u(e,n),w(h,s,f),w(h,i,f),u(i,r),u(r,o),l||(c=[B(n,"click",Tn(t[16])),B(r,"click",Tn(t[17]))],l=!0)},p(h,f){f&1&&a!==(a="/blog/"+(h[0]-1))&&m(r,"href",a)},d(h){h&&b(e),h&&b(s),h&&b(i),l=!1,rt(c)}}}function $f(t){let e,n,s=t[0]-t[25]+"",i,r,o,a;function l(){return t[18](t[25])}return{c(){e=p("li"),n=p("a"),i=C(s),m(n,"href",r="/blog/"+(t[0]-t[25]))},m(c,h){w(c,e,h),u(e,n),u(n,i),o||(a=B(n,"click",Tn(l)),o=!0)},p(c,h){t=c,h&1&&s!==(s=t[0]-t[25]+"")&&ie(i,s),h&1&&r!==(r="/blog/"+(t[0]-t[25]))&&m(n,"href",r)},d(c){c&&b(e),o=!1,a()}}}function Ff(t){let e,n=t[0]-t[25]>0&&$f(t);return{c(){n&&n.c(),e=rn()},m(s,i){n&&n.m(s,i),w(s,e,i)},p(s,i){s[0]-s[25]>0?n?n.p(s,i):(n=$f(s),n.c(),n.m(e.parentNode,e)):n&&(n.d(1),n=null)},d(s){n&&n.d(s),s&&b(e)}}}function Uf(t){let e,n,s=t[0]+(t[25]+1)+"",i,r,o,a;function l(){return t[19](t[25])}return{c(){e=p("li"),n=p("a"),i=C(s),m(n,"href",r="/blog/"+(t[0]+(t[25]+1)))},m(c,h){w(c,e,h),u(e,n),u(n,i),o||(a=B(n,"click",Tn(l)),o=!0)},p(c,h){t=c,h&1&&s!==(s=t[0]+(t[25]+1)+"")&&ie(i,s),h&1&&r!==(r="/blog/"+(t[0]+(t[25]+1)))&&m(n,"href",r)},d(c){c&&b(e),o=!1,a()}}}function Bf(t){let e,n=t[0]+(t[25]+1)<=t[5]&&Uf(t);return{c(){n&&n.c(),e=rn()},m(s,i){n&&n.m(s,i),w(s,e,i)},p(s,i){s[0]+(s[25]+1)<=s[5]?n?n.p(s,i):(n=Uf(s),n.c(),n.m(e.parentNode,e)):n&&(n.d(1),n=null)},d(s){n&&n.d(s),s&&b(e)}}}function Vf(t){let e,n,s,i,r,o,a,l,c,h,f;return{c(){e=p("li"),n=p("a"),s=C("next"),r=y(),o=p("li"),a=p("a"),l=C("last"),m(n,"href",i="/blog/"+(t[0]+1)),m(a,"href",c="/blog/"+t[5])},m(d,g){w(d,e,g),u(e,n),u(n,s),w(d,r,g),w(d,o,g),u(o,a),u(a,l),h||(f=[B(n,"click",Tn(t[20])),B(a,"click",Tn(t[21]))],h=!0)},p(d,g){g&1&&i!==(i="/blog/"+(d[0]+1))&&m(n,"href",i),g&32&&c!==(c="/blog/"+d[5])&&m(a,"href",c)},d(d){d&&b(e),d&&b(r),d&&b(o),h=!1,rt(f)}}}function jf(t){let e,n,s;const i=[t[7]];let r={};for(let o=0;o<i.length;o+=1)r=Wt(r,i[o]);return n=new Ik({props:r}),{c(){e=p("div"),ce(n.$$.fragment)},m(o,a){w(o,e,a),oe(n,e,null),s=!0},p(o,a){const l=a&128?kn(i,[Jn(o[7])]):{};n.$set(l)},i(o){s||(U(n.$$.fragment,o),s=!0)},o(o){H(n.$$.fragment,o),s=!1},d(o){o&&b(e),ae(n)}}}function qf(t){let e,n,s;const i=[t[7]];let r={};for(let o=0;o<i.length;o+=1)r=Wt(r,i[o]);return n=new Vc({props:r}),{c(){e=p("div"),ce(n.$$.fragment),m(e,"class","container")},m(o,a){w(o,e,a),oe(n,e,null),s=!0},p(o,a){const l=a&128?kn(i,[Jn(o[7])]):{};n.$set(l)},i(o){s||(U(n.$$.fragment,o),s=!0)},o(o){H(n.$$.fragment,o),s=!1},d(o){o&&b(e),ae(n)}}}function Hf(t){let e,n,s;return n=new Vc({}),{c(){e=p("div"),ce(n.$$.fragment),m(e,"class","container")},m(i,r){w(i,e,r),oe(n,e,null),s=!0},i(i){s||(U(n.$$.fragment,i),s=!0)},o(i){H(n.$$.fragment,i),s=!1},d(i){i&&b(e),ae(n)}}}function Dk(t){let e,n,s,i,r,o,a,l,c,h,f,d=t[6]==="start"&&Of(t),g=t[6]==="propSelect"&&jf(t),_=t[6]==="propEditing"&&qf(t),v=t[6]==="propAdding"&&Hf();return{c(){e=p("div"),n=p("div"),s=p("h1"),s.textContent="Propiedades",i=y(),r=p("img"),a=y(),d&&d.c(),l=y(),g&&g.c(),c=y(),_&&_.c(),h=y(),v&&v.c(),dn(r.src,o=qg)||m(r,"src",o),m(r,"alt","propiedad"),m(r,"class","imgTitle svelte-qdxcib"),m(e,"class","container")},m(I,S){w(I,e,S),u(e,n),u(n,s),u(n,i),u(n,r),u(e,a),d&&d.m(e,null),u(e,l),g&&g.m(e,null),u(e,c),_&&_.m(e,null),u(e,h),v&&v.m(e,null),f=!0},p(I,[S]){I[6]==="start"?d?(d.p(I,S),S&64&&U(d,1)):(d=Of(I),d.c(),U(d,1),d.m(e,l)):d&&(Mt(),H(d,1,1,()=>{d=null}),$t()),I[6]==="propSelect"?g?(g.p(I,S),S&64&&U(g,1)):(g=jf(I),g.c(),U(g,1),g.m(e,c)):g&&(Mt(),H(g,1,1,()=>{g=null}),$t()),I[6]==="propEditing"?_?(_.p(I,S),S&64&&U(_,1)):(_=qf(I),_.c(),U(_,1),_.m(e,h)):_&&(Mt(),H(_,1,1,()=>{_=null}),$t()),I[6]==="propAdding"?v?S&64&&U(v,1):(v=Hf(),v.c(),U(v,1),v.m(e,null)):v&&(Mt(),H(v,1,1,()=>{v=null}),$t())},i(I){f||(U(d),U(g),U(_),U(v),f=!0)},o(I){H(d),H(g),H(_),H(v),f=!1},d(I){I&&b(e),d&&d.d(),g&&g.d(),_&&_.d(),v&&v.d()}}}let qa=20;function Rk(t,e,n){let s,i,r,o,a,l;xe(t,kt,D=>n(6,a=D)),xe(t,ht,D=>n(7,l=D));let c,h;wt(kt,a="start",a);let f=1,d=Mn;const g=D=>{n(0,f=D)};d=Mn;function _(D){console.log(D),wt(ht,l=D,l),wt(kt,a="propSelect",a)}function v(){wt(kt,a="propAdding",a)}function I(){return n(1,d=Mn.filter(D=>(D.nameProperty+" "+D.colonia).toLowerCase().includes(c.toLowerCase())))}n(1,d=Mn.sort((D,R)=>D.createdAt<R.createdAt?1:D.createdAt>R.createdAt?-1:0));function S(D){c=D,n(3,c)}const P=D=>_(D),N=()=>g(1),$=()=>g(f-1),L=D=>g(f-D),V=D=>g(f+(D+1)),O=()=>g(f+1),W=()=>g(i);return t.$$.update=()=>{t.$$.dirty&2&&n(13,s=d.length),t.$$.dirty&8192&&n(5,i=Math.ceil(s/qa)),t.$$.dirty&1&&n(2,r=f*qa),t.$$.dirty&4&&n(4,o=r-qa)},[f,d,r,c,o,i,a,l,g,_,v,I,h,s,S,P,N,$,L,V,O,W]}class Hg extends at{constructor(e){super(),ot(this,e,Rk,Dk,nt,{})}}const zg="/MH/assets/schedule.20f01954.png";function zf(t,e,n){const s=t.slice();return s[19]=e[n],s}function Gf(t,e,n){const s=t.slice();return s[19]=e[n],s}function Ok(t){let e;return{c(){e=C("Editar")},m(n,s){w(n,e,s)},d(n){n&&b(e)}}}function Nk(t){let e;return{c(){e=C("Guardar")},m(n,s){w(n,e,s)},d(n){n&&b(e)}}}function Kf(t){let e;return{c(){e=p("p"),e.textContent="No Hay Tareas Pendientes"},m(n,s){w(n,e,s)},p:ue,d(n){n&&b(e)}}}function Wf(t){let e,n,s,i,r,o,a,l,c,h,f=mn(t[19].endTask)+"",d,g,_=t[19].task+"",v,I,S,P;function N(){return t[11](t[19])}function $(){return t[12](t[19])}function L(){return t[13](t[19])}let V=t[19].notes&&Qf(t);return{c(){e=p("div"),n=p("li"),s=p("span"),i=p("button"),i.textContent="\u2714",r=y(),o=p("button"),o.textContent="\u2716",a=y(),l=p("button"),l.textContent="\u2714\u2716",c=y(),h=p("spam"),d=C(f),g=C(` -*-\r
                              `),v=C(_),I=C(` -*-\r
                              `),V&&V.c(),m(n,"class","schedule svelte-1e3ab80"),oi(n,"complete",t[19].isComplete)},m(O,W){w(O,e,W),u(e,n),u(n,s),u(s,i),u(s,r),u(s,o),u(s,a),u(s,l),u(n,c),u(n,h),u(h,d),u(h,g),u(h,v),u(h,I),V&&V.m(h,null),S||(P=[B(i,"click",N),B(o,"click",$),B(l,"click",L)],S=!0)},p(O,W){t=O,W&2&&f!==(f=mn(t[19].endTask)+"")&&ie(d,f),W&2&&_!==(_=t[19].task+"")&&ie(v,_),t[19].notes?V?V.p(t,W):(V=Qf(t),V.c(),V.m(h,null)):V&&(V.d(1),V=null),W&2&&oi(n,"complete",t[19].isComplete)},d(O){O&&b(e),V&&V.d(),S=!1,rt(P)}}}function Qf(t){let e=t[19].notes+"",n;return{c(){n=C(e)},m(s,i){w(s,n,i)},p(s,i){i&2&&e!==(e=s[19].notes+"")&&ie(n,e)},d(s){s&&b(n)}}}function Yf(t){let e,n=!t[19].timeTask&&Wf(t);return{c(){n&&n.c(),e=rn()},m(s,i){n&&n.m(s,i),w(s,e,i)},p(s,i){s[19].timeTask?n&&(n.d(1),n=null):n?n.p(s,i):(n=Wf(s),n.c(),n.m(e.parentNode,e))},d(s){n&&n.d(s),s&&b(e)}}}function Xf(t){let e;return{c(){e=p("p"),e.textContent="No Hay Tareas Pendientes"},m(n,s){w(n,e,s)},p:ue,d(n){n&&b(e)}}}function Jf(t){let e,n,s,i,r,o,a,l,c,h,f=t[19].timeTask+"",d,g,_=mn(t[19].endTask)+"",v,I,S=t[19].task+"",P,N,$,L;function V(){return t[14](t[19])}function O(){return t[15](t[19])}function W(){return t[16](t[19])}let D=t[19].notes&&xf(t);return{c(){e=p("div"),n=p("li"),s=p("span"),i=p("button"),i.textContent="\u2714",r=y(),o=p("button"),o.textContent="\u2716",a=y(),l=p("button"),l.textContent="\u2714\u2716",c=y(),h=p("spam"),d=C(f),g=C(` -*-\r
                                 `),v=C(_),I=C(` -*-\r
                                 `),P=C(S),N=C(` -*-\r
                                 `),D&&D.c(),m(n,"class","schedule svelte-1e3ab80"),oi(n,"complete",t[19].isComplete)},m(R,G){w(R,e,G),u(e,n),u(n,s),u(s,i),u(s,r),u(s,o),u(s,a),u(s,l),u(n,c),u(n,h),u(h,d),u(h,g),u(h,v),u(h,I),u(h,P),u(h,N),D&&D.m(h,null),$||(L=[B(i,"click",V),B(o,"click",O),B(l,"click",W),B(e,"dblclick",t[17])],$=!0)},p(R,G){t=R,G&2&&f!==(f=t[19].timeTask+"")&&ie(d,f),G&2&&_!==(_=mn(t[19].endTask)+"")&&ie(v,_),G&2&&S!==(S=t[19].task+"")&&ie(P,S),t[19].notes?D?D.p(t,G):(D=xf(t),D.c(),D.m(h,null)):D&&(D.d(1),D=null),G&2&&oi(n,"complete",t[19].isComplete)},d(R){R&&b(e),D&&D.d(),$=!1,rt(L)}}}function xf(t){let e=t[19].notes+"",n;return{c(){n=C(e)},m(s,i){w(s,n,i)},p(s,i){i&2&&e!==(e=s[19].notes+"")&&ie(n,e)},d(s){s&&b(n)}}}function Zf(t){let e,n=t[19].timeTask&&Jf(t);return{c(){n&&n.c(),e=rn()},m(s,i){n&&n.m(s,i),w(s,e,i)},p(s,i){s[19].timeTask?n?n.p(s,i):(n=Jf(s),n.c(),n.m(e.parentNode,e)):n&&(n.d(1),n=null)},d(s){n&&n.d(s),s&&b(e)}}}function Lk(t){let e,n,s,i,r,o,a,l,c,h,f,d,g,_,v,I,S,P,N,$,L,V,O,W,D,R,G,F,re,ee,x,j,te,k,z,Q,A,se,we,he,Se,Te,Ue;function q(le,He){return le[0]?Ok:Nk}let ne=q(t),Me=ne(t),We=t[1],Le=[];for(let le=0;le<We.length;le+=1)Le[le]=Yf(Gf(t,We,le));let Re=null;We.length||(Re=Kf());let qe=t[1],Qe=[];for(let le=0;le<qe.length;le+=1)Qe[le]=Zf(zf(t,qe,le));let Ce=null;return qe.length||(Ce=Xf()),{c(){e=p("div"),n=p("h1"),n.textContent="Agenda",s=y(),i=p("img"),o=y(),a=p("div"),l=p("div"),h=y(),f=p("div"),d=p("div"),g=p("input"),_=y(),v=p("div"),I=p("input"),S=y(),P=p("input"),N=y(),$=p("div"),L=p("textarea"),V=y(),O=p("div"),W=p("button"),Me.c(),D=y(),R=p("button"),R.textContent="Cancelar",F=y(),re=p("div"),ee=p("h3"),ee.textContent="Tareas",x=y(),j=p("ol");for(let le=0;le<Le.length;le+=1)Le[le].c();Re&&Re.c(),te=y(),k=p("p"),k.textContent=`${ed}`,z=y(),Q=p("h3"),Q.textContent="Agenda",A=y(),se=p("ol");for(let le=0;le<Qe.length;le+=1)Qe[le].c();Ce&&Ce.c(),we=y(),he=p("p"),he.textContent=`${ed}`,dn(i.src,r=zg)||m(i,"src",r),m(i,"alt","schedule"),m(i,"class","imgTitle svelte-1e3ab80"),m(l,"class","background"),m(g,"type","text"),m(g,"class","inputTask"),m(g,"cols","56"),m(g,"rows","1"),m(g,"placeholder","Agrega una Tarea o Cita"),m(I,"type","time"),m(I,"class","inputDate"),m(P,"type","date"),m(P,"class","inputDate"),m(v,"class","contDate"),m(L,"name","notes"),m(L,"id",""),m(L,"cols","56"),m(L,"rows","5"),m(L,"placeholder","descripci\xF3n"),m(f,"class","pop-up"),m(a,"class","container"),m(k,"class","error"),m(he,"class","error"),m(re,"class","container"),m(e,"class","container")},m(le,He){w(le,e,He),u(e,n),u(e,s),u(e,i),u(e,o),u(e,a),u(a,l),u(a,h),u(a,f),u(f,d),u(d,g),fe(g,t[2].task),u(f,_),u(f,v),u(v,I),fe(I,t[2].timeTask),u(v,S),u(v,P),fe(P,t[2].endTask),u(f,N),u(f,$),u($,L),fe(L,t[2].notes),u(f,V),u(f,O),u(O,W),Me.m(W,null),u(O,D),u(O,R),u(e,F),u(e,re),u(re,ee),u(re,x),u(re,j);for(let be=0;be<Le.length;be+=1)Le[be].m(j,null);Re&&Re.m(j,null),u(j,te),u(j,k),u(re,z),u(re,Q),u(re,A),u(re,se);for(let be=0;be<Qe.length;be+=1)Qe[be].m(se,null);Ce&&Ce.m(se,null),u(se,we),u(se,he),Se=!0,Te||(Ue=[B(l,"click",t[6]),B(g,"input",t[7]),B(I,"input",t[8]),B(P,"input",t[9]),B(L,"input",t[10]),B(W,"click",t[3]),B(R,"click",t[6])],Te=!0)},p(le,[He]){if(He&4&&g.value!==le[2].task&&fe(g,le[2].task),He&4&&fe(I,le[2].timeTask),He&4&&fe(P,le[2].endTask),He&4&&fe(L,le[2].notes),ne!==(ne=q(le))&&(Me.d(1),Me=ne(le),Me&&(Me.c(),Me.m(W,null))),He&50){We=le[1];let be;for(be=0;be<We.length;be+=1){const Be=Gf(le,We,be);Le[be]?Le[be].p(Be,He):(Le[be]=Yf(Be),Le[be].c(),Le[be].m(j,te))}for(;be<Le.length;be+=1)Le[be].d(1);Le.length=We.length,!We.length&&Re?Re.p(le,He):We.length?Re&&(Re.d(1),Re=null):(Re=Kf(),Re.c(),Re.m(j,te))}if(He&50){qe=le[1];let be;for(be=0;be<qe.length;be+=1){const Be=zf(le,qe,be);Qe[be]?Qe[be].p(Be,He):(Qe[be]=Zf(Be),Qe[be].c(),Qe[be].m(se,we))}for(;be<Qe.length;be+=1)Qe[be].d(1);Qe.length=qe.length,!qe.length&&Ce?Ce.p(le,He):qe.length?Ce&&(Ce.d(1),Ce=null):(Ce=Xf(),Ce.c(),Ce.m(se,we))}},i(le){Se||(it(()=>{c||(c=Pn(l,So,{},!0)),c.run(1)}),it(()=>{G||(G=Pn(f,Co,{},!0)),G.run(1)}),Se=!0)},o(le){c||(c=Pn(l,So,{},!1)),c.run(0),G||(G=Pn(f,Co,{},!1)),G.run(0),Se=!1},d(le){le&&b(e),le&&c&&c.end(),Me.d(),le&&G&&G.end(),Ye(Le,le),Re&&Re.d(),Ye(Qe,le),Ce&&Ce.d(),Te=!1,rt(Ue)}}}let ed="";function Mk(t,e,n){let s;xe(t,Ln,L=>n(2,s=L));let i=!1,r=[];n(1,r=da.sort((L,V)=>L.endTask<V.endTask?1:L.endTask>V.endTask?-1:0));async function o(){if(i)await aa(ns(Kt,"todos",s.id),s),n(0,i=!1);else{const L=Hn(Kt,"todos");await _i(L,s)}wt(Ln,s=[],s),location.href="/contactos"}async function a(L){confirm("Quieres borrarlo definitivmente?")==!0&&(console.log(L),await la(ns(Kt,"todos",L)))}async function l(L){wt(Ln,s=L,s),console.log(s),n(0,i=!0)}function c(){wt(Ln,s=[],s),location.href="/contactos"}function h(){s.task=this.value,Ln.set(s)}function f(){s.timeTask=this.value,Ln.set(s)}function d(){s.endTask=this.value,Ln.set(s)}function g(){s.notes=this.value,Ln.set(s)}return[i,r,s,o,a,l,c,h,f,d,g,L=>(L.id,void 0),L=>a(L.id),L=>l(L),L=>(L.id,void 0),L=>a(L.id),L=>l(L),()=>l]}class Gg extends at{constructor(e){super(),ot(this,e,Mk,Lk,nt,{})}}function $k(t){let e;return{c(){e=p("h1"),e.textContent="Estas en Sinergias"},m(n,s){w(n,e,s)},p:ue,i:ue,o:ue,d(n){n&&b(e)}}}class Kg extends at{constructor(e){super(),ot(this,e,null,$k,nt,{})}}function td(t,e,n){const s=t.slice();return s[1]=e[n],s}function nd(t,e,n){const s=t.slice();return s[1]=e[n],s}function Fk(t){let e,n,s=mn(t[1].endTask)+"",i,r,o=t[1].task+"",a,l,c=t[1].notes&&Uk(t);return{c(){e=p("ul"),n=p("li"),i=C(s),r=C(` - -\r
                    `),a=C(o),l=C(` - -\r
                    `),c&&c.c(),oi(n,"complete",t[1].isComplete)},m(h,f){w(h,e,f),u(e,n),u(n,i),u(n,r),u(n,a),u(n,l),c&&c.m(n,null)},p(h,f){h[1].notes&&c.p(h,f)},d(h){h&&b(e),c&&c.d()}}}function Uk(t){let e=t[1].notes+"",n;return{c(){n=C(e)},m(s,i){w(s,n,i)},p:ue,d(s){s&&b(n)}}}function sd(t){let e,n=!t[1].timeTask&&Fk(t);return{c(){n&&n.c(),e=rn()},m(s,i){n&&n.m(s,i),w(s,e,i)},p(s,i){s[1].timeTask||n.p(s,i)},d(s){n&&n.d(s),s&&b(e)}}}function Bk(t){let e,n,s,i=BT(t[1].endTask)+"",r,o,a=UT(t[1].endTask)+"",l,c,h=mn(t[1].endTask)+"",f,d,g=t[1].task+"",_,v,I=t[1].notes&&Vk(t);return{c(){e=p("ul"),n=p("li"),s=p("spam"),r=C(i),o=y(),l=C(a),c=C(` - -\r
                      `),f=C(h),d=y(),_=C(g),v=C(` - -\r
                      `),I&&I.c(),m(s,"type","number"),oi(n,"complete",t[1].isComplete)},m(S,P){w(S,e,P),u(e,n),u(n,s),u(s,r),u(s,o),u(s,l),u(s,c),u(s,f),u(s,d),u(s,_),u(s,v),I&&I.m(s,null)},p(S,P){S[1].notes&&I.p(S,P)},d(S){S&&b(e),I&&I.d()}}}function Vk(t){let e=t[1].notes+"",n;return{c(){n=C(e)},m(s,i){w(s,n,i)},p:ue,d(s){s&&b(n)}}}function id(t){let e,n=t[1].timeTask&&Bk(t);return{c(){n&&n.c(),e=y()},m(s,i){n&&n.m(s,i),w(s,e,i)},p(s,i){s[1].timeTask&&n.p(s,i)},d(s){n&&n.d(s),s&&b(e)}}}function jk(t){let e,n,s,i,r,o,a,l,c,h,f=t[0],d=[];for(let v=0;v<f.length;v+=1)d[v]=sd(nd(t,f,v));let g=t[0],_=[];for(let v=0;v<g.length;v+=1)_[v]=id(td(t,g,v));return{c(){e=p("div"),n=p("div"),s=p("div"),i=p("h1"),i.textContent="Agenda",r=y(),o=p("h3"),o.textContent="Tareas",a=y();for(let v=0;v<d.length;v+=1)d[v].c();l=y(),c=p("h3"),c.textContent="Citas",h=y();for(let v=0;v<_.length;v+=1)_[v].c();m(i,"class","title svelte-13rvwi6"),m(o,"class","subtitle svelte-13rvwi6"),m(c,"class","subtitle svelte-13rvwi6"),m(s,"class","schedule"),m(n,"class","container"),m(e,"class","show-home")},m(v,I){w(v,e,I),u(e,n),u(n,s),u(s,i),u(s,r),u(s,o),u(s,a);for(let S=0;S<d.length;S+=1)d[S].m(s,null);u(s,l),u(s,c),u(s,h);for(let S=0;S<_.length;S+=1)_[S].m(s,null)},p(v,[I]){if(I&1){f=v[0];let S;for(S=0;S<f.length;S+=1){const P=nd(v,f,S);d[S]?d[S].p(P,I):(d[S]=sd(P),d[S].c(),d[S].m(s,l))}for(;S<d.length;S+=1)d[S].d(1);d.length=f.length}if(I&1){g=v[0];let S;for(S=0;S<g.length;S+=1){const P=td(v,g,S);_[S]?_[S].p(P,I):(_[S]=id(P),_[S].c(),_[S].m(s,null))}for(;S<_.length;S+=1)_[S].d(1);_.length=g.length}},i:ue,o:ue,d(v){v&&b(e),Ye(d,v),Ye(_,v)}}}function qk(t){return[da]}class Hk extends at{constructor(e){super(),ot(this,e,qk,jk,nt,{})}}function rd(t,e,n){const s=t.slice();return s[2]=e[n],s}function od(t){let e,n,s=mn(t[2].date)+"",i,r,o=t[2].comment+"",a,l;return{c(){e=p("div"),n=p("div"),i=C(s),r=y(),a=C(o),l=y(),m(n,"class","date-binnacle"),m(e,"class","int-binnacle")},m(c,h){w(c,e,h),u(e,n),u(n,i),u(n,r),u(n,a),u(e,l)},p:ue,d(c){c&&b(e)}}}function zk(t){let e,n,s,i,r,o,a,l=t[0],c=[];for(let h=0;h<l.length;h+=1)c[h]=od(rd(t,l,h));return{c(){e=C(`a\r
`),n=p("main"),s=p("div"),i=p("div"),r=p("div"),o=p("h1"),o.textContent="Bit\xE1cora",a=y();for(let h=0;h<c.length;h+=1)c[h].c();m(o,"class","title svelte-7lgm1k"),m(r,"class","binnacleHome"),m(i,"class","schedule"),m(s,"class","container")},m(h,f){w(h,e,f),w(h,n,f),u(n,s),u(s,i),u(i,r),u(r,o),u(r,a);for(let d=0;d<c.length;d+=1)c[d].m(r,null)},p(h,[f]){if(f&1){l=h[0];let d;for(d=0;d<l.length;d+=1){const g=rd(h,l,d);c[d]?c[d].p(g,f):(c[d]=od(g),c[d].c(),c[d].m(r,null))}for(;d<c.length;d+=1)c[d].d(1);c.length=l.length}},i:ue,o:ue,d(h){h&&b(e),h&&b(n),Ye(c,h)}}}function Gk(t){return[MT.binnacle]}class Kk extends at{constructor(e){super(),ot(this,e,Gk,zk,nt,{})}}const Wk="/MH/assets/team.31fda88c.png";function Qk(t){let e,n,s,i,r,o,a,l;return{c(){e=p("div"),n=p("div"),s=p("p"),s.textContent=`${yi.length} Contactos`,i=y(),r=p("img"),a=y(),l=p("h1"),l.textContent="Contactos",dn(r.src,o=Og)||m(r,"src",o),m(r,"alt","Buzon"),m(r,"class","profile-img svelte-1gg3zdr"),m(l,"class","name svelte-1gg3zdr"),m(n,"class","optionCard svelte-1gg3zdr"),m(e,"class","container")},m(c,h){w(c,e,h),u(e,n),u(n,s),u(n,i),u(n,r),u(n,a),u(n,l)},p:ue,d(c){c&&b(e)}}}function Yk(t){let e,n,s,i,r,o,a,l;return{c(){e=p("div"),n=p("div"),s=p("p"),s.textContent=`${Mn.length} Propiedades`,i=y(),r=p("img"),a=y(),l=p("h1"),l.textContent="Propiedades",dn(r.src,o=qg)||m(r,"src",o),m(r,"alt","propiedad"),m(r,"class","profile-img svelte-1gg3zdr"),m(l,"class","name svelte-1gg3zdr"),m(n,"class","optionCard svelte-1gg3zdr"),m(e,"class","container")},m(c,h){w(c,e,h),u(e,n),u(n,s),u(n,i),u(n,r),u(n,a),u(n,l)},p:ue,d(c){c&&b(e)}}}function Xk(t){let e,n,s,i,r,o,a,l,c;return{c(){e=p("div"),n=p("div"),s=p("p"),i=p("strong"),i.textContent=`${da.length} Pendientes`,r=y(),o=p("img"),l=y(),c=p("h1"),c.textContent="Agenda",dn(o.src,a=zg)||m(o,"src",a),m(o,"alt","agenda"),m(o,"class","profile-img svelte-1gg3zdr"),m(c,"class","name svelte-1gg3zdr"),m(n,"class","optionCard svelte-1gg3zdr"),m(e,"class","container")},m(h,f){w(h,e,f),u(e,n),u(n,s),u(s,i),u(n,r),u(n,o),u(n,l),u(n,c)},p:ue,d(h){h&&b(e)}}}function Jk(t){let e,n,s,i,r,o,a,l;return{c(){e=p("div"),n=p("div"),s=p("p"),s.textContent="Sinergias",i=y(),r=p("img"),a=y(),l=p("h1"),l.textContent="Sinergias",dn(r.src,o=Wk)||m(r,"src",o),m(r,"alt","sinergias"),m(r,"class","profile-img svelte-1gg3zdr"),m(l,"class","name svelte-1gg3zdr"),m(n,"class","optionCard svelte-1gg3zdr"),m(e,"class","container")},m(c,h){w(c,e,h),u(e,n),u(n,s),u(n,i),u(n,r),u(n,a),u(n,l)},p:ue,d(c){c&&b(e)}}}function xk(t){let e,n,s,i,r,o,a,l;return e=new Cn({props:{to:"/contactos",title:"contactos",$$slots:{default:[Qk]},$$scope:{ctx:t}}}),s=new Cn({props:{to:"/propiedades",title:"propiedades",$$slots:{default:[Yk]},$$scope:{ctx:t}}}),r=new Cn({props:{to:"/agenda",title:"agenda",$$slots:{default:[Xk]},$$scope:{ctx:t}}}),a=new Cn({props:{to:"/sinergias",title:"sinergias",$$slots:{default:[Jk]},$$scope:{ctx:t}}}),{c(){ce(e.$$.fragment),n=y(),ce(s.$$.fragment),i=y(),ce(r.$$.fragment),o=y(),ce(a.$$.fragment)},m(c,h){oe(e,c,h),w(c,n,h),oe(s,c,h),w(c,i,h),oe(r,c,h),w(c,o,h),oe(a,c,h),l=!0},p(c,h){const f={};h&1&&(f.$$scope={dirty:h,ctx:c}),e.$set(f);const d={};h&1&&(d.$$scope={dirty:h,ctx:c}),s.$set(d);const g={};h&1&&(g.$$scope={dirty:h,ctx:c}),r.$set(g);const _={};h&1&&(_.$$scope={dirty:h,ctx:c}),a.$set(_)},i(c){l||(U(e.$$.fragment,c),U(s.$$.fragment,c),U(r.$$.fragment,c),U(a.$$.fragment,c),l=!0)},o(c){H(e.$$.fragment,c),H(s.$$.fragment,c),H(r.$$.fragment,c),H(a.$$.fragment,c),l=!1},d(c){ae(e,c),c&&b(n),ae(s,c),c&&b(i),ae(r,c),c&&b(o),ae(a,c)}}}function Zk(t){let e,n;return e=new jg({}),{c(){ce(e.$$.fragment)},m(s,i){oe(e,s,i),n=!0},i(s){n||(U(e.$$.fragment,s),n=!0)},o(s){H(e.$$.fragment,s),n=!1},d(s){ae(e,s)}}}function eI(t){let e,n;return e=new Hg({}),{c(){ce(e.$$.fragment)},m(s,i){oe(e,s,i),n=!0},i(s){n||(U(e.$$.fragment,s),n=!0)},o(s){H(e.$$.fragment,s),n=!1},d(s){ae(e,s)}}}function tI(t){let e,n;return e=new Gg({}),{c(){ce(e.$$.fragment)},m(s,i){oe(e,s,i),n=!0},i(s){n||(U(e.$$.fragment,s),n=!0)},o(s){H(e.$$.fragment,s),n=!1},d(s){ae(e,s)}}}function nI(t){let e,n;return e=new Kg({}),{c(){ce(e.$$.fragment)},m(s,i){oe(e,s,i),n=!0},i(s){n||(U(e.$$.fragment,s),n=!0)},o(s){H(e.$$.fragment,s),n=!1},d(s){ae(e,s)}}}function sI(t){let e,n,s,i,r,o,a,l,c,h,f,d,g,_,v,I,S;return s=new Ll({props:{$$slots:{default:[xk]},$$scope:{ctx:t}}}),r=new yn({props:{path:"/contactos",$$slots:{default:[Zk]},$$scope:{ctx:t}}}),a=new yn({props:{path:"/propiedades",$$slots:{default:[eI]},$$scope:{ctx:t}}}),c=new yn({props:{path:"/agenda",$$slots:{default:[tI]},$$scope:{ctx:t}}}),f=new yn({props:{path:"/sinergias",$$slots:{default:[nI]},$$scope:{ctx:t}}}),_=new Hk({props:{"(orderTodos)":!0}}),I=new Kk({}),{c(){e=p("body"),n=p("div"),ce(s.$$.fragment),i=y(),ce(r.$$.fragment),o=y(),ce(a.$$.fragment),l=y(),ce(c.$$.fragment),h=y(),ce(f.$$.fragment),d=y(),g=p("div"),ce(_.$$.fragment),v=y(),ce(I.$$.fragment),m(n,"class","wrapper-grid svelte-1gg3zdr"),m(g,"class","")},m(P,N){w(P,e,N),u(e,n),oe(s,n,null),u(n,i),oe(r,n,null),u(n,o),oe(a,n,null),u(n,l),oe(c,n,null),u(n,h),oe(f,n,null),u(e,d),u(e,g),oe(_,g,null),u(g,v),oe(I,g,null),S=!0},p(P,[N]){const $={};N&1&&($.$$scope={dirty:N,ctx:P}),s.$set($);const L={};N&1&&(L.$$scope={dirty:N,ctx:P}),r.$set(L);const V={};N&1&&(V.$$scope={dirty:N,ctx:P}),a.$set(V);const O={};N&1&&(O.$$scope={dirty:N,ctx:P}),c.$set(O);const W={};N&1&&(W.$$scope={dirty:N,ctx:P}),f.$set(W)},i(P){S||(U(s.$$.fragment,P),U(r.$$.fragment,P),U(a.$$.fragment,P),U(c.$$.fragment,P),U(f.$$.fragment,P),U(_.$$.fragment,P),U(I.$$.fragment,P),S=!0)},o(P){H(s.$$.fragment,P),H(r.$$.fragment,P),H(a.$$.fragment,P),H(c.$$.fragment,P),H(f.$$.fragment,P),H(_.$$.fragment,P),H(I.$$.fragment,P),S=!1},d(P){P&&b(e),ae(s),ae(r),ae(a),ae(c),ae(f),ae(_),ae(I)}}}class iI extends at{constructor(e){super(),ot(this,e,null,sI,nt,{})}}function rI(t){let e;return{c(){e=p("h1"),e.textContent="Captacion"},m(n,s){w(n,e,s)},p:ue,i:ue,o:ue,d(n){n&&b(e)}}}class oI extends at{constructor(e){super(),ot(this,e,null,rI,nt,{})}}const aI=[{name:"Blanca",lastname:"Lopez",selecMC:"Lona en Propiedad",comContact:"Concieron la casa el domingo 19 de junio",email:"",telephon:"614 184 6539",contactMode:"",lastContact:"",createdAt:"21/06/2022",norte:"FALSO",sur:"FALSO",oeste:"VERDADERO",este:"FALSO",centro:"FALSO",fracPrivado:"FALSO",frenteParque:"FALSO",unaPlanta:"FALSO",recPB:"FALSO",listaHabitar:"FALSO",patioAmplio:"FALSO",nueva:"FALSO",otro:"FALSO",numBeds:0,numBaths:0,halfBathroom:"",modePay:"NA",budget:0,numParks:0,locaProperty:"FALSO11",typeContacts:"Comprador",contactStage:"Etapa3",tagsProperty:"--------",rangeProp:"CRT"},{name:"Octavio",lastname:"Rios",selecMC:"Lamudi",comContact:"Contact\xF3 por Villas del Sol Fch",email:"",telephon:"614 151 5151",contactMode:"",lastContact:"",createdAt:"27/06/2022",norte:"VERDADERO",sur:"VERDADERO",oeste:"VERDADERO",este:"FALSO",centro:"FALSO",fracPrivado:"FALSO",frenteParque:"FALSO",unaPlanta:"FALSO",recPB:"FALSO",listaHabitar:"FALSO",patioAmplio:"FALSO",nueva:"FALSO",otro:"FALSO",numBeds:0,numBaths:0,halfBathroom:"",modePay:"NA",budget:"2,400,000",numParks:0,locaProperty:"FALSO9FALSO10FALSO11",typeContacts:"Comprador",contactStage:"Etapa1",tagsProperty:"--------",rangeProp:"SGN"},{name:"Ana",lastname:"Saucedo",selecMC:"Lamudi",comContact:"Lo va a comentar con su parega y me contacta",email:"",telephon:"614 195 6941",contactMode:"",lastContact:"",createdAt:"27/06/2022",norte:"FALSO",sur:"FALSO",oeste:"FALSO",este:"FALSO",centro:"FALSO",fracPrivado:"FALSO",frenteParque:"FALSO",unaPlanta:"FALSO",recPB:"FALSO",listaHabitar:"FALSO",patioAmplio:"FALSO",nueva:"FALSO",otro:"FALSO",numBeds:0,numBaths:0,halfBathroom:"",modePay:"NA",budget:0,numParks:0,locaProperty:"NorteSurOesteEsteCentro",typeContacts:"Comprador",contactStage:"Etapa1",tagsProperty:"--------",rangeProp:"PRM"},{name:"Luis",lastname:"Rodriguez",selecMC:"",comContact:"",email:"",telephon:"614 285 4364",contactMode:"",lastContact:"",createdAt:"27/06/2022",norte:"FALSO",sur:"VERDADERO",oeste:"VERDADERO",este:"VERDADERO",centro:"FALSO",fracPrivado:"FALSO",frenteParque:"FALSO",unaPlanta:"FALSO",recPB:"FALSO",listaHabitar:"FALSO",patioAmplio:"FALSO",nueva:"FALSO",otro:"FALSO",numBeds:0,numBaths:0,halfBathroom:"",modePay:"NA",budget:0,numParks:0,locaProperty:"FALSO10FALSO11FALSO12",typeContacts:"Comprador",contactStage:"Etapa1",tagsProperty:"--------",rangeProp:"QNT"},{name:"Luis",lastname:"Rodriguez",selecMC:"Lona en Propiedad",comContact:"busca terreno o nave para venta o renta, entre 9 y 12 mil m2 de terreno",email:"",telephon:"614 285 4364",contactMode:"",lastContact:"",createdAt:"27/06/2022",norte:"FALSO",sur:"VERDADERO",oeste:"VERDADERO",este:"VERDADERO",centro:"FALSO",fracPrivado:"FALSO",frenteParque:"FALSO",unaPlanta:"FALSO",recPB:"FALSO",listaHabitar:"FALSO",patioAmplio:"FALSO",nueva:"FALSO",otro:"FALSO",numBeds:0,numBaths:0,halfBathroom:"",modePay:"NA",budget:0,numParks:0,locaProperty:"FALSO10FALSO11FALSO12",typeContacts:"Comprador",contactStage:"Etapa1",tagsProperty:"--------",rangeProp:"QNT"}];function ad(t,e,n){const s=t.slice();return s[3]=e[n],s}function lI(t){let e,n=t[3].name+"",s,i,r=t[3].lastname+"",o,a,l=mn(t[3].createdAt)+"",c,h;return{c(){e=p("p"),s=C(n),i=y(),o=C(r),a=C(" que contact\xF3 el "),c=C(l),h=C(`/p>\r
      `)},m(f,d){w(f,e,d),u(e,s),u(e,i),u(e,o),u(e,a),u(e,c),u(e,h)},p:ue,d(f){f&&b(e)}}}function ld(t){let e,n=t[3].patioAmplio==""&&lI(t);return{c(){n&&n.c(),e=rn()},m(s,i){n&&n.m(s,i),w(s,e,i)},p(s,i){s[3].patioAmplio==""&&n.p(s,i)},d(s){n&&n.d(s),s&&b(e)}}}function cI(t){let e,n,s,i,r,o,a,l=t[0],c=[];for(let h=0;h<l.length;h+=1)c[h]=ld(ad(t,l,h));return{c(){e=p("h1"),e.textContent="About",n=y(),s=p("button"),s.textContent="Clic to save",i=y();for(let h=0;h<c.length;h+=1)c[h].c();r=rn()},m(h,f){w(h,e,f),w(h,n,f),w(h,s,f),w(h,i,f);for(let d=0;d<c.length;d+=1)c[d].m(h,f);w(h,r,f),o||(a=B(s,"click",t[1]),o=!0)},p(h,[f]){if(f&1){l=h[0];let d;for(d=0;d<l.length;d+=1){const g=ad(h,l,d);c[d]?c[d].p(g,f):(c[d]=ld(g),c[d].c(),c[d].m(r.parentNode,r))}for(;d<c.length;d+=1)c[d].d(1);c.length=l.length}},i:ue,o:ue,d(h){h&&b(e),h&&b(n),h&&b(s),h&&b(i),Ye(c,h),h&&b(r),o=!1,a()}}}function uI(t){var e=[];function n(){aI.forEach(i=>s(i))}async function s(i){console.log(i);const r=Hn(Kt,"contacts");await _i(r,i)}return[e,n]}class hI extends at{constructor(e){super(),ot(this,e,uI,cI,nt,{})}}function fI(t){let e,n,s,i,r,o,a,l,c,h,f,d,g,_,v;return{c(){e=p("div"),n=p("form"),s=p("h3"),s.textContent="Login",i=y(),r=p("label"),o=C(`Email\r
                `),a=p("input"),l=y(),c=p("label"),h=C(`Password\r
                `),f=p("input"),d=y(),g=p("button"),g.textContent="Registrarme",a.required=!0,m(a,"type","email"),m(a,"name","email"),m(r,"class","form_label"),f.required=!0,m(f,"type","password"),m(f,"name","password"),m(c,"class","form_label"),m(n,"class","register form"),m(e,"class","container")},m(I,S){w(I,e,S),u(e,n),u(n,s),u(n,i),u(n,r),u(r,o),u(r,a),fe(a,t[0]),u(n,l),u(n,c),u(c,h),u(c,f),fe(f,t[1]),u(n,d),u(n,g),_||(v=[B(a,"input",t[2]),B(f,"input",t[3]),B(n,"submit",Tn(dI))],_=!0)},p(I,[S]){S&1&&a.value!==I[0]&&fe(a,I[0]),S&2&&f.value!==I[1]&&fe(f,I[1])},i:ue,o:ue,d(I){I&&b(e),_=!1,rt(v)}}}function dI(){}function pI(t,e,n){let s,i;function r(){s=this.value,n(0,s)}function o(){i=this.value,n(1,i)}return[s,i,r,o]}class mI extends at{constructor(e){super(),ot(this,e,pI,fI,nt,{})}}const gI="/MH/assets/logoMH.9387adb0.png";function _I(t){let e;return{c(){e=C("Home")},m(n,s){w(n,e,s)},d(n){n&&b(e)}}}function vI(t){let e;return{c(){e=C("Contactos")},m(n,s){w(n,e,s)},d(n){n&&b(e)}}}function yI(t){let e;return{c(){e=C("Propiedades")},m(n,s){w(n,e,s)},d(n){n&&b(e)}}}function bI(t){let e;return{c(){e=C("Captaci\xF3n")},m(n,s){w(n,e,s)},d(n){n&&b(e)}}}function wI(t){let e;return{c(){e=C("Agenda")},m(n,s){w(n,e,s)},d(n){n&&b(e)}}}function EI(t){let e;return{c(){e=C("Sinergias")},m(n,s){w(n,e,s)},d(n){n&&b(e)}}}function TI(t){let e;return{c(){e=C("About")},m(n,s){w(n,e,s)},d(n){n&&b(e)}}}function kI(t){let e;return{c(){e=C("Login")},m(n,s){w(n,e,s)},d(n){n&&b(e)}}}function II(t){let e,n;return e=new iI({}),{c(){ce(e.$$.fragment)},m(s,i){oe(e,s,i),n=!0},i(s){n||(U(e.$$.fragment,s),n=!0)},o(s){H(e.$$.fragment,s),n=!1},d(s){ae(e,s)}}}function SI(t){let e,n;return e=new jg({}),{c(){ce(e.$$.fragment)},m(s,i){oe(e,s,i),n=!0},i(s){n||(U(e.$$.fragment,s),n=!0)},o(s){H(e.$$.fragment,s),n=!1},d(s){ae(e,s)}}}function CI(t){let e,n;return e=new Hg({}),{c(){ce(e.$$.fragment)},m(s,i){oe(e,s,i),n=!0},i(s){n||(U(e.$$.fragment,s),n=!0)},o(s){H(e.$$.fragment,s),n=!1},d(s){ae(e,s)}}}function AI(t){let e,n;return e=new oI({}),{c(){ce(e.$$.fragment)},m(s,i){oe(e,s,i),n=!0},i(s){n||(U(e.$$.fragment,s),n=!0)},o(s){H(e.$$.fragment,s),n=!1},d(s){ae(e,s)}}}function PI(t){let e,n;return e=new Gg({}),{c(){ce(e.$$.fragment)},m(s,i){oe(e,s,i),n=!0},i(s){n||(U(e.$$.fragment,s),n=!0)},o(s){H(e.$$.fragment,s),n=!1},d(s){ae(e,s)}}}function DI(t){let e,n;return e=new Kg({}),{c(){ce(e.$$.fragment)},m(s,i){oe(e,s,i),n=!0},i(s){n||(U(e.$$.fragment,s),n=!0)},o(s){H(e.$$.fragment,s),n=!1},d(s){ae(e,s)}}}function RI(t){let e,n;return e=new hI({}),{c(){ce(e.$$.fragment)},m(s,i){oe(e,s,i),n=!0},i(s){n||(U(e.$$.fragment,s),n=!0)},o(s){H(e.$$.fragment,s),n=!1},d(s){ae(e,s)}}}function OI(t){let e,n;return e=new Vg({}),{c(){ce(e.$$.fragment)},m(s,i){oe(e,s,i),n=!0},i(s){n||(U(e.$$.fragment,s),n=!0)},o(s){H(e.$$.fragment,s),n=!1},d(s){ae(e,s)}}}function NI(t){let e,n;return e=new mI({}),{c(){ce(e.$$.fragment)},m(s,i){oe(e,s,i),n=!0},i(s){n||(U(e.$$.fragment,s),n=!0)},o(s){H(e.$$.fragment,s),n=!1},d(s){ae(e,s)}}}function LI(t){let e,n;return e=new Vc({}),{c(){ce(e.$$.fragment)},m(s,i){oe(e,s,i),n=!0},i(s){n||(U(e.$$.fragment,s),n=!0)},o(s){H(e.$$.fragment,s),n=!1},d(s){ae(e,s)}}}function MI(t){let e,n,s,i,r,o,a,l,c,h,f,d,g,_,v,I,S,P,N,$,L,V,O,W,D,R,G,F,re,ee,x,j,te,k,z,Q,A,se,we,he,Se,Te,Ue;return a=new Cn({props:{to:"/",$$slots:{default:[_I]},$$scope:{ctx:t}}}),c=new Cn({props:{to:"contactos",$$slots:{default:[vI]},$$scope:{ctx:t}}}),f=new Cn({props:{to:"propiedades",$$slots:{default:[yI]},$$scope:{ctx:t}}}),g=new Cn({props:{to:"captacion",$$slots:{default:[bI]},$$scope:{ctx:t}}}),v=new Cn({props:{to:"agenda",$$slots:{default:[wI]},$$scope:{ctx:t}}}),S=new Cn({props:{to:"sinergias",$$slots:{default:[EI]},$$scope:{ctx:t}}}),N=new Cn({props:{to:"about",$$slots:{default:[TI]},$$scope:{ctx:t}}}),L=new Cn({props:{to:"login",$$slots:{default:[kI]},$$scope:{ctx:t}}}),W=new yn({props:{path:"/",$$slots:{default:[II]},$$scope:{ctx:t}}}),R=new yn({props:{path:"/contactos",$$slots:{default:[SI]},$$scope:{ctx:t}}}),F=new yn({props:{path:"propiedades",$$slots:{default:[CI]},$$scope:{ctx:t}}}),ee=new yn({props:{path:"captacion",$$slots:{default:[AI]},$$scope:{ctx:t}}}),j=new yn({props:{path:"agenda",$$slots:{default:[PI]},$$scope:{ctx:t}}}),k=new yn({props:{path:"sinergias",$$slots:{default:[DI]},$$scope:{ctx:t}}}),Q=new yn({props:{path:"about",$$slots:{default:[RI]},$$scope:{ctx:t}}}),se=new yn({props:{path:"altaContacto",$$slots:{default:[OI]},$$scope:{ctx:t}}}),he=new yn({props:{path:"login",$$slots:{default:[NI]},$$scope:{ctx:t}}}),Te=new yn({props:{path:"altaPropiedad",$$slots:{default:[LI]},$$scope:{ctx:t}}}),{c(){e=p("div"),n=p("header"),s=p("img"),r=y(),o=p("nav"),ce(a.$$.fragment),l=y(),ce(c.$$.fragment),h=y(),ce(f.$$.fragment),d=y(),ce(g.$$.fragment),_=y(),ce(v.$$.fragment),I=y(),ce(S.$$.fragment),P=y(),ce(N.$$.fragment),$=y(),ce(L.$$.fragment),V=y(),O=p("main"),ce(W.$$.fragment),D=y(),ce(R.$$.fragment),G=y(),ce(F.$$.fragment),re=y(),ce(ee.$$.fragment),x=y(),ce(j.$$.fragment),te=y(),ce(k.$$.fragment),z=y(),ce(Q.$$.fragment),A=y(),ce(se.$$.fragment),we=y(),ce(he.$$.fragment),Se=y(),ce(Te.$$.fragment),dn(s.src,i=gI)||m(s,"src",i),m(s,"alt","MatchHome"),m(s,"class","logoMH svelte-kuejtx"),m(o,"class","svelte-kuejtx"),m(e,"class","navMenu")},m(q,ne){w(q,e,ne),u(e,n),u(n,s),u(n,r),u(n,o),oe(a,o,null),u(o,l),oe(c,o,null),u(o,h),oe(f,o,null),u(o,d),oe(g,o,null),u(o,_),oe(v,o,null),u(o,I),oe(S,o,null),u(o,P),oe(N,o,null),u(o,$),oe(L,o,null),w(q,V,ne),w(q,O,ne),oe(W,O,null),u(O,D),oe(R,O,null),u(O,G),oe(F,O,null),u(O,re),oe(ee,O,null),u(O,x),oe(j,O,null),u(O,te),oe(k,O,null),u(O,z),oe(Q,O,null),u(O,A),oe(se,O,null),u(O,we),oe(he,O,null),u(O,Se),oe(Te,O,null),Ue=!0},p(q,ne){const Me={};ne&1&&(Me.$$scope={dirty:ne,ctx:q}),a.$set(Me);const We={};ne&1&&(We.$$scope={dirty:ne,ctx:q}),c.$set(We);const Le={};ne&1&&(Le.$$scope={dirty:ne,ctx:q}),f.$set(Le);const Re={};ne&1&&(Re.$$scope={dirty:ne,ctx:q}),g.$set(Re);const qe={};ne&1&&(qe.$$scope={dirty:ne,ctx:q}),v.$set(qe);const Qe={};ne&1&&(Qe.$$scope={dirty:ne,ctx:q}),S.$set(Qe);const Ce={};ne&1&&(Ce.$$scope={dirty:ne,ctx:q}),N.$set(Ce);const le={};ne&1&&(le.$$scope={dirty:ne,ctx:q}),L.$set(le);const He={};ne&1&&(He.$$scope={dirty:ne,ctx:q}),W.$set(He);const be={};ne&1&&(be.$$scope={dirty:ne,ctx:q}),R.$set(be);const Be={};ne&1&&(Be.$$scope={dirty:ne,ctx:q}),F.$set(Be);const Vt={};ne&1&&(Vt.$$scope={dirty:ne,ctx:q}),ee.$set(Vt);const It={};ne&1&&(It.$$scope={dirty:ne,ctx:q}),j.$set(It);const Yt={};ne&1&&(Yt.$$scope={dirty:ne,ctx:q}),k.$set(Yt);const gt={};ne&1&&(gt.$$scope={dirty:ne,ctx:q}),Q.$set(gt);const jt={};ne&1&&(jt.$$scope={dirty:ne,ctx:q}),se.$set(jt);const Et={};ne&1&&(Et.$$scope={dirty:ne,ctx:q}),he.$set(Et);const st={};ne&1&&(st.$$scope={dirty:ne,ctx:q}),Te.$set(st)},i(q){Ue||(U(a.$$.fragment,q),U(c.$$.fragment,q),U(f.$$.fragment,q),U(g.$$.fragment,q),U(v.$$.fragment,q),U(S.$$.fragment,q),U(N.$$.fragment,q),U(L.$$.fragment,q),U(W.$$.fragment,q),U(R.$$.fragment,q),U(F.$$.fragment,q),U(ee.$$.fragment,q),U(j.$$.fragment,q),U(k.$$.fragment,q),U(Q.$$.fragment,q),U(se.$$.fragment,q),U(he.$$.fragment,q),U(Te.$$.fragment,q),Ue=!0)},o(q){H(a.$$.fragment,q),H(c.$$.fragment,q),H(f.$$.fragment,q),H(g.$$.fragment,q),H(v.$$.fragment,q),H(S.$$.fragment,q),H(N.$$.fragment,q),H(L.$$.fragment,q),H(W.$$.fragment,q),H(R.$$.fragment,q),H(F.$$.fragment,q),H(ee.$$.fragment,q),H(j.$$.fragment,q),H(k.$$.fragment,q),H(Q.$$.fragment,q),H(se.$$.fragment,q),H(he.$$.fragment,q),H(Te.$$.fragment,q),Ue=!1},d(q){q&&b(e),ae(a),ae(c),ae(f),ae(g),ae(v),ae(S),ae(N),ae(L),q&&b(V),q&&b(O),ae(W),ae(R),ae(F),ae(ee),ae(j),ae(k),ae(Q),ae(se),ae(he),ae(Te)}}}function $I(t){let e,n,s,i,r;return n=new Ll({props:{$$slots:{default:[MI]},$$scope:{ctx:t}}}),{c(){e=p("div"),ce(n.$$.fragment),s=y(),i=p("section"),m(e,"class","nav svelte-kuejtx")},m(o,a){w(o,e,a),oe(n,e,null),u(e,s),u(e,i),r=!0},p(o,[a]){const l={};a&1&&(l.$$scope={dirty:a,ctx:o}),n.$set(l)},i(o){r||(U(n.$$.fragment,o),r=!0)},o(o){H(n.$$.fragment,o),r=!1},d(o){o&&b(e),ae(n)}}}class FI extends at{constructor(e){super(),ot(this,e,null,$I,nt,{})}}function UI(t){let e,n,s,i;return s=new FI({}),{c(){e=p("main"),n=p("div"),ce(s.$$.fragment),m(n,"class","navBar svelte-1om6wl1")},m(r,o){w(r,e,o),u(e,n),oe(s,n,null),i=!0},p:ue,i(r){i||(U(s.$$.fragment,r),i=!0)},o(r){H(s.$$.fragment,r),i=!1},d(r){r&&b(e),ae(s)}}}class BI extends at{constructor(e){super(),ot(this,e,null,UI,nt,{})}}new BI({target:document.getElementById("app")});
