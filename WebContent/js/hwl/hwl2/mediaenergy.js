              //路径配置
              require.config({
	            paths : {
		       'echarts' : './echarts/echarts',
		       'echarts/chart/pie' : './echarts/echarts',

	              }
                     });

                     //使用
             require(
            		  [
                       'echarts',
                       'echarts/chart/pie' // 使用柱状图就加载bar模块，按需加载
                   ],
                   function (ec) {
                       // 基于准备好的dom，初始化echarts图表
                       var myChart = ec.init(document.getElementById('mediaenergy')); 
                       function showdata(){
                       	var obj = new Array;
                       	$.ajax({
                       		url:encodeURI("govmediaServlet?method=getmtnl"),      
                       	    type:"GET",
                       	    dataType:"text",
                       		cache : false,
                       		async : false,
                       	    success: function(data){
                       	    	obj=eval("("+data+")");
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
                    				text : '媒体能量',
                    				x : 'center'
                    			},
                    			tooltip : {
                    				trigger : 'item',
                    				formatter : "{b} "
                    			},
                    		    toolbox: {
                    		        show : true,
                    		        feature : {
                    		            mark : {show: true},
//                    		            dataView : {show: true, readOnly: false},
                    		            restore : {show: true},
                    		            saveAsImage : {show: true}
                    		        }
                    		    },
                    			toolbox : {
                    				show : true,
                    				feature : {
                    					mark : {show: true},
//                    					dataView : {show: true, readOnly: false},
                    					magicType : {
                    						show : true,
                    						type : [ 'line','bar' ]
                    					},
                    					restore : {
                    						show : true
                    					},
                    					saveAsImage : {show: true}
                    				}
                    			},
                    			calculable : true,
                    			xAxis : [ {
                    				type : 'value', 
                    				 axisLabel: {show: false},
                    				 precision: 2,
                    				 min: 0,
                    		         max: 5,
//                    				boundaryGap : [0, 0.6],
                    				 splitNumber: 0.5,
                    			    	},
                    			    	 {
                        		            type : 'category',
                        		            data :['低','较低','一般','较高','高'],                    		  
                        		        }
                    			],
                    			yAxis : [ {
                    				type : 'category',
                    				data : [
        				                    {
        			                 
        			               
        			                    value:'境外媒体',
        			                    textStyle: {	                     
        			                        fontSize:13,
        			                        fontStyle: 'normal',
        			                        fontWeight :'bold'	                       
        			                    }
        			                }, {
        			                    value:'境内媒体',
        			                    textStyle: {	                     
        			                        fontSize:13,
        			                        fontStyle: 'normal',
        			                        fontWeight :'bold'	                       
        			                    
        			                    }},
        		                 
        		     
        		    ],
        		    axisLabel : {
                        show:true,
                     //   interval: 0,    // {number}
//                        rotate: -30,
                        margin: 5,		            
                    }
                },
                
            ],
                    			series : [

                    			{
                    				name : '',
                    				type : 'bar',
                    			     itemStyle: {                // 系列级个性化
                  		                normal: {
                  		                    borderWidth: 1,
                  		                    borderColor:'salmon',
                  		                    color: 'LightSkyBlue'
                  		                },
                  		                emphasis: {
                  		                    borderColor:'LightSkyBlue',
                  		                    color: 'Violet'
                  		                }
                  		                }, 
                  		              data : showdata()
                    				//data : [120,200 ],


                    			}

                    			]
                    		};

                    		// 为echarts对象加载数据
                    		myChart.setOption(option);

                    	});
