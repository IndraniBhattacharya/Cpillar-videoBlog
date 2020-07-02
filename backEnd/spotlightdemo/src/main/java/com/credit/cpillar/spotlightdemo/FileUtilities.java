package com.credit.cpillar.spotlightdemo;

import java.io.File;
import java.util.ArrayList;

public class FileUtilities {
	// Provide PATH of directory (works both for Absolute and Relative PATH)
		ArrayList<String> getFileNames(String directoryName) throws Exception{
			File directory = new File(directoryName);
			// Throws exception if the directoryName is not a directory
			// It covers all type of exceptions including empty or null directory name
			// no requirement of other File Handling exceptions
			if(!directory.isDirectory()) {
				throw new Exception("This is not a Directory");
			}
			ArrayList<String> listOfFiles = new ArrayList<String>();
			File[] files = directory.listFiles();
			for(File file: files) {
				listOfFiles.add(file.getAbsolutePath());
			}
			return listOfFiles;
}
}