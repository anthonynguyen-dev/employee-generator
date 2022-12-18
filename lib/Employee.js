class Employee {
  constructor(nameInput, idInput, emailInput) {
    this.name = nameInput;
    this.id = idInput;
    this.email = emailInput;
  }

  getName() {
    return this.name;
  }

  getId() {
    return this.id;
  }

  getEmail() {
    return this.email;
  }

  getRole() {
    return "Employee";
  }
}

// var random = new Employee("Andres", "123");
// console.log(random);
// console.log(random.getName());

module.exports = Employee;
