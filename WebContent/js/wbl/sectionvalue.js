require.config({
	paths : {
		'echarts' : './echarts/echarts',
		'echarts/chart/map' : './echarts/echarts-map',
		'echarts/chart/bar' : './echarts/echarts',
		'echarts/chart/line' : './echarts/echarts',
	}
});
var str = '';
var option1 = {
	title : {
		text : '区域能量图',
		subtext : '点击省份在柱形图内展示区域能量指标'
	},
	tooltip : {
		trigger : 'item',
		formatter : "{b} "
	},
	legend : {
		x : 'right',
		selectedMode : false,
		data : []
	},
	dataRange : {
		orient : 'horizontal',
		min : 0,
		max : 8,
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
//			dataView : {
//				show : true,
//				readOnly : false
//			}
		}
	},
	series : [ {
		name : '',
		type : 'map',
		
		mapType : 'china',
		mapLocation : {
			x : 'left'
		},
		selectedMode : 'single',
		itemStyle : {

			normal : {
				color : '#808080',
				label : {
					show : true
				}
			},
			emphasis : {
				color : '#FF8C00',
				label : {
					show : true
				}
			}
		},
		data : getpower()
		
	} ]

}

var option2 = {
	title : {
		text : '区域能量具体指标比较',
		subtext : ''
	},
	tooltip : {
		trigger : 'axis',
		formatter : "{b} "
	},
	legend : {
		selectedMode : false,
		data : []

	},
	toolbox : {
		show : true,
		feature : {
			mark : {
				show : true
			},
//			dataView : {
//				show : true,
//				readOnly : false
//			},
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
	grid:
    { x:150,
	      y:80,
	      x2:30
	      }
   ,
	xAxis : [ {
		
		type : 'value',
		axisLabel: {show: false},
		boundaryGap : [ 0, 0.01 ],
	    precision:4,
		splitNumber:5,
	    max:1
	} ],
	yAxis : [ {
		type : 'category',
		data : [ {
            value:'地区人口流动',
            textStyle: {	                     
                fontSize: 13,
                fontStyle: 'normal',
                fontWeight :'bold'	                       
            }
        },
        {
            value:'地区经济发展水平',
            textStyle: {	                     
                fontSize: 13,
                fontStyle: 'normal',
                fontWeight :'bold'	                       
            }
        },
        {
            value:'地区教育水平',
            textStyle: {	                     
                fontSize: 13,
                fontStyle: 'normal',
                fontWeight :'bold'	                       
            }
        },
        {
            value:'地区民族宗教复杂性',
            textStyle: {	                     
                fontSize: 13,
                fontStyle: 'normal',
                fontWeight :'bold'	                       
            }
        },
        {
            value:'地区收入分配公平性',
            textStyle: {	                     
                fontSize: 13,
                fontStyle: 'normal',
                fontWeight :'bold'	                       
            }
        },
        {
            value:'地区社会保障水平',
            textStyle: {	                     
                fontSize: 13,
                fontStyle: 'normal',
                fontWeight :'bold'	                       
            }
        },

        {
            value:'地区暴恐危险性',
            textStyle: {	                     
                fontSize: 13,
                fontStyle: 'normal',
                fontWeight :'bold'	                       
            }
        },
        {
            value:'地区应急能力',
            textStyle: {	                     
                fontSize: 13,
                fontStyle: 'normal',
                fontWeight :'bold'	                       
            }
        },
 ],
	axisLabel : {
        show:true,
     //   interval: 0,    // {number}
       // rotate: -40,
        margin: 5,		            
    }

	
	},
	
	],
	series : [ {
		name : '区域能量',
		type : 'bar',
		data : getdefault()
	},
	]
};
var myChart1;
var myChart2;

require([ 'echarts', 'echarts/chart/map', 'echarts/chart/bar' // 地图加载
], function(ec) {
	myChart1 = ec.init(document.getElementById('addr_leader'));

	myChart1.setOption(option1);
	myChart2 = ec.init(document.getElementById('addr_leader1'));
	myChart2.setOption(option2);
	var ecConfig = require('echarts/config');
	myChart1.on(ecConfig.EVENT.MAP_SELECTED, function(param) {
		var selected = param.selected;
		var mapSeries = option1.series[0];
		var data = [];
		var legendData = [];
		var name;
        str='';
		for ( var p in selected) {
			if (selected[p]) {
				str += p + ' ';
			}
		}
		//document.getElementById('message').innerHTML = str;
		for (var p = 0, len = mapSeries.data.length; p < len; p++) {
			name = mapSeries.data[p].name;

			// mapSeries.data[p].selected = selected[name];
			if (selected[name]) {
				var list = getvalue();
				for (var i = 0; i < list.length; i = i + 8) {
                    var a=list[i];
                    var b=list[i + 1];
                    var c=list[i + 2];
                    var d=list[i + 3];
                    var e=list[i + 4];
                    var f=list[i + 5];
                    var g=list[i + 6];
                    var h=list[i + 7];
					data.push({value:a});
					data.push({value:b});
					data.push({value:c});
					data.push({value:d});
					data.push({value:e});
					data.push({value:f});
					data.push({value:g});
					data.push({value:h});
				}

			}
		}
	
		option2.series[0].data = data;
		myChart2.setOption(option2, true);
		
	});
	
	
});
function getpower() {

	var obj = new Array;
	$.ajax({
		url : encodeURI("Sectionpower?str=getpower"),
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

function getvalue() {

	var obj = new Array;
	$.ajax({
		url : encodeURI("Sectionpower?str=" + str),
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

function getdefault() {

	var obj = new Array;
	$.ajax({
		url : encodeURI("Sectionpower?str=default"),
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