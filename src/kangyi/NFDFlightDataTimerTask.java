package kangyi;

import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.TimerTask;

import kangyi.read_and_write;
import kangyi.yiqing_write;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.Scanner;

import com.mysql.jdbc.Connection;
 
/**
 * 在 TimerManager 这个类里面，一定要注意 时间点的问题。如果你设定在凌晨2点执行任务。但你是在2点以后
 *发布的程序或是重启过服务，那这样的情况下，任务会立即执行，而不是等到第二天的凌晨2点执行。为了，避免这种情况
 *发生，只能判断一下，如果发布或重启服务的时间晚于定时执行任务的时间，就在此基础上加一天。
 *
 */
public class NFDFlightDataTimerTask extends TimerTask {
    private static SimpleDateFormat formatter = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
    @Override
    public void run() {
        try {
        	//执行生成堆叠图的程序
        	yiqing_write.method_yiqing_write();
        	
        	//执行读写 infection_test2.jsp的程序
            read_and_write.method_readAndwrite();
            System.out.println("执行当前时间"+formatter.format(Calendar.getInstance().getTime()));
        } catch (Exception e) {
            System.out.println("-------------解析信息发生异常--------------");
        }
    }
     
}