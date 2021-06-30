!function(){"use strict";function t(){}var n=function(t){return t};function e(t){return t()}function r(){return Object.create(null)}function o(t){t.forEach(e)}function i(t){return"function"==typeof t}function a(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}var u,c="undefined"!=typeof window,f=c?function(){return window.performance.now()}:function(){return Date.now()},s=c?function(t){return requestAnimationFrame(t)}:t,l=new Set;function d(t){l.forEach((function(n){n.c(t)||(l.delete(n),n.f())})),0!==l.size&&s(d)}function p(t,n){t.appendChild(n)}function v(t,n,e){t.insertBefore(n,e||null)}function h(t){t.parentNode.removeChild(t)}function m(t){return document.createElement(t)}function g(t){return document.createTextNode(t)}function y(){return g(" ")}function $(t,n,e,r){return t.addEventListener(n,e,r),function(){return t.removeEventListener(n,e,r)}}function w(t){return function(n){return n.preventDefault(),t.call(this,n)}}function b(t,n,e){null==e?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}var _,x=0,k={};function E(t,n){t.style.animation=(t.style.animation||"").split(", ").filter(n?function(t){return t.indexOf(n)<0}:function(t){return-1===t.indexOf("__svelte")}).join(", "),n&&!--x&&s((function(){if(!x){for(var t=u.cssRules.length;t--;)u.deleteRule(t);k={}}}))}function C(t){_=t}function S(){if(!_)throw new Error("Function called outside component initialization");return _}var z=[],A=[],O=[],R=[],j=Promise.resolve(),L=!1;function N(t){O.push(t)}var P,q=!1,D=new Set;function F(){if(!q){q=!0;do{for(var t=0;t<z.length;t+=1){var n=z[t];C(n),T(n.$$)}for(z.length=0;A.length;)A.pop()();for(var e=0;e<O.length;e+=1){var r=O[e];D.has(r)||(D.add(r),r())}O.length=0}while(z.length);for(;R.length;)R.pop()();L=!1,q=!1,D.clear()}}function T(t){if(null!==t.fragment){t.update(),o(t.before_update);var n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(N)}}function B(t,n,e){var r,o,i;t.dispatchEvent((r=(n?"intro":"outro")+e,(i=document.createEvent("CustomEvent")).initCustomEvent(r,!1,!1,o),i))}var I=new Set;function M(t,n){t&&t.i&&(I.delete(t),t.i(n))}var U={duration:0};function G(e,r,o){var a,c,p=r(e,o),v=!1,h=0;function g(){a&&E(e,a)}function y(){var r=p||U,o=r.delay;void 0===o&&(o=0);var i=r.duration;void 0===i&&(i=300);var y=r.easing;void 0===y&&(y=n);var $=r.tick;void 0===$&&($=t);var w=r.css;w&&(a=function(t,n,e,r,o,i,a,c){void 0===c&&(c=0);for(var f=16.666/r,s="{\n",l=0;l<=1;l+=f){var d=n+(e-n)*i(l);s+=100*l+"%{"+a(d,1-d)+"}\n"}var p=s+"100% {"+a(e,1-e)+"}\n}",v="__svelte_"+function(t){for(var n=5381,e=t.length;e--;)n=(n<<5)-n^t.charCodeAt(e);return n>>>0}(p)+"_"+c;if(!k[v]){if(!u){var h=m("style");document.head.appendChild(h),u=h.sheet}k[v]=!0,u.insertRule("@keyframes "+v+" "+p,u.cssRules.length)}var g=t.style.animation||"";return t.style.animation=(g?g+", ":"")+v+" "+r+"ms linear "+o+"ms 1 both",x+=1,v}(e,0,1,i,o,y,w,h++)),$(0,1);var b=f()+o,_=b+i;c&&c.abort(),v=!0,N((function(){return B(e,!0,"start")})),c=function(t){var n;return 0===l.size&&s(d),{promise:new Promise((function(e){l.add(n={c:t,f:e})})),abort:function(){l.delete(n)}}}((function(t){if(v){if(t>=_)return $(1,0),B(e,!0,"end"),g(),v=!1;if(t>=b){var n=y((t-b)/i);$(n,1-n)}}return v}))}var $=!1;return{start:function(){$||(E(e),i(p)?(p=p(),(P||(P=Promise.resolve()).then((function(){P=null})),P).then(y)):y())},invalidate:function(){$=!1},end:function(){v&&(g(),v=!1)}}}function H(t,n){-1===t.$$.dirty[0]&&(z.push(t),L||(L=!0,j.then(F)),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function J(n,a,u,c,f,s,l){void 0===l&&(l=[-1]);var d=_;C(n);var p=a.props||{},v=n.$$={fragment:null,ctx:null,props:s,update:t,not_equal:f,bound:r(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(d?d.$$.context:[]),callbacks:r(),dirty:l},h=!1;v.ctx=u?u(n,p,(function(t,e){for(var r=[],o=arguments.length-2;o-- >0;)r[o]=arguments[o+2];var i=r.length?r[0]:e;return v.ctx&&f(v.ctx[t],v.ctx[t]=i)&&(v.bound[t]&&v.bound[t](i),h&&H(n,t)),e})):[],v.update(),h=!0,o(v.before_update),v.fragment=!!c&&c(v.ctx),a.target&&(a.hydrate?v.fragment&&v.fragment.l(function(t){return Array.from(t.childNodes)}(a.target)):v.fragment&&v.fragment.c(),a.intro&&M(n.$$.fragment),function(t,n,r){var a=t.$$,u=a.fragment,c=a.on_mount,f=a.on_destroy,s=a.after_update;u&&u.m(n,r),N((function(){var n=c.map(e).filter(i);f?f.push.apply(f,n):o(n),t.$$.on_mount=[]})),s.forEach(N)}(n,a.target,a.anchor),F()),C(d)}var K=function(){};function Q(t,e){var r=e.delay;void 0===r&&(r=0);var o=e.duration;void 0===o&&(o=400);var i=e.easing;void 0===i&&(i=n);var a=+getComputedStyle(t).opacity;return{delay:r,duration:o,easing:i,css:function(t){return"opacity: "+t*a}}}function V(n){var e,r,a,u,c,f,s,l,d,_,x,k,E,C;return{c:function(){e=m("div"),r=m("div"),a=m("a"),u=g(" f "),c=y(),f=m("div"),s=m("a"),l=g("in"),d=y(),_=m("div"),x=m("a"),k=m("img"),b(a,"href",n[1]),b(a,"class","svelte-x49sbn"),b(r,"class","facebook svelte-x49sbn"),b(s,"href",n[2]),b(s,"class","svelte-x49sbn"),b(f,"class","linkedin svelte-x49sbn"),b(k,"alt","Twitter logo"),k.src!=="https://static.dwcdn.net/custom/social-sharing/twitter.png"&&b(k,"src","https://static.dwcdn.net/custom/social-sharing/twitter.png"),b(k,"class","svelte-x49sbn"),b(x,"href",n[3]),b(x,"class","svelte-x49sbn"),b(_,"class","twitter svelte-x49sbn"),b(e,"class","social-sharing noscript svelte-x49sbn")},m:function(t,o){v(t,e,o),p(e,r),p(r,a),p(a,u),p(e,c),p(e,f),p(f,s),p(s,l),p(e,d),p(e,_),p(_,x),p(x,k),C=[$(a,"click",w((function(){i(X(n[1]))&&X(n[1]).apply(this,arguments)}))),$(s,"click",w((function(){i(X(n[2]))&&X(n[2]).apply(this,arguments)}))),$(x,"click",w((function(){i(X(n[3]))&&X(n[3]).apply(this,arguments)})))]},p:function(t,e){n=t,2&e&&b(a,"href",n[1]),4&e&&b(s,"href",n[2]),8&e&&b(x,"href",n[3])},i:function(t){E||N((function(){(E=G(e,Q,{delay:1e3,duration:200})).start()}))},o:t,d:function(t){t&&h(e),o(C)}}}function W(n){var e,r=!n[0]&&V(n);return{c:function(){r&&r.c(),e=g("")},m:function(t,n){r&&r.m(t,n),v(t,e,n)},p:function(t,n){var o=n[0];t[0]?r&&(r.d(1),r=null):r?(r.p(t,o),M(r,1)):((r=V(t)).c(),M(r,1),r.m(e.parentNode,e))},i:function(t){M(r)},o:t,d:function(t){r&&r.d(t),t&&h(e)}}}function X(t){window.open(t,"sharer","left=20,top=20,width=500,height=500,toolbar=1,resizable=0")}function Y(t,n,e){var r,o,i,a,u,c,f=n.props,s=f.get,l=!0;return r=function(){e(0,l=!1),window.document.body.classList.add("is-sharing-enabled")},S().$$.on_mount.push(r),function(t){S().$$.on_destroy.push(t)}((function(){window.document.body.classList.remove("is-sharing-enabled")})),t.$set=function(t){"props"in t&&e(4,f=t.props)},t.$$.update=function(){16&t.$$.dirty&&e(5,o=f.chart),32&t.$$.dirty&&e(6,i=encodeURIComponent(s(o,"metadata.visualize.sharing.auto",!1)?document.referrer:s(o,"metadata.visualize.sharing.url"))),64&t.$$.dirty&&e(1,a="https://www.facebook.com/sharer/sharer.php?u="+i),64&t.$$.dirty&&e(2,u="https://www.linkedin.com/cws/share?url="+i),64&t.$$.dirty&&e(3,c="https://twitter.com/intent/tweet?text="+i)},[l,a,u,c,f]}K.prototype.$destroy=function(){var n,e;n=1,null!==(e=this.$$).fragment&&(o(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[]),this.$destroy=t},K.prototype.$on=function(t,n){var e=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return e.push(n),function(){var t=e.indexOf(n);-1!==t&&e.splice(t,1)}},K.prototype.$set=function(){};var Z=function(t){function n(n){t.call(this),J(this,n,Y,W,a,{props:4})}return t&&(n.__proto__=t),n.prototype=Object.create(t&&t.prototype),n.prototype.constructor=n,n}(K);Z.test=function(t){var n=t.chart,e=t.isStyleStatic;return!!function(t,n,e){if(void 0===n&&(n=null),void 0===e&&(e=null),!n)return t;for(var r=n.split("."),o=t,i=0;i<r.length&&null!=o;i++)o=o[r[i]];return null==o?e:o}(n,"metadata.visualize.sharing.enabled",!1)&&!e},dw.block.register("SocialSharing",Z)}();
