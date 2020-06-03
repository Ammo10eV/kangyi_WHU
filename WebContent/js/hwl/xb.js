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
                       var myChart = ec.init(document.getElementById('xb')); 
                                                                     
                       function getdata(){
                       	var obj = new Array;
                       	$.ajax({
                       		url:"netuserServlet?method=getXb",
                       	    type:"GET",
                       	    dataType:"text",
                       		cache : false,
                       		async : false,
                       	    success: function(data){
                       	    	obj=eval("("+data+")");
                       	    	//alert(y);
                       	    },
                       	});
                       	return obj;
                       }
                       
                       var option = {
                    		   color:['#00FF7F','#FF0000'],
                    		    title : {
//                    		        text: '网民个体特征',
 //                   		        text: '网民性别分布',
                    		        text: mc5, 
                    		        x:'center'
                    		    },
                    		    tooltip : {
                    		        trigger: 'item',
                    		        formatter: "{a} <br/>{b} : {d}%"
                    		    },
                    		    legend: {
                    		        orient : 'vertical',
                    		        x : 'left',
                    		        data:['男','女']
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
                    		    calculable : true,
                    		    series : [
                    		        {
                    		            name:'性别分布',
                    		            type:'pie',
                    		            radius : '55%',
                    		            center: ['50%', '60%'],
                    		            data:getdata()
                    		        }
                    		    ]
                    		};
                    		                    
               
                       // 为echarts对象加载数据 
                       myChart.setOption(option); 
                   }
            );	