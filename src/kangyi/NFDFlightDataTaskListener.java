package kangyi;

import javax.servlet.ServletContextEvent;
import javax.servlet.ServletContextListener;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.Scanner;

import com.mysql.jdbc.Connection;
 
public class NFDFlightDataTaskListener implements  ServletContextListener {
 
    public void contextInitialized(ServletContextEvent sce) {
         new TimerManager();
    }
 
    public void contextDestroyed(ServletContextEvent sce) {
        // TODO Auto-generated method stub
         
    }
 
}