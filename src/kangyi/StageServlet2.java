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


public class StageServlet2 extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public StageServlet2() {
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
	         String result1 = (String) request.getAttribute("result1");
	        
	         String result2= (String) request.getAttribute("result2");
	         String result3= (String) request.getAttribute("result3");
	         String result4= (String) request.getAttribute("result4");
	 		 String result5= (String) request.getAttribute("result5");
	 		
	 		 System.out.println("result1-servlet2-"+ result1);
	 		
	 		request.setAttribute("result1",result1);
	 		request.setAttribute("result2",result2);
	 		request.setAttribute("result3",result3);
	 		request.setAttribute("result4",result4);
	 		request.setAttribute("result5",result5);
//	 		request.setAttribute("result2",line);
	 		
//	         
//	         request.setHeader("Refresh", "1000; URL=http://localhost:8080/King/servlet/Forward.jsp");
	         request.getRequestDispatcher("stage-model-result.jsp").forward(request, response);
	         //forward不行
	         //	         request.getRequestDispatcher("stage-model-result.jsp").
	         
	        } catch (Exception e) {
	         e.printStackTrace();
	        }
		
		}
		
		
	

}
