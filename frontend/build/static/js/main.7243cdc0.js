/*! For license information please see main.7243cdc0.js.LICENSE.txt */
(()=>{var e={49:(e,t)=>{"use strict";var r=Symbol.for("react.element"),n=Symbol.for("react.portal"),a=Symbol.for("react.fragment"),o=Symbol.for("react.strict_mode"),i=Symbol.for("react.profiler"),s=Symbol.for("react.provider"),l=Symbol.for("react.context"),c=Symbol.for("react.forward_ref"),u=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),p=Symbol.for("react.lazy"),f=Symbol.iterator;var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},m=Object.assign,g={};function b(e,t,r){this.props=e,this.context=t,this.refs=g,this.updater=r||h}function v(){}function y(e,t,r){this.props=e,this.context=t,this.refs=g,this.updater=r||h}b.prototype.isReactComponent={},b.prototype.setState=function(e,t){if("object"!==typeof e&&"function"!==typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},b.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},v.prototype=b.prototype;var x=y.prototype=new v;x.constructor=y,m(x,b.prototype),x.isPureReactComponent=!0;var w=Array.isArray,k=Object.prototype.hasOwnProperty,S={current:null},j={key:!0,ref:!0,__self:!0,__source:!0};function E(e,t,n){var a,o={},i=null,s=null;if(null!=t)for(a in void 0!==t.ref&&(s=t.ref),void 0!==t.key&&(i=""+t.key),t)k.call(t,a)&&!j.hasOwnProperty(a)&&(o[a]=t[a]);var l=arguments.length-2;if(1===l)o.children=n;else if(1<l){for(var c=Array(l),u=0;u<l;u++)c[u]=arguments[u+2];o.children=c}if(e&&e.defaultProps)for(a in l=e.defaultProps)void 0===o[a]&&(o[a]=l[a]);return{$$typeof:r,type:e,key:i,ref:s,props:o,_owner:S.current}}function C(e){return"object"===typeof e&&null!==e&&e.$$typeof===r}var _=/\/+/g;function O(e,t){return"object"===typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function P(e,t,a,o,i){var s=typeof e;"undefined"!==s&&"boolean"!==s||(e=null);var l=!1;if(null===e)l=!0;else switch(s){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case r:case n:l=!0}}if(l)return i=i(l=e),e=""===o?"."+O(l,0):o,w(i)?(a="",null!=e&&(a=e.replace(_,"$&/")+"/"),P(i,t,a,"",(function(e){return e}))):null!=i&&(C(i)&&(i=function(e,t){return{$$typeof:r,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(i,a+(!i.key||l&&l.key===i.key?"":(""+i.key).replace(_,"$&/")+"/")+e)),t.push(i)),1;if(l=0,o=""===o?".":o+":",w(e))for(var c=0;c<e.length;c++){var u=o+O(s=e[c],c);l+=P(s,t,a,u,i)}else if(u=function(e){return null===e||"object"!==typeof e?null:"function"===typeof(e=f&&e[f]||e["@@iterator"])?e:null}(e),"function"===typeof u)for(e=u.call(e),c=0;!(s=e.next()).done;)l+=P(s=s.value,t,a,u=o+O(s,c++),i);else if("object"===s)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function A(e,t,r){if(null==e)return e;var n=[],a=0;return P(e,n,"","",(function(e){return t.call(r,e,a++)})),n}function T(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var z={current:null},I={transition:null},D={ReactCurrentDispatcher:z,ReactCurrentBatchConfig:I,ReactCurrentOwner:S};function R(){throw Error("act(...) is not supported in production builds of React.")}t.Children={map:A,forEach:function(e,t,r){A(e,(function(){t.apply(this,arguments)}),r)},count:function(e){var t=0;return A(e,(function(){t++})),t},toArray:function(e){return A(e,(function(e){return e}))||[]},only:function(e){if(!C(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},t.Component=b,t.Fragment=a,t.Profiler=i,t.PureComponent=y,t.StrictMode=o,t.Suspense=u,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=D,t.act=R,t.cloneElement=function(e,t,n){if(null===e||void 0===e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var a=m({},e.props),o=e.key,i=e.ref,s=e._owner;if(null!=t){if(void 0!==t.ref&&(i=t.ref,s=S.current),void 0!==t.key&&(o=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(c in t)k.call(t,c)&&!j.hasOwnProperty(c)&&(a[c]=void 0===t[c]&&void 0!==l?l[c]:t[c])}var c=arguments.length-2;if(1===c)a.children=n;else if(1<c){l=Array(c);for(var u=0;u<c;u++)l[u]=arguments[u+2];a.children=l}return{$$typeof:r,type:e.type,key:o,ref:i,props:a,_owner:s}},t.createContext=function(e){return(e={$$typeof:l,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:s,_context:e},e.Consumer=e},t.createElement=E,t.createFactory=function(e){var t=E.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:c,render:e}},t.isValidElement=C,t.lazy=function(e){return{$$typeof:p,_payload:{_status:-1,_result:e},_init:T}},t.memo=function(e,t){return{$$typeof:d,type:e,compare:void 0===t?null:t}},t.startTransition=function(e){var t=I.transition;I.transition={};try{e()}finally{I.transition=t}},t.unstable_act=R,t.useCallback=function(e,t){return z.current.useCallback(e,t)},t.useContext=function(e){return z.current.useContext(e)},t.useDebugValue=function(){},t.useDeferredValue=function(e){return z.current.useDeferredValue(e)},t.useEffect=function(e,t){return z.current.useEffect(e,t)},t.useId=function(){return z.current.useId()},t.useImperativeHandle=function(e,t,r){return z.current.useImperativeHandle(e,t,r)},t.useInsertionEffect=function(e,t){return z.current.useInsertionEffect(e,t)},t.useLayoutEffect=function(e,t){return z.current.useLayoutEffect(e,t)},t.useMemo=function(e,t){return z.current.useMemo(e,t)},t.useReducer=function(e,t,r){return z.current.useReducer(e,t,r)},t.useRef=function(e){return z.current.useRef(e)},t.useState=function(e){return z.current.useState(e)},t.useSyncExternalStore=function(e,t,r){return z.current.useSyncExternalStore(e,t,r)},t.useTransition=function(){return z.current.useTransition()},t.version="18.3.1"},119:(e,t,r)=>{"use strict";!function e(){if("undefined"!==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__&&"function"===typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE)try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(t){console.error(t)}}(),e.exports=r(345)},340:(e,t,r)=>{"use strict";e.exports=r(761)},345:(e,t,r)=>{"use strict";var n=r(950),a=r(340);function o(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var i=new Set,s={};function l(e,t){c(e,t),c(e+"Capture",t)}function c(e,t){for(s[e]=t,e=0;e<t.length;e++)i.add(t[e])}var u=!("undefined"===typeof window||"undefined"===typeof window.document||"undefined"===typeof window.document.createElement),d=Object.prototype.hasOwnProperty,p=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,f={},h={};function m(e,t,r,n,a,o,i){this.acceptsBooleans=2===t||3===t||4===t,this.attributeName=n,this.attributeNamespace=a,this.mustUseProperty=r,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=i}var g={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach((function(e){g[e]=new m(e,0,!1,e,null,!1,!1)})),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach((function(e){var t=e[0];g[t]=new m(t,1,!1,e[1],null,!1,!1)})),["contentEditable","draggable","spellCheck","value"].forEach((function(e){g[e]=new m(e,2,!1,e.toLowerCase(),null,!1,!1)})),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach((function(e){g[e]=new m(e,2,!1,e,null,!1,!1)})),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach((function(e){g[e]=new m(e,3,!1,e.toLowerCase(),null,!1,!1)})),["checked","multiple","muted","selected"].forEach((function(e){g[e]=new m(e,3,!0,e,null,!1,!1)})),["capture","download"].forEach((function(e){g[e]=new m(e,4,!1,e,null,!1,!1)})),["cols","rows","size","span"].forEach((function(e){g[e]=new m(e,6,!1,e,null,!1,!1)})),["rowSpan","start"].forEach((function(e){g[e]=new m(e,5,!1,e.toLowerCase(),null,!1,!1)}));var b=/[\-:]([a-z])/g;function v(e){return e[1].toUpperCase()}function y(e,t,r,n){var a=g.hasOwnProperty(t)?g[t]:null;(null!==a?0!==a.type:n||!(2<t.length)||"o"!==t[0]&&"O"!==t[0]||"n"!==t[1]&&"N"!==t[1])&&(function(e,t,r,n){if(null===t||"undefined"===typeof t||function(e,t,r,n){if(null!==r&&0===r.type)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return!n&&(null!==r?!r.acceptsBooleans:"data-"!==(e=e.toLowerCase().slice(0,5))&&"aria-"!==e);default:return!1}}(e,t,r,n))return!0;if(n)return!1;if(null!==r)switch(r.type){case 3:return!t;case 4:return!1===t;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}(t,r,a,n)&&(r=null),n||null===a?function(e){return!!d.call(h,e)||!d.call(f,e)&&(p.test(e)?h[e]=!0:(f[e]=!0,!1))}(t)&&(null===r?e.removeAttribute(t):e.setAttribute(t,""+r)):a.mustUseProperty?e[a.propertyName]=null===r?3!==a.type&&"":r:(t=a.attributeName,n=a.attributeNamespace,null===r?e.removeAttribute(t):(r=3===(a=a.type)||4===a&&!0===r?"":""+r,n?e.setAttributeNS(n,t,r):e.setAttribute(t,r))))}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach((function(e){var t=e.replace(b,v);g[t]=new m(t,1,!1,e,null,!1,!1)})),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach((function(e){var t=e.replace(b,v);g[t]=new m(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)})),["xml:base","xml:lang","xml:space"].forEach((function(e){var t=e.replace(b,v);g[t]=new m(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)})),["tabIndex","crossOrigin"].forEach((function(e){g[e]=new m(e,1,!1,e.toLowerCase(),null,!1,!1)})),g.xlinkHref=new m("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach((function(e){g[e]=new m(e,1,!1,e.toLowerCase(),null,!0,!0)}));var x=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,w=Symbol.for("react.element"),k=Symbol.for("react.portal"),S=Symbol.for("react.fragment"),j=Symbol.for("react.strict_mode"),E=Symbol.for("react.profiler"),C=Symbol.for("react.provider"),_=Symbol.for("react.context"),O=Symbol.for("react.forward_ref"),P=Symbol.for("react.suspense"),A=Symbol.for("react.suspense_list"),T=Symbol.for("react.memo"),z=Symbol.for("react.lazy");Symbol.for("react.scope"),Symbol.for("react.debug_trace_mode");var I=Symbol.for("react.offscreen");Symbol.for("react.legacy_hidden"),Symbol.for("react.cache"),Symbol.for("react.tracing_marker");var D=Symbol.iterator;function R(e){return null===e||"object"!==typeof e?null:"function"===typeof(e=D&&e[D]||e["@@iterator"])?e:null}var N,M=Object.assign;function L(e){if(void 0===N)try{throw Error()}catch(r){var t=r.stack.trim().match(/\n( *(at )?)/);N=t&&t[1]||""}return"\n"+N+e}var F=!1;function $(e,t){if(!e||F)return"";F=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),"object"===typeof Reflect&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var n=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){n=c}e.call(t.prototype)}else{try{throw Error()}catch(c){n=c}e()}}catch(c){if(c&&n&&"string"===typeof c.stack){for(var a=c.stack.split("\n"),o=n.stack.split("\n"),i=a.length-1,s=o.length-1;1<=i&&0<=s&&a[i]!==o[s];)s--;for(;1<=i&&0<=s;i--,s--)if(a[i]!==o[s]){if(1!==i||1!==s)do{if(i--,0>--s||a[i]!==o[s]){var l="\n"+a[i].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}}while(1<=i&&0<=s);break}}}finally{F=!1,Error.prepareStackTrace=r}return(e=e?e.displayName||e.name:"")?L(e):""}function B(e){switch(e.tag){case 5:return L(e.type);case 16:return L("Lazy");case 13:return L("Suspense");case 19:return L("SuspenseList");case 0:case 2:case 15:return e=$(e.type,!1);case 11:return e=$(e.type.render,!1);case 1:return e=$(e.type,!0);default:return""}}function q(e){if(null==e)return null;if("function"===typeof e)return e.displayName||e.name||null;if("string"===typeof e)return e;switch(e){case S:return"Fragment";case k:return"Portal";case E:return"Profiler";case j:return"StrictMode";case P:return"Suspense";case A:return"SuspenseList"}if("object"===typeof e)switch(e.$$typeof){case _:return(e.displayName||"Context")+".Consumer";case C:return(e._context.displayName||"Context")+".Provider";case O:var t=e.render;return(e=e.displayName)||(e=""!==(e=t.displayName||t.name||"")?"ForwardRef("+e+")":"ForwardRef"),e;case T:return null!==(t=e.displayName||null)?t:q(e.type)||"Memo";case z:t=e._payload,e=e._init;try{return q(e(t))}catch(r){}}return null}function W(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=(e=t.render).displayName||e.name||"",t.displayName||(""!==e?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return q(t);case 8:return t===j?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if("function"===typeof t)return t.displayName||t.name||null;if("string"===typeof t)return t}return null}function U(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":case"object":return e;default:return""}}function V(e){var t=e.type;return(e=e.nodeName)&&"input"===e.toLowerCase()&&("checkbox"===t||"radio"===t)}function H(e){e._valueTracker||(e._valueTracker=function(e){var t=V(e)?"checked":"value",r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),n=""+e[t];if(!e.hasOwnProperty(t)&&"undefined"!==typeof r&&"function"===typeof r.get&&"function"===typeof r.set){var a=r.get,o=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return a.call(this)},set:function(e){n=""+e,o.call(this,e)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(e){n=""+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}(e))}function K(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var r=t.getValue(),n="";return e&&(n=V(e)?e.checked?"true":"false":e.value),(e=n)!==r&&(t.setValue(e),!0)}function G(e){if("undefined"===typeof(e=e||("undefined"!==typeof document?document:void 0)))return null;try{return e.activeElement||e.body}catch(t){return e.body}}function Y(e,t){var r=t.checked;return M({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:null!=r?r:e._wrapperState.initialChecked})}function J(e,t){var r=null==t.defaultValue?"":t.defaultValue,n=null!=t.checked?t.checked:t.defaultChecked;r=U(null!=t.value?t.value:r),e._wrapperState={initialChecked:n,initialValue:r,controlled:"checkbox"===t.type||"radio"===t.type?null!=t.checked:null!=t.value}}function Q(e,t){null!=(t=t.checked)&&y(e,"checked",t,!1)}function X(e,t){Q(e,t);var r=U(t.value),n=t.type;if(null!=r)"number"===n?(0===r&&""===e.value||e.value!=r)&&(e.value=""+r):e.value!==""+r&&(e.value=""+r);else if("submit"===n||"reset"===n)return void e.removeAttribute("value");t.hasOwnProperty("value")?ee(e,t.type,r):t.hasOwnProperty("defaultValue")&&ee(e,t.type,U(t.defaultValue)),null==t.checked&&null!=t.defaultChecked&&(e.defaultChecked=!!t.defaultChecked)}function Z(e,t,r){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var n=t.type;if(!("submit"!==n&&"reset"!==n||void 0!==t.value&&null!==t.value))return;t=""+e._wrapperState.initialValue,r||t===e.value||(e.value=t),e.defaultValue=t}""!==(r=e.name)&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,""!==r&&(e.name=r)}function ee(e,t,r){"number"===t&&G(e.ownerDocument)===e||(null==r?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+r&&(e.defaultValue=""+r))}var te=Array.isArray;function re(e,t,r,n){if(e=e.options,t){t={};for(var a=0;a<r.length;a++)t["$"+r[a]]=!0;for(r=0;r<e.length;r++)a=t.hasOwnProperty("$"+e[r].value),e[r].selected!==a&&(e[r].selected=a),a&&n&&(e[r].defaultSelected=!0)}else{for(r=""+U(r),t=null,a=0;a<e.length;a++){if(e[a].value===r)return e[a].selected=!0,void(n&&(e[a].defaultSelected=!0));null!==t||e[a].disabled||(t=e[a])}null!==t&&(t.selected=!0)}}function ne(e,t){if(null!=t.dangerouslySetInnerHTML)throw Error(o(91));return M({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function ae(e,t){var r=t.value;if(null==r){if(r=t.children,t=t.defaultValue,null!=r){if(null!=t)throw Error(o(92));if(te(r)){if(1<r.length)throw Error(o(93));r=r[0]}t=r}null==t&&(t=""),r=t}e._wrapperState={initialValue:U(r)}}function oe(e,t){var r=U(t.value),n=U(t.defaultValue);null!=r&&((r=""+r)!==e.value&&(e.value=r),null==t.defaultValue&&e.defaultValue!==r&&(e.defaultValue=r)),null!=n&&(e.defaultValue=""+n)}function ie(e){var t=e.textContent;t===e._wrapperState.initialValue&&""!==t&&null!==t&&(e.value=t)}function se(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function le(e,t){return null==e||"http://www.w3.org/1999/xhtml"===e?se(t):"http://www.w3.org/2000/svg"===e&&"foreignObject"===t?"http://www.w3.org/1999/xhtml":e}var ce,ue,de=(ue=function(e,t){if("http://www.w3.org/2000/svg"!==e.namespaceURI||"innerHTML"in e)e.innerHTML=t;else{for((ce=ce||document.createElement("div")).innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=ce.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}},"undefined"!==typeof MSApp&&MSApp.execUnsafeLocalFunction?function(e,t,r,n){MSApp.execUnsafeLocalFunction((function(){return ue(e,t)}))}:ue);function pe(e,t){if(t){var r=e.firstChild;if(r&&r===e.lastChild&&3===r.nodeType)return void(r.nodeValue=t)}e.textContent=t}var fe={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},he=["Webkit","ms","Moz","O"];function me(e,t,r){return null==t||"boolean"===typeof t||""===t?"":r||"number"!==typeof t||0===t||fe.hasOwnProperty(e)&&fe[e]?(""+t).trim():t+"px"}function ge(e,t){for(var r in e=e.style,t)if(t.hasOwnProperty(r)){var n=0===r.indexOf("--"),a=me(r,t[r],n);"float"===r&&(r="cssFloat"),n?e.setProperty(r,a):e[r]=a}}Object.keys(fe).forEach((function(e){he.forEach((function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),fe[t]=fe[e]}))}));var be=M({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ve(e,t){if(t){if(be[e]&&(null!=t.children||null!=t.dangerouslySetInnerHTML))throw Error(o(137,e));if(null!=t.dangerouslySetInnerHTML){if(null!=t.children)throw Error(o(60));if("object"!==typeof t.dangerouslySetInnerHTML||!("__html"in t.dangerouslySetInnerHTML))throw Error(o(61))}if(null!=t.style&&"object"!==typeof t.style)throw Error(o(62))}}function ye(e,t){if(-1===e.indexOf("-"))return"string"===typeof t.is;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var xe=null;function we(e){return(e=e.target||e.srcElement||window).correspondingUseElement&&(e=e.correspondingUseElement),3===e.nodeType?e.parentNode:e}var ke=null,Se=null,je=null;function Ee(e){if(e=ya(e)){if("function"!==typeof ke)throw Error(o(280));var t=e.stateNode;t&&(t=wa(t),ke(e.stateNode,e.type,t))}}function Ce(e){Se?je?je.push(e):je=[e]:Se=e}function _e(){if(Se){var e=Se,t=je;if(je=Se=null,Ee(e),t)for(e=0;e<t.length;e++)Ee(t[e])}}function Oe(e,t){return e(t)}function Pe(){}var Ae=!1;function Te(e,t,r){if(Ae)return e(t,r);Ae=!0;try{return Oe(e,t,r)}finally{Ae=!1,(null!==Se||null!==je)&&(Pe(),_e())}}function ze(e,t){var r=e.stateNode;if(null===r)return null;var n=wa(r);if(null===n)return null;r=n[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(n=!n.disabled)||(n=!("button"===(e=e.type)||"input"===e||"select"===e||"textarea"===e)),e=!n;break e;default:e=!1}if(e)return null;if(r&&"function"!==typeof r)throw Error(o(231,t,typeof r));return r}var Ie=!1;if(u)try{var De={};Object.defineProperty(De,"passive",{get:function(){Ie=!0}}),window.addEventListener("test",De,De),window.removeEventListener("test",De,De)}catch(ue){Ie=!1}function Re(e,t,r,n,a,o,i,s,l){var c=Array.prototype.slice.call(arguments,3);try{t.apply(r,c)}catch(u){this.onError(u)}}var Ne=!1,Me=null,Le=!1,Fe=null,$e={onError:function(e){Ne=!0,Me=e}};function Be(e,t,r,n,a,o,i,s,l){Ne=!1,Me=null,Re.apply($e,arguments)}function qe(e){var t=e,r=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do{0!==(4098&(t=e).flags)&&(r=t.return),e=t.return}while(e)}return 3===t.tag?r:null}function We(e){if(13===e.tag){var t=e.memoizedState;if(null===t&&(null!==(e=e.alternate)&&(t=e.memoizedState)),null!==t)return t.dehydrated}return null}function Ue(e){if(qe(e)!==e)throw Error(o(188))}function Ve(e){return null!==(e=function(e){var t=e.alternate;if(!t){if(null===(t=qe(e)))throw Error(o(188));return t!==e?null:e}for(var r=e,n=t;;){var a=r.return;if(null===a)break;var i=a.alternate;if(null===i){if(null!==(n=a.return)){r=n;continue}break}if(a.child===i.child){for(i=a.child;i;){if(i===r)return Ue(a),e;if(i===n)return Ue(a),t;i=i.sibling}throw Error(o(188))}if(r.return!==n.return)r=a,n=i;else{for(var s=!1,l=a.child;l;){if(l===r){s=!0,r=a,n=i;break}if(l===n){s=!0,n=a,r=i;break}l=l.sibling}if(!s){for(l=i.child;l;){if(l===r){s=!0,r=i,n=a;break}if(l===n){s=!0,n=i,r=a;break}l=l.sibling}if(!s)throw Error(o(189))}}if(r.alternate!==n)throw Error(o(190))}if(3!==r.tag)throw Error(o(188));return r.stateNode.current===r?e:t}(e))?He(e):null}function He(e){if(5===e.tag||6===e.tag)return e;for(e=e.child;null!==e;){var t=He(e);if(null!==t)return t;e=e.sibling}return null}var Ke=a.unstable_scheduleCallback,Ge=a.unstable_cancelCallback,Ye=a.unstable_shouldYield,Je=a.unstable_requestPaint,Qe=a.unstable_now,Xe=a.unstable_getCurrentPriorityLevel,Ze=a.unstable_ImmediatePriority,et=a.unstable_UserBlockingPriority,tt=a.unstable_NormalPriority,rt=a.unstable_LowPriority,nt=a.unstable_IdlePriority,at=null,ot=null;var it=Math.clz32?Math.clz32:function(e){return e>>>=0,0===e?32:31-(st(e)/lt|0)|0},st=Math.log,lt=Math.LN2;var ct=64,ut=4194304;function dt(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return 4194240&e;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return 130023424&e;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function pt(e,t){var r=e.pendingLanes;if(0===r)return 0;var n=0,a=e.suspendedLanes,o=e.pingedLanes,i=268435455&r;if(0!==i){var s=i&~a;0!==s?n=dt(s):0!==(o&=i)&&(n=dt(o))}else 0!==(i=r&~a)?n=dt(i):0!==o&&(n=dt(o));if(0===n)return 0;if(0!==t&&t!==n&&0===(t&a)&&((a=n&-n)>=(o=t&-t)||16===a&&0!==(4194240&o)))return t;if(0!==(4&n)&&(n|=16&r),0!==(t=e.entangledLanes))for(e=e.entanglements,t&=n;0<t;)a=1<<(r=31-it(t)),n|=e[r],t&=~a;return n}function ft(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;default:return-1}}function ht(e){return 0!==(e=-1073741825&e.pendingLanes)?e:1073741824&e?1073741824:0}function mt(){var e=ct;return 0===(4194240&(ct<<=1))&&(ct=64),e}function gt(e){for(var t=[],r=0;31>r;r++)t.push(e);return t}function bt(e,t,r){e.pendingLanes|=t,536870912!==t&&(e.suspendedLanes=0,e.pingedLanes=0),(e=e.eventTimes)[t=31-it(t)]=r}function vt(e,t){var r=e.entangledLanes|=t;for(e=e.entanglements;r;){var n=31-it(r),a=1<<n;a&t|e[n]&t&&(e[n]|=t),r&=~a}}var yt=0;function xt(e){return 1<(e&=-e)?4<e?0!==(268435455&e)?16:536870912:4:1}var wt,kt,St,jt,Et,Ct=!1,_t=[],Ot=null,Pt=null,At=null,Tt=new Map,zt=new Map,It=[],Dt="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Rt(e,t){switch(e){case"focusin":case"focusout":Ot=null;break;case"dragenter":case"dragleave":Pt=null;break;case"mouseover":case"mouseout":At=null;break;case"pointerover":case"pointerout":Tt.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":zt.delete(t.pointerId)}}function Nt(e,t,r,n,a,o){return null===e||e.nativeEvent!==o?(e={blockedOn:t,domEventName:r,eventSystemFlags:n,nativeEvent:o,targetContainers:[a]},null!==t&&(null!==(t=ya(t))&&kt(t)),e):(e.eventSystemFlags|=n,t=e.targetContainers,null!==a&&-1===t.indexOf(a)&&t.push(a),e)}function Mt(e){var t=va(e.target);if(null!==t){var r=qe(t);if(null!==r)if(13===(t=r.tag)){if(null!==(t=We(r)))return e.blockedOn=t,void Et(e.priority,(function(){St(r)}))}else if(3===t&&r.stateNode.current.memoizedState.isDehydrated)return void(e.blockedOn=3===r.tag?r.stateNode.containerInfo:null)}e.blockedOn=null}function Lt(e){if(null!==e.blockedOn)return!1;for(var t=e.targetContainers;0<t.length;){var r=Yt(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(null!==r)return null!==(t=ya(r))&&kt(t),e.blockedOn=r,!1;var n=new(r=e.nativeEvent).constructor(r.type,r);xe=n,r.target.dispatchEvent(n),xe=null,t.shift()}return!0}function Ft(e,t,r){Lt(e)&&r.delete(t)}function $t(){Ct=!1,null!==Ot&&Lt(Ot)&&(Ot=null),null!==Pt&&Lt(Pt)&&(Pt=null),null!==At&&Lt(At)&&(At=null),Tt.forEach(Ft),zt.forEach(Ft)}function Bt(e,t){e.blockedOn===t&&(e.blockedOn=null,Ct||(Ct=!0,a.unstable_scheduleCallback(a.unstable_NormalPriority,$t)))}function qt(e){function t(t){return Bt(t,e)}if(0<_t.length){Bt(_t[0],e);for(var r=1;r<_t.length;r++){var n=_t[r];n.blockedOn===e&&(n.blockedOn=null)}}for(null!==Ot&&Bt(Ot,e),null!==Pt&&Bt(Pt,e),null!==At&&Bt(At,e),Tt.forEach(t),zt.forEach(t),r=0;r<It.length;r++)(n=It[r]).blockedOn===e&&(n.blockedOn=null);for(;0<It.length&&null===(r=It[0]).blockedOn;)Mt(r),null===r.blockedOn&&It.shift()}var Wt=x.ReactCurrentBatchConfig,Ut=!0;function Vt(e,t,r,n){var a=yt,o=Wt.transition;Wt.transition=null;try{yt=1,Kt(e,t,r,n)}finally{yt=a,Wt.transition=o}}function Ht(e,t,r,n){var a=yt,o=Wt.transition;Wt.transition=null;try{yt=4,Kt(e,t,r,n)}finally{yt=a,Wt.transition=o}}function Kt(e,t,r,n){if(Ut){var a=Yt(e,t,r,n);if(null===a)Un(e,t,n,Gt,r),Rt(e,n);else if(function(e,t,r,n,a){switch(t){case"focusin":return Ot=Nt(Ot,e,t,r,n,a),!0;case"dragenter":return Pt=Nt(Pt,e,t,r,n,a),!0;case"mouseover":return At=Nt(At,e,t,r,n,a),!0;case"pointerover":var o=a.pointerId;return Tt.set(o,Nt(Tt.get(o)||null,e,t,r,n,a)),!0;case"gotpointercapture":return o=a.pointerId,zt.set(o,Nt(zt.get(o)||null,e,t,r,n,a)),!0}return!1}(a,e,t,r,n))n.stopPropagation();else if(Rt(e,n),4&t&&-1<Dt.indexOf(e)){for(;null!==a;){var o=ya(a);if(null!==o&&wt(o),null===(o=Yt(e,t,r,n))&&Un(e,t,n,Gt,r),o===a)break;a=o}null!==a&&n.stopPropagation()}else Un(e,t,n,null,r)}}var Gt=null;function Yt(e,t,r,n){if(Gt=null,null!==(e=va(e=we(n))))if(null===(t=qe(e)))e=null;else if(13===(r=t.tag)){if(null!==(e=We(t)))return e;e=null}else if(3===r){if(t.stateNode.current.memoizedState.isDehydrated)return 3===t.tag?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Gt=e,null}function Jt(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Xe()){case Ze:return 1;case et:return 4;case tt:case rt:return 16;case nt:return 536870912;default:return 16}default:return 16}}var Qt=null,Xt=null,Zt=null;function er(){if(Zt)return Zt;var e,t,r=Xt,n=r.length,a="value"in Qt?Qt.value:Qt.textContent,o=a.length;for(e=0;e<n&&r[e]===a[e];e++);var i=n-e;for(t=1;t<=i&&r[n-t]===a[o-t];t++);return Zt=a.slice(e,1<t?1-t:void 0)}function tr(e){var t=e.keyCode;return"charCode"in e?0===(e=e.charCode)&&13===t&&(e=13):e=t,10===e&&(e=13),32<=e||13===e?e:0}function rr(){return!0}function nr(){return!1}function ar(e){function t(t,r,n,a,o){for(var i in this._reactName=t,this._targetInst=n,this.type=r,this.nativeEvent=a,this.target=o,this.currentTarget=null,e)e.hasOwnProperty(i)&&(t=e[i],this[i]=t?t(a):a[i]);return this.isDefaultPrevented=(null!=a.defaultPrevented?a.defaultPrevented:!1===a.returnValue)?rr:nr,this.isPropagationStopped=nr,this}return M(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():"unknown"!==typeof e.returnValue&&(e.returnValue=!1),this.isDefaultPrevented=rr)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():"unknown"!==typeof e.cancelBubble&&(e.cancelBubble=!0),this.isPropagationStopped=rr)},persist:function(){},isPersistent:rr}),t}var or,ir,sr,lr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},cr=ar(lr),ur=M({},lr,{view:0,detail:0}),dr=ar(ur),pr=M({},ur,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:jr,button:0,buttons:0,relatedTarget:function(e){return void 0===e.relatedTarget?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==sr&&(sr&&"mousemove"===e.type?(or=e.screenX-sr.screenX,ir=e.screenY-sr.screenY):ir=or=0,sr=e),or)},movementY:function(e){return"movementY"in e?e.movementY:ir}}),fr=ar(pr),hr=ar(M({},pr,{dataTransfer:0})),mr=ar(M({},ur,{relatedTarget:0})),gr=ar(M({},lr,{animationName:0,elapsedTime:0,pseudoElement:0})),br=M({},lr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),vr=ar(br),yr=ar(M({},lr,{data:0})),xr={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},wr={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},kr={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Sr(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):!!(e=kr[e])&&!!t[e]}function jr(){return Sr}var Er=M({},ur,{key:function(e){if(e.key){var t=xr[e.key]||e.key;if("Unidentified"!==t)return t}return"keypress"===e.type?13===(e=tr(e))?"Enter":String.fromCharCode(e):"keydown"===e.type||"keyup"===e.type?wr[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:jr,charCode:function(e){return"keypress"===e.type?tr(e):0},keyCode:function(e){return"keydown"===e.type||"keyup"===e.type?e.keyCode:0},which:function(e){return"keypress"===e.type?tr(e):"keydown"===e.type||"keyup"===e.type?e.keyCode:0}}),Cr=ar(Er),_r=ar(M({},pr,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),Or=ar(M({},ur,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:jr})),Pr=ar(M({},lr,{propertyName:0,elapsedTime:0,pseudoElement:0})),Ar=M({},pr,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Tr=ar(Ar),zr=[9,13,27,32],Ir=u&&"CompositionEvent"in window,Dr=null;u&&"documentMode"in document&&(Dr=document.documentMode);var Rr=u&&"TextEvent"in window&&!Dr,Nr=u&&(!Ir||Dr&&8<Dr&&11>=Dr),Mr=String.fromCharCode(32),Lr=!1;function Fr(e,t){switch(e){case"keyup":return-1!==zr.indexOf(t.keyCode);case"keydown":return 229!==t.keyCode;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function $r(e){return"object"===typeof(e=e.detail)&&"data"in e?e.data:null}var Br=!1;var qr={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Wr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return"input"===t?!!qr[e.type]:"textarea"===t}function Ur(e,t,r,n){Ce(n),0<(t=Hn(t,"onChange")).length&&(r=new cr("onChange","change",null,r,n),e.push({event:r,listeners:t}))}var Vr=null,Hr=null;function Kr(e){Ln(e,0)}function Gr(e){if(K(xa(e)))return e}function Yr(e,t){if("change"===e)return t}var Jr=!1;if(u){var Qr;if(u){var Xr="oninput"in document;if(!Xr){var Zr=document.createElement("div");Zr.setAttribute("oninput","return;"),Xr="function"===typeof Zr.oninput}Qr=Xr}else Qr=!1;Jr=Qr&&(!document.documentMode||9<document.documentMode)}function en(){Vr&&(Vr.detachEvent("onpropertychange",tn),Hr=Vr=null)}function tn(e){if("value"===e.propertyName&&Gr(Hr)){var t=[];Ur(t,Hr,e,we(e)),Te(Kr,t)}}function rn(e,t,r){"focusin"===e?(en(),Hr=r,(Vr=t).attachEvent("onpropertychange",tn)):"focusout"===e&&en()}function nn(e){if("selectionchange"===e||"keyup"===e||"keydown"===e)return Gr(Hr)}function an(e,t){if("click"===e)return Gr(t)}function on(e,t){if("input"===e||"change"===e)return Gr(t)}var sn="function"===typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e===1/t)||e!==e&&t!==t};function ln(e,t){if(sn(e,t))return!0;if("object"!==typeof e||null===e||"object"!==typeof t||null===t)return!1;var r=Object.keys(e),n=Object.keys(t);if(r.length!==n.length)return!1;for(n=0;n<r.length;n++){var a=r[n];if(!d.call(t,a)||!sn(e[a],t[a]))return!1}return!0}function cn(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function un(e,t){var r,n=cn(e);for(e=0;n;){if(3===n.nodeType){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=cn(n)}}function dn(e,t){return!(!e||!t)&&(e===t||(!e||3!==e.nodeType)&&(t&&3===t.nodeType?dn(e,t.parentNode):"contains"in e?e.contains(t):!!e.compareDocumentPosition&&!!(16&e.compareDocumentPosition(t))))}function pn(){for(var e=window,t=G();t instanceof e.HTMLIFrameElement;){try{var r="string"===typeof t.contentWindow.location.href}catch(n){r=!1}if(!r)break;t=G((e=t.contentWindow).document)}return t}function fn(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&("input"===t&&("text"===e.type||"search"===e.type||"tel"===e.type||"url"===e.type||"password"===e.type)||"textarea"===t||"true"===e.contentEditable)}function hn(e){var t=pn(),r=e.focusedElem,n=e.selectionRange;if(t!==r&&r&&r.ownerDocument&&dn(r.ownerDocument.documentElement,r)){if(null!==n&&fn(r))if(t=n.start,void 0===(e=n.end)&&(e=t),"selectionStart"in r)r.selectionStart=t,r.selectionEnd=Math.min(e,r.value.length);else if((e=(t=r.ownerDocument||document)&&t.defaultView||window).getSelection){e=e.getSelection();var a=r.textContent.length,o=Math.min(n.start,a);n=void 0===n.end?o:Math.min(n.end,a),!e.extend&&o>n&&(a=n,n=o,o=a),a=un(r,o);var i=un(r,n);a&&i&&(1!==e.rangeCount||e.anchorNode!==a.node||e.anchorOffset!==a.offset||e.focusNode!==i.node||e.focusOffset!==i.offset)&&((t=t.createRange()).setStart(a.node,a.offset),e.removeAllRanges(),o>n?(e.addRange(t),e.extend(i.node,i.offset)):(t.setEnd(i.node,i.offset),e.addRange(t)))}for(t=[],e=r;e=e.parentNode;)1===e.nodeType&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for("function"===typeof r.focus&&r.focus(),r=0;r<t.length;r++)(e=t[r]).element.scrollLeft=e.left,e.element.scrollTop=e.top}}var mn=u&&"documentMode"in document&&11>=document.documentMode,gn=null,bn=null,vn=null,yn=!1;function xn(e,t,r){var n=r.window===r?r.document:9===r.nodeType?r:r.ownerDocument;yn||null==gn||gn!==G(n)||("selectionStart"in(n=gn)&&fn(n)?n={start:n.selectionStart,end:n.selectionEnd}:n={anchorNode:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection()).anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset},vn&&ln(vn,n)||(vn=n,0<(n=Hn(bn,"onSelect")).length&&(t=new cr("onSelect","select",null,t,r),e.push({event:t,listeners:n}),t.target=gn)))}function wn(e,t){var r={};return r[e.toLowerCase()]=t.toLowerCase(),r["Webkit"+e]="webkit"+t,r["Moz"+e]="moz"+t,r}var kn={animationend:wn("Animation","AnimationEnd"),animationiteration:wn("Animation","AnimationIteration"),animationstart:wn("Animation","AnimationStart"),transitionend:wn("Transition","TransitionEnd")},Sn={},jn={};function En(e){if(Sn[e])return Sn[e];if(!kn[e])return e;var t,r=kn[e];for(t in r)if(r.hasOwnProperty(t)&&t in jn)return Sn[e]=r[t];return e}u&&(jn=document.createElement("div").style,"AnimationEvent"in window||(delete kn.animationend.animation,delete kn.animationiteration.animation,delete kn.animationstart.animation),"TransitionEvent"in window||delete kn.transitionend.transition);var Cn=En("animationend"),_n=En("animationiteration"),On=En("animationstart"),Pn=En("transitionend"),An=new Map,Tn="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function zn(e,t){An.set(e,t),l(t,[e])}for(var In=0;In<Tn.length;In++){var Dn=Tn[In];zn(Dn.toLowerCase(),"on"+(Dn[0].toUpperCase()+Dn.slice(1)))}zn(Cn,"onAnimationEnd"),zn(_n,"onAnimationIteration"),zn(On,"onAnimationStart"),zn("dblclick","onDoubleClick"),zn("focusin","onFocus"),zn("focusout","onBlur"),zn(Pn,"onTransitionEnd"),c("onMouseEnter",["mouseout","mouseover"]),c("onMouseLeave",["mouseout","mouseover"]),c("onPointerEnter",["pointerout","pointerover"]),c("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Rn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Nn=new Set("cancel close invalid load scroll toggle".split(" ").concat(Rn));function Mn(e,t,r){var n=e.type||"unknown-event";e.currentTarget=r,function(e,t,r,n,a,i,s,l,c){if(Be.apply(this,arguments),Ne){if(!Ne)throw Error(o(198));var u=Me;Ne=!1,Me=null,Le||(Le=!0,Fe=u)}}(n,t,void 0,e),e.currentTarget=null}function Ln(e,t){t=0!==(4&t);for(var r=0;r<e.length;r++){var n=e[r],a=n.event;n=n.listeners;e:{var o=void 0;if(t)for(var i=n.length-1;0<=i;i--){var s=n[i],l=s.instance,c=s.currentTarget;if(s=s.listener,l!==o&&a.isPropagationStopped())break e;Mn(a,s,c),o=l}else for(i=0;i<n.length;i++){if(l=(s=n[i]).instance,c=s.currentTarget,s=s.listener,l!==o&&a.isPropagationStopped())break e;Mn(a,s,c),o=l}}}if(Le)throw e=Fe,Le=!1,Fe=null,e}function Fn(e,t){var r=t[ma];void 0===r&&(r=t[ma]=new Set);var n=e+"__bubble";r.has(n)||(Wn(t,e,2,!1),r.add(n))}function $n(e,t,r){var n=0;t&&(n|=4),Wn(r,e,n,t)}var Bn="_reactListening"+Math.random().toString(36).slice(2);function qn(e){if(!e[Bn]){e[Bn]=!0,i.forEach((function(t){"selectionchange"!==t&&(Nn.has(t)||$n(t,!1,e),$n(t,!0,e))}));var t=9===e.nodeType?e:e.ownerDocument;null===t||t[Bn]||(t[Bn]=!0,$n("selectionchange",!1,t))}}function Wn(e,t,r,n){switch(Jt(t)){case 1:var a=Vt;break;case 4:a=Ht;break;default:a=Kt}r=a.bind(null,t,r,e),a=void 0,!Ie||"touchstart"!==t&&"touchmove"!==t&&"wheel"!==t||(a=!0),n?void 0!==a?e.addEventListener(t,r,{capture:!0,passive:a}):e.addEventListener(t,r,!0):void 0!==a?e.addEventListener(t,r,{passive:a}):e.addEventListener(t,r,!1)}function Un(e,t,r,n,a){var o=n;if(0===(1&t)&&0===(2&t)&&null!==n)e:for(;;){if(null===n)return;var i=n.tag;if(3===i||4===i){var s=n.stateNode.containerInfo;if(s===a||8===s.nodeType&&s.parentNode===a)break;if(4===i)for(i=n.return;null!==i;){var l=i.tag;if((3===l||4===l)&&((l=i.stateNode.containerInfo)===a||8===l.nodeType&&l.parentNode===a))return;i=i.return}for(;null!==s;){if(null===(i=va(s)))return;if(5===(l=i.tag)||6===l){n=o=i;continue e}s=s.parentNode}}n=n.return}Te((function(){var n=o,a=we(r),i=[];e:{var s=An.get(e);if(void 0!==s){var l=cr,c=e;switch(e){case"keypress":if(0===tr(r))break e;case"keydown":case"keyup":l=Cr;break;case"focusin":c="focus",l=mr;break;case"focusout":c="blur",l=mr;break;case"beforeblur":case"afterblur":l=mr;break;case"click":if(2===r.button)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":l=fr;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":l=hr;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":l=Or;break;case Cn:case _n:case On:l=gr;break;case Pn:l=Pr;break;case"scroll":l=dr;break;case"wheel":l=Tr;break;case"copy":case"cut":case"paste":l=vr;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":l=_r}var u=0!==(4&t),d=!u&&"scroll"===e,p=u?null!==s?s+"Capture":null:s;u=[];for(var f,h=n;null!==h;){var m=(f=h).stateNode;if(5===f.tag&&null!==m&&(f=m,null!==p&&(null!=(m=ze(h,p))&&u.push(Vn(h,m,f)))),d)break;h=h.return}0<u.length&&(s=new l(s,c,null,r,a),i.push({event:s,listeners:u}))}}if(0===(7&t)){if(l="mouseout"===e||"pointerout"===e,(!(s="mouseover"===e||"pointerover"===e)||r===xe||!(c=r.relatedTarget||r.fromElement)||!va(c)&&!c[ha])&&(l||s)&&(s=a.window===a?a:(s=a.ownerDocument)?s.defaultView||s.parentWindow:window,l?(l=n,null!==(c=(c=r.relatedTarget||r.toElement)?va(c):null)&&(c!==(d=qe(c))||5!==c.tag&&6!==c.tag)&&(c=null)):(l=null,c=n),l!==c)){if(u=fr,m="onMouseLeave",p="onMouseEnter",h="mouse","pointerout"!==e&&"pointerover"!==e||(u=_r,m="onPointerLeave",p="onPointerEnter",h="pointer"),d=null==l?s:xa(l),f=null==c?s:xa(c),(s=new u(m,h+"leave",l,r,a)).target=d,s.relatedTarget=f,m=null,va(a)===n&&((u=new u(p,h+"enter",c,r,a)).target=f,u.relatedTarget=d,m=u),d=m,l&&c)e:{for(p=c,h=0,f=u=l;f;f=Kn(f))h++;for(f=0,m=p;m;m=Kn(m))f++;for(;0<h-f;)u=Kn(u),h--;for(;0<f-h;)p=Kn(p),f--;for(;h--;){if(u===p||null!==p&&u===p.alternate)break e;u=Kn(u),p=Kn(p)}u=null}else u=null;null!==l&&Gn(i,s,l,u,!1),null!==c&&null!==d&&Gn(i,d,c,u,!0)}if("select"===(l=(s=n?xa(n):window).nodeName&&s.nodeName.toLowerCase())||"input"===l&&"file"===s.type)var g=Yr;else if(Wr(s))if(Jr)g=on;else{g=nn;var b=rn}else(l=s.nodeName)&&"input"===l.toLowerCase()&&("checkbox"===s.type||"radio"===s.type)&&(g=an);switch(g&&(g=g(e,n))?Ur(i,g,r,a):(b&&b(e,s,n),"focusout"===e&&(b=s._wrapperState)&&b.controlled&&"number"===s.type&&ee(s,"number",s.value)),b=n?xa(n):window,e){case"focusin":(Wr(b)||"true"===b.contentEditable)&&(gn=b,bn=n,vn=null);break;case"focusout":vn=bn=gn=null;break;case"mousedown":yn=!0;break;case"contextmenu":case"mouseup":case"dragend":yn=!1,xn(i,r,a);break;case"selectionchange":if(mn)break;case"keydown":case"keyup":xn(i,r,a)}var v;if(Ir)e:{switch(e){case"compositionstart":var y="onCompositionStart";break e;case"compositionend":y="onCompositionEnd";break e;case"compositionupdate":y="onCompositionUpdate";break e}y=void 0}else Br?Fr(e,r)&&(y="onCompositionEnd"):"keydown"===e&&229===r.keyCode&&(y="onCompositionStart");y&&(Nr&&"ko"!==r.locale&&(Br||"onCompositionStart"!==y?"onCompositionEnd"===y&&Br&&(v=er()):(Xt="value"in(Qt=a)?Qt.value:Qt.textContent,Br=!0)),0<(b=Hn(n,y)).length&&(y=new yr(y,e,null,r,a),i.push({event:y,listeners:b}),v?y.data=v:null!==(v=$r(r))&&(y.data=v))),(v=Rr?function(e,t){switch(e){case"compositionend":return $r(t);case"keypress":return 32!==t.which?null:(Lr=!0,Mr);case"textInput":return(e=t.data)===Mr&&Lr?null:e;default:return null}}(e,r):function(e,t){if(Br)return"compositionend"===e||!Ir&&Fr(e,t)?(e=er(),Zt=Xt=Qt=null,Br=!1,e):null;switch(e){case"paste":default:return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Nr&&"ko"!==t.locale?null:t.data}}(e,r))&&(0<(n=Hn(n,"onBeforeInput")).length&&(a=new yr("onBeforeInput","beforeinput",null,r,a),i.push({event:a,listeners:n}),a.data=v))}Ln(i,t)}))}function Vn(e,t,r){return{instance:e,listener:t,currentTarget:r}}function Hn(e,t){for(var r=t+"Capture",n=[];null!==e;){var a=e,o=a.stateNode;5===a.tag&&null!==o&&(a=o,null!=(o=ze(e,r))&&n.unshift(Vn(e,o,a)),null!=(o=ze(e,t))&&n.push(Vn(e,o,a))),e=e.return}return n}function Kn(e){if(null===e)return null;do{e=e.return}while(e&&5!==e.tag);return e||null}function Gn(e,t,r,n,a){for(var o=t._reactName,i=[];null!==r&&r!==n;){var s=r,l=s.alternate,c=s.stateNode;if(null!==l&&l===n)break;5===s.tag&&null!==c&&(s=c,a?null!=(l=ze(r,o))&&i.unshift(Vn(r,l,s)):a||null!=(l=ze(r,o))&&i.push(Vn(r,l,s))),r=r.return}0!==i.length&&e.push({event:t,listeners:i})}var Yn=/\r\n?/g,Jn=/\u0000|\uFFFD/g;function Qn(e){return("string"===typeof e?e:""+e).replace(Yn,"\n").replace(Jn,"")}function Xn(e,t,r){if(t=Qn(t),Qn(e)!==t&&r)throw Error(o(425))}function Zn(){}var ea=null,ta=null;function ra(e,t){return"textarea"===e||"noscript"===e||"string"===typeof t.children||"number"===typeof t.children||"object"===typeof t.dangerouslySetInnerHTML&&null!==t.dangerouslySetInnerHTML&&null!=t.dangerouslySetInnerHTML.__html}var na="function"===typeof setTimeout?setTimeout:void 0,aa="function"===typeof clearTimeout?clearTimeout:void 0,oa="function"===typeof Promise?Promise:void 0,ia="function"===typeof queueMicrotask?queueMicrotask:"undefined"!==typeof oa?function(e){return oa.resolve(null).then(e).catch(sa)}:na;function sa(e){setTimeout((function(){throw e}))}function la(e,t){var r=t,n=0;do{var a=r.nextSibling;if(e.removeChild(r),a&&8===a.nodeType)if("/$"===(r=a.data)){if(0===n)return e.removeChild(a),void qt(t);n--}else"$"!==r&&"$?"!==r&&"$!"!==r||n++;r=a}while(r);qt(t)}function ca(e){for(;null!=e;e=e.nextSibling){var t=e.nodeType;if(1===t||3===t)break;if(8===t){if("$"===(t=e.data)||"$!"===t||"$?"===t)break;if("/$"===t)return null}}return e}function ua(e){e=e.previousSibling;for(var t=0;e;){if(8===e.nodeType){var r=e.data;if("$"===r||"$!"===r||"$?"===r){if(0===t)return e;t--}else"/$"===r&&t++}e=e.previousSibling}return null}var da=Math.random().toString(36).slice(2),pa="__reactFiber$"+da,fa="__reactProps$"+da,ha="__reactContainer$"+da,ma="__reactEvents$"+da,ga="__reactListeners$"+da,ba="__reactHandles$"+da;function va(e){var t=e[pa];if(t)return t;for(var r=e.parentNode;r;){if(t=r[ha]||r[pa]){if(r=t.alternate,null!==t.child||null!==r&&null!==r.child)for(e=ua(e);null!==e;){if(r=e[pa])return r;e=ua(e)}return t}r=(e=r).parentNode}return null}function ya(e){return!(e=e[pa]||e[ha])||5!==e.tag&&6!==e.tag&&13!==e.tag&&3!==e.tag?null:e}function xa(e){if(5===e.tag||6===e.tag)return e.stateNode;throw Error(o(33))}function wa(e){return e[fa]||null}var ka=[],Sa=-1;function ja(e){return{current:e}}function Ea(e){0>Sa||(e.current=ka[Sa],ka[Sa]=null,Sa--)}function Ca(e,t){Sa++,ka[Sa]=e.current,e.current=t}var _a={},Oa=ja(_a),Pa=ja(!1),Aa=_a;function Ta(e,t){var r=e.type.contextTypes;if(!r)return _a;var n=e.stateNode;if(n&&n.__reactInternalMemoizedUnmaskedChildContext===t)return n.__reactInternalMemoizedMaskedChildContext;var a,o={};for(a in r)o[a]=t[a];return n&&((e=e.stateNode).__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function za(e){return null!==(e=e.childContextTypes)&&void 0!==e}function Ia(){Ea(Pa),Ea(Oa)}function Da(e,t,r){if(Oa.current!==_a)throw Error(o(168));Ca(Oa,t),Ca(Pa,r)}function Ra(e,t,r){var n=e.stateNode;if(t=t.childContextTypes,"function"!==typeof n.getChildContext)return r;for(var a in n=n.getChildContext())if(!(a in t))throw Error(o(108,W(e)||"Unknown",a));return M({},r,n)}function Na(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||_a,Aa=Oa.current,Ca(Oa,e),Ca(Pa,Pa.current),!0}function Ma(e,t,r){var n=e.stateNode;if(!n)throw Error(o(169));r?(e=Ra(e,t,Aa),n.__reactInternalMemoizedMergedChildContext=e,Ea(Pa),Ea(Oa),Ca(Oa,e)):Ea(Pa),Ca(Pa,r)}var La=null,Fa=!1,$a=!1;function Ba(e){null===La?La=[e]:La.push(e)}function qa(){if(!$a&&null!==La){$a=!0;var e=0,t=yt;try{var r=La;for(yt=1;e<r.length;e++){var n=r[e];do{n=n(!0)}while(null!==n)}La=null,Fa=!1}catch(a){throw null!==La&&(La=La.slice(e+1)),Ke(Ze,qa),a}finally{yt=t,$a=!1}}return null}var Wa=[],Ua=0,Va=null,Ha=0,Ka=[],Ga=0,Ya=null,Ja=1,Qa="";function Xa(e,t){Wa[Ua++]=Ha,Wa[Ua++]=Va,Va=e,Ha=t}function Za(e,t,r){Ka[Ga++]=Ja,Ka[Ga++]=Qa,Ka[Ga++]=Ya,Ya=e;var n=Ja;e=Qa;var a=32-it(n)-1;n&=~(1<<a),r+=1;var o=32-it(t)+a;if(30<o){var i=a-a%5;o=(n&(1<<i)-1).toString(32),n>>=i,a-=i,Ja=1<<32-it(t)+a|r<<a|n,Qa=o+e}else Ja=1<<o|r<<a|n,Qa=e}function eo(e){null!==e.return&&(Xa(e,1),Za(e,1,0))}function to(e){for(;e===Va;)Va=Wa[--Ua],Wa[Ua]=null,Ha=Wa[--Ua],Wa[Ua]=null;for(;e===Ya;)Ya=Ka[--Ga],Ka[Ga]=null,Qa=Ka[--Ga],Ka[Ga]=null,Ja=Ka[--Ga],Ka[Ga]=null}var ro=null,no=null,ao=!1,oo=null;function io(e,t){var r=Tc(5,null,null,0);r.elementType="DELETED",r.stateNode=t,r.return=e,null===(t=e.deletions)?(e.deletions=[r],e.flags|=16):t.push(r)}function so(e,t){switch(e.tag){case 5:var r=e.type;return null!==(t=1!==t.nodeType||r.toLowerCase()!==t.nodeName.toLowerCase()?null:t)&&(e.stateNode=t,ro=e,no=ca(t.firstChild),!0);case 6:return null!==(t=""===e.pendingProps||3!==t.nodeType?null:t)&&(e.stateNode=t,ro=e,no=null,!0);case 13:return null!==(t=8!==t.nodeType?null:t)&&(r=null!==Ya?{id:Ja,overflow:Qa}:null,e.memoizedState={dehydrated:t,treeContext:r,retryLane:1073741824},(r=Tc(18,null,null,0)).stateNode=t,r.return=e,e.child=r,ro=e,no=null,!0);default:return!1}}function lo(e){return 0!==(1&e.mode)&&0===(128&e.flags)}function co(e){if(ao){var t=no;if(t){var r=t;if(!so(e,t)){if(lo(e))throw Error(o(418));t=ca(r.nextSibling);var n=ro;t&&so(e,t)?io(n,r):(e.flags=-4097&e.flags|2,ao=!1,ro=e)}}else{if(lo(e))throw Error(o(418));e.flags=-4097&e.flags|2,ao=!1,ro=e}}}function uo(e){for(e=e.return;null!==e&&5!==e.tag&&3!==e.tag&&13!==e.tag;)e=e.return;ro=e}function po(e){if(e!==ro)return!1;if(!ao)return uo(e),ao=!0,!1;var t;if((t=3!==e.tag)&&!(t=5!==e.tag)&&(t="head"!==(t=e.type)&&"body"!==t&&!ra(e.type,e.memoizedProps)),t&&(t=no)){if(lo(e))throw fo(),Error(o(418));for(;t;)io(e,t),t=ca(t.nextSibling)}if(uo(e),13===e.tag){if(!(e=null!==(e=e.memoizedState)?e.dehydrated:null))throw Error(o(317));e:{for(e=e.nextSibling,t=0;e;){if(8===e.nodeType){var r=e.data;if("/$"===r){if(0===t){no=ca(e.nextSibling);break e}t--}else"$"!==r&&"$!"!==r&&"$?"!==r||t++}e=e.nextSibling}no=null}}else no=ro?ca(e.stateNode.nextSibling):null;return!0}function fo(){for(var e=no;e;)e=ca(e.nextSibling)}function ho(){no=ro=null,ao=!1}function mo(e){null===oo?oo=[e]:oo.push(e)}var go=x.ReactCurrentBatchConfig;function bo(e,t,r){if(null!==(e=r.ref)&&"function"!==typeof e&&"object"!==typeof e){if(r._owner){if(r=r._owner){if(1!==r.tag)throw Error(o(309));var n=r.stateNode}if(!n)throw Error(o(147,e));var a=n,i=""+e;return null!==t&&null!==t.ref&&"function"===typeof t.ref&&t.ref._stringRef===i?t.ref:(t=function(e){var t=a.refs;null===e?delete t[i]:t[i]=e},t._stringRef=i,t)}if("string"!==typeof e)throw Error(o(284));if(!r._owner)throw Error(o(290,e))}return e}function vo(e,t){throw e=Object.prototype.toString.call(t),Error(o(31,"[object Object]"===e?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function yo(e){return(0,e._init)(e._payload)}function xo(e){function t(t,r){if(e){var n=t.deletions;null===n?(t.deletions=[r],t.flags|=16):n.push(r)}}function r(r,n){if(!e)return null;for(;null!==n;)t(r,n),n=n.sibling;return null}function n(e,t){for(e=new Map;null!==t;)null!==t.key?e.set(t.key,t):e.set(t.index,t),t=t.sibling;return e}function a(e,t){return(e=Ic(e,t)).index=0,e.sibling=null,e}function i(t,r,n){return t.index=n,e?null!==(n=t.alternate)?(n=n.index)<r?(t.flags|=2,r):n:(t.flags|=2,r):(t.flags|=1048576,r)}function s(t){return e&&null===t.alternate&&(t.flags|=2),t}function l(e,t,r,n){return null===t||6!==t.tag?((t=Mc(r,e.mode,n)).return=e,t):((t=a(t,r)).return=e,t)}function c(e,t,r,n){var o=r.type;return o===S?d(e,t,r.props.children,n,r.key):null!==t&&(t.elementType===o||"object"===typeof o&&null!==o&&o.$$typeof===z&&yo(o)===t.type)?((n=a(t,r.props)).ref=bo(e,t,r),n.return=e,n):((n=Dc(r.type,r.key,r.props,null,e.mode,n)).ref=bo(e,t,r),n.return=e,n)}function u(e,t,r,n){return null===t||4!==t.tag||t.stateNode.containerInfo!==r.containerInfo||t.stateNode.implementation!==r.implementation?((t=Lc(r,e.mode,n)).return=e,t):((t=a(t,r.children||[])).return=e,t)}function d(e,t,r,n,o){return null===t||7!==t.tag?((t=Rc(r,e.mode,n,o)).return=e,t):((t=a(t,r)).return=e,t)}function p(e,t,r){if("string"===typeof t&&""!==t||"number"===typeof t)return(t=Mc(""+t,e.mode,r)).return=e,t;if("object"===typeof t&&null!==t){switch(t.$$typeof){case w:return(r=Dc(t.type,t.key,t.props,null,e.mode,r)).ref=bo(e,null,t),r.return=e,r;case k:return(t=Lc(t,e.mode,r)).return=e,t;case z:return p(e,(0,t._init)(t._payload),r)}if(te(t)||R(t))return(t=Rc(t,e.mode,r,null)).return=e,t;vo(e,t)}return null}function f(e,t,r,n){var a=null!==t?t.key:null;if("string"===typeof r&&""!==r||"number"===typeof r)return null!==a?null:l(e,t,""+r,n);if("object"===typeof r&&null!==r){switch(r.$$typeof){case w:return r.key===a?c(e,t,r,n):null;case k:return r.key===a?u(e,t,r,n):null;case z:return f(e,t,(a=r._init)(r._payload),n)}if(te(r)||R(r))return null!==a?null:d(e,t,r,n,null);vo(e,r)}return null}function h(e,t,r,n,a){if("string"===typeof n&&""!==n||"number"===typeof n)return l(t,e=e.get(r)||null,""+n,a);if("object"===typeof n&&null!==n){switch(n.$$typeof){case w:return c(t,e=e.get(null===n.key?r:n.key)||null,n,a);case k:return u(t,e=e.get(null===n.key?r:n.key)||null,n,a);case z:return h(e,t,r,(0,n._init)(n._payload),a)}if(te(n)||R(n))return d(t,e=e.get(r)||null,n,a,null);vo(t,n)}return null}function m(a,o,s,l){for(var c=null,u=null,d=o,m=o=0,g=null;null!==d&&m<s.length;m++){d.index>m?(g=d,d=null):g=d.sibling;var b=f(a,d,s[m],l);if(null===b){null===d&&(d=g);break}e&&d&&null===b.alternate&&t(a,d),o=i(b,o,m),null===u?c=b:u.sibling=b,u=b,d=g}if(m===s.length)return r(a,d),ao&&Xa(a,m),c;if(null===d){for(;m<s.length;m++)null!==(d=p(a,s[m],l))&&(o=i(d,o,m),null===u?c=d:u.sibling=d,u=d);return ao&&Xa(a,m),c}for(d=n(a,d);m<s.length;m++)null!==(g=h(d,a,m,s[m],l))&&(e&&null!==g.alternate&&d.delete(null===g.key?m:g.key),o=i(g,o,m),null===u?c=g:u.sibling=g,u=g);return e&&d.forEach((function(e){return t(a,e)})),ao&&Xa(a,m),c}function g(a,s,l,c){var u=R(l);if("function"!==typeof u)throw Error(o(150));if(null==(l=u.call(l)))throw Error(o(151));for(var d=u=null,m=s,g=s=0,b=null,v=l.next();null!==m&&!v.done;g++,v=l.next()){m.index>g?(b=m,m=null):b=m.sibling;var y=f(a,m,v.value,c);if(null===y){null===m&&(m=b);break}e&&m&&null===y.alternate&&t(a,m),s=i(y,s,g),null===d?u=y:d.sibling=y,d=y,m=b}if(v.done)return r(a,m),ao&&Xa(a,g),u;if(null===m){for(;!v.done;g++,v=l.next())null!==(v=p(a,v.value,c))&&(s=i(v,s,g),null===d?u=v:d.sibling=v,d=v);return ao&&Xa(a,g),u}for(m=n(a,m);!v.done;g++,v=l.next())null!==(v=h(m,a,g,v.value,c))&&(e&&null!==v.alternate&&m.delete(null===v.key?g:v.key),s=i(v,s,g),null===d?u=v:d.sibling=v,d=v);return e&&m.forEach((function(e){return t(a,e)})),ao&&Xa(a,g),u}return function e(n,o,i,l){if("object"===typeof i&&null!==i&&i.type===S&&null===i.key&&(i=i.props.children),"object"===typeof i&&null!==i){switch(i.$$typeof){case w:e:{for(var c=i.key,u=o;null!==u;){if(u.key===c){if((c=i.type)===S){if(7===u.tag){r(n,u.sibling),(o=a(u,i.props.children)).return=n,n=o;break e}}else if(u.elementType===c||"object"===typeof c&&null!==c&&c.$$typeof===z&&yo(c)===u.type){r(n,u.sibling),(o=a(u,i.props)).ref=bo(n,u,i),o.return=n,n=o;break e}r(n,u);break}t(n,u),u=u.sibling}i.type===S?((o=Rc(i.props.children,n.mode,l,i.key)).return=n,n=o):((l=Dc(i.type,i.key,i.props,null,n.mode,l)).ref=bo(n,o,i),l.return=n,n=l)}return s(n);case k:e:{for(u=i.key;null!==o;){if(o.key===u){if(4===o.tag&&o.stateNode.containerInfo===i.containerInfo&&o.stateNode.implementation===i.implementation){r(n,o.sibling),(o=a(o,i.children||[])).return=n,n=o;break e}r(n,o);break}t(n,o),o=o.sibling}(o=Lc(i,n.mode,l)).return=n,n=o}return s(n);case z:return e(n,o,(u=i._init)(i._payload),l)}if(te(i))return m(n,o,i,l);if(R(i))return g(n,o,i,l);vo(n,i)}return"string"===typeof i&&""!==i||"number"===typeof i?(i=""+i,null!==o&&6===o.tag?(r(n,o.sibling),(o=a(o,i)).return=n,n=o):(r(n,o),(o=Mc(i,n.mode,l)).return=n,n=o),s(n)):r(n,o)}}var wo=xo(!0),ko=xo(!1),So=ja(null),jo=null,Eo=null,Co=null;function _o(){Co=Eo=jo=null}function Oo(e){var t=So.current;Ea(So),e._currentValue=t}function Po(e,t,r){for(;null!==e;){var n=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,null!==n&&(n.childLanes|=t)):null!==n&&(n.childLanes&t)!==t&&(n.childLanes|=t),e===r)break;e=e.return}}function Ao(e,t){jo=e,Co=Eo=null,null!==(e=e.dependencies)&&null!==e.firstContext&&(0!==(e.lanes&t)&&(ys=!0),e.firstContext=null)}function To(e){var t=e._currentValue;if(Co!==e)if(e={context:e,memoizedValue:t,next:null},null===Eo){if(null===jo)throw Error(o(308));Eo=e,jo.dependencies={lanes:0,firstContext:e}}else Eo=Eo.next=e;return t}var zo=null;function Io(e){null===zo?zo=[e]:zo.push(e)}function Do(e,t,r,n){var a=t.interleaved;return null===a?(r.next=r,Io(t)):(r.next=a.next,a.next=r),t.interleaved=r,Ro(e,n)}function Ro(e,t){e.lanes|=t;var r=e.alternate;for(null!==r&&(r.lanes|=t),r=e,e=e.return;null!==e;)e.childLanes|=t,null!==(r=e.alternate)&&(r.childLanes|=t),r=e,e=e.return;return 3===r.tag?r.stateNode:null}var No=!1;function Mo(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Lo(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Fo(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function $o(e,t,r){var n=e.updateQueue;if(null===n)return null;if(n=n.shared,0!==(2&Ol)){var a=n.pending;return null===a?t.next=t:(t.next=a.next,a.next=t),n.pending=t,Ro(e,r)}return null===(a=n.interleaved)?(t.next=t,Io(n)):(t.next=a.next,a.next=t),n.interleaved=t,Ro(e,r)}function Bo(e,t,r){if(null!==(t=t.updateQueue)&&(t=t.shared,0!==(4194240&r))){var n=t.lanes;r|=n&=e.pendingLanes,t.lanes=r,vt(e,r)}}function qo(e,t){var r=e.updateQueue,n=e.alternate;if(null!==n&&r===(n=n.updateQueue)){var a=null,o=null;if(null!==(r=r.firstBaseUpdate)){do{var i={eventTime:r.eventTime,lane:r.lane,tag:r.tag,payload:r.payload,callback:r.callback,next:null};null===o?a=o=i:o=o.next=i,r=r.next}while(null!==r);null===o?a=o=t:o=o.next=t}else a=o=t;return r={baseState:n.baseState,firstBaseUpdate:a,lastBaseUpdate:o,shared:n.shared,effects:n.effects},void(e.updateQueue=r)}null===(e=r.lastBaseUpdate)?r.firstBaseUpdate=t:e.next=t,r.lastBaseUpdate=t}function Wo(e,t,r,n){var a=e.updateQueue;No=!1;var o=a.firstBaseUpdate,i=a.lastBaseUpdate,s=a.shared.pending;if(null!==s){a.shared.pending=null;var l=s,c=l.next;l.next=null,null===i?o=c:i.next=c,i=l;var u=e.alternate;null!==u&&((s=(u=u.updateQueue).lastBaseUpdate)!==i&&(null===s?u.firstBaseUpdate=c:s.next=c,u.lastBaseUpdate=l))}if(null!==o){var d=a.baseState;for(i=0,u=c=l=null,s=o;;){var p=s.lane,f=s.eventTime;if((n&p)===p){null!==u&&(u=u.next={eventTime:f,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var h=e,m=s;switch(p=t,f=r,m.tag){case 1:if("function"===typeof(h=m.payload)){d=h.call(f,d,p);break e}d=h;break e;case 3:h.flags=-65537&h.flags|128;case 0:if(null===(p="function"===typeof(h=m.payload)?h.call(f,d,p):h)||void 0===p)break e;d=M({},d,p);break e;case 2:No=!0}}null!==s.callback&&0!==s.lane&&(e.flags|=64,null===(p=a.effects)?a.effects=[s]:p.push(s))}else f={eventTime:f,lane:p,tag:s.tag,payload:s.payload,callback:s.callback,next:null},null===u?(c=u=f,l=d):u=u.next=f,i|=p;if(null===(s=s.next)){if(null===(s=a.shared.pending))break;s=(p=s).next,p.next=null,a.lastBaseUpdate=p,a.shared.pending=null}}if(null===u&&(l=d),a.baseState=l,a.firstBaseUpdate=c,a.lastBaseUpdate=u,null!==(t=a.shared.interleaved)){a=t;do{i|=a.lane,a=a.next}while(a!==t)}else null===o&&(a.shared.lanes=0);Nl|=i,e.lanes=i,e.memoizedState=d}}function Uo(e,t,r){if(e=t.effects,t.effects=null,null!==e)for(t=0;t<e.length;t++){var n=e[t],a=n.callback;if(null!==a){if(n.callback=null,n=r,"function"!==typeof a)throw Error(o(191,a));a.call(n)}}}var Vo={},Ho=ja(Vo),Ko=ja(Vo),Go=ja(Vo);function Yo(e){if(e===Vo)throw Error(o(174));return e}function Jo(e,t){switch(Ca(Go,t),Ca(Ko,e),Ca(Ho,Vo),e=t.nodeType){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:le(null,"");break;default:t=le(t=(e=8===e?t.parentNode:t).namespaceURI||null,e=e.tagName)}Ea(Ho),Ca(Ho,t)}function Qo(){Ea(Ho),Ea(Ko),Ea(Go)}function Xo(e){Yo(Go.current);var t=Yo(Ho.current),r=le(t,e.type);t!==r&&(Ca(Ko,e),Ca(Ho,r))}function Zo(e){Ko.current===e&&(Ea(Ho),Ea(Ko))}var ei=ja(0);function ti(e){for(var t=e;null!==t;){if(13===t.tag){var r=t.memoizedState;if(null!==r&&(null===(r=r.dehydrated)||"$?"===r.data||"$!"===r.data))return t}else if(19===t.tag&&void 0!==t.memoizedProps.revealOrder){if(0!==(128&t.flags))return t}else if(null!==t.child){t.child.return=t,t=t.child;continue}if(t===e)break;for(;null===t.sibling;){if(null===t.return||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ri=[];function ni(){for(var e=0;e<ri.length;e++)ri[e]._workInProgressVersionPrimary=null;ri.length=0}var ai=x.ReactCurrentDispatcher,oi=x.ReactCurrentBatchConfig,ii=0,si=null,li=null,ci=null,ui=!1,di=!1,pi=0,fi=0;function hi(){throw Error(o(321))}function mi(e,t){if(null===t)return!1;for(var r=0;r<t.length&&r<e.length;r++)if(!sn(e[r],t[r]))return!1;return!0}function gi(e,t,r,n,a,i){if(ii=i,si=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,ai.current=null===e||null===e.memoizedState?Zi:es,e=r(n,a),di){i=0;do{if(di=!1,pi=0,25<=i)throw Error(o(301));i+=1,ci=li=null,t.updateQueue=null,ai.current=ts,e=r(n,a)}while(di)}if(ai.current=Xi,t=null!==li&&null!==li.next,ii=0,ci=li=si=null,ui=!1,t)throw Error(o(300));return e}function bi(){var e=0!==pi;return pi=0,e}function vi(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return null===ci?si.memoizedState=ci=e:ci=ci.next=e,ci}function yi(){if(null===li){var e=si.alternate;e=null!==e?e.memoizedState:null}else e=li.next;var t=null===ci?si.memoizedState:ci.next;if(null!==t)ci=t,li=e;else{if(null===e)throw Error(o(310));e={memoizedState:(li=e).memoizedState,baseState:li.baseState,baseQueue:li.baseQueue,queue:li.queue,next:null},null===ci?si.memoizedState=ci=e:ci=ci.next=e}return ci}function xi(e,t){return"function"===typeof t?t(e):t}function wi(e){var t=yi(),r=t.queue;if(null===r)throw Error(o(311));r.lastRenderedReducer=e;var n=li,a=n.baseQueue,i=r.pending;if(null!==i){if(null!==a){var s=a.next;a.next=i.next,i.next=s}n.baseQueue=a=i,r.pending=null}if(null!==a){i=a.next,n=n.baseState;var l=s=null,c=null,u=i;do{var d=u.lane;if((ii&d)===d)null!==c&&(c=c.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),n=u.hasEagerState?u.eagerState:e(n,u.action);else{var p={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};null===c?(l=c=p,s=n):c=c.next=p,si.lanes|=d,Nl|=d}u=u.next}while(null!==u&&u!==i);null===c?s=n:c.next=l,sn(n,t.memoizedState)||(ys=!0),t.memoizedState=n,t.baseState=s,t.baseQueue=c,r.lastRenderedState=n}if(null!==(e=r.interleaved)){a=e;do{i=a.lane,si.lanes|=i,Nl|=i,a=a.next}while(a!==e)}else null===a&&(r.lanes=0);return[t.memoizedState,r.dispatch]}function ki(e){var t=yi(),r=t.queue;if(null===r)throw Error(o(311));r.lastRenderedReducer=e;var n=r.dispatch,a=r.pending,i=t.memoizedState;if(null!==a){r.pending=null;var s=a=a.next;do{i=e(i,s.action),s=s.next}while(s!==a);sn(i,t.memoizedState)||(ys=!0),t.memoizedState=i,null===t.baseQueue&&(t.baseState=i),r.lastRenderedState=i}return[i,n]}function Si(){}function ji(e,t){var r=si,n=yi(),a=t(),i=!sn(n.memoizedState,a);if(i&&(n.memoizedState=a,ys=!0),n=n.queue,Ni(_i.bind(null,r,n,e),[e]),n.getSnapshot!==t||i||null!==ci&&1&ci.memoizedState.tag){if(r.flags|=2048,Ti(9,Ci.bind(null,r,n,a,t),void 0,null),null===Pl)throw Error(o(349));0!==(30&ii)||Ei(r,t,a)}return a}function Ei(e,t,r){e.flags|=16384,e={getSnapshot:t,value:r},null===(t=si.updateQueue)?(t={lastEffect:null,stores:null},si.updateQueue=t,t.stores=[e]):null===(r=t.stores)?t.stores=[e]:r.push(e)}function Ci(e,t,r,n){t.value=r,t.getSnapshot=n,Oi(t)&&Pi(e)}function _i(e,t,r){return r((function(){Oi(t)&&Pi(e)}))}function Oi(e){var t=e.getSnapshot;e=e.value;try{var r=t();return!sn(e,r)}catch(n){return!0}}function Pi(e){var t=Ro(e,1);null!==t&&rc(t,e,1,-1)}function Ai(e){var t=vi();return"function"===typeof e&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:xi,lastRenderedState:e},t.queue=e,e=e.dispatch=Gi.bind(null,si,e),[t.memoizedState,e]}function Ti(e,t,r,n){return e={tag:e,create:t,destroy:r,deps:n,next:null},null===(t=si.updateQueue)?(t={lastEffect:null,stores:null},si.updateQueue=t,t.lastEffect=e.next=e):null===(r=t.lastEffect)?t.lastEffect=e.next=e:(n=r.next,r.next=e,e.next=n,t.lastEffect=e),e}function zi(){return yi().memoizedState}function Ii(e,t,r,n){var a=vi();si.flags|=e,a.memoizedState=Ti(1|t,r,void 0,void 0===n?null:n)}function Di(e,t,r,n){var a=yi();n=void 0===n?null:n;var o=void 0;if(null!==li){var i=li.memoizedState;if(o=i.destroy,null!==n&&mi(n,i.deps))return void(a.memoizedState=Ti(t,r,o,n))}si.flags|=e,a.memoizedState=Ti(1|t,r,o,n)}function Ri(e,t){return Ii(8390656,8,e,t)}function Ni(e,t){return Di(2048,8,e,t)}function Mi(e,t){return Di(4,2,e,t)}function Li(e,t){return Di(4,4,e,t)}function Fi(e,t){return"function"===typeof t?(e=e(),t(e),function(){t(null)}):null!==t&&void 0!==t?(e=e(),t.current=e,function(){t.current=null}):void 0}function $i(e,t,r){return r=null!==r&&void 0!==r?r.concat([e]):null,Di(4,4,Fi.bind(null,t,e),r)}function Bi(){}function qi(e,t){var r=yi();t=void 0===t?null:t;var n=r.memoizedState;return null!==n&&null!==t&&mi(t,n[1])?n[0]:(r.memoizedState=[e,t],e)}function Wi(e,t){var r=yi();t=void 0===t?null:t;var n=r.memoizedState;return null!==n&&null!==t&&mi(t,n[1])?n[0]:(e=e(),r.memoizedState=[e,t],e)}function Ui(e,t,r){return 0===(21&ii)?(e.baseState&&(e.baseState=!1,ys=!0),e.memoizedState=r):(sn(r,t)||(r=mt(),si.lanes|=r,Nl|=r,e.baseState=!0),t)}function Vi(e,t){var r=yt;yt=0!==r&&4>r?r:4,e(!0);var n=oi.transition;oi.transition={};try{e(!1),t()}finally{yt=r,oi.transition=n}}function Hi(){return yi().memoizedState}function Ki(e,t,r){var n=tc(e);if(r={lane:n,action:r,hasEagerState:!1,eagerState:null,next:null},Yi(e))Ji(t,r);else if(null!==(r=Do(e,t,r,n))){rc(r,e,n,ec()),Qi(r,t,n)}}function Gi(e,t,r){var n=tc(e),a={lane:n,action:r,hasEagerState:!1,eagerState:null,next:null};if(Yi(e))Ji(t,a);else{var o=e.alternate;if(0===e.lanes&&(null===o||0===o.lanes)&&null!==(o=t.lastRenderedReducer))try{var i=t.lastRenderedState,s=o(i,r);if(a.hasEagerState=!0,a.eagerState=s,sn(s,i)){var l=t.interleaved;return null===l?(a.next=a,Io(t)):(a.next=l.next,l.next=a),void(t.interleaved=a)}}catch(c){}null!==(r=Do(e,t,a,n))&&(rc(r,e,n,a=ec()),Qi(r,t,n))}}function Yi(e){var t=e.alternate;return e===si||null!==t&&t===si}function Ji(e,t){di=ui=!0;var r=e.pending;null===r?t.next=t:(t.next=r.next,r.next=t),e.pending=t}function Qi(e,t,r){if(0!==(4194240&r)){var n=t.lanes;r|=n&=e.pendingLanes,t.lanes=r,vt(e,r)}}var Xi={readContext:To,useCallback:hi,useContext:hi,useEffect:hi,useImperativeHandle:hi,useInsertionEffect:hi,useLayoutEffect:hi,useMemo:hi,useReducer:hi,useRef:hi,useState:hi,useDebugValue:hi,useDeferredValue:hi,useTransition:hi,useMutableSource:hi,useSyncExternalStore:hi,useId:hi,unstable_isNewReconciler:!1},Zi={readContext:To,useCallback:function(e,t){return vi().memoizedState=[e,void 0===t?null:t],e},useContext:To,useEffect:Ri,useImperativeHandle:function(e,t,r){return r=null!==r&&void 0!==r?r.concat([e]):null,Ii(4194308,4,Fi.bind(null,t,e),r)},useLayoutEffect:function(e,t){return Ii(4194308,4,e,t)},useInsertionEffect:function(e,t){return Ii(4,2,e,t)},useMemo:function(e,t){var r=vi();return t=void 0===t?null:t,e=e(),r.memoizedState=[e,t],e},useReducer:function(e,t,r){var n=vi();return t=void 0!==r?r(t):t,n.memoizedState=n.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},n.queue=e,e=e.dispatch=Ki.bind(null,si,e),[n.memoizedState,e]},useRef:function(e){return e={current:e},vi().memoizedState=e},useState:Ai,useDebugValue:Bi,useDeferredValue:function(e){return vi().memoizedState=e},useTransition:function(){var e=Ai(!1),t=e[0];return e=Vi.bind(null,e[1]),vi().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,r){var n=si,a=vi();if(ao){if(void 0===r)throw Error(o(407));r=r()}else{if(r=t(),null===Pl)throw Error(o(349));0!==(30&ii)||Ei(n,t,r)}a.memoizedState=r;var i={value:r,getSnapshot:t};return a.queue=i,Ri(_i.bind(null,n,i,e),[e]),n.flags|=2048,Ti(9,Ci.bind(null,n,i,r,t),void 0,null),r},useId:function(){var e=vi(),t=Pl.identifierPrefix;if(ao){var r=Qa;t=":"+t+"R"+(r=(Ja&~(1<<32-it(Ja)-1)).toString(32)+r),0<(r=pi++)&&(t+="H"+r.toString(32)),t+=":"}else t=":"+t+"r"+(r=fi++).toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},es={readContext:To,useCallback:qi,useContext:To,useEffect:Ni,useImperativeHandle:$i,useInsertionEffect:Mi,useLayoutEffect:Li,useMemo:Wi,useReducer:wi,useRef:zi,useState:function(){return wi(xi)},useDebugValue:Bi,useDeferredValue:function(e){return Ui(yi(),li.memoizedState,e)},useTransition:function(){return[wi(xi)[0],yi().memoizedState]},useMutableSource:Si,useSyncExternalStore:ji,useId:Hi,unstable_isNewReconciler:!1},ts={readContext:To,useCallback:qi,useContext:To,useEffect:Ni,useImperativeHandle:$i,useInsertionEffect:Mi,useLayoutEffect:Li,useMemo:Wi,useReducer:ki,useRef:zi,useState:function(){return ki(xi)},useDebugValue:Bi,useDeferredValue:function(e){var t=yi();return null===li?t.memoizedState=e:Ui(t,li.memoizedState,e)},useTransition:function(){return[ki(xi)[0],yi().memoizedState]},useMutableSource:Si,useSyncExternalStore:ji,useId:Hi,unstable_isNewReconciler:!1};function rs(e,t){if(e&&e.defaultProps){for(var r in t=M({},t),e=e.defaultProps)void 0===t[r]&&(t[r]=e[r]);return t}return t}function ns(e,t,r,n){r=null===(r=r(n,t=e.memoizedState))||void 0===r?t:M({},t,r),e.memoizedState=r,0===e.lanes&&(e.updateQueue.baseState=r)}var as={isMounted:function(e){return!!(e=e._reactInternals)&&qe(e)===e},enqueueSetState:function(e,t,r){e=e._reactInternals;var n=ec(),a=tc(e),o=Fo(n,a);o.payload=t,void 0!==r&&null!==r&&(o.callback=r),null!==(t=$o(e,o,a))&&(rc(t,e,a,n),Bo(t,e,a))},enqueueReplaceState:function(e,t,r){e=e._reactInternals;var n=ec(),a=tc(e),o=Fo(n,a);o.tag=1,o.payload=t,void 0!==r&&null!==r&&(o.callback=r),null!==(t=$o(e,o,a))&&(rc(t,e,a,n),Bo(t,e,a))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var r=ec(),n=tc(e),a=Fo(r,n);a.tag=2,void 0!==t&&null!==t&&(a.callback=t),null!==(t=$o(e,a,n))&&(rc(t,e,n,r),Bo(t,e,n))}};function os(e,t,r,n,a,o,i){return"function"===typeof(e=e.stateNode).shouldComponentUpdate?e.shouldComponentUpdate(n,o,i):!t.prototype||!t.prototype.isPureReactComponent||(!ln(r,n)||!ln(a,o))}function is(e,t,r){var n=!1,a=_a,o=t.contextType;return"object"===typeof o&&null!==o?o=To(o):(a=za(t)?Aa:Oa.current,o=(n=null!==(n=t.contextTypes)&&void 0!==n)?Ta(e,a):_a),t=new t(r,o),e.memoizedState=null!==t.state&&void 0!==t.state?t.state:null,t.updater=as,e.stateNode=t,t._reactInternals=e,n&&((e=e.stateNode).__reactInternalMemoizedUnmaskedChildContext=a,e.__reactInternalMemoizedMaskedChildContext=o),t}function ss(e,t,r,n){e=t.state,"function"===typeof t.componentWillReceiveProps&&t.componentWillReceiveProps(r,n),"function"===typeof t.UNSAFE_componentWillReceiveProps&&t.UNSAFE_componentWillReceiveProps(r,n),t.state!==e&&as.enqueueReplaceState(t,t.state,null)}function ls(e,t,r,n){var a=e.stateNode;a.props=r,a.state=e.memoizedState,a.refs={},Mo(e);var o=t.contextType;"object"===typeof o&&null!==o?a.context=To(o):(o=za(t)?Aa:Oa.current,a.context=Ta(e,o)),a.state=e.memoizedState,"function"===typeof(o=t.getDerivedStateFromProps)&&(ns(e,t,o,r),a.state=e.memoizedState),"function"===typeof t.getDerivedStateFromProps||"function"===typeof a.getSnapshotBeforeUpdate||"function"!==typeof a.UNSAFE_componentWillMount&&"function"!==typeof a.componentWillMount||(t=a.state,"function"===typeof a.componentWillMount&&a.componentWillMount(),"function"===typeof a.UNSAFE_componentWillMount&&a.UNSAFE_componentWillMount(),t!==a.state&&as.enqueueReplaceState(a,a.state,null),Wo(e,r,a,n),a.state=e.memoizedState),"function"===typeof a.componentDidMount&&(e.flags|=4194308)}function cs(e,t){try{var r="",n=t;do{r+=B(n),n=n.return}while(n);var a=r}catch(o){a="\nError generating stack: "+o.message+"\n"+o.stack}return{value:e,source:t,stack:a,digest:null}}function us(e,t,r){return{value:e,source:null,stack:null!=r?r:null,digest:null!=t?t:null}}function ds(e,t){try{console.error(t.value)}catch(r){setTimeout((function(){throw r}))}}var ps="function"===typeof WeakMap?WeakMap:Map;function fs(e,t,r){(r=Fo(-1,r)).tag=3,r.payload={element:null};var n=t.value;return r.callback=function(){Ul||(Ul=!0,Vl=n),ds(0,t)},r}function hs(e,t,r){(r=Fo(-1,r)).tag=3;var n=e.type.getDerivedStateFromError;if("function"===typeof n){var a=t.value;r.payload=function(){return n(a)},r.callback=function(){ds(0,t)}}var o=e.stateNode;return null!==o&&"function"===typeof o.componentDidCatch&&(r.callback=function(){ds(0,t),"function"!==typeof n&&(null===Hl?Hl=new Set([this]):Hl.add(this));var e=t.stack;this.componentDidCatch(t.value,{componentStack:null!==e?e:""})}),r}function ms(e,t,r){var n=e.pingCache;if(null===n){n=e.pingCache=new ps;var a=new Set;n.set(t,a)}else void 0===(a=n.get(t))&&(a=new Set,n.set(t,a));a.has(r)||(a.add(r),e=Ec.bind(null,e,t,r),t.then(e,e))}function gs(e){do{var t;if((t=13===e.tag)&&(t=null===(t=e.memoizedState)||null!==t.dehydrated),t)return e;e=e.return}while(null!==e);return null}function bs(e,t,r,n,a){return 0===(1&e.mode)?(e===t?e.flags|=65536:(e.flags|=128,r.flags|=131072,r.flags&=-52805,1===r.tag&&(null===r.alternate?r.tag=17:((t=Fo(-1,1)).tag=2,$o(r,t,1))),r.lanes|=1),e):(e.flags|=65536,e.lanes=a,e)}var vs=x.ReactCurrentOwner,ys=!1;function xs(e,t,r,n){t.child=null===e?ko(t,null,r,n):wo(t,e.child,r,n)}function ws(e,t,r,n,a){r=r.render;var o=t.ref;return Ao(t,a),n=gi(e,t,r,n,o,a),r=bi(),null===e||ys?(ao&&r&&eo(t),t.flags|=1,xs(e,t,n,a),t.child):(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a,Us(e,t,a))}function ks(e,t,r,n,a){if(null===e){var o=r.type;return"function"!==typeof o||zc(o)||void 0!==o.defaultProps||null!==r.compare||void 0!==r.defaultProps?((e=Dc(r.type,null,n,t,t.mode,a)).ref=t.ref,e.return=t,t.child=e):(t.tag=15,t.type=o,Ss(e,t,o,n,a))}if(o=e.child,0===(e.lanes&a)){var i=o.memoizedProps;if((r=null!==(r=r.compare)?r:ln)(i,n)&&e.ref===t.ref)return Us(e,t,a)}return t.flags|=1,(e=Ic(o,n)).ref=t.ref,e.return=t,t.child=e}function Ss(e,t,r,n,a){if(null!==e){var o=e.memoizedProps;if(ln(o,n)&&e.ref===t.ref){if(ys=!1,t.pendingProps=n=o,0===(e.lanes&a))return t.lanes=e.lanes,Us(e,t,a);0!==(131072&e.flags)&&(ys=!0)}}return Cs(e,t,r,n,a)}function js(e,t,r){var n=t.pendingProps,a=n.children,o=null!==e?e.memoizedState:null;if("hidden"===n.mode)if(0===(1&t.mode))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ca(Il,zl),zl|=r;else{if(0===(1073741824&r))return e=null!==o?o.baseLanes|r:r,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Ca(Il,zl),zl|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},n=null!==o?o.baseLanes:r,Ca(Il,zl),zl|=n}else null!==o?(n=o.baseLanes|r,t.memoizedState=null):n=r,Ca(Il,zl),zl|=n;return xs(e,t,a,r),t.child}function Es(e,t){var r=t.ref;(null===e&&null!==r||null!==e&&e.ref!==r)&&(t.flags|=512,t.flags|=2097152)}function Cs(e,t,r,n,a){var o=za(r)?Aa:Oa.current;return o=Ta(t,o),Ao(t,a),r=gi(e,t,r,n,o,a),n=bi(),null===e||ys?(ao&&n&&eo(t),t.flags|=1,xs(e,t,r,a),t.child):(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a,Us(e,t,a))}function _s(e,t,r,n,a){if(za(r)){var o=!0;Na(t)}else o=!1;if(Ao(t,a),null===t.stateNode)Ws(e,t),is(t,r,n),ls(t,r,n,a),n=!0;else if(null===e){var i=t.stateNode,s=t.memoizedProps;i.props=s;var l=i.context,c=r.contextType;"object"===typeof c&&null!==c?c=To(c):c=Ta(t,c=za(r)?Aa:Oa.current);var u=r.getDerivedStateFromProps,d="function"===typeof u||"function"===typeof i.getSnapshotBeforeUpdate;d||"function"!==typeof i.UNSAFE_componentWillReceiveProps&&"function"!==typeof i.componentWillReceiveProps||(s!==n||l!==c)&&ss(t,i,n,c),No=!1;var p=t.memoizedState;i.state=p,Wo(t,n,i,a),l=t.memoizedState,s!==n||p!==l||Pa.current||No?("function"===typeof u&&(ns(t,r,u,n),l=t.memoizedState),(s=No||os(t,r,s,n,p,l,c))?(d||"function"!==typeof i.UNSAFE_componentWillMount&&"function"!==typeof i.componentWillMount||("function"===typeof i.componentWillMount&&i.componentWillMount(),"function"===typeof i.UNSAFE_componentWillMount&&i.UNSAFE_componentWillMount()),"function"===typeof i.componentDidMount&&(t.flags|=4194308)):("function"===typeof i.componentDidMount&&(t.flags|=4194308),t.memoizedProps=n,t.memoizedState=l),i.props=n,i.state=l,i.context=c,n=s):("function"===typeof i.componentDidMount&&(t.flags|=4194308),n=!1)}else{i=t.stateNode,Lo(e,t),s=t.memoizedProps,c=t.type===t.elementType?s:rs(t.type,s),i.props=c,d=t.pendingProps,p=i.context,"object"===typeof(l=r.contextType)&&null!==l?l=To(l):l=Ta(t,l=za(r)?Aa:Oa.current);var f=r.getDerivedStateFromProps;(u="function"===typeof f||"function"===typeof i.getSnapshotBeforeUpdate)||"function"!==typeof i.UNSAFE_componentWillReceiveProps&&"function"!==typeof i.componentWillReceiveProps||(s!==d||p!==l)&&ss(t,i,n,l),No=!1,p=t.memoizedState,i.state=p,Wo(t,n,i,a);var h=t.memoizedState;s!==d||p!==h||Pa.current||No?("function"===typeof f&&(ns(t,r,f,n),h=t.memoizedState),(c=No||os(t,r,c,n,p,h,l)||!1)?(u||"function"!==typeof i.UNSAFE_componentWillUpdate&&"function"!==typeof i.componentWillUpdate||("function"===typeof i.componentWillUpdate&&i.componentWillUpdate(n,h,l),"function"===typeof i.UNSAFE_componentWillUpdate&&i.UNSAFE_componentWillUpdate(n,h,l)),"function"===typeof i.componentDidUpdate&&(t.flags|=4),"function"===typeof i.getSnapshotBeforeUpdate&&(t.flags|=1024)):("function"!==typeof i.componentDidUpdate||s===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),"function"!==typeof i.getSnapshotBeforeUpdate||s===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),t.memoizedProps=n,t.memoizedState=h),i.props=n,i.state=h,i.context=l,n=c):("function"!==typeof i.componentDidUpdate||s===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),"function"!==typeof i.getSnapshotBeforeUpdate||s===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),n=!1)}return Os(e,t,r,n,o,a)}function Os(e,t,r,n,a,o){Es(e,t);var i=0!==(128&t.flags);if(!n&&!i)return a&&Ma(t,r,!1),Us(e,t,o);n=t.stateNode,vs.current=t;var s=i&&"function"!==typeof r.getDerivedStateFromError?null:n.render();return t.flags|=1,null!==e&&i?(t.child=wo(t,e.child,null,o),t.child=wo(t,null,s,o)):xs(e,t,s,o),t.memoizedState=n.state,a&&Ma(t,r,!0),t.child}function Ps(e){var t=e.stateNode;t.pendingContext?Da(0,t.pendingContext,t.pendingContext!==t.context):t.context&&Da(0,t.context,!1),Jo(e,t.containerInfo)}function As(e,t,r,n,a){return ho(),mo(a),t.flags|=256,xs(e,t,r,n),t.child}var Ts,zs,Is,Ds,Rs={dehydrated:null,treeContext:null,retryLane:0};function Ns(e){return{baseLanes:e,cachePool:null,transitions:null}}function Ms(e,t,r){var n,a=t.pendingProps,i=ei.current,s=!1,l=0!==(128&t.flags);if((n=l)||(n=(null===e||null!==e.memoizedState)&&0!==(2&i)),n?(s=!0,t.flags&=-129):null!==e&&null===e.memoizedState||(i|=1),Ca(ei,1&i),null===e)return co(t),null!==(e=t.memoizedState)&&null!==(e=e.dehydrated)?(0===(1&t.mode)?t.lanes=1:"$!"===e.data?t.lanes=8:t.lanes=1073741824,null):(l=a.children,e=a.fallback,s?(a=t.mode,s=t.child,l={mode:"hidden",children:l},0===(1&a)&&null!==s?(s.childLanes=0,s.pendingProps=l):s=Nc(l,a,0,null),e=Rc(e,a,r,null),s.return=t,e.return=t,s.sibling=e,t.child=s,t.child.memoizedState=Ns(r),t.memoizedState=Rs,e):Ls(t,l));if(null!==(i=e.memoizedState)&&null!==(n=i.dehydrated))return function(e,t,r,n,a,i,s){if(r)return 256&t.flags?(t.flags&=-257,Fs(e,t,s,n=us(Error(o(422))))):null!==t.memoizedState?(t.child=e.child,t.flags|=128,null):(i=n.fallback,a=t.mode,n=Nc({mode:"visible",children:n.children},a,0,null),(i=Rc(i,a,s,null)).flags|=2,n.return=t,i.return=t,n.sibling=i,t.child=n,0!==(1&t.mode)&&wo(t,e.child,null,s),t.child.memoizedState=Ns(s),t.memoizedState=Rs,i);if(0===(1&t.mode))return Fs(e,t,s,null);if("$!"===a.data){if(n=a.nextSibling&&a.nextSibling.dataset)var l=n.dgst;return n=l,Fs(e,t,s,n=us(i=Error(o(419)),n,void 0))}if(l=0!==(s&e.childLanes),ys||l){if(null!==(n=Pl)){switch(s&-s){case 4:a=2;break;case 16:a=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:a=32;break;case 536870912:a=268435456;break;default:a=0}0!==(a=0!==(a&(n.suspendedLanes|s))?0:a)&&a!==i.retryLane&&(i.retryLane=a,Ro(e,a),rc(n,e,a,-1))}return mc(),Fs(e,t,s,n=us(Error(o(421))))}return"$?"===a.data?(t.flags|=128,t.child=e.child,t=_c.bind(null,e),a._reactRetry=t,null):(e=i.treeContext,no=ca(a.nextSibling),ro=t,ao=!0,oo=null,null!==e&&(Ka[Ga++]=Ja,Ka[Ga++]=Qa,Ka[Ga++]=Ya,Ja=e.id,Qa=e.overflow,Ya=t),t=Ls(t,n.children),t.flags|=4096,t)}(e,t,l,a,n,i,r);if(s){s=a.fallback,l=t.mode,n=(i=e.child).sibling;var c={mode:"hidden",children:a.children};return 0===(1&l)&&t.child!==i?((a=t.child).childLanes=0,a.pendingProps=c,t.deletions=null):(a=Ic(i,c)).subtreeFlags=14680064&i.subtreeFlags,null!==n?s=Ic(n,s):(s=Rc(s,l,r,null)).flags|=2,s.return=t,a.return=t,a.sibling=s,t.child=a,a=s,s=t.child,l=null===(l=e.child.memoizedState)?Ns(r):{baseLanes:l.baseLanes|r,cachePool:null,transitions:l.transitions},s.memoizedState=l,s.childLanes=e.childLanes&~r,t.memoizedState=Rs,a}return e=(s=e.child).sibling,a=Ic(s,{mode:"visible",children:a.children}),0===(1&t.mode)&&(a.lanes=r),a.return=t,a.sibling=null,null!==e&&(null===(r=t.deletions)?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=a,t.memoizedState=null,a}function Ls(e,t){return(t=Nc({mode:"visible",children:t},e.mode,0,null)).return=e,e.child=t}function Fs(e,t,r,n){return null!==n&&mo(n),wo(t,e.child,null,r),(e=Ls(t,t.pendingProps.children)).flags|=2,t.memoizedState=null,e}function $s(e,t,r){e.lanes|=t;var n=e.alternate;null!==n&&(n.lanes|=t),Po(e.return,t,r)}function Bs(e,t,r,n,a){var o=e.memoizedState;null===o?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:n,tail:r,tailMode:a}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=n,o.tail=r,o.tailMode=a)}function qs(e,t,r){var n=t.pendingProps,a=n.revealOrder,o=n.tail;if(xs(e,t,n.children,r),0!==(2&(n=ei.current)))n=1&n|2,t.flags|=128;else{if(null!==e&&0!==(128&e.flags))e:for(e=t.child;null!==e;){if(13===e.tag)null!==e.memoizedState&&$s(e,r,t);else if(19===e.tag)$s(e,r,t);else if(null!==e.child){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;null===e.sibling;){if(null===e.return||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}n&=1}if(Ca(ei,n),0===(1&t.mode))t.memoizedState=null;else switch(a){case"forwards":for(r=t.child,a=null;null!==r;)null!==(e=r.alternate)&&null===ti(e)&&(a=r),r=r.sibling;null===(r=a)?(a=t.child,t.child=null):(a=r.sibling,r.sibling=null),Bs(t,!1,a,r,o);break;case"backwards":for(r=null,a=t.child,t.child=null;null!==a;){if(null!==(e=a.alternate)&&null===ti(e)){t.child=a;break}e=a.sibling,a.sibling=r,r=a,a=e}Bs(t,!0,r,null,o);break;case"together":Bs(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Ws(e,t){0===(1&t.mode)&&null!==e&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Us(e,t,r){if(null!==e&&(t.dependencies=e.dependencies),Nl|=t.lanes,0===(r&t.childLanes))return null;if(null!==e&&t.child!==e.child)throw Error(o(153));if(null!==t.child){for(r=Ic(e=t.child,e.pendingProps),t.child=r,r.return=t;null!==e.sibling;)e=e.sibling,(r=r.sibling=Ic(e,e.pendingProps)).return=t;r.sibling=null}return t.child}function Vs(e,t){if(!ao)switch(e.tailMode){case"hidden":t=e.tail;for(var r=null;null!==t;)null!==t.alternate&&(r=t),t=t.sibling;null===r?e.tail=null:r.sibling=null;break;case"collapsed":r=e.tail;for(var n=null;null!==r;)null!==r.alternate&&(n=r),r=r.sibling;null===n?t||null===e.tail?e.tail=null:e.tail.sibling=null:n.sibling=null}}function Hs(e){var t=null!==e.alternate&&e.alternate.child===e.child,r=0,n=0;if(t)for(var a=e.child;null!==a;)r|=a.lanes|a.childLanes,n|=14680064&a.subtreeFlags,n|=14680064&a.flags,a.return=e,a=a.sibling;else for(a=e.child;null!==a;)r|=a.lanes|a.childLanes,n|=a.subtreeFlags,n|=a.flags,a.return=e,a=a.sibling;return e.subtreeFlags|=n,e.childLanes=r,t}function Ks(e,t,r){var n=t.pendingProps;switch(to(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Hs(t),null;case 1:case 17:return za(t.type)&&Ia(),Hs(t),null;case 3:return n=t.stateNode,Qo(),Ea(Pa),Ea(Oa),ni(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),null!==e&&null!==e.child||(po(t)?t.flags|=4:null===e||e.memoizedState.isDehydrated&&0===(256&t.flags)||(t.flags|=1024,null!==oo&&(ic(oo),oo=null))),zs(e,t),Hs(t),null;case 5:Zo(t);var a=Yo(Go.current);if(r=t.type,null!==e&&null!=t.stateNode)Is(e,t,r,n,a),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!n){if(null===t.stateNode)throw Error(o(166));return Hs(t),null}if(e=Yo(Ho.current),po(t)){n=t.stateNode,r=t.type;var i=t.memoizedProps;switch(n[pa]=t,n[fa]=i,e=0!==(1&t.mode),r){case"dialog":Fn("cancel",n),Fn("close",n);break;case"iframe":case"object":case"embed":Fn("load",n);break;case"video":case"audio":for(a=0;a<Rn.length;a++)Fn(Rn[a],n);break;case"source":Fn("error",n);break;case"img":case"image":case"link":Fn("error",n),Fn("load",n);break;case"details":Fn("toggle",n);break;case"input":J(n,i),Fn("invalid",n);break;case"select":n._wrapperState={wasMultiple:!!i.multiple},Fn("invalid",n);break;case"textarea":ae(n,i),Fn("invalid",n)}for(var l in ve(r,i),a=null,i)if(i.hasOwnProperty(l)){var c=i[l];"children"===l?"string"===typeof c?n.textContent!==c&&(!0!==i.suppressHydrationWarning&&Xn(n.textContent,c,e),a=["children",c]):"number"===typeof c&&n.textContent!==""+c&&(!0!==i.suppressHydrationWarning&&Xn(n.textContent,c,e),a=["children",""+c]):s.hasOwnProperty(l)&&null!=c&&"onScroll"===l&&Fn("scroll",n)}switch(r){case"input":H(n),Z(n,i,!0);break;case"textarea":H(n),ie(n);break;case"select":case"option":break;default:"function"===typeof i.onClick&&(n.onclick=Zn)}n=a,t.updateQueue=n,null!==n&&(t.flags|=4)}else{l=9===a.nodeType?a:a.ownerDocument,"http://www.w3.org/1999/xhtml"===e&&(e=se(r)),"http://www.w3.org/1999/xhtml"===e?"script"===r?((e=l.createElement("div")).innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):"string"===typeof n.is?e=l.createElement(r,{is:n.is}):(e=l.createElement(r),"select"===r&&(l=e,n.multiple?l.multiple=!0:n.size&&(l.size=n.size))):e=l.createElementNS(e,r),e[pa]=t,e[fa]=n,Ts(e,t,!1,!1),t.stateNode=e;e:{switch(l=ye(r,n),r){case"dialog":Fn("cancel",e),Fn("close",e),a=n;break;case"iframe":case"object":case"embed":Fn("load",e),a=n;break;case"video":case"audio":for(a=0;a<Rn.length;a++)Fn(Rn[a],e);a=n;break;case"source":Fn("error",e),a=n;break;case"img":case"image":case"link":Fn("error",e),Fn("load",e),a=n;break;case"details":Fn("toggle",e),a=n;break;case"input":J(e,n),a=Y(e,n),Fn("invalid",e);break;case"option":default:a=n;break;case"select":e._wrapperState={wasMultiple:!!n.multiple},a=M({},n,{value:void 0}),Fn("invalid",e);break;case"textarea":ae(e,n),a=ne(e,n),Fn("invalid",e)}for(i in ve(r,a),c=a)if(c.hasOwnProperty(i)){var u=c[i];"style"===i?ge(e,u):"dangerouslySetInnerHTML"===i?null!=(u=u?u.__html:void 0)&&de(e,u):"children"===i?"string"===typeof u?("textarea"!==r||""!==u)&&pe(e,u):"number"===typeof u&&pe(e,""+u):"suppressContentEditableWarning"!==i&&"suppressHydrationWarning"!==i&&"autoFocus"!==i&&(s.hasOwnProperty(i)?null!=u&&"onScroll"===i&&Fn("scroll",e):null!=u&&y(e,i,u,l))}switch(r){case"input":H(e),Z(e,n,!1);break;case"textarea":H(e),ie(e);break;case"option":null!=n.value&&e.setAttribute("value",""+U(n.value));break;case"select":e.multiple=!!n.multiple,null!=(i=n.value)?re(e,!!n.multiple,i,!1):null!=n.defaultValue&&re(e,!!n.multiple,n.defaultValue,!0);break;default:"function"===typeof a.onClick&&(e.onclick=Zn)}switch(r){case"button":case"input":case"select":case"textarea":n=!!n.autoFocus;break e;case"img":n=!0;break e;default:n=!1}}n&&(t.flags|=4)}null!==t.ref&&(t.flags|=512,t.flags|=2097152)}return Hs(t),null;case 6:if(e&&null!=t.stateNode)Ds(e,t,e.memoizedProps,n);else{if("string"!==typeof n&&null===t.stateNode)throw Error(o(166));if(r=Yo(Go.current),Yo(Ho.current),po(t)){if(n=t.stateNode,r=t.memoizedProps,n[pa]=t,(i=n.nodeValue!==r)&&null!==(e=ro))switch(e.tag){case 3:Xn(n.nodeValue,r,0!==(1&e.mode));break;case 5:!0!==e.memoizedProps.suppressHydrationWarning&&Xn(n.nodeValue,r,0!==(1&e.mode))}i&&(t.flags|=4)}else(n=(9===r.nodeType?r:r.ownerDocument).createTextNode(n))[pa]=t,t.stateNode=n}return Hs(t),null;case 13:if(Ea(ei),n=t.memoizedState,null===e||null!==e.memoizedState&&null!==e.memoizedState.dehydrated){if(ao&&null!==no&&0!==(1&t.mode)&&0===(128&t.flags))fo(),ho(),t.flags|=98560,i=!1;else if(i=po(t),null!==n&&null!==n.dehydrated){if(null===e){if(!i)throw Error(o(318));if(!(i=null!==(i=t.memoizedState)?i.dehydrated:null))throw Error(o(317));i[pa]=t}else ho(),0===(128&t.flags)&&(t.memoizedState=null),t.flags|=4;Hs(t),i=!1}else null!==oo&&(ic(oo),oo=null),i=!0;if(!i)return 65536&t.flags?t:null}return 0!==(128&t.flags)?(t.lanes=r,t):((n=null!==n)!==(null!==e&&null!==e.memoizedState)&&n&&(t.child.flags|=8192,0!==(1&t.mode)&&(null===e||0!==(1&ei.current)?0===Dl&&(Dl=3):mc())),null!==t.updateQueue&&(t.flags|=4),Hs(t),null);case 4:return Qo(),zs(e,t),null===e&&qn(t.stateNode.containerInfo),Hs(t),null;case 10:return Oo(t.type._context),Hs(t),null;case 19:if(Ea(ei),null===(i=t.memoizedState))return Hs(t),null;if(n=0!==(128&t.flags),null===(l=i.rendering))if(n)Vs(i,!1);else{if(0!==Dl||null!==e&&0!==(128&e.flags))for(e=t.child;null!==e;){if(null!==(l=ti(e))){for(t.flags|=128,Vs(i,!1),null!==(n=l.updateQueue)&&(t.updateQueue=n,t.flags|=4),t.subtreeFlags=0,n=r,r=t.child;null!==r;)e=n,(i=r).flags&=14680066,null===(l=i.alternate)?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=l.childLanes,i.lanes=l.lanes,i.child=l.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=l.memoizedProps,i.memoizedState=l.memoizedState,i.updateQueue=l.updateQueue,i.type=l.type,e=l.dependencies,i.dependencies=null===e?null:{lanes:e.lanes,firstContext:e.firstContext}),r=r.sibling;return Ca(ei,1&ei.current|2),t.child}e=e.sibling}null!==i.tail&&Qe()>ql&&(t.flags|=128,n=!0,Vs(i,!1),t.lanes=4194304)}else{if(!n)if(null!==(e=ti(l))){if(t.flags|=128,n=!0,null!==(r=e.updateQueue)&&(t.updateQueue=r,t.flags|=4),Vs(i,!0),null===i.tail&&"hidden"===i.tailMode&&!l.alternate&&!ao)return Hs(t),null}else 2*Qe()-i.renderingStartTime>ql&&1073741824!==r&&(t.flags|=128,n=!0,Vs(i,!1),t.lanes=4194304);i.isBackwards?(l.sibling=t.child,t.child=l):(null!==(r=i.last)?r.sibling=l:t.child=l,i.last=l)}return null!==i.tail?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=Qe(),t.sibling=null,r=ei.current,Ca(ei,n?1&r|2:1&r),t):(Hs(t),null);case 22:case 23:return dc(),n=null!==t.memoizedState,null!==e&&null!==e.memoizedState!==n&&(t.flags|=8192),n&&0!==(1&t.mode)?0!==(1073741824&zl)&&(Hs(t),6&t.subtreeFlags&&(t.flags|=8192)):Hs(t),null;case 24:case 25:return null}throw Error(o(156,t.tag))}function Gs(e,t){switch(to(t),t.tag){case 1:return za(t.type)&&Ia(),65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 3:return Qo(),Ea(Pa),Ea(Oa),ni(),0!==(65536&(e=t.flags))&&0===(128&e)?(t.flags=-65537&e|128,t):null;case 5:return Zo(t),null;case 13:if(Ea(ei),null!==(e=t.memoizedState)&&null!==e.dehydrated){if(null===t.alternate)throw Error(o(340));ho()}return 65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 19:return Ea(ei),null;case 4:return Qo(),null;case 10:return Oo(t.type._context),null;case 22:case 23:return dc(),null;default:return null}}Ts=function(e,t){for(var r=t.child;null!==r;){if(5===r.tag||6===r.tag)e.appendChild(r.stateNode);else if(4!==r.tag&&null!==r.child){r.child.return=r,r=r.child;continue}if(r===t)break;for(;null===r.sibling;){if(null===r.return||r.return===t)return;r=r.return}r.sibling.return=r.return,r=r.sibling}},zs=function(){},Is=function(e,t,r,n){var a=e.memoizedProps;if(a!==n){e=t.stateNode,Yo(Ho.current);var o,i=null;switch(r){case"input":a=Y(e,a),n=Y(e,n),i=[];break;case"select":a=M({},a,{value:void 0}),n=M({},n,{value:void 0}),i=[];break;case"textarea":a=ne(e,a),n=ne(e,n),i=[];break;default:"function"!==typeof a.onClick&&"function"===typeof n.onClick&&(e.onclick=Zn)}for(u in ve(r,n),r=null,a)if(!n.hasOwnProperty(u)&&a.hasOwnProperty(u)&&null!=a[u])if("style"===u){var l=a[u];for(o in l)l.hasOwnProperty(o)&&(r||(r={}),r[o]="")}else"dangerouslySetInnerHTML"!==u&&"children"!==u&&"suppressContentEditableWarning"!==u&&"suppressHydrationWarning"!==u&&"autoFocus"!==u&&(s.hasOwnProperty(u)?i||(i=[]):(i=i||[]).push(u,null));for(u in n){var c=n[u];if(l=null!=a?a[u]:void 0,n.hasOwnProperty(u)&&c!==l&&(null!=c||null!=l))if("style"===u)if(l){for(o in l)!l.hasOwnProperty(o)||c&&c.hasOwnProperty(o)||(r||(r={}),r[o]="");for(o in c)c.hasOwnProperty(o)&&l[o]!==c[o]&&(r||(r={}),r[o]=c[o])}else r||(i||(i=[]),i.push(u,r)),r=c;else"dangerouslySetInnerHTML"===u?(c=c?c.__html:void 0,l=l?l.__html:void 0,null!=c&&l!==c&&(i=i||[]).push(u,c)):"children"===u?"string"!==typeof c&&"number"!==typeof c||(i=i||[]).push(u,""+c):"suppressContentEditableWarning"!==u&&"suppressHydrationWarning"!==u&&(s.hasOwnProperty(u)?(null!=c&&"onScroll"===u&&Fn("scroll",e),i||l===c||(i=[])):(i=i||[]).push(u,c))}r&&(i=i||[]).push("style",r);var u=i;(t.updateQueue=u)&&(t.flags|=4)}},Ds=function(e,t,r,n){r!==n&&(t.flags|=4)};var Ys=!1,Js=!1,Qs="function"===typeof WeakSet?WeakSet:Set,Xs=null;function Zs(e,t){var r=e.ref;if(null!==r)if("function"===typeof r)try{r(null)}catch(n){jc(e,t,n)}else r.current=null}function el(e,t,r){try{r()}catch(n){jc(e,t,n)}}var tl=!1;function rl(e,t,r){var n=t.updateQueue;if(null!==(n=null!==n?n.lastEffect:null)){var a=n=n.next;do{if((a.tag&e)===e){var o=a.destroy;a.destroy=void 0,void 0!==o&&el(t,r,o)}a=a.next}while(a!==n)}}function nl(e,t){if(null!==(t=null!==(t=t.updateQueue)?t.lastEffect:null)){var r=t=t.next;do{if((r.tag&e)===e){var n=r.create;r.destroy=n()}r=r.next}while(r!==t)}}function al(e){var t=e.ref;if(null!==t){var r=e.stateNode;e.tag,e=r,"function"===typeof t?t(e):t.current=e}}function ol(e){var t=e.alternate;null!==t&&(e.alternate=null,ol(t)),e.child=null,e.deletions=null,e.sibling=null,5===e.tag&&(null!==(t=e.stateNode)&&(delete t[pa],delete t[fa],delete t[ma],delete t[ga],delete t[ba])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function il(e){return 5===e.tag||3===e.tag||4===e.tag}function sl(e){e:for(;;){for(;null===e.sibling;){if(null===e.return||il(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;5!==e.tag&&6!==e.tag&&18!==e.tag;){if(2&e.flags)continue e;if(null===e.child||4===e.tag)continue e;e.child.return=e,e=e.child}if(!(2&e.flags))return e.stateNode}}function ll(e,t,r){var n=e.tag;if(5===n||6===n)e=e.stateNode,t?8===r.nodeType?r.parentNode.insertBefore(e,t):r.insertBefore(e,t):(8===r.nodeType?(t=r.parentNode).insertBefore(e,r):(t=r).appendChild(e),null!==(r=r._reactRootContainer)&&void 0!==r||null!==t.onclick||(t.onclick=Zn));else if(4!==n&&null!==(e=e.child))for(ll(e,t,r),e=e.sibling;null!==e;)ll(e,t,r),e=e.sibling}function cl(e,t,r){var n=e.tag;if(5===n||6===n)e=e.stateNode,t?r.insertBefore(e,t):r.appendChild(e);else if(4!==n&&null!==(e=e.child))for(cl(e,t,r),e=e.sibling;null!==e;)cl(e,t,r),e=e.sibling}var ul=null,dl=!1;function pl(e,t,r){for(r=r.child;null!==r;)fl(e,t,r),r=r.sibling}function fl(e,t,r){if(ot&&"function"===typeof ot.onCommitFiberUnmount)try{ot.onCommitFiberUnmount(at,r)}catch(s){}switch(r.tag){case 5:Js||Zs(r,t);case 6:var n=ul,a=dl;ul=null,pl(e,t,r),dl=a,null!==(ul=n)&&(dl?(e=ul,r=r.stateNode,8===e.nodeType?e.parentNode.removeChild(r):e.removeChild(r)):ul.removeChild(r.stateNode));break;case 18:null!==ul&&(dl?(e=ul,r=r.stateNode,8===e.nodeType?la(e.parentNode,r):1===e.nodeType&&la(e,r),qt(e)):la(ul,r.stateNode));break;case 4:n=ul,a=dl,ul=r.stateNode.containerInfo,dl=!0,pl(e,t,r),ul=n,dl=a;break;case 0:case 11:case 14:case 15:if(!Js&&(null!==(n=r.updateQueue)&&null!==(n=n.lastEffect))){a=n=n.next;do{var o=a,i=o.destroy;o=o.tag,void 0!==i&&(0!==(2&o)||0!==(4&o))&&el(r,t,i),a=a.next}while(a!==n)}pl(e,t,r);break;case 1:if(!Js&&(Zs(r,t),"function"===typeof(n=r.stateNode).componentWillUnmount))try{n.props=r.memoizedProps,n.state=r.memoizedState,n.componentWillUnmount()}catch(s){jc(r,t,s)}pl(e,t,r);break;case 21:pl(e,t,r);break;case 22:1&r.mode?(Js=(n=Js)||null!==r.memoizedState,pl(e,t,r),Js=n):pl(e,t,r);break;default:pl(e,t,r)}}function hl(e){var t=e.updateQueue;if(null!==t){e.updateQueue=null;var r=e.stateNode;null===r&&(r=e.stateNode=new Qs),t.forEach((function(t){var n=Oc.bind(null,e,t);r.has(t)||(r.add(t),t.then(n,n))}))}}function ml(e,t){var r=t.deletions;if(null!==r)for(var n=0;n<r.length;n++){var a=r[n];try{var i=e,s=t,l=s;e:for(;null!==l;){switch(l.tag){case 5:ul=l.stateNode,dl=!1;break e;case 3:case 4:ul=l.stateNode.containerInfo,dl=!0;break e}l=l.return}if(null===ul)throw Error(o(160));fl(i,s,a),ul=null,dl=!1;var c=a.alternate;null!==c&&(c.return=null),a.return=null}catch(u){jc(a,t,u)}}if(12854&t.subtreeFlags)for(t=t.child;null!==t;)gl(t,e),t=t.sibling}function gl(e,t){var r=e.alternate,n=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(ml(t,e),bl(e),4&n){try{rl(3,e,e.return),nl(3,e)}catch(g){jc(e,e.return,g)}try{rl(5,e,e.return)}catch(g){jc(e,e.return,g)}}break;case 1:ml(t,e),bl(e),512&n&&null!==r&&Zs(r,r.return);break;case 5:if(ml(t,e),bl(e),512&n&&null!==r&&Zs(r,r.return),32&e.flags){var a=e.stateNode;try{pe(a,"")}catch(g){jc(e,e.return,g)}}if(4&n&&null!=(a=e.stateNode)){var i=e.memoizedProps,s=null!==r?r.memoizedProps:i,l=e.type,c=e.updateQueue;if(e.updateQueue=null,null!==c)try{"input"===l&&"radio"===i.type&&null!=i.name&&Q(a,i),ye(l,s);var u=ye(l,i);for(s=0;s<c.length;s+=2){var d=c[s],p=c[s+1];"style"===d?ge(a,p):"dangerouslySetInnerHTML"===d?de(a,p):"children"===d?pe(a,p):y(a,d,p,u)}switch(l){case"input":X(a,i);break;case"textarea":oe(a,i);break;case"select":var f=a._wrapperState.wasMultiple;a._wrapperState.wasMultiple=!!i.multiple;var h=i.value;null!=h?re(a,!!i.multiple,h,!1):f!==!!i.multiple&&(null!=i.defaultValue?re(a,!!i.multiple,i.defaultValue,!0):re(a,!!i.multiple,i.multiple?[]:"",!1))}a[fa]=i}catch(g){jc(e,e.return,g)}}break;case 6:if(ml(t,e),bl(e),4&n){if(null===e.stateNode)throw Error(o(162));a=e.stateNode,i=e.memoizedProps;try{a.nodeValue=i}catch(g){jc(e,e.return,g)}}break;case 3:if(ml(t,e),bl(e),4&n&&null!==r&&r.memoizedState.isDehydrated)try{qt(t.containerInfo)}catch(g){jc(e,e.return,g)}break;case 4:default:ml(t,e),bl(e);break;case 13:ml(t,e),bl(e),8192&(a=e.child).flags&&(i=null!==a.memoizedState,a.stateNode.isHidden=i,!i||null!==a.alternate&&null!==a.alternate.memoizedState||(Bl=Qe())),4&n&&hl(e);break;case 22:if(d=null!==r&&null!==r.memoizedState,1&e.mode?(Js=(u=Js)||d,ml(t,e),Js=u):ml(t,e),bl(e),8192&n){if(u=null!==e.memoizedState,(e.stateNode.isHidden=u)&&!d&&0!==(1&e.mode))for(Xs=e,d=e.child;null!==d;){for(p=Xs=d;null!==Xs;){switch(h=(f=Xs).child,f.tag){case 0:case 11:case 14:case 15:rl(4,f,f.return);break;case 1:Zs(f,f.return);var m=f.stateNode;if("function"===typeof m.componentWillUnmount){n=f,r=f.return;try{t=n,m.props=t.memoizedProps,m.state=t.memoizedState,m.componentWillUnmount()}catch(g){jc(n,r,g)}}break;case 5:Zs(f,f.return);break;case 22:if(null!==f.memoizedState){wl(p);continue}}null!==h?(h.return=f,Xs=h):wl(p)}d=d.sibling}e:for(d=null,p=e;;){if(5===p.tag){if(null===d){d=p;try{a=p.stateNode,u?"function"===typeof(i=a.style).setProperty?i.setProperty("display","none","important"):i.display="none":(l=p.stateNode,s=void 0!==(c=p.memoizedProps.style)&&null!==c&&c.hasOwnProperty("display")?c.display:null,l.style.display=me("display",s))}catch(g){jc(e,e.return,g)}}}else if(6===p.tag){if(null===d)try{p.stateNode.nodeValue=u?"":p.memoizedProps}catch(g){jc(e,e.return,g)}}else if((22!==p.tag&&23!==p.tag||null===p.memoizedState||p===e)&&null!==p.child){p.child.return=p,p=p.child;continue}if(p===e)break e;for(;null===p.sibling;){if(null===p.return||p.return===e)break e;d===p&&(d=null),p=p.return}d===p&&(d=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:ml(t,e),bl(e),4&n&&hl(e);case 21:}}function bl(e){var t=e.flags;if(2&t){try{e:{for(var r=e.return;null!==r;){if(il(r)){var n=r;break e}r=r.return}throw Error(o(160))}switch(n.tag){case 5:var a=n.stateNode;32&n.flags&&(pe(a,""),n.flags&=-33),cl(e,sl(e),a);break;case 3:case 4:var i=n.stateNode.containerInfo;ll(e,sl(e),i);break;default:throw Error(o(161))}}catch(s){jc(e,e.return,s)}e.flags&=-3}4096&t&&(e.flags&=-4097)}function vl(e,t,r){Xs=e,yl(e,t,r)}function yl(e,t,r){for(var n=0!==(1&e.mode);null!==Xs;){var a=Xs,o=a.child;if(22===a.tag&&n){var i=null!==a.memoizedState||Ys;if(!i){var s=a.alternate,l=null!==s&&null!==s.memoizedState||Js;s=Ys;var c=Js;if(Ys=i,(Js=l)&&!c)for(Xs=a;null!==Xs;)l=(i=Xs).child,22===i.tag&&null!==i.memoizedState?kl(a):null!==l?(l.return=i,Xs=l):kl(a);for(;null!==o;)Xs=o,yl(o,t,r),o=o.sibling;Xs=a,Ys=s,Js=c}xl(e)}else 0!==(8772&a.subtreeFlags)&&null!==o?(o.return=a,Xs=o):xl(e)}}function xl(e){for(;null!==Xs;){var t=Xs;if(0!==(8772&t.flags)){var r=t.alternate;try{if(0!==(8772&t.flags))switch(t.tag){case 0:case 11:case 15:Js||nl(5,t);break;case 1:var n=t.stateNode;if(4&t.flags&&!Js)if(null===r)n.componentDidMount();else{var a=t.elementType===t.type?r.memoizedProps:rs(t.type,r.memoizedProps);n.componentDidUpdate(a,r.memoizedState,n.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;null!==i&&Uo(t,i,n);break;case 3:var s=t.updateQueue;if(null!==s){if(r=null,null!==t.child)switch(t.child.tag){case 5:case 1:r=t.child.stateNode}Uo(t,s,r)}break;case 5:var l=t.stateNode;if(null===r&&4&t.flags){r=l;var c=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&r.focus();break;case"img":c.src&&(r.src=c.src)}}break;case 6:case 4:case 12:case 19:case 17:case 21:case 22:case 23:case 25:break;case 13:if(null===t.memoizedState){var u=t.alternate;if(null!==u){var d=u.memoizedState;if(null!==d){var p=d.dehydrated;null!==p&&qt(p)}}}break;default:throw Error(o(163))}Js||512&t.flags&&al(t)}catch(f){jc(t,t.return,f)}}if(t===e){Xs=null;break}if(null!==(r=t.sibling)){r.return=t.return,Xs=r;break}Xs=t.return}}function wl(e){for(;null!==Xs;){var t=Xs;if(t===e){Xs=null;break}var r=t.sibling;if(null!==r){r.return=t.return,Xs=r;break}Xs=t.return}}function kl(e){for(;null!==Xs;){var t=Xs;try{switch(t.tag){case 0:case 11:case 15:var r=t.return;try{nl(4,t)}catch(l){jc(t,r,l)}break;case 1:var n=t.stateNode;if("function"===typeof n.componentDidMount){var a=t.return;try{n.componentDidMount()}catch(l){jc(t,a,l)}}var o=t.return;try{al(t)}catch(l){jc(t,o,l)}break;case 5:var i=t.return;try{al(t)}catch(l){jc(t,i,l)}}}catch(l){jc(t,t.return,l)}if(t===e){Xs=null;break}var s=t.sibling;if(null!==s){s.return=t.return,Xs=s;break}Xs=t.return}}var Sl,jl=Math.ceil,El=x.ReactCurrentDispatcher,Cl=x.ReactCurrentOwner,_l=x.ReactCurrentBatchConfig,Ol=0,Pl=null,Al=null,Tl=0,zl=0,Il=ja(0),Dl=0,Rl=null,Nl=0,Ml=0,Ll=0,Fl=null,$l=null,Bl=0,ql=1/0,Wl=null,Ul=!1,Vl=null,Hl=null,Kl=!1,Gl=null,Yl=0,Jl=0,Ql=null,Xl=-1,Zl=0;function ec(){return 0!==(6&Ol)?Qe():-1!==Xl?Xl:Xl=Qe()}function tc(e){return 0===(1&e.mode)?1:0!==(2&Ol)&&0!==Tl?Tl&-Tl:null!==go.transition?(0===Zl&&(Zl=mt()),Zl):0!==(e=yt)?e:e=void 0===(e=window.event)?16:Jt(e.type)}function rc(e,t,r,n){if(50<Jl)throw Jl=0,Ql=null,Error(o(185));bt(e,r,n),0!==(2&Ol)&&e===Pl||(e===Pl&&(0===(2&Ol)&&(Ml|=r),4===Dl&&sc(e,Tl)),nc(e,n),1===r&&0===Ol&&0===(1&t.mode)&&(ql=Qe()+500,Fa&&qa()))}function nc(e,t){var r=e.callbackNode;!function(e,t){for(var r=e.suspendedLanes,n=e.pingedLanes,a=e.expirationTimes,o=e.pendingLanes;0<o;){var i=31-it(o),s=1<<i,l=a[i];-1===l?0!==(s&r)&&0===(s&n)||(a[i]=ft(s,t)):l<=t&&(e.expiredLanes|=s),o&=~s}}(e,t);var n=pt(e,e===Pl?Tl:0);if(0===n)null!==r&&Ge(r),e.callbackNode=null,e.callbackPriority=0;else if(t=n&-n,e.callbackPriority!==t){if(null!=r&&Ge(r),1===t)0===e.tag?function(e){Fa=!0,Ba(e)}(lc.bind(null,e)):Ba(lc.bind(null,e)),ia((function(){0===(6&Ol)&&qa()})),r=null;else{switch(xt(n)){case 1:r=Ze;break;case 4:r=et;break;case 16:default:r=tt;break;case 536870912:r=nt}r=Pc(r,ac.bind(null,e))}e.callbackPriority=t,e.callbackNode=r}}function ac(e,t){if(Xl=-1,Zl=0,0!==(6&Ol))throw Error(o(327));var r=e.callbackNode;if(kc()&&e.callbackNode!==r)return null;var n=pt(e,e===Pl?Tl:0);if(0===n)return null;if(0!==(30&n)||0!==(n&e.expiredLanes)||t)t=gc(e,n);else{t=n;var a=Ol;Ol|=2;var i=hc();for(Pl===e&&Tl===t||(Wl=null,ql=Qe()+500,pc(e,t));;)try{vc();break}catch(l){fc(e,l)}_o(),El.current=i,Ol=a,null!==Al?t=0:(Pl=null,Tl=0,t=Dl)}if(0!==t){if(2===t&&(0!==(a=ht(e))&&(n=a,t=oc(e,a))),1===t)throw r=Rl,pc(e,0),sc(e,n),nc(e,Qe()),r;if(6===t)sc(e,n);else{if(a=e.current.alternate,0===(30&n)&&!function(e){for(var t=e;;){if(16384&t.flags){var r=t.updateQueue;if(null!==r&&null!==(r=r.stores))for(var n=0;n<r.length;n++){var a=r[n],o=a.getSnapshot;a=a.value;try{if(!sn(o(),a))return!1}catch(s){return!1}}}if(r=t.child,16384&t.subtreeFlags&&null!==r)r.return=t,t=r;else{if(t===e)break;for(;null===t.sibling;){if(null===t.return||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}(a)&&(2===(t=gc(e,n))&&(0!==(i=ht(e))&&(n=i,t=oc(e,i))),1===t))throw r=Rl,pc(e,0),sc(e,n),nc(e,Qe()),r;switch(e.finishedWork=a,e.finishedLanes=n,t){case 0:case 1:throw Error(o(345));case 2:case 5:wc(e,$l,Wl);break;case 3:if(sc(e,n),(130023424&n)===n&&10<(t=Bl+500-Qe())){if(0!==pt(e,0))break;if(((a=e.suspendedLanes)&n)!==n){ec(),e.pingedLanes|=e.suspendedLanes&a;break}e.timeoutHandle=na(wc.bind(null,e,$l,Wl),t);break}wc(e,$l,Wl);break;case 4:if(sc(e,n),(4194240&n)===n)break;for(t=e.eventTimes,a=-1;0<n;){var s=31-it(n);i=1<<s,(s=t[s])>a&&(a=s),n&=~i}if(n=a,10<(n=(120>(n=Qe()-n)?120:480>n?480:1080>n?1080:1920>n?1920:3e3>n?3e3:4320>n?4320:1960*jl(n/1960))-n)){e.timeoutHandle=na(wc.bind(null,e,$l,Wl),n);break}wc(e,$l,Wl);break;default:throw Error(o(329))}}}return nc(e,Qe()),e.callbackNode===r?ac.bind(null,e):null}function oc(e,t){var r=Fl;return e.current.memoizedState.isDehydrated&&(pc(e,t).flags|=256),2!==(e=gc(e,t))&&(t=$l,$l=r,null!==t&&ic(t)),e}function ic(e){null===$l?$l=e:$l.push.apply($l,e)}function sc(e,t){for(t&=~Ll,t&=~Ml,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var r=31-it(t),n=1<<r;e[r]=-1,t&=~n}}function lc(e){if(0!==(6&Ol))throw Error(o(327));kc();var t=pt(e,0);if(0===(1&t))return nc(e,Qe()),null;var r=gc(e,t);if(0!==e.tag&&2===r){var n=ht(e);0!==n&&(t=n,r=oc(e,n))}if(1===r)throw r=Rl,pc(e,0),sc(e,t),nc(e,Qe()),r;if(6===r)throw Error(o(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,wc(e,$l,Wl),nc(e,Qe()),null}function cc(e,t){var r=Ol;Ol|=1;try{return e(t)}finally{0===(Ol=r)&&(ql=Qe()+500,Fa&&qa())}}function uc(e){null!==Gl&&0===Gl.tag&&0===(6&Ol)&&kc();var t=Ol;Ol|=1;var r=_l.transition,n=yt;try{if(_l.transition=null,yt=1,e)return e()}finally{yt=n,_l.transition=r,0===(6&(Ol=t))&&qa()}}function dc(){zl=Il.current,Ea(Il)}function pc(e,t){e.finishedWork=null,e.finishedLanes=0;var r=e.timeoutHandle;if(-1!==r&&(e.timeoutHandle=-1,aa(r)),null!==Al)for(r=Al.return;null!==r;){var n=r;switch(to(n),n.tag){case 1:null!==(n=n.type.childContextTypes)&&void 0!==n&&Ia();break;case 3:Qo(),Ea(Pa),Ea(Oa),ni();break;case 5:Zo(n);break;case 4:Qo();break;case 13:case 19:Ea(ei);break;case 10:Oo(n.type._context);break;case 22:case 23:dc()}r=r.return}if(Pl=e,Al=e=Ic(e.current,null),Tl=zl=t,Dl=0,Rl=null,Ll=Ml=Nl=0,$l=Fl=null,null!==zo){for(t=0;t<zo.length;t++)if(null!==(n=(r=zo[t]).interleaved)){r.interleaved=null;var a=n.next,o=r.pending;if(null!==o){var i=o.next;o.next=a,n.next=i}r.pending=n}zo=null}return e}function fc(e,t){for(;;){var r=Al;try{if(_o(),ai.current=Xi,ui){for(var n=si.memoizedState;null!==n;){var a=n.queue;null!==a&&(a.pending=null),n=n.next}ui=!1}if(ii=0,ci=li=si=null,di=!1,pi=0,Cl.current=null,null===r||null===r.return){Dl=1,Rl=t,Al=null;break}e:{var i=e,s=r.return,l=r,c=t;if(t=Tl,l.flags|=32768,null!==c&&"object"===typeof c&&"function"===typeof c.then){var u=c,d=l,p=d.tag;if(0===(1&d.mode)&&(0===p||11===p||15===p)){var f=d.alternate;f?(d.updateQueue=f.updateQueue,d.memoizedState=f.memoizedState,d.lanes=f.lanes):(d.updateQueue=null,d.memoizedState=null)}var h=gs(s);if(null!==h){h.flags&=-257,bs(h,s,l,0,t),1&h.mode&&ms(i,u,t),c=u;var m=(t=h).updateQueue;if(null===m){var g=new Set;g.add(c),t.updateQueue=g}else m.add(c);break e}if(0===(1&t)){ms(i,u,t),mc();break e}c=Error(o(426))}else if(ao&&1&l.mode){var b=gs(s);if(null!==b){0===(65536&b.flags)&&(b.flags|=256),bs(b,s,l,0,t),mo(cs(c,l));break e}}i=c=cs(c,l),4!==Dl&&(Dl=2),null===Fl?Fl=[i]:Fl.push(i),i=s;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t,qo(i,fs(0,c,t));break e;case 1:l=c;var v=i.type,y=i.stateNode;if(0===(128&i.flags)&&("function"===typeof v.getDerivedStateFromError||null!==y&&"function"===typeof y.componentDidCatch&&(null===Hl||!Hl.has(y)))){i.flags|=65536,t&=-t,i.lanes|=t,qo(i,hs(i,l,t));break e}}i=i.return}while(null!==i)}xc(r)}catch(x){t=x,Al===r&&null!==r&&(Al=r=r.return);continue}break}}function hc(){var e=El.current;return El.current=Xi,null===e?Xi:e}function mc(){0!==Dl&&3!==Dl&&2!==Dl||(Dl=4),null===Pl||0===(268435455&Nl)&&0===(268435455&Ml)||sc(Pl,Tl)}function gc(e,t){var r=Ol;Ol|=2;var n=hc();for(Pl===e&&Tl===t||(Wl=null,pc(e,t));;)try{bc();break}catch(a){fc(e,a)}if(_o(),Ol=r,El.current=n,null!==Al)throw Error(o(261));return Pl=null,Tl=0,Dl}function bc(){for(;null!==Al;)yc(Al)}function vc(){for(;null!==Al&&!Ye();)yc(Al)}function yc(e){var t=Sl(e.alternate,e,zl);e.memoizedProps=e.pendingProps,null===t?xc(e):Al=t,Cl.current=null}function xc(e){var t=e;do{var r=t.alternate;if(e=t.return,0===(32768&t.flags)){if(null!==(r=Ks(r,t,zl)))return void(Al=r)}else{if(null!==(r=Gs(r,t)))return r.flags&=32767,void(Al=r);if(null===e)return Dl=6,void(Al=null);e.flags|=32768,e.subtreeFlags=0,e.deletions=null}if(null!==(t=t.sibling))return void(Al=t);Al=t=e}while(null!==t);0===Dl&&(Dl=5)}function wc(e,t,r){var n=yt,a=_l.transition;try{_l.transition=null,yt=1,function(e,t,r,n){do{kc()}while(null!==Gl);if(0!==(6&Ol))throw Error(o(327));r=e.finishedWork;var a=e.finishedLanes;if(null===r)return null;if(e.finishedWork=null,e.finishedLanes=0,r===e.current)throw Error(o(177));e.callbackNode=null,e.callbackPriority=0;var i=r.lanes|r.childLanes;if(function(e,t){var r=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var n=e.eventTimes;for(e=e.expirationTimes;0<r;){var a=31-it(r),o=1<<a;t[a]=0,n[a]=-1,e[a]=-1,r&=~o}}(e,i),e===Pl&&(Al=Pl=null,Tl=0),0===(2064&r.subtreeFlags)&&0===(2064&r.flags)||Kl||(Kl=!0,Pc(tt,(function(){return kc(),null}))),i=0!==(15990&r.flags),0!==(15990&r.subtreeFlags)||i){i=_l.transition,_l.transition=null;var s=yt;yt=1;var l=Ol;Ol|=4,Cl.current=null,function(e,t){if(ea=Ut,fn(e=pn())){if("selectionStart"in e)var r={start:e.selectionStart,end:e.selectionEnd};else e:{var n=(r=(r=e.ownerDocument)&&r.defaultView||window).getSelection&&r.getSelection();if(n&&0!==n.rangeCount){r=n.anchorNode;var a=n.anchorOffset,i=n.focusNode;n=n.focusOffset;try{r.nodeType,i.nodeType}catch(w){r=null;break e}var s=0,l=-1,c=-1,u=0,d=0,p=e,f=null;t:for(;;){for(var h;p!==r||0!==a&&3!==p.nodeType||(l=s+a),p!==i||0!==n&&3!==p.nodeType||(c=s+n),3===p.nodeType&&(s+=p.nodeValue.length),null!==(h=p.firstChild);)f=p,p=h;for(;;){if(p===e)break t;if(f===r&&++u===a&&(l=s),f===i&&++d===n&&(c=s),null!==(h=p.nextSibling))break;f=(p=f).parentNode}p=h}r=-1===l||-1===c?null:{start:l,end:c}}else r=null}r=r||{start:0,end:0}}else r=null;for(ta={focusedElem:e,selectionRange:r},Ut=!1,Xs=t;null!==Xs;)if(e=(t=Xs).child,0!==(1028&t.subtreeFlags)&&null!==e)e.return=t,Xs=e;else for(;null!==Xs;){t=Xs;try{var m=t.alternate;if(0!==(1024&t.flags))switch(t.tag){case 0:case 11:case 15:case 5:case 6:case 4:case 17:break;case 1:if(null!==m){var g=m.memoizedProps,b=m.memoizedState,v=t.stateNode,y=v.getSnapshotBeforeUpdate(t.elementType===t.type?g:rs(t.type,g),b);v.__reactInternalSnapshotBeforeUpdate=y}break;case 3:var x=t.stateNode.containerInfo;1===x.nodeType?x.textContent="":9===x.nodeType&&x.documentElement&&x.removeChild(x.documentElement);break;default:throw Error(o(163))}}catch(w){jc(t,t.return,w)}if(null!==(e=t.sibling)){e.return=t.return,Xs=e;break}Xs=t.return}m=tl,tl=!1}(e,r),gl(r,e),hn(ta),Ut=!!ea,ta=ea=null,e.current=r,vl(r,e,a),Je(),Ol=l,yt=s,_l.transition=i}else e.current=r;if(Kl&&(Kl=!1,Gl=e,Yl=a),i=e.pendingLanes,0===i&&(Hl=null),function(e){if(ot&&"function"===typeof ot.onCommitFiberRoot)try{ot.onCommitFiberRoot(at,e,void 0,128===(128&e.current.flags))}catch(t){}}(r.stateNode),nc(e,Qe()),null!==t)for(n=e.onRecoverableError,r=0;r<t.length;r++)a=t[r],n(a.value,{componentStack:a.stack,digest:a.digest});if(Ul)throw Ul=!1,e=Vl,Vl=null,e;0!==(1&Yl)&&0!==e.tag&&kc(),i=e.pendingLanes,0!==(1&i)?e===Ql?Jl++:(Jl=0,Ql=e):Jl=0,qa()}(e,t,r,n)}finally{_l.transition=a,yt=n}return null}function kc(){if(null!==Gl){var e=xt(Yl),t=_l.transition,r=yt;try{if(_l.transition=null,yt=16>e?16:e,null===Gl)var n=!1;else{if(e=Gl,Gl=null,Yl=0,0!==(6&Ol))throw Error(o(331));var a=Ol;for(Ol|=4,Xs=e.current;null!==Xs;){var i=Xs,s=i.child;if(0!==(16&Xs.flags)){var l=i.deletions;if(null!==l){for(var c=0;c<l.length;c++){var u=l[c];for(Xs=u;null!==Xs;){var d=Xs;switch(d.tag){case 0:case 11:case 15:rl(8,d,i)}var p=d.child;if(null!==p)p.return=d,Xs=p;else for(;null!==Xs;){var f=(d=Xs).sibling,h=d.return;if(ol(d),d===u){Xs=null;break}if(null!==f){f.return=h,Xs=f;break}Xs=h}}}var m=i.alternate;if(null!==m){var g=m.child;if(null!==g){m.child=null;do{var b=g.sibling;g.sibling=null,g=b}while(null!==g)}}Xs=i}}if(0!==(2064&i.subtreeFlags)&&null!==s)s.return=i,Xs=s;else e:for(;null!==Xs;){if(0!==(2048&(i=Xs).flags))switch(i.tag){case 0:case 11:case 15:rl(9,i,i.return)}var v=i.sibling;if(null!==v){v.return=i.return,Xs=v;break e}Xs=i.return}}var y=e.current;for(Xs=y;null!==Xs;){var x=(s=Xs).child;if(0!==(2064&s.subtreeFlags)&&null!==x)x.return=s,Xs=x;else e:for(s=y;null!==Xs;){if(0!==(2048&(l=Xs).flags))try{switch(l.tag){case 0:case 11:case 15:nl(9,l)}}catch(k){jc(l,l.return,k)}if(l===s){Xs=null;break e}var w=l.sibling;if(null!==w){w.return=l.return,Xs=w;break e}Xs=l.return}}if(Ol=a,qa(),ot&&"function"===typeof ot.onPostCommitFiberRoot)try{ot.onPostCommitFiberRoot(at,e)}catch(k){}n=!0}return n}finally{yt=r,_l.transition=t}}return!1}function Sc(e,t,r){e=$o(e,t=fs(0,t=cs(r,t),1),1),t=ec(),null!==e&&(bt(e,1,t),nc(e,t))}function jc(e,t,r){if(3===e.tag)Sc(e,e,r);else for(;null!==t;){if(3===t.tag){Sc(t,e,r);break}if(1===t.tag){var n=t.stateNode;if("function"===typeof t.type.getDerivedStateFromError||"function"===typeof n.componentDidCatch&&(null===Hl||!Hl.has(n))){t=$o(t,e=hs(t,e=cs(r,e),1),1),e=ec(),null!==t&&(bt(t,1,e),nc(t,e));break}}t=t.return}}function Ec(e,t,r){var n=e.pingCache;null!==n&&n.delete(t),t=ec(),e.pingedLanes|=e.suspendedLanes&r,Pl===e&&(Tl&r)===r&&(4===Dl||3===Dl&&(130023424&Tl)===Tl&&500>Qe()-Bl?pc(e,0):Ll|=r),nc(e,t)}function Cc(e,t){0===t&&(0===(1&e.mode)?t=1:(t=ut,0===(130023424&(ut<<=1))&&(ut=4194304)));var r=ec();null!==(e=Ro(e,t))&&(bt(e,t,r),nc(e,r))}function _c(e){var t=e.memoizedState,r=0;null!==t&&(r=t.retryLane),Cc(e,r)}function Oc(e,t){var r=0;switch(e.tag){case 13:var n=e.stateNode,a=e.memoizedState;null!==a&&(r=a.retryLane);break;case 19:n=e.stateNode;break;default:throw Error(o(314))}null!==n&&n.delete(t),Cc(e,r)}function Pc(e,t){return Ke(e,t)}function Ac(e,t,r,n){this.tag=e,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=n,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Tc(e,t,r,n){return new Ac(e,t,r,n)}function zc(e){return!(!(e=e.prototype)||!e.isReactComponent)}function Ic(e,t){var r=e.alternate;return null===r?((r=Tc(e.tag,t,e.key,e.mode)).elementType=e.elementType,r.type=e.type,r.stateNode=e.stateNode,r.alternate=e,e.alternate=r):(r.pendingProps=t,r.type=e.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=14680064&e.flags,r.childLanes=e.childLanes,r.lanes=e.lanes,r.child=e.child,r.memoizedProps=e.memoizedProps,r.memoizedState=e.memoizedState,r.updateQueue=e.updateQueue,t=e.dependencies,r.dependencies=null===t?null:{lanes:t.lanes,firstContext:t.firstContext},r.sibling=e.sibling,r.index=e.index,r.ref=e.ref,r}function Dc(e,t,r,n,a,i){var s=2;if(n=e,"function"===typeof e)zc(e)&&(s=1);else if("string"===typeof e)s=5;else e:switch(e){case S:return Rc(r.children,a,i,t);case j:s=8,a|=8;break;case E:return(e=Tc(12,r,t,2|a)).elementType=E,e.lanes=i,e;case P:return(e=Tc(13,r,t,a)).elementType=P,e.lanes=i,e;case A:return(e=Tc(19,r,t,a)).elementType=A,e.lanes=i,e;case I:return Nc(r,a,i,t);default:if("object"===typeof e&&null!==e)switch(e.$$typeof){case C:s=10;break e;case _:s=9;break e;case O:s=11;break e;case T:s=14;break e;case z:s=16,n=null;break e}throw Error(o(130,null==e?e:typeof e,""))}return(t=Tc(s,r,t,a)).elementType=e,t.type=n,t.lanes=i,t}function Rc(e,t,r,n){return(e=Tc(7,e,n,t)).lanes=r,e}function Nc(e,t,r,n){return(e=Tc(22,e,n,t)).elementType=I,e.lanes=r,e.stateNode={isHidden:!1},e}function Mc(e,t,r){return(e=Tc(6,e,null,t)).lanes=r,e}function Lc(e,t,r){return(t=Tc(4,null!==e.children?e.children:[],e.key,t)).lanes=r,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Fc(e,t,r,n,a){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=gt(0),this.expirationTimes=gt(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=gt(0),this.identifierPrefix=n,this.onRecoverableError=a,this.mutableSourceEagerHydrationData=null}function $c(e,t,r,n,a,o,i,s,l){return e=new Fc(e,t,r,s,l),1===t?(t=1,!0===o&&(t|=8)):t=0,o=Tc(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:n,isDehydrated:r,cache:null,transitions:null,pendingSuspenseBoundaries:null},Mo(o),e}function Bc(e){if(!e)return _a;e:{if(qe(e=e._reactInternals)!==e||1!==e.tag)throw Error(o(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(za(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(null!==t);throw Error(o(171))}if(1===e.tag){var r=e.type;if(za(r))return Ra(e,r,t)}return t}function qc(e,t,r,n,a,o,i,s,l){return(e=$c(r,n,!0,e,0,o,0,s,l)).context=Bc(null),r=e.current,(o=Fo(n=ec(),a=tc(r))).callback=void 0!==t&&null!==t?t:null,$o(r,o,a),e.current.lanes=a,bt(e,a,n),nc(e,n),e}function Wc(e,t,r,n){var a=t.current,o=ec(),i=tc(a);return r=Bc(r),null===t.context?t.context=r:t.pendingContext=r,(t=Fo(o,i)).payload={element:e},null!==(n=void 0===n?null:n)&&(t.callback=n),null!==(e=$o(a,t,i))&&(rc(e,a,i,o),Bo(e,a,i)),i}function Uc(e){return(e=e.current).child?(e.child.tag,e.child.stateNode):null}function Vc(e,t){if(null!==(e=e.memoizedState)&&null!==e.dehydrated){var r=e.retryLane;e.retryLane=0!==r&&r<t?r:t}}function Hc(e,t){Vc(e,t),(e=e.alternate)&&Vc(e,t)}Sl=function(e,t,r){if(null!==e)if(e.memoizedProps!==t.pendingProps||Pa.current)ys=!0;else{if(0===(e.lanes&r)&&0===(128&t.flags))return ys=!1,function(e,t,r){switch(t.tag){case 3:Ps(t),ho();break;case 5:Xo(t);break;case 1:za(t.type)&&Na(t);break;case 4:Jo(t,t.stateNode.containerInfo);break;case 10:var n=t.type._context,a=t.memoizedProps.value;Ca(So,n._currentValue),n._currentValue=a;break;case 13:if(null!==(n=t.memoizedState))return null!==n.dehydrated?(Ca(ei,1&ei.current),t.flags|=128,null):0!==(r&t.child.childLanes)?Ms(e,t,r):(Ca(ei,1&ei.current),null!==(e=Us(e,t,r))?e.sibling:null);Ca(ei,1&ei.current);break;case 19:if(n=0!==(r&t.childLanes),0!==(128&e.flags)){if(n)return qs(e,t,r);t.flags|=128}if(null!==(a=t.memoizedState)&&(a.rendering=null,a.tail=null,a.lastEffect=null),Ca(ei,ei.current),n)break;return null;case 22:case 23:return t.lanes=0,js(e,t,r)}return Us(e,t,r)}(e,t,r);ys=0!==(131072&e.flags)}else ys=!1,ao&&0!==(1048576&t.flags)&&Za(t,Ha,t.index);switch(t.lanes=0,t.tag){case 2:var n=t.type;Ws(e,t),e=t.pendingProps;var a=Ta(t,Oa.current);Ao(t,r),a=gi(null,t,n,e,a,r);var i=bi();return t.flags|=1,"object"===typeof a&&null!==a&&"function"===typeof a.render&&void 0===a.$$typeof?(t.tag=1,t.memoizedState=null,t.updateQueue=null,za(n)?(i=!0,Na(t)):i=!1,t.memoizedState=null!==a.state&&void 0!==a.state?a.state:null,Mo(t),a.updater=as,t.stateNode=a,a._reactInternals=t,ls(t,n,e,r),t=Os(null,t,n,!0,i,r)):(t.tag=0,ao&&i&&eo(t),xs(null,t,a,r),t=t.child),t;case 16:n=t.elementType;e:{switch(Ws(e,t),e=t.pendingProps,n=(a=n._init)(n._payload),t.type=n,a=t.tag=function(e){if("function"===typeof e)return zc(e)?1:0;if(void 0!==e&&null!==e){if((e=e.$$typeof)===O)return 11;if(e===T)return 14}return 2}(n),e=rs(n,e),a){case 0:t=Cs(null,t,n,e,r);break e;case 1:t=_s(null,t,n,e,r);break e;case 11:t=ws(null,t,n,e,r);break e;case 14:t=ks(null,t,n,rs(n.type,e),r);break e}throw Error(o(306,n,""))}return t;case 0:return n=t.type,a=t.pendingProps,Cs(e,t,n,a=t.elementType===n?a:rs(n,a),r);case 1:return n=t.type,a=t.pendingProps,_s(e,t,n,a=t.elementType===n?a:rs(n,a),r);case 3:e:{if(Ps(t),null===e)throw Error(o(387));n=t.pendingProps,a=(i=t.memoizedState).element,Lo(e,t),Wo(t,n,null,r);var s=t.memoizedState;if(n=s.element,i.isDehydrated){if(i={element:n,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},t.updateQueue.baseState=i,t.memoizedState=i,256&t.flags){t=As(e,t,n,r,a=cs(Error(o(423)),t));break e}if(n!==a){t=As(e,t,n,r,a=cs(Error(o(424)),t));break e}for(no=ca(t.stateNode.containerInfo.firstChild),ro=t,ao=!0,oo=null,r=ko(t,null,n,r),t.child=r;r;)r.flags=-3&r.flags|4096,r=r.sibling}else{if(ho(),n===a){t=Us(e,t,r);break e}xs(e,t,n,r)}t=t.child}return t;case 5:return Xo(t),null===e&&co(t),n=t.type,a=t.pendingProps,i=null!==e?e.memoizedProps:null,s=a.children,ra(n,a)?s=null:null!==i&&ra(n,i)&&(t.flags|=32),Es(e,t),xs(e,t,s,r),t.child;case 6:return null===e&&co(t),null;case 13:return Ms(e,t,r);case 4:return Jo(t,t.stateNode.containerInfo),n=t.pendingProps,null===e?t.child=wo(t,null,n,r):xs(e,t,n,r),t.child;case 11:return n=t.type,a=t.pendingProps,ws(e,t,n,a=t.elementType===n?a:rs(n,a),r);case 7:return xs(e,t,t.pendingProps,r),t.child;case 8:case 12:return xs(e,t,t.pendingProps.children,r),t.child;case 10:e:{if(n=t.type._context,a=t.pendingProps,i=t.memoizedProps,s=a.value,Ca(So,n._currentValue),n._currentValue=s,null!==i)if(sn(i.value,s)){if(i.children===a.children&&!Pa.current){t=Us(e,t,r);break e}}else for(null!==(i=t.child)&&(i.return=t);null!==i;){var l=i.dependencies;if(null!==l){s=i.child;for(var c=l.firstContext;null!==c;){if(c.context===n){if(1===i.tag){(c=Fo(-1,r&-r)).tag=2;var u=i.updateQueue;if(null!==u){var d=(u=u.shared).pending;null===d?c.next=c:(c.next=d.next,d.next=c),u.pending=c}}i.lanes|=r,null!==(c=i.alternate)&&(c.lanes|=r),Po(i.return,r,t),l.lanes|=r;break}c=c.next}}else if(10===i.tag)s=i.type===t.type?null:i.child;else if(18===i.tag){if(null===(s=i.return))throw Error(o(341));s.lanes|=r,null!==(l=s.alternate)&&(l.lanes|=r),Po(s,r,t),s=i.sibling}else s=i.child;if(null!==s)s.return=i;else for(s=i;null!==s;){if(s===t){s=null;break}if(null!==(i=s.sibling)){i.return=s.return,s=i;break}s=s.return}i=s}xs(e,t,a.children,r),t=t.child}return t;case 9:return a=t.type,n=t.pendingProps.children,Ao(t,r),n=n(a=To(a)),t.flags|=1,xs(e,t,n,r),t.child;case 14:return a=rs(n=t.type,t.pendingProps),ks(e,t,n,a=rs(n.type,a),r);case 15:return Ss(e,t,t.type,t.pendingProps,r);case 17:return n=t.type,a=t.pendingProps,a=t.elementType===n?a:rs(n,a),Ws(e,t),t.tag=1,za(n)?(e=!0,Na(t)):e=!1,Ao(t,r),is(t,n,a),ls(t,n,a,r),Os(null,t,n,!0,e,r);case 19:return qs(e,t,r);case 22:return js(e,t,r)}throw Error(o(156,t.tag))};var Kc="function"===typeof reportError?reportError:function(e){console.error(e)};function Gc(e){this._internalRoot=e}function Yc(e){this._internalRoot=e}function Jc(e){return!(!e||1!==e.nodeType&&9!==e.nodeType&&11!==e.nodeType)}function Qc(e){return!(!e||1!==e.nodeType&&9!==e.nodeType&&11!==e.nodeType&&(8!==e.nodeType||" react-mount-point-unstable "!==e.nodeValue))}function Xc(){}function Zc(e,t,r,n,a){var o=r._reactRootContainer;if(o){var i=o;if("function"===typeof a){var s=a;a=function(){var e=Uc(i);s.call(e)}}Wc(t,i,e,a)}else i=function(e,t,r,n,a){if(a){if("function"===typeof n){var o=n;n=function(){var e=Uc(i);o.call(e)}}var i=qc(t,n,e,0,null,!1,0,"",Xc);return e._reactRootContainer=i,e[ha]=i.current,qn(8===e.nodeType?e.parentNode:e),uc(),i}for(;a=e.lastChild;)e.removeChild(a);if("function"===typeof n){var s=n;n=function(){var e=Uc(l);s.call(e)}}var l=$c(e,0,!1,null,0,!1,0,"",Xc);return e._reactRootContainer=l,e[ha]=l.current,qn(8===e.nodeType?e.parentNode:e),uc((function(){Wc(t,l,r,n)})),l}(r,t,e,a,n);return Uc(i)}Yc.prototype.render=Gc.prototype.render=function(e){var t=this._internalRoot;if(null===t)throw Error(o(409));Wc(e,t,null,null)},Yc.prototype.unmount=Gc.prototype.unmount=function(){var e=this._internalRoot;if(null!==e){this._internalRoot=null;var t=e.containerInfo;uc((function(){Wc(null,e,null,null)})),t[ha]=null}},Yc.prototype.unstable_scheduleHydration=function(e){if(e){var t=jt();e={blockedOn:null,target:e,priority:t};for(var r=0;r<It.length&&0!==t&&t<It[r].priority;r++);It.splice(r,0,e),0===r&&Mt(e)}},wt=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var r=dt(t.pendingLanes);0!==r&&(vt(t,1|r),nc(t,Qe()),0===(6&Ol)&&(ql=Qe()+500,qa()))}break;case 13:uc((function(){var t=Ro(e,1);if(null!==t){var r=ec();rc(t,e,1,r)}})),Hc(e,1)}},kt=function(e){if(13===e.tag){var t=Ro(e,134217728);if(null!==t)rc(t,e,134217728,ec());Hc(e,134217728)}},St=function(e){if(13===e.tag){var t=tc(e),r=Ro(e,t);if(null!==r)rc(r,e,t,ec());Hc(e,t)}},jt=function(){return yt},Et=function(e,t){var r=yt;try{return yt=e,t()}finally{yt=r}},ke=function(e,t,r){switch(t){case"input":if(X(e,r),t=r.name,"radio"===r.type&&null!=t){for(r=e;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<r.length;t++){var n=r[t];if(n!==e&&n.form===e.form){var a=wa(n);if(!a)throw Error(o(90));K(n),X(n,a)}}}break;case"textarea":oe(e,r);break;case"select":null!=(t=r.value)&&re(e,!!r.multiple,t,!1)}},Oe=cc,Pe=uc;var eu={usingClientEntryPoint:!1,Events:[ya,xa,wa,Ce,_e,cc]},tu={findFiberByHostInstance:va,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},ru={bundleType:tu.bundleType,version:tu.version,rendererPackageName:tu.rendererPackageName,rendererConfig:tu.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:x.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return null===(e=Ve(e))?null:e.stateNode},findFiberByHostInstance:tu.findFiberByHostInstance||function(){return null},findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if("undefined"!==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__){var nu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!nu.isDisabled&&nu.supportsFiber)try{at=nu.inject(ru),ot=nu}catch(ue){}}t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=eu,t.createPortal=function(e,t){var r=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;if(!Jc(t))throw Error(o(200));return function(e,t,r){var n=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return{$$typeof:k,key:null==n?null:""+n,children:e,containerInfo:t,implementation:r}}(e,t,null,r)},t.createRoot=function(e,t){if(!Jc(e))throw Error(o(299));var r=!1,n="",a=Kc;return null!==t&&void 0!==t&&(!0===t.unstable_strictMode&&(r=!0),void 0!==t.identifierPrefix&&(n=t.identifierPrefix),void 0!==t.onRecoverableError&&(a=t.onRecoverableError)),t=$c(e,1,!1,null,0,r,0,n,a),e[ha]=t.current,qn(8===e.nodeType?e.parentNode:e),new Gc(t)},t.findDOMNode=function(e){if(null==e)return null;if(1===e.nodeType)return e;var t=e._reactInternals;if(void 0===t){if("function"===typeof e.render)throw Error(o(188));throw e=Object.keys(e).join(","),Error(o(268,e))}return e=null===(e=Ve(t))?null:e.stateNode},t.flushSync=function(e){return uc(e)},t.hydrate=function(e,t,r){if(!Qc(t))throw Error(o(200));return Zc(null,e,t,!0,r)},t.hydrateRoot=function(e,t,r){if(!Jc(e))throw Error(o(405));var n=null!=r&&r.hydratedSources||null,a=!1,i="",s=Kc;if(null!==r&&void 0!==r&&(!0===r.unstable_strictMode&&(a=!0),void 0!==r.identifierPrefix&&(i=r.identifierPrefix),void 0!==r.onRecoverableError&&(s=r.onRecoverableError)),t=qc(t,null,e,1,null!=r?r:null,a,0,i,s),e[ha]=t.current,qn(e),n)for(e=0;e<n.length;e++)a=(a=(r=n[e])._getVersion)(r._source),null==t.mutableSourceEagerHydrationData?t.mutableSourceEagerHydrationData=[r,a]:t.mutableSourceEagerHydrationData.push(r,a);return new Yc(t)},t.render=function(e,t,r){if(!Qc(t))throw Error(o(200));return Zc(null,e,t,!1,r)},t.unmountComponentAtNode=function(e){if(!Qc(e))throw Error(o(40));return!!e._reactRootContainer&&(uc((function(){Zc(null,null,e,!1,(function(){e._reactRootContainer=null,e[ha]=null}))})),!0)},t.unstable_batchedUpdates=cc,t.unstable_renderSubtreeIntoContainer=function(e,t,r,n){if(!Qc(r))throw Error(o(200));if(null==e||void 0===e._reactInternals)throw Error(o(38));return Zc(e,t,r,!1,n)},t.version="18.3.1-next-f1338f8080-20240426"},403:e=>{e.exports=function(e,t,r,n){var a=r?r.call(n,e,t):void 0;if(void 0!==a)return!!a;if(e===t)return!0;if("object"!==typeof e||!e||"object"!==typeof t||!t)return!1;var o=Object.keys(e),i=Object.keys(t);if(o.length!==i.length)return!1;for(var s=Object.prototype.hasOwnProperty.bind(t),l=0;l<o.length;l++){var c=o[l];if(!s(c))return!1;var u=e[c],d=t[c];if(!1===(a=r?r.call(n,u,d,c):void 0)||void 0===a&&u!==d)return!1}return!0}},414:(e,t,r)=>{"use strict";e.exports=r(654)},654:(e,t,r)=>{"use strict";var n=r(950),a=Symbol.for("react.element"),o=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,s=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,r){var n,o={},c=null,u=null;for(n in void 0!==r&&(c=""+r),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(u=t.ref),t)i.call(t,n)&&!l.hasOwnProperty(n)&&(o[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===o[n]&&(o[n]=t[n]);return{$$typeof:a,type:e,key:c,ref:u,props:o,_owner:s.current}}t.Fragment=o,t.jsx=c,t.jsxs=c},761:(e,t)=>{"use strict";function r(e,t){var r=e.length;e.push(t);e:for(;0<r;){var n=r-1>>>1,a=e[n];if(!(0<o(a,t)))break e;e[n]=t,e[r]=a,r=n}}function n(e){return 0===e.length?null:e[0]}function a(e){if(0===e.length)return null;var t=e[0],r=e.pop();if(r!==t){e[0]=r;e:for(var n=0,a=e.length,i=a>>>1;n<i;){var s=2*(n+1)-1,l=e[s],c=s+1,u=e[c];if(0>o(l,r))c<a&&0>o(u,l)?(e[n]=u,e[c]=r,n=c):(e[n]=l,e[s]=r,n=s);else{if(!(c<a&&0>o(u,r)))break e;e[n]=u,e[c]=r,n=c}}}return t}function o(e,t){var r=e.sortIndex-t.sortIndex;return 0!==r?r:e.id-t.id}if("object"===typeof performance&&"function"===typeof performance.now){var i=performance;t.unstable_now=function(){return i.now()}}else{var s=Date,l=s.now();t.unstable_now=function(){return s.now()-l}}var c=[],u=[],d=1,p=null,f=3,h=!1,m=!1,g=!1,b="function"===typeof setTimeout?setTimeout:null,v="function"===typeof clearTimeout?clearTimeout:null,y="undefined"!==typeof setImmediate?setImmediate:null;function x(e){for(var t=n(u);null!==t;){if(null===t.callback)a(u);else{if(!(t.startTime<=e))break;a(u),t.sortIndex=t.expirationTime,r(c,t)}t=n(u)}}function w(e){if(g=!1,x(e),!m)if(null!==n(c))m=!0,I(k);else{var t=n(u);null!==t&&D(w,t.startTime-e)}}function k(e,r){m=!1,g&&(g=!1,v(C),C=-1),h=!0;var o=f;try{for(x(r),p=n(c);null!==p&&(!(p.expirationTime>r)||e&&!P());){var i=p.callback;if("function"===typeof i){p.callback=null,f=p.priorityLevel;var s=i(p.expirationTime<=r);r=t.unstable_now(),"function"===typeof s?p.callback=s:p===n(c)&&a(c),x(r)}else a(c);p=n(c)}if(null!==p)var l=!0;else{var d=n(u);null!==d&&D(w,d.startTime-r),l=!1}return l}finally{p=null,f=o,h=!1}}"undefined"!==typeof navigator&&void 0!==navigator.scheduling&&void 0!==navigator.scheduling.isInputPending&&navigator.scheduling.isInputPending.bind(navigator.scheduling);var S,j=!1,E=null,C=-1,_=5,O=-1;function P(){return!(t.unstable_now()-O<_)}function A(){if(null!==E){var e=t.unstable_now();O=e;var r=!0;try{r=E(!0,e)}finally{r?S():(j=!1,E=null)}}else j=!1}if("function"===typeof y)S=function(){y(A)};else if("undefined"!==typeof MessageChannel){var T=new MessageChannel,z=T.port2;T.port1.onmessage=A,S=function(){z.postMessage(null)}}else S=function(){b(A,0)};function I(e){E=e,j||(j=!0,S())}function D(e,r){C=b((function(){e(t.unstable_now())}),r)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(e){e.callback=null},t.unstable_continueExecution=function(){m||h||(m=!0,I(k))},t.unstable_forceFrameRate=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):_=0<e?Math.floor(1e3/e):5},t.unstable_getCurrentPriorityLevel=function(){return f},t.unstable_getFirstCallbackNode=function(){return n(c)},t.unstable_next=function(e){switch(f){case 1:case 2:case 3:var t=3;break;default:t=f}var r=f;f=t;try{return e()}finally{f=r}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var r=f;f=e;try{return t()}finally{f=r}},t.unstable_scheduleCallback=function(e,a,o){var i=t.unstable_now();switch("object"===typeof o&&null!==o?o="number"===typeof(o=o.delay)&&0<o?i+o:i:o=i,e){case 1:var s=-1;break;case 2:s=250;break;case 5:s=1073741823;break;case 4:s=1e4;break;default:s=5e3}return e={id:d++,callback:a,priorityLevel:e,startTime:o,expirationTime:s=o+s,sortIndex:-1},o>i?(e.sortIndex=o,r(u,e),null===n(c)&&e===n(u)&&(g?(v(C),C=-1):g=!0,D(w,o-i))):(e.sortIndex=s,r(c,e),m||h||(m=!0,I(k))),e},t.unstable_shouldYield=P,t.unstable_wrapCallback=function(e){var t=f;return function(){var r=f;f=t;try{return e.apply(this,arguments)}finally{f=r}}}},795:function(e,t,r){var n;e.exports=(n=r(950),function(e){var t={};function r(n){if(t[n])return t[n].exports;var a=t[n]={i:n,l:!1,exports:{}};return e[n].call(a.exports,a,a.exports,r),a.l=!0,a.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)r.d(n,a,function(t){return e[t]}.bind(null,a));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=48)}([function(e,t){e.exports=n},function(e,t){var r=e.exports={version:"2.6.12"};"number"==typeof __e&&(__e=r)},function(e,t,r){var n=r(26)("wks"),a=r(17),o=r(3).Symbol,i="function"==typeof o;(e.exports=function(e){return n[e]||(n[e]=i&&o[e]||(i?o:a)("Symbol."+e))}).store=n},function(e,t){var r=e.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=r)},function(e,t,r){e.exports=!r(8)((function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a}))},function(e,t){var r={}.hasOwnProperty;e.exports=function(e,t){return r.call(e,t)}},function(e,t,r){var n=r(7),a=r(16);e.exports=r(4)?function(e,t,r){return n.f(e,t,a(1,r))}:function(e,t,r){return e[t]=r,e}},function(e,t,r){var n=r(10),a=r(35),o=r(23),i=Object.defineProperty;t.f=r(4)?Object.defineProperty:function(e,t,r){if(n(e),t=o(t,!0),n(r),a)try{return i(e,t,r)}catch(e){}if("get"in r||"set"in r)throw TypeError("Accessors not supported!");return"value"in r&&(e[t]=r.value),e}},function(e,t){e.exports=function(e){try{return!!e()}catch(e){return!0}}},function(e,t,r){var n=r(40),a=r(22);e.exports=function(e){return n(a(e))}},function(e,t,r){var n=r(11);e.exports=function(e){if(!n(e))throw TypeError(e+" is not an object!");return e}},function(e,t){e.exports=function(e){return"object"==typeof e?null!==e:"function"==typeof e}},function(e,t){e.exports={}},function(e,t,r){var n=r(39),a=r(27);e.exports=Object.keys||function(e){return n(e,a)}},function(e,t){e.exports=!0},function(e,t,r){var n=r(3),a=r(1),o=r(53),i=r(6),s=r(5),l=function(e,t,r){var c,u,d,p=e&l.F,f=e&l.G,h=e&l.S,m=e&l.P,g=e&l.B,b=e&l.W,v=f?a:a[t]||(a[t]={}),y=v.prototype,x=f?n:h?n[t]:(n[t]||{}).prototype;for(c in f&&(r=t),r)(u=!p&&x&&void 0!==x[c])&&s(v,c)||(d=u?x[c]:r[c],v[c]=f&&"function"!=typeof x[c]?r[c]:g&&u?o(d,n):b&&x[c]==d?function(e){var t=function(t,r,n){if(this instanceof e){switch(arguments.length){case 0:return new e;case 1:return new e(t);case 2:return new e(t,r)}return new e(t,r,n)}return e.apply(this,arguments)};return t.prototype=e.prototype,t}(d):m&&"function"==typeof d?o(Function.call,d):d,m&&((v.virtual||(v.virtual={}))[c]=d,e&l.R&&y&&!y[c]&&i(y,c,d)))};l.F=1,l.G=2,l.S=4,l.P=8,l.B=16,l.W=32,l.U=64,l.R=128,e.exports=l},function(e,t){e.exports=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}}},function(e,t){var r=0,n=Math.random();e.exports=function(e){return"Symbol(".concat(void 0===e?"":e,")_",(++r+n).toString(36))}},function(e,t,r){var n=r(22);e.exports=function(e){return Object(n(e))}},function(e,t){t.f={}.propertyIsEnumerable},function(e,t,r){"use strict";var n=r(52)(!0);r(34)(String,"String",(function(e){this._t=String(e),this._i=0}),(function(){var e,t=this._t,r=this._i;return r>=t.length?{value:void 0,done:!0}:(e=n(t,r),this._i+=e.length,{value:e,done:!1})}))},function(e,t){var r=Math.ceil,n=Math.floor;e.exports=function(e){return isNaN(e=+e)?0:(e>0?n:r)(e)}},function(e,t){e.exports=function(e){if(null==e)throw TypeError("Can't call method on  "+e);return e}},function(e,t,r){var n=r(11);e.exports=function(e,t){if(!n(e))return e;var r,a;if(t&&"function"==typeof(r=e.toString)&&!n(a=r.call(e)))return a;if("function"==typeof(r=e.valueOf)&&!n(a=r.call(e)))return a;if(!t&&"function"==typeof(r=e.toString)&&!n(a=r.call(e)))return a;throw TypeError("Can't convert object to primitive value")}},function(e,t){var r={}.toString;e.exports=function(e){return r.call(e).slice(8,-1)}},function(e,t,r){var n=r(26)("keys"),a=r(17);e.exports=function(e){return n[e]||(n[e]=a(e))}},function(e,t,r){var n=r(1),a=r(3),o=a["__core-js_shared__"]||(a["__core-js_shared__"]={});(e.exports=function(e,t){return o[e]||(o[e]=void 0!==t?t:{})})("versions",[]).push({version:n.version,mode:r(14)?"pure":"global",copyright:"\xa9 2020 Denis Pushkarev (zloirock.ru)"})},function(e,t){e.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(e,t,r){var n=r(7).f,a=r(5),o=r(2)("toStringTag");e.exports=function(e,t,r){e&&!a(e=r?e:e.prototype,o)&&n(e,o,{configurable:!0,value:t})}},function(e,t,r){r(62);for(var n=r(3),a=r(6),o=r(12),i=r(2)("toStringTag"),s="CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(","),l=0;l<s.length;l++){var c=s[l],u=n[c],d=u&&u.prototype;d&&!d[i]&&a(d,i,c),o[c]=o.Array}},function(e,t,r){t.f=r(2)},function(e,t,r){var n=r(3),a=r(1),o=r(14),i=r(30),s=r(7).f;e.exports=function(e){var t=a.Symbol||(a.Symbol=o?{}:n.Symbol||{});"_"==e.charAt(0)||e in t||s(t,e,{value:i.f(e)})}},function(e,t){t.f=Object.getOwnPropertySymbols},function(e,t){e.exports=function(e,t,r){return Math.min(Math.max(e,t),r)}},function(e,t,r){"use strict";var n=r(14),a=r(15),o=r(37),i=r(6),s=r(12),l=r(55),c=r(28),u=r(61),d=r(2)("iterator"),p=!([].keys&&"next"in[].keys()),f=function(){return this};e.exports=function(e,t,r,h,m,g,b){l(r,t,h);var v,y,x,w=function(e){if(!p&&e in E)return E[e];switch(e){case"keys":case"values":return function(){return new r(this,e)}}return function(){return new r(this,e)}},k=t+" Iterator",S="values"==m,j=!1,E=e.prototype,C=E[d]||E["@@iterator"]||m&&E[m],_=C||w(m),O=m?S?w("entries"):_:void 0,P="Array"==t&&E.entries||C;if(P&&(x=u(P.call(new e)))!==Object.prototype&&x.next&&(c(x,k,!0),n||"function"==typeof x[d]||i(x,d,f)),S&&C&&"values"!==C.name&&(j=!0,_=function(){return C.call(this)}),n&&!b||!p&&!j&&E[d]||i(E,d,_),s[t]=_,s[k]=f,m)if(v={values:S?_:w("values"),keys:g?_:w("keys"),entries:O},b)for(y in v)y in E||o(E,y,v[y]);else a(a.P+a.F*(p||j),t,v);return v}},function(e,t,r){e.exports=!r(4)&&!r(8)((function(){return 7!=Object.defineProperty(r(36)("div"),"a",{get:function(){return 7}}).a}))},function(e,t,r){var n=r(11),a=r(3).document,o=n(a)&&n(a.createElement);e.exports=function(e){return o?a.createElement(e):{}}},function(e,t,r){e.exports=r(6)},function(e,t,r){var n=r(10),a=r(56),o=r(27),i=r(25)("IE_PROTO"),s=function(){},l=function(){var e,t=r(36)("iframe"),n=o.length;for(t.style.display="none",r(60).appendChild(t),t.src="javascript:",(e=t.contentWindow.document).open(),e.write("<script>document.F=Object<\/script>"),e.close(),l=e.F;n--;)delete l.prototype[o[n]];return l()};e.exports=Object.create||function(e,t){var r;return null!==e?(s.prototype=n(e),r=new s,s.prototype=null,r[i]=e):r=l(),void 0===t?r:a(r,t)}},function(e,t,r){var n=r(5),a=r(9),o=r(57)(!1),i=r(25)("IE_PROTO");e.exports=function(e,t){var r,s=a(e),l=0,c=[];for(r in s)r!=i&&n(s,r)&&c.push(r);for(;t.length>l;)n(s,r=t[l++])&&(~o(c,r)||c.push(r));return c}},function(e,t,r){var n=r(24);e.exports=Object("z").propertyIsEnumerable(0)?Object:function(e){return"String"==n(e)?e.split(""):Object(e)}},function(e,t,r){var n=r(39),a=r(27).concat("length","prototype");t.f=Object.getOwnPropertyNames||function(e){return n(e,a)}},function(e,t,r){var n=r(24),a=r(2)("toStringTag"),o="Arguments"==n(function(){return arguments}());e.exports=function(e){var t,r,i;return void 0===e?"Undefined":null===e?"Null":"string"==typeof(r=function(e,t){try{return e[t]}catch(e){}}(t=Object(e),a))?r:o?n(t):"Object"==(i=n(t))&&"function"==typeof t.callee?"Arguments":i}},function(e,t){var r;r=function(){return this}();try{r=r||new Function("return this")()}catch(e){"object"==typeof window&&(r=window)}e.exports=r},function(e,t){var r=/-?\d+(\.\d+)?%?/g;e.exports=function(e){return e.match(r)}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getBase16Theme=t.createStyling=t.invertTheme=void 0;var n=f(r(49)),a=f(r(76)),o=f(r(81)),i=f(r(89)),s=f(r(93)),l=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}(r(94)),c=f(r(132)),u=f(r(133)),d=f(r(138)),p=r(139);function f(e){return e&&e.__esModule?e:{default:e}}var h=l.default,m=(0,i.default)(h),g=(0,d.default)(u.default,p.rgb2yuv,(function(e){var t,r=(0,o.default)(e,3);return[(t=r[0],t<.25?1:t<.5?.9-t:1.1-t),r[1],r[2]]}),p.yuv2rgb,c.default),b=function(e){return function(t){return{className:[t.className,e.className].filter(Boolean).join(" "),style:(0,a.default)({},t.style||{},e.style||{})}}},v=function(e,t){var r=(0,i.default)(t);for(var o in e)-1===r.indexOf(o)&&r.push(o);return r.reduce((function(r,o){return r[o]=function(e,t){if(void 0===e)return t;if(void 0===t)return e;var r=void 0===e?"undefined":(0,n.default)(e),o=void 0===t?"undefined":(0,n.default)(t);switch(r){case"string":switch(o){case"string":return[t,e].filter(Boolean).join(" ");case"object":return b({className:e,style:t});case"function":return function(r){for(var n=arguments.length,a=Array(n>1?n-1:0),o=1;o<n;o++)a[o-1]=arguments[o];return b({className:e})(t.apply(void 0,[r].concat(a)))}}case"object":switch(o){case"string":return b({className:t,style:e});case"object":return(0,a.default)({},t,e);case"function":return function(r){for(var n=arguments.length,a=Array(n>1?n-1:0),o=1;o<n;o++)a[o-1]=arguments[o];return b({style:e})(t.apply(void 0,[r].concat(a)))}}case"function":switch(o){case"string":return function(r){for(var n=arguments.length,a=Array(n>1?n-1:0),o=1;o<n;o++)a[o-1]=arguments[o];return e.apply(void 0,[b(r)({className:t})].concat(a))};case"object":return function(r){for(var n=arguments.length,a=Array(n>1?n-1:0),o=1;o<n;o++)a[o-1]=arguments[o];return e.apply(void 0,[b(r)({style:t})].concat(a))};case"function":return function(r){for(var n=arguments.length,a=Array(n>1?n-1:0),o=1;o<n;o++)a[o-1]=arguments[o];return e.apply(void 0,[t.apply(void 0,[r].concat(a))].concat(a))}}}}(e[o],t[o]),r}),{})},y=function(e,t){for(var r=arguments.length,o=Array(r>2?r-2:0),s=2;s<r;s++)o[s-2]=arguments[s];if(null===t)return e;Array.isArray(t)||(t=[t]);var l=t.map((function(t){return e[t]})).filter(Boolean).reduce((function(e,t){return"string"==typeof t?e.className=[e.className,t].filter(Boolean).join(" "):"object"===(void 0===t?"undefined":(0,n.default)(t))?e.style=(0,a.default)({},e.style,t):"function"==typeof t&&(e=(0,a.default)({},e,t.apply(void 0,[e].concat(o)))),e}),{className:"",style:{}});return l.className||delete l.className,0===(0,i.default)(l.style).length&&delete l.style,l},x=t.invertTheme=function(e){return(0,i.default)(e).reduce((function(t,r){return t[r]=/^base/.test(r)?g(e[r]):"scheme"===r?e[r]+":inverted":e[r],t}),{})},w=(t.createStyling=(0,s.default)((function(e){for(var t=arguments.length,r=Array(t>3?t-3:0),n=3;n<t;n++)r[n-3]=arguments[n];var o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},l=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},c=o.defaultBase16,u=void 0===c?h:c,d=o.base16Themes,p=w(l,void 0===d?null:d);p&&(l=(0,a.default)({},p,l));var f=m.reduce((function(e,t){return e[t]=l[t]||u[t],e}),{}),g=(0,i.default)(l).reduce((function(e,t){return-1===m.indexOf(t)?(e[t]=l[t],e):e}),{}),b=e(f),x=v(g,b);return(0,s.default)(y,2).apply(void 0,[x].concat(r))}),3),t.getBase16Theme=function(e,t){if(e&&e.extend&&(e=e.extend),"string"==typeof e){var r=e.split(":"),n=(0,o.default)(r,2),a=n[0],i=n[1];e=(t||{})[a]||l[a],"inverted"===i&&(e=x(e))}return e&&e.hasOwnProperty("base00")?e:void 0})},function(e,t,r){"use strict";var n,a="object"==typeof Reflect?Reflect:null,o=a&&"function"==typeof a.apply?a.apply:function(e,t,r){return Function.prototype.apply.call(e,t,r)};n=a&&"function"==typeof a.ownKeys?a.ownKeys:Object.getOwnPropertySymbols?function(e){return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))}:function(e){return Object.getOwnPropertyNames(e)};var i=Number.isNaN||function(e){return e!=e};function s(){s.init.call(this)}e.exports=s,e.exports.once=function(e,t){return new Promise((function(r,n){function a(){void 0!==o&&e.removeListener("error",o),r([].slice.call(arguments))}var o;"error"!==t&&(o=function(r){e.removeListener(t,a),n(r)},e.once("error",o)),e.once(t,a)}))},s.EventEmitter=s,s.prototype._events=void 0,s.prototype._eventsCount=0,s.prototype._maxListeners=void 0;var l=10;function c(e){if("function"!=typeof e)throw new TypeError('The "listener" argument must be of type Function. Received type '+typeof e)}function u(e){return void 0===e._maxListeners?s.defaultMaxListeners:e._maxListeners}function d(e,t,r,n){var a,o,i,s;if(c(r),void 0===(o=e._events)?(o=e._events=Object.create(null),e._eventsCount=0):(void 0!==o.newListener&&(e.emit("newListener",t,r.listener?r.listener:r),o=e._events),i=o[t]),void 0===i)i=o[t]=r,++e._eventsCount;else if("function"==typeof i?i=o[t]=n?[r,i]:[i,r]:n?i.unshift(r):i.push(r),(a=u(e))>0&&i.length>a&&!i.warned){i.warned=!0;var l=new Error("Possible EventEmitter memory leak detected. "+i.length+" "+String(t)+" listeners added. Use emitter.setMaxListeners() to increase limit");l.name="MaxListenersExceededWarning",l.emitter=e,l.type=t,l.count=i.length,s=l,console&&console.warn&&console.warn(s)}return e}function p(){if(!this.fired)return this.target.removeListener(this.type,this.wrapFn),this.fired=!0,0===arguments.length?this.listener.call(this.target):this.listener.apply(this.target,arguments)}function f(e,t,r){var n={fired:!1,wrapFn:void 0,target:e,type:t,listener:r},a=p.bind(n);return a.listener=r,n.wrapFn=a,a}function h(e,t,r){var n=e._events;if(void 0===n)return[];var a=n[t];return void 0===a?[]:"function"==typeof a?r?[a.listener||a]:[a]:r?function(e){for(var t=new Array(e.length),r=0;r<t.length;++r)t[r]=e[r].listener||e[r];return t}(a):g(a,a.length)}function m(e){var t=this._events;if(void 0!==t){var r=t[e];if("function"==typeof r)return 1;if(void 0!==r)return r.length}return 0}function g(e,t){for(var r=new Array(t),n=0;n<t;++n)r[n]=e[n];return r}Object.defineProperty(s,"defaultMaxListeners",{enumerable:!0,get:function(){return l},set:function(e){if("number"!=typeof e||e<0||i(e))throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received '+e+".");l=e}}),s.init=function(){void 0!==this._events&&this._events!==Object.getPrototypeOf(this)._events||(this._events=Object.create(null),this._eventsCount=0),this._maxListeners=this._maxListeners||void 0},s.prototype.setMaxListeners=function(e){if("number"!=typeof e||e<0||i(e))throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received '+e+".");return this._maxListeners=e,this},s.prototype.getMaxListeners=function(){return u(this)},s.prototype.emit=function(e){for(var t=[],r=1;r<arguments.length;r++)t.push(arguments[r]);var n="error"===e,a=this._events;if(void 0!==a)n=n&&void 0===a.error;else if(!n)return!1;if(n){var i;if(t.length>0&&(i=t[0]),i instanceof Error)throw i;var s=new Error("Unhandled error."+(i?" ("+i.message+")":""));throw s.context=i,s}var l=a[e];if(void 0===l)return!1;if("function"==typeof l)o(l,this,t);else{var c=l.length,u=g(l,c);for(r=0;r<c;++r)o(u[r],this,t)}return!0},s.prototype.addListener=function(e,t){return d(this,e,t,!1)},s.prototype.on=s.prototype.addListener,s.prototype.prependListener=function(e,t){return d(this,e,t,!0)},s.prototype.once=function(e,t){return c(t),this.on(e,f(this,e,t)),this},s.prototype.prependOnceListener=function(e,t){return c(t),this.prependListener(e,f(this,e,t)),this},s.prototype.removeListener=function(e,t){var r,n,a,o,i;if(c(t),void 0===(n=this._events))return this;if(void 0===(r=n[e]))return this;if(r===t||r.listener===t)0==--this._eventsCount?this._events=Object.create(null):(delete n[e],n.removeListener&&this.emit("removeListener",e,r.listener||t));else if("function"!=typeof r){for(a=-1,o=r.length-1;o>=0;o--)if(r[o]===t||r[o].listener===t){i=r[o].listener,a=o;break}if(a<0)return this;0===a?r.shift():function(e,t){for(;t+1<e.length;t++)e[t]=e[t+1];e.pop()}(r,a),1===r.length&&(n[e]=r[0]),void 0!==n.removeListener&&this.emit("removeListener",e,i||t)}return this},s.prototype.off=s.prototype.removeListener,s.prototype.removeAllListeners=function(e){var t,r,n;if(void 0===(r=this._events))return this;if(void 0===r.removeListener)return 0===arguments.length?(this._events=Object.create(null),this._eventsCount=0):void 0!==r[e]&&(0==--this._eventsCount?this._events=Object.create(null):delete r[e]),this;if(0===arguments.length){var a,o=Object.keys(r);for(n=0;n<o.length;++n)"removeListener"!==(a=o[n])&&this.removeAllListeners(a);return this.removeAllListeners("removeListener"),this._events=Object.create(null),this._eventsCount=0,this}if("function"==typeof(t=r[e]))this.removeListener(e,t);else if(void 0!==t)for(n=t.length-1;n>=0;n--)this.removeListener(e,t[n]);return this},s.prototype.listeners=function(e){return h(this,e,!0)},s.prototype.rawListeners=function(e){return h(this,e,!1)},s.listenerCount=function(e,t){return"function"==typeof e.listenerCount?e.listenerCount(t):m.call(e,t)},s.prototype.listenerCount=m,s.prototype.eventNames=function(){return this._eventsCount>0?n(this._events):[]}},function(e,t,r){e.exports.Dispatcher=r(140)},function(e,t,r){e.exports=r(142)},function(e,t,r){"use strict";t.__esModule=!0;var n=i(r(50)),a=i(r(65)),o="function"==typeof a.default&&"symbol"==typeof n.default?function(e){return typeof e}:function(e){return e&&"function"==typeof a.default&&e.constructor===a.default&&e!==a.default.prototype?"symbol":typeof e};function i(e){return e&&e.__esModule?e:{default:e}}t.default="function"==typeof a.default&&"symbol"===o(n.default)?function(e){return void 0===e?"undefined":o(e)}:function(e){return e&&"function"==typeof a.default&&e.constructor===a.default&&e!==a.default.prototype?"symbol":void 0===e?"undefined":o(e)}},function(e,t,r){e.exports={default:r(51),__esModule:!0}},function(e,t,r){r(20),r(29),e.exports=r(30).f("iterator")},function(e,t,r){var n=r(21),a=r(22);e.exports=function(e){return function(t,r){var o,i,s=String(a(t)),l=n(r),c=s.length;return l<0||l>=c?e?"":void 0:(o=s.charCodeAt(l))<55296||o>56319||l+1===c||(i=s.charCodeAt(l+1))<56320||i>57343?e?s.charAt(l):o:e?s.slice(l,l+2):i-56320+(o-55296<<10)+65536}}},function(e,t,r){var n=r(54);e.exports=function(e,t,r){if(n(e),void 0===t)return e;switch(r){case 1:return function(r){return e.call(t,r)};case 2:return function(r,n){return e.call(t,r,n)};case 3:return function(r,n,a){return e.call(t,r,n,a)}}return function(){return e.apply(t,arguments)}}},function(e,t){e.exports=function(e){if("function"!=typeof e)throw TypeError(e+" is not a function!");return e}},function(e,t,r){"use strict";var n=r(38),a=r(16),o=r(28),i={};r(6)(i,r(2)("iterator"),(function(){return this})),e.exports=function(e,t,r){e.prototype=n(i,{next:a(1,r)}),o(e,t+" Iterator")}},function(e,t,r){var n=r(7),a=r(10),o=r(13);e.exports=r(4)?Object.defineProperties:function(e,t){a(e);for(var r,i=o(t),s=i.length,l=0;s>l;)n.f(e,r=i[l++],t[r]);return e}},function(e,t,r){var n=r(9),a=r(58),o=r(59);e.exports=function(e){return function(t,r,i){var s,l=n(t),c=a(l.length),u=o(i,c);if(e&&r!=r){for(;c>u;)if((s=l[u++])!=s)return!0}else for(;c>u;u++)if((e||u in l)&&l[u]===r)return e||u||0;return!e&&-1}}},function(e,t,r){var n=r(21),a=Math.min;e.exports=function(e){return e>0?a(n(e),9007199254740991):0}},function(e,t,r){var n=r(21),a=Math.max,o=Math.min;e.exports=function(e,t){return(e=n(e))<0?a(e+t,0):o(e,t)}},function(e,t,r){var n=r(3).document;e.exports=n&&n.documentElement},function(e,t,r){var n=r(5),a=r(18),o=r(25)("IE_PROTO"),i=Object.prototype;e.exports=Object.getPrototypeOf||function(e){return e=a(e),n(e,o)?e[o]:"function"==typeof e.constructor&&e instanceof e.constructor?e.constructor.prototype:e instanceof Object?i:null}},function(e,t,r){"use strict";var n=r(63),a=r(64),o=r(12),i=r(9);e.exports=r(34)(Array,"Array",(function(e,t){this._t=i(e),this._i=0,this._k=t}),(function(){var e=this._t,t=this._k,r=this._i++;return!e||r>=e.length?(this._t=void 0,a(1)):a(0,"keys"==t?r:"values"==t?e[r]:[r,e[r]])}),"values"),o.Arguments=o.Array,n("keys"),n("values"),n("entries")},function(e,t){e.exports=function(){}},function(e,t){e.exports=function(e,t){return{value:t,done:!!e}}},function(e,t,r){e.exports={default:r(66),__esModule:!0}},function(e,t,r){r(67),r(73),r(74),r(75),e.exports=r(1).Symbol},function(e,t,r){"use strict";var n=r(3),a=r(5),o=r(4),i=r(15),s=r(37),l=r(68).KEY,c=r(8),u=r(26),d=r(28),p=r(17),f=r(2),h=r(30),m=r(31),g=r(69),b=r(70),v=r(10),y=r(11),x=r(18),w=r(9),k=r(23),S=r(16),j=r(38),E=r(71),C=r(72),_=r(32),O=r(7),P=r(13),A=C.f,T=O.f,z=E.f,I=n.Symbol,D=n.JSON,R=D&&D.stringify,N=f("_hidden"),M=f("toPrimitive"),L={}.propertyIsEnumerable,F=u("symbol-registry"),$=u("symbols"),B=u("op-symbols"),q=Object.prototype,W="function"==typeof I&&!!_.f,U=n.QObject,V=!U||!U.prototype||!U.prototype.findChild,H=o&&c((function(){return 7!=j(T({},"a",{get:function(){return T(this,"a",{value:7}).a}})).a}))?function(e,t,r){var n=A(q,t);n&&delete q[t],T(e,t,r),n&&e!==q&&T(q,t,n)}:T,K=function(e){var t=$[e]=j(I.prototype);return t._k=e,t},G=W&&"symbol"==typeof I.iterator?function(e){return"symbol"==typeof e}:function(e){return e instanceof I},Y=function(e,t,r){return e===q&&Y(B,t,r),v(e),t=k(t,!0),v(r),a($,t)?(r.enumerable?(a(e,N)&&e[N][t]&&(e[N][t]=!1),r=j(r,{enumerable:S(0,!1)})):(a(e,N)||T(e,N,S(1,{})),e[N][t]=!0),H(e,t,r)):T(e,t,r)},J=function(e,t){v(e);for(var r,n=g(t=w(t)),a=0,o=n.length;o>a;)Y(e,r=n[a++],t[r]);return e},Q=function(e){var t=L.call(this,e=k(e,!0));return!(this===q&&a($,e)&&!a(B,e))&&(!(t||!a(this,e)||!a($,e)||a(this,N)&&this[N][e])||t)},X=function(e,t){if(e=w(e),t=k(t,!0),e!==q||!a($,t)||a(B,t)){var r=A(e,t);return!r||!a($,t)||a(e,N)&&e[N][t]||(r.enumerable=!0),r}},Z=function(e){for(var t,r=z(w(e)),n=[],o=0;r.length>o;)a($,t=r[o++])||t==N||t==l||n.push(t);return n},ee=function(e){for(var t,r=e===q,n=z(r?B:w(e)),o=[],i=0;n.length>i;)!a($,t=n[i++])||r&&!a(q,t)||o.push($[t]);return o};W||(s((I=function(){if(this instanceof I)throw TypeError("Symbol is not a constructor!");var e=p(arguments.length>0?arguments[0]:void 0),t=function(r){this===q&&t.call(B,r),a(this,N)&&a(this[N],e)&&(this[N][e]=!1),H(this,e,S(1,r))};return o&&V&&H(q,e,{configurable:!0,set:t}),K(e)}).prototype,"toString",(function(){return this._k})),C.f=X,O.f=Y,r(41).f=E.f=Z,r(19).f=Q,_.f=ee,o&&!r(14)&&s(q,"propertyIsEnumerable",Q,!0),h.f=function(e){return K(f(e))}),i(i.G+i.W+i.F*!W,{Symbol:I});for(var te="hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),re=0;te.length>re;)f(te[re++]);for(var ne=P(f.store),ae=0;ne.length>ae;)m(ne[ae++]);i(i.S+i.F*!W,"Symbol",{for:function(e){return a(F,e+="")?F[e]:F[e]=I(e)},keyFor:function(e){if(!G(e))throw TypeError(e+" is not a symbol!");for(var t in F)if(F[t]===e)return t},useSetter:function(){V=!0},useSimple:function(){V=!1}}),i(i.S+i.F*!W,"Object",{create:function(e,t){return void 0===t?j(e):J(j(e),t)},defineProperty:Y,defineProperties:J,getOwnPropertyDescriptor:X,getOwnPropertyNames:Z,getOwnPropertySymbols:ee});var oe=c((function(){_.f(1)}));i(i.S+i.F*oe,"Object",{getOwnPropertySymbols:function(e){return _.f(x(e))}}),D&&i(i.S+i.F*(!W||c((function(){var e=I();return"[null]"!=R([e])||"{}"!=R({a:e})||"{}"!=R(Object(e))}))),"JSON",{stringify:function(e){for(var t,r,n=[e],a=1;arguments.length>a;)n.push(arguments[a++]);if(r=t=n[1],(y(t)||void 0!==e)&&!G(e))return b(t)||(t=function(e,t){if("function"==typeof r&&(t=r.call(this,e,t)),!G(t))return t}),n[1]=t,R.apply(D,n)}}),I.prototype[M]||r(6)(I.prototype,M,I.prototype.valueOf),d(I,"Symbol"),d(Math,"Math",!0),d(n.JSON,"JSON",!0)},function(e,t,r){var n=r(17)("meta"),a=r(11),o=r(5),i=r(7).f,s=0,l=Object.isExtensible||function(){return!0},c=!r(8)((function(){return l(Object.preventExtensions({}))})),u=function(e){i(e,n,{value:{i:"O"+ ++s,w:{}}})},d=e.exports={KEY:n,NEED:!1,fastKey:function(e,t){if(!a(e))return"symbol"==typeof e?e:("string"==typeof e?"S":"P")+e;if(!o(e,n)){if(!l(e))return"F";if(!t)return"E";u(e)}return e[n].i},getWeak:function(e,t){if(!o(e,n)){if(!l(e))return!0;if(!t)return!1;u(e)}return e[n].w},onFreeze:function(e){return c&&d.NEED&&l(e)&&!o(e,n)&&u(e),e}}},function(e,t,r){var n=r(13),a=r(32),o=r(19);e.exports=function(e){var t=n(e),r=a.f;if(r)for(var i,s=r(e),l=o.f,c=0;s.length>c;)l.call(e,i=s[c++])&&t.push(i);return t}},function(e,t,r){var n=r(24);e.exports=Array.isArray||function(e){return"Array"==n(e)}},function(e,t,r){var n=r(9),a=r(41).f,o={}.toString,i="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[];e.exports.f=function(e){return i&&"[object Window]"==o.call(e)?function(e){try{return a(e)}catch(e){return i.slice()}}(e):a(n(e))}},function(e,t,r){var n=r(19),a=r(16),o=r(9),i=r(23),s=r(5),l=r(35),c=Object.getOwnPropertyDescriptor;t.f=r(4)?c:function(e,t){if(e=o(e),t=i(t,!0),l)try{return c(e,t)}catch(e){}if(s(e,t))return a(!n.f.call(e,t),e[t])}},function(e,t){},function(e,t,r){r(31)("asyncIterator")},function(e,t,r){r(31)("observable")},function(e,t,r){"use strict";t.__esModule=!0;var n,a=(n=r(77))&&n.__esModule?n:{default:n};t.default=a.default||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}},function(e,t,r){e.exports={default:r(78),__esModule:!0}},function(e,t,r){r(79),e.exports=r(1).Object.assign},function(e,t,r){var n=r(15);n(n.S+n.F,"Object",{assign:r(80)})},function(e,t,r){"use strict";var n=r(4),a=r(13),o=r(32),i=r(19),s=r(18),l=r(40),c=Object.assign;e.exports=!c||r(8)((function(){var e={},t={},r=Symbol(),n="abcdefghijklmnopqrst";return e[r]=7,n.split("").forEach((function(e){t[e]=e})),7!=c({},e)[r]||Object.keys(c({},t)).join("")!=n}))?function(e,t){for(var r=s(e),c=arguments.length,u=1,d=o.f,p=i.f;c>u;)for(var f,h=l(arguments[u++]),m=d?a(h).concat(d(h)):a(h),g=m.length,b=0;g>b;)f=m[b++],n&&!p.call(h,f)||(r[f]=h[f]);return r}:c},function(e,t,r){"use strict";t.__esModule=!0;var n=o(r(82)),a=o(r(85));function o(e){return e&&e.__esModule?e:{default:e}}t.default=function(e,t){if(Array.isArray(e))return e;if((0,n.default)(Object(e)))return function(e,t){var r=[],n=!0,o=!1,i=void 0;try{for(var s,l=(0,a.default)(e);!(n=(s=l.next()).done)&&(r.push(s.value),!t||r.length!==t);n=!0);}catch(e){o=!0,i=e}finally{try{!n&&l.return&&l.return()}finally{if(o)throw i}}return r}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}},function(e,t,r){e.exports={default:r(83),__esModule:!0}},function(e,t,r){r(29),r(20),e.exports=r(84)},function(e,t,r){var n=r(42),a=r(2)("iterator"),o=r(12);e.exports=r(1).isIterable=function(e){var t=Object(e);return void 0!==t[a]||"@@iterator"in t||o.hasOwnProperty(n(t))}},function(e,t,r){e.exports={default:r(86),__esModule:!0}},function(e,t,r){r(29),r(20),e.exports=r(87)},function(e,t,r){var n=r(10),a=r(88);e.exports=r(1).getIterator=function(e){var t=a(e);if("function"!=typeof t)throw TypeError(e+" is not iterable!");return n(t.call(e))}},function(e,t,r){var n=r(42),a=r(2)("iterator"),o=r(12);e.exports=r(1).getIteratorMethod=function(e){if(null!=e)return e[a]||e["@@iterator"]||o[n(e)]}},function(e,t,r){e.exports={default:r(90),__esModule:!0}},function(e,t,r){r(91),e.exports=r(1).Object.keys},function(e,t,r){var n=r(18),a=r(13);r(92)("keys",(function(){return function(e){return a(n(e))}}))},function(e,t,r){var n=r(15),a=r(1),o=r(8);e.exports=function(e,t){var r=(a.Object||{})[e]||Object[e],i={};i[e]=t(r),n(n.S+n.F*o((function(){r(1)})),"Object",i)}},function(e,t,r){(function(t){var r=[["ary",128],["bind",1],["bindKey",2],["curry",8],["curryRight",16],["flip",512],["partial",32],["partialRight",64],["rearg",256]],n=/^\s+|\s+$/g,a=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,o=/\{\n\/\* \[wrapped with (.+)\] \*/,i=/,? & /,s=/^[-+]0x[0-9a-f]+$/i,l=/^0b[01]+$/i,c=/^\[object .+?Constructor\]$/,u=/^0o[0-7]+$/i,d=/^(?:0|[1-9]\d*)$/,p=parseInt,f="object"==typeof t&&t&&t.Object===Object&&t,h="object"==typeof self&&self&&self.Object===Object&&self,m=f||h||Function("return this")();function g(e,t,r){switch(r.length){case 0:return e.call(t);case 1:return e.call(t,r[0]);case 2:return e.call(t,r[0],r[1]);case 3:return e.call(t,r[0],r[1],r[2])}return e.apply(t,r)}function b(e,t){return!(!e||!e.length)&&function(e,t,r){if(t!=t)return function(e,t,r,n){for(var a=e.length,o=r+(n?1:-1);n?o--:++o<a;)if(t(e[o],o,e))return o;return-1}(e,v,r);for(var n=r-1,a=e.length;++n<a;)if(e[n]===t)return n;return-1}(e,t,0)>-1}function v(e){return e!=e}function y(e,t){for(var r=e.length,n=0;r--;)e[r]===t&&n++;return n}function x(e,t){for(var r=-1,n=e.length,a=0,o=[];++r<n;){var i=e[r];i!==t&&"__lodash_placeholder__"!==i||(e[r]="__lodash_placeholder__",o[a++]=r)}return o}var w,k,S,j=Function.prototype,E=Object.prototype,C=m["__core-js_shared__"],_=(w=/[^.]+$/.exec(C&&C.keys&&C.keys.IE_PROTO||""))?"Symbol(src)_1."+w:"",O=j.toString,P=E.hasOwnProperty,A=E.toString,T=RegExp("^"+O.call(P).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),z=Object.create,I=Math.max,D=Math.min,R=(k=V(Object,"defineProperty"),(S=V.name)&&S.length>2?k:void 0);function N(e){return Z(e)?z(e):{}}function M(e){return!(!Z(e)||function(e){return!!_&&_ in e}(e))&&(function(e){var t=Z(e)?A.call(e):"";return"[object Function]"==t||"[object GeneratorFunction]"==t}(e)||function(e){var t=!1;if(null!=e&&"function"!=typeof e.toString)try{t=!!(e+"")}catch(e){}return t}(e)?T:c).test(function(e){if(null!=e){try{return O.call(e)}catch(e){}try{return e+""}catch(e){}}return""}(e))}function L(e,t,r,n){for(var a=-1,o=e.length,i=r.length,s=-1,l=t.length,c=I(o-i,0),u=Array(l+c),d=!n;++s<l;)u[s]=t[s];for(;++a<i;)(d||a<o)&&(u[r[a]]=e[a]);for(;c--;)u[s++]=e[a++];return u}function F(e,t,r,n){for(var a=-1,o=e.length,i=-1,s=r.length,l=-1,c=t.length,u=I(o-s,0),d=Array(u+c),p=!n;++a<u;)d[a]=e[a];for(var f=a;++l<c;)d[f+l]=t[l];for(;++i<s;)(p||a<o)&&(d[f+r[i]]=e[a++]);return d}function $(e){return function(){var t=arguments;switch(t.length){case 0:return new e;case 1:return new e(t[0]);case 2:return new e(t[0],t[1]);case 3:return new e(t[0],t[1],t[2]);case 4:return new e(t[0],t[1],t[2],t[3]);case 5:return new e(t[0],t[1],t[2],t[3],t[4]);case 6:return new e(t[0],t[1],t[2],t[3],t[4],t[5]);case 7:return new e(t[0],t[1],t[2],t[3],t[4],t[5],t[6])}var r=N(e.prototype),n=e.apply(r,t);return Z(n)?n:r}}function B(e,t,r,n,a,o,i,s,l,c){var u=128&t,d=1&t,p=2&t,f=24&t,h=512&t,g=p?void 0:$(e);return function b(){for(var v=arguments.length,w=Array(v),k=v;k--;)w[k]=arguments[k];if(f)var S=U(b),j=y(w,S);if(n&&(w=L(w,n,a,f)),o&&(w=F(w,o,i,f)),v-=j,f&&v<c){var E=x(w,S);return q(e,t,B,b.placeholder,r,w,E,s,l,c-v)}var C=d?r:this,_=p?C[e]:e;return v=w.length,s?w=Y(w,s):h&&v>1&&w.reverse(),u&&l<v&&(w.length=l),this&&this!==m&&this instanceof b&&(_=g||$(_)),_.apply(C,w)}}function q(e,t,r,n,a,o,i,s,l,c){var u=8&t;t|=u?32:64,4&(t&=~(u?64:32))||(t&=-4);var d=r(e,t,a,u?o:void 0,u?i:void 0,u?void 0:o,u?void 0:i,s,l,c);return d.placeholder=n,J(d,e,t)}function W(e,t,r,n,a,o,i,s){var l=2&t;if(!l&&"function"!=typeof e)throw new TypeError("Expected a function");var c=n?n.length:0;if(c||(t&=-97,n=a=void 0),i=void 0===i?i:I(te(i),0),s=void 0===s?s:te(s),c-=a?a.length:0,64&t){var u=n,d=a;n=a=void 0}var p=[e,t,r,n,a,u,d,o,i,s];if(e=p[0],t=p[1],r=p[2],n=p[3],a=p[4],!(s=p[9]=null==p[9]?l?0:e.length:I(p[9]-c,0))&&24&t&&(t&=-25),t&&1!=t)f=8==t||16==t?function(e,t,r){var n=$(e);return function a(){for(var o=arguments.length,i=Array(o),s=o,l=U(a);s--;)i[s]=arguments[s];var c=o<3&&i[0]!==l&&i[o-1]!==l?[]:x(i,l);return(o-=c.length)<r?q(e,t,B,a.placeholder,void 0,i,c,void 0,void 0,r-o):g(this&&this!==m&&this instanceof a?n:e,this,i)}}(e,t,s):32!=t&&33!=t||a.length?B.apply(void 0,p):function(e,t,r,n){var a=1&t,o=$(e);return function t(){for(var i=-1,s=arguments.length,l=-1,c=n.length,u=Array(c+s),d=this&&this!==m&&this instanceof t?o:e;++l<c;)u[l]=n[l];for(;s--;)u[l++]=arguments[++i];return g(d,a?r:this,u)}}(e,t,r,n);else var f=function(e,t,r){var n=1&t,a=$(e);return function t(){return(this&&this!==m&&this instanceof t?a:e).apply(n?r:this,arguments)}}(e,t,r);return J(f,e,t)}function U(e){return e.placeholder}function V(e,t){var r=function(e,t){return null==e?void 0:e[t]}(e,t);return M(r)?r:void 0}function H(e){var t=e.match(o);return t?t[1].split(i):[]}function K(e,t){var r=t.length,n=r-1;return t[n]=(r>1?"& ":"")+t[n],t=t.join(r>2?", ":" "),e.replace(a,"{\n/* [wrapped with "+t+"] */\n")}function G(e,t){return!!(t=null==t?9007199254740991:t)&&("number"==typeof e||d.test(e))&&e>-1&&e%1==0&&e<t}function Y(e,t){for(var r=e.length,n=D(t.length,r),a=function(e,t){var r=-1,n=e.length;for(t||(t=Array(n));++r<n;)t[r]=e[r];return t}(e);n--;){var o=t[n];e[n]=G(o,r)?a[o]:void 0}return e}var J=R?function(e,t,r){var n,a=t+"";return R(e,"toString",{configurable:!0,enumerable:!1,value:(n=K(a,Q(H(a),r)),function(){return n})})}:function(e){return e};function Q(e,t){return function(e,t){for(var r=-1,n=e?e.length:0;++r<n&&!1!==t(e[r],r,e););}(r,(function(r){var n="_."+r[0];t&r[1]&&!b(e,n)&&e.push(n)})),e.sort()}function X(e,t,r){var n=W(e,8,void 0,void 0,void 0,void 0,void 0,t=r?void 0:t);return n.placeholder=X.placeholder,n}function Z(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function ee(e){return e?(e=function(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==A.call(e)}(e))return NaN;if(Z(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=Z(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(n,"");var r=l.test(e);return r||u.test(e)?p(e.slice(2),r?2:8):s.test(e)?NaN:+e}(e))===1/0||e===-1/0?17976931348623157e292*(e<0?-1:1):e==e?e:0:0===e?e:0}function te(e){var t=ee(e),r=t%1;return t==t?r?t-r:t:0}X.placeholder={},e.exports=X}).call(this,r(43))},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e.default:e}t.__esModule=!0;var a=r(95);t.threezerotwofour=n(a);var o=r(96);t.apathy=n(o);var i=r(97);t.ashes=n(i);var s=r(98);t.atelierDune=n(s);var l=r(99);t.atelierForest=n(l);var c=r(100);t.atelierHeath=n(c);var u=r(101);t.atelierLakeside=n(u);var d=r(102);t.atelierSeaside=n(d);var p=r(103);t.bespin=n(p);var f=r(104);t.brewer=n(f);var h=r(105);t.bright=n(h);var m=r(106);t.chalk=n(m);var g=r(107);t.codeschool=n(g);var b=r(108);t.colors=n(b);var v=r(109);t.default=n(v);var y=r(110);t.eighties=n(y);var x=r(111);t.embers=n(x);var w=r(112);t.flat=n(w);var k=r(113);t.google=n(k);var S=r(114);t.grayscale=n(S);var j=r(115);t.greenscreen=n(j);var E=r(116);t.harmonic=n(E);var C=r(117);t.hopscotch=n(C);var _=r(118);t.isotope=n(_);var O=r(119);t.marrakesh=n(O);var P=r(120);t.mocha=n(P);var A=r(121);t.monokai=n(A);var T=r(122);t.ocean=n(T);var z=r(123);t.paraiso=n(z);var I=r(124);t.pop=n(I);var D=r(125);t.railscasts=n(D);var R=r(126);t.shapeshifter=n(R);var N=r(127);t.solarized=n(N);var M=r(128);t.summerfruit=n(M);var L=r(129);t.tomorrow=n(L);var F=r(130);t.tube=n(F);var $=r(131);t.twilight=n($)},function(e,t,r){"use strict";t.__esModule=!0,t.default={scheme:"threezerotwofour",author:"jan t. sott (http://github.com/idleberg)",base00:"#090300",base01:"#3a3432",base02:"#4a4543",base03:"#5c5855",base04:"#807d7c",base05:"#a5a2a2",base06:"#d6d5d4",base07:"#f7f7f7",base08:"#db2d20",base09:"#e8bbd0",base0A:"#fded02",base0B:"#01a252",base0C:"#b5e4f4",base0D:"#01a0e4",base0E:"#a16a94",base0F:"#cdab53"},e.exports=t.default},function(e,t,r){"use strict";t.__esModule=!0,t.default={scheme:"apathy",author:"jannik siebert (https://github.com/janniks)",base00:"#031A16",base01:"#0B342D",base02:"#184E45",base03:"#2B685E",base04:"#5F9C92",base05:"#81B5AC",base06:"#A7CEC8",base07:"#D2E7E4",base08:"#3E9688",base09:"#3E7996",base0A:"#3E4C96",base0B:"#883E96",base0C:"#963E4C",base0D:"#96883E",base0E:"#4C963E",base0F:"#3E965B"},e.exports=t.default},function(e,t,r){"use strict";t.__esModule=!0,t.default={scheme:"ashes",author:"jannik siebert (https://github.com/janniks)",base00:"#1C2023",base01:"#393F45",base02:"#565E65",base03:"#747C84",base04:"#ADB3BA",base05:"#C7CCD1",base06:"#DFE2E5",base07:"#F3F4F5",base08:"#C7AE95",base09:"#C7C795",base0A:"#AEC795",base0B:"#95C7AE",base0C:"#95AEC7",base0D:"#AE95C7",base0E:"#C795AE",base0F:"#C79595"},e.exports=t.default},function(e,t,r){"use strict";t.__esModule=!0,t.default={scheme:"atelier dune",author:"bram de haan (http://atelierbram.github.io/syntax-highlighting/atelier-schemes/dune)",base00:"#20201d",base01:"#292824",base02:"#6e6b5e",base03:"#7d7a68",base04:"#999580",base05:"#a6a28c",base06:"#e8e4cf",base07:"#fefbec",base08:"#d73737",base09:"#b65611",base0A:"#cfb017",base0B:"#60ac39",base0C:"#1fad83",base0D:"#6684e1",base0E:"#b854d4",base0F:"#d43552"},e.exports=t.default},function(e,t,r){"use strict";t.__esModule=!0,t.default={scheme:"atelier forest",author:"bram de haan (http://atelierbram.github.io/syntax-highlighting/atelier-schemes/forest)",base00:"#1b1918",base01:"#2c2421",base02:"#68615e",base03:"#766e6b",base04:"#9c9491",base05:"#a8a19f",base06:"#e6e2e0",base07:"#f1efee",base08:"#f22c40",base09:"#df5320",base0A:"#d5911a",base0B:"#5ab738",base0C:"#00ad9c",base0D:"#407ee7",base0E:"#6666ea",base0F:"#c33ff3"},e.exports=t.default},function(e,t,r){"use strict";t.__esModule=!0,t.default={scheme:"atelier heath",author:"bram de haan (http://atelierbram.github.io/syntax-highlighting/atelier-schemes/heath)",base00:"#1b181b",base01:"#292329",base02:"#695d69",base03:"#776977",base04:"#9e8f9e",base05:"#ab9bab",base06:"#d8cad8",base07:"#f7f3f7",base08:"#ca402b",base09:"#a65926",base0A:"#bb8a35",base0B:"#379a37",base0C:"#159393",base0D:"#516aec",base0E:"#7b59c0",base0F:"#cc33cc"},e.exports=t.default},function(e,t,r){"use strict";t.__esModule=!0,t.default={scheme:"atelier lakeside",author:"bram de haan (http://atelierbram.github.io/syntax-highlighting/atelier-schemes/lakeside/)",base00:"#161b1d",base01:"#1f292e",base02:"#516d7b",base03:"#5a7b8c",base04:"#7195a8",base05:"#7ea2b4",base06:"#c1e4f6",base07:"#ebf8ff",base08:"#d22d72",base09:"#935c25",base0A:"#8a8a0f",base0B:"#568c3b",base0C:"#2d8f6f",base0D:"#257fad",base0E:"#5d5db1",base0F:"#b72dd2"},e.exports=t.default},function(e,t,r){"use strict";t.__esModule=!0,t.default={scheme:"atelier seaside",author:"bram de haan (http://atelierbram.github.io/syntax-highlighting/atelier-schemes/seaside/)",base00:"#131513",base01:"#242924",base02:"#5e6e5e",base03:"#687d68",base04:"#809980",base05:"#8ca68c",base06:"#cfe8cf",base07:"#f0fff0",base08:"#e6193c",base09:"#87711d",base0A:"#c3c322",base0B:"#29a329",base0C:"#1999b3",base0D:"#3d62f5",base0E:"#ad2bee",base0F:"#e619c3"},e.exports=t.default},function(e,t,r){"use strict";t.__esModule=!0,t.default={scheme:"bespin",author:"jan t. sott",base00:"#28211c",base01:"#36312e",base02:"#5e5d5c",base03:"#666666",base04:"#797977",base05:"#8a8986",base06:"#9d9b97",base07:"#baae9e",base08:"#cf6a4c",base09:"#cf7d34",base0A:"#f9ee98",base0B:"#54be0d",base0C:"#afc4db",base0D:"#5ea6ea",base0E:"#9b859d",base0F:"#937121"},e.exports=t.default},function(e,t,r){"use strict";t.__esModule=!0,t.default={scheme:"brewer",author:"timoth\xe9e poisot (http://github.com/tpoisot)",base00:"#0c0d0e",base01:"#2e2f30",base02:"#515253",base03:"#737475",base04:"#959697",base05:"#b7b8b9",base06:"#dadbdc",base07:"#fcfdfe",base08:"#e31a1c",base09:"#e6550d",base0A:"#dca060",base0B:"#31a354",base0C:"#80b1d3",base0D:"#3182bd",base0E:"#756bb1",base0F:"#b15928"},e.exports=t.default},function(e,t,r){"use strict";t.__esModule=!0,t.default={scheme:"bright",author:"chris kempson (http://chriskempson.com)",base00:"#000000",base01:"#303030",base02:"#505050",base03:"#b0b0b0",base04:"#d0d0d0",base05:"#e0e0e0",base06:"#f5f5f5",base07:"#ffffff",base08:"#fb0120",base09:"#fc6d24",base0A:"#fda331",base0B:"#a1c659",base0C:"#76c7b7",base0D:"#6fb3d2",base0E:"#d381c3",base0F:"#be643c"},e.exports=t.default},function(e,t,r){"use strict";t.__esModule=!0,t.default={scheme:"chalk",author:"chris kempson (http://chriskempson.com)",base00:"#151515",base01:"#202020",base02:"#303030",base03:"#505050",base04:"#b0b0b0",base05:"#d0d0d0",base06:"#e0e0e0",base07:"#f5f5f5",base08:"#fb9fb1",base09:"#eda987",base0A:"#ddb26f",base0B:"#acc267",base0C:"#12cfc0",base0D:"#6fc2ef",base0E:"#e1a3ee",base0F:"#deaf8f"},e.exports=t.default},function(e,t,r){"use strict";t.__esModule=!0,t.default={scheme:"codeschool",author:"brettof86",base00:"#232c31",base01:"#1c3657",base02:"#2a343a",base03:"#3f4944",base04:"#84898c",base05:"#9ea7a6",base06:"#a7cfa3",base07:"#b5d8f6",base08:"#2a5491",base09:"#43820d",base0A:"#a03b1e",base0B:"#237986",base0C:"#b02f30",base0D:"#484d79",base0E:"#c59820",base0F:"#c98344"},e.exports=t.default},function(e,t,r){"use strict";t.__esModule=!0,t.default={scheme:"colors",author:"mrmrs (http://clrs.cc)",base00:"#111111",base01:"#333333",base02:"#555555",base03:"#777777",base04:"#999999",base05:"#bbbbbb",base06:"#dddddd",base07:"#ffffff",base08:"#ff4136",base09:"#ff851b",base0A:"#ffdc00",base0B:"#2ecc40",base0C:"#7fdbff",base0D:"#0074d9",base0E:"#b10dc9",base0F:"#85144b"},e.exports=t.default},function(e,t,r){"use strict";t.__esModule=!0,t.default={scheme:"default",author:"chris kempson (http://chriskempson.com)",base00:"#181818",base01:"#282828",base02:"#383838",base03:"#585858",base04:"#b8b8b8",base05:"#d8d8d8",base06:"#e8e8e8",base07:"#f8f8f8",base08:"#ab4642",base09:"#dc9656",base0A:"#f7ca88",base0B:"#a1b56c",base0C:"#86c1b9",base0D:"#7cafc2",base0E:"#ba8baf",base0F:"#a16946"},e.exports=t.default},function(e,t,r){"use strict";t.__esModule=!0,t.default={scheme:"eighties",author:"chris kempson (http://chriskempson.com)",base00:"#2d2d2d",base01:"#393939",base02:"#515151",base03:"#747369",base04:"#a09f93",base05:"#d3d0c8",base06:"#e8e6df",base07:"#f2f0ec",base08:"#f2777a",base09:"#f99157",base0A:"#ffcc66",base0B:"#99cc99",base0C:"#66cccc",base0D:"#6699cc",base0E:"#cc99cc",base0F:"#d27b53"},e.exports=t.default},function(e,t,r){"use strict";t.__esModule=!0,t.default={scheme:"embers",author:"jannik siebert (https://github.com/janniks)",base00:"#16130F",base01:"#2C2620",base02:"#433B32",base03:"#5A5047",base04:"#8A8075",base05:"#A39A90",base06:"#BEB6AE",base07:"#DBD6D1",base08:"#826D57",base09:"#828257",base0A:"#6D8257",base0B:"#57826D",base0C:"#576D82",base0D:"#6D5782",base0E:"#82576D",base0F:"#825757"},e.exports=t.default},function(e,t,r){"use strict";t.__esModule=!0,t.default={scheme:"flat",author:"chris kempson (http://chriskempson.com)",base00:"#2C3E50",base01:"#34495E",base02:"#7F8C8D",base03:"#95A5A6",base04:"#BDC3C7",base05:"#e0e0e0",base06:"#f5f5f5",base07:"#ECF0F1",base08:"#E74C3C",base09:"#E67E22",base0A:"#F1C40F",base0B:"#2ECC71",base0C:"#1ABC9C",base0D:"#3498DB",base0E:"#9B59B6",base0F:"#be643c"},e.exports=t.default},function(e,t,r){"use strict";t.__esModule=!0,t.default={scheme:"google",author:"seth wright (http://sethawright.com)",base00:"#1d1f21",base01:"#282a2e",base02:"#373b41",base03:"#969896",base04:"#b4b7b4",base05:"#c5c8c6",base06:"#e0e0e0",base07:"#ffffff",base08:"#CC342B",base09:"#F96A38",base0A:"#FBA922",base0B:"#198844",base0C:"#3971ED",base0D:"#3971ED",base0E:"#A36AC7",base0F:"#3971ED"},e.exports=t.default},function(e,t,r){"use strict";t.__esModule=!0,t.default={scheme:"grayscale",author:"alexandre gavioli (https://github.com/alexx2/)",base00:"#101010",base01:"#252525",base02:"#464646",base03:"#525252",base04:"#ababab",base05:"#b9b9b9",base06:"#e3e3e3",base07:"#f7f7f7",base08:"#7c7c7c",base09:"#999999",base0A:"#a0a0a0",base0B:"#8e8e8e",base0C:"#868686",base0D:"#686868",base0E:"#747474",base0F:"#5e5e5e"},e.exports=t.default},function(e,t,r){"use strict";t.__esModule=!0,t.default={scheme:"green screen",author:"chris kempson (http://chriskempson.com)",base00:"#001100",base01:"#003300",base02:"#005500",base03:"#007700",base04:"#009900",base05:"#00bb00",base06:"#00dd00",base07:"#00ff00",base08:"#007700",base09:"#009900",base0A:"#007700",base0B:"#00bb00",base0C:"#005500",base0D:"#009900",base0E:"#00bb00",base0F:"#005500"},e.exports=t.default},function(e,t,r){"use strict";t.__esModule=!0,t.default={scheme:"harmonic16",author:"jannik siebert (https://github.com/janniks)",base00:"#0b1c2c",base01:"#223b54",base02:"#405c79",base03:"#627e99",base04:"#aabcce",base05:"#cbd6e2",base06:"#e5ebf1",base07:"#f7f9fb",base08:"#bf8b56",base09:"#bfbf56",base0A:"#8bbf56",base0B:"#56bf8b",base0C:"#568bbf",base0D:"#8b56bf",base0E:"#bf568b",base0F:"#bf5656"},e.exports=t.default},function(e,t,r){"use strict";t.__esModule=!0,t.default={scheme:"hopscotch",author:"jan t. sott",base00:"#322931",base01:"#433b42",base02:"#5c545b",base03:"#797379",base04:"#989498",base05:"#b9b5b8",base06:"#d5d3d5",base07:"#ffffff",base08:"#dd464c",base09:"#fd8b19",base0A:"#fdcc59",base0B:"#8fc13e",base0C:"#149b93",base0D:"#1290bf",base0E:"#c85e7c",base0F:"#b33508"},e.exports=t.default},function(e,t,r){"use strict";t.__esModule=!0,t.default={scheme:"isotope",author:"jan t. sott",base00:"#000000",base01:"#404040",base02:"#606060",base03:"#808080",base04:"#c0c0c0",base05:"#d0d0d0",base06:"#e0e0e0",base07:"#ffffff",base08:"#ff0000",base09:"#ff9900",base0A:"#ff0099",base0B:"#33ff00",base0C:"#00ffff",base0D:"#0066ff",base0E:"#cc00ff",base0F:"#3300ff"},e.exports=t.default},function(e,t,r){"use strict";t.__esModule=!0,t.default={scheme:"marrakesh",author:"alexandre gavioli (http://github.com/alexx2/)",base00:"#201602",base01:"#302e00",base02:"#5f5b17",base03:"#6c6823",base04:"#86813b",base05:"#948e48",base06:"#ccc37a",base07:"#faf0a5",base08:"#c35359",base09:"#b36144",base0A:"#a88339",base0B:"#18974e",base0C:"#75a738",base0D:"#477ca1",base0E:"#8868b3",base0F:"#b3588e"},e.exports=t.default},function(e,t,r){"use strict";t.__esModule=!0,t.default={scheme:"mocha",author:"chris kempson (http://chriskempson.com)",base00:"#3B3228",base01:"#534636",base02:"#645240",base03:"#7e705a",base04:"#b8afad",base05:"#d0c8c6",base06:"#e9e1dd",base07:"#f5eeeb",base08:"#cb6077",base09:"#d28b71",base0A:"#f4bc87",base0B:"#beb55b",base0C:"#7bbda4",base0D:"#8ab3b5",base0E:"#a89bb9",base0F:"#bb9584"},e.exports=t.default},function(e,t,r){"use strict";t.__esModule=!0,t.default={scheme:"monokai",author:"wimer hazenberg (http://www.monokai.nl)",base00:"#272822",base01:"#383830",base02:"#49483e",base03:"#75715e",base04:"#a59f85",base05:"#f8f8f2",base06:"#f5f4f1",base07:"#f9f8f5",base08:"#f92672",base09:"#fd971f",base0A:"#f4bf75",base0B:"#a6e22e",base0C:"#a1efe4",base0D:"#66d9ef",base0E:"#ae81ff",base0F:"#cc6633"},e.exports=t.default},function(e,t,r){"use strict";t.__esModule=!0,t.default={scheme:"ocean",author:"chris kempson (http://chriskempson.com)",base00:"#2b303b",base01:"#343d46",base02:"#4f5b66",base03:"#65737e",base04:"#a7adba",base05:"#c0c5ce",base06:"#dfe1e8",base07:"#eff1f5",base08:"#bf616a",base09:"#d08770",base0A:"#ebcb8b",base0B:"#a3be8c",base0C:"#96b5b4",base0D:"#8fa1b3",base0E:"#b48ead",base0F:"#ab7967"},e.exports=t.default},function(e,t,r){"use strict";t.__esModule=!0,t.default={scheme:"paraiso",author:"jan t. sott",base00:"#2f1e2e",base01:"#41323f",base02:"#4f424c",base03:"#776e71",base04:"#8d8687",base05:"#a39e9b",base06:"#b9b6b0",base07:"#e7e9db",base08:"#ef6155",base09:"#f99b15",base0A:"#fec418",base0B:"#48b685",base0C:"#5bc4bf",base0D:"#06b6ef",base0E:"#815ba4",base0F:"#e96ba8"},e.exports=t.default},function(e,t,r){"use strict";t.__esModule=!0,t.default={scheme:"pop",author:"chris kempson (http://chriskempson.com)",base00:"#000000",base01:"#202020",base02:"#303030",base03:"#505050",base04:"#b0b0b0",base05:"#d0d0d0",base06:"#e0e0e0",base07:"#ffffff",base08:"#eb008a",base09:"#f29333",base0A:"#f8ca12",base0B:"#37b349",base0C:"#00aabb",base0D:"#0e5a94",base0E:"#b31e8d",base0F:"#7a2d00"},e.exports=t.default},function(e,t,r){"use strict";t.__esModule=!0,t.default={scheme:"railscasts",author:"ryan bates (http://railscasts.com)",base00:"#2b2b2b",base01:"#272935",base02:"#3a4055",base03:"#5a647e",base04:"#d4cfc9",base05:"#e6e1dc",base06:"#f4f1ed",base07:"#f9f7f3",base08:"#da4939",base09:"#cc7833",base0A:"#ffc66d",base0B:"#a5c261",base0C:"#519f50",base0D:"#6d9cbe",base0E:"#b6b3eb",base0F:"#bc9458"},e.exports=t.default},function(e,t,r){"use strict";t.__esModule=!0,t.default={scheme:"shapeshifter",author:"tyler benziger (http://tybenz.com)",base00:"#000000",base01:"#040404",base02:"#102015",base03:"#343434",base04:"#555555",base05:"#ababab",base06:"#e0e0e0",base07:"#f9f9f9",base08:"#e92f2f",base09:"#e09448",base0A:"#dddd13",base0B:"#0ed839",base0C:"#23edda",base0D:"#3b48e3",base0E:"#f996e2",base0F:"#69542d"},e.exports=t.default},function(e,t,r){"use strict";t.__esModule=!0,t.default={scheme:"solarized",author:"ethan schoonover (http://ethanschoonover.com/solarized)",base00:"#002b36",base01:"#073642",base02:"#586e75",base03:"#657b83",base04:"#839496",base05:"#93a1a1",base06:"#eee8d5",base07:"#fdf6e3",base08:"#dc322f",base09:"#cb4b16",base0A:"#b58900",base0B:"#859900",base0C:"#2aa198",base0D:"#268bd2",base0E:"#6c71c4",base0F:"#d33682"},e.exports=t.default},function(e,t,r){"use strict";t.__esModule=!0,t.default={scheme:"summerfruit",author:"christopher corley (http://cscorley.github.io/)",base00:"#151515",base01:"#202020",base02:"#303030",base03:"#505050",base04:"#B0B0B0",base05:"#D0D0D0",base06:"#E0E0E0",base07:"#FFFFFF",base08:"#FF0086",base09:"#FD8900",base0A:"#ABA800",base0B:"#00C918",base0C:"#1faaaa",base0D:"#3777E6",base0E:"#AD00A1",base0F:"#cc6633"},e.exports=t.default},function(e,t,r){"use strict";t.__esModule=!0,t.default={scheme:"tomorrow",author:"chris kempson (http://chriskempson.com)",base00:"#1d1f21",base01:"#282a2e",base02:"#373b41",base03:"#969896",base04:"#b4b7b4",base05:"#c5c8c6",base06:"#e0e0e0",base07:"#ffffff",base08:"#cc6666",base09:"#de935f",base0A:"#f0c674",base0B:"#b5bd68",base0C:"#8abeb7",base0D:"#81a2be",base0E:"#b294bb",base0F:"#a3685a"},e.exports=t.default},function(e,t,r){"use strict";t.__esModule=!0,t.default={scheme:"london tube",author:"jan t. sott",base00:"#231f20",base01:"#1c3f95",base02:"#5a5758",base03:"#737171",base04:"#959ca1",base05:"#d9d8d8",base06:"#e7e7e8",base07:"#ffffff",base08:"#ee2e24",base09:"#f386a1",base0A:"#ffd204",base0B:"#00853e",base0C:"#85cebc",base0D:"#009ddc",base0E:"#98005d",base0F:"#b06110"},e.exports=t.default},function(e,t,r){"use strict";t.__esModule=!0,t.default={scheme:"twilight",author:"david hart (http://hart-dev.com)",base00:"#1e1e1e",base01:"#323537",base02:"#464b50",base03:"#5f5a60",base04:"#838184",base05:"#a7a7a7",base06:"#c3c3c3",base07:"#ffffff",base08:"#cf6a4c",base09:"#cda869",base0A:"#f9ee98",base0B:"#8f9d6a",base0C:"#afc4db",base0D:"#7587a6",base0E:"#9b859d",base0F:"#9b703f"},e.exports=t.default},function(e,t,r){var n=r(33);function a(e){var t=Math.round(n(e,0,255)).toString(16);return 1==t.length?"0"+t:t}e.exports=function(e){var t=4===e.length?a(255*e[3]):"";return"#"+a(e[0])+a(e[1])+a(e[2])+t}},function(e,t,r){var n=r(134),a=r(135),o=r(136),i=r(137),s={"#":a,hsl:function(e){var t=n(e),r=i(t);return 4===t.length&&r.push(t[3]),r},rgb:o};function l(e){for(var t in s)if(0===e.indexOf(t))return s[t](e)}l.rgb=o,l.hsl=n,l.hex=a,e.exports=l},function(e,t,r){var n=r(44),a=r(33);function o(e,t){switch(e=parseFloat(e),t){case 0:return a(e,0,360);case 1:case 2:return a(e,0,100);case 3:return a(e,0,1)}}e.exports=function(e){return n(e).map(o)}},function(e,t){e.exports=function(e){4!==e.length&&5!==e.length||(e=function(e){for(var t="#",r=1;r<e.length;r++){var n=e.charAt(r);t+=n+n}return t}(e));var t=[parseInt(e.substring(1,3),16),parseInt(e.substring(3,5),16),parseInt(e.substring(5,7),16)];if(9===e.length){var r=parseFloat((parseInt(e.substring(7,9),16)/255).toFixed(2));t.push(r)}return t}},function(e,t,r){var n=r(44),a=r(33);function o(e,t){return t<3?-1!=e.indexOf("%")?Math.round(255*a(parseInt(e,10),0,100)/100):a(parseInt(e,10),0,255):a(parseFloat(e),0,1)}e.exports=function(e){return n(e).map(o)}},function(e,t){e.exports=function(e){var t,r,n,a,o,i=e[0]/360,s=e[1]/100,l=e[2]/100;if(0==s)return[o=255*l,o,o];t=2*l-(r=l<.5?l*(1+s):l+s-l*s),a=[0,0,0];for(var c=0;c<3;c++)(n=i+1/3*-(c-1))<0&&n++,n>1&&n--,o=6*n<1?t+6*(r-t)*n:2*n<1?r:3*n<2?t+(r-t)*(2/3-n)*6:t,a[c]=255*o;return a}},function(e,t,r){(function(t){var r="object"==typeof t&&t&&t.Object===Object&&t,n="object"==typeof self&&self&&self.Object===Object&&self,a=r||n||Function("return this")();function o(e,t,r){switch(r.length){case 0:return e.call(t);case 1:return e.call(t,r[0]);case 2:return e.call(t,r[0],r[1]);case 3:return e.call(t,r[0],r[1],r[2])}return e.apply(t,r)}function i(e,t){for(var r=-1,n=t.length,a=e.length;++r<n;)e[a+r]=t[r];return e}var s=Object.prototype,l=s.hasOwnProperty,c=s.toString,u=a.Symbol,d=s.propertyIsEnumerable,p=u?u.isConcatSpreadable:void 0,f=Math.max;function h(e){return v(e)||function(e){return function(e){return function(e){return!!e&&"object"==typeof e}(e)&&function(e){return null!=e&&function(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=9007199254740991}(e.length)&&!function(e){var t=function(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}(e)?c.call(e):"";return"[object Function]"==t||"[object GeneratorFunction]"==t}(e)}(e)}(e)&&l.call(e,"callee")&&(!d.call(e,"callee")||"[object Arguments]"==c.call(e))}(e)||!!(p&&e&&e[p])}var m,g,b,v=Array.isArray,y=(g=function(e){var t=(e=function e(t,r,n,a,o){var s=-1,l=t.length;for(n||(n=h),o||(o=[]);++s<l;){var c=t[s];r>0&&n(c)?r>1?e(c,r-1,n,a,o):i(o,c):a||(o[o.length]=c)}return o}(e,1)).length,r=t;for(m&&e.reverse();r--;)if("function"!=typeof e[r])throw new TypeError("Expected a function");return function(){for(var r=0,n=t?e[r].apply(this,arguments):arguments[0];++r<t;)n=e[r].call(this,n);return n}},b=f(void 0===b?g.length-1:b,0),function(){for(var e=arguments,t=-1,r=f(e.length-b,0),n=Array(r);++t<r;)n[t]=e[b+t];t=-1;for(var a=Array(b+1);++t<b;)a[t]=e[t];return a[b]=n,o(g,this,a)});e.exports=y}).call(this,r(43))},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.yuv2rgb=function(e){var t,r,n,a=e[0],o=e[1],i=e[2];return t=1*a+0*o+1.13983*i,r=1*a+-.39465*o+-.5806*i,n=1*a+2.02311*o+0*i,[255*(t=Math.min(Math.max(0,t),1)),255*(r=Math.min(Math.max(0,r),1)),255*(n=Math.min(Math.max(0,n),1))]},t.rgb2yuv=function(e){var t=e[0]/255,r=e[1]/255,n=e[2]/255;return[.299*t+.587*r+.114*n,-.14713*t+-.28886*r+.436*n,.615*t+-.51499*r+-.10001*n]}},function(e,t,r){"use strict";function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var a=r(141),o=function(){function e(){n(this,"_callbacks",void 0),n(this,"_isDispatching",void 0),n(this,"_isHandled",void 0),n(this,"_isPending",void 0),n(this,"_lastID",void 0),n(this,"_pendingPayload",void 0),this._callbacks={},this._isDispatching=!1,this._isHandled={},this._isPending={},this._lastID=1}var t=e.prototype;return t.register=function(e){var t="ID_"+this._lastID++;return this._callbacks[t]=e,t},t.unregister=function(e){this._callbacks[e]||a(!1),delete this._callbacks[e]},t.waitFor=function(e){this._isDispatching||a(!1);for(var t=0;t<e.length;t++){var r=e[t];this._isPending[r]?this._isHandled[r]||a(!1):(this._callbacks[r]||a(!1),this._invokeCallback(r))}},t.dispatch=function(e){this._isDispatching&&a(!1),this._startDispatching(e);try{for(var t in this._callbacks)this._isPending[t]||this._invokeCallback(t)}finally{this._stopDispatching()}},t.isDispatching=function(){return this._isDispatching},t._invokeCallback=function(e){this._isPending[e]=!0,this._callbacks[e](this._pendingPayload),this._isHandled[e]=!0},t._startDispatching=function(e){for(var t in this._callbacks)this._isPending[t]=!1,this._isHandled[t]=!1;this._pendingPayload=e,this._isDispatching=!0},t._stopDispatching=function(){delete this._pendingPayload,this._isDispatching=!1},e}();e.exports=o},function(e,t,r){"use strict";var n=function(e){};e.exports=function(e,t){for(var r=arguments.length,a=new Array(r>2?r-2:0),o=2;o<r;o++)a[o-2]=arguments[o];if(n(t),!e){var i;if(void 0===t)i=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var s=0;(i=new Error(t.replace(/%s/g,(function(){return String(a[s++])})))).name="Invariant Violation"}throw i.framesToPop=1,i}}},function(e,t,r){"use strict";function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function l(e,t,r){return t&&s(e.prototype,t),r&&s(e,r),e}function c(e,t){return(c=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&c(e,t)}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function p(e){return(p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function f(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function h(e,t){return!t||"object"!==p(t)&&"function"!=typeof t?f(e):t}function m(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=d(e);if(t){var a=d(this).constructor;r=Reflect.construct(n,arguments,a)}else r=n.apply(this,arguments);return h(this,r)}}r.r(t);var g=r(0),b=r.n(g);function v(){var e=this.constructor.getDerivedStateFromProps(this.props,this.state);null!=e&&this.setState(e)}function y(e){this.setState(function(t){var r=this.constructor.getDerivedStateFromProps(e,t);return null!=r?r:null}.bind(this))}function x(e,t){try{var r=this.props,n=this.state;this.props=e,this.state=t,this.__reactInternalSnapshotFlag=!0,this.__reactInternalSnapshot=this.getSnapshotBeforeUpdate(r,n)}finally{this.props=r,this.state=n}}function w(e){var t=e.prototype;if(!t||!t.isReactComponent)throw new Error("Can only polyfill class components");if("function"!=typeof e.getDerivedStateFromProps&&"function"!=typeof t.getSnapshotBeforeUpdate)return e;var r=null,n=null,a=null;if("function"==typeof t.componentWillMount?r="componentWillMount":"function"==typeof t.UNSAFE_componentWillMount&&(r="UNSAFE_componentWillMount"),"function"==typeof t.componentWillReceiveProps?n="componentWillReceiveProps":"function"==typeof t.UNSAFE_componentWillReceiveProps&&(n="UNSAFE_componentWillReceiveProps"),"function"==typeof t.componentWillUpdate?a="componentWillUpdate":"function"==typeof t.UNSAFE_componentWillUpdate&&(a="UNSAFE_componentWillUpdate"),null!==r||null!==n||null!==a){var o=e.displayName||e.name,i="function"==typeof e.getDerivedStateFromProps?"getDerivedStateFromProps()":"getSnapshotBeforeUpdate()";throw Error("Unsafe legacy lifecycles will not be called for components using new component APIs.\n\n"+o+" uses "+i+" but also contains the following legacy lifecycles:"+(null!==r?"\n  "+r:"")+(null!==n?"\n  "+n:"")+(null!==a?"\n  "+a:"")+"\n\nThe above lifecycles should be removed. Learn more about this warning here:\nhttps://fb.me/react-async-component-lifecycle-hooks")}if("function"==typeof e.getDerivedStateFromProps&&(t.componentWillMount=v,t.componentWillReceiveProps=y),"function"==typeof t.getSnapshotBeforeUpdate){if("function"!=typeof t.componentDidUpdate)throw new Error("Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype");t.componentWillUpdate=x;var s=t.componentDidUpdate;t.componentDidUpdate=function(e,t,r){var n=this.__reactInternalSnapshotFlag?this.__reactInternalSnapshot:r;s.call(this,e,t,n)}}return e}function k(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}function S(e){var t=function(e){return{}.toString.call(e).match(/\s([a-zA-Z]+)/)[1].toLowerCase()}(e);return"number"===t&&(t=isNaN(e)?"nan":(0|e)!=e?"float":"integer"),t}v.__suppressDeprecationWarning=!0,y.__suppressDeprecationWarning=!0,x.__suppressDeprecationWarning=!0;var j={scheme:"rjv-default",author:"mac gainor",base00:"rgba(0, 0, 0, 0)",base01:"rgb(245, 245, 245)",base02:"rgb(235, 235, 235)",base03:"#93a1a1",base04:"rgba(0, 0, 0, 0.3)",base05:"#586e75",base06:"#073642",base07:"#002b36",base08:"#d33682",base09:"#cb4b16",base0A:"#dc322f",base0B:"#859900",base0C:"#6c71c4",base0D:"#586e75",base0E:"#2aa198",base0F:"#268bd2"},E={scheme:"rjv-grey",author:"mac gainor",base00:"rgba(1, 1, 1, 0)",base01:"rgba(1, 1, 1, 0.1)",base02:"rgba(0, 0, 0, 0.2)",base03:"rgba(1, 1, 1, 0.3)",base04:"rgba(0, 0, 0, 0.4)",base05:"rgba(1, 1, 1, 0.5)",base06:"rgba(1, 1, 1, 0.6)",base07:"rgba(1, 1, 1, 0.7)",base08:"rgba(1, 1, 1, 0.8)",base09:"rgba(1, 1, 1, 0.8)",base0A:"rgba(1, 1, 1, 0.8)",base0B:"rgba(1, 1, 1, 0.8)",base0C:"rgba(1, 1, 1, 0.8)",base0D:"rgba(1, 1, 1, 0.8)",base0E:"rgba(1, 1, 1, 0.8)",base0F:"rgba(1, 1, 1, 0.8)"},C={white:"#fff",black:"#000",transparent:"rgba(1, 1, 1, 0)",globalFontFamily:"monospace",globalCursor:"default",indentBlockWidth:"5px",braceFontWeight:"bold",braceCursor:"pointer",ellipsisFontSize:"18px",ellipsisLineHeight:"10px",ellipsisCursor:"pointer",keyMargin:"0px 5px",keyLetterSpacing:"0.5px",keyFontStyle:"none",keyBorderRadius:"3px",keyColonWeight:"bold",keyVerticalAlign:"top",keyOpacity:"0.85",keyOpacityHover:"1",keyValPaddingTop:"3px",keyValPaddingBottom:"3px",keyValPaddingRight:"5px",keyValBorderLeft:"1px solid",keyValBorderHover:"2px solid",keyValPaddingHover:"3px 5px 3px 4px",pushedContentMarginLeft:"6px",variableValuePaddingRight:"6px",nullFontSize:"11px",nullFontWeight:"bold",nullPadding:"1px 2px",nullBorderRadius:"3px",nanFontSize:"11px",nanFontWeight:"bold",nanPadding:"1px 2px",nanBorderRadius:"3px",undefinedFontSize:"11px",undefinedFontWeight:"bold",undefinedPadding:"1px 2px",undefinedBorderRadius:"3px",dataTypeFontSize:"11px",dataTypeMarginRight:"4px",datatypeOpacity:"0.8",objectSizeBorderRadius:"3px",objectSizeFontStyle:"italic",objectSizeMargin:"0px 6px 0px 0px",clipboardCursor:"pointer",clipboardCheckMarginLeft:"-12px",metaDataPadding:"0px 0px 0px 10px",arrayGroupMetaPadding:"0px 0px 0px 4px",iconContainerWidth:"17px",tooltipPadding:"4px",editInputMinWidth:"130px",editInputBorderRadius:"2px",editInputPadding:"5px",editInputMarginRight:"4px",editInputFontFamily:"monospace",iconCursor:"pointer",iconFontSize:"15px",iconPaddingRight:"1px",dateValueMarginLeft:"2px",iconMarginRight:"3px",detectedRowPaddingTop:"3px",addKeyCoverBackground:"rgba(255, 255, 255, 0.3)",addKeyCoverPosition:"absolute",addKeyCoverPositionPx:"0px",addKeyModalWidth:"200px",addKeyModalMargin:"auto",addKeyModalPadding:"10px",addKeyModalRadius:"3px"},_=r(45),O=function(e){var t=function(e){return{backgroundColor:e.base00,ellipsisColor:e.base09,braceColor:e.base07,expandedIcon:e.base0D,collapsedIcon:e.base0E,keyColor:e.base07,arrayKeyColor:e.base0C,objectSize:e.base04,copyToClipboard:e.base0F,copyToClipboardCheck:e.base0D,objectBorder:e.base02,dataTypes:{boolean:e.base0E,date:e.base0D,float:e.base0B,function:e.base0D,integer:e.base0F,string:e.base09,nan:e.base08,null:e.base0A,undefined:e.base05,regexp:e.base0A,background:e.base02},editVariable:{editIcon:e.base0E,cancelIcon:e.base09,removeIcon:e.base09,addIcon:e.base0E,checkIcon:e.base0E,background:e.base01,color:e.base0A,border:e.base07},addKeyModal:{background:e.base05,border:e.base04,color:e.base0A,labelColor:e.base01},validationFailure:{background:e.base09,iconColor:e.base01,fontColor:e.base01}}}(e);return{"app-container":{fontFamily:C.globalFontFamily,cursor:C.globalCursor,backgroundColor:t.backgroundColor,position:"relative"},ellipsis:{display:"inline-block",color:t.ellipsisColor,fontSize:C.ellipsisFontSize,lineHeight:C.ellipsisLineHeight,cursor:C.ellipsisCursor},"brace-row":{display:"inline-block",cursor:"pointer"},brace:{display:"inline-block",cursor:C.braceCursor,fontWeight:C.braceFontWeight,color:t.braceColor},"expanded-icon":{color:t.expandedIcon},"collapsed-icon":{color:t.collapsedIcon},colon:{display:"inline-block",margin:C.keyMargin,color:t.keyColor,verticalAlign:"top"},objectKeyVal:function(e,r){return{style:o({paddingTop:C.keyValPaddingTop,paddingRight:C.keyValPaddingRight,paddingBottom:C.keyValPaddingBottom,borderLeft:C.keyValBorderLeft+" "+t.objectBorder,":hover":{paddingLeft:r.paddingLeft-1+"px",borderLeft:C.keyValBorderHover+" "+t.objectBorder}},r)}},"object-key-val-no-border":{padding:C.keyValPadding},"pushed-content":{marginLeft:C.pushedContentMarginLeft},variableValue:function(e,t){return{style:o({display:"inline-block",paddingRight:C.variableValuePaddingRight,position:"relative"},t)}},"object-name":{display:"inline-block",color:t.keyColor,letterSpacing:C.keyLetterSpacing,fontStyle:C.keyFontStyle,verticalAlign:C.keyVerticalAlign,opacity:C.keyOpacity,":hover":{opacity:C.keyOpacityHover}},"array-key":{display:"inline-block",color:t.arrayKeyColor,letterSpacing:C.keyLetterSpacing,fontStyle:C.keyFontStyle,verticalAlign:C.keyVerticalAlign,opacity:C.keyOpacity,":hover":{opacity:C.keyOpacityHover}},"object-size":{color:t.objectSize,borderRadius:C.objectSizeBorderRadius,fontStyle:C.objectSizeFontStyle,margin:C.objectSizeMargin,cursor:"default"},"data-type-label":{fontSize:C.dataTypeFontSize,marginRight:C.dataTypeMarginRight,opacity:C.datatypeOpacity},boolean:{display:"inline-block",color:t.dataTypes.boolean},date:{display:"inline-block",color:t.dataTypes.date},"date-value":{marginLeft:C.dateValueMarginLeft},float:{display:"inline-block",color:t.dataTypes.float},function:{display:"inline-block",color:t.dataTypes.function,cursor:"pointer",whiteSpace:"pre-line"},"function-value":{fontStyle:"italic"},integer:{display:"inline-block",color:t.dataTypes.integer},string:{display:"inline-block",color:t.dataTypes.string},nan:{display:"inline-block",color:t.dataTypes.nan,fontSize:C.nanFontSize,fontWeight:C.nanFontWeight,backgroundColor:t.dataTypes.background,padding:C.nanPadding,borderRadius:C.nanBorderRadius},null:{display:"inline-block",color:t.dataTypes.null,fontSize:C.nullFontSize,fontWeight:C.nullFontWeight,backgroundColor:t.dataTypes.background,padding:C.nullPadding,borderRadius:C.nullBorderRadius},undefined:{display:"inline-block",color:t.dataTypes.undefined,fontSize:C.undefinedFontSize,padding:C.undefinedPadding,borderRadius:C.undefinedBorderRadius,backgroundColor:t.dataTypes.background},regexp:{display:"inline-block",color:t.dataTypes.regexp},"copy-to-clipboard":{cursor:C.clipboardCursor},"copy-icon":{color:t.copyToClipboard,fontSize:C.iconFontSize,marginRight:C.iconMarginRight,verticalAlign:"top"},"copy-icon-copied":{color:t.copyToClipboardCheck,marginLeft:C.clipboardCheckMarginLeft},"array-group-meta-data":{display:"inline-block",padding:C.arrayGroupMetaPadding},"object-meta-data":{display:"inline-block",padding:C.metaDataPadding},"icon-container":{display:"inline-block",width:C.iconContainerWidth},tooltip:{padding:C.tooltipPadding},removeVarIcon:{verticalAlign:"top",display:"inline-block",color:t.editVariable.removeIcon,cursor:C.iconCursor,fontSize:C.iconFontSize,marginRight:C.iconMarginRight},addVarIcon:{verticalAlign:"top",display:"inline-block",color:t.editVariable.addIcon,cursor:C.iconCursor,fontSize:C.iconFontSize,marginRight:C.iconMarginRight},editVarIcon:{verticalAlign:"top",display:"inline-block",color:t.editVariable.editIcon,cursor:C.iconCursor,fontSize:C.iconFontSize,marginRight:C.iconMarginRight},"edit-icon-container":{display:"inline-block",verticalAlign:"top"},"check-icon":{display:"inline-block",cursor:C.iconCursor,color:t.editVariable.checkIcon,fontSize:C.iconFontSize,paddingRight:C.iconPaddingRight},"cancel-icon":{display:"inline-block",cursor:C.iconCursor,color:t.editVariable.cancelIcon,fontSize:C.iconFontSize,paddingRight:C.iconPaddingRight},"edit-input":{display:"inline-block",minWidth:C.editInputMinWidth,borderRadius:C.editInputBorderRadius,backgroundColor:t.editVariable.background,color:t.editVariable.color,padding:C.editInputPadding,marginRight:C.editInputMarginRight,fontFamily:C.editInputFontFamily},"detected-row":{paddingTop:C.detectedRowPaddingTop},"key-modal-request":{position:C.addKeyCoverPosition,top:C.addKeyCoverPositionPx,left:C.addKeyCoverPositionPx,right:C.addKeyCoverPositionPx,bottom:C.addKeyCoverPositionPx,backgroundColor:C.addKeyCoverBackground},"key-modal":{width:C.addKeyModalWidth,backgroundColor:t.addKeyModal.background,marginLeft:C.addKeyModalMargin,marginRight:C.addKeyModalMargin,padding:C.addKeyModalPadding,borderRadius:C.addKeyModalRadius,marginTop:"15px",position:"relative"},"key-modal-label":{color:t.addKeyModal.labelColor,marginLeft:"2px",marginBottom:"5px",fontSize:"11px"},"key-modal-input-container":{overflow:"hidden"},"key-modal-input":{width:"100%",padding:"3px 6px",fontFamily:"monospace",color:t.addKeyModal.color,border:"none",boxSizing:"border-box",borderRadius:"2px"},"key-modal-cancel":{backgroundColor:t.editVariable.removeIcon,position:"absolute",top:"0px",right:"0px",borderRadius:"0px 3px 0px 3px",cursor:"pointer"},"key-modal-cancel-icon":{color:t.addKeyModal.labelColor,fontSize:C.iconFontSize,transform:"rotate(45deg)"},"key-modal-submit":{color:t.editVariable.addIcon,fontSize:C.iconFontSize,position:"absolute",right:"2px",top:"3px",cursor:"pointer"},"function-ellipsis":{display:"inline-block",color:t.ellipsisColor,fontSize:C.ellipsisFontSize,lineHeight:C.ellipsisLineHeight,cursor:C.ellipsisCursor},"validation-failure":{float:"right",padding:"3px 6px",borderRadius:"2px",cursor:"pointer",color:t.validationFailure.fontColor,backgroundColor:t.validationFailure.background},"validation-failure-label":{marginRight:"6px"},"validation-failure-clear":{position:"relative",verticalAlign:"top",cursor:"pointer",color:t.validationFailure.iconColor,fontSize:C.iconFontSize,transform:"rotate(45deg)"}}};function P(e,t,r){return e||console.error("theme has not been set"),function(e){var t=j;return!1!==e&&"none"!==e||(t=E),Object(_.createStyling)(O,{defaultBase16:t})(e)}(e)(t,r)}var A=function(e){u(r,e);var t=m(r);function r(){return i(this,r),t.apply(this,arguments)}return l(r,[{key:"render",value:function(){var e=this.props,t=(e.rjvId,e.type_name),r=e.displayDataTypes,n=e.theme;return r?b.a.createElement("span",Object.assign({className:"data-type-label"},P(n,"data-type-label")),t):null}}]),r}(b.a.PureComponent),T=function(e){u(r,e);var t=m(r);function r(){return i(this,r),t.apply(this,arguments)}return l(r,[{key:"render",value:function(){var e=this.props;return b.a.createElement("div",P(e.theme,"boolean"),b.a.createElement(A,Object.assign({type_name:"bool"},e)),e.value?"true":"false")}}]),r}(b.a.PureComponent),z=function(e){u(r,e);var t=m(r);function r(){return i(this,r),t.apply(this,arguments)}return l(r,[{key:"render",value:function(){var e=this.props;return b.a.createElement("div",P(e.theme,"date"),b.a.createElement(A,Object.assign({type_name:"date"},e)),b.a.createElement("span",Object.assign({className:"date-value"},P(e.theme,"date-value")),e.value.toLocaleTimeString("en-us",{weekday:"short",year:"numeric",month:"short",day:"numeric",hour:"2-digit",minute:"2-digit"})))}}]),r}(b.a.PureComponent),I=function(e){u(r,e);var t=m(r);function r(){return i(this,r),t.apply(this,arguments)}return l(r,[{key:"render",value:function(){var e=this.props;return b.a.createElement("div",P(e.theme,"float"),b.a.createElement(A,Object.assign({type_name:"float"},e)),this.props.value)}}]),r}(b.a.PureComponent);function D(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function R(e,t){if(e){if("string"==typeof e)return D(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?D(e,t):void 0}}function N(e,t){var r;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(r=R(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var n=0,a=function(){};return{s:a,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,i=!0,s=!1;return{s:function(){r=e[Symbol.iterator]()},n:function(){var e=r.next();return i=e.done,e},e:function(e){s=!0,o=e},f:function(){try{i||null==r.return||r.return()}finally{if(s)throw o}}}}function M(e){return function(e){if(Array.isArray(e))return D(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||R(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var L=r(46),F=new(r(47).Dispatcher),$=new(function(e){u(r,e);var t=m(r);function r(){var e;i(this,r);for(var n=arguments.length,a=new Array(n),s=0;s<n;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).objects={},e.set=function(t,r,n,a){void 0===e.objects[t]&&(e.objects[t]={}),void 0===e.objects[t][r]&&(e.objects[t][r]={}),e.objects[t][r][n]=a},e.get=function(t,r,n,a){return void 0===e.objects[t]||void 0===e.objects[t][r]||null==e.objects[t][r][n]?a:e.objects[t][r][n]},e.handleAction=function(t){var r=t.rjvId,n=t.data;switch(t.name){case"RESET":e.emit("reset-"+r);break;case"VARIABLE_UPDATED":t.data.updated_src=e.updateSrc(r,n),e.set(r,"action","variable-update",o(o({},n),{},{type:"variable-edited"})),e.emit("variable-update-"+r);break;case"VARIABLE_REMOVED":t.data.updated_src=e.updateSrc(r,n),e.set(r,"action","variable-update",o(o({},n),{},{type:"variable-removed"})),e.emit("variable-update-"+r);break;case"VARIABLE_ADDED":t.data.updated_src=e.updateSrc(r,n),e.set(r,"action","variable-update",o(o({},n),{},{type:"variable-added"})),e.emit("variable-update-"+r);break;case"ADD_VARIABLE_KEY_REQUEST":e.set(r,"action","new-key-request",n),e.emit("add-key-request-"+r)}},e.updateSrc=function(t,r){var n=r.name,a=r.namespace,o=r.new_value,i=(r.existing_value,r.variable_removed);a.shift();var s,l=e.get(t,"global","src"),c=e.deepCopy(l,M(a)),u=c,d=N(a);try{for(d.s();!(s=d.n()).done;)u=u[s.value]}catch(e){d.e(e)}finally{d.f()}return i?"array"==S(u)?u.splice(n,1):delete u[n]:null!==n?u[n]=o:c=o,e.set(t,"global","src",c),c},e.deepCopy=function(t,r){var n,a=S(t),i=r.shift();return"array"==a?n=M(t):"object"==a&&(n=o({},t)),void 0!==i&&(n[i]=e.deepCopy(t[i],r)),n},e}return r}(L.EventEmitter));F.register($.handleAction.bind($));var B=$,q=function(e){u(r,e);var t=m(r);function r(e){var n;return i(this,r),(n=t.call(this,e)).toggleCollapsed=function(){n.setState({collapsed:!n.state.collapsed},(function(){B.set(n.props.rjvId,n.props.namespace,"collapsed",n.state.collapsed)}))},n.getFunctionDisplay=function(e){var t=f(n).props;return e?b.a.createElement("span",null,n.props.value.toString().slice(9,-1).replace(/\{[\s\S]+/,""),b.a.createElement("span",{className:"function-collapsed",style:{fontWeight:"bold"}},b.a.createElement("span",null,"{"),b.a.createElement("span",P(t.theme,"ellipsis"),"..."),b.a.createElement("span",null,"}"))):n.props.value.toString().slice(9,-1)},n.state={collapsed:B.get(e.rjvId,e.namespace,"collapsed",!0)},n}return l(r,[{key:"render",value:function(){var e=this.props,t=this.state.collapsed;return b.a.createElement("div",P(e.theme,"function"),b.a.createElement(A,Object.assign({type_name:"function"},e)),b.a.createElement("span",Object.assign({},P(e.theme,"function-value"),{className:"rjv-function-container",onClick:this.toggleCollapsed}),this.getFunctionDisplay(t)))}}]),r}(b.a.PureComponent),W=function(e){u(r,e);var t=m(r);function r(){return i(this,r),t.apply(this,arguments)}return l(r,[{key:"render",value:function(){return b.a.createElement("div",P(this.props.theme,"nan"),"NaN")}}]),r}(b.a.PureComponent),U=function(e){u(r,e);var t=m(r);function r(){return i(this,r),t.apply(this,arguments)}return l(r,[{key:"render",value:function(){return b.a.createElement("div",P(this.props.theme,"null"),"NULL")}}]),r}(b.a.PureComponent),V=function(e){u(r,e);var t=m(r);function r(){return i(this,r),t.apply(this,arguments)}return l(r,[{key:"render",value:function(){var e=this.props;return b.a.createElement("div",P(e.theme,"integer"),b.a.createElement(A,Object.assign({type_name:"int"},e)),this.props.value)}}]),r}(b.a.PureComponent),H=function(e){u(r,e);var t=m(r);function r(){return i(this,r),t.apply(this,arguments)}return l(r,[{key:"render",value:function(){var e=this.props;return b.a.createElement("div",P(e.theme,"regexp"),b.a.createElement(A,Object.assign({type_name:"regexp"},e)),this.props.value.toString())}}]),r}(b.a.PureComponent),K=function(e){u(r,e);var t=m(r);function r(e){var n;return i(this,r),(n=t.call(this,e)).toggleCollapsed=function(){n.setState({collapsed:!n.state.collapsed},(function(){B.set(n.props.rjvId,n.props.namespace,"collapsed",n.state.collapsed)}))},n.state={collapsed:B.get(e.rjvId,e.namespace,"collapsed",!0)},n}return l(r,[{key:"render",value:function(){this.state.collapsed;var e=this.props,t=e.collapseStringsAfterLength,r=e.theme,n=e.value,a={style:{cursor:"default"}};return"integer"===S(t)&&n.length>t&&(a.style.cursor="pointer",this.state.collapsed&&(n=b.a.createElement("span",null,n.substring(0,t),b.a.createElement("span",P(r,"ellipsis")," ...")))),b.a.createElement("div",P(r,"string"),b.a.createElement(A,Object.assign({type_name:"string"},e)),b.a.createElement("span",Object.assign({className:"string-value"},a,{onClick:this.toggleCollapsed}),'"',n,'"'))}}]),r}(b.a.PureComponent),G=function(e){u(r,e);var t=m(r);function r(){return i(this,r),t.apply(this,arguments)}return l(r,[{key:"render",value:function(){return b.a.createElement("div",P(this.props.theme,"undefined"),"undefined")}}]),r}(b.a.PureComponent);function Y(){return(Y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var J=g.useLayoutEffect,Q=function(e){var t=Object(g.useRef)(e);return J((function(){t.current=e})),t},X=function(e,t){"function"!=typeof e?e.current=t:e(t)},Z=function(e,t){var r=Object(g.useRef)();return Object(g.useCallback)((function(n){e.current=n,r.current&&X(r.current,null),r.current=t,t&&X(t,n)}),[t])},ee={"min-height":"0","max-height":"none",height:"0",visibility:"hidden",overflow:"hidden",position:"absolute","z-index":"-1000",top:"0",right:"0"},te=function(e){Object.keys(ee).forEach((function(t){e.style.setProperty(t,ee[t],"important")}))},re=null,ne=function(){},ae=["borderBottomWidth","borderLeftWidth","borderRightWidth","borderTopWidth","boxSizing","fontFamily","fontSize","fontStyle","fontWeight","letterSpacing","lineHeight","paddingBottom","paddingLeft","paddingRight","paddingTop","tabSize","textIndent","textRendering","textTransform","width"],oe=!!document.documentElement.currentStyle,ie=function(e,t){var r,n=e.cacheMeasurements,a=e.maxRows,o=e.minRows,i=e.onChange,s=void 0===i?ne:i,l=e.onHeightChange,c=void 0===l?ne:l,u=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,["cacheMeasurements","maxRows","minRows","onChange","onHeightChange"]),d=void 0!==u.value,p=Object(g.useRef)(null),f=Z(p,t),h=Object(g.useRef)(0),m=Object(g.useRef)(),b=function(){var e=p.current,t=n&&m.current?m.current:function(e){var t=window.getComputedStyle(e);if(null===t)return null;var r,n=(r=t,ae.reduce((function(e,t){return e[t]=r[t],e}),{})),a=n.boxSizing;return""===a?null:(oe&&"border-box"===a&&(n.width=parseFloat(n.width)+parseFloat(n.borderRightWidth)+parseFloat(n.borderLeftWidth)+parseFloat(n.paddingRight)+parseFloat(n.paddingLeft)+"px"),{sizingStyle:n,paddingSize:parseFloat(n.paddingBottom)+parseFloat(n.paddingTop),borderSize:parseFloat(n.borderBottomWidth)+parseFloat(n.borderTopWidth)})}(e);if(t){m.current=t;var r=function(e,t,r,n){void 0===r&&(r=1),void 0===n&&(n=1/0),re||((re=document.createElement("textarea")).setAttribute("tab-index","-1"),re.setAttribute("aria-hidden","true"),te(re)),null===re.parentNode&&document.body.appendChild(re);var a=e.paddingSize,o=e.borderSize,i=e.sizingStyle,s=i.boxSizing;Object.keys(i).forEach((function(e){var t=e;re.style[t]=i[t]})),te(re),re.value=t;var l=function(e,t){var r=e.scrollHeight;return"border-box"===t.sizingStyle.boxSizing?r+t.borderSize:r-t.paddingSize}(re,e);re.value="x";var c=re.scrollHeight-a,u=c*r;"border-box"===s&&(u=u+a+o),l=Math.max(u,l);var d=c*n;return"border-box"===s&&(d=d+a+o),[l=Math.min(d,l),c]}(t,e.value||e.placeholder||"x",o,a),i=r[0],s=r[1];h.current!==i&&(h.current=i,e.style.setProperty("height",i+"px","important"),c(i,{rowHeight:s}))}};return Object(g.useLayoutEffect)(b),r=Q(b),Object(g.useLayoutEffect)((function(){var e=function(e){r.current(e)};return window.addEventListener("resize",e),function(){window.removeEventListener("resize",e)}}),[]),Object(g.createElement)("textarea",Y({},u,{onChange:function(e){d||b(),s(e)},ref:f}))},se=Object(g.forwardRef)(ie);function le(e){e=e.trim();try{if("["===(e=JSON.stringify(JSON.parse(e)))[0])return ce("array",JSON.parse(e));if("{"===e[0])return ce("object",JSON.parse(e));if(e.match(/\-?\d+\.\d+/)&&e.match(/\-?\d+\.\d+/)[0]===e)return ce("float",parseFloat(e));if(e.match(/\-?\d+e-\d+/)&&e.match(/\-?\d+e-\d+/)[0]===e)return ce("float",Number(e));if(e.match(/\-?\d+/)&&e.match(/\-?\d+/)[0]===e)return ce("integer",parseInt(e));if(e.match(/\-?\d+e\+\d+/)&&e.match(/\-?\d+e\+\d+/)[0]===e)return ce("integer",Number(e))}catch(e){}switch(e=e.toLowerCase()){case"undefined":return ce("undefined",void 0);case"nan":return ce("nan",NaN);case"null":return ce("null",null);case"true":return ce("boolean",!0);case"false":return ce("boolean",!1);default:if(e=Date.parse(e))return ce("date",new Date(e))}return ce(!1,null)}function ce(e,t){return{type:e,value:t}}var ue=function(e){u(r,e);var t=m(r);function r(){return i(this,r),t.apply(this,arguments)}return l(r,[{key:"render",value:function(){var e=this.props,t=e.style,r=k(e,["style"]);return b.a.createElement("span",r,b.a.createElement("svg",Object.assign({},ke(t),{viewBox:"0 0 24 24",fill:"currentColor",preserveAspectRatio:"xMidYMid meet"}),b.a.createElement("path",{d:"M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M7,13H17V11H7"})))}}]),r}(b.a.PureComponent),de=function(e){u(r,e);var t=m(r);function r(){return i(this,r),t.apply(this,arguments)}return l(r,[{key:"render",value:function(){var e=this.props,t=e.style,r=k(e,["style"]);return b.a.createElement("span",r,b.a.createElement("svg",Object.assign({},ke(t),{viewBox:"0 0 24 24",fill:"currentColor",preserveAspectRatio:"xMidYMid meet"}),b.a.createElement("path",{d:"M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M13,7H11V11H7V13H11V17H13V13H17V11H13V7Z"})))}}]),r}(b.a.PureComponent),pe=function(e){u(r,e);var t=m(r);function r(){return i(this,r),t.apply(this,arguments)}return l(r,[{key:"render",value:function(){var e=this.props,t=e.style,r=k(e,["style"]),n=ke(t).style;return b.a.createElement("span",r,b.a.createElement("svg",{fill:n.color,width:n.height,height:n.width,style:n,viewBox:"0 0 1792 1792"},b.a.createElement("path",{d:"M1344 800v64q0 14-9 23t-23 9h-832q-14 0-23-9t-9-23v-64q0-14 9-23t23-9h832q14 0 23 9t9 23zm128 448v-832q0-66-47-113t-113-47h-832q-66 0-113 47t-47 113v832q0 66 47 113t113 47h832q66 0 113-47t47-113zm128-832v832q0 119-84.5 203.5t-203.5 84.5h-832q-119 0-203.5-84.5t-84.5-203.5v-832q0-119 84.5-203.5t203.5-84.5h832q119 0 203.5 84.5t84.5 203.5z"})))}}]),r}(b.a.PureComponent),fe=function(e){u(r,e);var t=m(r);function r(){return i(this,r),t.apply(this,arguments)}return l(r,[{key:"render",value:function(){var e=this.props,t=e.style,r=k(e,["style"]),n=ke(t).style;return b.a.createElement("span",r,b.a.createElement("svg",{fill:n.color,width:n.height,height:n.width,style:n,viewBox:"0 0 1792 1792"},b.a.createElement("path",{d:"M1344 800v64q0 14-9 23t-23 9h-352v352q0 14-9 23t-23 9h-64q-14 0-23-9t-9-23v-352h-352q-14 0-23-9t-9-23v-64q0-14 9-23t23-9h352v-352q0-14 9-23t23-9h64q14 0 23 9t9 23v352h352q14 0 23 9t9 23zm128 448v-832q0-66-47-113t-113-47h-832q-66 0-113 47t-47 113v832q0 66 47 113t113 47h832q66 0 113-47t47-113zm128-832v832q0 119-84.5 203.5t-203.5 84.5h-832q-119 0-203.5-84.5t-84.5-203.5v-832q0-119 84.5-203.5t203.5-84.5h832q119 0 203.5 84.5t84.5 203.5z"})))}}]),r}(b.a.PureComponent),he=function(e){u(r,e);var t=m(r);function r(){return i(this,r),t.apply(this,arguments)}return l(r,[{key:"render",value:function(){var e=this.props,t=e.style,r=k(e,["style"]);return b.a.createElement("span",r,b.a.createElement("svg",{style:o(o({},ke(t).style),{},{paddingLeft:"2px",verticalAlign:"top"}),viewBox:"0 0 15 15",fill:"currentColor"},b.a.createElement("path",{d:"M0 14l6-6-6-6z"})))}}]),r}(b.a.PureComponent),me=function(e){u(r,e);var t=m(r);function r(){return i(this,r),t.apply(this,arguments)}return l(r,[{key:"render",value:function(){var e=this.props,t=e.style,r=k(e,["style"]);return b.a.createElement("span",r,b.a.createElement("svg",{style:o(o({},ke(t).style),{},{paddingLeft:"2px",verticalAlign:"top"}),viewBox:"0 0 15 15",fill:"currentColor"},b.a.createElement("path",{d:"M0 5l6 6 6-6z"})))}}]),r}(b.a.PureComponent),ge=function(e){u(r,e);var t=m(r);function r(){return i(this,r),t.apply(this,arguments)}return l(r,[{key:"render",value:function(){var e=this.props,t=e.style,r=k(e,["style"]);return b.a.createElement("span",r,b.a.createElement("svg",Object.assign({},ke(t),{viewBox:"0 0 40 40",fill:"currentColor",preserveAspectRatio:"xMidYMid meet"}),b.a.createElement("g",null,b.a.createElement("path",{d:"m30 35h-25v-22.5h25v7.5h2.5v-12.5c0-1.4-1.1-2.5-2.5-2.5h-7.5c0-2.8-2.2-5-5-5s-5 2.2-5 5h-7.5c-1.4 0-2.5 1.1-2.5 2.5v27.5c0 1.4 1.1 2.5 2.5 2.5h25c1.4 0 2.5-1.1 2.5-2.5v-5h-2.5v5z m-20-27.5h2.5s2.5-1.1 2.5-2.5 1.1-2.5 2.5-2.5 2.5 1.1 2.5 2.5 1.3 2.5 2.5 2.5h2.5s2.5 1.1 2.5 2.5h-20c0-1.5 1.1-2.5 2.5-2.5z m-2.5 20h5v-2.5h-5v2.5z m17.5-5v-5l-10 7.5 10 7.5v-5h12.5v-5h-12.5z m-17.5 10h7.5v-2.5h-7.5v2.5z m12.5-17.5h-12.5v2.5h12.5v-2.5z m-7.5 5h-5v2.5h5v-2.5z"}))))}}]),r}(b.a.PureComponent),be=function(e){u(r,e);var t=m(r);function r(){return i(this,r),t.apply(this,arguments)}return l(r,[{key:"render",value:function(){var e=this.props,t=e.style,r=k(e,["style"]);return b.a.createElement("span",r,b.a.createElement("svg",Object.assign({},ke(t),{viewBox:"0 0 40 40",fill:"currentColor",preserveAspectRatio:"xMidYMid meet"}),b.a.createElement("g",null,b.a.createElement("path",{d:"m28.6 25q0-0.5-0.4-1l-4-4 4-4q0.4-0.5 0.4-1 0-0.6-0.4-1.1l-2-2q-0.4-0.4-1-0.4-0.6 0-1 0.4l-4.1 4.1-4-4.1q-0.4-0.4-1-0.4-0.6 0-1 0.4l-2 2q-0.5 0.5-0.5 1.1 0 0.5 0.5 1l4 4-4 4q-0.5 0.5-0.5 1 0 0.7 0.5 1.1l2 2q0.4 0.4 1 0.4 0.6 0 1-0.4l4-4.1 4.1 4.1q0.4 0.4 1 0.4 0.6 0 1-0.4l2-2q0.4-0.4 0.4-1z m8.7-5q0 4.7-2.3 8.6t-6.3 6.2-8.6 2.3-8.6-2.3-6.2-6.2-2.3-8.6 2.3-8.6 6.2-6.2 8.6-2.3 8.6 2.3 6.3 6.2 2.3 8.6z"}))))}}]),r}(b.a.PureComponent),ve=function(e){u(r,e);var t=m(r);function r(){return i(this,r),t.apply(this,arguments)}return l(r,[{key:"render",value:function(){var e=this.props,t=e.style,r=k(e,["style"]);return b.a.createElement("span",r,b.a.createElement("svg",Object.assign({},ke(t),{viewBox:"0 0 40 40",fill:"currentColor",preserveAspectRatio:"xMidYMid meet"}),b.a.createElement("g",null,b.a.createElement("path",{d:"m30.1 21.4v-2.8q0-0.6-0.4-1t-1-0.5h-5.7v-5.7q0-0.6-0.4-1t-1-0.4h-2.9q-0.6 0-1 0.4t-0.4 1v5.7h-5.7q-0.6 0-1 0.5t-0.5 1v2.8q0 0.6 0.5 1t1 0.5h5.7v5.7q0 0.5 0.4 1t1 0.4h2.9q0.6 0 1-0.4t0.4-1v-5.7h5.7q0.6 0 1-0.5t0.4-1z m7.2-1.4q0 4.7-2.3 8.6t-6.3 6.2-8.6 2.3-8.6-2.3-6.2-6.2-2.3-8.6 2.3-8.6 6.2-6.2 8.6-2.3 8.6 2.3 6.3 6.2 2.3 8.6z"}))))}}]),r}(b.a.PureComponent),ye=function(e){u(r,e);var t=m(r);function r(){return i(this,r),t.apply(this,arguments)}return l(r,[{key:"render",value:function(){var e=this.props,t=e.style,r=k(e,["style"]);return b.a.createElement("span",r,b.a.createElement("svg",Object.assign({},ke(t),{viewBox:"0 0 40 40",fill:"currentColor",preserveAspectRatio:"xMidYMid meet"}),b.a.createElement("g",null,b.a.createElement("path",{d:"m31.6 21.6h-10v10h-3.2v-10h-10v-3.2h10v-10h3.2v10h10v3.2z"}))))}}]),r}(b.a.PureComponent),xe=function(e){u(r,e);var t=m(r);function r(){return i(this,r),t.apply(this,arguments)}return l(r,[{key:"render",value:function(){var e=this.props,t=e.style,r=k(e,["style"]);return b.a.createElement("span",r,b.a.createElement("svg",Object.assign({},ke(t),{viewBox:"0 0 40 40",fill:"currentColor",preserveAspectRatio:"xMidYMid meet"}),b.a.createElement("g",null,b.a.createElement("path",{d:"m19.8 26.4l2.6-2.6-3.4-3.4-2.6 2.6v1.3h2.2v2.1h1.2z m9.8-16q-0.3-0.4-0.7 0l-7.8 7.8q-0.4 0.4 0 0.7t0.7 0l7.8-7.8q0.4-0.4 0-0.7z m1.8 13.2v4.3q0 2.6-1.9 4.5t-4.5 1.9h-18.6q-2.6 0-4.5-1.9t-1.9-4.5v-18.6q0-2.7 1.9-4.6t4.5-1.8h18.6q1.4 0 2.6 0.5 0.3 0.2 0.4 0.5 0.1 0.4-0.2 0.7l-1.1 1.1q-0.3 0.3-0.7 0.1-0.5-0.1-1-0.1h-18.6q-1.4 0-2.5 1.1t-1 2.5v18.6q0 1.4 1 2.5t2.5 1h18.6q1.5 0 2.5-1t1.1-2.5v-2.9q0-0.2 0.2-0.4l1.4-1.5q0.3-0.3 0.8-0.1t0.4 0.6z m-2.1-16.5l6.4 6.5-15 15h-6.4v-6.5z m9.9 3l-2.1 2-6.4-6.4 2.1-2q0.6-0.7 1.5-0.7t1.5 0.7l3.4 3.4q0.6 0.6 0.6 1.5t-0.6 1.5z"}))))}}]),r}(b.a.PureComponent),we=function(e){u(r,e);var t=m(r);function r(){return i(this,r),t.apply(this,arguments)}return l(r,[{key:"render",value:function(){var e=this.props,t=e.style,r=k(e,["style"]);return b.a.createElement("span",r,b.a.createElement("svg",Object.assign({},ke(t),{viewBox:"0 0 40 40",fill:"currentColor",preserveAspectRatio:"xMidYMid meet"}),b.a.createElement("g",null,b.a.createElement("path",{d:"m31.7 16.4q0-0.6-0.4-1l-2.1-2.1q-0.4-0.4-1-0.4t-1 0.4l-9.1 9.1-5-5q-0.5-0.4-1-0.4t-1 0.4l-2.1 2q-0.4 0.4-0.4 1 0 0.6 0.4 1l8.1 8.1q0.4 0.4 1 0.4 0.6 0 1-0.4l12.2-12.1q0.4-0.4 0.4-1z m5.6 3.6q0 4.7-2.3 8.6t-6.3 6.2-8.6 2.3-8.6-2.3-6.2-6.2-2.3-8.6 2.3-8.6 6.2-6.2 8.6-2.3 8.6 2.3 6.3 6.2 2.3 8.6z"}))))}}]),r}(b.a.PureComponent);function ke(e){return e||(e={}),{style:o(o({verticalAlign:"middle"},e),{},{color:e.color?e.color:"#000000",height:"1em",width:"1em"})}}var Se=function(e){u(r,e);var t=m(r);function r(e){var n;return i(this,r),(n=t.call(this,e)).copiedTimer=null,n.handleCopy=function(){var e=document.createElement("textarea"),t=n.props,r=t.clickCallback,a=t.src,o=t.namespace;e.innerHTML=JSON.stringify(n.clipboardValue(a),null,"  "),document.body.appendChild(e),e.select(),document.execCommand("copy"),document.body.removeChild(e),n.copiedTimer=setTimeout((function(){n.setState({copied:!1})}),5500),n.setState({copied:!0},(function(){"function"==typeof r&&r({src:a,namespace:o,name:o[o.length-1]})}))},n.getClippyIcon=function(){var e=n.props.theme;return n.state.copied?b.a.createElement("span",null,b.a.createElement(ge,Object.assign({className:"copy-icon"},P(e,"copy-icon"))),b.a.createElement("span",P(e,"copy-icon-copied"),"\u2714")):b.a.createElement(ge,Object.assign({className:"copy-icon"},P(e,"copy-icon")))},n.clipboardValue=function(e){switch(S(e)){case"function":case"regexp":return e.toString();default:return e}},n.state={copied:!1},n}return l(r,[{key:"componentWillUnmount",value:function(){this.copiedTimer&&(clearTimeout(this.copiedTimer),this.copiedTimer=null)}},{key:"render",value:function(){var e=this.props,t=(e.src,e.theme),r=e.hidden,n=e.rowHovered,a=P(t,"copy-to-clipboard").style,i="inline";return r&&(i="none"),b.a.createElement("span",{className:"copy-to-clipboard-container",title:"Copy to clipboard",style:{verticalAlign:"top",display:n?"inline-block":"none"}},b.a.createElement("span",{style:o(o({},a),{},{display:i}),onClick:this.handleCopy},this.getClippyIcon()))}}]),r}(b.a.PureComponent),je=function(e){u(r,e);var t=m(r);function r(e){var n;return i(this,r),(n=t.call(this,e)).getEditIcon=function(){var e=n.props,t=e.variable,r=e.theme;return b.a.createElement("div",{className:"click-to-edit",style:{verticalAlign:"top",display:n.state.hovered?"inline-block":"none"}},b.a.createElement(xe,Object.assign({className:"click-to-edit-icon"},P(r,"editVarIcon"),{onClick:function(){n.prepopInput(t)}})))},n.prepopInput=function(e){if(!1!==n.props.onEdit){var t=function(e){var t;switch(S(e)){case"undefined":t="undefined";break;case"nan":t="NaN";break;case"string":t=e;break;case"date":case"function":case"regexp":t=e.toString();break;default:try{t=JSON.stringify(e,null,"  ")}catch(e){t=""}}return t}(e.value),r=le(t);n.setState({editMode:!0,editValue:t,parsedInput:{type:r.type,value:r.value}})}},n.getRemoveIcon=function(){var e=n.props,t=e.variable,r=e.namespace,a=e.theme,o=e.rjvId;return b.a.createElement("div",{className:"click-to-remove",style:{verticalAlign:"top",display:n.state.hovered?"inline-block":"none"}},b.a.createElement(be,Object.assign({className:"click-to-remove-icon"},P(a,"removeVarIcon"),{onClick:function(){F.dispatch({name:"VARIABLE_REMOVED",rjvId:o,data:{name:t.name,namespace:r,existing_value:t.value,variable_removed:!0}})}})))},n.getValue=function(e,t){var r=!t&&e.type,a=f(n).props;switch(r){case!1:return n.getEditInput();case"string":return b.a.createElement(K,Object.assign({value:e.value},a));case"integer":return b.a.createElement(V,Object.assign({value:e.value},a));case"float":return b.a.createElement(I,Object.assign({value:e.value},a));case"boolean":return b.a.createElement(T,Object.assign({value:e.value},a));case"function":return b.a.createElement(q,Object.assign({value:e.value},a));case"null":return b.a.createElement(U,a);case"nan":return b.a.createElement(W,a);case"undefined":return b.a.createElement(G,a);case"date":return b.a.createElement(z,Object.assign({value:e.value},a));case"regexp":return b.a.createElement(H,Object.assign({value:e.value},a));default:return b.a.createElement("div",{className:"object-value"},JSON.stringify(e.value))}},n.getEditInput=function(){var e=n.props.theme,t=n.state.editValue;return b.a.createElement("div",null,b.a.createElement(se,Object.assign({type:"text",inputRef:function(e){return e&&e.focus()},value:t,className:"variable-editor",onChange:function(e){var t=e.target.value,r=le(t);n.setState({editValue:t,parsedInput:{type:r.type,value:r.value}})},onKeyDown:function(e){switch(e.key){case"Escape":n.setState({editMode:!1,editValue:""});break;case"Enter":(e.ctrlKey||e.metaKey)&&n.submitEdit(!0)}e.stopPropagation()},placeholder:"update this value",minRows:2},P(e,"edit-input"))),b.a.createElement("div",P(e,"edit-icon-container"),b.a.createElement(be,Object.assign({className:"edit-cancel"},P(e,"cancel-icon"),{onClick:function(){n.setState({editMode:!1,editValue:""})}})),b.a.createElement(we,Object.assign({className:"edit-check string-value"},P(e,"check-icon"),{onClick:function(){n.submitEdit()}})),b.a.createElement("div",null,n.showDetected())))},n.submitEdit=function(e){var t=n.props,r=t.variable,a=t.namespace,o=t.rjvId,i=n.state,s=i.editValue,l=i.parsedInput,c=s;e&&l.type&&(c=l.value),n.setState({editMode:!1}),F.dispatch({name:"VARIABLE_UPDATED",rjvId:o,data:{name:r.name,namespace:a,existing_value:r.value,new_value:c,variable_removed:!1}})},n.showDetected=function(){var e=n.props,t=e.theme,r=(e.variable,e.namespace,e.rjvId,n.state.parsedInput),a=(r.type,r.value,n.getDetectedInput());if(a)return b.a.createElement("div",null,b.a.createElement("div",P(t,"detected-row"),a,b.a.createElement(we,{className:"edit-check detected",style:o({verticalAlign:"top",paddingLeft:"3px"},P(t,"check-icon").style),onClick:function(){n.submitEdit(!0)}})))},n.getDetectedInput=function(){var e=n.state.parsedInput,t=e.type,r=e.value,a=f(n).props,i=a.theme;if(!1!==t)switch(t.toLowerCase()){case"object":return b.a.createElement("span",null,b.a.createElement("span",{style:o(o({},P(i,"brace").style),{},{cursor:"default"})},"{"),b.a.createElement("span",{style:o(o({},P(i,"ellipsis").style),{},{cursor:"default"})},"..."),b.a.createElement("span",{style:o(o({},P(i,"brace").style),{},{cursor:"default"})},"}"));case"array":return b.a.createElement("span",null,b.a.createElement("span",{style:o(o({},P(i,"brace").style),{},{cursor:"default"})},"["),b.a.createElement("span",{style:o(o({},P(i,"ellipsis").style),{},{cursor:"default"})},"..."),b.a.createElement("span",{style:o(o({},P(i,"brace").style),{},{cursor:"default"})},"]"));case"string":return b.a.createElement(K,Object.assign({value:r},a));case"integer":return b.a.createElement(V,Object.assign({value:r},a));case"float":return b.a.createElement(I,Object.assign({value:r},a));case"boolean":return b.a.createElement(T,Object.assign({value:r},a));case"function":return b.a.createElement(q,Object.assign({value:r},a));case"null":return b.a.createElement(U,a);case"nan":return b.a.createElement(W,a);case"undefined":return b.a.createElement(G,a);case"date":return b.a.createElement(z,Object.assign({value:new Date(r)},a))}},n.state={editMode:!1,editValue:"",hovered:!1,renameKey:!1,parsedInput:{type:!1,value:null}},n}return l(r,[{key:"render",value:function(){var e=this,t=this.props,r=t.variable,n=t.singleIndent,a=t.type,i=t.theme,s=t.namespace,l=t.indentWidth,c=t.enableClipboard,u=t.onEdit,d=t.onDelete,p=t.onSelect,f=t.displayArrayKey,h=t.quotesOnKeys,m=this.state.editMode;return b.a.createElement("div",Object.assign({},P(i,"objectKeyVal",{paddingLeft:l*n}),{onMouseEnter:function(){return e.setState(o(o({},e.state),{},{hovered:!0}))},onMouseLeave:function(){return e.setState(o(o({},e.state),{},{hovered:!1}))},className:"variable-row",key:r.name}),"array"==a?f?b.a.createElement("span",Object.assign({},P(i,"array-key"),{key:r.name+"_"+s}),r.name,b.a.createElement("div",P(i,"colon"),":")):null:b.a.createElement("span",null,b.a.createElement("span",Object.assign({},P(i,"object-name"),{className:"object-key",key:r.name+"_"+s}),!!h&&b.a.createElement("span",{style:{verticalAlign:"top"}},'"'),b.a.createElement("span",{style:{display:"inline-block"}},r.name),!!h&&b.a.createElement("span",{style:{verticalAlign:"top"}},'"')),b.a.createElement("span",P(i,"colon"),":")),b.a.createElement("div",Object.assign({className:"variable-value",onClick:!1===p&&!1===u?null:function(t){var n=M(s);(t.ctrlKey||t.metaKey)&&!1!==u?e.prepopInput(r):!1!==p&&(n.shift(),p(o(o({},r),{},{namespace:n})))}},P(i,"variableValue",{cursor:!1===p?"default":"pointer"})),this.getValue(r,m)),c?b.a.createElement(Se,{rowHovered:this.state.hovered,hidden:m,src:r.value,clickCallback:c,theme:i,namespace:[].concat(M(s),[r.name])}):null,!1!==u&&0==m?this.getEditIcon():null,!1!==d&&0==m?this.getRemoveIcon():null)}}]),r}(b.a.PureComponent),Ee=function(e){u(r,e);var t=m(r);function r(){var e;i(this,r);for(var n=arguments.length,a=new Array(n),s=0;s<n;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).getObjectSize=function(){var t=e.props,r=t.size,n=t.theme;if(t.displayObjectSize)return b.a.createElement("span",Object.assign({className:"object-size"},P(n,"object-size")),r," item",1===r?"":"s")},e.getAddAttribute=function(t){var r=e.props,n=r.theme,a=r.namespace,i=r.name,s=r.src,l=r.rjvId,c=r.depth;return b.a.createElement("span",{className:"click-to-add",style:{verticalAlign:"top",display:t?"inline-block":"none"}},b.a.createElement(ve,Object.assign({className:"click-to-add-icon"},P(n,"addVarIcon"),{onClick:function(){var e={name:c>0?i:null,namespace:a.splice(0,a.length-1),existing_value:s,variable_removed:!1,key_name:null};"object"===S(s)?F.dispatch({name:"ADD_VARIABLE_KEY_REQUEST",rjvId:l,data:e}):F.dispatch({name:"VARIABLE_ADDED",rjvId:l,data:o(o({},e),{},{new_value:[].concat(M(s),[null])})})}})))},e.getRemoveObject=function(t){var r=e.props,n=r.theme,a=(r.hover,r.namespace),o=r.name,i=r.src,s=r.rjvId;if(1!==a.length)return b.a.createElement("span",{className:"click-to-remove",style:{display:t?"inline-block":"none"}},b.a.createElement(be,Object.assign({className:"click-to-remove-icon"},P(n,"removeVarIcon"),{onClick:function(){F.dispatch({name:"VARIABLE_REMOVED",rjvId:s,data:{name:o,namespace:a.splice(0,a.length-1),existing_value:i,variable_removed:!0}})}})))},e.render=function(){var t=e.props,r=t.theme,n=t.onDelete,a=t.onAdd,o=t.enableClipboard,i=t.src,s=t.namespace,l=t.rowHovered;return b.a.createElement("div",Object.assign({},P(r,"object-meta-data"),{className:"object-meta-data",onClick:function(e){e.stopPropagation()}}),e.getObjectSize(),o?b.a.createElement(Se,{rowHovered:l,clickCallback:o,src:i,theme:r,namespace:s}):null,!1!==a?e.getAddAttribute(l):null,!1!==n?e.getRemoveObject(l):null)},e}return r}(b.a.PureComponent);function Ce(e){var t=e.parent_type,r=e.namespace,n=e.quotesOnKeys,a=e.theme,o=e.jsvRoot,i=e.name,s=e.displayArrayKey,l=e.name?e.name:"";return!o||!1!==i&&null!==i?"array"==t?s?b.a.createElement("span",Object.assign({},P(a,"array-key"),{key:r}),b.a.createElement("span",{className:"array-key"},l),b.a.createElement("span",P(a,"colon"),":")):b.a.createElement("span",null):b.a.createElement("span",Object.assign({},P(a,"object-name"),{key:r}),b.a.createElement("span",{className:"object-key"},n&&b.a.createElement("span",{style:{verticalAlign:"top"}},'"'),b.a.createElement("span",null,l),n&&b.a.createElement("span",{style:{verticalAlign:"top"}},'"')),b.a.createElement("span",P(a,"colon"),":")):b.a.createElement("span",null)}function _e(e){var t=e.theme;switch(e.iconStyle){case"triangle":return b.a.createElement(me,Object.assign({},P(t,"expanded-icon"),{className:"expanded-icon"}));case"square":return b.a.createElement(pe,Object.assign({},P(t,"expanded-icon"),{className:"expanded-icon"}));default:return b.a.createElement(ue,Object.assign({},P(t,"expanded-icon"),{className:"expanded-icon"}))}}function Oe(e){var t=e.theme;switch(e.iconStyle){case"triangle":return b.a.createElement(he,Object.assign({},P(t,"collapsed-icon"),{className:"collapsed-icon"}));case"square":return b.a.createElement(fe,Object.assign({},P(t,"collapsed-icon"),{className:"collapsed-icon"}));default:return b.a.createElement(de,Object.assign({},P(t,"collapsed-icon"),{className:"collapsed-icon"}))}}var Pe=function(e){u(r,e);var t=m(r);function r(e){var n;return i(this,r),(n=t.call(this,e)).toggleCollapsed=function(e){var t=[];for(var r in n.state.expanded)t.push(n.state.expanded[r]);t[e]=!t[e],n.setState({expanded:t})},n.state={expanded:[]},n}return l(r,[{key:"getExpandedIcon",value:function(e){var t=this.props,r=t.theme,n=t.iconStyle;return this.state.expanded[e]?b.a.createElement(_e,{theme:r,iconStyle:n}):b.a.createElement(Oe,{theme:r,iconStyle:n})}},{key:"render",value:function(){var e=this,t=this.props,r=t.src,n=t.groupArraysAfterLength,a=(t.depth,t.name),o=t.theme,i=t.jsvRoot,s=t.namespace,l=(t.parent_type,k(t,["src","groupArraysAfterLength","depth","name","theme","jsvRoot","namespace","parent_type"])),c=0,u=5*this.props.indentWidth;i||(c=5*this.props.indentWidth);var d=n,p=Math.ceil(r.length/d);return b.a.createElement("div",Object.assign({className:"object-key-val"},P(o,i?"jsv-root":"objectKeyVal",{paddingLeft:c})),b.a.createElement(Ce,this.props),b.a.createElement("span",null,b.a.createElement(Ee,Object.assign({size:r.length},this.props))),M(Array(p)).map((function(t,n){return b.a.createElement("div",Object.assign({key:n,className:"object-key-val array-group"},P(o,"objectKeyVal",{marginLeft:6,paddingLeft:u})),b.a.createElement("span",P(o,"brace-row"),b.a.createElement("div",Object.assign({className:"icon-container"},P(o,"icon-container"),{onClick:function(t){e.toggleCollapsed(n)}}),e.getExpandedIcon(n)),e.state.expanded[n]?b.a.createElement(ze,Object.assign({key:a+n,depth:0,name:!1,collapsed:!1,groupArraysAfterLength:d,index_offset:n*d,src:r.slice(n*d,n*d+d),namespace:s,type:"array",parent_type:"array_group",theme:o},l)):b.a.createElement("span",Object.assign({},P(o,"brace"),{onClick:function(t){e.toggleCollapsed(n)},className:"array-group-brace"}),"[",b.a.createElement("div",Object.assign({},P(o,"array-group-meta-data"),{className:"array-group-meta-data"}),b.a.createElement("span",Object.assign({className:"object-size"},P(o,"object-size")),n*d," - ",n*d+d>r.length?r.length:n*d+d)),"]")))})))}}]),r}(b.a.PureComponent),Ae=function(e){u(r,e);var t=m(r);function r(e){var n;i(this,r),(n=t.call(this,e)).toggleCollapsed=function(){n.setState({expanded:!n.state.expanded},(function(){B.set(n.props.rjvId,n.props.namespace,"expanded",n.state.expanded)}))},n.getObjectContent=function(e,t,r){return b.a.createElement("div",{className:"pushed-content object-container"},b.a.createElement("div",Object.assign({className:"object-content"},P(n.props.theme,"pushed-content")),n.renderObjectContents(t,r)))},n.getEllipsis=function(){return 0===n.state.size?null:b.a.createElement("div",Object.assign({},P(n.props.theme,"ellipsis"),{className:"node-ellipsis",onClick:n.toggleCollapsed}),"...")},n.getObjectMetaData=function(e){var t=n.props,r=(t.rjvId,t.theme,n.state),a=r.size,o=r.hovered;return b.a.createElement(Ee,Object.assign({rowHovered:o,size:a},n.props))},n.renderObjectContents=function(e,t){var r,a=n.props,o=a.depth,i=a.parent_type,s=a.index_offset,l=a.groupArraysAfterLength,c=a.namespace,u=n.state.object_type,d=[],p=Object.keys(e||{});return n.props.sortKeys&&"array"!==u&&(p=p.sort()),p.forEach((function(a){if(r=new Te(a,e[a]),"array_group"===i&&s&&(r.name=parseInt(r.name)+s),e.hasOwnProperty(a))if("object"===r.type)d.push(b.a.createElement(ze,Object.assign({key:r.name,depth:o+1,name:r.name,src:r.value,namespace:c.concat(r.name),parent_type:u},t)));else if("array"===r.type){var p=ze;l&&r.value.length>l&&(p=Pe),d.push(b.a.createElement(p,Object.assign({key:r.name,depth:o+1,name:r.name,src:r.value,namespace:c.concat(r.name),type:"array",parent_type:u},t)))}else d.push(b.a.createElement(je,Object.assign({key:r.name+"_"+c,variable:r,singleIndent:5,namespace:c,type:n.props.type},t)))})),d};var a=r.getState(e);return n.state=o(o({},a),{},{prevProps:{}}),n}return l(r,[{key:"getBraceStart",value:function(e,t){var r=this,n=this.props,a=n.src,o=n.theme,i=n.iconStyle;if("array_group"===n.parent_type)return b.a.createElement("span",null,b.a.createElement("span",P(o,"brace"),"array"===e?"[":"{"),t?this.getObjectMetaData(a):null);var s=t?_e:Oe;return b.a.createElement("span",null,b.a.createElement("span",Object.assign({onClick:function(e){r.toggleCollapsed()}},P(o,"brace-row")),b.a.createElement("div",Object.assign({className:"icon-container"},P(o,"icon-container")),b.a.createElement(s,{theme:o,iconStyle:i})),b.a.createElement(Ce,this.props),b.a.createElement("span",P(o,"brace"),"array"===e?"[":"{")),t?this.getObjectMetaData(a):null)}},{key:"render",value:function(){var e=this,t=this.props,r=t.depth,n=t.src,a=(t.namespace,t.name,t.type,t.parent_type),i=t.theme,s=t.jsvRoot,l=t.iconStyle,c=k(t,["depth","src","namespace","name","type","parent_type","theme","jsvRoot","iconStyle"]),u=this.state,d=u.object_type,p=u.expanded,f={};return s||"array_group"===a?"array_group"===a&&(f.borderLeft=0,f.display="inline"):f.paddingLeft=5*this.props.indentWidth,b.a.createElement("div",Object.assign({className:"object-key-val",onMouseEnter:function(){return e.setState(o(o({},e.state),{},{hovered:!0}))},onMouseLeave:function(){return e.setState(o(o({},e.state),{},{hovered:!1}))}},P(i,s?"jsv-root":"objectKeyVal",f)),this.getBraceStart(d,p),p?this.getObjectContent(r,n,o({theme:i,iconStyle:l},c)):this.getEllipsis(),b.a.createElement("span",{className:"brace-row"},b.a.createElement("span",{style:o(o({},P(i,"brace").style),{},{paddingLeft:p?"3px":"0px"})},"array"===d?"]":"}"),p?null:this.getObjectMetaData(n)))}}],[{key:"getDerivedStateFromProps",value:function(e,t){var n=t.prevProps;return e.src!==n.src||e.collapsed!==n.collapsed||e.name!==n.name||e.namespace!==n.namespace||e.rjvId!==n.rjvId?o(o({},r.getState(e)),{},{prevProps:e}):null}}]),r}(b.a.PureComponent);Ae.getState=function(e){var t=Object.keys(e.src).length,r=(!1===e.collapsed||!0!==e.collapsed&&e.collapsed>e.depth)&&(!e.shouldCollapse||!1===e.shouldCollapse({name:e.name,src:e.src,type:S(e.src),namespace:e.namespace}))&&0!==t;return{expanded:B.get(e.rjvId,e.namespace,"expanded",r),object_type:"array"===e.type?"array":"object",parent_type:"array"===e.type?"array":"object",size:t,hovered:!1}};var Te=function e(t,r){i(this,e),this.name=t,this.value=r,this.type=S(r)};w(Ae);var ze=Ae,Ie=function(e){u(r,e);var t=m(r);function r(){var e;i(this,r);for(var n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return(e=t.call.apply(t,[this].concat(a))).render=function(){var t=f(e).props,r=[t.name],n=ze;return Array.isArray(t.src)&&t.groupArraysAfterLength&&t.src.length>t.groupArraysAfterLength&&(n=Pe),b.a.createElement("div",{className:"pretty-json-container object-container"},b.a.createElement("div",{className:"object-content"},b.a.createElement(n,Object.assign({namespace:r,depth:0,jsvRoot:!0},t))))},e}return r}(b.a.PureComponent),De=function(e){u(r,e);var t=m(r);function r(e){var n;return i(this,r),(n=t.call(this,e)).closeModal=function(){F.dispatch({rjvId:n.props.rjvId,name:"RESET"})},n.submit=function(){n.props.submit(n.state.input)},n.state={input:e.input?e.input:""},n}return l(r,[{key:"render",value:function(){var e=this,t=this.props,r=t.theme,n=t.rjvId,a=t.isValid,o=this.state.input,i=a(o);return b.a.createElement("div",Object.assign({className:"key-modal-request"},P(r,"key-modal-request"),{onClick:this.closeModal}),b.a.createElement("div",Object.assign({},P(r,"key-modal"),{onClick:function(e){e.stopPropagation()}}),b.a.createElement("div",P(r,"key-modal-label"),"Key Name:"),b.a.createElement("div",{style:{position:"relative"}},b.a.createElement("input",Object.assign({},P(r,"key-modal-input"),{className:"key-modal-input",ref:function(e){return e&&e.focus()},spellCheck:!1,value:o,placeholder:"...",onChange:function(t){e.setState({input:t.target.value})},onKeyPress:function(t){i&&"Enter"===t.key?e.submit():"Escape"===t.key&&e.closeModal()}})),i?b.a.createElement(we,Object.assign({},P(r,"key-modal-submit"),{className:"key-modal-submit",onClick:function(t){return e.submit()}})):null),b.a.createElement("span",P(r,"key-modal-cancel"),b.a.createElement(ye,Object.assign({},P(r,"key-modal-cancel-icon"),{className:"key-modal-cancel",onClick:function(){F.dispatch({rjvId:n,name:"RESET"})}})))))}}]),r}(b.a.PureComponent),Re=function(e){u(r,e);var t=m(r);function r(){var e;i(this,r);for(var n=arguments.length,a=new Array(n),s=0;s<n;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).isValid=function(t){var r=e.props.rjvId,n=B.get(r,"action","new-key-request");return""!=t&&-1===Object.keys(n.existing_value).indexOf(t)},e.submit=function(t){var r=e.props.rjvId,n=B.get(r,"action","new-key-request");n.new_value=o({},n.existing_value),n.new_value[t]=e.props.defaultValue,F.dispatch({name:"VARIABLE_ADDED",rjvId:r,data:n})},e}return l(r,[{key:"render",value:function(){var e=this.props,t=e.active,r=e.theme,n=e.rjvId;return t?b.a.createElement(De,{rjvId:n,theme:r,isValid:this.isValid,submit:this.submit}):null}}]),r}(b.a.PureComponent),Ne=function(e){u(r,e);var t=m(r);function r(){return i(this,r),t.apply(this,arguments)}return l(r,[{key:"render",value:function(){var e=this.props,t=e.message,r=e.active,n=e.theme,a=e.rjvId;return r?b.a.createElement("div",Object.assign({className:"validation-failure"},P(n,"validation-failure"),{onClick:function(){F.dispatch({rjvId:a,name:"RESET"})}}),b.a.createElement("span",P(n,"validation-failure-label"),t),b.a.createElement(ye,P(n,"validation-failure-clear"))):null}}]),r}(b.a.PureComponent),Me=function(e){u(r,e);var t=m(r);function r(e){var n;return i(this,r),(n=t.call(this,e)).rjvId=Date.now().toString(),n.getListeners=function(){return{reset:n.resetState,"variable-update":n.updateSrc,"add-key-request":n.addKeyRequest}},n.updateSrc=function(){var e,t=B.get(n.rjvId,"action","variable-update"),r=t.name,a=t.namespace,o=t.new_value,i=t.existing_value,s=(t.variable_removed,t.updated_src),l=t.type,c=n.props,u=c.onEdit,d=c.onDelete,p=c.onAdd,f={existing_src:n.state.src,new_value:o,updated_src:s,name:r,namespace:a,existing_value:i};switch(l){case"variable-added":e=p(f);break;case"variable-edited":e=u(f);break;case"variable-removed":e=d(f)}!1!==e?(B.set(n.rjvId,"global","src",s),n.setState({src:s})):n.setState({validationFailure:!0})},n.addKeyRequest=function(){n.setState({addKeyRequest:!0})},n.resetState=function(){n.setState({validationFailure:!1,addKeyRequest:!1})},n.state={addKeyRequest:!1,editKeyRequest:!1,validationFailure:!1,src:r.defaultProps.src,name:r.defaultProps.name,theme:r.defaultProps.theme,validationMessage:r.defaultProps.validationMessage,prevSrc:r.defaultProps.src,prevName:r.defaultProps.name,prevTheme:r.defaultProps.theme},n}return l(r,[{key:"componentDidMount",value:function(){B.set(this.rjvId,"global","src",this.state.src);var e=this.getListeners();for(var t in e)B.on(t+"-"+this.rjvId,e[t]);this.setState({addKeyRequest:!1,editKeyRequest:!1})}},{key:"componentDidUpdate",value:function(e,t){!1!==t.addKeyRequest&&this.setState({addKeyRequest:!1}),!1!==t.editKeyRequest&&this.setState({editKeyRequest:!1}),e.src!==this.state.src&&B.set(this.rjvId,"global","src",this.state.src)}},{key:"componentWillUnmount",value:function(){var e=this.getListeners();for(var t in e)B.removeListener(t+"-"+this.rjvId,e[t])}},{key:"render",value:function(){var e=this.state,t=e.validationFailure,r=e.validationMessage,n=e.addKeyRequest,a=e.theme,i=e.src,s=e.name,l=this.props,c=l.style,u=l.defaultValue;return b.a.createElement("div",{className:"react-json-view",style:o(o({},P(a,"app-container").style),c)},b.a.createElement(Ne,{message:r,active:t,theme:a,rjvId:this.rjvId}),b.a.createElement(Ie,Object.assign({},this.props,{src:i,name:s,theme:a,type:S(i),rjvId:this.rjvId})),b.a.createElement(Re,{active:n,theme:a,rjvId:this.rjvId,defaultValue:u}))}}],[{key:"getDerivedStateFromProps",value:function(e,t){if(e.src!==t.prevSrc||e.name!==t.prevName||e.theme!==t.prevTheme){var n={src:e.src,name:e.name,theme:e.theme,validationMessage:e.validationMessage,prevSrc:e.src,prevName:e.name,prevTheme:e.theme};return r.validateState(n)}return null}}]),r}(b.a.PureComponent);Me.defaultProps={src:{},name:"root",theme:"rjv-default",collapsed:!1,collapseStringsAfterLength:!1,shouldCollapse:!1,sortKeys:!1,quotesOnKeys:!0,groupArraysAfterLength:100,indentWidth:4,enableClipboard:!0,displayObjectSize:!0,displayDataTypes:!0,onEdit:!1,onDelete:!1,onAdd:!1,onSelect:!1,iconStyle:"triangle",style:{},validationMessage:"Validation Error",defaultValue:null,displayArrayKey:!0},Me.validateState=function(e){var t={};return"object"!==S(e.theme)||function(e){var t=["base00","base01","base02","base03","base04","base05","base06","base07","base08","base09","base0A","base0B","base0C","base0D","base0E","base0F"];if("object"===S(e)){for(var r=0;r<t.length;r++)if(!(t[r]in e))return!1;return!0}return!1}(e.theme)||(console.error("react-json-view error:","theme prop must be a theme name or valid base-16 theme object.",'defaulting to "rjv-default" theme'),t.theme="rjv-default"),"object"!==S(e.src)&&"array"!==S(e.src)&&(console.error("react-json-view error:","src property must be a valid json object"),t.name="ERROR",t.src={message:"src property must be a valid json object"}),o(o({},e),t)},w(Me),t.default=Me}]))},950:(e,t,r)=>{"use strict";e.exports=r(49)}},t={};function r(n){var a=t[n];if(void 0!==a)return a.exports;var o=t[n]={exports:{}};return e[n].call(o.exports,o,o.exports,r),o.exports}r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.nc=void 0,(()=>{"use strict";var e=r(950),t=r(119),n=r(795),a=r.n(n);var o=function(){return o=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var a in t=arguments[r])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},o.apply(this,arguments)};Object.create;function i(e,t,r){if(r||2===arguments.length)for(var n,a=0,o=t.length;a<o;a++)!n&&a in t||(n||(n=Array.prototype.slice.call(t,0,a)),n[a]=t[a]);return e.concat(n||Array.prototype.slice.call(t))}Object.create;"function"===typeof SuppressedError&&SuppressedError;var s=r(403),l=r.n(s),c="-ms-",u="-moz-",d="-webkit-",p="comm",f="rule",h="decl",m="@keyframes",g=Math.abs,b=String.fromCharCode,v=Object.assign;function y(e){return e.trim()}function x(e,t){return(e=t.exec(e))?e[0]:e}function w(e,t,r){return e.replace(t,r)}function k(e,t,r){return e.indexOf(t,r)}function S(e,t){return 0|e.charCodeAt(t)}function j(e,t,r){return e.slice(t,r)}function E(e){return e.length}function C(e){return e.length}function _(e,t){return t.push(e),e}function O(e,t){return e.filter((function(e){return!x(e,t)}))}var P=1,A=1,T=0,z=0,I=0,D="";function R(e,t,r,n,a,o,i,s){return{value:e,root:t,parent:r,type:n,props:a,children:o,line:P,column:A,length:i,return:"",siblings:s}}function N(e,t){return v(R("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function M(e){for(;e.root;)e=N(e.root,{children:[e]});_(e,e.siblings)}function L(){return I=z>0?S(D,--z):0,A--,10===I&&(A=1,P--),I}function F(){return I=z<T?S(D,z++):0,A++,10===I&&(A=1,P++),I}function $(){return S(D,z)}function B(){return z}function q(e,t){return j(D,e,t)}function W(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function U(e){return P=A=1,T=E(D=e),z=0,[]}function V(e){return D="",e}function H(e){return y(q(z-1,Y(91===e?e+2:40===e?e+1:e)))}function K(e){for(;(I=$())&&I<33;)F();return W(e)>2||W(I)>3?"":" "}function G(e,t){for(;--t&&F()&&!(I<48||I>102||I>57&&I<65||I>70&&I<97););return q(e,B()+(t<6&&32==$()&&32==F()))}function Y(e){for(;F();)switch(I){case e:return z;case 34:case 39:34!==e&&39!==e&&Y(I);break;case 40:41===e&&Y(e);break;case 92:F()}return z}function J(e,t){for(;F()&&e+I!==57&&(e+I!==84||47!==$()););return"/*"+q(t,z-1)+"*"+b(47===e?e:F())}function Q(e){for(;!W($());)F();return q(e,z)}function X(e,t){for(var r="",n=0;n<e.length;n++)r+=t(e[n],n,e,t)||"";return r}function Z(e,t,r,n){switch(e.type){case"@layer":if(e.children.length)break;case"@import":case h:return e.return=e.return||e.value;case p:return"";case m:return e.return=e.value+"{"+X(e.children,n)+"}";case f:if(!E(e.value=e.props.join(",")))return""}return E(r=X(e.children,n))?e.return=e.value+"{"+r+"}":""}function ee(e,t,r){switch(function(e,t){return 45^S(e,0)?(((t<<2^S(e,0))<<2^S(e,1))<<2^S(e,2))<<2^S(e,3):0}(e,t)){case 5103:return d+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return d+e+e;case 4789:return u+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return d+e+u+e+c+e+e;case 5936:switch(S(e,t+11)){case 114:return d+e+c+w(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return d+e+c+w(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return d+e+c+w(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return d+e+c+e+e;case 6165:return d+e+c+"flex-"+e+e;case 5187:return d+e+w(e,/(\w+).+(:[^]+)/,d+"box-$1$2"+c+"flex-$1$2")+e;case 5443:return d+e+c+"flex-item-"+w(e,/flex-|-self/g,"")+(x(e,/flex-|baseline/)?"":c+"grid-row-"+w(e,/flex-|-self/g,""))+e;case 4675:return d+e+c+"flex-line-pack"+w(e,/align-content|flex-|-self/g,"")+e;case 5548:return d+e+c+w(e,"shrink","negative")+e;case 5292:return d+e+c+w(e,"basis","preferred-size")+e;case 6060:return d+"box-"+w(e,"-grow","")+d+e+c+w(e,"grow","positive")+e;case 4554:return d+w(e,/([^-])(transform)/g,"$1"+d+"$2")+e;case 6187:return w(w(w(e,/(zoom-|grab)/,d+"$1"),/(image-set)/,d+"$1"),e,"")+e;case 5495:case 3959:return w(e,/(image-set\([^]*)/,d+"$1$`$1");case 4968:return w(w(e,/(.+:)(flex-)?(.*)/,d+"box-pack:$3"+c+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+d+e+e;case 4200:if(!x(e,/flex-|baseline/))return c+"grid-column-align"+j(e,t)+e;break;case 2592:case 3360:return c+w(e,"template-","")+e;case 4384:case 3616:return r&&r.some((function(e,r){return t=r,x(e.props,/grid-\w+-end/)}))?~k(e+(r=r[t].value),"span",0)?e:c+w(e,"-start","")+e+c+"grid-row-span:"+(~k(r,"span",0)?x(r,/\d+/):+x(r,/\d+/)-+x(e,/\d+/))+";":c+w(e,"-start","")+e;case 4896:case 4128:return r&&r.some((function(e){return x(e.props,/grid-\w+-start/)}))?e:c+w(w(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return w(e,/(.+)-inline(.+)/,d+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(E(e)-1-t>6)switch(S(e,t+1)){case 109:if(45!==S(e,t+4))break;case 102:return w(e,/(.+:)(.+)-([^]+)/,"$1"+d+"$2-$3$1"+u+(108==S(e,t+3)?"$3":"$2-$3"))+e;case 115:return~k(e,"stretch",0)?ee(w(e,"stretch","fill-available"),t,r)+e:e}break;case 5152:case 5920:return w(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,(function(t,r,n,a,o,i,s){return c+r+":"+n+s+(a?c+r+"-span:"+(o?i:+i-+n)+s:"")+e}));case 4949:if(121===S(e,t+6))return w(e,":",":"+d)+e;break;case 6444:switch(S(e,45===S(e,14)?18:11)){case 120:return w(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+d+(45===S(e,14)?"inline-":"")+"box$3$1"+d+"$2$3$1"+c+"$2box$3")+e;case 100:return w(e,":",":"+c)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return w(e,"scroll-","scroll-snap-")+e}return e}function te(e,t,r,n){if(e.length>-1&&!e.return)switch(e.type){case h:return void(e.return=ee(e.value,e.length,r));case m:return X([N(e,{value:w(e.value,"@","@"+d)})],n);case f:if(e.length)return function(e,t){return e.map(t).join("")}(r=e.props,(function(t){switch(x(t,n=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":M(N(e,{props:[w(t,/:(read-\w+)/,":-moz-$1")]})),M(N(e,{props:[t]})),v(e,{props:O(r,n)});break;case"::placeholder":M(N(e,{props:[w(t,/:(plac\w+)/,":"+d+"input-$1")]})),M(N(e,{props:[w(t,/:(plac\w+)/,":-moz-$1")]})),M(N(e,{props:[w(t,/:(plac\w+)/,c+"input-$1")]})),M(N(e,{props:[t]})),v(e,{props:O(r,n)})}return""}))}}function re(e){return V(ne("",null,null,null,[""],e=U(e),0,[0],e))}function ne(e,t,r,n,a,o,i,s,l){for(var c=0,u=0,d=i,p=0,f=0,h=0,m=1,v=1,y=1,x=0,j="",C=a,O=o,P=n,A=j;v;)switch(h=x,x=F()){case 40:if(108!=h&&58==S(A,d-1)){-1!=k(A+=w(H(x),"&","&\f"),"&\f",g(c?s[c-1]:0))&&(y=-1);break}case 34:case 39:case 91:A+=H(x);break;case 9:case 10:case 13:case 32:A+=K(h);break;case 92:A+=G(B()-1,7);continue;case 47:switch($()){case 42:case 47:_(oe(J(F(),B()),t,r,l),l);break;default:A+="/"}break;case 123*m:s[c++]=E(A)*y;case 125*m:case 59:case 0:switch(x){case 0:case 125:v=0;case 59+u:-1==y&&(A=w(A,/\f/g,"")),f>0&&E(A)-d&&_(f>32?ie(A+";",n,r,d-1,l):ie(w(A," ","")+";",n,r,d-2,l),l);break;case 59:A+=";";default:if(_(P=ae(A,t,r,c,u,a,s,j,C=[],O=[],d,o),o),123===x)if(0===u)ne(A,t,P,P,C,o,d,s,O);else switch(99===p&&110===S(A,3)?100:p){case 100:case 108:case 109:case 115:ne(e,P,P,n&&_(ae(e,P,P,0,0,a,s,j,a,C=[],d,O),O),a,O,d,s,n?C:O);break;default:ne(A,P,P,P,[""],O,0,s,O)}}c=u=f=0,m=y=1,j=A="",d=i;break;case 58:d=1+E(A),f=h;default:if(m<1)if(123==x)--m;else if(125==x&&0==m++&&125==L())continue;switch(A+=b(x),x*m){case 38:y=u>0?1:(A+="\f",-1);break;case 44:s[c++]=(E(A)-1)*y,y=1;break;case 64:45===$()&&(A+=H(F())),p=$(),u=d=E(j=A+=Q(B())),x++;break;case 45:45===h&&2==E(A)&&(m=0)}}return o}function ae(e,t,r,n,a,o,i,s,l,c,u,d){for(var p=a-1,h=0===a?o:[""],m=C(h),b=0,v=0,x=0;b<n;++b)for(var k=0,S=j(e,p+1,p=g(v=i[b])),E=e;k<m;++k)(E=y(v>0?h[k]+" "+S:w(S,/&\f/g,h[k])))&&(l[x++]=E);return R(e,t,r,0===a?f:s,l,c,u,d)}function oe(e,t,r,n){return R(e,t,r,p,b(I),j(e,2,-2),0,n)}function ie(e,t,r,n,a){return R(e,t,r,h,j(e,0,n),j(e,n+1,-1),n,a)}var se={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},le="undefined"!=typeof process&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}&&({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_ATTR||{NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_ATTR)||"data-styled",ce="active",ue="data-styled-version",de="6.1.17",pe="/*!sc*/\n",fe="undefined"!=typeof window&&"HTMLElement"in window,he=Boolean("boolean"==typeof SC_DISABLE_SPEEDY?SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_DISABLE_SPEEDY&&""!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_DISABLE_SPEEDY?"false"!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_DISABLE_SPEEDY&&{NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_DISABLE_SPEEDY&&""!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_DISABLE_SPEEDY&&("false"!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_DISABLE_SPEEDY&&{NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_DISABLE_SPEEDY)),me={},ge=(new Set,Object.freeze([])),be=Object.freeze({});function ve(e,t,r){return void 0===r&&(r=be),e.theme!==r.theme&&e.theme||t||r.theme}var ye=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),xe=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,we=/(^-|-$)/g;function ke(e){return e.replace(xe,"-").replace(we,"")}var Se=/(a)(d)/gi,je=function(e){return String.fromCharCode(e+(e>25?39:97))};function Ee(e){var t,r="";for(t=Math.abs(e);t>52;t=t/52|0)r=je(t%52)+r;return(je(t%52)+r).replace(Se,"$1-$2")}var Ce,_e=function(e,t){for(var r=t.length;r;)e=33*e^t.charCodeAt(--r);return e},Oe=function(e){return _e(5381,e)};function Pe(e){return Ee(Oe(e)>>>0)}function Ae(e){return e.displayName||e.name||"Component"}function Te(e){return"string"==typeof e&&!0}var ze="function"==typeof Symbol&&Symbol.for,Ie=ze?Symbol.for("react.memo"):60115,De=ze?Symbol.for("react.forward_ref"):60112,Re={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Ne={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Me={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Le=((Ce={})[De]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Ce[Ie]=Me,Ce);function Fe(e){return("type"in(t=e)&&t.type.$$typeof)===Ie?Me:"$$typeof"in e?Le[e.$$typeof]:Re;var t}var $e=Object.defineProperty,Be=Object.getOwnPropertyNames,qe=Object.getOwnPropertySymbols,We=Object.getOwnPropertyDescriptor,Ue=Object.getPrototypeOf,Ve=Object.prototype;function He(e,t,r){if("string"!=typeof t){if(Ve){var n=Ue(t);n&&n!==Ve&&He(e,n,r)}var a=Be(t);qe&&(a=a.concat(qe(t)));for(var o=Fe(e),i=Fe(t),s=0;s<a.length;++s){var l=a[s];if(!(l in Ne||r&&r[l]||i&&l in i||o&&l in o)){var c=We(t,l);try{$e(e,l,c)}catch(e){}}}}return e}function Ke(e){return"function"==typeof e}function Ge(e){return"object"==typeof e&&"styledComponentId"in e}function Ye(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function Je(e,t){if(0===e.length)return"";for(var r=e[0],n=1;n<e.length;n++)r+=t?t+e[n]:e[n];return r}function Qe(e){return null!==e&&"object"==typeof e&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function Xe(e,t,r){if(void 0===r&&(r=!1),!r&&!Qe(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var n=0;n<t.length;n++)e[n]=Xe(e[n],t[n]);else if(Qe(t))for(var n in t)e[n]=Xe(e[n],t[n]);return e}function Ze(e,t){Object.defineProperty(e,"toString",{value:t})}function et(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var tt=function(){function e(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}return e.prototype.indexOfGroup=function(e){for(var t=0,r=0;r<e;r++)t+=this.groupSizes[r];return t},e.prototype.insertRules=function(e,t){if(e>=this.groupSizes.length){for(var r=this.groupSizes,n=r.length,a=n;e>=a;)if((a<<=1)<0)throw et(16,"".concat(e));this.groupSizes=new Uint32Array(a),this.groupSizes.set(r),this.length=a;for(var o=n;o<a;o++)this.groupSizes[o]=0}for(var i=this.indexOfGroup(e+1),s=(o=0,t.length);o<s;o++)this.tag.insertRule(i,t[o])&&(this.groupSizes[e]++,i++)},e.prototype.clearGroup=function(e){if(e<this.length){var t=this.groupSizes[e],r=this.indexOfGroup(e),n=r+t;this.groupSizes[e]=0;for(var a=r;a<n;a++)this.tag.deleteRule(r)}},e.prototype.getGroup=function(e){var t="";if(e>=this.length||0===this.groupSizes[e])return t;for(var r=this.groupSizes[e],n=this.indexOfGroup(e),a=n+r,o=n;o<a;o++)t+="".concat(this.tag.getRule(o)).concat(pe);return t},e}(),rt=new Map,nt=new Map,at=1,ot=function(e){if(rt.has(e))return rt.get(e);for(;nt.has(at);)at++;var t=at++;return rt.set(e,t),nt.set(t,e),t},it=function(e,t){at=t+1,rt.set(e,t),nt.set(t,e)},st="style[".concat(le,"][").concat(ue,'="').concat(de,'"]'),lt=new RegExp("^".concat(le,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),ct=function(e,t,r){for(var n,a=r.split(","),o=0,i=a.length;o<i;o++)(n=a[o])&&e.registerName(t,n)},ut=function(e,t){for(var r,n=(null!==(r=t.textContent)&&void 0!==r?r:"").split(pe),a=[],o=0,i=n.length;o<i;o++){var s=n[o].trim();if(s){var l=s.match(lt);if(l){var c=0|parseInt(l[1],10),u=l[2];0!==c&&(it(u,c),ct(e,u,l[3]),e.getTag().insertRules(c,a)),a.length=0}else a.push(s)}}},dt=function(e){for(var t=document.querySelectorAll(st),r=0,n=t.length;r<n;r++){var a=t[r];a&&a.getAttribute(le)!==ce&&(ut(e,a),a.parentNode&&a.parentNode.removeChild(a))}};function pt(){return r.nc}var ft=function(e){var t=document.head,r=e||t,n=document.createElement("style"),a=function(e){var t=Array.from(e.querySelectorAll("style[".concat(le,"]")));return t[t.length-1]}(r),o=void 0!==a?a.nextSibling:null;n.setAttribute(le,ce),n.setAttribute(ue,de);var i=pt();return i&&n.setAttribute("nonce",i),r.insertBefore(n,o),n},ht=function(){function e(e){this.element=ft(e),this.element.appendChild(document.createTextNode("")),this.sheet=function(e){if(e.sheet)return e.sheet;for(var t=document.styleSheets,r=0,n=t.length;r<n;r++){var a=t[r];if(a.ownerNode===e)return a}throw et(17)}(this.element),this.length=0}return e.prototype.insertRule=function(e,t){try{return this.sheet.insertRule(t,e),this.length++,!0}catch(e){return!1}},e.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},e.prototype.getRule=function(e){var t=this.sheet.cssRules[e];return t&&t.cssText?t.cssText:""},e}(),mt=function(){function e(e){this.element=ft(e),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(e,t){if(e<=this.length&&e>=0){var r=document.createTextNode(t);return this.element.insertBefore(r,this.nodes[e]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},e.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},e}(),gt=function(){function e(e){this.rules=[],this.length=0}return e.prototype.insertRule=function(e,t){return e<=this.length&&(this.rules.splice(e,0,t),this.length++,!0)},e.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},e.prototype.getRule=function(e){return e<this.length?this.rules[e]:""},e}(),bt=fe,vt={isServer:!fe,useCSSOMInjection:!he},yt=function(){function e(e,t,r){void 0===e&&(e=be),void 0===t&&(t={});var n=this;this.options=o(o({},vt),e),this.gs=t,this.names=new Map(r),this.server=!!e.isServer,!this.server&&fe&&bt&&(bt=!1,dt(this)),Ze(this,(function(){return function(e){for(var t=e.getTag(),r=t.length,n="",a=function(r){var a=function(e){return nt.get(e)}(r);if(void 0===a)return"continue";var o=e.names.get(a),i=t.getGroup(r);if(void 0===o||!o.size||0===i.length)return"continue";var s="".concat(le,".g").concat(r,'[id="').concat(a,'"]'),l="";void 0!==o&&o.forEach((function(e){e.length>0&&(l+="".concat(e,","))})),n+="".concat(i).concat(s,'{content:"').concat(l,'"}').concat(pe)},o=0;o<r;o++)a(o);return n}(n)}))}return e.registerId=function(e){return ot(e)},e.prototype.rehydrate=function(){!this.server&&fe&&dt(this)},e.prototype.reconstructWithOptions=function(t,r){return void 0===r&&(r=!0),new e(o(o({},this.options),t),this.gs,r&&this.names||void 0)},e.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(e=function(e){var t=e.useCSSOMInjection,r=e.target;return e.isServer?new gt(r):t?new ht(r):new mt(r)}(this.options),new tt(e)));var e},e.prototype.hasNameForId=function(e,t){return this.names.has(e)&&this.names.get(e).has(t)},e.prototype.registerName=function(e,t){if(ot(e),this.names.has(e))this.names.get(e).add(t);else{var r=new Set;r.add(t),this.names.set(e,r)}},e.prototype.insertRules=function(e,t,r){this.registerName(e,t),this.getTag().insertRules(ot(e),r)},e.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},e.prototype.clearRules=function(e){this.getTag().clearGroup(ot(e)),this.clearNames(e)},e.prototype.clearTag=function(){this.tag=void 0},e}(),xt=/&/g,wt=/^\s*\/\/.*$/gm;function kt(e,t){return e.map((function(e){return"rule"===e.type&&(e.value="".concat(t," ").concat(e.value),e.value=e.value.replaceAll(",",",".concat(t," ")),e.props=e.props.map((function(e){return"".concat(t," ").concat(e)}))),Array.isArray(e.children)&&"@keyframes"!==e.type&&(e.children=kt(e.children,t)),e}))}function St(e){var t,r,n,a=void 0===e?be:e,o=a.options,i=void 0===o?be:o,s=a.plugins,l=void 0===s?ge:s,c=function(e,n,a){return a.startsWith(r)&&a.endsWith(r)&&a.replaceAll(r,"").length>0?".".concat(t):e},u=l.slice();u.push((function(e){e.type===f&&e.value.includes("&")&&(e.props[0]=e.props[0].replace(xt,r).replace(n,c))})),i.prefix&&u.push(te),u.push(Z);var d=function(e,a,o,s){void 0===a&&(a=""),void 0===o&&(o=""),void 0===s&&(s="&"),t=s,r=a,n=new RegExp("\\".concat(r,"\\b"),"g");var l=e.replace(wt,""),c=re(o||a?"".concat(o," ").concat(a," { ").concat(l," }"):l);i.namespace&&(c=kt(c,i.namespace));var d,p=[];return X(c,function(e){var t=C(e);return function(r,n,a,o){for(var i="",s=0;s<t;s++)i+=e[s](r,n,a,o)||"";return i}}(u.concat((d=function(e){return p.push(e)},function(e){e.root||(e=e.return)&&d(e)})))),p};return d.hash=l.length?l.reduce((function(e,t){return t.name||et(15),_e(e,t.name)}),5381).toString():"",d}var jt=new yt,Et=St(),Ct=e.createContext({shouldForwardProp:void 0,styleSheet:jt,stylis:Et}),_t=(Ct.Consumer,e.createContext(void 0));function Ot(){return(0,e.useContext)(Ct)}function Pt(t){var r=(0,e.useState)(t.stylisPlugins),n=r[0],a=r[1],o=Ot().styleSheet,i=(0,e.useMemo)((function(){var e=o;return t.sheet?e=t.sheet:t.target&&(e=e.reconstructWithOptions({target:t.target},!1)),t.disableCSSOMInjection&&(e=e.reconstructWithOptions({useCSSOMInjection:!1})),e}),[t.disableCSSOMInjection,t.sheet,t.target,o]),s=(0,e.useMemo)((function(){return St({options:{namespace:t.namespace,prefix:t.enableVendorPrefixes},plugins:n})}),[t.enableVendorPrefixes,t.namespace,n]);(0,e.useEffect)((function(){l()(n,t.stylisPlugins)||a(t.stylisPlugins)}),[t.stylisPlugins]);var c=(0,e.useMemo)((function(){return{shouldForwardProp:t.shouldForwardProp,styleSheet:i,stylis:s}}),[t.shouldForwardProp,i,s]);return e.createElement(Ct.Provider,{value:c},e.createElement(_t.Provider,{value:s},t.children))}var At=function(){function e(e,t){var r=this;this.inject=function(e,t){void 0===t&&(t=Et);var n=r.name+t.hash;e.hasNameForId(r.id,n)||e.insertRules(r.id,n,t(r.rules,n,"@keyframes"))},this.name=e,this.id="sc-keyframes-".concat(e),this.rules=t,Ze(this,(function(){throw et(12,String(r.name))}))}return e.prototype.getName=function(e){return void 0===e&&(e=Et),this.name+e.hash},e}(),Tt=function(e){return e>="A"&&e<="Z"};function zt(e){for(var t="",r=0;r<e.length;r++){var n=e[r];if(1===r&&"-"===n&&"-"===e[0])return e;Tt(n)?t+="-"+n.toLowerCase():t+=n}return t.startsWith("ms-")?"-"+t:t}var It=function(e){return null==e||!1===e||""===e},Dt=function(e){var t,r,n=[];for(var a in e){var o=e[a];e.hasOwnProperty(a)&&!It(o)&&(Array.isArray(o)&&o.isCss||Ke(o)?n.push("".concat(zt(a),":"),o,";"):Qe(o)?n.push.apply(n,i(i(["".concat(a," {")],Dt(o),!1),["}"],!1)):n.push("".concat(zt(a),": ").concat((t=a,null==(r=o)||"boolean"==typeof r||""===r?"":"number"!=typeof r||0===r||t in se||t.startsWith("--")?String(r).trim():"".concat(r,"px")),";")))}return n};function Rt(e,t,r,n){return It(e)?[]:Ge(e)?[".".concat(e.styledComponentId)]:Ke(e)?!Ke(a=e)||a.prototype&&a.prototype.isReactComponent||!t?[e]:Rt(e(t),t,r,n):e instanceof At?r?(e.inject(r,n),[e.getName(n)]):[e]:Qe(e)?Dt(e):Array.isArray(e)?Array.prototype.concat.apply(ge,e.map((function(e){return Rt(e,t,r,n)}))):[e.toString()];var a}function Nt(e){for(var t=0;t<e.length;t+=1){var r=e[t];if(Ke(r)&&!Ge(r))return!1}return!0}var Mt=Oe(de),Lt=function(){function e(e,t,r){this.rules=e,this.staticRulesId="",this.isStatic=(void 0===r||r.isStatic)&&Nt(e),this.componentId=t,this.baseHash=_e(Mt,t),this.baseStyle=r,yt.registerId(t)}return e.prototype.generateAndInjectStyles=function(e,t,r){var n=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,t,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&t.hasNameForId(this.componentId,this.staticRulesId))n=Ye(n,this.staticRulesId);else{var a=Je(Rt(this.rules,e,t,r)),o=Ee(_e(this.baseHash,a)>>>0);if(!t.hasNameForId(this.componentId,o)){var i=r(a,".".concat(o),void 0,this.componentId);t.insertRules(this.componentId,o,i)}n=Ye(n,o),this.staticRulesId=o}else{for(var s=_e(this.baseHash,r.hash),l="",c=0;c<this.rules.length;c++){var u=this.rules[c];if("string"==typeof u)l+=u;else if(u){var d=Je(Rt(u,e,t,r));s=_e(s,d+c),l+=d}}if(l){var p=Ee(s>>>0);t.hasNameForId(this.componentId,p)||t.insertRules(this.componentId,p,r(l,".".concat(p),void 0,this.componentId)),n=Ye(n,p)}}return n},e}(),Ft=e.createContext(void 0);Ft.Consumer;var $t={};new Set;function Bt(t,r,n){var a=Ge(t),i=t,s=!Te(t),l=r.attrs,c=void 0===l?ge:l,u=r.componentId,d=void 0===u?function(e,t){var r="string"!=typeof e?"sc":ke(e);$t[r]=($t[r]||0)+1;var n="".concat(r,"-").concat(Pe(de+r+$t[r]));return t?"".concat(t,"-").concat(n):n}(r.displayName,r.parentComponentId):u,p=r.displayName,f=void 0===p?function(e){return Te(e)?"styled.".concat(e):"Styled(".concat(Ae(e),")")}(t):p,h=r.displayName&&r.componentId?"".concat(ke(r.displayName),"-").concat(r.componentId):r.componentId||d,m=a&&i.attrs?i.attrs.concat(c).filter(Boolean):c,g=r.shouldForwardProp;if(a&&i.shouldForwardProp){var b=i.shouldForwardProp;if(r.shouldForwardProp){var v=r.shouldForwardProp;g=function(e,t){return b(e,t)&&v(e,t)}}else g=b}var y=new Lt(n,h,a?i.componentStyle:void 0);function x(t,r){return function(t,r,n){var a=t.attrs,i=t.componentStyle,s=t.defaultProps,l=t.foldedComponentIds,c=t.styledComponentId,u=t.target,d=e.useContext(Ft),p=Ot(),f=t.shouldForwardProp||p.shouldForwardProp,h=ve(r,d,s)||be,m=function(e,t,r){for(var n,a=o(o({},t),{className:void 0,theme:r}),i=0;i<e.length;i+=1){var s=Ke(n=e[i])?n(a):n;for(var l in s)a[l]="className"===l?Ye(a[l],s[l]):"style"===l?o(o({},a[l]),s[l]):s[l]}return t.className&&(a.className=Ye(a.className,t.className)),a}(a,r,h),g=m.as||u,b={};for(var v in m)void 0===m[v]||"$"===v[0]||"as"===v||"theme"===v&&m.theme===h||("forwardedAs"===v?b.as=m.forwardedAs:f&&!f(v,g)||(b[v]=m[v]));var y=function(e,t){var r=Ot();return e.generateAndInjectStyles(t,r.styleSheet,r.stylis)}(i,m),x=Ye(l,c);return y&&(x+=" "+y),m.className&&(x+=" "+m.className),b[Te(g)&&!ye.has(g)?"class":"className"]=x,n&&(b.ref=n),(0,e.createElement)(g,b)}(w,t,r)}x.displayName=f;var w=e.forwardRef(x);return w.attrs=m,w.componentStyle=y,w.displayName=f,w.shouldForwardProp=g,w.foldedComponentIds=a?Ye(i.foldedComponentIds,i.styledComponentId):"",w.styledComponentId=h,w.target=a?i.target:t,Object.defineProperty(w,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(e){this._foldedDefaultProps=a?function(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];for(var n=0,a=t;n<a.length;n++)Xe(e,a[n],!0);return e}({},i.defaultProps,e):e}}),Ze(w,(function(){return".".concat(w.styledComponentId)})),s&&He(w,t,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),w}function qt(e,t){for(var r=[e[0]],n=0,a=t.length;n<a;n+=1)r.push(t[n],e[n+1]);return r}var Wt=function(e){return Object.assign(e,{isCss:!0})};function Ut(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];if(Ke(e)||Qe(e))return Wt(Rt(qt(ge,i([e],t,!0))));var n=e;return 0===t.length&&1===n.length&&"string"==typeof n[0]?Rt(n):Wt(Rt(qt(n,t)))}function Vt(e,t,r){if(void 0===r&&(r=be),!t)throw et(1,t);var n=function(n){for(var a=[],o=1;o<arguments.length;o++)a[o-1]=arguments[o];return e(t,r,Ut.apply(void 0,i([n],a,!1)))};return n.attrs=function(n){return Vt(e,t,o(o({},r),{attrs:Array.prototype.concat(r.attrs,n).filter(Boolean)}))},n.withConfig=function(n){return Vt(e,t,o(o({},r),n))},n}var Ht=function(e){return Vt(Bt,e)},Kt=Ht;ye.forEach((function(e){Kt[e]=Ht(e)}));var Gt=function(){function e(e,t){this.rules=e,this.componentId=t,this.isStatic=Nt(e),yt.registerId(this.componentId+1)}return e.prototype.createStyles=function(e,t,r,n){var a=n(Je(Rt(this.rules,t,r,n)),""),o=this.componentId+e;r.insertRules(o,o,a)},e.prototype.removeStyles=function(e,t){t.clearRules(this.componentId+e)},e.prototype.renderStyles=function(e,t,r,n){e>2&&yt.registerId(this.componentId+e),this.removeStyles(e,r),this.createStyles(e,t,r,n)},e}();function Yt(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];var n=Je(Ut.apply(void 0,i([e],t,!1))),a=Pe(n);return new At(a,n)}(function(){function t(){var t=this;this._emitSheetCSS=function(){var e=t.instance.toString();if(!e)return"";var r=pt(),n=Je([r&&'nonce="'.concat(r,'"'),"".concat(le,'="true"'),"".concat(ue,'="').concat(de,'"')].filter(Boolean)," ");return"<style ".concat(n,">").concat(e,"</style>")},this.getStyleTags=function(){if(t.sealed)throw et(2);return t._emitSheetCSS()},this.getStyleElement=function(){var r;if(t.sealed)throw et(2);var n=t.instance.toString();if(!n)return[];var a=((r={})[le]="",r[ue]=de,r.dangerouslySetInnerHTML={__html:n},r),i=pt();return i&&(a.nonce=i),[e.createElement("style",o({},a,{key:"sc-0-0"}))]},this.seal=function(){t.sealed=!0},this.instance=new yt({isServer:!0}),this.sealed=!1}t.prototype.collectStyles=function(t){if(this.sealed)throw et(2);return e.createElement(Pt,{sheet:this.instance},t)},t.prototype.interleaveWithNodeStream=function(e){throw et(3)}})(),"__sc-".concat(le,"__");const Jt=(function(t){for(var r=[],n=1;n<arguments.length;n++)r[n-1]=arguments[n];var a=Ut.apply(void 0,i([t],r,!1)),s="sc-global-".concat(Pe(JSON.stringify(a))),l=new Gt(a,s),c=function(t){var r=Ot(),n=e.useContext(Ft),a=e.useRef(r.styleSheet.allocateGSInstance(s)).current;return r.styleSheet.server&&u(a,t,r.styleSheet,n,r.stylis),e.useLayoutEffect((function(){if(!r.styleSheet.server)return u(a,t,r.styleSheet,n,r.stylis),function(){return l.removeStyles(a,r.styleSheet)}}),[a,t,r.styleSheet,n,r.stylis]),null};function u(e,t,r,n,a){if(l.isStatic)l.renderStyles(e,me,r,a);else{var i=o(o({},t),{theme:ve(t,n,c.defaultProps)});l.renderStyles(e,i,r,a)}}return e.memo(c)})`
    :root {
        /* ====================
         * BRAND COLORS
         * ==================== */
        --color-primary: #7E22CE; /* Core brand color */
        --color-primary-light: #9333EA; /* Lighter variation */
        --color-primary-dark: #6B21A8; /* Darker variation */

        /* ====================
         * AGENT COLOR SYSTEM - Each agent with unique yet harmonious palette
         * ==================== */

        /* NAT - CEO/AI PM - Royal purple with gold */
        --color-nat-primary: #6D28D9; /* Royal purple */
        --color-nat-secondary: #F59E0B; /* Gold */
        --color-nat-surface: #F5F3FF; /* Light violet surface */
        --color-nat-gradient: linear-gradient(135deg, #6D28D9 0%, #8B5CF6 100%);

        /* BRIAN - Product Manager - Deep blue-violet with teal */
        --color-brian-primary: #4F46E5; /* Indigo */
        --color-brian-secondary: #0D9488; /* Teal */
        --color-brian-surface: #EEF2FF; /* Light indigo surface */
        --color-brian-gradient: linear-gradient(135deg, #4F46E5 0%, #818CF8 100%);

        /* REQQY - Requirements Agent - Sky blue with navy accents */
        --color-reqqy-primary: #0EA5E9; /* Vibrant sky blue */
        --color-reqqy-secondary: #1E40AF; /* Navy */
        --color-reqqy-surface: #E0F2FE; /* Light sky blue surface */
        --color-reqqy-gradient: linear-gradient(135deg, #0EA5E9 0%, #7DD3FC 100%);

        /* JOSH - Graphic Design - Vibrant purple with pink */
        --color-josh-primary: #8B5CF6; /* Vibrant purple */
        --color-josh-secondary: #EC4899; /* Pink */
        --color-josh-surface: #F3E8FF; /* Light purple surface */
        --color-josh-gradient: linear-gradient(135deg, #8B5CF6 0%, #C084FC 100%);

        /* JAMES & TERRELL - Twin Dev Agents - Deep violet with electric blue */
        --color-twin-primary: #7C3AED; /* Deep violet */
        --color-twin-secondary: #2563EB; /* Electric blue */
        --color-twin-surface: #EDE9FE; /* Light violet surface */
        --color-twin-gradient: linear-gradient(135deg, #7C3AED 0%, #A78BFA 100%);

        /* JAMES - Backend Dev Agent - Teal/Cyan */
        --color-james-primary: #00B4D8; /* Teal */
        --color-james-secondary: #BE185D; /* Slightly lighter teal */
        --color-james-surface: #E0FAFF; /* Light teal surface */
        --color-james-gradient: linear-gradient(135deg, #00B4D8 0%, #DB2777 100%);

        /* TERRELL - Frontend Dev Agent - Crimson */
        --color-terrell-primary: #9F1239; /* Deep wine */
        --color-terrell-secondary: #0FBED2; /* Lighter wine */
        --color-terrell-surface: #FFE4E6; /* Light rose surface */
        --color-terrell-gradient: linear-gradient(135deg, #9F1239 0%, #38BEC9 100%);


        /* ANTOSH - Testing & Analytics - Teal with orange */
        --color-antosh-primary: #14B8A6; /* Teal */
        --color-antosh-secondary: #F97316; /* Orange */
        --color-antosh-surface: #CCFBF1; /* Light teal surface */
        --color-antosh-gradient: linear-gradient(135deg, #14B8A6 0%, #5EEAD4 100%);

        /* MAN-MAN - Maintenance - Emerald green with blue */
        --color-manman-primary: #10B981; /* Emerald green */
        --color-manman-secondary: #3B82F6; /* Blue */
        --color-manman-surface: #D1FAE5; /* Light emerald surface */
        --color-manman-gradient: linear-gradient(135deg, #10B981 0%, #34D399 100%);

        /* LIA - Social Media - Rose with purple */
        --color-lia-primary: #F43F5E; /* Rose */
        --color-lia-secondary: #A855F7; /* Purple */
        --color-lia-surface: #FEE2E2; /* Light rose surface */
        --color-lia-gradient: linear-gradient(135deg, #F43F5E 0%, #FB7185 100%);

        /* COMPASS - HR/Router - Slate with amber */
        --color-compass-primary: #64748B; /* Slate */
        --color-compass-secondary: #F59E0B; /* Amber */
        --color-compass-surface: #F1F5F9; /* Light slate surface */
        --color-compass-gradient: linear-gradient(135deg, #64748B 0%, #94A3B8 100%);

        /* Legacy agent variables (maintained for backward compatibility) */
        --color-accent-josh: var(--color-josh-primary);

        /* ====================
         * SEMANTIC COLORS
         * ==================== */
        --color-success: #10B981; /* Success green - slightly adjusted */
        --color-error: #EF4444; /* Error red */
        --color-warning: #F59E0B; /* Warning amber */
        --color-info: #3B82F6; /* Info blue */

        /* ====================
         * NEUTRAL COLORS
         * ==================== */
        --color-neutral-900: #121212; /* Almost black - slightly darkened for better contrast */
        --color-neutral-800: #262626; /* Added for more gradation */
        --color-neutral-700: #404040; /* Darkened for better contrast */
        --color-neutral-600: #606060; /* Added for more gradation */
        --color-neutral-500: #808080; /* Neutral gray */
        --color-neutral-400: #A0AEC0; /* Added for more gradation */
        --color-neutral-300: #CBD5E1; /* Added for more gradation */
        --color-neutral-200: #E2E8F0; /* Light gray */
        --color-neutral-100: #F8FAFC; /* Almost white */

        /* ====================
         * TYPOGRAPHY
         * ==================== */
        --font-family: 'Montserrat', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
        --font-weight-regular: 400;
        --font-weight-medium: 500;
        --font-weight-bold: 700;
        --font-size-xs: 0.75rem;
        --font-size-sm: 0.875rem;
        --font-size-base: 1rem;
        --font-size-lg: 1.125rem;
        --font-size-xl: 1.25rem;
        --font-size-2xl: 1.5rem;
        --line-height-tight: 1.25;
        --line-height-normal: 1.5;
        --line-height-loose: 1.75;

        /* ====================
         * SPACING SYSTEM
         * ==================== */
        --spacing-xxs: 4px;
        --spacing-xs: 8px;
        --spacing-sm: 12px;
        --spacing-base: 16px;
        --spacing-md: 24px;
        --spacing-lg: 32px;
        --spacing-xl: 48px;
        --spacing-2xl: 64px;
        --spacing-gap: 8px;

        /* ====================
         * NEUROMORPHIC SHADOWS & EFFECTS
         * ==================== */
        --shadow-card: 0px 4px 16px rgba(0, 0, 0, 0.08), 0px 1px 4px rgba(0, 0, 0, 0.04);
        --shadow-xs: 0px 1px 2px rgba(0, 0, 0, 0.05);
        --shadow-sm: 0px 2px 4px rgba(0, 0, 0, 0.06);
        --shadow-md: 0px 4px 8px rgba(0, 0, 0, 0.1);
        --shadow-lg: 0px 8px 16px rgba(0, 0, 0, 0.12);
        --shadow-inner: inset 0px 2px 4px rgba(0, 0, 0, 0.06);

        /* Neuromorphic shadows */
        --shadow-neuro-sm: 6px 6px 12px rgba(0, 0, 0, 0.1), -6px -6px 12px rgba(255, 255, 255, 0.8);
        --shadow-neuro-md: 10px 10px 20px rgba(0, 0, 0, 0.1), -10px -10px 20px rgba(255, 255, 255, 0.8);
        --shadow-neuro-pressed: inset 4px 4px 8px rgba(0, 0, 0, 0.1), inset -4px -4px 8px rgba(255, 255, 255, 0.8);

        /* ====================
         * BORDERS & RADIUS
         * ==================== */
        --border-width-thin: 1px;
        --border-width-medium: 2px;
        --border-width-thick: 4px;
        --border-radius-sm: 4px;
        --border-radius-md: 8px;
        --border-radius-lg: 12px;
        --border-radius-xl: 16px;
        --border-radius-full: 9999px;

        /* ====================
         * TRANSITIONS & ANIMATIONS
         * ==================== */
        --transition-fast: 150ms ease-in-out;
        --transition-normal: 250ms ease-in-out;
        --transition-slow: 350ms ease-in-out;
        --transition-bounce: 500ms cubic-bezier(0.34, 1.56, 0.64, 1);

        /* ====================
         * Z-INDEX SCALE
         * ==================== */
        --z-index-dropdown: 1000;
        --z-index-sticky: 1100;
        --z-index-fixed: 1200;
        --z-index-modal-backdrop: 1300;
        --z-index-modal: 1400;
        --z-index-popover: 1500;
        --z-index-tooltip: 1600;
    }

    /* ====================
     * GLOBAL STYLES & RESETS
     * ==================== */
    html, body, #root {
        min-height: 100vh;
        background: var(--color-neutral-100);
        font-family: var(--font-family), sans-serif;
        color: var(--color-neutral-900);
        line-height: var(--line-height-normal);
        font-weight: var(--font-weight-regular);
        font-size: var(--font-size-base);
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    *, *:before, *:after {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    *:focus-visible {
        outline: var(--border-width-medium) solid var(--color-primary);
        outline-offset: 2px;
        border-radius: var(--border-radius-sm);
    }

    ::selection {
        background: var(--color-josh-primary);
        color: white;
    }

    a {
        color: var(--color-primary);
        text-decoration: none;
        transition: color var(--transition-fast);
    }

    a:hover {
        color: var(--color-primary-dark);
    }

    button, input, select, textarea {
        font-family: inherit;
        font-size: inherit;
        line-height: inherit;
    }

    img, svg {
        display: block;
        max-width: 100%;
        height: auto;
    }

    /* Utility classes */
    .visually-hidden {
        position: absolute !important;
        width: 1px !important;
        height: 1px !important;
        padding: 0 !important;
        margin: -1px !important;
        overflow: hidden !important;
        clip: rect(0, 0, 0, 0) !important;
        white-space: nowrap !important;
        border: 0 !important;
        clip-path: inset(50%) !important;
    }

    /* Neuromorphic elements base class */
    .neuro {
        border-radius: var(--border-radius-md);
        background: var(--color-neutral-100);
        box-shadow: var(--shadow-neuro-md);
        transition: all var(--transition-normal);
    }

    .neuro:active {
        box-shadow: var(--shadow-neuro-pressed);
    }

    /* Dark mode support */
    @media (prefers-color-scheme: dark) {
        :root {
            --color-neutral-100: #121212;
            --color-neutral-200: #1E1E1E;
            --color-neutral-300: #2D2D2D;
            --color-neutral-400: #404040;
            --color-neutral-500: #737373;
            --color-neutral-600: #A3A3A3;
            --color-neutral-700: #D4D4D4;
            --color-neutral-800: #E5E5E5;
            --color-neutral-900: #F5F5F5;

            --shadow-neuro-sm: 6px 6px 12px rgba(0, 0, 0, 0.3), -6px -6px 12px rgba(255, 255, 255, 0.04);
            --shadow-neuro-md: 10px 10px 20px rgba(0, 0, 0, 0.3), -10px -10px 20px rgba(255, 255, 255, 0.04);
            --shadow-neuro-pressed: inset 4px 4px 8px rgba(0, 0, 0, 0.3), inset -4px -4px 8px rgba(255, 255, 255, 0.04);
        }

        /* Agent surface colors need to be darkened */
        :root {
            --color-nat-surface: #2D1B69;
            --color-brian-surface: #1E1A5E;
            --color-reqqy-surface: #0B2F5A;
            --color-josh-surface: #2E1F5A;
            --color-twin-surface: #2A1A69;
            --color-antosh-surface: #0B3B36;
            --color-manman-surface: #0B3A2A;
            --color-lia-surface: #4A141E;
            --color-compass-surface: #1F2937;
        }
    }
`,Qt={colors:{surface:{light:"var(--color-surface-light)",dark:"var(--color-surface-dark)"},neutral:{100:"var(--color-neutral-100)",200:"var(--color-neutral-200)"},text:{dark:"var(--color-text-dark)",light:"var(--color-text-light)",muted:"var(--color-text-muted)",hint:"var(--color-text-hint)"},josh:{primary:"var(--color-josh-primary)",muted:"var(--color-josh-muted)"},status:{active:"#22C55E",archived:"#EF4444"}},spacing:{xs:"var(--spacing-xs)",base:"var(--spacing-base)",md:"var(--spacing-md)",lg:"var(--spacing-lg)"},borderRadius:{small:"var(--border-radius-small)",md:"var(--border-radius-md)",large:"var(--border-radius-large)"},shadows:{xs:"var(--shadow-xs)",md:"var(--shadow-md)",card:"var(--shadow-card)"},darkBG:"#131125",cardGlass:"rgba(40, 33, 77, 0.965)",glassMain:"rgba(42, 33, 89, 0.92)",gradientMain:"linear-gradient(90deg, #06d6a0, #8b5cf6)",gradientAlt:"linear-gradient(90deg, #8b5cf6, #ff00cc)",neonTeal:"#06d6a0",focusBox:"0 0 0 3.3px #8b5cf6aa",active:"#22C55E",archived:"#EF4444"};var Xt=r(414);const Zt=Kt.svg`
  display: inline-flex;
  vertical-align: middle;
  flex-shrink: 0;
  transition: all var(--transition-fast);
  
  /* Subtle drop shadow for depth */
  filter: drop-shadow(0px 1px 1px rgba(0, 0, 0, 0.05));
  
  /* Add interactive states if the icon is clickable */
  ${e=>(e.onClick||e.isInteractive)&&`\n    cursor: pointer;\n    \n    &:hover {\n      transform: translateY(-1px) scale(1.05);\n      filter: drop-shadow(0px 2px 2px rgba(0, 0, 0, 0.1));\n      stroke: ${e.hoverColor||(e.agentKey?`var(--color-${e.agentKey}-primary)`:"var(--color-primary)")};\n    }\n    \n    &:active {\n      transform: translateY(0) scale(0.98);\n      filter: drop-shadow(0px 1px 1px rgba(0, 0, 0, 0.05));\n    }\n  `}
  
  /* Ensure the icon itself has helpful title for accessibility */
  title {
    user-select: none;
  }
`,er=function(e){return e?`var(--color-${e}-primary)`:arguments.length>1&&void 0!==arguments[1]?arguments[1]:"currentColor"},tr=e=>{let{size:t=16,color:r="currentColor",hoverColor:n,strokeWidth:a=2,className:o,title:i="Chevron Up",onClick:s,isInteractive:l,agentKey:c}=e;return(0,Xt.jsxs)(Zt,{width:t,height:t,viewBox:"0 0 24 24",fill:"none",stroke:c?er(c,r):r,strokeWidth:a,strokeLinecap:"round",strokeLinejoin:"round",className:o,onClick:s,isInteractive:l||!!s,hoverColor:n,agentKey:c,role:"img","aria-labelledby":"chevronUpTitle",children:[(0,Xt.jsx)("title",{id:"chevronUpTitle",children:i}),(0,Xt.jsx)("polyline",{points:"18 15 12 9 6 15"})]})},rr=e=>{let{size:t=16,color:r="currentColor",hoverColor:n,strokeWidth:a=2,className:o,title:i="Chevron Down",onClick:s,isInteractive:l,agentKey:c}=e;return(0,Xt.jsxs)(Zt,{width:t,height:t,viewBox:"0 0 24 24",fill:"none",stroke:c?er(c,r):r,strokeWidth:a,strokeLinecap:"round",strokeLinejoin:"round",className:o,onClick:s,isInteractive:l||!!s,hoverColor:n,agentKey:c,role:"img","aria-labelledby":"chevronDownTitle",children:[(0,Xt.jsx)("title",{id:"chevronDownTitle",children:i}),(0,Xt.jsx)("polyline",{points:"6 9 12 15 18 9"})]})},nr=e=>{let{size:t=16,color:r="currentColor",hoverColor:n,strokeWidth:a=2,className:o,title:i="Copy",onClick:s,isInteractive:l,agentKey:c}=e;return(0,Xt.jsxs)(Zt,{width:t,height:t,viewBox:"0 0 24 24",fill:"none",stroke:c?er(c,r):r,strokeWidth:a,strokeLinecap:"round",strokeLinejoin:"round",className:o,onClick:s,isInteractive:l||!!s,hoverColor:n,agentKey:c,role:"img","aria-labelledby":"copyTitle",children:[(0,Xt.jsx)("title",{id:"copyTitle",children:i}),(0,Xt.jsx)("rect",{x:"9",y:"9",width:"13",height:"13",rx:"2",ry:"2"}),(0,Xt.jsx)("path",{d:"M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"})]})},ar=e=>{let{size:t=16,color:r="currentColor",hoverColor:n,strokeWidth:a=2,className:o,title:i="Edit",onClick:s,isInteractive:l,agentKey:c}=e;return(0,Xt.jsxs)(Zt,{width:t,height:t,viewBox:"0 0 24 24",fill:"none",stroke:c?er(c,r):r,strokeWidth:a,strokeLinecap:"round",strokeLinejoin:"round",className:o,onClick:s,isInteractive:l||!!s,hoverColor:n,agentKey:c,role:"img","aria-labelledby":"editTitle",children:[(0,Xt.jsx)("title",{id:"editTitle",children:i}),(0,Xt.jsx)("path",{d:"M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"})]})},or=e=>{let{size:t=16,color:r="currentColor",hoverColor:n,strokeWidth:a=2,className:o,title:i="Check",onClick:s,isInteractive:l,agentKey:c}=e;return(0,Xt.jsxs)(Zt,{width:t,height:t,viewBox:"0 0 24 24",fill:"none",stroke:c?er(c,r):r,strokeWidth:a,strokeLinecap:"round",strokeLinejoin:"round",className:o,onClick:s,isInteractive:l||!!s,hoverColor:n,agentKey:c,role:"img","aria-labelledby":"checkTitle",children:[(0,Xt.jsx)("title",{id:"checkTitle",children:i}),(0,Xt.jsx)("polyline",{points:"20 6 9 17 4 12"})]})},ir=e=>{let{size:t=16,color:r="currentColor",hoverColor:n,strokeWidth:a=2,className:o,title:i="Alert",onClick:s,isInteractive:l,agentKey:c}=e;return(0,Xt.jsxs)(Zt,{width:t,height:t,viewBox:"0 0 24 24",fill:"none",stroke:c?er(c,r):r,strokeWidth:a,strokeLinecap:"round",strokeLinejoin:"round",className:o,onClick:s,isInteractive:l||!!s,hoverColor:n,agentKey:c,role:"img","aria-labelledby":"alertTitle",children:[(0,Xt.jsx)("title",{id:"alertTitle",children:i}),(0,Xt.jsx)("circle",{cx:"12",cy:"12",r:"10"}),(0,Xt.jsx)("line",{x1:"12",y1:"8",x2:"12",y2:"12"}),(0,Xt.jsx)("line",{x1:"12",y1:"16",x2:"12.01",y2:"16"})]})},sr=e=>{let{size:t=16,color:r="currentColor",hoverColor:n,strokeWidth:a=2,className:o,title:i="Chevron Right",onClick:s,isInteractive:l,agentKey:c}=e;return(0,Xt.jsxs)(Zt,{width:t,height:t,viewBox:"0 0 24 24",fill:"none",stroke:c?er(c,r):r,strokeWidth:a,strokeLinecap:"round",strokeLinejoin:"round",className:o,onClick:s,isInteractive:l||!!s,hoverColor:n,agentKey:c,role:"img","aria-labelledby":"chevronRightTitle",children:[(0,Xt.jsx)("title",{id:"chevronRightTitle",children:i}),(0,Xt.jsx)("polyline",{points:"9 18 15 12 9 6"})]})},lr=e=>{let{size:t=16,color:r="currentColor",hoverColor:n,strokeWidth:a=2,className:o,title:i="Chevron Left",onClick:s,isInteractive:l,agentKey:c}=e;return(0,Xt.jsxs)(Zt,{width:t,height:t,viewBox:"0 0 24 24",fill:"none",stroke:c?er(c,r):r,strokeWidth:a,strokeLinecap:"round",strokeLinejoin:"round",className:o,onClick:s,isInteractive:l||!!s,hoverColor:n,agentKey:c,role:"img","aria-labelledby":"chevronLeftTitle",children:[(0,Xt.jsx)("title",{id:"chevronLeftTitle",children:i}),(0,Xt.jsx)("polyline",{points:"15 18 9 12 15 6"})]})},cr=Kt.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-weight: var(--font-weight-medium);
  color: ${e=>e.color};
  
  /* Add a subtle pulse animation for active status */
  &.status-active {
    svg {
      animation: pulse 2s infinite;
      
      @keyframes pulse {
        0% { transform: scale(1); }
        50% { transform: scale(1.1); }
        100% { transform: scale(1); }
      }
    }
  }
  
  /* Add a subtle shine for complete status */
  &.status-complete svg {
    filter: drop-shadow(0 0 2px ${e=>e.color+"80"});
  }
  
  /* Add a vibration effect for error status */
  &.status-error {
    svg {
      animation: vibrate 0.3s linear infinite;
      
      @keyframes vibrate {
        0% { transform: translateX(0); }
        25% { transform: translateX(1px); }
        50% { transform: translateX(0); }
        75% { transform: translateX(-1px); }
        100% { transform: translateX(0); }
      }
    }
  }
`,ur=Kt.div`
  width: ${e=>e.size||10}px;
  height: ${e=>e.size||10}px;
  border-radius: 50%;
  background-color: ${e=>e.color};
  box-shadow: 0 0 4px ${e=>e.color+"80"};
  transition: all var(--transition-fast);
`,dr={complete:{label:"Complete",icon:(0,Xt.jsx)(cr,{color:"var(--color-success)",className:"status-complete",children:(0,Xt.jsx)(or,{size:16,color:"var(--color-success)",strokeWidth:2.5})}),color:"var(--color-success)",description:"Task has been successfully completed"},active:{label:"Active",icon:(0,Xt.jsx)(cr,{color:"var(--color-josh-primary)",className:"status-active",children:(0,Xt.jsx)(ur,{color:"var(--color-josh-primary)",size:10})}),color:"var(--color-josh-primary)",description:"Task is currently in progress"},todo:{label:"Planned",icon:(0,Xt.jsx)(cr,{color:"var(--color-neutral-500)",children:(0,Xt.jsx)(sr,{size:16,color:"var(--color-neutral-500)"})}),color:"var(--color-neutral-500)",description:"Task is scheduled but not yet started"},error:{label:"Error",icon:(0,Xt.jsx)(cr,{color:"var(--color-error)",className:"status-error",children:(0,Xt.jsx)(ir,{size:16,color:"var(--color-error)",strokeWidth:2})}),color:"var(--color-error)",description:"Task encountered an error during execution"},pending:{label:"Pending",icon:(0,Xt.jsx)(cr,{color:"var(--color-neutral-400)",children:(0,Xt.jsxs)("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[(0,Xt.jsx)("circle",{cx:"12",cy:"12",r:"10"}),(0,Xt.jsx)("path",{d:"M12 6v6l4 2"})]})}),color:"#f59e0b",description:"Waiting to be started"}},pr=Kt.nav`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    min-height: 62px;
    height: 4.5rem;
    padding: 0 ${Qt.spacing.lg};
    background: ${Qt.colors.surface.dark};
    box-shadow: ${Qt.shadows.md};
    border-bottom: 2px solid ${Qt.colors.neutral[200]};
    z-index: 30;
`,fr=Kt.svg`
  width: 44px; 
  height: 44px; 
  margin-right: ${Qt.spacing.md}; 
  user-select: none;
`,hr=Kt.div`
  display: flex; 
  align-items: center; 
  gap: ${Qt.spacing.base};
`,mr=Kt.span`
  font-size: 1.55rem;
  font-weight: 700;
  color: ${Qt.colors.josh.primary};
  letter-spacing: -0.03em;
`,gr=Kt.div`
  min-width: 44px;
  min-height: 44px;
  background: ${Qt.colors.neutral[200]};
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.25rem;
  font-weight: bold;
  color: ${Qt.colors.text.light};
  border: 2px solid ${Qt.colors.josh.primary};
  box-shadow: ${Qt.shadows.xs};
`,br=Kt.div`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`,vr=Kt.main`
  width: 100vw;
  flex: 1 1 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${Qt.darkBG};
  padding-bottom: 8rem;
`,yr=Kt.section`
  width: 100%;
  max-width: 1440px;
  margin: 1.5rem auto 0;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  padding: 0 1.5rem;
  height: calc(100vh - 62px - 2rem); /* Subtract header height and top margin */
  box-sizing: border-box;
  overflow: hidden; /* Prevent outer scrolling */
  background: transparent;
  
  /* Create gentle gradient fade from top of dashboard to bottom */
  background: linear-gradient(to bottom, 
    rgba(30, 30, 50, 0.1) 0%, 
    transparent 100%);
  
  @media (max-width: 768px) {
    padding: 0 1rem;
    margin-top: 1rem;
    height: calc(100vh - 62px - 1rem);
  }
  
  @media (max-width: 480px) {
    padding: 0 0.75rem;
    height: calc(100vh - 62px - 0.75rem);
  }
`,xr=Kt.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;
  height: calc(100% - 6rem); /* Account for FilterBar height */
  padding-right: 0;
  background: transparent;
  
  /* Create seamless transition to page background */
  border-radius: 0 0 16px 16px;
  
  @media (max-width: 768px) {
    padding-right: 0;
  }
`,wr=Kt.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem 1.25rem;
  align-items: center;
  justify-content: flex-start;
  background: ${Qt.cardGlass};
  border-radius: 16px;
  min-height: 48px;
  margin-bottom: 1.5rem;
  box-shadow: 0 0 9px 1.5px #8b5cf655;
  padding: 1rem 1.5rem;
  position: sticky;
  top: 0;
  z-index: 10;
  box-sizing: border-box;
  
  @media (max-width: 991px) {
    padding: 0.75rem 1.25rem;
    gap: 0.6rem 1rem;
  }
  
  @media (max-width: 768px) {
    padding: 0.75rem 1rem;
    margin-bottom: 1rem;
    gap: 0.6rem 0.75rem;
    flex-direction: column;
    align-items: flex-start;
  }
  
  @media (max-width: 480px) {
    padding: 0.5rem 0.75rem;
    border-radius: 12px;
  }
`,kr=Kt.svg`
  display: block;
  position: absolute;
  left: 13px;
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
  
  @media (max-width: 480px) {
    left: 10px;
  }
`,Sr=Kt.label`
  position: relative;
  display: flex;
  align-items: center;
  flex: 1 1 300px;
  width: 100%;
  max-width: 100%;
  height: auto;
  min-height: 50px;
  overflow-y: hidden;
  padding: 0.25rem;
  border-radius: 0.5rem;
  
  &::-webkit-scrollbar {
    width: 6px;
    height: 6px;
  }
  
  &::-webkit-scrollbar-track {
    background: rgba(0, 0, 0, 0.1);
    border-radius: 4px;
  }
  
  &::-webkit-scrollbar-thumb {
    background: rgba(139, 92, 246, 0.5);
    border-radius: 4px;
  
    &:hover {
      background: rgba(139, 92, 246, 0.8);
    }
  }
  
  @media (max-width: 768px) {
    width: 100%;
    flex-basis: 100%;
  }
`,jr=Kt.input`
  width: 100%;
  padding: 10px 13px 10px 38px;
  border-radius: 9px;
  border: none;
  background: #222244;
  font-size: 1rem;
  color: #fff;
  outline: none;
  transition: border 0.13s, box-shadow 0.13s;
  
  &:focus {
    box-shadow: ${Qt.focusBox};
    border: 2px solid ${Qt.neonTeal};
  }
  
  @media (max-width: 480px) {
    padding: 8px 10px 8px 32px;
    font-size: 0.95rem;
  }
`,Er=Kt.label`
  font-size: 1em;
  color: #fff;
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 0.4em;
  min-width: 40px;
  user-select: none;
  
  /* Domains filter should be full width to prevent shifts */
  &[style*="flex-grow: 1"] {
    width: 100%;
    height: auto;
    min-height: 200px; /* Fixed height for domains section */
    margin-top: 1rem;
    padding-top: 0.5rem;
    border-top: 1px solid rgba(139, 92, 246, 0.2);
  }
  
  @media (max-width: 768px) {
    width: 100%;
    margin-bottom: 0.25rem;
  }
  
  @media (max-width: 480px) {
    font-size: 0.95em;
  }
`,Cr=Kt.select`
  background: #181929;
  border-radius: 0.57em;
  color: #05f0a4;
  font-weight: 600;
  border: none;
  outline: none;
  padding: 0.38em 0.82em;
  margin-left: 0.5em;
  transition: box-shadow 0.11s;
  
  &:focus {
    box-shadow: ${Qt.focusBox};
    border: 2.5px solid ${Qt.neonTeal};
  }
  
  @media (max-width: 768px) {
    flex-grow: 1;
  }
  
  @media (max-width: 480px) {
    padding: 0.3em 0.6em;
    font-size: 0.9em;
  }
`,_r=Kt.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.3em;
  margin-left: 0.5em;
  max-width: 350px;
  user-select: none;
  
  @media (max-width: 991px) {
    max-width: 320px;
  }
  
  @media (max-width: 768px) {
    margin-left: 0;
    margin-top: 0.25rem;
    max-width: 100%;
    width: 100%;
  }
`,Or=(Kt.button`
  background: ${e=>e.selected?Qt.gradientMain:Qt.cardGlass};
  color: ${e=>e.selected?"#11151f":"#fff"};
  border: none;
  border-radius: 33px;
  padding: 0.25em 0.75em;
  font-size: 0.9em;
  font-weight: 600;
  margin-bottom: 1.3px;
  box-shadow: ${e=>e.selected?"0 1.5px 9px #06d6a044":"none"};
  outline: none;
  transition: box-shadow 0.13s, background 0.13s;
  cursor: pointer;
  
  &:focus {
    box-shadow: 0 0 0 2.7px #ff00cc99;
    z-index: 1;
  }
  
  @media (max-width: 480px) {
    padding: 0.2em 0.6em;
    font-size: 0.85em;
  }
`,Kt.button`
  margin-left: 0.6em;
  font-weight: 900;
  font-size: 1em;
  background: ${e=>e.selected?Qt.gradientAlt:Qt.cardGlass};
  color: ${e=>e.selected?"#15151e":"#fff"};
  padding: 2.5px 17px;
  border-radius: 19px;
  border: none;
  cursor: pointer;
  transition: background 0.15s, color 0.15s;
  
  &:focus {
    box-shadow: 0 0 0 2.8px #9333EA99;
  }
  
  @media (max-width: 480px) {
    padding: 2px 12px;
    font-size: 0.9em;
    margin-left: 0.4em;
  }
`,Kt.span`
  display: block;
  font-size: 0.9em;
  margin-left: 0.7em;
  color: #8b5cf6cc;
  font-weight: 500;
  
  @media (max-width: 480px) {
    font-size: 0.85em;
    margin-left: 0.5em;
  }
`,Kt.div`
  display: flex;
  gap: 0.32em;
  align-items: center;
  
  @media (max-width: 768px) {
    margin-top: 0.5rem;
  }
`),Pr=Kt.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 1rem;
  padding: 0.75rem 0.5rem;
  position: relative;
  z-index: 2;
  
  /* Vertical gradient background that fades to transparent */
  background: linear-gradient(to bottom, 
    rgba(20, 20, 40, 0.3) 0%, 
    transparent 100%);
  
  @media (max-width: 480px) {
    flex-wrap: wrap;
    gap: 0.75rem;
  }
`,Ar=Kt.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: 1.1rem;
  font-weight: 500;
  color: #fff;
  position: relative;
  z-index: 2;
  
  /* Subtle glow effect for the text */
  text-shadow: 0 0 10px rgba(139, 92, 246, 0.3);
  
  @media (max-width: 480px) {
    font-size: 1rem;
  }
`,Tr=Kt.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`,zr=Kt.button`
  background: ${e=>e.active?Qt.gradientAlt:Qt.glassMain};
  color: ${e=>e.active?"#fff":"#9b8cff"};
  border: none;
  outline: none;
  border-radius: 7px;
  min-width: 36px;
  min-height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2em;
  box-shadow: ${e=>e.active?"0 0 11px #ff00cc77":"none"};
  transition: box-shadow 0.11s, background 0.13s;
  cursor: pointer;
  
  &:focus {
    box-shadow: 0 0 0 2.2px #9333EA88;
  }
  
  @media (max-width: 480px) {
    min-width: 32px;
    min-height: 32px;
    font-size: 1.1em;
  }
`,Ir=Kt.button`
  font-size: 0.95rem;
  font-weight: 700;
  line-height: 1;
  background: ${Qt.gradientMain};
  color: #fff;
  border: none;
  border-radius: 8px;
  height: 38px;
  padding: 0 1.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  box-shadow: 0 1px 14px #06d6a044;
  transition: transform 0.11s, box-shadow 0.12s;
  cursor: pointer;
  margin-left: auto;
  
  &:hover {
    transform: scale(1.038);
    box-shadow: 0 0 24px #9333EA66;
  }
  
  &:focus {
    box-shadow: 0 0 0 3px #06d6a099;
  }
  
  @media (max-width: 991px) {
    padding: 0 1rem;
  }
  
  @media (max-width: 768px) {
    margin-left: 0;
    align-self: flex-end;
    margin-top: 0.5rem;
  }
  
  @media (max-width: 480px) {
    height: 34px;
    padding: 0 0.85rem;
    font-size: 0.85rem;
  }
`,Dr=Kt.div`
  padding: 2rem;
  text-align: center;
  color: #fff;
  font-size: 1.2em;
  font-weight: 500;
  width: 100%;
  background: ${Qt.cardGlass};
  border-radius: 12px;
  margin-top: 1rem;
  box-shadow: 0 0 15px rgba(139, 92, 246, 0.2);
  
  @media (max-width: 480px) {
    padding: 1.5rem;
    font-size: 1.1em;
  }
`,Rr=Kt.div`
  width: 100%;
  height: calc(100% - 3rem); /* Account for the header space */
  overflow: hidden;
  box-sizing: border-box;
  position: relative;
  margin-top: 0;
  background: transparent;
`,Nr=Kt.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow-y: auto;
  overflow-x: hidden; /* Disable horizontal scroll */
  padding: 0.5rem 1rem 2rem 1rem;
  box-sizing: border-box;
  
  /* Smooth scrolling */
  scroll-behavior: smooth;
  -webkit-overflow-scrolling: touch;
  
  /* Make background match the page background for seamless transition */
  background: transparent;
  
  /* Scrollbar styling */
  &::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }
  
  &::-webkit-scrollbar-track {
    background: rgba(20, 20, 40, 0.1);
    border-radius: 4px;
  }
  
  &::-webkit-scrollbar-thumb {
    background: rgba(139, 92, 246, 0.4);
    border-radius: 4px;
    
    &:hover {
      background: rgba(139, 92, 246, 0.6);
    }
  }
  
  /* Fade in from the ViewControls gradient */
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 30px;
    background: linear-gradient(to bottom, transparent, ${Qt.darkBG});
    z-index: -1;
    pointer-events: none;
  }
  
  @media (max-width: 768px) {
    padding: 0.5rem 0.75rem 2rem 0.75rem;
  }
  
  @media (max-width: 480px) {
    padding: 0.5rem 0.5rem 2rem 0.5rem;
  }
`,Mr=Kt.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  grid-auto-rows: min-content;
  grid-gap: 1.25rem;
  width: 100%;
  padding-top: 0.5rem;
  
  /* Add some padding at the bottom for smoother scrolling experience */
  padding-bottom: 2rem;
  
  @media (min-width: 1400px) {
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  }
  
  @media (max-width: 991px) {
    grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  }
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
    grid-gap: 1rem;
  }
  
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    grid-gap: 0.75rem;
  }
`,Lr=(Kt.div`
  flex: 0 0 auto;
  width: 100%;
  background: ${Qt.cardGlass};
  border-radius: 12px;
  padding: 1.2rem;
  box-shadow: ${Qt.shadows.md};
  transition: transform 0.15s, box-shadow 0.15s;
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.16);
  }
`,Yt`
  0%{transform:translateY(60px) scale(.96);opacity:0;}
  100%{transform:translateY(0) scale(1);opacity:1;}
`),Fr=Kt.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(25,18,40,0.85);
  z-index: 99;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: ${Lr} 0.22s;
`,$r=Kt.div`
  background: ${Qt.glassMain};
  border-radius: 2.2em;
  max-width: 420px;
  width: 96vw;
  min-height: 13.5em;
  box-shadow: 0 10px 64px #8b5cf6bb;
  border: 1.8px solid #8b5cf6;
  padding: 2.2em 2em 1.6em 2.05em;
  animation: ${Lr} 0.15s;
`,Br=Kt.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.3em;
`,qr=Kt.h2`
  font-size: 1.31em;
  font-weight: 900;
  background: ${Qt.gradientMain};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  letter-spacing: -0.02em;
`,Wr=Kt.button`
  border: none;
  background: transparent;
  color: #fff;
  font-size: 2.2em;
  font-weight: bold;
  opacity: 0.88;
  cursor: pointer;
  line-height: 1;
  transition: color 0.12s;
  &:hover {
    color: #ff00cc;
  }
`,Ur=Kt.div`
  margin-bottom: 1.25em;
  display: flex;
  flex-direction: column;
`,Vr=Kt.label`
  font-size: 1.045em;
  font-weight: 600;
  color: #fff;
  margin-bottom: 0.22em;
  text-shadow: 0 2px 22px #06d6a062;
`,Hr=Kt.input`
  border-radius: 6px;
  border: none;
  font-size: 1em;
  font-weight: 600;
  padding: 0.67em 0.82em;
  background: #161223;
  color: #fff;
  margin-bottom: 0.23em;
  &:focus {
    box-shadow: ${Qt.focusBox};
    border: 2px solid #06d6a0;
  }
`,Kr=Kt.span`
  color: #ff00cc;
  font-size: 0.9em;
  margin-left: 0.2em;
`,Gr=Kt.span`
  color: #8b5cf6cc;
  font-size: 0.92em;
  margin-top: 0.12em;
  margin-left: 0.12em;
`,Yr=Kt.select`
  background: #181929;
  border-radius: 0.57em;
  color: #05f0a4;
  font-weight: 600;
  border: none;
  outline: none;
  padding: 0.38em 0.82em;
`,Jr=Kt.textarea`
  background: #181211;
  border-radius: 7.8px;
  font-family: 'JetBrains Mono','Monaco',monospace !important;
  font-size: 1em;
  color: #fff;
  border: 1.3px solid #322161;
  padding: 0.71em 0.96em;
  margin-top: 0.11em;
  resize: vertical;
  min-height: 5em;
  line-height: 1.44;
  transition: box-shadow 0.12s;
  &:focus {
    box-shadow: 0 0 0 3.5px #8b5cf6cc;
  }
`,Qr=Kt.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
  margin-top: 2.1em;
`,Xr=Kt.button`
  background: ${Qt.gradientMain};
  color: #fff;
  border-radius: 8px;
  border: none;
  font-weight: 700;
  font-size: 1.08em;
  padding: 0.47em 2.1em;
  box-shadow: 0 0 18px #06d6a055;
  transition: background 0.16s, box-shadow 0.13s, color 0.13s;
  cursor: pointer;
  &:focus {
    box-shadow: 0 0 0 3px #06d6a099;
  }
`,Zr={AGENT_LIST:["nat","brian","reqqy","josh","james","terrell","antosh","man-man","lia"],DOMAIN_LIST:["meeting","summary","bug","qa","repro","design","test","email","social"]},en=(0,e.createContext)(null),tn=Array.from({length:50},((e,t)=>({id:String(t+1),name:`Prompt #${t+1}`,description:`Test prompt example for domain features #${t+1}`,prompt_text:t%6===0?"Summarize the following transcript:\n{transcript}":t%6===1?"Write bug reproduction steps for:\n{bug_report}":t%6===2?"Draft an email inviting stakeholders to:\n{event}":t%6===3?"Generate tests for feature:\n{feature}":t%6===4?"Design a hero banner for:\n{theme}":"Social post for:\n{announcement}",domains:(()=>{const e=[["meeting","summary"],["bug","qa","repro"],["email","social"],["test","qa","bug"],["design","summary"],["social","email"]];return e[t%e.length]})(),status:t%10===0?"archived":"active",created_at:new Date(Date.now()-6e5*t).toISOString(),updated_at:new Date(Date.now()-3e5*t).toISOString(),last_used:t%7===0?new Date(Date.now()-19e5*t).toISOString():void 0,authorId:Zr.AGENT_LIST[t%Zr.AGENT_LIST.length],usage_count:Math.floor(30*Math.random()),prompt_log_refs:[],agentId:Zr.AGENT_LIST[t%Zr.AGENT_LIST.length]}))),rn=t=>{let{children:r}=t;const[n,a]=(0,e.useState)(tn),[o,i]=(0,e.useState)(!1),s=e=>new Promise((t=>setTimeout(t,e)));return(0,Xt.jsx)(en.Provider,{value:{prompts:n,addPrompt:async e=>{i(!0),await s(320);const t=(new Date).toISOString();a((r=>[...r,{...e,id:Math.random().toString(36).slice(2),created_at:t,updated_at:t,last_used:void 0,usage_count:0,prompt_log_refs:[]}])),i(!1)},updatePrompt:async(e,t)=>{i(!0),await s(150),a((r=>r.map((r=>r.id===e?{...r,...t,updated_at:(new Date).toISOString()}:r)))),i(!1)},deletePrompt:async e=>{i(!0),await s(110),a((t=>t.filter((t=>t.id!==e)))),i(!1)},incrementUsage:async e=>{a((t=>t.map((t=>{var r;return t.id===e?{...t,usage_count:(null!==(r=t.usage_count)&&void 0!==r?r:0)+1,last_used:(new Date).toISOString()}:t}))))},loading:o},children:r})};function nn(){const t=(0,e.useContext)(en);if(!t)throw new Error("PromptProvider not initialized");return t}const an=Kt.div`
  display: inline-block;
  padding: 0.4rem 0.75rem;
  border-radius: 50px;
  font-size: 0.9rem;
  margin: 0.25rem;
  user-select: none;
  cursor: pointer;
  background: ${e=>e.selected?"rgba(139, 92, 246, 0.6)":"rgba(255, 255, 255, 0.06)"};
  color: ${e=>e.selected?"white":"rgba(255, 255, 255, 0.8)"};
  border: 1px solid ${e=>e.selected?"rgba(139, 92, 246, 0.8)":"rgba(255, 255, 255, 0.1)"};
  transition: all 0.2s ease;
  position: relative; /* Ensure it's a positioned element */
  z-index: 2; /* Higher than parent elements */
  
  &:hover {
    background: ${e=>e.selected?"rgba(139, 92, 246, 0.7)":"rgba(255, 255, 255, 0.1)"};
  }
`,on=t=>{let{mode:r,prompt:n,closeModal:a}=t;const{addPrompt:o,updatePrompt:i,loading:s}=nn(),[l,c]=(0,e.useState)((null===n||void 0===n?void 0:n.name)||""),[u,d]=(0,e.useState)((null===n||void 0===n?void 0:n.description)||""),[p,f]=(0,e.useState)((null===n||void 0===n?void 0:n.domains)||[]),[h,m]=(0,e.useState)((null===n||void 0===n?void 0:n.status)||"active"),[g,b]=(0,e.useState)((null===n||void 0===n?void 0:n.agentId)||Zr.AGENT_LIST[0]),[v,y]=(0,e.useState)((null===n||void 0===n?void 0:n.prompt_text)||""),x=(0,e.useRef)(null),[w,k]=(0,e.useState)({});(0,e.useEffect)((()=>{c((null===n||void 0===n?void 0:n.name)||""),d((null===n||void 0===n?void 0:n.description)||""),f((null===n||void 0===n?void 0:n.domains)||[]),m((null===n||void 0===n?void 0:n.status)||"active"),b((null===n||void 0===n?void 0:n.agentId)||Zr.AGENT_LIST[0]),y((null===n||void 0===n?void 0:n.prompt_text)||""),k({})}),[r,n]);const S=e=>{f((t=>t.includes(e)?t.filter((t=>t!==e)):t.length<5?[...t,e]:t))};return(0,e.useEffect)((()=>{function e(e){if("Escape"===e.key&&a(),"Tab"===e.key&&x.current){const t=x.current.querySelectorAll("input,textarea,select,button");if(0===t.length)return;const r=t[0],n=t[t.length-1];e.shiftKey&&document.activeElement===r?(e.preventDefault(),n.focus()):e.shiftKey||document.activeElement!==n||(e.preventDefault(),r.focus())}}return window.addEventListener("keydown",e),()=>window.removeEventListener("keydown",e)}),[a]),(0,Xt.jsx)(Fr,{"aria-modal":"true",role:"dialog",tabIndex:-1,children:(0,Xt.jsxs)($r,{children:[(0,Xt.jsxs)(Br,{children:[(0,Xt.jsx)(qr,{children:"edit"===r?"Edit Prompt":"New Prompt"}),(0,Xt.jsx)(Wr,{"aria-label":"Close",title:"Close",onClick:a,children:"\xd7"})]}),(0,Xt.jsxs)("form",{ref:x,onSubmit:async function(e){e.preventDefault();const t={};l.trim()||(t.name="Name required"),l.trim().length<2&&(t.name="Name too short (min 2 chars)"),u.trim()||(t.description="Required"),v.trim().length<10&&(t.prompt_text="Prompt text (10+ chars)"),p.length||(t.domains="Pick at least one (max 5)"),k(t),Object.keys(t).length||("edit"===r&&n?await i(n.id,{name:l,description:u,prompt_text:v,domains:p,status:h,agentId:g}):"new"===r&&await o({name:l,description:u,prompt_text:v,domains:p,status:h,authorId:"nat",agentId:g}),a())},noValidate:!0,children:[(0,Xt.jsxs)(Ur,{children:[(0,Xt.jsx)(Vr,{htmlFor:"pn",children:"Name"}),(0,Xt.jsx)(Hr,{id:"pn",value:l,onChange:e=>c(e.target.value),placeholder:"Prompt title","aria-invalid":!!w.name,required:!0,autoFocus:!0,minLength:2}),w.name&&(0,Xt.jsx)(Kr,{children:w.name})]}),(0,Xt.jsxs)(Ur,{children:[(0,Xt.jsx)(Vr,{htmlFor:"pd",children:"Description"}),(0,Xt.jsx)(Hr,{id:"pd",value:u,onChange:e=>d(e.target.value),placeholder:"Short description","aria-invalid":!!w.description,required:!0,minLength:6}),w.description&&(0,Xt.jsx)(Kr,{children:w.description})]}),(0,Xt.jsxs)(Ur,{children:[(0,Xt.jsx)(Vr,{children:"Domains"}),(0,Xt.jsx)(_r,{children:Zr.DOMAIN_LIST.map((e=>(0,Xt.jsxs)(an,{selected:p.includes(e),tabIndex:0,"aria-pressed":p.includes(e),onClick:()=>S(e),onKeyDown:t=>{"Enter"!==t.key&&" "!==t.key||S(e)},children:[e,p.includes(e)&&(0,Xt.jsx)("span",{children:"\xa0\u2713"})]},e)))}),(0,Xt.jsx)(Gr,{children:0===p.length?"Pick one or more (max 5)":`${p.length} selected`}),w.domains&&(0,Xt.jsx)(Kr,{children:w.domains})]}),(0,Xt.jsxs)(Ur,{children:[(0,Xt.jsx)(Vr,{htmlFor:"agent",children:"Agent"}),(0,Xt.jsx)(Yr,{id:"agent",value:g,onChange:e=>b(e.target.value),children:Zr.AGENT_LIST.map((e=>(0,Xt.jsx)("option",{value:e,children:e},e)))})]}),(0,Xt.jsxs)(Ur,{children:[(0,Xt.jsx)(Vr,{htmlFor:"status",children:"Status"}),(0,Xt.jsxs)(Yr,{id:"status",value:h,onChange:e=>m(e.target.value),children:[(0,Xt.jsx)("option",{value:"active",children:"Active"}),(0,Xt.jsx)("option",{value:"archived",children:"Archived"})]})]}),(0,Xt.jsxs)(Ur,{children:[(0,Xt.jsx)(Vr,{htmlFor:"ptxt",children:"Prompt Text"}),(0,Xt.jsx)(Jr,{id:"ptxt",rows:8,required:!0,value:v,spellCheck:!1,minLength:10,"aria-invalid":!!w.prompt_text,onChange:e=>y(e.target.value),style:{fontFamily:"'JetBrains Mono','SF Pro',monospace",background:"#161234",color:"#fff",border:w.prompt_text&&v.length<10?"2.5px solid #ff00cc":void 0}}),(0,Xt.jsxs)(Gr,{children:[(0,Xt.jsx)("b",{children:"Tip:"})," Use ","{","variables","}"," for dynamic replacement."]}),w.prompt_text&&(0,Xt.jsx)(Kr,{children:w.prompt_text})]}),(0,Xt.jsxs)(Qr,{children:[(0,Xt.jsx)(Xr,{type:"submit",disabled:s,"aria-disabled":s,children:s?"Saving...":"new"===r?"Add":"Save"}),(0,Xt.jsx)(Xr,{type:"button",onClick:a,style:{background:Qt.cardGlass,color:"#ffe",marginLeft:17},children:"Cancel"})]})]})]})})},sn=()=>(0,Xt.jsxs)(pr,{children:[(0,Xt.jsxs)(hr,{children:[(0,Xt.jsxs)(fr,{width:44,height:44,"aria-label":"THN AI Logo",focusable:!1,role:"img",children:[(0,Xt.jsx)("defs",{children:(0,Xt.jsxs)("linearGradient",{id:"logograd",x1:"0",x2:"1",y1:"0",y2:"1",children:[(0,Xt.jsx)("stop",{stopColor:Qt.colors.josh.primary}),(0,Xt.jsx)("stop",{offset:"1",stopColor:"#06d6a0"})]})}),(0,Xt.jsx)("circle",{cx:22,cy:22,r:21,fill:"url(#logograd)"}),(0,Xt.jsx)("text",{x:"22",y:"30",fontFamily:"'JetBrains Mono','SF Pro',sans-serif",fontSize:"19",textAnchor:"middle",fontWeight:900,fill:"#fff",children:"THN"})]}),(0,Xt.jsx)(mr,{children:"Prompt Library Manager"})]}),(0,Xt.jsx)("span",{style:{color:Qt.colors.josh.primary,fontWeight:700,fontSize:18},children:"v1.0"}),(0,Xt.jsx)(gr,{children:(0,Xt.jsx)("span",{"aria-label":"Profile",children:"@"})})]});function ln(){return(0,Xt.jsxs)(kr,{width:23,height:23,"aria-hidden":!0,children:[(0,Xt.jsx)("circle",{cx:10,cy:10,r:7.8,stroke:"#fff",strokeWidth:2,fill:"none",opacity:.7}),(0,Xt.jsx)("line",{x1:16.1,y1:16.2,x2:21.2,y2:21.3,stroke:"#06d6a0",strokeWidth:2,strokeLinecap:"round",opacity:.85})]})}const cn=()=>(0,Xt.jsxs)("svg",{width:18,height:18,"aria-hidden":!0,style:{display:"block"},viewBox:"0 0 18 18",children:[(0,Xt.jsx)("rect",{x:"2.5",y:"2.5",width:"5",height:"5",rx:"1.5",fill:"#fff"}),(0,Xt.jsx)("rect",{x:"10.5",y:"2.5",width:"5",height:"5",rx:"1.5",fill:"#8b5cf6"}),(0,Xt.jsx)("rect",{x:"2.5",y:"10.5",width:"5",height:"5",rx:"1.5",fill:"#06d6a0"}),(0,Xt.jsx)("rect",{x:"10.5",y:"10.5",width:"5",height:"5",rx:"1.5",fill:"#ff00cc"})]}),un=()=>(0,Xt.jsxs)("svg",{width:18,height:18,"aria-hidden":!0,style:{display:"block"},viewBox:"0 0 18 18",children:[(0,Xt.jsx)("rect",{x:"2.5",y:"4.83",width:"13",height:"2.5",rx:"1.1",fill:"#9333ea"}),(0,Xt.jsx)("rect",{x:"2.6",y:"9.13",width:"13",height:"2.53",rx:"1.09",fill:"#fff"}),(0,Xt.jsx)("rect",{x:"2.45",y:"13.3",width:"13.08",height:"2.05",rx:"1.01",fill:"#06d6a0"})]}),dn=Yt`
  0% { box-shadow: 0 0 0 0 #06d6a0,0 0 17px 4px #9333EA66;}
  47%{box-shadow:0 0 0 7px #06d6a077,0 0 27px 10px #8b5cf688;}
  98%,100%{box-shadow:0 0 0 0 #06d6a0,0 0 20px 7px #9333EA55;}
`,pn=Yt`
  from { transform: scale(1); z-index: 1; }
  to { transform: scale(1.1); z-index: 10; }
`,fn=Yt`
  from { transform: scale(1.1); z-index: 10; }
  to { transform: scale(1); z-index: 1; }
`,hn=Kt.div`
  background: ${Qt.cardGlass};
  border-radius: 1.45rem;
  box-shadow: 0 0 24px 4px #8b5cf655;
  border: 1px solid #271666;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;
  width: 280px;
  height: 280px;
  user-select: text;
  cursor: pointer;
  transition: box-shadow 0.18s, border 0.18s;
  margin: 12px; /* Added margin to ensure glow is fully visible */
  animation: ${e=>e.$expanded?Ut`${pn} 0.25s forwards`:e.$copied?Ut`${dn} 1.015s 1`:Ut`${fn} 0.25s`};

  ${e=>e.$copied&&Ut`
    border: 2.5px solid ${Qt.neonTeal};
  `}

  &:hover {
    box-shadow: 0 0 44px 8px #06d6a066;
    border-color: #06d6a0;
  }

  ${e=>e.$expanded&&Ut`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(1.1);
    height: auto;
    min-height: 380px;
    width: 350px;
    max-width: 90vw;
    max-height: 80vh;
    box-shadow: 0 0 60px 12px #06d6a099;
    border: 2px solid #06d6a0;
    cursor: default;
    z-index: 10;
    overflow-y: auto;
    margin: 0; /* Reset margin when expanded */
  `}
`,mn=Kt.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow: ${e=>e.$expanded?"auto":"hidden"};
  position: relative;
  z-index: 6;
`,gn=Kt.pre`
  background: #161234;
  color: #fff;
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.85rem;
  padding: 1rem;
  border-radius: 0.75rem;
  overflow-x: auto;
  max-height: 200px;
  margin: 0.5rem 0 1.2rem 0;
  box-shadow: inset 0 0 12px rgba(0, 0, 0, 0.3);
  border: 1px solid #2a2356;
  line-height: 1.4;
  white-space: pre-wrap;

  &::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }

  &::-webkit-scrollbar-track {
    background: #0f0c1e;
    border-radius: 4px;
  }

  &::-webkit-scrollbar-thumb {
    background: ${Qt.colors.josh.primary}80;
    border-radius: 4px;

    &:hover {
      background: ${Qt.colors.josh.primary};
    }
  }
`,bn=Kt.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(3px);
  z-index: 5;
  opacity: ${e=>e.$visible?1:0};
  visibility: ${e=>e.$visible?"visible":"hidden"};
  transition: opacity 0.2s ease, visibility 0.2s ease;
`,vn=Kt.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.45em;
`,yn=Kt.span`
  background: ${e=>"active"===e.status?Qt.gradientMain:"linear-gradient(90deg,#48445a,#a90042)"};
  color: #fff;
  border-radius: 2em;
  font-weight: bold;
  font-size: 0.8rem;
  padding: 0.22em 1.05em;
  letter-spacing: 0.06em;
`,xn=Kt.span`
  display: flex;
  align-items: center;
  gap: 0.24em;
  font-size: 0.98em;
`,wn=Kt.svg`
  display: inline-block;
  vertical-align: middle;
`,kn=Kt.h2`
  font-size: 1.15rem;
  font-weight: bold;
  background: ${Qt.gradientMain};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin: 0.18em 0 0.4em 0;
  line-height: 1.14em;
  letter-spacing: -0.025em;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  user-select: text;
`,Sn=Kt.p`
  color: #e3e9ff;
  font-size: 0.9em;
  margin: 0 0 0.51em 0;
  display: -webkit-box;
  -webkit-line-clamp: ${e=>e.$expanded?"unset":"2"};
  -webkit-box-orient: vertical;
  overflow: hidden;
  transition: height 0.3s ease;
  user-select: text;
`,jn=Kt.div`
  margin-bottom: 0.61em;
  display: flex;
  flex-wrap: wrap;
  gap: 0.3em;
  max-height: ${e=>e.$expanded?"none":"3.5em"};
  overflow: ${e=>e.$expanded?"visible":"hidden"};
  transition: transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275), 
              box-shadow 0.3s ease,
              width 0.3s ease, 
              max-width 0.3s ease,
              max-height 0.3s ease;
  will-change: transform, width, position;
  backface-visibility: hidden;
  
  &:hover {
    transform: ${e=>e.$expanded?"translate(-50%, -50%)":"translateY(-3px)"};
    box-shadow: ${e=>e.$expanded?"0 10px 30px rgba(0, 0, 0, 0.3)":"0 6px 16px rgba(0, 0, 0, 0.16)"};
  }
`,En=Kt.span`
  background: linear-gradient(90deg,#06d6a0,#8b5cf6);
  color: #15151e;
  border-radius: 19px;
  font-size: 0.75em;
  font-weight: 700;
  padding: 0.25em 0.5em;
  margin-bottom: 0.07em;
  display: inline-block;
`,Cn=Kt.div`
  color: #8b5cf6;
  font-size: 0.85em;
  font-weight: 600;
  margin-top: -0.11em;
  margin-bottom: 0.5em;
  letter-spacing: 0.02em;
`,_n=Kt.div`
  display: flex;
  gap: 0.8rem;
  margin-top: ${e=>e.$expanded?"1rem":"auto"};
  margin-bottom: 0.2em;
  justify-content: space-between;
  flex-wrap: wrap;
`,On=Kt.button`
  background: ${e=>e.$copied?Qt.gradientMain:Qt.gradientAlt};
  color: #fff;
  border: none;
  border-radius: 5.5px;
  font-weight: 700;
  font-size: ${e=>e.$expanded?"0.95em":"0.85em"};
  padding: ${e=>e.$expanded?"0.38em 1.16em":"0.32em 0.7em"};
  box-shadow: 0 0 8px #8b5cf644;
  transition: transform 0.08s, box-shadow 0.12s, background 0.09s;
  cursor: pointer;
  flex: ${e=>e.$expanded?"0 0 auto":"1 1 0"};
  min-width: ${e=>e.$expanded?"auto":"60px"};
  text-align: center;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 0 18px 4px #8b5cf655;
  }

  &:active {
    transform: translateY(1px);
  }

  ${e=>e.$copied&&Ut`
    background: ${Qt.gradientMain};
    box-shadow: 0 0 20px #06d6a0cc;
  `}
`,Pn=Kt.span`
  color: #06d6a0;
  font-weight: 900;
  font-size: 1.27em;
  text-shadow: 0 0 10px #06d6a0,0 0 4px #fff;
`,An=Kt.button`
  position: absolute;
  top: 10px;
  right: 10px;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background: ${Qt.gradientAlt};
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: bold;
  font-size: 1.2em;
  cursor: pointer;
  opacity: 0.8;
  z-index: 11;

  &:hover {
    opacity: 1;
    transform: scale(1.1);
  }
`,Tn=t=>{let{prompt:r,openModal:n}=t;const{deletePrompt:a,incrementUsage:o}=nn(),[i,s]=(0,e.useState)(!1),[l,c]=(0,e.useState)(!1),u=(0,e.useRef)(null),d=()=>{c(!1),setTimeout((()=>{document.body.classList.remove("prompt-modal-open")}),300)};return(0,e.useEffect)((()=>{const e=e=>{u.current&&!u.current.contains(e.target)&&l&&d()};return document.addEventListener("mousedown",e),()=>{document.removeEventListener("mousedown",e)}}),[l]),(0,e.useEffect)((()=>{const e=e=>{"Escape"===e.key&&l&&c(!1)};return document.addEventListener("keydown",e),()=>{document.removeEventListener("keydown",e)}}),[l]),(0,Xt.jsxs)(Xt.Fragment,{children:[(0,Xt.jsx)(bn,{$visible:l,onClick:()=>c(!1)}),(0,Xt.jsxs)(hn,{ref:u,$copied:i,$expanded:l,onClick:()=>{l?d():(document.body.classList.add("prompt-modal-open"),c(!0))},children:[l&&(0,Xt.jsx)(An,{onClick:e=>{e.stopPropagation(),d()},children:"\xd7"}),(0,Xt.jsxs)(mn,{$expanded:l,children:[(0,Xt.jsxs)(vn,{children:[(0,Xt.jsx)(yn,{status:r.status,"aria-label":r.status,children:r.status}),(0,Xt.jsx)(xn,{"aria-label":`Usage count: ${r.usage_count}`,children:(0,Xt.jsxs)(wn,{width:16,height:16,children:[(0,Xt.jsx)("circle",{cx:8,cy:8,r:7.1,fill:"none",stroke:"#06d6a0",strokeWidth:"2",opacity:"0.92"}),(0,Xt.jsx)("text",{x:"8",y:"11.4",fill:"#fff",fontSize:"8",fontWeight:700,textAnchor:"middle",fontFamily:"'JetBrains Mono','Monaco',monospace",children:r.usage_count})]})})]}),(0,Xt.jsx)(kn,{children:r.name}),(0,Xt.jsx)(Sn,{$expanded:l,children:r.description}),(0,Xt.jsx)(jn,{$expanded:l,children:r.domains.map((e=>(0,Xt.jsx)(En,{children:e},e)))}),(0,Xt.jsx)(Cn,{children:r.agentId}),l&&(0,Xt.jsx)(gn,{children:r.prompt_text}),(0,Xt.jsxs)(_n,{$expanded:l,children:[(0,Xt.jsx)(On,{"aria-label":"Copy Prompt Text",onClick:async e=>{e.stopPropagation(),await navigator.clipboard.writeText(r.prompt_text),s(!0),o(r.id),setTimeout((()=>s(!1)),1050)},$copied:i,$expanded:l,children:i?(0,Xt.jsx)(Pn,{"aria-label":"Copied!",children:"\u2713"}):"Copy"}),(0,Xt.jsx)(On,{"aria-label":"Edit",onClick:e=>{e.stopPropagation(),n({mode:"edit",prompt:r,open:!0})},$expanded:l,children:"Edit"}),(0,Xt.jsx)(On,{"aria-label":"Delete",onClick:e=>{e.stopPropagation(),a(r.id)},$expanded:l,children:"Delete"})]})]})]})]})},zn=Kt.div`
    overflow-x: auto;
    width: 100%;
    min-width: 920px;
    border-radius: 1.2rem;
    background: ${Qt.cardGlass};
    box-shadow: 0px 5px 38px #8b5cf644;
`,In=Kt.table`
  width: 100%;
  border-collapse: collapse;
  th, td {
    font-size: 0.94em;
    padding: 0.61em 0.4em 0.55em 0.8em;
    text-align: left;
    vertical-align: top;
    font-family: inherit;
    color: #fff;
  }
  th {
    background: #201945;
    position: sticky;
    top: 0;
    font-weight: 700;
    letter-spacing: 0.03em;
    z-index: 2;
    border-top-left-radius: 1.2em;
    border-top-right-radius: 1.2em;
  }
`,Dn=Kt.tr`
  background: ${e=>e.$active?"#15151ee6":"#232349cc"};
  &:hover {
    background: #28254a;
  }
`,Rn=Kt.span`
  background: linear-gradient(90deg,#06d6a0,#8b5cf6);
  color: #15151e;
  border-radius: 11px;
  font-size: 0.87em;
  font-weight: 700;
  padding: 0.16em 0.58em;
  margin-right: 0.18em;
`,Nn=Kt.button`
    background: ${e=>e.$copied?Qt.gradientMain:Qt.cardGlass};
    color: ${e=>e.$copied?"#15151e":"#fff"};
    border-radius: 7px;
    border: none;
    font-weight: 700;
    font-size: 1.01em;
    padding: 0.28em 0.87em;
    margin-right: 0.38em;
    min-width: 56px;
    cursor: pointer;

    &:hover, &:focus {
        background: ${Qt.gradientAlt};
        color: #15151e;
        box-shadow: 0 0 9px #ff00cc99;
    }

    transition: background 0.12s, color 0.13s;
`,Mn=t=>{let{prompts:r,openModal:n}=t;const{deletePrompt:a,incrementUsage:o}=nn(),[i,s]=(0,e.useState)(null);return(0,Xt.jsx)(zn,{children:(0,Xt.jsxs)(In,{children:[(0,Xt.jsx)("thead",{children:(0,Xt.jsxs)("tr",{children:[(0,Xt.jsx)("th",{children:"Name"}),(0,Xt.jsx)("th",{children:"Description"}),(0,Xt.jsx)("th",{children:"Domains"}),(0,Xt.jsx)("th",{children:"Agent"}),(0,Xt.jsx)("th",{children:"Status"}),(0,Xt.jsx)("th",{children:"Used"}),(0,Xt.jsx)("th",{children:"Actions"})]})}),(0,Xt.jsx)("tbody",{children:r.map(((e,t)=>(0,Xt.jsxs)(Dn,{$active:t%2===0,children:[(0,Xt.jsx)("td",{children:(0,Xt.jsx)("span",{children:e.name})}),(0,Xt.jsx)("td",{children:(0,Xt.jsx)("span",{children:e.description})}),(0,Xt.jsx)("td",{children:(0,Xt.jsx)("span",{children:e.domains.map((e=>(0,Xt.jsx)(Rn,{children:e},e)))})}),(0,Xt.jsx)("td",{children:(0,Xt.jsx)("span",{children:e.agentId})}),(0,Xt.jsx)("td",{children:(0,Xt.jsx)(yn,{status:e.status,children:e.status})}),(0,Xt.jsx)("td",{children:(0,Xt.jsx)("span",{children:e.usage_count})}),(0,Xt.jsxs)("td",{children:[(0,Xt.jsx)(Nn,{onClick:async()=>{await navigator.clipboard.writeText(e.prompt_text),s(e.id),o(e.id),setTimeout((()=>s(null)),1050)},$copied:i===e.id,"aria-label":"Copy Prompt",children:i===e.id?"\u2713":"Copy"}),(0,Xt.jsx)(Nn,{onClick:()=>n({mode:"edit",prompt:e,open:!0}),"aria-label":"Edit Prompt",children:"Edit"}),(0,Xt.jsx)(Nn,{onClick:()=>a(e.id),"aria-label":"Delete Prompt",children:"Delete"})]})]},e.id)))})]})})},Ln=Kt.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 100%;
`,Fn=Kt.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 0.5rem;

    h4 {
        font-size: 0.9rem;
        margin: 0;
        color: #fff;
        font-weight: 600;
    }

    span {
        font-size: 0.8rem;
        color: #8b5cf680;
    }
`,$n=Kt.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    width: 100%;
    margin-bottom: 0.75rem; /* Ensure consistent spacing */
    height: auto; /* Let content determine height */
`,Bn=Kt.div`
    min-height: 60px;
    height: 60px; /* Fixed height to prevent UI shifts */
    border-radius: 8px;
    padding: 0.5rem;
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    align-content: flex-start;
    overflow-y: auto; /* Make it scrollable instead of growing */
    background: ${e=>e.$isDragOver?"and"===e.$type?"rgba(6, 214, 160, 0.15)":"or"===e.$type?"rgba(139, 92, 246, 0.15)":"rgba(50, 50, 70, 0.3)":"and"===e.$type?"rgba(6, 214, 160, 0.05)":"or"===e.$type?"rgba(139, 92, 246, 0.05)":"rgba(50, 50, 70, 0.1)"};
    border: 2px dashed ${e=>e.$isDragOver?"and"===e.$type?"rgba(6, 214, 160, 0.8)":"or"===e.$type?"rgba(139, 92, 246, 0.8)":"rgba(255, 255, 255, 0.3)":"and"===e.$type?"rgba(6, 214, 160, 0.3)":"or"===e.$type?"rgba(139, 92, 246, 0.3)":"rgba(255, 255, 255, 0.1)"};
    transition: all 0.2s ease;

    /* Custom scrollbar */

    &::-webkit-scrollbar {
        width: 4px;
    }

    &::-webkit-scrollbar-track {
        background: rgba(0, 0, 0, 0.1);
        border-radius: 4px;
    }

    &::-webkit-scrollbar-thumb {
        background: ${e=>"and"===e.$type?"rgba(6, 214, 160, 0.5)":"or"===e.$type?"rgba(139, 92, 246, 0.5)":"rgba(255, 255, 255, 0.3)"};
        border-radius: 4px;
    }
`,qn=Kt.div`
    background: ${e=>"and"===e.$dragType?"linear-gradient(90deg, #06d6a0, #06d6a0)":"or"===e.$dragType?"linear-gradient(90deg, #8b5cf6, #8b5cf6)":"linear-gradient(90deg, #3d3d56, #3d3d56)"};
    color: ${e=>"source"===e.$dragType?"#ffffff":"#121212"};
    padding: 0.3rem 0.6rem;
    border-radius: 15px;
    font-size: 0.8rem;
    font-weight: 600;
    cursor: grab;
    user-select: none;

    &:active {
        cursor: grabbing;
    }
`,Wn=Kt.p`
    color: #8b5cf680;
    font-size: 0.8rem;
    margin-top: 0.5rem;
    text-align: center;
`,Un=Kt.div`
    font-size: 0.8rem;
    color: #e3e9ff;
    background: rgba(139, 92, 246, 0.15);
    padding: 0.5rem;
    border-radius: 6px;
    margin-top: 0.75rem;
    border-left: 3px solid #8b5cf6;
`,Vn=t=>{let{domains:r,andDomains:n,orDomains:a,onAndDomainsChange:o,onOrDomainsChange:i}=t;const[s,l]=(0,e.useState)(null),[c,u]=(0,e.useState)(null),[d,p]=(0,e.useState)(!1),[f,h]=(0,e.useState)(!1),[m,g]=(0,e.useState)(!1),b=r.filter((e=>!n.includes(e)&&!a.includes(e))),v=(e,t)=>{l(e),u(t)},y=(e,t)=>{e.preventDefault(),s&&("and"===t?p(!0):"or"===t?h(!0):g(!0))},x=e=>{"and"===e?p(!1):"or"===e?h(!1):g(!1)},w=(e,t)=>{if(e.preventDefault(),p(!1),h(!1),g(!1),!s||!c)return;let r=[...n],d=[...a];"source"===c&&"and"===t?r.includes(s)||(r=[...r,s]):"source"===c&&"or"===t?d.includes(s)||(d=[...d,s]):"and"===c&&"source"===t?r=r.filter((e=>e!==s)):"or"===c&&"source"===t?d=d.filter((e=>e!==s)):"and"===c&&"or"===t?(r=r.filter((e=>e!==s)),d.includes(s)||(d=[...d,s])):"or"===c&&"and"===t&&(d=d.filter((e=>e!==s)),r.includes(s)||(r=[...r,s])),o(r),i(d),l(null),u(null)},k=()=>{l(null),u(null),p(!1),h(!1),g(!1)};return(0,Xt.jsxs)(Ln,{children:[(0,Xt.jsxs)($n,{children:[(0,Xt.jsxs)(Fn,{children:[(0,Xt.jsx)("h4",{children:"AND Filter (All of these domains must match)"}),(0,Xt.jsxs)("span",{children:[n.length," selected"]})]}),(0,Xt.jsx)(Bn,{$isDragOver:d,$type:"and",onDragOver:e=>y(e,"and"),onDragLeave:()=>x("and"),onDrop:e=>w(e,"and"),children:0===n.length?(0,Xt.jsx)(Wn,{children:"Drop domains here to require ALL of them"}):n.map((e=>(0,Xt.jsx)(qn,{$dragType:"and",draggable:!0,onDragStart:()=>v(e,"and"),onDragEnd:k,children:e},`and-${e}`)))})]}),(0,Xt.jsxs)($n,{children:[(0,Xt.jsxs)(Fn,{children:[(0,Xt.jsx)("h4",{children:"OR Filter (Any of these domains can match)"}),(0,Xt.jsxs)("span",{children:[a.length," selected"]})]}),(0,Xt.jsx)(Bn,{$isDragOver:f,$type:"or",onDragOver:e=>y(e,"or"),onDragLeave:()=>x("or"),onDrop:e=>w(e,"or"),children:0===a.length?(0,Xt.jsx)(Wn,{children:"Drop domains here to match ANY of them"}):a.map((e=>(0,Xt.jsx)(qn,{$dragType:"or",draggable:!0,onDragStart:()=>v(e,"or"),onDragEnd:k,children:e},`or-${e}`)))})]}),(0,Xt.jsxs)($n,{children:[(0,Xt.jsxs)(Fn,{children:[(0,Xt.jsx)("h4",{children:"Available Domains"}),(0,Xt.jsx)("span",{children:"Drag domains to filters above"})]}),(0,Xt.jsx)(Bn,{$isDragOver:m,$type:"source",onDragOver:e=>y(e,"source"),onDragLeave:()=>x("source"),onDrop:e=>w(e,"source"),children:0===b.length?(0,Xt.jsx)(Wn,{children:"All domains are being used in filters"}):b.map((e=>(0,Xt.jsx)(qn,{$dragType:"source",draggable:!0,onDragStart:()=>v(e,"source"),onDragEnd:k,children:e},`source-${e}`)))})]}),(n.length>0||a.length>0)&&(0,Xt.jsxs)(Un,{children:["Current filter: ",n.length>0?`(Must have ALL of: ${n.join(", ")})`:"",n.length>0&&a.length>0?" AND ":"",a.length>0?`(Must have ANY of: ${a.join(", ")})`:""]})]})},Hn=t=>{let{viewMode:r,setViewMode:n,openModal:a}=t;const{prompts:o}=nn(),i=(0,e.useRef)(null),[s,l]=(0,e.useState)(""),[c,u]=(0,e.useState)("all"),[d,p]=(0,e.useState)("all"),[f,h]=(0,e.useState)([]),[m,g]=(0,e.useState)([]),b=o.filter((e=>("all"===c||e.status===c)&&(("all"===d||e.agentId===d)&&(!(s&&![e.name,e.description,e.prompt_text].join(" ").toLowerCase().includes(s.toLowerCase()))&&(!(f.length>0&&!f.every((t=>e.domains.includes(t))))&&!(m.length>0&&!m.some((t=>e.domains.includes(t)))))))));return(0,Xt.jsxs)(yr,{children:[(0,Xt.jsxs)(wr,{children:[(0,Xt.jsxs)(Sr,{children:[(0,Xt.jsx)(ln,{}),(0,Xt.jsx)(jr,{"aria-label":"Search Prompts",placeholder:"Search prompts...",value:s,onChange:e=>l(e.target.value)})]}),(0,Xt.jsxs)(Er,{children:["Status:",(0,Xt.jsxs)(Cr,{value:c,onChange:e=>u(e.target.value),children:[(0,Xt.jsx)("option",{value:"all",children:"All"}),(0,Xt.jsx)("option",{value:"active",children:"Active"}),(0,Xt.jsx)("option",{value:"archived",children:"Archived"})]})]}),(0,Xt.jsxs)(Er,{children:["Agent:",(0,Xt.jsxs)(Cr,{value:d,onChange:e=>p(e.target.value),children:[(0,Xt.jsx)("option",{value:"all",children:"All"}),Zr.AGENT_LIST.map((e=>(0,Xt.jsx)("option",{value:e,children:e},e)))]})]}),(0,Xt.jsxs)(Er,{style:{flexGrow:1},children:["Domains:",(0,Xt.jsx)(Vn,{domains:Zr.DOMAIN_LIST,andDomains:f,orDomains:m,onAndDomainsChange:e=>h(e),onOrDomainsChange:e=>g(e),onCompoundFilterChange:(e,t)=>{h(e),g(t)}})]})]}),(0,Xt.jsxs)(xr,{children:[(0,Xt.jsxs)(Pr,{children:[(0,Xt.jsxs)(Ar,{children:[b.length," ",1===b.length?"prompt":"prompts"," found",(0,Xt.jsx)(Ir,{"aria-label":"Add New Prompt",onClick:()=>a({mode:"new",prompt:void 0,open:!0}),children:"+ New Prompt"})]}),(0,Xt.jsx)(Tr,{children:(0,Xt.jsxs)(Or,{children:[(0,Xt.jsx)(zr,{"aria-label":"Grid View",active:"grid"===r,onClick:()=>n("grid"),children:(0,Xt.jsx)(cn,{})}),(0,Xt.jsx)(zr,{"aria-label":"Table View",active:"table"===r,onClick:()=>n("table"),children:(0,Xt.jsx)(un,{})})]})})]}),0===b.length?(0,Xt.jsx)(Dr,{children:"Sorry, no prompts match these filters."}):"grid"===r?(0,Xt.jsx)(Rr,{children:(0,Xt.jsx)(Nr,{ref:i,children:(0,Xt.jsx)(Mr,{children:b.map((e=>(0,Xt.jsx)(Tn,{prompt:e,openModal:a},e.id)))})})}):(0,Xt.jsx)(Mn,{prompts:b,openModal:a})]})]})},Kn=t=>{let{onBackToWorkflow:r}=t;const[n,a]=(0,e.useState)({mode:"new",prompt:void 0,open:!1}),[o,i]=(0,e.useState)("grid");return(0,Xt.jsx)(rn,{children:(0,Xt.jsxs)(br,{children:[(0,Xt.jsx)(sn,{}),(0,Xt.jsx)(vr,{children:(0,Xt.jsx)(Hn,{viewMode:o,setViewMode:i,openModal:a})}),n.open&&(0,Xt.jsx)(on,{mode:n.mode,prompt:n.prompt,closeModal:()=>a((e=>({...e,open:!1})))})]})})},Gn={xs:"24px",sm:"32px",md:"40px",lg:"48px",xl:"64px"},Yn=(e,t)=>t||(e?`var(--color-${e}-primary)`:"var(--color-primary)"),Jn=Kt.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${e=>Gn[e.size]};
  height: ${e=>Gn[e.size]};
  position: relative;
  
  /* Default background if no gradient */
  background: ${e=>Yn(e.agentKey,e.color)};
  
  /* Use agent gradient when available */
  background: ${e=>{return(t=e.agentKey)?`var(--color-${t}-gradient)`:"var(--color-primary-gradient, linear-gradient(135deg, #7E22CE 0%, #9333EA 100%))";var t}};
  
  border-radius: var(--border-radius-full);
  overflow: hidden;
  
  /* Enhanced border and shadow effects */
  border: var(--border-width-thin) solid rgba(255, 255, 255, 0.8);
  box-shadow: var(--shadow-md);
  
  /* Add transition for smooth hover effects */
  transition: 
    transform var(--transition-fast),
    box-shadow var(--transition-fast),
    filter var(--transition-fast);
  
  /* Interactive states for clickable avatars */
  ${e=>e.isInteractive&&Ut`
    cursor: pointer;
    
    &:hover {
      transform: translateY(-2px);
      box-shadow: var(--shadow-lg);
      filter: brightness(1.05);
    }
    
    &:active {
      transform: translateY(0);
      box-shadow: var(--shadow-sm);
      filter: brightness(0.95);
    }
    
    &:focus-visible {
      outline: var(--border-width-medium) solid ${Yn(e.agentKey,e.color)};
      outline-offset: 2px;
    }
  `}
  
  /* Make sure content is centered */
  img, svg {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }
  
  /* Style for initials or text content */
  span {
    color: white;
    font-weight: var(--font-weight-medium);
    font-size: ${e=>"xs"===e.size?"var(--font-size-xs)":"sm"===e.size?"var(--font-size-sm)":"md"===e.size?"var(--font-size-base)":"lg"===e.size?"var(--font-size-lg)":"var(--font-size-xl)"};
    text-transform: uppercase;
  }
`,Qn=(Kt.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`,Kt.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  font-weight: var(--font-weight-medium);
  color: white;
`,e=>{let{color:t,agentKey:r,size:n="md",isInteractive:a=!1,className:o,style:i,children:s,onClick:l,tabIndex:c}=e;const u=!!l||a;return(0,Xt.jsx)(Jn,{color:t,agentKey:r,size:n,isInteractive:u,className:o,style:i,onClick:l,tabIndex:c||(u?0:void 0),children:s})}),Xn=Kt.div`
    height: calc(100vh - 61px); /* Account for header height */
    width: 100vw;
    display: flex;
    flex-direction: row;
    background: var(--color-neutral-100);
    font-family: var(--font-family);
    color: var(--color-neutral-900);
    box-sizing: border-box;
    overflow: hidden; /* Prevent outer scrolling */
`,Zn=Kt.header`
    width: 100vw;
    padding: var(--spacing-md) 0 var(--spacing-base) var(--spacing-xl);
    background: var(--color-primary);
    color: var(--color-neutral-100);
    letter-spacing: 0.05em;
    font-size: var(--font-size-xl);
    font-weight: var(--font-weight-bold);
    box-shadow: var(--shadow-md);
    display: flex;
    align-items: center;
    position: sticky;
    top: 0;
    z-index: var(--z-index-sticky);
    height: 61px;
    box-sizing: border-box;
`,ea=Kt.div`
    width: 34px;
    height: 34px;
    background: linear-gradient(
        135deg,
        var(--color-josh-secondary),
        var(--color-josh-primary)
    );
    border-radius: var(--border-radius-md);
    box-shadow: var(--shadow-sm);
    margin-right: var(--spacing-md);
    display: flex;
    align-items: center;
    justify-content: center;

    &:before {
        content: "";
        display: block;
        width: 16px;
        height: 16px;
        background: var(--color-neutral-100);
        border-radius: var(--border-radius-sm);
        border: var(--border-width-medium) solid var(--color-josh-primary);
        margin-left: var(--spacing-xxs);
    }
`,ta=Kt.nav`
    width: 82px;
    min-width: 82px;
    height: 100%;
    padding: var(--spacing-xl) var(--spacing-xs) 0 var(--spacing-xs);
    background: var(--color-neutral-100);
    border-right: var(--border-width-medium) solid var(--color-neutral-200);
    box-shadow: var(--shadow-sm);
    flex-shrink: 0;
    color: var(--color-neutral-900);
    display: flex;
    flex-direction: column;
    gap: var(--spacing-xs);
    box-sizing: border-box;
    overflow-y: auto;
`,ra=Kt.div`
    margin: 0 0 var(--spacing-xxs) 0;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 62px;
    cursor: pointer;
    border-radius: var(--border-radius-lg);
    outline: none;
    background: ${e=>e.selected?"var(--color-josh-primary)":"none"};
    box-shadow: ${e=>e.selected?"0 0 0 var(--border-width-medium) var(--color-josh-secondary)":"none"};
    transition: background var(--transition-fast);
    
    &:hover {
        background: ${e=>e.selected?"var(--color-josh-primary)":"var(--color-neutral-200)"};
    }
    
    &:focus-visible {
        outline: var(--border-width-medium) solid var(--color-josh-primary);
        outline-offset: var(--spacing-xxs);
    }
`,na=Kt(Qn)`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 43px;
    height: 43px;
    border-radius: var(--border-radius-full);
    background: ${e=>e.color};
    border: var(--border-width-medium) solid var(--color-neutral-100);
    box-shadow: var(--shadow-xs);
    transition: transform var(--transition-fast);
    
    &:hover {
        transform: scale(1.05);
    }
`,aa=Kt.span`
    font-weight: var(--font-weight-bold);
    color: var(--color-neutral-100);
    font-size: var(--font-size-xl);
    position: relative;
    left: 0.5px;
    top: 0.4px;
`,oa=Kt.main`
    flex: 1 1 auto;
    max-width: 1150px;
    height: 100%;
    margin: 0 auto;
    padding: var(--spacing-sm);
    display: flex;
    flex-direction: column;
    position: relative;
    box-sizing: border-box;
    overflow-y: auto; /* Make this container scrollable */
`,ia=Kt.div`
    margin: var(--spacing-base) 0 var(--spacing-md) 0;
    display: flex;
    flex-direction: row;
    gap: var(--spacing-base);
`,sa=Kt.div`
    padding: var(--spacing-xs) var(--spacing-md);
    background: ${e=>e.selected?"linear-gradient(88deg, var(--color-josh-primary) 70%, var(--color-neutral-100) 110%)":"var(--color-neutral-100)"};
    border-radius: var(--border-radius-md);
    font-weight: var(--font-weight-bold);
    font-size: var(--font-size-base);
    color: ${e=>e.selected?"var(--color-neutral-100)":"var(--color-neutral-900)"};
    cursor: pointer;
    transition: all var(--transition-fast);
    border: var(--border-width-medium) solid 
        ${e=>e.selected?"var(--color-josh-primary)":"var(--color-neutral-200)"};
    box-shadow: ${e=>e.selected?"var(--shadow-md)":"var(--shadow-xs)"};
        
    &:hover {
        box-shadow: var(--shadow-md);
    }
    
    &:focus-visible {
        outline: var(--border-width-medium) solid var(--color-josh-primary);
        outline-offset: -1px;
    }
`,la=Kt.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: var(--spacing-xs) 0 var(--spacing-sm) 0;
    padding: 0 var(--spacing-xxs);
    gap: var(--spacing-md);
    min-height: 34px;
`,ca=Kt.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: var(--spacing-xs);
`,ua=(Kt.div`
    background: var(--color-neutral-100);
    border-radius: var(--border-radius-md);
    box-shadow: var(--shadow-card);
    margin: 0 0 var(--spacing-md) 0;
    padding: 0 0 var(--spacing-base) 0;
    overflow: hidden;
    max-height: 300px; /* Limit height to ensure main panel scrolls */
    display: flex;
    flex-direction: column;
`,Kt.div`
    display: grid;
    grid-template-columns: 1fr 1.25fr 0.7fr;
    background: var(--color-neutral-200);
    font-weight: var(--font-weight-bold);
    font-size: var(--font-size-base);
    padding: var(--spacing-sm) var(--spacing-md);
`,Kt.div`
    font-weight: inherit;
    color: var(--color-neutral-800);
`,Kt.div`
    overflow-y: auto;
    max-height: 250px;
`,Kt.div`
    display: grid;
    grid-template-columns: 1fr 1.25fr 0.7fr;
    gap: var(--spacing-xxs);
    align-items: center;
    cursor: pointer;
    padding: var(--spacing-xs) var(--spacing-md);
    background: ${e=>e.selected?"var(--color-neutral-200)":"var(--color-neutral-100)"};
    border-left: var(--border-width-thick) solid
        ${e=>e.selected?"var(--color-josh-primary)":"transparent"};
    transition: background var(--transition-fast), border-left var(--transition-fast);
    
    &:hover {
        background: var(--color-neutral-200);
    }
    
    &:focus-visible {
        outline: var(--border-width-medium) solid var(--color-josh-primary);
        outline-offset: -2px;
        position: relative;
        z-index: 1;
    }
`,Kt.span`
    color: var(--color-neutral-900);
    font-weight: var(--font-weight-medium);
    margin-left: var(--spacing-xs);
    vertical-align: top;
    font-size: var(--font-size-base);
`,Kt.section`
    margin: var(--spacing-xl) 0 0 0;
    padding: 0;
    background: var(--color-neutral-100);
    border-radius: var(--border-radius-md);
    box-shadow: var(--shadow-card);
    max-width: 470px;
`),da=Kt.div`
    font-weight: var(--font-weight-bold);
    color: var(--color-josh-primary);
    font-size: var(--font-size-lg);
    padding: var(--spacing-base) var(--spacing-md) var(--spacing-xs) var(--spacing-md);
    background: var(--color-neutral-200);
    border-radius: var(--border-radius-md) var(--border-radius-md) 0 0;
    border-bottom: var(--border-width-medium) solid var(--color-neutral-200);
`,pa=Kt.pre`
    background: var(--color-neutral-100);
    padding: var(--spacing-base) var(--spacing-md);
    color: var(--color-neutral-900);
    font-size: var(--font-size-base);
    min-height: 60px;
    margin: 0;
    font-family: "Fira Mono", "Consolas", "Menlo", monospace;
    border-radius: 0 0 var(--border-radius-sm) var(--border-radius-sm);
    overflow: auto;
`,fa=Kt.div`
    display: flex;
    gap: var(--spacing-base);
    align-items: center;
    padding: var(--spacing-xs) 0 var(--spacing-base) var(--spacing-md);
`,ha=Kt.div`
    margin: var(--spacing-base) 0 var(--spacing-xs) var(--spacing-sm);
    font-size: var(--font-size-lg);
    color: var(--color-neutral-900);
    font-weight: var(--font-weight-bold);
    letter-spacing: 0.03em;
`,ma=Kt.div`
    position: absolute;
    left: -9999px;
    top: auto;
    width: 1px;
    height: 1px;
    overflow: hidden;
`,ga=(Kt.span`
    display: inline-block;
    font-weight: var(--font-weight-medium);
    width: 8px;
    height: 8px;
    border-radius: var(--border-radius-full);
    background-color: var(--color-josh-primary);
`,Kt.section`
    min-width: 385px;
    background: var(--color-surface-light);
    border-radius: var(--border-radius-large);
    margin: 17px 0 0 0;
    box-shadow: var(--shadow-md);
    display: flex;
    flex-direction: column;
    transition: box-shadow 0.13s;
`),ba=Kt.div`
    padding: 13px 17px 10px 17px;
    font-weight: 700;
    color: var(--color-josh-primary);
    background: var(--color-neutral-200);
    cursor: pointer;
    font-size: 1.02rem;
    display: flex;
    align-items: center;
    gap: 10px;
    border-radius: var(--border-radius-large) var(--border-radius-large) 0 0;

    &:focus-visible {
        outline: 2px solid var(--color-josh-primary);
        outline-offset: -1.5px;
    }
`,va=Kt.span`
    position: relative;
    top: 1.5px;
    font-size: 1.19em;
    color: var(--color-josh-primary);
    opacity: 0.86;
`,ya=Kt.div`
    background: var(--color-surface-light);
    padding: 13px 15px;
    font-size: 1rem;
`,xa=Kt.div`
    display: flex;
    align-items: center;
    gap: 11px;
    padding: 9px 0 13px 13px;
`,wa=Kt.button`
    background: var(--color-neutral-200);
    border: none;
    outline: none;
    font-weight: 700;
    color: var(--color-josh-primary);
    padding: 5px 13px 4px 11px;
    border-radius: var(--border-radius-small);
    font-size: 1rem;
    display: flex;
    align-items: center;
    gap: 4px;
    cursor: pointer;
    box-shadow: var(--shadow-xs);
    transition: background 0.11s, color 0.11s;

    &:active {
        background: var(--color-josh-muted);
        color: var(--color-text-light);
    }

    &:focus-visible {
    }
`,ka=Kt.div`
    margin: 0 0 0 var(--spacing-sm);
    padding: var(--spacing-md) var(--spacing-xs) var(--spacing-md) var(--spacing-sm);
    display: flex;
    gap: var(--spacing-md);
    min-height: 66px;
    align-items: center;
`,Sa=Kt.div`
    background: ${e=>e.selected?"var(--color-josh-primary)":"var(--color-neutral-100)"};
    color: ${e=>e.selected?"var(--color-neutral-100)":"var(--color-neutral-900)"};
    border: var(--border-width-thick) solid ${e=>e.error?"var(--color-error)":e.color};
    box-shadow: ${e=>e.selected?"var(--shadow-lg)":"var(--shadow-xs)"};
    border-radius: var(--border-radius-pill);
    padding: var(--spacing-xs) var(--spacing-md);
    min-width: 66px;
    min-height: 45px;
    font-weight: var(--font-weight-bold);
    font-size: var(--font-size-lg);
    letter-spacing: 0.06em;
    transition: background var(--transition-fast), color var(--transition-fast);
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: var(--spacing-xs);
    position: relative;
    outline: none;
    cursor: pointer;

    &:hover {
        box-shadow: var(--shadow-md);
    }

    &:focus-visible {
        outline: var(--border-width-medium) solid var(--color-josh-primary);
        outline-offset: var(--spacing-xxs);
    }
`,ja=Kt.span`
    width: 38px;
    height: 38px;
    border-radius: var(--border-radius-full);
    background: rgba(255, 255, 255, 0.1);
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: var(--font-size-xl);
    font-weight: var(--font-weight-bold);
`,Ea=Kt.span`
    background: ${e=>e.color};
    border-radius: var(--border-radius-sm);
    color: var(--color-neutral-100);
    font-size: var(--font-size-sm);
    font-weight: var(--font-weight-medium);
    padding: var(--spacing-xxs) var(--spacing-xs);
    margin-left: var(--spacing-xs);
    letter-spacing: 0.04em;
`,Ca={Josh:{key:"Josh",name:"Josh",short:"J",role:"Graphic Design Agent",color:"var(--color-josh-primary)",accent:"var(--color-josh-secondary)",avatarBg:"var(--color-josh-gradient)"},Reqqy:{key:"Reqqy",name:"Reqqy",short:"R",role:"Requirements Agent",color:"var(--color-reqqy-primary)",accent:"var(--color-reqqy-secondary)",avatarBg:"var(--color-reqqy-gradient)"},Nat:{key:"Nat",name:"Nat",short:"N",role:"CEO/AI PM",color:"var(--color-nat-primary)",accent:"var(--color-nat-secondary)",avatarBg:"var(--color-nat-gradient)"},Brian:{key:"Brian",name:"Brian",short:"B",role:"Product Manager",color:"var(--color-brian-primary)",accent:"var(--color-brian-secondary)",avatarBg:"var(--color-brian-gradient)"},Lia:{key:"Lia",name:"Lia",short:"L",role:"Email & Social Media Agent",color:"var(--color-lia-primary)",accent:"var(--color-lia-secondary)",avatarBg:"var(--color-lia-gradient)"},"Man-Man":{key:"Man-Man",name:"Man-Man",short:"M",role:"Maintenance Agent",color:"var(--color-manman-primary)",accent:"var(--color-manman-secondary)",avatarBg:"var(--color-manman-gradient)"},Twin:{key:"Twin",name:"James & Terrell",short:"T",role:"Twin Developer Agents",color:"var(--color-twin-primary)",accent:"var(--color-twin-secondary)",avatarBg:"var(--color-twin-gradient)"},Antosh:{key:"Antosh",name:"Antosh",short:"A",role:"Testing & Analytics Agent",color:"var(--color-antosh-primary)",accent:"var(--color-antosh-secondary)",avatarBg:"var(--color-antosh-gradient)"},Terrell:{key:"Terrell",name:"Terrell",short:"T",role:"Frontend Developer",color:"var(--color-terrell-primary)",accent:"var(--color-terrell-secondary)",avatarBg:"var(--color-terrell-gradient)"},James:{key:"James",name:"James",short:"J",role:"Backend Developer",color:"var(--color-james-primary)",accent:"var(--color-james-secondary)",avatarBg:"var(--color-james-gradient)"},Compass:{key:"Compass",name:"Compass",short:"C",role:"Backend Developer",color:"var(--color-compass-primary)",accent:"var(--color-compass-secondary)",avatarBg:"var(--color-compass-gradient)"}},_a=[{id:1,name:"Collect requirements",status:"complete",assigned:"Reqqy",devNotes:"JSON requirements synced.",description:"All required info for v3.9.5 captured and validated.",priority:"high",styleProps:{cardBg:"var(--color-reqqy-surface)",accentColor:"var(--color-reqqy-primary)",textColor:"var(--color-text-dark)",iconBg:"var(--color-reqqy-gradient)",borderColor:"var(--color-reqqy-secondary)"},visualProps:{icon:"\ud83d\udccb",order:1,dependencies:[]},n8nJson:{id:1,type:"requirements",agent:"Reqqy",status:"complete",notes:"Imported from docs."}},{id:2,name:"Design visuals",status:"active",assigned:"Josh",devNotes:"Check SVG contrast, keep animation, docs must be thorough.",description:"Visual polish for accessibility. No redesign. Only bugfixes & documentation allowed.",priority:"high",styleProps:{cardBg:"var(--color-josh-surface)",accentColor:"var(--color-josh-primary)",textColor:"var(--color-text-dark)",iconBg:"var(--color-josh-gradient)",borderColor:"var(--color-josh-secondary)"},visualProps:{icon:"\ud83c\udfa8",order:2,dependencies:[1]},n8nJson:{id:2,type:"design",agent:"Josh",status:"active",notes:"Check SVG contrast."}},{id:3,name:"Develop logic",status:"active",assigned:"Twin",devNotes:"Preserve v3.9 features. Maintain ARIA/test cover.",description:"Implement Features per Reqqy's requirements with no regressions.",priority:"medium",styleProps:{cardBg:"var(--color-twin-surface)",accentColor:"var(--color-twin-primary)",textColor:"var(--color-text-dark)",iconBg:"var(--color-twin-gradient)",borderColor:"var(--color-twin-secondary)"},visualProps:{icon:"\ud83d\udcbb",order:3,dependencies:[1,2]},n8nJson:{id:3,type:"develop",agent:"Twin",status:"active",notes:"Feature parity focus."}},{id:4,name:"Test features",status:"error",assigned:"Antosh",devNotes:"WCAG fails on contrast for one button.",description:"AXE/NVDA audit failed. Triage and fix before release.",priority:"high",styleProps:{cardBg:"var(--color-antosh-surface)",accentColor:"var(--color-antosh-primary)",textColor:"var(--color-text-dark)",iconBg:"var(--color-antosh-gradient)",borderColor:"var(--color-antosh-secondary)"},visualProps:{icon:"\ud83e\uddea",order:4,dependencies:[3]},n8nJson:{id:4,type:"test",agent:"Antosh",status:"error",notes:"Fix button contrast."}},{id:5,name:"Deploy workflow",status:"complete",assigned:"Man-Man",devNotes:"Released to demo env.",description:"Versioned deployment, with audit logs.",priority:"medium",styleProps:{cardBg:"var(--color-manman-surface)",accentColor:"var(--color-manman-primary)",textColor:"var(--color-text-dark)",iconBg:"var(--color-manman-gradient)",borderColor:"var(--color-manman-secondary)"},visualProps:{icon:"\ud83d\ude80",order:5,dependencies:[4]},n8nJson:{id:5,type:"deploy",agent:"Man-Man",status:"complete",notes:"All services live."}}];const Oa=Kt.div`
  flex: 1;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  box-sizing: border-box;
  width: 100%;
  background-color: #121225;
  color: #ffffff;
  min-height: fit-content;
  
  @media (max-width: 768px) {
    padding: 1.5rem;
  }
  
  @media (max-width: 480px) {
    padding: 1rem;
  }
`,Pa=Kt.div`
  margin-bottom: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`,Aa=Kt.h1`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  background: linear-gradient(90deg, #8b5cf6, #06d6a0);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  display: flex;
  align-items: center;
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
  
  @media (max-width: 480px) {
    font-size: 1.75rem;
  }
`,Ta=Kt.p`
  font-size: 1.25rem;
  color: rgba(255, 255, 255, 0.8);
  max-width: 800px;
  
  @media (max-width: 768px) {
    font-size: 1.125rem;
  }
  
  @media (max-width: 480px) {
    font-size: 1rem;
  }
`,za=Kt.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`,Ia=Kt.div`
  background: rgba(20, 20, 40, 0.6);
  border-radius: 12px;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.15);
  border: 1px solid rgba(139, 92, 246, 0.2);
`,Da=Kt.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 0.75rem;
  }
`,Ra=Kt.div`
  display: flex;
  align-items: center;
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.25rem;
  }
`,Na=Kt.span`
  display: flex;
  align-items: center;
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.95rem;
  margin-right: 0.5rem;
  
  svg {
    margin-right: 0.5rem;
    color: ${Qt.colors.josh.primary};
  }
`,Ma=Kt.span`
  color: white;
  font-weight: 600;
  font-size: 1rem;
`,La=Kt.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  margin-bottom: 1rem;
  
  @media (max-width: 480px) {
    gap: 0.75rem;
  }
`,Fa=(Kt.div`
  margin-bottom: var(--spacing-sm);
`,Kt.select`
  padding: var(--spacing-xs) var(--spacing-sm);
  background-color: var(--color-neutral-100);
  border: var(--border-width-thin) solid var(--color-primary-light);
  border-radius: var(--border-radius-md);
  font-size: var(--font-size-base);
  color: var(--color-primary);
  cursor: pointer;
  transition: all var(--transition-fast);
  min-width: 300px;
  
  &:hover, &:focus {
    border-color: var(--color-primary);
    box-shadow: 0 0 0 2px var(--color-primary-light);
    outline: none;
  }
  
  option {
    padding: var(--spacing-sm);
  }
`,Kt.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.25rem;
  background: ${e=>e.disabled?"rgba(139, 92, 246, 0.1)":"rgba(139, 92, 246, 0.2)"};
  border: 1px solid ${e=>e.disabled?"rgba(139, 92, 246, 0.2)":"rgba(139, 92, 246, 0.4)"};
  border-radius: 8px;
  color: ${e=>e.disabled?"rgba(255, 255, 255, 0.5)":"#fff"};
  font-weight: 600;
  font-size: 0.95rem;
  cursor: ${e=>e.disabled?"not-allowed":"pointer"};
  transition: all 0.2s ease;
  
  &:hover {
    background: ${e=>e.disabled?"rgba(139, 92, 246, 0.1)":"rgba(139, 92, 246, 0.3)"};
    transform: ${e=>e.disabled?"none":"translateY(-2px)"};
    box-shadow: ${e=>e.disabled?"none":"0 4px 12px rgba(0, 0, 0, 0.1)"};
  }
  
  &:active {
    transform: ${e=>e.disabled?"none":"translateY(0)"};
  }
  
  svg {
    font-size: 1.1rem;
    opacity: ${e=>e.disabled?.5:1};
  }
  
  @media (max-width: 480px) {
    padding: 0.6rem 1rem;
    font-size: 0.85rem;
  }
`),$a=Kt.section`
  margin-bottom: 2rem;
`,Ba=Kt.span`
  display: inline-flex;
  align-items: center;
  padding: 0.35rem 0.75rem;
  border-radius: 50px;
  font-size: 0.875rem;
  font-weight: 600;
  margin-left: 1rem;
  
  background: ${e=>{switch(e.status){case"active":return"rgba(6, 214, 160, 0.2)";case"paused":return"rgba(255, 187, 0, 0.2)";case"completed":return"rgba(139, 92, 246, 0.2)";default:return"rgba(255, 255, 255, 0.1)"}}};
  
  color: ${e=>{switch(e.status){case"active":return"#06d6a0";case"paused":return"#ffbb00";case"completed":return"#8b5cf6";default:return"rgba(255, 255, 255, 0.7)"}}};
  
  svg {
    margin-right: 0.5rem;
  }
`,qa=(Kt.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  padding: 1rem;
  background: rgba(20, 20, 40, 0.4);
  border-radius: 8px;
  border-left: 4px solid ${Qt.colors.josh.primary};
`,Kt.h3`
  margin: 0;
  font-size: 1.1rem;
  color: white;
`,Kt.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`,Kt.span`
  color: rgba(255, 255, 255, 0.9);
  font-weight: 500;
  font-size: 0.95rem;
`,Kt.div`
  width: 150px;
  height: 8px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 4px;
  overflow: hidden;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 40%;
    background: linear-gradient(90deg, ${Qt.colors.josh.primary}, ${Qt.colors.josh.muted});
    border-radius: 4px;
  }
`,Kt.div`
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
  margin-top: 2rem;
`,Kt.button`
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  background: ${e=>"primary"===e.variant?Qt.colors.josh.primary:"transparent"};
  color: ${e=>"primary"===e.variant?"white":"rgba(255, 255, 255, 0.9)"};
  border: 1px solid ${e=>"primary"===e.variant?"transparent":"rgba(255, 255, 255, 0.2)"};

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    background: ${e=>"primary"===e.variant?Qt.colors.josh.muted:"rgba(255, 255, 255, 0.1)"};
  }

  &:active {
    transform: translateY(0);
  }

  svg {
    font-size: 1.1rem;
  }
`,e=>{let{children:t,size:r=24,color:n="currentColor",viewBox:a="0 0 24 24",title:o,className:i,onClick:s,...l}=e;return(0,Xt.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:r,height:r,viewBox:a,fill:"none",stroke:n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:i,onClick:s,role:o?"img":"presentation","aria-hidden":!o,"aria-labelledby":o?`title-${o.replace(/\s+/g,"-")}`:void 0,...l,children:[o&&(0,Xt.jsx)("title",{id:`title-${o.replace(/\s+/g,"-")}`,children:o}),t]})}),Wa=e=>{let{size:t,color:r}=e;return(0,Xt.jsx)(qa,{size:t,color:r,title:"Play",children:(0,Xt.jsx)("polygon",{points:"5,3 19,12 5,21"})})},Ua=e=>{let{size:t,color:r}=e;return(0,Xt.jsxs)(qa,{size:t,color:r,title:"Pause",children:[(0,Xt.jsx)("rect",{x:"6",y:"4",width:"4",height:"16"}),(0,Xt.jsx)("rect",{x:"14",y:"4",width:"4",height:"16"})]})},Va=e=>{let{size:t,color:r}=e;return(0,Xt.jsxs)(qa,{size:t,color:r,title:"Reset",children:[(0,Xt.jsx)("path",{d:"M23 4v6h-6"}),(0,Xt.jsx)("path",{d:"M1 20v-6h6"}),(0,Xt.jsx)("path",{d:"M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"})]})},Ha=e=>{let{size:t,color:r}=e;return(0,Xt.jsxs)(qa,{size:t,color:r,title:"Save",children:[(0,Xt.jsx)("path",{d:"M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"}),(0,Xt.jsx)("polyline",{points:"17 21 17 13 7 13 7 21"}),(0,Xt.jsx)("polyline",{points:"7 3 7 8 15 8"})]})},Ka=e=>{let{size:t,color:r}=e;return(0,Xt.jsxs)(qa,{size:t,color:r,title:"File Text",children:[(0,Xt.jsx)("path",{d:"M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"}),(0,Xt.jsx)("polyline",{points:"14 2 14 8 20 8"}),(0,Xt.jsx)("line",{x1:"16",y1:"13",x2:"8",y2:"13"}),(0,Xt.jsx)("line",{x1:"16",y1:"17",x2:"8",y2:"17"}),(0,Xt.jsx)("polyline",{points:"10 9 9 9 8 9"})]})},Ga=e=>{let{size:t,color:r}=e;return(0,Xt.jsxs)(qa,{size:t,color:r,title:"User",children:[(0,Xt.jsx)("path",{d:"M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"}),(0,Xt.jsx)("circle",{cx:"12",cy:"7",r:"4"})]})},Ya=e=>{let{size:t,color:r}=e;return(0,Xt.jsxs)(qa,{size:t,color:r,title:"Calendar",children:[(0,Xt.jsx)("rect",{x:"3",y:"4",width:"18",height:"18",rx:"2",ry:"2"}),(0,Xt.jsx)("line",{x1:"16",y1:"2",x2:"16",y2:"6"}),(0,Xt.jsx)("line",{x1:"8",y1:"2",x2:"8",y2:"6"}),(0,Xt.jsx)("line",{x1:"3",y1:"10",x2:"21",y2:"10"})]})},Ja=e=>{let{size:t,color:r}=e;return(0,Xt.jsx)(qa,{size:t,color:r,title:"Activity",children:(0,Xt.jsx)("polyline",{points:"22 12 18 12 15 21 9 3 6 12 2 12"})})},Qa=e=>{let{size:t,color:r}=e;return(0,Xt.jsx)(qa,{size:t,color:r,title:"Chevron Down",children:(0,Xt.jsx)("polyline",{points:"6 9 12 15 18 9"})})},Xa=e=>{let{size:t,color:r}=e;return(0,Xt.jsx)(qa,{size:t,color:r,title:"Chevron Up",children:(0,Xt.jsx)("polyline",{points:"18 15 12 9 6 15"})})},Za=Kt.div`
  position: relative;
  width: 100%;
  user-select: none;
`,eo=Kt(Ia)`
  cursor: pointer;
  transition: all 0.3s ease;
  border-bottom-left-radius: ${e=>e.isOpen?"0":"8px"};
  border-bottom-right-radius: ${e=>e.isOpen?"0":"8px"};
  position: relative;
  border-bottom: ${e=>e.isOpen?"0":"1px solid rgba(139, 92, 246, 0.2)"};
  
  &::before {
    content: 'Current Workflow';
    position: absolute;
    top: -24px;
    left: 0;
    font-size: 0.85rem;
    color: rgba(255, 255, 255, 0.7);
    font-weight: 500;
  }
  
  &:hover {
    background-color: var(--color-bg-hover);
  }

  &:after {
    content: '';
    position: absolute;
    top: 50%;
    right: 16px;
    transform: translateY(-50%);
  }
`,to=Kt.div`
  position: absolute;
  top: 20px;
  right: 20px;
  transition: transform 0.2s ease;
`,ro=Kt.div`
  position: absolute;
  width: 100%;
  max-height: ${e=>e.isOpen?`${e.height}px`:"0"};
  overflow-y: auto;
  overflow-x: hidden;
  transition: max-height ${300}ms ease;
  z-index: 10;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.2);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  background-color: rgba(20, 20, 40, 0.95);
  
  /* Custom scrollbar */
  &::-webkit-scrollbar {
    width: 6px;
  }
  
  &::-webkit-scrollbar-track {
    background: var(--color-bg-secondary);
    border-radius: 10px;
  }
  
  &::-webkit-scrollbar-thumb {
    background: var(--color-border);
    border-radius: 10px;
  }
  
  &::-webkit-scrollbar-thumb:hover {
    background: var(--color-text-light);
  }
`,no=Kt(Ia)`
  padding: 16px 20px;
  cursor: pointer;
  transition: all 0.2s ease;
  background-color: ${e=>e.isSelected?"rgba(139, 92, 246, 0.2)":"rgba(20, 20, 40, 0.9)"};
  opacity: ${e=>e.isSelected?1:.98};
  border-radius: 0;
  border-top: 1px solid rgba(139, 92, 246, 0.2);
  margin: 0;
  
  &:hover {
    background-color: rgba(139, 92, 246, 0.15);
  }
  
  &:last-child {
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
  }
`,ao=t=>{let{workflows:r,selectedWorkflowIndex:n,onSelect:a,formatDate:o}=t;const[i,s]=(0,e.useState)(!1),[l,c]=(0,e.useState)(0),u=(0,e.useRef)(null),d=(0,e.useRef)(null);(0,e.useEffect)((()=>{if(u.current){const e=102,t=3,n=Math.max(0,r.length-1),a=Math.min(n,t)*e;c(a)}}),[r.length,n]),(0,e.useEffect)((()=>{const e=e=>{d.current&&!d.current.contains(e.target)&&s(!1)};return document.addEventListener("mousedown",e),()=>{document.removeEventListener("mousedown",e)}}),[]);const p=r[n];return(0,Xt.jsxs)(Za,{ref:d,children:[(0,Xt.jsxs)(eo,{isOpen:i,onClick:()=>{s(!i)},"aria-expanded":i,"aria-label":"Select workflow",children:[(0,Xt.jsxs)(Da,{children:[(0,Xt.jsxs)(Ra,{children:[(0,Xt.jsxs)(Na,{children:[(0,Xt.jsx)(Ka,{size:16})," Workflow ID:"]}),(0,Xt.jsx)(Ma,{children:p.id})]}),(0,Xt.jsxs)(Ra,{children:[(0,Xt.jsxs)(Na,{children:[(0,Xt.jsx)(Ga,{size:16})," Owner:"]}),(0,Xt.jsx)(Ma,{children:p.ownerAgentId.charAt(0).toUpperCase()+p.ownerAgentId.slice(1)})]}),(0,Xt.jsxs)(Ra,{children:[(0,Xt.jsxs)(Na,{children:[(0,Xt.jsx)(Ya,{size:16})," Created:"]}),(0,Xt.jsx)(Ma,{children:o()})]})]}),(0,Xt.jsx)(to,{style:{transform:i?"rotate(180deg)":"rotate(0)"},children:i?(0,Xt.jsx)(Xa,{size:16}):(0,Xt.jsx)(Qa,{size:16})})]}),(0,Xt.jsx)(ro,{isOpen:i,height:l,ref:u,children:r.filter(((e,t)=>t!==n)).map(((e,t)=>{const r=t>=n?t+1:t;return(0,Xt.jsx)(no,{isSelected:!1,onClick:()=>(e=>{a(e),s(!1)})(r),"aria-selected":!1,children:(0,Xt.jsxs)(Da,{children:[(0,Xt.jsxs)(Ra,{children:[(0,Xt.jsxs)(Na,{children:[(0,Xt.jsx)(Ka,{size:16})," Workflow ID:"]}),(0,Xt.jsx)(Ma,{children:e.id})]}),(0,Xt.jsxs)(Ra,{children:[(0,Xt.jsxs)(Na,{children:[(0,Xt.jsx)(Ga,{size:16})," Owner:"]}),(0,Xt.jsx)(Ma,{children:e.ownerAgentId.charAt(0).toUpperCase()+e.ownerAgentId.slice(1)})]}),(0,Xt.jsxs)(Ra,{children:[(0,Xt.jsxs)(Na,{children:[(0,Xt.jsx)(Ya,{size:16})," Created:"]}),(0,Xt.jsx)(Ma,{children:o()})]})]})},e.id)}))})]})},oo=Kt.div`
  width: 100%;
  background: rgba(20, 20, 40, 0.6);
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.15);
  border: 1px solid rgba(139, 92, 246, 0.2);
  margin-bottom: 2rem;
`,io=Kt.div`
  padding: 1.25rem 1.5rem;
  background: rgba(139, 92, 246, 0.15);
  border-bottom: 1px solid rgba(139, 92, 246, 0.2);
  display: flex;
  justify-content: space-between;
  align-items: center;
`,so=Kt.h2`
  margin: 0;
  font-size: 1.35rem;
  font-weight: 600;
  color: white;
  
  @media (max-width: 768px) {
    font-size: 1.25rem;
  }
`,lo=Kt.div`
  display: grid;
  grid-template-columns: 50px 2fr 1fr 1fr 1.5fr 40px;
  align-items: center;
  padding: 1.25rem 1.5rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  transition: background 0.3s;
  
  &:hover {
    background: rgba(139, 92, 246, 0.07);
  }
  
  @media (max-width: 1200px) {
    grid-template-columns: 40px 2fr 1fr 1fr 1fr 40px;
  }
  
  @media (max-width: 991px) {
    grid-template-columns: 40px 2fr 1fr 1fr 40px;
  }
  
  @media (max-width: 768px) {
    grid-template-columns: 40px 2fr 1fr 40px;
    padding: 1rem;
  }
  
  @media (max-width: 640px) {
    grid-template-columns: 40px 2fr 40px;
    gap: 0.75rem;
  }
`,co=Kt.div`
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${Qt.gradientMain};
  color: white;
  font-weight: bold;
  border-radius: 50%;
  font-size: 0.95rem;
  
  @media (max-width: 640px) {
    width: 28px;
    height: 28px;
    font-size: 0.9rem;
  }
`,uo=Kt.div`
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
  
  strong {
    font-size: 1.1rem;
    color: white;
    
    @media (max-width: 640px) {
      font-size: 1rem;
    }
  }
  
  p {
    margin: 0;
    color: rgba(255, 255, 255, 0.8);
    font-size: 0.95rem;
    
    @media (max-width: 640px) {
      font-size: 0.85rem;
    }
  }
`,po=Kt.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  
  span {
    color: white;
    font-weight: 500;
    font-size: 0.95rem;
  }
  
  @media (max-width: 768px) {
    span {
      display: none;
    }
  }
  
  @media (max-width: 640px) {
    display: none;
  }
`,fo=Kt.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  color: white;
  font-size: 0.9rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
`,ho=Kt.div`
  @media (max-width: 991px) {
    display: none;
  }
`,mo=Kt.div`
  display: inline-block;
  padding: 0.35rem 0.8rem;
  border-radius: 50px;
  font-size: 0.85rem;
  font-weight: 600;
  
  background: ${e=>{switch(e.status){case"completed":return"rgba(6, 214, 160, 0.2)";case"in-progress":return"rgba(255, 158, 0, 0.2)";default:return"rgba(255, 255, 255, 0.1)"}}};
  
  color: ${e=>{switch(e.status){case"completed":return"#06d6a0";case"in-progress":return"#ff9e00";default:return"rgba(255, 255, 255, 0.7)"}}};
`,go=Kt.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  
  svg {
    color: ${Qt.colors.josh.primary};
  }
  
  @media (max-width: 768px) {
    display: none;
  }
`,bo=Kt.span`
  background: rgba(139, 92, 246, 0.15);
  color: rgba(255, 255, 255, 0.9);
  padding: 0.25rem 0.6rem;
  border-radius: 4px;
  font-size: 0.8rem;
  font-weight: 500;
`,vo=Kt.button`
  background: none;
  border: none;
  color: white;
  cursor: pointer;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  transition: background 0.2s;
  
  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }
  
  svg {
    font-size: 1.25rem;
  }
`,yo=Kt.div`
  padding: 1.25rem 1.5rem 1.5rem;
  background: rgba(20, 20, 30, 0.5);
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  
  @media (max-width: 768px) {
    padding: 1rem;
  }
`,xo=Kt.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`,wo=Kt.h3`
  margin: 0;
  font-size: 1.05rem;
  font-weight: 600;
  color: ${Qt.colors.josh.primary};
  display: flex;
  align-items: center;
  gap: 0.5rem;
  
  svg {
    font-size: 1.1rem;
  }
`,ko=Kt.p`
  margin: 0;
  color: rgba(255, 255, 255, 0.85);
  font-size: 0.95rem;
  line-height: 1.5;
`,So=Kt.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  flex-wrap: wrap;
  
  @media (max-width: 991px) {
    flex-direction: column;
    align-items: flex-start;
    
    svg {
      transform: rotate(90deg);
      margin: 0.5rem 0;
    }
  }
`,jo=Kt.div`
  flex: 1;
  min-width: 300px;
  
  @media (max-width: 768px) {
    min-width: 0;
    width: 100%;
  }
`,Eo=Kt.h4`
  margin: 0 0 0.5rem;
  font-size: 0.95rem;
  font-weight: 600;
  color: ${Qt.colors.josh.muted};
`,Co=Kt.div`
  background: rgba(30, 30, 50, 0.6);
  border-radius: 8px;
  padding: 1rem;
  border: 1px solid rgba(139, 92, 246, 0.2);
`,_o=Kt.div`
  font-family: "Fira Mono", "Consolas", "Menlo", monospace;
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.9);
  white-space: pre-wrap;
  line-height: 1.5;
  
  p {
    margin: 0.5rem 0;
    
    &:first-child {
      margin-top: 0;
    }
    
    strong {
      color: ${Qt.colors.josh.primary};
    }
  }
`,Oo=Kt.ul`
  margin: 0.5rem 0 0;
  padding: 0 0 0 1.25rem;
  list-style-type: circle;
`,Po=Kt.li`
  color: rgba(255, 255, 255, 0.85);
  margin-bottom: 0.35rem;
  font-size: 0.95rem;
`,Ao={nat:{id:"nat",name:"Nat",color:"#8b5cf6",role:"CEO/AI PM"},brian:{id:"brian",name:"Brian",color:"#06d6a0",role:"Product Manager"},reqqy:{id:"reqqy",name:"Reqqy",color:"#ff9e00",role:"Requirements Agent"},josh:{id:"josh",name:"Josh",color:"#ff5a5f",role:"Design Agent"},james_terrell:{id:"james_terrell",name:"James & Terrell",color:"#0084ff",role:"Developer Team"},james:{id:"james",name:"James",color:"#3b82f6",role:"Developer"},terrell:{id:"terrell",name:"Terrell",color:"#2563eb",role:"Developer"},antosh:{id:"antosh",name:"Antosh",color:"#4c1d95",role:"Testing Agent"},compass:{id:"compass",name:"Compass",color:"#ec4899",role:"Router Agent"}},To=t=>{let{steps:r,title:n}=t;const[a,o]=(0,e.useState)(new Set);return(0,Xt.jsxs)(oo,{children:[(0,Xt.jsx)(io,{children:(0,Xt.jsx)(so,{children:n})}),r.map(((t,n)=>{const i=a.has(t.id),s=(l=n,r.length,l<3?"completed":3===l?"in-progress":"pending");var l;const c=Ao[t.ownerAgentId]||{id:t.ownerAgentId,name:t.ownerAgentId,color:"#999999",role:"Unknown Agent"};return(0,Xt.jsxs)(e.Fragment,{children:[(0,Xt.jsxs)(lo,{children:[(0,Xt.jsx)(co,{children:n+1}),(0,Xt.jsxs)(uo,{children:[(0,Xt.jsx)("strong",{children:t.serviceName}),(0,Xt.jsx)("p",{children:t.actionToTake})]}),(0,Xt.jsxs)(po,{children:[(0,Xt.jsx)(fo,{style:{backgroundColor:c.color},children:c.name.charAt(0)}),(0,Xt.jsx)("span",{children:c.name})]}),(0,Xt.jsx)(ho,{children:(0,Xt.jsxs)(mo,{status:s,children:["completed"===s&&"Completed","in-progress"===s&&"In Progress","pending"===s&&"Pending"]})}),(0,Xt.jsxs)(go,{children:[(0,Xt.jsx)("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:(0,Xt.jsx)("path",{d:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"})}),t.tools.map(((e,t)=>(0,Xt.jsx)(bo,{children:e},t)))]}),(0,Xt.jsx)(vo,{onClick:()=>{return e=t.id,void o((t=>{const r=new Set(t);return r.has(e)?r.delete(e):r.add(e),r}));var e},children:i?(0,Xt.jsx)("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:(0,Xt.jsx)("path",{d:"M18 15l-6-6-6 6"})}):(0,Xt.jsx)("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:(0,Xt.jsx)("path",{d:"M6 9l6 6 6-6"})})})]}),i&&(0,Xt.jsxs)(yo,{children:[(0,Xt.jsxs)(xo,{children:[(0,Xt.jsx)(wo,{children:"Action to Take:"}),(0,Xt.jsx)(ko,{children:t.actionToTake})]}),(0,Xt.jsxs)(So,{children:[(0,Xt.jsxs)(jo,{children:[(0,Xt.jsxs)(Eo,{children:["Input (",t.expectedIO.input.inputType,"):"]}),(0,Xt.jsx)(Co,{children:(0,Xt.jsxs)(_o,{children:[(0,Xt.jsxs)("p",{children:[(0,Xt.jsx)("strong",{children:"System:"})," ",t.expectedIO.input.systemPrompt]}),(0,Xt.jsxs)("p",{children:[(0,Xt.jsx)("strong",{children:"User:"})," ",t.expectedIO.input.userPrompt]})]})})]}),(0,Xt.jsxs)(Oo,{children:["Prerequisites:",t.prerequisiteSteps.map((e=>(0,Xt.jsx)(Po,{children:e},e)))]})]})]})]},t.id)}))]})},zo=Kt.div`
    flex: 1 1 auto;
    padding: var(--spacing-md) var(--spacing-base) var(--spacing-base) var(--spacing-md);
    overflow-y: auto;
    min-height: 144px;
`,Io=(Kt.div`
    background: ${e=>e.you?"linear-gradient(90deg, var(--color-josh-primary) 35%, var(--color-josh-secondary) 100%)":"var(--color-neutral-200)"};
    color: ${e=>e.you?"var(--color-neutral-100)":"var(--color-neutral-900)"};
    border-radius: var(--border-radius-md) var(--border-radius-md) var(--border-radius-md) var(--border-radius-sm);
    padding: var(--spacing-xs) var(--spacing-base) var(--spacing-xs) var(--spacing-base);
    margin: 0 0 var(--spacing-xs) 0;
    font-size: var(--font-size-base);
    align-self: ${e=>e.you?"flex-end":"flex-start"};
    box-shadow: var(--shadow-sm);
    font-weight: var(--font-weight-medium);
    max-width: 88%;
    word-break: break-word;
`,Kt.div`
    padding: var(--spacing-xs) var(--spacing-base) var(--spacing-sm) var(--spacing-md);
    background: var(--color-neutral-100);
    border-top: var(--border-width-medium) solid var(--color-neutral-200);
    display: flex;
    align-items: center;
    gap: var(--spacing-xs);
`),Do=Kt.input`
    flex: 1 1 auto;
    padding: var(--spacing-xs) var(--spacing-sm);
    border-radius: var(--border-radius-sm);
    border: var(--border-width-medium) solid var(--color-neutral-200);
    background: var(--color-neutral-200);
    font-size: var(--font-size-base);
    transition: all var(--transition-fast);

    &:focus-visible {
        border: var(--border-width-medium) solid var(--color-josh-primary);
        outline: none;
        box-shadow: var(--shadow-sm);
    }
`,Ro=Kt.div`
  position: relative;
  width: 100%;
  overflow: hidden;
  background: var(--color-neutral-100);
  border-top-left-radius: var(--border-radius-md);
  border-top-right-radius: var(--border-radius-md);
  padding: var(--spacing-xs) var(--spacing-sm);
  border-bottom: 1px solid var(--color-neutral-200);
`,No=Kt.div`
  display: flex;
  transition: transform ${300}ms ease;
  transform: translateX(${e=>e.offset}px);
  width: fit-content;
`,Mo=Kt.div`
  position: relative;
  width: 100%;
  min-width: 100%;
  padding: var(--spacing-sm);
  background-color: transparent;
  overflow: hidden;
  cursor: pointer;
  opacity: ${e=>e.isActive?1:.7};
  transition: all var(--transition-normal);
  border-left: ${e=>e.isActive?`3px solid ${e.borderColor}`:"3px solid transparent"};
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to right, ${e=>e.borderColor}10, transparent 30%);
    pointer-events: none;
    opacity: ${e=>e.isActive?1:0};
    transition: opacity var(--transition-normal);
  }
  
  &:hover {
    opacity: 1;
    
    &::before {
      opacity: 0.5;
    }
  }
`,Lo=Kt.div`
  display: flex;
  align-items: center;
`,Fo=(Kt.div`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: ${e=>e.bgColor};
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: var(--font-weight-bold);
  margin-right: var(--spacing-sm);
`,Kt.div`
  display: flex;
  flex-direction: column;
`),$o=Kt.h3`
  font-size: var(--font-size-base);
  font-weight: var(--font-weight-bold);
  margin: 0;
  color: var(--color-neutral-900);
`,Bo=Kt.p`
  font-size: var(--font-size-xs);
  color: var(--color-neutral-500);
  margin: 0;
  position: relative;
  
  &::before {
    content: '🔹';
    font-size: 8px;
    margin-right: 4px;
  }
`,qo=Kt.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: var(--spacing-xs);
  gap: var(--spacing-xxs);
`,Wo=Kt.div`
  width: 6px;
  height: 6px;
  border-radius: var(--border-radius-full);
  background-color: ${e=>e.active?e.color:"var(--color-neutral-300)"};
  transition: all var(--transition-normal);
  cursor: pointer;
  
  &:hover {
    transform: ${e=>e.active?"none":"scale(1.2)"};
    opacity: ${e=>e.active?1:.8};
  }
  
  /* Active state adds a subtle glow */
  ${e=>e.active&&`\n    box-shadow: 0 0 5px ${e.color}50;\n  `}
`,Uo=Kt.button`
  background-color: ${e=>e.color};
  color: white;
  border: none;
  border-radius: var(--border-radius-full);
  width: 28px;
  height: 28px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all var(--transition-bounce);
  opacity: 0.85;
  margin: 0 var(--spacing-xs);

  &:hover {
    filter: brightness(1.1);
    transform: scale(1.08);
    opacity: 1;
    box-shadow: var(--shadow-sm);
  }

  &:active {
    transform: scale(0.95);
  }

  svg {
    width: 14px;
    height: 14px;
  }
`,Vo=Kt.div`
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  padding-top: var(--spacing-xs);
  margin-top: var(--spacing-xs);
  width: 100%;
`,Ho=t=>{var r,n;let{agents:a,selectedAgent:o,onAgentChange:i,children:s}=t;const[l,c]=(0,e.useState)(0),u=e.useRef(null);e.useEffect((()=>{u.current&&c(u.current.offsetWidth);const e=()=>{u.current&&c(u.current.offsetWidth)};return window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)}),[]);const d=Math.max(0,a.findIndex((e=>e.key===o))),p=(null===(r=a[d])||void 0===r?void 0:r.key)||"Nat",f=(null===(n=Ca[p])||void 0===n?void 0:n.color)||"var(--color-primary)";return s?(0,Xt.jsx)(Ro,{children:s}):(0,Xt.jsxs)(Ro,{ref:u,children:[(0,Xt.jsx)(No,{offset:-d*l,children:a.map(((e,t)=>{const r=Ca[e.key];return(0,Xt.jsx)(Mo,{isActive:t===d,borderColor:(null===r||void 0===r?void 0:r.color)||"var(--color-primary)",onClick:()=>i(e.key),children:(0,Xt.jsxs)(Lo,{children:[(0,Xt.jsx)(na,{color:(null===r||void 0===r?void 0:r.color)||"var(--color-primary)",children:(null===r||void 0===r?void 0:r.short)||e.name.charAt(0)}),(0,Xt.jsxs)(Fo,{children:[(0,Xt.jsx)($o,{children:e.name}),(0,Xt.jsx)(Bo,{children:e.role})]})]})},e.key)}))}),(0,Xt.jsxs)(Vo,{children:[(0,Xt.jsx)(Uo,{direction:"left",onClick:()=>{const e=0===d?a.length-1:d-1;i(a[e].key)},color:f,children:(0,Xt.jsx)(lr,{})}),(0,Xt.jsx)(qo,{children:a.map(((e,t)=>{var r;return(0,Xt.jsx)(Wo,{active:t===d,color:(null===(r=Ca[e.key])||void 0===r?void 0:r.color)||"var(--color-primary)",onClick:()=>{return t=e.key,void("function"===typeof i&&i(t));var t}},t)}))}),(0,Xt.jsx)(Uo,{direction:"right",onClick:()=>{const e=d===a.length-1?0:d+1;i(a[e].key)},color:f,children:(0,Xt.jsx)(sr,{})})]})]})},Ko=Yt`
    0%, 100% {
        opacity: 1;
    }
    50% {
        opacity: 0.3;
    }
`,Go=Kt.div`
  display: flex;
  justify-content: ${e=>e.isUser?"flex-end":"flex-start"};
  margin-bottom: var(--spacing-base);
  width: 100%;
`,Yo=Kt.div`
  max-width: 80%;
  padding: var(--spacing-sm) var(--spacing-md);
  
  /* Different shapes for human vs agent messages */
  border-radius: ${e=>e.isUser?"18px 18px 4px 18px":"18px 18px 18px 4px"};
  
  /* Gradient background for agent messages */
  background: ${e=>{if(e.isUser)return"var(--color-neutral-200)";switch(e.agentKey){case"Nat":return"var(--color-nat-gradient)";case"Brian":return"var(--color-brian-gradient)";case"Reqqy":return"var(--color-reqqy-gradient)";case"Josh":default:return"linear-gradient(90deg, var(--color-josh-primary) 35%, var(--color-josh-secondary) 100%)";case"James":return"var(--color-james-gradient)";case"Terrell":return"var(--color-terrell-gradient)";case"Antosh":return"var(--color-antosh-gradient)";case"Man-Man":return"var(--color-manman-gradient)";case"Lia":return"var(--color-lia-gradient)";case"Compass":return"var(--color-compass-gradient)"}}};
  
  color: ${e=>e.isUser?"var(--color-neutral-900)":"var(--color-neutral-100)"};
  
  /* Custom border styling */
  border: 1px solid ${e=>e.isUser?"rgba(230, 230, 240, 0.7)":"rgba(139, 92, 246, 0.3)"};
  
  /* Streaming text animation */
  ${e=>e.isStreaming&&Ut`
    .streaming-text {
      display: inline-block;
      max-width: 100%;
      overflow-wrap: break-word;
      word-wrap: break-word;
      word-break: break-word;
      position: relative;

      &:after {
        content: '|';
        display: inline-block;
        animation: ${Ko} 0.8s infinite;
        font-weight: normal;
        opacity: 0.7;
      }
    }
  `}
`,Jo=Kt.p`
  margin: 0;
  line-height: var(--line-height-normal);
  word-break: break-word;
`,Qo=e=>{let{message:t,isUser:r,agentKey:n,you:a,isStreaming:o,children:i}=e;const s=r||a;return(0,Xt.jsx)(Go,{isUser:!s,children:(0,Xt.jsx)(Yo,{isUser:!s,you:s,agentKey:n,isStreaming:o,children:i||(o?(0,Xt.jsx)("div",{className:"streaming-text",children:t}):(0,Xt.jsx)(Jo,{children:t}))})})},Xo=[{key:"Compass",name:"Compass",role:"HR/Router"},{key:"Nat",name:"Nat",role:"CEO/AI PM"},{key:"Brian",name:"Brian",role:"Product Manager"},{key:"Reqqy",name:"Reqqy",role:"Requirements Agent"},{key:"Josh",name:"Josh",role:"Graphic Designer"},{key:"James",name:"James",role:"Backend Developer"},{key:"Terrell",name:"Terrell",role:"Frontend Developer"},{key:"Antosh",name:"Antosh",role:"Testing & Analytics"},{key:"Manman",name:"Man-Man",role:"Maintenance"},{key:"Lia",name:"Lia",role:"Social Media"}],Zo=()=>(0,Xt.jsx)(qa,{children:(0,Xt.jsx)("path",{d:"M12 2C6.48 2 2 6.48 2 12c0 5.52 4.48 10 10 10s10-4.48 10-10c0-5.52-4.48-10-10-10zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v2h-2zm0 4h2v6h-2z"})}),ei=()=>(0,Xt.jsx)(qa,{children:(0,Xt.jsx)("path",{d:"M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"})}),ti=Yt`
    0%, 100% {
        opacity: 1;
    }
    50% {
        opacity: 0.3;
    }
`,ri=(Yt`
    from {
        opacity: 1;
        transform: translateX(0);
    }
    to {
        opacity: 0;
        transform: translateX(20px);
    }
`,Yt`
    from {
        opacity: 0;
        transform: translateX(-20px);
    }
    to {
        opacity: 1;
        transform: translateX(0);
    }
`,Yt`
    0%, 100% {
        opacity: 1;
        transform: scale(1);
    }
    50% {
        opacity: 0.5;
        transform: scale(0.98);
    }
`,Kt.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 4px 0;
`),ni=Kt.span`
    color: ${e=>e.agentColor||"var(--color-accent-josh)"};
    font-weight: 700;
    margin: 0 3px;
    animation: ${ti} 1.4s infinite;
    animation-delay: ${e=>e.delay}ms;
`,ai=e=>(0,Xt.jsxs)(ri,{"aria-live":"polite","aria-atomic":"true",children:[(0,Xt.jsx)(ni,{delay:0,agentColor:e.dotColor,children:"\u2022"}),(0,Xt.jsx)(ni,{delay:200,agentColor:e.dotColor,children:"\u2022"}),(0,Xt.jsx)(ni,{delay:400,agentColor:e.dotColor,children:"\u2022"})]}),oi=Kt.div`
    position: fixed;
    top: 0;
    right: 0;
    height: 100vh;
    z-index: 1000;
    display: flex;
    flex-direction: column;
    pointer-events: none;
`,ii=Kt.button`
    position: fixed;
    bottom: 24px;
    right: 24px;
    width: 64px;
    height: 64px;
    border-radius: 50%;
    background: linear-gradient(135deg, #8b5cf6, #7209b7);
    color: white;
    border: none;
    box-shadow: 0 4px 15px rgba(139, 92, 246, 0.5);
    cursor: pointer;
    display: ${e=>e.isOpen?"none":"flex"};
    align-items: center;
    justify-content: center;
    z-index: 1001;
    transition: all 0.3s ease;
    pointer-events: all;

    &:hover {
        transform: scale(1.05);
        box-shadow: 0 6px 20px rgba(139, 92, 246, 0.6);
        background: linear-gradient(135deg, #9461fb, #7f18c9);
    }

    &:active {
        transform: scale(0.98);
    }

    svg {
        width: 32px;
        height: 32px;
        transition: transform 0.3s ease;
        transform: ${e=>e.isOpen?"rotate(180deg)":"rotate(0deg)"};
    }
`,si=Kt.div`
    width: 350px;
    height: calc(100% - ${60}px);
    margin-top: ${60}px;
    background-color: var(--color-neutral-100);
    box-shadow: -5px 0 25px rgba(0, 0, 0, 0.3);
    display: flex;
    flex-direction: column;
    transform: translateX(${e=>e.isOpen?"0":"100%"});
    transition: transform ${300}ms ease;
    pointer-events: ${e=>e.isOpen?"all":"none"};
    border-left: var(--border-width-medium) solid var(--color-neutral-200);
`,li=(Kt.button`
    background: transparent;
    border: none;
    color: var(--color-neutral-700);
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: color 0.2s ease;

    &:hover {
        color: var(--color-josh-primary);
    }

    svg {
        width: 24px;
        height: 24px;
    }
`,Kt.span`
    font-size: 0.75rem;
    color: var(--color-neutral-900);
    margin-top: 4px;
    display: block;
    text-align: right;
`),ci=Kt(Do)`
    color: var(--color-neutral-600);

    &::placeholder {
        color: var(--color-neutral-400);
    }
`,ui=(Kt.div`
    display: flex;
    flex-direction: column;
    height: 500px;
    width: 100%;
    max-width: 600px;
    border-radius: var(--border-radius-md);
    box-shadow: var(--shadow-card);
    background: var(--color-neutral-100);
    overflow: hidden;
    border: 1px solid var(--color-neutral-200);
`,Kt.div`
    flex: 1;
    padding: var(--spacing-md);
    overflow-y: auto;
    background: var(--color-neutral-100);
`,Kt.div`
    padding: var(--spacing-base);
    border-top: 1px solid rgba(203, 213, 225, 0.4);
    display: flex;
`,Kt.input`
    flex: 1;
    padding: var(--spacing-sm);
    border: 1px solid var(--color-neutral-300);
    border-radius: var(--border-radius-md);
    font-size: var(--font-size-base);

    &:focus {
        outline: none;
        border-color: var(--color-primary);
    }
`,Kt.button`
    background: linear-gradient(135deg, #8b5cf6, #7209b7);
    color: white;
    border: none;
    border-radius: 50%;
    width: 42px;
    height: 42px;
    margin-left: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);

    &:hover {
        transform: scale(1.08);
        box-shadow: 0 4px 12px rgba(139, 92, 246, 0.4);
        background: linear-gradient(135deg, #9461fb, #7f18c9);
    }

    svg {
        width: 24px;
        height: 24px;
    }
`),di=t=>{let{agentId:r="Assistant",agentProfile:n}=t;(null===n||void 0===n?void 0:n.name)||(r.charAt(0).toUpperCase(),r.slice(1)),null===n||void 0===n||n.color;const a=`var(--color-${r.toLowerCase()}-secondary)`,[o,i]=(null===n||void 0===n||n.short,(0,e.useState)(!1)),[s,l]=(0,e.useState)(""),[c,u]=(0,e.useState)(!1),[d,p]=(0,e.useState)(!1),[f,h]=(0,e.useState)(""),[m,g]=(0,e.useState)([{id:"1",text:"Hello! How can I help you with your workflows today?",isUser:!1,timestamp:new Date}]),b=(0,e.useRef)(null);(0,e.useRef)(null);(0,e.useEffect)((()=>{b.current&&b.current.scrollIntoView({behavior:"smooth"})}),[m,c,d]);const v=e=>{p(!0),h("");let t=0;const r=e.length,n=()=>{t<r?(h((r=>r+e[t])),t++,setTimeout(n,(()=>{const r=e[t]||"";return[".",",","!","?"].includes(r)?Math.floor(150*Math.random())+50:Math.floor(30*Math.random())+15})())):setTimeout((()=>{p(!1);const t={id:Date.now().toString(),text:e,isUser:!1,timestamp:new Date};g((e=>[...e,t]))}),300)};n()},y=()=>{if(s.trim()){const e={id:Date.now().toString(),text:s,isUser:!0,timestamp:new Date};g([...m,e]),l(""),u(!0);const t=`\nI\nunderstand\nyour\nquestion\nabout\n"${s.substring(0,20)}${s.length>20?"...":""}".Let\nme\nhelp\nyou\nwith that workflow\nissue.`;setTimeout((()=>{u(!1),v(t)}),2e3)}},[x,w]=(0,e.useState)("Compass");return(0,Xt.jsxs)(oi,{children:[(0,Xt.jsx)(ii,{isOpen:o,onClick:()=>{i(!o)},"aria-label":o?"Close chat":"Open chat",style:{},children:(0,Xt.jsx)(Zo,{})}),(0,Xt.jsxs)(si,{isOpen:o,children:[(0,Xt.jsx)(Ho,{agents:Xo,selectedAgent:x,onAgentChange:e=>{w(e||"Compass")}}),(0,Xt.jsxs)(zo,{children:[m.map((e=>{return(0,Xt.jsxs)(Qo,{you:e.isUser,message:e.text,isUser:e.isUser,isStreaming:e.isStreaming,children:[e.text,(0,Xt.jsx)(li,{isHuman:e.isUser,children:(t=e.timestamp,t.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"}))})]},e.id);var t})),c&&(0,Xt.jsx)(Qo,{isUser:!1,you:!1,message:"",children:(0,Xt.jsx)(ai,{dotColor:a})}),d&&(0,Xt.jsx)(Qo,{you:!1,isStreaming:!0,isUser:!1,message:"",children:(0,Xt.jsx)("div",{className:"streaming-text",children:f})}),(0,Xt.jsx)("div",{ref:b})]}),(0,Xt.jsxs)(Io,{children:[(0,Xt.jsx)(ci,{type:"text",placeholder:"Type a message...",value:s,onChange:e=>l(e.target.value),onKeyDown:e=>{"Enter"===e.key&&y()}}),(0,Xt.jsx)(ui,{onClick:y,"aria-label":"Send message",children:(0,Xt.jsx)(ei,{})})]})]})]})},pi={id:"RRYT_Content_001",name:"Content Creation for Respawn Rants",ownerAgentId:"lia",description:"This workflow enables Agent Lia to create YouTube content specifically for Respawn Rants by refining the description, title, hashtags, and tags based on SEO and gaming content needs. It is also able to generate specific formatting for titles, descriptions, hashtags, and tags based on user inputs. If the request is not for Respawn Rants, consult the corresponding client workflow.",steps:[{id:"RR001-step-1",ownerAgentId:"lia",serviceName:"Rework Description",tools:["OpenAI"],actionToTake:"Craft a refined and engaging description in the Respawn Rants format based on the user-inputted description. If the request is from the client, process accordingly.",expectedIO:{input:{inputType:"json",systemPrompt:"{master-system-prompt} + {lia-system-prompt} \n You are AI Agent Lia crafting gaming video descriptions from the perspective of Soldier:76 if it's for Respawn Rants.",userPrompt:"Refine the video description using gameplay details and content summary, following the Respawn Rants format."},output:{output:"Reworked Description",outputType:"text"}},prerequisiteSteps:[]},{id:"RR001-step-2",ownerAgentId:"lia",serviceName:"Rework Title/New Title Creation",tools:["OpenAI"],actionToTake:"Create a compelling and SEO-friendly title or rework the existing title in the Respawn Rants format based on the user-inputted title.",expectedIO:{input:{inputType:"json",systemPrompt:"{master-system-prompt} + {lia-system-prompt} \n You are AI Agent Lia creating engaging gaming video titles for Respawn Rants.",userPrompt:"Create or optimize title using video theme and strategic keywords."},output:{output:"Reworked or New Title",outputType:"text"}},prerequisiteSteps:["RR001-step-1"]},{id:"RR001-step-3",ownerAgentId:"lia",serviceName:"Generate Hashtags",tools:["OpenAI"],actionToTake:"Create a list of balanced and effective hashtags in Respawn Rants format.",expectedIO:{input:{inputType:"json",systemPrompt:"{master-system-prompt} + {lia-system-prompt}\n You are AI Agent Lia generating gaming-focused hashtags.",userPrompt:"Create optimized hashtags based on gaming content and SEO analysis."},output:{output:"List of suitable YouTube Hashtags",outputType:"json"}},prerequisiteSteps:["RR001-step-2"]},{id:"RR001-step-4",ownerAgentId:"lia",serviceName:"Generate Tags",tools:["OpenAI"],actionToTake:"Transform hashtags into a comma-separated list of tags, ensuring the format is suitable for Respawn Rants.",expectedIO:{input:{inputType:"json",systemPrompt:"{master-system-prompt} + {lia-system-prompt}\nYou are AI Agent Lia converting hashtags to YouTube tags.",userPrompt:"Convert hashtags into optimized YouTube tags format."},output:{output:"Comma-delimited YouTube Tags",outputType:"text"}},prerequisiteSteps:["RR001-step-3"]},{id:"RR001-step-5",ownerAgentId:"lia",serviceName:"Format Response",tools:["Response Formatter","Template Engine","OpenAI"],actionToTake:"Format the content into standardized response format with both default template",expectedIO:{input:{inputType:"json",systemPrompt:"{master-system-prompt} + {lia-system-prompt}\nYou are AI Agent Lia formatting the final response with specific templates.",userPrompt:"Format the content into the following structure:\n                                   responseFormat: {\n                                       default: {\n                                        title: Soldier:76 Pro Tip \u2013 How to handle a Roadhog (And When to Run!) | Overwatch 2,\n                                        description: \ud83d\udd25 Soldier:76 GOES ON A RAMPAGE \u2013 DOUBLE ANA TAKEDOWN & MERCY DENIED AT OASIS | Overwatch 2 \ud83d\udd25\n                                        Sometimes, all it takes is the right angle and a quick trigger finger. In this clip, \n                                        I get the jump on Ana\u2014no hesitation, burst her down, but that Mercy always wants a \n                                        save! As soon as Ana goes down, Mercy rushes in for the Res\u2026 not on my watch. \n                                        I pressure her, and right as Ana comes back up, I throw down splash damage \n                                        and pick them BOTH off in rapid succession. Did Ana realize where the heat \n                                        was coming from? Doesn\u2019t look like it, because I catch her again sprinting \n                                        for cover\u2014reminder: keep eyes on the target, folks.\n                                        \n                                        \ud83c\udfaf In this clip: \n                                            \u2705 Perfect off-angle positioning for the opening kill \n                                            \u2705 Mercy swoops in for a clutch Res\u2014but gets caught \n                                            \u2705 Splash damage finishes the job\u2014no escape for Ana \n                                            \u2705 Team secures the point at Oasis\n                                            \n                                        \ud83d\udcac Have you ever denied a Mercy Res at the perfect moment or had a wild double kill on the point? Tell me your best clutch teamfight stories in the comments!\n                                        \n                                        \ud83d\udd14 Subscribe for more Overwatch 2 highlights, tactical breakdowns, and no-BS rants from Soldier:76.\n                                        \n                                        #Overwatch2 #Soldier76 #FPSGaming #OverwatchPlays #OverwatchClips #RespawnRants #GamingHighlights #ShooterGames #Mercy #Ana #ProPlay #Rampage #PointCapture\n                                        \n                                        Youtube Tags: Overwatch 2, Soldier76, FPS Gaming, Overwatch Plays, Overwatch Clips, Respawn Rants, Gaming Highlights, Shooter Games, Mercy, Ana, Pro Play, Rampage, Point Capture\n                                        }\n                                   }"},output:{output:"Formatted response object",outputType:"json"}},prerequisiteSteps:["RR001-step-1","RR001-step-2","RR001-step-3","RR001-step-4"]}]},fi={nat:{id:"nat",name:"Nat",short:"N",color:"#8b5cf6",role:"CEO/AI PM",description:"Overall project management, access to all system components, final decision authority"},brian:{id:"brian",name:"Brian",short:"B",color:"#06d6a0",role:"Product Manager",description:"Manages the Pair Programming Widget specifically, coordinates feature development"},reqqy:{id:"reqqy",name:"Reqqy",short:"R",color:"#ff9e00",role:"Requirements Agent",description:"Gathers requirements, creates structured issues, manages GitHub integration"},josh:{id:"josh",name:"Josh",short:"J",color:"#ff5a5f",role:"Graphic Design Agent",description:"Creates mockups, handles branding, produces visual assets and UI components"},james_terrell:{id:"james_terrell",name:"James & Terrell",short:"JT",color:"#0084ff",role:"Twin Developer Agents",description:"Collaborate via pair programming, implement features, write code"},james:{id:"james",name:"James",short:"J",color:"#00B4D8",role:"Developer",description:"Implements features, writes and fixes code, works with Terrell in pair programming"},terrell:{id:"terrell",name:"Terrell",short:"T",color:"#7B2CBF",role:"Developer",description:"Performs code reviews, provides feedback, works with James in pair programming"},antosh:{id:"antosh",name:"Antosh",short:"A",color:"#4c1d95",role:"Testing & Analytics Agent",description:"Writes and runs tests, implements TDD methodology, tracks performance metrics"},"man-man":{id:"man-man",name:"Man-Man",short:"M",color:"#10b981",role:"Maintenance Agent",description:"Handles DevOps, maintains deployed applications, manages infrastructure"},lia:{id:"lia",name:"Lia",short:"L",color:"#ec4899",role:"Email & Social Media Agent",description:"Manages social media presence, email marketing, lead generation"},compass:{id:"compass",name:"Compass",short:"C",color:"#f97316",role:"HR Agent",description:"Routes messages, maps workflows, maintains agent roster and capabilities"}},hi=(Kt.div`
    min-width: 320px;
    background: var(--color-surface-light);
    border-radius: var(--border-radius-large);
    box-shadow: var(--shadow-md);
    padding: 21px 20px 19px 24px;
    margin: 17px 0 0 0;
    display: flex;
    flex-direction: column;
    flex: 1 1 330px;
`,Kt.div`
    color: var(--color-josh-primary);
    font-size: 1.02rem;
    font-weight: 600;
    margin-bottom: 12px;
    letter-spacing: 0.012em;
`,Kt.div`
    margin: 0 0 5px 0;
    font-size: 1.015rem;
    display: flex;
    align-items: center;
    gap: 6px;
`,Kt.span`
    color: var(--color-text-dark);
    font-weight: 600;
    margin-left: 5px;
`,Kt.div`
    margin: 2.5px 0 9px 5px;
    padding: 4.5px 7px;
    background: var(--color-neutral-200);
    border-radius: var(--border-radius-small);
    color: var(--color-josh-primary);
    font-size: 0.97rem;
    font-style: italic;
`,Kt.div`
    color: var(--color-text-muted);
    font-size: 0.99rem;
    margin-bottom: 1.5px;
`,Kt.div`
    color: var(--color-text-hint);
    margin-top: 38px;
    text-align: center;
    font-size: 1.07rem;
    font-weight: 600;
    opacity: 0.83;
`,Kt.span`
    margin-left: var(--spacing-xs);
    font-size: var(--font-size-lg);
    font-weight: var(--font-weight-bold);
    color: ${e=>e.color};
    vertical-align: middle;
    display: inline-flex;
    align-items: center;
    ${e=>e.error&&Ut`
                background: var(--color-neutral-200);
                border-radius: var(--border-radius-sm);
                padding: var(--spacing-xxs) var(--spacing-xs) var(--spacing-xxs) var(--spacing-xxs);
            `}
`),mi=[{id:"agile_pair_tdd_003",name:"Agile Pair Programming with TDD Workflow",ownerAgentId:"compass",description:"A workflow for implementing features using Pair Programming and Test-Driven Development practices",steps:[{id:"APT001-step-1",ownerAgentId:"nat",serviceName:"Project Initialization",tools:["Firebase","Project Manager"],actionToTake:"Create a project in the projects collection with project details.",expectedIO:{input:{inputType:"json",systemPrompt:"You are Nat, the CEO and Project Manager.",userPrompt:"Create a project document in the collection containing all project details."},output:{output:"Project document with project ID",outputType:"json"}},prerequisiteSteps:[]},{id:"APT001-step-2",ownerAgentId:"reqqy",serviceName:"Requirements Collection",tools:["GitHub","Requirements Parser"],actionToTake:"Collect and structure project requirements",expectedIO:{input:{inputType:"json",systemPrompt:"You are Reqqy, the requirements specialist.",userPrompt:"Gather and structure the requirements based on the project details from the collection."},output:{output:"Structured requirements stored in a collection for reference",outputType:"json"}},prerequisiteSteps:["APT001-step-1"]},{id:"APT001-step-3",ownerAgentId:"brian",serviceName:"Design Document Creation",tools:["Document Editor","Design Tools"],actionToTake:"Create and store a design document in the collection using project ID.",expectedIO:{input:{inputType:"json",systemPrompt:"You are Brian, the Product Manager.",userPrompt:"Write a design document based on requirements and store it in a collection referenced by project ID."},output:{output:"Design document stored in collection",outputType:"json"}},prerequisiteSteps:["APT001-step-2"]},{id:"APT001-step-4",ownerAgentId:"josh",serviceName:"UI/UX Mockup Design",tools:["Design Tools","Asset Manager"],actionToTake:"Create visual designs and mockups based on requirements and previous mockups.",expectedIO:{input:{inputType:"json",systemPrompt:"You are Josh, the UI/UX designer.",userPrompt:"Create mockups with inspiration from stored requirements and mockups based on project ID."},output:{output:"Mockup designs as PNG file",outputType:"binary"}},prerequisiteSteps:["APT001-step-2"]},{id:"APT001-step-5",ownerAgentId:"james_terrell",serviceName:"Pair Programming Session 1",tools:["Code Editor","Version Control"],actionToTake:"Implement features and leave comments for code review",expectedIO:{input:{inputType:"code",systemPrompt:"You are James and Terrell, the development pair.",userPrompt:"Implement features based on requirements and leave comments for code review."},output:{output:"Feature implementation code with comments",outputType:"code"}},prerequisiteSteps:["APT001-step-3","APT001-step-4"]},{id:"APT001-step-6",ownerAgentId:"antosh",serviceName:"Quality Assurance",tools:["Testing Suite","Analytics Tools"],actionToTake:"Run tests against the features implemented.",expectedIO:{input:{inputType:"code",systemPrompt:"You are Antosh, the testing specialist.",userPrompt:"Execute test suite against the implemented features."},output:{output:"Test reports and performance insights",outputType:"json"}},prerequisiteSteps:["APT001-step-5"]},{id:"APT001-step-7",ownerAgentId:"terrell",serviceName:"Code Review",tools:["Code Review Tools","Version Control"],actionToTake:"Review code written by James.",expectedIO:{input:{inputType:"code",systemPrompt:"You are Terrell, conducting code reviews.",userPrompt:"Review and provide feedback on James' implementation."},output:{output:"Code review feedback and checklist updates",outputType:"json"}},prerequisiteSteps:["APT001-step-6"]},{id:"APT001-step-8",ownerAgentId:"james",serviceName:"Code Fixes",tools:["Code Editor","Version Control"],actionToTake:"Fix issues raised during code review.",expectedIO:{input:{inputType:"json",systemPrompt:"You are James, fixing code based on review.",userPrompt:"Address the issues from code review and ensure all requirements are updated."},output:{output:"Updated implementation and checklist",outputType:"code"}},prerequisiteSteps:["APT001-step-7"]},{id:"APT001-step-9",ownerAgentId:"brian",serviceName:"Final Code Review",tools:["Code Review Tools","Version Control"],actionToTake:"Conduct a final code review on the completed features.",expectedIO:{input:{inputType:"code",systemPrompt:"You are Brian, conducting final reviews.",userPrompt:"Ensure all requirements and specifications are addressed in the final code."},output:{output:"Final code review summary and actionable items",outputType:"json"}},prerequisiteSteps:["APT001-step-8"]},{id:"APT001-step-10",ownerAgentId:"nat",serviceName:"Final Review",tools:["Review Tools"],actionToTake:"Conduct a final review of the application based on user intent.",expectedIO:{input:{inputType:"json",systemPrompt:"You are Nat, performing the final product review.",userPrompt:"Review the final application against initial user intent."},output:{output:"Final review notes and any adjustments needed",outputType:"json"}},prerequisiteSteps:["APT001-step-9"]},{id:"APT001-step-11",ownerAgentId:"brian",serviceName:"Standup Meetings",tools:["Logger"],actionToTake:"Conduct standup meetings every 10 minutes.",expectedIO:{input:{inputType:"json",systemPrompt:"You are Brian, responsible for standups.",userPrompt:"Log the workflow progress of each agent every 10 minutes."},output:{output:"Standup logs with documented progress",outputType:"json"}},prerequisiteSteps:[]}]},{id:"help_desk_001",name:"Help Desk Workflow",ownerAgentId:"compass",description:"Answer questions about Handsomest Nerd, its agents, and system capabilities; troubleshoot user technical issues.",steps:[{id:"help_desk_step_1",ownerAgentId:"compass",serviceName:"Parse Request",tools:["Webhook Parser"],actionToTake:"Parse incoming message for help desk request category and keywords.",expectedIO:{input:{inputType:"json",systemPrompt:"{master-system-prompt+\n+compass-system-prompt}",userPrompt:"Parse incoming help desk request."},output:{outputType:"json",output:"question_category"}},prerequisiteSteps:[]},{id:"help_desk_step_2",ownerAgentId:"compass",serviceName:"Knowledge Lookup",tools:["Internal Docs Search","OpenAI API"],actionToTake:"Search docs and/or ask OpenAI for concise, relevant answers.",expectedIO:{input:{inputType:"json",systemPrompt:"{master-system-prompt+\n+compass-system-prompt}",userPrompt:"Find or generate help desk response."},output:{outputType:"text",output:"AI/Docs-generated answer"}},prerequisiteSteps:["help_desk_step_1"]},{id:"help_desk_step_3",ownerAgentId:"compass",serviceName:"Respond",tools:["Webhook Response"],actionToTake:"Format and return response to caller in markdown.",expectedIO:{input:{inputType:"text",userPrompt:"Format answer.",systemPrompt:"{master-system-prompt+\n+compass-system-prompt}"},output:{outputType:"json",output:"Formatted markdown response"}},prerequisiteSteps:["help_desk_step_2"]}]},pi],gi=()=>{const[t,r]=(0,e.useState)(0),[n,a]=(0,e.useState)(mi[t]),[o,i]=(0,e.useState)("active");return(0,Xt.jsxs)(Oa,{children:[(0,Xt.jsxs)(za,{children:[(0,Xt.jsx)(ao,{workflows:mi,selectedWorkflowIndex:t,onSelect:e=>{r(e),a(mi[e]),i("active")},formatDate:()=>(new Date).toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"})}),(0,Xt.jsx)(Pa,{children:(0,Xt.jsxs)("div",{children:[(0,Xt.jsxs)(Aa,{children:[n.name,(0,Xt.jsxs)(Ba,{status:o,children:[(0,Xt.jsx)(Ja,{size:18})," ",o.charAt(0).toUpperCase()+o.slice(1)]})]}),(0,Xt.jsx)(Ta,{children:n.description})]})}),(0,Xt.jsxs)(la,{role:"region","aria-label":"Present Agents",children:[(0,Xt.jsx)("div",{style:{display:"flex",alignItems:"center",marginRight:"10px",position:"relative",paddingRight:"15px"},children:(0,Xt.jsx)("div",{style:{position:"absolute",right:0,height:"28px",width:"1px",backgroundColor:"var(--color-border)",opacity:.5}})}),[...new Set(n.steps.map((e=>e.ownerAgentId)))].map((e=>{let t;return t="josh"===e||"james"===e||"terrell"===e||"james_terrell"===e?"active":"nat"===e||"compass"===e?"pending":"antosh"===e?"error":"complete",{id:e,status:t}})).map((e=>{let{id:t,status:r}=e;const n=fi[t]||{name:t,color:"#666666",short:t.charAt(0).toUpperCase()},a=dr[r]||dr.todo;return(0,Xt.jsxs)(ca,{children:[(0,Xt.jsx)(na,{color:n.color,children:(0,Xt.jsx)(aa,{children:n.name&&n.name.includes("&")?"JT":n.short||n.name.charAt(0).toUpperCase()})}),(0,Xt.jsx)(hi,{color:a.color,error:"error"===r,children:a.icon})]},t)}))]}),(0,Xt.jsxs)(La,{children:[(0,Xt.jsxs)(Fa,{onClick:()=>{i("active")},disabled:"active"===o||"completed"===o,children:[(0,Xt.jsx)(Wa,{size:18})," Start"]}),(0,Xt.jsxs)(Fa,{onClick:()=>{i("paused")},disabled:"active"!==o,children:[(0,Xt.jsx)(Ua,{size:18})," Pause"]}),(0,Xt.jsxs)(Fa,{onClick:()=>{i("active")},disabled:"completed"===o,children:[(0,Xt.jsx)(Va,{size:18})," Reset"]}),(0,Xt.jsxs)(Fa,{onClick:()=>{alert("Workflow state saved!")},children:[(0,Xt.jsx)(Ha,{size:18})," Save"]})]}),(0,Xt.jsx)($a,{children:(0,Xt.jsx)(To,{steps:n.steps,title:`${n.name} Steps`})})]}),(0,Xt.jsx)(di,{agentId:n.ownerAgentId,agentProfile:fi[n.ownerAgentId]||{name:n.ownerAgentId,color:"#8b5cf6",short:n.ownerAgentId.charAt(0).toUpperCase()}})]})};function bi(){var t;const[r,n]=(0,e.useState)("workflow"),[o,i]=(0,e.useState)(0),[s,l]=(0,e.useState)(2),[c,u]=(0,e.useState)(null),[d,p]=(0,e.useState)(!0),[f,h]=(0,e.useState)(!1),[m,g]=(0,e.useState)(!1),b=(0,e.useMemo)((()=>c?_a.filter((e=>e.assigned===c)):_a),[c]),v=null!=s&&null!==(t=_a.find((e=>e.id===s)))&&void 0!==t?t:null,{focusIdx:y,setFocusIdx:x,rowRefs:w,onKeyDown:k}=function(t){let r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;const[n,a]=(0,e.useState)(r),o=(0,e.useRef)([]);return(0,e.useEffect)((()=>{var e;o.current[n]&&(null===(e=o.current[n])||void 0===e||e.focus())}),[n,t]),{focusIdx:n,setFocusIdx:a,rowRefs:o,onKeyDown:function(e){"ArrowDown"===e.key&&(a((e=>(e+1)%t)),e.preventDefault()),"ArrowUp"===e.key&&(a((e=>(e-1+t)%t)),e.preventDefault()),"Home"===e.key&&(a(0),e.preventDefault()),"End"===e.key&&(a(t-1),e.preventDefault())}}}(b.length,Math.max(0,b.findIndex((e=>e.id===s)))),[S,j]=(0,e.useState)("");const[E,C]=(0,e.useState)(""),[_,O]=(0,e.useState)([{id:1,content:"Status update?",agent:"Man-Man",you:!0},{id:2,content:"Redesign step details panel in progress.\nDocs & JSON UI ready.",agent:"Josh",you:!1}]);const P=()=>(0,Xt.jsxs)(Zn,{role:"banner","aria-label":"Header",children:[(0,Xt.jsx)(ea,{}),"AI Agent Workflow Orchestrator v3.9.5","workflow"===r&&(0,Xt.jsxs)("button",{onClick:()=>n("promptLibrary"),style:{marginLeft:"auto",background:"var(--color-accent-josh)",color:"#fff",border:"none",borderRadius:"4px",padding:"8px 12px",fontWeight:600,cursor:"pointer",display:"flex",alignItems:"center",gap:"6px"},children:[(0,Xt.jsx)("span",{style:{fontSize:"18px"},children:"\ud83d\udcda"}),"Open Prompt Library"]})]});return(0,Xt.jsxs)("div",{style:{width:"100vw",height:"100vh",boxSizing:"border-box",overflow:"hidden"},children:[(0,Xt.jsx)(Jt,{}),"workflow"===r?(0,Xt.jsxs)(Xt.Fragment,{children:[(0,Xt.jsx)(P,{}),(0,Xt.jsxs)(Xn,{children:[(0,Xt.jsx)(ta,{role:"navigation","aria-label":"Agent Navigation Sidebar",tabIndex:0,children:Object.values(Ca).map((e=>(0,Xt.jsx)(ra,{selected:c===e.key,tabIndex:0,"aria-label":`Filter steps to only ${e.name}`,"aria-selected":c===e.key,title:e.role,onClick:()=>u(c===e.key?null:e.key),onKeyDown:t=>{"Enter"!==t.key&&" "!==t.key&&"Spacebar"!==t.key||u(c===e.key?null:e.key)},children:(0,Xt.jsx)(na,{color:e.color,children:(0,Xt.jsx)(aa,{children:e.short})})},e.key)))}),(0,Xt.jsxs)(oa,{role:"main","aria-label":"Main Workflow Panel",children:[(0,Xt.jsx)(ia,{children:["Standard Blog Generation","Customer Outreach Flow","Social Blast"].map(((e,t)=>(0,Xt.jsx)(sa,{selected:t===o,tabIndex:0,"aria-label":`Workflow: ${e}`,"aria-selected":t===o,onClick:()=>i(t),onKeyDown:e=>{"Enter"!==e.key&&" "!==e.key||i(t)},children:(0,Xt.jsx)(ha,{style:{fontSize:"var(--font-size-base)",color:t!==o?"var(--color-josh-primary)":"var(--color-text-dark)",fontWeight:t===o?"var(--font-weight-bold)":"var(--font-weight-medium)"},children:e})},e)))}),(0,Xt.jsx)(gi,{}),(0,Xt.jsx)("div",{style:{display:"flex",flexDirection:"row",gap:"25px",width:"100%",minHeight:"190px"},children:(0,Xt.jsxs)(ga,{tabIndex:0,"aria-label":"n8n Node JSON Viewer","aria-expanded":d,children:[(0,Xt.jsxs)(ba,{onClick:()=>p(!d),tabIndex:0,"aria-label":"Expand/collapse n8n Node JSON viewer",onKeyDown:e=>{"Enter"!==e.key&&" "!==e.key||p((e=>!e))},children:[(0,Xt.jsx)(va,{"aria-hidden":!0,children:d?(0,Xt.jsx)(tr,{}):(0,Xt.jsx)(rr,{})}),"n8n Node JSON"]}),d&&v&&(0,Xt.jsx)(ya,{"aria-label":"n8n Node JSON panel",tabIndex:-1,children:(0,Xt.jsx)(a(),{src:v.n8nJson,theme:"apathy:inverted",name:!1,collapsed:!1,enableClipboard:!1,displayDataTypes:!1,style:{background:"#fff",fontSize:"1rem"}})}),(0,Xt.jsxs)(xa,{children:[(0,Xt.jsxs)(wa,{type:"button",onClick:function(){v&&(navigator.clipboard.writeText(JSON.stringify(v.n8nJson,null,2)),g(!0),setTimeout((()=>g(!1)),1100),j("Copied step n8n node JSON."))},"aria-label":"Copy this step n8n JSON",children:[(0,Xt.jsx)(nr,{}),m?"Copied":"Copy"]}),(0,Xt.jsxs)(wa,{type:"button",onClick:()=>j("Edit step JSON coming soon."),"aria-label":"Edit (disabled)",style:{background:"var(--color-primary)",opacity:.68,cursor:"not-allowed"},disabled:!0,children:[(0,Xt.jsx)(ar,{})," Edit"]})]})]})}),(0,Xt.jsxs)(ua,{children:[(0,Xt.jsx)(da,{children:"Global Workflow JSON"}),(0,Xt.jsx)(pa,{"aria-label":"Workflow JSON Preview",children:JSON.stringify(_a.map((e=>({id:e.id,name:e.name}))),null,2)}),(0,Xt.jsxs)(fa,{children:[(0,Xt.jsxs)(wa,{onClick:()=>j("Edit global JSON coming soon."),style:{background:"var(--color-primary)",opacity:.68,cursor:"not-allowed"},"aria-label":"Edit (disabled)",disabled:!0,children:[(0,Xt.jsx)(ar,{}),"Edit"]}),(0,Xt.jsxs)(wa,{onClick:function(){navigator.clipboard.writeText(JSON.stringify(_a,null,2)),h(!0),setTimeout((()=>h(!1)),1100),j("Copied global workflow JSON.")},children:[(0,Xt.jsx)(nr,{}),f?"Copied":"Copy"]})]})]}),(0,Xt.jsx)("h3",{style:{color:"var(--color-accent-josh)",fontWeight:700,margin:"40px 0 13px 19px"},children:"Visual Builder"}),(0,Xt.jsx)(ka,{children:_a.map(((e,t)=>{return(0,Xt.jsxs)(Sa,{color:(r=e.assigned,Ca[r].color),selected:(null===v||void 0===v?void 0:v.id)===e.id,error:"error"===e.status,tabIndex:0,"aria-label":`Step: ${e.name}, assigned to ${Ca[e.assigned].name}`,children:[(0,Xt.jsx)(ja,{children:Ca[e.assigned].short}),(0,Xt.jsx)(Ea,{color:dr[e.status].color,children:dr[e.status].label})]},e.id);var r}))})]}),(0,Xt.jsx)(ma,{"aria-live":"polite",children:S})]})]}):(0,Xt.jsx)(Kn,{onBackToWorkflow:()=>n("workflow")})]})}const vi=document.getElementById("root");if(!vi)throw new Error("Failed to find the root element");t.render((0,Xt.jsx)(e.StrictMode,{children:(0,Xt.jsx)(bi,{})}),vi)})()})();