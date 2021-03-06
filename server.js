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
                //"Delete employee",
                //"Delete department",
                //"Delete role",
                "Update employee role",
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
    let roleArray = [];

    // ask for first, last, role and manager

    connection.query("SELECT * FROM role_tbl", function (err, answer) {
        if (err) throw err;
        inquirer
            .prompt([
                {
                    name: "first",
                    type: "input",
                    message: "What is employee's first name?"
                },
                {
                    name: "last",
                    type: "input",
                    message: "What is employee's last name?"
                },
                {
                    name: "role",
                    type: "list",
                    choices: function () {
                        for (let i = 0; i < answer.length; i++) {
                            roleArray.push(answer[i].title);
                        }
                        return roleArray;
                    },
                    message: "What is employee's role?"
                }
            ])
            .then(function (answer) {
                let roleIndex;

                for (let i = 0; i < roleArray.length; i++) {
                    if (answer.role === roleArray[i]) {
                        roleIndex = i;
                    }
                }

                connection.query("INSERT INTO employee_tbl SET ?",
                    {
                        first_name: answer.first,
                        last_name: answer.last,
                        role_id: roleIndex
                    },

                    function (err, res) {
                        console.log(answer.first + " " + answer.last + " had been added");
                        start();
                    });
            });
    });


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

    let choiceArray = [];

    connection.query("SELECT * FROM department_tbl", function (err, answer) {
        if (err) throw err;
        inquirer
            .prompt([
                {
                    name: "title",
                    type: "input",
                    message: "Name of role title to add?"
                },
                {
                    name: "salary",
                    type: "input",
                    message: "Salary of the role?"
                },
                {
                    name: "department",
                    type: "list",
                    choices: function () {
                        for (let i = 0; i < answer.length; i++) {
                            choiceArray.push(answer[i].department_name);
                        }
                        return choiceArray;
                    },
                    message: "What department will the role be in?"
                }
            ])
            .then(function (answer) {
                let arrIndex;

                for (let i = 0; i < choiceArray.length; i++) {
                    if (answer.department === choiceArray[i]) {
                        arrIndex = i;
                    }
                }

                connection.query("INSERT INTO role_tbl SET ?",
                    {
                        title: answer.title,
                        salary: answer.salary,
                        department_id: arrIndex
                    },

                    function (err, res) {
                        console.log(answer.title + " had been added");
                        start();
                    });
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
    let employeeArray = [];
    let roleArray = [];
    let employeeIndex;
    let roleIndex;
    let roleName;
    let employeeName;

    connection.query("SELECT * FROM employee_tbl", function (err, answer) {
        if (err) throw err;

        inquirer
            .prompt([
                {
                    name: "name",
                    type: "list",
                    choices: function () {
                        for (let i = 0; i < answer.length; i++) {
                            employeeArray.push(answer[i].first_name + " " + answer[i].last_name);
                        }
                        return employeeArray;
                    },
                    message: "Which employee's role would you like to change?"
                }
            ])
            .then(function (answer) {

                for (let i = 0; i < employeeArray.length; i++) {
                    if (answer.name === employeeArray[i]) {
                        employeeIndex = i;
                        employeeName = answer.name;
                    }
                }

                console.log(employeeIndex)

                connection.query("SELECT * FROM role_tbl", function (err, answer) {
                    if (err) throw err;
                    inquirer
                        .prompt([
                            {
                                name: "role",
                                type: "list",
                                choices: function () {
                                    for (let i = 0; i < answer.length; i++) {
                                        roleArray.push(answer[i].title);
                                    }
                                    return roleArray;
                                },
                                message: "What is employee's role?"
                            }
                        ])
                        .then(function (answer) {

                            for (let i = 0; i < roleArray.length; i++) {
                                if (answer.role === roleArray[i]) {
                                    roleIndex = i;
                                    roleName = answer.role;
                                }
                            }
                            
                            connection.query("UPDATE employee_tbl SET role_id = ? WHERE id = ?",
                            [
                                roleIndex, employeeIndex
                            ],
        
                            function (err, res) {
                                //console.log(answer.first + " " + answer.last + " had been added");
                                console.log(employeeName + "'s role had been updated to " + roleName);
                                start();
                            });



                        });

                });




                //console.log('\n');

                //start();

            });

    });


};

// Update employee's manager
function updateEmployeeManager() {
    console.log("Updating employee's manager");
    start();
};

// View all employees
function viewAllEmployees() {

    let query = "SELECT employee_tbl.first_name, employee_tbl.last_name, role_tbl.title, role_tbl.salary, department_tbl.department_name, CONCAT(manager.first_name, ' ', manager.last_name) AS manager ";
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


function roleChange() {
    console.log("this works!")

}