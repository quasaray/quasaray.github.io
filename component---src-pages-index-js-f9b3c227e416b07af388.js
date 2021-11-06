(self.webpackChunkam_self_intro_dimension=self.webpackChunkam_self_intro_dimension||[]).push([[678],{2993:function(e){"use strict";var t=Array.isArray,n=Object.keys,r=Object.prototype.hasOwnProperty,a="undefined"!=typeof Element;function i(e,o){if(e===o)return!0;if(e&&o&&"object"==typeof e&&"object"==typeof o){var l,c,s,u=t(e),f=t(o);if(u&&f){if((c=e.length)!=o.length)return!1;for(l=c;0!=l--;)if(!i(e[l],o[l]))return!1;return!0}if(u!=f)return!1;var p=e instanceof Date,m=o instanceof Date;if(p!=m)return!1;if(p&&m)return e.getTime()==o.getTime();var d=e instanceof RegExp,T=o instanceof RegExp;if(d!=T)return!1;if(d&&T)return e.toString()==o.toString();var E=n(e);if((c=E.length)!==n(o).length)return!1;for(l=c;0!=l--;)if(!r.call(o,E[l]))return!1;if(a&&e instanceof Element&&o instanceof Element)return e===o;for(l=c;0!=l--;)if(!("_owner"===(s=E[l])&&e.$$typeof||i(e[s],o[s])))return!1;return!0}return e!=e&&o!=o}e.exports=function(e,t){try{return i(e,t)}catch(n){if(n.message&&n.message.match(/stack|recursion/i)||-2146828260===n.number)return console.warn("Warning: react-fast-compare does not handle circular references.",n.name,n.message),!1;throw n}}},7701:function(e,t,n){var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=f(n(7294)),o=f(n(5697)),l=f(n(4839)),c=f(n(2993)),s=n(1640),u=n(286);function f(e){return e&&e.__esModule?e:{default:e}}function p(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}function m(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function d(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var T,E,h,A=(0,l.default)(s.reducePropsToState,s.handleClientStateChange,s.mapStateOnServer)((function(){return null})),y=(T=A,h=E=function(e){function t(){return m(this,t),d(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!(0,c.default)(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case u.TAG_NAMES.SCRIPT:case u.TAG_NAMES.NOSCRIPT:return{innerHTML:t};case u.TAG_NAMES.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,a=e.arrayTypeChildren,i=e.newChildProps,o=e.nestedChildren;return r({},a,((t={})[n.type]=[].concat(a[n.type]||[],[r({},i,this.mapNestedChildrenToProps(n,o))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,n,a=e.child,i=e.newProps,o=e.newChildProps,l=e.nestedChildren;switch(a.type){case u.TAG_NAMES.TITLE:return r({},i,((t={})[a.type]=l,t.titleAttributes=r({},o),t));case u.TAG_NAMES.BODY:return r({},i,{bodyAttributes:r({},o)});case u.TAG_NAMES.HTML:return r({},i,{htmlAttributes:r({},o)})}return r({},i,((n={})[a.type]=r({},o),n))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=r({},t);return Object.keys(e).forEach((function(t){var a;n=r({},n,((a={})[t]=e[t],a))})),n},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var n=this,r={};return i.default.Children.forEach(e,(function(e){if(e&&e.props){var a=e.props,i=a.children,o=p(a,["children"]),l=(0,s.convertReactPropstoHtmlAttributes)(o);switch(n.warnOnInvalidChildren(e,i),e.type){case u.TAG_NAMES.LINK:case u.TAG_NAMES.META:case u.TAG_NAMES.NOSCRIPT:case u.TAG_NAMES.SCRIPT:case u.TAG_NAMES.STYLE:r=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:r,newChildProps:l,nestedChildren:i});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:l,nestedChildren:i})}}})),t=this.mapArrayTypeChildrenToProps(r,t)},t.prototype.render=function(){var e=this.props,t=e.children,n=p(e,["children"]),a=r({},n);return t&&(a=this.mapChildrenToProps(t,a)),i.default.createElement(T,a)},a(t,null,[{key:"canUseDOM",set:function(e){T.canUseDOM=e}}]),t}(i.default.Component),E.propTypes={base:o.default.object,bodyAttributes:o.default.object,children:o.default.oneOfType([o.default.arrayOf(o.default.node),o.default.node]),defaultTitle:o.default.string,defer:o.default.bool,encodeSpecialCharacters:o.default.bool,htmlAttributes:o.default.object,link:o.default.arrayOf(o.default.object),meta:o.default.arrayOf(o.default.object),noscript:o.default.arrayOf(o.default.object),onChangeClientState:o.default.func,script:o.default.arrayOf(o.default.object),style:o.default.arrayOf(o.default.object),title:o.default.string,titleAttributes:o.default.object,titleTemplate:o.default.string},E.defaultProps={defer:!0,encodeSpecialCharacters:!0},E.peek=T.peek,E.rewind=function(){var e=T.rewind();return e||(e=(0,s.mapStateOnServer)({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},h);y.renderStatic=y.rewind,t.ZP=y},286:function(e,t){t.__esModule=!0;t.ATTRIBUTE_NAMES={BODY:"bodyAttributes",HTML:"htmlAttributes",TITLE:"titleAttributes"};var n=t.TAG_NAMES={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},r=(t.VALID_TAG_NAMES=Object.keys(n).map((function(e){return n[e]})),t.TAG_PROPERTIES={CHARSET:"charset",CSS_TEXT:"cssText",HREF:"href",HTTPEQUIV:"http-equiv",INNER_HTML:"innerHTML",ITEM_PROP:"itemprop",NAME:"name",PROPERTY:"property",REL:"rel",SRC:"src"},t.REACT_TAG_MAP={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"});t.HELMET_PROPS={DEFAULT_TITLE:"defaultTitle",DEFER:"defer",ENCODE_SPECIAL_CHARACTERS:"encodeSpecialCharacters",ON_CHANGE_CLIENT_STATE:"onChangeClientState",TITLE_TEMPLATE:"titleTemplate"},t.HTML_TAG_MAP=Object.keys(r).reduce((function(e,t){return e[r[t]]=t,e}),{}),t.SELF_CLOSING_TAGS=[n.NOSCRIPT,n.SCRIPT,n.STYLE],t.HELMET_ATTRIBUTE="data-react-helmet"},1640:function(e,t,n){t.__esModule=!0,t.warn=t.requestAnimationFrame=t.reducePropsToState=t.mapStateOnServer=t.handleClientStateChange=t.convertReactPropstoHtmlAttributes=void 0;var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i=c(n(7294)),o=c(n(6494)),l=n(286);function c(e){return e&&e.__esModule?e:{default:e}}var s,u=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},f=function(e){var t=E(e,l.TAG_NAMES.TITLE),n=E(e,l.HELMET_PROPS.TITLE_TEMPLATE);if(n&&t)return n.replace(/%s/g,(function(){return t}));var r=E(e,l.HELMET_PROPS.DEFAULT_TITLE);return t||r||void 0},p=function(e){return E(e,l.HELMET_PROPS.ON_CHANGE_CLIENT_STATE)||function(){}},m=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return a({},e,t)}),{})},d=function(e,t){return t.filter((function(e){return void 0!==e[l.TAG_NAMES.BASE]})).map((function(e){return e[l.TAG_NAMES.BASE]})).reverse().reduce((function(t,n){if(!t.length)for(var r=Object.keys(n),a=0;a<r.length;a++){var i=r[a].toLowerCase();if(-1!==e.indexOf(i)&&n[i])return t.concat(n)}return t}),[])},T=function(e,t,n){var a={};return n.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&g("Helmet: "+e+' should be of type "Array". Instead found type "'+r(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,n){var r={};n.filter((function(e){for(var n=void 0,i=Object.keys(e),o=0;o<i.length;o++){var c=i[o],s=c.toLowerCase();-1===t.indexOf(s)||n===l.TAG_PROPERTIES.REL&&"canonical"===e[n].toLowerCase()||s===l.TAG_PROPERTIES.REL&&"stylesheet"===e[s].toLowerCase()||(n=s),-1===t.indexOf(c)||c!==l.TAG_PROPERTIES.INNER_HTML&&c!==l.TAG_PROPERTIES.CSS_TEXT&&c!==l.TAG_PROPERTIES.ITEM_PROP||(n=c)}if(!n||!e[n])return!1;var u=e[n].toLowerCase();return a[n]||(a[n]={}),r[n]||(r[n]={}),!a[n][u]&&(r[n][u]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var i=Object.keys(r),c=0;c<i.length;c++){var s=i[c],u=(0,o.default)({},a[s],r[s]);a[s]=u}return e}),[]).reverse()},E=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},h=(s=Date.now(),function(e){var t=Date.now();t-s>16?(s=t,e(t)):setTimeout((function(){h(e)}),0)}),A=function(e){return clearTimeout(e)},y="undefined"!=typeof window?window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||h:n.g.requestAnimationFrame||h,b="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||A:n.g.cancelAnimationFrame||A,g=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},S=null,v=function(e,t){var n=e.baseTag,r=e.bodyAttributes,a=e.htmlAttributes,i=e.linkTags,o=e.metaTags,c=e.noscriptTags,s=e.onChangeClientState,u=e.scriptTags,f=e.styleTags,p=e.title,m=e.titleAttributes;R(l.TAG_NAMES.BODY,r),R(l.TAG_NAMES.HTML,a),w(p,m);var d={baseTag:O(l.TAG_NAMES.BASE,n),linkTags:O(l.TAG_NAMES.LINK,i),metaTags:O(l.TAG_NAMES.META,o),noscriptTags:O(l.TAG_NAMES.NOSCRIPT,c),scriptTags:O(l.TAG_NAMES.SCRIPT,u),styleTags:O(l.TAG_NAMES.STYLE,f)},T={},E={};Object.keys(d).forEach((function(e){var t=d[e],n=t.newTags,r=t.oldTags;n.length&&(T[e]=n),r.length&&(E[e]=d[e].oldTags)})),t&&t(),s(e,T,E)},_=function(e){return Array.isArray(e)?e.join(""):e},w=function(e,t){void 0!==e&&document.title!==e&&(document.title=_(e)),R(l.TAG_NAMES.TITLE,t)},R=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute(l.HELMET_ATTRIBUTE),a=r?r.split(","):[],i=[].concat(a),o=Object.keys(t),c=0;c<o.length;c++){var s=o[c],u=t[s]||"";n.getAttribute(s)!==u&&n.setAttribute(s,u),-1===a.indexOf(s)&&a.push(s);var f=i.indexOf(s);-1!==f&&i.splice(f,1)}for(var p=i.length-1;p>=0;p--)n.removeAttribute(i[p]);a.length===i.length?n.removeAttribute(l.HELMET_ATTRIBUTE):n.getAttribute(l.HELMET_ATTRIBUTE)!==o.join(",")&&n.setAttribute(l.HELMET_ATTRIBUTE,o.join(","))}},O=function(e,t){var n=document.head||document.querySelector(l.TAG_NAMES.HEAD),r=n.querySelectorAll(e+"["+l.HELMET_ATTRIBUTE+"]"),a=Array.prototype.slice.call(r),i=[],o=void 0;return t&&t.length&&t.forEach((function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===l.TAG_PROPERTIES.INNER_HTML)n.innerHTML=t.innerHTML;else if(r===l.TAG_PROPERTIES.CSS_TEXT)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var c=void 0===t[r]?"":t[r];n.setAttribute(r,c)}n.setAttribute(l.HELMET_ATTRIBUTE,"true"),a.some((function(e,t){return o=t,n.isEqualNode(e)}))?a.splice(o,1):i.push(n)})),a.forEach((function(e){return e.parentNode.removeChild(e)})),i.forEach((function(e){return n.appendChild(e)})),{oldTags:a,newTags:i}},C=function(e){return Object.keys(e).reduce((function(t,n){var r=void 0!==e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r}),"")},P=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[l.REACT_TAG_MAP[n]||n]=e[n],t}),t)},I=function(e,t,n){switch(e){case l.TAG_NAMES.TITLE:return{toComponent:function(){return e=t.title,n=t.titleAttributes,(r={key:e})[l.HELMET_ATTRIBUTE]=!0,a=P(n,r),[i.default.createElement(l.TAG_NAMES.TITLE,a,e)];var e,n,r,a},toString:function(){return function(e,t,n,r){var a=C(n),i=_(t);return a?"<"+e+" "+l.HELMET_ATTRIBUTE+'="true" '+a+">"+u(i,r)+"</"+e+">":"<"+e+" "+l.HELMET_ATTRIBUTE+'="true">'+u(i,r)+"</"+e+">"}(e,t.title,t.titleAttributes,n)}};case l.ATTRIBUTE_NAMES.BODY:case l.ATTRIBUTE_NAMES.HTML:return{toComponent:function(){return P(t)},toString:function(){return C(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,n){var r,a=((r={key:n})[l.HELMET_ATTRIBUTE]=!0,r);return Object.keys(t).forEach((function(e){var n=l.REACT_TAG_MAP[e]||e;if(n===l.TAG_PROPERTIES.INNER_HTML||n===l.TAG_PROPERTIES.CSS_TEXT){var r=t.innerHTML||t.cssText;a.dangerouslySetInnerHTML={__html:r}}else a[n]=t[e]})),i.default.createElement(e,a)}))}(e,t)},toString:function(){return function(e,t,n){return t.reduce((function(t,r){var a=Object.keys(r).filter((function(e){return!(e===l.TAG_PROPERTIES.INNER_HTML||e===l.TAG_PROPERTIES.CSS_TEXT)})).reduce((function(e,t){var a=void 0===r[t]?t:t+'="'+u(r[t],n)+'"';return e?e+" "+a:a}),""),i=r.innerHTML||r.cssText||"",o=-1===l.SELF_CLOSING_TAGS.indexOf(e);return t+"<"+e+" "+l.HELMET_ATTRIBUTE+'="true" '+a+(o?"/>":">"+i+"</"+e+">")}),"")}(e,t,n)}}}};t.convertReactPropstoHtmlAttributes=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[l.HTML_TAG_MAP[n]||n]=e[n],t}),t)},t.handleClientStateChange=function(e){S&&b(S),e.defer?S=y((function(){v(e,(function(){S=null}))})):(v(e),S=null)},t.mapStateOnServer=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,a=e.htmlAttributes,i=e.linkTags,o=e.metaTags,c=e.noscriptTags,s=e.scriptTags,u=e.styleTags,f=e.title,p=void 0===f?"":f,m=e.titleAttributes;return{base:I(l.TAG_NAMES.BASE,t,r),bodyAttributes:I(l.ATTRIBUTE_NAMES.BODY,n,r),htmlAttributes:I(l.ATTRIBUTE_NAMES.HTML,a,r),link:I(l.TAG_NAMES.LINK,i,r),meta:I(l.TAG_NAMES.META,o,r),noscript:I(l.TAG_NAMES.NOSCRIPT,c,r),script:I(l.TAG_NAMES.SCRIPT,s,r),style:I(l.TAG_NAMES.STYLE,u,r),title:I(l.TAG_NAMES.TITLE,{title:p,titleAttributes:m},r)}},t.reducePropsToState=function(e){return{baseTag:d([l.TAG_PROPERTIES.HREF],e),bodyAttributes:m(l.ATTRIBUTE_NAMES.BODY,e),defer:E(e,l.HELMET_PROPS.DEFER),encode:E(e,l.HELMET_PROPS.ENCODE_SPECIAL_CHARACTERS),htmlAttributes:m(l.ATTRIBUTE_NAMES.HTML,e),linkTags:T(l.TAG_NAMES.LINK,[l.TAG_PROPERTIES.REL,l.TAG_PROPERTIES.HREF],e),metaTags:T(l.TAG_NAMES.META,[l.TAG_PROPERTIES.NAME,l.TAG_PROPERTIES.CHARSET,l.TAG_PROPERTIES.HTTPEQUIV,l.TAG_PROPERTIES.PROPERTY,l.TAG_PROPERTIES.ITEM_PROP],e),noscriptTags:T(l.TAG_NAMES.NOSCRIPT,[l.TAG_PROPERTIES.INNER_HTML],e),onChangeClientState:p(e),scriptTags:T(l.TAG_NAMES.SCRIPT,[l.TAG_PROPERTIES.SRC,l.TAG_PROPERTIES.INNER_HTML],e),styleTags:T(l.TAG_NAMES.STYLE,[l.TAG_PROPERTIES.CSS_TEXT],e),title:f(e),titleAttributes:m(l.ATTRIBUTE_NAMES.TITLE,e)}},t.requestAnimationFrame=y,t.warn=g},4839:function(e,t,n){"use strict";function r(e){return e&&"object"==typeof e&&"default"in e?e.default:e}var a=n(7294),i=r(a),o=r(n(6872));function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var c=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,n){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var s,u=[];function f(){s=e(u.map((function(e){return e.props}))),p.canUseDOM?t(s):n&&(s=n(s))}var p=function(e){var t,n;function a(){return e.apply(this,arguments)||this}n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,a.peek=function(){return s},a.rewind=function(){if(a.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=s;return s=void 0,u=[],e};var l=a.prototype;return l.shouldComponentUpdate=function(e){return!o(e,this.props)},l.componentWillMount=function(){u.push(this),f()},l.componentDidUpdate=function(){f()},l.componentWillUnmount=function(){var e=u.indexOf(this);u.splice(e,1),f()},l.render=function(){return i.createElement(r,this.props)},a}(a.Component);return l(p,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(r)+")"),l(p,"canUseDOM",c),p}}},6872:function(e){e.exports=function(e,t,n,r){var a=n?n.call(r,e,t):void 0;if(void 0!==a)return!!a;if(e===t)return!0;if("object"!=typeof e||!e||"object"!=typeof t||!t)return!1;var i=Object.keys(e),o=Object.keys(t);if(i.length!==o.length)return!1;for(var l=Object.prototype.hasOwnProperty.bind(t),c=0;c<i.length;c++){var s=i[c];if(!l(s))return!1;var u=e[s],f=t[s];if(!1===(a=n?n.call(r,u,f,s):void 0)||void 0===a&&u!==f)return!1}return!0}},9476:function(e,t,n){"use strict";function r(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}n.r(t),n.d(t,{default:function(){return w}});var a=n(1721),i=n(7294),o=n(7701),l=n(5444),c=n.p+"static/hiking-left-9f06bea344f8b7e46be15927c933f2e4.jpg",s=function(e){var t=e.children;return i.createElement(l.StaticQuery,{query:"1186497929",render:function(e){return i.createElement(i.Fragment,null,i.createElement(o.ZP,{title:e.site.siteMetadata.title,meta:[{name:"description",content:"An introduction site"},{name:"keywords",content:"software development, full stack, Gatsby"},{property:"og:image",content:e.site.siteMetadata.url+""+c},{property:"og:title",content:"Aaron's Software portfolio"},{property:"og:type",content:"website"}]},i.createElement("html",{lang:"en"})),t)}})},u=function(e){return i.createElement("header",{id:"header",style:e.timeout?{display:"none"}:{}},i.createElement("div",{className:"logo"},i.createElement("span",{className:"icon fa-flag"})),i.createElement("div",{className:"content"},i.createElement("div",{className:"inner"},i.createElement("h1",null,"The Intrepid developer"),i.createElement("p",null,"Hi, I'm Aaron Maynard, this is a site to get to know a little more about me"))),i.createElement("nav",null,i.createElement("ul",null,i.createElement("li",null,i.createElement("button",{onClick:function(){e.onOpenArticle("intro")}},"Intro")),i.createElement("li",null,i.createElement("button",{onClick:function(){e.onOpenArticle("work")}},"Work")),i.createElement("li",null,i.createElement("button",{onClick:function(){e.onOpenArticle("about")}},"About")),i.createElement("li",null,i.createElement("button",{onClick:function(){e.onOpenArticle("contact")}},"Contact")))))},f=n.p+"static/graduation-40a17a678b181c8efa0edb373a139f1b.jpg",p=function(e){function t(){return e.apply(this,arguments)||this}return(0,a.Z)(t,e),t.prototype.render=function(){return i.createElement("span",null,i.createElement("h2",{className:"major"},"Intro"),i.createElement("span",{className:"image main"},i.createElement("img",{src:f,alt:"my graduation"})),i.createElement("p",null,"I recently completed a degree of computing at Sydney University, where I majored in data science. My degree was definitely worthwhile, however more from the connections than the raw knowledge. I found much more enjoyment from working with the data rather than analysing it, and immediately after finishing my studies, begun working full time as a software developer."),i.createElement("p",null,"Studying doesn't stop after university, but I do always find it rewarding keeping up with the latest trends and evaluating what new tools are available. From my studies I found out about graph databases, which I have been following since. I have also been making myself familiar with the various javascript frameworks that are out there, recent trends in the frontend experience have made working with it much simpler, and writing engaging experiences much more achievable."))},t}(i.Component),m=p,d=n.p+"static/cattop-8712bd4fcf20119db036c974887780d7.jpg",T=function(e){function t(){return e.apply(this,arguments)||this}return(0,a.Z)(t,e),t.prototype.render=function(){return i.createElement("span",null,i.createElement("h2",{className:"major"},"Work"),i.createElement("span",{className:"image main"},i.createElement("img",{src:d,alt:"cat on a laptop"})),i.createElement("p",null,"I have had the joy of being able to work with a variety of technologies on just as many projects. Unfortunately I have not had many opportunities to work on full projects in my spare time, but I have been able to expand my skill set with many other tasks such as:"),i.createElement("ul",null,i.createElement("li",null,"Redesigning the ",i.createElement("a",{href:"https://turnkey.com.au/"},"company website")),i.createElement("li",null,"Creating an internal full stack licencing web app using ",i.createElement("a",{href:"https://vaadin.com/"},"Vaadin")),i.createElement("li",null,"Working on customer projects with ",i.createElement("a",{href:"https://www.jhipster.tech/"},"JHipster"))))},t}(i.Component),E=T,h=n.p+"static/mountain-9786aa02ceaadeb7034defe7d8e7dd9c.jpg",A=function(e){function t(){return e.apply(this,arguments)||this}return(0,a.Z)(t,e),t.prototype.render=function(){return i.createElement("span",null,i.createElement("h2",{className:"major"},"About"),i.createElement("span",{className:"image main"},i.createElement("img",{src:h,alt:"walking in Japan"})),i.createElement("p",null,"Before COVID struck, I  enjoyed travelling. Both the photo above and the background are from a holiday I took to Japan. I certainly am looking forward to restrictions easing, but in the meanwhile have been making the most of the sights in Australia."),i.createElement("p",null,"I also am fond of board games, at University I was heavily involved with the pop culture society. I find it to be a great way of bonding with friends, though my favourite games are all fairly niche (not to mention the games being rather pricy)"))},t}(i.Component),y=A,b=function(e){function t(){return e.apply(this,arguments)||this}return(0,a.Z)(t,e),t.prototype.render=function(){return i.createElement("span",null,i.createElement("h2",{className:"major"},"Contact"),i.createElement("form",{method:"post",action:"https://formspree.io/f/xvodylya"},i.createElement("div",{className:"field half first"},i.createElement("label",{htmlFor:"name"},"Name"),i.createElement("input",{type:"text",name:"name",id:"name"})),i.createElement("div",{className:"field half"},i.createElement("label",{htmlFor:"email"},"Email"),i.createElement("input",{type:"email",name:"_replyto",id:"email"})),i.createElement("div",{className:"field"},i.createElement("label",{htmlFor:"message"},"Message"),i.createElement("textarea",{name:"message",id:"message",rows:"4"})),i.createElement("input",{type:"text",name:"_gotcha",style:{display:"none"}}),i.createElement("ul",{className:"actions"},i.createElement("li",null,i.createElement("input",{type:"submit",value:"Send Message",className:"special"})),i.createElement("li",null,i.createElement("input",{type:"reset",value:"Reset"})))),i.createElement("ul",{className:"icons"},i.createElement("li",null,i.createElement("a",{href:"https://www.linkedin.com/in/aaron-maynard-865801139/",className:"icon fa-linkedin"},i.createElement("span",{className:"label"},"LinkedIn"))),i.createElement("li",null,i.createElement("a",{href:"https://github.com/quasaray",className:"icon fa-github"},i.createElement("span",{className:"label"},"GitHub")))))},t}(i.Component),g=b,S=function(e){function t(){return e.apply(this,arguments)||this}return(0,a.Z)(t,e),t.prototype.render=function(){var e=this,t=i.createElement("button",{className:"close","aria-label":"close",onClick:function(){e.props.onCloseArticle()}});return i.createElement("div",{ref:this.props.setWrapperRef,id:"main",style:this.props.timeout?{display:"flex"}:{display:"none"}},i.createElement("article",{id:"intro",className:("intro"===this.props.article?"active":"")+" "+(this.props.articleTimeout?"timeout":""),style:{display:"none"}},i.createElement(m,null),t),i.createElement("article",{id:"work",className:("work"===this.props.article?"active":"")+" "+(this.props.articleTimeout?"timeout":""),style:{display:"none"}},i.createElement(E,null),t),i.createElement("article",{id:"about",className:("about"===this.props.article?"active":"")+" "+(this.props.articleTimeout?"timeout":""),style:{display:"none"}},i.createElement(y,null),t),i.createElement("article",{id:"contact",className:("contact"===this.props.article?"active":"")+" "+(this.props.articleTimeout?"timeout":""),style:{display:"none"}},i.createElement(g,null),t))},t}(i.Component),v=S,_=function(e){return i.createElement("footer",{id:"footer",style:e.timeout?{display:"none"}:{}},i.createElement("p",{className:"copyright"},"based on ",i.createElement("a",{href:"https://github.com/codebushi/gatsby-starter-dimension"}," Gatsby Starter - Dimension.")," Design: ",i.createElement("a",{href:"https://html5up.net"},"HTML5 UP"),". Built with: ",i.createElement("a",{href:"https://www.gatsbyjs.org/"},"Gatsby.js")))},w=function(e){function t(t){var n;return(n=e.call(this,t)||this).state={isArticleVisible:!1,timeout:!1,articleTimeout:!1,article:"",loading:"is-loading"},n.handleOpenArticle=n.handleOpenArticle.bind(r(n)),n.handleCloseArticle=n.handleCloseArticle.bind(r(n)),n.setWrapperRef=n.setWrapperRef.bind(r(n)),n.handleClickOutside=n.handleClickOutside.bind(r(n)),n}(0,a.Z)(t,e);var n=t.prototype;return n.componentDidMount=function(){var e=this;this.timeoutId=setTimeout((function(){e.setState({loading:""})}),100),document.addEventListener("mousedown",this.handleClickOutside)},n.componentWillUnmount=function(){this.timeoutId&&clearTimeout(this.timeoutId),document.removeEventListener("mousedown",this.handleClickOutside)},n.setWrapperRef=function(e){this.wrapperRef=e},n.handleOpenArticle=function(e){var t=this;this.setState({isArticleVisible:!this.state.isArticleVisible,article:e}),setTimeout((function(){t.setState({timeout:!t.state.timeout})}),325),setTimeout((function(){t.setState({articleTimeout:!t.state.articleTimeout})}),350)},n.handleCloseArticle=function(){var e=this;this.setState({articleTimeout:!this.state.articleTimeout}),setTimeout((function(){e.setState({timeout:!e.state.timeout})}),325),setTimeout((function(){e.setState({isArticleVisible:!e.state.isArticleVisible,article:""})}),350)},n.handleClickOutside=function(e){this.wrapperRef&&!this.wrapperRef.contains(e.target)&&this.state.isArticleVisible&&this.handleCloseArticle()},n.render=function(){return i.createElement(s,null,i.createElement("div",{className:"body "+this.state.loading+" "+(this.state.isArticleVisible?"is-article-visible":"")},i.createElement("div",{id:"wrapper"},i.createElement(u,{onOpenArticle:this.handleOpenArticle,timeout:this.state.timeout}),i.createElement(v,{isArticleVisible:this.state.isArticleVisible,timeout:this.state.timeout,articleTimeout:this.state.articleTimeout,article:this.state.article,onCloseArticle:this.handleCloseArticle,setWrapperRef:this.setWrapperRef}),i.createElement(_,{timeout:this.state.timeout})),i.createElement("div",{id:"bg"})))},t}(i.Component)}}]);
//# sourceMappingURL=component---src-pages-index-js-f9b3c227e416b07af388.js.map