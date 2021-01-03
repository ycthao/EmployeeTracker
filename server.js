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


    connection.end();
};

// Add department function
function addDepartment() {
    console.log("Adding department");
    connection.end();
};

// Add role function
function addRole() {
    console.log("Adding role");
    connection.end();
};

// Delete employee function
function deleteEmployee() {
    console.log("Deleting employee");
    connection.end();
};

// Delete department function
function deleteDepartment() {
    console.log("Deleting department");
    connection.end();
};

// Delete role
function deleteRole() {
    console.log("Deleting role");
    connection.end();
};

// Update employee role
function updateEmployee() {
    console.log("Updating employee");
    connection.end();
};

// Update employee's manager
function updateEmployeeManager() {
    console.log("Updating employee's manager");
    connection.end();
};

// View all employees
function viewAllEmployees() {
    console.log("View all employees");

    connection.query("SELECT * FROM employee_tbl", function(err, res) {
        if (err) throw err;
        console.table(res);
        // for (var i = 0; i < res.length; i++) {
        //     let values = [
        //         [res[i].first_name, res[i].last_name],                
        //         //['First name', res[i].first_name],
        //         //['Last name', res[i].last_name],
        //     ]
        //     //console.table(['First name', 'Last name'], values);
        //     //console.table(['First name', 'Last name'], [[res[i].first_name, res[i].last_name]]);

        // };
    });

    connection.end();
};

// View all departments
function viewAllDepartments() {
    console.log("Viewing all departments");
    connection.query("SELECT * FROM department_tbl", function(err, res) {
        if (err) throw err;
        console.table(res);
    });
    connection.end();
};

// View all roles
function viewAllRole() {
    console.log("View all role");
    connection.end();
};

// View employees by manager
function viewEmployeeByManager() {
    console.log("View Employee by manager");
    connection.end();
};

// View total utilized budget of a department
function viewTotalBudgetByDept() {
    console.log("View total utilized budget of a department");
    connection.end();
};