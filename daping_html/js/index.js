$(function(){
	var dom = document.getElementById("container_1");
	var myChart = echarts.init(dom);
	var app = {};
	option1 = null;
	option1 = {
	    yAxis: {
	        type: 'category',
	        boundaryGap : false,
	        data: ['安全区域', '安全教育', '安全概况', '安全制度'],
	        axisLabel:{
				interval:0,//横轴信息全部显示	
				rotate:0,//-30度角倾斜显示
				textStyle: {
                    color: '#fff',
                    fontSize:'16'
                }
			},
			axisTick:{
		        show:false
		    },
			axisLine:{
				lineStyle:{
					color:'#ffffff',
					width:2,//这里是为了突出显示加上的	
				}
			}
	    },
	    grid: { // 控制图的大小，调整下面这些值就可以，
            x: 100,
            x2: 50,
            y2: 50,// y2可以控制 X轴跟Zoom控件之间的间隔，避免以为倾斜后造成 label重叠到zoom上
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
	    series: [{
	        data: [20, 50, 30, 60],
	        type: 'bar',
	        barWidth: 20,
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
	if (option1 && typeof option1 === "object") {
	    myChart.setOption(option1, true);
	}



	// chart 02
	var dom = document.getElementById("container_2");
	var myChart = echarts.init(dom);
	var app = {};
	option2 = null;
	option2 = {
	    tooltip: {
	        trigger: 'axis'
	    },
	    radar: [
	        {
	            indicator: [
	                {text: '风控点隐患覆盖率', max: 100},
	                {text: '部门参与率', max: 100},
	                {text: '隐患整改统计率', max: 100},
	                {text: '风控点巡检率', max: 100}
	            ],
	            radius: 90,
	            name: {
	            	fontSize: 16,
	            	color: '#ffffff'
	            },
	            splitLine:{show: false},
	            splitArea : {show : false}
	        }
	    ],
	    series: [
	        {
	            type: 'radar',
	            tooltip: {
	                trigger: 'item'
	            },
	            itemStyle: {
	                normal: {
	                    color: '#6CF5F2'
	                }
	            },
	            areaStyle: {
	                normal: {
	                    opacity: 0.3
	                }
	            },
	            // itemStyle: {normal: {areaStyle: {type: 'default'}}},
	            data: [
	                {
	                    value: [60,73,85,40],
	                    name: '某软件'
	                }
	            ]
	        }
	    ]
	};
	if (option2 && typeof option2 === "object") {
	    myChart.setOption(option2, true);
	}



	// chart 03
	var dom = document.getElementById("container_3");
	var myChart = echarts.init(dom);
	var app = {};
	option3 = null;
	option3 = {
		yAxis: {
	        type: 'value',
	        axisLabel:{
				interval:0,//横轴信息全部显示	
				rotate:0,//-30度角倾斜显示
				textStyle: {
                    color: '#fff',
                    fontSize:'16'
                }
			},
	        splitLine: {
	            show: false
	        },
			axisTick:{
		        show:false
		    },
			axisLine:{
				lineStyle:{
					color:'#ffffff',
					width:2,//这里是为了突出显示加上的	
				}
			}
	    },
	    grid: { // 控制图的大小，调整下面这些值就可以，
            x: 60,
            x2: 50,
            y2: 50,// y2可以控制 X轴跟Zoom控件之间的间隔，避免以为倾斜后造成 label重叠到zoom上
        },
	    xAxis: {
	        data: ['应急预案', '应急演练', '应急处置', '责任追究'],
	        nameTextStyle: {
				fontSize: 24,
			},
			boundaryGap: false,
			axisLine:{
				lineStyle:{
					color:'#ffffff',
					width:2,//这里是为了突出显示加上的	
				}
			}
	    },
	    series: [
	    	{
	            name:'模拟数据',
	            type:'line',
	            smooth: true,
	            symbol: 'circle',
	            symbolSize: 5,
	            sampling: 'average',
	            itemStyle: {
	                normal: {
	                    color: '#27DEE0'
	                }
	            },
	            stack: 'a',
	            areaStyle: {
	                normal: {
	                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
	                        offset: 0,
	                        color: '#6CF5F2'
	                    }, {
	                        offset: 1,
	                        color: '#061024'
	                    }])
	                }
	            },
	            data: [0.992,0.728,0.4,0]
	        }
	    ]
	}
	if (option3 && typeof option3 === "object") {
	    myChart.setOption(option3, true);
	}



	// chart 04
	var dom = document.getElementById("container_4");
	var myChart = echarts.init(dom);
	var app = {};
	option4 = null;
	option4 = {
	    xAxis: {
	        type: 'category',
	        data: ['1月', '2月', '3月', '4月', '5月', '6月'],
			axisTick:{
		        show:false
		    },
	        axisLabel:{
				interval:0,//横轴信息全部显示	
				rotate:-30,//-30度角倾斜显示
				textStyle: {
                    color: '#677286',
                    fontSize:'16'
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
            x2: 50,
            y: 20,
            y2: 40,// y2可以控制 X轴跟Zoom控件之间的间隔，避免以为倾斜后造成 label重叠到zoom上
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
					color:'#677286',
					width:0,//这里是为了突出显示加上的	
				}
			}
	    },
	    series: [{
	        data: [20, 50, 30, 60, 10, 40],
	        type: 'bar',
	        barWidth: 30,
	        itemStyle: {
                normal: {
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
	if (option4 && typeof option4 === "object") {
	    myChart.setOption(option4, true);
	}
});