// REQUIRE INQUIRER AND FS
const inquirer = require("inquirer");
const fs = require("fs");

// EMPLOYEES
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

const Employees = [];

function begin() {
  function addEmployee() {
    inquirer
      .prompt([
        {
          type: "input",
          message: "Enter team manager's name",
          name: "managerName",
        },
        {
          type: "input",
          message: "Enter manager's ID",
          name: "managerId",
        },
        {
          type: "input",
          message: "Enter manager's email address",
          name: "managerEmail",
        },
        {
          type: "input",
          message: "Enter employee's office number",
          name: "managerOffice",
        },
      ])
      .then((answers) => {
        const newManager = new Manager(
          answers.managerName,
          answers.managerId,
          answers.managerEmail,
          managerOffice
        );
        Employees.push(newManager);
        createTeam();
      });
  }

  function createTeam() {
    inquirer
      .prompt([
        {
          type: "list",
          message: "Would you like to add any additional members to the team?",
          name: "addEmployee",
          choices: [
            "Add an Engineer",
            "Add an Intern",
            "No additional employees",
          ],
        },
        {
          type: "input",
          message: "Enter employee's name",
          name: "employeeName",
        },
        {
          type: "input",
          message: "Enter employee's ID",
          name: "employeeId",
        },
        {
          type: "input",
          message: "Enter employee's email",
          name: "employeeEmail",
        },
      ])
      .then(function ({
        addEmployee,
        employeeName,
        employeeId,
        employeeEmail,
      }) {
        let employeeInfo = "";
        if (addEmployee === "Engineer") {
          employeeInfo = "GitHub username";
        } else if (addEmployee === "Intern") {
          employeeInfo = "school name";
        }
        inquirer.prompt([
          {
            type: "input",
            message: `Enter ${employeeInfo} for employee`,
          },
        ]);
      });
  }
}

begin();
