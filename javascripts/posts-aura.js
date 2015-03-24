/* http://www.aura-ilmu.com/ */
document.createElement('main');document.createElement('article');document.createElement('section');document.createElement('aside');document.createElement('hgroup');document.createElement('nav');document.createElement('header');document.createElement('footer');document.createElement('figure');document.createElement('figcaption');
/* jQuery-lazyload-any v0.1.4 * https://github.com/emn178/jquery-lazyload-any * Copyright 2014, emn178@gmail.com * Licensed under the MIT license: * http://www.opensource.org/licenses/MIT */
(function(f,g,i,d){f.expr[":"]["jquery-lazyload-any-appear"]=function(l){return f(l).data("jquery-lazyload-any-appear")};function h(){var l=f(this);if(e(this)){l.trigger("appear")}}function e(o){var p=o.getBoundingClientRect();var m=y1=-f(o).data("jquery-lazyload-any").threshold;var n=b-y1;var l=a-m;return(p.top>=y1&&p.top<=n||p.bottom>=y1&&p.bottom<=n)&&(p.left>=m&&p.left<=l||p.right>=m&&p.right<=l)}var b,a;function c(){b=g.innerHeight||i.documentElement.clientHeight;a=g.innerWidth||i.documentElement.clientWidth;j()}function j(){f(":jquery-lazyload-any-appear").each(h)}function k(){var m=f(this);var l=m.data("jquery-lazyload-any");m.unbind(l.trigger);var o=m.contents().filter(function(){return this.nodeType===8}).get(0);var n=f(o&&o.data);m.replaceWith(n);if(f.isFunction(l.load)){l.load.call(n,n)}}f.fn.lazyload2=function(m){var n={threshold:0,trigger:"appear"};f.extend(n,m);var l=n.trigger.split(" ");this.data("jquery-lazyload-any-appear",f.inArray("appear",l)!=-1);this.data("jquery-lazyload-any",n);this.bind(n.trigger,k)};f(i).ready(function(){f(g).bind("resize",c);f(g).bind("scroll",j);c()})})(jQuery,window,document);
/* Navigasi */
$(function(){var sticky_navigation_offset_top=$('#nav-wrap').offset().top;var sticky_navigation=function(){var scroll_top=$(window).scrollTop();if(scroll_top>sticky_navigation_offset_top){$('#nav-wrap').css({'position':'fixed','top':0,'left':0})}else{$('#nav-wrap').css({'position':'relative'})}};sticky_navigation();$(window).scroll(function(){sticky_navigation()});$('a[href="#"]').click(function(event){event.preventDefault()})});
/* Sidebar */
(function(a,b){a.extend({stickysidebarscroll:function(c,e){if(e&&e.offset){e.offset.bottom=parseInt(e.offset.bottom,10);e.offset.top=parseInt(e.offset.top,30)}else{e.offset={bottom:100,top:0}}var c=a(c);if(c&&c.offset()){var j=c.offset().top,q=c.offset().left,o=c.outerHeight(true),k=c.outerWidth(),h=c.css("position"),g=c.css("top"),f=parseInt(c.css("marginTop"),10),n=a(document).height(),l=a(document).height()-e.offset.bottom,m=0,d=false,i=false,p=false;if(e.forcemargin===true||navigator.userAgent.match(/\bMSIE (4|5|6)\./)||navigator.userAgent.match(/\bOS (3|4|5|6)_/)||navigator.userAgent.match(/\bAndroid (1|2|3|4)\./i)){p=true}a(window).bind("scroll resize orientationchange load",c,function(t){if(n!==a(document).height()){l=a(document).height()-e.offset.bottom;n=a(document).height()}if(i==false){j=c.offset().top}var s=c.outerHeight(),r=a(window).scrollTop();if(p&&document.activeElement&&document.activeElement.nodeName==="INPUT"){return}i=true;if(r>=(j-(f?f:0)-e.offset.top)){if(l<(r+s+f+e.offset.top)){m=(r+s+f+e.offset.top)-l}else{m=0}if(p){c.css({marginTop:parseInt(((f?f:0)+(r-j-m)+2*e.offset.top),10)+"px"})}else{c.css({position:"fixed",top:(e.offset.top-m)+"px",width:k+"px"})}}else{i=false;q=c.offset().left;c.css({position:h,top:g,left:q,width:k+"px",marginTop:(f?f:0)+"px"})}})}}})})(jQuery);
/*! lazysizes - v1.0.1 -  Licensed MIT */
!function(a,b){var c=b(a,a.document);a.lazySizes=c,"object"==typeof module&&module.exports?module.exports=c:"function"==typeof define&&define.amd&&define(c)}(window,function(a,b){"use strict";if(b.getElementsByClassName){var c,d=b.documentElement,e=a.addEventListener,f=/^picture$/i,g=["load","error","lazyincluded","_lazyloaded"],h=function(a,b){var c=new RegExp("(\\s|^)"+b+"(\\s|$)");return a.className.match(c)&&c},i=function(a,b){h(a,b)||(a.className+=" "+b)},j=function(a,b){var c;(c=h(a,b))&&(a.className=a.className.replace(c," "))},k=function(a,b,c){var d=c?"addEventListener":"removeEventListener";c&&k(a,b),g.forEach(function(c){a[d](c,b)})},l=function(a,c,d,e,f){var g=b.createEvent("Event");return g.initEvent(c,!e,!f),g.details=d||{},a.dispatchEvent(g),g},m=function(b,d){var e;a.HTMLPictureElement||((e=a.picturefill||a.respimage||c.pf)?e({reevaluate:!0,reparse:!0,elements:[b]}):d&&d.src&&(b.src=d.src))},n=function(a,b){return getComputedStyle(a,null)[b]},o=function(a,b){for(var d=a.offsetWidth;d<c.minSize&&b&&!a._lazysizesWidth;)d=b.offsetWidth,b=b.parentNode;return d},p=function(a){var c,d,e=function(){c&&(c=!1,a())},f=function(){clearInterval(d),b.hidden||(e(),d=setInterval(e,51))};return b.addEventListener("visibilitychange",f),f(),function(a){c=!0,a===!0&&e()}},q=function(){var g,o,q,s,t,u,v,w,x,y,z,A,B,C=/^img$/i,D=/^iframe$/i,E="onscroll"in a&&!/glebot/.test(navigator.userAgent),F=0,G=0,H=0,I=0,J=0,K=function(a){I--,a&&a.target&&k(a.target,K),(!a||0>I||!a.target)&&(I=0)},L=function(a,b){var c,d=a,e="hidden"!=n(a,"visibility");for(w-=b,z+=b,x-=b,y+=b;e&&(d=d.offsetParent);)e=q&&2>I||(n(d,"opacity")||1)>0,e&&"visible"!=n(d,"overflow")&&(c=d.getBoundingClientRect(),e=y>c.left&&x<c.right&&z>c.top-1&&w<c.bottom+1);return e},M=function(){var a,b,d,e,f,h,i,j,k,l=g.length;if(l&&(t=c.loadMode)){for(b=Date.now(),a=J,H++,B>G&&1>I&&H>5&&t>2?(G=B,H=0):G=G!=A&&t>1&&H>4?A:F;l>a;a++,J++)if(g[a]&&!g[a]._lazyRace)if(E){if((j=g[a].getAttribute("data-expand"))&&(h=1*j)||(h=G),!(I>6&&(!j||"src"in g[a])))if(h>F&&(2>t||I>3)&&(h=F),k!==h&&(u=innerWidth+h,v=innerHeight+h,i=-1*h,k=h),d=g[a].getBoundingClientRect(),(z=d.bottom)>=i&&(w=d.top)<=v&&(y=d.right)>=i&&(x=d.left)<=u&&(z||y||x||w)&&(q&&B>G&&3>I&&4>H&&!j&&t>2||L(g[a],h)))J--,b+=2,Q(g[a]),f=!0;else{if(Date.now()-b>3)return J++,void N();!f&&q&&!e&&3>I&&4>H&&t>2&&(o[0]||c.preloadAfterLoad)&&(o[0]||!j&&(z||y||x||w||"auto"!=g[a].getAttribute(c.sizesAttr)))&&(e=o[0]||g[a])}}else Q(g[a]);J=0,e&&!f&&Q(e)}},N=p(M),O=function(a){i(a.target,c.loadedClass),j(a.target,c.loadingClass),k(a.target,O)},P=function(a,b){try{a.contentWindow.location.replace(b)}catch(c){a.setAttribute("src",b)}},Q=function(a,b){var d,e,g,n,o,p,t,u,v,w,x,y=a.currentSrc||a.src,z=C.test(a.nodeName),A=a.getAttribute(c.sizesAttr)||a.getAttribute("sizes"),B="auto"==A;if(!B&&q||!z||!y||a.complete||h(a,c.errorClass)){if(a._lazyRace=!0,!(v=l(a,"lazybeforeunveil",{force:!!b})).defaultPrevented){if(A&&(B?r.updateElem(a,!0):a.setAttribute("sizes",A)),p=a.getAttribute(c.srcsetAttr),o=a.getAttribute(c.srcAttr),z&&(t=a.parentNode,u=f.test(t.nodeName||"")),w=v.details.firesLoad||"src"in a&&(p||o||u),w&&(I++,k(a,K,!0),clearTimeout(s),s=setTimeout(K,3e3)),u)for(d=t.getElementsByTagName("source"),e=0,g=d.length;g>e;e++)(x=c.customMedia[d[e].getAttribute("data-media")||d[e].getAttribute("media")])&&d[e].setAttribute("media",x),n=d[e].getAttribute(c.srcsetAttr),n&&d[e].setAttribute("srcset",n);p?a.setAttribute("srcset",p):o&&(D.test(a.nodeName)?P(a,o):a.setAttribute("src",o)),i(a,c.loadingClass),k(a,O,!0)}setTimeout(function(){a._lazyRace&&delete a._lazyRace,"auto"==A&&i(a,c.autosizesClass),(p||u)&&m(a,{src:o}),j(a,c.lazyClass),(!w||a.complete&&y==(a.currentSrc||a.src))&&(w&&K(v),O(v)),a=null})}},R=function(){var a,b=function(){c.loadMode=3,N()};q=!0,H+=8,c.loadMode=3,N(!0),e("scroll",function(){3==c.loadMode&&(c.loadMode=2),clearTimeout(a),a=setTimeout(b,66)},!0)};return{_:function(){g=b.getElementsByClassName(c.lazyClass),o=b.getElementsByClassName(c.lazyClass+" "+c.preloadClass),A=c.expand,B=A*c.expFactor,e("scroll",N,!0),e("resize",N,!0),a.MutationObserver?new MutationObserver(N).observe(d,{childList:!0,subtree:!0,attributes:!0}):(d.addEventListener("DOMNodeInserted",N,!0),d.addEventListener("DOMAttrModified",N,!0),setInterval(N,3e3)),e("hashchange",N,!0),["transitionstart","transitionend","load","focus","mouseover","animationend","click"].forEach(function(a){b.addEventListener(a,N,!0)}),(q=/d$|^c/.test(b.readyState))?R():(e("load",R),b.addEventListener("DOMContentLoaded",N)),N(g.length>0)},checkElems:N,unveil:Q}}(),r=function(){var a,d=function(a,b){var c,d,e,g,h,i=a.parentNode;if(i&&(c=o(a,i),h=l(a,"lazybeforesizes",{width:c,dataAttr:!!b}),!h.defaultPrevented&&(c=h.details.width,c&&c!==a._lazysizesWidth))){if(a._lazysizesWidth=c,c+="px",a.setAttribute("sizes",c),f.test(i.nodeName||""))for(d=i.getElementsByTagName("source"),e=0,g=d.length;g>e;e++)d[e].setAttribute("sizes",c);h.details.dataAttr||m(a,h.details)}},g=function(){var b,c=a.length;if(c)for(b=0;c>b;b++)d(a[b])},h=p(g);return{_:function(){a=b.getElementsByClassName(c.autosizesClass),e("resize",h)},checkElems:h,updateElem:d}}(),s=function(){s.i||(s.i=!0,r._(),q._())};return function(){var b,d={lazyClass:"lazy",loadedClass:"lazyloaded",loadingClass:"lazyloading",preloadClass:"lazypreload",errorClass:"lazyerror",autosizesClass:"lazyautosizes",srcAttr:"data-src",srcsetAttr:"data-srcset",sizesAttr:"data-sizes",minSize:50,customMedia:{},init:!0,expFactor:2,expand:100,loadMode:2};c=a.lazySizesConfig||{};for(b in d)b in c||(c[b]=d[b]);a.lazySizesConfig=c,setTimeout(function(){c.init&&s()})}(),{cfg:c,autoSizer:r,loader:q,init:s,uP:m,aC:i,rC:j,hC:h,fire:l,gW:o}}});
