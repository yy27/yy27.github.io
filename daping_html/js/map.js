//创建地图
    var map = new AMap.Map('allmap', {
        resizeEnable: true, //是否监控地图容器尺寸变化
        zoom:11, //初始化地图层级
        mapStyle: "amap://styles/853c29d5546bf65519598836664fe260"
    });
    
    map.on("complete", function(){
       // log.success("地图加载完成！");  
    });
    //just some colors
    var colors = ["#B2BCCB"];

    AMapUI.load(['ui/geo/DistrictExplorer', 'lib/$'], function(DistrictExplorer, $) {

        //创建一个实例
        var districtExplorer = window.districtExplorer = new DistrictExplorer({
            eventSupport: true, //打开事件支持
            map: map
        });

        //当前聚焦的区域
        var currentAreaNode = null;

        //鼠标hover提示内容
        var $tipMarkerContent = $('<div class="tipMarker top"></div>');

        var tipMarker = new AMap.Marker({
            content: $tipMarkerContent.get(0),
            offset: new AMap.Pixel(0, 0),
            bubble: true
        });

        //根据Hover状态设置相关样式
        function toggleHoverFeature(feature, isShowBg, isShowTip, position) {

            tipMarker.setMap(isShowTip ? map : null);

            if (!feature) {
                return;
            }

            var props = feature.properties;
            if (isShowTip) {

                //更新提示内容
                $tipMarkerContent.html(props.name);
                //更新位置
                tipMarker.setPosition(position || props.center);
            }
            if (!isShowTip) {
            	//更新相关多边形的样式
	            var polys = districtExplorer.findFeaturePolygonsByAdcode(props.adcode);
	            for (var i = 0, len = polys.length; i < len; i++) {

	                polys[i].setOptions({
	                    fillColor: isShowBg ? '#03B4C6' : '#B2BCCB',
	                    fillOpacity: isShowBg ? 0.7 : 0.35
	                });
	            }
            }
            
        }

        //监听feature的hover事件
        districtExplorer.on('featureMouseout featureMouseover', function(e, feature) {
            toggleHoverFeature(feature, e.type === 'featureMouseover', false, e.originalEvent ? e.originalEvent.lnglat : null);
        });

        //监听鼠标在feature上滑动
        districtExplorer.on('featureMousemove', function(e, feature) {
            //更新提示位置
            tipMarker.setPosition(e.originalEvent.lnglat);
        });

        //外部区域被点击
        districtExplorer.on('outsideClick', function(e) {

        });

        //feature被点击
        districtExplorer.on('featureClick', function(e, feature) {
        	toggleHoverFeature(feature, false, true, e.originalEvent ? e.originalEvent.lnglat : null);
        	tipMarker.setPosition(e.originalEvent.lnglat);

        });

        //绘制某个区域的边界
        function renderAreaPolygons(areaNode) {

            //更新地图视野
            map.setBounds(areaNode.getBounds(), null, null, true);

            //清除已有的绘制内容
            districtExplorer.clearFeaturePolygons();

            //绘制子区域
            districtExplorer.renderSubFeatures(areaNode, function(feature, i) {

                var fillColor = colors[i % colors.length];
                var strokeColor = colors[colors.length - 1 - i % colors.length];

                return {
                    cursor: 'pointer',
                    bubble: true, // 冒泡到地图
                    strokeColor: '#ADB4C4', //线颜色
                    strokeOpacity: 1, //线透明度
                    strokeWeight: 1, //线宽
                    fillColor: fillColor, //填充色
                    fillOpacity: 0.35, //填充透明度
                };
            });

            //绘制父区域
            districtExplorer.renderParentFeature(areaNode, {
                cursor: 'pointer',
                bubble: true,
                strokeColor: '#ADB4C4', //线颜色
                strokeOpacity: 1, //线透明度
                strokeWeight: 1, //线宽
                fillColor: null, //填充色
                fillOpacity: 0.35, //填充透明度
            });
        }

        //切换区域
        function switch2AreaNode(adcode, callback) {

            if (currentAreaNode && ('' + currentAreaNode.getAdcode() === '' + adcode)) {
                return;
            }

            loadAreaNode(adcode, function(error, areaNode) {

                if (error) {

                    if (callback) {
                        callback(error);
                    }

                    return;
                }

                currentAreaNode = window.currentAreaNode = areaNode;

                //设置当前使用的定位用节点
                districtExplorer.setAreaNodesForLocating([currentAreaNode]);

                // refreshAreaNode(areaNode);

            	renderAreaPolygons(areaNode);

                if (callback) {
                    callback(null, areaNode);
                }
            });
        }

        //加载区域
        function loadAreaNode(adcode, callback) {

            districtExplorer.loadAreaNode(adcode, function(error, areaNode) {

                if (error) {

                    if (callback) {
                        callback(error);
                    }

                    console.error(error);

                    return;
                }

                // renderAreaPanel(areaNode);

                if (callback) {
                    callback(null, areaNode);
                }
            });
        }
        //全国
        switch2AreaNode(370000);
    });