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
                       var myChart = ec.init(document.getElementById('energy')); 
                  
                       var option = {
                    		   title : {
                    				text : '网民能量',
                    				x : 'center'
                    			},
                    			tooltip : {
                    				trigger : 'item',
                    				formatter : "{b} : {c} "
                    			},
                    		    toolbox: {
                    		        show : true,
                    		        feature : {
                    		            mark : {show: true},
                    		            dataView : {show: true, readOnly: false},
                    		            restore : {show: true},
                    		            saveAsImage : {show: true}
                    		        }
                    		    },
                    			toolbox : {
                    				show : true,
                    				feature : {
                    					mark : {show: true},
                    					dataView : {show: true, readOnly: false},
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
                    				 splitNumber: 0.5,
                    				 boundaryGap : [0, 0.25],
                    			    	},
                    			    	 {
                        		            type : 'category',
                        		            data :['低','较低','一般','较高','高'],                    		  
                        		        }
                    			],
                    			yAxis : [ {
                    				type : 'category',
                    				data : [ '本体能量', '属性能量', '影响力能量', '情感能量' ]
                    			} ],
                    			series : [

                    			{
                    				name : '现在',
                    				type : 'bar',
                    				   itemStyle: {                // 系列级个性化
                    		                normal: {
                    		                    borderWidth: 1,
                    		                    borderColor:'salmon',
                    		                    color: 'DarkSalmon'
                    		                },
                    		                emphasis: {
                    		                    borderColor:'DarkSalmon',
                    		                    color: 'Violet'
                    		                }
                    		                },
                    				data : [ 32, 32, 24,16 ],


                    			}

                    			]
                    		};

                    		// 为echarts对象加载数据
                    		myChart.setOption(option);

                    	});
