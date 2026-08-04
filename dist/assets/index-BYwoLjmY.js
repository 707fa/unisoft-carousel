function gy(e,n){for(var t=0;t<n.length;t++){const r=n[t];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const l=Object.getOwnPropertyDescriptor(r,i);l&&Object.defineProperty(e,i,l.get?l:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const l of i)if(l.type==="childList")for(const a of l.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function t(i){const l={};return i.integrity&&(l.integrity=i.integrity),i.referrerPolicy&&(l.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?l.credentials="include":i.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(i){if(i.ep)return;i.ep=!0;const l=t(i);fetch(i.href,l)}})();var Ll=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function ls(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var hp={exports:{}},pa={},mp={exports:{}},fe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ui=Symbol.for("react.element"),yy=Symbol.for("react.portal"),vy=Symbol.for("react.fragment"),ky=Symbol.for("react.strict_mode"),xy=Symbol.for("react.profiler"),wy=Symbol.for("react.provider"),_y=Symbol.for("react.context"),Sy=Symbol.for("react.forward_ref"),Cy=Symbol.for("react.suspense"),by=Symbol.for("react.memo"),Ey=Symbol.for("react.lazy"),Ec=Symbol.iterator;function Ty(e){return e===null||typeof e!="object"?null:(e=Ec&&e[Ec]||e["@@iterator"],typeof e=="function"?e:null)}var gp={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},yp=Object.assign,vp={};function Mr(e,n,t){this.props=e,this.context=n,this.refs=vp,this.updater=t||gp}Mr.prototype.isReactComponent={};Mr.prototype.setState=function(e,n){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,n,"setState")};Mr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function kp(){}kp.prototype=Mr.prototype;function as(e,n,t){this.props=e,this.context=n,this.refs=vp,this.updater=t||gp}var os=as.prototype=new kp;os.constructor=as;yp(os,Mr.prototype);os.isPureReactComponent=!0;var Tc=Array.isArray,xp=Object.prototype.hasOwnProperty,us={current:null},wp={key:!0,ref:!0,__self:!0,__source:!0};function _p(e,n,t){var r,i={},l=null,a=null;if(n!=null)for(r in n.ref!==void 0&&(a=n.ref),n.key!==void 0&&(l=""+n.key),n)xp.call(n,r)&&!wp.hasOwnProperty(r)&&(i[r]=n[r]);var o=arguments.length-2;if(o===1)i.children=t;else if(1<o){for(var u=Array(o),s=0;s<o;s++)u[s]=arguments[s+2];i.children=u}if(e&&e.defaultProps)for(r in o=e.defaultProps,o)i[r]===void 0&&(i[r]=o[r]);return{$$typeof:Ui,type:e,key:l,ref:a,props:i,_owner:us.current}}function zy(e,n){return{$$typeof:Ui,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}function ss(e){return typeof e=="object"&&e!==null&&e.$$typeof===Ui}function Ay(e){var n={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(t){return n[t]})}var zc=/\/+/g;function qa(e,n){return typeof e=="object"&&e!==null&&e.key!=null?Ay(""+e.key):n.toString(36)}function xl(e,n,t,r,i){var l=typeof e;(l==="undefined"||l==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(l){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case Ui:case yy:a=!0}}if(a)return a=e,i=i(a),e=r===""?"."+qa(a,0):r,Tc(i)?(t="",e!=null&&(t=e.replace(zc,"$&/")+"/"),xl(i,n,t,"",function(s){return s})):i!=null&&(ss(i)&&(i=zy(i,t+(!i.key||a&&a.key===i.key?"":(""+i.key).replace(zc,"$&/")+"/")+e)),n.push(i)),1;if(a=0,r=r===""?".":r+":",Tc(e))for(var o=0;o<e.length;o++){l=e[o];var u=r+qa(l,o);a+=xl(l,n,t,u,i)}else if(u=Ty(e),typeof u=="function")for(e=u.call(e),o=0;!(l=e.next()).done;)l=l.value,u=r+qa(l,o++),a+=xl(l,n,t,u,i);else if(l==="object")throw n=String(e),Error("Objects are not valid as a React child (found: "+(n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n)+"). If you meant to render a collection of children, use an array instead.");return a}function Gi(e,n,t){if(e==null)return e;var r=[],i=0;return xl(e,r,"","",function(l){return n.call(t,l,i++)}),r}function jy(e){if(e._status===-1){var n=e._result;n=n(),n.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=n)}if(e._status===1)return e._result.default;throw e._result}var tn={current:null},wl={transition:null},Py={ReactCurrentDispatcher:tn,ReactCurrentBatchConfig:wl,ReactCurrentOwner:us};function Sp(){throw Error("act(...) is not supported in production builds of React.")}fe.Children={map:Gi,forEach:function(e,n,t){Gi(e,function(){n.apply(this,arguments)},t)},count:function(e){var n=0;return Gi(e,function(){n++}),n},toArray:function(e){return Gi(e,function(n){return n})||[]},only:function(e){if(!ss(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};fe.Component=Mr;fe.Fragment=vy;fe.Profiler=xy;fe.PureComponent=as;fe.StrictMode=ky;fe.Suspense=Cy;fe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Py;fe.act=Sp;fe.cloneElement=function(e,n,t){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=yp({},e.props),i=e.key,l=e.ref,a=e._owner;if(n!=null){if(n.ref!==void 0&&(l=n.ref,a=us.current),n.key!==void 0&&(i=""+n.key),e.type&&e.type.defaultProps)var o=e.type.defaultProps;for(u in n)xp.call(n,u)&&!wp.hasOwnProperty(u)&&(r[u]=n[u]===void 0&&o!==void 0?o[u]:n[u])}var u=arguments.length-2;if(u===1)r.children=t;else if(1<u){o=Array(u);for(var s=0;s<u;s++)o[s]=arguments[s+2];r.children=o}return{$$typeof:Ui,type:e.type,key:i,ref:l,props:r,_owner:a}};fe.createContext=function(e){return e={$$typeof:_y,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:wy,_context:e},e.Consumer=e};fe.createElement=_p;fe.createFactory=function(e){var n=_p.bind(null,e);return n.type=e,n};fe.createRef=function(){return{current:null}};fe.forwardRef=function(e){return{$$typeof:Sy,render:e}};fe.isValidElement=ss;fe.lazy=function(e){return{$$typeof:Ey,_payload:{_status:-1,_result:e},_init:jy}};fe.memo=function(e,n){return{$$typeof:by,type:e,compare:n===void 0?null:n}};fe.startTransition=function(e){var n=wl.transition;wl.transition={};try{e()}finally{wl.transition=n}};fe.unstable_act=Sp;fe.useCallback=function(e,n){return tn.current.useCallback(e,n)};fe.useContext=function(e){return tn.current.useContext(e)};fe.useDebugValue=function(){};fe.useDeferredValue=function(e){return tn.current.useDeferredValue(e)};fe.useEffect=function(e,n){return tn.current.useEffect(e,n)};fe.useId=function(){return tn.current.useId()};fe.useImperativeHandle=function(e,n,t){return tn.current.useImperativeHandle(e,n,t)};fe.useInsertionEffect=function(e,n){return tn.current.useInsertionEffect(e,n)};fe.useLayoutEffect=function(e,n){return tn.current.useLayoutEffect(e,n)};fe.useMemo=function(e,n){return tn.current.useMemo(e,n)};fe.useReducer=function(e,n,t){return tn.current.useReducer(e,n,t)};fe.useRef=function(e){return tn.current.useRef(e)};fe.useState=function(e){return tn.current.useState(e)};fe.useSyncExternalStore=function(e,n,t){return tn.current.useSyncExternalStore(e,n,t)};fe.useTransition=function(){return tn.current.useTransition()};fe.version="18.3.1";mp.exports=fe;var U=mp.exports;const Cp=ls(U),Iy=gy({__proto__:null,default:Cp},[U]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ny=U,Ly=Symbol.for("react.element"),Oy=Symbol.for("react.fragment"),Ry=Object.prototype.hasOwnProperty,My=Ny.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,qy={key:!0,ref:!0,__self:!0,__source:!0};function bp(e,n,t){var r,i={},l=null,a=null;t!==void 0&&(l=""+t),n.key!==void 0&&(l=""+n.key),n.ref!==void 0&&(a=n.ref);for(r in n)Ry.call(n,r)&&!qy.hasOwnProperty(r)&&(i[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps,n)i[r]===void 0&&(i[r]=n[r]);return{$$typeof:Ly,type:e,key:l,ref:a,props:i,_owner:My.current}}pa.Fragment=Oy;pa.jsx=bp;pa.jsxs=bp;hp.exports=pa;var O=hp.exports,Ko={},Ep={exports:{}},wn={},Tp={exports:{}},zp={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function n(W,te){var x=W.length;W.push(te);e:for(;0<x;){var se=x-1>>>1,pe=W[se];if(0<i(pe,te))W[se]=te,W[x]=pe,x=se;else break e}}function t(W){return W.length===0?null:W[0]}function r(W){if(W.length===0)return null;var te=W[0],x=W.pop();if(x!==te){W[0]=x;e:for(var se=0,pe=W.length,_=pe>>>1;se<_;){var Te=2*(se+1)-1,Se=W[Te],he=Te+1,Oe=W[he];if(0>i(Se,x))he<pe&&0>i(Oe,Se)?(W[se]=Oe,W[he]=x,se=he):(W[se]=Se,W[Te]=x,se=Te);else if(he<pe&&0>i(Oe,x))W[se]=Oe,W[he]=x,se=he;else break e}}return te}function i(W,te){var x=W.sortIndex-te.sortIndex;return x!==0?x:W.id-te.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;e.unstable_now=function(){return l.now()}}else{var a=Date,o=a.now();e.unstable_now=function(){return a.now()-o}}var u=[],s=[],d=1,f=null,p=3,h=!1,v=!1,w=!1,b=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,y=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function k(W){for(var te=t(s);te!==null;){if(te.callback===null)r(s);else if(te.startTime<=W)r(s),te.sortIndex=te.expirationTime,n(u,te);else break;te=t(s)}}function T(W){if(w=!1,k(W),!v)if(t(u)!==null)v=!0,Y(R);else{var te=t(s);te!==null&&ke(T,te.startTime-W)}}function R(W,te){v=!1,w&&(w=!1,g(V),V=-1),h=!0;var x=p;try{for(k(te),f=t(u);f!==null&&(!(f.expirationTime>te)||W&&!K());){var se=f.callback;if(typeof se=="function"){f.callback=null,p=f.priorityLevel;var pe=se(f.expirationTime<=te);te=e.unstable_now(),typeof pe=="function"?f.callback=pe:f===t(u)&&r(u),k(te)}else r(u);f=t(u)}if(f!==null)var _=!0;else{var Te=t(s);Te!==null&&ke(T,Te.startTime-te),_=!1}return _}finally{f=null,p=x,h=!1}}var C=!1,B=null,V=-1,ee=5,E=-1;function K(){return!(e.unstable_now()-E<ee)}function Z(){if(B!==null){var W=e.unstable_now();E=W;var te=!0;try{te=B(!0,W)}finally{te?ue():(C=!1,B=null)}}else C=!1}var ue;if(typeof y=="function")ue=function(){y(Z)};else if(typeof MessageChannel<"u"){var le=new MessageChannel,oe=le.port2;le.port1.onmessage=Z,ue=function(){oe.postMessage(null)}}else ue=function(){b(Z,0)};function Y(W){B=W,C||(C=!0,ue())}function ke(W,te){V=b(function(){W(e.unstable_now())},te)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(W){W.callback=null},e.unstable_continueExecution=function(){v||h||(v=!0,Y(R))},e.unstable_forceFrameRate=function(W){0>W||125<W?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):ee=0<W?Math.floor(1e3/W):5},e.unstable_getCurrentPriorityLevel=function(){return p},e.unstable_getFirstCallbackNode=function(){return t(u)},e.unstable_next=function(W){switch(p){case 1:case 2:case 3:var te=3;break;default:te=p}var x=p;p=te;try{return W()}finally{p=x}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(W,te){switch(W){case 1:case 2:case 3:case 4:case 5:break;default:W=3}var x=p;p=W;try{return te()}finally{p=x}},e.unstable_scheduleCallback=function(W,te,x){var se=e.unstable_now();switch(typeof x=="object"&&x!==null?(x=x.delay,x=typeof x=="number"&&0<x?se+x:se):x=se,W){case 1:var pe=-1;break;case 2:pe=250;break;case 5:pe=1073741823;break;case 4:pe=1e4;break;default:pe=5e3}return pe=x+pe,W={id:d++,callback:te,priorityLevel:W,startTime:x,expirationTime:pe,sortIndex:-1},x>se?(W.sortIndex=x,n(s,W),t(u)===null&&W===t(s)&&(w?(g(V),V=-1):w=!0,ke(T,x-se))):(W.sortIndex=pe,n(u,W),v||h||(v=!0,Y(R))),W},e.unstable_shouldYield=K,e.unstable_wrapCallback=function(W){var te=p;return function(){var x=p;p=te;try{return W.apply(this,arguments)}finally{p=x}}}})(zp);Tp.exports=zp;var Fy=Tp.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Dy=U,xn=Fy;function H(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)n+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Ap=new Set,wi={};function Zt(e,n){zr(e,n),zr(e+"Capture",n)}function zr(e,n){for(wi[e]=n,e=0;e<n.length;e++)Ap.add(n[e])}var Zn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Xo=Object.prototype.hasOwnProperty,By=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Ac={},jc={};function Uy(e){return Xo.call(jc,e)?!0:Xo.call(Ac,e)?!1:By.test(e)?jc[e]=!0:(Ac[e]=!0,!1)}function Hy(e,n,t,r){if(t!==null&&t.type===0)return!1;switch(typeof n){case"function":case"symbol":return!0;case"boolean":return r?!1:t!==null?!t.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function $y(e,n,t,r){if(n===null||typeof n>"u"||Hy(e,n,t,r))return!0;if(r)return!1;if(t!==null)switch(t.type){case 3:return!n;case 4:return n===!1;case 5:return isNaN(n);case 6:return isNaN(n)||1>n}return!1}function rn(e,n,t,r,i,l,a){this.acceptsBooleans=n===2||n===3||n===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=t,this.propertyName=e,this.type=n,this.sanitizeURL=l,this.removeEmptyString=a}var $e={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){$e[e]=new rn(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var n=e[0];$e[n]=new rn(n,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){$e[e]=new rn(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){$e[e]=new rn(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){$e[e]=new rn(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){$e[e]=new rn(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){$e[e]=new rn(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){$e[e]=new rn(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){$e[e]=new rn(e,5,!1,e.toLowerCase(),null,!1,!1)});var cs=/[\-:]([a-z])/g;function fs(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var n=e.replace(cs,fs);$e[n]=new rn(n,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var n=e.replace(cs,fs);$e[n]=new rn(n,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var n=e.replace(cs,fs);$e[n]=new rn(n,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){$e[e]=new rn(e,1,!1,e.toLowerCase(),null,!1,!1)});$e.xlinkHref=new rn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){$e[e]=new rn(e,1,!1,e.toLowerCase(),null,!0,!0)});function ds(e,n,t,r){var i=$e.hasOwnProperty(n)?$e[n]:null;(i!==null?i.type!==0:r||!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&($y(n,t,i,r)&&(t=null),r||i===null?Uy(n)&&(t===null?e.removeAttribute(n):e.setAttribute(n,""+t)):i.mustUseProperty?e[i.propertyName]=t===null?i.type===3?!1:"":t:(n=i.attributeName,r=i.attributeNamespace,t===null?e.removeAttribute(n):(i=i.type,t=i===3||i===4&&t===!0?"":""+t,r?e.setAttributeNS(r,n,t):e.setAttribute(n,t))))}var rt=Dy.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Zi=Symbol.for("react.element"),cr=Symbol.for("react.portal"),fr=Symbol.for("react.fragment"),ps=Symbol.for("react.strict_mode"),Jo=Symbol.for("react.profiler"),jp=Symbol.for("react.provider"),Pp=Symbol.for("react.context"),hs=Symbol.for("react.forward_ref"),Go=Symbol.for("react.suspense"),Zo=Symbol.for("react.suspense_list"),ms=Symbol.for("react.memo"),ct=Symbol.for("react.lazy"),Ip=Symbol.for("react.offscreen"),Pc=Symbol.iterator;function Kr(e){return e===null||typeof e!="object"?null:(e=Pc&&e[Pc]||e["@@iterator"],typeof e=="function"?e:null)}var Ie=Object.assign,Fa;function li(e){if(Fa===void 0)try{throw Error()}catch(t){var n=t.stack.trim().match(/\n( *(at )?)/);Fa=n&&n[1]||""}return`
`+Fa+e}var Da=!1;function Ba(e,n){if(!e||Da)return"";Da=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(n)if(n=function(){throw Error()},Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(n,[])}catch(s){var r=s}Reflect.construct(e,[],n)}else{try{n.call()}catch(s){r=s}e.call(n.prototype)}else{try{throw Error()}catch(s){r=s}e()}}catch(s){if(s&&r&&typeof s.stack=="string"){for(var i=s.stack.split(`
`),l=r.stack.split(`
`),a=i.length-1,o=l.length-1;1<=a&&0<=o&&i[a]!==l[o];)o--;for(;1<=a&&0<=o;a--,o--)if(i[a]!==l[o]){if(a!==1||o!==1)do if(a--,o--,0>o||i[a]!==l[o]){var u=`
`+i[a].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}while(1<=a&&0<=o);break}}}finally{Da=!1,Error.prepareStackTrace=t}return(e=e?e.displayName||e.name:"")?li(e):""}function Vy(e){switch(e.tag){case 5:return li(e.type);case 16:return li("Lazy");case 13:return li("Suspense");case 19:return li("SuspenseList");case 0:case 2:case 15:return e=Ba(e.type,!1),e;case 11:return e=Ba(e.type.render,!1),e;case 1:return e=Ba(e.type,!0),e;default:return""}}function eu(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case fr:return"Fragment";case cr:return"Portal";case Jo:return"Profiler";case ps:return"StrictMode";case Go:return"Suspense";case Zo:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Pp:return(e.displayName||"Context")+".Consumer";case jp:return(e._context.displayName||"Context")+".Provider";case hs:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case ms:return n=e.displayName||null,n!==null?n:eu(e.type)||"Memo";case ct:n=e._payload,e=e._init;try{return eu(e(n))}catch{}}return null}function Wy(e){var n=e.type;switch(e.tag){case 24:return"Cache";case 9:return(n.displayName||"Context")+".Consumer";case 10:return(n._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=n.render,e=e.displayName||e.name||"",n.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return n;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return eu(n);case 8:return n===ps?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n}return null}function Et(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Np(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Qy(e){var n=Np(e)?"checked":"value",t=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),r=""+e[n];if(!e.hasOwnProperty(n)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var i=t.get,l=t.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return i.call(this)},set:function(a){r=""+a,l.call(this,a)}}),Object.defineProperty(e,n,{enumerable:t.enumerable}),{getValue:function(){return r},setValue:function(a){r=""+a},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function el(e){e._valueTracker||(e._valueTracker=Qy(e))}function Lp(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var t=n.getValue(),r="";return e&&(r=Np(e)?e.checked?"true":"false":e.value),e=r,e!==t?(n.setValue(e),!0):!1}function Ol(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function nu(e,n){var t=n.checked;return Ie({},n,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??e._wrapperState.initialChecked})}function Ic(e,n){var t=n.defaultValue==null?"":n.defaultValue,r=n.checked!=null?n.checked:n.defaultChecked;t=Et(n.value!=null?n.value:t),e._wrapperState={initialChecked:r,initialValue:t,controlled:n.type==="checkbox"||n.type==="radio"?n.checked!=null:n.value!=null}}function Op(e,n){n=n.checked,n!=null&&ds(e,"checked",n,!1)}function tu(e,n){Op(e,n);var t=Et(n.value),r=n.type;if(t!=null)r==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+t):e.value!==""+t&&(e.value=""+t);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}n.hasOwnProperty("value")?ru(e,n.type,t):n.hasOwnProperty("defaultValue")&&ru(e,n.type,Et(n.defaultValue)),n.checked==null&&n.defaultChecked!=null&&(e.defaultChecked=!!n.defaultChecked)}function Nc(e,n,t){if(n.hasOwnProperty("value")||n.hasOwnProperty("defaultValue")){var r=n.type;if(!(r!=="submit"&&r!=="reset"||n.value!==void 0&&n.value!==null))return;n=""+e._wrapperState.initialValue,t||n===e.value||(e.value=n),e.defaultValue=n}t=e.name,t!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,t!==""&&(e.name=t)}function ru(e,n,t){(n!=="number"||Ol(e.ownerDocument)!==e)&&(t==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+t&&(e.defaultValue=""+t))}var ai=Array.isArray;function _r(e,n,t,r){if(e=e.options,n){n={};for(var i=0;i<t.length;i++)n["$"+t[i]]=!0;for(t=0;t<e.length;t++)i=n.hasOwnProperty("$"+e[t].value),e[t].selected!==i&&(e[t].selected=i),i&&r&&(e[t].defaultSelected=!0)}else{for(t=""+Et(t),n=null,i=0;i<e.length;i++){if(e[i].value===t){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}n!==null||e[i].disabled||(n=e[i])}n!==null&&(n.selected=!0)}}function iu(e,n){if(n.dangerouslySetInnerHTML!=null)throw Error(H(91));return Ie({},n,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Lc(e,n){var t=n.value;if(t==null){if(t=n.children,n=n.defaultValue,t!=null){if(n!=null)throw Error(H(92));if(ai(t)){if(1<t.length)throw Error(H(93));t=t[0]}n=t}n==null&&(n=""),t=n}e._wrapperState={initialValue:Et(t)}}function Rp(e,n){var t=Et(n.value),r=Et(n.defaultValue);t!=null&&(t=""+t,t!==e.value&&(e.value=t),n.defaultValue==null&&e.defaultValue!==t&&(e.defaultValue=t)),r!=null&&(e.defaultValue=""+r)}function Oc(e){var n=e.textContent;n===e._wrapperState.initialValue&&n!==""&&n!==null&&(e.value=n)}function Mp(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function lu(e,n){return e==null||e==="http://www.w3.org/1999/xhtml"?Mp(n):e==="http://www.w3.org/2000/svg"&&n==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var nl,qp=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(n,t,r,i){MSApp.execUnsafeLocalFunction(function(){return e(n,t,r,i)})}:e}(function(e,n){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=n;else{for(nl=nl||document.createElement("div"),nl.innerHTML="<svg>"+n.valueOf().toString()+"</svg>",n=nl.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;n.firstChild;)e.appendChild(n.firstChild)}});function _i(e,n){if(n){var t=e.firstChild;if(t&&t===e.lastChild&&t.nodeType===3){t.nodeValue=n;return}}e.textContent=n}var si={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Yy=["Webkit","ms","Moz","O"];Object.keys(si).forEach(function(e){Yy.forEach(function(n){n=n+e.charAt(0).toUpperCase()+e.substring(1),si[n]=si[e]})});function Fp(e,n,t){return n==null||typeof n=="boolean"||n===""?"":t||typeof n!="number"||n===0||si.hasOwnProperty(e)&&si[e]?(""+n).trim():n+"px"}function Dp(e,n){e=e.style;for(var t in n)if(n.hasOwnProperty(t)){var r=t.indexOf("--")===0,i=Fp(t,n[t],r);t==="float"&&(t="cssFloat"),r?e.setProperty(t,i):e[t]=i}}var Ky=Ie({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function au(e,n){if(n){if(Ky[e]&&(n.children!=null||n.dangerouslySetInnerHTML!=null))throw Error(H(137,e));if(n.dangerouslySetInnerHTML!=null){if(n.children!=null)throw Error(H(60));if(typeof n.dangerouslySetInnerHTML!="object"||!("__html"in n.dangerouslySetInnerHTML))throw Error(H(61))}if(n.style!=null&&typeof n.style!="object")throw Error(H(62))}}function ou(e,n){if(e.indexOf("-")===-1)return typeof n.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var uu=null;function gs(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var su=null,Sr=null,Cr=null;function Rc(e){if(e=Vi(e)){if(typeof su!="function")throw Error(H(280));var n=e.stateNode;n&&(n=va(n),su(e.stateNode,e.type,n))}}function Bp(e){Sr?Cr?Cr.push(e):Cr=[e]:Sr=e}function Up(){if(Sr){var e=Sr,n=Cr;if(Cr=Sr=null,Rc(e),n)for(e=0;e<n.length;e++)Rc(n[e])}}function Hp(e,n){return e(n)}function $p(){}var Ua=!1;function Vp(e,n,t){if(Ua)return e(n,t);Ua=!0;try{return Hp(e,n,t)}finally{Ua=!1,(Sr!==null||Cr!==null)&&($p(),Up())}}function Si(e,n){var t=e.stateNode;if(t===null)return null;var r=va(t);if(r===null)return null;t=r[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(t&&typeof t!="function")throw Error(H(231,n,typeof t));return t}var cu=!1;if(Zn)try{var Xr={};Object.defineProperty(Xr,"passive",{get:function(){cu=!0}}),window.addEventListener("test",Xr,Xr),window.removeEventListener("test",Xr,Xr)}catch{cu=!1}function Xy(e,n,t,r,i,l,a,o,u){var s=Array.prototype.slice.call(arguments,3);try{n.apply(t,s)}catch(d){this.onError(d)}}var ci=!1,Rl=null,Ml=!1,fu=null,Jy={onError:function(e){ci=!0,Rl=e}};function Gy(e,n,t,r,i,l,a,o,u){ci=!1,Rl=null,Xy.apply(Jy,arguments)}function Zy(e,n,t,r,i,l,a,o,u){if(Gy.apply(this,arguments),ci){if(ci){var s=Rl;ci=!1,Rl=null}else throw Error(H(198));Ml||(Ml=!0,fu=s)}}function er(e){var n=e,t=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,n.flags&4098&&(t=n.return),e=n.return;while(e)}return n.tag===3?t:null}function Wp(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function Mc(e){if(er(e)!==e)throw Error(H(188))}function e0(e){var n=e.alternate;if(!n){if(n=er(e),n===null)throw Error(H(188));return n!==e?null:e}for(var t=e,r=n;;){var i=t.return;if(i===null)break;var l=i.alternate;if(l===null){if(r=i.return,r!==null){t=r;continue}break}if(i.child===l.child){for(l=i.child;l;){if(l===t)return Mc(i),e;if(l===r)return Mc(i),n;l=l.sibling}throw Error(H(188))}if(t.return!==r.return)t=i,r=l;else{for(var a=!1,o=i.child;o;){if(o===t){a=!0,t=i,r=l;break}if(o===r){a=!0,r=i,t=l;break}o=o.sibling}if(!a){for(o=l.child;o;){if(o===t){a=!0,t=l,r=i;break}if(o===r){a=!0,r=l,t=i;break}o=o.sibling}if(!a)throw Error(H(189))}}if(t.alternate!==r)throw Error(H(190))}if(t.tag!==3)throw Error(H(188));return t.stateNode.current===t?e:n}function Qp(e){return e=e0(e),e!==null?Yp(e):null}function Yp(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var n=Yp(e);if(n!==null)return n;e=e.sibling}return null}var Kp=xn.unstable_scheduleCallback,qc=xn.unstable_cancelCallback,n0=xn.unstable_shouldYield,t0=xn.unstable_requestPaint,Le=xn.unstable_now,r0=xn.unstable_getCurrentPriorityLevel,ys=xn.unstable_ImmediatePriority,Xp=xn.unstable_UserBlockingPriority,ql=xn.unstable_NormalPriority,i0=xn.unstable_LowPriority,Jp=xn.unstable_IdlePriority,ha=null,Vn=null;function l0(e){if(Vn&&typeof Vn.onCommitFiberRoot=="function")try{Vn.onCommitFiberRoot(ha,e,void 0,(e.current.flags&128)===128)}catch{}}var Rn=Math.clz32?Math.clz32:u0,a0=Math.log,o0=Math.LN2;function u0(e){return e>>>=0,e===0?32:31-(a0(e)/o0|0)|0}var tl=64,rl=4194304;function oi(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Fl(e,n){var t=e.pendingLanes;if(t===0)return 0;var r=0,i=e.suspendedLanes,l=e.pingedLanes,a=t&268435455;if(a!==0){var o=a&~i;o!==0?r=oi(o):(l&=a,l!==0&&(r=oi(l)))}else a=t&~i,a!==0?r=oi(a):l!==0&&(r=oi(l));if(r===0)return 0;if(n!==0&&n!==r&&!(n&i)&&(i=r&-r,l=n&-n,i>=l||i===16&&(l&4194240)!==0))return n;if(r&4&&(r|=t&16),n=e.entangledLanes,n!==0)for(e=e.entanglements,n&=r;0<n;)t=31-Rn(n),i=1<<t,r|=e[t],n&=~i;return r}function s0(e,n){switch(e){case 1:case 2:case 4:return n+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function c0(e,n){for(var t=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,l=e.pendingLanes;0<l;){var a=31-Rn(l),o=1<<a,u=i[a];u===-1?(!(o&t)||o&r)&&(i[a]=s0(o,n)):u<=n&&(e.expiredLanes|=o),l&=~o}}function du(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Gp(){var e=tl;return tl<<=1,!(tl&4194240)&&(tl=64),e}function Ha(e){for(var n=[],t=0;31>t;t++)n.push(e);return n}function Hi(e,n,t){e.pendingLanes|=n,n!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,n=31-Rn(n),e[n]=t}function f0(e,n){var t=e.pendingLanes&~n;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=n,e.mutableReadLanes&=n,e.entangledLanes&=n,n=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<t;){var i=31-Rn(t),l=1<<i;n[i]=0,r[i]=-1,e[i]=-1,t&=~l}}function vs(e,n){var t=e.entangledLanes|=n;for(e=e.entanglements;t;){var r=31-Rn(t),i=1<<r;i&n|e[r]&n&&(e[r]|=n),t&=~i}}var ve=0;function Zp(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var eh,ks,nh,th,rh,pu=!1,il=[],yt=null,vt=null,kt=null,Ci=new Map,bi=new Map,dt=[],d0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Fc(e,n){switch(e){case"focusin":case"focusout":yt=null;break;case"dragenter":case"dragleave":vt=null;break;case"mouseover":case"mouseout":kt=null;break;case"pointerover":case"pointerout":Ci.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":bi.delete(n.pointerId)}}function Jr(e,n,t,r,i,l){return e===null||e.nativeEvent!==l?(e={blockedOn:n,domEventName:t,eventSystemFlags:r,nativeEvent:l,targetContainers:[i]},n!==null&&(n=Vi(n),n!==null&&ks(n)),e):(e.eventSystemFlags|=r,n=e.targetContainers,i!==null&&n.indexOf(i)===-1&&n.push(i),e)}function p0(e,n,t,r,i){switch(n){case"focusin":return yt=Jr(yt,e,n,t,r,i),!0;case"dragenter":return vt=Jr(vt,e,n,t,r,i),!0;case"mouseover":return kt=Jr(kt,e,n,t,r,i),!0;case"pointerover":var l=i.pointerId;return Ci.set(l,Jr(Ci.get(l)||null,e,n,t,r,i)),!0;case"gotpointercapture":return l=i.pointerId,bi.set(l,Jr(bi.get(l)||null,e,n,t,r,i)),!0}return!1}function ih(e){var n=Bt(e.target);if(n!==null){var t=er(n);if(t!==null){if(n=t.tag,n===13){if(n=Wp(t),n!==null){e.blockedOn=n,rh(e.priority,function(){nh(t)});return}}else if(n===3&&t.stateNode.current.memoizedState.isDehydrated){e.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}e.blockedOn=null}function _l(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var t=hu(e.domEventName,e.eventSystemFlags,n[0],e.nativeEvent);if(t===null){t=e.nativeEvent;var r=new t.constructor(t.type,t);uu=r,t.target.dispatchEvent(r),uu=null}else return n=Vi(t),n!==null&&ks(n),e.blockedOn=t,!1;n.shift()}return!0}function Dc(e,n,t){_l(e)&&t.delete(n)}function h0(){pu=!1,yt!==null&&_l(yt)&&(yt=null),vt!==null&&_l(vt)&&(vt=null),kt!==null&&_l(kt)&&(kt=null),Ci.forEach(Dc),bi.forEach(Dc)}function Gr(e,n){e.blockedOn===n&&(e.blockedOn=null,pu||(pu=!0,xn.unstable_scheduleCallback(xn.unstable_NormalPriority,h0)))}function Ei(e){function n(i){return Gr(i,e)}if(0<il.length){Gr(il[0],e);for(var t=1;t<il.length;t++){var r=il[t];r.blockedOn===e&&(r.blockedOn=null)}}for(yt!==null&&Gr(yt,e),vt!==null&&Gr(vt,e),kt!==null&&Gr(kt,e),Ci.forEach(n),bi.forEach(n),t=0;t<dt.length;t++)r=dt[t],r.blockedOn===e&&(r.blockedOn=null);for(;0<dt.length&&(t=dt[0],t.blockedOn===null);)ih(t),t.blockedOn===null&&dt.shift()}var br=rt.ReactCurrentBatchConfig,Dl=!0;function m0(e,n,t,r){var i=ve,l=br.transition;br.transition=null;try{ve=1,xs(e,n,t,r)}finally{ve=i,br.transition=l}}function g0(e,n,t,r){var i=ve,l=br.transition;br.transition=null;try{ve=4,xs(e,n,t,r)}finally{ve=i,br.transition=l}}function xs(e,n,t,r){if(Dl){var i=hu(e,n,t,r);if(i===null)Za(e,n,r,Bl,t),Fc(e,r);else if(p0(i,e,n,t,r))r.stopPropagation();else if(Fc(e,r),n&4&&-1<d0.indexOf(e)){for(;i!==null;){var l=Vi(i);if(l!==null&&eh(l),l=hu(e,n,t,r),l===null&&Za(e,n,r,Bl,t),l===i)break;i=l}i!==null&&r.stopPropagation()}else Za(e,n,r,null,t)}}var Bl=null;function hu(e,n,t,r){if(Bl=null,e=gs(r),e=Bt(e),e!==null)if(n=er(e),n===null)e=null;else if(t=n.tag,t===13){if(e=Wp(n),e!==null)return e;e=null}else if(t===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null);return Bl=e,null}function lh(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(r0()){case ys:return 1;case Xp:return 4;case ql:case i0:return 16;case Jp:return 536870912;default:return 16}default:return 16}}var ht=null,ws=null,Sl=null;function ah(){if(Sl)return Sl;var e,n=ws,t=n.length,r,i="value"in ht?ht.value:ht.textContent,l=i.length;for(e=0;e<t&&n[e]===i[e];e++);var a=t-e;for(r=1;r<=a&&n[t-r]===i[l-r];r++);return Sl=i.slice(e,1<r?1-r:void 0)}function Cl(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function ll(){return!0}function Bc(){return!1}function _n(e){function n(t,r,i,l,a){this._reactName=t,this._targetInst=i,this.type=r,this.nativeEvent=l,this.target=a,this.currentTarget=null;for(var o in e)e.hasOwnProperty(o)&&(t=e[o],this[o]=t?t(l):l[o]);return this.isDefaultPrevented=(l.defaultPrevented!=null?l.defaultPrevented:l.returnValue===!1)?ll:Bc,this.isPropagationStopped=Bc,this}return Ie(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=ll)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=ll)},persist:function(){},isPersistent:ll}),n}var qr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},_s=_n(qr),$i=Ie({},qr,{view:0,detail:0}),y0=_n($i),$a,Va,Zr,ma=Ie({},$i,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ss,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Zr&&(Zr&&e.type==="mousemove"?($a=e.screenX-Zr.screenX,Va=e.screenY-Zr.screenY):Va=$a=0,Zr=e),$a)},movementY:function(e){return"movementY"in e?e.movementY:Va}}),Uc=_n(ma),v0=Ie({},ma,{dataTransfer:0}),k0=_n(v0),x0=Ie({},$i,{relatedTarget:0}),Wa=_n(x0),w0=Ie({},qr,{animationName:0,elapsedTime:0,pseudoElement:0}),_0=_n(w0),S0=Ie({},qr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),C0=_n(S0),b0=Ie({},qr,{data:0}),Hc=_n(b0),E0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},T0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},z0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function A0(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=z0[e])?!!n[e]:!1}function Ss(){return A0}var j0=Ie({},$i,{key:function(e){if(e.key){var n=E0[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=Cl(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?T0[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ss,charCode:function(e){return e.type==="keypress"?Cl(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Cl(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),P0=_n(j0),I0=Ie({},ma,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),$c=_n(I0),N0=Ie({},$i,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ss}),L0=_n(N0),O0=Ie({},qr,{propertyName:0,elapsedTime:0,pseudoElement:0}),R0=_n(O0),M0=Ie({},ma,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),q0=_n(M0),F0=[9,13,27,32],Cs=Zn&&"CompositionEvent"in window,fi=null;Zn&&"documentMode"in document&&(fi=document.documentMode);var D0=Zn&&"TextEvent"in window&&!fi,oh=Zn&&(!Cs||fi&&8<fi&&11>=fi),Vc=" ",Wc=!1;function uh(e,n){switch(e){case"keyup":return F0.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function sh(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var dr=!1;function B0(e,n){switch(e){case"compositionend":return sh(n);case"keypress":return n.which!==32?null:(Wc=!0,Vc);case"textInput":return e=n.data,e===Vc&&Wc?null:e;default:return null}}function U0(e,n){if(dr)return e==="compositionend"||!Cs&&uh(e,n)?(e=ah(),Sl=ws=ht=null,dr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return oh&&n.locale!=="ko"?null:n.data;default:return null}}var H0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Qc(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!H0[e.type]:n==="textarea"}function ch(e,n,t,r){Bp(r),n=Ul(n,"onChange"),0<n.length&&(t=new _s("onChange","change",null,t,r),e.push({event:t,listeners:n}))}var di=null,Ti=null;function $0(e){wh(e,0)}function ga(e){var n=mr(e);if(Lp(n))return e}function V0(e,n){if(e==="change")return n}var fh=!1;if(Zn){var Qa;if(Zn){var Ya="oninput"in document;if(!Ya){var Yc=document.createElement("div");Yc.setAttribute("oninput","return;"),Ya=typeof Yc.oninput=="function"}Qa=Ya}else Qa=!1;fh=Qa&&(!document.documentMode||9<document.documentMode)}function Kc(){di&&(di.detachEvent("onpropertychange",dh),Ti=di=null)}function dh(e){if(e.propertyName==="value"&&ga(Ti)){var n=[];ch(n,Ti,e,gs(e)),Vp($0,n)}}function W0(e,n,t){e==="focusin"?(Kc(),di=n,Ti=t,di.attachEvent("onpropertychange",dh)):e==="focusout"&&Kc()}function Q0(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ga(Ti)}function Y0(e,n){if(e==="click")return ga(n)}function K0(e,n){if(e==="input"||e==="change")return ga(n)}function X0(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var Fn=typeof Object.is=="function"?Object.is:X0;function zi(e,n){if(Fn(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var t=Object.keys(e),r=Object.keys(n);if(t.length!==r.length)return!1;for(r=0;r<t.length;r++){var i=t[r];if(!Xo.call(n,i)||!Fn(e[i],n[i]))return!1}return!0}function Xc(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Jc(e,n){var t=Xc(e);e=0;for(var r;t;){if(t.nodeType===3){if(r=e+t.textContent.length,e<=n&&r>=n)return{node:t,offset:n-e};e=r}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=Xc(t)}}function ph(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?ph(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function hh(){for(var e=window,n=Ol();n instanceof e.HTMLIFrameElement;){try{var t=typeof n.contentWindow.location.href=="string"}catch{t=!1}if(t)e=n.contentWindow;else break;n=Ol(e.document)}return n}function bs(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}function J0(e){var n=hh(),t=e.focusedElem,r=e.selectionRange;if(n!==t&&t&&t.ownerDocument&&ph(t.ownerDocument.documentElement,t)){if(r!==null&&bs(t)){if(n=r.start,e=r.end,e===void 0&&(e=n),"selectionStart"in t)t.selectionStart=n,t.selectionEnd=Math.min(e,t.value.length);else if(e=(n=t.ownerDocument||document)&&n.defaultView||window,e.getSelection){e=e.getSelection();var i=t.textContent.length,l=Math.min(r.start,i);r=r.end===void 0?l:Math.min(r.end,i),!e.extend&&l>r&&(i=r,r=l,l=i),i=Jc(t,l);var a=Jc(t,r);i&&a&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(n=n.createRange(),n.setStart(i.node,i.offset),e.removeAllRanges(),l>r?(e.addRange(n),e.extend(a.node,a.offset)):(n.setEnd(a.node,a.offset),e.addRange(n)))}}for(n=[],e=t;e=e.parentNode;)e.nodeType===1&&n.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<n.length;t++)e=n[t],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var G0=Zn&&"documentMode"in document&&11>=document.documentMode,pr=null,mu=null,pi=null,gu=!1;function Gc(e,n,t){var r=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;gu||pr==null||pr!==Ol(r)||(r=pr,"selectionStart"in r&&bs(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),pi&&zi(pi,r)||(pi=r,r=Ul(mu,"onSelect"),0<r.length&&(n=new _s("onSelect","select",null,n,t),e.push({event:n,listeners:r}),n.target=pr)))}function al(e,n){var t={};return t[e.toLowerCase()]=n.toLowerCase(),t["Webkit"+e]="webkit"+n,t["Moz"+e]="moz"+n,t}var hr={animationend:al("Animation","AnimationEnd"),animationiteration:al("Animation","AnimationIteration"),animationstart:al("Animation","AnimationStart"),transitionend:al("Transition","TransitionEnd")},Ka={},mh={};Zn&&(mh=document.createElement("div").style,"AnimationEvent"in window||(delete hr.animationend.animation,delete hr.animationiteration.animation,delete hr.animationstart.animation),"TransitionEvent"in window||delete hr.transitionend.transition);function ya(e){if(Ka[e])return Ka[e];if(!hr[e])return e;var n=hr[e],t;for(t in n)if(n.hasOwnProperty(t)&&t in mh)return Ka[e]=n[t];return e}var gh=ya("animationend"),yh=ya("animationiteration"),vh=ya("animationstart"),kh=ya("transitionend"),xh=new Map,Zc="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function zt(e,n){xh.set(e,n),Zt(n,[e])}for(var Xa=0;Xa<Zc.length;Xa++){var Ja=Zc[Xa],Z0=Ja.toLowerCase(),e1=Ja[0].toUpperCase()+Ja.slice(1);zt(Z0,"on"+e1)}zt(gh,"onAnimationEnd");zt(yh,"onAnimationIteration");zt(vh,"onAnimationStart");zt("dblclick","onDoubleClick");zt("focusin","onFocus");zt("focusout","onBlur");zt(kh,"onTransitionEnd");zr("onMouseEnter",["mouseout","mouseover"]);zr("onMouseLeave",["mouseout","mouseover"]);zr("onPointerEnter",["pointerout","pointerover"]);zr("onPointerLeave",["pointerout","pointerover"]);Zt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Zt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Zt("onBeforeInput",["compositionend","keypress","textInput","paste"]);Zt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Zt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Zt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ui="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),n1=new Set("cancel close invalid load scroll toggle".split(" ").concat(ui));function ef(e,n,t){var r=e.type||"unknown-event";e.currentTarget=t,Zy(r,n,void 0,e),e.currentTarget=null}function wh(e,n){n=(n&4)!==0;for(var t=0;t<e.length;t++){var r=e[t],i=r.event;r=r.listeners;e:{var l=void 0;if(n)for(var a=r.length-1;0<=a;a--){var o=r[a],u=o.instance,s=o.currentTarget;if(o=o.listener,u!==l&&i.isPropagationStopped())break e;ef(i,o,s),l=u}else for(a=0;a<r.length;a++){if(o=r[a],u=o.instance,s=o.currentTarget,o=o.listener,u!==l&&i.isPropagationStopped())break e;ef(i,o,s),l=u}}}if(Ml)throw e=fu,Ml=!1,fu=null,e}function be(e,n){var t=n[wu];t===void 0&&(t=n[wu]=new Set);var r=e+"__bubble";t.has(r)||(_h(n,e,2,!1),t.add(r))}function Ga(e,n,t){var r=0;n&&(r|=4),_h(t,e,r,n)}var ol="_reactListening"+Math.random().toString(36).slice(2);function Ai(e){if(!e[ol]){e[ol]=!0,Ap.forEach(function(t){t!=="selectionchange"&&(n1.has(t)||Ga(t,!1,e),Ga(t,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[ol]||(n[ol]=!0,Ga("selectionchange",!1,n))}}function _h(e,n,t,r){switch(lh(n)){case 1:var i=m0;break;case 4:i=g0;break;default:i=xs}t=i.bind(null,n,t,e),i=void 0,!cu||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(n,t,{capture:!0,passive:i}):e.addEventListener(n,t,!0):i!==void 0?e.addEventListener(n,t,{passive:i}):e.addEventListener(n,t,!1)}function Za(e,n,t,r,i){var l=r;if(!(n&1)&&!(n&2)&&r!==null)e:for(;;){if(r===null)return;var a=r.tag;if(a===3||a===4){var o=r.stateNode.containerInfo;if(o===i||o.nodeType===8&&o.parentNode===i)break;if(a===4)for(a=r.return;a!==null;){var u=a.tag;if((u===3||u===4)&&(u=a.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;a=a.return}for(;o!==null;){if(a=Bt(o),a===null)return;if(u=a.tag,u===5||u===6){r=l=a;continue e}o=o.parentNode}}r=r.return}Vp(function(){var s=l,d=gs(t),f=[];e:{var p=xh.get(e);if(p!==void 0){var h=_s,v=e;switch(e){case"keypress":if(Cl(t)===0)break e;case"keydown":case"keyup":h=P0;break;case"focusin":v="focus",h=Wa;break;case"focusout":v="blur",h=Wa;break;case"beforeblur":case"afterblur":h=Wa;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":h=Uc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":h=k0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":h=L0;break;case gh:case yh:case vh:h=_0;break;case kh:h=R0;break;case"scroll":h=y0;break;case"wheel":h=q0;break;case"copy":case"cut":case"paste":h=C0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":h=$c}var w=(n&4)!==0,b=!w&&e==="scroll",g=w?p!==null?p+"Capture":null:p;w=[];for(var y=s,k;y!==null;){k=y;var T=k.stateNode;if(k.tag===5&&T!==null&&(k=T,g!==null&&(T=Si(y,g),T!=null&&w.push(ji(y,T,k)))),b)break;y=y.return}0<w.length&&(p=new h(p,v,null,t,d),f.push({event:p,listeners:w}))}}if(!(n&7)){e:{if(p=e==="mouseover"||e==="pointerover",h=e==="mouseout"||e==="pointerout",p&&t!==uu&&(v=t.relatedTarget||t.fromElement)&&(Bt(v)||v[et]))break e;if((h||p)&&(p=d.window===d?d:(p=d.ownerDocument)?p.defaultView||p.parentWindow:window,h?(v=t.relatedTarget||t.toElement,h=s,v=v?Bt(v):null,v!==null&&(b=er(v),v!==b||v.tag!==5&&v.tag!==6)&&(v=null)):(h=null,v=s),h!==v)){if(w=Uc,T="onMouseLeave",g="onMouseEnter",y="mouse",(e==="pointerout"||e==="pointerover")&&(w=$c,T="onPointerLeave",g="onPointerEnter",y="pointer"),b=h==null?p:mr(h),k=v==null?p:mr(v),p=new w(T,y+"leave",h,t,d),p.target=b,p.relatedTarget=k,T=null,Bt(d)===s&&(w=new w(g,y+"enter",v,t,d),w.target=k,w.relatedTarget=b,T=w),b=T,h&&v)n:{for(w=h,g=v,y=0,k=w;k;k=ur(k))y++;for(k=0,T=g;T;T=ur(T))k++;for(;0<y-k;)w=ur(w),y--;for(;0<k-y;)g=ur(g),k--;for(;y--;){if(w===g||g!==null&&w===g.alternate)break n;w=ur(w),g=ur(g)}w=null}else w=null;h!==null&&nf(f,p,h,w,!1),v!==null&&b!==null&&nf(f,b,v,w,!0)}}e:{if(p=s?mr(s):window,h=p.nodeName&&p.nodeName.toLowerCase(),h==="select"||h==="input"&&p.type==="file")var R=V0;else if(Qc(p))if(fh)R=K0;else{R=Q0;var C=W0}else(h=p.nodeName)&&h.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(R=Y0);if(R&&(R=R(e,s))){ch(f,R,t,d);break e}C&&C(e,p,s),e==="focusout"&&(C=p._wrapperState)&&C.controlled&&p.type==="number"&&ru(p,"number",p.value)}switch(C=s?mr(s):window,e){case"focusin":(Qc(C)||C.contentEditable==="true")&&(pr=C,mu=s,pi=null);break;case"focusout":pi=mu=pr=null;break;case"mousedown":gu=!0;break;case"contextmenu":case"mouseup":case"dragend":gu=!1,Gc(f,t,d);break;case"selectionchange":if(G0)break;case"keydown":case"keyup":Gc(f,t,d)}var B;if(Cs)e:{switch(e){case"compositionstart":var V="onCompositionStart";break e;case"compositionend":V="onCompositionEnd";break e;case"compositionupdate":V="onCompositionUpdate";break e}V=void 0}else dr?uh(e,t)&&(V="onCompositionEnd"):e==="keydown"&&t.keyCode===229&&(V="onCompositionStart");V&&(oh&&t.locale!=="ko"&&(dr||V!=="onCompositionStart"?V==="onCompositionEnd"&&dr&&(B=ah()):(ht=d,ws="value"in ht?ht.value:ht.textContent,dr=!0)),C=Ul(s,V),0<C.length&&(V=new Hc(V,e,null,t,d),f.push({event:V,listeners:C}),B?V.data=B:(B=sh(t),B!==null&&(V.data=B)))),(B=D0?B0(e,t):U0(e,t))&&(s=Ul(s,"onBeforeInput"),0<s.length&&(d=new Hc("onBeforeInput","beforeinput",null,t,d),f.push({event:d,listeners:s}),d.data=B))}wh(f,n)})}function ji(e,n,t){return{instance:e,listener:n,currentTarget:t}}function Ul(e,n){for(var t=n+"Capture",r=[];e!==null;){var i=e,l=i.stateNode;i.tag===5&&l!==null&&(i=l,l=Si(e,t),l!=null&&r.unshift(ji(e,l,i)),l=Si(e,n),l!=null&&r.push(ji(e,l,i))),e=e.return}return r}function ur(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function nf(e,n,t,r,i){for(var l=n._reactName,a=[];t!==null&&t!==r;){var o=t,u=o.alternate,s=o.stateNode;if(u!==null&&u===r)break;o.tag===5&&s!==null&&(o=s,i?(u=Si(t,l),u!=null&&a.unshift(ji(t,u,o))):i||(u=Si(t,l),u!=null&&a.push(ji(t,u,o)))),t=t.return}a.length!==0&&e.push({event:n,listeners:a})}var t1=/\r\n?/g,r1=/\u0000|\uFFFD/g;function tf(e){return(typeof e=="string"?e:""+e).replace(t1,`
`).replace(r1,"")}function ul(e,n,t){if(n=tf(n),tf(e)!==n&&t)throw Error(H(425))}function Hl(){}var yu=null,vu=null;function ku(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var xu=typeof setTimeout=="function"?setTimeout:void 0,i1=typeof clearTimeout=="function"?clearTimeout:void 0,rf=typeof Promise=="function"?Promise:void 0,l1=typeof queueMicrotask=="function"?queueMicrotask:typeof rf<"u"?function(e){return rf.resolve(null).then(e).catch(a1)}:xu;function a1(e){setTimeout(function(){throw e})}function eo(e,n){var t=n,r=0;do{var i=t.nextSibling;if(e.removeChild(t),i&&i.nodeType===8)if(t=i.data,t==="/$"){if(r===0){e.removeChild(i),Ei(n);return}r--}else t!=="$"&&t!=="$?"&&t!=="$!"||r++;t=i}while(t);Ei(n)}function xt(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?")break;if(n==="/$")return null}}return e}function lf(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="$"||t==="$!"||t==="$?"){if(n===0)return e;n--}else t==="/$"&&n++}e=e.previousSibling}return null}var Fr=Math.random().toString(36).slice(2),$n="__reactFiber$"+Fr,Pi="__reactProps$"+Fr,et="__reactContainer$"+Fr,wu="__reactEvents$"+Fr,o1="__reactListeners$"+Fr,u1="__reactHandles$"+Fr;function Bt(e){var n=e[$n];if(n)return n;for(var t=e.parentNode;t;){if(n=t[et]||t[$n]){if(t=n.alternate,n.child!==null||t!==null&&t.child!==null)for(e=lf(e);e!==null;){if(t=e[$n])return t;e=lf(e)}return n}e=t,t=e.parentNode}return null}function Vi(e){return e=e[$n]||e[et],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function mr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(H(33))}function va(e){return e[Pi]||null}var _u=[],gr=-1;function At(e){return{current:e}}function Ee(e){0>gr||(e.current=_u[gr],_u[gr]=null,gr--)}function _e(e,n){gr++,_u[gr]=e.current,e.current=n}var Tt={},Xe=At(Tt),cn=At(!1),Qt=Tt;function Ar(e,n){var t=e.type.contextTypes;if(!t)return Tt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===n)return r.__reactInternalMemoizedMaskedChildContext;var i={},l;for(l in t)i[l]=n[l];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=n,e.__reactInternalMemoizedMaskedChildContext=i),i}function fn(e){return e=e.childContextTypes,e!=null}function $l(){Ee(cn),Ee(Xe)}function af(e,n,t){if(Xe.current!==Tt)throw Error(H(168));_e(Xe,n),_e(cn,t)}function Sh(e,n,t){var r=e.stateNode;if(n=n.childContextTypes,typeof r.getChildContext!="function")return t;r=r.getChildContext();for(var i in r)if(!(i in n))throw Error(H(108,Wy(e)||"Unknown",i));return Ie({},t,r)}function Vl(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Tt,Qt=Xe.current,_e(Xe,e),_e(cn,cn.current),!0}function of(e,n,t){var r=e.stateNode;if(!r)throw Error(H(169));t?(e=Sh(e,n,Qt),r.__reactInternalMemoizedMergedChildContext=e,Ee(cn),Ee(Xe),_e(Xe,e)):Ee(cn),_e(cn,t)}var Kn=null,ka=!1,no=!1;function Ch(e){Kn===null?Kn=[e]:Kn.push(e)}function s1(e){ka=!0,Ch(e)}function jt(){if(!no&&Kn!==null){no=!0;var e=0,n=ve;try{var t=Kn;for(ve=1;e<t.length;e++){var r=t[e];do r=r(!0);while(r!==null)}Kn=null,ka=!1}catch(i){throw Kn!==null&&(Kn=Kn.slice(e+1)),Kp(ys,jt),i}finally{ve=n,no=!1}}return null}var yr=[],vr=0,Wl=null,Ql=0,Cn=[],bn=0,Yt=null,Xn=1,Jn="";function Mt(e,n){yr[vr++]=Ql,yr[vr++]=Wl,Wl=e,Ql=n}function bh(e,n,t){Cn[bn++]=Xn,Cn[bn++]=Jn,Cn[bn++]=Yt,Yt=e;var r=Xn;e=Jn;var i=32-Rn(r)-1;r&=~(1<<i),t+=1;var l=32-Rn(n)+i;if(30<l){var a=i-i%5;l=(r&(1<<a)-1).toString(32),r>>=a,i-=a,Xn=1<<32-Rn(n)+i|t<<i|r,Jn=l+e}else Xn=1<<l|t<<i|r,Jn=e}function Es(e){e.return!==null&&(Mt(e,1),bh(e,1,0))}function Ts(e){for(;e===Wl;)Wl=yr[--vr],yr[vr]=null,Ql=yr[--vr],yr[vr]=null;for(;e===Yt;)Yt=Cn[--bn],Cn[bn]=null,Jn=Cn[--bn],Cn[bn]=null,Xn=Cn[--bn],Cn[bn]=null}var vn=null,yn=null,ze=!1,On=null;function Eh(e,n){var t=Tn(5,null,null,0);t.elementType="DELETED",t.stateNode=n,t.return=e,n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)}function uf(e,n){switch(e.tag){case 5:var t=e.type;return n=n.nodeType!==1||t.toLowerCase()!==n.nodeName.toLowerCase()?null:n,n!==null?(e.stateNode=n,vn=e,yn=xt(n.firstChild),!0):!1;case 6:return n=e.pendingProps===""||n.nodeType!==3?null:n,n!==null?(e.stateNode=n,vn=e,yn=null,!0):!1;case 13:return n=n.nodeType!==8?null:n,n!==null?(t=Yt!==null?{id:Xn,overflow:Jn}:null,e.memoizedState={dehydrated:n,treeContext:t,retryLane:1073741824},t=Tn(18,null,null,0),t.stateNode=n,t.return=e,e.child=t,vn=e,yn=null,!0):!1;default:return!1}}function Su(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Cu(e){if(ze){var n=yn;if(n){var t=n;if(!uf(e,n)){if(Su(e))throw Error(H(418));n=xt(t.nextSibling);var r=vn;n&&uf(e,n)?Eh(r,t):(e.flags=e.flags&-4097|2,ze=!1,vn=e)}}else{if(Su(e))throw Error(H(418));e.flags=e.flags&-4097|2,ze=!1,vn=e}}}function sf(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;vn=e}function sl(e){if(e!==vn)return!1;if(!ze)return sf(e),ze=!0,!1;var n;if((n=e.tag!==3)&&!(n=e.tag!==5)&&(n=e.type,n=n!=="head"&&n!=="body"&&!ku(e.type,e.memoizedProps)),n&&(n=yn)){if(Su(e))throw Th(),Error(H(418));for(;n;)Eh(e,n),n=xt(n.nextSibling)}if(sf(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(H(317));e:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="/$"){if(n===0){yn=xt(e.nextSibling);break e}n--}else t!=="$"&&t!=="$!"&&t!=="$?"||n++}e=e.nextSibling}yn=null}}else yn=vn?xt(e.stateNode.nextSibling):null;return!0}function Th(){for(var e=yn;e;)e=xt(e.nextSibling)}function jr(){yn=vn=null,ze=!1}function zs(e){On===null?On=[e]:On.push(e)}var c1=rt.ReactCurrentBatchConfig;function ei(e,n,t){if(e=t.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(H(309));var r=t.stateNode}if(!r)throw Error(H(147,e));var i=r,l=""+e;return n!==null&&n.ref!==null&&typeof n.ref=="function"&&n.ref._stringRef===l?n.ref:(n=function(a){var o=i.refs;a===null?delete o[l]:o[l]=a},n._stringRef=l,n)}if(typeof e!="string")throw Error(H(284));if(!t._owner)throw Error(H(290,e))}return e}function cl(e,n){throw e=Object.prototype.toString.call(n),Error(H(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e))}function cf(e){var n=e._init;return n(e._payload)}function zh(e){function n(g,y){if(e){var k=g.deletions;k===null?(g.deletions=[y],g.flags|=16):k.push(y)}}function t(g,y){if(!e)return null;for(;y!==null;)n(g,y),y=y.sibling;return null}function r(g,y){for(g=new Map;y!==null;)y.key!==null?g.set(y.key,y):g.set(y.index,y),y=y.sibling;return g}function i(g,y){return g=Ct(g,y),g.index=0,g.sibling=null,g}function l(g,y,k){return g.index=k,e?(k=g.alternate,k!==null?(k=k.index,k<y?(g.flags|=2,y):k):(g.flags|=2,y)):(g.flags|=1048576,y)}function a(g){return e&&g.alternate===null&&(g.flags|=2),g}function o(g,y,k,T){return y===null||y.tag!==6?(y=uo(k,g.mode,T),y.return=g,y):(y=i(y,k),y.return=g,y)}function u(g,y,k,T){var R=k.type;return R===fr?d(g,y,k.props.children,T,k.key):y!==null&&(y.elementType===R||typeof R=="object"&&R!==null&&R.$$typeof===ct&&cf(R)===y.type)?(T=i(y,k.props),T.ref=ei(g,y,k),T.return=g,T):(T=Pl(k.type,k.key,k.props,null,g.mode,T),T.ref=ei(g,y,k),T.return=g,T)}function s(g,y,k,T){return y===null||y.tag!==4||y.stateNode.containerInfo!==k.containerInfo||y.stateNode.implementation!==k.implementation?(y=so(k,g.mode,T),y.return=g,y):(y=i(y,k.children||[]),y.return=g,y)}function d(g,y,k,T,R){return y===null||y.tag!==7?(y=Vt(k,g.mode,T,R),y.return=g,y):(y=i(y,k),y.return=g,y)}function f(g,y,k){if(typeof y=="string"&&y!==""||typeof y=="number")return y=uo(""+y,g.mode,k),y.return=g,y;if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Zi:return k=Pl(y.type,y.key,y.props,null,g.mode,k),k.ref=ei(g,null,y),k.return=g,k;case cr:return y=so(y,g.mode,k),y.return=g,y;case ct:var T=y._init;return f(g,T(y._payload),k)}if(ai(y)||Kr(y))return y=Vt(y,g.mode,k,null),y.return=g,y;cl(g,y)}return null}function p(g,y,k,T){var R=y!==null?y.key:null;if(typeof k=="string"&&k!==""||typeof k=="number")return R!==null?null:o(g,y,""+k,T);if(typeof k=="object"&&k!==null){switch(k.$$typeof){case Zi:return k.key===R?u(g,y,k,T):null;case cr:return k.key===R?s(g,y,k,T):null;case ct:return R=k._init,p(g,y,R(k._payload),T)}if(ai(k)||Kr(k))return R!==null?null:d(g,y,k,T,null);cl(g,k)}return null}function h(g,y,k,T,R){if(typeof T=="string"&&T!==""||typeof T=="number")return g=g.get(k)||null,o(y,g,""+T,R);if(typeof T=="object"&&T!==null){switch(T.$$typeof){case Zi:return g=g.get(T.key===null?k:T.key)||null,u(y,g,T,R);case cr:return g=g.get(T.key===null?k:T.key)||null,s(y,g,T,R);case ct:var C=T._init;return h(g,y,k,C(T._payload),R)}if(ai(T)||Kr(T))return g=g.get(k)||null,d(y,g,T,R,null);cl(y,T)}return null}function v(g,y,k,T){for(var R=null,C=null,B=y,V=y=0,ee=null;B!==null&&V<k.length;V++){B.index>V?(ee=B,B=null):ee=B.sibling;var E=p(g,B,k[V],T);if(E===null){B===null&&(B=ee);break}e&&B&&E.alternate===null&&n(g,B),y=l(E,y,V),C===null?R=E:C.sibling=E,C=E,B=ee}if(V===k.length)return t(g,B),ze&&Mt(g,V),R;if(B===null){for(;V<k.length;V++)B=f(g,k[V],T),B!==null&&(y=l(B,y,V),C===null?R=B:C.sibling=B,C=B);return ze&&Mt(g,V),R}for(B=r(g,B);V<k.length;V++)ee=h(B,g,V,k[V],T),ee!==null&&(e&&ee.alternate!==null&&B.delete(ee.key===null?V:ee.key),y=l(ee,y,V),C===null?R=ee:C.sibling=ee,C=ee);return e&&B.forEach(function(K){return n(g,K)}),ze&&Mt(g,V),R}function w(g,y,k,T){var R=Kr(k);if(typeof R!="function")throw Error(H(150));if(k=R.call(k),k==null)throw Error(H(151));for(var C=R=null,B=y,V=y=0,ee=null,E=k.next();B!==null&&!E.done;V++,E=k.next()){B.index>V?(ee=B,B=null):ee=B.sibling;var K=p(g,B,E.value,T);if(K===null){B===null&&(B=ee);break}e&&B&&K.alternate===null&&n(g,B),y=l(K,y,V),C===null?R=K:C.sibling=K,C=K,B=ee}if(E.done)return t(g,B),ze&&Mt(g,V),R;if(B===null){for(;!E.done;V++,E=k.next())E=f(g,E.value,T),E!==null&&(y=l(E,y,V),C===null?R=E:C.sibling=E,C=E);return ze&&Mt(g,V),R}for(B=r(g,B);!E.done;V++,E=k.next())E=h(B,g,V,E.value,T),E!==null&&(e&&E.alternate!==null&&B.delete(E.key===null?V:E.key),y=l(E,y,V),C===null?R=E:C.sibling=E,C=E);return e&&B.forEach(function(Z){return n(g,Z)}),ze&&Mt(g,V),R}function b(g,y,k,T){if(typeof k=="object"&&k!==null&&k.type===fr&&k.key===null&&(k=k.props.children),typeof k=="object"&&k!==null){switch(k.$$typeof){case Zi:e:{for(var R=k.key,C=y;C!==null;){if(C.key===R){if(R=k.type,R===fr){if(C.tag===7){t(g,C.sibling),y=i(C,k.props.children),y.return=g,g=y;break e}}else if(C.elementType===R||typeof R=="object"&&R!==null&&R.$$typeof===ct&&cf(R)===C.type){t(g,C.sibling),y=i(C,k.props),y.ref=ei(g,C,k),y.return=g,g=y;break e}t(g,C);break}else n(g,C);C=C.sibling}k.type===fr?(y=Vt(k.props.children,g.mode,T,k.key),y.return=g,g=y):(T=Pl(k.type,k.key,k.props,null,g.mode,T),T.ref=ei(g,y,k),T.return=g,g=T)}return a(g);case cr:e:{for(C=k.key;y!==null;){if(y.key===C)if(y.tag===4&&y.stateNode.containerInfo===k.containerInfo&&y.stateNode.implementation===k.implementation){t(g,y.sibling),y=i(y,k.children||[]),y.return=g,g=y;break e}else{t(g,y);break}else n(g,y);y=y.sibling}y=so(k,g.mode,T),y.return=g,g=y}return a(g);case ct:return C=k._init,b(g,y,C(k._payload),T)}if(ai(k))return v(g,y,k,T);if(Kr(k))return w(g,y,k,T);cl(g,k)}return typeof k=="string"&&k!==""||typeof k=="number"?(k=""+k,y!==null&&y.tag===6?(t(g,y.sibling),y=i(y,k),y.return=g,g=y):(t(g,y),y=uo(k,g.mode,T),y.return=g,g=y),a(g)):t(g,y)}return b}var Pr=zh(!0),Ah=zh(!1),Yl=At(null),Kl=null,kr=null,As=null;function js(){As=kr=Kl=null}function Ps(e){var n=Yl.current;Ee(Yl),e._currentValue=n}function bu(e,n,t){for(;e!==null;){var r=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,r!==null&&(r.childLanes|=n)):r!==null&&(r.childLanes&n)!==n&&(r.childLanes|=n),e===t)break;e=e.return}}function Er(e,n){Kl=e,As=kr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&n&&(sn=!0),e.firstContext=null)}function An(e){var n=e._currentValue;if(As!==e)if(e={context:e,memoizedValue:n,next:null},kr===null){if(Kl===null)throw Error(H(308));kr=e,Kl.dependencies={lanes:0,firstContext:e}}else kr=kr.next=e;return n}var Ut=null;function Is(e){Ut===null?Ut=[e]:Ut.push(e)}function jh(e,n,t,r){var i=n.interleaved;return i===null?(t.next=t,Is(n)):(t.next=i.next,i.next=t),n.interleaved=t,nt(e,r)}function nt(e,n){e.lanes|=n;var t=e.alternate;for(t!==null&&(t.lanes|=n),t=e,e=e.return;e!==null;)e.childLanes|=n,t=e.alternate,t!==null&&(t.childLanes|=n),t=e,e=e.return;return t.tag===3?t.stateNode:null}var ft=!1;function Ns(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Ph(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Gn(e,n){return{eventTime:e,lane:n,tag:0,payload:null,callback:null,next:null}}function wt(e,n,t){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,ge&2){var i=r.pending;return i===null?n.next=n:(n.next=i.next,i.next=n),r.pending=n,nt(e,t)}return i=r.interleaved,i===null?(n.next=n,Is(r)):(n.next=i.next,i.next=n),r.interleaved=n,nt(e,t)}function bl(e,n,t){if(n=n.updateQueue,n!==null&&(n=n.shared,(t&4194240)!==0)){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,vs(e,t)}}function ff(e,n){var t=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,t===r)){var i=null,l=null;if(t=t.firstBaseUpdate,t!==null){do{var a={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};l===null?i=l=a:l=l.next=a,t=t.next}while(t!==null);l===null?i=l=n:l=l.next=n}else i=l=n;t={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:l,shared:r.shared,effects:r.effects},e.updateQueue=t;return}e=t.lastBaseUpdate,e===null?t.firstBaseUpdate=n:e.next=n,t.lastBaseUpdate=n}function Xl(e,n,t,r){var i=e.updateQueue;ft=!1;var l=i.firstBaseUpdate,a=i.lastBaseUpdate,o=i.shared.pending;if(o!==null){i.shared.pending=null;var u=o,s=u.next;u.next=null,a===null?l=s:a.next=s,a=u;var d=e.alternate;d!==null&&(d=d.updateQueue,o=d.lastBaseUpdate,o!==a&&(o===null?d.firstBaseUpdate=s:o.next=s,d.lastBaseUpdate=u))}if(l!==null){var f=i.baseState;a=0,d=s=u=null,o=l;do{var p=o.lane,h=o.eventTime;if((r&p)===p){d!==null&&(d=d.next={eventTime:h,lane:0,tag:o.tag,payload:o.payload,callback:o.callback,next:null});e:{var v=e,w=o;switch(p=n,h=t,w.tag){case 1:if(v=w.payload,typeof v=="function"){f=v.call(h,f,p);break e}f=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=w.payload,p=typeof v=="function"?v.call(h,f,p):v,p==null)break e;f=Ie({},f,p);break e;case 2:ft=!0}}o.callback!==null&&o.lane!==0&&(e.flags|=64,p=i.effects,p===null?i.effects=[o]:p.push(o))}else h={eventTime:h,lane:p,tag:o.tag,payload:o.payload,callback:o.callback,next:null},d===null?(s=d=h,u=f):d=d.next=h,a|=p;if(o=o.next,o===null){if(o=i.shared.pending,o===null)break;p=o,o=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(!0);if(d===null&&(u=f),i.baseState=u,i.firstBaseUpdate=s,i.lastBaseUpdate=d,n=i.shared.interleaved,n!==null){i=n;do a|=i.lane,i=i.next;while(i!==n)}else l===null&&(i.shared.lanes=0);Xt|=a,e.lanes=a,e.memoizedState=f}}function df(e,n,t){if(e=n.effects,n.effects=null,e!==null)for(n=0;n<e.length;n++){var r=e[n],i=r.callback;if(i!==null){if(r.callback=null,r=t,typeof i!="function")throw Error(H(191,i));i.call(r)}}}var Wi={},Wn=At(Wi),Ii=At(Wi),Ni=At(Wi);function Ht(e){if(e===Wi)throw Error(H(174));return e}function Ls(e,n){switch(_e(Ni,n),_e(Ii,e),_e(Wn,Wi),e=n.nodeType,e){case 9:case 11:n=(n=n.documentElement)?n.namespaceURI:lu(null,"");break;default:e=e===8?n.parentNode:n,n=e.namespaceURI||null,e=e.tagName,n=lu(n,e)}Ee(Wn),_e(Wn,n)}function Ir(){Ee(Wn),Ee(Ii),Ee(Ni)}function Ih(e){Ht(Ni.current);var n=Ht(Wn.current),t=lu(n,e.type);n!==t&&(_e(Ii,e),_e(Wn,t))}function Os(e){Ii.current===e&&(Ee(Wn),Ee(Ii))}var Ae=At(0);function Jl(e){for(var n=e;n!==null;){if(n.tag===13){var t=n.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if(n.flags&128)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var to=[];function Rs(){for(var e=0;e<to.length;e++)to[e]._workInProgressVersionPrimary=null;to.length=0}var El=rt.ReactCurrentDispatcher,ro=rt.ReactCurrentBatchConfig,Kt=0,je=null,qe=null,De=null,Gl=!1,hi=!1,Li=0,f1=0;function Ve(){throw Error(H(321))}function Ms(e,n){if(n===null)return!1;for(var t=0;t<n.length&&t<e.length;t++)if(!Fn(e[t],n[t]))return!1;return!0}function qs(e,n,t,r,i,l){if(Kt=l,je=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,El.current=e===null||e.memoizedState===null?m1:g1,e=t(r,i),hi){l=0;do{if(hi=!1,Li=0,25<=l)throw Error(H(301));l+=1,De=qe=null,n.updateQueue=null,El.current=y1,e=t(r,i)}while(hi)}if(El.current=Zl,n=qe!==null&&qe.next!==null,Kt=0,De=qe=je=null,Gl=!1,n)throw Error(H(300));return e}function Fs(){var e=Li!==0;return Li=0,e}function Un(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return De===null?je.memoizedState=De=e:De=De.next=e,De}function jn(){if(qe===null){var e=je.alternate;e=e!==null?e.memoizedState:null}else e=qe.next;var n=De===null?je.memoizedState:De.next;if(n!==null)De=n,qe=e;else{if(e===null)throw Error(H(310));qe=e,e={memoizedState:qe.memoizedState,baseState:qe.baseState,baseQueue:qe.baseQueue,queue:qe.queue,next:null},De===null?je.memoizedState=De=e:De=De.next=e}return De}function Oi(e,n){return typeof n=="function"?n(e):n}function io(e){var n=jn(),t=n.queue;if(t===null)throw Error(H(311));t.lastRenderedReducer=e;var r=qe,i=r.baseQueue,l=t.pending;if(l!==null){if(i!==null){var a=i.next;i.next=l.next,l.next=a}r.baseQueue=i=l,t.pending=null}if(i!==null){l=i.next,r=r.baseState;var o=a=null,u=null,s=l;do{var d=s.lane;if((Kt&d)===d)u!==null&&(u=u.next={lane:0,action:s.action,hasEagerState:s.hasEagerState,eagerState:s.eagerState,next:null}),r=s.hasEagerState?s.eagerState:e(r,s.action);else{var f={lane:d,action:s.action,hasEagerState:s.hasEagerState,eagerState:s.eagerState,next:null};u===null?(o=u=f,a=r):u=u.next=f,je.lanes|=d,Xt|=d}s=s.next}while(s!==null&&s!==l);u===null?a=r:u.next=o,Fn(r,n.memoizedState)||(sn=!0),n.memoizedState=r,n.baseState=a,n.baseQueue=u,t.lastRenderedState=r}if(e=t.interleaved,e!==null){i=e;do l=i.lane,je.lanes|=l,Xt|=l,i=i.next;while(i!==e)}else i===null&&(t.lanes=0);return[n.memoizedState,t.dispatch]}function lo(e){var n=jn(),t=n.queue;if(t===null)throw Error(H(311));t.lastRenderedReducer=e;var r=t.dispatch,i=t.pending,l=n.memoizedState;if(i!==null){t.pending=null;var a=i=i.next;do l=e(l,a.action),a=a.next;while(a!==i);Fn(l,n.memoizedState)||(sn=!0),n.memoizedState=l,n.baseQueue===null&&(n.baseState=l),t.lastRenderedState=l}return[l,r]}function Nh(){}function Lh(e,n){var t=je,r=jn(),i=n(),l=!Fn(r.memoizedState,i);if(l&&(r.memoizedState=i,sn=!0),r=r.queue,Ds(Mh.bind(null,t,r,e),[e]),r.getSnapshot!==n||l||De!==null&&De.memoizedState.tag&1){if(t.flags|=2048,Ri(9,Rh.bind(null,t,r,i,n),void 0,null),Be===null)throw Error(H(349));Kt&30||Oh(t,n,i)}return i}function Oh(e,n,t){e.flags|=16384,e={getSnapshot:n,value:t},n=je.updateQueue,n===null?(n={lastEffect:null,stores:null},je.updateQueue=n,n.stores=[e]):(t=n.stores,t===null?n.stores=[e]:t.push(e))}function Rh(e,n,t,r){n.value=t,n.getSnapshot=r,qh(n)&&Fh(e)}function Mh(e,n,t){return t(function(){qh(n)&&Fh(e)})}function qh(e){var n=e.getSnapshot;e=e.value;try{var t=n();return!Fn(e,t)}catch{return!0}}function Fh(e){var n=nt(e,1);n!==null&&Mn(n,e,1,-1)}function pf(e){var n=Un();return typeof e=="function"&&(e=e()),n.memoizedState=n.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Oi,lastRenderedState:e},n.queue=e,e=e.dispatch=h1.bind(null,je,e),[n.memoizedState,e]}function Ri(e,n,t,r){return e={tag:e,create:n,destroy:t,deps:r,next:null},n=je.updateQueue,n===null?(n={lastEffect:null,stores:null},je.updateQueue=n,n.lastEffect=e.next=e):(t=n.lastEffect,t===null?n.lastEffect=e.next=e:(r=t.next,t.next=e,e.next=r,n.lastEffect=e)),e}function Dh(){return jn().memoizedState}function Tl(e,n,t,r){var i=Un();je.flags|=e,i.memoizedState=Ri(1|n,t,void 0,r===void 0?null:r)}function xa(e,n,t,r){var i=jn();r=r===void 0?null:r;var l=void 0;if(qe!==null){var a=qe.memoizedState;if(l=a.destroy,r!==null&&Ms(r,a.deps)){i.memoizedState=Ri(n,t,l,r);return}}je.flags|=e,i.memoizedState=Ri(1|n,t,l,r)}function hf(e,n){return Tl(8390656,8,e,n)}function Ds(e,n){return xa(2048,8,e,n)}function Bh(e,n){return xa(4,2,e,n)}function Uh(e,n){return xa(4,4,e,n)}function Hh(e,n){if(typeof n=="function")return e=e(),n(e),function(){n(null)};if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function $h(e,n,t){return t=t!=null?t.concat([e]):null,xa(4,4,Hh.bind(null,n,e),t)}function Bs(){}function Vh(e,n){var t=jn();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&Ms(n,r[1])?r[0]:(t.memoizedState=[e,n],e)}function Wh(e,n){var t=jn();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&Ms(n,r[1])?r[0]:(e=e(),t.memoizedState=[e,n],e)}function Qh(e,n,t){return Kt&21?(Fn(t,n)||(t=Gp(),je.lanes|=t,Xt|=t,e.baseState=!0),n):(e.baseState&&(e.baseState=!1,sn=!0),e.memoizedState=t)}function d1(e,n){var t=ve;ve=t!==0&&4>t?t:4,e(!0);var r=ro.transition;ro.transition={};try{e(!1),n()}finally{ve=t,ro.transition=r}}function Yh(){return jn().memoizedState}function p1(e,n,t){var r=St(e);if(t={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null},Kh(e))Xh(n,t);else if(t=jh(e,n,t,r),t!==null){var i=nn();Mn(t,e,r,i),Jh(t,n,r)}}function h1(e,n,t){var r=St(e),i={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null};if(Kh(e))Xh(n,i);else{var l=e.alternate;if(e.lanes===0&&(l===null||l.lanes===0)&&(l=n.lastRenderedReducer,l!==null))try{var a=n.lastRenderedState,o=l(a,t);if(i.hasEagerState=!0,i.eagerState=o,Fn(o,a)){var u=n.interleaved;u===null?(i.next=i,Is(n)):(i.next=u.next,u.next=i),n.interleaved=i;return}}catch{}finally{}t=jh(e,n,i,r),t!==null&&(i=nn(),Mn(t,e,r,i),Jh(t,n,r))}}function Kh(e){var n=e.alternate;return e===je||n!==null&&n===je}function Xh(e,n){hi=Gl=!0;var t=e.pending;t===null?n.next=n:(n.next=t.next,t.next=n),e.pending=n}function Jh(e,n,t){if(t&4194240){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,vs(e,t)}}var Zl={readContext:An,useCallback:Ve,useContext:Ve,useEffect:Ve,useImperativeHandle:Ve,useInsertionEffect:Ve,useLayoutEffect:Ve,useMemo:Ve,useReducer:Ve,useRef:Ve,useState:Ve,useDebugValue:Ve,useDeferredValue:Ve,useTransition:Ve,useMutableSource:Ve,useSyncExternalStore:Ve,useId:Ve,unstable_isNewReconciler:!1},m1={readContext:An,useCallback:function(e,n){return Un().memoizedState=[e,n===void 0?null:n],e},useContext:An,useEffect:hf,useImperativeHandle:function(e,n,t){return t=t!=null?t.concat([e]):null,Tl(4194308,4,Hh.bind(null,n,e),t)},useLayoutEffect:function(e,n){return Tl(4194308,4,e,n)},useInsertionEffect:function(e,n){return Tl(4,2,e,n)},useMemo:function(e,n){var t=Un();return n=n===void 0?null:n,e=e(),t.memoizedState=[e,n],e},useReducer:function(e,n,t){var r=Un();return n=t!==void 0?t(n):n,r.memoizedState=r.baseState=n,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},r.queue=e,e=e.dispatch=p1.bind(null,je,e),[r.memoizedState,e]},useRef:function(e){var n=Un();return e={current:e},n.memoizedState=e},useState:pf,useDebugValue:Bs,useDeferredValue:function(e){return Un().memoizedState=e},useTransition:function(){var e=pf(!1),n=e[0];return e=d1.bind(null,e[1]),Un().memoizedState=e,[n,e]},useMutableSource:function(){},useSyncExternalStore:function(e,n,t){var r=je,i=Un();if(ze){if(t===void 0)throw Error(H(407));t=t()}else{if(t=n(),Be===null)throw Error(H(349));Kt&30||Oh(r,n,t)}i.memoizedState=t;var l={value:t,getSnapshot:n};return i.queue=l,hf(Mh.bind(null,r,l,e),[e]),r.flags|=2048,Ri(9,Rh.bind(null,r,l,t,n),void 0,null),t},useId:function(){var e=Un(),n=Be.identifierPrefix;if(ze){var t=Jn,r=Xn;t=(r&~(1<<32-Rn(r)-1)).toString(32)+t,n=":"+n+"R"+t,t=Li++,0<t&&(n+="H"+t.toString(32)),n+=":"}else t=f1++,n=":"+n+"r"+t.toString(32)+":";return e.memoizedState=n},unstable_isNewReconciler:!1},g1={readContext:An,useCallback:Vh,useContext:An,useEffect:Ds,useImperativeHandle:$h,useInsertionEffect:Bh,useLayoutEffect:Uh,useMemo:Wh,useReducer:io,useRef:Dh,useState:function(){return io(Oi)},useDebugValue:Bs,useDeferredValue:function(e){var n=jn();return Qh(n,qe.memoizedState,e)},useTransition:function(){var e=io(Oi)[0],n=jn().memoizedState;return[e,n]},useMutableSource:Nh,useSyncExternalStore:Lh,useId:Yh,unstable_isNewReconciler:!1},y1={readContext:An,useCallback:Vh,useContext:An,useEffect:Ds,useImperativeHandle:$h,useInsertionEffect:Bh,useLayoutEffect:Uh,useMemo:Wh,useReducer:lo,useRef:Dh,useState:function(){return lo(Oi)},useDebugValue:Bs,useDeferredValue:function(e){var n=jn();return qe===null?n.memoizedState=e:Qh(n,qe.memoizedState,e)},useTransition:function(){var e=lo(Oi)[0],n=jn().memoizedState;return[e,n]},useMutableSource:Nh,useSyncExternalStore:Lh,useId:Yh,unstable_isNewReconciler:!1};function Nn(e,n){if(e&&e.defaultProps){n=Ie({},n),e=e.defaultProps;for(var t in e)n[t]===void 0&&(n[t]=e[t]);return n}return n}function Eu(e,n,t,r){n=e.memoizedState,t=t(r,n),t=t==null?n:Ie({},n,t),e.memoizedState=t,e.lanes===0&&(e.updateQueue.baseState=t)}var wa={isMounted:function(e){return(e=e._reactInternals)?er(e)===e:!1},enqueueSetState:function(e,n,t){e=e._reactInternals;var r=nn(),i=St(e),l=Gn(r,i);l.payload=n,t!=null&&(l.callback=t),n=wt(e,l,i),n!==null&&(Mn(n,e,i,r),bl(n,e,i))},enqueueReplaceState:function(e,n,t){e=e._reactInternals;var r=nn(),i=St(e),l=Gn(r,i);l.tag=1,l.payload=n,t!=null&&(l.callback=t),n=wt(e,l,i),n!==null&&(Mn(n,e,i,r),bl(n,e,i))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var t=nn(),r=St(e),i=Gn(t,r);i.tag=2,n!=null&&(i.callback=n),n=wt(e,i,r),n!==null&&(Mn(n,e,r,t),bl(n,e,r))}};function mf(e,n,t,r,i,l,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,l,a):n.prototype&&n.prototype.isPureReactComponent?!zi(t,r)||!zi(i,l):!0}function Gh(e,n,t){var r=!1,i=Tt,l=n.contextType;return typeof l=="object"&&l!==null?l=An(l):(i=fn(n)?Qt:Xe.current,r=n.contextTypes,l=(r=r!=null)?Ar(e,i):Tt),n=new n(t,l),e.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=wa,e.stateNode=n,n._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=l),n}function gf(e,n,t,r){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(t,r),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(t,r),n.state!==e&&wa.enqueueReplaceState(n,n.state,null)}function Tu(e,n,t,r){var i=e.stateNode;i.props=t,i.state=e.memoizedState,i.refs={},Ns(e);var l=n.contextType;typeof l=="object"&&l!==null?i.context=An(l):(l=fn(n)?Qt:Xe.current,i.context=Ar(e,l)),i.state=e.memoizedState,l=n.getDerivedStateFromProps,typeof l=="function"&&(Eu(e,n,l,t),i.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(n=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),n!==i.state&&wa.enqueueReplaceState(i,i.state,null),Xl(e,t,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Nr(e,n){try{var t="",r=n;do t+=Vy(r),r=r.return;while(r);var i=t}catch(l){i=`
Error generating stack: `+l.message+`
`+l.stack}return{value:e,source:n,stack:i,digest:null}}function ao(e,n,t){return{value:e,source:null,stack:t??null,digest:n??null}}function zu(e,n){try{console.error(n.value)}catch(t){setTimeout(function(){throw t})}}var v1=typeof WeakMap=="function"?WeakMap:Map;function Zh(e,n,t){t=Gn(-1,t),t.tag=3,t.payload={element:null};var r=n.value;return t.callback=function(){na||(na=!0,qu=r),zu(e,n)},t}function em(e,n,t){t=Gn(-1,t),t.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=n.value;t.payload=function(){return r(i)},t.callback=function(){zu(e,n)}}var l=e.stateNode;return l!==null&&typeof l.componentDidCatch=="function"&&(t.callback=function(){zu(e,n),typeof r!="function"&&(_t===null?_t=new Set([this]):_t.add(this));var a=n.stack;this.componentDidCatch(n.value,{componentStack:a!==null?a:""})}),t}function yf(e,n,t){var r=e.pingCache;if(r===null){r=e.pingCache=new v1;var i=new Set;r.set(n,i)}else i=r.get(n),i===void 0&&(i=new Set,r.set(n,i));i.has(t)||(i.add(t),e=I1.bind(null,e,n,t),n.then(e,e))}function vf(e){do{var n;if((n=e.tag===13)&&(n=e.memoizedState,n=n!==null?n.dehydrated!==null:!0),n)return e;e=e.return}while(e!==null);return null}function kf(e,n,t,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===n?e.flags|=65536:(e.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(n=Gn(-1,1),n.tag=2,wt(t,n,1))),t.lanes|=1),e)}var k1=rt.ReactCurrentOwner,sn=!1;function Ze(e,n,t,r){n.child=e===null?Ah(n,null,t,r):Pr(n,e.child,t,r)}function xf(e,n,t,r,i){t=t.render;var l=n.ref;return Er(n,i),r=qs(e,n,t,r,l,i),t=Fs(),e!==null&&!sn?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~i,tt(e,n,i)):(ze&&t&&Es(n),n.flags|=1,Ze(e,n,r,i),n.child)}function wf(e,n,t,r,i){if(e===null){var l=t.type;return typeof l=="function"&&!Ks(l)&&l.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(n.tag=15,n.type=l,nm(e,n,l,r,i)):(e=Pl(t.type,null,r,n,n.mode,i),e.ref=n.ref,e.return=n,n.child=e)}if(l=e.child,!(e.lanes&i)){var a=l.memoizedProps;if(t=t.compare,t=t!==null?t:zi,t(a,r)&&e.ref===n.ref)return tt(e,n,i)}return n.flags|=1,e=Ct(l,r),e.ref=n.ref,e.return=n,n.child=e}function nm(e,n,t,r,i){if(e!==null){var l=e.memoizedProps;if(zi(l,r)&&e.ref===n.ref)if(sn=!1,n.pendingProps=r=l,(e.lanes&i)!==0)e.flags&131072&&(sn=!0);else return n.lanes=e.lanes,tt(e,n,i)}return Au(e,n,t,r,i)}function tm(e,n,t){var r=n.pendingProps,i=r.children,l=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(n.mode&1))n.memoizedState={baseLanes:0,cachePool:null,transitions:null},_e(wr,gn),gn|=t;else{if(!(t&1073741824))return e=l!==null?l.baseLanes|t:t,n.lanes=n.childLanes=1073741824,n.memoizedState={baseLanes:e,cachePool:null,transitions:null},n.updateQueue=null,_e(wr,gn),gn|=e,null;n.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=l!==null?l.baseLanes:t,_e(wr,gn),gn|=r}else l!==null?(r=l.baseLanes|t,n.memoizedState=null):r=t,_e(wr,gn),gn|=r;return Ze(e,n,i,t),n.child}function rm(e,n){var t=n.ref;(e===null&&t!==null||e!==null&&e.ref!==t)&&(n.flags|=512,n.flags|=2097152)}function Au(e,n,t,r,i){var l=fn(t)?Qt:Xe.current;return l=Ar(n,l),Er(n,i),t=qs(e,n,t,r,l,i),r=Fs(),e!==null&&!sn?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~i,tt(e,n,i)):(ze&&r&&Es(n),n.flags|=1,Ze(e,n,t,i),n.child)}function _f(e,n,t,r,i){if(fn(t)){var l=!0;Vl(n)}else l=!1;if(Er(n,i),n.stateNode===null)zl(e,n),Gh(n,t,r),Tu(n,t,r,i),r=!0;else if(e===null){var a=n.stateNode,o=n.memoizedProps;a.props=o;var u=a.context,s=t.contextType;typeof s=="object"&&s!==null?s=An(s):(s=fn(t)?Qt:Xe.current,s=Ar(n,s));var d=t.getDerivedStateFromProps,f=typeof d=="function"||typeof a.getSnapshotBeforeUpdate=="function";f||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==r||u!==s)&&gf(n,a,r,s),ft=!1;var p=n.memoizedState;a.state=p,Xl(n,r,a,i),u=n.memoizedState,o!==r||p!==u||cn.current||ft?(typeof d=="function"&&(Eu(n,t,d,r),u=n.memoizedState),(o=ft||mf(n,t,o,r,p,u,s))?(f||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(n.flags|=4194308)):(typeof a.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=r,n.memoizedState=u),a.props=r,a.state=u,a.context=s,r=o):(typeof a.componentDidMount=="function"&&(n.flags|=4194308),r=!1)}else{a=n.stateNode,Ph(e,n),o=n.memoizedProps,s=n.type===n.elementType?o:Nn(n.type,o),a.props=s,f=n.pendingProps,p=a.context,u=t.contextType,typeof u=="object"&&u!==null?u=An(u):(u=fn(t)?Qt:Xe.current,u=Ar(n,u));var h=t.getDerivedStateFromProps;(d=typeof h=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==f||p!==u)&&gf(n,a,r,u),ft=!1,p=n.memoizedState,a.state=p,Xl(n,r,a,i);var v=n.memoizedState;o!==f||p!==v||cn.current||ft?(typeof h=="function"&&(Eu(n,t,h,r),v=n.memoizedState),(s=ft||mf(n,t,s,r,p,v,u)||!1)?(d||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(r,v,u),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(r,v,u)),typeof a.componentDidUpdate=="function"&&(n.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof a.componentDidUpdate!="function"||o===e.memoizedProps&&p===e.memoizedState||(n.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===e.memoizedProps&&p===e.memoizedState||(n.flags|=1024),n.memoizedProps=r,n.memoizedState=v),a.props=r,a.state=v,a.context=u,r=s):(typeof a.componentDidUpdate!="function"||o===e.memoizedProps&&p===e.memoizedState||(n.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===e.memoizedProps&&p===e.memoizedState||(n.flags|=1024),r=!1)}return ju(e,n,t,r,l,i)}function ju(e,n,t,r,i,l){rm(e,n);var a=(n.flags&128)!==0;if(!r&&!a)return i&&of(n,t,!1),tt(e,n,l);r=n.stateNode,k1.current=n;var o=a&&typeof t.getDerivedStateFromError!="function"?null:r.render();return n.flags|=1,e!==null&&a?(n.child=Pr(n,e.child,null,l),n.child=Pr(n,null,o,l)):Ze(e,n,o,l),n.memoizedState=r.state,i&&of(n,t,!0),n.child}function im(e){var n=e.stateNode;n.pendingContext?af(e,n.pendingContext,n.pendingContext!==n.context):n.context&&af(e,n.context,!1),Ls(e,n.containerInfo)}function Sf(e,n,t,r,i){return jr(),zs(i),n.flags|=256,Ze(e,n,t,r),n.child}var Pu={dehydrated:null,treeContext:null,retryLane:0};function Iu(e){return{baseLanes:e,cachePool:null,transitions:null}}function lm(e,n,t){var r=n.pendingProps,i=Ae.current,l=!1,a=(n.flags&128)!==0,o;if((o=a)||(o=e!==null&&e.memoizedState===null?!1:(i&2)!==0),o?(l=!0,n.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),_e(Ae,i&1),e===null)return Cu(n),e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(n.mode&1?e.data==="$!"?n.lanes=8:n.lanes=1073741824:n.lanes=1,null):(a=r.children,e=r.fallback,l?(r=n.mode,l=n.child,a={mode:"hidden",children:a},!(r&1)&&l!==null?(l.childLanes=0,l.pendingProps=a):l=Ca(a,r,0,null),e=Vt(e,r,t,null),l.return=n,e.return=n,l.sibling=e,n.child=l,n.child.memoizedState=Iu(t),n.memoizedState=Pu,e):Us(n,a));if(i=e.memoizedState,i!==null&&(o=i.dehydrated,o!==null))return x1(e,n,a,r,o,i,t);if(l){l=r.fallback,a=n.mode,i=e.child,o=i.sibling;var u={mode:"hidden",children:r.children};return!(a&1)&&n.child!==i?(r=n.child,r.childLanes=0,r.pendingProps=u,n.deletions=null):(r=Ct(i,u),r.subtreeFlags=i.subtreeFlags&14680064),o!==null?l=Ct(o,l):(l=Vt(l,a,t,null),l.flags|=2),l.return=n,r.return=n,r.sibling=l,n.child=r,r=l,l=n.child,a=e.child.memoizedState,a=a===null?Iu(t):{baseLanes:a.baseLanes|t,cachePool:null,transitions:a.transitions},l.memoizedState=a,l.childLanes=e.childLanes&~t,n.memoizedState=Pu,r}return l=e.child,e=l.sibling,r=Ct(l,{mode:"visible",children:r.children}),!(n.mode&1)&&(r.lanes=t),r.return=n,r.sibling=null,e!==null&&(t=n.deletions,t===null?(n.deletions=[e],n.flags|=16):t.push(e)),n.child=r,n.memoizedState=null,r}function Us(e,n){return n=Ca({mode:"visible",children:n},e.mode,0,null),n.return=e,e.child=n}function fl(e,n,t,r){return r!==null&&zs(r),Pr(n,e.child,null,t),e=Us(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function x1(e,n,t,r,i,l,a){if(t)return n.flags&256?(n.flags&=-257,r=ao(Error(H(422))),fl(e,n,a,r)):n.memoizedState!==null?(n.child=e.child,n.flags|=128,null):(l=r.fallback,i=n.mode,r=Ca({mode:"visible",children:r.children},i,0,null),l=Vt(l,i,a,null),l.flags|=2,r.return=n,l.return=n,r.sibling=l,n.child=r,n.mode&1&&Pr(n,e.child,null,a),n.child.memoizedState=Iu(a),n.memoizedState=Pu,l);if(!(n.mode&1))return fl(e,n,a,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var o=r.dgst;return r=o,l=Error(H(419)),r=ao(l,r,void 0),fl(e,n,a,r)}if(o=(a&e.childLanes)!==0,sn||o){if(r=Be,r!==null){switch(a&-a){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|a)?0:i,i!==0&&i!==l.retryLane&&(l.retryLane=i,nt(e,i),Mn(r,e,i,-1))}return Ys(),r=ao(Error(H(421))),fl(e,n,a,r)}return i.data==="$?"?(n.flags|=128,n.child=e.child,n=N1.bind(null,e),i._reactRetry=n,null):(e=l.treeContext,yn=xt(i.nextSibling),vn=n,ze=!0,On=null,e!==null&&(Cn[bn++]=Xn,Cn[bn++]=Jn,Cn[bn++]=Yt,Xn=e.id,Jn=e.overflow,Yt=n),n=Us(n,r.children),n.flags|=4096,n)}function Cf(e,n,t){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n),bu(e.return,n,t)}function oo(e,n,t,r,i){var l=e.memoizedState;l===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:t,tailMode:i}:(l.isBackwards=n,l.rendering=null,l.renderingStartTime=0,l.last=r,l.tail=t,l.tailMode=i)}function am(e,n,t){var r=n.pendingProps,i=r.revealOrder,l=r.tail;if(Ze(e,n,r.children,t),r=Ae.current,r&2)r=r&1|2,n.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Cf(e,t,n);else if(e.tag===19)Cf(e,t,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(_e(Ae,r),!(n.mode&1))n.memoizedState=null;else switch(i){case"forwards":for(t=n.child,i=null;t!==null;)e=t.alternate,e!==null&&Jl(e)===null&&(i=t),t=t.sibling;t=i,t===null?(i=n.child,n.child=null):(i=t.sibling,t.sibling=null),oo(n,!1,i,t,l);break;case"backwards":for(t=null,i=n.child,n.child=null;i!==null;){if(e=i.alternate,e!==null&&Jl(e)===null){n.child=i;break}e=i.sibling,i.sibling=t,t=i,i=e}oo(n,!0,t,null,l);break;case"together":oo(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function zl(e,n){!(n.mode&1)&&e!==null&&(e.alternate=null,n.alternate=null,n.flags|=2)}function tt(e,n,t){if(e!==null&&(n.dependencies=e.dependencies),Xt|=n.lanes,!(t&n.childLanes))return null;if(e!==null&&n.child!==e.child)throw Error(H(153));if(n.child!==null){for(e=n.child,t=Ct(e,e.pendingProps),n.child=t,t.return=n;e.sibling!==null;)e=e.sibling,t=t.sibling=Ct(e,e.pendingProps),t.return=n;t.sibling=null}return n.child}function w1(e,n,t){switch(n.tag){case 3:im(n),jr();break;case 5:Ih(n);break;case 1:fn(n.type)&&Vl(n);break;case 4:Ls(n,n.stateNode.containerInfo);break;case 10:var r=n.type._context,i=n.memoizedProps.value;_e(Yl,r._currentValue),r._currentValue=i;break;case 13:if(r=n.memoizedState,r!==null)return r.dehydrated!==null?(_e(Ae,Ae.current&1),n.flags|=128,null):t&n.child.childLanes?lm(e,n,t):(_e(Ae,Ae.current&1),e=tt(e,n,t),e!==null?e.sibling:null);_e(Ae,Ae.current&1);break;case 19:if(r=(t&n.childLanes)!==0,e.flags&128){if(r)return am(e,n,t);n.flags|=128}if(i=n.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),_e(Ae,Ae.current),r)break;return null;case 22:case 23:return n.lanes=0,tm(e,n,t)}return tt(e,n,t)}var om,Nu,um,sm;om=function(e,n){for(var t=n.child;t!==null;){if(t.tag===5||t.tag===6)e.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break;for(;t.sibling===null;){if(t.return===null||t.return===n)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};Nu=function(){};um=function(e,n,t,r){var i=e.memoizedProps;if(i!==r){e=n.stateNode,Ht(Wn.current);var l=null;switch(t){case"input":i=nu(e,i),r=nu(e,r),l=[];break;case"select":i=Ie({},i,{value:void 0}),r=Ie({},r,{value:void 0}),l=[];break;case"textarea":i=iu(e,i),r=iu(e,r),l=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Hl)}au(t,r);var a;t=null;for(s in i)if(!r.hasOwnProperty(s)&&i.hasOwnProperty(s)&&i[s]!=null)if(s==="style"){var o=i[s];for(a in o)o.hasOwnProperty(a)&&(t||(t={}),t[a]="")}else s!=="dangerouslySetInnerHTML"&&s!=="children"&&s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(wi.hasOwnProperty(s)?l||(l=[]):(l=l||[]).push(s,null));for(s in r){var u=r[s];if(o=i!=null?i[s]:void 0,r.hasOwnProperty(s)&&u!==o&&(u!=null||o!=null))if(s==="style")if(o){for(a in o)!o.hasOwnProperty(a)||u&&u.hasOwnProperty(a)||(t||(t={}),t[a]="");for(a in u)u.hasOwnProperty(a)&&o[a]!==u[a]&&(t||(t={}),t[a]=u[a])}else t||(l||(l=[]),l.push(s,t)),t=u;else s==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,o=o?o.__html:void 0,u!=null&&o!==u&&(l=l||[]).push(s,u)):s==="children"?typeof u!="string"&&typeof u!="number"||(l=l||[]).push(s,""+u):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&(wi.hasOwnProperty(s)?(u!=null&&s==="onScroll"&&be("scroll",e),l||o===u||(l=[])):(l=l||[]).push(s,u))}t&&(l=l||[]).push("style",t);var s=l;(n.updateQueue=s)&&(n.flags|=4)}};sm=function(e,n,t,r){t!==r&&(n.flags|=4)};function ni(e,n){if(!ze)switch(e.tailMode){case"hidden":n=e.tail;for(var t=null;n!==null;)n.alternate!==null&&(t=n),n=n.sibling;t===null?e.tail=null:t.sibling=null;break;case"collapsed":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function We(e){var n=e.alternate!==null&&e.alternate.child===e.child,t=0,r=0;if(n)for(var i=e.child;i!==null;)t|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)t|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=t,n}function _1(e,n,t){var r=n.pendingProps;switch(Ts(n),n.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return We(n),null;case 1:return fn(n.type)&&$l(),We(n),null;case 3:return r=n.stateNode,Ir(),Ee(cn),Ee(Xe),Rs(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(sl(n)?n.flags|=4:e===null||e.memoizedState.isDehydrated&&!(n.flags&256)||(n.flags|=1024,On!==null&&(Bu(On),On=null))),Nu(e,n),We(n),null;case 5:Os(n);var i=Ht(Ni.current);if(t=n.type,e!==null&&n.stateNode!=null)um(e,n,t,r,i),e.ref!==n.ref&&(n.flags|=512,n.flags|=2097152);else{if(!r){if(n.stateNode===null)throw Error(H(166));return We(n),null}if(e=Ht(Wn.current),sl(n)){r=n.stateNode,t=n.type;var l=n.memoizedProps;switch(r[$n]=n,r[Pi]=l,e=(n.mode&1)!==0,t){case"dialog":be("cancel",r),be("close",r);break;case"iframe":case"object":case"embed":be("load",r);break;case"video":case"audio":for(i=0;i<ui.length;i++)be(ui[i],r);break;case"source":be("error",r);break;case"img":case"image":case"link":be("error",r),be("load",r);break;case"details":be("toggle",r);break;case"input":Ic(r,l),be("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!l.multiple},be("invalid",r);break;case"textarea":Lc(r,l),be("invalid",r)}au(t,l),i=null;for(var a in l)if(l.hasOwnProperty(a)){var o=l[a];a==="children"?typeof o=="string"?r.textContent!==o&&(l.suppressHydrationWarning!==!0&&ul(r.textContent,o,e),i=["children",o]):typeof o=="number"&&r.textContent!==""+o&&(l.suppressHydrationWarning!==!0&&ul(r.textContent,o,e),i=["children",""+o]):wi.hasOwnProperty(a)&&o!=null&&a==="onScroll"&&be("scroll",r)}switch(t){case"input":el(r),Nc(r,l,!0);break;case"textarea":el(r),Oc(r);break;case"select":case"option":break;default:typeof l.onClick=="function"&&(r.onclick=Hl)}r=i,n.updateQueue=r,r!==null&&(n.flags|=4)}else{a=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Mp(t)),e==="http://www.w3.org/1999/xhtml"?t==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=a.createElement(t,{is:r.is}):(e=a.createElement(t),t==="select"&&(a=e,r.multiple?a.multiple=!0:r.size&&(a.size=r.size))):e=a.createElementNS(e,t),e[$n]=n,e[Pi]=r,om(e,n,!1,!1),n.stateNode=e;e:{switch(a=ou(t,r),t){case"dialog":be("cancel",e),be("close",e),i=r;break;case"iframe":case"object":case"embed":be("load",e),i=r;break;case"video":case"audio":for(i=0;i<ui.length;i++)be(ui[i],e);i=r;break;case"source":be("error",e),i=r;break;case"img":case"image":case"link":be("error",e),be("load",e),i=r;break;case"details":be("toggle",e),i=r;break;case"input":Ic(e,r),i=nu(e,r),be("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=Ie({},r,{value:void 0}),be("invalid",e);break;case"textarea":Lc(e,r),i=iu(e,r),be("invalid",e);break;default:i=r}au(t,i),o=i;for(l in o)if(o.hasOwnProperty(l)){var u=o[l];l==="style"?Dp(e,u):l==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&qp(e,u)):l==="children"?typeof u=="string"?(t!=="textarea"||u!=="")&&_i(e,u):typeof u=="number"&&_i(e,""+u):l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&l!=="autoFocus"&&(wi.hasOwnProperty(l)?u!=null&&l==="onScroll"&&be("scroll",e):u!=null&&ds(e,l,u,a))}switch(t){case"input":el(e),Nc(e,r,!1);break;case"textarea":el(e),Oc(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Et(r.value));break;case"select":e.multiple=!!r.multiple,l=r.value,l!=null?_r(e,!!r.multiple,l,!1):r.defaultValue!=null&&_r(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Hl)}switch(t){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(n.flags|=4)}n.ref!==null&&(n.flags|=512,n.flags|=2097152)}return We(n),null;case 6:if(e&&n.stateNode!=null)sm(e,n,e.memoizedProps,r);else{if(typeof r!="string"&&n.stateNode===null)throw Error(H(166));if(t=Ht(Ni.current),Ht(Wn.current),sl(n)){if(r=n.stateNode,t=n.memoizedProps,r[$n]=n,(l=r.nodeValue!==t)&&(e=vn,e!==null))switch(e.tag){case 3:ul(r.nodeValue,t,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&ul(r.nodeValue,t,(e.mode&1)!==0)}l&&(n.flags|=4)}else r=(t.nodeType===9?t:t.ownerDocument).createTextNode(r),r[$n]=n,n.stateNode=r}return We(n),null;case 13:if(Ee(Ae),r=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(ze&&yn!==null&&n.mode&1&&!(n.flags&128))Th(),jr(),n.flags|=98560,l=!1;else if(l=sl(n),r!==null&&r.dehydrated!==null){if(e===null){if(!l)throw Error(H(318));if(l=n.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(H(317));l[$n]=n}else jr(),!(n.flags&128)&&(n.memoizedState=null),n.flags|=4;We(n),l=!1}else On!==null&&(Bu(On),On=null),l=!0;if(!l)return n.flags&65536?n:null}return n.flags&128?(n.lanes=t,n):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(n.child.flags|=8192,n.mode&1&&(e===null||Ae.current&1?Fe===0&&(Fe=3):Ys())),n.updateQueue!==null&&(n.flags|=4),We(n),null);case 4:return Ir(),Nu(e,n),e===null&&Ai(n.stateNode.containerInfo),We(n),null;case 10:return Ps(n.type._context),We(n),null;case 17:return fn(n.type)&&$l(),We(n),null;case 19:if(Ee(Ae),l=n.memoizedState,l===null)return We(n),null;if(r=(n.flags&128)!==0,a=l.rendering,a===null)if(r)ni(l,!1);else{if(Fe!==0||e!==null&&e.flags&128)for(e=n.child;e!==null;){if(a=Jl(e),a!==null){for(n.flags|=128,ni(l,!1),r=a.updateQueue,r!==null&&(n.updateQueue=r,n.flags|=4),n.subtreeFlags=0,r=t,t=n.child;t!==null;)l=t,e=r,l.flags&=14680066,a=l.alternate,a===null?(l.childLanes=0,l.lanes=e,l.child=null,l.subtreeFlags=0,l.memoizedProps=null,l.memoizedState=null,l.updateQueue=null,l.dependencies=null,l.stateNode=null):(l.childLanes=a.childLanes,l.lanes=a.lanes,l.child=a.child,l.subtreeFlags=0,l.deletions=null,l.memoizedProps=a.memoizedProps,l.memoizedState=a.memoizedState,l.updateQueue=a.updateQueue,l.type=a.type,e=a.dependencies,l.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t=t.sibling;return _e(Ae,Ae.current&1|2),n.child}e=e.sibling}l.tail!==null&&Le()>Lr&&(n.flags|=128,r=!0,ni(l,!1),n.lanes=4194304)}else{if(!r)if(e=Jl(a),e!==null){if(n.flags|=128,r=!0,t=e.updateQueue,t!==null&&(n.updateQueue=t,n.flags|=4),ni(l,!0),l.tail===null&&l.tailMode==="hidden"&&!a.alternate&&!ze)return We(n),null}else 2*Le()-l.renderingStartTime>Lr&&t!==1073741824&&(n.flags|=128,r=!0,ni(l,!1),n.lanes=4194304);l.isBackwards?(a.sibling=n.child,n.child=a):(t=l.last,t!==null?t.sibling=a:n.child=a,l.last=a)}return l.tail!==null?(n=l.tail,l.rendering=n,l.tail=n.sibling,l.renderingStartTime=Le(),n.sibling=null,t=Ae.current,_e(Ae,r?t&1|2:t&1),n):(We(n),null);case 22:case 23:return Qs(),r=n.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(n.flags|=8192),r&&n.mode&1?gn&1073741824&&(We(n),n.subtreeFlags&6&&(n.flags|=8192)):We(n),null;case 24:return null;case 25:return null}throw Error(H(156,n.tag))}function S1(e,n){switch(Ts(n),n.tag){case 1:return fn(n.type)&&$l(),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return Ir(),Ee(cn),Ee(Xe),Rs(),e=n.flags,e&65536&&!(e&128)?(n.flags=e&-65537|128,n):null;case 5:return Os(n),null;case 13:if(Ee(Ae),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(H(340));jr()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return Ee(Ae),null;case 4:return Ir(),null;case 10:return Ps(n.type._context),null;case 22:case 23:return Qs(),null;case 24:return null;default:return null}}var dl=!1,Ye=!1,C1=typeof WeakSet=="function"?WeakSet:Set,G=null;function xr(e,n){var t=e.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(r){Ne(e,n,r)}else t.current=null}function Lu(e,n,t){try{t()}catch(r){Ne(e,n,r)}}var bf=!1;function b1(e,n){if(yu=Dl,e=hh(),bs(e)){if("selectionStart"in e)var t={start:e.selectionStart,end:e.selectionEnd};else e:{t=(t=e.ownerDocument)&&t.defaultView||window;var r=t.getSelection&&t.getSelection();if(r&&r.rangeCount!==0){t=r.anchorNode;var i=r.anchorOffset,l=r.focusNode;r=r.focusOffset;try{t.nodeType,l.nodeType}catch{t=null;break e}var a=0,o=-1,u=-1,s=0,d=0,f=e,p=null;n:for(;;){for(var h;f!==t||i!==0&&f.nodeType!==3||(o=a+i),f!==l||r!==0&&f.nodeType!==3||(u=a+r),f.nodeType===3&&(a+=f.nodeValue.length),(h=f.firstChild)!==null;)p=f,f=h;for(;;){if(f===e)break n;if(p===t&&++s===i&&(o=a),p===l&&++d===r&&(u=a),(h=f.nextSibling)!==null)break;f=p,p=f.parentNode}f=h}t=o===-1||u===-1?null:{start:o,end:u}}else t=null}t=t||{start:0,end:0}}else t=null;for(vu={focusedElem:e,selectionRange:t},Dl=!1,G=n;G!==null;)if(n=G,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,G=e;else for(;G!==null;){n=G;try{var v=n.alternate;if(n.flags&1024)switch(n.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var w=v.memoizedProps,b=v.memoizedState,g=n.stateNode,y=g.getSnapshotBeforeUpdate(n.elementType===n.type?w:Nn(n.type,w),b);g.__reactInternalSnapshotBeforeUpdate=y}break;case 3:var k=n.stateNode.containerInfo;k.nodeType===1?k.textContent="":k.nodeType===9&&k.documentElement&&k.removeChild(k.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(H(163))}}catch(T){Ne(n,n.return,T)}if(e=n.sibling,e!==null){e.return=n.return,G=e;break}G=n.return}return v=bf,bf=!1,v}function mi(e,n,t){var r=n.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var l=i.destroy;i.destroy=void 0,l!==void 0&&Lu(n,t,l)}i=i.next}while(i!==r)}}function _a(e,n){if(n=n.updateQueue,n=n!==null?n.lastEffect:null,n!==null){var t=n=n.next;do{if((t.tag&e)===e){var r=t.create;t.destroy=r()}t=t.next}while(t!==n)}}function Ou(e){var n=e.ref;if(n!==null){var t=e.stateNode;switch(e.tag){case 5:e=t;break;default:e=t}typeof n=="function"?n(e):n.current=e}}function cm(e){var n=e.alternate;n!==null&&(e.alternate=null,cm(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&(delete n[$n],delete n[Pi],delete n[wu],delete n[o1],delete n[u1])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function fm(e){return e.tag===5||e.tag===3||e.tag===4}function Ef(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||fm(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ru(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.nodeType===8?t.parentNode.insertBefore(e,n):t.insertBefore(e,n):(t.nodeType===8?(n=t.parentNode,n.insertBefore(e,t)):(n=t,n.appendChild(e)),t=t._reactRootContainer,t!=null||n.onclick!==null||(n.onclick=Hl));else if(r!==4&&(e=e.child,e!==null))for(Ru(e,n,t),e=e.sibling;e!==null;)Ru(e,n,t),e=e.sibling}function Mu(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.insertBefore(e,n):t.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Mu(e,n,t),e=e.sibling;e!==null;)Mu(e,n,t),e=e.sibling}var Ue=null,Ln=!1;function ot(e,n,t){for(t=t.child;t!==null;)dm(e,n,t),t=t.sibling}function dm(e,n,t){if(Vn&&typeof Vn.onCommitFiberUnmount=="function")try{Vn.onCommitFiberUnmount(ha,t)}catch{}switch(t.tag){case 5:Ye||xr(t,n);case 6:var r=Ue,i=Ln;Ue=null,ot(e,n,t),Ue=r,Ln=i,Ue!==null&&(Ln?(e=Ue,t=t.stateNode,e.nodeType===8?e.parentNode.removeChild(t):e.removeChild(t)):Ue.removeChild(t.stateNode));break;case 18:Ue!==null&&(Ln?(e=Ue,t=t.stateNode,e.nodeType===8?eo(e.parentNode,t):e.nodeType===1&&eo(e,t),Ei(e)):eo(Ue,t.stateNode));break;case 4:r=Ue,i=Ln,Ue=t.stateNode.containerInfo,Ln=!0,ot(e,n,t),Ue=r,Ln=i;break;case 0:case 11:case 14:case 15:if(!Ye&&(r=t.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var l=i,a=l.destroy;l=l.tag,a!==void 0&&(l&2||l&4)&&Lu(t,n,a),i=i.next}while(i!==r)}ot(e,n,t);break;case 1:if(!Ye&&(xr(t,n),r=t.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=t.memoizedProps,r.state=t.memoizedState,r.componentWillUnmount()}catch(o){Ne(t,n,o)}ot(e,n,t);break;case 21:ot(e,n,t);break;case 22:t.mode&1?(Ye=(r=Ye)||t.memoizedState!==null,ot(e,n,t),Ye=r):ot(e,n,t);break;default:ot(e,n,t)}}function Tf(e){var n=e.updateQueue;if(n!==null){e.updateQueue=null;var t=e.stateNode;t===null&&(t=e.stateNode=new C1),n.forEach(function(r){var i=L1.bind(null,e,r);t.has(r)||(t.add(r),r.then(i,i))})}}function In(e,n){var t=n.deletions;if(t!==null)for(var r=0;r<t.length;r++){var i=t[r];try{var l=e,a=n,o=a;e:for(;o!==null;){switch(o.tag){case 5:Ue=o.stateNode,Ln=!1;break e;case 3:Ue=o.stateNode.containerInfo,Ln=!0;break e;case 4:Ue=o.stateNode.containerInfo,Ln=!0;break e}o=o.return}if(Ue===null)throw Error(H(160));dm(l,a,i),Ue=null,Ln=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(s){Ne(i,n,s)}}if(n.subtreeFlags&12854)for(n=n.child;n!==null;)pm(n,e),n=n.sibling}function pm(e,n){var t=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(In(n,e),Bn(e),r&4){try{mi(3,e,e.return),_a(3,e)}catch(w){Ne(e,e.return,w)}try{mi(5,e,e.return)}catch(w){Ne(e,e.return,w)}}break;case 1:In(n,e),Bn(e),r&512&&t!==null&&xr(t,t.return);break;case 5:if(In(n,e),Bn(e),r&512&&t!==null&&xr(t,t.return),e.flags&32){var i=e.stateNode;try{_i(i,"")}catch(w){Ne(e,e.return,w)}}if(r&4&&(i=e.stateNode,i!=null)){var l=e.memoizedProps,a=t!==null?t.memoizedProps:l,o=e.type,u=e.updateQueue;if(e.updateQueue=null,u!==null)try{o==="input"&&l.type==="radio"&&l.name!=null&&Op(i,l),ou(o,a);var s=ou(o,l);for(a=0;a<u.length;a+=2){var d=u[a],f=u[a+1];d==="style"?Dp(i,f):d==="dangerouslySetInnerHTML"?qp(i,f):d==="children"?_i(i,f):ds(i,d,f,s)}switch(o){case"input":tu(i,l);break;case"textarea":Rp(i,l);break;case"select":var p=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!l.multiple;var h=l.value;h!=null?_r(i,!!l.multiple,h,!1):p!==!!l.multiple&&(l.defaultValue!=null?_r(i,!!l.multiple,l.defaultValue,!0):_r(i,!!l.multiple,l.multiple?[]:"",!1))}i[Pi]=l}catch(w){Ne(e,e.return,w)}}break;case 6:if(In(n,e),Bn(e),r&4){if(e.stateNode===null)throw Error(H(162));i=e.stateNode,l=e.memoizedProps;try{i.nodeValue=l}catch(w){Ne(e,e.return,w)}}break;case 3:if(In(n,e),Bn(e),r&4&&t!==null&&t.memoizedState.isDehydrated)try{Ei(n.containerInfo)}catch(w){Ne(e,e.return,w)}break;case 4:In(n,e),Bn(e);break;case 13:In(n,e),Bn(e),i=e.child,i.flags&8192&&(l=i.memoizedState!==null,i.stateNode.isHidden=l,!l||i.alternate!==null&&i.alternate.memoizedState!==null||(Vs=Le())),r&4&&Tf(e);break;case 22:if(d=t!==null&&t.memoizedState!==null,e.mode&1?(Ye=(s=Ye)||d,In(n,e),Ye=s):In(n,e),Bn(e),r&8192){if(s=e.memoizedState!==null,(e.stateNode.isHidden=s)&&!d&&e.mode&1)for(G=e,d=e.child;d!==null;){for(f=G=d;G!==null;){switch(p=G,h=p.child,p.tag){case 0:case 11:case 14:case 15:mi(4,p,p.return);break;case 1:xr(p,p.return);var v=p.stateNode;if(typeof v.componentWillUnmount=="function"){r=p,t=p.return;try{n=r,v.props=n.memoizedProps,v.state=n.memoizedState,v.componentWillUnmount()}catch(w){Ne(r,t,w)}}break;case 5:xr(p,p.return);break;case 22:if(p.memoizedState!==null){Af(f);continue}}h!==null?(h.return=p,G=h):Af(f)}d=d.sibling}e:for(d=null,f=e;;){if(f.tag===5){if(d===null){d=f;try{i=f.stateNode,s?(l=i.style,typeof l.setProperty=="function"?l.setProperty("display","none","important"):l.display="none"):(o=f.stateNode,u=f.memoizedProps.style,a=u!=null&&u.hasOwnProperty("display")?u.display:null,o.style.display=Fp("display",a))}catch(w){Ne(e,e.return,w)}}}else if(f.tag===6){if(d===null)try{f.stateNode.nodeValue=s?"":f.memoizedProps}catch(w){Ne(e,e.return,w)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===e)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===e)break e;for(;f.sibling===null;){if(f.return===null||f.return===e)break e;d===f&&(d=null),f=f.return}d===f&&(d=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:In(n,e),Bn(e),r&4&&Tf(e);break;case 21:break;default:In(n,e),Bn(e)}}function Bn(e){var n=e.flags;if(n&2){try{e:{for(var t=e.return;t!==null;){if(fm(t)){var r=t;break e}t=t.return}throw Error(H(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(_i(i,""),r.flags&=-33);var l=Ef(e);Mu(e,l,i);break;case 3:case 4:var a=r.stateNode.containerInfo,o=Ef(e);Ru(e,o,a);break;default:throw Error(H(161))}}catch(u){Ne(e,e.return,u)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function E1(e,n,t){G=e,hm(e)}function hm(e,n,t){for(var r=(e.mode&1)!==0;G!==null;){var i=G,l=i.child;if(i.tag===22&&r){var a=i.memoizedState!==null||dl;if(!a){var o=i.alternate,u=o!==null&&o.memoizedState!==null||Ye;o=dl;var s=Ye;if(dl=a,(Ye=u)&&!s)for(G=i;G!==null;)a=G,u=a.child,a.tag===22&&a.memoizedState!==null?jf(i):u!==null?(u.return=a,G=u):jf(i);for(;l!==null;)G=l,hm(l),l=l.sibling;G=i,dl=o,Ye=s}zf(e)}else i.subtreeFlags&8772&&l!==null?(l.return=i,G=l):zf(e)}}function zf(e){for(;G!==null;){var n=G;if(n.flags&8772){var t=n.alternate;try{if(n.flags&8772)switch(n.tag){case 0:case 11:case 15:Ye||_a(5,n);break;case 1:var r=n.stateNode;if(n.flags&4&&!Ye)if(t===null)r.componentDidMount();else{var i=n.elementType===n.type?t.memoizedProps:Nn(n.type,t.memoizedProps);r.componentDidUpdate(i,t.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var l=n.updateQueue;l!==null&&df(n,l,r);break;case 3:var a=n.updateQueue;if(a!==null){if(t=null,n.child!==null)switch(n.child.tag){case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}df(n,a,t)}break;case 5:var o=n.stateNode;if(t===null&&n.flags&4){t=o;var u=n.memoizedProps;switch(n.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&t.focus();break;case"img":u.src&&(t.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(n.memoizedState===null){var s=n.alternate;if(s!==null){var d=s.memoizedState;if(d!==null){var f=d.dehydrated;f!==null&&Ei(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(H(163))}Ye||n.flags&512&&Ou(n)}catch(p){Ne(n,n.return,p)}}if(n===e){G=null;break}if(t=n.sibling,t!==null){t.return=n.return,G=t;break}G=n.return}}function Af(e){for(;G!==null;){var n=G;if(n===e){G=null;break}var t=n.sibling;if(t!==null){t.return=n.return,G=t;break}G=n.return}}function jf(e){for(;G!==null;){var n=G;try{switch(n.tag){case 0:case 11:case 15:var t=n.return;try{_a(4,n)}catch(u){Ne(n,t,u)}break;case 1:var r=n.stateNode;if(typeof r.componentDidMount=="function"){var i=n.return;try{r.componentDidMount()}catch(u){Ne(n,i,u)}}var l=n.return;try{Ou(n)}catch(u){Ne(n,l,u)}break;case 5:var a=n.return;try{Ou(n)}catch(u){Ne(n,a,u)}}}catch(u){Ne(n,n.return,u)}if(n===e){G=null;break}var o=n.sibling;if(o!==null){o.return=n.return,G=o;break}G=n.return}}var T1=Math.ceil,ea=rt.ReactCurrentDispatcher,Hs=rt.ReactCurrentOwner,zn=rt.ReactCurrentBatchConfig,ge=0,Be=null,Me=null,He=0,gn=0,wr=At(0),Fe=0,Mi=null,Xt=0,Sa=0,$s=0,gi=null,un=null,Vs=0,Lr=1/0,Yn=null,na=!1,qu=null,_t=null,pl=!1,mt=null,ta=0,yi=0,Fu=null,Al=-1,jl=0;function nn(){return ge&6?Le():Al!==-1?Al:Al=Le()}function St(e){return e.mode&1?ge&2&&He!==0?He&-He:c1.transition!==null?(jl===0&&(jl=Gp()),jl):(e=ve,e!==0||(e=window.event,e=e===void 0?16:lh(e.type)),e):1}function Mn(e,n,t,r){if(50<yi)throw yi=0,Fu=null,Error(H(185));Hi(e,t,r),(!(ge&2)||e!==Be)&&(e===Be&&(!(ge&2)&&(Sa|=t),Fe===4&&pt(e,He)),dn(e,r),t===1&&ge===0&&!(n.mode&1)&&(Lr=Le()+500,ka&&jt()))}function dn(e,n){var t=e.callbackNode;c0(e,n);var r=Fl(e,e===Be?He:0);if(r===0)t!==null&&qc(t),e.callbackNode=null,e.callbackPriority=0;else if(n=r&-r,e.callbackPriority!==n){if(t!=null&&qc(t),n===1)e.tag===0?s1(Pf.bind(null,e)):Ch(Pf.bind(null,e)),l1(function(){!(ge&6)&&jt()}),t=null;else{switch(Zp(r)){case 1:t=ys;break;case 4:t=Xp;break;case 16:t=ql;break;case 536870912:t=Jp;break;default:t=ql}t=_m(t,mm.bind(null,e))}e.callbackPriority=n,e.callbackNode=t}}function mm(e,n){if(Al=-1,jl=0,ge&6)throw Error(H(327));var t=e.callbackNode;if(Tr()&&e.callbackNode!==t)return null;var r=Fl(e,e===Be?He:0);if(r===0)return null;if(r&30||r&e.expiredLanes||n)n=ra(e,r);else{n=r;var i=ge;ge|=2;var l=ym();(Be!==e||He!==n)&&(Yn=null,Lr=Le()+500,$t(e,n));do try{j1();break}catch(o){gm(e,o)}while(!0);js(),ea.current=l,ge=i,Me!==null?n=0:(Be=null,He=0,n=Fe)}if(n!==0){if(n===2&&(i=du(e),i!==0&&(r=i,n=Du(e,i))),n===1)throw t=Mi,$t(e,0),pt(e,r),dn(e,Le()),t;if(n===6)pt(e,r);else{if(i=e.current.alternate,!(r&30)&&!z1(i)&&(n=ra(e,r),n===2&&(l=du(e),l!==0&&(r=l,n=Du(e,l))),n===1))throw t=Mi,$t(e,0),pt(e,r),dn(e,Le()),t;switch(e.finishedWork=i,e.finishedLanes=r,n){case 0:case 1:throw Error(H(345));case 2:qt(e,un,Yn);break;case 3:if(pt(e,r),(r&130023424)===r&&(n=Vs+500-Le(),10<n)){if(Fl(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){nn(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=xu(qt.bind(null,e,un,Yn),n);break}qt(e,un,Yn);break;case 4:if(pt(e,r),(r&4194240)===r)break;for(n=e.eventTimes,i=-1;0<r;){var a=31-Rn(r);l=1<<a,a=n[a],a>i&&(i=a),r&=~l}if(r=i,r=Le()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*T1(r/1960))-r,10<r){e.timeoutHandle=xu(qt.bind(null,e,un,Yn),r);break}qt(e,un,Yn);break;case 5:qt(e,un,Yn);break;default:throw Error(H(329))}}}return dn(e,Le()),e.callbackNode===t?mm.bind(null,e):null}function Du(e,n){var t=gi;return e.current.memoizedState.isDehydrated&&($t(e,n).flags|=256),e=ra(e,n),e!==2&&(n=un,un=t,n!==null&&Bu(n)),e}function Bu(e){un===null?un=e:un.push.apply(un,e)}function z1(e){for(var n=e;;){if(n.flags&16384){var t=n.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var r=0;r<t.length;r++){var i=t[r],l=i.getSnapshot;i=i.value;try{if(!Fn(l(),i))return!1}catch{return!1}}}if(t=n.child,n.subtreeFlags&16384&&t!==null)t.return=n,n=t;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function pt(e,n){for(n&=~$s,n&=~Sa,e.suspendedLanes|=n,e.pingedLanes&=~n,e=e.expirationTimes;0<n;){var t=31-Rn(n),r=1<<t;e[t]=-1,n&=~r}}function Pf(e){if(ge&6)throw Error(H(327));Tr();var n=Fl(e,0);if(!(n&1))return dn(e,Le()),null;var t=ra(e,n);if(e.tag!==0&&t===2){var r=du(e);r!==0&&(n=r,t=Du(e,r))}if(t===1)throw t=Mi,$t(e,0),pt(e,n),dn(e,Le()),t;if(t===6)throw Error(H(345));return e.finishedWork=e.current.alternate,e.finishedLanes=n,qt(e,un,Yn),dn(e,Le()),null}function Ws(e,n){var t=ge;ge|=1;try{return e(n)}finally{ge=t,ge===0&&(Lr=Le()+500,ka&&jt())}}function Jt(e){mt!==null&&mt.tag===0&&!(ge&6)&&Tr();var n=ge;ge|=1;var t=zn.transition,r=ve;try{if(zn.transition=null,ve=1,e)return e()}finally{ve=r,zn.transition=t,ge=n,!(ge&6)&&jt()}}function Qs(){gn=wr.current,Ee(wr)}function $t(e,n){e.finishedWork=null,e.finishedLanes=0;var t=e.timeoutHandle;if(t!==-1&&(e.timeoutHandle=-1,i1(t)),Me!==null)for(t=Me.return;t!==null;){var r=t;switch(Ts(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&$l();break;case 3:Ir(),Ee(cn),Ee(Xe),Rs();break;case 5:Os(r);break;case 4:Ir();break;case 13:Ee(Ae);break;case 19:Ee(Ae);break;case 10:Ps(r.type._context);break;case 22:case 23:Qs()}t=t.return}if(Be=e,Me=e=Ct(e.current,null),He=gn=n,Fe=0,Mi=null,$s=Sa=Xt=0,un=gi=null,Ut!==null){for(n=0;n<Ut.length;n++)if(t=Ut[n],r=t.interleaved,r!==null){t.interleaved=null;var i=r.next,l=t.pending;if(l!==null){var a=l.next;l.next=i,r.next=a}t.pending=r}Ut=null}return e}function gm(e,n){do{var t=Me;try{if(js(),El.current=Zl,Gl){for(var r=je.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Gl=!1}if(Kt=0,De=qe=je=null,hi=!1,Li=0,Hs.current=null,t===null||t.return===null){Fe=1,Mi=n,Me=null;break}e:{var l=e,a=t.return,o=t,u=n;if(n=He,o.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var s=u,d=o,f=d.tag;if(!(d.mode&1)&&(f===0||f===11||f===15)){var p=d.alternate;p?(d.updateQueue=p.updateQueue,d.memoizedState=p.memoizedState,d.lanes=p.lanes):(d.updateQueue=null,d.memoizedState=null)}var h=vf(a);if(h!==null){h.flags&=-257,kf(h,a,o,l,n),h.mode&1&&yf(l,s,n),n=h,u=s;var v=n.updateQueue;if(v===null){var w=new Set;w.add(u),n.updateQueue=w}else v.add(u);break e}else{if(!(n&1)){yf(l,s,n),Ys();break e}u=Error(H(426))}}else if(ze&&o.mode&1){var b=vf(a);if(b!==null){!(b.flags&65536)&&(b.flags|=256),kf(b,a,o,l,n),zs(Nr(u,o));break e}}l=u=Nr(u,o),Fe!==4&&(Fe=2),gi===null?gi=[l]:gi.push(l),l=a;do{switch(l.tag){case 3:l.flags|=65536,n&=-n,l.lanes|=n;var g=Zh(l,u,n);ff(l,g);break e;case 1:o=u;var y=l.type,k=l.stateNode;if(!(l.flags&128)&&(typeof y.getDerivedStateFromError=="function"||k!==null&&typeof k.componentDidCatch=="function"&&(_t===null||!_t.has(k)))){l.flags|=65536,n&=-n,l.lanes|=n;var T=em(l,o,n);ff(l,T);break e}}l=l.return}while(l!==null)}km(t)}catch(R){n=R,Me===t&&t!==null&&(Me=t=t.return);continue}break}while(!0)}function ym(){var e=ea.current;return ea.current=Zl,e===null?Zl:e}function Ys(){(Fe===0||Fe===3||Fe===2)&&(Fe=4),Be===null||!(Xt&268435455)&&!(Sa&268435455)||pt(Be,He)}function ra(e,n){var t=ge;ge|=2;var r=ym();(Be!==e||He!==n)&&(Yn=null,$t(e,n));do try{A1();break}catch(i){gm(e,i)}while(!0);if(js(),ge=t,ea.current=r,Me!==null)throw Error(H(261));return Be=null,He=0,Fe}function A1(){for(;Me!==null;)vm(Me)}function j1(){for(;Me!==null&&!n0();)vm(Me)}function vm(e){var n=wm(e.alternate,e,gn);e.memoizedProps=e.pendingProps,n===null?km(e):Me=n,Hs.current=null}function km(e){var n=e;do{var t=n.alternate;if(e=n.return,n.flags&32768){if(t=S1(t,n),t!==null){t.flags&=32767,Me=t;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Fe=6,Me=null;return}}else if(t=_1(t,n,gn),t!==null){Me=t;return}if(n=n.sibling,n!==null){Me=n;return}Me=n=e}while(n!==null);Fe===0&&(Fe=5)}function qt(e,n,t){var r=ve,i=zn.transition;try{zn.transition=null,ve=1,P1(e,n,t,r)}finally{zn.transition=i,ve=r}return null}function P1(e,n,t,r){do Tr();while(mt!==null);if(ge&6)throw Error(H(327));t=e.finishedWork;var i=e.finishedLanes;if(t===null)return null;if(e.finishedWork=null,e.finishedLanes=0,t===e.current)throw Error(H(177));e.callbackNode=null,e.callbackPriority=0;var l=t.lanes|t.childLanes;if(f0(e,l),e===Be&&(Me=Be=null,He=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||pl||(pl=!0,_m(ql,function(){return Tr(),null})),l=(t.flags&15990)!==0,t.subtreeFlags&15990||l){l=zn.transition,zn.transition=null;var a=ve;ve=1;var o=ge;ge|=4,Hs.current=null,b1(e,t),pm(t,e),J0(vu),Dl=!!yu,vu=yu=null,e.current=t,E1(t),t0(),ge=o,ve=a,zn.transition=l}else e.current=t;if(pl&&(pl=!1,mt=e,ta=i),l=e.pendingLanes,l===0&&(_t=null),l0(t.stateNode),dn(e,Le()),n!==null)for(r=e.onRecoverableError,t=0;t<n.length;t++)i=n[t],r(i.value,{componentStack:i.stack,digest:i.digest});if(na)throw na=!1,e=qu,qu=null,e;return ta&1&&e.tag!==0&&Tr(),l=e.pendingLanes,l&1?e===Fu?yi++:(yi=0,Fu=e):yi=0,jt(),null}function Tr(){if(mt!==null){var e=Zp(ta),n=zn.transition,t=ve;try{if(zn.transition=null,ve=16>e?16:e,mt===null)var r=!1;else{if(e=mt,mt=null,ta=0,ge&6)throw Error(H(331));var i=ge;for(ge|=4,G=e.current;G!==null;){var l=G,a=l.child;if(G.flags&16){var o=l.deletions;if(o!==null){for(var u=0;u<o.length;u++){var s=o[u];for(G=s;G!==null;){var d=G;switch(d.tag){case 0:case 11:case 15:mi(8,d,l)}var f=d.child;if(f!==null)f.return=d,G=f;else for(;G!==null;){d=G;var p=d.sibling,h=d.return;if(cm(d),d===s){G=null;break}if(p!==null){p.return=h,G=p;break}G=h}}}var v=l.alternate;if(v!==null){var w=v.child;if(w!==null){v.child=null;do{var b=w.sibling;w.sibling=null,w=b}while(w!==null)}}G=l}}if(l.subtreeFlags&2064&&a!==null)a.return=l,G=a;else e:for(;G!==null;){if(l=G,l.flags&2048)switch(l.tag){case 0:case 11:case 15:mi(9,l,l.return)}var g=l.sibling;if(g!==null){g.return=l.return,G=g;break e}G=l.return}}var y=e.current;for(G=y;G!==null;){a=G;var k=a.child;if(a.subtreeFlags&2064&&k!==null)k.return=a,G=k;else e:for(a=y;G!==null;){if(o=G,o.flags&2048)try{switch(o.tag){case 0:case 11:case 15:_a(9,o)}}catch(R){Ne(o,o.return,R)}if(o===a){G=null;break e}var T=o.sibling;if(T!==null){T.return=o.return,G=T;break e}G=o.return}}if(ge=i,jt(),Vn&&typeof Vn.onPostCommitFiberRoot=="function")try{Vn.onPostCommitFiberRoot(ha,e)}catch{}r=!0}return r}finally{ve=t,zn.transition=n}}return!1}function If(e,n,t){n=Nr(t,n),n=Zh(e,n,1),e=wt(e,n,1),n=nn(),e!==null&&(Hi(e,1,n),dn(e,n))}function Ne(e,n,t){if(e.tag===3)If(e,e,t);else for(;n!==null;){if(n.tag===3){If(n,e,t);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(_t===null||!_t.has(r))){e=Nr(t,e),e=em(n,e,1),n=wt(n,e,1),e=nn(),n!==null&&(Hi(n,1,e),dn(n,e));break}}n=n.return}}function I1(e,n,t){var r=e.pingCache;r!==null&&r.delete(n),n=nn(),e.pingedLanes|=e.suspendedLanes&t,Be===e&&(He&t)===t&&(Fe===4||Fe===3&&(He&130023424)===He&&500>Le()-Vs?$t(e,0):$s|=t),dn(e,n)}function xm(e,n){n===0&&(e.mode&1?(n=rl,rl<<=1,!(rl&130023424)&&(rl=4194304)):n=1);var t=nn();e=nt(e,n),e!==null&&(Hi(e,n,t),dn(e,t))}function N1(e){var n=e.memoizedState,t=0;n!==null&&(t=n.retryLane),xm(e,t)}function L1(e,n){var t=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(t=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(H(314))}r!==null&&r.delete(n),xm(e,t)}var wm;wm=function(e,n,t){if(e!==null)if(e.memoizedProps!==n.pendingProps||cn.current)sn=!0;else{if(!(e.lanes&t)&&!(n.flags&128))return sn=!1,w1(e,n,t);sn=!!(e.flags&131072)}else sn=!1,ze&&n.flags&1048576&&bh(n,Ql,n.index);switch(n.lanes=0,n.tag){case 2:var r=n.type;zl(e,n),e=n.pendingProps;var i=Ar(n,Xe.current);Er(n,t),i=qs(null,n,r,e,i,t);var l=Fs();return n.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(n.tag=1,n.memoizedState=null,n.updateQueue=null,fn(r)?(l=!0,Vl(n)):l=!1,n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Ns(n),i.updater=wa,n.stateNode=i,i._reactInternals=n,Tu(n,r,e,t),n=ju(null,n,r,!0,l,t)):(n.tag=0,ze&&l&&Es(n),Ze(null,n,i,t),n=n.child),n;case 16:r=n.elementType;e:{switch(zl(e,n),e=n.pendingProps,i=r._init,r=i(r._payload),n.type=r,i=n.tag=R1(r),e=Nn(r,e),i){case 0:n=Au(null,n,r,e,t);break e;case 1:n=_f(null,n,r,e,t);break e;case 11:n=xf(null,n,r,e,t);break e;case 14:n=wf(null,n,r,Nn(r.type,e),t);break e}throw Error(H(306,r,""))}return n;case 0:return r=n.type,i=n.pendingProps,i=n.elementType===r?i:Nn(r,i),Au(e,n,r,i,t);case 1:return r=n.type,i=n.pendingProps,i=n.elementType===r?i:Nn(r,i),_f(e,n,r,i,t);case 3:e:{if(im(n),e===null)throw Error(H(387));r=n.pendingProps,l=n.memoizedState,i=l.element,Ph(e,n),Xl(n,r,null,t);var a=n.memoizedState;if(r=a.element,l.isDehydrated)if(l={element:r,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},n.updateQueue.baseState=l,n.memoizedState=l,n.flags&256){i=Nr(Error(H(423)),n),n=Sf(e,n,r,t,i);break e}else if(r!==i){i=Nr(Error(H(424)),n),n=Sf(e,n,r,t,i);break e}else for(yn=xt(n.stateNode.containerInfo.firstChild),vn=n,ze=!0,On=null,t=Ah(n,null,r,t),n.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(jr(),r===i){n=tt(e,n,t);break e}Ze(e,n,r,t)}n=n.child}return n;case 5:return Ih(n),e===null&&Cu(n),r=n.type,i=n.pendingProps,l=e!==null?e.memoizedProps:null,a=i.children,ku(r,i)?a=null:l!==null&&ku(r,l)&&(n.flags|=32),rm(e,n),Ze(e,n,a,t),n.child;case 6:return e===null&&Cu(n),null;case 13:return lm(e,n,t);case 4:return Ls(n,n.stateNode.containerInfo),r=n.pendingProps,e===null?n.child=Pr(n,null,r,t):Ze(e,n,r,t),n.child;case 11:return r=n.type,i=n.pendingProps,i=n.elementType===r?i:Nn(r,i),xf(e,n,r,i,t);case 7:return Ze(e,n,n.pendingProps,t),n.child;case 8:return Ze(e,n,n.pendingProps.children,t),n.child;case 12:return Ze(e,n,n.pendingProps.children,t),n.child;case 10:e:{if(r=n.type._context,i=n.pendingProps,l=n.memoizedProps,a=i.value,_e(Yl,r._currentValue),r._currentValue=a,l!==null)if(Fn(l.value,a)){if(l.children===i.children&&!cn.current){n=tt(e,n,t);break e}}else for(l=n.child,l!==null&&(l.return=n);l!==null;){var o=l.dependencies;if(o!==null){a=l.child;for(var u=o.firstContext;u!==null;){if(u.context===r){if(l.tag===1){u=Gn(-1,t&-t),u.tag=2;var s=l.updateQueue;if(s!==null){s=s.shared;var d=s.pending;d===null?u.next=u:(u.next=d.next,d.next=u),s.pending=u}}l.lanes|=t,u=l.alternate,u!==null&&(u.lanes|=t),bu(l.return,t,n),o.lanes|=t;break}u=u.next}}else if(l.tag===10)a=l.type===n.type?null:l.child;else if(l.tag===18){if(a=l.return,a===null)throw Error(H(341));a.lanes|=t,o=a.alternate,o!==null&&(o.lanes|=t),bu(a,t,n),a=l.sibling}else a=l.child;if(a!==null)a.return=l;else for(a=l;a!==null;){if(a===n){a=null;break}if(l=a.sibling,l!==null){l.return=a.return,a=l;break}a=a.return}l=a}Ze(e,n,i.children,t),n=n.child}return n;case 9:return i=n.type,r=n.pendingProps.children,Er(n,t),i=An(i),r=r(i),n.flags|=1,Ze(e,n,r,t),n.child;case 14:return r=n.type,i=Nn(r,n.pendingProps),i=Nn(r.type,i),wf(e,n,r,i,t);case 15:return nm(e,n,n.type,n.pendingProps,t);case 17:return r=n.type,i=n.pendingProps,i=n.elementType===r?i:Nn(r,i),zl(e,n),n.tag=1,fn(r)?(e=!0,Vl(n)):e=!1,Er(n,t),Gh(n,r,i),Tu(n,r,i,t),ju(null,n,r,!0,e,t);case 19:return am(e,n,t);case 22:return tm(e,n,t)}throw Error(H(156,n.tag))};function _m(e,n){return Kp(e,n)}function O1(e,n,t,r){this.tag=e,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Tn(e,n,t,r){return new O1(e,n,t,r)}function Ks(e){return e=e.prototype,!(!e||!e.isReactComponent)}function R1(e){if(typeof e=="function")return Ks(e)?1:0;if(e!=null){if(e=e.$$typeof,e===hs)return 11;if(e===ms)return 14}return 2}function Ct(e,n){var t=e.alternate;return t===null?(t=Tn(e.tag,n,e.key,e.mode),t.elementType=e.elementType,t.type=e.type,t.stateNode=e.stateNode,t.alternate=e,e.alternate=t):(t.pendingProps=n,t.type=e.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=e.flags&14680064,t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,n=e.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},t.sibling=e.sibling,t.index=e.index,t.ref=e.ref,t}function Pl(e,n,t,r,i,l){var a=2;if(r=e,typeof e=="function")Ks(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case fr:return Vt(t.children,i,l,n);case ps:a=8,i|=8;break;case Jo:return e=Tn(12,t,n,i|2),e.elementType=Jo,e.lanes=l,e;case Go:return e=Tn(13,t,n,i),e.elementType=Go,e.lanes=l,e;case Zo:return e=Tn(19,t,n,i),e.elementType=Zo,e.lanes=l,e;case Ip:return Ca(t,i,l,n);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case jp:a=10;break e;case Pp:a=9;break e;case hs:a=11;break e;case ms:a=14;break e;case ct:a=16,r=null;break e}throw Error(H(130,e==null?e:typeof e,""))}return n=Tn(a,t,n,i),n.elementType=e,n.type=r,n.lanes=l,n}function Vt(e,n,t,r){return e=Tn(7,e,r,n),e.lanes=t,e}function Ca(e,n,t,r){return e=Tn(22,e,r,n),e.elementType=Ip,e.lanes=t,e.stateNode={isHidden:!1},e}function uo(e,n,t){return e=Tn(6,e,null,n),e.lanes=t,e}function so(e,n,t){return n=Tn(4,e.children!==null?e.children:[],e.key,n),n.lanes=t,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}function M1(e,n,t,r,i){this.tag=n,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ha(0),this.expirationTimes=Ha(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ha(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Xs(e,n,t,r,i,l,a,o,u){return e=new M1(e,n,t,o,u),n===1?(n=1,l===!0&&(n|=8)):n=0,l=Tn(3,null,null,n),e.current=l,l.stateNode=e,l.memoizedState={element:r,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ns(l),e}function q1(e,n,t){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:cr,key:r==null?null:""+r,children:e,containerInfo:n,implementation:t}}function Sm(e){if(!e)return Tt;e=e._reactInternals;e:{if(er(e)!==e||e.tag!==1)throw Error(H(170));var n=e;do{switch(n.tag){case 3:n=n.stateNode.context;break e;case 1:if(fn(n.type)){n=n.stateNode.__reactInternalMemoizedMergedChildContext;break e}}n=n.return}while(n!==null);throw Error(H(171))}if(e.tag===1){var t=e.type;if(fn(t))return Sh(e,t,n)}return n}function Cm(e,n,t,r,i,l,a,o,u){return e=Xs(t,r,!0,e,i,l,a,o,u),e.context=Sm(null),t=e.current,r=nn(),i=St(t),l=Gn(r,i),l.callback=n??null,wt(t,l,i),e.current.lanes=i,Hi(e,i,r),dn(e,r),e}function ba(e,n,t,r){var i=n.current,l=nn(),a=St(i);return t=Sm(t),n.context===null?n.context=t:n.pendingContext=t,n=Gn(l,a),n.payload={element:e},r=r===void 0?null:r,r!==null&&(n.callback=r),e=wt(i,n,a),e!==null&&(Mn(e,i,a,l),bl(e,i,a)),a}function ia(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Nf(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var t=e.retryLane;e.retryLane=t!==0&&t<n?t:n}}function Js(e,n){Nf(e,n),(e=e.alternate)&&Nf(e,n)}function F1(){return null}var bm=typeof reportError=="function"?reportError:function(e){console.error(e)};function Gs(e){this._internalRoot=e}Ea.prototype.render=Gs.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(H(409));ba(e,n,null,null)};Ea.prototype.unmount=Gs.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;Jt(function(){ba(null,e,null,null)}),n[et]=null}};function Ea(e){this._internalRoot=e}Ea.prototype.unstable_scheduleHydration=function(e){if(e){var n=th();e={blockedOn:null,target:e,priority:n};for(var t=0;t<dt.length&&n!==0&&n<dt[t].priority;t++);dt.splice(t,0,e),t===0&&ih(e)}};function Zs(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Ta(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Lf(){}function D1(e,n,t,r,i){if(i){if(typeof r=="function"){var l=r;r=function(){var s=ia(a);l.call(s)}}var a=Cm(n,r,e,0,null,!1,!1,"",Lf);return e._reactRootContainer=a,e[et]=a.current,Ai(e.nodeType===8?e.parentNode:e),Jt(),a}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var o=r;r=function(){var s=ia(u);o.call(s)}}var u=Xs(e,0,!1,null,null,!1,!1,"",Lf);return e._reactRootContainer=u,e[et]=u.current,Ai(e.nodeType===8?e.parentNode:e),Jt(function(){ba(n,u,t,r)}),u}function za(e,n,t,r,i){var l=t._reactRootContainer;if(l){var a=l;if(typeof i=="function"){var o=i;i=function(){var u=ia(a);o.call(u)}}ba(n,a,e,i)}else a=D1(t,n,e,i,r);return ia(a)}eh=function(e){switch(e.tag){case 3:var n=e.stateNode;if(n.current.memoizedState.isDehydrated){var t=oi(n.pendingLanes);t!==0&&(vs(n,t|1),dn(n,Le()),!(ge&6)&&(Lr=Le()+500,jt()))}break;case 13:Jt(function(){var r=nt(e,1);if(r!==null){var i=nn();Mn(r,e,1,i)}}),Js(e,1)}};ks=function(e){if(e.tag===13){var n=nt(e,134217728);if(n!==null){var t=nn();Mn(n,e,134217728,t)}Js(e,134217728)}};nh=function(e){if(e.tag===13){var n=St(e),t=nt(e,n);if(t!==null){var r=nn();Mn(t,e,n,r)}Js(e,n)}};th=function(){return ve};rh=function(e,n){var t=ve;try{return ve=e,n()}finally{ve=t}};su=function(e,n,t){switch(n){case"input":if(tu(e,t),n=t.name,t.type==="radio"&&n!=null){for(t=e;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+n)+'][type="radio"]'),n=0;n<t.length;n++){var r=t[n];if(r!==e&&r.form===e.form){var i=va(r);if(!i)throw Error(H(90));Lp(r),tu(r,i)}}}break;case"textarea":Rp(e,t);break;case"select":n=t.value,n!=null&&_r(e,!!t.multiple,n,!1)}};Hp=Ws;$p=Jt;var B1={usingClientEntryPoint:!1,Events:[Vi,mr,va,Bp,Up,Ws]},ti={findFiberByHostInstance:Bt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},U1={bundleType:ti.bundleType,version:ti.version,rendererPackageName:ti.rendererPackageName,rendererConfig:ti.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:rt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Qp(e),e===null?null:e.stateNode},findFiberByHostInstance:ti.findFiberByHostInstance||F1,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var hl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!hl.isDisabled&&hl.supportsFiber)try{ha=hl.inject(U1),Vn=hl}catch{}}wn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=B1;wn.createPortal=function(e,n){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Zs(n))throw Error(H(200));return q1(e,n,null,t)};wn.createRoot=function(e,n){if(!Zs(e))throw Error(H(299));var t=!1,r="",i=bm;return n!=null&&(n.unstable_strictMode===!0&&(t=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onRecoverableError!==void 0&&(i=n.onRecoverableError)),n=Xs(e,1,!1,null,null,t,!1,r,i),e[et]=n.current,Ai(e.nodeType===8?e.parentNode:e),new Gs(n)};wn.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(H(188)):(e=Object.keys(e).join(","),Error(H(268,e)));return e=Qp(n),e=e===null?null:e.stateNode,e};wn.flushSync=function(e){return Jt(e)};wn.hydrate=function(e,n,t){if(!Ta(n))throw Error(H(200));return za(null,e,n,!0,t)};wn.hydrateRoot=function(e,n,t){if(!Zs(e))throw Error(H(405));var r=t!=null&&t.hydratedSources||null,i=!1,l="",a=bm;if(t!=null&&(t.unstable_strictMode===!0&&(i=!0),t.identifierPrefix!==void 0&&(l=t.identifierPrefix),t.onRecoverableError!==void 0&&(a=t.onRecoverableError)),n=Cm(n,null,e,1,t??null,i,!1,l,a),e[et]=n.current,Ai(e),r)for(e=0;e<r.length;e++)t=r[e],i=t._getVersion,i=i(t._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[t,i]:n.mutableSourceEagerHydrationData.push(t,i);return new Ea(n)};wn.render=function(e,n,t){if(!Ta(n))throw Error(H(200));return za(null,e,n,!1,t)};wn.unmountComponentAtNode=function(e){if(!Ta(e))throw Error(H(40));return e._reactRootContainer?(Jt(function(){za(null,null,e,!1,function(){e._reactRootContainer=null,e[et]=null})}),!0):!1};wn.unstable_batchedUpdates=Ws;wn.unstable_renderSubtreeIntoContainer=function(e,n,t,r){if(!Ta(t))throw Error(H(200));if(e==null||e._reactInternals===void 0)throw Error(H(38));return za(e,n,t,!1,r)};wn.version="18.3.1-next-f1338f8080-20240426";function Em(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Em)}catch(e){console.error(e)}}Em(),Ep.exports=wn;var H1=Ep.exports,Of=H1;Ko.createRoot=Of.createRoot,Ko.hydrateRoot=Of.hydrateRoot;/**
 * @remix-run/router v1.23.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function qi(){return qi=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)({}).hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},qi.apply(null,arguments)}var gt;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(gt||(gt={}));const Rf="popstate";function $1(e){e===void 0&&(e={});function n(r,i){let{pathname:l,search:a,hash:o}=r.location;return Uu("",{pathname:l,search:a,hash:o},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function t(r,i){return typeof i=="string"?i:la(i)}return W1(n,t,null,e)}function Pe(e,n){if(e===!1||e===null||typeof e>"u")throw new Error(n)}function ec(e,n){if(!e){typeof console<"u"&&console.warn(n);try{throw new Error(n)}catch{}}}function V1(){return Math.random().toString(36).substr(2,8)}function Mf(e,n){return{usr:e.state,key:e.key,idx:n}}function Uu(e,n,t,r){return t===void 0&&(t=null),qi({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof n=="string"?Dr(n):n,{state:t,key:n&&n.key||r||V1()})}function la(e){let{pathname:n="/",search:t="",hash:r=""}=e;return t&&t!=="?"&&(n+=t.charAt(0)==="?"?t:"?"+t),r&&r!=="#"&&(n+=r.charAt(0)==="#"?r:"#"+r),n}function Dr(e){let n={};if(e){let t=e.indexOf("#");t>=0&&(n.hash=e.substr(t),e=e.substr(0,t));let r=e.indexOf("?");r>=0&&(n.search=e.substr(r),e=e.substr(0,r)),e&&(n.pathname=e)}return n}function W1(e,n,t,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:l=!1}=r,a=i.history,o=gt.Pop,u=null,s=d();s==null&&(s=0,a.replaceState(qi({},a.state,{idx:s}),""));function d(){return(a.state||{idx:null}).idx}function f(){o=gt.Pop;let b=d(),g=b==null?null:b-s;s=b,u&&u({action:o,location:w.location,delta:g})}function p(b,g){o=gt.Push;let y=Uu(w.location,b,g);s=d()+1;let k=Mf(y,s),T=w.createHref(y);try{a.pushState(k,"",T)}catch(R){if(R instanceof DOMException&&R.name==="DataCloneError")throw R;i.location.assign(T)}l&&u&&u({action:o,location:w.location,delta:1})}function h(b,g){o=gt.Replace;let y=Uu(w.location,b,g);s=d();let k=Mf(y,s),T=w.createHref(y);a.replaceState(k,"",T),l&&u&&u({action:o,location:w.location,delta:0})}function v(b){let g=i.location.origin!=="null"?i.location.origin:i.location.href,y=typeof b=="string"?b:la(b);return y=y.replace(/ $/,"%20"),Pe(g,"No window.location.(origin|href) available to create URL for href: "+y),new URL(y,g)}let w={get action(){return o},get location(){return e(i,a)},listen(b){if(u)throw new Error("A history only accepts one active listener");return i.addEventListener(Rf,f),u=b,()=>{i.removeEventListener(Rf,f),u=null}},createHref(b){return n(i,b)},createURL:v,encodeLocation(b){let g=v(b);return{pathname:g.pathname,search:g.search,hash:g.hash}},push:p,replace:h,go(b){return a.go(b)}};return w}var qf;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(qf||(qf={}));function Q1(e,n,t){return t===void 0&&(t="/"),Y1(e,n,t)}function Y1(e,n,t,r){let i=typeof n=="string"?Dr(n):n,l=Or(i.pathname||"/",t);if(l==null)return null;let a=Tm(e);K1(a);let o=null,u=av(l);for(let s=0;o==null&&s<a.length;++s)o=iv(a[s],u);return o}function Tm(e,n,t,r){n===void 0&&(n=[]),t===void 0&&(t=[]),r===void 0&&(r="");let i=(l,a,o)=>{let u={relativePath:o===void 0?l.path||"":o,caseSensitive:l.caseSensitive===!0,childrenIndex:a,route:l};u.relativePath.startsWith("/")&&(Pe(u.relativePath.startsWith(r),'Absolute route path "'+u.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),u.relativePath=u.relativePath.slice(r.length));let s=bt([r,u.relativePath]),d=t.concat(u);l.children&&l.children.length>0&&(Pe(l.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+s+'".')),Tm(l.children,n,d,s)),!(l.path==null&&!l.index)&&n.push({path:s,score:tv(s,l.index),routesMeta:d})};return e.forEach((l,a)=>{var o;if(l.path===""||!((o=l.path)!=null&&o.includes("?")))i(l,a);else for(let u of zm(l.path))i(l,a,u)}),n}function zm(e){let n=e.split("/");if(n.length===0)return[];let[t,...r]=n,i=t.endsWith("?"),l=t.replace(/\?$/,"");if(r.length===0)return i?[l,""]:[l];let a=zm(r.join("/")),o=[];return o.push(...a.map(u=>u===""?l:[l,u].join("/"))),i&&o.push(...a),o.map(u=>e.startsWith("/")&&u===""?"/":u)}function K1(e){e.sort((n,t)=>n.score!==t.score?t.score-n.score:rv(n.routesMeta.map(r=>r.childrenIndex),t.routesMeta.map(r=>r.childrenIndex)))}const X1=/^:[\w-]+$/,J1=3,G1=2,Z1=1,ev=10,nv=-2,Ff=e=>e==="*";function tv(e,n){let t=e.split("/"),r=t.length;return t.some(Ff)&&(r+=nv),n&&(r+=G1),t.filter(i=>!Ff(i)).reduce((i,l)=>i+(X1.test(l)?J1:l===""?Z1:ev),r)}function rv(e,n){return e.length===n.length&&e.slice(0,-1).every((r,i)=>r===n[i])?e[e.length-1]-n[n.length-1]:0}function iv(e,n,t){let{routesMeta:r}=e,i={},l="/",a=[];for(let o=0;o<r.length;++o){let u=r[o],s=o===r.length-1,d=l==="/"?n:n.slice(l.length)||"/",f=Hu({path:u.relativePath,caseSensitive:u.caseSensitive,end:s},d),p=u.route;if(!f)return null;Object.assign(i,f.params),a.push({params:i,pathname:bt([l,f.pathname]),pathnameBase:fv(bt([l,f.pathnameBase])),route:p}),f.pathnameBase!=="/"&&(l=bt([l,f.pathnameBase]))}return a}function Hu(e,n){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[t,r]=lv(e.path,e.caseSensitive,e.end),i=n.match(t);if(!i)return null;let l=i[0],a=l.replace(/(.)\/+$/,"$1"),o=i.slice(1);return{params:r.reduce((s,d,f)=>{let{paramName:p,isOptional:h}=d;if(p==="*"){let w=o[f]||"";a=l.slice(0,l.length-w.length).replace(/(.)\/+$/,"$1")}const v=o[f];return h&&!v?s[p]=void 0:s[p]=(v||"").replace(/%2F/g,"/"),s},{}),pathname:l,pathnameBase:a,pattern:e}}function lv(e,n,t){n===void 0&&(n=!1),t===void 0&&(t=!0),ec(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(a,o,u)=>(r.push({paramName:o,isOptional:u!=null}),u?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):t?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,n?void 0:"i"),r]}function av(e){try{return e.split("/").map(n=>decodeURIComponent(n).replace(/\//g,"%2F")).join("/")}catch(n){return ec(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+n+").")),e}}function Or(e,n){if(n==="/")return e;if(!e.toLowerCase().startsWith(n.toLowerCase()))return null;let t=n.endsWith("/")?n.length-1:n.length,r=e.charAt(t);return r&&r!=="/"?null:e.slice(t)||"/"}const ov=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,uv=e=>ov.test(e);function sv(e,n){n===void 0&&(n="/");let{pathname:t,search:r="",hash:i=""}=typeof e=="string"?Dr(e):e,l;if(t)if(uv(t))l=t;else{if(t.includes("//")){let a=t;t=Am(t),ec(!1,"Pathnames cannot have embedded double slashes - normalizing "+(a+" -> "+t))}t.startsWith("/")?l=Df(t.substring(1),"/"):l=Df(t,n)}else l=n;return{pathname:l,search:dv(r),hash:pv(i)}}function Df(e,n){let t=n.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?t.length>1&&t.pop():i!=="."&&t.push(i)}),t.length>1?t.join("/"):"/"}function co(e,n,t,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+n+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+t+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function cv(e){return e.filter((n,t)=>t===0||n.route.path&&n.route.path.length>0)}function nc(e,n){let t=cv(e);return n?t.map((r,i)=>i===t.length-1?r.pathname:r.pathnameBase):t.map(r=>r.pathnameBase)}function tc(e,n,t,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=Dr(e):(i=qi({},e),Pe(!i.pathname||!i.pathname.includes("?"),co("?","pathname","search",i)),Pe(!i.pathname||!i.pathname.includes("#"),co("#","pathname","hash",i)),Pe(!i.search||!i.search.includes("#"),co("#","search","hash",i)));let l=e===""||i.pathname==="",a=l?"/":i.pathname,o;if(a==null)o=t;else{let f=n.length-1;if(!r&&a.startsWith("..")){let p=a.split("/");for(;p[0]==="..";)p.shift(),f-=1;i.pathname=p.join("/")}o=f>=0?n[f]:"/"}let u=sv(i,o),s=a&&a!=="/"&&a.endsWith("/"),d=(l||a===".")&&t.endsWith("/");return!u.pathname.endsWith("/")&&(s||d)&&(u.pathname+="/"),u}const Am=e=>e.replace(/\/\/+/g,"/"),bt=e=>Am(e.join("/")),fv=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),dv=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,pv=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function hv(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const jm=["post","put","patch","delete"];new Set(jm);const mv=["get",...jm];new Set(mv);/**
 * React Router v6.30.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Fi(){return Fi=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)({}).hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},Fi.apply(null,arguments)}const Aa=U.createContext(null),Pm=U.createContext(null),it=U.createContext(null),ja=U.createContext(null),lt=U.createContext({outlet:null,matches:[],isDataRoute:!1}),Im=U.createContext(null);function gv(e,n){let{relative:t}=n===void 0?{}:n;Br()||Pe(!1);let{basename:r,navigator:i}=U.useContext(it),{hash:l,pathname:a,search:o}=Pa(e,{relative:t}),u=a;return r!=="/"&&(u=a==="/"?r:bt([r,a])),i.createHref({pathname:u,search:o,hash:l})}function Br(){return U.useContext(ja)!=null}function Ur(){return Br()||Pe(!1),U.useContext(ja).location}function Nm(e){U.useContext(it).static||U.useLayoutEffect(e)}function rc(){let{isDataRoute:e}=U.useContext(lt);return e?jv():yv()}function yv(){Br()||Pe(!1);let e=U.useContext(Aa),{basename:n,future:t,navigator:r}=U.useContext(it),{matches:i}=U.useContext(lt),{pathname:l}=Ur(),a=JSON.stringify(nc(i,t.v7_relativeSplatPath)),o=U.useRef(!1);return Nm(()=>{o.current=!0}),U.useCallback(function(s,d){if(d===void 0&&(d={}),!o.current)return;if(typeof s=="number"){r.go(s);return}let f=tc(s,JSON.parse(a),l,d.relative==="path");e==null&&n!=="/"&&(f.pathname=f.pathname==="/"?n:bt([n,f.pathname])),(d.replace?r.replace:r.push)(f,d.state,d)},[n,r,a,l,e])}function vv(){let{matches:e}=U.useContext(lt),n=e[e.length-1];return n?n.params:{}}function Pa(e,n){let{relative:t}=n===void 0?{}:n,{future:r}=U.useContext(it),{matches:i}=U.useContext(lt),{pathname:l}=Ur(),a=JSON.stringify(nc(i,r.v7_relativeSplatPath));return U.useMemo(()=>tc(e,JSON.parse(a),l,t==="path"),[e,a,l,t])}function kv(e,n){return xv(e,n)}function xv(e,n,t,r){Br()||Pe(!1);let{navigator:i}=U.useContext(it),{matches:l}=U.useContext(lt),a=l[l.length-1],o=a?a.params:{};a&&a.pathname;let u=a?a.pathnameBase:"/";a&&a.route;let s=Ur(),d;if(n){var f;let b=typeof n=="string"?Dr(n):n;u==="/"||(f=b.pathname)!=null&&f.startsWith(u)||Pe(!1),d=b}else d=s;let p=d.pathname||"/",h=p;if(u!=="/"){let b=u.replace(/^\//,"").split("/");h="/"+p.replace(/^\//,"").split("/").slice(b.length).join("/")}let v=Q1(e,{pathname:h}),w=bv(v&&v.map(b=>Object.assign({},b,{params:Object.assign({},o,b.params),pathname:bt([u,i.encodeLocation?i.encodeLocation(b.pathname).pathname:b.pathname]),pathnameBase:b.pathnameBase==="/"?u:bt([u,i.encodeLocation?i.encodeLocation(b.pathnameBase).pathname:b.pathnameBase])})),l,t,r);return n&&w?U.createElement(ja.Provider,{value:{location:Fi({pathname:"/",search:"",hash:"",state:null,key:"default"},d),navigationType:gt.Pop}},w):w}function wv(){let e=Av(),n=hv(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),t=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return U.createElement(U.Fragment,null,U.createElement("h2",null,"Unexpected Application Error!"),U.createElement("h3",{style:{fontStyle:"italic"}},n),t?U.createElement("pre",{style:i},t):null,null)}const _v=U.createElement(wv,null);class Sv extends U.Component{constructor(n){super(n),this.state={location:n.location,revalidation:n.revalidation,error:n.error}}static getDerivedStateFromError(n){return{error:n}}static getDerivedStateFromProps(n,t){return t.location!==n.location||t.revalidation!=="idle"&&n.revalidation==="idle"?{error:n.error,location:n.location,revalidation:n.revalidation}:{error:n.error!==void 0?n.error:t.error,location:t.location,revalidation:n.revalidation||t.revalidation}}componentDidCatch(n,t){console.error("React Router caught the following error during render",n,t)}render(){return this.state.error!==void 0?U.createElement(lt.Provider,{value:this.props.routeContext},U.createElement(Im.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Cv(e){let{routeContext:n,match:t,children:r}=e,i=U.useContext(Aa);return i&&i.static&&i.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=t.route.id),U.createElement(lt.Provider,{value:n},r)}function bv(e,n,t,r){var i;if(n===void 0&&(n=[]),t===void 0&&(t=null),r===void 0&&(r=null),e==null){var l;if(!t)return null;if(t.errors)e=t.matches;else if((l=r)!=null&&l.v7_partialHydration&&n.length===0&&!t.initialized&&t.matches.length>0)e=t.matches;else return null}let a=e,o=(i=t)==null?void 0:i.errors;if(o!=null){let d=a.findIndex(f=>f.route.id&&(o==null?void 0:o[f.route.id])!==void 0);d>=0||Pe(!1),a=a.slice(0,Math.min(a.length,d+1))}let u=!1,s=-1;if(t&&r&&r.v7_partialHydration)for(let d=0;d<a.length;d++){let f=a[d];if((f.route.HydrateFallback||f.route.hydrateFallbackElement)&&(s=d),f.route.id){let{loaderData:p,errors:h}=t,v=f.route.loader&&p[f.route.id]===void 0&&(!h||h[f.route.id]===void 0);if(f.route.lazy||v){u=!0,s>=0?a=a.slice(0,s+1):a=[a[0]];break}}}return a.reduceRight((d,f,p)=>{let h,v=!1,w=null,b=null;t&&(h=o&&f.route.id?o[f.route.id]:void 0,w=f.route.errorElement||_v,u&&(s<0&&p===0?(Pv("route-fallback"),v=!0,b=null):s===p&&(v=!0,b=f.route.hydrateFallbackElement||null)));let g=n.concat(a.slice(0,p+1)),y=()=>{let k;return h?k=w:v?k=b:f.route.Component?k=U.createElement(f.route.Component,null):f.route.element?k=f.route.element:k=d,U.createElement(Cv,{match:f,routeContext:{outlet:d,matches:g,isDataRoute:t!=null},children:k})};return t&&(f.route.ErrorBoundary||f.route.errorElement||p===0)?U.createElement(Sv,{location:t.location,revalidation:t.revalidation,component:w,error:h,children:y(),routeContext:{outlet:null,matches:g,isDataRoute:!0}}):y()},null)}var Lm=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(Lm||{}),Om=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(Om||{});function Ev(e){let n=U.useContext(Aa);return n||Pe(!1),n}function Tv(e){let n=U.useContext(Pm);return n||Pe(!1),n}function zv(e){let n=U.useContext(lt);return n||Pe(!1),n}function Rm(e){let n=zv(),t=n.matches[n.matches.length-1];return t.route.id||Pe(!1),t.route.id}function Av(){var e;let n=U.useContext(Im),t=Tv(),r=Rm();return n!==void 0?n:(e=t.errors)==null?void 0:e[r]}function jv(){let{router:e}=Ev(Lm.UseNavigateStable),n=Rm(Om.UseNavigateStable),t=U.useRef(!1);return Nm(()=>{t.current=!0}),U.useCallback(function(i,l){l===void 0&&(l={}),t.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,Fi({fromRouteId:n},l)))},[e,n])}const Bf={};function Pv(e,n,t){Bf[e]||(Bf[e]=!0)}function Iv(e,n){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function Mm(e){let{to:n,replace:t,state:r,relative:i}=e;Br()||Pe(!1);let{future:l,static:a}=U.useContext(it),{matches:o}=U.useContext(lt),{pathname:u}=Ur(),s=rc(),d=tc(n,nc(o,l.v7_relativeSplatPath),u,i==="path"),f=JSON.stringify(d);return U.useEffect(()=>s(JSON.parse(f),{replace:t,state:r,relative:i}),[s,f,i,t,r]),null}function $u(e){Pe(!1)}function Nv(e){let{basename:n="/",children:t=null,location:r,navigationType:i=gt.Pop,navigator:l,static:a=!1,future:o}=e;Br()&&Pe(!1);let u=n.replace(/^\/*/,"/"),s=U.useMemo(()=>({basename:u,navigator:l,static:a,future:Fi({v7_relativeSplatPath:!1},o)}),[u,o,l,a]);typeof r=="string"&&(r=Dr(r));let{pathname:d="/",search:f="",hash:p="",state:h=null,key:v="default"}=r,w=U.useMemo(()=>{let b=Or(d,u);return b==null?null:{location:{pathname:b,search:f,hash:p,state:h,key:v},navigationType:i}},[u,d,f,p,h,v,i]);return w==null?null:U.createElement(it.Provider,{value:s},U.createElement(ja.Provider,{children:t,value:w}))}function Lv(e){let{children:n,location:t}=e;return kv(Vu(n),t)}new Promise(()=>{});function Vu(e,n){n===void 0&&(n=[]);let t=[];return U.Children.forEach(e,(r,i)=>{if(!U.isValidElement(r))return;let l=[...n,i];if(r.type===U.Fragment){t.push.apply(t,Vu(r.props.children,l));return}r.type!==$u&&Pe(!1),!r.props.index||!r.props.children||Pe(!1);let a={id:r.props.id||l.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(a.children=Vu(r.props.children,l)),t.push(a)}),t}/**
 * React Router DOM v6.30.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function aa(){return aa=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)({}).hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},aa.apply(null,arguments)}function qm(e,n){if(e==null)return{};var t={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(n.indexOf(r)!==-1)continue;t[r]=e[r]}return t}function Ov(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function Rv(e,n){return e.button===0&&(!n||n==="_self")&&!Ov(e)}const Mv=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],qv=["aria-current","caseSensitive","className","end","style","to","viewTransition","children"],Fv="6";try{window.__reactRouterVersion=Fv}catch{}const Dv=U.createContext({isTransitioning:!1}),Bv="startTransition",Uf=Iy[Bv];function Uv(e){let{basename:n,children:t,future:r,window:i}=e,l=U.useRef();l.current==null&&(l.current=$1({window:i,v5Compat:!0}));let a=l.current,[o,u]=U.useState({action:a.action,location:a.location}),{v7_startTransition:s}=r||{},d=U.useCallback(f=>{s&&Uf?Uf(()=>u(f)):u(f)},[u,s]);return U.useLayoutEffect(()=>a.listen(d),[a,d]),U.useEffect(()=>Iv(r),[r]),U.createElement(Nv,{basename:n,children:t,location:o.location,navigationType:o.action,navigator:a,future:r})}const Hv=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",$v=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,oa=U.forwardRef(function(n,t){let{onClick:r,relative:i,reloadDocument:l,replace:a,state:o,target:u,to:s,preventScrollReset:d,viewTransition:f}=n,p=qm(n,Mv),{basename:h}=U.useContext(it),v,w=!1;if(typeof s=="string"&&$v.test(s)&&(v=s,Hv))try{let k=new URL(window.location.href),T=s.startsWith("//")?new URL(k.protocol+s):new URL(s),R=Or(T.pathname,h);T.origin===k.origin&&R!=null?s=R+T.search+T.hash:w=!0}catch{}let b=gv(s,{relative:i}),g=Qv(s,{replace:a,state:o,target:u,preventScrollReset:d,relative:i,viewTransition:f});function y(k){r&&r(k),k.defaultPrevented||g(k)}return U.createElement("a",aa({},p,{href:v||b,onClick:w||l?r:y,ref:t,target:u}))}),Vv=U.forwardRef(function(n,t){let{"aria-current":r="page",caseSensitive:i=!1,className:l="",end:a=!1,style:o,to:u,viewTransition:s,children:d}=n,f=qm(n,qv),p=Pa(u,{relative:f.relative}),h=Ur(),v=U.useContext(Pm),{navigator:w,basename:b}=U.useContext(it),g=v!=null&&Yv(p)&&s===!0,y=w.encodeLocation?w.encodeLocation(p).pathname:p.pathname,k=h.pathname,T=v&&v.navigation&&v.navigation.location?v.navigation.location.pathname:null;i||(k=k.toLowerCase(),T=T?T.toLowerCase():null,y=y.toLowerCase()),T&&b&&(T=Or(T,b)||T);const R=y!=="/"&&y.endsWith("/")?y.length-1:y.length;let C=k===y||!a&&k.startsWith(y)&&k.charAt(R)==="/",B=T!=null&&(T===y||!a&&T.startsWith(y)&&T.charAt(y.length)==="/"),V={isActive:C,isPending:B,isTransitioning:g},ee=C?r:void 0,E;typeof l=="function"?E=l(V):E=[l,C?"active":null,B?"pending":null,g?"transitioning":null].filter(Boolean).join(" ");let K=typeof o=="function"?o(V):o;return U.createElement(oa,aa({},f,{"aria-current":ee,className:E,ref:t,style:K,to:u,viewTransition:s}),typeof d=="function"?d(V):d)});var Wu;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(Wu||(Wu={}));var Hf;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Hf||(Hf={}));function Wv(e){let n=U.useContext(Aa);return n||Pe(!1),n}function Qv(e,n){let{target:t,replace:r,state:i,preventScrollReset:l,relative:a,viewTransition:o}=n===void 0?{}:n,u=rc(),s=Ur(),d=Pa(e,{relative:a});return U.useCallback(f=>{if(Rv(f,t)){f.preventDefault();let p=r!==void 0?r:la(s)===la(d);u(e,{replace:p,state:i,preventScrollReset:l,relative:a,viewTransition:o})}},[s,u,d,r,i,t,e,l,a,o])}function Yv(e,n){n===void 0&&(n={});let t=U.useContext(Dv);t==null&&Pe(!1);let{basename:r}=Wv(Wu.useViewTransitionState),i=Pa(e,{relative:n.relative});if(!t.isTransitioning)return!1;let l=Or(t.currentLocation.pathname,r)||t.currentLocation.pathname,a=Or(t.nextLocation.pathname,r)||t.nextLocation.pathname;return Hu(i.pathname,a)!=null||Hu(i.pathname,l)!=null}/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kv=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Fm=(...e)=>e.filter((n,t,r)=>!!n&&r.indexOf(n)===t).join(" ");/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Xv={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jv=U.forwardRef(({color:e="currentColor",size:n=24,strokeWidth:t=2,absoluteStrokeWidth:r,className:i="",children:l,iconNode:a,...o},u)=>U.createElement("svg",{ref:u,...Xv,width:n,height:n,stroke:e,strokeWidth:r?Number(t)*24/Number(n):t,className:Fm("lucide",i),...o},[...a.map(([s,d])=>U.createElement(s,d)),...Array.isArray(l)?l:[l]]));/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dn=(e,n)=>{const t=U.forwardRef(({className:r,...i},l)=>U.createElement(Jv,{ref:l,iconNode:n,className:Fm(`lucide-${Kv(e)}`,r),...i}));return t.displayName=`${e}`,t};/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dm=Dn("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gv=Dn("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $f=Dn("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zv=Dn("Compass",[["path",{d:"m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z",key:"9ktpf1"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bm=Dn("Copy",[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Um=Dn("FileText",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ek=Dn("Key",[["path",{d:"m15.5 7.5 2.3 2.3a1 1 0 0 0 1.4 0l2.1-2.1a1 1 0 0 0 0-1.4L19 4",key:"g0fldk"}],["path",{d:"m21 2-9.6 9.6",key:"1j0ho8"}],["circle",{cx:"7.5",cy:"15.5",r:"5.5",key:"yqb3hr"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nk=Dn("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tk=Dn("Repeat",[["path",{d:"m17 2 4 4-4 4",key:"nntrym"}],["path",{d:"M3 11v-1a4 4 0 0 1 4-4h14",key:"84bu3i"}],["path",{d:"m7 22-4-4 4-4",key:"1wqhfi"}],["path",{d:"M21 13v1a4 4 0 0 1-4 4H3",key:"1rx37r"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hm=Dn("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $m=Dn("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),rk=`---
title: Autentifikatsiya va Digest
order: 2
codeExamples:
  curl: |
    curl --location 'https://{{host}}/api/v1/jsonrpc' \\
      --header 'Header-Login: {{username}}' \\
      --header 'Header-Sign: {{digest}}' \\
      --header 'Content-Type: application/json' \\
      --header 'Authorization: Bearer {{access_token}}' \\
      --data '{
        "jsonrpc": "2.0",
        "id": 111,
        "method": "transfer.create",
        "params": {
          "ext_id": "12",
          "number": "8600xxxx",
          "amount": 100000,
          "currency": 643
        }
      }'
  node: |
    const crypto = require('crypto');

    const secret = process.env.UNISOFT_SECRET;
    const body = JSON.stringify(requestPayload);

    const digest = crypto
      .createHmac('sha256', secret)
      .update(body)
      .digest('base64');

    // So'rov headerlariga qo'shiladi:
    // Header-Sign: {digest}
    // Authorization: Bearer {access_token}
---

## Sarlavhalar (headers)

| Header | Qiymat | Izoh |
|---|---|---|
| \`Authorization\` | \`Bearer {access_token}\` | \`login\` metodidan qaytgan token |
| \`Content-Type\` | \`application/json\` | Gate faqat JSON so'rovlarga xizmat qiladi |
| \`Accept\` | \`application/json\` | Javob ham JSON formatida bo'ladi |
| \`Header-Sign\` | HMAC digest | Har bir so'rov uchun quyida tushuntirilgan tartibda hisoblanadi |

## Digest hisoblash tartibi

1. **Maxfiy kalit** — HMAC hisoblash uchun ishlatiladigan \`secret\`ni
   xavfsiz saqlang, hech kimga oshkor qilmang.
2. **HMAC hisoblash** — \`secret\` va so'rov tanasi (\`request.body\`)
   asosida SHA-256 orqali digest hisoblanadi.
3. **Base64 kodlash** — hisoblangan digest Base64 formatga o'tkaziladi.
4. **Header'ga qo'shish** — natija \`Header-Sign\` sarlavhasiga
   joylashtiriladi.

Digest noto'g'ri hisoblansa, so'rov autentifikatsiyadan o'tmaydi —
shuning uchun so'rov tanasi (\`body\`) digest hisoblangandan keyin
o'zgartirilmasligi kerak.
`,ik=`---
title: Ulanish
order: 1
codeExamples:
  curl: |
    POST https://{{host}}/api/v1/jsonrpc
---

Barcha so'rovlar **bitta endpoint**ga yuboriladi. Qaysi amal
bajarilishi so'rov tanasidagi \`method\` maydoni orqali belgilanadi —
bu **JSON-RPC 2.0** protokoli.

## So'rov formati

\`\`\`json
{
  "jsonrpc": "2.0",
  "id": "1",
  "method": "name",
  "params": {
    "key": "value"
  }
}
\`\`\`

| Maydon | Turi | Tavsif |
|---|---|---|
| \`jsonrpc\` | string | Har doim \`"2.0"\` |
| \`id\` | string/integer | So'rov identifikatori (uuid yoki \`kompaniya_vaqt\` tavsiya etiladi) |
| \`method\` | string | Chaqirilayotgan metod nomi |
| \`params\` | object | Metodga tegishli parametrlar |

## Muvaffaqiyatli javob

\`\`\`json
{
  "jsonrpc": "2.0",
  "id": "1",
  "status": true,
  "origin": "login",
  "result": { "message": {} },
  "host": {
    "host": "visa.unired.uz",
    "time_stamp": "2020-01-20 11:59:59"
  }
}
\`\`\`

## Xatolik javobi

\`\`\`json
{
  "jsonrpc": "2.0",
  "status": false,
  "origin": "login",
  "error": {
    "code": 401,
    "message": {}
  },
  "id": null
}
\`\`\`

\`status: false\` bo'lganda javobda \`error.code\` va \`error.message\`
maydonlari bo'ladi — \`message\` odatda \`uz\`, \`ru\`, \`en\` tillarida
qaytadi.
`,lk=`---
title: Countries list
order: 4
rpcMethod: countries.list
codeExamples:
  curl: |
    curl --location 'https://{{host}}/api/v1/jsonrpc' \\
      --header 'Authorization: Bearer {{access_token}}' \\
      --header 'Content-Type: application/json' \\
      --data '{
        "jsonrpc": "2.0",
        "id": 1,
        "method": "countries.list",
        "params": {}
      }'
  node: |
    const response = await fetch(\`https://\${host}/api/v1/jsonrpc\`, {
      method: 'POST',
      headers: {
        Authorization: \`Bearer \${accessToken}\`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        jsonrpc: '2.0',
        id: 1,
        method: 'countries.list',
        params: {},
      }),
    });
    const { result } = await response.json();
params:
  - name: jsonrpc
    type: string
    required: true
    desc: "JSON-RPC protokol versiyasi."
  - name: id
    type: "string | integer"
    required: true
    desc: "So'rov identifikatori."
  - name: method
    type: string
    required: true
    desc: "Metod nomi — bu holda \\"countries.list\\"."
  - name: params
    type: object
    required: true
    desc: "Bo'sh obyekt."
---

\`countries.list\` tizim qo'llab-quvvatlaydigan barcha mamlakatlar va
to'lov tizimlarini qaytaradi. Har bir mamlakat uchun ikkita savolga
javob beradi:

- Shu mamlakat kartalaridan pul yechish (**debit**) mumkinmi?
- Shu mamlakat kartalariga pul yuborish (**credit**) mumkinmi?

Va har bir operatsiya uchun — qaysi \`service_code\`dan foydalanish
kerakligini ko'rsatadi.

## Debit — kartadan pul yechish

\`debit_enabled: true\` bo'lsa, shu mamlakatda chiqarilgan kartalardan
mablag' yechib olish mumkin. Har bir debit yozuvida \`service_code\`
bor — shu kodni to'lov API'siga uzatib, yechib olish jarayonini
boshlaysiz.

## Credit — kartaga pul yuborish

\`credit_enabled: true\` bo'lsa, shu mamlakat kartalariga pul
to'ldirish yoki o'tkazish mumkin. Har bir credit yozuvida ham
\`service_code\` bor — uni pul yuborish uchun ishlatasiz.

## Service code nima

\`service_code\` — bitta aniq operatsiyani bildiruvchi noyob
identifikator. U karta tarmog'i, mamlakat va yo'nalishni (kiruvchi
yoki chiquvchi) belgilaydi. Shu javobdan olingan \`service_code\`ni
haqiqiy transfer endpoint'ini chaqirishda parametr sifatida
ishlatasiz.

## Javob maydonlari

| Maydon | Turi | Tavsif |
|---|---|---|
| \`id\` | string | Mamlakatning noyob identifikatori |
| \`code\` | string | Mamlakat yoki valyuta kodi (masalan, \`"UZB"\`, \`"RUS"\`) |
| \`name\` | string | O'qilishi oson mamlakat/tizim nomi |
| \`debit_enabled\` | boolean | Shu mamlakat uchun pul yechish mavjudmi |
| \`credit_enabled\` | boolean | Shu mamlakat uchun pul yuborish mavjudmi |
| \`debit\` | array | Mavjud debit xizmatlar ro'yxati (bo'sh, agar \`debit_enabled\` false bo'lsa) |
| \`credit\` | array | Mavjud credit xizmatlar ro'yxati |
| \`service_code\` | string | Keyingi so'rovlarda ishlatiladigan identifikator (masalan, \`"V2S0005"\`) |
| \`service_name\` | string | Xizmatning o'qilishi oson tavsifi |

## Namuna javob

\`\`\`json
{
  "jsonrpc": "2.0",
  "result": [
    {
      "id": 4,
      "code": "RUS",
      "name": "Russia",
      "debit_enabled": true,
      "credit_enabled": true,
      "debit": [
        {
          "service_code": "V2S0006",
          "service_name": "AFT Withdrawal Service for RF Cards"
        }
      ],
      "credit": [
        {
          "service_code": "V2S0011",
          "service_name": "Account to RF cards"
        }
      ]
    },
    {
      "id": 1,
      "code": "UZB",
      "name": "UZBEKISTAN",
      "debit_enabled": true,
      "credit_enabled": true,
      "debit": [
        {
          "service_code": "V2S0009",
          "service_name": "Withdrawing money from Uzcard cards via OTP verification"
        }
      ],
      "credit": [
        {
          "service_code": "V2S0005",
          "service_name": "Uzcard Account to card"
        }
      ]
    }
  ],
  "id": 1,
  "status": true,
  "origin": "countries.list"
}
\`\`\`
`,ak=`---
title: Get Rate
order: 7
rpcMethod: get.rate.v2
codeExamples:
  curl: |
    curl --location 'https://{{host}}/api/v1/jsonrpc' \\
      --header 'Authorization: Bearer {{access_token}}' \\
      --header 'Content-Type: application/json' \\
      --data '{
        "jsonrpc": "2.0",
        "id": 1,
        "method": "get.rate.v2",
        "params": {
          "service_code": "V2S0007"
        }
      }'
  node: |
    const response = await fetch(\`https://\${host}/api/v1/jsonrpc\`, {
      method: 'POST',
      headers: {
        Authorization: \`Bearer \${accessToken}\`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        jsonrpc: '2.0',
        id: 1,
        method: 'get.rate.v2',
        params: { service_code: 'V2S0007' },
      }),
    });
    const { result } = await response.json();
params:
  - name: service_code
    type: string
    required: true
    desc: "Kurs so'ralayotgan xizmatning noyob kodi."
---

Tanlangan xizmat uchun valyuta ayirboshlash kurslarini qaytaradi.
\`get.rate.v2\` shu xizmatga tegishli barcha mavjud konversiya
kurslarini beradi.

## Bu metod nima uchun kerak

- Xizmat kodi bo'yicha ayirboshlash kurslarini olish
- Asosiy va ikkinchi darajali konversiya kurslarini aniqlash
- Valyuta konversiya qoidalari asosida tranzaksiya summasini hisoblash

## Javob maydonlari

| Maydon | Turi | Tavsif |
|---|---|---|
| \`transaction_type\` | string | Tranzaksiya turi (\`credit\` / \`debit\`) |
| \`is_primary\` | boolean | Kurs asosiy hisoblanishini bildiradi |
| \`currency\` | string | Manba valyuta (ISO 4217 raqamli kod) |
| \`target_currency\` | string | Maqsad valyuta (ISO 4217 raqamli kod) |
| \`operator\` | string | Kursni hisoblash operatori (\`multiply\`, \`divide\`) |
| \`value\` | number | Ayirboshlash kursining qiymati |

## Namuna javob

\`\`\`json
{
  "jsonrpc": "2.0",
  "result": [
    {
      "transaction_type": "credit",
      "is_primary": true,
      "currency": "972",
      "target_currency": "860",
      "operator": "multiply",
      "value": 1343.35
    },
    {
      "transaction_type": "credit",
      "is_primary": true,
      "currency": "972",
      "target_currency": "643",
      "operator": "multiply",
      "value": 8.58
    }
  ],
  "id": 1,
  "status": true,
  "origin": "get.rate.v2"
}
\`\`\`

Yakuniy summani hisoblash uchun \`value\`ni \`operator\`ga qarab manba
summasiga ko'paytiring (\`multiply\`) yoki bo'ling (\`divide\`).
`,ok=`---
title: Login
order: 1
rpcMethod: login.v2
codeExamples:
  curl: |
    curl --location 'https://{{host}}/api/v1/jsonrpc' \\
      --header 'Content-Type: application/json' \\
      --data '{
        "jsonrpc": "2.0",
        "id": "{{$randomInt}}",
        "method": "login.v2",
        "params": {
          "username": "{{username}}",
          "password": "{{password}}"
        }
      }'
  node: |
    const response = await fetch(\`https://\${host}/api/v1/jsonrpc\`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        jsonrpc: '2.0',
        id: Date.now(),
        method: 'login.v2',
        params: { username, password },
      }),
    });
    const { result } = await response.json();
    // result.access_token
params:
  - name: username
    type: string
    required: true
    desc: "Klient login nomi."
  - name: password
    type: string
    required: true
    desc: "Klient paroli."
---

\`login\` metodi orqali boshqa barcha so'rovlarni avtorizatsiya qilish
uchun ishlatiladigan **access_token** olinadi.

## Javob

\`access_token\` — boshqa so'rovlarni avtorizatsiya qilish uchun
ishlatiladi. Standart amal qilish muddati — **1 yil (365 kun)**.

\`\`\`json
{
  "jsonrpc": "2.0",
  "result": {
    "access_token": "5b746c54-0bf5-4f0e-****"
  },
  "id": "976",
  "status": true,
  "origin": "login",
  "host": {
    "host": "unipos.online",
    "timestamp": "2023-04-18 09:24:05.834127"
  }
}
\`\`\`

## Xatolik holati

Login yoki parol noto'g'ri bo'lsa:

\`\`\`json
{
  "jsonrpc": "2.0",
  "error": {
    "code": -32101,
    "message": {
      "uz": "Foydalanuvchi nomi yoki parol noto'g'ri",
      "ru": "Имя пользователя или пароль неверен",
      "en": "Username or password incorrect"
    }
  },
  "id": "489",
  "status": false,
  "origin": "login"
}
\`\`\`
`,uk=`---
title: Provider
order: 2
rpcMethod: providers
codeExamples:
  curl: |
    curl --location 'https://{{host}}/api/v1/jsonrpc' \\
      --header 'Authorization: Bearer {{access_token}}' \\
      --header 'Content-Type: application/json' \\
      --data '{
        "jsonrpc": "2.0",
        "id": 1,
        "method": "providers",
        "params": {}
      }'
  node: |
    const response = await fetch(\`https://\${host}/api/v1/jsonrpc\`, {
      method: 'POST',
      headers: {
        Authorization: \`Bearer \${accessToken}\`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        jsonrpc: '2.0',
        id: 1,
        method: 'providers',
        params: {},
      }),
    });
    const { result } = await response.json();
params:
  - name: jsonrpc
    type: string
    required: true
    desc: "JSON-RPC protokol versiyasi."
  - name: id
    type: "string | integer"
    required: true
    desc: "So'rov identifikatori."
  - name: method
    type: string
    required: true
    desc: "Metod nomi — bu holda \\"providers\\"."
  - name: params
    type: object
    required: true
    desc: "Bo'sh obyekt — kelajakda ishlatish uchun zaxiralangan."
---

\`providers\` metodi karuselda ko'rsatiladigan barcha mavjud
provayderlar ro'yxatini qaytaradi. Har bir provayder — bu qo'llab-
quvvatlanadigan xizmat, mamlakat yoki to'lov tizimi (masalan, Visa,
Humo, Uzcard, MTS va h.k.).

## Bu metod nima uchun kerak

- Provayderlarni UI'da (karuselda) ko'rsatish
- Provayder nomlarini bir nechta tilda ko'rsatish
- Provayder faol yoki nofaolligini tekshirish

## Javob maydonlari

| Maydon | Turi | Tavsif |
|---|---|---|
| \`id\` | integer | Provayderning noyob identifikatori |
| \`name_uz\` | string | Provayder nomi o'zbek tilida |
| \`name_en\` | string | Provayder nomi ingliz tilida |
| \`name_ru\` | string | Provayder nomi rus tilida |
| \`is_active\` | boolean | Provayder faolligini bildiradi |

## Namuna javob

\`\`\`json
{
  "jsonrpc": "2.0",
  "result": [
    {
      "id": 1,
      "name_uz": "Turkiya",
      "name_ru": "Турция",
      "name_en": "Turkey",
      "is_active": true
    },
    {
      "id": 4,
      "name_uz": "Humo",
      "name_ru": "Хумо",
      "name_en": "Humo",
      "is_active": true
    },
    {
      "id": 5,
      "name_uz": "Uzcard",
      "name_ru": "Узкард",
      "name_en": "Uzcard",
      "is_active": true
    }
  ]
}
\`\`\`
`,sk=`---
title: Sender create
order: 23
rpcMethod: sender.create
codeExamples:
  curl: |
    curl --location 'https://{{host}}/api/v1/jsonrpc' \\
      --header 'Authorization: Bearer {{access_token}}' \\
      --header 'Content-Type: application/json' \\
      --data '{
        "jsonrpc": "2.0",
        "id": 2,
        "method": "sender.create",
        "params": {
          "sender": {
            "phone": "99890***86708",
            "series": "AC0**288",
            "address": "5 th Avenue 1 34096 Fatih Istanbul",
            "last_name": "NARZULLAYEV",
            "first_name": "SHAsXBOZ",
            "birth_date": "2002-02-17",
            "birth_place": "Qarshi",
            "expire_date": "2028.02.03",
            "issuing_date": "2018.02.04"
          }
        }
      }'
  node: |
    const response = await fetch(\`https://\${host}/api/v1/jsonrpc\`, {
      method: 'POST',
      headers: {
        Authorization: \`Bearer \${accessToken}\`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        jsonrpc: '2.0',
        id: 2,
        method: 'sender.create',
        params: { sender: senderData },
      }),
    });
    const { result } = await response.json();
    // result.sender_id — keyingi so'rovlarda ishlatiladi
params:
  - name: phone
    type: string
    required: true
    desc: "Jo'natuvchining telefon raqami (xalqaro formatda, masalan +998901234567)."
  - name: series
    type: string
    required: true
    desc: "Jo'natuvchining pasport seriyasi va raqami (masalan, AB1234567)."
  - name: address
    type: string
    required: true
    desc: "Jo'natuvchining doimiy ro'yxatdan o'tgan manzili."
  - name: last_name
    type: string
    required: true
    desc: "Jo'natuvchining familiyasi (pasportdagidek)."
  - name: first_name
    type: string
    required: true
    desc: "Jo'natuvchining ismi (pasportdagidek)."
  - name: birth_date
    type: string
    required: true
    desc: "Tug'ilgan sana (YYYY-MM-DD formatida)."
  - name: birth_place
    type: string
    required: true
    desc: "Tug'ilgan joyi (pasportda ko'rsatilganidek)."
  - name: expire_date
    type: string
    required: true
    desc: "Pasport amal qilish muddati tugash sanasi (YYYY-MM-DD)."
  - name: issuing_date
    type: string
    required: true
    desc: "Pasport berilgan sana (YYYY-MM-DD)."
---

\`sender.create\` shaxsiy va pasport ma'lumotlarini (telefon, pasport
seriyasi, manzil, to'liq ism, tug'ilgan sana/joy, pasport berilgan
va tugash sanalari) yuborish orqali tizimda yangi jo'natuvchini
ro'yxatdan o'tkazadi.

Muvaffaqiyatli ro'yxatdan o'tkazilgandan so'ng, server noyob
**\`sender_id\`** qaytaradi — bu keyingi metodlarda (masalan,
\`transfer.create\`) jo'natuvchining shaxsiy ma'lumotlarini har safar
qayta yubormasdan, shu identifikator orqali murojaat qilish uchun
ishlatiladi.

## Javob maydonlari

| Maydon | Turi | Tavsif |
|---|---|---|
| \`message\` | string | Server qaytargan holat xabari (masalan, \`"success"\`) |
| \`sender_id\` | integer | Yangi yaratilgan jo'natuvchining noyob identifikatori |

## Namuna javob

\`\`\`json
{
  "jsonrpc": "2.0",
  "result": {
    "message": "success",
    "sender_id": 54198
  },
  "id": 2,
  "status": true,
  "origin": "sender.create"
}
\`\`\`
`,ck=`---
title: Sender info va Update
order: 24
codeExamples:
  curl: |
    # Sender info
    curl --location 'https://{{host}}/api/v1/jsonrpc' \\
      --header 'Authorization: Bearer {{access_token}}' \\
      --header 'Content-Type: application/json' \\
      --data '{
        "jsonrpc": "2.0",
        "id": 2,
        "method": "sender.info",
        "params": { "sender_id": 54198 }
      }'
  node: |
    # Sender update
    curl --location 'https://{{host}}/api/v1/jsonrpc' \\
      --header 'Authorization: Bearer {{access_token}}' \\
      --header 'Content-Type: application/json' \\
      --data '{
        "jsonrpc": "2.0",
        "id": 1,
        "method": "sender.update",
        "params": {
          "sender_id": 848,
          "data": {
            "series": "ab0000000",
            "phone": "998901234567"
          }
        }
      }'
params:
  - name: sender_id
    type: integer
    required: true
    desc: "Mavjud jo'natuvchining tizimdagi identifikatori."
  - name: data
    type: object
    required: false
    desc: "Faqat sender.update uchun: yangilanadigan maydonlar obyekti (bo'sh bo'lmasligi kerak)."
---

## Sender info — \`sender.info\`

Ilgari ro'yxatdan o'tgan jo'natuvchining shaxsiy va pasport
ma'lumotlarini \`sender_id\` orqali oladi. Bu chaqiruvchi tomonga
jo'natuvchi ma'lumotlarini (telefon, pasport ma'lumotlari, ism,
tug'ilgan sana va h.k.) qayta yubormasdan tekshirish yoki ko'rsatish
imkonini beradi.

## Sender update — \`sender.update\`

Mavjud jo'natuvchining saqlangan ma'lumotlarini \`sender_id\` orqali
o'zgartiradi. Faqat \`data\` obyekti ichida uzatilgan maydonlar
yangilanadi — kiritilmagan maydonlar o'zgarishsiz qoladi.

\`data\` obyekti faqat quyidagi maydonlarni qabul qiladi:

- \`phone\`, \`series\`, \`address\`, \`last_name\`, \`first_name\`,
  \`birth_date\`, \`birth_place\`, \`expire_date\`, \`issuing_date\`

> ⚠️ Ushbu ro'yxatdan tashqari har qanday (noma'lum) maydon nomi
> so'rovning muvaffaqiyatsiz bo'lishiga olib keladi.

Bu metod yangi jo'natuvchi yozuvi yaratmasdan, mavjud
ma'lumotlarni tuzatish yoki yangilash uchun ishlatiladi.
`,fk=`---
title: Services
order: 3
rpcMethod: services
codeExamples:
  curl: |
    curl --location 'https://{{host}}/api/v1/jsonrpc' \\
      --header 'Authorization: Bearer {{access_token}}' \\
      --header 'Content-Type: application/json' \\
      --data '{
        "jsonrpc": "2.0",
        "id": 1,
        "method": "services",
        "params": {
          "provider_id": 8
        }
      }'
  node: |
    const response = await fetch(\`https://\${host}/api/v1/jsonrpc\`, {
      method: 'POST',
      headers: {
        Authorization: \`Bearer \${accessToken}\`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        jsonrpc: '2.0',
        id: 1,
        method: 'services',
        params: { provider_id: 8 },
      }),
    });
    const { result } = await response.json();
params:
  - name: jsonrpc
    type: string
    required: true
    desc: "JSON-RPC protokol versiyasi."
  - name: id
    type: "string | integer"
    required: true
    desc: "So'rov identifikatori."
  - name: method
    type: string
    required: true
    desc: "Metod nomi — bu holda \\"services\\"."
  - name: provider_id
    type: integer
    required: true
    desc: "Xizmatlari so'ralayotgan provayderning identifikatori."
---

\`services\` metodi tanlangan provayder uchun mavjud xizmatlar
ro'yxatini qaytaradi. Har bir xizmat — shu provayder uchun
bajarilishi mumkin bo'lgan aniq operatsiya: karta orqali pul yechish,
o'tkazma yoki to'lov.

## Bu metod nima uchun kerak

- Provayder tanlangandan keyin mavjud xizmatlarni ko'rsatish
- Xizmat nomi va tavsifini bir nechta tilda ko'rsatish
- Summa chegaralari va valyutani tekshirish
- Kerakli maydonlar asosida input formani dinamik qurish
- 3-D Secure talab qilinishini aniqlash

## Javob maydonlari

| Maydon | Turi | Tavsif |
|---|---|---|
| \`id\` | integer | Xizmatning noyob identifikatori |
| \`name_uz\` / \`name_en\` / \`name_ru\` | string | Xizmat nomi tillar bo'yicha |
| \`type\` | string | Xizmat turi (\`debit\`, \`credit\`, \`payment\`) |
| \`description\` | string | Xizmat tavsifi |
| \`min_amount\` / \`max_amount\` | integer | Ruxsat etilgan minimal/maksimal summa (tiyin/kopek birligida) |
| \`currency\` | string | ISO 4217 valyuta kodi |
| \`code\` | string | Ichki xizmat kodi |
| \`is_3ds\` | boolean | 3-D Secure talab qilinishini bildiradi |
| \`fields\` | array | So'rov uchun talab qilinadigan input maydonlar ro'yxati |
| \`response_fields\` | array | Xizmat javobida qaytadigan maydonlar |

## Namuna javob

\`\`\`json
{
  "jsonrpc": "2.0",
  "result": {
    "id": 8,
    "provider": "TCB",
    "services": [
      {
        "id": 6,
        "name_uz": "RF kartalaridan AFT orqali pul yechish",
        "name_en": "AFT Withdrawal Service for RF Cards",
        "type": "debit",
        "min_amount": 100,
        "max_amount": 10000000,
        "currency": "643",
        "code": "V2S0006",
        "is_3ds": false,
        "fields": [
          {
            "id": 17,
            "name": "to_card_number",
            "label_en": "Receiver card",
            "type": "string",
            "is_required": true,
            "regex": "^[0-9]{16}$"
          }
        ],
        "response_fields": [
          { "field_name": "form_url", "label_en": "Form URL" }
        ]
      }
    ]
  },
  "id": 1,
  "status": true,
  "origin": "services"
}
\`\`\`

\`fields\` massividagi har bir maydon \`name\`, \`type\`, \`is_required\` va
kerak bo'lsa \`regex\` orqali qanday input yaratish kerakligini
belgilaydi — bu orqali frontendda forma avtomatik quriladi.
`,dk=`---
title: Transfer check
order: 6
rpcMethod: transfer.check
codeExamples:
  curl: |
    curl --location 'https://{{host}}/api/v1/jsonrpc' \\
      --header 'Authorization: Bearer {{access_token}}' \\
      --header 'Content-Type: application/json' \\
      --data '{
        "jsonrpc": "2.0",
        "id": 1,
        "method": "transfer.check",
        "params": {
          "number": "9105205279986",
          "service_code": "V2S0016"
        }
      }'
  node: |
    const response = await fetch(\`https://\${host}/api/v1/jsonrpc\`, {
      method: 'POST',
      headers: {
        Authorization: \`Bearer \${accessToken}\`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        jsonrpc: '2.0',
        id: 1,
        method: 'transfer.check',
        params: {
          number: '9105205279986',
          service_code: 'V2S0016',
        },
      }),
    });
    const { result } = await response.json();
params:
  - name: number
    type: string
    required: true
    desc: "Karta raqami yoki qabul qiluvchining telefon raqami."
  - name: service_code
    type: string
    required: true
    desc: "Noyob xizmat kodi."
---

Transfer boshlashdan **oldin** karta yoki telefon raqami haqidagi
ma'lumotni oladi. Bu metod **hech qanday validatsiya qilmaydi** — u
faqat berilgan raqam haqida mavjud ma'lumotni qaytaradi.

## Bu metod nima uchun kerak

- Karta egasining ismini yoki telefon egasini olish
- Foydalanuvchiga maskalangan karta/telefon raqamini ko'rsatish
- Raqamga bog'liq hisob ma'lumotlarini ko'rsatish
- Olingan ma'lumot bilan transfer formasini oldindan to'ldirish

Ushbu metod hech qanday validatsiya yoki tranzaksiya qayta ishlashni
amalga oshirmaydi — u faqat berilgan xizmat kontekstida raqam haqida
ma'lumot beruvchi (informational) qiymat qaytaradi.

## Javob maydonlari

| Maydon | Turi | Tavsif |
|---|---|---|
| \`number\` | string | Karta yoki telefon raqami |
| \`owner\` | string \\| null | To'liq ism (agar mavjud bo'lsa) |
| \`is_corporate\` | boolean | Karta turi — korporativmi yoki yo'q |
| \`state\` | integer | Karta holati |
| \`bank\` | string | Kartaga tegishli bank nomi |

## Namuna javob

\`\`\`json
{
  "jsonrpc": "2.0",
  "result": {
    "number": "902333614",
    "owner": null,
    "is_corporate": false,
    "state": 0,
    "bank": "МАХМУДЧОН А. М."
  },
  "id": 1,
  "status": true,
  "origin": "transfer.check"
}
\`\`\`
`,pk=`---
title: Transfer Confirm
order: 21
rpcMethod: transfer.confirm
codeExamples:
  curl: |
    curl --location 'https://{{host}}/api/v1/jsonrpc' \\
      --header 'Authorization: Bearer {{access_token}}' \\
      --header 'Content-Type: application/json' \\
      --data '{
        "jsonrpc": "2.0",
        "id": "{{$randomUUID}}",
        "method": "transfer.confirm",
        "params": {
          "ext_id": "{{ext_id}}"
        }
      }'
  node: |
    const response = await fetch(\`https://\${host}/api/v1/jsonrpc\`, {
      method: 'POST',
      headers: {
        Authorization: \`Bearer \${accessToken}\`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        jsonrpc: '2.0',
        id: crypto.randomUUID(),
        method: 'transfer.confirm',
        params: { ext_id: extId },
      }),
    });
    const { result } = await response.json();
params:
  - name: ext_id
    type: string
    required: true
    desc: "transfer.create'da ishlatilgan tashqi operatsiya identifikatori."
---

\`transfer.confirm\` avval yaratilgan o'tkazmani yakunlaydi va
tasdiqlaydi. Bu metod mijoz tasdiqlash bosqichini (masalan, 3-D
Secure yoki tashqi to'lov sahifasi) muvaffaqiyatli tugatgandan
**keyin** chaqirilishi kerak.

Tasdiqlangandan so'ng, tizim o'tkazmani qayta ishlaydi va yakuniy
holatni yangilaydi.

## Qachon ishlatiladi

\`transfer.confirm\`ni faqat quyidagi holatda chaqiring:

- \`transfer.create\` \`state = 0\` (Created) qaytargan bo'lsa

Bu metod chekni tasdiqlaydi va mijoz kartasidan mablag'ni yechadi.

## Namuna javob

Javob tuzilishi \`transfer.create\` javobi bilan bir xil:

\`\`\`json
{
  "jsonrpc": "2.0",
  "result": {
    "ext_id": "kg_test_104",
    "state": 4,
    "description": "Success",
    "amount": 10000,
    "currency": "643",
    "commission": 0,
    "cr_amount": 1172,
    "cr_currency": "972",
    "form_url": null,
    "account": [
      {
        "name": "card",
        "title": { "en": "Card of a receiver" },
        "number": "505827******0789"
      },
      { "name": "owner", "title": { "en": "Receiver" }, "value": null }
    ],
    "payment": {
      "ref_num": "UO-MT-C-012026091545-3ba5df06-54eb-4",
      "id": null
    }
  },
  "id": 1,
  "status": true,
  "origin": "transfer.confirm"
}
\`\`\`

\`state: 4\` — bu operatsiya muvaffaqiyatli yakunlanganini bildiradi
([holatlar jadvali](/docs/transfer-state)ga qarang).
`,hk=`---
title: Transfer create — Korea
order: 19
rpcMethod: transfer.create
codeExamples:
  curl: |
    curl --location 'https://{{host}}/api/v1/jsonrpc' \\
      --header 'Authorization: Bearer {{access_token}}' \\
      --header 'Content-Type: application/json' \\
      --data '{
        "jsonrpc": "2.0",
        "id": 1,
        "method": "transfer.create",
        "params": {
          "ext_id": "korea_test_11",
          "amount": 4100000,
          "currency": "860",
          "service_code": "V2S0016",
          "sender_id": 1,
          "fields": {
            "account": "91052****9986",
            "receiver_phone": "+821034010805",
            "receiver_first_name": "Shahzoda",
            "receiver_last_name": "Mamajonova",
            "relation": "11263",
            "source_of_fund": "11045",
            "id_type": "8008",
            "bank": "037",
            "transfer_reason": "11109"
          }
        }
      }'
params:
  - name: fields.account
    type: string
    required: true
    desc: "Qabul qiluvchining hisob raqami."
  - name: fields.receiver_phone
    type: string
    required: true
    desc: "Qabul qiluvchining telefon raqami."
  - name: fields.receiver_first_name
    type: string
    required: true
    desc: "Qabul qiluvchining ismi."
  - name: fields.receiver_last_name
    type: string
    required: true
    desc: "Qabul qiluvchining familiyasi."
  - name: fields.relation
    type: string
    required: true
    desc: "Jo'natuvchi va qabul qiluvchi orasidagi munosabat kodi."
  - name: fields.source_of_fund
    type: string
    required: true
    desc: "Mablag' manbai kodi."
  - name: fields.id_type
    type: string
    required: true
    desc: "Hujjat turi kodi."
  - name: fields.bank
    type: string
    required: true
    desc: "Bank kodi."
  - name: fields.transfer_reason
    type: string
    required: true
    desc: "O'tkazma sababi kodi."
---

Janubiy Koreya banklariga pul o'tkazish — eng ko'p tartibga solingan
(compliance) xizmat turlaridan biri, chunki mablag' manbai, hujjat
turi va o'tkazma sababi kabi qo'shimcha kodlar talab qilinadi.

Umumiy so'rov parametrlari [Transfer create](/docs/transfer-create)
sahifasida tavsiflangan. \`relation\`, \`source_of_fund\`, \`id_type\` va
\`transfer_reason\` kodlarining to'liq ro'yxatini hamkorlik shartnomasi
doirasida so'rang.

## Namuna javob

\`\`\`json
{
  "jsonrpc": "2.0",
  "result": {
    "ext_id": "korea_test_111",
    "state": 0,
    "description": "Created",
    "amount": 4100000,
    "currency": "860",
    "rate": null,
    "commission": 0,
    "cr_amount": 521678,
    "cr_currency": "KRW",
    "form_url": null,
    "account": [
      {
        "name": "card",
        "title": { "en": "Card of a receiver" },
        "number": "910520******9986"
      },
      { "name": "owner", "title": { "en": "Receiver" }, "value": null }
    ],
    "payment": {
      "ref_num": "UO-MT-C-060826090205-34addaf5-ed65-4",
      "id": null
    }
  },
  "id": 1,
  "status": true,
  "origin": "transfer.create"
}
\`\`\`
`,mk=`---
title: Transfer create — MTS to Card
order: 16
rpcMethod: transfer.create
codeExamples:
  curl: |
    curl --location 'https://{{host}}/api/v1/jsonrpc' \\
      --header 'Authorization: Bearer {{access_token}}' \\
      --header 'Content-Type: application/json' \\
      --data '{
        "jsonrpc": "2.0",
        "id": 1,
        "method": "transfer.create",
        "params": {
          "ext_id": "mts_to_card_test_100",
          "amount": 10000,
          "currency": "643",
          "service_code": "V2S0011",
          "sender_id": 1,
          "fields": {
            "account": "22041201****1238",
            "sender_card": "56146810****4552"
          }
        }
      }'
params:
  - name: fields.account
    type: string
    required: true
    desc: "Qabul qiluvchining karta raqami."
  - name: fields.sender_card
    type: string
    required: true
    desc: "Jo'natuvchining karta raqami."
---

MTS orqali kartaga pul o'tkazish. Boshqa xizmatlardan farqli
o'laroq, bu yerda \`fields\` ichida **jo'natuvchi kartasi**
(\`sender_card\`) ham ko'rsatiladi.

Umumiy so'rov parametrlari [Transfer create](/docs/transfer-create)
sahifasida tavsiflangan.

## Namuna javob

\`\`\`json
{
  "jsonrpc": "2.0",
  "result": {
    "ext_id": "mts_to_card_test_100",
    "state": 0,
    "description": "Created",
    "amount": 10000,
    "currency": "643",
    "rate": null,
    "commission": 0,
    "cr_amount": null,
    "cr_currency": null,
    "form_url": null,
    "account": [
      {
        "name": "card",
        "title": { "en": "Card of a receiver" },
        "number": "220412******1238"
      },
      { "name": "owner", "title": { "en": "Receiver" }, "value": null }
    ],
    "payment": {
      "ref_num": "UO-MT-C-060426180701-497d7c40-bafa-4",
      "id": null
    }
  },
  "id": 1,
  "status": true,
  "origin": "transfer.create"
}
\`\`\`
`,gk=`---
title: Transfer create — RF MTS
order: 12
rpcMethod: transfer.create
codeExamples:
  curl: |
    curl --location 'https://{{host}}/api/v1/jsonrpc' \\
      --header 'Authorization: Bearer {{access_token}}' \\
      --header 'Content-Type: application/json' \\
      --data '{
        "jsonrpc": "2.0",
        "id": 1,
        "method": "transfer.create",
        "params": {
          "ext_id": "kg_test_1000",
          "amount": 100000,
          "currency": "643",
          "service_code": "V2S0008",
          "sender_id": 1,
          "fields": {
            "receiver_description": "6117128"
          }
        }
      }'
params:
  - name: fields.receiver_description
    type: string
    required: true
    desc: "Qabul qiluvchining tavsifi (MTS bank tizimidagi identifikator)."
---

Rossiya **MTS Bank** orqali pul o'tkazish uchun ishlatiladi. Javobda
qo'shimcha \`banks\` maydoni qaytadi — bu foydalanuvchiga tegishli
bank ro'yxatini ko'rsatish uchun ishlatiladi.

Umumiy so'rov parametrlari [Transfer create](/docs/transfer-create)
sahifasida tavsiflangan.

## Qo'shimcha javob maydoni

| Maydon | Turi | Tavsif |
|---|---|---|
| \`banks\` | array | RF MTS uchun mavjud banklar kodi va nomi ro'yxati |

## Namuna javob

\`\`\`json
{
  "jsonrpc": "2.0",
  "result": {
    "ext_id": "kg_test_1000",
    "state": 0,
    "description": "Created",
    "amount": 100000,
    "currency": "643",
    "rate": null,
    "commission": 900,
    "cr_amount": null,
    "cr_currency": null,
    "form_url": "https://qr.nspk.ru/AD10005D4LQJ1S5N8K88D9P2LQLN7L7V",
    "account": [
      { "name": "card", "title": { "en": "Card of a receiver" }, "number": "" },
      { "name": "owner", "title": { "en": "Receiver" }, "value": null }
    ],
    "payment": {
      "ref_num": "UO-MT-C-060426160330-41552c75-c708-4",
      "id": null
    },
    "banks": [
      { "code": "bank100000000266", "name": "банк Элита" },
      { "code": "bank100000000055", "name": "Банк Йошкар-Ола" }
    ]
  },
  "id": 1,
  "status": true,
  "origin": "transfer.create"
}
\`\`\`

Bu xizmatda \`form_url\` qaytishi mumkin — foydalanuvchi to'lovni
yakunlash uchun shu URL orqali qo'shimcha sahifaga yo'naltiriladi
(masalan, QR-kod orqali to'lov).
`,yk=`---
title: Transfer create — RF TCB
order: 14
rpcMethod: transfer.create
codeExamples:
  curl: |
    curl --location 'https://{{host}}/api/v1/jsonrpc' \\
      --header 'Authorization: Bearer {{access_token}}' \\
      --header 'Content-Type: application/json' \\
      --data '{
        "jsonrpc": "2.0",
        "id": 1,
        "method": "transfer.create",
        "params": {
          "ext_id": "kg_test_200",
          "amount": 10000,
          "currency": "643",
          "service_code": "V2S0006",
          "sender_id": 1,
          "fields": {
            "card_number": "5058********0789"
          }
        }
      }'
params:
  - name: fields.card_number
    type: string
    required: true
    desc: "Qabul qiluvchining karta raqami."
---

Rossiya **TCB Bank** kartalariga pul o'tkazish uchun ishlatiladi.
Javobda \`form_url\` orqali qo'shimcha to'lov sahifasiga havola
qaytishi mumkin.

Umumiy so'rov parametrlari [Transfer create](/docs/transfer-create)
sahifasida tavsiflangan.

## Namuna javob

\`\`\`json
{
  "jsonrpc": "2.0",
  "result": {
    "ext_id": "kg_test_200",
    "state": 0,
    "description": "Created",
    "amount": 10000,
    "currency": "643",
    "rate": null,
    "commission": 100,
    "cr_amount": null,
    "cr_currency": null,
    "form_url": "https://pay.tkbbank.ru/frm/XTQCQQE",
    "account": [
      { "name": "card", "title": { "en": "Card of a receiver" }, "number": "" },
      { "name": "owner", "title": { "en": "Receiver" }, "value": null }
    ],
    "payment": {
      "ref_num": "UO-MT-C-060426170513-98e5e174-cbda-4",
      "id": null
    }
  },
  "id": 1,
  "status": true,
  "origin": "transfer.create"
}
\`\`\`
`,vk=`---
title: Transfer create — Top-up RF banks card
order: 20
rpcMethod: transfer.create
codeExamples:
  curl: |
    curl --location 'https://{{host}}/api/v1/jsonrpc' \\
      --header 'Authorization: Bearer {{access_token}}' \\
      --header 'Content-Type: application/json' \\
      --data '{
        "jsonrpc": "2.0",
        "id": 1,
        "method": "transfer.create",
        "params": {
          "ext_id": "rf_account_to_card_test_113",
          "amount": 10000,
          "currency": "643",
          "service_code": "V2S0025",
          "sender_id": 1,
          "fields": {
            "account": "6214860010049357",
            "sender_card": "1234567890098765",
            "type": "sbp",
            "member_id": "bank member id"
          }
        }
      }'
params:
  - name: fields.account
    type: string
    required: true
    desc: "Qabul qiluvchining karta raqami."
  - name: fields.sender_card
    type: string
    required: true
    desc: "Jo'natuvchining karta raqami."
  - name: fields.member_id
    type: string
    required: true
    desc: "Bankning member_id identifikatori."
  - name: fields.type
    type: string
    required: true
    desc: "O'tkazma turi — \\"sbp\\" (Tezkor to'lovlar tizimi) yoki \\"card\\"."
---

Rossiya banklari kartalarini **SBP** (Система быстрых платежей) yoki
to'g'ridan-to'g'ri karta orqali to'ldirish uchun ishlatiladi.

Umumiy so'rov parametrlari [Transfer create](/docs/transfer-create)
sahifasida tavsiflangan.

## Namuna javob

\`\`\`json
{
  "jsonrpc": "2.0",
  "result": {
    "ext_id": "rf_account_to_card_test_113",
    "state": 0,
    "description": "Created",
    "amount": 133,
    "currency": "840",
    "rate": 74.98,
    "commission": 0,
    "cr_amount": 900,
    "cr_currency": "156",
    "form_url": null,
    "account": [
      {
        "name": "card",
        "title": { "en": "Card of a receiver" },
        "number": "621486******9357"
      },
      { "name": "owner", "title": { "en": "Receiver" }, "value": null }
    ],
    "payment": {
      "ref_num": "UO-MT-C-060826090931-b532322f-75d2-4",
      "id": null
    }
  },
  "id": 1,
  "status": true,
  "origin": "transfer.create"
}
\`\`\`
`,kk=`---
title: Transfer create — Turkey
order: 13
rpcMethod: transfer.create
codeExamples:
  curl: |
    curl --location 'https://{{host}}/api/v1/jsonrpc' \\
      --header 'Authorization: Bearer {{access_token}}' \\
      --header 'Content-Type: application/json' \\
      --data '{
        "jsonrpc": "2.0",
        "id": 1,
        "method": "transfer.create",
        "params": {
          "ext_id": "turkey_test_116",
          "amount": 1000000,
          "currency": "860",
          "service_code": "V2S0001",
          "sender_id": 1,
          "fields": {
            "nationality": "RUS",
            "receiver_phone": "+79011234567",
            "receiver_last_name": "GULSOY",
            "receiver_first_name": "BERAT",
            "email": "ayozo9900@gmail.com",
            "country_phone_code": "+7",
            "tr_type": "Transfer2IBAN",
            "reason": "HOME_RENT",
            "account": "TR600001200967400001041414"
          }
        }
      }'
params:
  - name: fields.nationality
    type: string
    required: true
    desc: "Qabul qiluvchining millati."
  - name: fields.receiver_phone
    type: string
    required: true
    desc: "Qabul qiluvchining telefon raqami."
  - name: fields.receiver_last_name
    type: string
    required: true
    desc: "Qabul qiluvchining familiyasi."
  - name: fields.receiver_first_name
    type: string
    required: true
    desc: "Qabul qiluvchining ismi."
  - name: fields.email
    type: string
    required: true
    desc: "Qabul qiluvchining email manzili."
  - name: fields.country_phone_code
    type: string
    required: true
    desc: "Qabul qiluvchi davlatining telefon kodi (masalan, +7)."
  - name: fields.tr_type
    type: string
    required: true
    desc: "O'tkazma turi (masalan, \\"Transfer2IBAN\\")."
  - name: fields.reason
    type: string
    required: true
    desc: "Tranzaksiya sababi (masalan, \\"HOME_RENT\\")."
  - name: fields.account
    type: string
    required: true
    desc: "Qabul qiluvchining IBAN raqami."
---

Turkiya bank hisoblariga **IBAN** orqali pul o'tkazish uchun
ishlatiladi. Bu eng ko'p maydon talab qiladigan xizmat turlaridan
biri, chunki xalqaro o'tkazma qoidalari qabul qiluvchi haqida
to'liq ma'lumotni talab qiladi.

Umumiy so'rov parametrlari [Transfer create](/docs/transfer-create)
sahifasida tavsiflangan.

## Namuna javob

\`\`\`json
{
  "jsonrpc": "2.0",
  "result": {
    "ext_id": "turkey_test_116",
    "state": 0,
    "description": "Created",
    "amount": 1000000,
    "currency": "860",
    "rate": null,
    "commission": 0,
    "cr_amount": 3797,
    "cr_currency": "949",
    "form_url": null,
    "account": [
      {
        "name": "card",
        "title": { "en": "Card of a receiver" },
        "number": "TR6000******1414"
      },
      { "name": "owner", "title": { "en": "Receiver" }, "value": null }
    ],
    "payment": {
      "ref_num": "UO-MT-C-060426165052-4c6da94d-bacc-4",
      "id": null
    }
  },
  "id": 1,
  "status": true,
  "origin": "transfer.create"
}
\`\`\`

\`cr_currency: "949"\` — Turk lirasi (TRY) uchun ISO 4217 raqamli kodi.
`,xk=`---
title: Transfer create — UnionPay
order: 10
rpcMethod: transfer.create
codeExamples:
  curl: |
    curl --location 'https://{{host}}/api/v1/jsonrpc' \\
      --header 'Authorization: Bearer {{access_token}}' \\
      --header 'Content-Type: application/json' \\
      --data '{
        "jsonrpc": "2.0",
        "id": 1,
        "method": "transfer.create",
        "params": {
          "ext_id": "union_test_113",
          "amount": 10000,
          "currency": "643",
          "service_code": "V2S0017",
          "sender_id": 1,
          "fields": {
            "account": "6214860010049357",
            "receiver_full_name": "LIAN JIE",
            "is_same_person": false,
            "nationality": "UZB",
            "permanent_address": "chortoq Muchum 9",
            "permanent_city": "Namangan"
          }
        }
      }'
params:
  - name: fields.account
    type: string
    required: true
    desc: "Qabul qiluvchining karta raqami."
  - name: fields.receiver_full_name
    type: string
    required: true
    desc: "Qabul qiluvchining rasmiy hujjatlardagi to'liq ismi."
  - name: fields.is_same_person
    type: boolean
    required: true
    desc: "Jo'natuvchi va qabul qiluvchi bir xil shaxsmi."
  - name: fields.nationality
    type: string
    required: true
    desc: "Qabul qiluvchining 3 harfli ISO davlat kodidagi millati (masalan, UZB)."
  - name: fields.permanent_address
    type: string
    required: true
    desc: "Qabul qiluvchining doimiy yashash manzili."
  - name: fields.permanent_city
    type: string
    required: true
    desc: "Qabul qiluvchining doimiy yashash shahri."
---

**UnionPay** kartalariga pul o'tkazish uchun \`transfer.create\` shu
\`fields\` to'plami bilan chaqiriladi.

Umumiy so'rov parametrlari [Transfer create](/docs/transfer-create)
sahifasida tavsiflangan.

## Namuna javob

\`\`\`json
{
  "jsonrpc": "2.0",
  "result": {
    "ext_id": "union_test_113",
    "state": 0,
    "description": "Created",
    "amount": 133,
    "currency": "840",
    "rate": 74.98,
    "commission": 0,
    "cr_amount": 900,
    "cr_currency": "156",
    "form_url": null,
    "account": [
      {
        "name": "card",
        "title": { "en": "Card of a receiver" },
        "number": "621486******9357"
      },
      { "name": "owner", "title": { "en": "Receiver" }, "value": null }
    ],
    "payment": {
      "ref_num": "UO-MT-C-060826090931-b532322f-75d2-4",
      "id": null
    }
  },
  "id": 1,
  "status": true,
  "origin": "transfer.create"
}
\`\`\`
`,wk=`---
title: Transfer create — Uzcard / Humo A2C
order: 11
rpcMethod: transfer.create
codeExamples:
  curl: |
    curl --location 'https://{{host}}/api/v1/jsonrpc' \\
      --header 'Authorization: Bearer {{access_token}}' \\
      --header 'Content-Type: application/json' \\
      --data '{
        "jsonrpc": "2.0",
        "id": 1,
        "method": "transfer.create",
        "params": {
          "ext_id": "humo_to_card_test_113",
          "amount": 100,
          "currency": "860",
          "service_code": "V2S0003",
          "sender_id": 1,
          "fields": {
            "account": "9860********6810"
          }
        }
      }'
  node: |
    // Uzcard uchun service_code: V2S0005, account maydoni bir xil
    {
      "ext_id": "uzcard_to_card_test_126789",
      "amount": 100,
      "currency": "643",
      "service_code": "V2S0005",
      "sender_id": 1,
      "fields": { "account": "5614681079954552" }
    }
params:
  - name: fields.account
    type: string
    required: true
    desc: "Qabul qiluvchining Uzcard yoki Humo karta raqami."
---

Hisobdan (Account) to'g'ridan-to'g'ri **Uzcard** yoki **Humo**
kartasiga pul o'tkazish uchun ishlatiladi. Ikkalasi ham bir xil
tuzilishga ega — faqat \`service_code\` va valyuta farq qiladi:

| Karta tizimi | \`service_code\` | \`currency\` |
|---|---|---|
| Humo | \`V2S0003\` | \`860\` (UZS) |
| Uzcard | \`V2S0005\` | \`643\` |

Umumiy so'rov parametrlari [Transfer create](/docs/transfer-create)
sahifasida tavsiflangan.

## Namuna javob

\`\`\`json
{
  "jsonrpc": "2.0",
  "result": {
    "ext_id": "humo_to_card_test_113",
    "state": 0,
    "description": "Created",
    "amount": 100,
    "currency": "860",
    "rate": null,
    "commission": 0,
    "cr_amount": null,
    "cr_currency": null,
    "form_url": null,
    "account": [
      {
        "name": "card",
        "title": { "en": "Card of a receiver" },
        "number": "986017******6810"
      },
      {
        "name": "owner",
        "title": { "en": "Receiver" },
        "value": "IBROKHIM U."
      }
    ],
    "payment": {
      "ref_num": "UO-MT-C-060426144425-fb7817f7-af4a-4",
      "id": null
    }
  },
  "id": 1,
  "status": true,
  "origin": "transfer.create"
}
\`\`\`

Muvaffaqiyatli operatsiyalarda \`owner\` maydonida qabul qiluvchining
ismi (masalan, \`"IBROKHIM U."\`) qaytishi mumkin.
`,_k=`---
title: Transfer create — Uzcard payment
order: 15
rpcMethod: transfer.create
codeExamples:
  curl: |
    curl --location 'https://{{host}}/api/v1/jsonrpc' \\
      --header 'Authorization: Bearer {{access_token}}' \\
      --header 'Content-Type: application/json' \\
      --data '{
        "jsonrpc": "2.0",
        "id": 1,
        "method": "transfer.create",
        "params": {
          "ext_id": "uzcard_test_118",
          "amount": 100000,
          "currency": "860",
          "service_code": "V2S0009",
          "sender_id": 1,
          "fields": {
            "card_number": "56146810****4552",
            "expire": "1226",
            "receiver_id": "935989900"
          }
        }
      }'
params:
  - name: fields.card_number
    type: string
    required: true
    desc: "Kartaning raqami."
  - name: fields.expire
    type: string
    required: true
    desc: "Karta amal qilish muddati (MMYY formatida)."
  - name: fields.receiver_id
    type: string
    required: true
    desc: "Qabul qiluvchining identifikatori (masalan, telefon raqami)."
---

**Uzcard** kartasidan OTP tasdiqlash orqali pul yechish (debit)
operatsiyasi. Bu xizmat kartaning amal qilish muddatini (\`expire\`)
ham talab qiladi — bu 3-D Secure yoki OTP tekshiruvi uchun kerak.

Umumiy so'rov parametrlari [Transfer create](/docs/transfer-create)
sahifasida tavsiflangan.

## Namuna javob

\`\`\`json
{
  "jsonrpc": "2.0",
  "result": {
    "ext_id": "uzcard_test_118",
    "state": 33,
    "description": "insufficient funds!",
    "amount": 100000,
    "currency": "860",
    "rate": null,
    "commission": 1000,
    "cr_amount": null,
    "cr_currency": null,
    "form_url": null,
    "account": [
      { "name": "card", "title": { "en": "Card of a receiver" }, "number": "" },
      { "name": "owner", "title": { "en": "Receiver" }, "value": null }
    ],
    "payment": {
      "ref_num": "UO-MT-C-060426172527-2c6c307e-fa76-4",
      "id": null
    }
  },
  "id": 1,
  "status": true,
  "origin": "transfer.create"
}
\`\`\`

> Bu namunada \`state: 33\` — xatolik holati (\`transaction error\`,
> masalan mablag' yetarli emasligi). Barcha holat kodlari
> [Transfer State](/docs/transfer-state) sahifasida keltirilgan.
`,Sk=`---
title: Transfer create — Visa Direct
order: 9
rpcMethod: transfer.create
codeExamples:
  curl: |
    curl --location 'https://{{host}}/api/v1/jsonrpc' \\
      --header 'Authorization: Bearer {{access_token}}' \\
      --header 'Content-Type: application/json' \\
      --data '{
        "jsonrpc": "2.0",
        "id": 1,
        "method": "transfer.create",
        "params": {
          "ext_id": "visa_test_8",
          "amount": 100,
          "currency": "840",
          "service_code": "V2S0010",
          "sender_id": 1,
          "fields": {
            "account": "4934********3509",
            "first_name": "Sanjar",
            "last_name": "Mahmudjanov"
          }
        }
      }'
params:
  - name: fields.account
    type: string
    required: true
    desc: "Qabul qiluvchining karta yoki telefon raqami."
  - name: fields.first_name
    type: string
    required: true
    desc: "Qabul qiluvchining ismi."
  - name: fields.last_name
    type: string
    required: true
    desc: "Qabul qiluvchining familiyasi."
---

**Visa Direct** xizmati orqali Visa kartalariga pul yuborish uchun
\`transfer.create\` shu \`fields\` to'plami bilan chaqiriladi.

Umumiy so'rov parametrlari (\`ext_id\`, \`amount\`, \`currency\`,
\`service_code\`, \`sender_id\`) [Transfer create](/docs/transfer-create)
sahifasida tavsiflangan — bu yerda faqat Visa Direct'ga xos
\`fields\` ko'rsatilgan.

## Namuna javob

\`\`\`json
{
  "jsonrpc": "2.0",
  "result": {
    "ext_id": "visa_test_111",
    "state": 0,
    "description": "Новый",
    "amount": 100,
    "currency": "840",
    "rate": null,
    "commission": 0,
    "cr_amount": 100,
    "cr_currency": "840",
    "form_url": null,
    "account": [
      {
        "name": "card",
        "title": { "en": "Card of a receiver" },
        "number": "493453******3509"
      },
      { "name": "owner", "title": { "en": "Receiver" }, "value": null }
    ],
    "payment": {
      "ref_num": "UO-MT-C-060426124514-d83b4c2e-ccd5-4",
      "id": null
    }
  },
  "id": 1,
  "status": true,
  "origin": "transfer.create"
}
\`\`\`

Qolgan javob maydonlari (\`rate\`, \`commission\`, \`payment\`, \`merchant\`
va h.k.) [Transfer create](/docs/transfer-create) sahifasidagi bilan
bir xil formatda.
`,Ck=`---
title: Transfer create — Wallet payment
order: 18
rpcMethod: transfer.create
codeExamples:
  curl: |
    curl --location 'https://{{host}}/api/v1/jsonrpc' \\
      --header 'Authorization: Bearer {{access_token}}' \\
      --header 'Content-Type: application/json' \\
      --data '{
        "jsonrpc": "2.0",
        "id": 1,
        "method": "transfer.create",
        "params": {
          "ext_id": "wallet_payment_test_11",
          "amount": 10000,
          "currency": "860",
          "service_code": "V2S0015",
          "sender_id": 1,
          "fields": {
            "wallet_id": "BC854CF305D441B6B3DF822F306*****"
          }
        }
      }'
params:
  - name: fields.wallet_id
    type: string
    required: true
    desc: "To'lov qilinadigan hamyon (wallet) identifikatori."
---

Elektron hamyondan (**Ucoin wallet**) mablag' yechish/to'lov
operatsiyasi.

Umumiy so'rov parametrlari [Transfer create](/docs/transfer-create)
sahifasida tavsiflangan.

## Namuna javob

\`\`\`json
{
  "jsonrpc": "2.0",
  "result": {
    "ext_id": "wallet_payment_test_11",
    "state": 0,
    "description": "Created",
    "amount": 10000,
    "currency": "860",
    "rate": null,
    "commission": 0,
    "cr_amount": null,
    "cr_currency": null,
    "form_url": null,
    "account": [
      { "name": "card", "title": { "en": "Card of a receiver" }, "number": "" },
      { "name": "owner", "title": { "en": "Receiver" }, "value": null }
    ],
    "payment": {
      "ref_num": "UO-MT-C-060426181859-42aa824d-47d2-4",
      "id": null
    }
  },
  "id": 1,
  "status": true,
  "origin": "transfer.create"
}
\`\`\`
`,bk=`---
title: Transfer create — Wallet to Card
order: 17
rpcMethod: transfer.create
codeExamples:
  curl: |
    curl --location 'https://{{host}}/api/v1/jsonrpc' \\
      --header 'Authorization: Bearer {{access_token}}' \\
      --header 'Content-Type: application/json' \\
      --data '{
        "jsonrpc": "2.0",
        "id": 1,
        "method": "transfer.create",
        "params": {
          "ext_id": "wallet_test_71",
          "amount": 10000,
          "currency": "860",
          "service_code": "V2S0014",
          "sender_id": 1,
          "fields": {
            "wallet_id": "BC854CF305D441B6B3DF822F30******",
            "debit_ext_id": "5614681012344552"
          }
        }
      }'
params:
  - name: fields.wallet_id
    type: string
    required: true
    desc: "Qabul qiluvchining hamyon (wallet) identifikatori."
  - name: fields.debit_ext_id
    type: string
    required: true
    desc: "Debit operatsiyasining tashqi identifikatori."
---

Elektron hamyondan (**Ucoin wallet**) kartaga pul o'tkazish uchun
ishlatiladi.

Umumiy so'rov parametrlari [Transfer create](/docs/transfer-create)
sahifasida tavsiflangan.

## Namuna javob

\`\`\`json
{
  "jsonrpc": "2.0",
  "result": {
    "ext_id": "wallet_test_71",
    "state": 33,
    "description": "insufficient funds!",
    "amount": 100000,
    "currency": "860",
    "rate": null,
    "commission": 1000,
    "cr_amount": null,
    "cr_currency": null,
    "form_url": null,
    "account": [
      { "name": "card", "title": { "en": "Card of a receiver" }, "number": "" },
      { "name": "owner", "title": { "en": "Receiver" }, "value": null }
    ],
    "payment": {
      "ref_num": "UO-MT-C-060426172527-2c6c307e-fa76-4",
      "id": null
    }
  },
  "id": 1,
  "status": true,
  "origin": "transfer.create"
}
\`\`\`
`,Ek=`---
title: Transfer create
order: 8
rpcMethod: transfer.create
codeExamples:
  curl: |
    curl --location 'https://{{host}}/api/v1/jsonrpc' \\
      --header 'Authorization: Bearer {{access_token}}' \\
      --header 'Content-Type: application/json' \\
      --data '{
        "jsonrpc": "2.0",
        "id": "{{$randomUUID}}",
        "method": "transfer.create",
        "params": {
          "ext_id": "{{ext_id}}",
          "amount": 1000000,
          "currency": "643",
          "service_code": "V2S0006",
          "sender_id": 1,
          "fields": {
            "to_card_number": "5058***0320789",
            "ref_id": "123345678"
          }
        }
      }'
  node: |
    const response = await fetch(\`https://\${host}/api/v1/jsonrpc\`, {
      method: 'POST',
      headers: {
        Authorization: \`Bearer \${accessToken}\`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        jsonrpc: '2.0',
        id: crypto.randomUUID(),
        method: 'transfer.create',
        params: {
          ext_id: extId,
          amount: 1000000,
          currency: '643',
          service_code: 'V2S0006',
          sender_id: 1,
          fields: {
            to_card_number: '5058***0320789',
            ref_id: '123345678',
          },
        },
      }),
    });
    const { result } = await response.json();
params:
  - name: ext_id
    type: string
    required: true
    desc: "Sizning tizimingizdagi operatsiyaning noyob tashqi identifikatori."
  - name: amount
    type: integer
    required: true
    desc: "O'tkazma summasi (eng kichik valyuta birligida — tiyin/kopekda)."
  - name: currency
    type: string
    required: true
    desc: "ISO 4217 valyuta kodi."
  - name: service_code
    type: string
    required: true
    desc: "services yoki countries.list javobidan olingan xizmat kodi."
  - name: sender_id
    type: integer
    required: true
    desc: "sender.create metodidan qaytgan jo'natuvchi identifikatori."
  - name: fields
    type: object
    required: true
    desc: "Tanlangan xizmatga xos maydonlar (pastga qarang)."
---

\`transfer.create\` tanlangan xizmat uchun pul o'tkazmasi yoki to'lov
operatsiyasini yaratadi. Har bir xizmat turlicha input maydonlarini
talab qilishi mumkin — majburiy va ixtiyoriy maydonlar \`services\`
metodi javobidan dinamik ravishda olinishi kerak.

> ⚠️ **Muhim qoida:** \`fields\` obyekti faqat tanlangan xizmatda
> aniqlangan parametrlarni o'z ichiga olishi kerak. \`services\`
> javobidagi har bir maydon \`name\` atributiga ega — aynan shu
> qiymatlar \`transfer.create\`dagi \`params.fields\` ichida kalit
> sifatida ishlatilishi kerak.

## Ikki bosqichli jarayon

**1-qadam: Xizmat maydonlarini olish**

\`\`\`json
{
  "jsonrpc": "2.0",
  "id": 1,
  "method": "services",
  "params": { "provider_id": 8 }
}
\`\`\`

Javobdagi \`fields\` massivi qanday maydonlar kerakligini ko'rsatadi:

\`\`\`json
{
  "fields": [
    { "name": "to_card_number", "is_required": true },
    { "name": "ref_id", "is_required": false }
  ]
}
\`\`\`

**2-qadam: Shu maydonlar bilan transfer yaratish** — yuqoridagi kod
namunasidagi so'rovni yuboring.

## Javob maydonlari

| Maydon | Turi | Tavsif |
|---|---|---|
| \`ext_id\` | string | Operatsiyaning tashqi identifikatori |
| \`state\` | integer | Operatsiya holati ([holatlar jadvali](/docs/transfer-state)ga qarang) |
| \`description\` | string | Holat tavsifi |
| \`amount\` | integer | Summa (tiyin aniqligida) |
| \`currency\` | string | Kredit valyutasi |
| \`commission\` | float | Hisoblangan komissiya |
| \`cr_amount\` / \`cr_currency\` | integer / string | Qabul qiluvchi valyutasidagi summa va kodi |
| \`form_url\` | string \\| null | Qo'shimcha to'lov formasi uchun URL (ba'zi xizmatlarda) |
| \`account\` | array | Qabul qiluvchi hisob ma'lumotlari |
| \`payment.ref_num\` | string | Protsessing markazidagi (Uzcard, Humo, Visa) mos yozuv identifikatori |
| \`id\` | string | Operatsiyaning to'lov identifikatori — RRN |

## Namuna javob

\`\`\`json
{
  "jsonrpc": "2.0",
  "result": {
    "ext_id": "kg_test_102",
    "state": 0,
    "description": "Created",
    "amount": 1000000,
    "currency": "643",
    "commission": 10000,
    "cr_amount": null,
    "cr_currency": null,
    "form_url": "https://online.transcapital.com/cdr/payment/A0SkPAE",
    "account": [
      {
        "name": "card",
        "title": { "en": "Card of a receiver" },
        "number": ""
      },
      {
        "name": "owner",
        "title": { "en": "Receiver" },
        "value": null
      }
    ],
    "payment": {
      "ref_num": "UO-MT-C-011926111635-33536be2-fdc5-4",
      "id": null
    },
    "merchant": {
      "organization": "Universal",
      "epos": { "merchant": "-", "terminal": "P23318112725ID", "account": "-" },
      "type": { "en": "Top-up card" }
    }
  },
  "id": 1,
  "status": true,
  "origin": "transfer.create"
}
\`\`\`

## Xizmat turiga xos variantlar

\`fields\` obyektining tarkibi tanlangan xizmatga qarab farq qiladi.
Quyida eng ko'p ishlatiladigan xizmat turlari uchun alohida
sahifalar — har birida o'ziga xos \`fields\` va namuna so'rov keltirilgan:

- [Visa Direct](/docs/transfer-create-visa-direct)
- [UnionPay](/docs/transfer-create-unionpay)
- [Uzcard / Humo A2C](/docs/transfer-create-uzcard-humo-a2c)
- [RF MTS](/docs/transfer-create-rf-mts)
- [Turkey](/docs/transfer-create-turkey)
- [RF TCB](/docs/transfer-create-rf-tcb)
- [Uzcard payment](/docs/transfer-create-uzcard-payment)
- [MTS to Card](/docs/transfer-create-mts-to-card)
- [Wallet to Card](/docs/transfer-create-wallet-to-card)
- [Wallet payment](/docs/transfer-create-wallet-payment)
- [Korea](/docs/transfer-create-korea)
- [Top-up RF banks card](/docs/transfer-create-topup-rf-banks)
`,Tk=`---
title: Transfer Service
order: 5
rpcMethod: transfer.service
codeExamples:
  curl: |
    curl --location 'https://{{host}}/api/v1/jsonrpc' \\
      --header 'Authorization: Bearer {{access_token}}' \\
      --header 'Content-Type: application/json' \\
      --data '{
        "jsonrpc": "2.0",
        "id": 1,
        "method": "transfer.service",
        "params": {
          "sender_codes": ["V2S0005"]
        }
      }'
  node: |
    const response = await fetch(\`https://\${host}/api/v1/jsonrpc\`, {
      method: 'POST',
      headers: {
        Authorization: \`Bearer \${accessToken}\`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        jsonrpc: '2.0',
        id: 1,
        method: 'transfer.service',
        params: { sender_codes: ['V2S0005'] },
      }),
    });
    const { result } = await response.json();
params:
  - name: sender_codes
    type: array
    required: true
    desc: "countries.list javobidan olingan service_code qiymatlari massivi."
---

\`transfer.service\` bir yoki bir nechta \`service_code\` bo'yicha
xizmatning to'liq konfiguratsiyasini qaytaradi. Transfer yaratishdan
oldin shu metod chaqirilib, qaysi maydonlar talab qilinishi, summa
chegaralari va qaysi valyuta ishlatilishi aniqlanadi.

Buni shunday tushuning: *"countries.list'dan olingan service_code'ni
menga bering, men esa transferni bajarish uchun to'ldirilishi kerak
bo'lgan hamma narsani aytib beraman."*

## Asosiy tushunchalar

- **\`sender_codes\`** — \`countries.list\`dan olingan service kodlar
  massivi. Javobda har bir xizmat uchun to'liq konfiguratsiya
  qaytadi: chegaralar, valyuta, kerakli input maydonlar.
- **\`fields\`** — foydalanuvchi transferni bajarishdan oldin
  to'ldirishi kerak bo'lgan maydonlar ro'yxati. Masalan, \`V2S0005\`
  (Uzcard to'ldirish) uchun qabul qiluvchining karta raqami yoki
  telefon raqami (\`account\`) kerak bo'ladi.
- **\`is_3ds\`** — xizmat 3-D Secure autentifikatsiyasini talab
  qilishini bildiradi. \`true\` bo'lsa, jo'natuvchi kartasi qo'shimcha
  tekshiruvdan o'tadi.
- **\`currency\`** — ISO 4217 raqamli formatdagi valyuta kodi. \`860\` —
  O'zbek so'mi (UZS).

## Javob maydonlari

| Maydon | Turi | Tavsif |
|---|---|---|
| \`id\` | integer | Ichki xizmat identifikatori |
| \`provider_id\` / \`provider\` | integer / string | Provayder identifikatori va nomi (masalan, \`"Uzcard"\`) |
| \`name_uz\` / \`name_ru\` / \`name_en\` | string | Xizmat nomi tillar bo'yicha |
| \`type\` | string | \`credit\` — kartaga pul yuborish, \`debit\` — kartadan pul yechish |
| \`min_amount\` / \`max_amount\` | integer | Eng kichik valyuta birligidagi (tiyin) chegaralar |
| \`currency\` | string | ISO 4217 raqamli valyuta kodi |
| \`code\` | string | \`sender_codes\`da uzatilgan qiymatga mos service kodi |
| \`is_3ds\` | boolean | 3-D Secure talab qilinishini bildiradi |
| \`fields\` | array | Transferdan oldin foydalanuvchidan olinadigan maydonlar |
| \`response_fields\` | array | Bajarilgandan keyin qaytadigan qo'shimcha maydonlar |

### \`fields\` massividagi har bir obyekt

| Maydon | Turi | Tavsif |
|---|---|---|
| \`name\` | string | Transferni yuborishda ishlatiladigan kalit (masalan, \`"account"\`) |
| \`label_uz\` / \`label_ru\` / \`label_en\` | string | Ko'rsatiladigan nom (tillar bo'yicha) |
| \`type\` | string | Kiritish turi (\`"string"\`, \`"number"\` va h.k.) |
| \`is_required\` | boolean | Majburiy to'ldirilishi kerakligini bildiradi |
| \`order\` | integer | UI'da ko'rsatilish tartibi — kichik son avval chiqadi |
| \`regex\` | string | Yuborishdan oldin mos kelishi kerak bo'lgan validatsiya shabloni |

## Namuna javob

\`\`\`json
{
  "jsonrpc": "2.0",
  "result": {
    "services": [
      {
        "id": 5,
        "provider_id": 5,
        "provider": "Uzcard",
        "name_en": "Uzcard Account to card",
        "type": "credit",
        "min_amount": 100000,
        "max_amount": 2000000000,
        "currency": "860",
        "code": "V2S0005",
        "is_3ds": false,
        "fields": [
          {
            "id": 30,
            "name": "account",
            "label_en": "recipient card or phone number",
            "type": "string",
            "is_required": true,
            "order": 0,
            "regex": "^.+$"
          }
        ],
        "response_fields": []
      }
    ]
  },
  "id": 1,
  "status": true,
  "origin": "transfer.service"
}
\`\`\`
`,zk=`---
title: Transfer State
order: 22
rpcMethod: transfer.state
codeExamples:
  curl: |
    curl --location 'https://{{host}}/api/v1/jsonrpc' \\
      --header 'Authorization: Bearer {{access_token}}' \\
      --header 'Content-Type: application/json' \\
      --data '{
        "jsonrpc": "2.0",
        "id": "{{$randomUUID}}",
        "method": "transfer.state",
        "params": {
          "ext_id": "{{ext_id}}"
        }
      }'
  node: |
    const response = await fetch(\`https://\${host}/api/v1/jsonrpc\`, {
      method: 'POST',
      headers: {
        Authorization: \`Bearer \${accessToken}\`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        jsonrpc: '2.0',
        id: crypto.randomUUID(),
        method: 'transfer.state',
        params: { ext_id: extId },
      }),
    });
    const { result } = await response.json();
params:
  - name: ext_id
    type: string
    required: true
    desc: "Holati tekshirilayotgan operatsiyaning tashqi identifikatori."
---

\`transfer.state\` o'tkazmaning yakuniy holatini oladi. Bu hamkor
tizimga tranzaksiya muvaffaqiyatli yakunlangan, muvaffaqiyatsiz
bo'lgan, bekor qilingan yoki hali jarayonda ekanini tekshirish
imkonini beradi.

Bu metod ayniqsa o'tkazma \`form_url\` orqali qayta ishlanganda va
yakuniy natija darhol mavjud bo'lmaganda foydalidir.

## Qachon ishlatiladi

\`transfer.state\`ni quyidagi holatlarda ishlating:

- O'tkazma \`transfer.create\` orqali yaratilgan bo'lsa
- Javobda \`form_url\` qaytgan bo'lsa
- Yakuniy holat callback orqali kelmagan bo'lsa
- Hamkor tranzaksiya holatini so'rov (poll) qilishi kerak bo'lsa

## Namuna javob

\`\`\`json
{
  "jsonrpc": "2.0",
  "result": {
    "ext_id": "kg_test_104",
    "state": 4,
    "description": "Success",
    "amount": 10000,
    "currency": "643",
    "commission": 0,
    "cr_amount": 1172,
    "cr_currency": "972",
    "form_url": null,
    "account": [
      {
        "name": "card",
        "title": { "en": "Card of a receiver" },
        "number": "505827******0789"
      },
      { "name": "owner", "title": { "en": "Receiver" }, "value": null }
    ],
    "payment": {
      "ref_num": "UO-MT-C-012026091545-3ba5df06-54eb-4",
      "id": null
    }
  },
  "id": 1,
  "status": true,
  "origin": "transfer.state"
}
\`\`\`

## Operatsiya holatlari (\`state\`)

| Holat | Tavsif |
|---|---|
| \`-98\` | Yaratilmagan |
| \`0\` | Yaratilgan (Created) |
| \`4\` | Muvaffaqiyatli (Success) |
| \`21\` | Bekor qilingan (Cancel) |
| \`22\` | Chek muddati tugagan |
| \`29\`, \`30\` | Jarayonda (In progress) |
| \`33\` | Tranzaksiya xatoligi |
`,Ak=`---
title: Loyiha haqida
order: 1
---

**Unisoft Carousel** — O'zbekiston, Rossiya, Tojikiston, Qirg'iziston va
boshqa mamlakatlar uchun pul o'tkazmalari va to'lovlar API'si.

## Test qilishdan oldin

- **NDA** — maxfiylik shartnomasi imzolangan bo'lishi kerak
- **IP ruxsati** — sizning IP manzilingiz email orqali whitelist'ga
  qo'shilishi kerak

## Test muhitini sozlash

1. **Credentials** — parol bilan himoyalangan \`.zip\` papkasi orqali test
   ma'lumotlari beriladi
2. **Digest tayyorlash** — maxfiy kalit yordamida so'rov uchun digest
   yaratiladi ([Ulanish](/docs/auth) sahifasida batafsil)
3. **Token olish** — \`login\` metodi orqali autentifikatsiya qilinadi
4. **Xizmatni sinash** — token va digest bilan test so'rovi yuboriladi

## Muhim eslatma

Test hisobidagi barcha summalar avtomatik ravishda 100 (1 so'm) gacha
kamaytiriladi. Productionda API va Registry'da haqiqiy summa ko'rinadi.
`,jk=`---
title: Atamalar va tushunchalar
order: 2
---

| Atama | Ta'rif |
|---|---|
| Client | Unisoft Gate'dan foydalanishga ruxsat berilgan hamkor |
| User | Hamkorning mijozi (Unisoft uchun "User" deb ataladi) |
| Request | Ma'lumot uchun so'rov |
| Response | So'rovga javob |
| Registry | Har bir maxfiy ma'lumotni ro'yxatga oluvchi xizmat |
| Uzcard | Uzcard Online (Svgate) |
| Humo | O'zbekiston Markaziy banki tegishli protsessing markazi |
| Visa | Visa protsessing markazi |
| Transfer | Peer-to-peer operatsiya (pul o'tkazmasi) |
| Payment | Xizmatlar uchun to'lov yoki debit operatsiyasi |
| Exchange Conversion | Valyutani Universalbank JSC kursi bo'yicha konvertatsiya qilish |
| CBU | O'zbekiston Markaziy banki |
| Sender | Jo'natuvchi (debit) |
| Receiver | Qabul qiluvchi (kredit) |
| Cheque | Qabul qiluvchini kutayotgan to'lov cheki |
| EPOS | \`merchant_id\`/\`terminal_id\` saqlovchi elektron POS terminal |

## Ma'lumot turlari

| Nomi | Turi | Tavsif |
|---|---|---|
| \`number\` | string | Karta raqami, 16 ta belgi |
| \`amount\` | integer | Summa — kasr yoki o'nlik nuqtasiz bo'lishi kerak |
| \`message\` | object/string | Xabar matni |
| \`host\` | object | Host haqida ma'lumot |
| \`error\` | object | Xatolik obyekti |
| \`result\` | object | Natija obyekti |
| \`code\` | integer | Xatolik kodi |
`,Pk=`---
title: Categories
order: 1
rpcMethod: paynet.categories
codeExamples:
  curl: |
    curl --location 'https://{{host}}/api/v1/jsonrpc' \\
      --header 'Authorization: Bearer {{access_token}}' \\
      --header 'Content-Type: application/json' \\
      --data '{
        "jsonrpc": "2.0",
        "id": 1,
        "method": "paynet.categories",
        "params": {}
      }'
  node: |
    const response = await fetch(\`https://\${host}/api/v1/jsonrpc\`, {
      method: 'POST',
      headers: {
        Authorization: \`Bearer \${accessToken}\`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        jsonrpc: '2.0',
        id: 1,
        method: 'paynet.categories',
        params: {},
      }),
    });
    const { result } = await response.json();
---

**Paynet to'lovlari** — Unisoft Carousel'ning yana bir moduli:
mobil aloqa, kommunal xizmatlar, internet, taksi va boshqa
provayderlar orqali to'lov qabul qilish uchun ishlatiladi.

\`paynet.categories\` provayderlarning mantiqiy guruhlanishini
qaytaradi (Mobil aloqa, Kommunal xizmatlar, Internet va h.k.).

## Javob maydonlari

| Maydon | Turi | Tavsif |
|---|---|---|
| \`id\` | integer | Kategoriya identifikatori |
| \`title_uz\` / \`title_ru\` | string | Kategoriya nomi tillar bo'yicha |
| \`is_subcategory\` | boolean | Bu kichik kategoriya ekanligini bildiradi |

## Namuna javob

\`\`\`json
{
  "jsonrpc": "2.0",
  "result": [
    { "title_uz": "Uyali aloqa", "is_subcategory": false, "id": 1 },
    { "title_uz": "Uy telefoni", "is_subcategory": false, "id": 2 },
    { "title_uz": "Internet", "is_subcategory": false, "id": 3 },
    { "title_uz": "Xizmatlar", "is_subcategory": false, "id": 7 },
    { "title_uz": "Taxi", "is_subcategory": false, "id": 11 },
    { "title_uz": "Davlat xizmatlari", "is_subcategory": false, "id": 14 }
  ],
  "id": 1,
  "status": true,
  "origin": "paynet.categories"
}
\`\`\`
`,Ik=`---
title: Confirm
order: 6
rpcMethod: transfer.confirm
codeExamples:
  curl: |
    curl --location 'https://{{host}}/api/v1/jsonrpc' \\
      --header 'Authorization: Bearer {{access_token}}' \\
      --header 'Content-Type: application/json' \\
      --data '{
        "jsonrpc": "2.0",
        "id": 1,
        "method": "transfer.confirm",
        "params": {
          "ext_id": "test_12345"
        }
      }'
params:
  - name: ext_id
    type: string
    required: true
    desc: "Create qadamida ishlatilgan tashqi operatsiya identifikatori."
---

\`transfer.create\` orqali \`state: 0\` bilan yaratilgan to'lovni
yakuniy tasdiqlaydi va bajaradi.

## Namuna javob

\`\`\`json
{
  "jsonrpc": "2.0",
  "result": {
    "ext_id": "test_12345",
    "state": 4,
    "description": "Проведен успешно",
    "amount": 1000,
    "currency": "860",
    "commission": 0,
    "cr_amount": null,
    "cr_currency": null,
    "form_url": null,
    "account": [
      { "name": "card", "title": { "en": "Card of a receiver" }, "number": "" },
      { "name": "owner", "title": { "en": "Receiver" }, "value": null }
    ],
    "payment": {
      "ref_num": "UO-MT-C-051226161349-0adff87b-f1b8-4",
      "id": null
    }
  },
  "id": 1,
  "status": true,
  "origin": "transfer.confirm"
}
\`\`\`

\`state: 4\` — to'lov muvaffaqiyatli yakunlanganini bildiradi.
`,Nk=`---
title: Create
order: 5
rpcMethod: transfer.create
codeExamples:
  curl: |
    curl --location 'https://{{host}}/api/v1/jsonrpc' \\
      --header 'Authorization: Bearer {{access_token}}' \\
      --header 'Content-Type: application/json' \\
      --data '{
        "jsonrpc": "2.0",
        "id": 1,
        "method": "transfer.create",
        "params": {
          "ext_id": "test_12345",
          "currency": "860",
          "service_code": "V2S0013",
          "service_id": 104,
          "sender_id": 1,
          "fields": {
            "clientid": "935989900",
            "amount": 1000
          }
        }
      }'
params:
  - name: ext_id
    type: string
    required: true
    desc: "Noyob tashqi operatsiya identifikatori."
  - name: currency
    type: string
    required: true
    desc: "Valyuta kodi."
  - name: service_code
    type: string
    required: true
    desc: "Xizmat kodi."
  - name: service_id
    type: integer
    required: true
    desc: "paynet.services javobidan olingan xizmat identifikatori."
  - name: sender_id
    type: integer
    required: true
    desc: "sender.create'dan olingan jo'natuvchi identifikatori."
  - name: fields
    type: object
    required: true
    desc: "Xizmatga xos maydonlar — amount maydoni tiyin emas, oddiy summa sifatida yuboriladi."
---

Paynet guruhida to'lovni yaratish uchun ham \`transfer.create\` metodi
ishlatiladi — farqi shundaki, bu yerda qo'shimcha \`service_id\`
parametri talab qilinadi.

> ⚠️ \`fields.amount\` bu yerda **tiyin emas** — oddiy summa sifatida
> yuboriladi (izohga qarang: \`// Not tiyins\`).

## Namuna javob

\`\`\`json
{
  "jsonrpc": "2.0",
  "result": {
    "ext_id": "test_12345",
    "state": 0,
    "description": "created",
    "amount": 1000,
    "currency": "860",
    "commission": 0,
    "cr_amount": null,
    "cr_currency": null,
    "form_url": null,
    "account": [
      { "name": "card", "title": { "en": "Card of a receiver" }, "number": "" },
      { "name": "owner", "title": { "en": "Receiver" }, "value": null }
    ],
    "payment": {
      "ref_num": "UO-MT-C-051226161349-0adff87b-f1b8-4",
      "id": null
    }
  },
  "id": 1,
  "status": true,
  "origin": "transfer.create"
}
\`\`\`

\`state: 0\` qaytgach, to'lovni yakunlash uchun
[Confirm](/docs/payments-confirm) metodini chaqiring.
`,Lk=`---
title: Info
order: 4
rpcMethod: transfer.info
codeExamples:
  curl: |
    curl --location 'https://{{host}}/api/v1/jsonrpc' \\
      --header 'Authorization: Bearer {{access_token}}' \\
      --header 'Content-Type: application/json' \\
      --data '{
        "jsonrpc": "2.0",
        "id": 1,
        "method": "transfer.info",
        "params": {
          "service_code": "V2S0013",
          "service_id": 3533,
          "fields": {
            "clientid": "935989900"
          }
        }
      }'
  node: |
    const response = await fetch(\`https://\${host}/api/v1/jsonrpc\`, {
      method: 'POST',
      headers: {
        Authorization: \`Bearer \${accessToken}\`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        jsonrpc: '2.0',
        id: 1,
        method: 'transfer.info',
        params: {
          service_code: 'V2S0013',
          service_id: 3533,
          fields: { clientid: '935989900' },
        },
      }),
    });
    const { result } = await response.json();
params:
  - name: service_code
    type: string
    required: true
    desc: "Xizmat kodi."
  - name: service_id
    type: integer
    required: true
    desc: "paynet.services javobidan olingan xizmat identifikatori."
  - name: fields
    type: object
    required: true
    desc: "Xizmatga xos maydonlar (masalan, mijoz identifikatori — clientid)."
---

To'lovni yaratishdan **oldin** qabul qiluvchi (masalan, telefon
raqami) haqidagi ma'lumotni tekshirish uchun ishlatiladi — bu Paynet
guruhidagi "Create xizmati" (receiver-check) hisoblanadi.

## Namuna javob

\`\`\`json
{
  "jsonrpc": "2.0",
  "result": {
    "transaction_id": "32511484056",
    "status_text": "Проведен успешно",
    "status": "0",
    "time": 1778583693000,
    "response": [
      { "key": "provider_name", "label_uz": "Operator", "value": "UCell" },
      {
        "key": "service_name",
        "label_uz": "Xizmat turi",
        "value": "Проверка номера"
      },
      { "key": "clientid", "label_uz": "Telefon raqami", "value": "935989900" },
      { "key": "check_status", "label_uz": "Raqam statusi", "value": null }
    ]
  },
  "id": 1,
  "status": true,
  "origin": "transfer.info"
}
\`\`\`

\`response\` massividagi har bir element — kvitansiyada
ko'rsatiladigan bitta qatorni bildiradi (\`key\`, ko'p tilli \`label\`,
va \`value\`).
`,Ok=`---
title: Providers
order: 2
rpcMethod: paynet.providers
codeExamples:
  curl: |
    curl --location 'https://{{host}}/api/v1/jsonrpc' \\
      --header 'Authorization: Bearer {{access_token}}' \\
      --header 'Content-Type: application/json' \\
      --data '{
        "jsonrpc": "2.0",
        "id": 1,
        "method": "paynet.providers",
        "params": {
          "category_id": 1
        }
      }'
  node: |
    const response = await fetch(\`https://\${host}/api/v1/jsonrpc\`, {
      method: 'POST',
      headers: {
        Authorization: \`Bearer \${accessToken}\`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        jsonrpc: '2.0',
        id: 1,
        method: 'paynet.providers',
        params: { category_id: 1 },
      }),
    });
    const { result } = await response.json();
params:
  - name: category_id
    type: integer
    required: true
    desc: "paynet.categories javobidan olingan kategoriya identifikatori."
---

Tanlangan kategoriya ostidagi merchant (provayder)larni qaytaradi
— masalan, Beeline, Ucell, UzPaynet va h.k.

## Javob maydonlari

| Maydon | Turi | Tavsif |
|---|---|---|
| \`id\` | integer | Provayder identifikatori |
| \`title\` | string | To'liq nomi |
| \`title_short\` | string | Qisqartirilgan (ko'rsatiladigan) nomi |

## Namuna javob

\`\`\`json
{
  "jsonrpc": "2.0",
  "result": [
    { "title": "OOO \\"UNITEL\\"", "title_short": "Beeline", "id": 2 },
    { "title": "OOO \\"COSCOM\\"", "title_short": "UCell", "id": 44 },
    { "title": "Paynet Услуги", "title_short": "Paynet Услуги", "id": 1775 },
    { "title": "OOO \\"RWC\\"", "title_short": "Perfectum", "id": 21 }
  ],
  "id": 1,
  "status": true,
  "origin": "paynet.providers"
}
\`\`\`
`,Rk=`---
title: Services
order: 3
rpcMethod: paynet.services
codeExamples:
  curl: |
    curl --location 'https://{{host}}/api/v1/jsonrpc' \\
      --header 'Authorization: Bearer {{access_token}}' \\
      --header 'Content-Type: application/json' \\
      --data '{
        "jsonrpc": "2.0",
        "id": 1,
        "method": "paynet.services",
        "params": {
          "provider_id": 44
        }
      }'
  node: |
    const response = await fetch(\`https://\${host}/api/v1/jsonrpc\`, {
      method: 'POST',
      headers: {
        Authorization: \`Bearer \${accessToken}\`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        jsonrpc: '2.0',
        id: 1,
        method: 'paynet.services',
        params: { provider_id: 44 },
      }),
    });
    const { result } = await response.json();
params:
  - name: provider_id
    type: integer
    required: true
    desc: "paynet.providers javobidan olingan provayder identifikatori."
---

Tanlangan provayder ostidagi operatsiyalarni qaytaradi. Odatda har
bir provayderda ikkita xizmat bo'ladi:

- **Create xizmati** (ma'lumot / qabul qiluvchini tekshirish) —
  \`min_amount = max_amount = service_price = 0\` va \`type_id != 1\`.
  To'lovdan oldin qabul qiluvchini tekshirish uchun ishlatiladi.
- **Confirm xizmati** (to'lovni bajarish) — \`min_amount\`,
  \`max_amount\`, \`service_price\`dan kamida bittasi musbat, yoki
  \`type_id = 1\`.

## Javob maydonlari

| Maydon | Turi | Tavsif |
|---|---|---|
| \`id\` | integer | Xizmat identifikatori |
| \`title_uz\` / \`title_ru\` | string | Xizmat nomi |
| \`type_id\` | integer | Xizmat turi |
| \`min_amount\` / \`max_amount\` | integer | Summa chegaralari |
| \`service_price\` | number | Xizmat narxi (agar belgilangan bo'lsa) |
| \`fields\` | array | To'lov uchun kerakli input maydonlar |
| \`response_fields\` | array | Chek/kvitansiyada ko'rsatiladigan maydonlar |

## Namuna javob (qisqartirilgan)

\`\`\`json
{
  "jsonrpc": "2.0",
  "result": {
    "id": 44,
    "title_short": "UCell",
    "services": [
      {
        "id": 104,
        "title_uz": "To'lov",
        "type_id": 1,
        "min_amount": 500,
        "max_amount": 500000,
        "service_price": 0,
        "fields": [
          {
            "name": "clientid",
            "title_uz": "Telefon raqami",
            "required": true,
            "field_control": "PHONE"
          },
          {
            "name": "amount",
            "title_uz": "Summa",
            "required": true,
            "field_control": "MONEY"
          }
        ],
        "response_fields": [
          { "labelUz": "Operator", "fieldName": "provider_name" },
          { "labelUz": "Chek raqami", "fieldName": "transaction_id" },
          { "labelUz": "To'landi", "fieldName": "amount" }
        ]
      }
    ]
  },
  "id": 1,
  "status": true,
  "origin": "paynet.services"
}
\`\`\`

\`fields\` massividagi \`field_control\` qiymati (\`PHONE\`, \`MONEY\` va
h.k.) UI'da qaysi turdagi input yaratish kerakligini bildiradi.
`,Mk=`---
title: State
order: 7
rpcMethod: transfer.state
codeExamples:
  curl: |
    curl --location 'https://{{host}}/api/v1/jsonrpc' \\
      --header 'Authorization: Bearer {{access_token}}' \\
      --header 'Content-Type: application/json' \\
      --data '{
        "jsonrpc": "2.0",
        "id": 1,
        "method": "transfer.state",
        "params": {
          "ext_id": "test_12345"
        }
      }'
params:
  - name: ext_id
    type: string
    required: true
    desc: "Holati tekshirilayotgan to'lovning tashqi identifikatori."
---

Paynet to'lovining yakuniy holatini tekshirish uchun ishlatiladi —
xatti-harakati [Transfer State](/docs/transfer-state)dagi bilan bir
xil.

## Namuna javob

\`\`\`json
{
  "jsonrpc": "2.0",
  "result": {
    "ext_id": "test_12345",
    "state": 4,
    "description": "Проведен успешно",
    "amount": 1000,
    "currency": "860",
    "commission": 0,
    "cr_amount": null,
    "cr_currency": null,
    "form_url": null,
    "account": [
      { "name": "card", "title": { "en": "Card of a receiver" }, "number": "" },
      { "name": "owner", "title": { "en": "Receiver" }, "value": null }
    ],
    "payment": {
      "ref_num": "UO-MT-C-051226161349-0adff87b-f1b8-4",
      "id": null
    }
  },
  "id": 1,
  "status": true,
  "origin": "transfer.state"
}
\`\`\`

Holat kodlari to'liq ro'yxati [Transfer State](/docs/transfer-state)
sahifasida keltirilgan.
`;function qk(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Qe={},ml={},ut={},Vf;function Qi(){if(Vf)return ut;Vf=1;function e(a){return typeof a>"u"||a===null}function n(a){return typeof a=="object"&&a!==null}function t(a){return Array.isArray(a)?a:e(a)?[]:[a]}function r(a,o){if(o){const u=Object.keys(o);for(let s=0,d=u.length;s<d;s+=1){const f=u[s];a[f]=o[f]}}return a}function i(a,o){let u="";for(let s=0;s<o;s+=1)u+=a;return u}function l(a){return a===0&&Number.NEGATIVE_INFINITY===1/a}return ut.isNothing=e,ut.isObject=n,ut.toArray=t,ut.repeat=i,ut.isNegativeZero=l,ut.extend=r,ut}var fo,Wf;function Yi(){if(Wf)return fo;Wf=1;function e(t,r){let i="";const l=t.reason||"(unknown reason)";return t.mark?(t.mark.name&&(i+='in "'+t.mark.name+'" '),i+="("+(t.mark.line+1)+":"+(t.mark.column+1)+")",!r&&t.mark.snippet&&(i+=`

`+t.mark.snippet),l+" "+i):l}function n(t,r){Error.call(this),this.name="YAMLException",this.reason=t,this.mark=r,this.message=e(this,!1),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack||""}return n.prototype=Object.create(Error.prototype),n.prototype.constructor=n,n.prototype.toString=function(r){return this.name+": "+e(this,r)},fo=n,fo}var po,Qf;function Fk(){if(Qf)return po;Qf=1;const e=Qi();function n(i,l,a,o,u){let s="",d="";const f=Math.floor(u/2)-1;return o-l>f&&(s=" ... ",l=o-f+s.length),a-o>f&&(d=" ...",a=o+f-d.length),{str:s+i.slice(l,a).replace(/\t/g,"→")+d,pos:o-l+s.length}}function t(i,l){return e.repeat(" ",l-i.length)+i}function r(i,l){if(l=Object.create(l||null),!i.buffer)return null;l.maxLength||(l.maxLength=79),typeof l.indent!="number"&&(l.indent=1),typeof l.linesBefore!="number"&&(l.linesBefore=3),typeof l.linesAfter!="number"&&(l.linesAfter=2);const a=/\r?\n|\r|\0/g,o=[0],u=[];let s,d=-1;for(;s=a.exec(i.buffer);)u.push(s.index),o.push(s.index+s[0].length),i.position<=s.index&&d<0&&(d=o.length-2);d<0&&(d=o.length-1);let f="";const p=Math.min(i.line+l.linesAfter,u.length).toString().length,h=l.maxLength-(l.indent+p+3);for(let w=1;w<=l.linesBefore&&!(d-w<0);w++){const b=n(i.buffer,o[d-w],u[d-w],i.position-(o[d]-o[d-w]),h);f=e.repeat(" ",l.indent)+t((i.line-w+1).toString(),p)+" | "+b.str+`
`+f}const v=n(i.buffer,o[d],u[d],i.position,h);f+=e.repeat(" ",l.indent)+t((i.line+1).toString(),p)+" | "+v.str+`
`,f+=e.repeat("-",l.indent+p+3+v.pos)+`^
`;for(let w=1;w<=l.linesAfter&&!(d+w>=u.length);w++){const b=n(i.buffer,o[d+w],u[d+w],i.position-(o[d]-o[d+w]),h);f+=e.repeat(" ",l.indent)+t((i.line+w+1).toString(),p)+" | "+b.str+`
`}return f.replace(/\n$/,"")}return po=r,po}var ho,Yf;function ln(){if(Yf)return ho;Yf=1;const e=Yi(),n=["kind","multi","resolve","construct","instanceOf","predicate","represent","representName","defaultStyle","styleAliases"],t=["scalar","sequence","mapping"];function r(l){const a={};return l!==null&&Object.keys(l).forEach(function(o){l[o].forEach(function(u){a[String(u)]=o})}),a}function i(l,a){if(a=a||{},Object.keys(a).forEach(function(o){if(n.indexOf(o)===-1)throw new e('Unknown option "'+o+'" is met in definition of "'+l+'" YAML type.')}),this.options=a,this.tag=l,this.kind=a.kind||null,this.resolve=a.resolve||function(){return!0},this.construct=a.construct||function(o){return o},this.instanceOf=a.instanceOf||null,this.predicate=a.predicate||null,this.represent=a.represent||null,this.representName=a.representName||null,this.defaultStyle=a.defaultStyle||null,this.multi=a.multi||!1,this.styleAliases=r(a.styleAliases||null),t.indexOf(this.kind)===-1)throw new e('Unknown kind "'+this.kind+'" is specified for "'+l+'" YAML type.')}return ho=i,ho}var mo,Kf;function Vm(){if(Kf)return mo;Kf=1;const e=Yi(),n=ln();function t(l,a){const o=[];return l[a].forEach(function(u){let s=o.length;o.forEach(function(d,f){d.tag===u.tag&&d.kind===u.kind&&d.multi===u.multi&&(s=f)}),o[s]=u}),o}function r(){const l={scalar:{},sequence:{},mapping:{},fallback:{},multi:{scalar:[],sequence:[],mapping:[],fallback:[]}};function a(o){o.multi?(l.multi[o.kind].push(o),l.multi.fallback.push(o)):l[o.kind][o.tag]=l.fallback[o.tag]=o}for(let o=0,u=arguments.length;o<u;o+=1)arguments[o].forEach(a);return l}function i(l){return this.extend(l)}return i.prototype.extend=function(a){let o=[],u=[];if(a instanceof n)u.push(a);else if(Array.isArray(a))u=u.concat(a);else if(a&&(Array.isArray(a.implicit)||Array.isArray(a.explicit)))a.implicit&&(o=o.concat(a.implicit)),a.explicit&&(u=u.concat(a.explicit));else throw new e("Schema.extend argument should be a Type, [ Type ], or a schema definition ({ implicit: [...], explicit: [...] })");o.forEach(function(d){if(!(d instanceof n))throw new e("Specified list of YAML types (or a single Type object) contains a non-Type object.");if(d.loadKind&&d.loadKind!=="scalar")throw new e("There is a non-scalar type in the implicit list of a schema. Implicit resolving of such types is not supported.");if(d.multi)throw new e("There is a multi type in the implicit list of a schema. Multi tags can only be listed as explicit.")}),u.forEach(function(d){if(!(d instanceof n))throw new e("Specified list of YAML types (or a single Type object) contains a non-Type object.")});const s=Object.create(i.prototype);return s.implicit=(this.implicit||[]).concat(o),s.explicit=(this.explicit||[]).concat(u),s.compiledImplicit=t(s,"implicit"),s.compiledExplicit=t(s,"explicit"),s.compiledTypeMap=r(s.compiledImplicit,s.compiledExplicit),s},mo=i,mo}var go,Xf;function Wm(){if(Xf)return go;Xf=1;const e=ln();return go=new e("tag:yaml.org,2002:str",{kind:"scalar",construct:function(n){return n!==null?n:""}}),go}var yo,Jf;function Qm(){if(Jf)return yo;Jf=1;const e=ln();return yo=new e("tag:yaml.org,2002:seq",{kind:"sequence",construct:function(n){return n!==null?n:[]}}),yo}var vo,Gf;function Ym(){if(Gf)return vo;Gf=1;const e=ln();return vo=new e("tag:yaml.org,2002:map",{kind:"mapping",construct:function(n){return n!==null?n:{}}}),vo}var ko,Zf;function Km(){if(Zf)return ko;Zf=1;const e=Vm();return ko=new e({explicit:[Wm(),Qm(),Ym()]}),ko}var xo,ed;function Xm(){if(ed)return xo;ed=1;const e=ln();function n(i){if(i===null)return!0;const l=i.length;return l===1&&i==="~"||l===4&&(i==="null"||i==="Null"||i==="NULL")}function t(){return null}function r(i){return i===null}return xo=new e("tag:yaml.org,2002:null",{kind:"scalar",resolve:n,construct:t,predicate:r,represent:{canonical:function(){return"~"},lowercase:function(){return"null"},uppercase:function(){return"NULL"},camelcase:function(){return"Null"},empty:function(){return""}},defaultStyle:"lowercase"}),xo}var wo,nd;function Jm(){if(nd)return wo;nd=1;const e=ln();function n(i){if(i===null)return!1;const l=i.length;return l===4&&(i==="true"||i==="True"||i==="TRUE")||l===5&&(i==="false"||i==="False"||i==="FALSE")}function t(i){return i==="true"||i==="True"||i==="TRUE"}function r(i){return Object.prototype.toString.call(i)==="[object Boolean]"}return wo=new e("tag:yaml.org,2002:bool",{kind:"scalar",resolve:n,construct:t,predicate:r,represent:{lowercase:function(i){return i?"true":"false"},uppercase:function(i){return i?"TRUE":"FALSE"},camelcase:function(i){return i?"True":"False"}},defaultStyle:"lowercase"}),wo}var _o,td;function Gm(){if(td)return _o;td=1;const e=Qi(),n=ln();function t(s){return s>=48&&s<=57||s>=65&&s<=70||s>=97&&s<=102}function r(s){return s>=48&&s<=55}function i(s){return s>=48&&s<=57}function l(s){if(s===null)return!1;const d=s.length;let f=0,p=!1;if(!d)return!1;let h=s[f];if((h==="-"||h==="+")&&(h=s[++f]),h==="0"){if(f+1===d)return!0;if(h=s[++f],h==="b"){for(f++;f<d;f++){if(h=s[f],h!=="0"&&h!=="1")return!1;p=!0}return p&&isFinite(a(s))}if(h==="x"){for(f++;f<d;f++){if(!t(s.charCodeAt(f)))return!1;p=!0}return p&&isFinite(a(s))}if(h==="o"){for(f++;f<d;f++){if(!r(s.charCodeAt(f)))return!1;p=!0}return p&&isFinite(a(s))}}for(;f<d;f++){if(!i(s.charCodeAt(f)))return!1;p=!0}return p?isFinite(a(s)):!1}function a(s){let d=s,f=1,p=d[0];if((p==="-"||p==="+")&&(p==="-"&&(f=-1),d=d.slice(1),p=d[0]),d==="0")return 0;if(p==="0"){if(d[1]==="b")return f*parseInt(d.slice(2),2);if(d[1]==="x")return f*parseInt(d.slice(2),16);if(d[1]==="o")return f*parseInt(d.slice(2),8)}return f*parseInt(d,10)}function o(s){return a(s)}function u(s){return Object.prototype.toString.call(s)==="[object Number]"&&s%1===0&&!e.isNegativeZero(s)}return _o=new n("tag:yaml.org,2002:int",{kind:"scalar",resolve:l,construct:o,predicate:u,represent:{binary:function(s){return s>=0?"0b"+s.toString(2):"-0b"+s.toString(2).slice(1)},octal:function(s){return s>=0?"0o"+s.toString(8):"-0o"+s.toString(8).slice(1)},decimal:function(s){return s.toString(10)},hexadecimal:function(s){return s>=0?"0x"+s.toString(16).toUpperCase():"-0x"+s.toString(16).toUpperCase().slice(1)}},defaultStyle:"decimal",styleAliases:{binary:[2,"bin"],octal:[8,"oct"],decimal:[10,"dec"],hexadecimal:[16,"hex"]}}),_o}var So,rd;function Zm(){if(rd)return So;rd=1;const e=Qi(),n=ln(),t=new RegExp("^(?:[-+]?(?:[0-9]+)(?:\\.[0-9]*)?(?:[eE][-+]?[0-9]+)?|\\.[0-9]+(?:[eE][-+]?[0-9]+)?|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$"),r=new RegExp("^(?:[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$");function i(s){return s===null||!t.test(s)?!1:isFinite(parseFloat(s,10))?!0:r.test(s)}function l(s){let d=s.toLowerCase();const f=d[0]==="-"?-1:1;return"+-".indexOf(d[0])>=0&&(d=d.slice(1)),d===".inf"?f===1?Number.POSITIVE_INFINITY:Number.NEGATIVE_INFINITY:d===".nan"?NaN:f*parseFloat(d,10)}const a=/^[-+]?[0-9]+e/;function o(s,d){if(isNaN(s))switch(d){case"lowercase":return".nan";case"uppercase":return".NAN";case"camelcase":return".NaN"}else if(Number.POSITIVE_INFINITY===s)switch(d){case"lowercase":return".inf";case"uppercase":return".INF";case"camelcase":return".Inf"}else if(Number.NEGATIVE_INFINITY===s)switch(d){case"lowercase":return"-.inf";case"uppercase":return"-.INF";case"camelcase":return"-.Inf"}else if(e.isNegativeZero(s))return"-0.0";const f=s.toString(10);return a.test(f)?f.replace("e",".e"):f}function u(s){return Object.prototype.toString.call(s)==="[object Number]"&&(s%1!==0||e.isNegativeZero(s))}return So=new n("tag:yaml.org,2002:float",{kind:"scalar",resolve:i,construct:l,predicate:u,represent:o,defaultStyle:"lowercase"}),So}var Co,id;function eg(){return id||(id=1,Co=Km().extend({implicit:[Xm(),Jm(),Gm(),Zm()]})),Co}var bo,ld;function ng(){return ld||(ld=1,bo=eg()),bo}var Eo,ad;function tg(){if(ad)return Eo;ad=1;const e=ln(),n=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9])-([0-9][0-9])$"),t=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9]?)-([0-9][0-9]?)(?:[Tt]|[ \\t]+)([0-9][0-9]?):([0-9][0-9]):([0-9][0-9])(?:\\.([0-9]*))?(?:[ \\t]*(Z|([-+])([0-9][0-9]?)(?::([0-9][0-9]))?))?$");function r(a){return a===null?!1:n.exec(a)!==null||t.exec(a)!==null}function i(a){let o=0,u=null,s=n.exec(a);if(s===null&&(s=t.exec(a)),s===null)throw new Error("Date resolve error");const d=+s[1],f=+s[2]-1,p=+s[3];if(!s[4])return new Date(Date.UTC(d,f,p));const h=+s[4],v=+s[5],w=+s[6];if(s[7]){for(o=s[7].slice(0,3);o.length<3;)o+="0";o=+o}if(s[9]){const g=+s[10],y=+(s[11]||0);u=(g*60+y)*6e4,s[9]==="-"&&(u=-u)}const b=new Date(Date.UTC(d,f,p,h,v,w,o));return u&&b.setTime(b.getTime()-u),b}function l(a){return a.toISOString()}return Eo=new e("tag:yaml.org,2002:timestamp",{kind:"scalar",resolve:r,construct:i,instanceOf:Date,represent:l}),Eo}var To,od;function rg(){if(od)return To;od=1;const e=ln();function n(t){return t==="<<"||t===null}return To=new e("tag:yaml.org,2002:merge",{kind:"scalar",resolve:n}),To}var zo,ud;function ig(){if(ud)return zo;ud=1;const e=ln(),n=`ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=
\r`;function t(a){if(a===null)return!1;let o=0;const u=a.length,s=n;for(let d=0;d<u;d++){const f=s.indexOf(a.charAt(d));if(!(f>64)){if(f<0)return!1;o+=6}}return o%8===0}function r(a){const o=a.replace(/[\r\n=]/g,""),u=o.length,s=n;let d=0;const f=[];for(let h=0;h<u;h++)h%4===0&&h&&(f.push(d>>16&255),f.push(d>>8&255),f.push(d&255)),d=d<<6|s.indexOf(o.charAt(h));const p=u%4*6;return p===0?(f.push(d>>16&255),f.push(d>>8&255),f.push(d&255)):p===18?(f.push(d>>10&255),f.push(d>>2&255)):p===12&&f.push(d>>4&255),new Uint8Array(f)}function i(a){let o="",u=0;const s=a.length,d=n;for(let p=0;p<s;p++)p%3===0&&p&&(o+=d[u>>18&63],o+=d[u>>12&63],o+=d[u>>6&63],o+=d[u&63]),u=(u<<8)+a[p];const f=s%3;return f===0?(o+=d[u>>18&63],o+=d[u>>12&63],o+=d[u>>6&63],o+=d[u&63]):f===2?(o+=d[u>>10&63],o+=d[u>>4&63],o+=d[u<<2&63],o+=d[64]):f===1&&(o+=d[u>>2&63],o+=d[u<<4&63],o+=d[64],o+=d[64]),o}function l(a){return Object.prototype.toString.call(a)==="[object Uint8Array]"}return zo=new e("tag:yaml.org,2002:binary",{kind:"scalar",resolve:t,construct:r,predicate:l,represent:i}),zo}var Ao,sd;function lg(){if(sd)return Ao;sd=1;const e=ln(),n=Object.prototype.hasOwnProperty,t=Object.prototype.toString;function r(l){if(l===null)return!0;const a={},o=l;for(let u=0,s=o.length;u<s;u+=1){const d=o[u];let f=!1;if(t.call(d)!=="[object Object]")return!1;let p;for(p in d)if(n.call(d,p))if(!f)f=!0;else return!1;if(!f||n.call(a,p))return!1;Object.defineProperty(a,p,{value:!0})}return!0}function i(l){return l!==null?l:[]}return Ao=new e("tag:yaml.org,2002:omap",{kind:"sequence",resolve:r,construct:i}),Ao}var jo,cd;function ag(){if(cd)return jo;cd=1;const e=ln(),n=Object.prototype.toString;function t(i){if(i===null)return!0;const l=i,a=new Array(l.length);for(let o=0,u=l.length;o<u;o+=1){const s=l[o];if(n.call(s)!=="[object Object]")return!1;const d=Object.keys(s);if(d.length!==1)return!1;a[o]=[d[0],s[d[0]]]}return!0}function r(i){if(i===null)return[];const l=i,a=new Array(l.length);for(let o=0,u=l.length;o<u;o+=1){const s=l[o],d=Object.keys(s);a[o]=[d[0],s[d[0]]]}return a}return jo=new e("tag:yaml.org,2002:pairs",{kind:"sequence",resolve:t,construct:r}),jo}var Po,fd;function og(){if(fd)return Po;fd=1;const e=ln(),n=Object.prototype.hasOwnProperty;function t(i){if(i===null)return!0;const l=i;for(const a in l)if(n.call(l,a)&&l[a]!==null)return!1;return!0}function r(i){return i!==null?i:{}}return Po=new e("tag:yaml.org,2002:set",{kind:"mapping",resolve:t,construct:r}),Po}var Io,dd;function ic(){return dd||(dd=1,Io=ng().extend({implicit:[tg(),rg()],explicit:[ig(),lg(),ag(),og()]})),Io}var pd;function Dk(){if(pd)return ml;pd=1;const e=Qi(),n=Yi(),t=Fk(),r=ic(),i=Object.prototype.hasOwnProperty,l=1,a=2,o=3,u=4,s=1,d=2,f=3,p=/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F-\x84\x86-\x9F\uFFFE\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/,h=/[\x85\u2028\u2029]/,v=/[,\[\]{}]/,w=/^(?:!|!!|![0-9A-Za-z-]+!)$/,b=/^(?:!|[^,\[\]{}])(?:%[0-9a-f]{2}|[0-9a-z\-#;/?:@&=+$,_.!~*'()\[\]])*$/i;function g(c){return Object.prototype.toString.call(c)}function y(c){return c===10||c===13}function k(c){return c===9||c===32}function T(c){return c===9||c===32||c===10||c===13}function R(c){return c===44||c===91||c===93||c===123||c===125}function C(c){if(c>=48&&c<=57)return c-48;const S=c|32;return S>=97&&S<=102?S-97+10:-1}function B(c){return c===120?2:c===117?4:c===85?8:0}function V(c){return c>=48&&c<=57?c-48:-1}function ee(c){switch(c){case 48:return"\0";case 97:return"\x07";case 98:return"\b";case 116:return"	";case 9:return"	";case 110:return`
`;case 118:return"\v";case 102:return"\f";case 114:return"\r";case 101:return"\x1B";case 32:return" ";case 34:return'"';case 47:return"/";case 92:return"\\";case 78:return"";case 95:return" ";case 76:return"\u2028";case 80:return"\u2029";default:return""}}function E(c){return c<=65535?String.fromCharCode(c):String.fromCharCode((c-65536>>10)+55296,(c-65536&1023)+56320)}function K(c,S,A){S==="__proto__"?Object.defineProperty(c,S,{configurable:!0,enumerable:!0,writable:!0,value:A}):c[S]=A}const Z=new Array(256),ue=new Array(256);for(let c=0;c<256;c++)Z[c]=ee(c)?1:0,ue[c]=ee(c);function le(c,S){this.input=c,this.filename=S.filename||null,this.schema=S.schema||r,this.onWarning=S.onWarning||null,this.legacy=S.legacy||!1,this.json=S.json||!1,this.listener=S.listener||null,this.maxDepth=typeof S.maxDepth=="number"?S.maxDepth:100,this.maxTotalMergeKeys=typeof S.maxTotalMergeKeys=="number"?S.maxTotalMergeKeys:1e4,this.implicitTypes=this.schema.compiledImplicit,this.typeMap=this.schema.compiledTypeMap,this.length=c.length,this.position=0,this.line=0,this.lineStart=0,this.lineIndent=0,this.depth=0,this.totalMergeKeys=0,this.firstTabInLine=-1,this.documents=[],this.anchorMapTransactions=[]}function oe(c,S){const A={name:c.filename,buffer:c.input.slice(0,-1),position:c.position,line:c.line,column:c.position-c.lineStart};return A.snippet=t(A),new n(S,A)}function Y(c,S){throw oe(c,S)}function ke(c,S){c.onWarning&&c.onWarning.call(null,oe(c,S))}function W(c,S,A){const P=c.anchorMapTransactions;if(P.length!==0){const j=P[P.length-1];i.call(j,S)||(j[S]={existed:i.call(c.anchorMap,S),value:c.anchorMap[S]})}c.anchorMap[S]=A}function te(c){c.anchorMapTransactions.push(Object.create(null))}function x(c){const S=c.anchorMapTransactions.pop(),A=c.anchorMapTransactions;if(A.length===0)return;const P=A[A.length-1],j=Object.keys(S);for(let q=0,m=j.length;q<m;q+=1){const z=j[q];i.call(P,z)||(P[z]=S[z])}}function se(c){const S=c.anchorMapTransactions.pop(),A=Object.keys(S);for(let P=A.length-1;P>=0;P-=1){const j=S[A[P]];j.existed?c.anchorMap[A[P]]=j.value:delete c.anchorMap[A[P]]}}function pe(c){return{position:c.position,line:c.line,lineStart:c.lineStart,lineIndent:c.lineIndent,firstTabInLine:c.firstTabInLine,tag:c.tag,anchor:c.anchor,kind:c.kind,result:c.result}}function _(c,S){c.position=S.position,c.line=S.line,c.lineStart=S.lineStart,c.lineIndent=S.lineIndent,c.firstTabInLine=S.firstTabInLine,c.tag=S.tag,c.anchor=S.anchor,c.kind=S.kind,c.result=S.result}const Te={YAML:function(S,A,P){S.version!==null&&Y(S,"duplication of %YAML directive"),P.length!==1&&Y(S,"YAML directive accepts exactly one argument");const j=/^([0-9]+)\.([0-9]+)$/.exec(P[0]);j===null&&Y(S,"ill-formed argument of the YAML directive");const q=parseInt(j[1],10),m=parseInt(j[2],10);q!==1&&Y(S,"unacceptable YAML version of the document"),S.version=P[0],S.checkLineBreaks=m<2,m!==1&&m!==2&&ke(S,"unsupported YAML version of the document")},TAG:function(S,A,P){let j;P.length!==2&&Y(S,"TAG directive accepts exactly two arguments");const q=P[0];j=P[1],w.test(q)||Y(S,"ill-formed tag handle (first argument) of the TAG directive"),i.call(S.tagMap,q)&&Y(S,'there is a previously declared suffix for "'+q+'" tag handle'),b.test(j)||Y(S,"ill-formed tag prefix (second argument) of the TAG directive");try{j=decodeURIComponent(j)}catch{Y(S,"tag prefix is malformed: "+j)}S.tagMap[q]=j}};function Se(c,S,A,P){if(S<A){const j=c.input.slice(S,A);if(P)for(let q=0,m=j.length;q<m;q+=1){const z=j.charCodeAt(q);z===9||z>=32&&z<=1114111||Y(c,"expected valid JSON character")}else p.test(j)&&Y(c,"the stream contains non-printable characters");c.result+=j}}function he(c,S,A,P){e.isObject(A)||Y(c,"cannot merge mappings; the provided source object is unacceptable");const j=Object.keys(A);for(let q=0,m=j.length;q<m;q+=1){const z=j[q];c.maxTotalMergeKeys!==-1&&++c.totalMergeKeys>c.maxTotalMergeKeys&&Y(c,"merge keys exceeded maxTotalMergeKeys ("+c.maxTotalMergeKeys+")"),i.call(S,z)||(K(S,z,A[z]),P[z]=!0)}}function Oe(c,S,A,P,j,q,m,z,M){if(Array.isArray(j)){j=Array.prototype.slice.call(j);for(let I=0,N=j.length;I<N;I+=1)Array.isArray(j[I])&&Y(c,"nested arrays are not supported inside keys"),typeof j=="object"&&g(j[I])==="[object Object]"&&(j[I]="[object Object]")}if(typeof j=="object"&&g(j)==="[object Object]"&&(j="[object Object]"),j=String(j),S===null&&(S={}),P==="tag:yaml.org,2002:merge")if(Array.isArray(q))for(let I=0,N=q.length;I<N;I+=1)he(c,S,q[I],A);else he(c,S,q,A);else!c.json&&!i.call(A,j)&&i.call(S,j)&&(c.line=m||c.line,c.lineStart=z||c.lineStart,c.position=M||c.position,Y(c,"duplicated mapping key")),K(S,j,q),delete A[j];return S}function Ge(c){const S=c.input.charCodeAt(c.position);S===10?c.position++:S===13?(c.position++,c.input.charCodeAt(c.position)===10&&c.position++):Y(c,"a line break is expected"),c.line+=1,c.lineStart=c.position,c.firstTabInLine=-1}function ye(c,S,A){let P=0,j=c.input.charCodeAt(c.position);for(;j!==0;){for(;k(j);)j===9&&c.firstTabInLine===-1&&(c.firstTabInLine=c.position),j=c.input.charCodeAt(++c.position);if(S&&j===35)do j=c.input.charCodeAt(++c.position);while(j!==10&&j!==13&&j!==0);if(y(j))for(Ge(c),j=c.input.charCodeAt(c.position),P++,c.lineIndent=0;j===32;)c.lineIndent++,j=c.input.charCodeAt(++c.position);else break}return A!==-1&&P!==0&&c.lineIndent<A&&ke(c,"deficient indentation"),P}function hn(c){let S=c.position,A=c.input.charCodeAt(S);return!!((A===45||A===46)&&A===c.input.charCodeAt(S+1)&&A===c.input.charCodeAt(S+2)&&(S+=3,A=c.input.charCodeAt(S),A===0||T(A)))}function an(c,S){S===1?c.result+=" ":S>1&&(c.result+=e.repeat(`
`,S-1))}function tr(c,S,A){let P,j,q,m,z,M;const I=c.kind,N=c.result;let D=c.input.charCodeAt(c.position);if(T(D)||R(D)||D===35||D===38||D===42||D===33||D===124||D===62||D===39||D===34||D===37||D===64||D===96)return!1;if(D===63||D===45){const F=c.input.charCodeAt(c.position+1);if(T(F)||A&&R(F))return!1}for(c.kind="scalar",c.result="",P=j=c.position,q=!1;D!==0;){if(D===58){const F=c.input.charCodeAt(c.position+1);if(T(F)||A&&R(F))break}else if(D===35){const F=c.input.charCodeAt(c.position-1);if(T(F))break}else{if(c.position===c.lineStart&&hn(c)||A&&R(D))break;if(y(D))if(m=c.line,z=c.lineStart,M=c.lineIndent,ye(c,!1,-1),c.lineIndent>=S){q=!0,D=c.input.charCodeAt(c.position);continue}else{c.position=j,c.line=m,c.lineStart=z,c.lineIndent=M;break}}q&&(Se(c,P,j,!1),an(c,c.line-m),P=j=c.position,q=!1),k(D)||(j=c.position+1),D=c.input.charCodeAt(++c.position)}return Se(c,P,j,!1),c.result?!0:(c.kind=I,c.result=N,!1)}function rr(c,S){let A,P,j=c.input.charCodeAt(c.position);if(j!==39)return!1;for(c.kind="scalar",c.result="",c.position++,A=P=c.position;(j=c.input.charCodeAt(c.position))!==0;)if(j===39)if(Se(c,A,c.position,!0),j=c.input.charCodeAt(++c.position),j===39)A=c.position,c.position++,P=c.position;else return!0;else y(j)?(Se(c,A,P,!0),an(c,ye(c,!1,S)),A=P=c.position):c.position===c.lineStart&&hn(c)?Y(c,"unexpected end of the document within a single quoted scalar"):(c.position++,k(j)||(P=c.position));Y(c,"unexpected end of the stream within a single quoted scalar")}function It(c,S){let A,P,j,q=c.input.charCodeAt(c.position);if(q!==34)return!1;for(c.kind="scalar",c.result="",c.position++,A=P=c.position;(q=c.input.charCodeAt(c.position))!==0;){if(q===34)return Se(c,A,c.position,!0),c.position++,!0;if(q===92){if(Se(c,A,c.position,!0),q=c.input.charCodeAt(++c.position),y(q))ye(c,!1,S);else if(q<256&&Z[q])c.result+=ue[q],c.position++;else if((j=B(q))>0){let m=j,z=0;for(;m>0;m--)q=c.input.charCodeAt(++c.position),(j=C(q))>=0?z=(z<<4)+j:Y(c,"expected hexadecimal character");c.result+=E(z),c.position++}else Y(c,"unknown escape sequence");A=P=c.position}else y(q)?(Se(c,A,P,!0),an(c,ye(c,!1,S)),A=P=c.position):c.position===c.lineStart&&hn(c)?Y(c,"unexpected end of the document within a double quoted scalar"):(c.position++,k(q)||(P=c.position))}Y(c,"unexpected end of the stream within a double quoted scalar")}function Nt(c,S){let A=!0,P,j,q;const m=c.tag;let z;const M=c.anchor;let I,N,D,F;const J=Object.create(null);let X,ne,re,de=c.input.charCodeAt(c.position);if(de===91)I=93,F=!1,z=[];else if(de===123)I=125,F=!0,z={};else return!1;for(c.anchor!==null&&W(c,c.anchor,z),de=c.input.charCodeAt(++c.position);de!==0;){if(ye(c,!0,S),de=c.input.charCodeAt(c.position),de===I)return c.position++,c.tag=m,c.anchor=M,c.kind=F?"mapping":"sequence",c.result=z,!0;if(A?de===44&&Y(c,"expected the node content, but found ','"):Y(c,"missed comma between flow collection entries"),ne=X=re=null,N=D=!1,de===63){const Ce=c.input.charCodeAt(c.position+1);T(Ce)&&(N=D=!0,c.position++,ye(c,!0,S))}P=c.line,j=c.lineStart,q=c.position,Pn(c,S,l,!1,!0),ne=c.tag,X=c.result,ye(c,!0,S),de=c.input.charCodeAt(c.position),(D||c.line===P)&&de===58&&(N=!0,de=c.input.charCodeAt(++c.position),ye(c,!0,S),Pn(c,S,l,!1,!0),re=c.result),F?Oe(c,z,J,ne,X,re,P,j,q):N?z.push(Oe(c,null,J,ne,X,re,P,j,q)):z.push(X),ye(c,!0,S),de=c.input.charCodeAt(c.position),de===44?(A=!0,de=c.input.charCodeAt(++c.position)):A=!1}Y(c,"unexpected end of the stream within a flow collection")}function Lt(c,S){let A,P=s,j=!1,q=!1,m=S,z=0,M=!1,I,N=c.input.charCodeAt(c.position);if(N===124)A=!1;else if(N===62)A=!0;else return!1;for(c.kind="scalar",c.result="";N!==0;)if(N=c.input.charCodeAt(++c.position),N===43||N===45)s===P?P=N===43?f:d:Y(c,"repeat of a chomping mode identifier");else if((I=V(N))>=0)I===0?Y(c,"bad explicit indentation width of a block scalar; it cannot be less than one"):q?Y(c,"repeat of an indentation width identifier"):(m=S+I-1,q=!0);else break;if(k(N)){do N=c.input.charCodeAt(++c.position);while(k(N));if(N===35)do N=c.input.charCodeAt(++c.position);while(!y(N)&&N!==0)}for(;N!==0;){for(Ge(c),c.lineIndent=0,N=c.input.charCodeAt(c.position);(!q||c.lineIndent<m)&&N===32;)c.lineIndent++,N=c.input.charCodeAt(++c.position);if(!q&&c.lineIndent>m&&(m=c.lineIndent),y(N)){z++;continue}if(!q&&m===0&&Y(c,"missing indentation for block scalar"),c.lineIndent<m){P===f?c.result+=e.repeat(`
`,j?1+z:z):P===s&&j&&(c.result+=`
`);break}A?k(N)?(M=!0,c.result+=e.repeat(`
`,j?1+z:z)):M?(M=!1,c.result+=e.repeat(`
`,z+1)):z===0?j&&(c.result+=" "):c.result+=e.repeat(`
`,z):c.result+=e.repeat(`
`,j?1+z:z),j=!0,q=!0,z=0;const D=c.position;for(;!y(N)&&N!==0;)N=c.input.charCodeAt(++c.position);Se(c,D,c.position,!1)}return!0}function Sn(c,S){const A=c.tag,P=c.anchor,j=[];let q=!1;if(c.firstTabInLine!==-1)return!1;c.anchor!==null&&W(c,c.anchor,j);let m=c.input.charCodeAt(c.position);for(;m!==0&&(c.firstTabInLine!==-1&&(c.position=c.firstTabInLine,Y(c,"tab characters must not be used in indentation")),m===45);){const z=c.input.charCodeAt(c.position+1);if(!T(z))break;if(q=!0,c.position++,ye(c,!0,-1)&&c.lineIndent<=S){j.push(null),m=c.input.charCodeAt(c.position);continue}const M=c.line;if(Pn(c,S,o,!1,!0),j.push(c.result),ye(c,!0,-1),m=c.input.charCodeAt(c.position),(c.line===M||c.lineIndent>S)&&m!==0)Y(c,"bad indentation of a sequence entry");else if(c.lineIndent<S)break}return q?(c.tag=A,c.anchor=P,c.kind="sequence",c.result=j,!0):!1}function ir(c,S,A){let P,j,q,m;const z=c.tag,M=c.anchor,I={},N=Object.create(null);let D=null,F=null,J=null,X=!1,ne=!1;if(c.firstTabInLine!==-1)return!1;c.anchor!==null&&W(c,c.anchor,I);let re=c.input.charCodeAt(c.position);for(;re!==0;){!X&&c.firstTabInLine!==-1&&(c.position=c.firstTabInLine,Y(c,"tab characters must not be used in indentation"));const de=c.input.charCodeAt(c.position+1),Ce=c.line;if((re===63||re===58)&&T(de))re===63?(X&&(Oe(c,I,N,D,F,null,j,q,m),D=F=J=null),ne=!0,X=!0,P=!0):X?(X=!1,P=!0):Y(c,"incomplete explicit mapping pair; a key node is missed; or followed by a non-tabulated empty line"),c.position+=1,re=de;else{if(j=c.line,q=c.lineStart,m=c.position,!Pn(c,A,a,!1,!0))break;if(c.line===Ce){for(re=c.input.charCodeAt(c.position);k(re);)re=c.input.charCodeAt(++c.position);if(re===58)re=c.input.charCodeAt(++c.position),T(re)||Y(c,"a whitespace character is expected after the key-value separator within a block mapping"),X&&(Oe(c,I,N,D,F,null,j,q,m),D=F=J=null),ne=!0,X=!1,P=!1,D=c.tag,F=c.result;else if(ne)Y(c,"can not read an implicit mapping pair; a colon is missed");else return c.tag=z,c.anchor=M,!0}else if(ne)Y(c,"can not read a block mapping entry; a multiline key may not be an implicit key");else return c.tag=z,c.anchor=M,!0}if((c.line===Ce||c.lineIndent>S)&&(X&&(j=c.line,q=c.lineStart,m=c.position),Pn(c,S,u,!0,P)&&(X?F=c.result:J=c.result),X||(Oe(c,I,N,D,F,J,j,q,m),D=F=J=null),ye(c,!0,-1),re=c.input.charCodeAt(c.position)),(c.line===Ce||c.lineIndent>S)&&re!==0)Y(c,"bad indentation of a mapping entry");else if(c.lineIndent<S)break}return X&&Oe(c,I,N,D,F,null,j,q,m),ne&&(c.tag=z,c.anchor=M,c.kind="mapping",c.result=I),ne}function lr(c){let S=!1,A=!1,P,j,q=c.input.charCodeAt(c.position);if(q!==33)return!1;c.tag!==null&&Y(c,"duplication of a tag property"),q=c.input.charCodeAt(++c.position),q===60?(S=!0,q=c.input.charCodeAt(++c.position)):q===33?(A=!0,P="!!",q=c.input.charCodeAt(++c.position)):P="!";let m=c.position;if(S){do q=c.input.charCodeAt(++c.position);while(q!==0&&q!==62);c.position<c.length?(j=c.input.slice(m,c.position),q=c.input.charCodeAt(++c.position)):Y(c,"unexpected end of the stream within a verbatim tag")}else{for(;q!==0&&!T(q);)q===33&&(A?Y(c,"tag suffix cannot contain exclamation marks"):(P=c.input.slice(m-1,c.position+1),w.test(P)||Y(c,"named tag handle cannot contain such characters"),A=!0,m=c.position+1)),q=c.input.charCodeAt(++c.position);j=c.input.slice(m,c.position),v.test(j)&&Y(c,"tag suffix cannot contain flow indicator characters")}j&&!b.test(j)&&Y(c,"tag name cannot contain such characters: "+j);try{j=decodeURIComponent(j)}catch{Y(c,"tag name is malformed: "+j)}return S?c.tag=j:i.call(c.tagMap,P)?c.tag=c.tagMap[P]+j:P==="!"?c.tag="!"+j:P==="!!"?c.tag="tag:yaml.org,2002:"+j:Y(c,'undeclared tag handle "'+P+'"'),!0}function Ot(c){let S=c.input.charCodeAt(c.position);if(S!==38)return!1;c.anchor!==null&&Y(c,"duplication of an anchor property"),S=c.input.charCodeAt(++c.position);const A=c.position;for(;S!==0&&!T(S)&&!R(S);)S=c.input.charCodeAt(++c.position);return c.position===A&&Y(c,"name of an anchor node must contain at least one character"),c.anchor=c.input.slice(A,c.position),!0}function ar(c){let S=c.input.charCodeAt(c.position);if(S!==42)return!1;S=c.input.charCodeAt(++c.position);const A=c.position;for(;S!==0&&!T(S)&&!R(S);)S=c.input.charCodeAt(++c.position);c.position===A&&Y(c,"name of an alias node must contain at least one character");const P=c.input.slice(A,c.position);return i.call(c.anchorMap,P)||Y(c,'unidentified alias "'+P+'"'),c.result=c.anchorMap[P],ye(c,!0,-1),!0}function Vr(c,S,A,P){const j=pe(c);return te(c),_(c,S),c.tag=null,c.anchor=null,c.kind=null,c.result=null,ir(c,A,P)&&c.kind==="mapping"?(x(c),!0):(se(c),_(c,j),!1)}function Pn(c,S,A,P,j){let q,m,z=1,M=!1,I=!1,N=null,D,F,J;c.depth>=c.maxDepth&&Y(c,"nesting exceeded maxDepth ("+c.maxDepth+")"),c.depth+=1,c.listener!==null&&c.listener("open",c),c.tag=null,c.anchor=null,c.kind=null,c.result=null;const X=q=m=u===A||o===A;if(P&&ye(c,!0,-1)&&(M=!0,c.lineIndent>S?z=1:c.lineIndent===S?z=0:c.lineIndent<S&&(z=-1)),z===1)for(;;){const ne=c.input.charCodeAt(c.position),re=pe(c);if(M&&(ne===33&&c.tag!==null||ne===38&&c.anchor!==null)||!lr(c)&&!Ot(c))break;N===null&&(N=re),ye(c,!0,-1)?(M=!0,m=X,c.lineIndent>S?z=1:c.lineIndent===S?z=0:c.lineIndent<S&&(z=-1)):m=!1}if(m&&(m=M||j),z===1||u===A)if(l===A||a===A?F=S:F=S+1,J=c.position-c.lineStart,z===1)if(m&&(Sn(c,J)||ir(c,J,F))||Nt(c,F))I=!0;else{const ne=c.input.charCodeAt(c.position);N!==null&&X&&!m&&ne!==124&&ne!==62&&Vr(c,N,N.position-N.lineStart,F)||q&&Lt(c,F)||rr(c,F)||It(c,F)?I=!0:ar(c)?(I=!0,(c.tag!==null||c.anchor!==null)&&Y(c,"alias node should not have any properties")):tr(c,F,l===A)&&(I=!0,c.tag===null&&(c.tag="?")),c.anchor!==null&&W(c,c.anchor,c.result)}else z===0&&(I=m&&Sn(c,J));if(c.tag===null)c.anchor!==null&&W(c,c.anchor,c.result);else if(c.tag==="?"){c.result!==null&&c.kind!=="scalar"&&Y(c,'unacceptable node kind for !<?> tag; it should be "scalar", not "'+c.kind+'"');for(let ne=0,re=c.implicitTypes.length;ne<re;ne+=1)if(D=c.implicitTypes[ne],D.resolve(c.result)){c.result=D.construct(c.result),c.tag=D.tag,c.anchor!==null&&W(c,c.anchor,c.result);break}}else if(c.tag!=="!"){if(i.call(c.typeMap[c.kind||"fallback"],c.tag))D=c.typeMap[c.kind||"fallback"][c.tag];else{D=null;const ne=c.typeMap.multi[c.kind||"fallback"];for(let re=0,de=ne.length;re<de;re+=1)if(c.tag.slice(0,ne[re].tag.length)===ne[re].tag){D=ne[re];break}}D||Y(c,"unknown tag !<"+c.tag+">"),c.result!==null&&D.kind!==c.kind&&Y(c,"unacceptable node kind for !<"+c.tag+'> tag; it should be "'+D.kind+'", not "'+c.kind+'"'),D.resolve(c.result,c.tag)?(c.result=D.construct(c.result,c.tag),c.anchor!==null&&W(c,c.anchor,c.result)):Y(c,"cannot resolve a node with !<"+c.tag+"> explicit tag")}return c.listener!==null&&c.listener("close",c),c.depth-=1,c.tag!==null||c.anchor!==null||I}function Wr(c){const S=c.position;let A=!1,P;for(c.version=null,c.checkLineBreaks=c.legacy,c.tagMap=Object.create(null),c.anchorMap=Object.create(null);(P=c.input.charCodeAt(c.position))!==0&&(ye(c,!0,-1),P=c.input.charCodeAt(c.position),!(c.lineIndent>0||P!==37));){A=!0,P=c.input.charCodeAt(++c.position);let j=c.position;for(;P!==0&&!T(P);)P=c.input.charCodeAt(++c.position);const q=c.input.slice(j,c.position),m=[];for(q.length<1&&Y(c,"directive name must not be less than one character in length");P!==0;){for(;k(P);)P=c.input.charCodeAt(++c.position);if(P===35){do P=c.input.charCodeAt(++c.position);while(P!==0&&!y(P));break}if(y(P))break;for(j=c.position;P!==0&&!T(P);)P=c.input.charCodeAt(++c.position);m.push(c.input.slice(j,c.position))}P!==0&&Ge(c),i.call(Te,q)?Te[q](c,q,m):ke(c,'unknown document directive "'+q+'"')}if(ye(c,!0,-1),c.lineIndent===0&&c.input.charCodeAt(c.position)===45&&c.input.charCodeAt(c.position+1)===45&&c.input.charCodeAt(c.position+2)===45?(c.position+=3,ye(c,!0,-1)):A&&Y(c,"directives end mark is expected"),Pn(c,c.lineIndent-1,u,!1,!0),ye(c,!0,-1),c.checkLineBreaks&&h.test(c.input.slice(S,c.position))&&ke(c,"non-ASCII line breaks are interpreted as content"),c.documents.push(c.result),c.position===c.lineStart&&hn(c)){c.input.charCodeAt(c.position)===46&&(c.position+=3,ye(c,!0,-1));return}c.position<c.length-1&&Y(c,"end of the stream or a document separator is expected")}function or(c,S){c=String(c),S=S||{},c.length!==0&&(c.charCodeAt(c.length-1)!==10&&c.charCodeAt(c.length-1)!==13&&(c+=`
`),c.charCodeAt(0)===65279&&(c=c.slice(1)));const A=new le(c,S),P=c.indexOf("\0");for(P!==-1&&(A.position=P,Y(A,"null byte is not allowed in input")),A.input+="\0";A.input.charCodeAt(A.position)===32;)A.lineIndent+=1,A.position+=1;for(;A.position<A.length-1;)Wr(A);return A.documents}function L(c,S,A){S!==null&&typeof S=="object"&&typeof A>"u"&&(A=S,S=null);const P=or(c,A);if(typeof S!="function")return P;for(let j=0,q=P.length;j<q;j+=1)S(P[j])}function Q(c,S){const A=or(c,S);if(A.length!==0){if(A.length===1)return A[0];throw new n("expected a single document in the stream, but found more")}}return ml.loadAll=L,ml.load=Q,ml}var No={},hd;function Bk(){if(hd)return No;hd=1;const e=Qi(),n=Yi(),t=ic(),r=Object.prototype.toString,i=Object.prototype.hasOwnProperty,l=65279,a=9,o=10,u=13,s=32,d=33,f=34,p=35,h=37,v=38,w=39,b=42,g=44,y=45,k=58,T=61,R=62,C=63,B=64,V=91,ee=93,E=96,K=123,Z=124,ue=125,le={};le[0]="\\0",le[7]="\\a",le[8]="\\b",le[9]="\\t",le[10]="\\n",le[11]="\\v",le[12]="\\f",le[13]="\\r",le[27]="\\e",le[34]='\\"',le[92]="\\\\",le[133]="\\N",le[160]="\\_",le[8232]="\\L",le[8233]="\\P";const oe=["y","Y","yes","Yes","YES","on","On","ON","n","N","no","No","NO","off","Off","OFF"],Y=/^[-+]?[0-9_]+(?::[0-9_]+)+(?:\.[0-9_]*)?$/;function ke(m,z){if(z===null)return{};const M={},I=Object.keys(z);for(let N=0,D=I.length;N<D;N+=1){let F=I[N],J=String(z[F]);F.slice(0,2)==="!!"&&(F="tag:yaml.org,2002:"+F.slice(2));const X=m.compiledTypeMap.fallback[F];X&&i.call(X.styleAliases,J)&&(J=X.styleAliases[J]),M[F]=J}return M}function W(m){let z,M;const I=m.toString(16).toUpperCase();if(m<=255)z="x",M=2;else if(m<=65535)z="u",M=4;else if(m<=4294967295)z="U",M=8;else throw new n("code point within a string may not be greater than 0xFFFFFFFF");return"\\"+z+e.repeat("0",M-I.length)+I}const te=1,x=2;function se(m){this.schema=m.schema||t,this.indent=Math.max(1,m.indent||2),this.noArrayIndent=m.noArrayIndent||!1,this.skipInvalid=m.skipInvalid||!1,this.flowLevel=e.isNothing(m.flowLevel)?-1:m.flowLevel,this.styleMap=ke(this.schema,m.styles||null),this.sortKeys=m.sortKeys||!1,this.lineWidth=m.lineWidth||80,this.noRefs=m.noRefs||!1,this.noCompatMode=m.noCompatMode||!1,this.condenseFlow=m.condenseFlow||!1,this.quotingType=m.quotingType==='"'?x:te,this.forceQuotes=m.forceQuotes||!1,this.replacer=typeof m.replacer=="function"?m.replacer:null,this.implicitTypes=this.schema.compiledImplicit,this.explicitTypes=this.schema.compiledExplicit,this.tag=null,this.result="",this.duplicates=[],this.usedDuplicates=null}function pe(m,z){const M=e.repeat(" ",z);let I=0,N="";const D=m.length;for(;I<D;){let F;const J=m.indexOf(`
`,I);J===-1?(F=m.slice(I),I=D):(F=m.slice(I,J+1),I=J+1),F.length&&F!==`
`&&(N+=M),N+=F}return N}function _(m,z){return`
`+e.repeat(" ",m.indent*z)}function Te(m,z){for(let M=0,I=m.implicitTypes.length;M<I;M+=1)if(m.implicitTypes[M].resolve(z))return!0;return!1}function Se(m){return m===s||m===a}function he(m){return m>=32&&m<=126||m>=161&&m<=55295&&m!==8232&&m!==8233||m>=57344&&m<=65533&&m!==l||m>=65536&&m<=1114111}function Oe(m){return he(m)&&m!==l&&m!==u&&m!==o}function Ge(m,z,M){const I=Oe(m),N=I&&!Se(m);return(M?I:I&&m!==g&&m!==V&&m!==ee&&m!==K&&m!==ue)&&m!==p&&!(z===k&&!N)||Oe(z)&&!Se(z)&&m===p||z===k&&N}function ye(m){return he(m)&&m!==l&&!Se(m)&&m!==y&&m!==C&&m!==k&&m!==g&&m!==V&&m!==ee&&m!==K&&m!==ue&&m!==p&&m!==v&&m!==b&&m!==d&&m!==Z&&m!==T&&m!==R&&m!==w&&m!==f&&m!==h&&m!==B&&m!==E}function hn(m){return!Se(m)&&m!==k}function an(m,z){const M=m.charCodeAt(z);let I;return M>=55296&&M<=56319&&z+1<m.length&&(I=m.charCodeAt(z+1),I>=56320&&I<=57343)?(M-55296)*1024+I-56320+65536:M}function tr(m){return/^\n* /.test(m)}const rr=1,It=2,Nt=3,Lt=4,Sn=5;function ir(m,z,M,I,N,D,F,J){let X,ne=0,re=null,de=!1,Ce=!1;const bc=I!==-1;let Qr=-1,Yr=ye(an(m,0))&&hn(an(m,m.length-1));if(z||F)for(X=0;X<m.length;ne>=65536?X+=2:X++){if(ne=an(m,X),!he(ne))return Sn;Yr=Yr&&Ge(ne,re,J),re=ne}else{for(X=0;X<m.length;ne>=65536?X+=2:X++){if(ne=an(m,X),ne===o)de=!0,bc&&(Ce=Ce||X-Qr-1>I&&m[Qr+1]!==" ",Qr=X);else if(!he(ne))return Sn;Yr=Yr&&Ge(ne,re,J),re=ne}Ce=Ce||bc&&X-Qr-1>I&&m[Qr+1]!==" "}return!de&&!Ce?Yr&&!F&&!N(m)?rr:D===x?Sn:It:M>9&&tr(m)?Sn:F?D===x?Sn:It:Ce?Lt:Nt}function lr(m,z,M,I,N){m.dump=function(){if(z.length===0)return m.quotingType===x?'""':"''";if(!m.noCompatMode&&(oe.indexOf(z)!==-1||Y.test(z)))return m.quotingType===x?'"'+z+'"':"'"+z+"'";const D=m.indent*Math.max(1,M),F=m.lineWidth===-1?-1:Math.max(Math.min(m.lineWidth,40),m.lineWidth-D),J=I||m.flowLevel>-1&&M>=m.flowLevel;function X(ne){return Te(m,ne)}switch(ir(z,J,m.indent,F,X,m.quotingType,m.forceQuotes&&!I,N)){case rr:return z;case It:return"'"+z.replace(/'/g,"''")+"'";case Nt:return"|"+Ot(z,m.indent)+ar(pe(z,D));case Lt:return">"+Ot(z,m.indent)+ar(pe(Vr(z,F),D));case Sn:return'"'+Wr(z)+'"';default:throw new n("impossible error: invalid scalar style")}}()}function Ot(m,z){const M=tr(m)?String(z):"",I=m[m.length-1]===`
`,D=I&&(m[m.length-2]===`
`||m===`
`)?"+":I?"":"-";return M+D+`
`}function ar(m){return m[m.length-1]===`
`?m.slice(0,-1):m}function Vr(m,z){const M=/(\n+)([^\n]*)/g;let I=function(){let J=m.indexOf(`
`);return J=J!==-1?J:m.length,M.lastIndex=J,Pn(m.slice(0,J),z)}(),N=m[0]===`
`||m[0]===" ",D,F;for(;F=M.exec(m);){const J=F[1],X=F[2];D=X[0]===" ",I+=J+(!N&&!D&&X!==""?`
`:"")+Pn(X,z),N=D}return I}function Pn(m,z){if(m===""||m[0]===" ")return m;const M=/ [^ ]/g;let I,N=0,D,F=0,J=0,X="";for(;I=M.exec(m);)J=I.index,J-N>z&&(D=F>N?F:J,X+=`
`+m.slice(N,D),N=D+1),F=J;return X+=`
`,m.length-N>z&&F>N?X+=m.slice(N,F)+`
`+m.slice(F+1):X+=m.slice(N),X.slice(1)}function Wr(m){let z="",M=0;for(let I=0;I<m.length;M>=65536?I+=2:I++){M=an(m,I);const N=le[M];!N&&he(M)?(z+=m[I],M>=65536&&(z+=m[I+1])):z+=N||W(M)}return z}function or(m,z,M){let I="";const N=m.tag;for(let D=0,F=M.length;D<F;D+=1){let J=M[D];m.replacer&&(J=m.replacer.call(M,String(D),J)),(A(m,z,J,!1,!1)||typeof J>"u"&&A(m,z,null,!1,!1))&&(I!==""&&(I+=","+(m.condenseFlow?"":" ")),I+=m.dump)}m.tag=N,m.dump="["+I+"]"}function L(m,z,M,I){let N="";const D=m.tag;for(let F=0,J=M.length;F<J;F+=1){let X=M[F];m.replacer&&(X=m.replacer.call(M,String(F),X)),(A(m,z+1,X,!0,!0,!1,!0)||typeof X>"u"&&A(m,z+1,null,!0,!0,!1,!0))&&((!I||N!=="")&&(N+=_(m,z)),m.dump&&o===m.dump.charCodeAt(0)?N+="-":N+="- ",N+=m.dump)}m.tag=D,m.dump=N||"[]"}function Q(m,z,M){let I="";const N=m.tag,D=Object.keys(M);for(let F=0,J=D.length;F<J;F+=1){let X="";I!==""&&(X+=", "),m.condenseFlow&&(X+='"');const ne=D[F];let re=M[ne];m.replacer&&(re=m.replacer.call(M,ne,re)),A(m,z,ne,!1,!1)&&(m.dump.length>1024&&(X+="? "),X+=m.dump+(m.condenseFlow?'"':"")+":"+(m.condenseFlow?"":" "),A(m,z,re,!1,!1)&&(X+=m.dump,I+=X))}m.tag=N,m.dump="{"+I+"}"}function c(m,z,M,I){let N="";const D=m.tag,F=Object.keys(M);if(m.sortKeys===!0)F.sort();else if(typeof m.sortKeys=="function")F.sort(m.sortKeys);else if(m.sortKeys)throw new n("sortKeys must be a boolean or a function");for(let J=0,X=F.length;J<X;J+=1){let ne="";(!I||N!=="")&&(ne+=_(m,z));const re=F[J];let de=M[re];if(m.replacer&&(de=m.replacer.call(M,re,de)),!A(m,z+1,re,!0,!0,!0))continue;const Ce=m.tag!==null&&m.tag!=="?"||m.dump&&m.dump.length>1024;Ce&&(m.dump&&o===m.dump.charCodeAt(0)?ne+="?":ne+="? "),ne+=m.dump,Ce&&(ne+=_(m,z)),A(m,z+1,de,!0,Ce)&&(m.dump&&o===m.dump.charCodeAt(0)?ne+=":":ne+=": ",ne+=m.dump,N+=ne)}m.tag=D,m.dump=N||"{}"}function S(m,z,M){const I=M?m.explicitTypes:m.implicitTypes;for(let N=0,D=I.length;N<D;N+=1){const F=I[N];if((F.instanceOf||F.predicate)&&(!F.instanceOf||typeof z=="object"&&z instanceof F.instanceOf)&&(!F.predicate||F.predicate(z))){if(M?F.multi&&F.representName?m.tag=F.representName(z):m.tag=F.tag:m.tag="?",F.represent){const J=m.styleMap[F.tag]||F.defaultStyle;let X;if(r.call(F.represent)==="[object Function]")X=F.represent(z,J);else if(i.call(F.represent,J))X=F.represent[J](z,J);else throw new n("!<"+F.tag+'> tag resolver accepts not "'+J+'" style');m.dump=X}return!0}}return!1}function A(m,z,M,I,N,D,F){m.tag=null,m.dump=M,S(m,M,!1)||S(m,M,!0);const J=r.call(m.dump),X=I;I&&(I=m.flowLevel<0||m.flowLevel>z);const ne=J==="[object Object]"||J==="[object Array]";let re,de;if(ne&&(re=m.duplicates.indexOf(M),de=re!==-1),(m.tag!==null&&m.tag!=="?"||de||m.indent!==2&&z>0)&&(N=!1),de&&m.usedDuplicates[re])m.dump="*ref_"+re;else{if(ne&&de&&!m.usedDuplicates[re]&&(m.usedDuplicates[re]=!0),J==="[object Object]")I&&Object.keys(m.dump).length!==0?(c(m,z,m.dump,N),de&&(m.dump="&ref_"+re+m.dump)):(Q(m,z,m.dump),de&&(m.dump="&ref_"+re+" "+m.dump));else if(J==="[object Array]")I&&m.dump.length!==0?(m.noArrayIndent&&!F&&z>0?L(m,z-1,m.dump,N):L(m,z,m.dump,N),de&&(m.dump="&ref_"+re+m.dump)):(or(m,z,m.dump),de&&(m.dump="&ref_"+re+" "+m.dump));else if(J==="[object String]")m.tag!=="?"&&lr(m,m.dump,z,D,X);else{if(J==="[object Undefined]")return!1;if(m.skipInvalid)return!1;throw new n("unacceptable kind of an object to dump "+J)}if(m.tag!==null&&m.tag!=="?"){let Ce=encodeURI(m.tag[0]==="!"?m.tag.slice(1):m.tag).replace(/!/g,"%21");m.tag[0]==="!"?Ce="!"+Ce:Ce.slice(0,18)==="tag:yaml.org,2002:"?Ce="!!"+Ce.slice(18):Ce="!<"+Ce+">",m.dump=Ce+" "+m.dump}}return!0}function P(m,z){const M=[],I=[];j(m,M,I);const N=I.length;for(let D=0;D<N;D+=1)z.duplicates.push(M[I[D]]);z.usedDuplicates=new Array(N)}function j(m,z,M){if(m!==null&&typeof m=="object"){const I=z.indexOf(m);if(I!==-1)M.indexOf(I)===-1&&M.push(I);else if(z.push(m),Array.isArray(m))for(let N=0,D=m.length;N<D;N+=1)j(m[N],z,M);else{const N=Object.keys(m);for(let D=0,F=N.length;D<F;D+=1)j(m[N[D]],z,M)}}}function q(m,z){z=z||{};const M=new se(z);M.noRefs||P(m,M);let I=m;return M.replacer&&(I=M.replacer.call({"":I},"",I)),A(M,0,I,!0,!0)?M.dump+`
`:""}return No.dump=q,No}var md;function Uk(){if(md)return Qe;md=1;const e=Dk(),n=Bk();function t(r,i){return function(){throw new Error("Function yaml."+r+" is removed in js-yaml 4. Use yaml."+i+" instead, which is now safe by default.")}}return Qe.Type=ln(),Qe.Schema=Vm(),Qe.FAILSAFE_SCHEMA=Km(),Qe.JSON_SCHEMA=eg(),Qe.CORE_SCHEMA=ng(),Qe.DEFAULT_SCHEMA=ic(),Qe.load=e.load,Qe.loadAll=e.loadAll,Qe.dump=n.dump,Qe.YAMLException=Yi(),Qe.types={binary:ig(),float:Zm(),map:Ym(),null:Xm(),pairs:ag(),set:og(),timestamp:tg(),bool:Jm(),int:Gm(),merge:rg(),omap:lg(),seq:Qm(),str:Wm()},Qe.safeLoad=t("safeLoad","load"),Qe.safeLoadAll=t("safeLoadAll","loadAll"),Qe.safeDump=t("safeDump","dump"),Qe}var Hk=Uk();const ug=qk(Hk),{Type:eE,Schema:nE,FAILSAFE_SCHEMA:tE,JSON_SCHEMA:rE,CORE_SCHEMA:iE,DEFAULT_SCHEMA:lE,load:aE,loadAll:oE,dump:uE,YAMLException:sE,types:cE,safeLoad:fE,safeLoadAll:dE,safeDump:pE}=ug,$k=Object.assign({"../content/connection/auth.md":rk,"../content/connection/format.md":ik,"../content/methods/countries-list.md":lk,"../content/methods/get-rate.md":ak,"../content/methods/login.md":ok,"../content/methods/providers.md":uk,"../content/methods/sender-create.md":sk,"../content/methods/sender-info-update.md":ck,"../content/methods/services.md":fk,"../content/methods/transfer-check.md":dk,"../content/methods/transfer-confirm.md":pk,"../content/methods/transfer-create-korea.md":hk,"../content/methods/transfer-create-mts-to-card.md":mk,"../content/methods/transfer-create-rf-mts.md":gk,"../content/methods/transfer-create-rf-tcb.md":yk,"../content/methods/transfer-create-topup-rf-banks.md":vk,"../content/methods/transfer-create-turkey.md":kk,"../content/methods/transfer-create-unionpay.md":xk,"../content/methods/transfer-create-uzcard-humo-a2c.md":wk,"../content/methods/transfer-create-uzcard-payment.md":_k,"../content/methods/transfer-create-visa-direct.md":Sk,"../content/methods/transfer-create-wallet-payment.md":Ck,"../content/methods/transfer-create-wallet-to-card.md":bk,"../content/methods/transfer-create.md":Ek,"../content/methods/transfer-service.md":Tk,"../content/methods/transfer-state.md":zk,"../content/overview/intro.md":Ak,"../content/overview/terms.md":jk,"../content/payments/payments-categories.md":Pk,"../content/payments/payments-confirm.md":Ik,"../content/payments/payments-create.md":Nk,"../content/payments/payments-info.md":Lk,"../content/payments/payments-providers.md":Ok,"../content/payments/payments-services.md":Rk,"../content/payments/payments-state.md":Mk});function Vk(e){const n=e.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/);return n?{data:ug.load(n[1])||{},body:n[2]}:{data:{},body:e}}function Wk(e){const n=e.split("/");return n[n.length-1].replace(/\.md$/,"")}function Qk(e){const n=e.split("/");return n[n.length-2]}function Yk(e){const n=/```([A-Za-z0-9]*)[ \t]*\r?\n([\s\S]*?)```/g,t=[],r=[];let i;for(;(i=n.exec(e))!==null;){const o=(i[1]||"").toLowerCase(),u=i[2],s=o==="json"||/^\s*[[{]/.test(u),d=/"(result|error)"\s*:/.test(u),f=/"method"\s*:/.test(u)&&/"params"\s*:/.test(u);if(!s||!d||f)continue;let p=i.index;const h=i.index+i[0].length,v=e.slice(0,i.index),w=/^(#{1,6})[ \t]+(.+)$/gm;let b=null,g;for(;(g=w.exec(v))!==null;)b={index:g.index,end:g.index+g[0].length,text:g[2].trim()};let y="Javob";if(b){y=b.text;const k=e.slice(b.end,i.index);/^\s*$/.test(k)&&(p=b.index)}t.push({label:y,code:u.replace(/\s+$/,"")}),r.push([p,h])}if(!r.length)return{body:e,responses:t};r.sort((o,u)=>o[0]-u[0]);let l="",a=0;for(const[o,u]of r)l+=e.slice(a,o),a=u;return l+=e.slice(a),l=l.replace(/\n{3,}/g,`

`).trim(),{body:l,responses:t}}const ua=Object.entries($k).map(([e,n])=>{const{data:t,body:r}=Vk(n),i=t.rpcMethod?Yk(r):{body:r,responses:[]};return{slug:Wk(e),category:Qk(e),body:i.body,responses:i.responses,...t}}).sort((e,n)=>(e.order??0)-(n.order??0)),sg={guide:"Boshlash",api:"API Reference",overview:"Umumiy ma'lumot",connection:"Ulanish",methods:"Metodlar",payments:"Paynet to'lovlari"},gd=["overview","connection","methods","payments","guide","api"];function yd(e){const n=gd.indexOf(e);return n===-1?gd.length:n}function Kk(e){return ua.find(n=>n.slug===e)}function lc(){const e={};for(const n of ua)e[n.category]||(e[n.category]=[]),e[n.category].push(n);return Object.entries(e).map(([n,t])=>({key:n,title:sg[n]||n,items:t})).sort((n,t)=>yd(n.key)-yd(t.key))}function Xk(){return lc().flatMap(e=>e.items)}function Jk(e){const n=Xk(),t=n.findIndex(r=>r.slug===e);return t===-1?{prev:null,next:null}:{prev:t>0?n[t-1]:null,next:t<n.length-1?n[t+1]:null}}const Gk=["login","providers","transfer-create","countries-list"],Zk={overview:Zv,connection:ek,methods:tk,payments:Um};function vd({doc:e,onSelect:n}){const t=Zk[e.category]||Um;return O.jsxs("button",{onClick:()=>n(e.slug),className:"w-full flex items-start gap-3 text-left px-5 py-2.5 hover:bg-gray-50 transition-colors rounded-lg",children:[O.jsx(t,{size:16,className:"text-brand mt-0.5 shrink-0"}),O.jsxs("div",{className:"min-w-0",children:[O.jsx("div",{className:"text-[14px] font-medium text-gray-900 truncate",children:e.title}),O.jsxs("div",{className:"text-[12px] text-gray-400 truncate",children:[sg[e.category]||e.category,e.rpcMethod?` · ${e.rpcMethod}`:""]})]})]})}function ex({open:e,onClose:n}){const[t,r]=U.useState(""),i=U.useRef(null),l=rc();U.useEffect(()=>{if(e){r(""),setTimeout(()=>{var f;return(f=i.current)==null?void 0:f.focus()},0);const d=document.body.style.overflow;return document.body.style.overflow="hidden",()=>{document.body.style.overflow=d}}},[e]),U.useEffect(()=>{function d(f){f.key==="Escape"&&n()}return e&&document.addEventListener("keydown",d),()=>document.removeEventListener("keydown",d)},[e,n]);const a=U.useMemo(()=>{const d=t.trim().toLowerCase();return d?ua.filter(f=>`${f.title} ${f.body} ${f.rpcMethod||""}`.toLowerCase().includes(d)).slice(0,8):[]},[t]),o=U.useMemo(()=>Gk.map(d=>ua.find(f=>f.slug===d)).filter(Boolean),[]);if(!e)return null;const u=d=>{l(`/docs/${d}`),n()},s=t.trim().length>0;return O.jsx("div",{className:"fixed inset-0 z-50 bg-black/40",onClick:n,children:O.jsxs("div",{className:"grid grid-cols-3 items-start px-4 md:px-6 h-14",children:[O.jsx("div",{}),O.jsx("div",{className:"mx-auto w-full max-w-xl mt-1.5",onClick:d=>d.stopPropagation(),children:O.jsxs("div",{className:"bg-white rounded-2xl shadow-2xl overflow-hidden",children:[O.jsxs("div",{className:"flex items-center gap-3 px-5 py-4 border-b border-gray-100",children:[O.jsx(Hm,{size:18,className:"text-gray-400 shrink-0"}),O.jsx("input",{ref:i,value:t,onChange:d=>r(d.target.value),placeholder:"Docs bo'yicha qidiring yoki savol bering",className:"flex-1 text-[15px] outline-none placeholder:text-gray-400"}),O.jsx("button",{onClick:n,className:"text-gray-400 hover:text-gray-600 shrink-0",children:O.jsx($m,{size:18})})]}),O.jsx("div",{className:"max-h-[60vh] overflow-y-auto py-3",children:s?a.length===0?O.jsx("p",{className:"px-5 py-8 text-center text-[13px] text-gray-400",children:"Hech narsa topilmadi"}):O.jsxs(O.Fragment,{children:[O.jsx("p",{className:"px-5 pb-1 text-[11px] font-semibold text-gray-400 uppercase tracking-wide",children:"Natijalar"}),a.map(d=>O.jsx(vd,{doc:d,onSelect:u},d.slug))]}):O.jsxs(O.Fragment,{children:[O.jsx("p",{className:"px-5 pb-1 text-[11px] font-semibold text-gray-400 uppercase tracking-wide",children:"Tavsiya etilgan"}),o.map(d=>O.jsx(vd,{doc:d,onSelect:u},d.slug))]})})]})}),O.jsx("div",{})]})})}function nx({sidebarOpen:e,setSidebarOpen:n}){const[t,r]=U.useState(!1);return U.useEffect(()=>{function i(l){(l.metaKey||l.ctrlKey)&&l.key.toLowerCase()==="k"&&(l.preventDefault(),r(!0))}return document.addEventListener("keydown",i),()=>document.removeEventListener("keydown",i)},[]),O.jsxs("header",{className:"sticky top-0 z-20 bg-white border-b border-gray-200",children:[O.jsxs("div",{className:"grid grid-cols-3 items-center px-4 md:px-6 h-14",children:[O.jsxs("div",{className:"flex items-center gap-3",children:[O.jsx("button",{className:"md:hidden p-1",onClick:()=>n(!e),children:e?O.jsx($m,{size:20}):O.jsx(nk,{size:20})}),O.jsx(oa,{to:"/docs/intro",className:"flex items-center gap-2","aria-label":"Bosh sahifa — Loyiha haqida",children:O.jsx("img",{src:"/logo.png",alt:"Unisoft",className:"h-8 w-auto"})})]}),!t&&O.jsxs("button",{onClick:()=>r(!0),className:"hidden md:flex items-center gap-2 bg-gray-50 border border-gray-200 rounded-lg px-3 py-1.5 w-72 mx-auto hover:border-gray-300 transition-colors",children:[O.jsx(Hm,{size:14,className:"text-gray-400"}),O.jsx("span",{className:"text-[13px] text-gray-400",children:"Qidirish..."}),O.jsx("span",{className:"ml-auto text-[11px] text-gray-400 border border-gray-200 rounded px-1",children:"⌘K"})]}),O.jsx("div",{})]}),O.jsx(ex,{open:t,onClose:()=>r(!1)})]})}function tx({sidebarOpen:e}){const n=lc();return O.jsx("aside",{className:`${e?"block":"hidden"} md:block w-64 shrink-0 border-r border-gray-100 px-4 py-6 sticky top-14 self-start h-[calc(100vh-56px)] overflow-y-auto`,children:n.map(t=>O.jsxs("div",{className:"mb-6",children:[O.jsx("h4",{className:"text-[11px] font-semibold text-gray-400 uppercase tracking-wide mb-2",children:t.title}),O.jsx("ul",{className:"space-y-0.5",children:t.items.map(r=>O.jsx("li",{children:O.jsx(Vv,{to:`/docs/${r.slug}`,className:({isActive:i})=>`block text-[13px] px-2.5 py-1.5 rounded-md transition-colors ${i?"bg-brand/10 text-brand font-medium":"text-gray-600 hover:bg-gray-50"}`,children:r.title})},r.slug))})]},t.key))})}function rx(e,n){const t={};return(e[e.length-1]===""?[...e,""]:e).join((t.padRight?" ":"")+","+(t.padLeft===!1?"":" ")).trim()}const ix=/^[$_\p{ID_Start}][$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,lx=/^[$_\p{ID_Start}][-$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,ax={};function kd(e,n){return(ax.jsx?lx:ix).test(e)}const ox=/[ \t\n\f\r]/g;function ux(e){return typeof e=="object"?e.type==="text"?xd(e.value):!1:xd(e)}function xd(e){return e.replace(ox,"")===""}class Ki{constructor(n,t,r){this.normal=t,this.property=n,r&&(this.space=r)}}Ki.prototype.normal={};Ki.prototype.property={};Ki.prototype.space=void 0;function cg(e,n){const t={},r={};for(const i of e)Object.assign(t,i.property),Object.assign(r,i.normal);return new Ki(t,r,n)}function Qu(e){return e.toLowerCase()}class pn{constructor(n,t){this.attribute=t,this.property=n}}pn.prototype.attribute="";pn.prototype.booleanish=!1;pn.prototype.boolean=!1;pn.prototype.commaOrSpaceSeparated=!1;pn.prototype.commaSeparated=!1;pn.prototype.defined=!1;pn.prototype.mustUseProperty=!1;pn.prototype.number=!1;pn.prototype.overloadedBoolean=!1;pn.prototype.property="";pn.prototype.spaceSeparated=!1;pn.prototype.space=void 0;let sx=0;const ae=nr(),Re=nr(),Yu=nr(),$=nr(),xe=nr(),Wt=nr(),mn=nr();function nr(){return 2**++sx}const Ku=Object.freeze(Object.defineProperty({__proto__:null,boolean:ae,booleanish:Re,commaOrSpaceSeparated:mn,commaSeparated:Wt,number:$,overloadedBoolean:Yu,spaceSeparated:xe},Symbol.toStringTag,{value:"Module"})),Lo=Object.keys(Ku);class ac extends pn{constructor(n,t,r,i){let l=-1;if(super(n,t),wd(this,"space",i),typeof r=="number")for(;++l<Lo.length;){const a=Lo[l];wd(this,Lo[l],(r&Ku[a])===Ku[a])}}}ac.prototype.defined=!0;function wd(e,n,t){t&&(e[n]=t)}function Hr(e){const n={},t={};for(const[r,i]of Object.entries(e.properties)){const l=new ac(r,e.transform(e.attributes||{},r),i,e.space);e.mustUseProperty&&e.mustUseProperty.includes(r)&&(l.mustUseProperty=!0),n[r]=l,t[Qu(r)]=r,t[Qu(l.attribute)]=r}return new Ki(n,t,e.space)}const fg=Hr({properties:{ariaActiveDescendant:null,ariaAtomic:Re,ariaAutoComplete:null,ariaBusy:Re,ariaChecked:Re,ariaColCount:$,ariaColIndex:$,ariaColSpan:$,ariaControls:xe,ariaCurrent:null,ariaDescribedBy:xe,ariaDetails:null,ariaDisabled:Re,ariaDropEffect:xe,ariaErrorMessage:null,ariaExpanded:Re,ariaFlowTo:xe,ariaGrabbed:Re,ariaHasPopup:null,ariaHidden:Re,ariaInvalid:null,ariaKeyShortcuts:null,ariaLabel:null,ariaLabelledBy:xe,ariaLevel:$,ariaLive:null,ariaModal:Re,ariaMultiLine:Re,ariaMultiSelectable:Re,ariaOrientation:null,ariaOwns:xe,ariaPlaceholder:null,ariaPosInSet:$,ariaPressed:Re,ariaReadOnly:Re,ariaRelevant:null,ariaRequired:Re,ariaRoleDescription:xe,ariaRowCount:$,ariaRowIndex:$,ariaRowSpan:$,ariaSelected:Re,ariaSetSize:$,ariaSort:null,ariaValueMax:$,ariaValueMin:$,ariaValueNow:$,ariaValueText:null,role:null},transform(e,n){return n==="role"?n:"aria-"+n.slice(4).toLowerCase()}});function dg(e,n){return n in e?e[n]:n}function pg(e,n){return dg(e,n.toLowerCase())}const cx=Hr({attributes:{acceptcharset:"accept-charset",classname:"class",htmlfor:"for",httpequiv:"http-equiv"},mustUseProperty:["checked","multiple","muted","selected"],properties:{abbr:null,accept:Wt,acceptCharset:xe,accessKey:xe,action:null,allow:null,allowFullScreen:ae,allowPaymentRequest:ae,allowUserMedia:ae,alpha:ae,alt:null,as:null,async:ae,autoCapitalize:null,autoComplete:xe,autoFocus:ae,autoPlay:ae,blocking:xe,capture:null,charSet:null,checked:ae,cite:null,className:xe,closedBy:null,colorSpace:null,cols:$,colSpan:$,command:null,commandFor:null,content:null,contentEditable:Re,controls:ae,controlsList:xe,coords:$|Wt,crossOrigin:null,data:null,dateTime:null,decoding:null,default:ae,defer:ae,dir:null,dirName:null,disabled:ae,download:Yu,draggable:Re,encType:null,enterKeyHint:null,fetchPriority:null,form:null,formAction:null,formEncType:null,formMethod:null,formNoValidate:ae,formTarget:null,headers:xe,height:$,hidden:Yu,high:$,href:null,hrefLang:null,htmlFor:xe,httpEquiv:xe,id:null,imageSizes:null,imageSrcSet:null,inert:ae,inputMode:null,integrity:null,is:null,isMap:ae,itemId:null,itemProp:xe,itemRef:xe,itemScope:ae,itemType:xe,kind:null,label:null,lang:null,language:null,list:null,loading:null,loop:ae,low:$,manifest:null,max:null,maxLength:$,media:null,method:null,min:null,minLength:$,multiple:ae,muted:ae,name:null,nonce:null,noModule:ae,noValidate:ae,onAbort:null,onAfterPrint:null,onAuxClick:null,onBeforeMatch:null,onBeforePrint:null,onBeforeToggle:null,onBeforeUnload:null,onBlur:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onContextLost:null,onContextMenu:null,onContextRestored:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnded:null,onError:null,onFocus:null,onFormData:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLanguageChange:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadEnd:null,onLoadStart:null,onMessage:null,onMessageError:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRejectionHandled:null,onReset:null,onResize:null,onScroll:null,onScrollEnd:null,onSecurityPolicyViolation:null,onSeeked:null,onSeeking:null,onSelect:null,onSlotChange:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnhandledRejection:null,onUnload:null,onVolumeChange:null,onWaiting:null,onWheel:null,open:ae,optimum:$,pattern:null,ping:xe,placeholder:null,playsInline:ae,popover:null,popoverTarget:null,popoverTargetAction:null,poster:null,preload:null,readOnly:ae,referrerPolicy:null,rel:xe,required:ae,reversed:ae,rows:$,rowSpan:$,sandbox:xe,scope:null,scoped:ae,seamless:ae,selected:ae,shadowRootClonable:ae,shadowRootCustomElementRegistry:ae,shadowRootDelegatesFocus:ae,shadowRootMode:null,shadowRootSerializable:ae,shape:null,size:$,sizes:null,slot:null,span:$,spellCheck:Re,src:null,srcDoc:null,srcLang:null,srcSet:null,start:$,step:null,style:null,tabIndex:$,target:null,title:null,translate:null,type:null,typeMustMatch:ae,useMap:null,value:Re,width:$,wrap:null,writingSuggestions:null,align:null,aLink:null,archive:xe,axis:null,background:null,bgColor:null,border:$,borderColor:null,bottomMargin:$,cellPadding:null,cellSpacing:null,char:null,charOff:null,classId:null,clear:null,code:null,codeBase:null,codeType:null,color:null,compact:ae,declare:ae,event:null,face:null,frame:null,frameBorder:null,hSpace:$,leftMargin:$,link:null,longDesc:null,lowSrc:null,marginHeight:$,marginWidth:$,noResize:ae,noHref:ae,noShade:ae,noWrap:ae,object:null,profile:null,prompt:null,rev:null,rightMargin:$,rules:null,scheme:null,scrolling:Re,standby:null,summary:null,text:null,topMargin:$,valueType:null,version:null,vAlign:null,vLink:null,vSpace:$,allowTransparency:null,autoCorrect:null,autoSave:null,credentialless:ae,disablePictureInPicture:ae,disableRemotePlayback:ae,exportParts:Wt,part:xe,prefix:null,property:null,results:$,security:null,unselectable:null},space:"html",transform:pg}),fx=Hr({attributes:{accentHeight:"accent-height",alignmentBaseline:"alignment-baseline",arabicForm:"arabic-form",baselineShift:"baseline-shift",capHeight:"cap-height",className:"class",clipPath:"clip-path",clipRule:"clip-rule",colorInterpolation:"color-interpolation",colorInterpolationFilters:"color-interpolation-filters",colorProfile:"color-profile",colorRendering:"color-rendering",crossOrigin:"crossorigin",dataType:"datatype",dominantBaseline:"dominant-baseline",enableBackground:"enable-background",fillOpacity:"fill-opacity",fillRule:"fill-rule",floodColor:"flood-color",floodOpacity:"flood-opacity",fontFamily:"font-family",fontSize:"font-size",fontSizeAdjust:"font-size-adjust",fontStretch:"font-stretch",fontStyle:"font-style",fontVariant:"font-variant",fontWeight:"font-weight",glyphName:"glyph-name",glyphOrientationHorizontal:"glyph-orientation-horizontal",glyphOrientationVertical:"glyph-orientation-vertical",hrefLang:"hreflang",horizAdvX:"horiz-adv-x",horizOriginX:"horiz-origin-x",horizOriginY:"horiz-origin-y",imageRendering:"image-rendering",letterSpacing:"letter-spacing",lightingColor:"lighting-color",markerEnd:"marker-end",markerMid:"marker-mid",markerStart:"marker-start",maskType:"mask-type",navDown:"nav-down",navDownLeft:"nav-down-left",navDownRight:"nav-down-right",navLeft:"nav-left",navNext:"nav-next",navPrev:"nav-prev",navRight:"nav-right",navUp:"nav-up",navUpLeft:"nav-up-left",navUpRight:"nav-up-right",onAbort:"onabort",onActivate:"onactivate",onAfterPrint:"onafterprint",onBeforePrint:"onbeforeprint",onBegin:"onbegin",onCancel:"oncancel",onCanPlay:"oncanplay",onCanPlayThrough:"oncanplaythrough",onChange:"onchange",onClick:"onclick",onClose:"onclose",onCopy:"oncopy",onCueChange:"oncuechange",onCut:"oncut",onDblClick:"ondblclick",onDrag:"ondrag",onDragEnd:"ondragend",onDragEnter:"ondragenter",onDragExit:"ondragexit",onDragLeave:"ondragleave",onDragOver:"ondragover",onDragStart:"ondragstart",onDrop:"ondrop",onDurationChange:"ondurationchange",onEmptied:"onemptied",onEnd:"onend",onEnded:"onended",onError:"onerror",onFocus:"onfocus",onFocusIn:"onfocusin",onFocusOut:"onfocusout",onHashChange:"onhashchange",onInput:"oninput",onInvalid:"oninvalid",onKeyDown:"onkeydown",onKeyPress:"onkeypress",onKeyUp:"onkeyup",onLoad:"onload",onLoadedData:"onloadeddata",onLoadedMetadata:"onloadedmetadata",onLoadStart:"onloadstart",onMessage:"onmessage",onMouseDown:"onmousedown",onMouseEnter:"onmouseenter",onMouseLeave:"onmouseleave",onMouseMove:"onmousemove",onMouseOut:"onmouseout",onMouseOver:"onmouseover",onMouseUp:"onmouseup",onMouseWheel:"onmousewheel",onOffline:"onoffline",onOnline:"ononline",onPageHide:"onpagehide",onPageShow:"onpageshow",onPaste:"onpaste",onPause:"onpause",onPlay:"onplay",onPlaying:"onplaying",onPopState:"onpopstate",onProgress:"onprogress",onRateChange:"onratechange",onRepeat:"onrepeat",onReset:"onreset",onResize:"onresize",onScroll:"onscroll",onSeeked:"onseeked",onSeeking:"onseeking",onSelect:"onselect",onShow:"onshow",onStalled:"onstalled",onStorage:"onstorage",onSubmit:"onsubmit",onSuspend:"onsuspend",onTimeUpdate:"ontimeupdate",onToggle:"ontoggle",onUnload:"onunload",onVolumeChange:"onvolumechange",onWaiting:"onwaiting",onZoom:"onzoom",overlinePosition:"overline-position",overlineThickness:"overline-thickness",paintOrder:"paint-order",panose1:"panose-1",pointerEvents:"pointer-events",referrerPolicy:"referrerpolicy",renderingIntent:"rendering-intent",shapeRendering:"shape-rendering",stopColor:"stop-color",stopOpacity:"stop-opacity",strikethroughPosition:"strikethrough-position",strikethroughThickness:"strikethrough-thickness",strokeDashArray:"stroke-dasharray",strokeDashOffset:"stroke-dashoffset",strokeLineCap:"stroke-linecap",strokeLineJoin:"stroke-linejoin",strokeMiterLimit:"stroke-miterlimit",strokeOpacity:"stroke-opacity",strokeWidth:"stroke-width",tabIndex:"tabindex",textAnchor:"text-anchor",textDecoration:"text-decoration",textRendering:"text-rendering",transformOrigin:"transform-origin",typeOf:"typeof",underlinePosition:"underline-position",underlineThickness:"underline-thickness",unicodeBidi:"unicode-bidi",unicodeRange:"unicode-range",unitsPerEm:"units-per-em",vAlphabetic:"v-alphabetic",vHanging:"v-hanging",vIdeographic:"v-ideographic",vMathematical:"v-mathematical",vectorEffect:"vector-effect",vertAdvY:"vert-adv-y",vertOriginX:"vert-origin-x",vertOriginY:"vert-origin-y",wordSpacing:"word-spacing",writingMode:"writing-mode",xHeight:"x-height",playbackOrder:"playbackorder",timelineBegin:"timelinebegin"},properties:{about:mn,accentHeight:$,accumulate:null,additive:null,alignmentBaseline:null,alphabetic:$,amplitude:$,arabicForm:null,ascent:$,attributeName:null,attributeType:null,azimuth:$,bandwidth:null,baselineShift:null,baseFrequency:null,baseProfile:null,bbox:null,begin:null,bias:$,by:null,calcMode:null,capHeight:$,className:xe,clip:null,clipPath:null,clipPathUnits:null,clipRule:null,color:null,colorInterpolation:null,colorInterpolationFilters:null,colorProfile:null,colorRendering:null,content:null,contentScriptType:null,contentStyleType:null,crossOrigin:null,cursor:null,cx:null,cy:null,d:null,dataType:null,defaultAction:null,descent:$,diffuseConstant:$,direction:null,display:null,dur:null,divisor:$,dominantBaseline:null,download:ae,dx:null,dy:null,edgeMode:null,editable:null,elevation:$,enableBackground:null,end:null,event:null,exponent:$,externalResourcesRequired:null,fill:null,fillOpacity:$,fillRule:null,filter:null,filterRes:null,filterUnits:null,floodColor:null,floodOpacity:null,focusable:null,focusHighlight:null,fontFamily:null,fontSize:null,fontSizeAdjust:null,fontStretch:null,fontStyle:null,fontVariant:null,fontWeight:null,format:null,fr:null,from:null,fx:null,fy:null,g1:Wt,g2:Wt,glyphName:Wt,glyphOrientationHorizontal:null,glyphOrientationVertical:null,glyphRef:null,gradientTransform:null,gradientUnits:null,handler:null,hanging:$,hatchContentUnits:null,hatchUnits:null,height:null,href:null,hrefLang:null,horizAdvX:$,horizOriginX:$,horizOriginY:$,id:null,ideographic:$,imageRendering:null,initialVisibility:null,in:null,in2:null,intercept:$,k:$,k1:$,k2:$,k3:$,k4:$,kernelMatrix:mn,kernelUnitLength:null,keyPoints:null,keySplines:null,keyTimes:null,kerning:null,lang:null,lengthAdjust:null,letterSpacing:null,lightingColor:null,limitingConeAngle:$,local:null,markerEnd:null,markerMid:null,markerStart:null,markerHeight:null,markerUnits:null,markerWidth:null,mask:null,maskContentUnits:null,maskType:null,maskUnits:null,mathematical:null,max:null,media:null,mediaCharacterEncoding:null,mediaContentEncodings:null,mediaSize:$,mediaTime:null,method:null,min:null,mode:null,name:null,navDown:null,navDownLeft:null,navDownRight:null,navLeft:null,navNext:null,navPrev:null,navRight:null,navUp:null,navUpLeft:null,navUpRight:null,numOctaves:null,observer:null,offset:null,onAbort:null,onActivate:null,onAfterPrint:null,onBeforePrint:null,onBegin:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnd:null,onEnded:null,onError:null,onFocus:null,onFocusIn:null,onFocusOut:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadStart:null,onMessage:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onMouseWheel:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRepeat:null,onReset:null,onResize:null,onScroll:null,onSeeked:null,onSeeking:null,onSelect:null,onShow:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnload:null,onVolumeChange:null,onWaiting:null,onZoom:null,opacity:null,operator:null,order:null,orient:null,orientation:null,origin:null,overflow:null,overlay:null,overlinePosition:$,overlineThickness:$,paintOrder:null,panose1:null,path:null,pathLength:$,patternContentUnits:null,patternTransform:null,patternUnits:null,phase:null,ping:xe,pitch:null,playbackOrder:null,pointerEvents:null,points:null,pointsAtX:$,pointsAtY:$,pointsAtZ:$,preserveAlpha:null,preserveAspectRatio:null,primitiveUnits:null,propagate:null,property:mn,r:null,radius:null,referrerPolicy:null,refX:null,refY:null,rel:mn,rev:mn,renderingIntent:null,repeatCount:null,repeatDur:null,requiredExtensions:mn,requiredFeatures:mn,requiredFonts:mn,requiredFormats:mn,resource:null,restart:null,result:null,rotate:null,rx:null,ry:null,scale:null,seed:null,shapeRendering:null,side:null,slope:null,snapshotTime:null,specularConstant:$,specularExponent:$,spreadMethod:null,spacing:null,startOffset:null,stdDeviation:null,stemh:null,stemv:null,stitchTiles:null,stopColor:null,stopOpacity:null,strikethroughPosition:$,strikethroughThickness:$,string:null,stroke:null,strokeDashArray:mn,strokeDashOffset:null,strokeLineCap:null,strokeLineJoin:null,strokeMiterLimit:$,strokeOpacity:$,strokeWidth:null,style:null,surfaceScale:$,syncBehavior:null,syncBehaviorDefault:null,syncMaster:null,syncTolerance:null,syncToleranceDefault:null,systemLanguage:mn,tabIndex:$,tableValues:null,target:null,targetX:$,targetY:$,textAnchor:null,textDecoration:null,textRendering:null,textLength:null,timelineBegin:null,title:null,transformBehavior:null,type:null,typeOf:mn,to:null,transform:null,transformOrigin:null,u1:null,u2:null,underlinePosition:$,underlineThickness:$,unicode:null,unicodeBidi:null,unicodeRange:null,unitsPerEm:$,values:null,vAlphabetic:$,vMathematical:$,vectorEffect:null,vHanging:$,vIdeographic:$,version:null,vertAdvY:$,vertOriginX:$,vertOriginY:$,viewBox:null,viewTarget:null,visibility:null,width:null,widths:null,wordSpacing:null,writingMode:null,x:null,x1:null,x2:null,xChannelSelector:null,xHeight:$,y:null,y1:null,y2:null,yChannelSelector:null,z:null,zoomAndPan:null},space:"svg",transform:dg}),hg=Hr({properties:{xLinkActuate:null,xLinkArcRole:null,xLinkHref:null,xLinkRole:null,xLinkShow:null,xLinkTitle:null,xLinkType:null},space:"xlink",transform(e,n){return"xlink:"+n.slice(5).toLowerCase()}}),mg=Hr({attributes:{xmlnsxlink:"xmlns:xlink"},properties:{xmlnsXLink:null,xmlns:null},space:"xmlns",transform:pg}),gg=Hr({properties:{xmlBase:null,xmlLang:null,xmlSpace:null},space:"xml",transform(e,n){return"xml:"+n.slice(3).toLowerCase()}}),dx={classId:"classID",dataType:"datatype",itemId:"itemID",strokeDashArray:"strokeDasharray",strokeDashOffset:"strokeDashoffset",strokeLineCap:"strokeLinecap",strokeLineJoin:"strokeLinejoin",strokeMiterLimit:"strokeMiterlimit",typeOf:"typeof",xLinkActuate:"xlinkActuate",xLinkArcRole:"xlinkArcrole",xLinkHref:"xlinkHref",xLinkRole:"xlinkRole",xLinkShow:"xlinkShow",xLinkTitle:"xlinkTitle",xLinkType:"xlinkType",xmlnsXLink:"xmlnsXlink"},px=/[A-Z]/g,_d=/-[a-z]/g,hx=/^data[-\w.:]+$/i;function mx(e,n){const t=Qu(n);let r=n,i=pn;if(t in e.normal)return e.property[e.normal[t]];if(t.length>4&&t.slice(0,4)==="data"&&hx.test(n)){if(n.charAt(4)==="-"){const l=n.slice(5).replace(_d,yx);r="data"+l.charAt(0).toUpperCase()+l.slice(1)}else{const l=n.slice(4);if(!_d.test(l)){let a=l.replace(px,gx);a.charAt(0)!=="-"&&(a="-"+a),n="data"+a}}i=ac}return new i(r,n)}function gx(e){return"-"+e.toLowerCase()}function yx(e){return e.charAt(1).toUpperCase()}const vx=cg([fg,cx,hg,mg,gg],"html"),oc=cg([fg,fx,hg,mg,gg],"svg");function kx(e){return e.join(" ").trim()}var uc={},Sd=/\/\*[^*]*\*+([^/*][^*]*\*+)*\//g,xx=/\n/g,wx=/^\s*/,_x=/^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/,Sx=/^:\s*/,Cx=/^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/,bx=/^[;\s]*/,Ex=/^\s+|\s+$/g,Tx=`
`,Cd="/",bd="*",Dt="",zx="comment",Ax="declaration";function jx(e,n){if(typeof e!="string")throw new TypeError("First argument must be a string");if(!e)return[];n=n||{};var t=1,r=1;function i(v){var w=v.match(xx);w&&(t+=w.length);var b=v.lastIndexOf(Tx);r=~b?v.length-b:r+v.length}function l(){var v={line:t,column:r};return function(w){return w.position=new a(v),s(),w}}function a(v){this.start=v,this.end={line:t,column:r},this.source=n.source}a.prototype.content=e;function o(v){var w=new Error(n.source+":"+t+":"+r+": "+v);if(w.reason=v,w.filename=n.source,w.line=t,w.column=r,w.source=e,!n.silent)throw w}function u(v){var w=v.exec(e);if(w){var b=w[0];return i(b),e=e.slice(b.length),w}}function s(){u(wx)}function d(v){var w;for(v=v||[];w=f();)w!==!1&&v.push(w);return v}function f(){var v=l();if(!(Cd!=e.charAt(0)||bd!=e.charAt(1))){for(var w=2;Dt!=e.charAt(w)&&(bd!=e.charAt(w)||Cd!=e.charAt(w+1));)++w;if(w+=2,Dt===e.charAt(w-1))return o("End of comment missing");var b=e.slice(2,w-2);return r+=2,i(b),e=e.slice(w),r+=2,v({type:zx,comment:b})}}function p(){var v=l(),w=u(_x);if(w){if(f(),!u(Sx))return o("property missing ':'");var b=u(Cx),g=v({type:Ax,property:Ed(w[0].replace(Sd,Dt)),value:b?Ed(b[0].replace(Sd,Dt)):Dt});return u(bx),g}}function h(){var v=[];d(v);for(var w;w=p();)w!==!1&&(v.push(w),d(v));return v}return s(),h()}function Ed(e){return e?e.replace(Ex,Dt):Dt}var Px=jx,Ix=Ll&&Ll.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(uc,"__esModule",{value:!0});uc.default=Lx;const Nx=Ix(Px);function Lx(e,n){let t=null;if(!e||typeof e!="string")return t;const r=(0,Nx.default)(e),i=typeof n=="function";return r.forEach(l=>{if(l.type!=="declaration")return;const{property:a,value:o}=l;i?n(a,o,l):o&&(t=t||{},t[a]=o)}),t}var Ia={};Object.defineProperty(Ia,"__esModule",{value:!0});Ia.camelCase=void 0;var Ox=/^--[a-zA-Z0-9_-]+$/,Rx=/-([a-z])/g,Mx=/^[^-]+$/,qx=/^-(webkit|moz|ms|o|khtml)-/,Fx=/^-(ms)-/,Dx=function(e){return!e||Mx.test(e)||Ox.test(e)},Bx=function(e,n){return n.toUpperCase()},Td=function(e,n){return"".concat(n,"-")},Ux=function(e,n){return n===void 0&&(n={}),Dx(e)?e:(e=e.toLowerCase(),n.reactCompat?e=e.replace(Fx,Td):e=e.replace(qx,Td),e.replace(Rx,Bx))};Ia.camelCase=Ux;var Hx=Ll&&Ll.__importDefault||function(e){return e&&e.__esModule?e:{default:e}},$x=Hx(uc),Vx=Ia;function Xu(e,n){var t={};return!e||typeof e!="string"||(0,$x.default)(e,function(r,i){r&&i&&(t[(0,Vx.camelCase)(r,n)]=i)}),t}Xu.default=Xu;var Wx=Xu;const Qx=ls(Wx),yg=vg("end"),sc=vg("start");function vg(e){return n;function n(t){const r=t&&t.position&&t.position[e]||{};if(typeof r.line=="number"&&r.line>0&&typeof r.column=="number"&&r.column>0)return{line:r.line,column:r.column,offset:typeof r.offset=="number"&&r.offset>-1?r.offset:void 0}}}function Yx(e){const n=sc(e),t=yg(e);if(n&&t)return{start:n,end:t}}function vi(e){return!e||typeof e!="object"?"":"position"in e||"type"in e?zd(e.position):"start"in e||"end"in e?zd(e):"line"in e||"column"in e?Ju(e):""}function Ju(e){return Ad(e&&e.line)+":"+Ad(e&&e.column)}function zd(e){return Ju(e&&e.start)+"-"+Ju(e&&e.end)}function Ad(e){return e&&typeof e=="number"?e:1}class Je extends Error{constructor(n,t,r){super(),typeof t=="string"&&(r=t,t=void 0);let i="",l={},a=!1;if(t&&("line"in t&&"column"in t?l={place:t}:"start"in t&&"end"in t?l={place:t}:"type"in t?l={ancestors:[t],place:t.position}:l={...t}),typeof n=="string"?i=n:!l.cause&&n&&(a=!0,i=n.message,l.cause=n),!l.ruleId&&!l.source&&typeof r=="string"){const u=r.indexOf(":");u===-1?l.ruleId=r:(l.source=r.slice(0,u),l.ruleId=r.slice(u+1))}if(!l.place&&l.ancestors&&l.ancestors){const u=l.ancestors[l.ancestors.length-1];u&&(l.place=u.position)}const o=l.place&&"start"in l.place?l.place.start:l.place;this.ancestors=l.ancestors||void 0,this.cause=l.cause||void 0,this.column=o?o.column:void 0,this.fatal=void 0,this.file="",this.message=i,this.line=o?o.line:void 0,this.name=vi(l.place)||"1:1",this.place=l.place||void 0,this.reason=this.message,this.ruleId=l.ruleId||void 0,this.source=l.source||void 0,this.stack=a&&l.cause&&typeof l.cause.stack=="string"?l.cause.stack:"",this.actual=void 0,this.expected=void 0,this.note=void 0,this.url=void 0}}Je.prototype.file="";Je.prototype.name="";Je.prototype.reason="";Je.prototype.message="";Je.prototype.stack="";Je.prototype.column=void 0;Je.prototype.line=void 0;Je.prototype.ancestors=void 0;Je.prototype.cause=void 0;Je.prototype.fatal=void 0;Je.prototype.place=void 0;Je.prototype.ruleId=void 0;Je.prototype.source=void 0;const cc={}.hasOwnProperty,Kx=new Map,Xx=/[A-Z]/g,Jx=new Set(["table","tbody","thead","tfoot","tr"]),Gx=new Set(["td","th"]),kg="https://github.com/syntax-tree/hast-util-to-jsx-runtime";function Zx(e,n){if(!n||n.Fragment===void 0)throw new TypeError("Expected `Fragment` in options");const t=n.filePath||void 0;let r;if(n.development){if(typeof n.jsxDEV!="function")throw new TypeError("Expected `jsxDEV` in options when `development: true`");r=ow(t,n.jsxDEV)}else{if(typeof n.jsx!="function")throw new TypeError("Expected `jsx` in production options");if(typeof n.jsxs!="function")throw new TypeError("Expected `jsxs` in production options");r=aw(t,n.jsx,n.jsxs)}const i={Fragment:n.Fragment,ancestors:[],components:n.components||{},create:r,elementAttributeNameCase:n.elementAttributeNameCase||"react",evaluater:n.createEvaluater?n.createEvaluater():void 0,filePath:t,ignoreInvalidStyle:n.ignoreInvalidStyle||!1,passKeys:n.passKeys!==!1,passNode:n.passNode||!1,schema:n.space==="svg"?oc:vx,stylePropertyNameCase:n.stylePropertyNameCase||"dom",tableCellAlignToStyle:n.tableCellAlignToStyle!==!1},l=xg(i,e,void 0);return l&&typeof l!="string"?l:i.create(e,i.Fragment,{children:l||void 0},void 0)}function xg(e,n,t){if(n.type==="element")return ew(e,n,t);if(n.type==="mdxFlowExpression"||n.type==="mdxTextExpression")return nw(e,n);if(n.type==="mdxJsxFlowElement"||n.type==="mdxJsxTextElement")return rw(e,n,t);if(n.type==="mdxjsEsm")return tw(e,n);if(n.type==="root")return iw(e,n,t);if(n.type==="text")return lw(e,n)}function ew(e,n,t){const r=e.schema;let i=r;n.tagName.toLowerCase()==="svg"&&r.space==="html"&&(i=oc,e.schema=i),e.ancestors.push(n);const l=_g(e,n.tagName,!1),a=uw(e,n);let o=dc(e,n);return Jx.has(n.tagName)&&(o=o.filter(function(u){return typeof u=="string"?!ux(u):!0})),wg(e,a,l,n),fc(a,o),e.ancestors.pop(),e.schema=r,e.create(n,l,a,t)}function nw(e,n){if(n.data&&n.data.estree&&e.evaluater){const r=n.data.estree.body[0];return r.type,e.evaluater.evaluateExpression(r.expression)}Di(e,n.position)}function tw(e,n){if(n.data&&n.data.estree&&e.evaluater)return e.evaluater.evaluateProgram(n.data.estree);Di(e,n.position)}function rw(e,n,t){const r=e.schema;let i=r;n.name==="svg"&&r.space==="html"&&(i=oc,e.schema=i),e.ancestors.push(n);const l=n.name===null?e.Fragment:_g(e,n.name,!0),a=sw(e,n),o=dc(e,n);return wg(e,a,l,n),fc(a,o),e.ancestors.pop(),e.schema=r,e.create(n,l,a,t)}function iw(e,n,t){const r={};return fc(r,dc(e,n)),e.create(n,e.Fragment,r,t)}function lw(e,n){return n.value}function wg(e,n,t,r){typeof t!="string"&&t!==e.Fragment&&e.passNode&&(n.node=r)}function fc(e,n){if(n.length>0){const t=n.length>1?n:n[0];t&&(e.children=t)}}function aw(e,n,t){return r;function r(i,l,a,o){const s=Array.isArray(a.children)?t:n;return o?s(l,a,o):s(l,a)}}function ow(e,n){return t;function t(r,i,l,a){const o=Array.isArray(l.children),u=sc(r);return n(i,l,a,o,{columnNumber:u?u.column-1:void 0,fileName:e,lineNumber:u?u.line:void 0},void 0)}}function uw(e,n){const t={};let r,i;for(i in n.properties)if(i!=="children"&&cc.call(n.properties,i)){const l=cw(e,i,n.properties[i]);if(l){const[a,o]=l;e.tableCellAlignToStyle&&a==="align"&&typeof o=="string"&&Gx.has(n.tagName)?r=o:t[a]=o}}if(r){const l=t.style||(t.style={});l[e.stylePropertyNameCase==="css"?"text-align":"textAlign"]=r}return t}function sw(e,n){const t={};for(const r of n.attributes)if(r.type==="mdxJsxExpressionAttribute")if(r.data&&r.data.estree&&e.evaluater){const l=r.data.estree.body[0];l.type;const a=l.expression;a.type;const o=a.properties[0];o.type,Object.assign(t,e.evaluater.evaluateExpression(o.argument))}else Di(e,n.position);else{const i=r.name;let l;if(r.value&&typeof r.value=="object")if(r.value.data&&r.value.data.estree&&e.evaluater){const o=r.value.data.estree.body[0];o.type,l=e.evaluater.evaluateExpression(o.expression)}else Di(e,n.position);else l=r.value===null?!0:r.value;t[i]=l}return t}function dc(e,n){const t=[];let r=-1;const i=e.passKeys?new Map:Kx;for(;++r<n.children.length;){const l=n.children[r];let a;if(e.passKeys){const u=l.type==="element"?l.tagName:l.type==="mdxJsxFlowElement"||l.type==="mdxJsxTextElement"?l.name:void 0;if(u){const s=i.get(u)||0;a=u+"-"+s,i.set(u,s+1)}}const o=xg(e,l,a);o!==void 0&&t.push(o)}return t}function cw(e,n,t){const r=mx(e.schema,n);if(!(t==null||typeof t=="number"&&Number.isNaN(t))){if(Array.isArray(t)&&(t=r.commaSeparated?rx(t):kx(t)),r.property==="style"){let i=typeof t=="object"?t:fw(e,String(t));return e.stylePropertyNameCase==="css"&&(i=dw(i)),["style",i]}return[e.elementAttributeNameCase==="react"&&r.space?dx[r.property]||r.property:r.attribute,t]}}function fw(e,n){try{return Qx(n,{reactCompat:!0})}catch(t){if(e.ignoreInvalidStyle)return{};const r=t,i=new Je("Cannot parse `style` attribute",{ancestors:e.ancestors,cause:r,ruleId:"style",source:"hast-util-to-jsx-runtime"});throw i.file=e.filePath||void 0,i.url=kg+"#cannot-parse-style-attribute",i}}function _g(e,n,t){let r;if(!t)r={type:"Literal",value:n};else if(n.includes(".")){const i=n.split(".");let l=-1,a;for(;++l<i.length;){const o=kd(i[l])?{type:"Identifier",name:i[l]}:{type:"Literal",value:i[l]};a=a?{type:"MemberExpression",object:a,property:o,computed:!!(l&&o.type==="Literal"),optional:!1}:o}r=a}else r=kd(n)&&!/^[a-z]/.test(n)?{type:"Identifier",name:n}:{type:"Literal",value:n};if(r.type==="Literal"){const i=r.value;return cc.call(e.components,i)?e.components[i]:i}if(e.evaluater)return e.evaluater.evaluateExpression(r);Di(e)}function Di(e,n){const t=new Je("Cannot handle MDX estrees without `createEvaluater`",{ancestors:e.ancestors,place:n,ruleId:"mdx-estree",source:"hast-util-to-jsx-runtime"});throw t.file=e.filePath||void 0,t.url=kg+"#cannot-handle-mdx-estrees-without-createevaluater",t}function dw(e){const n={};let t;for(t in e)cc.call(e,t)&&(n[pw(t)]=e[t]);return n}function pw(e){let n=e.replace(Xx,hw);return n.slice(0,3)==="ms-"&&(n="-"+n),n}function hw(e){return"-"+e.toLowerCase()}const Oo={action:["form"],cite:["blockquote","del","ins","q"],data:["object"],formAction:["button","input"],href:["a","area","base","link"],icon:["menuitem"],itemId:null,manifest:["html"],ping:["a","area"],poster:["video"],src:["audio","embed","iframe","img","input","script","source","track","video"]},mw={};function pc(e,n){const t=mw,r=typeof t.includeImageAlt=="boolean"?t.includeImageAlt:!0,i=typeof t.includeHtml=="boolean"?t.includeHtml:!0;return Sg(e,r,i)}function Sg(e,n,t){if(gw(e)){if("value"in e)return e.type==="html"&&!t?"":e.value;if(n&&"alt"in e&&e.alt)return e.alt;if("children"in e)return jd(e.children,n,t)}return Array.isArray(e)?jd(e,n,t):""}function jd(e,n,t){const r=[];let i=-1;for(;++i<e.length;)r[i]=Sg(e[i],n,t);return r.join("")}function gw(e){return!!(e&&typeof e=="object")}const Pd=document.createElement("i");function hc(e){const n="&"+e+";";Pd.innerHTML=n;const t=Pd.textContent;return t.charCodeAt(t.length-1)===59&&e!=="semi"||t===n?!1:t}function kn(e,n,t,r){const i=e.length;let l=0,a;if(n<0?n=-n>i?0:i+n:n=n>i?i:n,t=t>0?t:0,r.length<1e4)a=Array.from(r),a.unshift(n,t),e.splice(...a);else for(t&&e.splice(n,t);l<r.length;)a=r.slice(l,l+1e4),a.unshift(n,0),e.splice(...a),l+=1e4,n+=1e4}function En(e,n){return e.length>0?(kn(e,e.length,0,n),e):n}const Id={}.hasOwnProperty;function Cg(e){const n={};let t=-1;for(;++t<e.length;)yw(n,e[t]);return n}function yw(e,n){let t;for(t in n){const i=(Id.call(e,t)?e[t]:void 0)||(e[t]={}),l=n[t];let a;if(l)for(a in l){Id.call(i,a)||(i[a]=[]);const o=l[a];vw(i[a],Array.isArray(o)?o:o?[o]:[])}}}function vw(e,n){let t=-1;const r=[];for(;++t<n.length;)(n[t].add==="after"?e:r).push(n[t]);kn(e,0,0,r)}function bg(e,n){const t=Number.parseInt(e,n);return t<9||t===11||t>13&&t<32||t>126&&t<160||t>55295&&t<57344||t>64975&&t<65008||(t&65535)===65535||(t&65535)===65534||t>1114111?"�":String.fromCodePoint(t)}function qn(e){return e.replace(/[\t\n\r ]+/g," ").replace(/^ | $/g,"").toLowerCase().toUpperCase()}const en=Pt(/[A-Za-z]/),Ke=Pt(/[\dA-Za-z]/),kw=Pt(/[#-'*+\--9=?A-Z^-~]/);function sa(e){return e!==null&&(e<32||e===127)}const Gu=Pt(/\d/),xw=Pt(/[\dA-Fa-f]/),ww=Pt(/[!-/:-@[-`{-~]/);function ie(e){return e!==null&&e<-2}function we(e){return e!==null&&(e<0||e===32)}function ce(e){return e===-2||e===-1||e===32}const Na=Pt(new RegExp("\\p{P}|\\p{S}","u")),Gt=Pt(/\s/);function Pt(e){return n;function n(t){return t!==null&&t>-1&&e.test(String.fromCharCode(t))}}function $r(e){const n=[];let t=-1,r=0,i=0;for(;++t<e.length;){const l=e.charCodeAt(t);let a="";if(l===37&&Ke(e.charCodeAt(t+1))&&Ke(e.charCodeAt(t+2)))i=2;else if(l<128)/[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(l))||(a=String.fromCharCode(l));else if(l>55295&&l<57344){const o=e.charCodeAt(t+1);l<56320&&o>56319&&o<57344?(a=String.fromCharCode(l,o),i=1):a="�"}else a=String.fromCharCode(l);a&&(n.push(e.slice(r,t),encodeURIComponent(a)),r=t+i+1,a=""),i&&(t+=i,i=0)}return n.join("")+e.slice(r)}function me(e,n,t,r){const i=r?r-1:Number.POSITIVE_INFINITY;let l=0;return a;function a(u){return ce(u)?(e.enter(t),o(u)):n(u)}function o(u){return ce(u)&&l++<i?(e.consume(u),o):(e.exit(t),n(u))}}const _w={tokenize:Sw};function Sw(e){const n=e.attempt(this.parser.constructs.contentInitial,r,i);let t;return n;function r(o){if(o===null){e.consume(o);return}return e.enter("lineEnding"),e.consume(o),e.exit("lineEnding"),me(e,n,"linePrefix")}function i(o){return e.enter("paragraph"),l(o)}function l(o){const u=e.enter("chunkText",{contentType:"text",previous:t});return t&&(t.next=u),t=u,a(o)}function a(o){if(o===null){e.exit("chunkText"),e.exit("paragraph"),e.consume(o);return}return ie(o)?(e.consume(o),e.exit("chunkText"),l):(e.consume(o),a)}}const Cw={tokenize:bw},Nd={tokenize:Ew};function bw(e){const n=this,t=[];let r=0,i,l,a;return o;function o(k){if(r<t.length){const T=t[r];return n.containerState=T[1],e.attempt(T[0].continuation,u,s)(k)}return s(k)}function u(k){if(r++,n.containerState._closeFlow){n.containerState._closeFlow=void 0,i&&y();const T=n.events.length;let R=T,C;for(;R--;)if(n.events[R][0]==="exit"&&n.events[R][1].type==="chunkFlow"){C=n.events[R][1].end;break}g(r);let B=T;for(;B<n.events.length;)n.events[B][1].end={...C},B++;return kn(n.events,R+1,0,n.events.slice(T)),n.events.length=B,s(k)}return o(k)}function s(k){if(r===t.length){if(!i)return p(k);if(i.currentConstruct&&i.currentConstruct.concrete)return v(k);n.interrupt=!!(i.currentConstruct&&!i._gfmTableDynamicInterruptHack)}return n.containerState={},e.check(Nd,d,f)(k)}function d(k){return i&&y(),g(r),p(k)}function f(k){return n.parser.lazy[n.now().line]=r!==t.length,a=n.now().offset,v(k)}function p(k){return n.containerState={},e.attempt(Nd,h,v)(k)}function h(k){return r++,t.push([n.currentConstruct,n.containerState]),p(k)}function v(k){if(k===null){i&&y(),g(0),e.consume(k);return}return i=i||n.parser.flow(n.now()),e.enter("chunkFlow",{_tokenizer:i,contentType:"flow",previous:l}),w(k)}function w(k){if(k===null){b(e.exit("chunkFlow"),!0),g(0),e.consume(k);return}return ie(k)?(e.consume(k),b(e.exit("chunkFlow")),r=0,n.interrupt=void 0,o):(e.consume(k),w)}function b(k,T){const R=n.sliceStream(k);if(T&&R.push(null),k.previous=l,l&&(l.next=k),l=k,i.defineSkip(k.start),i.write(R),n.parser.lazy[k.start.line]){let C=i.events.length;for(;C--;)if(i.events[C][1].start.offset<a&&(!i.events[C][1].end||i.events[C][1].end.offset>a))return;const B=n.events.length;let V=B,ee,E;for(;V--;)if(n.events[V][0]==="exit"&&n.events[V][1].type==="chunkFlow"){if(ee){E=n.events[V][1].end;break}ee=!0}for(g(r),C=B;C<n.events.length;)n.events[C][1].end={...E},C++;kn(n.events,V+1,0,n.events.slice(B)),n.events.length=C}}function g(k){let T=t.length;for(;T-- >k;){const R=t[T];n.containerState=R[1],R[0].exit.call(n,e)}t.length=k}function y(){i.write([null]),l=void 0,i=void 0,n.containerState._closeFlow=void 0}}function Ew(e,n,t){return me(e,e.attempt(this.parser.constructs.document,n,t),"linePrefix",this.parser.constructs.disable.null.includes("codeIndented")?void 0:4)}function Rr(e){if(e===null||we(e)||Gt(e))return 1;if(Na(e))return 2}function La(e,n,t){const r=[];let i=-1;for(;++i<e.length;){const l=e[i].resolveAll;l&&!r.includes(l)&&(n=l(n,t),r.push(l))}return n}const Zu={name:"attention",resolveAll:Tw,tokenize:zw};function Tw(e,n){let t=-1,r,i,l,a,o,u,s,d;for(;++t<e.length;)if(e[t][0]==="enter"&&e[t][1].type==="attentionSequence"&&e[t][1]._close){for(r=t;r--;)if(e[r][0]==="exit"&&e[r][1].type==="attentionSequence"&&e[r][1]._open&&n.sliceSerialize(e[r][1]).charCodeAt(0)===n.sliceSerialize(e[t][1]).charCodeAt(0)){if((e[r][1]._close||e[t][1]._open)&&(e[t][1].end.offset-e[t][1].start.offset)%3&&!((e[r][1].end.offset-e[r][1].start.offset+e[t][1].end.offset-e[t][1].start.offset)%3))continue;u=e[r][1].end.offset-e[r][1].start.offset>1&&e[t][1].end.offset-e[t][1].start.offset>1?2:1;const f={...e[r][1].end},p={...e[t][1].start};Ld(f,-u),Ld(p,u),a={type:u>1?"strongSequence":"emphasisSequence",start:f,end:{...e[r][1].end}},o={type:u>1?"strongSequence":"emphasisSequence",start:{...e[t][1].start},end:p},l={type:u>1?"strongText":"emphasisText",start:{...e[r][1].end},end:{...e[t][1].start}},i={type:u>1?"strong":"emphasis",start:{...a.start},end:{...o.end}},e[r][1].end={...a.start},e[t][1].start={...o.end},s=[],e[r][1].end.offset-e[r][1].start.offset&&(s=En(s,[["enter",e[r][1],n],["exit",e[r][1],n]])),s=En(s,[["enter",i,n],["enter",a,n],["exit",a,n],["enter",l,n]]),s=En(s,La(n.parser.constructs.insideSpan.null,e.slice(r+1,t),n)),s=En(s,[["exit",l,n],["enter",o,n],["exit",o,n],["exit",i,n]]),e[t][1].end.offset-e[t][1].start.offset?(d=2,s=En(s,[["enter",e[t][1],n],["exit",e[t][1],n]])):d=0,kn(e,r-1,t-r+3,s),t=r+s.length-d-2;break}}for(t=-1;++t<e.length;)e[t][1].type==="attentionSequence"&&(e[t][1].type="data");return e}function zw(e,n){const t=this.parser.constructs.attentionMarkers.null,r=this.previous,i=Rr(r);let l;return a;function a(u){return l=u,e.enter("attentionSequence"),o(u)}function o(u){if(u===l)return e.consume(u),o;const s=e.exit("attentionSequence"),d=Rr(u),f=!d||d===2&&i||t.includes(u),p=!i||i===2&&d||t.includes(r);return s._open=!!(l===42?f:f&&(i||!p)),s._close=!!(l===42?p:p&&(d||!f)),n(u)}}function Ld(e,n){e.column+=n,e.offset+=n,e._bufferIndex+=n}const Aw={name:"autolink",tokenize:jw};function jw(e,n,t){let r=0;return i;function i(h){return e.enter("autolink"),e.enter("autolinkMarker"),e.consume(h),e.exit("autolinkMarker"),e.enter("autolinkProtocol"),l}function l(h){return en(h)?(e.consume(h),a):h===64?t(h):s(h)}function a(h){return h===43||h===45||h===46||Ke(h)?(r=1,o(h)):s(h)}function o(h){return h===58?(e.consume(h),r=0,u):(h===43||h===45||h===46||Ke(h))&&r++<32?(e.consume(h),o):(r=0,s(h))}function u(h){return h===62?(e.exit("autolinkProtocol"),e.enter("autolinkMarker"),e.consume(h),e.exit("autolinkMarker"),e.exit("autolink"),n):h===null||h===32||h===60||sa(h)?t(h):(e.consume(h),u)}function s(h){return h===64?(e.consume(h),d):kw(h)?(e.consume(h),s):t(h)}function d(h){return Ke(h)?f(h):t(h)}function f(h){return h===46?(e.consume(h),r=0,d):h===62?(e.exit("autolinkProtocol").type="autolinkEmail",e.enter("autolinkMarker"),e.consume(h),e.exit("autolinkMarker"),e.exit("autolink"),n):p(h)}function p(h){if((h===45||Ke(h))&&r++<63){const v=h===45?p:f;return e.consume(h),v}return t(h)}}const Xi={partial:!0,tokenize:Pw};function Pw(e,n,t){return r;function r(l){return ce(l)?me(e,i,"linePrefix")(l):i(l)}function i(l){return l===null||ie(l)?n(l):t(l)}}const Eg={continuation:{tokenize:Nw},exit:Lw,name:"blockQuote",tokenize:Iw};function Iw(e,n,t){const r=this;return i;function i(a){if(a===62){const o=r.containerState;return o.open||(e.enter("blockQuote",{_container:!0}),o.open=!0),e.enter("blockQuotePrefix"),e.enter("blockQuoteMarker"),e.consume(a),e.exit("blockQuoteMarker"),l}return t(a)}function l(a){return ce(a)?(e.enter("blockQuotePrefixWhitespace"),e.consume(a),e.exit("blockQuotePrefixWhitespace"),e.exit("blockQuotePrefix"),n):(e.exit("blockQuotePrefix"),n(a))}}function Nw(e,n,t){const r=this;return i;function i(a){return ce(a)?me(e,l,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(a):l(a)}function l(a){return e.attempt(Eg,n,t)(a)}}function Lw(e){e.exit("blockQuote")}const Tg={name:"characterEscape",tokenize:Ow};function Ow(e,n,t){return r;function r(l){return e.enter("characterEscape"),e.enter("escapeMarker"),e.consume(l),e.exit("escapeMarker"),i}function i(l){return ww(l)?(e.enter("characterEscapeValue"),e.consume(l),e.exit("characterEscapeValue"),e.exit("characterEscape"),n):t(l)}}const zg={name:"characterReference",tokenize:Rw};function Rw(e,n,t){const r=this;let i=0,l,a;return o;function o(f){return e.enter("characterReference"),e.enter("characterReferenceMarker"),e.consume(f),e.exit("characterReferenceMarker"),u}function u(f){return f===35?(e.enter("characterReferenceMarkerNumeric"),e.consume(f),e.exit("characterReferenceMarkerNumeric"),s):(e.enter("characterReferenceValue"),l=31,a=Ke,d(f))}function s(f){return f===88||f===120?(e.enter("characterReferenceMarkerHexadecimal"),e.consume(f),e.exit("characterReferenceMarkerHexadecimal"),e.enter("characterReferenceValue"),l=6,a=xw,d):(e.enter("characterReferenceValue"),l=7,a=Gu,d(f))}function d(f){if(f===59&&i){const p=e.exit("characterReferenceValue");return a===Ke&&!hc(r.sliceSerialize(p))?t(f):(e.enter("characterReferenceMarker"),e.consume(f),e.exit("characterReferenceMarker"),e.exit("characterReference"),n)}return a(f)&&i++<l?(e.consume(f),d):t(f)}}const Od={partial:!0,tokenize:qw},Rd={concrete:!0,name:"codeFenced",tokenize:Mw};function Mw(e,n,t){const r=this,i={partial:!0,tokenize:R};let l=0,a=0,o;return u;function u(C){return s(C)}function s(C){const B=r.events[r.events.length-1];return l=B&&B[1].type==="linePrefix"?B[2].sliceSerialize(B[1],!0).length:0,o=C,e.enter("codeFenced"),e.enter("codeFencedFence"),e.enter("codeFencedFenceSequence"),d(C)}function d(C){return C===o?(a++,e.consume(C),d):a<3?t(C):(e.exit("codeFencedFenceSequence"),ce(C)?me(e,f,"whitespace")(C):f(C))}function f(C){return C===null||ie(C)?(e.exit("codeFencedFence"),r.interrupt?n(C):e.check(Od,w,T)(C)):(e.enter("codeFencedFenceInfo"),e.enter("chunkString",{contentType:"string"}),p(C))}function p(C){return C===null||ie(C)?(e.exit("chunkString"),e.exit("codeFencedFenceInfo"),f(C)):ce(C)?(e.exit("chunkString"),e.exit("codeFencedFenceInfo"),me(e,h,"whitespace")(C)):C===96&&C===o?t(C):(e.consume(C),p)}function h(C){return C===null||ie(C)?f(C):(e.enter("codeFencedFenceMeta"),e.enter("chunkString",{contentType:"string"}),v(C))}function v(C){return C===null||ie(C)?(e.exit("chunkString"),e.exit("codeFencedFenceMeta"),f(C)):C===96&&C===o?t(C):(e.consume(C),v)}function w(C){return e.attempt(i,T,b)(C)}function b(C){return e.enter("lineEnding"),e.consume(C),e.exit("lineEnding"),g}function g(C){return l>0&&ce(C)?me(e,y,"linePrefix",l+1)(C):y(C)}function y(C){return C===null||ie(C)?e.check(Od,w,T)(C):(e.enter("codeFlowValue"),k(C))}function k(C){return C===null||ie(C)?(e.exit("codeFlowValue"),y(C)):(e.consume(C),k)}function T(C){return e.exit("codeFenced"),n(C)}function R(C,B,V){let ee=0;return E;function E(oe){return C.enter("lineEnding"),C.consume(oe),C.exit("lineEnding"),K}function K(oe){return C.enter("codeFencedFence"),ce(oe)?me(C,Z,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(oe):Z(oe)}function Z(oe){return oe===o?(C.enter("codeFencedFenceSequence"),ue(oe)):V(oe)}function ue(oe){return oe===o?(ee++,C.consume(oe),ue):ee>=a?(C.exit("codeFencedFenceSequence"),ce(oe)?me(C,le,"whitespace")(oe):le(oe)):V(oe)}function le(oe){return oe===null||ie(oe)?(C.exit("codeFencedFence"),B(oe)):V(oe)}}}function qw(e,n,t){const r=this;return i;function i(a){return a===null?t(a):(e.enter("lineEnding"),e.consume(a),e.exit("lineEnding"),l)}function l(a){return r.parser.lazy[r.now().line]?t(a):n(a)}}const Ro={name:"codeIndented",tokenize:Dw},Fw={partial:!0,tokenize:Bw};function Dw(e,n,t){const r=this;return i;function i(s){return e.enter("codeIndented"),me(e,l,"linePrefix",5)(s)}function l(s){const d=r.events[r.events.length-1];return d&&d[1].type==="linePrefix"&&d[2].sliceSerialize(d[1],!0).length>=4?a(s):t(s)}function a(s){return s===null?u(s):ie(s)?e.attempt(Fw,a,u)(s):(e.enter("codeFlowValue"),o(s))}function o(s){return s===null||ie(s)?(e.exit("codeFlowValue"),a(s)):(e.consume(s),o)}function u(s){return e.exit("codeIndented"),n(s)}}function Bw(e,n,t){const r=this;return i;function i(a){return r.parser.lazy[r.now().line]?t(a):ie(a)?(e.enter("lineEnding"),e.consume(a),e.exit("lineEnding"),i):me(e,l,"linePrefix",5)(a)}function l(a){const o=r.events[r.events.length-1];return o&&o[1].type==="linePrefix"&&o[2].sliceSerialize(o[1],!0).length>=4?n(a):ie(a)?i(a):t(a)}}const Uw={name:"codeText",previous:$w,resolve:Hw,tokenize:Vw};function Hw(e){let n=e.length-4,t=3,r,i;if((e[t][1].type==="lineEnding"||e[t][1].type==="space")&&(e[n][1].type==="lineEnding"||e[n][1].type==="space")){for(r=t;++r<n;)if(e[r][1].type==="codeTextData"){e[t][1].type="codeTextPadding",e[n][1].type="codeTextPadding",t+=2,n-=2;break}}for(r=t-1,n++;++r<=n;)i===void 0?r!==n&&e[r][1].type!=="lineEnding"&&(i=r):(r===n||e[r][1].type==="lineEnding")&&(e[i][1].type="codeTextData",r!==i+2&&(e[i][1].end=e[r-1][1].end,e.splice(i+2,r-i-2),n-=r-i-2,r=i+2),i=void 0);return e}function $w(e){return e!==96||this.events[this.events.length-1][1].type==="characterEscape"}function Vw(e,n,t){let r=0,i,l;return a;function a(f){return e.enter("codeText"),e.enter("codeTextSequence"),o(f)}function o(f){return f===96?(e.consume(f),r++,o):(e.exit("codeTextSequence"),u(f))}function u(f){return f===null?t(f):f===32?(e.enter("space"),e.consume(f),e.exit("space"),u):f===96?(l=e.enter("codeTextSequence"),i=0,d(f)):ie(f)?(e.enter("lineEnding"),e.consume(f),e.exit("lineEnding"),u):(e.enter("codeTextData"),s(f))}function s(f){return f===null||f===32||f===96||ie(f)?(e.exit("codeTextData"),u(f)):(e.consume(f),s)}function d(f){return f===96?(e.consume(f),i++,d):i===r?(e.exit("codeTextSequence"),e.exit("codeText"),n(f)):(l.type="codeTextData",s(f))}}class Ww{constructor(n){this.left=n?[...n]:[],this.right=[]}get(n){if(n<0||n>=this.left.length+this.right.length)throw new RangeError("Cannot access index `"+n+"` in a splice buffer of size `"+(this.left.length+this.right.length)+"`");return n<this.left.length?this.left[n]:this.right[this.right.length-n+this.left.length-1]}get length(){return this.left.length+this.right.length}shift(){return this.setCursor(0),this.right.pop()}slice(n,t){const r=t??Number.POSITIVE_INFINITY;return r<this.left.length?this.left.slice(n,r):n>this.left.length?this.right.slice(this.right.length-r+this.left.length,this.right.length-n+this.left.length).reverse():this.left.slice(n).concat(this.right.slice(this.right.length-r+this.left.length).reverse())}splice(n,t,r){const i=t||0;this.setCursor(Math.trunc(n));const l=this.right.splice(this.right.length-i,Number.POSITIVE_INFINITY);return r&&ri(this.left,r),l.reverse()}pop(){return this.setCursor(Number.POSITIVE_INFINITY),this.left.pop()}push(n){this.setCursor(Number.POSITIVE_INFINITY),this.left.push(n)}pushMany(n){this.setCursor(Number.POSITIVE_INFINITY),ri(this.left,n)}unshift(n){this.setCursor(0),this.right.push(n)}unshiftMany(n){this.setCursor(0),ri(this.right,n.reverse())}setCursor(n){if(!(n===this.left.length||n>this.left.length&&this.right.length===0||n<0&&this.left.length===0))if(n<this.left.length){const t=this.left.splice(n,Number.POSITIVE_INFINITY);ri(this.right,t.reverse())}else{const t=this.right.splice(this.left.length+this.right.length-n,Number.POSITIVE_INFINITY);ri(this.left,t.reverse())}}}function ri(e,n){let t=0;if(n.length<1e4)e.push(...n);else for(;t<n.length;)e.push(...n.slice(t,t+1e4)),t+=1e4}function Ag(e){const n={};let t=-1,r,i,l,a,o,u,s;const d=new Ww(e);for(;++t<d.length;){for(;t in n;)t=n[t];if(r=d.get(t),t&&r[1].type==="chunkFlow"&&d.get(t-1)[1].type==="listItemPrefix"&&(u=r[1]._tokenizer.events,l=0,l<u.length&&u[l][1].type==="lineEndingBlank"&&(l+=2),l<u.length&&u[l][1].type==="content"))for(;++l<u.length&&u[l][1].type!=="content";)u[l][1].type==="chunkText"&&(u[l][1]._isInFirstContentOfListItem=!0,l++);if(r[0]==="enter")r[1].contentType&&(Object.assign(n,Qw(d,t)),t=n[t],s=!0);else if(r[1]._container){for(l=t,i=void 0;l--;)if(a=d.get(l),a[1].type==="lineEnding"||a[1].type==="lineEndingBlank")a[0]==="enter"&&(i&&(d.get(i)[1].type="lineEndingBlank"),a[1].type="lineEnding",i=l);else if(!(a[1].type==="linePrefix"||a[1].type==="listItemIndent"))break;i&&(r[1].end={...d.get(i)[1].start},o=d.slice(i,t),o.unshift(r),d.splice(i,t-i+1,o))}}return kn(e,0,Number.POSITIVE_INFINITY,d.slice(0)),!s}function Qw(e,n){const t=e.get(n)[1],r=e.get(n)[2];let i=n-1;const l=[];let a=t._tokenizer;a||(a=r.parser[t.contentType](t.start),t._contentTypeTextTrailing&&(a._contentTypeTextTrailing=!0));const o=a.events,u=[],s={};let d,f,p=-1,h=t,v=0,w=0;const b=[w];for(;h;){for(;e.get(++i)[1]!==h;);l.push(i),h._tokenizer||(d=r.sliceStream(h),h.next||d.push(null),f&&a.defineSkip(h.start),h._isInFirstContentOfListItem&&(a._gfmTasklistFirstContentOfListItem=!0),a.write(d),h._isInFirstContentOfListItem&&(a._gfmTasklistFirstContentOfListItem=void 0)),f=h,h=h.next}for(h=t;++p<o.length;)o[p][0]==="exit"&&o[p-1][0]==="enter"&&o[p][1].type===o[p-1][1].type&&o[p][1].start.line!==o[p][1].end.line&&(w=p+1,b.push(w),h._tokenizer=void 0,h.previous=void 0,h=h.next);for(a.events=[],h?(h._tokenizer=void 0,h.previous=void 0):b.pop(),p=b.length;p--;){const g=o.slice(b[p],b[p+1]),y=l.pop();u.push([y,y+g.length-1]),e.splice(y,2,g)}for(u.reverse(),p=-1;++p<u.length;)s[v+u[p][0]]=v+u[p][1],v+=u[p][1]-u[p][0]-1;return s}const Yw={resolve:Xw,tokenize:Jw},Kw={partial:!0,tokenize:Gw};function Xw(e){return Ag(e),e}function Jw(e,n){let t;return r;function r(o){return e.enter("content"),t=e.enter("chunkContent",{contentType:"content"}),i(o)}function i(o){return o===null?l(o):ie(o)?e.check(Kw,a,l)(o):(e.consume(o),i)}function l(o){return e.exit("chunkContent"),e.exit("content"),n(o)}function a(o){return e.consume(o),e.exit("chunkContent"),t.next=e.enter("chunkContent",{contentType:"content",previous:t}),t=t.next,i}}function Gw(e,n,t){const r=this;return i;function i(a){return e.exit("chunkContent"),e.enter("lineEnding"),e.consume(a),e.exit("lineEnding"),me(e,l,"linePrefix")}function l(a){if(a===null||ie(a))return t(a);const o=r.events[r.events.length-1];return!r.parser.constructs.disable.null.includes("codeIndented")&&o&&o[1].type==="linePrefix"&&o[2].sliceSerialize(o[1],!0).length>=4?n(a):e.interrupt(r.parser.constructs.flow,t,n)(a)}}function jg(e,n,t,r,i,l,a,o,u){const s=u||Number.POSITIVE_INFINITY;let d=0;return f;function f(g){return g===60?(e.enter(r),e.enter(i),e.enter(l),e.consume(g),e.exit(l),p):g===null||g===32||g===41||sa(g)?t(g):(e.enter(r),e.enter(a),e.enter(o),e.enter("chunkString",{contentType:"string"}),w(g))}function p(g){return g===62?(e.enter(l),e.consume(g),e.exit(l),e.exit(i),e.exit(r),n):(e.enter(o),e.enter("chunkString",{contentType:"string"}),h(g))}function h(g){return g===62?(e.exit("chunkString"),e.exit(o),p(g)):g===null||g===60||ie(g)?t(g):(e.consume(g),g===92?v:h)}function v(g){return g===60||g===62||g===92?(e.consume(g),h):h(g)}function w(g){return!d&&(g===null||g===41||we(g))?(e.exit("chunkString"),e.exit(o),e.exit(a),e.exit(r),n(g)):d<s&&g===40?(e.consume(g),d++,w):g===41?(e.consume(g),d--,w):g===null||g===32||g===40||sa(g)?t(g):(e.consume(g),g===92?b:w)}function b(g){return g===40||g===41||g===92?(e.consume(g),w):w(g)}}function Pg(e,n,t,r,i,l){const a=this;let o=0,u;return s;function s(h){return e.enter(r),e.enter(i),e.consume(h),e.exit(i),e.enter(l),d}function d(h){return o>999||h===null||h===91||h===93&&!u||h===94&&!o&&"_hiddenFootnoteSupport"in a.parser.constructs?t(h):h===93?(e.exit(l),e.enter(i),e.consume(h),e.exit(i),e.exit(r),n):ie(h)?(e.enter("lineEnding"),e.consume(h),e.exit("lineEnding"),d):(e.enter("chunkString",{contentType:"string"}),f(h))}function f(h){return h===null||h===91||h===93||ie(h)||o++>999?(e.exit("chunkString"),d(h)):(e.consume(h),u||(u=!ce(h)),h===92?p:f)}function p(h){return h===91||h===92||h===93?(e.consume(h),o++,f):f(h)}}function Ig(e,n,t,r,i,l){let a;return o;function o(p){return p===34||p===39||p===40?(e.enter(r),e.enter(i),e.consume(p),e.exit(i),a=p===40?41:p,u):t(p)}function u(p){return p===a?(e.enter(i),e.consume(p),e.exit(i),e.exit(r),n):(e.enter(l),s(p))}function s(p){return p===a?(e.exit(l),u(a)):p===null?t(p):ie(p)?(e.enter("lineEnding"),e.consume(p),e.exit("lineEnding"),me(e,s,"linePrefix")):(e.enter("chunkString",{contentType:"string"}),d(p))}function d(p){return p===a||p===null||ie(p)?(e.exit("chunkString"),s(p)):(e.consume(p),p===92?f:d)}function f(p){return p===a||p===92?(e.consume(p),d):d(p)}}function ki(e,n){let t;return r;function r(i){return ie(i)?(e.enter("lineEnding"),e.consume(i),e.exit("lineEnding"),t=!0,r):ce(i)?me(e,r,t?"linePrefix":"lineSuffix")(i):n(i)}}const Zw={name:"definition",tokenize:n_},e_={partial:!0,tokenize:t_};function n_(e,n,t){const r=this;let i;return l;function l(h){return e.enter("definition"),a(h)}function a(h){return Pg.call(r,e,o,t,"definitionLabel","definitionLabelMarker","definitionLabelString")(h)}function o(h){return i=qn(r.sliceSerialize(r.events[r.events.length-1][1]).slice(1,-1)),h===58?(e.enter("definitionMarker"),e.consume(h),e.exit("definitionMarker"),u):t(h)}function u(h){return we(h)?ki(e,s)(h):s(h)}function s(h){return jg(e,d,t,"definitionDestination","definitionDestinationLiteral","definitionDestinationLiteralMarker","definitionDestinationRaw","definitionDestinationString")(h)}function d(h){return e.attempt(e_,f,f)(h)}function f(h){return ce(h)?me(e,p,"whitespace")(h):p(h)}function p(h){return h===null||ie(h)?(e.exit("definition"),r.parser.defined.push(i),n(h)):t(h)}}function t_(e,n,t){return r;function r(o){return we(o)?ki(e,i)(o):t(o)}function i(o){return Ig(e,l,t,"definitionTitle","definitionTitleMarker","definitionTitleString")(o)}function l(o){return ce(o)?me(e,a,"whitespace")(o):a(o)}function a(o){return o===null||ie(o)?n(o):t(o)}}const r_={name:"hardBreakEscape",tokenize:i_};function i_(e,n,t){return r;function r(l){return e.enter("hardBreakEscape"),e.consume(l),i}function i(l){return ie(l)?(e.exit("hardBreakEscape"),n(l)):t(l)}}const l_={name:"headingAtx",resolve:a_,tokenize:o_};function a_(e,n){let t=e.length-2,r=3,i,l;return e[r][1].type==="whitespace"&&(r+=2),t-2>r&&e[t][1].type==="whitespace"&&(t-=2),e[t][1].type==="atxHeadingSequence"&&(r===t-1||t-4>r&&e[t-2][1].type==="whitespace")&&(t-=r+1===t?2:4),t>r&&(i={type:"atxHeadingText",start:e[r][1].start,end:e[t][1].end},l={type:"chunkText",start:e[r][1].start,end:e[t][1].end,contentType:"text"},kn(e,r,t-r+1,[["enter",i,n],["enter",l,n],["exit",l,n],["exit",i,n]])),e}function o_(e,n,t){let r=0;return i;function i(d){return e.enter("atxHeading"),l(d)}function l(d){return e.enter("atxHeadingSequence"),a(d)}function a(d){return d===35&&r++<6?(e.consume(d),a):d===null||we(d)?(e.exit("atxHeadingSequence"),o(d)):t(d)}function o(d){return d===35?(e.enter("atxHeadingSequence"),u(d)):d===null||ie(d)?(e.exit("atxHeading"),n(d)):ce(d)?me(e,o,"whitespace")(d):(e.enter("atxHeadingText"),s(d))}function u(d){return d===35?(e.consume(d),u):(e.exit("atxHeadingSequence"),o(d))}function s(d){return d===null||d===35||we(d)?(e.exit("atxHeadingText"),o(d)):(e.consume(d),s)}}const u_=["address","article","aside","base","basefont","blockquote","body","caption","center","col","colgroup","dd","details","dialog","dir","div","dl","dt","fieldset","figcaption","figure","footer","form","frame","frameset","h1","h2","h3","h4","h5","h6","head","header","hr","html","iframe","legend","li","link","main","menu","menuitem","nav","noframes","ol","optgroup","option","p","param","search","section","summary","table","tbody","td","tfoot","th","thead","title","tr","track","ul"],Md=["pre","script","style","textarea"],s_={concrete:!0,name:"htmlFlow",resolveTo:d_,tokenize:p_},c_={partial:!0,tokenize:m_},f_={partial:!0,tokenize:h_};function d_(e){let n=e.length;for(;n--&&!(e[n][0]==="enter"&&e[n][1].type==="htmlFlow"););return n>1&&e[n-2][1].type==="linePrefix"&&(e[n][1].start=e[n-2][1].start,e[n+1][1].start=e[n-2][1].start,e.splice(n-2,2)),e}function p_(e,n,t){const r=this;let i,l,a,o,u;return s;function s(_){return d(_)}function d(_){return e.enter("htmlFlow"),e.enter("htmlFlowData"),e.consume(_),f}function f(_){return _===33?(e.consume(_),p):_===47?(e.consume(_),l=!0,w):_===63?(e.consume(_),i=3,r.interrupt?n:x):en(_)?(e.consume(_),a=String.fromCharCode(_),b):t(_)}function p(_){return _===45?(e.consume(_),i=2,h):_===91?(e.consume(_),i=5,o=0,v):en(_)?(e.consume(_),i=4,r.interrupt?n:x):t(_)}function h(_){return _===45?(e.consume(_),r.interrupt?n:x):t(_)}function v(_){const Te="CDATA[";return _===Te.charCodeAt(o++)?(e.consume(_),o===Te.length?r.interrupt?n:Z:v):t(_)}function w(_){return en(_)?(e.consume(_),a=String.fromCharCode(_),b):t(_)}function b(_){if(_===null||_===47||_===62||we(_)){const Te=_===47,Se=a.toLowerCase();return!Te&&!l&&Md.includes(Se)?(i=1,r.interrupt?n(_):Z(_)):u_.includes(a.toLowerCase())?(i=6,Te?(e.consume(_),g):r.interrupt?n(_):Z(_)):(i=7,r.interrupt&&!r.parser.lazy[r.now().line]?t(_):l?y(_):k(_))}return _===45||Ke(_)?(e.consume(_),a+=String.fromCharCode(_),b):t(_)}function g(_){return _===62?(e.consume(_),r.interrupt?n:Z):t(_)}function y(_){return ce(_)?(e.consume(_),y):E(_)}function k(_){return _===47?(e.consume(_),E):_===58||_===95||en(_)?(e.consume(_),T):ce(_)?(e.consume(_),k):E(_)}function T(_){return _===45||_===46||_===58||_===95||Ke(_)?(e.consume(_),T):R(_)}function R(_){return _===61?(e.consume(_),C):ce(_)?(e.consume(_),R):k(_)}function C(_){return _===null||_===60||_===61||_===62||_===96?t(_):_===34||_===39?(e.consume(_),u=_,B):ce(_)?(e.consume(_),C):V(_)}function B(_){return _===u?(e.consume(_),u=null,ee):_===null||ie(_)?t(_):(e.consume(_),B)}function V(_){return _===null||_===34||_===39||_===47||_===60||_===61||_===62||_===96||we(_)?R(_):(e.consume(_),V)}function ee(_){return _===47||_===62||ce(_)?k(_):t(_)}function E(_){return _===62?(e.consume(_),K):t(_)}function K(_){return _===null||ie(_)?Z(_):ce(_)?(e.consume(_),K):t(_)}function Z(_){return _===45&&i===2?(e.consume(_),Y):_===60&&i===1?(e.consume(_),ke):_===62&&i===4?(e.consume(_),se):_===63&&i===3?(e.consume(_),x):_===93&&i===5?(e.consume(_),te):ie(_)&&(i===6||i===7)?(e.exit("htmlFlowData"),e.check(c_,pe,ue)(_)):_===null||ie(_)?(e.exit("htmlFlowData"),ue(_)):(e.consume(_),Z)}function ue(_){return e.check(f_,le,pe)(_)}function le(_){return e.enter("lineEnding"),e.consume(_),e.exit("lineEnding"),oe}function oe(_){return _===null||ie(_)?ue(_):(e.enter("htmlFlowData"),Z(_))}function Y(_){return _===45?(e.consume(_),x):Z(_)}function ke(_){return _===47?(e.consume(_),a="",W):Z(_)}function W(_){if(_===62){const Te=a.toLowerCase();return Md.includes(Te)?(e.consume(_),se):Z(_)}return en(_)&&a.length<8?(e.consume(_),a+=String.fromCharCode(_),W):Z(_)}function te(_){return _===93?(e.consume(_),x):Z(_)}function x(_){return _===62?(e.consume(_),se):_===45&&i===2?(e.consume(_),x):Z(_)}function se(_){return _===null||ie(_)?(e.exit("htmlFlowData"),pe(_)):(e.consume(_),se)}function pe(_){return e.exit("htmlFlow"),n(_)}}function h_(e,n,t){const r=this;return i;function i(a){return ie(a)?(e.enter("lineEnding"),e.consume(a),e.exit("lineEnding"),l):t(a)}function l(a){return r.parser.lazy[r.now().line]?t(a):n(a)}}function m_(e,n,t){return r;function r(i){return e.enter("lineEnding"),e.consume(i),e.exit("lineEnding"),e.attempt(Xi,n,t)}}const g_={name:"htmlText",tokenize:y_};function y_(e,n,t){const r=this;let i,l,a;return o;function o(x){return e.enter("htmlText"),e.enter("htmlTextData"),e.consume(x),u}function u(x){return x===33?(e.consume(x),s):x===47?(e.consume(x),R):x===63?(e.consume(x),k):en(x)?(e.consume(x),V):t(x)}function s(x){return x===45?(e.consume(x),d):x===91?(e.consume(x),l=0,v):en(x)?(e.consume(x),y):t(x)}function d(x){return x===45?(e.consume(x),h):t(x)}function f(x){return x===null?t(x):x===45?(e.consume(x),p):ie(x)?(a=f,ke(x)):(e.consume(x),f)}function p(x){return x===45?(e.consume(x),h):f(x)}function h(x){return x===62?Y(x):x===45?p(x):f(x)}function v(x){const se="CDATA[";return x===se.charCodeAt(l++)?(e.consume(x),l===se.length?w:v):t(x)}function w(x){return x===null?t(x):x===93?(e.consume(x),b):ie(x)?(a=w,ke(x)):(e.consume(x),w)}function b(x){return x===93?(e.consume(x),g):w(x)}function g(x){return x===62?Y(x):x===93?(e.consume(x),g):w(x)}function y(x){return x===null||x===62?Y(x):ie(x)?(a=y,ke(x)):(e.consume(x),y)}function k(x){return x===null?t(x):x===63?(e.consume(x),T):ie(x)?(a=k,ke(x)):(e.consume(x),k)}function T(x){return x===62?Y(x):k(x)}function R(x){return en(x)?(e.consume(x),C):t(x)}function C(x){return x===45||Ke(x)?(e.consume(x),C):B(x)}function B(x){return ie(x)?(a=B,ke(x)):ce(x)?(e.consume(x),B):Y(x)}function V(x){return x===45||Ke(x)?(e.consume(x),V):x===47||x===62||we(x)?ee(x):t(x)}function ee(x){return x===47?(e.consume(x),Y):x===58||x===95||en(x)?(e.consume(x),E):ie(x)?(a=ee,ke(x)):ce(x)?(e.consume(x),ee):Y(x)}function E(x){return x===45||x===46||x===58||x===95||Ke(x)?(e.consume(x),E):K(x)}function K(x){return x===61?(e.consume(x),Z):ie(x)?(a=K,ke(x)):ce(x)?(e.consume(x),K):ee(x)}function Z(x){return x===null||x===60||x===61||x===62||x===96?t(x):x===34||x===39?(e.consume(x),i=x,ue):ie(x)?(a=Z,ke(x)):ce(x)?(e.consume(x),Z):(e.consume(x),le)}function ue(x){return x===i?(e.consume(x),i=void 0,oe):x===null?t(x):ie(x)?(a=ue,ke(x)):(e.consume(x),ue)}function le(x){return x===null||x===34||x===39||x===60||x===61||x===96?t(x):x===47||x===62||we(x)?ee(x):(e.consume(x),le)}function oe(x){return x===47||x===62||we(x)?ee(x):t(x)}function Y(x){return x===62?(e.consume(x),e.exit("htmlTextData"),e.exit("htmlText"),n):t(x)}function ke(x){return e.exit("htmlTextData"),e.enter("lineEnding"),e.consume(x),e.exit("lineEnding"),W}function W(x){return ce(x)?me(e,te,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(x):te(x)}function te(x){return e.enter("htmlTextData"),a(x)}}const mc={name:"labelEnd",resolveAll:w_,resolveTo:__,tokenize:S_},v_={tokenize:C_},k_={tokenize:b_},x_={tokenize:E_};function w_(e){let n=-1;const t=[];for(;++n<e.length;){const r=e[n][1];if(t.push(e[n]),r.type==="labelImage"||r.type==="labelLink"||r.type==="labelEnd"){const i=r.type==="labelImage"?4:2;r.type="data",n+=i}}return e.length!==t.length&&kn(e,0,e.length,t),e}function __(e,n){let t=e.length,r=0,i,l,a,o;for(;t--;)if(i=e[t][1],l){if(i.type==="link"||i.type==="labelLink"&&i._inactive)break;e[t][0]==="enter"&&i.type==="labelLink"&&(i._inactive=!0)}else if(a){if(e[t][0]==="enter"&&(i.type==="labelImage"||i.type==="labelLink")&&!i._balanced&&(l=t,i.type!=="labelLink")){r=2;break}}else i.type==="labelEnd"&&(a=t);const u={type:e[l][1].type==="labelLink"?"link":"image",start:{...e[l][1].start},end:{...e[e.length-1][1].end}},s={type:"label",start:{...e[l][1].start},end:{...e[a][1].end}},d={type:"labelText",start:{...e[l+r+2][1].end},end:{...e[a-2][1].start}};return o=[["enter",u,n],["enter",s,n]],o=En(o,e.slice(l+1,l+r+3)),o=En(o,[["enter",d,n]]),o=En(o,La(n.parser.constructs.insideSpan.null,e.slice(l+r+4,a-3),n)),o=En(o,[["exit",d,n],e[a-2],e[a-1],["exit",s,n]]),o=En(o,e.slice(a+1)),o=En(o,[["exit",u,n]]),kn(e,l,e.length,o),e}function S_(e,n,t){const r=this;let i=r.events.length,l,a;for(;i--;)if((r.events[i][1].type==="labelImage"||r.events[i][1].type==="labelLink")&&!r.events[i][1]._balanced){l=r.events[i][1];break}return o;function o(p){return l?l._inactive?f(p):(a=r.parser.defined.includes(qn(r.sliceSerialize({start:l.end,end:r.now()}))),e.enter("labelEnd"),e.enter("labelMarker"),e.consume(p),e.exit("labelMarker"),e.exit("labelEnd"),u):t(p)}function u(p){return p===40?e.attempt(v_,d,a?d:f)(p):p===91?e.attempt(k_,d,a?s:f)(p):a?d(p):f(p)}function s(p){return e.attempt(x_,d,f)(p)}function d(p){return n(p)}function f(p){return l._balanced=!0,t(p)}}function C_(e,n,t){return r;function r(f){return e.enter("resource"),e.enter("resourceMarker"),e.consume(f),e.exit("resourceMarker"),i}function i(f){return we(f)?ki(e,l)(f):l(f)}function l(f){return f===41?d(f):jg(e,a,o,"resourceDestination","resourceDestinationLiteral","resourceDestinationLiteralMarker","resourceDestinationRaw","resourceDestinationString",32)(f)}function a(f){return we(f)?ki(e,u)(f):d(f)}function o(f){return t(f)}function u(f){return f===34||f===39||f===40?Ig(e,s,t,"resourceTitle","resourceTitleMarker","resourceTitleString")(f):d(f)}function s(f){return we(f)?ki(e,d)(f):d(f)}function d(f){return f===41?(e.enter("resourceMarker"),e.consume(f),e.exit("resourceMarker"),e.exit("resource"),n):t(f)}}function b_(e,n,t){const r=this;return i;function i(o){return Pg.call(r,e,l,a,"reference","referenceMarker","referenceString")(o)}function l(o){return r.parser.defined.includes(qn(r.sliceSerialize(r.events[r.events.length-1][1]).slice(1,-1)))?n(o):t(o)}function a(o){return t(o)}}function E_(e,n,t){return r;function r(l){return e.enter("reference"),e.enter("referenceMarker"),e.consume(l),e.exit("referenceMarker"),i}function i(l){return l===93?(e.enter("referenceMarker"),e.consume(l),e.exit("referenceMarker"),e.exit("reference"),n):t(l)}}const T_={name:"labelStartImage",resolveAll:mc.resolveAll,tokenize:z_};function z_(e,n,t){const r=this;return i;function i(o){return e.enter("labelImage"),e.enter("labelImageMarker"),e.consume(o),e.exit("labelImageMarker"),l}function l(o){return o===91?(e.enter("labelMarker"),e.consume(o),e.exit("labelMarker"),e.exit("labelImage"),a):t(o)}function a(o){return o===94&&"_hiddenFootnoteSupport"in r.parser.constructs?t(o):n(o)}}const A_={name:"labelStartLink",resolveAll:mc.resolveAll,tokenize:j_};function j_(e,n,t){const r=this;return i;function i(a){return e.enter("labelLink"),e.enter("labelMarker"),e.consume(a),e.exit("labelMarker"),e.exit("labelLink"),l}function l(a){return a===94&&"_hiddenFootnoteSupport"in r.parser.constructs?t(a):n(a)}}const Mo={name:"lineEnding",tokenize:P_};function P_(e,n){return t;function t(r){return e.enter("lineEnding"),e.consume(r),e.exit("lineEnding"),me(e,n,"linePrefix")}}const Il={name:"thematicBreak",tokenize:I_};function I_(e,n,t){let r=0,i;return l;function l(s){return e.enter("thematicBreak"),a(s)}function a(s){return i=s,o(s)}function o(s){return s===i?(e.enter("thematicBreakSequence"),u(s)):r>=3&&(s===null||ie(s))?(e.exit("thematicBreak"),n(s)):t(s)}function u(s){return s===i?(e.consume(s),r++,u):(e.exit("thematicBreakSequence"),ce(s)?me(e,o,"whitespace")(s):o(s))}}const on={continuation:{tokenize:R_},exit:q_,name:"list",tokenize:O_},N_={partial:!0,tokenize:F_},L_={partial:!0,tokenize:M_};function O_(e,n,t){const r=this,i=r.events[r.events.length-1];let l=i&&i[1].type==="linePrefix"?i[2].sliceSerialize(i[1],!0).length:0,a=0;return o;function o(h){const v=r.containerState.type||(h===42||h===43||h===45?"listUnordered":"listOrdered");if(v==="listUnordered"?!r.containerState.marker||h===r.containerState.marker:Gu(h)){if(r.containerState.type||(r.containerState.type=v,e.enter(v,{_container:!0})),v==="listUnordered")return e.enter("listItemPrefix"),h===42||h===45?e.check(Il,t,s)(h):s(h);if(!r.interrupt||h===49)return e.enter("listItemPrefix"),e.enter("listItemValue"),u(h)}return t(h)}function u(h){return Gu(h)&&++a<10?(e.consume(h),u):(!r.interrupt||a<2)&&(r.containerState.marker?h===r.containerState.marker:h===41||h===46)?(e.exit("listItemValue"),s(h)):t(h)}function s(h){return e.enter("listItemMarker"),e.consume(h),e.exit("listItemMarker"),r.containerState.marker=r.containerState.marker||h,e.check(Xi,r.interrupt?t:d,e.attempt(N_,p,f))}function d(h){return r.containerState.initialBlankLine=!0,l++,p(h)}function f(h){return ce(h)?(e.enter("listItemPrefixWhitespace"),e.consume(h),e.exit("listItemPrefixWhitespace"),p):t(h)}function p(h){return r.containerState.size=l+r.sliceSerialize(e.exit("listItemPrefix"),!0).length,n(h)}}function R_(e,n,t){const r=this;return r.containerState._closeFlow=void 0,e.check(Xi,i,l);function i(o){return r.containerState.furtherBlankLines=r.containerState.furtherBlankLines||r.containerState.initialBlankLine,me(e,n,"listItemIndent",r.containerState.size+1)(o)}function l(o){return r.containerState.furtherBlankLines||!ce(o)?(r.containerState.furtherBlankLines=void 0,r.containerState.initialBlankLine=void 0,a(o)):(r.containerState.furtherBlankLines=void 0,r.containerState.initialBlankLine=void 0,e.attempt(L_,n,a)(o))}function a(o){return r.containerState._closeFlow=!0,r.interrupt=void 0,me(e,e.attempt(on,n,t),"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(o)}}function M_(e,n,t){const r=this;return me(e,i,"listItemIndent",r.containerState.size+1);function i(l){const a=r.events[r.events.length-1];return a&&a[1].type==="listItemIndent"&&a[2].sliceSerialize(a[1],!0).length===r.containerState.size?n(l):t(l)}}function q_(e){e.exit(this.containerState.type)}function F_(e,n,t){const r=this;return me(e,i,"listItemPrefixWhitespace",r.parser.constructs.disable.null.includes("codeIndented")?void 0:5);function i(l){const a=r.events[r.events.length-1];return!ce(l)&&a&&a[1].type==="listItemPrefixWhitespace"?n(l):t(l)}}const qd={name:"setextUnderline",resolveTo:D_,tokenize:B_};function D_(e,n){let t=e.length,r,i,l;for(;t--;)if(e[t][0]==="enter"){if(e[t][1].type==="content"){r=t;break}e[t][1].type==="paragraph"&&(i=t)}else e[t][1].type==="content"&&e.splice(t,1),!l&&e[t][1].type==="definition"&&(l=t);const a={type:"setextHeading",start:{...e[r][1].start},end:{...e[e.length-1][1].end}};return e[i][1].type="setextHeadingText",l?(e.splice(i,0,["enter",a,n]),e.splice(l+1,0,["exit",e[r][1],n]),e[r][1].end={...e[l][1].end}):e[r][1]=a,e.push(["exit",a,n]),e}function B_(e,n,t){const r=this;let i;return l;function l(s){let d=r.events.length,f;for(;d--;)if(r.events[d][1].type!=="lineEnding"&&r.events[d][1].type!=="linePrefix"&&r.events[d][1].type!=="content"){f=r.events[d][1].type==="paragraph";break}return!r.parser.lazy[r.now().line]&&(r.interrupt||f)?(e.enter("setextHeadingLine"),i=s,a(s)):t(s)}function a(s){return e.enter("setextHeadingLineSequence"),o(s)}function o(s){return s===i?(e.consume(s),o):(e.exit("setextHeadingLineSequence"),ce(s)?me(e,u,"lineSuffix")(s):u(s))}function u(s){return s===null||ie(s)?(e.exit("setextHeadingLine"),n(s)):t(s)}}const U_={tokenize:H_};function H_(e){const n=this,t=e.attempt(Xi,r,e.attempt(this.parser.constructs.flowInitial,i,me(e,e.attempt(this.parser.constructs.flow,i,e.attempt(Yw,i)),"linePrefix")));return t;function r(l){if(l===null){e.consume(l);return}return e.enter("lineEndingBlank"),e.consume(l),e.exit("lineEndingBlank"),n.currentConstruct=void 0,t}function i(l){if(l===null){e.consume(l);return}return e.enter("lineEnding"),e.consume(l),e.exit("lineEnding"),n.currentConstruct=void 0,t}}const $_={resolveAll:Lg()},V_=Ng("string"),W_=Ng("text");function Ng(e){return{resolveAll:Lg(e==="text"?Q_:void 0),tokenize:n};function n(t){const r=this,i=this.parser.constructs[e],l=t.attempt(i,a,o);return a;function a(d){return s(d)?l(d):o(d)}function o(d){if(d===null){t.consume(d);return}return t.enter("data"),t.consume(d),u}function u(d){return s(d)?(t.exit("data"),l(d)):(t.consume(d),u)}function s(d){if(d===null)return!0;const f=i[d];let p=-1;if(f)for(;++p<f.length;){const h=f[p];if(!h.previous||h.previous.call(r,r.previous))return!0}return!1}}}function Lg(e){return n;function n(t,r){let i=-1,l;for(;++i<=t.length;)l===void 0?t[i]&&t[i][1].type==="data"&&(l=i,i++):(!t[i]||t[i][1].type!=="data")&&(i!==l+2&&(t[l][1].end=t[i-1][1].end,t.splice(l+2,i-l-2),i=l+2),l=void 0);return e?e(t,r):t}}function Q_(e,n){let t=0;for(;++t<=e.length;)if((t===e.length||e[t][1].type==="lineEnding")&&e[t-1][1].type==="data"){const r=e[t-1][1],i=n.sliceStream(r);let l=i.length,a=-1,o=0,u;for(;l--;){const s=i[l];if(typeof s=="string"){for(a=s.length;s.charCodeAt(a-1)===32;)o++,a--;if(a)break;a=-1}else if(s===-2)u=!0,o++;else if(s!==-1){l++;break}}if(n._contentTypeTextTrailing&&t===e.length&&(o=0),o){const s={type:t===e.length||u||o<2?"lineSuffix":"hardBreakTrailing",start:{_bufferIndex:l?a:r.start._bufferIndex+a,_index:r.start._index+l,line:r.end.line,column:r.end.column-o,offset:r.end.offset-o},end:{...r.end}};r.end={...s.start},r.start.offset===r.end.offset?Object.assign(r,s):(e.splice(t,0,["enter",s,n],["exit",s,n]),t+=2)}t++}return e}const Y_={42:on,43:on,45:on,48:on,49:on,50:on,51:on,52:on,53:on,54:on,55:on,56:on,57:on,62:Eg},K_={91:Zw},X_={[-2]:Ro,[-1]:Ro,32:Ro},J_={35:l_,42:Il,45:[qd,Il],60:s_,61:qd,95:Il,96:Rd,126:Rd},G_={38:zg,92:Tg},Z_={[-5]:Mo,[-4]:Mo,[-3]:Mo,33:T_,38:zg,42:Zu,60:[Aw,g_],91:A_,92:[r_,Tg],93:mc,95:Zu,96:Uw},eS={null:[Zu,$_]},nS={null:[42,95]},tS={null:[]},rS=Object.freeze(Object.defineProperty({__proto__:null,attentionMarkers:nS,contentInitial:K_,disable:tS,document:Y_,flow:J_,flowInitial:X_,insideSpan:eS,string:G_,text:Z_},Symbol.toStringTag,{value:"Module"}));function iS(e,n,t){let r={_bufferIndex:-1,_index:0,line:t&&t.line||1,column:t&&t.column||1,offset:t&&t.offset||0};const i={},l=[];let a=[],o=[];const u={attempt:B(R),check:B(C),consume:y,enter:k,exit:T,interrupt:B(C,{interrupt:!0})},s={code:null,containerState:{},defineSkip:w,events:[],now:v,parser:e,previous:null,sliceSerialize:p,sliceStream:h,write:f};let d=n.tokenize.call(s,u);return n.resolveAll&&l.push(n),s;function f(K){return a=En(a,K),b(),a[a.length-1]!==null?[]:(V(n,0),s.events=La(l,s.events,s),s.events)}function p(K,Z){return aS(h(K),Z)}function h(K){return lS(a,K)}function v(){const{_bufferIndex:K,_index:Z,line:ue,column:le,offset:oe}=r;return{_bufferIndex:K,_index:Z,line:ue,column:le,offset:oe}}function w(K){i[K.line]=K.column,E()}function b(){let K;for(;r._index<a.length;){const Z=a[r._index];if(typeof Z=="string")for(K=r._index,r._bufferIndex<0&&(r._bufferIndex=0);r._index===K&&r._bufferIndex<Z.length;)g(Z.charCodeAt(r._bufferIndex));else g(Z)}}function g(K){d=d(K)}function y(K){ie(K)?(r.line++,r.column=1,r.offset+=K===-3?2:1,E()):K!==-1&&(r.column++,r.offset++),r._bufferIndex<0?r._index++:(r._bufferIndex++,r._bufferIndex===a[r._index].length&&(r._bufferIndex=-1,r._index++)),s.previous=K}function k(K,Z){const ue=Z||{};return ue.type=K,ue.start=v(),s.events.push(["enter",ue,s]),o.push(ue),ue}function T(K){const Z=o.pop();return Z.end=v(),s.events.push(["exit",Z,s]),Z}function R(K,Z){V(K,Z.from)}function C(K,Z){Z.restore()}function B(K,Z){return ue;function ue(le,oe,Y){let ke,W,te,x;return Array.isArray(le)?pe(le):"tokenize"in le?pe([le]):se(le);function se(he){return Oe;function Oe(Ge){const ye=Ge!==null&&he[Ge],hn=Ge!==null&&he.null,an=[...Array.isArray(ye)?ye:ye?[ye]:[],...Array.isArray(hn)?hn:hn?[hn]:[]];return pe(an)(Ge)}}function pe(he){return ke=he,W=0,he.length===0?Y:_(he[W])}function _(he){return Oe;function Oe(Ge){return x=ee(),te=he,he.partial||(s.currentConstruct=he),he.name&&s.parser.constructs.disable.null.includes(he.name)?Se():he.tokenize.call(Z?Object.assign(Object.create(s),Z):s,u,Te,Se)(Ge)}}function Te(he){return K(te,x),oe}function Se(he){return x.restore(),++W<ke.length?_(ke[W]):Y}}}function V(K,Z){K.resolveAll&&!l.includes(K)&&l.push(K),K.resolve&&kn(s.events,Z,s.events.length-Z,K.resolve(s.events.slice(Z),s)),K.resolveTo&&(s.events=K.resolveTo(s.events,s))}function ee(){const K=v(),Z=s.previous,ue=s.currentConstruct,le=s.events.length,oe=Array.from(o);return{from:le,restore:Y};function Y(){r=K,s.previous=Z,s.currentConstruct=ue,s.events.length=le,o=oe,E()}}function E(){r.line in i&&r.column<2&&(r.column=i[r.line],r.offset+=i[r.line]-1)}}function lS(e,n){const t=n.start._index,r=n.start._bufferIndex,i=n.end._index,l=n.end._bufferIndex;let a;if(t===i)a=[e[t].slice(r,l)];else{if(a=e.slice(t,i),r>-1){const o=a[0];typeof o=="string"?a[0]=o.slice(r):a.shift()}l>0&&a.push(e[i].slice(0,l))}return a}function aS(e,n){let t=-1;const r=[];let i;for(;++t<e.length;){const l=e[t];let a;if(typeof l=="string")a=l;else switch(l){case-5:{a="\r";break}case-4:{a=`
`;break}case-3:{a=`\r
`;break}case-2:{a=n?" ":"	";break}case-1:{if(!n&&i)continue;a=" ";break}default:a=String.fromCharCode(l)}i=l===-2,r.push(a)}return r.join("")}function oS(e){const r={constructs:Cg([rS,...(e||{}).extensions||[]]),content:i(_w),defined:[],document:i(Cw),flow:i(U_),lazy:{},string:i(V_),text:i(W_)};return r;function i(l){return a;function a(o){return iS(r,l,o)}}}function uS(e){for(;!Ag(e););return e}const Fd=/[\0\t\n\r]/g;function sS(){let e=1,n="",t=!0,r;return i;function i(l,a,o){const u=[];let s,d,f,p,h;for(l=n+(typeof l=="string"?l.toString():new TextDecoder(a||void 0).decode(l)),f=0,n="",t&&(l.charCodeAt(0)===65279&&f++,t=void 0);f<l.length;){if(Fd.lastIndex=f,s=Fd.exec(l),p=s&&s.index!==void 0?s.index:l.length,h=l.charCodeAt(p),!s){n=l.slice(f);break}if(h===10&&f===p&&r)u.push(-3),r=void 0;else switch(r&&(u.push(-5),r=void 0),f<p&&(u.push(l.slice(f,p)),e+=p-f),h){case 0:{u.push(65533),e++;break}case 9:{for(d=Math.ceil(e/4)*4,u.push(-2);e++<d;)u.push(-1);break}case 10:{u.push(-4),e=1;break}default:r=!0,e=1}f=p+1}return o&&(r&&u.push(-5),n&&u.push(n),u.push(null)),u}}const cS=/\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;function fS(e){return e.replace(cS,dS)}function dS(e,n,t){if(n)return n;if(t.charCodeAt(0)===35){const i=t.charCodeAt(1),l=i===120||i===88;return bg(t.slice(l?2:1),l?16:10)}return hc(t)||e}const Og={}.hasOwnProperty;function pS(e,n,t){return n&&typeof n=="object"&&(t=n,n=void 0),hS(t)(uS(oS(t).document().write(sS()(e,n,!0))))}function hS(e){const n={transforms:[],canContainEols:["emphasis","fragment","heading","paragraph","strong"],enter:{autolink:l(lr),autolinkProtocol:ee,autolinkEmail:ee,atxHeading:l(Nt),blockQuote:l(hn),characterEscape:ee,characterReference:ee,codeFenced:l(an),codeFencedFenceInfo:a,codeFencedFenceMeta:a,codeIndented:l(an,a),codeText:l(tr,a),codeTextData:ee,data:ee,codeFlowValue:ee,definition:l(rr),definitionDestinationString:a,definitionLabelString:a,definitionTitleString:a,emphasis:l(It),hardBreakEscape:l(Lt),hardBreakTrailing:l(Lt),htmlFlow:l(Sn,a),htmlFlowData:ee,htmlText:l(Sn,a),htmlTextData:ee,image:l(ir),label:a,link:l(lr),listItem:l(ar),listItemValue:p,listOrdered:l(Ot,f),listUnordered:l(Ot),paragraph:l(Vr),reference:_,referenceString:a,resourceDestinationString:a,resourceTitleString:a,setextHeading:l(Nt),strong:l(Pn),thematicBreak:l(or)},exit:{atxHeading:u(),atxHeadingSequence:R,autolink:u(),autolinkEmail:ye,autolinkProtocol:Ge,blockQuote:u(),characterEscapeValue:E,characterReferenceMarkerHexadecimal:Se,characterReferenceMarkerNumeric:Se,characterReferenceValue:he,characterReference:Oe,codeFenced:u(b),codeFencedFence:w,codeFencedFenceInfo:h,codeFencedFenceMeta:v,codeFlowValue:E,codeIndented:u(g),codeText:u(oe),codeTextData:E,data:E,definition:u(),definitionDestinationString:T,definitionLabelString:y,definitionTitleString:k,emphasis:u(),hardBreakEscape:u(Z),hardBreakTrailing:u(Z),htmlFlow:u(ue),htmlFlowData:E,htmlText:u(le),htmlTextData:E,image:u(ke),label:te,labelText:W,lineEnding:K,link:u(Y),listItem:u(),listOrdered:u(),listUnordered:u(),paragraph:u(),referenceString:Te,resourceDestinationString:x,resourceTitleString:se,resource:pe,setextHeading:u(V),setextHeadingLineSequence:B,setextHeadingText:C,strong:u(),thematicBreak:u()}};Rg(n,(e||{}).mdastExtensions||[]);const t={};return r;function r(L){let Q={type:"root",children:[]};const c={stack:[Q],tokenStack:[],config:n,enter:o,exit:s,buffer:a,resume:d,data:t},S=[];let A=-1;for(;++A<L.length;)if(L[A][1].type==="listOrdered"||L[A][1].type==="listUnordered")if(L[A][0]==="enter")S.push(A);else{const P=S.pop();A=i(L,P,A)}for(A=-1;++A<L.length;){const P=n[L[A][0]];Og.call(P,L[A][1].type)&&P[L[A][1].type].call(Object.assign({sliceSerialize:L[A][2].sliceSerialize},c),L[A][1])}if(c.tokenStack.length>0){const P=c.tokenStack[c.tokenStack.length-1];(P[1]||Dd).call(c,void 0,P[0])}for(Q.position={start:st(L.length>0?L[0][1].start:{line:1,column:1,offset:0}),end:st(L.length>0?L[L.length-2][1].end:{line:1,column:1,offset:0})},A=-1;++A<n.transforms.length;)Q=n.transforms[A](Q)||Q;return Q}function i(L,Q,c){let S=Q-1,A=-1,P=!1,j,q,m,z;for(;++S<=c;){const M=L[S];switch(M[1].type){case"listUnordered":case"listOrdered":case"blockQuote":{M[0]==="enter"?A++:A--,z=void 0;break}case"lineEndingBlank":{M[0]==="enter"&&(j&&!z&&!A&&!m&&(m=S),z=void 0);break}case"linePrefix":case"listItemValue":case"listItemMarker":case"listItemPrefix":case"listItemPrefixWhitespace":break;default:z=void 0}if(!A&&M[0]==="enter"&&M[1].type==="listItemPrefix"||A===-1&&M[0]==="exit"&&(M[1].type==="listUnordered"||M[1].type==="listOrdered")){if(j){let I=S;for(q=void 0;I--;){const N=L[I];if(N[1].type==="lineEnding"||N[1].type==="lineEndingBlank"){if(N[0]==="exit")continue;q&&(L[q][1].type="lineEndingBlank",P=!0),N[1].type="lineEnding",q=I}else if(!(N[1].type==="linePrefix"||N[1].type==="blockQuotePrefix"||N[1].type==="blockQuotePrefixWhitespace"||N[1].type==="blockQuoteMarker"||N[1].type==="listItemIndent"))break}m&&(!q||m<q)&&(j._spread=!0),j.end=Object.assign({},q?L[q][1].start:M[1].end),L.splice(q||S,0,["exit",j,M[2]]),S++,c++}if(M[1].type==="listItemPrefix"){const I={type:"listItem",_spread:!1,start:Object.assign({},M[1].start),end:void 0};j=I,L.splice(S,0,["enter",I,M[2]]),S++,c++,m=void 0,z=!0}}}return L[Q][1]._spread=P,c}function l(L,Q){return c;function c(S){o.call(this,L(S),S),Q&&Q.call(this,S)}}function a(){this.stack.push({type:"fragment",children:[]})}function o(L,Q,c){this.stack[this.stack.length-1].children.push(L),this.stack.push(L),this.tokenStack.push([Q,c||void 0]),L.position={start:st(Q.start),end:void 0}}function u(L){return Q;function Q(c){L&&L.call(this,c),s.call(this,c)}}function s(L,Q){const c=this.stack.pop(),S=this.tokenStack.pop();if(S)S[0].type!==L.type&&(Q?Q.call(this,L,S[0]):(S[1]||Dd).call(this,L,S[0]));else throw new Error("Cannot close `"+L.type+"` ("+vi({start:L.start,end:L.end})+"): it’s not open");c.position.end=st(L.end)}function d(){return pc(this.stack.pop())}function f(){this.data.expectingFirstListItemValue=!0}function p(L){if(this.data.expectingFirstListItemValue){const Q=this.stack[this.stack.length-2];Q.start=Number.parseInt(this.sliceSerialize(L),10),this.data.expectingFirstListItemValue=void 0}}function h(){const L=this.resume(),Q=this.stack[this.stack.length-1];Q.lang=L}function v(){const L=this.resume(),Q=this.stack[this.stack.length-1];Q.meta=L}function w(){this.data.flowCodeInside||(this.buffer(),this.data.flowCodeInside=!0)}function b(){const L=this.resume(),Q=this.stack[this.stack.length-1];Q.value=L.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g,""),this.data.flowCodeInside=void 0}function g(){const L=this.resume(),Q=this.stack[this.stack.length-1];Q.value=L.replace(/(\r?\n|\r)$/g,"")}function y(L){const Q=this.resume(),c=this.stack[this.stack.length-1];c.label=Q,c.identifier=qn(this.sliceSerialize(L)).toLowerCase()}function k(){const L=this.resume(),Q=this.stack[this.stack.length-1];Q.title=L}function T(){const L=this.resume(),Q=this.stack[this.stack.length-1];Q.url=L}function R(L){const Q=this.stack[this.stack.length-1];if(!Q.depth){const c=this.sliceSerialize(L).length;Q.depth=c}}function C(){this.data.setextHeadingSlurpLineEnding=!0}function B(L){const Q=this.stack[this.stack.length-1];Q.depth=this.sliceSerialize(L).codePointAt(0)===61?1:2}function V(){this.data.setextHeadingSlurpLineEnding=void 0}function ee(L){const c=this.stack[this.stack.length-1].children;let S=c[c.length-1];(!S||S.type!=="text")&&(S=Wr(),S.position={start:st(L.start),end:void 0},c.push(S)),this.stack.push(S)}function E(L){const Q=this.stack.pop();Q.value+=this.sliceSerialize(L),Q.position.end=st(L.end)}function K(L){const Q=this.stack[this.stack.length-1];if(this.data.atHardBreak){const c=Q.children[Q.children.length-1];c.position.end=st(L.end),this.data.atHardBreak=void 0;return}!this.data.setextHeadingSlurpLineEnding&&n.canContainEols.includes(Q.type)&&(ee.call(this,L),E.call(this,L))}function Z(){this.data.atHardBreak=!0}function ue(){const L=this.resume(),Q=this.stack[this.stack.length-1];Q.value=L}function le(){const L=this.resume(),Q=this.stack[this.stack.length-1];Q.value=L}function oe(){const L=this.resume(),Q=this.stack[this.stack.length-1];Q.value=L}function Y(){const L=this.stack[this.stack.length-1];if(this.data.inReference){const Q=this.data.referenceType||"shortcut";L.type+="Reference",L.referenceType=Q,delete L.url,delete L.title}else delete L.identifier,delete L.label;this.data.referenceType=void 0}function ke(){const L=this.stack[this.stack.length-1];if(this.data.inReference){const Q=this.data.referenceType||"shortcut";L.type+="Reference",L.referenceType=Q,delete L.url,delete L.title}else delete L.identifier,delete L.label;this.data.referenceType=void 0}function W(L){const Q=this.sliceSerialize(L),c=this.stack[this.stack.length-2];c.label=fS(Q),c.identifier=qn(Q).toLowerCase()}function te(){const L=this.stack[this.stack.length-1],Q=this.resume(),c=this.stack[this.stack.length-1];if(this.data.inReference=!0,c.type==="link"){const S=L.children;c.children=S}else c.alt=Q}function x(){const L=this.resume(),Q=this.stack[this.stack.length-1];Q.url=L}function se(){const L=this.resume(),Q=this.stack[this.stack.length-1];Q.title=L}function pe(){this.data.inReference=void 0}function _(){this.data.referenceType="collapsed"}function Te(L){const Q=this.resume(),c=this.stack[this.stack.length-1];c.label=Q,c.identifier=qn(this.sliceSerialize(L)).toLowerCase(),this.data.referenceType="full"}function Se(L){this.data.characterReferenceType=L.type}function he(L){const Q=this.sliceSerialize(L),c=this.data.characterReferenceType;let S;c?(S=bg(Q,c==="characterReferenceMarkerNumeric"?10:16),this.data.characterReferenceType=void 0):S=hc(Q);const A=this.stack[this.stack.length-1];A.value+=S}function Oe(L){const Q=this.stack.pop();Q.position.end=st(L.end)}function Ge(L){E.call(this,L);const Q=this.stack[this.stack.length-1];Q.url=this.sliceSerialize(L)}function ye(L){E.call(this,L);const Q=this.stack[this.stack.length-1];Q.url="mailto:"+this.sliceSerialize(L)}function hn(){return{type:"blockquote",children:[]}}function an(){return{type:"code",lang:null,meta:null,value:""}}function tr(){return{type:"inlineCode",value:""}}function rr(){return{type:"definition",identifier:"",label:null,title:null,url:""}}function It(){return{type:"emphasis",children:[]}}function Nt(){return{type:"heading",depth:0,children:[]}}function Lt(){return{type:"break"}}function Sn(){return{type:"html",value:""}}function ir(){return{type:"image",title:null,url:"",alt:null}}function lr(){return{type:"link",title:null,url:"",children:[]}}function Ot(L){return{type:"list",ordered:L.type==="listOrdered",start:null,spread:L._spread,children:[]}}function ar(L){return{type:"listItem",spread:L._spread,checked:null,children:[]}}function Vr(){return{type:"paragraph",children:[]}}function Pn(){return{type:"strong",children:[]}}function Wr(){return{type:"text",value:""}}function or(){return{type:"thematicBreak"}}}function st(e){return{line:e.line,column:e.column,offset:e.offset}}function Rg(e,n){let t=-1;for(;++t<n.length;){const r=n[t];Array.isArray(r)?Rg(e,r):mS(e,r)}}function mS(e,n){let t;for(t in n)if(Og.call(n,t))switch(t){case"canContainEols":{const r=n[t];r&&e[t].push(...r);break}case"transforms":{const r=n[t];r&&e[t].push(...r);break}case"enter":case"exit":{const r=n[t];r&&Object.assign(e[t],r);break}}}function Dd(e,n){throw e?new Error("Cannot close `"+e.type+"` ("+vi({start:e.start,end:e.end})+"): a different token (`"+n.type+"`, "+vi({start:n.start,end:n.end})+") is open"):new Error("Cannot close document, a token (`"+n.type+"`, "+vi({start:n.start,end:n.end})+") is still open")}function gS(e){const n=this;n.parser=t;function t(r){return pS(r,{...n.data("settings"),...e,extensions:n.data("micromarkExtensions")||[],mdastExtensions:n.data("fromMarkdownExtensions")||[]})}}function yS(e,n){const t={type:"element",tagName:"blockquote",properties:{},children:e.wrap(e.all(n),!0)};return e.patch(n,t),e.applyData(n,t)}function vS(e,n){const t={type:"element",tagName:"br",properties:{},children:[]};return e.patch(n,t),[e.applyData(n,t),{type:"text",value:`
`}]}function kS(e,n){const t=n.value?n.value+`
`:"",r={},i=n.lang?n.lang.split(/\s+/):[];i.length>0&&(r.className=["language-"+i[0]]);let l={type:"element",tagName:"code",properties:r,children:[{type:"text",value:t}]};return n.meta&&(l.data={meta:n.meta}),e.patch(n,l),l=e.applyData(n,l),l={type:"element",tagName:"pre",properties:{},children:[l]},e.patch(n,l),l}function xS(e,n){const t={type:"element",tagName:"del",properties:{},children:e.all(n)};return e.patch(n,t),e.applyData(n,t)}function wS(e,n){const t={type:"element",tagName:"em",properties:{},children:e.all(n)};return e.patch(n,t),e.applyData(n,t)}function _S(e,n){const t=typeof e.options.clobberPrefix=="string"?e.options.clobberPrefix:"user-content-",r=String(n.identifier).toUpperCase(),i=$r(r.toLowerCase()),l=e.footnoteOrder.indexOf(r);let a,o=e.footnoteCounts.get(r);o===void 0?(o=0,e.footnoteOrder.push(r),a=e.footnoteOrder.length):a=l+1,o+=1,e.footnoteCounts.set(r,o);const u={type:"element",tagName:"a",properties:{href:"#"+t+"fn-"+i,id:t+"fnref-"+i+(o>1?"-"+o:""),dataFootnoteRef:!0,ariaDescribedBy:["footnote-label"]},children:[{type:"text",value:String(a)}]};e.patch(n,u);const s={type:"element",tagName:"sup",properties:{},children:[u]};return e.patch(n,s),e.applyData(n,s)}function SS(e,n){const t={type:"element",tagName:"h"+n.depth,properties:{},children:e.all(n)};return e.patch(n,t),e.applyData(n,t)}function CS(e,n){if(e.options.allowDangerousHtml){const t={type:"raw",value:n.value};return e.patch(n,t),e.applyData(n,t)}}function Mg(e,n){const t=n.referenceType;let r="]";if(t==="collapsed"?r+="[]":t==="full"&&(r+="["+(n.label||n.identifier)+"]"),n.type==="imageReference")return[{type:"text",value:"!["+n.alt+r}];const i=e.all(n),l=i[0];l&&l.type==="text"?l.value="["+l.value:i.unshift({type:"text",value:"["});const a=i[i.length-1];return a&&a.type==="text"?a.value+=r:i.push({type:"text",value:r}),i}function bS(e,n){const t=String(n.identifier).toUpperCase(),r=e.definitionById.get(t);if(!r)return Mg(e,n);const i={src:$r(r.url||""),alt:n.alt};r.title!==null&&r.title!==void 0&&(i.title=r.title);const l={type:"element",tagName:"img",properties:i,children:[]};return e.patch(n,l),e.applyData(n,l)}function ES(e,n){const t={src:$r(n.url)};n.alt!==null&&n.alt!==void 0&&(t.alt=n.alt),n.title!==null&&n.title!==void 0&&(t.title=n.title);const r={type:"element",tagName:"img",properties:t,children:[]};return e.patch(n,r),e.applyData(n,r)}function TS(e,n){const t={type:"text",value:n.value.replace(/\r?\n|\r/g," ")};e.patch(n,t);const r={type:"element",tagName:"code",properties:{},children:[t]};return e.patch(n,r),e.applyData(n,r)}function zS(e,n){const t=String(n.identifier).toUpperCase(),r=e.definitionById.get(t);if(!r)return Mg(e,n);const i={href:$r(r.url||"")};r.title!==null&&r.title!==void 0&&(i.title=r.title);const l={type:"element",tagName:"a",properties:i,children:e.all(n)};return e.patch(n,l),e.applyData(n,l)}function AS(e,n){const t={href:$r(n.url)};n.title!==null&&n.title!==void 0&&(t.title=n.title);const r={type:"element",tagName:"a",properties:t,children:e.all(n)};return e.patch(n,r),e.applyData(n,r)}function jS(e,n,t){const r=e.all(n),i=t?PS(t):qg(n),l={},a=[];if(typeof n.checked=="boolean"){const d=r[0];let f;d&&d.type==="element"&&d.tagName==="p"?f=d:(f={type:"element",tagName:"p",properties:{},children:[]},r.unshift(f)),f.children.length>0&&f.children.unshift({type:"text",value:" "}),f.children.unshift({type:"element",tagName:"input",properties:{type:"checkbox",checked:n.checked,disabled:!0},children:[]}),l.className=["task-list-item"]}let o=-1;for(;++o<r.length;){const d=r[o];(i||o!==0||d.type!=="element"||d.tagName!=="p")&&a.push({type:"text",value:`
`}),d.type==="element"&&d.tagName==="p"&&!i?a.push(...d.children):a.push(d)}const u=r[r.length-1];u&&(i||u.type!=="element"||u.tagName!=="p")&&a.push({type:"text",value:`
`});const s={type:"element",tagName:"li",properties:l,children:a};return e.patch(n,s),e.applyData(n,s)}function PS(e){let n=!1;if(e.type==="list"){n=e.spread||!1;const t=e.children;let r=-1;for(;!n&&++r<t.length;)n=qg(t[r])}return n}function qg(e){const n=e.spread;return n??e.children.length>1}function IS(e,n){const t={},r=e.all(n);let i=-1;for(typeof n.start=="number"&&n.start!==1&&(t.start=n.start);++i<r.length;){const a=r[i];if(a.type==="element"&&a.tagName==="li"&&a.properties&&Array.isArray(a.properties.className)&&a.properties.className.includes("task-list-item")){t.className=["contains-task-list"];break}}const l={type:"element",tagName:n.ordered?"ol":"ul",properties:t,children:e.wrap(r,!0)};return e.patch(n,l),e.applyData(n,l)}function NS(e,n){const t={type:"element",tagName:"p",properties:{},children:e.all(n)};return e.patch(n,t),e.applyData(n,t)}function LS(e,n){const t={type:"root",children:e.wrap(e.all(n))};return e.patch(n,t),e.applyData(n,t)}function OS(e,n){const t={type:"element",tagName:"strong",properties:{},children:e.all(n)};return e.patch(n,t),e.applyData(n,t)}function RS(e,n){const t=e.all(n),r=t.shift(),i=[];if(r){const a={type:"element",tagName:"thead",properties:{},children:e.wrap([r],!0)};e.patch(n.children[0],a),i.push(a)}if(t.length>0){const a={type:"element",tagName:"tbody",properties:{},children:e.wrap(t,!0)},o=sc(n.children[1]),u=yg(n.children[n.children.length-1]);o&&u&&(a.position={start:o,end:u}),i.push(a)}const l={type:"element",tagName:"table",properties:{},children:e.wrap(i,!0)};return e.patch(n,l),e.applyData(n,l)}function MS(e,n,t){const r=t?t.children:void 0,l=(r?r.indexOf(n):1)===0?"th":"td",a=t&&t.type==="table"?t.align:void 0,o=a?a.length:n.children.length;let u=-1;const s=[];for(;++u<o;){const f=n.children[u],p={},h=a?a[u]:void 0;h&&(p.align=h);let v={type:"element",tagName:l,properties:p,children:[]};f&&(v.children=e.all(f),e.patch(f,v),v=e.applyData(f,v)),s.push(v)}const d={type:"element",tagName:"tr",properties:{},children:e.wrap(s,!0)};return e.patch(n,d),e.applyData(n,d)}function qS(e,n){const t={type:"element",tagName:"td",properties:{},children:e.all(n)};return e.patch(n,t),e.applyData(n,t)}const Bd=9,Ud=32;function FS(e){const n=String(e),t=/\r?\n|\r/g;let r=t.exec(n),i=0;const l=[];for(;r;)l.push(Hd(n.slice(i,r.index),i>0,!0),r[0]),i=r.index+r[0].length,r=t.exec(n);return l.push(Hd(n.slice(i),i>0,!1)),l.join("")}function Hd(e,n,t){let r=0,i=e.length;if(n){let l=e.codePointAt(r);for(;l===Bd||l===Ud;)r++,l=e.codePointAt(r)}if(t){let l=e.codePointAt(i-1);for(;l===Bd||l===Ud;)i--,l=e.codePointAt(i-1)}return i>r?e.slice(r,i):""}function DS(e,n){const t={type:"text",value:FS(String(n.value))};return e.patch(n,t),e.applyData(n,t)}function BS(e,n){const t={type:"element",tagName:"hr",properties:{},children:[]};return e.patch(n,t),e.applyData(n,t)}const US={blockquote:yS,break:vS,code:kS,delete:xS,emphasis:wS,footnoteReference:_S,heading:SS,html:CS,imageReference:bS,image:ES,inlineCode:TS,linkReference:zS,link:AS,listItem:jS,list:IS,paragraph:NS,root:LS,strong:OS,table:RS,tableCell:qS,tableRow:MS,text:DS,thematicBreak:BS,toml:gl,yaml:gl,definition:gl,footnoteDefinition:gl};function gl(){}const Fg=-1,Oa=0,xi=1,ca=2,gc=3,yc=4,vc=5,kc=6,Dg=7,Bg=8,Ug=typeof self=="object"?self:globalThis,$d=(e,n)=>{switch(e){case"Function":case"SharedWorker":case"Worker":case"eval":case"setInterval":case"setTimeout":throw new TypeError("unable to deserialize "+e)}return new Ug[e](n)},HS=(e,n)=>{const t=(i,l)=>(e.set(l,i),i),r=i=>{if(e.has(i))return e.get(i);const[l,a]=n[i];switch(l){case Oa:case Fg:return t(a,i);case xi:{const o=t([],i);for(const u of a)o.push(r(u));return o}case ca:{const o=t({},i);for(const[u,s]of a)o[r(u)]=r(s);return o}case gc:return t(new Date(a),i);case yc:{const{source:o,flags:u}=a;return t(new RegExp(o,u),i)}case vc:{const o=t(new Map,i);for(const[u,s]of a)o.set(r(u),r(s));return o}case kc:{const o=t(new Set,i);for(const u of a)o.add(r(u));return o}case Dg:{const{name:o,message:u}=a;return t(typeof Ug[o]=="function"?$d(o,u):new Error(u),i)}case Bg:return t(BigInt(a),i);case"BigInt":return t(Object(BigInt(a)),i);case"ArrayBuffer":return t(new Uint8Array(a).buffer,a);case"DataView":{const{buffer:o}=new Uint8Array(a);return t(new DataView(o),a)}}return t($d(l,a),i)};return r},Vd=e=>HS(new Map,e)(0),Ft="",{toString:$S}={},{keys:VS}=Object,ii=e=>{const n=typeof e;if(n!=="object"||!e)return[Oa,n];const t=$S.call(e).slice(8,-1);switch(t){case"Array":return[xi,Ft];case"Object":return[ca,Ft];case"Date":return[gc,Ft];case"RegExp":return[yc,Ft];case"Map":return[vc,Ft];case"Set":return[kc,Ft];case"DataView":return[xi,t]}return t.includes("Array")?[xi,t]:e instanceof Error?[Dg,e.name||"Error"]:[ca,t]},yl=([e,n])=>e===Oa&&(n==="function"||n==="symbol"),WS=(e,n,t,r)=>{const i=(a,o)=>{const u=r.push(a)-1;return t.set(o,u),u},l=a=>{if(t.has(a))return t.get(a);let[o,u]=ii(a);switch(o){case Oa:{let d=a;switch(u){case"bigint":o=Bg,d=a.toString();break;case"function":case"symbol":if(e)throw new TypeError("unable to serialize "+u);d=null;break;case"undefined":return i([Fg],a)}return i([o,d],a)}case xi:{if(u){let p=a;return u==="DataView"?p=new Uint8Array(a.buffer):u==="ArrayBuffer"&&(p=new Uint8Array(a)),i([u,[...p]],a)}const d=[],f=i([o,d],a);for(const p of a)d.push(l(p));return f}case ca:{if(u)switch(u){case"BigInt":return i([u,a.toString()],a);case"Boolean":case"Number":case"String":return i([u,a.valueOf()],a)}if(n&&"toJSON"in a)return l(a.toJSON());const d=[],f=i([o,d],a);for(const p of VS(a))(e||!yl(ii(a[p])))&&d.push([l(p),l(a[p])]);return f}case gc:return i([o,isNaN(a.getTime())?Ft:a.toISOString()],a);case yc:{const{source:d,flags:f}=a;return i([o,{source:d,flags:f}],a)}case vc:{const d=[],f=i([o,d],a);for(const[p,h]of a)(e||!(yl(ii(p))||yl(ii(h))))&&d.push([l(p),l(h)]);return f}case kc:{const d=[],f=i([o,d],a);for(const p of a)(e||!yl(ii(p)))&&d.push(l(p));return f}}const{message:s}=a;return i([o,{name:u,message:s}],a)};return l},Wd=(e,{json:n,lossy:t}={})=>{const r=[];return WS(!(n||t),!!n,new Map,r)(e),r},fa=typeof structuredClone=="function"?(e,n)=>n&&("json"in n||"lossy"in n)?Vd(Wd(e,n)):structuredClone(e):(e,n)=>Vd(Wd(e,n));function QS(e,n){const t=[{type:"text",value:"↩"}];return n>1&&t.push({type:"element",tagName:"sup",properties:{},children:[{type:"text",value:String(n)}]}),t}function YS(e,n){return"Back to reference "+(e+1)+(n>1?"-"+n:"")}function KS(e){const n=typeof e.options.clobberPrefix=="string"?e.options.clobberPrefix:"user-content-",t=e.options.footnoteBackContent||QS,r=e.options.footnoteBackLabel||YS,i=e.options.footnoteLabel||"Footnotes",l=e.options.footnoteLabelTagName||"h2",a=e.options.footnoteLabelProperties||{className:["sr-only"]},o=[];let u=-1;for(;++u<e.footnoteOrder.length;){const s=e.footnoteById.get(e.footnoteOrder[u]);if(!s)continue;const d=e.all(s),f=String(s.identifier).toUpperCase(),p=$r(f.toLowerCase());let h=0;const v=[],w=e.footnoteCounts.get(f);for(;w!==void 0&&++h<=w;){v.length>0&&v.push({type:"text",value:" "});let y=typeof t=="string"?t:t(u,h);typeof y=="string"&&(y={type:"text",value:y}),v.push({type:"element",tagName:"a",properties:{href:"#"+n+"fnref-"+p+(h>1?"-"+h:""),dataFootnoteBackref:"",ariaLabel:typeof r=="string"?r:r(u,h),className:["data-footnote-backref"]},children:Array.isArray(y)?y:[y]})}const b=d[d.length-1];if(b&&b.type==="element"&&b.tagName==="p"){const y=b.children[b.children.length-1];y&&y.type==="text"?y.value+=" ":b.children.push({type:"text",value:" "}),b.children.push(...v)}else d.push(...v);const g={type:"element",tagName:"li",properties:{id:n+"fn-"+p},children:e.wrap(d,!0)};e.patch(s,g),o.push(g)}if(o.length!==0)return{type:"element",tagName:"section",properties:{dataFootnotes:!0,className:["footnotes"]},children:[{type:"element",tagName:l,properties:{...fa(a),id:"footnote-label"},children:[{type:"text",value:i}]},{type:"text",value:`
`},{type:"element",tagName:"ol",properties:{},children:e.wrap(o,!0)},{type:"text",value:`
`}]}}const Ra=function(e){if(e==null)return ZS;if(typeof e=="function")return Ma(e);if(typeof e=="object")return Array.isArray(e)?XS(e):JS(e);if(typeof e=="string")return GS(e);throw new Error("Expected function, string, or object as test")};function XS(e){const n=[];let t=-1;for(;++t<e.length;)n[t]=Ra(e[t]);return Ma(r);function r(...i){let l=-1;for(;++l<n.length;)if(n[l].apply(this,i))return!0;return!1}}function JS(e){const n=e;return Ma(t);function t(r){const i=r;let l;for(l in e)if(i[l]!==n[l])return!1;return!0}}function GS(e){return Ma(n);function n(t){return t&&t.type===e}}function Ma(e){return n;function n(t,r,i){return!!(eC(t)&&e.call(this,t,typeof r=="number"?r:void 0,i||void 0))}}function ZS(){return!0}function eC(e){return e!==null&&typeof e=="object"&&"type"in e}const Hg=[],nC=!0,es=!1,tC="skip";function $g(e,n,t,r){let i;typeof n=="function"&&typeof t!="function"?(r=t,t=n):i=n;const l=Ra(i),a=r?-1:1;o(e,void 0,[])();function o(u,s,d){const f=u&&typeof u=="object"?u:{};if(typeof f.type=="string"){const h=typeof f.tagName=="string"?f.tagName:typeof f.name=="string"?f.name:void 0;Object.defineProperty(p,"name",{value:"node ("+(u.type+(h?"<"+h+">":""))+")"})}return p;function p(){let h=Hg,v,w,b;if((!n||l(u,s,d[d.length-1]||void 0))&&(h=rC(t(u,d)),h[0]===es))return h;if("children"in u&&u.children){const g=u;if(g.children&&h[0]!==tC)for(w=(r?g.children.length:-1)+a,b=d.concat(g);w>-1&&w<g.children.length;){const y=g.children[w];if(v=o(y,w,b)(),v[0]===es)return v;w=typeof v[1]=="number"?v[1]:w+a}}return h}}}function rC(e){return Array.isArray(e)?e:typeof e=="number"?[nC,e]:e==null?Hg:[e]}function xc(e,n,t,r){let i,l,a;typeof n=="function"&&typeof t!="function"?(l=void 0,a=n,i=t):(l=n,a=t,i=r),$g(e,l,o,i);function o(u,s){const d=s[s.length-1],f=d?d.children.indexOf(u):void 0;return a(u,f,d)}}const ns={}.hasOwnProperty,iC={};function lC(e,n){const t=n||iC,r=new Map,i=new Map,l=new Map,a={...US,...t.handlers},o={all:s,applyData:oC,definitionById:r,footnoteById:i,footnoteCounts:l,footnoteOrder:[],handlers:a,one:u,options:t,patch:aC,wrap:sC};return xc(e,function(d){if(d.type==="definition"||d.type==="footnoteDefinition"){const f=d.type==="definition"?r:i,p=String(d.identifier).toUpperCase();f.has(p)||f.set(p,d)}}),o;function u(d,f){const p=d.type,h=o.handlers[p];if(ns.call(o.handlers,p)&&h)return h(o,d,f);if(o.options.passThrough&&o.options.passThrough.includes(p)){if("children"in d){const{children:w,...b}=d,g=fa(b);return g.children=o.all(d),g}return fa(d)}return(o.options.unknownHandler||uC)(o,d,f)}function s(d){const f=[];if("children"in d){const p=d.children;let h=-1;for(;++h<p.length;){const v=o.one(p[h],d);if(v){if(h&&p[h-1].type==="break"&&(!Array.isArray(v)&&v.type==="text"&&(v.value=Qd(v.value)),!Array.isArray(v)&&v.type==="element")){const w=v.children[0];w&&w.type==="text"&&(w.value=Qd(w.value))}Array.isArray(v)?f.push(...v):f.push(v)}}}return f}}function aC(e,n){e.position&&(n.position=Yx(e))}function oC(e,n){let t=n;if(e&&e.data){const r=e.data.hName,i=e.data.hChildren,l=e.data.hProperties;if(typeof r=="string")if(t.type==="element")t.tagName=r;else{const a="children"in t?t.children:[t];t={type:"element",tagName:r,properties:{},children:a}}t.type==="element"&&l&&Object.assign(t.properties,fa(l)),"children"in t&&t.children&&i!==null&&i!==void 0&&(t.children=i)}return t}function uC(e,n){const t=n.data||{},r="value"in n&&!(ns.call(t,"hProperties")||ns.call(t,"hChildren"))?{type:"text",value:n.value}:{type:"element",tagName:"div",properties:{},children:e.all(n)};return e.patch(n,r),e.applyData(n,r)}function sC(e,n){const t=[];let r=-1;for(n&&t.push({type:"text",value:`
`});++r<e.length;)r&&t.push({type:"text",value:`
`}),t.push(e[r]);return n&&e.length>0&&t.push({type:"text",value:`
`}),t}function Qd(e){let n=0,t=e.charCodeAt(n);for(;t===9||t===32;)n++,t=e.charCodeAt(n);return e.slice(n)}function Yd(e,n){const t=lC(e,n),r=t.one(e,void 0),i=KS(t),l=Array.isArray(r)?{type:"root",children:r}:r||{type:"root",children:[]};return i&&l.children.push({type:"text",value:`
`},i),l}function cC(e,n){return e&&"run"in e?async function(t,r){const i=Yd(t,{file:r,...n});await e.run(i,r)}:function(t,r){return Yd(t,{file:r,...e||n})}}function Kd(e){if(e)throw e}var Nl=Object.prototype.hasOwnProperty,Vg=Object.prototype.toString,Xd=Object.defineProperty,Jd=Object.getOwnPropertyDescriptor,Gd=function(n){return typeof Array.isArray=="function"?Array.isArray(n):Vg.call(n)==="[object Array]"},Zd=function(n){if(!n||Vg.call(n)!=="[object Object]")return!1;var t=Nl.call(n,"constructor"),r=n.constructor&&n.constructor.prototype&&Nl.call(n.constructor.prototype,"isPrototypeOf");if(n.constructor&&!t&&!r)return!1;var i;for(i in n);return typeof i>"u"||Nl.call(n,i)},ep=function(n,t){Xd&&t.name==="__proto__"?Xd(n,t.name,{enumerable:!0,configurable:!0,value:t.newValue,writable:!0}):n[t.name]=t.newValue},np=function(n,t){if(t==="__proto__")if(Nl.call(n,t)){if(Jd)return Jd(n,t).value}else return;return n[t]},fC=function e(){var n,t,r,i,l,a,o=arguments[0],u=1,s=arguments.length,d=!1;for(typeof o=="boolean"&&(d=o,o=arguments[1]||{},u=2),(o==null||typeof o!="object"&&typeof o!="function")&&(o={});u<s;++u)if(n=arguments[u],n!=null)for(t in n)r=np(o,t),i=np(n,t),o!==i&&(d&&i&&(Zd(i)||(l=Gd(i)))?(l?(l=!1,a=r&&Gd(r)?r:[]):a=r&&Zd(r)?r:{},ep(o,{name:t,newValue:e(d,a,i)})):typeof i<"u"&&ep(o,{name:t,newValue:i}));return o};const qo=ls(fC);function ts(e){if(typeof e!="object"||e===null)return!1;const n=Object.getPrototypeOf(e);return(n===null||n===Object.prototype||Object.getPrototypeOf(n)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)}function dC(){const e=[],n={run:t,use:r};return n;function t(...i){let l=-1;const a=i.pop();if(typeof a!="function")throw new TypeError("Expected function as last argument, not "+a);o(null,...i);function o(u,...s){const d=e[++l];let f=-1;if(u){a(u);return}for(;++f<i.length;)(s[f]===null||s[f]===void 0)&&(s[f]=i[f]);i=s,d?pC(d,o)(...s):a(null,...s)}}function r(i){if(typeof i!="function")throw new TypeError("Expected `middelware` to be a function, not "+i);return e.push(i),n}}function pC(e,n){let t;return r;function r(...a){const o=e.length>a.length;let u;o&&a.push(i);try{u=e.apply(this,a)}catch(s){const d=s;if(o&&t)throw d;return i(d)}o||(u&&u.then&&typeof u.then=="function"?u.then(l,i):u instanceof Error?i(u):l(u))}function i(a,...o){t||(t=!0,n(a,...o))}function l(a){i(null,a)}}const Hn={basename:hC,dirname:mC,extname:gC,join:yC,sep:"/"};function hC(e,n){if(n!==void 0&&typeof n!="string")throw new TypeError('"ext" argument must be a string');Ji(e);let t=0,r=-1,i=e.length,l;if(n===void 0||n.length===0||n.length>e.length){for(;i--;)if(e.codePointAt(i)===47){if(l){t=i+1;break}}else r<0&&(l=!0,r=i+1);return r<0?"":e.slice(t,r)}if(n===e)return"";let a=-1,o=n.length-1;for(;i--;)if(e.codePointAt(i)===47){if(l){t=i+1;break}}else a<0&&(l=!0,a=i+1),o>-1&&(e.codePointAt(i)===n.codePointAt(o--)?o<0&&(r=i):(o=-1,r=a));return t===r?r=a:r<0&&(r=e.length),e.slice(t,r)}function mC(e){if(Ji(e),e.length===0)return".";let n=-1,t=e.length,r;for(;--t;)if(e.codePointAt(t)===47){if(r){n=t;break}}else r||(r=!0);return n<0?e.codePointAt(0)===47?"/":".":n===1&&e.codePointAt(0)===47?"//":e.slice(0,n)}function gC(e){Ji(e);let n=e.length,t=-1,r=0,i=-1,l=0,a;for(;n--;){const o=e.codePointAt(n);if(o===47){if(a){r=n+1;break}continue}t<0&&(a=!0,t=n+1),o===46?i<0?i=n:l!==1&&(l=1):i>-1&&(l=-1)}return i<0||t<0||l===0||l===1&&i===t-1&&i===r+1?"":e.slice(i,t)}function yC(...e){let n=-1,t;for(;++n<e.length;)Ji(e[n]),e[n]&&(t=t===void 0?e[n]:t+"/"+e[n]);return t===void 0?".":vC(t)}function vC(e){Ji(e);const n=e.codePointAt(0)===47;let t=kC(e,!n);return t.length===0&&!n&&(t="."),t.length>0&&e.codePointAt(e.length-1)===47&&(t+="/"),n?"/"+t:t}function kC(e,n){let t="",r=0,i=-1,l=0,a=-1,o,u;for(;++a<=e.length;){if(a<e.length)o=e.codePointAt(a);else{if(o===47)break;o=47}if(o===47){if(!(i===a-1||l===1))if(i!==a-1&&l===2){if(t.length<2||r!==2||t.codePointAt(t.length-1)!==46||t.codePointAt(t.length-2)!==46){if(t.length>2){if(u=t.lastIndexOf("/"),u!==t.length-1){u<0?(t="",r=0):(t=t.slice(0,u),r=t.length-1-t.lastIndexOf("/")),i=a,l=0;continue}}else if(t.length>0){t="",r=0,i=a,l=0;continue}}n&&(t=t.length>0?t+"/..":"..",r=2)}else t.length>0?t+="/"+e.slice(i+1,a):t=e.slice(i+1,a),r=a-i-1;i=a,l=0}else o===46&&l>-1?l++:l=-1}return t}function Ji(e){if(typeof e!="string")throw new TypeError("Path must be a string. Received "+JSON.stringify(e))}const xC={cwd:wC};function wC(){return"/"}function rs(e){return!!(e!==null&&typeof e=="object"&&"href"in e&&e.href&&"protocol"in e&&e.protocol&&e.auth===void 0)}function _C(e){if(typeof e=="string")e=new URL(e);else if(!rs(e)){const n=new TypeError('The "path" argument must be of type string or an instance of URL. Received `'+e+"`");throw n.code="ERR_INVALID_ARG_TYPE",n}if(e.protocol!=="file:"){const n=new TypeError("The URL must be of scheme file");throw n.code="ERR_INVALID_URL_SCHEME",n}return SC(e)}function SC(e){if(e.hostname!==""){const r=new TypeError('File URL host must be "localhost" or empty on darwin');throw r.code="ERR_INVALID_FILE_URL_HOST",r}const n=e.pathname;let t=-1;for(;++t<n.length;)if(n.codePointAt(t)===37&&n.codePointAt(t+1)===50){const r=n.codePointAt(t+2);if(r===70||r===102){const i=new TypeError("File URL path must not include encoded / characters");throw i.code="ERR_INVALID_FILE_URL_PATH",i}}return decodeURIComponent(n)}const Fo=["history","path","basename","stem","extname","dirname"];class Wg{constructor(n){let t;n?rs(n)?t={path:n}:typeof n=="string"||CC(n)?t={value:n}:t=n:t={},this.cwd="cwd"in t?"":xC.cwd(),this.data={},this.history=[],this.messages=[],this.value,this.map,this.result,this.stored;let r=-1;for(;++r<Fo.length;){const l=Fo[r];l in t&&t[l]!==void 0&&t[l]!==null&&(this[l]=l==="history"?[...t[l]]:t[l])}let i;for(i in t)Fo.includes(i)||(this[i]=t[i])}get basename(){return typeof this.path=="string"?Hn.basename(this.path):void 0}set basename(n){Bo(n,"basename"),Do(n,"basename"),this.path=Hn.join(this.dirname||"",n)}get dirname(){return typeof this.path=="string"?Hn.dirname(this.path):void 0}set dirname(n){tp(this.basename,"dirname"),this.path=Hn.join(n||"",this.basename)}get extname(){return typeof this.path=="string"?Hn.extname(this.path):void 0}set extname(n){if(Do(n,"extname"),tp(this.dirname,"extname"),n){if(n.codePointAt(0)!==46)throw new Error("`extname` must start with `.`");if(n.includes(".",1))throw new Error("`extname` cannot contain multiple dots")}this.path=Hn.join(this.dirname,this.stem+(n||""))}get path(){return this.history[this.history.length-1]}set path(n){rs(n)&&(n=_C(n)),Bo(n,"path"),this.path!==n&&this.history.push(n)}get stem(){return typeof this.path=="string"?Hn.basename(this.path,this.extname):void 0}set stem(n){Bo(n,"stem"),Do(n,"stem"),this.path=Hn.join(this.dirname||"",n+(this.extname||""))}fail(n,t,r){const i=this.message(n,t,r);throw i.fatal=!0,i}info(n,t,r){const i=this.message(n,t,r);return i.fatal=void 0,i}message(n,t,r){const i=new Je(n,t,r);return this.path&&(i.name=this.path+":"+i.name,i.file=this.path),i.fatal=!1,this.messages.push(i),i}toString(n){return this.value===void 0?"":typeof this.value=="string"?this.value:new TextDecoder(n||void 0).decode(this.value)}}function Do(e,n){if(e&&e.includes(Hn.sep))throw new Error("`"+n+"` cannot be a path: did not expect `"+Hn.sep+"`")}function Bo(e,n){if(!e)throw new Error("`"+n+"` cannot be empty")}function tp(e,n){if(!e)throw new Error("Setting `"+n+"` requires `path` to be set too")}function CC(e){return!!(e&&typeof e=="object"&&"byteLength"in e&&"byteOffset"in e)}const bC=function(e){const r=this.constructor.prototype,i=r[e],l=function(){return i.apply(l,arguments)};return Object.setPrototypeOf(l,r),l},EC={}.hasOwnProperty;class wc extends bC{constructor(){super("copy"),this.Compiler=void 0,this.Parser=void 0,this.attachers=[],this.compiler=void 0,this.freezeIndex=-1,this.frozen=void 0,this.namespace={},this.parser=void 0,this.transformers=dC()}copy(){const n=new wc;let t=-1;for(;++t<this.attachers.length;){const r=this.attachers[t];n.use(...r)}return n.data(qo(!0,{},this.namespace)),n}data(n,t){return typeof n=="string"?arguments.length===2?($o("data",this.frozen),this.namespace[n]=t,this):EC.call(this.namespace,n)&&this.namespace[n]||void 0:n?($o("data",this.frozen),this.namespace=n,this):this.namespace}freeze(){if(this.frozen)return this;const n=this;for(;++this.freezeIndex<this.attachers.length;){const[t,...r]=this.attachers[this.freezeIndex];if(r[0]===!1)continue;r[0]===!0&&(r[0]=void 0);const i=t.call(n,...r);typeof i=="function"&&this.transformers.use(i)}return this.frozen=!0,this.freezeIndex=Number.POSITIVE_INFINITY,this}parse(n){this.freeze();const t=vl(n),r=this.parser||this.Parser;return Uo("parse",r),r(String(t),t)}process(n,t){const r=this;return this.freeze(),Uo("process",this.parser||this.Parser),Ho("process",this.compiler||this.Compiler),t?i(void 0,t):new Promise(i);function i(l,a){const o=vl(n),u=r.parse(o);r.run(u,o,function(d,f,p){if(d||!f||!p)return s(d);const h=f,v=r.stringify(h,p);AC(v)?p.value=v:p.result=v,s(d,p)});function s(d,f){d||!f?a(d):l?l(f):t(void 0,f)}}}processSync(n){let t=!1,r;return this.freeze(),Uo("processSync",this.parser||this.Parser),Ho("processSync",this.compiler||this.Compiler),this.process(n,i),ip("processSync","process",t),r;function i(l,a){t=!0,Kd(l),r=a}}run(n,t,r){rp(n),this.freeze();const i=this.transformers;return!r&&typeof t=="function"&&(r=t,t=void 0),r?l(void 0,r):new Promise(l);function l(a,o){const u=vl(t);i.run(n,u,s);function s(d,f,p){const h=f||n;d?o(d):a?a(h):r(void 0,h,p)}}}runSync(n,t){let r=!1,i;return this.run(n,t,l),ip("runSync","run",r),i;function l(a,o){Kd(a),i=o,r=!0}}stringify(n,t){this.freeze();const r=vl(t),i=this.compiler||this.Compiler;return Ho("stringify",i),rp(n),i(n,r)}use(n,...t){const r=this.attachers,i=this.namespace;if($o("use",this.frozen),n!=null)if(typeof n=="function")u(n,t);else if(typeof n=="object")Array.isArray(n)?o(n):a(n);else throw new TypeError("Expected usable value, not `"+n+"`");return this;function l(s){if(typeof s=="function")u(s,[]);else if(typeof s=="object")if(Array.isArray(s)){const[d,...f]=s;u(d,f)}else a(s);else throw new TypeError("Expected usable value, not `"+s+"`")}function a(s){if(!("plugins"in s)&&!("settings"in s))throw new Error("Expected usable value but received an empty preset, which is probably a mistake: presets typically come with `plugins` and sometimes with `settings`, but this has neither");o(s.plugins),s.settings&&(i.settings=qo(!0,i.settings,s.settings))}function o(s){let d=-1;if(s!=null)if(Array.isArray(s))for(;++d<s.length;){const f=s[d];l(f)}else throw new TypeError("Expected a list of plugins, not `"+s+"`")}function u(s,d){let f=-1,p=-1;for(;++f<r.length;)if(r[f][0]===s){p=f;break}if(p===-1)r.push([s,...d]);else if(d.length>0){let[h,...v]=d;const w=r[p][1];ts(w)&&ts(h)&&(h=qo(!0,w,h)),r[p]=[s,h,...v]}}}}const TC=new wc().freeze();function Uo(e,n){if(typeof n!="function")throw new TypeError("Cannot `"+e+"` without `parser`")}function Ho(e,n){if(typeof n!="function")throw new TypeError("Cannot `"+e+"` without `compiler`")}function $o(e,n){if(n)throw new Error("Cannot call `"+e+"` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`.")}function rp(e){if(!ts(e)||typeof e.type!="string")throw new TypeError("Expected node, got `"+e+"`")}function ip(e,n,t){if(!t)throw new Error("`"+e+"` finished async. Use `"+n+"` instead")}function vl(e){return zC(e)?e:new Wg(e)}function zC(e){return!!(e&&typeof e=="object"&&"message"in e&&"messages"in e)}function AC(e){return typeof e=="string"||jC(e)}function jC(e){return!!(e&&typeof e=="object"&&"byteLength"in e&&"byteOffset"in e)}const PC="https://github.com/remarkjs/react-markdown/blob/main/changelog.md",lp=[],ap={allowDangerousHtml:!0},IC=/^(https?|ircs?|mailto|xmpp)$/i,NC=[{from:"astPlugins",id:"remove-buggy-html-in-markdown-parser"},{from:"allowDangerousHtml",id:"remove-buggy-html-in-markdown-parser"},{from:"allowNode",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"allowElement"},{from:"allowedTypes",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"allowedElements"},{from:"disallowedTypes",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"disallowedElements"},{from:"escapeHtml",id:"remove-buggy-html-in-markdown-parser"},{from:"includeElementIndex",id:"#remove-includeelementindex"},{from:"includeNodeIndex",id:"change-includenodeindex-to-includeelementindex"},{from:"linkTarget",id:"remove-linktarget"},{from:"plugins",id:"change-plugins-to-remarkplugins",to:"remarkPlugins"},{from:"rawSourcePos",id:"#remove-rawsourcepos"},{from:"renderers",id:"change-renderers-to-components",to:"components"},{from:"source",id:"change-source-to-children",to:"children"},{from:"sourcePos",id:"#remove-sourcepos"},{from:"transformImageUri",id:"#add-urltransform",to:"urlTransform"},{from:"transformLinkUri",id:"#add-urltransform",to:"urlTransform"}];function LC(e){const n=OC(e),t=RC(e);return MC(n.runSync(n.parse(t),t),e)}function OC(e){const n=e.rehypePlugins||lp,t=e.remarkPlugins||lp,r=e.remarkRehypeOptions?{...e.remarkRehypeOptions,...ap}:ap;return TC().use(gS).use(t).use(cC,r).use(n)}function RC(e){const n=e.children||"",t=new Wg;return typeof n=="string"&&(t.value=n),t}function MC(e,n){const t=n.allowedElements,r=n.allowElement,i=n.components,l=n.disallowedElements,a=n.skipHtml,o=n.unwrapDisallowed,u=n.urlTransform||qC;for(const d of NC)Object.hasOwn(n,d.from)&&(""+d.from+(d.to?"use `"+d.to+"` instead":"remove it")+PC+d.id,void 0);return n.className&&(e={type:"element",tagName:"div",properties:{className:n.className},children:e.type==="root"?e.children:[e]}),xc(e,s),Zx(e,{Fragment:O.Fragment,components:i,ignoreInvalidStyle:!0,jsx:O.jsx,jsxs:O.jsxs,passKeys:!0,passNode:!0});function s(d,f,p){if(d.type==="raw"&&p&&typeof f=="number")return a?p.children.splice(f,1):p.children[f]={type:"text",value:d.value},f;if(d.type==="element"){let h;for(h in Oo)if(Object.hasOwn(Oo,h)&&Object.hasOwn(d.properties,h)){const v=d.properties[h],w=Oo[h];(w===null||w.includes(d.tagName))&&(d.properties[h]=u(String(v||""),h,d))}}if(d.type==="element"){let h=t?!t.includes(d.tagName):l?l.includes(d.tagName):!1;if(!h&&r&&typeof f=="number"&&(h=!r(d,f,p)),h&&p&&typeof f=="number")return o&&d.children?p.children.splice(f,1,...d.children):p.children.splice(f,1),f}}}function qC(e){const n=e.indexOf(":"),t=e.indexOf("?"),r=e.indexOf("#"),i=e.indexOf("/");return n===-1||i!==-1&&n>i||t!==-1&&n>t||r!==-1&&n>r||IC.test(e.slice(0,n))?e:""}function op(e,n){const t=String(e);if(typeof n!="string")throw new TypeError("Expected character");let r=0,i=t.indexOf(n);for(;i!==-1;)r++,i=t.indexOf(n,i+n.length);return r}function FC(e){if(typeof e!="string")throw new TypeError("Expected a string");return e.replace(/[|\\{}()[\]^$+*?.]/g,"\\$&").replace(/-/g,"\\x2d")}function DC(e,n,t){const i=Ra((t||{}).ignore||[]),l=BC(n);let a=-1;for(;++a<l.length;)$g(e,"text",o);function o(s,d){let f=-1,p;for(;++f<d.length;){const h=d[f],v=p?p.children:void 0;if(i(h,v?v.indexOf(h):void 0,p))return;p=h}if(p)return u(s,d)}function u(s,d){const f=d[d.length-1],p=l[a][0],h=l[a][1];let v=0;const b=f.children.indexOf(s);let g=!1,y=[];p.lastIndex=0;let k=p.exec(s.value);for(;k;){const T=k.index,R={index:k.index,input:k.input,stack:[...d,s]};let C=h(...k,R);if(typeof C=="string"&&(C=C.length>0?{type:"text",value:C}:void 0),C===!1?p.lastIndex=T+1:(v!==T&&y.push({type:"text",value:s.value.slice(v,T)}),Array.isArray(C)?y.push(...C):C&&y.push(C),v=T+k[0].length,g=!0),!p.global)break;k=p.exec(s.value)}return g?(v<s.value.length&&y.push({type:"text",value:s.value.slice(v)}),f.children.splice(b,1,...y)):y=[s],b+y.length}}function BC(e){const n=[];if(!Array.isArray(e))throw new TypeError("Expected find and replace tuple or list of tuples");const t=!e[0]||Array.isArray(e[0])?e:[e];let r=-1;for(;++r<t.length;){const i=t[r];n.push([UC(i[0]),HC(i[1])])}return n}function UC(e){return typeof e=="string"?new RegExp(FC(e),"g"):e}function HC(e){return typeof e=="function"?e:function(){return e}}const Vo="phrasing",Wo=["autolink","link","image","label"];function $C(){return{transforms:[JC],enter:{literalAutolink:WC,literalAutolinkEmail:Qo,literalAutolinkHttp:Qo,literalAutolinkWww:Qo},exit:{literalAutolink:XC,literalAutolinkEmail:KC,literalAutolinkHttp:QC,literalAutolinkWww:YC}}}function VC(){return{unsafe:[{character:"@",before:"[+\\-.\\w]",after:"[\\-.\\w]",inConstruct:Vo,notInConstruct:Wo},{character:".",before:"[Ww]",after:"[\\-.\\w]",inConstruct:Vo,notInConstruct:Wo},{character:":",before:"[ps]",after:"\\/",inConstruct:Vo,notInConstruct:Wo}]}}function WC(e){this.enter({type:"link",title:null,url:"",children:[]},e)}function Qo(e){this.config.enter.autolinkProtocol.call(this,e)}function QC(e){this.config.exit.autolinkProtocol.call(this,e)}function YC(e){this.config.exit.data.call(this,e);const n=this.stack[this.stack.length-1];n.type,n.url="http://"+this.sliceSerialize(e)}function KC(e){this.config.exit.autolinkEmail.call(this,e)}function XC(e){this.exit(e)}function JC(e){DC(e,[[/(https?:\/\/|www(?=\.))([-.\w]+)([^ \t\r\n]*)/gi,GC],[new RegExp("(?<=^|\\s|\\p{P}|\\p{S})([-.\\w+]+)@([-\\w]+(?:\\.[-\\w]+)+)","gu"),ZC]],{ignore:["link","linkReference"]})}function GC(e,n,t,r,i){let l="";if(!Qg(i)||(/^w/i.test(n)&&(t=n+t,n="",l="http://"),!e2(t)))return!1;const a=n2(t+r);if(!a[0])return!1;const o={type:"link",title:null,url:l+n+a[0],children:[{type:"text",value:n+a[0]}]};return a[1]?[o,{type:"text",value:a[1]}]:o}function ZC(e,n,t,r){return!Qg(r,!0)||/[-\d_]$/.test(t)?!1:{type:"link",title:null,url:"mailto:"+n+"@"+t,children:[{type:"text",value:n+"@"+t}]}}function e2(e){const n=e.split(".");return!(n.length<2||n[n.length-1]&&(/_/.test(n[n.length-1])||!/[a-zA-Z\d]/.test(n[n.length-1]))||n[n.length-2]&&(/_/.test(n[n.length-2])||!/[a-zA-Z\d]/.test(n[n.length-2])))}function n2(e){const n=/[!"&'),.:;<>?\]}]+$/.exec(e);if(!n)return[e,void 0];e=e.slice(0,n.index);let t=n[0],r=t.indexOf(")");const i=op(e,"(");let l=op(e,")");for(;r!==-1&&i>l;)e+=t.slice(0,r+1),t=t.slice(r+1),r=t.indexOf(")"),l++;return[e,t]}function Qg(e,n){const t=e.input.charCodeAt(e.index-1);return(e.index===0||Gt(t)||Na(t))&&(!n||t!==47)}Yg.peek=c2;function t2(){this.buffer()}function r2(e){this.enter({type:"footnoteReference",identifier:"",label:""},e)}function i2(){this.buffer()}function l2(e){this.enter({type:"footnoteDefinition",identifier:"",label:"",children:[]},e)}function a2(e){const n=this.resume(),t=this.stack[this.stack.length-1];t.type,t.identifier=qn(this.sliceSerialize(e)).toLowerCase(),t.label=n}function o2(e){this.exit(e)}function u2(e){const n=this.resume(),t=this.stack[this.stack.length-1];t.type,t.identifier=qn(this.sliceSerialize(e)).toLowerCase(),t.label=n}function s2(e){this.exit(e)}function c2(){return"["}function Yg(e,n,t,r){const i=t.createTracker(r);let l=i.move("[^");const a=t.enter("footnoteReference"),o=t.enter("reference");return l+=i.move(t.safe(t.associationId(e),{after:"]",before:l})),o(),a(),l+=i.move("]"),l}function f2(){return{enter:{gfmFootnoteCallString:t2,gfmFootnoteCall:r2,gfmFootnoteDefinitionLabelString:i2,gfmFootnoteDefinition:l2},exit:{gfmFootnoteCallString:a2,gfmFootnoteCall:o2,gfmFootnoteDefinitionLabelString:u2,gfmFootnoteDefinition:s2}}}function d2(e){let n=!1;return e&&e.firstLineBlank&&(n=!0),{handlers:{footnoteDefinition:t,footnoteReference:Yg},unsafe:[{character:"[",inConstruct:["label","phrasing","reference"]}]};function t(r,i,l,a){const o=l.createTracker(a);let u=o.move("[^");const s=l.enter("footnoteDefinition"),d=l.enter("label");return u+=o.move(l.safe(l.associationId(r),{before:u,after:"]"})),d(),u+=o.move("]:"),r.children&&r.children.length>0&&(o.shift(4),u+=o.move((n?`
`:" ")+l.indentLines(l.containerFlow(r,o.current()),n?Kg:p2))),s(),u}}function p2(e,n,t){return n===0?e:Kg(e,n,t)}function Kg(e,n,t){return(t?"":"    ")+e}const h2=["autolink","destinationLiteral","destinationRaw","reference","titleQuote","titleApostrophe"];Xg.peek=k2;function m2(){return{canContainEols:["delete"],enter:{strikethrough:y2},exit:{strikethrough:v2}}}function g2(){return{unsafe:[{character:"~",inConstruct:"phrasing",notInConstruct:h2}],handlers:{delete:Xg}}}function y2(e){this.enter({type:"delete",children:[]},e)}function v2(e){this.exit(e)}function Xg(e,n,t,r){const i=t.createTracker(r),l=t.enter("strikethrough");let a=i.move("~~");return a+=t.containerPhrasing(e,{...i.current(),before:a,after:"~"}),a+=i.move("~~"),l(),a}function k2(){return"~"}function x2(e){return e.length}function w2(e,n){const t=n||{},r=(t.align||[]).concat(),i=t.stringLength||x2,l=[],a=[],o=[],u=[];let s=0,d=-1;for(;++d<e.length;){const w=[],b=[];let g=-1;for(e[d].length>s&&(s=e[d].length);++g<e[d].length;){const y=_2(e[d][g]);if(t.alignDelimiters!==!1){const k=i(y);b[g]=k,(u[g]===void 0||k>u[g])&&(u[g]=k)}w.push(y)}a[d]=w,o[d]=b}let f=-1;if(typeof r=="object"&&"length"in r)for(;++f<s;)l[f]=up(r[f]);else{const w=up(r);for(;++f<s;)l[f]=w}f=-1;const p=[],h=[];for(;++f<s;){const w=l[f];let b="",g="";w===99?(b=":",g=":"):w===108?b=":":w===114&&(g=":");let y=t.alignDelimiters===!1?1:Math.max(1,u[f]-b.length-g.length);const k=b+"-".repeat(y)+g;t.alignDelimiters!==!1&&(y=b.length+y+g.length,y>u[f]&&(u[f]=y),h[f]=y),p[f]=k}a.splice(1,0,p),o.splice(1,0,h),d=-1;const v=[];for(;++d<a.length;){const w=a[d],b=o[d];f=-1;const g=[];for(;++f<s;){const y=w[f]||"";let k="",T="";if(t.alignDelimiters!==!1){const R=u[f]-(b[f]||0),C=l[f];C===114?k=" ".repeat(R):C===99?R%2?(k=" ".repeat(R/2+.5),T=" ".repeat(R/2-.5)):(k=" ".repeat(R/2),T=k):T=" ".repeat(R)}t.delimiterStart!==!1&&!f&&g.push("|"),t.padding!==!1&&!(t.alignDelimiters===!1&&y==="")&&(t.delimiterStart!==!1||f)&&g.push(" "),t.alignDelimiters!==!1&&g.push(k),g.push(y),t.alignDelimiters!==!1&&g.push(T),t.padding!==!1&&g.push(" "),(t.delimiterEnd!==!1||f!==s-1)&&g.push("|")}v.push(t.delimiterEnd===!1?g.join("").replace(/ +$/,""):g.join(""))}return v.join(`
`)}function _2(e){return e==null?"":String(e)}function up(e){const n=typeof e=="string"?e.codePointAt(0):0;return n===67||n===99?99:n===76||n===108?108:n===82||n===114?114:0}function S2(e,n,t,r){const i=t.enter("blockquote"),l=t.createTracker(r);l.move("> "),l.shift(2);const a=t.indentLines(t.containerFlow(e,l.current()),C2);return i(),a}function C2(e,n,t){return">"+(t?"":" ")+e}function b2(e,n){return sp(e,n.inConstruct,!0)&&!sp(e,n.notInConstruct,!1)}function sp(e,n,t){if(typeof n=="string"&&(n=[n]),!n||n.length===0)return t;let r=-1;for(;++r<n.length;)if(e.includes(n[r]))return!0;return!1}function cp(e,n,t,r){let i=-1;for(;++i<t.unsafe.length;)if(t.unsafe[i].character===`
`&&b2(t.stack,t.unsafe[i]))return/[ \t]/.test(r.before)?"":" ";return`\\
`}function E2(e,n){const t=String(e);let r=t.indexOf(n),i=r,l=0,a=0;if(typeof n!="string")throw new TypeError("Expected substring");for(;r!==-1;)r===i?++l>a&&(a=l):l=1,i=r+n.length,r=t.indexOf(n,i);return a}function T2(e,n){return!!(n.options.fences===!1&&e.value&&!e.lang&&/[^ \r\n]/.test(e.value)&&!/^[\t ]*(?:[\r\n]|$)|(?:^|[\r\n])[\t ]*$/.test(e.value))}function z2(e){const n=e.options.fence||"`";if(n!=="`"&&n!=="~")throw new Error("Cannot serialize code with `"+n+"` for `options.fence`, expected `` ` `` or `~`");return n}function A2(e,n,t,r){const i=z2(t),l=e.value||"",a=i==="`"?"GraveAccent":"Tilde";if(T2(e,t)){const f=t.enter("codeIndented"),p=t.indentLines(l,j2);return f(),p}const o=t.createTracker(r),u=i.repeat(Math.max(E2(l,i)+1,3)),s=t.enter("codeFenced");let d=o.move(u);if(e.lang){const f=t.enter(`codeFencedLang${a}`);d+=o.move(t.safe(e.lang,{before:d,after:" ",encode:["`"],...o.current()})),f()}if(e.lang&&e.meta){const f=t.enter(`codeFencedMeta${a}`);d+=o.move(" "),d+=o.move(t.safe(e.meta,{before:d,after:`
`,encode:["`"],...o.current()})),f()}return d+=o.move(`
`),l&&(d+=o.move(l+`
`)),d+=o.move(u),s(),d}function j2(e,n,t){return(t?"":"    ")+e}function _c(e){const n=e.options.quote||'"';if(n!=='"'&&n!=="'")throw new Error("Cannot serialize title with `"+n+"` for `options.quote`, expected `\"`, or `'`");return n}function P2(e,n,t,r){const i=_c(t),l=i==='"'?"Quote":"Apostrophe",a=t.enter("definition");let o=t.enter("label");const u=t.createTracker(r);let s=u.move("[");return s+=u.move(t.safe(t.associationId(e),{before:s,after:"]",...u.current()})),s+=u.move("]: "),o(),!e.url||/[\0- \u007F]/.test(e.url)?(o=t.enter("destinationLiteral"),s+=u.move("<"),s+=u.move(t.safe(e.url,{before:s,after:">",...u.current()})),s+=u.move(">")):(o=t.enter("destinationRaw"),s+=u.move(t.safe(e.url,{before:s,after:e.title?" ":`
`,...u.current()}))),o(),e.title&&(o=t.enter(`title${l}`),s+=u.move(" "+i),s+=u.move(t.safe(e.title,{before:s,after:i,...u.current()})),s+=u.move(i),o()),a(),s}function I2(e){const n=e.options.emphasis||"*";if(n!=="*"&&n!=="_")throw new Error("Cannot serialize emphasis with `"+n+"` for `options.emphasis`, expected `*`, or `_`");return n}function Bi(e){return"&#x"+e.toString(16).toUpperCase()+";"}function da(e,n,t){const r=Rr(e),i=Rr(n);return r===void 0?i===void 0?t==="_"?{inside:!0,outside:!0}:{inside:!1,outside:!1}:i===1?{inside:!0,outside:!0}:{inside:!1,outside:!0}:r===1?i===void 0?{inside:!1,outside:!1}:i===1?{inside:!0,outside:!0}:{inside:!1,outside:!1}:i===void 0?{inside:!1,outside:!1}:i===1?{inside:!0,outside:!1}:{inside:!1,outside:!1}}Jg.peek=N2;function Jg(e,n,t,r){const i=I2(t),l=t.enter("emphasis"),a=t.createTracker(r),o=a.move(i);let u=a.move(t.containerPhrasing(e,{after:i,before:o,...a.current()}));const s=u.charCodeAt(0),d=da(r.before.charCodeAt(r.before.length-1),s,i);d.inside&&(u=Bi(s)+u.slice(1));const f=u.charCodeAt(u.length-1),p=da(r.after.charCodeAt(0),f,i);p.inside&&(u=u.slice(0,-1)+Bi(f));const h=a.move(i);return l(),t.attentionEncodeSurroundingInfo={after:p.outside,before:d.outside},o+u+h}function N2(e,n,t){return t.options.emphasis||"*"}function L2(e,n){let t=!1;return xc(e,function(r){if("value"in r&&/\r?\n|\r/.test(r.value)||r.type==="break")return t=!0,es}),!!((!e.depth||e.depth<3)&&pc(e)&&(n.options.setext||t))}function O2(e,n,t,r){const i=Math.max(Math.min(6,e.depth||1),1),l=t.createTracker(r);if(L2(e,t)){const d=t.enter("headingSetext"),f=t.enter("phrasing"),p=t.containerPhrasing(e,{...l.current(),before:`
`,after:`
`});return f(),d(),p+`
`+(i===1?"=":"-").repeat(p.length-(Math.max(p.lastIndexOf("\r"),p.lastIndexOf(`
`))+1))}const a="#".repeat(i),o=t.enter("headingAtx"),u=t.enter("phrasing");l.move(a+" ");let s=t.containerPhrasing(e,{before:"# ",after:`
`,...l.current()});return/^[\t ]/.test(s)&&(s=Bi(s.charCodeAt(0))+s.slice(1)),s=s?a+" "+s:a,t.options.closeAtx&&(s+=" "+a),u(),o(),s}Gg.peek=R2;function Gg(e){return e.value||""}function R2(){return"<"}Zg.peek=M2;function Zg(e,n,t,r){const i=_c(t),l=i==='"'?"Quote":"Apostrophe",a=t.enter("image");let o=t.enter("label");const u=t.createTracker(r);let s=u.move("![");return s+=u.move(t.safe(e.alt,{before:s,after:"]",...u.current()})),s+=u.move("]("),o(),!e.url&&e.title||/[\0- \u007F]/.test(e.url)?(o=t.enter("destinationLiteral"),s+=u.move("<"),s+=u.move(t.safe(e.url,{before:s,after:">",...u.current()})),s+=u.move(">")):(o=t.enter("destinationRaw"),s+=u.move(t.safe(e.url,{before:s,after:e.title?" ":")",...u.current()}))),o(),e.title&&(o=t.enter(`title${l}`),s+=u.move(" "+i),s+=u.move(t.safe(e.title,{before:s,after:i,...u.current()})),s+=u.move(i),o()),s+=u.move(")"),a(),s}function M2(){return"!"}ey.peek=q2;function ey(e,n,t,r){const i=e.referenceType,l=t.enter("imageReference");let a=t.enter("label");const o=t.createTracker(r);let u=o.move("![");const s=t.safe(e.alt,{before:u,after:"]",...o.current()});u+=o.move(s+"]["),a();const d=t.stack;t.stack=[],a=t.enter("reference");const f=t.safe(t.associationId(e),{before:u,after:"]",...o.current()});return a(),t.stack=d,l(),i==="full"||!s||s!==f?u+=o.move(f+"]"):i==="shortcut"?u=u.slice(0,-1):u+=o.move("]"),u}function q2(){return"!"}ny.peek=F2;function ny(e,n,t){let r=e.value||"",i="`",l=-1;for(;new RegExp("(^|[^`])"+i+"([^`]|$)").test(r);)i+="`";for(/[^ \r\n]/.test(r)&&(/^[ \r\n]/.test(r)&&/[ \r\n]$/.test(r)||/^`|`$/.test(r))&&(r=" "+r+" ");++l<t.unsafe.length;){const a=t.unsafe[l],o=t.compilePattern(a);let u;if(a.atBreak)for(;u=o.exec(r);){let s=u.index;r.charCodeAt(s)===10&&r.charCodeAt(s-1)===13&&s--,r=r.slice(0,s)+" "+r.slice(u.index+1)}}return i+r+i}function F2(){return"`"}function ty(e,n){const t=pc(e);return!!(!n.options.resourceLink&&e.url&&!e.title&&e.children&&e.children.length===1&&e.children[0].type==="text"&&(t===e.url||"mailto:"+t===e.url)&&/^[a-z][a-z+.-]+:/i.test(e.url)&&!/[\0- <>\u007F]/.test(e.url))}ry.peek=D2;function ry(e,n,t,r){const i=_c(t),l=i==='"'?"Quote":"Apostrophe",a=t.createTracker(r);let o,u;if(ty(e,t)){const d=t.stack;t.stack=[],o=t.enter("autolink");let f=a.move("<");return f+=a.move(t.containerPhrasing(e,{before:f,after:">",...a.current()})),f+=a.move(">"),o(),t.stack=d,f}o=t.enter("link"),u=t.enter("label");let s=a.move("[");return s+=a.move(t.containerPhrasing(e,{before:s,after:"](",...a.current()})),s+=a.move("]("),u(),!e.url&&e.title||/[\0- \u007F]/.test(e.url)?(u=t.enter("destinationLiteral"),s+=a.move("<"),s+=a.move(t.safe(e.url,{before:s,after:">",...a.current()})),s+=a.move(">")):(u=t.enter("destinationRaw"),s+=a.move(t.safe(e.url,{before:s,after:e.title?" ":")",...a.current()}))),u(),e.title&&(u=t.enter(`title${l}`),s+=a.move(" "+i),s+=a.move(t.safe(e.title,{before:s,after:i,...a.current()})),s+=a.move(i),u()),s+=a.move(")"),o(),s}function D2(e,n,t){return ty(e,t)?"<":"["}iy.peek=B2;function iy(e,n,t,r){const i=e.referenceType,l=t.enter("linkReference");let a=t.enter("label");const o=t.createTracker(r);let u=o.move("[");const s=t.containerPhrasing(e,{before:u,after:"]",...o.current()});u+=o.move(s+"]["),a();const d=t.stack;t.stack=[],a=t.enter("reference");const f=t.safe(t.associationId(e),{before:u,after:"]",...o.current()});return a(),t.stack=d,l(),i==="full"||!s||s!==f?u+=o.move(f+"]"):i==="shortcut"?u=u.slice(0,-1):u+=o.move("]"),u}function B2(){return"["}function Sc(e){const n=e.options.bullet||"*";if(n!=="*"&&n!=="+"&&n!=="-")throw new Error("Cannot serialize items with `"+n+"` for `options.bullet`, expected `*`, `+`, or `-`");return n}function U2(e){const n=Sc(e),t=e.options.bulletOther;if(!t)return n==="*"?"-":"*";if(t!=="*"&&t!=="+"&&t!=="-")throw new Error("Cannot serialize items with `"+t+"` for `options.bulletOther`, expected `*`, `+`, or `-`");if(t===n)throw new Error("Expected `bullet` (`"+n+"`) and `bulletOther` (`"+t+"`) to be different");return t}function H2(e){const n=e.options.bulletOrdered||".";if(n!=="."&&n!==")")throw new Error("Cannot serialize items with `"+n+"` for `options.bulletOrdered`, expected `.` or `)`");return n}function ly(e){const n=e.options.rule||"*";if(n!=="*"&&n!=="-"&&n!=="_")throw new Error("Cannot serialize rules with `"+n+"` for `options.rule`, expected `*`, `-`, or `_`");return n}function $2(e,n,t,r){const i=t.enter("list"),l=t.bulletCurrent;let a=e.ordered?H2(t):Sc(t);const o=e.ordered?a==="."?")":".":U2(t);let u=n&&t.bulletLastUsed?a===t.bulletLastUsed:!1;if(!e.ordered){const d=e.children?e.children[0]:void 0;if((a==="*"||a==="-")&&d&&(!d.children||!d.children[0])&&t.stack[t.stack.length-1]==="list"&&t.stack[t.stack.length-2]==="listItem"&&t.stack[t.stack.length-3]==="list"&&t.stack[t.stack.length-4]==="listItem"&&t.indexStack[t.indexStack.length-1]===0&&t.indexStack[t.indexStack.length-2]===0&&t.indexStack[t.indexStack.length-3]===0&&(u=!0),ly(t)===a&&d){let f=-1;for(;++f<e.children.length;){const p=e.children[f];if(p&&p.type==="listItem"&&p.children&&p.children[0]&&p.children[0].type==="thematicBreak"){u=!0;break}}}}u&&(a=o),t.bulletCurrent=a;const s=t.containerFlow(e,r);return t.bulletLastUsed=a,t.bulletCurrent=l,i(),s}function V2(e){const n=e.options.listItemIndent||"one";if(n!=="tab"&&n!=="one"&&n!=="mixed")throw new Error("Cannot serialize items with `"+n+"` for `options.listItemIndent`, expected `tab`, `one`, or `mixed`");return n}function W2(e,n,t,r){const i=V2(t);let l=t.bulletCurrent||Sc(t);n&&n.type==="list"&&n.ordered&&(l=(typeof n.start=="number"&&n.start>-1?n.start:1)+(t.options.incrementListMarker===!1?0:n.children.indexOf(e))+l);let a=l.length+1;(i==="tab"||i==="mixed"&&(n&&n.type==="list"&&n.spread||e.spread))&&(a=Math.ceil(a/4)*4);const o=t.createTracker(r);o.move(l+" ".repeat(a-l.length)),o.shift(a);const u=t.enter("listItem"),s=t.indentLines(t.containerFlow(e,o.current()),d);return u(),s;function d(f,p,h){return p?(h?"":" ".repeat(a))+f:(h?l:l+" ".repeat(a-l.length))+f}}function Q2(e,n,t,r){const i=t.enter("paragraph"),l=t.enter("phrasing"),a=t.containerPhrasing(e,r);return l(),i(),a}const Y2=Ra(["break","delete","emphasis","footnote","footnoteReference","image","imageReference","inlineCode","inlineMath","link","linkReference","mdxJsxTextElement","mdxTextExpression","strong","text","textDirective"]);function K2(e,n,t,r){return(e.children.some(function(a){return Y2(a)})?t.containerPhrasing:t.containerFlow).call(t,e,r)}function X2(e){const n=e.options.strong||"*";if(n!=="*"&&n!=="_")throw new Error("Cannot serialize strong with `"+n+"` for `options.strong`, expected `*`, or `_`");return n}ay.peek=J2;function ay(e,n,t,r){const i=X2(t),l=t.enter("strong"),a=t.createTracker(r),o=a.move(i+i);let u=a.move(t.containerPhrasing(e,{after:i,before:o,...a.current()}));const s=u.charCodeAt(0),d=da(r.before.charCodeAt(r.before.length-1),s,i);d.inside&&(u=Bi(s)+u.slice(1));const f=u.charCodeAt(u.length-1),p=da(r.after.charCodeAt(0),f,i);p.inside&&(u=u.slice(0,-1)+Bi(f));const h=a.move(i+i);return l(),t.attentionEncodeSurroundingInfo={after:p.outside,before:d.outside},o+u+h}function J2(e,n,t){return t.options.strong||"*"}function G2(e,n,t,r){return t.safe(e.value,r)}function Z2(e){const n=e.options.ruleRepetition||3;if(n<3)throw new Error("Cannot serialize rules with repetition `"+n+"` for `options.ruleRepetition`, expected `3` or more");return n}function eb(e,n,t){const r=(ly(t)+(t.options.ruleSpaces?" ":"")).repeat(Z2(t));return t.options.ruleSpaces?r.slice(0,-1):r}const oy={blockquote:S2,break:cp,code:A2,definition:P2,emphasis:Jg,hardBreak:cp,heading:O2,html:Gg,image:Zg,imageReference:ey,inlineCode:ny,link:ry,linkReference:iy,list:$2,listItem:W2,paragraph:Q2,root:K2,strong:ay,text:G2,thematicBreak:eb};function nb(){return{enter:{table:tb,tableData:fp,tableHeader:fp,tableRow:ib},exit:{codeText:lb,table:rb,tableData:Yo,tableHeader:Yo,tableRow:Yo}}}function tb(e){const n=e._align;this.enter({type:"table",align:n.map(function(t){return t==="none"?null:t}),children:[]},e),this.data.inTable=!0}function rb(e){this.exit(e),this.data.inTable=void 0}function ib(e){this.enter({type:"tableRow",children:[]},e)}function Yo(e){this.exit(e)}function fp(e){this.enter({type:"tableCell",children:[]},e)}function lb(e){let n=this.resume();this.data.inTable&&(n=n.replace(/\\([\\|])/g,ab));const t=this.stack[this.stack.length-1];t.type,t.value=n,this.exit(e)}function ab(e,n){return n==="|"?n:e}function ob(e){const n=e||{},t=n.tableCellPadding,r=n.tablePipeAlign,i=n.stringLength,l=t?" ":"|";return{unsafe:[{character:"\r",inConstruct:"tableCell"},{character:`
`,inConstruct:"tableCell"},{atBreak:!0,character:"|",after:"[	 :-]"},{character:"|",inConstruct:"tableCell"},{atBreak:!0,character:":",after:"-"},{atBreak:!0,character:"-",after:"[:|-]"}],handlers:{inlineCode:p,table:a,tableCell:u,tableRow:o}};function a(h,v,w,b){return s(d(h,w,b),h.align)}function o(h,v,w,b){const g=f(h,w,b),y=s([g]);return y.slice(0,y.indexOf(`
`))}function u(h,v,w,b){const g=w.enter("tableCell"),y=w.enter("phrasing"),k=w.containerPhrasing(h,{...b,before:l,after:l});return y(),g(),k}function s(h,v){return w2(h,{align:v,alignDelimiters:r,padding:t,stringLength:i})}function d(h,v,w){const b=h.children;let g=-1;const y=[],k=v.enter("table");for(;++g<b.length;)y[g]=f(b[g],v,w);return k(),y}function f(h,v,w){const b=h.children;let g=-1;const y=[],k=v.enter("tableRow");for(;++g<b.length;)y[g]=u(b[g],h,v,w);return k(),y}function p(h,v,w){let b=oy.inlineCode(h,v,w);return w.stack.includes("tableCell")&&(b=b.replace(/\|/g,"\\$&")),b}}function ub(){return{exit:{taskListCheckValueChecked:dp,taskListCheckValueUnchecked:dp,paragraph:cb}}}function sb(){return{unsafe:[{atBreak:!0,character:"-",after:"[:|-]"}],handlers:{listItem:fb}}}function dp(e){const n=this.stack[this.stack.length-2];n.type,n.checked=e.type==="taskListCheckValueChecked"}function cb(e){const n=this.stack[this.stack.length-2];if(n&&n.type==="listItem"&&typeof n.checked=="boolean"){const t=this.stack[this.stack.length-1];t.type;const r=t.children[0];if(r&&r.type==="text"){const i=n.children;let l=-1,a;for(;++l<i.length;){const o=i[l];if(o.type==="paragraph"){a=o;break}}a===t&&(r.value=r.value.slice(1),r.value.length===0?t.children.shift():t.position&&r.position&&typeof r.position.start.offset=="number"&&(r.position.start.column++,r.position.start.offset++,t.position.start=Object.assign({},r.position.start)))}}this.exit(e)}function fb(e,n,t,r){const i=e.children[0],l=typeof e.checked=="boolean"&&i&&i.type==="paragraph",a="["+(e.checked?"x":" ")+"] ",o=t.createTracker(r);l&&o.move(a);let u=oy.listItem(e,n,t,{...r,...o.current()});return l&&(u=u.replace(/^(?:[*+-]|\d+\.)([\r\n]| {1,3})/,s)),u;function s(d){return d+a}}function db(){return[$C(),f2(),m2(),nb(),ub()]}function pb(e){return{extensions:[VC(),d2(e),g2(),ob(e),sb()]}}const hb={tokenize:xb,partial:!0},uy={tokenize:wb,partial:!0},sy={tokenize:_b,partial:!0},cy={tokenize:Sb,partial:!0},mb={tokenize:Cb,partial:!0},fy={name:"wwwAutolink",tokenize:vb,previous:py},dy={name:"protocolAutolink",tokenize:kb,previous:hy},at={name:"emailAutolink",tokenize:yb,previous:my},Qn={};function gb(){return{text:Qn}}let Rt=48;for(;Rt<123;)Qn[Rt]=at,Rt++,Rt===58?Rt=65:Rt===91&&(Rt=97);Qn[43]=at;Qn[45]=at;Qn[46]=at;Qn[95]=at;Qn[72]=[at,dy];Qn[104]=[at,dy];Qn[87]=[at,fy];Qn[119]=[at,fy];function yb(e,n,t){const r=this;let i,l;return a;function a(f){return!is(f)||!my.call(r,r.previous)||Cc(r.events)?t(f):(e.enter("literalAutolink"),e.enter("literalAutolinkEmail"),o(f))}function o(f){return is(f)?(e.consume(f),o):f===64?(e.consume(f),u):t(f)}function u(f){return f===46?e.check(mb,d,s)(f):f===45||f===95||Ke(f)?(l=!0,e.consume(f),u):d(f)}function s(f){return e.consume(f),i=!0,u}function d(f){return l&&i&&en(r.previous)?(e.exit("literalAutolinkEmail"),e.exit("literalAutolink"),n(f)):t(f)}}function vb(e,n,t){const r=this;return i;function i(a){return a!==87&&a!==119||!py.call(r,r.previous)||Cc(r.events)?t(a):(e.enter("literalAutolink"),e.enter("literalAutolinkWww"),e.check(hb,e.attempt(uy,e.attempt(sy,l),t),t)(a))}function l(a){return e.exit("literalAutolinkWww"),e.exit("literalAutolink"),n(a)}}function kb(e,n,t){const r=this;let i="",l=!1;return a;function a(f){return(f===72||f===104)&&hy.call(r,r.previous)&&!Cc(r.events)?(e.enter("literalAutolink"),e.enter("literalAutolinkHttp"),i+=String.fromCodePoint(f),e.consume(f),o):t(f)}function o(f){if(en(f)&&i.length<5)return i+=String.fromCodePoint(f),e.consume(f),o;if(f===58){const p=i.toLowerCase();if(p==="http"||p==="https")return e.consume(f),u}return t(f)}function u(f){return f===47?(e.consume(f),l?s:(l=!0,u)):t(f)}function s(f){return f===null||sa(f)||we(f)||Gt(f)||Na(f)?t(f):e.attempt(uy,e.attempt(sy,d),t)(f)}function d(f){return e.exit("literalAutolinkHttp"),e.exit("literalAutolink"),n(f)}}function xb(e,n,t){let r=0;return i;function i(a){return(a===87||a===119)&&r<3?(r++,e.consume(a),i):a===46&&r===3?(e.consume(a),l):t(a)}function l(a){return a===null?t(a):n(a)}}function wb(e,n,t){let r,i,l;return a;function a(s){return s===46||s===95?e.check(cy,u,o)(s):s===null||we(s)||Gt(s)||s!==45&&Na(s)?u(s):(l=!0,e.consume(s),a)}function o(s){return s===95?r=!0:(i=r,r=void 0),e.consume(s),a}function u(s){return i||r||!l?t(s):n(s)}}function _b(e,n){let t=0,r=0;return i;function i(a){return a===40?(t++,e.consume(a),i):a===41&&r<t?l(a):a===33||a===34||a===38||a===39||a===41||a===42||a===44||a===46||a===58||a===59||a===60||a===63||a===93||a===95||a===126?e.check(cy,n,l)(a):a===null||we(a)||Gt(a)?n(a):(e.consume(a),i)}function l(a){return a===41&&r++,e.consume(a),i}}function Sb(e,n,t){return r;function r(o){return o===33||o===34||o===39||o===41||o===42||o===44||o===46||o===58||o===59||o===63||o===95||o===126?(e.consume(o),r):o===38?(e.consume(o),l):o===93?(e.consume(o),i):o===60||o===null||we(o)||Gt(o)?n(o):t(o)}function i(o){return o===null||o===40||o===91||we(o)||Gt(o)?n(o):r(o)}function l(o){return en(o)?a(o):t(o)}function a(o){return o===59?(e.consume(o),r):en(o)?(e.consume(o),a):t(o)}}function Cb(e,n,t){return r;function r(l){return e.consume(l),i}function i(l){return Ke(l)?t(l):n(l)}}function py(e){return e===null||e===40||e===42||e===95||e===91||e===93||e===126||we(e)}function hy(e){return!en(e)}function my(e){return!(e===47||is(e))}function is(e){return e===43||e===45||e===46||e===95||Ke(e)}function Cc(e){let n=e.length,t=!1;for(;n--;){const r=e[n][1];if((r.type==="labelLink"||r.type==="labelImage")&&!r._balanced){t=!0;break}if(r._gfmAutolinkLiteralWalkedInto){t=!1;break}}return e.length>0&&!t&&(e[e.length-1][1]._gfmAutolinkLiteralWalkedInto=!0),t}const bb={tokenize:Nb,partial:!0};function Eb(){return{document:{91:{name:"gfmFootnoteDefinition",tokenize:jb,continuation:{tokenize:Pb},exit:Ib}},text:{91:{name:"gfmFootnoteCall",tokenize:Ab},93:{name:"gfmPotentialFootnoteCall",add:"after",tokenize:Tb,resolveTo:zb}}}}function Tb(e,n,t){const r=this;let i=r.events.length;const l=r.parser.gfmFootnotes||(r.parser.gfmFootnotes=[]);let a;for(;i--;){const u=r.events[i][1];if(u.type==="labelImage"){a=u;break}if(u.type==="gfmFootnoteCall"||u.type==="labelLink"||u.type==="label"||u.type==="image"||u.type==="link")break}return o;function o(u){if(!a||!a._balanced)return t(u);const s=qn(r.sliceSerialize({start:a.end,end:r.now()}));return s.codePointAt(0)!==94||!l.includes(s.slice(1))?t(u):(e.enter("gfmFootnoteCallLabelMarker"),e.consume(u),e.exit("gfmFootnoteCallLabelMarker"),n(u))}}function zb(e,n){let t=e.length;for(;t--;)if(e[t][1].type==="labelImage"&&e[t][0]==="enter"){e[t][1];break}e[t+1][1].type="data",e[t+3][1].type="gfmFootnoteCallLabelMarker";const r={type:"gfmFootnoteCall",start:Object.assign({},e[t+3][1].start),end:Object.assign({},e[e.length-1][1].end)},i={type:"gfmFootnoteCallMarker",start:Object.assign({},e[t+3][1].end),end:Object.assign({},e[t+3][1].end)};i.end.column++,i.end.offset++,i.end._bufferIndex++;const l={type:"gfmFootnoteCallString",start:Object.assign({},i.end),end:Object.assign({},e[e.length-1][1].start)},a={type:"chunkString",contentType:"string",start:Object.assign({},l.start),end:Object.assign({},l.end)},o=[e[t+1],e[t+2],["enter",r,n],e[t+3],e[t+4],["enter",i,n],["exit",i,n],["enter",l,n],["enter",a,n],["exit",a,n],["exit",l,n],e[e.length-2],e[e.length-1],["exit",r,n]];return e.splice(t,e.length-t+1,...o),e}function Ab(e,n,t){const r=this,i=r.parser.gfmFootnotes||(r.parser.gfmFootnotes=[]);let l=0,a;return o;function o(f){return e.enter("gfmFootnoteCall"),e.enter("gfmFootnoteCallLabelMarker"),e.consume(f),e.exit("gfmFootnoteCallLabelMarker"),u}function u(f){return f!==94?t(f):(e.enter("gfmFootnoteCallMarker"),e.consume(f),e.exit("gfmFootnoteCallMarker"),e.enter("gfmFootnoteCallString"),e.enter("chunkString").contentType="string",s)}function s(f){if(l>999||f===93&&!a||f===null||f===91||we(f))return t(f);if(f===93){e.exit("chunkString");const p=e.exit("gfmFootnoteCallString");return i.includes(qn(r.sliceSerialize(p)))?(e.enter("gfmFootnoteCallLabelMarker"),e.consume(f),e.exit("gfmFootnoteCallLabelMarker"),e.exit("gfmFootnoteCall"),n):t(f)}return we(f)||(a=!0),l++,e.consume(f),f===92?d:s}function d(f){return f===91||f===92||f===93?(e.consume(f),l++,s):s(f)}}function jb(e,n,t){const r=this,i=r.parser.gfmFootnotes||(r.parser.gfmFootnotes=[]);let l,a=0,o;return u;function u(v){return e.enter("gfmFootnoteDefinition")._container=!0,e.enter("gfmFootnoteDefinitionLabel"),e.enter("gfmFootnoteDefinitionLabelMarker"),e.consume(v),e.exit("gfmFootnoteDefinitionLabelMarker"),s}function s(v){return v===94?(e.enter("gfmFootnoteDefinitionMarker"),e.consume(v),e.exit("gfmFootnoteDefinitionMarker"),e.enter("gfmFootnoteDefinitionLabelString"),e.enter("chunkString").contentType="string",d):t(v)}function d(v){if(a>999||v===93&&!o||v===null||v===91||we(v))return t(v);if(v===93){e.exit("chunkString");const w=e.exit("gfmFootnoteDefinitionLabelString");return l=qn(r.sliceSerialize(w)),e.enter("gfmFootnoteDefinitionLabelMarker"),e.consume(v),e.exit("gfmFootnoteDefinitionLabelMarker"),e.exit("gfmFootnoteDefinitionLabel"),p}return we(v)||(o=!0),a++,e.consume(v),v===92?f:d}function f(v){return v===91||v===92||v===93?(e.consume(v),a++,d):d(v)}function p(v){return v===58?(e.enter("definitionMarker"),e.consume(v),e.exit("definitionMarker"),i.includes(l)||i.push(l),me(e,h,"gfmFootnoteDefinitionWhitespace")):t(v)}function h(v){return n(v)}}function Pb(e,n,t){return e.check(Xi,n,e.attempt(bb,n,t))}function Ib(e){e.exit("gfmFootnoteDefinition")}function Nb(e,n,t){const r=this;return me(e,i,"gfmFootnoteDefinitionIndent",5);function i(l){const a=r.events[r.events.length-1];return a&&a[1].type==="gfmFootnoteDefinitionIndent"&&a[2].sliceSerialize(a[1],!0).length===4?n(l):t(l)}}function Lb(e){let t=(e||{}).singleTilde;const r={name:"strikethrough",tokenize:l,resolveAll:i};return t==null&&(t=!0),{text:{126:r},insideSpan:{null:[r]},attentionMarkers:{null:[126]}};function i(a,o){let u=-1;for(;++u<a.length;)if(a[u][0]==="enter"&&a[u][1].type==="strikethroughSequenceTemporary"&&a[u][1]._close){let s=u;for(;s--;)if(a[s][0]==="exit"&&a[s][1].type==="strikethroughSequenceTemporary"&&a[s][1]._open&&a[u][1].end.offset-a[u][1].start.offset===a[s][1].end.offset-a[s][1].start.offset){a[u][1].type="strikethroughSequence",a[s][1].type="strikethroughSequence";const d={type:"strikethrough",start:Object.assign({},a[s][1].start),end:Object.assign({},a[u][1].end)},f={type:"strikethroughText",start:Object.assign({},a[s][1].end),end:Object.assign({},a[u][1].start)},p=[["enter",d,o],["enter",a[s][1],o],["exit",a[s][1],o],["enter",f,o]],h=o.parser.constructs.insideSpan.null;h&&kn(p,p.length,0,La(h,a.slice(s+1,u),o)),kn(p,p.length,0,[["exit",f,o],["enter",a[u][1],o],["exit",a[u][1],o],["exit",d,o]]),kn(a,s-1,u-s+3,p),u=s+p.length-2;break}}for(u=-1;++u<a.length;)a[u][1].type==="strikethroughSequenceTemporary"&&(a[u][1].type="data");return a}function l(a,o,u){const s=this.previous,d=this.events;let f=0;return p;function p(v){return s===126&&d[d.length-1][1].type!=="characterEscape"?u(v):(a.enter("strikethroughSequenceTemporary"),h(v))}function h(v){const w=Rr(s);if(v===126)return f>1?u(v):(a.consume(v),f++,h);if(f<2&&!t)return u(v);const b=a.exit("strikethroughSequenceTemporary"),g=Rr(v);return b._open=!g||g===2&&!!w,b._close=!w||w===2&&!!g,o(v)}}}class Ob{constructor(){this.map=[]}add(n,t,r){Rb(this,n,t,r)}consume(n){if(this.map.sort(function(l,a){return l[0]-a[0]}),this.map.length===0)return;let t=this.map.length;const r=[];for(;t>0;)t-=1,r.push(n.slice(this.map[t][0]+this.map[t][1]),this.map[t][2]),n.length=this.map[t][0];r.push(n.slice()),n.length=0;let i=r.pop();for(;i;){for(const l of i)n.push(l);i=r.pop()}this.map.length=0}}function Rb(e,n,t,r){let i=0;if(!(t===0&&r.length===0)){for(;i<e.map.length;){if(e.map[i][0]===n){e.map[i][1]+=t,e.map[i][2].push(...r);return}i+=1}e.map.push([n,t,r])}}function Mb(e,n){let t=!1;const r=[];for(;n<e.length;){const i=e[n];if(t){if(i[0]==="enter")i[1].type==="tableContent"&&r.push(e[n+1][1].type==="tableDelimiterMarker"?"left":"none");else if(i[1].type==="tableContent"){if(e[n-1][1].type==="tableDelimiterMarker"){const l=r.length-1;r[l]=r[l]==="left"?"center":"right"}}else if(i[1].type==="tableDelimiterRow")break}else i[0]==="enter"&&i[1].type==="tableDelimiterRow"&&(t=!0);n+=1}return r}function qb(){return{flow:{null:{name:"table",tokenize:Fb,resolveAll:Db}}}}function Fb(e,n,t){const r=this;let i=0,l=0,a;return o;function o(E){let K=r.events.length-1;for(;K>-1;){const le=r.events[K][1].type;if(le==="lineEnding"||le==="linePrefix")K--;else break}const Z=K>-1?r.events[K][1].type:null,ue=Z==="tableHead"||Z==="tableRow"?C:u;return ue===C&&r.parser.lazy[r.now().line]?t(E):ue(E)}function u(E){return e.enter("tableHead"),e.enter("tableRow"),s(E)}function s(E){return E===124||(a=!0,l+=1),d(E)}function d(E){return E===null?t(E):ie(E)?l>1?(l=0,r.interrupt=!0,e.exit("tableRow"),e.enter("lineEnding"),e.consume(E),e.exit("lineEnding"),h):t(E):ce(E)?me(e,d,"whitespace")(E):(l+=1,a&&(a=!1,i+=1),E===124?(e.enter("tableCellDivider"),e.consume(E),e.exit("tableCellDivider"),a=!0,d):(e.enter("data"),f(E)))}function f(E){return E===null||E===124||we(E)?(e.exit("data"),d(E)):(e.consume(E),E===92?p:f)}function p(E){return E===92||E===124?(e.consume(E),f):f(E)}function h(E){return r.interrupt=!1,r.parser.lazy[r.now().line]?t(E):(e.enter("tableDelimiterRow"),a=!1,ce(E)?me(e,v,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(E):v(E))}function v(E){return E===45||E===58?b(E):E===124?(a=!0,e.enter("tableCellDivider"),e.consume(E),e.exit("tableCellDivider"),w):R(E)}function w(E){return ce(E)?me(e,b,"whitespace")(E):b(E)}function b(E){return E===58?(l+=1,a=!0,e.enter("tableDelimiterMarker"),e.consume(E),e.exit("tableDelimiterMarker"),g):E===45?(l+=1,g(E)):E===null||ie(E)?T(E):R(E)}function g(E){return E===45?(e.enter("tableDelimiterFiller"),y(E)):R(E)}function y(E){return E===45?(e.consume(E),y):E===58?(a=!0,e.exit("tableDelimiterFiller"),e.enter("tableDelimiterMarker"),e.consume(E),e.exit("tableDelimiterMarker"),k):(e.exit("tableDelimiterFiller"),k(E))}function k(E){return ce(E)?me(e,T,"whitespace")(E):T(E)}function T(E){return E===124?v(E):E===null||ie(E)?!a||i!==l?R(E):(e.exit("tableDelimiterRow"),e.exit("tableHead"),n(E)):R(E)}function R(E){return t(E)}function C(E){return e.enter("tableRow"),B(E)}function B(E){return E===124?(e.enter("tableCellDivider"),e.consume(E),e.exit("tableCellDivider"),B):E===null||ie(E)?(e.exit("tableRow"),n(E)):ce(E)?me(e,B,"whitespace")(E):(e.enter("data"),V(E))}function V(E){return E===null||E===124||we(E)?(e.exit("data"),B(E)):(e.consume(E),E===92?ee:V)}function ee(E){return E===92||E===124?(e.consume(E),V):V(E)}}function Db(e,n){let t=-1,r=!0,i=0,l=[0,0,0,0],a=[0,0,0,0],o=!1,u=0,s,d,f;const p=new Ob;for(;++t<e.length;){const h=e[t],v=h[1];h[0]==="enter"?v.type==="tableHead"?(o=!1,u!==0&&(pp(p,n,u,s,d),d=void 0,u=0),s={type:"table",start:Object.assign({},v.start),end:Object.assign({},v.end)},p.add(t,0,[["enter",s,n]])):v.type==="tableRow"||v.type==="tableDelimiterRow"?(r=!0,f=void 0,l=[0,0,0,0],a=[0,t+1,0,0],o&&(o=!1,d={type:"tableBody",start:Object.assign({},v.start),end:Object.assign({},v.end)},p.add(t,0,[["enter",d,n]])),i=v.type==="tableDelimiterRow"?2:d?3:1):i&&(v.type==="data"||v.type==="tableDelimiterMarker"||v.type==="tableDelimiterFiller")?(r=!1,a[2]===0&&(l[1]!==0&&(a[0]=a[1],f=kl(p,n,l,i,void 0,f),l=[0,0,0,0]),a[2]=t)):v.type==="tableCellDivider"&&(r?r=!1:(l[1]!==0&&(a[0]=a[1],f=kl(p,n,l,i,void 0,f)),l=a,a=[l[1],t,0,0])):v.type==="tableHead"?(o=!0,u=t):v.type==="tableRow"||v.type==="tableDelimiterRow"?(u=t,l[1]!==0?(a[0]=a[1],f=kl(p,n,l,i,t,f)):a[1]!==0&&(f=kl(p,n,a,i,t,f)),i=0):i&&(v.type==="data"||v.type==="tableDelimiterMarker"||v.type==="tableDelimiterFiller")&&(a[3]=t)}for(u!==0&&pp(p,n,u,s,d),p.consume(n.events),t=-1;++t<n.events.length;){const h=n.events[t];h[0]==="enter"&&h[1].type==="table"&&(h[1]._align=Mb(n.events,t))}return e}function kl(e,n,t,r,i,l){const a=r===1?"tableHeader":r===2?"tableDelimiter":"tableData",o="tableContent";t[0]!==0&&(l.end=Object.assign({},sr(n.events,t[0])),e.add(t[0],0,[["exit",l,n]]));const u=sr(n.events,t[1]);if(l={type:a,start:Object.assign({},u),end:Object.assign({},u)},e.add(t[1],0,[["enter",l,n]]),t[2]!==0){const s=sr(n.events,t[2]),d=sr(n.events,t[3]),f={type:o,start:Object.assign({},s),end:Object.assign({},d)};if(e.add(t[2],0,[["enter",f,n]]),r!==2){const p=n.events[t[2]],h=n.events[t[3]];if(p[1].end=Object.assign({},h[1].end),p[1].type="chunkText",p[1].contentType="text",t[3]>t[2]+1){const v=t[2]+1,w=t[3]-t[2]-1;e.add(v,w,[])}}e.add(t[3]+1,0,[["exit",f,n]])}return i!==void 0&&(l.end=Object.assign({},sr(n.events,i)),e.add(i,0,[["exit",l,n]]),l=void 0),l}function pp(e,n,t,r,i){const l=[],a=sr(n.events,t);i&&(i.end=Object.assign({},a),l.push(["exit",i,n])),r.end=Object.assign({},a),l.push(["exit",r,n]),e.add(t+1,0,l)}function sr(e,n){const t=e[n],r=t[0]==="enter"?"start":"end";return t[1][r]}const Bb={name:"tasklistCheck",tokenize:Hb};function Ub(){return{text:{91:Bb}}}function Hb(e,n,t){const r=this;return i;function i(u){return r.previous!==null||!r._gfmTasklistFirstContentOfListItem?t(u):(e.enter("taskListCheck"),e.enter("taskListCheckMarker"),e.consume(u),e.exit("taskListCheckMarker"),l)}function l(u){return we(u)?(e.enter("taskListCheckValueUnchecked"),e.consume(u),e.exit("taskListCheckValueUnchecked"),a):u===88||u===120?(e.enter("taskListCheckValueChecked"),e.consume(u),e.exit("taskListCheckValueChecked"),a):t(u)}function a(u){return u===93?(e.enter("taskListCheckMarker"),e.consume(u),e.exit("taskListCheckMarker"),e.exit("taskListCheck"),o):t(u)}function o(u){return ie(u)?n(u):ce(u)?e.check({tokenize:$b},n,t)(u):t(u)}}function $b(e,n,t){return me(e,r,"whitespace");function r(i){return i===null?t(i):n(i)}}function Vb(e){return Cg([gb(),Eb(),Lb(e),qb(),Ub()])}const Wb={};function Qb(e){const n=this,t=e||Wb,r=n.data(),i=r.micromarkExtensions||(r.micromarkExtensions=[]),l=r.fromMarkdownExtensions||(r.fromMarkdownExtensions=[]),a=r.toMarkdownExtensions||(r.toMarkdownExtensions=[]);i.push(Vb(t)),l.push(db()),a.push(pb(t))}const Yb={curl:"curl",node:"Node.js",python:"Python"};function Kb({codeExamples:e}){const n=Object.keys(e||{}),[t,r]=U.useState(n[0]),[i,l]=U.useState(!1);if(!n.length)return null;const a=()=>{var o;(o=navigator.clipboard)==null||o.writeText(e[t]),l(!0),setTimeout(()=>l(!1),1500)};return O.jsxs("div",{className:"rounded-lg overflow-hidden shadow-xl bg-codebg",children:[O.jsxs("div",{className:"flex items-center justify-between px-4 pt-3 pb-2 border-b border-white/10",children:[O.jsx("div",{className:"flex gap-1",children:n.map(o=>O.jsx("button",{onClick:()=>r(o),className:`text-xs px-3 py-1.5 rounded-md font-medium transition-colors ${t===o?"bg-white/10 text-white":"text-white/40 hover:text-white/70"}`,children:Yb[o]||o},o))}),O.jsx("button",{onClick:a,className:"text-white/40 hover:text-white/80 transition-colors p-1","aria-label":"Nusxalash",children:i?O.jsx(Dm,{size:14}):O.jsx(Bm,{size:14})})]}),O.jsx("pre",{className:"px-4 py-4 text-[13px] leading-relaxed overflow-x-auto",children:O.jsx("code",{className:"text-[#e0def4] font-mono whitespace-pre",children:e[t]})})]})}function Xb({label:e,code:n}){const[t,r]=U.useState(!1),i=()=>{var l;(l=navigator.clipboard)==null||l.writeText(n),r(!0),setTimeout(()=>r(!1),1500)};return O.jsxs("div",{className:"rounded-lg overflow-hidden shadow-xl bg-codebg",children:[O.jsxs("div",{className:"flex items-center justify-between px-4 pt-3 pb-2 border-b border-white/10",children:[O.jsx("span",{className:"text-xs px-2 py-1 rounded-md font-medium text-emerald-300/90 bg-emerald-400/10",children:e||"Javob"}),O.jsx("button",{onClick:i,className:"text-white/40 hover:text-white/80 transition-colors p-1","aria-label":"Nusxalash",children:t?O.jsx(Dm,{size:14}):O.jsx(Bm,{size:14})})]}),O.jsx("pre",{className:"px-4 py-4 text-[13px] leading-relaxed overflow-x-auto",children:O.jsx("code",{className:"text-[#e0def4] font-mono whitespace-pre",children:n})})]})}function Jb({params:e}){return e!=null&&e.length?O.jsx("div",{className:"mt-4 border border-gray-200 rounded-lg overflow-hidden",children:e.map((n,t)=>O.jsxs("div",{className:`px-4 py-3 ${t!==e.length-1?"border-b border-gray-100":""}`,children:[O.jsxs("div",{className:"flex items-center gap-2 flex-wrap",children:[O.jsx("code",{className:"text-[13px] font-semibold text-brand",children:n.name}),O.jsx("span",{className:"text-xs text-gray-400 font-mono",children:n.type}),n.required?O.jsx("span",{className:"text-[10px] font-medium px-1.5 py-0.5 rounded bg-red-50 text-red-500",children:"majburiy"}):O.jsx("span",{className:"text-[10px] font-medium px-1.5 py-0.5 rounded bg-gray-100 text-gray-500",children:"ixtiyoriy"})]}),O.jsx("p",{className:"text-[13px] text-gray-600 mt-1 leading-relaxed",children:n.desc})]},n.name))}):null}function Gb(){const{slug:e}=vv(),n=Kk(e);if(U.useEffect(()=>{window.scrollTo({top:0})},[e]),!n)return O.jsx(Mm,{to:"/docs/intro",replace:!0});const t=lc().find(u=>u.items.some(s=>s.slug===e)),{prev:r,next:i}=Jk(e),l=n.codeExamples&&Object.keys(n.codeExamples).length>0,a=n.responses||[],o=l||a.length>0;return O.jsxs("main",{className:"flex-1 min-w-0 px-4 md:px-8 py-8",children:[O.jsxs("div",{className:"flex items-center gap-1.5 text-[13px] text-gray-400 mb-4",children:[O.jsx("span",{children:t==null?void 0:t.title}),O.jsx($f,{size:13}),O.jsx("span",{className:"text-gray-700",children:n.title})]}),O.jsxs("div",{className:`grid grid-cols-1 gap-10 ${o?"lg:grid-cols-[minmax(0,1fr)_420px]":""}`,children:[O.jsxs("div",{children:[O.jsx("h1",{className:"text-[28px] font-bold tracking-tight mb-3",children:n.title}),n.method&&n.endpoint&&O.jsxs("div",{className:"flex items-center gap-2 mb-6",children:[O.jsx("span",{className:"text-[11px] font-bold px-2 py-1 rounded text-white bg-brand",children:n.method}),O.jsx("code",{className:"text-[13px] text-gray-700",children:n.endpoint})]}),n.rpcMethod&&O.jsxs("div",{className:"flex items-center gap-2 mb-6",children:[O.jsx("span",{className:"text-[11px] font-bold px-2 py-1 rounded text-white bg-brand",children:"JSON-RPC"}),O.jsxs("code",{className:"text-[13px] text-gray-700",children:['method: "',n.rpcMethod,'"']})]}),O.jsx("div",{className:"docs-prose",children:O.jsx(LC,{remarkPlugins:[Qb],children:n.body})}),n.params&&O.jsxs(O.Fragment,{children:[O.jsx("h2",{className:"text-[19px] font-semibold mt-8 mb-3",children:"Parametrlar"}),O.jsx(Jb,{params:n.params})]})]}),o&&O.jsxs("div",{className:"lg:sticky lg:top-20 self-start space-y-4",children:[l&&O.jsx(Kb,{codeExamples:n.codeExamples}),a.map((u,s)=>O.jsx(Xb,{label:u.label,code:u.code},s))]})]}),(r||i)&&O.jsxs("nav",{className:"mt-14 pt-6 border-t border-gray-100 grid grid-cols-2 gap-4",children:[r?O.jsxs(oa,{to:`/docs/${r.slug}`,className:"group flex flex-col items-start rounded-lg border border-gray-200 px-4 py-3 hover:border-brand/40 hover:bg-brand/[0.02] transition-colors",children:[O.jsxs("span",{className:"flex items-center gap-1 text-[12px] text-gray-400",children:[O.jsx(Gv,{size:14})," Oldingi"]}),O.jsx("span",{className:"mt-0.5 text-[14px] font-medium text-gray-800 group-hover:text-brand",children:r.title})]}):O.jsx("span",{}),i?O.jsxs(oa,{to:`/docs/${i.slug}`,className:"group flex flex-col items-end text-right rounded-lg border border-gray-200 px-4 py-3 hover:border-brand/40 hover:bg-brand/[0.02] transition-colors",children:[O.jsxs("span",{className:"flex items-center gap-1 text-[12px] text-gray-400",children:["Keyingi ",O.jsx($f,{size:14})]}),O.jsx("span",{className:"mt-0.5 text-[14px] font-medium text-gray-800 group-hover:text-brand",children:i.title})]}):O.jsx("span",{})]})]})}function Zb(){const[e,n]=U.useState(!1);return O.jsx(Uv,{children:O.jsxs("div",{className:"min-h-screen bg-white text-gray-900 font-sans",children:[O.jsx(nx,{sidebarOpen:e,setSidebarOpen:n}),O.jsxs("div",{className:"flex",children:[O.jsx(tx,{sidebarOpen:e}),O.jsx("div",{className:"flex-1 max-w-[1100px]",children:O.jsxs(Lv,{children:[O.jsx($u,{path:"/",element:O.jsx(Mm,{to:"/docs/intro",replace:!0})}),O.jsx($u,{path:"/docs/:slug",element:O.jsx(Gb,{})})]})})]})]})})}Ko.createRoot(document.getElementById("root")).render(O.jsx(Cp.StrictMode,{children:O.jsx(Zb,{})}));
