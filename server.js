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

// connect to the mysql server and sql database
connection.connect(function (err) {
    if (err) throw err;
    // run the start function after the connection is made to prompt the user
    start();
});

// function which prompts the user for what action they should take
function start() {
    inquirer
        .prompt({
            name: "startUp",
            type: "list",
            message: "What would you like to do?",
            choices: [  "Add employee",
                        "Add department",
                        "Add role",
                        "Delete employee",
                        "Delete department",
                        "Delete role",
                        "Update employee role",
                        "Update employee's manager",
                        "View all employees",
                        "View all departments", 
                        "View all roles",
                        "View employees by manager",
                        "View total utilized budget of a department"
                    ]
        })
        .then(function (answer) {
            console.log("this is working")
            connection.end();
        });
};