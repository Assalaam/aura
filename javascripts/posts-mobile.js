/* http://www.aura-ilmu.com/ mobile */ 
document.createElement('main');document.createElement('article');document.createElement('section');document.createElement('aside');document.createElement('hgroup');document.createElement('nav');document.createElement('header');document.createElement('footer');document.createElement('figure');document.createElement('figcaption');
/* jQuery-lazyload-any v0.1.4 * https://github.com/emn178/jquery-lazyload-any * Copyright 2014, emn178@gmail.com * Licensed under the MIT license: * http://www.opensource.org/licenses/MIT */ (function(f,g,i,d){f.expr[":"]["jquery-lazyload-any-appear"]=function(l){return f(l).data("jquery-lazyload-any-appear")};function h(){var l=f(this);if(e(this)){l.trigger("appear")}}function e(o){var p=o.getBoundingClientRect();var m=y1=-f(o).data("jquery-lazyload-any").threshold;var n=b-y1;var l=a-m;return(p.top>=y1&&p.top<=n||p.bottom>=y1&&p.bottom<=n)&&(p.left>=m&&p.left<=l||p.right>=m&&p.right<=l)}var b,a;function c(){b=g.innerHeight||i.documentElement.clientHeight;a=g.innerWidth||i.documentElement.clientWidth;j()}function j(){f(":jquery-lazyload-any-appear").each(h)}function k(){var m=f(this);var l=m.data("jquery-lazyload-any");m.unbind(l.trigger);var o=m.contents().filter(function(){return this.nodeType===8}).get(0);var n=f(o&&o.data);m.replaceWith(n);if(f.isFunction(l.load)){l.load.call(n,n)}}f.fn.lazyload2=function(m){var n={threshold:0,trigger:"appear"};f.extend(n,m);var l=n.trigger.split(" ");this.data("jquery-lazyload-any-appear",f.inArray("appear",l)!=-1);this.data("jquery-lazyload-any",n);this.bind(n.trigger,k)};f(i).ready(function(){f(g).bind("resize",c);f(g).bind("scroll",j);c()})})(jQuery,window,document);
$(function(){var sticky_navigation_offset_top=$('#nav-wrap').offset().top;var sticky_navigation=function(){var scroll_top=$(window).scrollTop();if(scroll_top>sticky_navigation_offset_top){$('#nav-wrap').css({'position':'fixed','top':0,'left':0})}else{$('#nav-wrap').css({'position':'relative'})}};sticky_navigation();$(window).scroll(function(){sticky_navigation()});$('a[href="#"]').click(function(event){event.preventDefault()})});
/* LLoad XT 1.0.2 | MIT License */ !function(a,b,c,d){function e(a,b){return a[b]===d?s[b]:a[b]}function f(a,b){var c=s["on"+a];c&&(v(c)?c.call(b[0]):b.addClass(c.addClass||"").removeClass(c.removeClass||"")),b.trigger("lazy"+a,[b]),j()}function g(b){f(b.type,a(this).off(o,g))}function h(c){if(y.length){c=c||s.forceLoad,z=1/0;var d,e,h=u.scrollTop(),i=b.innerHeight||u.height(),j=b.innerWidth||u.width();for(d=0,e=y.length;e>d;d++){var k,l=y[d],n=l[0],p=l[m],r=!1,t=c;if(a.contains(q,n)){if(c||!p.visibleOnly||n.offsetWidth||n.offsetHeight){if(!t){var w=n.getBoundingClientRect(),x=p.edgeX,A=p.edgeY;k=w.top+h-A-i,t=h>=k&&w.bottom>-A&&w.left<=j+x&&w.right>-x}if(t){f("show",l);var B=p.srcAttr,C=v(B)?B(l):n.getAttribute(B);C&&(l.on(o,g),n.src=C),r=!0}else z>k&&(z=k)}}else r=!0;r&&(y.splice(d--,1),e--)}e||f("complete",a(q))}}function i(){A>1?(A=1,h(),setTimeout(i,s.throttle)):A=0}function j(a){y.length&&(a&&"scroll"===a.type&&a.currentTarget===b&&z>=u.scrollTop()||(A||setTimeout(i,0),A=2))}function k(){u.lazyLoadXT()}function l(){h(!0)}var m="lazyLoadXT",n="lazied",o="load error",p="lazy-hidden",q=c.documentElement||c.body,r=b.onscroll===d||!!b.operamini||!q.getBoundingClientRect,s={autoInit:!0,selector:"img[data-src]",blankImage:"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",throttle:99,forceLoad:r,loadEvent:"pageshow",updateEvent:"load orientationchange resize scroll touchmove",forceEvent:"",oninit:{removeClass:"lazy"},onshow:{addClass:p},onload:{removeClass:p,addClass:"lazy-loaded"},onerror:{removeClass:p},checkDuplicates:!0},t={srcAttr:"data-src",edgeX:0,edgeY:0,visibleOnly:!0},u=a(b),v=a.isFunction,w=a.extend,x=a.data||function(b,c){return a(b).data(c)},y=[],z=0,A=0;a[m]=w(s,t,a[m]),a.fn[m]=function(c){c=c||{};var d,g=e(c,"blankImage"),h=e(c,"checkDuplicates"),i=e(c,"scrollContainer"),k={};a(i).on("scroll",j);for(d in t)k[d]=e(c,d);return this.each(function(){if(this===b)a(s.selector).lazyLoadXT(c);else{if(h&&x(this,n))return;var d=a(this).data(n,1);g&&"IMG"===d[0].tagName&&!this.src&&(this.src=g),d[m]=w({},k),f("init",d),y.push(d)}})},a(c).ready(function(){f("start",u),u.on(s.loadEvent,k).on(s.updateEvent,j).on(s.forceEvent,l),a(c).on(s.updateEvent,j),s.autoInit&&k()})}(window.jQuery||window.Zepto,window,document),function(a){var b=a.lazyLoadXT;b.selector+=",video,iframe[data-src]",b.videoPoster="data-poster",a(document).on("lazyshow","video",function(c,d){var e=d.lazyLoadXT.srcAttr,f=a.isFunction(e);d.attr("poster",d.attr(b.videoPoster)).children("source,track").each(function(){var b=a(this);b.attr("src",f?e(b):b.attr(e))}),this.load()})}(window.jQuery||window.Zepto);$.lazyLoadXT.extend({oninit: { addClass: 'lazy-hidden' }, onload: { addClass: 'lazy-loaded', removeClass: 'lazy-hidden' }});
