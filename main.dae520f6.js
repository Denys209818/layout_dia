parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"6KIz":[function(require,module,exports) {
"use strict";function e(e,r){var s="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!s){if(Array.isArray(e)||(s=t(e))||r&&e&&"number"==typeof e.length){s&&(e=s);var a=0,n=function(){};return{s:n,n:function(){return a>=e.length?{done:!0}:{done:!1,value:e[a++]}},e:function(e){throw e},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,o=!0,d=!1;return{s:function(){s=s.call(e)},n:function(){var e=s.next();return o=e.done,e},e:function(e){d=!0,i=e},f:function(){try{o||null==s.return||s.return()}finally{if(d)throw i}}}}function t(e,t){if(e){if("string"==typeof e)return r(e,t);var s=Object.prototype.toString.call(e).slice(8,-1);return"Object"===s&&e.constructor&&(s=e.constructor.name),"Map"===s||"Set"===s?Array.from(e):"Arguments"===s||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s)?r(e,t):void 0}}function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,s=new Array(t);r<t;r++)s[r]=e[r];return s}function s(e){var t=document.getElementsByClassName("header__slider")[0];switch(e){case 1:t.classList.contains("header__slider--second")&&t.classList.remove("header__slider--second"),t.classList.contains("header__slider--third")&&t.classList.remove("header__slider--third"),t.classList.add("header__slider--first");break;case 2:t.classList.contains("header__slider--first")&&t.classList.remove("header__slider--first"),t.classList.contains("header__slider--third")&&t.classList.remove("header__slider--third"),t.classList.add("header__slider--second");break;case 3:t.classList.contains("header__slider--second")&&t.classList.remove("header__slider--second"),t.classList.contains("header__slider--first")&&t.classList.remove("header__slider--first"),t.classList.add("header__slider--third")}}document.getElementById("feedbackForm").addEventListener("submit",function(t){t.preventDefault(),t.stopPropagation();var r,s=e(document.getElementsByClassName("footer__form-input"));try{for(s.s();!(r=s.n()).done;){r.value.value=""}}catch(a){s.e(a)}finally{s.f()}}),document.getElementsByClassName("header__arrow--right")[0].addEventListener("click",function(e){var t=e.target.closest(".header__arrows"),r=parseInt(t.getAttribute("data-slide"));r<3?r+=1:r=1,t.setAttribute("data-slide",r.toString()),s(r)}),document.getElementsByClassName("header__arrow--left")[0].addEventListener("click",function(e){var t=e.target.closest(".header__arrows"),r=parseInt(t.getAttribute("data-slide"));r>1?r-=1:r=3,t.setAttribute("data-slide",r.toString()),s(r)});
},{}]},{},["6KIz"], null)
//# sourceMappingURL=main.dae520f6.js.map