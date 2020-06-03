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
                       var myChart = ec.init(document.getElementById('test')); 
                  
                       var option = {
                    		    tooltip : {
                    		        trigger: 'axis'
                    		    },
                    		    legend: {
                    		        data:['蒸发量','降水量','最低气温','最高气温']
                    		    },
                    		    toolbox: {
                    		        show : true,
                    		        feature : {
                    		            mark : {show: true},
                    		            dataView : {show: true},
                    		            magicType : {show: true, type: ['line', 'bar']},
                    		            restore : {show: true},
                    		            saveAsImage : {show: true}
                    		        }
                    		    },
                    		    xAxis : [
                    		        {
                    		            type : 'category',
                    		            position: 'bottom',
                    		            boundaryGap: true,
                    		            axisLine : {    // 轴线
                    		                show: true,
                    		                lineStyle: {
                    		                    color: 'green',
                    		                    type: 'solid',
                    		                    width: 2
                    		                }
                    		            },
                    		            axisTick : {    // 轴标记
                    		                show:true,
                    		                length: 10,
                    		                lineStyle: {
                    		                    color: 'red',
                    		                    type: 'solid',
                    		                    width: 2
                    		                }
                    		            },
                    		            axisLabel : {
                    		                show:true,
                    		                interval: 'auto',    // {number}
                    		                rotate: 45,
                    		                margin: 8,
                    		                formatter: '{value}月',
                    		                textStyle: {
                    		                    color: 'blue',
                    		                    fontFamily: 'sans-serif',
                    		                    fontSize: 15,
                    		                    fontStyle: 'italic',
                    		                    fontWeight: 'bold'
                    		                }
                    		            },
                    		            splitLine : {
                    		                show:true,
                    		                lineStyle: {
                    		                    color: '#483d8b',
                    		                    type: 'dashed',
                    		                    width: 1
                    		                }
                    		            },
                    		            splitArea : {
                    		                show: true,
                    		                areaStyle:{
                    		                    color:['rgba(144,238,144,0.3)','rgba(135,200,250,0.3)']
                    		                }
                    		            },
                    		            data : [
                    		                '1','2','3','4','5',
                    		                {
                    		                    value:'6',
                    		                    textStyle: {
                    		                        color: 'red',
                    		                        fontSize: 30,
                    		                        fontStyle: 'normal',
                    		                        fontWeight: 'bold'
                    		                    }
                    		                },
                    		                '7','8','9','10','11','12'
                    		            ]
                    		        },                    		      
                    		    ],
                    		    yAxis : [
                    		        {
                    		            type : 'value',
                    		            position: 'left',
                    		            splitNumber: 0.5,
                    		           // boundaryGap: [0,0.1],
//                    		            axisLine : {    // 轴线
//                    		                show: true,
//                    		                lineStyle: {
//                    		                    color: 'red',
//                    		                    type: 'dashed',
//                    		                    width: 2
//                    		                }
//                    		            },

                    		        },
                    		        {
                    		            type : 'category',
                    		            data :['低','中','高'],                    		  
                    		        }
                    		    ],
                    		    series : [
                    		        {
                    		            name: '蒸发量',
                    		            type: 'bar',
                    		            data:[2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3]
                    		        },
                    		        {
                    		            name: '降水量',
                    		            type: 'bar',
                    		            data: [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3]
                    		        },                   		       
                    		    ]
                    		};
                    		                    
                       myChart.setOption(option); 
                   }
            );	