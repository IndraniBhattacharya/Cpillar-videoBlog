package com.credit.cpillar.spotlightdemo;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.FileSystemResource;
import org.springframework.core.io.Resource;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;


@RestController 
@CrossOrigin(origins="http://localhost:4200")
@RequestMapping("/videos")
public class SpotlightItems {
	
	@Autowired
	private ItemsHardCodedService itemService; 
	
	@GetMapping("/list")
	public List<Items> getAllItems(){
		return itemService.findAll(); 
	}

	@RequestMapping("/{id}")
	@ResponseBody public Resource getPreview(@PathVariable("id") int id) {
		
		FileUtilities obj = new FileUtilities();
		// Also works for Relative PATH
		String basePath = "C:\\Users\\IB078372\\Documents\\file-io\\UPLD";
		ArrayList<String> listOfFiles = null;
		try {
			listOfFiles = obj.getFileNames(basePath);
		}
		catch(Exception exception) {
			System.out.println(exception.getMessage());
		}
		
		System.out.println(listOfFiles.get(id));
		return new FileSystemResource(listOfFiles.get(id)); 
		
	}
		
}
