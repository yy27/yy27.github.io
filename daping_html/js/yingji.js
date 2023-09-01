$(function(){
	// chart 01
	function chartBarPer (id,data) {
		var dom = document.getElementById(id);
		var myChart = echarts.init(dom);
		var app = {};
		option1 = null;
		option1 = {
			title: {
				textStyle:{
					color:'rgba(0,0,0,0)'
				}
			},
			radiusAxis: {
		        type: 'category',
		        data: ['','','',''],
		        z: 10,
		        axisLine: {
		            show: false
		        }
		    },
		    polar: {
		    },
		    angleAxis: {
		    	max: 100,
		        splitLine: {
		            show: false
		        },
		        axisLabel: {
		            show: false
		        },
		        axisTick: {
		            show: false
		        },
		        axisLine: {
		            show: false
		        }
		    },
		    grid: { // 控制图的大小，调整下面这些值就可以，
	            x: 10,
	            x2: 10,
	            y2: 10,// y2可以控制 X轴跟Zoom控件之间的间隔，避免以为倾斜后造成 label重叠到zoom上
	        },
		    series: [{
	            name:'访问来源',
	            type:'pie',
	            radius: ['65%', '75%'],
	            hoverAnimation: false,
	            avoidLabelOverlap: false,
	            zlevel: 9,
	            label: {
	                normal: {
	                    show: false,
	                    position: 'center'
	                }
	            },
	            itemStyle: {
	            	normal: {
	            		color: '#234591',
	            		borderWidth: 1,
	        			borderColor: '#246FB4'
	            	}
	            },
	            labelLine: {
	                normal: {
	                    show: false
	                }
	            },
	            data:[
	                {value:335, name:'直接访问'}
	            ]
	        }, {
		        type: 'bar',
		        barWidth: 10,
		        data: data,
		        zlevel: 10,
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
		if (option1 && typeof option1 === "object") {
		    myChart.setOption(option1, true);
		}
	}
	chartBarPer('yingji_1', [0,0,0,40])
	chartBarPer('yingji_2', [0,0,0,50])
	chartBarPer('yingji_3', [0,0,0,20])
	// chart 04
	var dom = document.getElementById("yingji_4");
	var myChart = echarts.init(dom);
	var app = {};
	option4 = null;
	option4 = {
	    xAxis: {
	        type: 'category',
	        data: ['自然灾害类', '安全生产类', '公共卫生类', '社会安定类', '其他类'],
			axisTick:{
		        show:false
		    },
	        axisLabel:{
				interval:0,//横轴信息全部显示	
				rotate:0,//-30度角倾斜显示
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
            x: 120,
            x2: 50,
            y: 20,
            y2: 40,// y2可以控制 X轴跟Zoom控件之间的间隔，避免以为倾斜后造成 label重叠到zoom上
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
	        axisLabel:{
				interval:0,//横轴信息全部显示	
				rotate:0,//-30度角倾斜显示
				textStyle: {
                    color: '#bbbbbb',
                    fontSize:'16'
                }
			},
			axisLine:{
				lineStyle:{
					color:'#bbbbbb',
					width:0,//这里是为了突出显示加上的	
				}
			}
	    },
	    series: [{ // For shadow
            type: 'bar',
            barWidth: 30,
            itemStyle: {
                normal: {color: 'rgba(9,73,123,1)'}
            },
            barGap:'-100%',
            barCategoryGap:'40%',
            data: [100,100,100,100,100],
            animation: false
        },{
	        data: [5, 16, 3, 20, 6],
	        type: 'bar',
	        barWidth: 30,
	        label: {
                normal: {
                    show: true,
                    position: 'insideTop',
                    color: '#000',
                    fontSize: '16',
                }
            },
	        itemStyle: {
                normal: {
                    color: '#65DCF5'
                }
            },
	    }]
	};
	if (option4 && typeof option4 === "object") {
	    myChart.setOption(option4, true);
	}

	// chart 05
	var dom = document.getElementById("yingji_5");
	var myChart = echarts.init(dom);
	var app = {};
	option5 = null;
	option5 = {
	    xAxis: {
	        type: 'category',
	        data: ['自然灾害类', '安全生产类', '公共卫生类', '社会安定类', '其他类'],
			axisTick:{
		        show:false
		    },
		    boundaryGap: false,
	        axisLabel:{
				interval:0,//横轴信息全部显示	
				rotate:0,//-30度角倾斜显示
				textStyle: {
                    color: '#bbbbbb',
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
            x: 150,
            x2: 50,
            y: 20,
            y2: 40,// y2可以控制 X轴跟Zoom控件之间的间隔，避免以为倾斜后造成 label重叠到zoom上
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
			axisLabel:{
				interval:0,//横轴信息全部显示	
				rotate:0,//-30度角倾斜显示
				textStyle: {
                    color: '#bbbbbb',
                    fontSize:'16'
                }
			},
			axisLine:{
				lineStyle:{
					color:'#677286',
					fontSize: '16',
					width:2,//这里是为了突出显示加上的	
				}
			}
	    },
	    series: [{
	        data: [8, 1, 3, 7, 13],
	        type: 'line',
	        smooth: true,
	        symbol: 'circle',
	        symbolSize: 10,
	        areaStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: '#004B79'
                    }, {
                        offset: 1,
                        color: 'rgba(0,0,0,0)'
                    }])
                }
            },
	        itemStyle: {
                normal: {
                    color: '#01A0FB'
                }
            }
	    }]
	};
	if (option5 && typeof option5 === "object") {
	    myChart.setOption(option5, true);
	}
	// chart 06
	var dom = document.getElementById("yingji_6");
	var myChart = echarts.init(dom);
	var app = {};
	option6 = null;
	option6 = {
	    radiusAxis: {
	        type: 'category',
	        data: ['轻微', '一般', '重大'],
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
	        axisLine: {
	            show: false
	        }
	    },
	    series: [{
	        type: 'bar',
	        barWidth: 15,
	        data: [4, 2, 8],
	        itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(
                        0, 0, 0, 1,
                        [
                            {offset: 0, color: '#8B50FF'},
                            {offset: 1, color: '#00D0FF'}
                        ]
                    )
                },
            },
	        coordinateSystem: 'polar',
	        name: 'C',
	        stack: 'a'
	    }]
	}
	if (option6 && typeof option6 === "object") {
	    myChart.setOption(option6, true);
	}

	// chart 07
	var dom = document.getElementById("yingji_7");
	var myChart = echarts.init(dom);
	var app = {};
	option7 = null;
	option7 = {
		tooltip: {
	        trigger: 'axis'
	    },
	    radar: [
	        {
	            indicator: [
	                {text: '安全会议', max: 100},
	                {text: '责任人', max: 100},
	                {text: '风控点', max: 100},
	                {text: '视频', max: 100},
	                {text: '隐患处理', max: 100}
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
	            itemStyle: {
	                normal: {
	                    color: '#0090D8'
	                }
	            },
	            areaStyle: {
	                normal: {
	                    opacity: 0.8
	                }
	            },
	            // itemStyle: {normal: {areaStyle: {type: 'default'}}},
	            data: [
	                {
	                    value: [60,73,85,40,20],
	                    name: '某软件'
	                }
	            ]
	        }
	    ]
	}
	if (option7 && typeof option7 === "object") {
	    myChart.setOption(option7, true);
	}
});