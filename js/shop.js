$(document).ready(function () {
	//判断商品是否有销售活动，若没有则隐藏该div
	$(".p-original span").each(function(i){
	    if($(this).html() == ""){
			$(this).parent().css("visibility","hidden");
		}
	});

	//判断商品是否有打折，若没有则隐藏该div
	$(".p-off").each(function(i){
	    if($(this).html() == ""){
			$(this).css("visibility","hidden");
		}
	});

	//判断商品是否有销售活动，若没有则隐藏该div
	$(".p-sale").each(function(i){
	    if($(this).html() == ""){
			$(this).css("visibility","hidden");
		}
	});
})
