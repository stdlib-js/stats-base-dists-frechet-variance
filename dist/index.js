"use strict";var q=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(i){throw (r=0, i)}};};var c=q(function(o,a){
var u=require('@stdlib/math-base-assert-is-nan/dist'),v=require('@stdlib/math-base-special-gamma/dist'),s=require('@stdlib/constants-float64-pinf/dist');function f(e,r,i){var t,n;return u(e)||u(r)||u(i)||e<=0||r<=0?NaN:e<=2?s:(t=v(1-1/e),n=v(1-2/e),r*r*(n-t*t))}a.exports=f
});var g=c();module.exports=g;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
