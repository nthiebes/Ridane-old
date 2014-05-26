/*! jQuery v1.10.2 -wrap,-css,-event-alias,-ajax,-ajax/script,-ajax/jsonp,-ajax/xhr,-effects,-offset,-dimensions,-deprecated | (c) 2005, 2013 jQuery Foundation, Inc. | jquery.org/license
//@ sourceMappingURL=jquery.min.map
*/
(function(e,t){var n,r,i=typeof t,o=e.location,a=e.document,s=a.documentElement,l=e.jQuery,u=e.$,c={},p=[],d="1.10.2 -wrap,-css,-event-alias,-ajax,-ajax/script,-ajax/jsonp,-ajax/xhr,-effects,-offset,-dimensions,-deprecated",f=p.concat,h=p.push,g=p.slice,m=p.indexOf,y=c.toString,v=c.hasOwnProperty,b=d.trim,x=function(e,t){return new x.fn.init(e,t,r)},N=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,w=/\S+/g,T=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,C=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,E=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,k=/^[\],:{}\s]*$/,A=/(?:^|:|,)(?:\s*\[)+/g,D=/\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,S=/"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g,L=/^-ms-/,j=/-([\da-z])/gi,H=function(e,t){return t.toUpperCase()},_=function(e){(a.addEventListener||"load"===e.type||"complete"===a.readyState)&&(B(),x.ready())},B=function(){a.addEventListener?(a.removeEventListener("DOMContentLoaded",_,!1),e.removeEventListener("load",_,!1)):(a.detachEvent("onreadystatechange",_),e.detachEvent("onload",_))};x.fn=x.prototype={jquery:d,constructor:x,init:function(e,n,r){var i,o;if(!e)return this;if("string"==typeof e){if(i="<"===e.charAt(0)&&">"===e.charAt(e.length-1)&&e.length>=3?[null,e,null]:C.exec(e),!i||!i[1]&&n)return!n||n.jquery?(n||r).find(e):this.constructor(n).find(e);if(i[1]){if(n=n instanceof x?n[0]:n,x.merge(this,x.parseHTML(i[1],n&&n.nodeType?n.ownerDocument||n:a,!0)),E.test(i[1])&&x.isPlainObject(n))for(i in n)x.isFunction(this[i])?this[i](n[i]):this.attr(i,n[i]);return this}if(o=a.getElementById(i[2]),o&&o.parentNode){if(o.id!==i[2])return r.find(e);this.length=1,this[0]=o}return this.context=a,this.selector=e,this}return e.nodeType?(this.context=this[0]=e,this.length=1,this):x.isFunction(e)?r.ready(e):(e.selector!==t&&(this.selector=e.selector,this.context=e.context),x.makeArray(e,this))},selector:"",length:0,toArray:function(){return g.call(this)},get:function(e){return null==e?this.toArray():0>e?this[this.length+e]:this[e]},pushStack:function(e){var t=x.merge(this.constructor(),e);return t.prevObject=this,t.context=this.context,t},each:function(e,t){return x.each(this,e,t)},ready:function(e){return x.ready.promise().done(e),this},slice:function(){return this.pushStack(g.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(0>e?t:0);return this.pushStack(n>=0&&t>n?[this[n]]:[])},map:function(e){return this.pushStack(x.map(this,function(t,n){return e.call(t,n,t)}))},end:function(){return this.prevObject||this.constructor(null)},push:h,sort:[].sort,splice:[].splice},x.fn.init.prototype=x.fn,x.extend=x.fn.extend=function(){var e,n,r,i,o,a,s=arguments[0]||{},l=1,u=arguments.length,c=!1;for("boolean"==typeof s&&(c=s,s=arguments[1]||{},l=2),"object"==typeof s||x.isFunction(s)||(s={}),u===l&&(s=this,--l);u>l;l++)if(null!=(o=arguments[l]))for(i in o)e=s[i],r=o[i],s!==r&&(c&&r&&(x.isPlainObject(r)||(n=x.isArray(r)))?(n?(n=!1,a=e&&x.isArray(e)?e:[]):a=e&&x.isPlainObject(e)?e:{},s[i]=x.extend(c,a,r)):r!==t&&(s[i]=r));return s},x.extend({expando:"jQuery"+(d+Math.random()).replace(/\D/g,""),noConflict:function(t){return e.$===x&&(e.$=u),t&&e.jQuery===x&&(e.jQuery=l),x},isReady:!1,readyWait:1,holdReady:function(e){e?x.readyWait++:x.ready(!0)},ready:function(e){if(e===!0?!--x.readyWait:!x.isReady){if(!a.body)return setTimeout(x.ready);x.isReady=!0,e!==!0&&--x.readyWait>0||(n.resolveWith(a,[x]),x.fn.trigger&&x(a).trigger("ready").off("ready"))}},isFunction:function(e){return"function"===x.type(e)},isArray:Array.isArray||function(e){return"array"===x.type(e)},isWindow:function(e){return null!=e&&e==e.window},isNumeric:function(e){return!isNaN(parseFloat(e))&&isFinite(e)},type:function(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?c[y.call(e)]||"object":typeof e},isPlainObject:function(e){var n;if(!e||"object"!==x.type(e)||e.nodeType||x.isWindow(e))return!1;try{if(e.constructor&&!v.call(e,"constructor")&&!v.call(e.constructor.prototype,"isPrototypeOf"))return!1}catch(r){return!1}if(x.support.ownLast)for(n in e)return v.call(e,n);for(n in e);return n===t||v.call(e,n)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},error:function(e){throw Error(e)},parseHTML:function(e,t,n){if(!e||"string"!=typeof e)return null;"boolean"==typeof t&&(n=t,t=!1),t=t||a;var r=E.exec(e),i=!n&&[];return r?[t.createElement(r[1])]:(r=x.buildFragment([e],t,i),i&&x(i).remove(),x.merge([],r.childNodes))},parseJSON:function(n){return e.JSON&&e.JSON.parse?e.JSON.parse(n):null===n?n:"string"==typeof n&&(n=x.trim(n),n&&k.test(n.replace(D,"@").replace(S,"]").replace(A,"")))?Function("return "+n)():(x.error("Invalid JSON: "+n),t)},parseXML:function(n){var r,i;if(!n||"string"!=typeof n)return null;try{e.DOMParser?(i=new DOMParser,r=i.parseFromString(n,"text/xml")):(r=new ActiveXObject("Microsoft.XMLDOM"),r.async="false",r.loadXML(n))}catch(o){r=t}return r&&r.documentElement&&!r.getElementsByTagName("parsererror").length||x.error("Invalid XML: "+n),r},noop:function(){},globalEval:function(t){t&&x.trim(t)&&(e.execScript||function(t){e.eval.call(e,t)})(t)},camelCase:function(e){return e.replace(L,"ms-").replace(j,H)},nodeName:function(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()},each:function(e,t,n){var r,i=0,o=e.length,a=M(e);if(n){if(a){for(;o>i;i++)if(r=t.apply(e[i],n),r===!1)break}else for(i in e)if(r=t.apply(e[i],n),r===!1)break}else if(a){for(;o>i;i++)if(r=t.call(e[i],i,e[i]),r===!1)break}else for(i in e)if(r=t.call(e[i],i,e[i]),r===!1)break;return e},trim:b&&!b.call("\ufeff\u00a0")?function(e){return null==e?"":b.call(e)}:function(e){return null==e?"":(e+"").replace(T,"")},makeArray:function(e,t){var n=t||[];return null!=e&&(M(Object(e))?x.merge(n,"string"==typeof e?[e]:e):h.call(n,e)),n},inArray:function(e,t,n){var r;if(t){if(m)return m.call(t,e,n);for(r=t.length,n=n?0>n?Math.max(0,r+n):n:0;r>n;n++)if(n in t&&t[n]===e)return n}return-1},merge:function(e,n){var r=n.length,i=e.length,o=0;if("number"==typeof r)for(;r>o;o++)e[i++]=n[o];else while(n[o]!==t)e[i++]=n[o++];return e.length=i,e},grep:function(e,t,n){var r,i=[],o=0,a=e.length;for(n=!!n;a>o;o++)r=!!t(e[o],o),n!==r&&i.push(e[o]);return i},map:function(e,t,n){var r,i=0,o=e.length,a=M(e),s=[];if(a)for(;o>i;i++)r=t(e[i],i,n),null!=r&&(s[s.length]=r);else for(i in e)r=t(e[i],i,n),null!=r&&(s[s.length]=r);return f.apply([],s)},guid:1,proxy:function(e,n){var r,i,o;return"string"==typeof n&&(o=e[n],n=e,e=o),x.isFunction(e)?(r=g.call(arguments,2),i=function(){return e.apply(n||this,r.concat(g.call(arguments)))},i.guid=e.guid=e.guid||x.guid++,i):t},access:function(e,n,r,i,o,a,s){var l=0,u=e.length,c=null==r;if("object"===x.type(r)){o=!0;for(l in r)x.access(e,n,l,r[l],!0,a,s)}else if(i!==t&&(o=!0,x.isFunction(i)||(s=!0),c&&(s?(n.call(e,i),n=null):(c=n,n=function(e,t,n){return c.call(x(e),n)})),n))for(;u>l;l++)n(e[l],r,s?i:i.call(e[l],l,n(e[l],r)));return o?e:c?n.call(e):u?n(e[0],r):a},now:function(){return(new Date).getTime()},swap:function(e,t,n,r){var i,o,a={};for(o in t)a[o]=e.style[o],e.style[o]=t[o];i=n.apply(e,r||[]);for(o in t)e.style[o]=a[o];return i}}),x.ready.promise=function(t){if(!n)if(n=x.Deferred(),"complete"===a.readyState)setTimeout(x.ready);else if(a.addEventListener)a.addEventListener("DOMContentLoaded",_,!1),e.addEventListener("load",_,!1);else{a.attachEvent("onreadystatechange",_),e.attachEvent("onload",_);var r=!1;try{r=null==e.frameElement&&a.documentElement}catch(i){}r&&r.doScroll&&function o(){if(!x.isReady){try{r.doScroll("left")}catch(e){return setTimeout(o,50)}B(),x.ready()}}()}return n.promise(t)},x.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(e,t){c["[object "+t+"]"]=t.toLowerCase()});function M(e){var t=e.length,n=x.type(e);return x.isWindow(e)?!1:1===e.nodeType&&t?!0:"array"===n||"function"!==n&&(0===t||"number"==typeof t&&t>0&&t-1 in e)}r=x(a),function(e,t){var n,r,i,o,a,s,l,u,c,p,d,f,h,g,m,y,v,b="sizzle"+-new Date,N=e.document,w=0,T=0,C=st(),E=st(),k=st(),A=!1,D=function(e,t){return e===t?(A=!0,0):0},S=typeof t,L=1<<31,j={}.hasOwnProperty,H=[],_=H.pop,B=H.push,M=H.push,O=H.slice,F=H.indexOf||function(e){var t=0,n=this.length;for(;n>t;t++)if(this[t]===e)return t;return-1},q="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",P="[\\x20\\t\\r\\n\\f]",$="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",R=$.replace("w","w#"),I="\\["+P+"*("+$+")"+P+"*(?:([*^$|!~]?=)"+P+"*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|("+R+")|)|)"+P+"*\\]",W=":("+$+")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|"+I.replace(3,8)+")*)|.*)\\)|)",z=RegExp("^"+P+"+|((?:^|[^\\\\])(?:\\\\.)*)"+P+"+$","g"),X=RegExp("^"+P+"*,"+P+"*"),U=RegExp("^"+P+"*([>+~]|"+P+")"+P+"*"),V=RegExp(P+"*[+~]"),J=RegExp("="+P+"*([^\\]'\"]*)"+P+"*\\]","g"),Q=RegExp(W),K=RegExp("^"+R+"$"),Y={ID:RegExp("^#("+$+")"),CLASS:RegExp("^\\.("+$+")"),TAG:RegExp("^("+$.replace("w","w*")+")"),ATTR:RegExp("^"+I),PSEUDO:RegExp("^"+W),CHILD:RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+P+"*(even|odd|(([+-]|)(\\d*)n|)"+P+"*(?:([+-]|)"+P+"*(\\d+)|))"+P+"*\\)|)","i"),bool:RegExp("^(?:"+q+")$","i"),needsContext:RegExp("^"+P+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+P+"*((?:-\\d)?\\d*)"+P+"*\\)|)(?=[^-]|$)","i")},G=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,et=/^(?:input|select|textarea|button)$/i,tt=/^h\d$/i,nt=/'|\\/g,rt=RegExp("\\\\([\\da-f]{1,6}"+P+"?|("+P+")|.)","ig"),it=function(e,t,n){var r="0x"+t-65536;return r!==r||n?t:0>r?String.fromCharCode(r+65536):String.fromCharCode(55296|r>>10,56320|1023&r)};try{M.apply(H=O.call(N.childNodes),N.childNodes),H[N.childNodes.length].nodeType}catch(ot){M={apply:H.length?function(e,t){B.apply(e,O.call(t))}:function(e,t){var n=e.length,r=0;while(e[n++]=t[r++]);e.length=n-1}}}function at(e,t,n,i){var o,a,s,l,u,c,f,m,y,x;if((t?t.ownerDocument||t:N)!==d&&p(t),t=t||d,n=n||[],!e||"string"!=typeof e)return n;if(1!==(l=t.nodeType)&&9!==l)return[];if(h&&!i){if(o=Z.exec(e))if(s=o[1]){if(9===l){if(a=t.getElementById(s),!a||!a.parentNode)return n;if(a.id===s)return n.push(a),n}else if(t.ownerDocument&&(a=t.ownerDocument.getElementById(s))&&v(t,a)&&a.id===s)return n.push(a),n}else{if(o[2])return M.apply(n,t.getElementsByTagName(e)),n;if((s=o[3])&&r.getElementsByClassName&&t.getElementsByClassName)return M.apply(n,t.getElementsByClassName(s)),n}if(r.qsa&&(!g||!g.test(e))){if(m=f=b,y=t,x=9===l&&e,1===l&&"object"!==t.nodeName.toLowerCase()){c=mt(e),(f=t.getAttribute("id"))?m=f.replace(nt,"\\$&"):t.setAttribute("id",m),m="[id='"+m+"'] ",u=c.length;while(u--)c[u]=m+yt(c[u]);y=V.test(e)&&t.parentNode||t,x=c.join(",")}if(x)try{return M.apply(n,y.querySelectorAll(x)),n}catch(w){}finally{f||t.removeAttribute("id")}}}return Et(e.replace(z,"$1"),t,n,i)}function st(){var e=[];function t(n,r){return e.push(n+=" ")>o.cacheLength&&delete t[e.shift()],t[n]=r}return t}function lt(e){return e[b]=!0,e}function ut(e){var t=d.createElement("div");try{return!!e(t)}catch(n){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function ct(e,t){var n=e.split("|"),r=e.length;while(r--)o.attrHandle[n[r]]=t}function pt(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&(~t.sourceIndex||L)-(~e.sourceIndex||L);if(r)return r;if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1}function dt(e){return function(t){var n=t.nodeName.toLowerCase();return"input"===n&&t.type===e}}function ft(e){return function(t){var n=t.nodeName.toLowerCase();return("input"===n||"button"===n)&&t.type===e}}function ht(e){return lt(function(t){return t=+t,lt(function(n,r){var i,o=e([],n.length,t),a=o.length;while(a--)n[i=o[a]]&&(n[i]=!(r[i]=n[i]))})})}s=at.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement;return t?"HTML"!==t.nodeName:!1},r=at.support={},p=at.setDocument=function(e){var n=e?e.ownerDocument||e:N,i=n.defaultView;return n!==d&&9===n.nodeType&&n.documentElement?(d=n,f=n.documentElement,h=!s(n),i&&i.attachEvent&&i!==i.top&&i.attachEvent("onbeforeunload",function(){p()}),r.attributes=ut(function(e){return e.className="i",!e.getAttribute("className")}),r.getElementsByTagName=ut(function(e){return e.appendChild(n.createComment("")),!e.getElementsByTagName("*").length}),r.getElementsByClassName=ut(function(e){return e.innerHTML="<div class='a'></div><div class='a i'></div>",e.firstChild.className="i",2===e.getElementsByClassName("i").length}),r.getById=ut(function(e){return f.appendChild(e).id=b,!n.getElementsByName||!n.getElementsByName(b).length}),r.getById?(o.find.ID=function(e,t){if(typeof t.getElementById!==S&&h){var n=t.getElementById(e);return n&&n.parentNode?[n]:[]}},o.filter.ID=function(e){var t=e.replace(rt,it);return function(e){return e.getAttribute("id")===t}}):(delete o.find.ID,o.filter.ID=function(e){var t=e.replace(rt,it);return function(e){var n=typeof e.getAttributeNode!==S&&e.getAttributeNode("id");return n&&n.value===t}}),o.find.TAG=r.getElementsByTagName?function(e,n){return typeof n.getElementsByTagName!==S?n.getElementsByTagName(e):t}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){while(n=o[i++])1===n.nodeType&&r.push(n);return r}return o},o.find.CLASS=r.getElementsByClassName&&function(e,n){return typeof n.getElementsByClassName!==S&&h?n.getElementsByClassName(e):t},m=[],g=[],(r.qsa=G.test(n.querySelectorAll))&&(ut(function(e){e.innerHTML="<select><option selected=''></option></select>",e.querySelectorAll("[selected]").length||g.push("\\["+P+"*(?:value|"+q+")"),e.querySelectorAll(":checked").length||g.push(":checked")}),ut(function(e){var t=n.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("t",""),e.querySelectorAll("[t^='']").length&&g.push("[*^$]="+P+"*(?:''|\"\")"),e.querySelectorAll(":enabled").length||g.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),g.push(",.*:")})),(r.matchesSelector=G.test(y=f.webkitMatchesSelector||f.mozMatchesSelector||f.oMatchesSelector||f.msMatchesSelector))&&ut(function(e){r.disconnectedMatch=y.call(e,"div"),y.call(e,"[s!='']:x"),m.push("!=",W)}),g=g.length&&RegExp(g.join("|")),m=m.length&&RegExp(m.join("|")),v=G.test(f.contains)||f.compareDocumentPosition?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;return!1},D=f.compareDocumentPosition?function(e,t){if(e===t)return A=!0,0;var i=t.compareDocumentPosition&&e.compareDocumentPosition&&e.compareDocumentPosition(t);return i?1&i||!r.sortDetached&&t.compareDocumentPosition(e)===i?e===n||v(N,e)?-1:t===n||v(N,t)?1:c?F.call(c,e)-F.call(c,t):0:4&i?-1:1:e.compareDocumentPosition?-1:1}:function(e,t){var r,i=0,o=e.parentNode,a=t.parentNode,s=[e],l=[t];if(e===t)return A=!0,0;if(!o||!a)return e===n?-1:t===n?1:o?-1:a?1:c?F.call(c,e)-F.call(c,t):0;if(o===a)return pt(e,t);r=e;while(r=r.parentNode)s.unshift(r);r=t;while(r=r.parentNode)l.unshift(r);while(s[i]===l[i])i++;return i?pt(s[i],l[i]):s[i]===N?-1:l[i]===N?1:0},n):d},at.matches=function(e,t){return at(e,null,null,t)},at.matchesSelector=function(e,t){if((e.ownerDocument||e)!==d&&p(e),t=t.replace(J,"='$1']"),!(!r.matchesSelector||!h||m&&m.test(t)||g&&g.test(t)))try{var n=y.call(e,t);if(n||r.disconnectedMatch||e.document&&11!==e.document.nodeType)return n}catch(i){}return at(t,d,null,[e]).length>0},at.contains=function(e,t){return(e.ownerDocument||e)!==d&&p(e),v(e,t)},at.attr=function(e,n){(e.ownerDocument||e)!==d&&p(e);var i=o.attrHandle[n.toLowerCase()],a=i&&j.call(o.attrHandle,n.toLowerCase())?i(e,n,!h):t;return a===t?r.attributes||!h?e.getAttribute(n):(a=e.getAttributeNode(n))&&a.specified?a.value:null:a},at.error=function(e){throw Error("Syntax error, unrecognized expression: "+e)},at.uniqueSort=function(e){var t,n=[],i=0,o=0;if(A=!r.detectDuplicates,c=!r.sortStable&&e.slice(0),e.sort(D),A){while(t=e[o++])t===e[o]&&(i=n.push(o));while(i--)e.splice(n[i],1)}return e},a=at.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(1===i||9===i||11===i){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=a(e)}else if(3===i||4===i)return e.nodeValue}else for(;t=e[r];r++)n+=a(t);return n},o=at.selectors={cacheLength:50,createPseudo:lt,match:Y,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(rt,it),e[3]=(e[4]||e[5]||"").replace(rt,it),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||at.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&at.error(e[0]),e},PSEUDO:function(e){var n,r=!e[5]&&e[2];return Y.CHILD.test(e[0])?null:(e[3]&&e[4]!==t?e[2]=e[4]:r&&Q.test(r)&&(n=mt(r,!0))&&(n=r.indexOf(")",r.length-n)-r.length)&&(e[0]=e[0].slice(0,n),e[2]=r.slice(0,n)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(rt,it).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=C[e+" "];return t||(t=RegExp("(^|"+P+")"+e+"("+P+"|$)"))&&C(e,function(e){return t.test("string"==typeof e.className&&e.className||typeof e.getAttribute!==S&&e.getAttribute("class")||"")})},ATTR:function(e,t,n){return function(r){var i=at.attr(r,e);return null==i?"!="===t:t?(i+="","="===t?i===n:"!="===t?i!==n:"^="===t?n&&0===i.indexOf(n):"*="===t?n&&i.indexOf(n)>-1:"$="===t?n&&i.slice(-n.length)===n:"~="===t?(" "+i+" ").indexOf(n)>-1:"|="===t?i===n||i.slice(0,n.length+1)===n+"-":!1):!0}},CHILD:function(e,t,n,r,i){var o="nth"!==e.slice(0,3),a="last"!==e.slice(-4),s="of-type"===t;return 1===r&&0===i?function(e){return!!e.parentNode}:function(t,n,l){var u,c,p,d,f,h,g=o!==a?"nextSibling":"previousSibling",m=t.parentNode,y=s&&t.nodeName.toLowerCase(),v=!l&&!s;if(m){if(o){while(g){p=t;while(p=p[g])if(s?p.nodeName.toLowerCase()===y:1===p.nodeType)return!1;h=g="only"===e&&!h&&"nextSibling"}return!0}if(h=[a?m.firstChild:m.lastChild],a&&v){c=m[b]||(m[b]={}),u=c[e]||[],f=u[0]===w&&u[1],d=u[0]===w&&u[2],p=f&&m.childNodes[f];while(p=++f&&p&&p[g]||(d=f=0)||h.pop())if(1===p.nodeType&&++d&&p===t){c[e]=[w,f,d];break}}else if(v&&(u=(t[b]||(t[b]={}))[e])&&u[0]===w)d=u[1];else while(p=++f&&p&&p[g]||(d=f=0)||h.pop())if((s?p.nodeName.toLowerCase()===y:1===p.nodeType)&&++d&&(v&&((p[b]||(p[b]={}))[e]=[w,d]),p===t))break;return d-=i,d===r||0===d%r&&d/r>=0}}},PSEUDO:function(e,t){var n,r=o.pseudos[e]||o.setFilters[e.toLowerCase()]||at.error("unsupported pseudo: "+e);return r[b]?r(t):r.length>1?(n=[e,e,"",t],o.setFilters.hasOwnProperty(e.toLowerCase())?lt(function(e,n){var i,o=r(e,t),a=o.length;while(a--)i=F.call(e,o[a]),e[i]=!(n[i]=o[a])}):function(e){return r(e,0,n)}):r}},pseudos:{not:lt(function(e){var t=[],n=[],r=l(e.replace(z,"$1"));return r[b]?lt(function(e,t,n,i){var o,a=r(e,null,i,[]),s=e.length;while(s--)(o=a[s])&&(e[s]=!(t[s]=o))}):function(e,i,o){return t[0]=e,r(t,null,o,n),!n.pop()}}),has:lt(function(e){return function(t){return at(e,t).length>0}}),contains:lt(function(e){return function(t){return(t.textContent||t.innerText||a(t)).indexOf(e)>-1}}),lang:lt(function(e){return K.test(e||"")||at.error("unsupported lang: "+e),e=e.replace(rt,it).toLowerCase(),function(t){var n;do if(n=h?t.lang:t.getAttribute("xml:lang")||t.getAttribute("lang"))return n=n.toLowerCase(),n===e||0===n.indexOf(e+"-");while((t=t.parentNode)&&1===t.nodeType);return!1}}),target:function(t){var n=e.location&&e.location.hash;return n&&n.slice(1)===t.id},root:function(e){return e===f},focus:function(e){return e===d.activeElement&&(!d.hasFocus||d.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:function(e){return e.disabled===!1},disabled:function(e){return e.disabled===!0},checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,e.selected===!0},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeName>"@"||3===e.nodeType||4===e.nodeType)return!1;return!0},parent:function(e){return!o.pseudos.empty(e)},header:function(e){return tt.test(e.nodeName)},input:function(e){return et.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||t.toLowerCase()===e.type)},first:ht(function(){return[0]}),last:ht(function(e,t){return[t-1]}),eq:ht(function(e,t,n){return[0>n?n+t:n]}),even:ht(function(e,t){var n=0;for(;t>n;n+=2)e.push(n);return e}),odd:ht(function(e,t){var n=1;for(;t>n;n+=2)e.push(n);return e}),lt:ht(function(e,t,n){var r=0>n?n+t:n;for(;--r>=0;)e.push(r);return e}),gt:ht(function(e,t,n){var r=0>n?n+t:n;for(;t>++r;)e.push(r);return e})}},o.pseudos.nth=o.pseudos.eq;for(n in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})o.pseudos[n]=dt(n);for(n in{submit:!0,reset:!0})o.pseudos[n]=ft(n);function gt(){}gt.prototype=o.filters=o.pseudos,o.setFilters=new gt;function mt(e,t){var n,r,i,a,s,l,u,c=E[e+" "];if(c)return t?0:c.slice(0);s=e,l=[],u=o.preFilter;while(s){(!n||(r=X.exec(s)))&&(r&&(s=s.slice(r[0].length)||s),l.push(i=[])),n=!1,(r=U.exec(s))&&(n=r.shift(),i.push({value:n,type:r[0].replace(z," ")}),s=s.slice(n.length));for(a in o.filter)!(r=Y[a].exec(s))||u[a]&&!(r=u[a](r))||(n=r.shift(),i.push({value:n,type:a,matches:r}),s=s.slice(n.length));if(!n)break}return t?s.length:s?at.error(e):E(e,l).slice(0)}function yt(e){var t=0,n=e.length,r="";for(;n>t;t++)r+=e[t].value;return r}function vt(e,t,n){var r=t.dir,o=n&&"parentNode"===r,a=T++;return t.first?function(t,n,i){while(t=t[r])if(1===t.nodeType||o)return e(t,n,i)}:function(t,n,s){var l,u,c,p=w+" "+a;if(s){while(t=t[r])if((1===t.nodeType||o)&&e(t,n,s))return!0}else while(t=t[r])if(1===t.nodeType||o)if(c=t[b]||(t[b]={}),(u=c[r])&&u[0]===p){if((l=u[1])===!0||l===i)return l===!0}else if(u=c[r]=[p],u[1]=e(t,n,s)||i,u[1]===!0)return!0}}function bt(e){return e.length>1?function(t,n,r){var i=e.length;while(i--)if(!e[i](t,n,r))return!1;return!0}:e[0]}function xt(e,t,n,r,i){var o,a=[],s=0,l=e.length,u=null!=t;for(;l>s;s++)(o=e[s])&&(!n||n(o,r,i))&&(a.push(o),u&&t.push(s));return a}function Nt(e,t,n,r,i,o){return r&&!r[b]&&(r=Nt(r)),i&&!i[b]&&(i=Nt(i,o)),lt(function(o,a,s,l){var u,c,p,d=[],f=[],h=a.length,g=o||Ct(t||"*",s.nodeType?[s]:s,[]),m=!e||!o&&t?g:xt(g,d,e,s,l),y=n?i||(o?e:h||r)?[]:a:m;if(n&&n(m,y,s,l),r){u=xt(y,f),r(u,[],s,l),c=u.length;while(c--)(p=u[c])&&(y[f[c]]=!(m[f[c]]=p))}if(o){if(i||e){if(i){u=[],c=y.length;while(c--)(p=y[c])&&u.push(m[c]=p);i(null,y=[],u,l)}c=y.length;while(c--)(p=y[c])&&(u=i?F.call(o,p):d[c])>-1&&(o[u]=!(a[u]=p))}}else y=xt(y===a?y.splice(h,y.length):y),i?i(null,a,y,l):M.apply(a,y)})}function wt(e){var t,n,r,i=e.length,a=o.relative[e[0].type],s=a||o.relative[" "],l=a?1:0,c=vt(function(e){return e===t},s,!0),p=vt(function(e){return F.call(t,e)>-1},s,!0),d=[function(e,n,r){return!a&&(r||n!==u)||((t=n).nodeType?c(e,n,r):p(e,n,r))}];for(;i>l;l++)if(n=o.relative[e[l].type])d=[vt(bt(d),n)];else{if(n=o.filter[e[l].type].apply(null,e[l].matches),n[b]){for(r=++l;i>r;r++)if(o.relative[e[r].type])break;return Nt(l>1&&bt(d),l>1&&yt(e.slice(0,l-1).concat({value:" "===e[l-2].type?"*":""})).replace(z,"$1"),n,r>l&&wt(e.slice(l,r)),i>r&&wt(e=e.slice(r)),i>r&&yt(e))}d.push(n)}return bt(d)}function Tt(e,t){var n=0,r=t.length>0,a=e.length>0,s=function(s,l,c,p,f){var h,g,m,y=[],v=0,b="0",x=s&&[],N=null!=f,T=u,C=s||a&&o.find.TAG("*",f&&l.parentNode||l),E=w+=null==T?1:Math.random()||.1;for(N&&(u=l!==d&&l,i=n);null!=(h=C[b]);b++){if(a&&h){g=0;while(m=e[g++])if(m(h,l,c)){p.push(h);break}N&&(w=E,i=++n)}r&&((h=!m&&h)&&v--,s&&x.push(h))}if(v+=b,r&&b!==v){g=0;while(m=t[g++])m(x,y,l,c);if(s){if(v>0)while(b--)x[b]||y[b]||(y[b]=_.call(p));y=xt(y)}M.apply(p,y),N&&!s&&y.length>0&&v+t.length>1&&at.uniqueSort(p)}return N&&(w=E,u=T),x};return r?lt(s):s}l=at.compile=function(e,t){var n,r=[],i=[],o=k[e+" "];if(!o){t||(t=mt(e)),n=t.length;while(n--)o=wt(t[n]),o[b]?r.push(o):i.push(o);o=k(e,Tt(i,r))}return o};function Ct(e,t,n){var r=0,i=t.length;for(;i>r;r++)at(e,t[r],n);return n}function Et(e,t,n,i){var a,s,u,c,p,d=mt(e);if(!i&&1===d.length){if(s=d[0]=d[0].slice(0),s.length>2&&"ID"===(u=s[0]).type&&r.getById&&9===t.nodeType&&h&&o.relative[s[1].type]){if(t=(o.find.ID(u.matches[0].replace(rt,it),t)||[])[0],!t)return n;e=e.slice(s.shift().value.length)}a=Y.needsContext.test(e)?0:s.length;while(a--){if(u=s[a],o.relative[c=u.type])break;if((p=o.find[c])&&(i=p(u.matches[0].replace(rt,it),V.test(s[0].type)&&t.parentNode||t))){if(s.splice(a,1),e=i.length&&yt(s),!e)return M.apply(n,i),n;break}}}return l(e,d)(i,t,!h,n,V.test(e)),n}r.sortStable=b.split("").sort(D).join("")===b,r.detectDuplicates=A,p(),r.sortDetached=ut(function(e){return 1&e.compareDocumentPosition(d.createElement("div"))}),ut(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||ct("type|href|height|width",function(e,n,r){return r?t:e.getAttribute(n,"type"===n.toLowerCase()?1:2)}),r.attributes&&ut(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||ct("value",function(e,n,r){return r||"input"!==e.nodeName.toLowerCase()?t:e.defaultValue}),ut(function(e){return null==e.getAttribute("disabled")})||ct(q,function(e,n,r){var i;return r?t:(i=e.getAttributeNode(n))&&i.specified?i.value:e[n]===!0?n.toLowerCase():null}),x.find=at,x.expr=at.selectors,x.expr[":"]=x.expr.pseudos,x.unique=at.uniqueSort,x.text=at.getText,x.isXMLDoc=at.isXML,x.contains=at.contains}(e);var O={};function F(e){var t=O[e]={};return x.each(e.match(w)||[],function(e,n){t[n]=!0}),t}x.Callbacks=function(e){e="string"==typeof e?O[e]||F(e):x.extend({},e);var n,r,i,o,a,s,l=[],u=!e.once&&[],c=function(t){for(r=e.memory&&t,i=!0,a=s||0,s=0,o=l.length,n=!0;l&&o>a;a++)if(l[a].apply(t[0],t[1])===!1&&e.stopOnFalse){r=!1;break}n=!1,l&&(u?u.length&&c(u.shift()):r?l=[]:p.disable())},p={add:function(){if(l){var t=l.length;(function i(t){x.each(t,function(t,n){var r=x.type(n);"function"===r?e.unique&&p.has(n)||l.push(n):n&&n.length&&"string"!==r&&i(n)})})(arguments),n?o=l.length:r&&(s=t,c(r))}return this},remove:function(){return l&&x.each(arguments,function(e,t){var r;while((r=x.inArray(t,l,r))>-1)l.splice(r,1),n&&(o>=r&&o--,a>=r&&a--)}),this},has:function(e){return e?x.inArray(e,l)>-1:!(!l||!l.length)},empty:function(){return l=[],o=0,this},disable:function(){return l=u=r=t,this},disabled:function(){return!l},lock:function(){return u=t,r||p.disable(),this},locked:function(){return!u},fireWith:function(e,t){return!l||i&&!u||(t=t||[],t=[e,t.slice?t.slice():t],n?u.push(t):c(t)),this},fire:function(){return p.fireWith(this,arguments),this},fired:function(){return!!i}};return p},x.extend({Deferred:function(e){var t=[["resolve","done",x.Callbacks("once memory"),"resolved"],["reject","fail",x.Callbacks("once memory"),"rejected"],["notify","progress",x.Callbacks("memory")]],n="pending",r={state:function(){return n},always:function(){return i.done(arguments).fail(arguments),this},then:function(){var e=arguments;return x.Deferred(function(n){x.each(t,function(t,o){var a=o[0],s=x.isFunction(e[t])&&e[t];i[o[1]](function(){var e=s&&s.apply(this,arguments);e&&x.isFunction(e.promise)?e.promise().done(n.resolve).fail(n.reject).progress(n.notify):n[a+"With"](this===r?n.promise():this,s?[e]:arguments)})}),e=null}).promise()},promise:function(e){return null!=e?x.extend(e,r):r}},i={};return r.pipe=r.then,x.each(t,function(e,o){var a=o[2],s=o[3];r[o[1]]=a.add,s&&a.add(function(){n=s},t[1^e][2].disable,t[2][2].lock),i[o[0]]=function(){return i[o[0]+"With"](this===i?r:this,arguments),this},i[o[0]+"With"]=a.fireWith}),r.promise(i),e&&e.call(i,i),i},when:function(e){var t=0,n=g.call(arguments),r=n.length,i=1!==r||e&&x.isFunction(e.promise)?r:0,o=1===i?e:x.Deferred(),a=function(e,t,n){return function(r){t[e]=this,n[e]=arguments.length>1?g.call(arguments):r,n===s?o.notifyWith(t,n):--i||o.resolveWith(t,n)}},s,l,u;if(r>1)for(s=Array(r),l=Array(r),u=Array(r);r>t;t++)n[t]&&x.isFunction(n[t].promise)?n[t].promise().done(a(t,u,n)).fail(o.reject).progress(a(t,l,s)):--i;return i||o.resolveWith(u,n),o.promise()}}),x.support=function(t){var n,r,o,s,l,u,c,p,d,f=a.createElement("div");if(f.setAttribute("className","t"),f.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",n=f.getElementsByTagName("*")||[],r=f.getElementsByTagName("a")[0],!r||!r.style||!n.length)return t;s=a.createElement("select"),u=s.appendChild(a.createElement("option")),o=f.getElementsByTagName("input")[0],r.style.cssText="top:1px;float:left;opacity:.5",t.getSetAttribute="t"!==f.className,t.leadingWhitespace=3===f.firstChild.nodeType,t.tbody=!f.getElementsByTagName("tbody").length,t.htmlSerialize=!!f.getElementsByTagName("link").length,t.style=/top/.test(r.getAttribute("style")),t.hrefNormalized="/a"===r.getAttribute("href"),t.opacity=/^0.5/.test(r.style.opacity),t.cssFloat=!!r.style.cssFloat,t.checkOn=!!o.value,t.optSelected=u.selected,t.enctype=!!a.createElement("form").enctype,t.html5Clone="<:nav></:nav>"!==a.createElement("nav").cloneNode(!0).outerHTML,t.inlineBlockNeedsLayout=!1,t.shrinkWrapBlocks=!1,t.pixelPosition=!1,t.deleteExpando=!0,t.noCloneEvent=!0,t.reliableMarginRight=!0,t.boxSizingReliable=!0,o.checked=!0,t.noCloneChecked=o.cloneNode(!0).checked,s.disabled=!0,t.optDisabled=!u.disabled;try{delete f.test}catch(h){t.deleteExpando=!1}o=a.createElement("input"),o.setAttribute("value",""),t.input=""===o.getAttribute("value"),o.value="t",o.setAttribute("type","radio"),t.radioValue="t"===o.value,o.setAttribute("checked","t"),o.setAttribute("name","t"),l=a.createDocumentFragment(),l.appendChild(o),t.appendChecked=o.checked,t.checkClone=l.cloneNode(!0).cloneNode(!0).lastChild.checked,f.attachEvent&&(f.attachEvent("onclick",function(){t.noCloneEvent=!1}),f.cloneNode(!0).click());for(d in{submit:!0,change:!0,focusin:!0})f.setAttribute(c="on"+d,"t"),t[d+"Bubbles"]=c in e||f.attributes[c].expando===!1;f.style.backgroundClip="content-box",f.cloneNode(!0).style.backgroundClip="",t.clearCloneStyle="content-box"===f.style.backgroundClip;for(d in x(t))break;return t.ownLast="0"!==d,x(function(){var n,r,o,s="padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;",l=a.getElementsByTagName("body")[0];l&&(n=a.createElement("div"),n.style.cssText="border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px",l.appendChild(n).appendChild(f),f.innerHTML="<table><tr><td></td><td>t</td></tr></table>",o=f.getElementsByTagName("td"),o[0].style.cssText="padding:0;margin:0;border:0;display:none",p=0===o[0].offsetHeight,o[0].style.display="",o[1].style.display="none",t.reliableHiddenOffsets=p&&0===o[0].offsetHeight,f.innerHTML="",f.style.cssText="box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;",x.swap(l,null!=l.style.zoom?{zoom:1}:{},function(){t.boxSizing=4===f.offsetWidth}),e.getComputedStyle&&(t.pixelPosition="1%"!==(e.getComputedStyle(f,null)||{}).top,t.boxSizingReliable="4px"===(e.getComputedStyle(f,null)||{width:"4px"}).width,r=f.appendChild(a.createElement("div")),r.style.cssText=f.style.cssText=s,r.style.marginRight=r.style.width="0",f.style.width="1px",t.reliableMarginRight=!parseFloat((e.getComputedStyle(r,null)||{}).marginRight)),typeof f.style.zoom!==i&&(f.innerHTML="",f.style.cssText=s+"width:1px;padding:1px;display:inline;zoom:1",t.inlineBlockNeedsLayout=3===f.offsetWidth,f.style.display="block",f.innerHTML="<div></div>",f.firstChild.style.width="5px",t.shrinkWrapBlocks=3!==f.offsetWidth,t.inlineBlockNeedsLayout&&(l.style.zoom=1)),l.removeChild(n),n=f=o=r=null)
}),n=s=l=u=r=o=null,t}({});var q=/(?:\{[\s\S]*\}|\[[\s\S]*\])$/,P=/([A-Z])/g;function $(e,n,r,i){if(x.acceptData(e)){var o,a,s=x.expando,l=e.nodeType,u=l?x.cache:e,c=l?e[s]:e[s]&&s;if(c&&u[c]&&(i||u[c].data)||r!==t||"string"!=typeof n)return c||(c=l?e[s]=p.pop()||x.guid++:s),u[c]||(u[c]=l?{}:{toJSON:x.noop}),("object"==typeof n||"function"==typeof n)&&(i?u[c]=x.extend(u[c],n):u[c].data=x.extend(u[c].data,n)),a=u[c],i||(a.data||(a.data={}),a=a.data),r!==t&&(a[x.camelCase(n)]=r),"string"==typeof n?(o=a[n],null==o&&(o=a[x.camelCase(n)])):o=a,o}}function R(e,t,n){if(x.acceptData(e)){var r,i,o=e.nodeType,a=o?x.cache:e,s=o?e[x.expando]:x.expando;if(a[s]){if(t&&(r=n?a[s]:a[s].data)){x.isArray(t)?t=t.concat(x.map(t,x.camelCase)):t in r?t=[t]:(t=x.camelCase(t),t=t in r?[t]:t.split(" ")),i=t.length;while(i--)delete r[t[i]];if(n?!W(r):!x.isEmptyObject(r))return}(n||(delete a[s].data,W(a[s])))&&(o?x.cleanData([e],!0):x.support.deleteExpando||a!=a.window?delete a[s]:a[s]=null)}}}x.extend({cache:{},noData:{applet:!0,embed:!0,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},hasData:function(e){return e=e.nodeType?x.cache[e[x.expando]]:e[x.expando],!!e&&!W(e)},data:function(e,t,n){return $(e,t,n)},removeData:function(e,t){return R(e,t)},_data:function(e,t,n){return $(e,t,n,!0)},_removeData:function(e,t){return R(e,t,!0)},acceptData:function(e){if(e.nodeType&&1!==e.nodeType&&9!==e.nodeType)return!1;var t=e.nodeName&&x.noData[e.nodeName.toLowerCase()];return!t||t!==!0&&e.getAttribute("classid")===t}}),x.fn.extend({data:function(e,n){var r,i,o=null,a=0,s=this[0];if(e===t){if(this.length&&(o=x.data(s),1===s.nodeType&&!x._data(s,"parsedAttrs"))){for(r=s.attributes;r.length>a;a++)i=r[a].name,0===i.indexOf("data-")&&(i=x.camelCase(i.slice(5)),I(s,i,o[i]));x._data(s,"parsedAttrs",!0)}return o}return"object"==typeof e?this.each(function(){x.data(this,e)}):arguments.length>1?this.each(function(){x.data(this,e,n)}):s?I(s,e,x.data(s,e)):null},removeData:function(e){return this.each(function(){x.removeData(this,e)})}});function I(e,n,r){if(r===t&&1===e.nodeType){var i="data-"+n.replace(P,"-$1").toLowerCase();if(r=e.getAttribute(i),"string"==typeof r){try{r="true"===r?!0:"false"===r?!1:"null"===r?null:+r+""===r?+r:q.test(r)?x.parseJSON(r):r}catch(o){}x.data(e,n,r)}else r=t}return r}function W(e){var t;for(t in e)if(("data"!==t||!x.isEmptyObject(e[t]))&&"toJSON"!==t)return!1;return!0}x.extend({queue:function(e,n,r){var i;return e?(n=(n||"fx")+"queue",i=x._data(e,n),r&&(!i||x.isArray(r)?i=x._data(e,n,x.makeArray(r)):i.push(r)),i||[]):t},dequeue:function(e,t){t=t||"fx";var n=x.queue(e,t),r=n.length,i=n.shift(),o=x._queueHooks(e,t),a=function(){x.dequeue(e,t)};"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,a,o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return x._data(e,n)||x._data(e,n,{empty:x.Callbacks("once memory").add(function(){x._removeData(e,t+"queue"),x._removeData(e,n)})})}}),x.fn.extend({queue:function(e,n){var r=2;return"string"!=typeof e&&(n=e,e="fx",r--),r>arguments.length?x.queue(this[0],e):n===t?this:this.each(function(){var t=x.queue(this,e,n);x._queueHooks(this,e),"fx"===e&&"inprogress"!==t[0]&&x.dequeue(this,e)})},dequeue:function(e){return this.each(function(){x.dequeue(this,e)})},delay:function(e,t){return e=x.fx?x.fx.speeds[e]||e:e,t=t||"fx",this.queue(t,function(t,n){var r=setTimeout(t,e);n.stop=function(){clearTimeout(r)}})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,n){var r,i=1,o=x.Deferred(),a=this,s=this.length,l=function(){--i||o.resolveWith(a,[a])};"string"!=typeof e&&(n=e,e=t),e=e||"fx";while(s--)r=x._data(a[s],e+"queueHooks"),r&&r.empty&&(i++,r.empty.add(l));return l(),o.promise(n)}});var z,X,U=/[\t\r\n\f]/g,V=/\r/g,J=/^(?:input|select|textarea|button|object)$/i,Q=/^(?:a|area)$/i,K=/^(?:checked|selected)$/i,Y=x.support.getSetAttribute,G=x.support.input;x.fn.extend({attr:function(e,t){return x.access(this,x.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each(function(){x.removeAttr(this,e)})},prop:function(e,t){return x.access(this,x.prop,e,t,arguments.length>1)},removeProp:function(e){return e=x.propFix[e]||e,this.each(function(){try{this[e]=t,delete this[e]}catch(n){}})},addClass:function(e){var t,n,r,i,o,a=0,s=this.length,l="string"==typeof e&&e;if(x.isFunction(e))return this.each(function(t){x(this).addClass(e.call(this,t,this.className))});if(l)for(t=(e||"").match(w)||[];s>a;a++)if(n=this[a],r=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(U," "):" ")){o=0;while(i=t[o++])0>r.indexOf(" "+i+" ")&&(r+=i+" ");n.className=x.trim(r)}return this},removeClass:function(e){var t,n,r,i,o,a=0,s=this.length,l=0===arguments.length||"string"==typeof e&&e;if(x.isFunction(e))return this.each(function(t){x(this).removeClass(e.call(this,t,this.className))});if(l)for(t=(e||"").match(w)||[];s>a;a++)if(n=this[a],r=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(U," "):"")){o=0;while(i=t[o++])while(r.indexOf(" "+i+" ")>=0)r=r.replace(" "+i+" "," ");n.className=e?x.trim(r):""}return this},toggleClass:function(e,t){var n=typeof e;return"boolean"==typeof t&&"string"===n?t?this.addClass(e):this.removeClass(e):x.isFunction(e)?this.each(function(n){x(this).toggleClass(e.call(this,n,this.className,t),t)}):this.each(function(){if("string"===n){var t,r=0,o=x(this),a=e.match(w)||[];while(t=a[r++])o.hasClass(t)?o.removeClass(t):o.addClass(t)}else(n===i||"boolean"===n)&&(this.className&&x._data(this,"__className__",this.className),this.className=this.className||e===!1?"":x._data(this,"__className__")||"")})},hasClass:function(e){var t=" "+e+" ",n=0,r=this.length;for(;r>n;n++)if(1===this[n].nodeType&&(" "+this[n].className+" ").replace(U," ").indexOf(t)>=0)return!0;return!1},val:function(e){var n,r,i,o=this[0];{if(arguments.length)return i=x.isFunction(e),this.each(function(n){var o;1===this.nodeType&&(o=i?e.call(this,n,x(this).val()):e,null==o?o="":"number"==typeof o?o+="":x.isArray(o)&&(o=x.map(o,function(e){return null==e?"":e+""})),r=x.valHooks[this.type]||x.valHooks[this.nodeName.toLowerCase()],r&&"set"in r&&r.set(this,o,"value")!==t||(this.value=o))});if(o)return r=x.valHooks[o.type]||x.valHooks[o.nodeName.toLowerCase()],r&&"get"in r&&(n=r.get(o,"value"))!==t?n:(n=o.value,"string"==typeof n?n.replace(V,""):null==n?"":n)}}}),x.extend({valHooks:{option:{get:function(e){var t=x.find.attr(e,"value");return null!=t?t:e.text}},select:{get:function(e){var t,n,r=e.options,i=e.selectedIndex,o="select-one"===e.type||0>i,a=o?null:[],s=o?i+1:r.length,l=0>i?s:o?i:0;for(;s>l;l++)if(n=r[l],!(!n.selected&&l!==i||(x.support.optDisabled?n.disabled:null!==n.getAttribute("disabled"))||n.parentNode.disabled&&x.nodeName(n.parentNode,"optgroup"))){if(t=x(n).val(),o)return t;a.push(t)}return a},set:function(e,t){var n,r,i=e.options,o=x.makeArray(t),a=i.length;while(a--)r=i[a],(r.selected=x.inArray(x(r).val(),o)>=0)&&(n=!0);return n||(e.selectedIndex=-1),o}}},attr:function(e,n,r){var o,a,s=e.nodeType;if(e&&3!==s&&8!==s&&2!==s)return typeof e.getAttribute===i?x.prop(e,n,r):(1===s&&x.isXMLDoc(e)||(n=n.toLowerCase(),o=x.attrHooks[n]||(x.expr.match.bool.test(n)?X:z)),r===t?o&&"get"in o&&null!==(a=o.get(e,n))?a:(a=x.find.attr(e,n),null==a?t:a):null!==r?o&&"set"in o&&(a=o.set(e,r,n))!==t?a:(e.setAttribute(n,r+""),r):(x.removeAttr(e,n),t))},removeAttr:function(e,t){var n,r,i=0,o=t&&t.match(w);if(o&&1===e.nodeType)while(n=o[i++])r=x.propFix[n]||n,x.expr.match.bool.test(n)?G&&Y||!K.test(n)?e[r]=!1:e[x.camelCase("default-"+n)]=e[r]=!1:x.attr(e,n,""),e.removeAttribute(Y?n:r)},attrHooks:{type:{set:function(e,t){if(!x.support.radioValue&&"radio"===t&&x.nodeName(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},propFix:{"for":"htmlFor","class":"className"},prop:function(e,n,r){var i,o,a,s=e.nodeType;if(e&&3!==s&&8!==s&&2!==s)return a=1!==s||!x.isXMLDoc(e),a&&(n=x.propFix[n]||n,o=x.propHooks[n]),r!==t?o&&"set"in o&&(i=o.set(e,r,n))!==t?i:e[n]=r:o&&"get"in o&&null!==(i=o.get(e,n))?i:e[n]},propHooks:{tabIndex:{get:function(e){var t=x.find.attr(e,"tabindex");return t?parseInt(t,10):J.test(e.nodeName)||Q.test(e.nodeName)&&e.href?0:-1}}}}),X={set:function(e,t,n){return t===!1?x.removeAttr(e,n):G&&Y||!K.test(n)?e.setAttribute(!Y&&x.propFix[n]||n,n):e[x.camelCase("default-"+n)]=e[n]=!0,n}},x.each(x.expr.match.bool.source.match(/\w+/g),function(e,n){var r=x.expr.attrHandle[n]||x.find.attr;x.expr.attrHandle[n]=G&&Y||!K.test(n)?function(e,n,i){var o=x.expr.attrHandle[n],a=i?t:(x.expr.attrHandle[n]=t)!=r(e,n,i)?n.toLowerCase():null;return x.expr.attrHandle[n]=o,a}:function(e,n,r){return r?t:e[x.camelCase("default-"+n)]?n.toLowerCase():null}}),G&&Y||(x.attrHooks.value={set:function(e,n,r){return x.nodeName(e,"input")?(e.defaultValue=n,t):z&&z.set(e,n,r)}}),Y||(z={set:function(e,n,r){var i=e.getAttributeNode(r);return i||e.setAttributeNode(i=e.ownerDocument.createAttribute(r)),i.value=n+="","value"===r||n===e.getAttribute(r)?n:t}},x.expr.attrHandle.id=x.expr.attrHandle.name=x.expr.attrHandle.coords=function(e,n,r){var i;return r?t:(i=e.getAttributeNode(n))&&""!==i.value?i.value:null},x.valHooks.button={get:function(e,n){var r=e.getAttributeNode(n);return r&&r.specified?r.value:t},set:z.set},x.attrHooks.contenteditable={set:function(e,t,n){z.set(e,""===t?!1:t,n)}},x.each(["width","height"],function(e,n){x.attrHooks[n]={set:function(e,r){return""===r?(e.setAttribute(n,"auto"),r):t}}})),x.support.hrefNormalized||x.each(["href","src"],function(e,t){x.propHooks[t]={get:function(e){return e.getAttribute(t,4)}}}),x.support.style||(x.attrHooks.style={get:function(e){return e.style.cssText||t},set:function(e,t){return e.style.cssText=t+""}}),x.support.optSelected||(x.propHooks.selected={get:function(e){var t=e.parentNode;return t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex),null}}),x.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){x.propFix[this.toLowerCase()]=this}),x.support.enctype||(x.propFix.enctype="encoding"),x.each(["radio","checkbox"],function(){x.valHooks[this]={set:function(e,n){return x.isArray(n)?e.checked=x.inArray(x(e).val(),n)>=0:t}},x.support.checkOn||(x.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})});var Z=/^(?:input|select|textarea)$/i,et=/^key/,tt=/^(?:mouse|contextmenu)|click/,nt=/^(?:focusinfocus|focusoutblur)$/,rt=/^([^.]*)(?:\.(.+)|)$/;function it(){return!0}function ot(){return!1}function at(){try{return a.activeElement}catch(e){}}x.event={global:{},add:function(e,n,r,o,a){var s,l,u,c,p,d,f,h,g,m,y,v=x._data(e);if(v){r.handler&&(c=r,r=c.handler,a=c.selector),r.guid||(r.guid=x.guid++),(l=v.events)||(l=v.events={}),(d=v.handle)||(d=v.handle=function(e){return typeof x===i||e&&x.event.triggered===e.type?t:x.event.dispatch.apply(d.elem,arguments)},d.elem=e),n=(n||"").match(w)||[""],u=n.length;while(u--)s=rt.exec(n[u])||[],g=y=s[1],m=(s[2]||"").split(".").sort(),g&&(p=x.event.special[g]||{},g=(a?p.delegateType:p.bindType)||g,p=x.event.special[g]||{},f=x.extend({type:g,origType:y,data:o,handler:r,guid:r.guid,selector:a,needsContext:a&&x.expr.match.needsContext.test(a),namespace:m.join(".")},c),(h=l[g])||(h=l[g]=[],h.delegateCount=0,p.setup&&p.setup.call(e,o,m,d)!==!1||(e.addEventListener?e.addEventListener(g,d,!1):e.attachEvent&&e.attachEvent("on"+g,d))),p.add&&(p.add.call(e,f),f.handler.guid||(f.handler.guid=r.guid)),a?h.splice(h.delegateCount++,0,f):h.push(f),x.event.global[g]=!0);e=null}},remove:function(e,t,n,r,i){var o,a,s,l,u,c,p,d,f,h,g,m=x.hasData(e)&&x._data(e);if(m&&(c=m.events)){t=(t||"").match(w)||[""],u=t.length;while(u--)if(s=rt.exec(t[u])||[],f=g=s[1],h=(s[2]||"").split(".").sort(),f){p=x.event.special[f]||{},f=(r?p.delegateType:p.bindType)||f,d=c[f]||[],s=s[2]&&RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),l=o=d.length;while(o--)a=d[o],!i&&g!==a.origType||n&&n.guid!==a.guid||s&&!s.test(a.namespace)||r&&r!==a.selector&&("**"!==r||!a.selector)||(d.splice(o,1),a.selector&&d.delegateCount--,p.remove&&p.remove.call(e,a));l&&!d.length&&(p.teardown&&p.teardown.call(e,h,m.handle)!==!1||x.removeEvent(e,f,m.handle),delete c[f])}else for(f in c)x.event.remove(e,f+t[u],n,r,!0);x.isEmptyObject(c)&&(delete m.handle,x._removeData(e,"events"))}},trigger:function(n,r,i,o){var s,l,u,c,p,d,f,h=[i||a],g=v.call(n,"type")?n.type:n,m=v.call(n,"namespace")?n.namespace.split("."):[];if(u=d=i=i||a,3!==i.nodeType&&8!==i.nodeType&&!nt.test(g+x.event.triggered)&&(g.indexOf(".")>=0&&(m=g.split("."),g=m.shift(),m.sort()),l=0>g.indexOf(":")&&"on"+g,n=n[x.expando]?n:new x.Event(g,"object"==typeof n&&n),n.isTrigger=o?2:3,n.namespace=m.join("."),n.namespace_re=n.namespace?RegExp("(^|\\.)"+m.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,n.result=t,n.target||(n.target=i),r=null==r?[n]:x.makeArray(r,[n]),p=x.event.special[g]||{},o||!p.trigger||p.trigger.apply(i,r)!==!1)){if(!o&&!p.noBubble&&!x.isWindow(i)){for(c=p.delegateType||g,nt.test(c+g)||(u=u.parentNode);u;u=u.parentNode)h.push(u),d=u;d===(i.ownerDocument||a)&&h.push(d.defaultView||d.parentWindow||e)}f=0;while((u=h[f++])&&!n.isPropagationStopped())n.type=f>1?c:p.bindType||g,s=(x._data(u,"events")||{})[n.type]&&x._data(u,"handle"),s&&s.apply(u,r),s=l&&u[l],s&&x.acceptData(u)&&s.apply&&s.apply(u,r)===!1&&n.preventDefault();if(n.type=g,!o&&!n.isDefaultPrevented()&&(!p._default||p._default.apply(h.pop(),r)===!1)&&x.acceptData(i)&&l&&i[g]&&!x.isWindow(i)){d=i[l],d&&(i[l]=null),x.event.triggered=g;try{i[g]()}catch(y){}x.event.triggered=t,d&&(i[l]=d)}return n.result}},dispatch:function(e){e=x.event.fix(e);var n,r,i,o,a,s=[],l=g.call(arguments),u=(x._data(this,"events")||{})[e.type]||[],c=x.event.special[e.type]||{};if(l[0]=e,e.delegateTarget=this,!c.preDispatch||c.preDispatch.call(this,e)!==!1){s=x.event.handlers.call(this,e,u),n=0;while((o=s[n++])&&!e.isPropagationStopped()){e.currentTarget=o.elem,a=0;while((i=o.handlers[a++])&&!e.isImmediatePropagationStopped())(!e.namespace_re||e.namespace_re.test(i.namespace))&&(e.handleObj=i,e.data=i.data,r=((x.event.special[i.origType]||{}).handle||i.handler).apply(o.elem,l),r!==t&&(e.result=r)===!1&&(e.preventDefault(),e.stopPropagation()))}return c.postDispatch&&c.postDispatch.call(this,e),e.result}},handlers:function(e,n){var r,i,o,a,s=[],l=n.delegateCount,u=e.target;if(l&&u.nodeType&&(!e.button||"click"!==e.type))for(;u!=this;u=u.parentNode||this)if(1===u.nodeType&&(u.disabled!==!0||"click"!==e.type)){for(o=[],a=0;l>a;a++)i=n[a],r=i.selector+" ",o[r]===t&&(o[r]=i.needsContext?x(r,this).index(u)>=0:x.find(r,this,null,[u]).length),o[r]&&o.push(i);o.length&&s.push({elem:u,handlers:o})}return n.length>l&&s.push({elem:this,handlers:n.slice(l)}),s},fix:function(e){if(e[x.expando])return e;var t,n,r,i=e.type,o=e,s=this.fixHooks[i];s||(this.fixHooks[i]=s=tt.test(i)?this.mouseHooks:et.test(i)?this.keyHooks:{}),r=s.props?this.props.concat(s.props):this.props,e=new x.Event(o),t=r.length;while(t--)n=r[t],e[n]=o[n];return e.target||(e.target=o.srcElement||a),3===e.target.nodeType&&(e.target=e.target.parentNode),e.metaKey=!!e.metaKey,s.filter?s.filter(e,o):e},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(e,t){return null==e.which&&(e.which=null!=t.charCode?t.charCode:t.keyCode),e}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(e,n){var r,i,o,s=n.button,l=n.fromElement;return null==e.pageX&&null!=n.clientX&&(i=e.target.ownerDocument||a,o=i.documentElement,r=i.body,e.pageX=n.clientX+(o&&o.scrollLeft||r&&r.scrollLeft||0)-(o&&o.clientLeft||r&&r.clientLeft||0),e.pageY=n.clientY+(o&&o.scrollTop||r&&r.scrollTop||0)-(o&&o.clientTop||r&&r.clientTop||0)),!e.relatedTarget&&l&&(e.relatedTarget=l===e.target?n.toElement:l),e.which||s===t||(e.which=1&s?1:2&s?3:4&s?2:0),e}},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==at()&&this.focus)try{return this.focus(),!1}catch(e){}},delegateType:"focusin"},blur:{trigger:function(){return this===at()&&this.blur?(this.blur(),!1):t},delegateType:"focusout"},click:{trigger:function(){return x.nodeName(this,"input")&&"checkbox"===this.type&&this.click?(this.click(),!1):t},_default:function(e){return x.nodeName(e.target,"a")}},beforeunload:{postDispatch:function(e){e.result!==t&&(e.originalEvent.returnValue=e.result)}}},simulate:function(e,t,n,r){var i=x.extend(new x.Event,n,{type:e,isSimulated:!0,originalEvent:{}});r?x.event.trigger(i,null,t):x.event.dispatch.call(t,i),i.isDefaultPrevented()&&n.preventDefault()}},x.removeEvent=a.removeEventListener?function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n,!1)}:function(e,t,n){var r="on"+t;e.detachEvent&&(typeof e[r]===i&&(e[r]=null),e.detachEvent(r,n))},x.Event=function(e,n){return this instanceof x.Event?(e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||e.returnValue===!1||e.getPreventDefault&&e.getPreventDefault()?it:ot):this.type=e,n&&x.extend(this,n),this.timeStamp=e&&e.timeStamp||x.now(),this[x.expando]=!0,t):new x.Event(e,n)},x.Event.prototype={isDefaultPrevented:ot,isPropagationStopped:ot,isImmediatePropagationStopped:ot,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=it,e&&(e.preventDefault?e.preventDefault():e.returnValue=!1)},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=it,e&&(e.stopPropagation&&e.stopPropagation(),e.cancelBubble=!0)},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=it,this.stopPropagation()}},x.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(e,t){x.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,r=this,i=e.relatedTarget,o=e.handleObj;return(!i||i!==r&&!x.contains(r,i))&&(e.type=o.origType,n=o.handler.apply(this,arguments),e.type=t),n}}}),x.support.submitBubbles||(x.event.special.submit={setup:function(){return x.nodeName(this,"form")?!1:(x.event.add(this,"click._submit keypress._submit",function(e){var n=e.target,r=x.nodeName(n,"input")||x.nodeName(n,"button")?n.form:t;r&&!x._data(r,"submitBubbles")&&(x.event.add(r,"submit._submit",function(e){e._submit_bubble=!0}),x._data(r,"submitBubbles",!0))}),t)},postDispatch:function(e){e._submit_bubble&&(delete e._submit_bubble,this.parentNode&&!e.isTrigger&&x.event.simulate("submit",this.parentNode,e,!0))},teardown:function(){return x.nodeName(this,"form")?!1:(x.event.remove(this,"._submit"),t)}}),x.support.changeBubbles||(x.event.special.change={setup:function(){return Z.test(this.nodeName)?(("checkbox"===this.type||"radio"===this.type)&&(x.event.add(this,"propertychange._change",function(e){"checked"===e.originalEvent.propertyName&&(this._just_changed=!0)}),x.event.add(this,"click._change",function(e){this._just_changed&&!e.isTrigger&&(this._just_changed=!1),x.event.simulate("change",this,e,!0)})),!1):(x.event.add(this,"beforeactivate._change",function(e){var t=e.target;Z.test(t.nodeName)&&!x._data(t,"changeBubbles")&&(x.event.add(t,"change._change",function(e){!this.parentNode||e.isSimulated||e.isTrigger||x.event.simulate("change",this.parentNode,e,!0)}),x._data(t,"changeBubbles",!0))}),t)},handle:function(e){var n=e.target;return this!==n||e.isSimulated||e.isTrigger||"radio"!==n.type&&"checkbox"!==n.type?e.handleObj.handler.apply(this,arguments):t},teardown:function(){return x.event.remove(this,"._change"),!Z.test(this.nodeName)}}),x.support.focusinBubbles||x.each({focus:"focusin",blur:"focusout"},function(e,t){var n=0,r=function(e){x.event.simulate(t,e.target,x.event.fix(e),!0)};x.event.special[t]={setup:function(){0===n++&&a.addEventListener(e,r,!0)},teardown:function(){0===--n&&a.removeEventListener(e,r,!0)}}}),x.fn.extend({on:function(e,n,r,i,o){var a,s;if("object"==typeof e){"string"!=typeof n&&(r=r||n,n=t);for(a in e)this.on(a,n,r,e[a],o);return this}if(null==r&&null==i?(i=n,r=n=t):null==i&&("string"==typeof n?(i=r,r=t):(i=r,r=n,n=t)),i===!1)i=ot;else if(!i)return this;return 1===o&&(s=i,i=function(e){return x().off(e),s.apply(this,arguments)},i.guid=s.guid||(s.guid=x.guid++)),this.each(function(){x.event.add(this,e,i,r,n)})},one:function(e,t,n,r){return this.on(e,t,n,r,1)},off:function(e,n,r){var i,o;if(e&&e.preventDefault&&e.handleObj)return i=e.handleObj,x(e.delegateTarget).off(i.namespace?i.origType+"."+i.namespace:i.origType,i.selector,i.handler),this;if("object"==typeof e){for(o in e)this.off(o,n,e[o]);return this}return(n===!1||"function"==typeof n)&&(r=n,n=t),r===!1&&(r=ot),this.each(function(){x.event.remove(this,e,r,n)})},trigger:function(e,t){return this.each(function(){x.event.trigger(e,t,this)})},triggerHandler:function(e,n){var r=this[0];return r?x.event.trigger(e,n,r,!0):t}});var st=/^.[^:#\[\.,]*$/,lt=/^(?:parents|prev(?:Until|All))/,ut=x.expr.match.needsContext,ct={children:!0,contents:!0,next:!0,prev:!0};x.fn.extend({find:function(e){var t,n=[],r=this,i=r.length;if("string"!=typeof e)return this.pushStack(x(e).filter(function(){for(t=0;i>t;t++)if(x.contains(r[t],this))return!0}));for(t=0;i>t;t++)x.find(e,r[t],n);return n=this.pushStack(i>1?x.unique(n):n),n.selector=this.selector?this.selector+" "+e:e,n},has:function(e){var t,n=x(e,this),r=n.length;return this.filter(function(){for(t=0;r>t;t++)if(x.contains(this,n[t]))return!0})},not:function(e){return this.pushStack(dt(this,e||[],!0))},filter:function(e){return this.pushStack(dt(this,e||[],!1))},is:function(e){return!!dt(this,"string"==typeof e&&ut.test(e)?x(e):e||[],!1).length},closest:function(e,t){var n,r=0,i=this.length,o=[],a=ut.test(e)||"string"!=typeof e?x(e,t||this.context):0;for(;i>r;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(11>n.nodeType&&(a?a.index(n)>-1:1===n.nodeType&&x.find.matchesSelector(n,e))){n=o.push(n);break}return this.pushStack(o.length>1?x.unique(o):o)},index:function(e){return e?"string"==typeof e?x.inArray(this[0],x(e)):x.inArray(e.jquery?e[0]:e,this):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){var n="string"==typeof e?x(e,t):x.makeArray(e&&e.nodeType?[e]:e),r=x.merge(this.get(),n);return this.pushStack(x.unique(r))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}});function pt(e,t){do e=e[t];while(e&&1!==e.nodeType);return e}x.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return x.dir(e,"parentNode")},parentsUntil:function(e,t,n){return x.dir(e,"parentNode",n)},next:function(e){return pt(e,"nextSibling")},prev:function(e){return pt(e,"previousSibling")},nextAll:function(e){return x.dir(e,"nextSibling")},prevAll:function(e){return x.dir(e,"previousSibling")},nextUntil:function(e,t,n){return x.dir(e,"nextSibling",n)},prevUntil:function(e,t,n){return x.dir(e,"previousSibling",n)},siblings:function(e){return x.sibling((e.parentNode||{}).firstChild,e)},children:function(e){return x.sibling(e.firstChild)},contents:function(e){return x.nodeName(e,"iframe")?e.contentDocument||e.contentWindow.document:x.merge([],e.childNodes)}},function(e,t){x.fn[e]=function(n,r){var i=x.map(this,t,n);return"Until"!==e.slice(-5)&&(r=n),r&&"string"==typeof r&&(i=x.filter(r,i)),this.length>1&&(ct[e]||(i=x.unique(i)),lt.test(e)&&(i=i.reverse())),this.pushStack(i)}}),x.extend({filter:function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?x.find.matchesSelector(r,e)?[r]:[]:x.find.matches(e,x.grep(t,function(e){return 1===e.nodeType}))},dir:function(e,n,r){var i=[],o=e[n];while(o&&9!==o.nodeType&&(r===t||1!==o.nodeType||!x(o).is(r)))1===o.nodeType&&i.push(o),o=o[n];return i},sibling:function(e,t){var n=[];for(;e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n}});function dt(e,t,n){if(x.isFunction(t))return x.grep(e,function(e,r){return!!t.call(e,r,e)!==n});if(t.nodeType)return x.grep(e,function(e){return e===t!==n});if("string"==typeof t){if(st.test(t))return x.filter(t,e,n);t=x.filter(t,e)}return x.grep(e,function(e){return x.inArray(e,t)>=0!==n})}function ft(e){var t=ht.split("|"),n=e.createDocumentFragment();if(n.createElement)while(t.length)n.createElement(t.pop());return n}var ht="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",gt=/ jQuery\d+="(?:null|\d+)"/g,mt=RegExp("<(?:"+ht+")[\\s/>]","i"),yt=/^\s+/,vt=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,bt=/<([\w:]+)/,xt=/<tbody/i,Nt=/<|&#?\w+;/,wt=/<(?:script|style|link)/i,Tt=/^(?:checkbox|radio)$/i,Ct=/checked\s*(?:[^=]|=\s*.checked.)/i,Et=/^$|\/(?:java|ecma)script/i,kt=/^true\/(.*)/,At=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,Dt={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],area:[1,"<map>","</map>"],param:[1,"<object>","</object>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:x.support.htmlSerialize?[0,"",""]:[1,"X<div>","</div>"]},St=ft(a),Lt=St.appendChild(a.createElement("div"));Dt.optgroup=Dt.option,Dt.tbody=Dt.tfoot=Dt.colgroup=Dt.caption=Dt.thead,Dt.th=Dt.td,x.fn.extend({text:function(e){return x.access(this,function(e){return e===t?x.text(this):this.empty().append((this[0]&&this[0].ownerDocument||a).createTextNode(e))},null,e,arguments.length)},append:function(){return this.domManip(arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=jt(this,e);t.appendChild(e)}})},prepend:function(){return this.domManip(arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=jt(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return this.domManip(arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return this.domManip(arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},remove:function(e,t){var n,r=e?x.filter(e,this):this,i=0;for(;null!=(n=r[i]);i++)t||1!==n.nodeType||x.cleanData(Ft(n)),n.parentNode&&(t&&x.contains(n.ownerDocument,n)&&Bt(Ft(n,"script")),n.parentNode.removeChild(n));return this},empty:function(){var e,t=0;for(;null!=(e=this[t]);t++){1===e.nodeType&&x.cleanData(Ft(e,!1));while(e.firstChild)e.removeChild(e.firstChild);e.options&&x.nodeName(e,"select")&&(e.options.length=0)}return this},clone:function(e,t){return e=null==e?!1:e,t=null==t?e:t,this.map(function(){return x.clone(this,e,t)})},html:function(e){return x.access(this,function(e){var n=this[0]||{},r=0,i=this.length;if(e===t)return 1===n.nodeType?n.innerHTML.replace(gt,""):t;if(!("string"!=typeof e||wt.test(e)||!x.support.htmlSerialize&&mt.test(e)||!x.support.leadingWhitespace&&yt.test(e)||Dt[(bt.exec(e)||["",""])[1].toLowerCase()])){e=e.replace(vt,"<$1></$2>");try{for(;i>r;r++)n=this[r]||{},1===n.nodeType&&(x.cleanData(Ft(n,!1)),n.innerHTML=e);n=0}catch(o){}}n&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var e=x.map(this,function(e){return[e.nextSibling,e.parentNode]}),t=0;return this.domManip(arguments,function(n){var r=e[t++],i=e[t++];i&&(r&&r.parentNode!==i&&(r=this.nextSibling),x(this).remove(),i.insertBefore(n,r))},!0),t?this:this.remove()},detach:function(e){return this.remove(e,!0)},domManip:function(e,t,n){e=f.apply([],e);var r,i,o,a,s,l,u=0,c=this.length,p=this,d=c-1,h=e[0],g=x.isFunction(h);if(g||!(1>=c||"string"!=typeof h||x.support.checkClone)&&Ct.test(h))return this.each(function(r){var i=p.eq(r);g&&(e[0]=h.call(this,r,i.html())),i.domManip(e,t,n)});if(c&&(l=x.buildFragment(e,this[0].ownerDocument,!1,!n&&this),r=l.firstChild,1===l.childNodes.length&&(l=r),r)){for(a=x.map(Ft(l,"script"),Ht),o=a.length;c>u;u++)i=l,u!==d&&(i=x.clone(i,!0,!0),o&&x.merge(a,Ft(i,"script"))),t.call(this[u],i,u);if(o)for(s=a[a.length-1].ownerDocument,x.map(a,_t),u=0;o>u;u++)i=a[u],Et.test(i.type||"")&&!x._data(i,"globalEval")&&x.contains(s,i)&&(i.src?x._evalUrl(i.src):x.globalEval((i.text||i.textContent||i.innerHTML||"").replace(At,"")));l=r=null}return this}});function jt(e,t){return x.nodeName(e,"table")&&x.nodeName(1===t.nodeType?t:t.firstChild,"tr")?e.getElementsByTagName("tbody")[0]||e.appendChild(e.ownerDocument.createElement("tbody")):e}function Ht(e){return e.type=(null!==x.find.attr(e,"type"))+"/"+e.type,e}function _t(e){var t=kt.exec(e.type);return t?e.type=t[1]:e.removeAttribute("type"),e}function Bt(e,t){var n,r=0;for(;null!=(n=e[r]);r++)x._data(n,"globalEval",!t||x._data(t[r],"globalEval"))}function Mt(e,t){if(1===t.nodeType&&x.hasData(e)){var n,r,i,o=x._data(e),a=x._data(t,o),s=o.events;if(s){delete a.handle,a.events={};for(n in s)for(r=0,i=s[n].length;i>r;r++)x.event.add(t,n,s[n][r])}a.data&&(a.data=x.extend({},a.data))}}function Ot(e,t){var n,r,i;if(1===t.nodeType){if(n=t.nodeName.toLowerCase(),!x.support.noCloneEvent&&t[x.expando]){i=x._data(t);for(r in i.events)x.removeEvent(t,r,i.handle);t.removeAttribute(x.expando)}"script"===n&&t.text!==e.text?(Ht(t).text=e.text,_t(t)):"object"===n?(t.parentNode&&(t.outerHTML=e.outerHTML),x.support.html5Clone&&e.innerHTML&&!x.trim(t.innerHTML)&&(t.innerHTML=e.innerHTML)):"input"===n&&Tt.test(e.type)?(t.defaultChecked=t.checked=e.checked,t.value!==e.value&&(t.value=e.value)):"option"===n?t.defaultSelected=t.selected=e.defaultSelected:("input"===n||"textarea"===n)&&(t.defaultValue=e.defaultValue)}}x.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){x.fn[e]=function(e){var n,r=0,i=[],o=x(e),a=o.length-1;for(;a>=r;r++)n=r===a?this:this.clone(!0),x(o[r])[t](n),h.apply(i,n.get());return this.pushStack(i)}});function Ft(e,n){var r,o,a=0,s=typeof e.getElementsByTagName!==i?e.getElementsByTagName(n||"*"):typeof e.querySelectorAll!==i?e.querySelectorAll(n||"*"):t;if(!s)for(s=[],r=e.childNodes||e;null!=(o=r[a]);a++)!n||x.nodeName(o,n)?s.push(o):x.merge(s,Ft(o,n));return n===t||n&&x.nodeName(e,n)?x.merge([e],s):s}function qt(e){Tt.test(e.type)&&(e.defaultChecked=e.checked)}x.extend({clone:function(e,t,n){var r,i,o,a,s,l=x.contains(e.ownerDocument,e);if(x.support.html5Clone||x.isXMLDoc(e)||!mt.test("<"+e.nodeName+">")?o=e.cloneNode(!0):(Lt.innerHTML=e.outerHTML,Lt.removeChild(o=Lt.firstChild)),!(x.support.noCloneEvent&&x.support.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||x.isXMLDoc(e)))for(r=Ft(o),s=Ft(e),a=0;null!=(i=s[a]);++a)r[a]&&Ot(i,r[a]);if(t)if(n)for(s=s||Ft(e),r=r||Ft(o),a=0;null!=(i=s[a]);a++)Mt(i,r[a]);else Mt(e,o);return r=Ft(o,"script"),r.length>0&&Bt(r,!l&&Ft(e,"script")),r=s=i=null,o},buildFragment:function(e,t,n,r){var i,o,a,s,l,u,c,p=e.length,d=ft(t),f=[],h=0;for(;p>h;h++)if(o=e[h],o||0===o)if("object"===x.type(o))x.merge(f,o.nodeType?[o]:o);else if(Nt.test(o)){s=s||d.appendChild(t.createElement("div")),l=(bt.exec(o)||["",""])[1].toLowerCase(),c=Dt[l]||Dt._default,s.innerHTML=c[1]+o.replace(vt,"<$1></$2>")+c[2],i=c[0];while(i--)s=s.lastChild;if(!x.support.leadingWhitespace&&yt.test(o)&&f.push(t.createTextNode(yt.exec(o)[0])),!x.support.tbody){o="table"!==l||xt.test(o)?"<table>"!==c[1]||xt.test(o)?0:s:s.firstChild,i=o&&o.childNodes.length;while(i--)x.nodeName(u=o.childNodes[i],"tbody")&&!u.childNodes.length&&o.removeChild(u)}x.merge(f,s.childNodes),s.textContent="";while(s.firstChild)s.removeChild(s.firstChild);s=d.lastChild}else f.push(t.createTextNode(o));s&&d.removeChild(s),x.support.appendChecked||x.grep(Ft(f,"input"),qt),h=0;while(o=f[h++])if((!r||-1===x.inArray(o,r))&&(a=x.contains(o.ownerDocument,o),s=Ft(d.appendChild(o),"script"),a&&Bt(s),n)){i=0;while(o=s[i++])Et.test(o.type||"")&&n.push(o)}return s=null,d},cleanData:function(e,t){var n,r,o,a,s=0,l=x.expando,u=x.cache,c=x.support.deleteExpando,d=x.event.special;for(;null!=(n=e[s]);s++)if((t||x.acceptData(n))&&(o=n[l],a=o&&u[o])){if(a.events)for(r in a.events)d[r]?x.event.remove(n,r):x.removeEvent(n,r,a.handle);
u[o]&&(delete u[o],c?delete n[l]:typeof n.removeAttribute!==i?n.removeAttribute(l):n[l]=null,p.push(o))}},_evalUrl:function(e){return x.ajax({url:e,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})}});var Pt=/%20/g,$t=/\[\]$/,Rt=/\r?\n/g,It=/^(?:submit|button|image|reset|file)$/i,Wt=/^(?:input|select|textarea|keygen)/i;x.fn.extend({serialize:function(){return x.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=x.prop(this,"elements");return e?x.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!x(this).is(":disabled")&&Wt.test(this.nodeName)&&!It.test(e)&&(this.checked||!Tt.test(e))}).map(function(e,t){var n=x(this).val();return null==n?null:x.isArray(n)?x.map(n,function(e){return{name:t.name,value:e.replace(Rt,"\r\n")}}):{name:t.name,value:n.replace(Rt,"\r\n")}}).get()}}),x.param=function(e,n){var r,i=[],o=function(e,t){t=x.isFunction(t)?t():null==t?"":t,i[i.length]=encodeURIComponent(e)+"="+encodeURIComponent(t)};if(n===t&&(n=x.ajaxSettings&&x.ajaxSettings.traditional),x.isArray(e)||e.jquery&&!x.isPlainObject(e))x.each(e,function(){o(this.name,this.value)});else for(r in e)zt(r,e[r],n,o);return i.join("&").replace(Pt,"+")};function zt(e,t,n,r){var i;if(x.isArray(t))x.each(t,function(t,i){n||$t.test(e)?r(e,i):zt(e+"["+("object"==typeof i?t:"")+"]",i,n,r)});else if(n||"object"!==x.type(t))r(e,t);else for(i in t)zt(e+"["+i+"]",t[i],n,r)}"object"==typeof module&&module&&"object"==typeof module.exports?module.exports=x:(e.jQuery=e.$=x,"function"==typeof define&&define.amd&&define("jquery",[],function(){return x}))})(window);


