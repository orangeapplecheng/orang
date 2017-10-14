window.onload = function(){
	//...
}

function drag(id){
	var  obj = document.getElementById(id);
	var disX = 0;
	var disY = 0;
	obj.onmousedowm = function(e){
		disX = e.pageX - obj.offsetLeft;
		disY = e.pageY - obj.offsetTop;
	}
	document.onmousemove = function(e){
		obj.style.left = e.pageX - disX +'px';
		obj.style.top = e.pageY - disY +'px';
	}
}