// DEPENDENCIES
const inquirer = require("inquirer");
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
    password: "chijthoj",
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
            choices: ["Add employee",
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
            // if (answer.startUp === "Add employee") {
            //     addEmployee();
            //     connection.end();
            // } else {
            //     console.log("not this one");
            //     connection.end();
            // }

            switch (answer.startUp) {
                case "Add employee":
                    addEmployee();
                    break;
                case "Add department":
                    addDepartment();
                    break;
                case "Add role":
                    addRole()
                    break;
                case "Delete employee":

                    break;
                case "Delete department":

                    break;
                case "Delete role":

                    break;
                case "Update employee role":

                    break;
                case "Update employee's manager":

                    break;
                case "View all employees":

                    break;
                case "View all departments":

                    break;
                case "View all roles":

                    break;
                case "Update employee's manager":

                    break;
                case "View employees by manager":

                    break;
                case "View total utilized budget of a department":

                    break;
            }



        });
};

// Add employee function
function addEmployee() {
    console.log("Adding Employee");
    connection.end();
}

// "Add department"
function addDepartment() {
    console.log("Adding department");
    connection.end();
}

// "Add role"
function addRole() {
    console.log("Adding role");
    connection.end();
}

// "Delete employee",
// "Delete department",
// "Delete role",
// "Update employee role",
// "Update employee's manager",
// "View all employees",
// "View all departments",
// "View all roles",
// "View employees by manager",
// "View total utilized budget of a department"