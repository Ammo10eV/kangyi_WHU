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
                       var myChart = ec.init(document.getElementById('srsp')); 
                       function getdata(){
                          	var obj = new Array;
                          	$.ajax({
                          		url:"netuserServlet?method=getSrsp",
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
                    		    title : {
//                    		    	text: '网民个体特征',  
    //                		        text: '网民收入水平分布',   
                    		        text: mc2, 
                    		        x:'center'
                    		    },
                    		    tooltip : {
                    		        trigger: 'item',
                    		        formatter: "{a} <br/>{b} : {d}%"
                    		    },
                    		    legend: {
                    		        orient : 'vertical',
                    		        x : 'left',
                    		        data:['下层','中下层','中层','中上层','上层']
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
                    		            name:'收入分布',
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