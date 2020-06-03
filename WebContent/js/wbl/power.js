require.config({
	paths : {
		'echarts' : './echarts/echarts',
		'echarts/chart/bar' : './echarts/echarts',
		'echarts/chart/line' : './echarts/echarts',

	}
});

// 使用
require([ 'echarts', 'echarts/chart/bar',// 使用柱状图就加载bar模块，按需加载
'echarts/chart/line' // 使用柱状图就加载bar模块，按需加载
], function(ec) {
	// 基于准备好的dom，初始化echarts图表
	var myChart = ec.init(document.getElementById('power'));
	option = {
		title : {
			text : '区域能量指标',
			subtext : '数据'
		},
		tooltip : {
			trigger : 'axis'
		},
		legend : {
			data : [ '东部沿海', '东北地区', '中部地区', '西部地区' ]
		},
		toolbox : {
			show : true,
			feature : {
				mark : {
					show : true
				},
				dataView : {
					show : true,
					readOnly : false
				},
				magicType : {
					show : true,
					type : [ 'line', 'bar' ]
				},
				restore : {
					show : true
				},
				saveAsImage : {
					show : true
				}
			}
		},
		calculable : true,
	
		
		xAxis : [ {
			type : 'value',
			boundaryGap : [ 0, 0.01 ]
		} ],
		yAxis : [ {
			type : 'category',
			data : [ '地区人口指标', '地区经济指标', '地区教育指标', '地区民族宗教指标', '地区公平指标',
					'地区保障指标', '地区安全指标', '应急能力指标' ]
		} ],
		series : [ {
			name : '东部沿海',
			type : 'bar',
			data : [ 18203, 23489, 29034, 10497, 13174, 14200, 20565, 34585 ]
		}, {
			name : '东北地区',
			type : 'bar',
			data : [ 19325, 23438, 31000, 12159, 13414, 15424, 26265, 24356 ]
		}, 
		 {
			name : '中部地区',
			type : 'bar',
			data : [ 19325, 23438, 31000, 12159, 13414, 10001, 28864, 29931 ]
		}, {
			name : '西部地区',
			type : 'bar',
			data : [ 19325, 23438, 31000, 12159, 13414, 10645, 15264, 12601 ]
		}

		]
	};
	myChart.setOption(option);
});