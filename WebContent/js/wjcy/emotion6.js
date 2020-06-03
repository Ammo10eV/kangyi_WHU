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
                       var myChart = ec.init(document.getElementById('emotion6')); 
                       
                       function getAddress1(){
                             	             var obj = new Array;
                           	                $.ajax({
                       		                url:"emotionServlet?method=getAddress1",
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
                       
                       function getAddress2(){
           	             var obj = new Array;
         	                $.ajax({
     		                url:"emotionServlet?method=getAddress2",
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
                       
                       function getAddress3(){
             	             var obj = new Array;
           	                $.ajax({
       		                url:"emotionServlet?method=getAddress3",
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
                       
                       
                       option6 = {
                    		   color:['#DA70D6','#838B8B','#B3EE3A'],
                    		   title : 
                   		    {
                   		        text: '全国舆情信息数量分布情况',
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
                   		        data:['正面信息数量','负面信息数量','客观信息数量']
                   		    },
                   		    dataRange: 
                   		    {
                   		        min: 0,
                   		        max:1000,
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
                   		            name: '正面信息数量',
                   		            type: 'map',
                   		            mapType: 'china',
                   		         roam: false,
                   	            itemStyle:{
                   	                normal:{label:{show:true}},
                   	                emphasis:{label:{show:true}}
                   	            },
                   	            data:getAddress1()
                   	                  // {"name":"北京","value": Math.round(Math.random()*1000)},
                   	            },
                   	        
                   	        
                   	         {
                		            name: '负面信息数量',
                		            type: 'map',
                		            mapType: 'china',
                		            itemStyle:{
                		                normal:{label:{show:true}},
                		                emphasis:{label:{show:true}}
                		            },
                		            data:getAddress2()
                		            	//[{"name":"北京","value": Math.round(Math.random()*1000)}]
                   	         },
                   	            
                   	            
                   	         {
                		            name: '客观信息数量',
                		            type: 'map',
                		            mapType: 'china',
                		            itemStyle:{
                		                normal:{label:{show:true}},
                		                emphasis:{label:{show:true}}
                		            },
                		            data:getAddress3()//[{"name":"北京","value": Math.round(Math.random()*1000)}]
 
                   	         },
                   	        
                    		        ]
                  }

                 
                 
                 
                       // 为echarts对象加载数据
                       myChart.setOption(option6); 
                   }
            );	