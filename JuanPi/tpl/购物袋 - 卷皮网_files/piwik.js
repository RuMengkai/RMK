/*!
 *  * Piwik - free/libre analytics platform
 *   *
 *    * JavaScript tracking client
 *     *
 *      * @link http://piwik.org
 *       * @source https://github.com/piwik/piwik/blob/master/js/piwik.js
 *        * @license http://piwik.org/free-software/bsd/ BSD-3 Clause (also in js/LICENSE.txt)
 *         * @license magnet:?xt=urn:btih:c80d50af7d3db9be66a4d0a86db0286e4fd33292&dn=bsd-3-clause.txt BSD-3-Clause
 *          */
if(typeof JSON2!=="object"){JSON2={}}(function(){function d(f){return f<10?"0"+f:f}function l(n,m){var f=Object.prototype.toString.apply(n);if(f==="[object Date]"){return isFinite(n.valueOf())?n.getUTCFullYear()+"-"+d(n.getUTCMonth()+1)+"-"+d(n.getUTCDate())+"T"+d(n.getUTCHours())+":"+d(n.getUTCMinutes())+":"+d(n.getUTCSeconds())+"Z":null}if(f==="[object String]"||f==="[object Number]"||f==="[object Boolean]"){return n.valueOf()}if(f!=="[object Array]"&&typeof n.toJSON==="function"){return n.toJSON(m)}return n}var c=new RegExp("[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]","g"),e='\\\\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]',i=new RegExp("["+e,"g"),j,b,k={"\b":"\\b","\t":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"},h;
function a(f){i.lastIndex=0;return i.test(f)?'"'+f.replace(i,function(m){var n=k[m];return typeof n==="string"?n:"\\u"+("0000"+m.charCodeAt(0).toString(16)).slice(-4)})+'"':'"'+f+'"'}function g(s,p){var n,m,t,f,q=j,o,r=p[s];if(r&&typeof r==="object"){r=l(r,s)}if(typeof h==="function"){r=h.call(p,s,r)}switch(typeof r){case"string":return a(r);case"number":return isFinite(r)?String(r):"null";case"boolean":case"null":return String(r);case"object":if(!r){return"null"}j+=b;o=[];if(Object.prototype.toString.apply(r)==="[object Array]"){f=r.length;for(n=0;n<f;n+=1){o[n]=g(n,r)||"null"}t=o.length===0?"[]":j?"[\n"+j+o.join(",\n"+j)+"\n"+q+"]":"["+o.join(",")+"]";j=q;return t}if(h&&typeof h==="object"){f=h.length;for(n=0;n<f;n+=1){if(typeof h[n]==="string"){m=h[n];t=g(m,r);if(t){o.push(a(m)+(j?": ":":")+t)}}}}else{for(m in r){if(Object.prototype.hasOwnProperty.call(r,m)){t=g(m,r);if(t){o.push(a(m)+(j?": ":":")+t)}}}}t=o.length===0?"{}":j?"{\n"+j+o.join(",\n"+j)+"\n"+q+"}":"{"+o.join(",")+"}";j=q;
return t}}if(typeof JSON2.stringify!=="function"){JSON2.stringify=function(o,m,n){var f;j="";b="";if(typeof n==="number"){for(f=0;f<n;f+=1){b+=" "}}else{if(typeof n==="string"){b=n}}h=m;if(m&&typeof m!=="function"&&(typeof m!=="object"||typeof m.length!=="number")){throw new Error("JSON2.stringify")}return g("",{"":o})}}if(typeof JSON2.parse!=="function"){JSON2.parse=function(o,f){var n;function m(s,r){var q,p,t=s[r];if(t&&typeof t==="object"){for(q in t){if(Object.prototype.hasOwnProperty.call(t,q)){p=m(t,q);if(p!==undefined){t[q]=p}else{delete t[q]}}}}return f.call(s,r,t)}o=String(o);c.lastIndex=0;if(c.test(o)){o=o.replace(c,function(p){return"\\u"+("0000"+p.charCodeAt(0).toString(16)).slice(-4)})}if((new RegExp("^[\\],:{}\\s]*$")).test(o.replace(new RegExp('\\\\(?:["\\\\/bfnrt]|u[0-9a-fA-F]{4})',"g"),"@").replace(new RegExp('"[^"\\\\\n\r]*"|true|false|null|-?\\d+(?:\\.\\d*)?(?:[eE][+\\-]?\\d+)?',"g"),"]").replace(new RegExp("(?:^|:|,)(?:\\s*\\[)+","g"),""))){n=eval("("+o+")");
return typeof f==="function"?m({"":n},""):n}throw new SyntaxError("JSON2.parse")}}}());if(typeof _paq!=="object"){_paq=[]}if(typeof Piwik!=="object"){Piwik=(function(){var i,a={},s=document,e=navigator,F=screen,C=window,f=C.performance||C.mozPerformance||C.msPerformance||C.webkitPerformance,n=false,A=[],k=C.encodeURIComponent,B=C.decodeURIComponent,g=unescape,G,r,c;function u(R){var Q=typeof R;return Q!=="undefined"}function o(Q){return typeof Q==="function"}function E(Q){return typeof Q==="object"}function l(Q){return typeof Q==="string"||Q instanceof String}function L(){var Q,S,R;for(Q=0;Q<arguments.length;Q+=1){R=arguments[Q];S=R.shift();if(l(S)){G[S].apply(G,R)}else{S.apply(G,R)}}}function O(T,S,R,Q){if(T.addEventListener){T.addEventListener(S,R,Q);return true}if(T.attachEvent){return T.attachEvent("on"+S,R)}T["on"+S]=R}function J(R,U){var Q="",T,S;for(T in a){if(Object.prototype.hasOwnProperty.call(a,T)){S=a[T][R];if(o(S)){Q+=S(U)}}}return Q}function M(){var Q;J("unload");if(i){do{Q=new Date()
}while(Q.getTimeAlias()<i)}}function K(){var Q;if(!n){n=true;J("load");for(Q=0;Q<A.length;Q++){A[Q]()}}return true}function m(){var R;if(s.addEventListener){O(s,"DOMContentLoaded",function Q(){s.removeEventListener("DOMContentLoaded",Q,false);K()})}else{if(s.attachEvent){s.attachEvent("onreadystatechange",function Q(){if(s.readyState==="complete"){s.detachEvent("onreadystatechange",Q);K()}});if(s.documentElement.doScroll&&C===C.top){(function Q(){if(!n){try{s.documentElement.doScroll("left")}catch(S){setTimeout(Q,0);return}K()}}())}}}if((new RegExp("WebKit")).test(e.userAgent)){R=setInterval(function(){if(n||/loaded|complete/.test(s.readyState)){clearInterval(R);K()}},10)}O(C,"load",K,false)}function h(S,R){var Q=s.createElement("script");Q.type="text/javascript";Q.src=S;if(Q.readyState){Q.onreadystatechange=function(){var T=this.readyState;if(T==="loaded"||T==="complete"){Q.onreadystatechange=null;R()}}}else{Q.onload=R}s.getElementsByTagName("head")[0].appendChild(Q)}function v(){var Q="";
try{Q=C.top.document.referrer}catch(S){if(C.parent){try{Q=C.parent.document.referrer}catch(R){Q=""}}}if(Q===""){Q=s.referrer}return Q}function j(Q){var S=new RegExp("^([a-z]+):"),R=S.exec(Q);return R?R[1]:null}function b(Q){var S=new RegExp("^(?:(?:https?|ftp):)/*(?:[^@]+@)?([^:/#]+)"),R=S.exec(Q);return R?R[1]:Q}function D(S,R){var Q="[\\?&#]"+R+"=([^&#]*)";var U=new RegExp(Q);var T=U.exec(S);return T?B(T[1]):""}function q(Q){return g(k(Q))}function N(ag){var S=function(al,W){return(al<<W)|(al>>>(32-W))},ah=function(an){var al="",am,W;for(am=7;am>=0;am--){W=(an>>>(am*4))&15;al+=W.toString(16)}return al},V,aj,ai,R=[],aa=1732584193,Y=4023233417,X=2562383102,U=271733878,T=3285377520,af,ae,ad,ac,ab,ak,Q,Z=[];ag=q(ag);Q=ag.length;for(aj=0;aj<Q-3;aj+=4){ai=ag.charCodeAt(aj)<<24|ag.charCodeAt(aj+1)<<16|ag.charCodeAt(aj+2)<<8|ag.charCodeAt(aj+3);Z.push(ai)}switch(Q&3){case 0:aj=2147483648;break;case 1:aj=ag.charCodeAt(Q-1)<<24|8388608;break;case 2:aj=ag.charCodeAt(Q-2)<<24|ag.charCodeAt(Q-1)<<16|32768;
break;case 3:aj=ag.charCodeAt(Q-3)<<24|ag.charCodeAt(Q-2)<<16|ag.charCodeAt(Q-1)<<8|128;break}Z.push(aj);while((Z.length&15)!==14){Z.push(0)}Z.push(Q>>>29);Z.push((Q<<3)&4294967295);for(V=0;V<Z.length;V+=16){for(aj=0;aj<16;aj++){R[aj]=Z[V+aj]}for(aj=16;aj<=79;aj++){R[aj]=S(R[aj-3]^R[aj-8]^R[aj-14]^R[aj-16],1)}af=aa;ae=Y;ad=X;ac=U;ab=T;for(aj=0;aj<=19;aj++){ak=(S(af,5)+((ae&ad)|(~ae&ac))+ab+R[aj]+1518500249)&4294967295;ab=ac;ac=ad;ad=S(ae,30);ae=af;af=ak}for(aj=20;aj<=39;aj++){ak=(S(af,5)+(ae^ad^ac)+ab+R[aj]+1859775393)&4294967295;ab=ac;ac=ad;ad=S(ae,30);ae=af;af=ak}for(aj=40;aj<=59;aj++){ak=(S(af,5)+((ae&ad)|(ae&ac)|(ad&ac))+ab+R[aj]+2400959708)&4294967295;ab=ac;ac=ad;ad=S(ae,30);ae=af;af=ak}for(aj=60;aj<=79;aj++){ak=(S(af,5)+(ae^ad^ac)+ab+R[aj]+3395469782)&4294967295;ab=ac;ac=ad;ad=S(ae,30);ae=af;af=ak}aa=(aa+af)&4294967295;Y=(Y+ae)&4294967295;X=(X+ad)&4294967295;U=(U+ac)&4294967295;T=(T+ab)&4294967295}ak=ah(aa)+ah(Y)+ah(X)+ah(U)+ah(T);return ak.toLowerCase()}function I(S,Q,R){if(S==="translate.googleusercontent.com"){if(R===""){R=Q
}Q=D(Q,"u");S=b(Q)}else{if(S==="cc.bingj.com"||S==="webcache.googleusercontent.com"||S.slice(0,5)==="74.6."){Q=s.links[0].href;S=b(Q)}}return[S,Q,R]}function w(R){var Q=R.length;if(R.charAt(--Q)==="."){R=R.slice(0,Q)}if(R.slice(0,2)==="*."){R=R.slice(1)}return R}function P(R){R=R&&R.text?R.text:R;if(!l(R)){var Q=s.getElementsByTagName("title");if(Q&&u(Q[0])){R=Q[0].text}}return R}function y(Q,R){if(R){return R}if(Q.slice(-9)==="piwik.php"){Q=Q.slice(0,Q.length-9)}return Q}function x(U){var Q="Piwik_Overlay";var X=new RegExp("index\\.php\\?module=Overlay&action=startOverlaySession&idSite=([0-9]+)&period=([^&]+)&date=([^&]+)$");var S=X.exec(s.referrer);if(S){var T=S[1];if(T!==String(U)){return false}var W=S[2],R=S[3];C.name=Q+"###"+W+"###"+R}var V=C.name.split("###");return V.length===3&&V[0]===Q}function H(R,W,T){var V=C.name.split("###"),U=V[1],Q=V[2],S=y(R,W);h(S+"plugins/Overlay/client/client.js?v=1",function(){Piwik_Overlay_Client.initialize(S,T,U,Q)})}function z(ap,aT){var W=I(s.domain,C.location.href,v()),be=w(W[0]),bt=W[1],a1=W[2],bu=false,aX="GET",aZ=aX,aL="application/x-www-form-urlencoded; charset=UTF-8",au=aL,U=ap||"",am="",aV="",bj=aT||"",aJ,ay=s.title,aA="7z|aac|apk|ar[cj]|as[fx]|avi|azw3|bin|csv|deb|dmg|docx?|epub|exe|flv|gif|gz|gzip|hqx|jar|jpe?g|js|mobi|mp(2|3|4|e?g)|mov(ie)?|ms[ip]|od[bfgpst]|og[gv]|pdf|phps|png|pptx?|qtm?|ra[mr]?|rpm|sea|sit|tar|t?bz2?|tgz|torrent|txt|wav|wm[av]|wpd||xlsx?|xml|z|zip",aW=[be],Z=[],aO=[],ao=[],aU=500,aa,aq,ab,ae,aC=["pk_campaign","piwik_campaign","utm_campaign","utm_source","utm_medium"],ax=["pk_kwd","piwik_kwd","utm_term"],br="_pk_",ag,bs,af=false,bm,aE,aH,al=63072000000,an=1800000,aK=15768000000,aF=true,at=0,aI=false,Y=false,aj,aP={},V={},bn=200,a7={},bk={},a4=false,a2=false,a0,aQ,ah,aB=N,a3,aG;
function a9(bD,bA,bz,bC,by,bB){if(af){return}var bx;if(bz){bx=new Date();bx.setTime(bx.getTime()+bz)}s.cookie=bD+"="+k(bA)+(bz?";expires="+bx.toGMTString():"")+";path="+(bC||"/")+(by?";domain="+by:"")+(bB?";secure":"")}function ak(bz){if(af){return 0}var bx=new RegExp("(^|;)[ ]*"+bz+"=([^;]*)"),by=bx.exec(s.cookie);return by?B(by[2]):0}function bo(bx){var by;if(ab){by=new RegExp("#.*");return bx.replace(by,"")}return bx}function bd(bz,bx){var bA=j(bx),by;if(bA){return bx}if(bx.slice(0,1)==="/"){return j(bz)+"://"+b(bz)+bx}bz=bo(bz);by=bz.indexOf("?");if(by>=0){bz=bz.slice(0,by)}by=bz.lastIndexOf("/");if(by!==bz.length-1){bz=bz.slice(0,by+1)}return bz+bx}function aY(bA){var by,bx,bz;for(by=0;by<aW.length;by++){bx=w(aW[by].toLowerCase());if(bA===bx){return true}if(bx.slice(0,1)==="."){if(bA===bx.slice(1)){return true}bz=bA.length-bx.length;if((bz>0)&&(bA.slice(bz)===bx)){return true}}}return false}function makeProtocalUrl(myurl){var protocol=j(location.href);var protocol2=j(myurl);if(protocol=='https'&&protocol2=='http'){myurl='https'+myurl.substring(4);}return myurl;}function bw(bx){var by=new Image(1,1);by.onload=function(){r=0};if(window.location.hostname.indexOf("jiukuaiyou.com")!=-1){U=U.replace(/d.juanpi.com/,"d.jiukuaiyou.com");}U=makeProtocalUrl(U);by.src=U+(U.indexOf("?")<0?"?":"&")+bx
}function ba(bx){try{var bz=C.XMLHttpRequest?new C.XMLHttpRequest():C.ActiveXObject?new ActiveXObject("Microsoft.XMLHTTP"):null;bz.open("POST",U,true);bz.onreadystatechange=function(){if(this.readyState===4&&!(this.status>=200&&this.status<300)){bw(bx)}};bz.setRequestHeader("Content-Type",au);bz.send(bx)}catch(by){bw(bx)}}function aD(bz,by){var bx=new Date();if(!bm){if(aZ==="POST"){ba(bz)}else{bw(bz)}i=bx.getTime()+by}}function a8(bx){return br+bx+"."+bj+"."+a3}function X(){if(af){return"0"}if(!u(e.cookieEnabled)){var bx=a8("testcookie");a9(bx,"1");return ak(bx)==="1"?"1":"0"}return e.cookieEnabled?"1":"0"}function aR(){a3=aB((ag||be)+(bs||"/")).slice(0,4)}function ai(){var by=a8("cvar"),bx=ak(by);if(bx.length){bx=JSON2.parse(bx);if(E(bx)){return bx}}return{}}function T(){if(Y===false){Y=ai()}}function bi(){var bx=new Date();a0=bx.getTime()}function ad(bB,by,bx,bA,bz,bC){a9(a8("id"),bB+"."+by+"."+bx+"."+bA+"."+bz+"."+bC,al,bs,ag)}function S(){var by=new Date(),bx=Math.round(by.getTime()/1000),bA=ak(a8("id")),bz;
if(bA){bz=bA.split(".");bz.unshift("0")}else{if(!aG){aG=aB((e.userAgent||"")+(e.platform||"")+JSON2.stringify(bk)+by.getTime()+Math.random()).slice(0,16)}bz=["1",aG,bx,0,bx,"",""]}return bz}function R(){var bx=ak(a8("ref"));if(bx.length){try{bx=JSON2.parse(bx);if(E(bx)){return bx}}catch(by){}}return["","",0,""]}function Q(){var bx=af;af=false;a9(a8("id"),"",-86400,bs,ag);a9(a8("ses"),"",-86400,bs,ag);a9(a8("cvar"),"",-86400,bs,ag);a9(a8("ref"),"",-86400,bs,ag);af=bx}function bh(bB){if(!bB||!E(bB)){return}var bA=[];var bz;for(bz in bB){if(Object.prototype.hasOwnProperty.call(bB,bz)){bA.push(bz)}}var bC={};bA.sort();var bx=bA.length;var by;for(by=0;by<bx;by++){bC[bA[by]]=bB[bA[by]]}return bC}function az(bz,bX,bY,bA){var bV,by=new Date(),bH=Math.round(by.getTime()/1000),b1,bW,bC,bN,bS,bG,bQ,bD,bU,bB=1024,b3,bK,bR=Y,bI=a8("ses"),bJ=a8("ref"),b4=a8("cvar"),bO=S(),bM=ak(bI),bT=R(),b0=aJ||bt,bE,bx;if(af){Q()}if(bm){return""}b1=bO[0];bW=bO[1];bN=bO[2];bC=bO[3];bS=bO[4];bG=bO[5];if(!u(bO[6])){bO[6]=""
}bQ=bO[6];if(!u(bA)){bA=""}var bL=s.characterSet||s.charset;if(!bL||bL.toLowerCase()==="utf-8"){bL=null}bE=bT[0];bx=bT[1];bD=bT[2];bU=bT[3];if(!bM){var bZ=an/1000;if(!bG||(bH-bG)>bZ){bC++;bG=bS}if(!aH||!bE.length){for(bV in aC){if(Object.prototype.hasOwnProperty.call(aC,bV)){bE=D(b0,aC[bV]);if(bE.length){break}}}for(bV in ax){if(Object.prototype.hasOwnProperty.call(ax,bV)){bx=D(b0,ax[bV]);if(bx.length){break}}}}b3=b(a1);bK=bU.length?b(bU):"";if(b3.length&&!aY(b3)&&(!aH||!bK.length||aY(bK))){bU=a1}if(bU.length||bE.length){bD=bH;bT=[bE,bx,bD,bo(bU.slice(0,bB))];a9(bJ,JSON2.stringify(bT),aK,bs,ag)}}bz+="&idsite="+bj+"&rec=1&r="+String(Math.random()).slice(2,8)+"&h="+by.getHours()+"&m="+by.getMinutes()+"&s="+by.getSeconds()+"&url="+k(bo(b0))+(a1.length?"&urlref="+k(bo(a1)):"")+"&_id="+bW+"&_idts="+bN+"&_idvc="+bC+"&_idn="+b1+(bE.length?"&_rcn="+k(bE):"")+(bx.length?"&_rck="+k(bx):"")+"&_refts="+bD+"&_viewts="+bG+(String(bQ).length?"&_ects="+bQ:"")+(String(bU).length?"&_ref="+k(bo(bU.slice(0,bB))):"")+(bL?"&cs="+k(bL):"");
for(bV in bk){if(Object.prototype.hasOwnProperty.call(bk,bV)){bz+="&"+bV+"="+bk[bV]}}if(bX){bz+="&data="+k(JSON2.stringify(bX))}else{if(ae){bz+="&data="+k(JSON2.stringify(ae))}}function bF(b5,b6){var b7=JSON2.stringify(b5);if(b7.length>2){return"&"+b6+"="+k(b7)}return""}var b2=bh(aP);var bP=bh(V);bz+=bF(b2,"cvar");bz+=bF(bP,"e_cvar");if(Y){bz+=bF(Y,"_cvar");for(bV in bR){if(Object.prototype.hasOwnProperty.call(bR,bV)){if(Y[bV][0]===""||Y[bV][1]===""){delete Y[bV]}}}if(aI){a9(b4,JSON2.stringify(Y),an,bs,ag)}}if(aF){if(at){bz+="&gt_ms="+at}else{if(f&&f.timing&&f.timing.requestStart&&f.timing.responseEnd){bz+="&gt_ms="+(f.timing.responseEnd-f.timing.requestStart)}}}ad(bW,bN,bC,bH,bG,u(bA)&&String(bA).length?bA:bQ);a9(bI,"*",an,bs,ag);bz+=J(bY);if(aV.length){bz+="&"+aV}if(o(aj)){bz=aj(bz)}return bz}function bc(bA,bz,bE,bB,bx,bH){var bC="idgoal=0",bD,by=new Date(),bF=[],bG;if(String(bA).length){bC+="&ec_id="+k(bA);bD=Math.round(by.getTime()/1000)}bC+="&revenue="+bz;if(String(bE).length){bC+="&ec_st="+bE
}if(String(bB).length){bC+="&ec_tx="+bB}if(String(bx).length){bC+="&ec_sh="+bx}if(String(bH).length){bC+="&ec_dt="+bH}if(a7){for(bG in a7){if(Object.prototype.hasOwnProperty.call(a7,bG)){if(!u(a7[bG][1])){a7[bG][1]=""}if(!u(a7[bG][2])){a7[bG][2]=""}if(!u(a7[bG][3])||String(a7[bG][3]).length===0){a7[bG][3]=0}if(!u(a7[bG][4])||String(a7[bG][4]).length===0){a7[bG][4]=1}bF.push(a7[bG])}}bC+="&ec_items="+k(JSON2.stringify(bF))}bC=az(bC,ae,"ecommerce",bD);aD(bC,aU)}function bb(bx,bB,bA,bz,by,bC){if(String(bx).length&&u(bB)){bc(bx,bB,bA,bz,by,bC)}}function bq(bx){if(u(bx)){bc("",bx,"","","","")}}function aN(bA,bB){var bx=new Date(),bz=az("action_name="+k(P(bA||ay)),bB,"log");aD(bz,aU);if(aa&&aq&&!a2){a2=true;O(s,"click",bi);O(s,"mouseup",bi);O(s,"mousedown",bi);O(s,"mousemove",bi);O(s,"mousewheel",bi);O(C,"DOMMouseScroll",bi);O(C,"scroll",bi);O(s,"keypress",bi);O(s,"keydown",bi);O(s,"keyup",bi);O(C,"resize",bi);O(C,"focus",bi);O(C,"blur",bi);a0=bx.getTime();setTimeout(function by(){var bC;bx=new Date();
if((a0+aq)>bx.getTime()){if(aa<bx.getTime()){bC=az("ping=1",bB,"ping");aD(bC,aU)}setTimeout(by,aq)}},aq)}}function ac(bz,bB,bx,bA,bC){if(String(bz).length===0||String(bB).length===0){return false}var by=az("e_c="+k(bz)+"&e_a="+k(bB)+(u(bx)?"&e_n="+k(bx):"")+(u(bA)?"&e_v="+k(bA):""),bC,"event");aD(by,aU)}function aw(bx,bA,by,bB){var bz=az("search="+k(bx)+(bA?"&search_cat="+k(bA):"")+(u(by)?"&search_count="+by:""),bB,"sitesearch");aD(bz,aU)}function aS(bx,bA,bz){var by=az("idgoal="+bx+(bA?"&revenue="+bA:""),bz,"goal");aD(by,aU)}function bg(by,bx,bA){var bz=az(bx+"="+k(bo(by)),bA,"link");aD(bz,aU)}function bl(by,bx){if(by!==""){return by+bx.charAt(0).toUpperCase()+bx.slice(1)}return bx}function av(bC){var bB,bx,bA=["","webkit","ms","moz"],bz;if(!aE){for(bx=0;bx<bA.length;bx++){bz=bA[bx];if(Object.prototype.hasOwnProperty.call(s,bl(bz,"hidden"))){if(s[bl(bz,"visibilityState")]==="prerender"){bB=true}break}}}if(bB){O(s,bz+"visibilitychange",function by(){s.removeEventListener(bz+"visibilitychange",by,false);
bC()});return}bC()}function ar(bz,by){var bA,bx="(^| )(piwik[_-]"+by;if(bz){for(bA=0;bA<bz.length;bA++){bx+="|"+bz[bA]}}bx+=")( |$)";return new RegExp(bx)}function bf(bA,bx,bB){var bz=ar(aO,"download"),by=ar(ao,"link"),bC=new RegExp("\\.("+aA+")([?&#]|$)","i");return by.test(bA)?"link":(bz.test(bA)||bC.test(bx)?"download":(bB?0:"link"))}function a6(bC){var bA,by,bx;bA=bC.parentNode;while(bA!==null&&u(bA)){by=bC.tagName.toUpperCase();if(by==="A"||by==="AREA"){break}bC=bA;bA=bC.parentNode}if(u(bC.href)){var bD=bC.hostname||b(bC.href),bE=bD.toLowerCase(),bz=bC.href.replace(bD,bE),bB=new RegExp("^(javascript|vbscript|jscript|mocha|livescript|ecmascript|mailto):","i");if(!bB.test(bz)){bx=bf(bC.className,bz,aY(bE));if(bx){bz=g(bz);bg(bz,bx)}}}}function bv(bx){var by,bz;bx=bx||C.event;by=bx.which||bx.button;bz=bx.target||bx.srcElement;if(bx.type==="click"){if(bz){a6(bz)}}else{if(bx.type==="mousedown"){if((by===1||by===2)&&bz){aQ=by;ah=bz}else{aQ=ah=null}}else{if(bx.type==="mouseup"){if(by===aQ&&bz===ah){a6(bz)
}aQ=ah=null}}}}function a5(by,bx){if(bx){O(by,"mouseup",bv,false);O(by,"mousedown",bv,false)}else{O(by,"click",bv,false)}}function aM(by){if(!a4){a4=true;var bz,bx=ar(Z,"ignore"),bA=s.links;if(bA){for(bz=0;bz<bA.length;bz++){if(!bx.test(bA[bz].className)){a5(bA[bz],by)}}}}}function bp(){var by,bz,bA={pdf:"application/pdf",qt:"video/quicktime",realp:"audio/x-pn-realaudio-plugin",wma:"application/x-mplayer2",dir:"application/x-director",fla:"application/x-shockwave-flash",java:"application/x-java-vm",gears:"application/x-googlegears",ag:"application/x-silverlight"},bx=(new RegExp("Mac OS X.*Safari/")).test(e.userAgent)?C.devicePixelRatio||1:1;if(!((new RegExp("MSIE")).test(e.userAgent))){if(e.mimeTypes&&e.mimeTypes.length){for(by in bA){if(Object.prototype.hasOwnProperty.call(bA,by)){bz=e.mimeTypes[bA[by]];bk[by]=(bz&&bz.enabledPlugin)?"1":"0"}}}if(typeof navigator.javaEnabled!=="unknown"&&u(e.javaEnabled)&&e.javaEnabled()){bk.java="1"}if(o(C.GearsFactory)){bk.gears="1"}bk.cookie=X()}bk.res=F.width*bx+"x"+F.height*bx
}bp();aR();return{getVisitorId:function(){return(S())[1]},getVisitorInfo:function(){return S()},getAttributionInfo:function(){return R()},getAttributionCampaignName:function(){return R()[0]},getAttributionCampaignKeyword:function(){return R()[1]},getAttributionReferrerTimestamp:function(){return R()[2]},getAttributionReferrerUrl:function(){return R()[3]},setTrackerUrl:function(bx){U=bx},setSiteId:function(bx){bj=bx},setCustomData:function(bx,by){if(E(bx)){ae=bx}else{if(!ae){ae=[]}ae[bx]=by}},getCustomData:function(){return ae},setCustomRequestProcessing:function(bx){aj=bx},appendToTrackingUrl:function(bx){aV=bx},getRequest:function(bx){return az(bx)},addPlugin:function(bx,by){a[bx]=by},setCustomVariable:function(by,bx,bB,bz){var bA;if(!u(bz)){bz="visit"}if(!u(bx)){return}if(!u(bB)){bB=""}if(by>0){bx=!l(bx)?String(bx):bx;bB=!l(bB)?String(bB):bB;bA=[bx.slice(0,bn),bB.slice(0,bn)];if(bz==="visit"||bz===2){T();Y[by]=bA}else{if(bz==="page"||bz===3){aP[by]=bA}else{if(bz==="event"){V[by]=bA}}}}},getCustomVariable:function(by,bz){var bx;
if(!u(bz)){bz="visit"}if(bz==="page"||bz===3){bx=aP[by]}else{if(bz==="event"){bx=V[by]}else{if(bz==="visit"||bz===2){T();bx=Y[by]}}}if(!u(bx)||(bx&&bx[0]==="")){return false}return bx},deleteCustomVariable:function(bx,by){if(this.getCustomVariable(bx,by)){this.setCustomVariable(bx,"","",by)}},storeCustomVariablesInCookie:function(){aI=true},setLinkTrackingTimer:function(bx){aU=bx},setDownloadExtensions:function(bx){aA=bx},addDownloadExtensions:function(bx){aA+="|"+bx},setDomains:function(bx){aW=l(bx)?[bx]:bx;aW.push(be)},setIgnoreClasses:function(bx){Z=l(bx)?[bx]:bx},setRequestMethod:function(bx){aZ=bx||aX},setRequestContentType:function(bx){au=bx||aL},setReferrerUrl:function(bx){a1=bx},setCustomUrl:function(bx){aJ=bd(bt,bx)},setDocumentTitle:function(bx){ay=bx},setAPIUrl:function(bx){am=bx},setDownloadClasses:function(bx){aO=l(bx)?[bx]:bx},setLinkClasses:function(bx){ao=l(bx)?[bx]:bx},setCampaignNameKey:function(bx){aC=l(bx)?[bx]:bx},setCampaignKeywordKey:function(bx){ax=l(bx)?[bx]:bx},discardHashTag:function(bx){ab=bx
},setCookieNamePrefix:function(bx){br=bx;Y=ai()},setCookieDomain:function(bx){ag=w(bx);aR()},setCookiePath:function(bx){bs=bx;aR()},setVisitorCookieTimeout:function(bx){al=bx*1000},setSessionCookieTimeout:function(bx){an=bx*1000},setReferralCookieTimeout:function(bx){aK=bx*1000},setConversionAttributionFirstReferrer:function(bx){aH=bx},disableCookies:function(){af=true;bk.cookie="0"},deleteCookies:function(){Q()},setDoNotTrack:function(by){var bx=e.doNotTrack||e.msDoNotTrack;bm=by&&(bx==="yes"||bx==="1");if(bm){this.disableCookies()}},addListener:function(by,bx){a5(by,bx)},enableLinkTracking:function(bx){if(n){aM(bx)}else{A.push(function(){aM(bx)})}},enableJSErrorTracking:function(){if(bu){return}bu=true;var bx=C.onerror;C.onerror=function(bC,bA,bz,bB,by){av(function(){var bD="JavaScript Errors";var bE=bA+":"+bz;if(bB){bE+=":"+bB}ac(bD,bE,bC)});if(bx){return bx(bC,bA,bz,bB,by)}return false}},disablePerformanceTracking:function(){aF=false},setGenerationTimeMs:function(bx){at=parseInt(bx,10)
},setHeartBeatTimer:function(bz,by){var bx=new Date();aa=bx.getTime()+bz*1000;aq=by*1000},killFrame:function(){if(C.location!==C.top.location){C.top.location=C.location}},redirectFile:function(bx){if(C.location.protocol==="file:"){C.location=bx}},setCountPreRendered:function(bx){aE=bx},trackGoal:function(bx,bz,by){av(function(){aS(bx,bz,by)})},trackLink:function(by,bx,bz){av(function(){bg(by,bx,bz)})},trackPageView:function(bx,by){if(x(bj)){av(function(){H(U,am,bj)})}else{av(function(){aN(bx,by)})}},trackEvent:function(by,bA,bx,bz){av(function(){ac(by,bA,bx,bz)})},trackSiteSearch:function(bx,bz,by){av(function(){aw(bx,bz,by)})},setEcommerceView:function(bA,bx,bz,by){if(!u(bz)||!bz.length){bz=""}else{if(bz instanceof Array){bz=JSON2.stringify(bz)}}aP[5]=["_pkc",bz];if(u(by)&&String(by).length){aP[2]=["_pkp",by]}if((!u(bA)||!bA.length)&&(!u(bx)||!bx.length)){return}if(u(bA)&&bA.length){aP[3]=["_pks",bA]}if(!u(bx)||!bx.length){bx=""}aP[4]=["_pkn",bx]},addEcommerceItem:function(bB,bx,bz,by,bA){if(bB.length){a7[bB]=[bB,bx,bz,by,bA]
}},trackEcommerceOrder:function(bx,bB,bA,bz,by,bC){bb(bx,bB,bA,bz,by,bC)},trackEcommerceCartUpdate:function(bx){bq(bx)}}}function t(){return{push:L}}O(C,"beforeunload",M,false);m();Date.prototype.getTimeAlias=Date.prototype.getTime;G=new z();var p={setTrackerUrl:1,setAPIUrl:1,setSiteId:1,disableCookies:1};var d;for(r=0;r<_paq.length;r++){d=_paq[r][0];if(p[d]){L(_paq[r]);delete _paq[r];if(p[d]>1){if(console!==undefined&&console&&console.error){console.error("The method "+d+' is registered more than once in "_paq" variable. Only the last call has an effect. Please have a look at the multiple Piwik trackers documentation: http://developer.piwik.org/api-reference/tracking-javascript#multiple-piwik-trackers')}}p[d]++}}for(r=0;r<_paq.length;r++){if(_paq[r]){L(_paq[r])}}_paq=new t();c={addPlugin:function(Q,R){a[Q]=R},getTracker:function(Q,R){return new z(Q,R)},getAsyncTracker:function(){return G}};if(typeof define==="function"&&define.amd){define("piwik",[],function(){return c})}return c}())}if(window&&window.piwikAsyncInit){window.piwikAsyncInit()
}(function(){var a=(typeof AnalyticsTracker);if(a==="undefined"){AnalyticsTracker=Piwik}}());if(typeof piwik_log!=="function"){piwik_log=function(b,f,d,g){function a(h){try{return eval("piwik_"+h)}catch(i){}return}var c,e=Piwik.getTracker(d,f);e.setDocumentTitle(b);e.setCustomData(g);c=a("tracker_pause");if(c){e.setLinkTrackingTimer(c)}c=a("download_extensions");if(c){e.setDownloadExtensions(c)}c=a("hosts_alias");if(c){e.setDomains(c)}c=a("ignore_classes");if(c){e.setIgnoreClasses(c)}e.trackPageView();if(a("install_tracker")){piwik_track=function(i,k,j,h){e.setSiteId(k);e.setTrackerUrl(j);e.trackLink(i,h)};e.enableLinkTracking()}};
/*! @license-end */
};