/*
 * ******************************************************************************
 *  jquery.mb.components
 *  file: jquery.mb.audio.js
 *
 *  Copyright (c) 2001-2014. Matteo Bicocchi (Pupunzi);
 *  Open lab srl, Firenze - Italy
 *  email: matteo@open-lab.com
 *  site: 	http://pupunzi.com
 *  blog:	http://pupunzi.open-lab.com
 * 	http://open-lab.com
 *
 *  Licences: MIT, GPL
 *  http://www.opensource.org/licenses/mit-license.php
 *  http://www.gnu.org/licenses/gpl.html
 *
 *  last modified: 07/01/14 22.50
 *  *****************************************************************************
 */

/*
 *
 * Works on all modern browsers.
 *
 * */

var ua = navigator.userAgent.toLowerCase();
var isAndroid = /android/.test(ua);
var isiOs = /(iphone|ipod|ipad)/.test(ua);
var isStandAlone = window.navigator.standalone;
var isiPad = ua.match(/ipad/);
var isDevice = 'ontouchstart' in window;
var isChrome = "chrome" in window;
var isMoz = "mozAnimationStartTime" in window;


String.prototype.asId = function () {
	return this.replace(/[^a-zA-Z0-9_]+/g, '');
};

function supportType(audioType) {
	var myAudio = document.createElement('audio');
	var isSupp = myAudio.canPlayType &&  myAudio.canPlayType(audioType);
	if (isSupp == "") {
		isSupp = false;
	} else {
		isSupp = true;
	}
	return isSupp;
}

