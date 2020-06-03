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


public class StageServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public StageServlet() {
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
	         String N = request.getParameter("Npara");
	         String stage1 = request.getParameter("stage1");
	         String stage2 = request.getParameter("stage2");
	         String stage3 = request.getParameter("stage3");
	 		 String r11 = request.getParameter("r11");
	 		 String r12 = request.getParameter("r12");
	 		 String r21 = request.getParameter("r21");
	 		 String r22 = request.getParameter("r22");
	 		 String r31 = request.getParameter("r31");
	 		 String r32 = request.getParameter("r32");
	 		 String r41 = request.getParameter("r41");
	 		 String r42 = request.getParameter("r42");
	 		
	 		System.out.println(N);
	 		System.out.println(stage1);
	 		System.out.println(stage2);
	 		System.out.println(stage3);
	 		System.out.println(r11);
	 		System.out.println(r12);
	 		System.out.println(r21);
	 		System.out.println(r22);
	 		System.out.println(r31);
	 		System.out.println(r32);
	 		System.out.println(r41);
	 		System.out.println(r42);
	 		
	        
//	         String[] args1=new String[]{"python","C:\\Users\\Thinkpad\\Desktop\\test.py",s};
//	         String[] args1=new String[]{"python","C:\\Users\\Thinkpad\\Desktop\\1.py",s};
	         String[] args1=new String[]{"python","C:\\Users\\Thinkpad\\eclipse-workspace\\kangyi\\src\\resources\\stagemodel.py",N,stage1,stage2,stage3,r11,r12,r21,r22,r31,r32,r41,r42};
	         
	         Process pr=Runtime.getRuntime().exec(args1);
	          
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
	          System.out.println(line);
	          i++;
	         }
	         in.close();
	         pr.waitFor();
	         System.out.println("end");
//	         request.setHeader("Refresh", "1000; URL=http://localhost:8080/King/servlet/Forward.jsp");
//	         request.getRequestDispatcher("stage-model-result.jsp").forward(request, response);
	         request.getRequestDispatcher("StageServlet2").forward(request, response);
	         //forward不行
	         //	         request.getRequestDispatcher("stage-model-result.jsp").
	         
	        } catch (Exception e) {
	         e.printStackTrace();
	        }
		
		}
		
		
	

}
