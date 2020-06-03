               
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
                       var myChart = ec.init(document.getElementById('fbt1')); 
                       function getdata(){
                          	var obj = new Array;
                          	$.ajax({
                          		url:"netuserServlet?method=getFbt1",
                          	    type:"GET",
                          	    dataType:"text",
                          		cache : false,
                          		async : false,
                          	    success: function(data){
                          	    	obj=eval("("+data+")");
                          	    
                          	    },
                          	});
                          	return obj;
                          }
                       
                       function getdata2(){
                         	var obj = new Array;
                         	
                         	$.ajax({
                         		url:"legendnameServlet?method=getName1",
                         	    type:"GET",
                         	    dataType:"text",
                         		cache : false,
                         		async : false,
                         	    success: function(data){
                         	    	obj=eval("("+data+")");    
                         	    	//alert(obj)
                         	    },
                         	});
                         	return obj;
                         }                   

                       var option = {
                    		    title : {
   //                 		        text: 'FB1分布',
                    		    	text: mc6, 
                    		        x:'center'
                    		    },
                    		    tooltip : {
                    		        trigger: 'item',
                    		        formatter: "{a} <br/>{b} :  {d}%"
                    		    },
                    		    legend: {
                    		        orient : 'vertical',
                    		        x : 'left',
                    		        //data:['A','B','C']
                    		        data:getdata2()
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
                    		            name:mc6,
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