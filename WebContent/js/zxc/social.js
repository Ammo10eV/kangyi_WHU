//路径配置
require.config({
	paths : {
		'echarts' : './echarts/echarts',
		'echarts/chart/force' : './echarts/echarts',
	}
});
function NoSubmit(ev)
{
    if( ev.keyCode == 13 )
    {
        return false;
    }
    return true;
}

function myFunction() {
	var x = document.getElementById("inputvalue").value;
	// 点击，回传数值
	function BackLinks(str) {
		var obj = new Array;
		$.ajax({
			url : encodeURI(encodeURI("socialServlet?method=BackLinks" + str)),
			type : "POST",
			dataType : "text",
			cache : false,
			async : false,
			success : function(data) {
				obj = eval("(" + data + ")");
				console.log(obj);
			},
		});
		return obj;
	}

	function BackNodes(str) {
		var obj = new Array;
		$.ajax({
			url : encodeURI(encodeURI("socialServlet?method=BackNodes" + str)),
			type : "POST",
			dataType : "text",
			cache : false,
			async : false,
			success : function(data) {
				obj = eval("(" + data + ")");
				console.log(obj);
			},
		});
		return obj;
	}
	var namelist = BackLinks(x);
	var forwardlist = BackNodes(x);
	if (x !== "") {
		if (forwardlist.indexOf(x)>=0) {
			document.getElementById("anchor_scroll").click();//检索定位
			require([ 'echarts', 'echarts/chart/force', // 使用柱状图就加载force模块，按需加载
			  		], function(ec) {
			  			var myChart = ec.init(document.getElementById('social1'));
			  			var option = {
			  				title : {
			  					text : ''+x+'的社会网络关系图',
//			  					subtext : '数据来自微博',
			  					x : 'left',
			  					y : 'top'
			  				},
			  				tooltip : {
			  					trigger : 'item',
			  					formatter : "{b}:{c}"
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
			  					center : [ '50%', '50%' ],
			  					ratioScaling : true,// 是否根据屏幕比例拉伸
			  					large : true,
			  					useWorker : true,
			  					steps : 5,
			  					minRadius : 5,
			  					maxRadius : 30,
			  					gravity : 3,
			  					scaling : 2.7,
			  					// 从weibo_info获取name
			  					"nodes" : function() {
			  						var nodes = [];
			  						var n = {};
			  						var r = []; // n为hash表，r为临时数组
			  						for (var i = 0; i < forwardlist.length; i = i + 2) // 遍历当前数组
			  						{
			  							if ((!n[forwardlist[i]])) // 如果hash表中没有当前项
			  							{
			  								n[forwardlist[i]] = true; // 存入hash表
			  								r.push(forwardlist[i]); // 把当前数组的发布者push到临时数组里面
			  								r.push(forwardlist[i + 1])// 把当前数组的发布数量push到临时数组里面
			  							} else {

			  							}
			  						}

			  						for (var i = 0; i < r.length; i = i + 2) {
			  							nodes.push({
			  								"name" : r[i],
			  								"value" : r[i + 1] / 1,
			  								// "draggable":false,
			  								itemStyle : {
			  									normal : {
			  										label : {
			  											show : true,
			  											textStyle : {
			  												color : '#333',
			  											    fontSize:20
			  											},
			  											formatter : "{b}:{c}"
			  										}
			  									}
			  								},
			  							});
			  						}
			  						return nodes;
			  					}(),
			  					"links" : function() {
			  						var links = [];
			  						for (var i = 0; i < namelist.length; i = i + 3) {
			  							links.push({
			  								"source" : namelist[i],
			  								"target" : namelist[i + 1],
			  								itemStyle : {
			  									normal : {
			  										lineWidth : namelist[i + 2],
			  									// strokeColor : '#99CCFF'
			  									}
			  								}
			  							});

			  						}
			  						return links;
			  					}()
			  				} ]
			  			}

			  			myChart.setOption(option);

			  		});
			
		} else {
			alert("您检索的意见领袖不存在，请重新输入！");
			
		}
		
	} else {
		alert("请输入昵称！");
	}
}

