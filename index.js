// REQUIRE INQUIRER AND FS
const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
// EMPLOYEES
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

// CREATE EMPTY EMPLOYEE ARRAY
const employeeArray = [];

// INQUIRER PROMPTS
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
      employeeArray.unshift(newManager);
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
          employeeProfile.employeeId,
          employeeProfile.employeeEmail,
          employeeProfile.engineerGitHub
        );
        employeeArray.push(engineer);
        createTeam();
      } else if (employeeProfile.addEmployee === "Add an Intern") {
        const intern = new Intern(
          employeeProfile.employeeName,
          employeeProfile.employeeId,
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

function begin() {
  addManager();
}

function generateEmployeeCard(employee) {
  switch (employee.getTitle()) {
    case "Engineer":
      return `
      <div class="card">
        <div class="text-white" style="background-color: #0000ff">
          <h4 class="card-title">${employee.name}</h4>
          <h4 class="card-text">Engineer</h4>
        </div>
        <ul class="list-group">
          <li class="list-group-item">ID: ${employee.id}</li>
          <li class="list-group-item"><a href="mailto: ${employee.email}" target="_blank">Email: ${employee.email}</a></li>
          <li class="list-group-item">Github: ${employee.github}</li>
        </ul>
      </div>`;

    case "Intern":
      return `
      <div class="card">
        <div class="text-white" style="background-color: #0000ff">
          <h4 class="card-title">${employee.name}</h4>
          <h4 class="card-text">Intern</h4>
        </div>
        <ul class="list-group">
          <li class="list-group-item">ID: ${employee.id}</li>
          <li class="list-group-item"><a href="mailto: ${employee.email}" target="_blank">Email: ${employee.email}</a></li>
          <li class="list-group-item">School: ${employee.school}</li>
        </ul>
      </div>`;
  }
}

function generateEmployees() {
  if (employeeArray.length > 1) {
    let employeeCards = generateEmployeeCard(employeeArray[1]);
    for (let i = 2; i < employeeArray; i++) {
      employeeCards += generateEmployeeCard(employeeArray[1]);
    }
    return employeeCards;
  } else {
    return "";
  }
}

function generateCards() {
  return `
  <div class="card">
    <div class="text-white" style="background-color: #0000ff">
      <h4 class="card-title">${employeeArray[0].name}</h4>
      <h4 class="card-text">Manager</h4>  
    </div>  
    <ul class="list-group">
      <li class="list-group-item">ID: ${employeeArray[0].id}</li>
      <li class="list-group-item"><a href="mailto: ${
        employeeArray[0].email
      }" target="_blank">Email: ${employeeArray[0].email}</a></li>
      <li class="list-group-item">Office number: ${employeeArray[0].office}</li>
    </ul>
  </div>

  ${generateEmployees()}
  `;
}

function generateHTML() {
  return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href = 'https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css' rel='stylesheet'>
    <title>Team Profile</title>
  </head>
  <body>
    <div class="jumbotron-fluid text=white" style="background-color: #ff0000">
      <div class="container">
        <h2 class="text-center">My Team</h2>
      </div>
    </div>
    <div class="d-flex flex-wrap justify-content-around">
      ${generateCards()}
    </div>

  </body>
  </html>
  `;
}

function createHTML() {
  return fs.writeFile("./output/index.html", generateHTML(), (error) => {
    if (error) {
      console.log(error);
    } else {
      console.log("Team profile created.");
    }
  });
}
begin();
