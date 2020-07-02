package com.credit.cpillar.spotlightdemo;

import java.io.File;
import java.util.ArrayList;
import java.util.List;
import org.springframework.stereotype.Service;


@Service
public class ItemsHardCodedService {
	
	public List<Items> findAll(){
		List<Items> items = new ArrayList<Items>();
		int idCount=0;
		
		String basePath = "C:\\Users\\IB078372\\Documents\\file-io\\UPLD";
		
        File directory = new File(basePath);
        File[] listOfFiles = directory.listFiles(); 
        
        for(File file : listOfFiles)
        {
            items.add(new Items(idCount,"Certification","http://localhost:9090/videos/"+idCount,"JohnS On Certification"));
            System.out.println("http://localhost:9090/videos/"+idCount);
            idCount++;
        }
        
       return items;
		
	}
}
