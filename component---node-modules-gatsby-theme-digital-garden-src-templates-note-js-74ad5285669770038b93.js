(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{341:function(t,e,n){"use strict";n.r(e);n(19);var r=n(7),o=(n(0),n(346)),c=n.n(o),u=n(348),i=n.n(u),f=n(334),a=n(164),l=function(t){var e=t.data.note,n=e.body,o=e.frontmatter.title,u=e.fileAbsolutePath,l=i.a.basename(u).split(".")[0],s=l.charAt(0).toUpperCase()+l.slice(1);return Object(r.c)(f.a,null,Object(r.c)(a.a,{title:o||s}),Object(r.c)(c.a,null,n))};n.d(e,"pageQuery",function(){return s});e.default=l;var s="2145299814"},345:function(t,e,n){var r=n(8),o=n(105),c=n(61),u=n(35),i=n(29),f=n(31),a=n(232),l=(n(30).Reflect||{}).construct,s=f(function(){function t(){}return!(l(function(){},[],t)instanceof t)}),p=!f(function(){l(function(){})});r(r.S+r.F*(s||p),"Reflect",{construct:function(t,e){c(t),u(e);var n=arguments.length<3?t:c(arguments[2]);if(p&&!s)return l(t,e,n);if(t==n){switch(e.length){case 0:return new t;case 1:return new t(e[0]);case 2:return new t(e[0],e[1]);case 3:return new t(e[0],e[1],e[2]);case 4:return new t(e[0],e[1],e[2],e[3])}var r=[null];return r.push.apply(r,e),new(a.apply(t,r))}var f=n.prototype,b=o(i(f)?f:Object.prototype),h=Function.apply.call(t,b,e);return i(h)?h:b}})},346:function(t,e,n){function r(t,e,n){return(r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}()?Reflect.construct:function(t,e,n){var r=[null];r.push.apply(r,e);var c=new(Function.bind.apply(t,r));return n&&o(c,n.prototype),c}).apply(null,arguments)}function o(t,e){return(o=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function c(t){return function(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function u(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?u(n,!0).forEach(function(e){f(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):u(n).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}function f(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}n(58),n(6),n(13),n(64),n(104),n(28),n(14),n(5),n(82),n(24),n(3),n(345),n(345),n(82),n(64),n(104),n(24),n(28),n(58),n(14),n(5),n(6),n(3),n(13);var a=n(0),l=n(93),s=l.useMDXComponents,p=l.mdx,b=n(167).useMDXScope;t.exports=function(t){var e=t.scope,n=t.components,o=t.children,u=function(t,e){if(null==t)return{};var n,r,o={},c=Object.keys(t);for(r=0;r<c.length;r++)n=c[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,["scope","components","children"]),f=s(n),l=b(e),h=a.useMemo(function(){if(!o)return null;var t=i({React:a,mdx:p},l),e=Object.keys(t),n=e.map(function(e){return t[e]});return r(Function,["_fn"].concat(c(e),[""+o])).apply(void 0,[{}].concat(c(n)))},[o,e]);return a.createElement(h,i({components:f},u))}},348:function(t,e,n){(function(t){function r(t,e){for(var n=0,r=t.length-1;r>=0;r--){var o=t[r];"."===o?t.splice(r,1):".."===o?(t.splice(r,1),n++):n&&(t.splice(r,1),n--)}if(e)for(;n--;n)t.unshift("..");return t}function o(t,e){if(t.filter)return t.filter(e);for(var n=[],r=0;r<t.length;r++)e(t[r],r,t)&&n.push(t[r]);return n}n(25),n(19),e.resolve=function(){for(var e="",n=!1,c=arguments.length-1;c>=-1&&!n;c--){var u=c>=0?arguments[c]:t.cwd();if("string"!=typeof u)throw new TypeError("Arguments to path.resolve must be strings");u&&(e=u+"/"+e,n="/"===u.charAt(0))}return(n?"/":"")+(e=r(o(e.split("/"),function(t){return!!t}),!n).join("/"))||"."},e.normalize=function(t){var n=e.isAbsolute(t),u="/"===c(t,-1);return(t=r(o(t.split("/"),function(t){return!!t}),!n).join("/"))||n||(t="."),t&&u&&(t+="/"),(n?"/":"")+t},e.isAbsolute=function(t){return"/"===t.charAt(0)},e.join=function(){var t=Array.prototype.slice.call(arguments,0);return e.normalize(o(t,function(t,e){if("string"!=typeof t)throw new TypeError("Arguments to path.join must be strings");return t}).join("/"))},e.relative=function(t,n){function r(t){for(var e=0;e<t.length&&""===t[e];e++);for(var n=t.length-1;n>=0&&""===t[n];n--);return e>n?[]:t.slice(e,n-e+1)}t=e.resolve(t).substr(1),n=e.resolve(n).substr(1);for(var o=r(t.split("/")),c=r(n.split("/")),u=Math.min(o.length,c.length),i=u,f=0;f<u;f++)if(o[f]!==c[f]){i=f;break}var a=[];for(f=i;f<o.length;f++)a.push("..");return(a=a.concat(c.slice(i))).join("/")},e.sep="/",e.delimiter=":",e.dirname=function(t){if("string"!=typeof t&&(t+=""),0===t.length)return".";for(var e=t.charCodeAt(0),n=47===e,r=-1,o=!0,c=t.length-1;c>=1;--c)if(47===(e=t.charCodeAt(c))){if(!o){r=c;break}}else o=!1;return-1===r?n?"/":".":n&&1===r?"/":t.slice(0,r)},e.basename=function(t,e){var n=function(t){"string"!=typeof t&&(t+="");var e,n=0,r=-1,o=!0;for(e=t.length-1;e>=0;--e)if(47===t.charCodeAt(e)){if(!o){n=e+1;break}}else-1===r&&(o=!1,r=e+1);return-1===r?"":t.slice(n,r)}(t);return e&&n.substr(-1*e.length)===e&&(n=n.substr(0,n.length-e.length)),n},e.extname=function(t){"string"!=typeof t&&(t+="");for(var e=-1,n=0,r=-1,o=!0,c=0,u=t.length-1;u>=0;--u){var i=t.charCodeAt(u);if(47!==i)-1===r&&(o=!1,r=u+1),46===i?-1===e?e=u:1!==c&&(c=1):-1!==e&&(c=-1);else if(!o){n=u+1;break}}return-1===e||-1===r||0===c||1===c&&e===r-1&&e===n+1?"":t.slice(e,r)};var c="b"==="ab".substr(-1)?function(t,e,n){return t.substr(e,n)}:function(t,e,n){return e<0&&(e=t.length+e),t.substr(e,n)}}).call(this,n(168))}}]);
//# sourceMappingURL=component---node-modules-gatsby-theme-digital-garden-src-templates-note-js-74ad5285669770038b93.js.map