!function(n,e){for(var r in e)n[r]=e[r]}(exports,function(n){var e={};function r(t){if(e[t])return e[t].exports;var o=e[t]={i:t,l:!1,exports:{}};return n[t].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=n,r.c=e,r.d=function(n,e,t){r.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:t})},r.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},r.t=function(n,e){if(1&e&&(n=r(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var t=Object.create(null);if(r.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var o in n)r.d(t,o,function(e){return n[e]}.bind(null,o));return t},r.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return r.d(e,"a",e),e},r.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},r.p="",r(r.s=0)}([function(n,e,r){"use strict";function t(n,e,r){return"viewer"===n.componentType&&o(e,n,["fileExtension","onSave","onDiscard","onPause","durationType","duration","showWarningMsg","warningMsgDuration","warningMsgContent"]),"unlimited"===n.durationType&&o(e,n,["duration"]),n.showWarningMsg||o(e,n,["warningMsgDuration","warningMsgContent"]),e}function o(n,e,r){r.forEach((function(e){return function n(e,r,t,o,i){r.forEach((function(r){var u;r.propertyGroups&&n(e,r.propertyGroups,t,o,i),null===(u=r.properties)||void 0===u||u.forEach((function(r,u,c){r.key===t&&(void 0===o||void 0===i?e(r,u,c):r.objects?n(e,r.objects[o].properties,i):r.properties&&n(e,r.properties[o],i))}))}))}((function(n,e,r){return r.splice(e,1)}),n,e,void 0,void 0)}))}r.r(e),r.d(e,"getProperties",(function(){return t}))}]));