 <%@page language="java" contentType="text/html; charset=UTF-8"
            pageEncoding="UTF-8"%>
        <%@page import="java.util.*"%>
        <%@page import="net.sf.json.JSONArray"%>
        <%@page import="net.sf.json.JSONObject"%>
        <%@page import="java.util.Iterator"%>

<!DOCTYPE html>
<html lang="zh-CN">
<head>

<script language="javascript">
<% String result5=request.getAttribute("result5").toString();%>
var sleep = function(time) {
    var startTime = new Date().getTime() + parseInt(time, 10);
    while(new Date().getTime() < startTime) {}
};

    function aaa(){ 
    	 alert("模型正在演算中");
    	sleep(5000);
       document.getElementById("myimage").src="<%=request.getContextPath()%>/images/<%=result5 %>"; 
       document.execCommand('Refresh');
        alert("模型演算成功(若图片未显示请手动刷新)");
    }
 </script>

    <meta charset="UTF-8">
    <!--IE8开启标准渲染模式-->
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <!--定义视窗，页面缩放比1：1，禁止用户缩放-->
    <meta name="viewport" content="width=device-width,initial-scale=1,user-scalable=no">
    <title>预测结果</title>
    <link rel="stylesheet" href="css/bootstrap.min.css"/>
    <link rel="stylesheet" href="css/adjust.css">
</head>
<body onload="aaa()">
<!--导航栏-->
<nav class="navbar navbar-default navbar-fixed-top">
    <div class="container">
        <!--小屏幕导航按钮和logo-->
        <!--可以适应设备-->
        <div class="navbar-header">
            <!--给这个button绑定到navbar-collapse类-->
            <button class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
            </button>
            <a href="index.html" class="navbar-brand">战疫助手> 预测结果</a>
        </div>
        <!--小屏幕导航按钮和logo-->

        <!--右上角导航-->
        <div class="navbar-collapse collapse">
            <ul class="nav navbar-nav navbar-right">
                <li><a href="index.html">首页</a></li>
                <li><a href="infection.html" target="_blank">疫情数据</a></li>
                <li><a href="news.html" target="_blank">舆情数据</a></li>
                <li><a href="predict-easy.html" target="_blank">实用版预测</a></li>
                <li><a href="predict-pro.html" target="_blank">专业版预测</a></li>
            </ul>
        </div>
        <!--右上角导航-->

    </div>
</nav>
<!--导航栏-->

