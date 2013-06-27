var TubePress=(function(g,m){var a="tubepress",i=m.location,e=m.document,b=true,q="src/main/web/js",p=g.isFunction,d=(function(){var s=function(v){return typeof v!=="undefined"},u=function(w){w=w.replace(/[\[]/,"\\[").replace(/[\]]/,"\\]");var v="[\\?&]"+w+"=([^&#]*)",y=new RegExp(v),x=y.exec(i.search);return x===null?"":decodeURIComponent(x[1].replace(/\+/g," "))},t=function(v){var w=parseInt(v,10);return isNaN(w)?0:w},r=function(y,x,v){if(x()===b){y();return}var w=function(){r(y,x,v)};setTimeout(w,v)};return{isDefined:s,getParameterByName:u,parseIntOrZero:t,callWhenTrue:r}}()),o=(function(){var t=i.search.indexOf(a+"_debug=true")!==-1,w=m.console,r=d.isDefined(w),s=function(){return t&&r},v=function(x){w.log(x)},u=function(x){w.dir(x)};return{on:s,log:v,dir:u}}()),k=(function(){var s=false,r,t=function(){if(!s){var v=e.getElementsByTagName("script"),u=0,w;for(u;u<v.length;u+=1){w=v[u].src;if(w.indexOf("/"+a+".js")!==-1){r=w.substr(0,w.lastIndexOf("/")).split("?")[0].replace(q,"");break}}}return r};return{getBaseUrl:t}}()),c=(function(){var s=g({}),r=function(){s.bind.apply(s,arguments)},u=function(){s.unbind.apply(s,arguments)},t=function(){if(o.on()){var v=arguments;o.log('Firing "'+v[0]);o.dir(v[1])}s.trigger.apply(s,arguments)};return{subscribe:r,unsubscribe:u,publish:t}}()),n=(function(){var v=[],t=function(B){return v[B]===b},r=function(B){if(B.indexOf("http")===0){return B}return k.getBaseUrl()+B},z=function(C,B){if(o.on()){o.log("Injecting "+B+": "+C)}},A=function(B){e.getElementsByTagName("head")[0].appendChild(B)},y=function(C){C=r(C);if(t(C)){return}v[C]=b;var B=e.createElement("link");B.rel="stylesheet";B.type="text/css";B.href=C;z(C,"CSS");A(B)},s=function(C){C=r(C);if(t(C)){return}v[C]=b;z(C,"JS");var B=e.createElement("script");B.type="text/javascript";B.src=C;B.async=b;e.getElementsByTagName("head")[0].appendChild(B)},x=function(){s(q+"/gallery.js")},w=function(){s(q+"/playerApi.js")},u=function(){s(q+"/ajaxSearch.js")};return{loadJs:s,loadCss:y,loadGalleryJs:x,loadPlayerApiJs:w,loadAjaxSearchJs:u}}()),l=(function(){var r=function(u,v){var t=o.on(),x,s=m[u],w=function(y){var A=y[0],z=y.slice(1);v[A].apply(this,z)};if(d.isDefined(s)){x=s.length;if(t){o.log("Running "+x+" queue items for "+u)}s.reverse();while(s.length){w(s.pop())}}if(t){o.log(u+" is now connected")}m[u]={push:w}};return{processQueueCalls:r}}()),j=(function(){var r=g.fn.jquery,u=/1\.6|7|8|9\.[0-9]+/.test(r)!==false,t,s=function(v){return t(v)};if(u){t=function(v){return g.parseJSON(v)}}else{t=function(v){if(typeof v!=="string"||!v){return null}v=g.trim(v);if(/^[\],:{}\s]*$/.test(v.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:\s*\[)+/g,""))){return(m.JSON&&m.JSON.parse)?m.JSON.parse(v):(new Function("return "+v))()}else{throw"Invalid JSON: "+v}}}return{parse:s}}()),h=(function(){var s=function(t){g(t).fadeTo(0,0.3)},r=function(t){g(t).fadeTo(0,1)};return{applyLoadingStyle:s,removeLoadingStyle:r}}()),f=(function(){var t=function(C,w,z,v,y,B){var x=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,A=function(E){var F=E.responseText,D=v?g("<div>").append(F.replace(x,"")).find(v):F;g(z).html(D);if(p(B)){B()}};if(p(y)){y()}g.ajax({url:w,type:C,dataType:"html",complete:A})},s=function(z,w,x,y,v){g.ajax({url:w,type:z,data:x,dataType:v,complete:y})},u=function(v){h.removeLoadingStyle(v)},r=function(B,w,z,v,y,A){var x=function(){u(z)};h.applyLoadingStyle(z);if(p(A)){x=function(){u(z);A()}}t(B,w,z,v,y,x)};return{loadAndStyle:r,get:s}}());(function(){var r="tubePress";l.processQueueCalls(r+"DomInjector",n);l.processQueueCalls(r+"Beacon",c)}());return{Ajax:{Executor:f,LoadStyler:h},AsyncUtil:l,Beacon:c,DomInjector:n,Environment:k,Lang:{Utils:d,JsonParser:j},Logger:o}}(jQuery,window));