(function ($) {

	$.mbAudio = {
		name             : "mb.audio",
		author           : "Matteo Bicocchi",
		version          : "1.5",
		defaults         : {
			id    : "",
			ogg   : "",
			mp3   : "",
			loop  : false,
			volume: 10
		},
		sounds           : {},
		players          : {},
		loaded           : {},
		playing          : [],
		ch               : [],
		soundsMutedByHand: false,

		build: function (sound) {

			if (!$.mbAudio.isInit) {
				$(window).on("blur",function () {

					$.mbAudio.soundsMutedByHand = true;
					$.mbAudio.muteAllSounds();
				}).on("focus", function () {

							$.mbAudio.soundsMutedByHand = false;
							$.mbAudio.unMuteAllSounds();
						});

				$.mbAudio.isInit = true;

			}

			var soundEl = typeof sound == "string" ? $.mbAudio.sounds[sound] : sound;
			var sID = soundEl.id ? soundEl.id : (typeof sound == "string" ? sound : sound.mp3.split(".")[0].asId());

			if ($.mbAudio.loaded[sID] != 1) {
				var url = supportType("audio/mpeg") ? soundEl.mp3 : soundEl.ogg;

				 $.mbAudio.players[sID] = new Audio(url);
				 $.mbAudio.players[sID].load();
				 $.mbAudio.players[sID].pause();

				$.mbAudio.loaded[sID] = 1;
			}
		},

		getPlayer: function (ID) {
			var el = document.getElementById("mbAudio_" + ID);
			if ($(el).length == 0 || !$.mbAudio.players[ID]) {
				var soundEl = typeof ID == "string" ? $.mbAudio.sounds[ID] : ID;
				var sID = soundEl.id ? soundEl.id : (typeof sound == "string" ? sound : sound.mp3.split(".")[0].asId());
				ID = sID;
			}

			return $.mbAudio.players[ID];
		},

		preload: function () {
				for (var sID in $.mbAudio.sounds) {
					$.mbAudio.build(sID);
				}

			$(document).trigger("soundsLoaded");
		},

		play: function (sound, sprite, callback) {

			var soundEl = typeof sound == "string" ? $.mbAudio.sounds[sound] : sound;

			if (!soundEl)
				return;

			var sID = soundEl.id ? soundEl.id : (typeof sound == "string" ? sound : sound.mp3.split(".")[0].asId());
			var loop = soundEl.loop ? soundEl.loop : $.mbAudio.defaults.loop;
			var volume = typeof soundEl.volume == "number" ? soundEl.volume : $.mbAudio.defaults.volume;
			volume = volume > 10 ? 10 : volume;

			//if ($.mbAudio.loaded[sID] != 1)
			$.mbAudio.build(sound);

			var player = $.mbAudio.getPlayer(sID);
			player.vol = volume;

			if (!$.mbAudio.allMuted)
				player.volume = player.vol / 10;
			else
				player.volume = 0;

			$(player).off("ended." + sID + ",paused." + sID);

			if (typeof sprite == "undefined")
				sprite = true;

			/*Manage sprite*/

			if (sprite && (typeof sprite == "string" || typeof sprite == "object")) {

				sprite = typeof sprite == "string" ? soundEl.sprite[sprite] : sprite;

				clearTimeout(player.timeOut);

				if (!isAndroid && player.seekable.length == 0) {

					//	We are not crazy; this is to start loading audio
/*
					player.play();
					if (!isMoz)
*/
						player.pause();

					var getSeekable = setInterval(function () {

						if (player.seekable.length > 0 && player.seekable.end(0) >= sprite.end - 1) {

							clearInterval(getSeekable);
							$.mbAudio.manageSprite(player, sID, sound, sprite, callback);
						}
					}, 1)

				} else {
					$.mbAudio.manageSprite(player, sID, sound, sprite, callback);
				}
				return;
			}

			if (loop) {

				$(player).one("ended." + sID + ",paused." + sID, function () {
					this.currentTime = 0;

					if (typeof loop == "number") {
						if (typeof player.counter == "undefined")
							player.counter = 0;

						player.counter++;

						if (player.counter === loop) {
							delete player.counter;
							$.mbAudio.playing.splice(sID, 1);
							delete player.isPlaying;
							if (typeof callback == "function")
								callback(player);
							return;
						}
					}

					$.mbAudio.play(sound, sprite, callback);
				});

			} else {

				$(player).on("ended." + sID + ",paused." + sID, function () {

					$.mbAudio.playing.splice(sID, 1);
					delete player.isPlaying;

					if (typeof callback == "function")
						callback(player);

				});
			}

			player.pause();
			if (player.currentTime && sprite)
				player.currentTime = 0;

			player.play();

			var idx = jQuery.inArray(sID, $.mbAudio.playing);
			$.mbAudio.playing.splice(idx, 1);
			$.mbAudio.playing.push(sID);
			player.isPlaying = true;
		},

		manageSprite: function (player, sID, sound, sprite, callback) {

			player.pause();

			function checkStart(player, sID, sound, sprite, callback){
				player.currentTime = sprite.start;

				if (player.currentTime != sprite.start){

					checkStart(player, sID, sound, sprite, callback);

				}else{
					playerPlay(player, sID, sound, sprite, callback);
				}
			}
			checkStart(player, sID, sound, sprite, callback);
			function playerPlay(player, sID, sound, sprite, callback) {
				var delay = ((sprite.end - sprite.start) * 1000) + 100;
				var canFireCallback = true;
				player.play();
				player.isPlaying = true;
				player.timeOut = setTimeout(function () {
					if (sprite.loop) {
						canFireCallback = false;
						sprite.loop = sprite.loop == true ? 9999 : sprite.loop;
						if (!player.counter)
							player.counter = 1;
						if (player.counter != sprite.loop && player.isPlaying) {
							player.counter++;
							player.currentTime = sprite.start || 0;
							$.mbAudio.play(sound, sprite, callback);
						} else {
							player.counter = 0;
							canFireCallback = true;
							player.pause();
							delete player.isPlaying;
						}
					} else {
						player.pause();
						delete player.isPlaying;
					}
					if (canFireCallback && typeof callback == "function")
						callback(player);
					var idx = jQuery.inArray(sID, $.mbAudio.playing);
					$.mbAudio.playing.splice(idx, 1);
				}, delay);
				$.mbAudio.playing.push(sID);
				player.isPlaying = true;
			}
		},

		stop: function (sound, callback) {

			if (!sound)
				return;

			var soundEl = typeof sound == "string" ? $.mbAudio.sounds[sound] : sound;

			if (!soundEl)
				return;

			var sID = soundEl.id ? soundEl.id : (typeof sound == "string" ? sound : sound.mp3.split(".")[0].asId());

			var player = $.mbAudio.getPlayer(sID);

			if ($.mbAudio.loaded[sID] != 1)
				$.mbAudio.build(sound);

			player.pause();
			if (player.currentTime)
				player.currentTime = 0;

			$(player).off('ended.' + sID);

			if (typeof callback == "function")
				callback(player);

			var idx = jQuery.inArray(sID, $.mbAudio.playing);
			$.mbAudio.playing.splice(idx, 1);
			delete player.isPlaying;
			delete player.counter;

		},

		pause: function (sound, callback) {
			var soundEl = typeof sound == "string" ? $.mbAudio.sounds[sound] : sound;
			var sID = soundEl.id ? soundEl.id : (typeof sound == "string" ? sound : sound.mp3.split(".")[0].asId());

			if ($.mbAudio.loaded[sID] != 1) {
				$.mbAudio.build(sound);
			}

			var player = $.mbAudio.getPlayer(sID);
			player.pause();

			$(player).off('ended.' + sID);

			var idx = jQuery.inArray(sID, $.mbAudio.playing);
			if (idx > -1)
				$.mbAudio.playing.splice(idx, 1);

			delete player.isPlaying;
			delete player.counter;

			clearTimeout(player.timeOut);

			if (typeof callback == "function")
				callback();

		},

		destroy: function (sound) {
			var soundEl = typeof sound == "string" ? $.mbAudio.sounds[sound] : sound;
			var sID = soundEl.id ? soundEl.id : (typeof sound == "string" ? sound : sound.mp3.split(".")[0].asId());
			$.mbAudio.loaded[sID] = 0;
			var idx = jQuery.inArray(sID, $.mbAudio.playing);
			$.mbAudio.playing.splice(idx, 1);

			var player = $.mbAudio.getPlayer(sID);

			if (!player)
				return;

			$(player).remove();

		},

		muteAllSounds: function () {
			var sounds = $.mbAudio.loaded;
			if (!sounds)
				return;

			for (var sID in sounds) {
				var player = $.mbAudio.getPlayer(sID);
				player.vol = player.volume * 10;
				player.volume = 0;
			}
			$.mbAudio.allMuted = true;
		},

		unMuteAllSounds: function () {
			var sounds = $.mbAudio.loaded;
			if (!sounds)
				return;

			for (var sID in sounds) {
				var player = $.mbAudio.getPlayer(sID);
				player.volume = player.vol / 10;
			}
			$.mbAudio.allMuted = false;
		},

		stopAllSounds: function () {
			var sounds = $.mbAudio.loaded;
			if (!sounds)
				return;


			for (var i in sounds) {
				$.mbAudio.destroy(i);
			}
			$.mbAudio.allMuted = true;
		},

		setVolume: function (sound, vol) {
			var soundEl = typeof sound == "string" ? $.mbAudio.sounds[sound] : sound;
			var sID = soundEl.id ? soundEl.id : (typeof sound == "string" ? sound : sound.mp3.split(".")[0].asId());

			if ($.mbAudio.loaded[sID] != 1)
				$.mbAudio.build(sound);

			var player = $.mbAudio.getPlayer(sID);
			vol = vol > 10 ? 10 : vol;
			player.vol = vol;

			player.volume = player.vol;

		},

		fadeIn: function (sound, sprite, duration, callback) {

			if (!duration)
				duration = 3000;

			duration = duration / 4;

			var soundEl = typeof sound == "string" ? $.mbAudio.sounds[sound] : sound;
			var sID = soundEl.id ? soundEl.id : (typeof sound == "string" ? sound : sound.mp3.split(".")[0].asId());

			if ($.mbAudio.loaded[sID] != 1)
				$.mbAudio.build(sound);

			var player = $.mbAudio.getPlayer(sID);
			var volume = typeof soundEl.volume == "number" ? soundEl.volume : $.mbAudio.defaults.volume;
			volume = volume > 10 ? 10 : volume;

			var step = (volume / 10) / duration;

			clearInterval(player.fade);

			player.play();
			if (player.currentTime)
				player.currentTime = 0;

			player.volume = 0;

			if (!$.mbAudio.allMuted) {
				var v = 0;
				player.fade = setInterval(function () {

					if (v >= volume / 10) {
						clearInterval(player.fade);
						if (typeof (callback) == "function")
							callback(player);
						return;
					}

					player.volume = v;
					v += step;

				}, 0);
			}

			$.mbAudio.playing.push(sID);
			player.isPlaying = true;

		},

		fadeOut: function (sound, duration, callback) {

			if (!duration)
				duration = 3000;

			duration = duration / 4;

			var soundEl = typeof sound == "string" ? $.mbAudio.sounds[sound] : sound;
			var sID = soundEl.id ? soundEl.id : (typeof sound == "string" ? sound : sound.mp3.split(".")[0].asId());

			if ($.mbAudio.loaded[sID] != 1)
				$.mbAudio.build(sound);

			var player = $.mbAudio.getPlayer(sID);
			var volume = player.volume ? player.volume * 10 : (typeof soundEl.volume == "number" ? soundEl.volume : $.mbAudio.defaults.volume);
			volume = volume > 10 ? 10 : volume;

			var step = (volume / 10) / duration;

			clearInterval(player.fade);

			player.volume = volume / 10;
			player.play();

			var v = player.volume;

			player.fade = setInterval(function () {

				if (v <= 0) {
					v = 0;
					clearInterval(player.fade);

					player.volume = 0
					player.isPlaying = false;
					var idx = jQuery.inArray(sID, $.mbAudio.playing);
					$.mbAudio.playing.splice(idx, 1);

					player.pause();

					if (typeof (callback) == "function")
						callback(player);

					return;
				}

				player.volume = v;
				v -= step;

			}, 0);
		},

		queue: {
			isStarted: false,

			add: function (soundID, sprite, callback, hasPriority) {

				var channelName = typeof soundID == "string" ? soundID : soundID.mp3.split(".")[0].asId();
				var c = $.mbAudio.queue.get(channelName);
				if (c == null)
					c = new Channel(soundID);

				var soundEl = typeof soundID == "string" ? $.mbAudio.sounds[soundID] : soundID;

				if (!soundEl.started) {
					$.mbAudio.pause(soundID);
					soundEl.started = true;
				}

				sprite = typeof sprite == "string" ? soundEl.sprite[sprite] : sprite;

				var sEL = {};

				sEL.soundID = soundID;
				sEL.sprite = sprite;
				sEL.channel = c;
				sEL.hasPriority = hasPriority;
				sEL.callback = callback;

				if (!$.mbAudio.queue.isStarted)
					$.mbAudio.queue.startEngine();

				if (!$.mbAudio.soundsMutedByHand) {
					if (sEL.hasPriority) {
						sEL.channel.playingSounds.splice(0, 1);
						sEL.channel.soundInPlay = null;
						c.playingSounds.unshift(sEL);
					} else {
						c.playingSounds.push(sEL);
					}
				}
			},

			get: function (name) {
				for (var i in $.mbAudio.ch) {
					if ($.mbAudio.ch[i].name == name)
						return $.mbAudio.ch[i];
				}
			},

			manage: function () {

				function manageQueue(channel) {

					if (channel.soundInPlay == null && channel.playingSounds && channel.playingSounds.length > 0 && !$.mbAudio.soundsMutedByHand && !channel.isMuted) {
						channel.soundInPlay = channel.playingSounds[0];

						function callback() {
							if (typeof channel.soundInPlay.callback == "function")
								channel.soundInPlay.callback();

							channel.playingSounds.splice(0, 1);
							channel.soundInPlay = null;


						}

						$.mbAudio.play(channel.soundInPlay.soundID, channel.soundInPlay.sprite, callback);

					} else if (channel.soundInPlay != null && channel.soundInPlay.soundID && ($.mbAudio.soundsMutedByHand || channel.isMuted)) {
						$.mbAudio.pause(channel.soundInPlay.soundID);
						channel.playingSounds = [];
						channel.playingSounds.unshift(channel.soundInPlay);
						channel.soundInPlay = null;
					}
				}

				for (var ci in $.mbAudio.ch) {
					var channel = $.mbAudio.ch[ci];
					manageQueue(channel);
				}

			},

			mute: function (channel) {
				if (!channel)
					$.mbAudio.soundsMutedByHand = true;
				else {
					var ch = $.mbAudio.queue.get(channel);
					if (ch)
						ch.isMuted = true;
					$.mbAudio.pause(channel)

				}

			},

			unMute: function (channel) {
				if (!channel)
					$.mbAudio.soundsMutedByHand = false;
				else {
					var ch = $.mbAudio.queue.get(channel);
					if (ch)
						ch.isMuted = false;
				}
			},

			clear: function (name) {
				var channel = $.mbAudio.queue.get(name);
				if (channel) {
					if (channel.soundInPlay != null)
						$.mbAudio.pause(channel.soundInPlay.soundID);
					channel.soundInPlay = null;
					channel.playingSounds = [];
				}
			},

			startEngine: function () {
				$.mbAudio.channelsEngine = setInterval($.mbAudio.queue.manage, 1);
				$.mbAudio.queue.isStarted = true;
			},

			stopEngine: function () {
				clearInterval($.mbAudio.channelsEngine);
				$.mbAudio.queue.isStarted = false;
			}
		}
	};

	function Channel(soundID) {
		this.name = typeof soundID == "string" ? soundID : soundID.mp3.split(".")[0].asId();
		this.soundInPlay = null;
		this.playingSounds = [];
		this.isMuted = false;
		$.mbAudio.ch.push(this);
	}


})(jQuery);

