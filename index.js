// REQUIRE INQUIRER AND FS
const inquirer = require("inquirer");
const fs = require("fs");

// EMPLOYEES
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

const employeeArray = [];

function addManager() {
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
    .then((managerAnswers) => {
      const newManager = new Manager(
        managerAnswers.managerName,
        managerAnswers.managerId,
        managerAnswers.managerEmail,
        managerAnswers.managerOffice
      );
      employees.push(newManager);
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
        when: (complete) => complete.addEmployee !== "No additional employees",
        type: "input",
        message: "Enter employee's name",
        name: "employeeName",
      },
      {
        when: (complete) => complete.addEmployee !== "No additional employees",
        type: "input",
        message: "Enter employee's ID",
        name: "employeeId",
      },
      {
        when: (complete) => complete.addEmployee !== "No additional employees",
        type: "input",
        message: "Enter employee's email",
        name: "employeeEmail",
      },
      {
        when: (complete) => complete.addEmployee === "Add an Engineer",
        type: "input",
        message: "Enter Engineer's GitHub username",
        name: "engineerGitHub",
      },
      {
        when: (complete) => complete.addEmployee === "Add an Intern",
        type: "input",
        message: "Enter name of Intern's school",
        name: "internSchool",
      },
    ])
    .then((employeeProfile) => {
      if (employeeProfile.addEmployee === "Add an Engineer") {
        const engineer = new Engineer(
          employeeProfile.employeeName,
          employeeProfile.employeId,
          employeeProfile.employeeEmail,
          employeeProfile.engineerGitHub
        );
        employeeArray.push(engineer);
        createTeam();
      } else if (employeeProfile.addEmployee === "Add an Intern") {
        const intern = new Intern(
          employeeProfile.employeeName,
          employeeProfile.employeId,
          employeeProfile.employeeEmail,
          employeeProfile.internSchool
        );
        employeeArray.push(intern);
        createTeam();
      } else if (employeeProfile.addEmployee === "No additional employees") {
        createHTML();
      }
    });
}

function writeFile(fileName, data) {
  return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

function begin() {
  createTeam();
}

begin();
