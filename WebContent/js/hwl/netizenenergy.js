//路径配置


require.config({
	paths : {
		'echarts' : './echarts/echarts',
		'echarts/chart/bar' : './echarts/echarts',
		'echarts/chart/line' : './echarts/echarts',

	}
});


// 使用
require([ 'echarts', 'echarts/chart/bar',// 使用柱状图就加载bar模块，按需加载
'echarts/chart/line' // 使用柱状图就加载bar模块，按需加载
], 

function(ec) {
	// 基于准备好的dom，初始化echarts图表 
	var myChart = ec.init(document.getElementById('netizenenergy'));	
	//var str = "新浪微博:123456789";
	//  var str='<%=Session["A1"]%>';
	//  alert(str);
	//alert($("#ttt").val())
	//function check(form){var str = form.textfield.value;}
	// str = document.getElementById("textfield").value   // encodeURI("netizenenergyServlet?method=getData&&str="+str),&&str="+str
	 function showData(){
       	var obj = new Array;
       	$.ajax({
       		url:encodeURI("netizenenergyServlet?method=getData"),      
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
			text : '网民能量',
			x : 'center'
		},
		tooltip : {
			trigger : 'item',
			formatter : "{b} : {c} "
		},
		toolbox : {
			show : true,
			feature : {
			
				magicType : {
					show : true,
					type : [ 'line','bar' ]
				},
				restore : {
					show : true
				},
			}
		},
		calculable : true,
		xAxis : [ {
			type : 'value',  
//			boundaryGap : [0, 0.5],
			 precision: 2,
			 min: 0,
	         max: 1,
			 splitNumber: 0.5
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
	                    color: 'PaleVioletRed'
	                },
	                emphasis: {
	                    borderColor:'PaleVioletRed',
	                    color: 'Plum'
	                }
	                },	              
	                data: showData(),
	                
		//	data : [ a1,a2,a3,a4 ],
			//data : [ 32,24,16,24 ],
		}

		]
	};

	// 为echarts对象加载数据
	myChart.setOption(option);

});
