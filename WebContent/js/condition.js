function myCondition() {
		var obj = new Array;
		$.ajax({
			url : encodeURI(encodeURI("socialServlet?method=getCondition")),
			type : "POST",
			dataType : "text",
			cache : false,
			async : false,
			success : function(data) {
				obj = eval("(" + data + ")");
//				alert(obj)
				console.log(obj);				
			},
		});
		
		return obj;	

}