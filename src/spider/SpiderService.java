package spider;

import com.alibaba.fastjson.JSONArray;//fastjson
import com.alibaba.fastjson.JSONObject;
//import com.common.apiV2.beans.HttpPojo;
//import org.springframework.stereotype.Service;
import com.mysql.jdbc.Connection;

import java.io.BufferedOutputStream;
import java.io.BufferedReader;
import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.URL;
import java.net.URLConnection;
import java.sql.DriverManager;
import java.sql.SQLException;
import java.util.*;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

 

 

//Service("WuhanService")

public class SpiderService {
    /**

     * 获取新浪的总共确诊病例、疑似病例、治愈人数、死亡人数等数据

     * @return
     * @throws IOException 

     */

    public static String getStatisticsService() throws IOException{

        //String url="https://ncov.dxy.cn/ncovh5/view/pneumonia";
    	String url="https://w.url.cn/s/AiIDnu2";
        //模拟请求
        HttpPojo httpPojo = new HttpPojo();
        //httpPojo.setHttpHost("ncov.dxy.cn");
        httpPojo.setHttpHost("w.url.cn");
        httpPojo.setHttpAccept("*/*");
        httpPojo.setHttpConnection("keep-alive");
        httpPojo.setHttpUserAgent("Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/63.0.3239.132 Safari/537.36");
        //httpPojo.setHttpReferer("https://ncov.dxy.cn");
        //httpPojo.setHttpOrigin("https://ncov.dxy.cn");
        httpPojo.setHttpReferer("https://w.url.cn");
        httpPojo.setHttpOrigin("https://w.url.cn");

        Map paramObj = new HashMap();

        String htmlResult = httpSendGet(url, paramObj, httpPojo); //整个html页面
        
//        File newFile=new File("C:\\Users\\10128\\Desktop\\htmlcontent.txt");
//        FileOutputStream fos=new FileOutputStream("C:\\Users\\10128\\Desktop\\htmlcontent.txt");
        
        
        File newFile=new File("C:\\Users\\Thinkpad\\Desktop\\htmlcontent.txt");
        FileOutputStream fos=new FileOutputStream("C:\\Users\\Thinkpad\\Desktop\\htmlcontent.txt");
        
        BufferedOutputStream bos=new BufferedOutputStream(fos);
        bos.write(htmlResult.getBytes(),0,htmlResult.getBytes().length);
        bos.flush();
        bos.close();//将获取到的页面写入txt文档中

        //正则获取数据
        //正则获取json：
        //"rawdata":{"yiqingMapData":{"data":{"times":"\u622a\u81f35\u670816\u65e523\u65f601\u5206","mtime":"2020-05-16 23:01:00","cachetime":"2020-05-16 23:12:24","gntotal":"84478","deathtotal":"4644","sustotal":"3","curetotal":"79679","econNum":"155","heconNum":"11","asymptomNum":"561","jwsrNum":"1698","add_daily":{"addcon":9,"addsus":0,"adddeath":0,"addcure":35,"wjw_addsus":"2","addcon_new":"+9","adddeath_new":"+0","addcure_new":"+35","wjw_addsus_new":"+2","addecon_new":"-26","addhecon_new":"+0","addjwsr":"+6","addasymptom":"-58"
        String reg= "\\{(\\\"times\")(.*?)\\}";
        Pattern totalPattern = Pattern.compile(reg);
        Matcher totalMatcher = totalPattern.matcher(htmlResult);
        
        String result="";

        if (totalMatcher.find()){
            result = "{"+totalMatcher.group(1)+totalMatcher.group(2)+"}}";
            System.out.println(result);
            //JSONObject jsonObject = JSONObject.parseObject(result);

            //String modifyTime = jsonObject.getString("modifyTime");

            //System.out.println("modifyTime："+modifyTime);

        }
        return result;
    }

    /**

     * 获取全国各个省市的确诊、死亡和治愈人数

     * @return

     */

