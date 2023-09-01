/**
 * Created by yy on 2016/3/21.
 */
$(function(){
        var p_num = $("#product_nav li").length;
        for (var i = 0; i < p_num; i++) {
            $("#product_nav li").eq(i).attr("id","li_"+i);
            $("#product_nav li")[i].onclick = function () {
                var num = $(this).attr("id").split("_");
                if(num[1]<$("#par_product h1.title").length){
                    //$("html,body").animate({scrollTop:$("#par_product h1.title").eq(num[1]).offset().top},900);
                    $("#par_product h1.title").eq(num[1]).fadeIn().siblings("#par_product h1.title").hide();
                    $("#par_product .pra_class").eq(num[1]).fadeIn().siblings("#par_product .pra_class").hide();
                }
            }
        }
    $(".product_nav .all").click(function(){
        $("#par_product h1.title").fadeIn();
        $("#par_product .pra_class").fadeIn();
    })
});
