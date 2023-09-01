// JavaScript Document
var totalpage,pagesize,cpage,count,curcount,outstr; 
//初始化 
cpage = 1; 
totalpage = 56; 
pagesize = 10; 
outstr = ""; 
//导航对应的链接页面地址
var pageArray=[["0","index.html"],
				["1","orderManger.html"],
				["2","coupon.html"],
				["3","product.html"],
				["4","cutMessage.html"],
				["5","comment.html"],
				["6","goodsSearch.html"],
				["7","goodsTest.html"],
				["8","dynamicRegion.html"]]


//管理员操作生成表函数

var linkTable=function(arrTh,arrTr){
	
	var s = '<table>';
    s += '<tr class="tableTitle">';
    for(var i=0; i<arrTh.length; i++) {
        s += '<th>' + arrTh[i] + '</th>';
    }
    s += '</tr>';
    for(var i=0; i<arrTr.length; i++) {
        s += "<tr>";
		
        for(var j=0; j<arrTr[i].length-1; j++) {
            s += '<td>' + arrTr[i][j] + '</td>';
        }
		var aL=arrTr[i].length-1;
		var ope= new Array(); 
		ope=arrTr[i][aL].split("|");
		s+="<td><span>";
		for(var x=0; x<ope.length-1; x++) {
			s+="<a>"+ope[x]+"</a>&nbsp;&nbsp;|&nbsp;&nbsp;";
			}
		s+="<a>"+ope[ope.length-1]+"</a>";
        s += '</span></td></tr>';
    }
    s += '</table>';
	return s;
	}

//js表格 生成表格代码
//arrTh 表头信息
//arrTr 数据
var getTable = function(arrayTh, arrayTr){
    var s = '<table class="tbData">';
    s += '<tr>';
    for(var i=0; i<arrayTh.length; i++) {
        s += '<th>' + arrayTh[i] + '</th>';
    }
    s += '</tr>';
    for(var i=0; i<arrayTr.length; i++) {
        s += '<tr>';
        for(var j=0; j<arrayTr[i].length; j++) {
			//alert(arrTr[i][j]);
            s += '<td>' + arrayTr[i][j] + '</td>';
        }
        s += '</tr>';
    }
    s += '</table>';
    return s;
}

