/**
 * Created by yy on 2016/3/24.
 */
$(function(){
    $("#fance .map_france").each(function(){
        var timer=null;
        var index=0;
        var len=$(this).children("span").length;
        for(var i=0;i<len;i++){
            $("#fance .map_france").children("span").eq(i).attr("id","span_"+i)
        }
        $("#fance .map_france").children("span").eq(0).addClass("now");
        $(this).children("span").click(function(){

            clearInterval(timer);
            var content_num = $(this).attr("id").split("_")[1];
            if(content_num<$("#fance .route_line").length){
                $("#fance .map_france").children("span").removeClass("now");
                $(this).addClass("now");
                $("#fance .route_line").fadeOut();
                $("#fance .route_line").eq(content_num).fadeIn();
            }
        })
        $(this).children(".date").length;
        //×Ô¶¯²¥·Åº¯Êý
        function autoPlay(){
            timer=setInterval(function(){
                var li_count = $("#fance .route_line").length;
                index++;
                if(index>li_count-1){
                    index=0;
                }
                //alert(index);
                $("#fance .map_france").children("span").removeClass("now");
                $("#fance .map_france").children("span").eq(index).addClass("now");
                $("#fance .route_line").fadeOut();
                $("#fance .route_line").eq(index).fadeIn();
            },5000)
        }
        autoPlay();
    });
    $("#country ul li").hover(function(){
        $("#country ul li").removeClass("now");
        $(this).addClass("now");
    },function(){
        $(this).removeClass("now");
    })
    $("#country ul li").click(function(){
        $("#country ul li").removeClass("on");
        $(this).addClass("on");
        var index = $(this).index();
        if(index<$("#route_box .route").length){
            $("#route_box .route").fadeOut();
            $("#route_box .route").eq(index).fadeIn();
        }

    })


    // var mycv = document.getElementById("route_canvas");
    // var myctx = mycv.getContext("2d");
    // var beauty = new Image();
    //     myctx.beginPath();
    // beauty.src = "images/red_wine/route_1.jpg";
    // if(beauty.complete){
    //     myctx.drawImage(beauty, 0, 0);
    // }else{
    //     beauty.onload = function(){
    //         myctx.drawImage(beauty, 0, 0);
    //     };
    //     beauty.onerror = function(){
    //         window.alert('加载失败');
    //     };
    // };
    // // Draw the circle


    // myctx.setLineDash([5]);
    // myctx.lineWidth=30;
    // myctx.strokeStyle = 'rgba(255,255,0,1)';
    // myctx.moveTo(149,317);
    // myctx.quadraticCurveTo(164,305,218,317);

    // myctx.quadraticCurveTo(241,316,253,320);
    // myctx.quadraticCurveTo(311,331,315,332);

    // myctx.stroke();

});
function route_date(index){
    location.href="./map_detail.html";
}