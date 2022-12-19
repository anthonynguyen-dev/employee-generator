const Intern = require("../lib/Intern");

describe("Intern", () => {
  it("should return intern name", () => {
    expect(
      new Intern("First Last", 1, "email@email.com", "School Name").getName()
    ).toBe("First Last");
  });

  it("should return intern ID", () => {
    expect(
      new Intern("First Last", 1, "email@email.com", "School Name").getId()
    ).toBe(1);
  });

  it("should return intern email", () => {
    expect(
      new Intern("First Last", 1, "email@email.com", "School Name").getEmail()
    ).toBe("email@email.com");
  });

  it("should return the name of intern's school", () => {
    expect(
      new Intern("First Last", 1, "email@email.com", "School Name").getSchool()
    ).toBe("School Name");
  });

  it("should return intern", () => {
    expect(
      new Intern("First Last", 1, "email@email.com", "School Name").getRole()
    ).toBe("Intern");
  });
});
