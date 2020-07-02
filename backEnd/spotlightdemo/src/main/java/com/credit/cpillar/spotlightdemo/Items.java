package com.credit.cpillar.spotlightdemo;

public class Items {
	private long id;
	private String title ;
	private String url ;
	private String description ;
	
	//constructors
	public Items(long id, String title, String url, String description) {
		super();
		this.id = id;
		this.title = title;
		this.url= url;
		this.description = description;
	}
	
	//getters and setters
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	
	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getUrl() {
		return url;
	}

	public void setUrl(String url) {
		this.url = url;
	}
	
	public String getDescription() {
		return description;
	}
	
	public void setDescription(String description) {
		this.description = description;
	}

	
	
}
