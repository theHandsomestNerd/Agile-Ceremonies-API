/*! For license information please see main.9e484fa3.js.LICENSE.txt */
(()=>{var e={49:(e,t)=>{"use strict";var n=Symbol.for("react.element"),r=Symbol.for("react.portal"),a=Symbol.for("react.fragment"),o=Symbol.for("react.strict_mode"),i=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),s=Symbol.for("react.context"),c=Symbol.for("react.forward_ref"),u=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),f=Symbol.for("react.lazy"),p=Symbol.iterator;var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},m=Object.assign,b={};function g(e,t,n){this.props=e,this.context=t,this.refs=b,this.updater=n||h}function v(){}function y(e,t,n){this.props=e,this.context=t,this.refs=b,this.updater=n||h}g.prototype.isReactComponent={},g.prototype.setState=function(e,t){if("object"!==typeof e&&"function"!==typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},g.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},v.prototype=g.prototype;var x=y.prototype=new v;x.constructor=y,m(x,g.prototype),x.isPureReactComponent=!0;var w=Array.isArray,k=Object.prototype.hasOwnProperty,S={current:null},E={key:!0,ref:!0,__self:!0,__source:!0};function j(e,t,r){var a,o={},i=null,l=null;if(null!=t)for(a in void 0!==t.ref&&(l=t.ref),void 0!==t.key&&(i=""+t.key),t)k.call(t,a)&&!E.hasOwnProperty(a)&&(o[a]=t[a]);var s=arguments.length-2;if(1===s)o.children=r;else if(1<s){for(var c=Array(s),u=0;u<s;u++)c[u]=arguments[u+2];o.children=c}if(e&&e.defaultProps)for(a in s=e.defaultProps)void 0===o[a]&&(o[a]=s[a]);return{$$typeof:n,type:e,key:i,ref:l,props:o,_owner:S.current}}function C(e){return"object"===typeof e&&null!==e&&e.$$typeof===n}var _=/\/+/g;function O(e,t){return"object"===typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function P(e,t,a,o,i){var l=typeof e;"undefined"!==l&&"boolean"!==l||(e=null);var s=!1;if(null===e)s=!0;else switch(l){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case n:case r:s=!0}}if(s)return i=i(s=e),e=""===o?"."+O(s,0):o,w(i)?(a="",null!=e&&(a=e.replace(_,"$&/")+"/"),P(i,t,a,"",(function(e){return e}))):null!=i&&(C(i)&&(i=function(e,t){return{$$typeof:n,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(i,a+(!i.key||s&&s.key===i.key?"":(""+i.key).replace(_,"$&/")+"/")+e)),t.push(i)),1;if(s=0,o=""===o?".":o+":",w(e))for(var c=0;c<e.length;c++){var u=o+O(l=e[c],c);s+=P(l,t,a,u,i)}else if(u=function(e){return null===e||"object"!==typeof e?null:"function"===typeof(e=p&&e[p]||e["@@iterator"])?e:null}(e),"function"===typeof u)for(e=u.call(e),c=0;!(l=e.next()).done;)s+=P(l=l.value,t,a,u=o+O(l,c++),i);else if("object"===l)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function A(e,t,n){if(null==e)return e;var r=[],a=0;return P(e,r,"","",(function(e){return t.call(n,e,a++)})),r}function z(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var T={current:null},N={transition:null},D={ReactCurrentDispatcher:T,ReactCurrentBatchConfig:N,ReactCurrentOwner:S};function F(){throw Error("act(...) is not supported in production builds of React.")}t.Children={map:A,forEach:function(e,t,n){A(e,(function(){t.apply(this,arguments)}),n)},count:function(e){var t=0;return A(e,(function(){t++})),t},toArray:function(e){return A(e,(function(e){return e}))||[]},only:function(e){if(!C(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},t.Component=g,t.Fragment=a,t.Profiler=i,t.PureComponent=y,t.StrictMode=o,t.Suspense=u,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=D,t.act=F,t.cloneElement=function(e,t,r){if(null===e||void 0===e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var a=m({},e.props),o=e.key,i=e.ref,l=e._owner;if(null!=t){if(void 0!==t.ref&&(i=t.ref,l=S.current),void 0!==t.key&&(o=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(c in t)k.call(t,c)&&!E.hasOwnProperty(c)&&(a[c]=void 0===t[c]&&void 0!==s?s[c]:t[c])}var c=arguments.length-2;if(1===c)a.children=r;else if(1<c){s=Array(c);for(var u=0;u<c;u++)s[u]=arguments[u+2];a.children=s}return{$$typeof:n,type:e.type,key:o,ref:i,props:a,_owner:l}},t.createContext=function(e){return(e={$$typeof:s,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:l,_context:e},e.Consumer=e},t.createElement=j,t.createFactory=function(e){var t=j.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:c,render:e}},t.isValidElement=C,t.lazy=function(e){return{$$typeof:f,_payload:{_status:-1,_result:e},_init:z}},t.memo=function(e,t){return{$$typeof:d,type:e,compare:void 0===t?null:t}},t.startTransition=function(e){var t=N.transition;N.transition={};try{e()}finally{N.transition=t}},t.unstable_act=F,t.useCallback=function(e,t){return T.current.useCallback(e,t)},t.useContext=function(e){return T.current.useContext(e)},t.useDebugValue=function(){},t.useDeferredValue=function(e){return T.current.useDeferredValue(e)},t.useEffect=function(e,t){return T.current.useEffect(e,t)},t.useId=function(){return T.current.useId()},t.useImperativeHandle=function(e,t,n){return T.current.useImperativeHandle(e,t,n)},t.useInsertionEffect=function(e,t){return T.current.useInsertionEffect(e,t)},t.useLayoutEffect=function(e,t){return T.current.useLayoutEffect(e,t)},t.useMemo=function(e,t){return T.current.useMemo(e,t)},t.useReducer=function(e,t,n){return T.current.useReducer(e,t,n)},t.useRef=function(e){return T.current.useRef(e)},t.useState=function(e){return T.current.useState(e)},t.useSyncExternalStore=function(e,t,n){return T.current.useSyncExternalStore(e,t,n)},t.useTransition=function(){return T.current.useTransition()},t.version="18.3.1"},119:(e,t,n)=>{"use strict";!function e(){if("undefined"!==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__&&"function"===typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE)try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(t){console.error(t)}}(),e.exports=n(345)},340:(e,t,n)=>{"use strict";e.exports=n(761)},345:(e,t,n)=>{"use strict";var r=n(950),a=n(340);function o(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var i=new Set,l={};function s(e,t){c(e,t),c(e+"Capture",t)}function c(e,t){for(l[e]=t,e=0;e<t.length;e++)i.add(t[e])}var u=!("undefined"===typeof window||"undefined"===typeof window.document||"undefined"===typeof window.document.createElement),d=Object.prototype.hasOwnProperty,f=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,p={},h={};function m(e,t,n,r,a,o,i){this.acceptsBooleans=2===t||3===t||4===t,this.attributeName=r,this.attributeNamespace=a,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=i}var b={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach((function(e){b[e]=new m(e,0,!1,e,null,!1,!1)})),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach((function(e){var t=e[0];b[t]=new m(t,1,!1,e[1],null,!1,!1)})),["contentEditable","draggable","spellCheck","value"].forEach((function(e){b[e]=new m(e,2,!1,e.toLowerCase(),null,!1,!1)})),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach((function(e){b[e]=new m(e,2,!1,e,null,!1,!1)})),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach((function(e){b[e]=new m(e,3,!1,e.toLowerCase(),null,!1,!1)})),["checked","multiple","muted","selected"].forEach((function(e){b[e]=new m(e,3,!0,e,null,!1,!1)})),["capture","download"].forEach((function(e){b[e]=new m(e,4,!1,e,null,!1,!1)})),["cols","rows","size","span"].forEach((function(e){b[e]=new m(e,6,!1,e,null,!1,!1)})),["rowSpan","start"].forEach((function(e){b[e]=new m(e,5,!1,e.toLowerCase(),null,!1,!1)}));var g=/[\-:]([a-z])/g;function v(e){return e[1].toUpperCase()}function y(e,t,n,r){var a=b.hasOwnProperty(t)?b[t]:null;(null!==a?0!==a.type:r||!(2<t.length)||"o"!==t[0]&&"O"!==t[0]||"n"!==t[1]&&"N"!==t[1])&&(function(e,t,n,r){if(null===t||"undefined"===typeof t||function(e,t,n,r){if(null!==n&&0===n.type)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return!r&&(null!==n?!n.acceptsBooleans:"data-"!==(e=e.toLowerCase().slice(0,5))&&"aria-"!==e);default:return!1}}(e,t,n,r))return!0;if(r)return!1;if(null!==n)switch(n.type){case 3:return!t;case 4:return!1===t;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}(t,n,a,r)&&(n=null),r||null===a?function(e){return!!d.call(h,e)||!d.call(p,e)&&(f.test(e)?h[e]=!0:(p[e]=!0,!1))}(t)&&(null===n?e.removeAttribute(t):e.setAttribute(t,""+n)):a.mustUseProperty?e[a.propertyName]=null===n?3!==a.type&&"":n:(t=a.attributeName,r=a.attributeNamespace,null===n?e.removeAttribute(t):(n=3===(a=a.type)||4===a&&!0===n?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach((function(e){var t=e.replace(g,v);b[t]=new m(t,1,!1,e,null,!1,!1)})),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach((function(e){var t=e.replace(g,v);b[t]=new m(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)})),["xml:base","xml:lang","xml:space"].forEach((function(e){var t=e.replace(g,v);b[t]=new m(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)})),["tabIndex","crossOrigin"].forEach((function(e){b[e]=new m(e,1,!1,e.toLowerCase(),null,!1,!1)})),b.xlinkHref=new m("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach((function(e){b[e]=new m(e,1,!1,e.toLowerCase(),null,!0,!0)}));var x=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,w=Symbol.for("react.element"),k=Symbol.for("react.portal"),S=Symbol.for("react.fragment"),E=Symbol.for("react.strict_mode"),j=Symbol.for("react.profiler"),C=Symbol.for("react.provider"),_=Symbol.for("react.context"),O=Symbol.for("react.forward_ref"),P=Symbol.for("react.suspense"),A=Symbol.for("react.suspense_list"),z=Symbol.for("react.memo"),T=Symbol.for("react.lazy");Symbol.for("react.scope"),Symbol.for("react.debug_trace_mode");var N=Symbol.for("react.offscreen");Symbol.for("react.legacy_hidden"),Symbol.for("react.cache"),Symbol.for("react.tracing_marker");var D=Symbol.iterator;function F(e){return null===e||"object"!==typeof e?null:"function"===typeof(e=D&&e[D]||e["@@iterator"])?e:null}var I,M=Object.assign;function R(e){if(void 0===I)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);I=t&&t[1]||""}return"\n"+I+e}var L=!1;function $(e,t){if(!e||L)return"";L=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),"object"===typeof Reflect&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var r=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){r=c}e.call(t.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&"string"===typeof c.stack){for(var a=c.stack.split("\n"),o=r.stack.split("\n"),i=a.length-1,l=o.length-1;1<=i&&0<=l&&a[i]!==o[l];)l--;for(;1<=i&&0<=l;i--,l--)if(a[i]!==o[l]){if(1!==i||1!==l)do{if(i--,0>--l||a[i]!==o[l]){var s="\n"+a[i].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}}while(1<=i&&0<=l);break}}}finally{L=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?R(e):""}function B(e){switch(e.tag){case 5:return R(e.type);case 16:return R("Lazy");case 13:return R("Suspense");case 19:return R("SuspenseList");case 0:case 2:case 15:return e=$(e.type,!1);case 11:return e=$(e.type.render,!1);case 1:return e=$(e.type,!0);default:return""}}function W(e){if(null==e)return null;if("function"===typeof e)return e.displayName||e.name||null;if("string"===typeof e)return e;switch(e){case S:return"Fragment";case k:return"Portal";case j:return"Profiler";case E:return"StrictMode";case P:return"Suspense";case A:return"SuspenseList"}if("object"===typeof e)switch(e.$$typeof){case _:return(e.displayName||"Context")+".Consumer";case C:return(e._context.displayName||"Context")+".Provider";case O:var t=e.render;return(e=e.displayName)||(e=""!==(e=t.displayName||t.name||"")?"ForwardRef("+e+")":"ForwardRef"),e;case z:return null!==(t=e.displayName||null)?t:W(e.type)||"Memo";case T:t=e._payload,e=e._init;try{return W(e(t))}catch(n){}}return null}function V(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=(e=t.render).displayName||e.name||"",t.displayName||(""!==e?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return W(t);case 8:return t===E?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if("function"===typeof t)return t.displayName||t.name||null;if("string"===typeof t)return t}return null}function q(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":case"object":return e;default:return""}}function U(e){var t=e.type;return(e=e.nodeName)&&"input"===e.toLowerCase()&&("checkbox"===t||"radio"===t)}function H(e){e._valueTracker||(e._valueTracker=function(e){var t=U(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&"undefined"!==typeof n&&"function"===typeof n.get&&"function"===typeof n.set){var a=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return a.call(this)},set:function(e){r=""+e,o.call(this,e)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(e){r=""+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}(e))}function K(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=U(e)?e.checked?"true":"false":e.value),(e=r)!==n&&(t.setValue(e),!0)}function G(e){if("undefined"===typeof(e=e||("undefined"!==typeof document?document:void 0)))return null;try{return e.activeElement||e.body}catch(t){return e.body}}function Q(e,t){var n=t.checked;return M({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:null!=n?n:e._wrapperState.initialChecked})}function Y(e,t){var n=null==t.defaultValue?"":t.defaultValue,r=null!=t.checked?t.checked:t.defaultChecked;n=q(null!=t.value?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:"checkbox"===t.type||"radio"===t.type?null!=t.checked:null!=t.value}}function J(e,t){null!=(t=t.checked)&&y(e,"checked",t,!1)}function X(e,t){J(e,t);var n=q(t.value),r=t.type;if(null!=n)"number"===r?(0===n&&""===e.value||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if("submit"===r||"reset"===r)return void e.removeAttribute("value");t.hasOwnProperty("value")?ee(e,t.type,n):t.hasOwnProperty("defaultValue")&&ee(e,t.type,q(t.defaultValue)),null==t.checked&&null!=t.defaultChecked&&(e.defaultChecked=!!t.defaultChecked)}function Z(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!("submit"!==r&&"reset"!==r||void 0!==t.value&&null!==t.value))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}""!==(n=e.name)&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,""!==n&&(e.name=n)}function ee(e,t,n){"number"===t&&G(e.ownerDocument)===e||(null==n?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var te=Array.isArray;function ne(e,t,n,r){if(e=e.options,t){t={};for(var a=0;a<n.length;a++)t["$"+n[a]]=!0;for(n=0;n<e.length;n++)a=t.hasOwnProperty("$"+e[n].value),e[n].selected!==a&&(e[n].selected=a),a&&r&&(e[n].defaultSelected=!0)}else{for(n=""+q(n),t=null,a=0;a<e.length;a++){if(e[a].value===n)return e[a].selected=!0,void(r&&(e[a].defaultSelected=!0));null!==t||e[a].disabled||(t=e[a])}null!==t&&(t.selected=!0)}}function re(e,t){if(null!=t.dangerouslySetInnerHTML)throw Error(o(91));return M({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function ae(e,t){var n=t.value;if(null==n){if(n=t.children,t=t.defaultValue,null!=n){if(null!=t)throw Error(o(92));if(te(n)){if(1<n.length)throw Error(o(93));n=n[0]}t=n}null==t&&(t=""),n=t}e._wrapperState={initialValue:q(n)}}function oe(e,t){var n=q(t.value),r=q(t.defaultValue);null!=n&&((n=""+n)!==e.value&&(e.value=n),null==t.defaultValue&&e.defaultValue!==n&&(e.defaultValue=n)),null!=r&&(e.defaultValue=""+r)}function ie(e){var t=e.textContent;t===e._wrapperState.initialValue&&""!==t&&null!==t&&(e.value=t)}function le(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function se(e,t){return null==e||"http://www.w3.org/1999/xhtml"===e?le(t):"http://www.w3.org/2000/svg"===e&&"foreignObject"===t?"http://www.w3.org/1999/xhtml":e}var ce,ue,de=(ue=function(e,t){if("http://www.w3.org/2000/svg"!==e.namespaceURI||"innerHTML"in e)e.innerHTML=t;else{for((ce=ce||document.createElement("div")).innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=ce.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}},"undefined"!==typeof MSApp&&MSApp.execUnsafeLocalFunction?function(e,t,n,r){MSApp.execUnsafeLocalFunction((function(){return ue(e,t)}))}:ue);function fe(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&3===n.nodeType)return void(n.nodeValue=t)}e.textContent=t}var pe={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},he=["Webkit","ms","Moz","O"];function me(e,t,n){return null==t||"boolean"===typeof t||""===t?"":n||"number"!==typeof t||0===t||pe.hasOwnProperty(e)&&pe[e]?(""+t).trim():t+"px"}function be(e,t){for(var n in e=e.style,t)if(t.hasOwnProperty(n)){var r=0===n.indexOf("--"),a=me(n,t[n],r);"float"===n&&(n="cssFloat"),r?e.setProperty(n,a):e[n]=a}}Object.keys(pe).forEach((function(e){he.forEach((function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),pe[t]=pe[e]}))}));var ge=M({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ve(e,t){if(t){if(ge[e]&&(null!=t.children||null!=t.dangerouslySetInnerHTML))throw Error(o(137,e));if(null!=t.dangerouslySetInnerHTML){if(null!=t.children)throw Error(o(60));if("object"!==typeof t.dangerouslySetInnerHTML||!("__html"in t.dangerouslySetInnerHTML))throw Error(o(61))}if(null!=t.style&&"object"!==typeof t.style)throw Error(o(62))}}function ye(e,t){if(-1===e.indexOf("-"))return"string"===typeof t.is;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var xe=null;function we(e){return(e=e.target||e.srcElement||window).correspondingUseElement&&(e=e.correspondingUseElement),3===e.nodeType?e.parentNode:e}var ke=null,Se=null,Ee=null;function je(e){if(e=ya(e)){if("function"!==typeof ke)throw Error(o(280));var t=e.stateNode;t&&(t=wa(t),ke(e.stateNode,e.type,t))}}function Ce(e){Se?Ee?Ee.push(e):Ee=[e]:Se=e}function _e(){if(Se){var e=Se,t=Ee;if(Ee=Se=null,je(e),t)for(e=0;e<t.length;e++)je(t[e])}}function Oe(e,t){return e(t)}function Pe(){}var Ae=!1;function ze(e,t,n){if(Ae)return e(t,n);Ae=!0;try{return Oe(e,t,n)}finally{Ae=!1,(null!==Se||null!==Ee)&&(Pe(),_e())}}function Te(e,t){var n=e.stateNode;if(null===n)return null;var r=wa(n);if(null===r)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(r=!("button"===(e=e.type)||"input"===e||"select"===e||"textarea"===e)),e=!r;break e;default:e=!1}if(e)return null;if(n&&"function"!==typeof n)throw Error(o(231,t,typeof n));return n}var Ne=!1;if(u)try{var De={};Object.defineProperty(De,"passive",{get:function(){Ne=!0}}),window.addEventListener("test",De,De),window.removeEventListener("test",De,De)}catch(ue){Ne=!1}function Fe(e,t,n,r,a,o,i,l,s){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(u){this.onError(u)}}var Ie=!1,Me=null,Re=!1,Le=null,$e={onError:function(e){Ie=!0,Me=e}};function Be(e,t,n,r,a,o,i,l,s){Ie=!1,Me=null,Fe.apply($e,arguments)}function We(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do{0!==(4098&(t=e).flags)&&(n=t.return),e=t.return}while(e)}return 3===t.tag?n:null}function Ve(e){if(13===e.tag){var t=e.memoizedState;if(null===t&&(null!==(e=e.alternate)&&(t=e.memoizedState)),null!==t)return t.dehydrated}return null}function qe(e){if(We(e)!==e)throw Error(o(188))}function Ue(e){return null!==(e=function(e){var t=e.alternate;if(!t){if(null===(t=We(e)))throw Error(o(188));return t!==e?null:e}for(var n=e,r=t;;){var a=n.return;if(null===a)break;var i=a.alternate;if(null===i){if(null!==(r=a.return)){n=r;continue}break}if(a.child===i.child){for(i=a.child;i;){if(i===n)return qe(a),e;if(i===r)return qe(a),t;i=i.sibling}throw Error(o(188))}if(n.return!==r.return)n=a,r=i;else{for(var l=!1,s=a.child;s;){if(s===n){l=!0,n=a,r=i;break}if(s===r){l=!0,r=a,n=i;break}s=s.sibling}if(!l){for(s=i.child;s;){if(s===n){l=!0,n=i,r=a;break}if(s===r){l=!0,r=i,n=a;break}s=s.sibling}if(!l)throw Error(o(189))}}if(n.alternate!==r)throw Error(o(190))}if(3!==n.tag)throw Error(o(188));return n.stateNode.current===n?e:t}(e))?He(e):null}function He(e){if(5===e.tag||6===e.tag)return e;for(e=e.child;null!==e;){var t=He(e);if(null!==t)return t;e=e.sibling}return null}var Ke=a.unstable_scheduleCallback,Ge=a.unstable_cancelCallback,Qe=a.unstable_shouldYield,Ye=a.unstable_requestPaint,Je=a.unstable_now,Xe=a.unstable_getCurrentPriorityLevel,Ze=a.unstable_ImmediatePriority,et=a.unstable_UserBlockingPriority,tt=a.unstable_NormalPriority,nt=a.unstable_LowPriority,rt=a.unstable_IdlePriority,at=null,ot=null;var it=Math.clz32?Math.clz32:function(e){return e>>>=0,0===e?32:31-(lt(e)/st|0)|0},lt=Math.log,st=Math.LN2;var ct=64,ut=4194304;function dt(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return 4194240&e;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return 130023424&e;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function ft(e,t){var n=e.pendingLanes;if(0===n)return 0;var r=0,a=e.suspendedLanes,o=e.pingedLanes,i=268435455&n;if(0!==i){var l=i&~a;0!==l?r=dt(l):0!==(o&=i)&&(r=dt(o))}else 0!==(i=n&~a)?r=dt(i):0!==o&&(r=dt(o));if(0===r)return 0;if(0!==t&&t!==r&&0===(t&a)&&((a=r&-r)>=(o=t&-t)||16===a&&0!==(4194240&o)))return t;if(0!==(4&r)&&(r|=16&n),0!==(t=e.entangledLanes))for(e=e.entanglements,t&=r;0<t;)a=1<<(n=31-it(t)),r|=e[n],t&=~a;return r}function pt(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;default:return-1}}function ht(e){return 0!==(e=-1073741825&e.pendingLanes)?e:1073741824&e?1073741824:0}function mt(){var e=ct;return 0===(4194240&(ct<<=1))&&(ct=64),e}function bt(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function gt(e,t,n){e.pendingLanes|=t,536870912!==t&&(e.suspendedLanes=0,e.pingedLanes=0),(e=e.eventTimes)[t=31-it(t)]=n}function vt(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-it(n),a=1<<r;a&t|e[r]&t&&(e[r]|=t),n&=~a}}var yt=0;function xt(e){return 1<(e&=-e)?4<e?0!==(268435455&e)?16:536870912:4:1}var wt,kt,St,Et,jt,Ct=!1,_t=[],Ot=null,Pt=null,At=null,zt=new Map,Tt=new Map,Nt=[],Dt="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ft(e,t){switch(e){case"focusin":case"focusout":Ot=null;break;case"dragenter":case"dragleave":Pt=null;break;case"mouseover":case"mouseout":At=null;break;case"pointerover":case"pointerout":zt.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Tt.delete(t.pointerId)}}function It(e,t,n,r,a,o){return null===e||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[a]},null!==t&&(null!==(t=ya(t))&&kt(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,null!==a&&-1===t.indexOf(a)&&t.push(a),e)}function Mt(e){var t=va(e.target);if(null!==t){var n=We(t);if(null!==n)if(13===(t=n.tag)){if(null!==(t=Ve(n)))return e.blockedOn=t,void jt(e.priority,(function(){St(n)}))}else if(3===t&&n.stateNode.current.memoizedState.isDehydrated)return void(e.blockedOn=3===n.tag?n.stateNode.containerInfo:null)}e.blockedOn=null}function Rt(e){if(null!==e.blockedOn)return!1;for(var t=e.targetContainers;0<t.length;){var n=Qt(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(null!==n)return null!==(t=ya(n))&&kt(t),e.blockedOn=n,!1;var r=new(n=e.nativeEvent).constructor(n.type,n);xe=r,n.target.dispatchEvent(r),xe=null,t.shift()}return!0}function Lt(e,t,n){Rt(e)&&n.delete(t)}function $t(){Ct=!1,null!==Ot&&Rt(Ot)&&(Ot=null),null!==Pt&&Rt(Pt)&&(Pt=null),null!==At&&Rt(At)&&(At=null),zt.forEach(Lt),Tt.forEach(Lt)}function Bt(e,t){e.blockedOn===t&&(e.blockedOn=null,Ct||(Ct=!0,a.unstable_scheduleCallback(a.unstable_NormalPriority,$t)))}function Wt(e){function t(t){return Bt(t,e)}if(0<_t.length){Bt(_t[0],e);for(var n=1;n<_t.length;n++){var r=_t[n];r.blockedOn===e&&(r.blockedOn=null)}}for(null!==Ot&&Bt(Ot,e),null!==Pt&&Bt(Pt,e),null!==At&&Bt(At,e),zt.forEach(t),Tt.forEach(t),n=0;n<Nt.length;n++)(r=Nt[n]).blockedOn===e&&(r.blockedOn=null);for(;0<Nt.length&&null===(n=Nt[0]).blockedOn;)Mt(n),null===n.blockedOn&&Nt.shift()}var Vt=x.ReactCurrentBatchConfig,qt=!0;function Ut(e,t,n,r){var a=yt,o=Vt.transition;Vt.transition=null;try{yt=1,Kt(e,t,n,r)}finally{yt=a,Vt.transition=o}}function Ht(e,t,n,r){var a=yt,o=Vt.transition;Vt.transition=null;try{yt=4,Kt(e,t,n,r)}finally{yt=a,Vt.transition=o}}function Kt(e,t,n,r){if(qt){var a=Qt(e,t,n,r);if(null===a)qr(e,t,r,Gt,n),Ft(e,r);else if(function(e,t,n,r,a){switch(t){case"focusin":return Ot=It(Ot,e,t,n,r,a),!0;case"dragenter":return Pt=It(Pt,e,t,n,r,a),!0;case"mouseover":return At=It(At,e,t,n,r,a),!0;case"pointerover":var o=a.pointerId;return zt.set(o,It(zt.get(o)||null,e,t,n,r,a)),!0;case"gotpointercapture":return o=a.pointerId,Tt.set(o,It(Tt.get(o)||null,e,t,n,r,a)),!0}return!1}(a,e,t,n,r))r.stopPropagation();else if(Ft(e,r),4&t&&-1<Dt.indexOf(e)){for(;null!==a;){var o=ya(a);if(null!==o&&wt(o),null===(o=Qt(e,t,n,r))&&qr(e,t,r,Gt,n),o===a)break;a=o}null!==a&&r.stopPropagation()}else qr(e,t,r,null,n)}}var Gt=null;function Qt(e,t,n,r){if(Gt=null,null!==(e=va(e=we(r))))if(null===(t=We(e)))e=null;else if(13===(n=t.tag)){if(null!==(e=Ve(t)))return e;e=null}else if(3===n){if(t.stateNode.current.memoizedState.isDehydrated)return 3===t.tag?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Gt=e,null}function Yt(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Xe()){case Ze:return 1;case et:return 4;case tt:case nt:return 16;case rt:return 536870912;default:return 16}default:return 16}}var Jt=null,Xt=null,Zt=null;function en(){if(Zt)return Zt;var e,t,n=Xt,r=n.length,a="value"in Jt?Jt.value:Jt.textContent,o=a.length;for(e=0;e<r&&n[e]===a[e];e++);var i=r-e;for(t=1;t<=i&&n[r-t]===a[o-t];t++);return Zt=a.slice(e,1<t?1-t:void 0)}function tn(e){var t=e.keyCode;return"charCode"in e?0===(e=e.charCode)&&13===t&&(e=13):e=t,10===e&&(e=13),32<=e||13===e?e:0}function nn(){return!0}function rn(){return!1}function an(e){function t(t,n,r,a,o){for(var i in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=a,this.target=o,this.currentTarget=null,e)e.hasOwnProperty(i)&&(t=e[i],this[i]=t?t(a):a[i]);return this.isDefaultPrevented=(null!=a.defaultPrevented?a.defaultPrevented:!1===a.returnValue)?nn:rn,this.isPropagationStopped=rn,this}return M(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():"unknown"!==typeof e.returnValue&&(e.returnValue=!1),this.isDefaultPrevented=nn)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():"unknown"!==typeof e.cancelBubble&&(e.cancelBubble=!0),this.isPropagationStopped=nn)},persist:function(){},isPersistent:nn}),t}var on,ln,sn,cn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},un=an(cn),dn=M({},cn,{view:0,detail:0}),fn=an(dn),pn=M({},dn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:jn,button:0,buttons:0,relatedTarget:function(e){return void 0===e.relatedTarget?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==sn&&(sn&&"mousemove"===e.type?(on=e.screenX-sn.screenX,ln=e.screenY-sn.screenY):ln=on=0,sn=e),on)},movementY:function(e){return"movementY"in e?e.movementY:ln}}),hn=an(pn),mn=an(M({},pn,{dataTransfer:0})),bn=an(M({},dn,{relatedTarget:0})),gn=an(M({},cn,{animationName:0,elapsedTime:0,pseudoElement:0})),vn=M({},cn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),yn=an(vn),xn=an(M({},cn,{data:0})),wn={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},kn={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Sn={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function En(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):!!(e=Sn[e])&&!!t[e]}function jn(){return En}var Cn=M({},dn,{key:function(e){if(e.key){var t=wn[e.key]||e.key;if("Unidentified"!==t)return t}return"keypress"===e.type?13===(e=tn(e))?"Enter":String.fromCharCode(e):"keydown"===e.type||"keyup"===e.type?kn[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:jn,charCode:function(e){return"keypress"===e.type?tn(e):0},keyCode:function(e){return"keydown"===e.type||"keyup"===e.type?e.keyCode:0},which:function(e){return"keypress"===e.type?tn(e):"keydown"===e.type||"keyup"===e.type?e.keyCode:0}}),_n=an(Cn),On=an(M({},pn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),Pn=an(M({},dn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:jn})),An=an(M({},cn,{propertyName:0,elapsedTime:0,pseudoElement:0})),zn=M({},pn,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Tn=an(zn),Nn=[9,13,27,32],Dn=u&&"CompositionEvent"in window,Fn=null;u&&"documentMode"in document&&(Fn=document.documentMode);var In=u&&"TextEvent"in window&&!Fn,Mn=u&&(!Dn||Fn&&8<Fn&&11>=Fn),Rn=String.fromCharCode(32),Ln=!1;function $n(e,t){switch(e){case"keyup":return-1!==Nn.indexOf(t.keyCode);case"keydown":return 229!==t.keyCode;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Bn(e){return"object"===typeof(e=e.detail)&&"data"in e?e.data:null}var Wn=!1;var Vn={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function qn(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return"input"===t?!!Vn[e.type]:"textarea"===t}function Un(e,t,n,r){Ce(r),0<(t=Hr(t,"onChange")).length&&(n=new un("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Hn=null,Kn=null;function Gn(e){Rr(e,0)}function Qn(e){if(K(xa(e)))return e}function Yn(e,t){if("change"===e)return t}var Jn=!1;if(u){var Xn;if(u){var Zn="oninput"in document;if(!Zn){var er=document.createElement("div");er.setAttribute("oninput","return;"),Zn="function"===typeof er.oninput}Xn=Zn}else Xn=!1;Jn=Xn&&(!document.documentMode||9<document.documentMode)}function tr(){Hn&&(Hn.detachEvent("onpropertychange",nr),Kn=Hn=null)}function nr(e){if("value"===e.propertyName&&Qn(Kn)){var t=[];Un(t,Kn,e,we(e)),ze(Gn,t)}}function rr(e,t,n){"focusin"===e?(tr(),Kn=n,(Hn=t).attachEvent("onpropertychange",nr)):"focusout"===e&&tr()}function ar(e){if("selectionchange"===e||"keyup"===e||"keydown"===e)return Qn(Kn)}function or(e,t){if("click"===e)return Qn(t)}function ir(e,t){if("input"===e||"change"===e)return Qn(t)}var lr="function"===typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e===1/t)||e!==e&&t!==t};function sr(e,t){if(lr(e,t))return!0;if("object"!==typeof e||null===e||"object"!==typeof t||null===t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var a=n[r];if(!d.call(t,a)||!lr(e[a],t[a]))return!1}return!0}function cr(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function ur(e,t){var n,r=cr(e);for(e=0;r;){if(3===r.nodeType){if(n=e+r.textContent.length,e<=t&&n>=t)return{node:r,offset:t-e};e=n}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=cr(r)}}function dr(e,t){return!(!e||!t)&&(e===t||(!e||3!==e.nodeType)&&(t&&3===t.nodeType?dr(e,t.parentNode):"contains"in e?e.contains(t):!!e.compareDocumentPosition&&!!(16&e.compareDocumentPosition(t))))}function fr(){for(var e=window,t=G();t instanceof e.HTMLIFrameElement;){try{var n="string"===typeof t.contentWindow.location.href}catch(r){n=!1}if(!n)break;t=G((e=t.contentWindow).document)}return t}function pr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&("input"===t&&("text"===e.type||"search"===e.type||"tel"===e.type||"url"===e.type||"password"===e.type)||"textarea"===t||"true"===e.contentEditable)}function hr(e){var t=fr(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&dr(n.ownerDocument.documentElement,n)){if(null!==r&&pr(n))if(t=r.start,void 0===(e=r.end)&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if((e=(t=n.ownerDocument||document)&&t.defaultView||window).getSelection){e=e.getSelection();var a=n.textContent.length,o=Math.min(r.start,a);r=void 0===r.end?o:Math.min(r.end,a),!e.extend&&o>r&&(a=r,r=o,o=a),a=ur(n,o);var i=ur(n,r);a&&i&&(1!==e.rangeCount||e.anchorNode!==a.node||e.anchorOffset!==a.offset||e.focusNode!==i.node||e.focusOffset!==i.offset)&&((t=t.createRange()).setStart(a.node,a.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(i.node,i.offset)):(t.setEnd(i.node,i.offset),e.addRange(t)))}for(t=[],e=n;e=e.parentNode;)1===e.nodeType&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for("function"===typeof n.focus&&n.focus(),n=0;n<t.length;n++)(e=t[n]).element.scrollLeft=e.left,e.element.scrollTop=e.top}}var mr=u&&"documentMode"in document&&11>=document.documentMode,br=null,gr=null,vr=null,yr=!1;function xr(e,t,n){var r=n.window===n?n.document:9===n.nodeType?n:n.ownerDocument;yr||null==br||br!==G(r)||("selectionStart"in(r=br)&&pr(r)?r={start:r.selectionStart,end:r.selectionEnd}:r={anchorNode:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection()).anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset},vr&&sr(vr,r)||(vr=r,0<(r=Hr(gr,"onSelect")).length&&(t=new un("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=br)))}function wr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var kr={animationend:wr("Animation","AnimationEnd"),animationiteration:wr("Animation","AnimationIteration"),animationstart:wr("Animation","AnimationStart"),transitionend:wr("Transition","TransitionEnd")},Sr={},Er={};function jr(e){if(Sr[e])return Sr[e];if(!kr[e])return e;var t,n=kr[e];for(t in n)if(n.hasOwnProperty(t)&&t in Er)return Sr[e]=n[t];return e}u&&(Er=document.createElement("div").style,"AnimationEvent"in window||(delete kr.animationend.animation,delete kr.animationiteration.animation,delete kr.animationstart.animation),"TransitionEvent"in window||delete kr.transitionend.transition);var Cr=jr("animationend"),_r=jr("animationiteration"),Or=jr("animationstart"),Pr=jr("transitionend"),Ar=new Map,zr="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Tr(e,t){Ar.set(e,t),s(t,[e])}for(var Nr=0;Nr<zr.length;Nr++){var Dr=zr[Nr];Tr(Dr.toLowerCase(),"on"+(Dr[0].toUpperCase()+Dr.slice(1)))}Tr(Cr,"onAnimationEnd"),Tr(_r,"onAnimationIteration"),Tr(Or,"onAnimationStart"),Tr("dblclick","onDoubleClick"),Tr("focusin","onFocus"),Tr("focusout","onBlur"),Tr(Pr,"onTransitionEnd"),c("onMouseEnter",["mouseout","mouseover"]),c("onMouseLeave",["mouseout","mouseover"]),c("onPointerEnter",["pointerout","pointerover"]),c("onPointerLeave",["pointerout","pointerover"]),s("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),s("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),s("onBeforeInput",["compositionend","keypress","textInput","paste"]),s("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),s("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),s("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Fr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Ir=new Set("cancel close invalid load scroll toggle".split(" ").concat(Fr));function Mr(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,function(e,t,n,r,a,i,l,s,c){if(Be.apply(this,arguments),Ie){if(!Ie)throw Error(o(198));var u=Me;Ie=!1,Me=null,Re||(Re=!0,Le=u)}}(r,t,void 0,e),e.currentTarget=null}function Rr(e,t){t=0!==(4&t);for(var n=0;n<e.length;n++){var r=e[n],a=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var i=r.length-1;0<=i;i--){var l=r[i],s=l.instance,c=l.currentTarget;if(l=l.listener,s!==o&&a.isPropagationStopped())break e;Mr(a,l,c),o=s}else for(i=0;i<r.length;i++){if(s=(l=r[i]).instance,c=l.currentTarget,l=l.listener,s!==o&&a.isPropagationStopped())break e;Mr(a,l,c),o=s}}}if(Re)throw e=Le,Re=!1,Le=null,e}function Lr(e,t){var n=t[ma];void 0===n&&(n=t[ma]=new Set);var r=e+"__bubble";n.has(r)||(Vr(t,e,2,!1),n.add(r))}function $r(e,t,n){var r=0;t&&(r|=4),Vr(n,e,r,t)}var Br="_reactListening"+Math.random().toString(36).slice(2);function Wr(e){if(!e[Br]){e[Br]=!0,i.forEach((function(t){"selectionchange"!==t&&(Ir.has(t)||$r(t,!1,e),$r(t,!0,e))}));var t=9===e.nodeType?e:e.ownerDocument;null===t||t[Br]||(t[Br]=!0,$r("selectionchange",!1,t))}}function Vr(e,t,n,r){switch(Yt(t)){case 1:var a=Ut;break;case 4:a=Ht;break;default:a=Kt}n=a.bind(null,t,n,e),a=void 0,!Ne||"touchstart"!==t&&"touchmove"!==t&&"wheel"!==t||(a=!0),r?void 0!==a?e.addEventListener(t,n,{capture:!0,passive:a}):e.addEventListener(t,n,!0):void 0!==a?e.addEventListener(t,n,{passive:a}):e.addEventListener(t,n,!1)}function qr(e,t,n,r,a){var o=r;if(0===(1&t)&&0===(2&t)&&null!==r)e:for(;;){if(null===r)return;var i=r.tag;if(3===i||4===i){var l=r.stateNode.containerInfo;if(l===a||8===l.nodeType&&l.parentNode===a)break;if(4===i)for(i=r.return;null!==i;){var s=i.tag;if((3===s||4===s)&&((s=i.stateNode.containerInfo)===a||8===s.nodeType&&s.parentNode===a))return;i=i.return}for(;null!==l;){if(null===(i=va(l)))return;if(5===(s=i.tag)||6===s){r=o=i;continue e}l=l.parentNode}}r=r.return}ze((function(){var r=o,a=we(n),i=[];e:{var l=Ar.get(e);if(void 0!==l){var s=un,c=e;switch(e){case"keypress":if(0===tn(n))break e;case"keydown":case"keyup":s=_n;break;case"focusin":c="focus",s=bn;break;case"focusout":c="blur",s=bn;break;case"beforeblur":case"afterblur":s=bn;break;case"click":if(2===n.button)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":s=hn;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":s=mn;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":s=Pn;break;case Cr:case _r:case Or:s=gn;break;case Pr:s=An;break;case"scroll":s=fn;break;case"wheel":s=Tn;break;case"copy":case"cut":case"paste":s=yn;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":s=On}var u=0!==(4&t),d=!u&&"scroll"===e,f=u?null!==l?l+"Capture":null:l;u=[];for(var p,h=r;null!==h;){var m=(p=h).stateNode;if(5===p.tag&&null!==m&&(p=m,null!==f&&(null!=(m=Te(h,f))&&u.push(Ur(h,m,p)))),d)break;h=h.return}0<u.length&&(l=new s(l,c,null,n,a),i.push({event:l,listeners:u}))}}if(0===(7&t)){if(s="mouseout"===e||"pointerout"===e,(!(l="mouseover"===e||"pointerover"===e)||n===xe||!(c=n.relatedTarget||n.fromElement)||!va(c)&&!c[ha])&&(s||l)&&(l=a.window===a?a:(l=a.ownerDocument)?l.defaultView||l.parentWindow:window,s?(s=r,null!==(c=(c=n.relatedTarget||n.toElement)?va(c):null)&&(c!==(d=We(c))||5!==c.tag&&6!==c.tag)&&(c=null)):(s=null,c=r),s!==c)){if(u=hn,m="onMouseLeave",f="onMouseEnter",h="mouse","pointerout"!==e&&"pointerover"!==e||(u=On,m="onPointerLeave",f="onPointerEnter",h="pointer"),d=null==s?l:xa(s),p=null==c?l:xa(c),(l=new u(m,h+"leave",s,n,a)).target=d,l.relatedTarget=p,m=null,va(a)===r&&((u=new u(f,h+"enter",c,n,a)).target=p,u.relatedTarget=d,m=u),d=m,s&&c)e:{for(f=c,h=0,p=u=s;p;p=Kr(p))h++;for(p=0,m=f;m;m=Kr(m))p++;for(;0<h-p;)u=Kr(u),h--;for(;0<p-h;)f=Kr(f),p--;for(;h--;){if(u===f||null!==f&&u===f.alternate)break e;u=Kr(u),f=Kr(f)}u=null}else u=null;null!==s&&Gr(i,l,s,u,!1),null!==c&&null!==d&&Gr(i,d,c,u,!0)}if("select"===(s=(l=r?xa(r):window).nodeName&&l.nodeName.toLowerCase())||"input"===s&&"file"===l.type)var b=Yn;else if(qn(l))if(Jn)b=ir;else{b=ar;var g=rr}else(s=l.nodeName)&&"input"===s.toLowerCase()&&("checkbox"===l.type||"radio"===l.type)&&(b=or);switch(b&&(b=b(e,r))?Un(i,b,n,a):(g&&g(e,l,r),"focusout"===e&&(g=l._wrapperState)&&g.controlled&&"number"===l.type&&ee(l,"number",l.value)),g=r?xa(r):window,e){case"focusin":(qn(g)||"true"===g.contentEditable)&&(br=g,gr=r,vr=null);break;case"focusout":vr=gr=br=null;break;case"mousedown":yr=!0;break;case"contextmenu":case"mouseup":case"dragend":yr=!1,xr(i,n,a);break;case"selectionchange":if(mr)break;case"keydown":case"keyup":xr(i,n,a)}var v;if(Dn)e:{switch(e){case"compositionstart":var y="onCompositionStart";break e;case"compositionend":y="onCompositionEnd";break e;case"compositionupdate":y="onCompositionUpdate";break e}y=void 0}else Wn?$n(e,n)&&(y="onCompositionEnd"):"keydown"===e&&229===n.keyCode&&(y="onCompositionStart");y&&(Mn&&"ko"!==n.locale&&(Wn||"onCompositionStart"!==y?"onCompositionEnd"===y&&Wn&&(v=en()):(Xt="value"in(Jt=a)?Jt.value:Jt.textContent,Wn=!0)),0<(g=Hr(r,y)).length&&(y=new xn(y,e,null,n,a),i.push({event:y,listeners:g}),v?y.data=v:null!==(v=Bn(n))&&(y.data=v))),(v=In?function(e,t){switch(e){case"compositionend":return Bn(t);case"keypress":return 32!==t.which?null:(Ln=!0,Rn);case"textInput":return(e=t.data)===Rn&&Ln?null:e;default:return null}}(e,n):function(e,t){if(Wn)return"compositionend"===e||!Dn&&$n(e,t)?(e=en(),Zt=Xt=Jt=null,Wn=!1,e):null;switch(e){case"paste":default:return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Mn&&"ko"!==t.locale?null:t.data}}(e,n))&&(0<(r=Hr(r,"onBeforeInput")).length&&(a=new xn("onBeforeInput","beforeinput",null,n,a),i.push({event:a,listeners:r}),a.data=v))}Rr(i,t)}))}function Ur(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Hr(e,t){for(var n=t+"Capture",r=[];null!==e;){var a=e,o=a.stateNode;5===a.tag&&null!==o&&(a=o,null!=(o=Te(e,n))&&r.unshift(Ur(e,o,a)),null!=(o=Te(e,t))&&r.push(Ur(e,o,a))),e=e.return}return r}function Kr(e){if(null===e)return null;do{e=e.return}while(e&&5!==e.tag);return e||null}function Gr(e,t,n,r,a){for(var o=t._reactName,i=[];null!==n&&n!==r;){var l=n,s=l.alternate,c=l.stateNode;if(null!==s&&s===r)break;5===l.tag&&null!==c&&(l=c,a?null!=(s=Te(n,o))&&i.unshift(Ur(n,s,l)):a||null!=(s=Te(n,o))&&i.push(Ur(n,s,l))),n=n.return}0!==i.length&&e.push({event:t,listeners:i})}var Qr=/\r\n?/g,Yr=/\u0000|\uFFFD/g;function Jr(e){return("string"===typeof e?e:""+e).replace(Qr,"\n").replace(Yr,"")}function Xr(e,t,n){if(t=Jr(t),Jr(e)!==t&&n)throw Error(o(425))}function Zr(){}var ea=null,ta=null;function na(e,t){return"textarea"===e||"noscript"===e||"string"===typeof t.children||"number"===typeof t.children||"object"===typeof t.dangerouslySetInnerHTML&&null!==t.dangerouslySetInnerHTML&&null!=t.dangerouslySetInnerHTML.__html}var ra="function"===typeof setTimeout?setTimeout:void 0,aa="function"===typeof clearTimeout?clearTimeout:void 0,oa="function"===typeof Promise?Promise:void 0,ia="function"===typeof queueMicrotask?queueMicrotask:"undefined"!==typeof oa?function(e){return oa.resolve(null).then(e).catch(la)}:ra;function la(e){setTimeout((function(){throw e}))}function sa(e,t){var n=t,r=0;do{var a=n.nextSibling;if(e.removeChild(n),a&&8===a.nodeType)if("/$"===(n=a.data)){if(0===r)return e.removeChild(a),void Wt(t);r--}else"$"!==n&&"$?"!==n&&"$!"!==n||r++;n=a}while(n);Wt(t)}function ca(e){for(;null!=e;e=e.nextSibling){var t=e.nodeType;if(1===t||3===t)break;if(8===t){if("$"===(t=e.data)||"$!"===t||"$?"===t)break;if("/$"===t)return null}}return e}function ua(e){e=e.previousSibling;for(var t=0;e;){if(8===e.nodeType){var n=e.data;if("$"===n||"$!"===n||"$?"===n){if(0===t)return e;t--}else"/$"===n&&t++}e=e.previousSibling}return null}var da=Math.random().toString(36).slice(2),fa="__reactFiber$"+da,pa="__reactProps$"+da,ha="__reactContainer$"+da,ma="__reactEvents$"+da,ba="__reactListeners$"+da,ga="__reactHandles$"+da;function va(e){var t=e[fa];if(t)return t;for(var n=e.parentNode;n;){if(t=n[ha]||n[fa]){if(n=t.alternate,null!==t.child||null!==n&&null!==n.child)for(e=ua(e);null!==e;){if(n=e[fa])return n;e=ua(e)}return t}n=(e=n).parentNode}return null}function ya(e){return!(e=e[fa]||e[ha])||5!==e.tag&&6!==e.tag&&13!==e.tag&&3!==e.tag?null:e}function xa(e){if(5===e.tag||6===e.tag)return e.stateNode;throw Error(o(33))}function wa(e){return e[pa]||null}var ka=[],Sa=-1;function Ea(e){return{current:e}}function ja(e){0>Sa||(e.current=ka[Sa],ka[Sa]=null,Sa--)}function Ca(e,t){Sa++,ka[Sa]=e.current,e.current=t}var _a={},Oa=Ea(_a),Pa=Ea(!1),Aa=_a;function za(e,t){var n=e.type.contextTypes;if(!n)return _a;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var a,o={};for(a in n)o[a]=t[a];return r&&((e=e.stateNode).__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function Ta(e){return null!==(e=e.childContextTypes)&&void 0!==e}function Na(){ja(Pa),ja(Oa)}function Da(e,t,n){if(Oa.current!==_a)throw Error(o(168));Ca(Oa,t),Ca(Pa,n)}function Fa(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,"function"!==typeof r.getChildContext)return n;for(var a in r=r.getChildContext())if(!(a in t))throw Error(o(108,V(e)||"Unknown",a));return M({},n,r)}function Ia(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||_a,Aa=Oa.current,Ca(Oa,e),Ca(Pa,Pa.current),!0}function Ma(e,t,n){var r=e.stateNode;if(!r)throw Error(o(169));n?(e=Fa(e,t,Aa),r.__reactInternalMemoizedMergedChildContext=e,ja(Pa),ja(Oa),Ca(Oa,e)):ja(Pa),Ca(Pa,n)}var Ra=null,La=!1,$a=!1;function Ba(e){null===Ra?Ra=[e]:Ra.push(e)}function Wa(){if(!$a&&null!==Ra){$a=!0;var e=0,t=yt;try{var n=Ra;for(yt=1;e<n.length;e++){var r=n[e];do{r=r(!0)}while(null!==r)}Ra=null,La=!1}catch(a){throw null!==Ra&&(Ra=Ra.slice(e+1)),Ke(Ze,Wa),a}finally{yt=t,$a=!1}}return null}var Va=[],qa=0,Ua=null,Ha=0,Ka=[],Ga=0,Qa=null,Ya=1,Ja="";function Xa(e,t){Va[qa++]=Ha,Va[qa++]=Ua,Ua=e,Ha=t}function Za(e,t,n){Ka[Ga++]=Ya,Ka[Ga++]=Ja,Ka[Ga++]=Qa,Qa=e;var r=Ya;e=Ja;var a=32-it(r)-1;r&=~(1<<a),n+=1;var o=32-it(t)+a;if(30<o){var i=a-a%5;o=(r&(1<<i)-1).toString(32),r>>=i,a-=i,Ya=1<<32-it(t)+a|n<<a|r,Ja=o+e}else Ya=1<<o|n<<a|r,Ja=e}function eo(e){null!==e.return&&(Xa(e,1),Za(e,1,0))}function to(e){for(;e===Ua;)Ua=Va[--qa],Va[qa]=null,Ha=Va[--qa],Va[qa]=null;for(;e===Qa;)Qa=Ka[--Ga],Ka[Ga]=null,Ja=Ka[--Ga],Ka[Ga]=null,Ya=Ka[--Ga],Ka[Ga]=null}var no=null,ro=null,ao=!1,oo=null;function io(e,t){var n=zc(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,null===(t=e.deletions)?(e.deletions=[n],e.flags|=16):t.push(n)}function lo(e,t){switch(e.tag){case 5:var n=e.type;return null!==(t=1!==t.nodeType||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t)&&(e.stateNode=t,no=e,ro=ca(t.firstChild),!0);case 6:return null!==(t=""===e.pendingProps||3!==t.nodeType?null:t)&&(e.stateNode=t,no=e,ro=null,!0);case 13:return null!==(t=8!==t.nodeType?null:t)&&(n=null!==Qa?{id:Ya,overflow:Ja}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},(n=zc(18,null,null,0)).stateNode=t,n.return=e,e.child=n,no=e,ro=null,!0);default:return!1}}function so(e){return 0!==(1&e.mode)&&0===(128&e.flags)}function co(e){if(ao){var t=ro;if(t){var n=t;if(!lo(e,t)){if(so(e))throw Error(o(418));t=ca(n.nextSibling);var r=no;t&&lo(e,t)?io(r,n):(e.flags=-4097&e.flags|2,ao=!1,no=e)}}else{if(so(e))throw Error(o(418));e.flags=-4097&e.flags|2,ao=!1,no=e}}}function uo(e){for(e=e.return;null!==e&&5!==e.tag&&3!==e.tag&&13!==e.tag;)e=e.return;no=e}function fo(e){if(e!==no)return!1;if(!ao)return uo(e),ao=!0,!1;var t;if((t=3!==e.tag)&&!(t=5!==e.tag)&&(t="head"!==(t=e.type)&&"body"!==t&&!na(e.type,e.memoizedProps)),t&&(t=ro)){if(so(e))throw po(),Error(o(418));for(;t;)io(e,t),t=ca(t.nextSibling)}if(uo(e),13===e.tag){if(!(e=null!==(e=e.memoizedState)?e.dehydrated:null))throw Error(o(317));e:{for(e=e.nextSibling,t=0;e;){if(8===e.nodeType){var n=e.data;if("/$"===n){if(0===t){ro=ca(e.nextSibling);break e}t--}else"$"!==n&&"$!"!==n&&"$?"!==n||t++}e=e.nextSibling}ro=null}}else ro=no?ca(e.stateNode.nextSibling):null;return!0}function po(){for(var e=ro;e;)e=ca(e.nextSibling)}function ho(){ro=no=null,ao=!1}function mo(e){null===oo?oo=[e]:oo.push(e)}var bo=x.ReactCurrentBatchConfig;function go(e,t,n){if(null!==(e=n.ref)&&"function"!==typeof e&&"object"!==typeof e){if(n._owner){if(n=n._owner){if(1!==n.tag)throw Error(o(309));var r=n.stateNode}if(!r)throw Error(o(147,e));var a=r,i=""+e;return null!==t&&null!==t.ref&&"function"===typeof t.ref&&t.ref._stringRef===i?t.ref:(t=function(e){var t=a.refs;null===e?delete t[i]:t[i]=e},t._stringRef=i,t)}if("string"!==typeof e)throw Error(o(284));if(!n._owner)throw Error(o(290,e))}return e}function vo(e,t){throw e=Object.prototype.toString.call(t),Error(o(31,"[object Object]"===e?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function yo(e){return(0,e._init)(e._payload)}function xo(e){function t(t,n){if(e){var r=t.deletions;null===r?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null;for(;null!==r;)t(n,r),r=r.sibling;return null}function r(e,t){for(e=new Map;null!==t;)null!==t.key?e.set(t.key,t):e.set(t.index,t),t=t.sibling;return e}function a(e,t){return(e=Nc(e,t)).index=0,e.sibling=null,e}function i(t,n,r){return t.index=r,e?null!==(r=t.alternate)?(r=r.index)<n?(t.flags|=2,n):r:(t.flags|=2,n):(t.flags|=1048576,n)}function l(t){return e&&null===t.alternate&&(t.flags|=2),t}function s(e,t,n,r){return null===t||6!==t.tag?((t=Mc(n,e.mode,r)).return=e,t):((t=a(t,n)).return=e,t)}function c(e,t,n,r){var o=n.type;return o===S?d(e,t,n.props.children,r,n.key):null!==t&&(t.elementType===o||"object"===typeof o&&null!==o&&o.$$typeof===T&&yo(o)===t.type)?((r=a(t,n.props)).ref=go(e,t,n),r.return=e,r):((r=Dc(n.type,n.key,n.props,null,e.mode,r)).ref=go(e,t,n),r.return=e,r)}function u(e,t,n,r){return null===t||4!==t.tag||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?((t=Rc(n,e.mode,r)).return=e,t):((t=a(t,n.children||[])).return=e,t)}function d(e,t,n,r,o){return null===t||7!==t.tag?((t=Fc(n,e.mode,r,o)).return=e,t):((t=a(t,n)).return=e,t)}function f(e,t,n){if("string"===typeof t&&""!==t||"number"===typeof t)return(t=Mc(""+t,e.mode,n)).return=e,t;if("object"===typeof t&&null!==t){switch(t.$$typeof){case w:return(n=Dc(t.type,t.key,t.props,null,e.mode,n)).ref=go(e,null,t),n.return=e,n;case k:return(t=Rc(t,e.mode,n)).return=e,t;case T:return f(e,(0,t._init)(t._payload),n)}if(te(t)||F(t))return(t=Fc(t,e.mode,n,null)).return=e,t;vo(e,t)}return null}function p(e,t,n,r){var a=null!==t?t.key:null;if("string"===typeof n&&""!==n||"number"===typeof n)return null!==a?null:s(e,t,""+n,r);if("object"===typeof n&&null!==n){switch(n.$$typeof){case w:return n.key===a?c(e,t,n,r):null;case k:return n.key===a?u(e,t,n,r):null;case T:return p(e,t,(a=n._init)(n._payload),r)}if(te(n)||F(n))return null!==a?null:d(e,t,n,r,null);vo(e,n)}return null}function h(e,t,n,r,a){if("string"===typeof r&&""!==r||"number"===typeof r)return s(t,e=e.get(n)||null,""+r,a);if("object"===typeof r&&null!==r){switch(r.$$typeof){case w:return c(t,e=e.get(null===r.key?n:r.key)||null,r,a);case k:return u(t,e=e.get(null===r.key?n:r.key)||null,r,a);case T:return h(e,t,n,(0,r._init)(r._payload),a)}if(te(r)||F(r))return d(t,e=e.get(n)||null,r,a,null);vo(t,r)}return null}function m(a,o,l,s){for(var c=null,u=null,d=o,m=o=0,b=null;null!==d&&m<l.length;m++){d.index>m?(b=d,d=null):b=d.sibling;var g=p(a,d,l[m],s);if(null===g){null===d&&(d=b);break}e&&d&&null===g.alternate&&t(a,d),o=i(g,o,m),null===u?c=g:u.sibling=g,u=g,d=b}if(m===l.length)return n(a,d),ao&&Xa(a,m),c;if(null===d){for(;m<l.length;m++)null!==(d=f(a,l[m],s))&&(o=i(d,o,m),null===u?c=d:u.sibling=d,u=d);return ao&&Xa(a,m),c}for(d=r(a,d);m<l.length;m++)null!==(b=h(d,a,m,l[m],s))&&(e&&null!==b.alternate&&d.delete(null===b.key?m:b.key),o=i(b,o,m),null===u?c=b:u.sibling=b,u=b);return e&&d.forEach((function(e){return t(a,e)})),ao&&Xa(a,m),c}function b(a,l,s,c){var u=F(s);if("function"!==typeof u)throw Error(o(150));if(null==(s=u.call(s)))throw Error(o(151));for(var d=u=null,m=l,b=l=0,g=null,v=s.next();null!==m&&!v.done;b++,v=s.next()){m.index>b?(g=m,m=null):g=m.sibling;var y=p(a,m,v.value,c);if(null===y){null===m&&(m=g);break}e&&m&&null===y.alternate&&t(a,m),l=i(y,l,b),null===d?u=y:d.sibling=y,d=y,m=g}if(v.done)return n(a,m),ao&&Xa(a,b),u;if(null===m){for(;!v.done;b++,v=s.next())null!==(v=f(a,v.value,c))&&(l=i(v,l,b),null===d?u=v:d.sibling=v,d=v);return ao&&Xa(a,b),u}for(m=r(a,m);!v.done;b++,v=s.next())null!==(v=h(m,a,b,v.value,c))&&(e&&null!==v.alternate&&m.delete(null===v.key?b:v.key),l=i(v,l,b),null===d?u=v:d.sibling=v,d=v);return e&&m.forEach((function(e){return t(a,e)})),ao&&Xa(a,b),u}return function e(r,o,i,s){if("object"===typeof i&&null!==i&&i.type===S&&null===i.key&&(i=i.props.children),"object"===typeof i&&null!==i){switch(i.$$typeof){case w:e:{for(var c=i.key,u=o;null!==u;){if(u.key===c){if((c=i.type)===S){if(7===u.tag){n(r,u.sibling),(o=a(u,i.props.children)).return=r,r=o;break e}}else if(u.elementType===c||"object"===typeof c&&null!==c&&c.$$typeof===T&&yo(c)===u.type){n(r,u.sibling),(o=a(u,i.props)).ref=go(r,u,i),o.return=r,r=o;break e}n(r,u);break}t(r,u),u=u.sibling}i.type===S?((o=Fc(i.props.children,r.mode,s,i.key)).return=r,r=o):((s=Dc(i.type,i.key,i.props,null,r.mode,s)).ref=go(r,o,i),s.return=r,r=s)}return l(r);case k:e:{for(u=i.key;null!==o;){if(o.key===u){if(4===o.tag&&o.stateNode.containerInfo===i.containerInfo&&o.stateNode.implementation===i.implementation){n(r,o.sibling),(o=a(o,i.children||[])).return=r,r=o;break e}n(r,o);break}t(r,o),o=o.sibling}(o=Rc(i,r.mode,s)).return=r,r=o}return l(r);case T:return e(r,o,(u=i._init)(i._payload),s)}if(te(i))return m(r,o,i,s);if(F(i))return b(r,o,i,s);vo(r,i)}return"string"===typeof i&&""!==i||"number"===typeof i?(i=""+i,null!==o&&6===o.tag?(n(r,o.sibling),(o=a(o,i)).return=r,r=o):(n(r,o),(o=Mc(i,r.mode,s)).return=r,r=o),l(r)):n(r,o)}}var wo=xo(!0),ko=xo(!1),So=Ea(null),Eo=null,jo=null,Co=null;function _o(){Co=jo=Eo=null}function Oo(e){var t=So.current;ja(So),e._currentValue=t}function Po(e,t,n){for(;null!==e;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,null!==r&&(r.childLanes|=t)):null!==r&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Ao(e,t){Eo=e,Co=jo=null,null!==(e=e.dependencies)&&null!==e.firstContext&&(0!==(e.lanes&t)&&(yl=!0),e.firstContext=null)}function zo(e){var t=e._currentValue;if(Co!==e)if(e={context:e,memoizedValue:t,next:null},null===jo){if(null===Eo)throw Error(o(308));jo=e,Eo.dependencies={lanes:0,firstContext:e}}else jo=jo.next=e;return t}var To=null;function No(e){null===To?To=[e]:To.push(e)}function Do(e,t,n,r){var a=t.interleaved;return null===a?(n.next=n,No(t)):(n.next=a.next,a.next=n),t.interleaved=n,Fo(e,r)}function Fo(e,t){e.lanes|=t;var n=e.alternate;for(null!==n&&(n.lanes|=t),n=e,e=e.return;null!==e;)e.childLanes|=t,null!==(n=e.alternate)&&(n.childLanes|=t),n=e,e=e.return;return 3===n.tag?n.stateNode:null}var Io=!1;function Mo(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Ro(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Lo(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function $o(e,t,n){var r=e.updateQueue;if(null===r)return null;if(r=r.shared,0!==(2&Os)){var a=r.pending;return null===a?t.next=t:(t.next=a.next,a.next=t),r.pending=t,Fo(e,n)}return null===(a=r.interleaved)?(t.next=t,No(r)):(t.next=a.next,a.next=t),r.interleaved=t,Fo(e,n)}function Bo(e,t,n){if(null!==(t=t.updateQueue)&&(t=t.shared,0!==(4194240&n))){var r=t.lanes;n|=r&=e.pendingLanes,t.lanes=n,vt(e,n)}}function Wo(e,t){var n=e.updateQueue,r=e.alternate;if(null!==r&&n===(r=r.updateQueue)){var a=null,o=null;if(null!==(n=n.firstBaseUpdate)){do{var i={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};null===o?a=o=i:o=o.next=i,n=n.next}while(null!==n);null===o?a=o=t:o=o.next=t}else a=o=t;return n={baseState:r.baseState,firstBaseUpdate:a,lastBaseUpdate:o,shared:r.shared,effects:r.effects},void(e.updateQueue=n)}null===(e=n.lastBaseUpdate)?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Vo(e,t,n,r){var a=e.updateQueue;Io=!1;var o=a.firstBaseUpdate,i=a.lastBaseUpdate,l=a.shared.pending;if(null!==l){a.shared.pending=null;var s=l,c=s.next;s.next=null,null===i?o=c:i.next=c,i=s;var u=e.alternate;null!==u&&((l=(u=u.updateQueue).lastBaseUpdate)!==i&&(null===l?u.firstBaseUpdate=c:l.next=c,u.lastBaseUpdate=s))}if(null!==o){var d=a.baseState;for(i=0,u=c=s=null,l=o;;){var f=l.lane,p=l.eventTime;if((r&f)===f){null!==u&&(u=u.next={eventTime:p,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var h=e,m=l;switch(f=t,p=n,m.tag){case 1:if("function"===typeof(h=m.payload)){d=h.call(p,d,f);break e}d=h;break e;case 3:h.flags=-65537&h.flags|128;case 0:if(null===(f="function"===typeof(h=m.payload)?h.call(p,d,f):h)||void 0===f)break e;d=M({},d,f);break e;case 2:Io=!0}}null!==l.callback&&0!==l.lane&&(e.flags|=64,null===(f=a.effects)?a.effects=[l]:f.push(l))}else p={eventTime:p,lane:f,tag:l.tag,payload:l.payload,callback:l.callback,next:null},null===u?(c=u=p,s=d):u=u.next=p,i|=f;if(null===(l=l.next)){if(null===(l=a.shared.pending))break;l=(f=l).next,f.next=null,a.lastBaseUpdate=f,a.shared.pending=null}}if(null===u&&(s=d),a.baseState=s,a.firstBaseUpdate=c,a.lastBaseUpdate=u,null!==(t=a.shared.interleaved)){a=t;do{i|=a.lane,a=a.next}while(a!==t)}else null===o&&(a.shared.lanes=0);Is|=i,e.lanes=i,e.memoizedState=d}}function qo(e,t,n){if(e=t.effects,t.effects=null,null!==e)for(t=0;t<e.length;t++){var r=e[t],a=r.callback;if(null!==a){if(r.callback=null,r=n,"function"!==typeof a)throw Error(o(191,a));a.call(r)}}}var Uo={},Ho=Ea(Uo),Ko=Ea(Uo),Go=Ea(Uo);function Qo(e){if(e===Uo)throw Error(o(174));return e}function Yo(e,t){switch(Ca(Go,t),Ca(Ko,e),Ca(Ho,Uo),e=t.nodeType){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:se(null,"");break;default:t=se(t=(e=8===e?t.parentNode:t).namespaceURI||null,e=e.tagName)}ja(Ho),Ca(Ho,t)}function Jo(){ja(Ho),ja(Ko),ja(Go)}function Xo(e){Qo(Go.current);var t=Qo(Ho.current),n=se(t,e.type);t!==n&&(Ca(Ko,e),Ca(Ho,n))}function Zo(e){Ko.current===e&&(ja(Ho),ja(Ko))}var ei=Ea(0);function ti(e){for(var t=e;null!==t;){if(13===t.tag){var n=t.memoizedState;if(null!==n&&(null===(n=n.dehydrated)||"$?"===n.data||"$!"===n.data))return t}else if(19===t.tag&&void 0!==t.memoizedProps.revealOrder){if(0!==(128&t.flags))return t}else if(null!==t.child){t.child.return=t,t=t.child;continue}if(t===e)break;for(;null===t.sibling;){if(null===t.return||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ni=[];function ri(){for(var e=0;e<ni.length;e++)ni[e]._workInProgressVersionPrimary=null;ni.length=0}var ai=x.ReactCurrentDispatcher,oi=x.ReactCurrentBatchConfig,ii=0,li=null,si=null,ci=null,ui=!1,di=!1,fi=0,pi=0;function hi(){throw Error(o(321))}function mi(e,t){if(null===t)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!lr(e[n],t[n]))return!1;return!0}function bi(e,t,n,r,a,i){if(ii=i,li=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,ai.current=null===e||null===e.memoizedState?Zi:el,e=n(r,a),di){i=0;do{if(di=!1,fi=0,25<=i)throw Error(o(301));i+=1,ci=si=null,t.updateQueue=null,ai.current=tl,e=n(r,a)}while(di)}if(ai.current=Xi,t=null!==si&&null!==si.next,ii=0,ci=si=li=null,ui=!1,t)throw Error(o(300));return e}function gi(){var e=0!==fi;return fi=0,e}function vi(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return null===ci?li.memoizedState=ci=e:ci=ci.next=e,ci}function yi(){if(null===si){var e=li.alternate;e=null!==e?e.memoizedState:null}else e=si.next;var t=null===ci?li.memoizedState:ci.next;if(null!==t)ci=t,si=e;else{if(null===e)throw Error(o(310));e={memoizedState:(si=e).memoizedState,baseState:si.baseState,baseQueue:si.baseQueue,queue:si.queue,next:null},null===ci?li.memoizedState=ci=e:ci=ci.next=e}return ci}function xi(e,t){return"function"===typeof t?t(e):t}function wi(e){var t=yi(),n=t.queue;if(null===n)throw Error(o(311));n.lastRenderedReducer=e;var r=si,a=r.baseQueue,i=n.pending;if(null!==i){if(null!==a){var l=a.next;a.next=i.next,i.next=l}r.baseQueue=a=i,n.pending=null}if(null!==a){i=a.next,r=r.baseState;var s=l=null,c=null,u=i;do{var d=u.lane;if((ii&d)===d)null!==c&&(c=c.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var f={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};null===c?(s=c=f,l=r):c=c.next=f,li.lanes|=d,Is|=d}u=u.next}while(null!==u&&u!==i);null===c?l=r:c.next=s,lr(r,t.memoizedState)||(yl=!0),t.memoizedState=r,t.baseState=l,t.baseQueue=c,n.lastRenderedState=r}if(null!==(e=n.interleaved)){a=e;do{i=a.lane,li.lanes|=i,Is|=i,a=a.next}while(a!==e)}else null===a&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function ki(e){var t=yi(),n=t.queue;if(null===n)throw Error(o(311));n.lastRenderedReducer=e;var r=n.dispatch,a=n.pending,i=t.memoizedState;if(null!==a){n.pending=null;var l=a=a.next;do{i=e(i,l.action),l=l.next}while(l!==a);lr(i,t.memoizedState)||(yl=!0),t.memoizedState=i,null===t.baseQueue&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function Si(){}function Ei(e,t){var n=li,r=yi(),a=t(),i=!lr(r.memoizedState,a);if(i&&(r.memoizedState=a,yl=!0),r=r.queue,Ii(_i.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||null!==ci&&1&ci.memoizedState.tag){if(n.flags|=2048,zi(9,Ci.bind(null,n,r,a,t),void 0,null),null===Ps)throw Error(o(349));0!==(30&ii)||ji(n,t,a)}return a}function ji(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},null===(t=li.updateQueue)?(t={lastEffect:null,stores:null},li.updateQueue=t,t.stores=[e]):null===(n=t.stores)?t.stores=[e]:n.push(e)}function Ci(e,t,n,r){t.value=n,t.getSnapshot=r,Oi(t)&&Pi(e)}function _i(e,t,n){return n((function(){Oi(t)&&Pi(e)}))}function Oi(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!lr(e,n)}catch(r){return!0}}function Pi(e){var t=Fo(e,1);null!==t&&nc(t,e,1,-1)}function Ai(e){var t=vi();return"function"===typeof e&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:xi,lastRenderedState:e},t.queue=e,e=e.dispatch=Gi.bind(null,li,e),[t.memoizedState,e]}function zi(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},null===(t=li.updateQueue)?(t={lastEffect:null,stores:null},li.updateQueue=t,t.lastEffect=e.next=e):null===(n=t.lastEffect)?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function Ti(){return yi().memoizedState}function Ni(e,t,n,r){var a=vi();li.flags|=e,a.memoizedState=zi(1|t,n,void 0,void 0===r?null:r)}function Di(e,t,n,r){var a=yi();r=void 0===r?null:r;var o=void 0;if(null!==si){var i=si.memoizedState;if(o=i.destroy,null!==r&&mi(r,i.deps))return void(a.memoizedState=zi(t,n,o,r))}li.flags|=e,a.memoizedState=zi(1|t,n,o,r)}function Fi(e,t){return Ni(8390656,8,e,t)}function Ii(e,t){return Di(2048,8,e,t)}function Mi(e,t){return Di(4,2,e,t)}function Ri(e,t){return Di(4,4,e,t)}function Li(e,t){return"function"===typeof t?(e=e(),t(e),function(){t(null)}):null!==t&&void 0!==t?(e=e(),t.current=e,function(){t.current=null}):void 0}function $i(e,t,n){return n=null!==n&&void 0!==n?n.concat([e]):null,Di(4,4,Li.bind(null,t,e),n)}function Bi(){}function Wi(e,t){var n=yi();t=void 0===t?null:t;var r=n.memoizedState;return null!==r&&null!==t&&mi(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Vi(e,t){var n=yi();t=void 0===t?null:t;var r=n.memoizedState;return null!==r&&null!==t&&mi(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function qi(e,t,n){return 0===(21&ii)?(e.baseState&&(e.baseState=!1,yl=!0),e.memoizedState=n):(lr(n,t)||(n=mt(),li.lanes|=n,Is|=n,e.baseState=!0),t)}function Ui(e,t){var n=yt;yt=0!==n&&4>n?n:4,e(!0);var r=oi.transition;oi.transition={};try{e(!1),t()}finally{yt=n,oi.transition=r}}function Hi(){return yi().memoizedState}function Ki(e,t,n){var r=tc(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Qi(e))Yi(t,n);else if(null!==(n=Do(e,t,n,r))){nc(n,e,r,ec()),Ji(n,t,r)}}function Gi(e,t,n){var r=tc(e),a={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Qi(e))Yi(t,a);else{var o=e.alternate;if(0===e.lanes&&(null===o||0===o.lanes)&&null!==(o=t.lastRenderedReducer))try{var i=t.lastRenderedState,l=o(i,n);if(a.hasEagerState=!0,a.eagerState=l,lr(l,i)){var s=t.interleaved;return null===s?(a.next=a,No(t)):(a.next=s.next,s.next=a),void(t.interleaved=a)}}catch(c){}null!==(n=Do(e,t,a,r))&&(nc(n,e,r,a=ec()),Ji(n,t,r))}}function Qi(e){var t=e.alternate;return e===li||null!==t&&t===li}function Yi(e,t){di=ui=!0;var n=e.pending;null===n?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Ji(e,t,n){if(0!==(4194240&n)){var r=t.lanes;n|=r&=e.pendingLanes,t.lanes=n,vt(e,n)}}var Xi={readContext:zo,useCallback:hi,useContext:hi,useEffect:hi,useImperativeHandle:hi,useInsertionEffect:hi,useLayoutEffect:hi,useMemo:hi,useReducer:hi,useRef:hi,useState:hi,useDebugValue:hi,useDeferredValue:hi,useTransition:hi,useMutableSource:hi,useSyncExternalStore:hi,useId:hi,unstable_isNewReconciler:!1},Zi={readContext:zo,useCallback:function(e,t){return vi().memoizedState=[e,void 0===t?null:t],e},useContext:zo,useEffect:Fi,useImperativeHandle:function(e,t,n){return n=null!==n&&void 0!==n?n.concat([e]):null,Ni(4194308,4,Li.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Ni(4194308,4,e,t)},useInsertionEffect:function(e,t){return Ni(4,2,e,t)},useMemo:function(e,t){var n=vi();return t=void 0===t?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=vi();return t=void 0!==n?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Ki.bind(null,li,e),[r.memoizedState,e]},useRef:function(e){return e={current:e},vi().memoizedState=e},useState:Ai,useDebugValue:Bi,useDeferredValue:function(e){return vi().memoizedState=e},useTransition:function(){var e=Ai(!1),t=e[0];return e=Ui.bind(null,e[1]),vi().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=li,a=vi();if(ao){if(void 0===n)throw Error(o(407));n=n()}else{if(n=t(),null===Ps)throw Error(o(349));0!==(30&ii)||ji(r,t,n)}a.memoizedState=n;var i={value:n,getSnapshot:t};return a.queue=i,Fi(_i.bind(null,r,i,e),[e]),r.flags|=2048,zi(9,Ci.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=vi(),t=Ps.identifierPrefix;if(ao){var n=Ja;t=":"+t+"R"+(n=(Ya&~(1<<32-it(Ya)-1)).toString(32)+n),0<(n=fi++)&&(t+="H"+n.toString(32)),t+=":"}else t=":"+t+"r"+(n=pi++).toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},el={readContext:zo,useCallback:Wi,useContext:zo,useEffect:Ii,useImperativeHandle:$i,useInsertionEffect:Mi,useLayoutEffect:Ri,useMemo:Vi,useReducer:wi,useRef:Ti,useState:function(){return wi(xi)},useDebugValue:Bi,useDeferredValue:function(e){return qi(yi(),si.memoizedState,e)},useTransition:function(){return[wi(xi)[0],yi().memoizedState]},useMutableSource:Si,useSyncExternalStore:Ei,useId:Hi,unstable_isNewReconciler:!1},tl={readContext:zo,useCallback:Wi,useContext:zo,useEffect:Ii,useImperativeHandle:$i,useInsertionEffect:Mi,useLayoutEffect:Ri,useMemo:Vi,useReducer:ki,useRef:Ti,useState:function(){return ki(xi)},useDebugValue:Bi,useDeferredValue:function(e){var t=yi();return null===si?t.memoizedState=e:qi(t,si.memoizedState,e)},useTransition:function(){return[ki(xi)[0],yi().memoizedState]},useMutableSource:Si,useSyncExternalStore:Ei,useId:Hi,unstable_isNewReconciler:!1};function nl(e,t){if(e&&e.defaultProps){for(var n in t=M({},t),e=e.defaultProps)void 0===t[n]&&(t[n]=e[n]);return t}return t}function rl(e,t,n,r){n=null===(n=n(r,t=e.memoizedState))||void 0===n?t:M({},t,n),e.memoizedState=n,0===e.lanes&&(e.updateQueue.baseState=n)}var al={isMounted:function(e){return!!(e=e._reactInternals)&&We(e)===e},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=ec(),a=tc(e),o=Lo(r,a);o.payload=t,void 0!==n&&null!==n&&(o.callback=n),null!==(t=$o(e,o,a))&&(nc(t,e,a,r),Bo(t,e,a))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=ec(),a=tc(e),o=Lo(r,a);o.tag=1,o.payload=t,void 0!==n&&null!==n&&(o.callback=n),null!==(t=$o(e,o,a))&&(nc(t,e,a,r),Bo(t,e,a))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=ec(),r=tc(e),a=Lo(n,r);a.tag=2,void 0!==t&&null!==t&&(a.callback=t),null!==(t=$o(e,a,r))&&(nc(t,e,r,n),Bo(t,e,r))}};function ol(e,t,n,r,a,o,i){return"function"===typeof(e=e.stateNode).shouldComponentUpdate?e.shouldComponentUpdate(r,o,i):!t.prototype||!t.prototype.isPureReactComponent||(!sr(n,r)||!sr(a,o))}function il(e,t,n){var r=!1,a=_a,o=t.contextType;return"object"===typeof o&&null!==o?o=zo(o):(a=Ta(t)?Aa:Oa.current,o=(r=null!==(r=t.contextTypes)&&void 0!==r)?za(e,a):_a),t=new t(n,o),e.memoizedState=null!==t.state&&void 0!==t.state?t.state:null,t.updater=al,e.stateNode=t,t._reactInternals=e,r&&((e=e.stateNode).__reactInternalMemoizedUnmaskedChildContext=a,e.__reactInternalMemoizedMaskedChildContext=o),t}function ll(e,t,n,r){e=t.state,"function"===typeof t.componentWillReceiveProps&&t.componentWillReceiveProps(n,r),"function"===typeof t.UNSAFE_componentWillReceiveProps&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&al.enqueueReplaceState(t,t.state,null)}function sl(e,t,n,r){var a=e.stateNode;a.props=n,a.state=e.memoizedState,a.refs={},Mo(e);var o=t.contextType;"object"===typeof o&&null!==o?a.context=zo(o):(o=Ta(t)?Aa:Oa.current,a.context=za(e,o)),a.state=e.memoizedState,"function"===typeof(o=t.getDerivedStateFromProps)&&(rl(e,t,o,n),a.state=e.memoizedState),"function"===typeof t.getDerivedStateFromProps||"function"===typeof a.getSnapshotBeforeUpdate||"function"!==typeof a.UNSAFE_componentWillMount&&"function"!==typeof a.componentWillMount||(t=a.state,"function"===typeof a.componentWillMount&&a.componentWillMount(),"function"===typeof a.UNSAFE_componentWillMount&&a.UNSAFE_componentWillMount(),t!==a.state&&al.enqueueReplaceState(a,a.state,null),Vo(e,n,a,r),a.state=e.memoizedState),"function"===typeof a.componentDidMount&&(e.flags|=4194308)}function cl(e,t){try{var n="",r=t;do{n+=B(r),r=r.return}while(r);var a=n}catch(o){a="\nError generating stack: "+o.message+"\n"+o.stack}return{value:e,source:t,stack:a,digest:null}}function ul(e,t,n){return{value:e,source:null,stack:null!=n?n:null,digest:null!=t?t:null}}function dl(e,t){try{console.error(t.value)}catch(n){setTimeout((function(){throw n}))}}var fl="function"===typeof WeakMap?WeakMap:Map;function pl(e,t,n){(n=Lo(-1,n)).tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){qs||(qs=!0,Us=r),dl(0,t)},n}function hl(e,t,n){(n=Lo(-1,n)).tag=3;var r=e.type.getDerivedStateFromError;if("function"===typeof r){var a=t.value;n.payload=function(){return r(a)},n.callback=function(){dl(0,t)}}var o=e.stateNode;return null!==o&&"function"===typeof o.componentDidCatch&&(n.callback=function(){dl(0,t),"function"!==typeof r&&(null===Hs?Hs=new Set([this]):Hs.add(this));var e=t.stack;this.componentDidCatch(t.value,{componentStack:null!==e?e:""})}),n}function ml(e,t,n){var r=e.pingCache;if(null===r){r=e.pingCache=new fl;var a=new Set;r.set(t,a)}else void 0===(a=r.get(t))&&(a=new Set,r.set(t,a));a.has(n)||(a.add(n),e=jc.bind(null,e,t,n),t.then(e,e))}function bl(e){do{var t;if((t=13===e.tag)&&(t=null===(t=e.memoizedState)||null!==t.dehydrated),t)return e;e=e.return}while(null!==e);return null}function gl(e,t,n,r,a){return 0===(1&e.mode)?(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,1===n.tag&&(null===n.alternate?n.tag=17:((t=Lo(-1,1)).tag=2,$o(n,t,1))),n.lanes|=1),e):(e.flags|=65536,e.lanes=a,e)}var vl=x.ReactCurrentOwner,yl=!1;function xl(e,t,n,r){t.child=null===e?ko(t,null,n,r):wo(t,e.child,n,r)}function wl(e,t,n,r,a){n=n.render;var o=t.ref;return Ao(t,a),r=bi(e,t,n,r,o,a),n=gi(),null===e||yl?(ao&&n&&eo(t),t.flags|=1,xl(e,t,r,a),t.child):(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a,ql(e,t,a))}function kl(e,t,n,r,a){if(null===e){var o=n.type;return"function"!==typeof o||Tc(o)||void 0!==o.defaultProps||null!==n.compare||void 0!==n.defaultProps?((e=Dc(n.type,null,r,t,t.mode,a)).ref=t.ref,e.return=t,t.child=e):(t.tag=15,t.type=o,Sl(e,t,o,r,a))}if(o=e.child,0===(e.lanes&a)){var i=o.memoizedProps;if((n=null!==(n=n.compare)?n:sr)(i,r)&&e.ref===t.ref)return ql(e,t,a)}return t.flags|=1,(e=Nc(o,r)).ref=t.ref,e.return=t,t.child=e}function Sl(e,t,n,r,a){if(null!==e){var o=e.memoizedProps;if(sr(o,r)&&e.ref===t.ref){if(yl=!1,t.pendingProps=r=o,0===(e.lanes&a))return t.lanes=e.lanes,ql(e,t,a);0!==(131072&e.flags)&&(yl=!0)}}return Cl(e,t,n,r,a)}function El(e,t,n){var r=t.pendingProps,a=r.children,o=null!==e?e.memoizedState:null;if("hidden"===r.mode)if(0===(1&t.mode))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ca(Ns,Ts),Ts|=n;else{if(0===(1073741824&n))return e=null!==o?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Ca(Ns,Ts),Ts|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=null!==o?o.baseLanes:n,Ca(Ns,Ts),Ts|=r}else null!==o?(r=o.baseLanes|n,t.memoizedState=null):r=n,Ca(Ns,Ts),Ts|=r;return xl(e,t,a,n),t.child}function jl(e,t){var n=t.ref;(null===e&&null!==n||null!==e&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Cl(e,t,n,r,a){var o=Ta(n)?Aa:Oa.current;return o=za(t,o),Ao(t,a),n=bi(e,t,n,r,o,a),r=gi(),null===e||yl?(ao&&r&&eo(t),t.flags|=1,xl(e,t,n,a),t.child):(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a,ql(e,t,a))}function _l(e,t,n,r,a){if(Ta(n)){var o=!0;Ia(t)}else o=!1;if(Ao(t,a),null===t.stateNode)Vl(e,t),il(t,n,r),sl(t,n,r,a),r=!0;else if(null===e){var i=t.stateNode,l=t.memoizedProps;i.props=l;var s=i.context,c=n.contextType;"object"===typeof c&&null!==c?c=zo(c):c=za(t,c=Ta(n)?Aa:Oa.current);var u=n.getDerivedStateFromProps,d="function"===typeof u||"function"===typeof i.getSnapshotBeforeUpdate;d||"function"!==typeof i.UNSAFE_componentWillReceiveProps&&"function"!==typeof i.componentWillReceiveProps||(l!==r||s!==c)&&ll(t,i,r,c),Io=!1;var f=t.memoizedState;i.state=f,Vo(t,r,i,a),s=t.memoizedState,l!==r||f!==s||Pa.current||Io?("function"===typeof u&&(rl(t,n,u,r),s=t.memoizedState),(l=Io||ol(t,n,l,r,f,s,c))?(d||"function"!==typeof i.UNSAFE_componentWillMount&&"function"!==typeof i.componentWillMount||("function"===typeof i.componentWillMount&&i.componentWillMount(),"function"===typeof i.UNSAFE_componentWillMount&&i.UNSAFE_componentWillMount()),"function"===typeof i.componentDidMount&&(t.flags|=4194308)):("function"===typeof i.componentDidMount&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=s),i.props=r,i.state=s,i.context=c,r=l):("function"===typeof i.componentDidMount&&(t.flags|=4194308),r=!1)}else{i=t.stateNode,Ro(e,t),l=t.memoizedProps,c=t.type===t.elementType?l:nl(t.type,l),i.props=c,d=t.pendingProps,f=i.context,"object"===typeof(s=n.contextType)&&null!==s?s=zo(s):s=za(t,s=Ta(n)?Aa:Oa.current);var p=n.getDerivedStateFromProps;(u="function"===typeof p||"function"===typeof i.getSnapshotBeforeUpdate)||"function"!==typeof i.UNSAFE_componentWillReceiveProps&&"function"!==typeof i.componentWillReceiveProps||(l!==d||f!==s)&&ll(t,i,r,s),Io=!1,f=t.memoizedState,i.state=f,Vo(t,r,i,a);var h=t.memoizedState;l!==d||f!==h||Pa.current||Io?("function"===typeof p&&(rl(t,n,p,r),h=t.memoizedState),(c=Io||ol(t,n,c,r,f,h,s)||!1)?(u||"function"!==typeof i.UNSAFE_componentWillUpdate&&"function"!==typeof i.componentWillUpdate||("function"===typeof i.componentWillUpdate&&i.componentWillUpdate(r,h,s),"function"===typeof i.UNSAFE_componentWillUpdate&&i.UNSAFE_componentWillUpdate(r,h,s)),"function"===typeof i.componentDidUpdate&&(t.flags|=4),"function"===typeof i.getSnapshotBeforeUpdate&&(t.flags|=1024)):("function"!==typeof i.componentDidUpdate||l===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),"function"!==typeof i.getSnapshotBeforeUpdate||l===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=h),i.props=r,i.state=h,i.context=s,r=c):("function"!==typeof i.componentDidUpdate||l===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),"function"!==typeof i.getSnapshotBeforeUpdate||l===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return Ol(e,t,n,r,o,a)}function Ol(e,t,n,r,a,o){jl(e,t);var i=0!==(128&t.flags);if(!r&&!i)return a&&Ma(t,n,!1),ql(e,t,o);r=t.stateNode,vl.current=t;var l=i&&"function"!==typeof n.getDerivedStateFromError?null:r.render();return t.flags|=1,null!==e&&i?(t.child=wo(t,e.child,null,o),t.child=wo(t,null,l,o)):xl(e,t,l,o),t.memoizedState=r.state,a&&Ma(t,n,!0),t.child}function Pl(e){var t=e.stateNode;t.pendingContext?Da(0,t.pendingContext,t.pendingContext!==t.context):t.context&&Da(0,t.context,!1),Yo(e,t.containerInfo)}function Al(e,t,n,r,a){return ho(),mo(a),t.flags|=256,xl(e,t,n,r),t.child}var zl,Tl,Nl,Dl,Fl={dehydrated:null,treeContext:null,retryLane:0};function Il(e){return{baseLanes:e,cachePool:null,transitions:null}}function Ml(e,t,n){var r,a=t.pendingProps,i=ei.current,l=!1,s=0!==(128&t.flags);if((r=s)||(r=(null===e||null!==e.memoizedState)&&0!==(2&i)),r?(l=!0,t.flags&=-129):null!==e&&null===e.memoizedState||(i|=1),Ca(ei,1&i),null===e)return co(t),null!==(e=t.memoizedState)&&null!==(e=e.dehydrated)?(0===(1&t.mode)?t.lanes=1:"$!"===e.data?t.lanes=8:t.lanes=1073741824,null):(s=a.children,e=a.fallback,l?(a=t.mode,l=t.child,s={mode:"hidden",children:s},0===(1&a)&&null!==l?(l.childLanes=0,l.pendingProps=s):l=Ic(s,a,0,null),e=Fc(e,a,n,null),l.return=t,e.return=t,l.sibling=e,t.child=l,t.child.memoizedState=Il(n),t.memoizedState=Fl,e):Rl(t,s));if(null!==(i=e.memoizedState)&&null!==(r=i.dehydrated))return function(e,t,n,r,a,i,l){if(n)return 256&t.flags?(t.flags&=-257,Ll(e,t,l,r=ul(Error(o(422))))):null!==t.memoizedState?(t.child=e.child,t.flags|=128,null):(i=r.fallback,a=t.mode,r=Ic({mode:"visible",children:r.children},a,0,null),(i=Fc(i,a,l,null)).flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,0!==(1&t.mode)&&wo(t,e.child,null,l),t.child.memoizedState=Il(l),t.memoizedState=Fl,i);if(0===(1&t.mode))return Ll(e,t,l,null);if("$!"===a.data){if(r=a.nextSibling&&a.nextSibling.dataset)var s=r.dgst;return r=s,Ll(e,t,l,r=ul(i=Error(o(419)),r,void 0))}if(s=0!==(l&e.childLanes),yl||s){if(null!==(r=Ps)){switch(l&-l){case 4:a=2;break;case 16:a=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:a=32;break;case 536870912:a=268435456;break;default:a=0}0!==(a=0!==(a&(r.suspendedLanes|l))?0:a)&&a!==i.retryLane&&(i.retryLane=a,Fo(e,a),nc(r,e,a,-1))}return mc(),Ll(e,t,l,r=ul(Error(o(421))))}return"$?"===a.data?(t.flags|=128,t.child=e.child,t=_c.bind(null,e),a._reactRetry=t,null):(e=i.treeContext,ro=ca(a.nextSibling),no=t,ao=!0,oo=null,null!==e&&(Ka[Ga++]=Ya,Ka[Ga++]=Ja,Ka[Ga++]=Qa,Ya=e.id,Ja=e.overflow,Qa=t),t=Rl(t,r.children),t.flags|=4096,t)}(e,t,s,a,r,i,n);if(l){l=a.fallback,s=t.mode,r=(i=e.child).sibling;var c={mode:"hidden",children:a.children};return 0===(1&s)&&t.child!==i?((a=t.child).childLanes=0,a.pendingProps=c,t.deletions=null):(a=Nc(i,c)).subtreeFlags=14680064&i.subtreeFlags,null!==r?l=Nc(r,l):(l=Fc(l,s,n,null)).flags|=2,l.return=t,a.return=t,a.sibling=l,t.child=a,a=l,l=t.child,s=null===(s=e.child.memoizedState)?Il(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},l.memoizedState=s,l.childLanes=e.childLanes&~n,t.memoizedState=Fl,a}return e=(l=e.child).sibling,a=Nc(l,{mode:"visible",children:a.children}),0===(1&t.mode)&&(a.lanes=n),a.return=t,a.sibling=null,null!==e&&(null===(n=t.deletions)?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=a,t.memoizedState=null,a}function Rl(e,t){return(t=Ic({mode:"visible",children:t},e.mode,0,null)).return=e,e.child=t}function Ll(e,t,n,r){return null!==r&&mo(r),wo(t,e.child,null,n),(e=Rl(t,t.pendingProps.children)).flags|=2,t.memoizedState=null,e}function $l(e,t,n){e.lanes|=t;var r=e.alternate;null!==r&&(r.lanes|=t),Po(e.return,t,n)}function Bl(e,t,n,r,a){var o=e.memoizedState;null===o?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:a}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=a)}function Wl(e,t,n){var r=t.pendingProps,a=r.revealOrder,o=r.tail;if(xl(e,t,r.children,n),0!==(2&(r=ei.current)))r=1&r|2,t.flags|=128;else{if(null!==e&&0!==(128&e.flags))e:for(e=t.child;null!==e;){if(13===e.tag)null!==e.memoizedState&&$l(e,n,t);else if(19===e.tag)$l(e,n,t);else if(null!==e.child){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;null===e.sibling;){if(null===e.return||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(Ca(ei,r),0===(1&t.mode))t.memoizedState=null;else switch(a){case"forwards":for(n=t.child,a=null;null!==n;)null!==(e=n.alternate)&&null===ti(e)&&(a=n),n=n.sibling;null===(n=a)?(a=t.child,t.child=null):(a=n.sibling,n.sibling=null),Bl(t,!1,a,n,o);break;case"backwards":for(n=null,a=t.child,t.child=null;null!==a;){if(null!==(e=a.alternate)&&null===ti(e)){t.child=a;break}e=a.sibling,a.sibling=n,n=a,a=e}Bl(t,!0,n,null,o);break;case"together":Bl(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Vl(e,t){0===(1&t.mode)&&null!==e&&(e.alternate=null,t.alternate=null,t.flags|=2)}function ql(e,t,n){if(null!==e&&(t.dependencies=e.dependencies),Is|=t.lanes,0===(n&t.childLanes))return null;if(null!==e&&t.child!==e.child)throw Error(o(153));if(null!==t.child){for(n=Nc(e=t.child,e.pendingProps),t.child=n,n.return=t;null!==e.sibling;)e=e.sibling,(n=n.sibling=Nc(e,e.pendingProps)).return=t;n.sibling=null}return t.child}function Ul(e,t){if(!ao)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;null!==t;)null!==t.alternate&&(n=t),t=t.sibling;null===n?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;null!==n;)null!==n.alternate&&(r=n),n=n.sibling;null===r?t||null===e.tail?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Hl(e){var t=null!==e.alternate&&e.alternate.child===e.child,n=0,r=0;if(t)for(var a=e.child;null!==a;)n|=a.lanes|a.childLanes,r|=14680064&a.subtreeFlags,r|=14680064&a.flags,a.return=e,a=a.sibling;else for(a=e.child;null!==a;)n|=a.lanes|a.childLanes,r|=a.subtreeFlags,r|=a.flags,a.return=e,a=a.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Kl(e,t,n){var r=t.pendingProps;switch(to(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Hl(t),null;case 1:case 17:return Ta(t.type)&&Na(),Hl(t),null;case 3:return r=t.stateNode,Jo(),ja(Pa),ja(Oa),ri(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),null!==e&&null!==e.child||(fo(t)?t.flags|=4:null===e||e.memoizedState.isDehydrated&&0===(256&t.flags)||(t.flags|=1024,null!==oo&&(ic(oo),oo=null))),Tl(e,t),Hl(t),null;case 5:Zo(t);var a=Qo(Go.current);if(n=t.type,null!==e&&null!=t.stateNode)Nl(e,t,n,r,a),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(null===t.stateNode)throw Error(o(166));return Hl(t),null}if(e=Qo(Ho.current),fo(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[fa]=t,r[pa]=i,e=0!==(1&t.mode),n){case"dialog":Lr("cancel",r),Lr("close",r);break;case"iframe":case"object":case"embed":Lr("load",r);break;case"video":case"audio":for(a=0;a<Fr.length;a++)Lr(Fr[a],r);break;case"source":Lr("error",r);break;case"img":case"image":case"link":Lr("error",r),Lr("load",r);break;case"details":Lr("toggle",r);break;case"input":Y(r,i),Lr("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},Lr("invalid",r);break;case"textarea":ae(r,i),Lr("invalid",r)}for(var s in ve(n,i),a=null,i)if(i.hasOwnProperty(s)){var c=i[s];"children"===s?"string"===typeof c?r.textContent!==c&&(!0!==i.suppressHydrationWarning&&Xr(r.textContent,c,e),a=["children",c]):"number"===typeof c&&r.textContent!==""+c&&(!0!==i.suppressHydrationWarning&&Xr(r.textContent,c,e),a=["children",""+c]):l.hasOwnProperty(s)&&null!=c&&"onScroll"===s&&Lr("scroll",r)}switch(n){case"input":H(r),Z(r,i,!0);break;case"textarea":H(r),ie(r);break;case"select":case"option":break;default:"function"===typeof i.onClick&&(r.onclick=Zr)}r=a,t.updateQueue=r,null!==r&&(t.flags|=4)}else{s=9===a.nodeType?a:a.ownerDocument,"http://www.w3.org/1999/xhtml"===e&&(e=le(n)),"http://www.w3.org/1999/xhtml"===e?"script"===n?((e=s.createElement("div")).innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):"string"===typeof r.is?e=s.createElement(n,{is:r.is}):(e=s.createElement(n),"select"===n&&(s=e,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):e=s.createElementNS(e,n),e[fa]=t,e[pa]=r,zl(e,t,!1,!1),t.stateNode=e;e:{switch(s=ye(n,r),n){case"dialog":Lr("cancel",e),Lr("close",e),a=r;break;case"iframe":case"object":case"embed":Lr("load",e),a=r;break;case"video":case"audio":for(a=0;a<Fr.length;a++)Lr(Fr[a],e);a=r;break;case"source":Lr("error",e),a=r;break;case"img":case"image":case"link":Lr("error",e),Lr("load",e),a=r;break;case"details":Lr("toggle",e),a=r;break;case"input":Y(e,r),a=Q(e,r),Lr("invalid",e);break;case"option":default:a=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},a=M({},r,{value:void 0}),Lr("invalid",e);break;case"textarea":ae(e,r),a=re(e,r),Lr("invalid",e)}for(i in ve(n,a),c=a)if(c.hasOwnProperty(i)){var u=c[i];"style"===i?be(e,u):"dangerouslySetInnerHTML"===i?null!=(u=u?u.__html:void 0)&&de(e,u):"children"===i?"string"===typeof u?("textarea"!==n||""!==u)&&fe(e,u):"number"===typeof u&&fe(e,""+u):"suppressContentEditableWarning"!==i&&"suppressHydrationWarning"!==i&&"autoFocus"!==i&&(l.hasOwnProperty(i)?null!=u&&"onScroll"===i&&Lr("scroll",e):null!=u&&y(e,i,u,s))}switch(n){case"input":H(e),Z(e,r,!1);break;case"textarea":H(e),ie(e);break;case"option":null!=r.value&&e.setAttribute("value",""+q(r.value));break;case"select":e.multiple=!!r.multiple,null!=(i=r.value)?ne(e,!!r.multiple,i,!1):null!=r.defaultValue&&ne(e,!!r.multiple,r.defaultValue,!0);break;default:"function"===typeof a.onClick&&(e.onclick=Zr)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}null!==t.ref&&(t.flags|=512,t.flags|=2097152)}return Hl(t),null;case 6:if(e&&null!=t.stateNode)Dl(e,t,e.memoizedProps,r);else{if("string"!==typeof r&&null===t.stateNode)throw Error(o(166));if(n=Qo(Go.current),Qo(Ho.current),fo(t)){if(r=t.stateNode,n=t.memoizedProps,r[fa]=t,(i=r.nodeValue!==n)&&null!==(e=no))switch(e.tag){case 3:Xr(r.nodeValue,n,0!==(1&e.mode));break;case 5:!0!==e.memoizedProps.suppressHydrationWarning&&Xr(r.nodeValue,n,0!==(1&e.mode))}i&&(t.flags|=4)}else(r=(9===n.nodeType?n:n.ownerDocument).createTextNode(r))[fa]=t,t.stateNode=r}return Hl(t),null;case 13:if(ja(ei),r=t.memoizedState,null===e||null!==e.memoizedState&&null!==e.memoizedState.dehydrated){if(ao&&null!==ro&&0!==(1&t.mode)&&0===(128&t.flags))po(),ho(),t.flags|=98560,i=!1;else if(i=fo(t),null!==r&&null!==r.dehydrated){if(null===e){if(!i)throw Error(o(318));if(!(i=null!==(i=t.memoizedState)?i.dehydrated:null))throw Error(o(317));i[fa]=t}else ho(),0===(128&t.flags)&&(t.memoizedState=null),t.flags|=4;Hl(t),i=!1}else null!==oo&&(ic(oo),oo=null),i=!0;if(!i)return 65536&t.flags?t:null}return 0!==(128&t.flags)?(t.lanes=n,t):((r=null!==r)!==(null!==e&&null!==e.memoizedState)&&r&&(t.child.flags|=8192,0!==(1&t.mode)&&(null===e||0!==(1&ei.current)?0===Ds&&(Ds=3):mc())),null!==t.updateQueue&&(t.flags|=4),Hl(t),null);case 4:return Jo(),Tl(e,t),null===e&&Wr(t.stateNode.containerInfo),Hl(t),null;case 10:return Oo(t.type._context),Hl(t),null;case 19:if(ja(ei),null===(i=t.memoizedState))return Hl(t),null;if(r=0!==(128&t.flags),null===(s=i.rendering))if(r)Ul(i,!1);else{if(0!==Ds||null!==e&&0!==(128&e.flags))for(e=t.child;null!==e;){if(null!==(s=ti(e))){for(t.flags|=128,Ul(i,!1),null!==(r=s.updateQueue)&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;null!==n;)e=r,(i=n).flags&=14680066,null===(s=i.alternate)?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=s.childLanes,i.lanes=s.lanes,i.child=s.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=s.memoizedProps,i.memoizedState=s.memoizedState,i.updateQueue=s.updateQueue,i.type=s.type,e=s.dependencies,i.dependencies=null===e?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return Ca(ei,1&ei.current|2),t.child}e=e.sibling}null!==i.tail&&Je()>Ws&&(t.flags|=128,r=!0,Ul(i,!1),t.lanes=4194304)}else{if(!r)if(null!==(e=ti(s))){if(t.flags|=128,r=!0,null!==(n=e.updateQueue)&&(t.updateQueue=n,t.flags|=4),Ul(i,!0),null===i.tail&&"hidden"===i.tailMode&&!s.alternate&&!ao)return Hl(t),null}else 2*Je()-i.renderingStartTime>Ws&&1073741824!==n&&(t.flags|=128,r=!0,Ul(i,!1),t.lanes=4194304);i.isBackwards?(s.sibling=t.child,t.child=s):(null!==(n=i.last)?n.sibling=s:t.child=s,i.last=s)}return null!==i.tail?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=Je(),t.sibling=null,n=ei.current,Ca(ei,r?1&n|2:1&n),t):(Hl(t),null);case 22:case 23:return dc(),r=null!==t.memoizedState,null!==e&&null!==e.memoizedState!==r&&(t.flags|=8192),r&&0!==(1&t.mode)?0!==(1073741824&Ts)&&(Hl(t),6&t.subtreeFlags&&(t.flags|=8192)):Hl(t),null;case 24:case 25:return null}throw Error(o(156,t.tag))}function Gl(e,t){switch(to(t),t.tag){case 1:return Ta(t.type)&&Na(),65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 3:return Jo(),ja(Pa),ja(Oa),ri(),0!==(65536&(e=t.flags))&&0===(128&e)?(t.flags=-65537&e|128,t):null;case 5:return Zo(t),null;case 13:if(ja(ei),null!==(e=t.memoizedState)&&null!==e.dehydrated){if(null===t.alternate)throw Error(o(340));ho()}return 65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 19:return ja(ei),null;case 4:return Jo(),null;case 10:return Oo(t.type._context),null;case 22:case 23:return dc(),null;default:return null}}zl=function(e,t){for(var n=t.child;null!==n;){if(5===n.tag||6===n.tag)e.appendChild(n.stateNode);else if(4!==n.tag&&null!==n.child){n.child.return=n,n=n.child;continue}if(n===t)break;for(;null===n.sibling;){if(null===n.return||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}},Tl=function(){},Nl=function(e,t,n,r){var a=e.memoizedProps;if(a!==r){e=t.stateNode,Qo(Ho.current);var o,i=null;switch(n){case"input":a=Q(e,a),r=Q(e,r),i=[];break;case"select":a=M({},a,{value:void 0}),r=M({},r,{value:void 0}),i=[];break;case"textarea":a=re(e,a),r=re(e,r),i=[];break;default:"function"!==typeof a.onClick&&"function"===typeof r.onClick&&(e.onclick=Zr)}for(u in ve(n,r),n=null,a)if(!r.hasOwnProperty(u)&&a.hasOwnProperty(u)&&null!=a[u])if("style"===u){var s=a[u];for(o in s)s.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else"dangerouslySetInnerHTML"!==u&&"children"!==u&&"suppressContentEditableWarning"!==u&&"suppressHydrationWarning"!==u&&"autoFocus"!==u&&(l.hasOwnProperty(u)?i||(i=[]):(i=i||[]).push(u,null));for(u in r){var c=r[u];if(s=null!=a?a[u]:void 0,r.hasOwnProperty(u)&&c!==s&&(null!=c||null!=s))if("style"===u)if(s){for(o in s)!s.hasOwnProperty(o)||c&&c.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in c)c.hasOwnProperty(o)&&s[o]!==c[o]&&(n||(n={}),n[o]=c[o])}else n||(i||(i=[]),i.push(u,n)),n=c;else"dangerouslySetInnerHTML"===u?(c=c?c.__html:void 0,s=s?s.__html:void 0,null!=c&&s!==c&&(i=i||[]).push(u,c)):"children"===u?"string"!==typeof c&&"number"!==typeof c||(i=i||[]).push(u,""+c):"suppressContentEditableWarning"!==u&&"suppressHydrationWarning"!==u&&(l.hasOwnProperty(u)?(null!=c&&"onScroll"===u&&Lr("scroll",e),i||s===c||(i=[])):(i=i||[]).push(u,c))}n&&(i=i||[]).push("style",n);var u=i;(t.updateQueue=u)&&(t.flags|=4)}},Dl=function(e,t,n,r){n!==r&&(t.flags|=4)};var Ql=!1,Yl=!1,Jl="function"===typeof WeakSet?WeakSet:Set,Xl=null;function Zl(e,t){var n=e.ref;if(null!==n)if("function"===typeof n)try{n(null)}catch(r){Ec(e,t,r)}else n.current=null}function es(e,t,n){try{n()}catch(r){Ec(e,t,r)}}var ts=!1;function ns(e,t,n){var r=t.updateQueue;if(null!==(r=null!==r?r.lastEffect:null)){var a=r=r.next;do{if((a.tag&e)===e){var o=a.destroy;a.destroy=void 0,void 0!==o&&es(t,n,o)}a=a.next}while(a!==r)}}function rs(e,t){if(null!==(t=null!==(t=t.updateQueue)?t.lastEffect:null)){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function as(e){var t=e.ref;if(null!==t){var n=e.stateNode;e.tag,e=n,"function"===typeof t?t(e):t.current=e}}function os(e){var t=e.alternate;null!==t&&(e.alternate=null,os(t)),e.child=null,e.deletions=null,e.sibling=null,5===e.tag&&(null!==(t=e.stateNode)&&(delete t[fa],delete t[pa],delete t[ma],delete t[ba],delete t[ga])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function is(e){return 5===e.tag||3===e.tag||4===e.tag}function ls(e){e:for(;;){for(;null===e.sibling;){if(null===e.return||is(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;5!==e.tag&&6!==e.tag&&18!==e.tag;){if(2&e.flags)continue e;if(null===e.child||4===e.tag)continue e;e.child.return=e,e=e.child}if(!(2&e.flags))return e.stateNode}}function ss(e,t,n){var r=e.tag;if(5===r||6===r)e=e.stateNode,t?8===n.nodeType?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(8===n.nodeType?(t=n.parentNode).insertBefore(e,n):(t=n).appendChild(e),null!==(n=n._reactRootContainer)&&void 0!==n||null!==t.onclick||(t.onclick=Zr));else if(4!==r&&null!==(e=e.child))for(ss(e,t,n),e=e.sibling;null!==e;)ss(e,t,n),e=e.sibling}function cs(e,t,n){var r=e.tag;if(5===r||6===r)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(4!==r&&null!==(e=e.child))for(cs(e,t,n),e=e.sibling;null!==e;)cs(e,t,n),e=e.sibling}var us=null,ds=!1;function fs(e,t,n){for(n=n.child;null!==n;)ps(e,t,n),n=n.sibling}function ps(e,t,n){if(ot&&"function"===typeof ot.onCommitFiberUnmount)try{ot.onCommitFiberUnmount(at,n)}catch(l){}switch(n.tag){case 5:Yl||Zl(n,t);case 6:var r=us,a=ds;us=null,fs(e,t,n),ds=a,null!==(us=r)&&(ds?(e=us,n=n.stateNode,8===e.nodeType?e.parentNode.removeChild(n):e.removeChild(n)):us.removeChild(n.stateNode));break;case 18:null!==us&&(ds?(e=us,n=n.stateNode,8===e.nodeType?sa(e.parentNode,n):1===e.nodeType&&sa(e,n),Wt(e)):sa(us,n.stateNode));break;case 4:r=us,a=ds,us=n.stateNode.containerInfo,ds=!0,fs(e,t,n),us=r,ds=a;break;case 0:case 11:case 14:case 15:if(!Yl&&(null!==(r=n.updateQueue)&&null!==(r=r.lastEffect))){a=r=r.next;do{var o=a,i=o.destroy;o=o.tag,void 0!==i&&(0!==(2&o)||0!==(4&o))&&es(n,t,i),a=a.next}while(a!==r)}fs(e,t,n);break;case 1:if(!Yl&&(Zl(n,t),"function"===typeof(r=n.stateNode).componentWillUnmount))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){Ec(n,t,l)}fs(e,t,n);break;case 21:fs(e,t,n);break;case 22:1&n.mode?(Yl=(r=Yl)||null!==n.memoizedState,fs(e,t,n),Yl=r):fs(e,t,n);break;default:fs(e,t,n)}}function hs(e){var t=e.updateQueue;if(null!==t){e.updateQueue=null;var n=e.stateNode;null===n&&(n=e.stateNode=new Jl),t.forEach((function(t){var r=Oc.bind(null,e,t);n.has(t)||(n.add(t),t.then(r,r))}))}}function ms(e,t){var n=t.deletions;if(null!==n)for(var r=0;r<n.length;r++){var a=n[r];try{var i=e,l=t,s=l;e:for(;null!==s;){switch(s.tag){case 5:us=s.stateNode,ds=!1;break e;case 3:case 4:us=s.stateNode.containerInfo,ds=!0;break e}s=s.return}if(null===us)throw Error(o(160));ps(i,l,a),us=null,ds=!1;var c=a.alternate;null!==c&&(c.return=null),a.return=null}catch(u){Ec(a,t,u)}}if(12854&t.subtreeFlags)for(t=t.child;null!==t;)bs(t,e),t=t.sibling}function bs(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(ms(t,e),gs(e),4&r){try{ns(3,e,e.return),rs(3,e)}catch(b){Ec(e,e.return,b)}try{ns(5,e,e.return)}catch(b){Ec(e,e.return,b)}}break;case 1:ms(t,e),gs(e),512&r&&null!==n&&Zl(n,n.return);break;case 5:if(ms(t,e),gs(e),512&r&&null!==n&&Zl(n,n.return),32&e.flags){var a=e.stateNode;try{fe(a,"")}catch(b){Ec(e,e.return,b)}}if(4&r&&null!=(a=e.stateNode)){var i=e.memoizedProps,l=null!==n?n.memoizedProps:i,s=e.type,c=e.updateQueue;if(e.updateQueue=null,null!==c)try{"input"===s&&"radio"===i.type&&null!=i.name&&J(a,i),ye(s,l);var u=ye(s,i);for(l=0;l<c.length;l+=2){var d=c[l],f=c[l+1];"style"===d?be(a,f):"dangerouslySetInnerHTML"===d?de(a,f):"children"===d?fe(a,f):y(a,d,f,u)}switch(s){case"input":X(a,i);break;case"textarea":oe(a,i);break;case"select":var p=a._wrapperState.wasMultiple;a._wrapperState.wasMultiple=!!i.multiple;var h=i.value;null!=h?ne(a,!!i.multiple,h,!1):p!==!!i.multiple&&(null!=i.defaultValue?ne(a,!!i.multiple,i.defaultValue,!0):ne(a,!!i.multiple,i.multiple?[]:"",!1))}a[pa]=i}catch(b){Ec(e,e.return,b)}}break;case 6:if(ms(t,e),gs(e),4&r){if(null===e.stateNode)throw Error(o(162));a=e.stateNode,i=e.memoizedProps;try{a.nodeValue=i}catch(b){Ec(e,e.return,b)}}break;case 3:if(ms(t,e),gs(e),4&r&&null!==n&&n.memoizedState.isDehydrated)try{Wt(t.containerInfo)}catch(b){Ec(e,e.return,b)}break;case 4:default:ms(t,e),gs(e);break;case 13:ms(t,e),gs(e),8192&(a=e.child).flags&&(i=null!==a.memoizedState,a.stateNode.isHidden=i,!i||null!==a.alternate&&null!==a.alternate.memoizedState||(Bs=Je())),4&r&&hs(e);break;case 22:if(d=null!==n&&null!==n.memoizedState,1&e.mode?(Yl=(u=Yl)||d,ms(t,e),Yl=u):ms(t,e),gs(e),8192&r){if(u=null!==e.memoizedState,(e.stateNode.isHidden=u)&&!d&&0!==(1&e.mode))for(Xl=e,d=e.child;null!==d;){for(f=Xl=d;null!==Xl;){switch(h=(p=Xl).child,p.tag){case 0:case 11:case 14:case 15:ns(4,p,p.return);break;case 1:Zl(p,p.return);var m=p.stateNode;if("function"===typeof m.componentWillUnmount){r=p,n=p.return;try{t=r,m.props=t.memoizedProps,m.state=t.memoizedState,m.componentWillUnmount()}catch(b){Ec(r,n,b)}}break;case 5:Zl(p,p.return);break;case 22:if(null!==p.memoizedState){ws(f);continue}}null!==h?(h.return=p,Xl=h):ws(f)}d=d.sibling}e:for(d=null,f=e;;){if(5===f.tag){if(null===d){d=f;try{a=f.stateNode,u?"function"===typeof(i=a.style).setProperty?i.setProperty("display","none","important"):i.display="none":(s=f.stateNode,l=void 0!==(c=f.memoizedProps.style)&&null!==c&&c.hasOwnProperty("display")?c.display:null,s.style.display=me("display",l))}catch(b){Ec(e,e.return,b)}}}else if(6===f.tag){if(null===d)try{f.stateNode.nodeValue=u?"":f.memoizedProps}catch(b){Ec(e,e.return,b)}}else if((22!==f.tag&&23!==f.tag||null===f.memoizedState||f===e)&&null!==f.child){f.child.return=f,f=f.child;continue}if(f===e)break e;for(;null===f.sibling;){if(null===f.return||f.return===e)break e;d===f&&(d=null),f=f.return}d===f&&(d=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:ms(t,e),gs(e),4&r&&hs(e);case 21:}}function gs(e){var t=e.flags;if(2&t){try{e:{for(var n=e.return;null!==n;){if(is(n)){var r=n;break e}n=n.return}throw Error(o(160))}switch(r.tag){case 5:var a=r.stateNode;32&r.flags&&(fe(a,""),r.flags&=-33),cs(e,ls(e),a);break;case 3:case 4:var i=r.stateNode.containerInfo;ss(e,ls(e),i);break;default:throw Error(o(161))}}catch(l){Ec(e,e.return,l)}e.flags&=-3}4096&t&&(e.flags&=-4097)}function vs(e,t,n){Xl=e,ys(e,t,n)}function ys(e,t,n){for(var r=0!==(1&e.mode);null!==Xl;){var a=Xl,o=a.child;if(22===a.tag&&r){var i=null!==a.memoizedState||Ql;if(!i){var l=a.alternate,s=null!==l&&null!==l.memoizedState||Yl;l=Ql;var c=Yl;if(Ql=i,(Yl=s)&&!c)for(Xl=a;null!==Xl;)s=(i=Xl).child,22===i.tag&&null!==i.memoizedState?ks(a):null!==s?(s.return=i,Xl=s):ks(a);for(;null!==o;)Xl=o,ys(o,t,n),o=o.sibling;Xl=a,Ql=l,Yl=c}xs(e)}else 0!==(8772&a.subtreeFlags)&&null!==o?(o.return=a,Xl=o):xs(e)}}function xs(e){for(;null!==Xl;){var t=Xl;if(0!==(8772&t.flags)){var n=t.alternate;try{if(0!==(8772&t.flags))switch(t.tag){case 0:case 11:case 15:Yl||rs(5,t);break;case 1:var r=t.stateNode;if(4&t.flags&&!Yl)if(null===n)r.componentDidMount();else{var a=t.elementType===t.type?n.memoizedProps:nl(t.type,n.memoizedProps);r.componentDidUpdate(a,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;null!==i&&qo(t,i,r);break;case 3:var l=t.updateQueue;if(null!==l){if(n=null,null!==t.child)switch(t.child.tag){case 5:case 1:n=t.child.stateNode}qo(t,l,n)}break;case 5:var s=t.stateNode;if(null===n&&4&t.flags){n=s;var c=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&n.focus();break;case"img":c.src&&(n.src=c.src)}}break;case 6:case 4:case 12:case 19:case 17:case 21:case 22:case 23:case 25:break;case 13:if(null===t.memoizedState){var u=t.alternate;if(null!==u){var d=u.memoizedState;if(null!==d){var f=d.dehydrated;null!==f&&Wt(f)}}}break;default:throw Error(o(163))}Yl||512&t.flags&&as(t)}catch(p){Ec(t,t.return,p)}}if(t===e){Xl=null;break}if(null!==(n=t.sibling)){n.return=t.return,Xl=n;break}Xl=t.return}}function ws(e){for(;null!==Xl;){var t=Xl;if(t===e){Xl=null;break}var n=t.sibling;if(null!==n){n.return=t.return,Xl=n;break}Xl=t.return}}function ks(e){for(;null!==Xl;){var t=Xl;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{rs(4,t)}catch(s){Ec(t,n,s)}break;case 1:var r=t.stateNode;if("function"===typeof r.componentDidMount){var a=t.return;try{r.componentDidMount()}catch(s){Ec(t,a,s)}}var o=t.return;try{as(t)}catch(s){Ec(t,o,s)}break;case 5:var i=t.return;try{as(t)}catch(s){Ec(t,i,s)}}}catch(s){Ec(t,t.return,s)}if(t===e){Xl=null;break}var l=t.sibling;if(null!==l){l.return=t.return,Xl=l;break}Xl=t.return}}var Ss,Es=Math.ceil,js=x.ReactCurrentDispatcher,Cs=x.ReactCurrentOwner,_s=x.ReactCurrentBatchConfig,Os=0,Ps=null,As=null,zs=0,Ts=0,Ns=Ea(0),Ds=0,Fs=null,Is=0,Ms=0,Rs=0,Ls=null,$s=null,Bs=0,Ws=1/0,Vs=null,qs=!1,Us=null,Hs=null,Ks=!1,Gs=null,Qs=0,Ys=0,Js=null,Xs=-1,Zs=0;function ec(){return 0!==(6&Os)?Je():-1!==Xs?Xs:Xs=Je()}function tc(e){return 0===(1&e.mode)?1:0!==(2&Os)&&0!==zs?zs&-zs:null!==bo.transition?(0===Zs&&(Zs=mt()),Zs):0!==(e=yt)?e:e=void 0===(e=window.event)?16:Yt(e.type)}function nc(e,t,n,r){if(50<Ys)throw Ys=0,Js=null,Error(o(185));gt(e,n,r),0!==(2&Os)&&e===Ps||(e===Ps&&(0===(2&Os)&&(Ms|=n),4===Ds&&lc(e,zs)),rc(e,r),1===n&&0===Os&&0===(1&t.mode)&&(Ws=Je()+500,La&&Wa()))}function rc(e,t){var n=e.callbackNode;!function(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,a=e.expirationTimes,o=e.pendingLanes;0<o;){var i=31-it(o),l=1<<i,s=a[i];-1===s?0!==(l&n)&&0===(l&r)||(a[i]=pt(l,t)):s<=t&&(e.expiredLanes|=l),o&=~l}}(e,t);var r=ft(e,e===Ps?zs:0);if(0===r)null!==n&&Ge(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(null!=n&&Ge(n),1===t)0===e.tag?function(e){La=!0,Ba(e)}(sc.bind(null,e)):Ba(sc.bind(null,e)),ia((function(){0===(6&Os)&&Wa()})),n=null;else{switch(xt(r)){case 1:n=Ze;break;case 4:n=et;break;case 16:default:n=tt;break;case 536870912:n=rt}n=Pc(n,ac.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function ac(e,t){if(Xs=-1,Zs=0,0!==(6&Os))throw Error(o(327));var n=e.callbackNode;if(kc()&&e.callbackNode!==n)return null;var r=ft(e,e===Ps?zs:0);if(0===r)return null;if(0!==(30&r)||0!==(r&e.expiredLanes)||t)t=bc(e,r);else{t=r;var a=Os;Os|=2;var i=hc();for(Ps===e&&zs===t||(Vs=null,Ws=Je()+500,fc(e,t));;)try{vc();break}catch(s){pc(e,s)}_o(),js.current=i,Os=a,null!==As?t=0:(Ps=null,zs=0,t=Ds)}if(0!==t){if(2===t&&(0!==(a=ht(e))&&(r=a,t=oc(e,a))),1===t)throw n=Fs,fc(e,0),lc(e,r),rc(e,Je()),n;if(6===t)lc(e,r);else{if(a=e.current.alternate,0===(30&r)&&!function(e){for(var t=e;;){if(16384&t.flags){var n=t.updateQueue;if(null!==n&&null!==(n=n.stores))for(var r=0;r<n.length;r++){var a=n[r],o=a.getSnapshot;a=a.value;try{if(!lr(o(),a))return!1}catch(l){return!1}}}if(n=t.child,16384&t.subtreeFlags&&null!==n)n.return=t,t=n;else{if(t===e)break;for(;null===t.sibling;){if(null===t.return||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}(a)&&(2===(t=bc(e,r))&&(0!==(i=ht(e))&&(r=i,t=oc(e,i))),1===t))throw n=Fs,fc(e,0),lc(e,r),rc(e,Je()),n;switch(e.finishedWork=a,e.finishedLanes=r,t){case 0:case 1:throw Error(o(345));case 2:case 5:wc(e,$s,Vs);break;case 3:if(lc(e,r),(130023424&r)===r&&10<(t=Bs+500-Je())){if(0!==ft(e,0))break;if(((a=e.suspendedLanes)&r)!==r){ec(),e.pingedLanes|=e.suspendedLanes&a;break}e.timeoutHandle=ra(wc.bind(null,e,$s,Vs),t);break}wc(e,$s,Vs);break;case 4:if(lc(e,r),(4194240&r)===r)break;for(t=e.eventTimes,a=-1;0<r;){var l=31-it(r);i=1<<l,(l=t[l])>a&&(a=l),r&=~i}if(r=a,10<(r=(120>(r=Je()-r)?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Es(r/1960))-r)){e.timeoutHandle=ra(wc.bind(null,e,$s,Vs),r);break}wc(e,$s,Vs);break;default:throw Error(o(329))}}}return rc(e,Je()),e.callbackNode===n?ac.bind(null,e):null}function oc(e,t){var n=Ls;return e.current.memoizedState.isDehydrated&&(fc(e,t).flags|=256),2!==(e=bc(e,t))&&(t=$s,$s=n,null!==t&&ic(t)),e}function ic(e){null===$s?$s=e:$s.push.apply($s,e)}function lc(e,t){for(t&=~Rs,t&=~Ms,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-it(t),r=1<<n;e[n]=-1,t&=~r}}function sc(e){if(0!==(6&Os))throw Error(o(327));kc();var t=ft(e,0);if(0===(1&t))return rc(e,Je()),null;var n=bc(e,t);if(0!==e.tag&&2===n){var r=ht(e);0!==r&&(t=r,n=oc(e,r))}if(1===n)throw n=Fs,fc(e,0),lc(e,t),rc(e,Je()),n;if(6===n)throw Error(o(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,wc(e,$s,Vs),rc(e,Je()),null}function cc(e,t){var n=Os;Os|=1;try{return e(t)}finally{0===(Os=n)&&(Ws=Je()+500,La&&Wa())}}function uc(e){null!==Gs&&0===Gs.tag&&0===(6&Os)&&kc();var t=Os;Os|=1;var n=_s.transition,r=yt;try{if(_s.transition=null,yt=1,e)return e()}finally{yt=r,_s.transition=n,0===(6&(Os=t))&&Wa()}}function dc(){Ts=Ns.current,ja(Ns)}function fc(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(-1!==n&&(e.timeoutHandle=-1,aa(n)),null!==As)for(n=As.return;null!==n;){var r=n;switch(to(r),r.tag){case 1:null!==(r=r.type.childContextTypes)&&void 0!==r&&Na();break;case 3:Jo(),ja(Pa),ja(Oa),ri();break;case 5:Zo(r);break;case 4:Jo();break;case 13:case 19:ja(ei);break;case 10:Oo(r.type._context);break;case 22:case 23:dc()}n=n.return}if(Ps=e,As=e=Nc(e.current,null),zs=Ts=t,Ds=0,Fs=null,Rs=Ms=Is=0,$s=Ls=null,null!==To){for(t=0;t<To.length;t++)if(null!==(r=(n=To[t]).interleaved)){n.interleaved=null;var a=r.next,o=n.pending;if(null!==o){var i=o.next;o.next=a,r.next=i}n.pending=r}To=null}return e}function pc(e,t){for(;;){var n=As;try{if(_o(),ai.current=Xi,ui){for(var r=li.memoizedState;null!==r;){var a=r.queue;null!==a&&(a.pending=null),r=r.next}ui=!1}if(ii=0,ci=si=li=null,di=!1,fi=0,Cs.current=null,null===n||null===n.return){Ds=1,Fs=t,As=null;break}e:{var i=e,l=n.return,s=n,c=t;if(t=zs,s.flags|=32768,null!==c&&"object"===typeof c&&"function"===typeof c.then){var u=c,d=s,f=d.tag;if(0===(1&d.mode)&&(0===f||11===f||15===f)){var p=d.alternate;p?(d.updateQueue=p.updateQueue,d.memoizedState=p.memoizedState,d.lanes=p.lanes):(d.updateQueue=null,d.memoizedState=null)}var h=bl(l);if(null!==h){h.flags&=-257,gl(h,l,s,0,t),1&h.mode&&ml(i,u,t),c=u;var m=(t=h).updateQueue;if(null===m){var b=new Set;b.add(c),t.updateQueue=b}else m.add(c);break e}if(0===(1&t)){ml(i,u,t),mc();break e}c=Error(o(426))}else if(ao&&1&s.mode){var g=bl(l);if(null!==g){0===(65536&g.flags)&&(g.flags|=256),gl(g,l,s,0,t),mo(cl(c,s));break e}}i=c=cl(c,s),4!==Ds&&(Ds=2),null===Ls?Ls=[i]:Ls.push(i),i=l;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t,Wo(i,pl(0,c,t));break e;case 1:s=c;var v=i.type,y=i.stateNode;if(0===(128&i.flags)&&("function"===typeof v.getDerivedStateFromError||null!==y&&"function"===typeof y.componentDidCatch&&(null===Hs||!Hs.has(y)))){i.flags|=65536,t&=-t,i.lanes|=t,Wo(i,hl(i,s,t));break e}}i=i.return}while(null!==i)}xc(n)}catch(x){t=x,As===n&&null!==n&&(As=n=n.return);continue}break}}function hc(){var e=js.current;return js.current=Xi,null===e?Xi:e}function mc(){0!==Ds&&3!==Ds&&2!==Ds||(Ds=4),null===Ps||0===(268435455&Is)&&0===(268435455&Ms)||lc(Ps,zs)}function bc(e,t){var n=Os;Os|=2;var r=hc();for(Ps===e&&zs===t||(Vs=null,fc(e,t));;)try{gc();break}catch(a){pc(e,a)}if(_o(),Os=n,js.current=r,null!==As)throw Error(o(261));return Ps=null,zs=0,Ds}function gc(){for(;null!==As;)yc(As)}function vc(){for(;null!==As&&!Qe();)yc(As)}function yc(e){var t=Ss(e.alternate,e,Ts);e.memoizedProps=e.pendingProps,null===t?xc(e):As=t,Cs.current=null}function xc(e){var t=e;do{var n=t.alternate;if(e=t.return,0===(32768&t.flags)){if(null!==(n=Kl(n,t,Ts)))return void(As=n)}else{if(null!==(n=Gl(n,t)))return n.flags&=32767,void(As=n);if(null===e)return Ds=6,void(As=null);e.flags|=32768,e.subtreeFlags=0,e.deletions=null}if(null!==(t=t.sibling))return void(As=t);As=t=e}while(null!==t);0===Ds&&(Ds=5)}function wc(e,t,n){var r=yt,a=_s.transition;try{_s.transition=null,yt=1,function(e,t,n,r){do{kc()}while(null!==Gs);if(0!==(6&Os))throw Error(o(327));n=e.finishedWork;var a=e.finishedLanes;if(null===n)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(o(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(function(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var a=31-it(n),o=1<<a;t[a]=0,r[a]=-1,e[a]=-1,n&=~o}}(e,i),e===Ps&&(As=Ps=null,zs=0),0===(2064&n.subtreeFlags)&&0===(2064&n.flags)||Ks||(Ks=!0,Pc(tt,(function(){return kc(),null}))),i=0!==(15990&n.flags),0!==(15990&n.subtreeFlags)||i){i=_s.transition,_s.transition=null;var l=yt;yt=1;var s=Os;Os|=4,Cs.current=null,function(e,t){if(ea=qt,pr(e=fr())){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{var r=(n=(n=e.ownerDocument)&&n.defaultView||window).getSelection&&n.getSelection();if(r&&0!==r.rangeCount){n=r.anchorNode;var a=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch(w){n=null;break e}var l=0,s=-1,c=-1,u=0,d=0,f=e,p=null;t:for(;;){for(var h;f!==n||0!==a&&3!==f.nodeType||(s=l+a),f!==i||0!==r&&3!==f.nodeType||(c=l+r),3===f.nodeType&&(l+=f.nodeValue.length),null!==(h=f.firstChild);)p=f,f=h;for(;;){if(f===e)break t;if(p===n&&++u===a&&(s=l),p===i&&++d===r&&(c=l),null!==(h=f.nextSibling))break;p=(f=p).parentNode}f=h}n=-1===s||-1===c?null:{start:s,end:c}}else n=null}n=n||{start:0,end:0}}else n=null;for(ta={focusedElem:e,selectionRange:n},qt=!1,Xl=t;null!==Xl;)if(e=(t=Xl).child,0!==(1028&t.subtreeFlags)&&null!==e)e.return=t,Xl=e;else for(;null!==Xl;){t=Xl;try{var m=t.alternate;if(0!==(1024&t.flags))switch(t.tag){case 0:case 11:case 15:case 5:case 6:case 4:case 17:break;case 1:if(null!==m){var b=m.memoizedProps,g=m.memoizedState,v=t.stateNode,y=v.getSnapshotBeforeUpdate(t.elementType===t.type?b:nl(t.type,b),g);v.__reactInternalSnapshotBeforeUpdate=y}break;case 3:var x=t.stateNode.containerInfo;1===x.nodeType?x.textContent="":9===x.nodeType&&x.documentElement&&x.removeChild(x.documentElement);break;default:throw Error(o(163))}}catch(w){Ec(t,t.return,w)}if(null!==(e=t.sibling)){e.return=t.return,Xl=e;break}Xl=t.return}m=ts,ts=!1}(e,n),bs(n,e),hr(ta),qt=!!ea,ta=ea=null,e.current=n,vs(n,e,a),Ye(),Os=s,yt=l,_s.transition=i}else e.current=n;if(Ks&&(Ks=!1,Gs=e,Qs=a),i=e.pendingLanes,0===i&&(Hs=null),function(e){if(ot&&"function"===typeof ot.onCommitFiberRoot)try{ot.onCommitFiberRoot(at,e,void 0,128===(128&e.current.flags))}catch(t){}}(n.stateNode),rc(e,Je()),null!==t)for(r=e.onRecoverableError,n=0;n<t.length;n++)a=t[n],r(a.value,{componentStack:a.stack,digest:a.digest});if(qs)throw qs=!1,e=Us,Us=null,e;0!==(1&Qs)&&0!==e.tag&&kc(),i=e.pendingLanes,0!==(1&i)?e===Js?Ys++:(Ys=0,Js=e):Ys=0,Wa()}(e,t,n,r)}finally{_s.transition=a,yt=r}return null}function kc(){if(null!==Gs){var e=xt(Qs),t=_s.transition,n=yt;try{if(_s.transition=null,yt=16>e?16:e,null===Gs)var r=!1;else{if(e=Gs,Gs=null,Qs=0,0!==(6&Os))throw Error(o(331));var a=Os;for(Os|=4,Xl=e.current;null!==Xl;){var i=Xl,l=i.child;if(0!==(16&Xl.flags)){var s=i.deletions;if(null!==s){for(var c=0;c<s.length;c++){var u=s[c];for(Xl=u;null!==Xl;){var d=Xl;switch(d.tag){case 0:case 11:case 15:ns(8,d,i)}var f=d.child;if(null!==f)f.return=d,Xl=f;else for(;null!==Xl;){var p=(d=Xl).sibling,h=d.return;if(os(d),d===u){Xl=null;break}if(null!==p){p.return=h,Xl=p;break}Xl=h}}}var m=i.alternate;if(null!==m){var b=m.child;if(null!==b){m.child=null;do{var g=b.sibling;b.sibling=null,b=g}while(null!==b)}}Xl=i}}if(0!==(2064&i.subtreeFlags)&&null!==l)l.return=i,Xl=l;else e:for(;null!==Xl;){if(0!==(2048&(i=Xl).flags))switch(i.tag){case 0:case 11:case 15:ns(9,i,i.return)}var v=i.sibling;if(null!==v){v.return=i.return,Xl=v;break e}Xl=i.return}}var y=e.current;for(Xl=y;null!==Xl;){var x=(l=Xl).child;if(0!==(2064&l.subtreeFlags)&&null!==x)x.return=l,Xl=x;else e:for(l=y;null!==Xl;){if(0!==(2048&(s=Xl).flags))try{switch(s.tag){case 0:case 11:case 15:rs(9,s)}}catch(k){Ec(s,s.return,k)}if(s===l){Xl=null;break e}var w=s.sibling;if(null!==w){w.return=s.return,Xl=w;break e}Xl=s.return}}if(Os=a,Wa(),ot&&"function"===typeof ot.onPostCommitFiberRoot)try{ot.onPostCommitFiberRoot(at,e)}catch(k){}r=!0}return r}finally{yt=n,_s.transition=t}}return!1}function Sc(e,t,n){e=$o(e,t=pl(0,t=cl(n,t),1),1),t=ec(),null!==e&&(gt(e,1,t),rc(e,t))}function Ec(e,t,n){if(3===e.tag)Sc(e,e,n);else for(;null!==t;){if(3===t.tag){Sc(t,e,n);break}if(1===t.tag){var r=t.stateNode;if("function"===typeof t.type.getDerivedStateFromError||"function"===typeof r.componentDidCatch&&(null===Hs||!Hs.has(r))){t=$o(t,e=hl(t,e=cl(n,e),1),1),e=ec(),null!==t&&(gt(t,1,e),rc(t,e));break}}t=t.return}}function jc(e,t,n){var r=e.pingCache;null!==r&&r.delete(t),t=ec(),e.pingedLanes|=e.suspendedLanes&n,Ps===e&&(zs&n)===n&&(4===Ds||3===Ds&&(130023424&zs)===zs&&500>Je()-Bs?fc(e,0):Rs|=n),rc(e,t)}function Cc(e,t){0===t&&(0===(1&e.mode)?t=1:(t=ut,0===(130023424&(ut<<=1))&&(ut=4194304)));var n=ec();null!==(e=Fo(e,t))&&(gt(e,t,n),rc(e,n))}function _c(e){var t=e.memoizedState,n=0;null!==t&&(n=t.retryLane),Cc(e,n)}function Oc(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,a=e.memoizedState;null!==a&&(n=a.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(o(314))}null!==r&&r.delete(t),Cc(e,n)}function Pc(e,t){return Ke(e,t)}function Ac(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function zc(e,t,n,r){return new Ac(e,t,n,r)}function Tc(e){return!(!(e=e.prototype)||!e.isReactComponent)}function Nc(e,t){var n=e.alternate;return null===n?((n=zc(e.tag,t,e.key,e.mode)).elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=14680064&e.flags,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=null===t?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Dc(e,t,n,r,a,i){var l=2;if(r=e,"function"===typeof e)Tc(e)&&(l=1);else if("string"===typeof e)l=5;else e:switch(e){case S:return Fc(n.children,a,i,t);case E:l=8,a|=8;break;case j:return(e=zc(12,n,t,2|a)).elementType=j,e.lanes=i,e;case P:return(e=zc(13,n,t,a)).elementType=P,e.lanes=i,e;case A:return(e=zc(19,n,t,a)).elementType=A,e.lanes=i,e;case N:return Ic(n,a,i,t);default:if("object"===typeof e&&null!==e)switch(e.$$typeof){case C:l=10;break e;case _:l=9;break e;case O:l=11;break e;case z:l=14;break e;case T:l=16,r=null;break e}throw Error(o(130,null==e?e:typeof e,""))}return(t=zc(l,n,t,a)).elementType=e,t.type=r,t.lanes=i,t}function Fc(e,t,n,r){return(e=zc(7,e,r,t)).lanes=n,e}function Ic(e,t,n,r){return(e=zc(22,e,r,t)).elementType=N,e.lanes=n,e.stateNode={isHidden:!1},e}function Mc(e,t,n){return(e=zc(6,e,null,t)).lanes=n,e}function Rc(e,t,n){return(t=zc(4,null!==e.children?e.children:[],e.key,t)).lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Lc(e,t,n,r,a){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=bt(0),this.expirationTimes=bt(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=bt(0),this.identifierPrefix=r,this.onRecoverableError=a,this.mutableSourceEagerHydrationData=null}function $c(e,t,n,r,a,o,i,l,s){return e=new Lc(e,t,n,l,s),1===t?(t=1,!0===o&&(t|=8)):t=0,o=zc(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Mo(o),e}function Bc(e){if(!e)return _a;e:{if(We(e=e._reactInternals)!==e||1!==e.tag)throw Error(o(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Ta(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(null!==t);throw Error(o(171))}if(1===e.tag){var n=e.type;if(Ta(n))return Fa(e,n,t)}return t}function Wc(e,t,n,r,a,o,i,l,s){return(e=$c(n,r,!0,e,0,o,0,l,s)).context=Bc(null),n=e.current,(o=Lo(r=ec(),a=tc(n))).callback=void 0!==t&&null!==t?t:null,$o(n,o,a),e.current.lanes=a,gt(e,a,r),rc(e,r),e}function Vc(e,t,n,r){var a=t.current,o=ec(),i=tc(a);return n=Bc(n),null===t.context?t.context=n:t.pendingContext=n,(t=Lo(o,i)).payload={element:e},null!==(r=void 0===r?null:r)&&(t.callback=r),null!==(e=$o(a,t,i))&&(nc(e,a,i,o),Bo(e,a,i)),i}function qc(e){return(e=e.current).child?(e.child.tag,e.child.stateNode):null}function Uc(e,t){if(null!==(e=e.memoizedState)&&null!==e.dehydrated){var n=e.retryLane;e.retryLane=0!==n&&n<t?n:t}}function Hc(e,t){Uc(e,t),(e=e.alternate)&&Uc(e,t)}Ss=function(e,t,n){if(null!==e)if(e.memoizedProps!==t.pendingProps||Pa.current)yl=!0;else{if(0===(e.lanes&n)&&0===(128&t.flags))return yl=!1,function(e,t,n){switch(t.tag){case 3:Pl(t),ho();break;case 5:Xo(t);break;case 1:Ta(t.type)&&Ia(t);break;case 4:Yo(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,a=t.memoizedProps.value;Ca(So,r._currentValue),r._currentValue=a;break;case 13:if(null!==(r=t.memoizedState))return null!==r.dehydrated?(Ca(ei,1&ei.current),t.flags|=128,null):0!==(n&t.child.childLanes)?Ml(e,t,n):(Ca(ei,1&ei.current),null!==(e=ql(e,t,n))?e.sibling:null);Ca(ei,1&ei.current);break;case 19:if(r=0!==(n&t.childLanes),0!==(128&e.flags)){if(r)return Wl(e,t,n);t.flags|=128}if(null!==(a=t.memoizedState)&&(a.rendering=null,a.tail=null,a.lastEffect=null),Ca(ei,ei.current),r)break;return null;case 22:case 23:return t.lanes=0,El(e,t,n)}return ql(e,t,n)}(e,t,n);yl=0!==(131072&e.flags)}else yl=!1,ao&&0!==(1048576&t.flags)&&Za(t,Ha,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Vl(e,t),e=t.pendingProps;var a=za(t,Oa.current);Ao(t,n),a=bi(null,t,r,e,a,n);var i=gi();return t.flags|=1,"object"===typeof a&&null!==a&&"function"===typeof a.render&&void 0===a.$$typeof?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Ta(r)?(i=!0,Ia(t)):i=!1,t.memoizedState=null!==a.state&&void 0!==a.state?a.state:null,Mo(t),a.updater=al,t.stateNode=a,a._reactInternals=t,sl(t,r,e,n),t=Ol(null,t,r,!0,i,n)):(t.tag=0,ao&&i&&eo(t),xl(null,t,a,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Vl(e,t),e=t.pendingProps,r=(a=r._init)(r._payload),t.type=r,a=t.tag=function(e){if("function"===typeof e)return Tc(e)?1:0;if(void 0!==e&&null!==e){if((e=e.$$typeof)===O)return 11;if(e===z)return 14}return 2}(r),e=nl(r,e),a){case 0:t=Cl(null,t,r,e,n);break e;case 1:t=_l(null,t,r,e,n);break e;case 11:t=wl(null,t,r,e,n);break e;case 14:t=kl(null,t,r,nl(r.type,e),n);break e}throw Error(o(306,r,""))}return t;case 0:return r=t.type,a=t.pendingProps,Cl(e,t,r,a=t.elementType===r?a:nl(r,a),n);case 1:return r=t.type,a=t.pendingProps,_l(e,t,r,a=t.elementType===r?a:nl(r,a),n);case 3:e:{if(Pl(t),null===e)throw Error(o(387));r=t.pendingProps,a=(i=t.memoizedState).element,Ro(e,t),Vo(t,r,null,n);var l=t.memoizedState;if(r=l.element,i.isDehydrated){if(i={element:r,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=i,t.memoizedState=i,256&t.flags){t=Al(e,t,r,n,a=cl(Error(o(423)),t));break e}if(r!==a){t=Al(e,t,r,n,a=cl(Error(o(424)),t));break e}for(ro=ca(t.stateNode.containerInfo.firstChild),no=t,ao=!0,oo=null,n=ko(t,null,r,n),t.child=n;n;)n.flags=-3&n.flags|4096,n=n.sibling}else{if(ho(),r===a){t=ql(e,t,n);break e}xl(e,t,r,n)}t=t.child}return t;case 5:return Xo(t),null===e&&co(t),r=t.type,a=t.pendingProps,i=null!==e?e.memoizedProps:null,l=a.children,na(r,a)?l=null:null!==i&&na(r,i)&&(t.flags|=32),jl(e,t),xl(e,t,l,n),t.child;case 6:return null===e&&co(t),null;case 13:return Ml(e,t,n);case 4:return Yo(t,t.stateNode.containerInfo),r=t.pendingProps,null===e?t.child=wo(t,null,r,n):xl(e,t,r,n),t.child;case 11:return r=t.type,a=t.pendingProps,wl(e,t,r,a=t.elementType===r?a:nl(r,a),n);case 7:return xl(e,t,t.pendingProps,n),t.child;case 8:case 12:return xl(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,a=t.pendingProps,i=t.memoizedProps,l=a.value,Ca(So,r._currentValue),r._currentValue=l,null!==i)if(lr(i.value,l)){if(i.children===a.children&&!Pa.current){t=ql(e,t,n);break e}}else for(null!==(i=t.child)&&(i.return=t);null!==i;){var s=i.dependencies;if(null!==s){l=i.child;for(var c=s.firstContext;null!==c;){if(c.context===r){if(1===i.tag){(c=Lo(-1,n&-n)).tag=2;var u=i.updateQueue;if(null!==u){var d=(u=u.shared).pending;null===d?c.next=c:(c.next=d.next,d.next=c),u.pending=c}}i.lanes|=n,null!==(c=i.alternate)&&(c.lanes|=n),Po(i.return,n,t),s.lanes|=n;break}c=c.next}}else if(10===i.tag)l=i.type===t.type?null:i.child;else if(18===i.tag){if(null===(l=i.return))throw Error(o(341));l.lanes|=n,null!==(s=l.alternate)&&(s.lanes|=n),Po(l,n,t),l=i.sibling}else l=i.child;if(null!==l)l.return=i;else for(l=i;null!==l;){if(l===t){l=null;break}if(null!==(i=l.sibling)){i.return=l.return,l=i;break}l=l.return}i=l}xl(e,t,a.children,n),t=t.child}return t;case 9:return a=t.type,r=t.pendingProps.children,Ao(t,n),r=r(a=zo(a)),t.flags|=1,xl(e,t,r,n),t.child;case 14:return a=nl(r=t.type,t.pendingProps),kl(e,t,r,a=nl(r.type,a),n);case 15:return Sl(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,a=t.pendingProps,a=t.elementType===r?a:nl(r,a),Vl(e,t),t.tag=1,Ta(r)?(e=!0,Ia(t)):e=!1,Ao(t,n),il(t,r,a),sl(t,r,a,n),Ol(null,t,r,!0,e,n);case 19:return Wl(e,t,n);case 22:return El(e,t,n)}throw Error(o(156,t.tag))};var Kc="function"===typeof reportError?reportError:function(e){console.error(e)};function Gc(e){this._internalRoot=e}function Qc(e){this._internalRoot=e}function Yc(e){return!(!e||1!==e.nodeType&&9!==e.nodeType&&11!==e.nodeType)}function Jc(e){return!(!e||1!==e.nodeType&&9!==e.nodeType&&11!==e.nodeType&&(8!==e.nodeType||" react-mount-point-unstable "!==e.nodeValue))}function Xc(){}function Zc(e,t,n,r,a){var o=n._reactRootContainer;if(o){var i=o;if("function"===typeof a){var l=a;a=function(){var e=qc(i);l.call(e)}}Vc(t,i,e,a)}else i=function(e,t,n,r,a){if(a){if("function"===typeof r){var o=r;r=function(){var e=qc(i);o.call(e)}}var i=Wc(t,r,e,0,null,!1,0,"",Xc);return e._reactRootContainer=i,e[ha]=i.current,Wr(8===e.nodeType?e.parentNode:e),uc(),i}for(;a=e.lastChild;)e.removeChild(a);if("function"===typeof r){var l=r;r=function(){var e=qc(s);l.call(e)}}var s=$c(e,0,!1,null,0,!1,0,"",Xc);return e._reactRootContainer=s,e[ha]=s.current,Wr(8===e.nodeType?e.parentNode:e),uc((function(){Vc(t,s,n,r)})),s}(n,t,e,a,r);return qc(i)}Qc.prototype.render=Gc.prototype.render=function(e){var t=this._internalRoot;if(null===t)throw Error(o(409));Vc(e,t,null,null)},Qc.prototype.unmount=Gc.prototype.unmount=function(){var e=this._internalRoot;if(null!==e){this._internalRoot=null;var t=e.containerInfo;uc((function(){Vc(null,e,null,null)})),t[ha]=null}},Qc.prototype.unstable_scheduleHydration=function(e){if(e){var t=Et();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Nt.length&&0!==t&&t<Nt[n].priority;n++);Nt.splice(n,0,e),0===n&&Mt(e)}},wt=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=dt(t.pendingLanes);0!==n&&(vt(t,1|n),rc(t,Je()),0===(6&Os)&&(Ws=Je()+500,Wa()))}break;case 13:uc((function(){var t=Fo(e,1);if(null!==t){var n=ec();nc(t,e,1,n)}})),Hc(e,1)}},kt=function(e){if(13===e.tag){var t=Fo(e,134217728);if(null!==t)nc(t,e,134217728,ec());Hc(e,134217728)}},St=function(e){if(13===e.tag){var t=tc(e),n=Fo(e,t);if(null!==n)nc(n,e,t,ec());Hc(e,t)}},Et=function(){return yt},jt=function(e,t){var n=yt;try{return yt=e,t()}finally{yt=n}},ke=function(e,t,n){switch(t){case"input":if(X(e,n),t=n.name,"radio"===n.type&&null!=t){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var a=wa(r);if(!a)throw Error(o(90));K(r),X(r,a)}}}break;case"textarea":oe(e,n);break;case"select":null!=(t=n.value)&&ne(e,!!n.multiple,t,!1)}},Oe=cc,Pe=uc;var eu={usingClientEntryPoint:!1,Events:[ya,xa,wa,Ce,_e,cc]},tu={findFiberByHostInstance:va,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},nu={bundleType:tu.bundleType,version:tu.version,rendererPackageName:tu.rendererPackageName,rendererConfig:tu.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:x.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return null===(e=Ue(e))?null:e.stateNode},findFiberByHostInstance:tu.findFiberByHostInstance||function(){return null},findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if("undefined"!==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__){var ru=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ru.isDisabled&&ru.supportsFiber)try{at=ru.inject(nu),ot=ru}catch(ue){}}t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=eu,t.createPortal=function(e,t){var n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;if(!Yc(t))throw Error(o(200));return function(e,t,n){var r=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return{$$typeof:k,key:null==r?null:""+r,children:e,containerInfo:t,implementation:n}}(e,t,null,n)},t.createRoot=function(e,t){if(!Yc(e))throw Error(o(299));var n=!1,r="",a=Kc;return null!==t&&void 0!==t&&(!0===t.unstable_strictMode&&(n=!0),void 0!==t.identifierPrefix&&(r=t.identifierPrefix),void 0!==t.onRecoverableError&&(a=t.onRecoverableError)),t=$c(e,1,!1,null,0,n,0,r,a),e[ha]=t.current,Wr(8===e.nodeType?e.parentNode:e),new Gc(t)},t.findDOMNode=function(e){if(null==e)return null;if(1===e.nodeType)return e;var t=e._reactInternals;if(void 0===t){if("function"===typeof e.render)throw Error(o(188));throw e=Object.keys(e).join(","),Error(o(268,e))}return e=null===(e=Ue(t))?null:e.stateNode},t.flushSync=function(e){return uc(e)},t.hydrate=function(e,t,n){if(!Jc(t))throw Error(o(200));return Zc(null,e,t,!0,n)},t.hydrateRoot=function(e,t,n){if(!Yc(e))throw Error(o(405));var r=null!=n&&n.hydratedSources||null,a=!1,i="",l=Kc;if(null!==n&&void 0!==n&&(!0===n.unstable_strictMode&&(a=!0),void 0!==n.identifierPrefix&&(i=n.identifierPrefix),void 0!==n.onRecoverableError&&(l=n.onRecoverableError)),t=Wc(t,null,e,1,null!=n?n:null,a,0,i,l),e[ha]=t.current,Wr(e),r)for(e=0;e<r.length;e++)a=(a=(n=r[e])._getVersion)(n._source),null==t.mutableSourceEagerHydrationData?t.mutableSourceEagerHydrationData=[n,a]:t.mutableSourceEagerHydrationData.push(n,a);return new Qc(t)},t.render=function(e,t,n){if(!Jc(t))throw Error(o(200));return Zc(null,e,t,!1,n)},t.unmountComponentAtNode=function(e){if(!Jc(e))throw Error(o(40));return!!e._reactRootContainer&&(uc((function(){Zc(null,null,e,!1,(function(){e._reactRootContainer=null,e[ha]=null}))})),!0)},t.unstable_batchedUpdates=cc,t.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Jc(n))throw Error(o(200));if(null==e||void 0===e._reactInternals)throw Error(o(38));return Zc(e,t,n,!1,r)},t.version="18.3.1-next-f1338f8080-20240426"},403:e=>{e.exports=function(e,t,n,r){var a=n?n.call(r,e,t):void 0;if(void 0!==a)return!!a;if(e===t)return!0;if("object"!==typeof e||!e||"object"!==typeof t||!t)return!1;var o=Object.keys(e),i=Object.keys(t);if(o.length!==i.length)return!1;for(var l=Object.prototype.hasOwnProperty.bind(t),s=0;s<o.length;s++){var c=o[s];if(!l(c))return!1;var u=e[c],d=t[c];if(!1===(a=n?n.call(r,u,d,c):void 0)||void 0===a&&u!==d)return!1}return!0}},414:(e,t,n)=>{"use strict";e.exports=n(654)},654:(e,t,n)=>{"use strict";var r=n(950),a=Symbol.for("react.element"),o=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,l=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,n){var r,o={},c=null,u=null;for(r in void 0!==n&&(c=""+n),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(u=t.ref),t)i.call(t,r)&&!s.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===o[r]&&(o[r]=t[r]);return{$$typeof:a,type:e,key:c,ref:u,props:o,_owner:l.current}}t.Fragment=o,t.jsx=c,t.jsxs=c},761:(e,t)=>{"use strict";function n(e,t){var n=e.length;e.push(t);e:for(;0<n;){var r=n-1>>>1,a=e[r];if(!(0<o(a,t)))break e;e[r]=t,e[n]=a,n=r}}function r(e){return 0===e.length?null:e[0]}function a(e){if(0===e.length)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;e:for(var r=0,a=e.length,i=a>>>1;r<i;){var l=2*(r+1)-1,s=e[l],c=l+1,u=e[c];if(0>o(s,n))c<a&&0>o(u,s)?(e[r]=u,e[c]=n,r=c):(e[r]=s,e[l]=n,r=l);else{if(!(c<a&&0>o(u,n)))break e;e[r]=u,e[c]=n,r=c}}}return t}function o(e,t){var n=e.sortIndex-t.sortIndex;return 0!==n?n:e.id-t.id}if("object"===typeof performance&&"function"===typeof performance.now){var i=performance;t.unstable_now=function(){return i.now()}}else{var l=Date,s=l.now();t.unstable_now=function(){return l.now()-s}}var c=[],u=[],d=1,f=null,p=3,h=!1,m=!1,b=!1,g="function"===typeof setTimeout?setTimeout:null,v="function"===typeof clearTimeout?clearTimeout:null,y="undefined"!==typeof setImmediate?setImmediate:null;function x(e){for(var t=r(u);null!==t;){if(null===t.callback)a(u);else{if(!(t.startTime<=e))break;a(u),t.sortIndex=t.expirationTime,n(c,t)}t=r(u)}}function w(e){if(b=!1,x(e),!m)if(null!==r(c))m=!0,N(k);else{var t=r(u);null!==t&&D(w,t.startTime-e)}}function k(e,n){m=!1,b&&(b=!1,v(C),C=-1),h=!0;var o=p;try{for(x(n),f=r(c);null!==f&&(!(f.expirationTime>n)||e&&!P());){var i=f.callback;if("function"===typeof i){f.callback=null,p=f.priorityLevel;var l=i(f.expirationTime<=n);n=t.unstable_now(),"function"===typeof l?f.callback=l:f===r(c)&&a(c),x(n)}else a(c);f=r(c)}if(null!==f)var s=!0;else{var d=r(u);null!==d&&D(w,d.startTime-n),s=!1}return s}finally{f=null,p=o,h=!1}}"undefined"!==typeof navigator&&void 0!==navigator.scheduling&&void 0!==navigator.scheduling.isInputPending&&navigator.scheduling.isInputPending.bind(navigator.scheduling);var S,E=!1,j=null,C=-1,_=5,O=-1;function P(){return!(t.unstable_now()-O<_)}function A(){if(null!==j){var e=t.unstable_now();O=e;var n=!0;try{n=j(!0,e)}finally{n?S():(E=!1,j=null)}}else E=!1}if("function"===typeof y)S=function(){y(A)};else if("undefined"!==typeof MessageChannel){var z=new MessageChannel,T=z.port2;z.port1.onmessage=A,S=function(){T.postMessage(null)}}else S=function(){g(A,0)};function N(e){j=e,E||(E=!0,S())}function D(e,n){C=g((function(){e(t.unstable_now())}),n)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(e){e.callback=null},t.unstable_continueExecution=function(){m||h||(m=!0,N(k))},t.unstable_forceFrameRate=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):_=0<e?Math.floor(1e3/e):5},t.unstable_getCurrentPriorityLevel=function(){return p},t.unstable_getFirstCallbackNode=function(){return r(c)},t.unstable_next=function(e){switch(p){case 1:case 2:case 3:var t=3;break;default:t=p}var n=p;p=t;try{return e()}finally{p=n}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=p;p=e;try{return t()}finally{p=n}},t.unstable_scheduleCallback=function(e,a,o){var i=t.unstable_now();switch("object"===typeof o&&null!==o?o="number"===typeof(o=o.delay)&&0<o?i+o:i:o=i,e){case 1:var l=-1;break;case 2:l=250;break;case 5:l=1073741823;break;case 4:l=1e4;break;default:l=5e3}return e={id:d++,callback:a,priorityLevel:e,startTime:o,expirationTime:l=o+l,sortIndex:-1},o>i?(e.sortIndex=o,n(u,e),null===r(c)&&e===r(u)&&(b?(v(C),C=-1):b=!0,D(w,o-i))):(e.sortIndex=l,n(c,e),m||h||(m=!0,N(k))),e},t.unstable_shouldYield=P,t.unstable_wrapCallback=function(e){var t=p;return function(){var n=p;p=t;try{return e.apply(this,arguments)}finally{p=n}}}},795:function(e,t,n){var r;e.exports=(r=n(950),function(e){var t={};function n(r){if(t[r])return t[r].exports;var a=t[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,n),a.l=!0,a.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(r,a,function(t){return e[t]}.bind(null,a));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=48)}([function(e,t){e.exports=r},function(e,t){var n=e.exports={version:"2.6.12"};"number"==typeof __e&&(__e=n)},function(e,t,n){var r=n(26)("wks"),a=n(17),o=n(3).Symbol,i="function"==typeof o;(e.exports=function(e){return r[e]||(r[e]=i&&o[e]||(i?o:a)("Symbol."+e))}).store=r},function(e,t){var n=e.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},function(e,t,n){e.exports=!n(8)((function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a}))},function(e,t){var n={}.hasOwnProperty;e.exports=function(e,t){return n.call(e,t)}},function(e,t,n){var r=n(7),a=n(16);e.exports=n(4)?function(e,t,n){return r.f(e,t,a(1,n))}:function(e,t,n){return e[t]=n,e}},function(e,t,n){var r=n(10),a=n(35),o=n(23),i=Object.defineProperty;t.f=n(4)?Object.defineProperty:function(e,t,n){if(r(e),t=o(t,!0),r(n),a)try{return i(e,t,n)}catch(e){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(e[t]=n.value),e}},function(e,t){e.exports=function(e){try{return!!e()}catch(e){return!0}}},function(e,t,n){var r=n(40),a=n(22);e.exports=function(e){return r(a(e))}},function(e,t,n){var r=n(11);e.exports=function(e){if(!r(e))throw TypeError(e+" is not an object!");return e}},function(e,t){e.exports=function(e){return"object"==typeof e?null!==e:"function"==typeof e}},function(e,t){e.exports={}},function(e,t,n){var r=n(39),a=n(27);e.exports=Object.keys||function(e){return r(e,a)}},function(e,t){e.exports=!0},function(e,t,n){var r=n(3),a=n(1),o=n(53),i=n(6),l=n(5),s=function(e,t,n){var c,u,d,f=e&s.F,p=e&s.G,h=e&s.S,m=e&s.P,b=e&s.B,g=e&s.W,v=p?a:a[t]||(a[t]={}),y=v.prototype,x=p?r:h?r[t]:(r[t]||{}).prototype;for(c in p&&(n=t),n)(u=!f&&x&&void 0!==x[c])&&l(v,c)||(d=u?x[c]:n[c],v[c]=p&&"function"!=typeof x[c]?n[c]:b&&u?o(d,r):g&&x[c]==d?function(e){var t=function(t,n,r){if(this instanceof e){switch(arguments.length){case 0:return new e;case 1:return new e(t);case 2:return new e(t,n)}return new e(t,n,r)}return e.apply(this,arguments)};return t.prototype=e.prototype,t}(d):m&&"function"==typeof d?o(Function.call,d):d,m&&((v.virtual||(v.virtual={}))[c]=d,e&s.R&&y&&!y[c]&&i(y,c,d)))};s.F=1,s.G=2,s.S=4,s.P=8,s.B=16,s.W=32,s.U=64,s.R=128,e.exports=s},function(e,t){e.exports=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}}},function(e,t){var n=0,r=Math.random();e.exports=function(e){return"Symbol(".concat(void 0===e?"":e,")_",(++n+r).toString(36))}},function(e,t,n){var r=n(22);e.exports=function(e){return Object(r(e))}},function(e,t){t.f={}.propertyIsEnumerable},function(e,t,n){"use strict";var r=n(52)(!0);n(34)(String,"String",(function(e){this._t=String(e),this._i=0}),(function(){var e,t=this._t,n=this._i;return n>=t.length?{value:void 0,done:!0}:(e=r(t,n),this._i+=e.length,{value:e,done:!1})}))},function(e,t){var n=Math.ceil,r=Math.floor;e.exports=function(e){return isNaN(e=+e)?0:(e>0?r:n)(e)}},function(e,t){e.exports=function(e){if(null==e)throw TypeError("Can't call method on  "+e);return e}},function(e,t,n){var r=n(11);e.exports=function(e,t){if(!r(e))return e;var n,a;if(t&&"function"==typeof(n=e.toString)&&!r(a=n.call(e)))return a;if("function"==typeof(n=e.valueOf)&&!r(a=n.call(e)))return a;if(!t&&"function"==typeof(n=e.toString)&&!r(a=n.call(e)))return a;throw TypeError("Can't convert object to primitive value")}},function(e,t){var n={}.toString;e.exports=function(e){return n.call(e).slice(8,-1)}},function(e,t,n){var r=n(26)("keys"),a=n(17);e.exports=function(e){return r[e]||(r[e]=a(e))}},function(e,t,n){var r=n(1),a=n(3),o=a["__core-js_shared__"]||(a["__core-js_shared__"]={});(e.exports=function(e,t){return o[e]||(o[e]=void 0!==t?t:{})})("versions",[]).push({version:r.version,mode:n(14)?"pure":"global",copyright:"\xa9 2020 Denis Pushkarev (zloirock.ru)"})},function(e,t){e.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(e,t,n){var r=n(7).f,a=n(5),o=n(2)("toStringTag");e.exports=function(e,t,n){e&&!a(e=n?e:e.prototype,o)&&r(e,o,{configurable:!0,value:t})}},function(e,t,n){n(62);for(var r=n(3),a=n(6),o=n(12),i=n(2)("toStringTag"),l="CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(","),s=0;s<l.length;s++){var c=l[s],u=r[c],d=u&&u.prototype;d&&!d[i]&&a(d,i,c),o[c]=o.Array}},function(e,t,n){t.f=n(2)},function(e,t,n){var r=n(3),a=n(1),o=n(14),i=n(30),l=n(7).f;e.exports=function(e){var t=a.Symbol||(a.Symbol=o?{}:r.Symbol||{});"_"==e.charAt(0)||e in t||l(t,e,{value:i.f(e)})}},function(e,t){t.f=Object.getOwnPropertySymbols},function(e,t){e.exports=function(e,t,n){return Math.min(Math.max(e,t),n)}},function(e,t,n){"use strict";var r=n(14),a=n(15),o=n(37),i=n(6),l=n(12),s=n(55),c=n(28),u=n(61),d=n(2)("iterator"),f=!([].keys&&"next"in[].keys()),p=function(){return this};e.exports=function(e,t,n,h,m,b,g){s(n,t,h);var v,y,x,w=function(e){if(!f&&e in j)return j[e];switch(e){case"keys":case"values":return function(){return new n(this,e)}}return function(){return new n(this,e)}},k=t+" Iterator",S="values"==m,E=!1,j=e.prototype,C=j[d]||j["@@iterator"]||m&&j[m],_=C||w(m),O=m?S?w("entries"):_:void 0,P="Array"==t&&j.entries||C;if(P&&(x=u(P.call(new e)))!==Object.prototype&&x.next&&(c(x,k,!0),r||"function"==typeof x[d]||i(x,d,p)),S&&C&&"values"!==C.name&&(E=!0,_=function(){return C.call(this)}),r&&!g||!f&&!E&&j[d]||i(j,d,_),l[t]=_,l[k]=p,m)if(v={values:S?_:w("values"),keys:b?_:w("keys"),entries:O},g)for(y in v)y in j||o(j,y,v[y]);else a(a.P+a.F*(f||E),t,v);return v}},function(e,t,n){e.exports=!n(4)&&!n(8)((function(){return 7!=Object.defineProperty(n(36)("div"),"a",{get:function(){return 7}}).a}))},function(e,t,n){var r=n(11),a=n(3).document,o=r(a)&&r(a.createElement);e.exports=function(e){return o?a.createElement(e):{}}},function(e,t,n){e.exports=n(6)},function(e,t,n){var r=n(10),a=n(56),o=n(27),i=n(25)("IE_PROTO"),l=function(){},s=function(){var e,t=n(36)("iframe"),r=o.length;for(t.style.display="none",n(60).appendChild(t),t.src="javascript:",(e=t.contentWindow.document).open(),e.write("<script>document.F=Object<\/script>"),e.close(),s=e.F;r--;)delete s.prototype[o[r]];return s()};e.exports=Object.create||function(e,t){var n;return null!==e?(l.prototype=r(e),n=new l,l.prototype=null,n[i]=e):n=s(),void 0===t?n:a(n,t)}},function(e,t,n){var r=n(5),a=n(9),o=n(57)(!1),i=n(25)("IE_PROTO");e.exports=function(e,t){var n,l=a(e),s=0,c=[];for(n in l)n!=i&&r(l,n)&&c.push(n);for(;t.length>s;)r(l,n=t[s++])&&(~o(c,n)||c.push(n));return c}},function(e,t,n){var r=n(24);e.exports=Object("z").propertyIsEnumerable(0)?Object:function(e){return"String"==r(e)?e.split(""):Object(e)}},function(e,t,n){var r=n(39),a=n(27).concat("length","prototype");t.f=Object.getOwnPropertyNames||function(e){return r(e,a)}},function(e,t,n){var r=n(24),a=n(2)("toStringTag"),o="Arguments"==r(function(){return arguments}());e.exports=function(e){var t,n,i;return void 0===e?"Undefined":null===e?"Null":"string"==typeof(n=function(e,t){try{return e[t]}catch(e){}}(t=Object(e),a))?n:o?r(t):"Object"==(i=r(t))&&"function"==typeof t.callee?"Arguments":i}},function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(e){"object"==typeof window&&(n=window)}e.exports=n},function(e,t){var n=/-?\d+(\.\d+)?%?/g;e.exports=function(e){return e.match(n)}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getBase16Theme=t.createStyling=t.invertTheme=void 0;var r=p(n(49)),a=p(n(76)),o=p(n(81)),i=p(n(89)),l=p(n(93)),s=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(n(94)),c=p(n(132)),u=p(n(133)),d=p(n(138)),f=n(139);function p(e){return e&&e.__esModule?e:{default:e}}var h=s.default,m=(0,i.default)(h),b=(0,d.default)(u.default,f.rgb2yuv,(function(e){var t,n=(0,o.default)(e,3);return[(t=n[0],t<.25?1:t<.5?.9-t:1.1-t),n[1],n[2]]}),f.yuv2rgb,c.default),g=function(e){return function(t){return{className:[t.className,e.className].filter(Boolean).join(" "),style:(0,a.default)({},t.style||{},e.style||{})}}},v=function(e,t){var n=(0,i.default)(t);for(var o in e)-1===n.indexOf(o)&&n.push(o);return n.reduce((function(n,o){return n[o]=function(e,t){if(void 0===e)return t;if(void 0===t)return e;var n=void 0===e?"undefined":(0,r.default)(e),o=void 0===t?"undefined":(0,r.default)(t);switch(n){case"string":switch(o){case"string":return[t,e].filter(Boolean).join(" ");case"object":return g({className:e,style:t});case"function":return function(n){for(var r=arguments.length,a=Array(r>1?r-1:0),o=1;o<r;o++)a[o-1]=arguments[o];return g({className:e})(t.apply(void 0,[n].concat(a)))}}case"object":switch(o){case"string":return g({className:t,style:e});case"object":return(0,a.default)({},t,e);case"function":return function(n){for(var r=arguments.length,a=Array(r>1?r-1:0),o=1;o<r;o++)a[o-1]=arguments[o];return g({style:e})(t.apply(void 0,[n].concat(a)))}}case"function":switch(o){case"string":return function(n){for(var r=arguments.length,a=Array(r>1?r-1:0),o=1;o<r;o++)a[o-1]=arguments[o];return e.apply(void 0,[g(n)({className:t})].concat(a))};case"object":return function(n){for(var r=arguments.length,a=Array(r>1?r-1:0),o=1;o<r;o++)a[o-1]=arguments[o];return e.apply(void 0,[g(n)({style:t})].concat(a))};case"function":return function(n){for(var r=arguments.length,a=Array(r>1?r-1:0),o=1;o<r;o++)a[o-1]=arguments[o];return e.apply(void 0,[t.apply(void 0,[n].concat(a))].concat(a))}}}}(e[o],t[o]),n}),{})},y=function(e,t){for(var n=arguments.length,o=Array(n>2?n-2:0),l=2;l<n;l++)o[l-2]=arguments[l];if(null===t)return e;Array.isArray(t)||(t=[t]);var s=t.map((function(t){return e[t]})).filter(Boolean).reduce((function(e,t){return"string"==typeof t?e.className=[e.className,t].filter(Boolean).join(" "):"object"===(void 0===t?"undefined":(0,r.default)(t))?e.style=(0,a.default)({},e.style,t):"function"==typeof t&&(e=(0,a.default)({},e,t.apply(void 0,[e].concat(o)))),e}),{className:"",style:{}});return s.className||delete s.className,0===(0,i.default)(s.style).length&&delete s.style,s},x=t.invertTheme=function(e){return(0,i.default)(e).reduce((function(t,n){return t[n]=/^base/.test(n)?b(e[n]):"scheme"===n?e[n]+":inverted":e[n],t}),{})},w=(t.createStyling=(0,l.default)((function(e){for(var t=arguments.length,n=Array(t>3?t-3:0),r=3;r<t;r++)n[r-3]=arguments[r];var o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},c=o.defaultBase16,u=void 0===c?h:c,d=o.base16Themes,f=w(s,void 0===d?null:d);f&&(s=(0,a.default)({},f,s));var p=m.reduce((function(e,t){return e[t]=s[t]||u[t],e}),{}),b=(0,i.default)(s).reduce((function(e,t){return-1===m.indexOf(t)?(e[t]=s[t],e):e}),{}),g=e(p),x=v(b,g);return(0,l.default)(y,2).apply(void 0,[x].concat(n))}),3),t.getBase16Theme=function(e,t){if(e&&e.extend&&(e=e.extend),"string"==typeof e){var n=e.split(":"),r=(0,o.default)(n,2),a=r[0],i=r[1];e=(t||{})[a]||s[a],"inverted"===i&&(e=x(e))}return e&&e.hasOwnProperty("base00")?e:void 0})},function(e,t,n){"use strict";var r,a="object"==typeof Reflect?Reflect:null,o=a&&"function"==typeof a.apply?a.apply:function(e,t,n){return Function.prototype.apply.call(e,t,n)};r=a&&"function"==typeof a.ownKeys?a.ownKeys:Object.getOwnPropertySymbols?function(e){return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))}:function(e){return Object.getOwnPropertyNames(e)};var i=Number.isNaN||function(e){return e!=e};function l(){l.init.call(this)}e.exports=l,e.exports.once=function(e,t){return new Promise((function(n,r){function a(){void 0!==o&&e.removeListener("error",o),n([].slice.call(arguments))}var o;"error"!==t&&(o=function(n){e.removeListener(t,a),r(n)},e.once("error",o)),e.once(t,a)}))},l.EventEmitter=l,l.prototype._events=void 0,l.prototype._eventsCount=0,l.prototype._maxListeners=void 0;var s=10;function c(e){if("function"!=typeof e)throw new TypeError('The "listener" argument must be of type Function. Received type '+typeof e)}function u(e){return void 0===e._maxListeners?l.defaultMaxListeners:e._maxListeners}function d(e,t,n,r){var a,o,i,l;if(c(n),void 0===(o=e._events)?(o=e._events=Object.create(null),e._eventsCount=0):(void 0!==o.newListener&&(e.emit("newListener",t,n.listener?n.listener:n),o=e._events),i=o[t]),void 0===i)i=o[t]=n,++e._eventsCount;else if("function"==typeof i?i=o[t]=r?[n,i]:[i,n]:r?i.unshift(n):i.push(n),(a=u(e))>0&&i.length>a&&!i.warned){i.warned=!0;var s=new Error("Possible EventEmitter memory leak detected. "+i.length+" "+String(t)+" listeners added. Use emitter.setMaxListeners() to increase limit");s.name="MaxListenersExceededWarning",s.emitter=e,s.type=t,s.count=i.length,l=s,console&&console.warn&&console.warn(l)}return e}function f(){if(!this.fired)return this.target.removeListener(this.type,this.wrapFn),this.fired=!0,0===arguments.length?this.listener.call(this.target):this.listener.apply(this.target,arguments)}function p(e,t,n){var r={fired:!1,wrapFn:void 0,target:e,type:t,listener:n},a=f.bind(r);return a.listener=n,r.wrapFn=a,a}function h(e,t,n){var r=e._events;if(void 0===r)return[];var a=r[t];return void 0===a?[]:"function"==typeof a?n?[a.listener||a]:[a]:n?function(e){for(var t=new Array(e.length),n=0;n<t.length;++n)t[n]=e[n].listener||e[n];return t}(a):b(a,a.length)}function m(e){var t=this._events;if(void 0!==t){var n=t[e];if("function"==typeof n)return 1;if(void 0!==n)return n.length}return 0}function b(e,t){for(var n=new Array(t),r=0;r<t;++r)n[r]=e[r];return n}Object.defineProperty(l,"defaultMaxListeners",{enumerable:!0,get:function(){return s},set:function(e){if("number"!=typeof e||e<0||i(e))throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received '+e+".");s=e}}),l.init=function(){void 0!==this._events&&this._events!==Object.getPrototypeOf(this)._events||(this._events=Object.create(null),this._eventsCount=0),this._maxListeners=this._maxListeners||void 0},l.prototype.setMaxListeners=function(e){if("number"!=typeof e||e<0||i(e))throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received '+e+".");return this._maxListeners=e,this},l.prototype.getMaxListeners=function(){return u(this)},l.prototype.emit=function(e){for(var t=[],n=1;n<arguments.length;n++)t.push(arguments[n]);var r="error"===e,a=this._events;if(void 0!==a)r=r&&void 0===a.error;else if(!r)return!1;if(r){var i;if(t.length>0&&(i=t[0]),i instanceof Error)throw i;var l=new Error("Unhandled error."+(i?" ("+i.message+")":""));throw l.context=i,l}var s=a[e];if(void 0===s)return!1;if("function"==typeof s)o(s,this,t);else{var c=s.length,u=b(s,c);for(n=0;n<c;++n)o(u[n],this,t)}return!0},l.prototype.addListener=function(e,t){return d(this,e,t,!1)},l.prototype.on=l.prototype.addListener,l.prototype.prependListener=function(e,t){return d(this,e,t,!0)},l.prototype.once=function(e,t){return c(t),this.on(e,p(this,e,t)),this},l.prototype.prependOnceListener=function(e,t){return c(t),this.prependListener(e,p(this,e,t)),this},l.prototype.removeListener=function(e,t){var n,r,a,o,i;if(c(t),void 0===(r=this._events))return this;if(void 0===(n=r[e]))return this;if(n===t||n.listener===t)0==--this._eventsCount?this._events=Object.create(null):(delete r[e],r.removeListener&&this.emit("removeListener",e,n.listener||t));else if("function"!=typeof n){for(a=-1,o=n.length-1;o>=0;o--)if(n[o]===t||n[o].listener===t){i=n[o].listener,a=o;break}if(a<0)return this;0===a?n.shift():function(e,t){for(;t+1<e.length;t++)e[t]=e[t+1];e.pop()}(n,a),1===n.length&&(r[e]=n[0]),void 0!==r.removeListener&&this.emit("removeListener",e,i||t)}return this},l.prototype.off=l.prototype.removeListener,l.prototype.removeAllListeners=function(e){var t,n,r;if(void 0===(n=this._events))return this;if(void 0===n.removeListener)return 0===arguments.length?(this._events=Object.create(null),this._eventsCount=0):void 0!==n[e]&&(0==--this._eventsCount?this._events=Object.create(null):delete n[e]),this;if(0===arguments.length){var a,o=Object.keys(n);for(r=0;r<o.length;++r)"removeListener"!==(a=o[r])&&this.removeAllListeners(a);return this.removeAllListeners("removeListener"),this._events=Object.create(null),this._eventsCount=0,this}if("function"==typeof(t=n[e]))this.removeListener(e,t);else if(void 0!==t)for(r=t.length-1;r>=0;r--)this.removeListener(e,t[r]);return this},l.prototype.listeners=function(e){return h(this,e,!0)},l.prototype.rawListeners=function(e){return h(this,e,!1)},l.listenerCount=function(e,t){return"function"==typeof e.listenerCount?e.listenerCount(t):m.call(e,t)},l.prototype.listenerCount=m,l.prototype.eventNames=function(){return this._eventsCount>0?r(this._events):[]}},function(e,t,n){e.exports.Dispatcher=n(140)},function(e,t,n){e.exports=n(142)},function(e,t,n){"use strict";t.__esModule=!0;var r=i(n(50)),a=i(n(65)),o="function"==typeof a.default&&"symbol"==typeof r.default?function(e){return typeof e}:function(e){return e&&"function"==typeof a.default&&e.constructor===a.default&&e!==a.default.prototype?"symbol":typeof e};function i(e){return e&&e.__esModule?e:{default:e}}t.default="function"==typeof a.default&&"symbol"===o(r.default)?function(e){return void 0===e?"undefined":o(e)}:function(e){return e&&"function"==typeof a.default&&e.constructor===a.default&&e!==a.default.prototype?"symbol":void 0===e?"undefined":o(e)}},function(e,t,n){e.exports={default:n(51),__esModule:!0}},function(e,t,n){n(20),n(29),e.exports=n(30).f("iterator")},function(e,t,n){var r=n(21),a=n(22);e.exports=function(e){return function(t,n){var o,i,l=String(a(t)),s=r(n),c=l.length;return s<0||s>=c?e?"":void 0:(o=l.charCodeAt(s))<55296||o>56319||s+1===c||(i=l.charCodeAt(s+1))<56320||i>57343?e?l.charAt(s):o:e?l.slice(s,s+2):i-56320+(o-55296<<10)+65536}}},function(e,t,n){var r=n(54);e.exports=function(e,t,n){if(r(e),void 0===t)return e;switch(n){case 1:return function(n){return e.call(t,n)};case 2:return function(n,r){return e.call(t,n,r)};case 3:return function(n,r,a){return e.call(t,n,r,a)}}return function(){return e.apply(t,arguments)}}},function(e,t){e.exports=function(e){if("function"!=typeof e)throw TypeError(e+" is not a function!");return e}},function(e,t,n){"use strict";var r=n(38),a=n(16),o=n(28),i={};n(6)(i,n(2)("iterator"),(function(){return this})),e.exports=function(e,t,n){e.prototype=r(i,{next:a(1,n)}),o(e,t+" Iterator")}},function(e,t,n){var r=n(7),a=n(10),o=n(13);e.exports=n(4)?Object.defineProperties:function(e,t){a(e);for(var n,i=o(t),l=i.length,s=0;l>s;)r.f(e,n=i[s++],t[n]);return e}},function(e,t,n){var r=n(9),a=n(58),o=n(59);e.exports=function(e){return function(t,n,i){var l,s=r(t),c=a(s.length),u=o(i,c);if(e&&n!=n){for(;c>u;)if((l=s[u++])!=l)return!0}else for(;c>u;u++)if((e||u in s)&&s[u]===n)return e||u||0;return!e&&-1}}},function(e,t,n){var r=n(21),a=Math.min;e.exports=function(e){return e>0?a(r(e),9007199254740991):0}},function(e,t,n){var r=n(21),a=Math.max,o=Math.min;e.exports=function(e,t){return(e=r(e))<0?a(e+t,0):o(e,t)}},function(e,t,n){var r=n(3).document;e.exports=r&&r.documentElement},function(e,t,n){var r=n(5),a=n(18),o=n(25)("IE_PROTO"),i=Object.prototype;e.exports=Object.getPrototypeOf||function(e){return e=a(e),r(e,o)?e[o]:"function"==typeof e.constructor&&e instanceof e.constructor?e.constructor.prototype:e instanceof Object?i:null}},function(e,t,n){"use strict";var r=n(63),a=n(64),o=n(12),i=n(9);e.exports=n(34)(Array,"Array",(function(e,t){this._t=i(e),this._i=0,this._k=t}),(function(){var e=this._t,t=this._k,n=this._i++;return!e||n>=e.length?(this._t=void 0,a(1)):a(0,"keys"==t?n:"values"==t?e[n]:[n,e[n]])}),"values"),o.Arguments=o.Array,r("keys"),r("values"),r("entries")},function(e,t){e.exports=function(){}},function(e,t){e.exports=function(e,t){return{value:t,done:!!e}}},function(e,t,n){e.exports={default:n(66),__esModule:!0}},function(e,t,n){n(67),n(73),n(74),n(75),e.exports=n(1).Symbol},function(e,t,n){"use strict";var r=n(3),a=n(5),o=n(4),i=n(15),l=n(37),s=n(68).KEY,c=n(8),u=n(26),d=n(28),f=n(17),p=n(2),h=n(30),m=n(31),b=n(69),g=n(70),v=n(10),y=n(11),x=n(18),w=n(9),k=n(23),S=n(16),E=n(38),j=n(71),C=n(72),_=n(32),O=n(7),P=n(13),A=C.f,z=O.f,T=j.f,N=r.Symbol,D=r.JSON,F=D&&D.stringify,I=p("_hidden"),M=p("toPrimitive"),R={}.propertyIsEnumerable,L=u("symbol-registry"),$=u("symbols"),B=u("op-symbols"),W=Object.prototype,V="function"==typeof N&&!!_.f,q=r.QObject,U=!q||!q.prototype||!q.prototype.findChild,H=o&&c((function(){return 7!=E(z({},"a",{get:function(){return z(this,"a",{value:7}).a}})).a}))?function(e,t,n){var r=A(W,t);r&&delete W[t],z(e,t,n),r&&e!==W&&z(W,t,r)}:z,K=function(e){var t=$[e]=E(N.prototype);return t._k=e,t},G=V&&"symbol"==typeof N.iterator?function(e){return"symbol"==typeof e}:function(e){return e instanceof N},Q=function(e,t,n){return e===W&&Q(B,t,n),v(e),t=k(t,!0),v(n),a($,t)?(n.enumerable?(a(e,I)&&e[I][t]&&(e[I][t]=!1),n=E(n,{enumerable:S(0,!1)})):(a(e,I)||z(e,I,S(1,{})),e[I][t]=!0),H(e,t,n)):z(e,t,n)},Y=function(e,t){v(e);for(var n,r=b(t=w(t)),a=0,o=r.length;o>a;)Q(e,n=r[a++],t[n]);return e},J=function(e){var t=R.call(this,e=k(e,!0));return!(this===W&&a($,e)&&!a(B,e))&&(!(t||!a(this,e)||!a($,e)||a(this,I)&&this[I][e])||t)},X=function(e,t){if(e=w(e),t=k(t,!0),e!==W||!a($,t)||a(B,t)){var n=A(e,t);return!n||!a($,t)||a(e,I)&&e[I][t]||(n.enumerable=!0),n}},Z=function(e){for(var t,n=T(w(e)),r=[],o=0;n.length>o;)a($,t=n[o++])||t==I||t==s||r.push(t);return r},ee=function(e){for(var t,n=e===W,r=T(n?B:w(e)),o=[],i=0;r.length>i;)!a($,t=r[i++])||n&&!a(W,t)||o.push($[t]);return o};V||(l((N=function(){if(this instanceof N)throw TypeError("Symbol is not a constructor!");var e=f(arguments.length>0?arguments[0]:void 0),t=function(n){this===W&&t.call(B,n),a(this,I)&&a(this[I],e)&&(this[I][e]=!1),H(this,e,S(1,n))};return o&&U&&H(W,e,{configurable:!0,set:t}),K(e)}).prototype,"toString",(function(){return this._k})),C.f=X,O.f=Q,n(41).f=j.f=Z,n(19).f=J,_.f=ee,o&&!n(14)&&l(W,"propertyIsEnumerable",J,!0),h.f=function(e){return K(p(e))}),i(i.G+i.W+i.F*!V,{Symbol:N});for(var te="hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),ne=0;te.length>ne;)p(te[ne++]);for(var re=P(p.store),ae=0;re.length>ae;)m(re[ae++]);i(i.S+i.F*!V,"Symbol",{for:function(e){return a(L,e+="")?L[e]:L[e]=N(e)},keyFor:function(e){if(!G(e))throw TypeError(e+" is not a symbol!");for(var t in L)if(L[t]===e)return t},useSetter:function(){U=!0},useSimple:function(){U=!1}}),i(i.S+i.F*!V,"Object",{create:function(e,t){return void 0===t?E(e):Y(E(e),t)},defineProperty:Q,defineProperties:Y,getOwnPropertyDescriptor:X,getOwnPropertyNames:Z,getOwnPropertySymbols:ee});var oe=c((function(){_.f(1)}));i(i.S+i.F*oe,"Object",{getOwnPropertySymbols:function(e){return _.f(x(e))}}),D&&i(i.S+i.F*(!V||c((function(){var e=N();return"[null]"!=F([e])||"{}"!=F({a:e})||"{}"!=F(Object(e))}))),"JSON",{stringify:function(e){for(var t,n,r=[e],a=1;arguments.length>a;)r.push(arguments[a++]);if(n=t=r[1],(y(t)||void 0!==e)&&!G(e))return g(t)||(t=function(e,t){if("function"==typeof n&&(t=n.call(this,e,t)),!G(t))return t}),r[1]=t,F.apply(D,r)}}),N.prototype[M]||n(6)(N.prototype,M,N.prototype.valueOf),d(N,"Symbol"),d(Math,"Math",!0),d(r.JSON,"JSON",!0)},function(e,t,n){var r=n(17)("meta"),a=n(11),o=n(5),i=n(7).f,l=0,s=Object.isExtensible||function(){return!0},c=!n(8)((function(){return s(Object.preventExtensions({}))})),u=function(e){i(e,r,{value:{i:"O"+ ++l,w:{}}})},d=e.exports={KEY:r,NEED:!1,fastKey:function(e,t){if(!a(e))return"symbol"==typeof e?e:("string"==typeof e?"S":"P")+e;if(!o(e,r)){if(!s(e))return"F";if(!t)return"E";u(e)}return e[r].i},getWeak:function(e,t){if(!o(e,r)){if(!s(e))return!0;if(!t)return!1;u(e)}return e[r].w},onFreeze:function(e){return c&&d.NEED&&s(e)&&!o(e,r)&&u(e),e}}},function(e,t,n){var r=n(13),a=n(32),o=n(19);e.exports=function(e){var t=r(e),n=a.f;if(n)for(var i,l=n(e),s=o.f,c=0;l.length>c;)s.call(e,i=l[c++])&&t.push(i);return t}},function(e,t,n){var r=n(24);e.exports=Array.isArray||function(e){return"Array"==r(e)}},function(e,t,n){var r=n(9),a=n(41).f,o={}.toString,i="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[];e.exports.f=function(e){return i&&"[object Window]"==o.call(e)?function(e){try{return a(e)}catch(e){return i.slice()}}(e):a(r(e))}},function(e,t,n){var r=n(19),a=n(16),o=n(9),i=n(23),l=n(5),s=n(35),c=Object.getOwnPropertyDescriptor;t.f=n(4)?c:function(e,t){if(e=o(e),t=i(t,!0),s)try{return c(e,t)}catch(e){}if(l(e,t))return a(!r.f.call(e,t),e[t])}},function(e,t){},function(e,t,n){n(31)("asyncIterator")},function(e,t,n){n(31)("observable")},function(e,t,n){"use strict";t.__esModule=!0;var r,a=(r=n(77))&&r.__esModule?r:{default:r};t.default=a.default||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}},function(e,t,n){e.exports={default:n(78),__esModule:!0}},function(e,t,n){n(79),e.exports=n(1).Object.assign},function(e,t,n){var r=n(15);r(r.S+r.F,"Object",{assign:n(80)})},function(e,t,n){"use strict";var r=n(4),a=n(13),o=n(32),i=n(19),l=n(18),s=n(40),c=Object.assign;e.exports=!c||n(8)((function(){var e={},t={},n=Symbol(),r="abcdefghijklmnopqrst";return e[n]=7,r.split("").forEach((function(e){t[e]=e})),7!=c({},e)[n]||Object.keys(c({},t)).join("")!=r}))?function(e,t){for(var n=l(e),c=arguments.length,u=1,d=o.f,f=i.f;c>u;)for(var p,h=s(arguments[u++]),m=d?a(h).concat(d(h)):a(h),b=m.length,g=0;b>g;)p=m[g++],r&&!f.call(h,p)||(n[p]=h[p]);return n}:c},function(e,t,n){"use strict";t.__esModule=!0;var r=o(n(82)),a=o(n(85));function o(e){return e&&e.__esModule?e:{default:e}}t.default=function(e,t){if(Array.isArray(e))return e;if((0,r.default)(Object(e)))return function(e,t){var n=[],r=!0,o=!1,i=void 0;try{for(var l,s=(0,a.default)(e);!(r=(l=s.next()).done)&&(n.push(l.value),!t||n.length!==t);r=!0);}catch(e){o=!0,i=e}finally{try{!r&&s.return&&s.return()}finally{if(o)throw i}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}},function(e,t,n){e.exports={default:n(83),__esModule:!0}},function(e,t,n){n(29),n(20),e.exports=n(84)},function(e,t,n){var r=n(42),a=n(2)("iterator"),o=n(12);e.exports=n(1).isIterable=function(e){var t=Object(e);return void 0!==t[a]||"@@iterator"in t||o.hasOwnProperty(r(t))}},function(e,t,n){e.exports={default:n(86),__esModule:!0}},function(e,t,n){n(29),n(20),e.exports=n(87)},function(e,t,n){var r=n(10),a=n(88);e.exports=n(1).getIterator=function(e){var t=a(e);if("function"!=typeof t)throw TypeError(e+" is not iterable!");return r(t.call(e))}},function(e,t,n){var r=n(42),a=n(2)("iterator"),o=n(12);e.exports=n(1).getIteratorMethod=function(e){if(null!=e)return e[a]||e["@@iterator"]||o[r(e)]}},function(e,t,n){e.exports={default:n(90),__esModule:!0}},function(e,t,n){n(91),e.exports=n(1).Object.keys},function(e,t,n){var r=n(18),a=n(13);n(92)("keys",(function(){return function(e){return a(r(e))}}))},function(e,t,n){var r=n(15),a=n(1),o=n(8);e.exports=function(e,t){var n=(a.Object||{})[e]||Object[e],i={};i[e]=t(n),r(r.S+r.F*o((function(){n(1)})),"Object",i)}},function(e,t,n){(function(t){var n=[["ary",128],["bind",1],["bindKey",2],["curry",8],["curryRight",16],["flip",512],["partial",32],["partialRight",64],["rearg",256]],r=/^\s+|\s+$/g,a=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,o=/\{\n\/\* \[wrapped with (.+)\] \*/,i=/,? & /,l=/^[-+]0x[0-9a-f]+$/i,s=/^0b[01]+$/i,c=/^\[object .+?Constructor\]$/,u=/^0o[0-7]+$/i,d=/^(?:0|[1-9]\d*)$/,f=parseInt,p="object"==typeof t&&t&&t.Object===Object&&t,h="object"==typeof self&&self&&self.Object===Object&&self,m=p||h||Function("return this")();function b(e,t,n){switch(n.length){case 0:return e.call(t);case 1:return e.call(t,n[0]);case 2:return e.call(t,n[0],n[1]);case 3:return e.call(t,n[0],n[1],n[2])}return e.apply(t,n)}function g(e,t){return!(!e||!e.length)&&function(e,t,n){if(t!=t)return function(e,t,n,r){for(var a=e.length,o=n+(r?1:-1);r?o--:++o<a;)if(t(e[o],o,e))return o;return-1}(e,v,n);for(var r=n-1,a=e.length;++r<a;)if(e[r]===t)return r;return-1}(e,t,0)>-1}function v(e){return e!=e}function y(e,t){for(var n=e.length,r=0;n--;)e[n]===t&&r++;return r}function x(e,t){for(var n=-1,r=e.length,a=0,o=[];++n<r;){var i=e[n];i!==t&&"__lodash_placeholder__"!==i||(e[n]="__lodash_placeholder__",o[a++]=n)}return o}var w,k,S,E=Function.prototype,j=Object.prototype,C=m["__core-js_shared__"],_=(w=/[^.]+$/.exec(C&&C.keys&&C.keys.IE_PROTO||""))?"Symbol(src)_1."+w:"",O=E.toString,P=j.hasOwnProperty,A=j.toString,z=RegExp("^"+O.call(P).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),T=Object.create,N=Math.max,D=Math.min,F=(k=U(Object,"defineProperty"),(S=U.name)&&S.length>2?k:void 0);function I(e){return Z(e)?T(e):{}}function M(e){return!(!Z(e)||function(e){return!!_&&_ in e}(e))&&(function(e){var t=Z(e)?A.call(e):"";return"[object Function]"==t||"[object GeneratorFunction]"==t}(e)||function(e){var t=!1;if(null!=e&&"function"!=typeof e.toString)try{t=!!(e+"")}catch(e){}return t}(e)?z:c).test(function(e){if(null!=e){try{return O.call(e)}catch(e){}try{return e+""}catch(e){}}return""}(e))}function R(e,t,n,r){for(var a=-1,o=e.length,i=n.length,l=-1,s=t.length,c=N(o-i,0),u=Array(s+c),d=!r;++l<s;)u[l]=t[l];for(;++a<i;)(d||a<o)&&(u[n[a]]=e[a]);for(;c--;)u[l++]=e[a++];return u}function L(e,t,n,r){for(var a=-1,o=e.length,i=-1,l=n.length,s=-1,c=t.length,u=N(o-l,0),d=Array(u+c),f=!r;++a<u;)d[a]=e[a];for(var p=a;++s<c;)d[p+s]=t[s];for(;++i<l;)(f||a<o)&&(d[p+n[i]]=e[a++]);return d}function $(e){return function(){var t=arguments;switch(t.length){case 0:return new e;case 1:return new e(t[0]);case 2:return new e(t[0],t[1]);case 3:return new e(t[0],t[1],t[2]);case 4:return new e(t[0],t[1],t[2],t[3]);case 5:return new e(t[0],t[1],t[2],t[3],t[4]);case 6:return new e(t[0],t[1],t[2],t[3],t[4],t[5]);case 7:return new e(t[0],t[1],t[2],t[3],t[4],t[5],t[6])}var n=I(e.prototype),r=e.apply(n,t);return Z(r)?r:n}}function B(e,t,n,r,a,o,i,l,s,c){var u=128&t,d=1&t,f=2&t,p=24&t,h=512&t,b=f?void 0:$(e);return function g(){for(var v=arguments.length,w=Array(v),k=v;k--;)w[k]=arguments[k];if(p)var S=q(g),E=y(w,S);if(r&&(w=R(w,r,a,p)),o&&(w=L(w,o,i,p)),v-=E,p&&v<c){var j=x(w,S);return W(e,t,B,g.placeholder,n,w,j,l,s,c-v)}var C=d?n:this,_=f?C[e]:e;return v=w.length,l?w=Q(w,l):h&&v>1&&w.reverse(),u&&s<v&&(w.length=s),this&&this!==m&&this instanceof g&&(_=b||$(_)),_.apply(C,w)}}function W(e,t,n,r,a,o,i,l,s,c){var u=8&t;t|=u?32:64,4&(t&=~(u?64:32))||(t&=-4);var d=n(e,t,a,u?o:void 0,u?i:void 0,u?void 0:o,u?void 0:i,l,s,c);return d.placeholder=r,Y(d,e,t)}function V(e,t,n,r,a,o,i,l){var s=2&t;if(!s&&"function"!=typeof e)throw new TypeError("Expected a function");var c=r?r.length:0;if(c||(t&=-97,r=a=void 0),i=void 0===i?i:N(te(i),0),l=void 0===l?l:te(l),c-=a?a.length:0,64&t){var u=r,d=a;r=a=void 0}var f=[e,t,n,r,a,u,d,o,i,l];if(e=f[0],t=f[1],n=f[2],r=f[3],a=f[4],!(l=f[9]=null==f[9]?s?0:e.length:N(f[9]-c,0))&&24&t&&(t&=-25),t&&1!=t)p=8==t||16==t?function(e,t,n){var r=$(e);return function a(){for(var o=arguments.length,i=Array(o),l=o,s=q(a);l--;)i[l]=arguments[l];var c=o<3&&i[0]!==s&&i[o-1]!==s?[]:x(i,s);return(o-=c.length)<n?W(e,t,B,a.placeholder,void 0,i,c,void 0,void 0,n-o):b(this&&this!==m&&this instanceof a?r:e,this,i)}}(e,t,l):32!=t&&33!=t||a.length?B.apply(void 0,f):function(e,t,n,r){var a=1&t,o=$(e);return function t(){for(var i=-1,l=arguments.length,s=-1,c=r.length,u=Array(c+l),d=this&&this!==m&&this instanceof t?o:e;++s<c;)u[s]=r[s];for(;l--;)u[s++]=arguments[++i];return b(d,a?n:this,u)}}(e,t,n,r);else var p=function(e,t,n){var r=1&t,a=$(e);return function t(){return(this&&this!==m&&this instanceof t?a:e).apply(r?n:this,arguments)}}(e,t,n);return Y(p,e,t)}function q(e){return e.placeholder}function U(e,t){var n=function(e,t){return null==e?void 0:e[t]}(e,t);return M(n)?n:void 0}function H(e){var t=e.match(o);return t?t[1].split(i):[]}function K(e,t){var n=t.length,r=n-1;return t[r]=(n>1?"& ":"")+t[r],t=t.join(n>2?", ":" "),e.replace(a,"{\n/* [wrapped with "+t+"] */\n")}function G(e,t){return!!(t=null==t?9007199254740991:t)&&("number"==typeof e||d.test(e))&&e>-1&&e%1==0&&e<t}function Q(e,t){for(var n=e.length,r=D(t.length,n),a=function(e,t){var n=-1,r=e.length;for(t||(t=Array(r));++n<r;)t[n]=e[n];return t}(e);r--;){var o=t[r];e[r]=G(o,n)?a[o]:void 0}return e}var Y=F?function(e,t,n){var r,a=t+"";return F(e,"toString",{configurable:!0,enumerable:!1,value:(r=K(a,J(H(a),n)),function(){return r})})}:function(e){return e};function J(e,t){return function(e,t){for(var n=-1,r=e?e.length:0;++n<r&&!1!==t(e[n],n,e););}(n,(function(n){var r="_."+n[0];t&n[1]&&!g(e,r)&&e.push(r)})),e.sort()}function X(e,t,n){var r=V(e,8,void 0,void 0,void 0,void 0,void 0,t=n?void 0:t);return r.placeholder=X.placeholder,r}function Z(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function ee(e){return e?(e=function(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==A.call(e)}(e))return NaN;if(Z(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=Z(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(r,"");var n=s.test(e);return n||u.test(e)?f(e.slice(2),n?2:8):l.test(e)?NaN:+e}(e))===1/0||e===-1/0?17976931348623157e292*(e<0?-1:1):e==e?e:0:0===e?e:0}function te(e){var t=ee(e),n=t%1;return t==t?n?t-n:t:0}X.placeholder={},e.exports=X}).call(this,n(43))},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e.default:e}t.__esModule=!0;var a=n(95);t.threezerotwofour=r(a);var o=n(96);t.apathy=r(o);var i=n(97);t.ashes=r(i);var l=n(98);t.atelierDune=r(l);var s=n(99);t.atelierForest=r(s);var c=n(100);t.atelierHeath=r(c);var u=n(101);t.atelierLakeside=r(u);var d=n(102);t.atelierSeaside=r(d);var f=n(103);t.bespin=r(f);var p=n(104);t.brewer=r(p);var h=n(105);t.bright=r(h);var m=n(106);t.chalk=r(m);var b=n(107);t.codeschool=r(b);var g=n(108);t.colors=r(g);var v=n(109);t.default=r(v);var y=n(110);t.eighties=r(y);var x=n(111);t.embers=r(x);var w=n(112);t.flat=r(w);var k=n(113);t.google=r(k);var S=n(114);t.grayscale=r(S);var E=n(115);t.greenscreen=r(E);var j=n(116);t.harmonic=r(j);var C=n(117);t.hopscotch=r(C);var _=n(118);t.isotope=r(_);var O=n(119);t.marrakesh=r(O);var P=n(120);t.mocha=r(P);var A=n(121);t.monokai=r(A);var z=n(122);t.ocean=r(z);var T=n(123);t.paraiso=r(T);var N=n(124);t.pop=r(N);var D=n(125);t.railscasts=r(D);var F=n(126);t.shapeshifter=r(F);var I=n(127);t.solarized=r(I);var M=n(128);t.summerfruit=r(M);var R=n(129);t.tomorrow=r(R);var L=n(130);t.tube=r(L);var $=n(131);t.twilight=r($)},function(e,t,n){"use strict";t.__esModule=!0,t.default={scheme:"threezerotwofour",author:"jan t. sott (http://github.com/idleberg)",base00:"#090300",base01:"#3a3432",base02:"#4a4543",base03:"#5c5855",base04:"#807d7c",base05:"#a5a2a2",base06:"#d6d5d4",base07:"#f7f7f7",base08:"#db2d20",base09:"#e8bbd0",base0A:"#fded02",base0B:"#01a252",base0C:"#b5e4f4",base0D:"#01a0e4",base0E:"#a16a94",base0F:"#cdab53"},e.exports=t.default},function(e,t,n){"use strict";t.__esModule=!0,t.default={scheme:"apathy",author:"jannik siebert (https://github.com/janniks)",base00:"#031A16",base01:"#0B342D",base02:"#184E45",base03:"#2B685E",base04:"#5F9C92",base05:"#81B5AC",base06:"#A7CEC8",base07:"#D2E7E4",base08:"#3E9688",base09:"#3E7996",base0A:"#3E4C96",base0B:"#883E96",base0C:"#963E4C",base0D:"#96883E",base0E:"#4C963E",base0F:"#3E965B"},e.exports=t.default},function(e,t,n){"use strict";t.__esModule=!0,t.default={scheme:"ashes",author:"jannik siebert (https://github.com/janniks)",base00:"#1C2023",base01:"#393F45",base02:"#565E65",base03:"#747C84",base04:"#ADB3BA",base05:"#C7CCD1",base06:"#DFE2E5",base07:"#F3F4F5",base08:"#C7AE95",base09:"#C7C795",base0A:"#AEC795",base0B:"#95C7AE",base0C:"#95AEC7",base0D:"#AE95C7",base0E:"#C795AE",base0F:"#C79595"},e.exports=t.default},function(e,t,n){"use strict";t.__esModule=!0,t.default={scheme:"atelier dune",author:"bram de haan (http://atelierbram.github.io/syntax-highlighting/atelier-schemes/dune)",base00:"#20201d",base01:"#292824",base02:"#6e6b5e",base03:"#7d7a68",base04:"#999580",base05:"#a6a28c",base06:"#e8e4cf",base07:"#fefbec",base08:"#d73737",base09:"#b65611",base0A:"#cfb017",base0B:"#60ac39",base0C:"#1fad83",base0D:"#6684e1",base0E:"#b854d4",base0F:"#d43552"},e.exports=t.default},function(e,t,n){"use strict";t.__esModule=!0,t.default={scheme:"atelier forest",author:"bram de haan (http://atelierbram.github.io/syntax-highlighting/atelier-schemes/forest)",base00:"#1b1918",base01:"#2c2421",base02:"#68615e",base03:"#766e6b",base04:"#9c9491",base05:"#a8a19f",base06:"#e6e2e0",base07:"#f1efee",base08:"#f22c40",base09:"#df5320",base0A:"#d5911a",base0B:"#5ab738",base0C:"#00ad9c",base0D:"#407ee7",base0E:"#6666ea",base0F:"#c33ff3"},e.exports=t.default},function(e,t,n){"use strict";t.__esModule=!0,t.default={scheme:"atelier heath",author:"bram de haan (http://atelierbram.github.io/syntax-highlighting/atelier-schemes/heath)",base00:"#1b181b",base01:"#292329",base02:"#695d69",base03:"#776977",base04:"#9e8f9e",base05:"#ab9bab",base06:"#d8cad8",base07:"#f7f3f7",base08:"#ca402b",base09:"#a65926",base0A:"#bb8a35",base0B:"#379a37",base0C:"#159393",base0D:"#516aec",base0E:"#7b59c0",base0F:"#cc33cc"},e.exports=t.default},function(e,t,n){"use strict";t.__esModule=!0,t.default={scheme:"atelier lakeside",author:"bram de haan (http://atelierbram.github.io/syntax-highlighting/atelier-schemes/lakeside/)",base00:"#161b1d",base01:"#1f292e",base02:"#516d7b",base03:"#5a7b8c",base04:"#7195a8",base05:"#7ea2b4",base06:"#c1e4f6",base07:"#ebf8ff",base08:"#d22d72",base09:"#935c25",base0A:"#8a8a0f",base0B:"#568c3b",base0C:"#2d8f6f",base0D:"#257fad",base0E:"#5d5db1",base0F:"#b72dd2"},e.exports=t.default},function(e,t,n){"use strict";t.__esModule=!0,t.default={scheme:"atelier seaside",author:"bram de haan (http://atelierbram.github.io/syntax-highlighting/atelier-schemes/seaside/)",base00:"#131513",base01:"#242924",base02:"#5e6e5e",base03:"#687d68",base04:"#809980",base05:"#8ca68c",base06:"#cfe8cf",base07:"#f0fff0",base08:"#e6193c",base09:"#87711d",base0A:"#c3c322",base0B:"#29a329",base0C:"#1999b3",base0D:"#3d62f5",base0E:"#ad2bee",base0F:"#e619c3"},e.exports=t.default},function(e,t,n){"use strict";t.__esModule=!0,t.default={scheme:"bespin",author:"jan t. sott",base00:"#28211c",base01:"#36312e",base02:"#5e5d5c",base03:"#666666",base04:"#797977",base05:"#8a8986",base06:"#9d9b97",base07:"#baae9e",base08:"#cf6a4c",base09:"#cf7d34",base0A:"#f9ee98",base0B:"#54be0d",base0C:"#afc4db",base0D:"#5ea6ea",base0E:"#9b859d",base0F:"#937121"},e.exports=t.default},function(e,t,n){"use strict";t.__esModule=!0,t.default={scheme:"brewer",author:"timoth\xe9e poisot (http://github.com/tpoisot)",base00:"#0c0d0e",base01:"#2e2f30",base02:"#515253",base03:"#737475",base04:"#959697",base05:"#b7b8b9",base06:"#dadbdc",base07:"#fcfdfe",base08:"#e31a1c",base09:"#e6550d",base0A:"#dca060",base0B:"#31a354",base0C:"#80b1d3",base0D:"#3182bd",base0E:"#756bb1",base0F:"#b15928"},e.exports=t.default},function(e,t,n){"use strict";t.__esModule=!0,t.default={scheme:"bright",author:"chris kempson (http://chriskempson.com)",base00:"#000000",base01:"#303030",base02:"#505050",base03:"#b0b0b0",base04:"#d0d0d0",base05:"#e0e0e0",base06:"#f5f5f5",base07:"#ffffff",base08:"#fb0120",base09:"#fc6d24",base0A:"#fda331",base0B:"#a1c659",base0C:"#76c7b7",base0D:"#6fb3d2",base0E:"#d381c3",base0F:"#be643c"},e.exports=t.default},function(e,t,n){"use strict";t.__esModule=!0,t.default={scheme:"chalk",author:"chris kempson (http://chriskempson.com)",base00:"#151515",base01:"#202020",base02:"#303030",base03:"#505050",base04:"#b0b0b0",base05:"#d0d0d0",base06:"#e0e0e0",base07:"#f5f5f5",base08:"#fb9fb1",base09:"#eda987",base0A:"#ddb26f",base0B:"#acc267",base0C:"#12cfc0",base0D:"#6fc2ef",base0E:"#e1a3ee",base0F:"#deaf8f"},e.exports=t.default},function(e,t,n){"use strict";t.__esModule=!0,t.default={scheme:"codeschool",author:"brettof86",base00:"#232c31",base01:"#1c3657",base02:"#2a343a",base03:"#3f4944",base04:"#84898c",base05:"#9ea7a6",base06:"#a7cfa3",base07:"#b5d8f6",base08:"#2a5491",base09:"#43820d",base0A:"#a03b1e",base0B:"#237986",base0C:"#b02f30",base0D:"#484d79",base0E:"#c59820",base0F:"#c98344"},e.exports=t.default},function(e,t,n){"use strict";t.__esModule=!0,t.default={scheme:"colors",author:"mrmrs (http://clrs.cc)",base00:"#111111",base01:"#333333",base02:"#555555",base03:"#777777",base04:"#999999",base05:"#bbbbbb",base06:"#dddddd",base07:"#ffffff",base08:"#ff4136",base09:"#ff851b",base0A:"#ffdc00",base0B:"#2ecc40",base0C:"#7fdbff",base0D:"#0074d9",base0E:"#b10dc9",base0F:"#85144b"},e.exports=t.default},function(e,t,n){"use strict";t.__esModule=!0,t.default={scheme:"default",author:"chris kempson (http://chriskempson.com)",base00:"#181818",base01:"#282828",base02:"#383838",base03:"#585858",base04:"#b8b8b8",base05:"#d8d8d8",base06:"#e8e8e8",base07:"#f8f8f8",base08:"#ab4642",base09:"#dc9656",base0A:"#f7ca88",base0B:"#a1b56c",base0C:"#86c1b9",base0D:"#7cafc2",base0E:"#ba8baf",base0F:"#a16946"},e.exports=t.default},function(e,t,n){"use strict";t.__esModule=!0,t.default={scheme:"eighties",author:"chris kempson (http://chriskempson.com)",base00:"#2d2d2d",base01:"#393939",base02:"#515151",base03:"#747369",base04:"#a09f93",base05:"#d3d0c8",base06:"#e8e6df",base07:"#f2f0ec",base08:"#f2777a",base09:"#f99157",base0A:"#ffcc66",base0B:"#99cc99",base0C:"#66cccc",base0D:"#6699cc",base0E:"#cc99cc",base0F:"#d27b53"},e.exports=t.default},function(e,t,n){"use strict";t.__esModule=!0,t.default={scheme:"embers",author:"jannik siebert (https://github.com/janniks)",base00:"#16130F",base01:"#2C2620",base02:"#433B32",base03:"#5A5047",base04:"#8A8075",base05:"#A39A90",base06:"#BEB6AE",base07:"#DBD6D1",base08:"#826D57",base09:"#828257",base0A:"#6D8257",base0B:"#57826D",base0C:"#576D82",base0D:"#6D5782",base0E:"#82576D",base0F:"#825757"},e.exports=t.default},function(e,t,n){"use strict";t.__esModule=!0,t.default={scheme:"flat",author:"chris kempson (http://chriskempson.com)",base00:"#2C3E50",base01:"#34495E",base02:"#7F8C8D",base03:"#95A5A6",base04:"#BDC3C7",base05:"#e0e0e0",base06:"#f5f5f5",base07:"#ECF0F1",base08:"#E74C3C",base09:"#E67E22",base0A:"#F1C40F",base0B:"#2ECC71",base0C:"#1ABC9C",base0D:"#3498DB",base0E:"#9B59B6",base0F:"#be643c"},e.exports=t.default},function(e,t,n){"use strict";t.__esModule=!0,t.default={scheme:"google",author:"seth wright (http://sethawright.com)",base00:"#1d1f21",base01:"#282a2e",base02:"#373b41",base03:"#969896",base04:"#b4b7b4",base05:"#c5c8c6",base06:"#e0e0e0",base07:"#ffffff",base08:"#CC342B",base09:"#F96A38",base0A:"#FBA922",base0B:"#198844",base0C:"#3971ED",base0D:"#3971ED",base0E:"#A36AC7",base0F:"#3971ED"},e.exports=t.default},function(e,t,n){"use strict";t.__esModule=!0,t.default={scheme:"grayscale",author:"alexandre gavioli (https://github.com/alexx2/)",base00:"#101010",base01:"#252525",base02:"#464646",base03:"#525252",base04:"#ababab",base05:"#b9b9b9",base06:"#e3e3e3",base07:"#f7f7f7",base08:"#7c7c7c",base09:"#999999",base0A:"#a0a0a0",base0B:"#8e8e8e",base0C:"#868686",base0D:"#686868",base0E:"#747474",base0F:"#5e5e5e"},e.exports=t.default},function(e,t,n){"use strict";t.__esModule=!0,t.default={scheme:"green screen",author:"chris kempson (http://chriskempson.com)",base00:"#001100",base01:"#003300",base02:"#005500",base03:"#007700",base04:"#009900",base05:"#00bb00",base06:"#00dd00",base07:"#00ff00",base08:"#007700",base09:"#009900",base0A:"#007700",base0B:"#00bb00",base0C:"#005500",base0D:"#009900",base0E:"#00bb00",base0F:"#005500"},e.exports=t.default},function(e,t,n){"use strict";t.__esModule=!0,t.default={scheme:"harmonic16",author:"jannik siebert (https://github.com/janniks)",base00:"#0b1c2c",base01:"#223b54",base02:"#405c79",base03:"#627e99",base04:"#aabcce",base05:"#cbd6e2",base06:"#e5ebf1",base07:"#f7f9fb",base08:"#bf8b56",base09:"#bfbf56",base0A:"#8bbf56",base0B:"#56bf8b",base0C:"#568bbf",base0D:"#8b56bf",base0E:"#bf568b",base0F:"#bf5656"},e.exports=t.default},function(e,t,n){"use strict";t.__esModule=!0,t.default={scheme:"hopscotch",author:"jan t. sott",base00:"#322931",base01:"#433b42",base02:"#5c545b",base03:"#797379",base04:"#989498",base05:"#b9b5b8",base06:"#d5d3d5",base07:"#ffffff",base08:"#dd464c",base09:"#fd8b19",base0A:"#fdcc59",base0B:"#8fc13e",base0C:"#149b93",base0D:"#1290bf",base0E:"#c85e7c",base0F:"#b33508"},e.exports=t.default},function(e,t,n){"use strict";t.__esModule=!0,t.default={scheme:"isotope",author:"jan t. sott",base00:"#000000",base01:"#404040",base02:"#606060",base03:"#808080",base04:"#c0c0c0",base05:"#d0d0d0",base06:"#e0e0e0",base07:"#ffffff",base08:"#ff0000",base09:"#ff9900",base0A:"#ff0099",base0B:"#33ff00",base0C:"#00ffff",base0D:"#0066ff",base0E:"#cc00ff",base0F:"#3300ff"},e.exports=t.default},function(e,t,n){"use strict";t.__esModule=!0,t.default={scheme:"marrakesh",author:"alexandre gavioli (http://github.com/alexx2/)",base00:"#201602",base01:"#302e00",base02:"#5f5b17",base03:"#6c6823",base04:"#86813b",base05:"#948e48",base06:"#ccc37a",base07:"#faf0a5",base08:"#c35359",base09:"#b36144",base0A:"#a88339",base0B:"#18974e",base0C:"#75a738",base0D:"#477ca1",base0E:"#8868b3",base0F:"#b3588e"},e.exports=t.default},function(e,t,n){"use strict";t.__esModule=!0,t.default={scheme:"mocha",author:"chris kempson (http://chriskempson.com)",base00:"#3B3228",base01:"#534636",base02:"#645240",base03:"#7e705a",base04:"#b8afad",base05:"#d0c8c6",base06:"#e9e1dd",base07:"#f5eeeb",base08:"#cb6077",base09:"#d28b71",base0A:"#f4bc87",base0B:"#beb55b",base0C:"#7bbda4",base0D:"#8ab3b5",base0E:"#a89bb9",base0F:"#bb9584"},e.exports=t.default},function(e,t,n){"use strict";t.__esModule=!0,t.default={scheme:"monokai",author:"wimer hazenberg (http://www.monokai.nl)",base00:"#272822",base01:"#383830",base02:"#49483e",base03:"#75715e",base04:"#a59f85",base05:"#f8f8f2",base06:"#f5f4f1",base07:"#f9f8f5",base08:"#f92672",base09:"#fd971f",base0A:"#f4bf75",base0B:"#a6e22e",base0C:"#a1efe4",base0D:"#66d9ef",base0E:"#ae81ff",base0F:"#cc6633"},e.exports=t.default},function(e,t,n){"use strict";t.__esModule=!0,t.default={scheme:"ocean",author:"chris kempson (http://chriskempson.com)",base00:"#2b303b",base01:"#343d46",base02:"#4f5b66",base03:"#65737e",base04:"#a7adba",base05:"#c0c5ce",base06:"#dfe1e8",base07:"#eff1f5",base08:"#bf616a",base09:"#d08770",base0A:"#ebcb8b",base0B:"#a3be8c",base0C:"#96b5b4",base0D:"#8fa1b3",base0E:"#b48ead",base0F:"#ab7967"},e.exports=t.default},function(e,t,n){"use strict";t.__esModule=!0,t.default={scheme:"paraiso",author:"jan t. sott",base00:"#2f1e2e",base01:"#41323f",base02:"#4f424c",base03:"#776e71",base04:"#8d8687",base05:"#a39e9b",base06:"#b9b6b0",base07:"#e7e9db",base08:"#ef6155",base09:"#f99b15",base0A:"#fec418",base0B:"#48b685",base0C:"#5bc4bf",base0D:"#06b6ef",base0E:"#815ba4",base0F:"#e96ba8"},e.exports=t.default},function(e,t,n){"use strict";t.__esModule=!0,t.default={scheme:"pop",author:"chris kempson (http://chriskempson.com)",base00:"#000000",base01:"#202020",base02:"#303030",base03:"#505050",base04:"#b0b0b0",base05:"#d0d0d0",base06:"#e0e0e0",base07:"#ffffff",base08:"#eb008a",base09:"#f29333",base0A:"#f8ca12",base0B:"#37b349",base0C:"#00aabb",base0D:"#0e5a94",base0E:"#b31e8d",base0F:"#7a2d00"},e.exports=t.default},function(e,t,n){"use strict";t.__esModule=!0,t.default={scheme:"railscasts",author:"ryan bates (http://railscasts.com)",base00:"#2b2b2b",base01:"#272935",base02:"#3a4055",base03:"#5a647e",base04:"#d4cfc9",base05:"#e6e1dc",base06:"#f4f1ed",base07:"#f9f7f3",base08:"#da4939",base09:"#cc7833",base0A:"#ffc66d",base0B:"#a5c261",base0C:"#519f50",base0D:"#6d9cbe",base0E:"#b6b3eb",base0F:"#bc9458"},e.exports=t.default},function(e,t,n){"use strict";t.__esModule=!0,t.default={scheme:"shapeshifter",author:"tyler benziger (http://tybenz.com)",base00:"#000000",base01:"#040404",base02:"#102015",base03:"#343434",base04:"#555555",base05:"#ababab",base06:"#e0e0e0",base07:"#f9f9f9",base08:"#e92f2f",base09:"#e09448",base0A:"#dddd13",base0B:"#0ed839",base0C:"#23edda",base0D:"#3b48e3",base0E:"#f996e2",base0F:"#69542d"},e.exports=t.default},function(e,t,n){"use strict";t.__esModule=!0,t.default={scheme:"solarized",author:"ethan schoonover (http://ethanschoonover.com/solarized)",base00:"#002b36",base01:"#073642",base02:"#586e75",base03:"#657b83",base04:"#839496",base05:"#93a1a1",base06:"#eee8d5",base07:"#fdf6e3",base08:"#dc322f",base09:"#cb4b16",base0A:"#b58900",base0B:"#859900",base0C:"#2aa198",base0D:"#268bd2",base0E:"#6c71c4",base0F:"#d33682"},e.exports=t.default},function(e,t,n){"use strict";t.__esModule=!0,t.default={scheme:"summerfruit",author:"christopher corley (http://cscorley.github.io/)",base00:"#151515",base01:"#202020",base02:"#303030",base03:"#505050",base04:"#B0B0B0",base05:"#D0D0D0",base06:"#E0E0E0",base07:"#FFFFFF",base08:"#FF0086",base09:"#FD8900",base0A:"#ABA800",base0B:"#00C918",base0C:"#1faaaa",base0D:"#3777E6",base0E:"#AD00A1",base0F:"#cc6633"},e.exports=t.default},function(e,t,n){"use strict";t.__esModule=!0,t.default={scheme:"tomorrow",author:"chris kempson (http://chriskempson.com)",base00:"#1d1f21",base01:"#282a2e",base02:"#373b41",base03:"#969896",base04:"#b4b7b4",base05:"#c5c8c6",base06:"#e0e0e0",base07:"#ffffff",base08:"#cc6666",base09:"#de935f",base0A:"#f0c674",base0B:"#b5bd68",base0C:"#8abeb7",base0D:"#81a2be",base0E:"#b294bb",base0F:"#a3685a"},e.exports=t.default},function(e,t,n){"use strict";t.__esModule=!0,t.default={scheme:"london tube",author:"jan t. sott",base00:"#231f20",base01:"#1c3f95",base02:"#5a5758",base03:"#737171",base04:"#959ca1",base05:"#d9d8d8",base06:"#e7e7e8",base07:"#ffffff",base08:"#ee2e24",base09:"#f386a1",base0A:"#ffd204",base0B:"#00853e",base0C:"#85cebc",base0D:"#009ddc",base0E:"#98005d",base0F:"#b06110"},e.exports=t.default},function(e,t,n){"use strict";t.__esModule=!0,t.default={scheme:"twilight",author:"david hart (http://hart-dev.com)",base00:"#1e1e1e",base01:"#323537",base02:"#464b50",base03:"#5f5a60",base04:"#838184",base05:"#a7a7a7",base06:"#c3c3c3",base07:"#ffffff",base08:"#cf6a4c",base09:"#cda869",base0A:"#f9ee98",base0B:"#8f9d6a",base0C:"#afc4db",base0D:"#7587a6",base0E:"#9b859d",base0F:"#9b703f"},e.exports=t.default},function(e,t,n){var r=n(33);function a(e){var t=Math.round(r(e,0,255)).toString(16);return 1==t.length?"0"+t:t}e.exports=function(e){var t=4===e.length?a(255*e[3]):"";return"#"+a(e[0])+a(e[1])+a(e[2])+t}},function(e,t,n){var r=n(134),a=n(135),o=n(136),i=n(137),l={"#":a,hsl:function(e){var t=r(e),n=i(t);return 4===t.length&&n.push(t[3]),n},rgb:o};function s(e){for(var t in l)if(0===e.indexOf(t))return l[t](e)}s.rgb=o,s.hsl=r,s.hex=a,e.exports=s},function(e,t,n){var r=n(44),a=n(33);function o(e,t){switch(e=parseFloat(e),t){case 0:return a(e,0,360);case 1:case 2:return a(e,0,100);case 3:return a(e,0,1)}}e.exports=function(e){return r(e).map(o)}},function(e,t){e.exports=function(e){4!==e.length&&5!==e.length||(e=function(e){for(var t="#",n=1;n<e.length;n++){var r=e.charAt(n);t+=r+r}return t}(e));var t=[parseInt(e.substring(1,3),16),parseInt(e.substring(3,5),16),parseInt(e.substring(5,7),16)];if(9===e.length){var n=parseFloat((parseInt(e.substring(7,9),16)/255).toFixed(2));t.push(n)}return t}},function(e,t,n){var r=n(44),a=n(33);function o(e,t){return t<3?-1!=e.indexOf("%")?Math.round(255*a(parseInt(e,10),0,100)/100):a(parseInt(e,10),0,255):a(parseFloat(e),0,1)}e.exports=function(e){return r(e).map(o)}},function(e,t){e.exports=function(e){var t,n,r,a,o,i=e[0]/360,l=e[1]/100,s=e[2]/100;if(0==l)return[o=255*s,o,o];t=2*s-(n=s<.5?s*(1+l):s+l-s*l),a=[0,0,0];for(var c=0;c<3;c++)(r=i+1/3*-(c-1))<0&&r++,r>1&&r--,o=6*r<1?t+6*(n-t)*r:2*r<1?n:3*r<2?t+(n-t)*(2/3-r)*6:t,a[c]=255*o;return a}},function(e,t,n){(function(t){var n="object"==typeof t&&t&&t.Object===Object&&t,r="object"==typeof self&&self&&self.Object===Object&&self,a=n||r||Function("return this")();function o(e,t,n){switch(n.length){case 0:return e.call(t);case 1:return e.call(t,n[0]);case 2:return e.call(t,n[0],n[1]);case 3:return e.call(t,n[0],n[1],n[2])}return e.apply(t,n)}function i(e,t){for(var n=-1,r=t.length,a=e.length;++n<r;)e[a+n]=t[n];return e}var l=Object.prototype,s=l.hasOwnProperty,c=l.toString,u=a.Symbol,d=l.propertyIsEnumerable,f=u?u.isConcatSpreadable:void 0,p=Math.max;function h(e){return v(e)||function(e){return function(e){return function(e){return!!e&&"object"==typeof e}(e)&&function(e){return null!=e&&function(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=9007199254740991}(e.length)&&!function(e){var t=function(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}(e)?c.call(e):"";return"[object Function]"==t||"[object GeneratorFunction]"==t}(e)}(e)}(e)&&s.call(e,"callee")&&(!d.call(e,"callee")||"[object Arguments]"==c.call(e))}(e)||!!(f&&e&&e[f])}var m,b,g,v=Array.isArray,y=(b=function(e){var t=(e=function e(t,n,r,a,o){var l=-1,s=t.length;for(r||(r=h),o||(o=[]);++l<s;){var c=t[l];n>0&&r(c)?n>1?e(c,n-1,r,a,o):i(o,c):a||(o[o.length]=c)}return o}(e,1)).length,n=t;for(m&&e.reverse();n--;)if("function"!=typeof e[n])throw new TypeError("Expected a function");return function(){for(var n=0,r=t?e[n].apply(this,arguments):arguments[0];++n<t;)r=e[n].call(this,r);return r}},g=p(void 0===g?b.length-1:g,0),function(){for(var e=arguments,t=-1,n=p(e.length-g,0),r=Array(n);++t<n;)r[t]=e[g+t];t=-1;for(var a=Array(g+1);++t<g;)a[t]=e[t];return a[g]=r,o(b,this,a)});e.exports=y}).call(this,n(43))},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.yuv2rgb=function(e){var t,n,r,a=e[0],o=e[1],i=e[2];return t=1*a+0*o+1.13983*i,n=1*a+-.39465*o+-.5806*i,r=1*a+2.02311*o+0*i,[255*(t=Math.min(Math.max(0,t),1)),255*(n=Math.min(Math.max(0,n),1)),255*(r=Math.min(Math.max(0,r),1))]},t.rgb2yuv=function(e){var t=e[0]/255,n=e[1]/255,r=e[2]/255;return[.299*t+.587*n+.114*r,-.14713*t+-.28886*n+.436*r,.615*t+-.51499*n+-.10001*r]}},function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var a=n(141),o=function(){function e(){r(this,"_callbacks",void 0),r(this,"_isDispatching",void 0),r(this,"_isHandled",void 0),r(this,"_isPending",void 0),r(this,"_lastID",void 0),r(this,"_pendingPayload",void 0),this._callbacks={},this._isDispatching=!1,this._isHandled={},this._isPending={},this._lastID=1}var t=e.prototype;return t.register=function(e){var t="ID_"+this._lastID++;return this._callbacks[t]=e,t},t.unregister=function(e){this._callbacks[e]||a(!1),delete this._callbacks[e]},t.waitFor=function(e){this._isDispatching||a(!1);for(var t=0;t<e.length;t++){var n=e[t];this._isPending[n]?this._isHandled[n]||a(!1):(this._callbacks[n]||a(!1),this._invokeCallback(n))}},t.dispatch=function(e){this._isDispatching&&a(!1),this._startDispatching(e);try{for(var t in this._callbacks)this._isPending[t]||this._invokeCallback(t)}finally{this._stopDispatching()}},t.isDispatching=function(){return this._isDispatching},t._invokeCallback=function(e){this._isPending[e]=!0,this._callbacks[e](this._pendingPayload),this._isHandled[e]=!0},t._startDispatching=function(e){for(var t in this._callbacks)this._isPending[t]=!1,this._isHandled[t]=!1;this._pendingPayload=e,this._isDispatching=!0},t._stopDispatching=function(){delete this._pendingPayload,this._isDispatching=!1},e}();e.exports=o},function(e,t,n){"use strict";var r=function(e){};e.exports=function(e,t){for(var n=arguments.length,a=new Array(n>2?n-2:0),o=2;o<n;o++)a[o-2]=arguments[o];if(r(t),!e){var i;if(void 0===t)i=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var l=0;(i=new Error(t.replace(/%s/g,(function(){return String(a[l++])})))).name="Invariant Violation"}throw i.framesToPop=1,i}}},function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function s(e,t,n){return t&&l(e.prototype,t),n&&l(e,n),e}function c(e,t){return(c=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&c(e,t)}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function f(e){return(f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function p(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function h(e,t){return!t||"object"!==f(t)&&"function"!=typeof t?p(e):t}function m(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=d(e);if(t){var a=d(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return h(this,n)}}n.r(t);var b=n(0),g=n.n(b);function v(){var e=this.constructor.getDerivedStateFromProps(this.props,this.state);null!=e&&this.setState(e)}function y(e){this.setState(function(t){var n=this.constructor.getDerivedStateFromProps(e,t);return null!=n?n:null}.bind(this))}function x(e,t){try{var n=this.props,r=this.state;this.props=e,this.state=t,this.__reactInternalSnapshotFlag=!0,this.__reactInternalSnapshot=this.getSnapshotBeforeUpdate(n,r)}finally{this.props=n,this.state=r}}function w(e){var t=e.prototype;if(!t||!t.isReactComponent)throw new Error("Can only polyfill class components");if("function"!=typeof e.getDerivedStateFromProps&&"function"!=typeof t.getSnapshotBeforeUpdate)return e;var n=null,r=null,a=null;if("function"==typeof t.componentWillMount?n="componentWillMount":"function"==typeof t.UNSAFE_componentWillMount&&(n="UNSAFE_componentWillMount"),"function"==typeof t.componentWillReceiveProps?r="componentWillReceiveProps":"function"==typeof t.UNSAFE_componentWillReceiveProps&&(r="UNSAFE_componentWillReceiveProps"),"function"==typeof t.componentWillUpdate?a="componentWillUpdate":"function"==typeof t.UNSAFE_componentWillUpdate&&(a="UNSAFE_componentWillUpdate"),null!==n||null!==r||null!==a){var o=e.displayName||e.name,i="function"==typeof e.getDerivedStateFromProps?"getDerivedStateFromProps()":"getSnapshotBeforeUpdate()";throw Error("Unsafe legacy lifecycles will not be called for components using new component APIs.\n\n"+o+" uses "+i+" but also contains the following legacy lifecycles:"+(null!==n?"\n  "+n:"")+(null!==r?"\n  "+r:"")+(null!==a?"\n  "+a:"")+"\n\nThe above lifecycles should be removed. Learn more about this warning here:\nhttps://fb.me/react-async-component-lifecycle-hooks")}if("function"==typeof e.getDerivedStateFromProps&&(t.componentWillMount=v,t.componentWillReceiveProps=y),"function"==typeof t.getSnapshotBeforeUpdate){if("function"!=typeof t.componentDidUpdate)throw new Error("Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype");t.componentWillUpdate=x;var l=t.componentDidUpdate;t.componentDidUpdate=function(e,t,n){var r=this.__reactInternalSnapshotFlag?this.__reactInternalSnapshot:n;l.call(this,e,t,r)}}return e}function k(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function S(e){var t=function(e){return{}.toString.call(e).match(/\s([a-zA-Z]+)/)[1].toLowerCase()}(e);return"number"===t&&(t=isNaN(e)?"nan":(0|e)!=e?"float":"integer"),t}v.__suppressDeprecationWarning=!0,y.__suppressDeprecationWarning=!0,x.__suppressDeprecationWarning=!0;var E={scheme:"rjv-default",author:"mac gainor",base00:"rgba(0, 0, 0, 0)",base01:"rgb(245, 245, 245)",base02:"rgb(235, 235, 235)",base03:"#93a1a1",base04:"rgba(0, 0, 0, 0.3)",base05:"#586e75",base06:"#073642",base07:"#002b36",base08:"#d33682",base09:"#cb4b16",base0A:"#dc322f",base0B:"#859900",base0C:"#6c71c4",base0D:"#586e75",base0E:"#2aa198",base0F:"#268bd2"},j={scheme:"rjv-grey",author:"mac gainor",base00:"rgba(1, 1, 1, 0)",base01:"rgba(1, 1, 1, 0.1)",base02:"rgba(0, 0, 0, 0.2)",base03:"rgba(1, 1, 1, 0.3)",base04:"rgba(0, 0, 0, 0.4)",base05:"rgba(1, 1, 1, 0.5)",base06:"rgba(1, 1, 1, 0.6)",base07:"rgba(1, 1, 1, 0.7)",base08:"rgba(1, 1, 1, 0.8)",base09:"rgba(1, 1, 1, 0.8)",base0A:"rgba(1, 1, 1, 0.8)",base0B:"rgba(1, 1, 1, 0.8)",base0C:"rgba(1, 1, 1, 0.8)",base0D:"rgba(1, 1, 1, 0.8)",base0E:"rgba(1, 1, 1, 0.8)",base0F:"rgba(1, 1, 1, 0.8)"},C={white:"#fff",black:"#000",transparent:"rgba(1, 1, 1, 0)",globalFontFamily:"monospace",globalCursor:"default",indentBlockWidth:"5px",braceFontWeight:"bold",braceCursor:"pointer",ellipsisFontSize:"18px",ellipsisLineHeight:"10px",ellipsisCursor:"pointer",keyMargin:"0px 5px",keyLetterSpacing:"0.5px",keyFontStyle:"none",keyBorderRadius:"3px",keyColonWeight:"bold",keyVerticalAlign:"top",keyOpacity:"0.85",keyOpacityHover:"1",keyValPaddingTop:"3px",keyValPaddingBottom:"3px",keyValPaddingRight:"5px",keyValBorderLeft:"1px solid",keyValBorderHover:"2px solid",keyValPaddingHover:"3px 5px 3px 4px",pushedContentMarginLeft:"6px",variableValuePaddingRight:"6px",nullFontSize:"11px",nullFontWeight:"bold",nullPadding:"1px 2px",nullBorderRadius:"3px",nanFontSize:"11px",nanFontWeight:"bold",nanPadding:"1px 2px",nanBorderRadius:"3px",undefinedFontSize:"11px",undefinedFontWeight:"bold",undefinedPadding:"1px 2px",undefinedBorderRadius:"3px",dataTypeFontSize:"11px",dataTypeMarginRight:"4px",datatypeOpacity:"0.8",objectSizeBorderRadius:"3px",objectSizeFontStyle:"italic",objectSizeMargin:"0px 6px 0px 0px",clipboardCursor:"pointer",clipboardCheckMarginLeft:"-12px",metaDataPadding:"0px 0px 0px 10px",arrayGroupMetaPadding:"0px 0px 0px 4px",iconContainerWidth:"17px",tooltipPadding:"4px",editInputMinWidth:"130px",editInputBorderRadius:"2px",editInputPadding:"5px",editInputMarginRight:"4px",editInputFontFamily:"monospace",iconCursor:"pointer",iconFontSize:"15px",iconPaddingRight:"1px",dateValueMarginLeft:"2px",iconMarginRight:"3px",detectedRowPaddingTop:"3px",addKeyCoverBackground:"rgba(255, 255, 255, 0.3)",addKeyCoverPosition:"absolute",addKeyCoverPositionPx:"0px",addKeyModalWidth:"200px",addKeyModalMargin:"auto",addKeyModalPadding:"10px",addKeyModalRadius:"3px"},_=n(45),O=function(e){var t=function(e){return{backgroundColor:e.base00,ellipsisColor:e.base09,braceColor:e.base07,expandedIcon:e.base0D,collapsedIcon:e.base0E,keyColor:e.base07,arrayKeyColor:e.base0C,objectSize:e.base04,copyToClipboard:e.base0F,copyToClipboardCheck:e.base0D,objectBorder:e.base02,dataTypes:{boolean:e.base0E,date:e.base0D,float:e.base0B,function:e.base0D,integer:e.base0F,string:e.base09,nan:e.base08,null:e.base0A,undefined:e.base05,regexp:e.base0A,background:e.base02},editVariable:{editIcon:e.base0E,cancelIcon:e.base09,removeIcon:e.base09,addIcon:e.base0E,checkIcon:e.base0E,background:e.base01,color:e.base0A,border:e.base07},addKeyModal:{background:e.base05,border:e.base04,color:e.base0A,labelColor:e.base01},validationFailure:{background:e.base09,iconColor:e.base01,fontColor:e.base01}}}(e);return{"app-container":{fontFamily:C.globalFontFamily,cursor:C.globalCursor,backgroundColor:t.backgroundColor,position:"relative"},ellipsis:{display:"inline-block",color:t.ellipsisColor,fontSize:C.ellipsisFontSize,lineHeight:C.ellipsisLineHeight,cursor:C.ellipsisCursor},"brace-row":{display:"inline-block",cursor:"pointer"},brace:{display:"inline-block",cursor:C.braceCursor,fontWeight:C.braceFontWeight,color:t.braceColor},"expanded-icon":{color:t.expandedIcon},"collapsed-icon":{color:t.collapsedIcon},colon:{display:"inline-block",margin:C.keyMargin,color:t.keyColor,verticalAlign:"top"},objectKeyVal:function(e,n){return{style:o({paddingTop:C.keyValPaddingTop,paddingRight:C.keyValPaddingRight,paddingBottom:C.keyValPaddingBottom,borderLeft:C.keyValBorderLeft+" "+t.objectBorder,":hover":{paddingLeft:n.paddingLeft-1+"px",borderLeft:C.keyValBorderHover+" "+t.objectBorder}},n)}},"object-key-val-no-border":{padding:C.keyValPadding},"pushed-content":{marginLeft:C.pushedContentMarginLeft},variableValue:function(e,t){return{style:o({display:"inline-block",paddingRight:C.variableValuePaddingRight,position:"relative"},t)}},"object-name":{display:"inline-block",color:t.keyColor,letterSpacing:C.keyLetterSpacing,fontStyle:C.keyFontStyle,verticalAlign:C.keyVerticalAlign,opacity:C.keyOpacity,":hover":{opacity:C.keyOpacityHover}},"array-key":{display:"inline-block",color:t.arrayKeyColor,letterSpacing:C.keyLetterSpacing,fontStyle:C.keyFontStyle,verticalAlign:C.keyVerticalAlign,opacity:C.keyOpacity,":hover":{opacity:C.keyOpacityHover}},"object-size":{color:t.objectSize,borderRadius:C.objectSizeBorderRadius,fontStyle:C.objectSizeFontStyle,margin:C.objectSizeMargin,cursor:"default"},"data-type-label":{fontSize:C.dataTypeFontSize,marginRight:C.dataTypeMarginRight,opacity:C.datatypeOpacity},boolean:{display:"inline-block",color:t.dataTypes.boolean},date:{display:"inline-block",color:t.dataTypes.date},"date-value":{marginLeft:C.dateValueMarginLeft},float:{display:"inline-block",color:t.dataTypes.float},function:{display:"inline-block",color:t.dataTypes.function,cursor:"pointer",whiteSpace:"pre-line"},"function-value":{fontStyle:"italic"},integer:{display:"inline-block",color:t.dataTypes.integer},string:{display:"inline-block",color:t.dataTypes.string},nan:{display:"inline-block",color:t.dataTypes.nan,fontSize:C.nanFontSize,fontWeight:C.nanFontWeight,backgroundColor:t.dataTypes.background,padding:C.nanPadding,borderRadius:C.nanBorderRadius},null:{display:"inline-block",color:t.dataTypes.null,fontSize:C.nullFontSize,fontWeight:C.nullFontWeight,backgroundColor:t.dataTypes.background,padding:C.nullPadding,borderRadius:C.nullBorderRadius},undefined:{display:"inline-block",color:t.dataTypes.undefined,fontSize:C.undefinedFontSize,padding:C.undefinedPadding,borderRadius:C.undefinedBorderRadius,backgroundColor:t.dataTypes.background},regexp:{display:"inline-block",color:t.dataTypes.regexp},"copy-to-clipboard":{cursor:C.clipboardCursor},"copy-icon":{color:t.copyToClipboard,fontSize:C.iconFontSize,marginRight:C.iconMarginRight,verticalAlign:"top"},"copy-icon-copied":{color:t.copyToClipboardCheck,marginLeft:C.clipboardCheckMarginLeft},"array-group-meta-data":{display:"inline-block",padding:C.arrayGroupMetaPadding},"object-meta-data":{display:"inline-block",padding:C.metaDataPadding},"icon-container":{display:"inline-block",width:C.iconContainerWidth},tooltip:{padding:C.tooltipPadding},removeVarIcon:{verticalAlign:"top",display:"inline-block",color:t.editVariable.removeIcon,cursor:C.iconCursor,fontSize:C.iconFontSize,marginRight:C.iconMarginRight},addVarIcon:{verticalAlign:"top",display:"inline-block",color:t.editVariable.addIcon,cursor:C.iconCursor,fontSize:C.iconFontSize,marginRight:C.iconMarginRight},editVarIcon:{verticalAlign:"top",display:"inline-block",color:t.editVariable.editIcon,cursor:C.iconCursor,fontSize:C.iconFontSize,marginRight:C.iconMarginRight},"edit-icon-container":{display:"inline-block",verticalAlign:"top"},"check-icon":{display:"inline-block",cursor:C.iconCursor,color:t.editVariable.checkIcon,fontSize:C.iconFontSize,paddingRight:C.iconPaddingRight},"cancel-icon":{display:"inline-block",cursor:C.iconCursor,color:t.editVariable.cancelIcon,fontSize:C.iconFontSize,paddingRight:C.iconPaddingRight},"edit-input":{display:"inline-block",minWidth:C.editInputMinWidth,borderRadius:C.editInputBorderRadius,backgroundColor:t.editVariable.background,color:t.editVariable.color,padding:C.editInputPadding,marginRight:C.editInputMarginRight,fontFamily:C.editInputFontFamily},"detected-row":{paddingTop:C.detectedRowPaddingTop},"key-modal-request":{position:C.addKeyCoverPosition,top:C.addKeyCoverPositionPx,left:C.addKeyCoverPositionPx,right:C.addKeyCoverPositionPx,bottom:C.addKeyCoverPositionPx,backgroundColor:C.addKeyCoverBackground},"key-modal":{width:C.addKeyModalWidth,backgroundColor:t.addKeyModal.background,marginLeft:C.addKeyModalMargin,marginRight:C.addKeyModalMargin,padding:C.addKeyModalPadding,borderRadius:C.addKeyModalRadius,marginTop:"15px",position:"relative"},"key-modal-label":{color:t.addKeyModal.labelColor,marginLeft:"2px",marginBottom:"5px",fontSize:"11px"},"key-modal-input-container":{overflow:"hidden"},"key-modal-input":{width:"100%",padding:"3px 6px",fontFamily:"monospace",color:t.addKeyModal.color,border:"none",boxSizing:"border-box",borderRadius:"2px"},"key-modal-cancel":{backgroundColor:t.editVariable.removeIcon,position:"absolute",top:"0px",right:"0px",borderRadius:"0px 3px 0px 3px",cursor:"pointer"},"key-modal-cancel-icon":{color:t.addKeyModal.labelColor,fontSize:C.iconFontSize,transform:"rotate(45deg)"},"key-modal-submit":{color:t.editVariable.addIcon,fontSize:C.iconFontSize,position:"absolute",right:"2px",top:"3px",cursor:"pointer"},"function-ellipsis":{display:"inline-block",color:t.ellipsisColor,fontSize:C.ellipsisFontSize,lineHeight:C.ellipsisLineHeight,cursor:C.ellipsisCursor},"validation-failure":{float:"right",padding:"3px 6px",borderRadius:"2px",cursor:"pointer",color:t.validationFailure.fontColor,backgroundColor:t.validationFailure.background},"validation-failure-label":{marginRight:"6px"},"validation-failure-clear":{position:"relative",verticalAlign:"top",cursor:"pointer",color:t.validationFailure.iconColor,fontSize:C.iconFontSize,transform:"rotate(45deg)"}}};function P(e,t,n){return e||console.error("theme has not been set"),function(e){var t=E;return!1!==e&&"none"!==e||(t=j),Object(_.createStyling)(O,{defaultBase16:t})(e)}(e)(t,n)}var A=function(e){u(n,e);var t=m(n);function n(){return i(this,n),t.apply(this,arguments)}return s(n,[{key:"render",value:function(){var e=this.props,t=(e.rjvId,e.type_name),n=e.displayDataTypes,r=e.theme;return n?g.a.createElement("span",Object.assign({className:"data-type-label"},P(r,"data-type-label")),t):null}}]),n}(g.a.PureComponent),z=function(e){u(n,e);var t=m(n);function n(){return i(this,n),t.apply(this,arguments)}return s(n,[{key:"render",value:function(){var e=this.props;return g.a.createElement("div",P(e.theme,"boolean"),g.a.createElement(A,Object.assign({type_name:"bool"},e)),e.value?"true":"false")}}]),n}(g.a.PureComponent),T=function(e){u(n,e);var t=m(n);function n(){return i(this,n),t.apply(this,arguments)}return s(n,[{key:"render",value:function(){var e=this.props;return g.a.createElement("div",P(e.theme,"date"),g.a.createElement(A,Object.assign({type_name:"date"},e)),g.a.createElement("span",Object.assign({className:"date-value"},P(e.theme,"date-value")),e.value.toLocaleTimeString("en-us",{weekday:"short",year:"numeric",month:"short",day:"numeric",hour:"2-digit",minute:"2-digit"})))}}]),n}(g.a.PureComponent),N=function(e){u(n,e);var t=m(n);function n(){return i(this,n),t.apply(this,arguments)}return s(n,[{key:"render",value:function(){var e=this.props;return g.a.createElement("div",P(e.theme,"float"),g.a.createElement(A,Object.assign({type_name:"float"},e)),this.props.value)}}]),n}(g.a.PureComponent);function D(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function F(e,t){if(e){if("string"==typeof e)return D(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?D(e,t):void 0}}function I(e,t){var n;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=F(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0,a=function(){};return{s:a,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,i=!0,l=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return i=e.done,e},e:function(e){l=!0,o=e},f:function(){try{i||null==n.return||n.return()}finally{if(l)throw o}}}}function M(e){return function(e){if(Array.isArray(e))return D(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||F(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var R=n(46),L=new(n(47).Dispatcher),$=new(function(e){u(n,e);var t=m(n);function n(){var e;i(this,n);for(var r=arguments.length,a=new Array(r),l=0;l<r;l++)a[l]=arguments[l];return(e=t.call.apply(t,[this].concat(a))).objects={},e.set=function(t,n,r,a){void 0===e.objects[t]&&(e.objects[t]={}),void 0===e.objects[t][n]&&(e.objects[t][n]={}),e.objects[t][n][r]=a},e.get=function(t,n,r,a){return void 0===e.objects[t]||void 0===e.objects[t][n]||null==e.objects[t][n][r]?a:e.objects[t][n][r]},e.handleAction=function(t){var n=t.rjvId,r=t.data;switch(t.name){case"RESET":e.emit("reset-"+n);break;case"VARIABLE_UPDATED":t.data.updated_src=e.updateSrc(n,r),e.set(n,"action","variable-update",o(o({},r),{},{type:"variable-edited"})),e.emit("variable-update-"+n);break;case"VARIABLE_REMOVED":t.data.updated_src=e.updateSrc(n,r),e.set(n,"action","variable-update",o(o({},r),{},{type:"variable-removed"})),e.emit("variable-update-"+n);break;case"VARIABLE_ADDED":t.data.updated_src=e.updateSrc(n,r),e.set(n,"action","variable-update",o(o({},r),{},{type:"variable-added"})),e.emit("variable-update-"+n);break;case"ADD_VARIABLE_KEY_REQUEST":e.set(n,"action","new-key-request",r),e.emit("add-key-request-"+n)}},e.updateSrc=function(t,n){var r=n.name,a=n.namespace,o=n.new_value,i=(n.existing_value,n.variable_removed);a.shift();var l,s=e.get(t,"global","src"),c=e.deepCopy(s,M(a)),u=c,d=I(a);try{for(d.s();!(l=d.n()).done;)u=u[l.value]}catch(e){d.e(e)}finally{d.f()}return i?"array"==S(u)?u.splice(r,1):delete u[r]:null!==r?u[r]=o:c=o,e.set(t,"global","src",c),c},e.deepCopy=function(t,n){var r,a=S(t),i=n.shift();return"array"==a?r=M(t):"object"==a&&(r=o({},t)),void 0!==i&&(r[i]=e.deepCopy(t[i],n)),r},e}return n}(R.EventEmitter));L.register($.handleAction.bind($));var B=$,W=function(e){u(n,e);var t=m(n);function n(e){var r;return i(this,n),(r=t.call(this,e)).toggleCollapsed=function(){r.setState({collapsed:!r.state.collapsed},(function(){B.set(r.props.rjvId,r.props.namespace,"collapsed",r.state.collapsed)}))},r.getFunctionDisplay=function(e){var t=p(r).props;return e?g.a.createElement("span",null,r.props.value.toString().slice(9,-1).replace(/\{[\s\S]+/,""),g.a.createElement("span",{className:"function-collapsed",style:{fontWeight:"bold"}},g.a.createElement("span",null,"{"),g.a.createElement("span",P(t.theme,"ellipsis"),"..."),g.a.createElement("span",null,"}"))):r.props.value.toString().slice(9,-1)},r.state={collapsed:B.get(e.rjvId,e.namespace,"collapsed",!0)},r}return s(n,[{key:"render",value:function(){var e=this.props,t=this.state.collapsed;return g.a.createElement("div",P(e.theme,"function"),g.a.createElement(A,Object.assign({type_name:"function"},e)),g.a.createElement("span",Object.assign({},P(e.theme,"function-value"),{className:"rjv-function-container",onClick:this.toggleCollapsed}),this.getFunctionDisplay(t)))}}]),n}(g.a.PureComponent),V=function(e){u(n,e);var t=m(n);function n(){return i(this,n),t.apply(this,arguments)}return s(n,[{key:"render",value:function(){return g.a.createElement("div",P(this.props.theme,"nan"),"NaN")}}]),n}(g.a.PureComponent),q=function(e){u(n,e);var t=m(n);function n(){return i(this,n),t.apply(this,arguments)}return s(n,[{key:"render",value:function(){return g.a.createElement("div",P(this.props.theme,"null"),"NULL")}}]),n}(g.a.PureComponent),U=function(e){u(n,e);var t=m(n);function n(){return i(this,n),t.apply(this,arguments)}return s(n,[{key:"render",value:function(){var e=this.props;return g.a.createElement("div",P(e.theme,"integer"),g.a.createElement(A,Object.assign({type_name:"int"},e)),this.props.value)}}]),n}(g.a.PureComponent),H=function(e){u(n,e);var t=m(n);function n(){return i(this,n),t.apply(this,arguments)}return s(n,[{key:"render",value:function(){var e=this.props;return g.a.createElement("div",P(e.theme,"regexp"),g.a.createElement(A,Object.assign({type_name:"regexp"},e)),this.props.value.toString())}}]),n}(g.a.PureComponent),K=function(e){u(n,e);var t=m(n);function n(e){var r;return i(this,n),(r=t.call(this,e)).toggleCollapsed=function(){r.setState({collapsed:!r.state.collapsed},(function(){B.set(r.props.rjvId,r.props.namespace,"collapsed",r.state.collapsed)}))},r.state={collapsed:B.get(e.rjvId,e.namespace,"collapsed",!0)},r}return s(n,[{key:"render",value:function(){this.state.collapsed;var e=this.props,t=e.collapseStringsAfterLength,n=e.theme,r=e.value,a={style:{cursor:"default"}};return"integer"===S(t)&&r.length>t&&(a.style.cursor="pointer",this.state.collapsed&&(r=g.a.createElement("span",null,r.substring(0,t),g.a.createElement("span",P(n,"ellipsis")," ...")))),g.a.createElement("div",P(n,"string"),g.a.createElement(A,Object.assign({type_name:"string"},e)),g.a.createElement("span",Object.assign({className:"string-value"},a,{onClick:this.toggleCollapsed}),'"',r,'"'))}}]),n}(g.a.PureComponent),G=function(e){u(n,e);var t=m(n);function n(){return i(this,n),t.apply(this,arguments)}return s(n,[{key:"render",value:function(){return g.a.createElement("div",P(this.props.theme,"undefined"),"undefined")}}]),n}(g.a.PureComponent);function Q(){return(Q=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var Y=b.useLayoutEffect,J=function(e){var t=Object(b.useRef)(e);return Y((function(){t.current=e})),t},X=function(e,t){"function"!=typeof e?e.current=t:e(t)},Z=function(e,t){var n=Object(b.useRef)();return Object(b.useCallback)((function(r){e.current=r,n.current&&X(n.current,null),n.current=t,t&&X(t,r)}),[t])},ee={"min-height":"0","max-height":"none",height:"0",visibility:"hidden",overflow:"hidden",position:"absolute","z-index":"-1000",top:"0",right:"0"},te=function(e){Object.keys(ee).forEach((function(t){e.style.setProperty(t,ee[t],"important")}))},ne=null,re=function(){},ae=["borderBottomWidth","borderLeftWidth","borderRightWidth","borderTopWidth","boxSizing","fontFamily","fontSize","fontStyle","fontWeight","letterSpacing","lineHeight","paddingBottom","paddingLeft","paddingRight","paddingTop","tabSize","textIndent","textRendering","textTransform","width"],oe=!!document.documentElement.currentStyle,ie=function(e,t){var n,r=e.cacheMeasurements,a=e.maxRows,o=e.minRows,i=e.onChange,l=void 0===i?re:i,s=e.onHeightChange,c=void 0===s?re:s,u=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,["cacheMeasurements","maxRows","minRows","onChange","onHeightChange"]),d=void 0!==u.value,f=Object(b.useRef)(null),p=Z(f,t),h=Object(b.useRef)(0),m=Object(b.useRef)(),g=function(){var e=f.current,t=r&&m.current?m.current:function(e){var t=window.getComputedStyle(e);if(null===t)return null;var n,r=(n=t,ae.reduce((function(e,t){return e[t]=n[t],e}),{})),a=r.boxSizing;return""===a?null:(oe&&"border-box"===a&&(r.width=parseFloat(r.width)+parseFloat(r.borderRightWidth)+parseFloat(r.borderLeftWidth)+parseFloat(r.paddingRight)+parseFloat(r.paddingLeft)+"px"),{sizingStyle:r,paddingSize:parseFloat(r.paddingBottom)+parseFloat(r.paddingTop),borderSize:parseFloat(r.borderBottomWidth)+parseFloat(r.borderTopWidth)})}(e);if(t){m.current=t;var n=function(e,t,n,r){void 0===n&&(n=1),void 0===r&&(r=1/0),ne||((ne=document.createElement("textarea")).setAttribute("tab-index","-1"),ne.setAttribute("aria-hidden","true"),te(ne)),null===ne.parentNode&&document.body.appendChild(ne);var a=e.paddingSize,o=e.borderSize,i=e.sizingStyle,l=i.boxSizing;Object.keys(i).forEach((function(e){var t=e;ne.style[t]=i[t]})),te(ne),ne.value=t;var s=function(e,t){var n=e.scrollHeight;return"border-box"===t.sizingStyle.boxSizing?n+t.borderSize:n-t.paddingSize}(ne,e);ne.value="x";var c=ne.scrollHeight-a,u=c*n;"border-box"===l&&(u=u+a+o),s=Math.max(u,s);var d=c*r;return"border-box"===l&&(d=d+a+o),[s=Math.min(d,s),c]}(t,e.value||e.placeholder||"x",o,a),i=n[0],l=n[1];h.current!==i&&(h.current=i,e.style.setProperty("height",i+"px","important"),c(i,{rowHeight:l}))}};return Object(b.useLayoutEffect)(g),n=J(g),Object(b.useLayoutEffect)((function(){var e=function(e){n.current(e)};return window.addEventListener("resize",e),function(){window.removeEventListener("resize",e)}}),[]),Object(b.createElement)("textarea",Q({},u,{onChange:function(e){d||g(),l(e)},ref:p}))},le=Object(b.forwardRef)(ie);function se(e){e=e.trim();try{if("["===(e=JSON.stringify(JSON.parse(e)))[0])return ce("array",JSON.parse(e));if("{"===e[0])return ce("object",JSON.parse(e));if(e.match(/\-?\d+\.\d+/)&&e.match(/\-?\d+\.\d+/)[0]===e)return ce("float",parseFloat(e));if(e.match(/\-?\d+e-\d+/)&&e.match(/\-?\d+e-\d+/)[0]===e)return ce("float",Number(e));if(e.match(/\-?\d+/)&&e.match(/\-?\d+/)[0]===e)return ce("integer",parseInt(e));if(e.match(/\-?\d+e\+\d+/)&&e.match(/\-?\d+e\+\d+/)[0]===e)return ce("integer",Number(e))}catch(e){}switch(e=e.toLowerCase()){case"undefined":return ce("undefined",void 0);case"nan":return ce("nan",NaN);case"null":return ce("null",null);case"true":return ce("boolean",!0);case"false":return ce("boolean",!1);default:if(e=Date.parse(e))return ce("date",new Date(e))}return ce(!1,null)}function ce(e,t){return{type:e,value:t}}var ue=function(e){u(n,e);var t=m(n);function n(){return i(this,n),t.apply(this,arguments)}return s(n,[{key:"render",value:function(){var e=this.props,t=e.style,n=k(e,["style"]);return g.a.createElement("span",n,g.a.createElement("svg",Object.assign({},ke(t),{viewBox:"0 0 24 24",fill:"currentColor",preserveAspectRatio:"xMidYMid meet"}),g.a.createElement("path",{d:"M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M7,13H17V11H7"})))}}]),n}(g.a.PureComponent),de=function(e){u(n,e);var t=m(n);function n(){return i(this,n),t.apply(this,arguments)}return s(n,[{key:"render",value:function(){var e=this.props,t=e.style,n=k(e,["style"]);return g.a.createElement("span",n,g.a.createElement("svg",Object.assign({},ke(t),{viewBox:"0 0 24 24",fill:"currentColor",preserveAspectRatio:"xMidYMid meet"}),g.a.createElement("path",{d:"M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M13,7H11V11H7V13H11V17H13V13H17V11H13V7Z"})))}}]),n}(g.a.PureComponent),fe=function(e){u(n,e);var t=m(n);function n(){return i(this,n),t.apply(this,arguments)}return s(n,[{key:"render",value:function(){var e=this.props,t=e.style,n=k(e,["style"]),r=ke(t).style;return g.a.createElement("span",n,g.a.createElement("svg",{fill:r.color,width:r.height,height:r.width,style:r,viewBox:"0 0 1792 1792"},g.a.createElement("path",{d:"M1344 800v64q0 14-9 23t-23 9h-832q-14 0-23-9t-9-23v-64q0-14 9-23t23-9h832q14 0 23 9t9 23zm128 448v-832q0-66-47-113t-113-47h-832q-66 0-113 47t-47 113v832q0 66 47 113t113 47h832q66 0 113-47t47-113zm128-832v832q0 119-84.5 203.5t-203.5 84.5h-832q-119 0-203.5-84.5t-84.5-203.5v-832q0-119 84.5-203.5t203.5-84.5h832q119 0 203.5 84.5t84.5 203.5z"})))}}]),n}(g.a.PureComponent),pe=function(e){u(n,e);var t=m(n);function n(){return i(this,n),t.apply(this,arguments)}return s(n,[{key:"render",value:function(){var e=this.props,t=e.style,n=k(e,["style"]),r=ke(t).style;return g.a.createElement("span",n,g.a.createElement("svg",{fill:r.color,width:r.height,height:r.width,style:r,viewBox:"0 0 1792 1792"},g.a.createElement("path",{d:"M1344 800v64q0 14-9 23t-23 9h-352v352q0 14-9 23t-23 9h-64q-14 0-23-9t-9-23v-352h-352q-14 0-23-9t-9-23v-64q0-14 9-23t23-9h352v-352q0-14 9-23t23-9h64q14 0 23 9t9 23v352h352q14 0 23 9t9 23zm128 448v-832q0-66-47-113t-113-47h-832q-66 0-113 47t-47 113v832q0 66 47 113t113 47h832q66 0 113-47t47-113zm128-832v832q0 119-84.5 203.5t-203.5 84.5h-832q-119 0-203.5-84.5t-84.5-203.5v-832q0-119 84.5-203.5t203.5-84.5h832q119 0 203.5 84.5t84.5 203.5z"})))}}]),n}(g.a.PureComponent),he=function(e){u(n,e);var t=m(n);function n(){return i(this,n),t.apply(this,arguments)}return s(n,[{key:"render",value:function(){var e=this.props,t=e.style,n=k(e,["style"]);return g.a.createElement("span",n,g.a.createElement("svg",{style:o(o({},ke(t).style),{},{paddingLeft:"2px",verticalAlign:"top"}),viewBox:"0 0 15 15",fill:"currentColor"},g.a.createElement("path",{d:"M0 14l6-6-6-6z"})))}}]),n}(g.a.PureComponent),me=function(e){u(n,e);var t=m(n);function n(){return i(this,n),t.apply(this,arguments)}return s(n,[{key:"render",value:function(){var e=this.props,t=e.style,n=k(e,["style"]);return g.a.createElement("span",n,g.a.createElement("svg",{style:o(o({},ke(t).style),{},{paddingLeft:"2px",verticalAlign:"top"}),viewBox:"0 0 15 15",fill:"currentColor"},g.a.createElement("path",{d:"M0 5l6 6 6-6z"})))}}]),n}(g.a.PureComponent),be=function(e){u(n,e);var t=m(n);function n(){return i(this,n),t.apply(this,arguments)}return s(n,[{key:"render",value:function(){var e=this.props,t=e.style,n=k(e,["style"]);return g.a.createElement("span",n,g.a.createElement("svg",Object.assign({},ke(t),{viewBox:"0 0 40 40",fill:"currentColor",preserveAspectRatio:"xMidYMid meet"}),g.a.createElement("g",null,g.a.createElement("path",{d:"m30 35h-25v-22.5h25v7.5h2.5v-12.5c0-1.4-1.1-2.5-2.5-2.5h-7.5c0-2.8-2.2-5-5-5s-5 2.2-5 5h-7.5c-1.4 0-2.5 1.1-2.5 2.5v27.5c0 1.4 1.1 2.5 2.5 2.5h25c1.4 0 2.5-1.1 2.5-2.5v-5h-2.5v5z m-20-27.5h2.5s2.5-1.1 2.5-2.5 1.1-2.5 2.5-2.5 2.5 1.1 2.5 2.5 1.3 2.5 2.5 2.5h2.5s2.5 1.1 2.5 2.5h-20c0-1.5 1.1-2.5 2.5-2.5z m-2.5 20h5v-2.5h-5v2.5z m17.5-5v-5l-10 7.5 10 7.5v-5h12.5v-5h-12.5z m-17.5 10h7.5v-2.5h-7.5v2.5z m12.5-17.5h-12.5v2.5h12.5v-2.5z m-7.5 5h-5v2.5h5v-2.5z"}))))}}]),n}(g.a.PureComponent),ge=function(e){u(n,e);var t=m(n);function n(){return i(this,n),t.apply(this,arguments)}return s(n,[{key:"render",value:function(){var e=this.props,t=e.style,n=k(e,["style"]);return g.a.createElement("span",n,g.a.createElement("svg",Object.assign({},ke(t),{viewBox:"0 0 40 40",fill:"currentColor",preserveAspectRatio:"xMidYMid meet"}),g.a.createElement("g",null,g.a.createElement("path",{d:"m28.6 25q0-0.5-0.4-1l-4-4 4-4q0.4-0.5 0.4-1 0-0.6-0.4-1.1l-2-2q-0.4-0.4-1-0.4-0.6 0-1 0.4l-4.1 4.1-4-4.1q-0.4-0.4-1-0.4-0.6 0-1 0.4l-2 2q-0.5 0.5-0.5 1.1 0 0.5 0.5 1l4 4-4 4q-0.5 0.5-0.5 1 0 0.7 0.5 1.1l2 2q0.4 0.4 1 0.4 0.6 0 1-0.4l4-4.1 4.1 4.1q0.4 0.4 1 0.4 0.6 0 1-0.4l2-2q0.4-0.4 0.4-1z m8.7-5q0 4.7-2.3 8.6t-6.3 6.2-8.6 2.3-8.6-2.3-6.2-6.2-2.3-8.6 2.3-8.6 6.2-6.2 8.6-2.3 8.6 2.3 6.3 6.2 2.3 8.6z"}))))}}]),n}(g.a.PureComponent),ve=function(e){u(n,e);var t=m(n);function n(){return i(this,n),t.apply(this,arguments)}return s(n,[{key:"render",value:function(){var e=this.props,t=e.style,n=k(e,["style"]);return g.a.createElement("span",n,g.a.createElement("svg",Object.assign({},ke(t),{viewBox:"0 0 40 40",fill:"currentColor",preserveAspectRatio:"xMidYMid meet"}),g.a.createElement("g",null,g.a.createElement("path",{d:"m30.1 21.4v-2.8q0-0.6-0.4-1t-1-0.5h-5.7v-5.7q0-0.6-0.4-1t-1-0.4h-2.9q-0.6 0-1 0.4t-0.4 1v5.7h-5.7q-0.6 0-1 0.5t-0.5 1v2.8q0 0.6 0.5 1t1 0.5h5.7v5.7q0 0.5 0.4 1t1 0.4h2.9q0.6 0 1-0.4t0.4-1v-5.7h5.7q0.6 0 1-0.5t0.4-1z m7.2-1.4q0 4.7-2.3 8.6t-6.3 6.2-8.6 2.3-8.6-2.3-6.2-6.2-2.3-8.6 2.3-8.6 6.2-6.2 8.6-2.3 8.6 2.3 6.3 6.2 2.3 8.6z"}))))}}]),n}(g.a.PureComponent),ye=function(e){u(n,e);var t=m(n);function n(){return i(this,n),t.apply(this,arguments)}return s(n,[{key:"render",value:function(){var e=this.props,t=e.style,n=k(e,["style"]);return g.a.createElement("span",n,g.a.createElement("svg",Object.assign({},ke(t),{viewBox:"0 0 40 40",fill:"currentColor",preserveAspectRatio:"xMidYMid meet"}),g.a.createElement("g",null,g.a.createElement("path",{d:"m31.6 21.6h-10v10h-3.2v-10h-10v-3.2h10v-10h3.2v10h10v3.2z"}))))}}]),n}(g.a.PureComponent),xe=function(e){u(n,e);var t=m(n);function n(){return i(this,n),t.apply(this,arguments)}return s(n,[{key:"render",value:function(){var e=this.props,t=e.style,n=k(e,["style"]);return g.a.createElement("span",n,g.a.createElement("svg",Object.assign({},ke(t),{viewBox:"0 0 40 40",fill:"currentColor",preserveAspectRatio:"xMidYMid meet"}),g.a.createElement("g",null,g.a.createElement("path",{d:"m19.8 26.4l2.6-2.6-3.4-3.4-2.6 2.6v1.3h2.2v2.1h1.2z m9.8-16q-0.3-0.4-0.7 0l-7.8 7.8q-0.4 0.4 0 0.7t0.7 0l7.8-7.8q0.4-0.4 0-0.7z m1.8 13.2v4.3q0 2.6-1.9 4.5t-4.5 1.9h-18.6q-2.6 0-4.5-1.9t-1.9-4.5v-18.6q0-2.7 1.9-4.6t4.5-1.8h18.6q1.4 0 2.6 0.5 0.3 0.2 0.4 0.5 0.1 0.4-0.2 0.7l-1.1 1.1q-0.3 0.3-0.7 0.1-0.5-0.1-1-0.1h-18.6q-1.4 0-2.5 1.1t-1 2.5v18.6q0 1.4 1 2.5t2.5 1h18.6q1.5 0 2.5-1t1.1-2.5v-2.9q0-0.2 0.2-0.4l1.4-1.5q0.3-0.3 0.8-0.1t0.4 0.6z m-2.1-16.5l6.4 6.5-15 15h-6.4v-6.5z m9.9 3l-2.1 2-6.4-6.4 2.1-2q0.6-0.7 1.5-0.7t1.5 0.7l3.4 3.4q0.6 0.6 0.6 1.5t-0.6 1.5z"}))))}}]),n}(g.a.PureComponent),we=function(e){u(n,e);var t=m(n);function n(){return i(this,n),t.apply(this,arguments)}return s(n,[{key:"render",value:function(){var e=this.props,t=e.style,n=k(e,["style"]);return g.a.createElement("span",n,g.a.createElement("svg",Object.assign({},ke(t),{viewBox:"0 0 40 40",fill:"currentColor",preserveAspectRatio:"xMidYMid meet"}),g.a.createElement("g",null,g.a.createElement("path",{d:"m31.7 16.4q0-0.6-0.4-1l-2.1-2.1q-0.4-0.4-1-0.4t-1 0.4l-9.1 9.1-5-5q-0.5-0.4-1-0.4t-1 0.4l-2.1 2q-0.4 0.4-0.4 1 0 0.6 0.4 1l8.1 8.1q0.4 0.4 1 0.4 0.6 0 1-0.4l12.2-12.1q0.4-0.4 0.4-1z m5.6 3.6q0 4.7-2.3 8.6t-6.3 6.2-8.6 2.3-8.6-2.3-6.2-6.2-2.3-8.6 2.3-8.6 6.2-6.2 8.6-2.3 8.6 2.3 6.3 6.2 2.3 8.6z"}))))}}]),n}(g.a.PureComponent);function ke(e){return e||(e={}),{style:o(o({verticalAlign:"middle"},e),{},{color:e.color?e.color:"#000000",height:"1em",width:"1em"})}}var Se=function(e){u(n,e);var t=m(n);function n(e){var r;return i(this,n),(r=t.call(this,e)).copiedTimer=null,r.handleCopy=function(){var e=document.createElement("textarea"),t=r.props,n=t.clickCallback,a=t.src,o=t.namespace;e.innerHTML=JSON.stringify(r.clipboardValue(a),null,"  "),document.body.appendChild(e),e.select(),document.execCommand("copy"),document.body.removeChild(e),r.copiedTimer=setTimeout((function(){r.setState({copied:!1})}),5500),r.setState({copied:!0},(function(){"function"==typeof n&&n({src:a,namespace:o,name:o[o.length-1]})}))},r.getClippyIcon=function(){var e=r.props.theme;return r.state.copied?g.a.createElement("span",null,g.a.createElement(be,Object.assign({className:"copy-icon"},P(e,"copy-icon"))),g.a.createElement("span",P(e,"copy-icon-copied"),"\u2714")):g.a.createElement(be,Object.assign({className:"copy-icon"},P(e,"copy-icon")))},r.clipboardValue=function(e){switch(S(e)){case"function":case"regexp":return e.toString();default:return e}},r.state={copied:!1},r}return s(n,[{key:"componentWillUnmount",value:function(){this.copiedTimer&&(clearTimeout(this.copiedTimer),this.copiedTimer=null)}},{key:"render",value:function(){var e=this.props,t=(e.src,e.theme),n=e.hidden,r=e.rowHovered,a=P(t,"copy-to-clipboard").style,i="inline";return n&&(i="none"),g.a.createElement("span",{className:"copy-to-clipboard-container",title:"Copy to clipboard",style:{verticalAlign:"top",display:r?"inline-block":"none"}},g.a.createElement("span",{style:o(o({},a),{},{display:i}),onClick:this.handleCopy},this.getClippyIcon()))}}]),n}(g.a.PureComponent),Ee=function(e){u(n,e);var t=m(n);function n(e){var r;return i(this,n),(r=t.call(this,e)).getEditIcon=function(){var e=r.props,t=e.variable,n=e.theme;return g.a.createElement("div",{className:"click-to-edit",style:{verticalAlign:"top",display:r.state.hovered?"inline-block":"none"}},g.a.createElement(xe,Object.assign({className:"click-to-edit-icon"},P(n,"editVarIcon"),{onClick:function(){r.prepopInput(t)}})))},r.prepopInput=function(e){if(!1!==r.props.onEdit){var t=function(e){var t;switch(S(e)){case"undefined":t="undefined";break;case"nan":t="NaN";break;case"string":t=e;break;case"date":case"function":case"regexp":t=e.toString();break;default:try{t=JSON.stringify(e,null,"  ")}catch(e){t=""}}return t}(e.value),n=se(t);r.setState({editMode:!0,editValue:t,parsedInput:{type:n.type,value:n.value}})}},r.getRemoveIcon=function(){var e=r.props,t=e.variable,n=e.namespace,a=e.theme,o=e.rjvId;return g.a.createElement("div",{className:"click-to-remove",style:{verticalAlign:"top",display:r.state.hovered?"inline-block":"none"}},g.a.createElement(ge,Object.assign({className:"click-to-remove-icon"},P(a,"removeVarIcon"),{onClick:function(){L.dispatch({name:"VARIABLE_REMOVED",rjvId:o,data:{name:t.name,namespace:n,existing_value:t.value,variable_removed:!0}})}})))},r.getValue=function(e,t){var n=!t&&e.type,a=p(r).props;switch(n){case!1:return r.getEditInput();case"string":return g.a.createElement(K,Object.assign({value:e.value},a));case"integer":return g.a.createElement(U,Object.assign({value:e.value},a));case"float":return g.a.createElement(N,Object.assign({value:e.value},a));case"boolean":return g.a.createElement(z,Object.assign({value:e.value},a));case"function":return g.a.createElement(W,Object.assign({value:e.value},a));case"null":return g.a.createElement(q,a);case"nan":return g.a.createElement(V,a);case"undefined":return g.a.createElement(G,a);case"date":return g.a.createElement(T,Object.assign({value:e.value},a));case"regexp":return g.a.createElement(H,Object.assign({value:e.value},a));default:return g.a.createElement("div",{className:"object-value"},JSON.stringify(e.value))}},r.getEditInput=function(){var e=r.props.theme,t=r.state.editValue;return g.a.createElement("div",null,g.a.createElement(le,Object.assign({type:"text",inputRef:function(e){return e&&e.focus()},value:t,className:"variable-editor",onChange:function(e){var t=e.target.value,n=se(t);r.setState({editValue:t,parsedInput:{type:n.type,value:n.value}})},onKeyDown:function(e){switch(e.key){case"Escape":r.setState({editMode:!1,editValue:""});break;case"Enter":(e.ctrlKey||e.metaKey)&&r.submitEdit(!0)}e.stopPropagation()},placeholder:"update this value",minRows:2},P(e,"edit-input"))),g.a.createElement("div",P(e,"edit-icon-container"),g.a.createElement(ge,Object.assign({className:"edit-cancel"},P(e,"cancel-icon"),{onClick:function(){r.setState({editMode:!1,editValue:""})}})),g.a.createElement(we,Object.assign({className:"edit-check string-value"},P(e,"check-icon"),{onClick:function(){r.submitEdit()}})),g.a.createElement("div",null,r.showDetected())))},r.submitEdit=function(e){var t=r.props,n=t.variable,a=t.namespace,o=t.rjvId,i=r.state,l=i.editValue,s=i.parsedInput,c=l;e&&s.type&&(c=s.value),r.setState({editMode:!1}),L.dispatch({name:"VARIABLE_UPDATED",rjvId:o,data:{name:n.name,namespace:a,existing_value:n.value,new_value:c,variable_removed:!1}})},r.showDetected=function(){var e=r.props,t=e.theme,n=(e.variable,e.namespace,e.rjvId,r.state.parsedInput),a=(n.type,n.value,r.getDetectedInput());if(a)return g.a.createElement("div",null,g.a.createElement("div",P(t,"detected-row"),a,g.a.createElement(we,{className:"edit-check detected",style:o({verticalAlign:"top",paddingLeft:"3px"},P(t,"check-icon").style),onClick:function(){r.submitEdit(!0)}})))},r.getDetectedInput=function(){var e=r.state.parsedInput,t=e.type,n=e.value,a=p(r).props,i=a.theme;if(!1!==t)switch(t.toLowerCase()){case"object":return g.a.createElement("span",null,g.a.createElement("span",{style:o(o({},P(i,"brace").style),{},{cursor:"default"})},"{"),g.a.createElement("span",{style:o(o({},P(i,"ellipsis").style),{},{cursor:"default"})},"..."),g.a.createElement("span",{style:o(o({},P(i,"brace").style),{},{cursor:"default"})},"}"));case"array":return g.a.createElement("span",null,g.a.createElement("span",{style:o(o({},P(i,"brace").style),{},{cursor:"default"})},"["),g.a.createElement("span",{style:o(o({},P(i,"ellipsis").style),{},{cursor:"default"})},"..."),g.a.createElement("span",{style:o(o({},P(i,"brace").style),{},{cursor:"default"})},"]"));case"string":return g.a.createElement(K,Object.assign({value:n},a));case"integer":return g.a.createElement(U,Object.assign({value:n},a));case"float":return g.a.createElement(N,Object.assign({value:n},a));case"boolean":return g.a.createElement(z,Object.assign({value:n},a));case"function":return g.a.createElement(W,Object.assign({value:n},a));case"null":return g.a.createElement(q,a);case"nan":return g.a.createElement(V,a);case"undefined":return g.a.createElement(G,a);case"date":return g.a.createElement(T,Object.assign({value:new Date(n)},a))}},r.state={editMode:!1,editValue:"",hovered:!1,renameKey:!1,parsedInput:{type:!1,value:null}},r}return s(n,[{key:"render",value:function(){var e=this,t=this.props,n=t.variable,r=t.singleIndent,a=t.type,i=t.theme,l=t.namespace,s=t.indentWidth,c=t.enableClipboard,u=t.onEdit,d=t.onDelete,f=t.onSelect,p=t.displayArrayKey,h=t.quotesOnKeys,m=this.state.editMode;return g.a.createElement("div",Object.assign({},P(i,"objectKeyVal",{paddingLeft:s*r}),{onMouseEnter:function(){return e.setState(o(o({},e.state),{},{hovered:!0}))},onMouseLeave:function(){return e.setState(o(o({},e.state),{},{hovered:!1}))},className:"variable-row",key:n.name}),"array"==a?p?g.a.createElement("span",Object.assign({},P(i,"array-key"),{key:n.name+"_"+l}),n.name,g.a.createElement("div",P(i,"colon"),":")):null:g.a.createElement("span",null,g.a.createElement("span",Object.assign({},P(i,"object-name"),{className:"object-key",key:n.name+"_"+l}),!!h&&g.a.createElement("span",{style:{verticalAlign:"top"}},'"'),g.a.createElement("span",{style:{display:"inline-block"}},n.name),!!h&&g.a.createElement("span",{style:{verticalAlign:"top"}},'"')),g.a.createElement("span",P(i,"colon"),":")),g.a.createElement("div",Object.assign({className:"variable-value",onClick:!1===f&&!1===u?null:function(t){var r=M(l);(t.ctrlKey||t.metaKey)&&!1!==u?e.prepopInput(n):!1!==f&&(r.shift(),f(o(o({},n),{},{namespace:r})))}},P(i,"variableValue",{cursor:!1===f?"default":"pointer"})),this.getValue(n,m)),c?g.a.createElement(Se,{rowHovered:this.state.hovered,hidden:m,src:n.value,clickCallback:c,theme:i,namespace:[].concat(M(l),[n.name])}):null,!1!==u&&0==m?this.getEditIcon():null,!1!==d&&0==m?this.getRemoveIcon():null)}}]),n}(g.a.PureComponent),je=function(e){u(n,e);var t=m(n);function n(){var e;i(this,n);for(var r=arguments.length,a=new Array(r),l=0;l<r;l++)a[l]=arguments[l];return(e=t.call.apply(t,[this].concat(a))).getObjectSize=function(){var t=e.props,n=t.size,r=t.theme;if(t.displayObjectSize)return g.a.createElement("span",Object.assign({className:"object-size"},P(r,"object-size")),n," item",1===n?"":"s")},e.getAddAttribute=function(t){var n=e.props,r=n.theme,a=n.namespace,i=n.name,l=n.src,s=n.rjvId,c=n.depth;return g.a.createElement("span",{className:"click-to-add",style:{verticalAlign:"top",display:t?"inline-block":"none"}},g.a.createElement(ve,Object.assign({className:"click-to-add-icon"},P(r,"addVarIcon"),{onClick:function(){var e={name:c>0?i:null,namespace:a.splice(0,a.length-1),existing_value:l,variable_removed:!1,key_name:null};"object"===S(l)?L.dispatch({name:"ADD_VARIABLE_KEY_REQUEST",rjvId:s,data:e}):L.dispatch({name:"VARIABLE_ADDED",rjvId:s,data:o(o({},e),{},{new_value:[].concat(M(l),[null])})})}})))},e.getRemoveObject=function(t){var n=e.props,r=n.theme,a=(n.hover,n.namespace),o=n.name,i=n.src,l=n.rjvId;if(1!==a.length)return g.a.createElement("span",{className:"click-to-remove",style:{display:t?"inline-block":"none"}},g.a.createElement(ge,Object.assign({className:"click-to-remove-icon"},P(r,"removeVarIcon"),{onClick:function(){L.dispatch({name:"VARIABLE_REMOVED",rjvId:l,data:{name:o,namespace:a.splice(0,a.length-1),existing_value:i,variable_removed:!0}})}})))},e.render=function(){var t=e.props,n=t.theme,r=t.onDelete,a=t.onAdd,o=t.enableClipboard,i=t.src,l=t.namespace,s=t.rowHovered;return g.a.createElement("div",Object.assign({},P(n,"object-meta-data"),{className:"object-meta-data",onClick:function(e){e.stopPropagation()}}),e.getObjectSize(),o?g.a.createElement(Se,{rowHovered:s,clickCallback:o,src:i,theme:n,namespace:l}):null,!1!==a?e.getAddAttribute(s):null,!1!==r?e.getRemoveObject(s):null)},e}return n}(g.a.PureComponent);function Ce(e){var t=e.parent_type,n=e.namespace,r=e.quotesOnKeys,a=e.theme,o=e.jsvRoot,i=e.name,l=e.displayArrayKey,s=e.name?e.name:"";return!o||!1!==i&&null!==i?"array"==t?l?g.a.createElement("span",Object.assign({},P(a,"array-key"),{key:n}),g.a.createElement("span",{className:"array-key"},s),g.a.createElement("span",P(a,"colon"),":")):g.a.createElement("span",null):g.a.createElement("span",Object.assign({},P(a,"object-name"),{key:n}),g.a.createElement("span",{className:"object-key"},r&&g.a.createElement("span",{style:{verticalAlign:"top"}},'"'),g.a.createElement("span",null,s),r&&g.a.createElement("span",{style:{verticalAlign:"top"}},'"')),g.a.createElement("span",P(a,"colon"),":")):g.a.createElement("span",null)}function _e(e){var t=e.theme;switch(e.iconStyle){case"triangle":return g.a.createElement(me,Object.assign({},P(t,"expanded-icon"),{className:"expanded-icon"}));case"square":return g.a.createElement(fe,Object.assign({},P(t,"expanded-icon"),{className:"expanded-icon"}));default:return g.a.createElement(ue,Object.assign({},P(t,"expanded-icon"),{className:"expanded-icon"}))}}function Oe(e){var t=e.theme;switch(e.iconStyle){case"triangle":return g.a.createElement(he,Object.assign({},P(t,"collapsed-icon"),{className:"collapsed-icon"}));case"square":return g.a.createElement(pe,Object.assign({},P(t,"collapsed-icon"),{className:"collapsed-icon"}));default:return g.a.createElement(de,Object.assign({},P(t,"collapsed-icon"),{className:"collapsed-icon"}))}}var Pe=function(e){u(n,e);var t=m(n);function n(e){var r;return i(this,n),(r=t.call(this,e)).toggleCollapsed=function(e){var t=[];for(var n in r.state.expanded)t.push(r.state.expanded[n]);t[e]=!t[e],r.setState({expanded:t})},r.state={expanded:[]},r}return s(n,[{key:"getExpandedIcon",value:function(e){var t=this.props,n=t.theme,r=t.iconStyle;return this.state.expanded[e]?g.a.createElement(_e,{theme:n,iconStyle:r}):g.a.createElement(Oe,{theme:n,iconStyle:r})}},{key:"render",value:function(){var e=this,t=this.props,n=t.src,r=t.groupArraysAfterLength,a=(t.depth,t.name),o=t.theme,i=t.jsvRoot,l=t.namespace,s=(t.parent_type,k(t,["src","groupArraysAfterLength","depth","name","theme","jsvRoot","namespace","parent_type"])),c=0,u=5*this.props.indentWidth;i||(c=5*this.props.indentWidth);var d=r,f=Math.ceil(n.length/d);return g.a.createElement("div",Object.assign({className:"object-key-val"},P(o,i?"jsv-root":"objectKeyVal",{paddingLeft:c})),g.a.createElement(Ce,this.props),g.a.createElement("span",null,g.a.createElement(je,Object.assign({size:n.length},this.props))),M(Array(f)).map((function(t,r){return g.a.createElement("div",Object.assign({key:r,className:"object-key-val array-group"},P(o,"objectKeyVal",{marginLeft:6,paddingLeft:u})),g.a.createElement("span",P(o,"brace-row"),g.a.createElement("div",Object.assign({className:"icon-container"},P(o,"icon-container"),{onClick:function(t){e.toggleCollapsed(r)}}),e.getExpandedIcon(r)),e.state.expanded[r]?g.a.createElement(Te,Object.assign({key:a+r,depth:0,name:!1,collapsed:!1,groupArraysAfterLength:d,index_offset:r*d,src:n.slice(r*d,r*d+d),namespace:l,type:"array",parent_type:"array_group",theme:o},s)):g.a.createElement("span",Object.assign({},P(o,"brace"),{onClick:function(t){e.toggleCollapsed(r)},className:"array-group-brace"}),"[",g.a.createElement("div",Object.assign({},P(o,"array-group-meta-data"),{className:"array-group-meta-data"}),g.a.createElement("span",Object.assign({className:"object-size"},P(o,"object-size")),r*d," - ",r*d+d>n.length?n.length:r*d+d)),"]")))})))}}]),n}(g.a.PureComponent),Ae=function(e){u(n,e);var t=m(n);function n(e){var r;i(this,n),(r=t.call(this,e)).toggleCollapsed=function(){r.setState({expanded:!r.state.expanded},(function(){B.set(r.props.rjvId,r.props.namespace,"expanded",r.state.expanded)}))},r.getObjectContent=function(e,t,n){return g.a.createElement("div",{className:"pushed-content object-container"},g.a.createElement("div",Object.assign({className:"object-content"},P(r.props.theme,"pushed-content")),r.renderObjectContents(t,n)))},r.getEllipsis=function(){return 0===r.state.size?null:g.a.createElement("div",Object.assign({},P(r.props.theme,"ellipsis"),{className:"node-ellipsis",onClick:r.toggleCollapsed}),"...")},r.getObjectMetaData=function(e){var t=r.props,n=(t.rjvId,t.theme,r.state),a=n.size,o=n.hovered;return g.a.createElement(je,Object.assign({rowHovered:o,size:a},r.props))},r.renderObjectContents=function(e,t){var n,a=r.props,o=a.depth,i=a.parent_type,l=a.index_offset,s=a.groupArraysAfterLength,c=a.namespace,u=r.state.object_type,d=[],f=Object.keys(e||{});return r.props.sortKeys&&"array"!==u&&(f=f.sort()),f.forEach((function(a){if(n=new ze(a,e[a]),"array_group"===i&&l&&(n.name=parseInt(n.name)+l),e.hasOwnProperty(a))if("object"===n.type)d.push(g.a.createElement(Te,Object.assign({key:n.name,depth:o+1,name:n.name,src:n.value,namespace:c.concat(n.name),parent_type:u},t)));else if("array"===n.type){var f=Te;s&&n.value.length>s&&(f=Pe),d.push(g.a.createElement(f,Object.assign({key:n.name,depth:o+1,name:n.name,src:n.value,namespace:c.concat(n.name),type:"array",parent_type:u},t)))}else d.push(g.a.createElement(Ee,Object.assign({key:n.name+"_"+c,variable:n,singleIndent:5,namespace:c,type:r.props.type},t)))})),d};var a=n.getState(e);return r.state=o(o({},a),{},{prevProps:{}}),r}return s(n,[{key:"getBraceStart",value:function(e,t){var n=this,r=this.props,a=r.src,o=r.theme,i=r.iconStyle;if("array_group"===r.parent_type)return g.a.createElement("span",null,g.a.createElement("span",P(o,"brace"),"array"===e?"[":"{"),t?this.getObjectMetaData(a):null);var l=t?_e:Oe;return g.a.createElement("span",null,g.a.createElement("span",Object.assign({onClick:function(e){n.toggleCollapsed()}},P(o,"brace-row")),g.a.createElement("div",Object.assign({className:"icon-container"},P(o,"icon-container")),g.a.createElement(l,{theme:o,iconStyle:i})),g.a.createElement(Ce,this.props),g.a.createElement("span",P(o,"brace"),"array"===e?"[":"{")),t?this.getObjectMetaData(a):null)}},{key:"render",value:function(){var e=this,t=this.props,n=t.depth,r=t.src,a=(t.namespace,t.name,t.type,t.parent_type),i=t.theme,l=t.jsvRoot,s=t.iconStyle,c=k(t,["depth","src","namespace","name","type","parent_type","theme","jsvRoot","iconStyle"]),u=this.state,d=u.object_type,f=u.expanded,p={};return l||"array_group"===a?"array_group"===a&&(p.borderLeft=0,p.display="inline"):p.paddingLeft=5*this.props.indentWidth,g.a.createElement("div",Object.assign({className:"object-key-val",onMouseEnter:function(){return e.setState(o(o({},e.state),{},{hovered:!0}))},onMouseLeave:function(){return e.setState(o(o({},e.state),{},{hovered:!1}))}},P(i,l?"jsv-root":"objectKeyVal",p)),this.getBraceStart(d,f),f?this.getObjectContent(n,r,o({theme:i,iconStyle:s},c)):this.getEllipsis(),g.a.createElement("span",{className:"brace-row"},g.a.createElement("span",{style:o(o({},P(i,"brace").style),{},{paddingLeft:f?"3px":"0px"})},"array"===d?"]":"}"),f?null:this.getObjectMetaData(r)))}}],[{key:"getDerivedStateFromProps",value:function(e,t){var r=t.prevProps;return e.src!==r.src||e.collapsed!==r.collapsed||e.name!==r.name||e.namespace!==r.namespace||e.rjvId!==r.rjvId?o(o({},n.getState(e)),{},{prevProps:e}):null}}]),n}(g.a.PureComponent);Ae.getState=function(e){var t=Object.keys(e.src).length,n=(!1===e.collapsed||!0!==e.collapsed&&e.collapsed>e.depth)&&(!e.shouldCollapse||!1===e.shouldCollapse({name:e.name,src:e.src,type:S(e.src),namespace:e.namespace}))&&0!==t;return{expanded:B.get(e.rjvId,e.namespace,"expanded",n),object_type:"array"===e.type?"array":"object",parent_type:"array"===e.type?"array":"object",size:t,hovered:!1}};var ze=function e(t,n){i(this,e),this.name=t,this.value=n,this.type=S(n)};w(Ae);var Te=Ae,Ne=function(e){u(n,e);var t=m(n);function n(){var e;i(this,n);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(e=t.call.apply(t,[this].concat(a))).render=function(){var t=p(e).props,n=[t.name],r=Te;return Array.isArray(t.src)&&t.groupArraysAfterLength&&t.src.length>t.groupArraysAfterLength&&(r=Pe),g.a.createElement("div",{className:"pretty-json-container object-container"},g.a.createElement("div",{className:"object-content"},g.a.createElement(r,Object.assign({namespace:n,depth:0,jsvRoot:!0},t))))},e}return n}(g.a.PureComponent),De=function(e){u(n,e);var t=m(n);function n(e){var r;return i(this,n),(r=t.call(this,e)).closeModal=function(){L.dispatch({rjvId:r.props.rjvId,name:"RESET"})},r.submit=function(){r.props.submit(r.state.input)},r.state={input:e.input?e.input:""},r}return s(n,[{key:"render",value:function(){var e=this,t=this.props,n=t.theme,r=t.rjvId,a=t.isValid,o=this.state.input,i=a(o);return g.a.createElement("div",Object.assign({className:"key-modal-request"},P(n,"key-modal-request"),{onClick:this.closeModal}),g.a.createElement("div",Object.assign({},P(n,"key-modal"),{onClick:function(e){e.stopPropagation()}}),g.a.createElement("div",P(n,"key-modal-label"),"Key Name:"),g.a.createElement("div",{style:{position:"relative"}},g.a.createElement("input",Object.assign({},P(n,"key-modal-input"),{className:"key-modal-input",ref:function(e){return e&&e.focus()},spellCheck:!1,value:o,placeholder:"...",onChange:function(t){e.setState({input:t.target.value})},onKeyPress:function(t){i&&"Enter"===t.key?e.submit():"Escape"===t.key&&e.closeModal()}})),i?g.a.createElement(we,Object.assign({},P(n,"key-modal-submit"),{className:"key-modal-submit",onClick:function(t){return e.submit()}})):null),g.a.createElement("span",P(n,"key-modal-cancel"),g.a.createElement(ye,Object.assign({},P(n,"key-modal-cancel-icon"),{className:"key-modal-cancel",onClick:function(){L.dispatch({rjvId:r,name:"RESET"})}})))))}}]),n}(g.a.PureComponent),Fe=function(e){u(n,e);var t=m(n);function n(){var e;i(this,n);for(var r=arguments.length,a=new Array(r),l=0;l<r;l++)a[l]=arguments[l];return(e=t.call.apply(t,[this].concat(a))).isValid=function(t){var n=e.props.rjvId,r=B.get(n,"action","new-key-request");return""!=t&&-1===Object.keys(r.existing_value).indexOf(t)},e.submit=function(t){var n=e.props.rjvId,r=B.get(n,"action","new-key-request");r.new_value=o({},r.existing_value),r.new_value[t]=e.props.defaultValue,L.dispatch({name:"VARIABLE_ADDED",rjvId:n,data:r})},e}return s(n,[{key:"render",value:function(){var e=this.props,t=e.active,n=e.theme,r=e.rjvId;return t?g.a.createElement(De,{rjvId:r,theme:n,isValid:this.isValid,submit:this.submit}):null}}]),n}(g.a.PureComponent),Ie=function(e){u(n,e);var t=m(n);function n(){return i(this,n),t.apply(this,arguments)}return s(n,[{key:"render",value:function(){var e=this.props,t=e.message,n=e.active,r=e.theme,a=e.rjvId;return n?g.a.createElement("div",Object.assign({className:"validation-failure"},P(r,"validation-failure"),{onClick:function(){L.dispatch({rjvId:a,name:"RESET"})}}),g.a.createElement("span",P(r,"validation-failure-label"),t),g.a.createElement(ye,P(r,"validation-failure-clear"))):null}}]),n}(g.a.PureComponent),Me=function(e){u(n,e);var t=m(n);function n(e){var r;return i(this,n),(r=t.call(this,e)).rjvId=Date.now().toString(),r.getListeners=function(){return{reset:r.resetState,"variable-update":r.updateSrc,"add-key-request":r.addKeyRequest}},r.updateSrc=function(){var e,t=B.get(r.rjvId,"action","variable-update"),n=t.name,a=t.namespace,o=t.new_value,i=t.existing_value,l=(t.variable_removed,t.updated_src),s=t.type,c=r.props,u=c.onEdit,d=c.onDelete,f=c.onAdd,p={existing_src:r.state.src,new_value:o,updated_src:l,name:n,namespace:a,existing_value:i};switch(s){case"variable-added":e=f(p);break;case"variable-edited":e=u(p);break;case"variable-removed":e=d(p)}!1!==e?(B.set(r.rjvId,"global","src",l),r.setState({src:l})):r.setState({validationFailure:!0})},r.addKeyRequest=function(){r.setState({addKeyRequest:!0})},r.resetState=function(){r.setState({validationFailure:!1,addKeyRequest:!1})},r.state={addKeyRequest:!1,editKeyRequest:!1,validationFailure:!1,src:n.defaultProps.src,name:n.defaultProps.name,theme:n.defaultProps.theme,validationMessage:n.defaultProps.validationMessage,prevSrc:n.defaultProps.src,prevName:n.defaultProps.name,prevTheme:n.defaultProps.theme},r}return s(n,[{key:"componentDidMount",value:function(){B.set(this.rjvId,"global","src",this.state.src);var e=this.getListeners();for(var t in e)B.on(t+"-"+this.rjvId,e[t]);this.setState({addKeyRequest:!1,editKeyRequest:!1})}},{key:"componentDidUpdate",value:function(e,t){!1!==t.addKeyRequest&&this.setState({addKeyRequest:!1}),!1!==t.editKeyRequest&&this.setState({editKeyRequest:!1}),e.src!==this.state.src&&B.set(this.rjvId,"global","src",this.state.src)}},{key:"componentWillUnmount",value:function(){var e=this.getListeners();for(var t in e)B.removeListener(t+"-"+this.rjvId,e[t])}},{key:"render",value:function(){var e=this.state,t=e.validationFailure,n=e.validationMessage,r=e.addKeyRequest,a=e.theme,i=e.src,l=e.name,s=this.props,c=s.style,u=s.defaultValue;return g.a.createElement("div",{className:"react-json-view",style:o(o({},P(a,"app-container").style),c)},g.a.createElement(Ie,{message:n,active:t,theme:a,rjvId:this.rjvId}),g.a.createElement(Ne,Object.assign({},this.props,{src:i,name:l,theme:a,type:S(i),rjvId:this.rjvId})),g.a.createElement(Fe,{active:r,theme:a,rjvId:this.rjvId,defaultValue:u}))}}],[{key:"getDerivedStateFromProps",value:function(e,t){if(e.src!==t.prevSrc||e.name!==t.prevName||e.theme!==t.prevTheme){var r={src:e.src,name:e.name,theme:e.theme,validationMessage:e.validationMessage,prevSrc:e.src,prevName:e.name,prevTheme:e.theme};return n.validateState(r)}return null}}]),n}(g.a.PureComponent);Me.defaultProps={src:{},name:"root",theme:"rjv-default",collapsed:!1,collapseStringsAfterLength:!1,shouldCollapse:!1,sortKeys:!1,quotesOnKeys:!0,groupArraysAfterLength:100,indentWidth:4,enableClipboard:!0,displayObjectSize:!0,displayDataTypes:!0,onEdit:!1,onDelete:!1,onAdd:!1,onSelect:!1,iconStyle:"triangle",style:{},validationMessage:"Validation Error",defaultValue:null,displayArrayKey:!0},Me.validateState=function(e){var t={};return"object"!==S(e.theme)||function(e){var t=["base00","base01","base02","base03","base04","base05","base06","base07","base08","base09","base0A","base0B","base0C","base0D","base0E","base0F"];if("object"===S(e)){for(var n=0;n<t.length;n++)if(!(t[n]in e))return!1;return!0}return!1}(e.theme)||(console.error("react-json-view error:","theme prop must be a theme name or valid base-16 theme object.",'defaulting to "rjv-default" theme'),t.theme="rjv-default"),"object"!==S(e.src)&&"array"!==S(e.src)&&(console.error("react-json-view error:","src property must be a valid json object"),t.name="ERROR",t.src={message:"src property must be a valid json object"}),o(o({},e),t)},w(Me),t.default=Me}]))},950:(e,t,n)=>{"use strict";e.exports=n(49)}},t={};function n(r){var a=t[r];if(void 0!==a)return a.exports;var o=t[r]={exports:{}};return e[r].call(o.exports,o,o.exports,n),o.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.nc=void 0,(()=>{"use strict";var e=n(950),t=n(119),r=n(795),a=n.n(r);var o=function(){return o=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},o.apply(this,arguments)};Object.create;function i(e,t,n){if(n||2===arguments.length)for(var r,a=0,o=t.length;a<o;a++)!r&&a in t||(r||(r=Array.prototype.slice.call(t,0,a)),r[a]=t[a]);return e.concat(r||Array.prototype.slice.call(t))}Object.create;"function"===typeof SuppressedError&&SuppressedError;var l=n(403),s=n.n(l),c="-ms-",u="-moz-",d="-webkit-",f="comm",p="rule",h="decl",m="@keyframes",b=Math.abs,g=String.fromCharCode,v=Object.assign;function y(e){return e.trim()}function x(e,t){return(e=t.exec(e))?e[0]:e}function w(e,t,n){return e.replace(t,n)}function k(e,t,n){return e.indexOf(t,n)}function S(e,t){return 0|e.charCodeAt(t)}function E(e,t,n){return e.slice(t,n)}function j(e){return e.length}function C(e){return e.length}function _(e,t){return t.push(e),e}function O(e,t){return e.filter((function(e){return!x(e,t)}))}var P=1,A=1,z=0,T=0,N=0,D="";function F(e,t,n,r,a,o,i,l){return{value:e,root:t,parent:n,type:r,props:a,children:o,line:P,column:A,length:i,return:"",siblings:l}}function I(e,t){return v(F("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function M(e){for(;e.root;)e=I(e.root,{children:[e]});_(e,e.siblings)}function R(){return N=T>0?S(D,--T):0,A--,10===N&&(A=1,P--),N}function L(){return N=T<z?S(D,T++):0,A++,10===N&&(A=1,P++),N}function $(){return S(D,T)}function B(){return T}function W(e,t){return E(D,e,t)}function V(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function q(e){return P=A=1,z=j(D=e),T=0,[]}function U(e){return D="",e}function H(e){return y(W(T-1,Q(91===e?e+2:40===e?e+1:e)))}function K(e){for(;(N=$())&&N<33;)L();return V(e)>2||V(N)>3?"":" "}function G(e,t){for(;--t&&L()&&!(N<48||N>102||N>57&&N<65||N>70&&N<97););return W(e,B()+(t<6&&32==$()&&32==L()))}function Q(e){for(;L();)switch(N){case e:return T;case 34:case 39:34!==e&&39!==e&&Q(N);break;case 40:41===e&&Q(e);break;case 92:L()}return T}function Y(e,t){for(;L()&&e+N!==57&&(e+N!==84||47!==$()););return"/*"+W(t,T-1)+"*"+g(47===e?e:L())}function J(e){for(;!V($());)L();return W(e,T)}function X(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function Z(e,t,n,r){switch(e.type){case"@layer":if(e.children.length)break;case"@import":case h:return e.return=e.return||e.value;case f:return"";case m:return e.return=e.value+"{"+X(e.children,r)+"}";case p:if(!j(e.value=e.props.join(",")))return""}return j(n=X(e.children,r))?e.return=e.value+"{"+n+"}":""}function ee(e,t,n){switch(function(e,t){return 45^S(e,0)?(((t<<2^S(e,0))<<2^S(e,1))<<2^S(e,2))<<2^S(e,3):0}(e,t)){case 5103:return d+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return d+e+e;case 4789:return u+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return d+e+u+e+c+e+e;case 5936:switch(S(e,t+11)){case 114:return d+e+c+w(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return d+e+c+w(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return d+e+c+w(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return d+e+c+e+e;case 6165:return d+e+c+"flex-"+e+e;case 5187:return d+e+w(e,/(\w+).+(:[^]+)/,d+"box-$1$2"+c+"flex-$1$2")+e;case 5443:return d+e+c+"flex-item-"+w(e,/flex-|-self/g,"")+(x(e,/flex-|baseline/)?"":c+"grid-row-"+w(e,/flex-|-self/g,""))+e;case 4675:return d+e+c+"flex-line-pack"+w(e,/align-content|flex-|-self/g,"")+e;case 5548:return d+e+c+w(e,"shrink","negative")+e;case 5292:return d+e+c+w(e,"basis","preferred-size")+e;case 6060:return d+"box-"+w(e,"-grow","")+d+e+c+w(e,"grow","positive")+e;case 4554:return d+w(e,/([^-])(transform)/g,"$1"+d+"$2")+e;case 6187:return w(w(w(e,/(zoom-|grab)/,d+"$1"),/(image-set)/,d+"$1"),e,"")+e;case 5495:case 3959:return w(e,/(image-set\([^]*)/,d+"$1$`$1");case 4968:return w(w(e,/(.+:)(flex-)?(.*)/,d+"box-pack:$3"+c+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+d+e+e;case 4200:if(!x(e,/flex-|baseline/))return c+"grid-column-align"+E(e,t)+e;break;case 2592:case 3360:return c+w(e,"template-","")+e;case 4384:case 3616:return n&&n.some((function(e,n){return t=n,x(e.props,/grid-\w+-end/)}))?~k(e+(n=n[t].value),"span",0)?e:c+w(e,"-start","")+e+c+"grid-row-span:"+(~k(n,"span",0)?x(n,/\d+/):+x(n,/\d+/)-+x(e,/\d+/))+";":c+w(e,"-start","")+e;case 4896:case 4128:return n&&n.some((function(e){return x(e.props,/grid-\w+-start/)}))?e:c+w(w(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return w(e,/(.+)-inline(.+)/,d+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(j(e)-1-t>6)switch(S(e,t+1)){case 109:if(45!==S(e,t+4))break;case 102:return w(e,/(.+:)(.+)-([^]+)/,"$1"+d+"$2-$3$1"+u+(108==S(e,t+3)?"$3":"$2-$3"))+e;case 115:return~k(e,"stretch",0)?ee(w(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return w(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,(function(t,n,r,a,o,i,l){return c+n+":"+r+l+(a?c+n+"-span:"+(o?i:+i-+r)+l:"")+e}));case 4949:if(121===S(e,t+6))return w(e,":",":"+d)+e;break;case 6444:switch(S(e,45===S(e,14)?18:11)){case 120:return w(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+d+(45===S(e,14)?"inline-":"")+"box$3$1"+d+"$2$3$1"+c+"$2box$3")+e;case 100:return w(e,":",":"+c)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return w(e,"scroll-","scroll-snap-")+e}return e}function te(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case h:return void(e.return=ee(e.value,e.length,n));case m:return X([I(e,{value:w(e.value,"@","@"+d)})],r);case p:if(e.length)return function(e,t){return e.map(t).join("")}(n=e.props,(function(t){switch(x(t,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":M(I(e,{props:[w(t,/:(read-\w+)/,":-moz-$1")]})),M(I(e,{props:[t]})),v(e,{props:O(n,r)});break;case"::placeholder":M(I(e,{props:[w(t,/:(plac\w+)/,":"+d+"input-$1")]})),M(I(e,{props:[w(t,/:(plac\w+)/,":-moz-$1")]})),M(I(e,{props:[w(t,/:(plac\w+)/,c+"input-$1")]})),M(I(e,{props:[t]})),v(e,{props:O(n,r)})}return""}))}}function ne(e){return U(re("",null,null,null,[""],e=q(e),0,[0],e))}function re(e,t,n,r,a,o,i,l,s){for(var c=0,u=0,d=i,f=0,p=0,h=0,m=1,v=1,y=1,x=0,E="",C=a,O=o,P=r,A=E;v;)switch(h=x,x=L()){case 40:if(108!=h&&58==S(A,d-1)){-1!=k(A+=w(H(x),"&","&\f"),"&\f",b(c?l[c-1]:0))&&(y=-1);break}case 34:case 39:case 91:A+=H(x);break;case 9:case 10:case 13:case 32:A+=K(h);break;case 92:A+=G(B()-1,7);continue;case 47:switch($()){case 42:case 47:_(oe(Y(L(),B()),t,n,s),s);break;default:A+="/"}break;case 123*m:l[c++]=j(A)*y;case 125*m:case 59:case 0:switch(x){case 0:case 125:v=0;case 59+u:-1==y&&(A=w(A,/\f/g,"")),p>0&&j(A)-d&&_(p>32?ie(A+";",r,n,d-1,s):ie(w(A," ","")+";",r,n,d-2,s),s);break;case 59:A+=";";default:if(_(P=ae(A,t,n,c,u,a,l,E,C=[],O=[],d,o),o),123===x)if(0===u)re(A,t,P,P,C,o,d,l,O);else switch(99===f&&110===S(A,3)?100:f){case 100:case 108:case 109:case 115:re(e,P,P,r&&_(ae(e,P,P,0,0,a,l,E,a,C=[],d,O),O),a,O,d,l,r?C:O);break;default:re(A,P,P,P,[""],O,0,l,O)}}c=u=p=0,m=y=1,E=A="",d=i;break;case 58:d=1+j(A),p=h;default:if(m<1)if(123==x)--m;else if(125==x&&0==m++&&125==R())continue;switch(A+=g(x),x*m){case 38:y=u>0?1:(A+="\f",-1);break;case 44:l[c++]=(j(A)-1)*y,y=1;break;case 64:45===$()&&(A+=H(L())),f=$(),u=d=j(E=A+=J(B())),x++;break;case 45:45===h&&2==j(A)&&(m=0)}}return o}function ae(e,t,n,r,a,o,i,l,s,c,u,d){for(var f=a-1,h=0===a?o:[""],m=C(h),g=0,v=0,x=0;g<r;++g)for(var k=0,S=E(e,f+1,f=b(v=i[g])),j=e;k<m;++k)(j=y(v>0?h[k]+" "+S:w(S,/&\f/g,h[k])))&&(s[x++]=j);return F(e,t,n,0===a?p:l,s,c,u,d)}function oe(e,t,n,r){return F(e,t,n,f,g(N),E(e,2,-2),0,r)}function ie(e,t,n,r,a){return F(e,t,n,h,E(e,0,r),E(e,r+1,-1),r,a)}var le={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},se="undefined"!=typeof process&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}&&({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_ATTR||{NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_ATTR)||"data-styled",ce="active",ue="data-styled-version",de="6.1.17",fe="/*!sc*/\n",pe="undefined"!=typeof window&&"HTMLElement"in window,he=Boolean("boolean"==typeof SC_DISABLE_SPEEDY?SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_DISABLE_SPEEDY&&""!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_DISABLE_SPEEDY?"false"!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_DISABLE_SPEEDY&&{NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_DISABLE_SPEEDY&&""!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_DISABLE_SPEEDY&&("false"!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_DISABLE_SPEEDY&&{NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_DISABLE_SPEEDY)),me={},be=(new Set,Object.freeze([])),ge=Object.freeze({});function ve(e,t,n){return void 0===n&&(n=ge),e.theme!==n.theme&&e.theme||t||n.theme}var ye=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),xe=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,we=/(^-|-$)/g;function ke(e){return e.replace(xe,"-").replace(we,"")}var Se=/(a)(d)/gi,Ee=function(e){return String.fromCharCode(e+(e>25?39:97))};function je(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=Ee(t%52)+n;return(Ee(t%52)+n).replace(Se,"$1-$2")}var Ce,_e=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},Oe=function(e){return _e(5381,e)};function Pe(e){return je(Oe(e)>>>0)}function Ae(e){return e.displayName||e.name||"Component"}function ze(e){return"string"==typeof e&&!0}var Te="function"==typeof Symbol&&Symbol.for,Ne=Te?Symbol.for("react.memo"):60115,De=Te?Symbol.for("react.forward_ref"):60112,Fe={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Ie={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Me={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Re=((Ce={})[De]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Ce[Ne]=Me,Ce);function Le(e){return("type"in(t=e)&&t.type.$$typeof)===Ne?Me:"$$typeof"in e?Re[e.$$typeof]:Fe;var t}var $e=Object.defineProperty,Be=Object.getOwnPropertyNames,We=Object.getOwnPropertySymbols,Ve=Object.getOwnPropertyDescriptor,qe=Object.getPrototypeOf,Ue=Object.prototype;function He(e,t,n){if("string"!=typeof t){if(Ue){var r=qe(t);r&&r!==Ue&&He(e,r,n)}var a=Be(t);We&&(a=a.concat(We(t)));for(var o=Le(e),i=Le(t),l=0;l<a.length;++l){var s=a[l];if(!(s in Ie||n&&n[s]||i&&s in i||o&&s in o)){var c=Ve(t,s);try{$e(e,s,c)}catch(e){}}}}return e}function Ke(e){return"function"==typeof e}function Ge(e){return"object"==typeof e&&"styledComponentId"in e}function Qe(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function Ye(e,t){if(0===e.length)return"";for(var n=e[0],r=1;r<e.length;r++)n+=t?t+e[r]:e[r];return n}function Je(e){return null!==e&&"object"==typeof e&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function Xe(e,t,n){if(void 0===n&&(n=!1),!n&&!Je(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=Xe(e[r],t[r]);else if(Je(t))for(var r in t)e[r]=Xe(e[r],t[r]);return e}function Ze(e,t){Object.defineProperty(e,"toString",{value:t})}function et(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var tt=function(){function e(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}return e.prototype.indexOfGroup=function(e){for(var t=0,n=0;n<e;n++)t+=this.groupSizes[n];return t},e.prototype.insertRules=function(e,t){if(e>=this.groupSizes.length){for(var n=this.groupSizes,r=n.length,a=r;e>=a;)if((a<<=1)<0)throw et(16,"".concat(e));this.groupSizes=new Uint32Array(a),this.groupSizes.set(n),this.length=a;for(var o=r;o<a;o++)this.groupSizes[o]=0}for(var i=this.indexOfGroup(e+1),l=(o=0,t.length);o<l;o++)this.tag.insertRule(i,t[o])&&(this.groupSizes[e]++,i++)},e.prototype.clearGroup=function(e){if(e<this.length){var t=this.groupSizes[e],n=this.indexOfGroup(e),r=n+t;this.groupSizes[e]=0;for(var a=n;a<r;a++)this.tag.deleteRule(n)}},e.prototype.getGroup=function(e){var t="";if(e>=this.length||0===this.groupSizes[e])return t;for(var n=this.groupSizes[e],r=this.indexOfGroup(e),a=r+n,o=r;o<a;o++)t+="".concat(this.tag.getRule(o)).concat(fe);return t},e}(),nt=new Map,rt=new Map,at=1,ot=function(e){if(nt.has(e))return nt.get(e);for(;rt.has(at);)at++;var t=at++;return nt.set(e,t),rt.set(t,e),t},it=function(e,t){at=t+1,nt.set(e,t),rt.set(t,e)},lt="style[".concat(se,"][").concat(ue,'="').concat(de,'"]'),st=new RegExp("^".concat(se,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),ct=function(e,t,n){for(var r,a=n.split(","),o=0,i=a.length;o<i;o++)(r=a[o])&&e.registerName(t,r)},ut=function(e,t){for(var n,r=(null!==(n=t.textContent)&&void 0!==n?n:"").split(fe),a=[],o=0,i=r.length;o<i;o++){var l=r[o].trim();if(l){var s=l.match(st);if(s){var c=0|parseInt(s[1],10),u=s[2];0!==c&&(it(u,c),ct(e,u,s[3]),e.getTag().insertRules(c,a)),a.length=0}else a.push(l)}}},dt=function(e){for(var t=document.querySelectorAll(lt),n=0,r=t.length;n<r;n++){var a=t[n];a&&a.getAttribute(se)!==ce&&(ut(e,a),a.parentNode&&a.parentNode.removeChild(a))}};function ft(){return n.nc}var pt=function(e){var t=document.head,n=e||t,r=document.createElement("style"),a=function(e){var t=Array.from(e.querySelectorAll("style[".concat(se,"]")));return t[t.length-1]}(n),o=void 0!==a?a.nextSibling:null;r.setAttribute(se,ce),r.setAttribute(ue,de);var i=ft();return i&&r.setAttribute("nonce",i),n.insertBefore(r,o),r},ht=function(){function e(e){this.element=pt(e),this.element.appendChild(document.createTextNode("")),this.sheet=function(e){if(e.sheet)return e.sheet;for(var t=document.styleSheets,n=0,r=t.length;n<r;n++){var a=t[n];if(a.ownerNode===e)return a}throw et(17)}(this.element),this.length=0}return e.prototype.insertRule=function(e,t){try{return this.sheet.insertRule(t,e),this.length++,!0}catch(e){return!1}},e.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},e.prototype.getRule=function(e){var t=this.sheet.cssRules[e];return t&&t.cssText?t.cssText:""},e}(),mt=function(){function e(e){this.element=pt(e),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(e,t){if(e<=this.length&&e>=0){var n=document.createTextNode(t);return this.element.insertBefore(n,this.nodes[e]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},e.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},e}(),bt=function(){function e(e){this.rules=[],this.length=0}return e.prototype.insertRule=function(e,t){return e<=this.length&&(this.rules.splice(e,0,t),this.length++,!0)},e.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},e.prototype.getRule=function(e){return e<this.length?this.rules[e]:""},e}(),gt=pe,vt={isServer:!pe,useCSSOMInjection:!he},yt=function(){function e(e,t,n){void 0===e&&(e=ge),void 0===t&&(t={});var r=this;this.options=o(o({},vt),e),this.gs=t,this.names=new Map(n),this.server=!!e.isServer,!this.server&&pe&&gt&&(gt=!1,dt(this)),Ze(this,(function(){return function(e){for(var t=e.getTag(),n=t.length,r="",a=function(n){var a=function(e){return rt.get(e)}(n);if(void 0===a)return"continue";var o=e.names.get(a),i=t.getGroup(n);if(void 0===o||!o.size||0===i.length)return"continue";var l="".concat(se,".g").concat(n,'[id="').concat(a,'"]'),s="";void 0!==o&&o.forEach((function(e){e.length>0&&(s+="".concat(e,","))})),r+="".concat(i).concat(l,'{content:"').concat(s,'"}').concat(fe)},o=0;o<n;o++)a(o);return r}(r)}))}return e.registerId=function(e){return ot(e)},e.prototype.rehydrate=function(){!this.server&&pe&&dt(this)},e.prototype.reconstructWithOptions=function(t,n){return void 0===n&&(n=!0),new e(o(o({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(e=function(e){var t=e.useCSSOMInjection,n=e.target;return e.isServer?new bt(n):t?new ht(n):new mt(n)}(this.options),new tt(e)));var e},e.prototype.hasNameForId=function(e,t){return this.names.has(e)&&this.names.get(e).has(t)},e.prototype.registerName=function(e,t){if(ot(e),this.names.has(e))this.names.get(e).add(t);else{var n=new Set;n.add(t),this.names.set(e,n)}},e.prototype.insertRules=function(e,t,n){this.registerName(e,t),this.getTag().insertRules(ot(e),n)},e.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},e.prototype.clearRules=function(e){this.getTag().clearGroup(ot(e)),this.clearNames(e)},e.prototype.clearTag=function(){this.tag=void 0},e}(),xt=/&/g,wt=/^\s*\/\/.*$/gm;function kt(e,t){return e.map((function(e){return"rule"===e.type&&(e.value="".concat(t," ").concat(e.value),e.value=e.value.replaceAll(",",",".concat(t," ")),e.props=e.props.map((function(e){return"".concat(t," ").concat(e)}))),Array.isArray(e.children)&&"@keyframes"!==e.type&&(e.children=kt(e.children,t)),e}))}function St(e){var t,n,r,a=void 0===e?ge:e,o=a.options,i=void 0===o?ge:o,l=a.plugins,s=void 0===l?be:l,c=function(e,r,a){return a.startsWith(n)&&a.endsWith(n)&&a.replaceAll(n,"").length>0?".".concat(t):e},u=s.slice();u.push((function(e){e.type===p&&e.value.includes("&")&&(e.props[0]=e.props[0].replace(xt,n).replace(r,c))})),i.prefix&&u.push(te),u.push(Z);var d=function(e,a,o,l){void 0===a&&(a=""),void 0===o&&(o=""),void 0===l&&(l="&"),t=l,n=a,r=new RegExp("\\".concat(n,"\\b"),"g");var s=e.replace(wt,""),c=ne(o||a?"".concat(o," ").concat(a," { ").concat(s," }"):s);i.namespace&&(c=kt(c,i.namespace));var d,f=[];return X(c,function(e){var t=C(e);return function(n,r,a,o){for(var i="",l=0;l<t;l++)i+=e[l](n,r,a,o)||"";return i}}(u.concat((d=function(e){return f.push(e)},function(e){e.root||(e=e.return)&&d(e)})))),f};return d.hash=s.length?s.reduce((function(e,t){return t.name||et(15),_e(e,t.name)}),5381).toString():"",d}var Et=new yt,jt=St(),Ct=e.createContext({shouldForwardProp:void 0,styleSheet:Et,stylis:jt}),_t=(Ct.Consumer,e.createContext(void 0));function Ot(){return(0,e.useContext)(Ct)}function Pt(t){var n=(0,e.useState)(t.stylisPlugins),r=n[0],a=n[1],o=Ot().styleSheet,i=(0,e.useMemo)((function(){var e=o;return t.sheet?e=t.sheet:t.target&&(e=e.reconstructWithOptions({target:t.target},!1)),t.disableCSSOMInjection&&(e=e.reconstructWithOptions({useCSSOMInjection:!1})),e}),[t.disableCSSOMInjection,t.sheet,t.target,o]),l=(0,e.useMemo)((function(){return St({options:{namespace:t.namespace,prefix:t.enableVendorPrefixes},plugins:r})}),[t.enableVendorPrefixes,t.namespace,r]);(0,e.useEffect)((function(){s()(r,t.stylisPlugins)||a(t.stylisPlugins)}),[t.stylisPlugins]);var c=(0,e.useMemo)((function(){return{shouldForwardProp:t.shouldForwardProp,styleSheet:i,stylis:l}}),[t.shouldForwardProp,i,l]);return e.createElement(Ct.Provider,{value:c},e.createElement(_t.Provider,{value:l},t.children))}var At=function(){function e(e,t){var n=this;this.inject=function(e,t){void 0===t&&(t=jt);var r=n.name+t.hash;e.hasNameForId(n.id,r)||e.insertRules(n.id,r,t(n.rules,r,"@keyframes"))},this.name=e,this.id="sc-keyframes-".concat(e),this.rules=t,Ze(this,(function(){throw et(12,String(n.name))}))}return e.prototype.getName=function(e){return void 0===e&&(e=jt),this.name+e.hash},e}(),zt=function(e){return e>="A"&&e<="Z"};function Tt(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(1===n&&"-"===r&&"-"===e[0])return e;zt(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var Nt=function(e){return null==e||!1===e||""===e},Dt=function(e){var t,n,r=[];for(var a in e){var o=e[a];e.hasOwnProperty(a)&&!Nt(o)&&(Array.isArray(o)&&o.isCss||Ke(o)?r.push("".concat(Tt(a),":"),o,";"):Je(o)?r.push.apply(r,i(i(["".concat(a," {")],Dt(o),!1),["}"],!1)):r.push("".concat(Tt(a),": ").concat((t=a,null==(n=o)||"boolean"==typeof n||""===n?"":"number"!=typeof n||0===n||t in le||t.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function Ft(e,t,n,r){return Nt(e)?[]:Ge(e)?[".".concat(e.styledComponentId)]:Ke(e)?!Ke(a=e)||a.prototype&&a.prototype.isReactComponent||!t?[e]:Ft(e(t),t,n,r):e instanceof At?n?(e.inject(n,r),[e.getName(r)]):[e]:Je(e)?Dt(e):Array.isArray(e)?Array.prototype.concat.apply(be,e.map((function(e){return Ft(e,t,n,r)}))):[e.toString()];var a}function It(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(Ke(n)&&!Ge(n))return!1}return!0}var Mt=Oe(de),Rt=function(){function e(e,t,n){this.rules=e,this.staticRulesId="",this.isStatic=(void 0===n||n.isStatic)&&It(e),this.componentId=t,this.baseHash=_e(Mt,t),this.baseStyle=n,yt.registerId(t)}return e.prototype.generateAndInjectStyles=function(e,t,n){var r=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,t,n):"";if(this.isStatic&&!n.hash)if(this.staticRulesId&&t.hasNameForId(this.componentId,this.staticRulesId))r=Qe(r,this.staticRulesId);else{var a=Ye(Ft(this.rules,e,t,n)),o=je(_e(this.baseHash,a)>>>0);if(!t.hasNameForId(this.componentId,o)){var i=n(a,".".concat(o),void 0,this.componentId);t.insertRules(this.componentId,o,i)}r=Qe(r,o),this.staticRulesId=o}else{for(var l=_e(this.baseHash,n.hash),s="",c=0;c<this.rules.length;c++){var u=this.rules[c];if("string"==typeof u)s+=u;else if(u){var d=Ye(Ft(u,e,t,n));l=_e(l,d+c),s+=d}}if(s){var f=je(l>>>0);t.hasNameForId(this.componentId,f)||t.insertRules(this.componentId,f,n(s,".".concat(f),void 0,this.componentId)),r=Qe(r,f)}}return r},e}(),Lt=e.createContext(void 0);Lt.Consumer;var $t={};new Set;function Bt(t,n,r){var a=Ge(t),i=t,l=!ze(t),s=n.attrs,c=void 0===s?be:s,u=n.componentId,d=void 0===u?function(e,t){var n="string"!=typeof e?"sc":ke(e);$t[n]=($t[n]||0)+1;var r="".concat(n,"-").concat(Pe(de+n+$t[n]));return t?"".concat(t,"-").concat(r):r}(n.displayName,n.parentComponentId):u,f=n.displayName,p=void 0===f?function(e){return ze(e)?"styled.".concat(e):"Styled(".concat(Ae(e),")")}(t):f,h=n.displayName&&n.componentId?"".concat(ke(n.displayName),"-").concat(n.componentId):n.componentId||d,m=a&&i.attrs?i.attrs.concat(c).filter(Boolean):c,b=n.shouldForwardProp;if(a&&i.shouldForwardProp){var g=i.shouldForwardProp;if(n.shouldForwardProp){var v=n.shouldForwardProp;b=function(e,t){return g(e,t)&&v(e,t)}}else b=g}var y=new Rt(r,h,a?i.componentStyle:void 0);function x(t,n){return function(t,n,r){var a=t.attrs,i=t.componentStyle,l=t.defaultProps,s=t.foldedComponentIds,c=t.styledComponentId,u=t.target,d=e.useContext(Lt),f=Ot(),p=t.shouldForwardProp||f.shouldForwardProp,h=ve(n,d,l)||ge,m=function(e,t,n){for(var r,a=o(o({},t),{className:void 0,theme:n}),i=0;i<e.length;i+=1){var l=Ke(r=e[i])?r(a):r;for(var s in l)a[s]="className"===s?Qe(a[s],l[s]):"style"===s?o(o({},a[s]),l[s]):l[s]}return t.className&&(a.className=Qe(a.className,t.className)),a}(a,n,h),b=m.as||u,g={};for(var v in m)void 0===m[v]||"$"===v[0]||"as"===v||"theme"===v&&m.theme===h||("forwardedAs"===v?g.as=m.forwardedAs:p&&!p(v,b)||(g[v]=m[v]));var y=function(e,t){var n=Ot();return e.generateAndInjectStyles(t,n.styleSheet,n.stylis)}(i,m),x=Qe(s,c);return y&&(x+=" "+y),m.className&&(x+=" "+m.className),g[ze(b)&&!ye.has(b)?"class":"className"]=x,r&&(g.ref=r),(0,e.createElement)(b,g)}(w,t,n)}x.displayName=p;var w=e.forwardRef(x);return w.attrs=m,w.componentStyle=y,w.displayName=p,w.shouldForwardProp=b,w.foldedComponentIds=a?Qe(i.foldedComponentIds,i.styledComponentId):"",w.styledComponentId=h,w.target=a?i.target:t,Object.defineProperty(w,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(e){this._foldedDefaultProps=a?function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];for(var r=0,a=t;r<a.length;r++)Xe(e,a[r],!0);return e}({},i.defaultProps,e):e}}),Ze(w,(function(){return".".concat(w.styledComponentId)})),l&&He(w,t,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),w}function Wt(e,t){for(var n=[e[0]],r=0,a=t.length;r<a;r+=1)n.push(t[r],e[r+1]);return n}var Vt=function(e){return Object.assign(e,{isCss:!0})};function qt(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(Ke(e)||Je(e))return Vt(Ft(Wt(be,i([e],t,!0))));var r=e;return 0===t.length&&1===r.length&&"string"==typeof r[0]?Ft(r):Vt(Ft(Wt(r,t)))}function Ut(e,t,n){if(void 0===n&&(n=ge),!t)throw et(1,t);var r=function(r){for(var a=[],o=1;o<arguments.length;o++)a[o-1]=arguments[o];return e(t,n,qt.apply(void 0,i([r],a,!1)))};return r.attrs=function(r){return Ut(e,t,o(o({},n),{attrs:Array.prototype.concat(n.attrs,r).filter(Boolean)}))},r.withConfig=function(r){return Ut(e,t,o(o({},n),r))},r}var Ht=function(e){return Ut(Bt,e)},Kt=Ht;ye.forEach((function(e){Kt[e]=Ht(e)}));var Gt=function(){function e(e,t){this.rules=e,this.componentId=t,this.isStatic=It(e),yt.registerId(this.componentId+1)}return e.prototype.createStyles=function(e,t,n,r){var a=r(Ye(Ft(this.rules,t,n,r)),""),o=this.componentId+e;n.insertRules(o,o,a)},e.prototype.removeStyles=function(e,t){t.clearRules(this.componentId+e)},e.prototype.renderStyles=function(e,t,n,r){e>2&&yt.registerId(this.componentId+e),this.removeStyles(e,n),this.createStyles(e,t,n,r)},e}();function Qt(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=Ye(qt.apply(void 0,i([e],t,!1))),a=Pe(r);return new At(a,r)}(function(){function t(){var t=this;this._emitSheetCSS=function(){var e=t.instance.toString();if(!e)return"";var n=ft(),r=Ye([n&&'nonce="'.concat(n,'"'),"".concat(se,'="true"'),"".concat(ue,'="').concat(de,'"')].filter(Boolean)," ");return"<style ".concat(r,">").concat(e,"</style>")},this.getStyleTags=function(){if(t.sealed)throw et(2);return t._emitSheetCSS()},this.getStyleElement=function(){var n;if(t.sealed)throw et(2);var r=t.instance.toString();if(!r)return[];var a=((n={})[se]="",n[ue]=de,n.dangerouslySetInnerHTML={__html:r},n),i=ft();return i&&(a.nonce=i),[e.createElement("style",o({},a,{key:"sc-0-0"}))]},this.seal=function(){t.sealed=!0},this.instance=new yt({isServer:!0}),this.sealed=!1}t.prototype.collectStyles=function(t){if(this.sealed)throw et(2);return e.createElement(Pt,{sheet:this.instance},t)},t.prototype.interleaveWithNodeStream=function(e){throw et(3)}})(),"__sc-".concat(se,"__");const Yt=(function(t){for(var n=[],r=1;r<arguments.length;r++)n[r-1]=arguments[r];var a=qt.apply(void 0,i([t],n,!1)),l="sc-global-".concat(Pe(JSON.stringify(a))),s=new Gt(a,l),c=function(t){var n=Ot(),r=e.useContext(Lt),a=e.useRef(n.styleSheet.allocateGSInstance(l)).current;return n.styleSheet.server&&u(a,t,n.styleSheet,r,n.stylis),e.useLayoutEffect((function(){if(!n.styleSheet.server)return u(a,t,n.styleSheet,r,n.stylis),function(){return s.removeStyles(a,n.styleSheet)}}),[a,t,n.styleSheet,r,n.stylis]),null};function u(e,t,n,r,a){if(s.isStatic)s.renderStyles(e,me,n,a);else{var i=o(o({},t),{theme:ve(t,r,c.defaultProps)});s.renderStyles(e,i,n,a)}}return e.memo(c)})`
  :root {
    /* ====================
     * BRAND COLORS
     * ==================== */
    --color-primary: #7E22CE;         /* Core brand color */
    --color-primary-light: #9333EA;   /* Lighter variation */
    --color-primary-dark: #6B21A8;    /* Darker variation */
    
    /* ====================
     * AGENT COLOR SYSTEM - Each agent with unique yet harmonious palette
     * ==================== */
    
    /* NAT - CEO/AI PM - Royal purple with gold */
    --color-nat-primary: #6D28D9;     /* Royal purple */
    --color-nat-secondary: #F59E0B;   /* Gold */
    --color-nat-surface: #F5F3FF;     /* Light violet surface */
    --color-nat-gradient: linear-gradient(135deg, #6D28D9 0%, #8B5CF6 100%);
    
    /* BRIAN - Product Manager - Deep blue-violet with teal */
    --color-brian-primary: #4F46E5;   /* Indigo */
    --color-brian-secondary: #0D9488;  /* Teal */
    --color-brian-surface: #EEF2FF;   /* Light indigo surface */
    --color-brian-gradient: linear-gradient(135deg, #4F46E5 0%, #818CF8 100%);
    
    /* REQQY - Requirements Agent - Sky blue with navy accents */
    --color-reqqy-primary: #0EA5E9;   /* Vibrant sky blue */  
    --color-reqqy-secondary: #1E40AF; /* Navy */
    --color-reqqy-surface: #E0F2FE;   /* Light sky blue surface */
    --color-reqqy-gradient: linear-gradient(135deg, #0EA5E9 0%, #7DD3FC 100%);
    
    /* JOSH - Graphic Design - Vibrant purple with pink */
    --color-josh-primary: #8B5CF6;    /* Vibrant purple */
    --color-josh-secondary: #EC4899;  /* Pink */
    --color-josh-surface: #F3E8FF;    /* Light purple surface */  
    --color-josh-gradient: linear-gradient(135deg, #8B5CF6 0%, #C084FC 100%);
    
    /* JAMES & TERRELL - Twin Dev Agents - Deep violet with electric blue */
    --color-twin-primary: #7C3AED;    /* Deep violet */
    --color-twin-secondary: #2563EB;  /* Electric blue */
    --color-twin-surface: #EDE9FE;    /* Light violet surface */
    --color-twin-gradient: linear-gradient(135deg, #7C3AED 0%, #A78BFA 100%);
    
    /* ANTOSH - Testing & Analytics - Teal with orange */
    --color-antosh-primary: #14B8A6;  /* Teal */
    --color-antosh-secondary: #F97316; /* Orange */
    --color-antosh-surface: #CCFBF1;  /* Light teal surface */
    --color-antosh-gradient: linear-gradient(135deg, #14B8A6 0%, #5EEAD4 100%);
    
    /* MAN-MAN - Maintenance - Emerald green with blue */
    --color-manman-primary: #10B981;  /* Emerald green */
    --color-manman-secondary: #3B82F6; /* Blue */
    --color-manman-surface: #D1FAE5;  /* Light emerald surface */
    --color-manman-gradient: linear-gradient(135deg, #10B981 0%, #34D399 100%);
    
    /* LIA - Social Media - Rose with purple */
    --color-lia-primary: #F43F5E;     /* Rose */
    --color-lia-secondary: #A855F7;   /* Purple */
    --color-lia-surface: #FEE2E2;     /* Light rose surface */
    --color-lia-gradient: linear-gradient(135deg, #F43F5E 0%, #FB7185 100%);
    
    /* COMPASS - HR/Router - Slate with amber */
    --color-compass-primary: #64748B; /* Slate */
    --color-compass-secondary: #F59E0B; /* Amber */
    --color-compass-surface: #F1F5F9; /* Light slate surface */
    --color-compass-gradient: linear-gradient(135deg, #64748B 0%, #94A3B8 100%);
    
    /* Legacy agent variables (maintained for backward compatibility) */
    --color-accent-josh: var(--color-josh-primary);
    --color-accent-nat: var(--color-nat-secondary);
    --color-accent-reqqy: var(--color-reqqy-primary);
    --color-accent-lia: var(--color-lia-primary);
    --color-accent-manman: var(--color-manman-primary);
    --color-accent-antosh: var(--color-antosh-primary);
    --color-accent-twin: var(--color-twin-primary);
    
    /* ====================
     * SEMANTIC COLORS
     * ==================== */
    --color-success: #10B981;         /* Success green - slightly adjusted */
    --color-error: #EF4444;           /* Error red */
    --color-warning: #F59E0B;         /* Warning amber */
    --color-info: #3B82F6;            /* Info blue */
    
    /* ====================
     * NEUTRAL COLORS
     * ==================== */
    --color-neutral-900: #121212;     /* Almost black - slightly darkened for better contrast */
    --color-neutral-800: #262626;     /* Added for more gradation */
    --color-neutral-700: #404040;     /* Darkened for better contrast */
    --color-neutral-600: #606060;     /* Added for more gradation */
    --color-neutral-500: #808080;     /* Neutral gray */
    --color-neutral-400: #A0AEC0;     /* Added for more gradation */
    --color-neutral-300: #CBD5E1;     /* Added for more gradation */
    --color-neutral-200: #E2E8F0;     /* Light gray */
    --color-neutral-100: #F8FAFC;     /* Almost white */
    
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
    font-family: var(--font-family),sans-serif;
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
`,Jt={colors:{surface:{light:"var(--color-surface-light)",dark:"var(--color-surface-dark)"},neutral:{100:"var(--color-neutral-100)",200:"var(--color-neutral-200)"},text:{dark:"var(--color-text-dark)",light:"var(--color-text-light)",muted:"var(--color-text-muted)",hint:"var(--color-text-hint)"},josh:{primary:"var(--color-josh-primary)",muted:"var(--color-josh-muted)"},status:{active:"#22C55E",archived:"#EF4444"}},spacing:{xs:"var(--spacing-xs)",base:"var(--spacing-base)",md:"var(--spacing-md)",lg:"var(--spacing-lg)"},borderRadius:{small:"var(--border-radius-small)",md:"var(--border-radius-md)",large:"var(--border-radius-large)"},shadows:{xs:"var(--shadow-xs)",md:"var(--shadow-md)",card:"var(--shadow-card)"},darkBG:"#131125",cardGlass:"rgba(40, 33, 77, 0.965)",glassMain:"rgba(42, 33, 89, 0.92)",gradientMain:"linear-gradient(90deg, #06d6a0, #8b5cf6)",gradientAlt:"linear-gradient(90deg, #8b5cf6, #ff00cc)",neonTeal:"#06d6a0",focusBox:"0 0 0 3.3px #8b5cf6aa",active:"#22C55E",archived:"#EF4444"};var Xt=n(414);const Zt=Kt.svg`
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
`,en=function(e){return e?`var(--color-${e}-primary)`:arguments.length>1&&void 0!==arguments[1]?arguments[1]:"currentColor"},tn=e=>{let{size:t=16,color:n="currentColor",hoverColor:r,strokeWidth:a=2,className:o,title:i="Chevron Up",onClick:l,isInteractive:s,agentKey:c}=e;return(0,Xt.jsxs)(Zt,{width:t,height:t,viewBox:"0 0 24 24",fill:"none",stroke:c?en(c,n):n,strokeWidth:a,strokeLinecap:"round",strokeLinejoin:"round",className:o,onClick:l,isInteractive:s||!!l,hoverColor:r,agentKey:c,role:"img","aria-labelledby":"chevronUpTitle",children:[(0,Xt.jsx)("title",{id:"chevronUpTitle",children:i}),(0,Xt.jsx)("polyline",{points:"18 15 12 9 6 15"})]})},nn=e=>{let{size:t=16,color:n="currentColor",hoverColor:r,strokeWidth:a=2,className:o,title:i="Chevron Down",onClick:l,isInteractive:s,agentKey:c}=e;return(0,Xt.jsxs)(Zt,{width:t,height:t,viewBox:"0 0 24 24",fill:"none",stroke:c?en(c,n):n,strokeWidth:a,strokeLinecap:"round",strokeLinejoin:"round",className:o,onClick:l,isInteractive:s||!!l,hoverColor:r,agentKey:c,role:"img","aria-labelledby":"chevronDownTitle",children:[(0,Xt.jsx)("title",{id:"chevronDownTitle",children:i}),(0,Xt.jsx)("polyline",{points:"6 9 12 15 18 9"})]})},rn=e=>{let{size:t=16,color:n="currentColor",hoverColor:r,strokeWidth:a=2,className:o,title:i="Copy",onClick:l,isInteractive:s,agentKey:c}=e;return(0,Xt.jsxs)(Zt,{width:t,height:t,viewBox:"0 0 24 24",fill:"none",stroke:c?en(c,n):n,strokeWidth:a,strokeLinecap:"round",strokeLinejoin:"round",className:o,onClick:l,isInteractive:s||!!l,hoverColor:r,agentKey:c,role:"img","aria-labelledby":"copyTitle",children:[(0,Xt.jsx)("title",{id:"copyTitle",children:i}),(0,Xt.jsx)("rect",{x:"9",y:"9",width:"13",height:"13",rx:"2",ry:"2"}),(0,Xt.jsx)("path",{d:"M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"})]})},an=e=>{let{size:t=16,color:n="currentColor",hoverColor:r,strokeWidth:a=2,className:o,title:i="Edit",onClick:l,isInteractive:s,agentKey:c}=e;return(0,Xt.jsxs)(Zt,{width:t,height:t,viewBox:"0 0 24 24",fill:"none",stroke:c?en(c,n):n,strokeWidth:a,strokeLinecap:"round",strokeLinejoin:"round",className:o,onClick:l,isInteractive:s||!!l,hoverColor:r,agentKey:c,role:"img","aria-labelledby":"editTitle",children:[(0,Xt.jsx)("title",{id:"editTitle",children:i}),(0,Xt.jsx)("path",{d:"M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"})]})},on=e=>{let{size:t=16,color:n="currentColor",hoverColor:r,strokeWidth:a=2,className:o,title:i="Check",onClick:l,isInteractive:s,agentKey:c}=e;return(0,Xt.jsxs)(Zt,{width:t,height:t,viewBox:"0 0 24 24",fill:"none",stroke:c?en(c,n):n,strokeWidth:a,strokeLinecap:"round",strokeLinejoin:"round",className:o,onClick:l,isInteractive:s||!!l,hoverColor:r,agentKey:c,role:"img","aria-labelledby":"checkTitle",children:[(0,Xt.jsx)("title",{id:"checkTitle",children:i}),(0,Xt.jsx)("polyline",{points:"20 6 9 17 4 12"})]})},ln=e=>{let{size:t=16,color:n="currentColor",hoverColor:r,strokeWidth:a=2,className:o,title:i="Alert",onClick:l,isInteractive:s,agentKey:c}=e;return(0,Xt.jsxs)(Zt,{width:t,height:t,viewBox:"0 0 24 24",fill:"none",stroke:c?en(c,n):n,strokeWidth:a,strokeLinecap:"round",strokeLinejoin:"round",className:o,onClick:l,isInteractive:s||!!l,hoverColor:r,agentKey:c,role:"img","aria-labelledby":"alertTitle",children:[(0,Xt.jsx)("title",{id:"alertTitle",children:i}),(0,Xt.jsx)("circle",{cx:"12",cy:"12",r:"10"}),(0,Xt.jsx)("line",{x1:"12",y1:"8",x2:"12",y2:"12"}),(0,Xt.jsx)("line",{x1:"12",y1:"16",x2:"12.01",y2:"16"})]})},sn=e=>{let{size:t=16,color:n="currentColor",hoverColor:r,strokeWidth:a=2,className:o,title:i="Chevron Right",onClick:l,isInteractive:s,agentKey:c}=e;return(0,Xt.jsxs)(Zt,{width:t,height:t,viewBox:"0 0 24 24",fill:"none",stroke:c?en(c,n):n,strokeWidth:a,strokeLinecap:"round",strokeLinejoin:"round",className:o,onClick:l,isInteractive:s||!!l,hoverColor:r,agentKey:c,role:"img","aria-labelledby":"chevronRightTitle",children:[(0,Xt.jsx)("title",{id:"chevronRightTitle",children:i}),(0,Xt.jsx)("polyline",{points:"9 18 15 12 9 6"})]})},cn=Kt.span`
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
`,un=Kt.div`
  width: ${e=>e.size||10}px;
  height: ${e=>e.size||10}px;
  border-radius: 50%;
  background-color: ${e=>e.color};
  box-shadow: 0 0 4px ${e=>e.color+"80"};
  transition: all var(--transition-fast);
`,dn={complete:{label:"Complete",icon:(0,Xt.jsx)(cn,{color:"var(--color-success)",className:"status-complete",children:(0,Xt.jsx)(on,{size:16,color:"var(--color-success)",strokeWidth:2.5})}),color:"var(--color-success)",description:"Task has been successfully completed"},active:{label:"Active",icon:(0,Xt.jsx)(cn,{color:"var(--color-josh-primary)",className:"status-active",children:(0,Xt.jsx)(un,{color:"var(--color-josh-primary)",size:10})}),color:"var(--color-josh-primary)",description:"Task is currently in progress"},todo:{label:"Planned",icon:(0,Xt.jsx)(cn,{color:"var(--color-neutral-500)",children:(0,Xt.jsx)(sn,{size:16,color:"var(--color-neutral-500)"})}),color:"var(--color-neutral-500)",description:"Task is scheduled but not yet started"},error:{label:"Error",icon:(0,Xt.jsx)(cn,{color:"var(--color-error)",className:"status-error",children:(0,Xt.jsx)(ln,{size:16,color:"var(--color-error)",strokeWidth:2})}),color:"var(--color-error)",description:"Task encountered an error during execution"}},fn=Kt.nav`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    min-height: 62px;
    height: 4.5rem;
    padding: 0 ${Jt.spacing.lg};
    background: ${Jt.colors.surface.dark};
    box-shadow: ${Jt.shadows.md};
    border-bottom: 2px solid ${Jt.colors.neutral[200]};
    z-index: 30;
`,pn=Kt.svg`
  width: 44px; 
  height: 44px; 
  margin-right: ${Jt.spacing.md}; 
  user-select: none;
`,hn=Kt.div`
  display: flex; 
  align-items: center; 
  gap: ${Jt.spacing.base};
`,mn=Kt.span`
  font-size: 1.55rem;
  font-weight: 700;
  color: ${Jt.colors.josh.primary};
  letter-spacing: -0.03em;
`,bn=Kt.div`
  min-width: 44px;
  min-height: 44px;
  background: ${Jt.colors.neutral[200]};
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.25rem;
  font-weight: bold;
  color: ${Jt.colors.text.light};
  border: 2px solid ${Jt.colors.josh.primary};
  box-shadow: ${Jt.shadows.xs};
`,gn=Kt.div`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`,vn=Kt.main`
  width: 100vw;
  flex: 1 1 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${Jt.darkBG};
  padding-bottom: 8rem;
`,yn=Kt.section`
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
`,xn=Kt.div`
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
`,wn=Kt.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem 1.25rem;
  align-items: center;
  justify-content: flex-start;
  background: ${Jt.cardGlass};
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
`,kn=Kt.svg`
  display: block;
  position: absolute;
  left: 13px;
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
  
  @media (max-width: 480px) {
    left: 10px;
  }
`,Sn=Kt.label`
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
`,En=Kt.input`
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
    box-shadow: ${Jt.focusBox};
    border: 2px solid ${Jt.neonTeal};
  }
  
  @media (max-width: 480px) {
    padding: 8px 10px 8px 32px;
    font-size: 0.95rem;
  }
`,jn=Kt.label`
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
`,Cn=Kt.select`
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
    box-shadow: ${Jt.focusBox};
    border: 2.5px solid ${Jt.neonTeal};
  }
  
  @media (max-width: 768px) {
    flex-grow: 1;
  }
  
  @media (max-width: 480px) {
    padding: 0.3em 0.6em;
    font-size: 0.9em;
  }
`,_n=Kt.div`
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
`,On=(Kt.button`
  background: ${e=>e.selected?Jt.gradientMain:Jt.cardGlass};
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
  background: ${e=>e.selected?Jt.gradientAlt:Jt.cardGlass};
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
`),Pn=Kt.div`
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
`,An=Kt.div`
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
`,zn=Kt.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`,Tn=Kt.button`
  background: ${e=>e.active?Jt.gradientAlt:Jt.glassMain};
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
`,Nn=Kt.button`
  font-size: 0.95rem;
  font-weight: 700;
  line-height: 1;
  background: ${Jt.gradientMain};
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
`,Dn=Kt.div`
  padding: 2rem;
  text-align: center;
  color: #fff;
  font-size: 1.2em;
  font-weight: 500;
  width: 100%;
  background: ${Jt.cardGlass};
  border-radius: 12px;
  margin-top: 1rem;
  box-shadow: 0 0 15px rgba(139, 92, 246, 0.2);
  
  @media (max-width: 480px) {
    padding: 1.5rem;
    font-size: 1.1em;
  }
`,Fn=Kt.div`
  width: 100%;
  height: calc(100% - 3rem); /* Account for the header space */
  overflow: hidden;
  box-sizing: border-box;
  position: relative;
  margin-top: 0;
  background: transparent;
`,In=Kt.div`
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
    background: linear-gradient(to bottom, transparent, ${Jt.darkBG});
    z-index: -1;
    pointer-events: none;
  }
  
  @media (max-width: 768px) {
    padding: 0.5rem 0.75rem 2rem 0.75rem;
  }
  
  @media (max-width: 480px) {
    padding: 0.5rem 0.5rem 2rem 0.5rem;
  }
`,Mn=Kt.div`
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
`,Rn=(Kt.div`
  flex: 0 0 auto;
  width: 100%;
  background: ${Jt.cardGlass};
  border-radius: 12px;
  padding: 1.2rem;
  box-shadow: ${Jt.shadows.md};
  transition: transform 0.15s, box-shadow 0.15s;
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.16);
  }
`,Qt`
  0%{transform:translateY(60px) scale(.96);opacity:0;}
  100%{transform:translateY(0) scale(1);opacity:1;}
`),Ln=Kt.div`
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
  animation: ${Rn} 0.22s;
`,$n=Kt.div`
  background: ${Jt.glassMain};
  border-radius: 2.2em;
  max-width: 420px;
  width: 96vw;
  min-height: 13.5em;
  box-shadow: 0 10px 64px #8b5cf6bb;
  border: 1.8px solid #8b5cf6;
  padding: 2.2em 2em 1.6em 2.05em;
  animation: ${Rn} 0.15s;
`,Bn=Kt.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.3em;
`,Wn=Kt.h2`
  font-size: 1.31em;
  font-weight: 900;
  background: ${Jt.gradientMain};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  letter-spacing: -0.02em;
`,Vn=Kt.button`
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
`,qn=Kt.div`
  margin-bottom: 1.25em;
  display: flex;
  flex-direction: column;
`,Un=Kt.label`
  font-size: 1.045em;
  font-weight: 600;
  color: #fff;
  margin-bottom: 0.22em;
  text-shadow: 0 2px 22px #06d6a062;
`,Hn=Kt.input`
  border-radius: 6px;
  border: none;
  font-size: 1em;
  font-weight: 600;
  padding: 0.67em 0.82em;
  background: #161223;
  color: #fff;
  margin-bottom: 0.23em;
  &:focus {
    box-shadow: ${Jt.focusBox};
    border: 2px solid #06d6a0;
  }
`,Kn=Kt.span`
  color: #ff00cc;
  font-size: 0.9em;
  margin-left: 0.2em;
`,Gn=Kt.span`
  color: #8b5cf6cc;
  font-size: 0.92em;
  margin-top: 0.12em;
  margin-left: 0.12em;
`,Qn=Kt.select`
  background: #181929;
  border-radius: 0.57em;
  color: #05f0a4;
  font-weight: 600;
  border: none;
  outline: none;
  padding: 0.38em 0.82em;
`,Yn=Kt.textarea`
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
`,Jn=Kt.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
  margin-top: 2.1em;
`,Xn=Kt.button`
  background: ${Jt.gradientMain};
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
`,Zn={AGENT_LIST:["nat","brian","reqqy","josh","james","terrell","antosh","man-man","lia"],DOMAIN_LIST:["meeting","summary","bug","qa","repro","design","test","email","social"]},er=(0,e.createContext)(null),tr=Array.from({length:50},((e,t)=>({id:String(t+1),name:`Prompt #${t+1}`,description:`Test prompt example for domain features #${t+1}`,prompt_text:t%6===0?"Summarize the following transcript:\n{transcript}":t%6===1?"Write bug reproduction steps for:\n{bug_report}":t%6===2?"Draft an email inviting stakeholders to:\n{event}":t%6===3?"Generate tests for feature:\n{feature}":t%6===4?"Design a hero banner for:\n{theme}":"Social post for:\n{announcement}",domains:(()=>{const e=[["meeting","summary"],["bug","qa","repro"],["email","social"],["test","qa","bug"],["design","summary"],["social","email"]];return e[t%e.length]})(),status:t%10===0?"archived":"active",created_at:new Date(Date.now()-6e5*t).toISOString(),updated_at:new Date(Date.now()-3e5*t).toISOString(),last_used:t%7===0?new Date(Date.now()-19e5*t).toISOString():void 0,authorId:Zn.AGENT_LIST[t%Zn.AGENT_LIST.length],usage_count:Math.floor(30*Math.random()),prompt_log_refs:[],agentId:Zn.AGENT_LIST[t%Zn.AGENT_LIST.length]}))),nr=t=>{let{children:n}=t;const[r,a]=(0,e.useState)(tr),[o,i]=(0,e.useState)(!1),l=e=>new Promise((t=>setTimeout(t,e)));return(0,Xt.jsx)(er.Provider,{value:{prompts:r,addPrompt:async e=>{i(!0),await l(320);const t=(new Date).toISOString();a((n=>[...n,{...e,id:Math.random().toString(36).slice(2),created_at:t,updated_at:t,last_used:void 0,usage_count:0,prompt_log_refs:[]}])),i(!1)},updatePrompt:async(e,t)=>{i(!0),await l(150),a((n=>n.map((n=>n.id===e?{...n,...t,updated_at:(new Date).toISOString()}:n)))),i(!1)},deletePrompt:async e=>{i(!0),await l(110),a((t=>t.filter((t=>t.id!==e)))),i(!1)},incrementUsage:async e=>{a((t=>t.map((t=>{var n;return t.id===e?{...t,usage_count:(null!==(n=t.usage_count)&&void 0!==n?n:0)+1,last_used:(new Date).toISOString()}:t}))))},loading:o},children:n})};function rr(){const t=(0,e.useContext)(er);if(!t)throw new Error("PromptProvider not initialized");return t}const ar=Kt.div`
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
`,or=t=>{let{mode:n,prompt:r,closeModal:a}=t;const{addPrompt:o,updatePrompt:i,loading:l}=rr(),[s,c]=(0,e.useState)((null===r||void 0===r?void 0:r.name)||""),[u,d]=(0,e.useState)((null===r||void 0===r?void 0:r.description)||""),[f,p]=(0,e.useState)((null===r||void 0===r?void 0:r.domains)||[]),[h,m]=(0,e.useState)((null===r||void 0===r?void 0:r.status)||"active"),[b,g]=(0,e.useState)((null===r||void 0===r?void 0:r.agentId)||Zn.AGENT_LIST[0]),[v,y]=(0,e.useState)((null===r||void 0===r?void 0:r.prompt_text)||""),x=(0,e.useRef)(null),[w,k]=(0,e.useState)({});(0,e.useEffect)((()=>{c((null===r||void 0===r?void 0:r.name)||""),d((null===r||void 0===r?void 0:r.description)||""),p((null===r||void 0===r?void 0:r.domains)||[]),m((null===r||void 0===r?void 0:r.status)||"active"),g((null===r||void 0===r?void 0:r.agentId)||Zn.AGENT_LIST[0]),y((null===r||void 0===r?void 0:r.prompt_text)||""),k({})}),[n,r]);const S=e=>{p((t=>t.includes(e)?t.filter((t=>t!==e)):t.length<5?[...t,e]:t))};return(0,e.useEffect)((()=>{function e(e){if("Escape"===e.key&&a(),"Tab"===e.key&&x.current){const t=x.current.querySelectorAll("input,textarea,select,button");if(0===t.length)return;const n=t[0],r=t[t.length-1];e.shiftKey&&document.activeElement===n?(e.preventDefault(),r.focus()):e.shiftKey||document.activeElement!==r||(e.preventDefault(),n.focus())}}return window.addEventListener("keydown",e),()=>window.removeEventListener("keydown",e)}),[a]),(0,Xt.jsx)(Ln,{"aria-modal":"true",role:"dialog",tabIndex:-1,children:(0,Xt.jsxs)($n,{children:[(0,Xt.jsxs)(Bn,{children:[(0,Xt.jsx)(Wn,{children:"edit"===n?"Edit Prompt":"New Prompt"}),(0,Xt.jsx)(Vn,{"aria-label":"Close",title:"Close",onClick:a,children:"\xd7"})]}),(0,Xt.jsxs)("form",{ref:x,onSubmit:async function(e){e.preventDefault();const t={};s.trim()||(t.name="Name required"),s.trim().length<2&&(t.name="Name too short (min 2 chars)"),u.trim()||(t.description="Required"),v.trim().length<10&&(t.prompt_text="Prompt text (10+ chars)"),f.length||(t.domains="Pick at least one (max 5)"),k(t),Object.keys(t).length||("edit"===n&&r?await i(r.id,{name:s,description:u,prompt_text:v,domains:f,status:h,agentId:b}):"new"===n&&await o({name:s,description:u,prompt_text:v,domains:f,status:h,authorId:"nat",agentId:b}),a())},noValidate:!0,children:[(0,Xt.jsxs)(qn,{children:[(0,Xt.jsx)(Un,{htmlFor:"pn",children:"Name"}),(0,Xt.jsx)(Hn,{id:"pn",value:s,onChange:e=>c(e.target.value),placeholder:"Prompt title","aria-invalid":!!w.name,required:!0,autoFocus:!0,minLength:2}),w.name&&(0,Xt.jsx)(Kn,{children:w.name})]}),(0,Xt.jsxs)(qn,{children:[(0,Xt.jsx)(Un,{htmlFor:"pd",children:"Description"}),(0,Xt.jsx)(Hn,{id:"pd",value:u,onChange:e=>d(e.target.value),placeholder:"Short description","aria-invalid":!!w.description,required:!0,minLength:6}),w.description&&(0,Xt.jsx)(Kn,{children:w.description})]}),(0,Xt.jsxs)(qn,{children:[(0,Xt.jsx)(Un,{children:"Domains"}),(0,Xt.jsx)(_n,{children:Zn.DOMAIN_LIST.map((e=>(0,Xt.jsxs)(ar,{selected:f.includes(e),tabIndex:0,"aria-pressed":f.includes(e),onClick:()=>S(e),onKeyDown:t=>{"Enter"!==t.key&&" "!==t.key||S(e)},children:[e,f.includes(e)&&(0,Xt.jsx)("span",{children:"\xa0\u2713"})]},e)))}),(0,Xt.jsx)(Gn,{children:0===f.length?"Pick one or more (max 5)":`${f.length} selected`}),w.domains&&(0,Xt.jsx)(Kn,{children:w.domains})]}),(0,Xt.jsxs)(qn,{children:[(0,Xt.jsx)(Un,{htmlFor:"agent",children:"Agent"}),(0,Xt.jsx)(Qn,{id:"agent",value:b,onChange:e=>g(e.target.value),children:Zn.AGENT_LIST.map((e=>(0,Xt.jsx)("option",{value:e,children:e},e)))})]}),(0,Xt.jsxs)(qn,{children:[(0,Xt.jsx)(Un,{htmlFor:"status",children:"Status"}),(0,Xt.jsxs)(Qn,{id:"status",value:h,onChange:e=>m(e.target.value),children:[(0,Xt.jsx)("option",{value:"active",children:"Active"}),(0,Xt.jsx)("option",{value:"archived",children:"Archived"})]})]}),(0,Xt.jsxs)(qn,{children:[(0,Xt.jsx)(Un,{htmlFor:"ptxt",children:"Prompt Text"}),(0,Xt.jsx)(Yn,{id:"ptxt",rows:8,required:!0,value:v,spellCheck:!1,minLength:10,"aria-invalid":!!w.prompt_text,onChange:e=>y(e.target.value),style:{fontFamily:"'JetBrains Mono','SF Pro',monospace",background:"#161234",color:"#fff",border:w.prompt_text&&v.length<10?"2.5px solid #ff00cc":void 0}}),(0,Xt.jsxs)(Gn,{children:[(0,Xt.jsx)("b",{children:"Tip:"})," Use ","{","variables","}"," for dynamic replacement."]}),w.prompt_text&&(0,Xt.jsx)(Kn,{children:w.prompt_text})]}),(0,Xt.jsxs)(Jn,{children:[(0,Xt.jsx)(Xn,{type:"submit",disabled:l,"aria-disabled":l,children:l?"Saving...":"new"===n?"Add":"Save"}),(0,Xt.jsx)(Xn,{type:"button",onClick:a,style:{background:Jt.cardGlass,color:"#ffe",marginLeft:17},children:"Cancel"})]})]})]})})},ir=()=>(0,Xt.jsxs)(fn,{children:[(0,Xt.jsxs)(hn,{children:[(0,Xt.jsxs)(pn,{width:44,height:44,"aria-label":"THN AI Logo",focusable:!1,role:"img",children:[(0,Xt.jsx)("defs",{children:(0,Xt.jsxs)("linearGradient",{id:"logograd",x1:"0",x2:"1",y1:"0",y2:"1",children:[(0,Xt.jsx)("stop",{stopColor:Jt.colors.josh.primary}),(0,Xt.jsx)("stop",{offset:"1",stopColor:"#06d6a0"})]})}),(0,Xt.jsx)("circle",{cx:22,cy:22,r:21,fill:"url(#logograd)"}),(0,Xt.jsx)("text",{x:"22",y:"30",fontFamily:"'JetBrains Mono','SF Pro',sans-serif",fontSize:"19",textAnchor:"middle",fontWeight:900,fill:"#fff",children:"THN"})]}),(0,Xt.jsx)(mn,{children:"Prompt Library Manager"})]}),(0,Xt.jsx)("span",{style:{color:Jt.colors.josh.primary,fontWeight:700,fontSize:18},children:"v1.0"}),(0,Xt.jsx)(bn,{children:(0,Xt.jsx)("span",{"aria-label":"Profile",children:"@"})})]});function lr(){return(0,Xt.jsxs)(kn,{width:23,height:23,"aria-hidden":!0,children:[(0,Xt.jsx)("circle",{cx:10,cy:10,r:7.8,stroke:"#fff",strokeWidth:2,fill:"none",opacity:.7}),(0,Xt.jsx)("line",{x1:16.1,y1:16.2,x2:21.2,y2:21.3,stroke:"#06d6a0",strokeWidth:2,strokeLinecap:"round",opacity:.85})]})}const sr=()=>(0,Xt.jsxs)("svg",{width:18,height:18,"aria-hidden":!0,style:{display:"block"},viewBox:"0 0 18 18",children:[(0,Xt.jsx)("rect",{x:"2.5",y:"2.5",width:"5",height:"5",rx:"1.5",fill:"#fff"}),(0,Xt.jsx)("rect",{x:"10.5",y:"2.5",width:"5",height:"5",rx:"1.5",fill:"#8b5cf6"}),(0,Xt.jsx)("rect",{x:"2.5",y:"10.5",width:"5",height:"5",rx:"1.5",fill:"#06d6a0"}),(0,Xt.jsx)("rect",{x:"10.5",y:"10.5",width:"5",height:"5",rx:"1.5",fill:"#ff00cc"})]}),cr=()=>(0,Xt.jsxs)("svg",{width:18,height:18,"aria-hidden":!0,style:{display:"block"},viewBox:"0 0 18 18",children:[(0,Xt.jsx)("rect",{x:"2.5",y:"4.83",width:"13",height:"2.5",rx:"1.1",fill:"#9333ea"}),(0,Xt.jsx)("rect",{x:"2.6",y:"9.13",width:"13",height:"2.53",rx:"1.09",fill:"#fff"}),(0,Xt.jsx)("rect",{x:"2.45",y:"13.3",width:"13.08",height:"2.05",rx:"1.01",fill:"#06d6a0"})]}),ur=Qt`
  0% { box-shadow: 0 0 0 0 #06d6a0,0 0 17px 4px #9333EA66;}
  47%{box-shadow:0 0 0 7px #06d6a077,0 0 27px 10px #8b5cf688;}
  98%,100%{box-shadow:0 0 0 0 #06d6a0,0 0 20px 7px #9333EA55;}
`,dr=Qt`
  from { transform: scale(1); z-index: 1; }
  to { transform: scale(1.1); z-index: 10; }
`,fr=Qt`
  from { transform: scale(1.1); z-index: 10; }
  to { transform: scale(1); z-index: 1; }
`,pr=Kt.div`
  background: ${Jt.cardGlass};
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
  animation: ${e=>e.$expanded?qt`${dr} 0.25s forwards`:e.$copied?qt`${ur} 1.015s 1`:qt`${fr} 0.25s`};

  ${e=>e.$copied&&qt`
    border: 2.5px solid ${Jt.neonTeal};
  `}

  &:hover {
    box-shadow: 0 0 44px 8px #06d6a066;
    border-color: #06d6a0;
  }

  ${e=>e.$expanded&&qt`
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
`,hr=Kt.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow: ${e=>e.$expanded?"auto":"hidden"};
  position: relative;
  z-index: 6;
`,mr=Kt.pre`
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
    background: ${Jt.colors.josh.primary}80;
    border-radius: 4px;

    &:hover {
      background: ${Jt.colors.josh.primary};
    }
  }
`,br=Kt.div`
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
`,gr=Kt.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.45em;
`,vr=Kt.span`
  background: ${e=>"active"===e.status?Jt.gradientMain:"linear-gradient(90deg,#48445a,#a90042)"};
  color: #fff;
  border-radius: 2em;
  font-weight: bold;
  font-size: 0.8rem;
  padding: 0.22em 1.05em;
  letter-spacing: 0.06em;
`,yr=Kt.span`
  display: flex;
  align-items: center;
  gap: 0.24em;
  font-size: 0.98em;
`,xr=Kt.svg`
  display: inline-block;
  vertical-align: middle;
`,wr=Kt.h2`
  font-size: 1.15rem;
  font-weight: bold;
  background: ${Jt.gradientMain};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin: 0.18em 0 0.4em 0;
  line-height: 1.14em;
  letter-spacing: -0.025em;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  user-select: text;
`,kr=Kt.p`
  color: #e3e9ff;
  font-size: 0.9em;
  margin: 0 0 0.51em 0;
  display: -webkit-box;
  -webkit-line-clamp: ${e=>e.$expanded?"unset":"2"};
  -webkit-box-orient: vertical;
  overflow: hidden;
  transition: height 0.3s ease;
  user-select: text;
`,Sr=Kt.div`
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
`,Er=Kt.span`
  background: linear-gradient(90deg,#06d6a0,#8b5cf6);
  color: #15151e;
  border-radius: 19px;
  font-size: 0.75em;
  font-weight: 700;
  padding: 0.25em 0.5em;
  margin-bottom: 0.07em;
  display: inline-block;
`,jr=Kt.div`
  color: #8b5cf6;
  font-size: 0.85em;
  font-weight: 600;
  margin-top: -0.11em;
  margin-bottom: 0.5em;
  letter-spacing: 0.02em;
`,Cr=Kt.div`
  display: flex;
  gap: 0.8rem;
  margin-top: ${e=>e.$expanded?"1rem":"auto"};
  margin-bottom: 0.2em;
  justify-content: space-between;
  flex-wrap: wrap;
`,_r=Kt.button`
  background: ${e=>e.$copied?Jt.gradientMain:Jt.gradientAlt};
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

  ${e=>e.$copied&&qt`
    background: ${Jt.gradientMain};
    box-shadow: 0 0 20px #06d6a0cc;
  `}
`,Or=Kt.span`
  color: #06d6a0;
  font-weight: 900;
  font-size: 1.27em;
  text-shadow: 0 0 10px #06d6a0,0 0 4px #fff;
`,Pr=Kt.button`
  position: absolute;
  top: 10px;
  right: 10px;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background: ${Jt.gradientAlt};
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
`,Ar=t=>{let{prompt:n,openModal:r}=t;const{deletePrompt:a,incrementUsage:o}=rr(),[i,l]=(0,e.useState)(!1),[s,c]=(0,e.useState)(!1),u=(0,e.useRef)(null),d=()=>{c(!1),setTimeout((()=>{document.body.classList.remove("prompt-modal-open")}),300)};return(0,e.useEffect)((()=>{const e=e=>{u.current&&!u.current.contains(e.target)&&s&&d()};return document.addEventListener("mousedown",e),()=>{document.removeEventListener("mousedown",e)}}),[s]),(0,e.useEffect)((()=>{const e=e=>{"Escape"===e.key&&s&&c(!1)};return document.addEventListener("keydown",e),()=>{document.removeEventListener("keydown",e)}}),[s]),(0,Xt.jsxs)(Xt.Fragment,{children:[(0,Xt.jsx)(br,{$visible:s,onClick:()=>c(!1)}),(0,Xt.jsxs)(pr,{ref:u,$copied:i,$expanded:s,onClick:()=>{s?d():(document.body.classList.add("prompt-modal-open"),c(!0))},children:[s&&(0,Xt.jsx)(Pr,{onClick:e=>{e.stopPropagation(),d()},children:"\xd7"}),(0,Xt.jsxs)(hr,{$expanded:s,children:[(0,Xt.jsxs)(gr,{children:[(0,Xt.jsx)(vr,{status:n.status,"aria-label":n.status,children:n.status}),(0,Xt.jsx)(yr,{"aria-label":`Usage count: ${n.usage_count}`,children:(0,Xt.jsxs)(xr,{width:16,height:16,children:[(0,Xt.jsx)("circle",{cx:8,cy:8,r:7.1,fill:"none",stroke:"#06d6a0",strokeWidth:"2",opacity:"0.92"}),(0,Xt.jsx)("text",{x:"8",y:"11.4",fill:"#fff",fontSize:"8",fontWeight:700,textAnchor:"middle",fontFamily:"'JetBrains Mono','Monaco',monospace",children:n.usage_count})]})})]}),(0,Xt.jsx)(wr,{children:n.name}),(0,Xt.jsx)(kr,{$expanded:s,children:n.description}),(0,Xt.jsx)(Sr,{$expanded:s,children:n.domains.map((e=>(0,Xt.jsx)(Er,{children:e},e)))}),(0,Xt.jsx)(jr,{children:n.agentId}),s&&(0,Xt.jsx)(mr,{children:n.prompt_text}),(0,Xt.jsxs)(Cr,{$expanded:s,children:[(0,Xt.jsx)(_r,{"aria-label":"Copy Prompt Text",onClick:async e=>{e.stopPropagation(),await navigator.clipboard.writeText(n.prompt_text),l(!0),o(n.id),setTimeout((()=>l(!1)),1050)},$copied:i,$expanded:s,children:i?(0,Xt.jsx)(Or,{"aria-label":"Copied!",children:"\u2713"}):"Copy"}),(0,Xt.jsx)(_r,{"aria-label":"Edit",onClick:e=>{e.stopPropagation(),r({mode:"edit",prompt:n,open:!0})},$expanded:s,children:"Edit"}),(0,Xt.jsx)(_r,{"aria-label":"Delete",onClick:e=>{e.stopPropagation(),a(n.id)},$expanded:s,children:"Delete"})]})]})]})]})},zr=Kt.div`
    overflow-x: auto;
    width: 100%;
    min-width: 920px;
    border-radius: 1.2rem;
    background: ${Jt.cardGlass};
    box-shadow: 0px 5px 38px #8b5cf644;
`,Tr=Kt.table`
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
`,Nr=Kt.tr`
  background: ${e=>e.$active?"#15151ee6":"#232349cc"};
  &:hover {
    background: #28254a;
  }
`,Dr=Kt.span`
  background: linear-gradient(90deg,#06d6a0,#8b5cf6);
  color: #15151e;
  border-radius: 11px;
  font-size: 0.87em;
  font-weight: 700;
  padding: 0.16em 0.58em;
  margin-right: 0.18em;
`,Fr=Kt.button`
    background: ${e=>e.$copied?Jt.gradientMain:Jt.cardGlass};
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
        background: ${Jt.gradientAlt};
        color: #15151e;
        box-shadow: 0 0 9px #ff00cc99;
    }

    transition: background 0.12s, color 0.13s;
`,Ir=t=>{let{prompts:n,openModal:r}=t;const{deletePrompt:a,incrementUsage:o}=rr(),[i,l]=(0,e.useState)(null);return(0,Xt.jsx)(zr,{children:(0,Xt.jsxs)(Tr,{children:[(0,Xt.jsx)("thead",{children:(0,Xt.jsxs)("tr",{children:[(0,Xt.jsx)("th",{children:"Name"}),(0,Xt.jsx)("th",{children:"Description"}),(0,Xt.jsx)("th",{children:"Domains"}),(0,Xt.jsx)("th",{children:"Agent"}),(0,Xt.jsx)("th",{children:"Status"}),(0,Xt.jsx)("th",{children:"Used"}),(0,Xt.jsx)("th",{children:"Actions"})]})}),(0,Xt.jsx)("tbody",{children:n.map(((e,t)=>(0,Xt.jsxs)(Nr,{$active:t%2===0,children:[(0,Xt.jsx)("td",{children:(0,Xt.jsx)("span",{children:e.name})}),(0,Xt.jsx)("td",{children:(0,Xt.jsx)("span",{children:e.description})}),(0,Xt.jsx)("td",{children:(0,Xt.jsx)("span",{children:e.domains.map((e=>(0,Xt.jsx)(Dr,{children:e},e)))})}),(0,Xt.jsx)("td",{children:(0,Xt.jsx)("span",{children:e.agentId})}),(0,Xt.jsx)("td",{children:(0,Xt.jsx)(vr,{status:e.status,children:e.status})}),(0,Xt.jsx)("td",{children:(0,Xt.jsx)("span",{children:e.usage_count})}),(0,Xt.jsxs)("td",{children:[(0,Xt.jsx)(Fr,{onClick:async()=>{await navigator.clipboard.writeText(e.prompt_text),l(e.id),o(e.id),setTimeout((()=>l(null)),1050)},$copied:i===e.id,"aria-label":"Copy Prompt",children:i===e.id?"\u2713":"Copy"}),(0,Xt.jsx)(Fr,{onClick:()=>r({mode:"edit",prompt:e,open:!0}),"aria-label":"Edit Prompt",children:"Edit"}),(0,Xt.jsx)(Fr,{onClick:()=>a(e.id),"aria-label":"Delete Prompt",children:"Delete"})]})]},e.id)))})]})})},Mr=Kt.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 100%;
`,Rr=Kt.div`
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
`,Lr=Kt.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    width: 100%;
    margin-bottom: 0.75rem; /* Ensure consistent spacing */
    height: auto; /* Let content determine height */
`,$r=Kt.div`
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
`,Br=Kt.div`
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
`,Wr=Kt.p`
    color: #8b5cf680;
    font-size: 0.8rem;
    margin-top: 0.5rem;
    text-align: center;
`,Vr=Kt.div`
    font-size: 0.8rem;
    color: #e3e9ff;
    background: rgba(139, 92, 246, 0.15);
    padding: 0.5rem;
    border-radius: 6px;
    margin-top: 0.75rem;
    border-left: 3px solid #8b5cf6;
`,qr=t=>{let{domains:n,andDomains:r,orDomains:a,onAndDomainsChange:o,onOrDomainsChange:i}=t;const[l,s]=(0,e.useState)(null),[c,u]=(0,e.useState)(null),[d,f]=(0,e.useState)(!1),[p,h]=(0,e.useState)(!1),[m,b]=(0,e.useState)(!1),g=n.filter((e=>!r.includes(e)&&!a.includes(e))),v=(e,t)=>{s(e),u(t)},y=(e,t)=>{e.preventDefault(),l&&("and"===t?f(!0):"or"===t?h(!0):b(!0))},x=e=>{"and"===e?f(!1):"or"===e?h(!1):b(!1)},w=(e,t)=>{if(e.preventDefault(),f(!1),h(!1),b(!1),!l||!c)return;let n=[...r],d=[...a];"source"===c&&"and"===t?n.includes(l)||(n=[...n,l]):"source"===c&&"or"===t?d.includes(l)||(d=[...d,l]):"and"===c&&"source"===t?n=n.filter((e=>e!==l)):"or"===c&&"source"===t?d=d.filter((e=>e!==l)):"and"===c&&"or"===t?(n=n.filter((e=>e!==l)),d.includes(l)||(d=[...d,l])):"or"===c&&"and"===t&&(d=d.filter((e=>e!==l)),n.includes(l)||(n=[...n,l])),o(n),i(d),s(null),u(null)},k=()=>{s(null),u(null),f(!1),h(!1),b(!1)};return(0,Xt.jsxs)(Mr,{children:[(0,Xt.jsxs)(Lr,{children:[(0,Xt.jsxs)(Rr,{children:[(0,Xt.jsx)("h4",{children:"AND Filter (All of these domains must match)"}),(0,Xt.jsxs)("span",{children:[r.length," selected"]})]}),(0,Xt.jsx)($r,{$isDragOver:d,$type:"and",onDragOver:e=>y(e,"and"),onDragLeave:()=>x("and"),onDrop:e=>w(e,"and"),children:0===r.length?(0,Xt.jsx)(Wr,{children:"Drop domains here to require ALL of them"}):r.map((e=>(0,Xt.jsx)(Br,{$dragType:"and",draggable:!0,onDragStart:()=>v(e,"and"),onDragEnd:k,children:e},`and-${e}`)))})]}),(0,Xt.jsxs)(Lr,{children:[(0,Xt.jsxs)(Rr,{children:[(0,Xt.jsx)("h4",{children:"OR Filter (Any of these domains can match)"}),(0,Xt.jsxs)("span",{children:[a.length," selected"]})]}),(0,Xt.jsx)($r,{$isDragOver:p,$type:"or",onDragOver:e=>y(e,"or"),onDragLeave:()=>x("or"),onDrop:e=>w(e,"or"),children:0===a.length?(0,Xt.jsx)(Wr,{children:"Drop domains here to match ANY of them"}):a.map((e=>(0,Xt.jsx)(Br,{$dragType:"or",draggable:!0,onDragStart:()=>v(e,"or"),onDragEnd:k,children:e},`or-${e}`)))})]}),(0,Xt.jsxs)(Lr,{children:[(0,Xt.jsxs)(Rr,{children:[(0,Xt.jsx)("h4",{children:"Available Domains"}),(0,Xt.jsx)("span",{children:"Drag domains to filters above"})]}),(0,Xt.jsx)($r,{$isDragOver:m,$type:"source",onDragOver:e=>y(e,"source"),onDragLeave:()=>x("source"),onDrop:e=>w(e,"source"),children:0===g.length?(0,Xt.jsx)(Wr,{children:"All domains are being used in filters"}):g.map((e=>(0,Xt.jsx)(Br,{$dragType:"source",draggable:!0,onDragStart:()=>v(e,"source"),onDragEnd:k,children:e},`source-${e}`)))})]}),(r.length>0||a.length>0)&&(0,Xt.jsxs)(Vr,{children:["Current filter: ",r.length>0?`(Must have ALL of: ${r.join(", ")})`:"",r.length>0&&a.length>0?" AND ":"",a.length>0?`(Must have ANY of: ${a.join(", ")})`:""]})]})},Ur=t=>{let{viewMode:n,setViewMode:r,openModal:a}=t;const{prompts:o}=rr(),i=(0,e.useRef)(null),[l,s]=(0,e.useState)(""),[c,u]=(0,e.useState)("all"),[d,f]=(0,e.useState)("all"),[p,h]=(0,e.useState)([]),[m,b]=(0,e.useState)([]),g=o.filter((e=>("all"===c||e.status===c)&&(("all"===d||e.agentId===d)&&(!(l&&![e.name,e.description,e.prompt_text].join(" ").toLowerCase().includes(l.toLowerCase()))&&(!(p.length>0&&!p.every((t=>e.domains.includes(t))))&&!(m.length>0&&!m.some((t=>e.domains.includes(t)))))))));return(0,Xt.jsxs)(yn,{children:[(0,Xt.jsxs)(wn,{children:[(0,Xt.jsxs)(Sn,{children:[(0,Xt.jsx)(lr,{}),(0,Xt.jsx)(En,{"aria-label":"Search Prompts",placeholder:"Search prompts...",value:l,onChange:e=>s(e.target.value)})]}),(0,Xt.jsxs)(jn,{children:["Status:",(0,Xt.jsxs)(Cn,{value:c,onChange:e=>u(e.target.value),children:[(0,Xt.jsx)("option",{value:"all",children:"All"}),(0,Xt.jsx)("option",{value:"active",children:"Active"}),(0,Xt.jsx)("option",{value:"archived",children:"Archived"})]})]}),(0,Xt.jsxs)(jn,{children:["Agent:",(0,Xt.jsxs)(Cn,{value:d,onChange:e=>f(e.target.value),children:[(0,Xt.jsx)("option",{value:"all",children:"All"}),Zn.AGENT_LIST.map((e=>(0,Xt.jsx)("option",{value:e,children:e},e)))]})]}),(0,Xt.jsxs)(jn,{style:{flexGrow:1},children:["Domains:",(0,Xt.jsx)(qr,{domains:Zn.DOMAIN_LIST,andDomains:p,orDomains:m,onAndDomainsChange:e=>h(e),onOrDomainsChange:e=>b(e),onCompoundFilterChange:(e,t)=>{h(e),b(t)}})]})]}),(0,Xt.jsxs)(xn,{children:[(0,Xt.jsxs)(Pn,{children:[(0,Xt.jsxs)(An,{children:[g.length," ",1===g.length?"prompt":"prompts"," found",(0,Xt.jsx)(Nn,{"aria-label":"Add New Prompt",onClick:()=>a({mode:"new",prompt:void 0,open:!0}),children:"+ New Prompt"})]}),(0,Xt.jsx)(zn,{children:(0,Xt.jsxs)(On,{children:[(0,Xt.jsx)(Tn,{"aria-label":"Grid View",active:"grid"===n,onClick:()=>r("grid"),children:(0,Xt.jsx)(sr,{})}),(0,Xt.jsx)(Tn,{"aria-label":"Table View",active:"table"===n,onClick:()=>r("table"),children:(0,Xt.jsx)(cr,{})})]})})]}),0===g.length?(0,Xt.jsx)(Dn,{children:"Sorry, no prompts match these filters."}):"grid"===n?(0,Xt.jsx)(Fn,{children:(0,Xt.jsx)(In,{ref:i,children:(0,Xt.jsx)(Mn,{children:g.map((e=>(0,Xt.jsx)(Ar,{prompt:e,openModal:a},e.id)))})})}):(0,Xt.jsx)(Ir,{prompts:g,openModal:a})]})]})},Hr=t=>{let{onBackToWorkflow:n}=t;const[r,a]=(0,e.useState)({mode:"new",prompt:void 0,open:!1}),[o,i]=(0,e.useState)("grid");return(0,Xt.jsx)(nr,{children:(0,Xt.jsxs)(gn,{children:[(0,Xt.jsx)(ir,{}),(0,Xt.jsx)(vn,{children:(0,Xt.jsx)(Ur,{viewMode:o,setViewMode:i,openModal:a})}),r.open&&(0,Xt.jsx)(or,{mode:r.mode,prompt:r.prompt,closeModal:()=>a((e=>({...e,open:!1})))})]})})},Kr=Kt.aside`
    min-width: 280px;
    max-width: 290px;
    padding: 0 var(--spacing-xxs) 0 0;
    background: var(--color-neutral-100);
    border-left: var(--border-width-medium) solid var(--color-neutral-200);
    box-shadow: var(--shadow-sm);
    display: flex;
    flex-direction: column;
`,Gr=Kt.div`
    font-weight: var(--font-weight-bold);
    color: var(--color-josh-primary);
    padding: var(--spacing-md) var(--spacing-md) var(--spacing-xs) var(--spacing-md);
    display: flex;
    align-items: center;
    gap: var(--spacing-sm);
    font-size: var(--font-size-base);
    background: var(--color-neutral-100);
    border-bottom: var(--border-width-medium) solid var(--color-neutral-200);
`,Qr=Kt.div`
    flex: 1 1 auto;
    padding: var(--spacing-md) var(--spacing-base) var(--spacing-base) var(--spacing-md);
    overflow-y: auto;
    min-height: 144px;
`,Yr=Kt.div`
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
`,Jr=Kt.div`
    padding: var(--spacing-xs) var(--spacing-base) var(--spacing-sm) var(--spacing-md);
    background: var(--color-neutral-100);
    border-top: var(--border-width-medium) solid var(--color-neutral-200);
    display: flex;
    align-items: center;
    gap: var(--spacing-xs);
`,Xr=Kt.input`
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
`,Zr=Kt.button`
    background: var(--color-josh-primary);
    color: var(--color-neutral-100);
    font-weight: var(--font-weight-bold);
    border: none;
    border-radius: var(--border-radius-sm);
    font-size: var(--font-size-base);
    padding: var(--spacing-xs) var(--spacing-md);
    margin-left: var(--spacing-xxs);
    cursor: pointer;
    transition: background var(--transition-fast);
    box-shadow: var(--shadow-xs);

    &:hover {
        background: var(--color-josh-secondary);
        box-shadow: var(--shadow-sm);
    }
    
    &:focus-visible {
        outline: var(--border-width-medium) solid var(--color-josh-primary);
        outline-offset: var(--spacing-xxs);
        background: var(--color-josh-secondary);
    }
`,ea={xs:"24px",sm:"32px",md:"40px",lg:"48px",xl:"64px"},ta=(e,t)=>t||(e?`var(--color-${e}-primary)`:"var(--color-primary)"),na=Kt.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${e=>ea[e.size]};
  height: ${e=>ea[e.size]};
  position: relative;
  
  /* Default background if no gradient */
  background: ${e=>ta(e.agentKey,e.color)};
  
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
  ${e=>e.isInteractive&&qt`
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
      outline: var(--border-width-medium) solid ${ta(e.agentKey,e.color)};
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
`,ra=(Kt.img`
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
`,e=>{let{color:t,agentKey:n,size:r="md",isInteractive:a=!1,className:o,style:i,children:l,onClick:s,tabIndex:c}=e;const u=!!s||a;return(0,Xt.jsx)(na,{color:t,agentKey:n,size:r,isInteractive:u,className:o,style:i,onClick:s,tabIndex:c||(u?0:void 0),children:l})}),aa=Kt.div`
    height: calc(100vh - 61px); /* Account for header height */
    width: 100vw;
    display: flex;
    flex-direction: row;
    background: var(--color-neutral-100);
    font-family: var(--font-family);
    color: var(--color-neutral-900);
    box-sizing: border-box;
    overflow: hidden; /* Prevent outer scrolling */
`,oa=Kt.header`
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
`,ia=Kt.div`
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
`,la=Kt.nav`
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
`,sa=Kt.div`
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
`,ca=Kt(ra)`
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
`,ua=Kt.span`
    font-weight: var(--font-weight-bold);
    color: var(--color-neutral-100);
    font-size: var(--font-size-xl);
    position: relative;
    left: 0.5px;
    top: 0.4px;
`,da=Kt.main`
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
`,fa=Kt.div`
    margin: var(--spacing-base) 0 var(--spacing-md) 0;
    display: flex;
    flex-direction: row;
    gap: var(--spacing-base);
`,pa=Kt.div`
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
`,ha=Kt.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: var(--spacing-xs) 0 var(--spacing-sm) 0;
    padding: 0 var(--spacing-xxs);
    gap: var(--spacing-md);
    min-height: 34px;
`,ma=Kt.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: var(--spacing-xs);
`,ba=Kt.div`
    background: var(--color-neutral-100);
    border-radius: var(--border-radius-md);
    box-shadow: var(--shadow-card);
    margin: 0 0 var(--spacing-md) 0;
    padding: 0 0 var(--spacing-base) 0;
    overflow: hidden;
    max-height: 300px; /* Limit height to ensure main panel scrolls */
    display: flex;
    flex-direction: column;
`,ga=Kt.div`
    display: grid;
    grid-template-columns: 1fr 1.25fr 0.7fr;
    background: var(--color-neutral-200);
    font-weight: var(--font-weight-bold);
    font-size: var(--font-size-base);
    padding: var(--spacing-sm) var(--spacing-md);
`,va=Kt.div`
    font-weight: inherit;
    color: var(--color-neutral-800);
`,ya=Kt.div`
    overflow-y: auto;
    max-height: 250px;
`,xa=Kt.div`
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
`,wa=Kt.span`
    color: var(--color-neutral-900);
    font-weight: var(--font-weight-medium);
    margin-left: var(--spacing-xs);
    vertical-align: top;
    font-size: var(--font-size-base);
`,ka=Kt.section`
    margin: var(--spacing-xl) 0 0 0;
    padding: 0;
    background: var(--color-neutral-100);
    border-radius: var(--border-radius-md);
    box-shadow: var(--shadow-card);
    max-width: 470px;
`,Sa=Kt.div`
    font-weight: var(--font-weight-bold);
    color: var(--color-josh-primary);
    font-size: var(--font-size-lg);
    padding: var(--spacing-base) var(--spacing-md) var(--spacing-xs) var(--spacing-md);
    background: var(--color-neutral-200);
    border-radius: var(--border-radius-md) var(--border-radius-md) 0 0;
    border-bottom: var(--border-width-medium) solid var(--color-neutral-200);
`,Ea=Kt.pre`
    background: var(--color-neutral-100);
    padding: var(--spacing-base) var(--spacing-md);
    color: var(--color-neutral-900);
    font-size: var(--font-size-base);
    min-height: 60px;
    margin: 0;
    font-family: "Fira Mono", "Consolas", "Menlo", monospace;
    border-radius: 0 0 var(--border-radius-sm) var(--border-radius-sm);
    overflow: auto;
`,ja=Kt.div`
    display: flex;
    gap: var(--spacing-base);
    align-items: center;
    padding: var(--spacing-xs) 0 var(--spacing-base) var(--spacing-md);
`,Ca=Kt.div`
    margin: var(--spacing-base) 0 var(--spacing-xs) var(--spacing-sm);
    font-size: var(--font-size-lg);
    color: var(--color-neutral-900);
    font-weight: var(--font-weight-bold);
    letter-spacing: 0.03em;
`,_a=Kt.div`
    position: absolute;
    left: -9999px;
    top: auto;
    width: 1px;
    height: 1px;
    overflow: hidden;
`,Oa=(Kt.span`
    display: inline-block;
    font-weight: var(--font-weight-medium);
    width: 8px;
    height: 8px;
    border-radius: var(--border-radius-full);
    background-color: var(--color-josh-primary);
`,Kt.div`
    min-width: 320px;
    max-width: 330px;
    background: var(--color-surface-light);
    border-radius: var(--border-radius-large);
    box-shadow: var(--shadow-md);
    padding: 21px 20px 19px 24px;
    margin: 17px 0 0 0;
    display: flex;
    flex-direction: column;
    flex: 1 1 330px;
`),Pa=Kt.div`
    color: var(--color-josh-primary);
    font-size: 1.02rem;
    font-weight: 600;
    margin-bottom: 12px;
    letter-spacing: 0.012em;
`,Aa=Kt.div`
    margin: 0 0 5px 0;
    font-size: 1.015rem;
    display: flex;
    align-items: center;
    gap: 6px;
`,za=Kt.span`
    color: var(--color-text-dark);
    font-weight: 600;
    margin-left: 5px;
`,Ta=Kt.div`
    margin: 2.5px 0 9px 5px;
    padding: 4.5px 7px;
    background: var(--color-neutral-200);
    border-radius: var(--border-radius-small);
    color: var(--color-josh-primary);
    font-size: 0.97rem;
    font-style: italic;
`,Na=Kt.div`
    color: var(--color-text-muted);
    font-size: 0.99rem;
    margin-bottom: 1.5px;
`,Da=Kt.div`
    color: var(--color-text-hint);
    margin-top: 38px;
    text-align: center;
    font-size: 1.07rem;
    font-weight: 600;
    opacity: 0.83;
`,Fa=Kt.span`
    margin-left: var(--spacing-xs);
    font-size: var(--font-size-lg);
    font-weight: var(--font-weight-bold);
    color: ${e=>e.color};
    vertical-align: middle;
    display: inline-flex;
    align-items: center;
    ${e=>e.error&&qt`
                background: var(--color-neutral-200);
                border-radius: var(--border-radius-sm);
                padding: var(--spacing-xxs) var(--spacing-xs) var(--spacing-xxs) var(--spacing-xxs);
            `}
`,Ia=Kt.section`
    min-width: 385px;
    max-width: 535px;
    background: var(--color-surface-light);
    border-radius: var(--border-radius-large);
    margin: 17px 0 0 0;
    box-shadow: var(--shadow-md);
    display: flex;
    flex-direction: column;
    transition: box-shadow 0.13s;
`,Ma=Kt.div`
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
`,Ra=Kt.span`
    position: relative;
    top: 1.5px;
    font-size: 1.19em;
    color: var(--color-josh-primary);
    opacity: 0.86;
`,La=Kt.div`
    background: var(--color-surface-light);
    padding: 13px 15px;
    font-size: 1rem;
`,$a=Kt.div`
    display: flex;
    align-items: center;
    gap: 11px;
    padding: 9px 0 13px 13px;
`,Ba=Kt.button`
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
`,Wa=Kt.div`
    margin: 0 0 0 var(--spacing-sm);
    padding: var(--spacing-md) var(--spacing-xs) var(--spacing-md) var(--spacing-sm);
    display: flex;
    gap: var(--spacing-md);
    min-height: 66px;
    align-items: center;
`,Va=Kt.div`
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
`,qa=Kt.span`
    width: 38px;
    height: 38px;
    border-radius: var(--border-radius-full);
    background: rgba(255, 255, 255, 0.1);
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: var(--font-size-xl);
    font-weight: var(--font-weight-bold);
`,Ua=Kt.span`
    background: ${e=>e.color};
    border-radius: var(--border-radius-sm);
    color: var(--color-neutral-100);
    font-size: var(--font-size-sm);
    font-weight: var(--font-weight-medium);
    padding: var(--spacing-xxs) var(--spacing-xs);
    margin-left: var(--spacing-xs);
    letter-spacing: 0.04em;
`,Ha={Josh:{key:"Josh",name:"Josh",short:"J",role:"Graphic Design Agent",color:"var(--color-josh-primary)",accent:"var(--color-josh-secondary)",avatarBg:"var(--color-josh-gradient)"},Reqqy:{key:"Reqqy",name:"Reqqy",short:"R",role:"Requirements Agent",color:"var(--color-reqqy-primary)",accent:"var(--color-reqqy-secondary)",avatarBg:"var(--color-reqqy-gradient)"},Nat:{key:"Nat",name:"Nat",short:"N",role:"CEO/AI PM",color:"var(--color-nat-primary)",accent:"var(--color-nat-secondary)",avatarBg:"var(--color-nat-gradient)"},Brian:{key:"Brian",name:"Brian",short:"B",role:"Product Manager",color:"var(--color-brian-primary)",accent:"var(--color-brian-secondary)",avatarBg:"var(--color-brian-gradient)"},Lia:{key:"Lia",name:"Lia",short:"L",role:"Email & Social Media Agent",color:"var(--color-lia-primary)",accent:"var(--color-lia-secondary)",avatarBg:"var(--color-lia-gradient)"},"Man-Man":{key:"Man-Man",name:"Man-Man",short:"M",role:"Maintenance Agent",color:"var(--color-manman-primary)",accent:"var(--color-manman-secondary)",avatarBg:"var(--color-manman-gradient)"},Twin:{key:"Twin",name:"James & Terrell",short:"T",role:"Twin Developer Agents",color:"var(--color-twin-primary)",accent:"var(--color-twin-secondary)",avatarBg:"var(--color-twin-gradient)"},Antosh:{key:"Antosh",name:"Antosh",short:"A",role:"Testing & Analytics Agent",color:"var(--color-antosh-primary)",accent:"var(--color-antosh-secondary)",avatarBg:"var(--color-antosh-gradient)"}},Ka=[{id:1,name:"Collect requirements",status:"complete",assigned:"Reqqy",devNotes:"JSON requirements synced.",description:"All required info for v3.9.5 captured and validated.",priority:"high",styleProps:{cardBg:"var(--color-reqqy-surface)",accentColor:"var(--color-reqqy-primary)",textColor:"var(--color-text-dark)",iconBg:"var(--color-reqqy-gradient)",borderColor:"var(--color-reqqy-secondary)"},visualProps:{icon:"\ud83d\udccb",order:1,dependencies:[]},n8nJson:{id:1,type:"requirements",agent:"Reqqy",status:"complete",notes:"Imported from docs."}},{id:2,name:"Design visuals",status:"active",assigned:"Josh",devNotes:"Check SVG contrast, keep animation, docs must be thorough.",description:"Visual polish for accessibility. No redesign. Only bugfixes & documentation allowed.",priority:"high",styleProps:{cardBg:"var(--color-josh-surface)",accentColor:"var(--color-josh-primary)",textColor:"var(--color-text-dark)",iconBg:"var(--color-josh-gradient)",borderColor:"var(--color-josh-secondary)"},visualProps:{icon:"\ud83c\udfa8",order:2,dependencies:[1]},n8nJson:{id:2,type:"design",agent:"Josh",status:"active",notes:"Check SVG contrast."}},{id:3,name:"Develop logic",status:"active",assigned:"Twin",devNotes:"Preserve v3.9 features. Maintain ARIA/test cover.",description:"Implement Features per Reqqy's requirements with no regressions.",priority:"medium",styleProps:{cardBg:"var(--color-twin-surface)",accentColor:"var(--color-twin-primary)",textColor:"var(--color-text-dark)",iconBg:"var(--color-twin-gradient)",borderColor:"var(--color-twin-secondary)"},visualProps:{icon:"\ud83d\udcbb",order:3,dependencies:[1,2]},n8nJson:{id:3,type:"develop",agent:"Twin",status:"active",notes:"Feature parity focus."}},{id:4,name:"Test features",status:"error",assigned:"Antosh",devNotes:"WCAG fails on contrast for one button.",description:"AXE/NVDA audit failed. Triage and fix before release.",priority:"high",styleProps:{cardBg:"var(--color-antosh-surface)",accentColor:"var(--color-antosh-primary)",textColor:"var(--color-text-dark)",iconBg:"var(--color-antosh-gradient)",borderColor:"var(--color-antosh-secondary)"},visualProps:{icon:"\ud83e\uddea",order:4,dependencies:[3]},n8nJson:{id:4,type:"test",agent:"Antosh",status:"error",notes:"Fix button contrast."}},{id:5,name:"Deploy workflow",status:"complete",assigned:"Man-Man",devNotes:"Released to demo env.",description:"Versioned deployment, with audit logs.",priority:"medium",styleProps:{cardBg:"var(--color-manman-surface)",accentColor:"var(--color-manman-primary)",textColor:"var(--color-text-dark)",iconBg:"var(--color-manman-gradient)",borderColor:"var(--color-manman-secondary)"},visualProps:{icon:"\ud83d\ude80",order:5,dependencies:[4]},n8nJson:{id:5,type:"deploy",agent:"Man-Man",status:"complete",notes:"All services live."}}];function Ga(e){return Ha[e].color}function Qa(){var t;const[n,r]=(0,e.useState)("workflow"),[o,i]=(0,e.useState)(0),[l,s]=(0,e.useState)(2),[c,u]=(0,e.useState)(null),[d,f]=(0,e.useState)(!0),[p,h]=(0,e.useState)(!1),[m,b]=(0,e.useState)(!1),g=(0,e.useMemo)((()=>c?Ka.filter((e=>e.assigned===c)):Ka),[c]),v=null!=l&&null!==(t=Ka.find((e=>e.id===l)))&&void 0!==t?t:null,{focusIdx:y,setFocusIdx:x,rowRefs:w,onKeyDown:k}=function(t){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;const[r,a]=(0,e.useState)(n),o=(0,e.useRef)([]);return(0,e.useEffect)((()=>{var e;o.current[r]&&(null===(e=o.current[r])||void 0===e||e.focus())}),[r,t]),{focusIdx:r,setFocusIdx:a,rowRefs:o,onKeyDown:function(e){"ArrowDown"===e.key&&(a((e=>(e+1)%t)),e.preventDefault()),"ArrowUp"===e.key&&(a((e=>(e-1+t)%t)),e.preventDefault()),"Home"===e.key&&(a(0),e.preventDefault()),"End"===e.key&&(a(t-1),e.preventDefault())}}}(g.length,Math.max(0,g.findIndex((e=>e.id===l)))),[S,E]=(0,e.useState)("");const[j,C]=(0,e.useState)(""),[_,O]=(0,e.useState)([{id:1,content:"Status update?",agent:"Man-Man",you:!0},{id:2,content:"Redesign step details panel in progress.\nDocs & JSON UI ready.",agent:"Josh",you:!1}]);function P(){j.trim().length>0&&(O([..._,{id:_.length+1,content:j,agent:"Man-Man",you:!0}]),C(""))}const A=()=>(0,Xt.jsxs)(oa,{role:"banner","aria-label":"Header",children:[(0,Xt.jsx)(ia,{}),"AI Agent Workflow Orchestrator v3.9.5","workflow"===n&&(0,Xt.jsxs)("button",{onClick:()=>r("promptLibrary"),style:{marginLeft:"auto",background:"var(--color-accent-josh)",color:"#fff",border:"none",borderRadius:"4px",padding:"8px 12px",fontWeight:600,cursor:"pointer",display:"flex",alignItems:"center",gap:"6px"},children:[(0,Xt.jsx)("span",{style:{fontSize:"18px"},children:"\ud83d\udcda"}),"Open Prompt Library"]})]});return(0,Xt.jsxs)("div",{style:{width:"100vw",height:"100vh",boxSizing:"border-box",overflow:"hidden"},children:[(0,Xt.jsx)(Yt,{}),"workflow"===n?(0,Xt.jsxs)(Xt.Fragment,{children:[(0,Xt.jsx)(A,{}),(0,Xt.jsxs)(aa,{children:[(0,Xt.jsx)(la,{role:"navigation","aria-label":"Agent Navigation Sidebar",tabIndex:0,children:Object.values(Ha).map((e=>(0,Xt.jsx)(sa,{selected:c===e.key,tabIndex:0,"aria-label":`Filter steps to only ${e.name}`,"aria-selected":c===e.key,title:e.role,onClick:()=>u(c===e.key?null:e.key),onKeyDown:t=>{"Enter"!==t.key&&" "!==t.key&&"Spacebar"!==t.key||u(c===e.key?null:e.key)},children:(0,Xt.jsx)(ca,{color:e.color,children:(0,Xt.jsx)(ua,{children:e.short})})},e.key)))}),(0,Xt.jsxs)(da,{role:"main","aria-label":"Main Workflow Panel",children:[(0,Xt.jsx)(fa,{children:["Standard Blog Generation","Customer Outreach Flow","Social Blast"].map(((e,t)=>(0,Xt.jsx)(pa,{selected:t===o,tabIndex:0,"aria-label":`Workflow: ${e}`,"aria-selected":t===o,onClick:()=>i(t),onKeyDown:e=>{"Enter"!==e.key&&" "!==e.key||i(t)},children:(0,Xt.jsx)(Ca,{style:{fontSize:"var(--font-size-base)",color:t!==o?"var(--color-josh-primary)":"var(--color-text-dark)",fontWeight:t===o?"var(--font-weight-bold)":"var(--font-weight-medium)"},children:e})},e)))}),(0,Xt.jsx)(ha,{role:"region","aria-label":"Present Agents",children:["Reqqy","Josh","Twin","Antosh","Man-Man"].map(((e,t)=>{const n=Ha[e];let r="Josh"===e||"Twin"===e?"active":"Man-Man"===e?"complete":"Antosh"===e?"error":"complete";return(0,Xt.jsxs)(ma,{children:[(0,Xt.jsx)(ca,{color:n.color,children:(0,Xt.jsx)(ua,{children:n.short})}),(0,Xt.jsx)(Fa,{color:dn[r].color,error:"error"===r,children:dn[r].icon})]},e)}))}),(0,Xt.jsx)(Ca,{children:"Standard Blog Generation"}),(0,Xt.jsxs)(ba,{role:"region","aria-label":"Workflow Step List",children:[(0,Xt.jsxs)(ga,{children:[(0,Xt.jsx)(va,{children:"Step"}),(0,Xt.jsx)(va,{children:"Agent"}),(0,Xt.jsx)(va,{children:"Status"})]}),(0,Xt.jsx)(ya,{children:g.map(((e,t)=>(0,Xt.jsxs)(xa,{ref:e=>w.current[t]=e,role:"row",tabIndex:0,selected:e.id===(null===v||void 0===v?void 0:v.id),"aria-selected":e.id===(null===v||void 0===v?void 0:v.id),"data-testid":`tablerow-${e.id}`,onClick:()=>{s(e.id),x(t)},onFocus:()=>s(e.id),onKeyDown:t=>{k(t),"Enter"!==t.key&&" "!==t.key||s(e.id)},children:[(0,Xt.jsx)("span",{children:e.name}),(0,Xt.jsxs)("span",{children:[(0,Xt.jsx)(ca,{color:Ga(e.assigned),style:{width:"34px",height:"34px"},children:(0,Xt.jsx)(ua,{children:Ha[e.assigned].short})}),(0,Xt.jsx)(wa,{style:{fontSize:".99rem"},children:Ha[e.assigned].name})]}),(0,Xt.jsx)(Fa,{color:dn[e.status].color,error:"error"===e.status,children:dn[e.status].icon})]},e.id)))})]}),(0,Xt.jsxs)("div",{style:{display:"flex",flexDirection:"row",gap:"25px",width:"100%",minHeight:"190px"},children:[v?(0,Xt.jsxs)(Oa,{role:"region","aria-label":"Step Details Panel",children:[(0,Xt.jsx)(Pa,{children:"Step Details"}),(0,Xt.jsxs)(Aa,{children:["Name:",(0,Xt.jsx)(za,{"data-testid":"stepdetails-value-name",children:v.name})]}),(0,Xt.jsxs)(Aa,{children:["Assigned Agent:",(0,Xt.jsx)(ca,{color:Ga(v.assigned),style:{width:"28px",height:"28px",marginLeft:"14px"},children:(0,Xt.jsx)(ua,{style:{fontSize:"1.07rem",top:"5px",left:"8px"},children:Ha[v.assigned].short})}),(0,Xt.jsx)(wa,{children:Ha[v.assigned].name})]}),(0,Xt.jsxs)(Aa,{children:["Status: ",(0,Xt.jsx)(za,{children:dn[v.status].label})]}),(0,Xt.jsx)(Aa,{style:{fontWeight:600},children:"Developer Notes:"}),(0,Xt.jsx)(Ta,{"data-testid":"stepdetails-devnotes",children:v.devNotes}),(0,Xt.jsx)(Aa,{style:{fontWeight:600},children:"Description:"}),(0,Xt.jsx)(Na,{"data-testid":"stepdetails-desc",children:v.description})]}):(0,Xt.jsx)(Oa,{role:"region","aria-label":"Step Details Panel (no selection)",children:(0,Xt.jsx)(Da,{children:"Select a workflow step to view details."})}),(0,Xt.jsxs)(Ia,{tabIndex:0,"aria-label":"n8n Node JSON Viewer","aria-expanded":d,children:[(0,Xt.jsxs)(Ma,{onClick:()=>f(!d),tabIndex:0,"aria-label":"Expand/collapse n8n Node JSON viewer",onKeyDown:e=>{"Enter"!==e.key&&" "!==e.key||f((e=>!e))},children:[(0,Xt.jsx)(Ra,{"aria-hidden":!0,children:d?(0,Xt.jsx)(tn,{}):(0,Xt.jsx)(nn,{})}),"n8n Node JSON"]}),d&&v&&(0,Xt.jsx)(La,{"aria-label":"n8n Node JSON panel",tabIndex:-1,children:(0,Xt.jsx)(a(),{src:v.n8nJson,theme:"apathy:inverted",name:!1,collapsed:!1,enableClipboard:!1,displayDataTypes:!1,style:{background:"#fff",fontSize:"1rem"}})}),(0,Xt.jsxs)($a,{children:[(0,Xt.jsxs)(Ba,{type:"button",onClick:function(){v&&(navigator.clipboard.writeText(JSON.stringify(v.n8nJson,null,2)),b(!0),setTimeout((()=>b(!1)),1100),E("Copied step n8n node JSON."))},"aria-label":"Copy this step n8n JSON",children:[(0,Xt.jsx)(rn,{}),m?"Copied":"Copy"]}),(0,Xt.jsxs)(Ba,{type:"button",onClick:()=>E("Edit step JSON coming soon."),"aria-label":"Edit (disabled)",style:{background:"var(--color-primary)",opacity:.68,cursor:"not-allowed"},disabled:!0,children:[(0,Xt.jsx)(an,{})," Edit"]})]})]})]}),(0,Xt.jsxs)(ka,{children:[(0,Xt.jsx)(Sa,{children:"Global Workflow JSON"}),(0,Xt.jsx)(Ea,{"aria-label":"Workflow JSON Preview",children:JSON.stringify(Ka.map((e=>({id:e.id,name:e.name}))),null,2)}),(0,Xt.jsxs)(ja,{children:[(0,Xt.jsxs)(Ba,{onClick:()=>E("Edit global JSON coming soon."),style:{background:"var(--color-primary)",opacity:.68,cursor:"not-allowed"},"aria-label":"Edit (disabled)",disabled:!0,children:[(0,Xt.jsx)(an,{}),"Edit"]}),(0,Xt.jsxs)(Ba,{onClick:function(){navigator.clipboard.writeText(JSON.stringify(Ka,null,2)),h(!0),setTimeout((()=>h(!1)),1100),E("Copied global workflow JSON.")},children:[(0,Xt.jsx)(rn,{}),p?"Copied":"Copy"]})]})]}),(0,Xt.jsx)("h3",{style:{color:"var(--color-accent-josh)",fontWeight:700,margin:"40px 0 13px 19px"},children:"Visual Builder"}),(0,Xt.jsx)(Wa,{children:Ka.map(((e,t)=>(0,Xt.jsxs)(Va,{color:Ga(e.assigned),selected:(null===v||void 0===v?void 0:v.id)===e.id,error:"error"===e.status,tabIndex:0,"aria-label":`Step: ${e.name}, assigned to ${Ha[e.assigned].name}`,children:[(0,Xt.jsx)(qa,{children:Ha[e.assigned].short}),(0,Xt.jsx)(Ua,{color:dn[e.status].color,children:dn[e.status].label})]},e.id)))})]}),(0,Xt.jsxs)(Kr,{"aria-label":"Chat with Josh",children:[(0,Xt.jsxs)(Gr,{children:[(0,Xt.jsx)(ca,{color:Ga("Josh"),children:(0,Xt.jsx)(ua,{children:"J"})}),"Chat with Josh"]}),(0,Xt.jsxs)(Qr,{children:[_.map(((e,t)=>(0,Xt.jsx)(Yr,{you:e.you,children:e.content.split("\n").map(((e,t)=>(0,Xt.jsxs)("span",{children:[t?(0,Xt.jsx)("br",{}):null,e]},t)))},e.id))),(0,Xt.jsx)("div",{"aria-live":"polite","aria-atomic":"true",children:(0,Xt.jsxs)("span",{children:[(0,Xt.jsx)("span",{style:{color:"var(--color-accent-josh)",fontWeight:700,margin:"0 3px"},children:"\u2022"}),(0,Xt.jsx)("span",{style:{color:"var(--color-accent-josh)",fontWeight:700,margin:"0 3px",opacity:.6},children:"\u2022"}),(0,Xt.jsx)("span",{style:{color:"var(--color-accent-josh)",fontWeight:700,margin:"0 3px",opacity:.44},children:"\u2022"})]})})]}),(0,Xt.jsxs)(Jr,{children:[(0,Xt.jsx)(Xr,{placeholder:"Type your message...",value:j,onChange:e=>C(e.target.value),onKeyDown:function(e){"Enter"===e.key&&P()},"aria-label":"Type your message"}),(0,Xt.jsx)(Zr,{onClick:P,children:"Send"})]})]}),(0,Xt.jsx)(_a,{"aria-live":"polite",children:S})]})]}):(0,Xt.jsx)(Hr,{onBackToWorkflow:()=>r("workflow")})]})}const Ya=document.getElementById("root");if(!Ya)throw new Error("Failed to find the root element");t.render((0,Xt.jsx)(e.StrictMode,{children:(0,Xt.jsx)(Qa,{})}),Ya)})()})();