package kangyi;

//package test;
import java.io.BufferedReader;
import java.io.InputStreamReader;

import spider.SpiderService;
public class yiqing_write {
   
	public static void main(String[] args) {
		method_yiqing_write();
	}
	public static void method_yiqing_write() {
		try {
	    	System.out.println("start");
	    	SpiderService.updateDatabase();
	        String[] args1=new String[]{"python","C:\\Users\\Thinkpad\\Desktop\\kangyi\\src\\resources\\test3_pyecharts.py"};
	        
	        Process pr=Runtime.getRuntime().exec(args1);
	        
	        BufferedReader in = new BufferedReader(new InputStreamReader(pr.getInputStream()));
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
	        }
		}
}