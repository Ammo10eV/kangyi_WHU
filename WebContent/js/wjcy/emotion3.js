              //路径配置
              require.config({
	            paths : {
		       'echarts' : './echarts/echarts',
		       'echarts/chart/bar' : './echarts/echarts',

	              }
                     });

                     //使用
             require(
            		  [
                       'echarts',
                       'echarts/chart/bar' ,// 使用柱状图就加载bar模块，按需加载
                   ],
                   function (ec) {
                       // 基于准备好的dom，初始化echarts图表
                       var myChart = ec.init(document.getElementById('emotion3')); 
                                              
                       function getName(){
                       	var obj = new Array;
                       	$.ajax({
                       		url:"emotionServlet?method=getName",
                       		type:"GET",
                       		dataType:"text",
                       		cache : false,
                       		async : false,
                       		success: function(data){
                       			obj = eval("("+data+")");
                       			console.log(obj.length);
                       			//alert(obj);
                       		},
                       	error: function(data){
                       		alert("请求数据库失败，数据没有传到前台！");
                       	}
                       	});
                       	return obj;
                       }
                       function getAll(){
                       	var obj = new Array;
                       	$.ajax({
                       		url:"emotionServlet?method=getNameAll",
                       		type:"GET",
                       		dataType:"text",
                       		cache : false,
                       		async : false,
                       		success: function(data){
                       			obj = eval("("+data+")");
                       			console.log(obj.length);
                       			//alert(obj);
                       		},
                       	error: function(data){
                       		alert("请求数据库失败，数据没有传到前台！");
                       	}
                       	});
                       	return obj;
                       }                     
                      
                       function getPosi(){
                         	var obj = new Array;
                         	$.ajax({
                         		url:"emotionServlet?method=getNamePosi",
                         		type:"GET",
                         		dataType:"text",
                         		cache : false,
                         		async : false,
                         		success: function(data){
                         			obj = eval("("+data+")");
                         			console.log(obj.length);
                         			//alert(obj);
                         		},
                         	error: function(data){
                         		alert("请求数据库失败，数据没有传到前台！");
                         	}
                         	});
                         	return obj;
                         }
                       function getNega(){
                        	var obj = new Array;
                        	$.ajax({
                        		url:"emotionServlet?method=getNameNega",
                        		type:"GET",
                        		dataType:"text",
                        		cache : false,
                        		async : false,
                        		success: function(data){
                        			obj = eval("("+data+")");
                        			console.log(obj.length);
                        			//alert(obj);
                        		},
                        	error: function(data){
                        		alert("请求数据库失败，数据没有传到前台！");
                        	}
                        	});
                        	return obj;
                        }                     
                       
                       
                       var option = {
                    		    title : {
                    		        text: 'Top 10 用户评论信息分布',
                    		    },
                    		    tooltip : {
                    		        trigger: 'axis'
                    		    },
                    		    legend: {
                    		        data:['用户评论总数','正面评论总数','负面评论总数']
                    		    },
                    		    toolbox: {
                    		        show : true,
                    		        feature : {
                    		            mark : {show: true},
                    		            dataView : {show: true, readOnly: false},
                    		            magicType : {show: true, type: ['line', 'bar','stack','tiled']},
                    		            restore : {show: true},
                    		            saveAsImage : {show: true}
                    		        }
                    		    },
                    		    calculable : true,
                    		    xAxis : [
                    		        {
                    		            type : 'category',
                    		            data : getName()
                    		        }
                    		    ],
                    		    yAxis : [
                    		        {
                    		            type : 'value'
                    		        }
                    		    ],
                    		    series : [
                    		        {
                    		            name:'用户评论总数',
                    		            type:'bar',
                    		            data:getAll(),
                    		            markPoint : {
                    		            	symbol:'circle',
                    		                data : [
                    		                    {type : 'max', name: '最大值'},
                    		                    {type : 'min', name: '最小值'}
                    		                ]
                    		            },
                    		            markLine : {
                    		                data : [
                    		                    {type : 'average', name: '平均值'}
                    		                ]
                    		            }
                    		        },
                    		        {
                    		            name:'正面评论总数',
                    		            type:'bar',
                    		            data:getPosi(),
                    		            markPoint : {
                    		            	symbol:'circle',
                    		                data : [
                    		                    {type : 'max', name: '最大值'},
                    		                    {type : 'min', name: '最小值'}
                    		                ]
                    		            },
                    		            markLine : {
                    		                data : [
                    		                    {type : 'average', name: '平均值'}
                    		                ]
                    		            }
                    		        },
                    		        {
                    		            name:'负面评论总数',
                    		            type:'bar',
                    		            data:getNega(),
                    		            markPoint : {
                    		            	symbol:'circle',
                    		                data : [
                    		                    {type : 'max', name: '最大值'},
                    		                    {type : 'min', name: '最小值'}
                    		                ]
                    		            },
                    		            markLine : {
                    		                data : [
                    		                    {type : 'average', name: '平均值'}
                    		                ]
                    		            }
                    		        }
                    		    ]
                    		};
                    		                    
                       // 为echarts对象加载数据 
                       myChart.setOption(option); 
                   }
            );	