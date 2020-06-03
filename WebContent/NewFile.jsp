<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>

<!--HTML标签-->
<img id="ImagePic" alt="Base64 encoded image" width="100" height="100" />
<script>
	$.ajax({
       type:'post',
         data:{"param1":"0001","param2":"0002"}, //参数
         dataType:'json', 
         url: "${root}/abc.do",
         success: function(data) {
             //将图片的Base64编码设置给src
             $("#ImagePic").attr("src","data:image/png;base64,"+data);
         },
         error:function(data){
             alert('响应失败！');
         }
      });
</script>


</body>
</html>