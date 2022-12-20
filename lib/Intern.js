const Employee = require("./Employee");

class Intern extends Employee {
  constructor(nameInput, idInput, emailInput, schoolInput) {
    super(nameInput, idInput, emailInput);
    this.school = schoolInput;
  }

  getSchool() {
    return this.school;
  }
  getRole() {
    return "Intern";
  }
}

module.exports = Intern;
