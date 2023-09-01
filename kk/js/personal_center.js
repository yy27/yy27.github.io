// 个人中心左侧的功能列表
$(function(){
	$(".us-bos-list dt").click(function(){
		$(this).siblings(".us-box-menu").stop().slideToggle();
	})
})