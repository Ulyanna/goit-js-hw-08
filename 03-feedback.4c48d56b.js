function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,i=/^0b[01]+$/i,a=/^0o[0-7]+$/i,u=parseInt,f="object"==typeof n&&n&&n.Object===Object&&n,c="object"==typeof self&&self&&self.Object===Object&&self,l=f||c||Function("return this")(),s=Object.prototype.toString,d=Math.max,m=Math.min,v=function(){return l.Date.now()};function g(e,t,n){var r,o,i,a,u,f,c=0,l=!1,s=!1,g=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function b(t){var n=r,i=o;return r=o=void 0,c=t,a=e.apply(i,n)}function O(e){return c=e,u=setTimeout(h,t),l?b(e):a}function S(e){var n=e-f;return void 0===f||n>=t||n<0||s&&e-c>=i}function h(){var e=v();if(S(e))return w(e);u=setTimeout(h,function(e){var n=t-(e-f);return s?m(n,i-(e-c)):n}(e))}function w(e){return u=void 0,g&&r?b(e):(r=o=void 0,a)}function T(){var e=v(),n=S(e);if(r=arguments,o=this,f=e,n){if(void 0===u)return O(f);if(s)return u=setTimeout(h,t),b(f)}return void 0===u&&(u=setTimeout(h,t)),a}return t=y(t)||0,p(n)&&(l=!!n.leading,i=(s="maxWait"in n)?d(y(n.maxWait)||0,t):i,g="trailing"in n?!!n.trailing:g),T.cancel=function(){void 0!==u&&clearTimeout(u),c=0,r=f=o=u=void 0},T.flush=function(){return void 0===u?a:w(v())},T}function p(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function y(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==s.call(e)}(e))return NaN;if(p(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=p(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(r,"");var n=i.test(e);return n||a.test(e)?u(e.slice(2),n?2:8):o.test(e)?NaN:+e}t=function(e,t,n){var r=!0,o=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return p(n)&&(r="leading"in n?!!n.leading:r,o="trailing"in n?!!n.trailing:o),g(e,t,{leading:r,maxWait:t,trailing:o})};const b=document.querySelector(".feedback-form"),O=document.querySelector("input"),S=document.querySelector("textarea");b.addEventListener("input",e(t)((function(e){h[e.target.name]=e.target.value,localStorage.setItem("feedback-form-state",JSON.stringify(h))}),500)),b.addEventListener("submit",(function(e){e.preventDefault();const t=e.currentTarget.elements.email.value,n=e.currentTarget.elements.message.value,r={email:t,message:n};console.log(r),b.reset(),localStorage.removeItem("feedback-form-state")}));const h={};!function(){const e=JSON.parse(localStorage.getItem("feedback-form-state"));e&&(O.value=e.email,S.value=e.message);!function(){const e=JSON.parse(localStorage.getItem("feedback-form-state"));if(!e)return;e.hasOwnProperty("email")||(O.value="");e.hasOwnProperty("message")||(S.value="")}()}();
//# sourceMappingURL=03-feedback.4c48d56b.js.map
