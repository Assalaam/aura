/* http://www.aura-ilmu.com/ */
document.createElement('main');document.createElement('article');document.createElement('section');document.createElement('aside');document.createElement('hgroup');document.createElement('nav');document.createElement('header');document.createElement('footer');document.createElement('figure');document.createElement('figcaption');
shortcut={all_shortcuts:{},add:function(a,b,c){var d={type:"keydown",propagate:!1,disable_in_input:!1,target:document,keycode:!1};if(c)for(var e in d)"undefined"==typeof c[e]&&(c[e]=d[e]);else c=d;d=c.target,"string"==typeof c.target&&(d=document.getElementById(c.target)),a=a.toLowerCase(),e=function(d){d=d||window.event;if(c.disable_in_input){var e;d.target?e=d.target:d.srcElement&&(e=d.srcElement),3==e.nodeType&&(e=e.parentNode);if("INPUT"==e.tagName||"TEXTAREA"==e.tagName)return}d.keyCode?code=d.keyCode:d.which&&(code=d.which),e=String.fromCharCode(code).toLowerCase(),188==code&&(e=","),190==code&&(e=".");var f=a.split("+"),g=0,h={"`":"~",1:"!",2:"@",3:"#",4:"$",5:"%",6:"^",7:"&",8:"*",9:"(",0:")","-":"_","=":"+",";":":","'":'"',",":"<",".":">","/":"?","\\":"|"},i={esc:27,escape:27,tab:9,space:32,"return":13,enter:13,backspace:8,scrolllock:145,scroll_lock:145,scroll:145,capslock:20,caps_lock:20,caps:20,numlock:144,num_lock:144,num:144,pause:19,"break":19,insert:45,home:36,"delete":46,end:35,pageup:33,page_up:33,pu:33,pagedown:34,page_down:34,pd:34,left:37,up:38,right:39,down:40,f1:112,f2:113,f3:114,f4:115,f5:116,f6:117,f7:118,f8:119,f9:120,f10:121,f11:122,f12:123},j=!1,l=!1,m=!1,n=!1,o=!1,p=!1,q=!1,r=!1;d.ctrlKey&&(n=!0),d.shiftKey&&(l=!0),d.altKey&&(p=!0),d.metaKey&&(r=!0);for(var s=0;k=f[s],s<f.length;s++)"ctrl"==k||"control"==k?(g++,m=!0):"shift"==k?(g++,j=!0):"alt"==k?(g++,o=!0):"meta"==k?(g++,q=!0):1<k.length?i[k]==code&&g++:c.keycode?c.keycode==code&&g++:e==k?g++:h[e]&&d.shiftKey&&(e=h[e],e==k&&g++);if(g==f.length&&n==m&&l==j&&p==o&&r==q&&(b(d),!c.propagate))return d.cancelBubble=!0,d.returnValue=!1,d.stopPropagation&&(d.stopPropagation(),d.preventDefault()),!1},this.all_shortcuts[a]={callback:e,target:d,event:c.type},d.addEventListener?d.addEventListener(c.type,e,!1):d.attachEvent?d.attachEvent("on"+c.type,e):d["on"+c.type]=e},remove:function(a){var a=a.toLowerCase(),b=this.all_shortcuts[a];delete this.all_shortcuts[a];if(b){var a=b.event,c=b.target,b=b.callback;c.detachEvent?c.detachEvent("on"+a,b):c.removeEventListener?c.removeEventListener(a,b,!1):c["on"+a]=!1}}},shortcut.add("Ctrl+U",function(){top.location.href="http://www.aura-ilmu.com"});
$("").ready(function(){$("#incfont").click(function(){curSize=parseInt($(".post-body").css("font-size"))+1;if(curSize<=19){$(".post-body").css("font-size",curSize)}});$("#decfont").click(function(){curSize=parseInt($(".post-body").css("font-size"))-1;if(curSize>=12){$(".post-body").css("font-size",curSize)}})});
/* jQuery-lazyload-any v0.1.4 * https://github.com/emn178/jquery-lazyload-any * Copyright 2014, emn178@gmail.com * Licensed under the MIT license: * http://www.opensource.org/licenses/MIT */ (function(f,g,i,d){f.expr[":"]["jquery-lazyload-any-appear"]=function(l){return f(l).data("jquery-lazyload-any-appear")};function h(){var l=f(this);if(e(this)){l.trigger("appear")}}function e(o){var p=o.getBoundingClientRect();var m=y1=-f(o).data("jquery-lazyload-any").threshold;var n=b-y1;var l=a-m;return(p.top>=y1&&p.top<=n||p.bottom>=y1&&p.bottom<=n)&&(p.left>=m&&p.left<=l||p.right>=m&&p.right<=l)}var b,a;function c(){b=g.innerHeight||i.documentElement.clientHeight;a=g.innerWidth||i.documentElement.clientWidth;j()}function j(){f(":jquery-lazyload-any-appear").each(h)}function k(){var m=f(this);var l=m.data("jquery-lazyload-any");m.unbind(l.trigger);var o=m.contents().filter(function(){return this.nodeType===8}).get(0);var n=f(o&&o.data);m.replaceWith(n);if(f.isFunction(l.load)){l.load.call(n,n)}}f.fn.lazyload2=function(m){var n={threshold:0,trigger:"appear"};f.extend(n,m);var l=n.trigger.split(" ");this.data("jquery-lazyload-any-appear",f.inArray("appear",l)!=-1);this.data("jquery-lazyload-any",n);this.bind(n.trigger,k)};f(i).ready(function(){f(g).bind("resize",c);f(g).bind("scroll",j);c()})})(jQuery,window,document);
$(function(){var sticky_navigation_offset_top=$('#nav-wrap').offset().top;var sticky_navigation=function(){var scroll_top=$(window).scrollTop();if(scroll_top>sticky_navigation_offset_top){$('#nav-wrap').css({'position':'fixed','top':0,'left':0})}else{$('#nav-wrap').css({'position':'relative'})}};sticky_navigation();$(window).scroll(function(){sticky_navigation()});$('a[href="#"]').click(function(event){event.preventDefault()})});
var relatedTitles=new Array();var relatedTitlesNum=0;var relatedUrls=new Array();function related_results_labels(c){for(var b=0;b<c.feed.entry.length;b++){var d=c.feed.entry[b];relatedTitles[relatedTitlesNum]=d.title.$t;for(var a=0;a<d.link.length;a++){if(d.link[a].rel=="alternate"){relatedUrls[relatedTitlesNum]=d.link[a].href;relatedTitlesNum++;break}}}}function removeRelatedDuplicates(){var b=new Array(0);var c=new Array(0);for(var a=0;a<relatedUrls.length;a++){if(!contains(b,relatedUrls[a])){b.length+=1;b[b.length-1]=relatedUrls[a];c.length+=1;c[c.length-1]=relatedTitles[a]}}relatedTitles=c;relatedUrls=b}function contains(b,d){for(var c=0;c<b.length;c++){if(b[c]==d){return true}}return false}function printRelatedLabels(a){for(var b=0;b<relatedUrls.length;b++){if(relatedUrls[b]==a){relatedUrls.splice(b,1);relatedTitles.splice(b,1)}}var c=Math.floor((relatedTitles.length-1)*Math.random());var b=0;if(relatedTitles.length>1){document.write("<h5>"+relatedpoststitle+"</h5>")}document.write("<ul>");while(b<relatedTitles.length&&b<20&&b<maxresults){document.write('<li><h4><a href="'+relatedUrls[c]+'">'+relatedTitles[c]+"</a></h4></li>");if(c<relatedTitles.length-1){c++}else{c=0}b++}document.write("</ul>");relatedUrls.splice(0,relatedUrls.length);relatedTitles.splice(0,relatedTitles.length)};
(function(a,b){a.extend({stickysidebarscroll:function(c,e){if(e&&e.offset){e.offset.bottom=parseInt(e.offset.bottom,10);e.offset.top=parseInt(e.offset.top,30)}else{e.offset={bottom:100,top:0}}var c=a(c);if(c&&c.offset()){var j=c.offset().top,q=c.offset().left,o=c.outerHeight(true),k=c.outerWidth(),h=c.css("position"),g=c.css("top"),f=parseInt(c.css("marginTop"),10),n=a(document).height(),l=a(document).height()-e.offset.bottom,m=0,d=false,i=false,p=false;if(e.forcemargin===true||navigator.userAgent.match(/\bMSIE (4|5|6)\./)||navigator.userAgent.match(/\bOS (3|4|5|6)_/)||navigator.userAgent.match(/\bAndroid (1|2|3|4)\./i)){p=true}a(window).bind("scroll resize orientationchange load",c,function(t){if(n!==a(document).height()){l=a(document).height()-e.offset.bottom;n=a(document).height()}if(i==false){j=c.offset().top}var s=c.outerHeight(),r=a(window).scrollTop();if(p&&document.activeElement&&document.activeElement.nodeName==="INPUT"){return}i=true;if(r>=(j-(f?f:0)-e.offset.top)){if(l<(r+s+f+e.offset.top)){m=(r+s+f+e.offset.top)-l}else{m=0}if(p){c.css({marginTop:parseInt(((f?f:0)+(r-j-m)+2*e.offset.top),10)+"px"})}else{c.css({position:"fixed",top:(e.offset.top-m)+"px",width:k+"px"})}}else{i=false;q=c.offset().left;c.css({position:h,top:g,left:q,width:k+"px",marginTop:(f?f:0)+"px"})}})}}})})(jQuery);
/* LLoad XT 1.0.2 | MIT License */ !function(a,b,c,d){function e(a,b){return a[b]===d?s[b]:a[b]}function f(a,b){var c=s["on"+a];c&&(v(c)?c.call(b[0]):b.addClass(c.addClass||"").removeClass(c.removeClass||"")),b.trigger("lazy"+a,[b]),j()}function g(b){f(b.type,a(this).off(o,g))}function h(c){if(y.length){c=c||s.forceLoad,z=1/0;var d,e,h=u.scrollTop(),i=b.innerHeight||u.height(),j=b.innerWidth||u.width();for(d=0,e=y.length;e>d;d++){var k,l=y[d],n=l[0],p=l[m],r=!1,t=c;if(a.contains(q,n)){if(c||!p.visibleOnly||n.offsetWidth||n.offsetHeight){if(!t){var w=n.getBoundingClientRect(),x=p.edgeX,A=p.edgeY;k=w.top+h-A-i,t=h>=k&&w.bottom>-A&&w.left<=j+x&&w.right>-x}if(t){f("show",l);var B=p.srcAttr,C=v(B)?B(l):n.getAttribute(B);C&&(l.on(o,g),n.src=C),r=!0}else z>k&&(z=k)}}else r=!0;r&&(y.splice(d--,1),e--)}e||f("complete",a(q))}}function i(){A>1?(A=1,h(),setTimeout(i,s.throttle)):A=0}function j(a){y.length&&(a&&"scroll"===a.type&&a.currentTarget===b&&z>=u.scrollTop()||(A||setTimeout(i,0),A=2))}function k(){u.lazyLoadXT()}function l(){h(!0)}var m="lazyLoadXT",n="lazied",o="load error",p="lazy-hidden",q=c.documentElement||c.body,r=b.onscroll===d||!!b.operamini||!q.getBoundingClientRect,s={autoInit:!0,selector:"img[data-src]",blankImage:"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",throttle:99,forceLoad:r,loadEvent:"pageshow",updateEvent:"load orientationchange resize scroll touchmove",forceEvent:"",oninit:{removeClass:"lazy"},onshow:{addClass:p},onload:{removeClass:p,addClass:"lazy-loaded"},onerror:{removeClass:p},checkDuplicates:!0},t={srcAttr:"data-src",edgeX:0,edgeY:0,visibleOnly:!0},u=a(b),v=a.isFunction,w=a.extend,x=a.data||function(b,c){return a(b).data(c)},y=[],z=0,A=0;a[m]=w(s,t,a[m]),a.fn[m]=function(c){c=c||{};var d,g=e(c,"blankImage"),h=e(c,"checkDuplicates"),i=e(c,"scrollContainer"),k={};a(i).on("scroll",j);for(d in t)k[d]=e(c,d);return this.each(function(){if(this===b)a(s.selector).lazyLoadXT(c);else{if(h&&x(this,n))return;var d=a(this).data(n,1);g&&"IMG"===d[0].tagName&&!this.src&&(this.src=g),d[m]=w({},k),f("init",d),y.push(d)}})},a(c).ready(function(){f("start",u),u.on(s.loadEvent,k).on(s.updateEvent,j).on(s.forceEvent,l),a(c).on(s.updateEvent,j),s.autoInit&&k()})}(window.jQuery||window.Zepto,window,document),function(a){var b=a.lazyLoadXT;b.selector+=",video,iframe[data-src]",b.videoPoster="data-poster",a(document).on("lazyshow","video",function(c,d){var e=d.lazyLoadXT.srcAttr,f=a.isFunction(e);d.attr("poster",d.attr(b.videoPoster)).children("source,track").each(function(){var b=a(this);b.attr("src",f?e(b):b.attr(e))}),this.load()})}(window.jQuery||window.Zepto);$.lazyLoadXT.extend({oninit: { addClass: 'lazy-hidden' }, onload: { addClass: 'lazy-loaded', removeClass: 'lazy-hidden' }});
