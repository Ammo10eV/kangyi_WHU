package kangyi;

//package test;
import java.io.BufferedReader;
import java.io.InputStreamReader;
public class demo2 {
   
  public static void main(String[] args) {
      try {
    	  System.out.println("start");
//        int a=20;
//        int b=30;
    	
    		
    			   
    			   
    			    
        String N = "14000000";
  
		 String r1= "20";
	
		 
		 
		System.out.println(N);
		System.out.println(r1);

       
//        String[] args1=new String[]{"python","C:\\Users\\Thinkpad\\Desktop\\test.py",s};
//        String[] args1=new String[]{"python","C:\\Users\\Thinkpad\\Desktop\\1.py",s};
        String[] args1=new String[]{"python","C:\\Users\\Thinkpad\\eclipse-workspace\\kangyi\\src\\resources\\easymodel.py",N,r1};
        
        Process pr=Runtime.getRuntime().exec(args1);
         
        BufferedReader in = new BufferedReader(new InputStreamReader(
          pr.getInputStream()));
        String line;
        int i=0;
        while ((line = in.readLine()) != null) {
       
         System.out.println(line);
         i++;
        }
        in.close();
        pr.waitFor();
        System.out.println("end");
        } catch (Exception e) {
         e.printStackTrace();
        }}
  public void test(){
      System.out.println("我的第一个方法C");
  }

}