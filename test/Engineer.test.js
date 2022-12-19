const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
  it("should return engineer name", () => {
    expect(
      new Engineer("First Last", 1, "email@email.com", "Github").getName()
    ).toBe("First Last");
  });

  it("should return engineer ID", () => {
    expect(
      new Engineer("First Last", 1, "email@email.com", "Github").getId()
    ).toBe(1);
  });

  it("should return engineer Email", () => {
    expect(
      new Engineer("First Last", 1, "email@email.com", "Github").getEmail()
    ).toBe("email@email.com");
  });

  it("should return engineer Github", () => {
    expect(
      new Engineer("First Last", 1, "email@email.com", "Github").getGithub()
    ).toBe("Github");
  });

  it("should return engineer", () => {
    expect(
      new Engineer("First Last", 1, "email@email.com", "Github").getRole()
    ).toBe("Engineer");
  });
});
