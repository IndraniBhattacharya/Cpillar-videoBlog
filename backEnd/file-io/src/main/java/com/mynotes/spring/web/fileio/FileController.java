package com.mynotes.spring.web.fileio;

import java.nio.file.Path;
import java.nio.file.Paths;
import java.sql.SQLException;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

@RestController
@RequestMapping(path = "/files")
@CrossOrigin()
public class FileController {
	
	private static final Logger logger = LoggerFactory.getLogger(FileController.class);
	
    @Autowired
    FileService fileService;

    @GetMapping("/")
    public String index() {
        return "upload";
    }

   @PostMapping(value = "/uploadFile", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public String uploadFile(@RequestParam("category") String category,
    						 @RequestParam("file") MultipartFile file ,
    						 @RequestParam("title") String title, RedirectAttributes redirectAttributes
    						 ) throws ClassNotFoundException, SQLException {

        fileService.uploadFile(file);
        Path copyLocation = null;
        String filePath = null;
        
        String base="C:\\Users\\IB078372\\Documents\\file-io\\UPLD\\" + file.getOriginalFilename();
        copyLocation = Paths.get(base).toAbsolutePath();  
        filePath=copyLocation.toString();
		fileService.GetFileDetails(category,filePath,title);

		logger.info(String.format("File name '%s' uploaded successfully.",file.getOriginalFilename()));
		
        redirectAttributes.addFlashAttribute("message",
            "You successfully uploaded " + file.getOriginalFilename() + "!");
        	
        System.out.println("category : "+category);
        System.out.println("file path : " + filePath);
        System.out.println("title : "+title);

        return "redirect:/";
    }
}
