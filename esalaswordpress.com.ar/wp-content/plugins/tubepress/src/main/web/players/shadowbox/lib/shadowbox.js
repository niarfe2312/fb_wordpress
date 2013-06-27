/*
 * Shadowbox.js, version 3.0.3
 * http://shadowbox-js.com/
 *
 * Copyright 2007-2010, Michael J. I. Jackson
 * Date: 2010-04-07 02:27:32 +0000
 */
(function(T,p){var g={version:"3.0.3"};var Y=navigator.userAgent.toLowerCase();if(Y.indexOf("windows")>-1||Y.indexOf("win32")>-1){g.isWindows=true}else{if(Y.indexOf("macintosh")>-1||Y.indexOf("mac os x")>-1){g.isMac=true}else{if(Y.indexOf("linux")>-1){g.isLinux=true}}}g.isIE=Y.indexOf("msie")>-1;g.isIE6=Y.indexOf("msie 6")>-1;g.isIE7=Y.indexOf("msie 7")>-1;g.isGecko=Y.indexOf("gecko")>-1&&Y.indexOf("safari")==-1;g.isWebKit=Y.indexOf("applewebkit/")>-1;var e=/#(.+)$/,M=/^(light|shadow)box\[(.*?)\]/i,o=/\s*([a-z_]*?)\s*=\s*(.+)\s*/,ar=/[0-9a-z]+$/i,ap=/(.+\/)shadowbox\.js/i;var w=false,m=false,V={},ai=0,O,aa;g.current=-1;g.dimensions=null;g.ease=function(K){return 1+Math.pow(K-1,3)};g.errorInfo={fla:{name:"Flash",url:"http://www.adobe.com/products/flashplayer/"},qt:{name:"QuickTime",url:"http://www.apple.com/quicktime/download/"},wmp:{name:"Windows Media Player",url:"http://www.microsoft.com/windows/windowsmedia/"},f4m:{name:"Flip4Mac",url:"http://www.flip4mac.com/wmv_download.htm"}};g.gallery=[];g.onReady=aj;g.path=null;g.player=null;g.playerId="sb-player";g.options={animate:true,animateFade:true,autoplayMovies:true,continuous:false,enableKeys:true,flashParams:{bgcolor:"#000000",allowfullscreen:true},flashVars:{},flashVersion:"9.0.115",handleOversize:"resize",handleUnsupported:"link",onChange:aj,onClose:aj,onFinish:aj,onOpen:aj,showMovieControls:true,skipSetup:false,slideshowDelay:0,viewportPadding:20};g.getCurrent=function(){return g.current>-1?g.gallery[g.current]:null};g.hasNext=function(){return g.gallery.length>1&&(g.current!=g.gallery.length-1||g.options.continuous)};g.isOpen=function(){return w};g.isPaused=function(){return aa=="pause"};g.applyOptions=function(K){V=ao({},g.options);ao(g.options,K)};g.revertOptions=function(){ao(g.options,V)};g.init=function(au,ax){if(m){return}m=true;if(g.skin.options){ao(g.options,g.skin.options)}if(au){ao(g.options,au)}if(!g.path){var aw,S=document.getElementsByTagName("script");for(var av=0,K=S.length;av<K;++av){aw=ap.exec(S[av].src);if(aw){g.path=aw[1];break}}}if(ax){g.onReady=ax}aq()};g.open=function(S){if(w){return}var K=g.makeGallery(S);g.gallery=K[0];g.current=K[1];S=g.getCurrent();if(S==null){return}g.applyOptions(S.options||{});f();if(g.gallery.length){S=g.getCurrent();if(g.options.onOpen(S)===false){return}w=true;g.skin.onOpen(S,U)}};g.close=function(){if(!w){return}w=false;if(g.player){g.player.remove();g.player=null}if(typeof aa=="number"){clearTimeout(aa);aa=null}ai=0;af(false);g.options.onClose(g.getCurrent());g.skin.onClose();g.revertOptions()};g.play=function(){if(!g.hasNext()){return}if(!ai){ai=g.options.slideshowDelay*1000}if(ai){O=X();aa=setTimeout(function(){ai=O=0;g.next()},ai);if(g.skin.onPlay){g.skin.onPlay()}}};g.pause=function(){if(typeof aa!="number"){return}ai=Math.max(0,ai-(X()-O));if(ai){clearTimeout(aa);aa="pause";if(g.skin.onPause){g.skin.onPause()}}};g.change=function(K){if(!(K in g.gallery)){if(g.options.continuous){K=(K<0?g.gallery.length+K:0);if(!(K in g.gallery)){return}}else{return}}g.current=K;if(typeof aa=="number"){clearTimeout(aa);aa=null;ai=O=0}g.options.onChange(g.getCurrent());U(true)};g.next=function(){g.change(g.current+1)};g.previous=function(){g.change(g.current-1)};g.setDimensions=function(aG,ax,aE,aF,aw,K,aC,az){var aB=aG,av=ax;var aA=2*aC+aw;if(aG+aA>aE){aG=aE-aA}var au=2*aC+K;if(ax+au>aF){ax=aF-au}var S=(aB-aG)/aB,aD=(av-ax)/av,ay=(S>0||aD>0);if(az&&ay){if(S>aD){ax=Math.round((av/aB)*aG)}else{if(aD>S){aG=Math.round((aB/av)*ax)}}}g.dimensions={height:aG+aw,width:ax+K,innerHeight:aG,innerWidth:ax,top:Math.floor((aE-(aG+aA))/2+aC),left:Math.floor((aF-(ax+au))/2+aC),oversized:ay};return g.dimensions};g.makeGallery=function(aw){var K=[],av=-1;if(typeof aw=="string"){aw=[aw]}if(typeof aw.length=="number"){ac(aw,function(ay,az){if(az.content){K[ay]=az}else{K[ay]={content:az}}});av=0}else{if(aw.tagName){var S=g.getCache(aw);aw=S?S:g.makeObject(aw)}if(aw.gallery){K=[];var ax;for(var au in g.cache){ax=g.cache[au];if(ax.gallery&&ax.gallery==aw.gallery){if(av==-1&&ax.content==aw.content){av=K.length}K.push(ax)}}if(av==-1){K.unshift(aw);av=0}}else{K=[aw];av=0}}ac(K,function(ay,az){K[ay]=ao({},az)});return[K,av]};g.makeObject=function(av,au){var aw={content:av.href,title:av.getAttribute("title")||"",link:av};if(au){au=ao({},au);ac(["player","title","height","width","gallery"],function(ax,ay){if(typeof au[ay]!="undefined"){aw[ay]=au[ay];delete au[ay]}});aw.options=au}else{aw.options={}}if(!aw.player){aw.player=g.getPlayer(aw.content)}var K=av.getAttribute("rel");if(K){var S=K.match(M);if(S){aw.gallery=escape(S[2])}ac(K.split(";"),function(ax,ay){S=ay.match(o);if(S){aw[S[1]]=S[2]}})}return aw};g.getPlayer=function(au){if(au.indexOf("#")>-1&&au.indexOf(document.location.href)==0){return"inline"}var av=au.indexOf("?");if(av>-1){au=au.substring(0,av)}var S,K=au.match(ar);if(K){S=K[0].toLowerCase()}if(S){if(g.img&&g.img.ext.indexOf(S)>-1){return"img"}if(g.swf&&g.swf.ext.indexOf(S)>-1){return"swf"}if(g.flv&&g.flv.ext.indexOf(S)>-1){return"flv"}if(g.qt&&g.qt.ext.indexOf(S)>-1){if(g.wmp&&g.wmp.ext.indexOf(S)>-1){return"qtwmp"}else{return"qt"}}if(g.wmp&&g.wmp.ext.indexOf(S)>-1){return"wmp"}}return"iframe"};function f(){var av=g.errorInfo,aw=g.plugins,ay,az,aC,au,aB,S,aA,K;for(var ax=0;ax<g.gallery.length;++ax){ay=g.gallery[ax];az=false;aC=null;switch(ay.player){case"flv":case"swf":if(!aw.fla){aC="fla"}break;case"qt":if(!aw.qt){aC="qt"}break;case"wmp":if(g.isMac){if(aw.qt&&aw.f4m){ay.player="qt"}else{aC="qtf4m"}}else{if(!aw.wmp){aC="wmp"}}break;case"qtwmp":if(aw.qt){ay.player="qt"}else{if(aw.wmp){ay.player="wmp"}else{aC="qtwmp"}}break}if(aC){if(g.options.handleUnsupported=="link"){switch(aC){case"qtf4m":aB="shared";S=[av.qt.url,av.qt.name,av.f4m.url,av.f4m.name];break;case"qtwmp":aB="either";S=[av.qt.url,av.qt.name,av.wmp.url,av.wmp.name];break;default:aB="single";S=[av[aC].url,av[aC].name]}ay.player="html";ay.content='<div class="sb-message">'+s(g.lang.errors[aB],S)+"</div>"}else{az=true}}else{if(ay.player=="inline"){au=e.exec(ay.content);if(au){aA=ag(au[1]);if(aA){ay.content=aA.innerHTML}else{az=true}}else{az=true}}else{if(ay.player=="swf"||ay.player=="flv"){K=(ay.options&&ay.options.flashVersion)||g.options.flashVersion;if(g.flash&&!g.flash.hasFlashPlayerVersion(K)){ay.width=310;ay.height=177}}}}if(az){g.gallery.splice(ax,1);if(ax<g.current){--g.current}else{if(ax==g.current){g.current=ax>0?ax-1:ax}}--ax}}}function af(K){if(!g.options.enableKeys){return}(K?j:a)(document,"keydown",W)}function W(au){if(au.metaKey||au.shiftKey||au.altKey||au.ctrlKey){return}var S=l(au),K;switch(S){case 81:case 88:case 27:K=g.close;break;case 37:K=g.previous;break;case 39:K=g.next;break;case 32:K=typeof aa=="number"?g.pause:g.play;break}if(K){G(au);K()}}function U(ay){af(false);var ax=g.getCurrent();var au=(ax.player=="inline"?"html":ax.player);if(typeof g[au]!="function"){throw"unknown player "+au}if(ay){g.player.remove();g.revertOptions();g.applyOptions(ax.options||{})}g.player=new g[au](ax,g.playerId);if(g.gallery.length>1){var av=g.gallery[g.current+1]||g.gallery[0];if(av.player=="img"){var S=new Image();S.src=av.content}var aw=g.gallery[g.current-1]||g.gallery[g.gallery.length-1];if(aw.player=="img"){var K=new Image();K.src=aw.content}}g.skin.onLoad(ay,r)}function r(){if(!w){return}if(typeof g.player.ready!="undefined"){var K=setInterval(function(){if(w){if(g.player.ready){clearInterval(K);K=null;g.skin.onReady(J)}}else{clearInterval(K);K=null}},10)}else{g.skin.onReady(J)}}function J(){if(!w){return}g.player.append(g.skin.body,g.dimensions);g.skin.onShow(q)}function q(){if(!w){return}if(g.player.onLoad){g.player.onLoad()}g.options.onFinish(g.getCurrent());if(!g.isPaused()){g.play()}af(true)}if(!Array.prototype.indexOf){Array.prototype.indexOf=function(S,au){var K=this.length>>>0;au=au||0;if(au<0){au+=K}for(;au<K;++au){if(au in this&&this[au]===S){return au}}return -1}}function X(){return(new Date).getTime()}function ao(K,au){for(var S in au){K[S]=au[S]}return K}function ac(av,aw){var S=0,K=av.length;for(var au=av[0];S<K&&aw.call(au,S,au)!==false;au=av[++S]){}}function s(S,K){return S.replace(/\{(\w+?)\}/g,function(au,av){return K[av]})}function aj(){}function ag(K){return document.getElementById(K)}function z(K){K.parentNode.removeChild(K)}var ak=true,L=true;function an(){var K=document.body,S=document.createElement("div");ak=typeof S.style.opacity==="string";S.style.position="fixed";S.style.margin=0;S.style.top="20px";K.appendChild(S,K.firstChild);L=S.offsetTop==20;K.removeChild(S)}g.getStyle=(function(){var K=/opacity=([^)]*)/,S=document.defaultView&&document.defaultView.getComputedStyle;return function(ax,aw){var av;if(!ak&&aw=="opacity"&&ax.currentStyle){av=K.test(ax.currentStyle.filter||"")?(parseFloat(RegExp.$1)/100)+"":"";return av===""?"1":av}if(S){var au=S(ax,null);if(au){av=au[aw]}if(aw=="opacity"&&av==""){av="1"}}else{av=ax.currentStyle[aw]}return av}})();g.appendHTML=function(au,S){if(au.insertAdjacentHTML){au.insertAdjacentHTML("BeforeEnd",S)}else{if(au.lastChild){var K=au.ownerDocument.createRange();K.setStartAfter(au.lastChild);var av=K.createContextualFragment(S);au.appendChild(av)}else{au.innerHTML=S}}};g.getWindowSize=function(K){if(document.compatMode==="CSS1Compat"){return document.documentElement["client"+K]}return document.body["client"+K]};g.setOpacity=function(au,K){var S=au.style;if(ak){S.opacity=(K==1?"":K)}else{S.zoom=1;if(K==1){if(typeof S.filter=="string"&&(/alpha/i).test(S.filter)){S.filter=S.filter.replace(/\s*[\w\.]*alpha\([^\)]*\);?/gi,"")}}else{S.filter=(S.filter||"").replace(/\s*[\w\.]*alpha\([^\)]*\)/gi,"")+" alpha(opacity="+(K*100)+")"}}};g.clearOpacity=function(K){g.setOpacity(K,1)};function C(K){return K.target}function Q(K){return[K.pageX,K.pageY]}function G(K){K.preventDefault()}function l(K){return K.keyCode}function j(au,S,K){jQuery(au).bind(S,K)}function a(au,S,K){jQuery(au).unbind(S,K)}jQuery.fn.shadowbox=function(K){return this.each(function(){var au=jQuery(this);var av=jQuery.extend({},K||{},jQuery.metadata?au.metadata():jQuery.meta?au.data():{});var S=this.className||"";av.width=parseInt((S.match(/w:(\d+)/)||[])[1])||av.width;av.height=parseInt((S.match(/h:(\d+)/)||[])[1])||av.height;Shadowbox.setup(au,av)})};var D=false,N;if(document.addEventListener){N=function(){document.removeEventListener("DOMContentLoaded",N,false);g.load()}}else{if(document.attachEvent){N=function(){if(document.readyState==="complete"){document.detachEvent("onreadystatechange",N);g.load()}}}}function i(){if(D){return}try{document.documentElement.doScroll("left")}catch(K){setTimeout(i,1);return}g.load()}function aq(){if(document.readyState==="complete"){return g.load()}if(document.addEventListener){document.addEventListener("DOMContentLoaded",N,false);T.addEventListener("load",g.load,false)}else{if(document.attachEvent){document.attachEvent("onreadystatechange",N);T.attachEvent("onload",g.load);var K=false;try{K=T.frameElement===null}catch(S){}if(document.documentElement.doScroll&&K){i()}}}}g.load=function(){if(D){return}if(!document.body){return setTimeout(g.load,13)}D=true;an();g.onReady();if(!g.options.skipSetup){g.setup()}g.skin.init()};g.plugins={};if(navigator.plugins&&navigator.plugins.length){var am=[];ac(navigator.plugins,function(K,S){am.push(S.name)});am=am.join(",");var d=am.indexOf("Flip4Mac")>-1;g.plugins={fla:am.indexOf("Shockwave Flash")>-1,qt:am.indexOf("QuickTime")>-1,wmp:!d&&am.indexOf("Windows Media")>-1,f4m:d}}else{var B=function(K){var S;try{S=new ActiveXObject(K)}catch(au){}return !!S};g.plugins={fla:B("ShockwaveFlash.ShockwaveFlash"),qt:B("QuickTime.QuickTime"),wmp:B("wmplayer.ocx"),f4m:false}}var c=/^(light|shadow)box/i,Z="shadowboxCacheKey",h=1;g.cache={};g.select=function(S){var au=[];if(!S){var K;ac(document.getElementsByTagName("a"),function(ax,ay){K=ay.getAttribute("rel");if(K&&c.test(K)){au.push(ay)}})}else{var aw=S.length;if(aw){if(typeof S=="string"){if(g.find){au=g.find(S)}}else{if(aw==2&&typeof S[0]=="string"&&S[1].nodeType){if(g.find){au=g.find(S[0],S[1])}}else{for(var av=0;av<aw;++av){au[av]=S[av]}}}}else{au.push(S)}}return au};g.setup=function(K,S){ac(g.select(K),function(au,av){g.addCache(av,S)})};g.teardown=function(K){ac(g.select(K),function(S,au){g.removeCache(au)})};g.addCache=function(au,K){var S=au[Z];if(S==p){S=h++;au[Z]=S;j(au,"click",b)}g.cache[S]=g.makeObject(au,K)};g.removeCache=function(K){a(K,"click",b);delete g.cache[K[Z]];K[Z]=null};g.getCache=function(S){var K=S[Z];return(K in g.cache&&g.cache[K])};g.clearCache=function(){for(var K in g.cache){g.removeCache(g.cache[K].link)}g.cache={}};function b(K){g.open(this);if(g.gallery.length){G(K)}}g.lang={code:"en",of:"of",loading:"loading",cancel:"Cancel",next:"Next",previous:"Previous",play:"Play",pause:"Pause",close:"Close",errors:{single:'You must install the <a href="{0}">{1}</a> browser plugin to view this content.',shared:'You must install both the <a href="{0}">{1}</a> and <a href="{2}">{3}</a> browser plugins to view this content.',either:'You must install either the <a href="{0}">{1}</a> or the <a href="{2}">{3}</a> browser plugin to view this content.'}};g.html=function(K,S){this.obj=K;this.id=S;this.height=K.height?parseInt(K.height,10):300;this.width=K.width?parseInt(K.width,10):500};g.html.prototype={append:function(K,S){var au=document.createElement("div");au.id=this.id;au.className="html";au.innerHTML=this.obj.content;K.appendChild(au)},remove:function(){var K=ag(this.id);if(K){z(K)}}};var al=false,A=[],H=["sb-nav-close","sb-nav-next","sb-nav-play","sb-nav-pause","sb-nav-previous"],F,ah,v,P=true;function ae(au,aE,aB,az,aF){var K=(aE=="opacity"),aA=K?g.setOpacity:function(aG,aH){aG.style[aE]=""+aH+"px"};if(az==0||(!K&&!g.options.animate)||(K&&!g.options.animateFade)){aA(au,aB);if(aF){aF()}return}var aC=parseFloat(g.getStyle(au,aE))||0;var aD=aB-aC;if(aD==0){if(aF){aF()}return}az*=1000;var av=X(),ay=g.ease,ax=av+az,aw;var S=setInterval(function(){aw=X();if(aw>=ax){clearInterval(S);S=null;aA(au,aB);if(aF){aF()}}else{aA(au,aC+ay((aw-av)/az)*aD)}},10)}function I(){F.style.height=g.getWindowSize("Height")+"px";F.style.width=g.getWindowSize("Width")+"px"}function ad(){F.style.top=document.documentElement.scrollTop+"px";F.style.left=document.documentElement.scrollLeft+"px"}function y(K){if(K){ac(A,function(S,au){au[0].style.visibility=au[1]||""})}else{A=[];ac(g.options.troubleElements,function(au,S){ac(document.getElementsByTagName(S),function(av,aw){A.push([aw,aw.style.visibility]);aw.style.visibility="hidden"})})}}function x(au,K){var S=ag("sb-nav-"+au);if(S){S.style.display=K?"":"none"}}function n(K,ax){var aw=ag("sb-loading"),au=g.getCurrent().player,av=(au=="img"||au=="html");if(K){g.setOpacity(aw,0);aw.style.display="block";var S=function(){g.clearOpacity(aw);if(ax){ax()}};if(av){ae(aw,"opacity",1,g.options.fadeDuration,S)}else{S()}}else{var S=function(){aw.style.display="none";g.clearOpacity(aw);if(ax){ax()}};if(av){ae(aw,"opacity",0,g.options.fadeDuration,S)}else{S()}}}function at(aC){var ax=g.getCurrent();ag("sb-title-inner").innerHTML=ax.title||"";var aD,az,S,aE,aA;if(g.options.displayNav){aD=true;var aB=g.gallery.length;if(aB>1){if(g.options.continuous){az=aA=true}else{az=(aB-1)>g.current;aA=g.current>0}}if(g.options.slideshowDelay>0&&g.hasNext()){aE=!g.isPaused();S=!aE}}else{aD=az=S=aE=aA=false}x("close",aD);x("next",az);x("play",S);x("pause",aE);x("previous",aA);var K="";if(g.options.displayCounter&&g.gallery.length>1){var aB=g.gallery.length;if(g.options.counterType=="skip"){var aw=0,av=aB,au=parseInt(g.options.counterLimit)||0;if(au<aB&&au>2){var ay=Math.floor(au/2);aw=g.current-ay;if(aw<0){aw+=aB}av=g.current+(au-ay);if(av>aB){av-=aB}}while(aw!=av){if(aw==aB){aw=0}K+='<a onclick="Shadowbox.change('+aw+');"';if(aw==g.current){K+=' class="sb-counter-current"'}K+=">"+(++aw)+"</a>"}}else{K=[g.current+1,g.lang.of,aB].join(" ")}}ag("sb-counter").innerHTML=K;aC()}function u(av){var K=ag("sb-title-inner"),au=ag("sb-info-inner"),S=0.35;K.style.visibility=au.style.visibility="";if(K.innerHTML!=""){ae(K,"marginTop",0,S)}ae(au,"marginTop",0,S,av)}function ab(au,aA){var ay=ag("sb-title"),K=ag("sb-info"),av=ay.offsetHeight,aw=K.offsetHeight,ax=ag("sb-title-inner"),az=ag("sb-info-inner"),S=(au?0.35:0);ae(ax,"marginTop",av,S);ae(az,"marginTop",aw*-1,S,function(){ax.style.visibility=az.style.visibility="hidden";aA()})}function E(K,av,S,ax){var aw=ag("sb-wrapper-inner"),au=(S?g.options.resizeDuration:0);ae(v,"top",av,au);ae(aw,"height",K,au,ax)}function t(K,av,S,aw){var au=(S?g.options.resizeDuration:0);ae(v,"left",av,au);ae(v,"width",K,au,aw)}function R(aA,au){var aw=ag("sb-body-inner"),aA=parseInt(aA),au=parseInt(au),S=v.offsetHeight-aw.offsetHeight,K=v.offsetWidth-aw.offsetWidth,ay=ah.offsetHeight,az=ah.offsetWidth,ax=parseInt(g.options.viewportPadding)||20,av=(g.player&&g.options.handleOversize!="drag");return g.setDimensions(aA,au,ay,az,S,K,ax,av)}var k={};k.markup='<div id="sb-container"><div id="sb-overlay"></div><div id="sb-wrapper"><div id="sb-title"><div id="sb-title-inner"></div></div><div id="sb-wrapper-inner"><div id="sb-body"><div id="sb-body-inner"></div><div id="sb-loading"><div id="sb-loading-inner"><span>{loading}</span></div></div></div></div><div id="sb-info"><div id="sb-info-inner"><div id="sb-counter"></div><div id="sb-nav"><a id="sb-nav-close" title="{close}" onclick="Shadowbox.close()"></a><a id="sb-nav-next" title="{next}" onclick="Shadowbox.next()"></a><a id="sb-nav-play" title="{play}" onclick="Shadowbox.play()"></a><a id="sb-nav-pause" title="{pause}" onclick="Shadowbox.pause()"></a><a id="sb-nav-previous" title="{previous}" onclick="Shadowbox.previous()"></a></div></div></div></div></div>';k.options={animSequence:"sync",counterLimit:10,counterType:"default",displayCounter:true,displayNav:true,fadeDuration:0.35,initialHeight:160,initialWidth:320,modal:false,overlayColor:"#000",overlayOpacity:0.5,resizeDuration:0.35,showOverlay:true,troubleElements:["select","object","embed","canvas"]};k.init=function(){g.appendHTML(document.body,s(k.markup,g.lang));k.body=ag("sb-body-inner");F=ag("sb-container");ah=ag("sb-overlay");v=ag("sb-wrapper");if(!L){F.style.position="absolute"}if(!ak){var au,K,S=/url\("(.*\.png)"\)/;ac(H,function(aw,ax){au=ag(ax);if(au){K=g.getStyle(au,"backgroundImage").match(S);if(K){au.style.backgroundImage="none";au.style.filter="progid:DXImageTransform.Microsoft.AlphaImageLoader(enabled=true,src="+K[1]+",sizingMethod=scale);"}}})}var av;j(T,"resize",function(){if(av){clearTimeout(av);av=null}if(w){av=setTimeout(k.onWindowResize,10)}})};k.onOpen=function(K,au){P=false;F.style.display="block";I();var S=R(g.options.initialHeight,g.options.initialWidth);E(S.innerHeight,S.top);t(S.width,S.left);if(g.options.showOverlay){ah.style.backgroundColor=g.options.overlayColor;g.setOpacity(ah,0);if(!g.options.modal){j(ah,"click",g.close)}al=true}if(!L){ad();j(T,"scroll",ad)}y();F.style.visibility="visible";if(al){ae(ah,"opacity",g.options.overlayOpacity,g.options.fadeDuration,au)}else{au()}};k.onLoad=function(S,K){n(true);while(k.body.firstChild){z(k.body.firstChild)}ab(S,function(){if(!w){return}if(!S){v.style.visibility="visible"}at(K)})};k.onReady=function(av){if(!w){return}var S=g.player,au=R(S.height,S.width);var K=function(){u(av)};switch(g.options.animSequence){case"hw":E(au.innerHeight,au.top,true,function(){t(au.width,au.left,true,K)});break;case"wh":t(au.width,au.left,true,function(){E(au.innerHeight,au.top,true,K)});break;default:t(au.width,au.left,true);E(au.innerHeight,au.top,true,K)}};k.onShow=function(K){n(false,K);P=true};k.onClose=function(){if(!L){a(T,"scroll",ad)}a(ah,"click",g.close);v.style.visibility="hidden";var K=function(){F.style.visibility="hidden";F.style.display="none";y(true)};if(al){ae(ah,"opacity",0,g.options.fadeDuration,K)}else{K()}};k.onPlay=function(){x("play",false);x("pause",true)};k.onPause=function(){x("pause",false);x("play",true)};k.onWindowResize=function(){if(!P){return}I();var K=g.player,S=R(K.height,K.width);t(S.width,S.left);E(S.innerHeight,S.top);if(K.onWindowResize){K.onWindowResize()}};g.skin=k;T.Shadowbox=g})(window);
