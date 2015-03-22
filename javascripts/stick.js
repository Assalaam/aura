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
