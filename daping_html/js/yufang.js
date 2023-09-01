$(function(){
	var dom = document.getElementById("yufanag_1");
	var myChart = echarts.init(dom);
	var app = {};
	option1 = null;
	option1 = {
	    yAxis: {
	        type: 'category',
	        data: ['突发地震、气象灾害预警应对制度', '住宿学生安全管理制度', '用水、用电、用气等相关设施设备的安全管理制度', '实验室和实训场所安全管理制度','门卫制度','校内安全定期检查和安全隐患报告制度','其他学校安全管理制度','学生安全信息通报制度','消防、防震、防雷安全制度','学校用车管理制度'],
	        axisLabel:{
				interval:0,//横轴信息全部显示	
				rotate:0,//-30度角倾斜显示
				textStyle: {
                    color: '#fff',
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
            x: 300,
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
	    series: [{ // For shadow
            type: 'bar',
            barWidth: 24,
            itemStyle: {
                normal: {
                	borderWidth: 1,
                	borderColor: 'rgba(255,255,255,0.6)',
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
	        barWidth: 16,
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

	// chart02
	var dom = document.getElementById("yufanag_2");
	var myChart = echarts.init(dom);
	var app = {};
	option2 = null;
	option2 = {
	    xAxis: {
	        type: 'category',
	        data: ['安全设施设备', '教学仪器', '建筑材料', '体育器材'],
			axisTick:{
		        show:false
		    },
	        axisLabel:{
				interval:0,//横轴信息全部显示	
				rotate:-30,//-30度角倾斜显示
				textStyle: {
                    color: '#eeeeee',
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
	        data: [20, 50, 30, 60],
	        type: 'bar',
	        barWidth: 20,
	        itemStyle: {
                normal: {
                    color: '#11AAF9'
                }
            },
	    },{
	        data: [40, 10, 70, 30],
	        type: 'bar',
	        barWidth: 20,
	        itemStyle: {
                normal: {
                    color: '#10F3A8'
                }
            },
	    }]
	};
	if (option2 && typeof option2 === "object") {
	    myChart.setOption(option2, true);
	}

	// chart03
	var dom = document.getElementById("yufanag_3");
	var myChart = echarts.init(dom);
	var app = {};
	option3 = null;
	option3 = {
	    yAxis: {
	        type: 'category',
	        boundaryGap: false,
	        data: ['人防', '物防', '技防'],
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
            y: 60,
            y2: 150,// y2可以控制 X轴跟Zoom控件之间的间隔，避免以为倾斜后造成 label重叠到zoom上
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
		    // 坐标轴名称离坐标轴位置
		    axisLabel: {           // 坐标轴文本标签，详见axis.axisLabel
	            show: true,
	            margin: 50,
	            // formatter: null,
	            textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
	                color: '#fff'
	            }
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
            barWidth: 34,
            itemStyle: {
                normal: {
                	borderWidth: 1,
                	borderColor: 'rgba(255,255,255,0.6)',
                	color: 'rgba(255,255,255,0)',
                	barBorderRadius:[30, 30, 30, 30]
                }
            },
            barGap:'-80%',
            barCategoryGap:'40%',
            data: [100, 100, 100],
            animation: false
        }, {
	        data: [20, 50, 30],
	        type: 'bar',
	        barWidth: 20,
	        //顶部数字展示pzr
            itemStyle: {
                //柱形图圆角，鼠标移上去效果
                emphasis: {
                    barBorderRadius: [20, 20, 20, 20]
                },
                 
                normal: {
                    //柱形图圆角，初始化效果
                    barBorderRadius:[20, 20, 20, 20],
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
	if (option3 && typeof option3 === "object") {
	    myChart.setOption(option3, true);
	}

	// chart04
	var dom = document.getElementById("yufanag_4");
	var myChart = echarts.init(dom);
	var app = {};
	option4 = null;
	option4 = {
	    xAxis: {
	        type: 'category',
	        data: ['自然灾害类', '安全生产类', '公共卫生类', '社会安定类','其他类'],
			axisTick:{
		        show:false
		    },
	        axisLabel:{
				interval:0,//横轴信息全部显示	
				rotate:-30,//-30度角倾斜显示
				textStyle: {
                    color: '#eeeeee',
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
	        data: [20, 50, 30, 60,20],
	        type: 'bar',
	        barWidth: 40,
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