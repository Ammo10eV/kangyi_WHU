package kangyi;

import java.io.BufferedReader;
import java.io.DataInputStream;
import java.io.DataOutputStream;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.Socket;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;


public class EasymodelServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public EasymodelServlet() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
//		System.out.println(username+password+password2);
		System.out.println("进入servlet");
		try {
	         System.out.println("start");
//	         int a=20;
//	         int b=30;
	        
	         String pagename = request.getParameter("pagename");
	 		 String time1 = request.getParameter("time1");
	 		 String time2 = request.getParameter("time2");
	 		 String time3 = request.getParameter("time3");
	 		 String choose1 = request.getParameter("choose1");
	 	
	 		String choose2 = request.getParameter("choose2");
	 		String choose3 = request.getParameter("choose3");
	 		 
//	 		 if(request.getParameter("choose1").startsWith("1")) {
//	 			choose1 = "1";
//	 		 }
//	 		 else if(request.getParameter("choose1").equals("召开新闻发布会，说明疫情进展信息")) {
//		 			 choose1 = "2";
//	 		 }
//	 		 else if(request.getParameter("choose1").equals("采取较严厉防控措施（停课、公共场所关闭、隔离）")) {
//		 			 choose1 = "3";
//		 		 }
//	 		 else if(request.getParameter("choose1").equals("隐瞒实情，号召民众不佩戴口罩")) {
//		 			 choose1 = "4";
//		 		 }
//	 		
//	 		 if(request.getParameter("choose2").equals("采取严厉防控措施（如封城、封路、限制出行）")) {
//		 			 choose2 = "1";
//		 		 }
//		 	else if(request.getParameter("choose2").equals("召开新闻发布会，说明疫情进展信息")) {
//			 			 choose2 = "2";
//		 		 }
//		 	else if(request.getParameter("choose2").equals("采取较严厉防控措施（停课、公共场所关闭、隔离）")) {
//			 			 choose2 = "3";
//			 		 }
//		 	else if(request.getParameter("choose2").equals("隐瞒实情，号召民众不佩戴口罩")) {
//			 			 choose2 = "4";
//			 		 }
//	 		 
//	 		 if(request.getParameter("choose3").equals("采取严厉防控措施（如封城、封路、限制出行）")) {
//		 			 choose3 = "1";
//		 		 }
//		 	else if(request.getParameter("choose3").equals("召开新闻发布会，说明疫情进展信息")) {
//			 			 choose3 = "2";
//		 		 }
//		 	else if(request.getParameter("choose3").equals("采取较严厉防控措施（停课、公共场所关闭、隔离）")) {
//			 			 choose3 = "3";
//			 		 }
//		    else if(request.getParameter("choose3").equals("隐瞒实情，号召民众不佩戴口罩")) {
//			 			 choose3 = "4";
//			 		 }
//	 	
	 			 
//	 	
	 	
	 		
	 		System.out.println("pagename="+pagename);
	 		System.out.println("time1="+time1);
	 		System.out.println("choose1="+choose1);
	 		System.out.println(time2);
	 		System.out.println(choose2);
	 		System.out.println(time3);
	 		System.out.println(choose3);
	 		
	 		String[] args1=null;
	 		if(pagename.equals("Korean")) {
	 			args1=new String[]{"python","C:\\Users\\Thinkpad\\eclipse-workspace\\kangyi\\src\\resources\\koreanmodel_forweb.py",time1,choose1,time2,choose2,time3,choose3};
		    }
	 		else if(pagename.equals("US")) {
	 			
	 		}
	 		//没写完
////	         String[] args1=new String[]{"python","C:\\Users\\Thinkpad\\Desktop\\test.py",s};
////	         String[] args1=new String[]{"python","C:\\Users\\Thinkpad\\Desktop\\1.py",s};
////	         String[] args1=new String[]{"python","C:\\Users\\Thinkpad\\eclipse-workspace\\kangyi\\src\\resources\\stagemodel.py",N,stage1,stage2,stage3,r11,r12,r21,r22,r31,r32,r41,r42};
	         
	         Process pr=Runtime.getRuntime().exec(args1);//运行python文件
	          
	         BufferedReader in = new BufferedReader(new InputStreamReader(
	           pr.getInputStream()));
	         String line;
	         int i=0;
	         while ((line = in.readLine()) != null) {
	        	 if(i==0) {
	        		request.setAttribute("result1",line);
	        		
	             }
	        	 else if(i==1) {
		        		request.setAttribute("result2",line);
		          }
	        	 else if(i==2) {
		        		request.setAttribute("result3",line);
		          }
	        	 else if(i==3) {
		        		request.setAttribute("result4",line);
		          }
	        	 else if(i==4) {
		        		request.setAttribute("result5",line);
		          }
	        	 else if(i==5) {
		        		request.setAttribute("result6",line);
		          }
	        	 else if(i==6) {
		        		request.setAttribute("result7",line);
		          }
	        	 else if(i==7) {
		        		request.setAttribute("result8",line);
		          }
	        	 else if(i==8) {
		        		request.setAttribute("result9",line);
		          }
	        	
	          System.out.println(line);
	          i++;
	         }
	         in.close();
	         pr.waitFor();
	         System.out.println("end");
	         
//	         request.getRequestDispatcher("info-model-result.jsp").forward(request, response);
	         if(pagename.equals("Korean")) {
	        	 request.getRequestDispatcher("predict-easy-Korean-result.jsp").forward(request, response);
		       }
		 	 else if(pagename.equals("US")) {
		 			
		 	  }
		 		//没写完
	         
	        } catch (Exception e) {
	         e.printStackTrace();
	        }
		
		}
		
		
	

}
