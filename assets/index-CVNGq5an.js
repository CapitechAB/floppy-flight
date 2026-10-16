(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const V of r.addedNodes)V.tagName==="LINK"&&V.rel==="modulepreload"&&n(V)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const kr="170",so=0,uV=1,ro=2,Aa=1,ma=2,nn=3,Mn=0,_e=1,oe=2,_n=0,ri=1,Pi=2,fV=3,dV=4,Vo=5,In=100,ao=101,oo=102,lo=103,co=104,ho=200,uo=201,fo=202,qo=203,ir=204,sr=205,po=206,Ao=207,mo=208,go=209,_o=210,vo=211,xo=212,Mo=213,So=214,rr=0,Vr=1,ar=2,oi=3,or=4,lr=5,cr=6,hr=7,ga=0,Eo=1,yo=2,vn=0,To=1,wo=2,Co=3,Ro=4,bo=5,Po=6,Uo=7,_a=300,li=301,ci=302,ur=303,fr=304,gs=306,Ui=1e3,Dn=1001,dr=1002,He=1003,Io=1004,Gi=1005,Ee=1006,Es=1007,Bn=1008,an=1009,va=1010,xa=1011,Ii=1012,Wr=1013,Fn=1014,sn=1015,Di=1016,Yr=1017,Qr=1018,hi=1020,Ma=35902,Sa=1021,Ea=1022,Ge=1023,ya=1024,Ta=1025,Vi=1026,ui=1027,wa=1028,Xr=1029,Ca=1030,Kr=1031,Jr=1033,hs=33776,us=33777,fs=33778,ds=33779,qr=35840,pr=35841,Ar=35842,mr=35843,gr=36196,_r=37492,vr=37496,xr=37808,Mr=37809,Sr=37810,Er=37811,yr=37812,Tr=37813,wr=37814,Cr=37815,Rr=37816,br=37817,Pr=37818,Ur=37819,Ir=37820,Lr=37821,qs=36492,Dr=36494,Br=36495,Ra=36283,Fr=36284,Nr=36285,Or=36286,Lo=3200,Do=3201,ba=0,Bo=1,mn="",Pe="srgb",qi="srgb-linear",_s="linear",Qt="srgb",zn=7680,qV=519,Fo=512,No=513,Oo=514,Pa=515,Go=516,zo=517,Ho=518,ko=519,pV=35044,AV="300 es",rn=2e3,As=2001;class pi{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,V=s.length;r<V;r++)s[r].call(this,t);t.target=null}}}const pe=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let mV=1234567;const wi=Math.PI/180,Li=180/Math.PI;function Ai(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(pe[i&255]+pe[i>>8&255]+pe[i>>16&255]+pe[i>>24&255]+"-"+pe[t&255]+pe[t>>8&255]+"-"+pe[t>>16&15|64]+pe[t>>24&255]+"-"+pe[e&63|128]+pe[e>>8&255]+"-"+pe[e>>16&255]+pe[e>>24&255]+pe[n&255]+pe[n>>8&255]+pe[n>>16&255]+pe[n>>24&255]).toLowerCase()}function de(i,t,e){return Math.max(t,Math.min(e,i))}function jr(i,t){return(i%t+t)%t}function Wo(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function Yo(i,t,e){return i!==t?(e-i)/(t-i):0}function Ci(i,t,e){return(1-e)*i+e*t}function Qo(i,t,e,n){return Ci(i,t,1-Math.exp(-e*n))}function Xo(i,t=1){return t-Math.abs(jr(i,t*2)-t)}function Ko(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function Jo(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function jo(i,t){return i+Math.floor(Math.random()*(t-i+1))}function Zo(i,t){return i+Math.random()*(t-i)}function $o(i){return i*(.5-Math.random())}function tl(i){i!==void 0&&(mV=i);let t=mV+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function el(i){return i*wi}function nl(i){return i*Li}function il(i){return(i&i-1)===0&&i!==0}function sl(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function rl(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Vl(i,t,e,n,s){const r=Math.cos,V=Math.sin,a=r(e/2),o=V(e/2),l=r((t+n)/2),c=V((t+n)/2),h=r((t-n)/2),f=V((t-n)/2),d=r((n-t)/2),p=V((n-t)/2);switch(s){case"XYX":i.set(a*c,o*h,o*f,a*l);break;case"YZY":i.set(o*f,a*c,o*h,a*l);break;case"ZXZ":i.set(o*h,o*f,a*c,a*l);break;case"XZX":i.set(a*c,o*p,o*d,a*l);break;case"YXY":i.set(o*d,a*c,o*p,a*l);break;case"ZYZ":i.set(o*p,o*d,a*c,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function ni(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function me(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const An={DEG2RAD:wi,RAD2DEG:Li,generateUUID:Ai,clamp:de,euclideanModulo:jr,mapLinear:Wo,inverseLerp:Yo,lerp:Ci,damp:Qo,pingpong:Xo,smoothstep:Ko,smootherstep:Jo,randInt:jo,randFloat:Zo,randFloatSpread:$o,seededRandom:tl,degToRad:el,radToDeg:nl,isPowerOfTwo:il,ceilPowerOfTwo:sl,floorPowerOfTwo:rl,setQuaternionFromProperEuler:Vl,normalize:me,denormalize:ni};class vt{constructor(t=0,e=0){vt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(de(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,V=this.y-t.y;return this.x=r*n-V*s+t.x,this.y=r*s+V*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class bt{constructor(t,e,n,s,r,V,a,o,l){bt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,V,a,o,l)}set(t,e,n,s,r,V,a,o,l){const c=this.elements;return c[0]=t,c[1]=s,c[2]=a,c[3]=e,c[4]=r,c[5]=o,c[6]=n,c[7]=V,c[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,V=n[0],a=n[3],o=n[6],l=n[1],c=n[4],h=n[7],f=n[2],d=n[5],p=n[8],m=s[0],q=s[3],u=s[6],E=s[1],S=s[4],v=s[7],L=s[2],y=s[5],T=s[8];return r[0]=V*m+a*E+o*L,r[3]=V*q+a*S+o*y,r[6]=V*u+a*v+o*T,r[1]=l*m+c*E+h*L,r[4]=l*q+c*S+h*y,r[7]=l*u+c*v+h*T,r[2]=f*m+d*E+p*L,r[5]=f*q+d*S+p*y,r[8]=f*u+d*v+p*T,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],V=t[4],a=t[5],o=t[6],l=t[7],c=t[8];return e*V*c-e*a*l-n*r*c+n*a*o+s*r*l-s*V*o}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],V=t[4],a=t[5],o=t[6],l=t[7],c=t[8],h=c*V-a*l,f=a*o-c*r,d=l*r-V*o,p=e*h+n*f+s*d;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);const m=1/p;return t[0]=h*m,t[1]=(s*l-c*n)*m,t[2]=(a*n-s*V)*m,t[3]=f*m,t[4]=(c*e-s*o)*m,t[5]=(s*r-a*e)*m,t[6]=d*m,t[7]=(n*o-l*e)*m,t[8]=(V*e-n*r)*m,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,V,a){const o=Math.cos(r),l=Math.sin(r);return this.set(n*o,n*l,-n*(o*V+l*a)+V+t,-s*l,s*o,-s*(-l*V+o*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(ys.makeScale(t,e)),this}rotate(t){return this.premultiply(ys.makeRotation(-t)),this}translate(t,e){return this.premultiply(ys.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const ys=new bt;function Ua(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function ms(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function al(){const i=ms("canvas");return i.style.display="block",i}const gV={};function yi(i){i in gV||(gV[i]=!0,console.warn(i))}function ol(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function ll(i){const t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function cl(i){const t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const zt={enabled:!0,workingColorSpace:qi,spaces:{},convert:function(i,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===Qt&&(i.r=Vn(i.r),i.g=Vn(i.g),i.b=Vn(i.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(i.applyMatrix3(this.spaces[t].toXYZ),i.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===Qt&&(i.r=ai(i.r),i.g=ai(i.g),i.b=ai(i.b))),i},fromWorkingColorSpace:function(i,t){return this.convert(i,this.workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===mn?_s:this.spaces[i].transfer},getLuminanceCoefficients:function(i,t=this.workingColorSpace){return i.fromArray(this.spaces[t].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,t,e){return i.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function Vn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ai(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const _V=[.64,.33,.3,.6,.15,.06],vV=[.2126,.7152,.0722],xV=[.3127,.329],MV=new bt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),SV=new bt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);zt.define({[qi]:{primaries:_V,whitePoint:xV,transfer:_s,toXYZ:MV,fromXYZ:SV,luminanceCoefficients:vV,workingColorSpaceConfig:{unpackColorSpace:Pe},outputColorSpaceConfig:{drawingBufferColorSpace:Pe}},[Pe]:{primaries:_V,whitePoint:xV,transfer:Qt,toXYZ:MV,fromXYZ:SV,luminanceCoefficients:vV,outputColorSpaceConfig:{drawingBufferColorSpace:Pe}}});let Hn;class hl{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Hn===void 0&&(Hn=ms("canvas")),Hn.width=t.width,Hn.height=t.height;const n=Hn.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Hn}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=ms("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let V=0;V<r.length;V++)r[V]=Vn(r[V]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Vn(e[n]/255)*255):e[n]=Vn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let ul=0;class Ia{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:ul++}),this.uuid=Ai(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let V=0,a=s.length;V<a;V++)s[V].isDataTexture?r.push(Ts(s[V].image)):r.push(Ts(s[V]))}else r=Ts(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function Ts(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?hl.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let fl=0;class ve extends pi{constructor(t=ve.DEFAULT_IMAGE,e=ve.DEFAULT_MAPPING,n=Dn,s=Dn,r=Ee,V=Bn,a=Ge,o=an,l=ve.DEFAULT_ANISOTROPY,c=mn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:fl++}),this.uuid=Ai(),this.name="",this.source=new Ia(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=V,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=o,this.offset=new vt(0,0),this.repeat=new vt(1,1),this.center=new vt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new bt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=c,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==_a)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ui:t.x=t.x-Math.floor(t.x);break;case Dn:t.x=t.x<0?0:1;break;case dr:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ui:t.y=t.y-Math.floor(t.y);break;case Dn:t.y=t.y<0?0:1;break;case dr:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}ve.DEFAULT_IMAGE=null;ve.DEFAULT_MAPPING=_a;ve.DEFAULT_ANISOTROPY=1;class re{constructor(t=0,e=0,n=0,s=1){re.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,V=t.elements;return this.x=V[0]*e+V[4]*n+V[8]*s+V[12]*r,this.y=V[1]*e+V[5]*n+V[9]*s+V[13]*r,this.z=V[2]*e+V[6]*n+V[10]*s+V[14]*r,this.w=V[3]*e+V[7]*n+V[11]*s+V[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const o=t.elements,l=o[0],c=o[4],h=o[8],f=o[1],d=o[5],p=o[9],m=o[2],q=o[6],u=o[10];if(Math.abs(c-f)<.01&&Math.abs(h-m)<.01&&Math.abs(p-q)<.01){if(Math.abs(c+f)<.1&&Math.abs(h+m)<.1&&Math.abs(p+q)<.1&&Math.abs(l+d+u-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const S=(l+1)/2,v=(d+1)/2,L=(u+1)/2,y=(c+f)/4,T=(h+m)/4,b=(p+q)/4;return S>v&&S>L?S<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(S),s=y/n,r=T/n):v>L?v<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),n=y/s,r=b/s):L<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(L),n=T/r,s=b/r),this.set(n,s,r,e),this}let E=Math.sqrt((q-p)*(q-p)+(h-m)*(h-m)+(f-c)*(f-c));return Math.abs(E)<.001&&(E=1),this.x=(q-p)/E,this.y=(h-m)/E,this.z=(f-c)/E,this.w=Math.acos((l+d+u-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class dl extends pi{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new re(0,0,t,e),this.scissorTest=!1,this.viewport=new re(0,0,t,e);const s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ee,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new ve(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const V=n.count;for(let a=0;a<V;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Ia(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Nn extends dl{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class La extends ve{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=He,this.minFilter=He,this.wrapR=Dn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class ql extends ve{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=He,this.minFilter=He,this.wrapR=Dn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Bi{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,V,a){let o=n[s+0],l=n[s+1],c=n[s+2],h=n[s+3];const f=r[V+0],d=r[V+1],p=r[V+2],m=r[V+3];if(a===0){t[e+0]=o,t[e+1]=l,t[e+2]=c,t[e+3]=h;return}if(a===1){t[e+0]=f,t[e+1]=d,t[e+2]=p,t[e+3]=m;return}if(h!==m||o!==f||l!==d||c!==p){let q=1-a;const u=o*f+l*d+c*p+h*m,E=u>=0?1:-1,S=1-u*u;if(S>Number.EPSILON){const L=Math.sqrt(S),y=Math.atan2(L,u*E);q=Math.sin(q*y)/L,a=Math.sin(a*y)/L}const v=a*E;if(o=o*q+f*v,l=l*q+d*v,c=c*q+p*v,h=h*q+m*v,q===1-a){const L=1/Math.sqrt(o*o+l*l+c*c+h*h);o*=L,l*=L,c*=L,h*=L}}t[e]=o,t[e+1]=l,t[e+2]=c,t[e+3]=h}static multiplyQuaternionsFlat(t,e,n,s,r,V){const a=n[s],o=n[s+1],l=n[s+2],c=n[s+3],h=r[V],f=r[V+1],d=r[V+2],p=r[V+3];return t[e]=a*p+c*h+o*d-l*f,t[e+1]=o*p+c*f+l*h-a*d,t[e+2]=l*p+c*d+a*f-o*h,t[e+3]=c*p-a*h-o*f-l*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,V=t._order,a=Math.cos,o=Math.sin,l=a(n/2),c=a(s/2),h=a(r/2),f=o(n/2),d=o(s/2),p=o(r/2);switch(V){case"XYZ":this._x=f*c*h+l*d*p,this._y=l*d*h-f*c*p,this._z=l*c*p+f*d*h,this._w=l*c*h-f*d*p;break;case"YXZ":this._x=f*c*h+l*d*p,this._y=l*d*h-f*c*p,this._z=l*c*p-f*d*h,this._w=l*c*h+f*d*p;break;case"ZXY":this._x=f*c*h-l*d*p,this._y=l*d*h+f*c*p,this._z=l*c*p+f*d*h,this._w=l*c*h-f*d*p;break;case"ZYX":this._x=f*c*h-l*d*p,this._y=l*d*h+f*c*p,this._z=l*c*p-f*d*h,this._w=l*c*h+f*d*p;break;case"YZX":this._x=f*c*h+l*d*p,this._y=l*d*h+f*c*p,this._z=l*c*p-f*d*h,this._w=l*c*h-f*d*p;break;case"XZY":this._x=f*c*h-l*d*p,this._y=l*d*h-f*c*p,this._z=l*c*p+f*d*h,this._w=l*c*h+f*d*p;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+V)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],V=e[1],a=e[5],o=e[9],l=e[2],c=e[6],h=e[10],f=n+a+h;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(c-o)*d,this._y=(r-l)*d,this._z=(V-s)*d}else if(n>a&&n>h){const d=2*Math.sqrt(1+n-a-h);this._w=(c-o)/d,this._x=.25*d,this._y=(s+V)/d,this._z=(r+l)/d}else if(a>h){const d=2*Math.sqrt(1+a-n-h);this._w=(r-l)/d,this._x=(s+V)/d,this._y=.25*d,this._z=(o+c)/d}else{const d=2*Math.sqrt(1+h-n-a);this._w=(V-s)/d,this._x=(r+l)/d,this._y=(o+c)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(de(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,V=t._w,a=e._x,o=e._y,l=e._z,c=e._w;return this._x=n*c+V*a+s*l-r*o,this._y=s*c+V*o+r*a-n*l,this._z=r*c+V*l+n*o-s*a,this._w=V*c-n*a-s*o-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,r=this._z,V=this._w;let a=V*t._w+n*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=V,this._x=n,this._y=s,this._z=r,this;const o=1-a*a;if(o<=Number.EPSILON){const d=1-e;return this._w=d*V+e*this._w,this._x=d*n+e*this._x,this._y=d*s+e*this._y,this._z=d*r+e*this._z,this.normalize(),this}const l=Math.sqrt(o),c=Math.atan2(l,a),h=Math.sin((1-e)*c)/l,f=Math.sin(e*c)/l;return this._w=V*h+this._w*f,this._x=n*h+this._x*f,this._y=s*h+this._y*f,this._z=r*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class R{constructor(t=0,e=0,n=0){R.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(EV.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(EV.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,V=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*V,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*V,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*V,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,V=t.y,a=t.z,o=t.w,l=2*(V*s-a*n),c=2*(a*e-r*s),h=2*(r*n-V*e);return this.x=e+o*l+V*h-a*c,this.y=n+o*c+a*l-r*h,this.z=s+o*h+r*c-V*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,V=e.x,a=e.y,o=e.z;return this.x=s*o-r*a,this.y=r*V-n*o,this.z=n*a-s*V,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return ws.copy(this).projectOnVector(t),this.sub(ws)}reflect(t){return this.sub(ws.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(de(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ws=new R,EV=new Bi;class Fi{constructor(t=new R(1/0,1/0,1/0),e=new R(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Be.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Be.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Be.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let V=0,a=r.count;V<a;V++)t.isMesh===!0?t.getVertexPosition(V,Be):Be.fromBufferAttribute(r,V),Be.applyMatrix4(t.matrixWorld),this.expandByPoint(Be);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),zi.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),zi.copy(n.boundingBox)),zi.applyMatrix4(t.matrixWorld),this.union(zi)}const s=t.children;for(let r=0,V=s.length;r<V;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Be),Be.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(xi),Hi.subVectors(this.max,xi),kn.subVectors(t.a,xi),Wn.subVectors(t.b,xi),Yn.subVectors(t.c,xi),hn.subVectors(Wn,kn),un.subVectors(Yn,Wn),yn.subVectors(kn,Yn);let e=[0,-hn.z,hn.y,0,-un.z,un.y,0,-yn.z,yn.y,hn.z,0,-hn.x,un.z,0,-un.x,yn.z,0,-yn.x,-hn.y,hn.x,0,-un.y,un.x,0,-yn.y,yn.x,0];return!Cs(e,kn,Wn,Yn,Hi)||(e=[1,0,0,0,1,0,0,0,1],!Cs(e,kn,Wn,Yn,Hi))?!1:(ki.crossVectors(hn,un),e=[ki.x,ki.y,ki.z],Cs(e,kn,Wn,Yn,Hi))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Be).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Be).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(je[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),je[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),je[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),je[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),je[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),je[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),je[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),je[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(je),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const je=[new R,new R,new R,new R,new R,new R,new R,new R],Be=new R,zi=new Fi,kn=new R,Wn=new R,Yn=new R,hn=new R,un=new R,yn=new R,xi=new R,Hi=new R,ki=new R,Tn=new R;function Cs(i,t,e,n,s){for(let r=0,V=i.length-3;r<=V;r+=3){Tn.fromArray(i,r);const a=s.x*Math.abs(Tn.x)+s.y*Math.abs(Tn.y)+s.z*Math.abs(Tn.z),o=t.dot(Tn),l=e.dot(Tn),c=n.dot(Tn);if(Math.max(-Math.max(o,l,c),Math.min(o,l,c))>a)return!1}return!0}const pl=new Fi,Mi=new R,Rs=new R;class vs{constructor(t=new R,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):pl.setFromPoints(t).getCenter(n);let s=0;for(let r=0,V=t.length;r<V;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Mi.subVectors(t,this.center);const e=Mi.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Mi,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Rs.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Mi.copy(t.center).add(Rs)),this.expandByPoint(Mi.copy(t.center).sub(Rs))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ze=new R,bs=new R,Wi=new R,fn=new R,Ps=new R,Yi=new R,Us=new R;class Da{constructor(t=new R,e=new R(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Ze)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Ze.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Ze.copy(this.origin).addScaledVector(this.direction,e),Ze.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){bs.copy(t).add(e).multiplyScalar(.5),Wi.copy(e).sub(t).normalize(),fn.copy(this.origin).sub(bs);const r=t.distanceTo(e)*.5,V=-this.direction.dot(Wi),a=fn.dot(this.direction),o=-fn.dot(Wi),l=fn.lengthSq(),c=Math.abs(1-V*V);let h,f,d,p;if(c>0)if(h=V*o-a,f=V*a-o,p=r*c,h>=0)if(f>=-p)if(f<=p){const m=1/c;h*=m,f*=m,d=h*(h+V*f+2*a)+f*(V*h+f+2*o)+l}else f=r,h=Math.max(0,-(V*f+a)),d=-h*h+f*(f+2*o)+l;else f=-r,h=Math.max(0,-(V*f+a)),d=-h*h+f*(f+2*o)+l;else f<=-p?(h=Math.max(0,-(-V*r+a)),f=h>0?-r:Math.min(Math.max(-r,-o),r),d=-h*h+f*(f+2*o)+l):f<=p?(h=0,f=Math.min(Math.max(-r,-o),r),d=f*(f+2*o)+l):(h=Math.max(0,-(V*r+a)),f=h>0?r:Math.min(Math.max(-r,-o),r),d=-h*h+f*(f+2*o)+l);else f=V>0?-r:r,h=Math.max(0,-(V*f+a)),d=-h*h+f*(f+2*o)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(bs).addScaledVector(Wi,f),d}intersectSphere(t,e){Ze.subVectors(t.center,this.origin);const n=Ze.dot(this.direction),s=Ze.dot(Ze)-n*n,r=t.radius*t.radius;if(s>r)return null;const V=Math.sqrt(r-s),a=n-V,o=n+V;return o<0?null:a<0?this.at(o,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,V,a,o;const l=1/this.direction.x,c=1/this.direction.y,h=1/this.direction.z,f=this.origin;return l>=0?(n=(t.min.x-f.x)*l,s=(t.max.x-f.x)*l):(n=(t.max.x-f.x)*l,s=(t.min.x-f.x)*l),c>=0?(r=(t.min.y-f.y)*c,V=(t.max.y-f.y)*c):(r=(t.max.y-f.y)*c,V=(t.min.y-f.y)*c),n>V||r>s||((r>n||isNaN(n))&&(n=r),(V<s||isNaN(s))&&(s=V),h>=0?(a=(t.min.z-f.z)*h,o=(t.max.z-f.z)*h):(a=(t.max.z-f.z)*h,o=(t.min.z-f.z)*h),n>o||a>s)||((a>n||n!==n)&&(n=a),(o<s||s!==s)&&(s=o),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Ze)!==null}intersectTriangle(t,e,n,s,r){Ps.subVectors(e,t),Yi.subVectors(n,t),Us.crossVectors(Ps,Yi);let V=this.direction.dot(Us),a;if(V>0){if(s)return null;a=1}else if(V<0)a=-1,V=-V;else return null;fn.subVectors(this.origin,t);const o=a*this.direction.dot(Yi.crossVectors(fn,Yi));if(o<0)return null;const l=a*this.direction.dot(Ps.cross(fn));if(l<0||o+l>V)return null;const c=-a*fn.dot(Us);return c<0?null:this.at(c/V,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class te{constructor(t,e,n,s,r,V,a,o,l,c,h,f,d,p,m,q){te.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,V,a,o,l,c,h,f,d,p,m,q)}set(t,e,n,s,r,V,a,o,l,c,h,f,d,p,m,q){const u=this.elements;return u[0]=t,u[4]=e,u[8]=n,u[12]=s,u[1]=r,u[5]=V,u[9]=a,u[13]=o,u[2]=l,u[6]=c,u[10]=h,u[14]=f,u[3]=d,u[7]=p,u[11]=m,u[15]=q,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new te().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/Qn.setFromMatrixColumn(t,0).length(),r=1/Qn.setFromMatrixColumn(t,1).length(),V=1/Qn.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*V,e[9]=n[9]*V,e[10]=n[10]*V,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,V=Math.cos(n),a=Math.sin(n),o=Math.cos(s),l=Math.sin(s),c=Math.cos(r),h=Math.sin(r);if(t.order==="XYZ"){const f=V*c,d=V*h,p=a*c,m=a*h;e[0]=o*c,e[4]=-o*h,e[8]=l,e[1]=d+p*l,e[5]=f-m*l,e[9]=-a*o,e[2]=m-f*l,e[6]=p+d*l,e[10]=V*o}else if(t.order==="YXZ"){const f=o*c,d=o*h,p=l*c,m=l*h;e[0]=f+m*a,e[4]=p*a-d,e[8]=V*l,e[1]=V*h,e[5]=V*c,e[9]=-a,e[2]=d*a-p,e[6]=m+f*a,e[10]=V*o}else if(t.order==="ZXY"){const f=o*c,d=o*h,p=l*c,m=l*h;e[0]=f-m*a,e[4]=-V*h,e[8]=p+d*a,e[1]=d+p*a,e[5]=V*c,e[9]=m-f*a,e[2]=-V*l,e[6]=a,e[10]=V*o}else if(t.order==="ZYX"){const f=V*c,d=V*h,p=a*c,m=a*h;e[0]=o*c,e[4]=p*l-d,e[8]=f*l+m,e[1]=o*h,e[5]=m*l+f,e[9]=d*l-p,e[2]=-l,e[6]=a*o,e[10]=V*o}else if(t.order==="YZX"){const f=V*o,d=V*l,p=a*o,m=a*l;e[0]=o*c,e[4]=m-f*h,e[8]=p*h+d,e[1]=h,e[5]=V*c,e[9]=-a*c,e[2]=-l*c,e[6]=d*h+p,e[10]=f-m*h}else if(t.order==="XZY"){const f=V*o,d=V*l,p=a*o,m=a*l;e[0]=o*c,e[4]=-h,e[8]=l*c,e[1]=f*h+m,e[5]=V*c,e[9]=d*h-p,e[2]=p*h-d,e[6]=a*c,e[10]=m*h+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Al,t,ml)}lookAt(t,e,n){const s=this.elements;return Te.subVectors(t,e),Te.lengthSq()===0&&(Te.z=1),Te.normalize(),dn.crossVectors(n,Te),dn.lengthSq()===0&&(Math.abs(n.z)===1?Te.x+=1e-4:Te.z+=1e-4,Te.normalize(),dn.crossVectors(n,Te)),dn.normalize(),Qi.crossVectors(Te,dn),s[0]=dn.x,s[4]=Qi.x,s[8]=Te.x,s[1]=dn.y,s[5]=Qi.y,s[9]=Te.y,s[2]=dn.z,s[6]=Qi.z,s[10]=Te.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,V=n[0],a=n[4],o=n[8],l=n[12],c=n[1],h=n[5],f=n[9],d=n[13],p=n[2],m=n[6],q=n[10],u=n[14],E=n[3],S=n[7],v=n[11],L=n[15],y=s[0],T=s[4],b=s[8],x=s[12],_=s[1],w=s[5],O=s[9],N=s[13],H=s[2],K=s[6],k=s[10],$=s[14],z=s[3],it=s[7],lt=s[11],gt=s[15];return r[0]=V*y+a*_+o*H+l*z,r[4]=V*T+a*w+o*K+l*it,r[8]=V*b+a*O+o*k+l*lt,r[12]=V*x+a*N+o*$+l*gt,r[1]=c*y+h*_+f*H+d*z,r[5]=c*T+h*w+f*K+d*it,r[9]=c*b+h*O+f*k+d*lt,r[13]=c*x+h*N+f*$+d*gt,r[2]=p*y+m*_+q*H+u*z,r[6]=p*T+m*w+q*K+u*it,r[10]=p*b+m*O+q*k+u*lt,r[14]=p*x+m*N+q*$+u*gt,r[3]=E*y+S*_+v*H+L*z,r[7]=E*T+S*w+v*K+L*it,r[11]=E*b+S*O+v*k+L*lt,r[15]=E*x+S*N+v*$+L*gt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],V=t[1],a=t[5],o=t[9],l=t[13],c=t[2],h=t[6],f=t[10],d=t[14],p=t[3],m=t[7],q=t[11],u=t[15];return p*(+r*o*h-s*l*h-r*a*f+n*l*f+s*a*d-n*o*d)+m*(+e*o*d-e*l*f+r*V*f-s*V*d+s*l*c-r*o*c)+q*(+e*l*h-e*a*d-r*V*h+n*V*d+r*a*c-n*l*c)+u*(-s*a*c-e*o*h+e*a*f+s*V*h-n*V*f+n*o*c)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],V=t[4],a=t[5],o=t[6],l=t[7],c=t[8],h=t[9],f=t[10],d=t[11],p=t[12],m=t[13],q=t[14],u=t[15],E=h*q*l-m*f*l+m*o*d-a*q*d-h*o*u+a*f*u,S=p*f*l-c*q*l-p*o*d+V*q*d+c*o*u-V*f*u,v=c*m*l-p*h*l+p*a*d-V*m*d-c*a*u+V*h*u,L=p*h*o-c*m*o-p*a*f+V*m*f+c*a*q-V*h*q,y=e*E+n*S+s*v+r*L;if(y===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/y;return t[0]=E*T,t[1]=(m*f*r-h*q*r-m*s*d+n*q*d+h*s*u-n*f*u)*T,t[2]=(a*q*r-m*o*r+m*s*l-n*q*l-a*s*u+n*o*u)*T,t[3]=(h*o*r-a*f*r-h*s*l+n*f*l+a*s*d-n*o*d)*T,t[4]=S*T,t[5]=(c*q*r-p*f*r+p*s*d-e*q*d-c*s*u+e*f*u)*T,t[6]=(p*o*r-V*q*r-p*s*l+e*q*l+V*s*u-e*o*u)*T,t[7]=(V*f*r-c*o*r+c*s*l-e*f*l-V*s*d+e*o*d)*T,t[8]=v*T,t[9]=(p*h*r-c*m*r-p*n*d+e*m*d+c*n*u-e*h*u)*T,t[10]=(V*m*r-p*a*r+p*n*l-e*m*l-V*n*u+e*a*u)*T,t[11]=(c*a*r-V*h*r-c*n*l+e*h*l+V*n*d-e*a*d)*T,t[12]=L*T,t[13]=(c*m*s-p*h*s+p*n*f-e*m*f-c*n*q+e*h*q)*T,t[14]=(p*a*s-V*m*s-p*n*o+e*m*o+V*n*q-e*a*q)*T,t[15]=(V*h*s-c*a*s+c*n*o-e*h*o-V*n*f+e*a*f)*T,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,V=t.x,a=t.y,o=t.z,l=r*V,c=r*a;return this.set(l*V+n,l*a-s*o,l*o+s*a,0,l*a+s*o,c*a+n,c*o-s*V,0,l*o-s*a,c*o+s*V,r*o*o+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,V){return this.set(1,n,r,0,t,1,V,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,V=e._y,a=e._z,o=e._w,l=r+r,c=V+V,h=a+a,f=r*l,d=r*c,p=r*h,m=V*c,q=V*h,u=a*h,E=o*l,S=o*c,v=o*h,L=n.x,y=n.y,T=n.z;return s[0]=(1-(m+u))*L,s[1]=(d+v)*L,s[2]=(p-S)*L,s[3]=0,s[4]=(d-v)*y,s[5]=(1-(f+u))*y,s[6]=(q+E)*y,s[7]=0,s[8]=(p+S)*T,s[9]=(q-E)*T,s[10]=(1-(f+m))*T,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let r=Qn.set(s[0],s[1],s[2]).length();const V=Qn.set(s[4],s[5],s[6]).length(),a=Qn.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],Fe.copy(this);const l=1/r,c=1/V,h=1/a;return Fe.elements[0]*=l,Fe.elements[1]*=l,Fe.elements[2]*=l,Fe.elements[4]*=c,Fe.elements[5]*=c,Fe.elements[6]*=c,Fe.elements[8]*=h,Fe.elements[9]*=h,Fe.elements[10]*=h,e.setFromRotationMatrix(Fe),n.x=r,n.y=V,n.z=a,this}makePerspective(t,e,n,s,r,V,a=rn){const o=this.elements,l=2*r/(e-t),c=2*r/(n-s),h=(e+t)/(e-t),f=(n+s)/(n-s);let d,p;if(a===rn)d=-(V+r)/(V-r),p=-2*V*r/(V-r);else if(a===As)d=-V/(V-r),p=-V*r/(V-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return o[0]=l,o[4]=0,o[8]=h,o[12]=0,o[1]=0,o[5]=c,o[9]=f,o[13]=0,o[2]=0,o[6]=0,o[10]=d,o[14]=p,o[3]=0,o[7]=0,o[11]=-1,o[15]=0,this}makeOrthographic(t,e,n,s,r,V,a=rn){const o=this.elements,l=1/(e-t),c=1/(n-s),h=1/(V-r),f=(e+t)*l,d=(n+s)*c;let p,m;if(a===rn)p=(V+r)*h,m=-2*h;else if(a===As)p=r*h,m=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return o[0]=2*l,o[4]=0,o[8]=0,o[12]=-f,o[1]=0,o[5]=2*c,o[9]=0,o[13]=-d,o[2]=0,o[6]=0,o[10]=m,o[14]=-p,o[3]=0,o[7]=0,o[11]=0,o[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Qn=new R,Fe=new te,Al=new R(0,0,0),ml=new R(1,1,1),dn=new R,Qi=new R,Te=new R,yV=new te,TV=new Bi;class Xe{constructor(t=0,e=0,n=0,s=Xe.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],V=s[4],a=s[8],o=s[1],l=s[5],c=s[9],h=s[2],f=s[6],d=s[10];switch(e){case"XYZ":this._y=Math.asin(de(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-c,d),this._z=Math.atan2(-V,r)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-de(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(o,l)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(de(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-V,l)):(this._y=0,this._z=Math.atan2(o,r));break;case"ZYX":this._y=Math.asin(-de(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(o,r)):(this._x=0,this._z=Math.atan2(-V,l));break;case"YZX":this._z=Math.asin(de(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-c,l),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-de(V,-1,1)),Math.abs(V)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-c,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return yV.makeRotationFromQuaternion(t),this.setFromRotationMatrix(yV,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return TV.setFromEuler(this),this.setFromQuaternion(TV,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Xe.DEFAULT_ORDER="XYZ";class Ba{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let gl=0;const wV=new R,Xn=new Bi,$e=new te,Xi=new R,Si=new R,_l=new R,vl=new Bi,CV=new R(1,0,0),RV=new R(0,1,0),bV=new R(0,0,1),PV={type:"added"},xl={type:"removed"},Kn={type:"childadded",child:null},Is={type:"childremoved",child:null};class fe extends pi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:gl++}),this.uuid=Ai(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=fe.DEFAULT_UP.clone();const t=new R,e=new Xe,n=new Bi,s=new R(1,1,1);function r(){n.setFromEuler(e,!1)}function V(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(V),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new te},normalMatrix:{value:new bt}}),this.matrix=new te,this.matrixWorld=new te,this.matrixAutoUpdate=fe.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=fe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ba,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Xn.setFromAxisAngle(t,e),this.quaternion.multiply(Xn),this}rotateOnWorldAxis(t,e){return Xn.setFromAxisAngle(t,e),this.quaternion.premultiply(Xn),this}rotateX(t){return this.rotateOnAxis(CV,t)}rotateY(t){return this.rotateOnAxis(RV,t)}rotateZ(t){return this.rotateOnAxis(bV,t)}translateOnAxis(t,e){return wV.copy(t).applyQuaternion(this.quaternion),this.position.add(wV.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(CV,t)}translateY(t){return this.translateOnAxis(RV,t)}translateZ(t){return this.translateOnAxis(bV,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4($e.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Xi.copy(t):Xi.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Si.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?$e.lookAt(Si,Xi,this.up):$e.lookAt(Xi,Si,this.up),this.quaternion.setFromRotationMatrix($e),s&&($e.extractRotation(s.matrixWorld),Xn.setFromRotationMatrix($e),this.quaternion.premultiply(Xn.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(PV),Kn.child=t,this.dispatchEvent(Kn),Kn.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(xl),Is.child=t,this.dispatchEvent(Is),Is.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),$e.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),$e.multiply(t.parent.matrixWorld)),t.applyMatrix4($e),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(PV),Kn.child=t,this.dispatchEvent(Kn),Kn.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const V=this.children[n].getObjectByProperty(t,e);if(V!==void 0)return V}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,V=s.length;r<V;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Si,t,_l),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Si,vl,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,V=s.length;r<V;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,o){return a[o.uuid]===void 0&&(a[o.uuid]=o.toJSON(t)),o.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const o=a.shapes;if(Array.isArray(o))for(let l=0,c=o.length;l<c;l++){const h=o[l];r(t.shapes,h)}else r(t.shapes,o)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let o=0,l=this.material.length;o<l;o++)a.push(r(t.materials,this.material[o]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const o=this.animations[a];s.animations.push(r(t.animations,o))}}if(e){const a=V(t.geometries),o=V(t.materials),l=V(t.textures),c=V(t.images),h=V(t.shapes),f=V(t.skeletons),d=V(t.animations),p=V(t.nodes);a.length>0&&(n.geometries=a),o.length>0&&(n.materials=o),l.length>0&&(n.textures=l),c.length>0&&(n.images=c),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),p.length>0&&(n.nodes=p)}return n.object=s,n;function V(a){const o=[];for(const l in a){const c=a[l];delete c.metadata,o.push(c)}return o}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}fe.DEFAULT_UP=new R(0,1,0);fe.DEFAULT_MATRIX_AUTO_UPDATE=!0;fe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ne=new R,tn=new R,Ls=new R,en=new R,Jn=new R,jn=new R,UV=new R,Ds=new R,Bs=new R,Fs=new R,Ns=new re,Os=new re,Gs=new re;class Oe{constructor(t=new R,e=new R,n=new R){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Ne.subVectors(t,e),s.cross(Ne);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Ne.subVectors(s,e),tn.subVectors(n,e),Ls.subVectors(t,e);const V=Ne.dot(Ne),a=Ne.dot(tn),o=Ne.dot(Ls),l=tn.dot(tn),c=tn.dot(Ls),h=V*l-a*a;if(h===0)return r.set(0,0,0),null;const f=1/h,d=(l*o-a*c)*f,p=(V*c-a*o)*f;return r.set(1-d-p,p,d)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,en)===null?!1:en.x>=0&&en.y>=0&&en.x+en.y<=1}static getInterpolation(t,e,n,s,r,V,a,o){return this.getBarycoord(t,e,n,s,en)===null?(o.x=0,o.y=0,"z"in o&&(o.z=0),"w"in o&&(o.w=0),null):(o.setScalar(0),o.addScaledVector(r,en.x),o.addScaledVector(V,en.y),o.addScaledVector(a,en.z),o)}static getInterpolatedAttribute(t,e,n,s,r,V){return Ns.setScalar(0),Os.setScalar(0),Gs.setScalar(0),Ns.fromBufferAttribute(t,e),Os.fromBufferAttribute(t,n),Gs.fromBufferAttribute(t,s),V.setScalar(0),V.addScaledVector(Ns,r.x),V.addScaledVector(Os,r.y),V.addScaledVector(Gs,r.z),V}static isFrontFacing(t,e,n,s){return Ne.subVectors(n,e),tn.subVectors(t,e),Ne.cross(tn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ne.subVectors(this.c,this.b),tn.subVectors(this.a,this.b),Ne.cross(tn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Oe.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Oe.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return Oe.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return Oe.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Oe.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let V,a;Jn.subVectors(s,n),jn.subVectors(r,n),Ds.subVectors(t,n);const o=Jn.dot(Ds),l=jn.dot(Ds);if(o<=0&&l<=0)return e.copy(n);Bs.subVectors(t,s);const c=Jn.dot(Bs),h=jn.dot(Bs);if(c>=0&&h<=c)return e.copy(s);const f=o*h-c*l;if(f<=0&&o>=0&&c<=0)return V=o/(o-c),e.copy(n).addScaledVector(Jn,V);Fs.subVectors(t,r);const d=Jn.dot(Fs),p=jn.dot(Fs);if(p>=0&&d<=p)return e.copy(r);const m=d*l-o*p;if(m<=0&&l>=0&&p<=0)return a=l/(l-p),e.copy(n).addScaledVector(jn,a);const q=c*p-d*h;if(q<=0&&h-c>=0&&d-p>=0)return UV.subVectors(r,s),a=(h-c)/(h-c+(d-p)),e.copy(s).addScaledVector(UV,a);const u=1/(q+m+f);return V=m*u,a=f*u,e.copy(n).addScaledVector(Jn,V).addScaledVector(jn,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Fa={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},qn={h:0,s:0,l:0},Ki={h:0,s:0,l:0};function zs(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class Nt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Pe){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,zt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=zt.workingColorSpace){return this.r=t,this.g=e,this.b=n,zt.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=zt.workingColorSpace){if(t=jr(t,1),e=de(e,0,1),n=de(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,V=2*n-r;this.r=zs(V,r,t+1/3),this.g=zs(V,r,t),this.b=zs(V,r,t-1/3)}return zt.toWorkingColorSpace(this,s),this}setStyle(t,e=Pe){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const V=s[1],a=s[2];switch(V){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],V=r.length;if(V===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(V===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Pe){const n=Fa[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Vn(t.r),this.g=Vn(t.g),this.b=Vn(t.b),this}copyLinearToSRGB(t){return this.r=ai(t.r),this.g=ai(t.g),this.b=ai(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Pe){return zt.fromWorkingColorSpace(Ae.copy(this),t),Math.round(de(Ae.r*255,0,255))*65536+Math.round(de(Ae.g*255,0,255))*256+Math.round(de(Ae.b*255,0,255))}getHexString(t=Pe){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=zt.workingColorSpace){zt.fromWorkingColorSpace(Ae.copy(this),e);const n=Ae.r,s=Ae.g,r=Ae.b,V=Math.max(n,s,r),a=Math.min(n,s,r);let o,l;const c=(a+V)/2;if(a===V)o=0,l=0;else{const h=V-a;switch(l=c<=.5?h/(V+a):h/(2-V-a),V){case n:o=(s-r)/h+(s<r?6:0);break;case s:o=(r-n)/h+2;break;case r:o=(n-s)/h+4;break}o/=6}return t.h=o,t.s=l,t.l=c,t}getRGB(t,e=zt.workingColorSpace){return zt.fromWorkingColorSpace(Ae.copy(this),e),t.r=Ae.r,t.g=Ae.g,t.b=Ae.b,t}getStyle(t=Pe){zt.fromWorkingColorSpace(Ae.copy(this),t);const e=Ae.r,n=Ae.g,s=Ae.b;return t!==Pe?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(qn),this.setHSL(qn.h+t,qn.s+e,qn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(qn),t.getHSL(Ki);const n=Ci(qn.h,Ki.h,e),s=Ci(qn.s,Ki.s,e),r=Ci(qn.l,Ki.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ae=new Nt;Nt.NAMES=Fa;let Ml=0;class mi extends pi{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ml++}),this.uuid=Ai(),this.name="",this.blending=ri,this.side=Mn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ir,this.blendDst=sr,this.blendEquation=In,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Nt(0,0,0),this.blendAlpha=0,this.depthFunc=oi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=qV,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=zn,this.stencilZFail=zn,this.stencilZPass=zn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ri&&(n.blending=this.blending),this.side!==Mn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==ir&&(n.blendSrc=this.blendSrc),this.blendDst!==sr&&(n.blendDst=this.blendDst),this.blendEquation!==In&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==oi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==qV&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==zn&&(n.stencilFail=this.stencilFail),this.stencilZFail!==zn&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==zn&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const V=[];for(const a in r){const o=r[a];delete o.metadata,V.push(o)}return V}if(e){const r=s(t.textures),V=s(t.images);r.length>0&&(n.textures=r),V.length>0&&(n.images=V)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class ze extends mi{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new Nt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Xe,this.combine=ga,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const le=new R,Ji=new vt;class Ie{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=pV,this.updateRanges=[],this.gpuType=sn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Ji.fromBufferAttribute(this,e),Ji.applyMatrix3(t),this.setXY(e,Ji.x,Ji.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)le.fromBufferAttribute(this,e),le.applyMatrix3(t),this.setXYZ(e,le.x,le.y,le.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)le.fromBufferAttribute(this,e),le.applyMatrix4(t),this.setXYZ(e,le.x,le.y,le.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)le.fromBufferAttribute(this,e),le.applyNormalMatrix(t),this.setXYZ(e,le.x,le.y,le.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)le.fromBufferAttribute(this,e),le.transformDirection(t),this.setXYZ(e,le.x,le.y,le.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=ni(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=me(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=ni(e,this.array)),e}setX(t,e){return this.normalized&&(e=me(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=ni(e,this.array)),e}setY(t,e){return this.normalized&&(e=me(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=ni(e,this.array)),e}setZ(t,e){return this.normalized&&(e=me(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=ni(e,this.array)),e}setW(t,e){return this.normalized&&(e=me(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=me(e,this.array),n=me(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=me(e,this.array),n=me(n,this.array),s=me(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=me(e,this.array),n=me(n,this.array),s=me(s,this.array),r=me(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==pV&&(t.usage=this.usage),t}}class Na extends Ie{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Oa extends Ie{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Ve extends Ie{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Sl=0;const be=new te,Hs=new fe,Zn=new R,we=new Fi,Ei=new Fi,ue=new R;class xe extends pi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Sl++}),this.uuid=Ai(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Ua(t)?Oa:Na)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new bt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return be.makeRotationFromQuaternion(t),this.applyMatrix4(be),this}rotateX(t){return be.makeRotationX(t),this.applyMatrix4(be),this}rotateY(t){return be.makeRotationY(t),this.applyMatrix4(be),this}rotateZ(t){return be.makeRotationZ(t),this.applyMatrix4(be),this}translate(t,e,n){return be.makeTranslation(t,e,n),this.applyMatrix4(be),this}scale(t,e,n){return be.makeScale(t,e,n),this.applyMatrix4(be),this}lookAt(t){return Hs.lookAt(t),Hs.updateMatrix(),this.applyMatrix4(Hs.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Zn).negate(),this.translate(Zn.x,Zn.y,Zn.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,r=t.length;s<r;s++){const V=t[s];n.push(V.x,V.y,V.z||0)}this.setAttribute("position",new Ve(n,3))}else{for(let n=0,s=e.count;n<s;n++){const r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Fi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new R(-1/0,-1/0,-1/0),new R(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];we.setFromBufferAttribute(r),this.morphTargetsRelative?(ue.addVectors(this.boundingBox.min,we.min),this.boundingBox.expandByPoint(ue),ue.addVectors(this.boundingBox.max,we.max),this.boundingBox.expandByPoint(ue)):(this.boundingBox.expandByPoint(we.min),this.boundingBox.expandByPoint(we.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new vs);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new R,1/0);return}if(t){const n=this.boundingSphere.center;if(we.setFromBufferAttribute(t),e)for(let r=0,V=e.length;r<V;r++){const a=e[r];Ei.setFromBufferAttribute(a),this.morphTargetsRelative?(ue.addVectors(we.min,Ei.min),we.expandByPoint(ue),ue.addVectors(we.max,Ei.max),we.expandByPoint(ue)):(we.expandByPoint(Ei.min),we.expandByPoint(Ei.max))}we.getCenter(n);let s=0;for(let r=0,V=t.count;r<V;r++)ue.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(ue));if(e)for(let r=0,V=e.length;r<V;r++){const a=e[r],o=this.morphTargetsRelative;for(let l=0,c=a.count;l<c;l++)ue.fromBufferAttribute(a,l),o&&(Zn.fromBufferAttribute(t,l),ue.add(Zn)),s=Math.max(s,n.distanceToSquared(ue))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ie(new Float32Array(4*n.count),4));const V=this.getAttribute("tangent"),a=[],o=[];for(let b=0;b<n.count;b++)a[b]=new R,o[b]=new R;const l=new R,c=new R,h=new R,f=new vt,d=new vt,p=new vt,m=new R,q=new R;function u(b,x,_){l.fromBufferAttribute(n,b),c.fromBufferAttribute(n,x),h.fromBufferAttribute(n,_),f.fromBufferAttribute(r,b),d.fromBufferAttribute(r,x),p.fromBufferAttribute(r,_),c.sub(l),h.sub(l),d.sub(f),p.sub(f);const w=1/(d.x*p.y-p.x*d.y);isFinite(w)&&(m.copy(c).multiplyScalar(p.y).addScaledVector(h,-d.y).multiplyScalar(w),q.copy(h).multiplyScalar(d.x).addScaledVector(c,-p.x).multiplyScalar(w),a[b].add(m),a[x].add(m),a[_].add(m),o[b].add(q),o[x].add(q),o[_].add(q))}let E=this.groups;E.length===0&&(E=[{start:0,count:t.count}]);for(let b=0,x=E.length;b<x;++b){const _=E[b],w=_.start,O=_.count;for(let N=w,H=w+O;N<H;N+=3)u(t.getX(N+0),t.getX(N+1),t.getX(N+2))}const S=new R,v=new R,L=new R,y=new R;function T(b){L.fromBufferAttribute(s,b),y.copy(L);const x=a[b];S.copy(x),S.sub(L.multiplyScalar(L.dot(x))).normalize(),v.crossVectors(y,x);const w=v.dot(o[b])<0?-1:1;V.setXYZW(b,S.x,S.y,S.z,w)}for(let b=0,x=E.length;b<x;++b){const _=E[b],w=_.start,O=_.count;for(let N=w,H=w+O;N<H;N+=3)T(t.getX(N+0)),T(t.getX(N+1)),T(t.getX(N+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ie(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);const s=new R,r=new R,V=new R,a=new R,o=new R,l=new R,c=new R,h=new R;if(t)for(let f=0,d=t.count;f<d;f+=3){const p=t.getX(f+0),m=t.getX(f+1),q=t.getX(f+2);s.fromBufferAttribute(e,p),r.fromBufferAttribute(e,m),V.fromBufferAttribute(e,q),c.subVectors(V,r),h.subVectors(s,r),c.cross(h),a.fromBufferAttribute(n,p),o.fromBufferAttribute(n,m),l.fromBufferAttribute(n,q),a.add(c),o.add(c),l.add(c),n.setXYZ(p,a.x,a.y,a.z),n.setXYZ(m,o.x,o.y,o.z),n.setXYZ(q,l.x,l.y,l.z)}else for(let f=0,d=e.count;f<d;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),V.fromBufferAttribute(e,f+2),c.subVectors(V,r),h.subVectors(s,r),c.cross(h),n.setXYZ(f+0,c.x,c.y,c.z),n.setXYZ(f+1,c.x,c.y,c.z),n.setXYZ(f+2,c.x,c.y,c.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)ue.fromBufferAttribute(t,e),ue.normalize(),t.setXYZ(e,ue.x,ue.y,ue.z)}toNonIndexed(){function t(a,o){const l=a.array,c=a.itemSize,h=a.normalized,f=new l.constructor(o.length*c);let d=0,p=0;for(let m=0,q=o.length;m<q;m++){a.isInterleavedBufferAttribute?d=o[m]*a.data.stride+a.offset:d=o[m]*c;for(let u=0;u<c;u++)f[p++]=l[d++]}return new Ie(f,c,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new xe,n=this.index.array,s=this.attributes;for(const a in s){const o=s[a],l=t(o,n);e.setAttribute(a,l)}const r=this.morphAttributes;for(const a in r){const o=[],l=r[a];for(let c=0,h=l.length;c<h;c++){const f=l[c],d=t(f,n);o.push(d)}e.morphAttributes[a]=o}e.morphTargetsRelative=this.morphTargetsRelative;const V=this.groups;for(let a=0,o=V.length;a<o;a++){const l=V[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const o=this.parameters;for(const l in o)o[l]!==void 0&&(t[l]=o[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const o in n){const l=n[o];t.data.attributes[o]=l.toJSON(t.data)}const s={};let r=!1;for(const o in this.morphAttributes){const l=this.morphAttributes[o],c=[];for(let h=0,f=l.length;h<f;h++){const d=l[h];c.push(d.toJSON(t.data))}c.length>0&&(s[o]=c,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const V=this.groups;V.length>0&&(t.data.groups=JSON.parse(JSON.stringify(V)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const s=t.attributes;for(const l in s){const c=s[l];this.setAttribute(l,c.clone(e))}const r=t.morphAttributes;for(const l in r){const c=[],h=r[l];for(let f=0,d=h.length;f<d;f++)c.push(h[f].clone(e));this.morphAttributes[l]=c}this.morphTargetsRelative=t.morphTargetsRelative;const V=t.groups;for(let l=0,c=V.length;l<c;l++){const h=V[l];this.addGroup(h.start,h.count,h.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const o=t.boundingSphere;return o!==null&&(this.boundingSphere=o.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const IV=new te,wn=new Da,ji=new vs,LV=new R,Zi=new R,$i=new R,ts=new R,ks=new R,es=new R,DV=new R,ns=new R;class Tt extends fe{constructor(t=new xe,e=new ze){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,V=s.length;r<V;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,V=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(r&&a){es.set(0,0,0);for(let o=0,l=r.length;o<l;o++){const c=a[o],h=r[o];c!==0&&(ks.fromBufferAttribute(h,t),V?es.addScaledVector(ks,c):es.addScaledVector(ks.sub(e),c))}e.add(es)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ji.copy(n.boundingSphere),ji.applyMatrix4(r),wn.copy(t.ray).recast(t.near),!(ji.containsPoint(wn.origin)===!1&&(wn.intersectSphere(ji,LV)===null||wn.origin.distanceToSquared(LV)>(t.far-t.near)**2))&&(IV.copy(r).invert(),wn.copy(t.ray).applyMatrix4(IV),!(n.boundingBox!==null&&wn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,wn)))}_computeIntersections(t,e,n){let s;const r=this.geometry,V=this.material,a=r.index,o=r.attributes.position,l=r.attributes.uv,c=r.attributes.uv1,h=r.attributes.normal,f=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(V))for(let p=0,m=f.length;p<m;p++){const q=f[p],u=V[q.materialIndex],E=Math.max(q.start,d.start),S=Math.min(a.count,Math.min(q.start+q.count,d.start+d.count));for(let v=E,L=S;v<L;v+=3){const y=a.getX(v),T=a.getX(v+1),b=a.getX(v+2);s=is(this,u,t,n,l,c,h,y,T,b),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=q.materialIndex,e.push(s))}}else{const p=Math.max(0,d.start),m=Math.min(a.count,d.start+d.count);for(let q=p,u=m;q<u;q+=3){const E=a.getX(q),S=a.getX(q+1),v=a.getX(q+2);s=is(this,V,t,n,l,c,h,E,S,v),s&&(s.faceIndex=Math.floor(q/3),e.push(s))}}else if(o!==void 0)if(Array.isArray(V))for(let p=0,m=f.length;p<m;p++){const q=f[p],u=V[q.materialIndex],E=Math.max(q.start,d.start),S=Math.min(o.count,Math.min(q.start+q.count,d.start+d.count));for(let v=E,L=S;v<L;v+=3){const y=v,T=v+1,b=v+2;s=is(this,u,t,n,l,c,h,y,T,b),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=q.materialIndex,e.push(s))}}else{const p=Math.max(0,d.start),m=Math.min(o.count,d.start+d.count);for(let q=p,u=m;q<u;q+=3){const E=q,S=q+1,v=q+2;s=is(this,V,t,n,l,c,h,E,S,v),s&&(s.faceIndex=Math.floor(q/3),e.push(s))}}}}function El(i,t,e,n,s,r,V,a){let o;if(t.side===_e?o=n.intersectTriangle(V,r,s,!0,a):o=n.intersectTriangle(s,r,V,t.side===Mn,a),o===null)return null;ns.copy(a),ns.applyMatrix4(i.matrixWorld);const l=e.ray.origin.distanceTo(ns);return l<e.near||l>e.far?null:{distance:l,point:ns.clone(),object:i}}function is(i,t,e,n,s,r,V,a,o,l){i.getVertexPosition(a,Zi),i.getVertexPosition(o,$i),i.getVertexPosition(l,ts);const c=El(i,t,e,n,Zi,$i,ts,DV);if(c){const h=new R;Oe.getBarycoord(DV,Zi,$i,ts,h),s&&(c.uv=Oe.getInterpolatedAttribute(s,a,o,l,h,new vt)),r&&(c.uv1=Oe.getInterpolatedAttribute(r,a,o,l,h,new vt)),V&&(c.normal=Oe.getInterpolatedAttribute(V,a,o,l,h,new R),c.normal.dot(n.direction)>0&&c.normal.multiplyScalar(-1));const f={a,b:o,c:l,normal:new R,materialIndex:0};Oe.getNormal(Zi,$i,ts,f.normal),c.face=f,c.barycoord=h}return c}class On extends xe{constructor(t=1,e=1,n=1,s=1,r=1,V=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:V};const a=this;s=Math.floor(s),r=Math.floor(r),V=Math.floor(V);const o=[],l=[],c=[],h=[];let f=0,d=0;p("z","y","x",-1,-1,n,e,t,V,r,0),p("z","y","x",1,-1,n,e,-t,V,r,1),p("x","z","y",1,1,t,n,e,s,V,2),p("x","z","y",1,-1,t,n,-e,s,V,3),p("x","y","z",1,-1,t,e,n,s,r,4),p("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(o),this.setAttribute("position",new Ve(l,3)),this.setAttribute("normal",new Ve(c,3)),this.setAttribute("uv",new Ve(h,2));function p(m,q,u,E,S,v,L,y,T,b,x){const _=v/T,w=L/b,O=v/2,N=L/2,H=y/2,K=T+1,k=b+1;let $=0,z=0;const it=new R;for(let lt=0;lt<k;lt++){const gt=lt*w-N;for(let It=0;It<K;It++){const Xt=It*_-O;it[m]=Xt*E,it[q]=gt*S,it[u]=H,l.push(it.x,it.y,it.z),it[m]=0,it[q]=0,it[u]=y>0?1:-1,c.push(it.x,it.y,it.z),h.push(It/T),h.push(1-lt/b),$+=1}}for(let lt=0;lt<b;lt++)for(let gt=0;gt<T;gt++){const It=f+gt+K*lt,Xt=f+gt+K*(lt+1),Y=f+(gt+1)+K*(lt+1),tt=f+(gt+1)+K*lt;o.push(It,Xt,tt),o.push(Xt,Y,tt),z+=6}a.addGroup(d,z,x),d+=z,f+=$}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new On(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function fi(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function ge(i){const t={};for(let e=0;e<i.length;e++){const n=fi(i[e]);for(const s in n)t[s]=n[s]}return t}function yl(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Ga(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:zt.workingColorSpace}const Tl={clone:fi,merge:ge};var wl=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Cl=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Sn extends mi{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=wl,this.fragmentShader=Cl,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=fi(t.uniforms),this.uniformsGroups=yl(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const V=this.uniforms[s].value;V&&V.isTexture?e.uniforms[s]={type:"t",value:V.toJSON(t).uuid}:V&&V.isColor?e.uniforms[s]={type:"c",value:V.getHex()}:V&&V.isVector2?e.uniforms[s]={type:"v2",value:V.toArray()}:V&&V.isVector3?e.uniforms[s]={type:"v3",value:V.toArray()}:V&&V.isVector4?e.uniforms[s]={type:"v4",value:V.toArray()}:V&&V.isMatrix3?e.uniforms[s]={type:"m3",value:V.toArray()}:V&&V.isMatrix4?e.uniforms[s]={type:"m4",value:V.toArray()}:e.uniforms[s]={value:V}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class za extends fe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new te,this.projectionMatrix=new te,this.projectionMatrixInverse=new te,this.coordinateSystem=rn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const pn=new R,BV=new vt,FV=new vt;class Ue extends za{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Li*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(wi*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Li*2*Math.atan(Math.tan(wi*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){pn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(pn.x,pn.y).multiplyScalar(-t/pn.z),pn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(pn.x,pn.y).multiplyScalar(-t/pn.z)}getViewSize(t,e){return this.getViewBounds(t,BV,FV),e.subVectors(FV,BV)}setViewOffset(t,e,n,s,r,V){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=V,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(wi*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const V=this.view;if(this.view!==null&&this.view.enabled){const o=V.fullWidth,l=V.fullHeight;r+=V.offsetX*s/o,e-=V.offsetY*n/l,s*=V.width/o,n*=V.height/l}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const $n=-90,ti=1;class Rl extends fe{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Ue($n,ti,t,e);s.layers=this.layers,this.add(s);const r=new Ue($n,ti,t,e);r.layers=this.layers,this.add(r);const V=new Ue($n,ti,t,e);V.layers=this.layers,this.add(V);const a=new Ue($n,ti,t,e);a.layers=this.layers,this.add(a);const o=new Ue($n,ti,t,e);o.layers=this.layers,this.add(o);const l=new Ue($n,ti,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,V,a,o]=e;for(const l of e)this.remove(l);if(t===rn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),V.up.set(0,0,1),V.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),o.up.set(0,1,0),o.lookAt(0,0,-1);else if(t===As)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),V.up.set(0,0,-1),V.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),o.up.set(0,-1,0),o.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,V,a,o,l,c]=this.children,h=t.getRenderTarget(),f=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),p=t.xr.enabled;t.xr.enabled=!1;const m=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,V),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,o),t.setRenderTarget(n,4,s),t.render(e,l),n.texture.generateMipmaps=m,t.setRenderTarget(n,5,s),t.render(e,c),t.setRenderTarget(h,f,d),t.xr.enabled=p,n.texture.needsPMREMUpdate=!0}}class Ha extends ve{constructor(t,e,n,s,r,V,a,o,l,c){t=t!==void 0?t:[],e=e!==void 0?e:li,super(t,e,n,s,r,V,a,o,l,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class bl extends Nn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Ha(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Ee}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new On(5,5,5),r=new Sn({name:"CubemapFromEquirect",uniforms:fi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:_e,blending:_n});r.uniforms.tEquirect.value=e;const V=new Tt(s,r),a=e.minFilter;return e.minFilter===Bn&&(e.minFilter=Ee),new Rl(1,10,this).update(t,V),e.minFilter=a,V.geometry.dispose(),V.material.dispose(),this}clear(t,e,n,s){const r=t.getRenderTarget();for(let V=0;V<6;V++)t.setRenderTarget(this,V),t.clear(e,n,s);t.setRenderTarget(r)}}const Ws=new R,Pl=new R,Ul=new bt;class Pn{constructor(t=new R(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=Ws.subVectors(n,e).cross(Pl.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Ws),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Ul.getNormalMatrix(t),s=this.coplanarPoint(Ws).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Cn=new vs,ss=new R;class Zr{constructor(t=new Pn,e=new Pn,n=new Pn,s=new Pn,r=new Pn,V=new Pn){this.planes=[t,e,n,s,r,V]}set(t,e,n,s,r,V){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(V),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=rn){const n=this.planes,s=t.elements,r=s[0],V=s[1],a=s[2],o=s[3],l=s[4],c=s[5],h=s[6],f=s[7],d=s[8],p=s[9],m=s[10],q=s[11],u=s[12],E=s[13],S=s[14],v=s[15];if(n[0].setComponents(o-r,f-l,q-d,v-u).normalize(),n[1].setComponents(o+r,f+l,q+d,v+u).normalize(),n[2].setComponents(o+V,f+c,q+p,v+E).normalize(),n[3].setComponents(o-V,f-c,q-p,v-E).normalize(),n[4].setComponents(o-a,f-h,q-m,v-S).normalize(),e===rn)n[5].setComponents(o+a,f+h,q+m,v+S).normalize();else if(e===As)n[5].setComponents(a,h,m,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Cn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Cn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Cn)}intersectsSprite(t){return Cn.center.set(0,0,0),Cn.radius=.7071067811865476,Cn.applyMatrix4(t.matrixWorld),this.intersectsSphere(Cn)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(ss.x=s.normal.x>0?t.max.x:t.min.x,ss.y=s.normal.y>0?t.max.y:t.min.y,ss.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(ss)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function ka(){let i=null,t=!1,e=null,n=null;function s(r,V){e(r,V),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Il(i){const t=new WeakMap;function e(a,o){const l=a.array,c=a.usage,h=l.byteLength,f=i.createBuffer();i.bindBuffer(o,f),i.bufferData(o,l,c),a.onUploadCallback();let d;if(l instanceof Float32Array)d=i.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)d=i.SHORT;else if(l instanceof Uint32Array)d=i.UNSIGNED_INT;else if(l instanceof Int32Array)d=i.INT;else if(l instanceof Int8Array)d=i.BYTE;else if(l instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:d,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:h}}function n(a,o,l){const c=o.array,h=o.updateRanges;if(i.bindBuffer(l,a),h.length===0)i.bufferSubData(l,0,c);else{h.sort((d,p)=>d.start-p.start);let f=0;for(let d=1;d<h.length;d++){const p=h[f],m=h[d];m.start<=p.start+p.count+1?p.count=Math.max(p.count,m.start+m.count-p.start):(++f,h[f]=m)}h.length=f+1;for(let d=0,p=h.length;d<p;d++){const m=h[d];i.bufferSubData(l,m.start*c.BYTES_PER_ELEMENT,c,m.start,m.count)}o.clearUpdateRanges()}o.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const o=t.get(a);o&&(i.deleteBuffer(o.buffer),t.delete(a))}function V(a,o){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const c=t.get(a);(!c||c.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=t.get(a);if(l===void 0)t.set(a,e(a,o));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,o),l.version=a.version}}return{get:s,remove:r,update:V}}class Qe extends xe{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,V=e/2,a=Math.floor(n),o=Math.floor(s),l=a+1,c=o+1,h=t/a,f=e/o,d=[],p=[],m=[],q=[];for(let u=0;u<c;u++){const E=u*f-V;for(let S=0;S<l;S++){const v=S*h-r;p.push(v,-E,0),m.push(0,0,1),q.push(S/a),q.push(1-u/o)}}for(let u=0;u<o;u++)for(let E=0;E<a;E++){const S=E+l*u,v=E+l*(u+1),L=E+1+l*(u+1),y=E+1+l*u;d.push(S,v,y),d.push(v,L,y)}this.setIndex(d),this.setAttribute("position",new Ve(p,3)),this.setAttribute("normal",new Ve(m,3)),this.setAttribute("uv",new Ve(q,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Qe(t.width,t.height,t.widthSegments,t.heightSegments)}}var Ll=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Dl=`#ifdef USE_ALPHAHASH
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
#endif`,Hl=`#ifdef USE_BATCHING
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
#endif`,kl=`#ifdef USE_BATCHING
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
#endif`,sc=`#define PI 3.141592653589793
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
} // validated`,rc=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Vc=`vec3 transformedNormal = objectNormal;
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
}`,fc=`#ifdef USE_ENVMAP
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
#endif`,dc=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,qc=`#ifdef USE_ENVMAP
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
#endif`,_c=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,vc=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,xc=`#ifdef USE_GRADIENTMAP
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
}`,Mc=`#ifdef USE_LIGHTMAP
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Pc=`PhysicalMaterial material;
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
#endif`,Uc=`struct PhysicalMaterial {
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
}`,Ic=`
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
#endif`,Lc=`#if defined( RE_IndirectDiffuse )
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
#endif`,Dc=`#if defined( RE_IndirectDiffuse )
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
#endif`,Hc=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,kc=`#if defined( USE_POINTS_UV )
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
#endif`,sh=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,rh=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Vh=`#ifdef USE_CLEARCOATMAP
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
#endif`,fh=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,dh=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,qh=`#ifdef USE_ROUGHNESSMAP
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
}`,_h=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,vh=`#ifdef USE_SKINNING
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
#endif`,xh=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Mh=`#ifdef USE_SKINNING
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
#endif`,Ph=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Uh=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Ih=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Lh=`uniform sampler2D t2D;
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
}`,Dh=`varying vec3 vWorldDirection;
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
}`,Hh=`#define DISTANCE
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
}`,kh=`varying vec3 vWorldDirection;
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
}`,su=`#define STANDARD
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
}`,ru=`#define STANDARD
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
}`,Vu=`#define TOON
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
}`,fu=`uniform vec3 diffuse;
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
}`,Ut={alphahash_fragment:Ll,alphahash_pars_fragment:Dl,alphamap_fragment:Bl,alphamap_pars_fragment:Fl,alphatest_fragment:Nl,alphatest_pars_fragment:Ol,aomap_fragment:Gl,aomap_pars_fragment:zl,batching_pars_vertex:Hl,batching_vertex:kl,begin_vertex:Wl,beginnormal_vertex:Yl,bsdfs:Ql,iridescence_fragment:Xl,bumpmap_pars_fragment:Kl,clipping_planes_fragment:Jl,clipping_planes_pars_fragment:jl,clipping_planes_pars_vertex:Zl,clipping_planes_vertex:$l,color_fragment:tc,color_pars_fragment:ec,color_pars_vertex:nc,color_vertex:ic,common:sc,cube_uv_reflection_fragment:rc,defaultnormal_vertex:Vc,displacementmap_pars_vertex:ac,displacementmap_vertex:oc,emissivemap_fragment:lc,emissivemap_pars_fragment:cc,colorspace_fragment:hc,colorspace_pars_fragment:uc,envmap_fragment:fc,envmap_common_pars_fragment:dc,envmap_pars_fragment:qc,envmap_pars_vertex:pc,envmap_physical_pars_fragment:Tc,envmap_vertex:Ac,fog_vertex:mc,fog_pars_vertex:gc,fog_fragment:_c,fog_pars_fragment:vc,gradientmap_pars_fragment:xc,lightmap_pars_fragment:Mc,lights_lambert_fragment:Sc,lights_lambert_pars_fragment:Ec,lights_pars_begin:yc,lights_toon_fragment:wc,lights_toon_pars_fragment:Cc,lights_phong_fragment:Rc,lights_phong_pars_fragment:bc,lights_physical_fragment:Pc,lights_physical_pars_fragment:Uc,lights_fragment_begin:Ic,lights_fragment_maps:Lc,lights_fragment_end:Dc,logdepthbuf_fragment:Bc,logdepthbuf_pars_fragment:Fc,logdepthbuf_pars_vertex:Nc,logdepthbuf_vertex:Oc,map_fragment:Gc,map_pars_fragment:zc,map_particle_fragment:Hc,map_particle_pars_fragment:kc,metalnessmap_fragment:Wc,metalnessmap_pars_fragment:Yc,morphinstance_vertex:Qc,morphcolor_vertex:Xc,morphnormal_vertex:Kc,morphtarget_pars_vertex:Jc,morphtarget_vertex:jc,normal_fragment_begin:Zc,normal_fragment_maps:$c,normal_pars_fragment:th,normal_pars_vertex:eh,normal_vertex:nh,normalmap_pars_fragment:ih,clearcoat_normal_fragment_begin:sh,clearcoat_normal_fragment_maps:rh,clearcoat_pars_fragment:Vh,iridescence_pars_fragment:ah,opaque_fragment:oh,packing:lh,premultiplied_alpha_fragment:ch,project_vertex:hh,dithering_fragment:uh,dithering_pars_fragment:fh,roughnessmap_fragment:dh,roughnessmap_pars_fragment:qh,shadowmap_pars_fragment:ph,shadowmap_pars_vertex:Ah,shadowmap_vertex:mh,shadowmask_pars_fragment:gh,skinbase_vertex:_h,skinning_pars_vertex:vh,skinning_vertex:xh,skinnormal_vertex:Mh,specularmap_fragment:Sh,specularmap_pars_fragment:Eh,tonemapping_fragment:yh,tonemapping_pars_fragment:Th,transmission_fragment:wh,transmission_pars_fragment:Ch,uv_pars_fragment:Rh,uv_pars_vertex:bh,uv_vertex:Ph,worldpos_vertex:Uh,background_vert:Ih,background_frag:Lh,backgroundCube_vert:Dh,backgroundCube_frag:Bh,cube_vert:Fh,cube_frag:Nh,depth_vert:Oh,depth_frag:Gh,distanceRGBA_vert:zh,distanceRGBA_frag:Hh,equirect_vert:kh,equirect_frag:Wh,linedashed_vert:Yh,linedashed_frag:Qh,meshbasic_vert:Xh,meshbasic_frag:Kh,meshlambert_vert:Jh,meshlambert_frag:jh,meshmatcap_vert:Zh,meshmatcap_frag:$h,meshnormal_vert:tu,meshnormal_frag:eu,meshphong_vert:nu,meshphong_frag:iu,meshphysical_vert:su,meshphysical_frag:ru,meshtoon_vert:Vu,meshtoon_frag:au,points_vert:ou,points_frag:lu,shadow_vert:cu,shadow_frag:hu,sprite_vert:uu,sprite_frag:fu},et={common:{diffuse:{value:new Nt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new bt},alphaMap:{value:null},alphaMapTransform:{value:new bt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new bt}},envmap:{envMap:{value:null},envMapRotation:{value:new bt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new bt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new bt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new bt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new bt},normalScale:{value:new vt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new bt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new bt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new bt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new bt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Nt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Nt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new bt},alphaTest:{value:0},uvTransform:{value:new bt}},sprite:{diffuse:{value:new Nt(16777215)},opacity:{value:1},center:{value:new vt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new bt},alphaMap:{value:null},alphaMapTransform:{value:new bt},alphaTest:{value:0}}},We={basic:{uniforms:ge([et.common,et.specularmap,et.envmap,et.aomap,et.lightmap,et.fog]),vertexShader:Ut.meshbasic_vert,fragmentShader:Ut.meshbasic_frag},lambert:{uniforms:ge([et.common,et.specularmap,et.envmap,et.aomap,et.lightmap,et.emissivemap,et.bumpmap,et.normalmap,et.displacementmap,et.fog,et.lights,{emissive:{value:new Nt(0)}}]),vertexShader:Ut.meshlambert_vert,fragmentShader:Ut.meshlambert_frag},phong:{uniforms:ge([et.common,et.specularmap,et.envmap,et.aomap,et.lightmap,et.emissivemap,et.bumpmap,et.normalmap,et.displacementmap,et.fog,et.lights,{emissive:{value:new Nt(0)},specular:{value:new Nt(1118481)},shininess:{value:30}}]),vertexShader:Ut.meshphong_vert,fragmentShader:Ut.meshphong_frag},standard:{uniforms:ge([et.common,et.envmap,et.aomap,et.lightmap,et.emissivemap,et.bumpmap,et.normalmap,et.displacementmap,et.roughnessmap,et.metalnessmap,et.fog,et.lights,{emissive:{value:new Nt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ut.meshphysical_vert,fragmentShader:Ut.meshphysical_frag},toon:{uniforms:ge([et.common,et.aomap,et.lightmap,et.emissivemap,et.bumpmap,et.normalmap,et.displacementmap,et.gradientmap,et.fog,et.lights,{emissive:{value:new Nt(0)}}]),vertexShader:Ut.meshtoon_vert,fragmentShader:Ut.meshtoon_frag},matcap:{uniforms:ge([et.common,et.bumpmap,et.normalmap,et.displacementmap,et.fog,{matcap:{value:null}}]),vertexShader:Ut.meshmatcap_vert,fragmentShader:Ut.meshmatcap_frag},points:{uniforms:ge([et.points,et.fog]),vertexShader:Ut.points_vert,fragmentShader:Ut.points_frag},dashed:{uniforms:ge([et.common,et.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ut.linedashed_vert,fragmentShader:Ut.linedashed_frag},depth:{uniforms:ge([et.common,et.displacementmap]),vertexShader:Ut.depth_vert,fragmentShader:Ut.depth_frag},normal:{uniforms:ge([et.common,et.bumpmap,et.normalmap,et.displacementmap,{opacity:{value:1}}]),vertexShader:Ut.meshnormal_vert,fragmentShader:Ut.meshnormal_frag},sprite:{uniforms:ge([et.sprite,et.fog]),vertexShader:Ut.sprite_vert,fragmentShader:Ut.sprite_frag},background:{uniforms:{uvTransform:{value:new bt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ut.background_vert,fragmentShader:Ut.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new bt}},vertexShader:Ut.backgroundCube_vert,fragmentShader:Ut.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ut.cube_vert,fragmentShader:Ut.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ut.equirect_vert,fragmentShader:Ut.equirect_frag},distanceRGBA:{uniforms:ge([et.common,et.displacementmap,{referencePosition:{value:new R},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ut.distanceRGBA_vert,fragmentShader:Ut.distanceRGBA_frag},shadow:{uniforms:ge([et.lights,et.fog,{color:{value:new Nt(0)},opacity:{value:1}}]),vertexShader:Ut.shadow_vert,fragmentShader:Ut.shadow_frag}};We.physical={uniforms:ge([We.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new bt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new bt},clearcoatNormalScale:{value:new vt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new bt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new bt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new bt},sheen:{value:0},sheenColor:{value:new Nt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new bt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new bt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new bt},transmissionSamplerSize:{value:new vt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new bt},attenuationDistance:{value:0},attenuationColor:{value:new Nt(0)},specularColor:{value:new Nt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new bt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new bt},anisotropyVector:{value:new vt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new bt}}]),vertexShader:Ut.meshphysical_vert,fragmentShader:Ut.meshphysical_frag};const rs={r:0,b:0,g:0},Rn=new Xe,du=new te;function qu(i,t,e,n,s,r,V){const a=new Nt(0);let o=r===!0?0:1,l,c,h=null,f=0,d=null;function p(E){let S=E.isScene===!0?E.background:null;return S&&S.isTexture&&(S=(E.backgroundBlurriness>0?e:t).get(S)),S}function m(E){let S=!1;const v=p(E);v===null?u(a,o):v&&v.isColor&&(u(v,1),S=!0);const L=i.xr.getEnvironmentBlendMode();L==="additive"?n.buffers.color.setClear(0,0,0,1,V):L==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,V),(i.autoClear||S)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function q(E,S){const v=p(S);v&&(v.isCubeTexture||v.mapping===gs)?(c===void 0&&(c=new Tt(new On(1,1,1),new Sn({name:"BackgroundCubeMaterial",uniforms:fi(We.backgroundCube.uniforms),vertexShader:We.backgroundCube.vertexShader,fragmentShader:We.backgroundCube.fragmentShader,side:_e,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(L,y,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(c)),Rn.copy(S.backgroundRotation),Rn.x*=-1,Rn.y*=-1,Rn.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(Rn.y*=-1,Rn.z*=-1),c.material.uniforms.envMap.value=v,c.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(du.makeRotationFromEuler(Rn)),c.material.toneMapped=zt.getTransfer(v.colorSpace)!==Qt,(h!==v||f!==v.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,h=v,f=v.version,d=i.toneMapping),c.layers.enableAll(),E.unshift(c,c.geometry,c.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new Tt(new Qe(2,2),new Sn({name:"BackgroundMaterial",uniforms:fi(We.background.uniforms),vertexShader:We.background.vertexShader,fragmentShader:We.background.fragmentShader,side:Mn,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,l.material.toneMapped=zt.getTransfer(v.colorSpace)!==Qt,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(h!==v||f!==v.version||d!==i.toneMapping)&&(l.material.needsUpdate=!0,h=v,f=v.version,d=i.toneMapping),l.layers.enableAll(),E.unshift(l,l.geometry,l.material,0,0,null))}function u(E,S){E.getRGB(rs,Ga(i)),n.buffers.color.setClear(rs.r,rs.g,rs.b,S,V)}return{getClearColor:function(){return a},setClearColor:function(E,S=1){a.set(E),o=S,u(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(E){o=E,u(a,o)},render:m,addToRenderList:q}}function pu(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null);let r=s,V=!1;function a(_,w,O,N,H){let K=!1;const k=h(N,O,w);r!==k&&(r=k,l(r.object)),K=d(_,N,O,H),K&&p(_,N,O,H),H!==null&&t.update(H,i.ELEMENT_ARRAY_BUFFER),(K||V)&&(V=!1,v(_,w,O,N),H!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(H).buffer))}function o(){return i.createVertexArray()}function l(_){return i.bindVertexArray(_)}function c(_){return i.deleteVertexArray(_)}function h(_,w,O){const N=O.wireframe===!0;let H=n[_.id];H===void 0&&(H={},n[_.id]=H);let K=H[w.id];K===void 0&&(K={},H[w.id]=K);let k=K[N];return k===void 0&&(k=f(o()),K[N]=k),k}function f(_){const w=[],O=[],N=[];for(let H=0;H<e;H++)w[H]=0,O[H]=0,N[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:w,enabledAttributes:O,attributeDivisors:N,object:_,attributes:{},index:null}}function d(_,w,O,N){const H=r.attributes,K=w.attributes;let k=0;const $=O.getAttributes();for(const z in $)if($[z].location>=0){const lt=H[z];let gt=K[z];if(gt===void 0&&(z==="instanceMatrix"&&_.instanceMatrix&&(gt=_.instanceMatrix),z==="instanceColor"&&_.instanceColor&&(gt=_.instanceColor)),lt===void 0||lt.attribute!==gt||gt&&lt.data!==gt.data)return!0;k++}return r.attributesNum!==k||r.index!==N}function p(_,w,O,N){const H={},K=w.attributes;let k=0;const $=O.getAttributes();for(const z in $)if($[z].location>=0){let lt=K[z];lt===void 0&&(z==="instanceMatrix"&&_.instanceMatrix&&(lt=_.instanceMatrix),z==="instanceColor"&&_.instanceColor&&(lt=_.instanceColor));const gt={};gt.attribute=lt,lt&&lt.data&&(gt.data=lt.data),H[z]=gt,k++}r.attributes=H,r.attributesNum=k,r.index=N}function m(){const _=r.newAttributes;for(let w=0,O=_.length;w<O;w++)_[w]=0}function q(_){u(_,0)}function u(_,w){const O=r.newAttributes,N=r.enabledAttributes,H=r.attributeDivisors;O[_]=1,N[_]===0&&(i.enableVertexAttribArray(_),N[_]=1),H[_]!==w&&(i.vertexAttribDivisor(_,w),H[_]=w)}function E(){const _=r.newAttributes,w=r.enabledAttributes;for(let O=0,N=w.length;O<N;O++)w[O]!==_[O]&&(i.disableVertexAttribArray(O),w[O]=0)}function S(_,w,O,N,H,K,k){k===!0?i.vertexAttribIPointer(_,w,O,H,K):i.vertexAttribPointer(_,w,O,N,H,K)}function v(_,w,O,N){m();const H=N.attributes,K=O.getAttributes(),k=w.defaultAttributeValues;for(const $ in K){const z=K[$];if(z.location>=0){let it=H[$];if(it===void 0&&($==="instanceMatrix"&&_.instanceMatrix&&(it=_.instanceMatrix),$==="instanceColor"&&_.instanceColor&&(it=_.instanceColor)),it!==void 0){const lt=it.normalized,gt=it.itemSize,It=t.get(it);if(It===void 0)continue;const Xt=It.buffer,Y=It.type,tt=It.bytesPerElement,pt=Y===i.INT||Y===i.UNSIGNED_INT||it.gpuType===Wr;if(it.isInterleavedBufferAttribute){const st=it.data,St=st.stride,wt=it.offset;if(st.isInstancedInterleavedBuffer){for(let Lt=0;Lt<z.locationSize;Lt++)u(z.location+Lt,st.meshPerAttribute);_.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=st.meshPerAttribute*st.count)}else for(let Lt=0;Lt<z.locationSize;Lt++)q(z.location+Lt);i.bindBuffer(i.ARRAY_BUFFER,Xt);for(let Lt=0;Lt<z.locationSize;Lt++)S(z.location+Lt,gt/z.locationSize,Y,lt,St*tt,(wt+gt/z.locationSize*Lt)*tt,pt)}else{if(it.isInstancedBufferAttribute){for(let st=0;st<z.locationSize;st++)u(z.location+st,it.meshPerAttribute);_.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=it.meshPerAttribute*it.count)}else for(let st=0;st<z.locationSize;st++)q(z.location+st);i.bindBuffer(i.ARRAY_BUFFER,Xt);for(let st=0;st<z.locationSize;st++)S(z.location+st,gt/z.locationSize,Y,lt,gt*tt,gt/z.locationSize*st*tt,pt)}}else if(k!==void 0){const lt=k[$];if(lt!==void 0)switch(lt.length){case 2:i.vertexAttrib2fv(z.location,lt);break;case 3:i.vertexAttrib3fv(z.location,lt);break;case 4:i.vertexAttrib4fv(z.location,lt);break;default:i.vertexAttrib1fv(z.location,lt)}}}}E()}function L(){b();for(const _ in n){const w=n[_];for(const O in w){const N=w[O];for(const H in N)c(N[H].object),delete N[H];delete w[O]}delete n[_]}}function y(_){if(n[_.id]===void 0)return;const w=n[_.id];for(const O in w){const N=w[O];for(const H in N)c(N[H].object),delete N[H];delete w[O]}delete n[_.id]}function T(_){for(const w in n){const O=n[w];if(O[_.id]===void 0)continue;const N=O[_.id];for(const H in N)c(N[H].object),delete N[H];delete O[_.id]}}function b(){x(),V=!0,r!==s&&(r=s,l(r.object))}function x(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:b,resetDefaultState:x,dispose:L,releaseStatesOfGeometry:y,releaseStatesOfProgram:T,initAttributes:m,enableAttribute:q,disableUnusedAttributes:E}}function Au(i,t,e){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),e.update(c,n,1)}function V(l,c,h){h!==0&&(i.drawArraysInstanced(n,l,c,h),e.update(c,n,h))}function a(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let d=0;for(let p=0;p<h;p++)d+=c[p];e.update(d,n,1)}function o(l,c,h,f){if(h===0)return;const d=t.get("WEBGL_multi_draw");if(d===null)for(let p=0;p<l.length;p++)V(l[p],c[p],f[p]);else{d.multiDrawArraysInstancedWEBGL(n,l,0,c,0,f,0,h);let p=0;for(let m=0;m<h;m++)p+=c[m]*f[m];e.update(p,n,1)}}this.setMode=s,this.render=r,this.renderInstances=V,this.renderMultiDraw=a,this.renderMultiDrawInstances=o}function mu(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const T=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function V(T){return!(T!==Ge&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(T){const b=T===Di&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(T!==an&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==sn&&!b)}function o(T){if(T==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const c=o(l);c!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",c,"instead."),l=c);const h=e.logarithmicDepthBuffer===!0,f=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),p=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_TEXTURE_SIZE),q=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),u=i.getParameter(i.MAX_VERTEX_ATTRIBS),E=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),S=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),L=p>0,y=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:o,textureFormatReadable:V,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:h,reverseDepthBuffer:f,maxTextures:d,maxVertexTextures:p,maxTextureSize:m,maxCubemapSize:q,maxAttributes:u,maxVertexUniforms:E,maxVaryings:S,maxFragmentUniforms:v,vertexTextures:L,maxSamples:y}}function gu(i){const t=this;let e=null,n=0,s=!1,r=!1;const V=new Pn,a=new bt,o={value:null,needsUpdate:!1};this.uniform=o,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const d=h.length!==0||f||n!==0||s;return s=f,n=h.length,d},this.beginShadows=function(){r=!0,c(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,f){e=c(h,f,0)},this.setState=function(h,f,d){const p=h.clippingPlanes,m=h.clipIntersection,q=h.clipShadows,u=i.get(h);if(!s||p===null||p.length===0||r&&!q)r?c(null):l();else{const E=r?0:n,S=E*4;let v=u.clippingState||null;o.value=v,v=c(p,f,S,d);for(let L=0;L!==S;++L)v[L]=e[L];u.clippingState=v,this.numIntersection=m?this.numPlanes:0,this.numPlanes+=E}};function l(){o.value!==e&&(o.value=e,o.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function c(h,f,d,p){const m=h!==null?h.length:0;let q=null;if(m!==0){if(q=o.value,p!==!0||q===null){const u=d+m*4,E=f.matrixWorldInverse;a.getNormalMatrix(E),(q===null||q.length<u)&&(q=new Float32Array(u));for(let S=0,v=d;S!==m;++S,v+=4)V.copy(h[S]).applyMatrix4(E,a),V.normal.toArray(q,v),q[v+3]=V.constant}o.value=q,o.needsUpdate=!0}return t.numPlanes=m,t.numIntersection=0,q}}function _u(i){let t=new WeakMap;function e(V,a){return a===ur?V.mapping=li:a===fr&&(V.mapping=ci),V}function n(V){if(V&&V.isTexture){const a=V.mapping;if(a===ur||a===fr)if(t.has(V)){const o=t.get(V).texture;return e(o,V.mapping)}else{const o=V.image;if(o&&o.height>0){const l=new bl(o.height);return l.fromEquirectangularTexture(i,V),t.set(V,l),V.addEventListener("dispose",s),e(l.texture,V.mapping)}else return null}}return V}function s(V){const a=V.target;a.removeEventListener("dispose",s);const o=t.get(a);o!==void 0&&(t.delete(a),o.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class Wa extends za{constructor(t=-1,e=1,n=1,s=-1,r=.1,V=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=V,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,V){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=V,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,V=n+t,a=s+e,o=s-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,V=r+l*this.view.width,a-=c*this.view.offsetY,o=a-c*this.view.height}this.projectionMatrix.makeOrthographic(r,V,a,o,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const si=4,NV=[.125,.215,.35,.446,.526,.582],Ln=20,Ys=new Wa,OV=new Nt;let Qs=null,Xs=0,Ks=0,Js=!1;const Un=(1+Math.sqrt(5))/2,ei=1/Un,GV=[new R(-Un,ei,0),new R(Un,ei,0),new R(-ei,0,Un),new R(ei,0,Un),new R(0,Un,-ei),new R(0,Un,ei),new R(-1,1,-1),new R(1,1,-1),new R(-1,1,1),new R(1,1,1)];class zV{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){Qs=this._renderer.getRenderTarget(),Xs=this._renderer.getActiveCubeFace(),Ks=this._renderer.getActiveMipmapLevel(),Js=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=WV(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=kV(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Qs,Xs,Ks),this._renderer.xr.enabled=Js,t.scissorTest=!1,Vs(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===li||t.mapping===ci?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Qs=this._renderer.getRenderTarget(),Xs=this._renderer.getActiveCubeFace(),Ks=this._renderer.getActiveMipmapLevel(),Js=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Ee,minFilter:Ee,generateMipmaps:!1,type:Di,format:Ge,colorSpace:qi,depthBuffer:!1},s=HV(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=HV(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=vu(r)),this._blurMaterial=xu(r,t,e)}return s}_compileMaterial(t){const e=new Tt(this._lodPlanes[0],t);this._renderer.compile(e,Ys)}_sceneToCubeUV(t,e,n,s){const a=new Ue(90,1,e,n),o=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],c=this._renderer,h=c.autoClear,f=c.toneMapping;c.getClearColor(OV),c.toneMapping=vn,c.autoClear=!1;const d=new ze({name:"PMREM.Background",side:_e,depthWrite:!1,depthTest:!1}),p=new Tt(new On,d);let m=!1;const q=t.background;q?q.isColor&&(d.color.copy(q),t.background=null,m=!0):(d.color.copy(OV),m=!0);for(let u=0;u<6;u++){const E=u%3;E===0?(a.up.set(0,o[u],0),a.lookAt(l[u],0,0)):E===1?(a.up.set(0,0,o[u]),a.lookAt(0,l[u],0)):(a.up.set(0,o[u],0),a.lookAt(0,0,l[u]));const S=this._cubeSize;Vs(s,E*S,u>2?S:0,S,S),c.setRenderTarget(s),m&&c.render(p,a),c.render(t,a)}p.geometry.dispose(),p.material.dispose(),c.toneMapping=f,c.autoClear=h,t.background=q}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===li||t.mapping===ci;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=WV()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=kV());const r=s?this._cubemapMaterial:this._equirectMaterial,V=new Tt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const o=this._cubeSize;Vs(e,0,0,3*o,2*o),n.setRenderTarget(e),n.render(V,Ys)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const V=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=GV[(s-r-1)%GV.length];this._blur(t,r-1,r,V,a)}e.autoClear=n}_blur(t,e,n,s,r){const V=this._pingPongRenderTarget;this._halfBlur(t,V,e,n,s,"latitudinal",r),this._halfBlur(V,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,V,a){const o=this._renderer,l=this._blurMaterial;V!=="latitudinal"&&V!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const c=3,h=new Tt(this._lodPlanes[s],l),f=l.uniforms,d=this._sizeLods[n]-1,p=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*Ln-1),m=r/p,q=isFinite(r)?1+Math.floor(c*m):Ln;q>Ln&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${q} samples when the maximum is set to ${Ln}`);const u=[];let E=0;for(let T=0;T<Ln;++T){const b=T/m,x=Math.exp(-b*b/2);u.push(x),T===0?E+=x:T<q&&(E+=2*x)}for(let T=0;T<u.length;T++)u[T]=u[T]/E;f.envMap.value=t.texture,f.samples.value=q,f.weights.value=u,f.latitudinal.value=V==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:S}=this;f.dTheta.value=p,f.mipInt.value=S-n;const v=this._sizeLods[s],L=3*v*(s>S-si?s-S+si:0),y=4*(this._cubeSize-v);Vs(e,L,y,3*v,2*v),o.setRenderTarget(e),o.render(h,Ys)}}function vu(i){const t=[],e=[],n=[];let s=i;const r=i-si+1+NV.length;for(let V=0;V<r;V++){const a=Math.pow(2,s);e.push(a);let o=1/a;V>i-si?o=NV[V-i+si-1]:V===0&&(o=0),n.push(o);const l=1/(a-2),c=-l,h=1+l,f=[c,c,h,c,h,h,c,c,h,h,c,h],d=6,p=6,m=3,q=2,u=1,E=new Float32Array(m*p*d),S=new Float32Array(q*p*d),v=new Float32Array(u*p*d);for(let y=0;y<d;y++){const T=y%3*2/3-1,b=y>2?0:-1,x=[T,b,0,T+2/3,b,0,T+2/3,b+1,0,T,b,0,T+2/3,b+1,0,T,b+1,0];E.set(x,m*p*y),S.set(f,q*p*y);const _=[y,y,y,y,y,y];v.set(_,u*p*y)}const L=new xe;L.setAttribute("position",new Ie(E,m)),L.setAttribute("uv",new Ie(S,q)),L.setAttribute("faceIndex",new Ie(v,u)),t.push(L),s>si&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function HV(i,t,e){const n=new Nn(i,t,e);return n.texture.mapping=gs,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Vs(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function xu(i,t,e){const n=new Float32Array(Ln),s=new R(0,1,0);return new Sn({name:"SphericalGaussianBlur",defines:{n:Ln,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:$r(),fragmentShader:`

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
		`,blending:_n,depthTest:!1,depthWrite:!1})}function kV(){return new Sn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:$r(),fragmentShader:`

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
		`,blending:_n,depthTest:!1,depthWrite:!1})}function WV(){return new Sn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:$r(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:_n,depthTest:!1,depthWrite:!1})}function $r(){return`

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
	`}function Mu(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const o=a.mapping,l=o===ur||o===fr,c=o===li||o===ci;if(l||c){let h=t.get(a);const f=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return e===null&&(e=new zV(i)),h=l?e.fromEquirectangular(a,h):e.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,t.set(a,h),h.texture;if(h!==void 0)return h.texture;{const d=a.image;return l&&d&&d.height>0||c&&d&&s(d)?(e===null&&(e=new zV(i)),h=l?e.fromEquirectangular(a):e.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,t.set(a,h),a.addEventListener("dispose",r),h.texture):null}}}return a}function s(a){let o=0;const l=6;for(let c=0;c<l;c++)a[c]!==void 0&&o++;return o===l}function r(a){const o=a.target;o.removeEventListener("dispose",r);const l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function V(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:V}}function Su(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&yi("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Eu(i,t,e,n){const s={},r=new WeakMap;function V(h){const f=h.target;f.index!==null&&t.remove(f.index);for(const p in f.attributes)t.remove(f.attributes[p]);for(const p in f.morphAttributes){const m=f.morphAttributes[p];for(let q=0,u=m.length;q<u;q++)t.remove(m[q])}f.removeEventListener("dispose",V),delete s[f.id];const d=r.get(f);d&&(t.remove(d),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(h,f){return s[f.id]===!0||(f.addEventListener("dispose",V),s[f.id]=!0,e.memory.geometries++),f}function o(h){const f=h.attributes;for(const p in f)t.update(f[p],i.ARRAY_BUFFER);const d=h.morphAttributes;for(const p in d){const m=d[p];for(let q=0,u=m.length;q<u;q++)t.update(m[q],i.ARRAY_BUFFER)}}function l(h){const f=[],d=h.index,p=h.attributes.position;let m=0;if(d!==null){const E=d.array;m=d.version;for(let S=0,v=E.length;S<v;S+=3){const L=E[S+0],y=E[S+1],T=E[S+2];f.push(L,y,y,T,T,L)}}else if(p!==void 0){const E=p.array;m=p.version;for(let S=0,v=E.length/3-1;S<v;S+=3){const L=S+0,y=S+1,T=S+2;f.push(L,y,y,T,T,L)}}else return;const q=new(Ua(f)?Oa:Na)(f,1);q.version=m;const u=r.get(h);u&&t.remove(u),r.set(h,q)}function c(h){const f=r.get(h);if(f){const d=h.index;d!==null&&f.version<d.version&&l(h)}else l(h);return r.get(h)}return{get:a,update:o,getWireframeAttribute:c}}function yu(i,t,e){let n;function s(f){n=f}let r,V;function a(f){r=f.type,V=f.bytesPerElement}function o(f,d){i.drawElements(n,d,r,f*V),e.update(d,n,1)}function l(f,d,p){p!==0&&(i.drawElementsInstanced(n,d,r,f*V,p),e.update(d,n,p))}function c(f,d,p){if(p===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,f,0,p);let q=0;for(let u=0;u<p;u++)q+=d[u];e.update(q,n,1)}function h(f,d,p,m){if(p===0)return;const q=t.get("WEBGL_multi_draw");if(q===null)for(let u=0;u<f.length;u++)l(f[u]/V,d[u],m[u]);else{q.multiDrawElementsInstancedWEBGL(n,d,0,r,f,0,m,0,p);let u=0;for(let E=0;E<p;E++)u+=d[E]*m[E];e.update(u,n,1)}}this.setMode=s,this.setIndex=a,this.render=o,this.renderInstances=l,this.renderMultiDraw=c,this.renderMultiDrawInstances=h}function Tu(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,V,a){switch(e.calls++,V){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",V);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function wu(i,t,e){const n=new WeakMap,s=new re;function r(V,a,o){const l=V.morphTargetInfluences,c=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=c!==void 0?c.length:0;let f=n.get(a);if(f===void 0||f.count!==h){let x=function(){T.dispose(),n.delete(a),a.removeEventListener("dispose",x)};f!==void 0&&f.texture.dispose();const d=a.morphAttributes.position!==void 0,p=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,q=a.morphAttributes.position||[],u=a.morphAttributes.normal||[],E=a.morphAttributes.color||[];let S=0;d===!0&&(S=1),p===!0&&(S=2),m===!0&&(S=3);let v=a.attributes.position.count*S,L=1;v>t.maxTextureSize&&(L=Math.ceil(v/t.maxTextureSize),v=t.maxTextureSize);const y=new Float32Array(v*L*4*h),T=new La(y,v,L,h);T.type=sn,T.needsUpdate=!0;const b=S*4;for(let _=0;_<h;_++){const w=q[_],O=u[_],N=E[_],H=v*L*4*_;for(let K=0;K<w.count;K++){const k=K*b;d===!0&&(s.fromBufferAttribute(w,K),y[H+k+0]=s.x,y[H+k+1]=s.y,y[H+k+2]=s.z,y[H+k+3]=0),p===!0&&(s.fromBufferAttribute(O,K),y[H+k+4]=s.x,y[H+k+5]=s.y,y[H+k+6]=s.z,y[H+k+7]=0),m===!0&&(s.fromBufferAttribute(N,K),y[H+k+8]=s.x,y[H+k+9]=s.y,y[H+k+10]=s.z,y[H+k+11]=N.itemSize===4?s.w:1)}}f={count:h,texture:T,size:new vt(v,L)},n.set(a,f),a.addEventListener("dispose",x)}if(V.isInstancedMesh===!0&&V.morphTexture!==null)o.getUniforms().setValue(i,"morphTexture",V.morphTexture,e);else{let d=0;for(let m=0;m<l.length;m++)d+=l[m];const p=a.morphTargetsRelative?1:1-d;o.getUniforms().setValue(i,"morphTargetBaseInfluence",p),o.getUniforms().setValue(i,"morphTargetInfluences",l)}o.getUniforms().setValue(i,"morphTargetsTexture",f.texture,e),o.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function Cu(i,t,e,n){let s=new WeakMap;function r(o){const l=n.render.frame,c=o.geometry,h=t.get(o,c);if(s.get(h)!==l&&(t.update(h),s.set(h,l)),o.isInstancedMesh&&(o.hasEventListener("dispose",a)===!1&&o.addEventListener("dispose",a),s.get(o)!==l&&(e.update(o.instanceMatrix,i.ARRAY_BUFFER),o.instanceColor!==null&&e.update(o.instanceColor,i.ARRAY_BUFFER),s.set(o,l))),o.isSkinnedMesh){const f=o.skeleton;s.get(f)!==l&&(f.update(),s.set(f,l))}return h}function V(){s=new WeakMap}function a(o){const l=o.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:V}}class Ya extends ve{constructor(t,e,n,s,r,V,a,o,l,c=Vi){if(c!==Vi&&c!==ui)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&c===Vi&&(n=Fn),n===void 0&&c===ui&&(n=hi),super(null,s,r,V,a,o,c,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:He,this.minFilter=o!==void 0?o:He,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const Qa=new ve,YV=new Ya(1,1),Xa=new La,Ka=new ql,Ja=new Ha,QV=[],XV=[],KV=new Float32Array(16),JV=new Float32Array(9),jV=new Float32Array(4);function gi(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=QV[s];if(r===void 0&&(r=new Float32Array(s),QV[s]=r),t!==0){n.toArray(r,0);for(let V=1,a=0;V!==t;++V)a+=e,i[V].toArray(r,a)}return r}function ce(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function he(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function xs(i,t){let e=XV[t];e===void 0&&(e=new Int32Array(t),XV[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Ru(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function bu(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ce(e,t))return;i.uniform2fv(this.addr,t),he(e,t)}}function Pu(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ce(e,t))return;i.uniform3fv(this.addr,t),he(e,t)}}function Uu(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ce(e,t))return;i.uniform4fv(this.addr,t),he(e,t)}}function Iu(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(ce(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),he(e,t)}else{if(ce(e,n))return;jV.set(n),i.uniformMatrix2fv(this.addr,!1,jV),he(e,n)}}function Lu(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(ce(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),he(e,t)}else{if(ce(e,n))return;JV.set(n),i.uniformMatrix3fv(this.addr,!1,JV),he(e,n)}}function Du(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(ce(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),he(e,t)}else{if(ce(e,n))return;KV.set(n),i.uniformMatrix4fv(this.addr,!1,KV),he(e,n)}}function Bu(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Fu(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ce(e,t))return;i.uniform2iv(this.addr,t),he(e,t)}}function Nu(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ce(e,t))return;i.uniform3iv(this.addr,t),he(e,t)}}function Ou(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ce(e,t))return;i.uniform4iv(this.addr,t),he(e,t)}}function Gu(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function zu(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ce(e,t))return;i.uniform2uiv(this.addr,t),he(e,t)}}function Hu(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ce(e,t))return;i.uniform3uiv(this.addr,t),he(e,t)}}function ku(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ce(e,t))return;i.uniform4uiv(this.addr,t),he(e,t)}}function Wu(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(YV.compareFunction=Pa,r=YV):r=Qa,e.setTexture2D(t||r,s)}function Yu(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Ka,s)}function Qu(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Ja,s)}function Xu(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Xa,s)}function Ku(i){switch(i){case 5126:return Ru;case 35664:return bu;case 35665:return Pu;case 35666:return Uu;case 35674:return Iu;case 35675:return Lu;case 35676:return Du;case 5124:case 35670:return Bu;case 35667:case 35671:return Fu;case 35668:case 35672:return Nu;case 35669:case 35673:return Ou;case 5125:return Gu;case 36294:return zu;case 36295:return Hu;case 36296:return ku;case 35678:case 36198:case 36298:case 36306:case 35682:return Wu;case 35679:case 36299:case 36307:return Yu;case 35680:case 36300:case 36308:case 36293:return Qu;case 36289:case 36303:case 36311:case 36292:return Xu}}function Ju(i,t){i.uniform1fv(this.addr,t)}function ju(i,t){const e=gi(t,this.size,2);i.uniform2fv(this.addr,e)}function Zu(i,t){const e=gi(t,this.size,3);i.uniform3fv(this.addr,e)}function $u(i,t){const e=gi(t,this.size,4);i.uniform4fv(this.addr,e)}function tf(i,t){const e=gi(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function ef(i,t){const e=gi(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function nf(i,t){const e=gi(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function sf(i,t){i.uniform1iv(this.addr,t)}function rf(i,t){i.uniform2iv(this.addr,t)}function Vf(i,t){i.uniform3iv(this.addr,t)}function af(i,t){i.uniform4iv(this.addr,t)}function of(i,t){i.uniform1uiv(this.addr,t)}function lf(i,t){i.uniform2uiv(this.addr,t)}function cf(i,t){i.uniform3uiv(this.addr,t)}function hf(i,t){i.uniform4uiv(this.addr,t)}function uf(i,t,e){const n=this.cache,s=t.length,r=xs(e,s);ce(n,r)||(i.uniform1iv(this.addr,r),he(n,r));for(let V=0;V!==s;++V)e.setTexture2D(t[V]||Qa,r[V])}function ff(i,t,e){const n=this.cache,s=t.length,r=xs(e,s);ce(n,r)||(i.uniform1iv(this.addr,r),he(n,r));for(let V=0;V!==s;++V)e.setTexture3D(t[V]||Ka,r[V])}function df(i,t,e){const n=this.cache,s=t.length,r=xs(e,s);ce(n,r)||(i.uniform1iv(this.addr,r),he(n,r));for(let V=0;V!==s;++V)e.setTextureCube(t[V]||Ja,r[V])}function qf(i,t,e){const n=this.cache,s=t.length,r=xs(e,s);ce(n,r)||(i.uniform1iv(this.addr,r),he(n,r));for(let V=0;V!==s;++V)e.setTexture2DArray(t[V]||Xa,r[V])}function pf(i){switch(i){case 5126:return Ju;case 35664:return ju;case 35665:return Zu;case 35666:return $u;case 35674:return tf;case 35675:return ef;case 35676:return nf;case 5124:case 35670:return sf;case 35667:case 35671:return rf;case 35668:case 35672:return Vf;case 35669:case 35673:return af;case 5125:return of;case 36294:return lf;case 36295:return cf;case 36296:return hf;case 35678:case 36198:case 36298:case 36306:case 35682:return uf;case 35679:case 36299:case 36307:return ff;case 35680:case 36300:case 36308:case 36293:return df;case 36289:case 36303:case 36311:case 36292:return qf}}class Af{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Ku(e.type)}}class mf{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=pf(e.type)}}class gf{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,V=s.length;r!==V;++r){const a=s[r];a.setValue(t,e[a.id],n)}}}const js=/(\w+)(\])?(\[|\.)?/g;function ZV(i,t){i.seq.push(t),i.map[t.id]=t}function _f(i,t,e){const n=i.name,s=n.length;for(js.lastIndex=0;;){const r=js.exec(n),V=js.lastIndex;let a=r[1];const o=r[2]==="]",l=r[3];if(o&&(a=a|0),l===void 0||l==="["&&V+2===s){ZV(e,l===void 0?new Af(a,i,t):new mf(a,i,t));break}else{let h=e.map[a];h===void 0&&(h=new gf(a),ZV(e,h)),e=h}}}class ps{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=t.getActiveUniform(e,s),V=t.getUniformLocation(e,r.name);_f(r,V,this)}}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,V=e.length;r!==V;++r){const a=e[r],o=n[a.id];o.needsUpdate!==!1&&a.setValue(t,o.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const V=t[s];V.id in e&&n.push(V)}return n}}function $V(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const vf=37297;let xf=0;function Mf(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let V=s;V<r;V++){const a=V+1;n.push(`${a===t?">":" "} ${a}: ${e[V]}`)}return n.join(`
`)}const ta=new bt;function Sf(i){zt._getMatrix(ta,zt.workingColorSpace,i);const t=`mat3( ${ta.elements.map(e=>e.toFixed(4))} )`;switch(zt.getTransfer(i)){case _s:return[t,"LinearTransferOETF"];case Qt:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function ea(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const V=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+Mf(i.getShaderSource(t),V)}else return s}function Ef(i,t){const e=Sf(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function yf(i,t){let e;switch(t){case To:e="Linear";break;case wo:e="Reinhard";break;case Co:e="Cineon";break;case Ro:e="ACESFilmic";break;case Po:e="AgX";break;case Uo:e="Neutral";break;case bo:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const as=new R;function Tf(){zt.getLuminanceCoefficients(as);const i=as.x.toFixed(4),t=as.y.toFixed(4),e=as.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function wf(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ti).join(`
`)}function Cf(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Rf(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),V=r.name;let a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[V]={type:r.type,location:i.getAttribLocation(t,V),locationSize:a}}return e}function Ti(i){return i!==""}function na(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function ia(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const bf=/^[ \t]*#include +<([\w\d./]+)>/gm;function Gr(i){return i.replace(bf,Uf)}const Pf=new Map;function Uf(i,t){let e=Ut[t];if(e===void 0){const n=Pf.get(t);if(n!==void 0)e=Ut[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Gr(e)}const If=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function sa(i){return i.replace(If,Lf)}function Lf(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function ra(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function Df(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Aa?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===ma?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===nn&&(t="SHADOWMAP_TYPE_VSM"),t}function Bf(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case li:case ci:t="ENVMAP_TYPE_CUBE";break;case gs:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Ff(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case ci:t="ENVMAP_MODE_REFRACTION";break}return t}function Nf(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case ga:t="ENVMAP_BLENDING_MULTIPLY";break;case Eo:t="ENVMAP_BLENDING_MIX";break;case yo:t="ENVMAP_BLENDING_ADD";break}return t}function Of(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function Gf(i,t,e,n){const s=i.getContext(),r=e.defines;let V=e.vertexShader,a=e.fragmentShader;const o=Df(e),l=Bf(e),c=Ff(e),h=Nf(e),f=Of(e),d=wf(e),p=Cf(r),m=s.createProgram();let q,u,E=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(q=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(Ti).join(`
`),q.length>0&&(q+=`
`),u=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(Ti).join(`
`),u.length>0&&(u+=`
`)):(q=[ra(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+o:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ti).join(`
`),u=[ra(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+o:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==vn?"#define TONE_MAPPING":"",e.toneMapping!==vn?Ut.tonemapping_pars_fragment:"",e.toneMapping!==vn?yf("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Ut.colorspace_pars_fragment,Ef("linearToOutputTexel",e.outputColorSpace),Tf(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ti).join(`
`)),V=Gr(V),V=na(V,e),V=ia(V,e),a=Gr(a),a=na(a,e),a=ia(a,e),V=sa(V),a=sa(a),e.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,q=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+q,u=["#define varying in",e.glslVersion===AV?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===AV?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);const S=E+q+V,v=E+u+a,L=$V(s,s.VERTEX_SHADER,S),y=$V(s,s.FRAGMENT_SHADER,v);s.attachShader(m,L),s.attachShader(m,y),e.index0AttributeName!==void 0?s.bindAttribLocation(m,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(m,0,"position"),s.linkProgram(m);function T(w){if(i.debug.checkShaderErrors){const O=s.getProgramInfoLog(m).trim(),N=s.getShaderInfoLog(L).trim(),H=s.getShaderInfoLog(y).trim();let K=!0,k=!0;if(s.getProgramParameter(m,s.LINK_STATUS)===!1)if(K=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,m,L,y);else{const $=ea(s,L,"vertex"),z=ea(s,y,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(m,s.VALIDATE_STATUS)+`

Material Name: `+w.name+`
Material Type: `+w.type+`

Program Info Log: `+O+`
`+$+`
`+z)}else O!==""?console.warn("THREE.WebGLProgram: Program Info Log:",O):(N===""||H==="")&&(k=!1);k&&(w.diagnostics={runnable:K,programLog:O,vertexShader:{log:N,prefix:q},fragmentShader:{log:H,prefix:u}})}s.deleteShader(L),s.deleteShader(y),b=new ps(s,m),x=Rf(s,m)}let b;this.getUniforms=function(){return b===void 0&&T(this),b};let x;this.getAttributes=function(){return x===void 0&&T(this),x};let _=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return _===!1&&(_=s.getProgramParameter(m,vf)),_},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(m),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=xf++,this.cacheKey=t,this.usedTimes=1,this.program=m,this.vertexShader=L,this.fragmentShader=y,this}let zf=0;class Hf{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),V=this._getShaderCacheForMaterial(t);return V.has(s)===!1&&(V.add(s),s.usedTimes++),V.has(r)===!1&&(V.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new kf(t),e.set(t,n)),n}}class kf{constructor(t){this.id=zf++,this.code=t,this.usedTimes=0}}function Wf(i,t,e,n,s,r,V){const a=new Ba,o=new Hf,l=new Set,c=[],h=s.logarithmicDepthBuffer,f=s.vertexTextures;let d=s.precision;const p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(x){return l.add(x),x===0?"uv":`uv${x}`}function q(x,_,w,O,N){const H=O.fog,K=N.geometry,k=x.isMeshStandardMaterial?O.environment:null,$=(x.isMeshStandardMaterial?e:t).get(x.envMap||k),z=$&&$.mapping===gs?$.image.height:null,it=p[x.type];x.precision!==null&&(d=s.getMaxPrecision(x.precision),d!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",d,"instead."));const lt=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,gt=lt!==void 0?lt.length:0;let It=0;K.morphAttributes.position!==void 0&&(It=1),K.morphAttributes.normal!==void 0&&(It=2),K.morphAttributes.color!==void 0&&(It=3);let Xt,Y,tt,pt;if(it){const Yt=We[it];Xt=Yt.vertexShader,Y=Yt.fragmentShader}else Xt=x.vertexShader,Y=x.fragmentShader,o.update(x),tt=o.getVertexShaderID(x),pt=o.getFragmentShaderID(x);const st=i.getRenderTarget(),St=i.state.buffers.depth.getReversed(),wt=N.isInstancedMesh===!0,Lt=N.isBatchedMesh===!0,ee=!!x.map,Ot=!!x.matcap,ae=!!$,I=!!x.aoMap,Ce=!!x.lightMap,Dt=!!x.bumpMap,Bt=!!x.normalMap,xt=!!x.displacementMap,jt=!!x.emissiveMap,_t=!!x.metalnessMap,M=!!x.roughnessMap,A=x.anisotropy>0,D=x.clearcoat>0,Q=x.dispersion>0,J=x.iridescence>0,W=x.sheen>0,At=x.transmission>0,rt=A&&!!x.anisotropyMap,ct=D&&!!x.clearcoatMap,Gt=D&&!!x.clearcoatNormalMap,j=D&&!!x.clearcoatRoughnessMap,ht=J&&!!x.iridescenceMap,Mt=J&&!!x.iridescenceThicknessMap,Et=W&&!!x.sheenColorMap,ut=W&&!!x.sheenRoughnessMap,Ft=!!x.specularMap,Pt=!!x.specularColorMap,Kt=!!x.specularIntensityMap,C=At&&!!x.transmissionMap,nt=At&&!!x.thicknessMap,G=!!x.gradientMap,X=!!x.alphaMap,ot=x.alphaTest>0,Vt=!!x.alphaHash,Ct=!!x.extensions;let ne=vn;x.toneMapped&&(st===null||st.isXRRenderTarget===!0)&&(ne=i.toneMapping);const qe={shaderID:it,shaderType:x.type,shaderName:x.name,vertexShader:Xt,fragmentShader:Y,defines:x.defines,customVertexShaderID:tt,customFragmentShaderID:pt,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:d,batching:Lt,batchingColor:Lt&&N._colorsTexture!==null,instancing:wt,instancingColor:wt&&N.instanceColor!==null,instancingMorph:wt&&N.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:st===null?i.outputColorSpace:st.isXRRenderTarget===!0?st.texture.colorSpace:qi,alphaToCoverage:!!x.alphaToCoverage,map:ee,matcap:Ot,envMap:ae,envMapMode:ae&&$.mapping,envMapCubeUVHeight:z,aoMap:I,lightMap:Ce,bumpMap:Dt,normalMap:Bt,displacementMap:f&&xt,emissiveMap:jt,normalMapObjectSpace:Bt&&x.normalMapType===Bo,normalMapTangentSpace:Bt&&x.normalMapType===ba,metalnessMap:_t,roughnessMap:M,anisotropy:A,anisotropyMap:rt,clearcoat:D,clearcoatMap:ct,clearcoatNormalMap:Gt,clearcoatRoughnessMap:j,dispersion:Q,iridescence:J,iridescenceMap:ht,iridescenceThicknessMap:Mt,sheen:W,sheenColorMap:Et,sheenRoughnessMap:ut,specularMap:Ft,specularColorMap:Pt,specularIntensityMap:Kt,transmission:At,transmissionMap:C,thicknessMap:nt,gradientMap:G,opaque:x.transparent===!1&&x.blending===ri&&x.alphaToCoverage===!1,alphaMap:X,alphaTest:ot,alphaHash:Vt,combine:x.combine,mapUv:ee&&m(x.map.channel),aoMapUv:I&&m(x.aoMap.channel),lightMapUv:Ce&&m(x.lightMap.channel),bumpMapUv:Dt&&m(x.bumpMap.channel),normalMapUv:Bt&&m(x.normalMap.channel),displacementMapUv:xt&&m(x.displacementMap.channel),emissiveMapUv:jt&&m(x.emissiveMap.channel),metalnessMapUv:_t&&m(x.metalnessMap.channel),roughnessMapUv:M&&m(x.roughnessMap.channel),anisotropyMapUv:rt&&m(x.anisotropyMap.channel),clearcoatMapUv:ct&&m(x.clearcoatMap.channel),clearcoatNormalMapUv:Gt&&m(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:j&&m(x.clearcoatRoughnessMap.channel),iridescenceMapUv:ht&&m(x.iridescenceMap.channel),iridescenceThicknessMapUv:Mt&&m(x.iridescenceThicknessMap.channel),sheenColorMapUv:Et&&m(x.sheenColorMap.channel),sheenRoughnessMapUv:ut&&m(x.sheenRoughnessMap.channel),specularMapUv:Ft&&m(x.specularMap.channel),specularColorMapUv:Pt&&m(x.specularColorMap.channel),specularIntensityMapUv:Kt&&m(x.specularIntensityMap.channel),transmissionMapUv:C&&m(x.transmissionMap.channel),thicknessMapUv:nt&&m(x.thicknessMap.channel),alphaMapUv:X&&m(x.alphaMap.channel),vertexTangents:!!K.attributes.tangent&&(Bt||A),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!K.attributes.uv&&(ee||X),fog:!!H,useFog:x.fog===!0,fogExp2:!!H&&H.isFogExp2,flatShading:x.flatShading===!0,sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:St,skinning:N.isSkinnedMesh===!0,morphTargets:K.morphAttributes.position!==void 0,morphNormals:K.morphAttributes.normal!==void 0,morphColors:K.morphAttributes.color!==void 0,morphTargetsCount:gt,morphTextureStride:It,numDirLights:_.directional.length,numPointLights:_.point.length,numSpotLights:_.spot.length,numSpotLightMaps:_.spotLightMap.length,numRectAreaLights:_.rectArea.length,numHemiLights:_.hemi.length,numDirLightShadows:_.directionalShadowMap.length,numPointLightShadows:_.pointShadowMap.length,numSpotLightShadows:_.spotShadowMap.length,numSpotLightShadowsWithMaps:_.numSpotLightShadowsWithMaps,numLightProbes:_.numLightProbes,numClippingPlanes:V.numPlanes,numClipIntersection:V.numIntersection,dithering:x.dithering,shadowMapEnabled:i.shadowMap.enabled&&w.length>0,shadowMapType:i.shadowMap.type,toneMapping:ne,decodeVideoTexture:ee&&x.map.isVideoTexture===!0&&zt.getTransfer(x.map.colorSpace)===Qt,decodeVideoTextureEmissive:jt&&x.emissiveMap.isVideoTexture===!0&&zt.getTransfer(x.emissiveMap.colorSpace)===Qt,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===oe,flipSided:x.side===_e,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:Ct&&x.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ct&&x.extensions.multiDraw===!0||Lt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return qe.vertexUv1s=l.has(1),qe.vertexUv2s=l.has(2),qe.vertexUv3s=l.has(3),l.clear(),qe}function u(x){const _=[];if(x.shaderID?_.push(x.shaderID):(_.push(x.customVertexShaderID),_.push(x.customFragmentShaderID)),x.defines!==void 0)for(const w in x.defines)_.push(w),_.push(x.defines[w]);return x.isRawShaderMaterial===!1&&(E(_,x),S(_,x),_.push(i.outputColorSpace)),_.push(x.customProgramCacheKey),_.join()}function E(x,_){x.push(_.precision),x.push(_.outputColorSpace),x.push(_.envMapMode),x.push(_.envMapCubeUVHeight),x.push(_.mapUv),x.push(_.alphaMapUv),x.push(_.lightMapUv),x.push(_.aoMapUv),x.push(_.bumpMapUv),x.push(_.normalMapUv),x.push(_.displacementMapUv),x.push(_.emissiveMapUv),x.push(_.metalnessMapUv),x.push(_.roughnessMapUv),x.push(_.anisotropyMapUv),x.push(_.clearcoatMapUv),x.push(_.clearcoatNormalMapUv),x.push(_.clearcoatRoughnessMapUv),x.push(_.iridescenceMapUv),x.push(_.iridescenceThicknessMapUv),x.push(_.sheenColorMapUv),x.push(_.sheenRoughnessMapUv),x.push(_.specularMapUv),x.push(_.specularColorMapUv),x.push(_.specularIntensityMapUv),x.push(_.transmissionMapUv),x.push(_.thicknessMapUv),x.push(_.combine),x.push(_.fogExp2),x.push(_.sizeAttenuation),x.push(_.morphTargetsCount),x.push(_.morphAttributeCount),x.push(_.numDirLights),x.push(_.numPointLights),x.push(_.numSpotLights),x.push(_.numSpotLightMaps),x.push(_.numHemiLights),x.push(_.numRectAreaLights),x.push(_.numDirLightShadows),x.push(_.numPointLightShadows),x.push(_.numSpotLightShadows),x.push(_.numSpotLightShadowsWithMaps),x.push(_.numLightProbes),x.push(_.shadowMapType),x.push(_.toneMapping),x.push(_.numClippingPlanes),x.push(_.numClipIntersection),x.push(_.depthPacking)}function S(x,_){a.disableAll(),_.supportsVertexTextures&&a.enable(0),_.instancing&&a.enable(1),_.instancingColor&&a.enable(2),_.instancingMorph&&a.enable(3),_.matcap&&a.enable(4),_.envMap&&a.enable(5),_.normalMapObjectSpace&&a.enable(6),_.normalMapTangentSpace&&a.enable(7),_.clearcoat&&a.enable(8),_.iridescence&&a.enable(9),_.alphaTest&&a.enable(10),_.vertexColors&&a.enable(11),_.vertexAlphas&&a.enable(12),_.vertexUv1s&&a.enable(13),_.vertexUv2s&&a.enable(14),_.vertexUv3s&&a.enable(15),_.vertexTangents&&a.enable(16),_.anisotropy&&a.enable(17),_.alphaHash&&a.enable(18),_.batching&&a.enable(19),_.dispersion&&a.enable(20),_.batchingColor&&a.enable(21),x.push(a.mask),a.disableAll(),_.fog&&a.enable(0),_.useFog&&a.enable(1),_.flatShading&&a.enable(2),_.logarithmicDepthBuffer&&a.enable(3),_.reverseDepthBuffer&&a.enable(4),_.skinning&&a.enable(5),_.morphTargets&&a.enable(6),_.morphNormals&&a.enable(7),_.morphColors&&a.enable(8),_.premultipliedAlpha&&a.enable(9),_.shadowMapEnabled&&a.enable(10),_.doubleSided&&a.enable(11),_.flipSided&&a.enable(12),_.useDepthPacking&&a.enable(13),_.dithering&&a.enable(14),_.transmission&&a.enable(15),_.sheen&&a.enable(16),_.opaque&&a.enable(17),_.pointsUvs&&a.enable(18),_.decodeVideoTexture&&a.enable(19),_.decodeVideoTextureEmissive&&a.enable(20),_.alphaToCoverage&&a.enable(21),x.push(a.mask)}function v(x){const _=p[x.type];let w;if(_){const O=We[_];w=Tl.clone(O.uniforms)}else w=x.uniforms;return w}function L(x,_){let w;for(let O=0,N=c.length;O<N;O++){const H=c[O];if(H.cacheKey===_){w=H,++w.usedTimes;break}}return w===void 0&&(w=new Gf(i,_,x,r),c.push(w)),w}function y(x){if(--x.usedTimes===0){const _=c.indexOf(x);c[_]=c[c.length-1],c.pop(),x.destroy()}}function T(x){o.remove(x)}function b(){o.dispose()}return{getParameters:q,getProgramCacheKey:u,getUniforms:v,acquireProgram:L,releaseProgram:y,releaseShaderCache:T,programs:c,dispose:b}}function Yf(){let i=new WeakMap;function t(V){return i.has(V)}function e(V){let a=i.get(V);return a===void 0&&(a={},i.set(V,a)),a}function n(V){i.delete(V)}function s(V,a,o){i.get(V)[a]=o}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function Qf(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Va(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function aa(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function V(h,f,d,p,m,q){let u=i[t];return u===void 0?(u={id:h.id,object:h,geometry:f,material:d,groupOrder:p,renderOrder:h.renderOrder,z:m,group:q},i[t]=u):(u.id=h.id,u.object=h,u.geometry=f,u.material=d,u.groupOrder=p,u.renderOrder=h.renderOrder,u.z=m,u.group=q),t++,u}function a(h,f,d,p,m,q){const u=V(h,f,d,p,m,q);d.transmission>0?n.push(u):d.transparent===!0?s.push(u):e.push(u)}function o(h,f,d,p,m,q){const u=V(h,f,d,p,m,q);d.transmission>0?n.unshift(u):d.transparent===!0?s.unshift(u):e.unshift(u)}function l(h,f){e.length>1&&e.sort(h||Qf),n.length>1&&n.sort(f||Va),s.length>1&&s.sort(f||Va)}function c(){for(let h=t,f=i.length;h<f;h++){const d=i[h];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:o,finish:c,sort:l}}function Xf(){let i=new WeakMap;function t(n,s){const r=i.get(n);let V;return r===void 0?(V=new aa,i.set(n,[V])):s>=r.length?(V=new aa,r.push(V)):V=r[s],V}function e(){i=new WeakMap}return{get:t,dispose:e}}function Kf(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new R,color:new Nt};break;case"SpotLight":e={position:new R,direction:new R,color:new Nt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new R,color:new Nt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new R,skyColor:new Nt,groundColor:new Nt};break;case"RectAreaLight":e={color:new Nt,position:new R,halfWidth:new R,halfHeight:new R};break}return i[t.id]=e,e}}}function Jf(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new vt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new vt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new vt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let jf=0;function Zf(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function $f(i){const t=new Kf,e=Jf(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new R);const s=new R,r=new te,V=new te;function a(l){let c=0,h=0,f=0;for(let x=0;x<9;x++)n.probe[x].set(0,0,0);let d=0,p=0,m=0,q=0,u=0,E=0,S=0,v=0,L=0,y=0,T=0;l.sort(Zf);for(let x=0,_=l.length;x<_;x++){const w=l[x],O=w.color,N=w.intensity,H=w.distance,K=w.shadow&&w.shadow.map?w.shadow.map.texture:null;if(w.isAmbientLight)c+=O.r*N,h+=O.g*N,f+=O.b*N;else if(w.isLightProbe){for(let k=0;k<9;k++)n.probe[k].addScaledVector(w.sh.coefficients[k],N);T++}else if(w.isDirectionalLight){const k=t.get(w);if(k.color.copy(w.color).multiplyScalar(w.intensity),w.castShadow){const $=w.shadow,z=e.get(w);z.shadowIntensity=$.intensity,z.shadowBias=$.bias,z.shadowNormalBias=$.normalBias,z.shadowRadius=$.radius,z.shadowMapSize=$.mapSize,n.directionalShadow[d]=z,n.directionalShadowMap[d]=K,n.directionalShadowMatrix[d]=w.shadow.matrix,E++}n.directional[d]=k,d++}else if(w.isSpotLight){const k=t.get(w);k.position.setFromMatrixPosition(w.matrixWorld),k.color.copy(O).multiplyScalar(N),k.distance=H,k.coneCos=Math.cos(w.angle),k.penumbraCos=Math.cos(w.angle*(1-w.penumbra)),k.decay=w.decay,n.spot[m]=k;const $=w.shadow;if(w.map&&(n.spotLightMap[L]=w.map,L++,$.updateMatrices(w),w.castShadow&&y++),n.spotLightMatrix[m]=$.matrix,w.castShadow){const z=e.get(w);z.shadowIntensity=$.intensity,z.shadowBias=$.bias,z.shadowNormalBias=$.normalBias,z.shadowRadius=$.radius,z.shadowMapSize=$.mapSize,n.spotShadow[m]=z,n.spotShadowMap[m]=K,v++}m++}else if(w.isRectAreaLight){const k=t.get(w);k.color.copy(O).multiplyScalar(N),k.halfWidth.set(w.width*.5,0,0),k.halfHeight.set(0,w.height*.5,0),n.rectArea[q]=k,q++}else if(w.isPointLight){const k=t.get(w);if(k.color.copy(w.color).multiplyScalar(w.intensity),k.distance=w.distance,k.decay=w.decay,w.castShadow){const $=w.shadow,z=e.get(w);z.shadowIntensity=$.intensity,z.shadowBias=$.bias,z.shadowNormalBias=$.normalBias,z.shadowRadius=$.radius,z.shadowMapSize=$.mapSize,z.shadowCameraNear=$.camera.near,z.shadowCameraFar=$.camera.far,n.pointShadow[p]=z,n.pointShadowMap[p]=K,n.pointShadowMatrix[p]=w.shadow.matrix,S++}n.point[p]=k,p++}else if(w.isHemisphereLight){const k=t.get(w);k.skyColor.copy(w.color).multiplyScalar(N),k.groundColor.copy(w.groundColor).multiplyScalar(N),n.hemi[u]=k,u++}}q>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=et.LTC_FLOAT_1,n.rectAreaLTC2=et.LTC_FLOAT_2):(n.rectAreaLTC1=et.LTC_HALF_1,n.rectAreaLTC2=et.LTC_HALF_2)),n.ambient[0]=c,n.ambient[1]=h,n.ambient[2]=f;const b=n.hash;(b.directionalLength!==d||b.pointLength!==p||b.spotLength!==m||b.rectAreaLength!==q||b.hemiLength!==u||b.numDirectionalShadows!==E||b.numPointShadows!==S||b.numSpotShadows!==v||b.numSpotMaps!==L||b.numLightProbes!==T)&&(n.directional.length=d,n.spot.length=m,n.rectArea.length=q,n.point.length=p,n.hemi.length=u,n.directionalShadow.length=E,n.directionalShadowMap.length=E,n.pointShadow.length=S,n.pointShadowMap.length=S,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=E,n.pointShadowMatrix.length=S,n.spotLightMatrix.length=v+L-y,n.spotLightMap.length=L,n.numSpotLightShadowsWithMaps=y,n.numLightProbes=T,b.directionalLength=d,b.pointLength=p,b.spotLength=m,b.rectAreaLength=q,b.hemiLength=u,b.numDirectionalShadows=E,b.numPointShadows=S,b.numSpotShadows=v,b.numSpotMaps=L,b.numLightProbes=T,n.version=jf++)}function o(l,c){let h=0,f=0,d=0,p=0,m=0;const q=c.matrixWorldInverse;for(let u=0,E=l.length;u<E;u++){const S=l[u];if(S.isDirectionalLight){const v=n.directional[h];v.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(q),h++}else if(S.isSpotLight){const v=n.spot[d];v.position.setFromMatrixPosition(S.matrixWorld),v.position.applyMatrix4(q),v.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(q),d++}else if(S.isRectAreaLight){const v=n.rectArea[p];v.position.setFromMatrixPosition(S.matrixWorld),v.position.applyMatrix4(q),V.identity(),r.copy(S.matrixWorld),r.premultiply(q),V.extractRotation(r),v.halfWidth.set(S.width*.5,0,0),v.halfHeight.set(0,S.height*.5,0),v.halfWidth.applyMatrix4(V),v.halfHeight.applyMatrix4(V),p++}else if(S.isPointLight){const v=n.point[f];v.position.setFromMatrixPosition(S.matrixWorld),v.position.applyMatrix4(q),f++}else if(S.isHemisphereLight){const v=n.hemi[m];v.direction.setFromMatrixPosition(S.matrixWorld),v.direction.transformDirection(q),m++}}}return{setup:a,setupView:o,state:n}}function oa(i){const t=new $f(i),e=[],n=[];function s(c){l.camera=c,e.length=0,n.length=0}function r(c){e.push(c)}function V(c){n.push(c)}function a(){t.setup(e)}function o(c){t.setupView(e,c)}const l={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:a,setupLightsView:o,pushLight:r,pushShadow:V}}function td(i){let t=new WeakMap;function e(s,r=0){const V=t.get(s);let a;return V===void 0?(a=new oa(i),t.set(s,[a])):r>=V.length?(a=new oa(i),V.push(a)):a=V[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}class ed extends mi{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Lo,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class nd extends mi{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const id=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,sd=`uniform sampler2D shadow_pass;
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
}`;function rd(i,t,e){let n=new Zr;const s=new vt,r=new vt,V=new re,a=new ed({depthPacking:Do}),o=new nd,l={},c=e.maxTextureSize,h={[Mn]:_e,[_e]:Mn,[oe]:oe},f=new Sn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new vt},radius:{value:4}},vertexShader:id,fragmentShader:sd}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const p=new xe;p.setAttribute("position",new Ie(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const m=new Tt(p,f),q=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Aa;let u=this.type;this.render=function(y,T,b){if(q.enabled===!1||q.autoUpdate===!1&&q.needsUpdate===!1||y.length===0)return;const x=i.getRenderTarget(),_=i.getActiveCubeFace(),w=i.getActiveMipmapLevel(),O=i.state;O.setBlending(_n),O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);const N=u!==nn&&this.type===nn,H=u===nn&&this.type!==nn;for(let K=0,k=y.length;K<k;K++){const $=y[K],z=$.shadow;if(z===void 0){console.warn("THREE.WebGLShadowMap:",$,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;s.copy(z.mapSize);const it=z.getFrameExtents();if(s.multiply(it),r.copy(z.mapSize),(s.x>c||s.y>c)&&(s.x>c&&(r.x=Math.floor(c/it.x),s.x=r.x*it.x,z.mapSize.x=r.x),s.y>c&&(r.y=Math.floor(c/it.y),s.y=r.y*it.y,z.mapSize.y=r.y)),z.map===null||N===!0||H===!0){const gt=this.type!==nn?{minFilter:He,magFilter:He}:{};z.map!==null&&z.map.dispose(),z.map=new Nn(s.x,s.y,gt),z.map.texture.name=$.name+".shadowMap",z.camera.updateProjectionMatrix()}i.setRenderTarget(z.map),i.clear();const lt=z.getViewportCount();for(let gt=0;gt<lt;gt++){const It=z.getViewport(gt);V.set(r.x*It.x,r.y*It.y,r.x*It.z,r.y*It.w),O.viewport(V),z.updateMatrices($,gt),n=z.getFrustum(),v(T,b,z.camera,$,this.type)}z.isPointLightShadow!==!0&&this.type===nn&&E(z,b),z.needsUpdate=!1}u=this.type,q.needsUpdate=!1,i.setRenderTarget(x,_,w)};function E(y,T){const b=t.update(m);f.defines.VSM_SAMPLES!==y.blurSamples&&(f.defines.VSM_SAMPLES=y.blurSamples,d.defines.VSM_SAMPLES=y.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),y.mapPass===null&&(y.mapPass=new Nn(s.x,s.y)),f.uniforms.shadow_pass.value=y.map.texture,f.uniforms.resolution.value=y.mapSize,f.uniforms.radius.value=y.radius,i.setRenderTarget(y.mapPass),i.clear(),i.renderBufferDirect(T,null,b,f,m,null),d.uniforms.shadow_pass.value=y.mapPass.texture,d.uniforms.resolution.value=y.mapSize,d.uniforms.radius.value=y.radius,i.setRenderTarget(y.map),i.clear(),i.renderBufferDirect(T,null,b,d,m,null)}function S(y,T,b,x){let _=null;const w=b.isPointLight===!0?y.customDistanceMaterial:y.customDepthMaterial;if(w!==void 0)_=w;else if(_=b.isPointLight===!0?o:a,i.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){const O=_.uuid,N=T.uuid;let H=l[O];H===void 0&&(H={},l[O]=H);let K=H[N];K===void 0&&(K=_.clone(),H[N]=K,T.addEventListener("dispose",L)),_=K}if(_.visible=T.visible,_.wireframe=T.wireframe,x===nn?_.side=T.shadowSide!==null?T.shadowSide:T.side:_.side=T.shadowSide!==null?T.shadowSide:h[T.side],_.alphaMap=T.alphaMap,_.alphaTest=T.alphaTest,_.map=T.map,_.clipShadows=T.clipShadows,_.clippingPlanes=T.clippingPlanes,_.clipIntersection=T.clipIntersection,_.displacementMap=T.displacementMap,_.displacementScale=T.displacementScale,_.displacementBias=T.displacementBias,_.wireframeLinewidth=T.wireframeLinewidth,_.linewidth=T.linewidth,b.isPointLight===!0&&_.isMeshDistanceMaterial===!0){const O=i.properties.get(_);O.light=b}return _}function v(y,T,b,x,_){if(y.visible===!1)return;if(y.layers.test(T.layers)&&(y.isMesh||y.isLine||y.isPoints)&&(y.castShadow||y.receiveShadow&&_===nn)&&(!y.frustumCulled||n.intersectsObject(y))){y.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,y.matrixWorld);const N=t.update(y),H=y.material;if(Array.isArray(H)){const K=N.groups;for(let k=0,$=K.length;k<$;k++){const z=K[k],it=H[z.materialIndex];if(it&&it.visible){const lt=S(y,it,x,_);y.onBeforeShadow(i,y,T,b,N,lt,z),i.renderBufferDirect(b,null,N,lt,y,z),y.onAfterShadow(i,y,T,b,N,lt,z)}}}else if(H.visible){const K=S(y,H,x,_);y.onBeforeShadow(i,y,T,b,N,K,null),i.renderBufferDirect(b,null,N,K,y,null),y.onAfterShadow(i,y,T,b,N,K,null)}}const O=y.children;for(let N=0,H=O.length;N<H;N++)v(O[N],T,b,x,_)}function L(y){y.target.removeEventListener("dispose",L);for(const b in l){const x=l[b],_=y.target.uuid;_ in x&&(x[_].dispose(),delete x[_])}}}const Vd={[rr]:Vr,[ar]:cr,[or]:hr,[oi]:lr,[Vr]:rr,[cr]:ar,[hr]:or,[lr]:oi};function ad(i,t){function e(){let C=!1;const nt=new re;let G=null;const X=new re(0,0,0,0);return{setMask:function(ot){G!==ot&&!C&&(i.colorMask(ot,ot,ot,ot),G=ot)},setLocked:function(ot){C=ot},setClear:function(ot,Vt,Ct,ne,qe){qe===!0&&(ot*=ne,Vt*=ne,Ct*=ne),nt.set(ot,Vt,Ct,ne),X.equals(nt)===!1&&(i.clearColor(ot,Vt,Ct,ne),X.copy(nt))},reset:function(){C=!1,G=null,X.set(-1,0,0,0)}}}function n(){let C=!1,nt=!1,G=null,X=null,ot=null;return{setReversed:function(Vt){if(nt!==Vt){const Ct=t.get("EXT_clip_control");nt?Ct.clipControlEXT(Ct.LOWER_LEFT_EXT,Ct.ZERO_TO_ONE_EXT):Ct.clipControlEXT(Ct.LOWER_LEFT_EXT,Ct.NEGATIVE_ONE_TO_ONE_EXT);const ne=ot;ot=null,this.setClear(ne)}nt=Vt},getReversed:function(){return nt},setTest:function(Vt){Vt?st(i.DEPTH_TEST):St(i.DEPTH_TEST)},setMask:function(Vt){G!==Vt&&!C&&(i.depthMask(Vt),G=Vt)},setFunc:function(Vt){if(nt&&(Vt=Vd[Vt]),X!==Vt){switch(Vt){case rr:i.depthFunc(i.NEVER);break;case Vr:i.depthFunc(i.ALWAYS);break;case ar:i.depthFunc(i.LESS);break;case oi:i.depthFunc(i.LEQUAL);break;case or:i.depthFunc(i.EQUAL);break;case lr:i.depthFunc(i.GEQUAL);break;case cr:i.depthFunc(i.GREATER);break;case hr:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}X=Vt}},setLocked:function(Vt){C=Vt},setClear:function(Vt){ot!==Vt&&(nt&&(Vt=1-Vt),i.clearDepth(Vt),ot=Vt)},reset:function(){C=!1,G=null,X=null,ot=null,nt=!1}}}function s(){let C=!1,nt=null,G=null,X=null,ot=null,Vt=null,Ct=null,ne=null,qe=null;return{setTest:function(Yt){C||(Yt?st(i.STENCIL_TEST):St(i.STENCIL_TEST))},setMask:function(Yt){nt!==Yt&&!C&&(i.stencilMask(Yt),nt=Yt)},setFunc:function(Yt,Le,Ke){(G!==Yt||X!==Le||ot!==Ke)&&(i.stencilFunc(Yt,Le,Ke),G=Yt,X=Le,ot=Ke)},setOp:function(Yt,Le,Ke){(Vt!==Yt||Ct!==Le||ne!==Ke)&&(i.stencilOp(Yt,Le,Ke),Vt=Yt,Ct=Le,ne=Ke)},setLocked:function(Yt){C=Yt},setClear:function(Yt){qe!==Yt&&(i.clearStencil(Yt),qe=Yt)},reset:function(){C=!1,nt=null,G=null,X=null,ot=null,Vt=null,Ct=null,ne=null,qe=null}}}const r=new e,V=new n,a=new s,o=new WeakMap,l=new WeakMap;let c={},h={},f=new WeakMap,d=[],p=null,m=!1,q=null,u=null,E=null,S=null,v=null,L=null,y=null,T=new Nt(0,0,0),b=0,x=!1,_=null,w=null,O=null,N=null,H=null;const K=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let k=!1,$=0;const z=i.getParameter(i.VERSION);z.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(z)[1]),k=$>=1):z.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(z)[1]),k=$>=2);let it=null,lt={};const gt=i.getParameter(i.SCISSOR_BOX),It=i.getParameter(i.VIEWPORT),Xt=new re().fromArray(gt),Y=new re().fromArray(It);function tt(C,nt,G,X){const ot=new Uint8Array(4),Vt=i.createTexture();i.bindTexture(C,Vt),i.texParameteri(C,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(C,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ct=0;Ct<G;Ct++)C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY?i.texImage3D(nt,0,i.RGBA,1,1,X,0,i.RGBA,i.UNSIGNED_BYTE,ot):i.texImage2D(nt+Ct,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ot);return Vt}const pt={};pt[i.TEXTURE_2D]=tt(i.TEXTURE_2D,i.TEXTURE_2D,1),pt[i.TEXTURE_CUBE_MAP]=tt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),pt[i.TEXTURE_2D_ARRAY]=tt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),pt[i.TEXTURE_3D]=tt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),V.setClear(1),a.setClear(0),st(i.DEPTH_TEST),V.setFunc(oi),Dt(!1),Bt(uV),st(i.CULL_FACE),I(_n);function st(C){c[C]!==!0&&(i.enable(C),c[C]=!0)}function St(C){c[C]!==!1&&(i.disable(C),c[C]=!1)}function wt(C,nt){return h[C]!==nt?(i.bindFramebuffer(C,nt),h[C]=nt,C===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=nt),C===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=nt),!0):!1}function Lt(C,nt){let G=d,X=!1;if(C){G=f.get(nt),G===void 0&&(G=[],f.set(nt,G));const ot=C.textures;if(G.length!==ot.length||G[0]!==i.COLOR_ATTACHMENT0){for(let Vt=0,Ct=ot.length;Vt<Ct;Vt++)G[Vt]=i.COLOR_ATTACHMENT0+Vt;G.length=ot.length,X=!0}}else G[0]!==i.BACK&&(G[0]=i.BACK,X=!0);X&&i.drawBuffers(G)}function ee(C){return p!==C?(i.useProgram(C),p=C,!0):!1}const Ot={[In]:i.FUNC_ADD,[ao]:i.FUNC_SUBTRACT,[oo]:i.FUNC_REVERSE_SUBTRACT};Ot[lo]=i.MIN,Ot[co]=i.MAX;const ae={[ho]:i.ZERO,[uo]:i.ONE,[fo]:i.SRC_COLOR,[ir]:i.SRC_ALPHA,[_o]:i.SRC_ALPHA_SATURATE,[mo]:i.DST_COLOR,[po]:i.DST_ALPHA,[qo]:i.ONE_MINUS_SRC_COLOR,[sr]:i.ONE_MINUS_SRC_ALPHA,[go]:i.ONE_MINUS_DST_COLOR,[Ao]:i.ONE_MINUS_DST_ALPHA,[vo]:i.CONSTANT_COLOR,[xo]:i.ONE_MINUS_CONSTANT_COLOR,[Mo]:i.CONSTANT_ALPHA,[So]:i.ONE_MINUS_CONSTANT_ALPHA};function I(C,nt,G,X,ot,Vt,Ct,ne,qe,Yt){if(C===_n){m===!0&&(St(i.BLEND),m=!1);return}if(m===!1&&(st(i.BLEND),m=!0),C!==Vo){if(C!==q||Yt!==x){if((u!==In||v!==In)&&(i.blendEquation(i.FUNC_ADD),u=In,v=In),Yt)switch(C){case ri:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Pi:i.blendFunc(i.ONE,i.ONE);break;case fV:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case dV:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",C);break}else switch(C){case ri:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Pi:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case fV:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case dV:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",C);break}E=null,S=null,L=null,y=null,T.set(0,0,0),b=0,q=C,x=Yt}return}ot=ot||nt,Vt=Vt||G,Ct=Ct||X,(nt!==u||ot!==v)&&(i.blendEquationSeparate(Ot[nt],Ot[ot]),u=nt,v=ot),(G!==E||X!==S||Vt!==L||Ct!==y)&&(i.blendFuncSeparate(ae[G],ae[X],ae[Vt],ae[Ct]),E=G,S=X,L=Vt,y=Ct),(ne.equals(T)===!1||qe!==b)&&(i.blendColor(ne.r,ne.g,ne.b,qe),T.copy(ne),b=qe),q=C,x=!1}function Ce(C,nt){C.side===oe?St(i.CULL_FACE):st(i.CULL_FACE);let G=C.side===_e;nt&&(G=!G),Dt(G),C.blending===ri&&C.transparent===!1?I(_n):I(C.blending,C.blendEquation,C.blendSrc,C.blendDst,C.blendEquationAlpha,C.blendSrcAlpha,C.blendDstAlpha,C.blendColor,C.blendAlpha,C.premultipliedAlpha),V.setFunc(C.depthFunc),V.setTest(C.depthTest),V.setMask(C.depthWrite),r.setMask(C.colorWrite);const X=C.stencilWrite;a.setTest(X),X&&(a.setMask(C.stencilWriteMask),a.setFunc(C.stencilFunc,C.stencilRef,C.stencilFuncMask),a.setOp(C.stencilFail,C.stencilZFail,C.stencilZPass)),jt(C.polygonOffset,C.polygonOffsetFactor,C.polygonOffsetUnits),C.alphaToCoverage===!0?st(i.SAMPLE_ALPHA_TO_COVERAGE):St(i.SAMPLE_ALPHA_TO_COVERAGE)}function Dt(C){_!==C&&(C?i.frontFace(i.CW):i.frontFace(i.CCW),_=C)}function Bt(C){C!==so?(st(i.CULL_FACE),C!==w&&(C===uV?i.cullFace(i.BACK):C===ro?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):St(i.CULL_FACE),w=C}function xt(C){C!==O&&(k&&i.lineWidth(C),O=C)}function jt(C,nt,G){C?(st(i.POLYGON_OFFSET_FILL),(N!==nt||H!==G)&&(i.polygonOffset(nt,G),N=nt,H=G)):St(i.POLYGON_OFFSET_FILL)}function _t(C){C?st(i.SCISSOR_TEST):St(i.SCISSOR_TEST)}function M(C){C===void 0&&(C=i.TEXTURE0+K-1),it!==C&&(i.activeTexture(C),it=C)}function A(C,nt,G){G===void 0&&(it===null?G=i.TEXTURE0+K-1:G=it);let X=lt[G];X===void 0&&(X={type:void 0,texture:void 0},lt[G]=X),(X.type!==C||X.texture!==nt)&&(it!==G&&(i.activeTexture(G),it=G),i.bindTexture(C,nt||pt[C]),X.type=C,X.texture=nt)}function D(){const C=lt[it];C!==void 0&&C.type!==void 0&&(i.bindTexture(C.type,null),C.type=void 0,C.texture=void 0)}function Q(){try{i.compressedTexImage2D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function J(){try{i.compressedTexImage3D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function W(){try{i.texSubImage2D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function At(){try{i.texSubImage3D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function rt(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function ct(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Gt(){try{i.texStorage2D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function j(){try{i.texStorage3D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function ht(){try{i.texImage2D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Mt(){try{i.texImage3D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Et(C){Xt.equals(C)===!1&&(i.scissor(C.x,C.y,C.z,C.w),Xt.copy(C))}function ut(C){Y.equals(C)===!1&&(i.viewport(C.x,C.y,C.z,C.w),Y.copy(C))}function Ft(C,nt){let G=l.get(nt);G===void 0&&(G=new WeakMap,l.set(nt,G));let X=G.get(C);X===void 0&&(X=i.getUniformBlockIndex(nt,C.name),G.set(C,X))}function Pt(C,nt){const X=l.get(nt).get(C);o.get(nt)!==X&&(i.uniformBlockBinding(nt,X,C.__bindingPointIndex),o.set(nt,X))}function Kt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),V.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),c={},it=null,lt={},h={},f=new WeakMap,d=[],p=null,m=!1,q=null,u=null,E=null,S=null,v=null,L=null,y=null,T=new Nt(0,0,0),b=0,x=!1,_=null,w=null,O=null,N=null,H=null,Xt.set(0,0,i.canvas.width,i.canvas.height),Y.set(0,0,i.canvas.width,i.canvas.height),r.reset(),V.reset(),a.reset()}return{buffers:{color:r,depth:V,stencil:a},enable:st,disable:St,bindFramebuffer:wt,drawBuffers:Lt,useProgram:ee,setBlending:I,setMaterial:Ce,setFlipSided:Dt,setCullFace:Bt,setLineWidth:xt,setPolygonOffset:jt,setScissorTest:_t,activeTexture:M,bindTexture:A,unbindTexture:D,compressedTexImage2D:Q,compressedTexImage3D:J,texImage2D:ht,texImage3D:Mt,updateUBOMapping:Ft,uniformBlockBinding:Pt,texStorage2D:Gt,texStorage3D:j,texSubImage2D:W,texSubImage3D:At,compressedTexSubImage2D:rt,compressedTexSubImage3D:ct,scissor:Et,viewport:ut,reset:Kt}}function la(i,t,e,n){const s=od(n);switch(e){case Sa:return i*t;case ya:return i*t;case Ta:return i*t*2;case wa:return i*t/s.components*s.byteLength;case Xr:return i*t/s.components*s.byteLength;case Ca:return i*t*2/s.components*s.byteLength;case Kr:return i*t*2/s.components*s.byteLength;case Ea:return i*t*3/s.components*s.byteLength;case Ge:return i*t*4/s.components*s.byteLength;case Jr:return i*t*4/s.components*s.byteLength;case hs:case us:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case fs:case ds:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case pr:case mr:return Math.max(i,16)*Math.max(t,8)/4;case qr:case Ar:return Math.max(i,8)*Math.max(t,8)/2;case gr:case _r:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case vr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case xr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Mr:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Sr:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Er:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case yr:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Tr:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case wr:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Cr:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Rr:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case br:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Pr:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Ur:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Ir:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Lr:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case qs:case Dr:case Br:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Ra:case Fr:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Nr:case Or:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function od(i){switch(i){case an:case va:return{byteLength:1,components:1};case Ii:case xa:case Di:return{byteLength:2,components:1};case Yr:case Qr:return{byteLength:2,components:4};case Fn:case Wr:case sn:return{byteLength:4,components:1};case Ma:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function ld(i,t,e,n,s,r,V){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,o=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new vt,c=new WeakMap;let h;const f=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function p(M,A){return d?new OffscreenCanvas(M,A):ms("canvas")}function m(M,A,D){let Q=1;const J=_t(M);if((J.width>D||J.height>D)&&(Q=D/Math.max(J.width,J.height)),Q<1)if(typeof HTMLImageElement<"u"&&M instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&M instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&M instanceof ImageBitmap||typeof VideoFrame<"u"&&M instanceof VideoFrame){const W=Math.floor(Q*J.width),At=Math.floor(Q*J.height);h===void 0&&(h=p(W,At));const rt=A?p(W,At):h;return rt.width=W,rt.height=At,rt.getContext("2d").drawImage(M,0,0,W,At),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+W+"x"+At+")."),rt}else return"data"in M&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),M;return M}function q(M){return M.generateMipmaps}function u(M){i.generateMipmap(M)}function E(M){return M.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:M.isWebGL3DRenderTarget?i.TEXTURE_3D:M.isWebGLArrayRenderTarget||M.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function S(M,A,D,Q,J=!1){if(M!==null){if(i[M]!==void 0)return i[M];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+M+"'")}let W=A;if(A===i.RED&&(D===i.FLOAT&&(W=i.R32F),D===i.HALF_FLOAT&&(W=i.R16F),D===i.UNSIGNED_BYTE&&(W=i.R8)),A===i.RED_INTEGER&&(D===i.UNSIGNED_BYTE&&(W=i.R8UI),D===i.UNSIGNED_SHORT&&(W=i.R16UI),D===i.UNSIGNED_INT&&(W=i.R32UI),D===i.BYTE&&(W=i.R8I),D===i.SHORT&&(W=i.R16I),D===i.INT&&(W=i.R32I)),A===i.RG&&(D===i.FLOAT&&(W=i.RG32F),D===i.HALF_FLOAT&&(W=i.RG16F),D===i.UNSIGNED_BYTE&&(W=i.RG8)),A===i.RG_INTEGER&&(D===i.UNSIGNED_BYTE&&(W=i.RG8UI),D===i.UNSIGNED_SHORT&&(W=i.RG16UI),D===i.UNSIGNED_INT&&(W=i.RG32UI),D===i.BYTE&&(W=i.RG8I),D===i.SHORT&&(W=i.RG16I),D===i.INT&&(W=i.RG32I)),A===i.RGB_INTEGER&&(D===i.UNSIGNED_BYTE&&(W=i.RGB8UI),D===i.UNSIGNED_SHORT&&(W=i.RGB16UI),D===i.UNSIGNED_INT&&(W=i.RGB32UI),D===i.BYTE&&(W=i.RGB8I),D===i.SHORT&&(W=i.RGB16I),D===i.INT&&(W=i.RGB32I)),A===i.RGBA_INTEGER&&(D===i.UNSIGNED_BYTE&&(W=i.RGBA8UI),D===i.UNSIGNED_SHORT&&(W=i.RGBA16UI),D===i.UNSIGNED_INT&&(W=i.RGBA32UI),D===i.BYTE&&(W=i.RGBA8I),D===i.SHORT&&(W=i.RGBA16I),D===i.INT&&(W=i.RGBA32I)),A===i.RGB&&D===i.UNSIGNED_INT_5_9_9_9_REV&&(W=i.RGB9_E5),A===i.RGBA){const At=J?_s:zt.getTransfer(Q);D===i.FLOAT&&(W=i.RGBA32F),D===i.HALF_FLOAT&&(W=i.RGBA16F),D===i.UNSIGNED_BYTE&&(W=At===Qt?i.SRGB8_ALPHA8:i.RGBA8),D===i.UNSIGNED_SHORT_4_4_4_4&&(W=i.RGBA4),D===i.UNSIGNED_SHORT_5_5_5_1&&(W=i.RGB5_A1)}return(W===i.R16F||W===i.R32F||W===i.RG16F||W===i.RG32F||W===i.RGBA16F||W===i.RGBA32F)&&t.get("EXT_color_buffer_float"),W}function v(M,A){let D;return M?A===null||A===Fn||A===hi?D=i.DEPTH24_STENCIL8:A===sn?D=i.DEPTH32F_STENCIL8:A===Ii&&(D=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):A===null||A===Fn||A===hi?D=i.DEPTH_COMPONENT24:A===sn?D=i.DEPTH_COMPONENT32F:A===Ii&&(D=i.DEPTH_COMPONENT16),D}function L(M,A){return q(M)===!0||M.isFramebufferTexture&&M.minFilter!==He&&M.minFilter!==Ee?Math.log2(Math.max(A.width,A.height))+1:M.mipmaps!==void 0&&M.mipmaps.length>0?M.mipmaps.length:M.isCompressedTexture&&Array.isArray(M.image)?A.mipmaps.length:1}function y(M){const A=M.target;A.removeEventListener("dispose",y),b(A),A.isVideoTexture&&c.delete(A)}function T(M){const A=M.target;A.removeEventListener("dispose",T),_(A)}function b(M){const A=n.get(M);if(A.__webglInit===void 0)return;const D=M.source,Q=f.get(D);if(Q){const J=Q[A.__cacheKey];J.usedTimes--,J.usedTimes===0&&x(M),Object.keys(Q).length===0&&f.delete(D)}n.remove(M)}function x(M){const A=n.get(M);i.deleteTexture(A.__webglTexture);const D=M.source,Q=f.get(D);delete Q[A.__cacheKey],V.memory.textures--}function _(M){const A=n.get(M);if(M.depthTexture&&(M.depthTexture.dispose(),n.remove(M.depthTexture)),M.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(A.__webglFramebuffer[Q]))for(let J=0;J<A.__webglFramebuffer[Q].length;J++)i.deleteFramebuffer(A.__webglFramebuffer[Q][J]);else i.deleteFramebuffer(A.__webglFramebuffer[Q]);A.__webglDepthbuffer&&i.deleteRenderbuffer(A.__webglDepthbuffer[Q])}else{if(Array.isArray(A.__webglFramebuffer))for(let Q=0;Q<A.__webglFramebuffer.length;Q++)i.deleteFramebuffer(A.__webglFramebuffer[Q]);else i.deleteFramebuffer(A.__webglFramebuffer);if(A.__webglDepthbuffer&&i.deleteRenderbuffer(A.__webglDepthbuffer),A.__webglMultisampledFramebuffer&&i.deleteFramebuffer(A.__webglMultisampledFramebuffer),A.__webglColorRenderbuffer)for(let Q=0;Q<A.__webglColorRenderbuffer.length;Q++)A.__webglColorRenderbuffer[Q]&&i.deleteRenderbuffer(A.__webglColorRenderbuffer[Q]);A.__webglDepthRenderbuffer&&i.deleteRenderbuffer(A.__webglDepthRenderbuffer)}const D=M.textures;for(let Q=0,J=D.length;Q<J;Q++){const W=n.get(D[Q]);W.__webglTexture&&(i.deleteTexture(W.__webglTexture),V.memory.textures--),n.remove(D[Q])}n.remove(M)}let w=0;function O(){w=0}function N(){const M=w;return M>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+M+" texture units while this GPU supports only "+s.maxTextures),w+=1,M}function H(M){const A=[];return A.push(M.wrapS),A.push(M.wrapT),A.push(M.wrapR||0),A.push(M.magFilter),A.push(M.minFilter),A.push(M.anisotropy),A.push(M.internalFormat),A.push(M.format),A.push(M.type),A.push(M.generateMipmaps),A.push(M.premultiplyAlpha),A.push(M.flipY),A.push(M.unpackAlignment),A.push(M.colorSpace),A.join()}function K(M,A){const D=n.get(M);if(M.isVideoTexture&&xt(M),M.isRenderTargetTexture===!1&&M.version>0&&D.__version!==M.version){const Q=M.image;if(Q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Y(D,M,A);return}}e.bindTexture(i.TEXTURE_2D,D.__webglTexture,i.TEXTURE0+A)}function k(M,A){const D=n.get(M);if(M.version>0&&D.__version!==M.version){Y(D,M,A);return}e.bindTexture(i.TEXTURE_2D_ARRAY,D.__webglTexture,i.TEXTURE0+A)}function $(M,A){const D=n.get(M);if(M.version>0&&D.__version!==M.version){Y(D,M,A);return}e.bindTexture(i.TEXTURE_3D,D.__webglTexture,i.TEXTURE0+A)}function z(M,A){const D=n.get(M);if(M.version>0&&D.__version!==M.version){tt(D,M,A);return}e.bindTexture(i.TEXTURE_CUBE_MAP,D.__webglTexture,i.TEXTURE0+A)}const it={[Ui]:i.REPEAT,[Dn]:i.CLAMP_TO_EDGE,[dr]:i.MIRRORED_REPEAT},lt={[He]:i.NEAREST,[Io]:i.NEAREST_MIPMAP_NEAREST,[Gi]:i.NEAREST_MIPMAP_LINEAR,[Ee]:i.LINEAR,[Es]:i.LINEAR_MIPMAP_NEAREST,[Bn]:i.LINEAR_MIPMAP_LINEAR},gt={[Fo]:i.NEVER,[ko]:i.ALWAYS,[No]:i.LESS,[Pa]:i.LEQUAL,[Oo]:i.EQUAL,[Ho]:i.GEQUAL,[Go]:i.GREATER,[zo]:i.NOTEQUAL};function It(M,A){if(A.type===sn&&t.has("OES_texture_float_linear")===!1&&(A.magFilter===Ee||A.magFilter===Es||A.magFilter===Gi||A.magFilter===Bn||A.minFilter===Ee||A.minFilter===Es||A.minFilter===Gi||A.minFilter===Bn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(M,i.TEXTURE_WRAP_S,it[A.wrapS]),i.texParameteri(M,i.TEXTURE_WRAP_T,it[A.wrapT]),(M===i.TEXTURE_3D||M===i.TEXTURE_2D_ARRAY)&&i.texParameteri(M,i.TEXTURE_WRAP_R,it[A.wrapR]),i.texParameteri(M,i.TEXTURE_MAG_FILTER,lt[A.magFilter]),i.texParameteri(M,i.TEXTURE_MIN_FILTER,lt[A.minFilter]),A.compareFunction&&(i.texParameteri(M,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(M,i.TEXTURE_COMPARE_FUNC,gt[A.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(A.magFilter===He||A.minFilter!==Gi&&A.minFilter!==Bn||A.type===sn&&t.has("OES_texture_float_linear")===!1)return;if(A.anisotropy>1||n.get(A).__currentAnisotropy){const D=t.get("EXT_texture_filter_anisotropic");i.texParameterf(M,D.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,s.getMaxAnisotropy())),n.get(A).__currentAnisotropy=A.anisotropy}}}function Xt(M,A){let D=!1;M.__webglInit===void 0&&(M.__webglInit=!0,A.addEventListener("dispose",y));const Q=A.source;let J=f.get(Q);J===void 0&&(J={},f.set(Q,J));const W=H(A);if(W!==M.__cacheKey){J[W]===void 0&&(J[W]={texture:i.createTexture(),usedTimes:0},V.memory.textures++,D=!0),J[W].usedTimes++;const At=J[M.__cacheKey];At!==void 0&&(J[M.__cacheKey].usedTimes--,At.usedTimes===0&&x(A)),M.__cacheKey=W,M.__webglTexture=J[W].texture}return D}function Y(M,A,D){let Q=i.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(Q=i.TEXTURE_2D_ARRAY),A.isData3DTexture&&(Q=i.TEXTURE_3D);const J=Xt(M,A),W=A.source;e.bindTexture(Q,M.__webglTexture,i.TEXTURE0+D);const At=n.get(W);if(W.version!==At.__version||J===!0){e.activeTexture(i.TEXTURE0+D);const rt=zt.getPrimaries(zt.workingColorSpace),ct=A.colorSpace===mn?null:zt.getPrimaries(A.colorSpace),Gt=A.colorSpace===mn||rt===ct?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,A.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,A.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Gt);let j=m(A.image,!1,s.maxTextureSize);j=jt(A,j);const ht=r.convert(A.format,A.colorSpace),Mt=r.convert(A.type);let Et=S(A.internalFormat,ht,Mt,A.colorSpace,A.isVideoTexture);It(Q,A);let ut;const Ft=A.mipmaps,Pt=A.isVideoTexture!==!0,Kt=At.__version===void 0||J===!0,C=W.dataReady,nt=L(A,j);if(A.isDepthTexture)Et=v(A.format===ui,A.type),Kt&&(Pt?e.texStorage2D(i.TEXTURE_2D,1,Et,j.width,j.height):e.texImage2D(i.TEXTURE_2D,0,Et,j.width,j.height,0,ht,Mt,null));else if(A.isDataTexture)if(Ft.length>0){Pt&&Kt&&e.texStorage2D(i.TEXTURE_2D,nt,Et,Ft[0].width,Ft[0].height);for(let G=0,X=Ft.length;G<X;G++)ut=Ft[G],Pt?C&&e.texSubImage2D(i.TEXTURE_2D,G,0,0,ut.width,ut.height,ht,Mt,ut.data):e.texImage2D(i.TEXTURE_2D,G,Et,ut.width,ut.height,0,ht,Mt,ut.data);A.generateMipmaps=!1}else Pt?(Kt&&e.texStorage2D(i.TEXTURE_2D,nt,Et,j.width,j.height),C&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,j.width,j.height,ht,Mt,j.data)):e.texImage2D(i.TEXTURE_2D,0,Et,j.width,j.height,0,ht,Mt,j.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){Pt&&Kt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,nt,Et,Ft[0].width,Ft[0].height,j.depth);for(let G=0,X=Ft.length;G<X;G++)if(ut=Ft[G],A.format!==Ge)if(ht!==null)if(Pt){if(C)if(A.layerUpdates.size>0){const ot=la(ut.width,ut.height,A.format,A.type);for(const Vt of A.layerUpdates){const Ct=ut.data.subarray(Vt*ot/ut.data.BYTES_PER_ELEMENT,(Vt+1)*ot/ut.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,G,0,0,Vt,ut.width,ut.height,1,ht,Ct)}A.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,G,0,0,0,ut.width,ut.height,j.depth,ht,ut.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,G,Et,ut.width,ut.height,j.depth,0,ut.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Pt?C&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,G,0,0,0,ut.width,ut.height,j.depth,ht,Mt,ut.data):e.texImage3D(i.TEXTURE_2D_ARRAY,G,Et,ut.width,ut.height,j.depth,0,ht,Mt,ut.data)}else{Pt&&Kt&&e.texStorage2D(i.TEXTURE_2D,nt,Et,Ft[0].width,Ft[0].height);for(let G=0,X=Ft.length;G<X;G++)ut=Ft[G],A.format!==Ge?ht!==null?Pt?C&&e.compressedTexSubImage2D(i.TEXTURE_2D,G,0,0,ut.width,ut.height,ht,ut.data):e.compressedTexImage2D(i.TEXTURE_2D,G,Et,ut.width,ut.height,0,ut.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Pt?C&&e.texSubImage2D(i.TEXTURE_2D,G,0,0,ut.width,ut.height,ht,Mt,ut.data):e.texImage2D(i.TEXTURE_2D,G,Et,ut.width,ut.height,0,ht,Mt,ut.data)}else if(A.isDataArrayTexture)if(Pt){if(Kt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,nt,Et,j.width,j.height,j.depth),C)if(A.layerUpdates.size>0){const G=la(j.width,j.height,A.format,A.type);for(const X of A.layerUpdates){const ot=j.data.subarray(X*G/j.data.BYTES_PER_ELEMENT,(X+1)*G/j.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,X,j.width,j.height,1,ht,Mt,ot)}A.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,j.width,j.height,j.depth,ht,Mt,j.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Et,j.width,j.height,j.depth,0,ht,Mt,j.data);else if(A.isData3DTexture)Pt?(Kt&&e.texStorage3D(i.TEXTURE_3D,nt,Et,j.width,j.height,j.depth),C&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,j.width,j.height,j.depth,ht,Mt,j.data)):e.texImage3D(i.TEXTURE_3D,0,Et,j.width,j.height,j.depth,0,ht,Mt,j.data);else if(A.isFramebufferTexture){if(Kt)if(Pt)e.texStorage2D(i.TEXTURE_2D,nt,Et,j.width,j.height);else{let G=j.width,X=j.height;for(let ot=0;ot<nt;ot++)e.texImage2D(i.TEXTURE_2D,ot,Et,G,X,0,ht,Mt,null),G>>=1,X>>=1}}else if(Ft.length>0){if(Pt&&Kt){const G=_t(Ft[0]);e.texStorage2D(i.TEXTURE_2D,nt,Et,G.width,G.height)}for(let G=0,X=Ft.length;G<X;G++)ut=Ft[G],Pt?C&&e.texSubImage2D(i.TEXTURE_2D,G,0,0,ht,Mt,ut):e.texImage2D(i.TEXTURE_2D,G,Et,ht,Mt,ut);A.generateMipmaps=!1}else if(Pt){if(Kt){const G=_t(j);e.texStorage2D(i.TEXTURE_2D,nt,Et,G.width,G.height)}C&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,ht,Mt,j)}else e.texImage2D(i.TEXTURE_2D,0,Et,ht,Mt,j);q(A)&&u(Q),At.__version=W.version,A.onUpdate&&A.onUpdate(A)}M.__version=A.version}function tt(M,A,D){if(A.image.length!==6)return;const Q=Xt(M,A),J=A.source;e.bindTexture(i.TEXTURE_CUBE_MAP,M.__webglTexture,i.TEXTURE0+D);const W=n.get(J);if(J.version!==W.__version||Q===!0){e.activeTexture(i.TEXTURE0+D);const At=zt.getPrimaries(zt.workingColorSpace),rt=A.colorSpace===mn?null:zt.getPrimaries(A.colorSpace),ct=A.colorSpace===mn||At===rt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,A.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,A.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ct);const Gt=A.isCompressedTexture||A.image[0].isCompressedTexture,j=A.image[0]&&A.image[0].isDataTexture,ht=[];for(let X=0;X<6;X++)!Gt&&!j?ht[X]=m(A.image[X],!0,s.maxCubemapSize):ht[X]=j?A.image[X].image:A.image[X],ht[X]=jt(A,ht[X]);const Mt=ht[0],Et=r.convert(A.format,A.colorSpace),ut=r.convert(A.type),Ft=S(A.internalFormat,Et,ut,A.colorSpace),Pt=A.isVideoTexture!==!0,Kt=W.__version===void 0||Q===!0,C=J.dataReady;let nt=L(A,Mt);It(i.TEXTURE_CUBE_MAP,A);let G;if(Gt){Pt&&Kt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,nt,Ft,Mt.width,Mt.height);for(let X=0;X<6;X++){G=ht[X].mipmaps;for(let ot=0;ot<G.length;ot++){const Vt=G[ot];A.format!==Ge?Et!==null?Pt?C&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+X,ot,0,0,Vt.width,Vt.height,Et,Vt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+X,ot,Ft,Vt.width,Vt.height,0,Vt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Pt?C&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+X,ot,0,0,Vt.width,Vt.height,Et,ut,Vt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+X,ot,Ft,Vt.width,Vt.height,0,Et,ut,Vt.data)}}}else{if(G=A.mipmaps,Pt&&Kt){G.length>0&&nt++;const X=_t(ht[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,nt,Ft,X.width,X.height)}for(let X=0;X<6;X++)if(j){Pt?C&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,0,0,ht[X].width,ht[X].height,Et,ut,ht[X].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,Ft,ht[X].width,ht[X].height,0,Et,ut,ht[X].data);for(let ot=0;ot<G.length;ot++){const Ct=G[ot].image[X].image;Pt?C&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+X,ot+1,0,0,Ct.width,Ct.height,Et,ut,Ct.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+X,ot+1,Ft,Ct.width,Ct.height,0,Et,ut,Ct.data)}}else{Pt?C&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,0,0,Et,ut,ht[X]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,Ft,Et,ut,ht[X]);for(let ot=0;ot<G.length;ot++){const Vt=G[ot];Pt?C&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+X,ot+1,0,0,Et,ut,Vt.image[X]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+X,ot+1,Ft,Et,ut,Vt.image[X])}}}q(A)&&u(i.TEXTURE_CUBE_MAP),W.__version=J.version,A.onUpdate&&A.onUpdate(A)}M.__version=A.version}function pt(M,A,D,Q,J,W){const At=r.convert(D.format,D.colorSpace),rt=r.convert(D.type),ct=S(D.internalFormat,At,rt,D.colorSpace),Gt=n.get(A),j=n.get(D);if(j.__renderTarget=A,!Gt.__hasExternalTextures){const ht=Math.max(1,A.width>>W),Mt=Math.max(1,A.height>>W);J===i.TEXTURE_3D||J===i.TEXTURE_2D_ARRAY?e.texImage3D(J,W,ct,ht,Mt,A.depth,0,At,rt,null):e.texImage2D(J,W,ct,ht,Mt,0,At,rt,null)}e.bindFramebuffer(i.FRAMEBUFFER,M),Bt(A)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Q,J,j.__webglTexture,0,Dt(A)):(J===i.TEXTURE_2D||J>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Q,J,j.__webglTexture,W),e.bindFramebuffer(i.FRAMEBUFFER,null)}function st(M,A,D){if(i.bindRenderbuffer(i.RENDERBUFFER,M),A.depthBuffer){const Q=A.depthTexture,J=Q&&Q.isDepthTexture?Q.type:null,W=v(A.stencilBuffer,J),At=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,rt=Dt(A);Bt(A)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,rt,W,A.width,A.height):D?i.renderbufferStorageMultisample(i.RENDERBUFFER,rt,W,A.width,A.height):i.renderbufferStorage(i.RENDERBUFFER,W,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,At,i.RENDERBUFFER,M)}else{const Q=A.textures;for(let J=0;J<Q.length;J++){const W=Q[J],At=r.convert(W.format,W.colorSpace),rt=r.convert(W.type),ct=S(W.internalFormat,At,rt,W.colorSpace),Gt=Dt(A);D&&Bt(A)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Gt,ct,A.width,A.height):Bt(A)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Gt,ct,A.width,A.height):i.renderbufferStorage(i.RENDERBUFFER,ct,A.width,A.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function St(M,A){if(A&&A.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,M),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Q=n.get(A.depthTexture);Q.__renderTarget=A,(!Q.__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),K(A.depthTexture,0);const J=Q.__webglTexture,W=Dt(A);if(A.depthTexture.format===Vi)Bt(A)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,J,0,W):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,J,0);else if(A.depthTexture.format===ui)Bt(A)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,J,0,W):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,J,0);else throw new Error("Unknown depthTexture format")}function wt(M){const A=n.get(M),D=M.isWebGLCubeRenderTarget===!0;if(A.__boundDepthTexture!==M.depthTexture){const Q=M.depthTexture;if(A.__depthDisposeCallback&&A.__depthDisposeCallback(),Q){const J=()=>{delete A.__boundDepthTexture,delete A.__depthDisposeCallback,Q.removeEventListener("dispose",J)};Q.addEventListener("dispose",J),A.__depthDisposeCallback=J}A.__boundDepthTexture=Q}if(M.depthTexture&&!A.__autoAllocateDepthBuffer){if(D)throw new Error("target.depthTexture not supported in Cube render targets");St(A.__webglFramebuffer,M)}else if(D){A.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)if(e.bindFramebuffer(i.FRAMEBUFFER,A.__webglFramebuffer[Q]),A.__webglDepthbuffer[Q]===void 0)A.__webglDepthbuffer[Q]=i.createRenderbuffer(),st(A.__webglDepthbuffer[Q],M,!1);else{const J=M.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,W=A.__webglDepthbuffer[Q];i.bindRenderbuffer(i.RENDERBUFFER,W),i.framebufferRenderbuffer(i.FRAMEBUFFER,J,i.RENDERBUFFER,W)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer===void 0)A.__webglDepthbuffer=i.createRenderbuffer(),st(A.__webglDepthbuffer,M,!1);else{const Q=M.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,J=A.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,J),i.framebufferRenderbuffer(i.FRAMEBUFFER,Q,i.RENDERBUFFER,J)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Lt(M,A,D){const Q=n.get(M);A!==void 0&&pt(Q.__webglFramebuffer,M,M.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),D!==void 0&&wt(M)}function ee(M){const A=M.texture,D=n.get(M),Q=n.get(A);M.addEventListener("dispose",T);const J=M.textures,W=M.isWebGLCubeRenderTarget===!0,At=J.length>1;if(At||(Q.__webglTexture===void 0&&(Q.__webglTexture=i.createTexture()),Q.__version=A.version,V.memory.textures++),W){D.__webglFramebuffer=[];for(let rt=0;rt<6;rt++)if(A.mipmaps&&A.mipmaps.length>0){D.__webglFramebuffer[rt]=[];for(let ct=0;ct<A.mipmaps.length;ct++)D.__webglFramebuffer[rt][ct]=i.createFramebuffer()}else D.__webglFramebuffer[rt]=i.createFramebuffer()}else{if(A.mipmaps&&A.mipmaps.length>0){D.__webglFramebuffer=[];for(let rt=0;rt<A.mipmaps.length;rt++)D.__webglFramebuffer[rt]=i.createFramebuffer()}else D.__webglFramebuffer=i.createFramebuffer();if(At)for(let rt=0,ct=J.length;rt<ct;rt++){const Gt=n.get(J[rt]);Gt.__webglTexture===void 0&&(Gt.__webglTexture=i.createTexture(),V.memory.textures++)}if(M.samples>0&&Bt(M)===!1){D.__webglMultisampledFramebuffer=i.createFramebuffer(),D.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,D.__webglMultisampledFramebuffer);for(let rt=0;rt<J.length;rt++){const ct=J[rt];D.__webglColorRenderbuffer[rt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,D.__webglColorRenderbuffer[rt]);const Gt=r.convert(ct.format,ct.colorSpace),j=r.convert(ct.type),ht=S(ct.internalFormat,Gt,j,ct.colorSpace,M.isXRRenderTarget===!0),Mt=Dt(M);i.renderbufferStorageMultisample(i.RENDERBUFFER,Mt,ht,M.width,M.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+rt,i.RENDERBUFFER,D.__webglColorRenderbuffer[rt])}i.bindRenderbuffer(i.RENDERBUFFER,null),M.depthBuffer&&(D.__webglDepthRenderbuffer=i.createRenderbuffer(),st(D.__webglDepthRenderbuffer,M,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(W){e.bindTexture(i.TEXTURE_CUBE_MAP,Q.__webglTexture),It(i.TEXTURE_CUBE_MAP,A);for(let rt=0;rt<6;rt++)if(A.mipmaps&&A.mipmaps.length>0)for(let ct=0;ct<A.mipmaps.length;ct++)pt(D.__webglFramebuffer[rt][ct],M,A,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,ct);else pt(D.__webglFramebuffer[rt],M,A,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0);q(A)&&u(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(At){for(let rt=0,ct=J.length;rt<ct;rt++){const Gt=J[rt],j=n.get(Gt);e.bindTexture(i.TEXTURE_2D,j.__webglTexture),It(i.TEXTURE_2D,Gt),pt(D.__webglFramebuffer,M,Gt,i.COLOR_ATTACHMENT0+rt,i.TEXTURE_2D,0),q(Gt)&&u(i.TEXTURE_2D)}e.unbindTexture()}else{let rt=i.TEXTURE_2D;if((M.isWebGL3DRenderTarget||M.isWebGLArrayRenderTarget)&&(rt=M.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(rt,Q.__webglTexture),It(rt,A),A.mipmaps&&A.mipmaps.length>0)for(let ct=0;ct<A.mipmaps.length;ct++)pt(D.__webglFramebuffer[ct],M,A,i.COLOR_ATTACHMENT0,rt,ct);else pt(D.__webglFramebuffer,M,A,i.COLOR_ATTACHMENT0,rt,0);q(A)&&u(rt),e.unbindTexture()}M.depthBuffer&&wt(M)}function Ot(M){const A=M.textures;for(let D=0,Q=A.length;D<Q;D++){const J=A[D];if(q(J)){const W=E(M),At=n.get(J).__webglTexture;e.bindTexture(W,At),u(W),e.unbindTexture()}}}const ae=[],I=[];function Ce(M){if(M.samples>0){if(Bt(M)===!1){const A=M.textures,D=M.width,Q=M.height;let J=i.COLOR_BUFFER_BIT;const W=M.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,At=n.get(M),rt=A.length>1;if(rt)for(let ct=0;ct<A.length;ct++)e.bindFramebuffer(i.FRAMEBUFFER,At.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ct,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,At.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ct,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,At.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,At.__webglFramebuffer);for(let ct=0;ct<A.length;ct++){if(M.resolveDepthBuffer&&(M.depthBuffer&&(J|=i.DEPTH_BUFFER_BIT),M.stencilBuffer&&M.resolveStencilBuffer&&(J|=i.STENCIL_BUFFER_BIT)),rt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,At.__webglColorRenderbuffer[ct]);const Gt=n.get(A[ct]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Gt,0)}i.blitFramebuffer(0,0,D,Q,0,0,D,Q,J,i.NEAREST),o===!0&&(ae.length=0,I.length=0,ae.push(i.COLOR_ATTACHMENT0+ct),M.depthBuffer&&M.resolveDepthBuffer===!1&&(ae.push(W),I.push(W),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,I)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ae))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),rt)for(let ct=0;ct<A.length;ct++){e.bindFramebuffer(i.FRAMEBUFFER,At.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ct,i.RENDERBUFFER,At.__webglColorRenderbuffer[ct]);const Gt=n.get(A[ct]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,At.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ct,i.TEXTURE_2D,Gt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,At.__webglMultisampledFramebuffer)}else if(M.depthBuffer&&M.resolveDepthBuffer===!1&&o){const A=M.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[A])}}}function Dt(M){return Math.min(s.maxSamples,M.samples)}function Bt(M){const A=n.get(M);return M.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function xt(M){const A=V.render.frame;c.get(M)!==A&&(c.set(M,A),M.update())}function jt(M,A){const D=M.colorSpace,Q=M.format,J=M.type;return M.isCompressedTexture===!0||M.isVideoTexture===!0||D!==qi&&D!==mn&&(zt.getTransfer(D)===Qt?(Q!==Ge||J!==an)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",D)),A}function _t(M){return typeof HTMLImageElement<"u"&&M instanceof HTMLImageElement?(l.width=M.naturalWidth||M.width,l.height=M.naturalHeight||M.height):typeof VideoFrame<"u"&&M instanceof VideoFrame?(l.width=M.displayWidth,l.height=M.displayHeight):(l.width=M.width,l.height=M.height),l}this.allocateTextureUnit=N,this.resetTextureUnits=O,this.setTexture2D=K,this.setTexture2DArray=k,this.setTexture3D=$,this.setTextureCube=z,this.rebindTextures=Lt,this.setupRenderTarget=ee,this.updateRenderTargetMipmap=Ot,this.updateMultisampleRenderTarget=Ce,this.setupDepthRenderbuffer=wt,this.setupFrameBufferTexture=pt,this.useMultisampledRTT=Bt}function cd(i,t){function e(n,s=mn){let r;const V=zt.getTransfer(s);if(n===an)return i.UNSIGNED_BYTE;if(n===Yr)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Qr)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Ma)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===va)return i.BYTE;if(n===xa)return i.SHORT;if(n===Ii)return i.UNSIGNED_SHORT;if(n===Wr)return i.INT;if(n===Fn)return i.UNSIGNED_INT;if(n===sn)return i.FLOAT;if(n===Di)return i.HALF_FLOAT;if(n===Sa)return i.ALPHA;if(n===Ea)return i.RGB;if(n===Ge)return i.RGBA;if(n===ya)return i.LUMINANCE;if(n===Ta)return i.LUMINANCE_ALPHA;if(n===Vi)return i.DEPTH_COMPONENT;if(n===ui)return i.DEPTH_STENCIL;if(n===wa)return i.RED;if(n===Xr)return i.RED_INTEGER;if(n===Ca)return i.RG;if(n===Kr)return i.RG_INTEGER;if(n===Jr)return i.RGBA_INTEGER;if(n===hs||n===us||n===fs||n===ds)if(V===Qt)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===hs)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===us)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===fs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ds)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===hs)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===us)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===fs)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ds)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===qr||n===pr||n===Ar||n===mr)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===qr)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===pr)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ar)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===mr)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===gr||n===_r||n===vr)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===gr||n===_r)return V===Qt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===vr)return V===Qt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===xr||n===Mr||n===Sr||n===Er||n===yr||n===Tr||n===wr||n===Cr||n===Rr||n===br||n===Pr||n===Ur||n===Ir||n===Lr)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===xr)return V===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Mr)return V===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Sr)return V===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Er)return V===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===yr)return V===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Tr)return V===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===wr)return V===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Cr)return V===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Rr)return V===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===br)return V===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Pr)return V===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ur)return V===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ir)return V===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Lr)return V===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===qs||n===Dr||n===Br)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===qs)return V===Qt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Dr)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Br)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Ra||n===Fr||n===Nr||n===Or)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===qs)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Fr)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Nr)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Or)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===hi?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}class hd extends Ue{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class se extends fe{constructor(){super(),this.isGroup=!0,this.type="Group"}}const ud={type:"move"};class Zs{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new se,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new se,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new R,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new R),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new se,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new R,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new R),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,V=null;const a=this._targetRay,o=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){V=!0;for(const m of t.hand.values()){const q=e.getJointPose(m,n),u=this._getHandJoint(l,m);q!==null&&(u.matrix.fromArray(q.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=q.radius),u.visible=q!==null}const c=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],f=c.position.distanceTo(h.position),d=.02,p=.005;l.inputState.pinching&&f>d+p?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&f<=d-p&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else o!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(ud)))}return a!==null&&(a.visible=s!==null),o!==null&&(o.visible=r!==null),l!==null&&(l.visible=V!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new se;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const fd=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,dd=`
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

}`;class qd{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const s=new ve,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Sn({vertexShader:fd,fragmentShader:dd,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Tt(new Qe(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class pd extends pi{constructor(t,e){super();const n=this;let s=null,r=1,V=null,a="local-floor",o=1,l=null,c=null,h=null,f=null,d=null,p=null;const m=new qd,q=e.getContextAttributes();let u=null,E=null;const S=[],v=[],L=new vt;let y=null;const T=new Ue;T.viewport=new re;const b=new Ue;b.viewport=new re;const x=[T,b],_=new hd;let w=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let tt=S[Y];return tt===void 0&&(tt=new Zs,S[Y]=tt),tt.getTargetRaySpace()},this.getControllerGrip=function(Y){let tt=S[Y];return tt===void 0&&(tt=new Zs,S[Y]=tt),tt.getGripSpace()},this.getHand=function(Y){let tt=S[Y];return tt===void 0&&(tt=new Zs,S[Y]=tt),tt.getHandSpace()};function N(Y){const tt=v.indexOf(Y.inputSource);if(tt===-1)return;const pt=S[tt];pt!==void 0&&(pt.update(Y.inputSource,Y.frame,l||V),pt.dispatchEvent({type:Y.type,data:Y.inputSource}))}function H(){s.removeEventListener("select",N),s.removeEventListener("selectstart",N),s.removeEventListener("selectend",N),s.removeEventListener("squeeze",N),s.removeEventListener("squeezestart",N),s.removeEventListener("squeezeend",N),s.removeEventListener("end",H),s.removeEventListener("inputsourceschange",K);for(let Y=0;Y<S.length;Y++){const tt=v[Y];tt!==null&&(v[Y]=null,S[Y].disconnect(tt))}w=null,O=null,m.reset(),t.setRenderTarget(u),d=null,f=null,h=null,s=null,E=null,Xt.stop(),n.isPresenting=!1,t.setPixelRatio(y),t.setSize(L.width,L.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){r=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){a=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||V},this.setReferenceSpace=function(Y){l=Y},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return h},this.getFrame=function(){return p},this.getSession=function(){return s},this.setSession=async function(Y){if(s=Y,s!==null){if(u=t.getRenderTarget(),s.addEventListener("select",N),s.addEventListener("selectstart",N),s.addEventListener("selectend",N),s.addEventListener("squeeze",N),s.addEventListener("squeezestart",N),s.addEventListener("squeezeend",N),s.addEventListener("end",H),s.addEventListener("inputsourceschange",K),q.xrCompatible!==!0&&await e.makeXRCompatible(),y=t.getPixelRatio(),t.getSize(L),s.renderState.layers===void 0){const tt={antialias:q.antialias,alpha:!0,depth:q.depth,stencil:q.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,e,tt),s.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),E=new Nn(d.framebufferWidth,d.framebufferHeight,{format:Ge,type:an,colorSpace:t.outputColorSpace,stencilBuffer:q.stencil})}else{let tt=null,pt=null,st=null;q.depth&&(st=q.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,tt=q.stencil?ui:Vi,pt=q.stencil?hi:Fn);const St={colorFormat:e.RGBA8,depthFormat:st,scaleFactor:r};h=new XRWebGLBinding(s,e),f=h.createProjectionLayer(St),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),E=new Nn(f.textureWidth,f.textureHeight,{format:Ge,type:an,depthTexture:new Ya(f.textureWidth,f.textureHeight,pt,void 0,void 0,void 0,void 0,void 0,void 0,tt),stencilBuffer:q.stencil,colorSpace:t.outputColorSpace,samples:q.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(o),l=null,V=await s.requestReferenceSpace(a),Xt.setContext(s),Xt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function K(Y){for(let tt=0;tt<Y.removed.length;tt++){const pt=Y.removed[tt],st=v.indexOf(pt);st>=0&&(v[st]=null,S[st].disconnect(pt))}for(let tt=0;tt<Y.added.length;tt++){const pt=Y.added[tt];let st=v.indexOf(pt);if(st===-1){for(let wt=0;wt<S.length;wt++)if(wt>=v.length){v.push(pt),st=wt;break}else if(v[wt]===null){v[wt]=pt,st=wt;break}if(st===-1)break}const St=S[st];St&&St.connect(pt)}}const k=new R,$=new R;function z(Y,tt,pt){k.setFromMatrixPosition(tt.matrixWorld),$.setFromMatrixPosition(pt.matrixWorld);const st=k.distanceTo($),St=tt.projectionMatrix.elements,wt=pt.projectionMatrix.elements,Lt=St[14]/(St[10]-1),ee=St[14]/(St[10]+1),Ot=(St[9]+1)/St[5],ae=(St[9]-1)/St[5],I=(St[8]-1)/St[0],Ce=(wt[8]+1)/wt[0],Dt=Lt*I,Bt=Lt*Ce,xt=st/(-I+Ce),jt=xt*-I;if(tt.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(jt),Y.translateZ(xt),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),St[10]===-1)Y.projectionMatrix.copy(tt.projectionMatrix),Y.projectionMatrixInverse.copy(tt.projectionMatrixInverse);else{const _t=Lt+xt,M=ee+xt,A=Dt-jt,D=Bt+(st-jt),Q=Ot*ee/M*_t,J=ae*ee/M*_t;Y.projectionMatrix.makePerspective(A,D,Q,J,_t,M),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function it(Y,tt){tt===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(tt.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(s===null)return;let tt=Y.near,pt=Y.far;m.texture!==null&&(m.depthNear>0&&(tt=m.depthNear),m.depthFar>0&&(pt=m.depthFar)),_.near=b.near=T.near=tt,_.far=b.far=T.far=pt,(w!==_.near||O!==_.far)&&(s.updateRenderState({depthNear:_.near,depthFar:_.far}),w=_.near,O=_.far),T.layers.mask=Y.layers.mask|2,b.layers.mask=Y.layers.mask|4,_.layers.mask=T.layers.mask|b.layers.mask;const st=Y.parent,St=_.cameras;it(_,st);for(let wt=0;wt<St.length;wt++)it(St[wt],st);St.length===2?z(_,T,b):_.projectionMatrix.copy(T.projectionMatrix),lt(Y,_,st)};function lt(Y,tt,pt){pt===null?Y.matrix.copy(tt.matrixWorld):(Y.matrix.copy(pt.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(tt.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(tt.projectionMatrix),Y.projectionMatrixInverse.copy(tt.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=Li*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return _},this.getFoveation=function(){if(!(f===null&&d===null))return o},this.setFoveation=function(Y){o=Y,f!==null&&(f.fixedFoveation=Y),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=Y)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(_)};let gt=null;function It(Y,tt){if(c=tt.getViewerPose(l||V),p=tt,c!==null){const pt=c.views;d!==null&&(t.setRenderTargetFramebuffer(E,d.framebuffer),t.setRenderTarget(E));let st=!1;pt.length!==_.cameras.length&&(_.cameras.length=0,st=!0);for(let wt=0;wt<pt.length;wt++){const Lt=pt[wt];let ee=null;if(d!==null)ee=d.getViewport(Lt);else{const ae=h.getViewSubImage(f,Lt);ee=ae.viewport,wt===0&&(t.setRenderTargetTextures(E,ae.colorTexture,f.ignoreDepthValues?void 0:ae.depthStencilTexture),t.setRenderTarget(E))}let Ot=x[wt];Ot===void 0&&(Ot=new Ue,Ot.layers.enable(wt),Ot.viewport=new re,x[wt]=Ot),Ot.matrix.fromArray(Lt.transform.matrix),Ot.matrix.decompose(Ot.position,Ot.quaternion,Ot.scale),Ot.projectionMatrix.fromArray(Lt.projectionMatrix),Ot.projectionMatrixInverse.copy(Ot.projectionMatrix).invert(),Ot.viewport.set(ee.x,ee.y,ee.width,ee.height),wt===0&&(_.matrix.copy(Ot.matrix),_.matrix.decompose(_.position,_.quaternion,_.scale)),st===!0&&_.cameras.push(Ot)}const St=s.enabledFeatures;if(St&&St.includes("depth-sensing")){const wt=h.getDepthInformation(pt[0]);wt&&wt.isValid&&wt.texture&&m.init(t,wt,s.renderState)}}for(let pt=0;pt<S.length;pt++){const st=v[pt],St=S[pt];st!==null&&St!==void 0&&St.update(st,tt,l||V)}gt&&gt(Y,tt),tt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:tt}),p=null}const Xt=new ka;Xt.setAnimationLoop(It),this.setAnimationLoop=function(Y){gt=Y},this.dispose=function(){}}}const bn=new Xe,Ad=new te;function md(i,t){function e(q,u){q.matrixAutoUpdate===!0&&q.updateMatrix(),u.value.copy(q.matrix)}function n(q,u){u.color.getRGB(q.fogColor.value,Ga(i)),u.isFog?(q.fogNear.value=u.near,q.fogFar.value=u.far):u.isFogExp2&&(q.fogDensity.value=u.density)}function s(q,u,E,S,v){u.isMeshBasicMaterial||u.isMeshLambertMaterial?r(q,u):u.isMeshToonMaterial?(r(q,u),h(q,u)):u.isMeshPhongMaterial?(r(q,u),c(q,u)):u.isMeshStandardMaterial?(r(q,u),f(q,u),u.isMeshPhysicalMaterial&&d(q,u,v)):u.isMeshMatcapMaterial?(r(q,u),p(q,u)):u.isMeshDepthMaterial?r(q,u):u.isMeshDistanceMaterial?(r(q,u),m(q,u)):u.isMeshNormalMaterial?r(q,u):u.isLineBasicMaterial?(V(q,u),u.isLineDashedMaterial&&a(q,u)):u.isPointsMaterial?o(q,u,E,S):u.isSpriteMaterial?l(q,u):u.isShadowMaterial?(q.color.value.copy(u.color),q.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function r(q,u){q.opacity.value=u.opacity,u.color&&q.diffuse.value.copy(u.color),u.emissive&&q.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(q.map.value=u.map,e(u.map,q.mapTransform)),u.alphaMap&&(q.alphaMap.value=u.alphaMap,e(u.alphaMap,q.alphaMapTransform)),u.bumpMap&&(q.bumpMap.value=u.bumpMap,e(u.bumpMap,q.bumpMapTransform),q.bumpScale.value=u.bumpScale,u.side===_e&&(q.bumpScale.value*=-1)),u.normalMap&&(q.normalMap.value=u.normalMap,e(u.normalMap,q.normalMapTransform),q.normalScale.value.copy(u.normalScale),u.side===_e&&q.normalScale.value.negate()),u.displacementMap&&(q.displacementMap.value=u.displacementMap,e(u.displacementMap,q.displacementMapTransform),q.displacementScale.value=u.displacementScale,q.displacementBias.value=u.displacementBias),u.emissiveMap&&(q.emissiveMap.value=u.emissiveMap,e(u.emissiveMap,q.emissiveMapTransform)),u.specularMap&&(q.specularMap.value=u.specularMap,e(u.specularMap,q.specularMapTransform)),u.alphaTest>0&&(q.alphaTest.value=u.alphaTest);const E=t.get(u),S=E.envMap,v=E.envMapRotation;S&&(q.envMap.value=S,bn.copy(v),bn.x*=-1,bn.y*=-1,bn.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(bn.y*=-1,bn.z*=-1),q.envMapRotation.value.setFromMatrix4(Ad.makeRotationFromEuler(bn)),q.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,q.reflectivity.value=u.reflectivity,q.ior.value=u.ior,q.refractionRatio.value=u.refractionRatio),u.lightMap&&(q.lightMap.value=u.lightMap,q.lightMapIntensity.value=u.lightMapIntensity,e(u.lightMap,q.lightMapTransform)),u.aoMap&&(q.aoMap.value=u.aoMap,q.aoMapIntensity.value=u.aoMapIntensity,e(u.aoMap,q.aoMapTransform))}function V(q,u){q.diffuse.value.copy(u.color),q.opacity.value=u.opacity,u.map&&(q.map.value=u.map,e(u.map,q.mapTransform))}function a(q,u){q.dashSize.value=u.dashSize,q.totalSize.value=u.dashSize+u.gapSize,q.scale.value=u.scale}function o(q,u,E,S){q.diffuse.value.copy(u.color),q.opacity.value=u.opacity,q.size.value=u.size*E,q.scale.value=S*.5,u.map&&(q.map.value=u.map,e(u.map,q.uvTransform)),u.alphaMap&&(q.alphaMap.value=u.alphaMap,e(u.alphaMap,q.alphaMapTransform)),u.alphaTest>0&&(q.alphaTest.value=u.alphaTest)}function l(q,u){q.diffuse.value.copy(u.color),q.opacity.value=u.opacity,q.rotation.value=u.rotation,u.map&&(q.map.value=u.map,e(u.map,q.mapTransform)),u.alphaMap&&(q.alphaMap.value=u.alphaMap,e(u.alphaMap,q.alphaMapTransform)),u.alphaTest>0&&(q.alphaTest.value=u.alphaTest)}function c(q,u){q.specular.value.copy(u.specular),q.shininess.value=Math.max(u.shininess,1e-4)}function h(q,u){u.gradientMap&&(q.gradientMap.value=u.gradientMap)}function f(q,u){q.metalness.value=u.metalness,u.metalnessMap&&(q.metalnessMap.value=u.metalnessMap,e(u.metalnessMap,q.metalnessMapTransform)),q.roughness.value=u.roughness,u.roughnessMap&&(q.roughnessMap.value=u.roughnessMap,e(u.roughnessMap,q.roughnessMapTransform)),u.envMap&&(q.envMapIntensity.value=u.envMapIntensity)}function d(q,u,E){q.ior.value=u.ior,u.sheen>0&&(q.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),q.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(q.sheenColorMap.value=u.sheenColorMap,e(u.sheenColorMap,q.sheenColorMapTransform)),u.sheenRoughnessMap&&(q.sheenRoughnessMap.value=u.sheenRoughnessMap,e(u.sheenRoughnessMap,q.sheenRoughnessMapTransform))),u.clearcoat>0&&(q.clearcoat.value=u.clearcoat,q.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(q.clearcoatMap.value=u.clearcoatMap,e(u.clearcoatMap,q.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(q.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,e(u.clearcoatRoughnessMap,q.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(q.clearcoatNormalMap.value=u.clearcoatNormalMap,e(u.clearcoatNormalMap,q.clearcoatNormalMapTransform),q.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===_e&&q.clearcoatNormalScale.value.negate())),u.dispersion>0&&(q.dispersion.value=u.dispersion),u.iridescence>0&&(q.iridescence.value=u.iridescence,q.iridescenceIOR.value=u.iridescenceIOR,q.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],q.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(q.iridescenceMap.value=u.iridescenceMap,e(u.iridescenceMap,q.iridescenceMapTransform)),u.iridescenceThicknessMap&&(q.iridescenceThicknessMap.value=u.iridescenceThicknessMap,e(u.iridescenceThicknessMap,q.iridescenceThicknessMapTransform))),u.transmission>0&&(q.transmission.value=u.transmission,q.transmissionSamplerMap.value=E.texture,q.transmissionSamplerSize.value.set(E.width,E.height),u.transmissionMap&&(q.transmissionMap.value=u.transmissionMap,e(u.transmissionMap,q.transmissionMapTransform)),q.thickness.value=u.thickness,u.thicknessMap&&(q.thicknessMap.value=u.thicknessMap,e(u.thicknessMap,q.thicknessMapTransform)),q.attenuationDistance.value=u.attenuationDistance,q.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(q.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(q.anisotropyMap.value=u.anisotropyMap,e(u.anisotropyMap,q.anisotropyMapTransform))),q.specularIntensity.value=u.specularIntensity,q.specularColor.value.copy(u.specularColor),u.specularColorMap&&(q.specularColorMap.value=u.specularColorMap,e(u.specularColorMap,q.specularColorMapTransform)),u.specularIntensityMap&&(q.specularIntensityMap.value=u.specularIntensityMap,e(u.specularIntensityMap,q.specularIntensityMapTransform))}function p(q,u){u.matcap&&(q.matcap.value=u.matcap)}function m(q,u){const E=t.get(u).light;q.referencePosition.value.setFromMatrixPosition(E.matrixWorld),q.nearDistance.value=E.shadow.camera.near,q.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function gd(i,t,e,n){let s={},r={},V=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function o(E,S){const v=S.program;n.uniformBlockBinding(E,v)}function l(E,S){let v=s[E.id];v===void 0&&(p(E),v=c(E),s[E.id]=v,E.addEventListener("dispose",q));const L=S.program;n.updateUBOMapping(E,L);const y=t.render.frame;r[E.id]!==y&&(f(E),r[E.id]=y)}function c(E){const S=h();E.__bindingPointIndex=S;const v=i.createBuffer(),L=E.__size,y=E.usage;return i.bindBuffer(i.UNIFORM_BUFFER,v),i.bufferData(i.UNIFORM_BUFFER,L,y),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,S,v),v}function h(){for(let E=0;E<a;E++)if(V.indexOf(E)===-1)return V.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(E){const S=s[E.id],v=E.uniforms,L=E.__cache;i.bindBuffer(i.UNIFORM_BUFFER,S);for(let y=0,T=v.length;y<T;y++){const b=Array.isArray(v[y])?v[y]:[v[y]];for(let x=0,_=b.length;x<_;x++){const w=b[x];if(d(w,y,x,L)===!0){const O=w.__offset,N=Array.isArray(w.value)?w.value:[w.value];let H=0;for(let K=0;K<N.length;K++){const k=N[K],$=m(k);typeof k=="number"||typeof k=="boolean"?(w.__data[0]=k,i.bufferSubData(i.UNIFORM_BUFFER,O+H,w.__data)):k.isMatrix3?(w.__data[0]=k.elements[0],w.__data[1]=k.elements[1],w.__data[2]=k.elements[2],w.__data[3]=0,w.__data[4]=k.elements[3],w.__data[5]=k.elements[4],w.__data[6]=k.elements[5],w.__data[7]=0,w.__data[8]=k.elements[6],w.__data[9]=k.elements[7],w.__data[10]=k.elements[8],w.__data[11]=0):(k.toArray(w.__data,H),H+=$.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,O,w.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(E,S,v,L){const y=E.value,T=S+"_"+v;if(L[T]===void 0)return typeof y=="number"||typeof y=="boolean"?L[T]=y:L[T]=y.clone(),!0;{const b=L[T];if(typeof y=="number"||typeof y=="boolean"){if(b!==y)return L[T]=y,!0}else if(b.equals(y)===!1)return b.copy(y),!0}return!1}function p(E){const S=E.uniforms;let v=0;const L=16;for(let T=0,b=S.length;T<b;T++){const x=Array.isArray(S[T])?S[T]:[S[T]];for(let _=0,w=x.length;_<w;_++){const O=x[_],N=Array.isArray(O.value)?O.value:[O.value];for(let H=0,K=N.length;H<K;H++){const k=N[H],$=m(k),z=v%L,it=z%$.boundary,lt=z+it;v+=it,lt!==0&&L-lt<$.storage&&(v+=L-lt),O.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=v,v+=$.storage}}}const y=v%L;return y>0&&(v+=L-y),E.__size=v,E.__cache={},this}function m(E){const S={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(S.boundary=4,S.storage=4):E.isVector2?(S.boundary=8,S.storage=8):E.isVector3||E.isColor?(S.boundary=16,S.storage=12):E.isVector4?(S.boundary=16,S.storage=16):E.isMatrix3?(S.boundary=48,S.storage=48):E.isMatrix4?(S.boundary=64,S.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),S}function q(E){const S=E.target;S.removeEventListener("dispose",q);const v=V.indexOf(S.__bindingPointIndex);V.splice(v,1),i.deleteBuffer(s[S.id]),delete s[S.id],delete r[S.id]}function u(){for(const E in s)i.deleteBuffer(s[E]);V=[],s={},r={}}return{bind:o,update:l,dispose:u}}class _d{constructor(t={}){const{canvas:e=al(),context:n=null,depth:s=!0,stencil:r=!1,alpha:V=!1,antialias:a=!1,premultipliedAlpha:o=!0,preserveDrawingBuffer:l=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=V;const p=new Uint32Array(4),m=new Int32Array(4);let q=null,u=null;const E=[],S=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Pe,this.toneMapping=vn,this.toneMappingExposure=1;const v=this;let L=!1,y=0,T=0,b=null,x=-1,_=null;const w=new re,O=new re;let N=null;const H=new Nt(0);let K=0,k=e.width,$=e.height,z=1,it=null,lt=null;const gt=new re(0,0,k,$),It=new re(0,0,k,$);let Xt=!1;const Y=new Zr;let tt=!1,pt=!1;const st=new te,St=new te,wt=new R,Lt=new re,ee={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ot=!1;function ae(){return b===null?z:1}let I=n;function Ce(g,P){return e.getContext(g,P)}try{const g={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:o,preserveDrawingBuffer:l,powerPreference:c,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${kr}`),e.addEventListener("webglcontextlost",X,!1),e.addEventListener("webglcontextrestored",ot,!1),e.addEventListener("webglcontextcreationerror",Vt,!1),I===null){const P="webgl2";if(I=Ce(P,g),I===null)throw Ce(P)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(g){throw console.error("THREE.WebGLRenderer: "+g.message),g}let Dt,Bt,xt,jt,_t,M,A,D,Q,J,W,At,rt,ct,Gt,j,ht,Mt,Et,ut,Ft,Pt,Kt,C;function nt(){Dt=new Su(I),Dt.init(),Pt=new cd(I,Dt),Bt=new mu(I,Dt,t,Pt),xt=new ad(I,Dt),Bt.reverseDepthBuffer&&f&&xt.buffers.depth.setReversed(!0),jt=new Tu(I),_t=new Yf,M=new ld(I,Dt,xt,_t,Bt,Pt,jt),A=new _u(v),D=new Mu(v),Q=new Il(I),Kt=new pu(I,Q),J=new Eu(I,Q,jt,Kt),W=new Cu(I,J,Q,jt),Et=new wu(I,Bt,M),j=new gu(_t),At=new Wf(v,A,D,Dt,Bt,Kt,j),rt=new md(v,_t),ct=new Xf,Gt=new td(Dt),Mt=new qu(v,A,D,xt,W,d,o),ht=new rd(v,W,Bt),C=new gd(I,jt,Bt,xt),ut=new Au(I,Dt,jt),Ft=new yu(I,Dt,jt),jt.programs=At.programs,v.capabilities=Bt,v.extensions=Dt,v.properties=_t,v.renderLists=ct,v.shadowMap=ht,v.state=xt,v.info=jt}nt();const G=new pd(v,I);this.xr=G,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const g=Dt.get("WEBGL_lose_context");g&&g.loseContext()},this.forceContextRestore=function(){const g=Dt.get("WEBGL_lose_context");g&&g.restoreContext()},this.getPixelRatio=function(){return z},this.setPixelRatio=function(g){g!==void 0&&(z=g,this.setSize(k,$,!1))},this.getSize=function(g){return g.set(k,$)},this.setSize=function(g,P,B=!0){if(G.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}k=g,$=P,e.width=Math.floor(g*z),e.height=Math.floor(P*z),B===!0&&(e.style.width=g+"px",e.style.height=P+"px"),this.setViewport(0,0,g,P)},this.getDrawingBufferSize=function(g){return g.set(k*z,$*z).floor()},this.setDrawingBufferSize=function(g,P,B){k=g,$=P,z=B,e.width=Math.floor(g*B),e.height=Math.floor(P*B),this.setViewport(0,0,g,P)},this.getCurrentViewport=function(g){return g.copy(w)},this.getViewport=function(g){return g.copy(gt)},this.setViewport=function(g,P,B,F){g.isVector4?gt.set(g.x,g.y,g.z,g.w):gt.set(g,P,B,F),xt.viewport(w.copy(gt).multiplyScalar(z).round())},this.getScissor=function(g){return g.copy(It)},this.setScissor=function(g,P,B,F){g.isVector4?It.set(g.x,g.y,g.z,g.w):It.set(g,P,B,F),xt.scissor(O.copy(It).multiplyScalar(z).round())},this.getScissorTest=function(){return Xt},this.setScissorTest=function(g){xt.setScissorTest(Xt=g)},this.setOpaqueSort=function(g){it=g},this.setTransparentSort=function(g){lt=g},this.getClearColor=function(g){return g.copy(Mt.getClearColor())},this.setClearColor=function(){Mt.setClearColor.apply(Mt,arguments)},this.getClearAlpha=function(){return Mt.getClearAlpha()},this.setClearAlpha=function(){Mt.setClearAlpha.apply(Mt,arguments)},this.clear=function(g=!0,P=!0,B=!0){let F=0;if(g){let U=!1;if(b!==null){const Z=b.texture.format;U=Z===Jr||Z===Kr||Z===Xr}if(U){const Z=b.texture.type,at=Z===an||Z===Fn||Z===Ii||Z===hi||Z===Yr||Z===Qr,ft=Mt.getClearColor(),dt=Mt.getClearAlpha(),yt=ft.r,Rt=ft.g,qt=ft.b;at?(p[0]=yt,p[1]=Rt,p[2]=qt,p[3]=dt,I.clearBufferuiv(I.COLOR,0,p)):(m[0]=yt,m[1]=Rt,m[2]=qt,m[3]=dt,I.clearBufferiv(I.COLOR,0,m))}else F|=I.COLOR_BUFFER_BIT}P&&(F|=I.DEPTH_BUFFER_BIT),B&&(F|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(F)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",X,!1),e.removeEventListener("webglcontextrestored",ot,!1),e.removeEventListener("webglcontextcreationerror",Vt,!1),ct.dispose(),Gt.dispose(),_t.dispose(),A.dispose(),D.dispose(),W.dispose(),Kt.dispose(),C.dispose(),At.dispose(),G.dispose(),G.removeEventListener("sessionstart",sV),G.removeEventListener("sessionend",rV),En.stop()};function X(g){g.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),L=!0}function ot(){console.log("THREE.WebGLRenderer: Context Restored."),L=!1;const g=jt.autoReset,P=ht.enabled,B=ht.autoUpdate,F=ht.needsUpdate,U=ht.type;nt(),jt.autoReset=g,ht.enabled=P,ht.autoUpdate=B,ht.needsUpdate=F,ht.type=U}function Vt(g){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",g.statusMessage)}function Ct(g){const P=g.target;P.removeEventListener("dispose",Ct),ne(P)}function ne(g){qe(g),_t.remove(g)}function qe(g){const P=_t.get(g).programs;P!==void 0&&(P.forEach(function(B){At.releaseProgram(B)}),g.isShaderMaterial&&At.releaseShaderCache(g))}this.renderBufferDirect=function(g,P,B,F,U,Z){P===null&&(P=ee);const at=U.isMesh&&U.matrixWorld.determinant()<0,ft=eo(g,P,B,F,U);xt.setMaterial(F,at);let dt=B.index,yt=1;if(F.wireframe===!0){if(dt=J.getWireframeAttribute(B),dt===void 0)return;yt=2}const Rt=B.drawRange,qt=B.attributes.position;let Ht=Rt.start*yt,Jt=(Rt.start+Rt.count)*yt;Z!==null&&(Ht=Math.max(Ht,Z.start*yt),Jt=Math.min(Jt,(Z.start+Z.count)*yt)),dt!==null?(Ht=Math.max(Ht,0),Jt=Math.min(Jt,dt.count)):qt!=null&&(Ht=Math.max(Ht,0),Jt=Math.min(Jt,qt.count));const Zt=Jt-Ht;if(Zt<0||Zt===1/0)return;Kt.setup(U,F,ft,B,dt);let Me,kt=ut;if(dt!==null&&(Me=Q.get(dt),kt=Ft,kt.setIndex(Me)),U.isMesh)F.wireframe===!0?(xt.setLineWidth(F.wireframeLinewidth*ae()),kt.setMode(I.LINES)):kt.setMode(I.TRIANGLES);else if(U.isLine){let mt=F.linewidth;mt===void 0&&(mt=1),xt.setLineWidth(mt*ae()),U.isLineSegments?kt.setMode(I.LINES):U.isLineLoop?kt.setMode(I.LINE_LOOP):kt.setMode(I.LINE_STRIP)}else U.isPoints?kt.setMode(I.POINTS):U.isSprite&&kt.setMode(I.TRIANGLES);if(U.isBatchedMesh)if(U._multiDrawInstances!==null)kt.renderMultiDrawInstances(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount,U._multiDrawInstances);else if(Dt.get("WEBGL_multi_draw"))kt.renderMultiDraw(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount);else{const mt=U._multiDrawStarts,Je=U._multiDrawCounts,Wt=U._multiDrawCount,De=dt?Q.get(dt).bytesPerElement:1,Gn=_t.get(F).currentProgram.getUniforms();for(let ye=0;ye<Wt;ye++)Gn.setValue(I,"_gl_DrawID",ye),kt.render(mt[ye]/De,Je[ye])}else if(U.isInstancedMesh)kt.renderInstances(Ht,Zt,U.count);else if(B.isInstancedBufferGeometry){const mt=B._maxInstanceCount!==void 0?B._maxInstanceCount:1/0,Je=Math.min(B.instanceCount,mt);kt.renderInstances(Ht,Zt,Je)}else kt.render(Ht,Zt)};function Yt(g,P,B){g.transparent===!0&&g.side===oe&&g.forceSinglePass===!1?(g.side=_e,g.needsUpdate=!0,Oi(g,P,B),g.side=Mn,g.needsUpdate=!0,Oi(g,P,B),g.side=oe):Oi(g,P,B)}this.compile=function(g,P,B=null){B===null&&(B=g),u=Gt.get(B),u.init(P),S.push(u),B.traverseVisible(function(U){U.isLight&&U.layers.test(P.layers)&&(u.pushLight(U),U.castShadow&&u.pushShadow(U))}),g!==B&&g.traverseVisible(function(U){U.isLight&&U.layers.test(P.layers)&&(u.pushLight(U),U.castShadow&&u.pushShadow(U))}),u.setupLights();const F=new Set;return g.traverse(function(U){if(!(U.isMesh||U.isPoints||U.isLine||U.isSprite))return;const Z=U.material;if(Z)if(Array.isArray(Z))for(let at=0;at<Z.length;at++){const ft=Z[at];Yt(ft,B,U),F.add(ft)}else Yt(Z,B,U),F.add(Z)}),S.pop(),u=null,F},this.compileAsync=function(g,P,B=null){const F=this.compile(g,P,B);return new Promise(U=>{function Z(){if(F.forEach(function(at){_t.get(at).currentProgram.isReady()&&F.delete(at)}),F.size===0){U(g);return}setTimeout(Z,10)}Dt.get("KHR_parallel_shader_compile")!==null?Z():setTimeout(Z,10)})};let Le=null;function Ke(g){Le&&Le(g)}function sV(){En.stop()}function rV(){En.start()}const En=new ka;En.setAnimationLoop(Ke),typeof self<"u"&&En.setContext(self),this.setAnimationLoop=function(g){Le=g,G.setAnimationLoop(g),g===null?En.stop():En.start()},G.addEventListener("sessionstart",sV),G.addEventListener("sessionend",rV),this.render=function(g,P){if(P!==void 0&&P.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;if(g.matrixWorldAutoUpdate===!0&&g.updateMatrixWorld(),P.parent===null&&P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),G.enabled===!0&&G.isPresenting===!0&&(G.cameraAutoUpdate===!0&&G.updateCamera(P),P=G.getCamera()),g.isScene===!0&&g.onBeforeRender(v,g,P,b),u=Gt.get(g,S.length),u.init(P),S.push(u),St.multiplyMatrices(P.projectionMatrix,P.matrixWorldInverse),Y.setFromProjectionMatrix(St),pt=this.localClippingEnabled,tt=j.init(this.clippingPlanes,pt),q=ct.get(g,E.length),q.init(),E.push(q),G.enabled===!0&&G.isPresenting===!0){const Z=v.xr.getDepthSensingMesh();Z!==null&&Ss(Z,P,-1/0,v.sortObjects)}Ss(g,P,0,v.sortObjects),q.finish(),v.sortObjects===!0&&q.sort(it,lt),Ot=G.enabled===!1||G.isPresenting===!1||G.hasDepthSensing()===!1,Ot&&Mt.addToRenderList(q,g),this.info.render.frame++,tt===!0&&j.beginShadows();const B=u.state.shadowsArray;ht.render(B,g,P),tt===!0&&j.endShadows(),this.info.autoReset===!0&&this.info.reset();const F=q.opaque,U=q.transmissive;if(u.setupLights(),P.isArrayCamera){const Z=P.cameras;if(U.length>0)for(let at=0,ft=Z.length;at<ft;at++){const dt=Z[at];aV(F,U,g,dt)}Ot&&Mt.render(g);for(let at=0,ft=Z.length;at<ft;at++){const dt=Z[at];VV(q,g,dt,dt.viewport)}}else U.length>0&&aV(F,U,g,P),Ot&&Mt.render(g),VV(q,g,P);b!==null&&(M.updateMultisampleRenderTarget(b),M.updateRenderTargetMipmap(b)),g.isScene===!0&&g.onAfterRender(v,g,P),Kt.resetDefaultState(),x=-1,_=null,S.pop(),S.length>0?(u=S[S.length-1],tt===!0&&j.setGlobalState(v.clippingPlanes,u.state.camera)):u=null,E.pop(),E.length>0?q=E[E.length-1]:q=null};function Ss(g,P,B,F){if(g.visible===!1)return;if(g.layers.test(P.layers)){if(g.isGroup)B=g.renderOrder;else if(g.isLOD)g.autoUpdate===!0&&g.update(P);else if(g.isLight)u.pushLight(g),g.castShadow&&u.pushShadow(g);else if(g.isSprite){if(!g.frustumCulled||Y.intersectsSprite(g)){F&&Lt.setFromMatrixPosition(g.matrixWorld).applyMatrix4(St);const at=W.update(g),ft=g.material;ft.visible&&q.push(g,at,ft,B,Lt.z,null)}}else if((g.isMesh||g.isLine||g.isPoints)&&(!g.frustumCulled||Y.intersectsObject(g))){const at=W.update(g),ft=g.material;if(F&&(g.boundingSphere!==void 0?(g.boundingSphere===null&&g.computeBoundingSphere(),Lt.copy(g.boundingSphere.center)):(at.boundingSphere===null&&at.computeBoundingSphere(),Lt.copy(at.boundingSphere.center)),Lt.applyMatrix4(g.matrixWorld).applyMatrix4(St)),Array.isArray(ft)){const dt=at.groups;for(let yt=0,Rt=dt.length;yt<Rt;yt++){const qt=dt[yt],Ht=ft[qt.materialIndex];Ht&&Ht.visible&&q.push(g,at,Ht,B,Lt.z,qt)}}else ft.visible&&q.push(g,at,ft,B,Lt.z,null)}}const Z=g.children;for(let at=0,ft=Z.length;at<ft;at++)Ss(Z[at],P,B,F)}function VV(g,P,B,F){const U=g.opaque,Z=g.transmissive,at=g.transparent;u.setupLightsView(B),tt===!0&&j.setGlobalState(v.clippingPlanes,B),F&&xt.viewport(w.copy(F)),U.length>0&&Ni(U,P,B),Z.length>0&&Ni(Z,P,B),at.length>0&&Ni(at,P,B),xt.buffers.depth.setTest(!0),xt.buffers.depth.setMask(!0),xt.buffers.color.setMask(!0),xt.setPolygonOffset(!1)}function aV(g,P,B,F){if((B.isScene===!0?B.overrideMaterial:null)!==null)return;u.state.transmissionRenderTarget[F.id]===void 0&&(u.state.transmissionRenderTarget[F.id]=new Nn(1,1,{generateMipmaps:!0,type:Dt.has("EXT_color_buffer_half_float")||Dt.has("EXT_color_buffer_float")?Di:an,minFilter:Bn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:zt.workingColorSpace}));const Z=u.state.transmissionRenderTarget[F.id],at=F.viewport||w;Z.setSize(at.z,at.w);const ft=v.getRenderTarget();v.setRenderTarget(Z),v.getClearColor(H),K=v.getClearAlpha(),K<1&&v.setClearColor(16777215,.5),v.clear(),Ot&&Mt.render(B);const dt=v.toneMapping;v.toneMapping=vn;const yt=F.viewport;if(F.viewport!==void 0&&(F.viewport=void 0),u.setupLightsView(F),tt===!0&&j.setGlobalState(v.clippingPlanes,F),Ni(g,B,F),M.updateMultisampleRenderTarget(Z),M.updateRenderTargetMipmap(Z),Dt.has("WEBGL_multisampled_render_to_texture")===!1){let Rt=!1;for(let qt=0,Ht=P.length;qt<Ht;qt++){const Jt=P[qt],Zt=Jt.object,Me=Jt.geometry,kt=Jt.material,mt=Jt.group;if(kt.side===oe&&Zt.layers.test(F.layers)){const Je=kt.side;kt.side=_e,kt.needsUpdate=!0,oV(Zt,B,F,Me,kt,mt),kt.side=Je,kt.needsUpdate=!0,Rt=!0}}Rt===!0&&(M.updateMultisampleRenderTarget(Z),M.updateRenderTargetMipmap(Z))}v.setRenderTarget(ft),v.setClearColor(H,K),yt!==void 0&&(F.viewport=yt),v.toneMapping=dt}function Ni(g,P,B){const F=P.isScene===!0?P.overrideMaterial:null;for(let U=0,Z=g.length;U<Z;U++){const at=g[U],ft=at.object,dt=at.geometry,yt=F===null?at.material:F,Rt=at.group;ft.layers.test(B.layers)&&oV(ft,P,B,dt,yt,Rt)}}function oV(g,P,B,F,U,Z){g.onBeforeRender(v,P,B,F,U,Z),g.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,g.matrixWorld),g.normalMatrix.getNormalMatrix(g.modelViewMatrix),U.onBeforeRender(v,P,B,F,g,Z),U.transparent===!0&&U.side===oe&&U.forceSinglePass===!1?(U.side=_e,U.needsUpdate=!0,v.renderBufferDirect(B,P,F,U,g,Z),U.side=Mn,U.needsUpdate=!0,v.renderBufferDirect(B,P,F,U,g,Z),U.side=oe):v.renderBufferDirect(B,P,F,U,g,Z),g.onAfterRender(v,P,B,F,U,Z)}function Oi(g,P,B){P.isScene!==!0&&(P=ee);const F=_t.get(g),U=u.state.lights,Z=u.state.shadowsArray,at=U.state.version,ft=At.getParameters(g,U.state,Z,P,B),dt=At.getProgramCacheKey(ft);let yt=F.programs;F.environment=g.isMeshStandardMaterial?P.environment:null,F.fog=P.fog,F.envMap=(g.isMeshStandardMaterial?D:A).get(g.envMap||F.environment),F.envMapRotation=F.environment!==null&&g.envMap===null?P.environmentRotation:g.envMapRotation,yt===void 0&&(g.addEventListener("dispose",Ct),yt=new Map,F.programs=yt);let Rt=yt.get(dt);if(Rt!==void 0){if(F.currentProgram===Rt&&F.lightsStateVersion===at)return cV(g,ft),Rt}else ft.uniforms=At.getUniforms(g),g.onBeforeCompile(ft,v),Rt=At.acquireProgram(ft,dt),yt.set(dt,Rt),F.uniforms=ft.uniforms;const qt=F.uniforms;return(!g.isShaderMaterial&&!g.isRawShaderMaterial||g.clipping===!0)&&(qt.clippingPlanes=j.uniform),cV(g,ft),F.needsLights=io(g),F.lightsStateVersion=at,F.needsLights&&(qt.ambientLightColor.value=U.state.ambient,qt.lightProbe.value=U.state.probe,qt.directionalLights.value=U.state.directional,qt.directionalLightShadows.value=U.state.directionalShadow,qt.spotLights.value=U.state.spot,qt.spotLightShadows.value=U.state.spotShadow,qt.rectAreaLights.value=U.state.rectArea,qt.ltc_1.value=U.state.rectAreaLTC1,qt.ltc_2.value=U.state.rectAreaLTC2,qt.pointLights.value=U.state.point,qt.pointLightShadows.value=U.state.pointShadow,qt.hemisphereLights.value=U.state.hemi,qt.directionalShadowMap.value=U.state.directionalShadowMap,qt.directionalShadowMatrix.value=U.state.directionalShadowMatrix,qt.spotShadowMap.value=U.state.spotShadowMap,qt.spotLightMatrix.value=U.state.spotLightMatrix,qt.spotLightMap.value=U.state.spotLightMap,qt.pointShadowMap.value=U.state.pointShadowMap,qt.pointShadowMatrix.value=U.state.pointShadowMatrix),F.currentProgram=Rt,F.uniformsList=null,Rt}function lV(g){if(g.uniformsList===null){const P=g.currentProgram.getUniforms();g.uniformsList=ps.seqWithValue(P.seq,g.uniforms)}return g.uniformsList}function cV(g,P){const B=_t.get(g);B.outputColorSpace=P.outputColorSpace,B.batching=P.batching,B.batchingColor=P.batchingColor,B.instancing=P.instancing,B.instancingColor=P.instancingColor,B.instancingMorph=P.instancingMorph,B.skinning=P.skinning,B.morphTargets=P.morphTargets,B.morphNormals=P.morphNormals,B.morphColors=P.morphColors,B.morphTargetsCount=P.morphTargetsCount,B.numClippingPlanes=P.numClippingPlanes,B.numIntersection=P.numClipIntersection,B.vertexAlphas=P.vertexAlphas,B.vertexTangents=P.vertexTangents,B.toneMapping=P.toneMapping}function eo(g,P,B,F,U){P.isScene!==!0&&(P=ee),M.resetTextureUnits();const Z=P.fog,at=F.isMeshStandardMaterial?P.environment:null,ft=b===null?v.outputColorSpace:b.isXRRenderTarget===!0?b.texture.colorSpace:qi,dt=(F.isMeshStandardMaterial?D:A).get(F.envMap||at),yt=F.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,Rt=!!B.attributes.tangent&&(!!F.normalMap||F.anisotropy>0),qt=!!B.morphAttributes.position,Ht=!!B.morphAttributes.normal,Jt=!!B.morphAttributes.color;let Zt=vn;F.toneMapped&&(b===null||b.isXRRenderTarget===!0)&&(Zt=v.toneMapping);const Me=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,kt=Me!==void 0?Me.length:0,mt=_t.get(F),Je=u.state.lights;if(tt===!0&&(pt===!0||g!==_)){const Re=g===_&&F.id===x;j.setState(F,g,Re)}let Wt=!1;F.version===mt.__version?(mt.needsLights&&mt.lightsStateVersion!==Je.state.version||mt.outputColorSpace!==ft||U.isBatchedMesh&&mt.batching===!1||!U.isBatchedMesh&&mt.batching===!0||U.isBatchedMesh&&mt.batchingColor===!0&&U.colorTexture===null||U.isBatchedMesh&&mt.batchingColor===!1&&U.colorTexture!==null||U.isInstancedMesh&&mt.instancing===!1||!U.isInstancedMesh&&mt.instancing===!0||U.isSkinnedMesh&&mt.skinning===!1||!U.isSkinnedMesh&&mt.skinning===!0||U.isInstancedMesh&&mt.instancingColor===!0&&U.instanceColor===null||U.isInstancedMesh&&mt.instancingColor===!1&&U.instanceColor!==null||U.isInstancedMesh&&mt.instancingMorph===!0&&U.morphTexture===null||U.isInstancedMesh&&mt.instancingMorph===!1&&U.morphTexture!==null||mt.envMap!==dt||F.fog===!0&&mt.fog!==Z||mt.numClippingPlanes!==void 0&&(mt.numClippingPlanes!==j.numPlanes||mt.numIntersection!==j.numIntersection)||mt.vertexAlphas!==yt||mt.vertexTangents!==Rt||mt.morphTargets!==qt||mt.morphNormals!==Ht||mt.morphColors!==Jt||mt.toneMapping!==Zt||mt.morphTargetsCount!==kt)&&(Wt=!0):(Wt=!0,mt.__version=F.version);let De=mt.currentProgram;Wt===!0&&(De=Oi(F,P,U));let Gn=!1,ye=!1,_i=!1;const $t=De.getUniforms(),ke=mt.uniforms;if(xt.useProgram(De.program)&&(Gn=!0,ye=!0,_i=!0),F.id!==x&&(x=F.id,ye=!0),Gn||_!==g){xt.buffers.depth.getReversed()?(st.copy(g.projectionMatrix),ll(st),cl(st),$t.setValue(I,"projectionMatrix",st)):$t.setValue(I,"projectionMatrix",g.projectionMatrix),$t.setValue(I,"viewMatrix",g.matrixWorldInverse);const ln=$t.map.cameraPosition;ln!==void 0&&ln.setValue(I,wt.setFromMatrixPosition(g.matrixWorld)),Bt.logarithmicDepthBuffer&&$t.setValue(I,"logDepthBufFC",2/(Math.log(g.far+1)/Math.LN2)),(F.isMeshPhongMaterial||F.isMeshToonMaterial||F.isMeshLambertMaterial||F.isMeshBasicMaterial||F.isMeshStandardMaterial||F.isShaderMaterial)&&$t.setValue(I,"isOrthographic",g.isOrthographicCamera===!0),_!==g&&(_=g,ye=!0,_i=!0)}if(U.isSkinnedMesh){$t.setOptional(I,U,"bindMatrix"),$t.setOptional(I,U,"bindMatrixInverse");const Re=U.skeleton;Re&&(Re.boneTexture===null&&Re.computeBoneTexture(),$t.setValue(I,"boneTexture",Re.boneTexture,M))}U.isBatchedMesh&&($t.setOptional(I,U,"batchingTexture"),$t.setValue(I,"batchingTexture",U._matricesTexture,M),$t.setOptional(I,U,"batchingIdTexture"),$t.setValue(I,"batchingIdTexture",U._indirectTexture,M),$t.setOptional(I,U,"batchingColorTexture"),U._colorsTexture!==null&&$t.setValue(I,"batchingColorTexture",U._colorsTexture,M));const vi=B.morphAttributes;if((vi.position!==void 0||vi.normal!==void 0||vi.color!==void 0)&&Et.update(U,B,De),(ye||mt.receiveShadow!==U.receiveShadow)&&(mt.receiveShadow=U.receiveShadow,$t.setValue(I,"receiveShadow",U.receiveShadow)),F.isMeshGouraudMaterial&&F.envMap!==null&&(ke.envMap.value=dt,ke.flipEnvMap.value=dt.isCubeTexture&&dt.isRenderTargetTexture===!1?-1:1),F.isMeshStandardMaterial&&F.envMap===null&&P.environment!==null&&(ke.envMapIntensity.value=P.environmentIntensity),ye&&($t.setValue(I,"toneMappingExposure",v.toneMappingExposure),mt.needsLights&&no(ke,_i),Z&&F.fog===!0&&rt.refreshFogUniforms(ke,Z),rt.refreshMaterialUniforms(ke,F,z,$,u.state.transmissionRenderTarget[g.id]),ps.upload(I,lV(mt),ke,M)),F.isShaderMaterial&&F.uniformsNeedUpdate===!0&&(ps.upload(I,lV(mt),ke,M),F.uniformsNeedUpdate=!1),F.isSpriteMaterial&&$t.setValue(I,"center",U.center),$t.setValue(I,"modelViewMatrix",U.modelViewMatrix),$t.setValue(I,"normalMatrix",U.normalMatrix),$t.setValue(I,"modelMatrix",U.matrixWorld),F.isShaderMaterial||F.isRawShaderMaterial){const Re=F.uniformsGroups;for(let ln=0,cn=Re.length;ln<cn;ln++){const hV=Re[ln];C.update(hV,De),C.bind(hV,De)}}return De}function no(g,P){g.ambientLightColor.needsUpdate=P,g.lightProbe.needsUpdate=P,g.directionalLights.needsUpdate=P,g.directionalLightShadows.needsUpdate=P,g.pointLights.needsUpdate=P,g.pointLightShadows.needsUpdate=P,g.spotLights.needsUpdate=P,g.spotLightShadows.needsUpdate=P,g.rectAreaLights.needsUpdate=P,g.hemisphereLights.needsUpdate=P}function io(g){return g.isMeshLambertMaterial||g.isMeshToonMaterial||g.isMeshPhongMaterial||g.isMeshStandardMaterial||g.isShadowMaterial||g.isShaderMaterial&&g.lights===!0}this.getActiveCubeFace=function(){return y},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return b},this.setRenderTargetTextures=function(g,P,B){_t.get(g.texture).__webglTexture=P,_t.get(g.depthTexture).__webglTexture=B;const F=_t.get(g);F.__hasExternalTextures=!0,F.__autoAllocateDepthBuffer=B===void 0,F.__autoAllocateDepthBuffer||Dt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),F.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(g,P){const B=_t.get(g);B.__webglFramebuffer=P,B.__useDefaultFramebuffer=P===void 0},this.setRenderTarget=function(g,P=0,B=0){b=g,y=P,T=B;let F=!0,U=null,Z=!1,at=!1;if(g){const dt=_t.get(g);if(dt.__useDefaultFramebuffer!==void 0)xt.bindFramebuffer(I.FRAMEBUFFER,null),F=!1;else if(dt.__webglFramebuffer===void 0)M.setupRenderTarget(g);else if(dt.__hasExternalTextures)M.rebindTextures(g,_t.get(g.texture).__webglTexture,_t.get(g.depthTexture).__webglTexture);else if(g.depthBuffer){const qt=g.depthTexture;if(dt.__boundDepthTexture!==qt){if(qt!==null&&_t.has(qt)&&(g.width!==qt.image.width||g.height!==qt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");M.setupDepthRenderbuffer(g)}}const yt=g.texture;(yt.isData3DTexture||yt.isDataArrayTexture||yt.isCompressedArrayTexture)&&(at=!0);const Rt=_t.get(g).__webglFramebuffer;g.isWebGLCubeRenderTarget?(Array.isArray(Rt[P])?U=Rt[P][B]:U=Rt[P],Z=!0):g.samples>0&&M.useMultisampledRTT(g)===!1?U=_t.get(g).__webglMultisampledFramebuffer:Array.isArray(Rt)?U=Rt[B]:U=Rt,w.copy(g.viewport),O.copy(g.scissor),N=g.scissorTest}else w.copy(gt).multiplyScalar(z).floor(),O.copy(It).multiplyScalar(z).floor(),N=Xt;if(xt.bindFramebuffer(I.FRAMEBUFFER,U)&&F&&xt.drawBuffers(g,U),xt.viewport(w),xt.scissor(O),xt.setScissorTest(N),Z){const dt=_t.get(g.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+P,dt.__webglTexture,B)}else if(at){const dt=_t.get(g.texture),yt=P||0;I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,dt.__webglTexture,B||0,yt)}x=-1},this.readRenderTargetPixels=function(g,P,B,F,U,Z,at){if(!(g&&g.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ft=_t.get(g).__webglFramebuffer;if(g.isWebGLCubeRenderTarget&&at!==void 0&&(ft=ft[at]),ft){xt.bindFramebuffer(I.FRAMEBUFFER,ft);try{const dt=g.texture,yt=dt.format,Rt=dt.type;if(!Bt.textureFormatReadable(yt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Bt.textureTypeReadable(Rt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}P>=0&&P<=g.width-F&&B>=0&&B<=g.height-U&&I.readPixels(P,B,F,U,Pt.convert(yt),Pt.convert(Rt),Z)}finally{const dt=b!==null?_t.get(b).__webglFramebuffer:null;xt.bindFramebuffer(I.FRAMEBUFFER,dt)}}},this.readRenderTargetPixelsAsync=async function(g,P,B,F,U,Z,at){if(!(g&&g.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ft=_t.get(g).__webglFramebuffer;if(g.isWebGLCubeRenderTarget&&at!==void 0&&(ft=ft[at]),ft){const dt=g.texture,yt=dt.format,Rt=dt.type;if(!Bt.textureFormatReadable(yt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Bt.textureTypeReadable(Rt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(P>=0&&P<=g.width-F&&B>=0&&B<=g.height-U){xt.bindFramebuffer(I.FRAMEBUFFER,ft);const qt=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,qt),I.bufferData(I.PIXEL_PACK_BUFFER,Z.byteLength,I.STREAM_READ),I.readPixels(P,B,F,U,Pt.convert(yt),Pt.convert(Rt),0);const Ht=b!==null?_t.get(b).__webglFramebuffer:null;xt.bindFramebuffer(I.FRAMEBUFFER,Ht);const Jt=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await ol(I,Jt,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,qt),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,Z),I.deleteBuffer(qt),I.deleteSync(Jt),Z}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(g,P=null,B=0){g.isTexture!==!0&&(yi("WebGLRenderer: copyFramebufferToTexture function signature has changed."),P=arguments[0]||null,g=arguments[1]);const F=Math.pow(2,-B),U=Math.floor(g.image.width*F),Z=Math.floor(g.image.height*F),at=P!==null?P.x:0,ft=P!==null?P.y:0;M.setTexture2D(g,0),I.copyTexSubImage2D(I.TEXTURE_2D,B,0,0,at,ft,U,Z),xt.unbindTexture()},this.copyTextureToTexture=function(g,P,B=null,F=null,U=0){g.isTexture!==!0&&(yi("WebGLRenderer: copyTextureToTexture function signature has changed."),F=arguments[0]||null,g=arguments[1],P=arguments[2],U=arguments[3]||0,B=null);let Z,at,ft,dt,yt,Rt,qt,Ht,Jt;const Zt=g.isCompressedTexture?g.mipmaps[U]:g.image;B!==null?(Z=B.max.x-B.min.x,at=B.max.y-B.min.y,ft=B.isBox3?B.max.z-B.min.z:1,dt=B.min.x,yt=B.min.y,Rt=B.isBox3?B.min.z:0):(Z=Zt.width,at=Zt.height,ft=Zt.depth||1,dt=0,yt=0,Rt=0),F!==null?(qt=F.x,Ht=F.y,Jt=F.z):(qt=0,Ht=0,Jt=0);const Me=Pt.convert(P.format),kt=Pt.convert(P.type);let mt;P.isData3DTexture?(M.setTexture3D(P,0),mt=I.TEXTURE_3D):P.isDataArrayTexture||P.isCompressedArrayTexture?(M.setTexture2DArray(P,0),mt=I.TEXTURE_2D_ARRAY):(M.setTexture2D(P,0),mt=I.TEXTURE_2D),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,P.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,P.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,P.unpackAlignment);const Je=I.getParameter(I.UNPACK_ROW_LENGTH),Wt=I.getParameter(I.UNPACK_IMAGE_HEIGHT),De=I.getParameter(I.UNPACK_SKIP_PIXELS),Gn=I.getParameter(I.UNPACK_SKIP_ROWS),ye=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,Zt.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Zt.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,dt),I.pixelStorei(I.UNPACK_SKIP_ROWS,yt),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Rt);const _i=g.isDataArrayTexture||g.isData3DTexture,$t=P.isDataArrayTexture||P.isData3DTexture;if(g.isRenderTargetTexture||g.isDepthTexture){const ke=_t.get(g),vi=_t.get(P),Re=_t.get(ke.__renderTarget),ln=_t.get(vi.__renderTarget);xt.bindFramebuffer(I.READ_FRAMEBUFFER,Re.__webglFramebuffer),xt.bindFramebuffer(I.DRAW_FRAMEBUFFER,ln.__webglFramebuffer);for(let cn=0;cn<ft;cn++)_i&&I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,_t.get(g).__webglTexture,U,Rt+cn),g.isDepthTexture?($t&&I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,_t.get(P).__webglTexture,U,Jt+cn),I.blitFramebuffer(dt,yt,Z,at,qt,Ht,Z,at,I.DEPTH_BUFFER_BIT,I.NEAREST)):$t?I.copyTexSubImage3D(mt,U,qt,Ht,Jt+cn,dt,yt,Z,at):I.copyTexSubImage2D(mt,U,qt,Ht,Jt+cn,dt,yt,Z,at);xt.bindFramebuffer(I.READ_FRAMEBUFFER,null),xt.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else $t?g.isDataTexture||g.isData3DTexture?I.texSubImage3D(mt,U,qt,Ht,Jt,Z,at,ft,Me,kt,Zt.data):P.isCompressedArrayTexture?I.compressedTexSubImage3D(mt,U,qt,Ht,Jt,Z,at,ft,Me,Zt.data):I.texSubImage3D(mt,U,qt,Ht,Jt,Z,at,ft,Me,kt,Zt):g.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,U,qt,Ht,Z,at,Me,kt,Zt.data):g.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,U,qt,Ht,Zt.width,Zt.height,Me,Zt.data):I.texSubImage2D(I.TEXTURE_2D,U,qt,Ht,Z,at,Me,kt,Zt);I.pixelStorei(I.UNPACK_ROW_LENGTH,Je),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Wt),I.pixelStorei(I.UNPACK_SKIP_PIXELS,De),I.pixelStorei(I.UNPACK_SKIP_ROWS,Gn),I.pixelStorei(I.UNPACK_SKIP_IMAGES,ye),U===0&&P.generateMipmaps&&I.generateMipmap(mt),xt.unbindTexture()},this.copyTextureToTexture3D=function(g,P,B=null,F=null,U=0){return g.isTexture!==!0&&(yi("WebGLRenderer: copyTextureToTexture3D function signature has changed."),B=arguments[0]||null,F=arguments[1]||null,g=arguments[2],P=arguments[3],U=arguments[4]||0),yi('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(g,P,B,F,U)},this.initRenderTarget=function(g){_t.get(g).__webglFramebuffer===void 0&&M.setupRenderTarget(g)},this.initTexture=function(g){g.isCubeTexture?M.setTextureCube(g,0):g.isData3DTexture?M.setTexture3D(g,0):g.isDataArrayTexture||g.isCompressedArrayTexture?M.setTexture2DArray(g,0):M.setTexture2D(g,0),xt.unbindTexture()},this.resetState=function(){y=0,T=0,b=null,xt.reset(),Kt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return rn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=zt._getDrawingBufferColorSpace(t),e.unpackColorSpace=zt._getUnpackColorSpace()}}class tV{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new Nt(t),this.density=e}clone(){return new tV(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class vd extends fe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Xe,this.environmentIntensity=1,this.environmentRotation=new Xe,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class zr extends mi{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new Nt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const ca=new te,Hr=new Da,os=new vs,ls=new R;class ha extends fe{constructor(t=new xe,e=new zr){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,V=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),os.copy(n.boundingSphere),os.applyMatrix4(s),os.radius+=r,t.ray.intersectsSphere(os)===!1)return;ca.copy(s).invert(),Hr.copy(t.ray).applyMatrix4(ca);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),o=a*a,l=n.index,h=n.attributes.position;if(l!==null){const f=Math.max(0,V.start),d=Math.min(l.count,V.start+V.count);for(let p=f,m=d;p<m;p++){const q=l.getX(p);ls.fromBufferAttribute(h,q),ua(ls,q,o,s,t,e,this)}}else{const f=Math.max(0,V.start),d=Math.min(h.count,V.start+V.count);for(let p=f,m=d;p<m;p++)ls.fromBufferAttribute(h,p),ua(ls,p,o,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,V=s.length;r<V;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function ua(i,t,e,n,s,r,V){const a=Hr.distanceSqToPoint(i);if(a<e){const o=new R;Hr.closestPointToPoint(i,o),o.applyMatrix4(n);const l=s.ray.origin.distanceTo(o);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:o,index:t,face:null,faceIndex:null,barycoord:null,object:V})}}class ii extends ve{constructor(t,e,n,s,r,V,a,o,l){super(t,e,n,s,r,V,a,o,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class on{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,s=this.getPoint(0),r=0;e.push(0);for(let V=1;V<=t;V++)n=this.getPoint(V/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let s=0;const r=n.length;let V;e?V=e:V=t*n[r-1];let a=0,o=r-1,l;for(;a<=o;)if(s=Math.floor(a+(o-a)/2),l=n[s]-V,l<0)a=s+1;else if(l>0)o=s-1;else{o=s;break}if(s=o,n[s]===V)return s/(r-1);const c=n[s],f=n[s+1]-c,d=(V-c)/f;return(s+d)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);const V=this.getPoint(s),a=this.getPoint(r),o=e||(V.isVector2?new vt:new R);return o.copy(a).sub(V).normalize(),o}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new R,s=[],r=[],V=[],a=new R,o=new te;for(let d=0;d<=t;d++){const p=d/t;s[d]=this.getTangentAt(p,new R)}r[0]=new R,V[0]=new R;let l=Number.MAX_VALUE;const c=Math.abs(s[0].x),h=Math.abs(s[0].y),f=Math.abs(s[0].z);c<=l&&(l=c,n.set(1,0,0)),h<=l&&(l=h,n.set(0,1,0)),f<=l&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),V[0].crossVectors(s[0],r[0]);for(let d=1;d<=t;d++){if(r[d]=r[d-1].clone(),V[d]=V[d-1].clone(),a.crossVectors(s[d-1],s[d]),a.length()>Number.EPSILON){a.normalize();const p=Math.acos(de(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(o.makeRotationAxis(a,p))}V[d].crossVectors(s[d],r[d])}if(e===!0){let d=Math.acos(de(r[0].dot(r[t]),-1,1));d/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(d=-d);for(let p=1;p<=t;p++)r[p].applyMatrix4(o.makeRotationAxis(s[p],d*p)),V[p].crossVectors(s[p],r[p])}return{tangents:s,normals:r,binormals:V}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class ja extends on{constructor(t=0,e=0,n=1,s=1,r=0,V=Math.PI*2,a=!1,o=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=V,this.aClockwise=a,this.aRotation=o}getPoint(t,e=new vt){const n=e,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const V=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(V?r=0:r=s),this.aClockwise===!0&&!V&&(r===s?r=-s:r=r-s);const a=this.aStartAngle+t*r;let o=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const c=Math.cos(this.aRotation),h=Math.sin(this.aRotation),f=o-this.aX,d=l-this.aY;o=f*c-d*h+this.aX,l=f*h+d*c+this.aY}return n.set(o,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class xd extends ja{constructor(t,e,n,s,r,V){super(t,e,n,n,s,r,V),this.isArcCurve=!0,this.type="ArcCurve"}}function eV(){let i=0,t=0,e=0,n=0;function s(r,V,a,o){i=r,t=a,e=-3*r+3*V-2*a-o,n=2*r-2*V+a+o}return{initCatmullRom:function(r,V,a,o,l){s(V,a,l*(a-r),l*(o-V))},initNonuniformCatmullRom:function(r,V,a,o,l,c,h){let f=(V-r)/l-(a-r)/(l+c)+(a-V)/c,d=(a-V)/c-(o-V)/(c+h)+(o-a)/h;f*=c,d*=c,s(V,a,f,d)},calc:function(r){const V=r*r,a=V*r;return i+t*r+e*V+n*a}}}const cs=new R,$s=new eV,tr=new eV,er=new eV;class Za extends on{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new R){const n=e,s=this.points,r=s.length,V=(r-(this.closed?0:1))*t;let a=Math.floor(V),o=V-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:o===0&&a===r-1&&(a=r-2,o=1);let l,c;this.closed||a>0?l=s[(a-1)%r]:(cs.subVectors(s[0],s[1]).add(s[0]),l=cs);const h=s[a%r],f=s[(a+1)%r];if(this.closed||a+2<r?c=s[(a+2)%r]:(cs.subVectors(s[r-1],s[r-2]).add(s[r-1]),c=cs),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let p=Math.pow(l.distanceToSquared(h),d),m=Math.pow(h.distanceToSquared(f),d),q=Math.pow(f.distanceToSquared(c),d);m<1e-4&&(m=1),p<1e-4&&(p=m),q<1e-4&&(q=m),$s.initNonuniformCatmullRom(l.x,h.x,f.x,c.x,p,m,q),tr.initNonuniformCatmullRom(l.y,h.y,f.y,c.y,p,m,q),er.initNonuniformCatmullRom(l.z,h.z,f.z,c.z,p,m,q)}else this.curveType==="catmullrom"&&($s.initCatmullRom(l.x,h.x,f.x,c.x,this.tension),tr.initCatmullRom(l.y,h.y,f.y,c.y,this.tension),er.initCatmullRom(l.z,h.z,f.z,c.z,this.tension));return n.set($s.calc(o),tr.calc(o),er.calc(o)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new R().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function fa(i,t,e,n,s){const r=(n-t)*.5,V=(s-e)*.5,a=i*i,o=i*a;return(2*e-2*n+r+V)*o+(-3*e+3*n-2*r-V)*a+r*i+e}function Md(i,t){const e=1-i;return e*e*t}function Sd(i,t){return 2*(1-i)*i*t}function Ed(i,t){return i*i*t}function Ri(i,t,e,n){return Md(i,t)+Sd(i,e)+Ed(i,n)}function yd(i,t){const e=1-i;return e*e*e*t}function Td(i,t){const e=1-i;return 3*e*e*i*t}function wd(i,t){return 3*(1-i)*i*i*t}function Cd(i,t){return i*i*i*t}function bi(i,t,e,n,s){return yd(i,t)+Td(i,e)+wd(i,n)+Cd(i,s)}class Rd extends on{constructor(t=new vt,e=new vt,n=new vt,s=new vt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new vt){const n=e,s=this.v0,r=this.v1,V=this.v2,a=this.v3;return n.set(bi(t,s.x,r.x,V.x,a.x),bi(t,s.y,r.y,V.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class bd extends on{constructor(t=new R,e=new R,n=new R,s=new R){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new R){const n=e,s=this.v0,r=this.v1,V=this.v2,a=this.v3;return n.set(bi(t,s.x,r.x,V.x,a.x),bi(t,s.y,r.y,V.y,a.y),bi(t,s.z,r.z,V.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Pd extends on{constructor(t=new vt,e=new vt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new vt){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new vt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Ud extends on{constructor(t=new R,e=new R){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new R){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new R){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Id extends on{constructor(t=new vt,e=new vt,n=new vt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new vt){const n=e,s=this.v0,r=this.v1,V=this.v2;return n.set(Ri(t,s.x,r.x,V.x),Ri(t,s.y,r.y,V.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class $a extends on{constructor(t=new R,e=new R,n=new R){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new R){const n=e,s=this.v0,r=this.v1,V=this.v2;return n.set(Ri(t,s.x,r.x,V.x),Ri(t,s.y,r.y,V.y),Ri(t,s.z,r.z,V.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Ld extends on{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new vt){const n=e,s=this.points,r=(s.length-1)*t,V=Math.floor(r),a=r-V,o=s[V===0?V:V-1],l=s[V],c=s[V>s.length-2?s.length-1:V+1],h=s[V>s.length-3?s.length-1:V+2];return n.set(fa(a,o.x,l.x,c.x,h.x),fa(a,o.y,l.y,c.y,h.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new vt().fromArray(s))}return this}}var Dd=Object.freeze({__proto__:null,ArcCurve:xd,CatmullRomCurve3:Za,CubicBezierCurve:Rd,CubicBezierCurve3:bd,EllipseCurve:ja,LineCurve:Pd,LineCurve3:Ud,QuadraticBezierCurve:Id,QuadraticBezierCurve3:$a,SplineCurve:Ld});class nV extends xe{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);const r=[],V=[],a=[],o=[],l=new R,c=new vt;V.push(0,0,0),a.push(0,0,1),o.push(.5,.5);for(let h=0,f=3;h<=e;h++,f+=3){const d=n+h/e*s;l.x=t*Math.cos(d),l.y=t*Math.sin(d),V.push(l.x,l.y,l.z),a.push(0,0,1),c.x=(V[f]/t+1)/2,c.y=(V[f+1]/t+1)/2,o.push(c.x,c.y)}for(let h=1;h<=e;h++)r.push(h,h+1,0);this.setIndex(r),this.setAttribute("position",new Ve(V,3)),this.setAttribute("normal",new Ve(a,3)),this.setAttribute("uv",new Ve(o,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new nV(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class xn extends xe{constructor(t=1,e=1,n=1,s=32,r=1,V=!1,a=0,o=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:V,thetaStart:a,thetaLength:o};const l=this;s=Math.floor(s),r=Math.floor(r);const c=[],h=[],f=[],d=[];let p=0;const m=[],q=n/2;let u=0;E(),V===!1&&(t>0&&S(!0),e>0&&S(!1)),this.setIndex(c),this.setAttribute("position",new Ve(h,3)),this.setAttribute("normal",new Ve(f,3)),this.setAttribute("uv",new Ve(d,2));function E(){const v=new R,L=new R;let y=0;const T=(e-t)/n;for(let b=0;b<=r;b++){const x=[],_=b/r,w=_*(e-t)+t;for(let O=0;O<=s;O++){const N=O/s,H=N*o+a,K=Math.sin(H),k=Math.cos(H);L.x=w*K,L.y=-_*n+q,L.z=w*k,h.push(L.x,L.y,L.z),v.set(K,T,k).normalize(),f.push(v.x,v.y,v.z),d.push(N,1-_),x.push(p++)}m.push(x)}for(let b=0;b<s;b++)for(let x=0;x<r;x++){const _=m[x][b],w=m[x+1][b],O=m[x+1][b+1],N=m[x][b+1];(t>0||x!==0)&&(c.push(_,w,N),y+=3),(e>0||x!==r-1)&&(c.push(w,O,N),y+=3)}l.addGroup(u,y,0),u+=y}function S(v){const L=p,y=new vt,T=new R;let b=0;const x=v===!0?t:e,_=v===!0?1:-1;for(let O=1;O<=s;O++)h.push(0,q*_,0),f.push(0,_,0),d.push(.5,.5),p++;const w=p;for(let O=0;O<=s;O++){const H=O/s*o+a,K=Math.cos(H),k=Math.sin(H);T.x=x*k,T.y=q*_,T.z=x*K,h.push(T.x,T.y,T.z),f.push(0,_,0),y.x=K*.5+.5,y.y=k*.5*_+.5,d.push(y.x,y.y),p++}for(let O=0;O<s;O++){const N=L+O,H=w+O;v===!0?c.push(H,H+1,N):c.push(H+1,H,N),b+=3}l.addGroup(u,b,v===!0?1:2),u+=b}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new xn(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Ye extends xn{constructor(t=1,e=1,n=32,s=1,r=!1,V=0,a=Math.PI*2){super(0,t,e,n,s,r,V,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:V,thetaLength:a}}static fromJSON(t){return new Ye(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class gn extends xe{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,V=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:V,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const o=Math.min(V+a,Math.PI);let l=0;const c=[],h=new R,f=new R,d=[],p=[],m=[],q=[];for(let u=0;u<=n;u++){const E=[],S=u/n;let v=0;u===0&&V===0?v=.5/e:u===n&&o===Math.PI&&(v=-.5/e);for(let L=0;L<=e;L++){const y=L/e;h.x=-t*Math.cos(s+y*r)*Math.sin(V+S*a),h.y=t*Math.cos(V+S*a),h.z=t*Math.sin(s+y*r)*Math.sin(V+S*a),p.push(h.x,h.y,h.z),f.copy(h).normalize(),m.push(f.x,f.y,f.z),q.push(y+v,1-S),E.push(l++)}c.push(E)}for(let u=0;u<n;u++)for(let E=0;E<e;E++){const S=c[u][E+1],v=c[u][E],L=c[u+1][E],y=c[u+1][E+1];(u!==0||V>0)&&d.push(S,v,y),(u!==n-1||o<Math.PI)&&d.push(v,L,y)}this.setIndex(d),this.setAttribute("position",new Ve(p,3)),this.setAttribute("normal",new Ve(m,3)),this.setAttribute("uv",new Ve(q,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new gn(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Ms extends xe{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);const V=[],a=[],o=[],l=[],c=new R,h=new R,f=new R;for(let d=0;d<=n;d++)for(let p=0;p<=s;p++){const m=p/s*r,q=d/n*Math.PI*2;h.x=(t+e*Math.cos(q))*Math.cos(m),h.y=(t+e*Math.cos(q))*Math.sin(m),h.z=e*Math.sin(q),a.push(h.x,h.y,h.z),c.x=t*Math.cos(m),c.y=t*Math.sin(m),f.subVectors(h,c).normalize(),o.push(f.x,f.y,f.z),l.push(p/s),l.push(d/n)}for(let d=1;d<=n;d++)for(let p=1;p<=s;p++){const m=(s+1)*d+p-1,q=(s+1)*(d-1)+p-1,u=(s+1)*(d-1)+p,E=(s+1)*d+p;V.push(m,q,E),V.push(q,u,E)}this.setIndex(V),this.setAttribute("position",new Ve(a,3)),this.setAttribute("normal",new Ve(o,3)),this.setAttribute("uv",new Ve(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ms(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class iV extends xe{constructor(t=new $a(new R(-1,-1,0),new R(-1,1,0),new R(1,1,0)),e=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:s,closed:r};const V=t.computeFrenetFrames(e,r);this.tangents=V.tangents,this.normals=V.normals,this.binormals=V.binormals;const a=new R,o=new R,l=new vt;let c=new R;const h=[],f=[],d=[],p=[];m(),this.setIndex(p),this.setAttribute("position",new Ve(h,3)),this.setAttribute("normal",new Ve(f,3)),this.setAttribute("uv",new Ve(d,2));function m(){for(let S=0;S<e;S++)q(S);q(r===!1?e:0),E(),u()}function q(S){c=t.getPointAt(S/e,c);const v=V.normals[S],L=V.binormals[S];for(let y=0;y<=s;y++){const T=y/s*Math.PI*2,b=Math.sin(T),x=-Math.cos(T);o.x=x*v.x+b*L.x,o.y=x*v.y+b*L.y,o.z=x*v.z+b*L.z,o.normalize(),f.push(o.x,o.y,o.z),a.x=c.x+n*o.x,a.y=c.y+n*o.y,a.z=c.z+n*o.z,h.push(a.x,a.y,a.z)}}function u(){for(let S=1;S<=e;S++)for(let v=1;v<=s;v++){const L=(s+1)*(S-1)+(v-1),y=(s+1)*S+(v-1),T=(s+1)*S+v,b=(s+1)*(S-1)+v;p.push(L,y,b),p.push(y,T,b)}}function E(){for(let S=0;S<=e;S++)for(let v=0;v<=s;v++)l.x=S/e,l.y=v/s,d.push(l.x,l.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new iV(new Dd[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}class ie extends mi{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Nt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Nt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ba,this.normalScale=new vt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Xe,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class to extends fe{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Nt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class Bd extends to{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(fe.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Nt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const nr=new te,da=new R,qa=new R;class Fd{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new vt(512,512),this.map=null,this.mapPass=null,this.matrix=new te,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Zr,this._frameExtents=new vt(1,1),this._viewportCount=1,this._viewports=[new re(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;da.setFromMatrixPosition(t.matrixWorld),e.position.copy(da),qa.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(qa),e.updateMatrixWorld(),nr.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(nr),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(nr)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class Nd extends Fd{constructor(){super(new Wa(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Od extends to{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(fe.DEFAULT_UP),this.updateMatrix(),this.target=new fe,this.shadow=new Nd}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class Gd{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=pa(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=pa();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function pa(){return performance.now()}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:kr}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=kr);class di{static createButton(t,e={}){const n=document.createElement("button");function s(){let l=null;async function c(d){d.addEventListener("end",h),await t.xr.setSession(d),n.textContent="EXIT VR",l=d}function h(){l.removeEventListener("end",h),n.textContent="ENTER VR",l=null}n.style.display="",n.style.cursor="pointer",n.style.left="calc(50% - 50px)",n.style.width="100px",n.textContent="ENTER VR";const f={...e,optionalFeatures:["local-floor","bounded-floor","layers",...e.optionalFeatures||[]]};n.onmouseenter=function(){n.style.opacity="1.0"},n.onmouseleave=function(){n.style.opacity="0.5"},n.onclick=function(){l===null?navigator.xr.requestSession("immersive-vr",f).then(c):(l.end(),navigator.xr.offerSession!==void 0&&navigator.xr.offerSession("immersive-vr",f).then(c).catch(d=>{console.warn(d)}))},navigator.xr.offerSession!==void 0&&navigator.xr.offerSession("immersive-vr",f).then(c).catch(d=>{console.warn(d)})}function r(){n.style.display="",n.style.cursor="auto",n.style.left="calc(50% - 75px)",n.style.width="150px",n.onmouseenter=null,n.onmouseleave=null,n.onclick=null}function V(){r(),n.textContent="VR NOT SUPPORTED"}function a(l){r(),console.warn("Exception when trying to call xr.isSessionSupported",l),n.textContent="VR NOT ALLOWED"}function o(l){l.style.position="absolute",l.style.bottom="20px",l.style.padding="12px 6px",l.style.border="1px solid #fff",l.style.borderRadius="4px",l.style.background="rgba(0,0,0,0.1)",l.style.color="#fff",l.style.font="normal 13px sans-serif",l.style.textAlign="center",l.style.opacity="0.5",l.style.outline="none",l.style.zIndex="999"}if("xr"in navigator)return n.id="VRButton",n.style.display="none",o(n),navigator.xr.isSessionSupported("immersive-vr").then(function(l){l?s():V(),l&&di.xrSessionIsGranted&&n.click()}).catch(a),n;{const l=document.createElement("a");return window.isSecureContext===!1?(l.href=document.location.href.replace(/^http:/,"https:"),l.innerHTML="WEBXR NEEDS HTTPS"):(l.href="https://immersiveweb.dev/",l.innerHTML="WEBXR NOT AVAILABLE"),l.style.left="calc(50% - 90px)",l.style.width="180px",l.style.textDecoration="none",o(l),l}}static registerSessionGrantedListener(){if(typeof navigator<"u"&&"xr"in navigator){if(/WebXRViewer\//i.test(navigator.userAgent))return;navigator.xr.addEventListener("sessiongranted",()=>{di.xrSessionIsGranted=!0})}}}di.xrSessionIsGranted=!1;di.registerSessionGrantedListener();const zd="data:audio/mpeg;base64,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",Hd=""+new URL("voice_10-FOsFEWNf.mp3",import.meta.url).href,kd="data:audio/mpeg;base64,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VVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVf/7UsRJA8AAAaQAAAAgAAA0gAAABFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVTEFNRTMuMTAwVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV//tSxKGDwAABpAAAACAAADSAAAAEVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVMQU1FMy4xMDBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVX/+1LEoYPAAAGkAAAAIAAANIAAAARVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVUxBTUUzLjEwMFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVf/7UsShg8AAAaQAAAAgAAA0gAAABFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV//tSxKGDwAABpAAAACAAADSAAAAEVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVU=",Wd="data:audio/mpeg;base64,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VVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVf/7UsRPA8AAAAAAAAAgAAA0gAAABFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVTEFNRTMuMTAwVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV//tSxKGDwAABpAAAACAAADSAAAAEVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVMQU1FMy4xMDBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVX/+1LEoYPAAAGkAAAAIAAANIAAAARVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVUxBTUUzLjEwMFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVf/7UsShg8AAAaQAAAAgAAA0gAAABFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV//tSxKGDwAABpAAAACAAADSAAAAEVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVU=",Yd="data:audio/mpeg;base64,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secNFHBthKuFazdMQU1FMy4xMDBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVf/7UsQrA8AAAAAAAAAgAAA0gAAABFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVTEFNRTMuMTAwVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV//tSxIkDwAABpAAAACAAADSAAAAEVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVMQU1FMy4xMDBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVX/+1LEoYPAAAGkAAAAIAAANIAAAARVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVUxBTUUzLjEwMFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVf/7UsShg8AAAaQAAAAgAAA0gAAABFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVTEFNRTMuMTAwVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV//tSxKGDwAABpAAAACAAADSAAAAEVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVX/+1LEoYPAAAGkAAAAIAAANIAAAARVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVQ==",Qd="data:audio/mpeg;base64,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qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq//tSxKGDwAABpAAAACAAADSAAAAEqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqr/+1LEoYPAAAGkAAAAIAAANIAAAASqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqg==",Xd=""+new URL("voice_15-BcCU7JDQ.mp3",import.meta.url).href,Kd="data:audio/mpeg;base64,SUQzBAAAAAAAIlRTU0UAAAAOAAADTGF2ZjYzLjEuMTAyAAAAAAAAAAAAAAD/+0DAAAAAAAAAAAAAAAAAAAAAAABJbmZvAAAADwAAAA8AAAz0AB4eHh4eHi4uLi4uLi4+Pj4+Pj5OTk5OTk5OXl5eXl5eXm5ubm5ubn5+fn5+fn6Pj4+Pj4+Pn5+fn5+fr6+vr6+vr7+/v7+/v7/Pz8/Pz8/f39/f39/f7+/v7+/v7////////wAAAABMYXZjNjMuMS4AAAAAAAAAAAAAAAAkBe4AAAAAAAAM9H7wsv0AAAAAAP/7UMQAAAlgA7qUAYABlyu4/xqgALJCSyWLg+9gPg+97AfB8Pp8oc4IAgGNQIAh4gBMH8oD4Pg/g+D4Pv4nBwEHS4IAgCHBAEHcoCYPn6gfB8H34nB8Pu1g4CAYwQBAEM0LAKAKAGAGAMAwGAgEAwA6gKoxNcAOSHhNgBa8AaFnxBCBC9/JBVBtBt/4qgKiCG3/kJEPjyIff/j6RCsQmjL//IR6xo9HtR7//+RHEJEPnOHw+VP///FYhJShCPSU0ej05SEiOQAAWAANBSBs7CT/+1LEBQALjg0iuFKAAVwULv8EYgL4fc77rTu7G/9mKT85JlY4fE/xQ4vchAmLHFj/1J99TF/8jEdn6poUaMJ/+emmrjXznFxd6//+ezLZGn5ioKDkHIQUExcgiA/////7H////FxdIADRDRAQ7w7u3u1u0EUIRP5LopGkZBP7NCbthZbmE9tO99wo26zk7LX89/vaDbIWmQVicX8hAkjjaQcXehYYZb/rf1icDnyhR3r/l4D6SAojpJkzj2sCCt99b9drI4yBnXXO6zOKJ0E/2v/7UsQJAAwMxXW9hAARgxWs/rKwAHGEax1Tu0oJAnBCMHLFRwCYB3Fz2NGi5Dh+NEckWffSYr5/j6ruS7FBQaih+ki/O/vp8mJTkGRV06VcnzWmy6os37//rFjgkEJpU3M6vXcVDKzM7VtNJAQ3GHQCxxr1tKjZixjKGE+sOAWF4qayYuKpsiWgVIA/mA/nejx31WXzX7v4v9vw35UXbBEG8saPYfFnFA7LhxPWtxYdnaelf/ySiQsFaTPK7vxKIixbItdVBBASdtltTZJJbUCi//tSxAYAC+WFa7hygBFxtHE7hnAGAQQJpuA0FqcCpQ1LACwsDuKIdCBQ8oCRUYJhE5lqliFUOEyovtcrMzCTCasYXOmJKYyPKowpXyfd2ls//3tJy7af1/T9uT//1SdP3dJBAUFz78oFVVTNPIAAc3xCBCuh0wJnLbR5p7f///////////2VufNqQNHjmJlWGWSeyO+uh5itOmKvY7ZB+hzTh80iVQbFxwVhQw4FhNiZjnUPadqxKqGmDJrIYeh5RUUsaUV5eJd5dmurkSBzr0b/+1LEBgALtFtt9YSAEX4Xb/cegALgXWtsHh8tmKHRXe5WxvZEBkCNpWMTBhcQGSeot3t3ULrMnKtxGoyZiEoFrCS3iwLlA4EQsAgXEQIhq9bBR/6zpU8du0N7bP3rdxEIj0l/nbyUkhNRslstlsrTYTTbAEpzr5ytZLTLONiaHq2EPONQQGfYQCgL6FQfp3HC55ZYvaR273L3T/8u6XcVEcRNn/MoM/+6Fz3FKxCD8Rx5ISjbOiRjuUBA0k2Y3NDHjwR64RQq6iRKSbcYBUjKi//7UsQFAAtZCXG8xAARdyAtNPCbIo+k0LApNQkKTwlggbK0DEhQ842CHHA1D0YAwQwWB4cOJVEip3tplbuUhf64/rj///+Zlmfa/mIPRr2n//////qYuVtc/NpV3DtX///sMJWYo7SYKSKbYCcqmN8gZwyHq4noeSHotQrByvWBSvW+LmO90+/rWSO1rqe8Kryf0jWrkyJpUjOZ2JTZf0zUIcUIoTEIXzufks1cikZqBYRZ1KNiYKJ6V27Vq9Cv2xqGsorQBAzEAoAS8UuNWshj//tSxAaACgT/U6eYUIFLFiek8yGgRifKREDGepJRTszFh80LhV87svmyWNkxfmrS1aZEe7Im6mo7N1R1UuUqlRgoC1S///f/abcoDCiAJhUz/+8WEQcMysoAIAAeGWwKoylUYBfw1IKl4SEarEfyvBQCSIhIUSTRkzXFbwk1AccUPYnpq7S0mpKvFjywhLGLF11x89L3crSqgsUWKgsaPt3otrqyITBVN5wZCTHAASg+ZHz4GEP45gvjhCUUHx0JRauOJaOm6srXWly3plcuehX/+1LEEwAKeIErJ7EJiQ2UZCggjSi2ZrJNNZlqtmtSWayRUFIQqK2CsSlMjq/++T+1HE+mk8rdhezuynjey/F/V/+UAIZYiUgAKEHfLKayv30lxxmasxGZVdipL5WwnXJj7IKKloPC41GG1B0sJhCDh7tZ3FVsPOe7kWu/9+lvIJ18tfrxVCogNxKpRpopKGWApZa5Jk7WW2vOhIC9DMZGD1gLUj/pb48b+M/0f5L8qnZ/QzyRjcArGnGZEa2Dj5jDubVMQU1FMy4xMDBVVVVVVf/7UsQlAcW0AxWgiEAAOAEAAe8ABFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVTEFNRTMuMTAwVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV//tSxGUDwAAAAAAAACAAADSAAAAEVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVMQU1FMy4xMDBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVX/+1LEoYPAAAGkAAAAIAAANIAAAARVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVUxBTUUzLjEwMFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVf/7UsShg8AAAaQAAAAgAAA0gAAABFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVTEFNRTMuMTAwVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV//tSxKGDwAABpAAAACAAADSAAAAEVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVMQU1FMy4xMDBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVX/+1LEoYPAAAGkAAAAIAAANIAAAARVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVf/7UsShg8AAAaQAAAAgAAA0gAAABFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV",Jd="data:audio/mpeg;base64,SUQzBAAAAAAAIlRTU0UAAAAOAAADTGF2ZjYzLjEuMTAyAAAAAAAAAAAAAAD/+0DAAAAAAAAAAAAAAAAAAAAAAABJbmZvAAAADwAAABAAAA3FABwcHBwcHCsrKysrKzo6Ojo6OklJSUlJSVlZWVlZWVloaGhoaGh3d3d3d3eGhoaGhoaVlZWVlZWVpKSkpKSktLS0tLS0w8PDw8PD0tLS0tLS0uHh4eHh4fDw8PDw8P///////wAAAABMYXZjNjMuMS4AAAAAAAAAAAAAAAAkBW8AAAAAAAANxaex7qkAAAAAAP/7UMQAA8AAAaQAAAAhNaLWwoIwAMlMYyGyACMb///Qt3/j6IVDvAN4ACCdzd/iJ6FXfRNC3f/PiFu+5xE3fc9C6////8T3eOaIld45wIcB8ufBD/7xA4Pl3kPhgoNB8ocDChaNhsLRsN78NRcJBIG/14yOLl+h54jmPL8I+li9o/NkThlxzkuOQS4gFHy+kMchDJEsEZC6P5aFXEYHgFuJowAm4XsTf8JwI2I2OcvkoPALeJ8PcYIe/8vjkRUYLLg9jAvi6SQ5R6/8wZA2Z0H/+1LENoATHZlHuPaAEf4tsT8ehAKUyS1KPGJUYf/NzNSS1K1pk8waXzMplM2cz//9N2rtanqSRoMo8pjQ6mgsvhmRmzlxcRUPL7+7b7WRhtfwWaEjTo07P4lIVA/GkuhqLo6XFwGCiHiVAYEolLIF7LBuHYjtJhhMtWLuNE8Vu/uZFjg/PFKo9PpDDjeBHBQImovfrrFR/P7v+W3//9/1/Ly7u9wmg7///n///3eKBe3Qvb3VPuyMmOqQkmk4+wIV//lllskSaIB7gejhTNH6YP/7UsQIAAxJYXe8MoAZeZIyfc0ZJwsPIICh6FPIZGQppEIRZ7qd1Mexf65GOf/8jVrV6XSjMlcknvyUPzumrs7Iq7a0/kZiEWih87MHzMIAAUTFg8KChR+bWB4lAOhs4QSNK7IQ2kUzLi7uWdna2gAFpGCAAYXIZghnGokQYwAbXxADjiTsNBioosmHcnTFnQ0HCDDI43kg2hKCJaudt8KR9Hkvl7+2ftGbsfXACtcHJmIk0Oen/h622Z+uvlR6lFx/gCIP4sypzJlUNsAAxlT4//tSxAWAC4C3e80kUwGFJu42nlACCBECtLHIUOGjPrxYMDgxjkByjY0FZWgcaGmAsMoXgRDGhb40u9VHdzyz/c9Kb7RxuZGiRhc0DNKDIWf7dv9br2fds85zK0ER6//oDoRLb9no8SJIBAAAJKqNCMj6DgL6/NwWIk2V0tKqGoTeMq5hIPOUPB55hZ5SsiFzGqVFKEgMIh0AQ6jCQstStKVtP9JQ6PFUUtStUrbv//6oHg6Ryoa3//9S9DGMIl/0J3M/XYGzRGrgCQAdiRgXB+r/+1LEBIALGOdwuPQAAYCrrjeeIAJJR5ZDHNY0BNFOqwvE+XMqg0PACh8gfJGJjWNNq+EVYk86USbmyShUPRHppxyXV+HlWnZ50xsjJ/ihhcNP6FzX/+ld/GhRxksW/eigPQ8qVqZACKBSRLcscK43AkwtBFEZdJM/0a7kV06ujKEgYUYCDjKWhxIUSBOGKZjDoZaGo7Sl1ZissqlIiJ3p15asiG7/N/+v1/oblKXVm6fvv7KUtWoVV2ixAFkgQ/pZudMqJUAAXauPJgWPkZKjif/7UsQGAAuxW2aknE/JaC+ufMCKWJLvUuWlc9NDm63bv9f//XVDGFApCc0gQGjbHueTP1PQRsrPU/9yNyannSS/QluqNZtQggAKdTEIpz4RjMcDFqHBi1SKQheczPMt4A6AAtrc4I0iEEISM1IAUTCSX0g+LisPNvAgJJaHwt6dqpbP55ZP8KCx5YF18KvP//l9lcOcAFixw7gBAAKMgQhDudzndNX9boiSeibu6//////9TaGN5ntqoY8Nc66JQWX0QRICNF0kACteCOD2RvKA//tSxAgAC/EDc+eE9oGEFq+88w3a4tm/OwmGM66viYVjdGYJWVvUztcHMf7SjEQdEeaHlHZUdHZVr/Ii/SiqOoOioSzR0yho9DBxQ+e/zd9/b1XYakDRwwSAqWo2t///1CxVGalTUyIzInLAWriVCciTE15IhxN5DaIsfSWLvElWnFgdRZ29HLk1gU0ESKSMWtnCUyZKSsRNDtzI8///+dJDa0nDYRGHq2LixErIifHA0Cp07+JpIi0GGo//U+4CgEBCpFil6CJSRAaICUrIhw7/+1LEBYALaP1nrCxLkWQgafT2CaC2ZN2GZa2B3Y+vWVkpYkmoOS1Ifspbo11yd1TurqljUSFq6ly0eu+9mm3loYz0fR6TGY3+Xf1+3X6sgYFCoKzvhqoOsOjgaHBoeRUp6W//56sEBRsAgEWcZXItqiRQXyqHMRTYQYWrZRJd0EotNLNsZC9l+qzpyWcbqWNB5aPR5qjQZLCgwC6s6kdS7Vs0x0DO0qBt+jPI9Nuq+aiUdZBT+jQlg+mxIyAqlUzWyUAAATHBWEby29L6TRdk+f/7UsQJAApwjT2npMjBPQsl9ASMOFIVpwBhNMKuSakMhPbWIyUS3PpqTmo/9iXavW+cbeaNKAQc0luVro4azyVQ0CpEwIhx6VFbWlD1Soovhoi9cl9OsFtOW1xskkkJIxETC6cLgxisFnwaRoUKUWL8Msoa0KbWKCxwXBFhsOA0KJWKA8tS1ElsZOqvksZhg4wLoF/GNmURYagoXXuoycg9P+/G9zmAAFXEQCcoCqgK6wTzC+QnRr6l5nMBDgVdBV0GlgqHTpV0GgaxLKnbJYGj//tSxBWByYxXHSGESwD5BISR/2zMuGg5DolyRU6oGoiBqs6+WfVBrPRKCsGvJYKnsseESzqjriRBr1lBOak5EoH+TqJR7Tmr+ZVK6fGR9q8JmVSCgZj6ZonDdCUaxyoRmTkAmLEEwKkpyrgc5xmS/htdSVtCTEFNRTMuMTAwqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqr/+1LELgPAAAAAAAAAIAAANIAAAASqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqkxBTUUzLjEwMKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqv/7UsSMA8AAAaQAAAAgAAA0gAAABKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqTEFNRTMuMTAwqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq//tSxKGDwAABpAAAACAAADSAAAAEqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqpMQU1FMy4xMDCqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqr/+1LEoYPAAAGkAAAAIAAANIAAAASqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqkxBTUUzLjEwMKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqv/7UsShg8AAAaQAAAAgAAA0gAAABKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq//tSxKGDwAABpAAAACAAADSAAAAEqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqo=",jd="data:audio/mpeg;base64,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VVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVf/7UsRTg8AAAaQAAAAgAAA0gAAABFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVTEFNRTMuMTAwVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV//tSxKGDwAABpAAAACAAADSAAAAEVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVMQU1FMy4xMDBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVX/+1LEoYPAAAGkAAAAIAAANIAAAARVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVUxBTUUzLjEwMFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVf/7UsShg8AAAaQAAAAgAAA0gAAABFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV//tSxKGDwAABpAAAACAAADSAAAAEVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVU=",Zd="data:audio/mpeg;base64,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HKHt5NV1VdQ1hkeFDQ4PhWJRECuEkUu9ssBdFyKesYenjXyVrmY5+Td793R1upgBAYYBCUEqaaoahoBQqZ/MixoKof8yCwjMhJv+BQoHgZIgsRATXs4FaaYlvrImfq5YJv/7UsQZg8h8JvwDBGgACwBAAcAABBkBNArXwEEwyM/0gIWI0BUga1qVTEFNRTMuMTAwVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVTEFNRTMuMTAwVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV//tSxFQDwAAAAAAAACAAADSAAAAEVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVMQU1FMy4xMDBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVX/+1LEoYPAAAGkAAAAIAAANIAAAARVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVUxBTUUzLjEwMFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVf/7UsShg8AAAaQAAAAgAAA0gAAABFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVTEFNRTMuMTAwVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV//tSxKGDwAABpAAAACAAADSAAAAEVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVMQU1FMy4xMDBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVX/+1LEoYPAAAGkAAAAIAAANIAAAARVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVf/7UsShg8AAAaQAAAAgAAA0gAAABFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV",$d="data:audio/mpeg;base64,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VVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVf/7UsShg8AAAaQAAAAgAAA0gAAABFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVTEFNRTMuMTAwVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV//tSxKGDwAABpAAAACAAADSAAAAEVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVX/+1LEoYPAAAGkAAAAIAAANIAAAARVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVQ==",tq=""+new URL("voice_20-CzFgb1jl.mp3",import.meta.url).href,eq=""+new URL("voice_25-CxcGsBO8.mp3",import.meta.url).href,nq="data:audio/mpeg;base64,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",iq=""+new URL("voice_30-Dx-z0GlM.mp3",import.meta.url).href,sq="data:audio/mpeg;base64,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VVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVf/7UsSSA8AAAaQAAAAgAAA0gAAABFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVTEFNRTMuMTAwVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV//tSxKGDwAABpAAAACAAADSAAAAEVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVMQU1FMy4xMDBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVX/+1LEoYPAAAGkAAAAIAAANIAAAARVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVUxBTUUzLjEwMFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVf/7UsShg8AAAaQAAAAgAAA0gAAABFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV//tSxKGDwAABpAAAACAAADSAAAAEVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVU=",rq=""+new URL("voice_5-CXNCgRi0.mp3",import.meta.url).href,Vq="data:audio/mpeg;base64,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VVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVf/7UsRWg8AAAaQAAAAgAAA0gAAABFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVTEFNRTMuMTAwVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV//tSxKGDwAABpAAAACAAADSAAAAEVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVMQU1FMy4xMDBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVX/+1LEoYPAAAGkAAAAIAAANIAAAARVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVUxBTUUzLjEwMFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVf/7UsShg8AAAaQAAAAgAAA0gAAABFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV//tSxKGDwAABpAAAACAAADSAAAAEVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVU=",aq="data:audio/mpeg;base64,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VVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVf/7UsRWg8AAAaQAAAAgAAA0gAAABFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVTEFNRTMuMTAwVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV//tSxKGDwAABpAAAACAAADSAAAAEVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVMQU1FMy4xMDBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVX/+1LEoYPAAAGkAAAAIAAANIAAAARVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVUxBTUUzLjEwMFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVf/7UsShg8AAAaQAAAAgAAA0gAAABFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV//tSxKGDwAABpAAAACAAADSAAAAEVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVU=",oq="data:audio/mpeg;base64,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",lq="data:audio/mpeg;base64,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VVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVf/7UsSFA8AAAaQAAAAgAAA0gAAABFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVTEFNRTMuMTAwVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV//tSxKGDwAABpAAAACAAADSAAAAEVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVMQU1FMy4xMDBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVX/+1LEoYPAAAGkAAAAIAAANIAAAARVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVUxBTUUzLjEwMFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVf/7UsShg8AAAaQAAAAgAAA0gAAABFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV//tSxKGDwAABpAAAACAAADSAAAAEVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVU=",cq="data:audio/mpeg;base64,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qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq//tSxJcDwAABpAAAACAAADSAAAAEqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqpMQU1FMy4xMDCqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqr/+1LEoYPAAAGkAAAAIAAANIAAAASqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqkxBTUUzLjEwMKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqv/7UsShg8AAAaQAAAAgAAA0gAAABKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqTEFNRTMuMTAwqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq//tSxKGDwAABpAAAACAAADSAAAAEqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqr/+1LEoYPAAAGkAAAAIAAANIAAAASqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqg==",hq="data:audio/mpeg;base64,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g2E0mw0KgrJB0edhMSqjnG88dYlpXf4vqt+2//QqkAAJAYEywwl2Bi8yuHmIFNqxlW2ZV1q5kbo5MrRpYFLbMUkqdDsq4KiiwTYBZILEdbksBZwVKkeJQER1u4caoeRLJP/7UsQhggogkxpBBGeBOYGgIGMIAUU6yJsWfhJ71Go0mZUeCCAZFBwCEFCiixUSSVlJBpR/Euyu2Nf/rBMzeUxRY70sRL/2/+7yJJbfqlFf/uczup/+3/1oqm///mKJZblZnsX//b//9j/5MVmKqklyVTfu1ExBTUUzLjEwMFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV//tSxC+DwGACAA6AACAAAAAAAAAEVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVMQU1FMy4xMDBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVX/+1LEjAPAAAGkAAAAIAAANIAAAARVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVUxBTUUzLjEwMFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVf/7UsShg8AAAaQAAAAgAAA0gAAABFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVTEFNRTMuMTAwVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV//tSxKGDwAABpAAAACAAADSAAAAEVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVMQU1FMy4xMDBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVX/+1LEoYPAAAGkAAAAIAAANIAAAARVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVf/7UsShg8AAAaQAAAAgAAA0gAAABFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV",uq="data:audio/mpeg;base64,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wVrkZcjM1TxrgREGs8QePUajUeumkgmV7Pfbbf+mv/uXrZQRZjG4YySEoSipV2R5KHa3XhTAtAABrvKAHEjpB6hjF+OaZiQo6lPSp+pXgo3kiVAy2JU/d0eCgFESiyX6Vf/7UsQWgApklT2gPMGJRQukFCSYCCk5aMA0slr95nTUZO3tTnNutZmFjg7+Hf///DgVl0VDB843EFUKAEJCDJRZGGQzgF2+FkZIydWWbJZHnJxczMkUmrZqUXODpFYOsKvHhAmhYQmiU+SFwlQ0M1aw+0bQSehkROYevaIEpanpSlyai9/bbe23JjbdFQMamjaKJJ4ZBjVZxnDLn5oOFGUvaiYBZFR4NCaVCVTxFE0RAV3LE9jvx7iXqfJFa3clrdrGQq4q71zvW4jJLhAGAvRI//tSxCIAB9hTI0GEawEFAhqI97AAiRksGZFNnQaEj4sK1iooLI/WysVbeKijTQFFRZtQuysVFm/8qFRQSB5QsK9XFRbFhdn4sLs/WKYsLCoZANlMQU1FMy4xMDBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVX/+1LEQAPAOAIAB4AAIAAANIAAAARVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVUxBTUUzLjEwMFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVf/7UsSdA8AAAaQAAAAgAAA0gAAABFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVTEFNRTMuMTAwVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV//tSxKGDwAABpAAAACAAADSAAAAEVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVMQU1FMy4xMDBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVX/+1LEoYPAAAGkAAAAIAAANIAAAARVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVUxBTUUzLjEwMFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVf/7UsShg8AAAaQAAAAgAAA0gAAABFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV//tSxKGDwAABpAAAACAAADSAAAAEVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVU=",fq=""+new URL("bgm-DC_BBmwx.mp3",import.meta.url).href,dq=Object.assign({"./assets/voice/voice_1.mp3":zd,"./assets/voice/voice_10.mp3":Hd,"./assets/voice/voice_11.mp3":kd,"./assets/voice/voice_12.mp3":Wd,"./assets/voice/voice_13.mp3":Yd,"./assets/voice/voice_14.mp3":Qd,"./assets/voice/voice_15.mp3":Xd,"./assets/voice/voice_16.mp3":Kd,"./assets/voice/voice_17.mp3":Jd,"./assets/voice/voice_18.mp3":jd,"./assets/voice/voice_19.mp3":Zd,"./assets/voice/voice_2.mp3":$d,"./assets/voice/voice_20.mp3":tq,"./assets/voice/voice_25.mp3":eq,"./assets/voice/voice_3.mp3":nq,"./assets/voice/voice_30.mp3":iq,"./assets/voice/voice_4.mp3":sq,"./assets/voice/voice_5.mp3":rq,"./assets/voice/voice_6.mp3":Vq,"./assets/voice/voice_7.mp3":aq,"./assets/voice/voice_8.mp3":oq,"./assets/voice/voice_9.mp3":lq,"./assets/voice/voice_combo1.mp3":cq,"./assets/voice/voice_combo2.mp3":hq,"./assets/voice/voice_combo3.mp3":uq});class qq{constructor(){this.ctx=null,this.isMuted=!1,this.bgm=new Audio(fq),this.bgm.loop=!0,this.bgm.volume=.38,this.bgmStarted=!1,this.voiceClips={};for(const[t,e]of Object.entries(dq)){const n=t.match(/voice_(.*)\.mp3$/);if(n){const s=n[1],r=new Audio(e);r.preload="auto",this.voiceClips[s]=r}}}init(){if(!this.ctx){const t=window.AudioContext||window.webkitAudioContext;t&&(this.ctx=new t)}this.ctx&&this.ctx.state==="suspended"&&this.ctx.resume(),this.startBGM()}startBGM(){this.isMuted||this.bgmStarted||this.bgm.play().then(()=>{this.bgmStarted=!0}).catch(()=>{})}pauseBGM(){this.bgm&&this.bgm.pause()}resumeBGM(){this.bgm&&!this.isMuted&&this.bgmStarted&&this.bgm.play().catch(()=>{})}setBGMVolume(t){this.bgm&&(this.bgm.volume=t)}playAnnouncer(t){if(this.isMuted)return;this.init();let e=`${t}`;if(!this.voiceClips[e]){const s=["combo1","combo2","combo3",`${(t-1)%10+1}`];e=s[Math.floor(Math.random()*s.length)]}const n=this.voiceClips[e];n&&(this.setBGMVolume(.2),setTimeout(()=>{this.isGameOver||this.setBGMVolume(.38)},700),n.currentTime=0,n.volume=.95,n.play().catch(()=>{}))}playFlap(){if(this.isMuted||(this.init(),!this.ctx))return;const t=this.ctx.currentTime,e=this.ctx.sampleRate*.15,n=this.ctx.createBuffer(1,e,this.ctx.sampleRate),s=n.getChannelData(0);for(let c=0;c<e;c++)s[c]=(Math.random()*2-1)*.7;const r=this.ctx.createBufferSource();r.buffer=n;const V=this.ctx.createBiquadFilter();V.type="bandpass",V.frequency.setValueAtTime(450,t),V.frequency.exponentialRampToValueAtTime(140,t+.14),V.Q.setValueAtTime(2.5,t);const a=this.ctx.createGain();a.gain.setValueAtTime(.01,t),a.gain.linearRampToValueAtTime(.65,t+.03),a.gain.exponentialRampToValueAtTime(.001,t+.15),r.connect(V),V.connect(a),a.connect(this.ctx.destination),r.start(t),r.stop(t+.15);const o=this.ctx.createOscillator(),l=this.ctx.createGain();o.type="sine",o.frequency.setValueAtTime(120,t),o.frequency.exponentialRampToValueAtTime(45,t+.12),l.gain.setValueAtTime(.4,t),l.gain.exponentialRampToValueAtTime(.001,t+.12),o.connect(l),l.connect(this.ctx.destination),o.start(t),o.stop(t+.12)}playScore(){if(this.isMuted||(this.init(),!this.ctx))return;const t=this.ctx.currentTime,e=(n,s,r)=>{const V=this.ctx.createOscillator(),a=this.ctx.createGain();V.type="triangle",V.frequency.setValueAtTime(n,s),a.gain.setValueAtTime(.01,s),a.gain.linearRampToValueAtTime(.35,s+.02),a.gain.exponentialRampToValueAtTime(.001,s+r),V.connect(a),a.connect(this.ctx.destination),V.start(s),V.stop(s+r)};e(784,t,.22),e(1046.5,t+.08,.35)}playCrash(){if(this.isMuted||(this.init(),!this.ctx))return;const t=this.ctx.currentTime,e=this.ctx.createOscillator(),n=this.ctx.createGain();e.type="sawtooth",e.frequency.setValueAtTime(260,t),e.frequency.exponentialRampToValueAtTime(50,t+.3),n.gain.setValueAtTime(.55,t),n.gain.exponentialRampToValueAtTime(.001,t+.35),e.connect(n),n.connect(this.ctx.destination),e.start(t),e.stop(t+.35);const s=this.ctx.sampleRate*.25,r=this.ctx.createBuffer(1,s,this.ctx.sampleRate),V=r.getChannelData(0);for(let c=0;c<s;c++)V[c]=(Math.random()*2-1)*.8;const a=this.ctx.createBufferSource();a.buffer=r;const o=this.ctx.createBiquadFilter();o.type="lowpass",o.frequency.setValueAtTime(800,t),o.frequency.exponentialRampToValueAtTime(150,t+.25);const l=this.ctx.createGain();l.gain.setValueAtTime(.45,t),l.gain.exponentialRampToValueAtTime(.001,t+.25),a.connect(o),o.connect(l),l.connect(this.ctx.destination),a.start(t),a.stop(t+.25)}}const Se=new qq;class pq{constructor(t,e,n){this.camera=t,this.controller0=e,this.controller1=n,this.beakMesh=null,this.leftWing=null,this.rightWing=null,this.camWingLeft=null,this.camWingRight=null,this.leftFlapAnim=0,this.rightFlapAnim=0,this.leftFlex=0,this.rightFlex=0,this.createBeak(),this.createWings()}createBeak(){const t=new se,e=new Ye(.088,.32,4);e.rotateX(Math.PI/2),e.rotateY(Math.PI/4);const n=new ie({color:15965202,roughness:.28,metalness:.05,flatShading:!0}),s=new Tt(e,n);s.scale.set(1.15,.75,1.3),s.castShadow=!0,t.add(s);const r=new ze({color:9317376}),V=new gn(.007,6,6);V.scale(.8,1.4,1.6);const a=new Tt(V,r);a.position.set(-.024,.032,-.06),t.add(a);const o=new Tt(V,r);o.position.set(.024,.032,-.06),t.add(o),t.position.set(0,-.15,-.32),t.rotation.x=An.degToRad(-10),this.camera.add(t),this.beakMesh=t}createWingMesh(t){const e=new se,n=new se;e.add(n);const s=new ie({color:16777215,roughness:.25,metalness:.1,emissive:14678523,emissiveIntensity:.25,side:oe}),r=new ie({color:8312543,roughness:.3,metalness:.15,emissive:2270899,emissiveIntensity:.35,side:oe}),V=new ie({color:16777215,roughness:.2,emissive:16775781,emissiveIntensity:.35,side:oe}),a=5;for(let d=0;d<a;d++){const p=.36-d*.04,m=.09-d*.008,q=new Ye(m,p,4);q.rotateZ(t?Math.PI/2:-Math.PI/2),q.scale(1.2,.28,1);const u=d===0?r:d===1?s:d===2?V:s,E=new Tt(q,u),S=(t?1:-1)*(.12+d*.24);E.position.set((t?-1:1)*(.1+d*.07),-d*.024,-d*.038),E.rotation.z=S,E.rotation.y=(t?-1:1)*.15,E.castShadow=!0,n.add(E)}const o=new gn(.055,10,10);o.scale(1.3,.85,1.4);const l=new Tt(o,s);n.add(l);const c=new Ms(.26,.028,8,24,Math.PI*.95),h=new ze({color:2282478,transparent:!0,opacity:.45,blending:Pi,side:oe,depthWrite:!1}),f=new Tt(c,h);return f.rotation.x=Math.PI/2,f.rotation.y=t?.3:-.3,f.position.set(t?-.16:.16,-.05,.05),n.add(f),e.userData={wingPivot:n,trailMesh:f},e}createWings(){this.leftWing=this.createWingMesh(!0),this.rightWing=this.createWingMesh(!1),this.leftWing.position.set(-.06,.02,.04),this.rightWing.position.set(.06,.02,.04),this.controller0&&this.controller0.add(this.leftWing),this.controller1&&this.controller1.add(this.rightWing),this.camWingLeft=this.createWingMesh(!0),this.camWingRight=this.createWingMesh(!1),this.camWingLeft.position.set(-.38,-.14,-.46),this.camWingLeft.scale.set(1.35,1.35,1.35),this.camWingRight.position.set(.38,-.14,-.46),this.camWingRight.scale.set(1.35,1.35,1.35),this.camera.add(this.camWingLeft),this.camera.add(this.camWingRight)}triggerFlapVisual(t){(t==="left"||t==="both")&&(this.leftFlapAnim=1),(t==="right"||t==="both")&&(this.rightFlapAnim=1)}update(t,e,n=!1,s=[0,0]){this.camWingLeft&&(this.camWingLeft.visible=!n),this.camWingRight&&(this.camWingRight.visible=!n),this.beakMesh&&(this.beakMesh.rotation.x=An.degToRad(-10)+e*.22);const r=An.clamp(-s[0]*.22,-.45,.55),V=An.clamp(-s[1]*.22,-.45,.55);this.leftFlex=An.lerp(this.leftFlex,r,t*12),this.rightFlex=An.lerp(this.rightFlex,V,t*12),this.leftFlapAnim>0&&(this.leftFlapAnim=Math.max(0,this.leftFlapAnim-t*4.2)),this.rightFlapAnim>0&&(this.rightFlapAnim=Math.max(0,this.rightFlapAnim-t*4.2));const a=Math.sin(this.leftFlapAnim*Math.PI)*.55,o=Math.sin(this.rightFlapAnim*Math.PI)*.55;if(this.leftWing&&this.leftWing.userData.wingPivot){const l=this.leftWing.userData.wingPivot;l.rotation.z=(this.leftFlex+a)*.6,l.rotation.x=-(this.leftFlex+a)*.4,this.leftWing.userData.trailMesh&&(this.leftWing.userData.trailMesh.material.opacity=Math.max(.2,Math.sin(this.leftFlapAnim*Math.PI)*.9))}if(this.rightWing&&this.rightWing.userData.wingPivot){const l=this.rightWing.userData.wingPivot;l.rotation.z=-(this.rightFlex+o)*.6,l.rotation.x=-(this.rightFlex+o)*.4,this.rightWing.userData.trailMesh&&(this.rightWing.userData.trailMesh.material.opacity=Math.max(.2,Math.sin(this.rightFlapAnim*Math.PI)*.9))}if(this.camWingLeft&&this.camWingLeft.userData.wingPivot){const l=this.camWingLeft.userData.wingPivot;l.rotation.z=a*.75,l.rotation.x=-a*.5}if(this.camWingRight&&this.camWingRight.userData.wingPivot){const l=this.camWingRight.userData.wingPivot;l.rotation.z=-o*.75,l.rotation.x=-o*.5}}}class Aq{constructor(t){this.scene=t,this.pipes=[],this.pipePoolSize=10,this.spacingZ=20,this.gapHeight=3.9,this.pipeRadius=1.15,this.lipRadius=1.42,this.lipHeight=.6,this.pipeMat=new ie({color:5034295,roughness:.28,metalness:.08}),this.lipMat=new ie({color:4504882,roughness:.25,metalness:.1}),this.lipTrimMat=new ie({color:2600544,roughness:.3}),this.vineMat=new ie({color:1804854,roughness:.5,metalness:.05}),this.leafMat=new ie({color:3069299,roughness:.35,metalness:.05,side:oe}),this.ringMat=new ie({color:16753922,roughness:.18,metalness:.8,emissive:16753922,emissiveIntensity:.4}),this.starMat=new ie({color:16773632,roughness:.15,metalness:.6,emissive:16773632,emissiveIntensity:.6}),this.initPool()}createVines(t,e){const n=new se,s=[],r=2.8,V=36,a=this.pipeRadius+.035;for(let f=0;f<=V;f++){const d=f/V,p=d*r*Math.PI*2,m=t?d*12+.6:-d*12-.6,q=Math.cos(p)*a,u=Math.sin(p)*a;s.push(new R(q,m,u))}const o=new Za(s),l=new iV(o,32,.045,6,!1),c=new Tt(l,this.vineMat);c.castShadow=!0,n.add(c);const h=new Ye(.16,.42,3);h.scale(1.4,.25,1);for(let f=2;f<s.length-2;f+=3){const d=s[f],p=new Tt(h,this.leafMat);p.position.copy(d),p.lookAt(d.x*2,d.y+.15,d.z*2),p.rotation.z+=(Math.random()-.5)*.8,p.castShadow=!0,n.add(p)}return n}createSinglePipe(t,e){const n=new se,s=new xn(this.pipeRadius,this.pipeRadius,e,28),r=new Tt(s,this.pipeMat);r.castShadow=!0,r.receiveShadow=!0;const V=new xn(this.lipRadius,this.lipRadius,this.lipHeight,28),a=new Tt(V,this.lipMat);a.castShadow=!0,a.receiveShadow=!0;const o=new xn(this.pipeRadius*.96,this.pipeRadius*.96,.05,24),l=new Tt(o,this.lipTrimMat);t?(r.position.y=e/2,a.position.y=this.lipHeight/2,l.position.y=.02):(r.position.y=-e/2,a.position.y=-this.lipHeight/2,l.position.y=-.02),n.add(r),n.add(a),n.add(l);const c=this.createVines(t,e);return n.add(c),n}createRing(){const t=new se,e=new Ms(.85,.09,14,32),n=new Tt(e,this.ringMat);n.castShadow=!0,t.add(n);const s=new se;for(let r=0;r<2;r++){const V=new Ye(.32,.65,4);V.scale(1,1,.3);const a=new Tt(V,this.starMat),o=new Tt(V,this.starMat);o.rotation.z=Math.PI;const l=new se;l.add(a),l.add(o),l.rotation.z=r*Math.PI/2,s.add(l)}return t.add(s),t}initPool(){for(let t=0;t<this.pipePoolSize;t++){const e=new se,n=this.createSinglePipe(!0,25),s=this.createSinglePipe(!1,25),r=this.createRing();e.add(n),e.add(s),e.add(r),this.scene.add(e);const V={group:e,topPipe:n,bottomPipe:s,ring:r,gapY:5,scored:!1,ringCollected:!1};this.pipes.push(V)}}reset(t=-18){let e=t;for(let n=0;n<this.pipes.length;n++){const s=this.pipes[n],r=3.6+Math.random()*4.4;this.positionPipePair(s,e,r),e-=this.spacingZ}}positionPipePair(t,e,n){t.gapY=n,t.scored=!1,t.ringCollected=!1,t.group.position.set(0,0,e);const s=n-this.gapHeight/2;t.bottomPipe.position.y=s;const r=n+this.gapHeight/2;t.topPipe.position.y=r,t.ring.position.set(0,n,0),t.ring.visible=!0,t.ring.scale.set(1,1,1)}update(t,e,n){let s=0;for(let r=0;r<this.pipes.length;r++)this.pipes[r].group.position.z<s&&(s=this.pipes[r].group.position.z);for(let r=0;r<this.pipes.length;r++){const V=this.pipes[r],a=V.group.position.z;if(V.ring.visible&&(V.ring.rotation.y+=t*2.8,V.ring.rotation.z+=t*1.4),!V.scored&&e<=a&&(V.scored=!0,V.ringCollected=!0,V.ring.visible=!1,n&&n()),a>e+12){const o=s-this.spacingZ,l=3.6+Math.random()*4.4;this.positionPipePair(V,o,l),s=o}}}checkCollision(t,e=.38){if(t.y<=e+.1)return{hit:!0,cause:"ground"};if(t.y>=16)return{hit:!0,cause:"ceiling"};for(let n=0;n<this.pipes.length;n++){const s=this.pipes[n],r=s.group.position.z,V=Math.abs(t.z-r),a=this.pipeRadius+e;if(V<a){const o=Math.abs(t.x);if(o*o+V*V<a*a){const c=s.gapY-this.gapHeight/2,h=s.gapY+this.gapHeight/2;if(t.y-e<c)return{hit:!0,cause:"pipe_bottom"};if(t.y+e>h)return{hit:!0,cause:"pipe_top"}}}}return{hit:!1}}}class mq{constructor(t){this.scene=t,this.clouds=[],this.islands=[],this.windmills=[],this.bgBirds=[],this.leafParticles=null,this.sparkleParticles=null,this.sunRays=null,this.createSkyDome(),this.createSunAndLighting(),this.createGround(),this.createFloatingIslands(),this.createSmilingClouds(),this.createBackgroundBirds(),this.createSwirlingParticles()}createSkyDome(){const t=document.createElement("canvas");t.width=16,t.height=256;const e=t.getContext("2d"),n=e.createLinearGradient(0,0,0,256);n.addColorStop(0,"#1da2d8"),n.addColorStop(.35,"#56ccf2"),n.addColorStop(.65,"#fbc531"),n.addColorStop(.88,"#fa8231"),n.addColorStop(1,"#eb3b5a"),e.fillStyle=n,e.fillRect(0,0,16,256);const s=new ii(t);s.magFilter=Ee,s.minFilter=Ee;const r=new gn(220,32,24),V=new ze({map:s,side:_e,fog:!1});this.skyDome=new Tt(r,V),this.scene.add(this.skyDome),this.scene.fog=new tV(16500017,.0075)}createSunAndLighting(){const t=new Bd(16775910,5034295,.95);this.scene.add(t);const e=new Od(16773573,1.4);e.position.set(10,28,-40),e.castShadow=!0,e.shadow.mapSize.width=1024,e.shadow.mapSize.height=1024,e.shadow.camera.near=.5,e.shadow.camera.far=120,e.shadow.camera.left=-30,e.shadow.camera.right=30,e.shadow.camera.top=30,e.shadow.camera.bottom=-30,this.scene.add(e);const n=new nV(16,32),s=new ze({color:16774328,transparent:!0,opacity:.85,side:oe});this.sunMesh=new Tt(n,s),this.sunMesh.position.set(0,16,-170),this.scene.add(this.sunMesh);const r=new se,V=new Qe(12,140),a=new ze({color:16775904,transparent:!0,opacity:.12,side:oe,blending:Pi,depthWrite:!1});for(let o=0;o<8;o++){const l=new Tt(V,a);l.rotation.z=o*Math.PI/8,r.add(l)}r.position.set(0,16,-168),this.scene.add(r),this.sunRays=r}createGround(){const t=new se,e=document.createElement("canvas");e.width=128,e.height=128;const n=e.getContext("2d");n.fillStyle="#78e08f",n.fillRect(0,0,128,128),n.fillStyle="#38ada9",n.fillRect(0,0,64,64),n.fillRect(64,64,64,64),n.strokeStyle="#fad390",n.lineWidth=6,n.strokeRect(0,0,128,128);const s=new ii(e);s.wrapS=Ui,s.wrapT=Ui,s.repeat.set(10,120);const r=new Qe(40,360);r.rotateX(-Math.PI/2);const V=new ie({map:s,roughness:.75,metalness:.05});this.groundMesh=new Tt(r,V),this.groundMesh.position.set(0,0,-100),this.groundMesh.receiveShadow=!0,t.add(this.groundMesh);const a=new On(40,12,360),o=new ie({color:15044134,roughness:.9}),l=new Tt(a,o);l.position.set(0,-6,-100),t.add(l),this.scene.add(t),this.groundGroup=t}createFloatingIslands(){const t=new ie({color:7921807,roughness:.6}),e=new ie({color:11998528,roughness:.9}),n=new ie({color:15044134,roughness:.7}),s=new ie({color:16777215,roughness:.3,side:oe}),r=(V,a,o,l=1)=>{const c=new se,h=new xn(3.5*l,3.8*l,1.2*l,8),f=new Tt(h,t);f.castShadow=!0,c.add(f);const d=new Ye(3.8*l,5.5*l,7);d.rotateX(Math.PI);const p=new Tt(d,e);p.position.y=-2.8*l,p.castShadow=!0,c.add(p);const m=new se,q=new xn(.7*l,.9*l,2.5*l,6),u=new Tt(q,n);u.position.y=1.8*l,m.add(u);const E=new Ye(1*l,1.2*l,6),S=new ie({color:11998528}),v=new Tt(E,S);v.position.y=3.6*l,m.add(v);const L=new se;L.position.set(0,2.7*l,.8*l);for(let b=0;b<4;b++){const x=new On(.25*l,2.2*l,.05*l),_=new Tt(x,s);_.position.y=1.1*l;const w=new se;w.rotation.z=b*Math.PI/2,w.add(_),L.add(w)}m.add(L),c.add(m);const y=new gn(.6*l,6,6),T=new Tt(y,t);T.position.set(1.8*l,.8*l,1*l),c.add(T),c.position.set(V,a,o),this.scene.add(c),this.islands.push({group:c,bladeHub:L,initialZ:o,speed:.5})};r(-26,11,-35,1.1),r(28,14,-65,1.3),r(-30,16,-110,1.4),r(32,9,-145,1),r(-25,12,-180,1.2),r(27,15,-220,1.3)}createSmilingFaceTexture(){const t=document.createElement("canvas");t.width=128,t.height=128;const e=t.getContext("2d");return e.fillStyle="#2c3e50",e.beginPath(),e.arc(38,52,9,0,Math.PI*2),e.arc(90,52,9,0,Math.PI*2),e.fill(),e.fillStyle="#ffffff",e.beginPath(),e.arc(41,49,3.5,0,Math.PI*2),e.arc(93,49,3.5,0,Math.PI*2),e.fill(),e.fillStyle="rgba(255, 107, 129, 0.55)",e.beginPath(),e.ellipse(30,68,11,7,0,0,Math.PI*2),e.ellipse(98,68,11,7,0,0,Math.PI*2),e.fill(),e.strokeStyle="#2c3e50",e.lineWidth=5,e.lineCap="round",e.beginPath(),e.arc(64,64,18,.15*Math.PI,.85*Math.PI,!1),e.stroke(),new ii(t)}createSmilingClouds(){const t=new ie({color:16777215,roughness:.25,metalness:0}),e=this.createSmilingFaceTexture(),n=new ze({map:e,transparent:!0,side:oe});for(let s=0;s<20;s++){const r=new se,V=new gn(1.2,8,8);V.scale(1.3,.85,1.1);const a=4+Math.floor(Math.random()*3);for(let h=0;h<a;h++){const f=new Tt(V,t);f.position.set((h-a/2)*1.5,(Math.random()-.5)*.4,(Math.random()-.5)*.5);const d=1+Math.random()*.7;f.scale.set(d,d*.85,d),r.add(f)}if(s%3===0){const h=new Tt(new Qe(1.6,1.6),n);h.position.set(0,0,1.25),r.add(h)}const o=(Math.random()-.5)*75,l=8.5+Math.random()*15,c=-Math.random()*220;r.position.set(o,l,c),r.userData={speed:.6+Math.random()*.9},this.scene.add(r),this.clouds.push(r)}}createBackgroundBirds(){const t=[5546239,16752451,10837738];for(let e=0;e<4;e++){const n=new se,s=t[e%t.length],r=new ie({color:s,roughness:.4}),V=new ie({color:16753922}),a=new ie({color:16777215,side:oe}),o=new Tt(new gn(.35,8,8),r);o.scale.set(1.1,.9,1.3),n.add(o);const l=new Tt(new Ye(.1,.22,4),V);l.rotation.x=Math.PI/2,l.position.set(0,0,.45),n.add(l);const c=new Ye(.18,.45,3);c.rotateZ(Math.PI/2);const h=new Tt(c,a);h.position.set(-.35,.05,0);const f=new Tt(c,a);f.position.set(.35,.05,0),f.rotation.z=Math.PI,n.add(h),n.add(f),n.position.set((e%2===0?-1:1)*(14+Math.random()*18),10+Math.random()*8,-40-e*35),this.scene.add(n),this.bgBirds.push({group:n,leftWing:h,rightWing:f,phase:e*1.5,speed:2.2})}}createSwirlingParticles(){const e=new xe,n=new Float32Array(45*3),s=new Float32Array(45);for(let q=0;q<45;q++)n[q*3+0]=(Math.random()-.5)*14,n[q*3+1]=1.5+Math.random()*11,n[q*3+2]=-Math.random()*45,s[q]=.22+Math.random()*.15;e.setAttribute("position",new Ie(n,3));const r=document.createElement("canvas");r.width=64,r.height=64;const V=r.getContext("2d");V.fillStyle="#2ed573",V.beginPath(),V.ellipse(32,32,24,12,Math.PI/4,0,Math.PI*2),V.fill(),V.strokeStyle="#26af5f",V.lineWidth=3,V.stroke();const a=new ii(r),o=new zr({map:a,size:.35,transparent:!0,opacity:.85,depthWrite:!1});this.leafParticles=new ha(e,o),this.scene.add(this.leafParticles);const l=35,c=new xe,h=new Float32Array(l*3);for(let q=0;q<l;q++)h[q*3+0]=(Math.random()-.5)*12,h[q*3+1]=2+Math.random()*10,h[q*3+2]=-Math.random()*35;c.setAttribute("position",new Ie(h,3));const f=document.createElement("canvas");f.width=64,f.height=64;const d=f.getContext("2d");d.fillStyle="#ffa502",d.beginPath(),d.arc(32,32,16,0,Math.PI*2),d.fill(),d.fillStyle="#ffffff",d.beginPath(),d.arc(32,32,8,0,Math.PI*2),d.fill();const p=new ii(f),m=new zr({map:p,size:.28,transparent:!0,opacity:.9,blending:Pi,depthWrite:!1});this.sparkleParticles=new ha(c,m),this.scene.add(this.sparkleParticles)}update(t,e){this.skyDome&&(this.skyDome.position.z=e-30,this.skyDome.position.x=0),this.sunRays&&(this.sunRays.rotation.z+=t*.08,this.sunRays.position.z=e-170,this.sunMesh&&(this.sunMesh.position.z=e-172)),this.groundGroup&&(this.groundGroup.position.z=Math.floor(e/10)*10);for(let n=0;n<this.islands.length;n++){const s=this.islands[n];s.bladeHub&&(s.bladeHub.rotation.z+=t*3.5),s.group.position.z>e+25&&(s.group.position.z=e-200-Math.random()*40)}for(let n=0;n<this.clouds.length;n++){const s=this.clouds[n];s.position.z+=s.userData.speed*t,s.position.z>e+20&&(s.position.z=e-180-Math.random()*40,s.position.x=(Math.random()-.5)*75)}for(let n=0;n<this.bgBirds.length;n++){const s=this.bgBirds[n];s.phase+=t*9;const r=Math.sin(s.phase)*.65;s.leftWing.rotation.z=r,s.rightWing.rotation.z=Math.PI-r,s.group.position.z-=s.speed*t,s.group.position.y+=Math.sin(s.phase*.4)*.012,s.group.position.z>e+15&&(s.group.position.z=e-150-Math.random()*30)}if(this.leafParticles){const n=this.leafParticles.geometry.attributes.position.array;for(let s=0;s<n.length/3;s++){const r=s*3;n[r+0]+=Math.sin(e*.1+s)*.02,n[r+1]-=t*.35,n[r+2]>e+5&&(n[r+0]=(Math.random()-.5)*14,n[r+1]=2+Math.random()*11,n[r+2]=e-35-Math.random()*15)}this.leafParticles.geometry.attributes.position.needsUpdate=!0}if(this.sparkleParticles){const n=this.sparkleParticles.geometry.attributes.position.array;for(let s=0;s<n.length/3;s++){const r=s*3;n[r+2]>e+5&&(n[r+0]=(Math.random()-.5)*12,n[r+1]=2+Math.random()*10,n[r+2]=e-30-Math.random()*10)}this.sparkleParticles.geometry.attributes.position.needsUpdate=!0}}}class gq{constructor(t,e){this.scene=t,this.camera=e,this.scoreBillboard=null,this.readyBillboard=null,this.gameOverBillboard=null,this.currentScore=0,this.bestScore=0,this.createScoreDisplay(),this.createReadyDisplay(),this.createGameOverDisplay()}createCanvasTexture(t,e=512,n=256){const s=document.createElement("canvas");s.width=e,s.height=n;const r=s.getContext("2d");t(r,e,n);const V=new ii(s);return V.minFilter=Ee,V.magFilter=Ee,{texture:V,canvas:s,ctx:r}}createScoreDisplay(){const{texture:t,canvas:e,ctx:n}=this.createCanvasTexture((V,a,o)=>{this.drawScoreCanvas(V,a,o,0)},384,160);this.scoreCanvas=e,this.scoreCtx=n,this.scoreTexture=t;const s=new ze({map:t,transparent:!0,depthTest:!1,depthWrite:!1}),r=new Qe(1.4,.6);this.scoreMesh=new Tt(r,s),this.scoreMesh.renderOrder=999,this.scoreMesh.position.set(0,1.35,-3.2),this.camera.add(this.scoreMesh)}drawScoreCanvas(t,e,n,s){t.clearRect(0,0,e,n),t.fillStyle="rgba(10, 15, 30, 0.65)",t.beginPath(),t.roundRect(16,16,e-32,n-32,28),t.fill(),t.strokeStyle="#ffa502",t.lineWidth=5,t.stroke(),t.fillStyle="#0984e3",t.beginPath(),t.roundRect(32,28,60,32,10),t.fill(),t.strokeStyle="#ffffff",t.lineWidth=2,t.stroke(),t.font='bold 20px "Arial Black", Impact, sans-serif',t.fillStyle="#ffffff",t.textAlign="center",t.textBaseline="middle",t.fillText("VR",62,44);const r=s<10?`0${s}`:`${s}`;t.font='bold 72px "Arial Black", Impact, sans-serif',t.textAlign="center",t.textBaseline="middle",t.fillStyle="#2d3436",t.fillText(r,e/2+35,n/2+5);const V=t.createLinearGradient(0,20,0,n-20);V.addColorStop(0,"#ffeaa7"),V.addColorStop(.5,"#fbc531"),V.addColorStop(1,"#e17055"),t.fillStyle=V,t.fillText(r,e/2+35,n/2+2),t.strokeStyle="#ffffff",t.lineWidth=2.5,t.strokeText(r,e/2+35,n/2+2)}updateScore(t){this.currentScore=t,t>this.bestScore&&(this.bestScore=t),this.drawScoreCanvas(this.scoreCtx,this.scoreCanvas.width,this.scoreCanvas.height,t),this.scoreTexture.needsUpdate=!0}createReadyDisplay(){const{texture:t,canvas:e,ctx:n}=this.createCanvasTexture((V,a,o)=>{this.drawReadyCanvas(V,a,o)},768,480),s=new ze({map:t,transparent:!0,side:oe}),r=new Qe(3.6,2.25);this.readyMesh=new Tt(r,s),this.readyMesh.position.set(0,5,-3.8),this.scene.add(this.readyMesh)}drawReadyCanvas(t,e,n){t.clearRect(0,0,e,n),t.fillStyle="rgba(255, 255, 255, 0.92)",t.beginPath(),t.roundRect(24,20,e-48,n-40,40),t.fill(),t.strokeStyle="#ff793f",t.lineWidth=7,t.stroke(),t.strokeStyle="#00d2d3",t.lineWidth=3,t.strokeRect(34,30,e-68,n-60),t.fillStyle="#0984e3",t.beginPath(),t.roundRect(e/2-45,38,90,42,14),t.fill(),t.strokeStyle="#ffffff",t.lineWidth=3,t.stroke(),t.font='bold 26px "Arial Black", Impact, sans-serif',t.fillStyle="#ffffff",t.textAlign="center",t.fillText("VR",e/2,68),t.font='bold 28px "Arial Black", Impact, sans-serif',t.fillStyle="#2f3542",t.fillText("GET READY TO FLAP!",e/2,118);const s=(r,V,a,o,l,c)=>{t.font=`bold ${o}px "Arial Black", Impact, sans-serif`,t.textAlign="center",t.strokeStyle="#1e3799",t.lineWidth=14,t.lineJoin="round",t.strokeText(r,V,a+6),t.strokeStyle="#ffffff",t.lineWidth=9,t.strokeText(r,V,a);const h=t.createLinearGradient(0,a-o,0,a+10);h.addColorStop(0,l),h.addColorStop(1,c),t.fillStyle=h,t.fillText(r,V,a)};s("Floppy",e/2,215,105,"#48dbfb","#0984e3"),t.fillStyle="#70a1ff",t.beginPath(),t.ellipse(e/2-165,290,38,16,-.3,0,Math.PI*2),t.fill(),t.strokeStyle="#ffffff",t.lineWidth=3,t.stroke(),t.beginPath(),t.ellipse(e/2+165,290,38,16,.3,0,Math.PI*2),t.fill(),t.strokeStyle="#ffffff",t.lineWidth=3,t.stroke(),s("flight",e/2,310,95,"#fed330","#eb3b5a"),t.fillStyle="#2ed573",t.beginPath(),t.roundRect(e/2-240,365,480,54,27),t.fill(),t.strokeStyle="#ffffff",t.lineWidth=4,t.stroke(),t.font="bold 24px Arial, sans-serif",t.fillStyle="#ffffff",t.fillText("FLAP CONTROLLERS DOWN TO FLY!",e/2,400),t.font="16px Arial, sans-serif",t.fillStyle="#57606f",t.fillText("(or pull triggers / press Space)",e/2,442)}createGameOverDisplay(){const{texture:t,canvas:e,ctx:n}=this.createCanvasTexture((V,a,o)=>{this.drawGameOverCanvas(V,a,o,0,0)},640,380);this.gameOverCanvas=e,this.gameOverCtx=n,this.gameOverTexture=t;const s=new ze({map:t,transparent:!0,side:oe}),r=new Qe(3,1.78);this.gameOverMesh=new Tt(r,s),this.gameOverMesh.visible=!1,this.scene.add(this.gameOverMesh)}drawGameOverCanvas(t,e,n,s,r){t.clearRect(0,0,e,n),t.fillStyle="rgba(255, 255, 255, 0.95)",t.beginPath(),t.roundRect(20,20,e-40,n-40,36),t.fill(),t.strokeStyle="#eb4d4b",t.lineWidth=8,t.stroke(),t.font='bold 64px "Arial Black", Impact, sans-serif',t.textAlign="center",t.strokeStyle="#b71540",t.lineWidth=10,t.strokeText("💥 SPLAT! 💥",e/2,100),t.fillStyle="#ff793f",t.fillText("💥 SPLAT! 💥",e/2,98),t.fillStyle="rgba(47, 53, 66, 0.08)",t.beginPath(),t.roundRect(40,130,e-80,110,20),t.fill(),t.font='bold 36px "Arial Black", sans-serif',t.fillStyle="#2f3542",t.fillText(`SCORE: ${s}`,e/2,175),t.font="bold 28px Arial, sans-serif",t.fillStyle="#ff9f43",t.fillText(`BEST SCORE: ${r}`,e/2,220),t.fillStyle="#0984e3",t.beginPath(),t.roundRect(e/2-180,265,360,56,28),t.fill(),t.strokeStyle="#ffffff",t.lineWidth=4,t.stroke(),t.font='bold 26px "Arial Black", Impact, sans-serif',t.fillStyle="#ffffff",t.fillText("FLAP TO RETRY",e/2,302)}showReady(t){this.readyMesh.visible=!0,this.readyMesh.position.set(t.x,t.y,t.z-3.8),this.gameOverMesh.visible=!1}hideReady(){this.readyMesh.visible=!1}showGameOver(t){this.drawGameOverCanvas(this.gameOverCtx,this.gameOverCanvas.width,this.gameOverCanvas.height,this.currentScore,this.bestScore),this.gameOverTexture.needsUpdate=!0,this.gameOverMesh.position.set(t.x,t.y,t.z-3.2),this.gameOverMesh.visible=!0}hideGameOver(){this.gameOverMesh.visible=!1}}class _q{constructor(){this.state="READY",this.score=0,this.forwardSpeed=7.5,this.baseForwardSpeed=7.5,this.gravity=-11.5,this.flapImpulse=4.8,this.velocityY=0,this.pitchAngle=0,this.flapCooldown=0,this.gameOverDelay=0,this.clock=new Gd,this.prevControllerY=[0,0],this.controllerVelocityY=[0,0],this.initScene(),this.initGameWorld(),this.setupInputs(),this.setupResize(),this.renderer.setAnimationLoop((t,e)=>this.renderLoop(t,e))}initScene(){this.container=document.getElementById("app"),this.scene=new vd,this.camera=new Ue(75,window.innerWidth/window.innerHeight,.1,350),this.playerRig=new se,this.playerRig.position.set(0,5,0),this.playerRig.add(this.camera),this.scene.add(this.playerRig),this.renderer=new _d({antialias:!0,powerPreference:"high-performance"}),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.xr.enabled=!0,this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=ma,this.container.appendChild(this.renderer.domElement);const t=di.createButton(this.renderer);t.id="vr-button",t.addEventListener("click",()=>Se.init()),document.body.appendChild(t),this.controller0=this.renderer.xr.getController(0),this.controller1=this.renderer.xr.getController(1),this.playerRig.add(this.controller0),this.playerRig.add(this.controller1);const e=()=>{Se.init(),this.handleFlapInput("both")};this.controller0.addEventListener("selectstart",e),this.controller1.addEventListener("selectstart",e),this.controller0.addEventListener("squeezestart",e),this.controller1.addEventListener("squeezestart",e)}initGameWorld(){this.avatar=new pq(this.camera,this.controller0,this.controller1),this.pipeManager=new Aq(this.scene),this.environment=new mq(this.scene),this.ui=new gq(this.scene,this.camera),this.resetToReady()}setupInputs(){window.addEventListener("keydown",t=>{(t.code==="Space"||t.code==="KeyW"||t.code==="ArrowUp")&&(t.preventDefault(),Se.init(),this.handleFlapInput("both"))}),window.addEventListener("pointerdown",t=>{Se.init(),!(t.target&&t.target.id==="vr-button")&&this.handleFlapInput("both")})}setupResize(){window.addEventListener("resize",()=>{this.camera.aspect=window.innerWidth/window.innerHeight,this.camera.updateProjectionMatrix(),this.renderer.setSize(window.innerWidth,window.innerHeight)})}resetToReady(){this.state="READY",this.score=0,this.velocityY=0,this.pitchAngle=0,this.forwardSpeed=this.baseForwardSpeed,this.flapCooldown=0,Se.setBGMVolume(.42),this.playerRig.position.set(0,5,0),this.pipeManager.reset(-18),this.ui.updateScore(0),this.ui.showReady(this.playerRig.position),this.ui.hideGameOver()}startGame(){this.state="PLAYING",Se.startBGM(),this.ui.hideReady()}triggerHaptic(t=.6,e=80){const n=this.renderer.xr.getSession();if(n)for(const s of n.inputSources)s.gamepad&&s.gamepad.hapticActuators&&s.gamepad.hapticActuators[0]&&s.gamepad.hapticActuators[0].pulse(t,e)}handleFlapInput(t="both"){if(Se.init(),this.state==="READY"){Se.playFlap(),this.triggerHaptic(.65,80),this.avatar.triggerFlapVisual(t),this.velocityY=this.flapImpulse,this.startGame();return}if(this.state==="PLAYING"){if(this.flapCooldown>0)return;this.flapCooldown=.18,Se.playFlap(),this.triggerHaptic(.7,85),this.avatar.triggerFlapVisual(t),this.velocityY=Math.max(this.velocityY*.25,0)+this.flapImpulse;return}this.state==="GAMEOVER"&&this.gameOverDelay<=0&&(Se.playFlap(),this.triggerHaptic(.6,70),this.resetToReady())}handleGameOver(){this.state="GAMEOVER",this.gameOverDelay=.8,Se.playCrash(),Se.setBGMVolume(.22),this.triggerHaptic(1,250),this.ui.showGameOver(this.playerRig.position)}detectControllerFlaps(t){if(!this.renderer.xr.isPresenting)return;const e=[this.controller0,this.controller1];let n=!1,s=!1;for(let r=0;r<2;r++){const V=e[r];if(!V.visible)continue;const a=V.position.y,o=(a-this.prevControllerY[r])/Math.max(t,.001);this.controllerVelocityY[r]=o,this.prevControllerY[r]=a,o<-1.2&&this.flapCooldown<=0&&(r===0&&(n=!0),r===1&&(s=!0))}n&&s?this.handleFlapInput("both"):n?this.handleFlapInput("left"):s&&this.handleFlapInput("right")}renderLoop(t,e){const n=Math.min(this.clock.getDelta(),.1);if(this.flapCooldown>0&&(this.flapCooldown-=n),this.gameOverDelay>0&&(this.gameOverDelay-=n),this.detectControllerFlaps(n),this.state==="READY"){const s=5+Math.sin(t*.003)*.2;this.playerRig.position.y=s,this.pitchAngle=0}else if(this.state==="PLAYING"){this.playerRig.position.z-=this.forwardSpeed*n,this.playerRig.position.y+=this.velocityY*n+.5*this.gravity*n*n,this.velocityY+=this.gravity*n,this.velocityY=Math.max(this.velocityY,-9.5);const s=An.clamp(this.velocityY*.08,-.65,.45);this.pitchAngle=An.lerp(this.pitchAngle,s,n*8),this.pipeManager.update(n,this.playerRig.position.z,()=>{this.score++,this.forwardSpeed=this.baseForwardSpeed+Math.min(this.score*.1,4),Se.playScore(),Se.playAnnouncer(this.score),this.triggerHaptic(.4,60),this.ui.updateScore(this.score)}),this.pipeManager.checkCollision(this.playerRig.position).hit&&this.handleGameOver()}else this.state==="GAMEOVER"&&this.playerRig.position.y>.45&&(this.playerRig.position.y=Math.max(.45,this.playerRig.position.y-n*4));this.avatar.update(n,this.pitchAngle,this.renderer.xr.isPresenting,this.controllerVelocityY),this.environment.update(n,this.playerRig.position.z),this.renderer.render(this.scene,this.camera)}}window.addEventListener("DOMContentLoaded",()=>{window.gameInstance=new _q});
