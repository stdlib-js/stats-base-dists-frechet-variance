// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import s from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@v0.2.2-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-gamma@v0.3.0-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-pinf@v0.2.2-esm/index.mjs";function n(n,i,m){var a;return s(n)||s(i)||s(m)||n<=0||i<=0?NaN:n<=2?e:(a=t(1-1/n),i*i*(t(1-2/n)-a*a))}export{n as default};
//# sourceMappingURL=index.mjs.map