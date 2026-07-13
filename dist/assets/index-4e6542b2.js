(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function ew(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Iy={exports:{}},Af={},Ny={exports:{}},Ge={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ru=Symbol.for("react.element"),tw=Symbol.for("react.portal"),nw=Symbol.for("react.fragment"),iw=Symbol.for("react.strict_mode"),rw=Symbol.for("react.profiler"),sw=Symbol.for("react.provider"),ow=Symbol.for("react.context"),aw=Symbol.for("react.forward_ref"),lw=Symbol.for("react.suspense"),uw=Symbol.for("react.memo"),cw=Symbol.for("react.lazy"),J0=Symbol.iterator;function fw(t){return t===null||typeof t!="object"?null:(t=J0&&t[J0]||t["@@iterator"],typeof t=="function"?t:null)}var Uy={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Fy=Object.assign,Oy={};function La(t,e,n){this.props=t,this.context=e,this.refs=Oy,this.updater=n||Uy}La.prototype.isReactComponent={};La.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};La.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function ky(){}ky.prototype=La.prototype;function Xm(t,e,n){this.props=t,this.context=e,this.refs=Oy,this.updater=n||Uy}var Ym=Xm.prototype=new ky;Ym.constructor=Xm;Fy(Ym,La.prototype);Ym.isPureReactComponent=!0;var e_=Array.isArray,By=Object.prototype.hasOwnProperty,qm={current:null},zy={key:!0,ref:!0,__self:!0,__source:!0};function Vy(t,e,n){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)By.call(e,i)&&!zy.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:ru,type:t,key:s,ref:o,props:r,_owner:qm.current}}function dw(t,e){return{$$typeof:ru,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function $m(t){return typeof t=="object"&&t!==null&&t.$$typeof===ru}function hw(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var t_=/\/+/g;function ad(t,e){return typeof t=="object"&&t!==null&&t.key!=null?hw(""+t.key):e.toString(36)}function dc(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case ru:case tw:o=!0}}if(o)return o=t,r=r(o),t=i===""?"."+ad(o,0):i,e_(r)?(n="",t!=null&&(n=t.replace(t_,"$&/")+"/"),dc(r,e,n,"",function(u){return u})):r!=null&&($m(r)&&(r=dw(r,n+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(t_,"$&/")+"/")+t)),e.push(r)),1;if(o=0,i=i===""?".":i+":",e_(t))for(var a=0;a<t.length;a++){s=t[a];var l=i+ad(s,a);o+=dc(s,e,n,l,r)}else if(l=fw(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=i+ad(s,a++),o+=dc(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function yu(t,e,n){if(t==null)return t;var i=[],r=0;return dc(t,i,"","",function(s){return e.call(n,s,r++)}),i}function pw(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var En={current:null},hc={transition:null},mw={ReactCurrentDispatcher:En,ReactCurrentBatchConfig:hc,ReactCurrentOwner:qm};function Hy(){throw Error("act(...) is not supported in production builds of React.")}Ge.Children={map:yu,forEach:function(t,e,n){yu(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return yu(t,function(){e++}),e},toArray:function(t){return yu(t,function(e){return e})||[]},only:function(t){if(!$m(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Ge.Component=La;Ge.Fragment=nw;Ge.Profiler=rw;Ge.PureComponent=Xm;Ge.StrictMode=iw;Ge.Suspense=lw;Ge.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=mw;Ge.act=Hy;Ge.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=Fy({},t.props),r=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=qm.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)By.call(e,l)&&!zy.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];i.children=a}return{$$typeof:ru,type:t.type,key:r,ref:s,props:i,_owner:o}};Ge.createContext=function(t){return t={$$typeof:ow,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:sw,_context:t},t.Consumer=t};Ge.createElement=Vy;Ge.createFactory=function(t){var e=Vy.bind(null,t);return e.type=t,e};Ge.createRef=function(){return{current:null}};Ge.forwardRef=function(t){return{$$typeof:aw,render:t}};Ge.isValidElement=$m;Ge.lazy=function(t){return{$$typeof:cw,_payload:{_status:-1,_result:t},_init:pw}};Ge.memo=function(t,e){return{$$typeof:uw,type:t,compare:e===void 0?null:e}};Ge.startTransition=function(t){var e=hc.transition;hc.transition={};try{t()}finally{hc.transition=e}};Ge.unstable_act=Hy;Ge.useCallback=function(t,e){return En.current.useCallback(t,e)};Ge.useContext=function(t){return En.current.useContext(t)};Ge.useDebugValue=function(){};Ge.useDeferredValue=function(t){return En.current.useDeferredValue(t)};Ge.useEffect=function(t,e){return En.current.useEffect(t,e)};Ge.useId=function(){return En.current.useId()};Ge.useImperativeHandle=function(t,e,n){return En.current.useImperativeHandle(t,e,n)};Ge.useInsertionEffect=function(t,e){return En.current.useInsertionEffect(t,e)};Ge.useLayoutEffect=function(t,e){return En.current.useLayoutEffect(t,e)};Ge.useMemo=function(t,e){return En.current.useMemo(t,e)};Ge.useReducer=function(t,e,n){return En.current.useReducer(t,e,n)};Ge.useRef=function(t){return En.current.useRef(t)};Ge.useState=function(t){return En.current.useState(t)};Ge.useSyncExternalStore=function(t,e,n){return En.current.useSyncExternalStore(t,e,n)};Ge.useTransition=function(){return En.current.useTransition()};Ge.version="18.3.1";Ny.exports=Ge;var oe=Ny.exports;const Km=ew(oe);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var gw=oe,_w=Symbol.for("react.element"),vw=Symbol.for("react.fragment"),xw=Object.prototype.hasOwnProperty,yw=gw.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Sw={key:!0,ref:!0,__self:!0,__source:!0};function Gy(t,e,n){var i,r={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)xw.call(e,i)&&!Sw.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:_w,type:t,key:s,ref:o,props:r,_owner:yw.current}}Af.Fragment=vw;Af.jsx=Gy;Af.jsxs=Gy;Iy.exports=Af;var He=Iy.exports,Uh={},Wy={exports:{}},si={},Xy={exports:{}},Yy={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(L,Y){var Q=L.length;L.push(Y);e:for(;0<Q;){var Z=Q-1>>>1,ne=L[Z];if(0<r(ne,Y))L[Z]=Y,L[Q]=ne,Q=Z;else break e}}function n(L){return L.length===0?null:L[0]}function i(L){if(L.length===0)return null;var Y=L[0],Q=L.pop();if(Q!==Y){L[0]=Q;e:for(var Z=0,ne=L.length,Oe=ne>>>1;Z<Oe;){var Fe=2*(Z+1)-1,Ne=L[Fe],$=Fe+1,se=L[$];if(0>r(Ne,Q))$<ne&&0>r(se,Ne)?(L[Z]=se,L[$]=Q,Z=$):(L[Z]=Ne,L[Fe]=Q,Z=Fe);else if($<ne&&0>r(se,Q))L[Z]=se,L[$]=Q,Z=$;else break e}}return Y}function r(L,Y){var Q=L.sortIndex-Y.sortIndex;return Q!==0?Q:L.id-Y.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],u=[],c=1,f=null,d=3,h=!1,m=!1,g=!1,_=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function x(L){for(var Y=n(u);Y!==null;){if(Y.callback===null)i(u);else if(Y.startTime<=L)i(u),Y.sortIndex=Y.expirationTime,e(l,Y);else break;Y=n(u)}}function S(L){if(g=!1,x(L),!m)if(n(l)!==null)m=!0,B(E);else{var Y=n(u);Y!==null&&F(S,Y.startTime-L)}}function E(L,Y){m=!1,g&&(g=!1,p(y),y=-1),h=!0;var Q=d;try{for(x(Y),f=n(l);f!==null&&(!(f.expirationTime>Y)||L&&!P());){var Z=f.callback;if(typeof Z=="function"){f.callback=null,d=f.priorityLevel;var ne=Z(f.expirationTime<=Y);Y=t.unstable_now(),typeof ne=="function"?f.callback=ne:f===n(l)&&i(l),x(Y)}else i(l);f=n(l)}if(f!==null)var Oe=!0;else{var Fe=n(u);Fe!==null&&F(S,Fe.startTime-Y),Oe=!1}return Oe}finally{f=null,d=Q,h=!1}}var T=!1,A=null,y=-1,w=5,b=-1;function P(){return!(t.unstable_now()-b<w)}function D(){if(A!==null){var L=t.unstable_now();b=L;var Y=!0;try{Y=A(!0,L)}finally{Y?z():(T=!1,A=null)}}else T=!1}var z;if(typeof v=="function")z=function(){v(D)};else if(typeof MessageChannel<"u"){var X=new MessageChannel,U=X.port2;X.port1.onmessage=D,z=function(){U.postMessage(null)}}else z=function(){_(D,0)};function B(L){A=L,T||(T=!0,z())}function F(L,Y){y=_(function(){L(t.unstable_now())},Y)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(L){L.callback=null},t.unstable_continueExecution=function(){m||h||(m=!0,B(E))},t.unstable_forceFrameRate=function(L){0>L||125<L?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):w=0<L?Math.floor(1e3/L):5},t.unstable_getCurrentPriorityLevel=function(){return d},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(L){switch(d){case 1:case 2:case 3:var Y=3;break;default:Y=d}var Q=d;d=Y;try{return L()}finally{d=Q}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(L,Y){switch(L){case 1:case 2:case 3:case 4:case 5:break;default:L=3}var Q=d;d=L;try{return Y()}finally{d=Q}},t.unstable_scheduleCallback=function(L,Y,Q){var Z=t.unstable_now();switch(typeof Q=="object"&&Q!==null?(Q=Q.delay,Q=typeof Q=="number"&&0<Q?Z+Q:Z):Q=Z,L){case 1:var ne=-1;break;case 2:ne=250;break;case 5:ne=1073741823;break;case 4:ne=1e4;break;default:ne=5e3}return ne=Q+ne,L={id:c++,callback:Y,priorityLevel:L,startTime:Q,expirationTime:ne,sortIndex:-1},Q>Z?(L.sortIndex=Q,e(u,L),n(l)===null&&L===n(u)&&(g?(p(y),y=-1):g=!0,F(S,Q-Z))):(L.sortIndex=ne,e(l,L),m||h||(m=!0,B(E))),L},t.unstable_shouldYield=P,t.unstable_wrapCallback=function(L){var Y=d;return function(){var Q=d;d=Y;try{return L.apply(this,arguments)}finally{d=Q}}}})(Yy);Xy.exports=Yy;var Mw=Xy.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ew=oe,ti=Mw;function ie(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var qy=new Set,Al={};function ho(t,e){pa(t,e),pa(t+"Capture",e)}function pa(t,e){for(Al[t]=e,t=0;t<e.length;t++)qy.add(e[t])}var Mr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Fh=Object.prototype.hasOwnProperty,Tw=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,n_={},i_={};function ww(t){return Fh.call(i_,t)?!0:Fh.call(n_,t)?!1:Tw.test(t)?i_[t]=!0:(n_[t]=!0,!1)}function Aw(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function Cw(t,e,n,i){if(e===null||typeof e>"u"||Aw(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Tn(t,e,n,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var on={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){on[t]=new Tn(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];on[e]=new Tn(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){on[t]=new Tn(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){on[t]=new Tn(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){on[t]=new Tn(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){on[t]=new Tn(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){on[t]=new Tn(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){on[t]=new Tn(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){on[t]=new Tn(t,5,!1,t.toLowerCase(),null,!1,!1)});var jm=/[\-:]([a-z])/g;function Zm(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(jm,Zm);on[e]=new Tn(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(jm,Zm);on[e]=new Tn(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(jm,Zm);on[e]=new Tn(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){on[t]=new Tn(t,1,!1,t.toLowerCase(),null,!1,!1)});on.xlinkHref=new Tn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){on[t]=new Tn(t,1,!1,t.toLowerCase(),null,!0,!0)});function Qm(t,e,n,i){var r=on.hasOwnProperty(e)?on[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(Cw(e,n,r,i)&&(n=null),i||r===null?ww(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var Dr=Ew.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Su=Symbol.for("react.element"),ko=Symbol.for("react.portal"),Bo=Symbol.for("react.fragment"),Jm=Symbol.for("react.strict_mode"),Oh=Symbol.for("react.profiler"),$y=Symbol.for("react.provider"),Ky=Symbol.for("react.context"),eg=Symbol.for("react.forward_ref"),kh=Symbol.for("react.suspense"),Bh=Symbol.for("react.suspense_list"),tg=Symbol.for("react.memo"),Xr=Symbol.for("react.lazy"),jy=Symbol.for("react.offscreen"),r_=Symbol.iterator;function Oa(t){return t===null||typeof t!="object"?null:(t=r_&&t[r_]||t["@@iterator"],typeof t=="function"?t:null)}var wt=Object.assign,ld;function tl(t){if(ld===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);ld=e&&e[1]||""}return`
`+ld+t}var ud=!1;function cd(t,e){if(!t||ud)return"";ud=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var i=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){i=u}t.call(e.prototype)}else{try{throw Error()}catch(u){i=u}t()}}catch(u){if(u&&i&&typeof u.stack=="string"){for(var r=u.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{ud=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?tl(t):""}function Rw(t){switch(t.tag){case 5:return tl(t.type);case 16:return tl("Lazy");case 13:return tl("Suspense");case 19:return tl("SuspenseList");case 0:case 2:case 15:return t=cd(t.type,!1),t;case 11:return t=cd(t.type.render,!1),t;case 1:return t=cd(t.type,!0),t;default:return""}}function zh(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Bo:return"Fragment";case ko:return"Portal";case Oh:return"Profiler";case Jm:return"StrictMode";case kh:return"Suspense";case Bh:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Ky:return(t.displayName||"Context")+".Consumer";case $y:return(t._context.displayName||"Context")+".Provider";case eg:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case tg:return e=t.displayName||null,e!==null?e:zh(t.type)||"Memo";case Xr:e=t._payload,t=t._init;try{return zh(t(e))}catch{}}return null}function bw(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return zh(e);case 8:return e===Jm?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function ms(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Zy(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Pw(t){var e=Zy(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Mu(t){t._valueTracker||(t._valueTracker=Pw(t))}function Qy(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=Zy(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function Uc(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Vh(t,e){var n=e.checked;return wt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function s_(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=ms(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Jy(t,e){e=e.checked,e!=null&&Qm(t,"checked",e,!1)}function Hh(t,e){Jy(t,e);var n=ms(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Gh(t,e.type,n):e.hasOwnProperty("defaultValue")&&Gh(t,e.type,ms(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function o_(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Gh(t,e,n){(e!=="number"||Uc(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var nl=Array.isArray;function na(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+ms(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function Wh(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(ie(91));return wt({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function a_(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(ie(92));if(nl(n)){if(1<n.length)throw Error(ie(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:ms(n)}}function eS(t,e){var n=ms(e.value),i=ms(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function l_(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function tS(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Xh(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?tS(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Eu,nS=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Eu=Eu||document.createElement("div"),Eu.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Eu.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Cl(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var cl={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Dw=["Webkit","ms","Moz","O"];Object.keys(cl).forEach(function(t){Dw.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),cl[e]=cl[t]})});function iS(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||cl.hasOwnProperty(t)&&cl[t]?(""+e).trim():e+"px"}function rS(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=iS(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var Lw=wt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Yh(t,e){if(e){if(Lw[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(ie(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(ie(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(ie(61))}if(e.style!=null&&typeof e.style!="object")throw Error(ie(62))}}function qh(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var $h=null;function ng(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Kh=null,ia=null,ra=null;function u_(t){if(t=au(t)){if(typeof Kh!="function")throw Error(ie(280));var e=t.stateNode;e&&(e=Df(e),Kh(t.stateNode,t.type,e))}}function sS(t){ia?ra?ra.push(t):ra=[t]:ia=t}function oS(){if(ia){var t=ia,e=ra;if(ra=ia=null,u_(t),e)for(t=0;t<e.length;t++)u_(e[t])}}function aS(t,e){return t(e)}function lS(){}var fd=!1;function uS(t,e,n){if(fd)return t(e,n);fd=!0;try{return aS(t,e,n)}finally{fd=!1,(ia!==null||ra!==null)&&(lS(),oS())}}function Rl(t,e){var n=t.stateNode;if(n===null)return null;var i=Df(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(ie(231,e,typeof n));return n}var jh=!1;if(Mr)try{var ka={};Object.defineProperty(ka,"passive",{get:function(){jh=!0}}),window.addEventListener("test",ka,ka),window.removeEventListener("test",ka,ka)}catch{jh=!1}function Iw(t,e,n,i,r,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(c){this.onError(c)}}var fl=!1,Fc=null,Oc=!1,Zh=null,Nw={onError:function(t){fl=!0,Fc=t}};function Uw(t,e,n,i,r,s,o,a,l){fl=!1,Fc=null,Iw.apply(Nw,arguments)}function Fw(t,e,n,i,r,s,o,a,l){if(Uw.apply(this,arguments),fl){if(fl){var u=Fc;fl=!1,Fc=null}else throw Error(ie(198));Oc||(Oc=!0,Zh=u)}}function po(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function cS(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function c_(t){if(po(t)!==t)throw Error(ie(188))}function Ow(t){var e=t.alternate;if(!e){if(e=po(t),e===null)throw Error(ie(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return c_(r),t;if(s===i)return c_(r),e;s=s.sibling}throw Error(ie(188))}if(n.return!==i.return)n=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===n){o=!0,n=r,i=s;break}if(a===i){o=!0,i=r,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,i=r;break}if(a===i){o=!0,i=s,n=r;break}a=a.sibling}if(!o)throw Error(ie(189))}}if(n.alternate!==i)throw Error(ie(190))}if(n.tag!==3)throw Error(ie(188));return n.stateNode.current===n?t:e}function fS(t){return t=Ow(t),t!==null?dS(t):null}function dS(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=dS(t);if(e!==null)return e;t=t.sibling}return null}var hS=ti.unstable_scheduleCallback,f_=ti.unstable_cancelCallback,kw=ti.unstable_shouldYield,Bw=ti.unstable_requestPaint,Ot=ti.unstable_now,zw=ti.unstable_getCurrentPriorityLevel,ig=ti.unstable_ImmediatePriority,pS=ti.unstable_UserBlockingPriority,kc=ti.unstable_NormalPriority,Vw=ti.unstable_LowPriority,mS=ti.unstable_IdlePriority,Cf=null,$i=null;function Hw(t){if($i&&typeof $i.onCommitFiberRoot=="function")try{$i.onCommitFiberRoot(Cf,t,void 0,(t.current.flags&128)===128)}catch{}}var bi=Math.clz32?Math.clz32:Xw,Gw=Math.log,Ww=Math.LN2;function Xw(t){return t>>>=0,t===0?32:31-(Gw(t)/Ww|0)|0}var Tu=64,wu=4194304;function il(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Bc(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~r;a!==0?i=il(a):(s&=o,s!==0&&(i=il(s)))}else o=n&~r,o!==0?i=il(o):s!==0&&(i=il(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-bi(e),r=1<<n,i|=t[n],e&=~r;return i}function Yw(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function qw(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-bi(s),a=1<<o,l=r[o];l===-1?(!(a&n)||a&i)&&(r[o]=Yw(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function Qh(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function gS(){var t=Tu;return Tu<<=1,!(Tu&4194240)&&(Tu=64),t}function dd(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function su(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-bi(e),t[e]=n}function $w(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-bi(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function rg(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-bi(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var it=0;function _S(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var vS,sg,xS,yS,SS,Jh=!1,Au=[],is=null,rs=null,ss=null,bl=new Map,Pl=new Map,$r=[],Kw="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function d_(t,e){switch(t){case"focusin":case"focusout":is=null;break;case"dragenter":case"dragleave":rs=null;break;case"mouseover":case"mouseout":ss=null;break;case"pointerover":case"pointerout":bl.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Pl.delete(e.pointerId)}}function Ba(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=au(e),e!==null&&sg(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function jw(t,e,n,i,r){switch(e){case"focusin":return is=Ba(is,t,e,n,i,r),!0;case"dragenter":return rs=Ba(rs,t,e,n,i,r),!0;case"mouseover":return ss=Ba(ss,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return bl.set(s,Ba(bl.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,Pl.set(s,Ba(Pl.get(s)||null,t,e,n,i,r)),!0}return!1}function MS(t){var e=Xs(t.target);if(e!==null){var n=po(e);if(n!==null){if(e=n.tag,e===13){if(e=cS(n),e!==null){t.blockedOn=e,SS(t.priority,function(){xS(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function pc(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=ep(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);$h=i,n.target.dispatchEvent(i),$h=null}else return e=au(n),e!==null&&sg(e),t.blockedOn=n,!1;e.shift()}return!0}function h_(t,e,n){pc(t)&&n.delete(e)}function Zw(){Jh=!1,is!==null&&pc(is)&&(is=null),rs!==null&&pc(rs)&&(rs=null),ss!==null&&pc(ss)&&(ss=null),bl.forEach(h_),Pl.forEach(h_)}function za(t,e){t.blockedOn===e&&(t.blockedOn=null,Jh||(Jh=!0,ti.unstable_scheduleCallback(ti.unstable_NormalPriority,Zw)))}function Dl(t){function e(r){return za(r,t)}if(0<Au.length){za(Au[0],t);for(var n=1;n<Au.length;n++){var i=Au[n];i.blockedOn===t&&(i.blockedOn=null)}}for(is!==null&&za(is,t),rs!==null&&za(rs,t),ss!==null&&za(ss,t),bl.forEach(e),Pl.forEach(e),n=0;n<$r.length;n++)i=$r[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<$r.length&&(n=$r[0],n.blockedOn===null);)MS(n),n.blockedOn===null&&$r.shift()}var sa=Dr.ReactCurrentBatchConfig,zc=!0;function Qw(t,e,n,i){var r=it,s=sa.transition;sa.transition=null;try{it=1,og(t,e,n,i)}finally{it=r,sa.transition=s}}function Jw(t,e,n,i){var r=it,s=sa.transition;sa.transition=null;try{it=4,og(t,e,n,i)}finally{it=r,sa.transition=s}}function og(t,e,n,i){if(zc){var r=ep(t,e,n,i);if(r===null)Md(t,e,i,Vc,n),d_(t,i);else if(jw(r,t,e,n,i))i.stopPropagation();else if(d_(t,i),e&4&&-1<Kw.indexOf(t)){for(;r!==null;){var s=au(r);if(s!==null&&vS(s),s=ep(t,e,n,i),s===null&&Md(t,e,i,Vc,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else Md(t,e,i,null,n)}}var Vc=null;function ep(t,e,n,i){if(Vc=null,t=ng(i),t=Xs(t),t!==null)if(e=po(t),e===null)t=null;else if(n=e.tag,n===13){if(t=cS(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Vc=t,null}function ES(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(zw()){case ig:return 1;case pS:return 4;case kc:case Vw:return 16;case mS:return 536870912;default:return 16}default:return 16}}var Zr=null,ag=null,mc=null;function TS(){if(mc)return mc;var t,e=ag,n=e.length,i,r="value"in Zr?Zr.value:Zr.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var o=n-t;for(i=1;i<=o&&e[n-i]===r[s-i];i++);return mc=r.slice(t,1<i?1-i:void 0)}function gc(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Cu(){return!0}function p_(){return!1}function oi(t){function e(n,i,r,s,o){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Cu:p_,this.isPropagationStopped=p_,this}return wt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Cu)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Cu)},persist:function(){},isPersistent:Cu}),e}var Ia={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},lg=oi(Ia),ou=wt({},Ia,{view:0,detail:0}),eA=oi(ou),hd,pd,Va,Rf=wt({},ou,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ug,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Va&&(Va&&t.type==="mousemove"?(hd=t.screenX-Va.screenX,pd=t.screenY-Va.screenY):pd=hd=0,Va=t),hd)},movementY:function(t){return"movementY"in t?t.movementY:pd}}),m_=oi(Rf),tA=wt({},Rf,{dataTransfer:0}),nA=oi(tA),iA=wt({},ou,{relatedTarget:0}),md=oi(iA),rA=wt({},Ia,{animationName:0,elapsedTime:0,pseudoElement:0}),sA=oi(rA),oA=wt({},Ia,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),aA=oi(oA),lA=wt({},Ia,{data:0}),g_=oi(lA),uA={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},cA={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},fA={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function dA(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=fA[t])?!!e[t]:!1}function ug(){return dA}var hA=wt({},ou,{key:function(t){if(t.key){var e=uA[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=gc(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?cA[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ug,charCode:function(t){return t.type==="keypress"?gc(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?gc(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),pA=oi(hA),mA=wt({},Rf,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),__=oi(mA),gA=wt({},ou,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ug}),_A=oi(gA),vA=wt({},Ia,{propertyName:0,elapsedTime:0,pseudoElement:0}),xA=oi(vA),yA=wt({},Rf,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),SA=oi(yA),MA=[9,13,27,32],cg=Mr&&"CompositionEvent"in window,dl=null;Mr&&"documentMode"in document&&(dl=document.documentMode);var EA=Mr&&"TextEvent"in window&&!dl,wS=Mr&&(!cg||dl&&8<dl&&11>=dl),v_=String.fromCharCode(32),x_=!1;function AS(t,e){switch(t){case"keyup":return MA.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function CS(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var zo=!1;function TA(t,e){switch(t){case"compositionend":return CS(e);case"keypress":return e.which!==32?null:(x_=!0,v_);case"textInput":return t=e.data,t===v_&&x_?null:t;default:return null}}function wA(t,e){if(zo)return t==="compositionend"||!cg&&AS(t,e)?(t=TS(),mc=ag=Zr=null,zo=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return wS&&e.locale!=="ko"?null:e.data;default:return null}}var AA={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function y_(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!AA[t.type]:e==="textarea"}function RS(t,e,n,i){sS(i),e=Hc(e,"onChange"),0<e.length&&(n=new lg("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var hl=null,Ll=null;function CA(t){BS(t,0)}function bf(t){var e=Go(t);if(Qy(e))return t}function RA(t,e){if(t==="change")return e}var bS=!1;if(Mr){var gd;if(Mr){var _d="oninput"in document;if(!_d){var S_=document.createElement("div");S_.setAttribute("oninput","return;"),_d=typeof S_.oninput=="function"}gd=_d}else gd=!1;bS=gd&&(!document.documentMode||9<document.documentMode)}function M_(){hl&&(hl.detachEvent("onpropertychange",PS),Ll=hl=null)}function PS(t){if(t.propertyName==="value"&&bf(Ll)){var e=[];RS(e,Ll,t,ng(t)),uS(CA,e)}}function bA(t,e,n){t==="focusin"?(M_(),hl=e,Ll=n,hl.attachEvent("onpropertychange",PS)):t==="focusout"&&M_()}function PA(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return bf(Ll)}function DA(t,e){if(t==="click")return bf(e)}function LA(t,e){if(t==="input"||t==="change")return bf(e)}function IA(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Di=typeof Object.is=="function"?Object.is:IA;function Il(t,e){if(Di(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!Fh.call(e,r)||!Di(t[r],e[r]))return!1}return!0}function E_(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function T_(t,e){var n=E_(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=E_(n)}}function DS(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?DS(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function LS(){for(var t=window,e=Uc();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Uc(t.document)}return e}function fg(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function NA(t){var e=LS(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&DS(n.ownerDocument.documentElement,n)){if(i!==null&&fg(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=T_(n,s);var o=T_(n,i);r&&o&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var UA=Mr&&"documentMode"in document&&11>=document.documentMode,Vo=null,tp=null,pl=null,np=!1;function w_(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;np||Vo==null||Vo!==Uc(i)||(i=Vo,"selectionStart"in i&&fg(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),pl&&Il(pl,i)||(pl=i,i=Hc(tp,"onSelect"),0<i.length&&(e=new lg("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=Vo)))}function Ru(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Ho={animationend:Ru("Animation","AnimationEnd"),animationiteration:Ru("Animation","AnimationIteration"),animationstart:Ru("Animation","AnimationStart"),transitionend:Ru("Transition","TransitionEnd")},vd={},IS={};Mr&&(IS=document.createElement("div").style,"AnimationEvent"in window||(delete Ho.animationend.animation,delete Ho.animationiteration.animation,delete Ho.animationstart.animation),"TransitionEvent"in window||delete Ho.transitionend.transition);function Pf(t){if(vd[t])return vd[t];if(!Ho[t])return t;var e=Ho[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in IS)return vd[t]=e[n];return t}var NS=Pf("animationend"),US=Pf("animationiteration"),FS=Pf("animationstart"),OS=Pf("transitionend"),kS=new Map,A_="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Es(t,e){kS.set(t,e),ho(e,[t])}for(var xd=0;xd<A_.length;xd++){var yd=A_[xd],FA=yd.toLowerCase(),OA=yd[0].toUpperCase()+yd.slice(1);Es(FA,"on"+OA)}Es(NS,"onAnimationEnd");Es(US,"onAnimationIteration");Es(FS,"onAnimationStart");Es("dblclick","onDoubleClick");Es("focusin","onFocus");Es("focusout","onBlur");Es(OS,"onTransitionEnd");pa("onMouseEnter",["mouseout","mouseover"]);pa("onMouseLeave",["mouseout","mouseover"]);pa("onPointerEnter",["pointerout","pointerover"]);pa("onPointerLeave",["pointerout","pointerover"]);ho("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));ho("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));ho("onBeforeInput",["compositionend","keypress","textInput","paste"]);ho("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));ho("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));ho("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var rl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),kA=new Set("cancel close invalid load scroll toggle".split(" ").concat(rl));function C_(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,Fw(i,e,void 0,t),t.currentTarget=null}function BS(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;C_(r,a,u),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;C_(r,a,u),s=l}}}if(Oc)throw t=Zh,Oc=!1,Zh=null,t}function pt(t,e){var n=e[ap];n===void 0&&(n=e[ap]=new Set);var i=t+"__bubble";n.has(i)||(zS(e,t,2,!1),n.add(i))}function Sd(t,e,n){var i=0;e&&(i|=4),zS(n,t,i,e)}var bu="_reactListening"+Math.random().toString(36).slice(2);function Nl(t){if(!t[bu]){t[bu]=!0,qy.forEach(function(n){n!=="selectionchange"&&(kA.has(n)||Sd(n,!1,t),Sd(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[bu]||(e[bu]=!0,Sd("selectionchange",!1,e))}}function zS(t,e,n,i){switch(ES(e)){case 1:var r=Qw;break;case 4:r=Jw;break;default:r=og}n=r.bind(null,e,n,t),r=void 0,!jh||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function Md(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=Xs(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}uS(function(){var u=s,c=ng(n),f=[];e:{var d=kS.get(t);if(d!==void 0){var h=lg,m=t;switch(t){case"keypress":if(gc(n)===0)break e;case"keydown":case"keyup":h=pA;break;case"focusin":m="focus",h=md;break;case"focusout":m="blur",h=md;break;case"beforeblur":case"afterblur":h=md;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":h=m_;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":h=nA;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":h=_A;break;case NS:case US:case FS:h=sA;break;case OS:h=xA;break;case"scroll":h=eA;break;case"wheel":h=SA;break;case"copy":case"cut":case"paste":h=aA;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":h=__}var g=(e&4)!==0,_=!g&&t==="scroll",p=g?d!==null?d+"Capture":null:d;g=[];for(var v=u,x;v!==null;){x=v;var S=x.stateNode;if(x.tag===5&&S!==null&&(x=S,p!==null&&(S=Rl(v,p),S!=null&&g.push(Ul(v,S,x)))),_)break;v=v.return}0<g.length&&(d=new h(d,m,null,n,c),f.push({event:d,listeners:g}))}}if(!(e&7)){e:{if(d=t==="mouseover"||t==="pointerover",h=t==="mouseout"||t==="pointerout",d&&n!==$h&&(m=n.relatedTarget||n.fromElement)&&(Xs(m)||m[Er]))break e;if((h||d)&&(d=c.window===c?c:(d=c.ownerDocument)?d.defaultView||d.parentWindow:window,h?(m=n.relatedTarget||n.toElement,h=u,m=m?Xs(m):null,m!==null&&(_=po(m),m!==_||m.tag!==5&&m.tag!==6)&&(m=null)):(h=null,m=u),h!==m)){if(g=m_,S="onMouseLeave",p="onMouseEnter",v="mouse",(t==="pointerout"||t==="pointerover")&&(g=__,S="onPointerLeave",p="onPointerEnter",v="pointer"),_=h==null?d:Go(h),x=m==null?d:Go(m),d=new g(S,v+"leave",h,n,c),d.target=_,d.relatedTarget=x,S=null,Xs(c)===u&&(g=new g(p,v+"enter",m,n,c),g.target=x,g.relatedTarget=_,S=g),_=S,h&&m)t:{for(g=h,p=m,v=0,x=g;x;x=So(x))v++;for(x=0,S=p;S;S=So(S))x++;for(;0<v-x;)g=So(g),v--;for(;0<x-v;)p=So(p),x--;for(;v--;){if(g===p||p!==null&&g===p.alternate)break t;g=So(g),p=So(p)}g=null}else g=null;h!==null&&R_(f,d,h,g,!1),m!==null&&_!==null&&R_(f,_,m,g,!0)}}e:{if(d=u?Go(u):window,h=d.nodeName&&d.nodeName.toLowerCase(),h==="select"||h==="input"&&d.type==="file")var E=RA;else if(y_(d))if(bS)E=LA;else{E=PA;var T=bA}else(h=d.nodeName)&&h.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(E=DA);if(E&&(E=E(t,u))){RS(f,E,n,c);break e}T&&T(t,d,u),t==="focusout"&&(T=d._wrapperState)&&T.controlled&&d.type==="number"&&Gh(d,"number",d.value)}switch(T=u?Go(u):window,t){case"focusin":(y_(T)||T.contentEditable==="true")&&(Vo=T,tp=u,pl=null);break;case"focusout":pl=tp=Vo=null;break;case"mousedown":np=!0;break;case"contextmenu":case"mouseup":case"dragend":np=!1,w_(f,n,c);break;case"selectionchange":if(UA)break;case"keydown":case"keyup":w_(f,n,c)}var A;if(cg)e:{switch(t){case"compositionstart":var y="onCompositionStart";break e;case"compositionend":y="onCompositionEnd";break e;case"compositionupdate":y="onCompositionUpdate";break e}y=void 0}else zo?AS(t,n)&&(y="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(y="onCompositionStart");y&&(wS&&n.locale!=="ko"&&(zo||y!=="onCompositionStart"?y==="onCompositionEnd"&&zo&&(A=TS()):(Zr=c,ag="value"in Zr?Zr.value:Zr.textContent,zo=!0)),T=Hc(u,y),0<T.length&&(y=new g_(y,t,null,n,c),f.push({event:y,listeners:T}),A?y.data=A:(A=CS(n),A!==null&&(y.data=A)))),(A=EA?TA(t,n):wA(t,n))&&(u=Hc(u,"onBeforeInput"),0<u.length&&(c=new g_("onBeforeInput","beforeinput",null,n,c),f.push({event:c,listeners:u}),c.data=A))}BS(f,e)})}function Ul(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Hc(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=Rl(t,n),s!=null&&i.unshift(Ul(t,s,r)),s=Rl(t,e),s!=null&&i.push(Ul(t,s,r))),t=t.return}return i}function So(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function R_(t,e,n,i,r){for(var s=e._reactName,o=[];n!==null&&n!==i;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&u!==null&&(a=u,r?(l=Rl(n,s),l!=null&&o.unshift(Ul(n,l,a))):r||(l=Rl(n,s),l!=null&&o.push(Ul(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var BA=/\r\n?/g,zA=/\u0000|\uFFFD/g;function b_(t){return(typeof t=="string"?t:""+t).replace(BA,`
`).replace(zA,"")}function Pu(t,e,n){if(e=b_(e),b_(t)!==e&&n)throw Error(ie(425))}function Gc(){}var ip=null,rp=null;function sp(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var op=typeof setTimeout=="function"?setTimeout:void 0,VA=typeof clearTimeout=="function"?clearTimeout:void 0,P_=typeof Promise=="function"?Promise:void 0,HA=typeof queueMicrotask=="function"?queueMicrotask:typeof P_<"u"?function(t){return P_.resolve(null).then(t).catch(GA)}:op;function GA(t){setTimeout(function(){throw t})}function Ed(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),Dl(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);Dl(e)}function os(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function D_(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Na=Math.random().toString(36).slice(2),Hi="__reactFiber$"+Na,Fl="__reactProps$"+Na,Er="__reactContainer$"+Na,ap="__reactEvents$"+Na,WA="__reactListeners$"+Na,XA="__reactHandles$"+Na;function Xs(t){var e=t[Hi];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Er]||n[Hi]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=D_(t);t!==null;){if(n=t[Hi])return n;t=D_(t)}return e}t=n,n=t.parentNode}return null}function au(t){return t=t[Hi]||t[Er],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Go(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(ie(33))}function Df(t){return t[Fl]||null}var lp=[],Wo=-1;function Ts(t){return{current:t}}function mt(t){0>Wo||(t.current=lp[Wo],lp[Wo]=null,Wo--)}function dt(t,e){Wo++,lp[Wo]=t.current,t.current=e}var gs={},vn=Ts(gs),Pn=Ts(!1),ro=gs;function ma(t,e){var n=t.type.contextTypes;if(!n)return gs;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function Dn(t){return t=t.childContextTypes,t!=null}function Wc(){mt(Pn),mt(vn)}function L_(t,e,n){if(vn.current!==gs)throw Error(ie(168));dt(vn,e),dt(Pn,n)}function VS(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(ie(108,bw(t)||"Unknown",r));return wt({},n,i)}function Xc(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||gs,ro=vn.current,dt(vn,t),dt(Pn,Pn.current),!0}function I_(t,e,n){var i=t.stateNode;if(!i)throw Error(ie(169));n?(t=VS(t,e,ro),i.__reactInternalMemoizedMergedChildContext=t,mt(Pn),mt(vn),dt(vn,t)):mt(Pn),dt(Pn,n)}var cr=null,Lf=!1,Td=!1;function HS(t){cr===null?cr=[t]:cr.push(t)}function YA(t){Lf=!0,HS(t)}function ws(){if(!Td&&cr!==null){Td=!0;var t=0,e=it;try{var n=cr;for(it=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}cr=null,Lf=!1}catch(r){throw cr!==null&&(cr=cr.slice(t+1)),hS(ig,ws),r}finally{it=e,Td=!1}}return null}var Xo=[],Yo=0,Yc=null,qc=0,di=[],hi=0,so=null,dr=1,hr="";function Fs(t,e){Xo[Yo++]=qc,Xo[Yo++]=Yc,Yc=t,qc=e}function GS(t,e,n){di[hi++]=dr,di[hi++]=hr,di[hi++]=so,so=t;var i=dr;t=hr;var r=32-bi(i)-1;i&=~(1<<r),n+=1;var s=32-bi(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,dr=1<<32-bi(e)+r|n<<r|i,hr=s+t}else dr=1<<s|n<<r|i,hr=t}function dg(t){t.return!==null&&(Fs(t,1),GS(t,1,0))}function hg(t){for(;t===Yc;)Yc=Xo[--Yo],Xo[Yo]=null,qc=Xo[--Yo],Xo[Yo]=null;for(;t===so;)so=di[--hi],di[hi]=null,hr=di[--hi],di[hi]=null,dr=di[--hi],di[hi]=null}var Jn=null,jn=null,gt=!1,Ai=null;function WS(t,e){var n=pi(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function N_(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Jn=t,jn=os(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Jn=t,jn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=so!==null?{id:dr,overflow:hr}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=pi(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Jn=t,jn=null,!0):!1;default:return!1}}function up(t){return(t.mode&1)!==0&&(t.flags&128)===0}function cp(t){if(gt){var e=jn;if(e){var n=e;if(!N_(t,e)){if(up(t))throw Error(ie(418));e=os(n.nextSibling);var i=Jn;e&&N_(t,e)?WS(i,n):(t.flags=t.flags&-4097|2,gt=!1,Jn=t)}}else{if(up(t))throw Error(ie(418));t.flags=t.flags&-4097|2,gt=!1,Jn=t}}}function U_(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Jn=t}function Du(t){if(t!==Jn)return!1;if(!gt)return U_(t),gt=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!sp(t.type,t.memoizedProps)),e&&(e=jn)){if(up(t))throw XS(),Error(ie(418));for(;e;)WS(t,e),e=os(e.nextSibling)}if(U_(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(ie(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){jn=os(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}jn=null}}else jn=Jn?os(t.stateNode.nextSibling):null;return!0}function XS(){for(var t=jn;t;)t=os(t.nextSibling)}function ga(){jn=Jn=null,gt=!1}function pg(t){Ai===null?Ai=[t]:Ai.push(t)}var qA=Dr.ReactCurrentBatchConfig;function Ha(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(ie(309));var i=n.stateNode}if(!i)throw Error(ie(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(ie(284));if(!n._owner)throw Error(ie(290,t))}return t}function Lu(t,e){throw t=Object.prototype.toString.call(e),Error(ie(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function F_(t){var e=t._init;return e(t._payload)}function YS(t){function e(p,v){if(t){var x=p.deletions;x===null?(p.deletions=[v],p.flags|=16):x.push(v)}}function n(p,v){if(!t)return null;for(;v!==null;)e(p,v),v=v.sibling;return null}function i(p,v){for(p=new Map;v!==null;)v.key!==null?p.set(v.key,v):p.set(v.index,v),v=v.sibling;return p}function r(p,v){return p=cs(p,v),p.index=0,p.sibling=null,p}function s(p,v,x){return p.index=x,t?(x=p.alternate,x!==null?(x=x.index,x<v?(p.flags|=2,v):x):(p.flags|=2,v)):(p.flags|=1048576,v)}function o(p){return t&&p.alternate===null&&(p.flags|=2),p}function a(p,v,x,S){return v===null||v.tag!==6?(v=Dd(x,p.mode,S),v.return=p,v):(v=r(v,x),v.return=p,v)}function l(p,v,x,S){var E=x.type;return E===Bo?c(p,v,x.props.children,S,x.key):v!==null&&(v.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===Xr&&F_(E)===v.type)?(S=r(v,x.props),S.ref=Ha(p,v,x),S.return=p,S):(S=Ec(x.type,x.key,x.props,null,p.mode,S),S.ref=Ha(p,v,x),S.return=p,S)}function u(p,v,x,S){return v===null||v.tag!==4||v.stateNode.containerInfo!==x.containerInfo||v.stateNode.implementation!==x.implementation?(v=Ld(x,p.mode,S),v.return=p,v):(v=r(v,x.children||[]),v.return=p,v)}function c(p,v,x,S,E){return v===null||v.tag!==7?(v=Js(x,p.mode,S,E),v.return=p,v):(v=r(v,x),v.return=p,v)}function f(p,v,x){if(typeof v=="string"&&v!==""||typeof v=="number")return v=Dd(""+v,p.mode,x),v.return=p,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Su:return x=Ec(v.type,v.key,v.props,null,p.mode,x),x.ref=Ha(p,null,v),x.return=p,x;case ko:return v=Ld(v,p.mode,x),v.return=p,v;case Xr:var S=v._init;return f(p,S(v._payload),x)}if(nl(v)||Oa(v))return v=Js(v,p.mode,x,null),v.return=p,v;Lu(p,v)}return null}function d(p,v,x,S){var E=v!==null?v.key:null;if(typeof x=="string"&&x!==""||typeof x=="number")return E!==null?null:a(p,v,""+x,S);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Su:return x.key===E?l(p,v,x,S):null;case ko:return x.key===E?u(p,v,x,S):null;case Xr:return E=x._init,d(p,v,E(x._payload),S)}if(nl(x)||Oa(x))return E!==null?null:c(p,v,x,S,null);Lu(p,x)}return null}function h(p,v,x,S,E){if(typeof S=="string"&&S!==""||typeof S=="number")return p=p.get(x)||null,a(v,p,""+S,E);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case Su:return p=p.get(S.key===null?x:S.key)||null,l(v,p,S,E);case ko:return p=p.get(S.key===null?x:S.key)||null,u(v,p,S,E);case Xr:var T=S._init;return h(p,v,x,T(S._payload),E)}if(nl(S)||Oa(S))return p=p.get(x)||null,c(v,p,S,E,null);Lu(v,S)}return null}function m(p,v,x,S){for(var E=null,T=null,A=v,y=v=0,w=null;A!==null&&y<x.length;y++){A.index>y?(w=A,A=null):w=A.sibling;var b=d(p,A,x[y],S);if(b===null){A===null&&(A=w);break}t&&A&&b.alternate===null&&e(p,A),v=s(b,v,y),T===null?E=b:T.sibling=b,T=b,A=w}if(y===x.length)return n(p,A),gt&&Fs(p,y),E;if(A===null){for(;y<x.length;y++)A=f(p,x[y],S),A!==null&&(v=s(A,v,y),T===null?E=A:T.sibling=A,T=A);return gt&&Fs(p,y),E}for(A=i(p,A);y<x.length;y++)w=h(A,p,y,x[y],S),w!==null&&(t&&w.alternate!==null&&A.delete(w.key===null?y:w.key),v=s(w,v,y),T===null?E=w:T.sibling=w,T=w);return t&&A.forEach(function(P){return e(p,P)}),gt&&Fs(p,y),E}function g(p,v,x,S){var E=Oa(x);if(typeof E!="function")throw Error(ie(150));if(x=E.call(x),x==null)throw Error(ie(151));for(var T=E=null,A=v,y=v=0,w=null,b=x.next();A!==null&&!b.done;y++,b=x.next()){A.index>y?(w=A,A=null):w=A.sibling;var P=d(p,A,b.value,S);if(P===null){A===null&&(A=w);break}t&&A&&P.alternate===null&&e(p,A),v=s(P,v,y),T===null?E=P:T.sibling=P,T=P,A=w}if(b.done)return n(p,A),gt&&Fs(p,y),E;if(A===null){for(;!b.done;y++,b=x.next())b=f(p,b.value,S),b!==null&&(v=s(b,v,y),T===null?E=b:T.sibling=b,T=b);return gt&&Fs(p,y),E}for(A=i(p,A);!b.done;y++,b=x.next())b=h(A,p,y,b.value,S),b!==null&&(t&&b.alternate!==null&&A.delete(b.key===null?y:b.key),v=s(b,v,y),T===null?E=b:T.sibling=b,T=b);return t&&A.forEach(function(D){return e(p,D)}),gt&&Fs(p,y),E}function _(p,v,x,S){if(typeof x=="object"&&x!==null&&x.type===Bo&&x.key===null&&(x=x.props.children),typeof x=="object"&&x!==null){switch(x.$$typeof){case Su:e:{for(var E=x.key,T=v;T!==null;){if(T.key===E){if(E=x.type,E===Bo){if(T.tag===7){n(p,T.sibling),v=r(T,x.props.children),v.return=p,p=v;break e}}else if(T.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===Xr&&F_(E)===T.type){n(p,T.sibling),v=r(T,x.props),v.ref=Ha(p,T,x),v.return=p,p=v;break e}n(p,T);break}else e(p,T);T=T.sibling}x.type===Bo?(v=Js(x.props.children,p.mode,S,x.key),v.return=p,p=v):(S=Ec(x.type,x.key,x.props,null,p.mode,S),S.ref=Ha(p,v,x),S.return=p,p=S)}return o(p);case ko:e:{for(T=x.key;v!==null;){if(v.key===T)if(v.tag===4&&v.stateNode.containerInfo===x.containerInfo&&v.stateNode.implementation===x.implementation){n(p,v.sibling),v=r(v,x.children||[]),v.return=p,p=v;break e}else{n(p,v);break}else e(p,v);v=v.sibling}v=Ld(x,p.mode,S),v.return=p,p=v}return o(p);case Xr:return T=x._init,_(p,v,T(x._payload),S)}if(nl(x))return m(p,v,x,S);if(Oa(x))return g(p,v,x,S);Lu(p,x)}return typeof x=="string"&&x!==""||typeof x=="number"?(x=""+x,v!==null&&v.tag===6?(n(p,v.sibling),v=r(v,x),v.return=p,p=v):(n(p,v),v=Dd(x,p.mode,S),v.return=p,p=v),o(p)):n(p,v)}return _}var _a=YS(!0),qS=YS(!1),$c=Ts(null),Kc=null,qo=null,mg=null;function gg(){mg=qo=Kc=null}function _g(t){var e=$c.current;mt($c),t._currentValue=e}function fp(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function oa(t,e){Kc=t,mg=qo=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(bn=!0),t.firstContext=null)}function vi(t){var e=t._currentValue;if(mg!==t)if(t={context:t,memoizedValue:e,next:null},qo===null){if(Kc===null)throw Error(ie(308));qo=t,Kc.dependencies={lanes:0,firstContext:t}}else qo=qo.next=t;return e}var Ys=null;function vg(t){Ys===null?Ys=[t]:Ys.push(t)}function $S(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,vg(e)):(n.next=r.next,r.next=n),e.interleaved=n,Tr(t,i)}function Tr(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Yr=!1;function xg(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function KS(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function gr(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function as(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,Qe&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Tr(t,n)}return r=i.interleaved,r===null?(e.next=e,vg(i)):(e.next=r.next,r.next=e),i.interleaved=e,Tr(t,n)}function _c(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,rg(t,n)}}function O_(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function jc(t,e,n,i){var r=t.updateQueue;Yr=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var c=t.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(s!==null){var f=r.baseState;o=0,c=u=l=null,a=s;do{var d=a.lane,h=a.eventTime;if((i&d)===d){c!==null&&(c=c.next={eventTime:h,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var m=t,g=a;switch(d=e,h=n,g.tag){case 1:if(m=g.payload,typeof m=="function"){f=m.call(h,f,d);break e}f=m;break e;case 3:m.flags=m.flags&-65537|128;case 0:if(m=g.payload,d=typeof m=="function"?m.call(h,f,d):m,d==null)break e;f=wt({},f,d);break e;case 2:Yr=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,d=r.effects,d===null?r.effects=[a]:d.push(a))}else h={eventTime:h,lane:d,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=h,l=f):c=c.next=h,o|=d;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;d=a,a=d.next,d.next=null,r.lastBaseUpdate=d,r.shared.pending=null}}while(1);if(c===null&&(l=f),r.baseState=l,r.firstBaseUpdate=u,r.lastBaseUpdate=c,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);ao|=o,t.lanes=o,t.memoizedState=f}}function k_(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(ie(191,r));r.call(i)}}}var lu={},Ki=Ts(lu),Ol=Ts(lu),kl=Ts(lu);function qs(t){if(t===lu)throw Error(ie(174));return t}function yg(t,e){switch(dt(kl,e),dt(Ol,t),dt(Ki,lu),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Xh(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Xh(e,t)}mt(Ki),dt(Ki,e)}function va(){mt(Ki),mt(Ol),mt(kl)}function jS(t){qs(kl.current);var e=qs(Ki.current),n=Xh(e,t.type);e!==n&&(dt(Ol,t),dt(Ki,n))}function Sg(t){Ol.current===t&&(mt(Ki),mt(Ol))}var xt=Ts(0);function Zc(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var wd=[];function Mg(){for(var t=0;t<wd.length;t++)wd[t]._workInProgressVersionPrimary=null;wd.length=0}var vc=Dr.ReactCurrentDispatcher,Ad=Dr.ReactCurrentBatchConfig,oo=0,Tt=null,Xt=null,Zt=null,Qc=!1,ml=!1,Bl=0,$A=0;function ln(){throw Error(ie(321))}function Eg(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Di(t[n],e[n]))return!1;return!0}function Tg(t,e,n,i,r,s){if(oo=s,Tt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,vc.current=t===null||t.memoizedState===null?QA:JA,t=n(i,r),ml){s=0;do{if(ml=!1,Bl=0,25<=s)throw Error(ie(301));s+=1,Zt=Xt=null,e.updateQueue=null,vc.current=eC,t=n(i,r)}while(ml)}if(vc.current=Jc,e=Xt!==null&&Xt.next!==null,oo=0,Zt=Xt=Tt=null,Qc=!1,e)throw Error(ie(300));return t}function wg(){var t=Bl!==0;return Bl=0,t}function Bi(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Zt===null?Tt.memoizedState=Zt=t:Zt=Zt.next=t,Zt}function xi(){if(Xt===null){var t=Tt.alternate;t=t!==null?t.memoizedState:null}else t=Xt.next;var e=Zt===null?Tt.memoizedState:Zt.next;if(e!==null)Zt=e,Xt=t;else{if(t===null)throw Error(ie(310));Xt=t,t={memoizedState:Xt.memoizedState,baseState:Xt.baseState,baseQueue:Xt.baseQueue,queue:Xt.queue,next:null},Zt===null?Tt.memoizedState=Zt=t:Zt=Zt.next=t}return Zt}function zl(t,e){return typeof e=="function"?e(t):e}function Cd(t){var e=xi(),n=e.queue;if(n===null)throw Error(ie(311));n.lastRenderedReducer=t;var i=Xt,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,u=s;do{var c=u.lane;if((oo&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),i=u.hasEagerState?u.eagerState:t(i,u.action);else{var f={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=f,o=i):l=l.next=f,Tt.lanes|=c,ao|=c}u=u.next}while(u!==null&&u!==s);l===null?o=i:l.next=a,Di(i,e.memoizedState)||(bn=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,Tt.lanes|=s,ao|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Rd(t){var e=xi(),n=e.queue;if(n===null)throw Error(ie(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var o=r=r.next;do s=t(s,o.action),o=o.next;while(o!==r);Di(s,e.memoizedState)||(bn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function ZS(){}function QS(t,e){var n=Tt,i=xi(),r=e(),s=!Di(i.memoizedState,r);if(s&&(i.memoizedState=r,bn=!0),i=i.queue,Ag(tM.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||Zt!==null&&Zt.memoizedState.tag&1){if(n.flags|=2048,Vl(9,eM.bind(null,n,i,r,e),void 0,null),Qt===null)throw Error(ie(349));oo&30||JS(n,e,r)}return r}function JS(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Tt.updateQueue,e===null?(e={lastEffect:null,stores:null},Tt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function eM(t,e,n,i){e.value=n,e.getSnapshot=i,nM(e)&&iM(t)}function tM(t,e,n){return n(function(){nM(e)&&iM(t)})}function nM(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Di(t,n)}catch{return!0}}function iM(t){var e=Tr(t,1);e!==null&&Pi(e,t,1,-1)}function B_(t){var e=Bi();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:zl,lastRenderedState:t},e.queue=t,t=t.dispatch=ZA.bind(null,Tt,t),[e.memoizedState,t]}function Vl(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=Tt.updateQueue,e===null?(e={lastEffect:null,stores:null},Tt.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function rM(){return xi().memoizedState}function xc(t,e,n,i){var r=Bi();Tt.flags|=t,r.memoizedState=Vl(1|e,n,void 0,i===void 0?null:i)}function If(t,e,n,i){var r=xi();i=i===void 0?null:i;var s=void 0;if(Xt!==null){var o=Xt.memoizedState;if(s=o.destroy,i!==null&&Eg(i,o.deps)){r.memoizedState=Vl(e,n,s,i);return}}Tt.flags|=t,r.memoizedState=Vl(1|e,n,s,i)}function z_(t,e){return xc(8390656,8,t,e)}function Ag(t,e){return If(2048,8,t,e)}function sM(t,e){return If(4,2,t,e)}function oM(t,e){return If(4,4,t,e)}function aM(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function lM(t,e,n){return n=n!=null?n.concat([t]):null,If(4,4,aM.bind(null,e,t),n)}function Cg(){}function uM(t,e){var n=xi();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Eg(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function cM(t,e){var n=xi();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Eg(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function fM(t,e,n){return oo&21?(Di(n,e)||(n=gS(),Tt.lanes|=n,ao|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,bn=!0),t.memoizedState=n)}function KA(t,e){var n=it;it=n!==0&&4>n?n:4,t(!0);var i=Ad.transition;Ad.transition={};try{t(!1),e()}finally{it=n,Ad.transition=i}}function dM(){return xi().memoizedState}function jA(t,e,n){var i=us(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},hM(t))pM(e,n);else if(n=$S(t,e,n,i),n!==null){var r=Mn();Pi(n,t,i,r),mM(n,e,i)}}function ZA(t,e,n){var i=us(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(hM(t))pM(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(r.hasEagerState=!0,r.eagerState=a,Di(a,o)){var l=e.interleaved;l===null?(r.next=r,vg(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=$S(t,e,r,i),n!==null&&(r=Mn(),Pi(n,t,i,r),mM(n,e,i))}}function hM(t){var e=t.alternate;return t===Tt||e!==null&&e===Tt}function pM(t,e){ml=Qc=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function mM(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,rg(t,n)}}var Jc={readContext:vi,useCallback:ln,useContext:ln,useEffect:ln,useImperativeHandle:ln,useInsertionEffect:ln,useLayoutEffect:ln,useMemo:ln,useReducer:ln,useRef:ln,useState:ln,useDebugValue:ln,useDeferredValue:ln,useTransition:ln,useMutableSource:ln,useSyncExternalStore:ln,useId:ln,unstable_isNewReconciler:!1},QA={readContext:vi,useCallback:function(t,e){return Bi().memoizedState=[t,e===void 0?null:e],t},useContext:vi,useEffect:z_,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,xc(4194308,4,aM.bind(null,e,t),n)},useLayoutEffect:function(t,e){return xc(4194308,4,t,e)},useInsertionEffect:function(t,e){return xc(4,2,t,e)},useMemo:function(t,e){var n=Bi();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=Bi();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=jA.bind(null,Tt,t),[i.memoizedState,t]},useRef:function(t){var e=Bi();return t={current:t},e.memoizedState=t},useState:B_,useDebugValue:Cg,useDeferredValue:function(t){return Bi().memoizedState=t},useTransition:function(){var t=B_(!1),e=t[0];return t=KA.bind(null,t[1]),Bi().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=Tt,r=Bi();if(gt){if(n===void 0)throw Error(ie(407));n=n()}else{if(n=e(),Qt===null)throw Error(ie(349));oo&30||JS(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,z_(tM.bind(null,i,s,t),[t]),i.flags|=2048,Vl(9,eM.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=Bi(),e=Qt.identifierPrefix;if(gt){var n=hr,i=dr;n=(i&~(1<<32-bi(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=Bl++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=$A++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},JA={readContext:vi,useCallback:uM,useContext:vi,useEffect:Ag,useImperativeHandle:lM,useInsertionEffect:sM,useLayoutEffect:oM,useMemo:cM,useReducer:Cd,useRef:rM,useState:function(){return Cd(zl)},useDebugValue:Cg,useDeferredValue:function(t){var e=xi();return fM(e,Xt.memoizedState,t)},useTransition:function(){var t=Cd(zl)[0],e=xi().memoizedState;return[t,e]},useMutableSource:ZS,useSyncExternalStore:QS,useId:dM,unstable_isNewReconciler:!1},eC={readContext:vi,useCallback:uM,useContext:vi,useEffect:Ag,useImperativeHandle:lM,useInsertionEffect:sM,useLayoutEffect:oM,useMemo:cM,useReducer:Rd,useRef:rM,useState:function(){return Rd(zl)},useDebugValue:Cg,useDeferredValue:function(t){var e=xi();return Xt===null?e.memoizedState=t:fM(e,Xt.memoizedState,t)},useTransition:function(){var t=Rd(zl)[0],e=xi().memoizedState;return[t,e]},useMutableSource:ZS,useSyncExternalStore:QS,useId:dM,unstable_isNewReconciler:!1};function Ti(t,e){if(t&&t.defaultProps){e=wt({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function dp(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:wt({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Nf={isMounted:function(t){return(t=t._reactInternals)?po(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=Mn(),r=us(t),s=gr(i,r);s.payload=e,n!=null&&(s.callback=n),e=as(t,s,r),e!==null&&(Pi(e,t,r,i),_c(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=Mn(),r=us(t),s=gr(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=as(t,s,r),e!==null&&(Pi(e,t,r,i),_c(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Mn(),i=us(t),r=gr(n,i);r.tag=2,e!=null&&(r.callback=e),e=as(t,r,i),e!==null&&(Pi(e,t,i,n),_c(e,t,i))}};function V_(t,e,n,i,r,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!Il(n,i)||!Il(r,s):!0}function gM(t,e,n){var i=!1,r=gs,s=e.contextType;return typeof s=="object"&&s!==null?s=vi(s):(r=Dn(e)?ro:vn.current,i=e.contextTypes,s=(i=i!=null)?ma(t,r):gs),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Nf,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function H_(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&Nf.enqueueReplaceState(e,e.state,null)}function hp(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},xg(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=vi(s):(s=Dn(e)?ro:vn.current,r.context=ma(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(dp(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&Nf.enqueueReplaceState(r,r.state,null),jc(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function xa(t,e){try{var n="",i=e;do n+=Rw(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function bd(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function pp(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var tC=typeof WeakMap=="function"?WeakMap:Map;function _M(t,e,n){n=gr(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){tf||(tf=!0,Tp=i),pp(t,e)},n}function vM(t,e,n){n=gr(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){pp(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){pp(t,e),typeof i!="function"&&(ls===null?ls=new Set([this]):ls.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function G_(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new tC;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=mC.bind(null,t,e,n),e.then(t,t))}function W_(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function X_(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=gr(-1,1),e.tag=2,as(n,e,1))),n.lanes|=1),t)}var nC=Dr.ReactCurrentOwner,bn=!1;function Sn(t,e,n,i){e.child=t===null?qS(e,null,n,i):_a(e,t.child,n,i)}function Y_(t,e,n,i,r){n=n.render;var s=e.ref;return oa(e,r),i=Tg(t,e,n,i,s,r),n=wg(),t!==null&&!bn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,wr(t,e,r)):(gt&&n&&dg(e),e.flags|=1,Sn(t,e,i,r),e.child)}function q_(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!Ug(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,xM(t,e,s,i,r)):(t=Ec(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Il,n(o,i)&&t.ref===e.ref)return wr(t,e,r)}return e.flags|=1,t=cs(s,i),t.ref=e.ref,t.return=e,e.child=t}function xM(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(Il(s,i)&&t.ref===e.ref)if(bn=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(bn=!0);else return e.lanes=t.lanes,wr(t,e,r)}return mp(t,e,n,i,r)}function yM(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},dt(Ko,Wn),Wn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,dt(Ko,Wn),Wn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,dt(Ko,Wn),Wn|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,dt(Ko,Wn),Wn|=i;return Sn(t,e,r,n),e.child}function SM(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function mp(t,e,n,i,r){var s=Dn(n)?ro:vn.current;return s=ma(e,s),oa(e,r),n=Tg(t,e,n,i,s,r),i=wg(),t!==null&&!bn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,wr(t,e,r)):(gt&&i&&dg(e),e.flags|=1,Sn(t,e,n,r),e.child)}function $_(t,e,n,i,r){if(Dn(n)){var s=!0;Xc(e)}else s=!1;if(oa(e,r),e.stateNode===null)yc(t,e),gM(e,n,i),hp(e,n,i,r),i=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=vi(u):(u=Dn(n)?ro:vn.current,u=ma(e,u));var c=n.getDerivedStateFromProps,f=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";f||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==u)&&H_(e,o,i,u),Yr=!1;var d=e.memoizedState;o.state=d,jc(e,i,o,r),l=e.memoizedState,a!==i||d!==l||Pn.current||Yr?(typeof c=="function"&&(dp(e,n,c,i),l=e.memoizedState),(a=Yr||V_(e,n,a,i,d,l,u))?(f||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=u,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,KS(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:Ti(e.type,a),o.props=u,f=e.pendingProps,d=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=vi(l):(l=Dn(n)?ro:vn.current,l=ma(e,l));var h=n.getDerivedStateFromProps;(c=typeof h=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==f||d!==l)&&H_(e,o,i,l),Yr=!1,d=e.memoizedState,o.state=d,jc(e,i,o,r);var m=e.memoizedState;a!==f||d!==m||Pn.current||Yr?(typeof h=="function"&&(dp(e,n,h,i),m=e.memoizedState),(u=Yr||V_(e,n,u,i,d,m,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,m,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,m,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=m),o.props=i,o.state=m,o.context=l,i=u):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),i=!1)}return gp(t,e,n,i,s,r)}function gp(t,e,n,i,r,s){SM(t,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&I_(e,n,!1),wr(t,e,s);i=e.stateNode,nC.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&o?(e.child=_a(e,t.child,null,s),e.child=_a(e,null,a,s)):Sn(t,e,a,s),e.memoizedState=i.state,r&&I_(e,n,!0),e.child}function MM(t){var e=t.stateNode;e.pendingContext?L_(t,e.pendingContext,e.pendingContext!==e.context):e.context&&L_(t,e.context,!1),yg(t,e.containerInfo)}function K_(t,e,n,i,r){return ga(),pg(r),e.flags|=256,Sn(t,e,n,i),e.child}var _p={dehydrated:null,treeContext:null,retryLane:0};function vp(t){return{baseLanes:t,cachePool:null,transitions:null}}function EM(t,e,n){var i=e.pendingProps,r=xt.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),dt(xt,r&1),t===null)return cp(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,t=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Of(o,i,0,null),t=Js(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=vp(n),e.memoizedState=_p,t):Rg(e,o));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return iC(t,e,o,i,a,r,n);if(s){s=i.fallback,o=e.mode,r=t.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=cs(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=cs(a,s):(s=Js(s,o,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=t.child.memoizedState,o=o===null?vp(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=_p,i}return s=t.child,t=s.sibling,i=cs(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function Rg(t,e){return e=Of({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Iu(t,e,n,i){return i!==null&&pg(i),_a(e,t.child,null,n),t=Rg(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function iC(t,e,n,i,r,s,o){if(n)return e.flags&256?(e.flags&=-257,i=bd(Error(ie(422))),Iu(t,e,o,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=Of({mode:"visible",children:i.children},r,0,null),s=Js(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&_a(e,t.child,null,o),e.child.memoizedState=vp(o),e.memoizedState=_p,s);if(!(e.mode&1))return Iu(t,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(ie(419)),i=bd(s,i,void 0),Iu(t,e,o,i)}if(a=(o&t.childLanes)!==0,bn||a){if(i=Qt,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,Tr(t,r),Pi(i,t,r,-1))}return Ng(),i=bd(Error(ie(421))),Iu(t,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=gC.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,jn=os(r.nextSibling),Jn=e,gt=!0,Ai=null,t!==null&&(di[hi++]=dr,di[hi++]=hr,di[hi++]=so,dr=t.id,hr=t.overflow,so=e),e=Rg(e,i.children),e.flags|=4096,e)}function j_(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),fp(t.return,e,n)}function Pd(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function TM(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(Sn(t,e,i.children,n),i=xt.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&j_(t,n,e);else if(t.tag===19)j_(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(dt(xt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&Zc(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),Pd(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&Zc(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}Pd(e,!0,n,null,s);break;case"together":Pd(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function yc(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function wr(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),ao|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(ie(153));if(e.child!==null){for(t=e.child,n=cs(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=cs(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function rC(t,e,n){switch(e.tag){case 3:MM(e),ga();break;case 5:jS(e);break;case 1:Dn(e.type)&&Xc(e);break;case 4:yg(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;dt($c,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(dt(xt,xt.current&1),e.flags|=128,null):n&e.child.childLanes?EM(t,e,n):(dt(xt,xt.current&1),t=wr(t,e,n),t!==null?t.sibling:null);dt(xt,xt.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return TM(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),dt(xt,xt.current),i)break;return null;case 22:case 23:return e.lanes=0,yM(t,e,n)}return wr(t,e,n)}var wM,xp,AM,CM;wM=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};xp=function(){};AM=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,qs(Ki.current);var s=null;switch(n){case"input":r=Vh(t,r),i=Vh(t,i),s=[];break;case"select":r=wt({},r,{value:void 0}),i=wt({},i,{value:void 0}),s=[];break;case"textarea":r=Wh(t,r),i=Wh(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=Gc)}Yh(n,i);var o;n=null;for(u in r)if(!i.hasOwnProperty(u)&&r.hasOwnProperty(u)&&r[u]!=null)if(u==="style"){var a=r[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Al.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in i){var l=i[u];if(a=r!=null?r[u]:void 0,i.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Al.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&pt("scroll",t),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};CM=function(t,e,n,i){n!==i&&(e.flags|=4)};function Ga(t,e){if(!gt)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function un(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function sC(t,e,n){var i=e.pendingProps;switch(hg(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return un(e),null;case 1:return Dn(e.type)&&Wc(),un(e),null;case 3:return i=e.stateNode,va(),mt(Pn),mt(vn),Mg(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(Du(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Ai!==null&&(Cp(Ai),Ai=null))),xp(t,e),un(e),null;case 5:Sg(e);var r=qs(kl.current);if(n=e.type,t!==null&&e.stateNode!=null)AM(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(ie(166));return un(e),null}if(t=qs(Ki.current),Du(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[Hi]=e,i[Fl]=s,t=(e.mode&1)!==0,n){case"dialog":pt("cancel",i),pt("close",i);break;case"iframe":case"object":case"embed":pt("load",i);break;case"video":case"audio":for(r=0;r<rl.length;r++)pt(rl[r],i);break;case"source":pt("error",i);break;case"img":case"image":case"link":pt("error",i),pt("load",i);break;case"details":pt("toggle",i);break;case"input":s_(i,s),pt("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},pt("invalid",i);break;case"textarea":a_(i,s),pt("invalid",i)}Yh(n,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&Pu(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Pu(i.textContent,a,t),r=["children",""+a]):Al.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&pt("scroll",i)}switch(n){case"input":Mu(i),o_(i,s,!0);break;case"textarea":Mu(i),l_(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=Gc)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=tS(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=o.createElement(n,{is:i.is}):(t=o.createElement(n),n==="select"&&(o=t,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):t=o.createElementNS(t,n),t[Hi]=e,t[Fl]=i,wM(t,e,!1,!1),e.stateNode=t;e:{switch(o=qh(n,i),n){case"dialog":pt("cancel",t),pt("close",t),r=i;break;case"iframe":case"object":case"embed":pt("load",t),r=i;break;case"video":case"audio":for(r=0;r<rl.length;r++)pt(rl[r],t);r=i;break;case"source":pt("error",t),r=i;break;case"img":case"image":case"link":pt("error",t),pt("load",t),r=i;break;case"details":pt("toggle",t),r=i;break;case"input":s_(t,i),r=Vh(t,i),pt("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=wt({},i,{value:void 0}),pt("invalid",t);break;case"textarea":a_(t,i),r=Wh(t,i),pt("invalid",t);break;default:r=i}Yh(n,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?rS(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&nS(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Cl(t,l):typeof l=="number"&&Cl(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Al.hasOwnProperty(s)?l!=null&&s==="onScroll"&&pt("scroll",t):l!=null&&Qm(t,s,l,o))}switch(n){case"input":Mu(t),o_(t,i,!1);break;case"textarea":Mu(t),l_(t);break;case"option":i.value!=null&&t.setAttribute("value",""+ms(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?na(t,!!i.multiple,s,!1):i.defaultValue!=null&&na(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=Gc)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return un(e),null;case 6:if(t&&e.stateNode!=null)CM(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(ie(166));if(n=qs(kl.current),qs(Ki.current),Du(e)){if(i=e.stateNode,n=e.memoizedProps,i[Hi]=e,(s=i.nodeValue!==n)&&(t=Jn,t!==null))switch(t.tag){case 3:Pu(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Pu(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[Hi]=e,e.stateNode=i}return un(e),null;case 13:if(mt(xt),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(gt&&jn!==null&&e.mode&1&&!(e.flags&128))XS(),ga(),e.flags|=98560,s=!1;else if(s=Du(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(ie(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(ie(317));s[Hi]=e}else ga(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;un(e),s=!1}else Ai!==null&&(Cp(Ai),Ai=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||xt.current&1?Yt===0&&(Yt=3):Ng())),e.updateQueue!==null&&(e.flags|=4),un(e),null);case 4:return va(),xp(t,e),t===null&&Nl(e.stateNode.containerInfo),un(e),null;case 10:return _g(e.type._context),un(e),null;case 17:return Dn(e.type)&&Wc(),un(e),null;case 19:if(mt(xt),s=e.memoizedState,s===null)return un(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)Ga(s,!1);else{if(Yt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Zc(t),o!==null){for(e.flags|=128,Ga(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return dt(xt,xt.current&1|2),e.child}t=t.sibling}s.tail!==null&&Ot()>ya&&(e.flags|=128,i=!0,Ga(s,!1),e.lanes=4194304)}else{if(!i)if(t=Zc(o),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Ga(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!gt)return un(e),null}else 2*Ot()-s.renderingStartTime>ya&&n!==1073741824&&(e.flags|=128,i=!0,Ga(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Ot(),e.sibling=null,n=xt.current,dt(xt,i?n&1|2:n&1),e):(un(e),null);case 22:case 23:return Ig(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?Wn&1073741824&&(un(e),e.subtreeFlags&6&&(e.flags|=8192)):un(e),null;case 24:return null;case 25:return null}throw Error(ie(156,e.tag))}function oC(t,e){switch(hg(e),e.tag){case 1:return Dn(e.type)&&Wc(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return va(),mt(Pn),mt(vn),Mg(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Sg(e),null;case 13:if(mt(xt),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(ie(340));ga()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return mt(xt),null;case 4:return va(),null;case 10:return _g(e.type._context),null;case 22:case 23:return Ig(),null;case 24:return null;default:return null}}var Nu=!1,hn=!1,aC=typeof WeakSet=="function"?WeakSet:Set,ye=null;function $o(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){Pt(t,e,i)}else n.current=null}function yp(t,e,n){try{n()}catch(i){Pt(t,e,i)}}var Z_=!1;function lC(t,e){if(ip=zc,t=LS(),fg(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,c=0,f=t,d=null;t:for(;;){for(var h;f!==n||r!==0&&f.nodeType!==3||(a=o+r),f!==s||i!==0&&f.nodeType!==3||(l=o+i),f.nodeType===3&&(o+=f.nodeValue.length),(h=f.firstChild)!==null;)d=f,f=h;for(;;){if(f===t)break t;if(d===n&&++u===r&&(a=o),d===s&&++c===i&&(l=o),(h=f.nextSibling)!==null)break;f=d,d=f.parentNode}f=h}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(rp={focusedElem:t,selectionRange:n},zc=!1,ye=e;ye!==null;)if(e=ye,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,ye=t;else for(;ye!==null;){e=ye;try{var m=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(m!==null){var g=m.memoizedProps,_=m.memoizedState,p=e.stateNode,v=p.getSnapshotBeforeUpdate(e.elementType===e.type?g:Ti(e.type,g),_);p.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var x=e.stateNode.containerInfo;x.nodeType===1?x.textContent="":x.nodeType===9&&x.documentElement&&x.removeChild(x.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(ie(163))}}catch(S){Pt(e,e.return,S)}if(t=e.sibling,t!==null){t.return=e.return,ye=t;break}ye=e.return}return m=Z_,Z_=!1,m}function gl(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&yp(e,n,s)}r=r.next}while(r!==i)}}function Uf(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function Sp(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function RM(t){var e=t.alternate;e!==null&&(t.alternate=null,RM(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Hi],delete e[Fl],delete e[ap],delete e[WA],delete e[XA])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function bM(t){return t.tag===5||t.tag===3||t.tag===4}function Q_(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||bM(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Mp(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Gc));else if(i!==4&&(t=t.child,t!==null))for(Mp(t,e,n),t=t.sibling;t!==null;)Mp(t,e,n),t=t.sibling}function Ep(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(Ep(t,e,n),t=t.sibling;t!==null;)Ep(t,e,n),t=t.sibling}var tn=null,wi=!1;function Fr(t,e,n){for(n=n.child;n!==null;)PM(t,e,n),n=n.sibling}function PM(t,e,n){if($i&&typeof $i.onCommitFiberUnmount=="function")try{$i.onCommitFiberUnmount(Cf,n)}catch{}switch(n.tag){case 5:hn||$o(n,e);case 6:var i=tn,r=wi;tn=null,Fr(t,e,n),tn=i,wi=r,tn!==null&&(wi?(t=tn,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):tn.removeChild(n.stateNode));break;case 18:tn!==null&&(wi?(t=tn,n=n.stateNode,t.nodeType===8?Ed(t.parentNode,n):t.nodeType===1&&Ed(t,n),Dl(t)):Ed(tn,n.stateNode));break;case 4:i=tn,r=wi,tn=n.stateNode.containerInfo,wi=!0,Fr(t,e,n),tn=i,wi=r;break;case 0:case 11:case 14:case 15:if(!hn&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&yp(n,e,o),r=r.next}while(r!==i)}Fr(t,e,n);break;case 1:if(!hn&&($o(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){Pt(n,e,a)}Fr(t,e,n);break;case 21:Fr(t,e,n);break;case 22:n.mode&1?(hn=(i=hn)||n.memoizedState!==null,Fr(t,e,n),hn=i):Fr(t,e,n);break;default:Fr(t,e,n)}}function J_(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new aC),e.forEach(function(i){var r=_C.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function yi(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:tn=a.stateNode,wi=!1;break e;case 3:tn=a.stateNode.containerInfo,wi=!0;break e;case 4:tn=a.stateNode.containerInfo,wi=!0;break e}a=a.return}if(tn===null)throw Error(ie(160));PM(s,o,r),tn=null,wi=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(u){Pt(r,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)DM(e,t),e=e.sibling}function DM(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(yi(e,t),Fi(t),i&4){try{gl(3,t,t.return),Uf(3,t)}catch(g){Pt(t,t.return,g)}try{gl(5,t,t.return)}catch(g){Pt(t,t.return,g)}}break;case 1:yi(e,t),Fi(t),i&512&&n!==null&&$o(n,n.return);break;case 5:if(yi(e,t),Fi(t),i&512&&n!==null&&$o(n,n.return),t.flags&32){var r=t.stateNode;try{Cl(r,"")}catch(g){Pt(t,t.return,g)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&Jy(r,s),qh(a,o);var u=qh(a,s);for(o=0;o<l.length;o+=2){var c=l[o],f=l[o+1];c==="style"?rS(r,f):c==="dangerouslySetInnerHTML"?nS(r,f):c==="children"?Cl(r,f):Qm(r,c,f,u)}switch(a){case"input":Hh(r,s);break;case"textarea":eS(r,s);break;case"select":var d=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var h=s.value;h!=null?na(r,!!s.multiple,h,!1):d!==!!s.multiple&&(s.defaultValue!=null?na(r,!!s.multiple,s.defaultValue,!0):na(r,!!s.multiple,s.multiple?[]:"",!1))}r[Fl]=s}catch(g){Pt(t,t.return,g)}}break;case 6:if(yi(e,t),Fi(t),i&4){if(t.stateNode===null)throw Error(ie(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(g){Pt(t,t.return,g)}}break;case 3:if(yi(e,t),Fi(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Dl(e.containerInfo)}catch(g){Pt(t,t.return,g)}break;case 4:yi(e,t),Fi(t);break;case 13:yi(e,t),Fi(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(Dg=Ot())),i&4&&J_(t);break;case 22:if(c=n!==null&&n.memoizedState!==null,t.mode&1?(hn=(u=hn)||c,yi(e,t),hn=u):yi(e,t),Fi(t),i&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!c&&t.mode&1)for(ye=t,c=t.child;c!==null;){for(f=ye=c;ye!==null;){switch(d=ye,h=d.child,d.tag){case 0:case 11:case 14:case 15:gl(4,d,d.return);break;case 1:$o(d,d.return);var m=d.stateNode;if(typeof m.componentWillUnmount=="function"){i=d,n=d.return;try{e=i,m.props=e.memoizedProps,m.state=e.memoizedState,m.componentWillUnmount()}catch(g){Pt(i,n,g)}}break;case 5:$o(d,d.return);break;case 22:if(d.memoizedState!==null){tv(f);continue}}h!==null?(h.return=d,ye=h):tv(f)}c=c.sibling}e:for(c=null,f=t;;){if(f.tag===5){if(c===null){c=f;try{r=f.stateNode,u?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=f.stateNode,l=f.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=iS("display",o))}catch(g){Pt(t,t.return,g)}}}else if(f.tag===6){if(c===null)try{f.stateNode.nodeValue=u?"":f.memoizedProps}catch(g){Pt(t,t.return,g)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===t)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===t)break e;for(;f.sibling===null;){if(f.return===null||f.return===t)break e;c===f&&(c=null),f=f.return}c===f&&(c=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:yi(e,t),Fi(t),i&4&&J_(t);break;case 21:break;default:yi(e,t),Fi(t)}}function Fi(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(bM(n)){var i=n;break e}n=n.return}throw Error(ie(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(Cl(r,""),i.flags&=-33);var s=Q_(t);Ep(t,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=Q_(t);Mp(t,a,o);break;default:throw Error(ie(161))}}catch(l){Pt(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function uC(t,e,n){ye=t,LM(t)}function LM(t,e,n){for(var i=(t.mode&1)!==0;ye!==null;){var r=ye,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||Nu;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||hn;a=Nu;var u=hn;if(Nu=o,(hn=l)&&!u)for(ye=r;ye!==null;)o=ye,l=o.child,o.tag===22&&o.memoizedState!==null?nv(r):l!==null?(l.return=o,ye=l):nv(r);for(;s!==null;)ye=s,LM(s),s=s.sibling;ye=r,Nu=a,hn=u}ev(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,ye=s):ev(t)}}function ev(t){for(;ye!==null;){var e=ye;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:hn||Uf(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!hn)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:Ti(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&k_(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}k_(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var f=c.dehydrated;f!==null&&Dl(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(ie(163))}hn||e.flags&512&&Sp(e)}catch(d){Pt(e,e.return,d)}}if(e===t){ye=null;break}if(n=e.sibling,n!==null){n.return=e.return,ye=n;break}ye=e.return}}function tv(t){for(;ye!==null;){var e=ye;if(e===t){ye=null;break}var n=e.sibling;if(n!==null){n.return=e.return,ye=n;break}ye=e.return}}function nv(t){for(;ye!==null;){var e=ye;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Uf(4,e)}catch(l){Pt(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){Pt(e,r,l)}}var s=e.return;try{Sp(e)}catch(l){Pt(e,s,l)}break;case 5:var o=e.return;try{Sp(e)}catch(l){Pt(e,o,l)}}}catch(l){Pt(e,e.return,l)}if(e===t){ye=null;break}var a=e.sibling;if(a!==null){a.return=e.return,ye=a;break}ye=e.return}}var cC=Math.ceil,ef=Dr.ReactCurrentDispatcher,bg=Dr.ReactCurrentOwner,_i=Dr.ReactCurrentBatchConfig,Qe=0,Qt=null,Gt=null,rn=0,Wn=0,Ko=Ts(0),Yt=0,Hl=null,ao=0,Ff=0,Pg=0,_l=null,Cn=null,Dg=0,ya=1/0,lr=null,tf=!1,Tp=null,ls=null,Uu=!1,Qr=null,nf=0,vl=0,wp=null,Sc=-1,Mc=0;function Mn(){return Qe&6?Ot():Sc!==-1?Sc:Sc=Ot()}function us(t){return t.mode&1?Qe&2&&rn!==0?rn&-rn:qA.transition!==null?(Mc===0&&(Mc=gS()),Mc):(t=it,t!==0||(t=window.event,t=t===void 0?16:ES(t.type)),t):1}function Pi(t,e,n,i){if(50<vl)throw vl=0,wp=null,Error(ie(185));su(t,n,i),(!(Qe&2)||t!==Qt)&&(t===Qt&&(!(Qe&2)&&(Ff|=n),Yt===4&&Kr(t,rn)),Ln(t,i),n===1&&Qe===0&&!(e.mode&1)&&(ya=Ot()+500,Lf&&ws()))}function Ln(t,e){var n=t.callbackNode;qw(t,e);var i=Bc(t,t===Qt?rn:0);if(i===0)n!==null&&f_(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&f_(n),e===1)t.tag===0?YA(iv.bind(null,t)):HS(iv.bind(null,t)),HA(function(){!(Qe&6)&&ws()}),n=null;else{switch(_S(i)){case 1:n=ig;break;case 4:n=pS;break;case 16:n=kc;break;case 536870912:n=mS;break;default:n=kc}n=zM(n,IM.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function IM(t,e){if(Sc=-1,Mc=0,Qe&6)throw Error(ie(327));var n=t.callbackNode;if(aa()&&t.callbackNode!==n)return null;var i=Bc(t,t===Qt?rn:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=rf(t,i);else{e=i;var r=Qe;Qe|=2;var s=UM();(Qt!==t||rn!==e)&&(lr=null,ya=Ot()+500,Qs(t,e));do try{hC();break}catch(a){NM(t,a)}while(1);gg(),ef.current=s,Qe=r,Gt!==null?e=0:(Qt=null,rn=0,e=Yt)}if(e!==0){if(e===2&&(r=Qh(t),r!==0&&(i=r,e=Ap(t,r))),e===1)throw n=Hl,Qs(t,0),Kr(t,i),Ln(t,Ot()),n;if(e===6)Kr(t,i);else{if(r=t.current.alternate,!(i&30)&&!fC(r)&&(e=rf(t,i),e===2&&(s=Qh(t),s!==0&&(i=s,e=Ap(t,s))),e===1))throw n=Hl,Qs(t,0),Kr(t,i),Ln(t,Ot()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(ie(345));case 2:Os(t,Cn,lr);break;case 3:if(Kr(t,i),(i&130023424)===i&&(e=Dg+500-Ot(),10<e)){if(Bc(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){Mn(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=op(Os.bind(null,t,Cn,lr),e);break}Os(t,Cn,lr);break;case 4:if(Kr(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var o=31-bi(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=Ot()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*cC(i/1960))-i,10<i){t.timeoutHandle=op(Os.bind(null,t,Cn,lr),i);break}Os(t,Cn,lr);break;case 5:Os(t,Cn,lr);break;default:throw Error(ie(329))}}}return Ln(t,Ot()),t.callbackNode===n?IM.bind(null,t):null}function Ap(t,e){var n=_l;return t.current.memoizedState.isDehydrated&&(Qs(t,e).flags|=256),t=rf(t,e),t!==2&&(e=Cn,Cn=n,e!==null&&Cp(e)),t}function Cp(t){Cn===null?Cn=t:Cn.push.apply(Cn,t)}function fC(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!Di(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Kr(t,e){for(e&=~Pg,e&=~Ff,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-bi(e),i=1<<n;t[n]=-1,e&=~i}}function iv(t){if(Qe&6)throw Error(ie(327));aa();var e=Bc(t,0);if(!(e&1))return Ln(t,Ot()),null;var n=rf(t,e);if(t.tag!==0&&n===2){var i=Qh(t);i!==0&&(e=i,n=Ap(t,i))}if(n===1)throw n=Hl,Qs(t,0),Kr(t,e),Ln(t,Ot()),n;if(n===6)throw Error(ie(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Os(t,Cn,lr),Ln(t,Ot()),null}function Lg(t,e){var n=Qe;Qe|=1;try{return t(e)}finally{Qe=n,Qe===0&&(ya=Ot()+500,Lf&&ws())}}function lo(t){Qr!==null&&Qr.tag===0&&!(Qe&6)&&aa();var e=Qe;Qe|=1;var n=_i.transition,i=it;try{if(_i.transition=null,it=1,t)return t()}finally{it=i,_i.transition=n,Qe=e,!(Qe&6)&&ws()}}function Ig(){Wn=Ko.current,mt(Ko)}function Qs(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,VA(n)),Gt!==null)for(n=Gt.return;n!==null;){var i=n;switch(hg(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Wc();break;case 3:va(),mt(Pn),mt(vn),Mg();break;case 5:Sg(i);break;case 4:va();break;case 13:mt(xt);break;case 19:mt(xt);break;case 10:_g(i.type._context);break;case 22:case 23:Ig()}n=n.return}if(Qt=t,Gt=t=cs(t.current,null),rn=Wn=e,Yt=0,Hl=null,Pg=Ff=ao=0,Cn=_l=null,Ys!==null){for(e=0;e<Ys.length;e++)if(n=Ys[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}n.pending=i}Ys=null}return t}function NM(t,e){do{var n=Gt;try{if(gg(),vc.current=Jc,Qc){for(var i=Tt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Qc=!1}if(oo=0,Zt=Xt=Tt=null,ml=!1,Bl=0,bg.current=null,n===null||n.return===null){Yt=1,Hl=e,Gt=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=rn,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,f=c.tag;if(!(c.mode&1)&&(f===0||f===11||f===15)){var d=c.alternate;d?(c.updateQueue=d.updateQueue,c.memoizedState=d.memoizedState,c.lanes=d.lanes):(c.updateQueue=null,c.memoizedState=null)}var h=W_(o);if(h!==null){h.flags&=-257,X_(h,o,a,s,e),h.mode&1&&G_(s,u,e),e=h,l=u;var m=e.updateQueue;if(m===null){var g=new Set;g.add(l),e.updateQueue=g}else m.add(l);break e}else{if(!(e&1)){G_(s,u,e),Ng();break e}l=Error(ie(426))}}else if(gt&&a.mode&1){var _=W_(o);if(_!==null){!(_.flags&65536)&&(_.flags|=256),X_(_,o,a,s,e),pg(xa(l,a));break e}}s=l=xa(l,a),Yt!==4&&(Yt=2),_l===null?_l=[s]:_l.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var p=_M(s,l,e);O_(s,p);break e;case 1:a=l;var v=s.type,x=s.stateNode;if(!(s.flags&128)&&(typeof v.getDerivedStateFromError=="function"||x!==null&&typeof x.componentDidCatch=="function"&&(ls===null||!ls.has(x)))){s.flags|=65536,e&=-e,s.lanes|=e;var S=vM(s,a,e);O_(s,S);break e}}s=s.return}while(s!==null)}OM(n)}catch(E){e=E,Gt===n&&n!==null&&(Gt=n=n.return);continue}break}while(1)}function UM(){var t=ef.current;return ef.current=Jc,t===null?Jc:t}function Ng(){(Yt===0||Yt===3||Yt===2)&&(Yt=4),Qt===null||!(ao&268435455)&&!(Ff&268435455)||Kr(Qt,rn)}function rf(t,e){var n=Qe;Qe|=2;var i=UM();(Qt!==t||rn!==e)&&(lr=null,Qs(t,e));do try{dC();break}catch(r){NM(t,r)}while(1);if(gg(),Qe=n,ef.current=i,Gt!==null)throw Error(ie(261));return Qt=null,rn=0,Yt}function dC(){for(;Gt!==null;)FM(Gt)}function hC(){for(;Gt!==null&&!kw();)FM(Gt)}function FM(t){var e=BM(t.alternate,t,Wn);t.memoizedProps=t.pendingProps,e===null?OM(t):Gt=e,bg.current=null}function OM(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=oC(n,e),n!==null){n.flags&=32767,Gt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Yt=6,Gt=null;return}}else if(n=sC(n,e,Wn),n!==null){Gt=n;return}if(e=e.sibling,e!==null){Gt=e;return}Gt=e=t}while(e!==null);Yt===0&&(Yt=5)}function Os(t,e,n){var i=it,r=_i.transition;try{_i.transition=null,it=1,pC(t,e,n,i)}finally{_i.transition=r,it=i}return null}function pC(t,e,n,i){do aa();while(Qr!==null);if(Qe&6)throw Error(ie(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(ie(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if($w(t,s),t===Qt&&(Gt=Qt=null,rn=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Uu||(Uu=!0,zM(kc,function(){return aa(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=_i.transition,_i.transition=null;var o=it;it=1;var a=Qe;Qe|=4,bg.current=null,lC(t,n),DM(n,t),NA(rp),zc=!!ip,rp=ip=null,t.current=n,uC(n),Bw(),Qe=a,it=o,_i.transition=s}else t.current=n;if(Uu&&(Uu=!1,Qr=t,nf=r),s=t.pendingLanes,s===0&&(ls=null),Hw(n.stateNode),Ln(t,Ot()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(tf)throw tf=!1,t=Tp,Tp=null,t;return nf&1&&t.tag!==0&&aa(),s=t.pendingLanes,s&1?t===wp?vl++:(vl=0,wp=t):vl=0,ws(),null}function aa(){if(Qr!==null){var t=_S(nf),e=_i.transition,n=it;try{if(_i.transition=null,it=16>t?16:t,Qr===null)var i=!1;else{if(t=Qr,Qr=null,nf=0,Qe&6)throw Error(ie(331));var r=Qe;for(Qe|=4,ye=t.current;ye!==null;){var s=ye,o=s.child;if(ye.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(ye=u;ye!==null;){var c=ye;switch(c.tag){case 0:case 11:case 15:gl(8,c,s)}var f=c.child;if(f!==null)f.return=c,ye=f;else for(;ye!==null;){c=ye;var d=c.sibling,h=c.return;if(RM(c),c===u){ye=null;break}if(d!==null){d.return=h,ye=d;break}ye=h}}}var m=s.alternate;if(m!==null){var g=m.child;if(g!==null){m.child=null;do{var _=g.sibling;g.sibling=null,g=_}while(g!==null)}}ye=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,ye=o;else e:for(;ye!==null;){if(s=ye,s.flags&2048)switch(s.tag){case 0:case 11:case 15:gl(9,s,s.return)}var p=s.sibling;if(p!==null){p.return=s.return,ye=p;break e}ye=s.return}}var v=t.current;for(ye=v;ye!==null;){o=ye;var x=o.child;if(o.subtreeFlags&2064&&x!==null)x.return=o,ye=x;else e:for(o=v;ye!==null;){if(a=ye,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Uf(9,a)}}catch(E){Pt(a,a.return,E)}if(a===o){ye=null;break e}var S=a.sibling;if(S!==null){S.return=a.return,ye=S;break e}ye=a.return}}if(Qe=r,ws(),$i&&typeof $i.onPostCommitFiberRoot=="function")try{$i.onPostCommitFiberRoot(Cf,t)}catch{}i=!0}return i}finally{it=n,_i.transition=e}}return!1}function rv(t,e,n){e=xa(n,e),e=_M(t,e,1),t=as(t,e,1),e=Mn(),t!==null&&(su(t,1,e),Ln(t,e))}function Pt(t,e,n){if(t.tag===3)rv(t,t,n);else for(;e!==null;){if(e.tag===3){rv(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(ls===null||!ls.has(i))){t=xa(n,t),t=vM(e,t,1),e=as(e,t,1),t=Mn(),e!==null&&(su(e,1,t),Ln(e,t));break}}e=e.return}}function mC(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=Mn(),t.pingedLanes|=t.suspendedLanes&n,Qt===t&&(rn&n)===n&&(Yt===4||Yt===3&&(rn&130023424)===rn&&500>Ot()-Dg?Qs(t,0):Pg|=n),Ln(t,e)}function kM(t,e){e===0&&(t.mode&1?(e=wu,wu<<=1,!(wu&130023424)&&(wu=4194304)):e=1);var n=Mn();t=Tr(t,e),t!==null&&(su(t,e,n),Ln(t,n))}function gC(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),kM(t,n)}function _C(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(ie(314))}i!==null&&i.delete(e),kM(t,n)}var BM;BM=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Pn.current)bn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return bn=!1,rC(t,e,n);bn=!!(t.flags&131072)}else bn=!1,gt&&e.flags&1048576&&GS(e,qc,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;yc(t,e),t=e.pendingProps;var r=ma(e,vn.current);oa(e,n),r=Tg(null,e,i,t,r,n);var s=wg();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Dn(i)?(s=!0,Xc(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,xg(e),r.updater=Nf,e.stateNode=r,r._reactInternals=e,hp(e,i,t,n),e=gp(null,e,i,!0,s,n)):(e.tag=0,gt&&s&&dg(e),Sn(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(yc(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=xC(i),t=Ti(i,t),r){case 0:e=mp(null,e,i,t,n);break e;case 1:e=$_(null,e,i,t,n);break e;case 11:e=Y_(null,e,i,t,n);break e;case 14:e=q_(null,e,i,Ti(i.type,t),n);break e}throw Error(ie(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Ti(i,r),mp(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Ti(i,r),$_(t,e,i,r,n);case 3:e:{if(MM(e),t===null)throw Error(ie(387));i=e.pendingProps,s=e.memoizedState,r=s.element,KS(t,e),jc(e,i,null,n);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=xa(Error(ie(423)),e),e=K_(t,e,i,n,r);break e}else if(i!==r){r=xa(Error(ie(424)),e),e=K_(t,e,i,n,r);break e}else for(jn=os(e.stateNode.containerInfo.firstChild),Jn=e,gt=!0,Ai=null,n=qS(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(ga(),i===r){e=wr(t,e,n);break e}Sn(t,e,i,n)}e=e.child}return e;case 5:return jS(e),t===null&&cp(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,o=r.children,sp(i,r)?o=null:s!==null&&sp(i,s)&&(e.flags|=32),SM(t,e),Sn(t,e,o,n),e.child;case 6:return t===null&&cp(e),null;case 13:return EM(t,e,n);case 4:return yg(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=_a(e,null,i,n):Sn(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Ti(i,r),Y_(t,e,i,r,n);case 7:return Sn(t,e,e.pendingProps,n),e.child;case 8:return Sn(t,e,e.pendingProps.children,n),e.child;case 12:return Sn(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,dt($c,i._currentValue),i._currentValue=o,s!==null)if(Di(s.value,o)){if(s.children===r.children&&!Pn.current){e=wr(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=gr(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),fp(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(ie(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),fp(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Sn(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,oa(e,n),r=vi(r),i=i(r),e.flags|=1,Sn(t,e,i,n),e.child;case 14:return i=e.type,r=Ti(i,e.pendingProps),r=Ti(i.type,r),q_(t,e,i,r,n);case 15:return xM(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Ti(i,r),yc(t,e),e.tag=1,Dn(i)?(t=!0,Xc(e)):t=!1,oa(e,n),gM(e,i,r),hp(e,i,r,n),gp(null,e,i,!0,t,n);case 19:return TM(t,e,n);case 22:return yM(t,e,n)}throw Error(ie(156,e.tag))};function zM(t,e){return hS(t,e)}function vC(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function pi(t,e,n,i){return new vC(t,e,n,i)}function Ug(t){return t=t.prototype,!(!t||!t.isReactComponent)}function xC(t){if(typeof t=="function")return Ug(t)?1:0;if(t!=null){if(t=t.$$typeof,t===eg)return 11;if(t===tg)return 14}return 2}function cs(t,e){var n=t.alternate;return n===null?(n=pi(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Ec(t,e,n,i,r,s){var o=2;if(i=t,typeof t=="function")Ug(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Bo:return Js(n.children,r,s,e);case Jm:o=8,r|=8;break;case Oh:return t=pi(12,n,e,r|2),t.elementType=Oh,t.lanes=s,t;case kh:return t=pi(13,n,e,r),t.elementType=kh,t.lanes=s,t;case Bh:return t=pi(19,n,e,r),t.elementType=Bh,t.lanes=s,t;case jy:return Of(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case $y:o=10;break e;case Ky:o=9;break e;case eg:o=11;break e;case tg:o=14;break e;case Xr:o=16,i=null;break e}throw Error(ie(130,t==null?t:typeof t,""))}return e=pi(o,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function Js(t,e,n,i){return t=pi(7,t,i,e),t.lanes=n,t}function Of(t,e,n,i){return t=pi(22,t,i,e),t.elementType=jy,t.lanes=n,t.stateNode={isHidden:!1},t}function Dd(t,e,n){return t=pi(6,t,null,e),t.lanes=n,t}function Ld(t,e,n){return e=pi(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function yC(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=dd(0),this.expirationTimes=dd(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=dd(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Fg(t,e,n,i,r,s,o,a,l){return t=new yC(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=pi(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},xg(s),t}function SC(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ko,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function VM(t){if(!t)return gs;t=t._reactInternals;e:{if(po(t)!==t||t.tag!==1)throw Error(ie(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Dn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(ie(171))}if(t.tag===1){var n=t.type;if(Dn(n))return VS(t,n,e)}return e}function HM(t,e,n,i,r,s,o,a,l){return t=Fg(n,i,!0,t,r,s,o,a,l),t.context=VM(null),n=t.current,i=Mn(),r=us(n),s=gr(i,r),s.callback=e??null,as(n,s,r),t.current.lanes=r,su(t,r,i),Ln(t,i),t}function kf(t,e,n,i){var r=e.current,s=Mn(),o=us(r);return n=VM(n),e.context===null?e.context=n:e.pendingContext=n,e=gr(s,o),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=as(r,e,o),t!==null&&(Pi(t,r,o,s),_c(t,r,o)),o}function sf(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function sv(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Og(t,e){sv(t,e),(t=t.alternate)&&sv(t,e)}function MC(){return null}var GM=typeof reportError=="function"?reportError:function(t){console.error(t)};function kg(t){this._internalRoot=t}Bf.prototype.render=kg.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(ie(409));kf(t,e,null,null)};Bf.prototype.unmount=kg.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;lo(function(){kf(null,t,null,null)}),e[Er]=null}};function Bf(t){this._internalRoot=t}Bf.prototype.unstable_scheduleHydration=function(t){if(t){var e=yS();t={blockedOn:null,target:t,priority:e};for(var n=0;n<$r.length&&e!==0&&e<$r[n].priority;n++);$r.splice(n,0,t),n===0&&MS(t)}};function Bg(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function zf(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function ov(){}function EC(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var u=sf(o);s.call(u)}}var o=HM(e,i,t,0,null,!1,!1,"",ov);return t._reactRootContainer=o,t[Er]=o.current,Nl(t.nodeType===8?t.parentNode:t),lo(),o}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var u=sf(l);a.call(u)}}var l=Fg(t,0,!1,null,null,!1,!1,"",ov);return t._reactRootContainer=l,t[Er]=l.current,Nl(t.nodeType===8?t.parentNode:t),lo(function(){kf(e,l,n,i)}),l}function Vf(t,e,n,i,r){var s=n._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=sf(o);a.call(l)}}kf(e,o,t,r)}else o=EC(n,e,t,r,i);return sf(o)}vS=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=il(e.pendingLanes);n!==0&&(rg(e,n|1),Ln(e,Ot()),!(Qe&6)&&(ya=Ot()+500,ws()))}break;case 13:lo(function(){var i=Tr(t,1);if(i!==null){var r=Mn();Pi(i,t,1,r)}}),Og(t,1)}};sg=function(t){if(t.tag===13){var e=Tr(t,134217728);if(e!==null){var n=Mn();Pi(e,t,134217728,n)}Og(t,134217728)}};xS=function(t){if(t.tag===13){var e=us(t),n=Tr(t,e);if(n!==null){var i=Mn();Pi(n,t,e,i)}Og(t,e)}};yS=function(){return it};SS=function(t,e){var n=it;try{return it=t,e()}finally{it=n}};Kh=function(t,e,n){switch(e){case"input":if(Hh(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=Df(i);if(!r)throw Error(ie(90));Qy(i),Hh(i,r)}}}break;case"textarea":eS(t,n);break;case"select":e=n.value,e!=null&&na(t,!!n.multiple,e,!1)}};aS=Lg;lS=lo;var TC={usingClientEntryPoint:!1,Events:[au,Go,Df,sS,oS,Lg]},Wa={findFiberByHostInstance:Xs,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},wC={bundleType:Wa.bundleType,version:Wa.version,rendererPackageName:Wa.rendererPackageName,rendererConfig:Wa.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Dr.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=fS(t),t===null?null:t.stateNode},findFiberByHostInstance:Wa.findFiberByHostInstance||MC,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Fu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Fu.isDisabled&&Fu.supportsFiber)try{Cf=Fu.inject(wC),$i=Fu}catch{}}si.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=TC;si.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Bg(e))throw Error(ie(200));return SC(t,e,null,n)};si.createRoot=function(t,e){if(!Bg(t))throw Error(ie(299));var n=!1,i="",r=GM;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=Fg(t,1,!1,null,null,n,!1,i,r),t[Er]=e.current,Nl(t.nodeType===8?t.parentNode:t),new kg(e)};si.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(ie(188)):(t=Object.keys(t).join(","),Error(ie(268,t)));return t=fS(e),t=t===null?null:t.stateNode,t};si.flushSync=function(t){return lo(t)};si.hydrate=function(t,e,n){if(!zf(e))throw Error(ie(200));return Vf(null,t,e,!0,n)};si.hydrateRoot=function(t,e,n){if(!Bg(t))throw Error(ie(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",o=GM;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=HM(e,null,t,1,n??null,r,!1,s,o),t[Er]=e.current,Nl(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new Bf(e)};si.render=function(t,e,n){if(!zf(e))throw Error(ie(200));return Vf(null,t,e,!1,n)};si.unmountComponentAtNode=function(t){if(!zf(t))throw Error(ie(40));return t._reactRootContainer?(lo(function(){Vf(null,null,t,!1,function(){t._reactRootContainer=null,t[Er]=null})}),!0):!1};si.unstable_batchedUpdates=Lg;si.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!zf(n))throw Error(ie(200));if(t==null||t._reactInternals===void 0)throw Error(ie(38));return Vf(t,e,n,!1,i)};si.version="18.3.1-next-f1338f8080-20240426";function WM(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(WM)}catch(t){console.error(t)}}WM(),Wy.exports=si;var AC=Wy.exports,av=AC;Uh.createRoot=av.createRoot,Uh.hydrateRoot=av.hydrateRoot;const XM=oe.createContext({transformPagePoint:t=>t,isStatic:!1,reducedMotion:"never"}),Hf=oe.createContext({}),Gf=oe.createContext(null),Wf=typeof document<"u",zg=Wf?oe.useLayoutEffect:oe.useEffect,YM=oe.createContext({strict:!1}),Vg=t=>t.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase(),CC="framerAppearId",qM="data-"+Vg(CC);function RC(t,e,n,i){const{visualElement:r}=oe.useContext(Hf),s=oe.useContext(YM),o=oe.useContext(Gf),a=oe.useContext(XM).reducedMotion,l=oe.useRef();i=i||s.renderer,!l.current&&i&&(l.current=i(t,{visualState:e,parent:r,props:n,presenceContext:o,blockInitialAnimation:o?o.initial===!1:!1,reducedMotionConfig:a}));const u=l.current;oe.useInsertionEffect(()=>{u&&u.update(n,o)});const c=oe.useRef(!!(n[qM]&&!window.HandoffComplete));return zg(()=>{u&&(u.render(),c.current&&u.animationState&&u.animationState.animateChanges())}),oe.useEffect(()=>{u&&(u.updateFeatures(),!c.current&&u.animationState&&u.animationState.animateChanges(),c.current&&(c.current=!1,window.HandoffComplete=!0))}),u}function jo(t){return t&&typeof t=="object"&&Object.prototype.hasOwnProperty.call(t,"current")}function bC(t,e,n){return oe.useCallback(i=>{i&&t.mount&&t.mount(i),e&&(i?e.mount(i):e.unmount()),n&&(typeof n=="function"?n(i):jo(n)&&(n.current=i))},[e])}function Gl(t){return typeof t=="string"||Array.isArray(t)}function Xf(t){return t!==null&&typeof t=="object"&&typeof t.start=="function"}const Hg=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],Gg=["initial",...Hg];function Yf(t){return Xf(t.animate)||Gg.some(e=>Gl(t[e]))}function $M(t){return!!(Yf(t)||t.variants)}function PC(t,e){if(Yf(t)){const{initial:n,animate:i}=t;return{initial:n===!1||Gl(n)?n:void 0,animate:Gl(i)?i:void 0}}return t.inherit!==!1?e:{}}function DC(t){const{initial:e,animate:n}=PC(t,oe.useContext(Hf));return oe.useMemo(()=>({initial:e,animate:n}),[lv(e),lv(n)])}function lv(t){return Array.isArray(t)?t.join(" "):t}const uv={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},Wl={};for(const t in uv)Wl[t]={isEnabled:e=>uv[t].some(n=>!!e[n])};function LC(t){for(const e in t)Wl[e]={...Wl[e],...t[e]}}const Wg=oe.createContext({}),KM=oe.createContext({}),IC=Symbol.for("motionComponentSymbol");function NC({preloadedFeatures:t,createVisualElement:e,useRender:n,useVisualState:i,Component:r}){t&&LC(t);function s(a,l){let u;const c={...oe.useContext(XM),...a,layoutId:UC(a)},{isStatic:f}=c,d=DC(a),h=i(a,f);if(!f&&Wf){d.visualElement=RC(r,h,c,e);const m=oe.useContext(KM),g=oe.useContext(YM).strict;d.visualElement&&(u=d.visualElement.loadFeatures(c,g,t,m))}return oe.createElement(Hf.Provider,{value:d},u&&d.visualElement?oe.createElement(u,{visualElement:d.visualElement,...c}):null,n(r,a,bC(h,d.visualElement,l),h,f,d.visualElement))}const o=oe.forwardRef(s);return o[IC]=r,o}function UC({layoutId:t}){const e=oe.useContext(Wg).id;return e&&t!==void 0?e+"-"+t:t}function FC(t){function e(i,r={}){return NC(t(i,r))}if(typeof Proxy>"u")return e;const n=new Map;return new Proxy(e,{get:(i,r)=>(n.has(r)||n.set(r,e(r)),n.get(r))})}const OC=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function Xg(t){return typeof t!="string"||t.includes("-")?!1:!!(OC.indexOf(t)>-1||/[A-Z]/.test(t))}const of={};function kC(t){Object.assign(of,t)}const uu=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],mo=new Set(uu);function jM(t,{layout:e,layoutId:n}){return mo.has(t)||t.startsWith("origin")||(e||n!==void 0)&&(!!of[t]||t==="opacity")}const Bn=t=>!!(t&&t.getVelocity),BC={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},zC=uu.length;function VC(t,{enableHardwareAcceleration:e=!0,allowTransformNone:n=!0},i,r){let s="";for(let o=0;o<zC;o++){const a=uu[o];if(t[a]!==void 0){const l=BC[a]||a;s+=`${l}(${t[a]}) `}}return e&&!t.z&&(s+="translateZ(0)"),s=s.trim(),r?s=r(t,i?"":s):n&&i&&(s="none"),s}const ZM=t=>e=>typeof e=="string"&&e.startsWith(t),QM=ZM("--"),Rp=ZM("var(--"),HC=/var\s*\(\s*--[\w-]+(\s*,\s*(?:(?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)+)?\s*\)/g,GC=(t,e)=>e&&typeof t=="number"?e.transform(t):t,_s=(t,e,n)=>Math.min(Math.max(n,t),e),go={test:t=>typeof t=="number",parse:parseFloat,transform:t=>t},xl={...go,transform:t=>_s(0,1,t)},Ou={...go,default:1},yl=t=>Math.round(t*1e5)/1e5,qf=/(-)?([\d]*\.?[\d])+/g,JM=/(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi,WC=/^(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;function cu(t){return typeof t=="string"}const fu=t=>({test:e=>cu(e)&&e.endsWith(t)&&e.split(" ").length===1,parse:parseFloat,transform:e=>`${e}${t}`}),Gr=fu("deg"),ji=fu("%"),De=fu("px"),XC=fu("vh"),YC=fu("vw"),cv={...ji,parse:t=>ji.parse(t)/100,transform:t=>ji.transform(t*100)},fv={...go,transform:Math.round},e1={borderWidth:De,borderTopWidth:De,borderRightWidth:De,borderBottomWidth:De,borderLeftWidth:De,borderRadius:De,radius:De,borderTopLeftRadius:De,borderTopRightRadius:De,borderBottomRightRadius:De,borderBottomLeftRadius:De,width:De,maxWidth:De,height:De,maxHeight:De,size:De,top:De,right:De,bottom:De,left:De,padding:De,paddingTop:De,paddingRight:De,paddingBottom:De,paddingLeft:De,margin:De,marginTop:De,marginRight:De,marginBottom:De,marginLeft:De,rotate:Gr,rotateX:Gr,rotateY:Gr,rotateZ:Gr,scale:Ou,scaleX:Ou,scaleY:Ou,scaleZ:Ou,skew:Gr,skewX:Gr,skewY:Gr,distance:De,translateX:De,translateY:De,translateZ:De,x:De,y:De,z:De,perspective:De,transformPerspective:De,opacity:xl,originX:cv,originY:cv,originZ:De,zIndex:fv,fillOpacity:xl,strokeOpacity:xl,numOctaves:fv};function Yg(t,e,n,i){const{style:r,vars:s,transform:o,transformOrigin:a}=t;let l=!1,u=!1,c=!0;for(const f in e){const d=e[f];if(QM(f)){s[f]=d;continue}const h=e1[f],m=GC(d,h);if(mo.has(f)){if(l=!0,o[f]=m,!c)continue;d!==(h.default||0)&&(c=!1)}else f.startsWith("origin")?(u=!0,a[f]=m):r[f]=m}if(e.transform||(l||i?r.transform=VC(t.transform,n,c,i):r.transform&&(r.transform="none")),u){const{originX:f="50%",originY:d="50%",originZ:h=0}=a;r.transformOrigin=`${f} ${d} ${h}`}}const qg=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function t1(t,e,n){for(const i in e)!Bn(e[i])&&!jM(i,n)&&(t[i]=e[i])}function qC({transformTemplate:t},e,n){return oe.useMemo(()=>{const i=qg();return Yg(i,e,{enableHardwareAcceleration:!n},t),Object.assign({},i.vars,i.style)},[e])}function $C(t,e,n){const i=t.style||{},r={};return t1(r,i,t),Object.assign(r,qC(t,e,n)),t.transformValues?t.transformValues(r):r}function KC(t,e,n){const i={},r=$C(t,e,n);return t.drag&&t.dragListener!==!1&&(i.draggable=!1,r.userSelect=r.WebkitUserSelect=r.WebkitTouchCallout="none",r.touchAction=t.drag===!0?"none":`pan-${t.drag==="x"?"y":"x"}`),t.tabIndex===void 0&&(t.onTap||t.onTapStart||t.whileTap)&&(i.tabIndex=0),i.style=r,i}const jC=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","transformValues","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function af(t){return t.startsWith("while")||t.startsWith("drag")&&t!=="draggable"||t.startsWith("layout")||t.startsWith("onTap")||t.startsWith("onPan")||t.startsWith("onLayout")||jC.has(t)}let n1=t=>!af(t);function ZC(t){t&&(n1=e=>e.startsWith("on")?!af(e):t(e))}try{ZC(require("@emotion/is-prop-valid").default)}catch{}function QC(t,e,n){const i={};for(const r in t)r==="values"&&typeof t.values=="object"||(n1(r)||n===!0&&af(r)||!e&&!af(r)||t.draggable&&r.startsWith("onDrag"))&&(i[r]=t[r]);return i}function dv(t,e,n){return typeof t=="string"?t:De.transform(e+n*t)}function JC(t,e,n){const i=dv(e,t.x,t.width),r=dv(n,t.y,t.height);return`${i} ${r}`}const eR={offset:"stroke-dashoffset",array:"stroke-dasharray"},tR={offset:"strokeDashoffset",array:"strokeDasharray"};function nR(t,e,n=1,i=0,r=!0){t.pathLength=1;const s=r?eR:tR;t[s.offset]=De.transform(-i);const o=De.transform(e),a=De.transform(n);t[s.array]=`${o} ${a}`}function $g(t,{attrX:e,attrY:n,attrScale:i,originX:r,originY:s,pathLength:o,pathSpacing:a=1,pathOffset:l=0,...u},c,f,d){if(Yg(t,u,c,d),f){t.style.viewBox&&(t.attrs.viewBox=t.style.viewBox);return}t.attrs=t.style,t.style={};const{attrs:h,style:m,dimensions:g}=t;h.transform&&(g&&(m.transform=h.transform),delete h.transform),g&&(r!==void 0||s!==void 0||m.transform)&&(m.transformOrigin=JC(g,r!==void 0?r:.5,s!==void 0?s:.5)),e!==void 0&&(h.x=e),n!==void 0&&(h.y=n),i!==void 0&&(h.scale=i),o!==void 0&&nR(h,o,a,l,!1)}const i1=()=>({...qg(),attrs:{}}),Kg=t=>typeof t=="string"&&t.toLowerCase()==="svg";function iR(t,e,n,i){const r=oe.useMemo(()=>{const s=i1();return $g(s,e,{enableHardwareAcceleration:!1},Kg(i),t.transformTemplate),{...s.attrs,style:{...s.style}}},[e]);if(t.style){const s={};t1(s,t.style,t),r.style={...s,...r.style}}return r}function rR(t=!1){return(n,i,r,{latestValues:s},o)=>{const l=(Xg(n)?iR:KC)(i,s,o,n),c={...QC(i,typeof n=="string",t),...l,ref:r},{children:f}=i,d=oe.useMemo(()=>Bn(f)?f.get():f,[f]);return oe.createElement(n,{...c,children:d})}}function r1(t,{style:e,vars:n},i,r){Object.assign(t.style,e,r&&r.getProjectionStyles(i));for(const s in n)t.style.setProperty(s,n[s])}const s1=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function o1(t,e,n,i){r1(t,e,void 0,i);for(const r in e.attrs)t.setAttribute(s1.has(r)?r:Vg(r),e.attrs[r])}function jg(t,e){const{style:n}=t,i={};for(const r in n)(Bn(n[r])||e.style&&Bn(e.style[r])||jM(r,t))&&(i[r]=n[r]);return i}function a1(t,e){const n=jg(t,e);for(const i in t)if(Bn(t[i])||Bn(e[i])){const r=uu.indexOf(i)!==-1?"attr"+i.charAt(0).toUpperCase()+i.substring(1):i;n[r]=t[i]}return n}function Zg(t,e,n,i={},r={}){return typeof e=="function"&&(e=e(n!==void 0?n:t.custom,i,r)),typeof e=="string"&&(e=t.variants&&t.variants[e]),typeof e=="function"&&(e=e(n!==void 0?n:t.custom,i,r)),e}function l1(t){const e=oe.useRef(null);return e.current===null&&(e.current=t()),e.current}const lf=t=>Array.isArray(t),sR=t=>!!(t&&typeof t=="object"&&t.mix&&t.toValue),oR=t=>lf(t)?t[t.length-1]||0:t;function Tc(t){const e=Bn(t)?t.get():t;return sR(e)?e.toValue():e}function aR({scrapeMotionValuesFromProps:t,createRenderState:e,onMount:n},i,r,s){const o={latestValues:lR(i,r,s,t),renderState:e()};return n&&(o.mount=a=>n(i,a,o)),o}const u1=t=>(e,n)=>{const i=oe.useContext(Hf),r=oe.useContext(Gf),s=()=>aR(t,e,i,r);return n?s():l1(s)};function lR(t,e,n,i){const r={},s=i(t,{});for(const d in s)r[d]=Tc(s[d]);let{initial:o,animate:a}=t;const l=Yf(t),u=$M(t);e&&u&&!l&&t.inherit!==!1&&(o===void 0&&(o=e.initial),a===void 0&&(a=e.animate));let c=n?n.initial===!1:!1;c=c||o===!1;const f=c?a:o;return f&&typeof f!="boolean"&&!Xf(f)&&(Array.isArray(f)?f:[f]).forEach(h=>{const m=Zg(t,h);if(!m)return;const{transitionEnd:g,transition:_,...p}=m;for(const v in p){let x=p[v];if(Array.isArray(x)){const S=c?x.length-1:0;x=x[S]}x!==null&&(r[v]=x)}for(const v in g)r[v]=g[v]}),r}const Dt=t=>t;class hv{constructor(){this.order=[],this.scheduled=new Set}add(e){if(!this.scheduled.has(e))return this.scheduled.add(e),this.order.push(e),!0}remove(e){const n=this.order.indexOf(e);n!==-1&&(this.order.splice(n,1),this.scheduled.delete(e))}clear(){this.order.length=0,this.scheduled.clear()}}function uR(t){let e=new hv,n=new hv,i=0,r=!1,s=!1;const o=new WeakSet,a={schedule:(l,u=!1,c=!1)=>{const f=c&&r,d=f?e:n;return u&&o.add(l),d.add(l)&&f&&r&&(i=e.order.length),l},cancel:l=>{n.remove(l),o.delete(l)},process:l=>{if(r){s=!0;return}if(r=!0,[e,n]=[n,e],n.clear(),i=e.order.length,i)for(let u=0;u<i;u++){const c=e.order[u];c(l),o.has(c)&&(a.schedule(c),t())}r=!1,s&&(s=!1,a.process(l))}};return a}const ku=["prepare","read","update","preRender","render","postRender"],cR=40;function fR(t,e){let n=!1,i=!0;const r={delta:0,timestamp:0,isProcessing:!1},s=ku.reduce((f,d)=>(f[d]=uR(()=>n=!0),f),{}),o=f=>s[f].process(r),a=()=>{const f=performance.now();n=!1,r.delta=i?1e3/60:Math.max(Math.min(f-r.timestamp,cR),1),r.timestamp=f,r.isProcessing=!0,ku.forEach(o),r.isProcessing=!1,n&&e&&(i=!1,t(a))},l=()=>{n=!0,i=!0,r.isProcessing||t(a)};return{schedule:ku.reduce((f,d)=>{const h=s[d];return f[d]=(m,g=!1,_=!1)=>(n||l(),h.schedule(m,g,_)),f},{}),cancel:f=>ku.forEach(d=>s[d].cancel(f)),state:r,steps:s}}const{schedule:ht,cancel:Ar,state:dn,steps:Id}=fR(typeof requestAnimationFrame<"u"?requestAnimationFrame:Dt,!0),dR={useVisualState:u1({scrapeMotionValuesFromProps:a1,createRenderState:i1,onMount:(t,e,{renderState:n,latestValues:i})=>{ht.read(()=>{try{n.dimensions=typeof e.getBBox=="function"?e.getBBox():e.getBoundingClientRect()}catch{n.dimensions={x:0,y:0,width:0,height:0}}}),ht.render(()=>{$g(n,i,{enableHardwareAcceleration:!1},Kg(e.tagName),t.transformTemplate),o1(e,n)})}})},hR={useVisualState:u1({scrapeMotionValuesFromProps:jg,createRenderState:qg})};function pR(t,{forwardMotionProps:e=!1},n,i){return{...Xg(t)?dR:hR,preloadedFeatures:n,useRender:rR(e),createVisualElement:i,Component:t}}function pr(t,e,n,i={passive:!0}){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n)}const c1=t=>t.pointerType==="mouse"?typeof t.button!="number"||t.button<=0:t.isPrimary!==!1;function $f(t,e="page"){return{point:{x:t[e+"X"],y:t[e+"Y"]}}}const mR=t=>e=>c1(e)&&t(e,$f(e));function _r(t,e,n,i){return pr(t,e,mR(n),i)}const gR=(t,e)=>n=>e(t(n)),fs=(...t)=>t.reduce(gR);function f1(t){let e=null;return()=>{const n=()=>{e=null};return e===null?(e=t,n):!1}}const pv=f1("dragHorizontal"),mv=f1("dragVertical");function d1(t){let e=!1;if(t==="y")e=mv();else if(t==="x")e=pv();else{const n=pv(),i=mv();n&&i?e=()=>{n(),i()}:(n&&n(),i&&i())}return e}function h1(){const t=d1(!0);return t?(t(),!1):!0}class As{constructor(e){this.isMounted=!1,this.node=e}update(){}}function gv(t,e){const n="pointer"+(e?"enter":"leave"),i="onHover"+(e?"Start":"End"),r=(s,o)=>{if(s.pointerType==="touch"||h1())return;const a=t.getProps();t.animationState&&a.whileHover&&t.animationState.setActive("whileHover",e),a[i]&&ht.update(()=>a[i](s,o))};return _r(t.current,n,r,{passive:!t.getProps()[i]})}class _R extends As{mount(){this.unmount=fs(gv(this.node,!0),gv(this.node,!1))}unmount(){}}class vR extends As{constructor(){super(...arguments),this.isActive=!1}onFocus(){let e=!1;try{e=this.node.current.matches(":focus-visible")}catch{e=!0}!e||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=fs(pr(this.node.current,"focus",()=>this.onFocus()),pr(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}const p1=(t,e)=>e?t===e?!0:p1(t,e.parentElement):!1;function Nd(t,e){if(!e)return;const n=new PointerEvent("pointer"+t);e(n,$f(n))}class xR extends As{constructor(){super(...arguments),this.removeStartListeners=Dt,this.removeEndListeners=Dt,this.removeAccessibleListeners=Dt,this.startPointerPress=(e,n)=>{if(this.isPressing)return;this.removeEndListeners();const i=this.node.getProps(),s=_r(window,"pointerup",(a,l)=>{if(!this.checkPressEnd())return;const{onTap:u,onTapCancel:c,globalTapTarget:f}=this.node.getProps();ht.update(()=>{!f&&!p1(this.node.current,a.target)?c&&c(a,l):u&&u(a,l)})},{passive:!(i.onTap||i.onPointerUp)}),o=_r(window,"pointercancel",(a,l)=>this.cancelPress(a,l),{passive:!(i.onTapCancel||i.onPointerCancel)});this.removeEndListeners=fs(s,o),this.startPress(e,n)},this.startAccessiblePress=()=>{const e=s=>{if(s.key!=="Enter"||this.isPressing)return;const o=a=>{a.key!=="Enter"||!this.checkPressEnd()||Nd("up",(l,u)=>{const{onTap:c}=this.node.getProps();c&&ht.update(()=>c(l,u))})};this.removeEndListeners(),this.removeEndListeners=pr(this.node.current,"keyup",o),Nd("down",(a,l)=>{this.startPress(a,l)})},n=pr(this.node.current,"keydown",e),i=()=>{this.isPressing&&Nd("cancel",(s,o)=>this.cancelPress(s,o))},r=pr(this.node.current,"blur",i);this.removeAccessibleListeners=fs(n,r)}}startPress(e,n){this.isPressing=!0;const{onTapStart:i,whileTap:r}=this.node.getProps();r&&this.node.animationState&&this.node.animationState.setActive("whileTap",!0),i&&ht.update(()=>i(e,n))}checkPressEnd(){return this.removeEndListeners(),this.isPressing=!1,this.node.getProps().whileTap&&this.node.animationState&&this.node.animationState.setActive("whileTap",!1),!h1()}cancelPress(e,n){if(!this.checkPressEnd())return;const{onTapCancel:i}=this.node.getProps();i&&ht.update(()=>i(e,n))}mount(){const e=this.node.getProps(),n=_r(e.globalTapTarget?window:this.node.current,"pointerdown",this.startPointerPress,{passive:!(e.onTapStart||e.onPointerStart)}),i=pr(this.node.current,"focus",this.startAccessiblePress);this.removeStartListeners=fs(n,i)}unmount(){this.removeStartListeners(),this.removeEndListeners(),this.removeAccessibleListeners()}}const bp=new WeakMap,Ud=new WeakMap,yR=t=>{const e=bp.get(t.target);e&&e(t)},SR=t=>{t.forEach(yR)};function MR({root:t,...e}){const n=t||document;Ud.has(n)||Ud.set(n,{});const i=Ud.get(n),r=JSON.stringify(e);return i[r]||(i[r]=new IntersectionObserver(SR,{root:t,...e})),i[r]}function ER(t,e,n){const i=MR(e);return bp.set(t,n),i.observe(t),()=>{bp.delete(t),i.unobserve(t)}}const TR={some:0,all:1};class wR extends As{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:e={}}=this.node.getProps(),{root:n,margin:i,amount:r="some",once:s}=e,o={root:n?n.current:void 0,rootMargin:i,threshold:typeof r=="number"?r:TR[r]},a=l=>{const{isIntersecting:u}=l;if(this.isInView===u||(this.isInView=u,s&&!u&&this.hasEnteredView))return;u&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",u);const{onViewportEnter:c,onViewportLeave:f}=this.node.getProps(),d=u?c:f;d&&d(l)};return ER(this.node.current,o,a)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:e,prevProps:n}=this.node;["amount","margin","root"].some(AR(e,n))&&this.startObserver()}unmount(){}}function AR({viewport:t={}},{viewport:e={}}={}){return n=>t[n]!==e[n]}const CR={inView:{Feature:wR},tap:{Feature:xR},focus:{Feature:vR},hover:{Feature:_R}};function m1(t,e){if(!Array.isArray(e))return!1;const n=e.length;if(n!==t.length)return!1;for(let i=0;i<n;i++)if(e[i]!==t[i])return!1;return!0}function RR(t){const e={};return t.values.forEach((n,i)=>e[i]=n.get()),e}function bR(t){const e={};return t.values.forEach((n,i)=>e[i]=n.getVelocity()),e}function Kf(t,e,n){const i=t.getProps();return Zg(i,e,n!==void 0?n:i.custom,RR(t),bR(t))}let PR=Dt,Qg=Dt;const ds=t=>t*1e3,vr=t=>t/1e3,DR={current:!1},g1=t=>Array.isArray(t)&&typeof t[0]=="number";function _1(t){return!!(!t||typeof t=="string"&&v1[t]||g1(t)||Array.isArray(t)&&t.every(_1))}const sl=([t,e,n,i])=>`cubic-bezier(${t}, ${e}, ${n}, ${i})`,v1={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:sl([0,.65,.55,1]),circOut:sl([.55,0,1,.45]),backIn:sl([.31,.01,.66,-.59]),backOut:sl([.33,1.53,.69,.99])};function x1(t){if(t)return g1(t)?sl(t):Array.isArray(t)?t.map(x1):v1[t]}function LR(t,e,n,{delay:i=0,duration:r,repeat:s=0,repeatType:o="loop",ease:a,times:l}={}){const u={[e]:n};l&&(u.offset=l);const c=x1(a);return Array.isArray(c)&&(u.easing=c),t.animate(u,{delay:i,duration:r,easing:Array.isArray(c)?"linear":c,fill:"both",iterations:s+1,direction:o==="reverse"?"alternate":"normal"})}function IR(t,{repeat:e,repeatType:n="loop"}){const i=e&&n!=="loop"&&e%2===1?0:t.length-1;return t[i]}const y1=(t,e,n)=>(((1-3*n+3*e)*t+(3*n-6*e))*t+3*e)*t,NR=1e-7,UR=12;function FR(t,e,n,i,r){let s,o,a=0;do o=e+(n-e)/2,s=y1(o,i,r)-t,s>0?n=o:e=o;while(Math.abs(s)>NR&&++a<UR);return o}function du(t,e,n,i){if(t===e&&n===i)return Dt;const r=s=>FR(s,0,1,t,n);return s=>s===0||s===1?s:y1(r(s),e,i)}const OR=du(.42,0,1,1),kR=du(0,0,.58,1),S1=du(.42,0,.58,1),BR=t=>Array.isArray(t)&&typeof t[0]!="number",M1=t=>e=>e<=.5?t(2*e)/2:(2-t(2*(1-e)))/2,E1=t=>e=>1-t(1-e),Jg=t=>1-Math.sin(Math.acos(t)),T1=E1(Jg),zR=M1(Jg),w1=du(.33,1.53,.69,.99),e0=E1(w1),VR=M1(e0),HR=t=>(t*=2)<1?.5*e0(t):.5*(2-Math.pow(2,-10*(t-1))),GR={linear:Dt,easeIn:OR,easeInOut:S1,easeOut:kR,circIn:Jg,circInOut:zR,circOut:T1,backIn:e0,backInOut:VR,backOut:w1,anticipate:HR},_v=t=>{if(Array.isArray(t)){Qg(t.length===4);const[e,n,i,r]=t;return du(e,n,i,r)}else if(typeof t=="string")return GR[t];return t},t0=(t,e)=>n=>!!(cu(n)&&WC.test(n)&&n.startsWith(t)||e&&Object.prototype.hasOwnProperty.call(n,e)),A1=(t,e,n)=>i=>{if(!cu(i))return i;const[r,s,o,a]=i.match(qf);return{[t]:parseFloat(r),[e]:parseFloat(s),[n]:parseFloat(o),alpha:a!==void 0?parseFloat(a):1}},WR=t=>_s(0,255,t),Fd={...go,transform:t=>Math.round(WR(t))},$s={test:t0("rgb","red"),parse:A1("red","green","blue"),transform:({red:t,green:e,blue:n,alpha:i=1})=>"rgba("+Fd.transform(t)+", "+Fd.transform(e)+", "+Fd.transform(n)+", "+yl(xl.transform(i))+")"};function XR(t){let e="",n="",i="",r="";return t.length>5?(e=t.substring(1,3),n=t.substring(3,5),i=t.substring(5,7),r=t.substring(7,9)):(e=t.substring(1,2),n=t.substring(2,3),i=t.substring(3,4),r=t.substring(4,5),e+=e,n+=n,i+=i,r+=r),{red:parseInt(e,16),green:parseInt(n,16),blue:parseInt(i,16),alpha:r?parseInt(r,16)/255:1}}const Pp={test:t0("#"),parse:XR,transform:$s.transform},Zo={test:t0("hsl","hue"),parse:A1("hue","saturation","lightness"),transform:({hue:t,saturation:e,lightness:n,alpha:i=1})=>"hsla("+Math.round(t)+", "+ji.transform(yl(e))+", "+ji.transform(yl(n))+", "+yl(xl.transform(i))+")"},yn={test:t=>$s.test(t)||Pp.test(t)||Zo.test(t),parse:t=>$s.test(t)?$s.parse(t):Zo.test(t)?Zo.parse(t):Pp.parse(t),transform:t=>cu(t)?t:t.hasOwnProperty("red")?$s.transform(t):Zo.transform(t)},St=(t,e,n)=>-n*t+n*e+t;function Od(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*(2/3-n)*6:t}function YR({hue:t,saturation:e,lightness:n,alpha:i}){t/=360,e/=100,n/=100;let r=0,s=0,o=0;if(!e)r=s=o=n;else{const a=n<.5?n*(1+e):n+e-n*e,l=2*n-a;r=Od(l,a,t+1/3),s=Od(l,a,t),o=Od(l,a,t-1/3)}return{red:Math.round(r*255),green:Math.round(s*255),blue:Math.round(o*255),alpha:i}}const kd=(t,e,n)=>{const i=t*t;return Math.sqrt(Math.max(0,n*(e*e-i)+i))},qR=[Pp,$s,Zo],$R=t=>qR.find(e=>e.test(t));function vv(t){const e=$R(t);let n=e.parse(t);return e===Zo&&(n=YR(n)),n}const C1=(t,e)=>{const n=vv(t),i=vv(e),r={...n};return s=>(r.red=kd(n.red,i.red,s),r.green=kd(n.green,i.green,s),r.blue=kd(n.blue,i.blue,s),r.alpha=St(n.alpha,i.alpha,s),$s.transform(r))};function KR(t){var e,n;return isNaN(t)&&cu(t)&&(((e=t.match(qf))===null||e===void 0?void 0:e.length)||0)+(((n=t.match(JM))===null||n===void 0?void 0:n.length)||0)>0}const R1={regex:HC,countKey:"Vars",token:"${v}",parse:Dt},b1={regex:JM,countKey:"Colors",token:"${c}",parse:yn.parse},P1={regex:qf,countKey:"Numbers",token:"${n}",parse:go.parse};function Bd(t,{regex:e,countKey:n,token:i,parse:r}){const s=t.tokenised.match(e);s&&(t["num"+n]=s.length,t.tokenised=t.tokenised.replace(e,i),t.values.push(...s.map(r)))}function uf(t){const e=t.toString(),n={value:e,tokenised:e,values:[],numVars:0,numColors:0,numNumbers:0};return n.value.includes("var(--")&&Bd(n,R1),Bd(n,b1),Bd(n,P1),n}function D1(t){return uf(t).values}function L1(t){const{values:e,numColors:n,numVars:i,tokenised:r}=uf(t),s=e.length;return o=>{let a=r;for(let l=0;l<s;l++)l<i?a=a.replace(R1.token,o[l]):l<i+n?a=a.replace(b1.token,yn.transform(o[l])):a=a.replace(P1.token,yl(o[l]));return a}}const jR=t=>typeof t=="number"?0:t;function ZR(t){const e=D1(t);return L1(t)(e.map(jR))}const vs={test:KR,parse:D1,createTransformer:L1,getAnimatableNone:ZR},I1=(t,e)=>n=>`${n>0?e:t}`;function N1(t,e){return typeof t=="number"?n=>St(t,e,n):yn.test(t)?C1(t,e):t.startsWith("var(")?I1(t,e):F1(t,e)}const U1=(t,e)=>{const n=[...t],i=n.length,r=t.map((s,o)=>N1(s,e[o]));return s=>{for(let o=0;o<i;o++)n[o]=r[o](s);return n}},QR=(t,e)=>{const n={...t,...e},i={};for(const r in n)t[r]!==void 0&&e[r]!==void 0&&(i[r]=N1(t[r],e[r]));return r=>{for(const s in i)n[s]=i[s](r);return n}},F1=(t,e)=>{const n=vs.createTransformer(e),i=uf(t),r=uf(e);return i.numVars===r.numVars&&i.numColors===r.numColors&&i.numNumbers>=r.numNumbers?fs(U1(i.values,r.values),n):I1(t,e)},Xl=(t,e,n)=>{const i=e-t;return i===0?1:(n-t)/i},xv=(t,e)=>n=>St(t,e,n);function JR(t){return typeof t=="number"?xv:typeof t=="string"?yn.test(t)?C1:F1:Array.isArray(t)?U1:typeof t=="object"?QR:xv}function eb(t,e,n){const i=[],r=n||JR(t[0]),s=t.length-1;for(let o=0;o<s;o++){let a=r(t[o],t[o+1]);if(e){const l=Array.isArray(e)?e[o]||Dt:e;a=fs(l,a)}i.push(a)}return i}function O1(t,e,{clamp:n=!0,ease:i,mixer:r}={}){const s=t.length;if(Qg(s===e.length),s===1)return()=>e[0];t[0]>t[s-1]&&(t=[...t].reverse(),e=[...e].reverse());const o=eb(e,i,r),a=o.length,l=u=>{let c=0;if(a>1)for(;c<t.length-2&&!(u<t[c+1]);c++);const f=Xl(t[c],t[c+1],u);return o[c](f)};return n?u=>l(_s(t[0],t[s-1],u)):l}function tb(t,e){const n=t[t.length-1];for(let i=1;i<=e;i++){const r=Xl(0,e,i);t.push(St(n,1,r))}}function nb(t){const e=[0];return tb(e,t.length-1),e}function ib(t,e){return t.map(n=>n*e)}function rb(t,e){return t.map(()=>e||S1).splice(0,t.length-1)}function cf({duration:t=300,keyframes:e,times:n,ease:i="easeInOut"}){const r=BR(i)?i.map(_v):_v(i),s={done:!1,value:e[0]},o=ib(n&&n.length===e.length?n:nb(e),t),a=O1(o,e,{ease:Array.isArray(r)?r:rb(e,r)});return{calculatedDuration:t,next:l=>(s.value=a(l),s.done=l>=t,s)}}function k1(t,e){return e?t*(1e3/e):0}const sb=5;function B1(t,e,n){const i=Math.max(e-sb,0);return k1(n-t(i),e-i)}const zd=.001,ob=.01,yv=10,ab=.05,lb=1;function ub({duration:t=800,bounce:e=.25,velocity:n=0,mass:i=1}){let r,s;PR(t<=ds(yv));let o=1-e;o=_s(ab,lb,o),t=_s(ob,yv,vr(t)),o<1?(r=u=>{const c=u*o,f=c*t,d=c-n,h=Dp(u,o),m=Math.exp(-f);return zd-d/h*m},s=u=>{const f=u*o*t,d=f*n+n,h=Math.pow(o,2)*Math.pow(u,2)*t,m=Math.exp(-f),g=Dp(Math.pow(u,2),o);return(-r(u)+zd>0?-1:1)*((d-h)*m)/g}):(r=u=>{const c=Math.exp(-u*t),f=(u-n)*t+1;return-zd+c*f},s=u=>{const c=Math.exp(-u*t),f=(n-u)*(t*t);return c*f});const a=5/t,l=fb(r,s,a);if(t=ds(t),isNaN(l))return{stiffness:100,damping:10,duration:t};{const u=Math.pow(l,2)*i;return{stiffness:u,damping:o*2*Math.sqrt(i*u),duration:t}}}const cb=12;function fb(t,e,n){let i=n;for(let r=1;r<cb;r++)i=i-t(i)/e(i);return i}function Dp(t,e){return t*Math.sqrt(1-e*e)}const db=["duration","bounce"],hb=["stiffness","damping","mass"];function Sv(t,e){return e.some(n=>t[n]!==void 0)}function pb(t){let e={velocity:0,stiffness:100,damping:10,mass:1,isResolvedFromDuration:!1,...t};if(!Sv(t,hb)&&Sv(t,db)){const n=ub(t);e={...e,...n,mass:1},e.isResolvedFromDuration=!0}return e}function z1({keyframes:t,restDelta:e,restSpeed:n,...i}){const r=t[0],s=t[t.length-1],o={done:!1,value:r},{stiffness:a,damping:l,mass:u,duration:c,velocity:f,isResolvedFromDuration:d}=pb({...i,velocity:-vr(i.velocity||0)}),h=f||0,m=l/(2*Math.sqrt(a*u)),g=s-r,_=vr(Math.sqrt(a/u)),p=Math.abs(g)<5;n||(n=p?.01:2),e||(e=p?.005:.5);let v;if(m<1){const x=Dp(_,m);v=S=>{const E=Math.exp(-m*_*S);return s-E*((h+m*_*g)/x*Math.sin(x*S)+g*Math.cos(x*S))}}else if(m===1)v=x=>s-Math.exp(-_*x)*(g+(h+_*g)*x);else{const x=_*Math.sqrt(m*m-1);v=S=>{const E=Math.exp(-m*_*S),T=Math.min(x*S,300);return s-E*((h+m*_*g)*Math.sinh(T)+x*g*Math.cosh(T))/x}}return{calculatedDuration:d&&c||null,next:x=>{const S=v(x);if(d)o.done=x>=c;else{let E=h;x!==0&&(m<1?E=B1(v,x,S):E=0);const T=Math.abs(E)<=n,A=Math.abs(s-S)<=e;o.done=T&&A}return o.value=o.done?s:S,o}}}function Mv({keyframes:t,velocity:e=0,power:n=.8,timeConstant:i=325,bounceDamping:r=10,bounceStiffness:s=500,modifyTarget:o,min:a,max:l,restDelta:u=.5,restSpeed:c}){const f=t[0],d={done:!1,value:f},h=y=>a!==void 0&&y<a||l!==void 0&&y>l,m=y=>a===void 0?l:l===void 0||Math.abs(a-y)<Math.abs(l-y)?a:l;let g=n*e;const _=f+g,p=o===void 0?_:o(_);p!==_&&(g=p-f);const v=y=>-g*Math.exp(-y/i),x=y=>p+v(y),S=y=>{const w=v(y),b=x(y);d.done=Math.abs(w)<=u,d.value=d.done?p:b};let E,T;const A=y=>{h(d.value)&&(E=y,T=z1({keyframes:[d.value,m(d.value)],velocity:B1(x,y,d.value),damping:r,stiffness:s,restDelta:u,restSpeed:c}))};return A(0),{calculatedDuration:null,next:y=>{let w=!1;return!T&&E===void 0&&(w=!0,S(y),A(y)),E!==void 0&&y>E?T.next(y-E):(!w&&S(y),d)}}}const mb=t=>{const e=({timestamp:n})=>t(n);return{start:()=>ht.update(e,!0),stop:()=>Ar(e),now:()=>dn.isProcessing?dn.timestamp:performance.now()}},Ev=2e4;function Tv(t){let e=0;const n=50;let i=t.next(e);for(;!i.done&&e<Ev;)e+=n,i=t.next(e);return e>=Ev?1/0:e}const gb={decay:Mv,inertia:Mv,tween:cf,keyframes:cf,spring:z1};function ff({autoplay:t=!0,delay:e=0,driver:n=mb,keyframes:i,type:r="keyframes",repeat:s=0,repeatDelay:o=0,repeatType:a="loop",onPlay:l,onStop:u,onComplete:c,onUpdate:f,...d}){let h=1,m=!1,g,_;const p=()=>{_=new Promise(Z=>{g=Z})};p();let v;const x=gb[r]||cf;let S;x!==cf&&typeof i[0]!="number"&&(S=O1([0,100],i,{clamp:!1}),i=[0,100]);const E=x({...d,keyframes:i});let T;a==="mirror"&&(T=x({...d,keyframes:[...i].reverse(),velocity:-(d.velocity||0)}));let A="idle",y=null,w=null,b=null;E.calculatedDuration===null&&s&&(E.calculatedDuration=Tv(E));const{calculatedDuration:P}=E;let D=1/0,z=1/0;P!==null&&(D=P+o,z=D*(s+1)-o);let X=0;const U=Z=>{if(w===null)return;h>0&&(w=Math.min(w,Z)),h<0&&(w=Math.min(Z-z/h,w)),y!==null?X=y:X=Math.round(Z-w)*h;const ne=X-e*(h>=0?1:-1),Oe=h>=0?ne<0:ne>z;X=Math.max(ne,0),A==="finished"&&y===null&&(X=z);let Fe=X,Ne=E;if(s){const be=Math.min(X,z)/D;let Le=Math.floor(be),Ee=be%1;!Ee&&be>=1&&(Ee=1),Ee===1&&Le--,Le=Math.min(Le,s+1),!!(Le%2)&&(a==="reverse"?(Ee=1-Ee,o&&(Ee-=o/D)):a==="mirror"&&(Ne=T)),Fe=_s(0,1,Ee)*D}const $=Oe?{done:!1,value:i[0]}:Ne.next(Fe);S&&($.value=S($.value));let{done:se}=$;!Oe&&P!==null&&(se=h>=0?X>=z:X<=0);const re=y===null&&(A==="finished"||A==="running"&&se);return f&&f($.value),re&&L(),$},B=()=>{v&&v.stop(),v=void 0},F=()=>{A="idle",B(),g(),p(),w=b=null},L=()=>{A="finished",c&&c(),B(),g()},Y=()=>{if(m)return;v||(v=n(U));const Z=v.now();l&&l(),y!==null?w=Z-y:(!w||A==="finished")&&(w=Z),A==="finished"&&p(),b=w,y=null,A="running",v.start()};t&&Y();const Q={then(Z,ne){return _.then(Z,ne)},get time(){return vr(X)},set time(Z){Z=ds(Z),X=Z,y!==null||!v||h===0?y=Z:w=v.now()-Z/h},get duration(){const Z=E.calculatedDuration===null?Tv(E):E.calculatedDuration;return vr(Z)},get speed(){return h},set speed(Z){Z===h||!v||(h=Z,Q.time=vr(X))},get state(){return A},play:Y,pause:()=>{A="paused",y=X},stop:()=>{m=!0,A!=="idle"&&(A="idle",u&&u(),F())},cancel:()=>{b!==null&&U(b),F()},complete:()=>{A="finished"},sample:Z=>(w=0,U(Z))};return Q}function _b(t){let e;return()=>(e===void 0&&(e=t()),e)}const vb=_b(()=>Object.hasOwnProperty.call(Element.prototype,"animate")),xb=new Set(["opacity","clipPath","filter","transform","backgroundColor"]),Bu=10,yb=2e4,Sb=(t,e)=>e.type==="spring"||t==="backgroundColor"||!_1(e.ease);function Mb(t,e,{onUpdate:n,onComplete:i,...r}){if(!(vb()&&xb.has(e)&&!r.repeatDelay&&r.repeatType!=="mirror"&&r.damping!==0&&r.type!=="inertia"))return!1;let o=!1,a,l,u=!1;const c=()=>{l=new Promise(x=>{a=x})};c();let{keyframes:f,duration:d=300,ease:h,times:m}=r;if(Sb(e,r)){const x=ff({...r,repeat:0,delay:0});let S={done:!1,value:f[0]};const E=[];let T=0;for(;!S.done&&T<yb;)S=x.sample(T),E.push(S.value),T+=Bu;m=void 0,f=E,d=T-Bu,h="linear"}const g=LR(t.owner.current,e,f,{...r,duration:d,ease:h,times:m}),_=()=>{u=!1,g.cancel()},p=()=>{u=!0,ht.update(_),a(),c()};return g.onfinish=()=>{u||(t.set(IR(f,r)),i&&i(),p())},{then(x,S){return l.then(x,S)},attachTimeline(x){return g.timeline=x,g.onfinish=null,Dt},get time(){return vr(g.currentTime||0)},set time(x){g.currentTime=ds(x)},get speed(){return g.playbackRate},set speed(x){g.playbackRate=x},get duration(){return vr(d)},play:()=>{o||(g.play(),Ar(_))},pause:()=>g.pause(),stop:()=>{if(o=!0,g.playState==="idle")return;const{currentTime:x}=g;if(x){const S=ff({...r,autoplay:!1});t.setWithVelocity(S.sample(x-Bu).value,S.sample(x).value,Bu)}p()},complete:()=>{u||g.finish()},cancel:p}}function Eb({keyframes:t,delay:e,onUpdate:n,onComplete:i}){const r=()=>(n&&n(t[t.length-1]),i&&i(),{time:0,speed:1,duration:0,play:Dt,pause:Dt,stop:Dt,then:s=>(s(),Promise.resolve()),cancel:Dt,complete:Dt});return e?ff({keyframes:[0,1],duration:0,delay:e,onComplete:r}):r()}const Tb={type:"spring",stiffness:500,damping:25,restSpeed:10},wb=t=>({type:"spring",stiffness:550,damping:t===0?2*Math.sqrt(550):30,restSpeed:10}),Ab={type:"keyframes",duration:.8},Cb={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},Rb=(t,{keyframes:e})=>e.length>2?Ab:mo.has(t)?t.startsWith("scale")?wb(e[1]):Tb:Cb,Lp=(t,e)=>t==="zIndex"?!1:!!(typeof e=="number"||Array.isArray(e)||typeof e=="string"&&(vs.test(e)||e==="0")&&!e.startsWith("url(")),bb=new Set(["brightness","contrast","saturate","opacity"]);function Pb(t){const[e,n]=t.slice(0,-1).split("(");if(e==="drop-shadow")return t;const[i]=n.match(qf)||[];if(!i)return t;const r=n.replace(i,"");let s=bb.has(e)?1:0;return i!==n&&(s*=100),e+"("+s+r+")"}const Db=/([a-z-]*)\(.*?\)/g,Ip={...vs,getAnimatableNone:t=>{const e=t.match(Db);return e?e.map(Pb).join(" "):t}},Lb={...e1,color:yn,backgroundColor:yn,outlineColor:yn,fill:yn,stroke:yn,borderColor:yn,borderTopColor:yn,borderRightColor:yn,borderBottomColor:yn,borderLeftColor:yn,filter:Ip,WebkitFilter:Ip},n0=t=>Lb[t];function V1(t,e){let n=n0(t);return n!==Ip&&(n=vs),n.getAnimatableNone?n.getAnimatableNone(e):void 0}const H1=t=>/^0[^.\s]+$/.test(t);function Ib(t){if(typeof t=="number")return t===0;if(t!==null)return t==="none"||t==="0"||H1(t)}function Nb(t,e,n,i){const r=Lp(e,n);let s;Array.isArray(n)?s=[...n]:s=[null,n];const o=i.from!==void 0?i.from:t.get();let a;const l=[];for(let u=0;u<s.length;u++)s[u]===null&&(s[u]=u===0?o:s[u-1]),Ib(s[u])&&l.push(u),typeof s[u]=="string"&&s[u]!=="none"&&s[u]!=="0"&&(a=s[u]);if(r&&l.length&&a)for(let u=0;u<l.length;u++){const c=l[u];s[c]=V1(e,a)}return s}function Ub({when:t,delay:e,delayChildren:n,staggerChildren:i,staggerDirection:r,repeat:s,repeatType:o,repeatDelay:a,from:l,elapsed:u,...c}){return!!Object.keys(c).length}function i0(t,e){return t[e]||t.default||t}const Fb={skipAnimations:!1},r0=(t,e,n,i={})=>r=>{const s=i0(i,t)||{},o=s.delay||i.delay||0;let{elapsed:a=0}=i;a=a-ds(o);const l=Nb(e,t,n,s),u=l[0],c=l[l.length-1],f=Lp(t,u),d=Lp(t,c);let h={keyframes:l,velocity:e.getVelocity(),ease:"easeOut",...s,delay:-a,onUpdate:m=>{e.set(m),s.onUpdate&&s.onUpdate(m)},onComplete:()=>{r(),s.onComplete&&s.onComplete()}};if(Ub(s)||(h={...h,...Rb(t,h)}),h.duration&&(h.duration=ds(h.duration)),h.repeatDelay&&(h.repeatDelay=ds(h.repeatDelay)),!f||!d||DR.current||s.type===!1||Fb.skipAnimations)return Eb(h);if(!i.isHandoff&&e.owner&&e.owner.current instanceof HTMLElement&&!e.owner.getProps().onUpdate){const m=Mb(e,t,h);if(m)return m}return ff(h)};function df(t){return!!(Bn(t)&&t.add)}const G1=t=>/^\-?\d*\.?\d+$/.test(t);function s0(t,e){t.indexOf(e)===-1&&t.push(e)}function o0(t,e){const n=t.indexOf(e);n>-1&&t.splice(n,1)}class a0{constructor(){this.subscriptions=[]}add(e){return s0(this.subscriptions,e),()=>o0(this.subscriptions,e)}notify(e,n,i){const r=this.subscriptions.length;if(r)if(r===1)this.subscriptions[0](e,n,i);else for(let s=0;s<r;s++){const o=this.subscriptions[s];o&&o(e,n,i)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const Ob=t=>!isNaN(parseFloat(t));class kb{constructor(e,n={}){this.version="10.18.0",this.timeDelta=0,this.lastUpdated=0,this.canTrackVelocity=!1,this.events={},this.updateAndNotify=(i,r=!0)=>{this.prev=this.current,this.current=i;const{delta:s,timestamp:o}=dn;this.lastUpdated!==o&&(this.timeDelta=s,this.lastUpdated=o,ht.postRender(this.scheduleVelocityCheck)),this.prev!==this.current&&this.events.change&&this.events.change.notify(this.current),this.events.velocityChange&&this.events.velocityChange.notify(this.getVelocity()),r&&this.events.renderRequest&&this.events.renderRequest.notify(this.current)},this.scheduleVelocityCheck=()=>ht.postRender(this.velocityCheck),this.velocityCheck=({timestamp:i})=>{i!==this.lastUpdated&&(this.prev=this.current,this.events.velocityChange&&this.events.velocityChange.notify(this.getVelocity()))},this.hasAnimated=!1,this.prev=this.current=e,this.canTrackVelocity=Ob(this.current),this.owner=n.owner}onChange(e){return this.on("change",e)}on(e,n){this.events[e]||(this.events[e]=new a0);const i=this.events[e].add(n);return e==="change"?()=>{i(),ht.read(()=>{this.events.change.getSize()||this.stop()})}:i}clearListeners(){for(const e in this.events)this.events[e].clear()}attach(e,n){this.passiveEffect=e,this.stopPassiveEffect=n}set(e,n=!0){!n||!this.passiveEffect?this.updateAndNotify(e,n):this.passiveEffect(e,this.updateAndNotify)}setWithVelocity(e,n,i){this.set(n),this.prev=e,this.timeDelta=i}jump(e){this.updateAndNotify(e),this.prev=e,this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}get(){return this.current}getPrevious(){return this.prev}getVelocity(){return this.canTrackVelocity?k1(parseFloat(this.current)-parseFloat(this.prev),this.timeDelta):0}start(e){return this.stop(),new Promise(n=>{this.hasAnimated=!0,this.animation=e(n),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function Sa(t,e){return new kb(t,e)}const W1=t=>e=>e.test(t),Bb={test:t=>t==="auto",parse:t=>t},X1=[go,De,ji,Gr,YC,XC,Bb],Xa=t=>X1.find(W1(t)),zb=[...X1,yn,vs],Vb=t=>zb.find(W1(t));function Hb(t,e,n){t.hasValue(e)?t.getValue(e).set(n):t.addValue(e,Sa(n))}function Gb(t,e){const n=Kf(t,e);let{transitionEnd:i={},transition:r={},...s}=n?t.makeTargetAnimatable(n,!1):{};s={...s,...i};for(const o in s){const a=oR(s[o]);Hb(t,o,a)}}function Wb(t,e,n){var i,r;const s=Object.keys(e).filter(a=>!t.hasValue(a)),o=s.length;if(o)for(let a=0;a<o;a++){const l=s[a],u=e[l];let c=null;Array.isArray(u)&&(c=u[0]),c===null&&(c=(r=(i=n[l])!==null&&i!==void 0?i:t.readValue(l))!==null&&r!==void 0?r:e[l]),c!=null&&(typeof c=="string"&&(G1(c)||H1(c))?c=parseFloat(c):!Vb(c)&&vs.test(u)&&(c=V1(l,u)),t.addValue(l,Sa(c,{owner:t})),n[l]===void 0&&(n[l]=c),c!==null&&t.setBaseTarget(l,c))}}function Xb(t,e){return e?(e[t]||e.default||e).from:void 0}function Yb(t,e,n){const i={};for(const r in t){const s=Xb(r,e);if(s!==void 0)i[r]=s;else{const o=n.getValue(r);o&&(i[r]=o.get())}}return i}function qb({protectedKeys:t,needsAnimating:e},n){const i=t.hasOwnProperty(n)&&e[n]!==!0;return e[n]=!1,i}function $b(t,e){const n=t.get();if(Array.isArray(e)){for(let i=0;i<e.length;i++)if(e[i]!==n)return!0}else return n!==e}function Y1(t,e,{delay:n=0,transitionOverride:i,type:r}={}){let{transition:s=t.getDefaultTransition(),transitionEnd:o,...a}=t.makeTargetAnimatable(e);const l=t.getValue("willChange");i&&(s=i);const u=[],c=r&&t.animationState&&t.animationState.getState()[r];for(const f in a){const d=t.getValue(f),h=a[f];if(!d||h===void 0||c&&qb(c,f))continue;const m={delay:n,elapsed:0,...i0(s||{},f)};if(window.HandoffAppearAnimations){const p=t.getProps()[qM];if(p){const v=window.HandoffAppearAnimations(p,f,d,ht);v!==null&&(m.elapsed=v,m.isHandoff=!0)}}let g=!m.isHandoff&&!$b(d,h);if(m.type==="spring"&&(d.getVelocity()||m.velocity)&&(g=!1),d.animation&&(g=!1),g)continue;d.start(r0(f,d,h,t.shouldReduceMotion&&mo.has(f)?{type:!1}:m));const _=d.animation;df(l)&&(l.add(f),_.then(()=>l.remove(f))),u.push(_)}return o&&Promise.all(u).then(()=>{o&&Gb(t,o)}),u}function Np(t,e,n={}){const i=Kf(t,e,n.custom);let{transition:r=t.getDefaultTransition()||{}}=i||{};n.transitionOverride&&(r=n.transitionOverride);const s=i?()=>Promise.all(Y1(t,i,n)):()=>Promise.resolve(),o=t.variantChildren&&t.variantChildren.size?(l=0)=>{const{delayChildren:u=0,staggerChildren:c,staggerDirection:f}=r;return Kb(t,e,u+l,c,f,n)}:()=>Promise.resolve(),{when:a}=r;if(a){const[l,u]=a==="beforeChildren"?[s,o]:[o,s];return l().then(()=>u())}else return Promise.all([s(),o(n.delay)])}function Kb(t,e,n=0,i=0,r=1,s){const o=[],a=(t.variantChildren.size-1)*i,l=r===1?(u=0)=>u*i:(u=0)=>a-u*i;return Array.from(t.variantChildren).sort(jb).forEach((u,c)=>{u.notify("AnimationStart",e),o.push(Np(u,e,{...s,delay:n+l(c)}).then(()=>u.notify("AnimationComplete",e)))}),Promise.all(o)}function jb(t,e){return t.sortNodePosition(e)}function Zb(t,e,n={}){t.notify("AnimationStart",e);let i;if(Array.isArray(e)){const r=e.map(s=>Np(t,s,n));i=Promise.all(r)}else if(typeof e=="string")i=Np(t,e,n);else{const r=typeof e=="function"?Kf(t,e,n.custom):e;i=Promise.all(Y1(t,r,n))}return i.then(()=>t.notify("AnimationComplete",e))}const Qb=[...Hg].reverse(),Jb=Hg.length;function eP(t){return e=>Promise.all(e.map(({animation:n,options:i})=>Zb(t,n,i)))}function tP(t){let e=eP(t);const n=iP();let i=!0;const r=(l,u)=>{const c=Kf(t,u);if(c){const{transition:f,transitionEnd:d,...h}=c;l={...l,...h,...d}}return l};function s(l){e=l(t)}function o(l,u){const c=t.getProps(),f=t.getVariantContext(!0)||{},d=[],h=new Set;let m={},g=1/0;for(let p=0;p<Jb;p++){const v=Qb[p],x=n[v],S=c[v]!==void 0?c[v]:f[v],E=Gl(S),T=v===u?x.isActive:null;T===!1&&(g=p);let A=S===f[v]&&S!==c[v]&&E;if(A&&i&&t.manuallyAnimateOnMount&&(A=!1),x.protectedKeys={...m},!x.isActive&&T===null||!S&&!x.prevProp||Xf(S)||typeof S=="boolean")continue;let w=nP(x.prevProp,S)||v===u&&x.isActive&&!A&&E||p>g&&E,b=!1;const P=Array.isArray(S)?S:[S];let D=P.reduce(r,{});T===!1&&(D={});const{prevResolvedValues:z={}}=x,X={...z,...D},U=B=>{w=!0,h.has(B)&&(b=!0,h.delete(B)),x.needsAnimating[B]=!0};for(const B in X){const F=D[B],L=z[B];if(m.hasOwnProperty(B))continue;let Y=!1;lf(F)&&lf(L)?Y=!m1(F,L):Y=F!==L,Y?F!==void 0?U(B):h.add(B):F!==void 0&&h.has(B)?U(B):x.protectedKeys[B]=!0}x.prevProp=S,x.prevResolvedValues=D,x.isActive&&(m={...m,...D}),i&&t.blockInitialAnimation&&(w=!1),w&&(!A||b)&&d.push(...P.map(B=>({animation:B,options:{type:v,...l}})))}if(h.size){const p={};h.forEach(v=>{const x=t.getBaseTarget(v);x!==void 0&&(p[v]=x)}),d.push({animation:p})}let _=!!d.length;return i&&(c.initial===!1||c.initial===c.animate)&&!t.manuallyAnimateOnMount&&(_=!1),i=!1,_?e(d):Promise.resolve()}function a(l,u,c){var f;if(n[l].isActive===u)return Promise.resolve();(f=t.variantChildren)===null||f===void 0||f.forEach(h=>{var m;return(m=h.animationState)===null||m===void 0?void 0:m.setActive(l,u)}),n[l].isActive=u;const d=o(c,l);for(const h in n)n[h].protectedKeys={};return d}return{animateChanges:o,setActive:a,setAnimateFunction:s,getState:()=>n}}function nP(t,e){return typeof e=="string"?e!==t:Array.isArray(e)?!m1(e,t):!1}function bs(t=!1){return{isActive:t,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function iP(){return{animate:bs(!0),whileInView:bs(),whileHover:bs(),whileTap:bs(),whileDrag:bs(),whileFocus:bs(),exit:bs()}}class rP extends As{constructor(e){super(e),e.animationState||(e.animationState=tP(e))}updateAnimationControlsSubscription(){const{animate:e}=this.node.getProps();this.unmount(),Xf(e)&&(this.unmount=e.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:e}=this.node.getProps(),{animate:n}=this.node.prevProps||{};e!==n&&this.updateAnimationControlsSubscription()}unmount(){}}let sP=0;class oP extends As{constructor(){super(...arguments),this.id=sP++}update(){if(!this.node.presenceContext)return;const{isPresent:e,onExitComplete:n,custom:i}=this.node.presenceContext,{isPresent:r}=this.node.prevPresenceContext||{};if(!this.node.animationState||e===r)return;const s=this.node.animationState.setActive("exit",!e,{custom:i??this.node.getProps().custom});n&&!e&&s.then(()=>n(this.id))}mount(){const{register:e}=this.node.presenceContext||{};e&&(this.unmount=e(this.id))}unmount(){}}const aP={animation:{Feature:rP},exit:{Feature:oP}},wv=(t,e)=>Math.abs(t-e);function lP(t,e){const n=wv(t.x,e.x),i=wv(t.y,e.y);return Math.sqrt(n**2+i**2)}class q1{constructor(e,n,{transformPagePoint:i,contextWindow:r,dragSnapToOrigin:s=!1}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const f=Hd(this.lastMoveEventInfo,this.history),d=this.startEvent!==null,h=lP(f.offset,{x:0,y:0})>=3;if(!d&&!h)return;const{point:m}=f,{timestamp:g}=dn;this.history.push({...m,timestamp:g});const{onStart:_,onMove:p}=this.handlers;d||(_&&_(this.lastMoveEvent,f),this.startEvent=this.lastMoveEvent),p&&p(this.lastMoveEvent,f)},this.handlePointerMove=(f,d)=>{this.lastMoveEvent=f,this.lastMoveEventInfo=Vd(d,this.transformPagePoint),ht.update(this.updatePoint,!0)},this.handlePointerUp=(f,d)=>{this.end();const{onEnd:h,onSessionEnd:m,resumeAnimation:g}=this.handlers;if(this.dragSnapToOrigin&&g&&g(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const _=Hd(f.type==="pointercancel"?this.lastMoveEventInfo:Vd(d,this.transformPagePoint),this.history);this.startEvent&&h&&h(f,_),m&&m(f,_)},!c1(e))return;this.dragSnapToOrigin=s,this.handlers=n,this.transformPagePoint=i,this.contextWindow=r||window;const o=$f(e),a=Vd(o,this.transformPagePoint),{point:l}=a,{timestamp:u}=dn;this.history=[{...l,timestamp:u}];const{onSessionStart:c}=n;c&&c(e,Hd(a,this.history)),this.removeListeners=fs(_r(this.contextWindow,"pointermove",this.handlePointerMove),_r(this.contextWindow,"pointerup",this.handlePointerUp),_r(this.contextWindow,"pointercancel",this.handlePointerUp))}updateHandlers(e){this.handlers=e}end(){this.removeListeners&&this.removeListeners(),Ar(this.updatePoint)}}function Vd(t,e){return e?{point:e(t.point)}:t}function Av(t,e){return{x:t.x-e.x,y:t.y-e.y}}function Hd({point:t},e){return{point:t,delta:Av(t,$1(e)),offset:Av(t,uP(e)),velocity:cP(e,.1)}}function uP(t){return t[0]}function $1(t){return t[t.length-1]}function cP(t,e){if(t.length<2)return{x:0,y:0};let n=t.length-1,i=null;const r=$1(t);for(;n>=0&&(i=t[n],!(r.timestamp-i.timestamp>ds(e)));)n--;if(!i)return{x:0,y:0};const s=vr(r.timestamp-i.timestamp);if(s===0)return{x:0,y:0};const o={x:(r.x-i.x)/s,y:(r.y-i.y)/s};return o.x===1/0&&(o.x=0),o.y===1/0&&(o.y=0),o}function ni(t){return t.max-t.min}function Up(t,e=0,n=.01){return Math.abs(t-e)<=n}function Cv(t,e,n,i=.5){t.origin=i,t.originPoint=St(e.min,e.max,t.origin),t.scale=ni(n)/ni(e),(Up(t.scale,1,1e-4)||isNaN(t.scale))&&(t.scale=1),t.translate=St(n.min,n.max,t.origin)-t.originPoint,(Up(t.translate)||isNaN(t.translate))&&(t.translate=0)}function Sl(t,e,n,i){Cv(t.x,e.x,n.x,i?i.originX:void 0),Cv(t.y,e.y,n.y,i?i.originY:void 0)}function Rv(t,e,n){t.min=n.min+e.min,t.max=t.min+ni(e)}function fP(t,e,n){Rv(t.x,e.x,n.x),Rv(t.y,e.y,n.y)}function bv(t,e,n){t.min=e.min-n.min,t.max=t.min+ni(e)}function Ml(t,e,n){bv(t.x,e.x,n.x),bv(t.y,e.y,n.y)}function dP(t,{min:e,max:n},i){return e!==void 0&&t<e?t=i?St(e,t,i.min):Math.max(t,e):n!==void 0&&t>n&&(t=i?St(n,t,i.max):Math.min(t,n)),t}function Pv(t,e,n){return{min:e!==void 0?t.min+e:void 0,max:n!==void 0?t.max+n-(t.max-t.min):void 0}}function hP(t,{top:e,left:n,bottom:i,right:r}){return{x:Pv(t.x,n,r),y:Pv(t.y,e,i)}}function Dv(t,e){let n=e.min-t.min,i=e.max-t.max;return e.max-e.min<t.max-t.min&&([n,i]=[i,n]),{min:n,max:i}}function pP(t,e){return{x:Dv(t.x,e.x),y:Dv(t.y,e.y)}}function mP(t,e){let n=.5;const i=ni(t),r=ni(e);return r>i?n=Xl(e.min,e.max-i,t.min):i>r&&(n=Xl(t.min,t.max-r,e.min)),_s(0,1,n)}function gP(t,e){const n={};return e.min!==void 0&&(n.min=e.min-t.min),e.max!==void 0&&(n.max=e.max-t.min),n}const Fp=.35;function _P(t=Fp){return t===!1?t=0:t===!0&&(t=Fp),{x:Lv(t,"left","right"),y:Lv(t,"top","bottom")}}function Lv(t,e,n){return{min:Iv(t,e),max:Iv(t,n)}}function Iv(t,e){return typeof t=="number"?t:t[e]||0}const Nv=()=>({translate:0,scale:1,origin:0,originPoint:0}),Qo=()=>({x:Nv(),y:Nv()}),Uv=()=>({min:0,max:0}),Vt=()=>({x:Uv(),y:Uv()});function ci(t){return[t("x"),t("y")]}function K1({top:t,left:e,right:n,bottom:i}){return{x:{min:e,max:n},y:{min:t,max:i}}}function vP({x:t,y:e}){return{top:e.min,right:t.max,bottom:e.max,left:t.min}}function xP(t,e){if(!e)return t;const n=e({x:t.left,y:t.top}),i=e({x:t.right,y:t.bottom});return{top:n.y,left:n.x,bottom:i.y,right:i.x}}function Gd(t){return t===void 0||t===1}function Op({scale:t,scaleX:e,scaleY:n}){return!Gd(t)||!Gd(e)||!Gd(n)}function ks(t){return Op(t)||j1(t)||t.z||t.rotate||t.rotateX||t.rotateY}function j1(t){return Fv(t.x)||Fv(t.y)}function Fv(t){return t&&t!=="0%"}function hf(t,e,n){const i=t-n,r=e*i;return n+r}function Ov(t,e,n,i,r){return r!==void 0&&(t=hf(t,r,i)),hf(t,n,i)+e}function kp(t,e=0,n=1,i,r){t.min=Ov(t.min,e,n,i,r),t.max=Ov(t.max,e,n,i,r)}function Z1(t,{x:e,y:n}){kp(t.x,e.translate,e.scale,e.originPoint),kp(t.y,n.translate,n.scale,n.originPoint)}function yP(t,e,n,i=!1){const r=n.length;if(!r)return;e.x=e.y=1;let s,o;for(let a=0;a<r;a++){s=n[a],o=s.projectionDelta;const l=s.instance;l&&l.style&&l.style.display==="contents"||(i&&s.options.layoutScroll&&s.scroll&&s!==s.root&&Jo(t,{x:-s.scroll.offset.x,y:-s.scroll.offset.y}),o&&(e.x*=o.x.scale,e.y*=o.y.scale,Z1(t,o)),i&&ks(s.latestValues)&&Jo(t,s.latestValues))}e.x=kv(e.x),e.y=kv(e.y)}function kv(t){return Number.isInteger(t)||t>1.0000000000001||t<.999999999999?t:1}function qr(t,e){t.min=t.min+e,t.max=t.max+e}function Bv(t,e,[n,i,r]){const s=e[r]!==void 0?e[r]:.5,o=St(t.min,t.max,s);kp(t,e[n],e[i],o,e.scale)}const SP=["x","scaleX","originX"],MP=["y","scaleY","originY"];function Jo(t,e){Bv(t.x,e,SP),Bv(t.y,e,MP)}function Q1(t,e){return K1(xP(t.getBoundingClientRect(),e))}function EP(t,e,n){const i=Q1(t,n),{scroll:r}=e;return r&&(qr(i.x,r.offset.x),qr(i.y,r.offset.y)),i}const J1=({current:t})=>t?t.ownerDocument.defaultView:null,TP=new WeakMap;class wP{constructor(e){this.openGlobalLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=Vt(),this.visualElement=e}start(e,{snapToCursor:n=!1}={}){const{presenceContext:i}=this.visualElement;if(i&&i.isPresent===!1)return;const r=c=>{const{dragSnapToOrigin:f}=this.getProps();f?this.pauseAnimation():this.stopAnimation(),n&&this.snapToCursor($f(c,"page").point)},s=(c,f)=>{const{drag:d,dragPropagation:h,onDragStart:m}=this.getProps();if(d&&!h&&(this.openGlobalLock&&this.openGlobalLock(),this.openGlobalLock=d1(d),!this.openGlobalLock))return;this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),ci(_=>{let p=this.getAxisMotionValue(_).get()||0;if(ji.test(p)){const{projection:v}=this.visualElement;if(v&&v.layout){const x=v.layout.layoutBox[_];x&&(p=ni(x)*(parseFloat(p)/100))}}this.originPoint[_]=p}),m&&ht.update(()=>m(c,f),!1,!0);const{animationState:g}=this.visualElement;g&&g.setActive("whileDrag",!0)},o=(c,f)=>{const{dragPropagation:d,dragDirectionLock:h,onDirectionLock:m,onDrag:g}=this.getProps();if(!d&&!this.openGlobalLock)return;const{offset:_}=f;if(h&&this.currentDirection===null){this.currentDirection=AP(_),this.currentDirection!==null&&m&&m(this.currentDirection);return}this.updateAxis("x",f.point,_),this.updateAxis("y",f.point,_),this.visualElement.render(),g&&g(c,f)},a=(c,f)=>this.stop(c,f),l=()=>ci(c=>{var f;return this.getAnimationState(c)==="paused"&&((f=this.getAxisMotionValue(c).animation)===null||f===void 0?void 0:f.play())}),{dragSnapToOrigin:u}=this.getProps();this.panSession=new q1(e,{onSessionStart:r,onStart:s,onMove:o,onSessionEnd:a,resumeAnimation:l},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:u,contextWindow:J1(this.visualElement)})}stop(e,n){const i=this.isDragging;if(this.cancel(),!i)return;const{velocity:r}=n;this.startAnimation(r);const{onDragEnd:s}=this.getProps();s&&ht.update(()=>s(e,n))}cancel(){this.isDragging=!1;const{projection:e,animationState:n}=this.visualElement;e&&(e.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:i}=this.getProps();!i&&this.openGlobalLock&&(this.openGlobalLock(),this.openGlobalLock=null),n&&n.setActive("whileDrag",!1)}updateAxis(e,n,i){const{drag:r}=this.getProps();if(!i||!zu(e,r,this.currentDirection))return;const s=this.getAxisMotionValue(e);let o=this.originPoint[e]+i[e];this.constraints&&this.constraints[e]&&(o=dP(o,this.constraints[e],this.elastic[e])),s.set(o)}resolveConstraints(){var e;const{dragConstraints:n,dragElastic:i}=this.getProps(),r=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(e=this.visualElement.projection)===null||e===void 0?void 0:e.layout,s=this.constraints;n&&jo(n)?this.constraints||(this.constraints=this.resolveRefConstraints()):n&&r?this.constraints=hP(r.layoutBox,n):this.constraints=!1,this.elastic=_P(i),s!==this.constraints&&r&&this.constraints&&!this.hasMutatedConstraints&&ci(o=>{this.getAxisMotionValue(o)&&(this.constraints[o]=gP(r.layoutBox[o],this.constraints[o]))})}resolveRefConstraints(){const{dragConstraints:e,onMeasureDragConstraints:n}=this.getProps();if(!e||!jo(e))return!1;const i=e.current,{projection:r}=this.visualElement;if(!r||!r.layout)return!1;const s=EP(i,r.root,this.visualElement.getTransformPagePoint());let o=pP(r.layout.layoutBox,s);if(n){const a=n(vP(o));this.hasMutatedConstraints=!!a,a&&(o=K1(a))}return o}startAnimation(e){const{drag:n,dragMomentum:i,dragElastic:r,dragTransition:s,dragSnapToOrigin:o,onDragTransitionEnd:a}=this.getProps(),l=this.constraints||{},u=ci(c=>{if(!zu(c,n,this.currentDirection))return;let f=l&&l[c]||{};o&&(f={min:0,max:0});const d=r?200:1e6,h=r?40:1e7,m={type:"inertia",velocity:i?e[c]:0,bounceStiffness:d,bounceDamping:h,timeConstant:750,restDelta:1,restSpeed:10,...s,...f};return this.startAxisValueAnimation(c,m)});return Promise.all(u).then(a)}startAxisValueAnimation(e,n){const i=this.getAxisMotionValue(e);return i.start(r0(e,i,0,n))}stopAnimation(){ci(e=>this.getAxisMotionValue(e).stop())}pauseAnimation(){ci(e=>{var n;return(n=this.getAxisMotionValue(e).animation)===null||n===void 0?void 0:n.pause()})}getAnimationState(e){var n;return(n=this.getAxisMotionValue(e).animation)===null||n===void 0?void 0:n.state}getAxisMotionValue(e){const n="_drag"+e.toUpperCase(),i=this.visualElement.getProps(),r=i[n];return r||this.visualElement.getValue(e,(i.initial?i.initial[e]:void 0)||0)}snapToCursor(e){ci(n=>{const{drag:i}=this.getProps();if(!zu(n,i,this.currentDirection))return;const{projection:r}=this.visualElement,s=this.getAxisMotionValue(n);if(r&&r.layout){const{min:o,max:a}=r.layout.layoutBox[n];s.set(e[n]-St(o,a,.5))}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:e,dragConstraints:n}=this.getProps(),{projection:i}=this.visualElement;if(!jo(n)||!i||!this.constraints)return;this.stopAnimation();const r={x:0,y:0};ci(o=>{const a=this.getAxisMotionValue(o);if(a){const l=a.get();r[o]=mP({min:l,max:l},this.constraints[o])}});const{transformTemplate:s}=this.visualElement.getProps();this.visualElement.current.style.transform=s?s({},""):"none",i.root&&i.root.updateScroll(),i.updateLayout(),this.resolveConstraints(),ci(o=>{if(!zu(o,e,null))return;const a=this.getAxisMotionValue(o),{min:l,max:u}=this.constraints[o];a.set(St(l,u,r[o]))})}addListeners(){if(!this.visualElement.current)return;TP.set(this.visualElement,this);const e=this.visualElement.current,n=_r(e,"pointerdown",l=>{const{drag:u,dragListener:c=!0}=this.getProps();u&&c&&this.start(l)}),i=()=>{const{dragConstraints:l}=this.getProps();jo(l)&&(this.constraints=this.resolveRefConstraints())},{projection:r}=this.visualElement,s=r.addEventListener("measure",i);r&&!r.layout&&(r.root&&r.root.updateScroll(),r.updateLayout()),i();const o=pr(window,"resize",()=>this.scalePositionWithinConstraints()),a=r.addEventListener("didUpdate",({delta:l,hasLayoutChanged:u})=>{this.isDragging&&u&&(ci(c=>{const f=this.getAxisMotionValue(c);f&&(this.originPoint[c]+=l[c].translate,f.set(f.get()+l[c].translate))}),this.visualElement.render())});return()=>{o(),n(),s(),a&&a()}}getProps(){const e=this.visualElement.getProps(),{drag:n=!1,dragDirectionLock:i=!1,dragPropagation:r=!1,dragConstraints:s=!1,dragElastic:o=Fp,dragMomentum:a=!0}=e;return{...e,drag:n,dragDirectionLock:i,dragPropagation:r,dragConstraints:s,dragElastic:o,dragMomentum:a}}}function zu(t,e,n){return(e===!0||e===t)&&(n===null||n===t)}function AP(t,e=10){let n=null;return Math.abs(t.y)>e?n="y":Math.abs(t.x)>e&&(n="x"),n}class CP extends As{constructor(e){super(e),this.removeGroupControls=Dt,this.removeListeners=Dt,this.controls=new wP(e)}mount(){const{dragControls:e}=this.node.getProps();e&&(this.removeGroupControls=e.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||Dt}unmount(){this.removeGroupControls(),this.removeListeners()}}const zv=t=>(e,n)=>{t&&ht.update(()=>t(e,n))};class RP extends As{constructor(){super(...arguments),this.removePointerDownListener=Dt}onPointerDown(e){this.session=new q1(e,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:J1(this.node)})}createPanHandlers(){const{onPanSessionStart:e,onPanStart:n,onPan:i,onPanEnd:r}=this.node.getProps();return{onSessionStart:zv(e),onStart:zv(n),onMove:i,onEnd:(s,o)=>{delete this.session,r&&ht.update(()=>r(s,o))}}}mount(){this.removePointerDownListener=_r(this.node.current,"pointerdown",e=>this.onPointerDown(e))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}function bP(){const t=oe.useContext(Gf);if(t===null)return[!0,null];const{isPresent:e,onExitComplete:n,register:i}=t,r=oe.useId();return oe.useEffect(()=>i(r),[]),!e&&n?[!1,()=>n&&n(r)]:[!0]}const wc={hasAnimatedSinceResize:!0,hasEverUpdated:!1};function Vv(t,e){return e.max===e.min?0:t/(e.max-e.min)*100}const Ya={correct:(t,e)=>{if(!e.target)return t;if(typeof t=="string")if(De.test(t))t=parseFloat(t);else return t;const n=Vv(t,e.target.x),i=Vv(t,e.target.y);return`${n}% ${i}%`}},PP={correct:(t,{treeScale:e,projectionDelta:n})=>{const i=t,r=vs.parse(t);if(r.length>5)return i;const s=vs.createTransformer(t),o=typeof r[0]!="number"?1:0,a=n.x.scale*e.x,l=n.y.scale*e.y;r[0+o]/=a,r[1+o]/=l;const u=St(a,l,.5);return typeof r[2+o]=="number"&&(r[2+o]/=u),typeof r[3+o]=="number"&&(r[3+o]/=u),s(r)}};class DP extends Km.Component{componentDidMount(){const{visualElement:e,layoutGroup:n,switchLayoutGroup:i,layoutId:r}=this.props,{projection:s}=e;kC(LP),s&&(n.group&&n.group.add(s),i&&i.register&&r&&i.register(s),s.root.didUpdate(),s.addEventListener("animationComplete",()=>{this.safeToRemove()}),s.setOptions({...s.options,onExitComplete:()=>this.safeToRemove()})),wc.hasEverUpdated=!0}getSnapshotBeforeUpdate(e){const{layoutDependency:n,visualElement:i,drag:r,isPresent:s}=this.props,o=i.projection;return o&&(o.isPresent=s,r||e.layoutDependency!==n||n===void 0?o.willUpdate():this.safeToRemove(),e.isPresent!==s&&(s?o.promote():o.relegate()||ht.postRender(()=>{const a=o.getStack();(!a||!a.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:e}=this.props.visualElement;e&&(e.root.didUpdate(),queueMicrotask(()=>{!e.currentAnimation&&e.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:e,layoutGroup:n,switchLayoutGroup:i}=this.props,{projection:r}=e;r&&(r.scheduleCheckAfterUnmount(),n&&n.group&&n.group.remove(r),i&&i.deregister&&i.deregister(r))}safeToRemove(){const{safeToRemove:e}=this.props;e&&e()}render(){return null}}function eE(t){const[e,n]=bP(),i=oe.useContext(Wg);return Km.createElement(DP,{...t,layoutGroup:i,switchLayoutGroup:oe.useContext(KM),isPresent:e,safeToRemove:n})}const LP={borderRadius:{...Ya,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:Ya,borderTopRightRadius:Ya,borderBottomLeftRadius:Ya,borderBottomRightRadius:Ya,boxShadow:PP},tE=["TopLeft","TopRight","BottomLeft","BottomRight"],IP=tE.length,Hv=t=>typeof t=="string"?parseFloat(t):t,Gv=t=>typeof t=="number"||De.test(t);function NP(t,e,n,i,r,s){r?(t.opacity=St(0,n.opacity!==void 0?n.opacity:1,UP(i)),t.opacityExit=St(e.opacity!==void 0?e.opacity:1,0,FP(i))):s&&(t.opacity=St(e.opacity!==void 0?e.opacity:1,n.opacity!==void 0?n.opacity:1,i));for(let o=0;o<IP;o++){const a=`border${tE[o]}Radius`;let l=Wv(e,a),u=Wv(n,a);if(l===void 0&&u===void 0)continue;l||(l=0),u||(u=0),l===0||u===0||Gv(l)===Gv(u)?(t[a]=Math.max(St(Hv(l),Hv(u),i),0),(ji.test(u)||ji.test(l))&&(t[a]+="%")):t[a]=u}(e.rotate||n.rotate)&&(t.rotate=St(e.rotate||0,n.rotate||0,i))}function Wv(t,e){return t[e]!==void 0?t[e]:t.borderRadius}const UP=nE(0,.5,T1),FP=nE(.5,.95,Dt);function nE(t,e,n){return i=>i<t?0:i>e?1:n(Xl(t,e,i))}function Xv(t,e){t.min=e.min,t.max=e.max}function li(t,e){Xv(t.x,e.x),Xv(t.y,e.y)}function Yv(t,e,n,i,r){return t-=e,t=hf(t,1/n,i),r!==void 0&&(t=hf(t,1/r,i)),t}function OP(t,e=0,n=1,i=.5,r,s=t,o=t){if(ji.test(e)&&(e=parseFloat(e),e=St(o.min,o.max,e/100)-o.min),typeof e!="number")return;let a=St(s.min,s.max,i);t===s&&(a-=e),t.min=Yv(t.min,e,n,a,r),t.max=Yv(t.max,e,n,a,r)}function qv(t,e,[n,i,r],s,o){OP(t,e[n],e[i],e[r],e.scale,s,o)}const kP=["x","scaleX","originX"],BP=["y","scaleY","originY"];function $v(t,e,n,i){qv(t.x,e,kP,n?n.x:void 0,i?i.x:void 0),qv(t.y,e,BP,n?n.y:void 0,i?i.y:void 0)}function Kv(t){return t.translate===0&&t.scale===1}function iE(t){return Kv(t.x)&&Kv(t.y)}function zP(t,e){return t.x.min===e.x.min&&t.x.max===e.x.max&&t.y.min===e.y.min&&t.y.max===e.y.max}function rE(t,e){return Math.round(t.x.min)===Math.round(e.x.min)&&Math.round(t.x.max)===Math.round(e.x.max)&&Math.round(t.y.min)===Math.round(e.y.min)&&Math.round(t.y.max)===Math.round(e.y.max)}function jv(t){return ni(t.x)/ni(t.y)}class VP{constructor(){this.members=[]}add(e){s0(this.members,e),e.scheduleRender()}remove(e){if(o0(this.members,e),e===this.prevLead&&(this.prevLead=void 0),e===this.lead){const n=this.members[this.members.length-1];n&&this.promote(n)}}relegate(e){const n=this.members.findIndex(r=>e===r);if(n===0)return!1;let i;for(let r=n;r>=0;r--){const s=this.members[r];if(s.isPresent!==!1){i=s;break}}return i?(this.promote(i),!0):!1}promote(e,n){const i=this.lead;if(e!==i&&(this.prevLead=i,this.lead=e,e.show(),i)){i.instance&&i.scheduleRender(),e.scheduleRender(),e.resumeFrom=i,n&&(e.resumeFrom.preserveOpacity=!0),i.snapshot&&(e.snapshot=i.snapshot,e.snapshot.latestValues=i.animationValues||i.latestValues),e.root&&e.root.isUpdating&&(e.isLayoutDirty=!0);const{crossfade:r}=e.options;r===!1&&i.hide()}}exitAnimationComplete(){this.members.forEach(e=>{const{options:n,resumingFrom:i}=e;n.onExitComplete&&n.onExitComplete(),i&&i.options.onExitComplete&&i.options.onExitComplete()})}scheduleRender(){this.members.forEach(e=>{e.instance&&e.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}function Zv(t,e,n){let i="";const r=t.x.translate/e.x,s=t.y.translate/e.y;if((r||s)&&(i=`translate3d(${r}px, ${s}px, 0) `),(e.x!==1||e.y!==1)&&(i+=`scale(${1/e.x}, ${1/e.y}) `),n){const{rotate:l,rotateX:u,rotateY:c}=n;l&&(i+=`rotate(${l}deg) `),u&&(i+=`rotateX(${u}deg) `),c&&(i+=`rotateY(${c}deg) `)}const o=t.x.scale*e.x,a=t.y.scale*e.y;return(o!==1||a!==1)&&(i+=`scale(${o}, ${a})`),i||"none"}const HP=(t,e)=>t.depth-e.depth;class GP{constructor(){this.children=[],this.isDirty=!1}add(e){s0(this.children,e),this.isDirty=!0}remove(e){o0(this.children,e),this.isDirty=!0}forEach(e){this.isDirty&&this.children.sort(HP),this.isDirty=!1,this.children.forEach(e)}}function WP(t,e){const n=performance.now(),i=({timestamp:r})=>{const s=r-n;s>=e&&(Ar(i),t(s-e))};return ht.read(i,!0),()=>Ar(i)}function XP(t){window.MotionDebug&&window.MotionDebug.record(t)}function YP(t){return t instanceof SVGElement&&t.tagName!=="svg"}function qP(t,e,n){const i=Bn(t)?t:Sa(t);return i.start(r0("",i,e,n)),i.animation}const Qv=["","X","Y","Z"],$P={visibility:"hidden"},Jv=1e3;let KP=0;const Bs={type:"projectionFrame",totalNodes:0,resolvedTargetDeltas:0,recalculatedProjection:0};function sE({attachResizeListener:t,defaultParent:e,measureScroll:n,checkIsScrollRoot:i,resetTransform:r}){return class{constructor(o={},a=e==null?void 0:e()){this.id=KP++,this.animationId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.updateScheduled=!1,this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,Bs.totalNodes=Bs.resolvedTargetDeltas=Bs.recalculatedProjection=0,this.nodes.forEach(QP),this.nodes.forEach(i3),this.nodes.forEach(r3),this.nodes.forEach(JP),XP(Bs)},this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=o,this.root=a?a.root||a:this,this.path=a?[...a.path,a]:[],this.parent=a,this.depth=a?a.depth+1:0;for(let l=0;l<this.path.length;l++)this.path[l].shouldResetTransform=!0;this.root===this&&(this.nodes=new GP)}addEventListener(o,a){return this.eventHandlers.has(o)||this.eventHandlers.set(o,new a0),this.eventHandlers.get(o).add(a)}notifyListeners(o,...a){const l=this.eventHandlers.get(o);l&&l.notify(...a)}hasListeners(o){return this.eventHandlers.has(o)}mount(o,a=this.root.hasTreeAnimated){if(this.instance)return;this.isSVG=YP(o),this.instance=o;const{layoutId:l,layout:u,visualElement:c}=this.options;if(c&&!c.current&&c.mount(o),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),a&&(u||l)&&(this.isLayoutDirty=!0),t){let f;const d=()=>this.root.updateBlockedByResize=!1;t(o,()=>{this.root.updateBlockedByResize=!0,f&&f(),f=WP(d,250),wc.hasAnimatedSinceResize&&(wc.hasAnimatedSinceResize=!1,this.nodes.forEach(tx))})}l&&this.root.registerSharedNode(l,this),this.options.animate!==!1&&c&&(l||u)&&this.addEventListener("didUpdate",({delta:f,hasLayoutChanged:d,hasRelativeTargetChanged:h,layout:m})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const g=this.options.transition||c.getDefaultTransition()||u3,{onLayoutAnimationStart:_,onLayoutAnimationComplete:p}=c.getProps(),v=!this.targetLayout||!rE(this.targetLayout,m)||h,x=!d&&h;if(this.options.layoutRoot||this.resumeFrom&&this.resumeFrom.instance||x||d&&(v||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0),this.setAnimationOrigin(f,x);const S={...i0(g,"layout"),onPlay:_,onComplete:p};(c.shouldReduceMotion||this.options.layoutRoot)&&(S.delay=0,S.type=!1),this.startAnimation(S)}else d||tx(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=m})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const o=this.getStack();o&&o.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,Ar(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(s3),this.animationId++)}getTransformTemplate(){const{visualElement:o}=this.options;return o&&o.getProps().transformTemplate}willUpdate(o=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let c=0;c<this.path.length;c++){const f=this.path[c];f.shouldResetTransform=!0,f.updateScroll("snapshot"),f.options.layoutRoot&&f.willUpdate(!1)}const{layoutId:a,layout:l}=this.options;if(a===void 0&&!l)return;const u=this.getTransformTemplate();this.prevTransformTemplateValue=u?u(this.latestValues,""):void 0,this.updateSnapshot(),o&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(ex);return}this.isUpdating||this.nodes.forEach(t3),this.isUpdating=!1,this.nodes.forEach(n3),this.nodes.forEach(jP),this.nodes.forEach(ZP),this.clearAllSnapshots();const a=performance.now();dn.delta=_s(0,1e3/60,a-dn.timestamp),dn.timestamp=a,dn.isProcessing=!0,Id.update.process(dn),Id.preRender.process(dn),Id.render.process(dn),dn.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,queueMicrotask(()=>this.update()))}clearAllSnapshots(){this.nodes.forEach(e3),this.sharedNodes.forEach(o3)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,ht.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){ht.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure())}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let l=0;l<this.path.length;l++)this.path[l].updateScroll();const o=this.layout;this.layout=this.measure(!1),this.layoutCorrected=Vt(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:a}=this.options;a&&a.notify("LayoutMeasure",this.layout.layoutBox,o?o.layoutBox:void 0)}updateScroll(o="measure"){let a=!!(this.options.layoutScroll&&this.instance);this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===o&&(a=!1),a&&(this.scroll={animationId:this.root.animationId,phase:o,isRoot:i(this.instance),offset:n(this.instance)})}resetTransform(){if(!r)return;const o=this.isLayoutDirty||this.shouldResetTransform,a=this.projectionDelta&&!iE(this.projectionDelta),l=this.getTransformTemplate(),u=l?l(this.latestValues,""):void 0,c=u!==this.prevTransformTemplateValue;o&&(a||ks(this.latestValues)||c)&&(r(this.instance,u),this.shouldResetTransform=!1,this.scheduleRender())}measure(o=!0){const a=this.measurePageBox();let l=this.removeElementScroll(a);return o&&(l=this.removeTransform(l)),c3(l),{animationId:this.root.animationId,measuredBox:a,layoutBox:l,latestValues:{},source:this.id}}measurePageBox(){const{visualElement:o}=this.options;if(!o)return Vt();const a=o.measureViewportBox(),{scroll:l}=this.root;return l&&(qr(a.x,l.offset.x),qr(a.y,l.offset.y)),a}removeElementScroll(o){const a=Vt();li(a,o);for(let l=0;l<this.path.length;l++){const u=this.path[l],{scroll:c,options:f}=u;if(u!==this.root&&c&&f.layoutScroll){if(c.isRoot){li(a,o);const{scroll:d}=this.root;d&&(qr(a.x,-d.offset.x),qr(a.y,-d.offset.y))}qr(a.x,c.offset.x),qr(a.y,c.offset.y)}}return a}applyTransform(o,a=!1){const l=Vt();li(l,o);for(let u=0;u<this.path.length;u++){const c=this.path[u];!a&&c.options.layoutScroll&&c.scroll&&c!==c.root&&Jo(l,{x:-c.scroll.offset.x,y:-c.scroll.offset.y}),ks(c.latestValues)&&Jo(l,c.latestValues)}return ks(this.latestValues)&&Jo(l,this.latestValues),l}removeTransform(o){const a=Vt();li(a,o);for(let l=0;l<this.path.length;l++){const u=this.path[l];if(!u.instance||!ks(u.latestValues))continue;Op(u.latestValues)&&u.updateSnapshot();const c=Vt(),f=u.measurePageBox();li(c,f),$v(a,u.latestValues,u.snapshot?u.snapshot.layoutBox:void 0,c)}return ks(this.latestValues)&&$v(a,this.latestValues),a}setTargetDelta(o){this.targetDelta=o,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(o){this.options={...this.options,...o,crossfade:o.crossfade!==void 0?o.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==dn.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(o=!1){var a;const l=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=l.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=l.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=l.isSharedProjectionDirty);const u=!!this.resumingFrom||this!==l;if(!(o||u&&this.isSharedProjectionDirty||this.isProjectionDirty||!((a=this.parent)===null||a===void 0)&&a.isProjectionDirty||this.attemptToResolveRelativeTarget))return;const{layout:f,layoutId:d}=this.options;if(!(!this.layout||!(f||d))){if(this.resolvedRelativeTargetAt=dn.timestamp,!this.targetDelta&&!this.relativeTarget){const h=this.getClosestProjectingParent();h&&h.layout&&this.animationProgress!==1?(this.relativeParent=h,this.forceRelativeParentToResolveTarget(),this.relativeTarget=Vt(),this.relativeTargetOrigin=Vt(),Ml(this.relativeTargetOrigin,this.layout.layoutBox,h.layout.layoutBox),li(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}if(!(!this.relativeTarget&&!this.targetDelta)){if(this.target||(this.target=Vt(),this.targetWithTransforms=Vt()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),fP(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):li(this.target,this.layout.layoutBox),Z1(this.target,this.targetDelta)):li(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget){this.attemptToResolveRelativeTarget=!1;const h=this.getClosestProjectingParent();h&&!!h.resumingFrom==!!this.resumingFrom&&!h.options.layoutScroll&&h.target&&this.animationProgress!==1?(this.relativeParent=h,this.forceRelativeParentToResolveTarget(),this.relativeTarget=Vt(),this.relativeTargetOrigin=Vt(),Ml(this.relativeTargetOrigin,this.target,h.target),li(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}Bs.resolvedTargetDeltas++}}}getClosestProjectingParent(){if(!(!this.parent||Op(this.parent.latestValues)||j1(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}calcProjection(){var o;const a=this.getLead(),l=!!this.resumingFrom||this!==a;let u=!0;if((this.isProjectionDirty||!((o=this.parent)===null||o===void 0)&&o.isProjectionDirty)&&(u=!1),l&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(u=!1),this.resolvedRelativeTargetAt===dn.timestamp&&(u=!1),u)return;const{layout:c,layoutId:f}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(c||f))return;li(this.layoutCorrected,this.layout.layoutBox);const d=this.treeScale.x,h=this.treeScale.y;yP(this.layoutCorrected,this.treeScale,this.path,l),a.layout&&!a.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(a.target=a.layout.layoutBox);const{target:m}=a;if(!m){this.projectionTransform&&(this.projectionDelta=Qo(),this.projectionTransform="none",this.scheduleRender());return}this.projectionDelta||(this.projectionDelta=Qo(),this.projectionDeltaWithTransform=Qo());const g=this.projectionTransform;Sl(this.projectionDelta,this.layoutCorrected,m,this.latestValues),this.projectionTransform=Zv(this.projectionDelta,this.treeScale),(this.projectionTransform!==g||this.treeScale.x!==d||this.treeScale.y!==h)&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",m)),Bs.recalculatedProjection++}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(o=!0){if(this.options.scheduleRender&&this.options.scheduleRender(),o){const a=this.getStack();a&&a.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}setAnimationOrigin(o,a=!1){const l=this.snapshot,u=l?l.latestValues:{},c={...this.latestValues},f=Qo();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!a;const d=Vt(),h=l?l.source:void 0,m=this.layout?this.layout.source:void 0,g=h!==m,_=this.getStack(),p=!_||_.members.length<=1,v=!!(g&&!p&&this.options.crossfade===!0&&!this.path.some(l3));this.animationProgress=0;let x;this.mixTargetDelta=S=>{const E=S/1e3;nx(f.x,o.x,E),nx(f.y,o.y,E),this.setTargetDelta(f),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(Ml(d,this.layout.layoutBox,this.relativeParent.layout.layoutBox),a3(this.relativeTarget,this.relativeTargetOrigin,d,E),x&&zP(this.relativeTarget,x)&&(this.isProjectionDirty=!1),x||(x=Vt()),li(x,this.relativeTarget)),g&&(this.animationValues=c,NP(c,u,this.latestValues,E,v,p)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=E},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(o){this.notifyListeners("animationStart"),this.currentAnimation&&this.currentAnimation.stop(),this.resumingFrom&&this.resumingFrom.currentAnimation&&this.resumingFrom.currentAnimation.stop(),this.pendingAnimation&&(Ar(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=ht.update(()=>{wc.hasAnimatedSinceResize=!0,this.currentAnimation=qP(0,Jv,{...o,onUpdate:a=>{this.mixTargetDelta(a),o.onUpdate&&o.onUpdate(a)},onComplete:()=>{o.onComplete&&o.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const o=this.getStack();o&&o.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(Jv),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const o=this.getLead();let{targetWithTransforms:a,target:l,layout:u,latestValues:c}=o;if(!(!a||!l||!u)){if(this!==o&&this.layout&&u&&oE(this.options.animationType,this.layout.layoutBox,u.layoutBox)){l=this.target||Vt();const f=ni(this.layout.layoutBox.x);l.x.min=o.target.x.min,l.x.max=l.x.min+f;const d=ni(this.layout.layoutBox.y);l.y.min=o.target.y.min,l.y.max=l.y.min+d}li(a,l),Jo(a,c),Sl(this.projectionDeltaWithTransform,this.layoutCorrected,a,c)}}registerSharedNode(o,a){this.sharedNodes.has(o)||this.sharedNodes.set(o,new VP),this.sharedNodes.get(o).add(a);const u=a.options.initialPromotionConfig;a.promote({transition:u?u.transition:void 0,preserveFollowOpacity:u&&u.shouldPreserveFollowOpacity?u.shouldPreserveFollowOpacity(a):void 0})}isLead(){const o=this.getStack();return o?o.lead===this:!0}getLead(){var o;const{layoutId:a}=this.options;return a?((o=this.getStack())===null||o===void 0?void 0:o.lead)||this:this}getPrevLead(){var o;const{layoutId:a}=this.options;return a?(o=this.getStack())===null||o===void 0?void 0:o.prevLead:void 0}getStack(){const{layoutId:o}=this.options;if(o)return this.root.sharedNodes.get(o)}promote({needsReset:o,transition:a,preserveFollowOpacity:l}={}){const u=this.getStack();u&&u.promote(this,l),o&&(this.projectionDelta=void 0,this.needsReset=!0),a&&this.setOptions({transition:a})}relegate(){const o=this.getStack();return o?o.relegate(this):!1}resetRotation(){const{visualElement:o}=this.options;if(!o)return;let a=!1;const{latestValues:l}=o;if((l.rotate||l.rotateX||l.rotateY||l.rotateZ)&&(a=!0),!a)return;const u={};for(let c=0;c<Qv.length;c++){const f="rotate"+Qv[c];l[f]&&(u[f]=l[f],o.setStaticValue(f,0))}o.render();for(const c in u)o.setStaticValue(c,u[c]);o.scheduleRender()}getProjectionStyles(o){var a,l;if(!this.instance||this.isSVG)return;if(!this.isVisible)return $P;const u={visibility:""},c=this.getTransformTemplate();if(this.needsReset)return this.needsReset=!1,u.opacity="",u.pointerEvents=Tc(o==null?void 0:o.pointerEvents)||"",u.transform=c?c(this.latestValues,""):"none",u;const f=this.getLead();if(!this.projectionDelta||!this.layout||!f.target){const g={};return this.options.layoutId&&(g.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,g.pointerEvents=Tc(o==null?void 0:o.pointerEvents)||""),this.hasProjected&&!ks(this.latestValues)&&(g.transform=c?c({},""):"none",this.hasProjected=!1),g}const d=f.animationValues||f.latestValues;this.applyTransformsToTarget(),u.transform=Zv(this.projectionDeltaWithTransform,this.treeScale,d),c&&(u.transform=c(d,u.transform));const{x:h,y:m}=this.projectionDelta;u.transformOrigin=`${h.origin*100}% ${m.origin*100}% 0`,f.animationValues?u.opacity=f===this?(l=(a=d.opacity)!==null&&a!==void 0?a:this.latestValues.opacity)!==null&&l!==void 0?l:1:this.preserveOpacity?this.latestValues.opacity:d.opacityExit:u.opacity=f===this?d.opacity!==void 0?d.opacity:"":d.opacityExit!==void 0?d.opacityExit:0;for(const g in of){if(d[g]===void 0)continue;const{correct:_,applyTo:p}=of[g],v=u.transform==="none"?d[g]:_(d[g],f);if(p){const x=p.length;for(let S=0;S<x;S++)u[p[S]]=v}else u[g]=v}return this.options.layoutId&&(u.pointerEvents=f===this?Tc(o==null?void 0:o.pointerEvents)||"":"none"),u}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(o=>{var a;return(a=o.currentAnimation)===null||a===void 0?void 0:a.stop()}),this.root.nodes.forEach(ex),this.root.sharedNodes.clear()}}}function jP(t){t.updateLayout()}function ZP(t){var e;const n=((e=t.resumeFrom)===null||e===void 0?void 0:e.snapshot)||t.snapshot;if(t.isLead()&&t.layout&&n&&t.hasListeners("didUpdate")){const{layoutBox:i,measuredBox:r}=t.layout,{animationType:s}=t.options,o=n.source!==t.layout.source;s==="size"?ci(f=>{const d=o?n.measuredBox[f]:n.layoutBox[f],h=ni(d);d.min=i[f].min,d.max=d.min+h}):oE(s,n.layoutBox,i)&&ci(f=>{const d=o?n.measuredBox[f]:n.layoutBox[f],h=ni(i[f]);d.max=d.min+h,t.relativeTarget&&!t.currentAnimation&&(t.isProjectionDirty=!0,t.relativeTarget[f].max=t.relativeTarget[f].min+h)});const a=Qo();Sl(a,i,n.layoutBox);const l=Qo();o?Sl(l,t.applyTransform(r,!0),n.measuredBox):Sl(l,i,n.layoutBox);const u=!iE(a);let c=!1;if(!t.resumeFrom){const f=t.getClosestProjectingParent();if(f&&!f.resumeFrom){const{snapshot:d,layout:h}=f;if(d&&h){const m=Vt();Ml(m,n.layoutBox,d.layoutBox);const g=Vt();Ml(g,i,h.layoutBox),rE(m,g)||(c=!0),f.options.layoutRoot&&(t.relativeTarget=g,t.relativeTargetOrigin=m,t.relativeParent=f)}}}t.notifyListeners("didUpdate",{layout:i,snapshot:n,delta:l,layoutDelta:a,hasLayoutChanged:u,hasRelativeTargetChanged:c})}else if(t.isLead()){const{onExitComplete:i}=t.options;i&&i()}t.options.transition=void 0}function QP(t){Bs.totalNodes++,t.parent&&(t.isProjecting()||(t.isProjectionDirty=t.parent.isProjectionDirty),t.isSharedProjectionDirty||(t.isSharedProjectionDirty=!!(t.isProjectionDirty||t.parent.isProjectionDirty||t.parent.isSharedProjectionDirty)),t.isTransformDirty||(t.isTransformDirty=t.parent.isTransformDirty))}function JP(t){t.isProjectionDirty=t.isSharedProjectionDirty=t.isTransformDirty=!1}function e3(t){t.clearSnapshot()}function ex(t){t.clearMeasurements()}function t3(t){t.isLayoutDirty=!1}function n3(t){const{visualElement:e}=t.options;e&&e.getProps().onBeforeLayoutMeasure&&e.notify("BeforeLayoutMeasure"),t.resetTransform()}function tx(t){t.finishAnimation(),t.targetDelta=t.relativeTarget=t.target=void 0,t.isProjectionDirty=!0}function i3(t){t.resolveTargetDelta()}function r3(t){t.calcProjection()}function s3(t){t.resetRotation()}function o3(t){t.removeLeadSnapshot()}function nx(t,e,n){t.translate=St(e.translate,0,n),t.scale=St(e.scale,1,n),t.origin=e.origin,t.originPoint=e.originPoint}function ix(t,e,n,i){t.min=St(e.min,n.min,i),t.max=St(e.max,n.max,i)}function a3(t,e,n,i){ix(t.x,e.x,n.x,i),ix(t.y,e.y,n.y,i)}function l3(t){return t.animationValues&&t.animationValues.opacityExit!==void 0}const u3={duration:.45,ease:[.4,0,.1,1]},rx=t=>typeof navigator<"u"&&navigator.userAgent.toLowerCase().includes(t),sx=rx("applewebkit/")&&!rx("chrome/")?Math.round:Dt;function ox(t){t.min=sx(t.min),t.max=sx(t.max)}function c3(t){ox(t.x),ox(t.y)}function oE(t,e,n){return t==="position"||t==="preserve-aspect"&&!Up(jv(e),jv(n),.2)}const f3=sE({attachResizeListener:(t,e)=>pr(t,"resize",e),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),Wd={current:void 0},aE=sE({measureScroll:t=>({x:t.scrollLeft,y:t.scrollTop}),defaultParent:()=>{if(!Wd.current){const t=new f3({});t.mount(window),t.setOptions({layoutScroll:!0}),Wd.current=t}return Wd.current},resetTransform:(t,e)=>{t.style.transform=e!==void 0?e:"none"},checkIsScrollRoot:t=>window.getComputedStyle(t).position==="fixed"}),d3={pan:{Feature:RP},drag:{Feature:CP,ProjectionNode:aE,MeasureLayout:eE}},h3=/var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;function p3(t){const e=h3.exec(t);if(!e)return[,];const[,n,i]=e;return[n,i]}function Bp(t,e,n=1){const[i,r]=p3(t);if(!i)return;const s=window.getComputedStyle(e).getPropertyValue(i);if(s){const o=s.trim();return G1(o)?parseFloat(o):o}else return Rp(r)?Bp(r,e,n+1):r}function m3(t,{...e},n){const i=t.current;if(!(i instanceof Element))return{target:e,transitionEnd:n};n&&(n={...n}),t.values.forEach(r=>{const s=r.get();if(!Rp(s))return;const o=Bp(s,i);o&&r.set(o)});for(const r in e){const s=e[r];if(!Rp(s))continue;const o=Bp(s,i);o&&(e[r]=o,n||(n={}),n[r]===void 0&&(n[r]=s))}return{target:e,transitionEnd:n}}const g3=new Set(["width","height","top","left","right","bottom","x","y","translateX","translateY"]),lE=t=>g3.has(t),_3=t=>Object.keys(t).some(lE),ax=t=>t===go||t===De,lx=(t,e)=>parseFloat(t.split(", ")[e]),ux=(t,e)=>(n,{transform:i})=>{if(i==="none"||!i)return 0;const r=i.match(/^matrix3d\((.+)\)$/);if(r)return lx(r[1],e);{const s=i.match(/^matrix\((.+)\)$/);return s?lx(s[1],t):0}},v3=new Set(["x","y","z"]),x3=uu.filter(t=>!v3.has(t));function y3(t){const e=[];return x3.forEach(n=>{const i=t.getValue(n);i!==void 0&&(e.push([n,i.get()]),i.set(n.startsWith("scale")?1:0))}),e.length&&t.render(),e}const Ma={width:({x:t},{paddingLeft:e="0",paddingRight:n="0"})=>t.max-t.min-parseFloat(e)-parseFloat(n),height:({y:t},{paddingTop:e="0",paddingBottom:n="0"})=>t.max-t.min-parseFloat(e)-parseFloat(n),top:(t,{top:e})=>parseFloat(e),left:(t,{left:e})=>parseFloat(e),bottom:({y:t},{top:e})=>parseFloat(e)+(t.max-t.min),right:({x:t},{left:e})=>parseFloat(e)+(t.max-t.min),x:ux(4,13),y:ux(5,14)};Ma.translateX=Ma.x;Ma.translateY=Ma.y;const S3=(t,e,n)=>{const i=e.measureViewportBox(),r=e.current,s=getComputedStyle(r),{display:o}=s,a={};o==="none"&&e.setStaticValue("display",t.display||"block"),n.forEach(u=>{a[u]=Ma[u](i,s)}),e.render();const l=e.measureViewportBox();return n.forEach(u=>{const c=e.getValue(u);c&&c.jump(a[u]),t[u]=Ma[u](l,s)}),t},M3=(t,e,n={},i={})=>{e={...e},i={...i};const r=Object.keys(e).filter(lE);let s=[],o=!1;const a=[];if(r.forEach(l=>{const u=t.getValue(l);if(!t.hasValue(l))return;let c=n[l],f=Xa(c);const d=e[l];let h;if(lf(d)){const m=d.length,g=d[0]===null?1:0;c=d[g],f=Xa(c);for(let _=g;_<m&&d[_]!==null;_++)h?Qg(Xa(d[_])===h):h=Xa(d[_])}else h=Xa(d);if(f!==h)if(ax(f)&&ax(h)){const m=u.get();typeof m=="string"&&u.set(parseFloat(m)),typeof d=="string"?e[l]=parseFloat(d):Array.isArray(d)&&h===De&&(e[l]=d.map(parseFloat))}else f!=null&&f.transform&&(h!=null&&h.transform)&&(c===0||d===0)?c===0?u.set(h.transform(c)):e[l]=f.transform(d):(o||(s=y3(t),o=!0),a.push(l),i[l]=i[l]!==void 0?i[l]:e[l],u.jump(d))}),a.length){const l=a.indexOf("height")>=0?window.pageYOffset:null,u=S3(e,t,a);return s.length&&s.forEach(([c,f])=>{t.getValue(c).set(f)}),t.render(),Wf&&l!==null&&window.scrollTo({top:l}),{target:u,transitionEnd:i}}else return{target:e,transitionEnd:i}};function E3(t,e,n,i){return _3(e)?M3(t,e,n,i):{target:e,transitionEnd:i}}const T3=(t,e,n,i)=>{const r=m3(t,e,i);return e=r.target,i=r.transitionEnd,E3(t,e,n,i)},zp={current:null},uE={current:!1};function w3(){if(uE.current=!0,!!Wf)if(window.matchMedia){const t=window.matchMedia("(prefers-reduced-motion)"),e=()=>zp.current=t.matches;t.addListener(e),e()}else zp.current=!1}function A3(t,e,n){const{willChange:i}=e;for(const r in e){const s=e[r],o=n[r];if(Bn(s))t.addValue(r,s),df(i)&&i.add(r);else if(Bn(o))t.addValue(r,Sa(s,{owner:t})),df(i)&&i.remove(r);else if(o!==s)if(t.hasValue(r)){const a=t.getValue(r);!a.hasAnimated&&a.set(s)}else{const a=t.getStaticValue(r);t.addValue(r,Sa(a!==void 0?a:s,{owner:t}))}}for(const r in n)e[r]===void 0&&t.removeValue(r);return e}const cx=new WeakMap,cE=Object.keys(Wl),C3=cE.length,fx=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"],R3=Gg.length;class b3{constructor({parent:e,props:n,presenceContext:i,reducedMotionConfig:r,visualState:s},o={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.scheduleRender=()=>ht.render(this.render,!1,!0);const{latestValues:a,renderState:l}=s;this.latestValues=a,this.baseTarget={...a},this.initialValues=n.initial?{...a}:{},this.renderState=l,this.parent=e,this.props=n,this.presenceContext=i,this.depth=e?e.depth+1:0,this.reducedMotionConfig=r,this.options=o,this.isControllingVariants=Yf(n),this.isVariantNode=$M(n),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(e&&e.current);const{willChange:u,...c}=this.scrapeMotionValuesFromProps(n,{});for(const f in c){const d=c[f];a[f]!==void 0&&Bn(d)&&(d.set(a[f],!1),df(u)&&u.add(f))}}scrapeMotionValuesFromProps(e,n){return{}}mount(e){this.current=e,cx.set(e,this),this.projection&&!this.projection.instance&&this.projection.mount(e),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((n,i)=>this.bindToMotionValue(i,n)),uE.current||w3(),this.shouldReduceMotion=this.reducedMotionConfig==="never"?!1:this.reducedMotionConfig==="always"?!0:zp.current,this.parent&&this.parent.children.add(this),this.update(this.props,this.presenceContext)}unmount(){cx.delete(this.current),this.projection&&this.projection.unmount(),Ar(this.notifyUpdate),Ar(this.render),this.valueSubscriptions.forEach(e=>e()),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent&&this.parent.children.delete(this);for(const e in this.events)this.events[e].clear();for(const e in this.features)this.features[e].unmount();this.current=null}bindToMotionValue(e,n){const i=mo.has(e),r=n.on("change",o=>{this.latestValues[e]=o,this.props.onUpdate&&ht.update(this.notifyUpdate,!1,!0),i&&this.projection&&(this.projection.isTransformDirty=!0)}),s=n.on("renderRequest",this.scheduleRender);this.valueSubscriptions.set(e,()=>{r(),s()})}sortNodePosition(e){return!this.current||!this.sortInstanceNodePosition||this.type!==e.type?0:this.sortInstanceNodePosition(this.current,e.current)}loadFeatures({children:e,...n},i,r,s){let o,a;for(let l=0;l<C3;l++){const u=cE[l],{isEnabled:c,Feature:f,ProjectionNode:d,MeasureLayout:h}=Wl[u];d&&(o=d),c(n)&&(!this.features[u]&&f&&(this.features[u]=new f(this)),h&&(a=h))}if((this.type==="html"||this.type==="svg")&&!this.projection&&o){this.projection=new o(this.latestValues,this.parent&&this.parent.projection);const{layoutId:l,layout:u,drag:c,dragConstraints:f,layoutScroll:d,layoutRoot:h}=n;this.projection.setOptions({layoutId:l,layout:u,alwaysMeasureLayout:!!c||f&&jo(f),visualElement:this,scheduleRender:()=>this.scheduleRender(),animationType:typeof u=="string"?u:"both",initialPromotionConfig:s,layoutScroll:d,layoutRoot:h})}return a}updateFeatures(){for(const e in this.features){const n=this.features[e];n.isMounted?n.update():(n.mount(),n.isMounted=!0)}}triggerBuild(){this.build(this.renderState,this.latestValues,this.options,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):Vt()}getStaticValue(e){return this.latestValues[e]}setStaticValue(e,n){this.latestValues[e]=n}makeTargetAnimatable(e,n=!0){return this.makeTargetAnimatableFromInstance(e,this.props,n)}update(e,n){(e.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=e,this.prevPresenceContext=this.presenceContext,this.presenceContext=n;for(let i=0;i<fx.length;i++){const r=fx[i];this.propEventSubscriptions[r]&&(this.propEventSubscriptions[r](),delete this.propEventSubscriptions[r]);const s=e["on"+r];s&&(this.propEventSubscriptions[r]=this.on(r,s))}this.prevMotionValues=A3(this,this.scrapeMotionValuesFromProps(e,this.prevProps),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(e){return this.props.variants?this.props.variants[e]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}getVariantContext(e=!1){if(e)return this.parent?this.parent.getVariantContext():void 0;if(!this.isControllingVariants){const i=this.parent?this.parent.getVariantContext()||{}:{};return this.props.initial!==void 0&&(i.initial=this.props.initial),i}const n={};for(let i=0;i<R3;i++){const r=Gg[i],s=this.props[r];(Gl(s)||s===!1)&&(n[r]=s)}return n}addVariantChild(e){const n=this.getClosestVariantNode();if(n)return n.variantChildren&&n.variantChildren.add(e),()=>n.variantChildren.delete(e)}addValue(e,n){n!==this.values.get(e)&&(this.removeValue(e),this.bindToMotionValue(e,n)),this.values.set(e,n),this.latestValues[e]=n.get()}removeValue(e){this.values.delete(e);const n=this.valueSubscriptions.get(e);n&&(n(),this.valueSubscriptions.delete(e)),delete this.latestValues[e],this.removeValueFromRenderState(e,this.renderState)}hasValue(e){return this.values.has(e)}getValue(e,n){if(this.props.values&&this.props.values[e])return this.props.values[e];let i=this.values.get(e);return i===void 0&&n!==void 0&&(i=Sa(n,{owner:this}),this.addValue(e,i)),i}readValue(e){var n;return this.latestValues[e]!==void 0||!this.current?this.latestValues[e]:(n=this.getBaseTargetFromProps(this.props,e))!==null&&n!==void 0?n:this.readValueFromInstance(this.current,e,this.options)}setBaseTarget(e,n){this.baseTarget[e]=n}getBaseTarget(e){var n;const{initial:i}=this.props,r=typeof i=="string"||typeof i=="object"?(n=Zg(this.props,i))===null||n===void 0?void 0:n[e]:void 0;if(i&&r!==void 0)return r;const s=this.getBaseTargetFromProps(this.props,e);return s!==void 0&&!Bn(s)?s:this.initialValues[e]!==void 0&&r===void 0?void 0:this.baseTarget[e]}on(e,n){return this.events[e]||(this.events[e]=new a0),this.events[e].add(n)}notify(e,...n){this.events[e]&&this.events[e].notify(...n)}}class fE extends b3{sortInstanceNodePosition(e,n){return e.compareDocumentPosition(n)&2?1:-1}getBaseTargetFromProps(e,n){return e.style?e.style[n]:void 0}removeValueFromRenderState(e,{vars:n,style:i}){delete n[e],delete i[e]}makeTargetAnimatableFromInstance({transition:e,transitionEnd:n,...i},{transformValues:r},s){let o=Yb(i,e||{},this);if(r&&(n&&(n=r(n)),i&&(i=r(i)),o&&(o=r(o))),s){Wb(this,i,o);const a=T3(this,i,o,n);n=a.transitionEnd,i=a.target}return{transition:e,transitionEnd:n,...i}}}function P3(t){return window.getComputedStyle(t)}class D3 extends fE{constructor(){super(...arguments),this.type="html"}readValueFromInstance(e,n){if(mo.has(n)){const i=n0(n);return i&&i.default||0}else{const i=P3(e),r=(QM(n)?i.getPropertyValue(n):i[n])||0;return typeof r=="string"?r.trim():r}}measureInstanceViewportBox(e,{transformPagePoint:n}){return Q1(e,n)}build(e,n,i,r){Yg(e,n,i,r.transformTemplate)}scrapeMotionValuesFromProps(e,n){return jg(e,n)}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:e}=this.props;Bn(e)&&(this.childSubscription=e.on("change",n=>{this.current&&(this.current.textContent=`${n}`)}))}renderInstance(e,n,i,r){r1(e,n,i,r)}}class L3 extends fE{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1}getBaseTargetFromProps(e,n){return e[n]}readValueFromInstance(e,n){if(mo.has(n)){const i=n0(n);return i&&i.default||0}return n=s1.has(n)?n:Vg(n),e.getAttribute(n)}measureInstanceViewportBox(){return Vt()}scrapeMotionValuesFromProps(e,n){return a1(e,n)}build(e,n,i,r){$g(e,n,i,this.isSVGTag,r.transformTemplate)}renderInstance(e,n,i,r){o1(e,n,i,r)}mount(e){this.isSVGTag=Kg(e.tagName),super.mount(e)}}const I3=(t,e)=>Xg(t)?new L3(e,{enableHardwareAcceleration:!1}):new D3(e,{enableHardwareAcceleration:!0}),N3={layout:{ProjectionNode:aE,MeasureLayout:eE}},U3={...aP,...CR,...d3,...N3},Wr=FC((t,e)=>pR(t,e,U3,I3));function dE(){const t=oe.useRef(!1);return zg(()=>(t.current=!0,()=>{t.current=!1}),[]),t}function F3(){const t=dE(),[e,n]=oe.useState(0),i=oe.useCallback(()=>{t.current&&n(e+1)},[e]);return[oe.useCallback(()=>ht.postRender(i),[i]),e]}class O3 extends oe.Component{getSnapshotBeforeUpdate(e){const n=this.props.childRef.current;if(n&&e.isPresent&&!this.props.isPresent){const i=this.props.sizeRef.current;i.height=n.offsetHeight||0,i.width=n.offsetWidth||0,i.top=n.offsetTop,i.left=n.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function k3({children:t,isPresent:e}){const n=oe.useId(),i=oe.useRef(null),r=oe.useRef({width:0,height:0,top:0,left:0});return oe.useInsertionEffect(()=>{const{width:s,height:o,top:a,left:l}=r.current;if(e||!i.current||!s||!o)return;i.current.dataset.motionPopId=n;const u=document.createElement("style");return document.head.appendChild(u),u.sheet&&u.sheet.insertRule(`
          [data-motion-pop-id="${n}"] {
            position: absolute !important;
            width: ${s}px !important;
            height: ${o}px !important;
            top: ${a}px !important;
            left: ${l}px !important;
          }
        `),()=>{document.head.removeChild(u)}},[e]),oe.createElement(O3,{isPresent:e,childRef:i,sizeRef:r},oe.cloneElement(t,{ref:i}))}const Xd=({children:t,initial:e,isPresent:n,onExitComplete:i,custom:r,presenceAffectsLayout:s,mode:o})=>{const a=l1(B3),l=oe.useId(),u=oe.useMemo(()=>({id:l,initial:e,isPresent:n,custom:r,onExitComplete:c=>{a.set(c,!0);for(const f of a.values())if(!f)return;i&&i()},register:c=>(a.set(c,!1),()=>a.delete(c))}),s?void 0:[n]);return oe.useMemo(()=>{a.forEach((c,f)=>a.set(f,!1))},[n]),oe.useEffect(()=>{!n&&!a.size&&i&&i()},[n]),o==="popLayout"&&(t=oe.createElement(k3,{isPresent:n},t)),oe.createElement(Gf.Provider,{value:u},t)};function B3(){return new Map}function z3(t){return oe.useEffect(()=>()=>t(),[])}const zs=t=>t.key||"";function V3(t,e){t.forEach(n=>{const i=zs(n);e.set(i,n)})}function H3(t){const e=[];return oe.Children.forEach(t,n=>{oe.isValidElement(n)&&e.push(n)}),e}const G3=({children:t,custom:e,initial:n=!0,onExitComplete:i,exitBeforeEnter:r,presenceAffectsLayout:s=!0,mode:o="sync"})=>{const a=oe.useContext(Wg).forceRender||F3()[0],l=dE(),u=H3(t);let c=u;const f=oe.useRef(new Map).current,d=oe.useRef(c),h=oe.useRef(new Map).current,m=oe.useRef(!0);if(zg(()=>{m.current=!1,V3(u,h),d.current=c}),z3(()=>{m.current=!0,h.clear(),f.clear()}),m.current)return oe.createElement(oe.Fragment,null,c.map(v=>oe.createElement(Xd,{key:zs(v),isPresent:!0,initial:n?void 0:!1,presenceAffectsLayout:s,mode:o},v)));c=[...c];const g=d.current.map(zs),_=u.map(zs),p=g.length;for(let v=0;v<p;v++){const x=g[v];_.indexOf(x)===-1&&!f.has(x)&&f.set(x,void 0)}return o==="wait"&&f.size&&(c=[]),f.forEach((v,x)=>{if(_.indexOf(x)!==-1)return;const S=h.get(x);if(!S)return;const E=g.indexOf(x);let T=v;if(!T){const A=()=>{f.delete(x);const y=Array.from(h.keys()).filter(w=>!_.includes(w));if(y.forEach(w=>h.delete(w)),d.current=u.filter(w=>{const b=zs(w);return b===x||y.includes(b)}),!f.size){if(l.current===!1)return;a(),i&&i()}};T=oe.createElement(Xd,{key:zs(S),isPresent:!1,onExitComplete:A,custom:e,presenceAffectsLayout:s,mode:o},S),f.set(x,T)}c.splice(E,0,T)}),c=c.map(v=>{const x=v.key;return f.has(x)?v:oe.createElement(Xd,{key:zs(v),isPresent:!0,presenceAffectsLayout:s,mode:o},v)}),oe.createElement(oe.Fragment,null,f.size?c:c.map(v=>oe.cloneElement(v)))};/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const l0="185",W3=0,dx=1,X3=2,Ac=1,Y3=2,ol=3,xs=0,In=1,Gi=2,xr=0,la=1,hx=2,px=3,mx=4,q3=5,Gs=100,$3=101,K3=102,j3=103,Z3=104,Q3=200,J3=201,eD=202,tD=203,Vp=204,Hp=205,nD=206,iD=207,rD=208,sD=209,oD=210,aD=211,lD=212,uD=213,cD=214,Gp=0,Wp=1,Xp=2,Ea=3,Yp=4,qp=5,$p=6,Kp=7,hE=0,fD=1,dD=2,Zi=0,pE=1,mE=2,gE=3,_E=4,vE=5,xE=6,yE=7,SE=300,uo=301,Ta=302,Yd=303,qd=304,jf=306,jp=1e3,mr=1001,Zp=1002,nn=1003,hD=1004,Vu=1005,mn=1006,$d=1007,Ks=1008,$n=1009,ME=1010,EE=1011,Yl=1012,u0=1013,er=1014,Xi=1015,Cr=1016,c0=1017,f0=1018,ql=1020,TE=35902,wE=35899,AE=1021,CE=1022,Ri=1023,Rr=1026,js=1027,RE=1028,d0=1029,co=1030,h0=1031,p0=1033,Cc=33776,Rc=33777,bc=33778,Pc=33779,Qp=35840,Jp=35841,em=35842,tm=35843,nm=36196,im=37492,rm=37496,sm=37488,om=37489,pf=37490,am=37491,lm=37808,um=37809,cm=37810,fm=37811,dm=37812,hm=37813,pm=37814,mm=37815,gm=37816,_m=37817,vm=37818,xm=37819,ym=37820,Sm=37821,Mm=36492,Em=36494,Tm=36495,wm=36283,Am=36284,mf=36285,Cm=36286,pD=3200,gx=0,mD=1,jr="",Xn="srgb",gf="srgb-linear",_f="linear",nt="srgb",Mo=7680,_x=519,gD=512,_D=513,vD=514,m0=515,xD=516,yD=517,g0=518,SD=519,vx=35044,xx="300 es",Yi=2e3,$l=2001;function MD(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Kl(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function ED(){const t=Kl("canvas");return t.style.display="block",t}const yx={};function Sx(...t){const e="THREE."+t.shift();console.log(e,...t)}function bE(t){const e=t[0];if(typeof e=="string"&&e.startsWith("TSL:")){const n=t[1];n&&n.isStackTrace?t[0]+=" "+n.getLocation():t[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return t}function Ie(...t){t=bE(t);const e="THREE."+t.shift();{const n=t[0];n&&n.isStackTrace?console.warn(n.getError(e)):console.warn(e,...t)}}function Ze(...t){t=bE(t);const e="THREE."+t.shift();{const n=t[0];n&&n.isStackTrace?console.error(n.getError(e)):console.error(e,...t)}}function ua(...t){const e=t.join(" ");e in yx||(yx[e]=!0,Ie(...t))}function TD(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}const wD={[Gp]:Wp,[Xp]:$p,[Yp]:Kp,[Ea]:qp,[Wp]:Gp,[$p]:Xp,[Kp]:Yp,[qp]:Ea};class _o{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const i=n[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const cn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Kd=Math.PI/180,Rm=180/Math.PI;function hu(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(cn[t&255]+cn[t>>8&255]+cn[t>>16&255]+cn[t>>24&255]+"-"+cn[e&255]+cn[e>>8&255]+"-"+cn[e>>16&15|64]+cn[e>>24&255]+"-"+cn[n&63|128]+cn[n>>8&255]+"-"+cn[n>>16&255]+cn[n>>24&255]+cn[i&255]+cn[i>>8&255]+cn[i>>16&255]+cn[i>>24&255]).toLowerCase()}function Ye(t,e,n){return Math.max(e,Math.min(n,t))}function AD(t,e){return(t%e+e)%e}function jd(t,e,n){return(1-n)*t+n*e}function qa(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function An(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const B0=class B0{constructor(e=0,n=0){this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Ye(this.x,e.x,n.x),this.y=Ye(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=Ye(this.x,e,n),this.y=Ye(this.y,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ye(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Ye(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};B0.prototype.isVector2=!0;let Je=B0;class Ua{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],u=i[r+1],c=i[r+2],f=i[r+3],d=s[o+0],h=s[o+1],m=s[o+2],g=s[o+3];if(f!==g||l!==d||u!==h||c!==m){let _=l*d+u*h+c*m+f*g;_<0&&(d=-d,h=-h,m=-m,g=-g,_=-_);let p=1-a;if(_<.9995){const v=Math.acos(_),x=Math.sin(v);p=Math.sin(p*v)/x,a=Math.sin(a*v)/x,l=l*p+d*a,u=u*p+h*a,c=c*p+m*a,f=f*p+g*a}else{l=l*p+d*a,u=u*p+h*a,c=c*p+m*a,f=f*p+g*a;const v=1/Math.sqrt(l*l+u*u+c*c+f*f);l*=v,u*=v,c*=v,f*=v}}e[n]=l,e[n+1]=u,e[n+2]=c,e[n+3]=f}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],l=i[r+1],u=i[r+2],c=i[r+3],f=s[o],d=s[o+1],h=s[o+2],m=s[o+3];return e[n]=a*m+c*f+l*h-u*d,e[n+1]=l*m+c*d+u*f-a*h,e[n+2]=u*m+c*h+a*d-l*f,e[n+3]=c*m-a*f-l*d-u*h,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,u=a(i/2),c=a(r/2),f=a(s/2),d=l(i/2),h=l(r/2),m=l(s/2);switch(o){case"XYZ":this._x=d*c*f+u*h*m,this._y=u*h*f-d*c*m,this._z=u*c*m+d*h*f,this._w=u*c*f-d*h*m;break;case"YXZ":this._x=d*c*f+u*h*m,this._y=u*h*f-d*c*m,this._z=u*c*m-d*h*f,this._w=u*c*f+d*h*m;break;case"ZXY":this._x=d*c*f-u*h*m,this._y=u*h*f+d*c*m,this._z=u*c*m+d*h*f,this._w=u*c*f-d*h*m;break;case"ZYX":this._x=d*c*f-u*h*m,this._y=u*h*f+d*c*m,this._z=u*c*m-d*h*f,this._w=u*c*f+d*h*m;break;case"YZX":this._x=d*c*f+u*h*m,this._y=u*h*f+d*c*m,this._z=u*c*m-d*h*f,this._w=u*c*f-d*h*m;break;case"XZY":this._x=d*c*f-u*h*m,this._y=u*h*f-d*c*m,this._z=u*c*m+d*h*f,this._w=u*c*f+d*h*m;break;default:Ie("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],u=n[2],c=n[6],f=n[10],d=i+a+f;if(d>0){const h=.5/Math.sqrt(d+1);this._w=.25/h,this._x=(c-l)*h,this._y=(s-u)*h,this._z=(o-r)*h}else if(i>a&&i>f){const h=2*Math.sqrt(1+i-a-f);this._w=(c-l)/h,this._x=.25*h,this._y=(r+o)/h,this._z=(s+u)/h}else if(a>f){const h=2*Math.sqrt(1+a-i-f);this._w=(s-u)/h,this._x=(r+o)/h,this._y=.25*h,this._z=(l+c)/h}else{const h=2*Math.sqrt(1+f-i-a);this._w=(o-r)/h,this._x=(s+u)/h,this._y=(l+c)/h,this._z=.25*h}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ye(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,u=n._z,c=n._w;return this._x=i*c+o*a+r*u-s*l,this._y=r*c+o*l+s*a-i*u,this._z=s*c+o*u+i*l-r*a,this._w=o*c-i*a-r*l-s*u,this._onChangeCallback(),this}slerp(e,n){let i=e._x,r=e._y,s=e._z,o=e._w,a=this.dot(e);a<0&&(i=-i,r=-r,s=-s,o=-o,a=-a);let l=1-n;if(a<.9995){const u=Math.acos(a),c=Math.sin(u);l=Math.sin(l*u)/c,n=Math.sin(n*u)/c,this._x=this._x*l+i*n,this._y=this._y*l+r*n,this._z=this._z*l+s*n,this._w=this._w*l+o*n,this._onChangeCallback()}else this._x=this._x*l+i*n,this._y=this._y*l+r*n,this._z=this._z*l+s*n,this._w=this._w*l+o*n,this.normalize();return this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const z0=class z0{constructor(e=0,n=0,i=0){this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Mx.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Mx.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,u=2*(o*r-a*i),c=2*(a*n-s*r),f=2*(s*i-o*n);return this.x=n+l*u+o*f-a*c,this.y=i+l*c+a*u-s*f,this.z=r+l*f+s*c-o*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Ye(this.x,e.x,n.x),this.y=Ye(this.y,e.y,n.y),this.z=Ye(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=Ye(this.x,e,n),this.y=Ye(this.y,e,n),this.z=Ye(this.z,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ye(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Zd.copy(this).projectOnVector(e),this.sub(Zd)}reflect(e){return this.sub(Zd.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Ye(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};z0.prototype.isVector3=!0;let G=z0;const Zd=new G,Mx=new Ua,V0=class V0{constructor(e,n,i,r,s,o,a,l,u){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,u)}set(e,n,i,r,s,o,a,l,u){const c=this.elements;return c[0]=e,c[1]=r,c[2]=a,c[3]=n,c[4]=s,c[5]=l,c[6]=i,c[7]=o,c[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],u=i[1],c=i[4],f=i[7],d=i[2],h=i[5],m=i[8],g=r[0],_=r[3],p=r[6],v=r[1],x=r[4],S=r[7],E=r[2],T=r[5],A=r[8];return s[0]=o*g+a*v+l*E,s[3]=o*_+a*x+l*T,s[6]=o*p+a*S+l*A,s[1]=u*g+c*v+f*E,s[4]=u*_+c*x+f*T,s[7]=u*p+c*S+f*A,s[2]=d*g+h*v+m*E,s[5]=d*_+h*x+m*T,s[8]=d*p+h*S+m*A,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8];return n*o*c-n*a*u-i*s*c+i*a*l+r*s*u-r*o*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8],f=c*o-a*u,d=a*l-c*s,h=u*s-o*l,m=n*f+i*d+r*h;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/m;return e[0]=f*g,e[1]=(r*u-c*i)*g,e[2]=(a*i-r*o)*g,e[3]=d*g,e[4]=(c*n-r*l)*g,e[5]=(r*s-a*n)*g,e[6]=h*g,e[7]=(i*l-u*n)*g,e[8]=(o*n-i*s)*g,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const l=Math.cos(s),u=Math.sin(s);return this.set(i*l,i*u,-i*(l*o+u*a)+o+e,-r*u,r*l,-r*(-u*o+l*a)+a+n,0,0,1),this}scale(e,n){return ua("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Qd.makeScale(e,n)),this}rotate(e){return ua("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Qd.makeRotation(-e)),this}translate(e,n){return ua("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Qd.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};V0.prototype.isMatrix3=!0;let Ue=V0;const Qd=new Ue,Ex=new Ue().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Tx=new Ue().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function CD(){const t={enabled:!0,workingColorSpace:gf,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===nt&&(r.r=yr(r.r),r.g=yr(r.g),r.b=yr(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===nt&&(r.r=ca(r.r),r.g=ca(r.g),r.b=ca(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===jr?_f:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return ua("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),t.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return ua("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),t.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return t.define({[gf]:{primaries:e,whitePoint:i,transfer:_f,toXYZ:Ex,fromXYZ:Tx,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Xn},outputColorSpaceConfig:{drawingBufferColorSpace:Xn}},[Xn]:{primaries:e,whitePoint:i,transfer:nt,toXYZ:Ex,fromXYZ:Tx,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Xn}}}),t}const Xe=CD();function yr(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function ca(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let Eo;class RD{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Eo===void 0&&(Eo=Kl("canvas")),Eo.width=e.width,Eo.height=e.height;const r=Eo.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=Eo}return i.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Kl("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=yr(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(yr(n[i]/255)*255):n[i]=yr(n[i]);return{data:n,width:e.width,height:e.height}}else return Ie("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let bD=0;class _0{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:bD++}),this.uuid=hu(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?e.set(n.displayWidth,n.displayHeight,0):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Jd(r[o].image)):s.push(Jd(r[o]))}else s=Jd(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function Jd(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?RD.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(Ie("Texture: Unable to serialize Texture."),{})}let PD=0;const eh=new G;class gn extends _o{constructor(e=gn.DEFAULT_IMAGE,n=gn.DEFAULT_MAPPING,i=mr,r=mr,s=mn,o=Ks,a=Ri,l=$n,u=gn.DEFAULT_ANISOTROPY,c=jr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:PD++}),this.uuid=hu(),this.name="",this.source=new _0(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=u,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Je(0,0),this.repeat=new Je(1,1),this.center=new Je(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ue,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=c,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(eh).x}get height(){return this.source.getSize(eh).y}get depth(){return this.source.getSize(eh).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const i=e[n];if(i===void 0){Ie(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){Ie(`Texture.setValues(): property '${n}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==SE)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case jp:e.x=e.x-Math.floor(e.x);break;case mr:e.x=e.x<0?0:1;break;case Zp:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case jp:e.y=e.y-Math.floor(e.y);break;case mr:e.y=e.y<0?0:1;break;case Zp:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}gn.DEFAULT_IMAGE=null;gn.DEFAULT_MAPPING=SE;gn.DEFAULT_ANISOTROPY=1;const H0=class H0{constructor(e=0,n=0,i=0,r=1){this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,u=l[0],c=l[4],f=l[8],d=l[1],h=l[5],m=l[9],g=l[2],_=l[6],p=l[10];if(Math.abs(c-d)<.01&&Math.abs(f-g)<.01&&Math.abs(m-_)<.01){if(Math.abs(c+d)<.1&&Math.abs(f+g)<.1&&Math.abs(m+_)<.1&&Math.abs(u+h+p-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const x=(u+1)/2,S=(h+1)/2,E=(p+1)/2,T=(c+d)/4,A=(f+g)/4,y=(m+_)/4;return x>S&&x>E?x<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(x),r=T/i,s=A/i):S>E?S<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),i=T/r,s=y/r):E<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(E),i=A/s,r=y/s),this.set(i,r,s,n),this}let v=Math.sqrt((_-m)*(_-m)+(f-g)*(f-g)+(d-c)*(d-c));return Math.abs(v)<.001&&(v=1),this.x=(_-m)/v,this.y=(f-g)/v,this.z=(d-c)/v,this.w=Math.acos((u+h+p-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Ye(this.x,e.x,n.x),this.y=Ye(this.y,e.y,n.y),this.z=Ye(this.z,e.z,n.z),this.w=Ye(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=Ye(this.x,e,n),this.y=Ye(this.y,e,n),this.z=Ye(this.z,e,n),this.w=Ye(this.w,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ye(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};H0.prototype.isVector4=!0;let Mt=H0;class DD extends _o{constructor(e=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:mn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=i.depth,this.scissor=new Mt(0,0,e,n),this.scissorTest=!1,this.viewport=new Mt(0,0,e,n),this.textures=[];const r={width:e,height:n,depth:i.depth},s=new gn(r),o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){const n={minFilter:mn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const r=Object.assign({},e.textures[n].image);this.textures[n].source=new _0(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Qi extends DD{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class PE extends gn{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=nn,this.minFilter=nn,this.wrapR=mr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class LD extends gn{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=nn,this.minFilter=nn,this.wrapR=mr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const wf=class wf{constructor(e,n,i,r,s,o,a,l,u,c,f,d,h,m,g,_){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,u,c,f,d,h,m,g,_)}set(e,n,i,r,s,o,a,l,u,c,f,d,h,m,g,_){const p=this.elements;return p[0]=e,p[4]=n,p[8]=i,p[12]=r,p[1]=s,p[5]=o,p[9]=a,p[13]=l,p[2]=u,p[6]=c,p[10]=f,p[14]=d,p[3]=h,p[7]=m,p[11]=g,p[15]=_,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new wf().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return this.determinantAffine()===0?(e.set(1,0,0),n.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const n=this.elements,i=e.elements,r=1/To.setFromMatrixColumn(e,0).length(),s=1/To.setFromMatrixColumn(e,1).length(),o=1/To.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),u=Math.sin(r),c=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const d=o*c,h=o*f,m=a*c,g=a*f;n[0]=l*c,n[4]=-l*f,n[8]=u,n[1]=h+m*u,n[5]=d-g*u,n[9]=-a*l,n[2]=g-d*u,n[6]=m+h*u,n[10]=o*l}else if(e.order==="YXZ"){const d=l*c,h=l*f,m=u*c,g=u*f;n[0]=d+g*a,n[4]=m*a-h,n[8]=o*u,n[1]=o*f,n[5]=o*c,n[9]=-a,n[2]=h*a-m,n[6]=g+d*a,n[10]=o*l}else if(e.order==="ZXY"){const d=l*c,h=l*f,m=u*c,g=u*f;n[0]=d-g*a,n[4]=-o*f,n[8]=m+h*a,n[1]=h+m*a,n[5]=o*c,n[9]=g-d*a,n[2]=-o*u,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const d=o*c,h=o*f,m=a*c,g=a*f;n[0]=l*c,n[4]=m*u-h,n[8]=d*u+g,n[1]=l*f,n[5]=g*u+d,n[9]=h*u-m,n[2]=-u,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const d=o*l,h=o*u,m=a*l,g=a*u;n[0]=l*c,n[4]=g-d*f,n[8]=m*f+h,n[1]=f,n[5]=o*c,n[9]=-a*c,n[2]=-u*c,n[6]=h*f+m,n[10]=d-g*f}else if(e.order==="XZY"){const d=o*l,h=o*u,m=a*l,g=a*u;n[0]=l*c,n[4]=-f,n[8]=u*c,n[1]=d*f+g,n[5]=o*c,n[9]=h*f-m,n[2]=m*f-h,n[6]=a*c,n[10]=g*f+d}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(ID,e,ND)}lookAt(e,n,i){const r=this.elements;return Hn.subVectors(e,n),Hn.lengthSq()===0&&(Hn.z=1),Hn.normalize(),Or.crossVectors(i,Hn),Or.lengthSq()===0&&(Math.abs(i.z)===1?Hn.x+=1e-4:Hn.z+=1e-4,Hn.normalize(),Or.crossVectors(i,Hn)),Or.normalize(),Hu.crossVectors(Hn,Or),r[0]=Or.x,r[4]=Hu.x,r[8]=Hn.x,r[1]=Or.y,r[5]=Hu.y,r[9]=Hn.y,r[2]=Or.z,r[6]=Hu.z,r[10]=Hn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],u=i[12],c=i[1],f=i[5],d=i[9],h=i[13],m=i[2],g=i[6],_=i[10],p=i[14],v=i[3],x=i[7],S=i[11],E=i[15],T=r[0],A=r[4],y=r[8],w=r[12],b=r[1],P=r[5],D=r[9],z=r[13],X=r[2],U=r[6],B=r[10],F=r[14],L=r[3],Y=r[7],Q=r[11],Z=r[15];return s[0]=o*T+a*b+l*X+u*L,s[4]=o*A+a*P+l*U+u*Y,s[8]=o*y+a*D+l*B+u*Q,s[12]=o*w+a*z+l*F+u*Z,s[1]=c*T+f*b+d*X+h*L,s[5]=c*A+f*P+d*U+h*Y,s[9]=c*y+f*D+d*B+h*Q,s[13]=c*w+f*z+d*F+h*Z,s[2]=m*T+g*b+_*X+p*L,s[6]=m*A+g*P+_*U+p*Y,s[10]=m*y+g*D+_*B+p*Q,s[14]=m*w+g*z+_*F+p*Z,s[3]=v*T+x*b+S*X+E*L,s[7]=v*A+x*P+S*U+E*Y,s[11]=v*y+x*D+S*B+E*Q,s[15]=v*w+x*z+S*F+E*Z,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],u=e[13],c=e[2],f=e[6],d=e[10],h=e[14],m=e[3],g=e[7],_=e[11],p=e[15],v=l*h-u*d,x=a*h-u*f,S=a*d-l*f,E=o*h-u*c,T=o*d-l*c,A=o*f-a*c;return n*(g*v-_*x+p*S)-i*(m*v-_*E+p*T)+r*(m*x-g*E+p*A)-s*(m*S-g*T+_*A)}determinantAffine(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[1],o=e[5],a=e[9],l=e[2],u=e[6],c=e[10];return n*(o*c-a*u)-i*(s*c-a*l)+r*(s*u-o*l)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8],f=e[9],d=e[10],h=e[11],m=e[12],g=e[13],_=e[14],p=e[15],v=n*a-i*o,x=n*l-r*o,S=n*u-s*o,E=i*l-r*a,T=i*u-s*a,A=r*u-s*l,y=c*g-f*m,w=c*_-d*m,b=c*p-h*m,P=f*_-d*g,D=f*p-h*g,z=d*p-h*_,X=v*z-x*D+S*P+E*b-T*w+A*y;if(X===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const U=1/X;return e[0]=(a*z-l*D+u*P)*U,e[1]=(r*D-i*z-s*P)*U,e[2]=(g*A-_*T+p*E)*U,e[3]=(d*T-f*A-h*E)*U,e[4]=(l*b-o*z-u*w)*U,e[5]=(n*z-r*b+s*w)*U,e[6]=(_*S-m*A-p*x)*U,e[7]=(c*A-d*S+h*x)*U,e[8]=(o*D-a*b+u*y)*U,e[9]=(i*b-n*D-s*y)*U,e[10]=(m*T-g*S+p*v)*U,e[11]=(f*S-c*T-h*v)*U,e[12]=(a*w-o*P-l*y)*U,e[13]=(n*P-i*w+r*y)*U,e[14]=(g*x-m*E-_*v)*U,e[15]=(c*E-f*x+d*v)*U,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,u=s*o,c=s*a;return this.set(u*o+i,u*a-r*l,u*l+r*a,0,u*a+r*l,c*a+i,c*l-r*o,0,u*l-r*a,c*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,u=s+s,c=o+o,f=a+a,d=s*u,h=s*c,m=s*f,g=o*c,_=o*f,p=a*f,v=l*u,x=l*c,S=l*f,E=i.x,T=i.y,A=i.z;return r[0]=(1-(g+p))*E,r[1]=(h+S)*E,r[2]=(m-x)*E,r[3]=0,r[4]=(h-S)*T,r[5]=(1-(d+p))*T,r[6]=(_+v)*T,r[7]=0,r[8]=(m+x)*A,r[9]=(_-v)*A,r[10]=(1-(d+g))*A,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];const s=this.determinantAffine();if(s===0)return i.set(1,1,1),n.identity(),this;let o=To.set(r[0],r[1],r[2]).length();const a=To.set(r[4],r[5],r[6]).length(),l=To.set(r[8],r[9],r[10]).length();s<0&&(o=-o),Si.copy(this);const u=1/o,c=1/a,f=1/l;return Si.elements[0]*=u,Si.elements[1]*=u,Si.elements[2]*=u,Si.elements[4]*=c,Si.elements[5]*=c,Si.elements[6]*=c,Si.elements[8]*=f,Si.elements[9]*=f,Si.elements[10]*=f,n.setFromRotationMatrix(Si),i.x=o,i.y=a,i.z=l,this}makePerspective(e,n,i,r,s,o,a=Yi,l=!1){const u=this.elements,c=2*s/(n-e),f=2*s/(i-r),d=(n+e)/(n-e),h=(i+r)/(i-r);let m,g;if(l)m=s/(o-s),g=o*s/(o-s);else if(a===Yi)m=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===$l)m=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return u[0]=c,u[4]=0,u[8]=d,u[12]=0,u[1]=0,u[5]=f,u[9]=h,u[13]=0,u[2]=0,u[6]=0,u[10]=m,u[14]=g,u[3]=0,u[7]=0,u[11]=-1,u[15]=0,this}makeOrthographic(e,n,i,r,s,o,a=Yi,l=!1){const u=this.elements,c=2/(n-e),f=2/(i-r),d=-(n+e)/(n-e),h=-(i+r)/(i-r);let m,g;if(l)m=1/(o-s),g=o/(o-s);else if(a===Yi)m=-2/(o-s),g=-(o+s)/(o-s);else if(a===$l)m=-1/(o-s),g=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return u[0]=c,u[4]=0,u[8]=0,u[12]=d,u[1]=0,u[5]=f,u[9]=0,u[13]=h,u[2]=0,u[6]=0,u[10]=m,u[14]=g,u[3]=0,u[7]=0,u[11]=0,u[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}};wf.prototype.isMatrix4=!0;let It=wf;const To=new G,Si=new It,ID=new G(0,0,0),ND=new G(1,1,1),Or=new G,Hu=new G,Hn=new G,wx=new It,Ax=new Ua;class fo{constructor(e=0,n=0,i=0,r=fo.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],u=r[5],c=r[9],f=r[2],d=r[6],h=r[10];switch(n){case"XYZ":this._y=Math.asin(Ye(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-c,h),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,u),this._z=0);break;case"YXZ":this._x=Math.asin(-Ye(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(a,h),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ye(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,h),this._z=Math.atan2(-o,u)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Ye(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,h),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,u));break;case"YZX":this._z=Math.asin(Ye(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,u),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,h));break;case"XZY":this._z=Math.asin(-Ye(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,u),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-c,h),this._y=0);break;default:Ie("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return wx.makeRotationFromQuaternion(e),this.setFromRotationMatrix(wx,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Ax.setFromEuler(this),this.setFromQuaternion(Ax,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}fo.DEFAULT_ORDER="XYZ";class DE{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let UD=0;const Cx=new G,wo=new Ua,ir=new It,Gu=new G,$a=new G,FD=new G,OD=new Ua,Rx=new G(1,0,0),bx=new G(0,1,0),Px=new G(0,0,1),Dx={type:"added"},kD={type:"removed"},Ao={type:"childadded",child:null},th={type:"childremoved",child:null};class Nn extends _o{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:UD++}),this.uuid=hu(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Nn.DEFAULT_UP.clone();const e=new G,n=new fo,i=new Ua,r=new G(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new It},normalMatrix:{value:new Ue}}),this.matrix=new It,this.matrixWorld=new It,this.matrixAutoUpdate=Nn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Nn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new DE,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return wo.setFromAxisAngle(e,n),this.quaternion.multiply(wo),this}rotateOnWorldAxis(e,n){return wo.setFromAxisAngle(e,n),this.quaternion.premultiply(wo),this}rotateX(e){return this.rotateOnAxis(Rx,e)}rotateY(e){return this.rotateOnAxis(bx,e)}rotateZ(e){return this.rotateOnAxis(Px,e)}translateOnAxis(e,n){return Cx.copy(e).applyQuaternion(this.quaternion),this.position.add(Cx.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Rx,e)}translateY(e){return this.translateOnAxis(bx,e)}translateZ(e){return this.translateOnAxis(Px,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ir.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?Gu.copy(e):Gu.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),$a.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ir.lookAt($a,Gu,this.up):ir.lookAt(Gu,$a,this.up),this.quaternion.setFromRotationMatrix(ir),r&&(ir.extractRotation(r.matrixWorld),wo.setFromRotationMatrix(ir),this.quaternion.premultiply(wo.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(Ze("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Dx),Ao.child=e,this.dispatchEvent(Ao),Ao.child=null):Ze("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(kD),th.child=e,this.dispatchEvent(th),th.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ir.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ir.multiply(e.parent.matrixWorld)),e.applyMatrix4(ir),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Dx),Ao.child=e,this.dispatchEvent(Ao),Ao.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($a,e,FD),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($a,OD,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const n=e.x,i=e.y,r=e.z,s=this.matrix.elements;s[12]+=n-s[0]*n-s[4]*i-s[8]*r,s[13]+=i-s[1]*n-s[5]*i-s[9]*r,s[14]+=r-s[2]*n-s[6]*i-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n,i=!1){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),n===!0){const s=this.children;for(let o=0,a=s.length;o<a;o++)s[o].updateWorldMatrix(!1,!0,i)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),this.static!==!1&&(r.static=this.static),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let u=0,c=l.length;u<c;u++){const f=l[u];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,u=this.material.length;l<u;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),u=o(e.textures),c=o(e.images),f=o(e.shapes),d=o(e.skeletons),h=o(e.animations),m=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),u.length>0&&(i.textures=u),c.length>0&&(i.images=c),f.length>0&&(i.shapes=f),d.length>0&&(i.skeletons=d),h.length>0&&(i.animations=h),m.length>0&&(i.nodes=m)}return i.object=r,i;function o(a){const l=[];for(const u in a){const c=a[u];delete c.metadata,l.push(c)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Nn.DEFAULT_UP=new G(0,1,0);Nn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Nn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Wu extends Nn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const BD={type:"move"};class nh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Wu,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Wu,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new G,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new G),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Wu,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new G,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new G,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,u=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(u&&e.hand){o=!0;for(const g of e.hand.values()){const _=n.getJointPose(g,i),p=this._getHandJoint(u,g);_!==null&&(p.matrix.fromArray(_.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=_.radius),p.visible=_!==null}const c=u.joints["index-finger-tip"],f=u.joints["thumb-tip"],d=c.position.distanceTo(f.position),h=.02,m=.005;u.inputState.pinching&&d>h+m?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&d<=h-m&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(BD)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),u!==null&&(u.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new Wu;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const LE={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},kr={h:0,s:0,l:0},Xu={h:0,s:0,l:0};function ih(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class $e{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Xn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Xe.colorSpaceToWorking(this,n),this}setRGB(e,n,i,r=Xe.workingColorSpace){return this.r=e,this.g=n,this.b=i,Xe.colorSpaceToWorking(this,r),this}setHSL(e,n,i,r=Xe.workingColorSpace){if(e=AD(e,1),n=Ye(n,0,1),i=Ye(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=ih(o,s,e+1/3),this.g=ih(o,s,e),this.b=ih(o,s,e-1/3)}return Xe.colorSpaceToWorking(this,r),this}setStyle(e,n=Xn){function i(s){s!==void 0&&parseFloat(s)<1&&Ie("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:Ie("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);Ie("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Xn){const i=LE[e.toLowerCase()];return i!==void 0?this.setHex(i,n):Ie("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=yr(e.r),this.g=yr(e.g),this.b=yr(e.b),this}copyLinearToSRGB(e){return this.r=ca(e.r),this.g=ca(e.g),this.b=ca(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Xn){return Xe.workingToColorSpace(fn.copy(this),e),Math.round(Ye(fn.r*255,0,255))*65536+Math.round(Ye(fn.g*255,0,255))*256+Math.round(Ye(fn.b*255,0,255))}getHexString(e=Xn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Xe.workingColorSpace){Xe.workingToColorSpace(fn.copy(this),n);const i=fn.r,r=fn.g,s=fn.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,u;const c=(a+o)/2;if(a===o)l=0,u=0;else{const f=o-a;switch(u=c<=.5?f/(o+a):f/(2-o-a),o){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=u,e.l=c,e}getRGB(e,n=Xe.workingColorSpace){return Xe.workingToColorSpace(fn.copy(this),n),e.r=fn.r,e.g=fn.g,e.b=fn.b,e}getStyle(e=Xn){Xe.workingToColorSpace(fn.copy(this),e);const n=fn.r,i=fn.g,r=fn.b;return e!==Xn?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(kr),this.setHSL(kr.h+e,kr.s+n,kr.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(kr),e.getHSL(Xu);const i=jd(kr.h,Xu.h,n),r=jd(kr.s,Xu.s,n),s=jd(kr.l,Xu.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const fn=new $e;$e.NAMES=LE;class zD extends Nn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new fo,this.environmentIntensity=1,this.environmentRotation=new fo,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}const Mi=new G,rr=new G,rh=new G,sr=new G,Co=new G,Ro=new G,Lx=new G,sh=new G,oh=new G,ah=new G,lh=new Mt,uh=new Mt,ch=new Mt;class Ci{constructor(e=new G,n=new G,i=new G){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),Mi.subVectors(e,n),r.cross(Mi);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){Mi.subVectors(r,n),rr.subVectors(i,n),rh.subVectors(e,n);const o=Mi.dot(Mi),a=Mi.dot(rr),l=Mi.dot(rh),u=rr.dot(rr),c=rr.dot(rh),f=o*u-a*a;if(f===0)return s.set(0,0,0),null;const d=1/f,h=(u*l-a*c)*d,m=(o*c-a*l)*d;return s.set(1-h-m,m,h)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,sr)===null?!1:sr.x>=0&&sr.y>=0&&sr.x+sr.y<=1}static getInterpolation(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,sr)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,sr.x),l.addScaledVector(o,sr.y),l.addScaledVector(a,sr.z),l)}static getInterpolatedAttribute(e,n,i,r,s,o){return lh.setScalar(0),uh.setScalar(0),ch.setScalar(0),lh.fromBufferAttribute(e,n),uh.fromBufferAttribute(e,i),ch.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(lh,s.x),o.addScaledVector(uh,s.y),o.addScaledVector(ch,s.z),o}static isFrontFacing(e,n,i,r){return Mi.subVectors(i,n),rr.subVectors(e,n),Mi.cross(rr).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Mi.subVectors(this.c,this.b),rr.subVectors(this.a,this.b),Mi.cross(rr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ci.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Ci.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return Ci.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return Ci.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ci.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,a;Co.subVectors(r,i),Ro.subVectors(s,i),sh.subVectors(e,i);const l=Co.dot(sh),u=Ro.dot(sh);if(l<=0&&u<=0)return n.copy(i);oh.subVectors(e,r);const c=Co.dot(oh),f=Ro.dot(oh);if(c>=0&&f<=c)return n.copy(r);const d=l*f-c*u;if(d<=0&&l>=0&&c<=0)return o=l/(l-c),n.copy(i).addScaledVector(Co,o);ah.subVectors(e,s);const h=Co.dot(ah),m=Ro.dot(ah);if(m>=0&&h<=m)return n.copy(s);const g=h*u-l*m;if(g<=0&&u>=0&&m<=0)return a=u/(u-m),n.copy(i).addScaledVector(Ro,a);const _=c*m-h*f;if(_<=0&&f-c>=0&&h-m>=0)return Lx.subVectors(s,r),a=(f-c)/(f-c+(h-m)),n.copy(r).addScaledVector(Lx,a);const p=1/(_+g+d);return o=g*p,a=d*p,n.copy(i).addScaledVector(Co,o).addScaledVector(Ro,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class pu{constructor(e=new G(1/0,1/0,1/0),n=new G(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Ei.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Ei.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Ei.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Ei):Ei.fromBufferAttribute(s,o),Ei.applyMatrix4(e.matrixWorld),this.expandByPoint(Ei);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Yu.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Yu.copy(i.boundingBox)),Yu.applyMatrix4(e.matrixWorld),this.union(Yu)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ei),Ei.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ka),qu.subVectors(this.max,Ka),bo.subVectors(e.a,Ka),Po.subVectors(e.b,Ka),Do.subVectors(e.c,Ka),Br.subVectors(Po,bo),zr.subVectors(Do,Po),Ps.subVectors(bo,Do);let n=[0,-Br.z,Br.y,0,-zr.z,zr.y,0,-Ps.z,Ps.y,Br.z,0,-Br.x,zr.z,0,-zr.x,Ps.z,0,-Ps.x,-Br.y,Br.x,0,-zr.y,zr.x,0,-Ps.y,Ps.x,0];return!fh(n,bo,Po,Do,qu)||(n=[1,0,0,0,1,0,0,0,1],!fh(n,bo,Po,Do,qu))?!1:($u.crossVectors(Br,zr),n=[$u.x,$u.y,$u.z],fh(n,bo,Po,Do,qu))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ei).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ei).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(or[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),or[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),or[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),or[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),or[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),or[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),or[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),or[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(or),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const or=[new G,new G,new G,new G,new G,new G,new G,new G],Ei=new G,Yu=new pu,bo=new G,Po=new G,Do=new G,Br=new G,zr=new G,Ps=new G,Ka=new G,qu=new G,$u=new G,Ds=new G;function fh(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){Ds.fromArray(t,s);const a=r.x*Math.abs(Ds.x)+r.y*Math.abs(Ds.y)+r.z*Math.abs(Ds.z),l=e.dot(Ds),u=n.dot(Ds),c=i.dot(Ds);if(Math.max(-Math.max(l,u,c),Math.min(l,u,c))>a)return!1}return!0}const zt=new G,Ku=new Je;let VD=0;class Ji extends _o{constructor(e,n,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:VD++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=vx,this.updateRanges=[],this.gpuType=Xi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Ku.fromBufferAttribute(this,n),Ku.applyMatrix3(e),this.setXY(n,Ku.x,Ku.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)zt.fromBufferAttribute(this,n),zt.applyMatrix3(e),this.setXYZ(n,zt.x,zt.y,zt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)zt.fromBufferAttribute(this,n),zt.applyMatrix4(e),this.setXYZ(n,zt.x,zt.y,zt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)zt.fromBufferAttribute(this,n),zt.applyNormalMatrix(e),this.setXYZ(n,zt.x,zt.y,zt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)zt.fromBufferAttribute(this,n),zt.transformDirection(e),this.setXYZ(n,zt.x,zt.y,zt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=qa(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=An(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=qa(n,this.array)),n}setX(e,n){return this.normalized&&(n=An(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=qa(n,this.array)),n}setY(e,n){return this.normalized&&(n=An(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=qa(n,this.array)),n}setZ(e,n){return this.normalized&&(n=An(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=qa(n,this.array)),n}setW(e,n){return this.normalized&&(n=An(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=An(n,this.array),i=An(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=An(n,this.array),i=An(i,this.array),r=An(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=An(n,this.array),i=An(i,this.array),r=An(r,this.array),s=An(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==vx&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class IE extends Ji{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class NE extends Ji{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class Sr extends Ji{constructor(e,n,i){super(new Float32Array(e),n,i)}}const HD=new pu,ja=new G,dh=new G;class v0{constructor(e=new G,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):HD.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ja.subVectors(e,this.center);const n=ja.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(ja,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(dh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ja.copy(e.center).add(dh)),this.expandByPoint(ja.copy(e.center).sub(dh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let GD=0;const ui=new It,hh=new Nn,Lo=new G,Gn=new pu,Za=new pu,jt=new G;class Lr extends _o{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:GD++}),this.uuid=hu(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(MD(e)?NE:IE)(e,1):this.index=e,this}setIndirect(e,n=0){return this.indirect=e,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Ue().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return ui.makeRotationFromQuaternion(e),this.applyMatrix4(ui),this}rotateX(e){return ui.makeRotationX(e),this.applyMatrix4(ui),this}rotateY(e){return ui.makeRotationY(e),this.applyMatrix4(ui),this}rotateZ(e){return ui.makeRotationZ(e),this.applyMatrix4(ui),this}translate(e,n,i){return ui.makeTranslation(e,n,i),this.applyMatrix4(ui),this}scale(e,n,i){return ui.makeScale(e,n,i),this.applyMatrix4(ui),this}lookAt(e){return hh.lookAt(e),hh.updateMatrix(),this.applyMatrix4(hh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Lo).negate(),this.translate(Lo.x,Lo.y,Lo.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const o=e[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Sr(i,3))}else{const i=Math.min(e.length,n.count);for(let r=0;r<i;r++){const s=e[r];n.setXYZ(r,s.x,s.y,s.z||0)}e.length>n.count&&Ie("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new pu);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ze("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new G(-1/0,-1/0,-1/0),new G(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];Gn.setFromBufferAttribute(s),this.morphTargetsRelative?(jt.addVectors(this.boundingBox.min,Gn.min),this.boundingBox.expandByPoint(jt),jt.addVectors(this.boundingBox.max,Gn.max),this.boundingBox.expandByPoint(jt)):(this.boundingBox.expandByPoint(Gn.min),this.boundingBox.expandByPoint(Gn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ze('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new v0);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ze("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new G,1/0);return}if(e){const i=this.boundingSphere.center;if(Gn.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];Za.setFromBufferAttribute(a),this.morphTargetsRelative?(jt.addVectors(Gn.min,Za.min),Gn.expandByPoint(jt),jt.addVectors(Gn.max,Za.max),Gn.expandByPoint(jt)):(Gn.expandByPoint(Za.min),Gn.expandByPoint(Za.max))}Gn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)jt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(jt));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],l=this.morphTargetsRelative;for(let u=0,c=a.count;u<c;u++)jt.fromBufferAttribute(a,u),l&&(Lo.fromBufferAttribute(e,u),jt.add(Lo)),r=Math.max(r,i.distanceToSquared(jt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&Ze('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){Ze("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;let o=this.getAttribute("tangent");(o===void 0||o.count!==i.count)&&(o=new Ji(new Float32Array(4*i.count),4),this.setAttribute("tangent",o));const a=[],l=[];for(let y=0;y<i.count;y++)a[y]=new G,l[y]=new G;const u=new G,c=new G,f=new G,d=new Je,h=new Je,m=new Je,g=new G,_=new G;function p(y,w,b){u.fromBufferAttribute(i,y),c.fromBufferAttribute(i,w),f.fromBufferAttribute(i,b),d.fromBufferAttribute(s,y),h.fromBufferAttribute(s,w),m.fromBufferAttribute(s,b),c.sub(u),f.sub(u),h.sub(d),m.sub(d);const P=1/(h.x*m.y-m.x*h.y);isFinite(P)&&(g.copy(c).multiplyScalar(m.y).addScaledVector(f,-h.y).multiplyScalar(P),_.copy(f).multiplyScalar(h.x).addScaledVector(c,-m.x).multiplyScalar(P),a[y].add(g),a[w].add(g),a[b].add(g),l[y].add(_),l[w].add(_),l[b].add(_))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let y=0,w=v.length;y<w;++y){const b=v[y],P=b.start,D=b.count;for(let z=P,X=P+D;z<X;z+=3)p(e.getX(z+0),e.getX(z+1),e.getX(z+2))}const x=new G,S=new G,E=new G,T=new G;function A(y){E.fromBufferAttribute(r,y),T.copy(E);const w=a[y];x.copy(w),x.sub(E.multiplyScalar(E.dot(w))).normalize(),S.crossVectors(T,w);const P=S.dot(l[y])<0?-1:1;o.setXYZW(y,x.x,x.y,x.z,P)}for(let y=0,w=v.length;y<w;++y){const b=v[y],P=b.start,D=b.count;for(let z=P,X=P+D;z<X;z+=3)A(e.getX(z+0)),A(e.getX(z+1)),A(e.getX(z+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==n.count)i=new Ji(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let d=0,h=i.count;d<h;d++)i.setXYZ(d,0,0,0);const r=new G,s=new G,o=new G,a=new G,l=new G,u=new G,c=new G,f=new G;if(e)for(let d=0,h=e.count;d<h;d+=3){const m=e.getX(d+0),g=e.getX(d+1),_=e.getX(d+2);r.fromBufferAttribute(n,m),s.fromBufferAttribute(n,g),o.fromBufferAttribute(n,_),c.subVectors(o,s),f.subVectors(r,s),c.cross(f),a.fromBufferAttribute(i,m),l.fromBufferAttribute(i,g),u.fromBufferAttribute(i,_),a.add(c),l.add(c),u.add(c),i.setXYZ(m,a.x,a.y,a.z),i.setXYZ(g,l.x,l.y,l.z),i.setXYZ(_,u.x,u.y,u.z)}else for(let d=0,h=n.count;d<h;d+=3)r.fromBufferAttribute(n,d+0),s.fromBufferAttribute(n,d+1),o.fromBufferAttribute(n,d+2),c.subVectors(o,s),f.subVectors(r,s),c.cross(f),i.setXYZ(d+0,c.x,c.y,c.z),i.setXYZ(d+1,c.x,c.y,c.z),i.setXYZ(d+2,c.x,c.y,c.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)jt.fromBufferAttribute(e,n),jt.normalize(),e.setXYZ(n,jt.x,jt.y,jt.z)}toNonIndexed(){function e(a,l){const u=a.array,c=a.itemSize,f=a.normalized,d=new u.constructor(l.length*c);let h=0,m=0;for(let g=0,_=l.length;g<_;g++){a.isInterleavedBufferAttribute?h=l[g]*a.data.stride+a.offset:h=l[g]*c;for(let p=0;p<c;p++)d[m++]=u[h++]}return new Ji(d,c,f)}if(this.index===null)return Ie("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Lr,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],u=e(l,i);n.setAttribute(a,u)}const s=this.morphAttributes;for(const a in s){const l=[],u=s[a];for(let c=0,f=u.length;c<f;c++){const d=u[c],h=e(d,i);l.push(h)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const u=o[a];n.addGroup(u.start,u.count,u.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const u=i[l];e.data.attributes[l]=u.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],c=[];for(let f=0,d=u.length;f<d;f++){const h=u[f];c.push(h.toJSON(e.data))}c.length>0&&(r[l]=c,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const u in r){const c=r[u];this.setAttribute(u,c.clone(n))}const s=e.morphAttributes;for(const u in s){const c=[],f=s[u];for(let d=0,h=f.length;d<h;d++)c.push(f[d].clone(n));this.morphAttributes[u]=c}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let u=0,c=o.length;u<c;u++){const f=o[u];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}let WD=0;class Zf extends _o{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:WD++}),this.uuid=hu(),this.name="",this.type="Material",this.blending=la,this.side=xs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Vp,this.blendDst=Hp,this.blendEquation=Gs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new $e(0,0,0),this.blendAlpha=0,this.depthFunc=Ea,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=_x,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Mo,this.stencilZFail=Mo,this.stencilZPass=Mo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){Ie(`Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){Ie(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector2&&i&&i.isVector2||r&&r.isEuler&&i&&i.isEuler||r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==la&&(i.blending=this.blending),this.side!==xs&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Vp&&(i.blendSrc=this.blendSrc),this.blendDst!==Hp&&(i.blendDst=this.blendDst),this.blendEquation!==Gs&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Ea&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==_x&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Mo&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Mo&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Mo&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}fromJSON(e,n){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new $e().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=n[e.map]||null),e.matcap!==void 0&&(this.matcap=n[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=n[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=n[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=n[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new Je().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=n[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=n[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=n[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=n[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=n[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=n[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=n[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=n[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=n[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=n[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=n[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=n[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=n[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=n[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Je().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=n[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=n[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=n[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=n[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=n[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=n[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=n[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const ar=new G,ph=new G,ju=new G,Vr=new G,mh=new G,Zu=new G,gh=new G;class XD{constructor(e=new G,n=new G(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ar)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=ar.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(ar.copy(this.origin).addScaledVector(this.direction,n),ar.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){ph.copy(e).add(n).multiplyScalar(.5),ju.copy(n).sub(e).normalize(),Vr.copy(this.origin).sub(ph);const s=e.distanceTo(n)*.5,o=-this.direction.dot(ju),a=Vr.dot(this.direction),l=-Vr.dot(ju),u=Vr.lengthSq(),c=Math.abs(1-o*o);let f,d,h,m;if(c>0)if(f=o*l-a,d=o*a-l,m=s*c,f>=0)if(d>=-m)if(d<=m){const g=1/c;f*=g,d*=g,h=f*(f+o*d+2*a)+d*(o*f+d+2*l)+u}else d=s,f=Math.max(0,-(o*d+a)),h=-f*f+d*(d+2*l)+u;else d=-s,f=Math.max(0,-(o*d+a)),h=-f*f+d*(d+2*l)+u;else d<=-m?(f=Math.max(0,-(-o*s+a)),d=f>0?-s:Math.min(Math.max(-s,-l),s),h=-f*f+d*(d+2*l)+u):d<=m?(f=0,d=Math.min(Math.max(-s,-l),s),h=d*(d+2*l)+u):(f=Math.max(0,-(o*s+a)),d=f>0?s:Math.min(Math.max(-s,-l),s),h=-f*f+d*(d+2*l)+u);else d=o>0?-s:s,f=Math.max(0,-(o*d+a)),h=-f*f+d*(d+2*l)+u;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(ph).addScaledVector(ju,d),h}intersectSphere(e,n){ar.subVectors(e.center,this.origin);const i=ar.dot(this.direction),r=ar.dot(ar)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l;const u=1/this.direction.x,c=1/this.direction.y,f=1/this.direction.z,d=this.origin;return u>=0?(i=(e.min.x-d.x)*u,r=(e.max.x-d.x)*u):(i=(e.max.x-d.x)*u,r=(e.min.x-d.x)*u),c>=0?(s=(e.min.y-d.y)*c,o=(e.max.y-d.y)*c):(s=(e.max.y-d.y)*c,o=(e.min.y-d.y)*c),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),f>=0?(a=(e.min.z-d.z)*f,l=(e.max.z-d.z)*f):(a=(e.max.z-d.z)*f,l=(e.min.z-d.z)*f),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,ar)!==null}intersectTriangle(e,n,i,r,s){mh.subVectors(n,e),Zu.subVectors(i,e),gh.crossVectors(mh,Zu);let o=this.direction.dot(gh),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Vr.subVectors(this.origin,e);const l=a*this.direction.dot(Zu.crossVectors(Vr,Zu));if(l<0)return null;const u=a*this.direction.dot(mh.cross(Vr));if(u<0||l+u>o)return null;const c=-a*Vr.dot(gh);return c<0?null:this.at(c/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class UE extends Zf{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new $e(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new fo,this.combine=hE,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Ix=new It,Ls=new XD,Qu=new v0,Nx=new G,Ju=new G,ec=new G,tc=new G,_h=new G,nc=new G,Ux=new G,ic=new G;class tr extends Nn{constructor(e=new Lr,n=new UE){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){nc.set(0,0,0);for(let l=0,u=s.length;l<u;l++){const c=a[l],f=s[l];c!==0&&(_h.fromBufferAttribute(f,e),o?nc.addScaledVector(_h,c):nc.addScaledVector(_h.sub(n),c))}n.add(nc)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Qu.copy(i.boundingSphere),Qu.applyMatrix4(s),Ls.copy(e.ray).recast(e.near),!(Qu.containsPoint(Ls.origin)===!1&&(Ls.intersectSphere(Qu,Nx)===null||Ls.origin.distanceToSquared(Nx)>(e.far-e.near)**2))&&(Ix.copy(s).invert(),Ls.copy(e.ray).applyMatrix4(Ix),!(i.boundingBox!==null&&Ls.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,Ls)))}_computeIntersections(e,n,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,u=s.attributes.uv,c=s.attributes.uv1,f=s.attributes.normal,d=s.groups,h=s.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,g=d.length;m<g;m++){const _=d[m],p=o[_.materialIndex],v=Math.max(_.start,h.start),x=Math.min(a.count,Math.min(_.start+_.count,h.start+h.count));for(let S=v,E=x;S<E;S+=3){const T=a.getX(S),A=a.getX(S+1),y=a.getX(S+2);r=rc(this,p,e,i,u,c,f,T,A,y),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=_.materialIndex,n.push(r))}}else{const m=Math.max(0,h.start),g=Math.min(a.count,h.start+h.count);for(let _=m,p=g;_<p;_+=3){const v=a.getX(_),x=a.getX(_+1),S=a.getX(_+2);r=rc(this,o,e,i,u,c,f,v,x,S),r&&(r.faceIndex=Math.floor(_/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let m=0,g=d.length;m<g;m++){const _=d[m],p=o[_.materialIndex],v=Math.max(_.start,h.start),x=Math.min(l.count,Math.min(_.start+_.count,h.start+h.count));for(let S=v,E=x;S<E;S+=3){const T=S,A=S+1,y=S+2;r=rc(this,p,e,i,u,c,f,T,A,y),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=_.materialIndex,n.push(r))}}else{const m=Math.max(0,h.start),g=Math.min(l.count,h.start+h.count);for(let _=m,p=g;_<p;_+=3){const v=_,x=_+1,S=_+2;r=rc(this,o,e,i,u,c,f,v,x,S),r&&(r.faceIndex=Math.floor(_/3),n.push(r))}}}}function YD(t,e,n,i,r,s,o,a){let l;if(e.side===In?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===xs,a),l===null)return null;ic.copy(a),ic.applyMatrix4(t.matrixWorld);const u=n.ray.origin.distanceTo(ic);return u<n.near||u>n.far?null:{distance:u,point:ic.clone(),object:t}}function rc(t,e,n,i,r,s,o,a,l,u){t.getVertexPosition(a,Ju),t.getVertexPosition(l,ec),t.getVertexPosition(u,tc);const c=YD(t,e,n,i,Ju,ec,tc,Ux);if(c){const f=new G;Ci.getBarycoord(Ux,Ju,ec,tc,f),r&&(c.uv=Ci.getInterpolatedAttribute(r,a,l,u,f,new Je)),s&&(c.uv1=Ci.getInterpolatedAttribute(s,a,l,u,f,new Je)),o&&(c.normal=Ci.getInterpolatedAttribute(o,a,l,u,f,new G),c.normal.dot(i.direction)>0&&c.normal.multiplyScalar(-1));const d={a,b:l,c:u,normal:new G,materialIndex:0};Ci.getNormal(Ju,ec,tc,d.normal),c.face=d,c.barycoord=f}return c}class qD extends gn{constructor(e=null,n=1,i=1,r,s,o,a,l,u=nn,c=nn,f,d){super(null,o,a,l,u,c,r,s,f,d),this.isDataTexture=!0,this.image={data:e,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const vh=new G,$D=new G,KD=new Ue;class Vs{constructor(e=new G(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=vh.subVectors(i,n).cross($D.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n,i=!0){const r=e.delta(vh),s=this.normal.dot(r);if(s===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const o=-(e.start.dot(this.normal)+this.constant)/s;return i===!0&&(o<0||o>1)?null:n.copy(e.start).addScaledVector(r,o)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||KD.getNormalMatrix(e),r=this.coplanarPoint(vh).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Is=new v0,jD=new Je(.5,.5),sc=new G;class x0{constructor(e=new Vs,n=new Vs,i=new Vs,r=new Vs,s=new Vs,o=new Vs){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=Yi,i=!1){const r=this.planes,s=e.elements,o=s[0],a=s[1],l=s[2],u=s[3],c=s[4],f=s[5],d=s[6],h=s[7],m=s[8],g=s[9],_=s[10],p=s[11],v=s[12],x=s[13],S=s[14],E=s[15];if(r[0].setComponents(u-o,h-c,p-m,E-v).normalize(),r[1].setComponents(u+o,h+c,p+m,E+v).normalize(),r[2].setComponents(u+a,h+f,p+g,E+x).normalize(),r[3].setComponents(u-a,h-f,p-g,E-x).normalize(),i)r[4].setComponents(l,d,_,S).normalize(),r[5].setComponents(u-l,h-d,p-_,E-S).normalize();else if(r[4].setComponents(u-l,h-d,p-_,E-S).normalize(),n===Yi)r[5].setComponents(u+l,h+d,p+_,E+S).normalize();else if(n===$l)r[5].setComponents(l,d,_,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Is.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Is.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Is)}intersectsSprite(e){Is.center.set(0,0,0);const n=jD.distanceTo(e.center);return Is.radius=.7071067811865476+n,Is.applyMatrix4(e.matrixWorld),this.intersectsSphere(Is)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(sc.x=r.normal.x>0?e.max.x:e.min.x,sc.y=r.normal.y>0?e.max.y:e.min.y,sc.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(sc)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class FE extends gn{constructor(e=[],n=uo,i,r,s,o,a,l,u,c){super(e,n,i,r,s,o,a,l,u,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class wa extends gn{constructor(e,n,i=er,r,s,o,a=nn,l=nn,u,c=Rr,f=1){if(c!==Rr&&c!==js)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:e,height:n,depth:f};super(d,r,s,o,a,l,c,i,u),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new _0(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class ZD extends wa{constructor(e,n=er,i=uo,r,s,o=nn,a=nn,l,u=Rr){const c={width:e,height:e,depth:1},f=[c,c,c,c,c,c];super(e,e,n,i,r,s,o,a,l,u),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class OE extends gn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class mu extends Lr{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],u=[],c=[],f=[];let d=0,h=0;m("z","y","x",-1,-1,i,n,e,o,s,0),m("z","y","x",1,-1,i,n,-e,o,s,1),m("x","z","y",1,1,e,i,n,r,o,2),m("x","z","y",1,-1,e,i,-n,r,o,3),m("x","y","z",1,-1,e,n,i,r,s,4),m("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Sr(u,3)),this.setAttribute("normal",new Sr(c,3)),this.setAttribute("uv",new Sr(f,2));function m(g,_,p,v,x,S,E,T,A,y,w){const b=S/A,P=E/y,D=S/2,z=E/2,X=T/2,U=A+1,B=y+1;let F=0,L=0;const Y=new G;for(let Q=0;Q<B;Q++){const Z=Q*P-z;for(let ne=0;ne<U;ne++){const Oe=ne*b-D;Y[g]=Oe*v,Y[_]=Z*x,Y[p]=X,u.push(Y.x,Y.y,Y.z),Y[g]=0,Y[_]=0,Y[p]=T>0?1:-1,c.push(Y.x,Y.y,Y.z),f.push(ne/A),f.push(1-Q/y),F+=1}}for(let Q=0;Q<y;Q++)for(let Z=0;Z<A;Z++){const ne=d+Z+U*Q,Oe=d+Z+U*(Q+1),Fe=d+(Z+1)+U*(Q+1),Ne=d+(Z+1)+U*Q;l.push(ne,Oe,Ne),l.push(Oe,Fe,Ne),L+=6}a.addGroup(h,L,w),h+=L,d+=F}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new mu(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class gu extends Lr{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),u=a+1,c=l+1,f=e/a,d=n/l,h=[],m=[],g=[],_=[];for(let p=0;p<c;p++){const v=p*d-o;for(let x=0;x<u;x++){const S=x*f-s;m.push(S,-v,0),g.push(0,0,1),_.push(x/a),_.push(1-p/l)}}for(let p=0;p<l;p++)for(let v=0;v<a;v++){const x=v+u*p,S=v+u*(p+1),E=v+1+u*(p+1),T=v+1+u*p;h.push(x,S,T),h.push(S,E,T)}this.setIndex(h),this.setAttribute("position",new Sr(m,3)),this.setAttribute("normal",new Sr(g,3)),this.setAttribute("uv",new Sr(_,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new gu(e.width,e.height,e.widthSegments,e.heightSegments)}}function Aa(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];if(Fx(r))r.isRenderTargetTexture?(Ie("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone();else if(Array.isArray(r))if(Fx(r[0])){const s=[];for(let o=0,a=r.length;o<a;o++)s[o]=r[o].clone();e[n][i]=s}else e[n][i]=r.slice();else e[n][i]=r}}return e}function xn(t){const e={};for(let n=0;n<t.length;n++){const i=Aa(t[n]);for(const r in i)e[r]=i[r]}return e}function Fx(t){return t&&(t.isColor||t.isMatrix3||t.isMatrix4||t.isVector2||t.isVector3||t.isVector4||t.isTexture||t.isQuaternion)}function QD(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function kE(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Xe.workingColorSpace}const JD={clone:Aa,merge:xn};var e2=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,t2=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Li extends Zf{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=e2,this.fragmentShader=t2,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Aa(e.uniforms),this.uniformsGroups=QD(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}fromJSON(e,n){if(super.fromJSON(e,n),e.uniforms!==void 0)for(const i in e.uniforms){const r=e.uniforms[i];switch(this.uniforms[i]={},r.type){case"t":this.uniforms[i].value=n[r.value]||null;break;case"c":this.uniforms[i].value=new $e().setHex(r.value);break;case"v2":this.uniforms[i].value=new Je().fromArray(r.value);break;case"v3":this.uniforms[i].value=new G().fromArray(r.value);break;case"v4":this.uniforms[i].value=new Mt().fromArray(r.value);break;case"m3":this.uniforms[i].value=new Ue().fromArray(r.value);break;case"m4":this.uniforms[i].value=new It().fromArray(r.value);break;default:this.uniforms[i].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class n2 extends Li{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class i2 extends Zf{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=pD,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class r2 extends Zf{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const xh={enabled:!1,files:{},add:function(t,e){this.enabled!==!1&&(Ox(t)||(this.files[t]=e))},get:function(t){if(this.enabled!==!1&&!Ox(t))return this.files[t]},remove:function(t){delete this.files[t]},clear:function(){this.files={}}};function Ox(t){try{const e=t.slice(t.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}class s2{constructor(e,n,i){const r=this;let s=!1,o=0,a=0,l;const u=[];this.onStart=void 0,this.onLoad=e,this.onProgress=n,this.onError=i,this._abortController=null,this.itemStart=function(c){a++,s===!1&&r.onStart!==void 0&&r.onStart(c,o,a),s=!0},this.itemEnd=function(c){o++,r.onProgress!==void 0&&r.onProgress(c,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(c){r.onError!==void 0&&r.onError(c)},this.resolveURL=function(c){return c=c.normalize("NFC"),l?l(c):c},this.setURLModifier=function(c){return l=c,this},this.addHandler=function(c,f){return u.push(c,f),this},this.removeHandler=function(c){const f=u.indexOf(c);return f!==-1&&u.splice(f,2),this},this.getHandler=function(c){for(let f=0,d=u.length;f<d;f+=2){const h=u[f],m=u[f+1];if(h.global&&(h.lastIndex=0),h.test(c))return m}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const o2=new s2;class y0{constructor(e){this.manager=e!==void 0?e:o2,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,n){const i=this;return new Promise(function(r,s){i.load(e,r,n,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}y0.DEFAULT_MATERIAL_NAME="__DEFAULT";const Io=new WeakMap;class a2 extends y0{constructor(e){super(e)}load(e,n,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=xh.get(`image:${e}`);if(o!==void 0){if(o.complete===!0)s.manager.itemStart(e),setTimeout(function(){n&&n(o),s.manager.itemEnd(e)},0);else{let f=Io.get(o);f===void 0&&(f=[],Io.set(o,f)),f.push({onLoad:n,onError:r})}return o}const a=Kl("img");function l(){c(),n&&n(this);const f=Io.get(this)||[];for(let d=0;d<f.length;d++){const h=f[d];h.onLoad&&h.onLoad(this)}Io.delete(this),s.manager.itemEnd(e)}function u(f){c(),r&&r(f),xh.remove(`image:${e}`);const d=Io.get(this)||[];for(let h=0;h<d.length;h++){const m=d[h];m.onError&&m.onError(f)}Io.delete(this),s.manager.itemError(e),s.manager.itemEnd(e)}function c(){a.removeEventListener("load",l,!1),a.removeEventListener("error",u,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",u,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),xh.add(`image:${e}`,a),s.manager.itemStart(e),a.src=e,a}}class l2 extends y0{constructor(e){super(e)}load(e,n,i,r){const s=new gn,o=new a2(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,n!==void 0&&n(s)},i,r),s}}class u2 extends Nn{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new $e(e),this.intensity=n}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,n}}const yh=new It,kx=new G,Bx=new G;class c2{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Je(512,512),this.mapType=$n,this.map=null,this.mapPass=null,this.matrix=new It,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new x0,this._frameExtents=new Je(1,1),this._viewportCount=1,this._viewports=[new Mt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;kx.setFromMatrixPosition(e.matrixWorld),n.position.copy(kx),Bx.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(Bx),n.updateMatrixWorld(),yh.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(yh,n.coordinateSystem,n.reversedDepth),n.coordinateSystem===$l||n.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(yh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const oc=new G,ac=new Ua,Oi=new G;class BE extends Nn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new It,this.projectionMatrix=new It,this.projectionMatrixInverse=new It,this.coordinateSystem=Yi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(oc,ac,Oi),Oi.x===1&&Oi.y===1&&Oi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(oc,ac,Oi.set(1,1,1)).invert()}updateWorldMatrix(e,n,i=!1){super.updateWorldMatrix(e,n,i),this.matrixWorld.decompose(oc,ac,Oi),Oi.x===1&&Oi.y===1&&Oi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(oc,ac,Oi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Hr=new G,zx=new Je,Vx=new Je;class qn extends BE{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Rm*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Kd*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Rm*2*Math.atan(Math.tan(Kd*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){Hr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Hr.x,Hr.y).multiplyScalar(-e/Hr.z),Hr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Hr.x,Hr.y).multiplyScalar(-e/Hr.z)}getViewSize(e,n){return this.getViewBounds(e,zx,Vx),n.subVectors(Vx,zx)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Kd*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,u=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/u,r*=o.width/l,i*=o.height/u}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}class f2 extends c2{constructor(){super(new qn(90,1,.5,500)),this.isPointLightShadow=!0}}class d2 extends u2{constructor(e,n,i=0,r=2){super(e,n),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new f2}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const n=super.toJSON(e);return n.object.distance=this.distance,n.object.decay=this.decay,n.object.shadow=this.shadow.toJSON(),n}}class zE extends BE{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,o=s+u*this.view.width,a-=c*this.view.offsetY,l=a-c*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const No=-90,Uo=1;class h2 extends Nn{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new qn(No,Uo,e,n);r.layers=this.layers,this.add(r);const s=new qn(No,Uo,e,n);s.layers=this.layers,this.add(s);const o=new qn(No,Uo,e,n);o.layers=this.layers,this.add(o);const a=new qn(No,Uo,e,n);a.layers=this.layers,this.add(a);const l=new qn(No,Uo,e,n);l.layers=this.layers,this.add(l);const u=new qn(No,Uo,e,n);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,a,l]=n;for(const u of n)this.remove(u);if(e===Yi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===$l)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of n)this.add(u),u.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,u,c]=this.children,f=e.getRenderTarget(),d=e.getActiveCubeFace(),h=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;const g=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let _=!1;e.isWebGLRenderer===!0?_=e.state.buffers.depth.getReversed():_=e.reversedDepthBuffer,e.setRenderTarget(i,0,r),_&&e.autoClear===!1&&e.clearDepth(),e.render(n,s),e.setRenderTarget(i,1,r),_&&e.autoClear===!1&&e.clearDepth(),e.render(n,o),e.setRenderTarget(i,2,r),_&&e.autoClear===!1&&e.clearDepth(),e.render(n,a),e.setRenderTarget(i,3,r),_&&e.autoClear===!1&&e.clearDepth(),e.render(n,l),e.setRenderTarget(i,4,r),_&&e.autoClear===!1&&e.clearDepth(),e.render(n,u),i.texture.generateMipmaps=g,e.setRenderTarget(i,5,r),_&&e.autoClear===!1&&e.clearDepth(),e.render(n,c),e.setRenderTarget(f,d,h),e.xr.enabled=m,i.texture.needsPMREMUpdate=!0}}class p2 extends qn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const G0=class G0{constructor(e,n,i,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,n,i,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,n=0){for(let i=0;i<4;i++)this.elements[i]=e[i+n];return this}set(e,n,i,r){const s=this.elements;return s[0]=e,s[2]=n,s[1]=i,s[3]=r,this}};G0.prototype.isMatrix2=!0;let Hx=G0;function Gx(t,e,n,i){const r=m2(i);switch(n){case AE:return t*e;case RE:return t*e/r.components*r.byteLength;case d0:return t*e/r.components*r.byteLength;case co:return t*e*2/r.components*r.byteLength;case h0:return t*e*2/r.components*r.byteLength;case CE:return t*e*3/r.components*r.byteLength;case Ri:return t*e*4/r.components*r.byteLength;case p0:return t*e*4/r.components*r.byteLength;case Cc:case Rc:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case bc:case Pc:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Jp:case tm:return Math.max(t,16)*Math.max(e,8)/4;case Qp:case em:return Math.max(t,8)*Math.max(e,8)/2;case nm:case im:case sm:case om:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case rm:case pf:case am:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case lm:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case um:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case cm:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case fm:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case dm:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case hm:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case pm:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case mm:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case gm:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case _m:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case vm:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case xm:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case ym:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case Sm:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case Mm:case Em:case Tm:return Math.ceil(t/4)*Math.ceil(e/4)*16;case wm:case Am:return Math.ceil(t/4)*Math.ceil(e/4)*8;case mf:case Cm:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function m2(t){switch(t){case $n:case ME:return{byteLength:1,components:1};case Yl:case EE:case Cr:return{byteLength:2,components:1};case c0:case f0:return{byteLength:2,components:4};case er:case u0:case Xi:return{byteLength:4,components:1};case TE:case wE:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${t}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:l0}}));typeof window<"u"&&(window.__THREE__?Ie("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=l0);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function VE(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&t!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t!==null&&t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function g2(t){const e=new WeakMap;function n(a,l){const u=a.array,c=a.usage,f=u.byteLength,d=t.createBuffer();t.bindBuffer(l,d),t.bufferData(l,u,c),a.onUploadCallback();let h;if(u instanceof Float32Array)h=t.FLOAT;else if(typeof Float16Array<"u"&&u instanceof Float16Array)h=t.HALF_FLOAT;else if(u instanceof Uint16Array)a.isFloat16BufferAttribute?h=t.HALF_FLOAT:h=t.UNSIGNED_SHORT;else if(u instanceof Int16Array)h=t.SHORT;else if(u instanceof Uint32Array)h=t.UNSIGNED_INT;else if(u instanceof Int32Array)h=t.INT;else if(u instanceof Int8Array)h=t.BYTE;else if(u instanceof Uint8Array)h=t.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)h=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:d,type:h,bytesPerElement:u.BYTES_PER_ELEMENT,version:a.version,size:f}}function i(a,l,u){const c=l.array,f=l.updateRanges;if(t.bindBuffer(u,a),f.length===0)t.bufferSubData(u,0,c);else{f.sort((h,m)=>h.start-m.start);let d=0;for(let h=1;h<f.length;h++){const m=f[d],g=f[h];g.start<=m.start+m.count+1?m.count=Math.max(m.count,g.start+g.count-m.start):(++d,f[d]=g)}f.length=d+1;for(let h=0,m=f.length;h<m;h++){const g=f[h];t.bufferSubData(u,g.start*c.BYTES_PER_ELEMENT,c,g.start,g.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(t.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const c=e.get(a);(!c||c.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const u=e.get(a);if(u===void 0)e.set(a,n(a,l));else if(u.version<a.version){if(u.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(u.buffer,a,l),u.version=a.version}}return{get:r,remove:s,update:o}}var _2=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,v2=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,x2=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,y2=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,S2=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,M2=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,E2=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,T2=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,w2=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,A2=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,C2=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,R2=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,b2=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,P2=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,D2=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,L2=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,I2=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,N2=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,U2=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,F2=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,O2=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,k2=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,B2=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,z2=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,V2=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,H2=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,G2=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,W2=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,X2=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Y2=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,q2="gl_FragColor = linearToOutputTexel( gl_FragColor );",$2=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,K2=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,j2=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Z2=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Q2=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,J2=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,eL=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,tL=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,nL=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,iL=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,rL=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,sL=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,oL=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,aL=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lL=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,uL=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,cL=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,fL=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,dL=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,hL=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,pL=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,mL=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,gL=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,_L=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,vL=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,xL=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,yL=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,SL=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ML=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,EL=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,TL=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,wL=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,AL=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,CL=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,RL=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,bL=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,PL=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,DL=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,LL=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,IL=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,NL=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,UL=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,FL=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,OL=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,kL=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,BL=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,zL=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,VL=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,HL=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,GL=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,WL=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,XL=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,YL=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,qL=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,$L=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,KL=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,jL=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,ZL=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,QL=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,JL=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,eI=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,tI=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,nI=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,iI=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,rI=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,sI=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,oI=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,aI=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,lI=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,uI=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,cI=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,fI=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,dI=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,hI=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,pI=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,mI=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,gI=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const _I=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,vI=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,xI=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,yI=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,SI=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,MI=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,EI=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,TI=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,wI=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,AI=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,CI=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,RI=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,bI=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,PI=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,DI=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,LI=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,II=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,NI=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,UI=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,FI=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,OI=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,kI=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,BI=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,zI=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,VI=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,HI=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,GI=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,WI=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,XI=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,YI=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,qI=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,$I=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,KI=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,jI=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ze={alphahash_fragment:_2,alphahash_pars_fragment:v2,alphamap_fragment:x2,alphamap_pars_fragment:y2,alphatest_fragment:S2,alphatest_pars_fragment:M2,aomap_fragment:E2,aomap_pars_fragment:T2,batching_pars_vertex:w2,batching_vertex:A2,begin_vertex:C2,beginnormal_vertex:R2,bsdfs:b2,iridescence_fragment:P2,bumpmap_pars_fragment:D2,clipping_planes_fragment:L2,clipping_planes_pars_fragment:I2,clipping_planes_pars_vertex:N2,clipping_planes_vertex:U2,color_fragment:F2,color_pars_fragment:O2,color_pars_vertex:k2,color_vertex:B2,common:z2,cube_uv_reflection_fragment:V2,defaultnormal_vertex:H2,displacementmap_pars_vertex:G2,displacementmap_vertex:W2,emissivemap_fragment:X2,emissivemap_pars_fragment:Y2,colorspace_fragment:q2,colorspace_pars_fragment:$2,envmap_fragment:K2,envmap_common_pars_fragment:j2,envmap_pars_fragment:Z2,envmap_pars_vertex:Q2,envmap_physical_pars_fragment:uL,envmap_vertex:J2,fog_vertex:eL,fog_pars_vertex:tL,fog_fragment:nL,fog_pars_fragment:iL,gradientmap_pars_fragment:rL,lightmap_pars_fragment:sL,lights_lambert_fragment:oL,lights_lambert_pars_fragment:aL,lights_pars_begin:lL,lights_toon_fragment:cL,lights_toon_pars_fragment:fL,lights_phong_fragment:dL,lights_phong_pars_fragment:hL,lights_physical_fragment:pL,lights_physical_pars_fragment:mL,lights_fragment_begin:gL,lights_fragment_maps:_L,lights_fragment_end:vL,lightprobes_pars_fragment:xL,logdepthbuf_fragment:yL,logdepthbuf_pars_fragment:SL,logdepthbuf_pars_vertex:ML,logdepthbuf_vertex:EL,map_fragment:TL,map_pars_fragment:wL,map_particle_fragment:AL,map_particle_pars_fragment:CL,metalnessmap_fragment:RL,metalnessmap_pars_fragment:bL,morphinstance_vertex:PL,morphcolor_vertex:DL,morphnormal_vertex:LL,morphtarget_pars_vertex:IL,morphtarget_vertex:NL,normal_fragment_begin:UL,normal_fragment_maps:FL,normal_pars_fragment:OL,normal_pars_vertex:kL,normal_vertex:BL,normalmap_pars_fragment:zL,clearcoat_normal_fragment_begin:VL,clearcoat_normal_fragment_maps:HL,clearcoat_pars_fragment:GL,iridescence_pars_fragment:WL,opaque_fragment:XL,packing:YL,premultiplied_alpha_fragment:qL,project_vertex:$L,dithering_fragment:KL,dithering_pars_fragment:jL,roughnessmap_fragment:ZL,roughnessmap_pars_fragment:QL,shadowmap_pars_fragment:JL,shadowmap_pars_vertex:eI,shadowmap_vertex:tI,shadowmask_pars_fragment:nI,skinbase_vertex:iI,skinning_pars_vertex:rI,skinning_vertex:sI,skinnormal_vertex:oI,specularmap_fragment:aI,specularmap_pars_fragment:lI,tonemapping_fragment:uI,tonemapping_pars_fragment:cI,transmission_fragment:fI,transmission_pars_fragment:dI,uv_pars_fragment:hI,uv_pars_vertex:pI,uv_vertex:mI,worldpos_vertex:gI,background_vert:_I,background_frag:vI,backgroundCube_vert:xI,backgroundCube_frag:yI,cube_vert:SI,cube_frag:MI,depth_vert:EI,depth_frag:TI,distance_vert:wI,distance_frag:AI,equirect_vert:CI,equirect_frag:RI,linedashed_vert:bI,linedashed_frag:PI,meshbasic_vert:DI,meshbasic_frag:LI,meshlambert_vert:II,meshlambert_frag:NI,meshmatcap_vert:UI,meshmatcap_frag:FI,meshnormal_vert:OI,meshnormal_frag:kI,meshphong_vert:BI,meshphong_frag:zI,meshphysical_vert:VI,meshphysical_frag:HI,meshtoon_vert:GI,meshtoon_frag:WI,points_vert:XI,points_frag:YI,shadow_vert:qI,shadow_frag:$I,sprite_vert:KI,sprite_frag:jI},pe={common:{diffuse:{value:new $e(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ue},alphaMap:{value:null},alphaMapTransform:{value:new Ue},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ue}},envmap:{envMap:{value:null},envMapRotation:{value:new Ue},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ue}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ue}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ue},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ue},normalScale:{value:new Je(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ue},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ue}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ue}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ue}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new $e(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new G},probesMax:{value:new G},probesResolution:{value:new G}},points:{diffuse:{value:new $e(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ue},alphaTest:{value:0},uvTransform:{value:new Ue}},sprite:{diffuse:{value:new $e(16777215)},opacity:{value:1},center:{value:new Je(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ue},alphaMap:{value:null},alphaMapTransform:{value:new Ue},alphaTest:{value:0}}},Vi={basic:{uniforms:xn([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.fog]),vertexShader:ze.meshbasic_vert,fragmentShader:ze.meshbasic_frag},lambert:{uniforms:xn([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new $e(0)},envMapIntensity:{value:1}}]),vertexShader:ze.meshlambert_vert,fragmentShader:ze.meshlambert_frag},phong:{uniforms:xn([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new $e(0)},specular:{value:new $e(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ze.meshphong_vert,fragmentShader:ze.meshphong_frag},standard:{uniforms:xn([pe.common,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.roughnessmap,pe.metalnessmap,pe.fog,pe.lights,{emissive:{value:new $e(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag},toon:{uniforms:xn([pe.common,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.gradientmap,pe.fog,pe.lights,{emissive:{value:new $e(0)}}]),vertexShader:ze.meshtoon_vert,fragmentShader:ze.meshtoon_frag},matcap:{uniforms:xn([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,{matcap:{value:null}}]),vertexShader:ze.meshmatcap_vert,fragmentShader:ze.meshmatcap_frag},points:{uniforms:xn([pe.points,pe.fog]),vertexShader:ze.points_vert,fragmentShader:ze.points_frag},dashed:{uniforms:xn([pe.common,pe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ze.linedashed_vert,fragmentShader:ze.linedashed_frag},depth:{uniforms:xn([pe.common,pe.displacementmap]),vertexShader:ze.depth_vert,fragmentShader:ze.depth_frag},normal:{uniforms:xn([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,{opacity:{value:1}}]),vertexShader:ze.meshnormal_vert,fragmentShader:ze.meshnormal_frag},sprite:{uniforms:xn([pe.sprite,pe.fog]),vertexShader:ze.sprite_vert,fragmentShader:ze.sprite_frag},background:{uniforms:{uvTransform:{value:new Ue},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ze.background_vert,fragmentShader:ze.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ue}},vertexShader:ze.backgroundCube_vert,fragmentShader:ze.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ze.cube_vert,fragmentShader:ze.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ze.equirect_vert,fragmentShader:ze.equirect_frag},distance:{uniforms:xn([pe.common,pe.displacementmap,{referencePosition:{value:new G},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ze.distance_vert,fragmentShader:ze.distance_frag},shadow:{uniforms:xn([pe.lights,pe.fog,{color:{value:new $e(0)},opacity:{value:1}}]),vertexShader:ze.shadow_vert,fragmentShader:ze.shadow_frag}};Vi.physical={uniforms:xn([Vi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ue},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ue},clearcoatNormalScale:{value:new Je(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ue},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ue},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ue},sheen:{value:0},sheenColor:{value:new $e(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ue},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ue},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ue},transmissionSamplerSize:{value:new Je},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ue},attenuationDistance:{value:0},attenuationColor:{value:new $e(0)},specularColor:{value:new $e(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ue},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ue},anisotropyVector:{value:new Je},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ue}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag};const lc={r:0,b:0,g:0},ZI=new It,HE=new Ue;HE.set(-1,0,0,0,1,0,0,0,1);function QI(t,e,n,i,r,s){const o=new $e(0);let a=r===!0?0:1,l,u,c=null,f=0,d=null;function h(v){let x=v.isScene===!0?v.background:null;if(x&&x.isTexture){const S=v.backgroundBlurriness>0;x=e.get(x,S)}return x}function m(v){let x=!1;const S=h(v);S===null?_(o,a):S&&S.isColor&&(_(S,1),x=!0);const E=t.xr.getEnvironmentBlendMode();E==="additive"?n.buffers.color.setClear(0,0,0,1,s):E==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,s),(t.autoClear||x)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function g(v,x){const S=h(x);S&&(S.isCubeTexture||S.mapping===jf)?(u===void 0&&(u=new tr(new mu(1,1,1),new Li({name:"BackgroundCubeMaterial",uniforms:Aa(Vi.backgroundCube.uniforms),vertexShader:Vi.backgroundCube.vertexShader,fragmentShader:Vi.backgroundCube.fragmentShader,side:In,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(E,T,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),u.material.uniforms.envMap.value=S,u.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(ZI.makeRotationFromEuler(x.backgroundRotation)).transpose(),S.isCubeTexture&&S.isRenderTargetTexture===!1&&u.material.uniforms.backgroundRotation.value.premultiply(HE),u.material.toneMapped=Xe.getTransfer(S.colorSpace)!==nt,(c!==S||f!==S.version||d!==t.toneMapping)&&(u.material.needsUpdate=!0,c=S,f=S.version,d=t.toneMapping),u.layers.enableAll(),v.unshift(u,u.geometry,u.material,0,0,null)):S&&S.isTexture&&(l===void 0&&(l=new tr(new gu(2,2),new Li({name:"BackgroundMaterial",uniforms:Aa(Vi.background.uniforms),vertexShader:Vi.background.vertexShader,fragmentShader:Vi.background.fragmentShader,side:xs,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=S,l.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,l.material.toneMapped=Xe.getTransfer(S.colorSpace)!==nt,S.matrixAutoUpdate===!0&&S.updateMatrix(),l.material.uniforms.uvTransform.value.copy(S.matrix),(c!==S||f!==S.version||d!==t.toneMapping)&&(l.material.needsUpdate=!0,c=S,f=S.version,d=t.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null))}function _(v,x){v.getRGB(lc,kE(t)),n.buffers.color.setClear(lc.r,lc.g,lc.b,x,s)}function p(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(v,x=1){o.set(v),a=x,_(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(v){a=v,_(o,a)},render:m,addToRenderList:g,dispose:p}}function JI(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=d(null);let s=r,o=!1;function a(P,D,z,X,U){let B=!1;const F=f(P,X,z,D);s!==F&&(s=F,u(s.object)),B=h(P,X,z,U),B&&m(P,X,z,U),U!==null&&e.update(U,t.ELEMENT_ARRAY_BUFFER),(B||o)&&(o=!1,S(P,D,z,X),U!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(U).buffer))}function l(){return t.createVertexArray()}function u(P){return t.bindVertexArray(P)}function c(P){return t.deleteVertexArray(P)}function f(P,D,z,X){const U=X.wireframe===!0;let B=i[D.id];B===void 0&&(B={},i[D.id]=B);const F=P.isInstancedMesh===!0?P.id:0;let L=B[F];L===void 0&&(L={},B[F]=L);let Y=L[z.id];Y===void 0&&(Y={},L[z.id]=Y);let Q=Y[U];return Q===void 0&&(Q=d(l()),Y[U]=Q),Q}function d(P){const D=[],z=[],X=[];for(let U=0;U<n;U++)D[U]=0,z[U]=0,X[U]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:z,attributeDivisors:X,object:P,attributes:{},index:null}}function h(P,D,z,X){const U=s.attributes,B=D.attributes;let F=0;const L=z.getAttributes();for(const Y in L)if(L[Y].location>=0){const Z=U[Y];let ne=B[Y];if(ne===void 0&&(Y==="instanceMatrix"&&P.instanceMatrix&&(ne=P.instanceMatrix),Y==="instanceColor"&&P.instanceColor&&(ne=P.instanceColor)),Z===void 0||Z.attribute!==ne||ne&&Z.data!==ne.data)return!0;F++}return s.attributesNum!==F||s.index!==X}function m(P,D,z,X){const U={},B=D.attributes;let F=0;const L=z.getAttributes();for(const Y in L)if(L[Y].location>=0){let Z=B[Y];Z===void 0&&(Y==="instanceMatrix"&&P.instanceMatrix&&(Z=P.instanceMatrix),Y==="instanceColor"&&P.instanceColor&&(Z=P.instanceColor));const ne={};ne.attribute=Z,Z&&Z.data&&(ne.data=Z.data),U[Y]=ne,F++}s.attributes=U,s.attributesNum=F,s.index=X}function g(){const P=s.newAttributes;for(let D=0,z=P.length;D<z;D++)P[D]=0}function _(P){p(P,0)}function p(P,D){const z=s.newAttributes,X=s.enabledAttributes,U=s.attributeDivisors;z[P]=1,X[P]===0&&(t.enableVertexAttribArray(P),X[P]=1),U[P]!==D&&(t.vertexAttribDivisor(P,D),U[P]=D)}function v(){const P=s.newAttributes,D=s.enabledAttributes;for(let z=0,X=D.length;z<X;z++)D[z]!==P[z]&&(t.disableVertexAttribArray(z),D[z]=0)}function x(P,D,z,X,U,B,F){F===!0?t.vertexAttribIPointer(P,D,z,U,B):t.vertexAttribPointer(P,D,z,X,U,B)}function S(P,D,z,X){g();const U=X.attributes,B=z.getAttributes(),F=D.defaultAttributeValues;for(const L in B){const Y=B[L];if(Y.location>=0){let Q=U[L];if(Q===void 0&&(L==="instanceMatrix"&&P.instanceMatrix&&(Q=P.instanceMatrix),L==="instanceColor"&&P.instanceColor&&(Q=P.instanceColor)),Q!==void 0){const Z=Q.normalized,ne=Q.itemSize,Oe=e.get(Q);if(Oe===void 0)continue;const Fe=Oe.buffer,Ne=Oe.type,$=Oe.bytesPerElement,se=Ne===t.INT||Ne===t.UNSIGNED_INT||Q.gpuType===u0;if(Q.isInterleavedBufferAttribute){const re=Q.data,be=re.stride,Le=Q.offset;if(re.isInstancedInterleavedBuffer){for(let Ee=0;Ee<Y.locationSize;Ee++)p(Y.location+Ee,re.meshPerAttribute);P.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=re.meshPerAttribute*re.count)}else for(let Ee=0;Ee<Y.locationSize;Ee++)_(Y.location+Ee);t.bindBuffer(t.ARRAY_BUFFER,Fe);for(let Ee=0;Ee<Y.locationSize;Ee++)x(Y.location+Ee,ne/Y.locationSize,Ne,Z,be*$,(Le+ne/Y.locationSize*Ee)*$,se)}else{if(Q.isInstancedBufferAttribute){for(let re=0;re<Y.locationSize;re++)p(Y.location+re,Q.meshPerAttribute);P.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let re=0;re<Y.locationSize;re++)_(Y.location+re);t.bindBuffer(t.ARRAY_BUFFER,Fe);for(let re=0;re<Y.locationSize;re++)x(Y.location+re,ne/Y.locationSize,Ne,Z,ne*$,ne/Y.locationSize*re*$,se)}}else if(F!==void 0){const Z=F[L];if(Z!==void 0)switch(Z.length){case 2:t.vertexAttrib2fv(Y.location,Z);break;case 3:t.vertexAttrib3fv(Y.location,Z);break;case 4:t.vertexAttrib4fv(Y.location,Z);break;default:t.vertexAttrib1fv(Y.location,Z)}}}}v()}function E(){w();for(const P in i){const D=i[P];for(const z in D){const X=D[z];for(const U in X){const B=X[U];for(const F in B)c(B[F].object),delete B[F];delete X[U]}}delete i[P]}}function T(P){if(i[P.id]===void 0)return;const D=i[P.id];for(const z in D){const X=D[z];for(const U in X){const B=X[U];for(const F in B)c(B[F].object),delete B[F];delete X[U]}}delete i[P.id]}function A(P){for(const D in i){const z=i[D];for(const X in z){const U=z[X];if(U[P.id]===void 0)continue;const B=U[P.id];for(const F in B)c(B[F].object),delete B[F];delete U[P.id]}}}function y(P){for(const D in i){const z=i[D],X=P.isInstancedMesh===!0?P.id:0,U=z[X];if(U!==void 0){for(const B in U){const F=U[B];for(const L in F)c(F[L].object),delete F[L];delete U[B]}delete z[X],Object.keys(z).length===0&&delete i[D]}}}function w(){b(),o=!0,s!==r&&(s=r,u(s.object))}function b(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:w,resetDefaultState:b,dispose:E,releaseStatesOfGeometry:T,releaseStatesOfObject:y,releaseStatesOfProgram:A,initAttributes:g,enableAttribute:_,disableUnusedAttributes:v}}function eN(t,e,n){let i;function r(l){i=l}function s(l,u){t.drawArrays(i,l,u),n.update(u,i,1)}function o(l,u,c){c!==0&&(t.drawArraysInstanced(i,l,u,c),n.update(u,i,c))}function a(l,u,c){if(c===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,u,0,c);let d=0;for(let h=0;h<c;h++)d+=u[h];n.update(d,i,1)}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a}function tN(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(A){return!(A!==Ri&&i.convert(A)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(A){const y=A===Cr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==$n&&i.convert(A)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==Xi&&!y)}function l(A){if(A==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=n.precision!==void 0?n.precision:"highp";const c=l(u);c!==u&&(Ie("WebGLRenderer:",u,"not supported, using",c,"instead."),u=c);const f=n.logarithmicDepthBuffer===!0,d=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control");n.reversedDepthBuffer===!0&&d===!1&&Ie("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const h=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),m=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=t.getParameter(t.MAX_TEXTURE_SIZE),_=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),p=t.getParameter(t.MAX_VERTEX_ATTRIBS),v=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),x=t.getParameter(t.MAX_VARYING_VECTORS),S=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),E=t.getParameter(t.MAX_SAMPLES),T=t.getParameter(t.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:u,logarithmicDepthBuffer:f,reversedDepthBuffer:d,maxTextures:h,maxVertexTextures:m,maxTextureSize:g,maxCubemapSize:_,maxAttributes:p,maxVertexUniforms:v,maxVaryings:x,maxFragmentUniforms:S,maxSamples:E,samples:T}}function nN(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new Vs,a=new Ue,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){const h=f.length!==0||d||i!==0||r;return r=d,i=f.length,h},this.beginShadows=function(){s=!0,c(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,d){n=c(f,d,0)},this.setState=function(f,d,h){const m=f.clippingPlanes,g=f.clipIntersection,_=f.clipShadows,p=t.get(f);if(!r||m===null||m.length===0||s&&!_)s?c(null):u();else{const v=s?0:i,x=v*4;let S=p.clippingState||null;l.value=S,S=c(m,d,x,h);for(let E=0;E!==x;++E)S[E]=n[E];p.clippingState=S,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=v}};function u(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function c(f,d,h,m){const g=f!==null?f.length:0;let _=null;if(g!==0){if(_=l.value,m!==!0||_===null){const p=h+g*4,v=d.matrixWorldInverse;a.getNormalMatrix(v),(_===null||_.length<p)&&(_=new Float32Array(p));for(let x=0,S=h;x!==g;++x,S+=4)o.copy(f[x]).applyMatrix4(v,a),o.normal.toArray(_,S),_[S+3]=o.constant}l.value=_,l.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,_}}const Jr=4,Wx=[.125,.215,.35,.446,.526,.582],Ws=20,iN=256,Qa=new zE,Xx=new $e;let Sh=null,Mh=0,Eh=0,Th=!1;const rN=new G;class Yx{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,n=0,i=.1,r=100,s={}){const{size:o=256,position:a=rN}=s;Sh=this._renderer.getRenderTarget(),Mh=this._renderer.getActiveCubeFace(),Eh=this._renderer.getActiveMipmapLevel(),Th=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,a),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Kx(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=$x(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Sh,Mh,Eh),this._renderer.xr.enabled=Th,e.scissorTest=!1,Fo(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===uo||e.mapping===Ta?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Sh=this._renderer.getRenderTarget(),Mh=this._renderer.getActiveCubeFace(),Eh=this._renderer.getActiveMipmapLevel(),Th=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:mn,minFilter:mn,generateMipmaps:!1,type:Cr,format:Ri,colorSpace:gf,depthBuffer:!1},r=qx(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=qx(e,n,i);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=sN(s)),this._blurMaterial=aN(s,e,n),this._ggxMaterial=oN(s,e,n)}return r}_compileMaterial(e){const n=new tr(new Lr,e);this._renderer.compile(n,Qa)}_sceneToCubeUV(e,n,i,r,s){const l=new qn(90,1,n,i),u=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],f=this._renderer,d=f.autoClear,h=f.toneMapping;f.getClearColor(Xx),f.toneMapping=Zi,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(r),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new tr(new mu,new UE({name:"PMREM.Background",side:In,depthWrite:!1,depthTest:!1})));const g=this._backgroundBox,_=g.material;let p=!1;const v=e.background;v?v.isColor&&(_.color.copy(v),e.background=null,p=!0):(_.color.copy(Xx),p=!0);for(let x=0;x<6;x++){const S=x%3;S===0?(l.up.set(0,u[x],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+c[x],s.y,s.z)):S===1?(l.up.set(0,0,u[x]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+c[x],s.z)):(l.up.set(0,u[x],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+c[x]));const E=this._cubeSize;Fo(r,S*E,x>2?E:0,E,E),f.setRenderTarget(r),p&&f.render(g,l),f.render(e,l)}f.toneMapping=h,f.autoClear=d,e.background=v}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===uo||e.mapping===Ta;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Kx()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=$x());const s=r?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=s;const a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Fo(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,Qa)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);n.autoClear=i}_applyGGXFilter(e,n,i){const r=this._renderer,s=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[i];a.material=o;const l=o.uniforms,u=i/(this._lodMeshes.length-1),c=n/(this._lodMeshes.length-1),f=Math.sqrt(u*u-c*c),d=0+u*1.25,h=f*d,{_lodMax:m}=this,g=this._sizeLods[i],_=3*g*(i>m-Jr?i-m+Jr:0),p=4*(this._cubeSize-g);l.envMap.value=e.texture,l.roughness.value=h,l.mipInt.value=m-n,Fo(s,_,p,3*g,2*g),r.setRenderTarget(s),r.render(a,Qa),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=m-i,Fo(e,_,p,3*g,2*g),r.setRenderTarget(e),r.render(a,Qa)}_blur(e,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){const l=this._renderer,u=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&Ze("blur direction must be either latitudinal or longitudinal!");const c=3,f=this._lodMeshes[r];f.material=u;const d=u.uniforms,h=this._sizeLods[i]-1,m=isFinite(s)?Math.PI/(2*h):2*Math.PI/(2*Ws-1),g=s/m,_=isFinite(s)?1+Math.floor(c*g):Ws;_>Ws&&Ie(`sigmaRadians, ${s}, is too large and will clip, as it requested ${_} samples when the maximum is set to ${Ws}`);const p=[];let v=0;for(let A=0;A<Ws;++A){const y=A/g,w=Math.exp(-y*y/2);p.push(w),A===0?v+=w:A<_&&(v+=2*w)}for(let A=0;A<p.length;A++)p[A]=p[A]/v;d.envMap.value=e.texture,d.samples.value=_,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:x}=this;d.dTheta.value=m,d.mipInt.value=x-i;const S=this._sizeLods[r],E=3*S*(r>x-Jr?r-x+Jr:0),T=4*(this._cubeSize-S);Fo(n,E,T,3*S,2*S),l.setRenderTarget(n),l.render(f,Qa)}}function sN(t){const e=[],n=[],i=[];let r=t;const s=t-Jr+1+Wx.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);e.push(a);let l=1/a;o>t-Jr?l=Wx[o-t+Jr-1]:o===0&&(l=0),n.push(l);const u=1/(a-2),c=-u,f=1+u,d=[c,c,f,c,f,f,c,c,f,f,c,f],h=6,m=6,g=3,_=2,p=1,v=new Float32Array(g*m*h),x=new Float32Array(_*m*h),S=new Float32Array(p*m*h);for(let T=0;T<h;T++){const A=T%3*2/3-1,y=T>2?0:-1,w=[A,y,0,A+2/3,y,0,A+2/3,y+1,0,A,y,0,A+2/3,y+1,0,A,y+1,0];v.set(w,g*m*T),x.set(d,_*m*T);const b=[T,T,T,T,T,T];S.set(b,p*m*T)}const E=new Lr;E.setAttribute("position",new Ji(v,g)),E.setAttribute("uv",new Ji(x,_)),E.setAttribute("faceIndex",new Ji(S,p)),i.push(new tr(E,null)),r>Jr&&r--}return{lodMeshes:i,sizeLods:e,sigmas:n}}function qx(t,e,n){const i=new Qi(t,e,n);return i.texture.mapping=jf,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Fo(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function oN(t,e,n){return new Li({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:iN,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Qf(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:xr,depthTest:!1,depthWrite:!1})}function aN(t,e,n){const i=new Float32Array(Ws),r=new G(0,1,0);return new Li({name:"SphericalGaussianBlur",defines:{n:Ws,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Qf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:xr,depthTest:!1,depthWrite:!1})}function $x(){return new Li({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Qf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:xr,depthTest:!1,depthWrite:!1})}function Kx(){return new Li({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Qf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:xr,depthTest:!1,depthWrite:!1})}function Qf(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class GE extends Qi{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new FE(r),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new mu(5,5,5),s=new Li({name:"CubemapFromEquirect",uniforms:Aa(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:In,blending:xr});s.uniforms.tEquirect.value=n;const o=new tr(r,s),a=n.minFilter;return n.minFilter===Ks&&(n.minFilter=mn),new h2(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}function lN(t){let e=new WeakMap,n=new WeakMap,i=null;function r(d,h=!1){return d==null?null:h?o(d):s(d)}function s(d){if(d&&d.isTexture){const h=d.mapping;if(h===Yd||h===qd)if(e.has(d)){const m=e.get(d).texture;return a(m,d.mapping)}else{const m=d.image;if(m&&m.height>0){const g=new GE(m.height);return g.fromEquirectangularTexture(t,d),e.set(d,g),d.addEventListener("dispose",u),a(g.texture,d.mapping)}else return null}}return d}function o(d){if(d&&d.isTexture){const h=d.mapping,m=h===Yd||h===qd,g=h===uo||h===Ta;if(m||g){let _=n.get(d);const p=_!==void 0?_.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==p)return i===null&&(i=new Yx(t)),_=m?i.fromEquirectangular(d,_):i.fromCubemap(d,_),_.texture.pmremVersion=d.pmremVersion,n.set(d,_),_.texture;if(_!==void 0)return _.texture;{const v=d.image;return m&&v&&v.height>0||g&&v&&l(v)?(i===null&&(i=new Yx(t)),_=m?i.fromEquirectangular(d):i.fromCubemap(d),_.texture.pmremVersion=d.pmremVersion,n.set(d,_),d.addEventListener("dispose",c),_.texture):null}}}return d}function a(d,h){return h===Yd?d.mapping=uo:h===qd&&(d.mapping=Ta),d}function l(d){let h=0;const m=6;for(let g=0;g<m;g++)d[g]!==void 0&&h++;return h===m}function u(d){const h=d.target;h.removeEventListener("dispose",u);const m=e.get(h);m!==void 0&&(e.delete(h),m.dispose())}function c(d){const h=d.target;h.removeEventListener("dispose",c);const m=n.get(h);m!==void 0&&(n.delete(h),m.dispose())}function f(){e=new WeakMap,n=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:f}}function uN(t){const e={};function n(i){if(e[i]!==void 0)return e[i];const r=t.getExtension(i);return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&ua("WebGLRenderer: "+i+" extension not supported."),r}}}function cN(t,e,n,i){const r={},s=new WeakMap;function o(f){const d=f.target;d.index!==null&&e.remove(d.index);for(const m in d.attributes)e.remove(d.attributes[m]);d.removeEventListener("dispose",o),delete r[d.id];const h=s.get(d);h&&(e.remove(h),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,n.memory.geometries--}function a(f,d){return r[d.id]===!0||(d.addEventListener("dispose",o),r[d.id]=!0,n.memory.geometries++),d}function l(f){const d=f.attributes;for(const h in d)e.update(d[h],t.ARRAY_BUFFER)}function u(f){const d=[],h=f.index,m=f.attributes.position;let g=0;if(m===void 0)return;if(h!==null){const v=h.array;g=h.version;for(let x=0,S=v.length;x<S;x+=3){const E=v[x+0],T=v[x+1],A=v[x+2];d.push(E,T,T,A,A,E)}}else{const v=m.array;g=m.version;for(let x=0,S=v.length/3-1;x<S;x+=3){const E=x+0,T=x+1,A=x+2;d.push(E,T,T,A,A,E)}}const _=new(m.count>=65535?NE:IE)(d,1);_.version=g;const p=s.get(f);p&&e.remove(p),s.set(f,_)}function c(f){const d=s.get(f);if(d){const h=f.index;h!==null&&d.version<h.version&&u(f)}else u(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:c}}function fN(t,e,n){let i;function r(f){i=f}let s,o;function a(f){s=f.type,o=f.bytesPerElement}function l(f,d){t.drawElements(i,d,s,f*o),n.update(d,i,1)}function u(f,d,h){h!==0&&(t.drawElementsInstanced(i,d,s,f*o,h),n.update(d,i,h))}function c(f,d,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,s,f,0,h);let g=0;for(let _=0;_<h;_++)g+=d[_];n.update(g,i,1)}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=u,this.renderMultiDraw=c}function dN(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(s/3);break;case t.LINES:n.lines+=a*(s/2);break;case t.LINE_STRIP:n.lines+=a*(s-1);break;case t.LINE_LOOP:n.lines+=a*s;break;case t.POINTS:n.points+=a*s;break;default:Ze("WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function hN(t,e,n){const i=new WeakMap,r=new Mt;function s(o,a,l){const u=o.morphTargetInfluences,c=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=c!==void 0?c.length:0;let d=i.get(a);if(d===void 0||d.count!==f){let b=function(){y.dispose(),i.delete(a),a.removeEventListener("dispose",b)};var h=b;d!==void 0&&d.texture.dispose();const m=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],v=a.morphAttributes.normal||[],x=a.morphAttributes.color||[];let S=0;m===!0&&(S=1),g===!0&&(S=2),_===!0&&(S=3);let E=a.attributes.position.count*S,T=1;E>e.maxTextureSize&&(T=Math.ceil(E/e.maxTextureSize),E=e.maxTextureSize);const A=new Float32Array(E*T*4*f),y=new PE(A,E,T,f);y.type=Xi,y.needsUpdate=!0;const w=S*4;for(let P=0;P<f;P++){const D=p[P],z=v[P],X=x[P],U=E*T*4*P;for(let B=0;B<D.count;B++){const F=B*w;m===!0&&(r.fromBufferAttribute(D,B),A[U+F+0]=r.x,A[U+F+1]=r.y,A[U+F+2]=r.z,A[U+F+3]=0),g===!0&&(r.fromBufferAttribute(z,B),A[U+F+4]=r.x,A[U+F+5]=r.y,A[U+F+6]=r.z,A[U+F+7]=0),_===!0&&(r.fromBufferAttribute(X,B),A[U+F+8]=r.x,A[U+F+9]=r.y,A[U+F+10]=r.z,A[U+F+11]=X.itemSize===4?r.w:1)}}d={count:f,texture:y,size:new Je(E,T)},i.set(a,d),a.addEventListener("dispose",b)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",o.morphTexture,n);else{let m=0;for(let _=0;_<u.length;_++)m+=u[_];const g=a.morphTargetsRelative?1:1-m;l.getUniforms().setValue(t,"morphTargetBaseInfluence",g),l.getUniforms().setValue(t,"morphTargetInfluences",u)}l.getUniforms().setValue(t,"morphTargetsTexture",d.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",d.size)}return{update:s}}function pN(t,e,n,i,r){let s=new WeakMap;function o(u){const c=r.render.frame,f=u.geometry,d=e.get(u,f);if(s.get(d)!==c&&(e.update(d),s.set(d,c)),u.isInstancedMesh&&(u.hasEventListener("dispose",l)===!1&&u.addEventListener("dispose",l),s.get(u)!==c&&(n.update(u.instanceMatrix,t.ARRAY_BUFFER),u.instanceColor!==null&&n.update(u.instanceColor,t.ARRAY_BUFFER),s.set(u,c))),u.isSkinnedMesh){const h=u.skeleton;s.get(h)!==c&&(h.update(),s.set(h,c))}return d}function a(){s=new WeakMap}function l(u){const c=u.target;c.removeEventListener("dispose",l),i.releaseStatesOfObject(c),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:o,dispose:a}}const mN={[pE]:"LINEAR_TONE_MAPPING",[mE]:"REINHARD_TONE_MAPPING",[gE]:"CINEON_TONE_MAPPING",[_E]:"ACES_FILMIC_TONE_MAPPING",[xE]:"AGX_TONE_MAPPING",[yE]:"NEUTRAL_TONE_MAPPING",[vE]:"CUSTOM_TONE_MAPPING"};function gN(t,e,n,i,r,s){const o=new Qi(e,n,{type:t,depthBuffer:r,stencilBuffer:s,samples:i?4:0,depthTexture:r?new wa(e,n):void 0}),a=new Qi(e,n,{type:Cr,depthBuffer:!1,stencilBuffer:!1}),l=new Lr;l.setAttribute("position",new Sr([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new Sr([0,2,0,0,2,0],2));const u=new n2({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),c=new tr(l,u),f=new zE(-1,1,1,-1,0,1);let d=null,h=null,m=!1,g,_=null,p=[],v=!1;this.setSize=function(x,S){o.setSize(x,S),a.setSize(x,S);for(let E=0;E<p.length;E++){const T=p[E];T.setSize&&T.setSize(x,S)}},this.setEffects=function(x){p=x,v=p.length>0&&p[0].isRenderPass===!0;const S=o.width,E=o.height;for(let T=0;T<p.length;T++){const A=p[T];A.setSize&&A.setSize(S,E)}},this.begin=function(x,S){if(m||x.toneMapping===Zi&&p.length===0)return!1;if(_=S,S!==null){const E=S.width,T=S.height;(o.width!==E||o.height!==T)&&this.setSize(E,T)}return v===!1&&x.setRenderTarget(o),g=x.toneMapping,x.toneMapping=Zi,!0},this.hasRenderPass=function(){return v},this.end=function(x,S){x.toneMapping=g,m=!0;let E=o,T=a;for(let A=0;A<p.length;A++){const y=p[A];if(y.enabled!==!1&&(y.render(x,T,E,S),y.needsSwap!==!1)){const w=E;E=T,T=w}}if(d!==x.outputColorSpace||h!==x.toneMapping){d=x.outputColorSpace,h=x.toneMapping,u.defines={},Xe.getTransfer(d)===nt&&(u.defines.SRGB_TRANSFER="");const A=mN[h];A&&(u.defines[A]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=E.texture,x.setRenderTarget(_),x.render(c,f),_=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){o.depthTexture&&o.depthTexture.dispose(),o.dispose(),a.dispose(),l.dispose(),u.dispose()}}const WE=new gn,bm=new wa(1,1),XE=new PE,YE=new LD,qE=new FE,jx=[],Zx=[],Qx=new Float32Array(16),Jx=new Float32Array(9),ey=new Float32Array(4);function Fa(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=jx[r];if(s===void 0&&(s=new Float32Array(r),jx[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function qt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function $t(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Jf(t,e){let n=Zx[e];n===void 0&&(n=new Int32Array(e),Zx[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function _N(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function vN(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(qt(n,e))return;t.uniform2fv(this.addr,e),$t(n,e)}}function xN(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(qt(n,e))return;t.uniform3fv(this.addr,e),$t(n,e)}}function yN(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(qt(n,e))return;t.uniform4fv(this.addr,e),$t(n,e)}}function SN(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(qt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),$t(n,e)}else{if(qt(n,i))return;ey.set(i),t.uniformMatrix2fv(this.addr,!1,ey),$t(n,i)}}function MN(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(qt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),$t(n,e)}else{if(qt(n,i))return;Jx.set(i),t.uniformMatrix3fv(this.addr,!1,Jx),$t(n,i)}}function EN(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(qt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),$t(n,e)}else{if(qt(n,i))return;Qx.set(i),t.uniformMatrix4fv(this.addr,!1,Qx),$t(n,i)}}function TN(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function wN(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(qt(n,e))return;t.uniform2iv(this.addr,e),$t(n,e)}}function AN(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(qt(n,e))return;t.uniform3iv(this.addr,e),$t(n,e)}}function CN(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(qt(n,e))return;t.uniform4iv(this.addr,e),$t(n,e)}}function RN(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function bN(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(qt(n,e))return;t.uniform2uiv(this.addr,e),$t(n,e)}}function PN(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(qt(n,e))return;t.uniform3uiv(this.addr,e),$t(n,e)}}function DN(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(qt(n,e))return;t.uniform4uiv(this.addr,e),$t(n,e)}}function LN(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(bm.compareFunction=n.isReversedDepthBuffer()?g0:m0,s=bm):s=WE,n.setTexture2D(e||s,r)}function IN(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||YE,r)}function NN(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||qE,r)}function UN(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||XE,r)}function FN(t){switch(t){case 5126:return _N;case 35664:return vN;case 35665:return xN;case 35666:return yN;case 35674:return SN;case 35675:return MN;case 35676:return EN;case 5124:case 35670:return TN;case 35667:case 35671:return wN;case 35668:case 35672:return AN;case 35669:case 35673:return CN;case 5125:return RN;case 36294:return bN;case 36295:return PN;case 36296:return DN;case 35678:case 36198:case 36298:case 36306:case 35682:return LN;case 35679:case 36299:case 36307:return IN;case 35680:case 36300:case 36308:case 36293:return NN;case 36289:case 36303:case 36311:case 36292:return UN}}function ON(t,e){t.uniform1fv(this.addr,e)}function kN(t,e){const n=Fa(e,this.size,2);t.uniform2fv(this.addr,n)}function BN(t,e){const n=Fa(e,this.size,3);t.uniform3fv(this.addr,n)}function zN(t,e){const n=Fa(e,this.size,4);t.uniform4fv(this.addr,n)}function VN(t,e){const n=Fa(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function HN(t,e){const n=Fa(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function GN(t,e){const n=Fa(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function WN(t,e){t.uniform1iv(this.addr,e)}function XN(t,e){t.uniform2iv(this.addr,e)}function YN(t,e){t.uniform3iv(this.addr,e)}function qN(t,e){t.uniform4iv(this.addr,e)}function $N(t,e){t.uniform1uiv(this.addr,e)}function KN(t,e){t.uniform2uiv(this.addr,e)}function jN(t,e){t.uniform3uiv(this.addr,e)}function ZN(t,e){t.uniform4uiv(this.addr,e)}function QN(t,e,n){const i=this.cache,r=e.length,s=Jf(n,r);qt(i,s)||(t.uniform1iv(this.addr,s),$t(i,s));let o;this.type===t.SAMPLER_2D_SHADOW?o=bm:o=WE;for(let a=0;a!==r;++a)n.setTexture2D(e[a]||o,s[a])}function JN(t,e,n){const i=this.cache,r=e.length,s=Jf(n,r);qt(i,s)||(t.uniform1iv(this.addr,s),$t(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||YE,s[o])}function eU(t,e,n){const i=this.cache,r=e.length,s=Jf(n,r);qt(i,s)||(t.uniform1iv(this.addr,s),$t(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||qE,s[o])}function tU(t,e,n){const i=this.cache,r=e.length,s=Jf(n,r);qt(i,s)||(t.uniform1iv(this.addr,s),$t(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||XE,s[o])}function nU(t){switch(t){case 5126:return ON;case 35664:return kN;case 35665:return BN;case 35666:return zN;case 35674:return VN;case 35675:return HN;case 35676:return GN;case 5124:case 35670:return WN;case 35667:case 35671:return XN;case 35668:case 35672:return YN;case 35669:case 35673:return qN;case 5125:return $N;case 36294:return KN;case 36295:return jN;case 36296:return ZN;case 35678:case 36198:case 36298:case 36306:case 35682:return QN;case 35679:case 36299:case 36307:return JN;case 35680:case 36300:case 36308:case 36293:return eU;case 36289:case 36303:case 36311:case 36292:return tU}}class iU{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=FN(n.type)}}class rU{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=nU(n.type)}}class sU{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,n[a.id],i)}}}const wh=/(\w+)(\])?(\[|\.)?/g;function ty(t,e){t.seq.push(e),t.map[e.id]=e}function oU(t,e,n){const i=t.name,r=i.length;for(wh.lastIndex=0;;){const s=wh.exec(i),o=wh.lastIndex;let a=s[1];const l=s[2]==="]",u=s[3];if(l&&(a=a|0),u===void 0||u==="["&&o+2===r){ty(n,u===void 0?new iU(a,t,e):new rU(a,t,e));break}else{let f=n.map[a];f===void 0&&(f=new sU(a),ty(n,f)),n=f}}}class Dc{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){const a=e.getActiveUniform(n,o),l=e.getUniformLocation(n,a.name);oU(a,l,this)}const r=[],s=[];for(const o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(o):s.push(o);r.length>0&&(this.seq=r.concat(s))}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function ny(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const aU=37297;let lU=0;function uU(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}const iy=new Ue;function cU(t){Xe._getMatrix(iy,Xe.workingColorSpace,t);const e=`mat3( ${iy.elements.map(n=>n.toFixed(4))} )`;switch(Xe.getTransfer(t)){case _f:return[e,"LinearTransferOETF"];case nt:return[e,"sRGBTransferOETF"];default:return Ie("WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function ry(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),s=(t.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const a=parseInt(o[1]);return n.toUpperCase()+`

`+s+`

`+uU(t.getShaderSource(e),a)}else return s}function fU(t,e){const n=cU(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}const dU={[pE]:"Linear",[mE]:"Reinhard",[gE]:"Cineon",[_E]:"ACESFilmic",[xE]:"AgX",[yE]:"Neutral",[vE]:"Custom"};function hU(t,e){const n=dU[e];return n===void 0?(Ie("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+t+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const uc=new G;function pU(){Xe.getLuminanceCoefficients(uc);const t=uc.x.toFixed(4),e=uc.y.toFixed(4),n=uc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function mU(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(al).join(`
`)}function gU(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function _U(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function al(t){return t!==""}function sy(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function oy(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const vU=/^[ \t]*#include +<([\w\d./]+)>/gm;function Pm(t){return t.replace(vU,yU)}const xU=new Map;function yU(t,e){let n=ze[e];if(n===void 0){const i=xU.get(e);if(i!==void 0)n=ze[i],Ie('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Pm(n)}const SU=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ay(t){return t.replace(SU,MU)}function MU(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function ly(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const EU={[Ac]:"SHADOWMAP_TYPE_PCF",[ol]:"SHADOWMAP_TYPE_VSM"};function TU(t){return EU[t.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const wU={[uo]:"ENVMAP_TYPE_CUBE",[Ta]:"ENVMAP_TYPE_CUBE",[jf]:"ENVMAP_TYPE_CUBE_UV"};function AU(t){return t.envMap===!1?"ENVMAP_TYPE_CUBE":wU[t.envMapMode]||"ENVMAP_TYPE_CUBE"}const CU={[Ta]:"ENVMAP_MODE_REFRACTION"};function RU(t){return t.envMap===!1?"ENVMAP_MODE_REFLECTION":CU[t.envMapMode]||"ENVMAP_MODE_REFLECTION"}const bU={[hE]:"ENVMAP_BLENDING_MULTIPLY",[fD]:"ENVMAP_BLENDING_MIX",[dD]:"ENVMAP_BLENDING_ADD"};function PU(t){return t.envMap===!1?"ENVMAP_BLENDING_NONE":bU[t.combine]||"ENVMAP_BLENDING_NONE"}function DU(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function LU(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=TU(n),u=AU(n),c=RU(n),f=PU(n),d=DU(n),h=mU(n),m=gU(s),g=r.createProgram();let _,p,v=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(_=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,m].filter(al).join(`
`),_.length>0&&(_+=`
`),p=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,m].filter(al).join(`
`),p.length>0&&(p+=`
`)):(_=[ly(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,m,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexNormals?"#define HAS_NORMAL":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(al).join(`
`),p=[ly(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,m,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.envMap?"#define "+c:"",n.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Zi?"#define TONE_MAPPING":"",n.toneMapping!==Zi?ze.tonemapping_pars_fragment:"",n.toneMapping!==Zi?hU("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",ze.colorspace_pars_fragment,fU("linearToOutputTexel",n.outputColorSpace),pU(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(al).join(`
`)),o=Pm(o),o=sy(o,n),o=oy(o,n),a=Pm(a),a=sy(a,n),a=oy(a,n),o=ay(o),a=ay(a),n.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,_=[h,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,p=["#define varying in",n.glslVersion===xx?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===xx?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const x=v+_+o,S=v+p+a,E=ny(r,r.VERTEX_SHADER,x),T=ny(r,r.FRAGMENT_SHADER,S);r.attachShader(g,E),r.attachShader(g,T),n.index0AttributeName!==void 0?r.bindAttribLocation(g,0,n.index0AttributeName):n.hasPositionAttribute===!0&&r.bindAttribLocation(g,0,"position"),r.linkProgram(g);function A(P){if(t.debug.checkShaderErrors){const D=r.getProgramInfoLog(g)||"",z=r.getShaderInfoLog(E)||"",X=r.getShaderInfoLog(T)||"",U=D.trim(),B=z.trim(),F=X.trim();let L=!0,Y=!0;if(r.getProgramParameter(g,r.LINK_STATUS)===!1)if(L=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,g,E,T);else{const Q=ry(r,E,"vertex"),Z=ry(r,T,"fragment");Ze("WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(g,r.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+U+`
`+Q+`
`+Z)}else U!==""?Ie("WebGLProgram: Program Info Log:",U):(B===""||F==="")&&(Y=!1);Y&&(P.diagnostics={runnable:L,programLog:U,vertexShader:{log:B,prefix:_},fragmentShader:{log:F,prefix:p}})}r.deleteShader(E),r.deleteShader(T),y=new Dc(r,g),w=_U(r,g)}let y;this.getUniforms=function(){return y===void 0&&A(this),y};let w;this.getAttributes=function(){return w===void 0&&A(this),w};let b=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=r.getProgramParameter(g,aU)),b},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(g),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=lU++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=E,this.fragmentShader=T,this}let IU=0;class NU{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,n,i){const r=this._getShaderCacheForMaterial(e);return r.has(n)===!1&&(r.add(n),n.usedTimes++),r.has(i)===!1&&(r.add(i),i.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new UU(e),n.set(e,i)),i}}class UU{constructor(e){this.id=IU++,this.code=e,this.usedTimes=0}}function FU(t){return t===co||t===pf||t===mf}function OU(t,e,n,i,r,s){const o=new DE,a=new NU,l=new Set,u=[],c=new Map,f=i.logarithmicDepthBuffer;let d=i.precision;const h={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(y){return l.add(y),y===0?"uv":`uv${y}`}function g(y,w,b,P,D,z){const X=P.fog,U=D.geometry,B=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?P.environment:null,F=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap,L=e.get(y.envMap||B,F),Y=L&&L.mapping===jf?L.image.height:null,Q=h[y.type];y.precision!==null&&(d=i.getMaxPrecision(y.precision),d!==y.precision&&Ie("WebGLProgram.getParameters:",y.precision,"not supported, using",d,"instead."));const Z=U.morphAttributes.position||U.morphAttributes.normal||U.morphAttributes.color,ne=Z!==void 0?Z.length:0;let Oe=0;U.morphAttributes.position!==void 0&&(Oe=1),U.morphAttributes.normal!==void 0&&(Oe=2),U.morphAttributes.color!==void 0&&(Oe=3);let Fe,Ne,$,se;if(Q){const Se=Vi[Q];Fe=Se.vertexShader,Ne=Se.fragmentShader}else{Fe=y.vertexShader,Ne=y.fragmentShader;const Se=a.getVertexShaderStage(y),Rt=a.getFragmentShaderStage(y);a.update(y,Se,Rt),$=Se.id,se=Rt.id}const re=t.getRenderTarget(),be=t.state.buffers.depth.getReversed(),Le=D.isInstancedMesh===!0,Ee=D.isBatchedMesh===!0,At=!!y.map,We=!!y.matcap,st=!!L,et=!!y.aoMap,Ke=!!y.lightMap,kt=!!y.bumpMap&&y.wireframe===!1,Wt=!!y.normalMap,Kt=!!y.displacementMap,en=!!y.emissiveMap,Ct=!!y.metalnessMap,Bt=!!y.roughnessMap,N=y.anisotropy>0,wn=y.clearcoat>0,tt=y.dispersion>0,R=y.iridescence>0,M=y.sheen>0,k=y.transmission>0,W=N&&!!y.anisotropyMap,K=wn&&!!y.clearcoatMap,ae=wn&&!!y.clearcoatNormalMap,ue=wn&&!!y.clearcoatRoughnessMap,j=R&&!!y.iridescenceMap,ee=R&&!!y.iridescenceThicknessMap,ce=M&&!!y.sheenColorMap,we=M&&!!y.sheenRoughnessMap,he=!!y.specularMap,fe=!!y.specularColorMap,Re=!!y.specularIntensityMap,Pe=k&&!!y.transmissionMap,ke=k&&!!y.thicknessMap,I=!!y.gradientMap,le=!!y.alphaMap,J=y.alphaTest>0,de=!!y.alphaHash,_e=!!y.extensions;let te=Zi;y.toneMapped&&(re===null||re.isXRRenderTarget===!0)&&(te=t.toneMapping);const Te={shaderID:Q,shaderType:y.type,shaderName:y.name,vertexShader:Fe,fragmentShader:Ne,defines:y.defines,customVertexShaderID:$,customFragmentShaderID:se,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:d,batching:Ee,batchingColor:Ee&&D._colorsTexture!==null,instancing:Le,instancingColor:Le&&D.instanceColor!==null,instancingMorph:Le&&D.morphTexture!==null,outputColorSpace:re===null?t.outputColorSpace:re.isXRRenderTarget===!0?re.texture.colorSpace:Xe.workingColorSpace,alphaToCoverage:!!y.alphaToCoverage,map:At,matcap:We,envMap:st,envMapMode:st&&L.mapping,envMapCubeUVHeight:Y,aoMap:et,lightMap:Ke,bumpMap:kt,normalMap:Wt,displacementMap:Kt,emissiveMap:en,normalMapObjectSpace:Wt&&y.normalMapType===mD,normalMapTangentSpace:Wt&&y.normalMapType===gx,packedNormalMap:Wt&&y.normalMapType===gx&&FU(y.normalMap.format),metalnessMap:Ct,roughnessMap:Bt,anisotropy:N,anisotropyMap:W,clearcoat:wn,clearcoatMap:K,clearcoatNormalMap:ae,clearcoatRoughnessMap:ue,dispersion:tt,iridescence:R,iridescenceMap:j,iridescenceThicknessMap:ee,sheen:M,sheenColorMap:ce,sheenRoughnessMap:we,specularMap:he,specularColorMap:fe,specularIntensityMap:Re,transmission:k,transmissionMap:Pe,thicknessMap:ke,gradientMap:I,opaque:y.transparent===!1&&y.blending===la&&y.alphaToCoverage===!1,alphaMap:le,alphaTest:J,alphaHash:de,combine:y.combine,mapUv:At&&m(y.map.channel),aoMapUv:et&&m(y.aoMap.channel),lightMapUv:Ke&&m(y.lightMap.channel),bumpMapUv:kt&&m(y.bumpMap.channel),normalMapUv:Wt&&m(y.normalMap.channel),displacementMapUv:Kt&&m(y.displacementMap.channel),emissiveMapUv:en&&m(y.emissiveMap.channel),metalnessMapUv:Ct&&m(y.metalnessMap.channel),roughnessMapUv:Bt&&m(y.roughnessMap.channel),anisotropyMapUv:W&&m(y.anisotropyMap.channel),clearcoatMapUv:K&&m(y.clearcoatMap.channel),clearcoatNormalMapUv:ae&&m(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ue&&m(y.clearcoatRoughnessMap.channel),iridescenceMapUv:j&&m(y.iridescenceMap.channel),iridescenceThicknessMapUv:ee&&m(y.iridescenceThicknessMap.channel),sheenColorMapUv:ce&&m(y.sheenColorMap.channel),sheenRoughnessMapUv:we&&m(y.sheenRoughnessMap.channel),specularMapUv:he&&m(y.specularMap.channel),specularColorMapUv:fe&&m(y.specularColorMap.channel),specularIntensityMapUv:Re&&m(y.specularIntensityMap.channel),transmissionMapUv:Pe&&m(y.transmissionMap.channel),thicknessMapUv:ke&&m(y.thicknessMap.channel),alphaMapUv:le&&m(y.alphaMap.channel),vertexTangents:!!U.attributes.tangent&&(Wt||N),vertexNormals:!!U.attributes.normal,vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!U.attributes.color&&U.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!U.attributes.uv&&(At||le),fog:!!X,useFog:y.fog===!0,fogExp2:!!X&&X.isFogExp2,flatShading:y.wireframe===!1&&(y.flatShading===!0||U.attributes.normal===void 0&&Wt===!1&&(y.isMeshLambertMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isMeshPhysicalMaterial)),sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:be,skinning:D.isSkinnedMesh===!0,hasPositionAttribute:U.attributes.position!==void 0,morphTargets:U.morphAttributes.position!==void 0,morphNormals:U.morphAttributes.normal!==void 0,morphColors:U.morphAttributes.color!==void 0,morphTargetsCount:ne,morphTextureStride:Oe,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numLightProbeGrids:z.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:y.dithering,shadowMapEnabled:t.shadowMap.enabled&&b.length>0,shadowMapType:t.shadowMap.type,toneMapping:te,decodeVideoTexture:At&&y.map.isVideoTexture===!0&&Xe.getTransfer(y.map.colorSpace)===nt,decodeVideoTextureEmissive:en&&y.emissiveMap.isVideoTexture===!0&&Xe.getTransfer(y.emissiveMap.colorSpace)===nt,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Gi,flipSided:y.side===In,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:_e&&y.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(_e&&y.extensions.multiDraw===!0||Ee)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return Te.vertexUv1s=l.has(1),Te.vertexUv2s=l.has(2),Te.vertexUv3s=l.has(3),l.clear(),Te}function _(y){const w=[];if(y.shaderID?w.push(y.shaderID):(w.push(y.customVertexShaderID),w.push(y.customFragmentShaderID)),y.defines!==void 0)for(const b in y.defines)w.push(b),w.push(y.defines[b]);return y.isRawShaderMaterial===!1&&(p(w,y),v(w,y),w.push(t.outputColorSpace)),w.push(y.customProgramCacheKey),w.join()}function p(y,w){y.push(w.precision),y.push(w.outputColorSpace),y.push(w.envMapMode),y.push(w.envMapCubeUVHeight),y.push(w.mapUv),y.push(w.alphaMapUv),y.push(w.lightMapUv),y.push(w.aoMapUv),y.push(w.bumpMapUv),y.push(w.normalMapUv),y.push(w.displacementMapUv),y.push(w.emissiveMapUv),y.push(w.metalnessMapUv),y.push(w.roughnessMapUv),y.push(w.anisotropyMapUv),y.push(w.clearcoatMapUv),y.push(w.clearcoatNormalMapUv),y.push(w.clearcoatRoughnessMapUv),y.push(w.iridescenceMapUv),y.push(w.iridescenceThicknessMapUv),y.push(w.sheenColorMapUv),y.push(w.sheenRoughnessMapUv),y.push(w.specularMapUv),y.push(w.specularColorMapUv),y.push(w.specularIntensityMapUv),y.push(w.transmissionMapUv),y.push(w.thicknessMapUv),y.push(w.combine),y.push(w.fogExp2),y.push(w.sizeAttenuation),y.push(w.morphTargetsCount),y.push(w.morphAttributeCount),y.push(w.numDirLights),y.push(w.numPointLights),y.push(w.numSpotLights),y.push(w.numSpotLightMaps),y.push(w.numHemiLights),y.push(w.numRectAreaLights),y.push(w.numDirLightShadows),y.push(w.numPointLightShadows),y.push(w.numSpotLightShadows),y.push(w.numSpotLightShadowsWithMaps),y.push(w.numLightProbes),y.push(w.shadowMapType),y.push(w.toneMapping),y.push(w.numClippingPlanes),y.push(w.numClipIntersection),y.push(w.depthPacking)}function v(y,w){o.disableAll(),w.instancing&&o.enable(0),w.instancingColor&&o.enable(1),w.instancingMorph&&o.enable(2),w.matcap&&o.enable(3),w.envMap&&o.enable(4),w.normalMapObjectSpace&&o.enable(5),w.normalMapTangentSpace&&o.enable(6),w.clearcoat&&o.enable(7),w.iridescence&&o.enable(8),w.alphaTest&&o.enable(9),w.vertexColors&&o.enable(10),w.vertexAlphas&&o.enable(11),w.vertexUv1s&&o.enable(12),w.vertexUv2s&&o.enable(13),w.vertexUv3s&&o.enable(14),w.vertexTangents&&o.enable(15),w.anisotropy&&o.enable(16),w.alphaHash&&o.enable(17),w.batching&&o.enable(18),w.dispersion&&o.enable(19),w.batchingColor&&o.enable(20),w.gradientMap&&o.enable(21),w.packedNormalMap&&o.enable(22),w.vertexNormals&&o.enable(23),y.push(o.mask),o.disableAll(),w.fog&&o.enable(0),w.useFog&&o.enable(1),w.flatShading&&o.enable(2),w.logarithmicDepthBuffer&&o.enable(3),w.reversedDepthBuffer&&o.enable(4),w.skinning&&o.enable(5),w.morphTargets&&o.enable(6),w.morphNormals&&o.enable(7),w.morphColors&&o.enable(8),w.premultipliedAlpha&&o.enable(9),w.shadowMapEnabled&&o.enable(10),w.doubleSided&&o.enable(11),w.flipSided&&o.enable(12),w.useDepthPacking&&o.enable(13),w.dithering&&o.enable(14),w.transmission&&o.enable(15),w.sheen&&o.enable(16),w.opaque&&o.enable(17),w.pointsUvs&&o.enable(18),w.decodeVideoTexture&&o.enable(19),w.decodeVideoTextureEmissive&&o.enable(20),w.alphaToCoverage&&o.enable(21),w.numLightProbeGrids>0&&o.enable(22),w.hasPositionAttribute&&o.enable(23),y.push(o.mask)}function x(y){const w=h[y.type];let b;if(w){const P=Vi[w];b=JD.clone(P.uniforms)}else b=y.uniforms;return b}function S(y,w){let b=c.get(w);return b!==void 0?++b.usedTimes:(b=new LU(t,w,y,r),u.push(b),c.set(w,b)),b}function E(y){if(--y.usedTimes===0){const w=u.indexOf(y);u[w]=u[u.length-1],u.pop(),c.delete(y.cacheKey),y.destroy()}}function T(y){a.remove(y)}function A(){a.dispose()}return{getParameters:g,getProgramCacheKey:_,getUniforms:x,acquireProgram:S,releaseProgram:E,releaseShaderCache:T,programs:u,dispose:A}}function kU(){let t=new WeakMap;function e(o){return t.has(o)}function n(o){let a=t.get(o);return a===void 0&&(a={},t.set(o,a)),a}function i(o){t.delete(o)}function r(o,a,l){t.get(o)[a]=l}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function BU(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.materialVariant!==e.materialVariant?t.materialVariant-e.materialVariant:t.z!==e.z?t.z-e.z:t.id-e.id}function uy(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function cy(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(d){let h=0;return d.isInstancedMesh&&(h+=2),d.isSkinnedMesh&&(h+=1),h}function a(d,h,m,g,_,p){let v=t[e];return v===void 0?(v={id:d.id,object:d,geometry:h,material:m,materialVariant:o(d),groupOrder:g,renderOrder:d.renderOrder,z:_,group:p},t[e]=v):(v.id=d.id,v.object=d,v.geometry=h,v.material=m,v.materialVariant=o(d),v.groupOrder=g,v.renderOrder=d.renderOrder,v.z=_,v.group=p),e++,v}function l(d,h,m,g,_,p){const v=a(d,h,m,g,_,p);m.transmission>0?i.push(v):m.transparent===!0?r.push(v):n.push(v)}function u(d,h,m,g,_,p){const v=a(d,h,m,g,_,p);m.transmission>0?i.unshift(v):m.transparent===!0?r.unshift(v):n.unshift(v)}function c(d,h,m){n.length>1&&n.sort(d||BU),i.length>1&&i.sort(h||uy),r.length>1&&r.sort(h||uy),m&&(n.reverse(),i.reverse(),r.reverse())}function f(){for(let d=e,h=t.length;d<h;d++){const m=t[d];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:l,unshift:u,finish:f,sort:c}}function zU(){let t=new WeakMap;function e(i,r){const s=t.get(i);let o;return s===void 0?(o=new cy,t.set(i,[o])):r>=s.length?(o=new cy,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function VU(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new G,color:new $e};break;case"SpotLight":n={position:new G,direction:new G,color:new $e,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new G,color:new $e,distance:0,decay:0};break;case"HemisphereLight":n={direction:new G,skyColor:new $e,groundColor:new $e};break;case"RectAreaLight":n={color:new $e,position:new G,halfWidth:new G,halfHeight:new G};break}return t[e.id]=n,n}}}function HU(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Je};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Je};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Je,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let GU=0;function WU(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function XU(t){const e=new VU,n=HU(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)i.probe.push(new G);const r=new G,s=new It,o=new It;function a(u){let c=0,f=0,d=0;for(let w=0;w<9;w++)i.probe[w].set(0,0,0);let h=0,m=0,g=0,_=0,p=0,v=0,x=0,S=0,E=0,T=0,A=0;u.sort(WU);for(let w=0,b=u.length;w<b;w++){const P=u[w],D=P.color,z=P.intensity,X=P.distance;let U=null;if(P.shadow&&P.shadow.map&&(P.shadow.map.texture.format===co?U=P.shadow.map.texture:U=P.shadow.map.depthTexture||P.shadow.map.texture),P.isAmbientLight)c+=D.r*z,f+=D.g*z,d+=D.b*z;else if(P.isLightProbe){for(let B=0;B<9;B++)i.probe[B].addScaledVector(P.sh.coefficients[B],z);A++}else if(P.isDirectionalLight){const B=e.get(P);if(B.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const F=P.shadow,L=n.get(P);L.shadowIntensity=F.intensity,L.shadowBias=F.bias,L.shadowNormalBias=F.normalBias,L.shadowRadius=F.radius,L.shadowMapSize=F.mapSize,i.directionalShadow[h]=L,i.directionalShadowMap[h]=U,i.directionalShadowMatrix[h]=P.shadow.matrix,v++}i.directional[h]=B,h++}else if(P.isSpotLight){const B=e.get(P);B.position.setFromMatrixPosition(P.matrixWorld),B.color.copy(D).multiplyScalar(z),B.distance=X,B.coneCos=Math.cos(P.angle),B.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),B.decay=P.decay,i.spot[g]=B;const F=P.shadow;if(P.map&&(i.spotLightMap[E]=P.map,E++,F.updateMatrices(P),P.castShadow&&T++),i.spotLightMatrix[g]=F.matrix,P.castShadow){const L=n.get(P);L.shadowIntensity=F.intensity,L.shadowBias=F.bias,L.shadowNormalBias=F.normalBias,L.shadowRadius=F.radius,L.shadowMapSize=F.mapSize,i.spotShadow[g]=L,i.spotShadowMap[g]=U,S++}g++}else if(P.isRectAreaLight){const B=e.get(P);B.color.copy(D).multiplyScalar(z),B.halfWidth.set(P.width*.5,0,0),B.halfHeight.set(0,P.height*.5,0),i.rectArea[_]=B,_++}else if(P.isPointLight){const B=e.get(P);if(B.color.copy(P.color).multiplyScalar(P.intensity),B.distance=P.distance,B.decay=P.decay,P.castShadow){const F=P.shadow,L=n.get(P);L.shadowIntensity=F.intensity,L.shadowBias=F.bias,L.shadowNormalBias=F.normalBias,L.shadowRadius=F.radius,L.shadowMapSize=F.mapSize,L.shadowCameraNear=F.camera.near,L.shadowCameraFar=F.camera.far,i.pointShadow[m]=L,i.pointShadowMap[m]=U,i.pointShadowMatrix[m]=P.shadow.matrix,x++}i.point[m]=B,m++}else if(P.isHemisphereLight){const B=e.get(P);B.skyColor.copy(P.color).multiplyScalar(z),B.groundColor.copy(P.groundColor).multiplyScalar(z),i.hemi[p]=B,p++}}_>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=pe.LTC_FLOAT_1,i.rectAreaLTC2=pe.LTC_FLOAT_2):(i.rectAreaLTC1=pe.LTC_HALF_1,i.rectAreaLTC2=pe.LTC_HALF_2)),i.ambient[0]=c,i.ambient[1]=f,i.ambient[2]=d;const y=i.hash;(y.directionalLength!==h||y.pointLength!==m||y.spotLength!==g||y.rectAreaLength!==_||y.hemiLength!==p||y.numDirectionalShadows!==v||y.numPointShadows!==x||y.numSpotShadows!==S||y.numSpotMaps!==E||y.numLightProbes!==A)&&(i.directional.length=h,i.spot.length=g,i.rectArea.length=_,i.point.length=m,i.hemi.length=p,i.directionalShadow.length=v,i.directionalShadowMap.length=v,i.pointShadow.length=x,i.pointShadowMap.length=x,i.spotShadow.length=S,i.spotShadowMap.length=S,i.directionalShadowMatrix.length=v,i.pointShadowMatrix.length=x,i.spotLightMatrix.length=S+E-T,i.spotLightMap.length=E,i.numSpotLightShadowsWithMaps=T,i.numLightProbes=A,y.directionalLength=h,y.pointLength=m,y.spotLength=g,y.rectAreaLength=_,y.hemiLength=p,y.numDirectionalShadows=v,y.numPointShadows=x,y.numSpotShadows=S,y.numSpotMaps=E,y.numLightProbes=A,i.version=GU++)}function l(u,c){let f=0,d=0,h=0,m=0,g=0;const _=c.matrixWorldInverse;for(let p=0,v=u.length;p<v;p++){const x=u[p];if(x.isDirectionalLight){const S=i.directional[f];S.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(_),f++}else if(x.isSpotLight){const S=i.spot[h];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(_),S.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(_),h++}else if(x.isRectAreaLight){const S=i.rectArea[m];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(_),o.identity(),s.copy(x.matrixWorld),s.premultiply(_),o.extractRotation(s),S.halfWidth.set(x.width*.5,0,0),S.halfHeight.set(0,x.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),m++}else if(x.isPointLight){const S=i.point[d];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(_),d++}else if(x.isHemisphereLight){const S=i.hemi[g];S.direction.setFromMatrixPosition(x.matrixWorld),S.direction.transformDirection(_),g++}}}return{setup:a,setupView:l,state:i}}function fy(t){const e=new XU(t),n=[],i=[],r=[];function s(d){f.camera=d,n.length=0,i.length=0,r.length=0}function o(d){n.push(d)}function a(d){i.push(d)}function l(d){r.push(d)}function u(){e.setup(n)}function c(d){e.setupView(n,d)}const f={lightsArray:n,shadowsArray:i,lightProbeGridArray:r,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:f,setupLights:u,setupLightsView:c,pushLight:o,pushShadow:a,pushLightProbeGrid:l}}function YU(t){let e=new WeakMap;function n(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new fy(t),e.set(r,[a])):s>=o.length?(a=new fy(t),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:n,dispose:i}}const qU=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,$U=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,KU=[new G(1,0,0),new G(-1,0,0),new G(0,1,0),new G(0,-1,0),new G(0,0,1),new G(0,0,-1)],jU=[new G(0,-1,0),new G(0,-1,0),new G(0,0,1),new G(0,0,-1),new G(0,-1,0),new G(0,-1,0)],dy=new It,Ja=new G,Ah=new G;function ZU(t,e,n){let i=new x0;const r=new Je,s=new Je,o=new Mt,a=new i2,l=new r2,u={},c=n.maxTextureSize,f={[xs]:In,[In]:xs,[Gi]:Gi},d=new Li({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Je},radius:{value:4}},vertexShader:qU,fragmentShader:$U}),h=d.clone();h.defines.HORIZONTAL_PASS=1;const m=new Lr;m.setAttribute("position",new Ji(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new tr(m,d),_=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ac;let p=this.type;this.render=function(T,A,y){if(_.enabled===!1||_.autoUpdate===!1&&_.needsUpdate===!1||T.length===0)return;this.type===Y3&&(Ie("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Ac);const w=t.getRenderTarget(),b=t.getActiveCubeFace(),P=t.getActiveMipmapLevel(),D=t.state;D.setBlending(xr),D.buffers.depth.getReversed()===!0?D.buffers.color.setClear(0,0,0,0):D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);const z=p!==this.type;z&&A.traverse(function(X){X.material&&(Array.isArray(X.material)?X.material.forEach(U=>U.needsUpdate=!0):X.material.needsUpdate=!0)});for(let X=0,U=T.length;X<U;X++){const B=T[X],F=B.shadow;if(F===void 0){Ie("WebGLShadowMap:",B,"has no shadow.");continue}if(F.autoUpdate===!1&&F.needsUpdate===!1)continue;r.copy(F.mapSize);const L=F.getFrameExtents();r.multiply(L),s.copy(F.mapSize),(r.x>c||r.y>c)&&(r.x>c&&(s.x=Math.floor(c/L.x),r.x=s.x*L.x,F.mapSize.x=s.x),r.y>c&&(s.y=Math.floor(c/L.y),r.y=s.y*L.y,F.mapSize.y=s.y));const Y=t.state.buffers.depth.getReversed();if(F.camera._reversedDepth=Y,F.map===null||z===!0){if(F.map!==null&&(F.map.depthTexture!==null&&(F.map.depthTexture.dispose(),F.map.depthTexture=null),F.map.dispose()),this.type===ol){if(B.isPointLight){Ie("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}F.map=new Qi(r.x,r.y,{format:co,type:Cr,minFilter:mn,magFilter:mn,generateMipmaps:!1}),F.map.texture.name=B.name+".shadowMap",F.map.depthTexture=new wa(r.x,r.y,Xi),F.map.depthTexture.name=B.name+".shadowMapDepth",F.map.depthTexture.format=Rr,F.map.depthTexture.compareFunction=null,F.map.depthTexture.minFilter=nn,F.map.depthTexture.magFilter=nn}else B.isPointLight?(F.map=new GE(r.x),F.map.depthTexture=new ZD(r.x,er)):(F.map=new Qi(r.x,r.y),F.map.depthTexture=new wa(r.x,r.y,er)),F.map.depthTexture.name=B.name+".shadowMap",F.map.depthTexture.format=Rr,this.type===Ac?(F.map.depthTexture.compareFunction=Y?g0:m0,F.map.depthTexture.minFilter=mn,F.map.depthTexture.magFilter=mn):(F.map.depthTexture.compareFunction=null,F.map.depthTexture.minFilter=nn,F.map.depthTexture.magFilter=nn);F.camera.updateProjectionMatrix()}const Q=F.map.isWebGLCubeRenderTarget?6:1;for(let Z=0;Z<Q;Z++){if(F.map.isWebGLCubeRenderTarget)t.setRenderTarget(F.map,Z),t.clear();else{Z===0&&(t.setRenderTarget(F.map),t.clear());const ne=F.getViewport(Z);o.set(s.x*ne.x,s.y*ne.y,s.x*ne.z,s.y*ne.w),D.viewport(o)}if(B.isPointLight){const ne=F.camera,Oe=F.matrix,Fe=B.distance||ne.far;Fe!==ne.far&&(ne.far=Fe,ne.updateProjectionMatrix()),Ja.setFromMatrixPosition(B.matrixWorld),ne.position.copy(Ja),Ah.copy(ne.position),Ah.add(KU[Z]),ne.up.copy(jU[Z]),ne.lookAt(Ah),ne.updateMatrixWorld(),Oe.makeTranslation(-Ja.x,-Ja.y,-Ja.z),dy.multiplyMatrices(ne.projectionMatrix,ne.matrixWorldInverse),F._frustum.setFromProjectionMatrix(dy,ne.coordinateSystem,ne.reversedDepth)}else F.updateMatrices(B);i=F.getFrustum(),S(A,y,F.camera,B,this.type)}F.isPointLightShadow!==!0&&this.type===ol&&v(F,y),F.needsUpdate=!1}p=this.type,_.needsUpdate=!1,t.setRenderTarget(w,b,P)};function v(T,A){const y=e.update(g);d.defines.VSM_SAMPLES!==T.blurSamples&&(d.defines.VSM_SAMPLES=T.blurSamples,h.defines.VSM_SAMPLES=T.blurSamples,d.needsUpdate=!0,h.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new Qi(r.x,r.y,{format:co,type:Cr})),d.uniforms.shadow_pass.value=T.map.depthTexture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,t.setRenderTarget(T.mapPass),t.clear(),t.renderBufferDirect(A,null,y,d,g,null),h.uniforms.shadow_pass.value=T.mapPass.texture,h.uniforms.resolution.value=T.mapSize,h.uniforms.radius.value=T.radius,t.setRenderTarget(T.map),t.clear(),t.renderBufferDirect(A,null,y,h,g,null)}function x(T,A,y,w){let b=null;const P=y.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(P!==void 0)b=P;else if(b=y.isPointLight===!0?l:a,t.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){const D=b.uuid,z=A.uuid;let X=u[D];X===void 0&&(X={},u[D]=X);let U=X[z];U===void 0&&(U=b.clone(),X[z]=U,A.addEventListener("dispose",E)),b=U}if(b.visible=A.visible,b.wireframe=A.wireframe,w===ol?b.side=A.shadowSide!==null?A.shadowSide:A.side:b.side=A.shadowSide!==null?A.shadowSide:f[A.side],b.alphaMap=A.alphaMap,b.alphaTest=A.alphaToCoverage===!0?.5:A.alphaTest,b.map=A.map,b.clipShadows=A.clipShadows,b.clippingPlanes=A.clippingPlanes,b.clipIntersection=A.clipIntersection,b.displacementMap=A.displacementMap,b.displacementScale=A.displacementScale,b.displacementBias=A.displacementBias,b.wireframeLinewidth=A.wireframeLinewidth,b.linewidth=A.linewidth,y.isPointLight===!0&&b.isMeshDistanceMaterial===!0){const D=t.properties.get(b);D.light=y}return b}function S(T,A,y,w,b){if(T.visible===!1)return;if(T.layers.test(A.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&b===ol)&&(!T.frustumCulled||i.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(y.matrixWorldInverse,T.matrixWorld);const z=e.update(T),X=T.material;if(Array.isArray(X)){const U=z.groups;for(let B=0,F=U.length;B<F;B++){const L=U[B],Y=X[L.materialIndex];if(Y&&Y.visible){const Q=x(T,Y,w,b);T.onBeforeShadow(t,T,A,y,z,Q,L),t.renderBufferDirect(y,null,z,Q,T,L),T.onAfterShadow(t,T,A,y,z,Q,L)}}}else if(X.visible){const U=x(T,X,w,b);T.onBeforeShadow(t,T,A,y,z,U,null),t.renderBufferDirect(y,null,z,U,T,null),T.onAfterShadow(t,T,A,y,z,U,null)}}const D=T.children;for(let z=0,X=D.length;z<X;z++)S(D[z],A,y,w,b)}function E(T){T.target.removeEventListener("dispose",E);for(const y in u){const w=u[y],b=T.target.uuid;b in w&&(w[b].dispose(),delete w[b])}}}function QU(t,e){function n(){let I=!1;const le=new Mt;let J=null;const de=new Mt(0,0,0,0);return{setMask:function(_e){J!==_e&&!I&&(t.colorMask(_e,_e,_e,_e),J=_e)},setLocked:function(_e){I=_e},setClear:function(_e,te,Te,Se,Rt){Rt===!0&&(_e*=Se,te*=Se,Te*=Se),le.set(_e,te,Te,Se),de.equals(le)===!1&&(t.clearColor(_e,te,Te,Se),de.copy(le))},reset:function(){I=!1,J=null,de.set(-1,0,0,0)}}}function i(){let I=!1,le=!1,J=null,de=null,_e=null;return{setReversed:function(te){if(le!==te){const Te=e.get("EXT_clip_control");te?Te.clipControlEXT(Te.LOWER_LEFT_EXT,Te.ZERO_TO_ONE_EXT):Te.clipControlEXT(Te.LOWER_LEFT_EXT,Te.NEGATIVE_ONE_TO_ONE_EXT),le=te;const Se=_e;_e=null,this.setClear(Se)}},getReversed:function(){return le},setTest:function(te){te?re(t.DEPTH_TEST):be(t.DEPTH_TEST)},setMask:function(te){J!==te&&!I&&(t.depthMask(te),J=te)},setFunc:function(te){if(le&&(te=wD[te]),de!==te){switch(te){case Gp:t.depthFunc(t.NEVER);break;case Wp:t.depthFunc(t.ALWAYS);break;case Xp:t.depthFunc(t.LESS);break;case Ea:t.depthFunc(t.LEQUAL);break;case Yp:t.depthFunc(t.EQUAL);break;case qp:t.depthFunc(t.GEQUAL);break;case $p:t.depthFunc(t.GREATER);break;case Kp:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}de=te}},setLocked:function(te){I=te},setClear:function(te){_e!==te&&(_e=te,le&&(te=1-te),t.clearDepth(te))},reset:function(){I=!1,J=null,de=null,_e=null,le=!1}}}function r(){let I=!1,le=null,J=null,de=null,_e=null,te=null,Te=null,Se=null,Rt=null;return{setTest:function(ct){I||(ct?re(t.STENCIL_TEST):be(t.STENCIL_TEST))},setMask:function(ct){le!==ct&&!I&&(t.stencilMask(ct),le=ct)},setFunc:function(ct,Ii,Ni){(J!==ct||de!==Ii||_e!==Ni)&&(t.stencilFunc(ct,Ii,Ni),J=ct,de=Ii,_e=Ni)},setOp:function(ct,Ii,Ni){(te!==ct||Te!==Ii||Se!==Ni)&&(t.stencilOp(ct,Ii,Ni),te=ct,Te=Ii,Se=Ni)},setLocked:function(ct){I=ct},setClear:function(ct){Rt!==ct&&(t.clearStencil(ct),Rt=ct)},reset:function(){I=!1,le=null,J=null,de=null,_e=null,te=null,Te=null,Se=null,Rt=null}}}const s=new n,o=new i,a=new r,l=new WeakMap,u=new WeakMap;let c={},f={},d={},h=new WeakMap,m=[],g=null,_=!1,p=null,v=null,x=null,S=null,E=null,T=null,A=null,y=new $e(0,0,0),w=0,b=!1,P=null,D=null,z=null,X=null,U=null;const B=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let F=!1,L=0;const Y=t.getParameter(t.VERSION);Y.indexOf("WebGL")!==-1?(L=parseFloat(/^WebGL (\d)/.exec(Y)[1]),F=L>=1):Y.indexOf("OpenGL ES")!==-1&&(L=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),F=L>=2);let Q=null,Z={};const ne=t.getParameter(t.SCISSOR_BOX),Oe=t.getParameter(t.VIEWPORT),Fe=new Mt().fromArray(ne),Ne=new Mt().fromArray(Oe);function $(I,le,J,de){const _e=new Uint8Array(4),te=t.createTexture();t.bindTexture(I,te),t.texParameteri(I,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(I,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Te=0;Te<J;Te++)I===t.TEXTURE_3D||I===t.TEXTURE_2D_ARRAY?t.texImage3D(le,0,t.RGBA,1,1,de,0,t.RGBA,t.UNSIGNED_BYTE,_e):t.texImage2D(le+Te,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,_e);return te}const se={};se[t.TEXTURE_2D]=$(t.TEXTURE_2D,t.TEXTURE_2D,1),se[t.TEXTURE_CUBE_MAP]=$(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),se[t.TEXTURE_2D_ARRAY]=$(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),se[t.TEXTURE_3D]=$(t.TEXTURE_3D,t.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),re(t.DEPTH_TEST),o.setFunc(Ea),kt(!1),Wt(dx),re(t.CULL_FACE),et(xr);function re(I){c[I]!==!0&&(t.enable(I),c[I]=!0)}function be(I){c[I]!==!1&&(t.disable(I),c[I]=!1)}function Le(I,le){return d[I]!==le?(t.bindFramebuffer(I,le),d[I]=le,I===t.DRAW_FRAMEBUFFER&&(d[t.FRAMEBUFFER]=le),I===t.FRAMEBUFFER&&(d[t.DRAW_FRAMEBUFFER]=le),!0):!1}function Ee(I,le){let J=m,de=!1;if(I){J=h.get(le),J===void 0&&(J=[],h.set(le,J));const _e=I.textures;if(J.length!==_e.length||J[0]!==t.COLOR_ATTACHMENT0){for(let te=0,Te=_e.length;te<Te;te++)J[te]=t.COLOR_ATTACHMENT0+te;J.length=_e.length,de=!0}}else J[0]!==t.BACK&&(J[0]=t.BACK,de=!0);de&&t.drawBuffers(J)}function At(I){return g!==I?(t.useProgram(I),g=I,!0):!1}const We={[Gs]:t.FUNC_ADD,[$3]:t.FUNC_SUBTRACT,[K3]:t.FUNC_REVERSE_SUBTRACT};We[j3]=t.MIN,We[Z3]=t.MAX;const st={[Q3]:t.ZERO,[J3]:t.ONE,[eD]:t.SRC_COLOR,[Vp]:t.SRC_ALPHA,[oD]:t.SRC_ALPHA_SATURATE,[rD]:t.DST_COLOR,[nD]:t.DST_ALPHA,[tD]:t.ONE_MINUS_SRC_COLOR,[Hp]:t.ONE_MINUS_SRC_ALPHA,[sD]:t.ONE_MINUS_DST_COLOR,[iD]:t.ONE_MINUS_DST_ALPHA,[aD]:t.CONSTANT_COLOR,[lD]:t.ONE_MINUS_CONSTANT_COLOR,[uD]:t.CONSTANT_ALPHA,[cD]:t.ONE_MINUS_CONSTANT_ALPHA};function et(I,le,J,de,_e,te,Te,Se,Rt,ct){if(I===xr){_===!0&&(be(t.BLEND),_=!1);return}if(_===!1&&(re(t.BLEND),_=!0),I!==q3){if(I!==p||ct!==b){if((v!==Gs||E!==Gs)&&(t.blendEquation(t.FUNC_ADD),v=Gs,E=Gs),ct)switch(I){case la:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case hx:t.blendFunc(t.ONE,t.ONE);break;case px:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case mx:t.blendFuncSeparate(t.DST_COLOR,t.ONE_MINUS_SRC_ALPHA,t.ZERO,t.ONE);break;default:Ze("WebGLState: Invalid blending: ",I);break}else switch(I){case la:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case hx:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE,t.ONE,t.ONE);break;case px:Ze("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case mx:Ze("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ze("WebGLState: Invalid blending: ",I);break}x=null,S=null,T=null,A=null,y.set(0,0,0),w=0,p=I,b=ct}return}_e=_e||le,te=te||J,Te=Te||de,(le!==v||_e!==E)&&(t.blendEquationSeparate(We[le],We[_e]),v=le,E=_e),(J!==x||de!==S||te!==T||Te!==A)&&(t.blendFuncSeparate(st[J],st[de],st[te],st[Te]),x=J,S=de,T=te,A=Te),(Se.equals(y)===!1||Rt!==w)&&(t.blendColor(Se.r,Se.g,Se.b,Rt),y.copy(Se),w=Rt),p=I,b=!1}function Ke(I,le){I.side===Gi?be(t.CULL_FACE):re(t.CULL_FACE);let J=I.side===In;le&&(J=!J),kt(J),I.blending===la&&I.transparent===!1?et(xr):et(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),o.setFunc(I.depthFunc),o.setTest(I.depthTest),o.setMask(I.depthWrite),s.setMask(I.colorWrite);const de=I.stencilWrite;a.setTest(de),de&&(a.setMask(I.stencilWriteMask),a.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),a.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),en(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?re(t.SAMPLE_ALPHA_TO_COVERAGE):be(t.SAMPLE_ALPHA_TO_COVERAGE)}function kt(I){P!==I&&(I?t.frontFace(t.CW):t.frontFace(t.CCW),P=I)}function Wt(I){I!==W3?(re(t.CULL_FACE),I!==D&&(I===dx?t.cullFace(t.BACK):I===X3?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):be(t.CULL_FACE),D=I}function Kt(I){I!==z&&(F&&t.lineWidth(I),z=I)}function en(I,le,J){I?(re(t.POLYGON_OFFSET_FILL),(X!==le||U!==J)&&(X=le,U=J,o.getReversed()&&(le=-le),t.polygonOffset(le,J))):be(t.POLYGON_OFFSET_FILL)}function Ct(I){I?re(t.SCISSOR_TEST):be(t.SCISSOR_TEST)}function Bt(I){I===void 0&&(I=t.TEXTURE0+B-1),Q!==I&&(t.activeTexture(I),Q=I)}function N(I,le,J){J===void 0&&(Q===null?J=t.TEXTURE0+B-1:J=Q);let de=Z[J];de===void 0&&(de={type:void 0,texture:void 0},Z[J]=de),(de.type!==I||de.texture!==le)&&(Q!==J&&(t.activeTexture(J),Q=J),t.bindTexture(I,le||se[I]),de.type=I,de.texture=le)}function wn(){const I=Z[Q];I!==void 0&&I.type!==void 0&&(t.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function tt(){try{t.compressedTexImage2D(...arguments)}catch(I){Ze("WebGLState:",I)}}function R(){try{t.compressedTexImage3D(...arguments)}catch(I){Ze("WebGLState:",I)}}function M(){try{t.texSubImage2D(...arguments)}catch(I){Ze("WebGLState:",I)}}function k(){try{t.texSubImage3D(...arguments)}catch(I){Ze("WebGLState:",I)}}function W(){try{t.compressedTexSubImage2D(...arguments)}catch(I){Ze("WebGLState:",I)}}function K(){try{t.compressedTexSubImage3D(...arguments)}catch(I){Ze("WebGLState:",I)}}function ae(){try{t.texStorage2D(...arguments)}catch(I){Ze("WebGLState:",I)}}function ue(){try{t.texStorage3D(...arguments)}catch(I){Ze("WebGLState:",I)}}function j(){try{t.texImage2D(...arguments)}catch(I){Ze("WebGLState:",I)}}function ee(){try{t.texImage3D(...arguments)}catch(I){Ze("WebGLState:",I)}}function ce(I){return f[I]!==void 0?f[I]:t.getParameter(I)}function we(I,le){f[I]!==le&&(t.pixelStorei(I,le),f[I]=le)}function he(I){Fe.equals(I)===!1&&(t.scissor(I.x,I.y,I.z,I.w),Fe.copy(I))}function fe(I){Ne.equals(I)===!1&&(t.viewport(I.x,I.y,I.z,I.w),Ne.copy(I))}function Re(I,le){let J=u.get(le);J===void 0&&(J=new WeakMap,u.set(le,J));let de=J.get(I);de===void 0&&(de=t.getUniformBlockIndex(le,I.name),J.set(I,de))}function Pe(I,le){const de=u.get(le).get(I);l.get(le)!==de&&(t.uniformBlockBinding(le,de,I.__bindingPointIndex),l.set(le,de))}function ke(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),o.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),t.pixelStorei(t.PACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,!1),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,t.BROWSER_DEFAULT_WEBGL),t.pixelStorei(t.PACK_ROW_LENGTH,0),t.pixelStorei(t.PACK_SKIP_PIXELS,0),t.pixelStorei(t.PACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_ROW_LENGTH,0),t.pixelStorei(t.UNPACK_IMAGE_HEIGHT,0),t.pixelStorei(t.UNPACK_SKIP_PIXELS,0),t.pixelStorei(t.UNPACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_SKIP_IMAGES,0),c={},f={},Q=null,Z={},d={},h=new WeakMap,m=[],g=null,_=!1,p=null,v=null,x=null,S=null,E=null,T=null,A=null,y=new $e(0,0,0),w=0,b=!1,P=null,D=null,z=null,X=null,U=null,Fe.set(0,0,t.canvas.width,t.canvas.height),Ne.set(0,0,t.canvas.width,t.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:re,disable:be,bindFramebuffer:Le,drawBuffers:Ee,useProgram:At,setBlending:et,setMaterial:Ke,setFlipSided:kt,setCullFace:Wt,setLineWidth:Kt,setPolygonOffset:en,setScissorTest:Ct,activeTexture:Bt,bindTexture:N,unbindTexture:wn,compressedTexImage2D:tt,compressedTexImage3D:R,texImage2D:j,texImage3D:ee,pixelStorei:we,getParameter:ce,updateUBOMapping:Re,uniformBlockBinding:Pe,texStorage2D:ae,texStorage3D:ue,texSubImage2D:M,texSubImage3D:k,compressedTexSubImage2D:W,compressedTexSubImage3D:K,scissor:he,viewport:fe,reset:ke}}function JU(t,e,n,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new Je,c=new WeakMap,f=new Set;let d;const h=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(R,M){return m?new OffscreenCanvas(R,M):Kl("canvas")}function _(R,M,k){let W=1;const K=tt(R);if((K.width>k||K.height>k)&&(W=k/Math.max(K.width,K.height)),W<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const ae=Math.floor(W*K.width),ue=Math.floor(W*K.height);d===void 0&&(d=g(ae,ue));const j=M?g(ae,ue):d;return j.width=ae,j.height=ue,j.getContext("2d").drawImage(R,0,0,ae,ue),Ie("WebGLRenderer: Texture has been resized from ("+K.width+"x"+K.height+") to ("+ae+"x"+ue+")."),j}else return"data"in R&&Ie("WebGLRenderer: Image in DataTexture is too big ("+K.width+"x"+K.height+")."),R;return R}function p(R){return R.generateMipmaps}function v(R){t.generateMipmap(R)}function x(R){return R.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?t.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function S(R,M,k,W,K,ae=!1){if(R!==null){if(t[R]!==void 0)return t[R];Ie("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let ue;W&&(ue=e.get("EXT_texture_norm16"),ue||Ie("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let j=M;if(M===t.RED&&(k===t.FLOAT&&(j=t.R32F),k===t.HALF_FLOAT&&(j=t.R16F),k===t.UNSIGNED_BYTE&&(j=t.R8),k===t.UNSIGNED_SHORT&&ue&&(j=ue.R16_EXT),k===t.SHORT&&ue&&(j=ue.R16_SNORM_EXT)),M===t.RED_INTEGER&&(k===t.UNSIGNED_BYTE&&(j=t.R8UI),k===t.UNSIGNED_SHORT&&(j=t.R16UI),k===t.UNSIGNED_INT&&(j=t.R32UI),k===t.BYTE&&(j=t.R8I),k===t.SHORT&&(j=t.R16I),k===t.INT&&(j=t.R32I)),M===t.RG&&(k===t.FLOAT&&(j=t.RG32F),k===t.HALF_FLOAT&&(j=t.RG16F),k===t.UNSIGNED_BYTE&&(j=t.RG8),k===t.UNSIGNED_SHORT&&ue&&(j=ue.RG16_EXT),k===t.SHORT&&ue&&(j=ue.RG16_SNORM_EXT)),M===t.RG_INTEGER&&(k===t.UNSIGNED_BYTE&&(j=t.RG8UI),k===t.UNSIGNED_SHORT&&(j=t.RG16UI),k===t.UNSIGNED_INT&&(j=t.RG32UI),k===t.BYTE&&(j=t.RG8I),k===t.SHORT&&(j=t.RG16I),k===t.INT&&(j=t.RG32I)),M===t.RGB_INTEGER&&(k===t.UNSIGNED_BYTE&&(j=t.RGB8UI),k===t.UNSIGNED_SHORT&&(j=t.RGB16UI),k===t.UNSIGNED_INT&&(j=t.RGB32UI),k===t.BYTE&&(j=t.RGB8I),k===t.SHORT&&(j=t.RGB16I),k===t.INT&&(j=t.RGB32I)),M===t.RGBA_INTEGER&&(k===t.UNSIGNED_BYTE&&(j=t.RGBA8UI),k===t.UNSIGNED_SHORT&&(j=t.RGBA16UI),k===t.UNSIGNED_INT&&(j=t.RGBA32UI),k===t.BYTE&&(j=t.RGBA8I),k===t.SHORT&&(j=t.RGBA16I),k===t.INT&&(j=t.RGBA32I)),M===t.RGB&&(k===t.UNSIGNED_SHORT&&ue&&(j=ue.RGB16_EXT),k===t.SHORT&&ue&&(j=ue.RGB16_SNORM_EXT),k===t.UNSIGNED_INT_5_9_9_9_REV&&(j=t.RGB9_E5),k===t.UNSIGNED_INT_10F_11F_11F_REV&&(j=t.R11F_G11F_B10F)),M===t.RGBA){const ee=ae?_f:Xe.getTransfer(K);k===t.FLOAT&&(j=t.RGBA32F),k===t.HALF_FLOAT&&(j=t.RGBA16F),k===t.UNSIGNED_BYTE&&(j=ee===nt?t.SRGB8_ALPHA8:t.RGBA8),k===t.UNSIGNED_SHORT&&ue&&(j=ue.RGBA16_EXT),k===t.SHORT&&ue&&(j=ue.RGBA16_SNORM_EXT),k===t.UNSIGNED_SHORT_4_4_4_4&&(j=t.RGBA4),k===t.UNSIGNED_SHORT_5_5_5_1&&(j=t.RGB5_A1)}return(j===t.R16F||j===t.R32F||j===t.RG16F||j===t.RG32F||j===t.RGBA16F||j===t.RGBA32F)&&e.get("EXT_color_buffer_float"),j}function E(R,M){let k;return R?M===null||M===er||M===ql?k=t.DEPTH24_STENCIL8:M===Xi?k=t.DEPTH32F_STENCIL8:M===Yl&&(k=t.DEPTH24_STENCIL8,Ie("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===er||M===ql?k=t.DEPTH_COMPONENT24:M===Xi?k=t.DEPTH_COMPONENT32F:M===Yl&&(k=t.DEPTH_COMPONENT16),k}function T(R,M){return p(R)===!0||R.isFramebufferTexture&&R.minFilter!==nn&&R.minFilter!==mn?Math.log2(Math.max(M.width,M.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?M.mipmaps.length:1}function A(R){const M=R.target;M.removeEventListener("dispose",A),w(M),M.isVideoTexture&&c.delete(M),M.isHTMLTexture&&f.delete(M)}function y(R){const M=R.target;M.removeEventListener("dispose",y),P(M)}function w(R){const M=i.get(R);if(M.__webglInit===void 0)return;const k=R.source,W=h.get(k);if(W){const K=W[M.__cacheKey];K.usedTimes--,K.usedTimes===0&&b(R),Object.keys(W).length===0&&h.delete(k)}i.remove(R)}function b(R){const M=i.get(R);t.deleteTexture(M.__webglTexture);const k=R.source,W=h.get(k);delete W[M.__cacheKey],o.memory.textures--}function P(R){const M=i.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),i.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let W=0;W<6;W++){if(Array.isArray(M.__webglFramebuffer[W]))for(let K=0;K<M.__webglFramebuffer[W].length;K++)t.deleteFramebuffer(M.__webglFramebuffer[W][K]);else t.deleteFramebuffer(M.__webglFramebuffer[W]);M.__webglDepthbuffer&&t.deleteRenderbuffer(M.__webglDepthbuffer[W])}else{if(Array.isArray(M.__webglFramebuffer))for(let W=0;W<M.__webglFramebuffer.length;W++)t.deleteFramebuffer(M.__webglFramebuffer[W]);else t.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&t.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&t.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let W=0;W<M.__webglColorRenderbuffer.length;W++)M.__webglColorRenderbuffer[W]&&t.deleteRenderbuffer(M.__webglColorRenderbuffer[W]);M.__webglDepthRenderbuffer&&t.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const k=R.textures;for(let W=0,K=k.length;W<K;W++){const ae=i.get(k[W]);ae.__webglTexture&&(t.deleteTexture(ae.__webglTexture),o.memory.textures--),i.remove(k[W])}i.remove(R)}let D=0;function z(){D=0}function X(){return D}function U(R){D=R}function B(){const R=D;return R>=r.maxTextures&&Ie("WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+r.maxTextures),D+=1,R}function F(R){const M=[];return M.push(R.wrapS),M.push(R.wrapT),M.push(R.wrapR||0),M.push(R.magFilter),M.push(R.minFilter),M.push(R.anisotropy),M.push(R.internalFormat),M.push(R.format),M.push(R.type),M.push(R.generateMipmaps),M.push(R.premultiplyAlpha),M.push(R.flipY),M.push(R.unpackAlignment),M.push(R.colorSpace),M.join()}function L(R,M){const k=i.get(R);if(R.isVideoTexture&&N(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&k.__version!==R.version){const W=R.image;if(W===null)Ie("WebGLRenderer: Texture marked for update but no image data found.");else if(W.complete===!1)Ie("WebGLRenderer: Texture marked for update but image is incomplete");else{be(k,R,M);return}}else R.isExternalTexture&&(k.__webglTexture=R.sourceTexture?R.sourceTexture:null);n.bindTexture(t.TEXTURE_2D,k.__webglTexture,t.TEXTURE0+M)}function Y(R,M){const k=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&k.__version!==R.version){be(k,R,M);return}else R.isExternalTexture&&(k.__webglTexture=R.sourceTexture?R.sourceTexture:null);n.bindTexture(t.TEXTURE_2D_ARRAY,k.__webglTexture,t.TEXTURE0+M)}function Q(R,M){const k=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&k.__version!==R.version){be(k,R,M);return}n.bindTexture(t.TEXTURE_3D,k.__webglTexture,t.TEXTURE0+M)}function Z(R,M){const k=i.get(R);if(R.isCubeDepthTexture!==!0&&R.version>0&&k.__version!==R.version){Le(k,R,M);return}n.bindTexture(t.TEXTURE_CUBE_MAP,k.__webglTexture,t.TEXTURE0+M)}const ne={[jp]:t.REPEAT,[mr]:t.CLAMP_TO_EDGE,[Zp]:t.MIRRORED_REPEAT},Oe={[nn]:t.NEAREST,[hD]:t.NEAREST_MIPMAP_NEAREST,[Vu]:t.NEAREST_MIPMAP_LINEAR,[mn]:t.LINEAR,[$d]:t.LINEAR_MIPMAP_NEAREST,[Ks]:t.LINEAR_MIPMAP_LINEAR},Fe={[gD]:t.NEVER,[SD]:t.ALWAYS,[_D]:t.LESS,[m0]:t.LEQUAL,[vD]:t.EQUAL,[g0]:t.GEQUAL,[xD]:t.GREATER,[yD]:t.NOTEQUAL};function Ne(R,M){if(M.type===Xi&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===mn||M.magFilter===$d||M.magFilter===Vu||M.magFilter===Ks||M.minFilter===mn||M.minFilter===$d||M.minFilter===Vu||M.minFilter===Ks)&&Ie("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(R,t.TEXTURE_WRAP_S,ne[M.wrapS]),t.texParameteri(R,t.TEXTURE_WRAP_T,ne[M.wrapT]),(R===t.TEXTURE_3D||R===t.TEXTURE_2D_ARRAY)&&t.texParameteri(R,t.TEXTURE_WRAP_R,ne[M.wrapR]),t.texParameteri(R,t.TEXTURE_MAG_FILTER,Oe[M.magFilter]),t.texParameteri(R,t.TEXTURE_MIN_FILTER,Oe[M.minFilter]),M.compareFunction&&(t.texParameteri(R,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(R,t.TEXTURE_COMPARE_FUNC,Fe[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===nn||M.minFilter!==Vu&&M.minFilter!==Ks||M.type===Xi&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||i.get(M).__currentAnisotropy){const k=e.get("EXT_texture_filter_anisotropic");t.texParameterf(R,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,r.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy}}}function $(R,M){let k=!1;R.__webglInit===void 0&&(R.__webglInit=!0,M.addEventListener("dispose",A));const W=M.source;let K=h.get(W);K===void 0&&(K={},h.set(W,K));const ae=F(M);if(ae!==R.__cacheKey){K[ae]===void 0&&(K[ae]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,k=!0),K[ae].usedTimes++;const ue=K[R.__cacheKey];ue!==void 0&&(K[R.__cacheKey].usedTimes--,ue.usedTimes===0&&b(M)),R.__cacheKey=ae,R.__webglTexture=K[ae].texture}return k}function se(R,M,k){return Math.floor(Math.floor(R/k)/M)}function re(R,M,k,W){const ae=R.updateRanges;if(ae.length===0)n.texSubImage2D(t.TEXTURE_2D,0,0,0,M.width,M.height,k,W,M.data);else{ae.sort((we,he)=>we.start-he.start);let ue=0;for(let we=1;we<ae.length;we++){const he=ae[ue],fe=ae[we],Re=he.start+he.count,Pe=se(fe.start,M.width,4),ke=se(he.start,M.width,4);fe.start<=Re+1&&Pe===ke&&se(fe.start+fe.count-1,M.width,4)===Pe?he.count=Math.max(he.count,fe.start+fe.count-he.start):(++ue,ae[ue]=fe)}ae.length=ue+1;const j=n.getParameter(t.UNPACK_ROW_LENGTH),ee=n.getParameter(t.UNPACK_SKIP_PIXELS),ce=n.getParameter(t.UNPACK_SKIP_ROWS);n.pixelStorei(t.UNPACK_ROW_LENGTH,M.width);for(let we=0,he=ae.length;we<he;we++){const fe=ae[we],Re=Math.floor(fe.start/4),Pe=Math.ceil(fe.count/4),ke=Re%M.width,I=Math.floor(Re/M.width),le=Pe,J=1;n.pixelStorei(t.UNPACK_SKIP_PIXELS,ke),n.pixelStorei(t.UNPACK_SKIP_ROWS,I),n.texSubImage2D(t.TEXTURE_2D,0,ke,I,le,J,k,W,M.data)}R.clearUpdateRanges(),n.pixelStorei(t.UNPACK_ROW_LENGTH,j),n.pixelStorei(t.UNPACK_SKIP_PIXELS,ee),n.pixelStorei(t.UNPACK_SKIP_ROWS,ce)}}function be(R,M,k){let W=t.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(W=t.TEXTURE_2D_ARRAY),M.isData3DTexture&&(W=t.TEXTURE_3D);const K=$(R,M),ae=M.source;n.bindTexture(W,R.__webglTexture,t.TEXTURE0+k);const ue=i.get(ae);if(ae.version!==ue.__version||K===!0){if(n.activeTexture(t.TEXTURE0+k),(typeof ImageBitmap<"u"&&M.image instanceof ImageBitmap)===!1){const J=Xe.getPrimaries(Xe.workingColorSpace),de=M.colorSpace===jr?null:Xe.getPrimaries(M.colorSpace),_e=M.colorSpace===jr||J===de?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,M.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,_e)}n.pixelStorei(t.UNPACK_ALIGNMENT,M.unpackAlignment);let ee=_(M.image,!1,r.maxTextureSize);ee=wn(M,ee);const ce=s.convert(M.format,M.colorSpace),we=s.convert(M.type);let he=S(M.internalFormat,ce,we,M.normalized,M.colorSpace,M.isVideoTexture);Ne(W,M);let fe;const Re=M.mipmaps,Pe=M.isVideoTexture!==!0,ke=ue.__version===void 0||K===!0,I=ae.dataReady,le=T(M,ee);if(M.isDepthTexture)he=E(M.format===js,M.type),ke&&(Pe?n.texStorage2D(t.TEXTURE_2D,1,he,ee.width,ee.height):n.texImage2D(t.TEXTURE_2D,0,he,ee.width,ee.height,0,ce,we,null));else if(M.isDataTexture)if(Re.length>0){Pe&&ke&&n.texStorage2D(t.TEXTURE_2D,le,he,Re[0].width,Re[0].height);for(let J=0,de=Re.length;J<de;J++)fe=Re[J],Pe?I&&n.texSubImage2D(t.TEXTURE_2D,J,0,0,fe.width,fe.height,ce,we,fe.data):n.texImage2D(t.TEXTURE_2D,J,he,fe.width,fe.height,0,ce,we,fe.data);M.generateMipmaps=!1}else Pe?(ke&&n.texStorage2D(t.TEXTURE_2D,le,he,ee.width,ee.height),I&&re(M,ee,ce,we)):n.texImage2D(t.TEXTURE_2D,0,he,ee.width,ee.height,0,ce,we,ee.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){Pe&&ke&&n.texStorage3D(t.TEXTURE_2D_ARRAY,le,he,Re[0].width,Re[0].height,ee.depth);for(let J=0,de=Re.length;J<de;J++)if(fe=Re[J],M.format!==Ri)if(ce!==null)if(Pe){if(I)if(M.layerUpdates.size>0){const _e=Gx(fe.width,fe.height,M.format,M.type);for(const te of M.layerUpdates){const Te=fe.data.subarray(te*_e/fe.data.BYTES_PER_ELEMENT,(te+1)*_e/fe.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,J,0,0,te,fe.width,fe.height,1,ce,Te)}M.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,J,0,0,0,fe.width,fe.height,ee.depth,ce,fe.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,J,he,fe.width,fe.height,ee.depth,0,fe.data,0,0);else Ie("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Pe?I&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,J,0,0,0,fe.width,fe.height,ee.depth,ce,we,fe.data):n.texImage3D(t.TEXTURE_2D_ARRAY,J,he,fe.width,fe.height,ee.depth,0,ce,we,fe.data)}else{Pe&&ke&&n.texStorage2D(t.TEXTURE_2D,le,he,Re[0].width,Re[0].height);for(let J=0,de=Re.length;J<de;J++)fe=Re[J],M.format!==Ri?ce!==null?Pe?I&&n.compressedTexSubImage2D(t.TEXTURE_2D,J,0,0,fe.width,fe.height,ce,fe.data):n.compressedTexImage2D(t.TEXTURE_2D,J,he,fe.width,fe.height,0,fe.data):Ie("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Pe?I&&n.texSubImage2D(t.TEXTURE_2D,J,0,0,fe.width,fe.height,ce,we,fe.data):n.texImage2D(t.TEXTURE_2D,J,he,fe.width,fe.height,0,ce,we,fe.data)}else if(M.isDataArrayTexture)if(Pe){if(ke&&n.texStorage3D(t.TEXTURE_2D_ARRAY,le,he,ee.width,ee.height,ee.depth),I)if(M.layerUpdates.size>0){const J=Gx(ee.width,ee.height,M.format,M.type);for(const de of M.layerUpdates){const _e=ee.data.subarray(de*J/ee.data.BYTES_PER_ELEMENT,(de+1)*J/ee.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,de,ee.width,ee.height,1,ce,we,_e)}M.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,ee.width,ee.height,ee.depth,ce,we,ee.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,he,ee.width,ee.height,ee.depth,0,ce,we,ee.data);else if(M.isData3DTexture)Pe?(ke&&n.texStorage3D(t.TEXTURE_3D,le,he,ee.width,ee.height,ee.depth),I&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,ee.width,ee.height,ee.depth,ce,we,ee.data)):n.texImage3D(t.TEXTURE_3D,0,he,ee.width,ee.height,ee.depth,0,ce,we,ee.data);else if(M.isFramebufferTexture){if(ke)if(Pe)n.texStorage2D(t.TEXTURE_2D,le,he,ee.width,ee.height);else{let J=ee.width,de=ee.height;for(let _e=0;_e<le;_e++)n.texImage2D(t.TEXTURE_2D,_e,he,J,de,0,ce,we,null),J>>=1,de>>=1}}else if(M.isHTMLTexture){if("texElementImage2D"in t){const J=t.canvas;if(J.hasAttribute("layoutsubtree")||J.setAttribute("layoutsubtree","true"),ee.parentNode!==J){J.appendChild(ee),f.add(M),J.onpaint=de=>{const _e=de.changedElements;for(const te of f)_e.includes(te.image)&&(te.needsUpdate=!0)},J.requestPaint();return}if(t.texElementImage2D.length===3)t.texElementImage2D(t.TEXTURE_2D,t.RGBA8,ee);else{const _e=t.RGBA,te=t.RGBA,Te=t.UNSIGNED_BYTE;t.texElementImage2D(t.TEXTURE_2D,0,_e,te,Te,ee)}t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE)}}else if(Re.length>0){if(Pe&&ke){const J=tt(Re[0]);n.texStorage2D(t.TEXTURE_2D,le,he,J.width,J.height)}for(let J=0,de=Re.length;J<de;J++)fe=Re[J],Pe?I&&n.texSubImage2D(t.TEXTURE_2D,J,0,0,ce,we,fe):n.texImage2D(t.TEXTURE_2D,J,he,ce,we,fe);M.generateMipmaps=!1}else if(Pe){if(ke){const J=tt(ee);n.texStorage2D(t.TEXTURE_2D,le,he,J.width,J.height)}I&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,ce,we,ee)}else n.texImage2D(t.TEXTURE_2D,0,he,ce,we,ee);p(M)&&v(W),ue.__version=ae.version,M.onUpdate&&M.onUpdate(M)}R.__version=M.version}function Le(R,M,k){if(M.image.length!==6)return;const W=$(R,M),K=M.source;n.bindTexture(t.TEXTURE_CUBE_MAP,R.__webglTexture,t.TEXTURE0+k);const ae=i.get(K);if(K.version!==ae.__version||W===!0){n.activeTexture(t.TEXTURE0+k);const ue=Xe.getPrimaries(Xe.workingColorSpace),j=M.colorSpace===jr?null:Xe.getPrimaries(M.colorSpace),ee=M.colorSpace===jr||ue===j?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,M.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),n.pixelStorei(t.UNPACK_ALIGNMENT,M.unpackAlignment),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,ee);const ce=M.isCompressedTexture||M.image[0].isCompressedTexture,we=M.image[0]&&M.image[0].isDataTexture,he=[];for(let te=0;te<6;te++)!ce&&!we?he[te]=_(M.image[te],!0,r.maxCubemapSize):he[te]=we?M.image[te].image:M.image[te],he[te]=wn(M,he[te]);const fe=he[0],Re=s.convert(M.format,M.colorSpace),Pe=s.convert(M.type),ke=S(M.internalFormat,Re,Pe,M.normalized,M.colorSpace),I=M.isVideoTexture!==!0,le=ae.__version===void 0||W===!0,J=K.dataReady;let de=T(M,fe);Ne(t.TEXTURE_CUBE_MAP,M);let _e;if(ce){I&&le&&n.texStorage2D(t.TEXTURE_CUBE_MAP,de,ke,fe.width,fe.height);for(let te=0;te<6;te++){_e=he[te].mipmaps;for(let Te=0;Te<_e.length;Te++){const Se=_e[Te];M.format!==Ri?Re!==null?I?J&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,Te,0,0,Se.width,Se.height,Re,Se.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,Te,ke,Se.width,Se.height,0,Se.data):Ie("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):I?J&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,Te,0,0,Se.width,Se.height,Re,Pe,Se.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,Te,ke,Se.width,Se.height,0,Re,Pe,Se.data)}}}else{if(_e=M.mipmaps,I&&le){_e.length>0&&de++;const te=tt(he[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,de,ke,te.width,te.height)}for(let te=0;te<6;te++)if(we){I?J&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,he[te].width,he[te].height,Re,Pe,he[te].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,ke,he[te].width,he[te].height,0,Re,Pe,he[te].data);for(let Te=0;Te<_e.length;Te++){const Rt=_e[Te].image[te].image;I?J&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,Te+1,0,0,Rt.width,Rt.height,Re,Pe,Rt.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,Te+1,ke,Rt.width,Rt.height,0,Re,Pe,Rt.data)}}else{I?J&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,Re,Pe,he[te]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,ke,Re,Pe,he[te]);for(let Te=0;Te<_e.length;Te++){const Se=_e[Te];I?J&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,Te+1,0,0,Re,Pe,Se.image[te]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,Te+1,ke,Re,Pe,Se.image[te])}}}p(M)&&v(t.TEXTURE_CUBE_MAP),ae.__version=K.version,M.onUpdate&&M.onUpdate(M)}R.__version=M.version}function Ee(R,M,k,W,K,ae){const ue=s.convert(k.format,k.colorSpace),j=s.convert(k.type),ee=S(k.internalFormat,ue,j,k.normalized,k.colorSpace),ce=i.get(M),we=i.get(k);if(we.__renderTarget=M,!ce.__hasExternalTextures){const he=Math.max(1,M.width>>ae),fe=Math.max(1,M.height>>ae);K===t.TEXTURE_3D||K===t.TEXTURE_2D_ARRAY?n.texImage3D(K,ae,ee,he,fe,M.depth,0,ue,j,null):n.texImage2D(K,ae,ee,he,fe,0,ue,j,null)}n.bindFramebuffer(t.FRAMEBUFFER,R),Bt(M)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,W,K,we.__webglTexture,0,Ct(M)):(K===t.TEXTURE_2D||K>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&K<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,W,K,we.__webglTexture,ae),n.bindFramebuffer(t.FRAMEBUFFER,null)}function At(R,M,k){if(t.bindRenderbuffer(t.RENDERBUFFER,R),M.depthBuffer){const W=M.depthTexture,K=W&&W.isDepthTexture?W.type:null,ae=E(M.stencilBuffer,K),ue=M.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;Bt(M)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Ct(M),ae,M.width,M.height):k?t.renderbufferStorageMultisample(t.RENDERBUFFER,Ct(M),ae,M.width,M.height):t.renderbufferStorage(t.RENDERBUFFER,ae,M.width,M.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,ue,t.RENDERBUFFER,R)}else{const W=M.textures;for(let K=0;K<W.length;K++){const ae=W[K],ue=s.convert(ae.format,ae.colorSpace),j=s.convert(ae.type),ee=S(ae.internalFormat,ue,j,ae.normalized,ae.colorSpace);Bt(M)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Ct(M),ee,M.width,M.height):k?t.renderbufferStorageMultisample(t.RENDERBUFFER,Ct(M),ee,M.width,M.height):t.renderbufferStorage(t.RENDERBUFFER,ee,M.width,M.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function We(R,M,k){const W=M.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(t.FRAMEBUFFER,R),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const K=i.get(M.depthTexture);if(K.__renderTarget=M,(!K.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),W){if(K.__webglInit===void 0&&(K.__webglInit=!0,M.depthTexture.addEventListener("dispose",A)),K.__webglTexture===void 0){K.__webglTexture=t.createTexture(),n.bindTexture(t.TEXTURE_CUBE_MAP,K.__webglTexture),Ne(t.TEXTURE_CUBE_MAP,M.depthTexture);const ce=s.convert(M.depthTexture.format),we=s.convert(M.depthTexture.type);let he;M.depthTexture.format===Rr?he=t.DEPTH_COMPONENT24:M.depthTexture.format===js&&(he=t.DEPTH24_STENCIL8);for(let fe=0;fe<6;fe++)t.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,he,M.width,M.height,0,ce,we,null)}}else L(M.depthTexture,0);const ae=K.__webglTexture,ue=Ct(M),j=W?t.TEXTURE_CUBE_MAP_POSITIVE_X+k:t.TEXTURE_2D,ee=M.depthTexture.format===js?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;if(M.depthTexture.format===Rr)Bt(M)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,ee,j,ae,0,ue):t.framebufferTexture2D(t.FRAMEBUFFER,ee,j,ae,0);else if(M.depthTexture.format===js)Bt(M)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,ee,j,ae,0,ue):t.framebufferTexture2D(t.FRAMEBUFFER,ee,j,ae,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function st(R){const M=i.get(R),k=R.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==R.depthTexture){const W=R.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),W){const K=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,W.removeEventListener("dispose",K)};W.addEventListener("dispose",K),M.__depthDisposeCallback=K}M.__boundDepthTexture=W}if(R.depthTexture&&!M.__autoAllocateDepthBuffer)if(k)for(let W=0;W<6;W++)We(M.__webglFramebuffer[W],R,W);else{const W=R.texture.mipmaps;W&&W.length>0?We(M.__webglFramebuffer[0],R,0):We(M.__webglFramebuffer,R,0)}else if(k){M.__webglDepthbuffer=[];for(let W=0;W<6;W++)if(n.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer[W]),M.__webglDepthbuffer[W]===void 0)M.__webglDepthbuffer[W]=t.createRenderbuffer(),At(M.__webglDepthbuffer[W],R,!1);else{const K=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ae=M.__webglDepthbuffer[W];t.bindRenderbuffer(t.RENDERBUFFER,ae),t.framebufferRenderbuffer(t.FRAMEBUFFER,K,t.RENDERBUFFER,ae)}}else{const W=R.texture.mipmaps;if(W&&W.length>0?n.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer[0]):n.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=t.createRenderbuffer(),At(M.__webglDepthbuffer,R,!1);else{const K=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ae=M.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,ae),t.framebufferRenderbuffer(t.FRAMEBUFFER,K,t.RENDERBUFFER,ae)}}n.bindFramebuffer(t.FRAMEBUFFER,null)}function et(R,M,k){const W=i.get(R);M!==void 0&&Ee(W.__webglFramebuffer,R,R.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),k!==void 0&&st(R)}function Ke(R){const M=R.texture,k=i.get(R),W=i.get(M);R.addEventListener("dispose",y);const K=R.textures,ae=R.isWebGLCubeRenderTarget===!0,ue=K.length>1;if(ue||(W.__webglTexture===void 0&&(W.__webglTexture=t.createTexture()),W.__version=M.version,o.memory.textures++),ae){k.__webglFramebuffer=[];for(let j=0;j<6;j++)if(M.mipmaps&&M.mipmaps.length>0){k.__webglFramebuffer[j]=[];for(let ee=0;ee<M.mipmaps.length;ee++)k.__webglFramebuffer[j][ee]=t.createFramebuffer()}else k.__webglFramebuffer[j]=t.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){k.__webglFramebuffer=[];for(let j=0;j<M.mipmaps.length;j++)k.__webglFramebuffer[j]=t.createFramebuffer()}else k.__webglFramebuffer=t.createFramebuffer();if(ue)for(let j=0,ee=K.length;j<ee;j++){const ce=i.get(K[j]);ce.__webglTexture===void 0&&(ce.__webglTexture=t.createTexture(),o.memory.textures++)}if(R.samples>0&&Bt(R)===!1){k.__webglMultisampledFramebuffer=t.createFramebuffer(),k.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let j=0;j<K.length;j++){const ee=K[j];k.__webglColorRenderbuffer[j]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,k.__webglColorRenderbuffer[j]);const ce=s.convert(ee.format,ee.colorSpace),we=s.convert(ee.type),he=S(ee.internalFormat,ce,we,ee.normalized,ee.colorSpace,R.isXRRenderTarget===!0),fe=Ct(R);t.renderbufferStorageMultisample(t.RENDERBUFFER,fe,he,R.width,R.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+j,t.RENDERBUFFER,k.__webglColorRenderbuffer[j])}t.bindRenderbuffer(t.RENDERBUFFER,null),R.depthBuffer&&(k.__webglDepthRenderbuffer=t.createRenderbuffer(),At(k.__webglDepthRenderbuffer,R,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(ae){n.bindTexture(t.TEXTURE_CUBE_MAP,W.__webglTexture),Ne(t.TEXTURE_CUBE_MAP,M);for(let j=0;j<6;j++)if(M.mipmaps&&M.mipmaps.length>0)for(let ee=0;ee<M.mipmaps.length;ee++)Ee(k.__webglFramebuffer[j][ee],R,M,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+j,ee);else Ee(k.__webglFramebuffer[j],R,M,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+j,0);p(M)&&v(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(ue){for(let j=0,ee=K.length;j<ee;j++){const ce=K[j],we=i.get(ce);let he=t.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(he=R.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(he,we.__webglTexture),Ne(he,ce),Ee(k.__webglFramebuffer,R,ce,t.COLOR_ATTACHMENT0+j,he,0),p(ce)&&v(he)}n.unbindTexture()}else{let j=t.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(j=R.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(j,W.__webglTexture),Ne(j,M),M.mipmaps&&M.mipmaps.length>0)for(let ee=0;ee<M.mipmaps.length;ee++)Ee(k.__webglFramebuffer[ee],R,M,t.COLOR_ATTACHMENT0,j,ee);else Ee(k.__webglFramebuffer,R,M,t.COLOR_ATTACHMENT0,j,0);p(M)&&v(j),n.unbindTexture()}R.depthBuffer&&st(R)}function kt(R){const M=R.textures;for(let k=0,W=M.length;k<W;k++){const K=M[k];if(p(K)){const ae=x(R),ue=i.get(K).__webglTexture;n.bindTexture(ae,ue),v(ae),n.unbindTexture()}}}const Wt=[],Kt=[];function en(R){if(R.samples>0){if(Bt(R)===!1){const M=R.textures,k=R.width,W=R.height;let K=t.COLOR_BUFFER_BIT;const ae=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ue=i.get(R),j=M.length>1;if(j)for(let ce=0;ce<M.length;ce++)n.bindFramebuffer(t.FRAMEBUFFER,ue.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ce,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,ue.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ce,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,ue.__webglMultisampledFramebuffer);const ee=R.texture.mipmaps;ee&&ee.length>0?n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ue.__webglFramebuffer[0]):n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ue.__webglFramebuffer);for(let ce=0;ce<M.length;ce++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(K|=t.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(K|=t.STENCIL_BUFFER_BIT)),j){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,ue.__webglColorRenderbuffer[ce]);const we=i.get(M[ce]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,we,0)}t.blitFramebuffer(0,0,k,W,0,0,k,W,K,t.NEAREST),l===!0&&(Wt.length=0,Kt.length=0,Wt.push(t.COLOR_ATTACHMENT0+ce),R.depthBuffer&&R.resolveDepthBuffer===!1&&(Wt.push(ae),Kt.push(ae),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,Kt)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,Wt))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),j)for(let ce=0;ce<M.length;ce++){n.bindFramebuffer(t.FRAMEBUFFER,ue.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ce,t.RENDERBUFFER,ue.__webglColorRenderbuffer[ce]);const we=i.get(M[ce]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,ue.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ce,t.TEXTURE_2D,we,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ue.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){const M=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[M])}}}function Ct(R){return Math.min(r.maxSamples,R.samples)}function Bt(R){const M=i.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function N(R){const M=o.render.frame;c.get(R)!==M&&(c.set(R,M),R.update())}function wn(R,M){const k=R.colorSpace,W=R.format,K=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||k!==gf&&k!==jr&&(Xe.getTransfer(k)===nt?(W!==Ri||K!==$n)&&Ie("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ze("WebGLTextures: Unsupported texture color space:",k)),M}function tt(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(u.width=R.naturalWidth||R.width,u.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(u.width=R.displayWidth,u.height=R.displayHeight):(u.width=R.width,u.height=R.height),u}this.allocateTextureUnit=B,this.resetTextureUnits=z,this.getTextureUnits=X,this.setTextureUnits=U,this.setTexture2D=L,this.setTexture2DArray=Y,this.setTexture3D=Q,this.setTextureCube=Z,this.rebindTextures=et,this.setupRenderTarget=Ke,this.updateRenderTargetMipmap=kt,this.updateMultisampleRenderTarget=en,this.setupDepthRenderbuffer=st,this.setupFrameBufferTexture=Ee,this.useMultisampledRTT=Bt,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function eF(t,e){function n(i,r=jr){let s;const o=Xe.getTransfer(r);if(i===$n)return t.UNSIGNED_BYTE;if(i===c0)return t.UNSIGNED_SHORT_4_4_4_4;if(i===f0)return t.UNSIGNED_SHORT_5_5_5_1;if(i===TE)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===wE)return t.UNSIGNED_INT_10F_11F_11F_REV;if(i===ME)return t.BYTE;if(i===EE)return t.SHORT;if(i===Yl)return t.UNSIGNED_SHORT;if(i===u0)return t.INT;if(i===er)return t.UNSIGNED_INT;if(i===Xi)return t.FLOAT;if(i===Cr)return t.HALF_FLOAT;if(i===AE)return t.ALPHA;if(i===CE)return t.RGB;if(i===Ri)return t.RGBA;if(i===Rr)return t.DEPTH_COMPONENT;if(i===js)return t.DEPTH_STENCIL;if(i===RE)return t.RED;if(i===d0)return t.RED_INTEGER;if(i===co)return t.RG;if(i===h0)return t.RG_INTEGER;if(i===p0)return t.RGBA_INTEGER;if(i===Cc||i===Rc||i===bc||i===Pc)if(o===nt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Cc)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Rc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===bc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Pc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Cc)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Rc)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===bc)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Pc)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Qp||i===Jp||i===em||i===tm)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Qp)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Jp)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===em)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===tm)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===nm||i===im||i===rm||i===sm||i===om||i===pf||i===am)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===nm||i===im)return o===nt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===rm)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===sm)return s.COMPRESSED_R11_EAC;if(i===om)return s.COMPRESSED_SIGNED_R11_EAC;if(i===pf)return s.COMPRESSED_RG11_EAC;if(i===am)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===lm||i===um||i===cm||i===fm||i===dm||i===hm||i===pm||i===mm||i===gm||i===_m||i===vm||i===xm||i===ym||i===Sm)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===lm)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===um)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===cm)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===fm)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===dm)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===hm)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===pm)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===mm)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===gm)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===_m)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===vm)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===xm)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===ym)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Sm)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Mm||i===Em||i===Tm)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Mm)return o===nt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Em)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Tm)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===wm||i===Am||i===mf||i===Cm)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===wm)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Am)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===mf)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Cm)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===ql?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}const tF=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,nF=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class iF{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const i=new OE(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new Li({vertexShader:tF,fragmentShader:nF,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new tr(new gu(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class rF extends _o{constructor(e,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,u=null,c=null,f=null,d=null,h=null,m=null;const g=typeof XRWebGLBinding<"u",_=new iF,p={},v=n.getContextAttributes();let x=null,S=null;const E=[],T=[],A=new Je;let y=null;const w=new qn;w.viewport=new Mt;const b=new qn;b.viewport=new Mt;const P=[w,b],D=new p2;let z=null,X=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let se=E[$];return se===void 0&&(se=new nh,E[$]=se),se.getTargetRaySpace()},this.getControllerGrip=function($){let se=E[$];return se===void 0&&(se=new nh,E[$]=se),se.getGripSpace()},this.getHand=function($){let se=E[$];return se===void 0&&(se=new nh,E[$]=se),se.getHandSpace()};function U($){const se=T.indexOf($.inputSource);if(se===-1)return;const re=E[se];re!==void 0&&(re.update($.inputSource,$.frame,u||o),re.dispatchEvent({type:$.type,data:$.inputSource}))}function B(){r.removeEventListener("select",U),r.removeEventListener("selectstart",U),r.removeEventListener("selectend",U),r.removeEventListener("squeeze",U),r.removeEventListener("squeezestart",U),r.removeEventListener("squeezeend",U),r.removeEventListener("end",B),r.removeEventListener("inputsourceschange",F);for(let $=0;$<E.length;$++){const se=T[$];se!==null&&(T[$]=null,E[$].disconnect(se))}z=null,X=null,_.reset();for(const $ in p)delete p[$];e.setRenderTarget(x),h=null,d=null,f=null,r=null,S=null,Ne.stop(),i.isPresenting=!1,e.setPixelRatio(y),e.setSize(A.width,A.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){s=$,i.isPresenting===!0&&Ie("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){a=$,i.isPresenting===!0&&Ie("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||o},this.setReferenceSpace=function($){u=$},this.getBaseLayer=function(){return d!==null?d:h},this.getBinding=function(){return f===null&&g&&(f=new XRWebGLBinding(r,n)),f},this.getFrame=function(){return m},this.getSession=function(){return r},this.setSession=async function($){if(r=$,r!==null){if(x=e.getRenderTarget(),r.addEventListener("select",U),r.addEventListener("selectstart",U),r.addEventListener("selectend",U),r.addEventListener("squeeze",U),r.addEventListener("squeezestart",U),r.addEventListener("squeezeend",U),r.addEventListener("end",B),r.addEventListener("inputsourceschange",F),v.xrCompatible!==!0&&await n.makeXRCompatible(),y=e.getPixelRatio(),e.getSize(A),g&&"createProjectionLayer"in XRWebGLBinding.prototype){let re=null,be=null,Le=null;v.depth&&(Le=v.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,re=v.stencil?js:Rr,be=v.stencil?ql:er);const Ee={colorFormat:n.RGBA8,depthFormat:Le,scaleFactor:s};f=this.getBinding(),d=f.createProjectionLayer(Ee),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),S=new Qi(d.textureWidth,d.textureHeight,{format:Ri,type:$n,depthTexture:new wa(d.textureWidth,d.textureHeight,be,void 0,void 0,void 0,void 0,void 0,void 0,re),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const re={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:s};h=new XRWebGLLayer(r,n,re),r.updateRenderState({baseLayer:h}),e.setPixelRatio(1),e.setSize(h.framebufferWidth,h.framebufferHeight,!1),S=new Qi(h.framebufferWidth,h.framebufferHeight,{format:Ri,type:$n,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(l),u=null,o=await r.requestReferenceSpace(a),Ne.setContext(r),Ne.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function F($){for(let se=0;se<$.removed.length;se++){const re=$.removed[se],be=T.indexOf(re);be>=0&&(T[be]=null,E[be].disconnect(re))}for(let se=0;se<$.added.length;se++){const re=$.added[se];let be=T.indexOf(re);if(be===-1){for(let Ee=0;Ee<E.length;Ee++)if(Ee>=T.length){T.push(re),be=Ee;break}else if(T[Ee]===null){T[Ee]=re,be=Ee;break}if(be===-1)break}const Le=E[be];Le&&Le.connect(re)}}const L=new G,Y=new G;function Q($,se,re){L.setFromMatrixPosition(se.matrixWorld),Y.setFromMatrixPosition(re.matrixWorld);const be=L.distanceTo(Y),Le=se.projectionMatrix.elements,Ee=re.projectionMatrix.elements,At=Le[14]/(Le[10]-1),We=Le[14]/(Le[10]+1),st=(Le[9]+1)/Le[5],et=(Le[9]-1)/Le[5],Ke=(Le[8]-1)/Le[0],kt=(Ee[8]+1)/Ee[0],Wt=At*Ke,Kt=At*kt,en=be/(-Ke+kt),Ct=en*-Ke;if(se.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(Ct),$.translateZ(en),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),Le[10]===-1)$.projectionMatrix.copy(se.projectionMatrix),$.projectionMatrixInverse.copy(se.projectionMatrixInverse);else{const Bt=At+en,N=We+en,wn=Wt-Ct,tt=Kt+(be-Ct),R=st*We/N*Bt,M=et*We/N*Bt;$.projectionMatrix.makePerspective(wn,tt,R,M,Bt,N),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function Z($,se){se===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(se.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(r===null)return;let se=$.near,re=$.far;_.texture!==null&&(_.depthNear>0&&(se=_.depthNear),_.depthFar>0&&(re=_.depthFar)),D.near=b.near=w.near=se,D.far=b.far=w.far=re,(z!==D.near||X!==D.far)&&(r.updateRenderState({depthNear:D.near,depthFar:D.far}),z=D.near,X=D.far),D.layers.mask=$.layers.mask|6,w.layers.mask=D.layers.mask&-5,b.layers.mask=D.layers.mask&-3;const be=$.parent,Le=D.cameras;Z(D,be);for(let Ee=0;Ee<Le.length;Ee++)Z(Le[Ee],be);Le.length===2?Q(D,w,b):D.projectionMatrix.copy(w.projectionMatrix),ne($,D,be)};function ne($,se,re){re===null?$.matrix.copy(se.matrixWorld):($.matrix.copy(re.matrixWorld),$.matrix.invert(),$.matrix.multiply(se.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(se.projectionMatrix),$.projectionMatrixInverse.copy(se.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=Rm*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return D},this.getFoveation=function(){if(!(d===null&&h===null))return l},this.setFoveation=function($){l=$,d!==null&&(d.fixedFoveation=$),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=$)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(D)},this.getCameraTexture=function($){return p[$]};let Oe=null;function Fe($,se){if(c=se.getViewerPose(u||o),m=se,c!==null){const re=c.views;h!==null&&(e.setRenderTargetFramebuffer(S,h.framebuffer),e.setRenderTarget(S));let be=!1;re.length!==D.cameras.length&&(D.cameras.length=0,be=!0);for(let We=0;We<re.length;We++){const st=re[We];let et=null;if(h!==null)et=h.getViewport(st);else{const kt=f.getViewSubImage(d,st);et=kt.viewport,We===0&&(e.setRenderTargetTextures(S,kt.colorTexture,kt.depthStencilTexture),e.setRenderTarget(S))}let Ke=P[We];Ke===void 0&&(Ke=new qn,Ke.layers.enable(We),Ke.viewport=new Mt,P[We]=Ke),Ke.matrix.fromArray(st.transform.matrix),Ke.matrix.decompose(Ke.position,Ke.quaternion,Ke.scale),Ke.projectionMatrix.fromArray(st.projectionMatrix),Ke.projectionMatrixInverse.copy(Ke.projectionMatrix).invert(),Ke.viewport.set(et.x,et.y,et.width,et.height),We===0&&(D.matrix.copy(Ke.matrix),D.matrix.decompose(D.position,D.quaternion,D.scale)),be===!0&&D.cameras.push(Ke)}const Le=r.enabledFeatures;if(Le&&Le.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&g){f=i.getBinding();const We=f.getDepthInformation(re[0]);We&&We.isValid&&We.texture&&_.init(We,r.renderState)}if(Le&&Le.includes("camera-access")&&g){e.state.unbindTexture(),f=i.getBinding();for(let We=0;We<re.length;We++){const st=re[We].camera;if(st){let et=p[st];et||(et=new OE,p[st]=et);const Ke=f.getCameraImage(st);et.sourceTexture=Ke}}}}for(let re=0;re<E.length;re++){const be=T[re],Le=E[re];be!==null&&Le!==void 0&&Le.update(be,se,u||o)}Oe&&Oe($,se),se.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:se}),m=null}const Ne=new VE;Ne.setAnimationLoop(Fe),this.setAnimationLoop=function($){Oe=$},this.dispose=function(){}}}const sF=new It,$E=new Ue;$E.set(-1,0,0,0,1,0,0,0,1);function oF(t,e){function n(_,p){_.matrixAutoUpdate===!0&&_.updateMatrix(),p.value.copy(_.matrix)}function i(_,p){p.color.getRGB(_.fogColor.value,kE(t)),p.isFog?(_.fogNear.value=p.near,_.fogFar.value=p.far):p.isFogExp2&&(_.fogDensity.value=p.density)}function r(_,p,v,x,S){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?s(_,p):p.isMeshLambertMaterial?(s(_,p),p.envMap&&(_.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(s(_,p),f(_,p)):p.isMeshPhongMaterial?(s(_,p),c(_,p),p.envMap&&(_.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(s(_,p),d(_,p),p.isMeshPhysicalMaterial&&h(_,p,S)):p.isMeshMatcapMaterial?(s(_,p),m(_,p)):p.isMeshDepthMaterial?s(_,p):p.isMeshDistanceMaterial?(s(_,p),g(_,p)):p.isMeshNormalMaterial?s(_,p):p.isLineBasicMaterial?(o(_,p),p.isLineDashedMaterial&&a(_,p)):p.isPointsMaterial?l(_,p,v,x):p.isSpriteMaterial?u(_,p):p.isShadowMaterial?(_.color.value.copy(p.color),_.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(_,p){_.opacity.value=p.opacity,p.color&&_.diffuse.value.copy(p.color),p.emissive&&_.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(_.map.value=p.map,n(p.map,_.mapTransform)),p.alphaMap&&(_.alphaMap.value=p.alphaMap,n(p.alphaMap,_.alphaMapTransform)),p.bumpMap&&(_.bumpMap.value=p.bumpMap,n(p.bumpMap,_.bumpMapTransform),_.bumpScale.value=p.bumpScale,p.side===In&&(_.bumpScale.value*=-1)),p.normalMap&&(_.normalMap.value=p.normalMap,n(p.normalMap,_.normalMapTransform),_.normalScale.value.copy(p.normalScale),p.side===In&&_.normalScale.value.negate()),p.displacementMap&&(_.displacementMap.value=p.displacementMap,n(p.displacementMap,_.displacementMapTransform),_.displacementScale.value=p.displacementScale,_.displacementBias.value=p.displacementBias),p.emissiveMap&&(_.emissiveMap.value=p.emissiveMap,n(p.emissiveMap,_.emissiveMapTransform)),p.specularMap&&(_.specularMap.value=p.specularMap,n(p.specularMap,_.specularMapTransform)),p.alphaTest>0&&(_.alphaTest.value=p.alphaTest);const v=e.get(p),x=v.envMap,S=v.envMapRotation;x&&(_.envMap.value=x,_.envMapRotation.value.setFromMatrix4(sF.makeRotationFromEuler(S)).transpose(),x.isCubeTexture&&x.isRenderTargetTexture===!1&&_.envMapRotation.value.premultiply($E),_.reflectivity.value=p.reflectivity,_.ior.value=p.ior,_.refractionRatio.value=p.refractionRatio),p.lightMap&&(_.lightMap.value=p.lightMap,_.lightMapIntensity.value=p.lightMapIntensity,n(p.lightMap,_.lightMapTransform)),p.aoMap&&(_.aoMap.value=p.aoMap,_.aoMapIntensity.value=p.aoMapIntensity,n(p.aoMap,_.aoMapTransform))}function o(_,p){_.diffuse.value.copy(p.color),_.opacity.value=p.opacity,p.map&&(_.map.value=p.map,n(p.map,_.mapTransform))}function a(_,p){_.dashSize.value=p.dashSize,_.totalSize.value=p.dashSize+p.gapSize,_.scale.value=p.scale}function l(_,p,v,x){_.diffuse.value.copy(p.color),_.opacity.value=p.opacity,_.size.value=p.size*v,_.scale.value=x*.5,p.map&&(_.map.value=p.map,n(p.map,_.uvTransform)),p.alphaMap&&(_.alphaMap.value=p.alphaMap,n(p.alphaMap,_.alphaMapTransform)),p.alphaTest>0&&(_.alphaTest.value=p.alphaTest)}function u(_,p){_.diffuse.value.copy(p.color),_.opacity.value=p.opacity,_.rotation.value=p.rotation,p.map&&(_.map.value=p.map,n(p.map,_.mapTransform)),p.alphaMap&&(_.alphaMap.value=p.alphaMap,n(p.alphaMap,_.alphaMapTransform)),p.alphaTest>0&&(_.alphaTest.value=p.alphaTest)}function c(_,p){_.specular.value.copy(p.specular),_.shininess.value=Math.max(p.shininess,1e-4)}function f(_,p){p.gradientMap&&(_.gradientMap.value=p.gradientMap)}function d(_,p){_.metalness.value=p.metalness,p.metalnessMap&&(_.metalnessMap.value=p.metalnessMap,n(p.metalnessMap,_.metalnessMapTransform)),_.roughness.value=p.roughness,p.roughnessMap&&(_.roughnessMap.value=p.roughnessMap,n(p.roughnessMap,_.roughnessMapTransform)),p.envMap&&(_.envMapIntensity.value=p.envMapIntensity)}function h(_,p,v){_.ior.value=p.ior,p.sheen>0&&(_.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),_.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(_.sheenColorMap.value=p.sheenColorMap,n(p.sheenColorMap,_.sheenColorMapTransform)),p.sheenRoughnessMap&&(_.sheenRoughnessMap.value=p.sheenRoughnessMap,n(p.sheenRoughnessMap,_.sheenRoughnessMapTransform))),p.clearcoat>0&&(_.clearcoat.value=p.clearcoat,_.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(_.clearcoatMap.value=p.clearcoatMap,n(p.clearcoatMap,_.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(_.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,n(p.clearcoatRoughnessMap,_.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(_.clearcoatNormalMap.value=p.clearcoatNormalMap,n(p.clearcoatNormalMap,_.clearcoatNormalMapTransform),_.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===In&&_.clearcoatNormalScale.value.negate())),p.dispersion>0&&(_.dispersion.value=p.dispersion),p.iridescence>0&&(_.iridescence.value=p.iridescence,_.iridescenceIOR.value=p.iridescenceIOR,_.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],_.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(_.iridescenceMap.value=p.iridescenceMap,n(p.iridescenceMap,_.iridescenceMapTransform)),p.iridescenceThicknessMap&&(_.iridescenceThicknessMap.value=p.iridescenceThicknessMap,n(p.iridescenceThicknessMap,_.iridescenceThicknessMapTransform))),p.transmission>0&&(_.transmission.value=p.transmission,_.transmissionSamplerMap.value=v.texture,_.transmissionSamplerSize.value.set(v.width,v.height),p.transmissionMap&&(_.transmissionMap.value=p.transmissionMap,n(p.transmissionMap,_.transmissionMapTransform)),_.thickness.value=p.thickness,p.thicknessMap&&(_.thicknessMap.value=p.thicknessMap,n(p.thicknessMap,_.thicknessMapTransform)),_.attenuationDistance.value=p.attenuationDistance,_.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(_.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(_.anisotropyMap.value=p.anisotropyMap,n(p.anisotropyMap,_.anisotropyMapTransform))),_.specularIntensity.value=p.specularIntensity,_.specularColor.value.copy(p.specularColor),p.specularColorMap&&(_.specularColorMap.value=p.specularColorMap,n(p.specularColorMap,_.specularColorMapTransform)),p.specularIntensityMap&&(_.specularIntensityMap.value=p.specularIntensityMap,n(p.specularIntensityMap,_.specularIntensityMapTransform))}function m(_,p){p.matcap&&(_.matcap.value=p.matcap)}function g(_,p){const v=e.get(p).light;_.referencePosition.value.setFromMatrixPosition(v.matrixWorld),_.nearDistance.value=v.shadow.camera.near,_.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function aF(t,e,n,i){let r={},s={},o=[];const a=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(S,E){const T=E.program;i.uniformBlockBinding(S,T)}function u(S,E){let T=r[S.id];T===void 0&&(_(S),T=c(S),r[S.id]=T,S.addEventListener("dispose",v));const A=E.program;i.updateUBOMapping(S,A);const y=e.render.frame;s[S.id]!==y&&(d(S),s[S.id]=y)}function c(S){const E=f();S.__bindingPointIndex=E;const T=t.createBuffer(),A=S.__size,y=S.usage;return t.bindBuffer(t.UNIFORM_BUFFER,T),t.bufferData(t.UNIFORM_BUFFER,A,y),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,E,T),T}function f(){for(let S=0;S<a;S++)if(o.indexOf(S)===-1)return o.push(S),S;return Ze("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(S){const E=r[S.id],T=S.uniforms,A=S.__cache;t.bindBuffer(t.UNIFORM_BUFFER,E);for(let y=0,w=T.length;y<w;y++){const b=T[y];if(Array.isArray(b))for(let P=0,D=b.length;P<D;P++)h(b[P],y,P,A);else h(b,y,0,A)}t.bindBuffer(t.UNIFORM_BUFFER,null)}function h(S,E,T,A){if(g(S,E,T,A)===!0){const y=S.__offset,w=S.value;if(Array.isArray(w)){let b=0;for(let P=0;P<w.length;P++){const D=w[P],z=p(D);m(D,S.__data,b),typeof D!="number"&&typeof D!="boolean"&&!D.isMatrix3&&!ArrayBuffer.isView(D)&&(b+=z.storage/Float32Array.BYTES_PER_ELEMENT)}}else m(w,S.__data,0);t.bufferSubData(t.UNIFORM_BUFFER,y,S.__data)}}function m(S,E,T){typeof S=="number"||typeof S=="boolean"?E[0]=S:S.isMatrix3?(E[0]=S.elements[0],E[1]=S.elements[1],E[2]=S.elements[2],E[3]=0,E[4]=S.elements[3],E[5]=S.elements[4],E[6]=S.elements[5],E[7]=0,E[8]=S.elements[6],E[9]=S.elements[7],E[10]=S.elements[8],E[11]=0):ArrayBuffer.isView(S)?E.set(new S.constructor(S.buffer,S.byteOffset,E.length)):S.toArray(E,T)}function g(S,E,T,A){const y=S.value,w=E+"_"+T;if(A[w]===void 0)return typeof y=="number"||typeof y=="boolean"?A[w]=y:ArrayBuffer.isView(y)?A[w]=y.slice():A[w]=y.clone(),!0;{const b=A[w];if(typeof y=="number"||typeof y=="boolean"){if(b!==y)return A[w]=y,!0}else{if(ArrayBuffer.isView(y))return!0;if(b.equals(y)===!1)return b.copy(y),!0}}return!1}function _(S){const E=S.uniforms;let T=0;const A=16;for(let w=0,b=E.length;w<b;w++){const P=Array.isArray(E[w])?E[w]:[E[w]];for(let D=0,z=P.length;D<z;D++){const X=P[D],U=Array.isArray(X.value)?X.value:[X.value];for(let B=0,F=U.length;B<F;B++){const L=U[B],Y=p(L),Q=T%A,Z=Q%Y.boundary,ne=Q+Z;T+=Z,ne!==0&&A-ne<Y.storage&&(T+=A-ne),X.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),X.__offset=T,T+=Y.storage}}}const y=T%A;return y>0&&(T+=A-y),S.__size=T,S.__cache={},this}function p(S){const E={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(E.boundary=4,E.storage=4):S.isVector2?(E.boundary=8,E.storage=8):S.isVector3||S.isColor?(E.boundary=16,E.storage=12):S.isVector4?(E.boundary=16,E.storage=16):S.isMatrix3?(E.boundary=48,E.storage=48):S.isMatrix4?(E.boundary=64,E.storage=64):S.isTexture?Ie("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(S)?(E.boundary=16,E.storage=S.byteLength):Ie("WebGLRenderer: Unsupported uniform value type.",S),E}function v(S){const E=S.target;E.removeEventListener("dispose",v);const T=o.indexOf(E.__bindingPointIndex);o.splice(T,1),t.deleteBuffer(r[E.id]),delete r[E.id],delete s[E.id]}function x(){for(const S in r)t.deleteBuffer(r[S]);o=[],r={},s={}}return{bind:l,update:u,dispose:x}}const lF=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let ki=null;function uF(){return ki===null&&(ki=new qD(lF,16,16,co,Cr),ki.name="DFG_LUT",ki.minFilter=mn,ki.magFilter=mn,ki.wrapS=mr,ki.wrapT=mr,ki.generateMipmaps=!1,ki.needsUpdate=!0),ki}class cF{constructor(e={}){const{canvas:n=ED(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:d=!1,outputBufferType:h=$n}=e;this.isWebGLRenderer=!0;let m;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=i.getContextAttributes().alpha}else m=o;const g=h,_=new Set([p0,h0,d0]),p=new Set([$n,er,Yl,ql,c0,f0]),v=new Uint32Array(4),x=new Int32Array(4),S=new G;let E=null,T=null;const A=[],y=[];let w=null;this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Zi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const b=this;let P=!1,D=null,z=null,X=null,U=null;this._outputColorSpace=Xn;let B=0,F=0,L=null,Y=-1,Q=null;const Z=new Mt,ne=new Mt;let Oe=null;const Fe=new $e(0);let Ne=0,$=n.width,se=n.height,re=1,be=null,Le=null;const Ee=new Mt(0,0,$,se),At=new Mt(0,0,$,se);let We=!1;const st=new x0;let et=!1,Ke=!1;const kt=new It,Wt=new G,Kt=new Mt,en={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ct=!1;function Bt(){return L===null?re:1}let N=i;function wn(C,O){return n.getContext(C,O)}try{const C={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:c,failIfMajorPerformanceCaveat:f};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${l0}`),n.addEventListener("webglcontextlost",Rt,!1),n.addEventListener("webglcontextrestored",ct,!1),n.addEventListener("webglcontextcreationerror",Ii,!1),N===null){const O="webgl2";if(N=wn(O,C),N===null)throw wn(O)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(C){throw Ze("WebGLRenderer: "+C.message),C}let tt,R,M,k,W,K,ae,ue,j,ee,ce,we,he,fe,Re,Pe,ke,I,le,J,de,_e,te;function Te(){tt=new uN(N),tt.init(),de=new eF(N,tt),R=new tN(N,tt,e,de),M=new QU(N,tt),R.reversedDepthBuffer&&d&&M.buffers.depth.setReversed(!0),z=N.createFramebuffer(),X=N.createFramebuffer(),U=N.createFramebuffer(),k=new dN(N),W=new kU,K=new JU(N,tt,M,W,R,de,k),ae=new lN(b),ue=new g2(N),_e=new JI(N,ue),j=new cN(N,ue,k,_e),ee=new pN(N,j,ue,_e,k),I=new hN(N,R,K),Re=new nN(W),ce=new OU(b,ae,tt,R,_e,Re),we=new oF(b,W),he=new zU,fe=new YU(tt),ke=new QI(b,ae,M,ee,m,l),Pe=new ZU(b,ee,R),te=new aF(N,k,R,M),le=new eN(N,tt,k),J=new fN(N,tt,k),k.programs=ce.programs,b.capabilities=R,b.extensions=tt,b.properties=W,b.renderLists=he,b.shadowMap=Pe,b.state=M,b.info=k}Te(),g!==$n&&(w=new gN(g,n.width,n.height,a,r,s));const Se=new rF(b,N);this.xr=Se,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){const C=tt.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=tt.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return re},this.setPixelRatio=function(C){C!==void 0&&(re=C,this.setSize($,se,!1))},this.getSize=function(C){return C.set($,se)},this.setSize=function(C,O,q=!0){if(Se.isPresenting){Ie("WebGLRenderer: Can't change size while VR device is presenting.");return}$=C,se=O,n.width=Math.floor(C*re),n.height=Math.floor(O*re),q===!0&&(n.style.width=C+"px",n.style.height=O+"px"),w!==null&&w.setSize(n.width,n.height),this.setViewport(0,0,C,O)},this.getDrawingBufferSize=function(C){return C.set($*re,se*re).floor()},this.setDrawingBufferSize=function(C,O,q){$=C,se=O,re=q,n.width=Math.floor(C*q),n.height=Math.floor(O*q),this.setViewport(0,0,C,O)},this.setEffects=function(C){if(g===$n){Ze("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(C){for(let O=0;O<C.length;O++)if(C[O].isOutputPass===!0){Ie("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}w.setEffects(C||[])},this.getCurrentViewport=function(C){return C.copy(Z)},this.getViewport=function(C){return C.copy(Ee)},this.setViewport=function(C,O,q,V){C.isVector4?Ee.set(C.x,C.y,C.z,C.w):Ee.set(C,O,q,V),M.viewport(Z.copy(Ee).multiplyScalar(re).round())},this.getScissor=function(C){return C.copy(At)},this.setScissor=function(C,O,q,V){C.isVector4?At.set(C.x,C.y,C.z,C.w):At.set(C,O,q,V),M.scissor(ne.copy(At).multiplyScalar(re).round())},this.getScissorTest=function(){return We},this.setScissorTest=function(C){M.setScissorTest(We=C)},this.setOpaqueSort=function(C){be=C},this.setTransparentSort=function(C){Le=C},this.getClearColor=function(C){return C.copy(ke.getClearColor())},this.setClearColor=function(){ke.setClearColor(...arguments)},this.getClearAlpha=function(){return ke.getClearAlpha()},this.setClearAlpha=function(){ke.setClearAlpha(...arguments)},this.clear=function(C=!0,O=!0,q=!0){let V=0;if(C){let H=!1;if(L!==null){const ge=L.texture.format;H=_.has(ge)}if(H){const ge=L.texture.type,xe=p.has(ge),me=ke.getClearColor(),Me=ke.getClearAlpha(),Ae=me.r,Be=me.g,Ve=me.b;xe?(v[0]=Ae,v[1]=Be,v[2]=Ve,v[3]=Me,N.clearBufferuiv(N.COLOR,0,v)):(x[0]=Ae,x[1]=Be,x[2]=Ve,x[3]=Me,N.clearBufferiv(N.COLOR,0,x))}else V|=N.COLOR_BUFFER_BIT}O&&(V|=N.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),q&&(V|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),V!==0&&N.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(C){C.setRenderer(this),D=C},this.dispose=function(){n.removeEventListener("webglcontextlost",Rt,!1),n.removeEventListener("webglcontextrestored",ct,!1),n.removeEventListener("webglcontextcreationerror",Ii,!1),ke.dispose(),he.dispose(),fe.dispose(),W.dispose(),ae.dispose(),ee.dispose(),_e.dispose(),te.dispose(),ce.dispose(),Se.dispose(),Se.removeEventListener("sessionstart",X0),Se.removeEventListener("sessionend",Y0),Rs.stop()};function Rt(C){C.preventDefault(),Sx("WebGLRenderer: Context Lost."),P=!0}function ct(){Sx("WebGLRenderer: Context Restored."),P=!1;const C=k.autoReset,O=Pe.enabled,q=Pe.autoUpdate,V=Pe.needsUpdate,H=Pe.type;Te(),k.autoReset=C,Pe.enabled=O,Pe.autoUpdate=q,Pe.needsUpdate=V,Pe.type=H}function Ii(C){Ze("WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function Ni(C){const O=C.target;O.removeEventListener("dispose",Ni),qT(O)}function qT(C){$T(C),W.remove(C)}function $T(C){const O=W.get(C).programs;O!==void 0&&(O.forEach(function(q){ce.releaseProgram(q)}),C.isShaderMaterial&&ce.releaseShaderCache(C))}this.renderBufferDirect=function(C,O,q,V,H,ge){O===null&&(O=en);const xe=H.isMesh&&H.matrixWorld.determinantAffine()<0,me=ZT(C,O,q,V,H);M.setMaterial(V,xe);let Me=q.index,Ae=1;if(V.wireframe===!0){if(Me=j.getWireframeAttribute(q),Me===void 0)return;Ae=2}const Be=q.drawRange,Ve=q.attributes.position;let Ce=Be.start*Ae,rt=(Be.start+Be.count)*Ae;ge!==null&&(Ce=Math.max(Ce,ge.start*Ae),rt=Math.min(rt,(ge.start+ge.count)*Ae)),Me!==null?(Ce=Math.max(Ce,0),rt=Math.min(rt,Me.count)):Ve!=null&&(Ce=Math.max(Ce,0),rt=Math.min(rt,Ve.count));const Nt=rt-Ce;if(Nt<0||Nt===1/0)return;_e.setup(H,V,me,q,Me);let bt,ot=le;if(Me!==null&&(bt=ue.get(Me),ot=J,ot.setIndex(bt)),H.isMesh)V.wireframe===!0?(M.setLineWidth(V.wireframeLinewidth*Bt()),ot.setMode(N.LINES)):ot.setMode(N.TRIANGLES);else if(H.isLine){let an=V.linewidth;an===void 0&&(an=1),M.setLineWidth(an*Bt()),H.isLineSegments?ot.setMode(N.LINES):H.isLineLoop?ot.setMode(N.LINE_LOOP):ot.setMode(N.LINE_STRIP)}else H.isPoints?ot.setMode(N.POINTS):H.isSprite&&ot.setMode(N.TRIANGLES);if(H.isBatchedMesh)if(tt.get("WEBGL_multi_draw"))ot.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else{const an=H._multiDrawStarts,ve=H._multiDrawCounts,Vn=H._multiDrawCount,je=Me?ue.get(Me).bytesPerElement:1,ai=W.get(V).currentProgram.getUniforms();for(let Ui=0;Ui<Vn;Ui++)ai.setValue(N,"_gl_DrawID",Ui),ot.render(an[Ui]/je,ve[Ui])}else if(H.isInstancedMesh)ot.renderInstances(Ce,Nt,H.count);else if(q.isInstancedBufferGeometry){const an=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,ve=Math.min(q.instanceCount,an);ot.renderInstances(Ce,Nt,ve)}else ot.render(Ce,Nt)};function W0(C,O,q){C.transparent===!0&&C.side===Gi&&C.forceSinglePass===!1?(C.side=In,C.needsUpdate=!0,xu(C,O,q),C.side=xs,C.needsUpdate=!0,xu(C,O,q),C.side=Gi):xu(C,O,q)}this.compile=function(C,O,q=null){q===null&&(q=C),T=fe.get(q),T.init(O),y.push(T),q.traverseVisible(function(H){H.isLight&&H.layers.test(O.layers)&&(T.pushLight(H),H.castShadow&&T.pushShadow(H))}),C!==q&&C.traverseVisible(function(H){H.isLight&&H.layers.test(O.layers)&&(T.pushLight(H),H.castShadow&&T.pushShadow(H))}),T.setupLights();const V=new Set;return C.traverse(function(H){if(!(H.isMesh||H.isPoints||H.isLine||H.isSprite))return;const ge=H.material;if(ge)if(Array.isArray(ge))for(let xe=0;xe<ge.length;xe++){const me=ge[xe];W0(me,q,H),V.add(me)}else W0(ge,q,H),V.add(ge)}),T=y.pop(),V},this.compileAsync=function(C,O,q=null){const V=this.compile(C,O,q);return new Promise(H=>{function ge(){if(V.forEach(function(xe){W.get(xe).currentProgram.isReady()&&V.delete(xe)}),V.size===0){H(C);return}setTimeout(ge,10)}tt.get("KHR_parallel_shader_compile")!==null?ge():setTimeout(ge,10)})};let sd=null;function KT(C){sd&&sd(C)}function X0(){Rs.stop()}function Y0(){Rs.start()}const Rs=new VE;Rs.setAnimationLoop(KT),typeof self<"u"&&Rs.setContext(self),this.setAnimationLoop=function(C){sd=C,Se.setAnimationLoop(C),C===null?Rs.stop():Rs.start()},Se.addEventListener("sessionstart",X0),Se.addEventListener("sessionend",Y0),this.render=function(C,O){if(O!==void 0&&O.isCamera!==!0){Ze("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;D!==null&&D.renderStart(C,O);const q=Se.enabled===!0&&Se.isPresenting===!0,V=w!==null&&(L===null||q)&&w.begin(b,L);if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),Se.enabled===!0&&Se.isPresenting===!0&&(w===null||w.isCompositing()===!1)&&(Se.cameraAutoUpdate===!0&&Se.updateCamera(O),O=Se.getCamera()),C.isScene===!0&&C.onBeforeRender(b,C,O,L),T=fe.get(C,y.length),T.init(O),T.state.textureUnits=K.getTextureUnits(),y.push(T),kt.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),st.setFromProjectionMatrix(kt,Yi,O.reversedDepth),Ke=this.localClippingEnabled,et=Re.init(this.clippingPlanes,Ke),E=he.get(C,A.length),E.init(),A.push(E),Se.enabled===!0&&Se.isPresenting===!0){const xe=b.xr.getDepthSensingMesh();xe!==null&&od(xe,O,-1/0,b.sortObjects)}od(C,O,0,b.sortObjects),E.finish(),b.sortObjects===!0&&E.sort(be,Le,O.reversedDepth),Ct=Se.enabled===!1||Se.isPresenting===!1||Se.hasDepthSensing()===!1,Ct&&ke.addToRenderList(E,C),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),et===!0&&Re.beginShadows();const H=T.state.shadowsArray;if(Pe.render(H,C,O),et===!0&&Re.endShadows(),(V&&w.hasRenderPass())===!1){const xe=E.opaque,me=E.transmissive;if(T.setupLights(),O.isArrayCamera){const Me=O.cameras;if(me.length>0)for(let Ae=0,Be=Me.length;Ae<Be;Ae++){const Ve=Me[Ae];$0(xe,me,C,Ve)}Ct&&ke.render(C);for(let Ae=0,Be=Me.length;Ae<Be;Ae++){const Ve=Me[Ae];q0(E,C,Ve,Ve.viewport)}}else me.length>0&&$0(xe,me,C,O),Ct&&ke.render(C),q0(E,C,O)}L!==null&&F===0&&(K.updateMultisampleRenderTarget(L),K.updateRenderTargetMipmap(L)),V&&w.end(b),C.isScene===!0&&C.onAfterRender(b,C,O),_e.resetDefaultState(),Y=-1,Q=null,y.pop(),y.length>0?(T=y[y.length-1],K.setTextureUnits(T.state.textureUnits),et===!0&&Re.setGlobalState(b.clippingPlanes,T.state.camera)):T=null,A.pop(),A.length>0?E=A[A.length-1]:E=null,D!==null&&D.renderEnd()};function od(C,O,q,V){if(C.visible===!1)return;if(C.layers.test(O.layers)){if(C.isGroup)q=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(O);else if(C.isLightProbeGrid)T.pushLightProbeGrid(C);else if(C.isLight)T.pushLight(C),C.castShadow&&T.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||st.intersectsSprite(C)){V&&Kt.setFromMatrixPosition(C.matrixWorld).applyMatrix4(kt);const xe=ee.update(C),me=C.material;me.visible&&E.push(C,xe,me,q,Kt.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||st.intersectsObject(C))){const xe=ee.update(C),me=C.material;if(V&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),Kt.copy(C.boundingSphere.center)):(xe.boundingSphere===null&&xe.computeBoundingSphere(),Kt.copy(xe.boundingSphere.center)),Kt.applyMatrix4(C.matrixWorld).applyMatrix4(kt)),Array.isArray(me)){const Me=xe.groups;for(let Ae=0,Be=Me.length;Ae<Be;Ae++){const Ve=Me[Ae],Ce=me[Ve.materialIndex];Ce&&Ce.visible&&E.push(C,xe,Ce,q,Kt.z,Ve)}}else me.visible&&E.push(C,xe,me,q,Kt.z,null)}}const ge=C.children;for(let xe=0,me=ge.length;xe<me;xe++)od(ge[xe],O,q,V)}function q0(C,O,q,V){const{opaque:H,transmissive:ge,transparent:xe}=C;T.setupLightsView(q),et===!0&&Re.setGlobalState(b.clippingPlanes,q),V&&M.viewport(Z.copy(V)),H.length>0&&vu(H,O,q),ge.length>0&&vu(ge,O,q),xe.length>0&&vu(xe,O,q),M.buffers.depth.setTest(!0),M.buffers.depth.setMask(!0),M.buffers.color.setMask(!0),M.setPolygonOffset(!1)}function $0(C,O,q,V){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[V.id]===void 0){const Ce=tt.has("EXT_color_buffer_half_float")||tt.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[V.id]=new Qi(1,1,{generateMipmaps:!0,type:Ce?Cr:$n,minFilter:Ks,samples:Math.max(4,R.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Xe.workingColorSpace})}const ge=T.state.transmissionRenderTarget[V.id],xe=V.viewport||Z;ge.setSize(xe.z*b.transmissionResolutionScale,xe.w*b.transmissionResolutionScale);const me=b.getRenderTarget(),Me=b.getActiveCubeFace(),Ae=b.getActiveMipmapLevel();b.setRenderTarget(ge),b.getClearColor(Fe),Ne=b.getClearAlpha(),Ne<1&&b.setClearColor(16777215,.5),b.clear(),Ct&&ke.render(q);const Be=b.toneMapping;b.toneMapping=Zi;const Ve=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),T.setupLightsView(V),et===!0&&Re.setGlobalState(b.clippingPlanes,V),vu(C,q,V),K.updateMultisampleRenderTarget(ge),K.updateRenderTargetMipmap(ge),tt.has("WEBGL_multisampled_render_to_texture")===!1){let Ce=!1;for(let rt=0,Nt=O.length;rt<Nt;rt++){const bt=O[rt],{object:ot,geometry:an,material:ve,group:Vn}=bt;if(ve.side===Gi&&ot.layers.test(V.layers)){const je=ve.side;ve.side=In,ve.needsUpdate=!0,K0(ot,q,V,an,ve,Vn),ve.side=je,ve.needsUpdate=!0,Ce=!0}}Ce===!0&&(K.updateMultisampleRenderTarget(ge),K.updateRenderTargetMipmap(ge))}b.setRenderTarget(me,Me,Ae),b.setClearColor(Fe,Ne),Ve!==void 0&&(V.viewport=Ve),b.toneMapping=Be}function vu(C,O,q){const V=O.isScene===!0?O.overrideMaterial:null;for(let H=0,ge=C.length;H<ge;H++){const xe=C[H],{object:me,geometry:Me,group:Ae}=xe;let Be=xe.material;Be.allowOverride===!0&&V!==null&&(Be=V),me.layers.test(q.layers)&&K0(me,O,q,Me,Be,Ae)}}function K0(C,O,q,V,H,ge){C.onBeforeRender(b,O,q,V,H,ge),C.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),H.onBeforeRender(b,O,q,V,C,ge),H.transparent===!0&&H.side===Gi&&H.forceSinglePass===!1?(H.side=In,H.needsUpdate=!0,b.renderBufferDirect(q,O,V,H,C,ge),H.side=xs,H.needsUpdate=!0,b.renderBufferDirect(q,O,V,H,C,ge),H.side=Gi):b.renderBufferDirect(q,O,V,H,C,ge),C.onAfterRender(b,O,q,V,H,ge)}function xu(C,O,q){O.isScene!==!0&&(O=en);const V=W.get(C),H=T.state.lights,ge=T.state.shadowsArray,xe=H.state.version,me=ce.getParameters(C,H.state,ge,O,q,T.state.lightProbeGridArray),Me=ce.getProgramCacheKey(me);let Ae=V.programs;V.environment=C.isMeshStandardMaterial||C.isMeshLambertMaterial||C.isMeshPhongMaterial?O.environment:null,V.fog=O.fog;const Be=C.isMeshStandardMaterial||C.isMeshLambertMaterial&&!C.envMap||C.isMeshPhongMaterial&&!C.envMap;V.envMap=ae.get(C.envMap||V.environment,Be),V.envMapRotation=V.environment!==null&&C.envMap===null?O.environmentRotation:C.envMapRotation,Ae===void 0&&(C.addEventListener("dispose",Ni),Ae=new Map,V.programs=Ae);let Ve=Ae.get(Me);if(Ve!==void 0){if(V.currentProgram===Ve&&V.lightsStateVersion===xe)return Z0(C,me),Ve}else me.uniforms=ce.getUniforms(C),D!==null&&C.isNodeMaterial&&D.build(C,q,me),C.onBeforeCompile(me,b),Ve=ce.acquireProgram(me,Me),Ae.set(Me,Ve),V.uniforms=me.uniforms;const Ce=V.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(Ce.clippingPlanes=Re.uniform),Z0(C,me),V.needsLights=JT(C),V.lightsStateVersion=xe,V.needsLights&&(Ce.ambientLightColor.value=H.state.ambient,Ce.lightProbe.value=H.state.probe,Ce.directionalLights.value=H.state.directional,Ce.directionalLightShadows.value=H.state.directionalShadow,Ce.spotLights.value=H.state.spot,Ce.spotLightShadows.value=H.state.spotShadow,Ce.rectAreaLights.value=H.state.rectArea,Ce.ltc_1.value=H.state.rectAreaLTC1,Ce.ltc_2.value=H.state.rectAreaLTC2,Ce.pointLights.value=H.state.point,Ce.pointLightShadows.value=H.state.pointShadow,Ce.hemisphereLights.value=H.state.hemi,Ce.directionalShadowMatrix.value=H.state.directionalShadowMatrix,Ce.spotLightMatrix.value=H.state.spotLightMatrix,Ce.spotLightMap.value=H.state.spotLightMap,Ce.pointShadowMatrix.value=H.state.pointShadowMatrix),V.lightProbeGrid=T.state.lightProbeGridArray.length>0,V.currentProgram=Ve,V.uniformsList=null,Ve}function j0(C){if(C.uniformsList===null){const O=C.currentProgram.getUniforms();C.uniformsList=Dc.seqWithValue(O.seq,C.uniforms)}return C.uniformsList}function Z0(C,O){const q=W.get(C);q.outputColorSpace=O.outputColorSpace,q.batching=O.batching,q.batchingColor=O.batchingColor,q.instancing=O.instancing,q.instancingColor=O.instancingColor,q.instancingMorph=O.instancingMorph,q.skinning=O.skinning,q.morphTargets=O.morphTargets,q.morphNormals=O.morphNormals,q.morphColors=O.morphColors,q.morphTargetsCount=O.morphTargetsCount,q.numClippingPlanes=O.numClippingPlanes,q.numIntersection=O.numClipIntersection,q.vertexAlphas=O.vertexAlphas,q.vertexTangents=O.vertexTangents,q.toneMapping=O.toneMapping}function jT(C,O){if(C.length===0)return null;if(C.length===1)return C[0].texture!==null?C[0]:null;S.setFromMatrixPosition(O.matrixWorld);for(let q=0,V=C.length;q<V;q++){const H=C[q];if(H.texture!==null&&H.boundingBox.containsPoint(S))return H}return null}function ZT(C,O,q,V,H){O.isScene!==!0&&(O=en),K.resetTextureUnits();const ge=O.fog,xe=V.isMeshStandardMaterial||V.isMeshLambertMaterial||V.isMeshPhongMaterial?O.environment:null,me=L===null?b.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:Xe.workingColorSpace,Me=V.isMeshStandardMaterial||V.isMeshLambertMaterial&&!V.envMap||V.isMeshPhongMaterial&&!V.envMap,Ae=ae.get(V.envMap||xe,Me),Be=V.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,Ve=!!q.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),Ce=!!q.morphAttributes.position,rt=!!q.morphAttributes.normal,Nt=!!q.morphAttributes.color;let bt=Zi;V.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(bt=b.toneMapping);const ot=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,an=ot!==void 0?ot.length:0,ve=W.get(V),Vn=T.state.lights;if(et===!0&&(Ke===!0||C!==Q)){const ft=C===Q&&V.id===Y;Re.setState(V,C,ft)}let je=!1;V.version===ve.__version?(ve.needsLights&&ve.lightsStateVersion!==Vn.state.version||ve.outputColorSpace!==me||H.isBatchedMesh&&ve.batching===!1||!H.isBatchedMesh&&ve.batching===!0||H.isBatchedMesh&&ve.batchingColor===!0&&H.colorTexture===null||H.isBatchedMesh&&ve.batchingColor===!1&&H.colorTexture!==null||H.isInstancedMesh&&ve.instancing===!1||!H.isInstancedMesh&&ve.instancing===!0||H.isSkinnedMesh&&ve.skinning===!1||!H.isSkinnedMesh&&ve.skinning===!0||H.isInstancedMesh&&ve.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&ve.instancingColor===!1&&H.instanceColor!==null||H.isInstancedMesh&&ve.instancingMorph===!0&&H.morphTexture===null||H.isInstancedMesh&&ve.instancingMorph===!1&&H.morphTexture!==null||ve.envMap!==Ae||V.fog===!0&&ve.fog!==ge||ve.numClippingPlanes!==void 0&&(ve.numClippingPlanes!==Re.numPlanes||ve.numIntersection!==Re.numIntersection)||ve.vertexAlphas!==Be||ve.vertexTangents!==Ve||ve.morphTargets!==Ce||ve.morphNormals!==rt||ve.morphColors!==Nt||ve.toneMapping!==bt||ve.morphTargetsCount!==an||!!ve.lightProbeGrid!=T.state.lightProbeGridArray.length>0)&&(je=!0):(je=!0,ve.__version=V.version);let ai=ve.currentProgram;je===!0&&(ai=xu(V,O,H),D&&V.isNodeMaterial&&D.onUpdateProgram(V,ai,ve));let Ui=!1,Ir=!1,xo=!1;const at=ai.getUniforms(),Ut=ve.uniforms;if(M.useProgram(ai.program)&&(Ui=!0,Ir=!0,xo=!0),V.id!==Y&&(Y=V.id,Ir=!0),ve.needsLights){const ft=jT(T.state.lightProbeGridArray,H);ve.lightProbeGrid!==ft&&(ve.lightProbeGrid=ft,Ir=!0)}if(Ui||Q!==C){M.buffers.depth.getReversed()&&C.reversedDepth!==!0&&(C._reversedDepth=!0,C.updateProjectionMatrix()),at.setValue(N,"projectionMatrix",C.projectionMatrix),at.setValue(N,"viewMatrix",C.matrixWorldInverse);const Ur=at.map.cameraPosition;Ur!==void 0&&Ur.setValue(N,Wt.setFromMatrixPosition(C.matrixWorld)),R.logarithmicDepthBuffer&&at.setValue(N,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&at.setValue(N,"isOrthographic",C.isOrthographicCamera===!0),Q!==C&&(Q=C,Ir=!0,xo=!0)}if(ve.needsLights&&(Vn.state.directionalShadowMap.length>0&&at.setValue(N,"directionalShadowMap",Vn.state.directionalShadowMap,K),Vn.state.spotShadowMap.length>0&&at.setValue(N,"spotShadowMap",Vn.state.spotShadowMap,K),Vn.state.pointShadowMap.length>0&&at.setValue(N,"pointShadowMap",Vn.state.pointShadowMap,K)),H.isSkinnedMesh){at.setOptional(N,H,"bindMatrix"),at.setOptional(N,H,"bindMatrixInverse");const ft=H.skeleton;ft&&(ft.boneTexture===null&&ft.computeBoneTexture(),at.setValue(N,"boneTexture",ft.boneTexture,K))}H.isBatchedMesh&&(at.setOptional(N,H,"batchingTexture"),at.setValue(N,"batchingTexture",H._matricesTexture,K),at.setOptional(N,H,"batchingIdTexture"),at.setValue(N,"batchingIdTexture",H._indirectTexture,K),at.setOptional(N,H,"batchingColorTexture"),H._colorsTexture!==null&&at.setValue(N,"batchingColorTexture",H._colorsTexture,K));const Nr=q.morphAttributes;if((Nr.position!==void 0||Nr.normal!==void 0||Nr.color!==void 0)&&I.update(H,q,ai),(Ir||ve.receiveShadow!==H.receiveShadow)&&(ve.receiveShadow=H.receiveShadow,at.setValue(N,"receiveShadow",H.receiveShadow)),(V.isMeshStandardMaterial||V.isMeshLambertMaterial||V.isMeshPhongMaterial)&&V.envMap===null&&O.environment!==null&&(Ut.envMapIntensity.value=O.environmentIntensity),Ut.dfgLUT!==void 0&&(Ut.dfgLUT.value=uF()),Ir){if(at.setValue(N,"toneMappingExposure",b.toneMappingExposure),ve.needsLights&&QT(Ut,xo),ge&&V.fog===!0&&we.refreshFogUniforms(Ut,ge),we.refreshMaterialUniforms(Ut,V,re,se,T.state.transmissionRenderTarget[C.id]),ve.needsLights&&ve.lightProbeGrid){const ft=ve.lightProbeGrid;Ut.probesSH.value=ft.texture,Ut.probesMin.value.copy(ft.boundingBox.min),Ut.probesMax.value.copy(ft.boundingBox.max),Ut.probesResolution.value.copy(ft.resolution)}Dc.upload(N,j0(ve),Ut,K)}if(V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(Dc.upload(N,j0(ve),Ut,K),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&at.setValue(N,"center",H.center),at.setValue(N,"modelViewMatrix",H.modelViewMatrix),at.setValue(N,"normalMatrix",H.normalMatrix),at.setValue(N,"modelMatrix",H.matrixWorld),V.uniformsGroups!==void 0){const ft=V.uniformsGroups;for(let Ur=0,yo=ft.length;Ur<yo;Ur++){const Q0=ft[Ur];te.update(Q0,ai),te.bind(Q0,ai)}}return ai}function QT(C,O){C.ambientLightColor.needsUpdate=O,C.lightProbe.needsUpdate=O,C.directionalLights.needsUpdate=O,C.directionalLightShadows.needsUpdate=O,C.pointLights.needsUpdate=O,C.pointLightShadows.needsUpdate=O,C.spotLights.needsUpdate=O,C.spotLightShadows.needsUpdate=O,C.rectAreaLights.needsUpdate=O,C.hemisphereLights.needsUpdate=O}function JT(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return B},this.getActiveMipmapLevel=function(){return F},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(C,O,q){const V=W.get(C);V.__autoAllocateDepthBuffer=C.resolveDepthBuffer===!1,V.__autoAllocateDepthBuffer===!1&&(V.__useRenderToTexture=!1),W.get(C.texture).__webglTexture=O,W.get(C.depthTexture).__webglTexture=V.__autoAllocateDepthBuffer?void 0:q,V.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(C,O){const q=W.get(C);q.__webglFramebuffer=O,q.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(C,O=0,q=0){L=C,B=O,F=q;let V=null,H=!1,ge=!1;if(C){const me=W.get(C);if(me.__useDefaultFramebuffer!==void 0){M.bindFramebuffer(N.FRAMEBUFFER,me.__webglFramebuffer),Z.copy(C.viewport),ne.copy(C.scissor),Oe=C.scissorTest,M.viewport(Z),M.scissor(ne),M.setScissorTest(Oe),Y=-1;return}else if(me.__webglFramebuffer===void 0)K.setupRenderTarget(C);else if(me.__hasExternalTextures)K.rebindTextures(C,W.get(C.texture).__webglTexture,W.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){const Be=C.depthTexture;if(me.__boundDepthTexture!==Be){if(Be!==null&&W.has(Be)&&(C.width!==Be.image.width||C.height!==Be.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");K.setupDepthRenderbuffer(C)}}const Me=C.texture;(Me.isData3DTexture||Me.isDataArrayTexture||Me.isCompressedArrayTexture)&&(ge=!0);const Ae=W.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(Ae[O])?V=Ae[O][q]:V=Ae[O],H=!0):C.samples>0&&K.useMultisampledRTT(C)===!1?V=W.get(C).__webglMultisampledFramebuffer:Array.isArray(Ae)?V=Ae[q]:V=Ae,Z.copy(C.viewport),ne.copy(C.scissor),Oe=C.scissorTest}else Z.copy(Ee).multiplyScalar(re).floor(),ne.copy(At).multiplyScalar(re).floor(),Oe=We;if(q!==0&&(V=z),M.bindFramebuffer(N.FRAMEBUFFER,V)&&M.drawBuffers(C,V),M.viewport(Z),M.scissor(ne),M.setScissorTest(Oe),H){const me=W.get(C.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+O,me.__webglTexture,q)}else if(ge){const me=O;for(let Me=0;Me<C.textures.length;Me++){const Ae=W.get(C.textures[Me]);N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0+Me,Ae.__webglTexture,q,me)}}else if(C!==null&&q!==0){const me=W.get(C.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,me.__webglTexture,q)}Y=-1},this.readRenderTargetPixels=function(C,O,q,V,H,ge,xe,me=0){if(!(C&&C.isWebGLRenderTarget)){Ze("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Me=W.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&xe!==void 0&&(Me=Me[xe]),Me){M.bindFramebuffer(N.FRAMEBUFFER,Me);try{const Ae=C.textures[me],Be=Ae.format,Ve=Ae.type;if(C.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+me),!R.textureFormatReadable(Be)){Ze("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!R.textureTypeReadable(Ve)){Ze("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=C.width-V&&q>=0&&q<=C.height-H&&N.readPixels(O,q,V,H,de.convert(Be),de.convert(Ve),ge)}finally{const Ae=L!==null?W.get(L).__webglFramebuffer:null;M.bindFramebuffer(N.FRAMEBUFFER,Ae)}}},this.readRenderTargetPixelsAsync=async function(C,O,q,V,H,ge,xe,me=0){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Me=W.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&xe!==void 0&&(Me=Me[xe]),Me)if(O>=0&&O<=C.width-V&&q>=0&&q<=C.height-H){M.bindFramebuffer(N.FRAMEBUFFER,Me);const Ae=C.textures[me],Be=Ae.format,Ve=Ae.type;if(C.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+me),!R.textureFormatReadable(Be))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!R.textureTypeReadable(Ve))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ce=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,Ce),N.bufferData(N.PIXEL_PACK_BUFFER,ge.byteLength,N.STREAM_READ),N.readPixels(O,q,V,H,de.convert(Be),de.convert(Ve),0);const rt=L!==null?W.get(L).__webglFramebuffer:null;M.bindFramebuffer(N.FRAMEBUFFER,rt);const Nt=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await TD(N,Nt,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,Ce),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,ge),N.deleteBuffer(Ce),N.deleteSync(Nt),ge}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(C,O=null,q=0){const V=Math.pow(2,-q),H=Math.floor(C.image.width*V),ge=Math.floor(C.image.height*V),xe=O!==null?O.x:0,me=O!==null?O.y:0;K.setTexture2D(C,0),N.copyTexSubImage2D(N.TEXTURE_2D,q,0,0,xe,me,H,ge),M.unbindTexture()},this.copyTextureToTexture=function(C,O,q=null,V=null,H=0,ge=0){let xe,me,Me,Ae,Be,Ve,Ce,rt,Nt;const bt=C.isCompressedTexture?C.mipmaps[ge]:C.image;if(q!==null)xe=q.max.x-q.min.x,me=q.max.y-q.min.y,Me=q.isBox3?q.max.z-q.min.z:1,Ae=q.min.x,Be=q.min.y,Ve=q.isBox3?q.min.z:0;else{const Ut=Math.pow(2,-H);xe=Math.floor(bt.width*Ut),me=Math.floor(bt.height*Ut),C.isDataArrayTexture?Me=bt.depth:C.isData3DTexture?Me=Math.floor(bt.depth*Ut):Me=1,Ae=0,Be=0,Ve=0}V!==null?(Ce=V.x,rt=V.y,Nt=V.z):(Ce=0,rt=0,Nt=0);const ot=de.convert(O.format),an=de.convert(O.type);let ve;O.isData3DTexture?(K.setTexture3D(O,0),ve=N.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?(K.setTexture2DArray(O,0),ve=N.TEXTURE_2D_ARRAY):(K.setTexture2D(O,0),ve=N.TEXTURE_2D),M.activeTexture(N.TEXTURE0),M.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,O.flipY),M.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),M.pixelStorei(N.UNPACK_ALIGNMENT,O.unpackAlignment);const Vn=M.getParameter(N.UNPACK_ROW_LENGTH),je=M.getParameter(N.UNPACK_IMAGE_HEIGHT),ai=M.getParameter(N.UNPACK_SKIP_PIXELS),Ui=M.getParameter(N.UNPACK_SKIP_ROWS),Ir=M.getParameter(N.UNPACK_SKIP_IMAGES);M.pixelStorei(N.UNPACK_ROW_LENGTH,bt.width),M.pixelStorei(N.UNPACK_IMAGE_HEIGHT,bt.height),M.pixelStorei(N.UNPACK_SKIP_PIXELS,Ae),M.pixelStorei(N.UNPACK_SKIP_ROWS,Be),M.pixelStorei(N.UNPACK_SKIP_IMAGES,Ve);const xo=C.isDataArrayTexture||C.isData3DTexture,at=O.isDataArrayTexture||O.isData3DTexture;if(C.isDepthTexture){const Ut=W.get(C),Nr=W.get(O),ft=W.get(Ut.__renderTarget),Ur=W.get(Nr.__renderTarget);M.bindFramebuffer(N.READ_FRAMEBUFFER,ft.__webglFramebuffer),M.bindFramebuffer(N.DRAW_FRAMEBUFFER,Ur.__webglFramebuffer);for(let yo=0;yo<Me;yo++)xo&&(N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,W.get(C).__webglTexture,H,Ve+yo),N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,W.get(O).__webglTexture,ge,Nt+yo)),N.blitFramebuffer(Ae,Be,xe,me,Ce,rt,xe,me,N.DEPTH_BUFFER_BIT,N.NEAREST);M.bindFramebuffer(N.READ_FRAMEBUFFER,null),M.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else if(H!==0||C.isRenderTargetTexture||W.has(C)){const Ut=W.get(C),Nr=W.get(O);M.bindFramebuffer(N.READ_FRAMEBUFFER,X),M.bindFramebuffer(N.DRAW_FRAMEBUFFER,U);for(let ft=0;ft<Me;ft++)xo?N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Ut.__webglTexture,H,Ve+ft):N.framebufferTexture2D(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,Ut.__webglTexture,H),at?N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Nr.__webglTexture,ge,Nt+ft):N.framebufferTexture2D(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,Nr.__webglTexture,ge),H!==0?N.blitFramebuffer(Ae,Be,xe,me,Ce,rt,xe,me,N.COLOR_BUFFER_BIT,N.NEAREST):at?N.copyTexSubImage3D(ve,ge,Ce,rt,Nt+ft,Ae,Be,xe,me):N.copyTexSubImage2D(ve,ge,Ce,rt,Ae,Be,xe,me);M.bindFramebuffer(N.READ_FRAMEBUFFER,null),M.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else at?C.isDataTexture||C.isData3DTexture?N.texSubImage3D(ve,ge,Ce,rt,Nt,xe,me,Me,ot,an,bt.data):O.isCompressedArrayTexture?N.compressedTexSubImage3D(ve,ge,Ce,rt,Nt,xe,me,Me,ot,bt.data):N.texSubImage3D(ve,ge,Ce,rt,Nt,xe,me,Me,ot,an,bt):C.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,ge,Ce,rt,xe,me,ot,an,bt.data):C.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,ge,Ce,rt,bt.width,bt.height,ot,bt.data):N.texSubImage2D(N.TEXTURE_2D,ge,Ce,rt,xe,me,ot,an,bt);M.pixelStorei(N.UNPACK_ROW_LENGTH,Vn),M.pixelStorei(N.UNPACK_IMAGE_HEIGHT,je),M.pixelStorei(N.UNPACK_SKIP_PIXELS,ai),M.pixelStorei(N.UNPACK_SKIP_ROWS,Ui),M.pixelStorei(N.UNPACK_SKIP_IMAGES,Ir),ge===0&&O.generateMipmaps&&N.generateMipmap(ve),M.unbindTexture()},this.initRenderTarget=function(C){W.get(C).__webglFramebuffer===void 0&&K.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?K.setTextureCube(C,0):C.isData3DTexture?K.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?K.setTexture2DArray(C,0):K.setTexture2D(C,0),M.unbindTexture()},this.resetState=function(){B=0,F=0,L=null,M.reset(),_e.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Yi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=Xe._getDrawingBufferColorSpace(e),n.unpackColorSpace=Xe._getUnpackColorSpace()}}const fF="/assets/hero_bg-a10359c3.jpg";function dF(){const t=oe.useRef(null),e=oe.useRef(null);return oe.useEffect(()=>{const n=t.current;if(!n)return;const i=new zD;i.background=new $e(657930);const r=new qn(75,n.clientWidth/n.clientHeight,.1,100);r.position.set(0,1.5,3),r.rotation.x=-.3;const s=new cF({antialias:!0,alpha:!0});s.setSize(n.clientWidth,n.clientHeight),s.setPixelRatio(Math.min(window.devicePixelRatio,2)),n.appendChild(s.domElement),new l2().load(fF,g=>{g.colorSpace=Xn,i.background=g},void 0,()=>{i.background=new $e(657930)});const a=new gu(12,8,128,128),l=new Li({side:Gi,wireframe:!1,uniforms:{time:{value:0},pointLightPosition:{value:new G(0,0,5)},color:{value:new $e("#c9a876")}},vertexShader:`
        uniform float time;
        varying vec3 vNormal;
        varying vec3 vPosition;

        // --- PERLIN NOISE FUNCTIONS ---
        vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
        vec4 mod289(vec4 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
        vec4 permute(vec4 x) { return mod289(((x*34.0)+1.0)*x); }
        vec4 taylorInvSqrt(vec4 r) { return 1.79284291400159 - 0.85373472095314 * r; }
        float snoise(vec3 v) {
            const vec2 C = vec2(1.0/6.0, 1.0/3.0);
            const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);
            vec3 i = floor(v + dot(v, C.yyy));
            vec3 x0 = v - i + dot(i, C.xxx);
            vec3 g = step(x0.yzx, x0.xyz);
            vec3 l = 1.0 - g;
            vec3 i1 = min(g.xyz, l.zxy);
            vec3 i2 = max(g.xyz, l.zxy);
            vec3 x1 = x0 - i1 + C.xxx;
            vec3 x2 = x0 - i2 + C.yyy;
            vec3 x3 = x0 - D.yyy;
            i = mod289(i);
            vec4 p = permute(permute(permute(
                      i.z + vec4(0.0, i1.z, i2.z, 1.0))
                    + i.y + vec4(0.0, i1.y, i2.y, 1.0))
                    + i.x + vec4(0.0, i1.x, i2.x, 1.0));
            float n_ = 0.142857142857;
            vec3 ns = n_ * D.wyz - D.xzx;
            vec4 j = p - 49.0 * floor(p * ns.z * ns.z);
            vec4 x_ = floor(j * ns.z);
            vec4 y_ = floor(j - 7.0 * x_);
            vec4 x = x_ * ns.x + ns.yyyy;
            vec4 y = y_ * ns.x + ns.yyyy;
            vec4 h = 1.0 - abs(x) - abs(y);
            vec4 b0 = vec4(x.xy, y.xy);
            vec4 b1 = vec4(x.zw, y.zw);
            vec4 s0 = floor(b0) * 2.0 + 1.0;
            vec4 s1 = floor(b1) * 2.0 + 1.0;
            vec4 sh = -step(h, vec4(0.0));
            vec4 a0 = b0.xzyw + s0.xzyw * sh.xxyy;
            vec4 a1 = b1.xzyw + s1.xzyw * sh.zzww;
            vec3 p0 = vec3(a0.xy, h.x);
            vec3 p1 = vec3(a0.zw, h.y);
            vec3 p2 = vec3(a1.xy, h.z);
            vec3 p3 = vec3(a1.zw, h.w);
            vec4 norm = taylorInvSqrt(vec4(dot(p0, p0), dot(p1, p1), dot(p2, p2), dot(p3, p3)));
            p0 *= norm.x; p1 *= norm.y; p2 *= norm.z; p3 *= norm.w;
            vec4 m = max(0.6 - vec4(dot(x0, x0), dot(x1, x1), dot(x2, x2), dot(x3, x3)), 0.0);
            m = m * m;
            return 42.0 * dot(m * m, vec4(dot(p0, x0), dot(p1, x1), dot(p2, x2), dot(p3, x3)));
        }

        void main() {
            vNormal = normal;
            vPosition = position;

            float noiseFreq = 0.8;
            float noiseAmp = 0.6;

            // Layer 1: Base shape
            float displacement = snoise(vec3(position.x * noiseFreq, position.y * noiseFreq - time * 0.2, 0.0)) * noiseAmp;

            // Layer 2: Detail
            displacement += snoise(vec3(position.x * noiseFreq * 2.0, position.y * noiseFreq * 2.0 - time * 0.2, 0.0)) * (noiseAmp * 0.5);

            vec3 newPosition = position + normal * displacement;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(newPosition, 1.0);
        }
      `,fragmentShader:`
        uniform vec3 color;
        uniform vec3 pointLightPosition;
        varying vec3 vNormal;
        varying vec3 vPosition;

        void main() {
            vec3 normal = normalize(vNormal);
            vec3 lightDir = normalize(pointLightPosition - vPosition);

            float diffuse = max(dot(normal, lightDir), 0.0);
            float ambient = 0.35;

            float fresnel = 1.0 - dot(normal, vec3(0.0, 0.0, 1.0));
            fresnel = pow(fresnel, 2.0);

            vec3 finalColor = color * (ambient + diffuse * 1.2) + color * fresnel * 0.8;

            gl_FragColor = vec4(finalColor, 1.0);
        }
      `,transparent:!0}),u=new tr(a,l);u.rotation.x=-Math.PI/2,i.add(u);const c=new d2(16777215,2,100);c.position.set(0,0,5),e.current=c,i.add(c);let f;const d=g=>{l.uniforms.time.value=g*3e-4,s.render(i,r),f=requestAnimationFrame(d)};d(0);const h=()=>{n&&(r.aspect=n.clientWidth/n.clientHeight,r.updateProjectionMatrix(),s.setSize(n.clientWidth,n.clientHeight))},m=g=>{const _=g.clientX/window.innerWidth*2-1,p=-(g.clientY/window.innerHeight)*2+1,v=_*5,x=new G(v,2,2-p*2);e.current&&e.current.position.copy(x),l.uniforms.pointLightPosition&&(l.uniforms.pointLightPosition.value=x)};return window.addEventListener("resize",h),window.addEventListener("mousemove",m),()=>{cancelAnimationFrame(f),window.removeEventListener("resize",h),window.removeEventListener("mousemove",m),n&&s.domElement.parentNode===n&&n.removeChild(s.domElement),a.dispose(),l.dispose(),s.dispose()}},[]),He.jsx("div",{ref:t,className:"absolute inset-0 w-full h-full z-0"})}function ur(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function KE(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,t.__proto__=e}/*!
 * GSAP 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var ei={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},jl={duration:.5,overwrite:!1,delay:0},S0,sn,_t,mi=1e8,ut=1/mi,Dm=Math.PI*2,hF=Dm/4,pF=0,jE=Math.sqrt,mF=Math.cos,gF=Math.sin,Jt=function(e){return typeof e=="string"},Lt=function(e){return typeof e=="function"},br=function(e){return typeof e=="number"},M0=function(e){return typeof e>"u"},nr=function(e){return typeof e=="object"},Un=function(e){return e!==!1},E0=function(){return typeof window<"u"},cc=function(e){return Lt(e)||Jt(e)},ZE=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},_n=Array.isArray,_F=/random\([^)]+\)/g,vF=/,\s*/g,hy=/(?:-?\.?\d|\.)+/gi,QE=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,ea=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Ch=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,JE=/[+-]=-?[.\d]+/,xF=/[^,'"\[\]\s]+/gi,yF=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,yt,zi,Lm,T0,ii={},vf={},eT,tT=function(e){return(vf=Ca(e,ii))&&zn},w0=function(e,n){return console.warn("Invalid property",e,"set to",n,"Missing plugin? gsap.registerPlugin()")},Zl=function(e,n){return!n&&console.warn(e)},nT=function(e,n){return e&&(ii[e]=n)&&vf&&(vf[e]=n)||ii},Ql=function(){return 0},SF={suppressEvents:!0,isStart:!0,kill:!1},Lc={suppressEvents:!0,kill:!1},MF={suppressEvents:!0},A0={},hs=[],Im={},iT,Yn={},Rh={},py=30,Ic=[],C0="",R0=function(e){var n=e[0],i,r;if(nr(n)||Lt(n)||(e=[e]),!(i=(n._gsap||{}).harness)){for(r=Ic.length;r--&&!Ic[r].targetTest(n););i=Ic[r]}for(r=e.length;r--;)e[r]&&(e[r]._gsap||(e[r]._gsap=new wT(e[r],i)))||e.splice(r,1);return e},eo=function(e){return e._gsap||R0(gi(e))[0]._gsap},rT=function(e,n,i){return(i=e[n])&&Lt(i)?e[n]():M0(i)&&e.getAttribute&&e.getAttribute(n)||i},Fn=function(e,n){return(e=e.split(",")).forEach(n)||e},Ft=function(e){return Math.round(e*1e5)/1e5||0},vt=function(e){return Math.round(e*1e7)/1e7||0},fa=function(e,n){var i=n.charAt(0),r=parseFloat(n.substr(2));return e=parseFloat(e),i==="+"?e+r:i==="-"?e-r:i==="*"?e*r:e/r},EF=function(e,n){for(var i=n.length,r=0;e.indexOf(n[r])<0&&++r<i;);return r<i},xf=function(){var e=hs.length,n=hs.slice(0),i,r;for(Im={},hs.length=0,i=0;i<e;i++)r=n[i],r&&r._lazy&&(r.render(r._lazy[0],r._lazy[1],!0)._lazy=0)},b0=function(e){return!!(e._initted||e._startAt||e.add)},sT=function(e,n,i,r){hs.length&&!sn&&xf(),e.render(n,i,r||!!(sn&&n<0&&b0(e))),hs.length&&!sn&&xf()},oT=function(e){var n=parseFloat(e);return(n||n===0)&&(e+"").match(xF).length<2?n:Jt(e)?e.trim():e},aT=function(e){return e},ri=function(e,n){for(var i in n)i in e||(e[i]=n[i]);return e},TF=function(e){return function(n,i){for(var r in i)r in n||r==="duration"&&e||r==="ease"||(n[r]=i[r])}},Ca=function(e,n){for(var i in n)e[i]=n[i];return e},my=function t(e,n){for(var i in n)i!=="__proto__"&&i!=="constructor"&&i!=="prototype"&&(e[i]=nr(n[i])?t(e[i]||(e[i]={}),n[i]):n[i]);return e},yf=function(e,n){var i={},r;for(r in e)r in n||(i[r]=e[r]);return i},El=function(e){var n=e.parent||yt,i=e.keyframes?TF(_n(e.keyframes)):ri;if(Un(e.inherit))for(;n;)i(e,n.vars.defaults),n=n.parent||n._dp;return e},wF=function(e,n){for(var i=e.length,r=i===n.length;r&&i--&&e[i]===n[i];);return i<0},lT=function(e,n,i,r,s){i===void 0&&(i="_first"),r===void 0&&(r="_last");var o=e[r],a;if(s)for(a=n[s];o&&o[s]>a;)o=o._prev;return o?(n._next=o._next,o._next=n):(n._next=e[i],e[i]=n),n._next?n._next._prev=n:e[r]=n,n._prev=o,n.parent=n._dp=e,n},ed=function(e,n,i,r){i===void 0&&(i="_first"),r===void 0&&(r="_last");var s=n._prev,o=n._next;s?s._next=o:e[i]===n&&(e[i]=o),o?o._prev=s:e[r]===n&&(e[r]=s),n._next=n._prev=n.parent=null},ys=function(e,n){e.parent&&(!n||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},to=function(e,n){if(e&&(!n||n._end>e._dur||n._start<0))for(var i=e;i;)i._dirty=1,i=i.parent;return e},AF=function(e){for(var n=e.parent;n&&n.parent;)n._dirty=1,n.totalDuration(),n=n.parent;return e},Nm=function(e,n,i,r){return e._startAt&&(sn?e._startAt.revert(Lc):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(n,!0,r))},CF=function t(e){return!e||e._ts&&t(e.parent)},gy=function(e){return e._repeat?Ra(e._tTime,e=e.duration()+e._rDelay)*e:0},Ra=function(e,n){var i=Math.floor(e=vt(e/n));return e&&i===e?i-1:i},Sf=function(e,n){return(e-n._start)*n._ts+(n._ts>=0?0:n._dirty?n.totalDuration():n._tDur)},td=function(e){return e._end=vt(e._start+(e._tDur/Math.abs(e._ts||e._rts||ut)||0))},nd=function(e,n){var i=e._dp;return i&&i.smoothChildTiming&&e._ts&&(e._start=vt(i._time-(e._ts>0?n/e._ts:((e._dirty?e.totalDuration():e._tDur)-n)/-e._ts)),td(e),i._dirty||to(i,e)),e},uT=function(e,n){var i;if((n._time||!n._dur&&n._initted||n._start<e._time&&(n._dur||!n.add))&&(i=Sf(e.rawTime(),n),(!n._dur||_u(0,n.totalDuration(),i)-n._tTime>ut)&&n.render(i,!0)),to(e,n)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(i=e;i._dp;)i.rawTime()>=0&&i.totalTime(i._tTime),i=i._dp;e._zTime=-ut}},Wi=function(e,n,i,r){return n.parent&&ys(n),n._start=vt((br(i)?i:i||e!==yt?fi(e,i,n):e._time)+n._delay),n._end=vt(n._start+(n.totalDuration()/Math.abs(n.timeScale())||0)),lT(e,n,"_first","_last",e._sort?"_start":0),Um(n)||(e._recent=n),r||uT(e,n),e._ts<0&&nd(e,e._tTime),e},cT=function(e,n){return(ii.ScrollTrigger||w0("scrollTrigger",n))&&ii.ScrollTrigger.create(n,e)},fT=function(e,n,i,r,s){if(D0(e,n,s),!e._initted)return 1;if(!i&&e._pt&&!sn&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&iT!==Kn.frame)return hs.push(e),e._lazy=[s,r],1},RF=function t(e){var n=e.parent;return n&&n._ts&&n._initted&&!n._lock&&(n.rawTime()<0||t(n))},Um=function(e){var n=e.data;return n==="isFromStart"||n==="isStart"},bF=function(e,n,i,r){var s=e.ratio,o=n<0||!n&&(!e._start&&RF(e)&&!(!e._initted&&Um(e))||(e._ts<0||e._dp._ts<0)&&!Um(e))?0:1,a=e._rDelay,l=0,u,c,f;if(a&&e._repeat&&(l=_u(0,e._tDur,n),c=Ra(l,a),e._yoyo&&c&1&&(o=1-o),c!==Ra(e._tTime,a)&&(s=1-o,e.vars.repeatRefresh&&e._initted&&e.invalidate())),o!==s||sn||r||e._zTime===ut||!n&&e._zTime){if(!e._initted&&fT(e,n,r,i,l))return;for(f=e._zTime,e._zTime=n||(i?ut:0),i||(i=n&&!f),e.ratio=o,e._from&&(o=1-o),e._time=0,e._tTime=l,u=e._pt;u;)u.r(o,u.d),u=u._next;n<0&&Nm(e,n,i,!0),e._onUpdate&&!i&&Zn(e,"onUpdate"),l&&e._repeat&&!i&&e.parent&&Zn(e,"onRepeat"),(n>=e._tDur||n<0)&&e.ratio===o&&(o&&ys(e,1),!i&&!sn&&(Zn(e,o?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=n)},PF=function(e,n,i){var r;if(i>n)for(r=e._first;r&&r._start<=i;){if(r.data==="isPause"&&r._start>n)return r;r=r._next}else for(r=e._last;r&&r._start>=i;){if(r.data==="isPause"&&r._start<n)return r;r=r._prev}},ba=function(e,n,i,r){var s=e._repeat,o=vt(n)||0,a=e._tTime/e._tDur;return a&&!r&&(e._time*=o/e._dur),e._dur=o,e._tDur=s?s<0?1e10:vt(o*(s+1)+e._rDelay*s):o,a>0&&!r&&nd(e,e._tTime=e._tDur*a),e.parent&&td(e),i||to(e.parent,e),e},_y=function(e){return e instanceof Rn?to(e):ba(e,e._dur)},DF={_start:0,endTime:Ql,totalDuration:Ql},fi=function t(e,n,i){var r=e.labels,s=e._recent||DF,o=e.duration()>=mi?s.endTime(!1):e._dur,a,l,u;return Jt(n)&&(isNaN(n)||n in r)?(l=n.charAt(0),u=n.substr(-1)==="%",a=n.indexOf("="),l==="<"||l===">"?(a>=0&&(n=n.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(n.substr(1))||0)*(u?(a<0?s:i).totalDuration()/100:1)):a<0?(n in r||(r[n]=o),r[n]):(l=parseFloat(n.charAt(a-1)+n.substr(a+1)),u&&i&&(l=l/100*(_n(i)?i[0]:i).totalDuration()),a>1?t(e,n.substr(0,a-1),i)+l:o+l)):n==null?o:+n},Tl=function(e,n,i){var r=br(n[1]),s=(r?2:1)+(e<2?0:1),o=n[s],a,l;if(r&&(o.duration=n[1]),o.parent=i,e){for(a=o,l=i;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=Un(l.vars.inherit)&&l.parent;o.immediateRender=Un(a.immediateRender),e<2?o.runBackwards=1:o.startAt=n[s-1]}return new Ht(n[0],o,n[s+1])},Cs=function(e,n){return e||e===0?n(e):n},_u=function(e,n,i){return i<e?e:i>n?n:i},pn=function(e,n){return!Jt(e)||!(n=yF.exec(e))?"":n[1]},LF=function(e,n,i){return Cs(i,function(r){return _u(e,n,r)})},Fm=[].slice,dT=function(e,n){return e&&nr(e)&&"length"in e&&(!n&&!e.length||e.length-1 in e&&nr(e[0]))&&!e.nodeType&&e!==zi},IF=function(e,n,i){return i===void 0&&(i=[]),e.forEach(function(r){var s;return Jt(r)&&!n||dT(r,1)?(s=i).push.apply(s,gi(r)):i.push(r)})||i},gi=function(e,n,i){return _t&&!n&&_t.selector?_t.selector(e):Jt(e)&&!i&&(Lm||!Pa())?Fm.call((n||T0).querySelectorAll(e),0):_n(e)?IF(e,i):dT(e)?Fm.call(e,0):e?[e]:[]},Om=function(e){return e=gi(e)[0]||Zl("Invalid scope")||{},function(n){var i=e.current||e.nativeElement||e;return gi(n,i.querySelectorAll?i:i===e?Zl("Invalid scope")||T0.createElement("div"):e)}},hT=function(e){return e.sort(function(){return .5-Math.random()})},pT=function(e){if(Lt(e))return e;var n=nr(e)?e:{each:e},i=no(n.ease),r=n.from||0,s=parseFloat(n.base)||0,o={},a=r>0&&r<1,l=isNaN(r)||a,u=n.axis,c=r,f=r;return Jt(r)?c=f={center:.5,edges:.5,end:1}[r]||0:!a&&l&&(c=r[0],f=r[1]),function(d,h,m){var g=(m||n).length,_=o[g],p,v,x,S,E,T,A,y,w;if(!_){if(w=n.grid==="auto"?0:(n.grid||[1,mi])[1],!w){for(A=-mi;A<(A=m[w++].getBoundingClientRect().left)&&w<g;);w<g&&w--}for(_=o[g]=[],p=l?Math.min(w,g)*c-.5:r%w,v=w===mi?0:l?g*f/w-.5:r/w|0,A=0,y=mi,T=0;T<g;T++)x=T%w-p,S=v-(T/w|0),_[T]=E=u?Math.abs(u==="y"?S:x):jE(x*x+S*S),E>A&&(A=E),E<y&&(y=E);r==="random"&&hT(_),_.max=A-y,_.min=y,_.v=g=(parseFloat(n.amount)||parseFloat(n.each)*(w>g?g-1:u?u==="y"?g/w:w:Math.max(w,g/w))||0)*(r==="edges"?-1:1),_.b=g<0?s-g:s,_.u=pn(n.amount||n.each)||0,i=i&&g<0?YF(i):i}return g=(_[d]-_.min)/_.max||0,vt(_.b+(i?i(g):g)*_.v)+_.u}},km=function(e){var n=Math.pow(10,((e+"").split(".")[1]||"").length);return function(i){var r=vt(Math.round(parseFloat(i)/e)*e*n);return(r-r%1)/n+(br(i)?0:pn(i))}},mT=function(e,n){var i=_n(e),r,s;return!i&&nr(e)&&(r=i=e.radius||mi,e.values?(e=gi(e.values),(s=!br(e[0]))&&(r*=r)):e=km(e.increment)),Cs(n,i?Lt(e)?function(o){return s=e(o),Math.abs(s-o)<=r?s:o}:function(o){for(var a=parseFloat(s?o.x:o),l=parseFloat(s?o.y:0),u=mi,c=0,f=e.length,d,h;f--;)s?(d=e[f].x-a,h=e[f].y-l,d=d*d+h*h):d=Math.abs(e[f]-a),d<u&&(u=d,c=f);return c=!r||u<=r?e[c]:o,s||c===o||br(o)?c:c+pn(o)}:km(e))},gT=function(e,n,i,r){return Cs(_n(e)?!n:i===!0?!!(i=0):!r,function(){return _n(e)?e[~~(Math.random()*e.length)]:(i=i||1e-5)&&(r=i<1?Math.pow(10,(i+"").length-2):1)&&Math.floor(Math.round((e-i/2+Math.random()*(n-e+i*.99))/i)*i*r)/r})},NF=function(){for(var e=arguments.length,n=new Array(e),i=0;i<e;i++)n[i]=arguments[i];return function(r){return n.reduce(function(s,o){return o(s)},r)}},UF=function(e,n){return function(i){return e(parseFloat(i))+(n||pn(i))}},FF=function(e,n,i){return vT(e,n,0,1,i)},_T=function(e,n,i){return Cs(i,function(r){return e[~~n(r)]})},OF=function t(e,n,i){var r=n-e;return _n(e)?_T(e,t(0,e.length),n):Cs(i,function(s){return(r+(s-e)%r)%r+e})},kF=function t(e,n,i){var r=n-e,s=r*2;return _n(e)?_T(e,t(0,e.length-1),n):Cs(i,function(o){return o=(s+(o-e)%s)%s||0,e+(o>r?s-o:o)})},Jl=function(e){return e.replace(_F,function(n){var i=n.indexOf("[")+1,r=n.substring(i||7,i?n.indexOf("]"):n.length-1).split(vF);return gT(i?r:+r[0],i?0:+r[1],+r[2]||1e-5)})},vT=function(e,n,i,r,s){var o=n-e,a=r-i;return Cs(s,function(l){return i+((l-e)/o*a||0)})},BF=function t(e,n,i,r){var s=isNaN(e+n)?0:function(h){return(1-h)*e+h*n};if(!s){var o=Jt(e),a={},l,u,c,f,d;if(i===!0&&(r=1)&&(i=null),o)e={p:e},n={p:n};else if(_n(e)&&!_n(n)){for(c=[],f=e.length,d=f-2,u=1;u<f;u++)c.push(t(e[u-1],e[u]));f--,s=function(m){m*=f;var g=Math.min(d,~~m);return c[g](m-g)},i=n}else r||(e=Ca(_n(e)?[]:{},e));if(!c){for(l in n)P0.call(a,e,l,"get",n[l]);s=function(m){return N0(m,a)||(o?e.p:e)}}}return Cs(i,s)},vy=function(e,n,i){var r=e.labels,s=mi,o,a,l;for(o in r)a=r[o]-n,a<0==!!i&&a&&s>(a=Math.abs(a))&&(l=o,s=a);return l},Zn=function(e,n,i){var r=e.vars,s=r[n],o=_t,a=e._ctx,l,u,c;if(s)return l=r[n+"Params"],u=r.callbackScope||e,i&&hs.length&&xf(),a&&(_t=a),c=l?s.apply(u,l):s.call(u),_t=o,c},ll=function(e){return ys(e),e.scrollTrigger&&e.scrollTrigger.kill(!!sn),e.progress()<1&&Zn(e,"onInterrupt"),e},ta,xT=[],yT=function(e){if(e)if(e=!e.name&&e.default||e,E0()||e.headless){var n=e.name,i=Lt(e),r=n&&!i&&e.init?function(){this._props=[]}:e,s={init:Ql,render:N0,add:P0,kill:nO,modifier:tO,rawVars:0},o={targetTest:0,get:0,getSetter:I0,aliases:{},register:0};if(Pa(),e!==r){if(Yn[n])return;ri(r,ri(yf(e,s),o)),Ca(r.prototype,Ca(s,yf(e,o))),Yn[r.prop=n]=r,e.targetTest&&(Ic.push(r),A0[n]=1),n=(n==="css"?"CSS":n.charAt(0).toUpperCase()+n.substr(1))+"Plugin"}nT(n,r),e.register&&e.register(zn,r,On)}else xT.push(e)},lt=255,ul={aqua:[0,lt,lt],lime:[0,lt,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,lt],navy:[0,0,128],white:[lt,lt,lt],olive:[128,128,0],yellow:[lt,lt,0],orange:[lt,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[lt,0,0],pink:[lt,192,203],cyan:[0,lt,lt],transparent:[lt,lt,lt,0]},bh=function(e,n,i){return e+=e<0?1:e>1?-1:0,(e*6<1?n+(i-n)*e*6:e<.5?i:e*3<2?n+(i-n)*(2/3-e)*6:n)*lt+.5|0},ST=function(e,n,i){var r=e?br(e)?[e>>16,e>>8&lt,e&lt]:0:ul.black,s,o,a,l,u,c,f,d,h,m;if(!r){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),ul[e])r=ul[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),o=e.charAt(2),a=e.charAt(3),e="#"+s+s+o+o+a+a+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return r=parseInt(e.substr(1,6),16),[r>>16,r>>8&lt,r&lt,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),r=[e>>16,e>>8&lt,e&lt]}else if(e.substr(0,3)==="hsl"){if(r=m=e.match(hy),!n)l=+r[0]%360/360,u=+r[1]/100,c=+r[2]/100,o=c<=.5?c*(u+1):c+u-c*u,s=c*2-o,r.length>3&&(r[3]*=1),r[0]=bh(l+1/3,s,o),r[1]=bh(l,s,o),r[2]=bh(l-1/3,s,o);else if(~e.indexOf("="))return r=e.match(QE),i&&r.length<4&&(r[3]=1),r}else r=e.match(hy)||ul.transparent;r=r.map(Number)}return n&&!m&&(s=r[0]/lt,o=r[1]/lt,a=r[2]/lt,f=Math.max(s,o,a),d=Math.min(s,o,a),c=(f+d)/2,f===d?l=u=0:(h=f-d,u=c>.5?h/(2-f-d):h/(f+d),l=f===s?(o-a)/h+(o<a?6:0):f===o?(a-s)/h+2:(s-o)/h+4,l*=60),r[0]=~~(l+.5),r[1]=~~(u*100+.5),r[2]=~~(c*100+.5)),i&&r.length<4&&(r[3]=1),r},MT=function(e){var n=[],i=[],r=-1;return e.split(ps).forEach(function(s){var o=s.match(ea)||[];n.push.apply(n,o),i.push(r+=o.length+1)}),n.c=i,n},xy=function(e,n,i){var r="",s=(e+r).match(ps),o=n?"hsla(":"rgba(",a=0,l,u,c,f;if(!s)return e;if(s=s.map(function(d){return(d=ST(d,n,1))&&o+(n?d[0]+","+d[1]+"%,"+d[2]+"%,"+d[3]:d.join(","))+")"}),i&&(c=MT(e),l=i.c,l.join(r)!==c.c.join(r)))for(u=e.replace(ps,"1").split(ea),f=u.length-1;a<f;a++)r+=u[a]+(~l.indexOf(a)?s.shift()||o+"0,0,0,0)":(c.length?c:s.length?s:i).shift());if(!u)for(u=e.split(ps),f=u.length-1;a<f;a++)r+=u[a]+s[a];return r+u[f]},ps=function(){var t="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in ul)t+="|"+e+"\\b";return new RegExp(t+")","gi")}(),zF=/hsl[a]?\(/,ET=function(e){var n=e.join(" "),i;if(ps.lastIndex=0,ps.test(n))return i=zF.test(n),e[1]=xy(e[1],i),e[0]=xy(e[0],i,MT(e[1])),!0},eu,Kn=function(){var t=Date.now,e=500,n=33,i=t(),r=i,s=1e3/240,o=s,a=[],l,u,c,f,d,h,m=function g(_){var p=t()-r,v=_===!0,x,S,E,T;if((p>e||p<0)&&(i+=p-n),r+=p,E=r-i,x=E-o,(x>0||v)&&(T=++f.frame,d=E-f.time*1e3,f.time=E=E/1e3,o+=x+(x>=s?4:s-x),S=1),v||(l=u(g)),S)for(h=0;h<a.length;h++)a[h](E,d,T,_)};return f={time:0,frame:0,tick:function(){m(!0)},deltaRatio:function(_){return d/(1e3/(_||60))},wake:function(){eT&&(!Lm&&E0()&&(zi=Lm=window,T0=zi.document||{},ii.gsap=zn,(zi.gsapVersions||(zi.gsapVersions=[])).push(zn.version),tT(vf||zi.GreenSockGlobals||!zi.gsap&&zi||{}),xT.forEach(yT)),c=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&f.sleep(),u=c||function(_){return setTimeout(_,o-f.time*1e3+1|0)},eu=1,m(2))},sleep:function(){(c?cancelAnimationFrame:clearTimeout)(l),eu=0,u=Ql},lagSmoothing:function(_,p){e=_||1/0,n=Math.min(p||33,e)},fps:function(_){s=1e3/(_||240),o=f.time*1e3+s},add:function(_,p,v){var x=p?function(S,E,T,A){_(S,E,T,A),f.remove(x)}:_;return f.remove(_),a[v?"unshift":"push"](x),Pa(),x},remove:function(_,p){~(p=a.indexOf(_))&&a.splice(p,1)&&h>=p&&h--},_listeners:a},f}(),Pa=function(){return!eu&&Kn.wake()},qe={},VF=/^[\d.\-M][\d.\-,\s]/,HF=/["']/g,GF=function(e){for(var n={},i=e.substr(1,e.length-3).split(":"),r=i[0],s=1,o=i.length,a,l,u;s<o;s++)l=i[s],a=s!==o-1?l.lastIndexOf(","):l.length,u=l.substr(0,a),n[r]=isNaN(u)?u.replace(HF,"").trim():+u,r=l.substr(a+1).trim();return n},WF=function(e){var n=e.indexOf("(")+1,i=e.indexOf(")"),r=e.indexOf("(",n);return e.substring(n,~r&&r<i?e.indexOf(")",i+1):i)},XF=function(e){var n=(e+"").split("("),i=qe[n[0]];return i&&n.length>1&&i.config?i.config.apply(null,~e.indexOf("{")?[GF(n[1])]:WF(e).split(",").map(oT)):qe._CE&&VF.test(e)?qe._CE("",e):i},YF=function(e){return function(n){return 1-e(1-n)}},no=function(e,n){return e&&(Lt(e)?e:qe[e]||XF(e))||n},vo=function(e,n,i,r){i===void 0&&(i=function(l){return 1-n(1-l)}),r===void 0&&(r=function(l){return l<.5?n(l*2)/2:1-n((1-l)*2)/2});var s={easeIn:n,easeOut:i,easeInOut:r},o;return Fn(e,function(a){qe[a]=ii[a]=s,qe[o=a.toLowerCase()]=i;for(var l in s)qe[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=qe[a+"."+l]=s[l]}),s},TT=function(e){return function(n){return n<.5?(1-e(1-n*2))/2:.5+e((n-.5)*2)/2}},Ph=function t(e,n,i){var r=n>=1?n:1,s=(i||(e?.3:.45))/(n<1?n:1),o=s/Dm*(Math.asin(1/r)||0),a=function(c){return c===1?1:r*Math.pow(2,-10*c)*gF((c-o)*s)+1},l=e==="out"?a:e==="in"?function(u){return 1-a(1-u)}:TT(a);return s=Dm/s,l.config=function(u,c){return t(e,u,c)},l},Dh=function t(e,n){n===void 0&&(n=1.70158);var i=function(o){return o?--o*o*((n+1)*o+n)+1:0},r=e==="out"?i:e==="in"?function(s){return 1-i(1-s)}:TT(i);return r.config=function(s){return t(e,s)},r};Fn("Linear,Quad,Cubic,Quart,Quint,Strong",function(t,e){var n=e<5?e+1:e;vo(t+",Power"+(n-1),e?function(i){return Math.pow(i,n)}:function(i){return i},function(i){return 1-Math.pow(1-i,n)},function(i){return i<.5?Math.pow(i*2,n)/2:1-Math.pow((1-i)*2,n)/2})});qe.Linear.easeNone=qe.none=qe.Linear.easeIn;vo("Elastic",Ph("in"),Ph("out"),Ph());(function(t,e){var n=1/e,i=2*n,r=2.5*n,s=function(a){return a<n?t*a*a:a<i?t*Math.pow(a-1.5/e,2)+.75:a<r?t*(a-=2.25/e)*a+.9375:t*Math.pow(a-2.625/e,2)+.984375};vo("Bounce",function(o){return 1-s(1-o)},s)})(7.5625,2.75);vo("Expo",function(t){return Math.pow(2,10*(t-1))*t+t*t*t*t*t*t*(1-t)});vo("Circ",function(t){return-(jE(1-t*t)-1)});vo("Sine",function(t){return t===1?1:-mF(t*hF)+1});vo("Back",Dh("in"),Dh("out"),Dh());qe.SteppedEase=qe.steps=ii.SteppedEase={config:function(e,n){e===void 0&&(e=1);var i=1/e,r=e+(n?0:1),s=n?1:0,o=1-ut;return function(a){return((r*_u(0,o,a)|0)+s)*i}}};jl.ease=qe["quad.out"];Fn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(t){return C0+=t+","+t+"Params,"});var wT=function(e,n){this.id=pF++,e._gsap=this,this.target=e,this.harness=n,this.get=n?n.get:rT,this.set=n?n.getSetter:I0},tu=function(){function t(n){this.vars=n,this._delay=+n.delay||0,(this._repeat=n.repeat===1/0?-2:n.repeat||0)&&(this._rDelay=n.repeatDelay||0,this._yoyo=!!n.yoyo||!!n.yoyoEase),this._ts=1,ba(this,+n.duration,1,1),this.data=n.data,_t&&(this._ctx=_t,_t.data.push(this)),eu||Kn.wake()}var e=t.prototype;return e.delay=function(i){return i||i===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+i-this._delay),this._delay=i,this):this._delay},e.duration=function(i){return arguments.length?this.totalDuration(this._repeat>0?i+(i+this._rDelay)*this._repeat:i):this.totalDuration()&&this._dur},e.totalDuration=function(i){return arguments.length?(this._dirty=0,ba(this,this._repeat<0?i:(i-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(i,r){if(Pa(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(nd(this,i),!s._dp||s.parent||uT(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&i<this._tDur||this._ts<0&&i>0||!this._tDur&&!i)&&Wi(this._dp,this,this._start-this._delay)}return(this._tTime!==i||!this._dur&&!r||this._initted&&Math.abs(this._zTime)===ut||!this._initted&&this._dur&&i||!i&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=i),sT(this,i,r)),this},e.time=function(i,r){return arguments.length?this.totalTime(Math.min(this.totalDuration(),i+gy(this))%(this._dur+this._rDelay)||(i?this._dur:0),r):this._time},e.totalProgress=function(i,r){return arguments.length?this.totalTime(this.totalDuration()*i,r):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(i,r){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-i:i)+gy(this),r):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(i,r){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(i-1)*s,r):this._repeat?Ra(this._tTime,s)+1:1},e.timeScale=function(i,r){if(!arguments.length)return this._rts===-ut?0:this._rts;if(this._rts===i)return this;var s=this.parent&&this._ts?Sf(this.parent._time,this):this._tTime;return this._rts=+i||0,this._ts=this._ps||i===-ut?0:this._rts,this.totalTime(_u(-Math.abs(this._delay),this.totalDuration(),s),r!==!1),td(this),AF(this)},e.paused=function(i){return arguments.length?(this._ps!==i&&(this._ps=i,i?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Pa(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==ut&&(this._tTime-=ut)))),this):this._ps},e.startTime=function(i){if(arguments.length){this._start=vt(i);var r=this.parent||this._dp;return r&&(r._sort||!this.parent)&&Wi(r,this,this._start-this._delay),this}return this._start},e.endTime=function(i){return this._start+(Un(i)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(i){var r=this.parent||this._dp;return r?i&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Sf(r.rawTime(i),this):this._tTime:this._tTime},e.revert=function(i){i===void 0&&(i=MF);var r=sn;return sn=i,b0(this)&&(this.timeline&&this.timeline.revert(i),this.totalTime(-.01,i.suppressEvents)),this.data!=="nested"&&i.kill!==!1&&this.kill(),sn=r,this},e.globalTime=function(i){for(var r=this,s=arguments.length?i:r.rawTime();r;)s=r._start+s/(Math.abs(r._ts)||1),r=r._dp;return!this.parent&&this._sat?this._sat.globalTime(i):s},e.repeat=function(i){return arguments.length?(this._repeat=i===1/0?-2:i,_y(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(i){if(arguments.length){var r=this._time;return this._rDelay=i,_y(this),r?this.time(r):this}return this._rDelay},e.yoyo=function(i){return arguments.length?(this._yoyo=i,this):this._yoyo},e.seek=function(i,r){return this.totalTime(fi(this,i),Un(r))},e.restart=function(i,r){return this.play().totalTime(i?-this._delay:0,Un(r)),this._dur||(this._zTime=-ut),this},e.play=function(i,r){return i!=null&&this.seek(i,r),this.reversed(!1).paused(!1)},e.reverse=function(i,r){return i!=null&&this.seek(i||this.totalDuration(),r),this.reversed(!0).paused(!1)},e.pause=function(i,r){return i!=null&&this.seek(i,r),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(i){return arguments.length?(!!i!==this.reversed()&&this.timeScale(-this._rts||(i?-ut:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-ut,this},e.isActive=function(){var i=this.parent||this._dp,r=this._start,s;return!!(!i||this._ts&&this._initted&&i.isActive()&&(s=i.rawTime(!0))>=r&&s<this.endTime(!0)-ut)},e.eventCallback=function(i,r,s){var o=this.vars;return arguments.length>1?(r?(o[i]=r,s&&(o[i+"Params"]=s),i==="onUpdate"&&(this._onUpdate=r)):delete o[i],this):o[i]},e.then=function(i){var r=this,s=r._prom;return new Promise(function(o){var a=Lt(i)?i:aT,l=function(){var c=r.then;r.then=null,s&&s(),Lt(a)&&(a=a(r))&&(a.then||a===r)&&(r.then=c),o(a),r.then=c};r._initted&&r.totalProgress()===1&&r._ts>=0||!r._tTime&&r._ts<0?l():r._prom=l})},e.kill=function(){ll(this)},t}();ri(tu.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-ut,_prom:0,_ps:!1,_rts:1});var Rn=function(t){KE(e,t);function e(i,r){var s;return i===void 0&&(i={}),s=t.call(this,i)||this,s.labels={},s.smoothChildTiming=!!i.smoothChildTiming,s.autoRemoveChildren=!!i.autoRemoveChildren,s._sort=Un(i.sortChildren),yt&&Wi(i.parent||yt,ur(s),r),i.reversed&&s.reverse(),i.paused&&s.paused(!0),i.scrollTrigger&&cT(ur(s),i.scrollTrigger),s}var n=e.prototype;return n.to=function(r,s,o){return Tl(0,arguments,this),this},n.from=function(r,s,o){return Tl(1,arguments,this),this},n.fromTo=function(r,s,o,a){return Tl(2,arguments,this),this},n.set=function(r,s,o){return s.duration=0,s.parent=this,El(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new Ht(r,s,fi(this,o),1),this},n.call=function(r,s,o){return Wi(this,Ht.delayedCall(0,r,s),o)},n.staggerTo=function(r,s,o,a,l,u,c){return o.duration=s,o.stagger=o.stagger||a,o.onComplete=u,o.onCompleteParams=c,o.parent=this,new Ht(r,o,fi(this,l)),this},n.staggerFrom=function(r,s,o,a,l,u,c){return o.runBackwards=1,El(o).immediateRender=Un(o.immediateRender),this.staggerTo(r,s,o,a,l,u,c)},n.staggerFromTo=function(r,s,o,a,l,u,c,f){return a.startAt=o,El(a).immediateRender=Un(a.immediateRender),this.staggerTo(r,s,a,l,u,c,f)},n.render=function(r,s,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,u=this._dur,c=r<=0?0:vt(r),f=this._zTime<0!=r<0&&(this._initted||!u),d,h,m,g,_,p,v,x,S,E,T,A;if(this!==yt&&c>l&&r>=0&&(c=l),c!==this._tTime||o||f){if(a!==this._time&&u&&(c+=this._time-a,r+=this._time-a),d=c,S=this._start,x=this._ts,p=!x,f&&(u||(a=this._zTime),(r||!s)&&(this._zTime=r)),this._repeat){if(T=this._yoyo,_=u+this._rDelay,this._repeat<-1&&r<0)return this.totalTime(_*100+r,s,o);if(d=vt(c%_),c===l?(g=this._repeat,d=u):(E=vt(c/_),g=~~E,g&&g===E&&(d=u,g--),d>u&&(d=u)),E=Ra(this._tTime,_),!a&&this._tTime&&E!==g&&this._tTime-E*_-this._dur<=0&&(E=g),T&&g&1&&(d=u-d,A=1),g!==E&&!this._lock){var y=T&&E&1,w=y===(T&&g&1);if(g<E&&(y=!y),a=y?0:c%u?u:c,this._lock=1,this.render(a||(A?0:vt(g*_)),s,!u)._lock=0,this._tTime=c,!s&&this.parent&&Zn(this,"onRepeat"),this.vars.repeatRefresh&&!A&&(this.invalidate()._lock=1,E=g),a&&a!==this._time||p!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(u=this._dur,l=this._tDur,w&&(this._lock=2,a=y?u:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!A&&this.invalidate()),this._lock=0,!this._ts&&!p)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(v=PF(this,vt(a),vt(d)),v&&(c-=d-(d=v._start))),this._tTime=c,this._time=d,this._act=!!x,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=r,a=0),!a&&c&&u&&!s&&!E&&(Zn(this,"onStart"),this._tTime!==c))return this;if(d>=a&&r>=0)for(h=this._first;h;){if(m=h._next,(h._act||d>=h._start)&&h._ts&&v!==h){if(h.parent!==this)return this.render(r,s,o);if(h.render(h._ts>0?(d-h._start)*h._ts:(h._dirty?h.totalDuration():h._tDur)+(d-h._start)*h._ts,s,o),d!==this._time||!this._ts&&!p){v=0,m&&(c+=this._zTime=-ut);break}}h=m}else{h=this._last;for(var b=r<0?r:d;h;){if(m=h._prev,(h._act||b<=h._end)&&h._ts&&v!==h){if(h.parent!==this)return this.render(r,s,o);if(h.render(h._ts>0?(b-h._start)*h._ts:(h._dirty?h.totalDuration():h._tDur)+(b-h._start)*h._ts,s,o||sn&&b0(h)),d!==this._time||!this._ts&&!p){v=0,m&&(c+=this._zTime=b?-ut:ut);break}}h=m}}if(v&&!s&&(this.pause(),v.render(d>=a?0:-ut)._zTime=d>=a?1:-1,this._ts))return this._start=S,td(this),this.render(r,s,o);this._onUpdate&&!s&&Zn(this,"onUpdate",!0),(c===l&&this._tTime>=this.totalDuration()||!c&&a)&&(S===this._start||Math.abs(x)!==Math.abs(this._ts))&&(this._lock||((r||!u)&&(c===l&&this._ts>0||!c&&this._ts<0)&&ys(this,1),!s&&!(r<0&&!a)&&(c||a||!l)&&(Zn(this,c===l&&r>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(c<l&&this.timeScale()>0)&&this._prom())))}return this},n.add=function(r,s){var o=this;if(br(s)||(s=fi(this,s,r)),!(r instanceof tu)){if(_n(r))return r.forEach(function(a){return o.add(a,s)}),this;if(Jt(r))return this.addLabel(r,s);if(Lt(r))r=Ht.delayedCall(0,r);else return this}return this!==r?Wi(this,r,s):this},n.getChildren=function(r,s,o,a){r===void 0&&(r=!0),s===void 0&&(s=!0),o===void 0&&(o=!0),a===void 0&&(a=-mi);for(var l=[],u=this._first;u;)u._start>=a&&(u instanceof Ht?s&&l.push(u):(o&&l.push(u),r&&l.push.apply(l,u.getChildren(!0,s,o)))),u=u._next;return l},n.getById=function(r){for(var s=this.getChildren(1,1,1),o=s.length;o--;)if(s[o].vars.id===r)return s[o]},n.remove=function(r){return Jt(r)?this.removeLabel(r):Lt(r)?this.killTweensOf(r):(r.parent===this&&ed(this,r),r===this._recent&&(this._recent=this._last),to(this))},n.totalTime=function(r,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=vt(Kn.time-(this._ts>0?r/this._ts:(this.totalDuration()-r)/-this._ts))),t.prototype.totalTime.call(this,r,s),this._forcing=0,this):this._tTime},n.addLabel=function(r,s){return this.labels[r]=fi(this,s),this},n.removeLabel=function(r){return delete this.labels[r],this},n.addPause=function(r,s,o){var a=Ht.delayedCall(0,s||Ql,o);return a.data="isPause",this._hasPause=1,Wi(this,a,fi(this,r))},n.removePause=function(r){var s=this._first;for(r=fi(this,r);s;)s._start===r&&s.data==="isPause"&&ys(s),s=s._next},n.killTweensOf=function(r,s,o){for(var a=this.getTweensOf(r,o),l=a.length;l--;)es!==a[l]&&a[l].kill(r,s);return this},n.getTweensOf=function(r,s){for(var o=[],a=gi(r),l=this._first,u=br(s),c;l;)l instanceof Ht?EF(l._targets,a)&&(u?(!es||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&o.push(l):(c=l.getTweensOf(a,s)).length&&o.push.apply(o,c),l=l._next;return o},n.tweenTo=function(r,s){s=s||{};var o=this,a=fi(o,r),l=s,u=l.startAt,c=l.onStart,f=l.onStartParams,d=l.immediateRender,h,m=Ht.to(o,ri({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:s.duration||Math.abs((a-(u&&"time"in u?u.time:o._time))/o.timeScale())||ut,onStart:function(){if(o.pause(),!h){var _=s.duration||Math.abs((a-(u&&"time"in u?u.time:o._time))/o.timeScale());m._dur!==_&&ba(m,_,0,1).render(m._time,!0,!0),h=1}c&&c.apply(m,f||[])}},s));return d?m.render(0):m},n.tweenFromTo=function(r,s,o){return this.tweenTo(s,ri({startAt:{time:fi(this,r)}},o))},n.recent=function(){return this._recent},n.nextLabel=function(r){return r===void 0&&(r=this._time),vy(this,fi(this,r))},n.previousLabel=function(r){return r===void 0&&(r=this._time),vy(this,fi(this,r),1)},n.currentLabel=function(r){return arguments.length?this.seek(r,!0):this.previousLabel(this._time+ut)},n.shiftChildren=function(r,s,o){o===void 0&&(o=0);var a=this._first,l=this.labels,u;for(r=vt(r);a;)a._start>=o&&(a._start+=r,a._end+=r),a=a._next;if(s)for(u in l)l[u]>=o&&(l[u]+=r);return to(this)},n.invalidate=function(r){var s=this._first;for(this._lock=0;s;)s.invalidate(r),s=s._next;return t.prototype.invalidate.call(this,r)},n.clear=function(r){r===void 0&&(r=!0);for(var s=this._first,o;s;)o=s._next,this.remove(s),s=o;return this._dp&&(this._time=this._tTime=this._pTime=0),r&&(this.labels={}),to(this)},n.totalDuration=function(r){var s=0,o=this,a=o._last,l=mi,u,c,f;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-r:r));if(o._dirty){for(f=o.parent;a;)u=a._prev,a._dirty&&a.totalDuration(),c=a._start,c>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,Wi(o,a,c-a._delay,1)._lock=0):l=c,c<0&&a._ts&&(s-=c,(!f&&!o._dp||f&&f.smoothChildTiming)&&(o._start+=vt(c/o._ts),o._time-=c,o._tTime-=c),o.shiftChildren(-c,!1,-1/0),l=0),a._end>s&&a._ts&&(s=a._end),a=u;ba(o,o===yt&&o._time>s?o._time:s,1,1),o._dirty=0}return o._tDur},e.updateRoot=function(r){if(yt._ts&&(sT(yt,Sf(r,yt)),iT=Kn.frame),Kn.frame>=py){py+=ei.autoSleep||120;var s=yt._first;if((!s||!s._ts)&&ei.autoSleep&&Kn._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||Kn.sleep()}}},e}(tu);ri(Rn.prototype,{_lock:0,_hasPause:0,_forcing:0});var qF=function(e,n,i,r,s,o,a){var l=new On(this._pt,e,n,0,1,DT,null,s),u=0,c=0,f,d,h,m,g,_,p,v;for(l.b=i,l.e=r,i+="",r+="",(p=~r.indexOf("random("))&&(r=Jl(r)),o&&(v=[i,r],o(v,e,n),i=v[0],r=v[1]),d=i.match(Ch)||[];f=Ch.exec(r);)m=f[0],g=r.substring(u,f.index),h?h=(h+1)%5:g.substr(-5)==="rgba("&&(h=1),m!==d[c++]&&(_=parseFloat(d[c-1])||0,l._pt={_next:l._pt,p:g||c===1?g:",",s:_,c:m.charAt(1)==="="?fa(_,m)-_:parseFloat(m)-_,m:h&&h<4?Math.round:0},u=Ch.lastIndex);return l.c=u<r.length?r.substring(u,r.length):"",l.fp=a,(JE.test(r)||p)&&(l.e=0),this._pt=l,l},P0=function(e,n,i,r,s,o,a,l,u,c){Lt(r)&&(r=r(s||0,e,o));var f=e[n],d=i!=="get"?i:Lt(f)?u?e[n.indexOf("set")||!Lt(e["get"+n.substr(3)])?n:"get"+n.substr(3)](u):e[n]():f,h=Lt(f)?u?QF:bT:L0,m;if(Jt(r)&&(~r.indexOf("random(")&&(r=Jl(r)),r.charAt(1)==="="&&(m=fa(d,r)+(pn(d)||0),(m||m===0)&&(r=m))),!c||d!==r||Bm)return!isNaN(d*r)&&r!==""?(m=new On(this._pt,e,n,+d||0,r-(d||0),typeof f=="boolean"?eO:PT,0,h),u&&(m.fp=u),a&&m.modifier(a,this,e),this._pt=m):(!f&&!(n in e)&&w0(n,r),qF.call(this,e,n,d,r,h,l||ei.stringFilter,u))},$F=function(e,n,i,r,s){if(Lt(e)&&(e=wl(e,s,n,i,r)),!nr(e)||e.style&&e.nodeType||_n(e)||ZE(e))return Jt(e)?wl(e,s,n,i,r):e;var o={},a;for(a in e)o[a]=wl(e[a],s,n,i,r);return o},AT=function(e,n,i,r,s,o){var a,l,u,c;if(Yn[e]&&(a=new Yn[e]).init(s,a.rawVars?n[e]:$F(n[e],r,s,o,i),i,r,o)!==!1&&(i._pt=l=new On(i._pt,s,e,0,1,a.render,a,0,a.priority),i!==ta))for(u=i._ptLookup[i._targets.indexOf(s)],c=a._props.length;c--;)u[a._props[c]]=l;return a},es,Bm,D0=function t(e,n,i){var r=e.vars,s=r.ease,o=r.startAt,a=r.immediateRender,l=r.lazy,u=r.onUpdate,c=r.runBackwards,f=r.yoyoEase,d=r.keyframes,h=r.autoRevert,m=e._dur,g=e._startAt,_=e._targets,p=e.parent,v=p&&p.data==="nested"?p.vars.targets:_,x=e._overwrite==="auto"&&!S0,S=e.timeline,E=r.easeReverse||f,T,A,y,w,b,P,D,z,X,U,B,F,L;if(S&&(!d||!s)&&(s="none"),e._ease=no(s,jl.ease),e._rEase=E&&(no(E)||e._ease),e._from=!S&&!!r.runBackwards,e._from&&(e.ratio=1),!S||d&&!r.stagger){if(z=_[0]?eo(_[0]).harness:0,F=z&&r[z.prop],T=yf(r,A0),g&&(g._zTime<0&&g.progress(1),n<0&&c&&a&&!h?g.render(-1,!0):g.revert(c&&m?Lc:SF),g._lazy=0),o){if(ys(e._startAt=Ht.set(_,ri({data:"isStart",overwrite:!1,parent:p,immediateRender:!0,lazy:!g&&Un(l),startAt:null,delay:0,onUpdate:u&&function(){return Zn(e,"onUpdate")},stagger:0},o))),e._startAt._dp=0,e._startAt._sat=e,n<0&&(sn||!a&&!h)&&e._startAt.revert(Lc),a&&m&&n<=0&&i<=0){n&&(e._zTime=n);return}}else if(c&&m&&!g){if(n&&(a=!1),y=ri({overwrite:!1,data:"isFromStart",lazy:a&&!g&&Un(l),immediateRender:a,stagger:0,parent:p},T),F&&(y[z.prop]=F),ys(e._startAt=Ht.set(_,y)),e._startAt._dp=0,e._startAt._sat=e,n<0&&(sn?e._startAt.revert(Lc):e._startAt.render(-1,!0)),e._zTime=n,!a)t(e._startAt,ut,ut);else if(!n)return}for(e._pt=e._ptCache=0,l=m&&Un(l)||l&&!m,A=0;A<_.length;A++){if(b=_[A],D=b._gsap||R0(_)[A]._gsap,e._ptLookup[A]=U={},Im[D.id]&&hs.length&&xf(),B=v===_?A:v.indexOf(b),z&&(X=new z).init(b,F||T,e,B,v)!==!1&&(e._pt=w=new On(e._pt,b,X.name,0,1,X.render,X,0,X.priority),X._props.forEach(function(Y){U[Y]=w}),X.priority&&(P=1)),!z||F)for(y in T)Yn[y]&&(X=AT(y,T,e,B,b,v))?X.priority&&(P=1):U[y]=w=P0.call(e,b,y,"get",T[y],B,v,0,r.stringFilter);e._op&&e._op[A]&&e.kill(b,e._op[A]),x&&e._pt&&(es=e,yt.killTweensOf(b,U,e.globalTime(n)),L=!e.parent,es=0),e._pt&&l&&(Im[D.id]=1)}P&&LT(e),e._onInit&&e._onInit(e)}e._onUpdate=u,e._initted=(!e._op||e._pt)&&!L,d&&n<=0&&S.render(mi,!0,!0)},KF=function(e,n,i,r,s,o,a,l){var u=(e._pt&&e._ptCache||(e._ptCache={}))[n],c,f,d,h;if(!u)for(u=e._ptCache[n]=[],d=e._ptLookup,h=e._targets.length;h--;){if(c=d[h][n],c&&c.d&&c.d._pt)for(c=c.d._pt;c&&c.p!==n&&c.fp!==n;)c=c._next;if(!c)return Bm=1,e.vars[n]="+=0",D0(e,a),Bm=0,l?Zl(n+" not eligible for reset. Try splitting into individual properties"):1;u.push(c)}for(h=u.length;h--;)f=u[h],c=f._pt||f,c.s=(r||r===0)&&!s?r:c.s+(r||0)+o*c.c,c.c=i-c.s,f.e&&(f.e=Ft(i)+pn(f.e)),f.b&&(f.b=c.s+pn(f.b))},jF=function(e,n){var i=e[0]?eo(e[0]).harness:0,r=i&&i.aliases,s,o,a,l;if(!r)return n;s=Ca({},n);for(o in r)if(o in s)for(l=r[o].split(","),a=l.length;a--;)s[l[a]]=s[o];return s},ZF=function(e,n,i,r){var s=n.ease||r||"power1.inOut",o,a;if(_n(n))a=i[e]||(i[e]=[]),n.forEach(function(l,u){return a.push({t:u/(n.length-1)*100,v:l,e:s})});else for(o in n)a=i[o]||(i[o]=[]),o==="ease"||a.push({t:parseFloat(e),v:n[o],e:s})},wl=function(e,n,i,r,s){return Lt(e)?e.call(n,i,r,s):Jt(e)&&~e.indexOf("random(")?Jl(e):e},CT=C0+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",RT={};Fn(CT+",id,stagger,delay,duration,paused,scrollTrigger",function(t){return RT[t]=1});var Ht=function(t){KE(e,t);function e(i,r,s,o){var a;typeof r=="number"&&(s.duration=r,r=s,s=null),a=t.call(this,o?r:El(r))||this;var l=a.vars,u=l.duration,c=l.delay,f=l.immediateRender,d=l.stagger,h=l.overwrite,m=l.keyframes,g=l.defaults,_=l.scrollTrigger,p=r.parent||yt,v=(_n(i)||ZE(i)?br(i[0]):"length"in r)?[i]:gi(i),x,S,E,T,A,y,w,b;if(a._targets=v.length?R0(v):Zl("GSAP target "+i+" not found. https://gsap.com",!ei.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=h,m||d||cc(u)||cc(c)){r=a.vars;var P=r.easeReverse||r.yoyoEase;if(x=a.timeline=new Rn({data:"nested",defaults:g||{},targets:p&&p.data==="nested"?p.vars.targets:v}),x.kill(),x.parent=x._dp=ur(a),x._start=0,d||cc(u)||cc(c)){if(T=v.length,w=d&&pT(d),nr(d))for(A in d)~CT.indexOf(A)&&(b||(b={}),b[A]=d[A]);for(S=0;S<T;S++)E=yf(r,RT),E.stagger=0,P&&(E.easeReverse=P),b&&Ca(E,b),y=v[S],E.duration=+wl(u,ur(a),S,y,v),E.delay=(+wl(c,ur(a),S,y,v)||0)-a._delay,!d&&T===1&&E.delay&&(a._delay=c=E.delay,a._start+=c,E.delay=0),x.to(y,E,w?w(S,y,v):0),x._ease=qe.none;x.duration()?u=c=0:a.timeline=0}else if(m){El(ri(x.vars.defaults,{ease:"none"})),x._ease=no(m.ease||r.ease||"none");var D=0,z,X,U;if(_n(m))m.forEach(function(B){return x.to(v,B,">")}),x.duration();else{E={};for(A in m)A==="ease"||A==="easeEach"||ZF(A,m[A],E,m.easeEach);for(A in E)for(z=E[A].sort(function(B,F){return B.t-F.t}),D=0,S=0;S<z.length;S++)X=z[S],U={ease:X.e,duration:(X.t-(S?z[S-1].t:0))/100*u},U[A]=X.v,x.to(v,U,D),D+=U.duration;x.duration()<u&&x.to({},{duration:u-x.duration()})}}u||a.duration(u=x.duration())}else a.timeline=0;return h===!0&&!S0&&(es=ur(a),yt.killTweensOf(v),es=0),Wi(p,ur(a),s),r.reversed&&a.reverse(),r.paused&&a.paused(!0),(f||!u&&!m&&a._start===vt(p._time)&&Un(f)&&CF(ur(a))&&p.data!=="nested")&&(a._tTime=-ut,a.render(Math.max(0,-c)||0)),_&&cT(ur(a),_),a}var n=e.prototype;return n.render=function(r,s,o){var a=this._time,l=this._tDur,u=this._dur,c=r<0,f=r>l-ut&&!c?l:r<ut?0:r,d,h,m,g,_,p,v,x;if(!u)bF(this,r,s,o);else if(f!==this._tTime||!r||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==c||this._lazy){if(d=f,x=this.timeline,this._repeat){if(g=u+this._rDelay,this._repeat<-1&&c)return this.totalTime(g*100+r,s,o);if(d=vt(f%g),f===l?(m=this._repeat,d=u):(_=vt(f/g),m=~~_,m&&m===_?(d=u,m--):d>u&&(d=u)),p=this._yoyo&&m&1,p&&(d=u-d),_=Ra(this._tTime,g),d===a&&!o&&this._initted&&m===_)return this._tTime=f,this;m!==_&&this.vars.repeatRefresh&&!p&&!this._lock&&d!==g&&this._initted&&(this._lock=o=1,this.render(vt(g*m),!0).invalidate()._lock=0)}if(!this._initted){if(fT(this,c?r:d,o,s,f))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&m!==_))return this;if(u!==this._dur)return this.render(r,s,o)}if(this._rEase){var S=d<a;if(S!==this._inv){var E=S?a:u-a;this._inv=S,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=a,this._invRecip=E?(S?-1:1)/E:0,this._invScale=S?-this.ratio:1-this.ratio,this._invEase=S?this._rEase:this._ease}this.ratio=v=this._invRatio+this._invScale*this._invEase((d-this._invTime)*this._invRecip)}else this.ratio=v=this._ease(d/u);if(this._from&&(this.ratio=v=1-v),this._tTime=f,this._time=d,!this._act&&this._ts&&(this._act=1,this._lazy=0),!a&&f&&!s&&!_&&(Zn(this,"onStart"),this._tTime!==f))return this;for(h=this._pt;h;)h.r(v,h.d),h=h._next;x&&x.render(r<0?r:x._dur*x._ease(d/this._dur),s,o)||this._startAt&&(this._zTime=r),this._onUpdate&&!s&&(c&&Nm(this,r,s,o),Zn(this,"onUpdate")),this._repeat&&m!==_&&this.vars.onRepeat&&!s&&this.parent&&Zn(this,"onRepeat"),(f===this._tDur||!f)&&this._tTime===f&&(c&&!this._onUpdate&&Nm(this,r,!0,!0),(r||!u)&&(f===this._tDur&&this._ts>0||!f&&this._ts<0)&&ys(this,1),!s&&!(c&&!a)&&(f||a||p)&&(Zn(this,f===l?"onComplete":"onReverseComplete",!0),this._prom&&!(f<l&&this.timeScale()>0)&&this._prom()))}return this},n.targets=function(){return this._targets},n.invalidate=function(r){return(!r||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(r),t.prototype.invalidate.call(this,r)},n.resetTo=function(r,s,o,a,l){eu||Kn.wake(),this._ts||this.play();var u=Math.min(this._dur,(this._dp._time-this._start)*this._ts),c;return this._initted||D0(this,u),c=this._ease(u/this._dur),KF(this,r,s,o,a,c,u,l)?this.resetTo(r,s,o,a,1):(nd(this,0),this.parent||lT(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},n.kill=function(r,s){if(s===void 0&&(s="all"),!r&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?ll(this):this.scrollTrigger&&this.scrollTrigger.kill(!!sn),this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(r,s,es&&es.vars.overwrite!==!0)._first||ll(this),this.parent&&o!==this.timeline.totalDuration()&&ba(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=r?gi(r):a,u=this._ptLookup,c=this._pt,f,d,h,m,g,_,p;if((!s||s==="all")&&wF(a,l))return s==="all"&&(this._pt=0),ll(this);for(f=this._op=this._op||[],s!=="all"&&(Jt(s)&&(g={},Fn(s,function(v){return g[v]=1}),s=g),s=jF(a,s)),p=a.length;p--;)if(~l.indexOf(a[p])){d=u[p],s==="all"?(f[p]=s,m=d,h={}):(h=f[p]=f[p]||{},m=s);for(g in m)_=d&&d[g],_&&((!("kill"in _.d)||_.d.kill(g)===!0)&&ed(this,_,"_pt"),delete d[g]),h!=="all"&&(h[g]=1)}return this._initted&&!this._pt&&c&&ll(this),this},e.to=function(r,s){return new e(r,s,arguments[2])},e.from=function(r,s){return Tl(1,arguments)},e.delayedCall=function(r,s,o,a){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:r,onComplete:s,onReverseComplete:s,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},e.fromTo=function(r,s,o){return Tl(2,arguments)},e.set=function(r,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(r,s)},e.killTweensOf=function(r,s,o){return yt.killTweensOf(r,s,o)},e}(tu);ri(Ht.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Fn("staggerTo,staggerFrom,staggerFromTo",function(t){Ht[t]=function(){var e=new Rn,n=Fm.call(arguments,0);return n.splice(t==="staggerFromTo"?5:4,0,0),e[t].apply(e,n)}});var L0=function(e,n,i){return e[n]=i},bT=function(e,n,i){return e[n](i)},QF=function(e,n,i,r){return e[n](r.fp,i)},JF=function(e,n,i){return e.setAttribute(n,i)},I0=function(e,n){return Lt(e[n])?bT:M0(e[n])&&e.setAttribute?JF:L0},PT=function(e,n){return n.set(n.t,n.p,Math.round((n.s+n.c*e)*1e6)/1e6,n)},eO=function(e,n){return n.set(n.t,n.p,!!(n.s+n.c*e),n)},DT=function(e,n){var i=n._pt,r="";if(!e&&n.b)r=n.b;else if(e===1&&n.e)r=n.e;else{for(;i;)r=i.p+(i.m?i.m(i.s+i.c*e):Math.round((i.s+i.c*e)*1e4)/1e4)+r,i=i._next;r+=n.c}n.set(n.t,n.p,r,n)},N0=function(e,n){for(var i=n._pt;i;)i.r(e,i.d),i=i._next},tO=function(e,n,i,r){for(var s=this._pt,o;s;)o=s._next,s.p===r&&s.modifier(e,n,i),s=o},nO=function(e){for(var n=this._pt,i,r;n;)r=n._next,n.p===e&&!n.op||n.op===e?ed(this,n,"_pt"):n.dep||(i=1),n=r;return!i},iO=function(e,n,i,r){r.mSet(e,n,r.m.call(r.tween,i,r.mt),r)},LT=function(e){for(var n=e._pt,i,r,s,o;n;){for(i=n._next,r=s;r&&r.pr>n.pr;)r=r._next;(n._prev=r?r._prev:o)?n._prev._next=n:s=n,(n._next=r)?r._prev=n:o=n,n=i}e._pt=s},On=function(){function t(n,i,r,s,o,a,l,u,c){this.t=i,this.s=s,this.c=o,this.p=r,this.r=a||PT,this.d=l||this,this.set=u||L0,this.pr=c||0,this._next=n,n&&(n._prev=this)}var e=t.prototype;return e.modifier=function(i,r,s){this.mSet=this.mSet||this.set,this.set=iO,this.m=i,this.mt=s,this.tween=r},t}();Fn(C0+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(t){return A0[t]=1});ii.TweenMax=ii.TweenLite=Ht;ii.TimelineLite=ii.TimelineMax=Rn;yt=new Rn({sortChildren:!1,defaults:jl,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});ei.stringFilter=ET;var io=[],Nc={},rO=[],yy=0,sO=0,Lh=function(e){return(Nc[e]||rO).map(function(n){return n()})},zm=function(){var e=Date.now(),n=[];e-yy>2&&(Lh("matchMediaInit"),io.forEach(function(i){var r=i.queries,s=i.conditions,o,a,l,u;for(a in r)o=zi.matchMedia(r[a]).matches,o&&(l=1),o!==s[a]&&(s[a]=o,u=1);u&&(i.revert(),l&&n.push(i))}),Lh("matchMediaRevert"),n.forEach(function(i){return i.onMatch(i,function(r){return i.add(null,r)})}),yy=e,Lh("matchMedia"))},IT=function(){function t(n,i){this.selector=i&&Om(i),this.data=[],this._r=[],this.isReverted=!1,this.id=sO++,n&&this.add(n)}var e=t.prototype;return e.add=function(i,r,s){Lt(i)&&(s=r,r=i,i=Lt);var o=this,a=function(){var u=_t,c=o.selector,f;return u&&u!==o&&u.data.push(o),s&&(o.selector=Om(s)),_t=o,f=r.apply(o,arguments),Lt(f)&&o._r.push(f),_t=u,o.selector=c,o.isReverted=!1,f};return o.last=a,i===Lt?a(o,function(l){return o.add(null,l)}):i?o[i]=a:a},e.ignore=function(i){var r=_t;_t=null,i(this),_t=r},e.getTweens=function(){var i=[];return this.data.forEach(function(r){return r instanceof t?i.push.apply(i,r.getTweens()):r instanceof Ht&&!(r.parent&&r.parent.data==="nested")&&i.push(r)}),i},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(i,r){var s=this;if(i?function(){for(var a=s.getTweens(),l=s.data.length,u;l--;)u=s.data[l],u.data==="isFlip"&&(u.revert(),u.getChildren(!0,!0,!1).forEach(function(c){return a.splice(a.indexOf(c),1)}));for(a.map(function(c){return{g:c._dur||c._delay||c._sat&&!c._sat.vars.immediateRender?c.globalTime(0):-1/0,t:c}}).sort(function(c,f){return f.g-c.g||-1/0}).forEach(function(c){return c.t.revert(i)}),l=s.data.length;l--;)u=s.data[l],u instanceof Rn?u.data!=="nested"&&(u.scrollTrigger&&u.scrollTrigger.revert(),u.kill()):!(u instanceof Ht)&&u.revert&&u.revert(i);s._r.forEach(function(c){return c(i,s)}),s.isReverted=!0}():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),r)for(var o=io.length;o--;)io[o].id===this.id&&io.splice(o,1)},e.revert=function(i){this.kill(i||{})},t}(),oO=function(){function t(n){this.contexts=[],this.scope=n,_t&&_t.data.push(this)}var e=t.prototype;return e.add=function(i,r,s){nr(i)||(i={matches:i});var o=new IT(0,s||this.scope),a=o.conditions={},l,u,c;_t&&!o.selector&&(o.selector=_t.selector),this.contexts.push(o),r=o.add("onMatch",r),o.queries=i;for(u in i)u==="all"?c=1:(l=zi.matchMedia(i[u]),l&&(io.indexOf(o)<0&&io.push(o),(a[u]=l.matches)&&(c=1),l.addListener?l.addListener(zm):l.addEventListener("change",zm)));return c&&r(o,function(f){return o.add(null,f)}),this},e.revert=function(i){this.kill(i||{})},e.kill=function(i){this.contexts.forEach(function(r){return r.kill(i,!0)})},t}(),Mf={registerPlugin:function(){for(var e=arguments.length,n=new Array(e),i=0;i<e;i++)n[i]=arguments[i];n.forEach(function(r){return yT(r)})},timeline:function(e){return new Rn(e)},getTweensOf:function(e,n){return yt.getTweensOf(e,n)},getProperty:function(e,n,i,r){Jt(e)&&(e=gi(e)[0]);var s=eo(e||{}).get,o=i?aT:oT;return i==="native"&&(i=""),e&&(n?o((Yn[n]&&Yn[n].get||s)(e,n,i,r)):function(a,l,u){return o((Yn[a]&&Yn[a].get||s)(e,a,l,u))})},quickSetter:function(e,n,i){if(e=gi(e),e.length>1){var r=e.map(function(c){return zn.quickSetter(c,n,i)}),s=r.length;return function(c){for(var f=s;f--;)r[f](c)}}e=e[0]||{};var o=Yn[n],a=eo(e),l=a.harness&&(a.harness.aliases||{})[n]||n,u=o?function(c){var f=new o;ta._pt=0,f.init(e,i?c+i:c,ta,0,[e]),f.render(1,f),ta._pt&&N0(1,ta)}:a.set(e,l);return o?u:function(c){return u(e,l,i?c+i:c,a,1)}},quickTo:function(e,n,i){var r,s=zn.to(e,ri((r={},r[n]="+=0.1",r.paused=!0,r.stagger=0,r),i||{})),o=function(l,u,c){return s.resetTo(n,l,u,c)};return o.tween=s,o},isTweening:function(e){return yt.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=no(e.ease,jl.ease)),my(jl,e||{})},config:function(e){return my(ei,e||{})},registerEffect:function(e){var n=e.name,i=e.effect,r=e.plugins,s=e.defaults,o=e.extendTimeline;(r||"").split(",").forEach(function(a){return a&&!Yn[a]&&!ii[a]&&Zl(n+" effect requires "+a+" plugin.")}),Rh[n]=function(a,l,u){return i(gi(a),ri(l||{},s),u)},o&&(Rn.prototype[n]=function(a,l,u){return this.add(Rh[n](a,nr(l)?l:(u=l)&&{},this),u)})},registerEase:function(e,n){qe[e]=no(n)},parseEase:function(e,n){return arguments.length?no(e,n):qe},getById:function(e){return yt.getById(e)},exportRoot:function(e,n){e===void 0&&(e={});var i=new Rn(e),r,s;for(i.smoothChildTiming=Un(e.smoothChildTiming),yt.remove(i),i._dp=0,i._time=i._tTime=yt._time,r=yt._first;r;)s=r._next,(n||!(!r._dur&&r instanceof Ht&&r.vars.onComplete===r._targets[0]))&&Wi(i,r,r._start-r._delay),r=s;return Wi(yt,i,0),i},context:function(e,n){return e?new IT(e,n):_t},matchMedia:function(e){return new oO(e)},matchMediaRefresh:function(){return io.forEach(function(e){var n=e.conditions,i,r;for(r in n)n[r]&&(n[r]=!1,i=1);i&&e.revert()})||zm()},addEventListener:function(e,n){var i=Nc[e]||(Nc[e]=[]);~i.indexOf(n)||i.push(n)},removeEventListener:function(e,n){var i=Nc[e],r=i&&i.indexOf(n);r>=0&&i.splice(r,1)},utils:{wrap:OF,wrapYoyo:kF,distribute:pT,random:gT,snap:mT,normalize:FF,getUnit:pn,clamp:LF,splitColor:ST,toArray:gi,selector:Om,mapRange:vT,pipe:NF,unitize:UF,interpolate:BF,shuffle:hT},install:tT,effects:Rh,ticker:Kn,updateRoot:Rn.updateRoot,plugins:Yn,globalTimeline:yt,core:{PropTween:On,globals:nT,Tween:Ht,Timeline:Rn,Animation:tu,getCache:eo,_removeLinkedListItem:ed,reverting:function(){return sn},context:function(e){return e&&_t&&(_t.data.push(e),e._ctx=_t),_t},suppressOverwrites:function(e){return S0=e}}};Fn("to,from,fromTo,delayedCall,set,killTweensOf",function(t){return Mf[t]=Ht[t]});Kn.add(Rn.updateRoot);ta=Mf.to({},{duration:0});var aO=function(e,n){for(var i=e._pt;i&&i.p!==n&&i.op!==n&&i.fp!==n;)i=i._next;return i},lO=function(e,n){var i=e._targets,r,s,o;for(r in n)for(s=i.length;s--;)o=e._ptLookup[s][r],o&&(o=o.d)&&(o._pt&&(o=aO(o,r)),o&&o.modifier&&o.modifier(n[r],e,i[s],r))},Ih=function(e,n){return{name:e,headless:1,rawVars:1,init:function(r,s,o){o._onInit=function(a){var l,u;if(Jt(s)&&(l={},Fn(s,function(c){return l[c]=1}),s=l),n){l={};for(u in s)l[u]=n(s[u]);s=l}lO(a,s)}}}},zn=Mf.registerPlugin({name:"attr",init:function(e,n,i,r,s){var o,a,l;this.tween=i;for(o in n)l=e.getAttribute(o)||"",a=this.add(e,"setAttribute",(l||0)+"",n[o],r,s,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(e,n){for(var i=n._pt;i;)sn?i.set(i.t,i.p,i.b,i):i.r(e,i.d),i=i._next}},{name:"endArray",headless:1,init:function(e,n){for(var i=n.length;i--;)this.add(e,i,e[i]||0,n[i],0,0,0,0,0,1)}},Ih("roundProps",km),Ih("modifiers"),Ih("snap",mT))||Mf;Ht.version=Rn.version=zn.version="3.15.0";eT=1;E0()&&Pa();qe.Power0;qe.Power1;qe.Power2;qe.Power3;qe.Power4;qe.Linear;qe.Quad;qe.Cubic;qe.Quart;qe.Quint;qe.Strong;qe.Elastic;qe.Back;qe.SteppedEase;qe.Bounce;qe.Sine;qe.Expo;qe.Circ;/*!
 * CSSPlugin 3.15.0
 * https://gsap.com
 *
 * Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Sy,ts,da,U0,Zs,My,F0,uO=function(){return typeof window<"u"},Pr={},Hs=180/Math.PI,ha=Math.PI/180,Oo=Math.atan2,Ey=1e8,O0=/([A-Z])/g,cO=/(left|right|width|margin|padding|x)/i,fO=/[\s,\(]\S/,qi={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Vm=function(e,n){return n.set(n.t,n.p,Math.round((n.s+n.c*e)*1e4)/1e4+n.u,n)},dO=function(e,n){return n.set(n.t,n.p,e===1?n.e:Math.round((n.s+n.c*e)*1e4)/1e4+n.u,n)},hO=function(e,n){return n.set(n.t,n.p,e?Math.round((n.s+n.c*e)*1e4)/1e4+n.u:n.b,n)},pO=function(e,n){return n.set(n.t,n.p,e===1?n.e:e?Math.round((n.s+n.c*e)*1e4)/1e4+n.u:n.b,n)},mO=function(e,n){var i=n.s+n.c*e;n.set(n.t,n.p,~~(i+(i<0?-.5:.5))+n.u,n)},NT=function(e,n){return n.set(n.t,n.p,e?n.e:n.b,n)},UT=function(e,n){return n.set(n.t,n.p,e!==1?n.b:n.e,n)},gO=function(e,n,i){return e.style[n]=i},_O=function(e,n,i){return e.style.setProperty(n,i)},vO=function(e,n,i){return e._gsap[n]=i},xO=function(e,n,i){return e._gsap.scaleX=e._gsap.scaleY=i},yO=function(e,n,i,r,s){var o=e._gsap;o.scaleX=o.scaleY=i,o.renderTransform(s,o)},SO=function(e,n,i,r,s){var o=e._gsap;o[n]=i,o.renderTransform(s,o)},Et="transform",kn=Et+"Origin",MO=function t(e,n){var i=this,r=this.target,s=r.style,o=r._gsap;if(e in Pr&&s){if(this.tfm=this.tfm||{},e!=="transform")e=qi[e]||e,~e.indexOf(",")?e.split(",").forEach(function(a){return i.tfm[a]=fr(r,a)}):this.tfm[e]=o.x?o[e]:fr(r,e),e===kn&&(this.tfm.zOrigin=o.zOrigin);else return qi.transform.split(",").forEach(function(a){return t.call(i,a,n)});if(this.props.indexOf(Et)>=0)return;o.svg&&(this.svgo=r.getAttribute("data-svg-origin"),this.props.push(kn,n,"")),e=Et}(s||n)&&this.props.push(e,n,s[e])},FT=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},EO=function(){var e=this.props,n=this.target,i=n.style,r=n._gsap,s,o;for(s=0;s<e.length;s+=3)e[s+1]?e[s+1]===2?n[e[s]](e[s+2]):n[e[s]]=e[s+2]:e[s+2]?i[e[s]]=e[s+2]:i.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(O0,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)r[o]=this.tfm[o];r.svg&&(r.renderTransform(),n.setAttribute("data-svg-origin",this.svgo||"")),s=F0(),(!s||!s.isStart)&&!i[Et]&&(FT(i),r.zOrigin&&i[kn]&&(i[kn]+=" "+r.zOrigin+"px",r.zOrigin=0,r.renderTransform()),r.uncache=1)}},OT=function(e,n){var i={target:e,props:[],revert:EO,save:MO};return e._gsap||zn.core.getCache(e),n&&e.style&&e.nodeType&&n.split(",").forEach(function(r){return i.save(r)}),i},kT,Hm=function(e,n){var i=ts.createElementNS?ts.createElementNS((n||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):ts.createElement(e);return i&&i.style?i:ts.createElement(e)},Qn=function t(e,n,i){var r=getComputedStyle(e);return r[n]||r.getPropertyValue(n.replace(O0,"-$1").toLowerCase())||r.getPropertyValue(n)||!i&&t(e,Da(n)||n,1)||""},Ty="O,Moz,ms,Ms,Webkit".split(","),Da=function(e,n,i){var r=n||Zs,s=r.style,o=5;if(e in s&&!i)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);o--&&!(Ty[o]+e in s););return o<0?null:(o===3?"ms":o>=0?Ty[o]:"")+e},Gm=function(){uO()&&window.document&&(Sy=window,ts=Sy.document,da=ts.documentElement,Zs=Hm("div")||{style:{}},Hm("div"),Et=Da(Et),kn=Et+"Origin",Zs.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",kT=!!Da("perspective"),F0=zn.core.reverting,U0=1)},wy=function(e){var n=e.ownerSVGElement,i=Hm("svg",n&&n.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),r=e.cloneNode(!0),s;r.style.display="block",i.appendChild(r),da.appendChild(i);try{s=r.getBBox()}catch{}return i.removeChild(r),da.removeChild(i),s},Ay=function(e,n){for(var i=n.length;i--;)if(e.hasAttribute(n[i]))return e.getAttribute(n[i])},BT=function(e){var n,i;try{n=e.getBBox()}catch{n=wy(e),i=1}return n&&(n.width||n.height)||i||(n=wy(e)),n&&!n.width&&!n.x&&!n.y?{x:+Ay(e,["x","cx","x1"])||0,y:+Ay(e,["y","cy","y1"])||0,width:0,height:0}:n},zT=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&BT(e))},Ss=function(e,n){if(n){var i=e.style,r;n in Pr&&n!==kn&&(n=Et),i.removeProperty?(r=n.substr(0,2),(r==="ms"||n.substr(0,6)==="webkit")&&(n="-"+n),i.removeProperty(r==="--"?n:n.replace(O0,"-$1").toLowerCase())):i.removeAttribute(n)}},ns=function(e,n,i,r,s,o){var a=new On(e._pt,n,i,0,1,o?UT:NT);return e._pt=a,a.b=r,a.e=s,e._props.push(i),a},Cy={deg:1,rad:1,turn:1},TO={grid:1,flex:1},Ms=function t(e,n,i,r){var s=parseFloat(i)||0,o=(i+"").trim().substr((s+"").length)||"px",a=Zs.style,l=cO.test(n),u=e.tagName.toLowerCase()==="svg",c=(u?"client":"offset")+(l?"Width":"Height"),f=100,d=r==="px",h=r==="%",m,g,_,p;if(r===o||!s||Cy[r]||Cy[o])return s;if(o!=="px"&&!d&&(s=t(e,n,i,"px")),p=e.getCTM&&zT(e),(h||o==="%")&&(Pr[n]||~n.indexOf("adius")))return m=p?e.getBBox()[l?"width":"height"]:e[c],Ft(h?s/m*f:s/100*m);if(a[l?"width":"height"]=f+(d?o:r),g=r!=="rem"&&~n.indexOf("adius")||r==="em"&&e.appendChild&&!u?e:e.parentNode,p&&(g=(e.ownerSVGElement||{}).parentNode),(!g||g===ts||!g.appendChild)&&(g=ts.body),_=g._gsap,_&&h&&_.width&&l&&_.time===Kn.time&&!_.uncache)return Ft(s/_.width*f);if(h&&(n==="height"||n==="width")){var v=e.style[n];e.style[n]=f+r,m=e[c],v?e.style[n]=v:Ss(e,n)}else(h||o==="%")&&!TO[Qn(g,"display")]&&(a.position=Qn(e,"position")),g===e&&(a.position="static"),g.appendChild(Zs),m=Zs[c],g.removeChild(Zs),a.position="absolute";return l&&h&&(_=eo(g),_.time=Kn.time,_.width=g[c]),Ft(d?m*s/f:m&&s?f/m*s:0)},fr=function(e,n,i,r){var s;return U0||Gm(),n in qi&&n!=="transform"&&(n=qi[n],~n.indexOf(",")&&(n=n.split(",")[0])),Pr[n]&&n!=="transform"?(s=iu(e,r),s=n!=="transformOrigin"?s[n]:s.svg?s.origin:Tf(Qn(e,kn))+" "+s.zOrigin+"px"):(s=e.style[n],(!s||s==="auto"||r||~(s+"").indexOf("calc("))&&(s=Ef[n]&&Ef[n](e,n,i)||Qn(e,n)||rT(e,n)||(n==="opacity"?1:0))),i&&!~(s+"").trim().indexOf(" ")?Ms(e,n,s,i)+i:s},wO=function(e,n,i,r){if(!i||i==="none"){var s=Da(n,e,1),o=s&&Qn(e,s,1);o&&o!==i?(n=s,i=o):n==="borderColor"&&(i=Qn(e,"borderTopColor"))}var a=new On(this._pt,e.style,n,0,1,DT),l=0,u=0,c,f,d,h,m,g,_,p,v,x,S,E;if(a.b=i,a.e=r,i+="",r+="",r.substring(0,6)==="var(--"&&(r=Qn(e,r.substring(4,r.indexOf(")")))),r==="auto"&&(g=e.style[n],e.style[n]=r,r=Qn(e,n)||r,g?e.style[n]=g:Ss(e,n)),c=[i,r],ET(c),i=c[0],r=c[1],d=i.match(ea)||[],E=r.match(ea)||[],E.length){for(;f=ea.exec(r);)_=f[0],v=r.substring(l,f.index),m?m=(m+1)%5:(v.substr(-5)==="rgba("||v.substr(-5)==="hsla(")&&(m=1),_!==(g=d[u++]||"")&&(h=parseFloat(g)||0,S=g.substr((h+"").length),_.charAt(1)==="="&&(_=fa(h,_)+S),p=parseFloat(_),x=_.substr((p+"").length),l=ea.lastIndex-x.length,x||(x=x||ei.units[n]||S,l===r.length&&(r+=x,a.e+=x)),S!==x&&(h=Ms(e,n,g,x)||0),a._pt={_next:a._pt,p:v||u===1?v:",",s:h,c:p-h,m:m&&m<4||n==="zIndex"?Math.round:0});a.c=l<r.length?r.substring(l,r.length):""}else a.r=n==="display"&&r==="none"?UT:NT;return JE.test(r)&&(a.e=0),this._pt=a,a},Ry={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},AO=function(e){var n=e.split(" "),i=n[0],r=n[1]||"50%";return(i==="top"||i==="bottom"||r==="left"||r==="right")&&(e=i,i=r,r=e),n[0]=Ry[i]||i,n[1]=Ry[r]||r,n.join(" ")},CO=function(e,n){if(n.tween&&n.tween._time===n.tween._dur){var i=n.t,r=i.style,s=n.u,o=i._gsap,a,l,u;if(s==="all"||s===!0)r.cssText="",l=1;else for(s=s.split(","),u=s.length;--u>-1;)a=s[u],Pr[a]&&(l=1,a=a==="transformOrigin"?kn:Et),Ss(i,a);l&&(Ss(i,Et),o&&(o.svg&&i.removeAttribute("transform"),r.scale=r.rotate=r.translate="none",iu(i,1),o.uncache=1,FT(r)))}},Ef={clearProps:function(e,n,i,r,s){if(s.data!=="isFromStart"){var o=e._pt=new On(e._pt,n,i,0,0,CO);return o.u=r,o.pr=-10,o.tween=s,e._props.push(i),1}}},nu=[1,0,0,1,0,0],VT={},HT=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},by=function(e){var n=Qn(e,Et);return HT(n)?nu:n.substr(7).match(QE).map(Ft)},k0=function(e,n){var i=e._gsap||eo(e),r=e.style,s=by(e),o,a,l,u;return i.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?nu:s):(s===nu&&!e.offsetParent&&e!==da&&!i.svg&&(l=r.display,r.display="block",o=e.parentNode,(!o||!e.offsetParent&&!e.getBoundingClientRect().width)&&(u=1,a=e.nextElementSibling,da.appendChild(e)),s=by(e),l?r.display=l:Ss(e,"display"),u&&(a?o.insertBefore(e,a):o?o.appendChild(e):da.removeChild(e))),n&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},Wm=function(e,n,i,r,s,o){var a=e._gsap,l=s||k0(e,!0),u=a.xOrigin||0,c=a.yOrigin||0,f=a.xOffset||0,d=a.yOffset||0,h=l[0],m=l[1],g=l[2],_=l[3],p=l[4],v=l[5],x=n.split(" "),S=parseFloat(x[0])||0,E=parseFloat(x[1])||0,T,A,y,w;i?l!==nu&&(A=h*_-m*g)&&(y=S*(_/A)+E*(-g/A)+(g*v-_*p)/A,w=S*(-m/A)+E*(h/A)-(h*v-m*p)/A,S=y,E=w):(T=BT(e),S=T.x+(~x[0].indexOf("%")?S/100*T.width:S),E=T.y+(~(x[1]||x[0]).indexOf("%")?E/100*T.height:E)),r||r!==!1&&a.smooth?(p=S-u,v=E-c,a.xOffset=f+(p*h+v*g)-p,a.yOffset=d+(p*m+v*_)-v):a.xOffset=a.yOffset=0,a.xOrigin=S,a.yOrigin=E,a.smooth=!!r,a.origin=n,a.originIsAbsolute=!!i,e.style[kn]="0px 0px",o&&(ns(o,a,"xOrigin",u,S),ns(o,a,"yOrigin",c,E),ns(o,a,"xOffset",f,a.xOffset),ns(o,a,"yOffset",d,a.yOffset)),e.setAttribute("data-svg-origin",S+" "+E)},iu=function(e,n){var i=e._gsap||new wT(e);if("x"in i&&!n&&!i.uncache)return i;var r=e.style,s=i.scaleX<0,o="px",a="deg",l=getComputedStyle(e),u=Qn(e,kn)||"0",c,f,d,h,m,g,_,p,v,x,S,E,T,A,y,w,b,P,D,z,X,U,B,F,L,Y,Q,Z,ne,Oe,Fe,Ne;return c=f=d=g=_=p=v=x=S=0,h=m=1,i.svg=!!(e.getCTM&&zT(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(r[Et]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[Et]!=="none"?l[Et]:"")),r.scale=r.rotate=r.translate="none"),A=k0(e,i.svg),i.svg&&(i.uncache?(L=e.getBBox(),u=i.xOrigin-L.x+"px "+(i.yOrigin-L.y)+"px",F=""):F=!n&&e.getAttribute("data-svg-origin"),Wm(e,F||u,!!F||i.originIsAbsolute,i.smooth!==!1,A)),E=i.xOrigin||0,T=i.yOrigin||0,A!==nu&&(P=A[0],D=A[1],z=A[2],X=A[3],c=U=A[4],f=B=A[5],A.length===6?(h=Math.sqrt(P*P+D*D),m=Math.sqrt(X*X+z*z),g=P||D?Oo(D,P)*Hs:0,v=z||X?Oo(z,X)*Hs+g:0,v&&(m*=Math.abs(Math.cos(v*ha))),i.svg&&(c-=E-(E*P+T*z),f-=T-(E*D+T*X))):(Ne=A[6],Oe=A[7],Q=A[8],Z=A[9],ne=A[10],Fe=A[11],c=A[12],f=A[13],d=A[14],y=Oo(Ne,ne),_=y*Hs,y&&(w=Math.cos(-y),b=Math.sin(-y),F=U*w+Q*b,L=B*w+Z*b,Y=Ne*w+ne*b,Q=U*-b+Q*w,Z=B*-b+Z*w,ne=Ne*-b+ne*w,Fe=Oe*-b+Fe*w,U=F,B=L,Ne=Y),y=Oo(-z,ne),p=y*Hs,y&&(w=Math.cos(-y),b=Math.sin(-y),F=P*w-Q*b,L=D*w-Z*b,Y=z*w-ne*b,Fe=X*b+Fe*w,P=F,D=L,z=Y),y=Oo(D,P),g=y*Hs,y&&(w=Math.cos(y),b=Math.sin(y),F=P*w+D*b,L=U*w+B*b,D=D*w-P*b,B=B*w-U*b,P=F,U=L),_&&Math.abs(_)+Math.abs(g)>359.9&&(_=g=0,p=180-p),h=Ft(Math.sqrt(P*P+D*D+z*z)),m=Ft(Math.sqrt(B*B+Ne*Ne)),y=Oo(U,B),v=Math.abs(y)>2e-4?y*Hs:0,S=Fe?1/(Fe<0?-Fe:Fe):0),i.svg&&(F=e.getAttribute("transform"),i.forceCSS=e.setAttribute("transform","")||!HT(Qn(e,Et)),F&&e.setAttribute("transform",F))),Math.abs(v)>90&&Math.abs(v)<270&&(s?(h*=-1,v+=g<=0?180:-180,g+=g<=0?180:-180):(m*=-1,v+=v<=0?180:-180)),n=n||i.uncache,i.x=c-((i.xPercent=c&&(!n&&i.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-c)?-50:0)))?e.offsetWidth*i.xPercent/100:0)+o,i.y=f-((i.yPercent=f&&(!n&&i.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-f)?-50:0)))?e.offsetHeight*i.yPercent/100:0)+o,i.z=d+o,i.scaleX=Ft(h),i.scaleY=Ft(m),i.rotation=Ft(g)+a,i.rotationX=Ft(_)+a,i.rotationY=Ft(p)+a,i.skewX=v+a,i.skewY=x+a,i.transformPerspective=S+o,(i.zOrigin=parseFloat(u.split(" ")[2])||!n&&i.zOrigin||0)&&(r[kn]=Tf(u)),i.xOffset=i.yOffset=0,i.force3D=ei.force3D,i.renderTransform=i.svg?bO:kT?GT:RO,i.uncache=0,i},Tf=function(e){return(e=e.split(" "))[0]+" "+e[1]},Nh=function(e,n,i){var r=pn(n);return Ft(parseFloat(n)+parseFloat(Ms(e,"x",i+"px",r)))+r},RO=function(e,n){n.z="0px",n.rotationY=n.rotationX="0deg",n.force3D=0,GT(e,n)},Ns="0deg",el="0px",Us=") ",GT=function(e,n){var i=n||this,r=i.xPercent,s=i.yPercent,o=i.x,a=i.y,l=i.z,u=i.rotation,c=i.rotationY,f=i.rotationX,d=i.skewX,h=i.skewY,m=i.scaleX,g=i.scaleY,_=i.transformPerspective,p=i.force3D,v=i.target,x=i.zOrigin,S="",E=p==="auto"&&e&&e!==1||p===!0;if(x&&(f!==Ns||c!==Ns)){var T=parseFloat(c)*ha,A=Math.sin(T),y=Math.cos(T),w;T=parseFloat(f)*ha,w=Math.cos(T),o=Nh(v,o,A*w*-x),a=Nh(v,a,-Math.sin(T)*-x),l=Nh(v,l,y*w*-x+x)}_!==el&&(S+="perspective("+_+Us),(r||s)&&(S+="translate("+r+"%, "+s+"%) "),(E||o!==el||a!==el||l!==el)&&(S+=l!==el||E?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+Us),u!==Ns&&(S+="rotate("+u+Us),c!==Ns&&(S+="rotateY("+c+Us),f!==Ns&&(S+="rotateX("+f+Us),(d!==Ns||h!==Ns)&&(S+="skew("+d+", "+h+Us),(m!==1||g!==1)&&(S+="scale("+m+", "+g+Us),v.style[Et]=S||"translate(0, 0)"},bO=function(e,n){var i=n||this,r=i.xPercent,s=i.yPercent,o=i.x,a=i.y,l=i.rotation,u=i.skewX,c=i.skewY,f=i.scaleX,d=i.scaleY,h=i.target,m=i.xOrigin,g=i.yOrigin,_=i.xOffset,p=i.yOffset,v=i.forceCSS,x=parseFloat(o),S=parseFloat(a),E,T,A,y,w;l=parseFloat(l),u=parseFloat(u),c=parseFloat(c),c&&(c=parseFloat(c),u+=c,l+=c),l||u?(l*=ha,u*=ha,E=Math.cos(l)*f,T=Math.sin(l)*f,A=Math.sin(l-u)*-d,y=Math.cos(l-u)*d,u&&(c*=ha,w=Math.tan(u-c),w=Math.sqrt(1+w*w),A*=w,y*=w,c&&(w=Math.tan(c),w=Math.sqrt(1+w*w),E*=w,T*=w)),E=Ft(E),T=Ft(T),A=Ft(A),y=Ft(y)):(E=f,y=d,T=A=0),(x&&!~(o+"").indexOf("px")||S&&!~(a+"").indexOf("px"))&&(x=Ms(h,"x",o,"px"),S=Ms(h,"y",a,"px")),(m||g||_||p)&&(x=Ft(x+m-(m*E+g*A)+_),S=Ft(S+g-(m*T+g*y)+p)),(r||s)&&(w=h.getBBox(),x=Ft(x+r/100*w.width),S=Ft(S+s/100*w.height)),w="matrix("+E+","+T+","+A+","+y+","+x+","+S+")",h.setAttribute("transform",w),v&&(h.style[Et]=w)},PO=function(e,n,i,r,s){var o=360,a=Jt(s),l=parseFloat(s)*(a&&~s.indexOf("rad")?Hs:1),u=l-r,c=r+u+"deg",f,d;return a&&(f=s.split("_")[1],f==="short"&&(u%=o,u!==u%(o/2)&&(u+=u<0?o:-o)),f==="cw"&&u<0?u=(u+o*Ey)%o-~~(u/o)*o:f==="ccw"&&u>0&&(u=(u-o*Ey)%o-~~(u/o)*o)),e._pt=d=new On(e._pt,n,i,r,u,dO),d.e=c,d.u="deg",e._props.push(i),d},Py=function(e,n){for(var i in n)e[i]=n[i];return e},DO=function(e,n,i){var r=Py({},i._gsap),s="perspective,force3D,transformOrigin,svgOrigin",o=i.style,a,l,u,c,f,d,h,m;r.svg?(u=i.getAttribute("transform"),i.setAttribute("transform",""),o[Et]=n,a=iu(i,1),Ss(i,Et),i.setAttribute("transform",u)):(u=getComputedStyle(i)[Et],o[Et]=n,a=iu(i,1),o[Et]=u);for(l in Pr)u=r[l],c=a[l],u!==c&&s.indexOf(l)<0&&(h=pn(u),m=pn(c),f=h!==m?Ms(i,l,u,m):parseFloat(u),d=parseFloat(c),e._pt=new On(e._pt,a,l,f,d-f,Vm),e._pt.u=m||0,e._props.push(l));Py(a,r)};Fn("padding,margin,Width,Radius",function(t,e){var n="Top",i="Right",r="Bottom",s="Left",o=(e<3?[n,i,r,s]:[n+s,n+i,r+i,r+s]).map(function(a){return e<2?t+a:"border"+a+t});Ef[e>1?"border"+t:t]=function(a,l,u,c,f){var d,h;if(arguments.length<4)return d=o.map(function(m){return fr(a,m,u)}),h=d.join(" "),h.split(d[0]).length===5?d[0]:h;d=(c+"").split(" "),h={},o.forEach(function(m,g){return h[m]=d[g]=d[g]||d[(g-1)/2|0]}),a.init(l,h,f)}});var WT={name:"css",register:Gm,targetTest:function(e){return e.style&&e.nodeType},init:function(e,n,i,r,s){var o=this._props,a=e.style,l=i.vars.startAt,u,c,f,d,h,m,g,_,p,v,x,S,E,T,A,y,w;U0||Gm(),this.styles=this.styles||OT(e),y=this.styles.props,this.tween=i;for(g in n)if(g!=="autoRound"&&(c=n[g],!(Yn[g]&&AT(g,n,i,r,e,s)))){if(h=typeof c,m=Ef[g],h==="function"&&(c=c.call(i,r,e,s),h=typeof c),h==="string"&&~c.indexOf("random(")&&(c=Jl(c)),m)m(this,e,g,c,i)&&(A=1);else if(g.substr(0,2)==="--")u=(getComputedStyle(e).getPropertyValue(g)+"").trim(),c+="",ps.lastIndex=0,ps.test(u)||(_=pn(u),p=pn(c),p?_!==p&&(u=Ms(e,g,u,p)+p):_&&(c+=_)),this.add(a,"setProperty",u,c,r,s,0,0,g),o.push(g),y.push(g,0,a[g]);else if(h!=="undefined"){if(l&&g in l?(u=typeof l[g]=="function"?l[g].call(i,r,e,s):l[g],Jt(u)&&~u.indexOf("random(")&&(u=Jl(u)),pn(u+"")||u==="auto"||(u+=ei.units[g]||pn(fr(e,g))||""),(u+"").charAt(1)==="="&&(u=fr(e,g))):u=fr(e,g),d=parseFloat(u),v=h==="string"&&c.charAt(1)==="="&&c.substr(0,2),v&&(c=c.substr(2)),f=parseFloat(c),g in qi&&(g==="autoAlpha"&&(d===1&&fr(e,"visibility")==="hidden"&&f&&(d=0),y.push("visibility",0,a.visibility),ns(this,a,"visibility",d?"inherit":"hidden",f?"inherit":"hidden",!f)),g!=="scale"&&g!=="transform"&&(g=qi[g],~g.indexOf(",")&&(g=g.split(",")[0]))),x=g in Pr,x){if(this.styles.save(g),w=c,h==="string"&&c.substring(0,6)==="var(--"){if(c=Qn(e,c.substring(4,c.indexOf(")"))),c.substring(0,5)==="calc("){var b=e.style.perspective;e.style.perspective=c,c=Qn(e,"perspective"),b?e.style.perspective=b:Ss(e,"perspective")}f=parseFloat(c)}if(S||(E=e._gsap,E.renderTransform&&!n.parseTransform||iu(e,n.parseTransform),T=n.smoothOrigin!==!1&&E.smooth,S=this._pt=new On(this._pt,a,Et,0,1,E.renderTransform,E,0,-1),S.dep=1),g==="scale")this._pt=new On(this._pt,E,"scaleY",E.scaleY,(v?fa(E.scaleY,v+f):f)-E.scaleY||0,Vm),this._pt.u=0,o.push("scaleY",g),g+="X";else if(g==="transformOrigin"){y.push(kn,0,a[kn]),c=AO(c),E.svg?Wm(e,c,0,T,0,this):(p=parseFloat(c.split(" ")[2])||0,p!==E.zOrigin&&ns(this,E,"zOrigin",E.zOrigin,p),ns(this,a,g,Tf(u),Tf(c)));continue}else if(g==="svgOrigin"){Wm(e,c,1,T,0,this);continue}else if(g in VT){PO(this,E,g,d,v?fa(d,v+c):c);continue}else if(g==="smoothOrigin"){ns(this,E,"smooth",E.smooth,c);continue}else if(g==="force3D"){E[g]=c;continue}else if(g==="transform"){DO(this,c,e);continue}}else g in a||(g=Da(g)||g);if(x||(f||f===0)&&(d||d===0)&&!fO.test(c)&&g in a)_=(u+"").substr((d+"").length),f||(f=0),p=pn(c)||(g in ei.units?ei.units[g]:_),_!==p&&(d=Ms(e,g,u,p)),this._pt=new On(this._pt,x?E:a,g,d,(v?fa(d,v+f):f)-d,!x&&(p==="px"||g==="zIndex")&&n.autoRound!==!1?mO:Vm),this._pt.u=p||0,x&&w!==c?(this._pt.b=u,this._pt.e=w,this._pt.r=pO):_!==p&&p!=="%"&&(this._pt.b=u,this._pt.r=hO);else if(g in a)wO.call(this,e,g,u,v?v+c:c);else if(g in e)this.add(e,g,u||e[g],v?v+c:c,r,s);else if(g!=="parseTransform"){w0(g,c);continue}x||(g in a?y.push(g,0,a[g]):typeof e[g]=="function"?y.push(g,2,e[g]()):y.push(g,1,u||e[g])),o.push(g)}}A&&LT(this)},render:function(e,n){if(n.tween._time||!F0())for(var i=n._pt;i;)i.r(e,i.d),i=i._next;else n.styles.revert()},get:fr,aliases:qi,getSetter:function(e,n,i){var r=qi[n];return r&&r.indexOf(",")<0&&(n=r),n in Pr&&n!==kn&&(e._gsap.x||fr(e,"x"))?i&&My===i?n==="scale"?xO:vO:(My=i||{})&&(n==="scale"?yO:SO):e.style&&!M0(e.style[n])?gO:~n.indexOf("-")?_O:I0(e,n)},core:{_removeProperty:Ss,_getMatrix:k0}};zn.utils.checkPrefix=Da;zn.core.getStyleSaver=OT;(function(t,e,n,i){var r=Fn(t+","+e+","+n,function(s){Pr[s]=1});Fn(e,function(s){ei.units[s]="deg",VT[s]=1}),qi[r[13]]=t+","+e,Fn(i,function(s){var o=s.split(":");qi[o[1]]=r[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Fn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(t){ei.units[t]="px"});zn.registerPlugin(WT);var id=zn.registerPlugin(WT)||zn;id.core.Tween;/*!
 * @gsap/react 2.1.2
 * https://gsap.com
 *
 * Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/let Dy=typeof document<"u"?oe.useLayoutEffect:oe.useEffect,Ly=t=>t&&!Array.isArray(t)&&typeof t=="object",fc=[],LO={},XT=id;const rd=(t,e=fc)=>{let n=LO;Ly(t)?(n=t,t=null,e="dependencies"in n?n.dependencies:fc):Ly(e)&&(n=e,e="dependencies"in n?n.dependencies:fc),t&&typeof t!="function"&&console.warn("First parameter must be a function or config object");const{scope:i,revertOnUpdate:r}=n,s=oe.useRef(!1),o=oe.useRef(XT.context(()=>{},i)),a=oe.useRef(u=>o.current.add(null,u)),l=e&&e.length&&!r;return l&&Dy(()=>(s.current=!0,()=>o.current.revert()),fc),Dy(()=>{if(t&&o.current.add(t,i),!l||!s.current)return()=>o.current.revert()},e),{context:o.current,contextSafe:a.current}};rd.register=t=>{XT=t};rd.headless=!0;id.registerPlugin(rd);const YT=({words:t=["Frontend Engineer","UI Designer","Web Developer","Creative Technologist"],className:e="",color:n="#e4ded7"})=>{const i=oe.useRef(null);return rd(()=>{const r=id.timeline({repeat:-1}),s=.7,o=1.3,a=.07;t.forEach((l,u)=>{const c=u*(o+s);r.fromTo(`.word-${u} .char`,{opacity:0,y:10},{opacity:1,y:0,duration:.4,stagger:a,ease:"power2.out"},c),r.to(`.word-${u} .char`,{opacity:0,y:-5,duration:.4,stagger:a,ease:"power2.in"},c+.9)})},{scope:i,dependencies:[t]}),He.jsx("div",{ref:i,className:`flex flex-col gap-y-6 w-full ${e}`,children:He.jsx("div",{className:"relative h-16 flex items-center justify-center",children:t.map((r,s)=>He.jsx("span",{className:`word-${s} absolute text-4xl tracking-wider font-bold flex gap-x-1`,style:{color:n,fontFamily:'"Montserrat", sans-serif'},children:r.split("").map((o,a)=>He.jsx("span",{className:"char",children:o===" "?" ":o},a))},s))})})},IO=()=>He.jsx(Wr.div,{className:"fixed inset-0 w-screen h-screen flex items-center justify-center z-[9999]",style:{backgroundColor:"#e4ded7"},initial:{opacity:1},animate:{opacity:1},exit:{opacity:0},transition:{duration:1.8,ease:"easeInOut"},children:He.jsxs("div",{className:"flex flex-col items-center justify-center gap-8",children:[He.jsx(YT,{words:["Loading","Crafting","Creating","Building"],color:"#0a0a0a"}),He.jsx("p",{className:"text-gray-600 text-sm tracking-widest",style:{fontFamily:'"Montserrat", sans-serif'},children:"Preparing something amazing..."})]})}),NO="/assets/Avatar-81b82912.webp";function UO(){const[t,e]=oe.useState(!0);return oe.useEffect(()=>{const n=setTimeout(()=>e(!1),2800);return()=>clearTimeout(n)},[]),oe.useEffect(()=>{const n=document.createElement("div");n.className="custom-cursor",document.body.appendChild(n);let i=-100,r=-100,s;const o=u=>{i=u.clientX,r=u.clientY,n.style.opacity="1"},a=()=>{n.style.opacity="0"},l=()=>{n.style.transform=`translate(${i}px, ${r}px) translate(-50%, -50%)`,s=requestAnimationFrame(l)};return s=requestAnimationFrame(l),window.addEventListener("mousemove",o),document.documentElement.addEventListener("mouseleave",a),()=>{cancelAnimationFrame(s),window.removeEventListener("mousemove",o),document.documentElement.removeEventListener("mouseleave",a),n.remove()}},[]),He.jsxs(He.Fragment,{children:[He.jsx(G3,{children:t&&He.jsx(IO,{},"loading")}),!t&&He.jsxs(Wr.div,{className:"relative w-screen h-screen overflow-hidden",initial:{opacity:0},animate:{opacity:1},transition:{duration:1.8,ease:"easeInOut"},children:[He.jsx(Wr.div,{initial:{opacity:0},animate:{opacity:1},transition:{duration:1,ease:"easeOut"},children:He.jsx(dF,{})}),He.jsx("div",{className:"absolute inset-0 z-5 pointer-events-none",style:{background:"radial-gradient(circle at center, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.4) 100%)"}}),He.jsxs("div",{className:"relative z-10 w-full h-full flex flex-col justify-center items-center",children:[He.jsxs(Wr.nav,{initial:{opacity:0,y:-20},animate:{opacity:1,y:0},transition:{delay:.2,duration:.6,ease:"easeOut"},className:"fixed top-0 left-0 right-0 z-50 w-full px-8 py-6 flex justify-between items-center",children:[He.jsx("button",{className:"border-2 border-[#e4ded7] text-[#e4ded7] px-6 py-2 rounded-lg hover:bg-[#e4ded7] hover:text-black transition-all duration-300",style:{fontFamily:'"Montserrat", sans-serif',fontWeight:700},children:"BOOK A CALL"}),He.jsxs("div",{className:"flex gap-8 text-[#e4ded7]",style:{fontFamily:'"Montserrat", sans-serif',fontWeight:700},children:[He.jsx("a",{href:"#",className:"hover:opacity-70 transition",children:"STUDIO"}),He.jsx("a",{href:"#",className:"hover:opacity-70 transition",children:"LINKEDIN"})]})]}),He.jsxs("div",{className:"relative w-full max-w-7xl px-8 flex flex-col justify-center items-center",children:[He.jsx("div",{className:"relative w-full flex justify-center items-center",style:{perspective:"1000px"},children:He.jsxs(Wr.h1,{initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{delay:.3,duration:.8,ease:"easeOut"},className:"text-[56px] sm:text-[72px] md:text-[140px] lg:text-[160px] xl:text-[180px] text-[#e4ded7] text-center leading-none relative z-5",style:{fontFamily:'"Montserrat", "HelveticaNow Display", sans-serif',fontWeight:700,letterSpacing:"-0.04em",lineHeight:"0.95"},children:[He.jsx("span",{className:"block",children:"Hafiz"}),He.jsxs("span",{className:"relative inline-grid place-items-center",children:[He.jsx("span",{className:"col-start-1 row-start-1",children:"Muhammad"}),He.jsx(Wr.div,{initial:{opacity:0,scale:.8},animate:{opacity:1,scale:1},transition:{delay:.5,duration:.7,ease:"easeOut"},className:"col-start-1 row-start-1 z-10",style:{width:"240px",height:"240px",marginTop:"28px"},children:He.jsx("img",{src:NO,alt:"Avatar",className:"w-full h-full rounded-2xl shadow-2xl object-cover grayscale hover:grayscale-0 transition duration-300 ease-in-out",style:{boxShadow:"0 30px 60px rgba(0, 0, 0, 0.7), 0 0 40px rgba(201, 168, 118, 0.3)"}})})]})]})}),He.jsx(Wr.div,{initial:{opacity:0},animate:{opacity:1},transition:{delay:.6,duration:.6,ease:"easeOut"},className:"w-full relative z-10",children:He.jsx(YT,{words:["Frontend Engineer","UI Designer","Web Developer","Creative Technologist"]})}),He.jsxs(Wr.div,{initial:{opacity:0},animate:{opacity:1},transition:{delay:.7,duration:.8,ease:"easeOut"},className:"flex justify-between gap-20 w-full mt-32 px-4 relative z-10",children:[He.jsx("p",{className:"text-lg md:text-xl leading-relaxed text-[#e4ded7] opacity-80 max-w-md",children:"I currently work as a Frontend Engineer at Freelancer, currently available for work."}),He.jsx("p",{className:"text-lg md:text-xl leading-relaxed text-[#e4ded7] opacity-80 max-w-md text-right",children:"Focused on interfaces and experiences, working remotely from Karaci, Pakistan."})]})]})]})]})]})}Uh.createRoot(document.getElementById("root")).render(He.jsx(Km.StrictMode,{children:He.jsx(UO,{})}));
