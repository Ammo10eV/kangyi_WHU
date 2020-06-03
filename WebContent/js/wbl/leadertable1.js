
require.config({
	paths : {
		'echarts' : './echarts/echarts',
		'echarts/chart/map' : './echarts/echarts-map',
		'echarts/chart/bar' : './echarts/echarts',
		'echarts/chart/line' : './echarts/echarts',
	}
});

// 使用
require(
		[ 'echarts', 'echarts/chart/map' // 地图加载
		],
		function(ec) {
			// 基于准备好的dom，初始化echarts图表
			var myChart = ec.init(document.getElementById('addr_leader'));
			function getnum() {

				var obj = new Array;
				$.ajax({
					url : encodeURI("wbl?str=getnum"),
					type : "GET",
					dataType : "text",
					cache : false,
					async : false,
					success : function(data) {
						obj = eval("(" + data + ")");
						console.log(obj.length);
						// alert(obj);
					},
					error : function(data) {
						alert("请求数据库失败，数据没有传到前台！");
					}
				});
				return obj;
			}
			option = {
				title : {
					text : '意见领袖分布图',
					subtext : '点击省份展示意见领袖详情及粉丝指标比较'
				},
				tooltip : {
					trigger : 'item'
				},
				legend : {
					x : 'right',
					selectedMode : false,
					data : []
				},
				dataRange : {
					orient : 'horizontal',
					min : 0,
					max : 20,
					text : [ '高', '低' ], // 文本，默认为数值文本
					splitNumber : 0
				},
				toolbox : {
					show : true,
					orient : 'vertical',
					x : 'right',
					y : 'center',
					feature : {
						mark : {
							show : true
						},
//						dataView : {
//							show : true,
//							readOnly : false
//						}
					}
				},
				series : [
						{
							name : '意见领袖分布',
							type : 'map',
							mapType : 'china',
							mapLocation : {
								x : 'left'
							},
							selectedMode : 'single',
							itemStyle : {
								normal : {
									color:'#808080',
									label : {
										show : true
									}
								},
								emphasis : {
									color:'#FF8C00',
									label : {
										show : true
									}
								}
							},
							data :getnum()
						},
						{
							name : '意见领袖详情',
							type : 'pie',
							selectedMode: 'single',
							roseType : 'area',
							tooltip : {
								trigger : 'item',
								formatter : "{a} <br/>{b} : {d}%"
							},
							center : [
									document.getElementById('addr_leader').offsetWidth - 250,
									225 ],
							radius : [ 30, 120 ],
							data : []

						} ],
				animation : true
			};
			var ecConfig = require('echarts/config');
			myChart.on(ecConfig.EVENT.MAP_SELECTED, function(param) {
				var selected = param.selected;
				var mapSeries = option.series[0];
				var data = [];
				var legendData = [];
				var name;
				var str = '';
				for ( var p in selected) {
					if (selected[p]) {
						str += p + ' ';
					}
				}
				function getleader() {

					var obj = new Array;
					$.ajax({
						url :  encodeURI("wbl?str=" + str),
						type : "GET",
						dataType : "text",
						cache : false,
						async : false,
						success : function(data) {
							obj = eval("(" + data + ")");
							console.log(obj.length);
							// alert(obj);
						},
						error : function(data) {
							alert("请求数据库失败，数据没有传到前台！");
						}
					});
					return obj;
				}

				// alert(list);
				for (var p = 0, len = mapSeries.data.length; p < len; p++) {
					name = mapSeries.data[p].name;
					// mapSeries.data[p].selected = selected[name];
					if (selected[name]) {

						var list = getleader();
						for (var i = 0; i < list.length; i = i + 2) {

							data.push({
								name : list[i],
								value : list[i + 1]
							});

						}

						legendData.push(name);

					}
				}
				option.legend.data = legendData;
				option.series[1].data = data;
				myChart.setOption(option, true);

			});

			myChart.on(ecConfig.EVENT.PIE_SELECTED, function(param) {
		
				var selected = param.selected;
				var serie;
				var stri = '';
			  
				  for (var idx in selected) {
				        serie = option.series[idx];
				        for (var i = 0, l = serie.data.length; i < l; i++) {
				            if (selected[idx][i]) {
				                stri += serie.data[i].name;
				            }
				        }
				    }
	
				  parent.document.getElementById("textfield2").value=stri;
//					function getinfo() {
//
//						var obj = new Array;
//						$.ajax({
//							url : encodeURI(encodeURI("GetInfor?name=" + stri)),   //"GetInfor?name=" + stri
//							type : "GET",
//							dataType : "text",
//							cache : false,
//							async : false,
//							success : function(data) {
//								$('#myModal3').modal('show')
//							},
//							error : function(data) {
//								alert("请求数据库失败，数据没有传到前台！");
//							}
//						});
//						return obj;
//					}
//                getinfo();
			})
			myChart.setOption(option, true);
		}

);