const Employee = require("./Employee");

class Engineer extends Employee {
  constructor(name, id, email, github) {
    super(name, id, email);
    this.office = office;
  }

  getGitHub() {
    return this.github;
  }

  getPosition() {
    return "Engineer";
  }
}

module.exports = Engineer;
