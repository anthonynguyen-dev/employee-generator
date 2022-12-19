const fs = require("fs");
const inquirer = require("inquirer");
const generateHtml = require("./utils/generateHtml");

const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Employee = require("./lib/Employee");
const { create } = require("domain");

const employeeContainer = [];
const newFile = [];

let roleOptions = ["Engineer", "intern", "Team is Built!"];

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

        type: "input",
        message: "What is their Github account username?",
        name: "engineerGithub",
      },
      {
        type: "input",
        message: "What is thier email address?",
        name: "engineerEmail",
      },
    ])

    .then(function (response) {
      const engineer = new Engineer(
        response.engineerName,
        response.engineerID,
        response.engineerGithub,
        response.engineerEmail
      );
      employeeContainer.push(engineer);

      if (response.engineer !== "") {
        newEmployee();
      }
    });
}

function internQuestions() {
  inquirer.prompt([
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
      message: "What school did they go to?",
      name: "internSchool",
    },
    {
      type: "input",
      message: "What is their email?",
      name: "internEmail",
    },
  ]);
}

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