    public static String getAreaStat(){

        //String url="https://ncov.dxy.cn/ncovh5/view/pneumonia";
    	String url="https://w.url.cn/s/AiIDnu2";
        //模拟请求

        HttpPojo httpPojo = new HttpPojo();
//      httpPojo.setHttpHost("ncov.dxy.cn");
        httpPojo.setHttpHost("w.url.cn");
        httpPojo.setHttpAccept("*/*");
        httpPojo.setHttpConnection("keep-alive");
        httpPojo.setHttpUserAgent("Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/63.0.3239.132 Safari/537.36");
        /*httpPojo.setHttpReferer("https://ncov.dxy.cn");
        httpPojo.setHttpOrigin("https://ncov.dxy.cn");*/
        httpPojo.setHttpReferer("https://w.url.cn");
        httpPojo.setHttpOrigin("https://w.url.cn");
        Map paramObj = new HashMap();

        String htmlResult = httpSendGet(url, paramObj, httpPojo); //整个html页面

        //System.out.println(htmlResult);

 

        //正则获取数据

        //因为html的数据格式看着就像json格式，所以我们正则获取json
        //{"name":"\u5317\u4eac","ename":"beijing","value":"593","conadd":"0","hejian":"","econNum":"8","susNum":"0","deathNum":"9","cureNum":"576","adddaily":{"conadd":"+0","deathadd":"+0","cureadd":"+2","econadd":"-2","conadd_n":0,"deathadd_n":0,"cureadd_n":2}}
       
        String reg= "\\[\\{(\\\"name\")(.*?)\\}}\\]";//提取全国各个省市json的正则表达式
        Pattern totalPattern = Pattern.compile(reg);
        Matcher totalMatcher = totalPattern.matcher(htmlResult);
 
        String result="";

        if (totalMatcher.find()){

            result = "[{"+totalMatcher.group(1)+totalMatcher.group(2)+"}}]";

            System.out.println(result);

            //各个省市的是一个列表List，如果想保存到数据库中，要遍历结果，下面是demo

            /*JSONArray array = JSONArray.parseArray(result);

            JSONObject jsonObject = JSONObject.parseObject(array.getString(0));

            String provinceName = jsonObject.getString("name");

            System.out.println("provinceName："+provinceName);*/

        }
        return result;

    }

 

    /**

     * 获取全球各个国家的确诊、死亡和治愈人数

     * @return
     * @throws IOException 

     */

    public static String getListByCountryTypeService2() throws IOException{

        String url="https://gwpre.sina.cn/ncp/foreign?";
        //模拟请求

        HttpPojo httpPojo = new HttpPojo();
        httpPojo.setHttpHost("gwpre.sina.cn");
        httpPojo.setHttpAccept("*/*");
        httpPojo.setHttpConnection("keep-alive");
        httpPojo.setHttpUserAgent("Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/63.0.3239.132 Safari/537.36");
       /* httpPojo.setHttpReferer("https://ncov.dxy.cn");
        httpPojo.setHttpOrigin("https://ncov.dxy.cn");*/
        httpPojo.setHttpReferer("https://gwpre.sina.cn");
        httpPojo.setHttpOrigin("https://gwpre.sina.cn");
        

        Map paramObj = new HashMap();

        String htmlResult = httpSendGet(url, paramObj, httpPojo); //整个html页面

        
        File newFile=new File("C:\\Users\\10128\\Desktop\\foreignContent.txt");
        FileOutputStream fos=new FileOutputStream("C:\\Users\\10128\\Desktop\\foreignContent.txt");
        BufferedOutputStream bos=new BufferedOutputStream(fos);
        bos.write(htmlResult.getBytes(),0,htmlResult.getBytes().length);
        bos.flush();
        bos.close();//将获取到的页面写入txt文档中
        //System.out.println(htmlResult);
        //正则获取数据

        //因为html的数据格式看着就像json格式，所以我们正则获取json
        String reg= "\\[\\{\"conNum\":\\\".*?\\\",\\\".*?\\}\\]";
        Pattern totalPattern = Pattern.compile(reg);
        Matcher totalMatcher = totalPattern.matcher(htmlResult);


        String result="";
        
        if (totalMatcher.find()){
            result = totalMatcher.group(0);
            System.out.println(result);

            //各个国家的是一个列表List，如果想保存到数据库中，要遍历结果，下面是demo

           /* JSONArray array = JSONArray.parseArray(result);
            JSONObject jsonObject = JSONObject.parseObject(array.getString(0));
            String provinceName = jsonObject.getString("name");
            System.out.println("continents："+provinceName);*/
        }
     return result;

    }
    /**
     * 获取全球疫情总数据
     * 
     **/
    
