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
                       var myChart = ec.init(document.getElementById('emotion4')); 
                                                                     
                       function getdata4(){
                       	var obj = new Array;
                       	$.ajax({
                       		url:"emotionServlet?method=getMood",
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
                       
                       var option4 = {
                    		    color:['#FFBBFF','#FF0000','#838B8B','#080808','#8968CD'],
                    		    title : {
                    		        text: '舆情情感分布',
                    		        x:'center'
                    		    },
                    		    tooltip : {
                    		        trigger: 'item',
                    		        formatter: "{a} <br/>{b} : {c} ({d}%)"
                    		    },
                    		    legend: {
                    		        orient : 'vertical',
                    		        x : 'left',
                    		        data:['喜','怒','哀','恶','惧']
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
                    		    calculable : true,
                    		    series : [
                    		        {
                    		            name:'情感类型',
                    		            type:'pie',
                    		            radius : '55%',
                    		            center: ['50%', '60%'],
                    		            data:getdata4()
                    		        }
                    		    ]
                    		};
                    		                    
               
                       // 为echarts对象加载数据 
                       myChart.setOption(option4); 
                   }
            );	