DROP DATABASE checkout;

CREATE DATABASE IF NOT EXISTS checkout;

USE checkout;

CREATE TABLE IF NOT EXISTS user_login (
 id SMALLINT(4) AUTO_INCREMENT NOT NULL,
 name VARCHAR(30),
 email VARCHAR(30),
 password VARCHAR(30),
 PRIMARY KEY(id)
);

CREATE TABLE IF NOT EXISTS user_address (
 delivery_id SMALLINT(4) AUTO_INCREMENT NOT NULL,
 phone SMALLINT(10),
 address_line_one VARCHAR(30),
 address_line_two VARCHAR(30),
 city VARCHAR (20),
 state VARCHAR(20),
 zip smallint(10),
 is_shipping VARCHAR(5),
 is_delivery VARCHAR(5),
 owner SMALLINT(4),
 PRIMARY KEY(delivery_id),
 FOREIGN KEY(owner) REFERENCES user_login (id)
);

CREATE TABLE IF NOT EXISTS user_payment (
 payment_id SMALLINT(4) AUTO_INCREMENT PRIMARY KEY NOT NULL ,
 cc_number INT(20),
 cvv_code SMALLINT(5),
 owner SMALLINT(4),
 FOREIGN KEY(owner) REFERENCES user_login (id)
);