//js分页
//el:分页容器 count:总记录数 pageStep:每页显示多少个 pageNum:第几页 fnGo:分页跳转函数
var jsPage = function(el, count, pageStep, pageNum, fnGo) {
    this.getLink = function(fnGo, index, pageNum, text) {
        var s = '<span class="pageUp" href="#p' + index + '" onclick="' + fnGo + '(' + index + ');" ';
        if(index == pageNum) {
            s += 'class="aCur" ';
        }
        text = text || index;
        s += '>' + text + '</span> ';            
        return s;
    }
    
    //总页数
    var pageNumAll = Math.ceil(count/5);
    var itemNum = 5; //当前页左右两边显示个数
    pageNum = Math.max(pageNum, 1);
    pageNum = Math.min(pageNum, pageNumAll);
    var s = '';
	s+="<div class='tableFooter'><span class='pageAll'>共"+count+"条</span><div class='pageBox'>";
    if (pageNum < pageNumAll) {
        s += this.getLink(fnGo, pageNum+1, pageNum, '下一页');
		s+="<span class='pageNum'>"+pageNum+"/"+pageNumAll+"</span>";
    } else {
        s += '<span class="pageDown">下一页</span> ';
		s+="<span class='pageNum'>"+pageNum+"/"+pageNumAll+"</span>";
    }
	if (pageNum > 1) {
        s += this.getLink(fnGo, pageNum-1, pageNum, '上一页');
		
    } else {
		
        s += '<span class="pageUp">上一页</span> ';
		
    }

	s+="</div></div>"
    var divPage = $("#"+el);
	divPage.empty();
    divPage.append(s);
}
function operatorTable(pageIndex){
	//操作员管理表格头测试数据
var arrTh = ['编号','登录名','姓名','手机号码','操作'];
   //线上订单存储展示的五条数据
   var arrdate=[];
//操作员管理表格测试数据
	var arrTr = [['001234569014','haodilao1','海底捞','15612348967','维护|删除'],
				['0015','haodilao1','海底捞','15612348967','维护|删除'],
				['0016','haodilao1','海底捞','15612348967','维护|删除'],
				['0017','haodi4567lao1','海底捞','15612348967','维护|删除'],
				['0018','haodilao1','海底捞','15612348967','维护|删除'],
				['0019','haodilao1','海底捞','15612348967','维护|删除'],
				['0011','haodila4567890-o1','海底捞','15612348967','维护|删除'],
				['0022','haodilao1','海底捞','15612348967','维护|删除'],
				['0023','haodilao1','海底捞','15612348967','维护|删除'],
				['0025','haodilao1','海底捞','15612348967','维护|删除'],
				['0016','haodilao1','海底捞','15612348967','维护|删除'],
				['0034','haodilao1','海底捞','15612348967','维护|删除'],
				['0024','haodilao1','海底捞','15612348967','维护|删除']];
	var pageNumAll=arrTr.length;
	//alert(pageIndex);
	var a=(pageIndex-1)*5;
	var b=pageIndex*5;
		if(b>pageNumAll){
		b=pageNumAll;
		}
	for(var i=a; i<b; i++){
			arrdate.push(arrTr[i]);		 
	}
	var s = '<table>';
    s += '<tr class="tableTitle">';
    for(var i=0; i<arrTh.length; i++) {
        s += '<th>' + arrTh[i] + '</th>';
    }
    s += '</tr>';
    for(var i=0; i<arrdate.length; i++) {
        s += "<tr>";
		
        for(var j=0; j<arrdate[i].length-1; j++) {
            s += '<td>' + arrdate[i][j] + '</td>';
        }
		s+="<td><span><a onclick='maintain(this.id);'>维护</a>&nbsp;|&nbsp;<a id='delete_"+i+"' onclick='deleteOpe();'>删除</a></span></td>";
        s += '</tr>';
    }
    s += '</table>';
	//alert(a);
	$("#operatorTable").empty();
   $("#operatorTable").append(s);
    jsPage('operatorpage', pageNumAll, 10, pageIndex, 'operatorTable');
	}
