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
                       var myChart = ec.init(document.getElementById('emotion5')); 

     
     
                 option5 = {
                		        color:['#FFBBFF','#FF0000','#838B8B','#080808','#8968CD'],
                    	 	    title : 
                    		    {
                    		        text: '全国情绪分布情况',
                    		        x:'center'
                    		    },
                    		    tooltip :
                    		    {
                    		        trigger: 'item',
                    		        formatter:"{a} <br/>{b} : {c}%",	
                    		    },
                    		    legend:
                    		    {
                    		        orient: 'vertical',
                    		        x:'left',
                    		        data:['喜','怒','哀','恶','惧'],
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
                    		            name: '喜',
                    		            type: 'map',
                    		            mapType: 'china',
                    		            roam: false,
                    		            itemStyle:{
                    		                normal:{
                    		                	color:'#FFBBFF',
                    		                	label:{show:true}},
                    		                emphasis:{
                    		                	color:'yellow',
                    		                	label:{show:true}} 	
                    		            },
                    		            data:[
                    		                {name: '北京',value: 55},
                    		                {name: '天津',value: 56},
                    		                {name: '上海',value: 57},
                    		                {name: '重庆',value: 58},
                    		                {name: '河北',value: 59},
                    		                {name: '河南',value: 60},
                    		                {name: '云南',value: 61},
                    		                
                    		            ]
                    		        },
                    		       {
                    		            name: '怒',
                    		            type: 'map',
                    		            mapType: 'china',
                    		            itemStyle:{
                    		                normal:{
                        		            	color:'#FF0000',
                    		                	label:{show:true}},
                    		                emphasis:{
                    		                	color:'yellow',
                    		                	label:{show:true}}
                    		            },
                    		            data:
                    		            [
                      		                {name: '辽宁',value: 53},
                      		                {name: '黑龙江',value: 55},
                      		                {name: '湖南',value: 66},
                      		                {name: '安徽',value: 57},
                      		                {name: '山东',value: 65},
                      		                {name: '新疆',value: 56},
                      		                {name: '江苏',value: 70},
                      		                {name: '陕西',value: 67}
                      		                
                    		            ]
                    		        },
                    		        {
                    		            name: '哀',
                    		            type: 'map',
                    		            mapType: 'china',
                    		            itemStyle:{
                    		                normal:{
                    		                	color:'#838B8B',
                    		                	label:{show:true}},
                    		                emphasis:{
                    		                	color:'yellow',
                    		                	label:{show:true}}
                    		            },
                    		            data:
                    		            [
                    		                
                      		                {name: '浙江',value: 0.45*100},
                      		                {name: '江西',value: 0.44*100},
                      		                {name: '湖北',value: 46},
                      		                {name: '广西',value: 53},
                      		                {name: '甘肃',value: 46},
                      		                {name: '山西',value: 56},
                      		                {name: '内蒙古',value: 52},
                      		               
                    		            ]
                    		        },
                    		        {
                    		            name: '恶',
                    		            type: 'map',
                    		            mapType: 'china',
                    		            itemStyle:{
                    		                normal:{
                    		                	color:'#080808',
                    		                	label:{show:true}},
                    		                emphasis:{
                    		                	color:'yellow',
                    		                	label:{show:true}}
                    		            },
                    		            data:
                    		            [
                    		                
                      		               
                      		                {name: '吉林',value: 65},
                      		                {name: '福建',value: 65},
                      		                {name: '贵州',value: 66},
                      		                {name: '广东',value: 55},
                      		                {name: '青海',value: 54},
                      		                {name: '西藏',value: 45},
                      		                {name: '四川',value: 55},
                      		           ]
                      		           
                    		        },
                    		        
                    		        {
                    		            name: '惧',
                    		            type: 'map',
                    		            mapType: 'china',
                    		            itemStyle:{
                    		                normal:{
                    		                	color:'#8968CD',
                    		                	label:{show:true}},
                    		                emphasis:{
                    		                	color:'yellow',
                    		                	label:{show:true}}
                    		            },
                    		            data:
                    		            [
                      		                {name: '宁夏',value: 55},
                      		                {name: '海南',value: 45},
                      		                {name: '台湾',value: 45},
                      		                {name: '香港',value: 35},
                      		                {name: '澳门',value: 65}
                    		            ]
                    		        },
                    		        ]
                  }

                 
                 
                 
                       // 为echarts对象加载数据
                       myChart.setOption(option5); 
                   }
            );	