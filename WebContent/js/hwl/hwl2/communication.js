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
                       var myChart = ec.init(document.getElementById('communication')); 
                       function showdata(){
                       	var obj = new Array;
                       	$.ajax({
                       		url:encodeURI("govmediaServlet?method=getzfcbl"),      
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
                    		        text: '政府传播力',   
                    		        x:'center'
                    		    },
                    		    tooltip : {
                    		    	 trigger: 'item',
                      		        formatter: "{b}  "
                    		    }, 
//                    		    legend: {
//                    		    	orient : 'vertical',
//                      		        x : 'left',
//                    		        data:['现在']
//                    		    },
                    		    toolbox: {
                    		        show : true,
                    		        feature : {
                    		            mark : {show: true},
//                    		            dataView : {show: true, readOnly: false},
                    		            magicType : {show: true, type: ['line', 'bar']},
                    		            restore : {show: true},
                    		            saveAsImage : {show: true}
                    		        }
                    		    },
                    		    calculable : true,
                    		    grid:
              			      { x:150,
                  			      y:60,
                  			      //x2:10
                  			      }
              			     ,     
                    	
                    		    xAxis : [ {
                    				type : 'value', 
                    				 axisLabel: {show: false},
                    				 precision: 2,
                    				 min: 0,
                    		         max: 5,
                    				 splitNumber: 0.5,
                    			    	},
                    			    	 {
                        		            type : 'category',
                        		            data :['低','较低','一般','较高','高'],                    		  
                        		        }
                    			],
                    		    yAxis : [
                    		        {
                    		        	 type : 'category',                    		           
                     		            data : [
                     		                     {
	                    value:'政务微博满意度',
	                    textStyle: {	                     
	                        fontSize: 13,
	                        fontStyle: 'normal',
	                        fontWeight :'bold'	                       
	                    }
	                },
	                {
	                    value:'政务微博广度',
	                    textStyle: {	                     
	                        fontSize: 13,
	                        fontStyle: 'normal',
	                        fontWeight :'bold'	                       
	                    }
	                },
	                {
	                    value:'网络问政平台满意度',
	                    textStyle: {	                     
	                        fontSize:13,
	                        fontStyle: 'normal',
	                        fontWeight :'bold'	                       
	                    }
	                },
	                {
	                    value:'网络问政平台广度',
	                    textStyle: {	                     
	                        fontSize: 13,
	                        fontStyle: 'normal',
	                        fontWeight :'bold'	                       
	                    }
	                },],
	                axisLabel : {
		                show:true,
		             //   interval: 0,    // {number}
		               // rotate: -30,
		                margin: 5,		            
		            }
                    		        }
                    		    ],
                    		    series : [
                  
                    		        {
                    		            name:'现在',
                    		            type:'bar',
                    		            itemStyle: {                // 系列级个性化
                    		                normal: {
                    		                    borderWidth: 1,
                    		                    borderColor:'PaleGoldenRod',
                    		                    color: 'Salmon'
                    		                },
                    		                emphasis: {
                    		                    borderColor:'Salmon',
                    		                    color: 'PaleGoldenRod'
                    		                }
                    		                },
                    		                data:showdata(),
                    		          //  data:[ 16,16,32,16 ],
                    		     
                    		        },
                    		    ]
                    		};
                    		                    
               
                       // 为echarts对象加载数据 
                       myChart.setOption(option); 
                   }
            );	