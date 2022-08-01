// SET UP THE TESTING ENVIRONMENT
const Intern = require("../lib/Intern");

// SET UP Intern TESTING
describe("Intern", () => {
  //TEST FOR NAME
  describe("nameTest", () => {
    it("should accept inputs for name, id, and email, and test for the return of the correct Intern name", () => {
      const obj = new Intern(
        "Auggie",
        1,
        "auggie@email.com",
        "School University"
      );
      // SET EXPECTATION
      expect(obj.name).toEqual("Auggie");
    });
  });

  // TEST FOR ID
  describe("idTest", () => {
    it("should accept inputs for name, id, and email, and test for the return of the correct id", () => {
      const obj = new Intern(
        "Auggie",
        1,
        "auggie@email.com",
        "School University"
      );
      // SET EXPECTATION
      expect(obj.id).toEqual("1");
    });
  });

  // TEST FOR EMAIL
  describe("emailTest", () => {
    it("should accept inputs for name, id, and email, and test for the return of the correct email", () => {
      const obj = new Intern(
        "Auggie",
        1,
        "auggie@email.com",
        "School University"
      );
      // SET EXPECTATION
      expect(obj.email).toEqual("auggie@email.com");
    });
  });

  // TEST FOR OFFICE
  describe("officeTest", () => {
    it("should accept inputs for name, id, and email, and test for the return of the correct office number", () => {
      const obj = new Intern(
        "Auggie",
        1,
        "auggie@email.com",
        "School University"
      );
      // SET EXPECTATION
      expect(obj.office).toEqual("School University");
    });
  });

  // TEST FOR GETNAME
  describe("getNameTest", () => {
    it("should return the correct name through the getName method", () => {
      const obj = new Intern(
        "Auggie",
        1,
        "auggie@email.com",
        "School University"
      );
      // SET EXPECTATION
      expect(obj.getName()).toEqual("Auggie");
    });
  });

  // TEST FOR GETID
  describe("getIdTest", () => {
    it("should return the correct id through the getId method", () => {
      const obj = new Intern(
        "Auggie",
        1,
        "auggie@email.com",
        "School University"
      );
      // SET EXPECTATION
      expect(obj.getId()).toEqual("1");
    });
  });

  // TEST FOR GETEMAIL
  describe("getEmailTest", () => {
    it("should return the correct email through the getEmail method", () => {
      const obj = new Intern(
        "Auggie",
        1,
        "auggie@email.com",
        "School University"
      );
      // SET EXPECTATION
      expect(obj.getEmail()).toEqual("auggie@email.com");
    });
  });

  // TEST FOR GETSCHOOL
  describe("getSchoolTest", () => {
    it("should return the correct office number username through the getSchool method", () => {
      const obj = new Intern(
        "Auggie",
        1,
        "auggie@email.com",
        "School University"
      );
      // SET EXPECTATION
      expect(obj.getSchool()).toEqual("School University");
    });
  });

  // TEST FOR GETTITLE
  describe("getTitleTest", () => {
    it("should return the default role of Intern through the getTitle method", () => {
      const obj = new Intern(
        "Auggie",
        1,
        "auggie@email.com",
        "School University"
      );
      // SET EXPECTATION
      expect(obj.getTitle()).toEqual("Intern");
    });
  });
});
