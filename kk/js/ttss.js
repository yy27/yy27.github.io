var DEFAULT_VERSION = "8.0";
var ua = navigator.userAgent.toLowerCase();
var isIE = ua.indexOf("msie")>-1;
var safariVersion;
if(isIE){
    safariVersion =  ua.match(/msie ([\d.]+)/)[1];
}
if(safariVersion <= DEFAULT_VERSION ){
   $(function(){
      $("body").append("<div style='width:100%; position:fixed; top:0; left:0; color:#fff; height:60px; text-align:center; line-height:60px; background-color:#000;'>本网站已不再兼容ie8以及以下版本，请升级浏览器</div>");   
   })
}


//$(function(){
//    $("img").lazyload({
//            //placeholder : "grey.gif", //加载图片前的占位图片
//            effect : "fadeIn" //加载图片使用的效果(淡入)
//        });
////     $(window).bind("load", function() {
////     var timeout = setTimeout(function() {$("img").trigger("sporty")}, 3000);
//// });
//})
//顶部topbar-nav移动显示
$( function(){
    var cart_list_h=$(".cart-list").height();
    $(".topbar-nav ul li").hover(function(){
        $(this).children("dl").css({"top":"40px","visibility":"visible","opacity":"1"});
        $(this).children(".topbar_car").css({"height":cart_list_h});
    },function(){
        $(this).children("dl").css({"top":"0px","visibility":"hidden","opacity":"0"});
        $(this).children(".topbar_car").css({"height":"0"});
    })
})
//顶部topbar-nav移动显示结束

// 我的搜索框
$(function(){
    $("#searchIcon").click(function(){
        $(".kk_search").fadeIn(400);
        $(".search").css({
            "opacity":"1",
            "transform":"translate(0)",
            "-webkit-transform":"translate(0)",
            "-moz-transform":"translate(0)",
            "-ms-transform":"translate(0)",
            "-o-transform":"translate(0)"
        });
    })
    $("#searchClose").click(function(){
        $(".kk_search").fadeOut(400);
        $(".search").css({
            "opacity":"0",
            "transform":"translate(50px)",
            "-webkit-transform":"translate(50px)",
            "-moz-transform":"translate(50px)",
            "-ms-transform":"translate(50px)",
            "-o-transform":"translate(50px)"
        });
    })
})
// 我的广告图视频图切换
$(function(){
        var index = 0;
        var my_timer = null;
        var length = $("#sliderHover li").length;
       
        $("#sliderHover li").hover(function(){
            clearInterval(my_timer);
            index = $(this).index();
           $("#sliderId li").eq(index).fadeIn().siblings().fadeOut();
        },function(){
            autopaly();
        })

        $("#sliderId li").hover(function(){
            clearInterval(my_timer);
        },function(){
            autopaly();
        })

        function autopaly(){
            my_timer = setInterval(function(){
                index++;
                if (index>length-1) {
                  index=0;
                }
                
            $("#sliderId li").eq(index).fadeIn().siblings().fadeOut();
            },4000)
        }
        autopaly();
    })

//图片黑白滑块
$(function(){
    $(".item").each(function(){
        var timer=null;
        var a=$(this);
        var index=0;
        var length=$(this).children("li").length;
        for(var i=0;i<length;i++){
            a.children("li").eq(i).attr("id","item_"+i);
            a.children("li").eq(i).css("z-index",10-i);
            if(i==0){
                a.children("li").eq(i).attr("name",0);
                a.children("li").eq(i).css("left",0);
            }else if(i==1){
                a.children("li").eq(i).attr("name",240*(i+1));
                a.children("li").eq(i).css("left",240*(i+1));
            } else {
                a.children("li").eq(i).attr("name",240*(i+1)-10*(i-1));
                a.children("li").eq(i).css("left",240*(i+1)-10*(i-1));
            }

        }
        $(this).children("li").hover(function(){
            clearInterval(timer);
            index=$(this).index();
            var idName = $(this).attr("id").split("_");//获取当前li的id，得到鼠标当前停留在第几个li
            for(var j=0;j<length;j++){//遍历ul中的所有的li
                if(a.children("li").eq(j).attr("class")=="active"){//获取当前展开的li即classname为active
                    if(j<idName[1]){//前一个展开的li（序号为j）在现在鼠标停留的li（序号为idName[1]）的前方
                        for(var q=j+1;q<=idName[1];q++){//遍历（j+1）-idName[1] 每一个都左移
                            var left_num = parseInt(a.children("li").eq(q).attr("name"))-250;
                            a.children("li").eq(q).attr("name",left_num);
                            a.children("li").eq(q).css("left",left_num);
                            a.children("li").removeClass('active');
                            a.children("li").eq(index).addClass('active');
                        }
                    } else if(j>idName[1]){//前一个展开的li（序号为j）在现在鼠标停留的li（序号为idName[1]）的后方
                        for(var s=j;s>idName[1];s--){//遍历j-idName[1] 每一个都右移
                            var left_num = parseInt(a.children("li").eq(s).attr("name"))+250;
                            a.children("li").eq(s).attr("name",left_num);
                            a.children("li").eq(s).css("left",left_num);
                            a.children("li").removeClass('active');
                            a.children("li").eq(index).addClass('active');
                        }
                    }
                }
            }
            //$(this).css("left",left_num);

        },function(){
            auplay();
        })
        function auplay(){
            timer=setInterval(function(){
                index++;
                if(index>length-1){
                    index=0;
                    for(var n=length-1;n>=0;n--){//遍历j-idName[1] 每一个都右移
                        //alert(n);
                        var left_num = parseInt(a.children("li").eq(n).attr("name"))+250;
                        a.children("li").eq(n).attr("name",left_num);
                        a.children("li").eq(n).css("left",left_num);
                        a.children("li").removeClass('active');
                        a.children("li").eq(n).addClass('active');
                    }
                }
                var left_num = parseInt(a.children("li").eq(index).attr("name"))-250;
                a.children("li").eq(index).attr("name",left_num);
                a.children("li").eq(index).css("left",left_num);
                a.children("li").removeClass('active');
                a.children("li").eq(index).addClass('active');
            },5000)
        }
        auplay();
    })

})

