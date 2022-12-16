const Employee = require("./Employee");

class Manager extends Employee {
  constructor(nameInput, idInput, emailInput, officeNumberInput) {
    super(nameInput, idInput, emailInput);
    this.officeNumber = officeNumberInput;
  }
}

module.exports = Manager;
