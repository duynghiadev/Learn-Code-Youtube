class Person4 {
  firstName: string;
  lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  getFullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }
  describe(): string {
    return `This is ${this.firstName} ${this.lastName}.`;
  }
}

//để kế thừa 1 class, chúng ta sử dụng keyword extends

class Employee2 extends Person4 {
  private jobTitle;
  constructor(firstName: string, lastName: string, jobTitle: string) {
    // call the constructor of the Person class:
    super(firstName, lastName);
    this.jobTitle = jobTitle;
  }
  //overwrite
  describe(): string {
    return `${super.describe()} from parent - describe Hoi Dan IT`;
  }
}

// let employee1 = new Employee('John','Doe','Front-end Developer');

//Employee kết thừa lại person => dùng đc method của parent
let employee1 = new Employee2("Hoi Dan IT", "Eric", "Web Developer");

console.log(employee1.getFullName());
console.log(employee1.describe());
