package com.mynotes.spring.web.fileio;
import java.sql.*;
import java.sql.Connection;
import java.sql.DriverManager;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
public class FileDao {
	Logger logger = LoggerFactory.getLogger(FileDao.class);
	public Connection getConnection() throws ClassNotFoundException,SQLException {
		
		
		String url = "jdbc:mysql://localhost:3306/fileIO"; // Establishing connection with the database fileIO
		String user = "root";
		String password = "root";
		Class.forName("com.mysql.cj.jdbc.Driver");
		Connection con = DriverManager.getConnection(url, user, password);
		logger.info("Connection status being sent");
		return con;
		
		
	}

}