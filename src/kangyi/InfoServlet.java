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


public class InfoServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public InfoServlet() {
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
	         String p = request.getParameter("p");
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
	 		 String j = request.getParameter("j");
	 		 String k = request.getParameter("k");
	 		 String m = request.getParameter("m");
	 		
	 		System.out.println(N);
	 		System.out.println(p);
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
	 		System.out.println(j);
	 		System.out.println(k);
	 		System.out.println(m);
	 		
	 		request.setAttribute("N",N);
	 		request.setAttribute("p",p);
	 		request.setAttribute("stage1",stage1);
	 		request.setAttribute("stage2",stage2);
	 		request.setAttribute("stage3",stage3);
	 		request.setAttribute("r11",r11);
	 		request.setAttribute("r12",r12);
	 		request.setAttribute("r21",r21);
	 		request.setAttribute("r22",r22);
	 		request.setAttribute("r31",r31);
	 		request.setAttribute("r32",r32);
	 		request.setAttribute("r41",r41);
	 		request.setAttribute("r42",r42);
	 		request.setAttribute("j",j);
	 		request.setAttribute("k",k);
	 		request.setAttribute("m",m);
//	         String[] args1=new String[]{"python","C:\\Users\\Thinkpad\\Desktop\\test.py",s};
//	         String[] args1=new String[]{"python","C:\\Users\\Thinkpad\\Desktop\\1.py",s};
//	         String[] args1=new String[]{"python","C:\\Users\\Thinkpad\\eclipse-workspace\\kangyi\\src\\resources\\stagemodel.py",N,stage1,stage2,stage3,r11,r12,r21,r22,r31,r32,r41,r42};
	         String[] args1=new String[]{"python","C:\\Users\\Thinkpad\\eclipse-workspace\\kangyi\\src\\resources\\infomodel.py",N,p,stage1,stage2,stage3,r11,r12,r21,r22,r31,r32,r41,r42,j,k,m};
	         
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
	          System.out.println(line);
	          i++;
	         }
	         in.close();
	         pr.waitFor();
	         System.out.println("end");
	         
//	         request.getRequestDispatcher("info-model-result.jsp").forward(request, response);
	         request.getRequestDispatcher("predict-result.jsp").forward(request, response);
	         
	        } catch (Exception e) {
	         e.printStackTrace();
	        }
		
		}
		
		
	

}
