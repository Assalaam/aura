/* Facebook like http://www.aura-ilmu.com/ */ 
(function(d, s, id) {var js, fjs = d.getElementsByTagName(s)[0];if (d.getElementById(id)) return;     js = d.createElement(s);js.id = id;js.async = true;js.src = "//connect.facebook.net/en_US/all.js#xfbml=1&appId=126090824216926&version=v2.0";            fjs.parentNode.insertBefore(js, fjs);}
(document, 'script', 'facebook-jssdk'));
/*! jQuery Lazy script * version: 1.0.0 * @requires jQuery v1.5 or later * Copyright (c) 2013 Ravishanker Kusuma * http://hayageek.com/ */
(function(a){jQuery.cachedScript=function(d,b){var c={dataType:"script",cache:true,url:d,complete:function(e,f){b.call(this)}};return jQuery.ajax(c)};a.lazyscript=function(k){var j=a.extend({type:false,id:false,time:1000,partial:true,scripts:[],success:false},k);var f=false;if(j.type){switch(j.type){case"scroll":a(window).scroll(g);break;case"hover":a("#"+j.id).hover(c);break;case"click":a("#"+j.id).click(c);break;case"visible":a(window).scroll(i);break;case"delay":if(j.time){setTimeout(b,j.time)}break;default:alert("Invalid lazy script type");break}}function d(n,l,m){if(n.removeEventListener){n.removeEventListener(l,m,false)}if(n.detachEvent){n.detachEvent("on"+l,m)}}function b(){if(!f){f=true;e()}}function c(){if(!f){f=true;setTimeout(e,5);d(a("#"+j.id).get(0),"hover",c)}}function h(){if(!f){f=true;setTimeout(e,5);d(a("#"+j.id).get(0),"click",c)}}function g(){if(!f){f=true;setTimeout(e,5);d(window,"scroll",g)}}function i(){var l=a("#"+j.id);t=l.get(0);$w=a(window);viewTop=$w.scrollTop();viewBottom=viewTop+$w.height();_top=l.offset().top;_bottom=_top+l.height();compareTop=j.partial===true?_bottom:_top;compareBottom=j.partial===true?_top:_bottom;if(!f){if((compareBottom<=viewBottom)&&(compareTop>=viewTop)){f=true;d(window,"scroll",i);setTimeout(e,5)}}}function e(){var o=j.scripts.length;var n=0;for(var l=0;l<o;l++){jQuery.cachedScript(j.scripts[l],function(){n++})}(function m(){if(n==o){if(j.success){j.success.call(this)}}else{window.setTimeout(m,20)}})()}}}(jQuery));
document.createElement('main');document.createElement('article');document.createElement('section');document.createElement('aside');document.createElement('hgroup');document.createElement('nav');document.createElement('header');document.createElement('footer');document.createElement('figure');document.createElement('figcaption');
$("").ready(function(){$("#incfont").click(function(){curSize=parseInt($(".post-body").css("font-size"))+1;if(curSize<=19){$(".post-body").css("font-size",curSize)}});$("#decfont").click(function(){curSize=parseInt($(".post-body").css("font-size"))-1;if(curSize>=12){$(".post-body").css("font-size",curSize)}})});
/* jQuery-lazyload-any v0.1.4 * https://github.com/emn178/jquery-lazyload-any * Copyright 2014, emn178@gmail.com * Licensed under the MIT license: * http://www.opensource.org/licenses/MIT */ (function(f,g,i,d){f.expr[":"]["jquery-lazyload-any-appear"]=function(l){return f(l).data("jquery-lazyload-any-appear")};function h(){var l=f(this);if(e(this)){l.trigger("appear")}}function e(o){var p=o.getBoundingClientRect();var m=y1=-f(o).data("jquery-lazyload-any").threshold;var n=b-y1;var l=a-m;return(p.top>=y1&&p.top<=n||p.bottom>=y1&&p.bottom<=n)&&(p.left>=m&&p.left<=l||p.right>=m&&p.right<=l)}var b,a;function c(){b=g.innerHeight||i.documentElement.clientHeight;a=g.innerWidth||i.documentElement.clientWidth;j()}function j(){f(":jquery-lazyload-any-appear").each(h)}function k(){var m=f(this);var l=m.data("jquery-lazyload-any");m.unbind(l.trigger);var o=m.contents().filter(function(){return this.nodeType===8}).get(0);var n=f(o&&o.data);m.replaceWith(n);if(f.isFunction(l.load)){l.load.call(n,n)}}f.fn.lazyload2=function(m){var n={threshold:0,trigger:"appear"};f.extend(n,m);var l=n.trigger.split(" ");this.data("jquery-lazyload-any-appear",f.inArray("appear",l)!=-1);this.data("jquery-lazyload-any",n);this.bind(n.trigger,k)};f(i).ready(function(){f(g).bind("resize",c);f(g).bind("scroll",j);c()})})(jQuery,window,document);
$(function(){var sticky_navigation_offset_top=$('#nav-wrap').offset().top;var sticky_navigation=function(){var scroll_top=$(window).scrollTop();if(scroll_top>sticky_navigation_offset_top){$('#nav-wrap').css({'position':'fixed','top':0,'left':0})}else{$('#nav-wrap').css({'position':'relative'})}};sticky_navigation();$(window).scroll(function(){sticky_navigation()});$('a[href="#"]').click(function(event){event.preventDefault()})});
imgr=new Array();imgr[0]="http://2.bp.blogspot.com/-uitX7ROPtTU/Tyv-G4NA_uI/AAAAAAAAFBY/NcWLPVnYEnU/s1600/no+image.jpg";showRandomImg=true;aBold=true;summaryTitle=20;numposts1=7;numposts2=1;function removeHtmlTag(f,e){var h=f.split("<");for(var g=0;g<h.length;g++){if(h[g].indexOf(">")!=-1){h[g]=h[g].substring(h[g].indexOf(">")+1,h[g].length)}}h=h.join("");h=h.substring(0,e-1);return h}function showrecentposts1(p){j=(showRandomImg)?Math.floor((imgr.length+1)*Math.random()):0;img=new Array();for(var h=0;h<numposts1;h++){var o=p.feed.entry[h];var f=o.title.$t;var e;var l;if(h==p.feed.entry.length){break}for(var g=0;g<o.link.length;g++){if(o.link[g].rel=="alternate"){l=o.link[g].href;break}}if("content" in o){var m=o.content.$t}if(j>imgr.length-1){j=0}img[h]=imgr[j];s=m;a=s.indexOf("<img");b=s.indexOf('src="',a);c=s.indexOf('"',b+5);d=s.substr(b+5,c-b-5);if((a!=-1)&&(b!=-1)&&(c!=-1)&&(d!="")){img[h]=d}var n='<li><div class="img-pthumb"><div class="lazyload-img pthumb" > <!-- <a href="'+l+'" rel="nofollow"><img class="pthumb" src="'+img[h].replace("/s1600/","/s300/").replace("/s100/","/s300/").replace("/s150/","/s300/")+'"/></a> --> </div></div><div class="des-terkini"><a href="'+l+'" rel="nofollow">'+f+"</a></div></li>";document.write(n);j++}};function showrecentposts2(p){j=(showRandomImg)?Math.floor((imgr.length+1)*Math.random()):0;img=new Array();for(var h=0;h<numposts2;h++){var o=p.feed.entry[h];var f=o.title.$t;var e;var l;if(h==p.feed.entry.length){break}for(var g=0;g<o.link.length;g++){if(o.link[g].rel=="alternate"){l=o.link[g].href;break}}if("content" in o){var m=o.content.$t}if(j>imgr.length-1){j=0}img[h]=imgr[j];s=m;a=s.indexOf("<img");b=s.indexOf('src="',a);c=s.indexOf('"',b+5);d=s.substr(b+5,c-b-5);if((a!=-1)&&(b!=-1)&&(c!=-1)&&(d!="")){img[h]=d}var n='<li><div class="img-pthumb"><div class="lazyload-img pthumb" > <!-- <a href="'+l+'" rel="nofollow"><img class="pthumb" src="'+img[h].replace("/s1600/","/s300/").replace("/s100/","/s300/").replace("/s150/","/s300/")+'"/></a> --> </div></div><div class="des-terkini"><a href="'+l+'" rel="nofollow">'+f+"</a></div></li>";document.write(n);j++}};
var ry="<h2><span>Artikel Terkait</span></h2>";rn="<h2><span>Explore...</span></h2>";var dw="";titles=new Array();titlesNum=0;urls=new Array();timeR=new Array();thumb=new Array();function related_results_labels(k){for(var h=0;h<k.feed.entry.length;h++){var j=k.feed.entry[h];titles[titlesNum]=j.title.$t;for(var i=0;i<j.link.length;i++){if("thr$total" in j){}if(j.link[i].rel=="alternate"){urls[titlesNum]=j.link[i].href;timeR[titlesNum]=j.published.$t;if("media$thumbnail" in j){thumb[titlesNum]=j.media$thumbnail.url}else{thumb[titlesNum]="http://1.bp.blogspot.com/-pmznJmXBJ7M/UfWrTRltmLI/AAAAAAAAFg8/8VCw4AcPMyc/s1600/no+image.jpg"}titlesNum++;break}}}}function removeRelatedDuplicates(){var d=new Array(0);c=new Array(0);e=new Array(0);f=new Array(0);g=new Array(0);for(var h=0;h<urls.length;h++){if(!contains(d,urls[h])){d.length+=1;d[d.length-1]=urls[h];c.length+=1;c[c.length-1]=titles[h];e.length+=1;e[e.length-1]=timeR[h];f.length+=1;f[f.length-1]=thumb[h]}}urls=d;titles=c;timeR=e;thumb=f}function contains(a,h){for(var i=0;i<a.length;i++){if(a[i]==h){return true}}return false}function printRelatedLabels(h){var j=h.indexOf("?m=0");if(j!=-1){h=h.replace(/\?m=0/g,"")}for(var d=0;d<urls.length;d++){if(urls[d]==h){urls.splice(d,1);titles.splice(d,1);timeR.splice(d,1);thumb.splice(d,1)}}var i=Math.floor((titles.length-1)*Math.random());var d=0;if(titles.length==0){dw+=rn}else{dw+=ry;dw+="<ul>";while(d<titles.length&&d<20&&d<maxresults){if(j!=-1){urls[i]=urls[i]+"?m=0"}dw+='<li><div class="lazyload-img pthumb" > <!-- <a href="'+urls[i]+'" rel="nofollow"><img class="pthumb" alt="'+titles[i]+'" src="'+thumb[i].replace("/s72-c/","/s180/")+'"/></a> --> </div></div><div class="related-titles"><h4><a href="'+urls[i]+'" >'+titles[i]+'</a></h4></div><div class="clear"></div></li></div>';if(i<titles.length-1){i++}else{i=0}d++}dw+="</ul>"}urls.splice(0,urls.length);titles.splice(0,titles.length);document.getElementById("related-posts-image").innerHTML=dw};
(function(a,b){a.extend({stickysidebarscroll:function(c,e){if(e&&e.offset){e.offset.bottom=parseInt(e.offset.bottom,10);e.offset.top=parseInt(e.offset.top,30)}else{e.offset={bottom:100,top:0}}var c=a(c);if(c&&c.offset()){var j=c.offset().top,q=c.offset().left,o=c.outerHeight(true),k=c.outerWidth(),h=c.css("position"),g=c.css("top"),f=parseInt(c.css("marginTop"),10),n=a(document).height(),l=a(document).height()-e.offset.bottom,m=0,d=false,i=false,p=false;if(e.forcemargin===true||navigator.userAgent.match(/\bMSIE (4|5|6)\./)||navigator.userAgent.match(/\bOS (3|4|5|6)_/)||navigator.userAgent.match(/\bAndroid (1|2|3|4)\./i)){p=true}a(window).bind("scroll resize orientationchange load",c,function(t){if(n!==a(document).height()){l=a(document).height()-e.offset.bottom;n=a(document).height()}if(i==false){j=c.offset().top}var s=c.outerHeight(),r=a(window).scrollTop();if(p&&document.activeElement&&document.activeElement.nodeName==="INPUT"){return}i=true;if(r>=(j-(f?f:0)-e.offset.top)){if(l<(r+s+f+e.offset.top)){m=(r+s+f+e.offset.top)-l}else{m=0}if(p){c.css({marginTop:parseInt(((f?f:0)+(r-j-m)+2*e.offset.top),10)+"px"})}else{c.css({position:"fixed",top:(e.offset.top-m)+"px",width:k+"px"})}}else{i=false;q=c.offset().left;c.css({position:h,top:g,left:q,width:k+"px",marginTop:(f?f:0)+"px"})}})}}})})(jQuery);
/* LLoad XT 1.0.2 | MIT License */ !function(a,b,c,d){function e(a,b){return a[b]===d?s[b]:a[b]}function f(a,b){var c=s["on"+a];c&&(v(c)?c.call(b[0]):b.addClass(c.addClass||"").removeClass(c.removeClass||"")),b.trigger("lazy"+a,[b]),j()}function g(b){f(b.type,a(this).off(o,g))}function h(c){if(y.length){c=c||s.forceLoad,z=1/0;var d,e,h=u.scrollTop(),i=b.innerHeight||u.height(),j=b.innerWidth||u.width();for(d=0,e=y.length;e>d;d++){var k,l=y[d],n=l[0],p=l[m],r=!1,t=c;if(a.contains(q,n)){if(c||!p.visibleOnly||n.offsetWidth||n.offsetHeight){if(!t){var w=n.getBoundingClientRect(),x=p.edgeX,A=p.edgeY;k=w.top+h-A-i,t=h>=k&&w.bottom>-A&&w.left<=j+x&&w.right>-x}if(t){f("show",l);var B=p.srcAttr,C=v(B)?B(l):n.getAttribute(B);C&&(l.on(o,g),n.src=C),r=!0}else z>k&&(z=k)}}else r=!0;r&&(y.splice(d--,1),e--)}e||f("complete",a(q))}}function i(){A>1?(A=1,h(),setTimeout(i,s.throttle)):A=0}function j(a){y.length&&(a&&"scroll"===a.type&&a.currentTarget===b&&z>=u.scrollTop()||(A||setTimeout(i,0),A=2))}function k(){u.lazyLoadXT()}function l(){h(!0)}var m="lazyLoadXT",n="lazied",o="load error",p="lazy-hidden",q=c.documentElement||c.body,r=b.onscroll===d||!!b.operamini||!q.getBoundingClientRect,s={autoInit:!0,selector:"img[data-src]",blankImage:"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",throttle:99,forceLoad:r,loadEvent:"pageshow",updateEvent:"load orientationchange resize scroll touchmove",forceEvent:"",oninit:{removeClass:"lazy"},onshow:{addClass:p},onload:{removeClass:p,addClass:"lazy-loaded"},onerror:{removeClass:p},checkDuplicates:!0},t={srcAttr:"data-src",edgeX:0,edgeY:0,visibleOnly:!0},u=a(b),v=a.isFunction,w=a.extend,x=a.data||function(b,c){return a(b).data(c)},y=[],z=0,A=0;a[m]=w(s,t,a[m]),a.fn[m]=function(c){c=c||{};var d,g=e(c,"blankImage"),h=e(c,"checkDuplicates"),i=e(c,"scrollContainer"),k={};a(i).on("scroll",j);for(d in t)k[d]=e(c,d);return this.each(function(){if(this===b)a(s.selector).lazyLoadXT(c);else{if(h&&x(this,n))return;var d=a(this).data(n,1);g&&"IMG"===d[0].tagName&&!this.src&&(this.src=g),d[m]=w({},k),f("init",d),y.push(d)}})},a(c).ready(function(){f("start",u),u.on(s.loadEvent,k).on(s.updateEvent,j).on(s.forceEvent,l),a(c).on(s.updateEvent,j),s.autoInit&&k()})}(window.jQuery||window.Zepto,window,document),function(a){var b=a.lazyLoadXT;b.selector+=",video,iframe[data-src]",b.videoPoster="data-poster",a(document).on("lazyshow","video",function(c,d){var e=d.lazyLoadXT.srcAttr,f=a.isFunction(e);d.attr("poster",d.attr(b.videoPoster)).children("source,track").each(function(){var b=a(this);b.attr("src",f?e(b):b.attr(e))}),this.load()})}(window.jQuery||window.Zepto);$.lazyLoadXT.extend({oninit: { addClass: 'lazy-hidden' }, onload: { addClass: 'lazy-loaded', removeClass: 'lazy-hidden' }});