//线上订单查询函数
function netOrder(pageIndex) {
	//线上订单表头
   var upOrderTh=['编号','订单编号','交易时间','用户名','商品名','商品单价','商品数量','订单金额','支付状态'];
   //线上订单存储展示的五条数据
   var arrdate=[];
   //线上订单测试数据
var upOrderTr=[['第一页','123456789','2014-01-24','匿名','海底捞','￥45.00','1','￥45.00','支付成功'],
				['054','123456789','2014-01-24','匿名','海底捞','￥45.00','1','￥45.00','支付成功'],
				['0014','123456789','2014-01-24','匿名','海底捞','￥45.00','1','￥45.00','支付成功'],
				['614','123456789','2014-01-24','匿名','海底捞','￥45.00','1','￥45.00','支付成功'],
				['0014','123456789','2014-01-24','匿名','海底捞','￥45.00','1','￥45.00','支付成功'],
				['第二页','123456789','2014-01-24','匿名','海底捞','￥45.00','1','￥45.00','支付成功'],
				['0814','123456789','2014-01-24','匿名','海底捞','￥45.00','1','￥45.00','支付成功'],
				['0014','123456789','2014-01-24','匿名','海底捞','￥45.00','1','￥45.00','支付成功'],
				['914','123456789','2014-01-24','匿名','海r底捞','￥45.00','1','￥45.00','支付成功'],
				['0014','123456789','2014-01-24','匿名','海底捞','￥45.00','1','￥45.00','支付成功'],
				['第三页','123456789','2014-01-24','匿ew名','海底捞','￥45.00','1','￥45.00','支付成功'],
				['0014','123wew89','2014-01-24','匿名','海底捞','￥45.00','1','￥45.00','支付成功'],
				['0014','123456789','2014-01-24','匿名','海底捞','￥45.00','1','￥45.00','支付成功'],
				['0014','123456789','2014-01-24','匿名','海底捞','￥45.00','1','￥45.00','支付成功'],
				['0014','123456789','2014-01-24','匿ew名','海底捞','￥45.00','1','￥45.00','支付成功'],
				['第四页','12365789','2014-01-24','匿名','海底捞','￥45.00','1','￥45.00','支付成功'],
				['0014','123456789','2014-01-24','匿名','海底捞','￥45.00','1','￥45.00','支付成功'],
				['0014','123456789','2014-01-24','匿名','海底捞','￥45.00','1','￥45.00','支付成功'],
				['0014','123549','2014-01-24','匿名','海底捞','￥45.00','1','￥45.00','支付成功'],
				['0014','123456789','2014-01-24','匿名','海底捞','￥45.00','1','￥45.00','支付成功'],
				['第五页','123456789','2014-01-24','匿名','海底捞','￥45.00','1','￥45.00','支付成功'],
				['0014','123456789','2014-01-24','匿名','海底捞','￥45.00','1','￥45.00','支付成功'],
				['0014','123456789','2014-01-24','匿名','海底捞','￥45.00','1','￥45.00','支付成功'],
				['0014','123456789','2014-01-24','匿名','海底捞','￥45.00','1','￥45.00','支付成功'],
				['0014','123456789','2014-01-24','匿名','海底捞','￥45.00','1','￥45.00','支付成功']];
	var pageNumAll=upOrderTr.length;
	
	var a=(pageIndex-1)*5;
	var b=pageIndex*5;
		if(b>pageNumAll){
		b=pageNumAll;
		}
	for(var i=a; i<b; i++){
			arrdate.push(upOrderTr[i]);		 
	}
	var a=getTable(upOrderTh, arrdate);
	//alert(a);
	$("#upOrderTable").empty();
   $("#upOrderTable").append(a);
    jsPage('pageBox', pageNumAll, 10, pageIndex, 'netOrder');
}
//优惠券
function couponTable(pageIndex) {
	//优惠券表头
   var couponTh=['编号','商品','有效日期','商品单价','已领取','状态','推送/终止'];
   //优惠券存储展示的五条数据
   var couponDate=[];
   //优惠券测试数据
var couponTr=[['第一页','海底捞火锅','2014/05/24-2014/-6/02','￥68.00','3','结束',''],
				['0012','海底捞火锅','2014/05/24-2014/-6/02','￥68.00','1','结束','']];
	var pageNumAll=couponTr.length;
	//alert(pageIndex);
	var a=(pageIndex-1)*5;
	var b=pageIndex*5;
	if(b>pageNumAll){
		b=pageNumAll;
		}
	for(var i=a; i<b; i++){
			couponDate.push(couponTr[i]);		 
	}
	var a=getTable(couponTh, couponDate);
	$("#couponTable").empty();
   $("#couponTable").append(a);
    jsPage('couponpage', pageNumAll, 10, pageIndex, 'couponTable');
}
//动态区域表格
function dynamTable(pageIndex) {
	
	//动态区域表头
   var dynamTh=['编号','动态活动名称','状态','所属地区','操作'];
   //动态区域存储展示的五条数据
   var dynamDate=[];
   //动态区域测试数据
var dynamTr=[['第一页','你看家我杀价','正常','青岛市','修改|详情|删除'],
				['0014','你看家我杀价','正常','青岛市','修改|详情|删除'],
				['0014','你看家我杀价','正常','青岛市','修改|详情|删除'],
				['0014','你看家我杀价','正常','青岛市','修改|详情|删除'],
				['0014','你看家我杀价','正常','青岛市','修改|详情|删除'],
				['0014','你看家我杀价','正常','青岛市','修改|详情|删除']];
	var pageNumAll=dynamTr.length;
	//alert(pageIndex);
	var a=(pageIndex-1)*5;
	var b=pageIndex*5;
	if(b>pageNumAll){
		b=pageNumAll;
		}
	for(var i=a; i<b; i++){
			dynamDate.push(dynamTr[i]);		 
	}
	//var a=linkTable(dynamTh, dynamDate);
	var s = '<table>';
    s += '<tr class="tableTitle">';
    for(var i=0; i<dynamTh.length; i++) {
        s += '<th>' + dynamTh[i] + '</th>';
    }
    s += '</tr>';
    for(var i=0; i<dynamDate.length; i++) {
        s += "<tr>";
		
        for(var j=0; j<dynamDate[i].length-1; j++) {
            s += '<td>' + dynamDate[i][j] + '</td>';
        }
		s+="<td><span><a onclick='maintain(this.id);'>修改</a>&nbsp;|&nbsp;<a onclick='maintain(this.id);'>详情</a>&nbsp;|&nbsp;<a id='delete_"+i+"' onclick='deleteOpe();'>删除</a></span></td>";
        s += '</tr>';
    }
    s += '</table>';
	$("#dynamTable").empty();
   $("#dynamTable").append(s);
    jsPage('dynampage', pageNumAll, 10, pageIndex, 'dynamTable');
}
//提货卷查询
function goodsSTable(pageIndex) {
	//提货卷表头
   var goodsSTh=['编号','商品名','商品名','购买时间','手续费','已领取','状态','推送机构'];
   //提货卷存储展示的五条数据
   var goodsSDate=[];
   //提货卷测试数据
var goodsSTr=[['第一页','23456789','海底捞火锅','2014/05/24','￥0.05','3','已使用','青岛银行'],
				['0012','23456789','海底捞火锅','2014/05/24','￥5.05','1','已使用','无'],
				['0012','23456789','海底捞火锅','2014/05/24','￥5.05','1','已使用','无'],
				['0012','23456789','海底捞火锅','2014/05/24','￥5.05','1','已使用','无'],
				['0012','23456789','海底捞火锅','2014/05/24','￥5.05','1','已使用','无'],
				['0012','23456789','海底捞火锅','2014/05/24','￥5.05','1','已使用','无']];
	var pageNumAll=goodsSTr.length;
	//alert(pageIndex);
	var a=(pageIndex-1)*5;
	var b=pageIndex*5;
	if(b>pageNumAll){
		b=pageNumAll;
		}
	for(var i=a; i<b; i++){
			goodsSDate.push(goodsSTr[i]);		 
	}
	var a=getTable(goodsSTh, goodsSDate);
	$("#goodsSTable").empty();
   $("#goodsSTable").append(a);
    jsPage('goodsSpage', pageNumAll, 10, pageIndex, 'goodsSTable');
}
//提货卷验证
function goodsTTable(pageIndex) {
	//提货卷表头
   var goodsTTh=['提货卷号','交易时间','商品信息','金额','商户名称'];
   //提货卷存储展示的五条数据
   var goodsTDate=[];
   //提货卷测试数据
var goodsTTr=[['第一页','2014/05/24','海底捞购物券','￥68.00','海底捞火锅'],
				['0012','2014/05/24','海底捞购物券','￥68.00','海底捞火锅'],
				['0012','2014/05/24','海底捞购物券','￥68.00','海底捞火锅'],
				['0012','2014/05/24','海底捞购物券','￥68.00','海底捞火锅'],
				['0012','2014/05/24','海底捞购物券','￥68.00','海底捞火锅'],
				['0012','2014/05/24','海底捞购物券','￥68.00','海底捞火锅'],
				['0012','2014/05/24','海底捞购物券','￥68.00','海底捞火锅'],
				['0012','2014/05/24','海底捞购物券','￥68.00','海底捞火锅']];
	var pageNumAll=goodsTTr.length;
	//alert(pageIndex);
	var a=(pageIndex-1)*5;
	var b=pageIndex*5;
	if(b>pageNumAll){
		b=pageNumAll;
		}
	for(var i=a; i<b; i++){
			goodsTDate.push(goodsTTr[i]);		 
	}
	var a=getTable(goodsTTh, goodsTDate);
	$("#goodsTTable").empty();
   $("#goodsTTable").append(a);
    jsPage('goodsTpage', pageNumAll, 10, pageIndex, 'goodsTTable');
}
//优惠信息
function cutMTable(pageIndex) {
	//优惠信息表头
   var cutMTh=['编号','商品名','类型','状态','操作'];
   //优惠信息存储展示的五条数据
   var cutMDate=[];
   //优惠信息测试数据
var cutMTr=[['第一页','海底捞火锅','优惠信息','结束','维护|删除'],
				['0012','海底捞火锅','优惠信息','结束','维护|删除'],
				['0012','海底捞火锅','优惠信息','结束','维护|删除'],
				['0012','海底捞火锅','优惠信息','结束','维护|删除'],
				['0012','海底捞火锅','优惠信息','结束','维护|删除'],
				['0012','海底捞火锅','优惠信息','结束','维护|删除'],
				['0012','海底捞火锅','优惠信息','结束','维护|删除'],
				['0012','海底捞火锅','优惠信息','结束','维护|删除'],
				['0012','海底捞火锅','优惠信息','结束','维护|删除'],
				['0012','海底捞火锅','优惠信息','结束','维护|删除']];
	var pageNumAll=cutMTr.length;
	//alert(pageIndex);
	var a=(pageIndex-1)*5;
	var b=pageIndex*5;
	if(b>pageNumAll){
		b=pageNumAll;
		}
	for(var i=a; i<b; i++){
			cutMDate.push(cutMTr[i]);		 
	}
	var a=linkTable(cutMTh, cutMDate);
	$("#cutMTable").empty();
   $("#cutMTable").append(a);
    jsPage('cutMpage', pageNumAll, 10, pageIndex, 'cutMTable');
}
//商品管理
function proMTable(pageIndex) {
	//商品管理表头
   var proMTh=['编号','商品名','优惠价','青银价','商品原价','预约','状态','操作'];
   //商品管理存储展示的五条数据
   var proMDate=[];
   //商品管理测试数据
var proMTr=[['第一页','海底捞火锅','￥10.00','￥68.00','￥78.00','无需预约','已下架','下架|二维码|预览'],
				['0012','海底捞火锅','￥10.00','￥68.00','￥78.00','无需预约','已下架','下架|二维码|预览'],
				['0012','海底捞火锅','￥10.00','￥68.00','￥78.00','无需预约','已下架','下架|二维码|预览'],
				['0012','海底捞火锅','￥10.00','￥68.00','￥78.00','无需预约','已下架','下架|二维码|预览'],
				['0012','海底捞火锅','￥10.00','￥68.00','￥78.00','无需预约','已下架','下架|二维码|预览'],
				['第二页','海底捞火锅','￥10.00','￥68.00','￥78.00','无需预约','已下架','下架|二维码|预览'],
				['0012','海底捞火锅','￥10.00','￥68.00','￥78.00','无需预约','已下架','下架|二维码|预览'],
				['0012','海底捞火锅','￥10.00','￥68.00','￥78.00','无需预约','已下架','下架|二维码|预览'],
				['0012','海底捞火锅','￥10.00','￥68.00','￥78.00','无需预约','已下架','下架|二维码|预览'],
				['0012','海底捞火锅','￥10.00','￥68.00','￥78.00','无需预约','已下架','下架|二维码|预览']];
	var pageNumAll=proMTr.length;
	var a=(pageIndex-1)*5;
	var b=pageIndex*5;
	if(b>pageNumAll){
		b=pageNumAll;
		}
	for(var i=a; i<b; i++){
			proMDate.push(proMTr[i]);		 
	}
	var a=linkTable(proMTh, proMDate);
	$("#proMTable").empty();
   $("#proMTable").append(a);
    jsPage('proMpage', pageNumAll, 10, pageIndex, 'proMTable');
}
//页面加载完成执行，相当于onload
$(function(){

	
	var nav=$("#nav").children();
	for(i=0;i<nav.length;i++){
		nav.eq(i).attr("id","nav_"+i);
		var navSpan=nav.eq(i).children("span");
		navSpan.css("background-image","url(images/icon_"+i+".jpg)");	
	}

    
	$("#nav li").click(function(){
		$(this).addClass("on").siblings().removeClass("on");
		var a=this.id.substr(this.id.length-1,this.id.length);
		$("#nowPage").attr("src","html/"+pageArray[a][1]);
	})
	$("#pubNot").click(function(event){
		with(document.getElementById('publicNotice')){
			style.display='';
			tabIndex = 1;
			focus();
		}
	})
	operatorTable(1);
	dynamTable(1);
	setpage();
});
//打开窗口封装方法
function openWindow(title,page,height,width){
	var content="<div class='openWindow_b'><p class='openWindow_h'><span class='title'>"+title+"</span>";
	content+="<span class='exit' onclick='windowClose()'></span></p>";
	content+="<iframe src='"+page+"' frameborder='0' height='0' ";
	content+="autoheight='true' scrolling='no' style='height:"+height+"px;width:"+width+"px;overflow:hidden;'></iframe></div>";
	$(".openWindow").empty().append(content);
	$(".openWindow").show();
}

