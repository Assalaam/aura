/* Facebook like */ 
(function(d, s, id) {var js, fjs = d.getElementsByTagName(s)[0];if (d.getElementById(id)) return; js = d.createElement(s);js.id = id;js.async = true;js.src = "//connect.facebook.net/en_US/all.js#xfbml=1&appId=126090824216926&version=v2.0"; fjs.parentNode.insertBefore(js, fjs);} (document, 'script', 'facebook-jssdk'));
document.createElement('main');document.createElement('article');document.createElement('section');document.createElement('aside');document.createElement('hgroup');document.createElement('nav');document.createElement('header');document.createElement('footer');document.createElement('figure');document.createElement('figcaption');
var ry="<h2><span>Artikel Terkait</span></h2>";rn="<h2><span>Explore...</span></h2>";var dw="";titles=new Array();titlesNum=0;urls=new Array();timeR=new Array();thumb=new Array();function related_results_labels(k){for(var h=0;h<k.feed.entry.length;h++){var j=k.feed.entry[h];titles[titlesNum]=j.title.$t;for(var i=0;i<j.link.length;i++){if("thr$total" in j){}if(j.link[i].rel=="alternate"){urls[titlesNum]=j.link[i].href;timeR[titlesNum]=j.published.$t;if("media$thumbnail" in j){thumb[titlesNum]=j.media$thumbnail.url}else{thumb[titlesNum]="http://1.bp.blogspot.com/-pmznJmXBJ7M/UfWrTRltmLI/AAAAAAAAFg8/8VCw4AcPMyc/s1600/no+image.jpg"}titlesNum++;break}}}}function removeRelatedDuplicates(){var d=new Array(0);c=new Array(0);e=new Array(0);f=new Array(0);g=new Array(0);for(var h=0;h<urls.length;h++){if(!contains(d,urls[h])){d.length+=1;d[d.length-1]=urls[h];c.length+=1;c[c.length-1]=titles[h];e.length+=1;e[e.length-1]=timeR[h];f.length+=1;f[f.length-1]=thumb[h]}}urls=d;titles=c;timeR=e;thumb=f}function contains(a,h){for(var i=0;i<a.length;i++){if(a[i]==h){return true}}return false}function printRelatedLabels(h){var j=h.indexOf("?m=0");if(j!=-1){h=h.replace(/\?m=0/g,"")}for(var d=0;d<urls.length;d++){if(urls[d]==h){urls.splice(d,1);titles.splice(d,1);timeR.splice(d,1);thumb.splice(d,1)}}var i=Math.floor((titles.length-1)*Math.random());var d=0;if(titles.length==0){dw+=rn}else{dw+=ry;dw+="<ul>";while(d<titles.length&&d<20&&d<maxresults){if(j!=-1){urls[i]=urls[i]+"?m=0"}dw+='<li><a href="'+urls[i]+'" rel="nofollow"><img class="pthumb" alt="'+titles[i]+'" src="'+thumb[i].replace("/s72-c/","/s180/")+'"/></a></div><div class="related-titles"><h4><a href="'+urls[i]+'" >'+titles[i]+'</a></h4></div><div class="clear"></div></li></div>';if(i<titles.length-1){i++}else{i=0}d++}dw+="</ul>"}urls.splice(0,urls.length);titles.splice(0,titles.length);document.getElementById("related-posts-image").innerHTML=dw};
var numposts =7;function showrecentposts(json) {for (var i = 0; i < numposts; i++) {var entry = json.feed.entry[i];var posttitle = entry.title.$t;var posturl;if (i == json.feed.entry.length) break;for (var k = 0; k < entry.link.length; k++) {if (entry.link[k].rel == 'alternate') {posturl = entry.link[k].href;break;}}posttitle = posttitle.link(posturl);document.write('<li class="recent-post-title">');document.write(posttitle);document.write('</li>');}};
var node = document.getElementById('side'),
    nodeOffs = node.offsetTop,    
    parent = node;

while(parent = parent.offsetParent)
  if(parent.offsetTop)
    nodeOffs += parent.offsetTop;

window.addEventListener('scroll', function(event){    
    var scrollPos = document.body.scrollTop;

    if(scrollPos &gt; nodeOffs){
        
        if(scrollPos &lt; (document.body.scrollHeight - node.clientHeight - nodeOffs))
          node.style.top = (scrollPos - nodeOffs) + 'px';
       
    }else{
        node.style.top = '30px';
    }
});
