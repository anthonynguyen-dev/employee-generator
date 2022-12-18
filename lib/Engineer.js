const Employee = require("./Employee");

class Engineer extends Employee {
  constructor(nameInput, idInput, emailInput, githubInput) {
    super(nameInput, idInput, emailInput);
    this.github = githubInput;
  }
  getRole() {
    return "Engineer";
  }
  getGithub() {
    return this.github;
  }
}

module.exports = Engineer;