    public static String getDataWorldwide() throws IOException{

        String url="https://gwpre.sina.cn/ncp/foreign?";
        //模拟请求

        HttpPojo httpPojo = new HttpPojo();
        httpPojo.setHttpHost("gwpre.sina.cn");
        httpPojo.setHttpAccept("*/*");
        httpPojo.setHttpConnection("keep-alive");
        httpPojo.setHttpUserAgent("Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/63.0.3239.132 Safari/537.36");
       /* httpPojo.setHttpReferer("https://ncov.dxy.cn");
        httpPojo.setHttpOrigin("https://ncov.dxy.cn");*/
        httpPojo.setHttpReferer("https://gwpre.sina.cn");
        httpPojo.setHttpOrigin("https://gwpre.sina.cn");
        

        Map paramObj = new HashMap();

        String htmlResult = httpSendGet(url, paramObj, httpPojo); //整个html页面

        
        File newFile=new File("C:\\Users\\10128\\Desktop\\foreignContent.txt");
        FileOutputStream fos=new FileOutputStream("C:\\Users\\10128\\Desktop\\foreignContent.txt");
        BufferedOutputStream bos=new BufferedOutputStream(fos);
        bos.write(htmlResult.getBytes(),0,htmlResult.getBytes().length);
        bos.flush();
        bos.close();//将获取到的页面写入txt文档中
        //System.out.println(htmlResult);
        //正则获取数据

        //因为html的数据格式看着就像json格式，所以我们正则获取json
        String reg= "\\\"total\\\":(\\{\\\"certain\\\":.*?\\})";
        Pattern totalPattern = Pattern.compile(reg);
        Matcher totalMatcher = totalPattern.matcher(htmlResult);


        String result="";
        
        if (totalMatcher.find()){
            result = totalMatcher.group(1);
            System.out.println(result);

            //各个国家的是一个列表List，如果想保存到数据库中，要遍历结果，下面是demo

           /* JSONArray array = JSONArray.parseArray(result);
            JSONObject jsonObject = JSONObject.parseObject(array.getString(0));
            String provinceName = jsonObject.getString("name");
            System.out.println("continents："+provinceName);*/
        }
     return result;

    }

public static void getJsonToStringArray(String str) {   

        JSONArray jsonArray = JSONArray.parseArray(str);   
        String[] arr=new String[jsonArray.size()];   
        for(int i=0;i<jsonArray.size();i++){   
            arr[i]=jsonArray.getString(i); 
            System.out.println(arr[i]);   
        }   
  }   



/**

     * 获取页面的实时播报

     * @return

     */

    public static String getTimelineService(){

        String url="https://ncov.dxy.cn/ncovh5/view/pneumonia";

        //模拟请求

        HttpPojo httpPojo = new HttpPojo();
        httpPojo.setHttpHost("ncov.dxy.cn");
        httpPojo.setHttpAccept("*/*");
        httpPojo.setHttpConnection("keep-alive");
        httpPojo.setHttpUserAgent("Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/63.0.3239.132 Safari/537.36");
        httpPojo.setHttpReferer("https://ncov.dxy.cn");
        httpPojo.setHttpOrigin("https://ncov.dxy.cn");
        Map paramObj = new HashMap();
        String htmlResult = httpSendGet(url, paramObj, httpPojo); //整个html页面

        //System.out.println(htmlResult);

        //正则获取数据

        //因为html的数据格式看着就像json格式，所以我们正则获取json

        String reg= "window.getTimelineService = (.*?)\\}(?=catch)";
        Pattern totalPattern = Pattern.compile(reg);
        Matcher totalMatcher = totalPattern.matcher(htmlResult);

        String result="";

        if (totalMatcher.find()){
            result = totalMatcher.group(1);
            System.out.println(result);
            //是一个列表List，如果想保存到数据库中，要遍历结果，下面是demo

            /*JSONArray array = JSONArray.parseArray(result);

            for (int i = 0; i < array.size(); i++) {

                JSONObject jsonObject = JSONObject.parseObject(array.getString(i));

                String title = jsonObject.getString("title");

                System.out.println("title："+title);

            }*/
        }

        return result;

    }


