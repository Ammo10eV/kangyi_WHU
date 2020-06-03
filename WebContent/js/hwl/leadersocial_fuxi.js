require.config({
	paths : {
		'echarts' : './echarts/echarts',
		'echarts/chart/force' : './echarts/echarts',
	}
});

// 使用
require([ 'echarts', 'echarts/chart/force', // 使用柱状图就加载force模块，按需加载
], function(ec) {
	// 基于准备好的dom，初始化echarts图表
	var myChart = ec.init(document.getElementById('leadersocial_fuxi'));
	function getNode(number) {
		var obj = new Array;
		$.ajax({
			url : "leaderServletfuxi?method=getNode"+ number,
			type : "POST",
			dataType : "text",
			cache : false,
			async : false,
			success : function(data) {
				obj = eval("(" + data + ")");
				console.log(obj);
			},
			error : function(data) {
				alert("请求数据库失败，数据没有传到前台！");
			}
		});
		return obj;
	}

	
	function getLink(number) {
		var obj = new Array;
		$.ajax({
			url : "leaderServletfuxi?method=getLink"+ number,
			type : "POST",
			dataType : "text",
			cache : false,
			async : false,
			success : function(data) {
				obj = eval("(" + data + ")");
				console.log(obj);
			},
			error : function(data) {
				alert("请求数据库失败，数据没有传到前台！");
			}
		});
		return obj;
	}
	function readNodes(number) {
		var obj = new Array;
		$.ajax({
			url : "leaderServletfuxi?method=readNodes" + number,
			type : "POST",
			dataType : "text", 
			cache : false,
			async : false,
//			beforeSend:function()
//			{
//				myChart.showLoading({
//					text : 'ring',
//				    effect : 'ring',
//				    textStyle : {
//				        fontSize : 20
//				    }
//				});	
//			},
			success : function(data) {
				obj = eval("(" + data + ")");
				console.log(obj);
			},
		});
		return obj;
	}

	function readLinks(number) {
		var obj = new Array;
		$.ajax({
			url : "leaderServletfuxi?method=readLinks" + number,
			type : "POST",
			dataType : "text",
			cache : false,
			async : false,
//			beforeSend:function()
//			{
//				myChart.showLoading({
//					text : 'ring',
//				    effect : 'ring',
//				    textStyle : {
//				        fontSize : 20
//				    }
//				});	
//			},
			success : function(data) {
				obj = eval("(" + data + ")");
				console.log(obj);
			},
		});
		return obj;
	}

	var option = {
			timeline : {
				data : [ '2014-07-27', '2014-07-28', '2014-07-29', '2014-07-30',					
						 '2014-07-31', '2014-08-01' ], 

							label : {
								formatter : function(s) {
									return s.slice(0, 10);
								}
							},
							autoPlay : true,
							playInterval : 3000,
							notMerge : true
						},
						
						options : function() {
							var op = [];
							for (var j = 0; j <13; j++) {
								op.push({
		title : {
			text : '社会网络意见领袖关系图',
			subtext : '数据来自微博',
			x : 'center',
			y : 'top'
		},
		tooltip : {
			trigger : 'item',
			formatter :  "{b}:{c}"
		},
		toolbox : {
			show : true,
			feature : {
				mark : {
					show : true,
				},
				restore : {
					show : true
				},
				saveAsImage : {
					show : true
				}
			}
		},

		series : [ {
			"type" : "force",
	         minRadius : 10,
	         maxRadius : 20,
	         gravity: 3,
	         scaling: 2,
	         linkSymbol: 'arrow',
			// 设置节点和连线的样式
			itemStyle : {
				normal : {
					label : {
						show : true,
						textStyle : {color : '#FF4500'}
					},					
					labelLine : {
						show : false,
						textStyle : {color : '#FF4500'}
					}	
				}
			},
			
			"nodes" : function() {
				var nodes = [];
				// 从txt文件读数据
				var nodelist = readNodes(j);
				// 从数据库读数据
//				var nodelist=getNode(j);
				var n = {};
				var r = []; // n为hash表，r为临时数组
				for (var i = 0; i < nodelist.length; i=i+2) // 遍历当前数组
				{
					if ((!n[nodelist[i]])) // 如果hash表中没有当前项
					{
						n[nodelist[i]] = true; // 存入hash表
						r.push(nodelist[i]);// 把当前数组的当前项push到临时数组里面
						r.push(nodelist[i + 1]);// 把当前数组的发布数量push到临时数组里面
					}
				}
				for (var i = 0; i < r.length; i=i+2)
				      {      nodes.push({
							"name" : r[i],
							"value":r[i+1]/5,
						 itemStyle : {
						 normal : { brushType : 'both',color:'#87CEFA',strokeColor : '#87CEFA' }
						             }
						               });
                      }
				return nodes;
			    }(),
			
			"links" : function() {
				var links = [];
				//从txt文件读取数据
				var linklist = readLinks(j);
				//从数据库读取数据
//				var linklist = getLink(j);
				for (var i = 0; i < linklist.length; i = i + 2) 
				    {	links.push({
						"source" :linklist[i],
						"target" :linklist[i + 1],
						itemStyle : {
							normal : { lineWidth : 1,strokeColor : '#F08080' }
						            }
					          });
                           }
				           return links;
			             }()
		               } ]
                      }
	                 )
               }
            	return op;
		   }()
         }
	

	// 为echarts对象加载数据
	myChart.setOption(option);


});



