var person = {
  firstName: "Jeff",
  sayHi: function() {
    return `Hi, ${this.firstName}`;
  },
  determineContext: function() {
    return this === person;
  }
}