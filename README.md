# Cpillar-videoBlog

Frontend folder has the react code 
[ src -> views -> CollabComunicate -> VideoBlog ]




Backend folder has springboot backend code . 
It has two different springboot apps running on different ports (springbootDemo => port : 9090 ; file-io => port : 8087)




videos are stored inside the folder UPLD 
[ backend -> fileIO -> UPLD ]



For database connectivity -> 
database name : fileIO . 
table name : FileDetails . 
table creation : create table FileDetails (ID int NOT NULL AUTO_INCREMENT ,category varchar(255),filePath varchar(255),title varchar(255),primary key (ID));
