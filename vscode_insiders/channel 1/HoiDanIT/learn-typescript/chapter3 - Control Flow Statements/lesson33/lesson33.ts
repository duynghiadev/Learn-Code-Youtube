class Person_1 {
  public ssn: string;
  firstName: string;
  lastName: string;

  constructor(ssn: string, firstName: string, lastName: string) {
    this.ssn = ssn;
    this.firstName = firstName;
    this.lastName = lastName;
  }

  getFullName(): string {
    return `calling method: ${this.ssn} ${this.firstName} ${this.lastName}`;
  }
}

let hoidanit_1 = new Person_1("123", "Hoi Dan IT", " Eric");
console.log(">> check class:", hoidanit_1.getFullName());
