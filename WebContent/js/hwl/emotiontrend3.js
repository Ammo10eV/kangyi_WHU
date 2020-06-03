              //路径配置
              require.config({
	            paths : {
		       'echarts' : './echarts/echarts',
		       'echarts/chart/bar' : './echarts/echarts',
		       'echarts/chart/line' : './echarts/echarts',

	              }
                     });

                     //使用
             require(
            		  [
                       'echarts',
                       'echarts/chart/bar' ,// 使用柱状图就加载bar模块，按需加载
                       'echarts/chart/line' // 使用柱状图就加载bar模块，按需加载
                   ],
                   function (ec) {
                       // 基于准备好的dom，初始化echarts图表
                       var myChart = ec.init(document.getElementById('emotiontrend3')); 
                       
                       
                       function getTime(){
                       	var obj = new Array;
                       	$.ajax({
                       		url:"emotiontrendServlet?method=getTime",
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
                          		url:"emotiontrendServlet?method=getAll",
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
                         		url:"emotiontrendServlet?method=getPosi",
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
                        		url:"emotiontrendServlet?method=getNega",
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
                       
                       function gety(){
                       	var y = new Array;
                       	$.ajax({
                       		url:"emotiontrendServlet?method=getY",
                       	    type:"GET",
                       	    dataType:"text",
                       	    cache:false,
                       	    async:false, 
                       	    success: function(data){
                       	    	y=eval("("+data+")");
                       	    	//alert(y);
                       	    },
                       	});
                       	return y;
                       }
                       
                       var option = {
                    		    title : {
                    		        text: '舆情信息数量走势',

                    		    },
                    		    tooltip : {
                    		        trigger: 'axis'
                    		    },
                    		    legend: {
                    		        data:['舆情信息总数','正面信息总数','负面信息总数']
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
                    		            boundaryGap : false,
                    		            data : getTime()
                    		        }
                    		    ],
                    		    yAxis : [
                    		        {
                    		            type : 'value',
                    		            axisLabel : {
                    		                formatter: '{value} '
                    		            }
                    		        }
                    		    ],
                    		    series : [
                    		        {
                    		            name:'舆情信息总数',
                    		            type:'line',
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
                    		            name:'正面信息总数',
                    		            type:'line',
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
                    		            name:'负面信息总数',
                    		            type:'line',
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
                    		                    {type : 'average', name : '平均值'}
                    		                ]
                    		            }
                    		        }
                    		    ]
                    		};
                    		      
               
                       // 为echarts对象加载数据 
                       myChart.setOption(option); 
                   }
            );	