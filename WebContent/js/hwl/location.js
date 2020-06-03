 //路径配置
              require.config({
	            paths : {
		       'echarts' : './echarts/echarts',
		       'echarts/chart/map' : './echarts/echarts-map',

	              }
                     });

                     // 使用
             require(
            		  [
                       'echarts',
                       'echarts/chart/map' // 地图加载
                   ],
                   function (ec) {
                       // 基于准备好的dom，初始化echarts图表
                       var myChart = ec.init(document.getElementById('location')); 
                       
                       function getLocation(){
                             	             var obj = new Array;
                           	                $.ajax({
                       		                url:"netuserServlet?method=getLocation",
                       		                type:"GET",
                       		                dataType:"text",
                       		                cache : false,
                       		                async : false,
                       		                success: function(data){
                       			            obj = eval("("+data+")");
                       			            console.log(obj);
                       			            //alert(obj);
                       		                 },
                                      	error: function(data){
                       	 	            alert("请求数据库失败，数据没有传到前台！");
                                         	}
                                       	});
                            	             return obj;
                                               }
                       
      
                       
                       option = {
                    		   color:['#F08080'],
                    		   title : 
                   		    {
//                   		        text: '网民个体特征',
             		            text: '网民地域分布',
                   		        x:'center'
                   		    },
                   		    tooltip :
                   		    {
                   		        trigger: 'item',
                   		        formatter:"{a} <br/>{b} : {c}",	
                   		    },
                   		    legend:
                   		    {
                   		        orient: 'vertical',
                   		        x:'left',
                   		        data:['网民数量']
                   		    },
                   		    dataRange: 
                   		    {
                   		        min: 0,
                   		        max:70000,
                   		        x: 'left',
                   		        y: 'bottom',
                   		        text:['高','低'],           // 文本，默认为数值文本
                   		        calculable : true
                   		    },
                   		    toolbox:
                   		    {
                   		        show : true,
                   		        orient : 'vertical',
                   		        x: 'right',
                   		        y: 'center',
                   		        feature : 
                   		        {
                   		            mark : {show: true},
                   		            dataView : {show: true, readOnly: false},
                   		            restore : {show: true},
                   		            saveAsImage : {show: true}
                   		        }
                   		    },
                   		    series :
                   		    	[
                   		        {
                   		            name: '网民数量',
                   		            type: 'map',
                   		            mapType: 'china',
                   		         roam: false,
                   	            itemStyle:{
                   	                normal:{label:{show:true}},
                   	                emphasis:{label:{show:true}}
                   	            },
                   	            data:getLocation()
                   	                  // {"name":"北京","value": Math.round(Math.random()*1000)},
                   	            },
                   	        
                	        
                    		        ]
                  }

                 
                 
                 
                       // 为echarts对象加载数据
                       myChart.setOption(option); 
                   }
            );	