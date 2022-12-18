const fs = require("fs");
const inquirer = require("inquirer");
const generateHtml = require("./utils/generateHtml");

const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Employee = require("./lib/Employee");

const employeeContainer = [];
const newFile = [];

const questions = [
  {
    type: "input",
    message: "What is the name of your team member?",
    name: "member",
  },
  {
    type: "input",
    message: "What is their ID?",
    name: "ID",
  },
  {
    type: "list",
    message: "Choose a role for your team member.",
    choices: ["Manager", "Engineer", "Intern"],
    name: "role",
  },
];