<div class="bg">
    <div class="filter">
      <section id="predict-result">
          <div class="container" style="margin-top: 80px;">
              <div class="row">
                  <div class="col-md-4" style="margin-top: 10px;">
                      <!--这个表单需要传输数据-->
                      <form action="InfoServletpro" method="post" >
                          <div class="form-inline">
                              <!--干预措施一-->
                              <div class="form-group">
                                  <h5 style="font-weight: bold;">干预措施一</h5>
                                  <label for="time1" style="font-weight: normal;">干预时间：(如输入 10，代表第10天开始干预)</label>
                                  <input id="time1" type="text" placeholder="输入干预时间" class="form-control" name="time1"/>
                                  <br>

                                  <label for="cuoshi1" style="font-weight: normal; margin-top: 5px;">采取措施：</label>
                                  <select id="cuoshi1" class="form-control" name="choose1">
                                      <option value="1">采取严厉防控措施（如封城、封路、限制出行）</option>
                                      <option value="2">召开新闻发布会，说明疫情进展信息</option>
                                      <option value="3">采取较严厉防控措施（停课、公共场所关闭、隔离）</option>
                                      <option value="4">隐瞒实情，号召民众不佩戴口罩</option>
                                  </select>
                              </div>
                              <!--干预措施二-->
                              <div class="form-group" style="margin-top: 20px;">
                                  <h5 style="font-weight: bold;">干预措施二</h5>
                                  <label for="time2" style="font-weight: normal;">干预时间：(如输入 10，代表第10天开始干预)</label>
                                  <input id="time2" type="text" placeholder="输入干预时间" class="form-control" name="time2"/>
                                  <br>

                                  <label for="cuoshi2" style="font-weight: normal; margin-top: 5px;">采取措施：</label>
                                  <select id="cuoshi2" class="form-control" name="choose2">
                                      <option value="1">采取严厉防控措施（如封城、封路、限制出行）</option>
                                      <option value="2">召开新闻发布会，说明疫情进展信息</option>
                                      <option value="3">采取较严厉防控措施（停课、公共场所关闭、隔离）</option>
                                      <option value="4">隐瞒实情，号召民众不佩戴口罩</option>
                                  </select>
                              </div>
                              <!--干预措施三-->
                              <div class="form-group" style="margin-top: 20px;">
                                  <h5 style="font-weight: bold;">干预措施二</h5>
                                  <label for="time3" style="font-weight: normal;">干预时间：(如输入 10，代表第10天开始干预)</label>
                                  <input id="time3" type="text" placeholder="输入干预时间" class="form-control" name="time3"/>
                                  <br>

                                  <label for="cuoshi3" style="font-weight: normal; margin-top: 5px;">采取措施：</label>
                                  <select id="cuoshi3" class="form-control" name="choose3">
                                      <option value="1">采取严厉防控措施（如封城、封路、限制出行）</option>
                                      <option value="2">召开新闻发布会，说明疫情进展信息</option>
                                      <option value="3">采取较严厉防控措施（停课、公共场所关闭、隔离）</option>
                                      <option value="4">隐瞒实情，号召民众不佩戴口罩</option>
                                  </select>
                              </div>
							<input type="hidden" name="N" value="<%=request.getAttribute("N").toString()%>" >
							<input type="hidden" name="p" value="<%=request.getAttribute("p").toString()%>" >
							<input type="hidden" name="stage1" value="<%=request.getAttribute("stage1").toString()%>" >
							<input type="hidden" name="stage2" value="<%=request.getAttribute("stage2").toString()%>" >
							<input type="hidden" name="stage3" value="<%=request.getAttribute("stage3").toString()%>" >
							<input type="hidden" name="r11" value="<%=request.getAttribute("r11").toString()%>" >
							<input type="hidden" name="r12" value="<%=request.getAttribute("r12").toString()%>" >
							<input type="hidden" name="r21" value="<%=request.getAttribute("r21").toString()%>" >
							<input type="hidden" name="r22" value="<%=request.getAttribute("r22").toString()%>" >
							<input type="hidden" name="r31" value="<%=request.getAttribute("r31").toString()%>" >
							<input type="hidden" name="r32" value="<%=request.getAttribute("r32").toString()%>" >
							<input type="hidden" name="r41" value="<%=request.getAttribute("r41").toString()%>" >
							<input type="hidden" name="r42" value="<%=request.getAttribute("r42").toString()%>" >
							<input type="hidden" name="j" value="<%=request.getAttribute("j").toString()%>" >
							<input type="hidden" name="k" value="<%=request.getAttribute("k").toString()%>" >
							<input type="hidden" name="m" value="<%=request.getAttribute("m").toString()%>" >
							

							
							
							
							
							
							
                              <div style="margin-top: 10px; text-align: right;">
                                  <input type="submit" class="form-control btn-primary" style="margin-bottom: 15px" value="继续预测"/>
                              </div>
                          </div>
                      </form>
                  </div>
                  <div class="col-md-6">
                      <p class="title">
                          预测结果
                      </p>
                      <img id="myimage" src="<%=request.getContextPath()%>/images/<%=result5%>" style="margin-left: 15px; margin-top: 5px; margin-bottom: 20px; width: 554px; height: 419px;">
                

				  
				  </div>
                  <div class="col-md-2">
				<% String result1=request.getAttribute("result1").toString();%>
				<% String result2=request.getAttribute("result2").toString();%>
				<% String result3=request.getAttribute("result3").toString();%>
				<% String result4=request.getAttribute("result4").toString();%>
                      <div style="margin-top: 80px; text-align: center; border-width:1px; border-style: solid; border-radius:5px;border-color: black;">
                          <p style="margin:5px;">预测确诊人数顶峰在:<br>第<%=result1%>天</p>
                          <p style="margin:5px;">预测最多确诊人数为:<br><%=result2%>人</p>
                      </div>
                      <div style="margin-top: 50px; text-align: center; border-width:1px; border-style: solid; border-radius:5px;border-color: black;">
                          <p style="margin:5px;">预测无症状患者数顶峰在:<br>第<%=result3%>天</p>
                          <p style="margin:5px;">预测最多无症状患者数为:<br><%=result4%>人</p>
                      </div>
                  </div>
                  </div>
              </div>
      </section>
    </div>
</div>

<!--footer底部区域-->
<footer>
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <p>©copyright&nbsp;2020&nbsp;武汉大学信息管理学院</p>
            </div>
        </div>
    </div>
</footer>
<!--footer底部区域-->

<!--jquery一定要比bootstrap先引入！-->
<script src="js/jquery-1.11.0.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>
</body>
</html>	