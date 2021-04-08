CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE burgers
(
	id int(10) NOT NULL AUTO_INCREMENT,
	burger_name varchar(255) NOT NULL,
	devoured BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
);