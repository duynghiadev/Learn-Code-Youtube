"use strict";
// CLASS
Object.defineProperty(exports, "__esModule", { value: true });
exports.Employee = void 0;
/**
 * public: có thể truy cập vào giá trị đó được từ bên ngoài class
 * private: không thể truy cập được từ bên ngoài class, và không thể thay đổi được
 * readonly: cái này nó ngược lại từ 2 cái bên trên. Nó có thể truy cập được từ bên ngoài class nhưng mà không thể thay đổi giá trị đấy (chỉ được đọc thôi)
 */
var Employee = /** @class */ (function () {
    function Employee(n, a, m) {
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
    Employee.prototype.print = function () {
        return "Name: ".concat(this.name, ", Age: ").concat(this.age, ", Gender Male: ").concat(this.male);
    };
    return Employee;
}());
exports.Employee = Employee;
var henry = new Employee("henry", 30, true);
console.log("henry.name:", henry.name);
console.log("henry.male:", henry.male);
console.log("henry:", henry);
console.log("henry.print():", henry.print());
console.log("=====================================");
var bob = new Employee("bob", 25, true);
var employees = [];
employees.push(henry);
employees.push(bob);
employees.forEach(function (employee) {
    return console.log(employee.name, employee.male, employee.print());
});
console.log("=====================================");