    /**

     * http请求

     * @param url
     * @param paramObj
     * @param httpPojo
     * @return
     */

    private static String httpSendGet(String url, Map paramObj, HttpPojo httpPojo){

        String result = "";
        String urlName = url + "?" + parseParam(paramObj);
        BufferedReader in=null;

        try {

            URL realURL = new URL(urlName);
            URLConnection conn = realURL.openConnection();
            //伪造ip访问

            String ip = randIP();
            System.out.println("目前伪造的ip："+ip);
            conn.setRequestProperty("X-Forwarded-For", ip);
            conn.setRequestProperty("HTTP_X_FORWARDED_FOR", ip);
            conn.setRequestProperty("HTTP_CLIENT_IP", ip);
            conn.setRequestProperty("REMOTE_ADDR", ip);
            conn.setRequestProperty("Host", httpPojo.getHttpHost());
            conn.setRequestProperty("accept", httpPojo.getHttpAccept());
            conn.setRequestProperty("connection", httpPojo.getHttpConnection());
            conn.setRequestProperty("user-agent", httpPojo.getHttpUserAgent());
            conn.setRequestProperty("Referer",httpPojo.getHttpReferer()); //伪造访问来源
            conn.setRequestProperty("Origin", httpPojo.getHttpOrigin()); //伪造访问域名

            conn.connect();

            Map<String, List<String>> map = conn.getHeaderFields();
            for (String s : map.keySet()) {

                //System.out.println(s + "-->" + map.get(s));

            }

            in = new BufferedReader(new InputStreamReader(conn.getInputStream(), "utf-8"));
            String line;
            while ((line = in.readLine()) != null) {

                result += "\n" + line;

            }
 
        } catch (IOException e) {

            e.printStackTrace();

        }finally {

            if (in!=null){
                try {
                    in.close();
                }catch (Exception e){
                    e.printStackTrace();
                }

            }

        }

        return result;

    }

    /**

     * 解析map

     * @param paramObj

     * @return

     */

    public static String parseParam(Map paramObj){
        String param="";
        if (paramObj!=null&&!paramObj.isEmpty()){
            for (Object key:paramObj.keySet()){
                String value = paramObj.get(key).toString();
                param+=(key+"="+value+"&");

            }

        }

        return param;

    }

    /**

     * 伪造ip地址

     * @return

     */

    public static String randIP() {
        Random random = new Random(System.currentTimeMillis());
        return (random.nextInt(255) + 1) + "." + (random.nextInt(255) + 1)
                + "." + (random.nextInt(255) + 1) + "."
                + (random.nextInt(255) + 1);
    }
    
