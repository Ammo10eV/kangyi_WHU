    <%@page language="java" contentType="text/html; charset=UTF-8"
            pageEncoding="UTF-8"%>
        <%@page import="java.util.*"%>
        <%@page import="net.sf.json.JSONArray"%>
        <%@page import="net.sf.json.JSONObject"%>
        <%@page import="java.util.Iterator"%>

<!DOCTYPE html>
<html lang="en">
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
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width,initial-scale=1,user-scalable=no">
    <title>预测模型</title>
    <link rel="stylesheet" href="css/bootstrap.min.css"/>
    <link rel="stylesheet" href="css/bootstrap-yihui.css"/>
</head>







<body onload="aaa()">

<!--导航栏-->
<nav class="navbar navbar-default navbar-fixed-top">
    <div class="container">
        <!--小屏幕导航按钮和logo-->
        <div class="nabbar-header">
            <!--向 <div> 元素添加一个标题 class .navbar-header，内部包含了带有 class navbar-brand 的 <a> 元素。这会让文本看起来更大一号。-->
            <a href="index.html" class="navbar-brand">预测模型</a>
            <button class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
            </button>
        </div>
        <!--小屏幕导航按钮和logo-->

        <!--右上角导航-->
        <div class="navbar-collapse collapse">
            <ul class="nav navbar-nav navbar-right">
                <li><a href="index.html">首页</a></li>
                <li><a href="http://www.baidu.com" target="_blank">搜索</a></li>
            </ul>
        </div>
        <!--右上角导航-->
    </div>
</nav>
<!--导航栏-->

<!--模型结果部分-->

<!--模型结果部分-->

<!--搜索部分-->
<div class="search">
    <div class="container">
       	 
		<div class="row">
			<div class="col-md-8">
				
			
			<P><IMG id=myimage style="MARGIN: 30px 0px 0px 10px" src="<%=request.getContextPath()%>/images/<%=result5%>"> 
		
				
				</P></TR></TBODY></TABLE>
				
				
				
				
				
			</div>
			
	

			<div class="col-md-4">
			<br><br>
			  
				<% String result1=request.getAttribute("result1").toString();%>
				<% String result2=request.getAttribute("result2").toString();%>
				<% String result3=request.getAttribute("result3").toString();%>
				<% String result4=request.getAttribute("result4").toString();%>
				<p class="bg-primary1">	
				<br>
				    &nbsp;&nbsp;预测确诊人数顶峰在：第<%=result1%>天<br><br>
				    &nbsp;&nbsp;预测最多确诊人数为：<%=result2%>人<br><br>
				</p>
				<p class="bg-primary1">	
				<br>
					&nbsp;&nbsp;预测无症状患者数顶峰在：第<%=result3%>天 <br><br>
					&nbsp;&nbsp;预测最多无症状患者数为：<%=result4%>人<br><br>
				
				</p>            

				
			</div>
		</div>
