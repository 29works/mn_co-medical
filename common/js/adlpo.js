function adlpoMain(a){for(var b=[],c=0;c<arguments.length;c++)b[c]="arguments["+c+"]";eval("adlpoSetup._in("+b.join(",")+");")}function _adlpoocA(){for(var a in ADLPOs)ADLPOs[a].finalize()}function _adlpooctbi(a){ADLPOs[a].activate();ADLPOs[a].isActivated()||(_adlpooe.disable(),ADLPOs[a].finalize())}function _adlpogrdurl(){return 0<adlpoClkUrl1.length?0<adlpoCp.length?adlpoClkUrl1+"&"+adlpoCp+"="+encodeURIComponent(adlpoDefUrl):adlpoClkUrl1+encodeURIComponent(adlpoDefUrl):adlpoDefUrl}
function _adlpogurlp(){var a=[],b;if(b=location.search){b=b.replace("?","").split("&");for(var c=0;c<b.length;c++){var d=b[c].split("=");a[d[0]]=d[1]}}else return!1;return a}function _adlpoake(a,b){return!b||b.constructor!==Array&&b.constructor!==Object?!1:a in b}function optout(){try{"undefined"!=typeof localStorage&&(adlpoCookie=adlpoLocalStorage,adlpoCookie._in(_adlpockna),adlpoCookie.isEnable()&&(adlpoCookie.clear(),adlpoCookie.setCookie(_adlpotoof,1,_adlpouiet)))}catch(a){}}
if("undefined"==typeof _adlpotgcn){var adlpoCookie={name:null,domain:null,cookies:[],_in:function(a,b){this.name=a;var c="",d=/([^.]+\.([^.]{2,3}\.[^.]{2,3}|[^.]+))$/.exec(b);null!=d&&(c="."+d[1]);this.domain=""==b?"":"; domain="+c;this.loadCookies()},isEnable:function(){this.setCookie(_adlpoocce,"true",60);this.loadCookies();return"true"==this.getCookie(_adlpoocce)},setCookie:function(a,b,c){"undefined"!=typeof a&&"undefined"!=typeof b&&"undefined"!=typeof c&&(this.cookies[a]={name:a,value:escape(b),
expireOn:Math.ceil(c+(new Date).getTime()/1E3)},this.saveCookies())},getCookie:function(a){a=this.cookies[a];return"undefined"==typeof a||null==a?null:unescape(a.value)},deleteCookie:function(a){var b={};for(i in this.cookies)i!=a&&(b[i]=this.cookies[i]);this.cookies=b;this.saveCookies()},loadCookies:function(){this.cookies={};var a=adlpodoc.cookie.indexOf(this.name+"=");if(-1!=a){var b=adlpodoc.cookie.indexOf(";",a);-1==b&&(b=adlpodoc.cookie.indexOf(",",a),-1==b&&(b=adlpodoc.cookie.length));a=adlpodoc.cookie.substring(a+
this.name.length+1,b).split("|");b=Math.ceil((new Date).getTime()/1E3);for(i in a){var c=Number(i);isNaN(c)||(c=a[c].split("#"),b<=c[2]&&(this.cookies[c[0]]={name:c[0],value:c[1],expireOn:c[2]}))}}},saveCookies:function(){var a=[],b=0;for(i in this.cookies)null!=this.cookies[i]&&(a[a.length]=this.cookies[i].name+"#"+this.cookies[i].value+"#"+this.cookies[i].expireOn,b<this.cookies[i].expireOn&&(b=this.cookies[i].expireOn));b=new Date(1E3*b);adlpodoc.cookie=this.name+"="+a.join("|")+"; expires="+b.toGMTString()+
"; path=/"+this.domain}},adlpoLocalStorage={name:null,domain:null,cookies:[],_in:function(a){this.name=a;this.loadCookies()},isEnable:function(){this.setCookie(_adlpoocce,"true",60);this.loadCookies();return"true"==this.getCookie(_adlpoocce)&&"1"!==this.getCookie(_adlpotoof)?!0:!1},setCookie:function(a,b,c){"undefined"!=typeof a&&"undefined"!=typeof b&&"undefined"!=typeof c&&(this.cookies[a]={name:a,value:escape(b),expireOn:Math.ceil(c+(new Date).getTime()/1E3)},this.saveCookies())},getCookie:function(a){a=
this.cookies[a];return"undefined"==typeof a||null==a?null:unescape(a.value)},deleteCookie:function(a){var b={};for(i in this.cookies)i!=a&&(b[i]=this.cookies[i]);this.cookies=b;this.saveCookies()},loadCookies:function(){this.cookies={};var a=localStorage.getItem(this.name);if(null!=a){a=a.split("|");var b=Math.ceil((new Date).getTime()/1E3);for(i in a){var c=Number(i);isNaN(c)||(c=a[c].split("#"),b<=c[2]&&(this.cookies[c[0]]={name:c[0],value:c[1],expireOn:c[2]}))}}},saveCookies:function(){var a=[];
for(i in this.cookies)null!=this.cookies[i]&&(a[a.length]=this.cookies[i].name+"#"+this.cookies[i].value+"#"+this.cookies[i].expireOn);localStorage.setItem(this.name,a.join("|"))},clear:function(){localStorage.clear()}},adlpoPc={cookieName:null,expireTime:null,id:null,_in:function(a,b,c){this.cookieName=b;this.expireTime=c;this.id=adlpoCookie.getCookie(b);if(null==this.id||0==this.id.length)this.id=a;adlpoCookie.setCookie(this.cookieName,this.id,this.expireTime)},getId:function(){adlpoCookie.setCookie(_adlpopcid,
this.id,this.expireTime);return this.id},forceId:function(a){return this.id!=a?(this.id=a,adlpoCookie.setCookie(this.cookieName,this.id,this.expireTime),!0):!1}},adlpoPlatform={ie:null,mac:null,supported:null,_in:function(){this.ie=-1!=window.navigator.appVersion.indexOf("MSIE");this.mac=-1!=window.navigator.appVersion.indexOf("Mac");var a=-1!=window.navigator.userAgent.indexOf("Opera"),b=-1!=window.navigator.userAgent.indexOf("Konqueror"),c=this.ie&&-1!=window.navigator.appVersion.indexOf("MSIE 4."),
d="Netscape"==navigator.appName&&4==parseInt(navigator.appVersion);a&&(a=!a);this.supported=!(d||c||a||b)},isSupported:function(){return this.supported},isLocalStorageSupported:function(){-1!=window.navigator.userAgent.indexOf("Firefox")&&(this.supported=null);return this.supported},supportsReplace:function(){return!(this.ie&&this.mac)}},adlpoSafeOnload={temp:[],orderFirst:null,orderMiddle:null,orderLast:null,el:null,actionStarted:!1,ev:null,_in:function(a){this.orderFirst=0;this.orderMiddle=500;
this.orderLast=1E3;this.el=a;"undefined"==typeof _Functions&&(_Functions=[]);a=_Functions.length;_Functions[a]=this;this.ev=new Function("event","_Functions["+a+"].action(event);");this.setup()},add:function(a){this.sortedAdd(a,this.orderMiddle)},sortedAdd:function(a,b){var c=[];c.order=b;c.action=a;this.temp[this.temp.length]=c},setup:function(){this.el.onload!=this.ev&&(this.el.onload&&this.add(this.el.onload),this.el.onload=this.ev)},action:function(a){if(1!=this.actionStarted){this.actionStarted=
!0;this.temp.sort(this.orderSort);for(var b=0;b<this.temp.length;b++)this.el.onload=this.temp[b].action,this.el.onload(a);this.el.onload=this.ev}},orderSort:function(a,b){return a.order-b.order}},adlpoOe={platform:null,safe:null,status:!0,_in:function(a){this.platform=adlpoPlatform;this.platform._in();this.status=this.platform.isSupported();null!=adlpoUser.getPageParameter(a)&&(this.status=!1);if(!adlpoCookie.isEnable())try{"undefined"!==typeof localStorage&&this.platform.isLocalStorageSupported()?
(adlpoCookie=adlpoLocalStorage,adlpoCookie._in(_adlpockna),adlpoCookie.isEnable()?(_adlpoopid=adlpoPc,_adlpoopid._in(adlpoUser._ogi(),_adlpopcid,_adlpouiet)):this.status=!1):this.status=!1}catch(b){this.status=!1}"true"==adlpoCookie.getCookie(_adlpoodc)&&(this.status=!1);this.isAdmin()&&this.enable()},isEnabled:function(){return this.status},getAdlpoSafeOnload:function(){null==this.safe&&(this.safe=adlpoSafeOnload,this.safe._in(window));return this.safe},disable:function(a){"undefined"==typeof a&&
(a=600);this.isAdmin()||(this.status=!1,adlpoCookie.setCookie(_adlpoodc,"true",a))},enable:function(){this.status=!0;adlpoCookie.deleteCookie(_adlpoodc)},isAdmin:function(){return-1!=adlpodoc.location.href.indexOf(_adlpooea)},limitTraffic:function(a,b){if("undefined"!=typeof a){var c=adlpoCookie.getCookie(_adlpootsc);if(this.isAdmin())c=!0,adlpoCookie.setCookie(_adlpootlc,a,b),adlpoCookie.setCookie(_adlpootsc,c,b);else if(null==c||adlpoCookie.getCookie(_adlpootlc)!=a)c=100*Math.random()<=a,adlpoCookie.setCookie(_adlpootlc,
a,b),adlpoCookie.setCookie(_adlpootsc,c,b);c?this.enable():this.disable()}}},adlpoSetup={_in:function(a){if(adlpoPlatform.isSupported()){_adlpooe.safe.setup();for(var b=[],c=!1,d=!1,f="",e=1;e<arguments.length;e++)"pr=at"==arguments[e]&&(c=!0),"pr=ux"==arguments[e]&&(d=!0),arguments[e].match(/^img=([0-9a-zA-Z_-]+)$/)&&(f=RegExp.$1),b[e]=arguments[e];1==c?(d=0==a.length?_adlpopgdt:a,c=d+_adlpotgcn,d=_adlpopage+"="+d):1==d?(d=a,c=d+_adlpotgcn,d=_adlpofnct+"="+d):(d=a,c=d+_adlpotgcn,d=_adlpoarea+"="+
d);b[0]=d;d=new ADLPOORB;d._in(c,b);0<f.length&&d.setInsertId(f);d.put();_adlpotgcn++}},defaultDisplayNone:function(){adlpodoc.write("<style>."+_adlpodflt+" { visibility:hidden; }</style>")}},adlpoUser={_ogi:function(){return(new Date).getTime()+"-"+Math.floor(999999*Math.random())+"-"+Math.floor(999999*Math.random())},getPageParameter:function(a){var b=null;a=(new RegExp(a+"=([^&]*)")).exec(document.location);null!=a&&2<=a.length&&(b=a[1]);return b}},adlpodoc=document,_adlpotgcn=1,_adlpoatid=120,
_adlposurl="http://t.adlpo.com/script/c.js";if("undefined"==typeof _adlpouiet)var _adlpouiet=7776E3;if("undefined"==typeof _adlpoot)var _adlpoot=5E3;if("undefined"==typeof _adlpootlp)var _adlpootlp;if("undefined"==typeof _adlpootd)var _adlpootd=7776E3;if("undefined"==typeof _adlpockdm){var _adlpockdm="",_adlpodre=/[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}/;_adlpodre.exec(adlpodoc.location.host)||(_adlpockdm=adlpodoc.location.hostname)}if("undefined"==typeof _adlpodidv)var _adlpodidv=Math.floor(99999999*
Math.random());var _adlpopcid="PC",_adlpockna="adlpo",_adlpoocce="check",_adlpomdnm="md",_adlpomdvl="cdl",_adlpomdvc="tcv",_adlpomdvt="tat",_adlpomdvp="cpv",_adlpomdvx="xud",_adlpoacnt="aci",_adlpouqid="ud",_adlpohost="hs",_adlpourl="ul",_adlporefr="rf",_adlpoarea="ar",_adlpochar="ch",_adlpopage="tp",_adlpofnct="fn",_adlpoarct="ct",_adlpousag="ua",_adlpopltf="pf",_adlporqtm="rt",_adlporqsc="rs",_adlporqcl="cs",_adlpordu1="r1",_adlpoapu1="a1",_adlpordit="ri",_adlpochnp="cp",_adlpodidn="dy",_adlporsct=
"rct",_adlpotoof="too",_adlpoarcnt=0,ADLPOs={},_adlpoimpt="ADLPOImported-",_adlpomakr="ADLPOMarker-",_adlpodflt="ADLPODefault",_adlpopgdt="DefaultPageID",_adlpoodc="disable",_adlpootlc="level",_adlpootsc="traffic",_adlpooea="envId";adlpoCookie._in(_adlpockna,_adlpockdm);var _adlpoopid=adlpoPc;_adlpoopid._in(adlpoUser._ogi(),_adlpopcid,_adlpouiet);var _adlpooe=adlpoOe;_adlpooe._in("ADLPOORBDisable");_adlpooe.platform.isSupported()&&(null==_adlpooe.safe&&_adlpooe.getAdlpoSafeOnload(),_adlpooe.safe.add(_adlpoocA),
_adlpooe.limitTraffic(_adlpootlp,_adlpootd),_adlpooe.isEnabled()&&adlpoSetup.defaultDisplayNone());var adlpoOfferContent={show:function(a){if(a.importDiv())for(var b=a.importDiv(),c=document.cookie.split("; "),d=0;d<c.length;d++){var f=c[d].split("=");if("adlpo"==f[0]){escape(f[1]);break}}else b=a.importDiv();return a.showContent(b)}}}function ADLPOORB(){}
ADLPOORB.prototype={id:null,url:null,timeout:null,activated:0,defaultDiv:null,offer:null,time:[],activateCount:0,error:null,insert_id:new String,_in:function(a,b){b[b.length]=_adlpoarct+"="+ ++_adlpoarcnt;this.id=a;this.url=this.buildUrl(b);this.offer=adlpoOfferContent;ADLPOs[a]&&(this.put=this.putNothing,this.activateAction=this.hide);ADLPOs[a]=this},setInsertId:function(a){this.insert_id=a},put:function(){if(_adlpooe.isEnabled())if(0<this.insert_id.length){var a='<img src="'+this.url+'" width="1" height="1">';
adlpodoc.getElementById(this.insert_id).innerHTML=a}else adlpodoc.write('<div id="'+this.markerName()+'" style="visibility:hidden;display:none">'),ADLPOs[this.id].startTimeout(_adlpoot),adlpodoc.write('<script type="text/javascript" src="'+this.url+'">\x3c/script></div>');else this.insert_id||adlpodoc.write('<div id="'+this.markerName()+'"></div>')},putNothing:function(){adlpodoc.write('<div id="'+this.markerName()+'"></div>')},hide:function(){var a=adlpodoc.getElementById(this.markerName());null!=
a&&(a.style.visibility="hidden",a.style.display="none");a=this.getDefaultDiv();return null!=a?(a.style.visibility="visible",a.style.display="",1):0},show:function(){return this.offer.show(this)},activateAction:function(){return this.show()},showContent:function(a){if(null==a)return 0;var b=this.getDefaultDiv();if(_adlpooe.platform.supportsReplace())if(null!=b)b.parentNode.replaceChild(a,b);else{var c=adlpodoc.getElementById(this.markerName());if(null==c)return 0;this.visible(c)}else{c=adlpodoc.getElementById(this.markerName());
if(null==c)return 0;null!=b&&this.invisible(b);this.visible(c)}this.visible(a);return 1},invisible:function(a){a.style.visibility="hidden";a.style.display="none"},visible:function(a){a.style.visibility="visible";a.style.display=""},startTimeout:function(a){this.timeout=window.setTimeout('_adlpooctbi("'+this.id+'")',a)},cancelTimeout:function(){null!=this.timeout&&(window.clearTimeout(this.timeout),this.timeout=null)},getDefaultDiv:function(){if(null!=this.defaultDiv)return this.defaultDiv;for(var a=
adlpodoc.getElementById(this.markerName());null!=a;){if(1==a.nodeType&&"DIV"==a.nodeName)if(0<a.className.indexOf(_adlpomakr))break;else if(a.className==_adlpodflt)return this.defaultDiv=a;a=a.previousSibling}return null},activate:function(){if(this.activated)return this.activated;this.activateAction()&&(this.cancelTimeout(),this.activated=1);return this.activated},isActivated:function(){return this.activated},markerName:function(){return _adlpomakr+this.id},importName:function(){return _adlpoimpt+
this.id},importDiv:function(){return adlpodoc.getElementById(this.importName())},finalize:function(){this.cancelTimeout();this.activate()||this.hide()},parameters:function(){var a=this.url,b=a.indexOf("?");if(-1==b||b==a.length-1)return[];a=a.substring(b+1).split("&");b=[];for(var c=0;c<a.length;c++){var d=a[c].split("=");2>d.length||""==d[0]||""==d[1]||(b[d[0]]=d[1])}return b},setActivateAction:function(a){this.activateAction=a},setOffer:function(a){this.offer=a},getAttribute:function(){return""+
("&"+_adlpousag+"="+escape(navigator.userAgent))},encode:function(a){this.encodeCheck(a)||(a=encodeURIComponent(a));return a},encodeCheck:function(a){for(var b=1;b<=a.length-1;b++){var c=a.charAt(b);if("?"==c||"="==c||"&"==c||"#"==c||":"==c||"/"==c)return!1}return!0},buildUrl:function(a){var b=_adlposurl,c=!1,d=!1,f=!1,e=!1,h=!1,k=!1,l=adlpodoc.URL;"https:"==adlpodoc.location.protocol&&(b=b.replace("http:","https:"));b+="?"+_adlpoacnt+"="+_adlpoatid;b+="&"+_adlpohost+"="+adlpodoc.location.hostname;
for(var g=0;g<a.length;g++)"pr=cv"==a[g]?c=!0:"pr=at"==a[g]?d=!0:"pr=ux"==a[g]?e=!0:"lc=ad"==a[g]?h=!0:a[g].match(/^img=([0-9a-zA-Z_-]+)$/)&&(k=!0),b+="&"+a[g];-1<l.indexOf("ADLPOPreview")&&(f=!0);b=f?b+("&"+_adlpomdnm+"="+_adlpomdvp):d?b+("&"+_adlpomdnm+"="+_adlpomdvt):c?b+("&"+_adlpomdnm+"="+_adlpomdvc):e?b+("&"+_adlpomdnm+"="+_adlpomdvx):b+("&"+_adlpomdnm+"="+_adlpomdvl);(c||d)&&k&&(b+="&"+_adlporsct+"=img");h&&(b+="&"+_adlpochar+"="+(document.charset?document.charset:document.characterSet?document.characterSet:
"UTF-8"),0<adlpoClkUrl1.length&&(b+="&"+_adlpordu1+"="+this.encode(adlpoClkUrl1)),0<adlpoApiUrl1.length&&(b+="&"+_adlpoapu1+"="+this.encode(adlpoApiUrl1)),1==adlpoRedIntr&&(b+="&"+_adlpordit+"=1"),0<adlpoCp.length&&(b+="&"+_adlpochnp+"="+adlpoCp),_adlpoake("pf",adlpoUrlParam)&&(b+="&"+_adlpopltf+"="+adlpoUrlParam.pf));b+=this.getAttribute();b+="&"+_adlpodidn+"="+_adlpodidv;a=escape(adlpodoc.referrer);c=escape(adlpodoc.location);d=(new Date).getTime();return b+"&"+_adlpouqid+"="+_adlpoopid.getId()+
"&"+_adlpourl+"="+c+"&"+_adlporefr+"="+a+"&"+_adlporqtm+"="+d+"&"+_adlporqsc+"="+_adlporqcl}};var adlpoUrlParam=_adlpogurlp(),adlpoClkUrl1="",adlpoApiUrl1="",adlpoRedIntr="",adlpoCp="";_adlpoake("clkurl1",adlpoUrlParam)&&(adlpoClkUrl1=decodeURIComponent(adlpoUrlParam.clkurl1));_adlpoake("apiurl1",adlpoUrlParam)&&(adlpoApiUrl1=decodeURIComponent(adlpoUrlParam.apiurl1));_adlpoake("ri",adlpoUrlParam)&&(adlpoRedIntr=decodeURIComponent(adlpoUrlParam.ri));_adlpoake("cp",adlpoUrlParam)&&(adlpoCp=decodeURIComponent(adlpoUrlParam.cp));
var adlpoDefUrl="",adlpoRedirectUrl=_adlpogrdurl();