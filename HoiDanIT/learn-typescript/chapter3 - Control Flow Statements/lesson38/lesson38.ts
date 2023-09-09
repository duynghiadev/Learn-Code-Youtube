class Circle1 {
  static pi: number = 3.14; // property
  public test: number = 69; // property

  static calculateArea(radius: number) {
    // method
    return this.pi * radius * radius; // 3.14 * 10 * 10
  }
}

let t1 = new Circle1();

console.log(">>> check test = ", t1.test); // passed ✅
// console.log('>>> check pi = ', t1.pi) // error ❌

console.log(">>> check calculateArea = ", Circle1.calculateArea(10)); // passed ✅
console.log(">>> check pi = ", Circle1.pi); // passed ✅
// console.log('>>> check test = ', Circle1.test) // error ❌