<!--MARGIN第一个是上下  最后一个是左右-->
        <!--搜索-->
        <!--表单传送到当前界面，方法为post-->
        <div class="sou">
        <form action="StageServlet" method="post">
            <!--class均为form-control(这是在bootstrap里默认的)-->
            <div class="forms">

                <div class="col-md-4">
                    <!--输入传染率-->
                    <div class="form-group">
                        <label for="keyword">输入初始易感者人数</label>
                       <input id="keyword" type="text" placeholder="输入人数(武汉人数为14000000)" class="form-control" name="Npara"/>
                    </div>
                </div>
                
              
                
                <div class="col-md-4">
                    <!--输入每个患者接触人数-->
                    <div class="form-group">
                        <label for="keyword">输入第二阶段开始时间（第几天）</label>
                       <input id="keyword" type="text" placeholder="输入第几天（例如 输入“3”代表第三天开始第二阶段）" class="form-control" name="stage1"/>
                    </div>
                </div>
                
                 <div class="col-md-4">
                    <!--输入每个患者接触人数-->
                    <div class="form-group">
                        <label for="keyword">输入第三阶段开始时间（第几天）</label>
                       <input id="keyword" type="text" placeholder="输入第几天（例如 输入“3”代表第三天开始第三阶段）" class="form-control" name="stage2"/>
                    </div>
                </div>
                
                 <div class="col-md-4">
                    <!--输入每个患者接触人数-->
                    <div class="form-group">
                        <label for="keyword">输入第四阶段开始时间（第几天）</label>
                       <input id="keyword" type="text" placeholder="输入第几天（例如 输入“3”代表第三天开始第四阶段）" class="form-control" name="stage3"/>
                    </div>
                </div>
               
                

                <div class="col-md-4">
                    <!--输入每个患者接触人数-->
                    <div class="form-group">
                        <label for="keyword">输入第一阶段每个患者每日接触人数</label>
                       <input id="keyword" type="text" placeholder="输入人数" class="form-control" name="r11"/>
                    </div>
                </div>
				
				 <div class="col-md-4">
                    <!--输入每个患者接触人数-->
                    <div class="form-group">
                        <label for="keyword">输入第一阶段每个潜伏者每日接触人数</label>
                       <input id="keyword" type="text" placeholder="输入人数" class="form-control" name="r12"/>
                    </div>
                </div>
                 <div class="col-md-4">
                    <!--输入每个患者接触人数-->
                    <div class="form-group">
                        <label for="keyword">输入第二阶段每个患者每日接触人数</label>
                       <input id="keyword" type="text" placeholder="输入人数" class="form-control" name="r21"/>
                    </div>
                </div>
                 <div class="col-md-4">
                    <!--输入每个患者接触人数-->
                    <div class="form-group">
                        <label for="keyword">输入第二阶段每个潜伏者每日接触人数</label>
                       <input id="keyword" type="text" placeholder="输入人数" class="form-control" name="r22"/>
                    </div>
                </div>
                 <div class="col-md-4">
                    <!--输入每个患者接触人数-->
                    <div class="form-group">
                        <label for="keyword">输入第三阶段每个患者每日接触人数</label>
                       <input id="keyword" type="text" placeholder="输入人数" class="form-control" name="r31"/>
                    </div>
                </div>
                 <div class="col-md-4">
                    <!--输入每个患者接触人数-->
                    <div class="form-group">
                        <label for="keyword">输入第三阶段每个潜伏者每日接触人数</label>
                       <input id="keyword" type="text" placeholder="输入人数" class="form-control" name="r32"/>
                    </div>
                </div>
                 <div class="col-md-4">
                    <!--输入每个患者接触人数-->
                    <div class="form-group">
                        <label for="keyword">输入第四阶段每个患者每日接触人数</label>
                       <input id="keyword" type="text" placeholder="输入人数" class="form-control" name="r41"/>
                    </div>
                </div>
                 <div class="col-md-4">
                    <!--输入每个患者接触人数-->
                    <div class="form-group">
                        <label for="keyword">输入第四阶段每个潜伏者每日接触人数</label>
                       <input id="keyword" type="text" placeholder="输入人数" class="form-control" name="r42"/>
                    </div>
                </div>


                <div class="col-md-4" style="margin-top: 25px">
                    <input type="submit" class="form-control" value="开始预测"/>
                </div>
			
            </div>

        </form>
        <!--搜索-->
        </div>
        </div>
    </div>



<!--搜索部分-->

<!--footer底部区域-->
<footer>
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <p>©copyright&nbsp;2020&nbsp;武汉大学数据科学研究协会 </p>
            </div>
        </div>
    </div>
</footer>
<!--footer底部区域-->



<script src="http://apps.bdimg.com/libs/jquery/2.1.4/jquery.min.js"></script>
<script src="js/bootstrap.min.js/"></script>
</body>
</html>