// 使用
require([ 'echarts', 'echarts/chart/force', // 使用柱状图就加载force模块，按需加载
], function(ec) {
	// 基于准备好的dom，初始化echarts图表
	var myChart = ec.init(document.getElementById('social'));
	// 点击节点，生成局部网络图
	myChart.on('click', function(p) {
		document.getElementById("anchor_scroll").click();//点击后定位
		var namelist;
		var forwardlist;
		 var str= p.name;		  
		 if(str.indexOf(" - ")!=-1){
//		   alert("包含");
//		   var strs= new Array(); 
//		   strs=str.split(" - ");
//		   var bf=strs[0];
//		   var af=strs[1];
		   
		  }else{
//		   alert("不包含");
		    namelist = BackLinks(p.name);
			forwardlist = BackNodes(p.name);
			
			var myChart1 = ec.init(document.getElementById('social1'));
			// 从结果表中读数据
			var option = {
				title : {
					text : ''+p.name+'的社会网络关系图',
//					subtext : '数据来自微博',
					x : 'left',
					y : 'top'
				},
				tooltip : {
					trigger : 'item',
					formatter : "{b}:{c}"
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
					center : [ '50%', '50%' ],
					ratioScaling : true,// 是否根据屏幕比例拉伸
					large : true,
					useWorker : true,
					steps : 5,
					minRadius : 5,
					maxRadius : 30,
					gravity : 2,
					scaling : 2.7,
					// 从weibo_info获取name
					"nodes" : function() {
						var nodes = [];
						var n = {};
						var r = []; // n为hash表，r为临时数组
						for (var i = 0; i < forwardlist.length; i = i + 2) // 遍历当前数组
						{
							if ((!n[forwardlist[i]])) // 如果hash表中没有当前项
							{
								n[forwardlist[i]] = true; // 存入hash表
								r.push(forwardlist[i]); // 把当前数组的发布者push到临时数组里面
								r.push(forwardlist[i + 1])// 把当前数组的发布数量push到临时数组里面
							} else {

							}
						}

						for (var i = 0; i < r.length; i = i + 2) {
							nodes.push({
								"name" : r[i],
								"value" : r[i + 1] / 1,
								// "draggable":false,
								itemStyle : {
									normal : {
										label : {
											show : true,
											textStyle : {
												color : '#333',
												fontSize:20
											},
											formatter : "{b}:{c}"
										}
									}
								},
							});
						}
						return nodes;
					}(),
					"links" : function() {
						var links = [];
						for (var i = 0; i < namelist.length; i = i + 3) {
							links.push({
								"source" : namelist[i],
								"target" : namelist[i + 1],
								itemStyle : {
									normal : {
										lineWidth : namelist[i + 2],
									// strokeColor : '#99CCFF'
									}
								}
							});

						}
						return links;
					}()
				} ]
			}

			myChart1.setOption(option);
		  }
		


	});

	var ecConfig = require('echarts/config');
	var loadingTicket;
	// var effect = ['spin' , 'bar' , 'ring' , 'whirling' , 'dynamicLine' ,
	// 'bubble'];
	function getLink() {
		var obj = new Array;
		$.ajax({
			url : "socialServlet?method=getLink",
			type : "POST",
			dataType : "text",
			cache : false,
			async : false,
			beforeSend : function() {
				myChart.showLoading({
					text : 'ring',
					effect : 'ring',
					textStyle : {
						fontSize : 20
					}
				});
			},
			success : function(data) {
				obj = eval("(" + data + ")");
				console.log(obj);
			},
		// error : function(data) {
		// alert("请求数据库失败，数据没有传到前台！");
		// }
		});
		return obj;
	}
	function getNode() {
		var obj = new Array;
		$.ajax({
			url : "socialServlet?method=getNode",
			type : "POST",
			dataType : "text",
			cache : false,
			async : false,
			beforeSend : function() {
				myChart.showLoading({
					text : 'ring',
					effect : 'ring',
					textStyle : {
						fontSize : 20
					}
				});
			},
			success : function(data) {
				obj = eval("(" + data + ")");
				console.log(obj);
			},
		});
		return obj;
	}
	// 从txt读数据
	function readNodes() {
		var obj = new Array;
		$.ajax({
			url : "socialServlet?method=readNodes",
			type : "POST",
			dataType : "text",
			cache : false,
			async : false,
			beforeSend : function() {
				myChart.showLoading({
					text : 'ring',
					effect : 'ring',
					textStyle : {
						fontSize : 20
					}
				});
			},
			success : function(data) {
				obj = eval("(" + data + ")");
				console.log(obj);
			},
		});
		return obj;
	}

	function readLinks() {
		var obj = new Array;
		$.ajax({
			url : "socialServlet?method=readLinks",
			type : "POST",
			dataType : "text",
			cache : false,
			async : false,
			// beforeSend:function()
			// {
			// myChart.showLoading({
			// text : 'ring',
			// effect : 'ring',
			// textStyle : {
			// fontSize : 20
			// }
			// });
			// },
			success : function(data) {
				obj = eval("(" + data + ")");
				console.log(obj);
			},
		});
		return obj;
	}

	function getNo() {
		var obj = new Array;
		$.ajax({
			url : "socialServlet?method=getNo",
			type : "POST",
			dataType : "text",
			cache : false,
			async : false,
			success : function(data) {
				obj = eval("(" + data + ")");
				console.log(obj);
			},
		});
		return obj;
	}

	function getLi() {
		var obj = new Array;
		$.ajax({
			url : "socialServlet?method=getLi",
			type : "POST",
			dataType : "text",
			cache : false,
			async : false,
			success : function(data) {
				obj = eval("(" + data + ")");
				console.log(obj);
			},
		});
		return obj;
	}
	// 点击，回传数值
	function BackLinks(str) {
		var obj = new Array;
		$.ajax({
			url : encodeURI(encodeURI("socialServlet?method=BackLinks" + str)),
			type : "POST",
			dataType : "text",
			cache : false,
			async : false,
			success : function(data) {
				obj = eval("(" + data + ")");
				console.log(obj);
			},
		});
		return obj;
	}

	function BackNodes(str) {
		var obj = new Array;
		$.ajax({
			url : encodeURI(encodeURI("socialServlet?method=BackNodes" + str)),
			type : "POST",
			dataType : "text",
			cache : false,
			async : false,
			success : function(data) {
				obj = eval("(" + data + ")");
				console.log(obj);
			},
		});
		return obj;
	}

	var option = {
		title : {
			text : '社会网络关系图',
//			textStyle : {
//				color : '#FFFFFF'
//			},
			x : 'left',
			y : 'top'
		},
		tooltip : {
			trigger : 'item',
			formatter : "{b}:{c}"
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
//		backgroundColor: '#333333',
		series : [ {
			"type" : "force",
			center : [ '50%', '50%' ],
			ratioScaling : true,// 是否根据屏幕比例拉伸
			large : true,
			useWorker : true,
			steps : 5,
			minRadius : 5,
			maxRadius : 30,
			gravity : 2,
			scaling : 3,
			// 从weibo_info获取name
			"nodes" : function() {
				// 利用存储过程读取数据
				// var fo=getNo();
				// var fo=getLi();

				var nodes = [];
				// 从txt文件读数据
				var forwardlist = readNodes();
				// 从数据库读数据
//				 var forwardlist=getNode();
				var n = {};
				var r = []; // n为hash表，r为临时数组
				for (var i = 0; i < forwardlist.length; i = i + 2) // 遍历当前数组
				{
					if ((!n[forwardlist[i]])) // 如果hash表中没有当前项
					{
						n[forwardlist[i]] = true; // 存入hash表
						r.push(forwardlist[i]); // 把当前数组的发布者push到临时数组里面
						r.push(forwardlist[i + 1])// 把当前数组的发布数量push到临时数组里面
					} else {

					}
				}

				for (var i = 0; i < r.length; i = i + 2) {
					if (r[i + 1] > 500) {
						nodes.push({
							"name" : r[i],
							"value" : r[i + 1] / 1,
							// "draggable":false,
							itemStyle : {
								normal : {
									label : {
										show : true,
										textStyle : {
											color :'#333'
										},
									},
								}
							},
						});
					} else {
						nodes.push({
							"name" : r[i],
							"value" : r[i + 1] / 1,
							// "draggable":false,
							itemStyle : {
								normal : {
									label : {
										show : false,
										textStyle : {
											color : '#CCFF99'
										},
									},
								}
							},
						});
					}
				}
				return nodes;
			}(),
			"links" : function() {
				var links = [];
				// 从txt文件读取数据
				var namelist = readLinks();
				// 从数据库读取数据
//				 var namelist = getLink();
				for (var i = 0; i < namelist.length; i = i + 3) {
					links.push({
						"source" : namelist[i],
						"target" : namelist[i + 1],
						itemStyle : {
							normal : {
								lineWidth : namelist[i + 2],
//							    strokeColor : '#99CCFF',
							}
						}
					});

				}
				return links;
			}()
		} ]
	}

	clearTimeout(loadingTicket);
	loadingTicket = setTimeout(function() {
		myChart.hideLoading();
		myChart.setOption(option);
	}, 2000);
	// 为echarts对象加载数据
	// myChart.setOption(option);

});
