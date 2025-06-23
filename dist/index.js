"use strict";var q=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var a=q(function(o,v){
var t=require('@stdlib/math-base-assert-is-nan/dist'),n=require('@stdlib/math-base-special-gamma/dist'),s=require('@stdlib/constants-float64-pinf/dist');function f(e,r,c){var i,u;return t(e)||t(r)||t(c)||e<=0||r<=0?NaN:e<=2?s:(i=n(1-1/e),u=n(1-2/e),r*r*(u-i*i))}v.exports=f
});var g=a();module.exports=g;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
