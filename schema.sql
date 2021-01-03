-- Delete employee_tracker_db databse if any already exist
DROP DATABASE IF EXISTS employee_tracker_db;

-- Create the database employee_tracker_db.
CREATE DATABASE employee_tracker_db;


-- Call which database to use
USE employee_tracker_db;

-- Create the table employee.
CREATE TABLE employee_tbl (
  id int NOT NULL AUTO_INCREMENT,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  role_id INT,
  manager_id INT,
  PRIMARY KEY (id)
);

-- Create the table role_tbl.
CREATE TABLE role_tbl (
  role_id INT NOT NULL AUTO_INCREMENT,
  title VARCHAR(30) NOT NULL,
  salary DECIMAL(10, 2) NOT NULL,
  department_id INT,
  PRIMARY KEY (role_id)
);

-- Create the table department_tbl.
CREATE TABLE department_tbl (
  department_id INT NOT NULL AUTO_INCREMENT,
  department_name VARCHAR(30) NOT NULL,
  PRIMARY KEY (department_id)
);


-- Insert a set of records into employee_tbl
INSERT INTO employee_tbl (first_name, last_name) 
	VALUES ('Laurie', 'Wiston');
INSERT INTO employee_tbl (employee) 
	VALUES ('Austin', 'Freeman');
INSERT INTO employee_tbl (employee) 
	VALUES ('Evelynn', 'Jungle');
INSERT INTO employee_tbl (employee) 
	VALUES ('Tiffany', 'Atwater');

-- Insert a set of records into role_tbl
INSERT INTO role_tbl (title, salary) 
	VALUES ('Saleman', 50000);
INSERT INTO role_tbl (roles) 
	VALUES ('Financial Advisor', 80000);
   INSERT INTO role_tbl (roles) 
	VALUES ('IT Support', 65000); 
INSERT INTO role_tbl (roles) 
	VALUES ('Manager', 120000);
    
    -- Insert a set of records into department_tbl
INSERT INTO department_tbl (department_name) 
	VALUES ('Finance');
INSERT INTO role_tbl (roles) 
	VALUES ('Sale');
INSERT INTO role_tbl (roles) 
	VALUES ('IT');