!function(e){var n={};function c(r){if(n[r])return n[r].exports;var l=n[r]={i:r,l:!1,exports:{}};return e[r].call(l.exports,l,l.exports,c),l.l=!0,l.exports}c.m=e,c.c=n,c.d=function(e,n,r){c.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},c.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,n){if(1&n&&(e=c(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(c.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var l in e)c.d(r,l,function(n){return e[n]}.bind(null,l));return r},c.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return c.d(n,"a",n),n},c.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},c.p="",c(c.s=0)}([function(module,exports,__webpack_require__){"use strict";eval('\r\n\r\n// service worker registration - remove if you\'re not going to use it\r\n\r\nif ("serviceWorker" in navigator) {\r\n  window.addEventListener("load", function () {\r\n    navigator.serviceWorker.register("serviceworker.js").then(\r\n      function (registration) {\r\n        // Registration was successful\r\n        console.log(\r\n          "ServiceWorker registration successful with scope: ",\r\n          registration.scope\r\n        );\r\n      },\r\n      function (err) {\r\n        // registration failed :(\r\n        console.log("ServiceWorker registration failed: ", err);\r\n      }\r\n    );\r\n  });\r\n}\r\n\r\n// place your code below\r\n\r\nconst add = document.querySelector(".button--add-js");\r\nconst remove = document.querySelector(".button--remove-js");\r\nlet counterValue = 0;\r\nlet counterView = document.querySelector(".glass__counter");\r\n\r\n\r\nconst key = new Date().toISOString().slice(0, 10);\r\nif (key in localStorage) {\r\n  counterValue = localStorage.getItem(key);\r\n}\r\n\r\ncounterView.innerHTML = counterValue;\r\nconsole.log(counterValue);\r\nadd.addEventListener("click", (e) => {\r\n  if (counterValue < 10) {\r\n    counterValue++;\r\n    counterView.innerHTML = counterValue;\r\n    localStorage.setItem(key, counterValue);\r\n  }\r\n});\r\n\r\nremove.addEventListener("click", (e) => {\r\n  if (counterValue > 0) {\r\n    counterValue--;\r\n    counterView.innerHTML = counterValue;\r\n    localStorage.setItem(key, counterValue);\r\n  }\r\n});\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvbWFpbi5qcz85MjkxIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFhOztBQUViOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDIiwiZmlsZSI6IjAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcclxuXHJcbi8vIHNlcnZpY2Ugd29ya2VyIHJlZ2lzdHJhdGlvbiAtIHJlbW92ZSBpZiB5b3UncmUgbm90IGdvaW5nIHRvIHVzZSBpdFxyXG5cclxuaWYgKFwic2VydmljZVdvcmtlclwiIGluIG5hdmlnYXRvcikge1xyXG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICBuYXZpZ2F0b3Iuc2VydmljZVdvcmtlci5yZWdpc3RlcihcInNlcnZpY2V3b3JrZXIuanNcIikudGhlbihcclxuICAgICAgZnVuY3Rpb24gKHJlZ2lzdHJhdGlvbikge1xyXG4gICAgICAgIC8vIFJlZ2lzdHJhdGlvbiB3YXMgc3VjY2Vzc2Z1bFxyXG4gICAgICAgIGNvbnNvbGUubG9nKFxyXG4gICAgICAgICAgXCJTZXJ2aWNlV29ya2VyIHJlZ2lzdHJhdGlvbiBzdWNjZXNzZnVsIHdpdGggc2NvcGU6IFwiLFxyXG4gICAgICAgICAgcmVnaXN0cmF0aW9uLnNjb3BlXHJcbiAgICAgICAgKTtcclxuICAgICAgfSxcclxuICAgICAgZnVuY3Rpb24gKGVycikge1xyXG4gICAgICAgIC8vIHJlZ2lzdHJhdGlvbiBmYWlsZWQgOihcclxuICAgICAgICBjb25zb2xlLmxvZyhcIlNlcnZpY2VXb3JrZXIgcmVnaXN0cmF0aW9uIGZhaWxlZDogXCIsIGVycik7XHJcbiAgICAgIH1cclxuICAgICk7XHJcbiAgfSk7XHJcbn1cclxuXHJcbi8vIHBsYWNlIHlvdXIgY29kZSBiZWxvd1xyXG5cclxuY29uc3QgYWRkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5idXR0b24tLWFkZC1qc1wiKTtcclxuY29uc3QgcmVtb3ZlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5idXR0b24tLXJlbW92ZS1qc1wiKTtcclxubGV0IGNvdW50ZXJWYWx1ZSA9IDA7XHJcbmxldCBjb3VudGVyVmlldyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZ2xhc3NfX2NvdW50ZXJcIik7XHJcblxyXG5cclxuY29uc3Qga2V5ID0gbmV3IERhdGUoKS50b0lTT1N0cmluZygpLnNsaWNlKDAsIDEwKTtcclxuaWYgKGtleSBpbiBsb2NhbFN0b3JhZ2UpIHtcclxuICBjb3VudGVyVmFsdWUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShrZXkpO1xyXG59XHJcblxyXG5jb3VudGVyVmlldy5pbm5lckhUTUwgPSBjb3VudGVyVmFsdWU7XHJcbmNvbnNvbGUubG9nKGNvdW50ZXJWYWx1ZSk7XHJcbmFkZC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcclxuICBpZiAoY291bnRlclZhbHVlIDwgMTApIHtcclxuICAgIGNvdW50ZXJWYWx1ZSsrO1xyXG4gICAgY291bnRlclZpZXcuaW5uZXJIVE1MID0gY291bnRlclZhbHVlO1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oa2V5LCBjb3VudGVyVmFsdWUpO1xyXG4gIH1cclxufSk7XHJcblxyXG5yZW1vdmUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XHJcbiAgaWYgKGNvdW50ZXJWYWx1ZSA+IDApIHtcclxuICAgIGNvdW50ZXJWYWx1ZS0tO1xyXG4gICAgY291bnRlclZpZXcuaW5uZXJIVE1MID0gY291bnRlclZhbHVlO1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oa2V5LCBjb3VudGVyVmFsdWUpO1xyXG4gIH1cclxufSk7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///0\n')}]);