function windowClose(){
	$('.openWindow').empty();
	$(".openWindow").hide();
}
function maintain(id){
	openWindow("维护管理员","maintain.html",'350','780');
	}

function deleteOpe(){
	openWindow("删除管理员","deleteOpe.html",'200','780');
	}

function gotopage(target) 
{     
    cpage = target;        //把页面计数定位到第几页 
    setpage(); 
    //reloadpage(target);    //调用显示页面函数显示第几页,这个功能是用在页面内容用ajax载入的情况 
} 
function setpage() 
{ 
    if(totalpage<=10){        //总页数小于十页 
        for (count=1;count<=totalpage;count++) 
        {    if(count!=cpage) 
            { 
                outstr = outstr + "<a href='javascript:void(0)' onclick='gotopage("+count+")'>"+count+"</a>"; 
            }else{ 
                outstr = outstr + "<span class='current' >"+count+"</span>"; 
            } 
        } 
    } 
    if(totalpage>10){        //总页数大于十页 
        if(parseInt((cpage-1)/10) == 0) 
        {             
            for (count=1;count<=10;count++) 
            {    if(count!=cpage) 
                { 
                    outstr = outstr + "<a href='javascript:void(0)' onclick='gotopage("+count+")'>"+count+"</a>"; 
                }else{ 
                    outstr = outstr + "<span class='current'>"+count+"</span>"; 
                } 
            } 
            outstr = outstr + "<a class='next' href='javascript:void(0)' onclick='gotopage("+count+")'></a>"; 
        } 
        else if(parseInt((cpage-1)/10) == parseInt(totalpage/10)) 
        {  
		var a=(parseInt((cpage-1)/10)*10);
  outstr = outstr + "<a class='previous' href='javascript:void(0)' onclick='gotopage("+a+")'></a>"; 
            for (count=parseInt(totalpage/10)*10+1;count<=totalpage;count++) 
            {    if(count!=cpage) 
                { 
                    outstr = outstr + "<a href='javascript:void(0)' onclick='gotopage("+count+")'>"+count+"</a>"; 
                }else{ 
                    outstr = outstr + "<span class='current'>"+count+"</span>"; 
                } 
            } 
        } 
        else 
        {  
		var b=(parseInt((cpage-1)/10)*10);
    outstr = outstr + "<a class='previous' href='javascript:void(0)' onclick='gotopage("+b+")'></a>"; 
            for (count=parseInt((cpage-1)/10)*10+1;count<=parseInt((cpage-1)/10)*10+10;count++) 
            {         
                if(count!=cpage) 
                { 
                    outstr = outstr + "<a href='javascript:void(0)' onclick='gotopage("+count+")'>"+count+"</a>"; 
                }else{ 
                    outstr = outstr + "<span class='current'>"+count+"</span>"; 
                } 
            } 
            outstr = outstr + "<a class='next' href='javascript:void(0)' onclick='gotopage("+count+")'></a>"; 
        } 
    }     
   // document.getElementById("setpage").append(outstr);
   $("#setpage").empty();
	$("#setpage").append(outstr);
    outstr = ""; 
} 












