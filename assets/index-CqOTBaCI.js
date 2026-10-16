(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const V of document.querySelectorAll('link[rel="modulepreload"]'))n(V);new MutationObserver(V=>{for(const s of V)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function e(V){const s={};return V.integrity&&(s.integrity=V.integrity),V.referrerPolicy&&(s.referrerPolicy=V.referrerPolicy),V.crossOrigin==="use-credentials"?s.credentials="include":V.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(V){if(V.ep)return;V.ep=!0;const s=e(V);fetch(V.href,s)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Hs="170",Vo=0,ur=1,so=2,Aa=1,ma=2,nn=3,xn=0,_e=1,oe=2,vn=0,si=1,Ui=2,qr=3,fr=4,ro=5,Dn=100,ao=101,oo=102,lo=103,co=104,ho=200,uo=201,qo=202,fo=203,is=204,Vs=205,po=206,Ao=207,mo=208,go=209,vo=210,_o=211,Mo=212,xo=213,So=214,ss=0,rs=1,as=2,oi=3,os=4,ls=5,cs=6,hs=7,ga=0,Eo=1,yo=2,_n=0,To=1,wo=2,Co=3,Ro=4,bo=5,Uo=6,Po=7,va=300,li=301,ci=302,us=303,qs=304,gV=306,Pi=1e3,Ln=1001,fs=1002,ke=1003,Do=1004,Gi=1005,Ee=1006,EV=1007,Bn=1008,an=1009,_a=1010,Ma=1011,Di=1012,Ws=1013,Fn=1014,Vn=1015,Li=1016,Ys=1017,Qs=1018,hi=1020,xa=35902,Sa=1021,Ea=1022,Ge=1023,ya=1024,Ta=1025,ri=1026,ui=1027,wa=1028,Xs=1029,Ca=1030,Ks=1031,Js=1033,hV=33776,uV=33777,qV=33778,fV=33779,ds=35840,ps=35841,As=35842,ms=35843,gs=36196,vs=37492,_s=37496,Ms=37808,xs=37809,Ss=37810,Es=37811,ys=37812,Ts=37813,ws=37814,Cs=37815,Rs=37816,bs=37817,Us=37818,Ps=37819,Ds=37820,Is=37821,dV=36492,Ls=36494,Bs=36495,Ra=36283,Fs=36284,Ns=36285,Os=36286,Io=3200,Lo=3201,ba=0,Bo=1,mn="",Ue="srgb",di="srgb-linear",vV="linear",Qt="srgb",zn=7680,dr=519,Fo=512,No=513,Oo=514,Ua=515,Go=516,zo=517,ko=518,Ho=519,pr=35044,Ar="300 es",sn=2e3,AV=2001;class pi{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const V=this._listeners[t];if(V!==void 0){const s=V.indexOf(e);s!==-1&&V.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const V=n.slice(0);for(let s=0,r=V.length;s<r;s++)V[s].call(this,t);t.target=null}}}const pe=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let mr=1234567;const wi=Math.PI/180,Ii=180/Math.PI;function Ai(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(pe[i&255]+pe[i>>8&255]+pe[i>>16&255]+pe[i>>24&255]+"-"+pe[t&255]+pe[t>>8&255]+"-"+pe[t>>16&15|64]+pe[t>>24&255]+"-"+pe[e&63|128]+pe[e>>8&255]+"-"+pe[e>>16&255]+pe[e>>24&255]+pe[n&255]+pe[n>>8&255]+pe[n>>16&255]+pe[n>>24&255]).toLowerCase()}function fe(i,t,e){return Math.max(t,Math.min(e,i))}function js(i,t){return(i%t+t)%t}function Wo(i,t,e,n,V){return n+(i-t)*(V-n)/(e-t)}function Yo(i,t,e){return i!==t?(e-i)/(t-i):0}function Ci(i,t,e){return(1-e)*i+e*t}function Qo(i,t,e,n){return Ci(i,t,1-Math.exp(-e*n))}function Xo(i,t=1){return t-Math.abs(js(i,t*2)-t)}function Ko(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function Jo(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function jo(i,t){return i+Math.floor(Math.random()*(t-i+1))}function Zo(i,t){return i+Math.random()*(t-i)}function $o(i){return i*(.5-Math.random())}function tl(i){i!==void 0&&(mr=i);let t=mr+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function el(i){return i*wi}function nl(i){return i*Ii}function il(i){return(i&i-1)===0&&i!==0}function Vl(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function sl(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function rl(i,t,e,n,V){const s=Math.cos,r=Math.sin,a=s(e/2),o=r(e/2),l=s((t+n)/2),c=r((t+n)/2),h=s((t-n)/2),q=r((t-n)/2),f=s((n-t)/2),p=r((n-t)/2);switch(V){case"XYX":i.set(a*c,o*h,o*q,a*l);break;case"YZY":i.set(o*q,a*c,o*h,a*l);break;case"ZXZ":i.set(o*h,o*q,a*c,a*l);break;case"XZX":i.set(a*c,o*p,o*f,a*l);break;case"YXY":i.set(o*f,a*c,o*p,a*l);break;case"ZYZ":i.set(o*p,o*f,a*c,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+V)}}function ni(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function ge(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const An={DEG2RAD:wi,RAD2DEG:Ii,generateUUID:Ai,clamp:fe,euclideanModulo:js,mapLinear:Wo,inverseLerp:Yo,lerp:Ci,damp:Qo,pingpong:Xo,smoothstep:Ko,smootherstep:Jo,randInt:jo,randFloat:Zo,randFloatSpread:$o,seededRandom:tl,degToRad:el,radToDeg:nl,isPowerOfTwo:il,ceilPowerOfTwo:Vl,floorPowerOfTwo:sl,setQuaternionFromProperEuler:rl,normalize:ge,denormalize:ni};class _t{constructor(t=0,e=0){_t.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,V=t.elements;return this.x=V[0]*e+V[3]*n+V[6],this.y=V[1]*e+V[4]*n+V[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(fe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),V=Math.sin(e),s=this.x-t.x,r=this.y-t.y;return this.x=s*n-r*V+t.x,this.y=s*V+r*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class bt{constructor(t,e,n,V,s,r,a,o,l){bt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,V,s,r,a,o,l)}set(t,e,n,V,s,r,a,o,l){const c=this.elements;return c[0]=t,c[1]=V,c[2]=a,c[3]=e,c[4]=s,c[5]=o,c[6]=n,c[7]=r,c[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,V=e.elements,s=this.elements,r=n[0],a=n[3],o=n[6],l=n[1],c=n[4],h=n[7],q=n[2],f=n[5],p=n[8],m=V[0],d=V[3],u=V[6],E=V[1],S=V[4],_=V[7],I=V[2],y=V[5],T=V[8];return s[0]=r*m+a*E+o*I,s[3]=r*d+a*S+o*y,s[6]=r*u+a*_+o*T,s[1]=l*m+c*E+h*I,s[4]=l*d+c*S+h*y,s[7]=l*u+c*_+h*T,s[2]=q*m+f*E+p*I,s[5]=q*d+f*S+p*y,s[8]=q*u+f*_+p*T,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],V=t[2],s=t[3],r=t[4],a=t[5],o=t[6],l=t[7],c=t[8];return e*r*c-e*a*l-n*s*c+n*a*o+V*s*l-V*r*o}invert(){const t=this.elements,e=t[0],n=t[1],V=t[2],s=t[3],r=t[4],a=t[5],o=t[6],l=t[7],c=t[8],h=c*r-a*l,q=a*o-c*s,f=l*s-r*o,p=e*h+n*q+V*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);const m=1/p;return t[0]=h*m,t[1]=(V*l-c*n)*m,t[2]=(a*n-V*r)*m,t[3]=q*m,t[4]=(c*e-V*o)*m,t[5]=(V*s-a*e)*m,t[6]=f*m,t[7]=(n*o-l*e)*m,t[8]=(r*e-n*s)*m,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,V,s,r,a){const o=Math.cos(s),l=Math.sin(s);return this.set(n*o,n*l,-n*(o*r+l*a)+r+t,-V*l,V*o,-V*(-l*r+o*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(yV.makeScale(t,e)),this}rotate(t){return this.premultiply(yV.makeRotation(-t)),this}translate(t,e){return this.premultiply(yV.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let V=0;V<9;V++)if(e[V]!==n[V])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const yV=new bt;function Pa(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function mV(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function al(){const i=mV("canvas");return i.style.display="block",i}const gr={};function yi(i){i in gr||(gr[i]=!0,console.warn(i))}function ol(i,t,e){return new Promise(function(n,V){function s(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:V();break;case i.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:n()}}setTimeout(s,e)})}function ll(i){const t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function cl(i){const t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const zt={enabled:!0,workingColorSpace:di,spaces:{},convert:function(i,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===Qt&&(i.r=rn(i.r),i.g=rn(i.g),i.b=rn(i.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(i.applyMatrix3(this.spaces[t].toXYZ),i.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===Qt&&(i.r=ai(i.r),i.g=ai(i.g),i.b=ai(i.b))),i},fromWorkingColorSpace:function(i,t){return this.convert(i,this.workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===mn?vV:this.spaces[i].transfer},getLuminanceCoefficients:function(i,t=this.workingColorSpace){return i.fromArray(this.spaces[t].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,t,e){return i.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function rn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ai(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const vr=[.64,.33,.3,.6,.15,.06],_r=[.2126,.7152,.0722],Mr=[.3127,.329],xr=new bt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Sr=new bt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);zt.define({[di]:{primaries:vr,whitePoint:Mr,transfer:vV,toXYZ:xr,fromXYZ:Sr,luminanceCoefficients:_r,workingColorSpaceConfig:{unpackColorSpace:Ue},outputColorSpaceConfig:{drawingBufferColorSpace:Ue}},[Ue]:{primaries:vr,whitePoint:Mr,transfer:Qt,toXYZ:xr,fromXYZ:Sr,luminanceCoefficients:_r,outputColorSpaceConfig:{drawingBufferColorSpace:Ue}}});let kn;class hl{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{kn===void 0&&(kn=mV("canvas")),kn.width=t.width,kn.height=t.height;const n=kn.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=kn}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=mV("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const V=n.getImageData(0,0,t.width,t.height),s=V.data;for(let r=0;r<s.length;r++)s[r]=rn(s[r]/255)*255;return n.putImageData(V,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(rn(e[n]/255)*255):e[n]=rn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let ul=0;class Da{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:ul++}),this.uuid=Ai(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},V=this.data;if(V!==null){let s;if(Array.isArray(V)){s=[];for(let r=0,a=V.length;r<a;r++)V[r].isDataTexture?s.push(TV(V[r].image)):s.push(TV(V[r]))}else s=TV(V);n.url=s}return e||(t.images[this.uuid]=n),n}}function TV(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?hl.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let ql=0;class Me extends pi{constructor(t=Me.DEFAULT_IMAGE,e=Me.DEFAULT_MAPPING,n=Ln,V=Ln,s=Ee,r=Bn,a=Ge,o=an,l=Me.DEFAULT_ANISOTROPY,c=mn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ql++}),this.uuid=Ai(),this.name="",this.source=new Da(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=V,this.magFilter=s,this.minFilter=r,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=o,this.offset=new _t(0,0),this.repeat=new _t(1,1),this.center=new _t(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new bt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=c,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==va)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Pi:t.x=t.x-Math.floor(t.x);break;case Ln:t.x=t.x<0?0:1;break;case fs:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Pi:t.y=t.y-Math.floor(t.y);break;case Ln:t.y=t.y<0?0:1;break;case fs:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Me.DEFAULT_IMAGE=null;Me.DEFAULT_MAPPING=va;Me.DEFAULT_ANISOTROPY=1;class se{constructor(t=0,e=0,n=0,V=1){se.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=V}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,V){return this.x=t,this.y=e,this.z=n,this.w=V,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,V=this.z,s=this.w,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*V+r[12]*s,this.y=r[1]*e+r[5]*n+r[9]*V+r[13]*s,this.z=r[2]*e+r[6]*n+r[10]*V+r[14]*s,this.w=r[3]*e+r[7]*n+r[11]*V+r[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,V,s;const o=t.elements,l=o[0],c=o[4],h=o[8],q=o[1],f=o[5],p=o[9],m=o[2],d=o[6],u=o[10];if(Math.abs(c-q)<.01&&Math.abs(h-m)<.01&&Math.abs(p-d)<.01){if(Math.abs(c+q)<.1&&Math.abs(h+m)<.1&&Math.abs(p+d)<.1&&Math.abs(l+f+u-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const S=(l+1)/2,_=(f+1)/2,I=(u+1)/2,y=(c+q)/4,T=(h+m)/4,b=(p+d)/4;return S>_&&S>I?S<.01?(n=0,V=.707106781,s=.707106781):(n=Math.sqrt(S),V=y/n,s=T/n):_>I?_<.01?(n=.707106781,V=0,s=.707106781):(V=Math.sqrt(_),n=y/V,s=b/V):I<.01?(n=.707106781,V=.707106781,s=0):(s=Math.sqrt(I),n=T/s,V=b/s),this.set(n,V,s,e),this}let E=Math.sqrt((d-p)*(d-p)+(h-m)*(h-m)+(q-c)*(q-c));return Math.abs(E)<.001&&(E=1),this.x=(d-p)/E,this.y=(h-m)/E,this.z=(q-c)/E,this.w=Math.acos((l+f+u-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class fl extends pi{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new se(0,0,t,e),this.scissorTest=!1,this.viewport=new se(0,0,t,e);const V={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ee,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const s=new Me(V,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];const r=n.count;for(let a=0;a<r;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let V=0,s=this.textures.length;V<s;V++)this.textures[V].image.width=t,this.textures[V].image.height=e,this.textures[V].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,V=t.textures.length;n<V;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Da(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Nn extends fl{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Ia extends Me{constructor(t=null,e=1,n=1,V=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:V},this.magFilter=ke,this.minFilter=ke,this.wrapR=Ln,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class dl extends Me{constructor(t=null,e=1,n=1,V=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:V},this.magFilter=ke,this.minFilter=ke,this.wrapR=Ln,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Bi{constructor(t=0,e=0,n=0,V=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=V}static slerpFlat(t,e,n,V,s,r,a){let o=n[V+0],l=n[V+1],c=n[V+2],h=n[V+3];const q=s[r+0],f=s[r+1],p=s[r+2],m=s[r+3];if(a===0){t[e+0]=o,t[e+1]=l,t[e+2]=c,t[e+3]=h;return}if(a===1){t[e+0]=q,t[e+1]=f,t[e+2]=p,t[e+3]=m;return}if(h!==m||o!==q||l!==f||c!==p){let d=1-a;const u=o*q+l*f+c*p+h*m,E=u>=0?1:-1,S=1-u*u;if(S>Number.EPSILON){const I=Math.sqrt(S),y=Math.atan2(I,u*E);d=Math.sin(d*y)/I,a=Math.sin(a*y)/I}const _=a*E;if(o=o*d+q*_,l=l*d+f*_,c=c*d+p*_,h=h*d+m*_,d===1-a){const I=1/Math.sqrt(o*o+l*l+c*c+h*h);o*=I,l*=I,c*=I,h*=I}}t[e]=o,t[e+1]=l,t[e+2]=c,t[e+3]=h}static multiplyQuaternionsFlat(t,e,n,V,s,r){const a=n[V],o=n[V+1],l=n[V+2],c=n[V+3],h=s[r],q=s[r+1],f=s[r+2],p=s[r+3];return t[e]=a*p+c*h+o*f-l*q,t[e+1]=o*p+c*q+l*h-a*f,t[e+2]=l*p+c*f+a*q-o*h,t[e+3]=c*p-a*h-o*q-l*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,V){return this._x=t,this._y=e,this._z=n,this._w=V,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,V=t._y,s=t._z,r=t._order,a=Math.cos,o=Math.sin,l=a(n/2),c=a(V/2),h=a(s/2),q=o(n/2),f=o(V/2),p=o(s/2);switch(r){case"XYZ":this._x=q*c*h+l*f*p,this._y=l*f*h-q*c*p,this._z=l*c*p+q*f*h,this._w=l*c*h-q*f*p;break;case"YXZ":this._x=q*c*h+l*f*p,this._y=l*f*h-q*c*p,this._z=l*c*p-q*f*h,this._w=l*c*h+q*f*p;break;case"ZXY":this._x=q*c*h-l*f*p,this._y=l*f*h+q*c*p,this._z=l*c*p+q*f*h,this._w=l*c*h-q*f*p;break;case"ZYX":this._x=q*c*h-l*f*p,this._y=l*f*h+q*c*p,this._z=l*c*p-q*f*h,this._w=l*c*h+q*f*p;break;case"YZX":this._x=q*c*h+l*f*p,this._y=l*f*h+q*c*p,this._z=l*c*p-q*f*h,this._w=l*c*h-q*f*p;break;case"XZY":this._x=q*c*h-l*f*p,this._y=l*f*h-q*c*p,this._z=l*c*p+q*f*h,this._w=l*c*h+q*f*p;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+r)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,V=Math.sin(n);return this._x=t.x*V,this._y=t.y*V,this._z=t.z*V,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],V=e[4],s=e[8],r=e[1],a=e[5],o=e[9],l=e[2],c=e[6],h=e[10],q=n+a+h;if(q>0){const f=.5/Math.sqrt(q+1);this._w=.25/f,this._x=(c-o)*f,this._y=(s-l)*f,this._z=(r-V)*f}else if(n>a&&n>h){const f=2*Math.sqrt(1+n-a-h);this._w=(c-o)/f,this._x=.25*f,this._y=(V+r)/f,this._z=(s+l)/f}else if(a>h){const f=2*Math.sqrt(1+a-n-h);this._w=(s-l)/f,this._x=(V+r)/f,this._y=.25*f,this._z=(o+c)/f}else{const f=2*Math.sqrt(1+h-n-a);this._w=(r-V)/f,this._x=(s+l)/f,this._y=(o+c)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(fe(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const V=Math.min(1,e/n);return this.slerp(t,V),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,V=t._y,s=t._z,r=t._w,a=e._x,o=e._y,l=e._z,c=e._w;return this._x=n*c+r*a+V*l-s*o,this._y=V*c+r*o+s*a-n*l,this._z=s*c+r*l+n*o-V*a,this._w=r*c-n*a-V*o-s*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,V=this._y,s=this._z,r=this._w;let a=r*t._w+n*t._x+V*t._y+s*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=r,this._x=n,this._y=V,this._z=s,this;const o=1-a*a;if(o<=Number.EPSILON){const f=1-e;return this._w=f*r+e*this._w,this._x=f*n+e*this._x,this._y=f*V+e*this._y,this._z=f*s+e*this._z,this.normalize(),this}const l=Math.sqrt(o),c=Math.atan2(l,a),h=Math.sin((1-e)*c)/l,q=Math.sin(e*c)/l;return this._w=r*h+this._w*q,this._x=n*h+this._x*q,this._y=V*h+this._y*q,this._z=s*h+this._z*q,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),V=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(V*Math.sin(t),V*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class R{constructor(t=0,e=0,n=0){R.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Er.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Er.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,V=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*V,this.y=s[1]*e+s[4]*n+s[7]*V,this.z=s[2]*e+s[5]*n+s[8]*V,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,V=this.z,s=t.elements,r=1/(s[3]*e+s[7]*n+s[11]*V+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*V+s[12])*r,this.y=(s[1]*e+s[5]*n+s[9]*V+s[13])*r,this.z=(s[2]*e+s[6]*n+s[10]*V+s[14])*r,this}applyQuaternion(t){const e=this.x,n=this.y,V=this.z,s=t.x,r=t.y,a=t.z,o=t.w,l=2*(r*V-a*n),c=2*(a*e-s*V),h=2*(s*n-r*e);return this.x=e+o*l+r*h-a*c,this.y=n+o*c+a*l-s*h,this.z=V+o*h+s*c-r*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,V=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*V,this.y=s[1]*e+s[5]*n+s[9]*V,this.z=s[2]*e+s[6]*n+s[10]*V,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,V=t.y,s=t.z,r=e.x,a=e.y,o=e.z;return this.x=V*o-s*a,this.y=s*r-n*o,this.z=n*a-V*r,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return wV.copy(this).projectOnVector(t),this.sub(wV)}reflect(t){return this.sub(wV.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(fe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,V=this.z-t.z;return e*e+n*n+V*V}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const V=Math.sin(e)*t;return this.x=V*Math.sin(n),this.y=Math.cos(e)*t,this.z=V*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),V=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=V,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const wV=new R,Er=new Bi;class Fi{constructor(t=new R(1/0,1/0,1/0),e=new R(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Be.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Be.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Be.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let r=0,a=s.count;r<a;r++)t.isMesh===!0?t.getVertexPosition(r,Be):Be.fromBufferAttribute(s,r),Be.applyMatrix4(t.matrixWorld),this.expandByPoint(Be);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),zi.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),zi.copy(n.boundingBox)),zi.applyMatrix4(t.matrixWorld),this.union(zi)}const V=t.children;for(let s=0,r=V.length;s<r;s++)this.expandByObject(V[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Be),Be.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Mi),ki.subVectors(this.max,Mi),Hn.subVectors(t.a,Mi),Wn.subVectors(t.b,Mi),Yn.subVectors(t.c,Mi),hn.subVectors(Wn,Hn),un.subVectors(Yn,Wn),yn.subVectors(Hn,Yn);let e=[0,-hn.z,hn.y,0,-un.z,un.y,0,-yn.z,yn.y,hn.z,0,-hn.x,un.z,0,-un.x,yn.z,0,-yn.x,-hn.y,hn.x,0,-un.y,un.x,0,-yn.y,yn.x,0];return!CV(e,Hn,Wn,Yn,ki)||(e=[1,0,0,0,1,0,0,0,1],!CV(e,Hn,Wn,Yn,ki))?!1:(Hi.crossVectors(hn,un),e=[Hi.x,Hi.y,Hi.z],CV(e,Hn,Wn,Yn,ki))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Be).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Be).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(je[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),je[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),je[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),je[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),je[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),je[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),je[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),je[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(je),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const je=[new R,new R,new R,new R,new R,new R,new R,new R],Be=new R,zi=new Fi,Hn=new R,Wn=new R,Yn=new R,hn=new R,un=new R,yn=new R,Mi=new R,ki=new R,Hi=new R,Tn=new R;function CV(i,t,e,n,V){for(let s=0,r=i.length-3;s<=r;s+=3){Tn.fromArray(i,s);const a=V.x*Math.abs(Tn.x)+V.y*Math.abs(Tn.y)+V.z*Math.abs(Tn.z),o=t.dot(Tn),l=e.dot(Tn),c=n.dot(Tn);if(Math.max(-Math.max(o,l,c),Math.min(o,l,c))>a)return!1}return!0}const pl=new Fi,xi=new R,RV=new R;class _V{constructor(t=new R,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):pl.setFromPoints(t).getCenter(n);let V=0;for(let s=0,r=t.length;s<r;s++)V=Math.max(V,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(V),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;xi.subVectors(t,this.center);const e=xi.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),V=(n-this.radius)*.5;this.center.addScaledVector(xi,V/n),this.radius+=V}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(RV.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(xi.copy(t.center).add(RV)),this.expandByPoint(xi.copy(t.center).sub(RV))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ze=new R,bV=new R,Wi=new R,qn=new R,UV=new R,Yi=new R,PV=new R;class La{constructor(t=new R,e=new R(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Ze)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Ze.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Ze.copy(this.origin).addScaledVector(this.direction,e),Ze.distanceToSquared(t))}distanceSqToSegment(t,e,n,V){bV.copy(t).add(e).multiplyScalar(.5),Wi.copy(e).sub(t).normalize(),qn.copy(this.origin).sub(bV);const s=t.distanceTo(e)*.5,r=-this.direction.dot(Wi),a=qn.dot(this.direction),o=-qn.dot(Wi),l=qn.lengthSq(),c=Math.abs(1-r*r);let h,q,f,p;if(c>0)if(h=r*o-a,q=r*a-o,p=s*c,h>=0)if(q>=-p)if(q<=p){const m=1/c;h*=m,q*=m,f=h*(h+r*q+2*a)+q*(r*h+q+2*o)+l}else q=s,h=Math.max(0,-(r*q+a)),f=-h*h+q*(q+2*o)+l;else q=-s,h=Math.max(0,-(r*q+a)),f=-h*h+q*(q+2*o)+l;else q<=-p?(h=Math.max(0,-(-r*s+a)),q=h>0?-s:Math.min(Math.max(-s,-o),s),f=-h*h+q*(q+2*o)+l):q<=p?(h=0,q=Math.min(Math.max(-s,-o),s),f=q*(q+2*o)+l):(h=Math.max(0,-(r*s+a)),q=h>0?s:Math.min(Math.max(-s,-o),s),f=-h*h+q*(q+2*o)+l);else q=r>0?-s:s,h=Math.max(0,-(r*q+a)),f=-h*h+q*(q+2*o)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,h),V&&V.copy(bV).addScaledVector(Wi,q),f}intersectSphere(t,e){Ze.subVectors(t.center,this.origin);const n=Ze.dot(this.direction),V=Ze.dot(Ze)-n*n,s=t.radius*t.radius;if(V>s)return null;const r=Math.sqrt(s-V),a=n-r,o=n+r;return o<0?null:a<0?this.at(o,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,V,s,r,a,o;const l=1/this.direction.x,c=1/this.direction.y,h=1/this.direction.z,q=this.origin;return l>=0?(n=(t.min.x-q.x)*l,V=(t.max.x-q.x)*l):(n=(t.max.x-q.x)*l,V=(t.min.x-q.x)*l),c>=0?(s=(t.min.y-q.y)*c,r=(t.max.y-q.y)*c):(s=(t.max.y-q.y)*c,r=(t.min.y-q.y)*c),n>r||s>V||((s>n||isNaN(n))&&(n=s),(r<V||isNaN(V))&&(V=r),h>=0?(a=(t.min.z-q.z)*h,o=(t.max.z-q.z)*h):(a=(t.max.z-q.z)*h,o=(t.min.z-q.z)*h),n>o||a>V)||((a>n||n!==n)&&(n=a),(o<V||V!==V)&&(V=o),V<0)?null:this.at(n>=0?n:V,e)}intersectsBox(t){return this.intersectBox(t,Ze)!==null}intersectTriangle(t,e,n,V,s){UV.subVectors(e,t),Yi.subVectors(n,t),PV.crossVectors(UV,Yi);let r=this.direction.dot(PV),a;if(r>0){if(V)return null;a=1}else if(r<0)a=-1,r=-r;else return null;qn.subVectors(this.origin,t);const o=a*this.direction.dot(Yi.crossVectors(qn,Yi));if(o<0)return null;const l=a*this.direction.dot(UV.cross(qn));if(l<0||o+l>r)return null;const c=-a*qn.dot(PV);return c<0?null:this.at(c/r,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class te{constructor(t,e,n,V,s,r,a,o,l,c,h,q,f,p,m,d){te.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,V,s,r,a,o,l,c,h,q,f,p,m,d)}set(t,e,n,V,s,r,a,o,l,c,h,q,f,p,m,d){const u=this.elements;return u[0]=t,u[4]=e,u[8]=n,u[12]=V,u[1]=s,u[5]=r,u[9]=a,u[13]=o,u[2]=l,u[6]=c,u[10]=h,u[14]=q,u[3]=f,u[7]=p,u[11]=m,u[15]=d,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new te().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,V=1/Qn.setFromMatrixColumn(t,0).length(),s=1/Qn.setFromMatrixColumn(t,1).length(),r=1/Qn.setFromMatrixColumn(t,2).length();return e[0]=n[0]*V,e[1]=n[1]*V,e[2]=n[2]*V,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*r,e[9]=n[9]*r,e[10]=n[10]*r,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,V=t.y,s=t.z,r=Math.cos(n),a=Math.sin(n),o=Math.cos(V),l=Math.sin(V),c=Math.cos(s),h=Math.sin(s);if(t.order==="XYZ"){const q=r*c,f=r*h,p=a*c,m=a*h;e[0]=o*c,e[4]=-o*h,e[8]=l,e[1]=f+p*l,e[5]=q-m*l,e[9]=-a*o,e[2]=m-q*l,e[6]=p+f*l,e[10]=r*o}else if(t.order==="YXZ"){const q=o*c,f=o*h,p=l*c,m=l*h;e[0]=q+m*a,e[4]=p*a-f,e[8]=r*l,e[1]=r*h,e[5]=r*c,e[9]=-a,e[2]=f*a-p,e[6]=m+q*a,e[10]=r*o}else if(t.order==="ZXY"){const q=o*c,f=o*h,p=l*c,m=l*h;e[0]=q-m*a,e[4]=-r*h,e[8]=p+f*a,e[1]=f+p*a,e[5]=r*c,e[9]=m-q*a,e[2]=-r*l,e[6]=a,e[10]=r*o}else if(t.order==="ZYX"){const q=r*c,f=r*h,p=a*c,m=a*h;e[0]=o*c,e[4]=p*l-f,e[8]=q*l+m,e[1]=o*h,e[5]=m*l+q,e[9]=f*l-p,e[2]=-l,e[6]=a*o,e[10]=r*o}else if(t.order==="YZX"){const q=r*o,f=r*l,p=a*o,m=a*l;e[0]=o*c,e[4]=m-q*h,e[8]=p*h+f,e[1]=h,e[5]=r*c,e[9]=-a*c,e[2]=-l*c,e[6]=f*h+p,e[10]=q-m*h}else if(t.order==="XZY"){const q=r*o,f=r*l,p=a*o,m=a*l;e[0]=o*c,e[4]=-h,e[8]=l*c,e[1]=q*h+m,e[5]=r*c,e[9]=f*h-p,e[2]=p*h-f,e[6]=a*c,e[10]=m*h+q}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Al,t,ml)}lookAt(t,e,n){const V=this.elements;return Te.subVectors(t,e),Te.lengthSq()===0&&(Te.z=1),Te.normalize(),fn.crossVectors(n,Te),fn.lengthSq()===0&&(Math.abs(n.z)===1?Te.x+=1e-4:Te.z+=1e-4,Te.normalize(),fn.crossVectors(n,Te)),fn.normalize(),Qi.crossVectors(Te,fn),V[0]=fn.x,V[4]=Qi.x,V[8]=Te.x,V[1]=fn.y,V[5]=Qi.y,V[9]=Te.y,V[2]=fn.z,V[6]=Qi.z,V[10]=Te.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,V=e.elements,s=this.elements,r=n[0],a=n[4],o=n[8],l=n[12],c=n[1],h=n[5],q=n[9],f=n[13],p=n[2],m=n[6],d=n[10],u=n[14],E=n[3],S=n[7],_=n[11],I=n[15],y=V[0],T=V[4],b=V[8],M=V[12],v=V[1],w=V[5],O=V[9],N=V[13],k=V[2],K=V[6],H=V[10],$=V[14],z=V[3],it=V[7],lt=V[11],gt=V[15];return s[0]=r*y+a*v+o*k+l*z,s[4]=r*T+a*w+o*K+l*it,s[8]=r*b+a*O+o*H+l*lt,s[12]=r*M+a*N+o*$+l*gt,s[1]=c*y+h*v+q*k+f*z,s[5]=c*T+h*w+q*K+f*it,s[9]=c*b+h*O+q*H+f*lt,s[13]=c*M+h*N+q*$+f*gt,s[2]=p*y+m*v+d*k+u*z,s[6]=p*T+m*w+d*K+u*it,s[10]=p*b+m*O+d*H+u*lt,s[14]=p*M+m*N+d*$+u*gt,s[3]=E*y+S*v+_*k+I*z,s[7]=E*T+S*w+_*K+I*it,s[11]=E*b+S*O+_*H+I*lt,s[15]=E*M+S*N+_*$+I*gt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],V=t[8],s=t[12],r=t[1],a=t[5],o=t[9],l=t[13],c=t[2],h=t[6],q=t[10],f=t[14],p=t[3],m=t[7],d=t[11],u=t[15];return p*(+s*o*h-V*l*h-s*a*q+n*l*q+V*a*f-n*o*f)+m*(+e*o*f-e*l*q+s*r*q-V*r*f+V*l*c-s*o*c)+d*(+e*l*h-e*a*f-s*r*h+n*r*f+s*a*c-n*l*c)+u*(-V*a*c-e*o*h+e*a*q+V*r*h-n*r*q+n*o*c)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const V=this.elements;return t.isVector3?(V[12]=t.x,V[13]=t.y,V[14]=t.z):(V[12]=t,V[13]=e,V[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],V=t[2],s=t[3],r=t[4],a=t[5],o=t[6],l=t[7],c=t[8],h=t[9],q=t[10],f=t[11],p=t[12],m=t[13],d=t[14],u=t[15],E=h*d*l-m*q*l+m*o*f-a*d*f-h*o*u+a*q*u,S=p*q*l-c*d*l-p*o*f+r*d*f+c*o*u-r*q*u,_=c*m*l-p*h*l+p*a*f-r*m*f-c*a*u+r*h*u,I=p*h*o-c*m*o-p*a*q+r*m*q+c*a*d-r*h*d,y=e*E+n*S+V*_+s*I;if(y===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/y;return t[0]=E*T,t[1]=(m*q*s-h*d*s-m*V*f+n*d*f+h*V*u-n*q*u)*T,t[2]=(a*d*s-m*o*s+m*V*l-n*d*l-a*V*u+n*o*u)*T,t[3]=(h*o*s-a*q*s-h*V*l+n*q*l+a*V*f-n*o*f)*T,t[4]=S*T,t[5]=(c*d*s-p*q*s+p*V*f-e*d*f-c*V*u+e*q*u)*T,t[6]=(p*o*s-r*d*s-p*V*l+e*d*l+r*V*u-e*o*u)*T,t[7]=(r*q*s-c*o*s+c*V*l-e*q*l-r*V*f+e*o*f)*T,t[8]=_*T,t[9]=(p*h*s-c*m*s-p*n*f+e*m*f+c*n*u-e*h*u)*T,t[10]=(r*m*s-p*a*s+p*n*l-e*m*l-r*n*u+e*a*u)*T,t[11]=(c*a*s-r*h*s-c*n*l+e*h*l+r*n*f-e*a*f)*T,t[12]=I*T,t[13]=(c*m*V-p*h*V+p*n*q-e*m*q-c*n*d+e*h*d)*T,t[14]=(p*a*V-r*m*V-p*n*o+e*m*o+r*n*d-e*a*d)*T,t[15]=(r*h*V-c*a*V+c*n*o-e*h*o-r*n*q+e*a*q)*T,this}scale(t){const e=this.elements,n=t.x,V=t.y,s=t.z;return e[0]*=n,e[4]*=V,e[8]*=s,e[1]*=n,e[5]*=V,e[9]*=s,e[2]*=n,e[6]*=V,e[10]*=s,e[3]*=n,e[7]*=V,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],V=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,V))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),V=Math.sin(e),s=1-n,r=t.x,a=t.y,o=t.z,l=s*r,c=s*a;return this.set(l*r+n,l*a-V*o,l*o+V*a,0,l*a+V*o,c*a+n,c*o-V*r,0,l*o-V*a,c*o+V*r,s*o*o+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,V,s,r){return this.set(1,n,s,0,t,1,r,0,e,V,1,0,0,0,0,1),this}compose(t,e,n){const V=this.elements,s=e._x,r=e._y,a=e._z,o=e._w,l=s+s,c=r+r,h=a+a,q=s*l,f=s*c,p=s*h,m=r*c,d=r*h,u=a*h,E=o*l,S=o*c,_=o*h,I=n.x,y=n.y,T=n.z;return V[0]=(1-(m+u))*I,V[1]=(f+_)*I,V[2]=(p-S)*I,V[3]=0,V[4]=(f-_)*y,V[5]=(1-(q+u))*y,V[6]=(d+E)*y,V[7]=0,V[8]=(p+S)*T,V[9]=(d-E)*T,V[10]=(1-(q+m))*T,V[11]=0,V[12]=t.x,V[13]=t.y,V[14]=t.z,V[15]=1,this}decompose(t,e,n){const V=this.elements;let s=Qn.set(V[0],V[1],V[2]).length();const r=Qn.set(V[4],V[5],V[6]).length(),a=Qn.set(V[8],V[9],V[10]).length();this.determinant()<0&&(s=-s),t.x=V[12],t.y=V[13],t.z=V[14],Fe.copy(this);const l=1/s,c=1/r,h=1/a;return Fe.elements[0]*=l,Fe.elements[1]*=l,Fe.elements[2]*=l,Fe.elements[4]*=c,Fe.elements[5]*=c,Fe.elements[6]*=c,Fe.elements[8]*=h,Fe.elements[9]*=h,Fe.elements[10]*=h,e.setFromRotationMatrix(Fe),n.x=s,n.y=r,n.z=a,this}makePerspective(t,e,n,V,s,r,a=sn){const o=this.elements,l=2*s/(e-t),c=2*s/(n-V),h=(e+t)/(e-t),q=(n+V)/(n-V);let f,p;if(a===sn)f=-(r+s)/(r-s),p=-2*r*s/(r-s);else if(a===AV)f=-r/(r-s),p=-r*s/(r-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return o[0]=l,o[4]=0,o[8]=h,o[12]=0,o[1]=0,o[5]=c,o[9]=q,o[13]=0,o[2]=0,o[6]=0,o[10]=f,o[14]=p,o[3]=0,o[7]=0,o[11]=-1,o[15]=0,this}makeOrthographic(t,e,n,V,s,r,a=sn){const o=this.elements,l=1/(e-t),c=1/(n-V),h=1/(r-s),q=(e+t)*l,f=(n+V)*c;let p,m;if(a===sn)p=(r+s)*h,m=-2*h;else if(a===AV)p=s*h,m=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return o[0]=2*l,o[4]=0,o[8]=0,o[12]=-q,o[1]=0,o[5]=2*c,o[9]=0,o[13]=-f,o[2]=0,o[6]=0,o[10]=m,o[14]=-p,o[3]=0,o[7]=0,o[11]=0,o[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let V=0;V<16;V++)if(e[V]!==n[V])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Qn=new R,Fe=new te,Al=new R(0,0,0),ml=new R(1,1,1),fn=new R,Qi=new R,Te=new R,yr=new te,Tr=new Bi;class Xe{constructor(t=0,e=0,n=0,V=Xe.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=V}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,V=this._order){return this._x=t,this._y=e,this._z=n,this._order=V,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const V=t.elements,s=V[0],r=V[4],a=V[8],o=V[1],l=V[5],c=V[9],h=V[2],q=V[6],f=V[10];switch(e){case"XYZ":this._y=Math.asin(fe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-c,f),this._z=Math.atan2(-r,s)):(this._x=Math.atan2(q,l),this._z=0);break;case"YXZ":this._x=Math.asin(-fe(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(o,l)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(fe(q,-1,1)),Math.abs(q)<.9999999?(this._y=Math.atan2(-h,f),this._z=Math.atan2(-r,l)):(this._y=0,this._z=Math.atan2(o,s));break;case"ZYX":this._y=Math.asin(-fe(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(q,f),this._z=Math.atan2(o,s)):(this._x=0,this._z=Math.atan2(-r,l));break;case"YZX":this._z=Math.asin(fe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-c,l),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-fe(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(q,l),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-c,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return yr.makeRotationFromQuaternion(t),this.setFromRotationMatrix(yr,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Tr.setFromEuler(this),this.setFromQuaternion(Tr,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Xe.DEFAULT_ORDER="XYZ";class Ba{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let gl=0;const wr=new R,Xn=new Bi,$e=new te,Xi=new R,Si=new R,vl=new R,_l=new Bi,Cr=new R(1,0,0),Rr=new R(0,1,0),br=new R(0,0,1),Ur={type:"added"},Ml={type:"removed"},Kn={type:"childadded",child:null},DV={type:"childremoved",child:null};class qe extends pi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:gl++}),this.uuid=Ai(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=qe.DEFAULT_UP.clone();const t=new R,e=new Xe,n=new Bi,V=new R(1,1,1);function s(){n.setFromEuler(e,!1)}function r(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:V},modelViewMatrix:{value:new te},normalMatrix:{value:new bt}}),this.matrix=new te,this.matrixWorld=new te,this.matrixAutoUpdate=qe.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=qe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ba,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Xn.setFromAxisAngle(t,e),this.quaternion.multiply(Xn),this}rotateOnWorldAxis(t,e){return Xn.setFromAxisAngle(t,e),this.quaternion.premultiply(Xn),this}rotateX(t){return this.rotateOnAxis(Cr,t)}rotateY(t){return this.rotateOnAxis(Rr,t)}rotateZ(t){return this.rotateOnAxis(br,t)}translateOnAxis(t,e){return wr.copy(t).applyQuaternion(this.quaternion),this.position.add(wr.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Cr,t)}translateY(t){return this.translateOnAxis(Rr,t)}translateZ(t){return this.translateOnAxis(br,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4($e.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Xi.copy(t):Xi.set(t,e,n);const V=this.parent;this.updateWorldMatrix(!0,!1),Si.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?$e.lookAt(Si,Xi,this.up):$e.lookAt(Xi,Si,this.up),this.quaternion.setFromRotationMatrix($e),V&&($e.extractRotation(V.matrixWorld),Xn.setFromRotationMatrix($e),this.quaternion.premultiply(Xn.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Ur),Kn.child=t,this.dispatchEvent(Kn),Kn.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Ml),DV.child=t,this.dispatchEvent(DV),DV.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),$e.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),$e.multiply(t.parent.matrixWorld)),t.applyMatrix4($e),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Ur),Kn.child=t,this.dispatchEvent(Kn),Kn.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,V=this.children.length;n<V;n++){const r=this.children[n].getObjectByProperty(t,e);if(r!==void 0)return r}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const V=this.children;for(let s=0,r=V.length;s<r;s++)V[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Si,t,vl),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Si,_l,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,V=e.length;n<V;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,V=e.length;n<V;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,V=e.length;n<V;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const V=this.children;for(let s=0,r=V.length;s<r;s++)V[s].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const V={};V.uuid=this.uuid,V.type=this.type,this.name!==""&&(V.name=this.name),this.castShadow===!0&&(V.castShadow=!0),this.receiveShadow===!0&&(V.receiveShadow=!0),this.visible===!1&&(V.visible=!1),this.frustumCulled===!1&&(V.frustumCulled=!1),this.renderOrder!==0&&(V.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(V.userData=this.userData),V.layers=this.layers.mask,V.matrix=this.matrix.toArray(),V.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(V.matrixAutoUpdate=!1),this.isInstancedMesh&&(V.type="InstancedMesh",V.count=this.count,V.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(V.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(V.type="BatchedMesh",V.perObjectFrustumCulled=this.perObjectFrustumCulled,V.sortObjects=this.sortObjects,V.drawRanges=this._drawRanges,V.reservedRanges=this._reservedRanges,V.visibility=this._visibility,V.active=this._active,V.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),V.maxInstanceCount=this._maxInstanceCount,V.maxVertexCount=this._maxVertexCount,V.maxIndexCount=this._maxIndexCount,V.geometryInitialized=this._geometryInitialized,V.geometryCount=this._geometryCount,V.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(V.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(V.boundingSphere={center:V.boundingSphere.center.toArray(),radius:V.boundingSphere.radius}),this.boundingBox!==null&&(V.boundingBox={min:V.boundingBox.min.toArray(),max:V.boundingBox.max.toArray()}));function s(a,o){return a[o.uuid]===void 0&&(a[o.uuid]=o.toJSON(t)),o.uuid}if(this.isScene)this.background&&(this.background.isColor?V.background=this.background.toJSON():this.background.isTexture&&(V.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(V.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){V.geometry=s(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const o=a.shapes;if(Array.isArray(o))for(let l=0,c=o.length;l<c;l++){const h=o[l];s(t.shapes,h)}else s(t.shapes,o)}}if(this.isSkinnedMesh&&(V.bindMode=this.bindMode,V.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),V.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let o=0,l=this.material.length;o<l;o++)a.push(s(t.materials,this.material[o]));V.material=a}else V.material=s(t.materials,this.material);if(this.children.length>0){V.children=[];for(let a=0;a<this.children.length;a++)V.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){V.animations=[];for(let a=0;a<this.animations.length;a++){const o=this.animations[a];V.animations.push(s(t.animations,o))}}if(e){const a=r(t.geometries),o=r(t.materials),l=r(t.textures),c=r(t.images),h=r(t.shapes),q=r(t.skeletons),f=r(t.animations),p=r(t.nodes);a.length>0&&(n.geometries=a),o.length>0&&(n.materials=o),l.length>0&&(n.textures=l),c.length>0&&(n.images=c),h.length>0&&(n.shapes=h),q.length>0&&(n.skeletons=q),f.length>0&&(n.animations=f),p.length>0&&(n.nodes=p)}return n.object=V,n;function r(a){const o=[];for(const l in a){const c=a[l];delete c.metadata,o.push(c)}return o}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const V=t.children[n];this.add(V.clone())}return this}}qe.DEFAULT_UP=new R(0,1,0);qe.DEFAULT_MATRIX_AUTO_UPDATE=!0;qe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ne=new R,tn=new R,IV=new R,en=new R,Jn=new R,jn=new R,Pr=new R,LV=new R,BV=new R,FV=new R,NV=new se,OV=new se,GV=new se;class Oe{constructor(t=new R,e=new R,n=new R){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,V){V.subVectors(n,e),Ne.subVectors(t,e),V.cross(Ne);const s=V.lengthSq();return s>0?V.multiplyScalar(1/Math.sqrt(s)):V.set(0,0,0)}static getBarycoord(t,e,n,V,s){Ne.subVectors(V,e),tn.subVectors(n,e),IV.subVectors(t,e);const r=Ne.dot(Ne),a=Ne.dot(tn),o=Ne.dot(IV),l=tn.dot(tn),c=tn.dot(IV),h=r*l-a*a;if(h===0)return s.set(0,0,0),null;const q=1/h,f=(l*o-a*c)*q,p=(r*c-a*o)*q;return s.set(1-f-p,p,f)}static containsPoint(t,e,n,V){return this.getBarycoord(t,e,n,V,en)===null?!1:en.x>=0&&en.y>=0&&en.x+en.y<=1}static getInterpolation(t,e,n,V,s,r,a,o){return this.getBarycoord(t,e,n,V,en)===null?(o.x=0,o.y=0,"z"in o&&(o.z=0),"w"in o&&(o.w=0),null):(o.setScalar(0),o.addScaledVector(s,en.x),o.addScaledVector(r,en.y),o.addScaledVector(a,en.z),o)}static getInterpolatedAttribute(t,e,n,V,s,r){return NV.setScalar(0),OV.setScalar(0),GV.setScalar(0),NV.fromBufferAttribute(t,e),OV.fromBufferAttribute(t,n),GV.fromBufferAttribute(t,V),r.setScalar(0),r.addScaledVector(NV,s.x),r.addScaledVector(OV,s.y),r.addScaledVector(GV,s.z),r}static isFrontFacing(t,e,n,V){return Ne.subVectors(n,e),tn.subVectors(t,e),Ne.cross(tn).dot(V)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,V){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[V]),this}setFromAttributeAndIndices(t,e,n,V){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,V),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ne.subVectors(this.c,this.b),tn.subVectors(this.a,this.b),Ne.cross(tn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Oe.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Oe.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,V,s){return Oe.getInterpolation(t,this.a,this.b,this.c,e,n,V,s)}containsPoint(t){return Oe.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Oe.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,V=this.b,s=this.c;let r,a;Jn.subVectors(V,n),jn.subVectors(s,n),LV.subVectors(t,n);const o=Jn.dot(LV),l=jn.dot(LV);if(o<=0&&l<=0)return e.copy(n);BV.subVectors(t,V);const c=Jn.dot(BV),h=jn.dot(BV);if(c>=0&&h<=c)return e.copy(V);const q=o*h-c*l;if(q<=0&&o>=0&&c<=0)return r=o/(o-c),e.copy(n).addScaledVector(Jn,r);FV.subVectors(t,s);const f=Jn.dot(FV),p=jn.dot(FV);if(p>=0&&f<=p)return e.copy(s);const m=f*l-o*p;if(m<=0&&l>=0&&p<=0)return a=l/(l-p),e.copy(n).addScaledVector(jn,a);const d=c*p-f*h;if(d<=0&&h-c>=0&&f-p>=0)return Pr.subVectors(s,V),a=(h-c)/(h-c+(f-p)),e.copy(V).addScaledVector(Pr,a);const u=1/(d+m+q);return r=m*u,a=q*u,e.copy(n).addScaledVector(Jn,r).addScaledVector(jn,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Fa={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},dn={h:0,s:0,l:0},Ki={h:0,s:0,l:0};function zV(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class Nt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const V=t;V&&V.isColor?this.copy(V):typeof V=="number"?this.setHex(V):typeof V=="string"&&this.setStyle(V)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ue){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,zt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,V=zt.workingColorSpace){return this.r=t,this.g=e,this.b=n,zt.toWorkingColorSpace(this,V),this}setHSL(t,e,n,V=zt.workingColorSpace){if(t=js(t,1),e=fe(e,0,1),n=fe(n,0,1),e===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+e):n+e-n*e,r=2*n-s;this.r=zV(r,s,t+1/3),this.g=zV(r,s,t),this.b=zV(r,s,t-1/3)}return zt.toWorkingColorSpace(this,V),this}setStyle(t,e=Ue){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let V;if(V=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const r=V[1],a=V[2];switch(r){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(V=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=V[1],r=s.length;if(r===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(r===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ue){const n=Fa[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=rn(t.r),this.g=rn(t.g),this.b=rn(t.b),this}copyLinearToSRGB(t){return this.r=ai(t.r),this.g=ai(t.g),this.b=ai(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ue){return zt.fromWorkingColorSpace(Ae.copy(this),t),Math.round(fe(Ae.r*255,0,255))*65536+Math.round(fe(Ae.g*255,0,255))*256+Math.round(fe(Ae.b*255,0,255))}getHexString(t=Ue){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=zt.workingColorSpace){zt.fromWorkingColorSpace(Ae.copy(this),e);const n=Ae.r,V=Ae.g,s=Ae.b,r=Math.max(n,V,s),a=Math.min(n,V,s);let o,l;const c=(a+r)/2;if(a===r)o=0,l=0;else{const h=r-a;switch(l=c<=.5?h/(r+a):h/(2-r-a),r){case n:o=(V-s)/h+(V<s?6:0);break;case V:o=(s-n)/h+2;break;case s:o=(n-V)/h+4;break}o/=6}return t.h=o,t.s=l,t.l=c,t}getRGB(t,e=zt.workingColorSpace){return zt.fromWorkingColorSpace(Ae.copy(this),e),t.r=Ae.r,t.g=Ae.g,t.b=Ae.b,t}getStyle(t=Ue){zt.fromWorkingColorSpace(Ae.copy(this),t);const e=Ae.r,n=Ae.g,V=Ae.b;return t!==Ue?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${V.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(V*255)})`}offsetHSL(t,e,n){return this.getHSL(dn),this.setHSL(dn.h+t,dn.s+e,dn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(dn),t.getHSL(Ki);const n=Ci(dn.h,Ki.h,e),V=Ci(dn.s,Ki.s,e),s=Ci(dn.l,Ki.l,e);return this.setHSL(n,V,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,V=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*V,this.g=s[1]*e+s[4]*n+s[7]*V,this.b=s[2]*e+s[5]*n+s[8]*V,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ae=new Nt;Nt.NAMES=Fa;let xl=0;class mi extends pi{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:xl++}),this.uuid=Ai(),this.name="",this.blending=si,this.side=xn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=is,this.blendDst=Vs,this.blendEquation=Dn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Nt(0,0,0),this.blendAlpha=0,this.depthFunc=oi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=dr,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=zn,this.stencilZFail=zn,this.stencilZPass=zn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const V=this[e];if(V===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}V&&V.isColor?V.set(n):V&&V.isVector3&&n&&n.isVector3?V.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==si&&(n.blending=this.blending),this.side!==xn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==is&&(n.blendSrc=this.blendSrc),this.blendDst!==Vs&&(n.blendDst=this.blendDst),this.blendEquation!==Dn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==oi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==dr&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==zn&&(n.stencilFail=this.stencilFail),this.stencilZFail!==zn&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==zn&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function V(s){const r=[];for(const a in s){const o=s[a];delete o.metadata,r.push(o)}return r}if(e){const s=V(t.textures),r=V(t.images);s.length>0&&(n.textures=s),r.length>0&&(n.images=r)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const V=e.length;n=new Array(V);for(let s=0;s!==V;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class ze extends mi{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new Nt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Xe,this.combine=ga,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const le=new R,Ji=new _t;class De{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=pr,this.updateRanges=[],this.gpuType=Vn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let V=0,s=this.itemSize;V<s;V++)this.array[t+V]=e.array[n+V];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Ji.fromBufferAttribute(this,e),Ji.applyMatrix3(t),this.setXY(e,Ji.x,Ji.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)le.fromBufferAttribute(this,e),le.applyMatrix3(t),this.setXYZ(e,le.x,le.y,le.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)le.fromBufferAttribute(this,e),le.applyMatrix4(t),this.setXYZ(e,le.x,le.y,le.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)le.fromBufferAttribute(this,e),le.applyNormalMatrix(t),this.setXYZ(e,le.x,le.y,le.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)le.fromBufferAttribute(this,e),le.transformDirection(t),this.setXYZ(e,le.x,le.y,le.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=ni(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ge(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=ni(e,this.array)),e}setX(t,e){return this.normalized&&(e=ge(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=ni(e,this.array)),e}setY(t,e){return this.normalized&&(e=ge(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=ni(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ge(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=ni(e,this.array)),e}setW(t,e){return this.normalized&&(e=ge(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=ge(e,this.array),n=ge(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,V){return t*=this.itemSize,this.normalized&&(e=ge(e,this.array),n=ge(n,this.array),V=ge(V,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=V,this}setXYZW(t,e,n,V,s){return t*=this.itemSize,this.normalized&&(e=ge(e,this.array),n=ge(n,this.array),V=ge(V,this.array),s=ge(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=V,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==pr&&(t.usage=this.usage),t}}class Na extends De{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Oa extends De{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class re extends De{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Sl=0;const be=new te,kV=new qe,Zn=new R,we=new Fi,Ei=new Fi,ue=new R;class xe extends pi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Sl++}),this.uuid=Ai(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Pa(t)?Oa:Na)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new bt().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}const V=this.attributes.tangent;return V!==void 0&&(V.transformDirection(t),V.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return be.makeRotationFromQuaternion(t),this.applyMatrix4(be),this}rotateX(t){return be.makeRotationX(t),this.applyMatrix4(be),this}rotateY(t){return be.makeRotationY(t),this.applyMatrix4(be),this}rotateZ(t){return be.makeRotationZ(t),this.applyMatrix4(be),this}translate(t,e,n){return be.makeTranslation(t,e,n),this.applyMatrix4(be),this}scale(t,e,n){return be.makeScale(t,e,n),this.applyMatrix4(be),this}lookAt(t){return kV.lookAt(t),kV.updateMatrix(),this.applyMatrix4(kV.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Zn).negate(),this.translate(Zn.x,Zn.y,Zn.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let V=0,s=t.length;V<s;V++){const r=t[V];n.push(r.x,r.y,r.z||0)}this.setAttribute("position",new re(n,3))}else{for(let n=0,V=e.count;n<V;n++){const s=t[n];e.setXYZ(n,s.x,s.y,s.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Fi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new R(-1/0,-1/0,-1/0),new R(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,V=e.length;n<V;n++){const s=e[n];we.setFromBufferAttribute(s),this.morphTargetsRelative?(ue.addVectors(this.boundingBox.min,we.min),this.boundingBox.expandByPoint(ue),ue.addVectors(this.boundingBox.max,we.max),this.boundingBox.expandByPoint(ue)):(this.boundingBox.expandByPoint(we.min),this.boundingBox.expandByPoint(we.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new _V);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new R,1/0);return}if(t){const n=this.boundingSphere.center;if(we.setFromBufferAttribute(t),e)for(let s=0,r=e.length;s<r;s++){const a=e[s];Ei.setFromBufferAttribute(a),this.morphTargetsRelative?(ue.addVectors(we.min,Ei.min),we.expandByPoint(ue),ue.addVectors(we.max,Ei.max),we.expandByPoint(ue)):(we.expandByPoint(Ei.min),we.expandByPoint(Ei.max))}we.getCenter(n);let V=0;for(let s=0,r=t.count;s<r;s++)ue.fromBufferAttribute(t,s),V=Math.max(V,n.distanceToSquared(ue));if(e)for(let s=0,r=e.length;s<r;s++){const a=e[s],o=this.morphTargetsRelative;for(let l=0,c=a.count;l<c;l++)ue.fromBufferAttribute(a,l),o&&(Zn.fromBufferAttribute(t,l),ue.add(Zn)),V=Math.max(V,n.distanceToSquared(ue))}this.boundingSphere.radius=Math.sqrt(V),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,V=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new De(new Float32Array(4*n.count),4));const r=this.getAttribute("tangent"),a=[],o=[];for(let b=0;b<n.count;b++)a[b]=new R,o[b]=new R;const l=new R,c=new R,h=new R,q=new _t,f=new _t,p=new _t,m=new R,d=new R;function u(b,M,v){l.fromBufferAttribute(n,b),c.fromBufferAttribute(n,M),h.fromBufferAttribute(n,v),q.fromBufferAttribute(s,b),f.fromBufferAttribute(s,M),p.fromBufferAttribute(s,v),c.sub(l),h.sub(l),f.sub(q),p.sub(q);const w=1/(f.x*p.y-p.x*f.y);isFinite(w)&&(m.copy(c).multiplyScalar(p.y).addScaledVector(h,-f.y).multiplyScalar(w),d.copy(h).multiplyScalar(f.x).addScaledVector(c,-p.x).multiplyScalar(w),a[b].add(m),a[M].add(m),a[v].add(m),o[b].add(d),o[M].add(d),o[v].add(d))}let E=this.groups;E.length===0&&(E=[{start:0,count:t.count}]);for(let b=0,M=E.length;b<M;++b){const v=E[b],w=v.start,O=v.count;for(let N=w,k=w+O;N<k;N+=3)u(t.getX(N+0),t.getX(N+1),t.getX(N+2))}const S=new R,_=new R,I=new R,y=new R;function T(b){I.fromBufferAttribute(V,b),y.copy(I);const M=a[b];S.copy(M),S.sub(I.multiplyScalar(I.dot(M))).normalize(),_.crossVectors(y,M);const w=_.dot(o[b])<0?-1:1;r.setXYZW(b,S.x,S.y,S.z,w)}for(let b=0,M=E.length;b<M;++b){const v=E[b],w=v.start,O=v.count;for(let N=w,k=w+O;N<k;N+=3)T(t.getX(N+0)),T(t.getX(N+1)),T(t.getX(N+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new De(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let q=0,f=n.count;q<f;q++)n.setXYZ(q,0,0,0);const V=new R,s=new R,r=new R,a=new R,o=new R,l=new R,c=new R,h=new R;if(t)for(let q=0,f=t.count;q<f;q+=3){const p=t.getX(q+0),m=t.getX(q+1),d=t.getX(q+2);V.fromBufferAttribute(e,p),s.fromBufferAttribute(e,m),r.fromBufferAttribute(e,d),c.subVectors(r,s),h.subVectors(V,s),c.cross(h),a.fromBufferAttribute(n,p),o.fromBufferAttribute(n,m),l.fromBufferAttribute(n,d),a.add(c),o.add(c),l.add(c),n.setXYZ(p,a.x,a.y,a.z),n.setXYZ(m,o.x,o.y,o.z),n.setXYZ(d,l.x,l.y,l.z)}else for(let q=0,f=e.count;q<f;q+=3)V.fromBufferAttribute(e,q+0),s.fromBufferAttribute(e,q+1),r.fromBufferAttribute(e,q+2),c.subVectors(r,s),h.subVectors(V,s),c.cross(h),n.setXYZ(q+0,c.x,c.y,c.z),n.setXYZ(q+1,c.x,c.y,c.z),n.setXYZ(q+2,c.x,c.y,c.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)ue.fromBufferAttribute(t,e),ue.normalize(),t.setXYZ(e,ue.x,ue.y,ue.z)}toNonIndexed(){function t(a,o){const l=a.array,c=a.itemSize,h=a.normalized,q=new l.constructor(o.length*c);let f=0,p=0;for(let m=0,d=o.length;m<d;m++){a.isInterleavedBufferAttribute?f=o[m]*a.data.stride+a.offset:f=o[m]*c;for(let u=0;u<c;u++)q[p++]=l[f++]}return new De(q,c,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new xe,n=this.index.array,V=this.attributes;for(const a in V){const o=V[a],l=t(o,n);e.setAttribute(a,l)}const s=this.morphAttributes;for(const a in s){const o=[],l=s[a];for(let c=0,h=l.length;c<h;c++){const q=l[c],f=t(q,n);o.push(f)}e.morphAttributes[a]=o}e.morphTargetsRelative=this.morphTargetsRelative;const r=this.groups;for(let a=0,o=r.length;a<o;a++){const l=r[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const o=this.parameters;for(const l in o)o[l]!==void 0&&(t[l]=o[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const o in n){const l=n[o];t.data.attributes[o]=l.toJSON(t.data)}const V={};let s=!1;for(const o in this.morphAttributes){const l=this.morphAttributes[o],c=[];for(let h=0,q=l.length;h<q;h++){const f=l[h];c.push(f.toJSON(t.data))}c.length>0&&(V[o]=c,s=!0)}s&&(t.data.morphAttributes=V,t.data.morphTargetsRelative=this.morphTargetsRelative);const r=this.groups;r.length>0&&(t.data.groups=JSON.parse(JSON.stringify(r)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const V=t.attributes;for(const l in V){const c=V[l];this.setAttribute(l,c.clone(e))}const s=t.morphAttributes;for(const l in s){const c=[],h=s[l];for(let q=0,f=h.length;q<f;q++)c.push(h[q].clone(e));this.morphAttributes[l]=c}this.morphTargetsRelative=t.morphTargetsRelative;const r=t.groups;for(let l=0,c=r.length;l<c;l++){const h=r[l];this.addGroup(h.start,h.count,h.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const o=t.boundingSphere;return o!==null&&(this.boundingSphere=o.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Dr=new te,wn=new La,ji=new _V,Ir=new R,Zi=new R,$i=new R,tV=new R,HV=new R,eV=new R,Lr=new R,nV=new R;class Tt extends qe{constructor(t=new xe,e=new ze){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const V=e[n[0]];if(V!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=V.length;s<r;s++){const a=V[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(t,e){const n=this.geometry,V=n.attributes.position,s=n.morphAttributes.position,r=n.morphTargetsRelative;e.fromBufferAttribute(V,t);const a=this.morphTargetInfluences;if(s&&a){eV.set(0,0,0);for(let o=0,l=s.length;o<l;o++){const c=a[o],h=s[o];c!==0&&(HV.fromBufferAttribute(h,t),r?eV.addScaledVector(HV,c):eV.addScaledVector(HV.sub(e),c))}e.add(eV)}return e}raycast(t,e){const n=this.geometry,V=this.material,s=this.matrixWorld;V!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ji.copy(n.boundingSphere),ji.applyMatrix4(s),wn.copy(t.ray).recast(t.near),!(ji.containsPoint(wn.origin)===!1&&(wn.intersectSphere(ji,Ir)===null||wn.origin.distanceToSquared(Ir)>(t.far-t.near)**2))&&(Dr.copy(s).invert(),wn.copy(t.ray).applyMatrix4(Dr),!(n.boundingBox!==null&&wn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,wn)))}_computeIntersections(t,e,n){let V;const s=this.geometry,r=this.material,a=s.index,o=s.attributes.position,l=s.attributes.uv,c=s.attributes.uv1,h=s.attributes.normal,q=s.groups,f=s.drawRange;if(a!==null)if(Array.isArray(r))for(let p=0,m=q.length;p<m;p++){const d=q[p],u=r[d.materialIndex],E=Math.max(d.start,f.start),S=Math.min(a.count,Math.min(d.start+d.count,f.start+f.count));for(let _=E,I=S;_<I;_+=3){const y=a.getX(_),T=a.getX(_+1),b=a.getX(_+2);V=iV(this,u,t,n,l,c,h,y,T,b),V&&(V.faceIndex=Math.floor(_/3),V.face.materialIndex=d.materialIndex,e.push(V))}}else{const p=Math.max(0,f.start),m=Math.min(a.count,f.start+f.count);for(let d=p,u=m;d<u;d+=3){const E=a.getX(d),S=a.getX(d+1),_=a.getX(d+2);V=iV(this,r,t,n,l,c,h,E,S,_),V&&(V.faceIndex=Math.floor(d/3),e.push(V))}}else if(o!==void 0)if(Array.isArray(r))for(let p=0,m=q.length;p<m;p++){const d=q[p],u=r[d.materialIndex],E=Math.max(d.start,f.start),S=Math.min(o.count,Math.min(d.start+d.count,f.start+f.count));for(let _=E,I=S;_<I;_+=3){const y=_,T=_+1,b=_+2;V=iV(this,u,t,n,l,c,h,y,T,b),V&&(V.faceIndex=Math.floor(_/3),V.face.materialIndex=d.materialIndex,e.push(V))}}else{const p=Math.max(0,f.start),m=Math.min(o.count,f.start+f.count);for(let d=p,u=m;d<u;d+=3){const E=d,S=d+1,_=d+2;V=iV(this,r,t,n,l,c,h,E,S,_),V&&(V.faceIndex=Math.floor(d/3),e.push(V))}}}}function El(i,t,e,n,V,s,r,a){let o;if(t.side===_e?o=n.intersectTriangle(r,s,V,!0,a):o=n.intersectTriangle(V,s,r,t.side===xn,a),o===null)return null;nV.copy(a),nV.applyMatrix4(i.matrixWorld);const l=e.ray.origin.distanceTo(nV);return l<e.near||l>e.far?null:{distance:l,point:nV.clone(),object:i}}function iV(i,t,e,n,V,s,r,a,o,l){i.getVertexPosition(a,Zi),i.getVertexPosition(o,$i),i.getVertexPosition(l,tV);const c=El(i,t,e,n,Zi,$i,tV,Lr);if(c){const h=new R;Oe.getBarycoord(Lr,Zi,$i,tV,h),V&&(c.uv=Oe.getInterpolatedAttribute(V,a,o,l,h,new _t)),s&&(c.uv1=Oe.getInterpolatedAttribute(s,a,o,l,h,new _t)),r&&(c.normal=Oe.getInterpolatedAttribute(r,a,o,l,h,new R),c.normal.dot(n.direction)>0&&c.normal.multiplyScalar(-1));const q={a,b:o,c:l,normal:new R,materialIndex:0};Oe.getNormal(Zi,$i,tV,q.normal),c.face=q,c.barycoord=h}return c}class On extends xe{constructor(t=1,e=1,n=1,V=1,s=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:V,heightSegments:s,depthSegments:r};const a=this;V=Math.floor(V),s=Math.floor(s),r=Math.floor(r);const o=[],l=[],c=[],h=[];let q=0,f=0;p("z","y","x",-1,-1,n,e,t,r,s,0),p("z","y","x",1,-1,n,e,-t,r,s,1),p("x","z","y",1,1,t,n,e,V,r,2),p("x","z","y",1,-1,t,n,-e,V,r,3),p("x","y","z",1,-1,t,e,n,V,s,4),p("x","y","z",-1,-1,t,e,-n,V,s,5),this.setIndex(o),this.setAttribute("position",new re(l,3)),this.setAttribute("normal",new re(c,3)),this.setAttribute("uv",new re(h,2));function p(m,d,u,E,S,_,I,y,T,b,M){const v=_/T,w=I/b,O=_/2,N=I/2,k=y/2,K=T+1,H=b+1;let $=0,z=0;const it=new R;for(let lt=0;lt<H;lt++){const gt=lt*w-N;for(let Dt=0;Dt<K;Dt++){const Xt=Dt*v-O;it[m]=Xt*E,it[d]=gt*S,it[u]=k,l.push(it.x,it.y,it.z),it[m]=0,it[d]=0,it[u]=y>0?1:-1,c.push(it.x,it.y,it.z),h.push(Dt/T),h.push(1-lt/b),$+=1}}for(let lt=0;lt<b;lt++)for(let gt=0;gt<T;gt++){const Dt=q+gt+K*lt,Xt=q+gt+K*(lt+1),Y=q+(gt+1)+K*(lt+1),tt=q+(gt+1)+K*lt;o.push(Dt,Xt,tt),o.push(Xt,Y,tt),z+=6}a.addGroup(f,z,M),f+=z,q+=$}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new On(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function qi(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const V=i[e][n];V&&(V.isColor||V.isMatrix3||V.isMatrix4||V.isVector2||V.isVector3||V.isVector4||V.isTexture||V.isQuaternion)?V.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=V.clone():Array.isArray(V)?t[e][n]=V.slice():t[e][n]=V}}return t}function ve(i){const t={};for(let e=0;e<i.length;e++){const n=qi(i[e]);for(const V in n)t[V]=n[V]}return t}function yl(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Ga(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:zt.workingColorSpace}const Tl={clone:qi,merge:ve};var wl=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Cl=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Sn extends mi{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=wl,this.fragmentShader=Cl,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=qi(t.uniforms),this.uniformsGroups=yl(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const V in this.uniforms){const r=this.uniforms[V].value;r&&r.isTexture?e.uniforms[V]={type:"t",value:r.toJSON(t).uuid}:r&&r.isColor?e.uniforms[V]={type:"c",value:r.getHex()}:r&&r.isVector2?e.uniforms[V]={type:"v2",value:r.toArray()}:r&&r.isVector3?e.uniforms[V]={type:"v3",value:r.toArray()}:r&&r.isVector4?e.uniforms[V]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?e.uniforms[V]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?e.uniforms[V]={type:"m4",value:r.toArray()}:e.uniforms[V]={value:r}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const V in this.extensions)this.extensions[V]===!0&&(n[V]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class za extends qe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new te,this.projectionMatrix=new te,this.projectionMatrixInverse=new te,this.coordinateSystem=sn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const pn=new R,Br=new _t,Fr=new _t;class Pe extends za{constructor(t=50,e=1,n=.1,V=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=V,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Ii*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(wi*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ii*2*Math.atan(Math.tan(wi*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){pn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(pn.x,pn.y).multiplyScalar(-t/pn.z),pn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(pn.x,pn.y).multiplyScalar(-t/pn.z)}getViewSize(t,e){return this.getViewBounds(t,Br,Fr),e.subVectors(Fr,Br)}setViewOffset(t,e,n,V,s,r){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=V,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(wi*.5*this.fov)/this.zoom,n=2*e,V=this.aspect*n,s=-.5*V;const r=this.view;if(this.view!==null&&this.view.enabled){const o=r.fullWidth,l=r.fullHeight;s+=r.offsetX*V/o,e-=r.offsetY*n/l,V*=r.width/o,n*=r.height/l}const a=this.filmOffset;a!==0&&(s+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+V,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const $n=-90,ti=1;class Rl extends qe{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const V=new Pe($n,ti,t,e);V.layers=this.layers,this.add(V);const s=new Pe($n,ti,t,e);s.layers=this.layers,this.add(s);const r=new Pe($n,ti,t,e);r.layers=this.layers,this.add(r);const a=new Pe($n,ti,t,e);a.layers=this.layers,this.add(a);const o=new Pe($n,ti,t,e);o.layers=this.layers,this.add(o);const l=new Pe($n,ti,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,V,s,r,a,o]=e;for(const l of e)this.remove(l);if(t===sn)n.up.set(0,1,0),n.lookAt(1,0,0),V.up.set(0,1,0),V.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),o.up.set(0,1,0),o.lookAt(0,0,-1);else if(t===AV)n.up.set(0,-1,0),n.lookAt(-1,0,0),V.up.set(0,-1,0),V.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),o.up.set(0,-1,0),o.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:V}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,r,a,o,l,c]=this.children,h=t.getRenderTarget(),q=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),p=t.xr.enabled;t.xr.enabled=!1;const m=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,V),t.render(e,s),t.setRenderTarget(n,1,V),t.render(e,r),t.setRenderTarget(n,2,V),t.render(e,a),t.setRenderTarget(n,3,V),t.render(e,o),t.setRenderTarget(n,4,V),t.render(e,l),n.texture.generateMipmaps=m,t.setRenderTarget(n,5,V),t.render(e,c),t.setRenderTarget(h,q,f),t.xr.enabled=p,n.texture.needsPMREMUpdate=!0}}class ka extends Me{constructor(t,e,n,V,s,r,a,o,l,c){t=t!==void 0?t:[],e=e!==void 0?e:li,super(t,e,n,V,s,r,a,o,l,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class bl extends Nn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},V=[n,n,n,n,n,n];this.texture=new ka(V,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Ee}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},V=new On(5,5,5),s=new Sn({name:"CubemapFromEquirect",uniforms:qi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:_e,blending:vn});s.uniforms.tEquirect.value=e;const r=new Tt(V,s),a=e.minFilter;return e.minFilter===Bn&&(e.minFilter=Ee),new Rl(1,10,this).update(t,r),e.minFilter=a,r.geometry.dispose(),r.material.dispose(),this}clear(t,e,n,V){const s=t.getRenderTarget();for(let r=0;r<6;r++)t.setRenderTarget(this,r),t.clear(e,n,V);t.setRenderTarget(s)}}const WV=new R,Ul=new R,Pl=new bt;class Un{constructor(t=new R(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,V){return this.normal.set(t,e,n),this.constant=V,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const V=WV.subVectors(n,e).cross(Ul.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(V,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(WV),V=this.normal.dot(n);if(V===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/V;return s<0||s>1?null:e.copy(t.start).addScaledVector(n,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Pl.getNormalMatrix(t),V=this.coplanarPoint(WV).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-V.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Cn=new _V,VV=new R;class Zs{constructor(t=new Un,e=new Un,n=new Un,V=new Un,s=new Un,r=new Un){this.planes=[t,e,n,V,s,r]}set(t,e,n,V,s,r){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(V),a[4].copy(s),a[5].copy(r),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=sn){const n=this.planes,V=t.elements,s=V[0],r=V[1],a=V[2],o=V[3],l=V[4],c=V[5],h=V[6],q=V[7],f=V[8],p=V[9],m=V[10],d=V[11],u=V[12],E=V[13],S=V[14],_=V[15];if(n[0].setComponents(o-s,q-l,d-f,_-u).normalize(),n[1].setComponents(o+s,q+l,d+f,_+u).normalize(),n[2].setComponents(o+r,q+c,d+p,_+E).normalize(),n[3].setComponents(o-r,q-c,d-p,_-E).normalize(),n[4].setComponents(o-a,q-h,d-m,_-S).normalize(),e===sn)n[5].setComponents(o+a,q+h,d+m,_+S).normalize();else if(e===AV)n[5].setComponents(a,h,m,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Cn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Cn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Cn)}intersectsSprite(t){return Cn.center.set(0,0,0),Cn.radius=.7071067811865476,Cn.applyMatrix4(t.matrixWorld),this.intersectsSphere(Cn)}intersectsSphere(t){const e=this.planes,n=t.center,V=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<V)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const V=e[n];if(VV.x=V.normal.x>0?t.max.x:t.min.x,VV.y=V.normal.y>0?t.max.y:t.min.y,VV.z=V.normal.z>0?t.max.z:t.min.z,V.distanceToPoint(VV)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Ha(){let i=null,t=!1,e=null,n=null;function V(s,r){e(s,r),n=i.requestAnimationFrame(V)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(V),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){i=s}}}function Dl(i){const t=new WeakMap;function e(a,o){const l=a.array,c=a.usage,h=l.byteLength,q=i.createBuffer();i.bindBuffer(o,q),i.bufferData(o,l,c),a.onUploadCallback();let f;if(l instanceof Float32Array)f=i.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=i.SHORT;else if(l instanceof Uint32Array)f=i.UNSIGNED_INT;else if(l instanceof Int32Array)f=i.INT;else if(l instanceof Int8Array)f=i.BYTE;else if(l instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:q,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:h}}function n(a,o,l){const c=o.array,h=o.updateRanges;if(i.bindBuffer(l,a),h.length===0)i.bufferSubData(l,0,c);else{h.sort((f,p)=>f.start-p.start);let q=0;for(let f=1;f<h.length;f++){const p=h[q],m=h[f];m.start<=p.start+p.count+1?p.count=Math.max(p.count,m.start+m.count-p.start):(++q,h[q]=m)}h.length=q+1;for(let f=0,p=h.length;f<p;f++){const m=h[f];i.bufferSubData(l,m.start*c.BYTES_PER_ELEMENT,c,m.start,m.count)}o.clearUpdateRanges()}o.onUploadCallback()}function V(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const o=t.get(a);o&&(i.deleteBuffer(o.buffer),t.delete(a))}function r(a,o){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const c=t.get(a);(!c||c.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=t.get(a);if(l===void 0)t.set(a,e(a,o));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,o),l.version=a.version}}return{get:V,remove:s,update:r}}class Qe extends xe{constructor(t=1,e=1,n=1,V=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:V};const s=t/2,r=e/2,a=Math.floor(n),o=Math.floor(V),l=a+1,c=o+1,h=t/a,q=e/o,f=[],p=[],m=[],d=[];for(let u=0;u<c;u++){const E=u*q-r;for(let S=0;S<l;S++){const _=S*h-s;p.push(_,-E,0),m.push(0,0,1),d.push(S/a),d.push(1-u/o)}}for(let u=0;u<o;u++)for(let E=0;E<a;E++){const S=E+l*u,_=E+l*(u+1),I=E+1+l*(u+1),y=E+1+l*u;f.push(S,_,y),f.push(_,I,y)}this.setIndex(f),this.setAttribute("position",new re(p,3)),this.setAttribute("normal",new re(m,3)),this.setAttribute("uv",new re(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Qe(t.width,t.height,t.widthSegments,t.heightSegments)}}var Il=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Ll=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Bl=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Fl=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Nl=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Ol=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Gl=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,zl=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,kl=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Hl=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Wl=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Yl=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Ql=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Xl=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Kl=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Jl=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,jl=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Zl=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,$l=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,tc=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,ec=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,nc=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,ic=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Vc=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,sc=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,rc=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,ac=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,oc=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,lc=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,cc=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,hc="gl_FragColor = linearToOutputTexel( gl_FragColor );",uc=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,qc=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,fc=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,dc=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,pc=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ac=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,mc=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,gc=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,vc=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,_c=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Mc=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,xc=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Sc=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Ec=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,yc=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Tc=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,wc=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Cc=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Rc=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,bc=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Uc=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Pc=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Dc=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Ic=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Lc=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Bc=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Fc=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Nc=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Oc=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Gc=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,zc=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,kc=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Hc=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Wc=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Yc=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Qc=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Xc=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Kc=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Jc=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,jc=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Zc=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,$c=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,th=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,eh=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,nh=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,ih=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Vh=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,sh=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,rh=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ah=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,oh=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,lh=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,ch=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,hh=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,uh=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,qh=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,fh=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,dh=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ph=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Ah=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,mh=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,gh=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,vh=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,_h=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Mh=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,xh=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Sh=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Eh=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,yh=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Th=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,wh=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Ch=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Rh=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,bh=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Uh=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Ph=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Dh=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Ih=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Lh=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Bh=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Fh=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Nh=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Oh=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Gh=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,zh=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,kh=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Hh=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Wh=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Yh=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Qh=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Xh=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Kh=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Jh=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,jh=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Zh=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,$h=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,tu=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,eu=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,nu=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,iu=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Vu=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,su=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ru=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,au=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ou=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,lu=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,cu=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,hu=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,uu=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,qu=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Pt={alphahash_fragment:Il,alphahash_pars_fragment:Ll,alphamap_fragment:Bl,alphamap_pars_fragment:Fl,alphatest_fragment:Nl,alphatest_pars_fragment:Ol,aomap_fragment:Gl,aomap_pars_fragment:zl,batching_pars_vertex:kl,batching_vertex:Hl,begin_vertex:Wl,beginnormal_vertex:Yl,bsdfs:Ql,iridescence_fragment:Xl,bumpmap_pars_fragment:Kl,clipping_planes_fragment:Jl,clipping_planes_pars_fragment:jl,clipping_planes_pars_vertex:Zl,clipping_planes_vertex:$l,color_fragment:tc,color_pars_fragment:ec,color_pars_vertex:nc,color_vertex:ic,common:Vc,cube_uv_reflection_fragment:sc,defaultnormal_vertex:rc,displacementmap_pars_vertex:ac,displacementmap_vertex:oc,emissivemap_fragment:lc,emissivemap_pars_fragment:cc,colorspace_fragment:hc,colorspace_pars_fragment:uc,envmap_fragment:qc,envmap_common_pars_fragment:fc,envmap_pars_fragment:dc,envmap_pars_vertex:pc,envmap_physical_pars_fragment:Tc,envmap_vertex:Ac,fog_vertex:mc,fog_pars_vertex:gc,fog_fragment:vc,fog_pars_fragment:_c,gradientmap_pars_fragment:Mc,lightmap_pars_fragment:xc,lights_lambert_fragment:Sc,lights_lambert_pars_fragment:Ec,lights_pars_begin:yc,lights_toon_fragment:wc,lights_toon_pars_fragment:Cc,lights_phong_fragment:Rc,lights_phong_pars_fragment:bc,lights_physical_fragment:Uc,lights_physical_pars_fragment:Pc,lights_fragment_begin:Dc,lights_fragment_maps:Ic,lights_fragment_end:Lc,logdepthbuf_fragment:Bc,logdepthbuf_pars_fragment:Fc,logdepthbuf_pars_vertex:Nc,logdepthbuf_vertex:Oc,map_fragment:Gc,map_pars_fragment:zc,map_particle_fragment:kc,map_particle_pars_fragment:Hc,metalnessmap_fragment:Wc,metalnessmap_pars_fragment:Yc,morphinstance_vertex:Qc,morphcolor_vertex:Xc,morphnormal_vertex:Kc,morphtarget_pars_vertex:Jc,morphtarget_vertex:jc,normal_fragment_begin:Zc,normal_fragment_maps:$c,normal_pars_fragment:th,normal_pars_vertex:eh,normal_vertex:nh,normalmap_pars_fragment:ih,clearcoat_normal_fragment_begin:Vh,clearcoat_normal_fragment_maps:sh,clearcoat_pars_fragment:rh,iridescence_pars_fragment:ah,opaque_fragment:oh,packing:lh,premultiplied_alpha_fragment:ch,project_vertex:hh,dithering_fragment:uh,dithering_pars_fragment:qh,roughnessmap_fragment:fh,roughnessmap_pars_fragment:dh,shadowmap_pars_fragment:ph,shadowmap_pars_vertex:Ah,shadowmap_vertex:mh,shadowmask_pars_fragment:gh,skinbase_vertex:vh,skinning_pars_vertex:_h,skinning_vertex:Mh,skinnormal_vertex:xh,specularmap_fragment:Sh,specularmap_pars_fragment:Eh,tonemapping_fragment:yh,tonemapping_pars_fragment:Th,transmission_fragment:wh,transmission_pars_fragment:Ch,uv_pars_fragment:Rh,uv_pars_vertex:bh,uv_vertex:Uh,worldpos_vertex:Ph,background_vert:Dh,background_frag:Ih,backgroundCube_vert:Lh,backgroundCube_frag:Bh,cube_vert:Fh,cube_frag:Nh,depth_vert:Oh,depth_frag:Gh,distanceRGBA_vert:zh,distanceRGBA_frag:kh,equirect_vert:Hh,equirect_frag:Wh,linedashed_vert:Yh,linedashed_frag:Qh,meshbasic_vert:Xh,meshbasic_frag:Kh,meshlambert_vert:Jh,meshlambert_frag:jh,meshmatcap_vert:Zh,meshmatcap_frag:$h,meshnormal_vert:tu,meshnormal_frag:eu,meshphong_vert:nu,meshphong_frag:iu,meshphysical_vert:Vu,meshphysical_frag:su,meshtoon_vert:ru,meshtoon_frag:au,points_vert:ou,points_frag:lu,shadow_vert:cu,shadow_frag:hu,sprite_vert:uu,sprite_frag:qu},et={common:{diffuse:{value:new Nt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new bt},alphaMap:{value:null},alphaMapTransform:{value:new bt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new bt}},envmap:{envMap:{value:null},envMapRotation:{value:new bt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new bt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new bt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new bt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new bt},normalScale:{value:new _t(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new bt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new bt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new bt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new bt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Nt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Nt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new bt},alphaTest:{value:0},uvTransform:{value:new bt}},sprite:{diffuse:{value:new Nt(16777215)},opacity:{value:1},center:{value:new _t(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new bt},alphaMap:{value:null},alphaMapTransform:{value:new bt},alphaTest:{value:0}}},We={basic:{uniforms:ve([et.common,et.specularmap,et.envmap,et.aomap,et.lightmap,et.fog]),vertexShader:Pt.meshbasic_vert,fragmentShader:Pt.meshbasic_frag},lambert:{uniforms:ve([et.common,et.specularmap,et.envmap,et.aomap,et.lightmap,et.emissivemap,et.bumpmap,et.normalmap,et.displacementmap,et.fog,et.lights,{emissive:{value:new Nt(0)}}]),vertexShader:Pt.meshlambert_vert,fragmentShader:Pt.meshlambert_frag},phong:{uniforms:ve([et.common,et.specularmap,et.envmap,et.aomap,et.lightmap,et.emissivemap,et.bumpmap,et.normalmap,et.displacementmap,et.fog,et.lights,{emissive:{value:new Nt(0)},specular:{value:new Nt(1118481)},shininess:{value:30}}]),vertexShader:Pt.meshphong_vert,fragmentShader:Pt.meshphong_frag},standard:{uniforms:ve([et.common,et.envmap,et.aomap,et.lightmap,et.emissivemap,et.bumpmap,et.normalmap,et.displacementmap,et.roughnessmap,et.metalnessmap,et.fog,et.lights,{emissive:{value:new Nt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Pt.meshphysical_vert,fragmentShader:Pt.meshphysical_frag},toon:{uniforms:ve([et.common,et.aomap,et.lightmap,et.emissivemap,et.bumpmap,et.normalmap,et.displacementmap,et.gradientmap,et.fog,et.lights,{emissive:{value:new Nt(0)}}]),vertexShader:Pt.meshtoon_vert,fragmentShader:Pt.meshtoon_frag},matcap:{uniforms:ve([et.common,et.bumpmap,et.normalmap,et.displacementmap,et.fog,{matcap:{value:null}}]),vertexShader:Pt.meshmatcap_vert,fragmentShader:Pt.meshmatcap_frag},points:{uniforms:ve([et.points,et.fog]),vertexShader:Pt.points_vert,fragmentShader:Pt.points_frag},dashed:{uniforms:ve([et.common,et.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Pt.linedashed_vert,fragmentShader:Pt.linedashed_frag},depth:{uniforms:ve([et.common,et.displacementmap]),vertexShader:Pt.depth_vert,fragmentShader:Pt.depth_frag},normal:{uniforms:ve([et.common,et.bumpmap,et.normalmap,et.displacementmap,{opacity:{value:1}}]),vertexShader:Pt.meshnormal_vert,fragmentShader:Pt.meshnormal_frag},sprite:{uniforms:ve([et.sprite,et.fog]),vertexShader:Pt.sprite_vert,fragmentShader:Pt.sprite_frag},background:{uniforms:{uvTransform:{value:new bt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Pt.background_vert,fragmentShader:Pt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new bt}},vertexShader:Pt.backgroundCube_vert,fragmentShader:Pt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Pt.cube_vert,fragmentShader:Pt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Pt.equirect_vert,fragmentShader:Pt.equirect_frag},distanceRGBA:{uniforms:ve([et.common,et.displacementmap,{referencePosition:{value:new R},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Pt.distanceRGBA_vert,fragmentShader:Pt.distanceRGBA_frag},shadow:{uniforms:ve([et.lights,et.fog,{color:{value:new Nt(0)},opacity:{value:1}}]),vertexShader:Pt.shadow_vert,fragmentShader:Pt.shadow_frag}};We.physical={uniforms:ve([We.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new bt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new bt},clearcoatNormalScale:{value:new _t(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new bt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new bt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new bt},sheen:{value:0},sheenColor:{value:new Nt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new bt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new bt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new bt},transmissionSamplerSize:{value:new _t},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new bt},attenuationDistance:{value:0},attenuationColor:{value:new Nt(0)},specularColor:{value:new Nt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new bt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new bt},anisotropyVector:{value:new _t},anisotropyMap:{value:null},anisotropyMapTransform:{value:new bt}}]),vertexShader:Pt.meshphysical_vert,fragmentShader:Pt.meshphysical_frag};const sV={r:0,b:0,g:0},Rn=new Xe,fu=new te;function du(i,t,e,n,V,s,r){const a=new Nt(0);let o=s===!0?0:1,l,c,h=null,q=0,f=null;function p(E){let S=E.isScene===!0?E.background:null;return S&&S.isTexture&&(S=(E.backgroundBlurriness>0?e:t).get(S)),S}function m(E){let S=!1;const _=p(E);_===null?u(a,o):_&&_.isColor&&(u(_,1),S=!0);const I=i.xr.getEnvironmentBlendMode();I==="additive"?n.buffers.color.setClear(0,0,0,1,r):I==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,r),(i.autoClear||S)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function d(E,S){const _=p(S);_&&(_.isCubeTexture||_.mapping===gV)?(c===void 0&&(c=new Tt(new On(1,1,1),new Sn({name:"BackgroundCubeMaterial",uniforms:qi(We.backgroundCube.uniforms),vertexShader:We.backgroundCube.vertexShader,fragmentShader:We.backgroundCube.fragmentShader,side:_e,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(I,y,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),V.update(c)),Rn.copy(S.backgroundRotation),Rn.x*=-1,Rn.y*=-1,Rn.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(Rn.y*=-1,Rn.z*=-1),c.material.uniforms.envMap.value=_,c.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(fu.makeRotationFromEuler(Rn)),c.material.toneMapped=zt.getTransfer(_.colorSpace)!==Qt,(h!==_||q!==_.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,h=_,q=_.version,f=i.toneMapping),c.layers.enableAll(),E.unshift(c,c.geometry,c.material,0,0,null)):_&&_.isTexture&&(l===void 0&&(l=new Tt(new Qe(2,2),new Sn({name:"BackgroundMaterial",uniforms:qi(We.background.uniforms),vertexShader:We.background.vertexShader,fragmentShader:We.background.fragmentShader,side:xn,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),V.update(l)),l.material.uniforms.t2D.value=_,l.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,l.material.toneMapped=zt.getTransfer(_.colorSpace)!==Qt,_.matrixAutoUpdate===!0&&_.updateMatrix(),l.material.uniforms.uvTransform.value.copy(_.matrix),(h!==_||q!==_.version||f!==i.toneMapping)&&(l.material.needsUpdate=!0,h=_,q=_.version,f=i.toneMapping),l.layers.enableAll(),E.unshift(l,l.geometry,l.material,0,0,null))}function u(E,S){E.getRGB(sV,Ga(i)),n.buffers.color.setClear(sV.r,sV.g,sV.b,S,r)}return{getClearColor:function(){return a},setClearColor:function(E,S=1){a.set(E),o=S,u(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(E){o=E,u(a,o)},render:m,addToRenderList:d}}function pu(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},V=q(null);let s=V,r=!1;function a(v,w,O,N,k){let K=!1;const H=h(N,O,w);s!==H&&(s=H,l(s.object)),K=f(v,N,O,k),K&&p(v,N,O,k),k!==null&&t.update(k,i.ELEMENT_ARRAY_BUFFER),(K||r)&&(r=!1,_(v,w,O,N),k!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(k).buffer))}function o(){return i.createVertexArray()}function l(v){return i.bindVertexArray(v)}function c(v){return i.deleteVertexArray(v)}function h(v,w,O){const N=O.wireframe===!0;let k=n[v.id];k===void 0&&(k={},n[v.id]=k);let K=k[w.id];K===void 0&&(K={},k[w.id]=K);let H=K[N];return H===void 0&&(H=q(o()),K[N]=H),H}function q(v){const w=[],O=[],N=[];for(let k=0;k<e;k++)w[k]=0,O[k]=0,N[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:w,enabledAttributes:O,attributeDivisors:N,object:v,attributes:{},index:null}}function f(v,w,O,N){const k=s.attributes,K=w.attributes;let H=0;const $=O.getAttributes();for(const z in $)if($[z].location>=0){const lt=k[z];let gt=K[z];if(gt===void 0&&(z==="instanceMatrix"&&v.instanceMatrix&&(gt=v.instanceMatrix),z==="instanceColor"&&v.instanceColor&&(gt=v.instanceColor)),lt===void 0||lt.attribute!==gt||gt&&lt.data!==gt.data)return!0;H++}return s.attributesNum!==H||s.index!==N}function p(v,w,O,N){const k={},K=w.attributes;let H=0;const $=O.getAttributes();for(const z in $)if($[z].location>=0){let lt=K[z];lt===void 0&&(z==="instanceMatrix"&&v.instanceMatrix&&(lt=v.instanceMatrix),z==="instanceColor"&&v.instanceColor&&(lt=v.instanceColor));const gt={};gt.attribute=lt,lt&&lt.data&&(gt.data=lt.data),k[z]=gt,H++}s.attributes=k,s.attributesNum=H,s.index=N}function m(){const v=s.newAttributes;for(let w=0,O=v.length;w<O;w++)v[w]=0}function d(v){u(v,0)}function u(v,w){const O=s.newAttributes,N=s.enabledAttributes,k=s.attributeDivisors;O[v]=1,N[v]===0&&(i.enableVertexAttribArray(v),N[v]=1),k[v]!==w&&(i.vertexAttribDivisor(v,w),k[v]=w)}function E(){const v=s.newAttributes,w=s.enabledAttributes;for(let O=0,N=w.length;O<N;O++)w[O]!==v[O]&&(i.disableVertexAttribArray(O),w[O]=0)}function S(v,w,O,N,k,K,H){H===!0?i.vertexAttribIPointer(v,w,O,k,K):i.vertexAttribPointer(v,w,O,N,k,K)}function _(v,w,O,N){m();const k=N.attributes,K=O.getAttributes(),H=w.defaultAttributeValues;for(const $ in K){const z=K[$];if(z.location>=0){let it=k[$];if(it===void 0&&($==="instanceMatrix"&&v.instanceMatrix&&(it=v.instanceMatrix),$==="instanceColor"&&v.instanceColor&&(it=v.instanceColor)),it!==void 0){const lt=it.normalized,gt=it.itemSize,Dt=t.get(it);if(Dt===void 0)continue;const Xt=Dt.buffer,Y=Dt.type,tt=Dt.bytesPerElement,pt=Y===i.INT||Y===i.UNSIGNED_INT||it.gpuType===Ws;if(it.isInterleavedBufferAttribute){const Vt=it.data,St=Vt.stride,wt=it.offset;if(Vt.isInstancedInterleavedBuffer){for(let It=0;It<z.locationSize;It++)u(z.location+It,Vt.meshPerAttribute);v.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=Vt.meshPerAttribute*Vt.count)}else for(let It=0;It<z.locationSize;It++)d(z.location+It);i.bindBuffer(i.ARRAY_BUFFER,Xt);for(let It=0;It<z.locationSize;It++)S(z.location+It,gt/z.locationSize,Y,lt,St*tt,(wt+gt/z.locationSize*It)*tt,pt)}else{if(it.isInstancedBufferAttribute){for(let Vt=0;Vt<z.locationSize;Vt++)u(z.location+Vt,it.meshPerAttribute);v.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=it.meshPerAttribute*it.count)}else for(let Vt=0;Vt<z.locationSize;Vt++)d(z.location+Vt);i.bindBuffer(i.ARRAY_BUFFER,Xt);for(let Vt=0;Vt<z.locationSize;Vt++)S(z.location+Vt,gt/z.locationSize,Y,lt,gt*tt,gt/z.locationSize*Vt*tt,pt)}}else if(H!==void 0){const lt=H[$];if(lt!==void 0)switch(lt.length){case 2:i.vertexAttrib2fv(z.location,lt);break;case 3:i.vertexAttrib3fv(z.location,lt);break;case 4:i.vertexAttrib4fv(z.location,lt);break;default:i.vertexAttrib1fv(z.location,lt)}}}}E()}function I(){b();for(const v in n){const w=n[v];for(const O in w){const N=w[O];for(const k in N)c(N[k].object),delete N[k];delete w[O]}delete n[v]}}function y(v){if(n[v.id]===void 0)return;const w=n[v.id];for(const O in w){const N=w[O];for(const k in N)c(N[k].object),delete N[k];delete w[O]}delete n[v.id]}function T(v){for(const w in n){const O=n[w];if(O[v.id]===void 0)continue;const N=O[v.id];for(const k in N)c(N[k].object),delete N[k];delete O[v.id]}}function b(){M(),r=!0,s!==V&&(s=V,l(s.object))}function M(){V.geometry=null,V.program=null,V.wireframe=!1}return{setup:a,reset:b,resetDefaultState:M,dispose:I,releaseStatesOfGeometry:y,releaseStatesOfProgram:T,initAttributes:m,enableAttribute:d,disableUnusedAttributes:E}}function Au(i,t,e){let n;function V(l){n=l}function s(l,c){i.drawArrays(n,l,c),e.update(c,n,1)}function r(l,c,h){h!==0&&(i.drawArraysInstanced(n,l,c,h),e.update(c,n,h))}function a(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let f=0;for(let p=0;p<h;p++)f+=c[p];e.update(f,n,1)}function o(l,c,h,q){if(h===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let p=0;p<l.length;p++)r(l[p],c[p],q[p]);else{f.multiDrawArraysInstancedWEBGL(n,l,0,c,0,q,0,h);let p=0;for(let m=0;m<h;m++)p+=c[m]*q[m];e.update(p,n,1)}}this.setMode=V,this.render=s,this.renderInstances=r,this.renderMultiDraw=a,this.renderMultiDrawInstances=o}function mu(i,t,e,n){let V;function s(){if(V!==void 0)return V;if(t.has("EXT_texture_filter_anisotropic")===!0){const T=t.get("EXT_texture_filter_anisotropic");V=i.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else V=0;return V}function r(T){return!(T!==Ge&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(T){const b=T===Li&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(T!==an&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==Vn&&!b)}function o(T){if(T==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const c=o(l);c!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",c,"instead."),l=c);const h=e.logarithmicDepthBuffer===!0,q=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),p=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_TEXTURE_SIZE),d=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),u=i.getParameter(i.MAX_VERTEX_ATTRIBS),E=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),S=i.getParameter(i.MAX_VARYING_VECTORS),_=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),I=p>0,y=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:o,textureFormatReadable:r,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:h,reverseDepthBuffer:q,maxTextures:f,maxVertexTextures:p,maxTextureSize:m,maxCubemapSize:d,maxAttributes:u,maxVertexUniforms:E,maxVaryings:S,maxFragmentUniforms:_,vertexTextures:I,maxSamples:y}}function gu(i){const t=this;let e=null,n=0,V=!1,s=!1;const r=new Un,a=new bt,o={value:null,needsUpdate:!1};this.uniform=o,this.numPlanes=0,this.numIntersection=0,this.init=function(h,q){const f=h.length!==0||q||n!==0||V;return V=q,n=h.length,f},this.beginShadows=function(){s=!0,c(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,q){e=c(h,q,0)},this.setState=function(h,q,f){const p=h.clippingPlanes,m=h.clipIntersection,d=h.clipShadows,u=i.get(h);if(!V||p===null||p.length===0||s&&!d)s?c(null):l();else{const E=s?0:n,S=E*4;let _=u.clippingState||null;o.value=_,_=c(p,q,S,f);for(let I=0;I!==S;++I)_[I]=e[I];u.clippingState=_,this.numIntersection=m?this.numPlanes:0,this.numPlanes+=E}};function l(){o.value!==e&&(o.value=e,o.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function c(h,q,f,p){const m=h!==null?h.length:0;let d=null;if(m!==0){if(d=o.value,p!==!0||d===null){const u=f+m*4,E=q.matrixWorldInverse;a.getNormalMatrix(E),(d===null||d.length<u)&&(d=new Float32Array(u));for(let S=0,_=f;S!==m;++S,_+=4)r.copy(h[S]).applyMatrix4(E,a),r.normal.toArray(d,_),d[_+3]=r.constant}o.value=d,o.needsUpdate=!0}return t.numPlanes=m,t.numIntersection=0,d}}function vu(i){let t=new WeakMap;function e(r,a){return a===us?r.mapping=li:a===qs&&(r.mapping=ci),r}function n(r){if(r&&r.isTexture){const a=r.mapping;if(a===us||a===qs)if(t.has(r)){const o=t.get(r).texture;return e(o,r.mapping)}else{const o=r.image;if(o&&o.height>0){const l=new bl(o.height);return l.fromEquirectangularTexture(i,r),t.set(r,l),r.addEventListener("dispose",V),e(l.texture,r.mapping)}else return null}}return r}function V(r){const a=r.target;a.removeEventListener("dispose",V);const o=t.get(a);o!==void 0&&(t.delete(a),o.dispose())}function s(){t=new WeakMap}return{get:n,dispose:s}}class Wa extends za{constructor(t=-1,e=1,n=1,V=-1,s=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=V,this.near=s,this.far=r,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,V,s,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=V,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,V=(this.top+this.bottom)/2;let s=n-t,r=n+t,a=V+e,o=V-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,r=s+l*this.view.width,a-=c*this.view.offsetY,o=a-c*this.view.height}this.projectionMatrix.makeOrthographic(s,r,a,o,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Vi=4,Nr=[.125,.215,.35,.446,.526,.582],In=20,YV=new Wa,Or=new Nt;let QV=null,XV=0,KV=0,JV=!1;const Pn=(1+Math.sqrt(5))/2,ei=1/Pn,Gr=[new R(-Pn,ei,0),new R(Pn,ei,0),new R(-ei,0,Pn),new R(ei,0,Pn),new R(0,Pn,-ei),new R(0,Pn,ei),new R(-1,1,-1),new R(1,1,-1),new R(-1,1,1),new R(1,1,1)];class zr{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,V=100){QV=this._renderer.getRenderTarget(),XV=this._renderer.getActiveCubeFace(),KV=this._renderer.getActiveMipmapLevel(),JV=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,n,V,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Wr(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Hr(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(QV,XV,KV),this._renderer.xr.enabled=JV,t.scissorTest=!1,rV(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===li||t.mapping===ci?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),QV=this._renderer.getRenderTarget(),XV=this._renderer.getActiveCubeFace(),KV=this._renderer.getActiveMipmapLevel(),JV=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Ee,minFilter:Ee,generateMipmaps:!1,type:Li,format:Ge,colorSpace:di,depthBuffer:!1},V=kr(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=kr(t,e,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=_u(s)),this._blurMaterial=Mu(s,t,e)}return V}_compileMaterial(t){const e=new Tt(this._lodPlanes[0],t);this._renderer.compile(e,YV)}_sceneToCubeUV(t,e,n,V){const a=new Pe(90,1,e,n),o=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],c=this._renderer,h=c.autoClear,q=c.toneMapping;c.getClearColor(Or),c.toneMapping=_n,c.autoClear=!1;const f=new ze({name:"PMREM.Background",side:_e,depthWrite:!1,depthTest:!1}),p=new Tt(new On,f);let m=!1;const d=t.background;d?d.isColor&&(f.color.copy(d),t.background=null,m=!0):(f.color.copy(Or),m=!0);for(let u=0;u<6;u++){const E=u%3;E===0?(a.up.set(0,o[u],0),a.lookAt(l[u],0,0)):E===1?(a.up.set(0,0,o[u]),a.lookAt(0,l[u],0)):(a.up.set(0,o[u],0),a.lookAt(0,0,l[u]));const S=this._cubeSize;rV(V,E*S,u>2?S:0,S,S),c.setRenderTarget(V),m&&c.render(p,a),c.render(t,a)}p.geometry.dispose(),p.material.dispose(),c.toneMapping=q,c.autoClear=h,t.background=d}_textureToCubeUV(t,e){const n=this._renderer,V=t.mapping===li||t.mapping===ci;V?(this._cubemapMaterial===null&&(this._cubemapMaterial=Wr()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Hr());const s=V?this._cubemapMaterial:this._equirectMaterial,r=new Tt(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=t;const o=this._cubeSize;rV(e,0,0,3*o,2*o),n.setRenderTarget(e),n.render(r,YV)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const V=this._lodPlanes.length;for(let s=1;s<V;s++){const r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Gr[(V-s-1)%Gr.length];this._blur(t,s-1,s,r,a)}e.autoClear=n}_blur(t,e,n,V,s){const r=this._pingPongRenderTarget;this._halfBlur(t,r,e,n,V,"latitudinal",s),this._halfBlur(r,t,n,n,V,"longitudinal",s)}_halfBlur(t,e,n,V,s,r,a){const o=this._renderer,l=this._blurMaterial;r!=="latitudinal"&&r!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const c=3,h=new Tt(this._lodPlanes[V],l),q=l.uniforms,f=this._sizeLods[n]-1,p=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*In-1),m=s/p,d=isFinite(s)?1+Math.floor(c*m):In;d>In&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${d} samples when the maximum is set to ${In}`);const u=[];let E=0;for(let T=0;T<In;++T){const b=T/m,M=Math.exp(-b*b/2);u.push(M),T===0?E+=M:T<d&&(E+=2*M)}for(let T=0;T<u.length;T++)u[T]=u[T]/E;q.envMap.value=t.texture,q.samples.value=d,q.weights.value=u,q.latitudinal.value=r==="latitudinal",a&&(q.poleAxis.value=a);const{_lodMax:S}=this;q.dTheta.value=p,q.mipInt.value=S-n;const _=this._sizeLods[V],I=3*_*(V>S-Vi?V-S+Vi:0),y=4*(this._cubeSize-_);rV(e,I,y,3*_,2*_),o.setRenderTarget(e),o.render(h,YV)}}function _u(i){const t=[],e=[],n=[];let V=i;const s=i-Vi+1+Nr.length;for(let r=0;r<s;r++){const a=Math.pow(2,V);e.push(a);let o=1/a;r>i-Vi?o=Nr[r-i+Vi-1]:r===0&&(o=0),n.push(o);const l=1/(a-2),c=-l,h=1+l,q=[c,c,h,c,h,h,c,c,h,h,c,h],f=6,p=6,m=3,d=2,u=1,E=new Float32Array(m*p*f),S=new Float32Array(d*p*f),_=new Float32Array(u*p*f);for(let y=0;y<f;y++){const T=y%3*2/3-1,b=y>2?0:-1,M=[T,b,0,T+2/3,b,0,T+2/3,b+1,0,T,b,0,T+2/3,b+1,0,T,b+1,0];E.set(M,m*p*y),S.set(q,d*p*y);const v=[y,y,y,y,y,y];_.set(v,u*p*y)}const I=new xe;I.setAttribute("position",new De(E,m)),I.setAttribute("uv",new De(S,d)),I.setAttribute("faceIndex",new De(_,u)),t.push(I),V>Vi&&V--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function kr(i,t,e){const n=new Nn(i,t,e);return n.texture.mapping=gV,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function rV(i,t,e,n,V){i.viewport.set(t,e,n,V),i.scissor.set(t,e,n,V)}function Mu(i,t,e){const n=new Float32Array(In),V=new R(0,1,0);return new Sn({name:"SphericalGaussianBlur",defines:{n:In,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:V}},vertexShader:$s(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:vn,depthTest:!1,depthWrite:!1})}function Hr(){return new Sn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:$s(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:vn,depthTest:!1,depthWrite:!1})}function Wr(){return new Sn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:$s(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:vn,depthTest:!1,depthWrite:!1})}function $s(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function xu(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const o=a.mapping,l=o===us||o===qs,c=o===li||o===ci;if(l||c){let h=t.get(a);const q=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==q)return e===null&&(e=new zr(i)),h=l?e.fromEquirectangular(a,h):e.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,t.set(a,h),h.texture;if(h!==void 0)return h.texture;{const f=a.image;return l&&f&&f.height>0||c&&f&&V(f)?(e===null&&(e=new zr(i)),h=l?e.fromEquirectangular(a):e.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,t.set(a,h),a.addEventListener("dispose",s),h.texture):null}}}return a}function V(a){let o=0;const l=6;for(let c=0;c<l;c++)a[c]!==void 0&&o++;return o===l}function s(a){const o=a.target;o.removeEventListener("dispose",s);const l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function r(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:r}}function Su(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let V;switch(n){case"WEBGL_depth_texture":V=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":V=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":V=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":V=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:V=i.getExtension(n)}return t[n]=V,V}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const V=e(n);return V===null&&yi("THREE.WebGLRenderer: "+n+" extension not supported."),V}}}function Eu(i,t,e,n){const V={},s=new WeakMap;function r(h){const q=h.target;q.index!==null&&t.remove(q.index);for(const p in q.attributes)t.remove(q.attributes[p]);for(const p in q.morphAttributes){const m=q.morphAttributes[p];for(let d=0,u=m.length;d<u;d++)t.remove(m[d])}q.removeEventListener("dispose",r),delete V[q.id];const f=s.get(q);f&&(t.remove(f),s.delete(q)),n.releaseStatesOfGeometry(q),q.isInstancedBufferGeometry===!0&&delete q._maxInstanceCount,e.memory.geometries--}function a(h,q){return V[q.id]===!0||(q.addEventListener("dispose",r),V[q.id]=!0,e.memory.geometries++),q}function o(h){const q=h.attributes;for(const p in q)t.update(q[p],i.ARRAY_BUFFER);const f=h.morphAttributes;for(const p in f){const m=f[p];for(let d=0,u=m.length;d<u;d++)t.update(m[d],i.ARRAY_BUFFER)}}function l(h){const q=[],f=h.index,p=h.attributes.position;let m=0;if(f!==null){const E=f.array;m=f.version;for(let S=0,_=E.length;S<_;S+=3){const I=E[S+0],y=E[S+1],T=E[S+2];q.push(I,y,y,T,T,I)}}else if(p!==void 0){const E=p.array;m=p.version;for(let S=0,_=E.length/3-1;S<_;S+=3){const I=S+0,y=S+1,T=S+2;q.push(I,y,y,T,T,I)}}else return;const d=new(Pa(q)?Oa:Na)(q,1);d.version=m;const u=s.get(h);u&&t.remove(u),s.set(h,d)}function c(h){const q=s.get(h);if(q){const f=h.index;f!==null&&q.version<f.version&&l(h)}else l(h);return s.get(h)}return{get:a,update:o,getWireframeAttribute:c}}function yu(i,t,e){let n;function V(q){n=q}let s,r;function a(q){s=q.type,r=q.bytesPerElement}function o(q,f){i.drawElements(n,f,s,q*r),e.update(f,n,1)}function l(q,f,p){p!==0&&(i.drawElementsInstanced(n,f,s,q*r,p),e.update(f,n,p))}function c(q,f,p){if(p===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,s,q,0,p);let d=0;for(let u=0;u<p;u++)d+=f[u];e.update(d,n,1)}function h(q,f,p,m){if(p===0)return;const d=t.get("WEBGL_multi_draw");if(d===null)for(let u=0;u<q.length;u++)l(q[u]/r,f[u],m[u]);else{d.multiDrawElementsInstancedWEBGL(n,f,0,s,q,0,m,0,p);let u=0;for(let E=0;E<p;E++)u+=f[E]*m[E];e.update(u,n,1)}}this.setMode=V,this.setIndex=a,this.render=o,this.renderInstances=l,this.renderMultiDraw=c,this.renderMultiDrawInstances=h}function Tu(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,r,a){switch(e.calls++,r){case i.TRIANGLES:e.triangles+=a*(s/3);break;case i.LINES:e.lines+=a*(s/2);break;case i.LINE_STRIP:e.lines+=a*(s-1);break;case i.LINE_LOOP:e.lines+=a*s;break;case i.POINTS:e.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",r);break}}function V(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:V,update:n}}function wu(i,t,e){const n=new WeakMap,V=new se;function s(r,a,o){const l=r.morphTargetInfluences,c=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=c!==void 0?c.length:0;let q=n.get(a);if(q===void 0||q.count!==h){let M=function(){T.dispose(),n.delete(a),a.removeEventListener("dispose",M)};q!==void 0&&q.texture.dispose();const f=a.morphAttributes.position!==void 0,p=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,d=a.morphAttributes.position||[],u=a.morphAttributes.normal||[],E=a.morphAttributes.color||[];let S=0;f===!0&&(S=1),p===!0&&(S=2),m===!0&&(S=3);let _=a.attributes.position.count*S,I=1;_>t.maxTextureSize&&(I=Math.ceil(_/t.maxTextureSize),_=t.maxTextureSize);const y=new Float32Array(_*I*4*h),T=new Ia(y,_,I,h);T.type=Vn,T.needsUpdate=!0;const b=S*4;for(let v=0;v<h;v++){const w=d[v],O=u[v],N=E[v],k=_*I*4*v;for(let K=0;K<w.count;K++){const H=K*b;f===!0&&(V.fromBufferAttribute(w,K),y[k+H+0]=V.x,y[k+H+1]=V.y,y[k+H+2]=V.z,y[k+H+3]=0),p===!0&&(V.fromBufferAttribute(O,K),y[k+H+4]=V.x,y[k+H+5]=V.y,y[k+H+6]=V.z,y[k+H+7]=0),m===!0&&(V.fromBufferAttribute(N,K),y[k+H+8]=V.x,y[k+H+9]=V.y,y[k+H+10]=V.z,y[k+H+11]=N.itemSize===4?V.w:1)}}q={count:h,texture:T,size:new _t(_,I)},n.set(a,q),a.addEventListener("dispose",M)}if(r.isInstancedMesh===!0&&r.morphTexture!==null)o.getUniforms().setValue(i,"morphTexture",r.morphTexture,e);else{let f=0;for(let m=0;m<l.length;m++)f+=l[m];const p=a.morphTargetsRelative?1:1-f;o.getUniforms().setValue(i,"morphTargetBaseInfluence",p),o.getUniforms().setValue(i,"morphTargetInfluences",l)}o.getUniforms().setValue(i,"morphTargetsTexture",q.texture,e),o.getUniforms().setValue(i,"morphTargetsTextureSize",q.size)}return{update:s}}function Cu(i,t,e,n){let V=new WeakMap;function s(o){const l=n.render.frame,c=o.geometry,h=t.get(o,c);if(V.get(h)!==l&&(t.update(h),V.set(h,l)),o.isInstancedMesh&&(o.hasEventListener("dispose",a)===!1&&o.addEventListener("dispose",a),V.get(o)!==l&&(e.update(o.instanceMatrix,i.ARRAY_BUFFER),o.instanceColor!==null&&e.update(o.instanceColor,i.ARRAY_BUFFER),V.set(o,l))),o.isSkinnedMesh){const q=o.skeleton;V.get(q)!==l&&(q.update(),V.set(q,l))}return h}function r(){V=new WeakMap}function a(o){const l=o.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:s,dispose:r}}class Ya extends Me{constructor(t,e,n,V,s,r,a,o,l,c=ri){if(c!==ri&&c!==ui)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&c===ri&&(n=Fn),n===void 0&&c===ui&&(n=hi),super(null,V,s,r,a,o,c,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:ke,this.minFilter=o!==void 0?o:ke,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const Qa=new Me,Yr=new Ya(1,1),Xa=new Ia,Ka=new dl,Ja=new ka,Qr=[],Xr=[],Kr=new Float32Array(16),Jr=new Float32Array(9),jr=new Float32Array(4);function gi(i,t,e){const n=i[0];if(n<=0||n>0)return i;const V=t*e;let s=Qr[V];if(s===void 0&&(s=new Float32Array(V),Qr[V]=s),t!==0){n.toArray(s,0);for(let r=1,a=0;r!==t;++r)a+=e,i[r].toArray(s,a)}return s}function ce(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function he(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function MV(i,t){let e=Xr[t];e===void 0&&(e=new Int32Array(t),Xr[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Ru(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function bu(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ce(e,t))return;i.uniform2fv(this.addr,t),he(e,t)}}function Uu(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ce(e,t))return;i.uniform3fv(this.addr,t),he(e,t)}}function Pu(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ce(e,t))return;i.uniform4fv(this.addr,t),he(e,t)}}function Du(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(ce(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),he(e,t)}else{if(ce(e,n))return;jr.set(n),i.uniformMatrix2fv(this.addr,!1,jr),he(e,n)}}function Iu(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(ce(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),he(e,t)}else{if(ce(e,n))return;Jr.set(n),i.uniformMatrix3fv(this.addr,!1,Jr),he(e,n)}}function Lu(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(ce(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),he(e,t)}else{if(ce(e,n))return;Kr.set(n),i.uniformMatrix4fv(this.addr,!1,Kr),he(e,n)}}function Bu(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Fu(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ce(e,t))return;i.uniform2iv(this.addr,t),he(e,t)}}function Nu(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ce(e,t))return;i.uniform3iv(this.addr,t),he(e,t)}}function Ou(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ce(e,t))return;i.uniform4iv(this.addr,t),he(e,t)}}function Gu(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function zu(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ce(e,t))return;i.uniform2uiv(this.addr,t),he(e,t)}}function ku(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ce(e,t))return;i.uniform3uiv(this.addr,t),he(e,t)}}function Hu(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ce(e,t))return;i.uniform4uiv(this.addr,t),he(e,t)}}function Wu(i,t,e){const n=this.cache,V=e.allocateTextureUnit();n[0]!==V&&(i.uniform1i(this.addr,V),n[0]=V);let s;this.type===i.SAMPLER_2D_SHADOW?(Yr.compareFunction=Ua,s=Yr):s=Qa,e.setTexture2D(t||s,V)}function Yu(i,t,e){const n=this.cache,V=e.allocateTextureUnit();n[0]!==V&&(i.uniform1i(this.addr,V),n[0]=V),e.setTexture3D(t||Ka,V)}function Qu(i,t,e){const n=this.cache,V=e.allocateTextureUnit();n[0]!==V&&(i.uniform1i(this.addr,V),n[0]=V),e.setTextureCube(t||Ja,V)}function Xu(i,t,e){const n=this.cache,V=e.allocateTextureUnit();n[0]!==V&&(i.uniform1i(this.addr,V),n[0]=V),e.setTexture2DArray(t||Xa,V)}function Ku(i){switch(i){case 5126:return Ru;case 35664:return bu;case 35665:return Uu;case 35666:return Pu;case 35674:return Du;case 35675:return Iu;case 35676:return Lu;case 5124:case 35670:return Bu;case 35667:case 35671:return Fu;case 35668:case 35672:return Nu;case 35669:case 35673:return Ou;case 5125:return Gu;case 36294:return zu;case 36295:return ku;case 36296:return Hu;case 35678:case 36198:case 36298:case 36306:case 35682:return Wu;case 35679:case 36299:case 36307:return Yu;case 35680:case 36300:case 36308:case 36293:return Qu;case 36289:case 36303:case 36311:case 36292:return Xu}}function Ju(i,t){i.uniform1fv(this.addr,t)}function ju(i,t){const e=gi(t,this.size,2);i.uniform2fv(this.addr,e)}function Zu(i,t){const e=gi(t,this.size,3);i.uniform3fv(this.addr,e)}function $u(i,t){const e=gi(t,this.size,4);i.uniform4fv(this.addr,e)}function tq(i,t){const e=gi(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function eq(i,t){const e=gi(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function nq(i,t){const e=gi(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function iq(i,t){i.uniform1iv(this.addr,t)}function Vq(i,t){i.uniform2iv(this.addr,t)}function sq(i,t){i.uniform3iv(this.addr,t)}function rq(i,t){i.uniform4iv(this.addr,t)}function aq(i,t){i.uniform1uiv(this.addr,t)}function oq(i,t){i.uniform2uiv(this.addr,t)}function lq(i,t){i.uniform3uiv(this.addr,t)}function cq(i,t){i.uniform4uiv(this.addr,t)}function hq(i,t,e){const n=this.cache,V=t.length,s=MV(e,V);ce(n,s)||(i.uniform1iv(this.addr,s),he(n,s));for(let r=0;r!==V;++r)e.setTexture2D(t[r]||Qa,s[r])}function uq(i,t,e){const n=this.cache,V=t.length,s=MV(e,V);ce(n,s)||(i.uniform1iv(this.addr,s),he(n,s));for(let r=0;r!==V;++r)e.setTexture3D(t[r]||Ka,s[r])}function qq(i,t,e){const n=this.cache,V=t.length,s=MV(e,V);ce(n,s)||(i.uniform1iv(this.addr,s),he(n,s));for(let r=0;r!==V;++r)e.setTextureCube(t[r]||Ja,s[r])}function fq(i,t,e){const n=this.cache,V=t.length,s=MV(e,V);ce(n,s)||(i.uniform1iv(this.addr,s),he(n,s));for(let r=0;r!==V;++r)e.setTexture2DArray(t[r]||Xa,s[r])}function dq(i){switch(i){case 5126:return Ju;case 35664:return ju;case 35665:return Zu;case 35666:return $u;case 35674:return tq;case 35675:return eq;case 35676:return nq;case 5124:case 35670:return iq;case 35667:case 35671:return Vq;case 35668:case 35672:return sq;case 35669:case 35673:return rq;case 5125:return aq;case 36294:return oq;case 36295:return lq;case 36296:return cq;case 35678:case 36198:case 36298:case 36306:case 35682:return hq;case 35679:case 36299:case 36307:return uq;case 35680:case 36300:case 36308:case 36293:return qq;case 36289:case 36303:case 36311:case 36292:return fq}}class pq{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Ku(e.type)}}class Aq{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=dq(e.type)}}class mq{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const V=this.seq;for(let s=0,r=V.length;s!==r;++s){const a=V[s];a.setValue(t,e[a.id],n)}}}const jV=/(\w+)(\])?(\[|\.)?/g;function Zr(i,t){i.seq.push(t),i.map[t.id]=t}function gq(i,t,e){const n=i.name,V=n.length;for(jV.lastIndex=0;;){const s=jV.exec(n),r=jV.lastIndex;let a=s[1];const o=s[2]==="]",l=s[3];if(o&&(a=a|0),l===void 0||l==="["&&r+2===V){Zr(e,l===void 0?new pq(a,i,t):new Aq(a,i,t));break}else{let h=e.map[a];h===void 0&&(h=new mq(a),Zr(e,h)),e=h}}}class pV{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let V=0;V<n;++V){const s=t.getActiveUniform(e,V),r=t.getUniformLocation(e,s.name);gq(s,r,this)}}setValue(t,e,n,V){const s=this.map[e];s!==void 0&&s.setValue(t,n,V)}setOptional(t,e,n){const V=e[n];V!==void 0&&this.setValue(t,n,V)}static upload(t,e,n,V){for(let s=0,r=e.length;s!==r;++s){const a=e[s],o=n[a.id];o.needsUpdate!==!1&&a.setValue(t,o.value,V)}}static seqWithValue(t,e){const n=[];for(let V=0,s=t.length;V!==s;++V){const r=t[V];r.id in e&&n.push(r)}return n}}function $r(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const vq=37297;let _q=0;function Mq(i,t){const e=i.split(`
`),n=[],V=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let r=V;r<s;r++){const a=r+1;n.push(`${a===t?">":" "} ${a}: ${e[r]}`)}return n.join(`
`)}const ta=new bt;function xq(i){zt._getMatrix(ta,zt.workingColorSpace,i);const t=`mat3( ${ta.elements.map(e=>e.toFixed(4))} )`;switch(zt.getTransfer(i)){case vV:return[t,"LinearTransferOETF"];case Qt:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function ea(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),V=i.getShaderInfoLog(t).trim();if(n&&V==="")return"";const s=/ERROR: 0:(\d+)/.exec(V);if(s){const r=parseInt(s[1]);return e.toUpperCase()+`

`+V+`

`+Mq(i.getShaderSource(t),r)}else return V}function Sq(i,t){const e=xq(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function Eq(i,t){let e;switch(t){case To:e="Linear";break;case wo:e="Reinhard";break;case Co:e="Cineon";break;case Ro:e="ACESFilmic";break;case Uo:e="AgX";break;case Po:e="Neutral";break;case bo:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const aV=new R;function yq(){zt.getLuminanceCoefficients(aV);const i=aV.x.toFixed(4),t=aV.y.toFixed(4),e=aV.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Tq(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ti).join(`
`)}function wq(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Cq(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let V=0;V<n;V++){const s=i.getActiveAttrib(t,V),r=s.name;let a=1;s.type===i.FLOAT_MAT2&&(a=2),s.type===i.FLOAT_MAT3&&(a=3),s.type===i.FLOAT_MAT4&&(a=4),e[r]={type:s.type,location:i.getAttribLocation(t,r),locationSize:a}}return e}function Ti(i){return i!==""}function na(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function ia(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Rq=/^[ \t]*#include +<([\w\d./]+)>/gm;function Gs(i){return i.replace(Rq,Uq)}const bq=new Map;function Uq(i,t){let e=Pt[t];if(e===void 0){const n=bq.get(t);if(n!==void 0)e=Pt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Gs(e)}const Pq=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Va(i){return i.replace(Pq,Dq)}function Dq(i,t,e,n){let V="";for(let s=parseInt(t);s<parseInt(e);s++)V+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return V}function sa(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Iq(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Aa?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===ma?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===nn&&(t="SHADOWMAP_TYPE_VSM"),t}function Lq(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case li:case ci:t="ENVMAP_TYPE_CUBE";break;case gV:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Bq(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case ci:t="ENVMAP_MODE_REFRACTION";break}return t}function Fq(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case ga:t="ENVMAP_BLENDING_MULTIPLY";break;case Eo:t="ENVMAP_BLENDING_MIX";break;case yo:t="ENVMAP_BLENDING_ADD";break}return t}function Nq(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function Oq(i,t,e,n){const V=i.getContext(),s=e.defines;let r=e.vertexShader,a=e.fragmentShader;const o=Iq(e),l=Lq(e),c=Bq(e),h=Fq(e),q=Nq(e),f=Tq(e),p=wq(s),m=V.createProgram();let d,u,E=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(d=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(Ti).join(`
`),d.length>0&&(d+=`
`),u=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(Ti).join(`
`),u.length>0&&(u+=`
`)):(d=[sa(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+o:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ti).join(`
`),u=[sa(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",q?"#define CUBEUV_TEXEL_WIDTH "+q.texelWidth:"",q?"#define CUBEUV_TEXEL_HEIGHT "+q.texelHeight:"",q?"#define CUBEUV_MAX_MIP "+q.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+o:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==_n?"#define TONE_MAPPING":"",e.toneMapping!==_n?Pt.tonemapping_pars_fragment:"",e.toneMapping!==_n?Eq("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Pt.colorspace_pars_fragment,Sq("linearToOutputTexel",e.outputColorSpace),yq(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ti).join(`
`)),r=Gs(r),r=na(r,e),r=ia(r,e),a=Gs(a),a=na(a,e),a=ia(a,e),r=Va(r),a=Va(a),e.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,d=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+d,u=["#define varying in",e.glslVersion===Ar?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Ar?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);const S=E+d+r,_=E+u+a,I=$r(V,V.VERTEX_SHADER,S),y=$r(V,V.FRAGMENT_SHADER,_);V.attachShader(m,I),V.attachShader(m,y),e.index0AttributeName!==void 0?V.bindAttribLocation(m,0,e.index0AttributeName):e.morphTargets===!0&&V.bindAttribLocation(m,0,"position"),V.linkProgram(m);function T(w){if(i.debug.checkShaderErrors){const O=V.getProgramInfoLog(m).trim(),N=V.getShaderInfoLog(I).trim(),k=V.getShaderInfoLog(y).trim();let K=!0,H=!0;if(V.getProgramParameter(m,V.LINK_STATUS)===!1)if(K=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(V,m,I,y);else{const $=ea(V,I,"vertex"),z=ea(V,y,"fragment");console.error("THREE.WebGLProgram: Shader Error "+V.getError()+" - VALIDATE_STATUS "+V.getProgramParameter(m,V.VALIDATE_STATUS)+`

Material Name: `+w.name+`
Material Type: `+w.type+`

Program Info Log: `+O+`
`+$+`
`+z)}else O!==""?console.warn("THREE.WebGLProgram: Program Info Log:",O):(N===""||k==="")&&(H=!1);H&&(w.diagnostics={runnable:K,programLog:O,vertexShader:{log:N,prefix:d},fragmentShader:{log:k,prefix:u}})}V.deleteShader(I),V.deleteShader(y),b=new pV(V,m),M=Cq(V,m)}let b;this.getUniforms=function(){return b===void 0&&T(this),b};let M;this.getAttributes=function(){return M===void 0&&T(this),M};let v=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return v===!1&&(v=V.getProgramParameter(m,vq)),v},this.destroy=function(){n.releaseStatesOfProgram(this),V.deleteProgram(m),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=_q++,this.cacheKey=t,this.usedTimes=1,this.program=m,this.vertexShader=I,this.fragmentShader=y,this}let Gq=0;class zq{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,V=this._getShaderStage(e),s=this._getShaderStage(n),r=this._getShaderCacheForMaterial(t);return r.has(V)===!1&&(r.add(V),V.usedTimes++),r.has(s)===!1&&(r.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new kq(t),e.set(t,n)),n}}class kq{constructor(t){this.id=Gq++,this.code=t,this.usedTimes=0}}function Hq(i,t,e,n,V,s,r){const a=new Ba,o=new zq,l=new Set,c=[],h=V.logarithmicDepthBuffer,q=V.vertexTextures;let f=V.precision;const p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(M){return l.add(M),M===0?"uv":`uv${M}`}function d(M,v,w,O,N){const k=O.fog,K=N.geometry,H=M.isMeshStandardMaterial?O.environment:null,$=(M.isMeshStandardMaterial?e:t).get(M.envMap||H),z=$&&$.mapping===gV?$.image.height:null,it=p[M.type];M.precision!==null&&(f=V.getMaxPrecision(M.precision),f!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",f,"instead."));const lt=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,gt=lt!==void 0?lt.length:0;let Dt=0;K.morphAttributes.position!==void 0&&(Dt=1),K.morphAttributes.normal!==void 0&&(Dt=2),K.morphAttributes.color!==void 0&&(Dt=3);let Xt,Y,tt,pt;if(it){const Yt=We[it];Xt=Yt.vertexShader,Y=Yt.fragmentShader}else Xt=M.vertexShader,Y=M.fragmentShader,o.update(M),tt=o.getVertexShaderID(M),pt=o.getFragmentShaderID(M);const Vt=i.getRenderTarget(),St=i.state.buffers.depth.getReversed(),wt=N.isInstancedMesh===!0,It=N.isBatchedMesh===!0,ee=!!M.map,Ot=!!M.matcap,ae=!!$,D=!!M.aoMap,Ce=!!M.lightMap,Lt=!!M.bumpMap,Bt=!!M.normalMap,Mt=!!M.displacementMap,jt=!!M.emissiveMap,vt=!!M.metalnessMap,x=!!M.roughnessMap,A=M.anisotropy>0,L=M.clearcoat>0,Q=M.dispersion>0,J=M.iridescence>0,W=M.sheen>0,At=M.transmission>0,st=A&&!!M.anisotropyMap,ct=L&&!!M.clearcoatMap,Gt=L&&!!M.clearcoatNormalMap,j=L&&!!M.clearcoatRoughnessMap,ht=J&&!!M.iridescenceMap,xt=J&&!!M.iridescenceThicknessMap,Et=W&&!!M.sheenColorMap,ut=W&&!!M.sheenRoughnessMap,Ft=!!M.specularMap,Ut=!!M.specularColorMap,Kt=!!M.specularIntensityMap,C=At&&!!M.transmissionMap,nt=At&&!!M.thicknessMap,G=!!M.gradientMap,X=!!M.alphaMap,ot=M.alphaTest>0,rt=!!M.alphaHash,Ct=!!M.extensions;let ne=_n;M.toneMapped&&(Vt===null||Vt.isXRRenderTarget===!0)&&(ne=i.toneMapping);const de={shaderID:it,shaderType:M.type,shaderName:M.name,vertexShader:Xt,fragmentShader:Y,defines:M.defines,customVertexShaderID:tt,customFragmentShaderID:pt,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:f,batching:It,batchingColor:It&&N._colorsTexture!==null,instancing:wt,instancingColor:wt&&N.instanceColor!==null,instancingMorph:wt&&N.morphTexture!==null,supportsVertexTextures:q,outputColorSpace:Vt===null?i.outputColorSpace:Vt.isXRRenderTarget===!0?Vt.texture.colorSpace:di,alphaToCoverage:!!M.alphaToCoverage,map:ee,matcap:Ot,envMap:ae,envMapMode:ae&&$.mapping,envMapCubeUVHeight:z,aoMap:D,lightMap:Ce,bumpMap:Lt,normalMap:Bt,displacementMap:q&&Mt,emissiveMap:jt,normalMapObjectSpace:Bt&&M.normalMapType===Bo,normalMapTangentSpace:Bt&&M.normalMapType===ba,metalnessMap:vt,roughnessMap:x,anisotropy:A,anisotropyMap:st,clearcoat:L,clearcoatMap:ct,clearcoatNormalMap:Gt,clearcoatRoughnessMap:j,dispersion:Q,iridescence:J,iridescenceMap:ht,iridescenceThicknessMap:xt,sheen:W,sheenColorMap:Et,sheenRoughnessMap:ut,specularMap:Ft,specularColorMap:Ut,specularIntensityMap:Kt,transmission:At,transmissionMap:C,thicknessMap:nt,gradientMap:G,opaque:M.transparent===!1&&M.blending===si&&M.alphaToCoverage===!1,alphaMap:X,alphaTest:ot,alphaHash:rt,combine:M.combine,mapUv:ee&&m(M.map.channel),aoMapUv:D&&m(M.aoMap.channel),lightMapUv:Ce&&m(M.lightMap.channel),bumpMapUv:Lt&&m(M.bumpMap.channel),normalMapUv:Bt&&m(M.normalMap.channel),displacementMapUv:Mt&&m(M.displacementMap.channel),emissiveMapUv:jt&&m(M.emissiveMap.channel),metalnessMapUv:vt&&m(M.metalnessMap.channel),roughnessMapUv:x&&m(M.roughnessMap.channel),anisotropyMapUv:st&&m(M.anisotropyMap.channel),clearcoatMapUv:ct&&m(M.clearcoatMap.channel),clearcoatNormalMapUv:Gt&&m(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:j&&m(M.clearcoatRoughnessMap.channel),iridescenceMapUv:ht&&m(M.iridescenceMap.channel),iridescenceThicknessMapUv:xt&&m(M.iridescenceThicknessMap.channel),sheenColorMapUv:Et&&m(M.sheenColorMap.channel),sheenRoughnessMapUv:ut&&m(M.sheenRoughnessMap.channel),specularMapUv:Ft&&m(M.specularMap.channel),specularColorMapUv:Ut&&m(M.specularColorMap.channel),specularIntensityMapUv:Kt&&m(M.specularIntensityMap.channel),transmissionMapUv:C&&m(M.transmissionMap.channel),thicknessMapUv:nt&&m(M.thicknessMap.channel),alphaMapUv:X&&m(M.alphaMap.channel),vertexTangents:!!K.attributes.tangent&&(Bt||A),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!K.attributes.uv&&(ee||X),fog:!!k,useFog:M.fog===!0,fogExp2:!!k&&k.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:St,skinning:N.isSkinnedMesh===!0,morphTargets:K.morphAttributes.position!==void 0,morphNormals:K.morphAttributes.normal!==void 0,morphColors:K.morphAttributes.color!==void 0,morphTargetsCount:gt,morphTextureStride:Dt,numDirLights:v.directional.length,numPointLights:v.point.length,numSpotLights:v.spot.length,numSpotLightMaps:v.spotLightMap.length,numRectAreaLights:v.rectArea.length,numHemiLights:v.hemi.length,numDirLightShadows:v.directionalShadowMap.length,numPointLightShadows:v.pointShadowMap.length,numSpotLightShadows:v.spotShadowMap.length,numSpotLightShadowsWithMaps:v.numSpotLightShadowsWithMaps,numLightProbes:v.numLightProbes,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:M.dithering,shadowMapEnabled:i.shadowMap.enabled&&w.length>0,shadowMapType:i.shadowMap.type,toneMapping:ne,decodeVideoTexture:ee&&M.map.isVideoTexture===!0&&zt.getTransfer(M.map.colorSpace)===Qt,decodeVideoTextureEmissive:jt&&M.emissiveMap.isVideoTexture===!0&&zt.getTransfer(M.emissiveMap.colorSpace)===Qt,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===oe,flipSided:M.side===_e,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:Ct&&M.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ct&&M.extensions.multiDraw===!0||It)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return de.vertexUv1s=l.has(1),de.vertexUv2s=l.has(2),de.vertexUv3s=l.has(3),l.clear(),de}function u(M){const v=[];if(M.shaderID?v.push(M.shaderID):(v.push(M.customVertexShaderID),v.push(M.customFragmentShaderID)),M.defines!==void 0)for(const w in M.defines)v.push(w),v.push(M.defines[w]);return M.isRawShaderMaterial===!1&&(E(v,M),S(v,M),v.push(i.outputColorSpace)),v.push(M.customProgramCacheKey),v.join()}function E(M,v){M.push(v.precision),M.push(v.outputColorSpace),M.push(v.envMapMode),M.push(v.envMapCubeUVHeight),M.push(v.mapUv),M.push(v.alphaMapUv),M.push(v.lightMapUv),M.push(v.aoMapUv),M.push(v.bumpMapUv),M.push(v.normalMapUv),M.push(v.displacementMapUv),M.push(v.emissiveMapUv),M.push(v.metalnessMapUv),M.push(v.roughnessMapUv),M.push(v.anisotropyMapUv),M.push(v.clearcoatMapUv),M.push(v.clearcoatNormalMapUv),M.push(v.clearcoatRoughnessMapUv),M.push(v.iridescenceMapUv),M.push(v.iridescenceThicknessMapUv),M.push(v.sheenColorMapUv),M.push(v.sheenRoughnessMapUv),M.push(v.specularMapUv),M.push(v.specularColorMapUv),M.push(v.specularIntensityMapUv),M.push(v.transmissionMapUv),M.push(v.thicknessMapUv),M.push(v.combine),M.push(v.fogExp2),M.push(v.sizeAttenuation),M.push(v.morphTargetsCount),M.push(v.morphAttributeCount),M.push(v.numDirLights),M.push(v.numPointLights),M.push(v.numSpotLights),M.push(v.numSpotLightMaps),M.push(v.numHemiLights),M.push(v.numRectAreaLights),M.push(v.numDirLightShadows),M.push(v.numPointLightShadows),M.push(v.numSpotLightShadows),M.push(v.numSpotLightShadowsWithMaps),M.push(v.numLightProbes),M.push(v.shadowMapType),M.push(v.toneMapping),M.push(v.numClippingPlanes),M.push(v.numClipIntersection),M.push(v.depthPacking)}function S(M,v){a.disableAll(),v.supportsVertexTextures&&a.enable(0),v.instancing&&a.enable(1),v.instancingColor&&a.enable(2),v.instancingMorph&&a.enable(3),v.matcap&&a.enable(4),v.envMap&&a.enable(5),v.normalMapObjectSpace&&a.enable(6),v.normalMapTangentSpace&&a.enable(7),v.clearcoat&&a.enable(8),v.iridescence&&a.enable(9),v.alphaTest&&a.enable(10),v.vertexColors&&a.enable(11),v.vertexAlphas&&a.enable(12),v.vertexUv1s&&a.enable(13),v.vertexUv2s&&a.enable(14),v.vertexUv3s&&a.enable(15),v.vertexTangents&&a.enable(16),v.anisotropy&&a.enable(17),v.alphaHash&&a.enable(18),v.batching&&a.enable(19),v.dispersion&&a.enable(20),v.batchingColor&&a.enable(21),M.push(a.mask),a.disableAll(),v.fog&&a.enable(0),v.useFog&&a.enable(1),v.flatShading&&a.enable(2),v.logarithmicDepthBuffer&&a.enable(3),v.reverseDepthBuffer&&a.enable(4),v.skinning&&a.enable(5),v.morphTargets&&a.enable(6),v.morphNormals&&a.enable(7),v.morphColors&&a.enable(8),v.premultipliedAlpha&&a.enable(9),v.shadowMapEnabled&&a.enable(10),v.doubleSided&&a.enable(11),v.flipSided&&a.enable(12),v.useDepthPacking&&a.enable(13),v.dithering&&a.enable(14),v.transmission&&a.enable(15),v.sheen&&a.enable(16),v.opaque&&a.enable(17),v.pointsUvs&&a.enable(18),v.decodeVideoTexture&&a.enable(19),v.decodeVideoTextureEmissive&&a.enable(20),v.alphaToCoverage&&a.enable(21),M.push(a.mask)}function _(M){const v=p[M.type];let w;if(v){const O=We[v];w=Tl.clone(O.uniforms)}else w=M.uniforms;return w}function I(M,v){let w;for(let O=0,N=c.length;O<N;O++){const k=c[O];if(k.cacheKey===v){w=k,++w.usedTimes;break}}return w===void 0&&(w=new Oq(i,v,M,s),c.push(w)),w}function y(M){if(--M.usedTimes===0){const v=c.indexOf(M);c[v]=c[c.length-1],c.pop(),M.destroy()}}function T(M){o.remove(M)}function b(){o.dispose()}return{getParameters:d,getProgramCacheKey:u,getUniforms:_,acquireProgram:I,releaseProgram:y,releaseShaderCache:T,programs:c,dispose:b}}function Wq(){let i=new WeakMap;function t(r){return i.has(r)}function e(r){let a=i.get(r);return a===void 0&&(a={},i.set(r,a)),a}function n(r){i.delete(r)}function V(r,a,o){i.get(r)[a]=o}function s(){i=new WeakMap}return{has:t,get:e,remove:n,update:V,dispose:s}}function Yq(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function ra(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function aa(){const i=[];let t=0;const e=[],n=[],V=[];function s(){t=0,e.length=0,n.length=0,V.length=0}function r(h,q,f,p,m,d){let u=i[t];return u===void 0?(u={id:h.id,object:h,geometry:q,material:f,groupOrder:p,renderOrder:h.renderOrder,z:m,group:d},i[t]=u):(u.id=h.id,u.object=h,u.geometry=q,u.material=f,u.groupOrder=p,u.renderOrder=h.renderOrder,u.z=m,u.group=d),t++,u}function a(h,q,f,p,m,d){const u=r(h,q,f,p,m,d);f.transmission>0?n.push(u):f.transparent===!0?V.push(u):e.push(u)}function o(h,q,f,p,m,d){const u=r(h,q,f,p,m,d);f.transmission>0?n.unshift(u):f.transparent===!0?V.unshift(u):e.unshift(u)}function l(h,q){e.length>1&&e.sort(h||Yq),n.length>1&&n.sort(q||ra),V.length>1&&V.sort(q||ra)}function c(){for(let h=t,q=i.length;h<q;h++){const f=i[h];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:V,init:s,push:a,unshift:o,finish:c,sort:l}}function Qq(){let i=new WeakMap;function t(n,V){const s=i.get(n);let r;return s===void 0?(r=new aa,i.set(n,[r])):V>=s.length?(r=new aa,s.push(r)):r=s[V],r}function e(){i=new WeakMap}return{get:t,dispose:e}}function Xq(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new R,color:new Nt};break;case"SpotLight":e={position:new R,direction:new R,color:new Nt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new R,color:new Nt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new R,skyColor:new Nt,groundColor:new Nt};break;case"RectAreaLight":e={color:new Nt,position:new R,halfWidth:new R,halfHeight:new R};break}return i[t.id]=e,e}}}function Kq(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _t};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _t};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _t,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let Jq=0;function jq(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Zq(i){const t=new Xq,e=Kq(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new R);const V=new R,s=new te,r=new te;function a(l){let c=0,h=0,q=0;for(let M=0;M<9;M++)n.probe[M].set(0,0,0);let f=0,p=0,m=0,d=0,u=0,E=0,S=0,_=0,I=0,y=0,T=0;l.sort(jq);for(let M=0,v=l.length;M<v;M++){const w=l[M],O=w.color,N=w.intensity,k=w.distance,K=w.shadow&&w.shadow.map?w.shadow.map.texture:null;if(w.isAmbientLight)c+=O.r*N,h+=O.g*N,q+=O.b*N;else if(w.isLightProbe){for(let H=0;H<9;H++)n.probe[H].addScaledVector(w.sh.coefficients[H],N);T++}else if(w.isDirectionalLight){const H=t.get(w);if(H.color.copy(w.color).multiplyScalar(w.intensity),w.castShadow){const $=w.shadow,z=e.get(w);z.shadowIntensity=$.intensity,z.shadowBias=$.bias,z.shadowNormalBias=$.normalBias,z.shadowRadius=$.radius,z.shadowMapSize=$.mapSize,n.directionalShadow[f]=z,n.directionalShadowMap[f]=K,n.directionalShadowMatrix[f]=w.shadow.matrix,E++}n.directional[f]=H,f++}else if(w.isSpotLight){const H=t.get(w);H.position.setFromMatrixPosition(w.matrixWorld),H.color.copy(O).multiplyScalar(N),H.distance=k,H.coneCos=Math.cos(w.angle),H.penumbraCos=Math.cos(w.angle*(1-w.penumbra)),H.decay=w.decay,n.spot[m]=H;const $=w.shadow;if(w.map&&(n.spotLightMap[I]=w.map,I++,$.updateMatrices(w),w.castShadow&&y++),n.spotLightMatrix[m]=$.matrix,w.castShadow){const z=e.get(w);z.shadowIntensity=$.intensity,z.shadowBias=$.bias,z.shadowNormalBias=$.normalBias,z.shadowRadius=$.radius,z.shadowMapSize=$.mapSize,n.spotShadow[m]=z,n.spotShadowMap[m]=K,_++}m++}else if(w.isRectAreaLight){const H=t.get(w);H.color.copy(O).multiplyScalar(N),H.halfWidth.set(w.width*.5,0,0),H.halfHeight.set(0,w.height*.5,0),n.rectArea[d]=H,d++}else if(w.isPointLight){const H=t.get(w);if(H.color.copy(w.color).multiplyScalar(w.intensity),H.distance=w.distance,H.decay=w.decay,w.castShadow){const $=w.shadow,z=e.get(w);z.shadowIntensity=$.intensity,z.shadowBias=$.bias,z.shadowNormalBias=$.normalBias,z.shadowRadius=$.radius,z.shadowMapSize=$.mapSize,z.shadowCameraNear=$.camera.near,z.shadowCameraFar=$.camera.far,n.pointShadow[p]=z,n.pointShadowMap[p]=K,n.pointShadowMatrix[p]=w.shadow.matrix,S++}n.point[p]=H,p++}else if(w.isHemisphereLight){const H=t.get(w);H.skyColor.copy(w.color).multiplyScalar(N),H.groundColor.copy(w.groundColor).multiplyScalar(N),n.hemi[u]=H,u++}}d>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=et.LTC_FLOAT_1,n.rectAreaLTC2=et.LTC_FLOAT_2):(n.rectAreaLTC1=et.LTC_HALF_1,n.rectAreaLTC2=et.LTC_HALF_2)),n.ambient[0]=c,n.ambient[1]=h,n.ambient[2]=q;const b=n.hash;(b.directionalLength!==f||b.pointLength!==p||b.spotLength!==m||b.rectAreaLength!==d||b.hemiLength!==u||b.numDirectionalShadows!==E||b.numPointShadows!==S||b.numSpotShadows!==_||b.numSpotMaps!==I||b.numLightProbes!==T)&&(n.directional.length=f,n.spot.length=m,n.rectArea.length=d,n.point.length=p,n.hemi.length=u,n.directionalShadow.length=E,n.directionalShadowMap.length=E,n.pointShadow.length=S,n.pointShadowMap.length=S,n.spotShadow.length=_,n.spotShadowMap.length=_,n.directionalShadowMatrix.length=E,n.pointShadowMatrix.length=S,n.spotLightMatrix.length=_+I-y,n.spotLightMap.length=I,n.numSpotLightShadowsWithMaps=y,n.numLightProbes=T,b.directionalLength=f,b.pointLength=p,b.spotLength=m,b.rectAreaLength=d,b.hemiLength=u,b.numDirectionalShadows=E,b.numPointShadows=S,b.numSpotShadows=_,b.numSpotMaps=I,b.numLightProbes=T,n.version=Jq++)}function o(l,c){let h=0,q=0,f=0,p=0,m=0;const d=c.matrixWorldInverse;for(let u=0,E=l.length;u<E;u++){const S=l[u];if(S.isDirectionalLight){const _=n.directional[h];_.direction.setFromMatrixPosition(S.matrixWorld),V.setFromMatrixPosition(S.target.matrixWorld),_.direction.sub(V),_.direction.transformDirection(d),h++}else if(S.isSpotLight){const _=n.spot[f];_.position.setFromMatrixPosition(S.matrixWorld),_.position.applyMatrix4(d),_.direction.setFromMatrixPosition(S.matrixWorld),V.setFromMatrixPosition(S.target.matrixWorld),_.direction.sub(V),_.direction.transformDirection(d),f++}else if(S.isRectAreaLight){const _=n.rectArea[p];_.position.setFromMatrixPosition(S.matrixWorld),_.position.applyMatrix4(d),r.identity(),s.copy(S.matrixWorld),s.premultiply(d),r.extractRotation(s),_.halfWidth.set(S.width*.5,0,0),_.halfHeight.set(0,S.height*.5,0),_.halfWidth.applyMatrix4(r),_.halfHeight.applyMatrix4(r),p++}else if(S.isPointLight){const _=n.point[q];_.position.setFromMatrixPosition(S.matrixWorld),_.position.applyMatrix4(d),q++}else if(S.isHemisphereLight){const _=n.hemi[m];_.direction.setFromMatrixPosition(S.matrixWorld),_.direction.transformDirection(d),m++}}}return{setup:a,setupView:o,state:n}}function oa(i){const t=new Zq(i),e=[],n=[];function V(c){l.camera=c,e.length=0,n.length=0}function s(c){e.push(c)}function r(c){n.push(c)}function a(){t.setup(e)}function o(c){t.setupView(e,c)}const l={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:V,state:l,setupLights:a,setupLightsView:o,pushLight:s,pushShadow:r}}function $q(i){let t=new WeakMap;function e(V,s=0){const r=t.get(V);let a;return r===void 0?(a=new oa(i),t.set(V,[a])):s>=r.length?(a=new oa(i),r.push(a)):a=r[s],a}function n(){t=new WeakMap}return{get:e,dispose:n}}class tf extends mi{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Io,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class ef extends mi{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const nf=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Vf=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function sf(i,t,e){let n=new Zs;const V=new _t,s=new _t,r=new se,a=new tf({depthPacking:Lo}),o=new ef,l={},c=e.maxTextureSize,h={[xn]:_e,[_e]:xn,[oe]:oe},q=new Sn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new _t},radius:{value:4}},vertexShader:nf,fragmentShader:Vf}),f=q.clone();f.defines.HORIZONTAL_PASS=1;const p=new xe;p.setAttribute("position",new De(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const m=new Tt(p,q),d=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Aa;let u=this.type;this.render=function(y,T,b){if(d.enabled===!1||d.autoUpdate===!1&&d.needsUpdate===!1||y.length===0)return;const M=i.getRenderTarget(),v=i.getActiveCubeFace(),w=i.getActiveMipmapLevel(),O=i.state;O.setBlending(vn),O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);const N=u!==nn&&this.type===nn,k=u===nn&&this.type!==nn;for(let K=0,H=y.length;K<H;K++){const $=y[K],z=$.shadow;if(z===void 0){console.warn("THREE.WebGLShadowMap:",$,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;V.copy(z.mapSize);const it=z.getFrameExtents();if(V.multiply(it),s.copy(z.mapSize),(V.x>c||V.y>c)&&(V.x>c&&(s.x=Math.floor(c/it.x),V.x=s.x*it.x,z.mapSize.x=s.x),V.y>c&&(s.y=Math.floor(c/it.y),V.y=s.y*it.y,z.mapSize.y=s.y)),z.map===null||N===!0||k===!0){const gt=this.type!==nn?{minFilter:ke,magFilter:ke}:{};z.map!==null&&z.map.dispose(),z.map=new Nn(V.x,V.y,gt),z.map.texture.name=$.name+".shadowMap",z.camera.updateProjectionMatrix()}i.setRenderTarget(z.map),i.clear();const lt=z.getViewportCount();for(let gt=0;gt<lt;gt++){const Dt=z.getViewport(gt);r.set(s.x*Dt.x,s.y*Dt.y,s.x*Dt.z,s.y*Dt.w),O.viewport(r),z.updateMatrices($,gt),n=z.getFrustum(),_(T,b,z.camera,$,this.type)}z.isPointLightShadow!==!0&&this.type===nn&&E(z,b),z.needsUpdate=!1}u=this.type,d.needsUpdate=!1,i.setRenderTarget(M,v,w)};function E(y,T){const b=t.update(m);q.defines.VSM_SAMPLES!==y.blurSamples&&(q.defines.VSM_SAMPLES=y.blurSamples,f.defines.VSM_SAMPLES=y.blurSamples,q.needsUpdate=!0,f.needsUpdate=!0),y.mapPass===null&&(y.mapPass=new Nn(V.x,V.y)),q.uniforms.shadow_pass.value=y.map.texture,q.uniforms.resolution.value=y.mapSize,q.uniforms.radius.value=y.radius,i.setRenderTarget(y.mapPass),i.clear(),i.renderBufferDirect(T,null,b,q,m,null),f.uniforms.shadow_pass.value=y.mapPass.texture,f.uniforms.resolution.value=y.mapSize,f.uniforms.radius.value=y.radius,i.setRenderTarget(y.map),i.clear(),i.renderBufferDirect(T,null,b,f,m,null)}function S(y,T,b,M){let v=null;const w=b.isPointLight===!0?y.customDistanceMaterial:y.customDepthMaterial;if(w!==void 0)v=w;else if(v=b.isPointLight===!0?o:a,i.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){const O=v.uuid,N=T.uuid;let k=l[O];k===void 0&&(k={},l[O]=k);let K=k[N];K===void 0&&(K=v.clone(),k[N]=K,T.addEventListener("dispose",I)),v=K}if(v.visible=T.visible,v.wireframe=T.wireframe,M===nn?v.side=T.shadowSide!==null?T.shadowSide:T.side:v.side=T.shadowSide!==null?T.shadowSide:h[T.side],v.alphaMap=T.alphaMap,v.alphaTest=T.alphaTest,v.map=T.map,v.clipShadows=T.clipShadows,v.clippingPlanes=T.clippingPlanes,v.clipIntersection=T.clipIntersection,v.displacementMap=T.displacementMap,v.displacementScale=T.displacementScale,v.displacementBias=T.displacementBias,v.wireframeLinewidth=T.wireframeLinewidth,v.linewidth=T.linewidth,b.isPointLight===!0&&v.isMeshDistanceMaterial===!0){const O=i.properties.get(v);O.light=b}return v}function _(y,T,b,M,v){if(y.visible===!1)return;if(y.layers.test(T.layers)&&(y.isMesh||y.isLine||y.isPoints)&&(y.castShadow||y.receiveShadow&&v===nn)&&(!y.frustumCulled||n.intersectsObject(y))){y.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,y.matrixWorld);const N=t.update(y),k=y.material;if(Array.isArray(k)){const K=N.groups;for(let H=0,$=K.length;H<$;H++){const z=K[H],it=k[z.materialIndex];if(it&&it.visible){const lt=S(y,it,M,v);y.onBeforeShadow(i,y,T,b,N,lt,z),i.renderBufferDirect(b,null,N,lt,y,z),y.onAfterShadow(i,y,T,b,N,lt,z)}}}else if(k.visible){const K=S(y,k,M,v);y.onBeforeShadow(i,y,T,b,N,K,null),i.renderBufferDirect(b,null,N,K,y,null),y.onAfterShadow(i,y,T,b,N,K,null)}}const O=y.children;for(let N=0,k=O.length;N<k;N++)_(O[N],T,b,M,v)}function I(y){y.target.removeEventListener("dispose",I);for(const b in l){const M=l[b],v=y.target.uuid;v in M&&(M[v].dispose(),delete M[v])}}}const rf={[ss]:rs,[as]:cs,[os]:hs,[oi]:ls,[rs]:ss,[cs]:as,[hs]:os,[ls]:oi};function af(i,t){function e(){let C=!1;const nt=new se;let G=null;const X=new se(0,0,0,0);return{setMask:function(ot){G!==ot&&!C&&(i.colorMask(ot,ot,ot,ot),G=ot)},setLocked:function(ot){C=ot},setClear:function(ot,rt,Ct,ne,de){de===!0&&(ot*=ne,rt*=ne,Ct*=ne),nt.set(ot,rt,Ct,ne),X.equals(nt)===!1&&(i.clearColor(ot,rt,Ct,ne),X.copy(nt))},reset:function(){C=!1,G=null,X.set(-1,0,0,0)}}}function n(){let C=!1,nt=!1,G=null,X=null,ot=null;return{setReversed:function(rt){if(nt!==rt){const Ct=t.get("EXT_clip_control");nt?Ct.clipControlEXT(Ct.LOWER_LEFT_EXT,Ct.ZERO_TO_ONE_EXT):Ct.clipControlEXT(Ct.LOWER_LEFT_EXT,Ct.NEGATIVE_ONE_TO_ONE_EXT);const ne=ot;ot=null,this.setClear(ne)}nt=rt},getReversed:function(){return nt},setTest:function(rt){rt?Vt(i.DEPTH_TEST):St(i.DEPTH_TEST)},setMask:function(rt){G!==rt&&!C&&(i.depthMask(rt),G=rt)},setFunc:function(rt){if(nt&&(rt=rf[rt]),X!==rt){switch(rt){case ss:i.depthFunc(i.NEVER);break;case rs:i.depthFunc(i.ALWAYS);break;case as:i.depthFunc(i.LESS);break;case oi:i.depthFunc(i.LEQUAL);break;case os:i.depthFunc(i.EQUAL);break;case ls:i.depthFunc(i.GEQUAL);break;case cs:i.depthFunc(i.GREATER);break;case hs:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}X=rt}},setLocked:function(rt){C=rt},setClear:function(rt){ot!==rt&&(nt&&(rt=1-rt),i.clearDepth(rt),ot=rt)},reset:function(){C=!1,G=null,X=null,ot=null,nt=!1}}}function V(){let C=!1,nt=null,G=null,X=null,ot=null,rt=null,Ct=null,ne=null,de=null;return{setTest:function(Yt){C||(Yt?Vt(i.STENCIL_TEST):St(i.STENCIL_TEST))},setMask:function(Yt){nt!==Yt&&!C&&(i.stencilMask(Yt),nt=Yt)},setFunc:function(Yt,Ie,Ke){(G!==Yt||X!==Ie||ot!==Ke)&&(i.stencilFunc(Yt,Ie,Ke),G=Yt,X=Ie,ot=Ke)},setOp:function(Yt,Ie,Ke){(rt!==Yt||Ct!==Ie||ne!==Ke)&&(i.stencilOp(Yt,Ie,Ke),rt=Yt,Ct=Ie,ne=Ke)},setLocked:function(Yt){C=Yt},setClear:function(Yt){de!==Yt&&(i.clearStencil(Yt),de=Yt)},reset:function(){C=!1,nt=null,G=null,X=null,ot=null,rt=null,Ct=null,ne=null,de=null}}}const s=new e,r=new n,a=new V,o=new WeakMap,l=new WeakMap;let c={},h={},q=new WeakMap,f=[],p=null,m=!1,d=null,u=null,E=null,S=null,_=null,I=null,y=null,T=new Nt(0,0,0),b=0,M=!1,v=null,w=null,O=null,N=null,k=null;const K=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let H=!1,$=0;const z=i.getParameter(i.VERSION);z.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(z)[1]),H=$>=1):z.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(z)[1]),H=$>=2);let it=null,lt={};const gt=i.getParameter(i.SCISSOR_BOX),Dt=i.getParameter(i.VIEWPORT),Xt=new se().fromArray(gt),Y=new se().fromArray(Dt);function tt(C,nt,G,X){const ot=new Uint8Array(4),rt=i.createTexture();i.bindTexture(C,rt),i.texParameteri(C,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(C,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ct=0;Ct<G;Ct++)C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY?i.texImage3D(nt,0,i.RGBA,1,1,X,0,i.RGBA,i.UNSIGNED_BYTE,ot):i.texImage2D(nt+Ct,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ot);return rt}const pt={};pt[i.TEXTURE_2D]=tt(i.TEXTURE_2D,i.TEXTURE_2D,1),pt[i.TEXTURE_CUBE_MAP]=tt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),pt[i.TEXTURE_2D_ARRAY]=tt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),pt[i.TEXTURE_3D]=tt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),r.setClear(1),a.setClear(0),Vt(i.DEPTH_TEST),r.setFunc(oi),Lt(!1),Bt(ur),Vt(i.CULL_FACE),D(vn);function Vt(C){c[C]!==!0&&(i.enable(C),c[C]=!0)}function St(C){c[C]!==!1&&(i.disable(C),c[C]=!1)}function wt(C,nt){return h[C]!==nt?(i.bindFramebuffer(C,nt),h[C]=nt,C===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=nt),C===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=nt),!0):!1}function It(C,nt){let G=f,X=!1;if(C){G=q.get(nt),G===void 0&&(G=[],q.set(nt,G));const ot=C.textures;if(G.length!==ot.length||G[0]!==i.COLOR_ATTACHMENT0){for(let rt=0,Ct=ot.length;rt<Ct;rt++)G[rt]=i.COLOR_ATTACHMENT0+rt;G.length=ot.length,X=!0}}else G[0]!==i.BACK&&(G[0]=i.BACK,X=!0);X&&i.drawBuffers(G)}function ee(C){return p!==C?(i.useProgram(C),p=C,!0):!1}const Ot={[Dn]:i.FUNC_ADD,[ao]:i.FUNC_SUBTRACT,[oo]:i.FUNC_REVERSE_SUBTRACT};Ot[lo]=i.MIN,Ot[co]=i.MAX;const ae={[ho]:i.ZERO,[uo]:i.ONE,[qo]:i.SRC_COLOR,[is]:i.SRC_ALPHA,[vo]:i.SRC_ALPHA_SATURATE,[mo]:i.DST_COLOR,[po]:i.DST_ALPHA,[fo]:i.ONE_MINUS_SRC_COLOR,[Vs]:i.ONE_MINUS_SRC_ALPHA,[go]:i.ONE_MINUS_DST_COLOR,[Ao]:i.ONE_MINUS_DST_ALPHA,[_o]:i.CONSTANT_COLOR,[Mo]:i.ONE_MINUS_CONSTANT_COLOR,[xo]:i.CONSTANT_ALPHA,[So]:i.ONE_MINUS_CONSTANT_ALPHA};function D(C,nt,G,X,ot,rt,Ct,ne,de,Yt){if(C===vn){m===!0&&(St(i.BLEND),m=!1);return}if(m===!1&&(Vt(i.BLEND),m=!0),C!==ro){if(C!==d||Yt!==M){if((u!==Dn||_!==Dn)&&(i.blendEquation(i.FUNC_ADD),u=Dn,_=Dn),Yt)switch(C){case si:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ui:i.blendFunc(i.ONE,i.ONE);break;case qr:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case fr:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",C);break}else switch(C){case si:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ui:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case qr:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case fr:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",C);break}E=null,S=null,I=null,y=null,T.set(0,0,0),b=0,d=C,M=Yt}return}ot=ot||nt,rt=rt||G,Ct=Ct||X,(nt!==u||ot!==_)&&(i.blendEquationSeparate(Ot[nt],Ot[ot]),u=nt,_=ot),(G!==E||X!==S||rt!==I||Ct!==y)&&(i.blendFuncSeparate(ae[G],ae[X],ae[rt],ae[Ct]),E=G,S=X,I=rt,y=Ct),(ne.equals(T)===!1||de!==b)&&(i.blendColor(ne.r,ne.g,ne.b,de),T.copy(ne),b=de),d=C,M=!1}function Ce(C,nt){C.side===oe?St(i.CULL_FACE):Vt(i.CULL_FACE);let G=C.side===_e;nt&&(G=!G),Lt(G),C.blending===si&&C.transparent===!1?D(vn):D(C.blending,C.blendEquation,C.blendSrc,C.blendDst,C.blendEquationAlpha,C.blendSrcAlpha,C.blendDstAlpha,C.blendColor,C.blendAlpha,C.premultipliedAlpha),r.setFunc(C.depthFunc),r.setTest(C.depthTest),r.setMask(C.depthWrite),s.setMask(C.colorWrite);const X=C.stencilWrite;a.setTest(X),X&&(a.setMask(C.stencilWriteMask),a.setFunc(C.stencilFunc,C.stencilRef,C.stencilFuncMask),a.setOp(C.stencilFail,C.stencilZFail,C.stencilZPass)),jt(C.polygonOffset,C.polygonOffsetFactor,C.polygonOffsetUnits),C.alphaToCoverage===!0?Vt(i.SAMPLE_ALPHA_TO_COVERAGE):St(i.SAMPLE_ALPHA_TO_COVERAGE)}function Lt(C){v!==C&&(C?i.frontFace(i.CW):i.frontFace(i.CCW),v=C)}function Bt(C){C!==Vo?(Vt(i.CULL_FACE),C!==w&&(C===ur?i.cullFace(i.BACK):C===so?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):St(i.CULL_FACE),w=C}function Mt(C){C!==O&&(H&&i.lineWidth(C),O=C)}function jt(C,nt,G){C?(Vt(i.POLYGON_OFFSET_FILL),(N!==nt||k!==G)&&(i.polygonOffset(nt,G),N=nt,k=G)):St(i.POLYGON_OFFSET_FILL)}function vt(C){C?Vt(i.SCISSOR_TEST):St(i.SCISSOR_TEST)}function x(C){C===void 0&&(C=i.TEXTURE0+K-1),it!==C&&(i.activeTexture(C),it=C)}function A(C,nt,G){G===void 0&&(it===null?G=i.TEXTURE0+K-1:G=it);let X=lt[G];X===void 0&&(X={type:void 0,texture:void 0},lt[G]=X),(X.type!==C||X.texture!==nt)&&(it!==G&&(i.activeTexture(G),it=G),i.bindTexture(C,nt||pt[C]),X.type=C,X.texture=nt)}function L(){const C=lt[it];C!==void 0&&C.type!==void 0&&(i.bindTexture(C.type,null),C.type=void 0,C.texture=void 0)}function Q(){try{i.compressedTexImage2D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function J(){try{i.compressedTexImage3D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function W(){try{i.texSubImage2D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function At(){try{i.texSubImage3D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function st(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function ct(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Gt(){try{i.texStorage2D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function j(){try{i.texStorage3D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function ht(){try{i.texImage2D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function xt(){try{i.texImage3D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Et(C){Xt.equals(C)===!1&&(i.scissor(C.x,C.y,C.z,C.w),Xt.copy(C))}function ut(C){Y.equals(C)===!1&&(i.viewport(C.x,C.y,C.z,C.w),Y.copy(C))}function Ft(C,nt){let G=l.get(nt);G===void 0&&(G=new WeakMap,l.set(nt,G));let X=G.get(C);X===void 0&&(X=i.getUniformBlockIndex(nt,C.name),G.set(C,X))}function Ut(C,nt){const X=l.get(nt).get(C);o.get(nt)!==X&&(i.uniformBlockBinding(nt,X,C.__bindingPointIndex),o.set(nt,X))}function Kt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),r.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),c={},it=null,lt={},h={},q=new WeakMap,f=[],p=null,m=!1,d=null,u=null,E=null,S=null,_=null,I=null,y=null,T=new Nt(0,0,0),b=0,M=!1,v=null,w=null,O=null,N=null,k=null,Xt.set(0,0,i.canvas.width,i.canvas.height),Y.set(0,0,i.canvas.width,i.canvas.height),s.reset(),r.reset(),a.reset()}return{buffers:{color:s,depth:r,stencil:a},enable:Vt,disable:St,bindFramebuffer:wt,drawBuffers:It,useProgram:ee,setBlending:D,setMaterial:Ce,setFlipSided:Lt,setCullFace:Bt,setLineWidth:Mt,setPolygonOffset:jt,setScissorTest:vt,activeTexture:x,bindTexture:A,unbindTexture:L,compressedTexImage2D:Q,compressedTexImage3D:J,texImage2D:ht,texImage3D:xt,updateUBOMapping:Ft,uniformBlockBinding:Ut,texStorage2D:Gt,texStorage3D:j,texSubImage2D:W,texSubImage3D:At,compressedTexSubImage2D:st,compressedTexSubImage3D:ct,scissor:Et,viewport:ut,reset:Kt}}function la(i,t,e,n){const V=of(n);switch(e){case Sa:return i*t;case ya:return i*t;case Ta:return i*t*2;case wa:return i*t/V.components*V.byteLength;case Xs:return i*t/V.components*V.byteLength;case Ca:return i*t*2/V.components*V.byteLength;case Ks:return i*t*2/V.components*V.byteLength;case Ea:return i*t*3/V.components*V.byteLength;case Ge:return i*t*4/V.components*V.byteLength;case Js:return i*t*4/V.components*V.byteLength;case hV:case uV:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case qV:case fV:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ps:case ms:return Math.max(i,16)*Math.max(t,8)/4;case ds:case As:return Math.max(i,8)*Math.max(t,8)/2;case gs:case vs:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case _s:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ms:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case xs:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Ss:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Es:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case ys:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Ts:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case ws:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Cs:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Rs:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case bs:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Us:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Ps:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Ds:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Is:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case dV:case Ls:case Bs:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Ra:case Fs:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Ns:case Os:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function of(i){switch(i){case an:case _a:return{byteLength:1,components:1};case Di:case Ma:case Li:return{byteLength:2,components:1};case Ys:case Qs:return{byteLength:2,components:4};case Fn:case Ws:case Vn:return{byteLength:4,components:1};case xa:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function lf(i,t,e,n,V,s,r){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,o=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new _t,c=new WeakMap;let h;const q=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function p(x,A){return f?new OffscreenCanvas(x,A):mV("canvas")}function m(x,A,L){let Q=1;const J=vt(x);if((J.width>L||J.height>L)&&(Q=L/Math.max(J.width,J.height)),Q<1)if(typeof HTMLImageElement<"u"&&x instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&x instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&x instanceof ImageBitmap||typeof VideoFrame<"u"&&x instanceof VideoFrame){const W=Math.floor(Q*J.width),At=Math.floor(Q*J.height);h===void 0&&(h=p(W,At));const st=A?p(W,At):h;return st.width=W,st.height=At,st.getContext("2d").drawImage(x,0,0,W,At),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+W+"x"+At+")."),st}else return"data"in x&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),x;return x}function d(x){return x.generateMipmaps}function u(x){i.generateMipmap(x)}function E(x){return x.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:x.isWebGL3DRenderTarget?i.TEXTURE_3D:x.isWebGLArrayRenderTarget||x.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function S(x,A,L,Q,J=!1){if(x!==null){if(i[x]!==void 0)return i[x];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+x+"'")}let W=A;if(A===i.RED&&(L===i.FLOAT&&(W=i.R32F),L===i.HALF_FLOAT&&(W=i.R16F),L===i.UNSIGNED_BYTE&&(W=i.R8)),A===i.RED_INTEGER&&(L===i.UNSIGNED_BYTE&&(W=i.R8UI),L===i.UNSIGNED_SHORT&&(W=i.R16UI),L===i.UNSIGNED_INT&&(W=i.R32UI),L===i.BYTE&&(W=i.R8I),L===i.SHORT&&(W=i.R16I),L===i.INT&&(W=i.R32I)),A===i.RG&&(L===i.FLOAT&&(W=i.RG32F),L===i.HALF_FLOAT&&(W=i.RG16F),L===i.UNSIGNED_BYTE&&(W=i.RG8)),A===i.RG_INTEGER&&(L===i.UNSIGNED_BYTE&&(W=i.RG8UI),L===i.UNSIGNED_SHORT&&(W=i.RG16UI),L===i.UNSIGNED_INT&&(W=i.RG32UI),L===i.BYTE&&(W=i.RG8I),L===i.SHORT&&(W=i.RG16I),L===i.INT&&(W=i.RG32I)),A===i.RGB_INTEGER&&(L===i.UNSIGNED_BYTE&&(W=i.RGB8UI),L===i.UNSIGNED_SHORT&&(W=i.RGB16UI),L===i.UNSIGNED_INT&&(W=i.RGB32UI),L===i.BYTE&&(W=i.RGB8I),L===i.SHORT&&(W=i.RGB16I),L===i.INT&&(W=i.RGB32I)),A===i.RGBA_INTEGER&&(L===i.UNSIGNED_BYTE&&(W=i.RGBA8UI),L===i.UNSIGNED_SHORT&&(W=i.RGBA16UI),L===i.UNSIGNED_INT&&(W=i.RGBA32UI),L===i.BYTE&&(W=i.RGBA8I),L===i.SHORT&&(W=i.RGBA16I),L===i.INT&&(W=i.RGBA32I)),A===i.RGB&&L===i.UNSIGNED_INT_5_9_9_9_REV&&(W=i.RGB9_E5),A===i.RGBA){const At=J?vV:zt.getTransfer(Q);L===i.FLOAT&&(W=i.RGBA32F),L===i.HALF_FLOAT&&(W=i.RGBA16F),L===i.UNSIGNED_BYTE&&(W=At===Qt?i.SRGB8_ALPHA8:i.RGBA8),L===i.UNSIGNED_SHORT_4_4_4_4&&(W=i.RGBA4),L===i.UNSIGNED_SHORT_5_5_5_1&&(W=i.RGB5_A1)}return(W===i.R16F||W===i.R32F||W===i.RG16F||W===i.RG32F||W===i.RGBA16F||W===i.RGBA32F)&&t.get("EXT_color_buffer_float"),W}function _(x,A){let L;return x?A===null||A===Fn||A===hi?L=i.DEPTH24_STENCIL8:A===Vn?L=i.DEPTH32F_STENCIL8:A===Di&&(L=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):A===null||A===Fn||A===hi?L=i.DEPTH_COMPONENT24:A===Vn?L=i.DEPTH_COMPONENT32F:A===Di&&(L=i.DEPTH_COMPONENT16),L}function I(x,A){return d(x)===!0||x.isFramebufferTexture&&x.minFilter!==ke&&x.minFilter!==Ee?Math.log2(Math.max(A.width,A.height))+1:x.mipmaps!==void 0&&x.mipmaps.length>0?x.mipmaps.length:x.isCompressedTexture&&Array.isArray(x.image)?A.mipmaps.length:1}function y(x){const A=x.target;A.removeEventListener("dispose",y),b(A),A.isVideoTexture&&c.delete(A)}function T(x){const A=x.target;A.removeEventListener("dispose",T),v(A)}function b(x){const A=n.get(x);if(A.__webglInit===void 0)return;const L=x.source,Q=q.get(L);if(Q){const J=Q[A.__cacheKey];J.usedTimes--,J.usedTimes===0&&M(x),Object.keys(Q).length===0&&q.delete(L)}n.remove(x)}function M(x){const A=n.get(x);i.deleteTexture(A.__webglTexture);const L=x.source,Q=q.get(L);delete Q[A.__cacheKey],r.memory.textures--}function v(x){const A=n.get(x);if(x.depthTexture&&(x.depthTexture.dispose(),n.remove(x.depthTexture)),x.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(A.__webglFramebuffer[Q]))for(let J=0;J<A.__webglFramebuffer[Q].length;J++)i.deleteFramebuffer(A.__webglFramebuffer[Q][J]);else i.deleteFramebuffer(A.__webglFramebuffer[Q]);A.__webglDepthbuffer&&i.deleteRenderbuffer(A.__webglDepthbuffer[Q])}else{if(Array.isArray(A.__webglFramebuffer))for(let Q=0;Q<A.__webglFramebuffer.length;Q++)i.deleteFramebuffer(A.__webglFramebuffer[Q]);else i.deleteFramebuffer(A.__webglFramebuffer);if(A.__webglDepthbuffer&&i.deleteRenderbuffer(A.__webglDepthbuffer),A.__webglMultisampledFramebuffer&&i.deleteFramebuffer(A.__webglMultisampledFramebuffer),A.__webglColorRenderbuffer)for(let Q=0;Q<A.__webglColorRenderbuffer.length;Q++)A.__webglColorRenderbuffer[Q]&&i.deleteRenderbuffer(A.__webglColorRenderbuffer[Q]);A.__webglDepthRenderbuffer&&i.deleteRenderbuffer(A.__webglDepthRenderbuffer)}const L=x.textures;for(let Q=0,J=L.length;Q<J;Q++){const W=n.get(L[Q]);W.__webglTexture&&(i.deleteTexture(W.__webglTexture),r.memory.textures--),n.remove(L[Q])}n.remove(x)}let w=0;function O(){w=0}function N(){const x=w;return x>=V.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+x+" texture units while this GPU supports only "+V.maxTextures),w+=1,x}function k(x){const A=[];return A.push(x.wrapS),A.push(x.wrapT),A.push(x.wrapR||0),A.push(x.magFilter),A.push(x.minFilter),A.push(x.anisotropy),A.push(x.internalFormat),A.push(x.format),A.push(x.type),A.push(x.generateMipmaps),A.push(x.premultiplyAlpha),A.push(x.flipY),A.push(x.unpackAlignment),A.push(x.colorSpace),A.join()}function K(x,A){const L=n.get(x);if(x.isVideoTexture&&Mt(x),x.isRenderTargetTexture===!1&&x.version>0&&L.__version!==x.version){const Q=x.image;if(Q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Y(L,x,A);return}}e.bindTexture(i.TEXTURE_2D,L.__webglTexture,i.TEXTURE0+A)}function H(x,A){const L=n.get(x);if(x.version>0&&L.__version!==x.version){Y(L,x,A);return}e.bindTexture(i.TEXTURE_2D_ARRAY,L.__webglTexture,i.TEXTURE0+A)}function $(x,A){const L=n.get(x);if(x.version>0&&L.__version!==x.version){Y(L,x,A);return}e.bindTexture(i.TEXTURE_3D,L.__webglTexture,i.TEXTURE0+A)}function z(x,A){const L=n.get(x);if(x.version>0&&L.__version!==x.version){tt(L,x,A);return}e.bindTexture(i.TEXTURE_CUBE_MAP,L.__webglTexture,i.TEXTURE0+A)}const it={[Pi]:i.REPEAT,[Ln]:i.CLAMP_TO_EDGE,[fs]:i.MIRRORED_REPEAT},lt={[ke]:i.NEAREST,[Do]:i.NEAREST_MIPMAP_NEAREST,[Gi]:i.NEAREST_MIPMAP_LINEAR,[Ee]:i.LINEAR,[EV]:i.LINEAR_MIPMAP_NEAREST,[Bn]:i.LINEAR_MIPMAP_LINEAR},gt={[Fo]:i.NEVER,[Ho]:i.ALWAYS,[No]:i.LESS,[Ua]:i.LEQUAL,[Oo]:i.EQUAL,[ko]:i.GEQUAL,[Go]:i.GREATER,[zo]:i.NOTEQUAL};function Dt(x,A){if(A.type===Vn&&t.has("OES_texture_float_linear")===!1&&(A.magFilter===Ee||A.magFilter===EV||A.magFilter===Gi||A.magFilter===Bn||A.minFilter===Ee||A.minFilter===EV||A.minFilter===Gi||A.minFilter===Bn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(x,i.TEXTURE_WRAP_S,it[A.wrapS]),i.texParameteri(x,i.TEXTURE_WRAP_T,it[A.wrapT]),(x===i.TEXTURE_3D||x===i.TEXTURE_2D_ARRAY)&&i.texParameteri(x,i.TEXTURE_WRAP_R,it[A.wrapR]),i.texParameteri(x,i.TEXTURE_MAG_FILTER,lt[A.magFilter]),i.texParameteri(x,i.TEXTURE_MIN_FILTER,lt[A.minFilter]),A.compareFunction&&(i.texParameteri(x,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(x,i.TEXTURE_COMPARE_FUNC,gt[A.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(A.magFilter===ke||A.minFilter!==Gi&&A.minFilter!==Bn||A.type===Vn&&t.has("OES_texture_float_linear")===!1)return;if(A.anisotropy>1||n.get(A).__currentAnisotropy){const L=t.get("EXT_texture_filter_anisotropic");i.texParameterf(x,L.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,V.getMaxAnisotropy())),n.get(A).__currentAnisotropy=A.anisotropy}}}function Xt(x,A){let L=!1;x.__webglInit===void 0&&(x.__webglInit=!0,A.addEventListener("dispose",y));const Q=A.source;let J=q.get(Q);J===void 0&&(J={},q.set(Q,J));const W=k(A);if(W!==x.__cacheKey){J[W]===void 0&&(J[W]={texture:i.createTexture(),usedTimes:0},r.memory.textures++,L=!0),J[W].usedTimes++;const At=J[x.__cacheKey];At!==void 0&&(J[x.__cacheKey].usedTimes--,At.usedTimes===0&&M(A)),x.__cacheKey=W,x.__webglTexture=J[W].texture}return L}function Y(x,A,L){let Q=i.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(Q=i.TEXTURE_2D_ARRAY),A.isData3DTexture&&(Q=i.TEXTURE_3D);const J=Xt(x,A),W=A.source;e.bindTexture(Q,x.__webglTexture,i.TEXTURE0+L);const At=n.get(W);if(W.version!==At.__version||J===!0){e.activeTexture(i.TEXTURE0+L);const st=zt.getPrimaries(zt.workingColorSpace),ct=A.colorSpace===mn?null:zt.getPrimaries(A.colorSpace),Gt=A.colorSpace===mn||st===ct?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,A.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,A.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Gt);let j=m(A.image,!1,V.maxTextureSize);j=jt(A,j);const ht=s.convert(A.format,A.colorSpace),xt=s.convert(A.type);let Et=S(A.internalFormat,ht,xt,A.colorSpace,A.isVideoTexture);Dt(Q,A);let ut;const Ft=A.mipmaps,Ut=A.isVideoTexture!==!0,Kt=At.__version===void 0||J===!0,C=W.dataReady,nt=I(A,j);if(A.isDepthTexture)Et=_(A.format===ui,A.type),Kt&&(Ut?e.texStorage2D(i.TEXTURE_2D,1,Et,j.width,j.height):e.texImage2D(i.TEXTURE_2D,0,Et,j.width,j.height,0,ht,xt,null));else if(A.isDataTexture)if(Ft.length>0){Ut&&Kt&&e.texStorage2D(i.TEXTURE_2D,nt,Et,Ft[0].width,Ft[0].height);for(let G=0,X=Ft.length;G<X;G++)ut=Ft[G],Ut?C&&e.texSubImage2D(i.TEXTURE_2D,G,0,0,ut.width,ut.height,ht,xt,ut.data):e.texImage2D(i.TEXTURE_2D,G,Et,ut.width,ut.height,0,ht,xt,ut.data);A.generateMipmaps=!1}else Ut?(Kt&&e.texStorage2D(i.TEXTURE_2D,nt,Et,j.width,j.height),C&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,j.width,j.height,ht,xt,j.data)):e.texImage2D(i.TEXTURE_2D,0,Et,j.width,j.height,0,ht,xt,j.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){Ut&&Kt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,nt,Et,Ft[0].width,Ft[0].height,j.depth);for(let G=0,X=Ft.length;G<X;G++)if(ut=Ft[G],A.format!==Ge)if(ht!==null)if(Ut){if(C)if(A.layerUpdates.size>0){const ot=la(ut.width,ut.height,A.format,A.type);for(const rt of A.layerUpdates){const Ct=ut.data.subarray(rt*ot/ut.data.BYTES_PER_ELEMENT,(rt+1)*ot/ut.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,G,0,0,rt,ut.width,ut.height,1,ht,Ct)}A.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,G,0,0,0,ut.width,ut.height,j.depth,ht,ut.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,G,Et,ut.width,ut.height,j.depth,0,ut.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ut?C&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,G,0,0,0,ut.width,ut.height,j.depth,ht,xt,ut.data):e.texImage3D(i.TEXTURE_2D_ARRAY,G,Et,ut.width,ut.height,j.depth,0,ht,xt,ut.data)}else{Ut&&Kt&&e.texStorage2D(i.TEXTURE_2D,nt,Et,Ft[0].width,Ft[0].height);for(let G=0,X=Ft.length;G<X;G++)ut=Ft[G],A.format!==Ge?ht!==null?Ut?C&&e.compressedTexSubImage2D(i.TEXTURE_2D,G,0,0,ut.width,ut.height,ht,ut.data):e.compressedTexImage2D(i.TEXTURE_2D,G,Et,ut.width,ut.height,0,ut.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ut?C&&e.texSubImage2D(i.TEXTURE_2D,G,0,0,ut.width,ut.height,ht,xt,ut.data):e.texImage2D(i.TEXTURE_2D,G,Et,ut.width,ut.height,0,ht,xt,ut.data)}else if(A.isDataArrayTexture)if(Ut){if(Kt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,nt,Et,j.width,j.height,j.depth),C)if(A.layerUpdates.size>0){const G=la(j.width,j.height,A.format,A.type);for(const X of A.layerUpdates){const ot=j.data.subarray(X*G/j.data.BYTES_PER_ELEMENT,(X+1)*G/j.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,X,j.width,j.height,1,ht,xt,ot)}A.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,j.width,j.height,j.depth,ht,xt,j.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Et,j.width,j.height,j.depth,0,ht,xt,j.data);else if(A.isData3DTexture)Ut?(Kt&&e.texStorage3D(i.TEXTURE_3D,nt,Et,j.width,j.height,j.depth),C&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,j.width,j.height,j.depth,ht,xt,j.data)):e.texImage3D(i.TEXTURE_3D,0,Et,j.width,j.height,j.depth,0,ht,xt,j.data);else if(A.isFramebufferTexture){if(Kt)if(Ut)e.texStorage2D(i.TEXTURE_2D,nt,Et,j.width,j.height);else{let G=j.width,X=j.height;for(let ot=0;ot<nt;ot++)e.texImage2D(i.TEXTURE_2D,ot,Et,G,X,0,ht,xt,null),G>>=1,X>>=1}}else if(Ft.length>0){if(Ut&&Kt){const G=vt(Ft[0]);e.texStorage2D(i.TEXTURE_2D,nt,Et,G.width,G.height)}for(let G=0,X=Ft.length;G<X;G++)ut=Ft[G],Ut?C&&e.texSubImage2D(i.TEXTURE_2D,G,0,0,ht,xt,ut):e.texImage2D(i.TEXTURE_2D,G,Et,ht,xt,ut);A.generateMipmaps=!1}else if(Ut){if(Kt){const G=vt(j);e.texStorage2D(i.TEXTURE_2D,nt,Et,G.width,G.height)}C&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,ht,xt,j)}else e.texImage2D(i.TEXTURE_2D,0,Et,ht,xt,j);d(A)&&u(Q),At.__version=W.version,A.onUpdate&&A.onUpdate(A)}x.__version=A.version}function tt(x,A,L){if(A.image.length!==6)return;const Q=Xt(x,A),J=A.source;e.bindTexture(i.TEXTURE_CUBE_MAP,x.__webglTexture,i.TEXTURE0+L);const W=n.get(J);if(J.version!==W.__version||Q===!0){e.activeTexture(i.TEXTURE0+L);const At=zt.getPrimaries(zt.workingColorSpace),st=A.colorSpace===mn?null:zt.getPrimaries(A.colorSpace),ct=A.colorSpace===mn||At===st?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,A.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,A.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ct);const Gt=A.isCompressedTexture||A.image[0].isCompressedTexture,j=A.image[0]&&A.image[0].isDataTexture,ht=[];for(let X=0;X<6;X++)!Gt&&!j?ht[X]=m(A.image[X],!0,V.maxCubemapSize):ht[X]=j?A.image[X].image:A.image[X],ht[X]=jt(A,ht[X]);const xt=ht[0],Et=s.convert(A.format,A.colorSpace),ut=s.convert(A.type),Ft=S(A.internalFormat,Et,ut,A.colorSpace),Ut=A.isVideoTexture!==!0,Kt=W.__version===void 0||Q===!0,C=J.dataReady;let nt=I(A,xt);Dt(i.TEXTURE_CUBE_MAP,A);let G;if(Gt){Ut&&Kt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,nt,Ft,xt.width,xt.height);for(let X=0;X<6;X++){G=ht[X].mipmaps;for(let ot=0;ot<G.length;ot++){const rt=G[ot];A.format!==Ge?Et!==null?Ut?C&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+X,ot,0,0,rt.width,rt.height,Et,rt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+X,ot,Ft,rt.width,rt.height,0,rt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ut?C&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+X,ot,0,0,rt.width,rt.height,Et,ut,rt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+X,ot,Ft,rt.width,rt.height,0,Et,ut,rt.data)}}}else{if(G=A.mipmaps,Ut&&Kt){G.length>0&&nt++;const X=vt(ht[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,nt,Ft,X.width,X.height)}for(let X=0;X<6;X++)if(j){Ut?C&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,0,0,ht[X].width,ht[X].height,Et,ut,ht[X].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,Ft,ht[X].width,ht[X].height,0,Et,ut,ht[X].data);for(let ot=0;ot<G.length;ot++){const Ct=G[ot].image[X].image;Ut?C&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+X,ot+1,0,0,Ct.width,Ct.height,Et,ut,Ct.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+X,ot+1,Ft,Ct.width,Ct.height,0,Et,ut,Ct.data)}}else{Ut?C&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,0,0,Et,ut,ht[X]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,Ft,Et,ut,ht[X]);for(let ot=0;ot<G.length;ot++){const rt=G[ot];Ut?C&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+X,ot+1,0,0,Et,ut,rt.image[X]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+X,ot+1,Ft,Et,ut,rt.image[X])}}}d(A)&&u(i.TEXTURE_CUBE_MAP),W.__version=J.version,A.onUpdate&&A.onUpdate(A)}x.__version=A.version}function pt(x,A,L,Q,J,W){const At=s.convert(L.format,L.colorSpace),st=s.convert(L.type),ct=S(L.internalFormat,At,st,L.colorSpace),Gt=n.get(A),j=n.get(L);if(j.__renderTarget=A,!Gt.__hasExternalTextures){const ht=Math.max(1,A.width>>W),xt=Math.max(1,A.height>>W);J===i.TEXTURE_3D||J===i.TEXTURE_2D_ARRAY?e.texImage3D(J,W,ct,ht,xt,A.depth,0,At,st,null):e.texImage2D(J,W,ct,ht,xt,0,At,st,null)}e.bindFramebuffer(i.FRAMEBUFFER,x),Bt(A)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Q,J,j.__webglTexture,0,Lt(A)):(J===i.TEXTURE_2D||J>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Q,J,j.__webglTexture,W),e.bindFramebuffer(i.FRAMEBUFFER,null)}function Vt(x,A,L){if(i.bindRenderbuffer(i.RENDERBUFFER,x),A.depthBuffer){const Q=A.depthTexture,J=Q&&Q.isDepthTexture?Q.type:null,W=_(A.stencilBuffer,J),At=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,st=Lt(A);Bt(A)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,st,W,A.width,A.height):L?i.renderbufferStorageMultisample(i.RENDERBUFFER,st,W,A.width,A.height):i.renderbufferStorage(i.RENDERBUFFER,W,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,At,i.RENDERBUFFER,x)}else{const Q=A.textures;for(let J=0;J<Q.length;J++){const W=Q[J],At=s.convert(W.format,W.colorSpace),st=s.convert(W.type),ct=S(W.internalFormat,At,st,W.colorSpace),Gt=Lt(A);L&&Bt(A)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Gt,ct,A.width,A.height):Bt(A)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Gt,ct,A.width,A.height):i.renderbufferStorage(i.RENDERBUFFER,ct,A.width,A.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function St(x,A){if(A&&A.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,x),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Q=n.get(A.depthTexture);Q.__renderTarget=A,(!Q.__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),K(A.depthTexture,0);const J=Q.__webglTexture,W=Lt(A);if(A.depthTexture.format===ri)Bt(A)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,J,0,W):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,J,0);else if(A.depthTexture.format===ui)Bt(A)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,J,0,W):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,J,0);else throw new Error("Unknown depthTexture format")}function wt(x){const A=n.get(x),L=x.isWebGLCubeRenderTarget===!0;if(A.__boundDepthTexture!==x.depthTexture){const Q=x.depthTexture;if(A.__depthDisposeCallback&&A.__depthDisposeCallback(),Q){const J=()=>{delete A.__boundDepthTexture,delete A.__depthDisposeCallback,Q.removeEventListener("dispose",J)};Q.addEventListener("dispose",J),A.__depthDisposeCallback=J}A.__boundDepthTexture=Q}if(x.depthTexture&&!A.__autoAllocateDepthBuffer){if(L)throw new Error("target.depthTexture not supported in Cube render targets");St(A.__webglFramebuffer,x)}else if(L){A.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)if(e.bindFramebuffer(i.FRAMEBUFFER,A.__webglFramebuffer[Q]),A.__webglDepthbuffer[Q]===void 0)A.__webglDepthbuffer[Q]=i.createRenderbuffer(),Vt(A.__webglDepthbuffer[Q],x,!1);else{const J=x.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,W=A.__webglDepthbuffer[Q];i.bindRenderbuffer(i.RENDERBUFFER,W),i.framebufferRenderbuffer(i.FRAMEBUFFER,J,i.RENDERBUFFER,W)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer===void 0)A.__webglDepthbuffer=i.createRenderbuffer(),Vt(A.__webglDepthbuffer,x,!1);else{const Q=x.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,J=A.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,J),i.framebufferRenderbuffer(i.FRAMEBUFFER,Q,i.RENDERBUFFER,J)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function It(x,A,L){const Q=n.get(x);A!==void 0&&pt(Q.__webglFramebuffer,x,x.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),L!==void 0&&wt(x)}function ee(x){const A=x.texture,L=n.get(x),Q=n.get(A);x.addEventListener("dispose",T);const J=x.textures,W=x.isWebGLCubeRenderTarget===!0,At=J.length>1;if(At||(Q.__webglTexture===void 0&&(Q.__webglTexture=i.createTexture()),Q.__version=A.version,r.memory.textures++),W){L.__webglFramebuffer=[];for(let st=0;st<6;st++)if(A.mipmaps&&A.mipmaps.length>0){L.__webglFramebuffer[st]=[];for(let ct=0;ct<A.mipmaps.length;ct++)L.__webglFramebuffer[st][ct]=i.createFramebuffer()}else L.__webglFramebuffer[st]=i.createFramebuffer()}else{if(A.mipmaps&&A.mipmaps.length>0){L.__webglFramebuffer=[];for(let st=0;st<A.mipmaps.length;st++)L.__webglFramebuffer[st]=i.createFramebuffer()}else L.__webglFramebuffer=i.createFramebuffer();if(At)for(let st=0,ct=J.length;st<ct;st++){const Gt=n.get(J[st]);Gt.__webglTexture===void 0&&(Gt.__webglTexture=i.createTexture(),r.memory.textures++)}if(x.samples>0&&Bt(x)===!1){L.__webglMultisampledFramebuffer=i.createFramebuffer(),L.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,L.__webglMultisampledFramebuffer);for(let st=0;st<J.length;st++){const ct=J[st];L.__webglColorRenderbuffer[st]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,L.__webglColorRenderbuffer[st]);const Gt=s.convert(ct.format,ct.colorSpace),j=s.convert(ct.type),ht=S(ct.internalFormat,Gt,j,ct.colorSpace,x.isXRRenderTarget===!0),xt=Lt(x);i.renderbufferStorageMultisample(i.RENDERBUFFER,xt,ht,x.width,x.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+st,i.RENDERBUFFER,L.__webglColorRenderbuffer[st])}i.bindRenderbuffer(i.RENDERBUFFER,null),x.depthBuffer&&(L.__webglDepthRenderbuffer=i.createRenderbuffer(),Vt(L.__webglDepthRenderbuffer,x,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(W){e.bindTexture(i.TEXTURE_CUBE_MAP,Q.__webglTexture),Dt(i.TEXTURE_CUBE_MAP,A);for(let st=0;st<6;st++)if(A.mipmaps&&A.mipmaps.length>0)for(let ct=0;ct<A.mipmaps.length;ct++)pt(L.__webglFramebuffer[st][ct],x,A,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+st,ct);else pt(L.__webglFramebuffer[st],x,A,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+st,0);d(A)&&u(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(At){for(let st=0,ct=J.length;st<ct;st++){const Gt=J[st],j=n.get(Gt);e.bindTexture(i.TEXTURE_2D,j.__webglTexture),Dt(i.TEXTURE_2D,Gt),pt(L.__webglFramebuffer,x,Gt,i.COLOR_ATTACHMENT0+st,i.TEXTURE_2D,0),d(Gt)&&u(i.TEXTURE_2D)}e.unbindTexture()}else{let st=i.TEXTURE_2D;if((x.isWebGL3DRenderTarget||x.isWebGLArrayRenderTarget)&&(st=x.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(st,Q.__webglTexture),Dt(st,A),A.mipmaps&&A.mipmaps.length>0)for(let ct=0;ct<A.mipmaps.length;ct++)pt(L.__webglFramebuffer[ct],x,A,i.COLOR_ATTACHMENT0,st,ct);else pt(L.__webglFramebuffer,x,A,i.COLOR_ATTACHMENT0,st,0);d(A)&&u(st),e.unbindTexture()}x.depthBuffer&&wt(x)}function Ot(x){const A=x.textures;for(let L=0,Q=A.length;L<Q;L++){const J=A[L];if(d(J)){const W=E(x),At=n.get(J).__webglTexture;e.bindTexture(W,At),u(W),e.unbindTexture()}}}const ae=[],D=[];function Ce(x){if(x.samples>0){if(Bt(x)===!1){const A=x.textures,L=x.width,Q=x.height;let J=i.COLOR_BUFFER_BIT;const W=x.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,At=n.get(x),st=A.length>1;if(st)for(let ct=0;ct<A.length;ct++)e.bindFramebuffer(i.FRAMEBUFFER,At.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ct,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,At.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ct,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,At.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,At.__webglFramebuffer);for(let ct=0;ct<A.length;ct++){if(x.resolveDepthBuffer&&(x.depthBuffer&&(J|=i.DEPTH_BUFFER_BIT),x.stencilBuffer&&x.resolveStencilBuffer&&(J|=i.STENCIL_BUFFER_BIT)),st){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,At.__webglColorRenderbuffer[ct]);const Gt=n.get(A[ct]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Gt,0)}i.blitFramebuffer(0,0,L,Q,0,0,L,Q,J,i.NEAREST),o===!0&&(ae.length=0,D.length=0,ae.push(i.COLOR_ATTACHMENT0+ct),x.depthBuffer&&x.resolveDepthBuffer===!1&&(ae.push(W),D.push(W),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,D)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ae))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),st)for(let ct=0;ct<A.length;ct++){e.bindFramebuffer(i.FRAMEBUFFER,At.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ct,i.RENDERBUFFER,At.__webglColorRenderbuffer[ct]);const Gt=n.get(A[ct]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,At.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ct,i.TEXTURE_2D,Gt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,At.__webglMultisampledFramebuffer)}else if(x.depthBuffer&&x.resolveDepthBuffer===!1&&o){const A=x.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[A])}}}function Lt(x){return Math.min(V.maxSamples,x.samples)}function Bt(x){const A=n.get(x);return x.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function Mt(x){const A=r.render.frame;c.get(x)!==A&&(c.set(x,A),x.update())}function jt(x,A){const L=x.colorSpace,Q=x.format,J=x.type;return x.isCompressedTexture===!0||x.isVideoTexture===!0||L!==di&&L!==mn&&(zt.getTransfer(L)===Qt?(Q!==Ge||J!==an)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",L)),A}function vt(x){return typeof HTMLImageElement<"u"&&x instanceof HTMLImageElement?(l.width=x.naturalWidth||x.width,l.height=x.naturalHeight||x.height):typeof VideoFrame<"u"&&x instanceof VideoFrame?(l.width=x.displayWidth,l.height=x.displayHeight):(l.width=x.width,l.height=x.height),l}this.allocateTextureUnit=N,this.resetTextureUnits=O,this.setTexture2D=K,this.setTexture2DArray=H,this.setTexture3D=$,this.setTextureCube=z,this.rebindTextures=It,this.setupRenderTarget=ee,this.updateRenderTargetMipmap=Ot,this.updateMultisampleRenderTarget=Ce,this.setupDepthRenderbuffer=wt,this.setupFrameBufferTexture=pt,this.useMultisampledRTT=Bt}function cf(i,t){function e(n,V=mn){let s;const r=zt.getTransfer(V);if(n===an)return i.UNSIGNED_BYTE;if(n===Ys)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Qs)return i.UNSIGNED_SHORT_5_5_5_1;if(n===xa)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===_a)return i.BYTE;if(n===Ma)return i.SHORT;if(n===Di)return i.UNSIGNED_SHORT;if(n===Ws)return i.INT;if(n===Fn)return i.UNSIGNED_INT;if(n===Vn)return i.FLOAT;if(n===Li)return i.HALF_FLOAT;if(n===Sa)return i.ALPHA;if(n===Ea)return i.RGB;if(n===Ge)return i.RGBA;if(n===ya)return i.LUMINANCE;if(n===Ta)return i.LUMINANCE_ALPHA;if(n===ri)return i.DEPTH_COMPONENT;if(n===ui)return i.DEPTH_STENCIL;if(n===wa)return i.RED;if(n===Xs)return i.RED_INTEGER;if(n===Ca)return i.RG;if(n===Ks)return i.RG_INTEGER;if(n===Js)return i.RGBA_INTEGER;if(n===hV||n===uV||n===qV||n===fV)if(r===Qt)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===hV)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===uV)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===qV)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===fV)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===hV)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===uV)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===qV)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===fV)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ds||n===ps||n===As||n===ms)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===ds)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===ps)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===As)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===ms)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===gs||n===vs||n===_s)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(n===gs||n===vs)return r===Qt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===_s)return r===Qt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Ms||n===xs||n===Ss||n===Es||n===ys||n===Ts||n===ws||n===Cs||n===Rs||n===bs||n===Us||n===Ps||n===Ds||n===Is)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Ms)return r===Qt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===xs)return r===Qt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ss)return r===Qt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Es)return r===Qt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===ys)return r===Qt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ts)return r===Qt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ws)return r===Qt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Cs)return r===Qt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Rs)return r===Qt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===bs)return r===Qt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Us)return r===Qt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ps)return r===Qt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ds)return r===Qt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Is)return r===Qt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===dV||n===Ls||n===Bs)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(n===dV)return r===Qt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ls)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Bs)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Ra||n===Fs||n===Ns||n===Os)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(n===dV)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Fs)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ns)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Os)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===hi?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}class hf extends Pe{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Ve extends qe{constructor(){super(),this.isGroup=!0,this.type="Group"}}const uf={type:"move"};class ZV{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ve,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ve,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new R,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new R),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ve,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new R,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new R),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let V=null,s=null,r=null;const a=this._targetRay,o=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){r=!0;for(const m of t.hand.values()){const d=e.getJointPose(m,n),u=this._getHandJoint(l,m);d!==null&&(u.matrix.fromArray(d.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=d.radius),u.visible=d!==null}const c=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],q=c.position.distanceTo(h.position),f=.02,p=.005;l.inputState.pinching&&q>f+p?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&q<=f-p&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else o!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1));a!==null&&(V=e.getPose(t.targetRaySpace,n),V===null&&s!==null&&(V=s),V!==null&&(a.matrix.fromArray(V.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,V.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(V.linearVelocity)):a.hasLinearVelocity=!1,V.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(V.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(uf)))}return a!==null&&(a.visible=V!==null),o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Ve;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const qf=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,ff=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class df{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const V=new Me,s=t.properties.get(V);s.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=V}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Sn({vertexShader:qf,fragmentShader:ff,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Tt(new Qe(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class pf extends pi{constructor(t,e){super();const n=this;let V=null,s=1,r=null,a="local-floor",o=1,l=null,c=null,h=null,q=null,f=null,p=null;const m=new df,d=e.getContextAttributes();let u=null,E=null;const S=[],_=[],I=new _t;let y=null;const T=new Pe;T.viewport=new se;const b=new Pe;b.viewport=new se;const M=[T,b],v=new hf;let w=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let tt=S[Y];return tt===void 0&&(tt=new ZV,S[Y]=tt),tt.getTargetRaySpace()},this.getControllerGrip=function(Y){let tt=S[Y];return tt===void 0&&(tt=new ZV,S[Y]=tt),tt.getGripSpace()},this.getHand=function(Y){let tt=S[Y];return tt===void 0&&(tt=new ZV,S[Y]=tt),tt.getHandSpace()};function N(Y){const tt=_.indexOf(Y.inputSource);if(tt===-1)return;const pt=S[tt];pt!==void 0&&(pt.update(Y.inputSource,Y.frame,l||r),pt.dispatchEvent({type:Y.type,data:Y.inputSource}))}function k(){V.removeEventListener("select",N),V.removeEventListener("selectstart",N),V.removeEventListener("selectend",N),V.removeEventListener("squeeze",N),V.removeEventListener("squeezestart",N),V.removeEventListener("squeezeend",N),V.removeEventListener("end",k),V.removeEventListener("inputsourceschange",K);for(let Y=0;Y<S.length;Y++){const tt=_[Y];tt!==null&&(_[Y]=null,S[Y].disconnect(tt))}w=null,O=null,m.reset(),t.setRenderTarget(u),f=null,q=null,h=null,V=null,E=null,Xt.stop(),n.isPresenting=!1,t.setPixelRatio(y),t.setSize(I.width,I.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){s=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){a=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||r},this.setReferenceSpace=function(Y){l=Y},this.getBaseLayer=function(){return q!==null?q:f},this.getBinding=function(){return h},this.getFrame=function(){return p},this.getSession=function(){return V},this.setSession=async function(Y){if(V=Y,V!==null){if(u=t.getRenderTarget(),V.addEventListener("select",N),V.addEventListener("selectstart",N),V.addEventListener("selectend",N),V.addEventListener("squeeze",N),V.addEventListener("squeezestart",N),V.addEventListener("squeezeend",N),V.addEventListener("end",k),V.addEventListener("inputsourceschange",K),d.xrCompatible!==!0&&await e.makeXRCompatible(),y=t.getPixelRatio(),t.getSize(I),V.renderState.layers===void 0){const tt={antialias:d.antialias,alpha:!0,depth:d.depth,stencil:d.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(V,e,tt),V.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),E=new Nn(f.framebufferWidth,f.framebufferHeight,{format:Ge,type:an,colorSpace:t.outputColorSpace,stencilBuffer:d.stencil})}else{let tt=null,pt=null,Vt=null;d.depth&&(Vt=d.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,tt=d.stencil?ui:ri,pt=d.stencil?hi:Fn);const St={colorFormat:e.RGBA8,depthFormat:Vt,scaleFactor:s};h=new XRWebGLBinding(V,e),q=h.createProjectionLayer(St),V.updateRenderState({layers:[q]}),t.setPixelRatio(1),t.setSize(q.textureWidth,q.textureHeight,!1),E=new Nn(q.textureWidth,q.textureHeight,{format:Ge,type:an,depthTexture:new Ya(q.textureWidth,q.textureHeight,pt,void 0,void 0,void 0,void 0,void 0,void 0,tt),stencilBuffer:d.stencil,colorSpace:t.outputColorSpace,samples:d.antialias?4:0,resolveDepthBuffer:q.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(o),l=null,r=await V.requestReferenceSpace(a),Xt.setContext(V),Xt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(V!==null)return V.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function K(Y){for(let tt=0;tt<Y.removed.length;tt++){const pt=Y.removed[tt],Vt=_.indexOf(pt);Vt>=0&&(_[Vt]=null,S[Vt].disconnect(pt))}for(let tt=0;tt<Y.added.length;tt++){const pt=Y.added[tt];let Vt=_.indexOf(pt);if(Vt===-1){for(let wt=0;wt<S.length;wt++)if(wt>=_.length){_.push(pt),Vt=wt;break}else if(_[wt]===null){_[wt]=pt,Vt=wt;break}if(Vt===-1)break}const St=S[Vt];St&&St.connect(pt)}}const H=new R,$=new R;function z(Y,tt,pt){H.setFromMatrixPosition(tt.matrixWorld),$.setFromMatrixPosition(pt.matrixWorld);const Vt=H.distanceTo($),St=tt.projectionMatrix.elements,wt=pt.projectionMatrix.elements,It=St[14]/(St[10]-1),ee=St[14]/(St[10]+1),Ot=(St[9]+1)/St[5],ae=(St[9]-1)/St[5],D=(St[8]-1)/St[0],Ce=(wt[8]+1)/wt[0],Lt=It*D,Bt=It*Ce,Mt=Vt/(-D+Ce),jt=Mt*-D;if(tt.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(jt),Y.translateZ(Mt),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),St[10]===-1)Y.projectionMatrix.copy(tt.projectionMatrix),Y.projectionMatrixInverse.copy(tt.projectionMatrixInverse);else{const vt=It+Mt,x=ee+Mt,A=Lt-jt,L=Bt+(Vt-jt),Q=Ot*ee/x*vt,J=ae*ee/x*vt;Y.projectionMatrix.makePerspective(A,L,Q,J,vt,x),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function it(Y,tt){tt===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(tt.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(V===null)return;let tt=Y.near,pt=Y.far;m.texture!==null&&(m.depthNear>0&&(tt=m.depthNear),m.depthFar>0&&(pt=m.depthFar)),v.near=b.near=T.near=tt,v.far=b.far=T.far=pt,(w!==v.near||O!==v.far)&&(V.updateRenderState({depthNear:v.near,depthFar:v.far}),w=v.near,O=v.far),T.layers.mask=Y.layers.mask|2,b.layers.mask=Y.layers.mask|4,v.layers.mask=T.layers.mask|b.layers.mask;const Vt=Y.parent,St=v.cameras;it(v,Vt);for(let wt=0;wt<St.length;wt++)it(St[wt],Vt);St.length===2?z(v,T,b):v.projectionMatrix.copy(T.projectionMatrix),lt(Y,v,Vt)};function lt(Y,tt,pt){pt===null?Y.matrix.copy(tt.matrixWorld):(Y.matrix.copy(pt.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(tt.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(tt.projectionMatrix),Y.projectionMatrixInverse.copy(tt.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=Ii*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(q===null&&f===null))return o},this.setFoveation=function(Y){o=Y,q!==null&&(q.fixedFoveation=Y),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Y)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(v)};let gt=null;function Dt(Y,tt){if(c=tt.getViewerPose(l||r),p=tt,c!==null){const pt=c.views;f!==null&&(t.setRenderTargetFramebuffer(E,f.framebuffer),t.setRenderTarget(E));let Vt=!1;pt.length!==v.cameras.length&&(v.cameras.length=0,Vt=!0);for(let wt=0;wt<pt.length;wt++){const It=pt[wt];let ee=null;if(f!==null)ee=f.getViewport(It);else{const ae=h.getViewSubImage(q,It);ee=ae.viewport,wt===0&&(t.setRenderTargetTextures(E,ae.colorTexture,q.ignoreDepthValues?void 0:ae.depthStencilTexture),t.setRenderTarget(E))}let Ot=M[wt];Ot===void 0&&(Ot=new Pe,Ot.layers.enable(wt),Ot.viewport=new se,M[wt]=Ot),Ot.matrix.fromArray(It.transform.matrix),Ot.matrix.decompose(Ot.position,Ot.quaternion,Ot.scale),Ot.projectionMatrix.fromArray(It.projectionMatrix),Ot.projectionMatrixInverse.copy(Ot.projectionMatrix).invert(),Ot.viewport.set(ee.x,ee.y,ee.width,ee.height),wt===0&&(v.matrix.copy(Ot.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),Vt===!0&&v.cameras.push(Ot)}const St=V.enabledFeatures;if(St&&St.includes("depth-sensing")){const wt=h.getDepthInformation(pt[0]);wt&&wt.isValid&&wt.texture&&m.init(t,wt,V.renderState)}}for(let pt=0;pt<S.length;pt++){const Vt=_[pt],St=S[pt];Vt!==null&&St!==void 0&&St.update(Vt,tt,l||r)}gt&&gt(Y,tt),tt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:tt}),p=null}const Xt=new Ha;Xt.setAnimationLoop(Dt),this.setAnimationLoop=function(Y){gt=Y},this.dispose=function(){}}}const bn=new Xe,Af=new te;function mf(i,t){function e(d,u){d.matrixAutoUpdate===!0&&d.updateMatrix(),u.value.copy(d.matrix)}function n(d,u){u.color.getRGB(d.fogColor.value,Ga(i)),u.isFog?(d.fogNear.value=u.near,d.fogFar.value=u.far):u.isFogExp2&&(d.fogDensity.value=u.density)}function V(d,u,E,S,_){u.isMeshBasicMaterial||u.isMeshLambertMaterial?s(d,u):u.isMeshToonMaterial?(s(d,u),h(d,u)):u.isMeshPhongMaterial?(s(d,u),c(d,u)):u.isMeshStandardMaterial?(s(d,u),q(d,u),u.isMeshPhysicalMaterial&&f(d,u,_)):u.isMeshMatcapMaterial?(s(d,u),p(d,u)):u.isMeshDepthMaterial?s(d,u):u.isMeshDistanceMaterial?(s(d,u),m(d,u)):u.isMeshNormalMaterial?s(d,u):u.isLineBasicMaterial?(r(d,u),u.isLineDashedMaterial&&a(d,u)):u.isPointsMaterial?o(d,u,E,S):u.isSpriteMaterial?l(d,u):u.isShadowMaterial?(d.color.value.copy(u.color),d.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function s(d,u){d.opacity.value=u.opacity,u.color&&d.diffuse.value.copy(u.color),u.emissive&&d.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(d.map.value=u.map,e(u.map,d.mapTransform)),u.alphaMap&&(d.alphaMap.value=u.alphaMap,e(u.alphaMap,d.alphaMapTransform)),u.bumpMap&&(d.bumpMap.value=u.bumpMap,e(u.bumpMap,d.bumpMapTransform),d.bumpScale.value=u.bumpScale,u.side===_e&&(d.bumpScale.value*=-1)),u.normalMap&&(d.normalMap.value=u.normalMap,e(u.normalMap,d.normalMapTransform),d.normalScale.value.copy(u.normalScale),u.side===_e&&d.normalScale.value.negate()),u.displacementMap&&(d.displacementMap.value=u.displacementMap,e(u.displacementMap,d.displacementMapTransform),d.displacementScale.value=u.displacementScale,d.displacementBias.value=u.displacementBias),u.emissiveMap&&(d.emissiveMap.value=u.emissiveMap,e(u.emissiveMap,d.emissiveMapTransform)),u.specularMap&&(d.specularMap.value=u.specularMap,e(u.specularMap,d.specularMapTransform)),u.alphaTest>0&&(d.alphaTest.value=u.alphaTest);const E=t.get(u),S=E.envMap,_=E.envMapRotation;S&&(d.envMap.value=S,bn.copy(_),bn.x*=-1,bn.y*=-1,bn.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(bn.y*=-1,bn.z*=-1),d.envMapRotation.value.setFromMatrix4(Af.makeRotationFromEuler(bn)),d.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,d.reflectivity.value=u.reflectivity,d.ior.value=u.ior,d.refractionRatio.value=u.refractionRatio),u.lightMap&&(d.lightMap.value=u.lightMap,d.lightMapIntensity.value=u.lightMapIntensity,e(u.lightMap,d.lightMapTransform)),u.aoMap&&(d.aoMap.value=u.aoMap,d.aoMapIntensity.value=u.aoMapIntensity,e(u.aoMap,d.aoMapTransform))}function r(d,u){d.diffuse.value.copy(u.color),d.opacity.value=u.opacity,u.map&&(d.map.value=u.map,e(u.map,d.mapTransform))}function a(d,u){d.dashSize.value=u.dashSize,d.totalSize.value=u.dashSize+u.gapSize,d.scale.value=u.scale}function o(d,u,E,S){d.diffuse.value.copy(u.color),d.opacity.value=u.opacity,d.size.value=u.size*E,d.scale.value=S*.5,u.map&&(d.map.value=u.map,e(u.map,d.uvTransform)),u.alphaMap&&(d.alphaMap.value=u.alphaMap,e(u.alphaMap,d.alphaMapTransform)),u.alphaTest>0&&(d.alphaTest.value=u.alphaTest)}function l(d,u){d.diffuse.value.copy(u.color),d.opacity.value=u.opacity,d.rotation.value=u.rotation,u.map&&(d.map.value=u.map,e(u.map,d.mapTransform)),u.alphaMap&&(d.alphaMap.value=u.alphaMap,e(u.alphaMap,d.alphaMapTransform)),u.alphaTest>0&&(d.alphaTest.value=u.alphaTest)}function c(d,u){d.specular.value.copy(u.specular),d.shininess.value=Math.max(u.shininess,1e-4)}function h(d,u){u.gradientMap&&(d.gradientMap.value=u.gradientMap)}function q(d,u){d.metalness.value=u.metalness,u.metalnessMap&&(d.metalnessMap.value=u.metalnessMap,e(u.metalnessMap,d.metalnessMapTransform)),d.roughness.value=u.roughness,u.roughnessMap&&(d.roughnessMap.value=u.roughnessMap,e(u.roughnessMap,d.roughnessMapTransform)),u.envMap&&(d.envMapIntensity.value=u.envMapIntensity)}function f(d,u,E){d.ior.value=u.ior,u.sheen>0&&(d.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),d.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(d.sheenColorMap.value=u.sheenColorMap,e(u.sheenColorMap,d.sheenColorMapTransform)),u.sheenRoughnessMap&&(d.sheenRoughnessMap.value=u.sheenRoughnessMap,e(u.sheenRoughnessMap,d.sheenRoughnessMapTransform))),u.clearcoat>0&&(d.clearcoat.value=u.clearcoat,d.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(d.clearcoatMap.value=u.clearcoatMap,e(u.clearcoatMap,d.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(d.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,e(u.clearcoatRoughnessMap,d.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(d.clearcoatNormalMap.value=u.clearcoatNormalMap,e(u.clearcoatNormalMap,d.clearcoatNormalMapTransform),d.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===_e&&d.clearcoatNormalScale.value.negate())),u.dispersion>0&&(d.dispersion.value=u.dispersion),u.iridescence>0&&(d.iridescence.value=u.iridescence,d.iridescenceIOR.value=u.iridescenceIOR,d.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],d.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(d.iridescenceMap.value=u.iridescenceMap,e(u.iridescenceMap,d.iridescenceMapTransform)),u.iridescenceThicknessMap&&(d.iridescenceThicknessMap.value=u.iridescenceThicknessMap,e(u.iridescenceThicknessMap,d.iridescenceThicknessMapTransform))),u.transmission>0&&(d.transmission.value=u.transmission,d.transmissionSamplerMap.value=E.texture,d.transmissionSamplerSize.value.set(E.width,E.height),u.transmissionMap&&(d.transmissionMap.value=u.transmissionMap,e(u.transmissionMap,d.transmissionMapTransform)),d.thickness.value=u.thickness,u.thicknessMap&&(d.thicknessMap.value=u.thicknessMap,e(u.thicknessMap,d.thicknessMapTransform)),d.attenuationDistance.value=u.attenuationDistance,d.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(d.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(d.anisotropyMap.value=u.anisotropyMap,e(u.anisotropyMap,d.anisotropyMapTransform))),d.specularIntensity.value=u.specularIntensity,d.specularColor.value.copy(u.specularColor),u.specularColorMap&&(d.specularColorMap.value=u.specularColorMap,e(u.specularColorMap,d.specularColorMapTransform)),u.specularIntensityMap&&(d.specularIntensityMap.value=u.specularIntensityMap,e(u.specularIntensityMap,d.specularIntensityMapTransform))}function p(d,u){u.matcap&&(d.matcap.value=u.matcap)}function m(d,u){const E=t.get(u).light;d.referencePosition.value.setFromMatrixPosition(E.matrixWorld),d.nearDistance.value=E.shadow.camera.near,d.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:V}}function gf(i,t,e,n){let V={},s={},r=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function o(E,S){const _=S.program;n.uniformBlockBinding(E,_)}function l(E,S){let _=V[E.id];_===void 0&&(p(E),_=c(E),V[E.id]=_,E.addEventListener("dispose",d));const I=S.program;n.updateUBOMapping(E,I);const y=t.render.frame;s[E.id]!==y&&(q(E),s[E.id]=y)}function c(E){const S=h();E.__bindingPointIndex=S;const _=i.createBuffer(),I=E.__size,y=E.usage;return i.bindBuffer(i.UNIFORM_BUFFER,_),i.bufferData(i.UNIFORM_BUFFER,I,y),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,S,_),_}function h(){for(let E=0;E<a;E++)if(r.indexOf(E)===-1)return r.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function q(E){const S=V[E.id],_=E.uniforms,I=E.__cache;i.bindBuffer(i.UNIFORM_BUFFER,S);for(let y=0,T=_.length;y<T;y++){const b=Array.isArray(_[y])?_[y]:[_[y]];for(let M=0,v=b.length;M<v;M++){const w=b[M];if(f(w,y,M,I)===!0){const O=w.__offset,N=Array.isArray(w.value)?w.value:[w.value];let k=0;for(let K=0;K<N.length;K++){const H=N[K],$=m(H);typeof H=="number"||typeof H=="boolean"?(w.__data[0]=H,i.bufferSubData(i.UNIFORM_BUFFER,O+k,w.__data)):H.isMatrix3?(w.__data[0]=H.elements[0],w.__data[1]=H.elements[1],w.__data[2]=H.elements[2],w.__data[3]=0,w.__data[4]=H.elements[3],w.__data[5]=H.elements[4],w.__data[6]=H.elements[5],w.__data[7]=0,w.__data[8]=H.elements[6],w.__data[9]=H.elements[7],w.__data[10]=H.elements[8],w.__data[11]=0):(H.toArray(w.__data,k),k+=$.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,O,w.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(E,S,_,I){const y=E.value,T=S+"_"+_;if(I[T]===void 0)return typeof y=="number"||typeof y=="boolean"?I[T]=y:I[T]=y.clone(),!0;{const b=I[T];if(typeof y=="number"||typeof y=="boolean"){if(b!==y)return I[T]=y,!0}else if(b.equals(y)===!1)return b.copy(y),!0}return!1}function p(E){const S=E.uniforms;let _=0;const I=16;for(let T=0,b=S.length;T<b;T++){const M=Array.isArray(S[T])?S[T]:[S[T]];for(let v=0,w=M.length;v<w;v++){const O=M[v],N=Array.isArray(O.value)?O.value:[O.value];for(let k=0,K=N.length;k<K;k++){const H=N[k],$=m(H),z=_%I,it=z%$.boundary,lt=z+it;_+=it,lt!==0&&I-lt<$.storage&&(_+=I-lt),O.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=_,_+=$.storage}}}const y=_%I;return y>0&&(_+=I-y),E.__size=_,E.__cache={},this}function m(E){const S={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(S.boundary=4,S.storage=4):E.isVector2?(S.boundary=8,S.storage=8):E.isVector3||E.isColor?(S.boundary=16,S.storage=12):E.isVector4?(S.boundary=16,S.storage=16):E.isMatrix3?(S.boundary=48,S.storage=48):E.isMatrix4?(S.boundary=64,S.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),S}function d(E){const S=E.target;S.removeEventListener("dispose",d);const _=r.indexOf(S.__bindingPointIndex);r.splice(_,1),i.deleteBuffer(V[S.id]),delete V[S.id],delete s[S.id]}function u(){for(const E in V)i.deleteBuffer(V[E]);r=[],V={},s={}}return{bind:o,update:l,dispose:u}}class vf{constructor(t={}){const{canvas:e=al(),context:n=null,depth:V=!0,stencil:s=!1,alpha:r=!1,antialias:a=!1,premultipliedAlpha:o=!0,preserveDrawingBuffer:l=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:q=!1}=t;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=r;const p=new Uint32Array(4),m=new Int32Array(4);let d=null,u=null;const E=[],S=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ue,this.toneMapping=_n,this.toneMappingExposure=1;const _=this;let I=!1,y=0,T=0,b=null,M=-1,v=null;const w=new se,O=new se;let N=null;const k=new Nt(0);let K=0,H=e.width,$=e.height,z=1,it=null,lt=null;const gt=new se(0,0,H,$),Dt=new se(0,0,H,$);let Xt=!1;const Y=new Zs;let tt=!1,pt=!1;const Vt=new te,St=new te,wt=new R,It=new se,ee={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ot=!1;function ae(){return b===null?z:1}let D=n;function Ce(g,U){return e.getContext(g,U)}try{const g={alpha:!0,depth:V,stencil:s,antialias:a,premultipliedAlpha:o,preserveDrawingBuffer:l,powerPreference:c,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Hs}`),e.addEventListener("webglcontextlost",X,!1),e.addEventListener("webglcontextrestored",ot,!1),e.addEventListener("webglcontextcreationerror",rt,!1),D===null){const U="webgl2";if(D=Ce(U,g),D===null)throw Ce(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(g){throw console.error("THREE.WebGLRenderer: "+g.message),g}let Lt,Bt,Mt,jt,vt,x,A,L,Q,J,W,At,st,ct,Gt,j,ht,xt,Et,ut,Ft,Ut,Kt,C;function nt(){Lt=new Su(D),Lt.init(),Ut=new cf(D,Lt),Bt=new mu(D,Lt,t,Ut),Mt=new af(D,Lt),Bt.reverseDepthBuffer&&q&&Mt.buffers.depth.setReversed(!0),jt=new Tu(D),vt=new Wq,x=new lf(D,Lt,Mt,vt,Bt,Ut,jt),A=new vu(_),L=new xu(_),Q=new Dl(D),Kt=new pu(D,Q),J=new Eu(D,Q,jt,Kt),W=new Cu(D,J,Q,jt),Et=new wu(D,Bt,x),j=new gu(vt),At=new Hq(_,A,L,Lt,Bt,Kt,j),st=new mf(_,vt),ct=new Qq,Gt=new $q(Lt),xt=new du(_,A,L,Mt,W,f,o),ht=new sf(_,W,Bt),C=new gf(D,jt,Bt,Mt),ut=new Au(D,Lt,jt),Ft=new yu(D,Lt,jt),jt.programs=At.programs,_.capabilities=Bt,_.extensions=Lt,_.properties=vt,_.renderLists=ct,_.shadowMap=ht,_.state=Mt,_.info=jt}nt();const G=new pf(_,D);this.xr=G,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const g=Lt.get("WEBGL_lose_context");g&&g.loseContext()},this.forceContextRestore=function(){const g=Lt.get("WEBGL_lose_context");g&&g.restoreContext()},this.getPixelRatio=function(){return z},this.setPixelRatio=function(g){g!==void 0&&(z=g,this.setSize(H,$,!1))},this.getSize=function(g){return g.set(H,$)},this.setSize=function(g,U,B=!0){if(G.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}H=g,$=U,e.width=Math.floor(g*z),e.height=Math.floor(U*z),B===!0&&(e.style.width=g+"px",e.style.height=U+"px"),this.setViewport(0,0,g,U)},this.getDrawingBufferSize=function(g){return g.set(H*z,$*z).floor()},this.setDrawingBufferSize=function(g,U,B){H=g,$=U,z=B,e.width=Math.floor(g*B),e.height=Math.floor(U*B),this.setViewport(0,0,g,U)},this.getCurrentViewport=function(g){return g.copy(w)},this.getViewport=function(g){return g.copy(gt)},this.setViewport=function(g,U,B,F){g.isVector4?gt.set(g.x,g.y,g.z,g.w):gt.set(g,U,B,F),Mt.viewport(w.copy(gt).multiplyScalar(z).round())},this.getScissor=function(g){return g.copy(Dt)},this.setScissor=function(g,U,B,F){g.isVector4?Dt.set(g.x,g.y,g.z,g.w):Dt.set(g,U,B,F),Mt.scissor(O.copy(Dt).multiplyScalar(z).round())},this.getScissorTest=function(){return Xt},this.setScissorTest=function(g){Mt.setScissorTest(Xt=g)},this.setOpaqueSort=function(g){it=g},this.setTransparentSort=function(g){lt=g},this.getClearColor=function(g){return g.copy(xt.getClearColor())},this.setClearColor=function(){xt.setClearColor.apply(xt,arguments)},this.getClearAlpha=function(){return xt.getClearAlpha()},this.setClearAlpha=function(){xt.setClearAlpha.apply(xt,arguments)},this.clear=function(g=!0,U=!0,B=!0){let F=0;if(g){let P=!1;if(b!==null){const Z=b.texture.format;P=Z===Js||Z===Ks||Z===Xs}if(P){const Z=b.texture.type,at=Z===an||Z===Fn||Z===Di||Z===hi||Z===Ys||Z===Qs,qt=xt.getClearColor(),ft=xt.getClearAlpha(),yt=qt.r,Rt=qt.g,dt=qt.b;at?(p[0]=yt,p[1]=Rt,p[2]=dt,p[3]=ft,D.clearBufferuiv(D.COLOR,0,p)):(m[0]=yt,m[1]=Rt,m[2]=dt,m[3]=ft,D.clearBufferiv(D.COLOR,0,m))}else F|=D.COLOR_BUFFER_BIT}U&&(F|=D.DEPTH_BUFFER_BIT),B&&(F|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(F)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",X,!1),e.removeEventListener("webglcontextrestored",ot,!1),e.removeEventListener("webglcontextcreationerror",rt,!1),ct.dispose(),Gt.dispose(),vt.dispose(),A.dispose(),L.dispose(),W.dispose(),Kt.dispose(),C.dispose(),At.dispose(),G.dispose(),G.removeEventListener("sessionstart",Vr),G.removeEventListener("sessionend",sr),En.stop()};function X(g){g.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),I=!0}function ot(){console.log("THREE.WebGLRenderer: Context Restored."),I=!1;const g=jt.autoReset,U=ht.enabled,B=ht.autoUpdate,F=ht.needsUpdate,P=ht.type;nt(),jt.autoReset=g,ht.enabled=U,ht.autoUpdate=B,ht.needsUpdate=F,ht.type=P}function rt(g){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",g.statusMessage)}function Ct(g){const U=g.target;U.removeEventListener("dispose",Ct),ne(U)}function ne(g){de(g),vt.remove(g)}function de(g){const U=vt.get(g).programs;U!==void 0&&(U.forEach(function(B){At.releaseProgram(B)}),g.isShaderMaterial&&At.releaseShaderCache(g))}this.renderBufferDirect=function(g,U,B,F,P,Z){U===null&&(U=ee);const at=P.isMesh&&P.matrixWorld.determinant()<0,qt=eo(g,U,B,F,P);Mt.setMaterial(F,at);let ft=B.index,yt=1;if(F.wireframe===!0){if(ft=J.getWireframeAttribute(B),ft===void 0)return;yt=2}const Rt=B.drawRange,dt=B.attributes.position;let kt=Rt.start*yt,Jt=(Rt.start+Rt.count)*yt;Z!==null&&(kt=Math.max(kt,Z.start*yt),Jt=Math.min(Jt,(Z.start+Z.count)*yt)),ft!==null?(kt=Math.max(kt,0),Jt=Math.min(Jt,ft.count)):dt!=null&&(kt=Math.max(kt,0),Jt=Math.min(Jt,dt.count));const Zt=Jt-kt;if(Zt<0||Zt===1/0)return;Kt.setup(P,F,qt,B,ft);let Se,Ht=ut;if(ft!==null&&(Se=Q.get(ft),Ht=Ft,Ht.setIndex(Se)),P.isMesh)F.wireframe===!0?(Mt.setLineWidth(F.wireframeLinewidth*ae()),Ht.setMode(D.LINES)):Ht.setMode(D.TRIANGLES);else if(P.isLine){let mt=F.linewidth;mt===void 0&&(mt=1),Mt.setLineWidth(mt*ae()),P.isLineSegments?Ht.setMode(D.LINES):P.isLineLoop?Ht.setMode(D.LINE_LOOP):Ht.setMode(D.LINE_STRIP)}else P.isPoints?Ht.setMode(D.POINTS):P.isSprite&&Ht.setMode(D.TRIANGLES);if(P.isBatchedMesh)if(P._multiDrawInstances!==null)Ht.renderMultiDrawInstances(P._multiDrawStarts,P._multiDrawCounts,P._multiDrawCount,P._multiDrawInstances);else if(Lt.get("WEBGL_multi_draw"))Ht.renderMultiDraw(P._multiDrawStarts,P._multiDrawCounts,P._multiDrawCount);else{const mt=P._multiDrawStarts,Je=P._multiDrawCounts,Wt=P._multiDrawCount,Le=ft?Q.get(ft).bytesPerElement:1,Gn=vt.get(F).currentProgram.getUniforms();for(let ye=0;ye<Wt;ye++)Gn.setValue(D,"_gl_DrawID",ye),Ht.render(mt[ye]/Le,Je[ye])}else if(P.isInstancedMesh)Ht.renderInstances(kt,Zt,P.count);else if(B.isInstancedBufferGeometry){const mt=B._maxInstanceCount!==void 0?B._maxInstanceCount:1/0,Je=Math.min(B.instanceCount,mt);Ht.renderInstances(kt,Zt,Je)}else Ht.render(kt,Zt)};function Yt(g,U,B){g.transparent===!0&&g.side===oe&&g.forceSinglePass===!1?(g.side=_e,g.needsUpdate=!0,Oi(g,U,B),g.side=xn,g.needsUpdate=!0,Oi(g,U,B),g.side=oe):Oi(g,U,B)}this.compile=function(g,U,B=null){B===null&&(B=g),u=Gt.get(B),u.init(U),S.push(u),B.traverseVisible(function(P){P.isLight&&P.layers.test(U.layers)&&(u.pushLight(P),P.castShadow&&u.pushShadow(P))}),g!==B&&g.traverseVisible(function(P){P.isLight&&P.layers.test(U.layers)&&(u.pushLight(P),P.castShadow&&u.pushShadow(P))}),u.setupLights();const F=new Set;return g.traverse(function(P){if(!(P.isMesh||P.isPoints||P.isLine||P.isSprite))return;const Z=P.material;if(Z)if(Array.isArray(Z))for(let at=0;at<Z.length;at++){const qt=Z[at];Yt(qt,B,P),F.add(qt)}else Yt(Z,B,P),F.add(Z)}),S.pop(),u=null,F},this.compileAsync=function(g,U,B=null){const F=this.compile(g,U,B);return new Promise(P=>{function Z(){if(F.forEach(function(at){vt.get(at).currentProgram.isReady()&&F.delete(at)}),F.size===0){P(g);return}setTimeout(Z,10)}Lt.get("KHR_parallel_shader_compile")!==null?Z():setTimeout(Z,10)})};let Ie=null;function Ke(g){Ie&&Ie(g)}function Vr(){En.stop()}function sr(){En.start()}const En=new Ha;En.setAnimationLoop(Ke),typeof self<"u"&&En.setContext(self),this.setAnimationLoop=function(g){Ie=g,G.setAnimationLoop(g),g===null?En.stop():En.start()},G.addEventListener("sessionstart",Vr),G.addEventListener("sessionend",sr),this.render=function(g,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;if(g.matrixWorldAutoUpdate===!0&&g.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),G.enabled===!0&&G.isPresenting===!0&&(G.cameraAutoUpdate===!0&&G.updateCamera(U),U=G.getCamera()),g.isScene===!0&&g.onBeforeRender(_,g,U,b),u=Gt.get(g,S.length),u.init(U),S.push(u),St.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),Y.setFromProjectionMatrix(St),pt=this.localClippingEnabled,tt=j.init(this.clippingPlanes,pt),d=ct.get(g,E.length),d.init(),E.push(d),G.enabled===!0&&G.isPresenting===!0){const Z=_.xr.getDepthSensingMesh();Z!==null&&SV(Z,U,-1/0,_.sortObjects)}SV(g,U,0,_.sortObjects),d.finish(),_.sortObjects===!0&&d.sort(it,lt),Ot=G.enabled===!1||G.isPresenting===!1||G.hasDepthSensing()===!1,Ot&&xt.addToRenderList(d,g),this.info.render.frame++,tt===!0&&j.beginShadows();const B=u.state.shadowsArray;ht.render(B,g,U),tt===!0&&j.endShadows(),this.info.autoReset===!0&&this.info.reset();const F=d.opaque,P=d.transmissive;if(u.setupLights(),U.isArrayCamera){const Z=U.cameras;if(P.length>0)for(let at=0,qt=Z.length;at<qt;at++){const ft=Z[at];ar(F,P,g,ft)}Ot&&xt.render(g);for(let at=0,qt=Z.length;at<qt;at++){const ft=Z[at];rr(d,g,ft,ft.viewport)}}else P.length>0&&ar(F,P,g,U),Ot&&xt.render(g),rr(d,g,U);b!==null&&(x.updateMultisampleRenderTarget(b),x.updateRenderTargetMipmap(b)),g.isScene===!0&&g.onAfterRender(_,g,U),Kt.resetDefaultState(),M=-1,v=null,S.pop(),S.length>0?(u=S[S.length-1],tt===!0&&j.setGlobalState(_.clippingPlanes,u.state.camera)):u=null,E.pop(),E.length>0?d=E[E.length-1]:d=null};function SV(g,U,B,F){if(g.visible===!1)return;if(g.layers.test(U.layers)){if(g.isGroup)B=g.renderOrder;else if(g.isLOD)g.autoUpdate===!0&&g.update(U);else if(g.isLight)u.pushLight(g),g.castShadow&&u.pushShadow(g);else if(g.isSprite){if(!g.frustumCulled||Y.intersectsSprite(g)){F&&It.setFromMatrixPosition(g.matrixWorld).applyMatrix4(St);const at=W.update(g),qt=g.material;qt.visible&&d.push(g,at,qt,B,It.z,null)}}else if((g.isMesh||g.isLine||g.isPoints)&&(!g.frustumCulled||Y.intersectsObject(g))){const at=W.update(g),qt=g.material;if(F&&(g.boundingSphere!==void 0?(g.boundingSphere===null&&g.computeBoundingSphere(),It.copy(g.boundingSphere.center)):(at.boundingSphere===null&&at.computeBoundingSphere(),It.copy(at.boundingSphere.center)),It.applyMatrix4(g.matrixWorld).applyMatrix4(St)),Array.isArray(qt)){const ft=at.groups;for(let yt=0,Rt=ft.length;yt<Rt;yt++){const dt=ft[yt],kt=qt[dt.materialIndex];kt&&kt.visible&&d.push(g,at,kt,B,It.z,dt)}}else qt.visible&&d.push(g,at,qt,B,It.z,null)}}const Z=g.children;for(let at=0,qt=Z.length;at<qt;at++)SV(Z[at],U,B,F)}function rr(g,U,B,F){const P=g.opaque,Z=g.transmissive,at=g.transparent;u.setupLightsView(B),tt===!0&&j.setGlobalState(_.clippingPlanes,B),F&&Mt.viewport(w.copy(F)),P.length>0&&Ni(P,U,B),Z.length>0&&Ni(Z,U,B),at.length>0&&Ni(at,U,B),Mt.buffers.depth.setTest(!0),Mt.buffers.depth.setMask(!0),Mt.buffers.color.setMask(!0),Mt.setPolygonOffset(!1)}function ar(g,U,B,F){if((B.isScene===!0?B.overrideMaterial:null)!==null)return;u.state.transmissionRenderTarget[F.id]===void 0&&(u.state.transmissionRenderTarget[F.id]=new Nn(1,1,{generateMipmaps:!0,type:Lt.has("EXT_color_buffer_half_float")||Lt.has("EXT_color_buffer_float")?Li:an,minFilter:Bn,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:zt.workingColorSpace}));const Z=u.state.transmissionRenderTarget[F.id],at=F.viewport||w;Z.setSize(at.z,at.w);const qt=_.getRenderTarget();_.setRenderTarget(Z),_.getClearColor(k),K=_.getClearAlpha(),K<1&&_.setClearColor(16777215,.5),_.clear(),Ot&&xt.render(B);const ft=_.toneMapping;_.toneMapping=_n;const yt=F.viewport;if(F.viewport!==void 0&&(F.viewport=void 0),u.setupLightsView(F),tt===!0&&j.setGlobalState(_.clippingPlanes,F),Ni(g,B,F),x.updateMultisampleRenderTarget(Z),x.updateRenderTargetMipmap(Z),Lt.has("WEBGL_multisampled_render_to_texture")===!1){let Rt=!1;for(let dt=0,kt=U.length;dt<kt;dt++){const Jt=U[dt],Zt=Jt.object,Se=Jt.geometry,Ht=Jt.material,mt=Jt.group;if(Ht.side===oe&&Zt.layers.test(F.layers)){const Je=Ht.side;Ht.side=_e,Ht.needsUpdate=!0,or(Zt,B,F,Se,Ht,mt),Ht.side=Je,Ht.needsUpdate=!0,Rt=!0}}Rt===!0&&(x.updateMultisampleRenderTarget(Z),x.updateRenderTargetMipmap(Z))}_.setRenderTarget(qt),_.setClearColor(k,K),yt!==void 0&&(F.viewport=yt),_.toneMapping=ft}function Ni(g,U,B){const F=U.isScene===!0?U.overrideMaterial:null;for(let P=0,Z=g.length;P<Z;P++){const at=g[P],qt=at.object,ft=at.geometry,yt=F===null?at.material:F,Rt=at.group;qt.layers.test(B.layers)&&or(qt,U,B,ft,yt,Rt)}}function or(g,U,B,F,P,Z){g.onBeforeRender(_,U,B,F,P,Z),g.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,g.matrixWorld),g.normalMatrix.getNormalMatrix(g.modelViewMatrix),P.onBeforeRender(_,U,B,F,g,Z),P.transparent===!0&&P.side===oe&&P.forceSinglePass===!1?(P.side=_e,P.needsUpdate=!0,_.renderBufferDirect(B,U,F,P,g,Z),P.side=xn,P.needsUpdate=!0,_.renderBufferDirect(B,U,F,P,g,Z),P.side=oe):_.renderBufferDirect(B,U,F,P,g,Z),g.onAfterRender(_,U,B,F,P,Z)}function Oi(g,U,B){U.isScene!==!0&&(U=ee);const F=vt.get(g),P=u.state.lights,Z=u.state.shadowsArray,at=P.state.version,qt=At.getParameters(g,P.state,Z,U,B),ft=At.getProgramCacheKey(qt);let yt=F.programs;F.environment=g.isMeshStandardMaterial?U.environment:null,F.fog=U.fog,F.envMap=(g.isMeshStandardMaterial?L:A).get(g.envMap||F.environment),F.envMapRotation=F.environment!==null&&g.envMap===null?U.environmentRotation:g.envMapRotation,yt===void 0&&(g.addEventListener("dispose",Ct),yt=new Map,F.programs=yt);let Rt=yt.get(ft);if(Rt!==void 0){if(F.currentProgram===Rt&&F.lightsStateVersion===at)return cr(g,qt),Rt}else qt.uniforms=At.getUniforms(g),g.onBeforeCompile(qt,_),Rt=At.acquireProgram(qt,ft),yt.set(ft,Rt),F.uniforms=qt.uniforms;const dt=F.uniforms;return(!g.isShaderMaterial&&!g.isRawShaderMaterial||g.clipping===!0)&&(dt.clippingPlanes=j.uniform),cr(g,qt),F.needsLights=io(g),F.lightsStateVersion=at,F.needsLights&&(dt.ambientLightColor.value=P.state.ambient,dt.lightProbe.value=P.state.probe,dt.directionalLights.value=P.state.directional,dt.directionalLightShadows.value=P.state.directionalShadow,dt.spotLights.value=P.state.spot,dt.spotLightShadows.value=P.state.spotShadow,dt.rectAreaLights.value=P.state.rectArea,dt.ltc_1.value=P.state.rectAreaLTC1,dt.ltc_2.value=P.state.rectAreaLTC2,dt.pointLights.value=P.state.point,dt.pointLightShadows.value=P.state.pointShadow,dt.hemisphereLights.value=P.state.hemi,dt.directionalShadowMap.value=P.state.directionalShadowMap,dt.directionalShadowMatrix.value=P.state.directionalShadowMatrix,dt.spotShadowMap.value=P.state.spotShadowMap,dt.spotLightMatrix.value=P.state.spotLightMatrix,dt.spotLightMap.value=P.state.spotLightMap,dt.pointShadowMap.value=P.state.pointShadowMap,dt.pointShadowMatrix.value=P.state.pointShadowMatrix),F.currentProgram=Rt,F.uniformsList=null,Rt}function lr(g){if(g.uniformsList===null){const U=g.currentProgram.getUniforms();g.uniformsList=pV.seqWithValue(U.seq,g.uniforms)}return g.uniformsList}function cr(g,U){const B=vt.get(g);B.outputColorSpace=U.outputColorSpace,B.batching=U.batching,B.batchingColor=U.batchingColor,B.instancing=U.instancing,B.instancingColor=U.instancingColor,B.instancingMorph=U.instancingMorph,B.skinning=U.skinning,B.morphTargets=U.morphTargets,B.morphNormals=U.morphNormals,B.morphColors=U.morphColors,B.morphTargetsCount=U.morphTargetsCount,B.numClippingPlanes=U.numClippingPlanes,B.numIntersection=U.numClipIntersection,B.vertexAlphas=U.vertexAlphas,B.vertexTangents=U.vertexTangents,B.toneMapping=U.toneMapping}function eo(g,U,B,F,P){U.isScene!==!0&&(U=ee),x.resetTextureUnits();const Z=U.fog,at=F.isMeshStandardMaterial?U.environment:null,qt=b===null?_.outputColorSpace:b.isXRRenderTarget===!0?b.texture.colorSpace:di,ft=(F.isMeshStandardMaterial?L:A).get(F.envMap||at),yt=F.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,Rt=!!B.attributes.tangent&&(!!F.normalMap||F.anisotropy>0),dt=!!B.morphAttributes.position,kt=!!B.morphAttributes.normal,Jt=!!B.morphAttributes.color;let Zt=_n;F.toneMapped&&(b===null||b.isXRRenderTarget===!0)&&(Zt=_.toneMapping);const Se=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,Ht=Se!==void 0?Se.length:0,mt=vt.get(F),Je=u.state.lights;if(tt===!0&&(pt===!0||g!==v)){const Re=g===v&&F.id===M;j.setState(F,g,Re)}let Wt=!1;F.version===mt.__version?(mt.needsLights&&mt.lightsStateVersion!==Je.state.version||mt.outputColorSpace!==qt||P.isBatchedMesh&&mt.batching===!1||!P.isBatchedMesh&&mt.batching===!0||P.isBatchedMesh&&mt.batchingColor===!0&&P.colorTexture===null||P.isBatchedMesh&&mt.batchingColor===!1&&P.colorTexture!==null||P.isInstancedMesh&&mt.instancing===!1||!P.isInstancedMesh&&mt.instancing===!0||P.isSkinnedMesh&&mt.skinning===!1||!P.isSkinnedMesh&&mt.skinning===!0||P.isInstancedMesh&&mt.instancingColor===!0&&P.instanceColor===null||P.isInstancedMesh&&mt.instancingColor===!1&&P.instanceColor!==null||P.isInstancedMesh&&mt.instancingMorph===!0&&P.morphTexture===null||P.isInstancedMesh&&mt.instancingMorph===!1&&P.morphTexture!==null||mt.envMap!==ft||F.fog===!0&&mt.fog!==Z||mt.numClippingPlanes!==void 0&&(mt.numClippingPlanes!==j.numPlanes||mt.numIntersection!==j.numIntersection)||mt.vertexAlphas!==yt||mt.vertexTangents!==Rt||mt.morphTargets!==dt||mt.morphNormals!==kt||mt.morphColors!==Jt||mt.toneMapping!==Zt||mt.morphTargetsCount!==Ht)&&(Wt=!0):(Wt=!0,mt.__version=F.version);let Le=mt.currentProgram;Wt===!0&&(Le=Oi(F,U,P));let Gn=!1,ye=!1,vi=!1;const $t=Le.getUniforms(),He=mt.uniforms;if(Mt.useProgram(Le.program)&&(Gn=!0,ye=!0,vi=!0),F.id!==M&&(M=F.id,ye=!0),Gn||v!==g){Mt.buffers.depth.getReversed()?(Vt.copy(g.projectionMatrix),ll(Vt),cl(Vt),$t.setValue(D,"projectionMatrix",Vt)):$t.setValue(D,"projectionMatrix",g.projectionMatrix),$t.setValue(D,"viewMatrix",g.matrixWorldInverse);const ln=$t.map.cameraPosition;ln!==void 0&&ln.setValue(D,wt.setFromMatrixPosition(g.matrixWorld)),Bt.logarithmicDepthBuffer&&$t.setValue(D,"logDepthBufFC",2/(Math.log(g.far+1)/Math.LN2)),(F.isMeshPhongMaterial||F.isMeshToonMaterial||F.isMeshLambertMaterial||F.isMeshBasicMaterial||F.isMeshStandardMaterial||F.isShaderMaterial)&&$t.setValue(D,"isOrthographic",g.isOrthographicCamera===!0),v!==g&&(v=g,ye=!0,vi=!0)}if(P.isSkinnedMesh){$t.setOptional(D,P,"bindMatrix"),$t.setOptional(D,P,"bindMatrixInverse");const Re=P.skeleton;Re&&(Re.boneTexture===null&&Re.computeBoneTexture(),$t.setValue(D,"boneTexture",Re.boneTexture,x))}P.isBatchedMesh&&($t.setOptional(D,P,"batchingTexture"),$t.setValue(D,"batchingTexture",P._matricesTexture,x),$t.setOptional(D,P,"batchingIdTexture"),$t.setValue(D,"batchingIdTexture",P._indirectTexture,x),$t.setOptional(D,P,"batchingColorTexture"),P._colorsTexture!==null&&$t.setValue(D,"batchingColorTexture",P._colorsTexture,x));const _i=B.morphAttributes;if((_i.position!==void 0||_i.normal!==void 0||_i.color!==void 0)&&Et.update(P,B,Le),(ye||mt.receiveShadow!==P.receiveShadow)&&(mt.receiveShadow=P.receiveShadow,$t.setValue(D,"receiveShadow",P.receiveShadow)),F.isMeshGouraudMaterial&&F.envMap!==null&&(He.envMap.value=ft,He.flipEnvMap.value=ft.isCubeTexture&&ft.isRenderTargetTexture===!1?-1:1),F.isMeshStandardMaterial&&F.envMap===null&&U.environment!==null&&(He.envMapIntensity.value=U.environmentIntensity),ye&&($t.setValue(D,"toneMappingExposure",_.toneMappingExposure),mt.needsLights&&no(He,vi),Z&&F.fog===!0&&st.refreshFogUniforms(He,Z),st.refreshMaterialUniforms(He,F,z,$,u.state.transmissionRenderTarget[g.id]),pV.upload(D,lr(mt),He,x)),F.isShaderMaterial&&F.uniformsNeedUpdate===!0&&(pV.upload(D,lr(mt),He,x),F.uniformsNeedUpdate=!1),F.isSpriteMaterial&&$t.setValue(D,"center",P.center),$t.setValue(D,"modelViewMatrix",P.modelViewMatrix),$t.setValue(D,"normalMatrix",P.normalMatrix),$t.setValue(D,"modelMatrix",P.matrixWorld),F.isShaderMaterial||F.isRawShaderMaterial){const Re=F.uniformsGroups;for(let ln=0,cn=Re.length;ln<cn;ln++){const hr=Re[ln];C.update(hr,Le),C.bind(hr,Le)}}return Le}function no(g,U){g.ambientLightColor.needsUpdate=U,g.lightProbe.needsUpdate=U,g.directionalLights.needsUpdate=U,g.directionalLightShadows.needsUpdate=U,g.pointLights.needsUpdate=U,g.pointLightShadows.needsUpdate=U,g.spotLights.needsUpdate=U,g.spotLightShadows.needsUpdate=U,g.rectAreaLights.needsUpdate=U,g.hemisphereLights.needsUpdate=U}function io(g){return g.isMeshLambertMaterial||g.isMeshToonMaterial||g.isMeshPhongMaterial||g.isMeshStandardMaterial||g.isShadowMaterial||g.isShaderMaterial&&g.lights===!0}this.getActiveCubeFace=function(){return y},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return b},this.setRenderTargetTextures=function(g,U,B){vt.get(g.texture).__webglTexture=U,vt.get(g.depthTexture).__webglTexture=B;const F=vt.get(g);F.__hasExternalTextures=!0,F.__autoAllocateDepthBuffer=B===void 0,F.__autoAllocateDepthBuffer||Lt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),F.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(g,U){const B=vt.get(g);B.__webglFramebuffer=U,B.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(g,U=0,B=0){b=g,y=U,T=B;let F=!0,P=null,Z=!1,at=!1;if(g){const ft=vt.get(g);if(ft.__useDefaultFramebuffer!==void 0)Mt.bindFramebuffer(D.FRAMEBUFFER,null),F=!1;else if(ft.__webglFramebuffer===void 0)x.setupRenderTarget(g);else if(ft.__hasExternalTextures)x.rebindTextures(g,vt.get(g.texture).__webglTexture,vt.get(g.depthTexture).__webglTexture);else if(g.depthBuffer){const dt=g.depthTexture;if(ft.__boundDepthTexture!==dt){if(dt!==null&&vt.has(dt)&&(g.width!==dt.image.width||g.height!==dt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");x.setupDepthRenderbuffer(g)}}const yt=g.texture;(yt.isData3DTexture||yt.isDataArrayTexture||yt.isCompressedArrayTexture)&&(at=!0);const Rt=vt.get(g).__webglFramebuffer;g.isWebGLCubeRenderTarget?(Array.isArray(Rt[U])?P=Rt[U][B]:P=Rt[U],Z=!0):g.samples>0&&x.useMultisampledRTT(g)===!1?P=vt.get(g).__webglMultisampledFramebuffer:Array.isArray(Rt)?P=Rt[B]:P=Rt,w.copy(g.viewport),O.copy(g.scissor),N=g.scissorTest}else w.copy(gt).multiplyScalar(z).floor(),O.copy(Dt).multiplyScalar(z).floor(),N=Xt;if(Mt.bindFramebuffer(D.FRAMEBUFFER,P)&&F&&Mt.drawBuffers(g,P),Mt.viewport(w),Mt.scissor(O),Mt.setScissorTest(N),Z){const ft=vt.get(g.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+U,ft.__webglTexture,B)}else if(at){const ft=vt.get(g.texture),yt=U||0;D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,ft.__webglTexture,B||0,yt)}M=-1},this.readRenderTargetPixels=function(g,U,B,F,P,Z,at){if(!(g&&g.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let qt=vt.get(g).__webglFramebuffer;if(g.isWebGLCubeRenderTarget&&at!==void 0&&(qt=qt[at]),qt){Mt.bindFramebuffer(D.FRAMEBUFFER,qt);try{const ft=g.texture,yt=ft.format,Rt=ft.type;if(!Bt.textureFormatReadable(yt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Bt.textureTypeReadable(Rt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=g.width-F&&B>=0&&B<=g.height-P&&D.readPixels(U,B,F,P,Ut.convert(yt),Ut.convert(Rt),Z)}finally{const ft=b!==null?vt.get(b).__webglFramebuffer:null;Mt.bindFramebuffer(D.FRAMEBUFFER,ft)}}},this.readRenderTargetPixelsAsync=async function(g,U,B,F,P,Z,at){if(!(g&&g.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let qt=vt.get(g).__webglFramebuffer;if(g.isWebGLCubeRenderTarget&&at!==void 0&&(qt=qt[at]),qt){const ft=g.texture,yt=ft.format,Rt=ft.type;if(!Bt.textureFormatReadable(yt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Bt.textureTypeReadable(Rt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(U>=0&&U<=g.width-F&&B>=0&&B<=g.height-P){Mt.bindFramebuffer(D.FRAMEBUFFER,qt);const dt=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,dt),D.bufferData(D.PIXEL_PACK_BUFFER,Z.byteLength,D.STREAM_READ),D.readPixels(U,B,F,P,Ut.convert(yt),Ut.convert(Rt),0);const kt=b!==null?vt.get(b).__webglFramebuffer:null;Mt.bindFramebuffer(D.FRAMEBUFFER,kt);const Jt=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await ol(D,Jt,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,dt),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,Z),D.deleteBuffer(dt),D.deleteSync(Jt),Z}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(g,U=null,B=0){g.isTexture!==!0&&(yi("WebGLRenderer: copyFramebufferToTexture function signature has changed."),U=arguments[0]||null,g=arguments[1]);const F=Math.pow(2,-B),P=Math.floor(g.image.width*F),Z=Math.floor(g.image.height*F),at=U!==null?U.x:0,qt=U!==null?U.y:0;x.setTexture2D(g,0),D.copyTexSubImage2D(D.TEXTURE_2D,B,0,0,at,qt,P,Z),Mt.unbindTexture()},this.copyTextureToTexture=function(g,U,B=null,F=null,P=0){g.isTexture!==!0&&(yi("WebGLRenderer: copyTextureToTexture function signature has changed."),F=arguments[0]||null,g=arguments[1],U=arguments[2],P=arguments[3]||0,B=null);let Z,at,qt,ft,yt,Rt,dt,kt,Jt;const Zt=g.isCompressedTexture?g.mipmaps[P]:g.image;B!==null?(Z=B.max.x-B.min.x,at=B.max.y-B.min.y,qt=B.isBox3?B.max.z-B.min.z:1,ft=B.min.x,yt=B.min.y,Rt=B.isBox3?B.min.z:0):(Z=Zt.width,at=Zt.height,qt=Zt.depth||1,ft=0,yt=0,Rt=0),F!==null?(dt=F.x,kt=F.y,Jt=F.z):(dt=0,kt=0,Jt=0);const Se=Ut.convert(U.format),Ht=Ut.convert(U.type);let mt;U.isData3DTexture?(x.setTexture3D(U,0),mt=D.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(x.setTexture2DArray(U,0),mt=D.TEXTURE_2D_ARRAY):(x.setTexture2D(U,0),mt=D.TEXTURE_2D),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,U.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,U.unpackAlignment);const Je=D.getParameter(D.UNPACK_ROW_LENGTH),Wt=D.getParameter(D.UNPACK_IMAGE_HEIGHT),Le=D.getParameter(D.UNPACK_SKIP_PIXELS),Gn=D.getParameter(D.UNPACK_SKIP_ROWS),ye=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,Zt.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Zt.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,ft),D.pixelStorei(D.UNPACK_SKIP_ROWS,yt),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Rt);const vi=g.isDataArrayTexture||g.isData3DTexture,$t=U.isDataArrayTexture||U.isData3DTexture;if(g.isRenderTargetTexture||g.isDepthTexture){const He=vt.get(g),_i=vt.get(U),Re=vt.get(He.__renderTarget),ln=vt.get(_i.__renderTarget);Mt.bindFramebuffer(D.READ_FRAMEBUFFER,Re.__webglFramebuffer),Mt.bindFramebuffer(D.DRAW_FRAMEBUFFER,ln.__webglFramebuffer);for(let cn=0;cn<qt;cn++)vi&&D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,vt.get(g).__webglTexture,P,Rt+cn),g.isDepthTexture?($t&&D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,vt.get(U).__webglTexture,P,Jt+cn),D.blitFramebuffer(ft,yt,Z,at,dt,kt,Z,at,D.DEPTH_BUFFER_BIT,D.NEAREST)):$t?D.copyTexSubImage3D(mt,P,dt,kt,Jt+cn,ft,yt,Z,at):D.copyTexSubImage2D(mt,P,dt,kt,Jt+cn,ft,yt,Z,at);Mt.bindFramebuffer(D.READ_FRAMEBUFFER,null),Mt.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else $t?g.isDataTexture||g.isData3DTexture?D.texSubImage3D(mt,P,dt,kt,Jt,Z,at,qt,Se,Ht,Zt.data):U.isCompressedArrayTexture?D.compressedTexSubImage3D(mt,P,dt,kt,Jt,Z,at,qt,Se,Zt.data):D.texSubImage3D(mt,P,dt,kt,Jt,Z,at,qt,Se,Ht,Zt):g.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,P,dt,kt,Z,at,Se,Ht,Zt.data):g.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,P,dt,kt,Zt.width,Zt.height,Se,Zt.data):D.texSubImage2D(D.TEXTURE_2D,P,dt,kt,Z,at,Se,Ht,Zt);D.pixelStorei(D.UNPACK_ROW_LENGTH,Je),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Wt),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Le),D.pixelStorei(D.UNPACK_SKIP_ROWS,Gn),D.pixelStorei(D.UNPACK_SKIP_IMAGES,ye),P===0&&U.generateMipmaps&&D.generateMipmap(mt),Mt.unbindTexture()},this.copyTextureToTexture3D=function(g,U,B=null,F=null,P=0){return g.isTexture!==!0&&(yi("WebGLRenderer: copyTextureToTexture3D function signature has changed."),B=arguments[0]||null,F=arguments[1]||null,g=arguments[2],U=arguments[3],P=arguments[4]||0),yi('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(g,U,B,F,P)},this.initRenderTarget=function(g){vt.get(g).__webglFramebuffer===void 0&&x.setupRenderTarget(g)},this.initTexture=function(g){g.isCubeTexture?x.setTextureCube(g,0):g.isData3DTexture?x.setTexture3D(g,0):g.isDataArrayTexture||g.isCompressedArrayTexture?x.setTexture2DArray(g,0):x.setTexture2D(g,0),Mt.unbindTexture()},this.resetState=function(){y=0,T=0,b=null,Mt.reset(),Kt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return sn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=zt._getDrawingBufferColorSpace(t),e.unpackColorSpace=zt._getUnpackColorSpace()}}class tr{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new Nt(t),this.density=e}clone(){return new tr(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class _f extends qe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Xe,this.environmentIntensity=1,this.environmentRotation=new Xe,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class zs extends mi{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new Nt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const ca=new te,ks=new La,oV=new _V,lV=new R;class ha extends qe{constructor(t=new xe,e=new zs){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,V=this.matrixWorld,s=t.params.Points.threshold,r=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),oV.copy(n.boundingSphere),oV.applyMatrix4(V),oV.radius+=s,t.ray.intersectsSphere(oV)===!1)return;ca.copy(V).invert(),ks.copy(t.ray).applyMatrix4(ca);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),o=a*a,l=n.index,h=n.attributes.position;if(l!==null){const q=Math.max(0,r.start),f=Math.min(l.count,r.start+r.count);for(let p=q,m=f;p<m;p++){const d=l.getX(p);lV.fromBufferAttribute(h,d),ua(lV,d,o,V,t,e,this)}}else{const q=Math.max(0,r.start),f=Math.min(h.count,r.start+r.count);for(let p=q,m=f;p<m;p++)lV.fromBufferAttribute(h,p),ua(lV,p,o,V,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const V=e[n[0]];if(V!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=V.length;s<r;s++){const a=V[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function ua(i,t,e,n,V,s,r){const a=ks.distanceSqToPoint(i);if(a<e){const o=new R;ks.closestPointToPoint(i,o),o.applyMatrix4(n);const l=V.ray.origin.distanceTo(o);if(l<V.near||l>V.far)return;s.push({distance:l,distanceToRay:Math.sqrt(a),point:o,index:t,face:null,faceIndex:null,barycoord:null,object:r})}}class ii extends Me{constructor(t,e,n,V,s,r,a,o,l){super(t,e,n,V,s,r,a,o,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class on{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,V=this.getPoint(0),s=0;e.push(0);for(let r=1;r<=t;r++)n=this.getPoint(r/t),s+=n.distanceTo(V),e.push(s),V=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let V=0;const s=n.length;let r;e?r=e:r=t*n[s-1];let a=0,o=s-1,l;for(;a<=o;)if(V=Math.floor(a+(o-a)/2),l=n[V]-r,l<0)a=V+1;else if(l>0)o=V-1;else{o=V;break}if(V=o,n[V]===r)return V/(s-1);const c=n[V],q=n[V+1]-c,f=(r-c)/q;return(V+f)/(s-1)}getTangent(t,e){let V=t-1e-4,s=t+1e-4;V<0&&(V=0),s>1&&(s=1);const r=this.getPoint(V),a=this.getPoint(s),o=e||(r.isVector2?new _t:new R);return o.copy(a).sub(r).normalize(),o}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new R,V=[],s=[],r=[],a=new R,o=new te;for(let f=0;f<=t;f++){const p=f/t;V[f]=this.getTangentAt(p,new R)}s[0]=new R,r[0]=new R;let l=Number.MAX_VALUE;const c=Math.abs(V[0].x),h=Math.abs(V[0].y),q=Math.abs(V[0].z);c<=l&&(l=c,n.set(1,0,0)),h<=l&&(l=h,n.set(0,1,0)),q<=l&&n.set(0,0,1),a.crossVectors(V[0],n).normalize(),s[0].crossVectors(V[0],a),r[0].crossVectors(V[0],s[0]);for(let f=1;f<=t;f++){if(s[f]=s[f-1].clone(),r[f]=r[f-1].clone(),a.crossVectors(V[f-1],V[f]),a.length()>Number.EPSILON){a.normalize();const p=Math.acos(fe(V[f-1].dot(V[f]),-1,1));s[f].applyMatrix4(o.makeRotationAxis(a,p))}r[f].crossVectors(V[f],s[f])}if(e===!0){let f=Math.acos(fe(s[0].dot(s[t]),-1,1));f/=t,V[0].dot(a.crossVectors(s[0],s[t]))>0&&(f=-f);for(let p=1;p<=t;p++)s[p].applyMatrix4(o.makeRotationAxis(V[p],f*p)),r[p].crossVectors(V[p],s[p])}return{tangents:V,normals:s,binormals:r}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class ja extends on{constructor(t=0,e=0,n=1,V=1,s=0,r=Math.PI*2,a=!1,o=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=V,this.aStartAngle=s,this.aEndAngle=r,this.aClockwise=a,this.aRotation=o}getPoint(t,e=new _t){const n=e,V=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const r=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=V;for(;s>V;)s-=V;s<Number.EPSILON&&(r?s=0:s=V),this.aClockwise===!0&&!r&&(s===V?s=-V:s=s-V);const a=this.aStartAngle+t*s;let o=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const c=Math.cos(this.aRotation),h=Math.sin(this.aRotation),q=o-this.aX,f=l-this.aY;o=q*c-f*h+this.aX,l=q*h+f*c+this.aY}return n.set(o,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class Mf extends ja{constructor(t,e,n,V,s,r){super(t,e,n,n,V,s,r),this.isArcCurve=!0,this.type="ArcCurve"}}function er(){let i=0,t=0,e=0,n=0;function V(s,r,a,o){i=s,t=a,e=-3*s+3*r-2*a-o,n=2*s-2*r+a+o}return{initCatmullRom:function(s,r,a,o,l){V(r,a,l*(a-s),l*(o-r))},initNonuniformCatmullRom:function(s,r,a,o,l,c,h){let q=(r-s)/l-(a-s)/(l+c)+(a-r)/c,f=(a-r)/c-(o-r)/(c+h)+(o-a)/h;q*=c,f*=c,V(r,a,q,f)},calc:function(s){const r=s*s,a=r*s;return i+t*s+e*r+n*a}}}const cV=new R,$V=new er,ts=new er,es=new er;class Za extends on{constructor(t=[],e=!1,n="centripetal",V=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=V}getPoint(t,e=new R){const n=e,V=this.points,s=V.length,r=(s-(this.closed?0:1))*t;let a=Math.floor(r),o=r-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:o===0&&a===s-1&&(a=s-2,o=1);let l,c;this.closed||a>0?l=V[(a-1)%s]:(cV.subVectors(V[0],V[1]).add(V[0]),l=cV);const h=V[a%s],q=V[(a+1)%s];if(this.closed||a+2<s?c=V[(a+2)%s]:(cV.subVectors(V[s-1],V[s-2]).add(V[s-1]),c=cV),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let p=Math.pow(l.distanceToSquared(h),f),m=Math.pow(h.distanceToSquared(q),f),d=Math.pow(q.distanceToSquared(c),f);m<1e-4&&(m=1),p<1e-4&&(p=m),d<1e-4&&(d=m),$V.initNonuniformCatmullRom(l.x,h.x,q.x,c.x,p,m,d),ts.initNonuniformCatmullRom(l.y,h.y,q.y,c.y,p,m,d),es.initNonuniformCatmullRom(l.z,h.z,q.z,c.z,p,m,d)}else this.curveType==="catmullrom"&&($V.initCatmullRom(l.x,h.x,q.x,c.x,this.tension),ts.initCatmullRom(l.y,h.y,q.y,c.y,this.tension),es.initCatmullRom(l.z,h.z,q.z,c.z,this.tension));return n.set($V.calc(o),ts.calc(o),es.calc(o)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const V=t.points[e];this.points.push(V.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const V=this.points[e];t.points.push(V.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const V=t.points[e];this.points.push(new R().fromArray(V))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function qa(i,t,e,n,V){const s=(n-t)*.5,r=(V-e)*.5,a=i*i,o=i*a;return(2*e-2*n+s+r)*o+(-3*e+3*n-2*s-r)*a+s*i+e}function xf(i,t){const e=1-i;return e*e*t}function Sf(i,t){return 2*(1-i)*i*t}function Ef(i,t){return i*i*t}function Ri(i,t,e,n){return xf(i,t)+Sf(i,e)+Ef(i,n)}function yf(i,t){const e=1-i;return e*e*e*t}function Tf(i,t){const e=1-i;return 3*e*e*i*t}function wf(i,t){return 3*(1-i)*i*i*t}function Cf(i,t){return i*i*i*t}function bi(i,t,e,n,V){return yf(i,t)+Tf(i,e)+wf(i,n)+Cf(i,V)}class Rf extends on{constructor(t=new _t,e=new _t,n=new _t,V=new _t){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=V}getPoint(t,e=new _t){const n=e,V=this.v0,s=this.v1,r=this.v2,a=this.v3;return n.set(bi(t,V.x,s.x,r.x,a.x),bi(t,V.y,s.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class bf extends on{constructor(t=new R,e=new R,n=new R,V=new R){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=V}getPoint(t,e=new R){const n=e,V=this.v0,s=this.v1,r=this.v2,a=this.v3;return n.set(bi(t,V.x,s.x,r.x,a.x),bi(t,V.y,s.y,r.y,a.y),bi(t,V.z,s.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Uf extends on{constructor(t=new _t,e=new _t){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new _t){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new _t){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Pf extends on{constructor(t=new R,e=new R){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new R){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new R){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Df extends on{constructor(t=new _t,e=new _t,n=new _t){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new _t){const n=e,V=this.v0,s=this.v1,r=this.v2;return n.set(Ri(t,V.x,s.x,r.x),Ri(t,V.y,s.y,r.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class $a extends on{constructor(t=new R,e=new R,n=new R){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new R){const n=e,V=this.v0,s=this.v1,r=this.v2;return n.set(Ri(t,V.x,s.x,r.x),Ri(t,V.y,s.y,r.y),Ri(t,V.z,s.z,r.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class If extends on{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new _t){const n=e,V=this.points,s=(V.length-1)*t,r=Math.floor(s),a=s-r,o=V[r===0?r:r-1],l=V[r],c=V[r>V.length-2?V.length-1:r+1],h=V[r>V.length-3?V.length-1:r+2];return n.set(qa(a,o.x,l.x,c.x,h.x),qa(a,o.y,l.y,c.y,h.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const V=t.points[e];this.points.push(V.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const V=this.points[e];t.points.push(V.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const V=t.points[e];this.points.push(new _t().fromArray(V))}return this}}var Lf=Object.freeze({__proto__:null,ArcCurve:Mf,CatmullRomCurve3:Za,CubicBezierCurve:Rf,CubicBezierCurve3:bf,EllipseCurve:ja,LineCurve:Uf,LineCurve3:Pf,QuadraticBezierCurve:Df,QuadraticBezierCurve3:$a,SplineCurve:If});class nr extends xe{constructor(t=1,e=32,n=0,V=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:V},e=Math.max(3,e);const s=[],r=[],a=[],o=[],l=new R,c=new _t;r.push(0,0,0),a.push(0,0,1),o.push(.5,.5);for(let h=0,q=3;h<=e;h++,q+=3){const f=n+h/e*V;l.x=t*Math.cos(f),l.y=t*Math.sin(f),r.push(l.x,l.y,l.z),a.push(0,0,1),c.x=(r[q]/t+1)/2,c.y=(r[q+1]/t+1)/2,o.push(c.x,c.y)}for(let h=1;h<=e;h++)s.push(h,h+1,0);this.setIndex(s),this.setAttribute("position",new re(r,3)),this.setAttribute("normal",new re(a,3)),this.setAttribute("uv",new re(o,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new nr(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class Mn extends xe{constructor(t=1,e=1,n=1,V=32,s=1,r=!1,a=0,o=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:V,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o};const l=this;V=Math.floor(V),s=Math.floor(s);const c=[],h=[],q=[],f=[];let p=0;const m=[],d=n/2;let u=0;E(),r===!1&&(t>0&&S(!0),e>0&&S(!1)),this.setIndex(c),this.setAttribute("position",new re(h,3)),this.setAttribute("normal",new re(q,3)),this.setAttribute("uv",new re(f,2));function E(){const _=new R,I=new R;let y=0;const T=(e-t)/n;for(let b=0;b<=s;b++){const M=[],v=b/s,w=v*(e-t)+t;for(let O=0;O<=V;O++){const N=O/V,k=N*o+a,K=Math.sin(k),H=Math.cos(k);I.x=w*K,I.y=-v*n+d,I.z=w*H,h.push(I.x,I.y,I.z),_.set(K,T,H).normalize(),q.push(_.x,_.y,_.z),f.push(N,1-v),M.push(p++)}m.push(M)}for(let b=0;b<V;b++)for(let M=0;M<s;M++){const v=m[M][b],w=m[M+1][b],O=m[M+1][b+1],N=m[M][b+1];(t>0||M!==0)&&(c.push(v,w,N),y+=3),(e>0||M!==s-1)&&(c.push(w,O,N),y+=3)}l.addGroup(u,y,0),u+=y}function S(_){const I=p,y=new _t,T=new R;let b=0;const M=_===!0?t:e,v=_===!0?1:-1;for(let O=1;O<=V;O++)h.push(0,d*v,0),q.push(0,v,0),f.push(.5,.5),p++;const w=p;for(let O=0;O<=V;O++){const k=O/V*o+a,K=Math.cos(k),H=Math.sin(k);T.x=M*H,T.y=d*v,T.z=M*K,h.push(T.x,T.y,T.z),q.push(0,v,0),y.x=K*.5+.5,y.y=H*.5*v+.5,f.push(y.x,y.y),p++}for(let O=0;O<V;O++){const N=I+O,k=w+O;_===!0?c.push(k,k+1,N):c.push(k+1,k,N),b+=3}l.addGroup(u,b,_===!0?1:2),u+=b}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Mn(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Ye extends Mn{constructor(t=1,e=1,n=32,V=1,s=!1,r=0,a=Math.PI*2){super(0,t,e,n,V,s,r,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:V,openEnded:s,thetaStart:r,thetaLength:a}}static fromJSON(t){return new Ye(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class gn extends xe{constructor(t=1,e=32,n=16,V=0,s=Math.PI*2,r=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:V,phiLength:s,thetaStart:r,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const o=Math.min(r+a,Math.PI);let l=0;const c=[],h=new R,q=new R,f=[],p=[],m=[],d=[];for(let u=0;u<=n;u++){const E=[],S=u/n;let _=0;u===0&&r===0?_=.5/e:u===n&&o===Math.PI&&(_=-.5/e);for(let I=0;I<=e;I++){const y=I/e;h.x=-t*Math.cos(V+y*s)*Math.sin(r+S*a),h.y=t*Math.cos(r+S*a),h.z=t*Math.sin(V+y*s)*Math.sin(r+S*a),p.push(h.x,h.y,h.z),q.copy(h).normalize(),m.push(q.x,q.y,q.z),d.push(y+_,1-S),E.push(l++)}c.push(E)}for(let u=0;u<n;u++)for(let E=0;E<e;E++){const S=c[u][E+1],_=c[u][E],I=c[u+1][E],y=c[u+1][E+1];(u!==0||r>0)&&f.push(S,_,y),(u!==n-1||o<Math.PI)&&f.push(_,I,y)}this.setIndex(f),this.setAttribute("position",new re(p,3)),this.setAttribute("normal",new re(m,3)),this.setAttribute("uv",new re(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new gn(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class xV extends xe{constructor(t=1,e=.4,n=12,V=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:V,arc:s},n=Math.floor(n),V=Math.floor(V);const r=[],a=[],o=[],l=[],c=new R,h=new R,q=new R;for(let f=0;f<=n;f++)for(let p=0;p<=V;p++){const m=p/V*s,d=f/n*Math.PI*2;h.x=(t+e*Math.cos(d))*Math.cos(m),h.y=(t+e*Math.cos(d))*Math.sin(m),h.z=e*Math.sin(d),a.push(h.x,h.y,h.z),c.x=t*Math.cos(m),c.y=t*Math.sin(m),q.subVectors(h,c).normalize(),o.push(q.x,q.y,q.z),l.push(p/V),l.push(f/n)}for(let f=1;f<=n;f++)for(let p=1;p<=V;p++){const m=(V+1)*f+p-1,d=(V+1)*(f-1)+p-1,u=(V+1)*(f-1)+p,E=(V+1)*f+p;r.push(m,d,E),r.push(d,u,E)}this.setIndex(r),this.setAttribute("position",new re(a,3)),this.setAttribute("normal",new re(o,3)),this.setAttribute("uv",new re(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new xV(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class ir extends xe{constructor(t=new $a(new R(-1,-1,0),new R(-1,1,0),new R(1,1,0)),e=64,n=1,V=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:V,closed:s};const r=t.computeFrenetFrames(e,s);this.tangents=r.tangents,this.normals=r.normals,this.binormals=r.binormals;const a=new R,o=new R,l=new _t;let c=new R;const h=[],q=[],f=[],p=[];m(),this.setIndex(p),this.setAttribute("position",new re(h,3)),this.setAttribute("normal",new re(q,3)),this.setAttribute("uv",new re(f,2));function m(){for(let S=0;S<e;S++)d(S);d(s===!1?e:0),E(),u()}function d(S){c=t.getPointAt(S/e,c);const _=r.normals[S],I=r.binormals[S];for(let y=0;y<=V;y++){const T=y/V*Math.PI*2,b=Math.sin(T),M=-Math.cos(T);o.x=M*_.x+b*I.x,o.y=M*_.y+b*I.y,o.z=M*_.z+b*I.z,o.normalize(),q.push(o.x,o.y,o.z),a.x=c.x+n*o.x,a.y=c.y+n*o.y,a.z=c.z+n*o.z,h.push(a.x,a.y,a.z)}}function u(){for(let S=1;S<=e;S++)for(let _=1;_<=V;_++){const I=(V+1)*(S-1)+(_-1),y=(V+1)*S+(_-1),T=(V+1)*S+_,b=(V+1)*(S-1)+_;p.push(I,y,b),p.push(y,T,b)}}function E(){for(let S=0;S<=e;S++)for(let _=0;_<=V;_++)l.x=S/e,l.y=_/V,f.push(l.x,l.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new ir(new Lf[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}class ie extends mi{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Nt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Nt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ba,this.normalScale=new _t(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Xe,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class to extends qe{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Nt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class Bf extends to{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(qe.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Nt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const ns=new te,fa=new R,da=new R;class Ff{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new _t(512,512),this.map=null,this.mapPass=null,this.matrix=new te,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Zs,this._frameExtents=new _t(1,1),this._viewportCount=1,this._viewports=[new se(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;fa.setFromMatrixPosition(t.matrixWorld),e.position.copy(fa),da.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(da),e.updateMatrixWorld(),ns.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ns),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(ns)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class Nf extends Ff{constructor(){super(new Wa(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Of extends to{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(qe.DEFAULT_UP),this.updateMatrix(),this.target=new qe,this.shadow=new Nf}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class Gf{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=pa(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=pa();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function pa(){return performance.now()}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Hs}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Hs);class fi{static createButton(t,e={}){const n=document.createElement("button");function V(){let l=null;async function c(f){f.addEventListener("end",h),await t.xr.setSession(f),n.textContent="EXIT VR",l=f}function h(){l.removeEventListener("end",h),n.textContent="ENTER VR",l=null}n.style.display="",n.style.cursor="pointer",n.style.left="calc(50% - 50px)",n.style.width="100px",n.textContent="ENTER VR";const q={...e,optionalFeatures:["local-floor","bounded-floor","layers",...e.optionalFeatures||[]]};n.onmouseenter=function(){n.style.opacity="1.0"},n.onmouseleave=function(){n.style.opacity="0.5"},n.onclick=function(){l===null?navigator.xr.requestSession("immersive-vr",q).then(c):(l.end(),navigator.xr.offerSession!==void 0&&navigator.xr.offerSession("immersive-vr",q).then(c).catch(f=>{console.warn(f)}))},navigator.xr.offerSession!==void 0&&navigator.xr.offerSession("immersive-vr",q).then(c).catch(f=>{console.warn(f)})}function s(){n.style.display="",n.style.cursor="auto",n.style.left="calc(50% - 75px)",n.style.width="150px",n.onmouseenter=null,n.onmouseleave=null,n.onclick=null}function r(){s(),n.textContent="VR NOT SUPPORTED"}function a(l){s(),console.warn("Exception when trying to call xr.isSessionSupported",l),n.textContent="VR NOT ALLOWED"}function o(l){l.style.position="absolute",l.style.bottom="20px",l.style.padding="12px 6px",l.style.border="1px solid #fff",l.style.borderRadius="4px",l.style.background="rgba(0,0,0,0.1)",l.style.color="#fff",l.style.font="normal 13px sans-serif",l.style.textAlign="center",l.style.opacity="0.5",l.style.outline="none",l.style.zIndex="999"}if("xr"in navigator)return n.id="VRButton",n.style.display="none",o(n),navigator.xr.isSessionSupported("immersive-vr").then(function(l){l?V():r(),l&&fi.xrSessionIsGranted&&n.click()}).catch(a),n;{const l=document.createElement("a");return window.isSecureContext===!1?(l.href=document.location.href.replace(/^http:/,"https:"),l.innerHTML="WEBXR NEEDS HTTPS"):(l.href="https://immersiveweb.dev/",l.innerHTML="WEBXR NOT AVAILABLE"),l.style.left="calc(50% - 90px)",l.style.width="180px",l.style.textDecoration="none",o(l),l}}static registerSessionGrantedListener(){if(typeof navigator<"u"&&"xr"in navigator){if(/WebXRViewer\//i.test(navigator.userAgent))return;navigator.xr.addEventListener("sessiongranted",()=>{fi.xrSessionIsGranted=!0})}}}fi.xrSessionIsGranted=!1;fi.registerSessionGrantedListener();const zf="data:audio/mpeg;base64,SUQzBAAAAAAAIlRTU0UAAAAOAAADTGF2ZjYzLjEuMTAyAAAAAAAAAAAAAAD/+0DAAAAAAAAAAAAAAAAAAAAAAABJbmZvAAAADwAAAAwAAAqBACUlJSUlJSUlOTk5OTk5OTlMTExMTExMTGBgYGBgYGBgYHR0dHR0dHR0iIiIiIiIiIicnJycnJycnJywsLCwsLCwsMTExMTExMTE2NjY2NjY2NjY7Ozs7Ozs7Oz//////////wAAAABMYXZjNjMuMS4AAAAAAAAAAAAAAAAkAnoAAAAAAAAKgSbfP6MAAAAAAP/7UMQAAAlgA7qUAYABlyu4/xqgALJCSyWLg+9gPg+97AfB8Pp8oc4IAgGNQIAh4gBMH8oD4Pg/g+D4Pv4nBwEHS4IAgCHBAEHcoCYPn6gfB8H34nB8Pu1g4CAYwQBAEM0LAKAKAGAGAMAwGAgEAwA6gKoxNcAOSHhNgBa8AaFnxBCBC9/JBVBtBt/4qgKiCG3/kJEPjyIff/j6RCsQmjL//IR6xo9HtR7//+RHEJEPnOHw+VP///FYhJShCPSU0ej05SEiOQAN2gEAAAN3BFj/+1LEBQAKaHkk2GGAAaQmaWczIAALwRwErPe1++cNCHMTHfd+o+rg0hf0WWwPD4OiZHgVAjFMusEjTULIO0RCRALGQMCoof9I5hARFxaFzYE0UdMjRaWdWx07//iyQAAAAKSiCBAAN0+CPDMAxCX0hbwBHlUM8CKTi15YKwmSObphq8bYWrEIk0EBmAubHeBeAmAbwz5gT6jQQuR5w0+khQWeTOGzfvTvTTUtk/6DoIKQoJIlc1TQ//bTTdJbn2T1///+tTGi1akRAAAFbHbR5P/7UsQEgQuNM2u8lAAJWZxtPMGLCHEeHQsiWFU1CEiRFgR0YFR8iMOQ04w0TljwaA0MLMU9+q+rTV+07r+u6m/r/4+fj/+vq3tER3R3uk2TIDgRBpbCgv39XcT+nE/Mzx//8vAog/p8mISiASjJDDZYCwtSNI+pyVVsyeOCqelcOiySQPH5seuKV1FuN59CqeGpiQDEdxLN9cgfIQ7mlFJFdW17KLV9t6aa+ecFRdWo9WuoMYKP//pMHBGdEIyh8iaSCIBTTjsc5CFPS7gQo5hn//tSxAkAC/j3baeMsdF3Hykw9hWwSpDxqkIeFQonzFGlmBsA0Eux1eMTM02VQYlB4uj7WkbWmS7HaRLIZc/6WxBaqP+zzVbeaVoePCRIuHSCJs6Ehy3MWVO2MBoStLNIv8kuAABBAAAVlIg9Nw+SkZQjJxEABstq7IhUn7aSJoCqm5Z5DU+mtptc4/ay12I5avq22qba5lI14I43NQfGPWZkejxGoKoChxw9QfTfb8tWfoW5SB4509/34b1B1YMgBUQABCAAABJRuPCEDnL5Giz/+1LECACMUMtBrCUOwWiaJjDGDbl4KoV89ReKRRF5fikLeodxY/T+qZtXLhyz7Irzdbg77htR16DRNg8FywajlN+4H8X/NbVpw6k1IctB/5JeSEiWsSu0NCJaQIfNmnM93osEoTIhMMgCAgHhZk5KpFVJQ0Ix0Aksh0CLhWPrv8mLV3Z1b5z0s8memHmlU9+rfrksxQPTC7h9JSAdGJxq0q+CqAl+q58Xb21Xh0sGJIIKoldJuHSxVJmUWkS1OPnd0gAUSEIAJxRCIiKkqJQAS//7UsQHgAoglyEgpGEAuQAk9BCI4JATlFbY+GRwVQTcZzWQ+QNms+N1aqAWoYj1AgpjxhqVAZQNobCcXQToa1wxoeNHAGK20QvS56WddhB/uTvRf9GpKQCC05rbY2mWoe4NMYdqdJKPYNeDUGnh3EskoeCoKu9T8tVzq3f/rdlTv/X///rqAErwUGD5AjYGERZv//8VFP6hcV//1CwvxVupv+sVFRUVFhZQt1C3ULiv/NAyKiw6TEFNRTMuMTAwqqqqqqqqqqqqqqqqqqqqqqqq//tSxCWDxdwOyEMkIEACgEAAEAAEqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqpMQU1FMy4xMDCqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqr/+1LEa4PAAAGkAAAAIAAANIAAAASqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqkxBTUUzLjEwMKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqv/7UsShg8AAAaQAAAAgAAA0gAAABKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqTEFNRTMuMTAwqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq//tSxKGDwAABpAAAACAAADSAAAAEqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqpMQU1FMy4xMDCqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqr/+1LEoYPAAAGkAAAAIAAANIAAAASqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqv/7UsShg8AAAaQAAAAgAAA0gAAABKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq",kf=""+new URL("voice_10-FOsFEWNf.mp3",import.meta.url).href,Hf="data:audio/mpeg;base64,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VVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVf/7UsRJA8AAAaQAAAAgAAA0gAAABFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVTEFNRTMuMTAwVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV//tSxKGDwAABpAAAACAAADSAAAAEVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVMQU1FMy4xMDBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVX/+1LEoYPAAAGkAAAAIAAANIAAAARVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVUxBTUUzLjEwMFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVf/7UsShg8AAAaQAAAAgAAA0gAAABFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV//tSxKGDwAABpAAAACAAADSAAAAEVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVU=",Wf="data:audio/mpeg;base64,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VVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVf/7UsRPA8AAAAAAAAAgAAA0gAAABFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVTEFNRTMuMTAwVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV//tSxKGDwAABpAAAACAAADSAAAAEVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVMQU1FMy4xMDBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVX/+1LEoYPAAAGkAAAAIAAANIAAAARVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVUxBTUUzLjEwMFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVf/7UsShg8AAAaQAAAAgAAA0gAAABFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV//tSxKGDwAABpAAAACAAADSAAAAEVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVU=",Yf="data:audio/mpeg;base64,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secNFHBthKuFazdMQU1FMy4xMDBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVf/7UsQrA8AAAAAAAAAgAAA0gAAABFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVTEFNRTMuMTAwVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV//tSxIkDwAABpAAAACAAADSAAAAEVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVMQU1FMy4xMDBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVX/+1LEoYPAAAGkAAAAIAAANIAAAARVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVUxBTUUzLjEwMFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVf/7UsShg8AAAaQAAAAgAAA0gAAABFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVTEFNRTMuMTAwVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV//tSxKGDwAABpAAAACAAADSAAAAEVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVX/+1LEoYPAAAGkAAAAIAAANIAAAARVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVQ==",Qf="data:audio/mpeg;base64,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qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq//tSxKGDwAABpAAAACAAADSAAAAEqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqr/+1LEoYPAAAGkAAAAIAAANIAAAASqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqg==",Xf=""+new URL("voice_15-BcCU7JDQ.mp3",import.meta.url).href,Kf="data:audio/mpeg;base64,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h7tZ3FVsPOe7kWu/9+lvIJ18tfrxVCogNxKpRpopKGWApZa5Jk7WW2vOhIC9DMZGD1gLUj/pb48b+M/0f5L8qnZ/QzyRjcArGnGZEa2Dj5jDubVMQU1FMy4xMDBVVVVVVf/7UsQlAcW0AxWgiEAAOAEAAe8ABFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVTEFNRTMuMTAwVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV//tSxGUDwAAAAAAAACAAADSAAAAEVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVMQU1FMy4xMDBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVX/+1LEoYPAAAGkAAAAIAAANIAAAARVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVUxBTUUzLjEwMFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVf/7UsShg8AAAaQAAAAgAAA0gAAABFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVTEFNRTMuMTAwVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV//tSxKGDwAABpAAAACAAADSAAAAEVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVMQU1FMy4xMDBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVX/+1LEoYPAAAGkAAAAIAAANIAAAARVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVf/7UsShg8AAAaQAAAAgAAA0gAAABFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV",Jf="data:audio/mpeg;base64,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",jf="data:audio/mpeg;base64,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VVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVf/7UsRTg8AAAaQAAAAgAAA0gAAABFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVTEFNRTMuMTAwVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV//tSxKGDwAABpAAAACAAADSAAAAEVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVMQU1FMy4xMDBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVX/+1LEoYPAAAGkAAAAIAAANIAAAARVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVUxBTUUzLjEwMFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVf/7UsShg8AAAaQAAAAgAAA0gAAABFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV//tSxKGDwAABpAAAACAAADSAAAAEVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVU=",Zf="data:audio/mpeg;base64,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HKHt5NV1VdQ1hkeFDQ4PhWJRECuEkUu9ssBdFyKesYenjXyVrmY5+Td793R1upgBAYYBCUEqaaoahoBQqZ/MixoKof8yCwjMhJv+BQoHgZIgsRATXs4FaaYlvrImfq5YJv/7UsQZg8h8JvwDBGgACwBAAcAABBkBNArXwEEwyM/0gIWI0BUga1qVTEFNRTMuMTAwVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVTEFNRTMuMTAwVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV//tSxFQDwAAAAAAAACAAADSAAAAEVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVMQU1FMy4xMDBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVX/+1LEoYPAAAGkAAAAIAAANIAAAARVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVUxBTUUzLjEwMFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVf/7UsShg8AAAaQAAAAgAAA0gAAABFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVTEFNRTMuMTAwVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV//tSxKGDwAABpAAAACAAADSAAAAEVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVMQU1FMy4xMDBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVX/+1LEoYPAAAGkAAAAIAAANIAAAARVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVf/7UsShg8AAAaQAAAAgAAA0gAAABFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV",$f="data:audio/mpeg;base64,SUQzBAAAAAAAIlRTU0UAAAAOAAADTGF2ZjYzLjEuMTAyAAAAAAAAAAAAAAD/+0DAAAAAAAAAAAAAAAAAAAAAAABJbmZvAAAADwAAAAsAAAmwACgoKCgoKCgoKD09PT09PT09PVNTU1NTU1NTU2hoaGhoaGhoaH5+fn5+fn5+fpSUlJSUlJSUlKmpqampqampqb+/v7+/v7+/v9TU1NTU1NTU1Orq6urq6urq6v///////////wAAAABMYXZjNjMuMS4AAAAAAAAAAAAAAAAkAvgAAAAAAAAJsDMOPEwAAAAAAP/7UMQAAAlgA7qUAYABlyu4/xqgALJCSyWLg+9gPg+97AfB8Pp8oc4IAgGNQIAh4gBMH8oD4Pg/g+D4Pv4nBwEHS4IAgCHBAEHcoCYPn6gfB8H34nB8Pu1g4CAYwQBAEM0LAKAKAGAGAMAwGAgEAwA6gKoxNcAOSHhNgBa8AaFnxBCBC9/JBVBtBt/4qgKiCG3/kJEPjyIff/j6RCsQmjL//IR6xo9HtR7//+RHEJEPnOHw+VP///FYhJShCPSU0ej05SEiOQ0Gw4BBKJhaJAH/+1LEBQALAP1DuHgAEYGo8PcScgOAgCANDL9iR+e4Dxf5OGHd0CYC6giH63FsBsQNAZj7poMkgOYaiyyl+gmm7yIDnkXK44xz//83QRTdk///6kC4YGizhp/8+Ykwwf//7+7//e/f7/XbWRuxwCAMBGWii8QMB6azIEEk8ZTYIFRMY6g/YSCIiq5jqNxuTPZpquxYH5MdB3af7XYfJjRrs/MdsmDwhnvm102bqrWPf//+aeTEs90Gh4kf///mDRn6PHqKmId2aGZpYigCJmSAkf/7UsQGgAvwqYH9lgAxd50ttPMJ4oNFDmxoQw4TjKMQVMc06yqA5CtgCQDh00wSmIp+JYzRLCY3zDbXZX/v936dTbV2XIKN6/A9s9nHccNYZ+nZs/00nt/XG8PgkL3q/+gKNr++NSBu6wykm0QCk8+JTCB/EmBlAIpfdL8VQl8O1ZVacVQINOYhr0ROIJooS1RmOzZWIaoQisEMwSBWWW2iLR2YS5jUM9i//p221qEBGFBz03As8YLkxUMhVf/o//UuSeFD1dE2QEkQCUlRKXiW//tSxAWAC70rYawkaRl6I6i2mIAByhdtRpHKLuyDjTBQDRM8DLNiuRYKs0GWaKaByirG8+PYxghUYKAqawUFLqt7VdVDGupBSk1pdKZ////5axjUB2/6Wvr8/6rXhkqwYGJARPBvnAzoBAAYAACOw3CSEzQCg+TgCj9ACQfJVJWVjiC5xCBsJ0aSToKOyjr+ChYWAWDYNQanKUdMNa+17NxX+17Vyu1zArWuzcL///////61rViqD1raampX4baTWxSsTW/4SgAQEBOqgAAAADP/+1LEBQAKAHUnOGMAAYStYcOMMABAh+8uvhJKe8P9+f/Hxq371ohB3xGHyYlcKL97fdjhO9FYodva5qCwi+QWJCicy+XI0EEPpuXclz7tQvV3LZ9frnDP/40WdE6wCj+2HEkpw5Lf2P/6UY1VfpRtSVdm+q2qkwZgykGAjUgwETarxm6qkwE1Zursdb/CiSaM4CJjUK2wEaiV7/0v/8/ixjUBKMqrG1XVVXZqrZfwMKzwaiXo4iAodlQkDNUATpJ0K6MokZcDjRg+aQpLsPBZsf/7UsQKA8pQHqwnvSJABABAACAABFFRUWJGhVmLCwqKmfxUVMgIXFSJn+BQqKiweNa2JAQVFQy6z4FFRQWDwFFRZBoVZ/ULiojM4qKiooSAoVFRYBVMQU1FMy4xMDBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV//tSxD4DwAABpAAAACAAADSAAAAEVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVMQU1FMy4xMDBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVX/+1LEnAPAAAGkAAAAIAAANIAAAARVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVUxBTUUzLjEwMFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVf/7UsShg8AAAaQAAAAgAAA0gAAABFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVTEFNRTMuMTAwVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV//tSxKGDwAABpAAAACAAADSAAAAEVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVX/+1LEoYPAAAGkAAAAIAAANIAAAARVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVQ==",td=""+new URL("voice_20-CzFgb1jl.mp3",import.meta.url).href,ed=""+new URL("voice_25-CxcGsBO8.mp3",import.meta.url).href,nd="data:audio/mpeg;base64,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",id=""+new URL("voice_30-Dx-z0GlM.mp3",import.meta.url).href,Vd="data:audio/mpeg;base64,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VVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVf/7UsSSA8AAAaQAAAAgAAA0gAAABFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVTEFNRTMuMTAwVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV//tSxKGDwAABpAAAACAAADSAAAAEVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVMQU1FMy4xMDBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVX/+1LEoYPAAAGkAAAAIAAANIAAAARVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVUxBTUUzLjEwMFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVf/7UsShg8AAAaQAAAAgAAA0gAAABFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV//tSxKGDwAABpAAAACAAADSAAAAEVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVU=",sd=""+new URL("voice_5-CXNCgRi0.mp3",import.meta.url).href,rd="data:audio/mpeg;base64,SUQzBAAAAAAAIlRTU0UAAAAOAAADTGF2ZjYzLjEuMTAyAAAAAAAAAAAAAAD/+0DAAAAAAAAAAAAAAAAAAAAAAABJbmZvAAAADwAAAA0AAAtSACIiIiIiIiI0NDQ0NDQ0NEdHR0dHR0dHWVlZWVlZWWxsbGxsbGxsfn5+fn5+fn6RkZGRkZGRo6Ojo6Ojo6O2tra2tra2tsjIyMjIyMjb29vb29vb2+3t7e3t7e3t/////////wAAAABMYXZjNjMuMS4AAAAAAAAAAAAAAAAkApwAAAAAAAALUovN5RsAAAAAAP/7UMQAAAlgA7qUAYABlyu4/xqgALJCSyWLg+9gPg+97AfB8Pp8oc4IAgGNQIAh4gBMH8oD4Pg/g+D4Pv4nBwEHS4IAgCHBAEHcoCYPn6gfB8H34nB8Pu1g4CAYwQBAEM0LAKAKAGAGAMAwGAgEAwA6gKoxNcAOSHhNgBa8AaFnxBCBC9/JBVBtBt/4qgKiCG3/kJEPjyIff/j6RCsQmjL//IR6xo9HtR7//+RHEJEPnOHw+VP///FYhJShCPSU0ej05SEiOQAAWAANBSAWdhL/+1LEBQALeg0iuFKACW2pLv8EUgJ8Pud91p3djW/W0pPqckyscXE/xQ57kIJixxY/9SffVy/+RiGZ/SiMNGE//Oj/K43nOLi71//89mPZG+YqCg5ByEBBMXIUB/////2P///+Li40ABohpcId5d3b7azaCKAIn8l0UjQghC6IQXVGCws5A+6i53nIOEVM0XONHo0XPnFEcoHFw4zC5D2sZtw42d9qkb1///V/9VO5z5JG////xeA16SAojpJpCL2sCCreXe/ba2SxA76wv/SE/P/7UsQHAAuNWXm8wQARgpVx/c2kf7gHyUST9JEZtHgQRRlOdgNyHFlcpj0I1Op0ZzozX3orAYtp7URjunkZQjYI6CDuccqPW+mzeSY/V013p/0///15KuKMGdR8iUeI3KrFchWXVzcRLbaRgAY1kAxlGJho+YECpOGkJRoZGYeElqzN2U7tMMMEzBIIx4MgGkYeinZp2sMjwlSkva9XaOVQQRh1I+CcqICqyAAgJRbmF3lCS1/HagnKDdKtrzXku5HNuHucubh4QhVAAO4vsdAs//tSxAaAC3Clac0FMsGHp2488Q56HcmmJHnpWCEEmCIVZq1yjLBAJIM+JbMwhGx5srsW79RyD05B2GRixWTgis02HgaEoBAUWUMNTRre23JKIUntlQyHgpcv/qFhE46ZRZ3e6DQ2NCNUlYKdvbAUchfjrRRoq1Qk7ULedB1N8LKeRu8MS3X1RDCqiSwTSO7GMKmepczfzMomQwtCmy6G0fX///6tvQTkwwMTNUP12JmlLpVSbjM1UTldnOgN4qTHLrZdVuN1alaEV1U9AoL6KQf/+1LEBYOLVW1ZxISzyUUza8ACsymKhkHkQyQFjpU+2JTaNdumNgxQHrI5jJGyB8GQHGRjmyQxoRoqt5fj/r3+N8Hk/////V9GO3OdCKRkFFPRiMAgEO6nGC6YZtO+cQP94fJwR/p2KNExgGOWJOVUMpKf////0Tde+jEdXkV6NP3fOcQt0L/zA6eL46Fd+A4TubiwJ4V+HDJwlKxNSKNxcu5y9Jl/r/lX408fdY8bpL4YF4aRtgmpuaiYjUMJEr/1TtSyGJGLCt0sjun/tC9rtv/7UsQNgAxZi4HjCZXxgKUsfMMJ+sX6f/9Gdmfp//1///9tUdnUyhAZDHdnb6UvRlIUhi7RVl21IImj8x5ctKYQmcBabRHy77pHeTPZ+zu71p2Hq2t7tJutdmxoVB4iImGVtZHCQZm2ox6JxJJLiolDmPoKjkYl1/JLXnErzDtY68892f1Tzlf78k4KBizNw5qmZmZZt/rXbQIUUEdjTKUvcv//+ZSt/9v5W3CsCuGiS3EeIYieHaZUQhqHUwU23JZqAkABXqCmoJylUTDaHTCy//tSxAoACTijL6AMQcEQkGPkMI1gQFQpxgQ85WRxwWgn0MpaGCs9PfXK9pMwUHQ2pqf1eSFSRoi4TNoqlREVInSTICCRrt/Rp7hcAJbr+QThqGAjjcuHNyc01KKr4UVdQxxogqlhnEq2YUQKzKAQOtEp0sLIpLCWCylX7ZNR5T7sTKff+qpO0TZJaf9nrDQFMDoiqqld/L//KrKqkqxKqIlDVVBqxKqIlDVVBq5VURKGqqDViVURKGqqDVgaqIlDVVBqwNX+W////+qn9g1cqrr/+1LEIQPJ1ArgAxggCAYAQADwAASrf////Tf////6qf/gr1VMQU1FMy4xMDBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVUxBTUUzLjEwMFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVf/7UsRWg8AAAaQAAAAgAAA0gAAABFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVTEFNRTMuMTAwVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV//tSxKGDwAABpAAAACAAADSAAAAEVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVMQU1FMy4xMDBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVX/+1LEoYPAAAGkAAAAIAAANIAAAARVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVUxBTUUzLjEwMFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVf/7UsShg8AAAaQAAAAgAAA0gAAABFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV//tSxKGDwAABpAAAACAAADSAAAAEVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVU=",ad="data:audio/mpeg;base64,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VVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVf/7UsRWg8AAAaQAAAAgAAA0gAAABFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVTEFNRTMuMTAwVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV//tSxKGDwAABpAAAACAAADSAAAAEVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVMQU1FMy4xMDBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVX/+1LEoYPAAAGkAAAAIAAANIAAAARVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVUxBTUUzLjEwMFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVf/7UsShg8AAAaQAAAAgAAA0gAAABFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV//tSxKGDwAABpAAAACAAADSAAAAEVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVU=",od="data:audio/mpeg;base64,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",ld="data:audio/mpeg;base64,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VVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVf/7UsSFA8AAAaQAAAAgAAA0gAAABFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVTEFNRTMuMTAwVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV//tSxKGDwAABpAAAACAAADSAAAAEVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVMQU1FMy4xMDBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVX/+1LEoYPAAAGkAAAAIAAANIAAAARVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVUxBTUUzLjEwMFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVf/7UsShg8AAAaQAAAAgAAA0gAAABFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV//tSxKGDwAABpAAAACAAADSAAAAEVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVU=",cd="data:audio/mpeg;base64,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qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq//tSxJcDwAABpAAAACAAADSAAAAEqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqpMQU1FMy4xMDCqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqr/+1LEoYPAAAGkAAAAIAAANIAAAASqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqkxBTUUzLjEwMKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqv/7UsShg8AAAaQAAAAgAAA0gAAABKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqTEFNRTMuMTAwqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq//tSxKGDwAABpAAAACAAADSAAAAEqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqr/+1LEoYPAAAGkAAAAIAAANIAAAASqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqg==",hd="data:audio/mpeg;base64,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g2E0mw0KgrJB0edhMSqjnG88dYlpXf4vqt+2//QqkAAJAYEywwl2Bi8yuHmIFNqxlW2ZV1q5kbo5MrRpYFLbMUkqdDsq4KiiwTYBZILEdbksBZwVKkeJQER1u4caoeRLJP/7UsQhggogkxpBBGeBOYGgIGMIAUU6yJsWfhJ71Go0mZUeCCAZFBwCEFCiixUSSVlJBpR/Euyu2Nf/rBMzeUxRY70sRL/2/+7yJJbfqlFf/uczup/+3/1oqm///mKJZblZnsX//b//9j/5MVmKqklyVTfu1ExBTUUzLjEwMFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV//tSxC+DwGACAA6AACAAAAAAAAAEVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVMQU1FMy4xMDBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVX/+1LEjAPAAAGkAAAAIAAANIAAAARVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVUxBTUUzLjEwMFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVf/7UsShg8AAAaQAAAAgAAA0gAAABFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVTEFNRTMuMTAwVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV//tSxKGDwAABpAAAACAAADSAAAAEVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVMQU1FMy4xMDBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVX/+1LEoYPAAAGkAAAAIAAANIAAAARVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVf/7UsShg8AAAaQAAAAgAAA0gAAABFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV",ud="data:audio/mpeg;base64,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wVrkZcjM1TxrgREGs8QePUajUeumkgmV7Pfbbf+mv/uXrZQRZjG4YySEoSipV2R5KHa3XhTAtAABrvKAHEjpB6hjF+OaZiQo6lPSp+pXgo3kiVAy2JU/d0eCgFESiyX6Vf/7UsQWgApklT2gPMGJRQukFCSYCCk5aMA0slr95nTUZO3tTnNutZmFjg7+Hf///DgVl0VDB843EFUKAEJCDJRZGGQzgF2+FkZIydWWbJZHnJxczMkUmrZqUXODpFYOsKvHhAmhYQmiU+SFwlQ0M1aw+0bQSehkROYevaIEpanpSlyai9/bbe23JjbdFQMamjaKJJ4ZBjVZxnDLn5oOFGUvaiYBZFR4NCaVCVTxFE0RAV3LE9jvx7iXqfJFa3clrdrGQq4q71zvW4jJLhAGAvRI//tSxCIAB9hTI0GEawEFAhqI97AAiRksGZFNnQaEj4sK1iooLI/WysVbeKijTQFFRZtQuysVFm/8qFRQSB5QsK9XFRbFhdn4sLs/WKYsLCoZANlMQU1FMy4xMDBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVX/+1LEQAPAOAIAB4AAIAAANIAAAARVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVUxBTUUzLjEwMFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVf/7UsSdA8AAAaQAAAAgAAA0gAAABFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVTEFNRTMuMTAwVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV//tSxKGDwAABpAAAACAAADSAAAAEVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVMQU1FMy4xMDBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVX/+1LEoYPAAAGkAAAAIAAANIAAAARVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVUxBTUUzLjEwMFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVf/7UsShg8AAAaQAAAAgAAA0gAAABFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV//tSxKGDwAABpAAAACAAADSAAAAEVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVU=",qd=""+new URL("bgm-DC_BBmwx.mp3",import.meta.url).href,fd="data:audio/mpeg;base64,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qIduhzTUa0sPF1ZrNr260QNpnZjqacajG+1tcm7PVNDfbLVkq7psUFhVqpf/+2DE9QAQNUFNrRhx6h0p6TWUjjzwXCn/YV/9/2oVzfe3y//wAHRChgkrHgw6W5ni2KA1HsSDslHhyiTcX+chsrKW+rzkWeUKwJj7awiFUoqxdaz1YW7LRRWetSlkQPNQ+0t2uVp1uDByOaOmKU2kOGNki2zbHgHa+AdrwVXZ4hYSb+n2gjiqMoKlcCSCIJVAWTQeLXl9l7pDPKyEhUqMlAkSCUTFUJ+o9aVs9ZqaF7MWpcKoVJPySWZIsakk+m4qmVXtNcpMQU1FMy4xMDCqqqqqqqqqqqqqqqqqDulbbfgAABIkRAzTUAM6WGMxeIDRKLYi2OXHtWm1E/Fisgv2GuhN1Uz/+2DE6IAOpTNDrSRvadKfaD2mIZVBTUUzLjEwMFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVX/+1DE64BLyMMzrSURISUP5X2cJC1VVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV//sQxOoDxOQvGYwwRugAAD/AAAAEVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVU=",dd="data:audio/mpeg;base64,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6UjApYU9hBgqQtRQnh80swlatLKSU+p9Aj9ukpi8ErhiP6hHaRGLBIw06MmLSg4f3nKFPQWsp93SitJATfZI532/JQZd7nZLdeAAmkFSGkiAYxiR+LJLBqNMpStQJLDM//tgxP4AENFxS60YU+oIH+k1pI3lyV9FXZZyGjrONBYjJcNRagZzBxZJK8bCSRpI3OXllHSRNLQOJe6o2ZmXRpm/qqYiibJ7iiKKKEgqM8vEOu+9HiQkHDLohhlMmRJOkSY2/7Ik5mEtNAiLwFAMeLpWfUmTrIyxsXiQwiaEoFkSOJFfLxJ/Nai7xZpxFrEHYcllTEFNRTMuMTAwVVVVVVVVVRI3Y4nQAAFuXIMZDOBiYECGCXE9XAqAUsCMJRkq8rGUdcRSaZLFBorhuSBVVUxBTUUzLjEwMFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV//tgxPGADlVDReyYcamLkGe1nCQ1VVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV//swxP6ASpStNawkzmkXj+V9hhmUVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV//sQxOyBxUQtF4w9hCgJgCJUAAAFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVU=",pd="data:audio/mpeg;base64,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d43qzNXd5WubyB2PFVU+PCoeWxH+r+TWmozOlzmZnY2WqpVkxICwqgI1eHf/+2DE74AQPR1LrRhxKf+e6X2WGdRVXf//AA5R9xh1BEcainq3AhOTFR9bomhJ15siYKsaHxOZYApkVaSxkTRZWFRtmPaRXRFFC1FEi3YJCaequ1l7MlsUbtDLs7V1OvU2YqijSMPFQbP5wq+hrspAI3d3hoj/+AeBMoDdaisEgOGlTrNSyzF2huNBaGrlOXHTRYTEwciNGLoYtcLFHjSllnY7dLH7kUa3Hl+DbVBE3dv8akxBTUUzLjEwMKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqjWlBYAAUiFShDY02BH5KYk1cVQlAmCIiXJbSaEoaLUKOhqMeRDq2CV3/////1QBqrUz/+2DE5oAN0L1J7KRvaachZ3WsGD1BTUUzLjEwMFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVX/+1DE8gBL0KU57WEhqQsPJX2EmcVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV//sQxO6BxbwrDywxJIALAKIUMAAFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVU=",Ad="data:audio/mpeg;base64,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",md=""+new URL("gameover-C-iNyKY9.mp3",import.meta.url).href,gd=Object.assign({"./assets/voice/voice_1.mp3":zf,"./assets/voice/voice_10.mp3":kf,"./assets/voice/voice_11.mp3":Hf,"./assets/voice/voice_12.mp3":Wf,"./assets/voice/voice_13.mp3":Yf,"./assets/voice/voice_14.mp3":Qf,"./assets/voice/voice_15.mp3":Xf,"./assets/voice/voice_16.mp3":Kf,"./assets/voice/voice_17.mp3":Jf,"./assets/voice/voice_18.mp3":jf,"./assets/voice/voice_19.mp3":Zf,"./assets/voice/voice_2.mp3":$f,"./assets/voice/voice_20.mp3":td,"./assets/voice/voice_25.mp3":ed,"./assets/voice/voice_3.mp3":nd,"./assets/voice/voice_30.mp3":id,"./assets/voice/voice_4.mp3":Vd,"./assets/voice/voice_5.mp3":sd,"./assets/voice/voice_6.mp3":rd,"./assets/voice/voice_7.mp3":ad,"./assets/voice/voice_8.mp3":od,"./assets/voice/voice_9.mp3":ld,"./assets/voice/voice_combo1.mp3":cd,"./assets/voice/voice_combo2.mp3":hd,"./assets/voice/voice_combo3.mp3":ud});class vd{constructor(){this.ctx=null,this.isMuted=!1,this.isGameOver=!1,this.bgm=new Audio(qd),this.bgm.loop=!0,this.bgm.volume=.38,this.bgmStarted=!1,this.sfxUrls={flap1:fd,flap2:dd,flap3:pd,bonk:Ad,gameover:md},this.sfxAudio={};for(const[t,e]of Object.entries(this.sfxUrls)){const n=new Audio(e);n.preload="auto",this.sfxAudio[t]=n}this.buffers={},this.voiceClips={};for(const[t,e]of Object.entries(gd)){const n=t.match(/voice_(.*)\.mp3$/);if(n){const V=n[1],s=new Audio(e);s.preload="auto",this.voiceClips[V]=s}}}init(){if(!this.ctx){const t=window.AudioContext||window.webkitAudioContext;t&&(this.ctx=new t,this.loadAudioBuffers())}this.ctx&&this.ctx.state==="suspended"&&this.ctx.resume(),this.startBGM()}async loadAudioBuffers(){if(this.ctx)for(const[t,e]of Object.entries(this.sfxUrls))try{const V=await(await fetch(e)).arrayBuffer();this.buffers[t]=await this.ctx.decodeAudioData(V)}catch{}}startBGM(){this.isMuted||this.bgmStarted||this.bgm.play().then(()=>{this.bgmStarted=!0}).catch(()=>{})}pauseBGM(){this.bgm&&this.bgm.pause()}resumeBGM(){this.bgm&&!this.isMuted&&this.bgmStarted&&this.bgm.play().catch(()=>{})}setBGMVolume(t){this.bgm&&(this.bgm.volume=t)}playBuffer(t,e=.8,n=1){if(this.isMuted||!this.ctx||!t)return!1;try{const V=this.ctx.createBufferSource();V.buffer=t,V.playbackRate.setValueAtTime(n,this.ctx.currentTime);const s=this.ctx.createGain();return s.gain.setValueAtTime(e,this.ctx.currentTime),V.connect(s),s.connect(this.ctx.destination),V.start(0),!0}catch{return!1}}playAudioClone(t,e=.8,n=1){if(!(this.isMuted||!t))try{const V=t.cloneNode();V.volume=e,V.playbackRate=n,V.play().catch(()=>{})}catch{}}playFlap(){if(this.isMuted)return;this.init();const t=["flap1","flap2","flap3"],e=t[Math.floor(Math.random()*t.length)],n=.94+Math.random()*.12,V=.82;let s=!1;this.buffers[e]&&(s=this.playBuffer(this.buffers[e],V,n)),!s&&this.sfxAudio[e]&&this.playAudioClone(this.sfxAudio[e],V,n),this.ctx&&this.playProceduralWingAir()}playProceduralWingAir(){try{const t=this.ctx.currentTime,e=Math.floor(this.ctx.sampleRate*.12),n=this.ctx.createBuffer(1,e,this.ctx.sampleRate),V=n.getChannelData(0);for(let o=0;o<e;o++)V[o]=(Math.random()*2-1)*.45;const s=this.ctx.createBufferSource();s.buffer=n;const r=this.ctx.createBiquadFilter();r.type="bandpass",r.frequency.setValueAtTime(520,t),r.frequency.exponentialRampToValueAtTime(160,t+.11),r.Q.setValueAtTime(2.2,t);const a=this.ctx.createGain();a.gain.setValueAtTime(.01,t),a.gain.linearRampToValueAtTime(.35,t+.02),a.gain.exponentialRampToValueAtTime(.001,t+.12),s.connect(r),r.connect(a),a.connect(this.ctx.destination),s.start(t),s.stop(t+.12)}catch{}}playBonk(){if(this.isMuted)return;this.init(),this.setBGMVolume(.18),setTimeout(()=>{this.isGameOver||this.setBGMVolume(.38)},400);let t=!1;if(this.buffers.bonk&&(t=this.playBuffer(this.buffers.bonk,.95,.98+Math.random()*.04)),!t&&this.sfxAudio.bonk&&this.playAudioClone(this.sfxAudio.bonk,.95,1),this.ctx)try{const e=this.ctx.currentTime,n=this.ctx.createOscillator(),V=this.ctx.createGain();n.type="sawtooth",n.frequency.setValueAtTime(320,e),n.frequency.exponentialRampToValueAtTime(55,e+.28),V.gain.setValueAtTime(.45,e),V.gain.exponentialRampToValueAtTime(.001,e+.32),n.connect(V),V.connect(this.ctx.destination),n.start(e),n.stop(e+.32)}catch{}}playGameOver(){if(this.isMuted)return;this.init(),this.isGameOver=!0,this.setBGMVolume(.12);let t=!1;this.buffers.gameover&&(t=this.playBuffer(this.buffers.gameover,.92,1)),!t&&this.sfxAudio.gameover&&this.playAudioClone(this.sfxAudio.gameover,.92,1)}playCrash(){this.playBonk(),setTimeout(()=>{this.playGameOver()},240)}playScore(){if(!this.isMuted&&(this.init(),!!this.ctx))try{const t=this.ctx.currentTime,e=(n,V,s)=>{const r=this.ctx.createOscillator(),a=this.ctx.createGain();r.type="triangle",r.frequency.setValueAtTime(n,V),a.gain.setValueAtTime(.01,V),a.gain.linearRampToValueAtTime(.35,V+.02),a.gain.exponentialRampToValueAtTime(.001,V+s),r.connect(a),a.connect(this.ctx.destination),r.start(V),r.stop(V+s)};e(784,t,.22),e(1046.5,t+.08,.35)}catch{}}playAnnouncer(t){if(this.isMuted)return;this.init();let e=`${t}`;if(!this.voiceClips[e]){const V=["combo1","combo2","combo3",`${(t-1)%10+1}`];e=V[Math.floor(Math.random()*V.length)]}const n=this.voiceClips[e];n&&(this.setBGMVolume(.2),setTimeout(()=>{this.isGameOver||this.setBGMVolume(.38)},700),n.currentTime=0,n.volume=.95,n.play().catch(()=>{}))}}const me=new vd;class _d{constructor(t,e,n){this.camera=t,this.controller0=e,this.controller1=n,this.beakMesh=null,this.leftWing=null,this.rightWing=null,this.camWingLeft=null,this.camWingRight=null,this.leftFlapAnim=0,this.rightFlapAnim=0,this.leftFlex=0,this.rightFlex=0,this.createBeak(),this.createWings()}createBeak(){const t=new Ve,e=new Ye(.088,.32,4);e.rotateX(Math.PI/2),e.rotateY(Math.PI/4);const n=new ie({color:15965202,roughness:.28,metalness:.05,flatShading:!0}),V=new Tt(e,n);V.scale.set(1.15,.75,1.3),V.castShadow=!0,t.add(V);const s=new ze({color:9317376}),r=new gn(.007,6,6);r.scale(.8,1.4,1.6);const a=new Tt(r,s);a.position.set(-.024,.032,-.06),t.add(a);const o=new Tt(r,s);o.position.set(.024,.032,-.06),t.add(o),t.position.set(0,-.15,-.32),t.rotation.x=An.degToRad(-10),this.camera.add(t),this.beakMesh=t}createWingMesh(t){const e=new Ve,n=new Ve;e.add(n);const V=new ie({color:16777215,roughness:.25,metalness:.1,emissive:14678523,emissiveIntensity:.25,side:oe}),s=new ie({color:8312543,roughness:.3,metalness:.15,emissive:2270899,emissiveIntensity:.35,side:oe}),r=new ie({color:16777215,roughness:.2,emissive:16775781,emissiveIntensity:.35,side:oe}),a=5;for(let f=0;f<a;f++){const p=.36-f*.04,m=.09-f*.008,d=new Ye(m,p,4);d.rotateZ(t?Math.PI/2:-Math.PI/2),d.scale(1.2,.28,1);const u=f===0?s:f===1?V:f===2?r:V,E=new Tt(d,u),S=(t?1:-1)*(.12+f*.24);E.position.set((t?-1:1)*(.1+f*.07),-f*.024,-f*.038),E.rotation.z=S,E.rotation.y=(t?-1:1)*.15,E.castShadow=!0,n.add(E)}const o=new gn(.055,10,10);o.scale(1.3,.85,1.4);const l=new Tt(o,V);n.add(l);const c=new xV(.26,.028,8,24,Math.PI*.95),h=new ze({color:2282478,transparent:!0,opacity:.45,blending:Ui,side:oe,depthWrite:!1}),q=new Tt(c,h);return q.rotation.x=Math.PI/2,q.rotation.y=t?.3:-.3,q.position.set(t?-.16:.16,-.05,.05),n.add(q),e.userData={wingPivot:n,trailMesh:q},e}createWings(){this.leftWing=this.createWingMesh(!0),this.rightWing=this.createWingMesh(!1),this.leftWing.position.set(-.06,.02,.04),this.rightWing.position.set(.06,.02,.04),this.controller0&&this.controller0.add(this.leftWing),this.controller1&&this.controller1.add(this.rightWing),this.camWingLeft=this.createWingMesh(!0),this.camWingRight=this.createWingMesh(!1),this.camWingLeft.position.set(-.38,-.14,-.46),this.camWingLeft.scale.set(1.35,1.35,1.35),this.camWingRight.position.set(.38,-.14,-.46),this.camWingRight.scale.set(1.35,1.35,1.35),this.camera.add(this.camWingLeft),this.camera.add(this.camWingRight)}triggerFlapVisual(t){(t==="left"||t==="both")&&(this.leftFlapAnim=1),(t==="right"||t==="both")&&(this.rightFlapAnim=1)}update(t,e,n=!1,V=[0,0]){this.camWingLeft&&(this.camWingLeft.visible=!n),this.camWingRight&&(this.camWingRight.visible=!n),this.beakMesh&&(this.beakMesh.rotation.x=An.degToRad(-10)+e*.22);const s=An.clamp(-V[0]*.22,-.45,.55),r=An.clamp(-V[1]*.22,-.45,.55);this.leftFlex=An.lerp(this.leftFlex,s,t*12),this.rightFlex=An.lerp(this.rightFlex,r,t*12),this.leftFlapAnim>0&&(this.leftFlapAnim=Math.max(0,this.leftFlapAnim-t*4.2)),this.rightFlapAnim>0&&(this.rightFlapAnim=Math.max(0,this.rightFlapAnim-t*4.2));const a=Math.sin(this.leftFlapAnim*Math.PI)*.55,o=Math.sin(this.rightFlapAnim*Math.PI)*.55;if(this.leftWing&&this.leftWing.userData.wingPivot){const l=this.leftWing.userData.wingPivot;l.rotation.z=(this.leftFlex+a)*.6,l.rotation.x=-(this.leftFlex+a)*.4,this.leftWing.userData.trailMesh&&(this.leftWing.userData.trailMesh.material.opacity=Math.max(.2,Math.sin(this.leftFlapAnim*Math.PI)*.9))}if(this.rightWing&&this.rightWing.userData.wingPivot){const l=this.rightWing.userData.wingPivot;l.rotation.z=-(this.rightFlex+o)*.6,l.rotation.x=-(this.rightFlex+o)*.4,this.rightWing.userData.trailMesh&&(this.rightWing.userData.trailMesh.material.opacity=Math.max(.2,Math.sin(this.rightFlapAnim*Math.PI)*.9))}if(this.camWingLeft&&this.camWingLeft.userData.wingPivot){const l=this.camWingLeft.userData.wingPivot;l.rotation.z=a*.75,l.rotation.x=-a*.5}if(this.camWingRight&&this.camWingRight.userData.wingPivot){const l=this.camWingRight.userData.wingPivot;l.rotation.z=-o*.75,l.rotation.x=-o*.5}}}class Md{constructor(t){this.scene=t,this.pipes=[],this.pipePoolSize=10,this.spacingZ=20,this.gapHeight=3.9,this.pipeRadius=1.15,this.lipRadius=1.42,this.lipHeight=.6,this.pipeMat=new ie({color:5034295,roughness:.28,metalness:.08}),this.lipMat=new ie({color:4504882,roughness:.25,metalness:.1}),this.lipTrimMat=new ie({color:2600544,roughness:.3}),this.vineMat=new ie({color:1804854,roughness:.5,metalness:.05}),this.leafMat=new ie({color:3069299,roughness:.35,metalness:.05,side:oe}),this.ringMat=new ie({color:16753922,roughness:.18,metalness:.8,emissive:16753922,emissiveIntensity:.4}),this.starMat=new ie({color:16773632,roughness:.15,metalness:.6,emissive:16773632,emissiveIntensity:.6}),this.initPool()}createVines(t,e){const n=new Ve,V=[],s=2.8,r=36,a=this.pipeRadius+.035;for(let q=0;q<=r;q++){const f=q/r,p=f*s*Math.PI*2,m=t?f*12+.6:-f*12-.6,d=Math.cos(p)*a,u=Math.sin(p)*a;V.push(new R(d,m,u))}const o=new Za(V),l=new ir(o,32,.045,6,!1),c=new Tt(l,this.vineMat);c.castShadow=!0,n.add(c);const h=new Ye(.16,.42,3);h.scale(1.4,.25,1);for(let q=2;q<V.length-2;q+=3){const f=V[q],p=new Tt(h,this.leafMat);p.position.copy(f),p.lookAt(f.x*2,f.y+.15,f.z*2),p.rotation.z+=(Math.random()-.5)*.8,p.castShadow=!0,n.add(p)}return n}createSinglePipe(t,e){const n=new Ve,V=new Mn(this.pipeRadius,this.pipeRadius,e,28),s=new Tt(V,this.pipeMat);s.castShadow=!0,s.receiveShadow=!0;const r=new Mn(this.lipRadius,this.lipRadius,this.lipHeight,28),a=new Tt(r,this.lipMat);a.castShadow=!0,a.receiveShadow=!0;const o=new Mn(this.pipeRadius*.96,this.pipeRadius*.96,.05,24),l=new Tt(o,this.lipTrimMat);t?(s.position.y=e/2,a.position.y=this.lipHeight/2,l.position.y=.02):(s.position.y=-e/2,a.position.y=-this.lipHeight/2,l.position.y=-.02),n.add(s),n.add(a),n.add(l);const c=this.createVines(t,e);return n.add(c),n}createRing(){const t=new Ve,e=new xV(.85,.09,14,32),n=new Tt(e,this.ringMat);n.castShadow=!0,t.add(n);const V=new Ve;for(let s=0;s<2;s++){const r=new Ye(.32,.65,4);r.scale(1,1,.3);const a=new Tt(r,this.starMat),o=new Tt(r,this.starMat);o.rotation.z=Math.PI;const l=new Ve;l.add(a),l.add(o),l.rotation.z=s*Math.PI/2,V.add(l)}return t.add(V),t}initPool(){for(let t=0;t<this.pipePoolSize;t++){const e=new Ve,n=this.createSinglePipe(!0,25),V=this.createSinglePipe(!1,25),s=this.createRing();e.add(n),e.add(V),e.add(s),this.scene.add(e);const r={group:e,topPipe:n,bottomPipe:V,ring:s,gapY:5,scored:!1,ringCollected:!1};this.pipes.push(r)}}reset(t=-18){let e=t;for(let n=0;n<this.pipes.length;n++){const V=this.pipes[n],s=3.6+Math.random()*4.4;this.positionPipePair(V,e,s),e-=this.spacingZ}}positionPipePair(t,e,n){t.gapY=n,t.scored=!1,t.ringCollected=!1,t.group.position.set(0,0,e);const V=n-this.gapHeight/2;t.bottomPipe.position.y=V;const s=n+this.gapHeight/2;t.topPipe.position.y=s,t.ring.position.set(0,n,0),t.ring.visible=!0,t.ring.scale.set(1,1,1)}update(t,e,n){let V=0;for(let s=0;s<this.pipes.length;s++)this.pipes[s].group.position.z<V&&(V=this.pipes[s].group.position.z);for(let s=0;s<this.pipes.length;s++){const r=this.pipes[s],a=r.group.position.z;if(r.ring.visible&&(r.ring.rotation.y+=t*2.8,r.ring.rotation.z+=t*1.4),!r.scored&&e<=a&&(r.scored=!0,r.ringCollected=!0,r.ring.visible=!1,n&&n()),a>e+12){const o=V-this.spacingZ,l=3.6+Math.random()*4.4;this.positionPipePair(r,o,l),V=o}}}checkCollision(t,e=.38){if(t.y<=e+.1)return{hit:!0,cause:"ground"};if(t.y>=16)return{hit:!0,cause:"ceiling"};for(let n=0;n<this.pipes.length;n++){const V=this.pipes[n],s=V.group.position.z,r=Math.abs(t.z-s),a=this.pipeRadius+e;if(r<a){const o=Math.abs(t.x);if(o*o+r*r<a*a){const c=V.gapY-this.gapHeight/2,h=V.gapY+this.gapHeight/2;if(t.y-e<c)return{hit:!0,cause:"pipe_bottom"};if(t.y+e>h)return{hit:!0,cause:"pipe_top"}}}}return{hit:!1}}}class xd{constructor(t){this.scene=t,this.clouds=[],this.islands=[],this.windmills=[],this.bgBirds=[],this.leafParticles=null,this.sparkleParticles=null,this.sunRays=null,this.createSkyDome(),this.createSunAndLighting(),this.createGround(),this.createFloatingIslands(),this.createSmilingClouds(),this.createBackgroundBirds(),this.createSwirlingParticles()}createSkyDome(){const t=document.createElement("canvas");t.width=16,t.height=256;const e=t.getContext("2d"),n=e.createLinearGradient(0,0,0,256);n.addColorStop(0,"#1da2d8"),n.addColorStop(.35,"#56ccf2"),n.addColorStop(.65,"#fbc531"),n.addColorStop(.88,"#fa8231"),n.addColorStop(1,"#eb3b5a"),e.fillStyle=n,e.fillRect(0,0,16,256);const V=new ii(t);V.magFilter=Ee,V.minFilter=Ee;const s=new gn(220,32,24),r=new ze({map:V,side:_e,fog:!1});this.skyDome=new Tt(s,r),this.scene.add(this.skyDome),this.scene.fog=new tr(16500017,.0075)}createSunAndLighting(){const t=new Bf(16775910,5034295,.95);this.scene.add(t);const e=new Of(16773573,1.4);e.position.set(10,28,-40),e.castShadow=!0,e.shadow.mapSize.width=1024,e.shadow.mapSize.height=1024,e.shadow.camera.near=.5,e.shadow.camera.far=120,e.shadow.camera.left=-30,e.shadow.camera.right=30,e.shadow.camera.top=30,e.shadow.camera.bottom=-30,this.scene.add(e);const n=new nr(16,32),V=new ze({color:16774328,transparent:!0,opacity:.85,side:oe});this.sunMesh=new Tt(n,V),this.sunMesh.position.set(0,16,-170),this.scene.add(this.sunMesh);const s=new Ve,r=new Qe(12,140),a=new ze({color:16775904,transparent:!0,opacity:.12,side:oe,blending:Ui,depthWrite:!1});for(let o=0;o<8;o++){const l=new Tt(r,a);l.rotation.z=o*Math.PI/8,s.add(l)}s.position.set(0,16,-168),this.scene.add(s),this.sunRays=s}createGround(){const t=new Ve,e=document.createElement("canvas");e.width=128,e.height=128;const n=e.getContext("2d");n.fillStyle="#78e08f",n.fillRect(0,0,128,128),n.fillStyle="#38ada9",n.fillRect(0,0,64,64),n.fillRect(64,64,64,64),n.strokeStyle="#fad390",n.lineWidth=6,n.strokeRect(0,0,128,128);const V=new ii(e);V.wrapS=Pi,V.wrapT=Pi,V.repeat.set(10,120);const s=new Qe(40,360);s.rotateX(-Math.PI/2);const r=new ie({map:V,roughness:.75,metalness:.05});this.groundMesh=new Tt(s,r),this.groundMesh.position.set(0,0,-100),this.groundMesh.receiveShadow=!0,t.add(this.groundMesh);const a=new On(40,12,360),o=new ie({color:15044134,roughness:.9}),l=new Tt(a,o);l.position.set(0,-6,-100),t.add(l),this.scene.add(t),this.groundGroup=t}createFloatingIslands(){const t=new ie({color:7921807,roughness:.6}),e=new ie({color:11998528,roughness:.9}),n=new ie({color:15044134,roughness:.7}),V=new ie({color:16777215,roughness:.3,side:oe}),s=(r,a,o,l=1)=>{const c=new Ve,h=new Mn(3.5*l,3.8*l,1.2*l,8),q=new Tt(h,t);q.castShadow=!0,c.add(q);const f=new Ye(3.8*l,5.5*l,7);f.rotateX(Math.PI);const p=new Tt(f,e);p.position.y=-2.8*l,p.castShadow=!0,c.add(p);const m=new Ve,d=new Mn(.7*l,.9*l,2.5*l,6),u=new Tt(d,n);u.position.y=1.8*l,m.add(u);const E=new Ye(1*l,1.2*l,6),S=new ie({color:11998528}),_=new Tt(E,S);_.position.y=3.6*l,m.add(_);const I=new Ve;I.position.set(0,2.7*l,.8*l);for(let b=0;b<4;b++){const M=new On(.25*l,2.2*l,.05*l),v=new Tt(M,V);v.position.y=1.1*l;const w=new Ve;w.rotation.z=b*Math.PI/2,w.add(v),I.add(w)}m.add(I),c.add(m);const y=new gn(.6*l,6,6),T=new Tt(y,t);T.position.set(1.8*l,.8*l,1*l),c.add(T),c.position.set(r,a,o),this.scene.add(c),this.islands.push({group:c,bladeHub:I,initialZ:o,speed:.5})};s(-26,11,-35,1.1),s(28,14,-65,1.3),s(-30,16,-110,1.4),s(32,9,-145,1),s(-25,12,-180,1.2),s(27,15,-220,1.3)}createSmilingFaceTexture(){const t=document.createElement("canvas");t.width=128,t.height=128;const e=t.getContext("2d");return e.fillStyle="#2c3e50",e.beginPath(),e.arc(38,52,9,0,Math.PI*2),e.arc(90,52,9,0,Math.PI*2),e.fill(),e.fillStyle="#ffffff",e.beginPath(),e.arc(41,49,3.5,0,Math.PI*2),e.arc(93,49,3.5,0,Math.PI*2),e.fill(),e.fillStyle="rgba(255, 107, 129, 0.55)",e.beginPath(),e.ellipse(30,68,11,7,0,0,Math.PI*2),e.ellipse(98,68,11,7,0,0,Math.PI*2),e.fill(),e.strokeStyle="#2c3e50",e.lineWidth=5,e.lineCap="round",e.beginPath(),e.arc(64,64,18,.15*Math.PI,.85*Math.PI,!1),e.stroke(),new ii(t)}createSmilingClouds(){const t=new ie({color:16777215,roughness:.25,metalness:0}),e=this.createSmilingFaceTexture(),n=new ze({map:e,transparent:!0,side:oe});for(let V=0;V<20;V++){const s=new Ve,r=new gn(1.2,8,8);r.scale(1.3,.85,1.1);const a=4+Math.floor(Math.random()*3);for(let h=0;h<a;h++){const q=new Tt(r,t);q.position.set((h-a/2)*1.5,(Math.random()-.5)*.4,(Math.random()-.5)*.5);const f=1+Math.random()*.7;q.scale.set(f,f*.85,f),s.add(q)}if(V%3===0){const h=new Tt(new Qe(1.6,1.6),n);h.position.set(0,0,1.25),s.add(h)}const o=(Math.random()-.5)*75,l=8.5+Math.random()*15,c=-Math.random()*220;s.position.set(o,l,c),s.userData={speed:.6+Math.random()*.9},this.scene.add(s),this.clouds.push(s)}}createBackgroundBirds(){const t=[5546239,16752451,10837738];for(let e=0;e<4;e++){const n=new Ve,V=t[e%t.length],s=new ie({color:V,roughness:.4}),r=new ie({color:16753922}),a=new ie({color:16777215,side:oe}),o=new Tt(new gn(.35,8,8),s);o.scale.set(1.1,.9,1.3),n.add(o);const l=new Tt(new Ye(.1,.22,4),r);l.rotation.x=Math.PI/2,l.position.set(0,0,.45),n.add(l);const c=new Ye(.18,.45,3);c.rotateZ(Math.PI/2);const h=new Tt(c,a);h.position.set(-.35,.05,0);const q=new Tt(c,a);q.position.set(.35,.05,0),q.rotation.z=Math.PI,n.add(h),n.add(q),n.position.set((e%2===0?-1:1)*(14+Math.random()*18),10+Math.random()*8,-40-e*35),this.scene.add(n),this.bgBirds.push({group:n,leftWing:h,rightWing:q,phase:e*1.5,speed:2.2})}}createSwirlingParticles(){const e=new xe,n=new Float32Array(45*3),V=new Float32Array(45);for(let d=0;d<45;d++)n[d*3+0]=(Math.random()-.5)*14,n[d*3+1]=1.5+Math.random()*11,n[d*3+2]=-Math.random()*45,V[d]=.22+Math.random()*.15;e.setAttribute("position",new De(n,3));const s=document.createElement("canvas");s.width=64,s.height=64;const r=s.getContext("2d");r.fillStyle="#2ed573",r.beginPath(),r.ellipse(32,32,24,12,Math.PI/4,0,Math.PI*2),r.fill(),r.strokeStyle="#26af5f",r.lineWidth=3,r.stroke();const a=new ii(s),o=new zs({map:a,size:.35,transparent:!0,opacity:.85,depthWrite:!1});this.leafParticles=new ha(e,o),this.scene.add(this.leafParticles);const l=35,c=new xe,h=new Float32Array(l*3);for(let d=0;d<l;d++)h[d*3+0]=(Math.random()-.5)*12,h[d*3+1]=2+Math.random()*10,h[d*3+2]=-Math.random()*35;c.setAttribute("position",new De(h,3));const q=document.createElement("canvas");q.width=64,q.height=64;const f=q.getContext("2d");f.fillStyle="#ffa502",f.beginPath(),f.arc(32,32,16,0,Math.PI*2),f.fill(),f.fillStyle="#ffffff",f.beginPath(),f.arc(32,32,8,0,Math.PI*2),f.fill();const p=new ii(q),m=new zs({map:p,size:.28,transparent:!0,opacity:.9,blending:Ui,depthWrite:!1});this.sparkleParticles=new ha(c,m),this.scene.add(this.sparkleParticles)}update(t,e){this.skyDome&&(this.skyDome.position.z=e-30,this.skyDome.position.x=0),this.sunRays&&(this.sunRays.rotation.z+=t*.08,this.sunRays.position.z=e-170,this.sunMesh&&(this.sunMesh.position.z=e-172)),this.groundGroup&&(this.groundGroup.position.z=Math.floor(e/10)*10);for(let n=0;n<this.islands.length;n++){const V=this.islands[n];V.bladeHub&&(V.bladeHub.rotation.z+=t*3.5),V.group.position.z>e+25&&(V.group.position.z=e-200-Math.random()*40)}for(let n=0;n<this.clouds.length;n++){const V=this.clouds[n];V.position.z+=V.userData.speed*t,V.position.z>e+20&&(V.position.z=e-180-Math.random()*40,V.position.x=(Math.random()-.5)*75)}for(let n=0;n<this.bgBirds.length;n++){const V=this.bgBirds[n];V.phase+=t*9;const s=Math.sin(V.phase)*.65;V.leftWing.rotation.z=s,V.rightWing.rotation.z=Math.PI-s,V.group.position.z-=V.speed*t,V.group.position.y+=Math.sin(V.phase*.4)*.012,V.group.position.z>e+15&&(V.group.position.z=e-150-Math.random()*30)}if(this.leafParticles){const n=this.leafParticles.geometry.attributes.position.array;for(let V=0;V<n.length/3;V++){const s=V*3;n[s+0]+=Math.sin(e*.1+V)*.02,n[s+1]-=t*.35,n[s+2]>e+5&&(n[s+0]=(Math.random()-.5)*14,n[s+1]=2+Math.random()*11,n[s+2]=e-35-Math.random()*15)}this.leafParticles.geometry.attributes.position.needsUpdate=!0}if(this.sparkleParticles){const n=this.sparkleParticles.geometry.attributes.position.array;for(let V=0;V<n.length/3;V++){const s=V*3;n[s+2]>e+5&&(n[s+0]=(Math.random()-.5)*12,n[s+1]=2+Math.random()*10,n[s+2]=e-30-Math.random()*10)}this.sparkleParticles.geometry.attributes.position.needsUpdate=!0}}}class Sd{constructor(t,e){this.scene=t,this.camera=e,this.scoreBillboard=null,this.readyBillboard=null,this.gameOverBillboard=null,this.currentScore=0,this.bestScore=0,this.createScoreDisplay(),this.createReadyDisplay(),this.createGameOverDisplay()}createCanvasTexture(t,e=512,n=256){const V=document.createElement("canvas");V.width=e,V.height=n;const s=V.getContext("2d");t(s,e,n);const r=new ii(V);return r.minFilter=Ee,r.magFilter=Ee,{texture:r,canvas:V,ctx:s}}createScoreDisplay(){const{texture:t,canvas:e,ctx:n}=this.createCanvasTexture((r,a,o)=>{this.drawScoreCanvas(r,a,o,0)},384,160);this.scoreCanvas=e,this.scoreCtx=n,this.scoreTexture=t;const V=new ze({map:t,transparent:!0,depthTest:!1,depthWrite:!1}),s=new Qe(1.4,.6);this.scoreMesh=new Tt(s,V),this.scoreMesh.renderOrder=999,this.scoreMesh.position.set(0,1.35,-3.2),this.camera.add(this.scoreMesh)}drawScoreCanvas(t,e,n,V){t.clearRect(0,0,e,n),t.fillStyle="rgba(10, 15, 30, 0.65)",t.beginPath(),t.roundRect(16,16,e-32,n-32,28),t.fill(),t.strokeStyle="#ffa502",t.lineWidth=5,t.stroke(),t.fillStyle="#0984e3",t.beginPath(),t.roundRect(32,28,60,32,10),t.fill(),t.strokeStyle="#ffffff",t.lineWidth=2,t.stroke(),t.font='bold 20px "Arial Black", Impact, sans-serif',t.fillStyle="#ffffff",t.textAlign="center",t.textBaseline="middle",t.fillText("VR",62,44);const s=V<10?`0${V}`:`${V}`;t.font='bold 72px "Arial Black", Impact, sans-serif',t.textAlign="center",t.textBaseline="middle",t.fillStyle="#2d3436",t.fillText(s,e/2+35,n/2+5);const r=t.createLinearGradient(0,20,0,n-20);r.addColorStop(0,"#ffeaa7"),r.addColorStop(.5,"#fbc531"),r.addColorStop(1,"#e17055"),t.fillStyle=r,t.fillText(s,e/2+35,n/2+2),t.strokeStyle="#ffffff",t.lineWidth=2.5,t.strokeText(s,e/2+35,n/2+2)}updateScore(t){this.currentScore=t,t>this.bestScore&&(this.bestScore=t),this.drawScoreCanvas(this.scoreCtx,this.scoreCanvas.width,this.scoreCanvas.height,t),this.scoreTexture.needsUpdate=!0}createReadyDisplay(){const{texture:t,canvas:e,ctx:n}=this.createCanvasTexture((r,a,o)=>{this.drawReadyCanvas(r,a,o)},768,480),V=new ze({map:t,transparent:!0,side:oe}),s=new Qe(3.6,2.25);this.readyMesh=new Tt(s,V),this.readyMesh.position.set(0,5,-3.8),this.scene.add(this.readyMesh)}drawReadyCanvas(t,e,n){t.clearRect(0,0,e,n),t.fillStyle="rgba(255, 255, 255, 0.92)",t.beginPath(),t.roundRect(24,20,e-48,n-40,40),t.fill(),t.strokeStyle="#ff793f",t.lineWidth=7,t.stroke(),t.strokeStyle="#00d2d3",t.lineWidth=3,t.strokeRect(34,30,e-68,n-60),t.fillStyle="#0984e3",t.beginPath(),t.roundRect(e/2-45,38,90,42,14),t.fill(),t.strokeStyle="#ffffff",t.lineWidth=3,t.stroke(),t.font='bold 26px "Arial Black", Impact, sans-serif',t.fillStyle="#ffffff",t.textAlign="center",t.fillText("VR",e/2,68),t.font='bold 28px "Arial Black", Impact, sans-serif',t.fillStyle="#2f3542",t.fillText("GET READY TO FLAP!",e/2,118);const V=(s,r,a,o,l,c)=>{t.font=`bold ${o}px "Arial Black", Impact, sans-serif`,t.textAlign="center",t.strokeStyle="#1e3799",t.lineWidth=14,t.lineJoin="round",t.strokeText(s,r,a+6),t.strokeStyle="#ffffff",t.lineWidth=9,t.strokeText(s,r,a);const h=t.createLinearGradient(0,a-o,0,a+10);h.addColorStop(0,l),h.addColorStop(1,c),t.fillStyle=h,t.fillText(s,r,a)};V("Floppy",e/2,215,105,"#48dbfb","#0984e3"),t.fillStyle="#70a1ff",t.beginPath(),t.ellipse(e/2-165,290,38,16,-.3,0,Math.PI*2),t.fill(),t.strokeStyle="#ffffff",t.lineWidth=3,t.stroke(),t.beginPath(),t.ellipse(e/2+165,290,38,16,.3,0,Math.PI*2),t.fill(),t.strokeStyle="#ffffff",t.lineWidth=3,t.stroke(),V("flight",e/2,310,95,"#fed330","#eb3b5a"),t.fillStyle="#2ed573",t.beginPath(),t.roundRect(e/2-240,365,480,54,27),t.fill(),t.strokeStyle="#ffffff",t.lineWidth=4,t.stroke(),t.font="bold 24px Arial, sans-serif",t.fillStyle="#ffffff",t.fillText("FLAP CONTROLLERS DOWN TO FLY!",e/2,400),t.font="16px Arial, sans-serif",t.fillStyle="#57606f",t.fillText("(or pull triggers / press Space)",e/2,442)}createGameOverDisplay(){const{texture:t,canvas:e,ctx:n}=this.createCanvasTexture((r,a,o)=>{this.drawGameOverCanvas(r,a,o,0,0)},640,380);this.gameOverCanvas=e,this.gameOverCtx=n,this.gameOverTexture=t;const V=new ze({map:t,transparent:!0,side:oe}),s=new Qe(3,1.78);this.gameOverMesh=new Tt(s,V),this.gameOverMesh.visible=!1,this.scene.add(this.gameOverMesh)}drawGameOverCanvas(t,e,n,V,s){t.clearRect(0,0,e,n),t.fillStyle="rgba(255, 255, 255, 0.95)",t.beginPath(),t.roundRect(20,20,e-40,n-40,36),t.fill(),t.strokeStyle="#eb4d4b",t.lineWidth=8,t.stroke(),t.font='bold 64px "Arial Black", Impact, sans-serif',t.textAlign="center",t.strokeStyle="#b71540",t.lineWidth=10,t.strokeText("💥 SPLAT! 💥",e/2,100),t.fillStyle="#ff793f",t.fillText("💥 SPLAT! 💥",e/2,98),t.fillStyle="rgba(47, 53, 66, 0.08)",t.beginPath(),t.roundRect(40,130,e-80,110,20),t.fill(),t.font='bold 36px "Arial Black", sans-serif',t.fillStyle="#2f3542",t.fillText(`SCORE: ${V}`,e/2,175),t.font="bold 28px Arial, sans-serif",t.fillStyle="#ff9f43",t.fillText(`BEST SCORE: ${s}`,e/2,220),t.fillStyle="#0984e3",t.beginPath(),t.roundRect(e/2-180,265,360,56,28),t.fill(),t.strokeStyle="#ffffff",t.lineWidth=4,t.stroke(),t.font='bold 26px "Arial Black", Impact, sans-serif',t.fillStyle="#ffffff",t.fillText("FLAP TO RETRY",e/2,302)}showReady(t){this.readyMesh.visible=!0,this.readyMesh.position.set(t.x,t.y,t.z-3.8),this.gameOverMesh.visible=!1}hideReady(){this.readyMesh.visible=!1}showGameOver(t){this.drawGameOverCanvas(this.gameOverCtx,this.gameOverCanvas.width,this.gameOverCanvas.height,this.currentScore,this.bestScore),this.gameOverTexture.needsUpdate=!0,this.gameOverMesh.position.set(t.x,t.y,t.z-3.2),this.gameOverMesh.visible=!0}hideGameOver(){this.gameOverMesh.visible=!1}}class Ed{constructor(){this.state="READY",this.score=0,this.forwardSpeed=7.5,this.baseForwardSpeed=7.5,this.gravity=-11.5,this.flapImpulse=4.8,this.velocityY=0,this.pitchAngle=0,this.flapCooldown=0,this.gameOverDelay=0,this.clock=new Gf,this.prevControllerY=[0,0],this.controllerVelocityY=[0,0],this.initScene(),this.initGameWorld(),this.setupInputs(),this.setupResize(),this.renderer.setAnimationLoop((t,e)=>this.renderLoop(t,e))}initScene(){this.container=document.getElementById("app"),this.scene=new _f,this.camera=new Pe(75,window.innerWidth/window.innerHeight,.1,350),this.playerRig=new Ve,this.playerRig.position.set(0,5,0),this.playerRig.add(this.camera),this.scene.add(this.playerRig),this.renderer=new vf({antialias:!0,powerPreference:"high-performance"}),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.xr.enabled=!0,this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=ma,this.container.appendChild(this.renderer.domElement);const t=fi.createButton(this.renderer);t.id="vr-button",t.addEventListener("click",()=>me.init()),document.body.appendChild(t),this.controller0=this.renderer.xr.getController(0),this.controller1=this.renderer.xr.getController(1),this.playerRig.add(this.controller0),this.playerRig.add(this.controller1);const e=()=>{me.init(),this.handleFlapInput("both")};this.controller0.addEventListener("selectstart",e),this.controller1.addEventListener("selectstart",e),this.controller0.addEventListener("squeezestart",e),this.controller1.addEventListener("squeezestart",e)}initGameWorld(){this.avatar=new _d(this.camera,this.controller0,this.controller1),this.pipeManager=new Md(this.scene),this.environment=new xd(this.scene),this.ui=new Sd(this.scene,this.camera),this.resetToReady()}setupInputs(){window.addEventListener("keydown",t=>{(t.code==="Space"||t.code==="KeyW"||t.code==="ArrowUp")&&(t.preventDefault(),me.init(),this.handleFlapInput("both"))}),window.addEventListener("pointerdown",t=>{me.init(),!(t.target&&t.target.id==="vr-button")&&this.handleFlapInput("both")})}setupResize(){window.addEventListener("resize",()=>{this.camera.aspect=window.innerWidth/window.innerHeight,this.camera.updateProjectionMatrix(),this.renderer.setSize(window.innerWidth,window.innerHeight)})}resetToReady(){this.state="READY",me.isGameOver=!1,this.score=0,this.velocityY=0,this.pitchAngle=0,this.forwardSpeed=this.baseForwardSpeed,this.flapCooldown=0,me.setBGMVolume(.38),this.playerRig.position.set(0,5,0),this.pipeManager.reset(-18),this.ui.updateScore(0),this.ui.showReady(this.playerRig.position),this.ui.hideGameOver()}startGame(){this.state="PLAYING",me.isGameOver=!1,me.startBGM(),this.ui.hideReady()}triggerHaptic(t=.6,e=80){const n=this.renderer.xr.getSession();if(n)for(const V of n.inputSources)V.gamepad&&V.gamepad.hapticActuators&&V.gamepad.hapticActuators[0]&&V.gamepad.hapticActuators[0].pulse(t,e)}handleFlapInput(t="both"){if(me.init(),this.state==="READY"){me.playFlap(),this.triggerHaptic(.65,80),this.avatar.triggerFlapVisual(t),this.velocityY=this.flapImpulse,this.startGame();return}if(this.state==="PLAYING"){if(this.flapCooldown>0)return;this.flapCooldown=.18,me.playFlap(),this.triggerHaptic(.7,85),this.avatar.triggerFlapVisual(t),this.velocityY=Math.max(this.velocityY*.25,0)+this.flapImpulse;return}this.state==="GAMEOVER"&&this.gameOverDelay<=0&&(me.playFlap(),this.triggerHaptic(.6,70),this.resetToReady())}handleGameOver(){this.state="GAMEOVER",this.gameOverDelay=.8,me.playBonk(),setTimeout(()=>{me.playGameOver()},240),this.triggerHaptic(1,250),this.ui.showGameOver(this.playerRig.position)}detectControllerFlaps(t){if(!this.renderer.xr.isPresenting)return;const e=[this.controller0,this.controller1];let n=!1,V=!1;for(let s=0;s<2;s++){const r=e[s];if(!r.visible)continue;const a=r.position.y,o=(a-this.prevControllerY[s])/Math.max(t,.001);this.controllerVelocityY[s]=o,this.prevControllerY[s]=a,o<-1.2&&this.flapCooldown<=0&&(s===0&&(n=!0),s===1&&(V=!0))}n&&V?this.handleFlapInput("both"):n?this.handleFlapInput("left"):V&&this.handleFlapInput("right")}renderLoop(t,e){const n=Math.min(this.clock.getDelta(),.1);if(this.flapCooldown>0&&(this.flapCooldown-=n),this.gameOverDelay>0&&(this.gameOverDelay-=n),this.detectControllerFlaps(n),this.state==="READY"){const V=5+Math.sin(t*.003)*.2;this.playerRig.position.y=V,this.pitchAngle=0}else if(this.state==="PLAYING"){this.playerRig.position.z-=this.forwardSpeed*n,this.playerRig.position.y+=this.velocityY*n+.5*this.gravity*n*n,this.velocityY+=this.gravity*n,this.velocityY=Math.max(this.velocityY,-9.5);const V=An.clamp(this.velocityY*.08,-.65,.45);this.pitchAngle=An.lerp(this.pitchAngle,V,n*8),this.pipeManager.update(n,this.playerRig.position.z,()=>{this.score++,this.forwardSpeed=this.baseForwardSpeed+Math.min(this.score*.1,4),me.playScore(),me.playAnnouncer(this.score),this.triggerHaptic(.4,60),this.ui.updateScore(this.score)}),this.pipeManager.checkCollision(this.playerRig.position).hit&&this.handleGameOver()}else this.state==="GAMEOVER"&&this.playerRig.position.y>.45&&(this.playerRig.position.y=Math.max(.45,this.playerRig.position.y-n*4));this.avatar.update(n,this.pitchAngle,this.renderer.xr.isPresenting,this.controllerVelocityY),this.environment.update(n,this.playerRig.position.z),this.renderer.render(this.scene,this.camera)}}window.addEventListener("DOMContentLoaded",()=>{window.gameInstance=new Ed});
