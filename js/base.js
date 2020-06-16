$(document).ready(function () {
	//鼠标移入rate-help-anchor改变rate-help-content样式
	$(".rate-help-anchor").mouseover(function () {
		$(this).parent().siblings(".rate-help-content").css("display","block");
	});
	$(".rate-help-anchor").mouseout(function () {
		$(this).parent().siblings(".rate-help-content").css("display","none");
	});

	$(window).scroll(function(){
		var scrollTop=$(window).scrollTop();
		if(scrollTop>400){
			$(".to-head").css("visibility","visible");
		}else{
			$(".to-head").css("visibility","hidden");
		}
	})
})