/* http://www.aura-ilmu.com/ */ document.createElement('main');document.createElement('article');document.createElement('section');document.createElement('aside');document.createElement('hgroup');document.createElement('nav');document.createElement('header');document.createElement('footer');document.createElement('figure');document.createElement('figcaption');
/*! lazysizes - v1.0.1 -  Licensed MIT */ !function(a,b){var c=b(a,a.document);a.lazySizes=c,"object"==typeof module&&module.exports?module.exports=c:"function"==typeof define&&define.amd&&define(c)}(window,function(a,b){"use strict";if(b.getElementsByClassName){var c,d=b.documentElement,e=a.addEventListener,f=/^picture$/i,g=["load","error","lazyincluded","_lazyloaded"],h=function(a,b){var c=new RegExp("(\\s|^)"+b+"(\\s|$)");return a.className.match(c)&&c},i=function(a,b){h(a,b)||(a.className+=" "+b)},j=function(a,b){var c;(c=h(a,b))&&(a.className=a.className.replace(c," "))},k=function(a,b,c){var d=c?"addEventListener":"removeEventListener";c&&k(a,b),g.forEach(function(c){a[d](c,b)})},l=function(a,c,d,e,f){var g=b.createEvent("Event");return g.initEvent(c,!e,!f),g.details=d||{},a.dispatchEvent(g),g},m=function(b,d){var e;a.HTMLPictureElement||((e=a.picturefill||a.respimage||c.pf)?e({reevaluate:!0,reparse:!0,elements:[b]}):d&&d.src&&(b.src=d.src))},n=function(a,b){return getComputedStyle(a,null)[b]},o=function(a,b){for(var d=a.offsetWidth;d<c.minSize&&b&&!a._lazysizesWidth;)d=b.offsetWidth,b=b.parentNode;return d},p=function(a){var c,d,e=function(){c&&(c=!1,a())},f=function(){clearInterval(d),b.hidden||(e(),d=setInterval(e,51))};return b.addEventListener("visibilitychange",f),f(),function(a){c=!0,a===!0&&e()}},q=function(){var g,o,q,s,t,u,v,w,x,y,z,A,B,C=/^img$/i,D=/^iframe$/i,E="onscroll"in a&&!/glebot/.test(navigator.userAgent),F=0,G=0,H=0,I=0,J=0,K=function(a){I--,a&&a.target&&k(a.target,K),(!a||0>I||!a.target)&&(I=0)},L=function(a,b){var c,d=a,e="hidden"!=n(a,"visibility");for(w-=b,z+=b,x-=b,y+=b;e&&(d=d.offsetParent);)e=q&&2>I||(n(d,"opacity")||1)>0,e&&"visible"!=n(d,"overflow")&&(c=d.getBoundingClientRect(),e=y>c.left&&x<c.right&&z>c.top-1&&w<c.bottom+1);return e},M=function(){var a,b,d,e,f,h,i,j,k,l=g.length;if(l&&(t=c.loadMode)){for(b=Date.now(),a=J,H++,B>G&&1>I&&H>5&&t>2?(G=B,H=0):G=G!=A&&t>1&&H>4?A:F;l>a;a++,J++)if(g[a]&&!g[a]._lazyRace)if(E){if((j=g[a].getAttribute("data-expand"))&&(h=1*j)||(h=G),!(I>6&&(!j||"src"in g[a])))if(h>F&&(2>t||I>3)&&(h=F),k!==h&&(u=innerWidth+h,v=innerHeight+h,i=-1*h,k=h),d=g[a].getBoundingClientRect(),(z=d.bottom)>=i&&(w=d.top)<=v&&(y=d.right)>=i&&(x=d.left)<=u&&(z||y||x||w)&&(q&&B>G&&3>I&&4>H&&!j&&t>2||L(g[a],h)))J--,b+=2,Q(g[a]),f=!0;else{if(Date.now()-b>3)return J++,void N();!f&&q&&!e&&3>I&&4>H&&t>2&&(o[0]||c.preloadAfterLoad)&&(o[0]||!j&&(z||y||x||w||"auto"!=g[a].getAttribute(c.sizesAttr)))&&(e=o[0]||g[a])}}else Q(g[a]);J=0,e&&!f&&Q(e)}},N=p(M),O=function(a){i(a.target,c.loadedClass),j(a.target,c.loadingClass),k(a.target,O)},P=function(a,b){try{a.contentWindow.location.replace(b)}catch(c){a.setAttribute("src",b)}},Q=function(a,b){var d,e,g,n,o,p,t,u,v,w,x,y=a.currentSrc||a.src,z=C.test(a.nodeName),A=a.getAttribute(c.sizesAttr)||a.getAttribute("sizes"),B="auto"==A;if(!B&&q||!z||!y||a.complete||h(a,c.errorClass)){if(a._lazyRace=!0,!(v=l(a,"lazybeforeunveil",{force:!!b})).defaultPrevented){if(A&&(B?r.updateElem(a,!0):a.setAttribute("sizes",A)),p=a.getAttribute(c.srcsetAttr),o=a.getAttribute(c.srcAttr),z&&(t=a.parentNode,u=f.test(t.nodeName||"")),w=v.details.firesLoad||"src"in a&&(p||o||u),w&&(I++,k(a,K,!0),clearTimeout(s),s=setTimeout(K,3e3)),u)for(d=t.getElementsByTagName("source"),e=0,g=d.length;g>e;e++)(x=c.customMedia[d[e].getAttribute("data-media")||d[e].getAttribute("media")])&&d[e].setAttribute("media",x),n=d[e].getAttribute(c.srcsetAttr),n&&d[e].setAttribute("srcset",n);p?a.setAttribute("srcset",p):o&&(D.test(a.nodeName)?P(a,o):a.setAttribute("src",o)),i(a,c.loadingClass),k(a,O,!0)}setTimeout(function(){a._lazyRace&&delete a._lazyRace,"auto"==A&&i(a,c.autosizesClass),(p||u)&&m(a,{src:o}),j(a,c.lazyClass),(!w||a.complete&&y==(a.currentSrc||a.src))&&(w&&K(v),O(v)),a=null})}},R=function(){var a,b=function(){c.loadMode=3,N()};q=!0,H+=8,c.loadMode=3,N(!0),e("scroll",function(){3==c.loadMode&&(c.loadMode=2),clearTimeout(a),a=setTimeout(b,66)},!0)};return{_:function(){g=b.getElementsByClassName(c.lazyClass),o=b.getElementsByClassName(c.lazyClass+" "+c.preloadClass),A=c.expand,B=A*c.expFactor,e("scroll",N,!0),e("resize",N,!0),a.MutationObserver?new MutationObserver(N).observe(d,{childList:!0,subtree:!0,attributes:!0}):(d.addEventListener("DOMNodeInserted",N,!0),d.addEventListener("DOMAttrModified",N,!0),setInterval(N,3e3)),e("hashchange",N,!0),["transitionstart","transitionend","load","focus","mouseover","animationend","click"].forEach(function(a){b.addEventListener(a,N,!0)}),(q=/d$|^c/.test(b.readyState))?R():(e("load",R),b.addEventListener("DOMContentLoaded",N)),N(g.length>0)},checkElems:N,unveil:Q}}(),r=function(){var a,d=function(a,b){var c,d,e,g,h,i=a.parentNode;if(i&&(c=o(a,i),h=l(a,"lazybeforesizes",{width:c,dataAttr:!!b}),!h.defaultPrevented&&(c=h.details.width,c&&c!==a._lazysizesWidth))){if(a._lazysizesWidth=c,c+="px",a.setAttribute("sizes",c),f.test(i.nodeName||""))for(d=i.getElementsByTagName("source"),e=0,g=d.length;g>e;e++)d[e].setAttribute("sizes",c);h.details.dataAttr||m(a,h.details)}},g=function(){var b,c=a.length;if(c)for(b=0;c>b;b++)d(a[b])},h=p(g);return{_:function(){a=b.getElementsByClassName(c.autosizesClass),e("resize",h)},checkElems:h,updateElem:d}}(),s=function(){s.i||(s.i=!0,r._(),q._())};return function(){var b,d={lazyClass:"lazy",loadedClass:"lazyloaded",loadingClass:"lazyloading",preloadClass:"lazypreload",errorClass:"lazyerror",autosizesClass:"lazyautosizes",srcAttr:"data-src",srcsetAttr:"data-srcset",sizesAttr:"data-sizes",minSize:50,customMedia:{},init:!0,expFactor:2,expand:100,loadMode:2};c=a.lazySizesConfig||{};for(b in d)b in c||(c[b]=d[b]);a.lazySizesConfig=c,setTimeout(function(){c.init&&s()})}(),{cfg:c,autoSizer:r,loader:q,init:s,uP:m,aC:i,rC:j,hC:h,fire:l,gW:o}}});
(function(a,b){a.extend({stickysidebarscroll:function(c,e){if(e&&e.offset){e.offset.bottom=parseInt(e.offset.bottom,10);e.offset.top=parseInt(e.offset.top,30)}else{e.offset={bottom:100,top:0}}var c=a(c);if(c&&c.offset()){var j=c.offset().top,q=c.offset().left,o=c.outerHeight(true),k=c.outerWidth(),h=c.css("position"),g=c.css("top"),f=parseInt(c.css("marginTop"),10),n=a(document).height(),l=a(document).height()-e.offset.bottom,m=0,d=false,i=false,p=false;if(e.forcemargin===true||navigator.userAgent.match(/\bMSIE (4|5|6)\./)||navigator.userAgent.match(/\bOS (3|4|5|6)_/)||navigator.userAgent.match(/\bAndroid (1|2|3|4)\./i)){p=true}a(window).bind("scroll resize orientationchange load",c,function(t){if(n!==a(document).height()){l=a(document).height()-e.offset.bottom;n=a(document).height()}if(i==false){j=c.offset().top}var s=c.outerHeight(),r=a(window).scrollTop();if(p&&document.activeElement&&document.activeElement.nodeName==="INPUT"){return}i=true;if(r>=(j-(f?f:0)-e.offset.top)){if(l<(r+s+f+e.offset.top)){m=(r+s+f+e.offset.top)-l}else{m=0}if(p){c.css({marginTop:parseInt(((f?f:0)+(r-j-m)+2*e.offset.top),10)+"px"})}else{c.css({position:"fixed",top:(e.offset.top-m)+"px",width:k+"px"})}}else{i=false;q=c.offset().left;c.css({position:h,top:g,left:q,width:k+"px",marginTop:(f?f:0)+"px"})}})}}})})(jQuery);
shortcut={all_shortcuts:{},add:function(a,b,c){var d={type:"keydown",propagate:!1,disable_in_input:!1,target:document,keycode:!1};if(c)for(var e in d)"undefined"==typeof c[e]&&(c[e]=d[e]);else c=d;d=c.target,"string"==typeof c.target&&(d=document.getElementById(c.target)),a=a.toLowerCase(),e=function(d){d=d||window.event;if(c.disable_in_input){var e;d.target?e=d.target:d.srcElement&&(e=d.srcElement),3==e.nodeType&&(e=e.parentNode);if("INPUT"==e.tagName||"TEXTAREA"==e.tagName)return}d.keyCode?code=d.keyCode:d.which&&(code=d.which),e=String.fromCharCode(code).toLowerCase(),188==code&&(e=","),190==code&&(e=".");var f=a.split("+"),g=0,h={"`":"~",1:"!",2:"@",3:"#",4:"$",5:"%",6:"^",7:"&",8:"*",9:"(",0:")","-":"_","=":"+",";":":","'":'"',",":"<",".":">","/":"?","\\":"|"},i={esc:27,escape:27,tab:9,space:32,"return":13,enter:13,backspace:8,scrolllock:145,scroll_lock:145,scroll:145,capslock:20,caps_lock:20,caps:20,numlock:144,num_lock:144,num:144,pause:19,"break":19,insert:45,home:36,"delete":46,end:35,pageup:33,page_up:33,pu:33,pagedown:34,page_down:34,pd:34,left:37,up:38,right:39,down:40,f1:112,f2:113,f3:114,f4:115,f5:116,f6:117,f7:118,f8:119,f9:120,f10:121,f11:122,f12:123},j=!1,l=!1,m=!1,n=!1,o=!1,p=!1,q=!1,r=!1;d.ctrlKey&&(n=!0),d.shiftKey&&(l=!0),d.altKey&&(p=!0),d.metaKey&&(r=!0);for(var s=0;k=f[s],s<f.length;s++)"ctrl"==k||"control"==k?(g++,m=!0):"shift"==k?(g++,j=!0):"alt"==k?(g++,o=!0):"meta"==k?(g++,q=!0):1<k.length?i[k]==code&&g++:c.keycode?c.keycode==code&&g++:e==k?g++:h[e]&&d.shiftKey&&(e=h[e],e==k&&g++);if(g==f.length&&n==m&&l==j&&p==o&&r==q&&(b(d),!c.propagate))return d.cancelBubble=!0,d.returnValue=!1,d.stopPropagation&&(d.stopPropagation(),d.preventDefault()),!1},this.all_shortcuts[a]={callback:e,target:d,event:c.type},d.addEventListener?d.addEventListener(c.type,e,!1):d.attachEvent?d.attachEvent("on"+c.type,e):d["on"+c.type]=e},remove:function(a){var a=a.toLowerCase(),b=this.all_shortcuts[a];delete this.all_shortcuts[a];if(b){var a=b.event,c=b.target,b=b.callback;c.detachEvent?c.detachEvent("on"+a,b):c.removeEventListener?c.removeEventListener(a,b,!1):c["on"+a]=!1}}},shortcut.add("Ctrl+U",function(){top.location.href="http://www.aura-ilmu.com"});
jQuery(function($){$(document).ready(function(){var contentButton = [];var contentTop = [];var content = [];var lastScrollTop = 0;var scrollDir = '';var itemClass = '';var itemHover = '';var menuSize = null;var stickyHeight = 0;var stickyMarginB = 0;var currentMarginT = 0;var topMargin = 0;$(window).scroll(function(event){var st = $(this).scrollTop();if (st > lastScrollTop){scrollDir = 'down';} else {scrollDir = 'up';}lastScrollTop = st;});$.fn.stickUp = function( options ) {$(this).addClass('stuckMenu');var objn = 0;if(options != null) {for(var o in options.parts) {if (options.parts.hasOwnProperty(o)){content[objn] = options.parts[objn];objn++;}}if(objn == 0) {console.log('error:needs arguments');}itemClass = options.itemClass;itemHover = options.itemHover;if(options.topMargin != null) {if(options.topMargin == 'auto') {topMargin = parseInt($('.stuckMenu').css('margin-top'));} else {if(isNaN(options.topMargin) && options.topMargin.search("px") > 0){topMargin = parseInt(options.topMargin.replace("px",""));} else if(!isNaN(parseInt(options.topMargin))) {topMargin = parseInt(options.topMargin);} else {console.log("incorrect argument, ignored.");topMargin = 0;}	}} else {topMargin = 0;}menuSize = $('.'+itemClass).size();}stickyHeight = parseInt($(this).height());stickyMarginB = parseInt($(this).css('margin-bottom'));currentMarginT = parseInt($(this).next().closest('div').css('margin-top'));vartop = parseInt($(this).offset().top);};$(document).on('scroll', function() {varscroll = parseInt($(document).scrollTop());if(menuSize != null){for(var i=0;i < menuSize;i++){contentTop[i] = $('#'+content[i]+'').offset().top;function bottomView(i) {contentView = $('#'+content[i]+'').height()*.4;testView = contentTop[i] - contentView;if(varscroll > testView){$('.'+itemClass).removeClass(itemHover);$('.'+itemClass+':eq('+i+')').addClass(itemHover);} else if(varscroll < 50){$('.'+itemClass).removeClass(itemHover);$('.'+itemClass+':eq(0)').addClass(itemHover);}}if(scrollDir == 'down' && varscroll > contentTop[i]-50 && varscroll < contentTop[i]+50) {$('.'+itemClass).removeClass(itemHover);$('.'+itemClass+':eq('+i+')').addClass(itemHover);}if(scrollDir == 'up') {bottomView(i);}}}if(vartop < varscroll + topMargin){$('.stuckMenu').addClass('isStuck');$('.stuckMenu').next().closest('div').css({'margin-top': stickyHeight + stickyMarginB + currentMarginT + 'px'}, 10);$('.stuckMenu').css("position","fixed");$('.isStuck').css({top: '0px'}, 10, function(){});};if(varscroll + topMargin < vartop){$('.stuckMenu').removeClass('isStuck');$('.stuckMenu').next().closest('div').css({'margin-top': currentMarginT + 'px'}, 10);$('.stuckMenu').css("position","relative");};});});});
