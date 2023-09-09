class Employee_1 {
  public empName: string;
  protected empCode: number;

  constructor(name: string, code: number) {
    this.empName = name;
    this.empCode = code;
  }
}

class SalesEmployee_1 extends Employee_1 {
  private department: string;

  constructor(name: string, code: number, department: string) {
    super(name, code);
    this.department = department;
  }
}

let emp_1 = new SalesEmployee_1("John Smith", 123, "Sales");
// emp_1.empCode; //Compiler Error