    /**爬取最新数据并更新数据库**/
    public static void updateDatabase() throws SQLException, IOException {
    	//时间和中国数据的录入靠result1
    	String result1=getStatisticsService();//运行获取新浪的总共确诊病例、疑似病例、治愈人数、死亡人数。**需要进一步提取的数据有：更新时间（年月日）、中国累计确诊、累计治愈、累计死亡
    	//System.out.println(result1);
    	//意大利、韩国、西班牙、美国、英国数据获取，靠result2
    	String result2=getListByCountryTypeService2();
    	//System.out.println(result2);
    	//用正则表达式获取result1中需要进一步提取的数据
    	String Date = null;
    	String Country = null;
    	String Diagnosis = null;
    	String Death = null;
    	String Cure = null;
    	
    	//获取统一的date
    	String regdate= "(\\\"mtime\\\"):\\\"(.*?)\\s";
    	Pattern datePattern = Pattern.compile(regdate);
        Matcher dateMatcher = datePattern.matcher(result1);
        while (dateMatcher.find()) {
    	Date=dateMatcher.group(2);
    	System.out.println(Date);
        }
        
        /******中国数据库更新*******/
        //获取中国确诊、死亡、治愈人数（累计）
        String regex1 = "\\\"gntotal\\\":\\\"(.*?)\\\",\\\"deathtotal\\\":\\\"(.*?)\\\",\\\"sustotal\\\":\\\".*?\\\",\\\"curetotal\\\":\\\"(.*?)\\\"";
        Pattern pattern1 = Pattern.compile(regex1);
        Matcher matcher1 = pattern1.matcher(result1);
        while (matcher1.find()) {
        Country="china";
    	Diagnosis=matcher1.group(1);
    	Death=matcher1.group(2);
    	Cure=matcher1.group(3);
    	System.out.println(Diagnosis);
    	System.out.println(Death);
    	System.out.println(Cure);
        }
        //更新数据库
        dataFunction dataFnction1=new dataFunction();
        dataFnction1.add(Date, Country, Diagnosis, Death, Cure);
        System.out.println("china数据已更新");
        System.out.println("====================");
        
        /******国外数据库更新*******/
        //curNum=group(2),deathNum=group(3)
        String regex2 = "\\\"conNum\\\":\\\"(.*?)\\\",\\\"susNum\\\":\\\".*?\\\",\\\"cureNum\\\":\\\"(.*?)\\\",\\\"deathNum\\\":\\\"(.*?)\\\",.*?citycode\\\":\\\"(.*?)\\\"";
        Pattern pattern2 = Pattern.compile(regex2);
        Matcher matcher2 = pattern2.matcher(result2);
       
        while (matcher2.find()) {
            Country=matcher2.group(4);
            if(Country.equals("SCIT0039")) {
            	Country="italy";
            	Diagnosis=matcher2.group(1);
            	Cure=matcher2.group(2);
            	Death=matcher2.group(3);
            	System.out.println(Diagnosis);
            	System.out.println(Death);
            	System.out.println(Cure);
            	dataFunction dataFunction2=new dataFunction();
                dataFunction2.add(Date, Country, Diagnosis, Death, Cure);
                System.out.println("italy数据已更新");
                System.out.println("====================");
            }
            if(Country.equals("SCES0034")) {
            	Country="spain";
            	Diagnosis=matcher2.group(1);
            	Cure=matcher2.group(2);
            	Death=matcher2.group(3);
            	System.out.println(Diagnosis);
            	System.out.println(Death);
            	System.out.println(Cure);
            	dataFunction dataFunction2=new dataFunction();
                dataFunction2.add(Date, Country, Diagnosis, Death, Cure);
                System.out.println("spain数据已更新");
                System.out.println("====================");
            }
            if(Country.equals("SCKR0082")) {
            	Country="korean";
            	Diagnosis=matcher2.group(1);
            	Cure=matcher2.group(2);
            	Death=matcher2.group(3);
            	System.out.println(Diagnosis);
            	System.out.println(Death);
            	System.out.println(Cure);
            	dataFunction dataFunction2=new dataFunction();
                dataFunction2.add(Date, Country, Diagnosis, Death, Cure);
                System.out.println("korean数据已更新");
                System.out.println("====================");
            }
            if(Country.equals("SCGB0044")) {
            	Country="uk";
            	Diagnosis=matcher2.group(1);
            	Cure=matcher2.group(2);
            	Death=matcher2.group(3);
            	System.out.println(Diagnosis);
            	System.out.println(Death);
            	System.out.println(Cure);
            	dataFunction dataFunction2=new dataFunction();
                dataFunction2.add(Date, Country, Diagnosis, Death, Cure);
                System.out.println("uk数据已更新");
                System.out.println("====================");
            }
            if(Country.equals("SCUS0001")) {
            	Country="us";
            	Diagnosis=matcher2.group(1);
            	Cure=matcher2.group(2);
            	Death=matcher2.group(3);
            	System.out.println(Diagnosis);
            	System.out.println(Death);
            	System.out.println(Cure);
            	dataFunction dataFunction2=new dataFunction();
                dataFunction2.add(Date, Country, Diagnosis, Death, Cure);
                System.out.println("us数据已更新");
                System.out.println("====================");
            }
        }
    
    }

}
