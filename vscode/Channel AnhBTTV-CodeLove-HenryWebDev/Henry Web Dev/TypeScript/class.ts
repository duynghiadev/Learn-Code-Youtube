// CLASS

/**
 * public: có thể truy cập vào giá trị đó được từ bên ngoài class
 * private: không thể truy cập được từ bên ngoài class, và không thể thay đổi được
 * readonly: cái này nó ngược lại từ 2 cái bên trên. Nó có thể truy cập được từ bên ngoài class nhưng mà không thể thay đổi giá trị đấy (chỉ được đọc thôi)
 */

export class Employee {
  // 1:
  public name: string;
  private age: number;
  readonly male: boolean;

  constructor(n: string, a: number, m: boolean) {
    this.name = n;
    this.age = a;
    this.male = m;
  }

  // 2:
  // constructor(
  //   public name: string,
  //   private age: number,
  //   readonly male: boolean
  // ) {}

  print() {
    return `Name: ${this.name}, Age: ${this.age}, Gender Male: ${this.male}`;
  }
}

const henry = new Employee("henry", 30, true);
console.log("henry.name:", henry.name);
console.log("henry.male:", henry.male);
console.log("henry:", henry);
console.log("henry.print():", henry.print());

console.log("=====================================");

const bob = new Employee("bob", 25, true);
let employees: Employee[] = [];

employees.push(henry);
employees.push(bob);

employees.forEach((employee) =>
  console.log(employee.name, employee.male, employee.print())
);

console.log("=====================================");
