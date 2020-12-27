-- Delete employee_tracker_db databse if any already exist
DROP DATABASE IF EXISTS employee_tracker_db;

-- Create the database employee_tracker_db.
CREATE DATABASE employee_tracker_db;


-- Call which database to use
USE employee_tracker_db;

-- Create the table employee.
CREATE TABLE employee (
  id int NOT NULL AUTO_INCREMENT,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  role_id INT,
  manager_id INT,
  PRIMARY KEY (id)
);

-- Create the table role_tbl.
CREATE TABLE role_tbl (
  role_id int NOT NULL AUTO_INCREMENT,
  title VARCHAR(30) NOT NULL,
  salary DECIMAL(10, 2) NOT NULL,
  PRIMARY KEY (role_id)
);


