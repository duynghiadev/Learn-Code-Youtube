abstract class Employee2 {
  constructor(private firstName: string, private lastName: string) {}

  abstract getSalary(): number; // abstract method

  // normal method
  get fullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }

  compensationStatement(): string {
    return `${this.fullName} makes ${this.getSalary()} a month`;
  }
}

// const e = new Employee3("Kunhi", "Duy Nghia Dev", "Developer"); // error ❌. Dùng kế thừa để sử dụng abstract class 👍

class FullTimeEmployee extends Employee2 {
  constructor(firstName: string, lastName: string, private salary: number) {
    super(firstName, lastName); // Dùng super để kế thừa lại cha
  }

  // Cần viết method này, vì nó được khai báo abstract ở trên
  getSalary(): number {
    // do something
    return this.salary;
  }
}

class Contractor extends Employee2 {
  constructor(
    firstName: string,
    lastName: string,
    private rate: number,
    private hours: number
  ) {
    super(firstName, lastName);
  }

  getSalary(): number {
    // do something
    return this.rate * this.hours;
  }
}

const test1 = new FullTimeEmployee("Ku Nhi", "Duy Nghia Dev", 1000);
console.log("1️⃣>>> check test1 = ", test1.getSalary());
console.log("2️⃣>>> check test1 = ", test1.compensationStatement());
console.log("3️⃣>>> check test1 = ", test1.fullName);

const e2 = new Contractor("Ku Nhi", "Duy Nghia Dev", 1000, 1000);
console.log("\n4️⃣>>>check e2 = ", e2);
