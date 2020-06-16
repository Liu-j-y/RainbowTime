window.onload = function() {
	//图片局部放大
	var productImg=document.getElementById("product-img");
	var maskBack=document.getElementById("mask-back");
	var showImg=document.getElementById("show-img");
	var show=document.getElementById("show");
	var mask=document.getElementById("mask");
	//给图片添加移动事件
	mask.onmousemove=function(e){
	    var move=window.event||e;
	    var move_left=move.offsetX||e.offsetX;
	    var move_top=move.offsetY||e.offsetY;
	    var box_left=move_left-110;
	    var box_top=move_top-100;
		//计算距离小于0时,不让色块移动
		if(box_left<0){
			box_left=0;
		}
		if(box_top<0){
			box_top=0;
		}
		if(box_left>230){
			box_left=230;
		}
		if(box_top>250){
			box_top=250;
		}
		//计算位置赋值给色块
	    maskBack.style.left=box_left+"px";
	    maskBack.style.top=box_top+"px";        
		var bbox_left=box_left*-2;
		var bbox_top=box_top*-2;
		//将计算的值赋值
		show.style.left=bbox_left+"px";
		show.style.top=bbox_top+"px";
	}
	//鼠标移入事件
	mask.onmouseover=function(){
		maskBack.style.display="block";
		showImg.style.display="block";
	}
	//鼠标移出事件
	mask.onmouseout=function(){
		maskBack.style.display="none";
		showImg.style.display="none";
	}

	//商品数量增减
    $(".btn-add").click(function() {
        var $num = $(".input-num");
        var num = $num.attr("value");
        $num.attr("value",parseInt(num) + 1);
    });
    $(".btn-plus").click(function() {
        var $num = $(".input-num");
        var num = $num.attr("value");
        if(num==1){
            $num.attr("value",1);
        }else{
            $num.attr("value",parseInt(num) - 1);
        }
    });
}