const Employee = require("../lib/Employee");

describe("Employee", () => {
  it("should return employee name", () => {
    expect(new Employee("First Last", 1, "email@email.com").getName()).toBe(
      "First Last"
    );
  });

  it("should return employee ID", () => {
    expect(new Employee("First Last", 1, "email@email.com").getId()).toBe(1);
  });

  it("should return employee Email", () => {
    expect(new Employee("First Last", 1, "email@email.com").getEmail()).toBe(
      "email@email.com"
    );
  });

  it("should return Employee", () => {
    expect(new Employee("First Last", 1, "email@email.com").getRole()).toBe(
      "Employee"
    );
  });
});
