/*! Related Post Widget for Blogger by Taufik Nurrohman => http://gplus.to/tovic */
var randomRelatedIndex,showRelatedPost;!function(e,t,a){var n={widgetTitle:"<h2><span class='pembahasan'>Artikel Terkait Tentang:</span></h2>",widgetStyle:1,homePage:"http://www.aura-ilmu.com",numPosts:13,titleLength:"auto",thumbnailSize:72,containerId:"related-posts",newTabLink:!1,callBack:function(){}};for(var l in relatedPostConfig)n[l]="undefined"==relatedPostConfig[l]?n[l]:relatedPostConfig[l];var r=function(e){var n=t.createElement("script");n.async="true";n.type="text/javascript",n.src=e,a.appendChild(n)},o=function(e,t){return Math.floor(Math.random()*(t-e+1))+e},s=function(e){var t,a,n=e.length;if(0===n)return!1;for(;--n;)t=Math.floor(Math.random()*(n+1)),a=e[n],e[n]=e[t],e[t]=a;return e},i="object"==typeof labelArray&&labelArray.length>0?"/-/"+s(labelArray)[0]:"",d=function(e){var t=e.feed.openSearch$totalResults.$t-n.numPosts,a=o(1,t>0?t:1);r("http://www.aura-ilmu.com/feeds/posts/summary"+i+"?alt=json-in-script&orderby=updated&start-index="+a+"&max-results="+n.numPosts+"&callback=showRelatedPost")},c=function(e){var t,a,l,r=document.getElementById(n.containerId),o=s(e.feed.entry),i=n.widgetStyle,d=n.widgetTitle+'<ul class="related-post-style-'+i+'">',c=n.newTabLink?' target="_blank"':"",u='<span style="display:block;clear:both;"></span>';if(r){for(var h=0;h<n.numPosts&&h!=o.length;h++){a=o[h].title.$t,l="auto"!==n.titleLength&&n.titleLength<a.length?a.substring(0,n.titleLength)+"&hellip;":a;for(var m=0,f=o[h].link.length;f>m;m++)t="alternate"==o[h].link[m].rel?o[h].link[m].href:"#";1==i&&(d+='<li><a title="'+a+'" href="'+t+'"'+c+"><span class='span'>"+l+"</span></a></li>")}r.innerHTML=d+="</ul>"+u,n.callBack()}};randomRelatedIndex=d,showRelatedPost=c,r("http://www.aura-ilmu.com/feeds/posts/summary"+i+"?alt=json-in-script&orderby=updated&max-results=11&callback=randomRelatedIndex")}(window,document,document.getElementsByTagName("head")[0]);
if(document.location.protocol=='http:'){var Tynt=Tynt||[];Tynt.push('bSnRAoFUur5k_Lacwqm_6r');(function(){var h,s=document.createElement('script');s.src='http://cdn.tynt.com/ti.js';s.async='true';h=document.getElementsByTagName('script')[0];h.parentNode.insertBefore(s,h);})();};
