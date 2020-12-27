// DEPENDENCIES
const inquirer = require('inquirer');
const mysql = require("mysql");
const cTable = require("console.table");

// connection to mysql database
const connection = mysql.createConnection({
    host: "localhost",
  
    // Your port; if not 3306
    port: 3306,
  
    // Your username
    user: "root",
  
    // Your password
    password: "",
    database: "employee_tracker_db"
  });