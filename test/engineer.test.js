// SET UP THE TESTING ENVIRONMENT
const Engineer = require("../lib/Engineer");

// SET UP ENGINEER TESTING
describe("Engineer", () => {
  //TEST FOR NAME
  describe("nameTest", () => {
    it("should accept inputs for name, id, and email, and test for the return of the correct engineer name", () => {
      const obj = new Engineer("Auggie", 1, "auggie@email.com", "Okapikid");
      // SET EXPECTATION
      expect(obj.name).toEqual("Auggie");
    });
  });

  // TEST FOR ID
  describe("idTest", () => {
    it("should accept inputs for name, id, and email, and test for the return of the correct id", () => {
      const obj = new Engineer("Auggie", 1, "auggie@email.com", "Okapikid");
      // SET EXPECTATION
      expect(obj.id).toEqual("1");
    });
  });

  // TEST FOR EMAIL
  describe("emailTest", () => {
    it("should accept inputs for name, id, and email, and test for the return of the correct email", () => {
      const obj = new Engineer("Auggie", 1, "auggie@email.com", "Okapikid");
      // SET EXPECTATION
      expect(obj.email).toEqual("auggie@email.com");
    });
  });

  // TEST FOR GITHUB
  describe("gitHubTest", () => {
    it("should accept inputs for name, id, and email, and test for the return of the correct GitHub username", () => {
      const obj = new Engineer("Auggie", 1, "auggie@email.com", "Okapikid");
      // SET EXPECTATION
      expect(obj.github).toEqual("Okapikid");
    });
  });

  // TEST FOR GETNAME
  describe("getNameTest", () => {
    it("should return the correct name through the getName method", () => {
      const obj = new Engineer("Auggie", 1, "auggie@email.com", "Okapikid");
      // SET EXPECTATION
      expect(obj.getName()).toEqual("Auggie");
    });
  });

  // TEST FOR GETID
  describe("getIdTest", () => {
    it("should return the correct id through the getId method", () => {
      const obj = new Engineer("Auggie", 1, "auggie@email.com", "Okapikid");
      // SET EXPECTATION
      expect(obj.getId()).toEqual("1");
    });
  });

  // TEST FOR GETEMAIL
  describe("getEmailTest", () => {
    it("should return the correct email through the getEmail method", () => {
      const obj = new Engineer("Auggie", 1, "auggie@email.com", "Okapikid");
      // SET EXPECTATION
      expect(obj.getEmail()).toEqual("auggie@email.com");
    });
  });

  // TEST FOR GETGITHUB
  describe("getGitHubTest", () => {
    it("should return the correct GitHub username through the getGitHub method", () => {
      const obj = new Engineer("Auggie", 1, "auggie@email.com", "Okapikid");
      // SET EXPECTATION
      expect(obj.getGitHub()).toEqual("Okapikid");
    });
  });

  // TEST FOR GETTITLE
  describe("getTitleTest", () => {
    it("should return the default role of Engineer through the getTitle method", () => {
      const obj = new Engineer("Auggie", 1, "auggie@email.com", "Okapikid");
      // SET EXPECTATION
      expect(obj.getTitle()).toEqual("Engineer");
    });
  });
});
