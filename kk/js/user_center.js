$(function(){

	$("#us_overlap").css("height",$(document).height());//弹出框灰色背景高度设置为文档的高度
	$("#user_edit").click(function(){//点击用户等级页面修改按钮
		$("#us_level_edit").css("display","block");
		$("#us_overlap").css("display","block");
	});
	$("#user_c_close").click(function(){//点击X取消修改
		$("#us_level_edit").css("display","none");
		$("#us_overlap").css("display","none");
	})
	//等级滑块初始化
	var slider_per = $("#slider").attr("name");
	var slider_width = $("#slider").width();
	var arrow_left = slider_per*slider_width-10;
	$("#slider").children(".arrow").css("left",arrow_left);
	$("#slider").children(".line").css("width",slider_per*slider_width);
	//alert(slider_width);
})