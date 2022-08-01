// SET UP THE TESTING ENVIRONMENT
const Employee = require("../lib/Employee");

// SET UP EMPLOYEE TESTING
describe("Employee", () => {
  //TEST FOR NAME
  describe("nameTest", () => {
    it("should accept inputs for name, id, and email, and test for the return of the correct employee name", () => {
      const obj = new Employee("Auggie", 1, "auggie@email.com");
      // SET EXPECTATION
      expect(obj.name).toEqual("Auggie");
    });
  });

  // TEST FOR ID
  describe("idTest", () => {
    it("should accept inputs for name, id, and email, and test for the return of the correct id", () => {
      const obj = new Employee("Auggie", 1, "auggie@email.com");
      // SET EXPECTATION
      expect(obj.id).toEqual("1");
    });
  });

  // TEST FOR EMAIL
  describe("emailTest", () => {
    it("should accept inputs for name, id, and email, and test for the return of the correct email", () => {
      const obj = new Employee("Auggie", 1, "auggie@email.com");
      // SET EXPECTATION
      expect(obj.email).toEqual("auggie@email.com");
    });
  });

  // TEST FOR GETNAME
  describe("getNameTest", () => {
    it("should return the correct name through the getName method", () => {
      const obj = new Employee("Auggie", 1, "auggie@email.com");
      // SET EXPECTATION
      expect(obj.getName()).toEqual("Auggie");
    });
  });

  // TEST FOR GETID
  describe("getIdTest", () => {
    it("should return the correct id through the getId method", () => {
      const obj = new Employee("Auggie", 1, "auggie@email.com");
      // SET EXPECTATION
      expect(obj.getId()).toEqual("1");
    });
  });

  // TEST FOR GETEMAIL
  describe("getEmailTest", () => {
    it("should return the correct email through the getEmail method", () => {
      const obj = new Employee("Auggie", 1, "auggie@email.com");
      // SET EXPECTATION
      expect(obj.getEmail()).toEqual("auggie@email.com");
    });
  });

  // TEST FOR GETTITLE
  describe("getTitleTest", () => {
    it("should return the default role of Employee through the getTitle method", () => {
      const obj = new Employee("Auggie", 1, "auggie@email.com");
      // SET EXPECTATION
      expect(obj.getTitle()).toEqual("Employee");
    });
  });
});
