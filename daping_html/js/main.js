$(function(){
	$(window).resize(function(){
		bodyScale();
	});
	bodyScale();

	getNowTime ();
	setInterval(function(){
		getNowTime ();
	},1000);
	window.onbeforeunload = function(event) { 
		alert("unload");

	}
	
});
function bodyScale() {
    var devicewidth = $(window).width();
    var deviceheight = $(window).height();
    var width = devicewidth / 1920;  // 分母——设计稿的尺寸
    var height = deviceheight / 1080;  // 分母——设计稿的尺寸
    $(".big-screen").css("transform",'scale('+width+', '+height+')');
    if ($('#mapContent')[0]){
    	var mapWidth = $('#mapContent').width();
		var mapTop = $('#mapContent').offset().top;
		var mapHeight = $('#mapContent').height();
		var mapLeft = $('#mapContent').offset().left;
		$('.map-area').css({'width': mapWidth*width, 'height': mapHeight*height, 'top': mapTop, 'left': mapLeft});
    }
    
}
function getNowTime () {
		var nowdate = new Date();
		var hours = nowdate.getHours();
		var minutes = nowdate.getMinutes();
		var seconds = nowdate.getSeconds();
		var year = nowdate.getFullYear();
        var month = nowdate.getMonth()+1;
        var day = nowdate.getDate();
		if(hours<10){
			hours = '0'+hours;
		}
		if(minutes<10){
			minutes = '0'+minutes;
		}
		if(seconds<10){
			seconds = '0'+seconds;
		}
		$('#nowTime').html(year+'-'+month+'-'+day+' '+hours+":"+minutes+":"+seconds);
	}