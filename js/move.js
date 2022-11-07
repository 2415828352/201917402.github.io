  var wrap=document.getElementById("wrap");
	var pic=document.getElementById("wrap_pic");
	var list=document.getElementById("wrap_list").getElementsByTagName("li");
	var index=0;
	var timer=null;
	 	 
	function auto(){
		timer=setInterval(function(){
			if(index>=list.length){
			index=0;
			}
			change(index);
			index++;
		},2000);
	 }
	
	 auto();
	
	function change(curIndex){
		for(var i=0;i<list.length;i++){
			list[i].className="";
		}
		list[curIndex].className="wrap_on";
		pic.src = 'images/'+curIndex+ '.jpg';
		index=curIndex;
	}	
	 
	wrap.onmouseover=function(){
		clearInterval(timer);
	 }
	 wrap.onmouseout=auto;
	 
	for(var i=0;i<list.length;i++){
          list[i].id=i;
          list[i].onclick=function(){
            change(this.id);          
          }
  }