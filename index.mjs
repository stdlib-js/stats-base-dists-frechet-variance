// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import s from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-gamma@esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-pinf@esm/index.mjs";var a=s,n=t,i=e;var m=function(s,t,e){var m;return a(s)||a(t)||a(e)||s<=0||t<=0?NaN:s<=2?i:(m=n(1-1/s),t*t*(n(1-2/s)-m*m))};export{m as default};
//# sourceMappingURL=index.mjs.map
