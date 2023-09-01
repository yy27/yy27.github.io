$(function(){
	// chart01
	var dom = document.getElementById("guankong_1");
	var myChart = echarts.init(dom);
	var app = {};
	option1 = null;
	option1 = {
	    xAxis: {
	        type: 'category',
	        data: ['校门', '传达室/保卫室', '体育娱乐设施', '楼梯/楼道/大厅门','围墙','建筑物','教室','图书室','假山、池塘','树木'],
			axisTick:{
		        show:false
		    },
	        axisLabel:{
				interval:0,//横轴信息全部显示	
				rotate:-30,//-30度角倾斜显示
				textStyle: {
                    color: '#aaaaaa',
                    fontSize:'16'
                }
			},
			splitLine: {
				show: true,
				interval: 1,
				lineStyle: {
					width: 1,
					type: 'dotted'
				}
			},
			axisLine:{
				lineStyle:{
					color:'#677286',
					width:2,//这里是为了突出显示加上的	
				}
			}
	    },
	    grid: { // 控制图的大小，调整下面这些值就可以，
            x: 50,
            x2: 100,
            y: 40,
            y2: 80,// y2可以控制 X轴跟Zoom控件之间的间隔，避免以为倾斜后造成 label重叠到zoom上
        },
	    yAxis: {
	        type: 'value',
	        max: 100,
	        splitLine: {
	            show: false
	        },
	        axisTick:{
		        show:false
		    },
	        nameTextStyle: {
				fontSize: 24,
			},
			axisLine:{
				lineStyle:{
					color:'#ffffff',
					width:2,//这里是为了突出显示加上的	
				}
			}
	    },
	    series: [{
	        data: [6, 9, 1, 8,2,6, 9, 1, 8,2],
	        type: 'bar',
	        barWidth: 20,
	        itemStyle: {
                normal: {
                    color: function(params) {
                        // build a color map as your need.
                        var colorList = [
                          '#FF8D3B','#328CE6'
                        ];
                        var barColor = '';
                        if (params.value<5){
                        	barColor = colorList[0];
                        } else if(params.value >= 5 && params.value<10) {
                        	barColor = colorList[1];
                        } else {
                        	barColor = colorList[2];
                        }
                        return barColor
                    }
                }
            },
	    }]
	};
	if (option1 && typeof option1 === "object") {
	    myChart.setOption(option1, true);
	}
	// chart02
	var dom = document.getElementById("guankong_2");
	var myChart = echarts.init(dom);
	var app = {};
	option2 = null;
	option2 = {
	    yAxis: {
	        type: 'category',
	        data: ['校门', '传达室/保卫室', '体育娱乐设施', '楼梯/楼道/大厅门','围墙','建筑物','教室','图书室','假山、池塘','树木'],
			axisTick:{
		        show:false
		    },
	        axisLabel:{
				interval:0,//横轴信息全部显示	
				textStyle: {
                    color: '#aaaaaa',
                    fontSize:'14'
                }
			},
			splitLine: {
				show: true,
				interval: 1,
				lineStyle: {
					width: 1,
					type: 'dotted'
				}
			},
			axisLine:{
				lineStyle:{
					color:'#677286',
					width:2,//这里是为了突出显示加上的	
				}
			}
	    },
	    grid: { // 控制图的大小，调整下面这些值就可以，
            x: 80,
            x2: 40,
            y: 10,
            y2: 50,// y2可以控制 X轴跟Zoom控件之间的间隔，避免以为倾斜后造成 label重叠到zoom上
        },
	    xAxis: {
	        type: 'value',
	        max: 1,
	        splitLine: {
	            show: false
	        },
	        axisTick:{
		        show:false
		    },
	        nameTextStyle: {
				fontSize: 24,
			},
			axisLine:{
				lineStyle:{
					color:'#ffffff',
					width:2,//这里是为了突出显示加上的	
				}
			}
	    },
	    series: [{
	        data: [0.52, 0.42, 0.38, 0.32,0.29,0.25, 0.21, 0.19, 0.14,0.1],
	        type: 'bar',
	        barWidth: 10,
	        itemStyle: {
                normal: {
                    color: function(params) {
                        // build a color map as your need.
                        var colorList = [
                          '#FF263F','#FF8D3B','#328CE6'
                        ];
                        var barColor = '';
                        if (params.value<0.2){
                        	barColor = colorList[0];
                        } else if(params.value >= 0.2 && params.value<0.4) {
                        	barColor = colorList[1];
                        } else {
                        	barColor = colorList[2];
                        }
                        return barColor
                    }
                }
            },
	    }]
	};
	if (option2 && typeof option2 === "object") {
	    myChart.setOption(option2, true);
	}
	// chart 03
	var dom = document.getElementById("guankong_3");
	var myChart = echarts.init(dom);
	var app = {};
	option3 = null;
	option3 = {
	    radiusAxis: {
	        type: 'category',
	        data: ['食堂', '计算机室', '财务室','应急设施','体育娱乐设施','传达室/保卫室','教室','校门'],
	        z: 10,
	        axisLabel: {
	        	interval: 0,
	            color: 'rgba(255,255,255,0.5)'
	        },
	    },
	    polar: {
	    },
	    angleAxis: {
	    	max: 10,
	        boundaryGap: false,
	        splitLine: {
	            show: false
	        },
	        axisLabel:{
	        	show: false
	        },
	        axisLine: {
	            show: false
	        }
	    },
	    series: [{
	        type: 'bar',
	        barWidth: 15,
	        data: [4, 2, 8,3,7,1,2,4],
	        itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(
                        0, 0, 0, 1,
                        [
                            {offset: 0, color: '#2B80CF'},
                            {offset: 1, color: '#00FFCC'}
                        ]
                    )
                },
            },
	        coordinateSystem: 'polar',
	        name: 'C',
	        stack: 'a'
	    }]
	}
	if (option3 && typeof option3 === "object") {
	    myChart.setOption(option3, true);
	}
	// chart04
	var dom = document.getElementById("guankong_4");
	var myChart = echarts.init(dom);
	var app = {};
	option4 = null;
	option4 = {
		color: ['#FFAD4C','#E5F31D','#00E833','#01A0FB','#FF4BB9','#6A46F8'],
		legend: {
	        orient: 'horizontal',
	        x: 'center',
	        y: 'bottom',
	        textStyle: {
	        	color: '#fff'
	        },
	        data:['校门与围墙','校园环境','校舍','上放学','校外安全区域','专项防控']
	    },
		series: [
	        {
	            type:'pie',
	            radius: ['50%', '65%'],
	            center: ['50%', '40%'],
	            avoidLabelOverlap: false,
	            label: {
	                normal: {
	                    show: false,
	                    position: 'center'
	                },
	                emphasis: {
	                    show: true,
	                    textStyle: {
	                        fontSize: '30',
	                        fontWeight: 'bold'
	                    }
	                }
	            },
	            labelLine: {
	                normal: {
	                    show: false
	                }
	            },
	            data:[
	                {value:335, name:'校门与围墙'},
	                {value:310, name:'校园环境'},
	                {value:234, name:'校舍'},
	                {value:135, name:'上放学'},
	                {value:1548, name:'校外安全区域'},
	                {value:748, name:'专项防控'}
	            ]
	        }
	    ]
	}
	if (option4 && typeof option4 === "object") {
	    myChart.setOption(option4, true);
	}
	// chart05
	var dom = document.getElementById("guankong_5");
	var myChart = echarts.init(dom);
	var app = {};
	option5 = null;
	option5 = {
	    yAxis: {
	        type: 'category',
	        data: ['校门', '教室', '传达室/保卫室', '体育娱乐设施','应急设施','财务室','计算机室','食堂','办公室','围墙'],
	        axisLabel:{
				interval:0,//横轴信息全部显示	
				rotate:0,//-30度角倾斜显示
				textStyle: {
                    color: 'rgba(255,255,255,0.6)',
                    fontSize:'14'
                }
			},
			axisTick:{
		        show:false
		    }
			// axisLine:{
			// 	lineStyle:{
			// 		color:'#ffffff',
			// 		width:2,//这里是为了突出显示加上的	
			// 	}
			// }
	    },
	    grid: { // 控制图的大小，调整下面这些值就可以，
            x: 120,
            x2: 50,
            y: 10,
            y2: 30,// y2可以控制 X轴跟Zoom控件之间的间隔，避免以为倾斜后造成 label重叠到zoom上
        },
	    xAxis: {
	        type: 'value',
	        data: [0, 25, 50, 75, 100],
	        splitLine: {
	            show: false
	        },
	        axisTick:{
		        show:false
		    },
	        nameTextStyle: {
				fontSize: 24,
			},
			axisLine:{
				lineStyle:{
					color:'#ffffff',
					width:0,//这里是为了突出显示加上的	
				}
			}
	    },
	    series: [{ // For shadow
            type: 'bar',
            barWidth: 16,
            itemStyle: {
                normal: {
                	borderWidth: 1,
                	borderColor: 'rgba(255,255,255,0.4)',
                	color: 'rgba(255,255,255,0)',
                	barBorderRadius:[10, 10, 10, 10]
                }
            },
            barGap:'-80%',
            barCategoryGap:'40%',
            data: [100, 100, 100, 100,100,100,100,100,100,100],
            animation: false
        }, {
	        data: [20, 50, 30, 60,10,15,65,41,85,20],
	        type: 'bar',
	        barWidth: 10,
	        //顶部数字展示pzr
            itemStyle: {
                //柱形图圆角，鼠标移上去效果
                emphasis: {
                    barBorderRadius: [10, 10, 10, 10]
                },
                 
                normal: {
                    //柱形图圆角，初始化效果
                    barBorderRadius:[10, 10, 10, 10],
                    color: function(params) {
                        // build a color map as your need.
                        var colorList = [
                          '#FF0D31','#FF8D3B','#328CE6'
                        ];
                        var barColor = '';
                        if (params.value<30){
                        	barColor = colorList[0];
                        } else if(params.value >= 30 && params.value<60) {
                        	barColor = colorList[1];
                        } else {
                        	barColor = colorList[2];
                        }
                        return barColor
                    }
                }
            },
	    }]
	};
	if (option5 && typeof option5 === "object") {
	    myChart.setOption(option5, true);
	}
	// chart06
	var dom = document.getElementById("guankong_6");
	var myChart = echarts.init(dom);
	var app = {};
	option6 = null;
	option6 = {
	    xAxis: {
	        type: 'category',
	        data: ['校门', '传达室/保卫室', '体育娱乐设施', '楼梯/楼道/大厅门','围墙','建筑物','教室','图书室','假山、池塘','树木'],
			axisTick:{
		        show:false
		    },
	        axisLabel:{
				interval:0,//横轴信息全部显示	
				rotate:-45,//-30度角倾斜显示
				textStyle: {
                    color: '#aaaaaa',
                    fontSize:'16'
                }
			},
			splitLine: {
				show: true,
				interval: 1,
				lineStyle: {
					width: 1,
					type: 'dotted'
				}
			},
			axisLine:{
				lineStyle:{
					color:'#677286',
					width:2,//这里是为了突出显示加上的	
				}
			}
	    },
	    grid: { // 控制图的大小，调整下面这些值就可以，
            x: 50,
            x2: 30,
            y: 40,
            y2: 80,// y2可以控制 X轴跟Zoom控件之间的间隔，避免以为倾斜后造成 label重叠到zoom上
        },
	    yAxis: {
	        type: 'value',
	        splitLine: {
	            show: false
	        },
	        axisTick:{
		        show:false
		    },
	        nameTextStyle: {
				fontSize: 24,
			},
			axisLine:{
				lineStyle:{
					color:'#ffffff',
					width:2,//这里是为了突出显示加上的	
				}
			}
	    },
	    series: [{
	        data: [6, 9, 1, 8,2,6, 9, 1, 8,2],
	        type: 'bar',
	        barWidth: 10,
	        itemStyle: {
                normal: {
                    color: function(params) {
                        // build a color map as your need.
                        var colorList = [
                          '#FF8D3B','#328CE6'
                        ];
                        var barColor = '';
                        if (params.value<5){
                        	barColor = colorList[0];
                        } else if(params.value >= 5 && params.value<10) {
                        	barColor = colorList[1];
                        } else {
                        	barColor = colorList[2];
                        }
                        return barColor
                    }
                }
            },
	    }]
	};
	if (option6 && typeof option6 === "object") {
	    myChart.setOption(option6, true);
	}
	// chart07
	var dom = document.getElementById("guankong_7");
	var myChart = echarts.init(dom);
	var app = {};
	option7 = null;
	option7 = {
		color: ['#FFAD4C','#E5F31D','#00E833','#01A0FB','#FF4BB9','#6A46F8'],
		legend: {
	        orient: 'horizontal',
	        x: 'center',
	        y: 'bottom',
	        textStyle: {
	        	color: '#fff'
	        },
	        data:['住建','城管','其他部门','质量监督',
	        '工商','共青团','卫生计生','司法',
	        '食药监','交通运输','妇联','交管',
	        '地震','消防','公安','环保','文化','新闻出版广电']
	    },
		series: [
	        {
	            type:'pie',
	            radius: ['50%', '65%'],
	            center: ['50%', '40%'],
	            avoidLabelOverlap: false,
	            label: {
	                normal: {
	                    show: false,
	                    position: 'center'
	                },
	                emphasis: {
	                    show: true,
	                    textStyle: {
	                        fontSize: '30',
	                        fontWeight: 'bold'
	                    }
	                }
	            },
	            labelLine: {
	                normal: {
	                    show: false
	                }
	            },
	            data:[
	                {value:335, name:'住建'},
	                {value:310, name:'城管'},
	                {value:234, name:'其他部门'},
	                {value:135, name:'质量监督'},
	                {value:1548, name:'工商'},
	                {value:748, name:'共青团'},
	                {value:0, name:'卫生计生'},
	                {value:0, name:'司法'},
	                {value:0, name:'食药监'},
	                {value:0, name:'交通运输'},
	                {value:0, name:'妇联'},
	                {value:0, name:'交管'},
	                {value:0, name:'地震'},
	                {value:0, name:'消防'},
	                {value:0, name:'公安'},
	                {value:0, name:'环保'},
	                {value:0, name:'文化'},
	                {value:0, name:'新闻出版广电'},
	            ]
	        }
	    ]
	}
	if (option7 && typeof option7 === "object") {
	    myChart.setOption(option7, true);
	}
})