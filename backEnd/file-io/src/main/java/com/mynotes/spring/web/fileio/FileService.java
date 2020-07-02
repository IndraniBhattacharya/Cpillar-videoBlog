package com.mynotes.spring.web.fileio;


import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import java.sql.*;

@Service
public class FileService {
	
	Logger logger = LoggerFactory.getLogger(FileService.class);
	
    @Value("${app.upload.dir:${user.home}}")
    public String uploadDir;

    public void uploadFile(MultipartFile file) {
    	String base="C:\\Users\\IB078372\\Documents\\file-io\\UPLD\\" + file.getOriginalFilename();
        
        try {
          Path copyLocation = Paths.get(base).toAbsolutePath();
          Files.copy(file.getInputStream(), copyLocation, StandardCopyOption.REPLACE_EXISTING);
        } catch (Exception e) {
            e.printStackTrace();
            throw new FileStorageException("Could not store file " + file.getOriginalFilename()
                + ". Please try again!");
        }
    }
    
    public String GetFileDetails(String category,String filePath,String title) throws ClassNotFoundException, SQLException {
    	FileDao daoObj = new FileDao();
    	PreparedStatement st=null;
    	Connection con=null;
    	
    	con= daoObj.getConnection();
    	if (con == null) {
			logger.error("Error found");
			return "Error 404";
		}
    	else {
    		String query = "insert into FileDetails (category,filePath,title) values(?,?,?)" ;
    		
			st=con.prepareStatement(query);   //prepared statement
			
			st.setString(1, category);
			st.setString(2, filePath);
			st.setString(3, title);
			
			int count = st.executeUpdate();
			
			System.out.println(count +" row/s affected");
			
			st.close();
			con.close();
			
    	}
    	return null;
    }

		
	}
    
    

