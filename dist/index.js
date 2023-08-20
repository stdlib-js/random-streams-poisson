"use strict";var o=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var l=o(function(be,V){V.exports={objectMode:!1,encoding:null,sep:"\n",copy:!0,siter:1e308}});var b=o(function(qe,y){
var A=require('@stdlib/assert-is-plain-object/dist'),s=require('@stdlib/assert-has-own-property/dist'),F=require('@stdlib/assert-is-boolean/dist').isPrimitive,G=require('@stdlib/assert-is-nonnegative-number/dist').isPrimitive,p=require('@stdlib/assert-is-string/dist').isPrimitive,I=require('@stdlib/assert-is-positive-integer/dist').isPrimitive,C=require('@stdlib/assert-is-nonnegative-integer/dist').isPrimitive,u=require('@stdlib/error-tools-fmtprodmsg/dist');function J(e,r){return A(r)?s(r,"sep")&&(e.sep=r.sep,!p(e.sep))?new TypeError(u('0rl2W',"sep",e.sep)):s(r,"objectMode")&&(e.objectMode=r.objectMode,!F(e.objectMode))?new TypeError(u('0rl2o',"objectMode",e.objectMode)):s(r,"encoding")&&(e.encoding=r.encoding,!p(e.encoding)&&e.encoding!==null)?new TypeError(u('0rl7n',"encoding",e.encoding)):s(r,"highWaterMark")&&(e.highWaterMark=r.highWaterMark,!G(e.highWaterMark))?new TypeError(u('0rl4k',"highWaterMark",e.highWaterMark)):s(r,"iter")&&(e.iter=r.iter,!C(e.iter))?new TypeError(u('0rl2t',"iter",e.iter)):s(r,"siter")&&(e.siter=r.siter,!I(e.siter))?new TypeError(u('0rl3P',"siter",e.siter)):(s(r,"prng")&&(e.prng=r.prng),s(r,"seed")&&(e.seed=r.seed),s(r,"state")&&(e.state=r.state),s(r,"copy")&&(e.copy=r.copy),null):new TypeError(u('0rl2V',r));}y.exports=J
});var _=o(function(_e,q){
var z=require("debug"),B=z("random:streams:poisson");q.exports=B
});var h=o(function(we,O){
var M=require("readable-stream").Readable,D=require('@stdlib/assert-is-positive-number/dist').isPrimitive,U=require('@stdlib/assert-is-error/dist'),H=require('@stdlib/object-assign/dist'),K=require('@stdlib/utils-inherit/dist'),w=require('@stdlib/utils-define-nonenumerable-property/dist'),a=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),v=require('@stdlib/utils-define-read-only-accessor/dist'),Q=require('@stdlib/utils-define-read-write-accessor/dist'),X=require('@stdlib/random-base-poisson/dist').factory,j=require('@stdlib/buffer-from-string/dist'),Y=require('@stdlib/error-tools-fmtprodmsg/dist'),Z=require('@stdlib/utils-next-tick/dist'),$=l(),ee=b(),g=_();function re(){return this._prng.seed}function te(){return this._prng.seedLength}function ie(){return this._prng.stateLength}function ne(){return this._prng.byteLength}function se(){return this._prng.state}function ae(e){this._prng.state=e}function ue(){var e,r;if(!this._destroyed)for(e=!0;e;){if(this._i+=1,this._i>this._iter)return g("Finished generating pseudorandom numbers."),this.push(null);r=this._prng(),g("Generated a new pseudorandom number. Value: %d. Iter: %d.",r,this._i),this._objectMode===!1&&(r=r.toString(),this._i===1?r=j(r):r=j(this._sep+r)),e=this.push(r),this._i%this._siter===0&&this.emit("state",this.state)}}function oe(e){var r;if(this._destroyed)return g("Attempted to destroy an already destroyed stream."),this;return r=this,this._destroyed=!0,Z(t),this;function t(){e&&(g("Stream was destroyed due to an error. Error: %s.",U(e)?e.message:JSON.stringify(e)),r.emit("error",e)),g("Closing the stream..."),r.emit("close")}}function i(e,r){var t,n;if(!(this instanceof i))return arguments.length>1?new i(e,r):new i(e);if(!D(e))throw new TypeError(Y('0rl71',e));if(t=H({},$),arguments.length>1&&(n=ee(t,r),n))throw n;return g("Creating a readable stream configured with the following options: %s.",JSON.stringify(t)),M.call(this,t),w(this,"_destroyed",!1),a(this,"_objectMode",t.objectMode),a(this,"_sep",t.sep),a(this,"_iter",t.iter),a(this,"_siter",t.siter),w(this,"_i",0),a(this,"_prng",X(e,t)),a(this,"PRNG",this._prng.PRNG),this}K(i,M);v(i.prototype,"seed",re);v(i.prototype,"seedLength",te);Q(i.prototype,"state",se,ae);v(i.prototype,"stateLength",ie);v(i.prototype,"byteLength",ne);a(i.prototype,"_read",ue);a(i.prototype,"destroy",oe);O.exports=i
});var E=o(function(je,S){
var ge=require('@stdlib/assert-is-plain-object/dist'),de=require('@stdlib/object-assign/dist'),ve=require('@stdlib/error-tools-fmtprodmsg/dist'),he=h();function ce(e,r){var t;if(arguments.length>1){if(t=r,!ge(t))throw new TypeError(ve('0rl2V',t));t=de({},r)}else t={};return t.objectMode=!0,new he(e,t)}S.exports=ce
});var k=o(function(Me,L){
var fe=require('@stdlib/assert-is-positive-number/dist').isPrimitive,P=require('@stdlib/assert-is-plain-object/dist'),T=require('@stdlib/object-assign/dist'),N=require('@stdlib/error-tools-fmtprodmsg/dist'),R=h();function me(e,r){var t,n,d;if(t=arguments.length,t>1){if(!P(r))throw new TypeError(N('0rl2V',r));d=m,n=T({},r)}else if(t===1)if(fe(e))d=m,n={};else{if(!P(e))throw new TypeError(N('0rl2V',e));n=T({},e),d=f}else n={},d=f;return d;function f(W){return new R(W,n)}function m(){return new R(e,n)}}L.exports=me
});var x=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),c=h(),le=E(),pe=k();x(c,"objectMode",le);x(c,"factory",pe);module.exports=c;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
