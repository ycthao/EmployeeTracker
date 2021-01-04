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
                //"Add employee",
                "Add department",
                "Add role",
                //"Delete employee",
                //"Delete department",
                //"Delete role",
                //"Update employee role",
                //"Update employee's manager",
                "View all employees",
                "View all departments",
                "View all roles",
                //"View employees by manager",
                //"View total utilized budget of a department",
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
    inquirer
        .prompt({
            name: "department",
            type: "input",
            message: "Name of department to add?"
        })
        .then(function (answer) {
            connection.query("INSERT INTO department_tbl SET ?",
                { department_name: answer.department }, function (err, res) {
                    console.log(answer.department + " had been added");
                    start();
                });
        });
};

// Add role function
function addRole() {

    console.log("Adding role");
    inquirer
        .prompt(
            {
                name: "title",
                type: "input",
                message: "Name of role title to add?"
            },
            {
                name: "salary",
                type: "input",
                message: "Salary of the role?"
            })
        .then(function (answer) {
            connection.query("INSERT INTO role_tbl SET ? WHERE ?",
                {
                    title: answer.title,
                    salary: answer.salary,
                    // department_id: answer.department
                },

                function (err, res) {
                    console.log(answer.title + " had been added");
                    start();
                });
        });
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

    let query = "SELECT employee_tbl.first_name, employee_tbl.last_name, role_tbl.title, role_tbl.salary, department_tbl.department_name, manager_id ";
    query += "FROM employee_tbl "
    query += "JOIN role_tbl ON employee_tbl.role_id=role_tbl.role_id ";
    query += "JOIN department_tbl ON role_tbl.department_id=department_tbl.department_id;";

    connection.query(query, function (err, res)
    //connection.query("SELECT * FROM employee_tbl", function(err, res) 
    {
        console.log("Viewing all employees");
        if (err) throw err;

        console.table(res);
        start();
    });
};

// View all departments
function viewAllDepartments() {
    connection.query("SELECT * FROM department_tbl", function (err, res) {
        console.log("Viewing all departments");
        if (err) throw err;
        console.table(res);
        start();
    });
};

// View all roles
function viewAllRole() {
    connection.query("SELECT * FROM role_tbl", function (err, res) {
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