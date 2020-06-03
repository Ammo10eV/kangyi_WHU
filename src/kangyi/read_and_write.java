package kangyi;
import java.io.BufferedReader;
import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

import spider.SpiderService;
 
public class read_and_write {
	public static void main(String[] args) throws IOException {
		method_readAndwrite();
	}
    public static void method_readAndwrite() throws IOException {
    	
        FileReader fr = new FileReader(new File("C:\\Users\\10128\\Desktop\\DC\\WS\\kangyi_1.0\\stacked_area_chart4.html"));//原始文件
        BufferedReader br = new BufferedReader(fr);
        FileWriter fw = new FileWriter(new File("C:\\Users\\10128\\Desktop\\DC\\WS\\kangyi_1.0\\WebContent\\infection_test2.jsp"));//新的文件
        String str = null;
        
        
        SpiderService spider1=new SpiderService();
        String data_inland=spider1.getStatisticsService();
        String data_abroad=spider1.getDataWorldwide();
        /*利用正则抽取国内疫情数据，并存储到数组inland中*/
        String regex1 = "gntotal\":\"(.*?)\",\"deathtotal\":\"(.*?)\",.*curetotal\":\"(.*?)\",\"econNum\":\"(.*?)\",\".*asymptomNum\":\"(.*?)\",\"jwsrNum\":\"(.*?)\".*addcon_new\":\"(.*?)\",\"adddeath_new\":\"(.*?)\",\"addcure_new\":\"(.*?)\",.*addecon_new\":\"(.*?)\",.*addjwsr\":\"(.*?)\",\"addasymptom\":\"(.*?)\"";
        Pattern pattern1 = Pattern.compile(regex1, Pattern.MULTILINE);
        final Matcher matcher1 = pattern1.matcher(data_inland);
        String[] inland= {"","","","","","","","","","","",""};
        while (matcher1.find()) {
            System.out.println("Full match: " + matcher1.group(0));
            for (int i = 1; i <= matcher1.groupCount(); i++) {
                System.out.println("Group " + i + ": " + matcher1.group(i));
                inland[i-1]=matcher1.group(i);
            }
            
        }
        /*累计确证group(1);累计死亡group(2);累计治愈group(3);现存确诊group(4);现存无症状group(5);累计境外输入group(6)*/
        
        /*利用正则抽取国内疫情数据，并存储到数组inland中*/
        String regex2 = "certain\":\"(.*?)\",.*?die\":\"(.*?)\",.*?certain_inc\":\"(.*?)\",.*?die_inc\":\"(.*?)\"";
        Pattern pattern2 = Pattern.compile(regex2, Pattern.MULTILINE);
        final Matcher matcher2 = pattern2.matcher(data_abroad);
        String[] abroad= {"","","",""};
        while (matcher2.find()) {
            System.out.println("Full match: " + matcher2.group(0));
            for (int i = 1; i <= matcher2.groupCount(); i++) {
                System.out.println("Group " + i + ": " + matcher2.group(i));
                abroad[i-1]=matcher2.group(i);
            }
            
        }
       
        fw.write("<%@page language=\"java\" contentType=\"text/html; charset=UTF-8\" pageEncoding=\"UTF-8\"%>\n");
        
        fw.write("<!DOCTYPE html>\n");
        fw.write("<html lang=\"zh-CN\">\n");
        fw.write("<head>\n");
        fw.write("    <meta charset=\"UTF-8\">\n");
        fw.write("    <!--IE8开启标准渲染模式-->\n");
        fw.write("    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\n");
        fw.write("    <!--定义视窗，页面缩放比1：1，禁止用户缩放-->\n");
        fw.write("    <meta name=\"viewport\" content=\"width=device-width,initial-scale=1,user-scalable=no\">\n");
        fw.write("    <title>战疫助手-疫情数据</title>\n");
        fw.write("    <link rel=\"stylesheet\" href=\"css/bootstrap.min.css\"/>\n");
        fw.write("    <link rel=\"stylesheet\" href=\"css/adjust.css\">\n");
        fw.write("</head>\n");
        fw.write("<body onload=\"startTime()\">\n");
        fw.write("<!--导航栏-->\n");
        fw.write("<nav class=\"navbar navbar-default navbar-fixed-top\">\n");
        fw.write("    <div class=\"container\">\n");
        fw.write("        <!--小屏幕导航按钮和logo-->\n");
        fw.write("        <!--可以适应设备-->\n");
        fw.write("        <div class=\"navbar-header\">\n");
        fw.write("            <!--给这个button绑定到navbar-collapse类-->\n");
        fw.write("            <button class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\".navbar-collapse\">\n");
        fw.write("                <span class=\"icon-bar\"></span>\n");
        fw.write("                <span class=\"icon-bar\"></span>\n");
        fw.write("                <span class=\"icon-bar\"></span>\n");
        fw.write("            </button>\n");
        fw.write("            <a href=\"infection.html\" class=\"navbar-brand\">战疫助手 >疫情数据</a>\n");
        fw.write("        </div>\n");
        fw.write("        <!--小屏幕导航按钮和logo-->\n");
        fw.write("\n");
        fw.write("        <!--右上角导航-->\n");
        fw.write("        <div class=\"navbar-collapse collapse\">\n");
        fw.write("            <ul class=\"nav navbar-nav navbar-right\">\n");
        fw.write("                <li><a href=\"index.html\">首页</a></li>\n");
        fw.write("                <li><a href=\"infection.html\" target=\"_blank\">疫情数据</a></li>\n");
        fw.write("                <li><a href=\"news.html\" target=\"_blank\">舆情数据</a></li>\n");
        fw.write("                <li><a href=\"predict-easy.html\" target=\"_blank\">实用版预测</a></li>\n");
        fw.write("                <li><a href=\"predict-pro.html\" target=\"_blank\">专业版预测</a></li>\n");
        fw.write("            </ul>\n");
        fw.write("        </div>\n");
        fw.write("        <!--右上角导航-->\n");
        fw.write("\n");
        fw.write("    </div>\n");
        fw.write("</nav>\n");
        fw.write("<!--导航栏-->\n");
        fw.write("\n");
        fw.write("<!--疫情数据模块-->\n");
        fw.write("<div class=\"bg\">\n");
        fw.write("    <div class=\"filter\">\n");
        fw.write("        <!--疫情数据模块1-->\n");
        fw.write("        <!--注：所有需要替换的数在<h4>和它下面的<p>里的<span>里面-->\n");
        fw.write("        <section id=\"daily-infection\">\n");
        fw.write("            <div class=\"container\">\n");
        fw.write("                <div class=\"title\">\n");
        fw.write("                    实时疫情<span id=\"nowDateTimeSpan\"></span>\n");
        fw.write("                </div>\n");
        fw.write("            </div>\n");
        fw.write("            <div class=\"container\">\n");
        fw.write("                <div class=\"row\">\n");
        fw.write("                    <div class=\"col-md-2\"></div>\n");
        fw.write("                    <div class=\"col-md-2\">\n");
        fw.write("                        <p style=\"font-size: large\">\n");
        fw.write("                            国内数据\n");
        fw.write("                        </p>\n");
        fw.write("                    </div>\n");
        fw.write("                    <div class=\"col-md-4\"></div>\n");
        fw.write("                    <div class=\"col-md-2\" style=\"margin-left: 15px\">\n");
        fw.write("                        <p style=\"font-size: large\">\n");
        fw.write("                            国外数据\n");
        fw.write("                        </p>\n");
        fw.write("                    </div>\n");
        fw.write("                    <div class=\"col-md-2\"></div>\n");
        fw.write("                </div>\n");
        fw.write("                <div class=\"row\">\n");
        fw.write("                    <div class=\"col-md-2\"></div>\n");
        fw.write("                    <div class=\"col-md-2 fill\">\n");
        fw.write("                        <h4  style=\"color: red\">"+inland[3]+"</h4>\n");
        fw.write("                        <h3>现存确诊</h3>\n");
        fw.write("                        <p>较昨日：<span style=\"color: red\">"+inland[9]+"</span></p>\n");
        fw.write("                    </div>\n");
        fw.write("                    <div class=\"col-md-2 fill\">\n");
        fw.write("                        <h4  style=\"color: orange\">"+inland[5]+"</h4>\n");
        fw.write("                        <h3>累计境外输入</h3>\n");
        fw.write("                        <p>较昨日：<span style=\"color: orange\">"+inland[10]+"</span></p>\n");
        fw.write("                    </div>\n");
        fw.write("                    <div class=\"col-md-2 fill\">\n");
        fw.write("                        <h4  style=\"color: darkblue\">"+inland[4]+"</h4>\n");
        fw.write("                        <h3>现存无症状</h3>\n");
        fw.write("                        <p>较昨日：<span style=\"color: darkblue\">"+inland[11]+"</span></p>\n");
        fw.write("                    </div>\n");
        fw.write("                    <div class=\"col-md-2 fill\" style=\"margin-left: 15px\">\n");
        fw.write("                        <h4 style=\"color: darkred\">"+abroad[0]+"</h4>\n");
        fw.write("                        <h3>全球累计确诊</h3>\n");
        fw.write("                        <p>较昨日：<span style=\"color: darkred\">"+abroad[2]+"</span></p>\n");
        fw.write("                    </div>\n");
        fw.write("                    <div class=\"col-md-2\"></div>\n");
        fw.write("                </div>\n");
        fw.write("\n");
        fw.write("                <div class=\"row\">\n");
        fw.write("                    <div class=\"col-md-2\"></div>\n");
        fw.write("                    <div class=\"col-md-2 fill\">\n");
        fw.write("                        <h4 style=\"color: darkred\">"+inland[0]+"</h4>\n");
        fw.write("                        <h3>累计确诊</h3>\n");
        fw.write("                        <p>较昨日：<span style=\"color: darkred\">"+inland[6]+"</span></p>\n");
        fw.write("                    </div>\n");
        fw.write("                    <div class=\"col-md-2 fill\">\n");
        fw.write("                        <h4 style=\"color: gray\">"+inland[1]+"</h4>\n");
        fw.write("                        <h3>累计死亡</h3>\n");
        fw.write("                        <p>较昨日：<span style=\"color: gray\">"+inland[7]+"</span></p>\n");
        fw.write("                    </div>\n");
        fw.write("                    <div class=\"col-md-2 fill\">\n");
        fw.write("                        <h4 style=\"color: green\">"+inland[2]+"</h4>\n");
        fw.write("                        <h3>累计治愈</h3>\n");
        fw.write("                        <p>较昨日：<span style=\"color: green\">"+inland[8]+"</span></p>\n");
        fw.write("                    </div>\n");
        fw.write("                    <div class=\"col-md-2 fill\" style=\"margin-left: 15px\">\n");
        fw.write("                        <h4 style=\"color: gray\">"+abroad[1]+"</h4>\n");
        fw.write("                        <h3>全球累计死亡</h3>\n");
        fw.write("                        <p>较昨日：<span style=\"color: gray\">"+abroad[3]+"</span></p>\n");
        fw.write("                    </div>\n");
        fw.write("                    <div class=\"col-md-2\"></div>\n");
        fw.write("                </div>\n");
        fw.write("            </div>\n");
        fw.write("        </section>\n");
        fw.write("\n");
        fw.write("        <!--全球确诊数据（图）-->\n");
        fw.write("        <section id=\"global-graphic\">\n");
        fw.write("            <div class=\"container\">\n");
        fw.write("                <div class=\"title\">\n");
        fw.write("                    全球确诊数据\n");
        fw.write("                </div>\n");
        fw.write("            </div>\n");
        fw.write("            <div class=\"container\">\n");
        fw.write("                <div class=\"col-md-1\"></div>\n");
        fw.write("                <div class=\"col-md-10\">\n");
        fw.write("                    <!--注：这里放图！-->\n");
       
        
        
        
        
        
        while ((str = br.readLine()) != null) {//读取一行
        	str = str.replaceAll("<!DOCTYPE html>", "");//这里写转换的算法
        	str = str.replaceAll("<html>", "");//这里写转换的算法
        	str = str.replaceAll("<head>", "");//这里写转换的算法
        	str = str.replaceAll("<meta charset=\"UTF-8\">", "");//这里写转换的算法
        	str = str.replaceAll("<title>Awesome-pyecharts</title>", "");//这里写转换的算法
        	str = str.replaceAll("</head>", "");//这里写转换的算法
        	str = str.replaceAll("<body>", "");//这里写转换的算法
        	str = str.replaceAll("</body>", "");//这里写转换的算法
        	str = str.replaceAll("</html>", "");//这里写转换的算法
        	
        	fw.write(str + "\n");//把转换后的字符串输出到新的文件
        }
        
        
        

        
        
        
        
        fw.write("                </div>\n");
        fw.write("                <div class=\"col-md-1\"></div>\n");
        fw.write("            </div>\n");
        fw.write("        </section>\n");
        fw.write("\n");
        fw.write("        <section id=\"global-table\">\n");
        fw.write("            <div class=\"container\">\n");
        fw.write("                <div class=\"title\">\n");
        fw.write("                    全球各地区实时数据\n");
        fw.write("                </div>\n");
        fw.write("            </div>\n");
        fw.write("            <div class=\"container\">\n");
        fw.write("                <div class=\"col-md-1\"></div>\n");
        fw.write("                <div class=\"col-md-10\">\n");
        fw.write("                    <table class=\"table table-striped table-hover\">\n");
        fw.write("                        <thead>\n");
        fw.write("                        <tr>\n");
        fw.write("                            <!--th加粗显示-->\n");
        fw.write("                            <th>地区</th>\n");
        fw.write("                            <th>新增确诊</th>\n");
        fw.write("                            <th>累计确诊</th>\n");
        fw.write("                            <th>死亡率</th>\n");
        fw.write("                            <th>累计死亡</th>\n");
        fw.write("                        </tr>\n");
        fw.write("                        </thead>\n");
        fw.write("                        <tbody>\n");
        
        
        String worldlist=spider1.getListByCountryTypeService2();
        String regex3 ="\"conNum\":\"(.*?)\",.*?deathNum\":\"(.*?)\",\"conadd\":\"(.*?)\",.*?name\":\"(.*?)\"";
        Pattern pattern3 = Pattern.compile(regex3, Pattern.MULTILINE);
        final Matcher matcher3 = pattern3.matcher(worldlist);
        String Worldname_c="";
        int addcon=0; //新增确诊
        int conNum=0;//累计确诊
        int deathNum=0;//累计死亡
        float deathrate=0;
        while (matcher3.find()) {
            System.out.println("Full match: " + matcher3.group(0));
            for (int i = 1; i <= matcher3.groupCount(); i++) {
                System.out.println("Group " + i + ": " + matcher3.group(i));     
            }   
            addcon=Integer.parseInt(matcher3.group(3));
            conNum=Integer.parseInt(matcher3.group(1));
            deathNum=Integer.parseInt(matcher3.group(2));     
            deathrate=((float)deathNum/(float)conNum);
            System.out.println(deathrate);
          //得到的国家名是Unicode,需要转成中文，存储在Worldname_c中
            String[] Worldname_u=(matcher3.group(4)).split("\\\\u");
            for (int n = 1; n < Worldname_u.length; n++) {
            	Worldname_c += (char) Integer.valueOf(Worldname_u[n], 16).intValue();
            }
        fw.write("                        <tr>\n");
        fw.write("                            <td>"+Worldname_c+"</td>\n");
        fw.write("                            <td>"+addcon+"</td>\n");
        fw.write("                            <td>"+conNum+"</td>\n");
        fw.write("                            <td>"+deathrate*100+"%</td>\n");
        fw.write("                            <td>"+deathNum+"</td>\n");
        fw.write("                        </tr>\n");
        Worldname_c="";
        }
        
        
        fw.write("\n");
        fw.write("                        </tbody>\n");
        fw.write("\n");
        fw.write("                    </table>\n");
        fw.write("                </div>\n");
        fw.write("                <div class=\"col-md-1\"></div>\n");
        fw.write("            </div>\n");
        fw.write("        </section>\n");
        fw.write("    </div>\n");
        fw.write("\n");
        fw.write("\n");
        fw.write("</div>\n");
        fw.write("<!--footer底部区域-->\n");
        fw.write("<footer>\n");
        fw.write("    <div class=\"container\">\n");
        fw.write("        <div class=\"row\">\n");
        fw.write("            <div class=\"col-md-12\">\n");
        fw.write("                <p>©copyright&nbsp;2020&nbsp;武汉大学信息管理学院</p>\n");
        fw.write("            </div>\n");
        fw.write("        </div>\n");
        fw.write("    </div>\n");
        fw.write("</footer>\n");
        fw.write("\n");
        fw.write("<!--时间函数-->\n");
        fw.write("<script language=\"JavaScript\">\n");
        fw.write("    function startTime(){\n");
        fw.write("        var today=new Date();//定义日期对象\n");
        fw.write("        var yyyy = today.getFullYear();//通过日期对象的getFullYear()方法返回年\n");
        fw.write("        var MM = today.getMonth()+1;//通过日期对象的getMonth()方法返回年\n");
        fw.write("        var dd = today.getDate();//通过日期对象的getDate()方法返回年\n");
        fw.write("        var hh=today.getHours();//通过日期对象的getHours方法返回小时\n");
        fw.write("        var mm=today.getMinutes();//通过日期对象的getMinutes方法返回分钟\n");
        fw.write("        var ss=today.getSeconds();//通过日期对象的getSeconds方法返回秒\n");
        fw.write("        // 如果分钟或小时的值小于10，则在其值前加0，比如如果时间是下午3点20分9秒的话，则显示15：20：09\n");
        fw.write("        MM=checkTime(MM);\n");
        fw.write("        dd=checkTime(dd);\n");
        fw.write("        mm=checkTime(mm);\n");
        fw.write("        ss=checkTime(ss);\n");
        fw.write("        var day; //用于保存星期（getDay()方法得到星期编号）\n");
        fw.write("        if(today.getDay()==0)   day   =   \"星期日 \"\n");
        fw.write("        if(today.getDay()==1)   day   =   \"星期一 \"\n");
        fw.write("        if(today.getDay()==2)   day   =   \"星期二 \"\n");
        fw.write("        if(today.getDay()==3)   day   =   \"星期三 \"\n");
        fw.write("        if(today.getDay()==4)   day   =   \"星期四 \"\n");
        fw.write("        if(today.getDay()==5)   day   =   \"星期五 \"\n");
        fw.write("        if(today.getDay()==6)   day   =   \"星期六 \"\n");
        fw.write("        document.getElementById('nowDateTimeSpan').innerHTML=yyyy+\"-\"+MM +\"-\"+ dd +\" \" + day;\n");
        fw.write("        setTimeout('startTime()',1000);//每一秒中重新加载startTime()方法\n");
        fw.write("    }\n");
        fw.write("\n");
        fw.write("    function checkTime(i){\n");
        fw.write("        if (i<10){\n");
        fw.write("            i=\"0\" + i;\n");
        fw.write("        }\n");
        fw.write("        return i;\n");
        fw.write("    }\n");
        fw.write("</script>\n");
        fw.write("<script src=\"http://apps.bdimg.com/libs/jquery/2.1.4/jquery.min.js\"></script>\n");
        fw.write("<script src=\"js/bootstrap.min.js/\"></script>\n");
        fw.write("</body>\n");
        fw.write("</html>\n");
        
        
        
        
        
        
        
        
    
        br.close();
        fr.close();
        fw.flush();
        fw.close();
        
        System.out.println("create the infection page");
    }

}