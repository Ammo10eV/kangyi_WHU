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
	var myChart = ec.init(document.getElementById('leadersocial_suhuaji'));
	function getNode(number) {
		var obj = new Array;
		$.ajax({
			url : "leaderServletsuhuaji?method=getNode"+ number,
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
			url : "leaderServletsuhuaji?method=getLink"+ number,
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
			url : "leaderServletsuhuaji?method=readNodes" + number,
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
			url : "leaderServletsuhuaji?method=readLinks" + number,
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
				data : [ '2014-02-25', '2014-03-01', '2014-03-06', '2014-03-11',
						 '2014-03-16', '2014-03-22', '2014-03-28', '2014-04-03',
						 '2014-04-09', '2014-04-15'], 
//						 '2014-04-21', '2014-03-08'],
//						 '2014-03-09', '2014-03-10', '2014-03-11', '2014-03-12', 
//						 '2014-03-13', '2014-03-14', '2014-03-15', '2014-03-16', 
//						 '2014-03-17', '2014-03-18', '2014-03-19', '2014-03-20', 
//						 '2014-03-21', '2014-03-22', '2014-03-23', '2014-03-24', 
//						 '2014-03-25', '2014-03-26', '2014-03-27', '2014-03-28', 
//						 '2014-03-29', '2014-03-30', '2014-03-31', '2014-04-01', 
//						 '2014-04-02', '2014-04-03', '2014-04-04', '2014-04-05',
//						 '2014-04-06', '2014-04-07', '2014-04-08', '2014-04-09',
//						 '2014-04-10', '2014-04-11', '2014-04-12' , '2014-04-13',
//						 '2014-04-14', '2014-04-15'],
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