//////////////////////////////////////////////
// Attributes of all enemies                //
//////////////////////////////////////////////
var enemyAttr = {
	nudeGuy: {
		aggroRange: 200,
		health: 50,
		damage: 10,
		spriteOffset: 0,
	    spriteHeight: 46,
	    hitbox: [61, 27],
	    walkAnimationSpeed: 5.5,
	    fightAnimationSpeed: 5.5,
	    speed: 100
	},

	zombie: {
		aggroRange: 200,
		health: 50,
		damage: 10,
		spriteOffset: 604,
	    spriteHeight: 46,
	    hitbox: [61, 27],
	    walkAnimationSpeed: 4.5,
	    fightAnimationSpeed: 4.5,
	    speed: 75
	}
};
//////////////////////////////////////////////
// Attributes of all player types           //
//////////////////////////////////////////////
var playerAttr = {
	nudeGuy: {
		health: 75,
		healthGeneration: 5,
		damage: 10,
		spriteOffset: 0,
	    spriteHeight: 46,
	    hitbox: [61, 27],
	    walkAnimationSpeed: 5.5,
	    fightAnimationSpeed: 6.5
	},

	zombie: {
		health: 100,
		healthGeneration: 5,
		damage: 10,
		spriteOffset: 604,
	    spriteHeight: 46,
	    hitbox: [61, 27],
	    walkAnimationSpeed: 5.5,
	    fightAnimationSpeed: 6.5
	}
};
(function() {
    var pressedKeys = {};

    function setKey(event, status) {
        var code = event.keyCode;
        var key;

        switch(code) {
        case 32:
            key = 'SPACE'; break;
        case 37:
            key = 'LEFT'; break;
        case 38:
            key = 'UP'; break;
        case 39:
            key = 'RIGHT'; break;
        case 40:
            key = 'DOWN'; break;
        default:
            // Convert ASCII codes to letters
            key = String.fromCharCode(code);
        }

        pressedKeys[key] = status;
    }

    document.addEventListener('keydown', function(e) {
        setKey(e, true);
    });

    document.addEventListener('keyup', function(e) {
        setKey(e, false);
    });

    window.addEventListener('blur', function() {
        pressedKeys = {};
    });

    window.input = {
        isDown: function(key) {
            return pressedKeys[key.toUpperCase()];
        }
    };
})();
(function(){
    function Sprite( url, pos, size, speed, frames, dir, once, inProgress ){
        this.pos = pos;
        this.size = size;
        this.speed = typeof speed === 'number' ? speed : 0;
        this.frames = frames;
        this._index = 0;
        this.url = url;
        this.dir = dir || 'horizontal';
        this.once = once;
        this.currentFrame;
        this.inProgress = inProgress;
    };

    Sprite.prototype = {
        update: function(dt) {
            this._index += this.speed*dt;
            // Always start with first frame
            if( this.frames.length === 1 ){
                this._index = 0;
            }
        },

        render: function(ctx) {
            var frame;

            if(this.speed > 0) {
                var max = this.frames.length;
                var idx = Math.floor(this._index);
                frame = this.frames[idx % max];

                if(this.once && idx >= max) {
                    this.done = true;
                }

                // End animation
                if( idx >= max ){
                    this._index = 0;
                }
                if( idx >= max && !input.isDown('SPACE') ){
                    this.inProgress = false;
                }
            }
            else {
                frame = 0;
            }

            //console.log(frame);

            this.currentFrame = frame;


            var x = this.pos[0];
            var y = this.pos[1];

            if(this.dir == 'vertical') {
                y += frame * this.size[1];
            }
            else {
                x += frame * this.size[0];
            }

            ctx.drawImage(resources.get(this.url),
                          x, y,
                          this.size[0], this.size[1],
                          0, 0,
                          this.size[0], this.size[1]);
        }
    };

    window.Sprite = Sprite;
})();
(function() {
    var resourceCache = {};
    var loading = [];
    var readyCallbacks = [];

    // Load an image url or an array of image urls
    function load(urlOrArr) {
        if(urlOrArr instanceof Array) {
            urlOrArr.forEach(function(url) {
                _load(url);
            });
        }
        else {
            _load(urlOrArr);
        }
    }

    function _load(url) {
        if(resourceCache[url]) {
            return resourceCache[url];
        }
        else {
            var img = new Image();
            img.onload = function() {
                resourceCache[url] = img;

                if(isReady()) {
                    readyCallbacks.forEach(function(func) { func(); });
                }
            };
            resourceCache[url] = false;
            img.src = url;
        }
    }

    function get(url) {
        return resourceCache[url];
    }

    function isReady() {
        var ready = true;
        for(var k in resourceCache) {
            if(resourceCache.hasOwnProperty(k) &&
               !resourceCache[k]) {
                ready = false;
            }
        }
        return ready;
    }

    function onReady(func) {
        readyCallbacks.push(func);
    }

    window.resources = { 
        load: load,
        get: get,
        onReady: onReady,
        isReady: isReady
    };
})();
//////////////////////////////////////////////
// Variables                                //
//////////////////////////////////////////////
var levels = {
    level1: [
[[127,126,127,126,127,126,127,126,127,32,127,32,127,234,235,170,219,171,32,32,32,32,143,142,143,142,143,126,180,181,172,165,165,165,165,173,182,126,127,126,127,126,127,126,127,126,127,126,127,126,91,91,92,257,81,81,81,85,81,70,101,102,103,102,102,102,103,103,90,257,257,257],[143,142,143,142,143,142,143,142,143,142,143,142,143,82,70,234,235,236,32,32,32,32,127,126,127,126,127,142,143,142,164,165,173,181,181,182,143,142,143,142,148,149,149,149,150,142,143,142,143,142,101,102,80,81,81,81,81,101,90,70,70,70,70,70,0,0,0,0,106,107,257,257],[127,126,127,126,127,126,127,126,127,32,127,32,127,32,145,70,70,70,32,149,149,149,156,150,143,142,143,126,127,126,180,181,182,126,127,126,127,126,127,126,164,165,165,165,166,126,257,167,168,168,0,118,0,97,81,81,81,81,81,161,102,102,128,70,81,81,81,81,81,117,96,257],[143,142,143,142,143,142,143,142,143,142,143,142,143,142,143,145,70,70,32,165,173,172,165,157,150,126,127,142,143,142,143,142,54,55,143,142,143,142,143,142,180,172,165,173,182,142,143,183,184,184,126,142,126,113,81,81,81,81,81,0,0,0,0,145,81,81,81,81,81,81,65,113],[127,126,127,148,149,150,127,126,127,32,127,32,127,32,127,69,70,70,32,165,157,156,165,165,157,149,149,150,127,126,127,69,66,65,72,126,127,126,127,126,127,164,173,182,127,126,127,126,127,126,127,126,127,85,81,81,81,81,81,218,219,219,219,0,90,165,165,165,165,165,81,85],[143,142,148,156,165,166,143,142,143,142,143,142,143,142,143,85,70,130,32,165,165,165,165,165,165,173,181,182,143,142,143,161,90,145,82,142,143,142,143,142,143,180,182,142,143,142,143,142,143,142,126,142,126,69,81,81,65,65,65,234,170,219,171,0,0,107,0,0,103,80,69,85],[127,148,156,165,165,157,149,149,150,32,127,32,127,32,127,101,102,103,32,181,172,165,165,165,165,166,127,126,127,126,127,126,127,107,108,126,127,90,70,33,127,126,127,126,127,126,127,126,127,126,127,69,85,65,202,203,203,203,204,65,234,235,236,81,81,0,0,0,0,0,85,69],[143,164,202,203,203,203,204,173,182,142,148,150,143,142,143,142,143,142,143,142,164,165,173,181,181,182,143,142,143,142,143,142,143,142,143,168,168,33,33,33,143,142,143,142,143,142,143,142,143,142,126,85,85,202,154,219,257,219,155,204,81,81,81,81,81,81,81,81,81,81,85,85],[127,164,218,219,171,235,236,166,127,148,156,166,127,32,127,32,127,32,127,32,180,181,182,126,127,126,127,257,127,126,127,126,127,167,168,168,168,169,33,33,127,126,127,126,127,126,127,126,127,126,127,101,85,234,235,235,170,219,171,236,81,81,81,81,81,81,81,81,81,81,85,69],[143,164,234,235,236,173,181,182,143,164,165,166,143,142,143,142,143,142,143,142,143,142,143,142,143,142,143,257,257,142,143,142,143,183,174,168,168,159,153,142,143,142,143,142,143,142,143,142,143,142,126,142,126,97,70,65,234,235,236,81,0,0,0,0,0,81,81,81,81,81,85,85],[127,164,165,165,173,182,127,126,127,164,165,157,149,150,127,32,127,32,127,32,127,32,127,126,127,126,257,257,127,126,127,126,127,126,167,168,168,168,169,126,127,126,127,126,127,126,127,126,127,126,127,126,127,113,80,131,102,80,81,69,65,65,65,65,72,129,129,129,129,129,85,69],[143,180,181,181,182,142,143,142,143,180,181,172,165,166,143,142,143,142,143,142,143,142,143,142,143,142,143,142,143,142,257,142,143,142,167,168,168,175,185,142,143,142,143,142,143,142,143,142,143,142,126,142,126,85,88,0,0,0,97,85,65,65,65,65,66,67,54,55,74,75,85,65],[127,126,127,126,127,126,127,126,127,32,127,180,181,182,127,32,127,32,151,152,152,153,127,126,127,126,127,126,127,126,127,148,149,150,183,174,168,159,153,126,127,126,127,126,127,126,257,257,127,126,127,126,127,126,127,126,127,126,113,128,65,65,65,65,65,70,70,70,70,70,65,65],[143,142,143,142,143,142,143,142,143,142,143,142,143,142,143,142,143,142,167,168,219,169,143,142,143,142,143,142,143,142,148,156,165,166,143,183,184,184,185,142,143,142,143,142,143,142,143,142,143,142,126,142,126,142,126,142,126,142,85,81,145,97,93,90,70,70,70,70,70,70,65,65],[127,126,127,126,127,126,127,126,127,32,127,32,127,32,127,32,127,148,156,170,175,185,127,69,70,87,76,77,127,126,180,181,181,182,127,126,127,126,127,126,127,126,127,126,257,126,127,126,127,126,127,126,127,126,127,126,127,126,69,81,0,0,0,0,97,70,70,70,70,70,65,65],[143,142,143,142,143,142,143,142,143,142,143,142,143,142,143,142,143,164,165,173,182,142,143,85,143,142,70,70,66,142,143,142,143,142,143,142,143,142,143,142,143,257,257,257,257,142,143,142,143,142,126,142,126,142,126,142,126,142,69,81,0,0,65,65,113,70,70,70,70,70,65,65]],[[0,0,0,0,756,757,0,0,0,254,84,85,70,0,253,0,0,253,82,93,108,109,106,107,104,105,341,342,0,0,0,0,0,0,0,0,0,670,0,463,0,0,222,138,139,160,161,102,103,90,274,272,226,270,257,258,84,343,344,100,0,0,0,0,359,360,0,0,256,0,0,0],[0,0,0,0,0,0,359,360,239,0,100,101,90,672,269,253,253,269,98,99,124,125,122,123,120,121,357,358,0,0,0,773,0,0,0,413,615,478,479,0,0,0,0,270,0,176,177,118,119,106,0,374,272,273,273,274,100,359,360,116,117,118,119,118,118,118,119,119,272,226,0,0],[357,358,0,0,0,0,0,240,241,242,116,117,106,107,0,269,269,0,114,115,140,141,138,139,136,137,0,0,0,0,0,0,0,614,414,381,0,494,495,0,239,0,0,0,0,192,193,134,135,122,123,370,96,0,0,0,116,117,106,132,133,134,135,133,134,134,135,135,122,272,226,0],[241,242,352,353,354,355,356,256,257,258,132,133,122,123,144,222,0,223,72,73,0,0,0,0,0,0,0,0,0,0,0,53,241,242,429,397,414,0,0,0,0,0,0,0,240,210,227,274,774,138,139,390,112,240,242,0,132,133,122,123,118,118,144,240,0,0,357,358,138,139,112,226],[227,274,0,0,0,0,240,210,257,211,242,0,138,139,160,327,328,239,72,73,0,0,0,0,0,0,0,0,0,0,84,0,226,211,242,0,399,0,0,0,0,269,0,269,272,273,274,0,691,0,0,0,68,256,258,0,0,0,138,139,134,134,160,161,0,0,272,273,289,242,84,256],[355,356,269,0,269,0,272,273,273,273,274,0,0,692,84,343,344,0,88,89,0,270,0,0,0,0,0,0,0,0,100,688,0,226,258,0,0,0,0,0,0,0,55,0,0,0,0,0,0,0,0,0,59,272,274,0,0,0,0,0,752,753,176,177,106,274,0,0,272,274,84,210],[242,0,0,0,0,269,269,0,0,0,0,0,0,0,100,359,360,108,109,105,0,0,0,0,0,0,0,0,0,0,116,117,106,272,274,62,63,594,0,130,131,80,82,72,73,0,0,0,0,0,0,688,239,0,0,240,241,241,242,0,0,222,192,193,122,123,46,47,119,96,84,257],[258,269,0,0,0,0,0,0,0,357,358,0,240,242,116,117,118,124,125,121,0,0,0,0,0,0,240,241,242,0,132,133,122,123,124,46,47,144,85,146,147,96,97,88,89,0,355,356,0,0,84,0,0,240,241,210,243,227,274,0,0,0,0,0,138,139,110,111,135,112,68,273],[274,0,0,0,0,0,0,0,0,0,0,0,256,258,132,133,134,140,141,0,0,0,0,0,0,0,256,0,211,242,0,599,138,139,140,94,95,160,161,162,163,112,113,72,73,707,0,0,0,0,100,0,0,272,273,273,273,274,674,0,0,0,0,0,0,0,420,0,0,68,84,240],[360,269,0,222,0,0,0,0,0,0,0,0,272,274,0,0,0,0,0,0,0,0,0,0,240,241,210,0,243,258,0,0,0,355,356,383,381,176,177,178,179,84,85,88,73,0,0,708,0,0,116,117,96,791,0,0,673,0,0,0,54,55,54,55,81,0,0,0,0,84,84,256],[0,0,0,0,0,269,269,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,272,226,275,254,227,289,241,242,0,0,0,399,399,192,193,194,195,100,101,104,105,357,358,240,242,0,132,133,112,0,970,672,790,638,68,0,345,346,347,348,0,0,0,0,0,59,68,256],[0,0,269,0,269,0,0,0,0,0,0,0,0,355,356,0,0,0,0,0,0,0,0,0,0,272,273,273,289,210,222,258,0,413,578,430,399,0,0,577,0,116,117,120,121,240,241,210,258,352,353,354,84,758,759,147,118,96,84,0,361,362,363,364,327,328,323,324,0,339,100,101],[358,0,0,690,0,0,240,241,241,242,41,0,0,0,0,361,362,363,364,0,0,0,0,0,0,0,0,0,272,273,273,274,0,415,463,0,415,431,0,0,0,132,133,136,137,256,0,0,258,0,0,0,100,101,104,163,134,112,100,0,359,360,341,342,343,344,339,340,328,355,116,117],[706,355,356,0,0,0,256,257,0,0,0,0,0,0,0,0,0,240,241,242,0,0,0,53,54,55,60,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,240,241,288,273,273,274,0,148,150,116,117,120,121,389,324,116,144,0,0,357,358,359,360,355,356,344,243,132,133],[340,688,0,0,355,356,68,69,70,0,0,0,0,0,41,0,0,272,273,274,0,0,68,0,0,241,242,0,0,0,0,0,0,0,0,0,0,0,0,0,240,241,241,210,0,258,0,0,148,149,156,166,132,133,136,137,0,340,132,160,161,108,109,106,355,356,0,359,360,304,305,306],[364,0,0,0,0,0,84,85,70,82,0,0,0,0,0,0,0,0,0,0,0,0,84,0,87,257,211,241,242,87,76,77,0,0,0,0,0,0,0,240,210,0,0,688,0,211,242,0,164,165,165,157,150,0,0,0,0,356,0,176,177,124,125,122,0,275,325,326,0,320,321,322]],[[325,326,304,305,306,0,343,344,223,0,240,210,227,274,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,772,256,227,0,0,0,0,0,0,0,0,0,0,0,0,0,690,0,0,309,310,0,345,346,347],[341,342,320,321,322,323,324,0,0,0,272,273,274,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,223,0,0,0,0,0,0,0,272,274,391,0,375,0,0,0,0,0,0,0,0,0,0,0,0,0,325,326,0,361,362,363],[0,0,336,337,338,339,340,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,37,38,39,40,41,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,238,240,242,341,342,0,0,674,688],[323,324,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,52,240,327,328,56,57,0,43,44,45,0,253,0,253,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,254,210,211,241,241,242,0,272,673],[339,340,253,0,253,0,0,0,0,309,310,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,272,343,344,242,51,58,59,60,61,38,38,39,40,41,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,736,737,0,272,226,227,273,0,0,0,0,0],[0,0,0,0,0,253,253,0,0,325,326,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,576,0,359,360,258,67,74,75,76,77,54,54,0,56,57,0,323,324,0,0,52,58,223,0,0,0,0,0,0,0,0,0,0,0,272,704,62,63,0,688,240,0],[0,253,0,0,0,0,0,0,0,341,342,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,592,0,0,272,274,62,63,0,736,737,0,0,304,305,306,0,339,340,0,0,68,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,78,79,0,0,256,373],[328,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,323,324,78,79,0,752,753,0,0,320,321,322,309,310,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,272,0],[344,253,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,339,340,0,0,0,0,0,0,0,336,337,338,325,326,0,0,304,305,306,0,0,0,0,0,0,0,37,38,39,38,39,40,41,0,0,0,0,0,673],[310,0,0,0,0,253,253,0,0,0,0,0,0,323,324,0,0,0,0,0,0,0,0,0,0,0,0,238,0,0,0,0,0,0,0,0,0,0,0,0,0,0,352,353,354,341,342,0,0,320,321,322,0,0,0,0,0,0,52,53,329,330,331,332,56,57,0,0,0,0,0,0],[326,0,253,0,253,0,0,0,0,0,0,0,0,339,340,329,330,331,332,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,373,0,0,0,0,0,0,0,0,0,336,337,338,0,0,0,0,0,0,240,242,327,328,309,310,672,51,38,39,58,323,324,0],[342,323,324,0,0,0,0,0,0,0,0,0,0,0,0,345,346,347,348,0,0,0,0,329,330,331,332,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,256,258,343,344,325,326,673,0,0,0,0,0,340,272],[0,339,340,0,323,324,0,37,39,40,41,0,0,0,0,0,0,0,0,0,0,0,0,345,346,347,348,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,272,274,0,0,0,0,323,324,0,327,0,0,356,0],[324,0,309,310,339,340,52,53,55,56,57,0,0,0,0,0,0,0,0,0,0,0,52,361,362,363,364,61,38,39,40,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,323,84,0,240,241,242,0,0,339,340,0,343,0,0,0,0],[323,310,325,326,327,328,0,0,0,72,51,38,39,40,0,0,0,0,0,0,0,0,0,240,241,323,324,0,54,55,56,61,40,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,339,68,0,272,273,274,0,0,0,0,309,310,0,0,0,0],[325,326,341,342,343,344,0,0,0,0,67,54,55,56,57,0,0,0,0,0,0,0,0,256,257,339,340,0,0,672,673,0,56,57,0,0,0,0,0,0,0,0,0,0,221,0,0,0,0,0,0,0,0,0,0,0,355,68,773,0,0,0,0,0,309,310,0,329,330,331,332,0]],[[192,32],[224,32],[256,32],[320,32],[672,32],[704,32],[800,32],[832,32],[864,32],[1184,32],[1216,32],[1376,32],[1440,32],[1568,32],[1792,32],[0,64],[32,64],[320,64],[640,64],[736,64],[768,64],[1184,64],[1216,64],[1280,64],[1472,64],[1504,64],[1568,64],[1600,64],[1664,64],[1792,64],[64,96],[96,96],[128,96],[160,96],[192,96],[352,96],[384,96],[608,96],[992,96],[1024,96],[1056,96],[1536,96],[1600,96],[1664,96],[1824,96],[1856,96],[416,128],[608,128],[960,128],[1088,128],[1312,128],[1376,128],[1664,128],[1888,128],[0,160],[32,160],[64,160],[128,160],[448,160],[608,160],[672,160],[960,160],[1088,160],[1184,160],[1216,160],[1248,160],[1280,160],[1312,160],[1344,160],[1376,160],[1664,160],[1920,160],[1952,160],[1984,160],[2112,160],[2144,160],[160,192],[192,192],[448,192],[608,192],[960,192],[1088,192],[1184,192],[1408,192],[1600,192],[1632,192],[1664,192],[2016,192],[2048,192],[2080,192],[2176,192],[32,224],[288,224],[320,224],[448,224],[608,224],[960,224],[992,224],[1024,224],[1088,224],[1184,224],[1408,224],[1472,224],[1504,224],[1600,224],[2080,224],[2176,224],[480,256],[512,256],[544,256],[576,256],[1056,256],[1088,256],[1184,256],[1408,256],[1440,256],[1600,256],[2208,256],[0,288],[32,288],[1056,288],[1088,288],[1184,288],[1280,288],[1408,288],[1504,288],[1600,288],[1632,288],[1664,288],[1696,288],[1920,288],[1952,288],[1984,288],[2016,288],[2208,288],[160,320],[192,320],[864,320],[1216,320],[1248,320],[1312,320],[1408,320],[1440,320],[1472,320],[1632,320],[1728,320],[1792,320],[1824,320],[1856,320],[1888,320],[2048,320],[2208,320],[64,352],[128,352],[416,352],[448,352],[1088,352],[1248,352],[1312,352],[1408,352],[1568,352],[1600,352],[1632,352],[1760,352],[2080,352],[2112,352],[2144,352],[2176,352],[0,384],[512,384],[544,384],[1184,384],[1344,384],[1376,384],[1664,384],[1792,384],[32,416],[64,416],[256,416],[736,416],[768,416],[800,416],[832,416],[1664,416],[1760,416],[1824,416],[0,448],[128,448],[160,448],[192,448],[224,448],[288,448],[704,448],[864,448],[896,448],[928,448],[1696,448],[1728,448],[1824,448],[0,480],[192,480],[320,480],[352,480],[384,480],[704,480],[960,480],[992,480],[1792,480]]
],
    level2: [
[[127,126,127,126,127,126,127,126,127,32,127,32,127,234,235,170,219,171,32,32,32,32,143,142,143,142,143,126,127,126,127,126,127,126,127,126,127,1,1,1,1,1,1,1,1,1,1,1,1,1],[143,142,143,142,143,142,143,142,143,142,143,142,143,82,70,234,235,236,32,32,32,32,127,126,127,126,127,142,143,142,143,142,143,142,143,142,143,1,1,1,1,1,1,1,1,1,1,1,1,1],[127,126,127,126,127,126,127,126,127,32,127,32,127,32,145,70,70,70,32,149,149,149,156,150,143,142,143,126,127,126,127,126,127,126,127,126,127,1,1,1,1,1,1,1,1,1,1,1,1,1],[143,142,143,142,143,142,143,142,143,142,143,142,143,142,143,145,70,70,32,165,173,172,165,157,150,126,127,142,143,142,143,142,143,142,143,142,143,1,1,1,1,1,1,1,1,1,1,1,1,1],[127,126,127,148,149,150,127,126,127,32,127,32,127,32,127,69,70,70,32,165,157,156,165,165,157,149,149,150,127,126,127,126,127,126,127,126,127,1,1,1,1,1,1,1,1,1,1,1,1,1],[143,142,148,156,165,166,143,142,143,142,143,142,143,142,143,85,70,130,32,165,165,165,165,165,165,173,181,182,143,142,143,142,143,142,143,142,143,1,1,1,1,1,1,1,1,1,1,1,1,1],[127,148,156,165,165,157,149,149,150,32,127,32,127,32,127,101,102,103,32,181,172,165,165,165,165,166,127,126,127,126,127,126,127,126,127,126,127,1,1,1,1,1,1,1,1,1,1,1,1,1],[143,164,202,203,203,203,204,173,182,142,148,150,143,142,143,142,143,142,143,142,164,165,173,181,181,182,143,142,143,142,143,142,143,142,143,142,143,1,1,1,1,1,1,1,1,1,1,1,1,1],[127,164,218,219,171,235,236,166,127,148,156,166,127,32,127,32,127,32,127,32,180,181,182,126,127,126,127,126,127,126,127,126,127,126,127,126,127,1,1,1,1,1,1,1,1,1,1,1,1,1],[143,164,234,235,236,173,181,182,143,164,165,166,143,142,143,142,143,142,143,142,143,142,143,142,143,142,143,142,143,142,143,142,143,142,143,142,143,1,1,1,1,1,1,1,1,1,1,1,1,1],[127,164,165,165,173,182,127,126,127,164,165,157,149,150,127,32,127,32,127,32,127,32,127,126,127,126,127,126,127,126,127,126,127,126,127,126,127,1,1,1,1,1,1,1,1,1,1,1,1,1],[143,180,181,181,182,142,143,142,143,180,181,172,165,166,143,142,143,142,143,142,143,142,143,142,143,142,143,142,143,142,143,142,143,142,143,142,143,1,1,1,1,1,1,1,1,1,1,1,1,1],[127,126,127,126,127,126,127,126,127,32,127,180,181,182,127,32,127,32,151,152,152,153,127,126,127,126,127,126,127,126,127,126,127,126,127,126,127,1,1,1,1,1,1,1,1,1,1,1,1,1],[143,142,143,142,143,142,143,142,143,142,143,142,143,142,143,142,143,142,167,168,219,169,143,142,143,142,143,142,143,142,143,142,143,142,143,142,143,1,1,1,1,1,1,1,1,1,1,1,1,1],[127,126,127,126,127,126,127,126,127,32,127,32,127,32,127,32,127,148,156,170,175,185,127,69,70,87,127,126,127,126,127,126,127,126,127,126,127,1,1,1,1,1,1,1,1,1,1,1,1,1],[143,142,143,142,143,142,143,142,143,142,143,142,143,142,143,142,143,164,165,173,182,142,143,85,143,142,143,142,143,142,143,142,143,142,143,142,143,1,1,1,1,1,1,1,1,1,1,1,1,1]],[[0,0,0,0,0,0,0,0,0,254,84,85,70,0,253,0,0,253,82,93,108,109,106,107,104,105,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,359,360,239,0,100,101,90,0,269,253,253,269,98,99,124,125,122,123,120,121,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[357,358,0,0,0,0,0,240,241,242,116,117,106,107,0,269,269,0,114,115,140,141,138,139,136,137,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,352,353,354,355,356,256,257,258,132,133,122,123,144,222,0,223,72,73,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,240,210,257,211,242,0,138,139,160,327,328,239,72,73,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[355,356,269,0,269,0,272,273,273,273,274,0,0,259,84,343,344,0,88,89,0,270,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,269,269,0,0,0,0,0,0,0,100,359,360,108,109,105,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,269,0,0,0,0,0,0,0,357,358,0,240,242,116,117,118,124,125,121,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,256,258,132,133,134,140,141,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[360,269,0,222,0,0,0,0,0,0,0,0,272,274,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,269,269,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,269,0,269,0,0,0,0,0,0,0,0,355,356,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[358,0,0,243,0,0,0,0,0,0,41,0,0,0,0,361,362,363,364,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,355,356,0,0,0,0,0,0,0,0,0,0,0,0,0,0,240,241,242,0,0,0,53,54,55,60,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[340,275,0,0,355,356,68,69,70,0,0,0,0,0,41,0,0,272,273,274,0,0,68,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[364,0,0,0,0,0,84,85,70,82,0,0,0,0,0,0,0,0,0,0,0,0,84,0,87,34,33,82,87,87,76,77,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]],[[325,326,304,305,306,0,343,344,223,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[341,342,320,321,322,323,324,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,336,337,338,339,340,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[323,324,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[339,340,253,0,253,0,0,0,0,309,310,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,253,253,0,0,325,326,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,253,0,0,0,0,0,0,0,341,342,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[328,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[344,253,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[310,0,0,0,0,253,253,0,0,0,0,0,0,323,324,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[326,0,253,0,253,0,0,0,0,0,0,0,0,339,340,329,330,331,332,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[342,323,324,0,0,0,0,0,0,0,0,0,0,0,0,345,346,347,348,0,0,0,0,329,330,331,332,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,339,340,0,323,324,0,37,39,40,41,0,0,0,0,0,0,0,0,0,0,0,0,345,346,347,348,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[324,0,309,310,339,340,52,53,55,56,57,0,0,0,0,0,0,0,0,0,0,0,52,361,362,363,364,61,38,39,40,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[323,310,325,326,327,328,0,0,0,72,51,38,39,40,0,0,0,0,0,0,0,0,0,0,0,0,76,77,54,55,56,61,40,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[325,326,341,342,343,344,0,0,0,0,67,54,55,56,57,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,56,57,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]],[[288,0],[800,0],[192,32],[224,32],[256,32],[320,32],[672,32],[704,32],[800,32],[0,64],[32,64],[320,64],[640,64],[736,64],[768,64],[64,96],[96,96],[128,96],[160,96],[192,96],[352,96],[384,96],[608,96],[416,128],[608,128],[0,160],[32,160],[64,160],[128,160],[448,160],[608,160],[672,160],[160,192],[192,192],[448,192],[608,192],[32,224],[288,224],[320,224],[448,224],[608,224],[480,256],[512,256],[544,256],[576,256],[0,288],[32,288],[160,320],[192,320],[64,352],[128,352],[416,352],[448,352],[0,384],[512,384],[544,384],[32,416],[64,416],[256,416],[736,416],[768,416],[800,416],[832,416],[0,448],[128,448],[160,448],[192,448],[224,448],[288,448],[704,448],[864,448],[896,448],[928,448],[0,480],[192,480],[320,480],[352,480],[384,480],[704,480],[960,480],[992,480]]
    ]
};

var currentLevel = 'level1';
var ground1 = levels[currentLevel][0];
var ground2 = levels[currentLevel][1];
var top1 = levels[currentLevel][2];
var blockedPositions = levels[currentLevel][3];
var tileSize = 32;
var rowTileCount = ground1.length;
var colTileCount = ground1[0].length;
var imageNumTiles = 16;
var tilesetImage;
var mapOffset = 0;
var mapOffset2 = 0;
var lastTime;
var fps = 0;
var pause = false;
var gameWidth = document.getElementById('inner-wrapper').offsetWidth;
var gameHeight = document.getElementById('inner-wrapper').offsetHeight;
var innerHp = document.getElementById('inner-hp');
var rain = document.getElementById('rain');
var moveRight = false;
var fpsELement = document.getElementById('fps');
var leftElement = document.getElementById('left');
var rightElement = document.getElementById('right');
var spritePath = 'img/sprites.png';
var animationPath = 'img/animatedTiles.png';
var bullets = [];
var enemies = [];
var animations = [];
var blocked = [];
var explosions = [];
var lastFire = Date.now();
var playerInFight = false;
var gameTime = 0;
var hitEnemy = false;
var terrainPattern;
var sound = false;
var direction = 'right';
var playerSpeed = 120; //120
var bulletSpeed = 500;
var collision = false;
var gameStarted = false;
var soundStarted = false;
var helpMenu = '';


//////////////////////////////////////////////
// Define sounds                            //
//////////////////////////////////////////////
$.mbAudio.sounds = {
    effectSprite: {
        id    : "effectSprite",
        ogg   : "sounds/effectSprite.ogg",
        mp3   : "sounds/effectSprite.mp3",
        sprite: {
            start               : {id: "start", start: 12.3, end: 17, loop: false},
            hit1                : {id: "hit1", start: 18, end: 19, loop: false},
            hit2                : {id: "hit2", start: 20, end: 21, loop: false}
        }
    },

    effectSprite2: {
        id    : "effectSprite2",
        ogg   : "sounds/effectSprite.ogg",
        mp3   : "sounds/effectSprite.mp3",
        sprite: {
            thunderstorm        : {id: "thunderstorm", start: 0, end: 12.25, loop: true},
            grunt1              : {id: "grunt1", start: 22, end: 22.5, loop: false},
            grunt2              : {id: "grunt2", start: 23, end: 23.5, loop: false},
            grunt3              : {id: "grunt3", start: 24, end: 25, loop: false},
            grunt4              : {id: "grunt4", start: 25, end: 26, loop: false},
            grunt5              : {id: "grunt5", start: 27, end: 28, loop: false}
        }
    },

    backgroundSprite: {
        id    : "backgroundSprite",
        ogg   : "sounds/backgroundSprite.ogg",
        mp3   : "sounds/backgroundSprite.mp3",
        sprite: {
            intro       : {id: "intro", start: 0, end: 114, loop: true},
            level1      : {id: "level1", start: 115, end: 253, loop: true}
        }
    }
};

function audioIsReady(){
    // Sound loaded
    soundStarted = true;
    if(isStandAlone || !isDevice){
        if( !gameStarted ){
            $.mbAudio.play('backgroundSprite', 'intro');
            $.mbAudio.play('effectSprite2', 'thunderstorm');
        } else{
            $.mbAudio.play('backgroundSprite', currentLevel);
        }
    }
}


//////////////////////////////////////////////
// Rain                                     //
//////////////////////////////////////////////
var particules = [];
var gouttes = [];
var nombrebase = 5;
var nombreb = 1;
var raining = true;
var controls = {
    rain : 2,
    Object : "Nothing",
    alpha : 0,
    color : 200,
    auto : false,
    opacity : 0.5,
    saturation : 20,
    lightness : 50,
    back : 100,
    red : 0,
    green : 0,
    blue : 0,
    multi : false,
    speed : 2
};

function Rain( X, Y, nombre ){
    if (!nombre) {
        nombre = nombreb;
    }
    while (nombre--) {
        particules.push( 
        {
            vitesseX : (Math.random() * 0.25),
            vitesseY : (Math.random() * 9) + 1,
            X : X,
            Y : Y,
            alpha : 1,
            couleur : "hsla(" + controls.color + "," + controls.saturation + "%, " + controls.lightness + "%," + controls.opacity + ")",
        })
    }
}

function explosion( X, Y, couleur, nombre ){
    if (!nombre) {
        nombre = nombrebase;
    }
    while (nombre--) {
        gouttes.push( 
        {
            vitesseX : (Math.random() * 4-2 ),
            vitesseY : (Math.random() * -4 ),
            X : X,
            Y : Y,
            radius : 0.65 + Math.floor(Math.random() *1.6),
            alpha : 1,
            couleur : couleur
        })
    }
}


//////////////////////////////////////////////
// Create player                            //
//////////////////////////////////////////////
var player = {
    health: playerAttr.nudeGuy.health,
    currentHealth: playerAttr.nudeGuy.health,
    healthGeneration: playerAttr.nudeGuy.healthGeneration,
    damage: playerAttr.nudeGuy.damage,
    spriteOffset: playerAttr.nudeGuy.spriteOffset,
    spriteHeight: playerAttr.nudeGuy.spriteHeight,
    hitbox: playerAttr.nudeGuy.hitbox,
    walkAnimationSpeed: playerAttr.nudeGuy.walkAnimationSpeed,
    fightAnimationSpeed: playerAttr.nudeGuy.fightAnimationSpeed,
    hitPlayer: false,
    pos: [25, 215],
    sprite: new Sprite(spritePath, [0, 0], [151, 46], 0, [0], 'horizontal', false, false) // url, pos, size, speed, frames, dir, once, inProgress
};


//////////////////////////////////////////////
// Create enemies                           //
//////////////////////////////////////////////
enemies.push({
    attacking: false,
    alternativeDir: '',
    pos: [400, 400],
    health: enemyAttr.zombie.health,
    currentHealth: enemyAttr.zombie.health,
    damage: enemyAttr.zombie.damage,
    aggroRange: enemyAttr.zombie.aggroRange,
    spriteOffset: enemyAttr.zombie.spriteOffset,
    spriteHeight: enemyAttr.zombie.spriteHeight,
    hitbox: enemyAttr.zombie.hitbox,
    walkAnimationSpeed: enemyAttr.zombie.walkAnimationSpeed,
    fightAnimationSpeed: enemyAttr.zombie.fightAnimationSpeed,
    speed: enemyAttr.zombie.speed,
    sprite: new Sprite(spritePath, [enemyAttr.zombie.spriteOffset, enemyAttr.zombie.spriteHeight], [151, 46], 0, [0], 'horizontal', false, false)
});

enemies.push({
    attacking: false,
    alternativeDir: '',
    pos: [700, 170],
    health: enemyAttr.zombie.health,
    currentHealth: enemyAttr.zombie.health,
    damage: enemyAttr.zombie.damage,
    aggroRange: enemyAttr.zombie.aggroRange,
    spriteOffset: enemyAttr.zombie.spriteOffset,
    spriteHeight: enemyAttr.zombie.spriteHeight,
    hitbox: enemyAttr.zombie.hitbox,
    walkAnimationSpeed: enemyAttr.zombie.walkAnimationSpeed,
    fightAnimationSpeed: enemyAttr.zombie.fightAnimationSpeed,
    speed: enemyAttr.zombie.speed,
    sprite: new Sprite(spritePath, [enemyAttr.zombie.spriteOffset, 0], [151, 46], 0, [0], 'horizontal', false, false)
});

enemies.push({
    attacking: false,
    alternativeDir: '',
    pos: [1270, 60],
    health: enemyAttr.nudeGuy.health,
    currentHealth: enemyAttr.nudeGuy.health,
    damage: enemyAttr.nudeGuy.damage,
    aggroRange: enemyAttr.nudeGuy.aggroRange,
    spriteOffset: enemyAttr.nudeGuy.spriteOffset,
    spriteHeight: enemyAttr.nudeGuy.spriteHeight,
    hitbox: enemyAttr.nudeGuy.hitbox,
    walkAnimationSpeed: enemyAttr.nudeGuy.walkAnimationSpeed,
    fightAnimationSpeed: enemyAttr.nudeGuy.fightAnimationSpeed,
    speed: enemyAttr.nudeGuy.speed,
    sprite: new Sprite(spritePath, [enemyAttr.nudeGuy.spriteOffset, enemyAttr.zombie.spriteHeight], [151, 46], 0, [0], 'horizontal', false, false)
});

enemies.push({
    attacking: false,
    alternativeDir: '',
    pos: [1705, 270],
    health: enemyAttr.nudeGuy.health,
    currentHealth: enemyAttr.nudeGuy.health,
    damage: enemyAttr.nudeGuy.damage,
    aggroRange: enemyAttr.nudeGuy.aggroRange,
    spriteOffset: enemyAttr.nudeGuy.spriteOffset,
    spriteHeight: enemyAttr.nudeGuy.spriteHeight,
    hitbox: enemyAttr.nudeGuy.hitbox,
    walkAnimationSpeed: enemyAttr.nudeGuy.walkAnimationSpeed,
    fightAnimationSpeed: enemyAttr.nudeGuy.fightAnimationSpeed,
    speed: enemyAttr.nudeGuy.speed,
    sprite: new Sprite(spritePath, [enemyAttr.nudeGuy.spriteOffset, enemyAttr.zombie.spriteHeight], [151, 46], 0, [0], 'horizontal', false, false)
});

enemies.push({
    attacking: false,
    alternativeDir: '',
    pos: [1150, 425],
    health: enemyAttr.zombie.health,
    currentHealth: enemyAttr.zombie.health,
    damage: enemyAttr.zombie.damage,
    aggroRange: enemyAttr.zombie.aggroRange,
    spriteOffset: enemyAttr.zombie.spriteOffset,
    spriteHeight: enemyAttr.zombie.spriteHeight,
    hitbox: enemyAttr.zombie.hitbox,
    walkAnimationSpeed: enemyAttr.zombie.walkAnimationSpeed,
    fightAnimationSpeed: enemyAttr.zombie.fightAnimationSpeed,
    speed: enemyAttr.zombie.speed,
    sprite: new Sprite(spritePath, [enemyAttr.zombie.spriteOffset, 0], [151, 46], 0, [0], 'horizontal', false, false)
});

enemies.push({
    attacking: false,
    alternativeDir: '',
    pos: [1480, 350],
    health: enemyAttr.zombie.health,
    currentHealth: enemyAttr.zombie.health,
    damage: enemyAttr.zombie.damage,
    aggroRange: enemyAttr.zombie.aggroRange,
    spriteOffset: enemyAttr.zombie.spriteOffset,
    spriteHeight: enemyAttr.zombie.spriteHeight,
    hitbox: enemyAttr.zombie.hitbox,
    walkAnimationSpeed: enemyAttr.zombie.walkAnimationSpeed,
    fightAnimationSpeed: enemyAttr.zombie.fightAnimationSpeed,
    speed: enemyAttr.zombie.speed,
    sprite: new Sprite(spritePath, [enemyAttr.zombie.spriteOffset, enemyAttr.zombie.spriteHeight], [151, 46], 0, [0], 'horizontal', false, false)
});

enemies.push({
    attacking: false,
    alternativeDir: '',
    pos: [2100, 260],
    health: enemyAttr.zombie.health,
    currentHealth: enemyAttr.zombie.health,
    damage: enemyAttr.zombie.damage,
    aggroRange: enemyAttr.zombie.aggroRange,
    spriteOffset: enemyAttr.zombie.spriteOffset,
    spriteHeight: enemyAttr.zombie.spriteHeight,
    hitbox: enemyAttr.zombie.hitbox,
    walkAnimationSpeed: enemyAttr.zombie.walkAnimationSpeed,
    fightAnimationSpeed: enemyAttr.zombie.fightAnimationSpeed,
    speed: enemyAttr.zombie.speed,
    sprite: new Sprite(spritePath, [enemyAttr.zombie.spriteOffset, enemyAttr.zombie.spriteHeight], [151, 46], 0, [0], 'horizontal', false, false)
});


//////////////////////////////////////////////
// Create animations                        //
//////////////////////////////////////////////
animations.push({
    pos: [1728, 282],
    sprite: new Sprite(animationPath, [0, 0], [32, 64], 7, [0, 1, 2, 3, 4, 5])
});


//////////////////////////////////////////////
// Main game loop                           //
//////////////////////////////////////////////
function main() {
    var now = Date.now();
    var dt = (now - lastTime) / 1000.0;

    if( !pause ){
        update(dt);
        render();
    }

    /*delta = (new Date().getTime() - lastTime)/1000;
    if( fps > Math.floor(1/delta) ){

        fpsELement.innerHTML = fps;
    }
    fps = Math.floor(1/delta);*/

    lastTime = now;

    requestAnimFrame(main);
}


//////////////////////////////////////////////
// Update game objects                      //
//////////////////////////////////////////////
function update(dt) {
    gameTime += dt;

    updateEntities(dt);

    handleInput(dt);
    
    checkCollisions();

    checkHealth(dt);

    playerHitting();

    //console.log( player.pos[0] + mapOffset, player.pos[1] + mapOffset2 );

    // Rain
    if( raining ){
        var particuleslocales = particules;
        var goutteslocales = gouttes;
        
        for (var i = 0, particulesactives; particulesactives = particuleslocales[i]; i++) {
            particulesactives.X += particulesactives.vitesseX;
            particulesactives.Y += particulesactives.vitesseY+5;
            if (particulesactives.Y > rain.height-15) {
                particuleslocales.splice(i--, 1);
                explosion(particulesactives.X, particulesactives.Y, particulesactives.couleur);
            }
        }

        var i = controls.rain;
        while (i--) {
            Rain(Math.floor((Math.random()*rain.width)), -15);
        }
    }
}


//////////////////////////////////////////////
// Draw ground layers 1 and 2               //
//////////////////////////////////////////////
function drawImage(){
    for (var r = 0; r < rowTileCount; r++) {
        
        for (var c = 0; c < colTileCount; c++) {
            var tile = ground1[ r ][ c ];
            var tileRow = (tile / imageNumTiles) | 0;
            var tileCol = (tile % imageNumTiles) | 0;

            ctx2.drawImage(tilesetImage, (tileCol * tileSize), (tileRow * tileSize), tileSize, tileSize, (c * tileSize), (r * tileSize), tileSize, tileSize);

            tile = ground2[ r ][ c ];
            tileRow = (tile / imageNumTiles) | 0;
            tileCol = (tile % imageNumTiles) | 0;

            ctx2.drawImage(tilesetImage, (tileCol * tileSize), (tileRow * tileSize), tileSize, tileSize, (c * tileSize), (r * tileSize), tileSize, tileSize);
        }
    }
}


//////////////////////////////////////////////
// Draw top layer                           //
//////////////////////////////////////////////
function drawImage2(){
    for (var r = 0; r < rowTileCount; r++) {
        
        for (var c = 0; c < colTileCount; c++) {
            var tile = top1[ r ][ c ];
            var tileRow = (tile / imageNumTiles) | 0;
            var tileCol = (tile % imageNumTiles) | 0;

            ctx3.drawImage(tilesetImage, (tileCol * tileSize), (tileRow * tileSize), tileSize, tileSize, (c * tileSize), (r * tileSize), tileSize, tileSize);
        }
    }
}


//////////////////////////////////////////////
// Handle input                             //
//////////////////////////////////////////////
function handleInput(dt) {

    // Set movement values
    if( input.isDown('UP') || input.isDown('DOWN') || input.isDown('LEFT') || input.isDown('RIGHT') ){
        player.sprite.frames = [0, 1, 2, 3];
        player.sprite.speed = player.walkAnimationSpeed;
        if( player.sprite.inProgress ){
            player.sprite._index = 0;
        }
        player.sprite.inProgress = false;
        var movement = Math.floor(playerSpeed * dt);
    }

    // Move left
    if( input.isDown('LEFT') ){
        player.sprite.pos = [player.spriteOffset, player.spriteHeight*3];
        direction = 'left';

        // Check collision
        collision = false;
        for(var i=0; i<blocked.length; i++) {
            if( boxCollides(blocked[i].pos, blocked[i].sprite.size, [ player.pos[0] - Math.floor(playerSpeed * dt) + player.hitbox[0], player.pos[1] ], [ player.hitbox[1], player.spriteHeight ]) ){
                collision = true;
            }
        }
        for( var i=0; i<enemies.length; i++ ){
            if( boxCollides([enemies[i].pos[0] + enemies[i].hitbox[0], enemies[i].pos[1]], [enemies[i].hitbox[1], enemies[i].spriteHeight], [ player.pos[0] - Math.floor(playerSpeed * dt) + player.hitbox[0], player.pos[1] ], [ player.hitbox[1], player.spriteHeight ]) ){
                collision = true;
            }
        }

        if( !collision ){
            if( player.pos[0] + player.hitbox[0] < gameWidth / 2 && player.pos[0] + player.hitbox[0] > (gameWidth / 2) - 10 && mapOffset > 0 ){
                // Move map not player
                mapOffset -= movement;

                // Don't move too far
                if( mapOffset < 0 ){
                    movement = movement + mapOffset;
                    mapOffset = 0;
                }

                canvas2.style.left = parseInt(canvas2.style.left) + movement + 'px';
                canvas3.style.left = parseInt(canvas3.style.left) + movement + 'px';
                for(var i=0; i<blocked.length; i++) {
                    blocked[i].pos[0] += movement;
                }
                for(var i=0; i<enemies.length; i++) {
                    enemies[i].pos[0] += movement;
                }
                for(var i=0; i<animations.length; i++) {
                    animations[i].pos[0] += movement;
                }
            } else{
                // Move player
                player.pos[0] -= movement;
            }
        }
        collision = false;  
    }

    // Move right
    if( input.isDown('RIGHT') ){
        player.sprite.pos = [player.spriteOffset, player.spriteHeight*2];
        direction = 'right';
        
        // Check collision
        collision = false;
        for(var i=0; i<blocked.length; i++) {
            if(boxCollides(blocked[i].pos, blocked[i].sprite.size, [ player.pos[0] + Math.floor(playerSpeed * dt) + player.hitbox[0], player.pos[1] ], [ player.hitbox[1], player.spriteHeight ])) {
                collision = true;
            }
        }
        for( var i=0; i<enemies.length; i++ ){
            if( boxCollides([enemies[i].pos[0] + enemies[i].hitbox[0], enemies[i].pos[1]], [enemies[i].hitbox[1], enemies[i].spriteHeight], [ player.pos[0] + Math.floor(playerSpeed * dt) + player.hitbox[0], player.pos[1] ], [ player.hitbox[1], player.spriteHeight ]) ){
                collision = true;
            }
        }

        if( !collision ){
            if( player.pos[0] + player.hitbox[0] > gameWidth / 2 && mapOffset < levels[currentLevel][0][0].length * 32 - gameWidth ){
                // Move map not player
                mapOffset += movement;

                // Don't move too far
                if( mapOffset > levels[currentLevel][0][0].length * 32 - gameWidth ){
                    movement = movement + levels[currentLevel][0][0].length * 32 - gameWidth - mapOffset;
                    mapOffset = levels[currentLevel][0][0].length * 32 - gameWidth;
                }

                canvas2.style.left = parseInt(canvas2.style.left) - movement + 'px';
                canvas3.style.left = parseInt(canvas3.style.left) - movement + 'px';
                for(var i=0; i<blocked.length; i++) {
                    blocked[i].pos[0] -= movement;
                }
                for(var i=0; i<enemies.length; i++) {
                    enemies[i].pos[0] -= movement;
                }
                for(var i=0; i<animations.length; i++) {
                    animations[i].pos[0] -= movement;
                }
            } else{
                // Move player
                player.pos[0] += movement;
            }
        }
        collision = false;   
    }

    // Move down
    if( input.isDown('DOWN') ){
        if( direction === 'left' ){
            player.sprite.pos = [player.spriteOffset, player.spriteHeight*3];
        } else{
            player.sprite.pos = [player.spriteOffset, player.spriteHeight*2];
        }

        // Check collision
        collision = false;
        for(var i=0; i<blocked.length; i++) {
            if(boxCollides(blocked[i].pos, blocked[i].sprite.size, [ player.pos[0] + player.hitbox[0], player.pos[1] + Math.floor(playerSpeed * dt) ], [ player.hitbox[1], player.spriteHeight ])) {
                collision = true;
            }
        }
        for( var i=0; i<enemies.length; i++ ){
            if( boxCollides([enemies[i].pos[0] + enemies[i].hitbox[0], enemies[i].pos[1]], [enemies[i].hitbox[1], enemies[i].spriteHeight], [ player.pos[0] + player.hitbox[0], player.pos[1] + Math.floor(playerSpeed * dt) ], [ player.hitbox[1], player.spriteHeight ]) ){
                collision = true;
            }
        }

        if( !collision ){
            if( player.pos[1] > gameHeight / 2 && mapOffset2 < 512 - gameHeight ){
                // Move map not player
                mapOffset2 += movement;

                // Don't move too far
                if( mapOffset2 > 512 - gameHeight ){
                    movement = movement + 512 - gameHeight - mapOffset2;
                    mapOffset2 = 512 - gameHeight;                    
                }

                canvas2.style.top = parseInt(canvas2.style.top) - movement + 'px';
                canvas3.style.top = parseInt(canvas3.style.top) - movement + 'px';
                for(var i=0; i<blocked.length; i++) {
                    blocked[i].pos[1] -= movement;
                }
                for(var i=0; i<enemies.length; i++) {
                    enemies[i].pos[1] -= movement;
                }
                for(var i=0; i<animations.length; i++) {
                    animations[i].pos[1] -= movement;
                }
            } else{
                // Move player
                player.pos[1] += movement;
            }
        }
        collision = false;
    }

    // Move up
    if( input.isDown('UP') ){
        if( direction === 'left' ){
            player.sprite.pos = [player.spriteOffset, player.spriteHeight*3];
        } else{
            player.sprite.pos = [player.spriteOffset, player.spriteHeight*2];
        }

        // Check collision
        collision = false;
        for(var i=0; i<blocked.length; i++) {
            if(boxCollides(blocked[i].pos, blocked[i].sprite.size, [ player.pos[0] + player.hitbox[0], player.pos[1] - Math.floor(playerSpeed * dt) ], [ player.hitbox[1], player.spriteHeight ])) {
                collision = true;
            }
        }
        for( var i=0; i<enemies.length; i++ ){
            if( boxCollides([enemies[i].pos[0] + enemies[i].hitbox[0], enemies[i].pos[1]], [enemies[i].hitbox[1], enemies[i].spriteHeight], [ player.pos[0] + player.hitbox[0], player.pos[1] - Math.floor(playerSpeed * dt) ], [ player.hitbox[1], player.spriteHeight ]) ){
                collision = true;
            }
        }

        if( !collision ){
            if( player.pos[1] < gameHeight / 2 && mapOffset2 > 0 ){
                // Move map not player
                mapOffset2 -= movement;
                
                // Don't move too far
                if( mapOffset2 < 0 ){
                    movement = movement + mapOffset2;
                    mapOffset2 = 0;
                }

                canvas2.style.top = parseInt(canvas2.style.top) + movement + 'px';
                canvas3.style.top = parseInt(canvas3.style.top) + movement + 'px';
                for(var i=0; i<blocked.length; i++) {
                    blocked[i].pos[1] += movement;
                }
                for(var i=0; i<enemies.length; i++) {
                    enemies[i].pos[1] += movement;
                }
                for(var i=0; i<animations.length; i++) {
                    animations[i].pos[1] += movement;
                }
            } else{
                // Move player
                player.pos[1] -= movement;
            }
        }
        collision = false; 
    }

    // Default animation
    if( !input.isDown('RIGHT') && !input.isDown('LEFT') && !input.isDown('UP') && !input.isDown('DOWN') && !input.isDown('SPACE') ){
        if( !player.sprite.inProgress ){
            // Reset sprite
            player.sprite.frames = [0];
            if( direction === 'left' ){
                player.sprite.pos = [player.spriteOffset, player.spriteHeight];
            } else{
                player.sprite.pos = [player.spriteOffset, 0];
            }
        }
    }

    // Attack animation
    if( input.isDown('SPACE')
        && !input.isDown('RIGHT')
        && !input.isDown('LEFT')
        && !input.isDown('UP')
        && !input.isDown('DOWN') ){

        player.sprite.speed = player.fightAnimationSpeed;
        player.sprite.inProgress = true;
        if( direction === 'left' ){
            player.sprite.pos = [player.spriteOffset, player.spriteHeight*5];
        } else{
            player.sprite.pos = [player.spriteOffset, player.spriteHeight*4];
        }
        player.sprite.frames = [0, 1, 2, 1];
    }
}


//////////////////////////////////////////////
// Check if something got hit by player     //
//////////////////////////////////////////////
function playerHitting(){
    if( player.sprite.inProgress ){
        // Successful hit
        var idx = Math.floor(player.sprite._index);
        var frame = player.sprite.frames[idx % player.sprite.frames.length];

        if( frame === player.sprite.frames.length - 2 && hitEnemy ){
            hitEnemy = false;
            for( var i=0; i<enemies.length; i++ ){
                // Enemy on left side and in range
                if( direction === 'left'
                    && enemies[i].pos[0] + enemies[i].hitbox[1] <= player.pos[0]
                    && enemies[i].pos[0] > player.pos[0] - enemies[i].hitbox[1] - 10
                    && enemies[i].pos[1] < player.pos[1] + player.spriteHeight / 2
                    && enemies[i].pos[1] > player.pos[1] - player.spriteHeight / 2 ){
                    dealDamageToEnemy( enemies[i], i );

                // Enemy on right side and in range
                } else if( direction === 'right'
                    && enemies[i].pos[0] >= player.pos[0] + player.hitbox[1]
                    && enemies[i].pos[0] < player.pos[0] + player.hitbox[1] + 10
                    && enemies[i].pos[1] < player.pos[1] + player.spriteHeight / 2
                    && enemies[i].pos[1] > player.pos[1] - player.spriteHeight / 2 ){
                    dealDamageToEnemy( enemies[i], i );
                }
            }
            
        } else if( frame === player.sprite.frames.length - 3 ){
            hitEnemy = true;
        }
    }
}


//////////////////////////////////////////////
// Update the entities                      //
//////////////////////////////////////////////
function updateEntities(dt) {
    // Update the player sprite animation
    player.sprite.update(dt);

    // Update all the bullets
    /*for(var i=0; i<bullets.length; i++) {
        var bullet = bullets[i];

        switch(bullet.dir) {
        case 'up': bullet.pos[1] -= bulletSpeed * dt; break;
        case 'down': bullet.pos[1] += bulletSpeed * dt; break;
        default:
            bullet.pos[0] += bulletSpeed * dt;
        }

        // Remove the bullet if it goes offscreen
        if(bullet.pos[1] < 0 || bullet.pos[1] > canvas.height ||
           bullet.pos[0] > canvas.width) {
            bullets.splice(i, 1);
            i--;
        }
    }*/

    // Update all the enemies
    for( var i=0; i<enemies.length; i++ ){
        enemies[i].sprite.update(dt);

        // Move if inside range
        if( enemies[i].pos[0] - player.pos[0] < enemies[i].aggroRange || enemies[i].aggroRange === 0 ){
            enemies[i].aggroRange = 0;
            moveEnemy( enemies[i].pos, i, dt );
        }
    }

    // Update all the animations
    for( var i=0; i<animations.length; i++ ){
        animations[i].sprite.update(dt);
    }
}


//////////////////////////////////////////////
// Check collisions                         //
//////////////////////////////////////////////
function checkCollisions(){
    // Check if player is at map border
    checkObjectBounds(player);

    // Check if enemies are at map border
    /*for( var i=0; i<enemies.length; i++ ){
        if(enemies[i].pos[1] < 0) {
            enemies[i].pos[1] = 0;
        }
        else if(enemies[i].pos[1] > canvas.height - enemies[i].sprite.size[1]) {
            enemies[i].pos[1] = canvas.height - enemies[i].sprite.size[1];
        }
    }*/
    
    // Run collision detection for all enemies and bullets
    /*for(var i=0; i<enemies.length; i++) {
        var pos = enemies[i].pos;
        var size = enemies[i].sprite.size;

        for(var j=0; j<bullets.length; j++) {
            var pos2 = bullets[j].pos;
            var size2 = bullets[j].sprite.size;

            if(boxCollides(pos, size, pos2, size2)) {
                // Remove the enemy
                enemies.splice(i, 1);
                i--;

                // Add an explosion
                explosions.push({
                    pos: pos,
                    sprite: new Sprite(spritePath,
                                       [0, 117],
                                       [39, 39],
                                       16,
                                       [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
                                       null,
                                       true)
                });

                // Remove the bullet and stop this iteration
                bullets.splice(j, 1);
                break;
            }
        }

        if(boxCollides(pos, size, player.pos, player.sprite.size)) {
            console.log('BÄM');
            //gameOver();
        }
    }*/
}


//////////////////////////////////////////////
// Check if object is at map border         //
//////////////////////////////////////////////
function checkObjectBounds(object){
    // Check bounds
    if(object.pos[0] + object.hitbox[0] < 0) {
        object.pos[0] = 0 - object.hitbox[0];
    }
    else if(object.pos[0] + object.hitbox[0] > gameWidth - object.hitbox[1]) {
        object.pos[0] = gameWidth - object.hitbox[1] - object.hitbox[0];
    }

    if(object.pos[1] < 0) {
        object.pos[1] = 0;
    }
    else if(object.pos[1] > gameHeight - object.sprite.size[1]) {
        object.pos[1] = gameHeight - object.sprite.size[1];
    }
}


//////////////////////////////////////////////
// Draw everything                          //
//////////////////////////////////////////////
function render(){
    // Clear canvas hack
    canvas.width = canvas.width;
    canvas4.width = canvas4.width;

    // Render entities
    renderEntities(enemies);
    renderEntity(player);
    renderEntities(animations);
    //renderEntities(bullets);
    //renderEntities(blocked);

    // Render enemy health bars
    for( var i=0; i<enemies.length; i++ ){
        if( enemies[i].currentHealth < enemies[i].health ){
            var healthWidth = (100 / enemies[i].health) * enemies[i].currentHealth,
                damageWidth = 0;

            // Health bar
            healthWidth = Math.floor( (enemies[i].hitbox[1] / 100) * healthWidth );
            drawLine( 2, '#090', enemies[i].pos[0] + enemies[i].hitbox[0], enemies[i].pos[1] - 5, enemies[i].pos[0] + enemies[i].hitbox[0] + healthWidth, enemies[i].pos[1] - 5 );

            // Damage bar
            damageWidth = enemies[i].hitbox[1] - healthWidth;
            drawLine( 2, '#900', enemies[i].pos[0] + enemies[i].hitbox[0] + healthWidth, enemies[i].pos[1] - 5, enemies[i].pos[0] + enemies[i].hitbox[0] + healthWidth + damageWidth, enemies[i].pos[1] - 5 );
        }
    }

    // Rain
    if( raining ){
        rain.width = rain.width;
        ctx5.save();
        ctx5.fillStyle = 'rgba(0,0,0,0)';
        ctx5.fillRect(0, 0, rain.width, rain.height);
        
        var particuleslocales = particules;
        var goutteslocales = gouttes;
        var tau = Math.PI * 2;

        for (var i = 0, particulesactives; particulesactives = particuleslocales[i]; i++) {
                
            ctx5.globalAlpha = particulesactives.alpha;
            ctx5.fillStyle = particulesactives.couleur;
            ctx5.fillRect(particulesactives.X, particulesactives.Y, particulesactives.vitesseY/4, particulesactives.vitesseY);
        }

        ctx5.restore();
    }
}


//////////////////////////////////////////////
// Render entities                          //
//////////////////////////////////////////////
function renderEntities(list) {
    for(var i=0; i<list.length; i++) {
        renderEntity(list[i]);
    }    
}

function renderEntity(entity) {
    ctx.save();
    ctx.translate(entity.pos[0], entity.pos[1]);
    entity.sprite.render(ctx);
    ctx.restore();
}


//////////////////////////////////////////////
// Check and generate health                //
//////////////////////////////////////////////
function checkHealth(dt){
    if( player.currentHealth < player.health && !playerInFight ){
        var addedHealthPoints = player.healthGeneration * dt;
        player.currentHealth += addedHealthPoints;
        innerHp.style.width = (Math.floor(player.currentHealth) / player.health) * 100 + '%';
    }
}


//////////////////////////////////////////////
// Register event handlers                  //
//////////////////////////////////////////////
function eventHandlers(){
    // Main menu
    document.getElementById('play-button').addEventListener('click', function(){
        document.getElementById('inner-wrapper').className = 'started';
        document.getElementById('fog').className = 'started';
        document.getElementById('inner-wrapper').classList.add('play');
        document.getElementById('ridane').style.display = 'none';
        document.getElementById('ridane-glow').style.display = 'none';
        document.getElementById('main-menu').style.display = 'none';
        document.getElementById('game-interface').className = 'started';
        gameStarted = true;

        // Sound
        if( sound ){
            $.mbAudio.play('effectSprite', 'start');
            $.mbAudio.play('effectSprite2', 'thunderstorm');
            $.mbAudio.play('backgroundSprite', 'level1');
        }
    });

    // Pause menu
    document.getElementById('menu').addEventListener('click', function(){
        pause = true;
        document.getElementById('overlay').style.display = 'block';
        document.getElementById('pause-menu').style.display = 'block';
    });

    // Resume button
    document.getElementById('resume-button').addEventListener('click', function(){
        document.getElementById('pause-menu').style.display = 'none';
        document.getElementById('overlay').style.display = 'none';
        pause = false;
    });

    // Help button main
    document.getElementById('help-button-main').addEventListener('click', function(){
        document.getElementById('main-menu').style.display = 'none';
        document.getElementById('help-menu-main').style.display = 'block';
    });

    // Back button help main
    document.getElementById('back-button-help').addEventListener('click', function(){
        document.getElementById('help-menu-main').style.display = 'none';
        document.getElementById('main-menu').style.display = 'block';
    });

    // Help button game
    document.querySelectorAll('#pause-menu .help-button')[0].addEventListener('click', function(){
        helpMenu = 'pause';
        document.getElementById('pause-menu').style.display = 'none';
        document.getElementById('help-menu').style.display = 'block';
    });
    document.querySelectorAll('#game-over-menu .help-button')[0].addEventListener('click', function(){
        helpMenu = 'over';
        document.getElementById('game-over-menu').style.display = 'none';
        document.getElementById('help-menu').style.display = 'block';
    });
    document.querySelectorAll('#level-complete-menu .help-button')[0].addEventListener('click', function(){
        helpMenu = 'complete';
        document.getElementById('level-complete-menu').style.display = 'none';
        document.getElementById('help-menu').style.display = 'block';
    });

    // Back buttons help game
    document.querySelectorAll('.back-button')[0].addEventListener('click', function(){
        document.getElementById('help-menu').style.display = 'none';
        if( helpMenu === 'pause' ){
            document.getElementById('pause-menu').style.display = 'block';
        } else if( helpMenu === 'over' ){
            document.getElementById('game-over-menu').style.display = 'block';
        } else if( helpMenu === 'complete' ){
            document.getElementById('level-complete-menu').style.display = 'block';
        }
    });

    // Play again button
    document.getElementById('play-again-button').addEventListener('click', function(){
        reset();
    });

    // Main menu buttons
    var mainMenuButtons = document.querySelectorAll('.main-menu-button');
    for( var i=0; i<mainMenuButtons.length; i++ ){
        mainMenuButtons[i].addEventListener('click', function(){
            reset();
        });
    }

    // Activate sound button
    document.getElementById('sound').addEventListener('click', function(){
        if( !sound && !soundStarted ){
            $(document).trigger('initAudio');
            sound = true;
        } else if( !sound && soundStarted ){
            $.mbAudio.unMuteAllSounds();
            sound = true;
        } else if( sound ){
            $.mbAudio.muteAllSounds();
            sound = false;
        }
    });
    $(document).on("initAudio", function (){
        $.mbAudio.pause('effectSprite', audioIsReady);
    });
}


//////////////////////////////////////////////
// Game over actions                        //
//////////////////////////////////////////////
function gameOver(){
    pause = true;
    innerHp.style.width = 0;
    document.getElementById('overlay').style.display = 'block';
    document.getElementById('game-over-menu').style.display = 'block';
}


//////////////////////////////////////////////
// Reset game to original state             //
//////////////////////////////////////////////
function reset(){
    window.location.reload();

    //document.getElementById('game-over-menu').style.display = 'none';
    //document.getElementById('overlay').style.display = 'none';

    // Reset variables
    /*gameTime = 0;
    enemies = [];
    bullets = [];
    blocked = [];
    collision = false;
    mapOffset = 0;
    player.pos = [25, 215];*/
}


//////////////////////////////////////
// Initialization                   //
//////////////////////////////////////
function init(){
    // Blocked fields
    for( var i=0; i<blockedPositions.length; i++ ){
        blocked.push({
            pos: blockedPositions[i],
            sprite: new Sprite(spritePath, [0, 0], [32, 1], 1, [10])
        });
    }

    tilesetImage = resources.get('img/tileset.png');
    lastTime = Date.now();
    eventHandlers();

    // Draw layers
    drawImage();
    drawImage2();

    // Main game loop
    main();

    requestTimeout(function(){
        document.getElementById('loading').className = 'done';
        requestTimeout(function(){
            document.getElementById('loading').style.display = 'none';
        }, 1000);
    }, 1000);
}

// Initialize if all ressources are loaded
resources.load([
    spritePath,
    animationPath,
    'img/tileset.png'
]);
resources.onReady(init);


//////////////////////////////////////////////
// Collision                                //
//////////////////////////////////////////////
function collides( x, y, r, b, x2, y2, r2, b2 ){
    return !(r <= x2 || x > r2 ||
             b <= y2 || y > b2);
}

function boxCollides( pos, size, pos2, size2 ){
    return collides(pos[0], pos[1],
                    pos[0] + size[0], pos[1] + size[1],
                    pos2[0], pos2[1],
                    pos2[0] + size2[0], pos2[1] + size2[1]);
}


//////////////////////////////////////////////
// Resize the game                          //
//////////////////////////////////////////////
var resizeTimer;
function setCanvasDimensions(){
    gameWidth = document.getElementById('inner-wrapper').offsetWidth;
    gameHeight = document.getElementById('inner-wrapper').offsetHeight;
}
window.onresize = function(){
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(setCanvasDimensions, 250);
}
window.addEventListener('orientationchange', setCanvasDimensions);


//////////////////////////////////////////////
// Create the canvas elements               //
//////////////////////////////////////////////
// Ground layer canvas
var canvas2 = document.createElement("canvas");
var ctx2 = canvas2.getContext("2d");
document.getElementById('inner-wrapper').appendChild(canvas2);

// Object canvas
var canvas = document.createElement("canvas");
var ctx = canvas.getContext("2d");
document.getElementById('inner-wrapper').appendChild(canvas);

// Top layer canvas
var canvas3 = document.createElement("canvas");
var ctx3 = canvas3.getContext("2d");
document.getElementById('inner-wrapper').appendChild(canvas3);

// UI elements canvas
var canvas4 = document.createElement("canvas");
var ctx4 = canvas4.getContext("2d");
document.getElementById('inner-wrapper').appendChild(canvas4);

// Rain canvas element
var ctx5 = rain.getContext("2d");

// Create and style canvas
var canvasElements = document.getElementsByTagName('canvas');
for( var i=0; i < canvasElements.length; i++ ){
    if( canvasElements[i].getAttribute('id') !== 'rain' ){
        canvasElements[i].width = levels[currentLevel][0][0].length * 32;
        canvasElements[i].height = levels[currentLevel][0].length * 32;
        canvasElements[i].style.left = 0;
        canvasElements[i].style.top = 0;
    }
}


//////////////////////////////////////////////
// Random number                            //
//////////////////////////////////////////////
function getRandom( min, max ){
    return Math.floor(Math.random()*(max-min+1)+min);
}


//////////////////////////////////////////////
// Draw a canvas line                       //
//////////////////////////////////////////////
function drawLine( lineWidth, lineColor, x1, y1, x2, y2 ){
    ctx4.fillStyle = lineColor;
    ctx4.strokeStyle = lineColor;
    ctx4.beginPath();
    ctx4.moveTo(x1, y1);
    ctx4.lineTo(x2, y2);
    ctx4.lineWidth = lineWidth;
    ctx4.stroke();
    ctx4.closePath();
}


//////////////////////////////////////////////
// Check for mobile device                  //
//////////////////////////////////////////////
function mobilecheck(){
    var check = false;
    (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4)))check = true})(navigator.userAgent||navigator.vendor||window.opera);
    return check;
}


//////////////////////////////////////////////
// A cross-browser requestAnimationFrame    //
//////////////////////////////////////////////
var requestAnimFrame = (function(){
    return window.requestAnimationFrame    ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame    ||
        window.oRequestAnimationFrame      ||
        window.msRequestAnimationFrame     ||
        function(callback){
            window.setTimeout(callback, 1000 / 60);
        };
})();


//////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Behaves the same as setTimeout except uses requestAnimationFrame() where possible for better performance //
// @param {function} fn The callback function                                                               //
// @param {int} delay The delay in milliseconds                                                             //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
window.requestTimeout = function(fn, delay) {
    if( !window.requestAnimationFrame       && 
        !window.webkitRequestAnimationFrame && 
        !(window.mozRequestAnimationFrame && window.mozCancelRequestAnimationFrame) && // Firefox 5 ships without cancel support
        !window.oRequestAnimationFrame      && 
        !window.msRequestAnimationFrame)
            return window.setTimeout(fn, delay);
            
    var start = new Date().getTime(),
        handle = new Object();
        
    function loop(){
        var current = new Date().getTime(),
            delta = current - start;
            
        delta >= delay ? fn.call() : handle.value = requestAnimFrame(loop);
    };
    
    handle.value = requestAnimFrame(loop);
    return handle;
};
 

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Behaves the same as clearTimeout except uses cancelRequestAnimationFrame() where possible for better performance //
// @param {int|object} fn The callback function                                                                     //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
window.clearRequestTimeout = function(handle) {
    window.cancelAnimationFrame ? window.cancelAnimationFrame(handle.value) :
    window.webkitCancelAnimationFrame ? window.webkitCancelAnimationFrame(handle.value) :
    window.webkitCancelRequestAnimationFrame ? window.webkitCancelRequestAnimationFrame(handle.value) : /* Support for legacy API */
    window.mozCancelRequestAnimationFrame ? window.mozCancelRequestAnimationFrame(handle.value) :
    window.oCancelRequestAnimationFrame ? window.oCancelRequestAnimationFrame(handle.value) :
    window.msCancelRequestAnimationFrame ? window.msCancelRequestAnimationFrame(handle.value) :
    clearTimeout(handle);
};
//////////////////////////////////////////////
// Move enemy to player                     //
//////////////////////////////////////////////
function moveEnemy( enemyPos, i, dt ){
    var playerX = player.pos[0],
        playerY = player.pos[1],
        enemyX = enemyPos[0],
        enemyY = enemyPos[1]
        enemyCollision = false,
        enemySize = [enemies[i].hitbox[1], enemies[i].spriteHeight],
        movement = Math.floor(enemies[i].speed * dt),
        playerPos = [player.pos[0] + player.hitbox[0], player.pos[1]],
        collisionDir = [false, false, false, false],
        movementDir = [false, false, false, false];



    // Movement left
    if( playerX + player.hitbox[1] + 1 < enemyX && enemies[i].alternativeDir !== 'right' ){
        // Object collision
        for( var j=0; j<blocked.length; j++ ){
            if( boxCollides(blocked[j].pos, blocked[j].sprite.size, [ enemyX - movement + enemies[i].hitbox[0], enemyY ], enemySize) ){
                enemyCollision = true;
                collisionDir[1] = true;
            }
        }

        // Enemy collision
        for( var j=0; j<enemies.length; j++ ){
            if( boxCollides([enemies[j].pos[0] + enemies[j].hitbox[0], enemies[j].pos[1]], [enemies[j].hitbox[1] + 5, enemies[j].spriteHeight], [ enemyX - movement + enemies[i].hitbox[0], enemyY ], enemySize) ){
                if( j != i ){
                    enemyCollision = true;
                    //collisionDir[1] = true;
                }
            }
        }

        // Player collision
        if( boxCollides(playerPos, [player.hitbox[1] + 1, player.spriteHeight], [ enemyX - movement + enemies[i].hitbox[0], enemyY ], enemySize) ){
            enemyCollision = true;
            collisionDir[1] = true;
        }

        if( !enemyCollision ){
            enemies[i].pos[0] -= movement;
            movementDir[1] = true;

            // Sprite direction
            enemies[i].sprite.pos = [enemies[i].spriteOffset, enemies[i].spriteHeight*3];
        }

        enemyCollision = false;
    }

    // Movement right
    if( playerX > enemyX + enemies[i].hitbox[1] + 1 && enemies[i].alternativeDir !== 'left' ){
        // Object collision
        for( var j=0; j<blocked.length; j++ ){
            if( boxCollides(blocked[j].pos, blocked[j].sprite.size, [ enemyX + movement + enemies[i].hitbox[0], enemyY ], enemySize) ){
                enemyCollision = true;
                collisionDir[3] = true;
            }
        }

        // Enemy collision
        for( var j=0; j<enemies.length; j++ ){
            if( boxCollides([enemies[j].pos[0] + enemies[j].hitbox[0], enemies[j].pos[1]], [enemies[j].hitbox[1], enemies[j].spriteHeight], [ enemyX + movement + enemies[i].hitbox[0], enemyY ], [enemies[i].hitbox[1] + 5, enemies[i].spriteHeight]) ){
                if( j != i ){
                    enemyCollision = true;
                    //collisionDir[3] = true;
                }
            }
        }

        // Player collision
        if( boxCollides(playerPos, [player.hitbox[1], player.spriteHeight], [ enemyX + movement + enemies[i].hitbox[0], enemyY ], enemySize) ){
            enemyCollision = true;
            collisionDir[3] = true;
        }

        if( !enemyCollision ){
            enemies[i].pos[0] += movement;
            movementDir[3] = true;

            // Sprite direction
            enemies[i].sprite.pos = [enemies[i].spriteOffset, enemies[i].spriteHeight*2];
        }

        enemyCollision = false;
    }

    // Movement top
    if( playerY < enemyY && enemies[i].alternativeDir !== 'down' ){
        // Object collision
        for( var j=0; j<blocked.length; j++ ){
            if( boxCollides(blocked[j].pos, blocked[j].sprite.size, [ enemyX + enemies[i].hitbox[0], enemyY - movement ], enemySize) ){
                enemyCollision = true;
                collisionDir[2] = true;
            }
        }

        // Enemy collision
        for( var j=0; j<enemies.length; j++ ){
            if( boxCollides([enemies[j].pos[0] + enemies[j].hitbox[0], enemies[j].pos[1]], [enemies[j].hitbox[1], enemies[j].spriteHeight + 1], [ enemyX + enemies[i].hitbox[0], enemyY - movement ], enemySize) ){
                if( j != i ){
                    enemyCollision = true;
                    //collisionDir[2] = true;
                }
            }
        }

        // Player collision
        if( boxCollides(playerPos, [player.hitbox[1], player.spriteHeight + 1], [ enemyX + enemies[i].hitbox[0], enemyY - 1 - movement ], enemySize) ){
            enemyCollision = true;
            collisionDir[2] = true;
        }

        if( !enemyCollision ){
            enemies[i].pos[1] -= movement;
            movementDir[2] = true;

            // Sprite direction
            if( enemyX < playerX ){
                enemies[i].sprite.pos = [enemies[i].spriteOffset, enemies[i].spriteHeight*2];
            } else{
                enemies[i].sprite.pos = [enemies[i].spriteOffset, enemies[i].spriteHeight*3];
            }
        }

        enemyCollision = false;
    }

    // Movement down
    if( playerY > enemyY && enemies[i].alternativeDir !== 'up' ){
        // Object collision
        for( var j=0; j<blocked.length; j++ ){
            if( boxCollides(blocked[j].pos, blocked[j].sprite.size, [ enemyX + enemies[i].hitbox[0], enemyY + movement ], enemySize) ){
                enemyCollision = true;
                collisionDir[0] = true;
            }
        }

        // Enemy collision
        for( var j=0; j<enemies.length; j++ ){
            if( boxCollides([enemies[j].pos[0] + enemies[j].hitbox[0], enemies[j].pos[1]], [enemies[j].hitbox[1], enemies[j].spriteHeight + 1], [ enemyX + enemies[i].hitbox[0], enemyY + movement ], enemySize) ){
                if( j != i ){
                    enemyCollision = true;
                    //collisionDir[0] = true;
                }
            }
        }

        // Player collision
        if( boxCollides(playerPos, [player.hitbox[1], player.spriteHeight + 1], [ enemyX + enemies[i].hitbox[0], enemyY + movement ], enemySize) ){
            enemyCollision = true;
            collisionDir[0] = true;
        }

        if( !enemyCollision ){
            enemies[i].pos[1] += movement;
            movementDir[2] = true;

            // Sprite direction
            if( enemyX < playerX ){
                enemies[i].sprite.pos = [enemies[i].spriteOffset, enemies[i].spriteHeight*2];
            } else{
                enemies[i].sprite.pos = [enemies[i].spriteOffset, enemies[i].spriteHeight*3];
            }
        }

        enemyCollision = false;
    }

    // Blocked coming from right side
    if( collisionDir[1] && !movementDir[0] && !movementDir[2] ){
        // Blocked bottom, move up
        if( collisionDir[0] && !collisionDir[2] ){
            enemies[i].alternativeDir = 'up';
        }

        // Blocked top, move down
        if( collisionDir[2] && !collisionDir[0] ){
            enemies[i].alternativeDir = 'down';
        }

        // Blocked left, move up or down
        if( !collisionDir[2] && !collisionDir[0] ){
            if( enemies[i].alternativeDir !== 'up' && enemies[i].alternativeDir !== 'down' ){
                enemies[i].alternativeDir = 'up down';
            }
        }

        // Blocked bottom and top, move right
        if( collisionDir[2] && collisionDir[0] ){
            enemies[i].alternativeDir = 'right';
        }
    }

    // Blocked coming from left side
    if( collisionDir[3] && !movementDir[0] && !movementDir[2] ){
        // Blocked bottom, move up
        if( collisionDir[0] && !collisionDir[2] ){
            enemies[i].alternativeDir = 'up';
        }

        // Blocked top, move down
        if( collisionDir[2] && !collisionDir[0] ){
            enemies[i].alternativeDir = 'down';
        }

        // Blocked left, move up or down
        if( !collisionDir[2] && !collisionDir[0] ){
            if( enemies[i].alternativeDir !== 'up' && enemies[i].alternativeDir !== 'down' ){
                enemies[i].alternativeDir = 'up down';
            }
        }

        // Blocked bottom and top, move left
        if( collisionDir[2] && collisionDir[0] ){
            enemies[i].alternativeDir = 'left';
        }
    }

    // Blocked coming from top
    if( collisionDir[0] && !movementDir[1] && !movementDir[3] ){
        // Blocked left, move right
        if( collisionDir[1] && !collisionDir[3] ){
            enemies[i].alternativeDir = 'right';
        }

        // Blocked right, move left
        if( collisionDir[3] && !collisionDir[1] ){
            enemies[i].alternativeDir = 'left';
        }

        // Blocked bottom, move left or right
        if( !collisionDir[3] && !collisionDir[1] ){
            if( enemies[i].alternativeDir !== 'left' && enemies[i].alternativeDir !== 'right' ){
                enemies[i].alternativeDir = 'left right';
            }
        }

        // Blocked left and right, move up
        if( collisionDir[3] && collisionDir[1] ){
            enemies[i].alternativeDir = 'up';
        }
    }

    // Blocked coming from bottom
    if( collisionDir[2] && !movementDir[1] && !movementDir[3] ){
        // Blocked left, move right
        if( collisionDir[1] && !collisionDir[3] ){
            enemies[i].alternativeDir = 'right';
        }

        // Blocked right, move left
        if( collisionDir[3] && !collisionDir[1] ){
            enemies[i].alternativeDir = 'left';
        }

        // Blocked top, move left or right
        if( !collisionDir[3] && !collisionDir[1] ){
            if( enemies[i].alternativeDir !== 'left' && enemies[i].alternativeDir !== 'right' ){
                enemies[i].alternativeDir = 'left right';
            }
        }

        // Blocked left and right, move down
        if( collisionDir[3] && collisionDir[1] ){
            enemies[i].alternativeDir = 'down';
        }
    }

    // Random direction
    if( enemies[i].alternativeDir === 'left right' ){
        var random = getRandom(0,1);
        if( random === 0 ){
            enemies[i].alternativeDir = 'left';
        } else{
            enemies[i].alternativeDir = 'right';
        }
    }
    if( enemies[i].alternativeDir === 'up down' ){
        var random = getRandom(0,1);
        if( random === 0 ){
            enemies[i].alternativeDir = 'up';
        } else{
            enemies[i].alternativeDir = 'down';
        }
    }

    // Move to right if blocked
    if( enemies[i].alternativeDir === 'right' ){
        // Object collision
        for( var j=0; j<blocked.length; j++ ){
            if( boxCollides(blocked[j].pos, blocked[j].sprite.size, [ enemyX + movement + enemies[i].hitbox[0], enemyY ], enemySize) ){
                collisionDir[3] = true;
            }
        }

        // Enemy collision
        for( var j=0; j<enemies.length; j++ ){
            if( boxCollides([enemies[j].pos[0] + enemies[j].hitbox[0], enemies[j].pos[1]], [enemies[j].hitbox[1], enemies[j].spriteHeight], [ enemyX + movement + enemies[i].hitbox[0], enemyY ], [enemies[i].hitbox[1] + 5, enemies[i].spriteHeight]) ){
                if( j != i ){
                    collisionDir[3] = true;
                }
            }
        }

        // Player collision
        if( boxCollides(playerPos, [player.hitbox[1], player.spriteHeight], [ enemyX + movement + enemies[i].hitbox[0], enemyY ], enemySize) ){
            collisionDir[3] = true;
        }



        // Movement
        if( ( !movementDir[0] && !movementDir[2] && !collisionDir[3] ) ){
            enemies[i].pos[0] += movement;
            movementDir[1] = true;

            // Sprite direction
            enemies[i].sprite.pos = [enemies[i].spriteOffset, enemies[i].spriteHeight*2];
        } else{
            enemies[i].alternativeDir = '';
        }
    }

    // Move to left if blocked
    if( enemies[i].alternativeDir === 'left' ){
        // Object collision
        for( var j=0; j<blocked.length; j++ ){
            if( boxCollides(blocked[j].pos, blocked[j].sprite.size, [ enemyX - movement + enemies[i].hitbox[0], enemyY ], enemySize) ){
                collisionDir[1] = true;
            }
        }

        // Enemy collision
        for( var j=0; j<enemies.length; j++ ){
            if( boxCollides([enemies[j].pos[0] + enemies[j].hitbox[0], enemies[j].pos[1]], [enemies[j].hitbox[1] + 5, enemies[j].spriteHeight], [ enemyX - movement + enemies[i].hitbox[0], enemyY ], enemySize) ){
                if( j != i ){
                    collisionDir[1] = true;
                }
            }
        }

        // Player collision
        if( boxCollides(playerPos, [player.hitbox[1] + 1, player.spriteHeight], [ enemyX - movement + enemies[i].hitbox[0], enemyY ], enemySize) ){
            collisionDir[1] = true;
        }
        
        // Movement
        if( ( !movementDir[0] && !movementDir[2] && !collisionDir[1] ) ){
            enemies[i].pos[0] -= movement;
            movementDir[3] = true;

            // Sprite direction
            enemies[i].sprite.pos = [enemies[i].spriteOffset, enemies[i].spriteHeight*3];
        } else{
            enemies[i].alternativeDir = '';
        }
    }

    // Move up if blocked
    if( enemies[i].alternativeDir === 'up' ){
        // Object collision
        for( var j=0; j<blocked.length; j++ ){
            if( boxCollides(blocked[j].pos, blocked[j].sprite.size, [ enemyX + enemies[i].hitbox[0], enemyY - movement ], enemySize) ){
                collisionDir[2] = true;
            }
        }

        // Enemy collision
        for( var j=0; j<enemies.length; j++ ){
            if( boxCollides([enemies[j].pos[0] + enemies[j].hitbox[0], enemies[j].pos[1]], [enemies[j].hitbox[1], enemies[j].spriteHeight + 5], [ enemyX + enemies[i].hitbox[0], enemyY - movement ], enemySize) ){
                if( j != i ){
                    collisionDir[2] = true;
                }
            }
        }

        // Player collision
        if( boxCollides(playerPos, [player.hitbox[1], player.spriteHeight + 1], [ enemyX + enemies[i].hitbox[0], enemyY - movement ], enemySize) ){
            collisionDir[2] = true;
        }

        // Movement
        if( !movementDir[1] && !movementDir[3] && !collisionDir[2] ){
            enemies[i].pos[1] -= movement;
            movementDir[0] = true;

            // Sprite direction
            if( enemyX < playerX ){
                enemies[i].sprite.pos = [enemies[i].spriteOffset, enemies[i].spriteHeight*2];
            } else{
                enemies[i].sprite.pos = [enemies[i].spriteOffset, enemies[i].spriteHeight*3];
            }
        } else{
            enemies[i].alternativeDir = '';
        }
    }

    // Move down if blocked
    if( enemies[i].alternativeDir === 'down' ){
        // Object collision
        for( var j=0; j<blocked.length; j++ ){
            if( boxCollides(blocked[j].pos, blocked[j].sprite.size, [ enemyX + enemies[i].hitbox[0], enemyY + movement ], enemySize) ){
                collisionDir[0] = true;
            }
        }

        // Enemy collision
        for( var j=0; j<enemies.length; j++ ){
            if( boxCollides([enemies[j].pos[0] + enemies[j].hitbox[0], enemies[j].pos[1]], [enemies[j].hitbox[1], enemies[j].spriteHeight], [ enemyX + enemies[i].hitbox[0], enemyY + movement ], enemySize + 5) ){
                if( j != i ){
                    collisionDir[0] = true;
                }
            }
        }

        // Player collision
        if( boxCollides(playerPos, [player.hitbox[1], player.spriteHeight], [ enemyX + enemies[i].hitbox[0], enemyY + movement ], enemySize + 1) ){
            collisionDir[0] = true;
        }

        // Movement
        if( !movementDir[1] && !movementDir[3] && !collisionDir[0] ){
            enemies[i].pos[1] += movement;
            movementDir[2] = true;

            // Sprite direction
            if( enemyX < playerX ){
                enemies[i].sprite.pos = [enemies[i].spriteOffset, enemies[i].spriteHeight*2];
            } else{
                enemies[i].sprite.pos = [enemies[i].spriteOffset, enemies[i].spriteHeight*3];
            }
        } else{
            enemies[i].alternativeDir = '';
        }
    }



    // Start fight if not moving and in range
    if( !movementDir[0] && !movementDir[1] && !movementDir[2] && !movementDir[3] && enemyY === playerY ){ // && enemyX >= playerX - playerSize[0][0] - 3 && enemyX <= playerX + playerSize[0][0] + 3
        
        if( enemyX >= playerX - player.hitbox[1] - 3 && enemyX <= playerX + player.hitbox[1] + 3 ){
            fight( enemies[i] );
        } else{
            // Reset sprite
            enemies[i].sprite.frames = [0];
            if( enemyX < playerX ){
                enemies[i].sprite.pos = [enemies[i].spriteOffset, 0];
            } else{
                enemies[i].sprite.pos = [enemies[i].spriteOffset, enemies[i].spriteHeight];
            }
        }

    } else{
        // No combat
        enemies[i].sprite.frames = [0, 1, 2, 3];
        enemies[i].sprite.speed = enemies[i].walkAnimationSpeed;
        enemies[i].sprite.inProgress = false;
        enemies[i].attacking = false;
        playerInFight = false;
    }

    // Reset
    collisionDir = [false, false, false, false];
    movementDir = [false, false, false, false];
}
//////////////////////////////////////////////
// Fight animation                          //
//////////////////////////////////////////////
function fight( enemy ){
    // Reset animation
    if( !enemy.sprite.inProgress ){
        enemy.sprite._index = 0;
    }

    // Set stats
    enemy.attacking = true;
    enemy.sprite.speed = enemy.fightAnimationSpeed;
    enemy.sprite.inProgress = true;
    playerInFight = true;

    // Direction
    if( enemy.pos[0] > player.pos[0] ){
        enemy.sprite.pos = [enemy.spriteOffset, enemy.spriteHeight*5];
    } else{
        enemy.sprite.pos = [enemy.spriteOffset, enemy.spriteHeight*4];
    }
    enemy.sprite.frames = [0, 1, 2, 1];

    // Successful hit
    var idx = Math.floor(enemy.sprite._index);
    var frame = enemy.sprite.frames[idx % enemy.sprite.frames.length];

    if( frame === enemy.sprite.frames.length - 2 && enemy.hitPlayer ){
        enemy.hitPlayer = false;
        dealDamageToPlayer( enemy );
    } else if( frame === enemy.sprite.frames.length - 3 ){
        enemy.hitPlayer = true;
    }
}


//////////////////////////////////////////////
// Calculate and deal damage to player      //
//////////////////////////////////////////////
function dealDamageToPlayer( enemy ){
    if( sound ){
        $.mbAudio.play('effectSprite2', 'grunt' + getRandom(1,5));
    }

    player.currentHealth -= enemy.damage;
    innerHp.style.width = (player.currentHealth / player.health) * 100 + '%';
    if( player.currentHealth <= 0 ){
        gameOver();
    }
}


//////////////////////////////////////////////
// Calculate and deal damage to enemy       //
//////////////////////////////////////////////
function dealDamageToEnemy( enemy, index ){
    if( sound ){
        $.mbAudio.play('effectSprite', 'hit' + getRandom(1, 2));
    }

    enemy.currentHealth -= player.damage;
    if( enemy.currentHealth <= 0 ){
        for( var i=0; i<enemies.length; i++ ){
            if( i === index ){
                enemies.splice(i, 1);
                playerInFight = false;
            }
        }
    }
}