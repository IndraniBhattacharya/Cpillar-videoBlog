package com.mynotes.spring.web.fileio;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class FileDetails {
	
	@Id
	private String category;
	private String title;
	private String Fpath;
	
	public FileDetails() { }
	
	public FileDetails(String category, String title,String Fpath) {
		super();
		this.category = category;
		this.title = title;
		this.Fpath=Fpath;
	}
	
	public String getCategory() {
		return category;
	}
	public void setCategory(String category) {
		this.category = category;
	}
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}

	public String getFpath() {
		return Fpath;
	}

	public void setFpath(String fpath) {
		Fpath = fpath;
	}
	
}