//产品切换
$(function(){
    $(".main").each(function(){
        var this_main=$(this);
        var this_banner=this_main.children(".banner");//类main下的banner元素
        var banner_width=this_banner.children("li").width();//类main下的banner元素的子元素li的宽度
        var li_count=this_banner.children("li").length;//类main下的banner元素的子元素li的个数
        var timer=null;
        //遍历li，给每个li加css left;
        var n=0;
        this_banner.children("li").each(function(){
            $(this).css({"left":100*n+'%'})
            n++;
        })
        //点击动画
        var index=0;
        this_main.children(".next").click(function(){
            index++;
            if(index>li_count-1){
                index=0;
            }
            this_banner.stop().animate({
                left:100*index*(-1)+'%'
            },800)
           

            this_main.children(".btn_hover").children("li").eq(index).addClass("carrentBtn").siblings().removeClass("carrentBtn");
        }).hover(function(){
           // clearInterval(timer);
        },function(){
           // autoPlay()
        })
        this_main.children(".prev").click(function(){
            index--;
            if(index<0){
                index=li_count-1;
            }
            this_banner.stop().animate({
                left:100*index*(-1)+'%'
            },800)

      

            this_main.children(".btn_hover").children("li").eq(index).addClass("carrentBtn").siblings().removeClass("carrentBtn");
        }).hover(function(){
            //clearInterval(timer);
        },function(){
            //autoPlay()
        })
        //获取焦点图焦点，修改样式
        for(var i=0;i<li_count;i++){
            this_main.children(".btn_hover").append("<li></li>")
        }
        var btn_hover_widtn=this_main.children(".btn_hover").width();
        this_main.children(".btn_hover").css({"position":"absolute","bottom":"23px","left":50+'%',"margin-left":btn_hover_widtn/2*(-1)});
        this_main.children(".btn_hover").children("li").first().addClass("carrentBtn")
        this_main.children(".btn_hover").children("li").hover(function(){
            //clearInterval(timer);//停止自动播放
            index =$(this).index();
            $(this).addClass("carrentBtn").siblings().removeClass("carrentBtn");
            this_banner.stop().animate({
                left:100*index*(-1)+'%'
            },800)
        },function(){
           // autoPlay()
        })

        //自动播放函数
        function autoPlay(){
            timer=setInterval(function(){
                index++;
                if(index>li_count-1){
                    index=0;
                }
                this_banner.stop().animate({
                    left:100*index*(-1)+'%'
                },800)

                this_main.children(".btn_hover").children("li").eq(index).addClass("carrentBtn").siblings().removeClass("carrentBtn");
            },10000)
        }
        //移动到banner图上停止播放，离开自动播放
        this_banner.hover(function(){
            //clearInterval(timer);
        },function(){
           // autoPlay()
        })
        //调用自动播放函数
        //autoPlay()
    })
})



//回到顶部
$(function () {
    $(window).scroll( function(){
        var scroll_top=$( document).scrollTop();
        if(scroll_top>100){
            $("#scroll").show();
        }
        else{
            $("#scroll").hide();
        }
    })


    var speed = 200;//滚动速度
    var h=document.body.clientHeight;
    //回到顶部
    $("#toTop").click(function () {
        $('html,body').animate({
                scrollTop: '0px'
            },
            speed);
    });

});
//头部践行者介绍切换
$(function(){
    var index = 0;
    var length=$(".pra_intro ul li").length;

    $(".pra_intro").children(".next").click(function(){
        index++;
        if(index>length-1){
            index=0;
        }
        $(".pra_intro ul li").eq(index).fadeIn(1000).siblings().fadeOut(1000);
    })
    $(".pra_intro").children(".prea").click(function(){
        index = index-1;
        if(index<0){
            index=length-1;
        }
        $(".pra_intro ul li").eq(index).fadeIn(1000).siblings().fadeOut(1000);
    })
});

