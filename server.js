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
            choices: [
                "Add employee",
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
                "View total utilized budget of a department",
                "Exit"
            ]
        })
        .then(function (answer) {
            switch (answer.startUp) {
                case "Add employee":
                    addEmployee();
                    break;
                case "Add department":
                    addDepartment();
                    break;
                case "Add role":
                    addRole();
                    break;
                case "Delete employee":
                    deleteEmployee();
                    break;
                case "Delete department":
                    deleteDepartment();
                    break;
                case "Delete role":
                    deleteRole();
                    break;
                case "Update employee role":
                    updateEmployee();
                    break;
                case "Update employee's manager":
                    updateEmployeeManager();
                    break;
                case "View all employees":
                    viewAllEmployees();
                    break;
                case "View all departments":
                    viewAllDepartments();
                    break;
                case "View all roles":
                    viewAllRole();
                    break;
                case "View employees by manager":
                    viewEmployeeByManager();
                    break;
                case "View total utilized budget of a department":
                    viewTotalBudgetByDept();
                    break;
                case "Exit":
                    console.log("Exit program succesful");
                    connection.end();
            }



        });
};

// Add employee function
function addEmployee() {
    console.log("Adding Employee");


    start();
};

// Add department function
function addDepartment() {
    console.log("Adding department");
    start();
};

// Add role function
function addRole() {
    console.log("Adding role");
    start();
};

// Delete employee function
function deleteEmployee() {
    console.log("Deleting employee");
    start();
};

// Delete department function
function deleteDepartment() {
    console.log("Deleting department");
    start();
};

// Delete role
function deleteRole() {
    console.log("Deleting role");
    start();
};

// Update employee role
function updateEmployee() {
    console.log("Updating employee");
    start();
};

// Update employee's manager
function updateEmployeeManager() {
    console.log("Updating employee's manager");
    start();
};

// View all employees
function viewAllEmployees() {
    connection.query("SELECT * FROM employee_tbl", function(err, res) {
        console.log("Viewing all employees");
        if (err) throw err;
        console.table(res);
        start();
    });
};

// View all departments
function viewAllDepartments() {
    connection.query("SELECT * FROM department_tbl", function(err, res) {
        console.log("Viewing all departments");
        if (err) throw err;
        console.table(res);
        start();
    });
};

// View all roles
function viewAllRole() {
    connection.query("SELECT * FROM role_tbl", function(err, res) {
        if (err) throw err;
        console.log("Viewing all role");
        console.table(res);
        start();
    });
};

// View employees by manager
function viewEmployeeByManager() {
    console.log("View Employee by manager");
    start();
};

// View total utilized budget of a department
function viewTotalBudgetByDept() {
    console.log("View total utilized budget of a department");
    start();
};