const fs = require("fs");
const inquirer = require("inquirer");

const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Employee = require("./lib/Employee");
const { create } = require("domain");

const employeeContainer = [];
const generatedHtml = [];

let roleOptions = ["Engineer", "Intern", "Team is Built!"];

function managerQuestions() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "What is the name of the Manager?",
        name: "managerName",
      },
      {
        type: "input",
        message: "What is the managers ID",
        name: "managerID",
      },
      {
        type: "input",
        message: "What is the managers email address?",
        name: "managerEmail",
      },
      {
        type: "input",
        message: "What is the Managers office number?",
        name: "managerNumber",
      },
    ])
    .then(function (response) {
      const manager = new Manager(
        response.managerName,
        response.managerID,
        response.managerEmail,
        response.managerNumber
      );
      employeeContainer.push(manager);

      if (response.ManagerNumber !== "") {
        newEmployee();
      }
    });
}

managerQuestions();

function newEmployee() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "employee",
        message: "Are you adding an engineer or an intern?",
        choices: roleOptions,
      },
    ])
    .then(function (response) {
      if (response.employee === "Engineer") {
        engineerQuestions();
      } else if (response.employee === "Intern") {
        internQuestions();
      } else {
        create();
      }
    });
}

function engineerQuestions() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "What is the name of the engineer?",
        name: "engineerName",
      },
      {
        type: "input",
        message: "What is their ID?",
        name: "engineerID",
      },
      {
        type: "input",
        message: "What is thier email address?",
        name: "engineerEmail",
      },
      {
        type: "input",
        message: "What is their Github account username?",
        name: "engineerGithub",
      },
    ])

    .then(function (response) {
      const engineer = new Engineer(
        response.engineerName,
        response.engineerID,
        response.engineerEmail,
        response.engineerGithub
      );
      employeeContainer.push(engineer);

      if (response.engineerGithub !== "") {
        newEmployee();
      }
    });
}

function internQuestions() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "What is the name of your intern?",
        name: "internName",
      },
      {
        type: "input",
        message: "What is their ID?",
        name: "internID",
      },
      {
        type: "input",
        message: "What is their email?",
        name: "internEmail",
      },
      {
        type: "input",
        message: "What school did they go to?",
        name: "internSchool",
      },
    ])
    .then(function (response) {
      const intern = new Intern(
        response.internName,
        response.internID,
        response.internEmail,
        response.internSchool
      );

      employeeContainer.push(intern);

      if (response.internSchool !== "") {
        newEmployee();
      }
    });
}

function createHtml() {
  let employeeProfArray = [];

  let header = `<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Employee Generated Cards</title>
      </head>
      <body>
        <header>
          <div class="jumbotron font-weight-bold text-center">
            <h1 class="display-4">My Team!</h1>
            <hr class="my-4" />
          </div>
        </header>`;

  generatedHtml.push(header);

  for (let i = 0; i < employeeContainer.length; i++) {
    
    if (employeeContainer[i].officeNumber) {

        profilesArray.innerHTML =
        `            <div class="card text-center ml-4 mr-4 mb-5 border-dark">
        <div class="card-body bg-danger text-light">
            <h4 class="card-header">Name: ${employeesArray[i].name}</h4>
            <h4 class="card-title">${employeesArray[i].getRole()}</h4>
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${employeesArray[i].id}</li>
            <li class="list-group-item">Email: <a href="mailto:${employeesArray[i].email}">${employeesArray[i].email}</a></li>
            <li class="list-group-item">Phone Number: ${employeesArray[i].officeNumber}</li>
        </ul>
    </div>`

} else if (employeesArray[i].github) {

    profilesArray.innerHTML +=
        `
<div class="card text-center ml-4 mr-4 mb-5 border-dark"></div>
<div class="card-body bg-info text-light">
    <h4 class="card-header">${employeesArray[i].name}</h4>
    <h4 class="card-title">${employeesArray[i].getRole()}</h4>
</div>
<ul class="list-group list-group-flush">
<li class="list-group-item">ID: ${employeesArray[i].id}</li>
<li class="list-group-item">Email: <a href="mailto:${employeesArray[i].email}">${employeesArray[i].email}</a></li>
<li class="list-group-item"><a href="${employeesArray[i].getGithub()}" target= "_blank">GitHub</a></li>
</ul>
</div>
`

}
    }
  }
}

function managerCard(input) {
  return `${input.managerName}
    ${input.managerID}
    ${input.managerEmail}
    ${input.managerNumber}`;
}

function internCard(input) {
  return `${input.internName}
    ${input.internID}
    ${input.internEmail}
    ${input.internSchool}`;
}

function engineerCard(input) {
  return `${input.engineerName}
    ${input.engineerID}
    ${input.engineerEmail}
    ${input.engineerGithub}`;
}
